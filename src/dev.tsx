'use client'

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react'
import { createPortal } from 'react-dom'
import { AlwaysYouContext } from './context'
import type { TemplateData, TrackFn } from './types'

// ── Types ────────────────────────────────────────────────────────────────────

type Mode = 'full' | 'preview' | 'card' | 'demo'
type TrackedEvent = { event: string; payload: Record<string, unknown>; ts: number }
type SchemaJson = { sections?: Array<{ fields?: Array<{ key?: string }> }> }

// ── AlwaysYouProvider ────────────────────────────────────────────────────────

export function AlwaysYouProvider({
  data,
  mode = 'full',
  schema,
  onTrack,
  children,
}: {
  data: Record<string, unknown>
  mode?: Mode
  schema?: SchemaJson
  onTrack?: TrackFn
  children: ReactNode
}) {
  const [overrideMode, setOverrideMode] = useState<Mode | null>(null)
  const effectiveMode = overrideMode ?? mode

  const eventsRef = useRef<TrackedEvent[]>([])
  const [eventTick, setEventTick] = useState(0)
  const [portalMounted, setPortalMounted] = useState(false)
  useEffect(() => { setPortalMounted(true) }, [])

  const value = useMemo(() => {
    const merged: TemplateData = {
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
    }
    const track: TrackFn = (event, payload) => {
      const entry = { event, payload: payload ?? {}, ts: Date.now() }
      eventsRef.current = [...eventsRef.current.slice(-49), entry]
      setEventTick((t) => t + 1)
      console.log(`%c[track] ${event}`, 'color:#C2185B;font-weight:600', payload ?? {})
      onTrack?.(event, payload)
    }
    return { data: merged, track }
  }, [data, effectiveMode, onTrack])

  const toolbar = (
    <DevToolbar
      mode={effectiveMode}
      onModeChange={setOverrideMode}
      events={eventsRef.current}
      eventTick={eventTick}
      schema={schema}
      data={data}
    />
  )

  return (
    <AlwaysYouContext.Provider value={value}>
      {children}
      {portalMounted ? createPortal(toolbar, document.body) : null}
    </AlwaysYouContext.Provider>
  )
}

// ── PhoneFrame ───────────────────────────────────────────────────────────────
// Uses an <iframe> so the template gets a true device-sized viewport.
// 100vw/100vh, window.innerWidth/Height, and `fixed inset-0` all resolve
// against the phone dimensions (390×844), not the desktop browser.

export function PhoneFrame({
  children,
  width = 390,
  height = 844,
}: {
  children: ReactNode
  width?: number
  height?: number
}) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null)
  const [iframeBody, setIframeBody] = useState<HTMLElement | null>(null)

  const onLoad = useCallback(() => {
    const doc = iframeRef.current?.contentDocument
    if (!doc) return

    // Copy all stylesheets from the parent into the iframe
    const parentStyles = document.querySelectorAll('style, link[rel="stylesheet"]')
    parentStyles.forEach((node) => {
      doc.head.appendChild(node.cloneNode(true))
    })

    // Watch for new stylesheets added to parent <head> (HMR, dynamic imports)
    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (
            node instanceof HTMLStyleElement ||
            (node instanceof HTMLLinkElement && node.rel === 'stylesheet')
          ) {
            doc.head.appendChild(node.cloneNode(true))
          }
        })
      }
    })
    observer.observe(document.head, { childList: true })

    // Reset iframe body defaults
    doc.body.style.margin = '0'
    doc.body.style.padding = '0'
    doc.body.style.overflow = 'auto'
    doc.body.style.width = '100%'
    doc.body.style.height = '100%'
    doc.documentElement.style.height = '100%'

    setIframeBody(doc.body)

    return () => observer.disconnect()
  }, [])

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: '#1c1c1e', padding: '24px',
    }}>
      <div style={{
        width: width + 20, height: Math.min(height + 20, (typeof window !== 'undefined' ? window.innerHeight : 900) - 48),
        borderRadius: 48, overflow: 'hidden', position: 'relative',
        border: '10px solid #2a2a2e',
        boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
        background: '#000',
      }}>
        <iframe
          ref={iframeRef}
          onLoad={onLoad}
          title="PhoneFrame"
          style={{
            width, height,
            border: 'none',
            display: 'block',
            background: '#fff',
          }}
          srcDoc="<!DOCTYPE html><html style='height:100%'><head><meta charset='utf-8'></head><body style='margin:0;height:100%'></body></html>"
        />
        {iframeBody && createPortal(children, iframeBody)}
      </div>
    </div>
  )
}

