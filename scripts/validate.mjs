import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs'
import { join, relative, resolve } from 'node:path'

const VALID_FIELD_TYPES = new Set([
  'text', 'textarea', 'date', 'number',
  'image', 'image_array', 'video',
  'audio',
  'color', 'select', 'toggle',
  'group', 'group_array',
  'quiz',
])

const FORBIDDEN_IMPORT_PREFIXES = ['@/lib/', '@/components/', '@/hooks/', '@/utils/', '../../../']
const FORBIDDEN_APIS = ['localStorage', 'sessionStorage', 'document.cookie', 'document.write', 'window.location.href =']

const GREEN = '\x1b[32m'
const RED = '\x1b[31m'
const YELLOW = '\x1b[33m'
const DIM = '\x1b[2m'
const RESET = '\x1b[0m'

function pass(msg) { console.log(`  ${GREEN}✓${RESET} ${msg}`) }
function fail(msg, detail) {
  console.log(`  ${RED}✗${RESET} ${msg}`)
  if (detail) console.log(`  ${DIM}│${RESET} ${detail}`)
}
function warn(msg, detail) {
  console.log(`  ${YELLOW}⚠${RESET} ${msg}`)
  if (detail) console.log(`  ${DIM}│${RESET} ${detail}`)
}

function collectFiles(dir, base) {
  base = base || dir
  const results = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules' || entry.name === '__MACOSX') continue
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      results.push(...collectFiles(full, base))
    } else {
      results.push({ path: full, relative: relative(base, full) })
    }
  }
  return results
}

function findLineNumber(source, needle) {
  const idx = source.indexOf(needle)
  if (idx === -1) return null
  return source.substring(0, idx).split('\n').length
}

function validateFields(fields) {
  const bad = []
  const invalidTypes = []
  for (const field of fields) {
    if (!field.key || !field.label || !field.type) {
      bad.push(field.key || '(unnamed)')
      continue
    }
    if (!VALID_FIELD_TYPES.has(field.type)) {
      invalidTypes.push({ key: field.key, type: field.type })
    }
    if ((field.type === 'group' || field.type === 'group_array') && Array.isArray(field.fields)) {
      const sub = validateFields(field.fields)
      bad.push(...sub.bad)
      invalidTypes.push(...sub.invalidTypes)
    }
  }
  return { bad, invalidTypes }
}

function collectSchemaKeys(sections) {
  const keys = []
  for (const section of sections) {
    if (!Array.isArray(section.fields)) continue
    for (const field of section.fields) {
      if (field.key) keys.push(field.key)
    }
  }
  return keys
}

