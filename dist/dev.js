'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useRef, useState, } from 'react';
import { createPortal } from 'react-dom';
import { AlwaysYouContext } from './context';
// ── AlwaysYouProvider ────────────────────────────────────────────────────────
export function AlwaysYouProvider({ data, mode = 'full', schema, onTrack, children, }) {
    const [overrideMode, setOverrideMode] = useState(null);
    const effectiveMode = overrideMode ?? mode;
    const eventsRef = useRef([]);
    const [eventTick, setEventTick] = useState(0);
    const [portalMounted, setPortalMounted] = useState(false);
    useEffect(() => { setPortalMounted(true); }, []);
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
                open: '#', track: '#', visit: '#', error: '#',
            },
        };
        const track = (event, payload) => {
            const entry = { event, payload: payload ?? {}, ts: Date.now() };
            eventsRef.current = [...eventsRef.current.slice(-49), entry];
            setEventTick((t) => t + 1);
            console.log(`%c[track] ${event}`, 'color:#C2185B;font-weight:600', payload ?? {});
            onTrack?.(event, payload);
        };
        return { data: merged, track };
    }, [data, effectiveMode, onTrack]);
    const toolbar = (_jsx(DevToolbar, { mode: effectiveMode, onModeChange: setOverrideMode, events: eventsRef.current, eventTick: eventTick, schema: schema, data: data }));
    return (_jsxs(AlwaysYouContext.Provider, { value: value, children: [children, portalMounted ? createPortal(toolbar, document.body) : null] }));
}
// ── PhoneFrame ───────────────────────────────────────────────────────────────
export function PhoneFrame({ children }) {
    return (_jsx("div", { style: {
            minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: '#1c1c1e', padding: '24px',
        }, children: _jsx("div", { style: {
                width: 390, height: 844, maxHeight: 'calc(100vh - 48px)',
                borderRadius: 48, overflow: 'hidden', position: 'relative',
                border: '10px solid #2a2a2e',
                boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
                background: '#000',
                transform: 'translateZ(0)',
            }, children: _jsx("div", { style: { width: '100%', height: '100%', overflow: 'auto' }, children: children }) }) }));
}
// ── DevToolbar ───────────────────────────────────────────────────────────────
const MODES = ['full', 'preview', 'demo', 'card'];
const MODE_ICONS = { full: '▶', preview: '□', demo: '◇', card: '▄' };
const MODE_DESCRIPTIONS = {
    full: 'Live gift experience — the real recipient view.',
    preview: 'Preview — lock screens are skipped.',
    demo: 'Demo page — isPreview + isDemo are true.',
    card: 'Card — static thumbnail, no interaction.',
};
function DevToolbar({ mode, onModeChange, events, eventTick, schema, data, }) {
    const [open, setOpen] = useState(false);
    const [tab, setTab] = useState('mode');
    const schemaKeys = useMemo(() => {
        if (!schema?.sections)
            return null;
        const keys = [];
        for (const section of schema.sections) {
            for (const field of section.fields ?? []) {
                if (field.key)
                    keys.push(field.key);
            }
        }
        return keys;
    }, [schema]);
    const schemaCoverage = useMemo(() => {
        if (!schemaKeys)
            return null;
        const filled = schemaKeys.filter((k) => k in data && data[k] !== undefined && data[k] !== '');
        return { filled: filled.length, total: schemaKeys.length };
    }, [schemaKeys, data]);
    if (!open) {
        return (_jsx("button", { onClick: () => setOpen(true), style: S.fab, title: "AlwaysYou Dev Tools", children: _jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: _jsx("path", { d: "M2 4h12M2 8h8M2 12h10", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }) }) }));
    }
    return (_jsxs("div", { style: S.panel, children: [_jsxs("div", { style: S.header, children: [_jsxs("div", { style: S.headerLeft, children: [_jsx("span", { style: S.headerDot }), _jsx("span", { style: S.headerTitle, children: "Dev Tools" })] }), _jsx("button", { onClick: () => setOpen(false), style: S.closeBtn, children: _jsx("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: _jsx("path", { d: "M3 3l8 8M11 3l-8 8", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }) }) })] }), _jsxs("div", { style: S.tabs, children: [_jsx(TabBtn, { active: tab === 'mode', onClick: () => setTab('mode'), children: "Mode" }), _jsxs(TabBtn, { active: tab === 'events', onClick: () => setTab('events'), children: ["Events", events.length > 0 ? ` · ${events.length}` : ''] }), schemaKeys && (_jsxs(TabBtn, { active: tab === 'schema', onClick: () => setTab('schema'), children: ["Data", schemaCoverage ? ` · ${schemaCoverage.filled}/${schemaCoverage.total}` : ''] }))] }), _jsxs("div", { style: S.body, children: [tab === 'mode' && (_jsx(ModePanel, { mode: mode, onModeChange: onModeChange })), tab === 'events' && (_jsx(EventsPanel, { events: events })), tab === 'schema' && schemaKeys && (_jsx(SchemaPanel, { keys: schemaKeys, data: data }))] })] }));
}
// ── Tab panels ───────────────────────────────────────────────────────────────
function ModePanel({ mode, onModeChange }) {
    return (_jsxs("div", { children: [_jsx("div", { style: S.modeList, children: MODES.map((m) => {
                    const active = mode === m;
                    return (_jsxs("button", { onClick: () => onModeChange(m), style: {
                            ...S.modeItem,
                            ...(active ? S.modeItemActive : {}),
                        }, children: [_jsx("span", { style: { ...S.modeIcon, ...(active ? S.modeIconActive : {}) }, children: MODE_ICONS[m] }), _jsx("span", { style: S.modeLabel, children: m }), active && _jsx("span", { style: S.modeCheck, children: "\u25CF" })] }, m));
                }) }), _jsx("div", { style: S.hint, children: MODE_DESCRIPTIONS[mode] })] }));
}
function EventsPanel({ events }) {
    if (events.length === 0) {
        return (_jsxs("div", { style: S.empty, children: [_jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", style: { marginBottom: 8, opacity: 0.4 }, children: [_jsx("circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "1.5" }), _jsx("path", { d: "M12 7v5l3 3", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })] }), _jsx("div", { children: "No events yet" }), _jsx("div", { style: { fontSize: 11, opacity: 0.6, marginTop: 4 }, children: "Interact with your template to see tracked events here." })] }));
    }
    return (_jsx("div", { style: S.eventList, children: [...events].reverse().map((e, i) => (_jsxs("div", { style: S.eventRow, children: [_jsxs("div", { style: S.eventHeader, children: [_jsx("span", { style: S.eventName, children: e.event }), _jsx("span", { style: S.eventTime, children: formatTime(e.ts) })] }), Object.keys(e.payload).length > 0 && (_jsx("div", { style: S.eventPayload, children: JSON.stringify(e.payload) }))] }, events.length - i))) }));
}
function SchemaPanel({ keys, data }) {
    const present = keys.filter((k) => k in data && data[k] !== undefined && data[k] !== '');
    const missing = keys.filter((k) => !(k in data) || data[k] === undefined || data[k] === '');
    const pct = keys.length > 0 ? Math.round((present.length / keys.length) * 100) : 0;
    return (_jsxs("div", { children: [_jsx("div", { style: S.coverageBar, children: _jsx("div", { style: { ...S.coverageFill, width: `${pct}%` } }) }), _jsxs("div", { style: S.coverageLabel, children: [pct, "% fields covered"] }), missing.length > 0 && (_jsxs("div", { style: S.schemaSection, children: [_jsx("div", { style: S.schemaSectionTitle, children: "Missing" }), missing.map((k) => (_jsxs("div", { style: S.schemaRow, children: [_jsx("span", { style: S.schemaDot, children: "\u25CB" }), _jsx("span", { style: S.schemaKey, children: k })] }, k)))] })), present.length > 0 && (_jsxs("div", { style: S.schemaSection, children: [_jsx("div", { style: S.schemaSectionTitle, children: "Provided" }), present.map((k) => (_jsxs("div", { style: S.schemaRow, children: [_jsx("span", { style: S.schemaDotFilled, children: "\u25CF" }), _jsx("span", { style: S.schemaKey, children: k })] }, k)))] }))] }));
}
// ── Helpers ──────────────────────────────────────────────────────────────────
function TabBtn({ active, onClick, children }) {
    return (_jsx("button", { onClick: onClick, style: { ...S.tabBtn, ...(active ? S.tabBtnActive : {}) }, children: children }));
}
function formatTime(ts) {
    const d = new Date(ts);
    return `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}:${d.getSeconds().toString().padStart(2, '0')}`;
}
// ── Styles ───────────────────────────────────────────────────────────────────
const FONT = '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
const BG = '#161616';
const BG_ELEVATED = '#1c1c1c';
const BG_SURFACE = '#232323';
const TEXT = '#e4e4e4';
const TEXT_SEC = '#999';
const TEXT_MUTED = '#666';
const BORDER = '#2a2a2a';
const S = {
    fab: {
        position: 'fixed', bottom: 16, right: 16, zIndex: 99999,
        width: 36, height: 36, borderRadius: 10,
        background: BG_ELEVATED, color: TEXT_SEC, border: `1px solid ${BORDER}`,
        fontFamily: FONT, fontSize: 11, fontWeight: 500,
        cursor: 'pointer', boxShadow: '0 2px 12px rgba(0,0,0,0.4)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background 150ms',
    },
    panel: {
        position: 'fixed', bottom: 16, right: 16, zIndex: 99999,
        width: 300, maxHeight: 440,
        background: BG, borderRadius: 12, border: `1px solid ${BORDER}`,
        boxShadow: '0 8px 40px rgba(0,0,0,0.55), 0 0 0 0.5px rgba(255,255,255,0.04)',
        fontFamily: FONT, fontSize: 13, color: TEXT,
        display: 'flex', flexDirection: 'column', overflow: 'hidden',
    },
    header: {
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '10px 12px', borderBottom: `1px solid ${BORDER}`,
    },
    headerLeft: {
        display: 'flex', alignItems: 'center', gap: 8,
    },
    headerDot: {
        width: 7, height: 7, borderRadius: '50%', background: '#4ade80',
        flexShrink: 0,
    },
    headerTitle: { fontWeight: 600, fontSize: 12, color: TEXT_SEC, letterSpacing: 0.2 },
    closeBtn: {
        background: 'none', border: 'none', color: TEXT_MUTED,
        cursor: 'pointer', padding: 2, lineHeight: 1,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: 4,
    },
    tabs: {
        display: 'flex', gap: 0, borderBottom: `1px solid ${BORDER}`,
        padding: '0 4px',
    },
    tabBtn: {
        flex: 1, padding: '9px 0 7px', background: 'none',
        borderTop: 'none', borderRight: 'none', borderLeft: 'none',
        borderBottom: '2px solid transparent',
        color: TEXT_MUTED, fontSize: 11, fontWeight: 500,
        cursor: 'pointer', fontFamily: FONT, letterSpacing: 0.2,
        transition: 'color 150ms',
    },
    tabBtnActive: {
        color: TEXT, borderBottom: `2px solid ${TEXT_SEC}`,
    },
    body: {
        padding: '12px', overflow: 'auto', flex: 1, maxHeight: 320,
    },
    hint: {
        fontSize: 11, color: TEXT_MUTED, marginTop: 10, lineHeight: 1.5,
        padding: '0 2px',
    },
    // Mode panel
    modeList: {
        display: 'flex', flexDirection: 'column', gap: 3,
    },
    modeItem: {
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '8px 10px', borderRadius: 8,
        background: 'transparent', border: 'none',
        color: TEXT_SEC, fontSize: 12, cursor: 'pointer', fontFamily: FONT,
        textTransform: 'capitalize',
        transition: 'background 150ms',
    },
    modeItemActive: {
        background: BG_SURFACE, color: TEXT,
    },
    modeIcon: {
        width: 24, height: 24, borderRadius: 6,
        background: BG_SURFACE, display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 10, color: TEXT_MUTED, flexShrink: 0,
    },
    modeIconActive: {
        background: '#333', color: TEXT,
    },
    modeLabel: {
        flex: 1, textAlign: 'left',
    },
    modeCheck: {
        fontSize: 6, color: TEXT_SEC,
    },
    // Events panel
    empty: {
        color: TEXT_MUTED, fontSize: 12, textAlign: 'center',
        padding: '24px 16px', display: 'flex', flexDirection: 'column',
        alignItems: 'center',
    },
    eventList: {
        display: 'flex', flexDirection: 'column', gap: 4,
    },
    eventRow: {
        padding: '7px 9px', borderRadius: 6, background: BG_ELEVATED,
        border: `1px solid ${BORDER}`,
    },
    eventHeader: {
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    },
    eventName: {
        fontWeight: 600, fontSize: 11, color: TEXT,
        fontFamily: 'ui-monospace, "SF Mono", Monaco, "Cascadia Mono", monospace',
    },
    eventTime: {
        fontSize: 10, color: TEXT_MUTED,
    },
    eventPayload: {
        fontSize: 10, color: TEXT_MUTED, marginTop: 4,
        fontFamily: 'ui-monospace, "SF Mono", Monaco, "Cascadia Mono", monospace',
        wordBreak: 'break-all', lineHeight: 1.5,
    },
    // Schema / Data panel
    coverageBar: {
        height: 3, background: BG_SURFACE, borderRadius: 2, overflow: 'hidden',
        marginBottom: 6,
    },
    coverageFill: {
        height: '100%', background: TEXT_SEC, borderRadius: 2,
        transition: 'width 300ms',
    },
    coverageLabel: {
        fontSize: 11, color: TEXT_MUTED, marginBottom: 12,
    },
    schemaSection: {
        marginBottom: 10,
    },
    schemaSectionTitle: {
        fontSize: 10, fontWeight: 600, color: TEXT_MUTED, textTransform: 'uppercase',
        letterSpacing: 0.8, marginBottom: 4,
    },
    schemaRow: {
        display: 'flex', alignItems: 'center', gap: 7,
        padding: '3px 0', fontSize: 12,
    },
    schemaDot: {
        fontSize: 8, color: TEXT_MUTED,
    },
    schemaDotFilled: {
        fontSize: 8, color: TEXT_SEC,
    },
    schemaKey: {
        fontFamily: 'ui-monospace, "SF Mono", Monaco, "Cascadia Mono", monospace',
        fontSize: 11, color: TEXT_SEC,
    },
};
