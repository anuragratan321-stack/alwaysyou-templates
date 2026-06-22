#!/usr/bin/env node
/**
 * AlwaysYou Template Dev Server (SDK version)
 *
 * Self-contained dev server that compiles a template, serves a preview,
 * and hosts the Template Studio — all from a fresh project with no
 * dependency on the main AlwaysYou repo.
 *
 * Usage: npx alwaysyou dev [--dir ./template] [--port 4321]
 */
import { createServer } from 'node:http'
import { readFileSync, writeFileSync, existsSync, watchFile, watch, readdirSync } from 'node:fs'
import { join, resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// ── Args ────────────────────────────────────────────────────────────────────

export async function run(dir, args = []) {
  const portIdx = args.indexOf('--port')
  let port = portIdx !== -1 && args[portIdx + 1] ? parseInt(args[portIdx + 1]) : 4321
  const templateDir = resolve(dir)

  if (!existsSync(join(templateDir, 'index.tsx'))) {
    console.error(`  ✗ ${templateDir}/index.tsx not found`)
    console.error(`  Create your template's index.tsx first, or use --dir <path>`)
    return 1
  }

  // ── Import esbuild ──────────────────────────────────────────────────────

  let esbuild
  try {
    esbuild = await import('esbuild')
  } catch {
    console.error('  ✗ esbuild not found. Install it:')
    console.error('    npm install -D esbuild')
    return 1
  }

  // ── Constants ───────────────────────────────────────────────────────────

  const TEMPLATE_CORE_IMPORTS = {
    'react':                 'https://esm.sh/react@19',
    'react-dom':             'https://esm.sh/react-dom@19?external=react',
    'react-dom/client':      'https://esm.sh/react-dom@19/client?external=react,react-dom',
    'react/jsx-runtime':     'https://esm.sh/react@19/jsx-runtime',
    'react/jsx-dev-runtime': 'https://esm.sh/react@19/jsx-dev-runtime',
    'framer-motion':         'https://esm.sh/framer-motion@12?external=react,react-dom',
    'motion':                'https://esm.sh/motion@11?external=react,react-dom',
    'motion/react':          'https://esm.sh/motion@11/react?external=react,react-dom',
    'react-pageflip':        'https://esm.sh/react-pageflip@2?external=react,react-dom',
    'howler':                'https://esm.sh/howler@2',
    'three':                 'https://esm.sh/three@0.184',
    '@react-three/fiber':    'https://esm.sh/@react-three/fiber@9?external=react,react-dom,three',
    '@react-three/drei':     'https://esm.sh/@react-three/drei@10?external=react,react-dom,three,@react-three/fiber',
  }

  const TEMPLATE_EXTERNALS = [...Object.keys(TEMPLATE_CORE_IMPORTS), '@alwaysyou/templates']

  const ENTRY_CODE = `
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import Template from './index';

const data = window.__TEMPLATE_DATA__;
const el = document.getElementById('template-root');
var _root = null;

function doRender(d) {
  try {
    if (!el) return;
    if (!_root) _root = createRoot(el);
    _root.render(createElement(Template, { data: d }));
  } catch (err) {
    console.error('[template error]', err);
  }
}

if (data && el) doRender(data);

window.addEventListener('message', function(e) {
  if (!e.data || e.data.type !== 'ay-preview-data') return;
  var next = Object.assign({}, window.__TEMPLATE_DATA__, e.data.data);
  window.__TEMPLATE_DATA__ = next;
  doRender(next);
});
`

  // ── CSS Plugin ────────────────────────────────────────────────────────────

  const cssPlugin = {
    name: 'css-handler',
    setup(build) {
      build.onLoad({ filter: /\.module\.css$/ }, (args) => {
        let css = ''
        try { css = readFileSync(args.path, 'utf-8') } catch {}
        const classNames = {}
        const re = /\.([a-zA-Z_][a-zA-Z0-9_-]*)[\s,{:]/g
        let m
        while ((m = re.exec(css)) !== null) classNames[m[1]] = m[1]
        return {
          contents: `(function(){if(typeof document!=='undefined'){var s=document.createElement('style');s.textContent=${JSON.stringify(css)};document.head.appendChild(s)}})();export default ${JSON.stringify(classNames)};`,
          loader: 'js',
        }
      })
      build.onLoad({ filter: /\.css$/ }, (args) => {
        let css = ''
        try { css = readFileSync(args.path, 'utf-8') } catch {}
        return {
          contents: `(function(){if(typeof document!=='undefined'){var s=document.createElement('style');s.textContent=${JSON.stringify(css)};document.head.appendChild(s)}})();`,
          loader: 'js',
        }
      })
    },
  }

  const staticImagePlugin = {
    name: 'static-image',
    setup(build) {
      build.onLoad({ filter: /\.(png|jpe?g|gif|webp|avif|svg)$/i }, (args) => {
        const data = readFileSync(args.path)
        const ext = args.path.split('.').pop().toLowerCase()
        const mimeMap = { png:'image/png', jpg:'image/jpeg', jpeg:'image/jpeg', gif:'image/gif', webp:'image/webp', avif:'image/avif', svg:'image/svg+xml' }
        const src = `data:${mimeMap[ext]||'image/jpeg'};base64,${data.toString('base64')}`
        return { contents: `var _s=${JSON.stringify(src)};export default{src:_s,width:0,height:0,toString(){return _s},valueOf(){return _s}};`, loader: 'js' }
      })
    },
  }

  const nextImageShimPlugin = {
    name: 'next-image-shim',
    setup(build) {
      build.onResolve({ filter: /^next\/image$/ }, (args) => ({ path: args.path, namespace: 'next-image-shim' }))
      build.onLoad({ filter: /.*/, namespace: 'next-image-shim' }, () => ({
        resolveDir: process.cwd(),
        contents: `import React from 'react';export default function Image({src:s,alt='',className,style,width,height,fill,...rest}){var r=s==null?'':typeof s==='string'?s:s.src!=null?s.src:String(s);return React.createElement('img',{src:r,alt,className,crossOrigin:'anonymous',style:fill?{...style,position:'absolute',inset:0,width:'100%',height:'100%'}:style,width:fill?undefined:width,height:fill?undefined:height,...rest})}`,
        loader: 'jsx',
      }))
    },
  }

  // ── SDK bundle ──────────────────────────────────────────────────────────

  let sdkBundle = null
  const sdkSrcPath = join(__dirname, '..', 'dist', 'index.js')
  if (existsSync(sdkSrcPath)) {
    try {
      const result = await esbuild.build({
        entryPoints: [sdkSrcPath],
        bundle: true,
        format: 'esm',
        platform: 'browser',
        external: ['react', 'react-dom'],
        write: false,
      })
      sdkBundle = Buffer.from(result.outputFiles[0].contents)
    } catch {}
  }

  // ── State ─────────────────────────────────────────────────────────────────

  let currentBundle = null
  let demoData = {}
  let sseClients = []

  function loadDemoData() {
    const demoPath = join(templateDir, 'demo.json')
    if (existsSync(demoPath)) {
      try { demoData = JSON.parse(readFileSync(demoPath, 'utf-8')) } catch { demoData = {} }
    }
  }

  // ── Compile ───────────────────────────────────────────────────────────────

  async function compile() {
    const t0 = Date.now()
    try {
      const result = await esbuild.build({
        bundle: true,
        platform: 'browser',
        format: 'esm',
        target: 'es2020',
        jsx: 'automatic',
        minify: false,
        external: TEMPLATE_EXTERNALS,
        stdin: { contents: ENTRY_CODE, resolveDir: templateDir, sourcefile: '__entry.tsx', loader: 'tsx' },
        nodePaths: [join(process.cwd(), 'node_modules')],
        plugins: [staticImagePlugin, nextImageShimPlugin, cssPlugin],
        write: false,
      })
      currentBundle = Buffer.from(result.outputFiles[0].contents)
      return { ok: true, sizeKB: Math.round(currentBundle.length / 1024), ms: Date.now() - t0 }
    } catch (err) {
      return { ok: false, error: err.message || String(err) }
    }
  }

  // ── Studio ────────────────────────────────────────────────────────────────

  const studioBundlePath = join(__dirname, 'studio-bundle.js')
  const hasStudio = existsSync(studioBundlePath)
  let studioBundle = hasStudio ? readFileSync(studioBundlePath) : null

  const STUDIO_IMPORTMAP = JSON.stringify({
    imports: {
      'react':                 'https://esm.sh/react@19',
      'react-dom':             'https://esm.sh/react-dom@19?external=react',
      'react-dom/client':      'https://esm.sh/react-dom@19/client?external=react,react-dom',
      'react/jsx-runtime':     'https://esm.sh/react@19/jsx-runtime',
      'react/jsx-dev-runtime': 'https://esm.sh/react@19/jsx-dev-runtime',
      'lucide-react':          'https://esm.sh/lucide-react@0.460?external=react',
    },
  })

  const slug = templateDir.split('/').pop() || 'template'

  function studioHtml() {
    return `<!doctype html><html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>Studio — ${slug}</title><script type="importmap">${STUDIO_IMPORTMAP}</script></head><body><div id="studio-root"></div><script>window.__STUDIO_CONFIG__=${JSON.stringify({ slug, port })}</script><script type="module" src="/studio/bundle.js"></script></body></html>`
  }

  function readBody(req) {
    return new Promise((resolve, reject) => {
      let body = ''
      req.on('data', (c) => { body += c.toString() })
      req.on('end', () => resolve(body))
      req.on('error', reject)
    })
  }

  function jsonRes(res, status, data) {
    res.writeHead(status, { 'content-type': 'application/json', 'cache-control': 'no-store' })
    res.end(JSON.stringify(data))
  }

  // ── Preview HTML ──────────────────────────────────────────────────────────

  function buildHtml(query) {
    const mode = query.get('mode')
    const templateData = {
      ...demoData,
      _previewMode: true,
      _demoMode: true,
      _renderMode: mode,
      _cardPreview: mode === 'card',
      _instanceId: 'dev-preview',
      _capabilities: { guestbook: '#', reactions: '#', respond: '#', open: '#', track: '#', visit: '#', error: '#' },
    }

    const sdkUrl = sdkBundle ? '/sdk.js' : 'https://esm.sh/@alwaysyou/templates@latest?external=react'
    const importmap = JSON.stringify({ imports: { ...TEMPLATE_CORE_IMPORTS, '@alwaysyou/templates': sdkUrl } })
    const safeData = JSON.stringify(templateData).replace(/</g, '\\u003c')

    return `<!doctype html><html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>Dev — ${slug}</title><style>*{margin:0;padding:0;box-sizing:border-box}html,body{width:100%;min-height:100vh;overflow-x:hidden}#template-root{width:100%;min-height:100vh}.tpl-loading{display:flex;align-items:center;justify-content:center;min-height:100vh;background:#080808}.tpl-spinner{width:24px;height:24px;border:2px solid rgba(255,255,255,0.15);border-top-color:rgba(255,255,255,0.8);border-radius:50%;animation:tpl-spin 0.8s linear infinite}@keyframes tpl-spin{to{transform:rotate(360deg)}}</style><script type="importmap">${importmap}</script></head><body><div id="template-root"><div class="tpl-loading"><div class="tpl-spinner"></div></div></div><script>window.__TEMPLATE_DATA__=${safeData};window.__ay_session_id='dev-'+Date.now().toString(36);window.alwaysyou={track:function(e,p){console.log('%c[track] '+e,'color:#C2185B;font-weight:600',p||{})}}</script><script type="module" src="/bundle.js"></script><script>(function(){var es=new EventSource('/sse');es.onmessage=function(e){if(e.data==='reload')location.reload()};es.onerror=function(){setTimeout(function(){location.reload()},1500)}})()</script><div style="position:fixed;top:8px;right:8px;z-index:9999;background:rgba(194,24,91,0.9);color:white;padding:4px 10px;border-radius:999px;font-size:10px;font-weight:600;font-family:system-ui;letter-spacing:0.3px;pointer-events:none">DEV</div></body></html>`
  }

  // ── HTTP Server ─────────────────────────────────────────────────────────

  const server = createServer((req, res) => {
    const url = new URL(req.url ?? '/', `http://localhost:${port}`)

    // Studio routes
    if (url.pathname === '/studio' && hasStudio) {
      res.writeHead(200, { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' })
      res.end(studioHtml())
      return
    }

    if (url.pathname === '/studio/bundle.js' && studioBundle) {
      res.writeHead(200, { 'content-type': 'application/javascript', 'cache-control': 'no-store' })
      res.end(studioBundle)
      return
    }

    if (url.pathname === '/studio/api/load' && req.method === 'GET') {
      const result = {}
      for (const name of ['schema', 'demo', 'manifest']) {
        const fp = join(templateDir, name + '.json')
        try { result[name] = JSON.parse(readFileSync(fp, 'utf-8')) } catch { result[name] = null }
      }
      jsonRes(res, 200, result)
      return
    }

    if (url.pathname === '/studio/api/save' && req.method === 'POST') {
      readBody(req).then((body) => {
        try {
          const payload = JSON.parse(body)
          const errors = []
          if (payload.schema) {
            if (payload.schema.version !== '2') errors.push('schema: version must be "2"')
            if (!Array.isArray(payload.schema.sections)) errors.push('schema: sections must be an array')
          }
          if (errors.length > 0) { jsonRes(res, 400, { ok: false, errors }); return }

          const written = []
          for (const key of ['schema', 'demo', 'manifest']) {
            if (payload[key]) {
              writeFileSync(join(templateDir, key + '.json'), JSON.stringify(payload[key], null, 2) + '\n')
              written.push(key + '.json')
            }
          }
          jsonRes(res, 200, { ok: true, written })
        } catch (e) {
          jsonRes(res, 400, { ok: false, errors: [String(e)] })
        }
      }).catch(() => jsonRes(res, 500, { ok: false, errors: ['Failed to read body'] }))
      return
    }

    if (url.pathname === '/bundle.js' && currentBundle) {
      res.writeHead(200, { 'content-type': 'application/javascript', 'cache-control': 'no-store' })
      res.end(currentBundle)
      return
    }

    if (url.pathname === '/sdk.js' && sdkBundle) {
      res.writeHead(200, { 'content-type': 'application/javascript', 'cache-control': 'no-store' })
      res.end(sdkBundle)
      return
    }

    if (url.pathname === '/sse') {
      res.writeHead(200, { 'content-type': 'text/event-stream', 'cache-control': 'no-cache', 'connection': 'keep-alive' })
      res.write('data: connected\n\n')
      sseClients.push(res)
      req.on('close', () => { sseClients = sseClients.filter(c => c !== res) })
      return
    }

    if (url.pathname === '/' || url.pathname === '/index.html') {
      res.writeHead(200, { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' })
      res.end(buildHtml(url.searchParams))
      return
    }

    res.writeHead(404)
    res.end('Not found')
  })

  function sendReload() {
    for (const c of sseClients) { try { c.write('data: reload\n\n') } catch {} }
  }

  // ── File watcher ──────────────────────────────────────────────────────────

  function syncDemoToSchema() {
    const schemaPath = join(templateDir, 'schema.json')
    const demoPath = join(templateDir, 'demo.json')
    if (!existsSync(schemaPath) || !existsSync(demoPath)) return false
    try {
      const schema = JSON.parse(readFileSync(schemaPath, 'utf-8'))
      const demo = JSON.parse(readFileSync(demoPath, 'utf-8'))
      const sections = schema.sections ?? []
      const schemaKeys = sections.flatMap(s => (s.fields ?? []).map(f => f.key))
      const pruned = {}
      for (const key of schemaKeys) {
        if (key in demo) pruned[key] = demo[key]
      }
      const before = JSON.stringify(demo)
      const after = JSON.stringify(pruned)
      if (before === after) return false
      writeFileSync(demoPath, JSON.stringify(pruned, null, 2) + '\n')
      return true
    } catch { return false }
  }

  let debounceTimer = null
  function onFileChange(filename) {
    if (debounceTimer) clearTimeout(debounceTimer)
    debounceTimer = setTimeout(async () => {
      const file = filename ?? ''
      const now = new Date().toLocaleTimeString('en-GB', { hour12: false })

      if (file === 'schema.json' || file.endsWith('/schema.json')) {
        if (syncDemoToSchema()) console.log(`  ${now}  demo.json synced (stale fields removed)`)
        loadDemoData()
        const r = await compile()
        if (r.ok) { console.log(`  ${now}  Recompiled in ${r.ms}ms (${r.sizeKB} KB)`); sendReload() }
        else console.log(`  ${now}  \x1b[31m✖ ${r.error}\x1b[0m`)
        return
      }

      if (file === 'demo.json' || file.endsWith('/demo.json')) {
        loadDemoData()
        console.log(`  ${now}  Demo data reloaded`)
        sendReload()
        return
      }
      if (file.endsWith('.generated.ts')) return

      const r = await compile()
      if (r.ok) { console.log(`  ${now}  Recompiled in ${r.ms}ms (${r.sizeKB} KB)`); sendReload() }
      else console.log(`  ${now}  \x1b[31m✖ ${r.error}\x1b[0m`)
    }, 100)
  }

  // ── Start ─────────────────────────────────────────────────────────────────

  console.log()
  console.log('  \x1b[1mAlwaysYou Template Dev Server\x1b[0m')
  console.log()

  loadDemoData()
  const fieldCount = Object.keys(demoData).filter(k => !k.startsWith('_')).length

  const r = await compile()
  if (!r.ok) {
    console.log(`  \x1b[31m✖ Compile failed:\x1b[0m ${r.error}`)
    console.log('  Fix the error and save — the server will retry.')
    console.log()
  } else {
    console.log(`  Template:  \x1b[36m${slug}\x1b[0m`)
    console.log(`  Source:    ${templateDir}/`)
    console.log(`  Data:      ${existsSync(join(templateDir, 'demo.json')) ? 'demo.json' : 'auto-generated'} (${fieldCount} fields)`)
    console.log(`  Bundle:    ${r.sizeKB} KB`)
    console.log()
  }

  if (hasStudio) {
    console.log(`  Studio:    ${Math.round(studioBundle.length / 1024)} KB`)
    console.log()
  }

  // Bind port
  const tryListen = (p) => new Promise((resolve, reject) => {
    server.once('error', (err) => {
      if (err.code === 'EADDRINUSE' && p < port + 10) tryListen(p + 1).then(resolve).catch(reject)
      else reject(err)
    })
    server.listen(p, () => resolve(p))
  })

  port = await tryListen(port)

  console.log(`  \x1b[32mhttp://localhost:${port}\x1b[0m              Template preview`)
  console.log(`  \x1b[32mhttp://localhost:${port}?mode=card\x1b[0m     Card preview`)
  if (hasStudio) {
    console.log(`  \x1b[35mhttp://localhost:${port}/studio\x1b[0m       Template Studio`)
  }
  console.log()
  console.log('  Watching for changes...')
  console.log()

  watch(templateDir, { recursive: true }, (_event, filename) => {
    onFileChange(filename)
  })

  process.on('SIGINT', () => { server.close(); process.exit(0) })
  process.on('SIGTERM', () => { server.close(); process.exit(0) })

  return new Promise(() => {}) // keep alive
}