// ── DevToolbar ───────────────────────────────────────────────────────────────

const MODES: Mode[] = ['full', 'preview', 'demo', 'card']
const MODE_ICONS: Record<Mode, string> = { full: '▶', preview: '□', demo: '◇', card: '▄' }
const MODE_DESCRIPTIONS: Record<Mode, string> = {
  full: 'Live gift experience — the real recipient view.',
  preview: 'Preview — lock screens are skipped.',
  demo: 'Demo page — isPreview + isDemo are true.',
  card: 'Card — static thumbnail, no interaction.',
}

function DevToolbar({
  mode,
  onModeChange,
  events,
  eventTick,
  schema,
  data,
}: {
  mode: Mode
  onModeChange: (m: Mode) => void
  events: TrackedEvent[]
  eventTick: number
  schema?: SchemaJson
  data: Record<string, unknown>
}) {
  const [open, setOpen] = useState(false)
  const [tab, setTab] = useState<'mode' | 'events' | 'schema'>('mode')

  const schemaKeys = useMemo(() => {
    if (!schema?.sections) return null
    const keys: string[] = []
    for (const section of schema.sections) {
      for (const field of section.fields ?? []) {
        if (field.key) keys.push(field.key)
      }
    }
    return keys
  }, [schema])

  const schemaCoverage = useMemo(() => {
    if (!schemaKeys) return null
    const filled = schemaKeys.filter((k) => k in data && data[k] !== undefined && data[k] !== '')
    return { filled: filled.length, total: schemaKeys.length }
  }, [schemaKeys, data])

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        style={S.fab}
        title="AlwaysYou Dev Tools"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2 4h12M2 8h8M2 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>
    )
  }

  return (
    <div style={S.panel}>
      <div style={S.header}>
        <div style={S.headerLeft}>
          <span style={S.headerDot} />
          <span style={S.headerTitle}>Dev Tools</span>
        </div>
        <button onClick={() => setOpen(false)} style={S.closeBtn}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      <div style={S.tabs}>
        <TabBtn active={tab === 'mode'} onClick={() => setTab('mode')}>Mode</TabBtn>
        <TabBtn active={tab === 'events'} onClick={() => setTab('events')}>
          Events{events.length > 0 ? ` · ${events.length}` : ''}
        </TabBtn>
        {schemaKeys && (
          <TabBtn active={tab === 'schema'} onClick={() => setTab('schema')}>
            Data{schemaCoverage ? ` · ${schemaCoverage.filled}/${schemaCoverage.total}` : ''}
          </TabBtn>
        )}
      </div>

      <div style={S.body}>
        {tab === 'mode' && (
          <ModePanel mode={mode} onModeChange={onModeChange} />
        )}
        {tab === 'events' && (
          <EventsPanel events={events} />
        )}
        {tab === 'schema' && schemaKeys && (
          <SchemaPanel keys={schemaKeys} data={data} />
        )}
      </div>
    </div>
  )
}

// ── Tab panels ───────────────────────────────────────────────────────────────

function ModePanel({ mode, onModeChange }: { mode: Mode; onModeChange: (m: Mode) => void }) {
  return (
    <div>
      <div style={S.modeList}>
        {MODES.map((m) => {
          const active = mode === m
          return (
            <button
              key={m}
              onClick={() => onModeChange(m)}
              style={{
                ...S.modeItem,
                ...(active ? S.modeItemActive : {}),
              }}
            >
              <span style={{ ...S.modeIcon, ...(active ? S.modeIconActive : {}) }}>
                {MODE_ICONS[m]}
              </span>
              <span style={S.modeLabel}>{m}</span>
              {active && <span style={S.modeCheck}>●</span>}
            </button>
          )
        })}
      </div>
      <div style={S.hint}>{MODE_DESCRIPTIONS[mode]}</div>
    </div>
  )
}

