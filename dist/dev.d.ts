import { type ReactNode } from 'react';
import type { TrackFn } from './types';
/**
 * Local development provider. Wrap your template in a Next.js page to develop
 * it like a normal React app — no platform connection needed.
 *
 *   import { AlwaysYouProvider, PhoneFrame } from '@alwaysyou/templates/dev'
 *   import Template from '../template'
 *   import demo from '../template/demo.json'
 *
 *   <PhoneFrame>
 *     <AlwaysYouProvider data={demo}>
 *       <Template data={demo} />
 *     </AlwaysYouProvider>
 *   </PhoneFrame>
 */
export declare function AlwaysYouProvider({ data, mode, onTrack, children, }: {
    data: Record<string, unknown>;
    mode?: 'full' | 'preview' | 'card' | 'demo';
    onTrack?: TrackFn;
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
/**
 * Optional iPhone-mockup wrapper so local preview matches how recipients see
 * the gift on mobile. Renders children inside a 390×844 device frame.
 */
export declare function PhoneFrame({ children }: {
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
