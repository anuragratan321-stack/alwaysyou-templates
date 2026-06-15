#!/usr/bin/env node

const [,, command, ...args] = process.argv

const HELP = `
AlwaysYou Template CLI

Usage: alwaysyou <command> [options]

Commands:
  init              Set up Studio route (run once after install)
  validate          Check your template for errors before uploading
  pack              Create a ZIP ready for upload
  generate-types    Generate TypeScript types from schema.json
  help              Show this help message

Options:
  --dir <path>      Template directory (default: .)

Examples:
  npx alwaysyou init
  npx alwaysyou validate
  npx alwaysyou pack --dir ./my-template
  npx alwaysyou generate-types
`.trim()

async function main() {
  const dir = resolveDir(args)

  switch (command) {
    case 'init': {
      await runInit(dir)
      break
    }
    case 'validate': {
      const mod = await import('./validate.mjs')
      process.exit(await mod.run(dir))
      break
    }
    case 'pack': {
      const mod = await import('./pack.mjs')
      process.exit(await mod.run(dir, args))
      break
    }
    case 'generate-types': {
      const mod = await import('./generate-types.mjs')
      process.exit(await mod.run(dir))
      break
    }
    case 'help':
    case '--help':
    case '-h':
    case undefined:
      console.log(HELP)
      process.exit(0)
      break
    default:
      console.error(`Unknown command: ${command}\n`)
      console.log(HELP)
      process.exit(1)
  }
}

function resolveDir(args) {
  const idx = args.indexOf('--dir')
  if (idx !== -1 && args[idx + 1]) return args[idx + 1]
  return '.'
}

async function runInit(dir) {
  const { mkdirSync, writeFileSync, existsSync } = await import('fs')
  const { join } = await import('path')

  const routeDir = join('app', 'studio', '[[...path]]')
  const routeFile = join(routeDir, 'route.ts')

  if (existsSync(routeFile)) {
    console.log('✓ Studio route already exists at', routeFile)
    return
  }

  mkdirSync(routeDir, { recursive: true })
  writeFileSync(routeFile, `import { createStudioHandler } from '@alwaysyou/templates/studio'

const handler = createStudioHandler({ dir: '${dir}' })

export const GET = handler
export const POST = handler
`)

  console.log('✓ Created', routeFile)
  console.log('  Restart your dev server, then open http://localhost:3000/studio')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
