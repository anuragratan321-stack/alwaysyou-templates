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

function generateInterface(fields, name, interfaces, allRequired = false) {
  const lines = []
  for (const field of fields) {
    const tsType = generateFieldType(field, name, interfaces)
    const optional = !allRequired && !field.required ? '?' : ''
    if (field.label) {
      lines.push(`/** ${field.label} */`)
    }
    lines.push(`${field.key}${optional}: ${tsType}`)
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
  const needsQuiz = allFields.some(f => f.type === 'quiz' || hasNestedType(f, 'quiz'))

  generateInterface(allFields, 'TemplateFields', interfaces)

  // Build output
  const imports = ['PlatformContext']
  if (needsQuiz) imports.push('QuizQuestion')

  let output = `// Auto-generated from schema.json — do not edit.\n`
  output += `// Regenerate: npx alwaysyou generate-types\n\n`
  output += `import type { ${imports.join(', ')} } from '@alwaysyou/templates'\n\n`

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
