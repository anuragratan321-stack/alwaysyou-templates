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

type DeviceCategory = 'phone' | 'tablet' | 'desktop'
type DevicePreset = { name: string; width: number; height: number; category: DeviceCategory }

type DeviceState = {
  width: number
  height: number
  category: DeviceCategory | 'responsive'
  presetName: string | null
}

// ── Device Presets ──────────────────────────────────────────────────────────

const DEVICE_PRESETS: DevicePreset[] = [
  { name: 'iPhone SE', width: 375, height: 667, category: 'phone' },
  { name: 'iPhone 14', width: 390, height: 844, category: 'phone' },
  { name: 'iPhone 14 Pro Max', width: 430, height: 932, category: 'phone' },
  { name: 'Pixel 7', width: 412, height: 915, category: 'phone' },
  { name: 'Galaxy S20', width: 360, height: 800, category: 'phone' },
  { name: 'iPad Mini', width: 768, height: 1024, category: 'tablet' },
  { name: 'iPad Air', width: 820, height: 1180, category: 'tablet' },
  { name: 'Desktop HD', width: 1280, height: 720, category: 'desktop' },
  { name: 'Desktop FHD', width: 1920, height: 1080, category: 'desktop' },
]

// ── Module-level device state (PhoneFrame <-> DevToolbar communication) ─────

type DeviceListener = (state: DeviceState) => void
const deviceListeners = new Set<DeviceListener>()
let currentDeviceState: DeviceState = {
  width: 390, height: 844, category: 'phone', presetName: 'iPhone 14',
}

function emitDeviceChange(state: DeviceState) {
  currentDeviceState = state
  deviceListeners.forEach((fn) => fn(state))
}

function subscribeDeviceChange(fn: DeviceListener): () => void {
  deviceListeners.add(fn)
  return () => { deviceListeners.delete(fn) }
}

