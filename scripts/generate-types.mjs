import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join, resolve } from 'node:path'

const GREEN = '\x1b[32m'
const RED = '\x1b[31m'
const DIM = '\x1b[2m'
const RESET = '\x1b[0m'

const TYPE_MAP = {
  text: 'string',
  textarea: 'string',
  date: 'string',
  number: 'number',
  image: 'string',
  image_array: 'string[]',
  video: 'string',
  video_array: 'string[]',
  audio: '{ url: string }',
  color: 'string',
  toggle: 'boolean',
  quiz: 'QuizQuestion[]',
}

function escapeQuote(s) {
  return s.replace(/'/g, "\\'")
}

function indent(str, level) {
  const pad = '  '.repeat(level)
  return str.split('\n').map(line => pad + line).join('\n')
}

function generateFieldType(field, interfaceName, interfaces) {
  if (field.type === 'select' && Array.isArray(field.options) && field.options.length > 0) {
    return field.options.map(o => `'${escapeQuote(String(o))}'`).join(' | ')
  }

  if (field.type === 'group' && Array.isArray(field.fields)) {
    const subName = interfaceName + capitalize(field.key)
    generateInterface(field.fields, subName, interfaces, true)
    return subName
  }

  if (field.type === 'group_array' && Array.isArray(field.fields)) {
    const subName = interfaceName + capitalize(field.key) + 'Item'
    generateInterface(field.fields, subName, interfaces, true)
    return `${subName}[]`
  }

  return TYPE_MAP[field.type] || 'unknown'
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1).replace(/-(\w)/g, (_, c) => c.toUpperCase())
}

function isValidIdentifier(s) {
  return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(s)
}

function generateInterface(fields, name, interfaces, allRequired = false) {
  const lines = []
  for (const field of fields) {
    if (!field.key) continue
    const tsType = generateFieldType(field, name, interfaces)
    const optional = !allRequired && !field.required ? '?' : ''
    const key = isValidIdentifier(field.key) ? field.key : `'${escapeQuote(field.key)}'`
    if (field.label) {
      lines.push(`/** ${field.label} */`)
    }
    lines.push(`${key}${optional}: ${tsType}`)
  }
  interfaces.push({ name, lines })
}

export async function run(dir) {
  const templateDir = resolve(dir)
  const schemaPath = join(templateDir, 'schema.json')
  const outputPath = join(templateDir, 'data.d.ts')

  console.log(`\n${GREEN}AlwaysYou Type Generator${RESET}\n`)

  if (!existsSync(schemaPath)) {
    console.error(`  ${RED}✗${RESET} schema.json not found at ${schemaPath}\n`)
    return 1
  }

  let schema
  try {
    schema = JSON.parse(readFileSync(schemaPath, 'utf-8'))
  } catch (e) {
    console.error(`  ${RED}✗${RESET} Failed to parse schema.json: ${e.message}\n`)
    return 1
  }

  if (!Array.isArray(schema.sections)) {
    console.error(`  ${RED}✗${RESET} schema.json has no sections array\n`)
    return 1
  }

  const allFields = schema.sections.flatMap(s => Array.isArray(s.fields) ? s.fields : [])
  if (allFields.length === 0) {
    console.error(`  ${RED}✗${RESET} schema.json has no fields\n`)
    return 1
  }

  const interfaces = []
  const quizFields = allFields.filter(f => f.type === 'quiz')
  const needsQuiz = quizFields.length > 0 || allFields.some(f => hasNestedType(f, 'quiz'))

  generateInterface(allFields, 'TemplateFields', interfaces)

  // Build output
  const imports = ['PlatformContext']

  let output = `// Auto-generated from schema.json — do not edit.\n`
  output += `// Regenerate: npx alwaysyou generate-types\n\n`
  output += `import type { ${imports.join(', ')} } from '@alwaysyou/templates'\n\n`

  if (needsQuiz) {
    output += generateQuizType(quizFields)
  }

  for (const iface of interfaces) {
    output += `export interface ${iface.name} {\n`
    output += indent(iface.lines.join('\n'), 1)
    output += `\n}\n\n`
  }

  output += `export type TypedTemplateData = TemplateFields & PlatformContext\n`

  writeFileSync(outputPath, output)

  console.log(`  ${GREEN}✓${RESET} Generated ${outputPath}`)
  console.log(`  ${DIM}${allFields.length} field(s), ${interfaces.length} interface(s)${RESET}`)
  console.log(`\n  Usage in your template:\n`)
  console.log(`  ${DIM}import type { TypedTemplateData } from './data'${RESET}`)
  console.log(`  ${DIM}const { data } = useAlwaysYou<TypedTemplateData>()${RESET}\n`)
  return 0
}

function hasNestedType(field, type) {
  if (field.type === type) return true
  if (Array.isArray(field.fields)) {
    return field.fields.some(f => hasNestedType(f, type))
  }
  return false
}

function generateQuizType(quizFields) {
  const config = {}
  for (const f of quizFields) {
    if (f.config) {
      for (const [k, v] of Object.entries(f.config)) {
        if (v) config[k] = true
      }
    }
  }

  let type = `export interface QuizQuestion {\n`
  type += `  id: string\n`
  type += `  text: string\n`
  type += `  options: string[]\n`
  type += `  correctIndex: number\n`
  if (config.allowMultipleCorrect) type += `  correctIndices?: number[]\n`
  if (config.allowHints) type += `  hint?: string\n`
  if (config.allowExplanations) type += `  explanation?: string\n`
  if (config.allowImages) type += `  image?: string\n`
  if (config.allowPoints) type += `  points?: number\n`
  type += `}\n\n`
  return type
}
