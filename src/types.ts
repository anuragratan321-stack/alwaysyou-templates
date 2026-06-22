// Public types for the AlwaysYou template SDK.

export type AudioFieldValue = {
  url: string
  start?: number
  end?: number
}

export type QuizQuestion = {
  id: string
  text: string
  options: string[]
  correctIndex: number
  correctIndices?: number[]
  hint?: string
  explanation?: string
  image?: string
  points?: number
}

export type CapabilitiesAPI = {
  guestbook: string
  reactions: string
  respond: string
  open: string
  track: string
  visit: string
  error: string
  rsvp: string
}

export type RSVPEntry = {
  id: string
  guest_name: string
  guest_phone?: string | null
  response: 'attending' | 'not_attending' | 'maybe'
  guest_count: number
  dietary?: string | null
  message?: string | null
  created_at: string
}

export type RSVPSubmission = {
  guest_name: string
  guest_phone?: string
  response: 'attending' | 'not_attending' | 'maybe'
  guest_count?: number
  dietary?: string
  message?: string
}

export type GuestbookEntry = {
  id: string
  name: string
  message?: string | null
  created_at: string
}

export type PlatformContext = {
  _previewMode?: boolean
  _demoMode?: boolean
  _renderMode?: string
  _cardPreview?: boolean
  _expiresAt?: string
  _instanceId?: string
  _senderName?: string | null
  _capabilities?: CapabilitiesAPI
}

/** The data object every template receives. Extend with your schema fields. */
export type TemplateData = PlatformContext & Record<string, unknown>

export type TrackFn = (event: string, payload?: Record<string, unknown>) => void
