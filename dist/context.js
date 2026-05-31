import { createContext } from 'react';
export const AlwaysYouContext = createContext(null);
function ay() {
    return (typeof window !== 'undefined' ? window : {});
}
function getSessionId() {
    const w = ay();
    if (!w.__ay_session_id) {
        w.__ay_session_id = Math.random().toString(36).slice(2) + Date.now().toString(36);
    }
    return w.__ay_session_id;
}
export function setCurrentScreen(name) {
    ay().__ay_current_screen = name;
}
/** Data resolution when no provider is present (production). */
export function windowData() {
    return (ay().__TEMPLATE_DATA__ ?? {});
}
/** Track resolution when no provider is present (production). */
export const windowTrack = (event, payload) => {
    const w = ay();
    const enriched = {
        ...payload,
        _sessionId: getSessionId(),
        _screenName: w.__ay_current_screen,
        _timestamp: Date.now(),
    };
    if (w.alwaysyou?.track) {
        w.alwaysyou.track(event, enriched);
    }
    else if (typeof console !== 'undefined') {
        console.log(`[ay:track] ${event}`, enriched);
    }
};