function EventsPanel({ events }: { events: TrackedEvent[] }) {
  if (events.length === 0) {
    return (
      <div style={S.empty}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ marginBottom: 8, opacity: 0.4 }}>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <div>No events yet</div>
        <div style={{ fontSize: 11, opacity: 0.6, marginTop: 4 }}>Interact with your template to see tracked events here.</div>
      </div>
    )
  }
  return (
    <div style={S.eventList}>
      {[...events].reverse().map((e, i) => (
        <div key={events.length - i} style={S.eventRow}>
          <div style={S.eventHeader}>
            <span style={S.eventName}>{e.event}</span>
            <span style={S.eventTime}>{formatTime(e.ts)}</span>
          </div>
          {Object.keys(e.payload).length > 0 && (
            <div style={S.eventPayload}>{JSON.stringify(e.payload)}</div>
          )}
        </div>
      ))}
    </div>
  )
}

function SchemaPanel({ keys, data }: { keys: string[]; data: Record<string, unknown> }) {
  const present = keys.filter((k) => k in data && data[k] !== undefined && data[k] !== '')
  const missing = keys.filter((k) => !(k in data) || data[k] === undefined || data[k] === '')
  const pct = keys.length > 0 ? Math.round((present.length / keys.length) * 100) : 0
  return (
    <div>
      <div style={S.coverageBar}>
        <div style={{ ...S.coverageFill, width: `${pct}%` }} />
      </div>
      <div style={S.coverageLabel}>{pct}% fields covered</div>
      {missing.length > 0 && (
        <div style={S.schemaSection}>
          <div style={S.schemaSectionTitle}>Missing</div>
          {missing.map((k) => (
            <div key={k} style={S.schemaRow}>
              <span style={S.schemaDot}>○</span>
              <span style={S.schemaKey}>{k}</span>
            </div>
          ))}
        </div>
      )}
      {present.length > 0 && (
        <div style={S.schemaSection}>
          <div style={S.schemaSectionTitle}>Provided</div>
          {present.map((k) => (
            <div key={k} style={S.schemaRow}>
              <span style={S.schemaDotFilled}>●</span>
              <span style={S.schemaKey}>{k}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function TabBtn({ active, onClick, children }: { active: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      onClick={onClick}
      style={{ ...S.tabBtn, ...(active ? S.tabBtnActive : {}) }}
    >
      {children}
    </button>
  )
}

function formatTime(ts: number) {
  const d = new Date(ts)
  return `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}:${d.getSeconds().toString().padStart(2, '0')}`
}

// ── Styles ───────────────────────────────────────────────────────────────────

const FONT = '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
const BG = '#161616'
const BG_ELEVATED = '#1c1c1c'
const BG_SURFACE = '#232323'
const TEXT = '#e4e4e4'
const TEXT_SEC = '#999'
const TEXT_MUTED = '#666'
const BORDER = '#2a2a2a'

const S: Record<string, CSSProperties> = {
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
    display: 'flex', flexDirection: 'column' as const, gap: 3,
  },
  modeItem: {
    display: 'flex', alignItems: 'center', gap: 10,
    padding: '8px 10px', borderRadius: 8,
    background: 'transparent', border: 'none',
    color: TEXT_SEC, fontSize: 12, cursor: 'pointer', fontFamily: FONT,
    textTransform: 'capitalize' as const,
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
    flex: 1, textAlign: 'left' as const,
  },
  modeCheck: {
    fontSize: 6, color: TEXT_SEC,
  },

  // Events panel
  empty: {
    color: TEXT_MUTED, fontSize: 12, textAlign: 'center' as const,
    padding: '24px 16px', display: 'flex', flexDirection: 'column' as const,
    alignItems: 'center',
  },
  eventList: {
    display: 'flex', flexDirection: 'column' as const, gap: 4,
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
    wordBreak: 'break-all' as const, lineHeight: 1.5,
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
    fontSize: 10, fontWeight: 600, color: TEXT_MUTED, textTransform: 'uppercase' as const,
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
}
