import type { TemplateData, TrackFn } from './types';
/**
 * Local-dev context. Set by <AlwaysYouProvider> (from @alwaysyou/templates/dev).
 *
 * When present (creator's local Next.js project), hooks read data + track from
 * here. When absent (production platform iframe), hooks fall back to the
 * window globals the platform shell injects. Same hook code, two environments.
 */
export type AlwaysYouContextValue = {
    data: TemplateData;
    track: TrackFn;
} | null;
export declare const AlwaysYouContext: import("react").Context<AlwaysYouContextValue>;
export declare function setCurrentScreen(name: string | undefined): void;
/** Data resolution when no provider is present (production). */
export declare function windowData(): TemplateData;
/** Track resolution when no provider is present (production). */
export declare const windowTrack: TrackFn;