export async function run(dir) {
  const templateDir = resolve(dir)
  let errors = 0
  let warnings = 0

  console.log(`\n${GREEN}AlwaysYou Template Validator${RESET}\n`)
  console.log(`  Directory: ${templateDir}\n`)

  // --- Required files ---
  const indexPath = join(templateDir, 'index.tsx')
  const schemaPath = join(templateDir, 'schema.json')
  const demoPath = join(templateDir, 'demo.json')

  if (!existsSync(templateDir) || !statSync(templateDir).isDirectory()) {
    fail(`Template directory not found: ${templateDir}`)
    console.log(`\n  ${DIM}Make sure you have a template/ folder, or use --dir <path>${RESET}\n`)
    return 1
  }

  if (!existsSync(indexPath)) {
    fail('index.tsx — missing', 'Every template needs an index.tsx as its entry point.')
    errors++
  }
  if (!existsSync(schemaPath)) {
    fail('schema.json — missing', 'Every template needs a schema.json to define the buyer form.')
    errors++
  }
  if (errors > 0) {
    console.log(`\n  ${RED}${errors} error(s).${RESET} Create the missing files and try again.\n`)
    return 1
  }

  // --- index.tsx checks ---
  const indexSource = readFileSync(indexPath, 'utf-8')

  const isClient = indexSource.trimStart().startsWith("'use client'") || indexSource.trimStart().startsWith('"use client"')
  if (isClient) {
    pass("index.tsx — 'use client' present")
  } else {
    fail("index.tsx — missing 'use client'", "Add 'use client' as the very first line of index.tsx.")
    errors++
  }

  const hasDefaultExport =
    indexSource.includes('export default function') ||
    indexSource.includes('export default class') ||
    /export\s+\{\s*\w+\s+as\s+default\s*\}/.test(indexSource) ||
    /export\s+default\s+\w+/.test(indexSource)
  if (hasDefaultExport) {
    pass('index.tsx — default export found')
  } else {
    fail('index.tsx — no default export', 'Add export default function MyTemplate() { ... }')
    errors++
  }

  const handlesPreview =
    indexSource.includes('_previewMode') ||
    indexSource.includes('useAlwaysYou') ||
    indexSource.includes('isPreview')
  if (handlesPreview) {
    pass('index.tsx — preview mode handling detected')
  } else {
    warn('index.tsx — no preview mode handling', 'Consider using useAlwaysYou() to read isPreview and skip lock screens in preview.')
    warnings++
  }

  // --- schema.json checks ---
  let schema
  try {
    schema = JSON.parse(readFileSync(schemaPath, 'utf-8'))
    pass('schema.json — valid JSON')
  } catch (e) {
    fail('schema.json — invalid JSON', e.message)
    errors++
    return reportAndExit(errors, warnings)
  }

  if (!Array.isArray(schema.sections)) {
    fail('schema.json — missing sections array', 'Add a top-level "sections": [...] array.')
    errors++
    return reportAndExit(errors, warnings)
  }

  const badSections = schema.sections.filter(s => !s.key || !s.label || !Array.isArray(s.fields))
  if (badSections.length > 0) {
    fail(`schema.json — ${badSections.length} section(s) missing key, label, or fields`,
      `Fix: ${badSections.map(s => s.key || '(unnamed)').join(', ')}`)
    errors++
    return reportAndExit(errors, warnings)
  }

  const allFields = schema.sections.flatMap(s => s.fields)
  const { bad, invalidTypes } = validateFields(allFields)
  if (bad.length > 0) {
    fail(`schema.json — ${bad.length} field(s) missing key, label, or type`, `Fix: ${bad.join(', ')}`)
    errors++
  } else if (invalidTypes.length > 0) {
    fail(`schema.json — invalid field type(s)`,
      invalidTypes.map(t => `${t.key}: "${t.type}" is not a valid type`).join('\n  '))
    errors++
  } else {
    pass(`schema.json — ${schema.sections.length} section(s), ${allFields.length} field(s), all types valid`)
  }

  // --- demo.json coverage ---
  if (existsSync(demoPath)) {
    try {
      const demo = JSON.parse(readFileSync(demoPath, 'utf-8'))
      const schemaKeys = collectSchemaKeys(schema.sections)
      const missing = schemaKeys.filter(k => !(k in demo))
      if (missing.length === 0) {
        pass('demo.json — covers all schema fields')
      } else {
        warn(`demo.json — missing ${missing.length} key(s): ${missing.join(', ')}`,
          'Add these keys to demo.json for a complete preview.')
        warnings++
      }
    } catch (e) {
      fail('demo.json — invalid JSON', e.message)
      errors++
    }
  } else {
    warn('demo.json — not found',
      'Create demo.json with sample data for each schema field. Without it, previews use generic placeholders.')
    warnings++
  }

  // --- Forbidden imports + APIs across all source files ---
  const sourceFiles = collectFiles(templateDir).filter(
    f => (f.relative.endsWith('.tsx') || f.relative.endsWith('.ts')) && !f.relative.endsWith('.d.ts')
  )

  const importFindings = []
  const apiFindings = []
  const nextFindings = []

  for (const file of sourceFiles) {
    const source = readFileSync(file.path, 'utf-8')

    for (const prefix of FORBIDDEN_IMPORT_PREFIXES) {
      const needle = `from '${prefix}`
      const needle2 = `from "${prefix}`
      for (const n of [needle, needle2]) {
        const line = findLineNumber(source, n)
        if (line !== null) {
          importFindings.push({ file: file.relative, line, prefix })
        }
      }
    }

    for (const api of FORBIDDEN_APIS) {
      const line = findLineNumber(source, api)
      if (line !== null) {
        apiFindings.push({ file: file.relative, line, api })
      }
    }

    const nextRe = /from\s+['"]next\/([^'"]+)['"]/g
    let m
    while ((m = nextRe.exec(source)) !== null) {
      if (m[1] === 'image') continue
      const line = source.substring(0, m.index).split('\n').length
      nextFindings.push({ file: file.relative, line, module: m[1] })
    }
  }

  if (importFindings.length === 0) {
    pass('No forbidden imports')
  } else {
    for (const f of importFindings) {
      fail(`${f.file}:${f.line} — forbidden import from '${f.prefix}...'`,
        'Templates must be self-contained. Remove this import.')
    }
    errors += importFindings.length
  }

  if (nextFindings.length === 0) {
    pass('No Next.js imports')
  } else {
    for (const f of nextFindings) {
      fail(`${f.file}:${f.line} — next/${f.module} is not available in the template runtime`,
        'Use plain <img> instead of next/image, or a React-only alternative.')
    }
    errors += nextFindings.length
  }

  if (apiFindings.length === 0) {
    pass('No browser-restricted APIs')
  } else {
    for (const f of apiFindings) {
      warn(`${f.file}:${f.line} — uses ${f.api}`,
        'This API may not work in the template runtime.')
    }
    warnings += apiFindings.length
  }

  return reportAndExit(errors, warnings)
}

function reportAndExit(errors, warnings) {
  console.log('')
  if (errors === 0 && warnings === 0) {
    console.log(`  ${GREEN}All checks passed.${RESET} Your template is ready to pack and upload.\n`)
    return 0
  }
  if (errors === 0) {
    console.log(`  ${GREEN}Passed${RESET} with ${YELLOW}${warnings} warning(s)${RESET}. Your template will upload, but consider fixing the warnings.\n`)
    return 0
  }
  console.log(`  ${RED}${errors} error(s)${RESET}${warnings > 0 ? `, ${YELLOW}${warnings} warning(s)${RESET}` : ''}. Fix errors before uploading.\n`)
  return 1
}
