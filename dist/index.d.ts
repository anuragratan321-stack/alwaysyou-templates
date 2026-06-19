import type { PlatformContext, TemplateData, TrackFn } from './types';
export type { AudioFieldValue, QuizQuestion, CapabilitiesAPI, PlatformContext, TemplateData, TrackFn, } from './types';
export declare function useAlwaysYou<T extends object = TemplateData>(): {
    data: T & PlatformContext;
    track: TrackFn;
    isPreview: boolean;
    isCard: boolean;
    isDemo: boolean;
};
export declare const track: TrackFn;
export declare function useScreen(name: string): void;
export declare function useMilestone(name: string, reached: boolean): void;
export declare function useNavigation<T extends string>(screens: readonly T[], options?: {
    initial?: T;
}): {
    screen: T;
    index: number;
    go: (to: T) => void;
    next: () => void;
    back: () => void;
    replay: () => void;
    replayCount: number;
    isFirst: boolean;
    isLast: boolean;
};
export declare function useAudio(url?: string, options?: {
    loop?: boolean;
    volume?: number;
}): {
    playing: boolean;
    muted: boolean;
    toggle: () => void;
    play: () => void;
    pause: () => void;
};
export declare function useSessionData(): {
    set: (key: string, value: string) => void;
};
type QuizQuestionData = {
    id: string;
    text: string;
    options: string[];
    correctIndex: number;
    [key: string]: unknown;
};
export declare function useQuiz(fieldKey: string): {
    questions: QuizQuestionData[];
    answer: (questionIndex: number, optionIndex: number) => void;
    answers: Record<number, number>;
    score: {
        correct: number;
        total: number;
    };
    isComplete: boolean;
    submitted: boolean;
};
export type QuizResultQuestion = {
    text: string;
    options: string[];
    correctIndex: number;
    selectedIndex: number;
};
export declare function useQuizResult(fieldKey?: string): {
    submit: (questions: QuizResultQuestion[]) => void;
};
export declare function usePopupTrigger(type: 'feedback' | 'response'): void;
export declare function useFont(fonts: string | string[]): void;
export declare function setSessionVariable(key: string, value: unknown): void;
export declare function appendSessionVariable(key: string, value: unknown): void;
