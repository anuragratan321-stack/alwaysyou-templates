/**
 * Template Studio — Next.js route handler for the SDK.
 *
 * Usage: create app/studio/[[...path]]/route.ts with:
 *
 *   import { createStudioHandler } from '@alwaysyou/templates/studio'
 *   const handler = createStudioHandler({ dir: './template' })
 *   export const GET = handler
 *   export const POST = handler
 *
 * Then: npm run dev → localhost:3000/studio
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
const STUDIO_IMPORTMAP = JSON.stringify({
    imports: {
        'react': 'https://esm.sh/react@19',
        'react-dom': 'https://esm.sh/react-dom@19?external=react',
        'react-dom/client': 'https://esm.sh/react-dom@19/client?external=react,react-dom',
        'react/jsx-runtime': 'https://esm.sh/react@19/jsx-runtime',
        'react/jsx-dev-runtime': 'https://esm.sh/react@19/jsx-dev-runtime',
        'lucide-react': 'https://esm.sh/lucide-react@0.460?external=react',
    },
});
function findStudioBundle() {
    const candidates = [
        join(dirname(new URL(import.meta.url).pathname), '..', 'scripts', 'studio-bundle.js'),
        join(process.cwd(), 'node_modules', '@alwaysyou', 'templates', 'scripts', 'studio-bundle.js'),
    ];
    for (const p of candidates) {
        try {
            const resolved = resolve(p);
            if (existsSync(resolved))
                return readFileSync(resolved);
        }
        catch { }
    }
    return null;
}
function getBundle() {
    return findStudioBundle();
}
function buildHtml(slug) {
    return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Studio — ${slug}</title>
<script type="importmap">${STUDIO_IMPORTMAP}</script>
</head>
<body>
<div id="studio-root"></div>
<script>
  window.__STUDIO_CONFIG__ = ${JSON.stringify({ slug, port: 0 })};
</script>
<script type="module" src="/studio/bundle.js"></script>
</body>
</html>`;
}
const TYPE_MAP = {
    text: 'string', textarea: 'string', date: 'string', number: 'number',
    image: 'string', image_array: 'string[]', video: 'string',
    audio: '{ url: string }', color: 'string', toggle: 'boolean',
    quiz: 'QuizQuestion[]', select: 'string',
};
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1).replace(/-(\w)/g, (_, c) => c.toUpperCase());
}
function fieldTsType(field, parent, ifaces) {
    if (field.type === 'select' && field.options?.length) {
        return field.options.map(o => `'${o.replace(/'/g, "\\'")}'`).join(' | ');
    }
    if (field.type === 'group' && field.fields) {
        const name = parent + capitalize(field.key);
        buildInterface(field.fields, name, ifaces, true);
        return name;
    }
    if (field.type === 'group_array' && field.fields) {
        const name = parent + capitalize(field.key) + 'Item';
        buildInterface(field.fields, name, ifaces, true);
        return `${name}[]`;
    }
    return TYPE_MAP[field.type] || 'unknown';
}
function buildInterface(fields, name, ifaces, allReq = false) {
    const lines = [];
    for (const f of fields) {
        if (!f.key)
            continue;
        const ts = fieldTsType(f, name, ifaces);
        const opt = !allReq && !f.required ? '?' : '';
        const key = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(f.key) ? f.key : `'${f.key}'`;
        if (f.label)
            lines.push(`/** ${f.label} */`);
        lines.push(`${key}${opt}: ${ts}`);
    }
    ifaces.push({ name, lines });
}
function generateQuizType(quizFields) {
    const merged = {};
    for (const f of quizFields) {
        if (f.config) {
            for (const [k, v] of Object.entries(f.config)) {
                if (v)
                    merged[k] = true;
            }
        }
    }
    let t = `export interface QuizQuestion {\n`;
    t += `  id: string\n`;
    t += `  text: string\n`;
    t += `  options: string[]\n`;
    t += `  correctIndex: number\n`;
    if (merged.allowMultipleCorrect)
        t += `  correctIndices?: number[]\n`;
    if (merged.allowHints)
        t += `  hint?: string\n`;
    if (merged.allowExplanations)
        t += `  explanation?: string\n`;
    if (merged.allowImages)
        t += `  image?: string\n`;
    if (merged.allowPoints)
        t += `  points?: number\n`;
    t += `}\n\n`;
    return t;
}
function generateTypes(schema) {
    const allFields = schema.sections.flatMap(s => s.fields ?? []);
    if (allFields.length === 0)
        return '';
    const ifaces = [];
    const quizFields = allFields.filter(f => f.type === 'quiz');
    const needsQuiz = quizFields.length > 0 || allFields.some(f => (f.fields ?? []).some(sf => sf.type === 'quiz'));
    buildInterface(allFields, 'TemplateFields', ifaces);
    const imports = ['PlatformContext'];
    let out = `// Auto-generated from schema.json — do not edit.\n`;
    out += `// Regenerate: npx alwaysyou generate-types\n\n`;
    out += `import type { ${imports.join(', ')} } from '@alwaysyou/templates'\n\n`;
    if (needsQuiz) {
        out += generateQuizType(quizFields);
    }
    for (const iface of ifaces) {
        out += `export interface ${iface.name} {\n`;
        out += iface.lines.map(l => '  ' + l).join('\n');
        out += `\n}\n\n`;
    }
    out += `export type TypedTemplateData = TemplateFields & PlatformContext\n`;
    return out;
}
export function createStudioHandler(options) {
    const templateDir = resolve(options.dir);
    const slug = templateDir.split('/').pop() || 'template';
    return async function handler(request, context) {
        const { path: segments } = await context.params;
        const subpath = segments ? segments.join('/') : '';
        // GET /studio → HTML shell
        if (request.method === 'GET' && subpath === '') {
            return new Response(buildHtml(slug), {
                headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' },
            });
        }
        // GET /studio/bundle.js → pre-compiled studio SPA
        if (request.method === 'GET' && subpath === 'bundle.js') {
            const bundle = getBundle();
            if (!bundle) {
                return new Response('Studio bundle not found. Run: npm run studio:build', { status: 503 });
            }
            return new Response(new Uint8Array(bundle), {
                headers: { 'content-type': 'application/javascript', 'cache-control': 'no-store' },
            });
        }
        // GET /studio/api/load → read config files from disk
        if (request.method === 'GET' && subpath === 'api/load') {
            const result = {};
            for (const name of ['schema', 'demo', 'manifest']) {
                const fp = join(templateDir, name + '.json');
                try {
                    result[name] = JSON.parse(readFileSync(fp, 'utf-8'));
                }
                catch {
                    result[name] = null;
                }
            }
            return Response.json(result);
        }
        // POST /studio/api/save → write config files to disk
        if (request.method === 'POST' && subpath === 'api/save') {
            try {
                const payload = await request.json();
                const errors = [];
                if (payload.schema) {
                    if (!Array.isArray(payload.schema.sections))
                        errors.push('schema: sections must be an array');
                }
                if (errors.length > 0) {
                    return Response.json({ ok: false, errors }, { status: 400 });
                }
                const written = [];
                for (const key of ['schema', 'demo', 'manifest']) {
                    if (payload[key]) {
                        writeFileSync(join(templateDir, key + '.json'), JSON.stringify(payload[key], null, 2) + '\n');
                        written.push(key + '.json');
                    }
                }
                if (payload.schema && Array.isArray(payload.schema.sections)) {
                    try {
                        const types = generateTypes(payload.schema);
                        if (types) {
                            writeFileSync(join(templateDir, 'data.d.ts'), types);
                            written.push('data.d.ts');
                        }
                    }
                    catch { }
                }
                return Response.json({ ok: true, written });
            }
            catch (e) {
                return Response.json({ ok: false, errors: [String(e)] }, { status: 400 });
            }
        }
        return new Response('Not found', { status: 404 });
    };
}
