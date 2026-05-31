'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from 'react';
import { AlwaysYouContext } from './context';
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
export function AlwaysYouProvider({ data, mode = 'full', onTrack, children, }) {
    const value = useMemo(() => {
        const merged = {
            ...data,
            _previewMode: mode === 'preview' || mode === 'demo',
            _demoMode: mode === 'demo',
            _cardPreview: mode === 'card',
            _renderMode: mode === 'card' ? 'card' : undefined,
            _instanceId: 'dev-preview',
            _capabilities: {
                guestbook: '#', reactions: '#', respond: '#',
                open: '#', track: '#', visit: '#', error: '#',
            },
        };
        const track = (event, payload) => {
            // eslint-disable-next-line no-console
            console.log(`%c[track] ${event}`, 'color:#C2185B;font-weight:600', payload ?? {});
            onTrack?.(event, payload);
        };
        return { data: merged, track };
    }, [data, mode, onTrack]);
    return _jsx(AlwaysYouContext.Provider, { value: value, children: children });
}
/**
 * Optional iPhone-mockup wrapper so local preview matches how recipients see
 * the gift on mobile. Renders children inside a 390×844 device frame.
 */
export function PhoneFrame({ children }) {
    return (_jsx("div", { style: {
            minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: '#1c1c1e', padding: '24px',
        }, children: _jsx("div", { style: {
                width: 390, height: 844, maxHeight: 'calc(100vh - 48px)',
                borderRadius: 48, overflow: 'hidden', position: 'relative',
                border: '10px solid #2a2a2e',
                boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
                background: '#000',
            }, children: _jsx("div", { style: { width: '100%', height: '100%', overflow: 'auto' }, children: children }) }) }));
}
