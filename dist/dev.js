'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useRef, useState, } from 'react';
import { AlwaysYouContext } from './context';
// ── AlwaysYouProvider ────────────────────────────────────────────────────────
export function AlwaysYouProvider({ data, mode = 'full', schema, onTrack, children, }) {
    const [overrideMode, setOverrideMode] = useState(null);
    const effectiveMode = overrideMode ?? mode;
    const eventsRef = useRef([]);
    const [eventTick, setEventTick] = useState(0);
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
    return (_jsxs(AlwaysYouContext.Provider, { value: value, children: [children, _jsx(DevToolbar, { mode: effectiveMode, onModeChange: setOverrideMode, events: eventsRef.current, eventTick: eventTick, schema: schema, data: data })] }));
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
            }, children: _jsx("div", { style: { width: '100%', height: '100%', overflow: 'auto' }, children: children }) }) }));
}
// ── DevToolbar ───────────────────────────────────────────────────────────────
const MODES = ['full', 'preview', 'demo', 'card'];
function DevToolbar({ mode, onModeChange, events, eventTick, schema, data, }) {
    const [open, setOpen] = useState(false);
    const [tab, setTab] = useState('mode');
    // Schema coverage
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
    if (!open) {
        return (_jsx("button", { onClick: () => setOpen(true), style: S.fab, title: "AlwaysYou Dev Tools", children: "AY" }));
    }
    return (_jsxs("div", { style: S.panel, children: [_jsxs("div", { style: S.header, children: [_jsx("span", { style: S.headerTitle, children: "AlwaysYou Dev" }), _jsx("button", { onClick: () => setOpen(false), style: S.closeBtn, children: "\u00D7" })] }), _jsxs("div", { style: S.tabs, children: [_jsx(TabBtn, { active: tab === 'mode', onClick: () => setTab('mode'), children: "Mode" }), _jsxs(TabBtn, { active: tab === 'events', onClick: () => setTab('events'), children: ["Events", events.length > 0 ? ` (${events.length})` : ''] }), schemaKeys && (_jsx(TabBtn, { active: tab === 'schema', onClick: () => setTab('schema'), children: "Schema" }))] }), _jsxs("div", { style: S.body, children: [tab === 'mode' && (_jsx(ModePanel, { mode: mode, onModeChange: onModeChange })), tab === 'events' && (_jsx(EventsPanel, { events: events })), tab === 'schema' && schemaKeys && (_jsx(SchemaPanel, { keys: schemaKeys, data: data }))] })] }));
}
// ── Tab panels ───────────────────────────────────────────────────────────────
function ModePanel({ mode, onModeChange }) {
    return (_jsxs("div", { children: [_jsx("div", { style: S.label, children: "Render mode" }), _jsx("div", { style: S.modeGrid, children: MODES.map((m) => (_jsx("button", { onClick: () => onModeChange(m), style: {
                        ...S.modeBtn,
                        ...(mode === m ? S.modeBtnActive : {}),
                    }, children: m }, m))) }), _jsxs("div", { style: S.hint, children: [mode === 'full' && 'Live gift — the real recipient experience.', mode === 'preview' && 'Preview — lock screens are skipped.', mode === 'demo' && 'Demo page — isPreview + isDemo are true.', mode === 'card' && 'Card — static frame, no interaction.'] })] }));
}
function EventsPanel({ events }) {
    if (events.length === 0) {
        return _jsx("div", { style: S.empty, children: "No events yet. Interact with your template." });
    }
    return (_jsx("div", { style: S.eventList, children: [...events].reverse().map((e, i) => (_jsxs("div", { style: S.eventRow, children: [_jsx("span", { style: S.eventName, children: e.event }), _jsx("span", { style: S.eventTime, children: formatTime(e.ts) }), Object.keys(e.payload).length > 0 && (_jsx("div", { style: S.eventPayload, children: JSON.stringify(e.payload) }))] }, events.length - i))) }));
}
function SchemaPanel({ keys, data }) {
    const present = keys.filter((k) => k in data && data[k] !== undefined && data[k] !== '');
    const missing = keys.filter((k) => !(k in data) || data[k] === undefined || data[k] === '');
    return (_jsxs("div", { children: [_jsxs("div", { style: S.label, children: ["Demo data coverage: ", present.length, "/", keys.length] }), present.map((k) => (_jsxs("div", { style: S.schemaRow, children: [_jsx("span", { style: S.checkGreen, children: "\u2713" }), " ", k] }, k))), missing.map((k) => (_jsxs("div", { style: S.schemaRow, children: [_jsx("span", { style: S.checkRed, children: "\u2717" }), " ", k, _jsx("span", { style: S.schemaMissing, children: " \u2014 missing in demo data" })] }, k)))] }));
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
const FONT = 'system-ui, -apple-system, sans-serif';
const BG = '#1e1e2e';
const BG_HOVER = '#2a2a3e';
const ACCENT = '#C2185B';
const TEXT = '#e0e0e8';
const TEXT_DIM = '#888896';
const BORDER = '#333346';
const S = {
    fab: {
        position: 'fixed', bottom: 16, right: 16, zIndex: 99999,
        width: 40, height: 40, borderRadius: 20,
        background: ACCENT, color: '#fff', border: 'none',
        fontFamily: FONT, fontSize: 11, fontWeight: 700, letterSpacing: 1,
        cursor: 'pointer', boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
    },
    panel: {
        position: 'fixed', bottom: 16, right: 16, zIndex: 99999,
        width: 320, maxHeight: 420,
        background: BG, borderRadius: 12, border: `1px solid ${BORDER}`,
        boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
        fontFamily: FONT, fontSize: 13, color: TEXT,
        display: 'flex', flexDirection: 'column', overflow: 'hidden',
    },
    header: {
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '10px 14px', borderBottom: `1px solid ${BORDER}`,
    },
    headerTitle: { fontWeight: 700, fontSize: 13, letterSpacing: 0.5 },
    closeBtn: {
        background: 'none', border: 'none', color: TEXT_DIM,
        fontSize: 18, cursor: 'pointer', padding: 0, lineHeight: 1,
    },
    tabs: {
        display: 'flex', borderBottom: `1px solid ${BORDER}`,
    },
    tabBtn: {
        flex: 1, padding: '8px 0', background: 'none', border: 'none',
        color: TEXT_DIM, fontSize: 12, cursor: 'pointer', fontFamily: FONT,
    },
    tabBtnActive: {
        color: TEXT, borderBottom: `2px solid ${ACCENT}`,
    },
    body: {
        padding: '12px 14px', overflow: 'auto', flex: 1, maxHeight: 300,
    },
    label: {
        fontSize: 11, color: TEXT_DIM, textTransform: 'uppercase',
        letterSpacing: 1, marginBottom: 8,
    },
    hint: {
        fontSize: 12, color: TEXT_DIM, marginTop: 10, lineHeight: 1.4,
    },
    modeGrid: {
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6,
    },
    modeBtn: {
        padding: '8px 0', borderRadius: 6,
        background: BG_HOVER, border: `1px solid ${BORDER}`,
        color: TEXT, fontSize: 12, cursor: 'pointer', fontFamily: FONT,
        textTransform: 'capitalize',
    },
    modeBtnActive: {
        background: ACCENT, borderColor: ACCENT, color: '#fff', fontWeight: 600,
    },
    empty: {
        color: TEXT_DIM, fontSize: 12, textAlign: 'center', padding: '20px 0',
    },
    eventList: {
        display: 'flex', flexDirection: 'column', gap: 6,
    },
    eventRow: {
        padding: '6px 8px', borderRadius: 6, background: BG_HOVER,
    },
    eventName: {
        fontWeight: 600, fontSize: 12, color: ACCENT,
    },
    eventTime: {
        fontSize: 11, color: TEXT_DIM, marginLeft: 8,
    },
    eventPayload: {
        fontSize: 11, color: TEXT_DIM, marginTop: 4,
        fontFamily: 'monospace', wordBreak: 'break-all',
    },
    schemaRow: {
        padding: '4px 0', fontSize: 12,
    },
    checkGreen: { color: '#4ade80' },
    checkRed: { color: '#f87171' },
    schemaMissing: { color: TEXT_DIM, fontSize: 11 },
};
