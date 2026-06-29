#!/usr/bin/env node
/**
 * AlwaysYou Template Studio — stdio MCP server
 *
 * Exposes the Studio's file operations as MCP tools so Claude can read and
 * write template files (schema, demo, manifest, index.tsx, etc.) directly
 * during template creation — no browser needed.
 *
 * Usage (add to .claude/settings.json or project .mcp.json):
 *
 *   {
 *     "mcpServers": {
 *       "template-studio": {
 *         "command": "npx",
 *         "args": ["alwaysyou", "mcp", "--dir", "./templates/my-template"]
 *       }
 *     }
 *   }
 *
 * Or run directly:
 *   node scripts/mcp.mjs --dir ./templates/my-template
 */
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync, mkdirSync } from 'node:fs'
import { join, resolve, relative, dirname } from 'node:path'
import { createInterface } from 'node:readline'

// ── Args ─────────────────────────────────────────────────────────────────────

export async function run(dir) {
  const templateDir = resolve(dir)
  const slug = templateDir.split('/').pop() || 'template'

  // ── Type generation (mirrors studio.ts) ────────────────────────────────────

  const TYPE_MAP = {
    text: 'string', textarea: 'string', date: 'string', number: 'number',
    image: 'string', image_array: 'string[]', video: 'string', video_array: 'string[]',
    audio: '{ url: string }', color: 'string', toggle: 'boolean',
    quiz: 'QuizQuestion[]', select: 'string',
  }

  function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1).replace(/-(\w)/g, (_, c) => c.toUpperCase())
  }

  function isValidId(s) {
    return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(s)
  }

  function fieldTsType(field, parent, ifaces) {
    if (field.type === 'select' && field.options?.length) {
      return field.options.map(o => `'${o.replace(/'/g, "\\'")}'`).join(' | ')
    }
    if (field.type === 'group' && field.fields) {
      const name = parent + capitalize(field.key)
      buildInterface(field.fields, name, ifaces, true)
      return name
    }
    if (field.type === 'group_array' && field.fields) {
      const name = parent + capitalize(field.key) + 'Item'
      buildInterface(field.fields, name, ifaces, true)
      return `${name}[]`
    }
    return TYPE_MAP[field.type] || 'unknown'
  }

  function buildInterface(fields, name, ifaces, allReq = false) {
    const lines = []
    for (const f of fields) {
      if (!f.key) continue
      const ts = fieldTsType(f, name, ifaces)
      const opt = !allReq && !f.required ? '?' : ''
      const key = isValidId(f.key) ? f.key : `'${f.key}'`
      if (f.label) lines.push(`/** ${f.label} */`)
      lines.push(`${key}${opt}: ${ts}`)
    }
    ifaces.push({ name, lines })
  }

  function generateQuizType(quizFields) {
    const merged = {}
    for (const f of quizFields) {
      if (f.config) {
        for (const [k, v] of Object.entries(f.config)) { if (v) merged[k] = true }
      }
    }
    let t = `export interface QuizQuestion {\n`
    t += `  id: string\n  text: string\n  options: string[]\n  correctIndex: number\n`
    if (merged.allowMultipleCorrect) t += `  correctIndices?: number[]\n`
    if (merged.allowHints) t += `  hint?: string\n`
    if (merged.allowExplanations) t += `  explanation?: string\n`
    if (merged.allowImages) t += `  image?: string\n`
    if (merged.allowPoints) t += `  points?: number\n`
    t += `}\n\n`
    return t
  }

  function generateTypes(schema) {
    const allFields = schema.sections.flatMap(s => s.fields ?? [])
    if (allFields.length === 0) return ''
    const ifaces = []
    const quizFields = allFields.filter(f => f.type === 'quiz')
    const needsQuiz = quizFields.length > 0 || allFields.some(f => (f.fields ?? []).some(sf => sf.type === 'quiz'))
    buildInterface(allFields, 'TemplateFields', ifaces)
    let out = `// Auto-generated from schema.json — do not edit.\n// Regenerate: npx alwaysyou generate-types\n\n`
    out += `import type { PlatformContext } from '@alwaysyou/templates'\n\n`
    if (needsQuiz) out += generateQuizType(quizFields)
    for (const iface of ifaces) {
      out += `export interface ${iface.name} {\n`
      out += iface.lines.map(l => '  ' + l).join('\n')
      out += `\n}\n\n`
    }
    out += `export type TypedTemplateData = TemplateFields & PlatformContext\n`
    return out
  }

  // ── Tool helpers ──────────────────────────────────────────────────────────

  function safeReadJson(fp) {
    try { return JSON.parse(readFileSync(fp, 'utf-8')) } catch { return null }
  }

  function listFilesRecursive(dir, base = dir) {
    const entries = []
    for (const name of readdirSync(dir)) {
      if (name.startsWith('.') || name === 'node_modules') continue
      const full = join(dir, name)
      const rel = relative(base, full)
      if (statSync(full).isDirectory()) {
        entries.push(...listFilesRecursive(full, base))
      } else {
        entries.push(rel)
      }
    }
    return entries
  }

  function safeRelative(base, target) {
    const rel = relative(resolve(base), resolve(target))
    return !rel.startsWith('..') && !rel.startsWith('/')
  }

  // ── Tool definitions ──────────────────────────────────────────────────────

  const TOOLS = [
    {
      name: 'studio_load',
      description: 'Load the template\'s schema.json, demo.json, and manifest.json. Returns null for files that don\'t exist yet.',
      inputSchema: {
        type: 'object',
        properties: {},
        required: [],
      },
    },
    {
      name: 'studio_save',
      description: 'Save schema.json, demo.json, and/or manifest.json for the template. Automatically regenerates data.d.ts when schema is saved.',
      inputSchema: {
        type: 'object',
        properties: {
          schema: { type: 'object', description: 'Schema JSON (must have a sections array)' },
          demo: { type: 'object', description: 'Demo data JSON' },
          manifest: { type: 'object', description: 'Manifest JSON (title, description, etc.)' },
        },
      },
    },
    {
      name: 'studio_read_file',
      description: 'Read any file in the template directory (e.g. index.tsx, styles.css, README.md).',
      inputSchema: {
        type: 'object',
        properties: {
          path: { type: 'string', description: 'Relative path within the template directory (e.g. "index.tsx")' },
        },
        required: ['path'],
      },
    },
    {
      name: 'studio_write_file',
      description: 'Write or create a file in the template directory. Creates parent directories as needed.',
      inputSchema: {
        type: 'object',
        properties: {
          path: { type: 'string', description: 'Relative path within the template directory (e.g. "index.tsx")' },
          content: { type: 'string', description: 'File content to write' },
        },
        required: ['path', 'content'],
      },
    },
    {
      name: 'studio_list_files',
      description: 'List all files in the template directory (excludes node_modules and dot-files).',
      inputSchema: {
        type: 'object',
        properties: {},
        required: [],
      },
    },
    {
      name: 'studio_generate_types',
      description: 'Generate (or regenerate) data.d.ts from the current schema.json. Returns the generated TypeScript types as a string.',
      inputSchema: {
        type: 'object',
        properties: {},
        required: [],
      },
    },
  ]

  // ── Tool executor ─────────────────────────────────────────────────────────

  function callTool(name, input) {
    switch (name) {
      case 'studio_load': {
        const result = {}
        for (const key of ['schema', 'demo', 'manifest']) {
          result[key] = safeReadJson(join(templateDir, key + '.json'))
        }
        const lines = [
          `Template directory: ${templateDir}`,
          `slug: ${slug}`,
          '',
          `schema.json: ${result.schema ? 'loaded' : 'not found'}`,
          `demo.json:   ${result.demo ? 'loaded' : 'not found'}`,
          `manifest.json: ${result.manifest ? 'loaded' : 'not found'}`,
        ]
        return {
          content: [
            { type: 'text', text: lines.join('\n') },
            { type: 'text', text: JSON.stringify(result, null, 2) },
          ],
        }
      }

      case 'studio_save': {
        if (!input || typeof input !== 'object') {
          return { isError: true, content: [{ type: 'text', text: 'No payload provided.' }] }
        }
        const errors = []
        if (input.schema) {
          if (!Array.isArray(input.schema.sections)) errors.push('schema.sections must be an array')
        }
        if (errors.length > 0) {
          return { isError: true, content: [{ type: 'text', text: errors.join('\n') }] }
        }

        const written = []
        for (const key of ['schema', 'demo', 'manifest']) {
          if (input[key]) {
            writeFileSync(join(templateDir, key + '.json'), JSON.stringify(input[key], null, 2) + '\n')
            written.push(key + '.json')
          }
        }

        let typesInfo = ''
        if (input.schema && Array.isArray(input.schema.sections)) {
          try {
            const types = generateTypes(input.schema)
            if (types) {
              writeFileSync(join(templateDir, 'data.d.ts'), types)
              written.push('data.d.ts')
              typesInfo = '\nTypes regenerated successfully.'
            }
          } catch (e) {
            typesInfo = `\nType generation failed: ${e.message}`
          }
        }

        return {
          content: [{ type: 'text', text: `Written: ${written.join(', ')}${typesInfo}` }],
        }
      }

      case 'studio_read_file': {
        const rel = input?.path
        if (!rel) return { isError: true, content: [{ type: 'text', text: 'path is required' }] }
        const full = join(templateDir, rel)
        if (!safeRelative(templateDir, full)) {
          return { isError: true, content: [{ type: 'text', text: 'Path escapes template directory' }] }
        }
        if (!existsSync(full)) {
          return { isError: true, content: [{ type: 'text', text: `File not found: ${rel}` }] }
        }
        try {
          const content = readFileSync(full, 'utf-8')
          return { content: [{ type: 'text', text: content }] }
        } catch (e) {
          return { isError: true, content: [{ type: 'text', text: String(e) }] }
        }
      }

      case 'studio_write_file': {
        const rel = input?.path
        const fileContent = input?.content
        if (!rel) return { isError: true, content: [{ type: 'text', text: 'path is required' }] }
        if (fileContent == null) return { isError: true, content: [{ type: 'text', text: 'content is required' }] }
        const full = join(templateDir, rel)
        if (!safeRelative(templateDir, full)) {
          return { isError: true, content: [{ type: 'text', text: 'Path escapes template directory' }] }
        }
        try {
          mkdirSync(dirname(full), { recursive: true })
          writeFileSync(full, fileContent, 'utf-8')
          return { content: [{ type: 'text', text: `Written: ${rel} (${fileContent.length} bytes)` }] }
        } catch (e) {
          return { isError: true, content: [{ type: 'text', text: String(e) }] }
        }
      }

      case 'studio_list_files': {
        if (!existsSync(templateDir)) {
          return { isError: true, content: [{ type: 'text', text: `Template directory not found: ${templateDir}` }] }
        }
        const files = listFilesRecursive(templateDir)
        return {
          content: [{ type: 'text', text: `Files in ${templateDir}:\n${files.join('\n')}` }],
        }
      }

      case 'studio_generate_types': {
        const schemaPath = join(templateDir, 'schema.json')
        if (!existsSync(schemaPath)) {
          return { isError: true, content: [{ type: 'text', text: 'schema.json not found' }] }
        }
        let schema
        try {
          schema = JSON.parse(readFileSync(schemaPath, 'utf-8'))
        } catch (e) {
          return { isError: true, content: [{ type: 'text', text: `Failed to parse schema.json: ${e.message}` }] }
        }
        if (!Array.isArray(schema.sections)) {
          return { isError: true, content: [{ type: 'text', text: 'schema.json missing sections array' }] }
        }
        try {
          const types = generateTypes(schema)
          if (!types) return { isError: true, content: [{ type: 'text', text: 'No fields in schema' }] }
          writeFileSync(join(templateDir, 'data.d.ts'), types)
          return { content: [{ type: 'text', text: types }] }
        } catch (e) {
          return { isError: true, content: [{ type: 'text', text: String(e) }] }
        }
      }

      default:
        return { isError: true, content: [{ type: 'text', text: `Unknown tool: ${name}` }] }
    }
  }

  // ── JSON-RPC dispatcher ───────────────────────────────────────────────────

  function handleMessage(msg) {
    // Notifications have no id — don't respond
    if (msg.method === 'notifications/initialized') return null

    const { id, method, params } = msg

    if (method === 'initialize') {
      return {
        jsonrpc: '2.0', id,
        result: {
          protocolVersion: '2024-11-05',
          capabilities: { tools: {} },
          serverInfo: { name: 'template-studio', version: '1.0.0' },
          instructions: `You are connected to the AlwaysYou Template Studio for template "${slug}" at ${templateDir}. Use the studio_* tools to read and write template files, schema, demo data, and manifest during template creation.`,
        },
      }
    }

    if (method === 'tools/list') {
      return { jsonrpc: '2.0', id, result: { tools: TOOLS } }
    }

    if (method === 'tools/call') {
      const toolName = params?.name
      const toolInput = params?.arguments ?? {}
      const result = callTool(toolName, toolInput)
      return { jsonrpc: '2.0', id, result }
    }

    if (method === 'ping') {
      return { jsonrpc: '2.0', id, result: {} }
    }

    return {
      jsonrpc: '2.0', id,
      error: { code: -32601, message: `Method not found: ${method}` },
    }
  }

  // ── stdio transport ───────────────────────────────────────────────────────

  const rl = createInterface({ input: process.stdin, terminal: false })

  rl.on('line', (line) => {
    const trimmed = line.trim()
    if (!trimmed) return
    let msg
    try {
      msg = JSON.parse(trimmed)
    } catch {
      const err = { jsonrpc: '2.0', id: null, error: { code: -32700, message: 'Parse error' } }
      process.stdout.write(JSON.stringify(err) + '\n')
      return
    }

    const response = handleMessage(msg)
    if (response !== null) {
      process.stdout.write(JSON.stringify(response) + '\n')
    }
  })

  rl.on('close', () => process.exit(0))
  process.on('SIGINT', () => process.exit(0))
  process.on('SIGTERM', () => process.exit(0))

  // Keep alive — we read from stdin until the client disconnects
  return new Promise(() => {})
}
