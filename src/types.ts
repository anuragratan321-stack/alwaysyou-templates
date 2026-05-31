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
}

export type CapabilitiesAPI = {
  guestbook: string
  reactions: string
  respond: string
  open: string
  track: string
  visit: string
  error: string
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
