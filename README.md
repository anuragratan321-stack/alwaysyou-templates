# @alwaysyou/templates

The SDK for building [AlwaysYou](https://alwaysyou.app) gift templates. Develop templates in a normal React/Next.js project — the SDK is your contract with the platform.

## Install

```bash
npm install github:alwaysyou/template-sdk#v1
```

No npm account or publishing required — installs straight from GitHub. Pin a version with the `#tag`.

## Quick start

A template is just a React component that receives a `data` prop.

```tsx
'use client'
import { useAlwaysYou, useScreen, useMilestone } from '@alwaysyou/templates'

export default function MyTemplate({ data }: { data: Record<string, unknown> }) {
  const { isPreview, track } = useAlwaysYou()
  useScreen('main')

  return <h1>Happy Birthday, {String(data.recipientName ?? 'friend')}!</h1>
}
```

### Develop locally

Wrap your template in the dev provider on a Next.js page. `npm run dev` and you get normal React HMR — no platform connection needed.

```tsx
'use client'
import { AlwaysYouProvider, PhoneFrame } from '@alwaysyou/templates/dev'
import MyTemplate from '../template'
import demo from '../template/demo.json'

export default function Preview() {
  return (
    <PhoneFrame>
      <AlwaysYouProvider data={demo} mode="full">
        <MyTemplate data={demo} />
      </AlwaysYouProvider>
    </PhoneFrame>
  )
}
```

In local dev, `track()` and the analytics hooks log to the console. In production (inside the AlwaysYou platform), the exact same code sends real analytics — no changes needed.

## API

### `useAlwaysYou()`
```ts
const { data, track, isPreview, isCard, isDemo } = useAlwaysYou()
```
- `data` — all gift data + platform context
- `track(event, payload?)` — send an analytics event
- `isPreview` / `isCard` / `isDemo` — render-mode flags

### `useScreen(name)`
One line per screen. Tracks view + time spent automatically.
```tsx
function GateScreen() { useScreen('gate'); return <div>…</div> }
```

### `useMilestone(name, reached)`
Fires once when `reached` becomes true.
```tsx
useMilestone('ending_reached', screen === 'finale')
```

### `track(event, payload?)`
Custom events for games, puzzles, interactions.
```tsx
track('game_complete', { game: 'memory', score: 8, moves: 16 })
```

## Types

```ts
import type { AudioFieldValue, QuizQuestion, TemplateData } from '@alwaysyou/templates'
```

## License

MIT
