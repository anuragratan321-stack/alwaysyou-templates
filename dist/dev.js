'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useCallback, useEffect, useMemo, useRef, useState, } from 'react';
import { createPortal } from 'react-dom';
import { AlwaysYouContext } from './context';
// ── Device Presets ──────────────────────────────────────────────────────────
const DEVICE_PRESETS = [
    { name: 'iPhone SE', width: 375, height: 667, category: 'phone' },
    { name: 'iPhone 14', width: 390, height: 844, category: 'phone' },
    { name: 'iPhone 14 Pro Max', width: 430, height: 932, category: 'phone' },
    { name: 'Pixel 7', width: 412, height: 915, category: 'phone' },
    { name: 'Galaxy S20', width: 360, height: 800, category: 'phone' },
    { name: 'iPad Mini', width: 768, height: 1024, category: 'tablet' },
    { name: 'iPad Air', width: 820, height: 1180, category: 'tablet' },
    { name: 'Desktop HD', width: 1280, height: 720, category: 'desktop' },
    { name: 'Desktop FHD', width: 1920, height: 1080, category: 'desktop' },
];
// ── Generic pub/sub ────────────────────────────────────────────────────────
function createBus(initial) {
    let current = initial;
    const subs = new Set();
    return {
        get: () => current,
        set(v) { current = v; subs.forEach(fn => fn(v)); },
        sub(fn) { subs.add(fn); return () => { subs.delete(fn); }; },
    };
}
const deviceBus = createBus({
    width: 390, height: 844, category: 'phone', presetName: 'iPhone 14',
});
const topBarBus = createBus(null);
function useTopBarRight() {
    const [el, setEl] = useState(() => topBarBus.get());
    useEffect(() => {
        setEl(topBarBus.get());
        return topBarBus.sub(setEl);
    }, []);
    return el;
}
// ── iframe srcDoc ──────────────────────────────────────────────────────────
const IFRAME_SRCDOC = `<!DOCTYPE html>
<html style="height:100%">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
<style>
*,*::before,*::after{box-sizing:border-box}
html,body{height:100%;margin:0;padding:0}
body{overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;overscroll-behavior:none}
html{-webkit-text-size-adjust:100%;text-size-adjust:100%}
::-webkit-scrollbar{display:none}
*{scrollbar-width:none}
</style>
</head>
<body></body>
</html>`;
// ── AlwaysYouProvider ────────────────────────────────────────────────────────
export function AlwaysYouProvider({ data, mode = 'full', schema, onTrack, children, }) {
    const [overrideMode, setOverrideMode] = useState(null);
    const effectiveMode = overrideMode ?? mode;
    const eventsRef = useRef([]);
    const [eventTick, setEventTick] = useState(0);
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);
    const value = useMemo(() => {
        const merged = {
            ...data,
            _previewMode: effectiveMode === 'preview' || effectiveMode === 'demo',
            _demoMode: effectiveMode === 'demo',
            _cardPreview: effectiveMode === 'card',
            _renderMode: effectiveMode === 'card' ? 'card' : undefined,
            _instanceId: 'dev-preview',
            _capabilities: {
                guestbook: '#', reactions: '#', respond: '#',
                open: '#', track: '#', visit: '#', error: '#', rsvp: '#',
            },
        };
        const track = (event, payload) => {
            const entry = { event, payload: payload ?? {}, ts: Date.now() };
            eventsRef.current = [...eventsRef.current.slice(-49), entry];
            setEventTick(t => t + 1);
            console.log(`%c[track] ${event}`, 'color:#C2185B;font-weight:600', payload ?? {});
            onTrack?.(event, payload);
        };
        return { data: merged, track };
    }, [data, effectiveMode, onTrack]);
    return (_jsxs(AlwaysYouContext.Provider, { value: value, children: [children, mounted && (_jsx(DevToolbar, { mode: effectiveMode, onModeChange: setOverrideMode, events: eventsRef.current, eventTick: eventTick, schema: schema, data: data }))] }));
}
// ── PhoneFrame ──────────────────────────────────────────────────────────────
const TOP_BAR_H = 44;
export function PhoneFrame({ children, width: initialWidth = 390, height: initialHeight = 844, }) {
    const iframeRef = useRef(null);
    const [iframeBody, setIframeBody] = useState(null);
    const topBarRightRef = useRef(null);
    const [device, setDevice] = useState(() => {
        const preset = DEVICE_PRESETS.find(p => p.width === initialWidth && p.height === initialHeight);
        const state = preset
            ? { width: preset.width, height: preset.height, category: preset.category, presetName: preset.name }
            : { width: initialWidth, height: initialHeight, category: 'responsive', presetName: null };
        deviceBus.set(state);
        return state;
    });
    useEffect(() => deviceBus.sub(setDevice), []);
    useEffect(() => {
        topBarBus.set(topBarRightRef.current);
        return () => topBarBus.set(null);
    }, []);
    const [viewport, setViewport] = useState({ w: 1920, h: 1080 });
    useEffect(() => {
        const update = () => setViewport({ w: window.innerWidth, h: window.innerHeight });
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);
    // Drag resize for responsive mode
    const [dragging, setDragging] = useState(null);
    const dragRef = useRef({ x: 0, y: 0, w: 0, h: 0 });
    const onResizeStart = useCallback((dir, e) => {
        e.preventDefault();
        dragRef.current = { x: e.clientX, y: e.clientY, w: device.width, h: device.height };
        setDragging(dir);
    }, [device.width, device.height]);
    useEffect(() => {
        if (!dragging)
            return;
        const onMove = (e) => {
            const dx = e.clientX - dragRef.current.x;
            const dy = e.clientY - dragRef.current.y;
            let w = dragRef.current.w, h = dragRef.current.h;
            if (dragging === 'right' || dragging === 'corner')
                w = Math.max(280, Math.round(w + dx));
            if (dragging === 'bottom' || dragging === 'corner')
                h = Math.max(400, Math.round(h + dy));
            const s = { width: w, height: h, category: 'responsive', presetName: null };
            setDevice(s);
            deviceBus.set(s);
        };
        const onUp = () => setDragging(null);
        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseup', onUp);
        return () => { window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp); };
    }, [dragging]);
    // iframe setup
    const iframeReady = useRef(false);
    const setupIframe = useCallback(() => {
        if (iframeReady.current)
            return;
        const doc = iframeRef.current?.contentDocument;
        if (!doc?.body)
            return;
        iframeReady.current = true;
        const parentStyles = document.querySelectorAll('style, link[rel="stylesheet"]');
        parentStyles.forEach(node => doc.head.appendChild(node.cloneNode(true)));
        const observer = new MutationObserver(mutations => {
            for (const m of mutations) {
                m.addedNodes.forEach(node => {
                    if (node instanceof HTMLStyleElement ||
                        (node instanceof HTMLLinkElement && node.rel === 'stylesheet'))
                        doc.head.appendChild(node.cloneNode(true));
                });
            }
        });
        observer.observe(document.head, { childList: true });
        setIframeBody(doc.body);
    }, []);
    useEffect(() => { setupIframe(); }, [setupIframe]);
    // CSS custom properties in iframe for templates that read viewport via CSS
    useEffect(() => {
        const doc = iframeRef.current?.contentDocument;
        if (!doc)
            return;
        doc.documentElement.style.setProperty('--device-width', `${device.width}px`);
        doc.documentElement.style.setProperty('--device-height', `${device.height}px`);
    }, [device.width, device.height]);
    // Frame chrome
    const isResponsive = device.category === 'responsive';
    const bezelW = device.category === 'desktop' ? 2 : device.category === 'tablet' ? 6 : 10;
    const bezelR = device.category === 'desktop' ? 4 : device.category === 'tablet' ? 20 : 48;
    const frameW = device.width + bezelW * 2;
    const frameH = device.height + bezelW * 2;
    const availH = viewport.h - TOP_BAR_H - 32;
    const availW = viewport.w - 80;
    // CSS zoom instead of transform:scale — zoom preserves pointer/drag coordinates
    const zoom = Math.min(1, availW / frameW, Math.max(0.3, availH / frameH));
    const rotate = useCallback(() => {
        const s = {
            width: device.height, height: device.width,
            category: 'responsive', presetName: null,
        };
        deviceBus.set(s);
    }, [device.width, device.height]);
    return (_jsxs(_Fragment, { children: [_jsxs("div", { style: S.topBar, children: [_jsxs("div", { style: S.topBarLeft, children: [_jsx(DeviceDropdown, {}), _jsxs("span", { style: S.dimsBadge, children: [device.width, " \u00D7 ", device.height] }), zoom < 1 && (_jsxs("span", { style: S.zoomBadge, children: [Math.round(zoom * 100), "%"] })), _jsx("button", { onClick: rotate, style: S.topBarIconBtn, title: "Rotate", children: _jsxs("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: [_jsx("path", { d: "M11 3H5a2 2 0 00-2 2v6", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round" }), _jsx("path", { d: "M9 1l2 2-2 2", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round", strokeLinejoin: "round" })] }) })] }), _jsx("div", { ref: topBarRightRef, style: S.topBarRight })] }), _jsx("div", { style: S.frameArea, children: _jsxs("div", { style: { position: 'relative', overflow: 'visible' }, children: [_jsxs("div", { style: {
                                width: frameW, height: frameH,
                                borderRadius: bezelR, overflow: 'hidden',
                                border: `${bezelW}px solid ${isResponsive ? '#333' : '#2a2a2e'}`,
                                boxShadow: isResponsive
                                    ? '0 0 0 1px rgba(255,255,255,0.06)'
                                    : '0 24px 64px rgba(0,0,0,0.5)',
                                background: '#000',
                                zoom: zoom < 1 ? zoom : undefined,
                            }, children: [_jsx("iframe", { ref: iframeRef, onLoad: setupIframe, title: "PhoneFrame", style: {
                                        width: device.width, height: device.height,
                                        border: 'none', display: 'block', background: '#fff',
                                        pointerEvents: dragging ? 'none' : 'auto',
                                    }, srcDoc: IFRAME_SRCDOC }), iframeBody && createPortal(children, iframeBody)] }), isResponsive && (_jsxs(_Fragment, { children: [_jsx(ResizeHandle, { dir: "right", dragging: dragging, onStart: onResizeStart }), _jsx(ResizeHandle, { dir: "bottom", dragging: dragging, onStart: onResizeStart }), _jsx(ResizeHandle, { dir: "corner", dragging: dragging, onStart: onResizeStart })] }))] }) })] }));
}
// ── DevToolbar ──────────────────────────────────────────────────────────────
const MODES = ['full', 'preview', 'demo', 'card'];
const MODE_LABELS = {
    full: 'Full', preview: 'Preview', demo: 'Demo', card: 'Card',
};
function DevToolbar({ mode, onModeChange, events, eventTick, schema, data, }) {
    const portalTarget = useTopBarRight();
    const schemaKeys = useMemo(() => {
        if (!schema?.sections)
            return null;
        const keys = [];
        for (const section of schema.sections)
            for (const field of section.fields ?? [])
                if (field.key)
                    keys.push(field.key);
        return keys;
    }, [schema]);
    const schemaCoverage = useMemo(() => {
        if (!schemaKeys)
            return null;
        const filled = schemaKeys.filter(k => k in data && data[k] !== undefined && data[k] !== '');
        return { filled: filled.length, total: schemaKeys.length };
    }, [schemaKeys, data]);
    void eventTick;
    if (!portalTarget)
        return null;
    return createPortal(_jsxs(_Fragment, { children: [_jsx(ModeDropdown, { mode: mode, onModeChange: onModeChange }), _jsx(AYPanelButton, { events: events, schemaKeys: schemaKeys, schemaCoverage: schemaCoverage, data: data })] }), portalTarget);
}
// ── Device Dropdown ────────────────────────────────────────────────────────
function DeviceDropdown() {
    const [open, setOpen] = useState(false);
    const [device, setDevice] = useState(() => deviceBus.get());
    const [wInput, setWInput] = useState(() => String(deviceBus.get().width));
    const [hInput, setHInput] = useState(() => String(deviceBus.get().height));
    const ref = useRef(null);
    useEffect(() => deviceBus.sub(s => {
        setDevice(s);
        setWInput(String(s.width));
        setHInput(String(s.height));
    }), []);
    useEffect(() => {
        if (!open)
            return;
        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target))
                setOpen(false);
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, [open]);
    const selectPreset = (p) => {
        deviceBus.set({ width: p.width, height: p.height, category: p.category, presetName: p.name });
        setOpen(false);
    };
    const selectResponsive = () => {
        deviceBus.set({ ...device, category: 'responsive', presetName: null });
        setOpen(false);
    };
    const applyCustom = (w, h) => {
        const pw = Math.max(280, Math.min(3840, parseInt(w) || 280));
        const ph = Math.max(400, Math.min(3840, parseInt(h) || 400));
        deviceBus.set({ width: pw, height: ph, category: 'responsive', presetName: null });
    };
    const phones = DEVICE_PRESETS.filter(p => p.category === 'phone');
    const tablets = DEVICE_PRESETS.filter(p => p.category === 'tablet');
    const desktops = DEVICE_PRESETS.filter(p => p.category === 'desktop');
    return (_jsxs("div", { ref: ref, style: { position: 'relative' }, children: [_jsxs("button", { onClick: () => setOpen(!open), style: S.dropdownBtn, children: [_jsx("span", { children: device.presetName || 'Responsive' }), _jsx("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "none", style: { marginLeft: 4, opacity: 0.5 }, children: _jsx("path", { d: "M2.5 4l2.5 2.5L7.5 4", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }) })] }), open && (_jsxs("div", { style: S.dropdown, children: [_jsxs("button", { onClick: selectResponsive, style: {
                            ...S.dropdownItem,
                            ...(device.category === 'responsive' ? S.dropdownItemActive : {}),
                        }, children: [_jsx("svg", { width: "12", height: "12", viewBox: "0 0 14 14", fill: "none", style: { flexShrink: 0, opacity: 0.6 }, children: _jsx("path", { d: "M3 7h8M7 3v8", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round" }) }), _jsx("span", { style: { flex: 1 }, children: "Responsive" }), device.category === 'responsive' && _jsx(Check, {})] }), _jsx("div", { style: S.dropdownDivider }), _jsxs("div", { style: S.customDimRow, children: [_jsx("input", { type: "number", value: wInput, onChange: e => setWInput(e.target.value), onBlur: () => applyCustom(wInput, hInput), onKeyDown: e => { if (e.key === 'Enter')
                                    applyCustom(wInput, hInput); }, style: S.customDimInput, min: 280, max: 3840 }), _jsx("span", { style: { color: TEXT_MUTED, fontSize: 11 }, children: "\u00D7" }), _jsx("input", { type: "number", value: hInput, onChange: e => setHInput(e.target.value), onBlur: () => applyCustom(wInput, hInput), onKeyDown: e => { if (e.key === 'Enter')
                                    applyCustom(wInput, hInput); }, style: S.customDimInput, min: 400, max: 3840 })] }), _jsx("div", { style: S.dropdownDivider }), _jsx(PresetGroup, { title: "Phones", presets: phones, selectedName: device.presetName, onSelect: selectPreset }), _jsx(PresetGroup, { title: "Tablets", presets: tablets, selectedName: device.presetName, onSelect: selectPreset }), _jsx(PresetGroup, { title: "Desktop", presets: desktops, selectedName: device.presetName, onSelect: selectPreset })] }))] }));
}
function PresetGroup({ title, presets, selectedName, onSelect, }) {
    return (_jsxs("div", { style: { marginTop: 2 }, children: [_jsx("div", { style: S.groupTitle, children: title }), presets.map(p => {
                const active = selectedName === p.name;
                return (_jsxs("button", { onClick: () => onSelect(p), style: { ...S.dropdownItem, ...(active ? S.dropdownItemActive : {}) }, children: [_jsx("span", { style: { flex: 1 }, children: p.name }), _jsxs("span", { style: S.presetDims, children: [p.width, "\u00D7", p.height] }), active && _jsx(Check, {})] }, p.name));
            })] }));
}
// ── Mode Dropdown ──────────────────────────────────────────────────────────
function ModeDropdown({ mode, onModeChange }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        if (!open)
            return;
        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target))
                setOpen(false);
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, [open]);
    return (_jsxs("div", { ref: ref, style: { position: 'relative' }, children: [_jsxs("button", { onClick: () => setOpen(!open), style: S.dropdownBtn, children: [_jsx("span", { children: MODE_LABELS[mode] }), _jsx("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "none", style: { marginLeft: 4, opacity: 0.5 }, children: _jsx("path", { d: "M2.5 4l2.5 2.5L7.5 4", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }) })] }), open && (_jsx("div", { style: { ...S.dropdown, right: 0, left: 'auto', minWidth: 140 }, children: MODES.map(m => (_jsxs("button", { onClick: () => { onModeChange(m); setOpen(false); }, style: { ...S.dropdownItem, ...(mode === m ? S.dropdownItemActive : {}) }, children: [_jsx("span", { style: { flex: 1, textTransform: 'capitalize' }, children: m }), mode === m && _jsx(Check, {})] }, m))) }))] }));
}
// ── AY Panel Button ────────────────────────────────────────────────────────
function AYPanelButton({ events, schemaKeys, schemaCoverage, data, }) {
    const [open, setOpen] = useState(false);
    const [tab, setTab] = useState('events');
    const ref = useRef(null);
    useEffect(() => {
        if (!open)
            return;
        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target))
                setOpen(false);
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, [open]);
    const badge = events.length > 0 ? events.length : null;
    return (_jsxs("div", { ref: ref, style: { position: 'relative' }, children: [_jsxs("button", { onClick: () => setOpen(!open), style: S.topBarIconBtn, title: "Dev Tools", children: [_jsx("svg", { width: "15", height: "15", viewBox: "0 0 16 16", fill: "none", children: _jsx("path", { d: "M2 4h12M2 8h8M2 12h10", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }) }), badge != null && _jsx("span", { style: S.badge, children: badge })] }), open && (_jsxs("div", { style: S.ayPanel, children: [_jsxs("div", { style: S.ayTabBar, children: [_jsxs("button", { onClick: () => setTab('events'), style: { ...S.ayTab, ...(tab === 'events' ? S.ayTabActive : {}) }, children: ["Events", events.length > 0 ? ` · ${events.length}` : ''] }), schemaKeys && (_jsxs("button", { onClick: () => setTab('schema'), style: { ...S.ayTab, ...(tab === 'schema' ? S.ayTabActive : {}) }, children: ["Data", schemaCoverage ? ` · ${schemaCoverage.filled}/${schemaCoverage.total}` : ''] }))] }), _jsxs("div", { style: S.ayBody, children: [tab === 'events' && _jsx(EventsPanel, { events: events }), tab === 'schema' && schemaKeys && _jsx(SchemaPanel, { keys: schemaKeys, data: data })] })] }))] }));
}
// ── Events Panel ───────────────────────────────────────────────────────────
function EventsPanel({ events }) {
    if (events.length === 0) {
        return (_jsxs("div", { style: S.empty, children: [_jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", style: { marginBottom: 6, opacity: 0.35 }, children: [_jsx("circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "1.5" }), _jsx("path", { d: "M12 7v5l3 3", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })] }), _jsx("div", { children: "No events yet" }), _jsx("div", { style: { fontSize: 10, opacity: 0.5, marginTop: 2 }, children: "Interact with your template to see tracked events." })] }));
    }
    return (_jsx("div", { style: { display: 'flex', flexDirection: 'column', gap: 3 }, children: [...events].reverse().map((e, i) => (_jsxs("div", { style: S.eventRow, children: [_jsxs("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' }, children: [_jsx("span", { style: S.eventName, children: e.event }), _jsx("span", { style: S.eventTime, children: formatTime(e.ts) })] }), Object.keys(e.payload).length > 0 && (_jsx("div", { style: S.eventPayload, children: JSON.stringify(e.payload) }))] }, events.length - i))) }));
}
// ── Schema Panel ───────────────────────────────────────────────────────────
function SchemaPanel({ keys, data }) {
    const present = keys.filter(k => k in data && data[k] !== undefined && data[k] !== '');
    const missing = keys.filter(k => !(k in data) || data[k] === undefined || data[k] === '');
    const pct = keys.length > 0 ? Math.round((present.length / keys.length) * 100) : 0;
    return (_jsxs("div", { children: [_jsx("div", { style: S.coverageBar, children: _jsx("div", { style: { ...S.coverageFill, width: `${pct}%` } }) }), _jsxs("div", { style: S.coverageLabel, children: [pct, "% fields covered"] }), missing.length > 0 && (_jsxs("div", { style: { marginBottom: 8 }, children: [_jsx("div", { style: S.sectionTitle, children: "Missing" }), missing.map(k => (_jsxs("div", { style: S.schemaRow, children: [_jsx("span", { style: { fontSize: 8, color: TEXT_MUTED }, children: '○' }), _jsx("span", { style: S.schemaKey, children: k })] }, k)))] })), present.length > 0 && (_jsxs("div", { children: [_jsx("div", { style: S.sectionTitle, children: "Provided" }), present.map(k => (_jsxs("div", { style: S.schemaRow, children: [_jsx("span", { style: { fontSize: 8, color: TEXT_SEC }, children: '●' }), _jsx("span", { style: S.schemaKey, children: k })] }, k)))] }))] }));
}
// ── Resize Handle ──────────────────────────────────────────────────────────
function ResizeHandle({ dir, dragging, onStart, }) {
    const [hover, setHover] = useState(false);
    const active = dragging === dir || hover;
    const pos = dir === 'right'
        ? { position: 'absolute', top: '20%', right: -12, width: 6, height: '60%', cursor: 'ew-resize', borderRadius: 3 }
        : dir === 'bottom'
            ? { position: 'absolute', bottom: -12, left: '20%', width: '60%', height: 6, cursor: 'ns-resize', borderRadius: 3 }
            : { position: 'absolute', bottom: -12, right: -12, width: 12, height: 12, cursor: 'nwse-resize', borderRadius: 3 };
    return (_jsx("div", { onMouseDown: e => onStart(dir, e), onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), style: { ...pos, background: active ? TEXT_SEC : BORDER, transition: dragging ? 'none' : 'background 150ms' } }));
}
// ── Small helpers ──────────────────────────────────────────────────────────
function Check() {
    return (_jsx("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", style: { flexShrink: 0 }, children: _jsx("path", { d: "M2.5 6.5L5 9l4.5-6", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round", strokeLinejoin: "round" }) }));
}
function formatTime(ts) {
    const d = new Date(ts);
    return `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}:${d.getSeconds().toString().padStart(2, '0')}`;
}
// ── Styles ─────────────────────────────────────────────────────────────────
const FONT = '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
const MONO = 'ui-monospace, "SF Mono", Monaco, "Cascadia Mono", monospace';
const BG = '#161616';
const BG_ELEVATED = '#1e1e1e';
const BG_SURFACE = '#252525';
const TEXT = '#e4e4e4';
const TEXT_SEC = '#999';
const TEXT_MUTED = '#666';
const BORDER = '#2a2a2a';
const S = {
    topBar: {
        position: 'fixed', top: 0, left: 0, right: 0, height: TOP_BAR_H,
        background: BG, borderBottom: `1px solid ${BORDER}`, zIndex: 99999,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 12px', fontFamily: FONT, fontSize: 12, color: TEXT,
        userSelect: 'none',
    },
    topBarLeft: { display: 'flex', alignItems: 'center', gap: 10 },
    topBarRight: { display: 'flex', alignItems: 'center', gap: 6 },
    topBarIconBtn: {
        position: 'relative',
        background: 'none', border: '1px solid transparent', borderRadius: 6,
        width: 30, height: 30,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', color: TEXT_SEC, padding: 0,
    },
    dimsBadge: {
        fontFamily: MONO, color: TEXT_SEC, fontSize: 11,
        padding: '2px 6px', borderRadius: 4, background: BG_SURFACE,
    },
    zoomBadge: { fontFamily: MONO, color: TEXT_MUTED, fontSize: 10 },
    dropdownBtn: {
        display: 'flex', alignItems: 'center',
        background: BG_SURFACE, border: `1px solid ${BORDER}`, borderRadius: 6,
        padding: '4px 10px', color: TEXT, fontSize: 12, fontFamily: FONT,
        cursor: 'pointer', fontWeight: 500,
    },
    dropdown: {
        position: 'absolute', top: 'calc(100% + 6px)', left: 0,
        minWidth: 220, maxHeight: 420, overflowY: 'auto',
        background: BG_ELEVATED, border: `1px solid ${BORDER}`, borderRadius: 10,
        boxShadow: '0 12px 40px rgba(0,0,0,0.5), 0 0 0 0.5px rgba(255,255,255,0.04)',
        padding: 4, zIndex: 100000,
    },
    dropdownItem: {
        display: 'flex', alignItems: 'center', gap: 8, width: '100%',
        padding: '6px 10px', borderRadius: 6,
        background: 'transparent', border: 'none',
        color: TEXT_SEC, fontSize: 12, cursor: 'pointer', fontFamily: FONT,
    },
    dropdownItemActive: { background: BG_SURFACE, color: TEXT },
    dropdownDivider: { height: 1, background: BORDER, margin: '4px 8px' },
    customDimRow: { display: 'flex', alignItems: 'center', gap: 6, padding: '4px 8px' },
    customDimInput: {
        flex: 1, padding: '4px 6px', borderRadius: 4,
        background: BG_SURFACE, border: `1px solid ${BORDER}`, color: TEXT,
        fontFamily: MONO, fontSize: 11, textAlign: 'center',
        outline: 'none', width: 0,
    },
    groupTitle: {
        fontSize: 10, fontWeight: 600, color: TEXT_MUTED,
        textTransform: 'uppercase', letterSpacing: 0.8,
        padding: '6px 10px 2px',
    },
    presetDims: { fontFamily: MONO, fontSize: 10, color: TEXT_MUTED, flexShrink: 0 },
    frameArea: {
        minHeight: '100vh', paddingTop: TOP_BAR_H + 16, paddingBottom: 16,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: '#1c1c1e',
    },
    badge: {
        position: 'absolute', top: -4, right: -4,
        minWidth: 14, height: 14, borderRadius: 7,
        background: '#c2185b', color: '#fff', fontSize: 9, fontWeight: 700,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '0 3px', lineHeight: 1,
    },
    ayPanel: {
        position: 'absolute', top: 'calc(100% + 6px)', right: 0,
        width: 300, maxHeight: 400,
        background: BG_ELEVATED, border: `1px solid ${BORDER}`, borderRadius: 10,
        boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
        overflow: 'hidden', zIndex: 100000,
        display: 'flex', flexDirection: 'column',
    },
    ayTabBar: {
        display: 'flex', gap: 0, borderBottom: `1px solid ${BORDER}`, padding: '0 4px',
    },
    ayTab: {
        flex: 1, padding: '9px 0 7px', background: 'none',
        borderTop: 'none', borderRight: 'none', borderLeft: 'none',
        borderBottom: '2px solid transparent',
        color: TEXT_MUTED, fontSize: 11, fontWeight: 500,
        cursor: 'pointer', fontFamily: FONT, letterSpacing: 0.2,
    },
    ayTabActive: { color: TEXT, borderBottom: `2px solid ${TEXT_SEC}` },
    ayBody: { padding: 10, overflow: 'auto', flex: 1, maxHeight: 340 },
    empty: {
        color: TEXT_MUTED, fontSize: 12, textAlign: 'center',
        padding: '20px 12px', display: 'flex', flexDirection: 'column',
        alignItems: 'center',
    },
    eventRow: {
        padding: '6px 8px', borderRadius: 6, background: BG_SURFACE,
        border: `1px solid ${BORDER}`,
    },
    eventName: { fontWeight: 600, fontSize: 11, color: TEXT, fontFamily: MONO },
    eventTime: { fontSize: 10, color: TEXT_MUTED },
    eventPayload: {
        fontSize: 10, color: TEXT_MUTED, marginTop: 3,
        fontFamily: MONO, wordBreak: 'break-all', lineHeight: 1.4,
    },
    coverageBar: {
        height: 3, background: BG_SURFACE, borderRadius: 2, overflow: 'hidden', marginBottom: 6,
    },
    coverageFill: {
        height: '100%', background: TEXT_SEC, borderRadius: 2, transition: 'width 300ms',
    },
    coverageLabel: { fontSize: 11, color: TEXT_MUTED, marginBottom: 10 },
    sectionTitle: {
        fontSize: 10, fontWeight: 600, color: TEXT_MUTED,
        textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 3,
    },
    schemaRow: {
        display: 'flex', alignItems: 'center', gap: 7, padding: '2px 0', fontSize: 12,
    },
    schemaKey: { fontFamily: MONO, fontSize: 11, color: TEXT_SEC },
};
