import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from 'node:fs'
import { join, relative, basename, resolve } from 'node:path'
import { createRequire } from 'node:module'

const GREEN = '\x1b[32m'
const RED = '\x1b[31m'
const DIM = '\x1b[2m'
const RESET = '\x1b[0m'

const EXCLUDE = new Set(['.DS_Store', '__MACOSX', 'node_modules', '.git'])

function collectFiles(dir, base) {
  base = base || dir
  const results = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || EXCLUDE.has(entry.name) || entry.name.endsWith('.d.ts')) continue
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      results.push(...collectFiles(full, base))
    } else {
      results.push({ path: full, relative: relative(base, full) })
    }
  }
  return results
}

function resolveSlug(args, templateDir) {
  const slugIdx = args.indexOf('--slug')
  if (slugIdx !== -1 && args[slugIdx + 1]) return args[slugIdx + 1]

  const manifestPath = join(templateDir, 'manifest.json')
  if (existsSync(manifestPath)) {
    try {
      const manifest = JSON.parse(readFileSync(manifestPath, 'utf-8'))
      if (manifest.slug) return manifest.slug
    } catch {}
  }

  return basename(templateDir)
}

export async function run(dir, args = []) {
  const templateDir = resolve(dir)

  console.log(`\n${GREEN}AlwaysYou Template Packer${RESET}\n`)

  if (!existsSync(templateDir) || !statSync(templateDir).isDirectory()) {
    console.error(`  ${RED}✗${RESET} Template directory not found: ${templateDir}\n`)
    return 1
  }

  // Validate first
  const skipValidate = args.includes('--no-validate')
  if (!skipValidate) {
    const { run: validate } = await import('./validate.mjs')
    const validateResult = await validate(dir)
    if (validateResult !== 0) {
      console.error(`  ${RED}Fix validation errors before packing.${RESET}\n`)
      return 1
    }
    console.log(`${DIM}  ─────────────────────────────────${RESET}\n`)
  }

  const slug = resolveSlug(args, templateDir)
  const files = collectFiles(templateDir)

  if (files.length === 0) {
    console.error(`  ${RED}✗${RESET} No files found in ${templateDir}\n`)
    return 1
  }

  // Dynamic import of jszip
  let JSZip
  try {
    const require = createRequire(import.meta.url)
    JSZip = require('jszip')
  } catch {
    try {
      JSZip = (await import('jszip')).default
    } catch {
      console.error(`  ${RED}✗${RESET} jszip not found. Install it: npm install jszip\n`)
      return 1
    }
  }

  const zip = new JSZip()
  const folder = zip.folder(slug)
  for (const file of files) {
    folder.file(file.relative, readFileSync(file.path))
  }

  const buf = await zip.generateAsync({
    type: 'nodebuffer',
    compression: 'DEFLATE',
    compressionOptions: { level: 6 },
  })

  const outputPath = resolve(`${slug}.zip`)
  writeFileSync(outputPath, buf)

  const sizeKB = (buf.length / 1024).toFixed(1)
  console.log(`  ${GREEN}✓${RESET} Packed ${files.length} files into ${slug}.zip (${sizeKB} KB)`)
  console.log(`  ${DIM}${outputPath}${RESET}`)
  console.log(`\n  Ready to upload in the AlwaysYou admin panel.\n`)
  return 0
}
