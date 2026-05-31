import { useContext, useEffect, useRef, useState } from 'react';
import { AlwaysYouContext, windowData, windowTrack, setCurrentScreen, } from './context';
// ── useAlwaysYou() ───────────────────────────────────────────────────────────
// The main hook. Resolves from the dev provider if present, else window globals.
export function useAlwaysYou() {
    const ctx = useContext(AlwaysYouContext);
    const data = ctx ? ctx.data : windowData();
    const track = ctx ? ctx.track : windowTrack;
    return {
        data,
        track,
        isPreview: !!data._previewMode,
        isCard: !!(data._cardPreview || data._renderMode === 'card'),
        isDemo: !!data._demoMode,
    };
}
// ── track() — standalone (outside React) ─────────────────────────────────────
// Always uses the window path. Inside components prefer useAlwaysYou().track.
export const track = (event, payload) => windowTrack(event, payload);
// ── useScreen() — screen view + duration analytics ───────────────────────────
export function useScreen(name) {
    const ctx = useContext(AlwaysYouContext);
    const emit = ctx ? ctx.track : windowTrack;
    const mountedAt = useRef(Date.now());
    useEffect(() => {
        setCurrentScreen(name);
        emit('screen_view', { screen: name });
        return () => {
            const duration = Math.round((Date.now() - mountedAt.current) / 1000);
            emit('screen_exit', { screen: name, duration_seconds: duration });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name]);
}
// ── useMilestone() — fires once when condition becomes true ──────────────────
export function useMilestone(name, reached) {
    const ctx = useContext(AlwaysYouContext);
    const emit = ctx ? ctx.track : windowTrack;
    const [fired, setFired] = useState(false);
    useEffect(() => {
        if (reached && !fired) {
            setFired(true);
            emit('milestone_reached', { milestone: name });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reached, fired, name]);
}
