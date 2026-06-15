#!/usr/bin/env node

const [,, command, ...args] = process.argv

const HELP = `
AlwaysYou Template CLI

Usage: alwaysyou <command> [options]

Commands:
  validate          Check your template for errors before uploading
  pack              Create a ZIP ready for upload
  generate-types    Generate TypeScript types from schema.json
  help              Show this help message

Options:
  --dir <path>      Template directory (default: ./template)

Examples:
  npx alwaysyou validate
  npx alwaysyou pack --dir ./my-template
  npx alwaysyou generate-types
`.trim()

async function main() {
  const dir = resolveDir(args)

  switch (command) {
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
  return './template'
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
