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

// ── Generic pub/sub ────────────────────────────────────────────────────────

function createBus<T>(initial: T) {
  let current = initial
  const subs = new Set<(v: T) => void>()
  return {
    get: () => current,
    set(v: T) { current = v; subs.forEach(fn => fn(v)) },
    sub(fn: (v: T) => void) { subs.add(fn); return () => { subs.delete(fn) } },
  }
}

const deviceBus = createBus<DeviceState>({
  width: 390, height: 844, category: 'phone', presetName: 'iPhone 14',
})

const topBarBus = createBus<HTMLElement | null>(null)

function useTopBarRight(): HTMLElement | null {
  const [el, setEl] = useState<HTMLElement | null>(() => topBarBus.get())
  useEffect(() => {
    setEl(topBarBus.get())
    return topBarBus.sub(setEl)
  }, [])
  return el
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
</html>`

// ── AlwaysYouProvider ────────────────────────────────────────────────────────

export function AlwaysYouProvider({
  data, mode = 'full', schema, onTrack, children,
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
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

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
      setEventTick(t => t + 1)
      console.log(`%c[track] ${event}`, 'color:#C2185B;font-weight:600', payload ?? {})
      onTrack?.(event, payload)
    }
    return { data: merged, track }
  }, [data, effectiveMode, onTrack])

  return (
    <AlwaysYouContext.Provider value={value}>
      {children}
      {mounted && (
        <DevToolbar
          mode={effectiveMode}
          onModeChange={setOverrideMode}
          events={eventsRef.current}
          eventTick={eventTick}
          schema={schema}
          data={data}
        />
      )}
    </AlwaysYouContext.Provider>
  )
}

// ── PhoneFrame ──────────────────────────────────────────────────────────────

const TOP_BAR_H = 44

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
  const topBarRightRef = useRef<HTMLDivElement>(null)

  const [device, setDevice] = useState<DeviceState>(() => {
    const preset = DEVICE_PRESETS.find(
      p => p.width === initialWidth && p.height === initialHeight,
    )
    const state: DeviceState = preset
      ? { width: preset.width, height: preset.height, category: preset.category, presetName: preset.name }
      : { width: initialWidth, height: initialHeight, category: 'responsive', presetName: null }
    deviceBus.set(state)
    return state
  })

  useEffect(() => deviceBus.sub(setDevice), [])

  useEffect(() => {
    topBarBus.set(topBarRightRef.current)
    return () => topBarBus.set(null)
  }, [])

  const [viewport, setViewport] = useState({ w: 1920, h: 1080 })
  useEffect(() => {
    const update = () => setViewport({ w: window.innerWidth, h: window.innerHeight })
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  // Drag resize for responsive mode
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
      let w = dragRef.current.w, h = dragRef.current.h
      if (dragging === 'right' || dragging === 'corner') w = Math.max(280, Math.round(w + dx))
      if (dragging === 'bottom' || dragging === 'corner') h = Math.max(400, Math.round(h + dy))
      const s: DeviceState = { width: w, height: h, category: 'responsive', presetName: null }
      setDevice(s)
      deviceBus.set(s)
    }
    const onUp = () => setDragging(null)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    return () => { window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp) }
  }, [dragging])

  // iframe setup
  const iframeReady = useRef(false)
  const setupIframe = useCallback(() => {
    if (iframeReady.current) return
    const doc = iframeRef.current?.contentDocument
    if (!doc?.body) return
    iframeReady.current = true
    const parentStyles = document.querySelectorAll('style, link[rel="stylesheet"]')
    parentStyles.forEach(node => doc.head.appendChild(node.cloneNode(true)))
    const observer = new MutationObserver(mutations => {
      for (const m of mutations) {
        m.addedNodes.forEach(node => {
          if (node instanceof HTMLStyleElement ||
            (node instanceof HTMLLinkElement && node.rel === 'stylesheet'))
            doc.head.appendChild(node.cloneNode(true))
        })
      }
    })
    observer.observe(document.head, { childList: true })
    setIframeBody(doc.body)
  }, [])

  useEffect(() => { setupIframe() }, [setupIframe])

  // CSS custom properties in iframe for templates that read viewport via CSS
  useEffect(() => {
    const doc = iframeRef.current?.contentDocument
    if (!doc) return
    doc.documentElement.style.setProperty('--device-width', `${device.width}px`)
    doc.documentElement.style.setProperty('--device-height', `${device.height}px`)
  }, [device.width, device.height])

  // Frame chrome
  const isResponsive = device.category === 'responsive'
  const bezelW = device.category === 'desktop' ? 2 : device.category === 'tablet' ? 6 : 10
  const bezelR = device.category === 'desktop' ? 4 : device.category === 'tablet' ? 20 : 48
  const frameW = device.width + bezelW * 2
  const frameH = device.height + bezelW * 2
  const availH = viewport.h - TOP_BAR_H - 32
  const availW = viewport.w - 80
  // CSS zoom instead of transform:scale — zoom preserves pointer/drag coordinates
  const zoom = Math.min(1, availW / frameW, Math.max(0.3, availH / frameH))

  const rotate = useCallback(() => {
    const s: DeviceState = {
      width: device.height, height: device.width,
      category: 'responsive', presetName: null,
    }
    deviceBus.set(s)
  }, [device.width, device.height])

  return (
    <>
      {/* ── Top toolbar ─────────────────────────────────────────── */}
      <div style={S.topBar}>
        <div style={S.topBarLeft}>
          <DeviceDropdown />
          <span style={S.dimsBadge}>
            {device.width} &times; {device.height}
          </span>
          {zoom < 1 && (
            <span style={S.zoomBadge}>{Math.round(zoom * 100)}%</span>
          )}
          <button onClick={rotate} style={S.topBarIconBtn} title="Rotate">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M11 3H5a2 2 0 00-2 2v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
              <path d="M9 1l2 2-2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div ref={topBarRightRef} style={S.topBarRight} />
      </div>

      {/* ── Frame area ──────────────────────────────────────────── */}
      <div style={S.frameArea}>
        <div style={{ position: 'relative', overflow: 'visible' }}>
          <div style={{
            width: frameW, height: frameH,
            borderRadius: bezelR, overflow: 'hidden',
            border: `${bezelW}px solid ${isResponsive ? '#333' : '#2a2a2e'}`,
            boxShadow: isResponsive
              ? '0 0 0 1px rgba(255,255,255,0.06)'
              : '0 24px 64px rgba(0,0,0,0.5)',
            background: '#000',
            zoom: zoom < 1 ? zoom : undefined,
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

          {isResponsive && (
            <>
              <ResizeHandle dir="right" dragging={dragging} onStart={onResizeStart} />
              <ResizeHandle dir="bottom" dragging={dragging} onStart={onResizeStart} />
              <ResizeHandle dir="corner" dragging={dragging} onStart={onResizeStart} />
            </>
          )}
        </div>
      </div>
    </>
  )
}

// ── DevToolbar ──────────────────────────────────────────────────────────────

const MODES: Mode[] = ['full', 'preview', 'demo', 'card']
const MODE_LABELS: Record<Mode, string> = {
  full: 'Full', preview: 'Preview', demo: 'Demo', card: 'Card',
}

function DevToolbar({
  mode, onModeChange, events, eventTick, schema, data,
}: {
  mode: Mode
  onModeChange: (m: Mode) => void
  events: TrackedEvent[]
  eventTick: number
  schema?: SchemaJson
  data: Record<string, unknown>
}) {
  const portalTarget = useTopBarRight()

  const schemaKeys = useMemo(() => {
    if (!schema?.sections) return null
    const keys: string[] = []
    for (const section of schema.sections)
      for (const field of section.fields ?? [])
        if (field.key) keys.push(field.key)
    return keys
  }, [schema])

  const schemaCoverage = useMemo(() => {
    if (!schemaKeys) return null
    const filled = schemaKeys.filter(k => k in data && data[k] !== undefined && data[k] !== '')
    return { filled: filled.length, total: schemaKeys.length }
  }, [schemaKeys, data])

  void eventTick

  if (!portalTarget) return null

  return createPortal(
    <>
      <ModeDropdown mode={mode} onModeChange={onModeChange} />
      <AYPanelButton
        events={events}
        schemaKeys={schemaKeys}
        schemaCoverage={schemaCoverage}
        data={data}
      />
    </>,
    portalTarget,
  )
}

// ── Device Dropdown ────────────────────────────────────────────────────────

function DeviceDropdown() {
  const [open, setOpen] = useState(false)
  const [device, setDevice] = useState<DeviceState>(() => deviceBus.get())
  const [wInput, setWInput] = useState(() => String(deviceBus.get().width))
  const [hInput, setHInput] = useState(() => String(deviceBus.get().height))
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => deviceBus.sub(s => {
    setDevice(s)
    setWInput(String(s.width))
    setHInput(String(s.height))
  }), [])

  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  const selectPreset = (p: DevicePreset) => {
    deviceBus.set({ width: p.width, height: p.height, category: p.category, presetName: p.name })
    setOpen(false)
  }

  const selectResponsive = () => {
    deviceBus.set({ ...device, category: 'responsive', presetName: null })
    setOpen(false)
  }

  const applyCustom = (w: string, h: string) => {
    const pw = Math.max(280, Math.min(3840, parseInt(w) || 280))
    const ph = Math.max(400, Math.min(3840, parseInt(h) || 400))
    deviceBus.set({ width: pw, height: ph, category: 'responsive', presetName: null })
  }

  const phones = DEVICE_PRESETS.filter(p => p.category === 'phone')
  const tablets = DEVICE_PRESETS.filter(p => p.category === 'tablet')
  const desktops = DEVICE_PRESETS.filter(p => p.category === 'desktop')

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button onClick={() => setOpen(!open)} style={S.dropdownBtn}>
        <span>{device.presetName || 'Responsive'}</span>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ marginLeft: 4, opacity: 0.5 }}>
          <path d="M2.5 4l2.5 2.5L7.5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {open && (
        <div style={S.dropdown}>
          <button
            onClick={selectResponsive}
            style={{
              ...S.dropdownItem,
              ...(device.category === 'responsive' ? S.dropdownItemActive : {}),
            }}
          >
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, opacity: 0.6 }}>
              <path d="M3 7h8M7 3v8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
            <span style={{ flex: 1 }}>Responsive</span>
            {device.category === 'responsive' && <Check />}
          </button>

          <div style={S.dropdownDivider} />

          <div style={S.customDimRow}>
            <input
              type="number"
              value={wInput}
              onChange={e => setWInput(e.target.value)}
              onBlur={() => applyCustom(wInput, hInput)}
              onKeyDown={e => { if (e.key === 'Enter') applyCustom(wInput, hInput) }}
              style={S.customDimInput}
              min={280} max={3840}
            />
            <span style={{ color: TEXT_MUTED, fontSize: 11 }}>&times;</span>
            <input
              type="number"
              value={hInput}
              onChange={e => setHInput(e.target.value)}
              onBlur={() => applyCustom(wInput, hInput)}
              onKeyDown={e => { if (e.key === 'Enter') applyCustom(wInput, hInput) }}
              style={S.customDimInput}
              min={400} max={3840}
            />
          </div>

          <div style={S.dropdownDivider} />

          <PresetGroup title="Phones" presets={phones} selectedName={device.presetName} onSelect={selectPreset} />
          <PresetGroup title="Tablets" presets={tablets} selectedName={device.presetName} onSelect={selectPreset} />
          <PresetGroup title="Desktop" presets={desktops} selectedName={device.presetName} onSelect={selectPreset} />
        </div>
      )}
    </div>
  )
}

function PresetGroup({
  title, presets, selectedName, onSelect,
}: {
  title: string; presets: DevicePreset[]; selectedName: string | null
  onSelect: (p: DevicePreset) => void
}) {
  return (
    <div style={{ marginTop: 2 }}>
      <div style={S.groupTitle}>{title}</div>
      {presets.map(p => {
        const active = selectedName === p.name
        return (
          <button
            key={p.name}
            onClick={() => onSelect(p)}
            style={{ ...S.dropdownItem, ...(active ? S.dropdownItemActive : {}) }}
          >
            <span style={{ flex: 1 }}>{p.name}</span>
            <span style={S.presetDims}>{p.width}&times;{p.height}</span>
            {active && <Check />}
          </button>
        )
      })}
    </div>
  )
}

// ── Mode Dropdown ──────────────────────────────────────────────────────────

function ModeDropdown({ mode, onModeChange }: { mode: Mode; onModeChange: (m: Mode) => void }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button onClick={() => setOpen(!open)} style={S.dropdownBtn}>
        <span>{MODE_LABELS[mode]}</span>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ marginLeft: 4, opacity: 0.5 }}>
          <path d="M2.5 4l2.5 2.5L7.5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {open && (
        <div style={{ ...S.dropdown, right: 0, left: 'auto', minWidth: 140 }}>
          {MODES.map(m => (
            <button
              key={m}
              onClick={() => { onModeChange(m); setOpen(false) }}
              style={{ ...S.dropdownItem, ...(mode === m ? S.dropdownItemActive : {}) }}
            >
              <span style={{ flex: 1, textTransform: 'capitalize' as const }}>{m}</span>
              {mode === m && <Check />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// ── AY Panel Button ────────────────────────────────────────────────────────

function AYPanelButton({
  events, schemaKeys, schemaCoverage, data,
}: {
  events: TrackedEvent[]
  schemaKeys: string[] | null
  schemaCoverage: { filled: number; total: number } | null
  data: Record<string, unknown>
}) {
  const [open, setOpen] = useState(false)
  const [tab, setTab] = useState<'events' | 'schema'>('events')
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  const badge = events.length > 0 ? events.length : null

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button onClick={() => setOpen(!open)} style={S.topBarIconBtn} title="Dev Tools">
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
          <path d="M2 4h12M2 8h8M2 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        {badge != null && <span style={S.badge}>{badge}</span>}
      </button>

      {open && (
        <div style={S.ayPanel}>
          <div style={S.ayTabBar}>
            <button
              onClick={() => setTab('events')}
              style={{ ...S.ayTab, ...(tab === 'events' ? S.ayTabActive : {}) }}
            >
              Events{events.length > 0 ? ` · ${events.length}` : ''}
            </button>
            {schemaKeys && (
              <button
                onClick={() => setTab('schema')}
                style={{ ...S.ayTab, ...(tab === 'schema' ? S.ayTabActive : {}) }}
              >
                Data{schemaCoverage ? ` · ${schemaCoverage.filled}/${schemaCoverage.total}` : ''}
              </button>
            )}
          </div>
          <div style={S.ayBody}>
            {tab === 'events' && <EventsPanel events={events} />}
            {tab === 'schema' && schemaKeys && <SchemaPanel keys={schemaKeys} data={data} />}
          </div>
        </div>
      )}
    </div>
  )
}

// ── Events Panel ───────────────────────────────────────────────────────────

function EventsPanel({ events }: { events: TrackedEvent[] }) {
  if (events.length === 0) {
    return (
      <div style={S.empty}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginBottom: 6, opacity: 0.35 }}>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <div>No events yet</div>
        <div style={{ fontSize: 10, opacity: 0.5, marginTop: 2 }}>
          Interact with your template to see tracked events.
        </div>
      </div>
    )
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 3 }}>
      {[...events].reverse().map((e, i) => (
        <div key={events.length - i} style={S.eventRow}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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

// ── Schema Panel ───────────────────────────────────────────────────────────

function SchemaPanel({ keys, data }: { keys: string[]; data: Record<string, unknown> }) {
  const present = keys.filter(k => k in data && data[k] !== undefined && data[k] !== '')
  const missing = keys.filter(k => !(k in data) || data[k] === undefined || data[k] === '')
  const pct = keys.length > 0 ? Math.round((present.length / keys.length) * 100) : 0
  return (
    <div>
      <div style={S.coverageBar}><div style={{ ...S.coverageFill, width: `${pct}%` }} /></div>
      <div style={S.coverageLabel}>{pct}% fields covered</div>
      {missing.length > 0 && (
        <div style={{ marginBottom: 8 }}>
          <div style={S.sectionTitle}>Missing</div>
          {missing.map(k => (
            <div key={k} style={S.schemaRow}>
              <span style={{ fontSize: 8, color: TEXT_MUTED }}>{'○'}</span>
              <span style={S.schemaKey}>{k}</span>
            </div>
          ))}
        </div>
      )}
      {present.length > 0 && (
        <div>
          <div style={S.sectionTitle}>Provided</div>
          {present.map(k => (
            <div key={k} style={S.schemaRow}>
              <span style={{ fontSize: 8, color: TEXT_SEC }}>{'●'}</span>
              <span style={S.schemaKey}>{k}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ── Resize Handle ──────────────────────────────────────────────────────────

function ResizeHandle({
  dir, dragging, onStart,
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
      onMouseDown={e => onStart(dir, e)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...pos, background: active ? TEXT_SEC : BORDER, transition: dragging ? 'none' : 'background 150ms' }}
    />
  )
}

// ── Small helpers ──────────────────────────────────────────────────────────

function Check() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
      <path d="M2.5 6.5L5 9l4.5-6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function formatTime(ts: number) {
  const d = new Date(ts)
  return `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}:${d.getSeconds().toString().padStart(2, '0')}`
}

// ── Styles ─────────────────────────────────────────────────────────────────

const FONT = '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
const MONO = 'ui-monospace, "SF Mono", Monaco, "Cascadia Mono", monospace'
const BG = '#161616'
const BG_ELEVATED = '#1e1e1e'
const BG_SURFACE = '#252525'
const TEXT = '#e4e4e4'
const TEXT_SEC = '#999'
const TEXT_MUTED = '#666'
const BORDER = '#2a2a2a'

const S: Record<string, CSSProperties> = {
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
    fontFamily: MONO, fontSize: 11, textAlign: 'center' as const,
    outline: 'none', width: 0,
  },
  groupTitle: {
    fontSize: 10, fontWeight: 600, color: TEXT_MUTED,
    textTransform: 'uppercase' as const, letterSpacing: 0.8,
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
    display: 'flex', flexDirection: 'column' as const,
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
    color: TEXT_MUTED, fontSize: 12, textAlign: 'center' as const,
    padding: '20px 12px', display: 'flex', flexDirection: 'column' as const,
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
    fontFamily: MONO, wordBreak: 'break-all' as const, lineHeight: 1.4,
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
    textTransform: 'uppercase' as const, letterSpacing: 0.8, marginBottom: 3,
  },
  schemaRow: {
    display: 'flex', alignItems: 'center', gap: 7, padding: '2px 0', fontSize: 12,
  },
  schemaKey: { fontFamily: MONO, fontSize: 11, color: TEXT_SEC },
}
