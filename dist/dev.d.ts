import { type ReactNode } from 'react';
import type { TrackFn } from './types';
type Mode = 'full' | 'preview' | 'card' | 'demo';
type SchemaJson = {
    sections?: Array<{
        fields?: Array<{
            key?: string;
        }>;
    }>;
};
export declare function AlwaysYouProvider({ data, mode, schema, onTrack, children, }: {
    data: Record<string, unknown>;
    mode?: Mode;
    schema?: SchemaJson;
    onTrack?: TrackFn;
    children: ReactNode;
}): import("react").JSX.Element;
export declare function PhoneFrame({ children, width: initialWidth, height: initialHeight, }: {
    children: ReactNode;
    width?: number;
    height?: number;
}): import("react").JSX.Element;
export {};
