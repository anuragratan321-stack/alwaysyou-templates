import { useContext, useEffect, useRef } from 'react'
import {
  AlwaysYouContext,
  windowData,
  windowTrack,
  setCurrentScreen,
} from './context'
import type { TemplateData, TrackFn } from './types'

export type {
  AudioFieldValue,
  QuizQuestion,
  CapabilitiesAPI,
  PlatformContext,
  TemplateData,
  TrackFn,
} from './types'

// ── useAlwaysYou() ───────────────────────────────────────────────────────────
// The main hook. Resolves from the dev provider if present, else window globals.

export function useAlwaysYou(): {
  data: TemplateData
  track: TrackFn
  isPreview: boolean
  isCard: boolean
  isDemo: boolean
} {
  const ctx = useContext(AlwaysYouContext)
  const data = ctx ? ctx.data : windowData()
  const track = ctx ? ctx.track : windowTrack

  return {
    data,
    track,
    isPreview: !!data._previewMode,
    isCard: !!(data._cardPreview || data._renderMode === 'card'),
    isDemo: !!data._demoMode,
  }
}

// ── track() — standalone (outside React) ─────────────────────────────────────
// Always uses the window path. Inside components prefer useAlwaysYou().track.

export const track: TrackFn = (event, payload) => windowTrack(event, payload)

// ── useScreen() — screen view + duration analytics ───────────────────────────

export function useScreen(name: string): void {
  const ctx = useContext(AlwaysYouContext)
  const emit = ctx ? ctx.track : windowTrack
  const mountedAt = useRef(0)

  useEffect(() => {
    mountedAt.current = Date.now()
    setCurrentScreen(name)
    emit('screen_view', { screen: name })

    return () => {
      const duration = Math.round((Date.now() - mountedAt.current) / 1000)
      emit('screen_exit', { screen: name, duration_seconds: duration })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name])
}

// ── useMilestone() — fires once when condition becomes true ──────────────────

export function useMilestone(name: string, reached: boolean): void {
  const ctx = useContext(AlwaysYouContext)
  const emit = ctx ? ctx.track : windowTrack
  const fired = useRef(false)

  useEffect(() => {
    if (reached && !fired.current) {
      fired.current = true
      emit('milestone_reached', { milestone: name })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reached, name])
}
