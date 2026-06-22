import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import {
  AlwaysYouContext,
  windowData,
  windowTrack,
  setCurrentScreen,
} from './context'
import type { PlatformContext, TemplateData, TrackFn, RSVPEntry, RSVPSubmission, GuestbookEntry } from './types'

export type {
  AudioFieldValue,
  QuizQuestion,
  CapabilitiesAPI,
  PlatformContext,
  TemplateData,
  TrackFn,
  RSVPEntry,
  RSVPSubmission,
  GuestbookEntry,
} from './types'

// ── useAlwaysYou() ───────────────────────────────────────────────────────────
// The main hook. Resolves from the dev provider if present, else window globals.

export function useAlwaysYou<T extends object = TemplateData>(): {
  data: T & PlatformContext
  track: TrackFn
  isPreview: boolean
  isCard: boolean
  isDemo: boolean
} {
  const ctx = useContext(AlwaysYouContext)
  const data = (ctx ? ctx.data : windowData()) as T & PlatformContext
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

// ── useNavigation() — screen state machine with auto analytics ──────────────

export function useNavigation<T extends string>(
  screens: readonly T[],
  options?: { initial?: T },
): {
  screen: T
  index: number
  go: (to: T) => void
  next: () => void
  back: () => void
  replay: () => void
  replayCount: number
  isFirst: boolean
  isLast: boolean
} {
  if (screens.length === 0) {
    throw new Error('useNavigation: screens array must not be empty')
  }

  const ctx = useContext(AlwaysYouContext)
  const emit = ctx ? ctx.track : windowTrack

  const initial = options?.initial ?? screens[0]
  const [idx, setIdx] = useState(() => Math.max(0, screens.indexOf(initial)))
  const [replays, setReplays] = useState(0)

  useScreen(screens[idx])

  const go = useCallback(
    (to: T) => {
      const i = screens.indexOf(to)
      if (i !== -1) setIdx(i)
    },
    // screens array identity may change — index by length + first/last as proxy
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [screens.length],
  )

  const next = useCallback(() => setIdx((i) => Math.min(i + 1, screens.length - 1)), [screens.length])
  const back = useCallback(() => setIdx((i) => Math.max(i - 1, 0)), [screens.length])

  const replay = useCallback(() => {
    setIdx(0)
    setReplays((c) => c + 1)
    emit('replay', { from_screen: screens[idx], replay_number: replays + 1 })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emit, screens.length, idx, replays])

  return {
    screen: screens[idx],
    index: idx,
    go,
    next,
    back,
    replay,
    replayCount: replays,
    isFirst: idx === 0,
    isLast: idx === screens.length - 1,
  }
}

// ── useAudio() — background music with template-controlled playback ─────────
//
// The hook creates the Audio element and unlocks the browser AudioContext on the
// first user gesture, but does NOT auto-play. Playback starts only when the
// template calls audio.play(). If play() is called before the context is
// unlocked, it is queued and fires as soon as the next gesture unlocks it.

export function useAudio(
  url?: string,
  options?: { loop?: boolean; volume?: number },
): {
  playing: boolean
  muted: boolean
  toggle: () => void
  play: () => void
  pause: () => void
} {
  const ctx = useContext(AlwaysYouContext)
  const emit = ctx ? ctx.track : windowTrack
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const trackedStart = useRef(false)
  const unlocked = useRef(false)
  const pendingPlay = useRef(false)

  useEffect(() => {
    if (!url) return
    const a = new Audio(url)
    a.loop = options?.loop ?? true
    a.volume = options?.volume ?? 0.45
    a.preload = 'auto'
    audioRef.current = a

    const unlock = () => {
      if (unlocked.current) return
      unlocked.current = true
      // Create + resume a silent AudioContext to satisfy browser autoplay policy
      const ac = new AudioContext()
      if (ac.state === 'suspended') ac.resume().catch(() => {})
      // If the template already called play() before unlock, start now
      if (pendingPlay.current) {
        pendingPlay.current = false
        a.play().then(() => {
          setPlaying(true)
          if (!trackedStart.current) {
            trackedStart.current = true
            emit('audio_started', { url })
          }
        }).catch(() => {})
      }
      window.removeEventListener('pointerdown', unlock)
      window.removeEventListener('touchstart', unlock)
      window.removeEventListener('keydown', unlock)
    }

    window.addEventListener('pointerdown', unlock)
    window.addEventListener('touchstart', unlock)
    window.addEventListener('keydown', unlock)

    return () => {
      a.pause()
      audioRef.current = null
      setPlaying(false)
      unlocked.current = false
      pendingPlay.current = false
      window.removeEventListener('pointerdown', unlock)
      window.removeEventListener('touchstart', unlock)
      window.removeEventListener('keydown', unlock)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  useEffect(() => {
    if (audioRef.current) audioRef.current.muted = muted
  }, [muted])

  const toggle = useCallback(() => setMuted((m) => !m), [])

  const play = useCallback(() => {
    const a = audioRef.current
    if (!a) return
    a.play().then(() => {
      unlocked.current = true
      setPlaying(true)
      if (!trackedStart.current) {
        trackedStart.current = true
        emit('audio_started', { url })
      }
    }).catch(() => {
      pendingPlay.current = true
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  const pause = useCallback(() => {
    audioRef.current?.pause()
    setPlaying(false)
    pendingPlay.current = false
  }, [])

  return { playing, muted, toggle, play, pause }
}

// ── useSessionData() — store arbitrary key-value pairs on the session ────────
//
// Templates call session.set("Wish", "I want a teddy bear") to attach data to
// the current session. The data appears in the sender's session summary email
// and admin analytics. Keys are human-readable labels, values are strings.

export function useSessionData(): {
  set: (key: string, value: string) => void
} {
  const ctx = useContext(AlwaysYouContext)
  const emit = ctx ? ctx.track : windowTrack

  const set = useCallback(
    (key: string, value: string) => {
      emit('session_set_data', { key, value })
    },
    [emit],
  )

  return { set }
}

// ── useQuiz() — first-class Quiz field hook ─────────────────────────────────
//
// Reads questions from data[fieldKey], manages answer state, and auto-reports
// structured results to the session when all questions are answered.
//
//   const quiz = useQuiz('relationship_quiz')
//   quiz.questions    — QuizQuestion[] from template data
//   quiz.answer(qi, oi) — select option oi for question qi
//   quiz.answers      — { [questionIndex]: selectedOptionIndex }
//   quiz.score        — { correct: 2, total: 3 }
//   quiz.isComplete   — true when every question has an answer
//   quiz.submitted    — true after results auto-reported to session

type QuizQuestionData = {
  id: string
  text: string
  options: string[]
  correctIndex: number
  [key: string]: unknown
}

export function useQuiz(fieldKey: string): {
  questions: QuizQuestionData[]
  answer: (questionIndex: number, optionIndex: number) => void
  answers: Record<number, number>
  score: { correct: number; total: number }
  isComplete: boolean
  submitted: boolean
} {
  const ctx = useContext(AlwaysYouContext)
  const data = ctx ? ctx.data : windowData()
  const emit = ctx ? ctx.track : windowTrack

  const questions = (Array.isArray(data[fieldKey]) ? data[fieldKey] : []) as QuizQuestionData[]
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [submitted, setSubmitted] = useState(false)
  const submitGuard = useRef(false)

  const answer = useCallback((qi: number, oi: number) => {
    setAnswers((prev) => ({ ...prev, [qi]: oi }))
  }, [])

  const total = questions.length
  const isComplete = total > 0 && Object.keys(answers).length >= total

  const correct = (() => {
    let c = 0
    for (const [qi, oi] of Object.entries(answers)) {
      if (questions[Number(qi)]?.correctIndex === oi) c++
    }
    return c
  })()

  useEffect(() => {
    if (!isComplete || submitGuard.current) return
    submitGuard.current = true
    setSubmitted(true)

    emit('quiz_complete', {
      field_key: fieldKey,
      results: {
        score: `${correct}/${total}`,
        questions: questions.map((q, i) => ({
          text: q.text,
          options: q.options,
          correctIndex: q.correctIndex,
          selectedIndex: answers[i] ?? -1,
        })),
      },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isComplete])

  return {
    questions,
    answer,
    answers,
    score: { correct, total },
    isComplete,
    submitted,
  }
}

// ── useQuizResult() — manual quiz reporting (non-schema quizzes) ────────────
//
// For custom quizzes not defined as a Quiz schema field. Prefer useQuiz() for
// schema-based quiz fields — it handles everything automatically.

export type QuizResultQuestion = {
  text: string
  options: string[]
  correctIndex: number
  selectedIndex: number
}

export function useQuizResult(fieldKey?: string): {
  submit: (questions: QuizResultQuestion[]) => void
} {
  const ctx = useContext(AlwaysYouContext)
  const emit = ctx ? ctx.track : windowTrack
  const didSubmit = useRef(false)

  const submit = useCallback(
    (questions: QuizResultQuestion[]) => {
      if (didSubmit.current) return
      didSubmit.current = true
      const correct = questions.filter((q) => q.selectedIndex === q.correctIndex).length
      emit('quiz_complete', {
        field_key: fieldKey,
        results: {
          score: `${correct}/${questions.length}`,
          questions: questions.map((q) => ({
            text: q.text,
            options: q.options,
            correctIndex: q.correctIndex,
            selectedIndex: q.selectedIndex,
          })),
        },
      })
    },
    [emit, fieldKey],
  )

  return { submit }
}

// ── usePopupTrigger() — tell the shell which screen to show a popup on ──────

export function usePopupTrigger(type: 'feedback' | 'response'): void {
  const fired = useRef(false)

  useEffect(() => {
    if (fired.current) return
    fired.current = true
    if (typeof window !== 'undefined') {
      const eventName = type === 'feedback' ? 'ay:show-feedback' : 'ay:show-response'
      window.dispatchEvent(new CustomEvent(eventName))
    }
  }, [type])
}

// ── useFont() — load Google Fonts into the document ─────────────────────────
//
// Works in both dev mode (PhoneFrame iframe, via MutationObserver propagation)
// and production (standalone HTML shell). For zero-FOUT in production, also
// declare fonts in manifest.json — the shell preloads them before JS executes.

export function useFont(fonts: string | string[]): void {
  const key = Array.isArray(fonts) ? fonts.join(',') : fonts

  useEffect(() => {
    const list = Array.isArray(fonts) ? fonts : [fonts]
    if (list.length === 0) return

    const families: string[] = []
    const needsItalic: string[] = []

    list.forEach((f) => {
      const colon = f.indexOf(':')
      const name = (colon > -1 ? f.slice(0, colon) : f).trim().replace(/ /g, '+')
      if (colon > -1) {
        families.push(`family=${name}${f.slice(colon)}`)
      } else {
        families.push(`family=${name}`)
        needsItalic.push(name)
      }
    })

    const url = `https://fonts.googleapis.com/css2?${families.join('&')}&display=swap`

    const existing = document.head.querySelectorAll<HTMLLinkElement>('link[rel="stylesheet"]')

    function hasLink(href: string): boolean {
      for (let i = 0; i < existing.length; i++) {
        if (existing[i].href === href) return true
      }
      return false
    }

    if (hasLink(url)) return

    const frag = document.createDocumentFragment()

    if (!document.querySelector('link[rel="preconnect"][href="https://fonts.googleapis.com"]')) {
      const pc = document.createElement('link')
      pc.rel = 'preconnect'
      pc.href = 'https://fonts.googleapis.com'
      frag.appendChild(pc)
    }
    if (!document.querySelector('link[rel="preconnect"][href="https://fonts.gstatic.com"]')) {
      const pc = document.createElement('link')
      pc.rel = 'preconnect'
      pc.href = 'https://fonts.gstatic.com'
      pc.crossOrigin = 'anonymous'
      frag.appendChild(pc)
    }

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = url
    frag.appendChild(link)

    // Auto-load italic for fonts without an explicit axis spec.
    // Each gets its own <link> so a 400 from a font without italic
    // doesn't block other fonts.
    needsItalic.forEach((name) => {
      const italicUrl = `https://fonts.googleapis.com/css2?family=${name}:ital@1&display=swap`
      if (!hasLink(italicUrl)) {
        const il = document.createElement('link')
        il.rel = 'stylesheet'
        il.href = italicUrl
        frag.appendChild(il)
      }
    })

    document.head.appendChild(frag)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])
}

// ── Session variables — generic key-value data per session ──────────────────

export function setSessionVariable(key: string, value: unknown): void {
  windowTrack('session_variable', { key, value, _merge: 'set' })
}

export function appendSessionVariable(key: string, value: unknown): void {
  windowTrack('session_variable', { key, value, _merge: 'append' })
}

// ── useRSVP() — RSVP management for invitation templates ────────────────────

export function useRSVP(): {
  rsvps: RSVPEntry[]
  loading: boolean
  submit: (data: RSVPSubmission) => Promise<boolean>
  stats: { attending: number; notAttending: number; maybe: number; totalGuests: number }
} {
  const ctx = useContext(AlwaysYouContext)
  const data = ctx ? ctx.data : windowData()
  const emit = ctx ? ctx.track : windowTrack
  const caps = data._capabilities
  const [rsvps, setRsvps] = useState<RSVPEntry[]>([])
  const [loading, setLoading] = useState(true)
  const fetched = useRef(false)

  useEffect(() => {
    if (fetched.current || !caps?.rsvp) { setLoading(false); return }
    fetched.current = true
    fetch(caps.rsvp)
      .then((r) => r.json())
      .then((d) => setRsvps(d.entries ?? []))
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [caps?.rsvp])

  const submit = useCallback(
    async (submission: RSVPSubmission): Promise<boolean> => {
      if (!caps?.rsvp) return false
      try {
        const res = await fetch(caps.rsvp, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(submission),
        })
        if (!res.ok) return false
        const { entry } = await res.json()
        if (entry) setRsvps((prev) => [entry, ...prev])
        emit('rsvp_submitted', { response: submission.response, guest_count: submission.guest_count ?? 1 })
        return true
      } catch {
        return false
      }
    },
    [caps?.rsvp, emit],
  )

  const stats = (() => {
    let attending = 0, notAttending = 0, maybe = 0, totalGuests = 0
    for (const r of rsvps) {
      if (r.response === 'attending') { attending++; totalGuests += r.guest_count }
      else if (r.response === 'not_attending') notAttending++
      else maybe++
    }
    return { attending, notAttending, maybe, totalGuests }
  })()

  return { rsvps, loading, submit, stats }
}

// ── useGuestbook() — wishes wall for templates ──────────────────────────────

export function useGuestbook(): {
  entries: GuestbookEntry[]
  loading: boolean
  submit: (data: { name: string; message?: string }) => Promise<boolean>
} {
  const ctx = useContext(AlwaysYouContext)
  const data = ctx ? ctx.data : windowData()
  const emit = ctx ? ctx.track : windowTrack
  const caps = data._capabilities
  const [entries, setEntries] = useState<GuestbookEntry[]>([])
  const [loading, setLoading] = useState(true)
  const fetched = useRef(false)

  useEffect(() => {
    if (fetched.current || !caps?.guestbook) { setLoading(false); return }
    fetched.current = true
    fetch(caps.guestbook)
      .then((r) => r.json())
      .then((d) => setEntries(d.entries ?? []))
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [caps?.guestbook])

  const submit = useCallback(
    async (submission: { name: string; message?: string }): Promise<boolean> => {
      if (!caps?.guestbook) return false
      try {
        const res = await fetch(caps.guestbook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(submission),
        })
        if (!res.ok) return false
        const { entry } = await res.json()
        if (entry) setEntries((prev) => [entry, ...prev])
        emit('wish_posted', { name: submission.name })
        return true
      } catch {
        return false
      }
    },
    [caps?.guestbook, emit],
  )

  return { entries, loading, submit }
}