// ── iframe srcDoc — matches mobile browser viewport behavior ───────────────

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
/* Hide scrollbar to match mobile overlay scrollbar (zero width) */
::-webkit-scrollbar{display:none}
*{scrollbar-width:none}
</style>
</head>
<body></body>
</html>`

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

// ── PhoneFrame ──────────────────────────────────────────────────────────────
// Uses an <iframe> so the template gets a true device-sized viewport.
// 100vw/100vh, window.innerWidth/Height, and `fixed inset-0` all resolve
// against the selected device dimensions, not the desktop browser.

export function PhoneFrame({
  children,
  width: initialWidth = 390,
  height: initialHeight = 844,
}: {
  children: ReactNode
  width?: number
  height?: number
}) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null)
  const [iframeBody, setIframeBody] = useState<HTMLElement | null>(null)

  const [device, setDevice] = useState<DeviceState>(() => {
    const preset = DEVICE_PRESETS.find(
      (p) => p.width === initialWidth && p.height === initialHeight,
    )
    const state: DeviceState = preset
      ? { width: preset.width, height: preset.height, category: preset.category, presetName: preset.name }
      : { width: initialWidth, height: initialHeight, category: 'responsive', presetName: null }
    currentDeviceState = state
    return state
  })

  useEffect(() => subscribeDeviceChange(setDevice), [])

  // ── Viewport measurement (deferred to avoid hydration mismatch) ────────
  const [viewport, setViewport] = useState({ w: 1920, h: 1080 })
  useEffect(() => {
    const update = () => setViewport({ w: window.innerWidth, h: window.innerHeight })
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  // ── Drag resize ────────────────────────────────────────────────────────
  const [dragging, setDragging] = useState<'right' | 'bottom' | 'corner' | null>(null)
  const dragRef = useRef({ x: 0, y: 0, w: 0, h: 0 })

  const onResizeStart = useCallback(
    (dir: 'right' | 'bottom' | 'corner', e: React.MouseEvent) => {
      e.preventDefault()
      dragRef.current = { x: e.clientX, y: e.clientY, w: device.width, h: device.height }
      setDragging(dir)
    },
    [device.width, device.height],
  )

  useEffect(() => {
    if (!dragging) return
    const onMove = (e: MouseEvent) => {
      const dx = e.clientX - dragRef.current.x
      const dy = e.clientY - dragRef.current.y
      let w = dragRef.current.w
      let h = dragRef.current.h
      if (dragging === 'right' || dragging === 'corner') w = Math.max(280, Math.round(w + dx))
      if (dragging === 'bottom' || dragging === 'corner') h = Math.max(400, Math.round(h + dy))
      const state: DeviceState = { width: w, height: h, category: 'responsive', presetName: null }
      setDevice(state)
      emitDeviceChange(state)
    }
    const onUp = () => setDragging(null)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
  }, [dragging])

  // ── iframe setup ───────────────────────────────────────────────────────
  const iframeReady = useRef(false)

  const setupIframe = useCallback(() => {
    if (iframeReady.current) return
    const doc = iframeRef.current?.contentDocument
    if (!doc?.body) return
    iframeReady.current = true

    const parentStyles = document.querySelectorAll('style, link[rel="stylesheet"]')
    parentStyles.forEach((node) => doc.head.appendChild(node.cloneNode(true)))

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

    setIframeBody(doc.body)
  }, [])

  // SSR hydration: the iframe's load event may fire before React attaches
  // onLoad. This effect catches that case by checking after mount.
  useEffect(() => { setupIframe() }, [setupIframe])

  // ── Frame chrome ───────────────────────────────────────────────────────
  const isResponsive = device.category === 'responsive'
  const bezelW = device.category === 'desktop' ? 2 : device.category === 'tablet' ? 6 : 10
  const bezelR = device.category === 'desktop' ? 4 : device.category === 'tablet' ? 20 : 48
  const frameW = device.width + bezelW * 2
  const frameH = device.height + bezelW * 2

  const scale = Math.min(1, (viewport.w - 120) / frameW, (viewport.h - 120) / frameH)
  const visW = Math.round(frameW * scale)
  const visH = Math.round(frameH * scale)

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column' as const,
      alignItems: 'center', justifyContent: 'center',
      background: '#1c1c1e', padding: 24,
    }}>
      {/* Dimensions badge */}
      <div style={{
        marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8,
        fontFamily: FONT, fontSize: 12, color: TEXT_SEC, userSelect: 'none',
      }}>
        {device.presetName && (
          <>
            <span style={{ color: TEXT, fontWeight: 500 }}>{device.presetName}</span>
            <span style={{ color: TEXT_MUTED }}>&mdash;</span>
          </>
        )}
        <span style={{ fontFamily: MONO }}>{device.width} &times; {device.height}</span>
        {scale < 1 && (
          <span style={{ color: TEXT_MUTED, fontSize: 10 }}>
            ({Math.round(scale * 100)}%)
          </span>
        )}
      </div>

      {/* Scaled wrapper — matches the visual frame size for correct layout */}
      <div style={{ width: visW, height: visH, position: 'relative', overflow: 'visible' }}>
        {/* Device frame (may be larger than wrapper when scaled) */}
        <div style={{
          position: scale < 1 ? 'absolute' : 'relative',
          top: 0, left: 0,
          width: frameW, height: frameH,
          borderRadius: bezelR, overflow: 'hidden',
          border: `${bezelW}px solid ${isResponsive ? '#333' : '#2a2a2e'}`,
          boxShadow: isResponsive
            ? '0 0 0 1px rgba(255,255,255,0.06)'
            : '0 24px 64px rgba(0,0,0,0.5)',
          background: '#000',
          transform: scale < 1 ? `scale(${scale})` : undefined,
          transformOrigin: 'top left',
        }}>
          <iframe
            ref={iframeRef}
            onLoad={setupIframe}
            title="PhoneFrame"
            style={{
              width: device.width, height: device.height,
              border: 'none', display: 'block', background: '#fff',
              pointerEvents: dragging ? 'none' : 'auto',
            }}
            srcDoc={IFRAME_SRCDOC}
          />
          {iframeBody && createPortal(children, iframeBody)}
        </div>

        {/* Resize handles — responsive mode */}
        {isResponsive && (
          <>
            <ResizeHandle dir="right" dragging={dragging} onStart={onResizeStart} />
            <ResizeHandle dir="bottom" dragging={dragging} onStart={onResizeStart} />
            <ResizeHandle dir="corner" dragging={dragging} onStart={onResizeStart} />
          </>
        )}
      </div>
    </div>
  )
}

function ResizeHandle({
  dir,
  dragging,
  onStart,
}: {
  dir: 'right' | 'bottom' | 'corner'
  dragging: 'right' | 'bottom' | 'corner' | null
  onStart: (dir: 'right' | 'bottom' | 'corner', e: React.MouseEvent) => void
}) {
  const [hover, setHover] = useState(false)
  const active = dragging === dir || hover

  const pos: CSSProperties =
    dir === 'right'
      ? { position: 'absolute', top: '20%', right: -12, width: 6, height: '60%', cursor: 'ew-resize', borderRadius: 3 }
      : dir === 'bottom'
        ? { position: 'absolute', bottom: -12, left: '20%', width: '60%', height: 6, cursor: 'ns-resize', borderRadius: 3 }
        : { position: 'absolute', bottom: -12, right: -12, width: 12, height: 12, cursor: 'nwse-resize', borderRadius: 3 }

  return (
    <div
      onMouseDown={(e) => onStart(dir, e)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        ...pos,
        background: active ? TEXT_SEC : BORDER,
        transition: dragging ? 'none' : 'background 150ms',
      }}
    />
  )
}

// ── DevToolbar ──────────────────────────────────────────────────────────────

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
  const [tab, setTab] = useState<'mode' | 'device' | 'events' | 'schema'>('mode')

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
        <TabBtn active={tab === 'device'} onClick={() => setTab('device')}>Device</TabBtn>
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
        {tab === 'mode' && <ModePanel mode={mode} onModeChange={onModeChange} />}
        {tab === 'device' && <DevicePanel />}
        {tab === 'events' && <EventsPanel events={events} />}
        {tab === 'schema' && schemaKeys && <SchemaPanel keys={schemaKeys} data={data} />}
      </div>
    </div>
  )
}

// ── Tab panels ──────────────────────────────────────────────────────────────

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

function DevicePanel() {
  const [device, setDevice] = useState<DeviceState>(() => currentDeviceState)
  const [wInput, setWInput] = useState(() => String(currentDeviceState.width))
  const [hInput, setHInput] = useState(() => String(currentDeviceState.height))

  useEffect(() => {
    return subscribeDeviceChange((state) => {
      setDevice(state)
      setWInput(String(state.width))
      setHInput(String(state.height))
    })
  }, [])

  const selectPreset = (preset: DevicePreset) => {
    emitDeviceChange({
      width: preset.width,
      height: preset.height,
      category: preset.category,
      presetName: preset.name,
    })
  }

  const selectResponsive = () => {
    emitDeviceChange({
      width: device.width,
      height: device.height,
      category: 'responsive',
      presetName: null,
    })
  }

  const applyCustom = (w: string, h: string) => {
    const pw = Math.max(280, Math.min(3840, parseInt(w) || 280))
    const ph = Math.max(400, Math.min(3840, parseInt(h) || 400))
    emitDeviceChange({ width: pw, height: ph, category: 'responsive', presetName: null })
  }

  const rotate = () => {
    emitDeviceChange({
      width: device.height,
      height: device.width,
      category: device.category,
      presetName: null,
    })
  }

  const phones = DEVICE_PRESETS.filter((p) => p.category === 'phone')
  const tablets = DEVICE_PRESETS.filter((p) => p.category === 'tablet')
  const desktops = DEVICE_PRESETS.filter((p) => p.category === 'desktop')

  return (
    <div>
      {/* Custom dimensions + rotate */}
      <div style={S.dimRow}>
        <input
          type="number"
          value={wInput}
          onChange={(e) => setWInput(e.target.value)}
          onBlur={() => applyCustom(wInput, hInput)}
          onKeyDown={(e) => { if (e.key === 'Enter') applyCustom(wInput, hInput) }}
          style={S.dimInput}
          min={280}
          max={3840}
        />
        <span style={S.dimSep}>&times;</span>
        <input
          type="number"
          value={hInput}
          onChange={(e) => setHInput(e.target.value)}
          onBlur={() => applyCustom(wInput, hInput)}
          onKeyDown={(e) => { if (e.key === 'Enter') applyCustom(wInput, hInput) }}
          style={S.dimInput}
          min={400}
          max={3840}
        />
        <button onClick={rotate} style={S.rotateBtn} title="Rotate">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M11 3H5a2 2 0 00-2 2v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
            <path d="M9 1l2 2-2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Responsive option */}
      <button
        onClick={selectResponsive}
        style={{
          ...S.deviceRow,
          ...(device.category === 'responsive' ? S.deviceRowActive : {}),
          marginTop: 8,
          marginBottom: 4,
        }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, opacity: 0.7 }}>
          <path d="M3 7h8M7 3v8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
          <path d="M1 7h1M12 7h1M7 1v1M7 12v1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
        </svg>
        <span style={{ flex: 1 }}>Responsive</span>
        {device.category === 'responsive' && <span style={S.deviceCheck}>●</span>}
      </button>

      {/* Preset groups */}
      <DeviceGroup title="Phones" presets={phones} selectedName={device.presetName} onSelect={selectPreset} />
      <DeviceGroup title="Tablets" presets={tablets} selectedName={device.presetName} onSelect={selectPreset} />
      <DeviceGroup title="Desktop" presets={desktops} selectedName={device.presetName} onSelect={selectPreset} />
    </div>
  )
}

function DeviceGroup({
  title,
  presets,
  selectedName,
  onSelect,
}: {
  title: string
  presets: DevicePreset[]
  selectedName: string | null
  onSelect: (p: DevicePreset) => void
}) {
  return (
    <div style={{ marginTop: 8 }}>
      <div style={S.deviceGroupTitle}>{title}</div>
      {presets.map((p) => {
        const active = selectedName === p.name
        return (
          <button
            key={p.name}
            onClick={() => onSelect(p)}
            style={{ ...S.deviceRow, ...(active ? S.deviceRowActive : {}) }}
          >
            <span style={{ flex: 1 }}>{p.name}</span>
            <span style={S.deviceDims}>{p.width}&times;{p.height}</span>
            {active && <span style={S.deviceCheck}>●</span>}
          </button>
        )
      })}
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

// ── Helpers ─────────────────────────────────────────────────────────────────

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

// ── Styles ──────────────────────────────────────────────────────────────────

const FONT = '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
const MONO = 'ui-monospace, "SF Mono", Monaco, "Cascadia Mono", monospace'
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
    width: 300, maxHeight: 480,
    background: BG, borderRadius: 12, border: `1px solid ${BORDER}`,
    boxShadow: '0 8px 40px rgba(0,0,0,0.55), 0 0 0 0.5px rgba(255,255,255,0.04)',
    fontFamily: FONT, fontSize: 13, color: TEXT,
    display: 'flex', flexDirection: 'column' as const, overflow: 'hidden',
  },
  header: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '10px 12px', borderBottom: `1px solid ${BORDER}`,
  },
  headerLeft: { display: 'flex', alignItems: 'center', gap: 8 },
  headerDot: {
    width: 7, height: 7, borderRadius: '50%', background: '#4ade80', flexShrink: 0,
  },
  headerTitle: { fontWeight: 600, fontSize: 12, color: TEXT_SEC, letterSpacing: 0.2 },
  closeBtn: {
    background: 'none', border: 'none', color: TEXT_MUTED,
    cursor: 'pointer', padding: 2, lineHeight: 1,
    display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4,
  },
  tabs: {
    display: 'flex', gap: 0, borderBottom: `1px solid ${BORDER}`, padding: '0 4px',
  },
  tabBtn: {
    flex: 1, padding: '9px 0 7px', background: 'none',
    borderTop: 'none', borderRight: 'none', borderLeft: 'none',
    borderBottom: '2px solid transparent',
    color: TEXT_MUTED, fontSize: 11, fontWeight: 500,
    cursor: 'pointer', fontFamily: FONT, letterSpacing: 0.2,
    transition: 'color 150ms',
  },
  tabBtnActive: { color: TEXT, borderBottom: `2px solid ${TEXT_SEC}` },
  body: { padding: 12, overflow: 'auto', flex: 1, maxHeight: 360 },
  hint: {
    fontSize: 11, color: TEXT_MUTED, marginTop: 10, lineHeight: 1.5, padding: '0 2px',
  },

  // Mode panel
  modeList: { display: 'flex', flexDirection: 'column' as const, gap: 3 },
  modeItem: {
    display: 'flex', alignItems: 'center', gap: 10,
    padding: '8px 10px', borderRadius: 8,
    background: 'transparent', border: 'none',
    color: TEXT_SEC, fontSize: 12, cursor: 'pointer', fontFamily: FONT,
    textTransform: 'capitalize' as const, transition: 'background 150ms',
  },
  modeItemActive: { background: BG_SURFACE, color: TEXT },
  modeIcon: {
    width: 24, height: 24, borderRadius: 6,
    background: BG_SURFACE, display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 10, color: TEXT_MUTED, flexShrink: 0,
  },
  modeIconActive: { background: '#333', color: TEXT },
  modeLabel: { flex: 1, textAlign: 'left' as const },
  modeCheck: { fontSize: 6, color: TEXT_SEC },

  // Device panel
  dimRow: { display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 },
  dimInput: {
    flex: 1, padding: '5px 8px', borderRadius: 6,
    background: BG_SURFACE, border: `1px solid ${BORDER}`, color: TEXT,
    fontFamily: MONO, fontSize: 12, textAlign: 'center' as const,
    outline: 'none', width: 0,
  },
  dimSep: { color: TEXT_MUTED, fontSize: 12, flexShrink: 0 },
  rotateBtn: {
    background: BG_SURFACE, border: `1px solid ${BORDER}`, borderRadius: 6,
    width: 30, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer', color: TEXT_SEC, flexShrink: 0,
  },
  deviceGroupTitle: {
    fontSize: 10, fontWeight: 600, color: TEXT_MUTED, textTransform: 'uppercase' as const,
    letterSpacing: 0.8, padding: '4px 2px 2px',
  },
  deviceRow: {
    display: 'flex', alignItems: 'center', gap: 8, width: '100%',
    padding: '6px 8px', borderRadius: 6,
    background: 'transparent', border: 'none',
    color: TEXT_SEC, fontSize: 12, cursor: 'pointer', fontFamily: FONT,
    transition: 'background 150ms',
  },
  deviceRowActive: { background: BG_SURFACE, color: TEXT },
  deviceDims: { fontFamily: MONO, fontSize: 10, color: TEXT_MUTED, flexShrink: 0 },
  deviceCheck: { fontSize: 6, color: TEXT_SEC, flexShrink: 0 },

  // Events panel
  empty: {
    color: TEXT_MUTED, fontSize: 12, textAlign: 'center' as const,
    padding: '24px 16px', display: 'flex', flexDirection: 'column' as const,
    alignItems: 'center',
  },
  eventList: { display: 'flex', flexDirection: 'column' as const, gap: 4 },
  eventRow: {
    padding: '7px 9px', borderRadius: 6, background: BG_ELEVATED,
    border: `1px solid ${BORDER}`,
  },
  eventHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  eventName: {
    fontWeight: 600, fontSize: 11, color: TEXT,
    fontFamily: MONO,
  },
  eventTime: { fontSize: 10, color: TEXT_MUTED },
  eventPayload: {
    fontSize: 10, color: TEXT_MUTED, marginTop: 4,
    fontFamily: MONO,
    wordBreak: 'break-all' as const, lineHeight: 1.5,
  },

  // Schema / Data panel
  coverageBar: {
    height: 3, background: BG_SURFACE, borderRadius: 2, overflow: 'hidden', marginBottom: 6,
  },
  coverageFill: {
    height: '100%', background: TEXT_SEC, borderRadius: 2, transition: 'width 300ms',
  },
  coverageLabel: { fontSize: 11, color: TEXT_MUTED, marginBottom: 12 },
  schemaSection: { marginBottom: 10 },
  schemaSectionTitle: {
    fontSize: 10, fontWeight: 600, color: TEXT_MUTED, textTransform: 'uppercase' as const,
    letterSpacing: 0.8, marginBottom: 4,
  },
  schemaRow: {
    display: 'flex', alignItems: 'center', gap: 7, padding: '3px 0', fontSize: 12,
  },
  schemaDot: { fontSize: 8, color: TEXT_MUTED },
  schemaDotFilled: { fontSize: 8, color: TEXT_SEC },
  schemaKey: { fontFamily: MONO, fontSize: 11, color: TEXT_SEC },
}
