'use client'

import {
  useCallback,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react'
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

  return (
    <AlwaysYouContext.Provider value={value}>
      {children}
      <DevToolbar
        mode={effectiveMode}
        onModeChange={setOverrideMode}
        events={eventsRef.current}
        eventTick={eventTick}
        schema={schema}
        data={data}
      />
    </AlwaysYouContext.Provider>
  )
}

// ── PhoneFrame ───────────────────────────────────────────────────────────────

export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: '#1c1c1e', padding: '24px',
    }}>
      <div style={{
        width: 390, height: 844, maxHeight: 'calc(100vh - 48px)',
        borderRadius: 48, overflow: 'hidden', position: 'relative',
        border: '10px solid #2a2a2e',
        boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
        background: '#000',
      }}>
        <div style={{ width: '100%', height: '100%', overflow: 'auto' }}>
          {children}
        </div>
      </div>
    </div>
  )
}

// ── DevToolbar ───────────────────────────────────────────────────────────────

const MODES: Mode[] = ['full', 'preview', 'demo', 'card']

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

  // Schema coverage
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

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        style={S.fab}
        title="AlwaysYou Dev Tools"
      >
        AY
      </button>
    )
  }

  return (
    <div style={S.panel}>
      {/* Header */}
      <div style={S.header}>
        <span style={S.headerTitle}>AlwaysYou Dev</span>
        <button onClick={() => setOpen(false)} style={S.closeBtn}>×</button>
      </div>

      {/* Tabs */}
      <div style={S.tabs}>
        <TabBtn active={tab === 'mode'} onClick={() => setTab('mode')}>Mode</TabBtn>
        <TabBtn active={tab === 'events'} onClick={() => setTab('events')}>
          Events{events.length > 0 ? ` (${events.length})` : ''}
        </TabBtn>
        {schemaKeys && (
          <TabBtn active={tab === 'schema'} onClick={() => setTab('schema')}>Schema</TabBtn>
        )}
      </div>

      {/* Tab content */}
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
      <div style={S.label}>Render mode</div>
      <div style={S.modeGrid}>
        {MODES.map((m) => (
          <button
            key={m}
            onClick={() => onModeChange(m)}
            style={{
              ...S.modeBtn,
              ...(mode === m ? S.modeBtnActive : {}),
            }}
          >
            {m}
          </button>
        ))}
      </div>
      <div style={S.hint}>
        {mode === 'full' && 'Live gift — the real recipient experience.'}
        {mode === 'preview' && 'Preview — lock screens are skipped.'}
        {mode === 'demo' && 'Demo page — isPreview + isDemo are true.'}
        {mode === 'card' && 'Card — static frame, no interaction.'}
      </div>
    </div>
  )
}

function EventsPanel({ events }: { events: TrackedEvent[] }) {
  if (events.length === 0) {
    return <div style={S.empty}>No events yet. Interact with your template.</div>
  }
  return (
    <div style={S.eventList}>
      {[...events].reverse().map((e, i) => (
        <div key={events.length - i} style={S.eventRow}>
          <span style={S.eventName}>{e.event}</span>
          <span style={S.eventTime}>{formatTime(e.ts)}</span>
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
  return (
    <div>
      <div style={S.label}>
        Demo data coverage: {present.length}/{keys.length}
      </div>
      {present.map((k) => (
        <div key={k} style={S.schemaRow}>
          <span style={S.checkGreen}>✓</span> {k}
        </div>
      ))}
      {missing.map((k) => (
        <div key={k} style={S.schemaRow}>
          <span style={S.checkRed}>✗</span> {k}
          <span style={S.schemaMissing}> — missing in demo data</span>
        </div>
      ))}
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

const FONT = 'system-ui, -apple-system, sans-serif'
const BG = '#1e1e2e'
const BG_HOVER = '#2a2a3e'
const ACCENT = '#C2185B'
const TEXT = '#e0e0e8'
const TEXT_DIM = '#888896'
const BORDER = '#333346'

const S: Record<string, CSSProperties> = {
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
    flex: 1, padding: '8px 0', background: 'none',
    borderTop: 'none', borderRight: 'none', borderLeft: 'none',
    borderBottom: '2px solid transparent',
    color: TEXT_DIM, fontSize: 12, cursor: 'pointer', fontFamily: FONT,
  },
  tabBtnActive: {
    color: TEXT, borderBottom: `2px solid ${ACCENT}`,
  },
  body: {
    padding: '12px 14px', overflow: 'auto', flex: 1, maxHeight: 300,
  },
  label: {
    fontSize: 11, color: TEXT_DIM, textTransform: 'uppercase' as const,
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
    textTransform: 'capitalize' as const,
  },
  modeBtnActive: {
    background: ACCENT, border: `1px solid ${ACCENT}`, color: '#fff', fontWeight: 600,
  },
  empty: {
    color: TEXT_DIM, fontSize: 12, textAlign: 'center' as const, padding: '20px 0',
  },
  eventList: {
    display: 'flex', flexDirection: 'column' as const, gap: 6,
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
    fontFamily: 'monospace', wordBreak: 'break-all' as const,
  },
  schemaRow: {
    padding: '4px 0', fontSize: 12,
  },
  checkGreen: { color: '#4ade80' },
  checkRed: { color: '#f87171' },
  schemaMissing: { color: TEXT_DIM, fontSize: 11 },
}
