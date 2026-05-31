import type { TemplateData, TrackFn } from './types';
export type { AudioFieldValue, QuizQuestion, CapabilitiesAPI, PlatformContext, TemplateData, TrackFn, } from './types';
export declare function useAlwaysYou(): {
    data: TemplateData;
    track: TrackFn;
    isPreview: boolean;
    isCard: boolean;
    isDemo: boolean;
};
export declare const track: TrackFn;
export declare function useScreen(name: string): void;
export declare function useMilestone(name: string, reached: boolean): void;
