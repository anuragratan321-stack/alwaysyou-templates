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
// ── useAudio() — background music with template-controlled playback ─────────
//
// The hook creates the Audio element and unlocks the browser AudioContext on the
// first user gesture, but does NOT auto-play. Playback starts only when the
// template calls audio.play(). If play() is called before the context is
// unlocked, it is queued and fires as soon as the next gesture unlocks it.
export function useAudio(url, options) {
    const ctx = useContext(AlwaysYouContext);
    const emit = ctx ? ctx.track : windowTrack;
    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(false);
    const trackedStart = useRef(false);
    const unlocked = useRef(false);
    const pendingPlay = useRef(false);
    useEffect(() => {
        if (!url)
            return;
        const a = new Audio(url);
        a.loop = options?.loop ?? true;
        a.volume = options?.volume ?? 0.45;
        a.preload = 'auto';
        audioRef.current = a;
        const unlock = () => {
            if (unlocked.current)
                return;
            unlocked.current = true;
            // Create + resume a silent AudioContext to satisfy browser autoplay policy
            const ac = new AudioContext();
            if (ac.state === 'suspended')
                ac.resume().catch(() => { });
            // If the template already called play() before unlock, start now
            if (pendingPlay.current) {
                pendingPlay.current = false;
                a.play().then(() => {
                    setPlaying(true);
                    if (!trackedStart.current) {
                        trackedStart.current = true;
                        emit('audio_started', { url });
                    }
                }).catch(() => { });
            }
            window.removeEventListener('pointerdown', unlock);
            window.removeEventListener('touchstart', unlock);
            window.removeEventListener('keydown', unlock);
        };
        window.addEventListener('pointerdown', unlock);
        window.addEventListener('touchstart', unlock);
        window.addEventListener('keydown', unlock);
        return () => {
            a.pause();
            audioRef.current = null;
            setPlaying(false);
            unlocked.current = false;
            pendingPlay.current = false;
            window.removeEventListener('pointerdown', unlock);
            window.removeEventListener('touchstart', unlock);
            window.removeEventListener('keydown', unlock);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);
    useEffect(() => {
        if (audioRef.current)
            audioRef.current.muted = muted;
    }, [muted]);
    const toggle = useCallback(() => setMuted((m) => !m), []);
    const play = useCallback(() => {
        const a = audioRef.current;
        if (!a)
            return;
        if (!unlocked.current) {
            // Browser hasn't been unlocked yet — queue for when it is
            pendingPlay.current = true;
            return;
        }
        a.play().then(() => {
            setPlaying(true);
            if (!trackedStart.current) {
                trackedStart.current = true;
                emit('audio_started', { url });
            }
        }).catch(() => { });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);
    const pause = useCallback(() => {
        audioRef.current?.pause();
        setPlaying(false);
        pendingPlay.current = false;
    }, []);
    return { playing: playing && !muted, muted, toggle, play, pause };
}
// ── usePopupTrigger() — tell the shell which screen to show a popup on ──────
export function usePopupTrigger(type) {
    const fired = useRef(false);
    useEffect(() => {
        if (fired.current)
            return;
        fired.current = true;
        if (typeof window !== 'undefined') {
            const eventName = type === 'feedback' ? 'ay:show-feedback' : 'ay:show-response';
            window.dispatchEvent(new CustomEvent(eventName));
        }
    }, [type]);
}
// ── useFont() — load Google Fonts into the document ─────────────────────────
//
// Works in both dev mode (PhoneFrame iframe, via MutationObserver propagation)
// and production (standalone HTML shell). For zero-FOUT in production, also
// declare fonts in manifest.json — the shell preloads them before JS executes.
export function useFont(fonts) {
    const key = Array.isArray(fonts) ? fonts.join(',') : fonts;
    useEffect(() => {
        const list = Array.isArray(fonts) ? fonts : [fonts];
        if (list.length === 0)
            return;
        const families = [];
        const needsItalic = [];
        list.forEach((f) => {
            const colon = f.indexOf(':');
            const name = (colon > -1 ? f.slice(0, colon) : f).trim().replace(/ /g, '+');
            if (colon > -1) {
                families.push(`family=${name}${f.slice(colon)}`);
            }
            else {
                families.push(`family=${name}`);
                needsItalic.push(name);
            }
        });
        const url = `https://fonts.googleapis.com/css2?${families.join('&')}&display=swap`;
        const existing = document.head.querySelectorAll('link[rel="stylesheet"]');
        function hasLink(href) {
            for (let i = 0; i < existing.length; i++) {
                if (existing[i].href === href)
                    return true;
            }
            return false;
        }
        if (hasLink(url))
            return;
        const frag = document.createDocumentFragment();
        if (!document.querySelector('link[rel="preconnect"][href="https://fonts.googleapis.com"]')) {
            const pc = document.createElement('link');
            pc.rel = 'preconnect';
            pc.href = 'https://fonts.googleapis.com';
            frag.appendChild(pc);
        }
        if (!document.querySelector('link[rel="preconnect"][href="https://fonts.gstatic.com"]')) {
            const pc = document.createElement('link');
            pc.rel = 'preconnect';
            pc.href = 'https://fonts.gstatic.com';
            pc.crossOrigin = 'anonymous';
            frag.appendChild(pc);
        }
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        frag.appendChild(link);
        // Auto-load italic for fonts without an explicit axis spec.
        // Each gets its own <link> so a 400 from a font without italic
        // doesn't block other fonts.
        needsItalic.forEach((name) => {
            const italicUrl = `https://fonts.googleapis.com/css2?family=${name}:ital@1&display=swap`;
            if (!hasLink(italicUrl)) {
                const il = document.createElement('link');
                il.rel = 'stylesheet';
                il.href = italicUrl;
                frag.appendChild(il);
            }
        });
        document.head.appendChild(frag);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [key]);
}
// ── Session variables — generic key-value data per session ──────────────────
export function setSessionVariable(key, value) {
    windowTrack('session_variable', { key, value, _merge: 'set' });
}
export function appendSessionVariable(key, value) {
    windowTrack('session_variable', { key, value, _merge: 'append' });
}
