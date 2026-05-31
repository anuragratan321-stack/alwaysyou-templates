import { createContext } from 'react'
import type { TemplateData, TrackFn } from './types'

/**
 * Local-dev context. Set by <AlwaysYouProvider> (from @alwaysyou/templates/dev).
 *
 * When present (creator's local Next.js project), hooks read data + track from
 * here. When absent (production platform iframe), hooks fall back to the
 * window globals the platform shell injects. Same hook code, two environments.
 */
export type AlwaysYouContextValue = {
  data: TemplateData
  track: TrackFn
} | null

export const AlwaysYouContext = createContext<AlwaysYouContextValue>(null)

// ── window globals (production platform shell) ───────────────────────────────

type AYWindow = {
  __TEMPLATE_DATA__?: Record<string, unknown>
  alwaysyou?: { track: TrackFn }
  __ay_session_id?: string
  __ay_current_screen?: string
}

function ay(): AYWindow {
  return (typeof window !== 'undefined' ? window : {}) as AYWindow
}

function getSessionId(): string {
  const w = ay()
  if (!w.__ay_session_id) {
    w.__ay_session_id = Math.random().toString(36).slice(2) + Date.now().toString(36)
  }
  return w.__ay_session_id
}

export function setCurrentScreen(name: string | undefined): void {
  ay().__ay_current_screen = name
}

/** Data resolution when no provider is present (production). */
export function windowData(): TemplateData {
  return (ay().__TEMPLATE_DATA__ ?? {}) as TemplateData
}

/** Track resolution when no provider is present (production). */
export const windowTrack: TrackFn = (event, payload) => {
  const w = ay()
  const enriched = {
    ...payload,
    _sessionId: getSessionId(),
    _screenName: w.__ay_current_screen,
    _timestamp: Date.now(),
  }
  if (w.alwaysyou?.track) {
    w.alwaysyou.track(event, enriched)
  } else if (typeof console !== 'undefined') {
    console.log(`[ay:track] ${event}`, enriched)
  }
}
