import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { AlwaysYouContext, windowData, windowTrack, setCurrentScreen, } from './context';
// ── useAlwaysYou() ───────────────────────────────────────────────────────────
// The main hook. Resolves from the dev provider if present, else window globals.
export function useAlwaysYou() {
    const ctx = useContext(AlwaysYouContext);
    const data = (ctx ? ctx.data : windowData());
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
    const mountedAt = useRef(0);
    useEffect(() => {
        mountedAt.current = Date.now();
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
    const fired = useRef(false);
    useEffect(() => {
        if (reached && !fired.current) {
            fired.current = true;
            emit('milestone_reached', { milestone: name });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reached, name]);
}
// ── useNavigation() — screen state machine with auto analytics ──────────────
export function useNavigation(screens, options) {
    if (screens.length === 0) {
        throw new Error('useNavigation: screens array must not be empty');
    }
    const initial = options?.initial ?? screens[0];
    const [idx, setIdx] = useState(() => Math.max(0, screens.indexOf(initial)));
    useScreen(screens[idx]);
    const go = useCallback((to) => {
        const i = screens.indexOf(to);
        if (i !== -1)
            setIdx(i);
    }, 
    // screens array identity may change — index by length + first/last as proxy
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [screens.length]);
    const next = useCallback(() => setIdx((i) => Math.min(i + 1, screens.length - 1)), [screens.length]);
    const back = useCallback(() => setIdx((i) => Math.max(i - 1, 0)), [screens.length]);
    return {
        screen: screens[idx],
        index: idx,
        go,
        next,
        back,
        isFirst: idx === 0,
        isLast: idx === screens.length - 1,
    };
}
// ── useAudio() — background music with autoplay deferral ────────────────────
export function useAudio(url, options) {
    const ctx = useContext(AlwaysYouContext);
    const emit = ctx ? ctx.track : windowTrack;
    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(false);
    const trackedStart = useRef(false);
    useEffect(() => {
        if (!url)
            return;
        const a = new Audio(url);
        a.loop = options?.loop ?? true;
        a.volume = options?.volume ?? 0.45;
        audioRef.current = a;
        const start = () => {
            a.play().catch(() => { });
            setPlaying(true);
            if (!trackedStart.current) {
                trackedStart.current = true;
                emit('audio_started', { url });
            }
            window.removeEventListener('pointerdown', start);
        };
        window.addEventListener('pointerdown', start);
        return () => {
            a.pause();
            audioRef.current = null;
            setPlaying(false);
            window.removeEventListener('pointerdown', start);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);
    useEffect(() => {
        if (audioRef.current)
            audioRef.current.muted = muted;
    }, [muted]);
    const toggle = useCallback(() => setMuted((m) => !m), []);
    const play = useCallback(() => { audioRef.current?.play().catch(() => { }); setPlaying(true); }, []);
    const pause = useCallback(() => { audioRef.current?.pause(); setPlaying(false); }, []);
    return { playing: playing && !muted, muted, toggle, play, pause };
}
