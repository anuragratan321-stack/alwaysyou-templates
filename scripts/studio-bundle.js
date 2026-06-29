// scripts/studio/App.tsx
import { createRoot } from "react-dom/client";
import {
  useReducer,
  useEffect as useEffect9,
  useCallback as useCallback4,
  useState as useState9,
  useRef as useRef8,
} from "react";

// scripts/studio/styles.css
(function () {
  var s = document.createElement("style");
  s.textContent = `/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   Template Studio \u2014 Design System v2
   Framer / Notion / Figma-quality UI with floating panels
   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

/* \u2500\u2500 Design Tokens \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

:root {
  --bg: #ffffff;
  --bg-secondary: #fafafa;
  --bg-tertiary: #f3f3f3;
  --bg-hover: #f0f0f0;
  --bg-active: #e8e8e8;
  --bg-elevated: #ffffff;
  --bg-canvas: #f0f0f0;

  --border: #e2e2e2;
  --border-light: #ebebeb;
  --border-focus: #db2777;

  --text: #1a1a1a;
  --text-secondary: #555555;
  --text-tertiary: #999999;
  --text-inverse: #ffffff;

  --accent: #db2777;
  --accent-light: rgba(219, 39, 119, 0.07);
  --accent-hover: #be185d;
  --accent-muted: rgba(219, 39, 119, 0.14);

  --danger: #ef4444;
  --danger-light: rgba(239, 68, 68, 0.06);
  --danger-hover: #dc2626;
  --success: #10b981;
  --success-light: rgba(16, 185, 129, 0.06);
  --warning: #f59e0b;
  --warning-light: rgba(245, 158, 11, 0.06);

  --radius-xs: 4px;
  --radius: 6px;
  --radius-lg: 10px;
  --radius-xl: 12px;
  --radius-full: 9999px;

  --shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
  --shadow: 0 2px 8px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04);
  --shadow-lg: 0 4px 16px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04);
  --shadow-xl: 0 12px 36px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04);
  --shadow-panel: 0 1px 3px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.06);

  --transition: 150ms ease;
  --transition-slow: 250ms ease;
  --transition-spring: 200ms cubic-bezier(0.34, 1.56, 0.64, 1);

  --font: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  --font-mono: 'SF Mono', 'Fira Code', 'JetBrains Mono', monospace;
  --font-size-xxs: 10px;
  --font-size-xs: 11px;
  --font-size-sm: 12.5px;
  --font-size-base: 14px;
  --font-size-md: 15px;
  --font-size-lg: 17px;

  --header-h: 48px;
  --footer-h: 32px;
  --resize-handle-w: 1px;
}

[data-theme="dark"] {
  --bg: #151515;
  --bg-secondary: #1c1c1c;
  --bg-tertiary: #232323;
  --bg-hover: #282828;
  --bg-active: #333333;
  --bg-elevated: #1e1e1e;
  --bg-canvas: #111111;

  --border: #2c2c2c;
  --border-light: #242424;
  --border-focus: #f472b6;

  --text: #e5e5e5;
  --text-secondary: #a0a0a0;
  --text-tertiary: #666666;
  --text-inverse: #151515;

  --accent: #f472b6;
  --accent-light: rgba(244, 114, 182, 0.12);
  --accent-hover: #ec4899;
  --accent-muted: rgba(244, 114, 182, 0.2);

  --danger: #f87171;
  --danger-light: rgba(248, 113, 113, 0.1);
  --danger-hover: #ef4444;
  --success: #34d399;
  --success-light: rgba(52, 211, 153, 0.1);
  --warning: #fbbf24;
  --warning-light: rgba(251, 191, 36, 0.1);

  --shadow-sm: 0 1px 2px rgba(0,0,0,0.3);
  --shadow: 0 2px 8px rgba(0,0,0,0.25);
  --shadow-lg: 0 4px 16px rgba(0,0,0,0.35);
  --shadow-xl: 0 12px 36px rgba(0,0,0,0.5);
  --shadow-panel: 0 1px 4px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.04);
}

/* \u2500\u2500 Reset \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
html, body { height: 100%; overflow: hidden; }

body {
  font-family: var(--font);
  font-size: var(--font-size-base);
  color: var(--text);
  background: var(--bg);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.5;
}

::selection { background: var(--accent-muted); color: var(--text); }

::-webkit-scrollbar { width: 6px; height: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: var(--text-tertiary); }
* { scrollbar-width: thin; scrollbar-color: var(--border) transparent; }

:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 1px;
  border-radius: var(--radius);
}

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   LAYOUT SHELL
   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

.studio-shell {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: var(--bg-canvas);
}

.studio-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 16px;
  color: var(--text-secondary);
}

.loading-spinner {
  width: 20px; height: 20px;
  border: 2px solid var(--border);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: spin 600ms linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   HEADER
   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

.studio-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 16px;
  height: var(--header-h);
  background: var(--bg);
  border-bottom: 1px solid var(--border);
  flex-shrink: 0;
  z-index: 10;
}

.header-brand {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.header-title {
  font-size: 15px;
  font-weight: 650;
  letter-spacing: -0.02em;
  color: var(--text);
}

.header-slug {
  font-size: var(--font-size-xs);
  color: var(--text-tertiary);
  padding: 2px 8px;
  background: var(--bg-tertiary);
  border-radius: var(--radius-full);
  font-weight: 500;
}

.header-tabs {
  display: flex;
  gap: 1px;
  background: var(--bg-tertiary);
  border-radius: var(--radius);
  padding: 3px;
  margin: 0 auto;
}

.header-tab-pill {
  padding: 4px 14px;
  border: none;
  border-radius: calc(var(--radius) - 2px);
  background: transparent;
  color: var(--text-tertiary);
  font-size: var(--font-size-sm);
  font-family: var(--font);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition);
  white-space: nowrap;
}
.header-tab-pill:hover { color: var(--text-secondary); background: var(--bg-hover); }
.header-tab-pill.active {
  background: var(--bg-elevated);
  color: var(--text);
  font-weight: 550;
  box-shadow: var(--shadow-sm);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 2px;
  margin-left: auto;
}

.header-icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px; height: 30px;
  border: none;
  background: transparent;
  color: var(--text-tertiary);
  border-radius: var(--radius);
  cursor: pointer;
  transition: all var(--transition);
  flex-shrink: 0;
}
.header-icon-btn:hover { background: var(--bg-hover); color: var(--text); }
.header-icon-btn:active { transform: scale(0.93); }
.header-icon-btn.active { color: var(--accent); background: var(--accent-light); }

.header-separator {
  width: 1px; height: 16px;
  background: var(--border);
  margin: 0 4px;
  flex-shrink: 0;
}

.header-search-expanded {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 10px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg-secondary);
  width: 180px;
  transition: border-color var(--transition), box-shadow var(--transition);
}
.header-search-expanded:focus-within {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-light);
}
.header-search-expanded input {
  border: none; background: transparent; color: var(--text);
  font-size: var(--font-size-sm); font-family: var(--font); outline: none; width: 100%;
}
.header-search-expanded input::placeholder { color: var(--text-tertiary); }

.header-search-close {
  display: flex; align-items: center; justify-content: center;
  width: 16px; height: 16px;
  border: none; background: var(--bg-tertiary); color: var(--text-tertiary);
  border-radius: 50%; cursor: pointer; flex-shrink: 0;
  transition: all var(--transition);
}
.header-search-close:hover { background: var(--bg-active); color: var(--text); }

.header-save-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border: none;
  border-radius: var(--radius);
  background: var(--bg-tertiary);
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
  font-weight: 550;
  font-family: var(--font);
  cursor: pointer;
  transition: all var(--transition);
}
.header-save-btn:hover { background: var(--bg-active); color: var(--text); }
.header-save-btn.unsaved { background: var(--accent); color: white; }
.header-save-btn.unsaved:hover { background: var(--accent-hover); }
.header-save-btn:active { transform: scale(0.97); }
.header-save-btn:disabled { opacity: 0.5; cursor: not-allowed; pointer-events: none; }

.header-save-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: rgba(255,255,255,0.8);
  animation: pulse-dot 2s ease-in-out infinite;
}
@keyframes pulse-dot { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   MAIN LAYOUT \u2014 Canvas with floating panels
   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

.studio-main {
  flex: 1;
  display: flex;
  overflow: hidden;
  position: relative;
  gap: 0;
  padding: 0;
}

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   RESIZE HANDLE
   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

.panel-resize-handle {
  width: 5px;
  cursor: col-resize;
  background: transparent;
  position: relative;
  flex-shrink: 0;
  z-index: 5;
}
.panel-resize-handle::after {
  content: '';
  position: absolute;
  top: 0; bottom: 0; left: 50%;
  width: 1px;
  background: var(--border);
  transform: translateX(-50%);
  transition: all var(--transition);
}
.panel-resize-handle:hover::after {
  width: 3px;
  background: var(--accent);
  border-radius: 2px;
}

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   SECTIONS PANEL (LEFT)
   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

.panel-sections {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: var(--bg);
  border-right: 1px solid var(--border);
  flex-shrink: 0;
  transition: width var(--transition-slow), min-width var(--transition-slow), opacity var(--transition-slow);
}

.panel-sections.panel-collapsed {
  width: 0 !important; min-width: 0 !important;
  opacity: 0; pointer-events: none; overflow: hidden;
}

.panel-sections-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 14px 8px;
}

.panel-sections-title {
  font-size: var(--font-size-xs);
  font-weight: 650;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-tertiary);
}

.section-list-scroll {
  flex: 1;
  overflow-y: auto;
  padding: 0 6px;
}

.section-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 10px;
  margin-bottom: 2px;
  cursor: pointer;
  border-radius: var(--radius);
  border-left: 2px solid transparent;
  transition: all var(--transition);
  font-size: var(--font-size-base);
  color: var(--text-secondary);
}
.section-item:hover { background: var(--bg-hover); color: var(--text); }
.section-item.active {
  background: var(--accent-light);
  border-left-color: var(--accent);
  color: var(--accent);
}

.section-label {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
  font-size: var(--font-size-sm);
}

.section-count {
  font-size: var(--font-size-xxs);
  color: var(--text-tertiary);
  background: var(--bg-tertiary);
  padding: 0 5px;
  border-radius: var(--radius-full);
  line-height: 16px;
  min-width: 16px;
  text-align: center;
  font-weight: 500;
}

.section-rename-input {
  flex: 1;
  padding: 2px 6px;
  border: 1px solid var(--accent);
  border-radius: var(--radius-xs);
  background: var(--bg);
  color: var(--text);
  font-size: var(--font-size-sm);
  font-family: var(--font);
  outline: none;
  box-shadow: 0 0 0 3px var(--accent-light);
}

.section-menu-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px; height: 22px;
  border: none;
  background: transparent;
  color: var(--text-tertiary);
  border-radius: var(--radius-xs);
  cursor: pointer;
  opacity: 0;
  transition: all var(--transition);
  flex-shrink: 0;
}
.section-menu-btn.visible { opacity: 1; }
.section-menu-btn:hover { background: var(--bg-active); color: var(--text); }

.drag-handle {
  color: var(--text-tertiary);
  cursor: grab;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  opacity: 0;
  transition: opacity var(--transition);
}
.drag-handle.visible { opacity: 0.5; }
.drag-handle:active { cursor: grabbing; }

.add-section-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 14px;
  border: none;
  background: transparent;
  color: var(--text-tertiary);
  cursor: pointer;
  font-size: var(--font-size-sm);
  font-family: var(--font);
  transition: all var(--transition);
  margin-top: auto;
  border-top: 1px solid var(--border-light);
}
.add-section-btn:hover { color: var(--accent); background: var(--accent-light); }

.section-modal-fields { display: flex; flex-direction: column; gap: 12px; padding: 0 0 16px; }
.section-modal-actions { display: flex; gap: 8px; justify-content: flex-end; }

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   FIELDS PANEL (CENTER) \u2014 The form builder canvas
   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

.panel-fields {
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: var(--bg-canvas);
}

.panel-fields-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px 8px;
  flex-shrink: 0;
  max-width: 672px;
  margin: 0 auto;
  width: 100%;
}
.panel-fields-header h2 {
  font-size: var(--font-size-md);
  font-weight: 600;
  color: var(--text);
}

.panel-fields-header-actions {
  display: flex;
  align-items: center;
  gap: 6px;
}

/* Quick add dropdown */
.field-add-dropdown-wrapper { position: relative; }

.field-add-quick-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px; height: 28px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg-elevated);
  color: var(--text-secondary);
  cursor: pointer;
  transition: all var(--transition);
}
.field-add-quick-btn:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-light); }

.field-add-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 4px;
  width: 200px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  z-index: 30;
  padding: 4px;
  animation: contextMenuIn 120ms ease-out;
}

.field-add-dropdown-title {
  padding: 6px 10px 4px;
  font-size: var(--font-size-xs);
  font-weight: 650;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-tertiary);
}

.field-add-dropdown-item {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 7px 10px;
  border: none;
  border-radius: var(--radius);
  background: transparent;
  color: var(--text);
  font-size: var(--font-size-sm);
  font-family: var(--font);
  cursor: pointer;
  transition: all var(--transition);
  text-align: left;
}
.field-add-dropdown-item:hover { background: var(--bg-hover); }

.field-add-btn-header {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 12px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg-elevated);
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
  font-family: var(--font);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition);
}
.field-add-btn-header:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-light); }

/* Field list area */
.field-list {
  flex: 1;
  overflow-y: auto;
  padding: 4px 16px 16px;
  max-width: 640px;
  margin: 0 auto;
  width: 100%;
}

.field-list-empty,
.field-list-empty-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 60px 20px;
  color: var(--text-tertiary);
}

.field-list-empty-icon { margin-bottom: 12px; opacity: 0.4; }
.field-list-empty-title { font-size: var(--font-size-md); font-weight: 500; margin-bottom: 4px; color: var(--text-secondary); }
.field-list-empty-hint { font-size: var(--font-size-sm); }

.field-list-empty-section p { margin-bottom: 12px; font-size: var(--font-size-sm); }

.field-add-inline {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border: 1px dashed var(--border);
  border-radius: var(--radius);
  background: var(--bg-elevated);
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
  font-family: var(--font);
  cursor: pointer;
  transition: all var(--transition);
}
.field-add-inline:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-light); }

.field-list-no-results {
  text-align: center;
  padding: 32px 20px;
  color: var(--text-tertiary);
  font-size: var(--font-size-sm);
}

/* \u2500\u2500 Field Cards \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.field-card {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 0;
  margin-bottom: 8px;
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: all var(--transition);
  border: 1px solid var(--border-light);
  background: var(--bg-elevated);
  box-shadow: var(--shadow-sm);
  position: relative;
  overflow: hidden;
}
.field-card:hover {
  border-color: var(--border);
  box-shadow: var(--shadow);
  transform: translateY(-1px);
}
.field-card.active {
  border-color: var(--accent);
  box-shadow: 0 0 0 2px var(--accent-light), var(--shadow);
}

.field-card .drag-handle {
  padding: 12px 2px 12px 8px;
  align-self: stretch;
  display: flex;
  align-items: center;
}

.field-card-body {
  flex: 1;
  min-width: 0;
  padding: 12px 14px 12px 0;
}

.field-card-top {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
}

.field-icon-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px; height: 24px;
  border-radius: var(--radius);
  background: var(--bg-tertiary);
  color: var(--text-secondary);
  flex-shrink: 0;
  transition: all var(--transition);
}
.field-icon-badge.active,
.field-card.active .field-icon-badge {
  background: var(--accent);
  color: white;
}

.field-card-label-group {
  flex: 1;
  min-width: 0;
}

.field-card-label {
  font-size: var(--font-size-base);
  font-weight: 550;
  color: var(--text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  line-height: 1.2;
}

.field-required-asterisk {
  color: var(--danger);
  margin-left: 2px;
  font-weight: 400;
}

.field-card-meta {
  font-size: var(--font-size-xs);
  color: var(--text-tertiary);
  font-family: var(--font-mono);
  display: block;
  line-height: 1.4;
}

.field-conditional-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px; height: 20px;
  border-radius: 50%;
  background: var(--warning-light);
  color: var(--warning);
  flex-shrink: 0;
}

.field-type-pill {
  font-size: var(--font-size-xxs);
  font-weight: 550;
  color: var(--text-tertiary);
  background: var(--bg-tertiary);
  padding: 1px 7px;
  border-radius: var(--radius-full);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  flex-shrink: 0;
}

.field-menu-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px; height: 24px;
  border: none;
  background: transparent;
  color: var(--text-tertiary);
  border-radius: var(--radius-xs);
  cursor: pointer;
  opacity: 0;
  transition: all var(--transition);
  flex-shrink: 0;
}
.field-menu-btn.visible { opacity: 1; }
.field-menu-btn:hover { background: var(--bg-active); color: var(--text); }

/* \u2500\u2500 Field Previews (mock form inputs) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.field-preview {
  margin-top: 2px;
}

.field-preview-input {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 7px 10px;
  border: 1px solid var(--border-light);
  border-radius: var(--radius);
  background: var(--bg-secondary);
  font-size: var(--font-size-sm);
  pointer-events: none;
  user-select: none;
}

.field-preview-textarea {
  width: 100%;
  padding: 7px 10px;
  border: 1px solid var(--border-light);
  border-radius: var(--radius);
  background: var(--bg-secondary);
  min-height: 48px;
  pointer-events: none;
}

.field-preview-placeholder {
  color: var(--text-tertiary);
  font-size: var(--font-size-sm);
}

.field-preview-number { justify-content: space-between; }
.field-preview-unit { color: var(--text-tertiary); font-size: var(--font-size-xs); font-weight: 500; }
.field-preview-select { justify-content: space-between; }

.field-preview-toggle {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 4px 0;
}

.field-preview-toggle-track {
  width: 32px; height: 18px;
  border-radius: 9px;
  background: var(--border);
  position: relative;
  flex-shrink: 0;
}

.field-preview-toggle-thumb {
  width: 14px; height: 14px;
  border-radius: 50%;
  background: white;
  position: absolute;
  top: 2px; left: 2px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.15);
}

.field-preview-toggle-label {
  font-size: var(--font-size-sm);
  color: var(--text-tertiary);
}

.field-preview-color-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 2px 0;
}

.field-preview-color-swatch {
  width: 22px; height: 22px;
  border-radius: 50%;
  border: 2px solid var(--bg);
  box-shadow: 0 0 0 1px var(--border);
  flex-shrink: 0;
}

.field-preview-color-hex {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  font-family: var(--font-mono);
}

.field-preview-color-presets {
  display: flex;
  gap: 3px;
  margin-left: auto;
}

.field-preview-color-preset {
  width: 14px; height: 14px;
  border-radius: 50%;
  border: 1.5px solid var(--bg);
  box-shadow: 0 0 0 1px var(--border-light);
}

.field-preview-media {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 16px;
  border: 1.5px dashed var(--border);
  border-radius: var(--radius);
  background: var(--bg-secondary);
  color: var(--text-tertiary);
  font-size: var(--font-size-sm);
}

.field-preview-media-hint {
  font-size: var(--font-size-xs);
  color: var(--text-tertiary);
  margin-top: 4px;
}

.field-preview-aspect {
  font-size: var(--font-size-xxs);
  background: var(--bg-tertiary);
  padding: 1px 6px;
  border-radius: var(--radius-full);
  color: var(--text-tertiary);
  font-weight: 500;
}

.field-preview-gallery {
  display: flex;
  gap: 6px;
}

.field-preview-gallery-slot {
  width: 48px; height: 48px;
  border: 1.5px dashed var(--border);
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-tertiary);
  background: var(--bg-secondary);
}

.field-preview-gallery-add {
  border-style: dashed;
  color: var(--accent);
  border-color: var(--accent-muted);
}

.field-preview-group {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px;
  border: 1px solid var(--border-light);
  border-radius: var(--radius);
  background: var(--bg-secondary);
  color: var(--text-tertiary);
  font-size: var(--font-size-sm);
}

/* Add field bottom area */
.add-field-area {
  padding: 6px 16px 8px;
  flex-shrink: 0;
}

.add-field-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  padding: 8px;
  border: 1.5px dashed var(--border);
  border-radius: var(--radius);
  background: transparent;
  color: var(--text-tertiary);
  cursor: pointer;
  font-size: var(--font-size-sm);
  font-family: var(--font);
  justify-content: center;
  transition: all var(--transition);
}
.add-field-btn:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-light); }

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   INSPECTOR PANEL (RIGHT)
   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

.panel-inspector {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: var(--bg);
  border-left: 1px solid var(--border);
  flex-shrink: 0;
  transition: width var(--transition-slow), min-width var(--transition-slow), opacity var(--transition-slow);
}

.panel-inspector.panel-collapsed {
  width: 0 !important; min-width: 0 !important;
  opacity: 0; pointer-events: none; overflow: hidden;
}

.inspector-toolbar {
  padding: 12px 14px;
  border-bottom: 1px solid var(--border-light);
  flex-shrink: 0;
}

.inspector-toolbar-title {
  font-size: var(--font-size-xs);
  font-weight: 650;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-tertiary);
}

.inspector-type-badge-row {
  display: flex;
  align-items: center;
  gap: 6px;
}

.inspector-type-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px; height: 22px;
  border-radius: var(--radius-xs);
  background: var(--accent-light);
  color: var(--accent);
}

.inspector-type-badge {
  font-size: var(--font-size-sm);
  font-weight: 550;
  color: var(--accent);
}

.inspector-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  color: var(--text-tertiary);
  font-size: var(--font-size-sm);
  gap: 10px;
  padding: 24px;
  text-align: center;
}

.inspector-fields {
  flex: 1;
  overflow-y: auto;
  padding: 4px 0;
}

/* \u2500\u2500 Collapsible Inspector Sections \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.inspector-section {
  border-bottom: 1px solid var(--border-light);
}

.inspector-section-header {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 10px 16px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: var(--font-size-sm);
  font-weight: 550;
  color: var(--text-secondary);
  font-family: var(--font);
  text-align: left;
  transition: all var(--transition);
}
.inspector-section-header:hover { background: var(--bg-hover); color: var(--text); }

.inspector-section-icon {
  display: flex;
  align-items: center;
  color: var(--text-tertiary);
}

.inspector-section-title { flex: 1; }

.inspector-section-body {
  padding: 4px 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  animation: slideInUp 150ms ease;
}

.inspector-danger-zone {
  padding: 14px;
}

.inspector-placeholder {
  padding: 16px;
  text-align: center;
  color: var(--text-tertiary);
  font-size: var(--font-size-sm);
  line-height: 1.5;
}

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   FORMS
   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

.form-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.form-group-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.form-label {
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--text-secondary);
}

.form-input {
  padding: 8px 12px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg-secondary);
  color: var(--text);
  font-size: var(--font-size-sm);
  font-family: var(--font);
  outline: none;
  transition: border-color var(--transition), box-shadow var(--transition), background var(--transition);
  resize: vertical;
  line-height: 1.4;
}
.form-input:hover { border-color: var(--text-tertiary); background: var(--bg); }
.form-input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-light);
  background: var(--bg);
}
.form-input.font-mono { font-family: var(--font-mono); }

select.form-input {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;
  padding-right: 24px;
  cursor: pointer;
}

/* Toggle switch */
.toggle-switch {
  position: relative;
  display: inline-flex;
  width: 32px; height: 18px;
  cursor: pointer;
  flex-shrink: 0;
}
.toggle-switch input { opacity: 0; width: 0; height: 0; }
.toggle-switch-slider {
  position: absolute;
  inset: 0;
  background: var(--border);
  border-radius: 9px;
  transition: background var(--transition);
}
.toggle-switch-slider::before {
  content: '';
  position: absolute;
  width: 14px; height: 14px;
  border-radius: 50%;
  background: white;
  top: 2px; left: 2px;
  transition: transform var(--transition-spring);
  box-shadow: 0 1px 2px rgba(0,0,0,0.15);
}
.toggle-switch input:checked + .toggle-switch-slider { background: var(--accent); }
.toggle-switch input:checked + .toggle-switch-slider::before { transform: translateX(14px); }

.color-input-row {
  display: flex;
  align-items: center;
  gap: 8px;
}
.color-input-row input[type="color"] {
  width: 28px; height: 28px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 2px;
  cursor: pointer;
  background: transparent;
}
.color-input-row input[type="color"]::-webkit-color-swatch-wrapper { padding: 0; }
.color-input-row input[type="color"]::-webkit-color-swatch { border: none; border-radius: calc(var(--radius) - 2px); }

input[type="checkbox"] {
  width: 15px; height: 15px;
  accent-color: var(--accent);
  cursor: pointer;
}

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   BUTTONS
   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 7px 16px;
  border: none;
  border-radius: var(--radius);
  background: var(--accent);
  color: white;
  font-size: var(--font-size-sm);
  font-weight: 550;
  font-family: var(--font);
  cursor: pointer;
  transition: all var(--transition);
}
.btn-primary:hover { background: var(--accent-hover); }
.btn-primary:active { transform: scale(0.97); }

.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 7px 16px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg-elevated);
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
  font-family: var(--font);
  cursor: pointer;
  transition: all var(--transition);
}
.btn-secondary:hover { border-color: var(--text-tertiary); color: var(--text); }

.btn-danger {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 16px;
  border: 1px solid transparent;
  border-radius: var(--radius);
  background: var(--danger-light);
  color: var(--danger);
  font-size: var(--font-size-sm);
  font-family: var(--font);
  cursor: pointer;
  transition: all var(--transition);
}
.btn-danger:hover { background: var(--danger); color: white; }

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   CONTEXT MENU
   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

.context-menu {
  min-width: 160px;
  padding: 4px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  animation: contextMenuIn 100ms ease-out;
}

@keyframes contextMenuIn {
  from { opacity: 0; transform: scale(0.96) translateY(-4px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}

.context-menu-item {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 7px 10px;
  border: none;
  border-radius: var(--radius);
  background: transparent;
  color: var(--text);
  font-size: var(--font-size-sm);
  font-family: var(--font);
  cursor: pointer;
  transition: all var(--transition);
  text-align: left;
}
.context-menu-item:hover { background: var(--bg-hover); }
.context-menu-item.danger { color: var(--danger); }
.context-menu-item.danger:hover { background: var(--danger-light); }

.context-menu-separator {
  height: 1px;
  background: var(--border-light);
  margin: 4px 6px;
}

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   CONDITIONALS BUILDER
   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

.conditionals-collapsed {
  padding: 8px 16px 12px;
  border-top: 1px solid var(--border-light);
}

.conditionals-toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  border: none;
  background: transparent;
  color: var(--text-tertiary);
  font-size: var(--font-size-sm);
  font-family: var(--font);
  cursor: pointer;
  padding: 4px 0;
  transition: color var(--transition);
}
.conditionals-toggle:hover { color: var(--accent); }

.conditionals-section {
  border-top: 1px solid var(--border-light);
  margin: 0 16px;
}

.conditionals-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 0;
  font-size: var(--font-size-sm);
  font-weight: 550;
  color: var(--text-secondary);
  cursor: pointer;
  user-select: none;
  border: none;
  background: transparent;
  font-family: var(--font);
  width: 100%;
  text-align: left;
  transition: color var(--transition);
}
.conditionals-header:hover { color: var(--text); }

.conditionals-title { flex: 1; }

.conditionals-count {
  font-size: var(--font-size-xxs);
  background: var(--accent-light);
  color: var(--accent);
  padding: 0 6px;
  border-radius: var(--radius-full);
  line-height: 16px;
  font-weight: 600;
}

.conditionals-body {
  padding: 0 0 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.conditionals-empty {
  text-align: center;
  padding: 12px;
  color: var(--text-tertiary);
  font-size: var(--font-size-sm);
}

/* Conditional rule card */
.cond-rule {
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 10px 12px;
  background: var(--bg-elevated);
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
  transition: border-color var(--transition), box-shadow var(--transition);
}
.cond-rule:hover {
  border-color: var(--accent-muted);
  box-shadow: var(--shadow-sm);
}

.cond-rule-when,
.cond-rule-show {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}

.cond-rule-arrow {
  display: flex;
  align-items: center;
  padding-left: 24px;
}

.cond-label {
  font-size: var(--font-size-xxs);
  font-weight: 700;
  letter-spacing: 0.05em;
  padding: 2px 6px;
  border-radius: var(--radius-xs);
  flex-shrink: 0;
}
.cond-label-when { background: var(--accent-light); color: var(--accent); }
.cond-label-show { background: var(--success-light); color: var(--success); }

.cond-equals-label {
  font-size: var(--font-size-sm);
  font-weight: 550;
  color: var(--text-tertiary);
  flex-shrink: 0;
}

.cond-field-dropdown,
.cond-value-input {
  padding: 4px 8px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg-secondary);
  color: var(--text);
  font-size: var(--font-size-sm);
  font-family: var(--font);
  outline: none;
  min-width: 80px;
  transition: border-color var(--transition);
}
.cond-field-dropdown:focus,
.cond-value-input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 2px var(--accent-light);
}

.cond-toggle-group {
  display: flex;
  gap: 1px;
  background: var(--border);
  border-radius: var(--radius);
  padding: 1px;
}

.cond-toggle-btn {
  padding: 3px 10px;
  border: none;
  border-radius: calc(var(--radius) - 1px);
  background: var(--bg-secondary);
  color: var(--text-tertiary);
  font-size: var(--font-size-sm);
  font-family: var(--font);
  cursor: pointer;
  transition: all var(--transition);
}
.cond-toggle-btn.active {
  background: var(--accent);
  color: white;
}

.cond-rule-delete {
  position: absolute;
  top: 6px; right: 6px;
  width: 20px; height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: var(--bg-tertiary);
  color: var(--text-tertiary);
  border-radius: 50%;
  cursor: pointer;
  opacity: 0;
  transition: all var(--transition);
}
.cond-rule-delete.visible { opacity: 1; }
.cond-rule-delete:hover { background: var(--danger-light); color: var(--danger); }

.cond-add-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px 10px;
  border: 1px dashed var(--border);
  border-radius: var(--radius);
  background: transparent;
  color: var(--text-tertiary);
  font-size: var(--font-size-sm);
  font-family: var(--font);
  cursor: pointer;
  transition: all var(--transition);
}
.cond-add-btn:hover { border-color: var(--accent); color: var(--accent); }

/* Multi-select field dropdown */
.cond-field-select { position: relative; }

.cond-field-select-trigger {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg-secondary);
  cursor: pointer;
  min-width: 120px;
  min-height: 28px;
  font-family: var(--font);
  font-size: var(--font-size-sm);
  transition: border-color var(--transition);
}
.cond-field-select-trigger:hover { border-color: var(--text-tertiary); }

.cond-field-select-placeholder { color: var(--text-tertiary); }

.cond-field-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
  flex: 1;
}

.cond-field-pill {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 1px 6px;
  background: var(--accent-light);
  color: var(--accent);
  border-radius: var(--radius-xs);
  font-size: var(--font-size-xs);
  font-weight: 500;
}

.cond-field-pill-remove {
  display: flex;
  align-items: center;
  border: none;
  background: none;
  color: inherit;
  cursor: pointer;
  padding: 0 1px;
  opacity: 0.6;
  transition: opacity var(--transition);
}
.cond-field-pill-remove:hover { opacity: 1; }

.cond-field-select-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 4px;
  min-width: 160px;
  max-height: 200px;
  overflow-y: auto;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  z-index: 40;
  padding: 4px;
}

.cond-field-select-option {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 8px;
  border-radius: var(--radius);
  font-size: var(--font-size-sm);
  cursor: pointer;
  transition: background var(--transition);
}
.cond-field-select-option:hover { background: var(--bg-hover); }

.cond-field-select-empty {
  padding: 8px;
  text-align: center;
  color: var(--text-tertiary);
  font-size: var(--font-size-sm);
}

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   TAG INPUT
   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

.tag-input-container {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 5px 8px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg-secondary);
  min-height: 32px;
  cursor: text;
  transition: border-color var(--transition), box-shadow var(--transition);
}
.tag-input-container:focus-within {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-light);
}

.tag-chip {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 1px 6px;
  background: var(--accent-light);
  color: var(--accent);
  border-radius: var(--radius-xs);
  font-size: var(--font-size-sm);
}
.tag-chip button {
  border: none; background: none; color: inherit;
  cursor: pointer; padding: 0 2px;
  opacity: 0.6;
}
.tag-chip button:hover { opacity: 1; }

.tag-input {
  border: none; background: transparent; color: var(--text);
  font-size: var(--font-size-sm); font-family: var(--font);
  outline: none; flex: 1; min-width: 60px;
}

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   FOOTER
   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

.studio-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 16px;
  height: var(--footer-h);
  border-top: 1px solid var(--border);
  background: var(--bg);
  flex-shrink: 0;
}

.footer-stats {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: var(--font-size-xs);
  color: var(--text-tertiary);
}

.footer-stat { white-space: nowrap; }

.footer-dot {
  width: 3px; height: 3px;
  border-radius: 50%;
  background: var(--text-tertiary);
  opacity: 0.4;
}

.footer-unsaved { color: var(--warning); font-weight: 550; }

.footer-shortcuts {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
}

.footer-shortcut {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: var(--font-size-xxs);
  color: var(--text-tertiary);
}

kbd {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1px 4px;
  min-width: 16px;
  height: 14px;
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 3px;
  font-size: 9px;
  font-family: var(--font);
  color: var(--text-secondary);
  line-height: 1;
}

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   MODAL
   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  animation: fadeIn 150ms ease;
  backdrop-filter: blur(4px);
}
[data-theme="dark"] .modal-overlay { background: rgba(0,0,0,0.6); }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

.modal {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  width: 380px;
  max-height: 80vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: modalIn 200ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
@keyframes modalIn {
  from { opacity: 0; transform: scale(0.95) translateY(8px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-bottom: 1px solid var(--border-light);
}
.modal-header h3 { font-size: var(--font-size-md); font-weight: 600; }

.modal-body { padding: 16px; overflow-y: auto; }

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   TYPE PICKER
   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

.type-picker {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  width: 420px;
  max-height: 480px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: modalIn 200ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

.type-picker-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid var(--border-light);
}
.type-picker-header h3 { font-size: var(--font-size-md); font-weight: 600; }

.type-picker-search {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-bottom: 1px solid var(--border-light);
  color: var(--text-tertiary);
}
.type-picker-search input {
  border: none; background: transparent; color: var(--text);
  font-size: var(--font-size-base); font-family: var(--font); outline: none; width: 100%;
}
.type-picker-search input::placeholder { color: var(--text-tertiary); }

.type-picker-body { overflow-y: auto; padding: 12px 16px; }

.type-picker-category { margin-bottom: 16px; }
.type-picker-category:last-child { margin-bottom: 0; }

.type-picker-category-label {
  font-size: var(--font-size-xs);
  font-weight: 650;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-tertiary);
  margin-bottom: 8px;
}

.type-picker-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
}

.type-picker-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 10px 8px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all var(--transition);
  font-family: var(--font);
}
.type-picker-item:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-light);
}
.type-picker-item:active { transform: scale(0.96); }

.type-picker-icon { display: flex; align-items: center; justify-content: center; }
.type-picker-label { font-size: var(--font-size-sm); font-weight: 500; }
.type-picker-empty { text-align: center; padding: 24px; color: var(--text-tertiary); }

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   TOAST
   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

.toast {
  position: fixed;
  bottom: 48px;
  left: 50%;
  transform: translateX(-50%) translateY(12px);
  padding: 8px 18px;
  border-radius: var(--radius);
  font-size: var(--font-size-sm);
  font-weight: 550;
  box-shadow: var(--shadow-lg);
  z-index: 200;
  opacity: 0;
  transition: all 200ms ease;
  pointer-events: none;
  white-space: nowrap;
}
.toast.visible { opacity: 1; transform: translateX(-50%) translateY(0); }
.toast.success { background: var(--success); color: white; }
.toast.error { background: var(--danger); color: white; }

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   QUIZ BUILDER
   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

/* Inline quiz preview in field cards */
.field-preview-quiz { display: flex; flex-direction: column; gap: 6px; }

.field-preview-quiz-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border: 1px solid var(--border-light);
  border-radius: var(--radius);
  background: var(--bg-secondary);
  font-size: var(--font-size-sm);
}

.field-preview-quiz-num {
  width: 18px; height: 18px;
  border-radius: 50%;
  background: var(--accent-light);
  color: var(--accent);
  font-size: var(--font-size-xxs);
  font-weight: 650;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.field-preview-quiz-text {
  flex: 1;
  color: var(--text-secondary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.field-preview-quiz-opts {
  font-size: var(--font-size-xxs);
  color: var(--text-tertiary);
  flex-shrink: 0;
}

.field-preview-quiz-add {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 6px 10px;
  border: 1.5px dashed var(--border);
  border-radius: var(--radius);
  background: transparent;
  color: var(--text-tertiary);
  font-size: var(--font-size-sm);
  font-family: var(--font);
  cursor: pointer;
  transition: all var(--transition);
}
.field-preview-quiz-add:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-light); }

.quiz-builder-section { padding: 0; }

.quiz-builder-toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  padding: 8px 0;
  border: none;
  background: transparent;
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
  font-weight: 550;
  font-family: var(--font);
  cursor: pointer;
  transition: color var(--transition);
  text-align: left;
}
.quiz-builder-toggle:hover { color: var(--text); }

.quiz-builder-add {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  padding: 8px;
  border: 1.5px dashed var(--border);
  border-radius: var(--radius);
  background: transparent;
  color: var(--text-tertiary);
  font-size: var(--font-size-sm);
  font-family: var(--font);
  cursor: pointer;
  transition: all var(--transition);
}
.quiz-builder-add:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-light); }

.icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px; height: 28px;
  border: none;
  background: transparent;
  color: var(--text-secondary);
  border-radius: var(--radius);
  cursor: pointer;
  transition: all var(--transition);
  flex-shrink: 0;
}
.icon-btn:hover { background: var(--bg-hover); color: var(--text); }

.quiz-builder-body {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.quiz-card {
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 14px;
  background: var(--bg-secondary);
  transition: border-color var(--transition);
}
.quiz-card:hover { border-color: var(--text-tertiary); }

.quiz-card-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.quiz-card-num {
  width: 20px; height: 20px;
  border-radius: 50%;
  background: var(--accent);
  color: white;
  font-size: var(--font-size-xs);
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.quiz-question-input { flex: 1; }
.quiz-options { display: flex; flex-direction: column; gap: 4px; margin-bottom: 6px; }
.quiz-option-row { display: flex; align-items: center; gap: 6px; }

.quiz-correct-btn {
  width: 20px; height: 20px;
  border-radius: 50%;
  border: 2px solid var(--border);
  background: transparent;
  color: var(--text-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: all var(--transition);
}
.quiz-correct-btn:hover { border-color: var(--success); }
.quiz-correct-btn.active { border-color: var(--success); background: var(--success); color: white; }

.quiz-add-option {
  display: flex; align-items: center; gap: 4px;
  border: none; background: transparent;
  color: var(--text-tertiary);
  font-size: var(--font-size-sm); font-family: var(--font);
  cursor: pointer; padding: 4px 0;
}
.quiz-add-option:hover { color: var(--accent); }

.quiz-extras {
  display: flex; flex-direction: column; gap: 6px;
  padding-top: 8px; margin-top: 4px;
  border-top: 1px solid var(--border);
}

.quiz-extra-row {
  display: flex; align-items: center; gap: 8px;
}

.quiz-config-grid {
  display: flex; flex-wrap: wrap; gap: 8px 16px;
  padding: 4px 0;
}

.quiz-config-toggle {
  display: flex; align-items: center; gap: 6px;
  font-size: var(--font-size-sm); color: var(--text-secondary);
  cursor: pointer;
}
.quiz-config-toggle input[type="checkbox"] {
  accent-color: var(--accent);
}

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   DEMO TAB
   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

.demo-tab {
  flex: 1;
  overflow-y: auto;
  padding: 32px;
  max-width: 720px;
  margin: 0 auto;
  width: 100%;
}

.demo-tab-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: var(--text-tertiary);
}

.demo-tab-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
}
.demo-tab-header h2 { font-size: var(--font-size-lg); font-weight: 600; }

.demo-tab-desc {
  font-size: var(--font-size-sm);
  color: var(--text-tertiary);
  margin-bottom: 20px;
}

.demo-fields { display: flex; flex-direction: column; gap: 14px; }

.demo-field {
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: 14px;
  background: var(--bg-elevated);
  box-shadow: var(--shadow-sm);
}
.demo-field:hover { border-color: var(--border); }

.demo-field-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 8px;
}

.demo-field-label { font-size: var(--font-size-base); font-weight: 500; }
.demo-field-meta { font-size: var(--font-size-sm); color: var(--text-tertiary); }
.demo-field-input { width: 100%; }
.demo-field-input .form-input { width: 100%; }
.demo-field-input select { width: 100%; }

.demo-toggle-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: var(--font-size-sm);
  cursor: pointer;
}

/* \u2500\u2500 Audio editor \u2500\u2500 */
.demo-audio-editor { display: flex; flex-direction: column; gap: 8px; }
.demo-audio-row { display: flex; align-items: center; gap: 8px; }
.demo-audio-trim { display: flex; gap: 12px; flex-wrap: wrap; }
.demo-audio-trim-field {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: var(--font-size-sm);
}
.demo-audio-trim-label { color: var(--text-secondary); font-size: var(--font-size-xs); font-weight: 500; }
.demo-audio-trim-unit { color: var(--text-tertiary); font-size: var(--font-size-xs); }

/* \u2500\u2500 Date editor \u2500\u2500 */
.demo-date-editor { display: flex; align-items: center; gap: 8px; }
.demo-date-editor .form-input { flex: 1; }

/* \u2500\u2500 Image array \u2500\u2500 */
.demo-image-array { display: flex; flex-direction: column; gap: 8px; }
.demo-image-array-item { display: flex; align-items: center; gap: 8px; }
.demo-image-array-thumb {
  width: 36px; height: 36px;
  border-radius: var(--radius);
  border: 1px solid var(--border-light);
  background: var(--bg-hover);
  overflow: hidden;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.demo-image-array-thumb img { width: 100%; height: 100%; object-fit: cover; }
.demo-image-array-add {
  display: flex; align-items: center; justify-content: center; gap: 6px;
  padding: 7px;
  border: 1.5px dashed var(--border);
  border-radius: var(--radius);
  background: transparent;
  color: var(--text-tertiary);
  font-size: var(--font-size-sm);
  font-family: var(--font);
  cursor: pointer;
  transition: all var(--transition);
}
.demo-image-array-add:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-light); }

/* \u2500\u2500 Group editor \u2500\u2500 */
.demo-group-editor {
  display: flex; flex-direction: column; gap: 10px;
  padding: 10px;
  border: 1px solid var(--border-light);
  border-radius: var(--radius);
  background: var(--bg);
}
.demo-group-field { display: flex; flex-direction: column; gap: 4px; }
.demo-group-field-label {
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--text-secondary);
}
.demo-group-field-key {
  font-size: var(--font-size-xs);
  color: var(--text-tertiary);
  font-family: var(--font-mono);
}
.demo-group-empty {
  font-size: var(--font-size-sm);
  color: var(--text-tertiary);
  text-align: center;
  padding: 12px;
}

/* \u2500\u2500 Group array \u2500\u2500 */
.demo-group-array { display: flex; flex-direction: column; gap: 10px; }
.demo-group-array-item {
  border: 1px solid var(--border-light);
  border-radius: var(--radius);
  overflow: hidden;
}
.demo-group-array-item-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 6px 10px;
  background: var(--bg-hover);
  border-bottom: 1px solid var(--border-light);
}
.demo-group-array-item-num {
  font-size: var(--font-size-xs);
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.demo-group-array-item .demo-group-editor {
  border: none;
  border-radius: 0;
}
.demo-group-array-add {
  display: flex; align-items: center; justify-content: center; gap: 6px;
  padding: 7px;
  border: 1.5px dashed var(--border);
  border-radius: var(--radius);
  background: transparent;
  color: var(--text-tertiary);
  font-size: var(--font-size-sm);
  font-family: var(--font);
  cursor: pointer;
  transition: all var(--transition);
}
.demo-group-array-add:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-light); }

/* \u2500\u2500 Sub-fields editor (in field modal) \u2500\u2500 */
.subfields-editor { display: flex; flex-direction: column; gap: 8px; }
.subfield-row {
  padding: 8px;
  border: 1px solid var(--border-light);
  border-radius: var(--radius);
  background: var(--bg);
}
.subfield-row-inputs {
  display: flex;
  align-items: center;
  gap: 6px;
}
.subfield-row-inputs .form-input { font-size: var(--font-size-sm); padding: 5px 8px; }
.subfield-row-inputs select.form-input { padding: 5px 4px; }
.subfield-add {
  display: flex; align-items: center; justify-content: center; gap: 6px;
  padding: 7px;
  border: 1.5px dashed var(--border);
  border-radius: var(--radius);
  background: transparent;
  color: var(--text-tertiary);
  font-size: var(--font-size-sm);
  font-family: var(--font);
  cursor: pointer;
  transition: all var(--transition);
}
.subfield-add:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-light); }

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   MANIFEST TAB
   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

.manifest-tab {
  flex: 1;
  overflow-y: auto;
  padding: 32px;
  max-width: 720px;
  margin: 0 auto;
  width: 100%;
}

.manifest-tab-header { margin-bottom: 6px; }
.manifest-tab-header h2 { font-size: 20px; font-weight: 650; }
.manifest-tab-desc { font-size: var(--font-size-base); color: var(--text-tertiary); margin-bottom: 28px; line-height: 1.5; }

.manifest-sections { display: flex; flex-direction: column; gap: 28px; }

.manifest-section {
  background: var(--bg-elevated);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: 20px;
  box-shadow: var(--shadow-sm);
}
.manifest-section h3 { font-size: var(--font-size-md); font-weight: 600; margin-bottom: 4px; }
.manifest-section-desc { font-size: var(--font-size-sm); color: var(--text-tertiary); margin-bottom: 14px; line-height: 1.5; }

.dep-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }

.dep-card {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px 14px;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: all var(--transition);
  font-size: var(--font-size-sm);
  background: var(--bg-secondary);
}
.dep-card:hover { border-color: var(--accent); background: var(--accent-light); }
.dep-card.active { border-color: var(--accent); background: var(--accent-light); }
.dep-card input[type="checkbox"] { margin-top: 2px; flex-shrink: 0; }
.dep-name { font-weight: 550; font-family: var(--font-mono); font-size: var(--font-size-sm); margin-bottom: 2px; }
.dep-desc { color: var(--text-tertiary); font-size: var(--font-size-sm); line-height: 1.4; }

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   PREVIEW PANE
   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

.preview-pane {
  width: 320px; min-width: 320px;
  border-left: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  background: var(--bg-tertiary);
  flex-shrink: 0;
}

.preview-pane-header {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 10px;
  border-bottom: 1px solid var(--border);
  background: var(--bg-secondary);
  flex-shrink: 0;
}

.preview-pane-label {
  font-size: var(--font-size-xs);
  font-weight: 650;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-tertiary);
  flex: 1;
}

.preview-pane-frame {
  flex: 1;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
}

.preview-frame {
  width: 100%; height: 100%;
  border: none;
  border-radius: var(--radius);
  background: white;
}

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   ANIMATIONS & UTILITIES
   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   FIELD EDIT MODAL
   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

.field-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  animation: fadeIn 120ms ease;
  backdrop-filter: blur(4px);
}
[data-theme="dark"] .field-modal-overlay { background: rgba(0,0,0,0.6); }

.field-modal {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  width: 520px;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  animation: modalIn 180ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

.field-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid var(--border-light);
  flex-shrink: 0;
}

.field-modal-header-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.field-modal-type-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px; height: 32px;
  border-radius: var(--radius-lg);
  background: var(--accent-light);
  color: var(--accent);
}

.field-modal-field-name {
  font-size: var(--font-size-md);
  font-weight: 600;
  color: var(--text);
}

.field-modal-field-type {
  font-size: var(--font-size-sm);
  color: var(--text-tertiary);
}

.field-modal-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px; height: 30px;
  border: none;
  background: var(--bg-tertiary);
  color: var(--text-secondary);
  border-radius: var(--radius);
  cursor: pointer;
  transition: all var(--transition);
}
.field-modal-close:hover { background: var(--bg-active); color: var(--text); }

.field-modal-body {
  flex: 1;
  overflow-y: auto;
  padding: 4px 0;
}

.field-modal-section {
  border-bottom: 1px solid var(--border-light);
}

.field-modal-section-header {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 12px 20px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: var(--font-size-base);
  font-weight: 550;
  color: var(--text-secondary);
  font-family: var(--font);
  text-align: left;
  transition: all var(--transition);
}
.field-modal-section-header:hover { background: var(--bg-hover); color: var(--text); }

.field-modal-section-icon {
  display: flex;
  align-items: center;
  color: var(--text-tertiary);
}

.field-modal-section-title { flex: 1; }

.field-modal-section-body {
  padding: 4px 20px 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  animation: slideInUp 120ms ease;
}

.field-modal-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  padding: 14px 20px;
  border-top: 1px solid var(--border-light);
  flex-shrink: 0;
}

@keyframes slideInUp {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
`;
  document.head.appendChild(s);
})();

// scripts/studio/state.ts
import { createContext, useContext } from "react";

// scripts/studio/utils.ts
function deepClone(obj) {
  return obj == null ? obj : JSON.parse(JSON.stringify(obj));
}
function deepEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}
function toCamelCase(str) {
  return str
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .replace(/\s+(.)/g, (_, c) => c.toUpperCase())
    .replace(/^(.)/, (_, c) => c.toLowerCase());
}
function ensureUniqueKey(key, sections) {
  const allKeys = /* @__PURE__ */ new Set();
  for (const s of sections) {
    for (const f of s.fields) {
      if (f.key) allKeys.add(f.key);
    }
  }
  if (!allKeys.has(key)) return key;
  let i = 2;
  while (allKeys.has(key + i)) i++;
  return key + i;
}

// scripts/studio/state.ts
var DEFAULT_SCHEMA = {
  sections: [{ key: "basics", label: "The Basics", fields: [] }],
};
var DEFAULT_MANIFEST = {
  entry: "index.tsx",
  screens: [],
  dependencies: {},
  fonts: [],
};
function studioReducer(state, action) {
  switch (action.type) {
    case "LOADED": {
      const schema = action.data.schema ?? DEFAULT_SCHEMA;
      const demo = action.data.demo ?? {};
      const raw = action.data.manifest;
      const manifest = {
        entry: raw?.entry ?? DEFAULT_MANIFEST.entry,
        screens: raw?.screens ?? DEFAULT_MANIFEST.screens,
        dependencies: raw?.dependencies ?? DEFAULT_MANIFEST.dependencies,
        fonts: raw?.fonts ?? DEFAULT_MANIFEST.fonts,
      };
      const config2 = { schema, demo, manifest };
      return {
        ...state,
        loaded: deepClone(config2),
        working: deepClone(config2),
      };
    }
    case "SAVED":
      return { ...state, loaded: deepClone(state.working) };
    case "SET_SCHEMA":
      return { ...state, working: { ...state.working, schema: action.schema } };
    case "ADD_SECTION": {
      const sections = [...state.working.schema.sections, action.section];
      return {
        ...state,
        working: {
          ...state.working,
          schema: { ...state.working.schema, sections },
        },
        ui: {
          ...state.ui,
          selectedSection: sections.length - 1,
          selectedField: -1,
        },
      };
    }
    case "UPDATE_SECTION": {
      const sections = state.working.schema.sections.map((s, i) =>
        i === action.idx ? action.section : s,
      );
      return {
        ...state,
        working: {
          ...state.working,
          schema: { ...state.working.schema, sections },
        },
      };
    }
    case "DELETE_SECTION": {
      const sections = state.working.schema.sections.filter(
        (_, i) => i !== action.idx,
      );
      const sel = Math.min(
        state.ui.selectedSection,
        Math.max(0, sections.length - 1),
      );
      return {
        ...state,
        working: {
          ...state.working,
          schema: { ...state.working.schema, sections },
        },
        ui: { ...state.ui, selectedSection: sel, selectedField: -1 },
      };
    }
    case "MOVE_SECTION": {
      const sections = [...state.working.schema.sections];
      const [moved] = sections.splice(action.from, 1);
      sections.splice(action.to, 0, moved);
      return {
        ...state,
        working: {
          ...state.working,
          schema: { ...state.working.schema, sections },
        },
        ui: { ...state.ui, selectedSection: action.to },
      };
    }
    case "ADD_FIELD": {
      const sections = state.working.schema.sections.map((s, i) => {
        if (i !== action.sectionIdx) return s;
        return { ...s, fields: [...s.fields, action.field] };
      });
      const newFieldIdx = sections[action.sectionIdx].fields.length - 1;
      return {
        ...state,
        working: {
          ...state.working,
          schema: { ...state.working.schema, sections },
        },
        ui: { ...state.ui, selectedField: newFieldIdx },
      };
    }
    case "UPDATE_FIELD": {
      const sections = state.working.schema.sections.map((s, si) => {
        if (si !== action.sectionIdx) return s;
        return {
          ...s,
          fields: s.fields.map((f, fi) =>
            fi === action.fieldIdx ? action.field : f,
          ),
        };
      });
      return {
        ...state,
        working: {
          ...state.working,
          schema: { ...state.working.schema, sections },
        },
      };
    }
    case "DELETE_FIELD": {
      const deletedKey =
        state.working.schema.sections[action.sectionIdx]?.fields[
          action.fieldIdx
        ]?.key;
      const sections = state.working.schema.sections.map((s, si) => {
        if (si !== action.sectionIdx) return s;
        return {
          ...s,
          fields: s.fields.filter((_, fi) => fi !== action.fieldIdx),
        };
      });
      const demo = { ...state.working.demo };
      if (deletedKey) delete demo[deletedKey];
      const newSel = Math.min(
        state.ui.selectedField,
        Math.max(-1, sections[action.sectionIdx].fields.length - 1),
      );
      return {
        ...state,
        working: {
          ...state.working,
          schema: { ...state.working.schema, sections },
          demo,
        },
        ui: { ...state.ui, selectedField: newSel },
      };
    }
    case "DUPLICATE_FIELD": {
      const sections = state.working.schema.sections.map((s, si) => {
        if (si !== action.sectionIdx) return s;
        const original = s.fields[action.fieldIdx];
        if (!original) return s;
        const copy = deepClone(original);
        copy.key = copy.key + "Copy";
        const fields = [...s.fields];
        fields.splice(action.fieldIdx + 1, 0, copy);
        return { ...s, fields };
      });
      return {
        ...state,
        working: {
          ...state.working,
          schema: { ...state.working.schema, sections },
        },
        ui: { ...state.ui, selectedField: action.fieldIdx + 1 },
      };
    }
    case "MOVE_FIELD": {
      const section = state.working.schema.sections[state.ui.selectedSection];
      if (!section) return state;
      const fields = [...section.fields];
      const [moved] = fields.splice(action.from, 1);
      const insertAt = action.to > action.from ? action.to - 1 : action.to;
      fields.splice(insertAt, 0, moved);
      const sections = state.working.schema.sections.map((s, i) =>
        i === state.ui.selectedSection ? { ...s, fields } : s,
      );
      return {
        ...state,
        working: {
          ...state.working,
          schema: { ...state.working.schema, sections },
        },
        ui: { ...state.ui, selectedField: insertAt },
      };
    }
    case "SET_DEMO":
      return {
        ...state,
        working: {
          ...state.working,
          demo: { ...state.working.demo, [action.key]: action.value },
        },
      };
    case "SET_DEMO_ALL":
      return { ...state, working: { ...state.working, demo: action.demo } };
    case "SET_MANIFEST":
      return {
        ...state,
        working: { ...state.working, manifest: action.manifest },
      };
    case "SELECT_SECTION":
      return {
        ...state,
        ui: { ...state.ui, selectedSection: action.idx, selectedField: -1 },
      };
    case "SELECT_FIELD":
      return { ...state, ui: { ...state.ui, selectedField: action.idx } };
    case "SET_TAB":
      return { ...state, ui: { ...state.ui, activeTab: action.tab } };
    case "SET_THEME":
      return { ...state, ui: { ...state.ui, theme: action.theme } };
    case "SHOW_TOAST":
      return {
        ...state,
        toast: { message: action.message, type: action.toastType },
      };
    case "HIDE_TOAST":
      return { ...state, toast: null };
    case "IMPORT_CONFIG": {
      const working = { ...state.working };
      if (action.data.schema) working.schema = action.data.schema;
      if (action.data.demo) working.demo = action.data.demo;
      if (action.data.manifest) working.manifest = action.data.manifest;
      return { ...state, working };
    }
    case "SET_SEARCH":
      return { ...state, ui: { ...state.ui, searchQuery: action.query } };
    case "TOGGLE_PREVIEW":
      return {
        ...state,
        ui: { ...state.ui, showPreview: !state.ui.showPreview },
      };
    case "ADD_CONDITIONAL": {
      const conditionals = [
        ...(state.working.schema.conditionals || []),
        action.conditional,
      ];
      return {
        ...state,
        working: {
          ...state.working,
          schema: { ...state.working.schema, conditionals },
        },
      };
    }
    case "UPDATE_CONDITIONAL": {
      const conditionals = (state.working.schema.conditionals || []).map(
        (c, i) => (i === action.idx ? action.conditional : c),
      );
      return {
        ...state,
        working: {
          ...state.working,
          schema: { ...state.working.schema, conditionals },
        },
      };
    }
    case "DELETE_CONDITIONAL": {
      const conditionals = (state.working.schema.conditionals || []).filter(
        (_, i) => i !== action.idx,
      );
      return {
        ...state,
        working: {
          ...state.working,
          schema: {
            ...state.working.schema,
            conditionals: conditionals.length ? conditionals : void 0,
          },
        },
      };
    }
    default:
      return state;
  }
}
var StudioContext = createContext(null);
function useStudio() {
  return useContext(StudioContext);
}

// scripts/studio/api.ts
async function loadConfig() {
  const resp = await fetch("/studio/api/load");
  return resp.json();
}
async function saveConfig(payload) {
  const resp = await fetch("/studio/api/save", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });
  return resp.json();
}

// scripts/studio/components/Header.tsx
import { useState, useRef, useEffect, useCallback } from "react";
import {
  Search,
  X,
  Moon,
  Sun,
  Download,
  Upload,
  Save,
  Hexagon,
} from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
function Header({ config: config2 }) {
  const { state, dispatch } = useStudio();
  const isDark = state.ui.theme === "dark";
  const [saving, setSaving] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef(null);
  const fileInputRef = useRef(null);
  const hasUnsaved = !deepEqual(state.loaded, state.working);
  const tabs = ["schema", "demo", "manifest"];
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchRef.current?.focus(), 60);
    }
  }, [searchOpen]);
  useEffect(() => {
    if (!searchOpen) return;
    const handler = (e) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        dispatch({ type: "SET_SEARCH", query: "" });
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [searchOpen, dispatch]);
  const toggleTheme = () => {
    const next = isDark ? "light" : "dark";
    dispatch({ type: "SET_THEME", theme: next });
    if (next === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    localStorage.setItem("studio-theme", next);
  };
  const handleSave = useCallback(async () => {
    setSaving(true);
    try {
      const result = await saveConfig({
        schema: state.working.schema,
        demo: state.working.demo,
        manifest: state.working.manifest,
      });
      if (result.ok) {
        dispatch({ type: "SAVED" });
        dispatch({
          type: "SHOW_TOAST",
          message: `Saved ${(result.written ?? []).join(", ")}`,
          toastType: "success",
        });
      } else {
        dispatch({
          type: "SHOW_TOAST",
          message: (result.errors ?? ["Save failed"]).join(", "),
          toastType: "error",
        });
      }
    } catch (e) {
      dispatch({
        type: "SHOW_TOAST",
        message: `Save failed: ${e}`,
        toastType: "error",
      });
    }
    setSaving(false);
  }, [state.working, dispatch]);
  const handleExport = () => {
    const data = {
      schema: state.working.schema,
      demo: state.working.demo,
      manifest: state.working.manifest,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${config2.slug || "template"}-config.json`;
    a.click();
    URL.revokeObjectURL(url);
    dispatch({
      type: "SHOW_TOAST",
      message: "Config exported",
      toastType: "success",
    });
  };
  const handleImport = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target?.result);
        dispatch({ type: "IMPORT_CONFIG", data });
        dispatch({
          type: "SHOW_TOAST",
          message: "Config imported",
          toastType: "success",
        });
      } catch {
        dispatch({
          type: "SHOW_TOAST",
          message: "Invalid JSON file",
          toastType: "error",
        });
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  };
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "s") {
        e.preventDefault();
        handleSave();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "f") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [handleSave]);
  return /* @__PURE__ */ jsxs("header", {
    className: "studio-header",
    children: [
      /* @__PURE__ */ jsxs("div", {
        className: "header-brand",
        children: [
          /* @__PURE__ */ jsx(Hexagon, {
            size: 18,
            strokeWidth: 2.5,
            style: { color: "var(--accent)" },
          }),
          /* @__PURE__ */ jsx("span", {
            className: "header-title",
            children: "Studio",
          }),
          /* @__PURE__ */ jsx("span", {
            className: "header-slug",
            children: config2.slug,
          }),
        ],
      }),
      /* @__PURE__ */ jsx("div", {
        className: "header-tabs",
        children: tabs.map((tab) =>
          /* @__PURE__ */ jsx(
            "button",
            {
              className: `header-tab-pill${state.ui.activeTab === tab ? " active" : ""}`,
              onClick: () => dispatch({ type: "SET_TAB", tab }),
              children: tab.charAt(0).toUpperCase() + tab.slice(1),
            },
            tab,
          ),
        ),
      }),
      /* @__PURE__ */ jsxs("div", {
        className: "header-actions",
        children: [
          searchOpen
            ? /* @__PURE__ */ jsxs("div", {
                className: "header-search-expanded",
                children: [
                  /* @__PURE__ */ jsx(Search, {
                    size: 13,
                    style: { color: "var(--text-tertiary)", flexShrink: 0 },
                  }),
                  /* @__PURE__ */ jsx("input", {
                    ref: searchRef,
                    type: "text",
                    placeholder: "Search fields...",
                    value: state.ui.searchQuery,
                    onChange: (e) =>
                      dispatch({ type: "SET_SEARCH", query: e.target.value }),
                  }),
                  /* @__PURE__ */ jsx("button", {
                    className: "header-search-close",
                    onClick: () => {
                      setSearchOpen(false);
                      dispatch({ type: "SET_SEARCH", query: "" });
                    },
                    children: /* @__PURE__ */ jsx(X, { size: 12 }),
                  }),
                ],
              })
            : /* @__PURE__ */ jsx("button", {
                className: "header-icon-btn",
                onClick: () => setSearchOpen(true),
                title: "Search fields (Cmd+F)",
                children: /* @__PURE__ */ jsx(Search, { size: 15 }),
              }),
          /* @__PURE__ */ jsx("div", { className: "header-separator" }),
          /* @__PURE__ */ jsx("button", {
            className: "header-icon-btn",
            onClick: toggleTheme,
            title: "Toggle theme",
            children: isDark
              ? /* @__PURE__ */ jsx(Sun, { size: 15 })
              : /* @__PURE__ */ jsx(Moon, { size: 15 }),
          }),
          /* @__PURE__ */ jsx("div", { className: "header-separator" }),
          /* @__PURE__ */ jsx("button", {
            className: "header-icon-btn",
            onClick: () => fileInputRef.current?.click(),
            title: "Import config",
            children: /* @__PURE__ */ jsx(Upload, { size: 15 }),
          }),
          /* @__PURE__ */ jsx("button", {
            className: "header-icon-btn",
            onClick: handleExport,
            title: "Export config",
            children: /* @__PURE__ */ jsx(Download, { size: 15 }),
          }),
          /* @__PURE__ */ jsx("div", { className: "header-separator" }),
          /* @__PURE__ */ jsxs("button", {
            className: `header-save-btn${hasUnsaved ? " unsaved" : ""}`,
            onClick: handleSave,
            disabled: saving,
            children: [
              hasUnsaved &&
                /* @__PURE__ */ jsx("span", { className: "header-save-dot" }),
              /* @__PURE__ */ jsx(Save, { size: 14 }),
              /* @__PURE__ */ jsx("span", {
                children: saving ? "Saving..." : "Save",
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ jsx("input", {
        ref: fileInputRef,
        type: "file",
        accept: ".json",
        style: { display: "none" },
        onChange: handleImport,
      }),
    ],
  });
}

// scripts/studio/components/Footer.tsx
import { Fragment, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function Footer() {
  const { state } = useStudio();
  const hasUnsaved = !deepEqual(state.loaded, state.working);
  const sectionCount = state.working.schema.sections.length;
  const fieldCount = state.working.schema.sections.reduce(
    (sum, s) => sum + s.fields.length,
    0,
  );
  const conditionalCount = state.working.schema.conditionals?.length || 0;
  return /* @__PURE__ */ jsxs2("footer", {
    className: "studio-footer",
    children: [
      /* @__PURE__ */ jsxs2("div", {
        className: "footer-stats",
        children: [
          /* @__PURE__ */ jsxs2("span", {
            className: "footer-stat",
            children: [sectionCount, " section", sectionCount !== 1 ? "s" : ""],
          }),
          /* @__PURE__ */ jsx2("span", { className: "footer-dot" }),
          /* @__PURE__ */ jsxs2("span", {
            className: "footer-stat",
            children: [fieldCount, " field", fieldCount !== 1 ? "s" : ""],
          }),
          conditionalCount > 0 &&
            /* @__PURE__ */ jsxs2(Fragment, {
              children: [
                /* @__PURE__ */ jsx2("span", { className: "footer-dot" }),
                /* @__PURE__ */ jsxs2("span", {
                  className: "footer-stat",
                  children: [
                    conditionalCount,
                    " rule",
                    conditionalCount !== 1 ? "s" : "",
                  ],
                }),
              ],
            }),
          hasUnsaved &&
            /* @__PURE__ */ jsxs2(Fragment, {
              children: [
                /* @__PURE__ */ jsx2("span", { className: "footer-dot" }),
                /* @__PURE__ */ jsx2("span", {
                  className: "footer-unsaved",
                  children: "Unsaved",
                }),
              ],
            }),
        ],
      }),
      /* @__PURE__ */ jsxs2("div", {
        className: "footer-shortcuts",
        children: [
          /* @__PURE__ */ jsxs2("span", {
            className: "footer-shortcut",
            children: [
              /* @__PURE__ */ jsx2("kbd", { children: "\u2318S" }),
              " Save",
            ],
          }),
          /* @__PURE__ */ jsxs2("span", {
            className: "footer-shortcut",
            children: [
              /* @__PURE__ */ jsx2("kbd", { children: "\u2318B" }),
              " Sidebar",
            ],
          }),
          /* @__PURE__ */ jsxs2("span", {
            className: "footer-shortcut",
            children: [
              /* @__PURE__ */ jsx2("kbd", { children: "Del" }),
              " Delete",
            ],
          }),
        ],
      }),
    ],
  });
}

// scripts/studio/components/SectionList.tsx
import {
  useState as useState2,
  useCallback as useCallback2,
  useRef as useRef3,
  useEffect as useEffect3,
} from "react";
import {
  GripVertical,
  Plus,
  MoreHorizontal,
  Pencil,
  Copy,
  Trash2,
} from "lucide-react";

// scripts/studio/components/common/Modal.tsx
import { useEffect as useEffect2, useRef as useRef2 } from "react";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
function Modal({ open, onClose, title, children, width = 360 }) {
  const overlayRef = useRef2(null);
  useEffect2(() => {
    if (!open) return;
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);
  if (!open) return null;
  return /* @__PURE__ */ jsx3("div", {
    ref: overlayRef,
    className: "modal-overlay open",
    onClick: (e) => {
      if (e.target === overlayRef.current) onClose();
    },
    children: /* @__PURE__ */ jsxs3("div", {
      className: "modal",
      style: { width },
      children: [
        /* @__PURE__ */ jsx3("div", {
          className: "modal-header",
          children: /* @__PURE__ */ jsx3("h3", { children: title }),
        }),
        children,
      ],
    }),
  });
}

// scripts/studio/components/SectionList.tsx
import {
  Fragment as Fragment2,
  jsx as jsx4,
  jsxs as jsxs4,
} from "react/jsx-runtime";
function SectionList() {
  const { state, dispatch } = useStudio();
  const sections = state.working.schema.sections;
  const selected = state.ui.selectedSection;
  const [modalOpen, setModalOpen] = useState2(false);
  const [label, setLabel] = useState2("");
  const [key, setKey] = useState2("");
  const [contextMenu, setContextMenu] = useState2(null);
  const [renamingIdx, setRenamingIdx] = useState2(null);
  const [renameValue, setRenameValue] = useState2("");
  const renameRef = useRef3(null);
  const contextMenuRef = useRef3(null);
  const [dragIdx, setDragIdx] = useState2(null);
  const [dropTarget, setDropTarget] = useState2(null);
  const [hoveredIdx, setHoveredIdx] = useState2(null);
  const openAddModal = () => {
    setLabel("");
    setKey("");
    setModalOpen(true);
  };
  const handleSave = () => {
    const trimmedLabel = label.trim();
    if (!trimmedLabel) return;
    const sectionKey = key.trim() || toCamelCase(trimmedLabel);
    dispatch({
      type: "ADD_SECTION",
      section: { key: sectionKey, label: trimmedLabel, fields: [] },
    });
    setModalOpen(false);
  };
  const handleDuplicate = (idx) => {
    const original = sections[idx];
    if (!original) return;
    const copy = deepClone(original);
    copy.key = copy.key + "Copy";
    copy.label = copy.label + " (copy)";
    dispatch({ type: "ADD_SECTION", section: copy });
    setContextMenu(null);
  };
  const handleDelete = (idx) => {
    dispatch({ type: "DELETE_SECTION", idx });
    setContextMenu(null);
  };
  const handleRenameStart = (idx) => {
    setRenamingIdx(idx);
    setRenameValue(sections[idx].label);
    setContextMenu(null);
    setTimeout(() => renameRef.current?.focus(), 50);
  };
  const handleRenameCommit = () => {
    if (renamingIdx === null) return;
    const trimmed = renameValue.trim();
    if (trimmed && trimmed !== sections[renamingIdx].label) {
      dispatch({
        type: "UPDATE_SECTION",
        idx: renamingIdx,
        section: { ...sections[renamingIdx], label: trimmed },
      });
    }
    setRenamingIdx(null);
  };
  useEffect3(() => {
    if (!contextMenu) return;
    const handler = (e) => {
      if (
        contextMenuRef.current &&
        !contextMenuRef.current.contains(e.target)
      ) {
        setContextMenu(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [contextMenu]);
  const onDragStart = useCallback2((idx) => {
    setDragIdx(idx);
  }, []);
  const onDragEnd = useCallback2(() => {
    setDragIdx(null);
    setDropTarget(null);
  }, []);
  const onDragOver = useCallback2((e, idx) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    setDropTarget(idx);
  }, []);
  const onDrop = useCallback2(
    (e, toIdx) => {
      e.preventDefault();
      if (dragIdx !== null && dragIdx !== toIdx) {
        dispatch({ type: "MOVE_SECTION", from: dragIdx, to: toIdx });
      }
      setDragIdx(null);
      setDropTarget(null);
    },
    [dragIdx, dispatch],
  );
  return /* @__PURE__ */ jsxs4(Fragment2, {
    children: [
      /* @__PURE__ */ jsx4("div", {
        className: "panel-sections-header",
        children: /* @__PURE__ */ jsx4("span", {
          className: "panel-sections-title",
          children: "Sections",
        }),
      }),
      /* @__PURE__ */ jsx4("div", {
        className: "section-list-scroll",
        children: sections.map((s, i) =>
          /* @__PURE__ */ jsxs4(
            "div",
            {
              className: `section-item${i === selected ? " active" : ""}`,
              onClick: () => dispatch({ type: "SELECT_SECTION", idx: i }),
              onMouseEnter: () => setHoveredIdx(i),
              onMouseLeave: () => setHoveredIdx(null),
              draggable: true,
              onDragStart: () => onDragStart(i),
              onDragEnd,
              onDragOver: (e) => onDragOver(e, i),
              onDrop: (e) => onDrop(e, i),
              style: {
                opacity: dragIdx === i ? 0.4 : 1,
                borderTopColor:
                  dropTarget === i && dragIdx !== i ? "var(--accent)" : void 0,
              },
              children: [
                /* @__PURE__ */ jsx4("span", {
                  className: `drag-handle${hoveredIdx === i ? " visible" : ""}`,
                  children: /* @__PURE__ */ jsx4(GripVertical, { size: 12 }),
                }),
                renamingIdx === i
                  ? /* @__PURE__ */ jsx4("input", {
                      ref: renameRef,
                      className: "section-rename-input",
                      value: renameValue,
                      onChange: (e) => setRenameValue(e.target.value),
                      onBlur: handleRenameCommit,
                      onKeyDown: (e) => {
                        if (e.key === "Enter") handleRenameCommit();
                        if (e.key === "Escape") setRenamingIdx(null);
                      },
                      onClick: (e) => e.stopPropagation(),
                    })
                  : /* @__PURE__ */ jsx4("span", {
                      className: "section-label",
                      children: s.label || "Untitled",
                    }),
                /* @__PURE__ */ jsx4("span", {
                  className: "section-count",
                  children: s.fields.length,
                }),
                /* @__PURE__ */ jsx4("button", {
                  className: `section-menu-btn${hoveredIdx === i ? " visible" : ""}`,
                  onClick: (e) => {
                    e.stopPropagation();
                    const rect = e.currentTarget.getBoundingClientRect();
                    setContextMenu({ idx: i, x: rect.right + 4, y: rect.top });
                  },
                  children: /* @__PURE__ */ jsx4(MoreHorizontal, { size: 14 }),
                }),
              ],
            },
            s.key + i,
          ),
        ),
      }),
      /* @__PURE__ */ jsxs4("button", {
        className: "add-section-btn",
        onClick: openAddModal,
        children: [/* @__PURE__ */ jsx4(Plus, { size: 14 }), " Add Section"],
      }),
      contextMenu &&
        /* @__PURE__ */ jsxs4("div", {
          ref: contextMenuRef,
          className: "context-menu",
          style: {
            position: "fixed",
            left: contextMenu.x,
            top: contextMenu.y,
            zIndex: 9999,
          },
          children: [
            /* @__PURE__ */ jsxs4("button", {
              className: "context-menu-item",
              onClick: () => handleRenameStart(contextMenu.idx),
              children: [/* @__PURE__ */ jsx4(Pencil, { size: 13 }), " Rename"],
            }),
            /* @__PURE__ */ jsxs4("button", {
              className: "context-menu-item",
              onClick: () => handleDuplicate(contextMenu.idx),
              children: [
                /* @__PURE__ */ jsx4(Copy, { size: 13 }),
                " Duplicate",
              ],
            }),
            /* @__PURE__ */ jsx4("div", {
              className: "context-menu-separator",
            }),
            /* @__PURE__ */ jsxs4("button", {
              className: "context-menu-item danger",
              onClick: () => handleDelete(contextMenu.idx),
              children: [/* @__PURE__ */ jsx4(Trash2, { size: 13 }), " Delete"],
            }),
          ],
        }),
      /* @__PURE__ */ jsxs4(Modal, {
        open: modalOpen,
        onClose: () => setModalOpen(false),
        title: "Add Section",
        children: [
          /* @__PURE__ */ jsxs4("div", {
            className: "section-modal-fields",
            children: [
              /* @__PURE__ */ jsxs4("div", {
                className: "form-group",
                children: [
                  /* @__PURE__ */ jsx4("label", {
                    className: "form-label",
                    children: "Label",
                  }),
                  /* @__PURE__ */ jsx4("input", {
                    className: "form-input",
                    value: label,
                    onChange: (e) => {
                      setLabel(e.target.value);
                      setKey(toCamelCase(e.target.value));
                    },
                    placeholder: "e.g. The Basics",
                    autoFocus: true,
                    onKeyDown: (e) => {
                      if (e.key === "Enter") handleSave();
                    },
                  }),
                ],
              }),
              /* @__PURE__ */ jsxs4("div", {
                className: "form-group",
                children: [
                  /* @__PURE__ */ jsx4("label", {
                    className: "form-label",
                    children: "Key",
                  }),
                  /* @__PURE__ */ jsx4("input", {
                    className: "form-input",
                    value: key,
                    onChange: (e) => setKey(e.target.value),
                    placeholder: "auto-generated from label",
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ jsxs4("div", {
            className: "section-modal-actions",
            children: [
              /* @__PURE__ */ jsx4("button", {
                className: "btn-secondary",
                onClick: () => setModalOpen(false),
                children: "Cancel",
              }),
              /* @__PURE__ */ jsx4("button", {
                className: "btn-primary",
                onClick: handleSave,
                children: "Add",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

// scripts/studio/components/FieldList.tsx
import {
  useState as useState8,
  useCallback as useCallback3,
  useRef as useRef7,
  useEffect as useEffect7,
} from "react";
import {
  GripVertical as GripVertical2,
  Plus as Plus5,
  MoreHorizontal as MoreHorizontal2,
  Pencil as Pencil2,
  Copy as Copy2,
  Trash2 as Trash24,
  ChevronUp,
  ChevronDown as ChevronDown4,
  GitBranch as GitBranch2,
  Image as ImageIcon2,
  Video,
  Music,
  HelpCircle,
} from "lucide-react";

// scripts/studio/field-registry.ts
var SAMPLE_IMAGES = {
  portrait:
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400",
  memory1: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400",
  memory2: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400",
  memory3: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=400",
};
var FIELD_TYPES = {
  text: {
    label: "Text",
    icon: "type",
    category: "basic",
    defaultConfig: { required: false, placeholder: "", hint: "" },
    demoDefault: (f) =>
      f.placeholder?.replace(/^e\.g\.\s*/i, "") || "Sample text",
  },
  textarea: {
    label: "Text Area",
    icon: "align-left",
    category: "basic",
    defaultConfig: { required: false, placeholder: "", hint: "" },
    demoDefault: () => "A message from the heart.",
  },
  number: {
    label: "Number",
    icon: "hash",
    category: "basic",
    defaultConfig: { required: false, hint: "" },
    demoDefault: () => 21,
  },
  date: {
    label: "Date",
    icon: "calendar",
    category: "basic",
    defaultConfig: { required: false, hint: "" },
    demoDefault: () => "2004-08-14",
  },
  color: {
    label: "Color",
    icon: "palette",
    category: "basic",
    defaultConfig: { default: "#ff6eb4" },
    demoDefault: () => "#ff6eb4",
  },
  toggle: {
    label: "Toggle",
    icon: "toggle-left",
    category: "basic",
    defaultConfig: {},
    demoDefault: () => true,
  },
  select: {
    label: "Select",
    icon: "list",
    category: "basic",
    defaultConfig: { options: ["Option 1", "Option 2"], required: false },
    demoDefault: (f) => f.options?.[0] || "Option 1",
  },
  image: {
    label: "Image",
    icon: "image",
    category: "media",
    defaultConfig: { required: false },
    demoDefault: () => SAMPLE_IMAGES.portrait,
  },
  image_array: {
    label: "Photo Gallery",
    icon: "images",
    category: "media",
    defaultConfig: { max: 8 },
    demoDefault: () => [
      SAMPLE_IMAGES.memory1,
      SAMPLE_IMAGES.memory2,
      SAMPLE_IMAGES.memory3,
    ],
  },
  video: {
    label: "Video",
    icon: "video",
    category: "media",
    defaultConfig: { required: false },
    demoDefault: () => "",
  },
  audio: {
    label: "Audio",
    icon: "music",
    category: "media",
    defaultConfig: {},
    demoDefault: () => ({
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    }),
  },
  quiz: {
    label: "Quiz",
    icon: "help-circle",
    category: "advanced",
    defaultConfig: {},
    customInspector: "quiz",
    demoDefault: () => [
      {
        id: "q1",
        text: "What is my favourite color?",
        options: ["Blue", "Red", "Green"],
        correctIndex: 0,
      },
    ],
  },
  group: {
    label: "Group",
    icon: "layers",
    category: "advanced",
    defaultConfig: { fields: [] },
    customInspector: "group",
    demoDefault: () => ({}),
  },
  group_array: {
    label: "Repeating Group",
    icon: "copy",
    category: "advanced",
    defaultConfig: { fields: [] },
    customInspector: "group",
    demoDefault: () => [{}],
  },
};
var FIELD_CATEGORIES = [
  { key: "basic", label: "Basic" },
  { key: "media", label: "Media" },
  { key: "advanced", label: "Advanced" },
];

// scripts/studio/constants.ts
var QUICK_TEMPLATES = [
  {
    label: "Recipient Name",
    icon: "user",
    field: {
      key: "recipientName",
      label: "Their name",
      type: "text",
      required: true,
      placeholder: "e.g. Priya",
    },
  },
  {
    label: "Sender Name",
    icon: "user-check",
    field: {
      key: "senderName",
      label: "Your name",
      type: "text",
      required: true,
    },
  },
  {
    label: "Photos",
    icon: "images",
    field: { key: "photos", label: "Add photos", type: "image_array", max: 8 },
  },
  {
    label: "Cover Photo",
    icon: "image",
    field: {
      key: "coverPhoto",
      label: "Cover photo",
      type: "image",
      required: true,
      aspectRatio: "3:4",
    },
  },
  {
    label: "Song",
    icon: "music",
    field: { key: "song", label: "Add a song", type: "audio" },
  },
  {
    label: "Message",
    icon: "message-square",
    field: {
      key: "personalMessage",
      label: "Your message",
      type: "textarea",
      required: true,
      placeholder: "Write something from the heart...",
    },
  },
  {
    label: "Quiz",
    icon: "help-circle",
    field: { key: "quiz", label: "Quiz questions", type: "quiz" },
  },
  {
    label: "Birthday",
    icon: "calendar",
    field: { key: "dateOfBirth", label: "Their birthday", type: "date" },
  },
  {
    label: "Color",
    icon: "palette",
    field: {
      key: "accentColor",
      label: "Theme colour",
      type: "color",
      default: "#ff6eb4",
      presets: [
        "#ff6eb4",
        "#6366f1",
        "#f59e0b",
        "#10b981",
        "#ec4899",
        "#8b5cf6",
      ],
    },
  },
];
var AVAILABLE_DEPS = [
  { name: "framer-motion", desc: "Animation library" },
  { name: "canvas-confetti", desc: "Confetti effects" },
  { name: "howler", desc: "Advanced audio" },
  { name: "three", desc: "3D rendering" },
  { name: "@react-three/fiber", desc: "React Three.js" },
  { name: "@react-three/drei", desc: "Three.js helpers" },
  { name: "react-pageflip", desc: "Flipbook effect" },
  { name: "react-countup", desc: "Number animation" },
  { name: "react-type-animation", desc: "Typewriter text" },
  { name: "react-parallax-tilt", desc: "Tilt/parallax" },
  { name: "embla-carousel-react", desc: "Carousel/slider" },
  { name: "balloons-js", desc: "Balloon effects" },
  { name: "lottie-react", desc: "Lottie animations" },
];

// scripts/studio/components/TypePicker.tsx
import {
  useState as useState3,
  useRef as useRef4,
  useEffect as useEffect4,
} from "react";
import { Search as Search2, X as X2 } from "lucide-react";
import * as Icons from "lucide-react";
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
function FieldIcon({ name, size = 16 }) {
  const iconName =
    name.charAt(0).toUpperCase() +
    name.slice(1).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  const Icon = Icons[iconName];
  return Icon ? /* @__PURE__ */ jsx5(Icon, { size }) : null;
}
function TypePicker({ open, onClose, onSelect }) {
  const [search, setSearch] = useState3("");
  const inputRef = useRef4(null);
  useEffect4(() => {
    if (open) {
      setSearch("");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);
  useEffect4(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  const q = search.toLowerCase();
  const entries = Object.entries(FIELD_TYPES).filter(
    ([key, cfg]) =>
      !q || key.includes(q) || cfg.label.toLowerCase().includes(q),
  );
  return /* @__PURE__ */ jsx5("div", {
    className: "modal-overlay",
    onClick: onClose,
    children: /* @__PURE__ */ jsxs5("div", {
      className: "type-picker",
      onClick: (e) => e.stopPropagation(),
      children: [
        /* @__PURE__ */ jsxs5("div", {
          className: "type-picker-header",
          children: [
            /* @__PURE__ */ jsx5("h3", { children: "Add Field" }),
            /* @__PURE__ */ jsx5("button", {
              className: "icon-btn",
              onClick: onClose,
              children: /* @__PURE__ */ jsx5(X2, { size: 16 }),
            }),
          ],
        }),
        /* @__PURE__ */ jsxs5("div", {
          className: "type-picker-search",
          children: [
            /* @__PURE__ */ jsx5(Search2, { size: 14 }),
            /* @__PURE__ */ jsx5("input", {
              ref: inputRef,
              type: "text",
              placeholder: "Search field types...",
              value: search,
              onChange: (e) => setSearch(e.target.value),
            }),
          ],
        }),
        /* @__PURE__ */ jsxs5("div", {
          className: "type-picker-body",
          children: [
            FIELD_CATEGORIES.map((cat) => {
              const items = entries.filter(
                ([, cfg]) => cfg.category === cat.key,
              );
              if (items.length === 0) return null;
              return /* @__PURE__ */ jsxs5(
                "div",
                {
                  className: "type-picker-category",
                  children: [
                    /* @__PURE__ */ jsx5("div", {
                      className: "type-picker-category-label",
                      children: cat.label,
                    }),
                    /* @__PURE__ */ jsx5("div", {
                      className: "type-picker-grid",
                      children: items.map(([type, cfg]) =>
                        /* @__PURE__ */ jsxs5(
                          "button",
                          {
                            className: "type-picker-item",
                            onClick: () => onSelect(type),
                            children: [
                              /* @__PURE__ */ jsx5("span", {
                                className: "type-picker-icon",
                                children: /* @__PURE__ */ jsx5(FieldIcon, {
                                  name: cfg.icon,
                                  size: 18,
                                }),
                              }),
                              /* @__PURE__ */ jsx5("span", {
                                className: "type-picker-label",
                                children: cfg.label,
                              }),
                            ],
                          },
                          type,
                        ),
                      ),
                    }),
                  ],
                },
                cat.key,
              );
            }),
            entries.length === 0 &&
              /* @__PURE__ */ jsxs5("div", {
                className: "type-picker-empty",
                children: ['No field types match "', search, '"'],
              }),
          ],
        }),
      ],
    }),
  });
}

// scripts/studio/components/ConditionalsBuilder.tsx
import {
  useState as useState4,
  useRef as useRef5,
  useEffect as useEffect5,
} from "react";
import {
  Plus as Plus2,
  X as X3,
  GitBranch,
  ChevronDown,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { jsx as jsx6, jsxs as jsxs6 } from "react/jsx-runtime";
function FieldKeySelect({ selected, allKeys, onChange }) {
  const [open, setOpen] = useState4(false);
  const ref = useRef5(null);
  useEffect5(() => {
    if (!open) return;
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);
  const toggle = (key) => {
    if (selected.includes(key)) {
      onChange(selected.filter((k) => k !== key));
    } else {
      onChange([...selected, key]);
    }
  };
  return /* @__PURE__ */ jsxs6("div", {
    className: "cond-field-select",
    ref,
    children: [
      /* @__PURE__ */ jsxs6("button", {
        className: "cond-field-select-trigger",
        onClick: () => setOpen(!open),
        children: [
          selected.length === 0
            ? /* @__PURE__ */ jsx6("span", {
                className: "cond-field-select-placeholder",
                children: "Select fields...",
              })
            : /* @__PURE__ */ jsx6("div", {
                className: "cond-field-pills",
                children: selected.map((k) =>
                  /* @__PURE__ */ jsxs6(
                    "span",
                    {
                      className: "cond-field-pill",
                      children: [
                        k,
                        /* @__PURE__ */ jsx6("button", {
                          className: "cond-field-pill-remove",
                          onClick: (e) => {
                            e.stopPropagation();
                            toggle(k);
                          },
                          children: /* @__PURE__ */ jsx6(X3, { size: 10 }),
                        }),
                      ],
                    },
                    k,
                  ),
                ),
              }),
          /* @__PURE__ */ jsx6(ChevronDown, {
            size: 13,
            style: { flexShrink: 0, color: "var(--text-tertiary)" },
          }),
        ],
      }),
      open &&
        /* @__PURE__ */ jsxs6("div", {
          className: "cond-field-select-dropdown",
          children: [
            allKeys.filter((k) => !selected.includes(k)).length === 0 &&
              selected.length === allKeys.length &&
              /* @__PURE__ */ jsx6("div", {
                className: "cond-field-select-empty",
                children: "All fields selected",
              }),
            allKeys.map((k) =>
              /* @__PURE__ */ jsxs6(
                "label",
                {
                  className: "cond-field-select-option",
                  children: [
                    /* @__PURE__ */ jsx6("input", {
                      type: "checkbox",
                      checked: selected.includes(k),
                      onChange: () => toggle(k),
                    }),
                    /* @__PURE__ */ jsx6("span", { children: k }),
                  ],
                },
                k,
              ),
            ),
          ],
        }),
    ],
  });
}
function ConditionalRow({
  conditional,
  index,
  allKeys,
  allFields,
  onUpdate,
  onDelete,
}) {
  const [hovered, setHovered] = useState4(false);
  const sourceField = allFields.find((f) => f.key === conditional.if.field);
  const renderValueInput = () => {
    if (sourceField?.type === "select" && sourceField.options) {
      return /* @__PURE__ */ jsxs6("select", {
        className: "cond-value-input",
        value: String(conditional.if.equals),
        onChange: (e) =>
          onUpdate({
            ...conditional,
            if: { ...conditional.if, equals: e.target.value },
          }),
        children: [
          /* @__PURE__ */ jsx6("option", {
            value: "",
            children: "Select value...",
          }),
          sourceField.options.map((opt) =>
            /* @__PURE__ */ jsx6("option", { value: opt, children: opt }, opt),
          ),
        ],
      });
    }
    if (sourceField?.type === "toggle") {
      return /* @__PURE__ */ jsxs6("div", {
        className: "cond-toggle-group",
        children: [
          /* @__PURE__ */ jsx6("button", {
            className: `cond-toggle-btn${conditional.if.equals === true || conditional.if.equals === "true" ? " active" : ""}`,
            onClick: () =>
              onUpdate({
                ...conditional,
                if: { ...conditional.if, equals: true },
              }),
            children: "On",
          }),
          /* @__PURE__ */ jsx6("button", {
            className: `cond-toggle-btn${conditional.if.equals === false || conditional.if.equals === "false" ? " active" : ""}`,
            onClick: () =>
              onUpdate({
                ...conditional,
                if: { ...conditional.if, equals: false },
              }),
            children: "Off",
          }),
        ],
      });
    }
    return /* @__PURE__ */ jsx6("input", {
      className: "cond-value-input",
      value: String(conditional.if.equals ?? ""),
      onChange: (e) =>
        onUpdate({
          ...conditional,
          if: { ...conditional.if, equals: e.target.value },
        }),
      placeholder: "value",
    });
  };
  return /* @__PURE__ */ jsxs6("div", {
    className: "cond-rule",
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    children: [
      /* @__PURE__ */ jsxs6("div", {
        className: "cond-rule-when",
        children: [
          /* @__PURE__ */ jsx6("span", {
            className: "cond-label cond-label-when",
            children: "WHEN",
          }),
          /* @__PURE__ */ jsxs6("select", {
            className: "cond-field-dropdown",
            value: conditional.if.field,
            onChange: (e) =>
              onUpdate({
                ...conditional,
                if: { ...conditional.if, field: e.target.value },
              }),
            children: [
              /* @__PURE__ */ jsx6("option", {
                value: "",
                children: "Select field...",
              }),
              allKeys.map((k) => {
                const f = allFields.find((af) => af.key === k);
                return /* @__PURE__ */ jsx6(
                  "option",
                  { value: k, children: f?.label || k },
                  k,
                );
              }),
            ],
          }),
          /* @__PURE__ */ jsx6("span", {
            className: "cond-equals-label",
            children: "is",
          }),
          renderValueInput(),
        ],
      }),
      /* @__PURE__ */ jsx6("div", {
        className: "cond-rule-arrow",
        children: /* @__PURE__ */ jsx6(ArrowRight, {
          size: 14,
          style: { color: "var(--accent)" },
        }),
      }),
      /* @__PURE__ */ jsxs6("div", {
        className: "cond-rule-show",
        children: [
          /* @__PURE__ */ jsx6("span", {
            className: "cond-label cond-label-show",
            children: "SHOW",
          }),
          /* @__PURE__ */ jsx6(FieldKeySelect, {
            selected: conditional.show,
            allKeys,
            onChange: (show) => onUpdate({ ...conditional, show }),
          }),
        ],
      }),
      /* @__PURE__ */ jsx6("button", {
        className: `cond-rule-delete${hovered ? " visible" : ""}`,
        onClick: onDelete,
        title: "Remove rule",
        children: /* @__PURE__ */ jsx6(X3, { size: 14 }),
      }),
    ],
  });
}
function ConditionalsBuilder() {
  const { state, dispatch } = useStudio();
  const conditionals = state.working.schema.conditionals || [];
  const [expanded, setExpanded] = useState4(conditionals.length > 0);
  const allFields = state.working.schema.sections.flatMap((s) => s.fields);
  const allKeys = allFields.map((f) => f.key);
  const addConditional = () => {
    const cond = {
      if: { field: allKeys[0] || "", equals: "" },
      show: [],
    };
    dispatch({ type: "ADD_CONDITIONAL", conditional: cond });
    setExpanded(true);
  };
  if (!expanded && conditionals.length === 0) {
    return /* @__PURE__ */ jsx6("div", {
      className: "conditionals-collapsed",
      children: /* @__PURE__ */ jsxs6("button", {
        className: "conditionals-toggle",
        onClick: addConditional,
        children: [
          /* @__PURE__ */ jsx6(GitBranch, { size: 13 }),
          " Add Conditional Logic",
        ],
      }),
    });
  }
  return /* @__PURE__ */ jsxs6("div", {
    className: "conditionals-section",
    children: [
      /* @__PURE__ */ jsxs6("button", {
        className: "conditionals-header",
        onClick: () => setExpanded(!expanded),
        children: [
          /* @__PURE__ */ jsx6(GitBranch, {
            size: 14,
            style: { color: "var(--accent)" },
          }),
          /* @__PURE__ */ jsx6("span", {
            className: "conditionals-title",
            children: "Conditional Logic",
          }),
          conditionals.length > 0 &&
            /* @__PURE__ */ jsx6("span", {
              className: "conditionals-count",
              children: conditionals.length,
            }),
          expanded
            ? /* @__PURE__ */ jsx6(ChevronDown, { size: 14 })
            : /* @__PURE__ */ jsx6(ChevronRight, { size: 14 }),
        ],
      }),
      expanded &&
        /* @__PURE__ */ jsxs6("div", {
          className: "conditionals-body",
          children: [
            conditionals.length === 0 &&
              /* @__PURE__ */ jsx6("div", {
                className: "conditionals-empty",
                children: /* @__PURE__ */ jsx6("p", {
                  children:
                    "No rules yet. Add one to show/hide fields based on conditions.",
                }),
              }),
            conditionals.map((cond, i) =>
              /* @__PURE__ */ jsx6(
                ConditionalRow,
                {
                  conditional: cond,
                  index: i,
                  allKeys,
                  allFields,
                  onUpdate: (c) =>
                    dispatch({
                      type: "UPDATE_CONDITIONAL",
                      idx: i,
                      conditional: c,
                    }),
                  onDelete: () =>
                    dispatch({ type: "DELETE_CONDITIONAL", idx: i }),
                },
                i,
              ),
            ),
            /* @__PURE__ */ jsxs6("button", {
              className: "cond-add-btn",
              onClick: addConditional,
              children: [
                /* @__PURE__ */ jsx6(Plus2, { size: 13 }),
                " Add Rule",
              ],
            }),
          ],
        }),
    ],
  });
}

// scripts/studio/components/FieldEditModal.tsx
import { useState as useState7, useEffect as useEffect6 } from "react";
import {
  X as X4,
  Settings,
  Paintbrush,
  SlidersHorizontal,
  Wrench,
  Layers as Layers2,
  ChevronRight as ChevronRight3,
  ChevronDown as ChevronDown3,
  Plus as Plus4,
  Trash2 as Trash23,
} from "lucide-react";

// scripts/studio/components/QuizBuilder.tsx
import { useState as useState5 } from "react";
import {
  Plus as Plus3,
  Trash2 as Trash22,
  Check,
  ChevronDown as ChevronDown2,
  ChevronRight as ChevronRight2,
  Image as ImageIcon,
  Lightbulb,
  MessageSquare,
} from "lucide-react";
import { jsx as jsx7, jsxs as jsxs7 } from "react/jsx-runtime";
function makeId() {
  return "q" + Math.random().toString(36).slice(2, 8);
}
function QuestionCard({
  question,
  index,
  config: config2,
  onUpdate,
  onDelete,
}) {
  const updateOption = (optIdx, value) => {
    const options = [...question.options];
    options[optIdx] = value;
    onUpdate({ ...question, options });
  };
  const addOption = () => {
    onUpdate({
      ...question,
      options: [...question.options, `Option ${question.options.length + 1}`],
    });
  };
  const removeOption = (optIdx) => {
    const options = question.options.filter((_, i) => i !== optIdx);
    const correctIndex =
      question.correctIndex >= options.length
        ? Math.max(0, options.length - 1)
        : question.correctIndex > optIdx
          ? question.correctIndex - 1
          : question.correctIndex;
    const correctIndices = (question.correctIndices || [])
      .map((ci) => (ci > optIdx ? ci - 1 : ci))
      .filter((ci) => ci !== optIdx && ci < options.length);
    onUpdate({ ...question, options, correctIndex, correctIndices });
  };
  const toggleMultiCorrect = (optIdx) => {
    const current = question.correctIndices || [];
    const next = current.includes(optIdx)
      ? current.filter((i) => i !== optIdx)
      : [...current, optIdx].sort();
    onUpdate({ ...question, correctIndices: next, correctIndex: next[0] ?? 0 });
  };
  return /* @__PURE__ */ jsxs7("div", {
    className: "quiz-card",
    children: [
      /* @__PURE__ */ jsxs7("div", {
        className: "quiz-card-header",
        children: [
          /* @__PURE__ */ jsx7("span", {
            className: "quiz-card-num",
            children: index + 1,
          }),
          /* @__PURE__ */ jsx7("input", {
            className: "form-input quiz-question-input",
            value: question.text,
            onChange: (e) => onUpdate({ ...question, text: e.target.value }),
            placeholder: "Question text",
          }),
          /* @__PURE__ */ jsx7("button", {
            className: "icon-btn",
            onClick: onDelete,
            title: "Delete question",
            children: /* @__PURE__ */ jsx7(Trash22, { size: 14 }),
          }),
        ],
      }),
      config2.allowImages &&
        /* @__PURE__ */ jsxs7("div", {
          className: "quiz-extra-row",
          children: [
            /* @__PURE__ */ jsx7(ImageIcon, {
              size: 13,
              style: { color: "var(--text-tertiary)", flexShrink: 0 },
            }),
            /* @__PURE__ */ jsx7("input", {
              className: "form-input",
              value: question.image || "",
              onChange: (e) =>
                onUpdate({ ...question, image: e.target.value || void 0 }),
              placeholder: "Image URL (optional)",
              style: { flex: 1 },
            }),
          ],
        }),
      /* @__PURE__ */ jsx7("div", {
        className: "quiz-options",
        children: question.options.map((opt, oi) => {
          const isCorrect = config2.allowMultipleCorrect
            ? (question.correctIndices || []).includes(oi)
            : question.correctIndex === oi;
          return /* @__PURE__ */ jsxs7(
            "div",
            {
              className: "quiz-option-row",
              children: [
                /* @__PURE__ */ jsx7("button", {
                  className: `quiz-correct-btn ${isCorrect ? "active" : ""}`,
                  onClick: () => {
                    if (config2.allowMultipleCorrect) {
                      toggleMultiCorrect(oi);
                    } else {
                      onUpdate({ ...question, correctIndex: oi });
                    }
                  },
                  title: config2.allowMultipleCorrect
                    ? "Toggle correct"
                    : "Mark as correct",
                  children: /* @__PURE__ */ jsx7(Check, { size: 12 }),
                }),
                /* @__PURE__ */ jsx7("input", {
                  className: "form-input",
                  value: opt,
                  onChange: (e) => updateOption(oi, e.target.value),
                  style: { flex: 1 },
                }),
                question.options.length > 2 &&
                  /* @__PURE__ */ jsx7("button", {
                    className: "icon-btn",
                    onClick: () => removeOption(oi),
                    children: /* @__PURE__ */ jsx7(Trash22, { size: 12 }),
                  }),
              ],
            },
            oi,
          );
        }),
      }),
      question.options.length < 6 &&
        /* @__PURE__ */ jsxs7("button", {
          className: "quiz-add-option",
          onClick: addOption,
          children: [/* @__PURE__ */ jsx7(Plus3, { size: 12 }), " Add option"],
        }),
      (config2.allowHints ||
        config2.allowExplanations ||
        config2.allowPoints) &&
        /* @__PURE__ */ jsxs7("div", {
          className: "quiz-extras",
          children: [
            config2.allowHints &&
              /* @__PURE__ */ jsxs7("div", {
                className: "quiz-extra-row",
                children: [
                  /* @__PURE__ */ jsx7(Lightbulb, {
                    size: 13,
                    style: { color: "var(--text-tertiary)", flexShrink: 0 },
                  }),
                  /* @__PURE__ */ jsx7("input", {
                    className: "form-input",
                    value: question.hint || "",
                    onChange: (e) =>
                      onUpdate({ ...question, hint: e.target.value || void 0 }),
                    placeholder: "Hint (shown before answering)",
                    style: { flex: 1 },
                  }),
                ],
              }),
            config2.allowExplanations &&
              /* @__PURE__ */ jsxs7("div", {
                className: "quiz-extra-row",
                children: [
                  /* @__PURE__ */ jsx7(MessageSquare, {
                    size: 13,
                    style: { color: "var(--text-tertiary)", flexShrink: 0 },
                  }),
                  /* @__PURE__ */ jsx7("input", {
                    className: "form-input",
                    value: question.explanation || "",
                    onChange: (e) =>
                      onUpdate({
                        ...question,
                        explanation: e.target.value || void 0,
                      }),
                    placeholder: "Explanation (shown after answering)",
                    style: { flex: 1 },
                  }),
                ],
              }),
            config2.allowPoints &&
              /* @__PURE__ */ jsxs7("div", {
                className: "quiz-extra-row",
                children: [
                  /* @__PURE__ */ jsx7("span", {
                    style: {
                      fontSize: "var(--font-size-xs)",
                      color: "var(--text-tertiary)",
                      flexShrink: 0,
                      width: "13px",
                      textAlign: "center",
                    },
                    children: "\u2605",
                  }),
                  /* @__PURE__ */ jsx7("input", {
                    className: "form-input",
                    type: "number",
                    min: 1,
                    value: question.points ?? 1,
                    onChange: (e) =>
                      onUpdate({
                        ...question,
                        points: e.target.value
                          ? Number(e.target.value)
                          : void 0,
                      }),
                    placeholder: "Points",
                    style: { width: "80px" },
                  }),
                  /* @__PURE__ */ jsx7("span", {
                    style: {
                      fontSize: "var(--font-size-xs)",
                      color: "var(--text-tertiary)",
                    },
                    children: "points",
                  }),
                ],
              }),
          ],
        }),
    ],
  });
}
var DEFAULT_CONFIG = {};
function QuizBuilder({
  questions,
  onChange,
  config: config2 = DEFAULT_CONFIG,
}) {
  const [expanded, setExpanded] = useState5(questions.length > 0);
  const addQuestion = () => {
    const q = {
      id: makeId(),
      text: "",
      options: ["Option 1", "Option 2", "Option 3"],
      correctIndex: 0,
    };
    if (config2.allowPoints) q.points = 1;
    onChange([...questions, q]);
    setExpanded(true);
  };
  const updateQuestion = (idx, q) => {
    const next = [...questions];
    next[idx] = q;
    onChange(next);
  };
  const deleteQuestion = (idx) => {
    onChange(questions.filter((_, i) => i !== idx));
  };
  return /* @__PURE__ */ jsxs7("div", {
    className: "quiz-builder-section",
    children: [
      /* @__PURE__ */ jsxs7("button", {
        className: "quiz-builder-toggle",
        onClick: () => setExpanded(!expanded),
        children: [
          expanded
            ? /* @__PURE__ */ jsx7(ChevronDown2, { size: 14 })
            : /* @__PURE__ */ jsx7(ChevronRight2, { size: 14 }),
          /* @__PURE__ */ jsxs7("span", {
            children: [
              questions.length,
              config2.maxQuestions ? `/${config2.maxQuestions}` : "",
              " question",
              questions.length !== 1 ? "s" : "",
            ],
          }),
        ],
      }),
      expanded &&
        /* @__PURE__ */ jsxs7("div", {
          className: "quiz-builder-body",
          children: [
            questions.map((q, i) =>
              /* @__PURE__ */ jsx7(
                QuestionCard,
                {
                  question: q,
                  index: i,
                  config: config2,
                  onUpdate: (updated) => updateQuestion(i, updated),
                  onDelete: () => deleteQuestion(i),
                },
                q.id,
              ),
            ),
            (!config2.maxQuestions ||
              questions.length < config2.maxQuestions) &&
              /* @__PURE__ */ jsxs7("button", {
                className: "quiz-builder-add",
                onClick: addQuestion,
                children: [
                  /* @__PURE__ */ jsx7(Plus3, { size: 14 }),
                  " Add Question",
                ],
              }),
          ],
        }),
    ],
  });
}

// scripts/studio/components/common/TagInput.tsx
import { useState as useState6, useRef as useRef6 } from "react";
import { jsx as jsx8, jsxs as jsxs8 } from "react/jsx-runtime";
function TagInput({ values, onChange, placeholder }) {
  const [input, setInput] = useState6("");
  const inputRef = useRef6(null);
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim()) {
      e.preventDefault();
      onChange([...values, input.trim()]);
      setInput("");
    }
    if (e.key === "Backspace" && input === "" && values.length > 0) {
      onChange(values.slice(0, -1));
    }
  };
  const remove = (idx) => {
    onChange(values.filter((_, i) => i !== idx));
  };
  return /* @__PURE__ */ jsxs8("div", {
    className: "tag-input-container",
    onClick: () => inputRef.current?.focus(),
    children: [
      values.map((v, i) =>
        /* @__PURE__ */ jsxs8(
          "span",
          {
            className: "tag-chip",
            children: [
              v,
              /* @__PURE__ */ jsx8("button", {
                onClick: () => remove(i),
                children: "\xD7",
              }),
            ],
          },
          i,
        ),
      ),
      /* @__PURE__ */ jsx8("input", {
        ref: inputRef,
        className: "tag-input",
        value: input,
        onChange: (e) => setInput(e.target.value),
        onKeyDown: handleKeyDown,
        placeholder: values.length === 0 ? placeholder : "",
      }),
    ],
  });
}

// scripts/studio/components/FieldEditModal.tsx
import * as Icons2 from "lucide-react";
import {
  Fragment as Fragment3,
  jsx as jsx9,
  jsxs as jsxs9,
} from "react/jsx-runtime";
function FieldIcon2({ name, size = 14 }) {
  const iconName =
    name.charAt(0).toUpperCase() +
    name.slice(1).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  const Icon = Icons2[iconName];
  return Icon ? /* @__PURE__ */ jsx9(Icon, { size }) : null;
}
function Section({ title, icon, defaultOpen = true, children }) {
  const [open, setOpen] = useState7(defaultOpen);
  return /* @__PURE__ */ jsxs9("div", {
    className: "field-modal-section",
    children: [
      /* @__PURE__ */ jsxs9("button", {
        className: "field-modal-section-header",
        onClick: () => setOpen(!open),
        children: [
          /* @__PURE__ */ jsx9("span", {
            className: "field-modal-section-icon",
            children: icon,
          }),
          /* @__PURE__ */ jsx9("span", {
            className: "field-modal-section-title",
            children: title,
          }),
          open
            ? /* @__PURE__ */ jsx9(ChevronDown3, { size: 14 })
            : /* @__PURE__ */ jsx9(ChevronRight3, { size: 14 }),
        ],
      }),
      open &&
        /* @__PURE__ */ jsx9("div", {
          className: "field-modal-section-body",
          children,
        }),
    ],
  });
}
var SUB_FIELD_TYPES = [
  { value: "text", label: "Text" },
  { value: "textarea", label: "Text Area" },
  { value: "number", label: "Number" },
  { value: "date", label: "Date" },
  { value: "color", label: "Color" },
  { value: "toggle", label: "Toggle" },
  { value: "select", label: "Select" },
  { value: "image", label: "Image" },
  { value: "image_array", label: "Photo Gallery" },
  { value: "video", label: "Video" },
  { value: "audio", label: "Audio" },
];
function SubFieldsEditor({ fields, onChange }) {
  const addField = () => {
    onChange([
      ...fields,
      {
        key: `field_${fields.length + 1}`,
        label: `Field ${fields.length + 1}`,
        type: "text",
      },
    ]);
  };
  const updateField = (idx, patch) => {
    const next = [...fields];
    next[idx] = { ...next[idx], ...patch };
    onChange(next);
  };
  const removeField = (idx) => {
    onChange(fields.filter((_, i) => i !== idx));
  };
  return /* @__PURE__ */ jsxs9("div", {
    className: "subfields-editor",
    children: [
      fields.map((sf, i) =>
        /* @__PURE__ */ jsxs9(
          "div",
          {
            className: "subfield-row",
            children: [
              /* @__PURE__ */ jsxs9("div", {
                className: "subfield-row-inputs",
                children: [
                  /* @__PURE__ */ jsx9("input", {
                    className: "form-input",
                    value: sf.label,
                    onChange: (e) => updateField(i, { label: e.target.value }),
                    placeholder: "Label",
                    style: { flex: 1 },
                  }),
                  /* @__PURE__ */ jsx9("input", {
                    className: "form-input font-mono",
                    value: sf.key,
                    onChange: (e) => updateField(i, { key: e.target.value }),
                    placeholder: "key",
                    style: { width: 100 },
                  }),
                  /* @__PURE__ */ jsx9("select", {
                    className: "form-input",
                    value: sf.type,
                    onChange: (e) => updateField(i, { type: e.target.value }),
                    style: { width: 110 },
                    children: SUB_FIELD_TYPES.map((t) =>
                      /* @__PURE__ */ jsx9(
                        "option",
                        { value: t.value, children: t.label },
                        t.value,
                      ),
                    ),
                  }),
                  /* @__PURE__ */ jsx9("button", {
                    className: "icon-btn",
                    onClick: () => removeField(i),
                    title: "Remove sub-field",
                    children: /* @__PURE__ */ jsx9(Trash23, { size: 12 }),
                  }),
                ],
              }),
              sf.type === "select" &&
                /* @__PURE__ */ jsx9("input", {
                  className: "form-input",
                  value: (sf.options || []).join(", "),
                  onChange: (e) =>
                    updateField(i, {
                      options: e.target.value
                        .split(",")
                        .map((s) => s.trim())
                        .filter(Boolean),
                    }),
                  placeholder: "Options (comma-separated)",
                  style: { marginTop: 4 },
                }),
            ],
          },
          i,
        ),
      ),
      /* @__PURE__ */ jsxs9("button", {
        className: "subfield-add",
        onClick: addField,
        children: [/* @__PURE__ */ jsx9(Plus4, { size: 13 }), " Add Sub-field"],
      }),
    ],
  });
}
function FieldEditModal({
  field: initialField,
  demoValue: initialDemo,
  onSave,
  onClose,
}) {
  const [field, setField] = useState7(() => deepClone(initialField));
  const [demo, setDemo] = useState7(() => deepClone(initialDemo));
  useEffect6(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);
  const ft = FIELD_TYPES[field.type];
  const update = (patch) => setField((f) => ({ ...f, ...patch }));
  const isGroup = field.type === "group" || field.type === "group_array";
  const hasAppearance =
    field.type === "text" ||
    field.type === "textarea" ||
    field.type === "number" ||
    field.type === "date";
  const hasConstraints =
    field.type === "text" ||
    field.type === "textarea" ||
    field.type === "number" ||
    field.type === "image" ||
    field.type === "image_array" ||
    field.type === "video" ||
    field.type === "audio";
  return /* @__PURE__ */ jsx9("div", {
    className: "field-modal-overlay",
    onClick: (e) => {
      if (e.target === e.currentTarget) onClose();
    },
    children: /* @__PURE__ */ jsxs9("div", {
      className: "field-modal",
      children: [
        /* @__PURE__ */ jsxs9("div", {
          className: "field-modal-header",
          children: [
            /* @__PURE__ */ jsxs9("div", {
              className: "field-modal-header-left",
              children: [
                /* @__PURE__ */ jsx9("span", {
                  className: "field-modal-type-icon",
                  children: /* @__PURE__ */ jsx9(FieldIcon2, {
                    name: ft?.icon || "help-circle",
                    size: 16,
                  }),
                }),
                /* @__PURE__ */ jsxs9("div", {
                  children: [
                    /* @__PURE__ */ jsx9("div", {
                      className: "field-modal-field-name",
                      children: field.label || "Untitled",
                    }),
                    /* @__PURE__ */ jsx9("div", {
                      className: "field-modal-field-type",
                      children: ft?.label || field.type,
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ jsx9("button", {
              className: "field-modal-close",
              onClick: onClose,
              children: /* @__PURE__ */ jsx9(X4, { size: 16 }),
            }),
          ],
        }),
        /* @__PURE__ */ jsxs9("div", {
          className: "field-modal-body",
          children: [
            /* @__PURE__ */ jsxs9(Section, {
              title: "General",
              icon: /* @__PURE__ */ jsx9(Settings, { size: 14 }),
              defaultOpen: true,
              children: [
                /* @__PURE__ */ jsxs9("div", {
                  className: "form-group",
                  children: [
                    /* @__PURE__ */ jsx9("label", {
                      className: "form-label",
                      children: "Label",
                    }),
                    /* @__PURE__ */ jsx9("input", {
                      className: "form-input",
                      value: field.label,
                      onChange: (e) => update({ label: e.target.value }),
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxs9("div", {
                  className: "form-group",
                  children: [
                    /* @__PURE__ */ jsx9("label", {
                      className: "form-label",
                      children: "Key",
                    }),
                    /* @__PURE__ */ jsx9("input", {
                      className: "form-input font-mono",
                      value: field.key,
                      onChange: (e) => update({ key: e.target.value }),
                    }),
                  ],
                }),
                field.type !== "group" &&
                  field.type !== "group_array" &&
                  /* @__PURE__ */ jsxs9("div", {
                    className: "form-group-row",
                    children: [
                      /* @__PURE__ */ jsx9("label", {
                        className: "form-label",
                        children: "Required",
                      }),
                      /* @__PURE__ */ jsxs9("label", {
                        className: "toggle-switch",
                        children: [
                          /* @__PURE__ */ jsx9("input", {
                            type: "checkbox",
                            checked: field.required || false,
                            onChange: (e) =>
                              update({ required: e.target.checked }),
                          }),
                          /* @__PURE__ */ jsx9("span", {
                            className: "toggle-switch-slider",
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
            isGroup &&
              /* @__PURE__ */ jsx9(Section, {
                title: "Sub-fields",
                icon: /* @__PURE__ */ jsx9(Layers2, { size: 14 }),
                defaultOpen: true,
                children: /* @__PURE__ */ jsx9(SubFieldsEditor, {
                  fields: field.fields || [],
                  onChange: (fields) => update({ fields }),
                }),
              }),
            hasAppearance &&
              /* @__PURE__ */ jsxs9(Section, {
                title: "Appearance",
                icon: /* @__PURE__ */ jsx9(Paintbrush, { size: 14 }),
                defaultOpen: true,
                children: [
                  (field.type === "text" || field.type === "textarea") &&
                    /* @__PURE__ */ jsxs9("div", {
                      className: "form-group",
                      children: [
                        /* @__PURE__ */ jsx9("label", {
                          className: "form-label",
                          children: "Placeholder",
                        }),
                        /* @__PURE__ */ jsx9("input", {
                          className: "form-input",
                          value: field.placeholder || "",
                          onChange: (e) =>
                            update({ placeholder: e.target.value || void 0 }),
                        }),
                      ],
                    }),
                  /* @__PURE__ */ jsxs9("div", {
                    className: "form-group",
                    children: [
                      /* @__PURE__ */ jsx9("label", {
                        className: "form-label",
                        children: "Hint",
                      }),
                      /* @__PURE__ */ jsx9("input", {
                        className: "form-input",
                        value: field.hint || "",
                        onChange: (e) =>
                          update({ hint: e.target.value || void 0 }),
                        placeholder: "Help text below the field",
                      }),
                    ],
                  }),
                ],
              }),
            hasConstraints &&
              /* @__PURE__ */ jsxs9(Section, {
                title: "Constraints",
                icon: /* @__PURE__ */ jsx9(SlidersHorizontal, { size: 14 }),
                defaultOpen: false,
                children: [
                  (field.type === "text" || field.type === "textarea") &&
                    /* @__PURE__ */ jsxs9(Fragment3, {
                      children: [
                        /* @__PURE__ */ jsxs9("div", {
                          className: "form-group",
                          children: [
                            /* @__PURE__ */ jsx9("label", {
                              className: "form-label",
                              children: "Min length",
                            }),
                            /* @__PURE__ */ jsx9("input", {
                              className: "form-input",
                              type: "number",
                              value: field.constraints?.minLength ?? "",
                              onChange: (e) =>
                                update({
                                  constraints: {
                                    ...field.constraints,
                                    minLength: e.target.value
                                      ? Number(e.target.value)
                                      : void 0,
                                  },
                                }),
                            }),
                          ],
                        }),
                        /* @__PURE__ */ jsxs9("div", {
                          className: "form-group",
                          children: [
                            /* @__PURE__ */ jsx9("label", {
                              className: "form-label",
                              children: "Max length",
                            }),
                            /* @__PURE__ */ jsx9("input", {
                              className: "form-input",
                              type: "number",
                              value: field.constraints?.maxLength ?? "",
                              onChange: (e) =>
                                update({
                                  constraints: {
                                    ...field.constraints,
                                    maxLength: e.target.value
                                      ? Number(e.target.value)
                                      : void 0,
                                  },
                                }),
                            }),
                          ],
                        }),
                        field.type === "textarea" &&
                          /* @__PURE__ */ jsxs9("div", {
                            className: "form-group",
                            children: [
                              /* @__PURE__ */ jsx9("label", {
                                className: "form-label",
                                children: "Max words",
                              }),
                              /* @__PURE__ */ jsx9("input", {
                                className: "form-input",
                                type: "number",
                                value: field.constraints?.maxWords ?? "",
                                onChange: (e) =>
                                  update({
                                    constraints: {
                                      ...field.constraints,
                                      maxWords: e.target.value
                                        ? Number(e.target.value)
                                        : void 0,
                                    },
                                  }),
                              }),
                            ],
                          }),
                      ],
                    }),
                  field.type === "number" &&
                    /* @__PURE__ */ jsxs9(Fragment3, {
                      children: [
                        /* @__PURE__ */ jsxs9("div", {
                          className: "form-group",
                          children: [
                            /* @__PURE__ */ jsx9("label", {
                              className: "form-label",
                              children: "Min",
                            }),
                            /* @__PURE__ */ jsx9("input", {
                              className: "form-input",
                              type: "number",
                              value: field.constraints?.min ?? "",
                              onChange: (e) =>
                                update({
                                  constraints: {
                                    ...field.constraints,
                                    min: e.target.value
                                      ? Number(e.target.value)
                                      : void 0,
                                  },
                                }),
                            }),
                          ],
                        }),
                        /* @__PURE__ */ jsxs9("div", {
                          className: "form-group",
                          children: [
                            /* @__PURE__ */ jsx9("label", {
                              className: "form-label",
                              children: "Max",
                            }),
                            /* @__PURE__ */ jsx9("input", {
                              className: "form-input",
                              type: "number",
                              value: field.constraints?.max ?? "",
                              onChange: (e) =>
                                update({
                                  constraints: {
                                    ...field.constraints,
                                    max: e.target.value
                                      ? Number(e.target.value)
                                      : void 0,
                                  },
                                }),
                            }),
                          ],
                        }),
                        /* @__PURE__ */ jsxs9("div", {
                          className: "form-group",
                          children: [
                            /* @__PURE__ */ jsx9("label", {
                              className: "form-label",
                              children: "Unit",
                            }),
                            /* @__PURE__ */ jsx9("input", {
                              className: "form-input",
                              value: field.constraints?.unit || "",
                              onChange: (e) =>
                                update({
                                  constraints: {
                                    ...field.constraints,
                                    unit: e.target.value || void 0,
                                  },
                                }),
                              placeholder: "e.g. years, kg",
                            }),
                          ],
                        }),
                      ],
                    }),
                  (field.type === "image" || field.type === "image_array") &&
                    /* @__PURE__ */ jsxs9(Fragment3, {
                      children: [
                        /* @__PURE__ */ jsxs9("div", {
                          className: "form-group",
                          children: [
                            /* @__PURE__ */ jsx9("label", {
                              className: "form-label",
                              children: "Aspect Ratio",
                            }),
                            /* @__PURE__ */ jsx9("input", {
                              className: "form-input",
                              value: field.aspectRatio || "",
                              onChange: (e) =>
                                update({
                                  aspectRatio: e.target.value || void 0,
                                }),
                              placeholder: "e.g. 3:4, 1:1",
                            }),
                          ],
                        }),
                        /* @__PURE__ */ jsxs9("div", {
                          className: "form-group",
                          children: [
                            /* @__PURE__ */ jsx9("label", {
                              className: "form-label",
                              children: "Max size (MB)",
                            }),
                            /* @__PURE__ */ jsx9("input", {
                              className: "form-input",
                              type: "number",
                              value: field.constraints?.maxSizeMB ?? "",
                              onChange: (e) =>
                                update({
                                  constraints: {
                                    ...field.constraints,
                                    maxSizeMB: e.target.value
                                      ? Number(e.target.value)
                                      : void 0,
                                  },
                                }),
                            }),
                          ],
                        }),
                        field.type === "image_array" &&
                          /* @__PURE__ */ jsxs9("div", {
                            className: "form-group",
                            children: [
                              /* @__PURE__ */ jsx9("label", {
                                className: "form-label",
                                children: "Max images",
                              }),
                              /* @__PURE__ */ jsx9("input", {
                                className: "form-input",
                                type: "number",
                                value: field.max || "",
                                onChange: (e) =>
                                  update({
                                    max: e.target.value
                                      ? Number(e.target.value)
                                      : void 0,
                                  }),
                              }),
                            ],
                          }),
                      ],
                    }),
                  field.type === "video" &&
                    /* @__PURE__ */ jsxs9(Fragment3, {
                      children: [
                        /* @__PURE__ */ jsxs9("div", {
                          className: "form-group",
                          children: [
                            /* @__PURE__ */ jsx9("label", {
                              className: "form-label",
                              children: "Max size (MB)",
                            }),
                            /* @__PURE__ */ jsx9("input", {
                              className: "form-input",
                              type: "number",
                              value: field.constraints?.maxSizeMB ?? "",
                              onChange: (e) =>
                                update({
                                  constraints: {
                                    ...field.constraints,
                                    maxSizeMB: e.target.value
                                      ? Number(e.target.value)
                                      : void 0,
                                  },
                                }),
                            }),
                          ],
                        }),
                        /* @__PURE__ */ jsxs9("div", {
                          className: "form-group",
                          children: [
                            /* @__PURE__ */ jsx9("label", {
                              className: "form-label",
                              children: "Max duration (sec)",
                            }),
                            /* @__PURE__ */ jsx9("input", {
                              className: "form-input",
                              type: "number",
                              value: field.constraints?.maxDurationSec ?? "",
                              onChange: (e) =>
                                update({
                                  constraints: {
                                    ...field.constraints,
                                    maxDurationSec: e.target.value
                                      ? Number(e.target.value)
                                      : void 0,
                                  },
                                }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  field.type === "audio" &&
                    /* @__PURE__ */ jsxs9("div", {
                      className: "form-group",
                      children: [
                        /* @__PURE__ */ jsx9("label", {
                          className: "form-label",
                          children: "Max size (MB)",
                        }),
                        /* @__PURE__ */ jsx9("input", {
                          className: "form-input",
                          type: "number",
                          value: field.constraints?.maxSizeMB ?? "",
                          onChange: (e) =>
                            update({
                              constraints: {
                                ...field.constraints,
                                maxSizeMB: e.target.value
                                  ? Number(e.target.value)
                                  : void 0,
                              },
                            }),
                        }),
                      ],
                    }),
                ],
              }),
            /* @__PURE__ */ jsxs9(Section, {
              title: "Advanced",
              icon: /* @__PURE__ */ jsx9(Wrench, { size: 14 }),
              defaultOpen:
                field.type === "select" ||
                field.type === "color" ||
                field.type === "quiz",
              children: [
                field.type === "select" &&
                  /* @__PURE__ */ jsxs9("div", {
                    className: "form-group",
                    children: [
                      /* @__PURE__ */ jsx9("label", {
                        className: "form-label",
                        children: "Options (one per line)",
                      }),
                      /* @__PURE__ */ jsx9("textarea", {
                        className: "form-input",
                        rows: 4,
                        value: (field.options || []).join("\n"),
                        onChange: (e) =>
                          update({
                            options: e.target.value.split("\n").filter(Boolean),
                          }),
                      }),
                    ],
                  }),
                field.type === "color" &&
                  /* @__PURE__ */ jsxs9(Fragment3, {
                    children: [
                      /* @__PURE__ */ jsxs9("div", {
                        className: "form-group",
                        children: [
                          /* @__PURE__ */ jsx9("label", {
                            className: "form-label",
                            children: "Default",
                          }),
                          /* @__PURE__ */ jsxs9("div", {
                            className: "color-input-row",
                            children: [
                              /* @__PURE__ */ jsx9("input", {
                                type: "color",
                                value: field.default || "#000000",
                                onChange: (e) =>
                                  update({ default: e.target.value }),
                              }),
                              /* @__PURE__ */ jsx9("input", {
                                className: "form-input",
                                value: field.default || "",
                                onChange: (e) =>
                                  update({ default: e.target.value }),
                                style: { flex: 1 },
                              }),
                            ],
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsxs9("div", {
                        className: "form-group",
                        children: [
                          /* @__PURE__ */ jsx9("label", {
                            className: "form-label",
                            children: "Presets (hex colors)",
                          }),
                          /* @__PURE__ */ jsx9(TagInput, {
                            values: field.presets || [],
                            onChange: (presets) => update({ presets }),
                            placeholder: "#ff6eb4",
                          }),
                        ],
                      }),
                    ],
                  }),
                field.type === "date" &&
                  /* @__PURE__ */ jsxs9("div", {
                    className: "form-group",
                    children: [
                      /* @__PURE__ */ jsx9("label", {
                        className: "form-label",
                        children: "Default value",
                      }),
                      /* @__PURE__ */ jsx9("input", {
                        className: "form-input",
                        type: "date",
                        value: field.default || "",
                        onChange: (e) =>
                          update({ default: e.target.value || void 0 }),
                      }),
                    ],
                  }),
                field.type === "quiz" &&
                  /* @__PURE__ */ jsxs9(Fragment3, {
                    children: [
                      /* @__PURE__ */ jsxs9("div", {
                        className: "form-group",
                        children: [
                          /* @__PURE__ */ jsx9("label", {
                            className: "form-label",
                            children: "Quiz Capabilities",
                          }),
                          /* @__PURE__ */ jsx9("div", {
                            className: "quiz-config-grid",
                            children: [
                              ["allowHints", "Hints"],
                              ["allowExplanations", "Explanations"],
                              ["allowImages", "Images"],
                              ["allowMultipleCorrect", "Multiple Correct"],
                              ["allowPoints", "Points"],
                            ].map(([key, label]) =>
                              /* @__PURE__ */ jsxs9(
                                "label",
                                {
                                  className: "quiz-config-toggle",
                                  children: [
                                    /* @__PURE__ */ jsx9("input", {
                                      type: "checkbox",
                                      checked: !!field.config?.[key],
                                      onChange: (e) => {
                                        const prev = field.config || {};
                                        update({
                                          config: {
                                            ...prev,
                                            [key]: e.target.checked || void 0,
                                          },
                                        });
                                      },
                                    }),
                                    /* @__PURE__ */ jsx9("span", {
                                      children: label,
                                    }),
                                  ],
                                },
                                key,
                              ),
                            ),
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsxs9("div", {
                        className: "form-group",
                        children: [
                          /* @__PURE__ */ jsx9("label", {
                            className: "form-label",
                            children: "Max Questions",
                          }),
                          /* @__PURE__ */ jsx9("input", {
                            className: "form-input",
                            type: "number",
                            min: 1,
                            value: field.config?.maxQuestions ?? "",
                            onChange: (e) => {
                              const prev = field.config || {};
                              update({
                                config: {
                                  ...prev,
                                  maxQuestions: e.target.value
                                    ? Number(e.target.value)
                                    : void 0,
                                },
                              });
                            },
                            placeholder: "No limit",
                            style: { width: "120px" },
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsx9(QuizBuilder, {
                        questions: demo || [],
                        onChange: (questions) => setDemo(questions),
                        config: field.config || {},
                      }),
                    ],
                  }),
                (field.type === "text" ||
                  field.type === "textarea" ||
                  field.type === "number") &&
                  /* @__PURE__ */ jsxs9("div", {
                    className: "form-group",
                    children: [
                      /* @__PURE__ */ jsx9("label", {
                        className: "form-label",
                        children: "Default value",
                      }),
                      /* @__PURE__ */ jsx9("input", {
                        className: "form-input",
                        value:
                          field.default != null ? String(field.default) : "",
                        onChange: (e) => {
                          const val =
                            field.type === "number" && e.target.value
                              ? Number(e.target.value)
                              : e.target.value || void 0;
                          update({ default: val });
                        },
                        type: field.type === "number" ? "number" : "text",
                      }),
                    ],
                  }),
                field.type === "toggle" &&
                  /* @__PURE__ */ jsxs9("div", {
                    className: "form-group-row",
                    children: [
                      /* @__PURE__ */ jsx9("label", {
                        className: "form-label",
                        children: "Default",
                      }),
                      /* @__PURE__ */ jsxs9("label", {
                        className: "toggle-switch",
                        children: [
                          /* @__PURE__ */ jsx9("input", {
                            type: "checkbox",
                            checked: !!field.default,
                            onChange: (e) =>
                              update({ default: e.target.checked }),
                          }),
                          /* @__PURE__ */ jsx9("span", {
                            className: "toggle-switch-slider",
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          ],
        }),
        /* @__PURE__ */ jsxs9("div", {
          className: "field-modal-footer",
          children: [
            /* @__PURE__ */ jsx9("button", {
              className: "btn-secondary",
              onClick: onClose,
              children: "Cancel",
            }),
            /* @__PURE__ */ jsx9("button", {
              className: "btn-primary",
              onClick: () => {
                onSave(field, demo);
                onClose();
              },
              children: "Save Changes",
            }),
          ],
        }),
      ],
    }),
  });
}

// scripts/studio/components/FieldList.tsx
import * as Icons3 from "lucide-react";
import { jsx as jsx10, jsxs as jsxs10 } from "react/jsx-runtime";
function FieldIcon3({ name, size = 14, ...rest }) {
  const iconName =
    name.charAt(0).toUpperCase() +
    name.slice(1).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  const Icon = Icons3[iconName];
  return Icon ? /* @__PURE__ */ jsx10(Icon, { size, ...rest }) : null;
}
function FieldPreview({ field, quizQuestions, onAddQuizQuestion }) {
  switch (field.type) {
    case "text":
      return /* @__PURE__ */ jsx10("div", {
        className: "field-preview",
        children: /* @__PURE__ */ jsx10("div", {
          className: "field-preview-input",
          children: /* @__PURE__ */ jsx10("span", {
            className: "field-preview-placeholder",
            children: field.placeholder || "Enter text...",
          }),
        }),
      });
    case "textarea":
      return /* @__PURE__ */ jsx10("div", {
        className: "field-preview",
        children: /* @__PURE__ */ jsx10("div", {
          className: "field-preview-textarea",
          children: /* @__PURE__ */ jsx10("span", {
            className: "field-preview-placeholder",
            children: field.placeholder || "Enter your message...",
          }),
        }),
      });
    case "number":
      return /* @__PURE__ */ jsx10("div", {
        className: "field-preview",
        children: /* @__PURE__ */ jsxs10("div", {
          className: "field-preview-input field-preview-number",
          children: [
            /* @__PURE__ */ jsx10("span", {
              className: "field-preview-placeholder",
              children: "0",
            }),
            field.constraints?.unit &&
              /* @__PURE__ */ jsx10("span", {
                className: "field-preview-unit",
                children: field.constraints.unit,
              }),
          ],
        }),
      });
    case "date":
      return /* @__PURE__ */ jsx10("div", {
        className: "field-preview",
        children: /* @__PURE__ */ jsxs10("div", {
          className: "field-preview-input",
          children: [
            /* @__PURE__ */ jsx10("span", {
              className: "field-preview-placeholder",
              children: "dd / mm / yyyy",
            }),
            /* @__PURE__ */ jsx10(FieldIcon3, {
              name: "calendar",
              size: 13,
              style: { color: "var(--text-tertiary)", flexShrink: 0 },
            }),
          ],
        }),
      });
    case "select":
      return /* @__PURE__ */ jsx10("div", {
        className: "field-preview",
        children: /* @__PURE__ */ jsxs10("div", {
          className: "field-preview-input field-preview-select",
          children: [
            /* @__PURE__ */ jsx10("span", {
              className: "field-preview-placeholder",
              children: field.options?.[0] || "Select an option...",
            }),
            /* @__PURE__ */ jsx10(FieldIcon3, {
              name: "chevron-down",
              size: 13,
              style: { color: "var(--text-tertiary)", flexShrink: 0 },
            }),
          ],
        }),
      });
    case "toggle":
      return /* @__PURE__ */ jsx10("div", {
        className: "field-preview",
        children: /* @__PURE__ */ jsxs10("div", {
          className: "field-preview-toggle",
          children: [
            /* @__PURE__ */ jsx10("div", {
              className: "field-preview-toggle-track",
              children: /* @__PURE__ */ jsx10("div", {
                className: "field-preview-toggle-thumb",
              }),
            }),
            /* @__PURE__ */ jsx10("span", {
              className: "field-preview-toggle-label",
              children: "Enabled",
            }),
          ],
        }),
      });
    case "color":
      return /* @__PURE__ */ jsx10("div", {
        className: "field-preview",
        children: /* @__PURE__ */ jsxs10("div", {
          className: "field-preview-color-row",
          children: [
            /* @__PURE__ */ jsx10("div", {
              className: "field-preview-color-swatch",
              style: { backgroundColor: field.default || "#ff6eb4" },
            }),
            /* @__PURE__ */ jsx10("span", {
              className: "field-preview-color-hex",
              children: field.default || "#ff6eb4",
            }),
            field.presets &&
              field.presets.length > 0 &&
              /* @__PURE__ */ jsx10("div", {
                className: "field-preview-color-presets",
                children: field.presets
                  .slice(0, 5)
                  .map((c, i) =>
                    /* @__PURE__ */ jsx10(
                      "div",
                      {
                        className: "field-preview-color-preset",
                        style: { backgroundColor: c },
                      },
                      i,
                    ),
                  ),
              }),
          ],
        }),
      });
    case "image":
      return /* @__PURE__ */ jsx10("div", {
        className: "field-preview",
        children: /* @__PURE__ */ jsxs10("div", {
          className: "field-preview-media",
          children: [
            /* @__PURE__ */ jsx10(ImageIcon2, { size: 20, strokeWidth: 1.5 }),
            /* @__PURE__ */ jsx10("span", { children: "Upload image" }),
            field.aspectRatio &&
              /* @__PURE__ */ jsx10("span", {
                className: "field-preview-aspect",
                children: field.aspectRatio,
              }),
          ],
        }),
      });
    case "image_array":
      return /* @__PURE__ */ jsxs10("div", {
        className: "field-preview",
        children: [
          /* @__PURE__ */ jsxs10("div", {
            className: "field-preview-gallery",
            children: [
              [0, 1, 2].map((i) =>
                /* @__PURE__ */ jsx10(
                  "div",
                  {
                    className: "field-preview-gallery-slot",
                    children: /* @__PURE__ */ jsx10(ImageIcon2, {
                      size: 14,
                      strokeWidth: 1.5,
                    }),
                  },
                  i,
                ),
              ),
              /* @__PURE__ */ jsx10("div", {
                className:
                  "field-preview-gallery-slot field-preview-gallery-add",
                children: /* @__PURE__ */ jsx10(Plus5, { size: 14 }),
              }),
            ],
          }),
          field.max &&
            /* @__PURE__ */ jsxs10("span", {
              className: "field-preview-media-hint",
              children: ["Up to ", field.max, " photos"],
            }),
        ],
      });
    case "video":
      return /* @__PURE__ */ jsx10("div", {
        className: "field-preview",
        children: /* @__PURE__ */ jsxs10("div", {
          className: "field-preview-media",
          children: [
            /* @__PURE__ */ jsx10(Video, { size: 20, strokeWidth: 1.5 }),
            /* @__PURE__ */ jsx10("span", { children: "Upload video" }),
          ],
        }),
      });
    case "audio":
      return /* @__PURE__ */ jsx10("div", {
        className: "field-preview",
        children: /* @__PURE__ */ jsxs10("div", {
          className: "field-preview-media",
          children: [
            /* @__PURE__ */ jsx10(Music, { size: 20, strokeWidth: 1.5 }),
            /* @__PURE__ */ jsx10("span", { children: "Upload audio" }),
          ],
        }),
      });
    case "quiz": {
      const questions = quizQuestions || [];
      return /* @__PURE__ */ jsx10("div", {
        className: "field-preview",
        children: /* @__PURE__ */ jsxs10("div", {
          className: "field-preview-quiz",
          children: [
            questions.length === 0 &&
              /* @__PURE__ */ jsxs10("div", {
                className: "field-preview-media",
                style: { padding: "10px" },
                children: [
                  /* @__PURE__ */ jsx10(HelpCircle, {
                    size: 18,
                    strokeWidth: 1.5,
                  }),
                  /* @__PURE__ */ jsx10("span", {
                    children: "No questions yet",
                  }),
                ],
              }),
            questions
              .slice(0, 4)
              .map((q, i) =>
                /* @__PURE__ */ jsxs10(
                  "div",
                  {
                    className: "field-preview-quiz-item",
                    children: [
                      /* @__PURE__ */ jsx10("span", {
                        className: "field-preview-quiz-num",
                        children: i + 1,
                      }),
                      /* @__PURE__ */ jsx10("span", {
                        className: "field-preview-quiz-text",
                        children: q.text || "Untitled question",
                      }),
                      /* @__PURE__ */ jsxs10("span", {
                        className: "field-preview-quiz-opts",
                        children: [q.options.length, " opts"],
                      }),
                    ],
                  },
                  q.id,
                ),
              ),
            questions.length > 4 &&
              /* @__PURE__ */ jsxs10("div", {
                style: {
                  fontSize: "var(--font-size-xs)",
                  color: "var(--text-tertiary)",
                  paddingLeft: "4px",
                },
                children: ["+", questions.length - 4, " more"],
              }),
            /* @__PURE__ */ jsxs10("button", {
              className: "field-preview-quiz-add",
              onClick: (e) => {
                e.stopPropagation();
                onAddQuizQuestion?.();
              },
              children: [
                /* @__PURE__ */ jsx10(Plus5, { size: 13 }),
                " Add Question",
              ],
            }),
          ],
        }),
      });
    }
    case "group":
    case "group_array":
      return /* @__PURE__ */ jsx10("div", {
        className: "field-preview",
        children: /* @__PURE__ */ jsxs10("div", {
          className: "field-preview-group",
          children: [
            /* @__PURE__ */ jsx10(FieldIcon3, {
              name: FIELD_TYPES[field.type].icon,
              size: 16,
              style: { color: "var(--text-tertiary)" },
            }),
            /* @__PURE__ */ jsx10("span", {
              children:
                field.type === "group_array"
                  ? "Repeating group"
                  : "Field group",
            }),
          ],
        }),
      });
    default:
      return null;
  }
}
function FieldList() {
  const { state, dispatch } = useStudio();
  const sectionIdx = state.ui.selectedSection;
  const section = state.working.schema.sections[sectionIdx];
  const selectedField = state.ui.selectedField;
  const searchQuery = state.ui.searchQuery.toLowerCase();
  const [pickerOpen, setPickerOpen] = useState8(false);
  const [quickOpen, setQuickOpen] = useState8(false);
  const [contextMenu, setContextMenu] = useState8(null);
  const contextMenuRef = useRef7(null);
  const [editingFieldIdx, setEditingFieldIdx] = useState8(null);
  const conditionalsSet = /* @__PURE__ */ new Set();
  const conditionals = state.working.schema.conditionals || [];
  for (const c of conditionals) {
    conditionalsSet.add(c.if.field);
    for (const k of c.show) conditionalsSet.add(k);
  }
  const [dragIdx, setDragIdx] = useState8(null);
  const [dropTarget, setDropTarget] = useState8(null);
  const [hoveredIdx, setHoveredIdx] = useState8(null);
  const onDragStart = useCallback3((idx) => setDragIdx(idx), []);
  const onDragEnd = useCallback3(() => {
    setDragIdx(null);
    setDropTarget(null);
  }, []);
  const onDragOver = useCallback3((e, idx) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    setDropTarget(idx);
  }, []);
  const onDrop = useCallback3(
    (e, toIdx) => {
      e.preventDefault();
      if (dragIdx !== null && dragIdx !== toIdx) {
        dispatch({ type: "MOVE_FIELD", from: dragIdx, to: toIdx });
      }
      setDragIdx(null);
      setDropTarget(null);
    },
    [dragIdx, dispatch],
  );
  useEffect7(() => {
    if (!contextMenu) return;
    const handler = (e) => {
      if (
        contextMenuRef.current &&
        !contextMenuRef.current.contains(e.target)
      ) {
        setContextMenu(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [contextMenu]);
  const addFieldOfType = (type) => {
    if (!section) return;
    const ft = FIELD_TYPES[type];
    const field = {
      key: ensureUniqueKey(type, state.working.schema.sections),
      label: ft.label,
      type,
      ...deepClone(ft.defaultConfig),
    };
    dispatch({ type: "ADD_FIELD", sectionIdx, field });
    const demoValue = ft.demoDefault(field);
    if (demoValue !== void 0) {
      dispatch({ type: "SET_DEMO", key: field.key, value: demoValue });
    }
    setPickerOpen(false);
  };
  const addQuickTemplate = (qt) => {
    if (!section) return;
    const field = deepClone(qt.field);
    field.key = ensureUniqueKey(field.key, state.working.schema.sections);
    dispatch({ type: "ADD_FIELD", sectionIdx, field });
    const ft = FIELD_TYPES[field.type];
    const demoValue = ft.demoDefault(field);
    if (demoValue !== void 0) {
      dispatch({ type: "SET_DEMO", key: field.key, value: demoValue });
    }
    setQuickOpen(false);
  };
  if (!section) {
    return /* @__PURE__ */ jsx10("div", {
      className: "panel-fields",
      children: /* @__PURE__ */ jsxs10("div", {
        className: "field-list-empty",
        children: [
          /* @__PURE__ */ jsx10("div", {
            className: "field-list-empty-icon",
            children: /* @__PURE__ */ jsx10(FieldIcon3, {
              name: "layers",
              size: 32,
              style: { color: "var(--text-tertiary)" },
            }),
          }),
          /* @__PURE__ */ jsx10("p", {
            className: "field-list-empty-title",
            children: "No section selected",
          }),
          /* @__PURE__ */ jsx10("p", {
            className: "field-list-empty-hint",
            children: "Add a section from the sidebar to get started.",
          }),
        ],
      }),
    });
  }
  const filteredFields = section.fields
    .map((f, i) => ({ field: f, index: i }))
    .filter(({ field: f }) => {
      if (!searchQuery) return true;
      return (
        f.label.toLowerCase().includes(searchQuery) ||
        f.key.toLowerCase().includes(searchQuery) ||
        f.type.includes(searchQuery)
      );
    });
  return /* @__PURE__ */ jsxs10("div", {
    className: "panel-fields",
    children: [
      /* @__PURE__ */ jsxs10("div", {
        className: "panel-fields-header",
        children: [
          /* @__PURE__ */ jsx10("h2", { children: section.label || "Fields" }),
          /* @__PURE__ */ jsxs10("div", {
            className: "panel-fields-header-actions",
            children: [
              /* @__PURE__ */ jsxs10("div", {
                className: "field-add-dropdown-wrapper",
                children: [
                  /* @__PURE__ */ jsx10("button", {
                    className: "field-add-quick-btn",
                    onClick: () => setQuickOpen(!quickOpen),
                    title: "Quick add",
                    children: /* @__PURE__ */ jsx10(FieldIcon3, {
                      name: "zap",
                      size: 14,
                    }),
                  }),
                  quickOpen &&
                    /* @__PURE__ */ jsxs10("div", {
                      className: "field-add-dropdown",
                      children: [
                        /* @__PURE__ */ jsx10("div", {
                          className: "field-add-dropdown-title",
                          children: "Quick Templates",
                        }),
                        QUICK_TEMPLATES.map((qt, i) =>
                          /* @__PURE__ */ jsxs10(
                            "button",
                            {
                              className: "field-add-dropdown-item",
                              onClick: () => addQuickTemplate(qt),
                              children: [
                                /* @__PURE__ */ jsx10(FieldIcon3, {
                                  name: qt.icon,
                                  size: 14,
                                }),
                                /* @__PURE__ */ jsx10("span", {
                                  children: qt.label,
                                }),
                              ],
                            },
                            i,
                          ),
                        ),
                      ],
                    }),
                ],
              }),
              /* @__PURE__ */ jsxs10("button", {
                className: "field-add-btn-header",
                onClick: () => setPickerOpen(true),
                title: "Add field",
                children: [
                  /* @__PURE__ */ jsx10(Plus5, { size: 15 }),
                  /* @__PURE__ */ jsx10("span", { children: "Add Field" }),
                ],
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ jsxs10("div", {
        className: "field-list",
        children: [
          filteredFields.length === 0 &&
            section.fields.length > 0 &&
            /* @__PURE__ */ jsxs10("div", {
              className: "field-list-no-results",
              children: ['No fields match "', state.ui.searchQuery, '"'],
            }),
          filteredFields.length === 0 &&
            section.fields.length === 0 &&
            /* @__PURE__ */ jsxs10("div", {
              className: "field-list-empty-section",
              children: [
                /* @__PURE__ */ jsx10("p", {
                  children: "This section is empty.",
                }),
                /* @__PURE__ */ jsxs10("button", {
                  className: "field-add-inline",
                  onClick: () => setPickerOpen(true),
                  children: [
                    /* @__PURE__ */ jsx10(Plus5, { size: 14 }),
                    " Add your first field",
                  ],
                }),
              ],
            }),
          filteredFields.map(({ field: f, index: i }) => {
            const ft = FIELD_TYPES[f.type] || {
              label: f.type,
              icon: "help-circle",
            };
            const isActive = i === selectedField;
            const hasConditional = conditionalsSet.has(f.key);
            return /* @__PURE__ */ jsxs10(
              "div",
              {
                className: `field-card${isActive ? " active" : ""}`,
                onClick: () => setEditingFieldIdx(i),
                onMouseEnter: () => setHoveredIdx(i),
                onMouseLeave: () => setHoveredIdx(null),
                draggable: true,
                onDragStart: () => onDragStart(i),
                onDragEnd,
                onDragOver: (e) => onDragOver(e, i),
                onDrop: (e) => onDrop(e, i),
                style: {
                  opacity: dragIdx === i ? 0.35 : 1,
                  borderTop:
                    dropTarget === i && dragIdx !== i
                      ? "2px solid var(--accent)"
                      : void 0,
                },
                children: [
                  /* @__PURE__ */ jsx10("span", {
                    className: `drag-handle${hoveredIdx === i || isActive ? " visible" : ""}`,
                    children: /* @__PURE__ */ jsx10(GripVertical2, {
                      size: 12,
                    }),
                  }),
                  /* @__PURE__ */ jsxs10("div", {
                    className: "field-card-body",
                    children: [
                      /* @__PURE__ */ jsxs10("div", {
                        className: "field-card-top",
                        children: [
                          /* @__PURE__ */ jsx10("span", {
                            className: `field-icon-badge${isActive ? " active" : ""}`,
                            children: /* @__PURE__ */ jsx10(FieldIcon3, {
                              name: ft.icon,
                              size: 13,
                            }),
                          }),
                          /* @__PURE__ */ jsxs10("div", {
                            className: "field-card-label-group",
                            children: [
                              /* @__PURE__ */ jsxs10("span", {
                                className: "field-card-label",
                                children: [
                                  f.label || "Untitled",
                                  f.required &&
                                    /* @__PURE__ */ jsx10("span", {
                                      className: "field-required-asterisk",
                                      children: "*",
                                    }),
                                ],
                              }),
                              /* @__PURE__ */ jsx10("span", {
                                className: "field-card-meta",
                                children: f.key,
                              }),
                            ],
                          }),
                          hasConditional &&
                            /* @__PURE__ */ jsx10("span", {
                              className: "field-conditional-badge",
                              title: "Has conditional logic",
                              children: /* @__PURE__ */ jsx10(GitBranch2, {
                                size: 12,
                              }),
                            }),
                          /* @__PURE__ */ jsx10("span", {
                            className: "field-type-pill",
                            children: ft.label,
                          }),
                          /* @__PURE__ */ jsx10("button", {
                            className: `field-menu-btn${hoveredIdx === i || isActive ? " visible" : ""}`,
                            onClick: (e) => {
                              e.stopPropagation();
                              const rect =
                                e.currentTarget.getBoundingClientRect();
                              setContextMenu({
                                idx: i,
                                x: rect.right + 4,
                                y: rect.top,
                              });
                            },
                            children: /* @__PURE__ */ jsx10(MoreHorizontal2, {
                              size: 15,
                            }),
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsx10(FieldPreview, {
                        field: f,
                        quizQuestions:
                          f.type === "quiz"
                            ? state.working.demo[f.key]
                            : void 0,
                        onAddQuizQuestion:
                          f.type === "quiz"
                            ? () => {
                                const existing =
                                  state.working.demo[f.key] || [];
                                dispatch({
                                  type: "SET_DEMO",
                                  key: f.key,
                                  value: [
                                    ...existing,
                                    {
                                      id:
                                        "q" +
                                        Math.random().toString(36).slice(2, 8),
                                      text: "",
                                      options: [
                                        "Option 1",
                                        "Option 2",
                                        "Option 3",
                                      ],
                                      correctIndex: 0,
                                    },
                                  ],
                                });
                              }
                            : void 0,
                      }),
                    ],
                  }),
                ],
              },
              f.key + i,
            );
          }),
        ],
      }),
      section.fields.length > 0 &&
        /* @__PURE__ */ jsx10("div", {
          className: "add-field-area",
          children: /* @__PURE__ */ jsxs10("button", {
            className: "add-field-btn",
            onClick: () => setPickerOpen(true),
            children: [
              /* @__PURE__ */ jsx10(Plus5, { size: 14 }),
              " Add Field",
            ],
          }),
        }),
      /* @__PURE__ */ jsx10(ConditionalsBuilder, {}),
      contextMenu &&
        /* @__PURE__ */ jsxs10("div", {
          ref: contextMenuRef,
          className: "context-menu",
          style: {
            position: "fixed",
            left: contextMenu.x,
            top: contextMenu.y,
            zIndex: 9999,
          },
          children: [
            /* @__PURE__ */ jsxs10("button", {
              className: "context-menu-item",
              onClick: () => {
                setEditingFieldIdx(contextMenu.idx);
                setContextMenu(null);
              },
              children: [/* @__PURE__ */ jsx10(Pencil2, { size: 13 }), " Edit"],
            }),
            /* @__PURE__ */ jsxs10("button", {
              className: "context-menu-item",
              onClick: () => {
                dispatch({
                  type: "DUPLICATE_FIELD",
                  sectionIdx,
                  fieldIdx: contextMenu.idx,
                });
                setContextMenu(null);
              },
              children: [
                /* @__PURE__ */ jsx10(Copy2, { size: 13 }),
                " Duplicate",
              ],
            }),
            /* @__PURE__ */ jsx10("div", {
              className: "context-menu-separator",
            }),
            contextMenu.idx > 0 &&
              /* @__PURE__ */ jsxs10("button", {
                className: "context-menu-item",
                onClick: () => {
                  dispatch({
                    type: "MOVE_FIELD",
                    from: contextMenu.idx,
                    to: contextMenu.idx - 1,
                  });
                  setContextMenu(null);
                },
                children: [
                  /* @__PURE__ */ jsx10(ChevronUp, { size: 13 }),
                  " Move Up",
                ],
              }),
            section &&
              contextMenu.idx < section.fields.length - 1 &&
              /* @__PURE__ */ jsxs10("button", {
                className: "context-menu-item",
                onClick: () => {
                  dispatch({
                    type: "MOVE_FIELD",
                    from: contextMenu.idx,
                    to: contextMenu.idx + 2,
                  });
                  setContextMenu(null);
                },
                children: [
                  /* @__PURE__ */ jsx10(ChevronDown4, { size: 13 }),
                  " Move Down",
                ],
              }),
            (contextMenu.idx > 0 ||
              (section && contextMenu.idx < section.fields.length - 1)) &&
              /* @__PURE__ */ jsx10("div", {
                className: "context-menu-separator",
              }),
            /* @__PURE__ */ jsxs10("button", {
              className: "context-menu-item danger",
              onClick: () => {
                dispatch({
                  type: "DELETE_FIELD",
                  sectionIdx,
                  fieldIdx: contextMenu.idx,
                });
                setContextMenu(null);
              },
              children: [
                /* @__PURE__ */ jsx10(Trash24, { size: 13 }),
                " Delete",
              ],
            }),
          ],
        }),
      /* @__PURE__ */ jsx10(TypePicker, {
        open: pickerOpen,
        onClose: () => setPickerOpen(false),
        onSelect: addFieldOfType,
      }),
      editingFieldIdx !== null &&
        section?.fields[editingFieldIdx] &&
        /* @__PURE__ */ jsx10(FieldEditModal, {
          field: section.fields[editingFieldIdx],
          demoValue: state.working.demo[section.fields[editingFieldIdx].key],
          onSave: (updatedField, updatedDemo) => {
            dispatch({
              type: "UPDATE_FIELD",
              sectionIdx,
              fieldIdx: editingFieldIdx,
              field: updatedField,
            });
            if (updatedDemo !== void 0) {
              dispatch({
                type: "SET_DEMO",
                key: updatedField.key,
                value: updatedDemo,
              });
            }
          },
          onClose: () => setEditingFieldIdx(null),
        }),
    ],
  });
}

// scripts/studio/components/DemoTab.tsx
import {
  RotateCcw,
  Plus as Plus6,
  Trash2 as Trash25,
  Link2,
  Clock,
  Calendar,
  ImagePlus,
} from "lucide-react";
import { jsx as jsx11, jsxs as jsxs11 } from "react/jsx-runtime";
function AudioEditor({ value, onChange }) {
  const v = value || { url: "" };
  return /* @__PURE__ */ jsxs11("div", {
    className: "demo-audio-editor",
    children: [
      /* @__PURE__ */ jsxs11("div", {
        className: "demo-audio-row",
        children: [
          /* @__PURE__ */ jsx11(Link2, {
            size: 13,
            style: {
              color: "var(--text-tertiary)",
              flexShrink: 0,
              marginTop: 2,
            },
          }),
          /* @__PURE__ */ jsx11("input", {
            className: "form-input",
            value: v.url || "",
            onChange: (e) => onChange({ ...v, url: e.target.value }),
            placeholder: "Audio URL (mp3, m4a, \u2026)",
            style: { flex: 1 },
          }),
        ],
      }),
      /* @__PURE__ */ jsxs11("div", {
        className: "demo-audio-trim",
        children: [
          /* @__PURE__ */ jsxs11("div", {
            className: "demo-audio-trim-field",
            children: [
              /* @__PURE__ */ jsx11(Clock, {
                size: 11,
                style: { color: "var(--text-tertiary)" },
              }),
              /* @__PURE__ */ jsx11("span", {
                className: "demo-audio-trim-label",
                children: "Start",
              }),
              /* @__PURE__ */ jsx11("input", {
                className: "form-input",
                type: "number",
                min: 0,
                step: 0.1,
                value: v.start ?? "",
                onChange: (e) =>
                  onChange({
                    ...v,
                    start: e.target.value ? Number(e.target.value) : void 0,
                  }),
                placeholder: "0",
                style: { width: 72 },
              }),
              /* @__PURE__ */ jsx11("span", {
                className: "demo-audio-trim-unit",
                children: "s",
              }),
            ],
          }),
          /* @__PURE__ */ jsxs11("div", {
            className: "demo-audio-trim-field",
            children: [
              /* @__PURE__ */ jsx11(Clock, {
                size: 11,
                style: { color: "var(--text-tertiary)" },
              }),
              /* @__PURE__ */ jsx11("span", {
                className: "demo-audio-trim-label",
                children: "End",
              }),
              /* @__PURE__ */ jsx11("input", {
                className: "form-input",
                type: "number",
                min: 0,
                step: 0.1,
                value: v.end ?? "",
                onChange: (e) =>
                  onChange({
                    ...v,
                    end: e.target.value ? Number(e.target.value) : void 0,
                  }),
                placeholder: "\u2014",
                style: { width: 72 },
              }),
              /* @__PURE__ */ jsx11("span", {
                className: "demo-audio-trim-unit",
                children: "s",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function DateEditor({ value, onChange }) {
  return /* @__PURE__ */ jsxs11("div", {
    className: "demo-date-editor",
    children: [
      /* @__PURE__ */ jsx11(Calendar, {
        size: 13,
        style: { color: "var(--text-tertiary)", flexShrink: 0 },
      }),
      /* @__PURE__ */ jsx11("input", {
        className: "form-input",
        type: "date",
        value: value || "",
        onChange: (e) => onChange(e.target.value),
        style: { flex: 1 },
      }),
    ],
  });
}
function ImageArrayEditor({ value, max, onChange }) {
  const images = Array.isArray(value) ? value : [];
  const canAdd = !max || images.length < max;
  return /* @__PURE__ */ jsxs11("div", {
    className: "demo-image-array",
    children: [
      images.map((url, i) =>
        /* @__PURE__ */ jsxs11(
          "div",
          {
            className: "demo-image-array-item",
            children: [
              /* @__PURE__ */ jsx11("div", {
                className: "demo-image-array-thumb",
                children: url
                  ? /* @__PURE__ */ jsx11("img", {
                      src: url,
                      alt: "",
                      onError: (e) => {
                        e.target.style.display = "none";
                      },
                    })
                  : /* @__PURE__ */ jsx11(ImagePlus, {
                      size: 16,
                      style: { color: "var(--text-tertiary)" },
                    }),
              }),
              /* @__PURE__ */ jsx11("input", {
                className: "form-input",
                value: url,
                onChange: (e) => {
                  const next = [...images];
                  next[i] = e.target.value;
                  onChange(next);
                },
                placeholder: `Image URL ${i + 1}`,
                style: { flex: 1 },
              }),
              /* @__PURE__ */ jsx11("button", {
                className: "icon-btn",
                onClick: () => onChange(images.filter((_, j) => j !== i)),
                title: "Remove",
                children: /* @__PURE__ */ jsx11(Trash25, { size: 12 }),
              }),
            ],
          },
          i,
        ),
      ),
      canAdd &&
        /* @__PURE__ */ jsxs11("button", {
          className: "demo-image-array-add",
          onClick: () => onChange([...images, ""]),
          children: [
            /* @__PURE__ */ jsx11(Plus6, { size: 13 }),
            " Add Image ",
            max ? `(${images.length}/${max})` : "",
          ],
        }),
    ],
  });
}
function GroupEditor({ value, subFields, onChange }) {
  const obj =
    typeof value === "object" && value && !Array.isArray(value) ? value : {};
  return /* @__PURE__ */ jsxs11("div", {
    className: "demo-group-editor",
    children: [
      subFields.map((sf) =>
        /* @__PURE__ */ jsxs11(
          "div",
          {
            className: "demo-group-field",
            children: [
              /* @__PURE__ */ jsxs11("label", {
                className: "demo-group-field-label",
                children: [
                  sf.label,
                  " ",
                  /* @__PURE__ */ jsx11("span", {
                    className: "demo-group-field-key",
                    children: sf.key,
                  }),
                ],
              }),
              /* @__PURE__ */ jsx11(FieldInput, {
                field: sf,
                value: obj[sf.key],
                onChange: (v) => onChange({ ...obj, [sf.key]: v }),
              }),
            ],
          },
          sf.key,
        ),
      ),
      subFields.length === 0 &&
        /* @__PURE__ */ jsx11("div", {
          className: "demo-group-empty",
          children: "No sub-fields defined",
        }),
    ],
  });
}
function GroupArrayEditor({ value, subFields, onChange }) {
  const items = Array.isArray(value) ? value : [{}];
  const updateItem = (idx, item) => {
    const next = [...items];
    next[idx] = item;
    onChange(next);
  };
  return /* @__PURE__ */ jsxs11("div", {
    className: "demo-group-array",
    children: [
      items.map((item, i) =>
        /* @__PURE__ */ jsxs11(
          "div",
          {
            className: "demo-group-array-item",
            children: [
              /* @__PURE__ */ jsxs11("div", {
                className: "demo-group-array-item-header",
                children: [
                  /* @__PURE__ */ jsxs11("span", {
                    className: "demo-group-array-item-num",
                    children: ["Item ", i + 1],
                  }),
                  /* @__PURE__ */ jsx11("button", {
                    className: "icon-btn",
                    onClick: () => onChange(items.filter((_, j) => j !== i)),
                    title: "Remove item",
                    children: /* @__PURE__ */ jsx11(Trash25, { size: 12 }),
                  }),
                ],
              }),
              /* @__PURE__ */ jsx11(GroupEditor, {
                value: item,
                subFields,
                onChange: (v) => updateItem(i, v),
              }),
            ],
          },
          i,
        ),
      ),
      /* @__PURE__ */ jsxs11("button", {
        className: "demo-group-array-add",
        onClick: () => onChange([...items, {}]),
        children: [/* @__PURE__ */ jsx11(Plus6, { size: 13 }), " Add Item"],
      }),
    ],
  });
}
function FieldInput({ field, value, onChange }) {
  if (field.type === "toggle") {
    return /* @__PURE__ */ jsxs11("label", {
      className: "toggle-switch",
      children: [
        /* @__PURE__ */ jsx11("input", {
          type: "checkbox",
          checked: !!value,
          onChange: (e) => onChange(e.target.checked),
        }),
        /* @__PURE__ */ jsx11("span", { className: "toggle-switch-slider" }),
      ],
    });
  }
  if (field.type === "color") {
    return /* @__PURE__ */ jsxs11("div", {
      className: "color-input-row",
      children: [
        /* @__PURE__ */ jsx11("input", {
          type: "color",
          value: value || "#000000",
          onChange: (e) => onChange(e.target.value),
        }),
        /* @__PURE__ */ jsx11("input", {
          className: "form-input",
          value: value || "",
          onChange: (e) => onChange(e.target.value),
          style: { flex: 1 },
        }),
      ],
    });
  }
  if (field.type === "number") {
    return /* @__PURE__ */ jsx11("input", {
      className: "form-input",
      type: "number",
      value: value ?? "",
      onChange: (e) => onChange(e.target.value ? Number(e.target.value) : ""),
    });
  }
  if (field.type === "select") {
    return /* @__PURE__ */ jsx11("select", {
      className: "form-input",
      value: value || "",
      onChange: (e) => onChange(e.target.value),
      children: (field.options || []).map((opt) =>
        /* @__PURE__ */ jsx11("option", { value: opt, children: opt }, opt),
      ),
    });
  }
  if (field.type === "date") {
    return /* @__PURE__ */ jsx11(DateEditor, { value: value || "", onChange });
  }
  if (field.type === "audio") {
    return /* @__PURE__ */ jsx11(AudioEditor, { value, onChange });
  }
  if (field.type === "image_array") {
    return /* @__PURE__ */ jsx11(ImageArrayEditor, {
      value,
      max: field.max,
      onChange,
    });
  }
  if (field.type === "textarea") {
    return /* @__PURE__ */ jsx11("textarea", {
      className: "form-input",
      rows: 3,
      value: value ?? "",
      onChange: (e) => onChange(e.target.value),
    });
  }
  return /* @__PURE__ */ jsx11("input", {
    className: "form-input",
    value: value ?? "",
    onChange: (e) => onChange(e.target.value),
    placeholder:
      field.type === "image"
        ? "Image URL"
        : field.type === "video"
          ? "Video URL"
          : "",
  });
}
function DemoTab() {
  const { state, dispatch } = useStudio();
  const demo = state.working.demo;
  const sections = state.working.schema.sections;
  const allFields = sections.flatMap((s) =>
    s.fields.map((f) => ({ ...f, sectionLabel: s.label })),
  );
  const resetField = (key, type) => {
    const ft = FIELD_TYPES[type];
    if (!ft) return;
    const field = allFields.find((f) => f.key === key);
    if (!field) return;
    const defaultVal = ft.demoDefault(field);
    dispatch({ type: "SET_DEMO", key, value: defaultVal });
  };
  const resetAll = () => {
    const newDemo = {};
    for (const f of allFields) {
      const ft = FIELD_TYPES[f.type];
      if (ft) newDemo[f.key] = ft.demoDefault(f);
    }
    dispatch({ type: "SET_DEMO_ALL", demo: newDemo });
  };
  if (allFields.length === 0) {
    return /* @__PURE__ */ jsx11("div", {
      className: "demo-tab",
      children: /* @__PURE__ */ jsx11("div", {
        className: "demo-tab-empty",
        children: /* @__PURE__ */ jsx11("p", {
          children: "No fields yet \u2014 add fields in the Schema tab first",
        }),
      }),
    });
  }
  return /* @__PURE__ */ jsxs11("div", {
    className: "demo-tab",
    children: [
      /* @__PURE__ */ jsxs11("div", {
        className: "demo-tab-header",
        children: [
          /* @__PURE__ */ jsx11("h2", { children: "Demo Data" }),
          /* @__PURE__ */ jsxs11("button", {
            className: "btn-secondary",
            onClick: resetAll,
            children: [
              /* @__PURE__ */ jsx11(RotateCcw, { size: 12 }),
              " Reset All",
            ],
          }),
        ],
      }),
      /* @__PURE__ */ jsx11("p", {
        className: "demo-tab-desc",
        children:
          "Preview values used when rendering the template. These are saved to demo.json.",
      }),
      /* @__PURE__ */ jsx11("div", {
        className: "demo-fields",
        children: allFields.map((f) => {
          const value = demo[f.key];
          return /* @__PURE__ */ jsxs11(
            "div",
            {
              className: "demo-field",
              children: [
                /* @__PURE__ */ jsxs11("div", {
                  className: "demo-field-header",
                  children: [
                    /* @__PURE__ */ jsxs11("div", {
                      children: [
                        /* @__PURE__ */ jsx11("div", {
                          className: "demo-field-label",
                          children: f.label,
                        }),
                        /* @__PURE__ */ jsxs11("div", {
                          className: "demo-field-meta",
                          children: [
                            f.key,
                            " \xB7 ",
                            f.type,
                            " \xB7 ",
                            f.sectionLabel,
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsx11("button", {
                      className: "icon-btn",
                      onClick: () => resetField(f.key, f.type),
                      title: "Reset to default",
                      children: /* @__PURE__ */ jsx11(RotateCcw, { size: 12 }),
                    }),
                  ],
                }),
                /* @__PURE__ */ jsx11("div", {
                  className: "demo-field-input",
                  children:
                    f.type === "quiz"
                      ? /* @__PURE__ */ jsx11(QuizBuilder, {
                          questions: value || [],
                          onChange: (questions) =>
                            dispatch({
                              type: "SET_DEMO",
                              key: f.key,
                              value: questions,
                            }),
                          config: f.config || {},
                        })
                      : f.type === "group"
                        ? /* @__PURE__ */ jsx11(GroupEditor, {
                            value,
                            subFields: f.fields || [],
                            onChange: (v) =>
                              dispatch({
                                type: "SET_DEMO",
                                key: f.key,
                                value: v,
                              }),
                          })
                        : f.type === "group_array"
                          ? /* @__PURE__ */ jsx11(GroupArrayEditor, {
                              value,
                              subFields: f.fields || [],
                              onChange: (v) =>
                                dispatch({
                                  type: "SET_DEMO",
                                  key: f.key,
                                  value: v,
                                }),
                            })
                          : /* @__PURE__ */ jsx11(FieldInput, {
                              field: f,
                              value,
                              onChange: (v) =>
                                dispatch({
                                  type: "SET_DEMO",
                                  key: f.key,
                                  value: v,
                                }),
                            }),
                }),
              ],
            },
            f.key,
          );
        }),
      }),
    ],
  });
}

// scripts/studio/components/ManifestTab.tsx
import { jsx as jsx12, jsxs as jsxs12 } from "react/jsx-runtime";
function ManifestTab() {
  const { state, dispatch } = useStudio();
  const manifest = state.working.manifest;
  const setManifest = (patch) => {
    dispatch({ type: "SET_MANIFEST", manifest: { ...manifest, ...patch } });
  };
  const toggleDep = (name) => {
    const deps = { ...manifest.dependencies };
    if (deps[name]) {
      delete deps[name];
    } else {
      deps[name] = true;
    }
    setManifest({ dependencies: deps });
  };
  return /* @__PURE__ */ jsxs12("div", {
    className: "manifest-tab",
    children: [
      /* @__PURE__ */ jsx12("div", {
        className: "manifest-tab-header",
        children: /* @__PURE__ */ jsx12("h2", { children: "Manifest" }),
      }),
      /* @__PURE__ */ jsx12("p", {
        className: "manifest-tab-desc",
        children:
          "Configuration for how the template is loaded and rendered. Saved to manifest.json.",
      }),
      /* @__PURE__ */ jsxs12("div", {
        className: "manifest-sections",
        children: [
          /* @__PURE__ */ jsxs12("div", {
            className: "manifest-section",
            children: [
              /* @__PURE__ */ jsx12("h3", { children: "Entry Point" }),
              /* @__PURE__ */ jsxs12("div", {
                className: "form-group",
                children: [
                  /* @__PURE__ */ jsx12("label", {
                    className: "form-label",
                    children: "Entry file",
                  }),
                  /* @__PURE__ */ jsx12("input", {
                    className: "form-input font-mono",
                    value: manifest.entry,
                    onChange: (e) => setManifest({ entry: e.target.value }),
                    placeholder: "index.tsx",
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ jsxs12("div", {
            className: "manifest-section",
            children: [
              /* @__PURE__ */ jsx12("h3", { children: "Screens" }),
              /* @__PURE__ */ jsx12("p", {
                className: "manifest-section-desc",
                children:
                  "Named screens/routes within this template (e.g. gate, main, guestbook)",
              }),
              /* @__PURE__ */ jsx12(TagInput, {
                values: manifest.screens,
                onChange: (screens) => setManifest({ screens }),
                placeholder: "Type screen name + Enter",
              }),
            ],
          }),
          /* @__PURE__ */ jsxs12("div", {
            className: "manifest-section",
            children: [
              /* @__PURE__ */ jsx12("h3", { children: "Dependencies" }),
              /* @__PURE__ */ jsx12("p", {
                className: "manifest-section-desc",
                children: "npm packages this template needs at runtime",
              }),
              /* @__PURE__ */ jsx12("div", {
                className: "dep-grid",
                children: AVAILABLE_DEPS.map((dep) =>
                  /* @__PURE__ */ jsxs12(
                    "label",
                    {
                      className: `dep-card ${manifest.dependencies[dep.name] ? "active" : ""}`,
                      children: [
                        /* @__PURE__ */ jsx12("input", {
                          type: "checkbox",
                          checked: !!manifest.dependencies[dep.name],
                          onChange: () => toggleDep(dep.name),
                        }),
                        /* @__PURE__ */ jsxs12("div", {
                          children: [
                            /* @__PURE__ */ jsx12("div", {
                              className: "dep-name",
                              children: dep.name,
                            }),
                            /* @__PURE__ */ jsx12("div", {
                              className: "dep-desc",
                              children: dep.desc,
                            }),
                          ],
                        }),
                      ],
                    },
                    dep.name,
                  ),
                ),
              }),
            ],
          }),
          /* @__PURE__ */ jsxs12("div", {
            className: "manifest-section",
            children: [
              /* @__PURE__ */ jsx12("h3", { children: "Fonts" }),
              /* @__PURE__ */ jsx12("p", {
                className: "manifest-section-desc",
                children:
                  'Google Font names to load (e.g. "Dancing Script", "Playfair Display")',
              }),
              /* @__PURE__ */ jsx12(TagInput, {
                values: manifest.fonts,
                onChange: (fonts) => setManifest({ fonts }),
                placeholder: "Type font name + Enter",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

// scripts/studio/components/common/Toast.tsx
import { useEffect as useEffect8 } from "react";
import { jsx as jsx13 } from "react/jsx-runtime";
function Toast() {
  const { state, dispatch } = useStudio();
  const toast = state.toast;
  useEffect8(() => {
    if (!toast) return;
    const timer = setTimeout(() => dispatch({ type: "HIDE_TOAST" }), 2500);
    return () => clearTimeout(timer);
  }, [toast, dispatch]);
  if (!toast) return null;
  return /* @__PURE__ */ jsx13("div", {
    className: `toast visible ${toast.type}`,
    children: toast.message,
  });
}

// scripts/studio/App.tsx
import {
  Fragment as Fragment4,
  jsx as jsx14,
  jsxs as jsxs13,
} from "react/jsx-runtime";
var config = window.__STUDIO_CONFIG__ ?? { slug: "unknown", port: 4321 };
var initialState = {
  loaded: { schema: DEFAULT_SCHEMA, demo: {}, manifest: DEFAULT_MANIFEST },
  working: { schema: DEFAULT_SCHEMA, demo: {}, manifest: DEFAULT_MANIFEST },
  ui: {
    selectedSection: 0,
    selectedField: -1,
    activeTab: "schema",
    theme: localStorage.getItem("studio-theme") || "light",
    searchQuery: "",
    showPreview: false,
  },
  toast: null,
};
function ResizeHandle({ onResize, side }) {
  const dragging = useRef8(false);
  const startX = useRef8(0);
  const onMouseDown = useCallback4(
    (e) => {
      e.preventDefault();
      dragging.current = true;
      startX.current = e.clientX;
      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";
      const onMouseMove = (ev) => {
        if (!dragging.current) return;
        const delta = ev.clientX - startX.current;
        startX.current = ev.clientX;
        onResize(side === "left" ? delta : -delta);
      };
      const onMouseUp = () => {
        dragging.current = false;
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
      };
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    },
    [onResize, side],
  );
  return /* @__PURE__ */ jsx14("div", {
    className: "panel-resize-handle",
    onMouseDown,
  });
}
function Studio() {
  const [state, dispatch] = useReducer(studioReducer, initialState);
  const [loading, setLoading] = useState9(true);
  const [sectionsCollapsed, setSectionsCollapsed] = useState9(false);
  const [sectionsWidth, setSectionsWidth] = useState9(220);
  useEffect9(() => {
    const saved = localStorage.getItem("studio-theme");
    if (saved === "dark")
      document.documentElement.setAttribute("data-theme", "dark");
  }, []);
  useEffect9(() => {
    loadConfig()
      .then((data) => {
        dispatch({ type: "LOADED", data });
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);
  const handleResizeSections = useCallback4((delta) => {
    setSectionsWidth((w) => Math.max(160, Math.min(360, w + delta)));
  }, []);
  useEffect9(() => {
    const onKey = (e) => {
      const tag = e.target.tagName;
      const isInput = tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
      if ((e.metaKey || e.ctrlKey) && e.key === "s") {
        e.preventDefault();
        document.querySelector(".header-save-btn")?.click();
        return;
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "d" && !isInput) {
        e.preventDefault();
        if (state.ui.selectedField >= 0) {
          dispatch({
            type: "DUPLICATE_FIELD",
            sectionIdx: state.ui.selectedSection,
            fieldIdx: state.ui.selectedField,
          });
        }
        return;
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "b" && !isInput) {
        e.preventDefault();
        setSectionsCollapsed((c) => !c);
        return;
      }
      if (isInput) return;
      if (e.key === "Escape") {
        dispatch({ type: "SELECT_FIELD", idx: -1 });
        return;
      }
      if (
        (e.key === "Delete" || e.key === "Backspace") &&
        state.ui.selectedField >= 0
      ) {
        dispatch({
          type: "DELETE_FIELD",
          sectionIdx: state.ui.selectedSection,
          fieldIdx: state.ui.selectedField,
        });
        return;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [state.ui.selectedField, state.ui.selectedSection]);
  if (loading) {
    return /* @__PURE__ */ jsx14("div", {
      className: "studio-shell",
      children: /* @__PURE__ */ jsxs13("div", {
        className: "studio-loading",
        children: [
          /* @__PURE__ */ jsx14("div", { className: "loading-spinner" }),
          /* @__PURE__ */ jsx14("p", {
            children: "Loading template config...",
          }),
        ],
      }),
    });
  }
  const isSchemaTab = state.ui.activeTab === "schema";
  return /* @__PURE__ */ jsx14(StudioContext.Provider, {
    value: { state, dispatch },
    children: /* @__PURE__ */ jsxs13("div", {
      className: "studio-shell",
      children: [
        /* @__PURE__ */ jsx14(Header, { config }),
        /* @__PURE__ */ jsx14("div", {
          className: "studio-main",
          children: isSchemaTab
            ? /* @__PURE__ */ jsxs13(Fragment4, {
                children: [
                  /* @__PURE__ */ jsx14("div", {
                    className: `panel-sections${sectionsCollapsed ? " panel-collapsed" : ""}`,
                    style: !sectionsCollapsed
                      ? { width: sectionsWidth, minWidth: sectionsWidth }
                      : void 0,
                    children: /* @__PURE__ */ jsx14(SectionList, {}),
                  }),
                  !sectionsCollapsed &&
                    /* @__PURE__ */ jsx14(ResizeHandle, {
                      onResize: handleResizeSections,
                      side: "left",
                    }),
                  /* @__PURE__ */ jsx14(FieldList, {}),
                ],
              })
            : state.ui.activeTab === "demo"
              ? /* @__PURE__ */ jsx14(DemoTab, {})
              : /* @__PURE__ */ jsx14(ManifestTab, {}),
        }),
        /* @__PURE__ */ jsx14(Footer, {}),
        /* @__PURE__ */ jsx14(Toast, {}),
      ],
    }),
  });
}
var el = document.getElementById("studio-root");
if (el) {
  createRoot(el).render(/* @__PURE__ */ jsx14(Studio, {}));
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic2NyaXB0cy9zdHVkaW8vQXBwLnRzeCIsICJzY3JpcHRzL3N0dWRpby9zdHlsZXMuY3NzIiwgInNjcmlwdHMvc3R1ZGlvL3N0YXRlLnRzIiwgInNjcmlwdHMvc3R1ZGlvL3V0aWxzLnRzIiwgInNjcmlwdHMvc3R1ZGlvL2FwaS50cyIsICJzY3JpcHRzL3N0dWRpby9jb21wb25lbnRzL0hlYWRlci50c3giLCAic2NyaXB0cy9zdHVkaW8vY29tcG9uZW50cy9Gb290ZXIudHN4IiwgInNjcmlwdHMvc3R1ZGlvL2NvbXBvbmVudHMvU2VjdGlvbkxpc3QudHN4IiwgInNjcmlwdHMvc3R1ZGlvL2NvbXBvbmVudHMvY29tbW9uL01vZGFsLnRzeCIsICJzY3JpcHRzL3N0dWRpby9jb21wb25lbnRzL0ZpZWxkTGlzdC50c3giLCAic2NyaXB0cy9zdHVkaW8vZmllbGQtcmVnaXN0cnkudHMiLCAic2NyaXB0cy9zdHVkaW8vY29uc3RhbnRzLnRzIiwgInNjcmlwdHMvc3R1ZGlvL2NvbXBvbmVudHMvVHlwZVBpY2tlci50c3giLCAic2NyaXB0cy9zdHVkaW8vY29tcG9uZW50cy9Db25kaXRpb25hbHNCdWlsZGVyLnRzeCIsICJzY3JpcHRzL3N0dWRpby9jb21wb25lbnRzL0ZpZWxkRWRpdE1vZGFsLnRzeCIsICJzY3JpcHRzL3N0dWRpby9jb21wb25lbnRzL1F1aXpCdWlsZGVyLnRzeCIsICJzY3JpcHRzL3N0dWRpby9jb21wb25lbnRzL2NvbW1vbi9UYWdJbnB1dC50c3giLCAic2NyaXB0cy9zdHVkaW8vY29tcG9uZW50cy9EZW1vVGFiLnRzeCIsICJzY3JpcHRzL3N0dWRpby9jb21wb25lbnRzL01hbmlmZXN0VGFiLnRzeCIsICJzY3JpcHRzL3N0dWRpby9jb21wb25lbnRzL2NvbW1vbi9Ub2FzdC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tICdyZWFjdC1kb20vY2xpZW50J1xuaW1wb3J0IHsgdXNlUmVkdWNlciwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnXG5pbXBvcnQgeyBzdHVkaW9SZWR1Y2VyLCBTdHVkaW9Db250ZXh0LCBERUZBVUxUX1NDSEVNQSwgREVGQVVMVF9NQU5JRkVTVCB9IGZyb20gJy4vc3RhdGUnXG5pbXBvcnQgdHlwZSB7IFN0dWRpb1N0YXRlIH0gZnJvbSAnLi9zdGF0ZSdcbmltcG9ydCB0eXBlIHsgU3R1ZGlvQ29uZmlnIH0gZnJvbSAnLi90eXBlcydcbmltcG9ydCB7IGxvYWRDb25maWcgfSBmcm9tICcuL2FwaSdcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvRm9vdGVyJ1xuaW1wb3J0IHsgU2VjdGlvbkxpc3QgfSBmcm9tICcuL2NvbXBvbmVudHMvU2VjdGlvbkxpc3QnXG5pbXBvcnQgeyBGaWVsZExpc3QgfSBmcm9tICcuL2NvbXBvbmVudHMvRmllbGRMaXN0J1xuaW1wb3J0IHsgRGVtb1RhYiB9IGZyb20gJy4vY29tcG9uZW50cy9EZW1vVGFiJ1xuaW1wb3J0IHsgTWFuaWZlc3RUYWIgfSBmcm9tICcuL2NvbXBvbmVudHMvTWFuaWZlc3RUYWInXG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gJy4vY29tcG9uZW50cy9jb21tb24vVG9hc3QnXG5cbmNvbnN0IGNvbmZpZzogU3R1ZGlvQ29uZmlnID0gKHdpbmRvdyBhcyBhbnkpLl9fU1RVRElPX0NPTkZJR19fID8/IHsgc2x1ZzogJ3Vua25vd24nLCBwb3J0OiA0MzIxIH1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBTdHVkaW9TdGF0ZSA9IHtcbiAgbG9hZGVkOiB7IHNjaGVtYTogREVGQVVMVF9TQ0hFTUEsIGRlbW86IHt9LCBtYW5pZmVzdDogREVGQVVMVF9NQU5JRkVTVCB9LFxuICB3b3JraW5nOiB7IHNjaGVtYTogREVGQVVMVF9TQ0hFTUEsIGRlbW86IHt9LCBtYW5pZmVzdDogREVGQVVMVF9NQU5JRkVTVCB9LFxuICB1aToge1xuICAgIHNlbGVjdGVkU2VjdGlvbjogMCxcbiAgICBzZWxlY3RlZEZpZWxkOiAtMSxcbiAgICBhY3RpdmVUYWI6ICdzY2hlbWEnLFxuICAgIHRoZW1lOiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0dWRpby10aGVtZScpIGFzICdsaWdodCcgfCAnZGFyaycpIHx8ICdsaWdodCcsXG4gICAgc2VhcmNoUXVlcnk6ICcnLFxuICAgIHNob3dQcmV2aWV3OiBmYWxzZSxcbiAgfSxcbiAgdG9hc3Q6IG51bGwsXG59XG5cbmZ1bmN0aW9uIFJlc2l6ZUhhbmRsZSh7IG9uUmVzaXplLCBzaWRlIH06IHsgb25SZXNpemU6IChkZWx0YTogbnVtYmVyKSA9PiB2b2lkOyBzaWRlOiAnbGVmdCcgfCAncmlnaHQnIH0pIHtcbiAgY29uc3QgZHJhZ2dpbmcgPSB1c2VSZWYoZmFsc2UpXG4gIGNvbnN0IHN0YXJ0WCA9IHVzZVJlZigwKVxuXG4gIGNvbnN0IG9uTW91c2VEb3duID0gdXNlQ2FsbGJhY2soKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBkcmFnZ2luZy5jdXJyZW50ID0gdHJ1ZVxuICAgIHN0YXJ0WC5jdXJyZW50ID0gZS5jbGllbnRYXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSAnY29sLXJlc2l6ZSdcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnVzZXJTZWxlY3QgPSAnbm9uZSdcblxuICAgIGNvbnN0IG9uTW91c2VNb3ZlID0gKGV2OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWRyYWdnaW5nLmN1cnJlbnQpIHJldHVyblxuICAgICAgY29uc3QgZGVsdGEgPSBldi5jbGllbnRYIC0gc3RhcnRYLmN1cnJlbnRcbiAgICAgIHN0YXJ0WC5jdXJyZW50ID0gZXYuY2xpZW50WFxuICAgICAgb25SZXNpemUoc2lkZSA9PT0gJ2xlZnQnID8gZGVsdGEgOiAtZGVsdGEpXG4gICAgfVxuXG4gICAgY29uc3Qgb25Nb3VzZVVwID0gKCkgPT4ge1xuICAgICAgZHJhZ2dpbmcuY3VycmVudCA9IGZhbHNlXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICcnXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnVzZXJTZWxlY3QgPSAnJ1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKVxuICB9LCBbb25SZXNpemUsIHNpZGVdKVxuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLXJlc2l6ZS1oYW5kbGVcIiBvbk1vdXNlRG93bj17b25Nb3VzZURvd259IC8+XG59XG5cbmZ1bmN0aW9uIFN0dWRpbygpIHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHN0dWRpb1JlZHVjZXIsIGluaXRpYWxTdGF0ZSlcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgW3NlY3Rpb25zQ29sbGFwc2VkLCBzZXRTZWN0aW9uc0NvbGxhcHNlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3NlY3Rpb25zV2lkdGgsIHNldFNlY3Rpb25zV2lkdGhdID0gdXNlU3RhdGUoMjIwKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2F2ZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3R1ZGlvLXRoZW1lJylcbiAgICBpZiAoc2F2ZWQgPT09ICdkYXJrJykgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsICdkYXJrJylcbiAgfSwgW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2FkQ29uZmlnKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnTE9BREVEJywgZGF0YSB9KVxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICB9KS5jYXRjaCgoKSA9PiBzZXRMb2FkaW5nKGZhbHNlKSlcbiAgfSwgW10pXG5cbiAgY29uc3QgaGFuZGxlUmVzaXplU2VjdGlvbnMgPSB1c2VDYWxsYmFjaygoZGVsdGE6IG51bWJlcikgPT4ge1xuICAgIHNldFNlY3Rpb25zV2lkdGgoKHcpID0+IE1hdGgubWF4KDE2MCwgTWF0aC5taW4oMzYwLCB3ICsgZGVsdGEpKSlcbiAgfSwgW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBvbktleSA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB0YWcgPSAoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLnRhZ05hbWVcbiAgICAgIGNvbnN0IGlzSW5wdXQgPSB0YWcgPT09ICdJTlBVVCcgfHwgdGFnID09PSAnVEVYVEFSRUEnIHx8IHRhZyA9PT0gJ1NFTEVDVCdcblxuICAgICAgaWYgKChlLm1ldGFLZXkgfHwgZS5jdHJsS2V5KSAmJiBlLmtleSA9PT0gJ3MnKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PignLmhlYWRlci1zYXZlLWJ0bicpPy5jbGljaygpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoKGUubWV0YUtleSB8fCBlLmN0cmxLZXkpICYmIGUua2V5ID09PSAnZCcgJiYgIWlzSW5wdXQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGlmIChzdGF0ZS51aS5zZWxlY3RlZEZpZWxkID49IDApIHtcbiAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdEVVBMSUNBVEVfRklFTEQnLCBzZWN0aW9uSWR4OiBzdGF0ZS51aS5zZWxlY3RlZFNlY3Rpb24sIGZpZWxkSWR4OiBzdGF0ZS51aS5zZWxlY3RlZEZpZWxkIH0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICgoZS5tZXRhS2V5IHx8IGUuY3RybEtleSkgJiYgZS5rZXkgPT09ICdiJyAmJiAhaXNJbnB1dCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgc2V0U2VjdGlvbnNDb2xsYXBzZWQoKGMpID0+ICFjKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGlzSW5wdXQpIHJldHVyblxuXG4gICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1NFTEVDVF9GSUVMRCcsIGlkeDogLTEgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICgoZS5rZXkgPT09ICdEZWxldGUnIHx8IGUua2V5ID09PSAnQmFja3NwYWNlJykgJiYgc3RhdGUudWkuc2VsZWN0ZWRGaWVsZCA+PSAwKSB7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0RFTEVURV9GSUVMRCcsIHNlY3Rpb25JZHg6IHN0YXRlLnVpLnNlbGVjdGVkU2VjdGlvbiwgZmllbGRJZHg6IHN0YXRlLnVpLnNlbGVjdGVkRmllbGQgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXkpXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXkpXG4gIH0sIFtzdGF0ZS51aS5zZWxlY3RlZEZpZWxkLCBzdGF0ZS51aS5zZWxlY3RlZFNlY3Rpb25dKVxuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3R1ZGlvLXNoZWxsXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3R1ZGlvLWxvYWRpbmdcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctc3Bpbm5lclwiIC8+XG4gICAgICAgICAgPHA+TG9hZGluZyB0ZW1wbGF0ZSBjb25maWcuLi48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgY29uc3QgaXNTY2hlbWFUYWIgPSBzdGF0ZS51aS5hY3RpdmVUYWIgPT09ICdzY2hlbWEnXG5cbiAgcmV0dXJuIChcbiAgICA8U3R1ZGlvQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzdGF0ZSwgZGlzcGF0Y2ggfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0dWRpby1zaGVsbFwiPlxuICAgICAgICA8SGVhZGVyIGNvbmZpZz17Y29uZmlnfSAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3R1ZGlvLW1haW5cIj5cbiAgICAgICAgICB7aXNTY2hlbWFUYWIgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcGFuZWwtc2VjdGlvbnMke3NlY3Rpb25zQ29sbGFwc2VkID8gJyBwYW5lbC1jb2xsYXBzZWQnIDogJyd9YH1cbiAgICAgICAgICAgICAgICBzdHlsZT17IXNlY3Rpb25zQ29sbGFwc2VkID8geyB3aWR0aDogc2VjdGlvbnNXaWR0aCwgbWluV2lkdGg6IHNlY3Rpb25zV2lkdGggfSA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxTZWN0aW9uTGlzdCAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgeyFzZWN0aW9uc0NvbGxhcHNlZCAmJiAoXG4gICAgICAgICAgICAgICAgPFJlc2l6ZUhhbmRsZSBvblJlc2l6ZT17aGFuZGxlUmVzaXplU2VjdGlvbnN9IHNpZGU9XCJsZWZ0XCIgLz5cbiAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICA8RmllbGRMaXN0IC8+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogc3RhdGUudWkuYWN0aXZlVGFiID09PSAnZGVtbycgPyAoXG4gICAgICAgICAgICA8RGVtb1RhYiAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8TWFuaWZlc3RUYWIgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDxUb2FzdCAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9TdHVkaW9Db250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5cbmNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0dWRpby1yb290JylcbmlmIChlbCkge1xuICBjcmVhdGVSb290KGVsKS5yZW5kZXIoPFN0dWRpbyAvPilcbn1cbiIsICJcbiAgICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICBzLnRleHRDb250ZW50ID0gYC8qIFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFxuICAgVGVtcGxhdGUgU3R1ZGlvIFx1MjAxNCBEZXNpZ24gU3lzdGVtIHYyXG4gICBGcmFtZXIgLyBOb3Rpb24gLyBGaWdtYS1xdWFsaXR5IFVJIHdpdGggZmxvYXRpbmcgcGFuZWxzXG4gICBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTAgKi9cblxuLyogXHUyNTAwXHUyNTAwIERlc2lnbiBUb2tlbnMgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwICovXG5cbjpyb290IHtcbiAgLS1iZzogI2ZmZmZmZjtcbiAgLS1iZy1zZWNvbmRhcnk6ICNmYWZhZmE7XG4gIC0tYmctdGVydGlhcnk6ICNmM2YzZjM7XG4gIC0tYmctaG92ZXI6ICNmMGYwZjA7XG4gIC0tYmctYWN0aXZlOiAjZThlOGU4O1xuICAtLWJnLWVsZXZhdGVkOiAjZmZmZmZmO1xuICAtLWJnLWNhbnZhczogI2YwZjBmMDtcblxuICAtLWJvcmRlcjogI2UyZTJlMjtcbiAgLS1ib3JkZXItbGlnaHQ6ICNlYmViZWI7XG4gIC0tYm9yZGVyLWZvY3VzOiAjZGIyNzc3O1xuXG4gIC0tdGV4dDogIzFhMWExYTtcbiAgLS10ZXh0LXNlY29uZGFyeTogIzU1NTU1NTtcbiAgLS10ZXh0LXRlcnRpYXJ5OiAjOTk5OTk5O1xuICAtLXRleHQtaW52ZXJzZTogI2ZmZmZmZjtcblxuICAtLWFjY2VudDogI2RiMjc3NztcbiAgLS1hY2NlbnQtbGlnaHQ6IHJnYmEoMjE5LCAzOSwgMTE5LCAwLjA3KTtcbiAgLS1hY2NlbnQtaG92ZXI6ICNiZTE4NWQ7XG4gIC0tYWNjZW50LW11dGVkOiByZ2JhKDIxOSwgMzksIDExOSwgMC4xNCk7XG5cbiAgLS1kYW5nZXI6ICNlZjQ0NDQ7XG4gIC0tZGFuZ2VyLWxpZ2h0OiByZ2JhKDIzOSwgNjgsIDY4LCAwLjA2KTtcbiAgLS1kYW5nZXItaG92ZXI6ICNkYzI2MjY7XG4gIC0tc3VjY2VzczogIzEwYjk4MTtcbiAgLS1zdWNjZXNzLWxpZ2h0OiByZ2JhKDE2LCAxODUsIDEyOSwgMC4wNik7XG4gIC0td2FybmluZzogI2Y1OWUwYjtcbiAgLS13YXJuaW5nLWxpZ2h0OiByZ2JhKDI0NSwgMTU4LCAxMSwgMC4wNik7XG5cbiAgLS1yYWRpdXMteHM6IDRweDtcbiAgLS1yYWRpdXM6IDZweDtcbiAgLS1yYWRpdXMtbGc6IDEwcHg7XG4gIC0tcmFkaXVzLXhsOiAxMnB4O1xuICAtLXJhZGl1cy1mdWxsOiA5OTk5cHg7XG5cbiAgLS1zaGFkb3ctc206IDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMDQpO1xuICAtLXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwwLDAsMC4wNiksIDAgMCAwIDFweCByZ2JhKDAsMCwwLDAuMDQpO1xuICAtLXNoYWRvdy1sZzogMCA0cHggMTZweCByZ2JhKDAsMCwwLDAuMDgpLCAwIDAgMCAxcHggcmdiYSgwLDAsMCwwLjA0KTtcbiAgLS1zaGFkb3cteGw6IDAgMTJweCAzNnB4IHJnYmEoMCwwLDAsMC4xMiksIDAgMCAwIDFweCByZ2JhKDAsMCwwLDAuMDQpO1xuICAtLXNoYWRvdy1wYW5lbDogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4wNCksIDAgMCAwIDFweCByZ2JhKDAsMCwwLDAuMDYpO1xuXG4gIC0tdHJhbnNpdGlvbjogMTUwbXMgZWFzZTtcbiAgLS10cmFuc2l0aW9uLXNsb3c6IDI1MG1zIGVhc2U7XG4gIC0tdHJhbnNpdGlvbi1zcHJpbmc6IDIwMG1zIGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKTtcblxuICAtLWZvbnQ6ICdJbnRlcicsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmO1xuICAtLWZvbnQtbW9ubzogJ1NGIE1vbm8nLCAnRmlyYSBDb2RlJywgJ0pldEJyYWlucyBNb25vJywgbW9ub3NwYWNlO1xuICAtLWZvbnQtc2l6ZS14eHM6IDEwcHg7XG4gIC0tZm9udC1zaXplLXhzOiAxMXB4O1xuICAtLWZvbnQtc2l6ZS1zbTogMTIuNXB4O1xuICAtLWZvbnQtc2l6ZS1iYXNlOiAxNHB4O1xuICAtLWZvbnQtc2l6ZS1tZDogMTVweDtcbiAgLS1mb250LXNpemUtbGc6IDE3cHg7XG5cbiAgLS1oZWFkZXItaDogNDhweDtcbiAgLS1mb290ZXItaDogMzJweDtcbiAgLS1yZXNpemUtaGFuZGxlLXc6IDFweDtcbn1cblxuW2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcbiAgLS1iZzogIzE1MTUxNTtcbiAgLS1iZy1zZWNvbmRhcnk6ICMxYzFjMWM7XG4gIC0tYmctdGVydGlhcnk6ICMyMzIzMjM7XG4gIC0tYmctaG92ZXI6ICMyODI4Mjg7XG4gIC0tYmctYWN0aXZlOiAjMzMzMzMzO1xuICAtLWJnLWVsZXZhdGVkOiAjMWUxZTFlO1xuICAtLWJnLWNhbnZhczogIzExMTExMTtcblxuICAtLWJvcmRlcjogIzJjMmMyYztcbiAgLS1ib3JkZXItbGlnaHQ6ICMyNDI0MjQ7XG4gIC0tYm9yZGVyLWZvY3VzOiAjZjQ3MmI2O1xuXG4gIC0tdGV4dDogI2U1ZTVlNTtcbiAgLS10ZXh0LXNlY29uZGFyeTogI2EwYTBhMDtcbiAgLS10ZXh0LXRlcnRpYXJ5OiAjNjY2NjY2O1xuICAtLXRleHQtaW52ZXJzZTogIzE1MTUxNTtcblxuICAtLWFjY2VudDogI2Y0NzJiNjtcbiAgLS1hY2NlbnQtbGlnaHQ6IHJnYmEoMjQ0LCAxMTQsIDE4MiwgMC4xMik7XG4gIC0tYWNjZW50LWhvdmVyOiAjZWM0ODk5O1xuICAtLWFjY2VudC1tdXRlZDogcmdiYSgyNDQsIDExNCwgMTgyLCAwLjIpO1xuXG4gIC0tZGFuZ2VyOiAjZjg3MTcxO1xuICAtLWRhbmdlci1saWdodDogcmdiYSgyNDgsIDExMywgMTEzLCAwLjEpO1xuICAtLWRhbmdlci1ob3ZlcjogI2VmNDQ0NDtcbiAgLS1zdWNjZXNzOiAjMzRkMzk5O1xuICAtLXN1Y2Nlc3MtbGlnaHQ6IHJnYmEoNTIsIDIxMSwgMTUzLCAwLjEpO1xuICAtLXdhcm5pbmc6ICNmYmJmMjQ7XG4gIC0td2FybmluZy1saWdodDogcmdiYSgyNTEsIDE5MSwgMzYsIDAuMSk7XG5cbiAgLS1zaGFkb3ctc206IDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMyk7XG4gIC0tc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLDAsMCwwLjI1KTtcbiAgLS1zaGFkb3ctbGc6IDAgNHB4IDE2cHggcmdiYSgwLDAsMCwwLjM1KTtcbiAgLS1zaGFkb3cteGw6IDAgMTJweCAzNnB4IHJnYmEoMCwwLDAsMC41KTtcbiAgLS1zaGFkb3ctcGFuZWw6IDAgMXB4IDRweCByZ2JhKDAsMCwwLDAuMyksIDAgMCAwIDFweCByZ2JhKDI1NSwyNTUsMjU1LDAuMDQpO1xufVxuXG4vKiBcdTI1MDBcdTI1MDAgUmVzZXQgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwICovXG5cbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIgeyBtYXJnaW46IDA7IHBhZGRpbmc6IDA7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbmh0bWwsIGJvZHkgeyBoZWlnaHQ6IDEwMCU7IG92ZXJmbG93OiBoaWRkZW47IH1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmcpO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuOjpzZWxlY3Rpb24geyBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtbXV0ZWQpOyBjb2xvcjogdmFyKC0tdGV4dCk7IH1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7IHdpZHRoOiA2cHg7IGhlaWdodDogNnB4OyB9XG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIgeyBiYWNrZ3JvdW5kOiB2YXIoLS1ib3JkZXIpOyBib3JkZXItcmFkaXVzOiAzcHg7IH1cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIgeyBiYWNrZ3JvdW5kOiB2YXIoLS10ZXh0LXRlcnRpYXJ5KTsgfVxuKiB7IHNjcm9sbGJhci13aWR0aDogdGhpbjsgc2Nyb2xsYmFyLWNvbG9yOiB2YXIoLS1ib3JkZXIpIHRyYW5zcGFyZW50OyB9XG5cbjpmb2N1cy12aXNpYmxlIHtcbiAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLWFjY2VudCk7XG4gIG91dGxpbmUtb2Zmc2V0OiAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG59XG5cbi8qIFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFxuICAgTEFZT1VUIFNIRUxMXG4gICBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTAgKi9cblxuLnN0dWRpby1zaGVsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWNhbnZhcyk7XG59XG5cbi5zdHVkaW8tbG9hZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4OiAxO1xuICBnYXA6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG59XG5cbi5sb2FkaW5nLXNwaW5uZXIge1xuICB3aWR0aDogMjBweDsgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBib3JkZXItdG9wLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFuaW1hdGlvbjogc3BpbiA2MDBtcyBsaW5lYXIgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIHNwaW4geyB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxuXG4vKiBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcbiAgIEhFQURFUlxuICAgXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwICovXG5cbi5zdHVkaW8taGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIGhlaWdodDogdmFyKC0taGVhZGVyLWgpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBmbGV4LXNocmluazogMDtcbiAgei1pbmRleDogMTA7XG59XG5cbi5oZWFkZXItYnJhbmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5oZWFkZXItdGl0bGUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2NTA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG5cbi5oZWFkZXItc2x1ZyB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhzKTtcbiAgY29sb3I6IHZhcigtLXRleHQtdGVydGlhcnkpO1xuICBwYWRkaW5nOiAycHggOHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1mdWxsKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmhlYWRlci10YWJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcbiAgcGFkZGluZzogM3B4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmhlYWRlci10YWItcGlsbCB7XG4gIHBhZGRpbmc6IDRweCAxNHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tcmFkaXVzKSAtIDJweCk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5oZWFkZXItdGFiLXBpbGw6aG92ZXIgeyBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpOyBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7IH1cbi5oZWFkZXItdGFiLXBpbGwuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctZWxldmF0ZWQpO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGZvbnQtd2VpZ2h0OiA1NTA7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG59XG5cbi5oZWFkZXItYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMnB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLmhlYWRlci1pY29uLWJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDMwcHg7IGhlaWdodDogMzBweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLXRleHQtdGVydGlhcnkpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uKTtcbiAgZmxleC1zaHJpbms6IDA7XG59XG4uaGVhZGVyLWljb24tYnRuOmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpOyBjb2xvcjogdmFyKC0tdGV4dCk7IH1cbi5oZWFkZXItaWNvbi1idG46YWN0aXZlIHsgdHJhbnNmb3JtOiBzY2FsZSgwLjkzKTsgfVxuLmhlYWRlci1pY29uLWJ0bi5hY3RpdmUgeyBjb2xvcjogdmFyKC0tYWNjZW50KTsgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWxpZ2h0KTsgfVxuXG4uaGVhZGVyLXNlcGFyYXRvciB7XG4gIHdpZHRoOiAxcHg7IGhlaWdodDogMTZweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYm9yZGVyKTtcbiAgbWFyZ2luOiAwIDRweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5oZWFkZXItc2VhcmNoLWV4cGFuZGVkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xuICB3aWR0aDogMTgwcHg7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciB2YXIoLS10cmFuc2l0aW9uKSwgYm94LXNoYWRvdyB2YXIoLS10cmFuc2l0aW9uKTtcbn1cbi5oZWFkZXItc2VhcmNoLWV4cGFuZGVkOmZvY3VzLXdpdGhpbiB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHZhcigtLWFjY2VudC1saWdodCk7XG59XG4uaGVhZGVyLXNlYXJjaC1leHBhbmRlZCBpbnB1dCB7XG4gIGJvcmRlcjogbm9uZTsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pOyBmb250LWZhbWlseTogdmFyKC0tZm9udCk7IG91dGxpbmU6IG5vbmU7IHdpZHRoOiAxMDAlO1xufVxuLmhlYWRlci1zZWFyY2gtZXhwYW5kZWQgaW5wdXQ6OnBsYWNlaG9sZGVyIHsgY29sb3I6IHZhcigtLXRleHQtdGVydGlhcnkpOyB9XG5cbi5oZWFkZXItc2VhcmNoLWNsb3NlIHtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxNnB4OyBoZWlnaHQ6IDE2cHg7XG4gIGJvcmRlcjogbm9uZTsgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpOyBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTsgY3Vyc29yOiBwb2ludGVyOyBmbGV4LXNocmluazogMDtcbiAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24pO1xufVxuLmhlYWRlci1zZWFyY2gtY2xvc2U6aG92ZXIgeyBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1hY3RpdmUpOyBjb2xvcjogdmFyKC0tdGV4dCk7IH1cblxuLmhlYWRlci1zYXZlLWJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgcGFkZGluZzogNnB4IDE0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XG4gIGZvbnQtd2VpZ2h0OiA1NTA7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbik7XG59XG4uaGVhZGVyLXNhdmUtYnRuOmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0tYmctYWN0aXZlKTsgY29sb3I6IHZhcigtLXRleHQpOyB9XG4uaGVhZGVyLXNhdmUtYnRuLnVuc2F2ZWQgeyBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQpOyBjb2xvcjogd2hpdGU7IH1cbi5oZWFkZXItc2F2ZS1idG4udW5zYXZlZDpob3ZlciB7IGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1ob3Zlcik7IH1cbi5oZWFkZXItc2F2ZS1idG46YWN0aXZlIHsgdHJhbnNmb3JtOiBzY2FsZSgwLjk3KTsgfVxuLmhlYWRlci1zYXZlLWJ0bjpkaXNhYmxlZCB7IG9wYWNpdHk6IDAuNTsgY3Vyc29yOiBub3QtYWxsb3dlZDsgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cblxuLmhlYWRlci1zYXZlLWRvdCB7XG4gIHdpZHRoOiA2cHg7IGhlaWdodDogNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcbiAgYW5pbWF0aW9uOiBwdWxzZS1kb3QgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIHB1bHNlLWRvdCB7IDAlLCAxMDAlIHsgb3BhY2l0eTogMTsgfSA1MCUgeyBvcGFjaXR5OiAwLjM7IH0gfVxuXG4vKiBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcbiAgIE1BSU4gTEFZT1VUIFx1MjAxNCBDYW52YXMgd2l0aCBmbG9hdGluZyBwYW5lbHNcbiAgIFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MCAqL1xuXG4uc3R1ZGlvLW1haW4ge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGdhcDogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLyogXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXG4gICBSRVNJWkUgSEFORExFXG4gICBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTAgKi9cblxuLnBhbmVsLXJlc2l6ZS1oYW5kbGUge1xuICB3aWR0aDogNXB4O1xuICBjdXJzb3I6IGNvbC1yZXNpemU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB6LWluZGV4OiA1O1xufVxuLnBhbmVsLXJlc2l6ZS1oYW5kbGU6OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwOyBib3R0b206IDA7IGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDFweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYm9yZGVyKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbik7XG59XG4ucGFuZWwtcmVzaXplLWhhbmRsZTpob3Zlcjo6YWZ0ZXIge1xuICB3aWR0aDogM3B4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi8qIFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFxuICAgU0VDVElPTlMgUEFORUwgKExFRlQpXG4gICBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTAgKi9cblxuLnBhbmVsLXNlY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmcpO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBmbGV4LXNocmluazogMDtcbiAgdHJhbnNpdGlvbjogd2lkdGggdmFyKC0tdHJhbnNpdGlvbi1zbG93KSwgbWluLXdpZHRoIHZhcigtLXRyYW5zaXRpb24tc2xvdyksIG9wYWNpdHkgdmFyKC0tdHJhbnNpdGlvbi1zbG93KTtcbn1cblxuLnBhbmVsLXNlY3Rpb25zLnBhbmVsLWNvbGxhcHNlZCB7XG4gIHdpZHRoOiAwICFpbXBvcnRhbnQ7IG1pbi13aWR0aDogMCAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwOyBwb2ludGVyLWV2ZW50czogbm9uZTsgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnBhbmVsLXNlY3Rpb25zLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTRweCAxNHB4IDhweDtcbn1cblxuLnBhbmVsLXNlY3Rpb25zLXRpdGxlIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHMpO1xuICBmb250LXdlaWdodDogNjUwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7XG59XG5cbi5zZWN0aW9uLWxpc3Qtc2Nyb2xsIHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogMCA2cHg7XG59XG5cbi5zZWN0aW9uLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgcGFkZGluZzogOHB4IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbik7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWJhc2UpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xufVxuLnNlY3Rpb24taXRlbTpob3ZlciB7IGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyKTsgY29sb3I6IHZhcigtLXRleHQpOyB9XG4uc2VjdGlvbi1pdGVtLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1saWdodCk7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbn1cblxuLnNlY3Rpb24tbGFiZWwge1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xufVxuXG4uc2VjdGlvbi1jb3VudCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXh4cyk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXRlcnRpYXJ5KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICBwYWRkaW5nOiAwIDVweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWZ1bGwpO1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgbWluLXdpZHRoOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5zZWN0aW9uLXJlbmFtZS1pbnB1dCB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDJweCA2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjY2VudCk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy14cyk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnKTtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHZhcigtLWFjY2VudC1saWdodCk7XG59XG5cbi5zZWN0aW9uLW1lbnUtYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAyMnB4OyBoZWlnaHQ6IDIycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXRlcnRpYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXhzKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbik7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuLnNlY3Rpb24tbWVudS1idG4udmlzaWJsZSB7IG9wYWNpdHk6IDE7IH1cbi5zZWN0aW9uLW1lbnUtYnRuOmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0tYmctYWN0aXZlKTsgY29sb3I6IHZhcigtLXRleHQpOyB9XG5cbi5kcmFnLWhhbmRsZSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXRlcnRpYXJ5KTtcbiAgY3Vyc29yOiBncmFiO1xuICBmbGV4LXNocmluazogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSB2YXIoLS10cmFuc2l0aW9uKTtcbn1cbi5kcmFnLWhhbmRsZS52aXNpYmxlIHsgb3BhY2l0eTogMC41OyB9XG4uZHJhZy1oYW5kbGU6YWN0aXZlIHsgY3Vyc29yOiBncmFiYmluZzsgfVxuXG4uYWRkLXNlY3Rpb24tYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLXRleHQtdGVydGlhcnkpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbik7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xufVxuLmFkZC1zZWN0aW9uLWJ0bjpob3ZlciB7IGNvbG9yOiB2YXIoLS1hY2NlbnQpOyBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtbGlnaHQpOyB9XG5cbi5zZWN0aW9uLW1vZGFsLWZpZWxkcyB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMTJweDsgcGFkZGluZzogMCAwIDE2cHg7IH1cbi5zZWN0aW9uLW1vZGFsLWFjdGlvbnMgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDhweDsganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgfVxuXG4vKiBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcbiAgIEZJRUxEUyBQQU5FTCAoQ0VOVEVSKSBcdTIwMTQgVGhlIGZvcm0gYnVpbGRlciBjYW52YXNcbiAgIFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MCAqL1xuXG4ucGFuZWwtZmllbGRzIHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY2FudmFzKTtcbn1cblxuLnBhbmVsLWZpZWxkcy1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEycHggMjBweCA4cHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBtYXgtd2lkdGg6IDY3MnB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG4ucGFuZWwtZmllbGRzLWhlYWRlciBoMiB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLW1kKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xufVxuXG4ucGFuZWwtZmllbGRzLWhlYWRlci1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG59XG5cbi8qIFF1aWNrIGFkZCBkcm9wZG93biAqL1xuLmZpZWxkLWFkZC1kcm9wZG93bi13cmFwcGVyIHsgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi5maWVsZC1hZGQtcXVpY2stYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAyOHB4OyBoZWlnaHQ6IDI4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWVsZXZhdGVkKTtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbik7XG59XG4uZmllbGQtYWRkLXF1aWNrLWJ0bjpob3ZlciB7IGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50KTsgY29sb3I6IHZhcigtLWFjY2VudCk7IGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1saWdodCk7IH1cblxuLmZpZWxkLWFkZC1kcm9wZG93biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICByaWdodDogMDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWVsZXZhdGVkKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWxnKTtcbiAgei1pbmRleDogMzA7XG4gIHBhZGRpbmc6IDRweDtcbiAgYW5pbWF0aW9uOiBjb250ZXh0TWVudUluIDEyMG1zIGVhc2Utb3V0O1xufVxuXG4uZmllbGQtYWRkLWRyb3Bkb3duLXRpdGxlIHtcbiAgcGFkZGluZzogNnB4IDEwcHggNHB4O1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14cyk7XG4gIGZvbnQtd2VpZ2h0OiA2NTA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXRlcnRpYXJ5KTtcbn1cblxuLmZpZWxkLWFkZC1kcm9wZG93bi1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA3cHggMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbik7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uZmllbGQtYWRkLWRyb3Bkb3duLWl0ZW06aG92ZXIgeyBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7IH1cblxuLmZpZWxkLWFkZC1idG4taGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1cHg7XG4gIHBhZGRpbmc6IDVweCAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1lbGV2YXRlZCk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uKTtcbn1cbi5maWVsZC1hZGQtYnRuLWhlYWRlcjpob3ZlciB7IGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50KTsgY29sb3I6IHZhcigtLWFjY2VudCk7IGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1saWdodCk7IH1cblxuLyogRmllbGQgbGlzdCBhcmVhICovXG4uZmllbGQtbGlzdCB7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmc6IDRweCAxNnB4IDE2cHg7XG4gIG1heC13aWR0aDogNjQwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZpZWxkLWxpc3QtZW1wdHksXG4uZmllbGQtbGlzdC1lbXB0eS1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNjBweCAyMHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7XG59XG5cbi5maWVsZC1saXN0LWVtcHR5LWljb24geyBtYXJnaW4tYm90dG9tOiAxMnB4OyBvcGFjaXR5OiAwLjQ7IH1cbi5maWVsZC1saXN0LWVtcHR5LXRpdGxlIHsgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbWQpOyBmb250LXdlaWdodDogNTAwOyBtYXJnaW4tYm90dG9tOiA0cHg7IGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7IH1cbi5maWVsZC1saXN0LWVtcHR5LWhpbnQgeyBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7IH1cblxuLmZpZWxkLWxpc3QtZW1wdHktc2VjdGlvbiBwIHsgbWFyZ2luLWJvdHRvbTogMTJweDsgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pOyB9XG5cbi5maWVsZC1hZGQtaW5saW5lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBib3JkZXI6IDFweCBkYXNoZWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctZWxldmF0ZWQpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbik7XG59XG4uZmllbGQtYWRkLWlubGluZTpob3ZlciB7IGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50KTsgY29sb3I6IHZhcigtLWFjY2VudCk7IGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1saWdodCk7IH1cblxuLmZpZWxkLWxpc3Qtbm8tcmVzdWx0cyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMzJweCAyMHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcbn1cblxuLyogXHUyNTAwXHUyNTAwIEZpZWxkIENhcmRzIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMCAqL1xuXG4uZmllbGQtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctZWxldmF0ZWQpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uZmllbGQtY2FyZDpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xufVxuLmZpZWxkLWNhcmQuYWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICBib3gtc2hhZG93OiAwIDAgMCAycHggdmFyKC0tYWNjZW50LWxpZ2h0KSwgdmFyKC0tc2hhZG93KTtcbn1cblxuLmZpZWxkLWNhcmQgLmRyYWctaGFuZGxlIHtcbiAgcGFkZGluZzogMTJweCAycHggMTJweCA4cHg7XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5maWVsZC1jYXJkLWJvZHkge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDA7XG4gIHBhZGRpbmc6IDEycHggMTRweCAxMnB4IDA7XG59XG5cbi5maWVsZC1jYXJkLXRvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi5maWVsZC1pY29uLWJhZGdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uKTtcbn1cbi5maWVsZC1pY29uLWJhZGdlLmFjdGl2ZSxcbi5maWVsZC1jYXJkLmFjdGl2ZSAuZmllbGQtaWNvbi1iYWRnZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudCk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZpZWxkLWNhcmQtbGFiZWwtZ3JvdXAge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi5maWVsZC1jYXJkLWxhYmVsIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7XG4gIGZvbnQtd2VpZ2h0OiA1NTA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuXG4uZmllbGQtcmVxdWlyZWQtYXN0ZXJpc2sge1xuICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmZpZWxkLWNhcmQtbWV0YSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhzKTtcbiAgY29sb3I6IHZhcigtLXRleHQtdGVydGlhcnkpO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG59XG5cbi5maWVsZC1jb25kaXRpb25hbC1iYWRnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMjBweDsgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdhcm5pbmctbGlnaHQpO1xuICBjb2xvcjogdmFyKC0td2FybmluZyk7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uZmllbGQtdHlwZS1waWxsIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHhzKTtcbiAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgY29sb3I6IHZhcigtLXRleHQtdGVydGlhcnkpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gIHBhZGRpbmc6IDFweCA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1mdWxsKTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5maWVsZC1tZW51LWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy14cyk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24pO1xuICBmbGV4LXNocmluazogMDtcbn1cbi5maWVsZC1tZW51LWJ0bi52aXNpYmxlIHsgb3BhY2l0eTogMTsgfVxuLmZpZWxkLW1lbnUtYnRuOmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0tYmctYWN0aXZlKTsgY29sb3I6IHZhcigtLXRleHQpOyB9XG5cbi8qIFx1MjUwMFx1MjUwMCBGaWVsZCBQcmV2aWV3cyAobW9jayBmb3JtIGlucHV0cykgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwICovXG5cbi5maWVsZC1wcmV2aWV3IHtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4uZmllbGQtcHJldmlldy1pbnB1dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA3cHggMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5KTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5maWVsZC1wcmV2aWV3LXRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDdweCAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xuICBtaW4taGVpZ2h0OiA0OHB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmZpZWxkLXByZXZpZXctcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcbn1cblxuLmZpZWxkLXByZXZpZXctbnVtYmVyIHsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XG4uZmllbGQtcHJldmlldy11bml0IHsgY29sb3I6IHZhcigtLXRleHQtdGVydGlhcnkpOyBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14cyk7IGZvbnQtd2VpZ2h0OiA1MDA7IH1cbi5maWVsZC1wcmV2aWV3LXNlbGVjdCB7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxuXG4uZmllbGQtcHJldmlldy10b2dnbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIHBhZGRpbmc6IDRweCAwO1xufVxuXG4uZmllbGQtcHJldmlldy10b2dnbGUtdHJhY2sge1xuICB3aWR0aDogMzJweDsgaGVpZ2h0OiAxOHB4O1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJvcmRlcik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5maWVsZC1wcmV2aWV3LXRvZ2dsZS10aHVtYiB7XG4gIHdpZHRoOiAxNHB4OyBoZWlnaHQ6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAycHg7IGxlZnQ6IDJweDtcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4xNSk7XG59XG5cbi5maWVsZC1wcmV2aWV3LXRvZ2dsZS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcbiAgY29sb3I6IHZhcigtLXRleHQtdGVydGlhcnkpO1xufVxuXG4uZmllbGQtcHJldmlldy1jb2xvci1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogMnB4IDA7XG59XG5cbi5maWVsZC1wcmV2aWV3LWNvbG9yLXN3YXRjaCB7XG4gIHdpZHRoOiAyMnB4OyBoZWlnaHQ6IDIycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmcpO1xuICBib3gtc2hhZG93OiAwIDAgMCAxcHggdmFyKC0tYm9yZGVyKTtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5maWVsZC1wcmV2aWV3LWNvbG9yLWhleCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9ubyk7XG59XG5cbi5maWVsZC1wcmV2aWV3LWNvbG9yLXByZXNldHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDNweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5maWVsZC1wcmV2aWV3LWNvbG9yLXByZXNldCB7XG4gIHdpZHRoOiAxNHB4OyBoZWlnaHQ6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1iZyk7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCB2YXIoLS1ib3JkZXItbGlnaHQpO1xufVxuXG4uZmllbGQtcHJldmlldy1tZWRpYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyOiAxLjVweCBkYXNoZWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5KTtcbiAgY29sb3I6IHZhcigtLXRleHQtdGVydGlhcnkpO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XG59XG5cbi5maWVsZC1wcmV2aWV3LW1lZGlhLWhpbnQge1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14cyk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXRlcnRpYXJ5KTtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4uZmllbGQtcHJldmlldy1hc3BlY3Qge1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14eHMpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gIHBhZGRpbmc6IDFweCA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1mdWxsKTtcbiAgY29sb3I6IHZhcigtLXRleHQtdGVydGlhcnkpO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZmllbGQtcHJldmlldy1nYWxsZXJ5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA2cHg7XG59XG5cbi5maWVsZC1wcmV2aWV3LWdhbGxlcnktc2xvdCB7XG4gIHdpZHRoOiA0OHB4OyBoZWlnaHQ6IDQ4cHg7XG4gIGJvcmRlcjogMS41cHggZGFzaGVkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XG59XG5cbi5maWVsZC1wcmV2aWV3LWdhbGxlcnktYWRkIHtcbiAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudC1tdXRlZCk7XG59XG5cbi5maWVsZC1wcmV2aWV3LWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXRlcnRpYXJ5KTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xufVxuXG4vKiBBZGQgZmllbGQgYm90dG9tIGFyZWEgKi9cbi5hZGQtZmllbGQtYXJlYSB7XG4gIHBhZGRpbmc6IDZweCAxNnB4IDhweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5hZGQtZmllbGQtYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlcjogMS41cHggZGFzaGVkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbik7XG59XG4uYWRkLWZpZWxkLWJ0bjpob3ZlciB7IGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50KTsgY29sb3I6IHZhcigtLWFjY2VudCk7IGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1saWdodCk7IH1cblxuLyogXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXG4gICBJTlNQRUNUT1IgUEFORUwgKFJJR0hUKVxuICAgXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwICovXG5cbi5wYW5lbC1pbnNwZWN0b3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHRyYW5zaXRpb246IHdpZHRoIHZhcigtLXRyYW5zaXRpb24tc2xvdyksIG1pbi13aWR0aCB2YXIoLS10cmFuc2l0aW9uLXNsb3cpLCBvcGFjaXR5IHZhcigtLXRyYW5zaXRpb24tc2xvdyk7XG59XG5cbi5wYW5lbC1pbnNwZWN0b3IucGFuZWwtY29sbGFwc2VkIHtcbiAgd2lkdGg6IDAgIWltcG9ydGFudDsgbWluLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDA7IHBvaW50ZXItZXZlbnRzOiBub25lOyBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaW5zcGVjdG9yLXRvb2xiYXIge1xuICBwYWRkaW5nOiAxMnB4IDE0cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmluc3BlY3Rvci10b29sYmFyLXRpdGxlIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHMpO1xuICBmb250LXdlaWdodDogNjUwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7XG59XG5cbi5pbnNwZWN0b3ItdHlwZS1iYWRnZS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbn1cblxuLmluc3BlY3Rvci10eXBlLWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDIycHg7IGhlaWdodDogMjJweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXhzKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWxpZ2h0KTtcbiAgY29sb3I6IHZhcigtLWFjY2VudCk7XG59XG5cbi5pbnNwZWN0b3ItdHlwZS1iYWRnZSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcbiAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgY29sb3I6IHZhcigtLWFjY2VudCk7XG59XG5cbi5pbnNwZWN0b3ItZW1wdHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleDogMTtcbiAgY29sb3I6IHZhcigtLXRleHQtdGVydGlhcnkpO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZzogMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW5zcGVjdG9yLWZpZWxkcyB7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmc6IDRweCAwO1xufVxuXG4vKiBcdTI1MDBcdTI1MDAgQ29sbGFwc2libGUgSW5zcGVjdG9yIFNlY3Rpb25zIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMCAqL1xuXG4uaW5zcGVjdG9yLXNlY3Rpb24ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbn1cblxuLmluc3BlY3Rvci1zZWN0aW9uLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcbiAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbik7XG59XG4uaW5zcGVjdG9yLXNlY3Rpb24taGVhZGVyOmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpOyBjb2xvcjogdmFyKC0tdGV4dCk7IH1cblxuLmluc3BlY3Rvci1zZWN0aW9uLWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7XG59XG5cbi5pbnNwZWN0b3Itc2VjdGlvbi10aXRsZSB7IGZsZXg6IDE7IH1cblxuLmluc3BlY3Rvci1zZWN0aW9uLWJvZHkge1xuICBwYWRkaW5nOiA0cHggMTZweCAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEycHg7XG4gIGFuaW1hdGlvbjogc2xpZGVJblVwIDE1MG1zIGVhc2U7XG59XG5cbi5pbnNwZWN0b3ItZGFuZ2VyLXpvbmUge1xuICBwYWRkaW5nOiAxNHB4O1xufVxuXG4uaW5zcGVjdG9yLXBsYWNlaG9sZGVyIHtcbiAgcGFkZGluZzogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLyogXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXG4gICBGT1JNU1xuICAgXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwICovXG5cbi5mb3JtLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA0cHg7XG59XG5cbi5mb3JtLWdyb3VwLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5mb3JtLWxhYmVsIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xufVxuXG4uZm9ybS1pbnB1dCB7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xuICBvdXRsaW5lOiBub25lO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgdmFyKC0tdHJhbnNpdGlvbiksIGJveC1zaGFkb3cgdmFyKC0tdHJhbnNpdGlvbiksIGJhY2tncm91bmQgdmFyKC0tdHJhbnNpdGlvbik7XG4gIHJlc2l6ZTogdmVydGljYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG59XG4uZm9ybS1pbnB1dDpob3ZlciB7IGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7IGJhY2tncm91bmQ6IHZhcigtLWJnKTsgfVxuLmZvcm0taW5wdXQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudCk7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCB2YXIoLS1hY2NlbnQtbGlnaHQpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7XG59XG4uZm9ybS1pbnB1dC5mb250LW1vbm8geyBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vKTsgfVxuXG5zZWxlY3QuZm9ybS1pbnB1dCB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTInIGhlaWdodD0nMTInIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjM5OTknIHN0cm9rZS13aWR0aD0nMiclM0UlM0NwYXRoIGQ9J202IDkgNiA2IDYtNicvJTNFJTNDL3N2ZyUzRVwiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgOHB4IGNlbnRlcjtcbiAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBUb2dnbGUgc3dpdGNoICovXG4udG9nZ2xlLXN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHdpZHRoOiAzMnB4OyBoZWlnaHQ6IDE4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxleC1zaHJpbms6IDA7XG59XG4udG9nZ2xlLXN3aXRjaCBpbnB1dCB7IG9wYWNpdHk6IDA7IHdpZHRoOiAwOyBoZWlnaHQ6IDA7IH1cbi50b2dnbGUtc3dpdGNoLXNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCB2YXIoLS10cmFuc2l0aW9uKTtcbn1cbi50b2dnbGUtc3dpdGNoLXNsaWRlcjo6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE0cHg7IGhlaWdodDogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgdG9wOiAycHg7IGxlZnQ6IDJweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIHZhcigtLXRyYW5zaXRpb24tc3ByaW5nKTtcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4xNSk7XG59XG4udG9nZ2xlLXN3aXRjaCBpbnB1dDpjaGVja2VkICsgLnRvZ2dsZS1zd2l0Y2gtc2xpZGVyIHsgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50KTsgfVxuLnRvZ2dsZS1zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCArIC50b2dnbGUtc3dpdGNoLXNsaWRlcjo6YmVmb3JlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE0cHgpOyB9XG5cbi5jb2xvci1pbnB1dC1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cbi5jb2xvci1pbnB1dC1yb3cgaW5wdXRbdHlwZT1cImNvbG9yXCJdIHtcbiAgd2lkdGg6IDI4cHg7IGhlaWdodDogMjhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcbiAgcGFkZGluZzogMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmNvbG9yLWlucHV0LXJvdyBpbnB1dFt0eXBlPVwiY29sb3JcIl06Oi13ZWJraXQtY29sb3Itc3dhdGNoLXdyYXBwZXIgeyBwYWRkaW5nOiAwOyB9XG4uY29sb3ItaW5wdXQtcm93IGlucHV0W3R5cGU9XCJjb2xvclwiXTo6LXdlYmtpdC1jb2xvci1zd2F0Y2ggeyBib3JkZXI6IG5vbmU7IGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tcmFkaXVzKSAtIDJweCk7IH1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgd2lkdGg6IDE1cHg7IGhlaWdodDogMTVweDtcbiAgYWNjZW50LWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFxuICAgQlVUVE9OU1xuICAgXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwICovXG5cbi5idG4tcHJpbWFyeSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIHBhZGRpbmc6IDdweCAxNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xuICBmb250LXdlaWdodDogNTUwO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24pO1xufVxuLmJ0bi1wcmltYXJ5OmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWhvdmVyKTsgfVxuLmJ0bi1wcmltYXJ5OmFjdGl2ZSB7IHRyYW5zZm9ybTogc2NhbGUoMC45Nyk7IH1cblxuLmJ0bi1zZWNvbmRhcnkge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBwYWRkaW5nOiA3cHggMTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctZWxldmF0ZWQpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbik7XG59XG4uYnRuLXNlY29uZGFyeTpob3ZlciB7IGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7IGNvbG9yOiB2YXIoLS10ZXh0KTsgfVxuXG4uYnRuLWRhbmdlciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgcGFkZGluZzogN3B4IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXItbGlnaHQpO1xuICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24pO1xufVxuLmJ0bi1kYW5nZXI6aG92ZXIgeyBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXIpOyBjb2xvcjogd2hpdGU7IH1cblxuLyogXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXG4gICBDT05URVhUIE1FTlVcbiAgIFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MCAqL1xuXG4uY29udGV4dC1tZW51IHtcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAgcGFkZGluZzogNHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1lbGV2YXRlZCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy14bCk7XG4gIGFuaW1hdGlvbjogY29udGV4dE1lbnVJbiAxMDBtcyBlYXNlLW91dDtcbn1cblxuQGtleWZyYW1lcyBjb250ZXh0TWVudUluIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogc2NhbGUoMC45NikgdHJhbnNsYXRlWSgtNHB4KTsgfVxuICB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWSgwKTsgfVxufVxuXG4uY29udGV4dC1tZW51LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDdweCAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uKTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5jb250ZXh0LW1lbnUtaXRlbTpob3ZlciB7IGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyKTsgfVxuLmNvbnRleHQtbWVudS1pdGVtLmRhbmdlciB7IGNvbG9yOiB2YXIoLS1kYW5nZXIpOyB9XG4uY29udGV4dC1tZW51LWl0ZW0uZGFuZ2VyOmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyLWxpZ2h0KTsgfVxuXG4uY29udGV4dC1tZW51LXNlcGFyYXRvciB7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ib3JkZXItbGlnaHQpO1xuICBtYXJnaW46IDRweCA2cHg7XG59XG5cbi8qIFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFxuICAgQ09ORElUSU9OQUxTIEJVSUxERVJcbiAgIFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MCAqL1xuXG4uY29uZGl0aW9uYWxzLWNvbGxhcHNlZCB7XG4gIHBhZGRpbmc6IDhweCAxNnB4IDEycHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xufVxuXG4uY29uZGl0aW9uYWxzLXRvZ2dsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDRweCAwO1xuICB0cmFuc2l0aW9uOiBjb2xvciB2YXIoLS10cmFuc2l0aW9uKTtcbn1cbi5jb25kaXRpb25hbHMtdG9nZ2xlOmhvdmVyIHsgY29sb3I6IHZhcigtLWFjY2VudCk7IH1cblxuLmNvbmRpdGlvbmFscy1zZWN0aW9uIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saWdodCk7XG4gIG1hcmdpbjogMCAxNnB4O1xufVxuXG4uY29uZGl0aW9uYWxzLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcbiAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdHJhbnNpdGlvbjogY29sb3IgdmFyKC0tdHJhbnNpdGlvbik7XG59XG4uY29uZGl0aW9uYWxzLWhlYWRlcjpob3ZlciB7IGNvbG9yOiB2YXIoLS10ZXh0KTsgfVxuXG4uY29uZGl0aW9uYWxzLXRpdGxlIHsgZmxleDogMTsgfVxuXG4uY29uZGl0aW9uYWxzLWNvdW50IHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHhzKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWxpZ2h0KTtcbiAgY29sb3I6IHZhcigtLWFjY2VudCk7XG4gIHBhZGRpbmc6IDAgNnB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtZnVsbCk7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uY29uZGl0aW9uYWxzLWJvZHkge1xuICBwYWRkaW5nOiAwIDAgMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5jb25kaXRpb25hbHMtZW1wdHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXRlcnRpYXJ5KTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xufVxuXG4vKiBDb25kaXRpb25hbCBydWxlIGNhcmQgKi9cbi5jb25kLXJ1bGUge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWVsZXZhdGVkKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIHZhcigtLXRyYW5zaXRpb24pLCBib3gtc2hhZG93IHZhcigtLXRyYW5zaXRpb24pO1xufVxuLmNvbmQtcnVsZTpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50LW11dGVkKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcbn1cblxuLmNvbmQtcnVsZS13aGVuLFxuLmNvbmQtcnVsZS1zaG93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmNvbmQtcnVsZS1hcnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbn1cblxuLmNvbmQtbGFiZWwge1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14eHMpO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBwYWRkaW5nOiAycHggNnB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMteHMpO1xuICBmbGV4LXNocmluazogMDtcbn1cbi5jb25kLWxhYmVsLXdoZW4geyBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtbGlnaHQpOyBjb2xvcjogdmFyKC0tYWNjZW50KTsgfVxuLmNvbmQtbGFiZWwtc2hvdyB7IGJhY2tncm91bmQ6IHZhcigtLXN1Y2Nlc3MtbGlnaHQpOyBjb2xvcjogdmFyKC0tc3VjY2Vzcyk7IH1cblxuLmNvbmQtZXF1YWxzLWxhYmVsIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xuICBmb250LXdlaWdodDogNTUwO1xuICBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uY29uZC1maWVsZC1kcm9wZG93bixcbi5jb25kLXZhbHVlLWlucHV0IHtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5KTtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgdmFyKC0tdHJhbnNpdGlvbik7XG59XG4uY29uZC1maWVsZC1kcm9wZG93bjpmb2N1cyxcbi5jb25kLXZhbHVlLWlucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICBib3gtc2hhZG93OiAwIDAgMCAycHggdmFyKC0tYWNjZW50LWxpZ2h0KTtcbn1cblxuLmNvbmQtdG9nZ2xlLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG4gIHBhZGRpbmc6IDFweDtcbn1cblxuLmNvbmQtdG9nZ2xlLWJ0biB7XG4gIHBhZGRpbmc6IDNweCAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tcmFkaXVzKSAtIDFweCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXRlcnRpYXJ5KTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24pO1xufVxuLmNvbmQtdG9nZ2xlLWJ0bi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb25kLXJ1bGUtZGVsZXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDZweDsgcmlnaHQ6IDZweDtcbiAgd2lkdGg6IDIwcHg7IGhlaWdodDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbik7XG59XG4uY29uZC1ydWxlLWRlbGV0ZS52aXNpYmxlIHsgb3BhY2l0eTogMTsgfVxuLmNvbmQtcnVsZS1kZWxldGU6aG92ZXIgeyBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXItbGlnaHQpOyBjb2xvcjogdmFyKC0tZGFuZ2VyKTsgfVxuXG4uY29uZC1hZGQtYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1cHg7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xuICBib3JkZXI6IDFweCBkYXNoZWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXRlcnRpYXJ5KTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24pO1xufVxuLmNvbmQtYWRkLWJ0bjpob3ZlciB7IGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50KTsgY29sb3I6IHZhcigtLWFjY2VudCk7IH1cblxuLyogTXVsdGktc2VsZWN0IGZpZWxkIGRyb3Bkb3duICovXG4uY29uZC1maWVsZC1zZWxlY3QgeyBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuLmNvbmQtZmllbGQtc2VsZWN0LXRyaWdnZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBtaW4taGVpZ2h0OiAyOHB4O1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIHZhcigtLXRyYW5zaXRpb24pO1xufVxuLmNvbmQtZmllbGQtc2VsZWN0LXRyaWdnZXI6aG92ZXIgeyBib3JkZXItY29sb3I6IHZhcigtLXRleHQtdGVydGlhcnkpOyB9XG5cbi5jb25kLWZpZWxkLXNlbGVjdC1wbGFjZWhvbGRlciB7IGNvbG9yOiB2YXIoLS10ZXh0LXRlcnRpYXJ5KTsgfVxuXG4uY29uZC1maWVsZC1waWxscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAzcHg7XG4gIGZsZXg6IDE7XG59XG5cbi5jb25kLWZpZWxkLXBpbGwge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAycHg7XG4gIHBhZGRpbmc6IDFweCA2cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1saWdodCk7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMteHMpO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14cyk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jb25kLWZpZWxkLXBpbGwtcmVtb3ZlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwIDFweDtcbiAgb3BhY2l0eTogMC42O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IHZhcigtLXRyYW5zaXRpb24pO1xufVxuLmNvbmQtZmllbGQtcGlsbC1yZW1vdmU6aG92ZXIgeyBvcGFjaXR5OiAxOyB9XG5cbi5jb25kLWZpZWxkLXNlbGVjdC1kcm9wZG93biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIG1pbi13aWR0aDogMTYwcHg7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1lbGV2YXRlZCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1sZyk7XG4gIHotaW5kZXg6IDQwO1xuICBwYWRkaW5nOiA0cHg7XG59XG5cbi5jb25kLWZpZWxkLXNlbGVjdC1vcHRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgcGFkZGluZzogNXB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgdmFyKC0tdHJhbnNpdGlvbik7XG59XG4uY29uZC1maWVsZC1zZWxlY3Qtb3B0aW9uOmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpOyB9XG5cbi5jb25kLWZpZWxkLXNlbGVjdC1lbXB0eSB7XG4gIHBhZGRpbmc6IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcbn1cblxuLyogXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXG4gICBUQUcgSU5QVVRcbiAgIFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MCAqL1xuXG4udGFnLWlucHV0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiA0cHg7XG4gIHBhZGRpbmc6IDVweCA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XG4gIG1pbi1oZWlnaHQ6IDMycHg7XG4gIGN1cnNvcjogdGV4dDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIHZhcigtLXRyYW5zaXRpb24pLCBib3gtc2hhZG93IHZhcigtLXRyYW5zaXRpb24pO1xufVxuLnRhZy1pbnB1dC1jb250YWluZXI6Zm9jdXMtd2l0aGluIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICBib3gtc2hhZG93OiAwIDAgMCAzcHggdmFyKC0tYWNjZW50LWxpZ2h0KTtcbn1cblxuLnRhZy1jaGlwIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMnB4O1xuICBwYWRkaW5nOiAxcHggNnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtbGlnaHQpO1xuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXhzKTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xufVxuLnRhZy1jaGlwIGJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTsgYmFja2dyb3VuZDogbm9uZTsgY29sb3I6IGluaGVyaXQ7XG4gIGN1cnNvcjogcG9pbnRlcjsgcGFkZGluZzogMCAycHg7XG4gIG9wYWNpdHk6IDAuNjtcbn1cbi50YWctY2hpcCBidXR0b246aG92ZXIgeyBvcGFjaXR5OiAxOyB9XG5cbi50YWctaW5wdXQge1xuICBib3JkZXI6IG5vbmU7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTsgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xuICBvdXRsaW5lOiBub25lOyBmbGV4OiAxOyBtaW4td2lkdGg6IDYwcHg7XG59XG5cbi8qIFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFxuICAgRk9PVEVSXG4gICBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTAgKi9cblxuLnN0dWRpby1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBoZWlnaHQ6IHZhcigtLWZvb3Rlci1oKTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnKTtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5mb290ZXItc3RhdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHMpO1xuICBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7XG59XG5cbi5mb290ZXItc3RhdCB7IHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cblxuLmZvb3Rlci1kb3Qge1xuICB3aWR0aDogM3B4OyBoZWlnaHQ6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXh0LXRlcnRpYXJ5KTtcbiAgb3BhY2l0eTogMC40O1xufVxuXG4uZm9vdGVyLXVuc2F2ZWQgeyBjb2xvcjogdmFyKC0td2FybmluZyk7IGZvbnQtd2VpZ2h0OiA1NTA7IH1cblxuLmZvb3Rlci1zaG9ydGN1dHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uZm9vdGVyLXNob3J0Y3V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXh4cyk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXRlcnRpYXJ5KTtcbn1cblxua2JkIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxcHggNHB4O1xuICBtaW4td2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTRweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4vKiBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcbiAgIE1PREFMXG4gICBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTAgKi9cblxuLm1vZGFsLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiAxMDA7XG4gIGFuaW1hdGlvbjogZmFkZUluIDE1MG1zIGVhc2U7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xufVxuW2RhdGEtdGhlbWU9XCJkYXJrXCJdIC5tb2RhbC1vdmVybGF5IHsgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjYpOyB9XG5Aa2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OiAwOyB9IHRvIHsgb3BhY2l0eTogMTsgfSB9XG5cbi5tb2RhbCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXhsKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXhsKTtcbiAgd2lkdGg6IDM4MHB4O1xuICBtYXgtaGVpZ2h0OiA4MHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbmltYXRpb246IG1vZGFsSW4gMjAwbXMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpO1xufVxuQGtleWZyYW1lcyBtb2RhbEluIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogc2NhbGUoMC45NSkgdHJhbnNsYXRlWSg4cHgpOyB9XG4gIHRvIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVZKDApOyB9XG59XG5cbi5tb2RhbC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saWdodCk7XG59XG4ubW9kYWwtaGVhZGVyIGgzIHsgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbWQpOyBmb250LXdlaWdodDogNjAwOyB9XG5cbi5tb2RhbC1ib2R5IHsgcGFkZGluZzogMTZweDsgb3ZlcmZsb3cteTogYXV0bzsgfVxuXG4vKiBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcbiAgIFRZUEUgUElDS0VSXG4gICBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTAgKi9cblxuLnR5cGUtcGlja2VyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmcpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMteGwpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cteGwpO1xuICB3aWR0aDogNDIwcHg7XG4gIG1heC1oZWlnaHQ6IDQ4MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbmltYXRpb246IG1vZGFsSW4gMjAwbXMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpO1xufVxuXG4udHlwZS1waWNrZXItaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xufVxuLnR5cGUtcGlja2VyLWhlYWRlciBoMyB7IGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLW1kKTsgZm9udC13ZWlnaHQ6IDYwMDsgfVxuXG4udHlwZS1waWNrZXItc2VhcmNoIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbiAgY29sb3I6IHZhcigtLXRleHQtdGVydGlhcnkpO1xufVxuLnR5cGUtcGlja2VyLXNlYXJjaCBpbnB1dCB7XG4gIGJvcmRlcjogbm9uZTsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7IGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTsgb3V0bGluZTogbm9uZTsgd2lkdGg6IDEwMCU7XG59XG4udHlwZS1waWNrZXItc2VhcmNoIGlucHV0OjpwbGFjZWhvbGRlciB7IGNvbG9yOiB2YXIoLS10ZXh0LXRlcnRpYXJ5KTsgfVxuXG4udHlwZS1waWNrZXItYm9keSB7IG92ZXJmbG93LXk6IGF1dG87IHBhZGRpbmc6IDEycHggMTZweDsgfVxuXG4udHlwZS1waWNrZXItY2F0ZWdvcnkgeyBtYXJnaW4tYm90dG9tOiAxNnB4OyB9XG4udHlwZS1waWNrZXItY2F0ZWdvcnk6bGFzdC1jaGlsZCB7IG1hcmdpbi1ib3R0b206IDA7IH1cblxuLnR5cGUtcGlja2VyLWNhdGVnb3J5LWxhYmVsIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHMpO1xuICBmb250LXdlaWdodDogNjUwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLnR5cGUtcGlja2VyLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBnYXA6IDZweDtcbn1cblxuLnR5cGUtcGlja2VyLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDVweDtcbiAgcGFkZGluZzogMTBweCA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xufVxuLnR5cGUtcGlja2VyLWl0ZW06aG92ZXIge1xuICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudCk7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtbGlnaHQpO1xufVxuLnR5cGUtcGlja2VyLWl0ZW06YWN0aXZlIHsgdHJhbnNmb3JtOiBzY2FsZSgwLjk2KTsgfVxuXG4udHlwZS1waWNrZXItaWNvbiB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG4udHlwZS1waWNrZXItbGFiZWwgeyBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7IGZvbnQtd2VpZ2h0OiA1MDA7IH1cbi50eXBlLXBpY2tlci1lbXB0eSB7IHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZzogMjRweDsgY29sb3I6IHZhcigtLXRleHQtdGVydGlhcnkpOyB9XG5cbi8qIFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFxuICAgVE9BU1RcbiAgIFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MCAqL1xuXG4udG9hc3Qge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNDhweDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgxMnB4KTtcbiAgcGFkZGluZzogOHB4IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcbiAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWxnKTtcbiAgei1pbmRleDogMjAwO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4udG9hc3QudmlzaWJsZSB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKDApOyB9XG4udG9hc3Quc3VjY2VzcyB7IGJhY2tncm91bmQ6IHZhcigtLXN1Y2Nlc3MpOyBjb2xvcjogd2hpdGU7IH1cbi50b2FzdC5lcnJvciB7IGJhY2tncm91bmQ6IHZhcigtLWRhbmdlcik7IGNvbG9yOiB3aGl0ZTsgfVxuXG4vKiBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcbiAgIFFVSVogQlVJTERFUlxuICAgXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwICovXG5cbi8qIElubGluZSBxdWl6IHByZXZpZXcgaW4gZmllbGQgY2FyZHMgKi9cbi5maWVsZC1wcmV2aWV3LXF1aXogeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDZweDsgfVxuXG4uZmllbGQtcHJldmlldy1xdWl6LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogNnB4IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcbn1cblxuLmZpZWxkLXByZXZpZXctcXVpei1udW0ge1xuICB3aWR0aDogMThweDsgaGVpZ2h0OiAxOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1saWdodCk7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14eHMpO1xuICBmb250LXdlaWdodDogNjUwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5maWVsZC1wcmV2aWV3LXF1aXotdGV4dCB7XG4gIGZsZXg6IDE7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uZmllbGQtcHJldmlldy1xdWl6LW9wdHMge1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14eHMpO1xuICBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uZmllbGQtcHJldmlldy1xdWl6LWFkZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDVweDtcbiAgcGFkZGluZzogNnB4IDEwcHg7XG4gIGJvcmRlcjogMS41cHggZGFzaGVkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uKTtcbn1cbi5maWVsZC1wcmV2aWV3LXF1aXotYWRkOmhvdmVyIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQpOyBjb2xvcjogdmFyKC0tYWNjZW50KTsgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWxpZ2h0KTsgfVxuXG4ucXVpei1idWlsZGVyLXNlY3Rpb24geyBwYWRkaW5nOiAwOyB9XG5cbi5xdWl6LWJ1aWxkZXItdG9nZ2xlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA4cHggMDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xuICBmb250LXdlaWdodDogNTUwO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogY29sb3IgdmFyKC0tdHJhbnNpdGlvbik7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ucXVpei1idWlsZGVyLXRvZ2dsZTpob3ZlciB7IGNvbG9yOiB2YXIoLS10ZXh0KTsgfVxuXG4ucXVpei1idWlsZGVyLWFkZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyOiAxLjVweCBkYXNoZWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXRlcnRpYXJ5KTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24pO1xufVxuLnF1aXotYnVpbGRlci1hZGQ6aG92ZXIgeyBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudCk7IGNvbG9yOiB2YXIoLS1hY2NlbnQpOyBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtbGlnaHQpOyB9XG5cbi5pY29uLWJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDI4cHg7IGhlaWdodDogMjhweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbik7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuLmljb24tYnRuOmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpOyBjb2xvcjogdmFyKC0tdGV4dCk7IH1cblxuLnF1aXotYnVpbGRlci1ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4ucXVpei1jYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTtcbiAgcGFkZGluZzogMTRweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5KTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIHZhcigtLXRyYW5zaXRpb24pO1xufVxuLnF1aXotY2FyZDpob3ZlciB7IGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7IH1cblxuLnF1aXotY2FyZC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4ucXVpei1jYXJkLW51bSB7XG4gIHdpZHRoOiAyMHB4OyBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50KTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14cyk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLnF1aXotcXVlc3Rpb24taW5wdXQgeyBmbGV4OiAxOyB9XG4ucXVpei1vcHRpb25zIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiA0cHg7IG1hcmdpbi1ib3R0b206IDZweDsgfVxuLnF1aXotb3B0aW9uLXJvdyB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNnB4OyB9XG5cbi5xdWl6LWNvcnJlY3QtYnRuIHtcbiAgd2lkdGg6IDIwcHg7IGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLXRleHQtdGVydGlhcnkpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbGV4LXNocmluazogMDtcbiAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24pO1xufVxuLnF1aXotY29ycmVjdC1idG46aG92ZXIgeyBib3JkZXItY29sb3I6IHZhcigtLXN1Y2Nlc3MpOyB9XG4ucXVpei1jb3JyZWN0LWJ0bi5hY3RpdmUgeyBib3JkZXItY29sb3I6IHZhcigtLXN1Y2Nlc3MpOyBiYWNrZ3JvdW5kOiB2YXIoLS1zdWNjZXNzKTsgY29sb3I6IHdoaXRlOyB9XG5cbi5xdWl6LWFkZC1vcHRpb24ge1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDRweDtcbiAgYm9yZGVyOiBub25lOyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLXRleHQtdGVydGlhcnkpO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7IGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcbiAgY3Vyc29yOiBwb2ludGVyOyBwYWRkaW5nOiA0cHggMDtcbn1cbi5xdWl6LWFkZC1vcHRpb246aG92ZXIgeyBjb2xvcjogdmFyKC0tYWNjZW50KTsgfVxuXG4ucXVpei1leHRyYXMge1xuICBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDZweDtcbiAgcGFkZGluZy10b3A6IDhweDsgbWFyZ2luLXRvcDogNHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbn1cblxuLnF1aXotZXh0cmEtcm93IHtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7XG59XG5cbi5xdWl6LWNvbmZpZy1ncmlkIHtcbiAgZGlzcGxheTogZmxleDsgZmxleC13cmFwOiB3cmFwOyBnYXA6IDhweCAxNnB4O1xuICBwYWRkaW5nOiA0cHggMDtcbn1cblxuLnF1aXotY29uZmlnLXRvZ2dsZSB7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNnB4O1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7IGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5xdWl6LWNvbmZpZy10b2dnbGUgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgYWNjZW50LWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xufVxuXG4vKiBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcbiAgIERFTU8gVEFCXG4gICBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTAgKi9cblxuLmRlbW8tdGFiIHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogMzJweDtcbiAgbWF4LXdpZHRoOiA3MjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZGVtby10YWItZW1wdHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgY29sb3I6IHZhcigtLXRleHQtdGVydGlhcnkpO1xufVxuXG4uZGVtby10YWItaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4uZGVtby10YWItaGVhZGVyIGgyIHsgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbGcpOyBmb250LXdlaWdodDogNjAwOyB9XG5cbi5kZW1vLXRhYi1kZXNjIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xuICBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5kZW1vLWZpZWxkcyB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMTRweDsgfVxuXG4uZGVtby1maWVsZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWVsZXZhdGVkKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcbn1cbi5kZW1vLWZpZWxkOmhvdmVyIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXIpOyB9XG5cbi5kZW1vLWZpZWxkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLmRlbW8tZmllbGQtbGFiZWwgeyBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgZm9udC13ZWlnaHQ6IDUwMDsgfVxuLmRlbW8tZmllbGQtbWV0YSB7IGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTsgY29sb3I6IHZhcigtLXRleHQtdGVydGlhcnkpOyB9XG4uZGVtby1maWVsZC1pbnB1dCB7IHdpZHRoOiAxMDAlOyB9XG4uZGVtby1maWVsZC1pbnB1dCAuZm9ybS1pbnB1dCB7IHdpZHRoOiAxMDAlOyB9XG4uZGVtby1maWVsZC1pbnB1dCBzZWxlY3QgeyB3aWR0aDogMTAwJTsgfVxuXG4uZGVtby10b2dnbGUtbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIFx1MjUwMFx1MjUwMCBBdWRpbyBlZGl0b3IgXHUyNTAwXHUyNTAwICovXG4uZGVtby1hdWRpby1lZGl0b3IgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDhweDsgfVxuLmRlbW8tYXVkaW8tcm93IHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7IH1cbi5kZW1vLWF1ZGlvLXRyaW0geyBkaXNwbGF5OiBmbGV4OyBnYXA6IDEycHg7IGZsZXgtd3JhcDogd3JhcDsgfVxuLmRlbW8tYXVkaW8tdHJpbS1maWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNXB4O1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XG59XG4uZGVtby1hdWRpby10cmltLWxhYmVsIHsgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTsgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHMpOyBmb250LXdlaWdodDogNTAwOyB9XG4uZGVtby1hdWRpby10cmltLXVuaXQgeyBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7IGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhzKTsgfVxuXG4vKiBcdTI1MDBcdTI1MDAgRGF0ZSBlZGl0b3IgXHUyNTAwXHUyNTAwICovXG4uZGVtby1kYXRlLWVkaXRvciB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogOHB4OyB9XG4uZGVtby1kYXRlLWVkaXRvciAuZm9ybS1pbnB1dCB7IGZsZXg6IDE7IH1cblxuLyogXHUyNTAwXHUyNTAwIEltYWdlIGFycmF5IFx1MjUwMFx1MjUwMCAqL1xuLmRlbW8taW1hZ2UtYXJyYXkgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDhweDsgfVxuLmRlbW8taW1hZ2UtYXJyYXktaXRlbSB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogOHB4OyB9XG4uZGVtby1pbWFnZS1hcnJheS10aHVtYiB7XG4gIHdpZHRoOiAzNnB4OyBoZWlnaHQ6IDM2cHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saWdodCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuLmRlbW8taW1hZ2UtYXJyYXktdGh1bWIgaW1nIHsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgb2JqZWN0LWZpdDogY292ZXI7IH1cbi5kZW1vLWltYWdlLWFycmF5LWFkZCB7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBnYXA6IDZweDtcbiAgcGFkZGluZzogN3B4O1xuICBib3JkZXI6IDEuNXB4IGRhc2hlZCB2YXIoLS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLXRleHQtdGVydGlhcnkpO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbik7XG59XG4uZGVtby1pbWFnZS1hcnJheS1hZGQ6aG92ZXIgeyBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudCk7IGNvbG9yOiB2YXIoLS1hY2NlbnQpOyBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtbGlnaHQpOyB9XG5cbi8qIFx1MjUwMFx1MjUwMCBHcm91cCBlZGl0b3IgXHUyNTAwXHUyNTAwICovXG4uZGVtby1ncm91cC1lZGl0b3Ige1xuICBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnKTtcbn1cbi5kZW1vLWdyb3VwLWZpZWxkIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiA0cHg7IH1cbi5kZW1vLWdyb3VwLWZpZWxkLWxhYmVsIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xufVxuLmRlbW8tZ3JvdXAtZmllbGQta2V5IHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHMpO1xuICBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm8pO1xufVxuLmRlbW8tZ3JvdXAtZW1wdHkge1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXRlcnRpYXJ5KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMnB4O1xufVxuXG4vKiBcdTI1MDBcdTI1MDAgR3JvdXAgYXJyYXkgXHUyNTAwXHUyNTAwICovXG4uZGVtby1ncm91cC1hcnJheSB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMTBweDsgfVxuLmRlbW8tZ3JvdXAtYXJyYXktaXRlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uZGVtby1ncm91cC1hcnJheS1pdGVtLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogNnB4IDEwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saWdodCk7XG59XG4uZGVtby1ncm91cC1hcnJheS1pdGVtLW51bSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhzKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuLmRlbW8tZ3JvdXAtYXJyYXktaXRlbSAuZGVtby1ncm91cC1lZGl0b3Ige1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uZGVtby1ncm91cC1hcnJheS1hZGQge1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZ2FwOiA2cHg7XG4gIHBhZGRpbmc6IDdweDtcbiAgYm9yZGVyOiAxLjVweCBkYXNoZWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXRlcnRpYXJ5KTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24pO1xufVxuLmRlbW8tZ3JvdXAtYXJyYXktYWRkOmhvdmVyIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQpOyBjb2xvcjogdmFyKC0tYWNjZW50KTsgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWxpZ2h0KTsgfVxuXG4vKiBcdTI1MDBcdTI1MDAgU3ViLWZpZWxkcyBlZGl0b3IgKGluIGZpZWxkIG1vZGFsKSBcdTI1MDBcdTI1MDAgKi9cbi5zdWJmaWVsZHMtZWRpdG9yIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiA4cHg7IH1cbi5zdWJmaWVsZC1yb3cge1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnKTtcbn1cbi5zdWJmaWVsZC1yb3ctaW5wdXRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG59XG4uc3ViZmllbGQtcm93LWlucHV0cyAuZm9ybS1pbnB1dCB7IGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTsgcGFkZGluZzogNXB4IDhweDsgfVxuLnN1YmZpZWxkLXJvdy1pbnB1dHMgc2VsZWN0LmZvcm0taW5wdXQgeyBwYWRkaW5nOiA1cHggNHB4OyB9XG4uc3ViZmllbGQtYWRkIHtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGdhcDogNnB4O1xuICBwYWRkaW5nOiA3cHg7XG4gIGJvcmRlcjogMS41cHggZGFzaGVkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uKTtcbn1cbi5zdWJmaWVsZC1hZGQ6aG92ZXIgeyBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudCk7IGNvbG9yOiB2YXIoLS1hY2NlbnQpOyBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtbGlnaHQpOyB9XG5cbi8qIFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFxuICAgTUFOSUZFU1QgVEFCXG4gICBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTBcdTI1NTAgKi9cblxuLm1hbmlmZXN0LXRhYiB7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmc6IDMycHg7XG4gIG1heC13aWR0aDogNzIwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hbmlmZXN0LXRhYi1oZWFkZXIgeyBtYXJnaW4tYm90dG9tOiA2cHg7IH1cbi5tYW5pZmVzdC10YWItaGVhZGVyIGgyIHsgZm9udC1zaXplOiAyMHB4OyBmb250LXdlaWdodDogNjUwOyB9XG4ubWFuaWZlc3QtdGFiLWRlc2MgeyBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTsgY29sb3I6IHZhcigtLXRleHQtdGVydGlhcnkpOyBtYXJnaW4tYm90dG9tOiAyOHB4OyBsaW5lLWhlaWdodDogMS41OyB9XG5cbi5tYW5pZmVzdC1zZWN0aW9ucyB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMjhweDsgfVxuXG4ubWFuaWZlc3Qtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWVsZXZhdGVkKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcbn1cbi5tYW5pZmVzdC1zZWN0aW9uIGgzIHsgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbWQpOyBmb250LXdlaWdodDogNjAwOyBtYXJnaW4tYm90dG9tOiA0cHg7IH1cbi5tYW5pZmVzdC1zZWN0aW9uLWRlc2MgeyBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7IGNvbG9yOiB2YXIoLS10ZXh0LXRlcnRpYXJ5KTsgbWFyZ2luLWJvdHRvbTogMTRweDsgbGluZS1oZWlnaHQ6IDEuNTsgfVxuXG4uZGVwLWdyaWQgeyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7IGdhcDogOHB4OyB9XG5cbi5kZXAtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDEwcHg7XG4gIHBhZGRpbmc6IDEycHggMTRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbik7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5KTtcbn1cbi5kZXAtY2FyZDpob3ZlciB7IGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50KTsgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWxpZ2h0KTsgfVxuLmRlcC1jYXJkLmFjdGl2ZSB7IGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50KTsgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWxpZ2h0KTsgfVxuLmRlcC1jYXJkIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7IG1hcmdpbi10b3A6IDJweDsgZmxleC1zaHJpbms6IDA7IH1cbi5kZXAtbmFtZSB7IGZvbnQtd2VpZ2h0OiA1NTA7IGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm8pOyBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7IG1hcmdpbi1ib3R0b206IDJweDsgfVxuLmRlcC1kZXNjIHsgY29sb3I6IHZhcigtLXRleHQtdGVydGlhcnkpOyBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7IGxpbmUtaGVpZ2h0OiAxLjQ7IH1cblxuLyogXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXG4gICBQUkVWSUVXIFBBTkVcbiAgIFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MCAqL1xuXG4ucHJldmlldy1wYW5lIHtcbiAgd2lkdGg6IDMyMHB4OyBtaW4td2lkdGg6IDMyMHB4O1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5wcmV2aWV3LXBhbmUtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5KTtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5wcmV2aWV3LXBhbmUtbGFiZWwge1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14cyk7XG4gIGZvbnQtd2VpZ2h0OiA2NTA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXRlcnRpYXJ5KTtcbiAgZmxleDogMTtcbn1cblxuLnByZXZpZXctcGFuZS1mcmFtZSB7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxMnB4O1xufVxuXG4ucHJldmlldy1mcmFtZSB7XG4gIHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi8qIFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFxuICAgQU5JTUFUSU9OUyAmIFVUSUxJVElFU1xuICAgXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwICovXG5cbi8qIFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFxuICAgRklFTEQgRURJVCBNT0RBTFxuICAgXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwICovXG5cbi5maWVsZC1tb2RhbC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwO1xuICBhbmltYXRpb246IGZhZGVJbiAxMjBtcyBlYXNlO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbn1cbltkYXRhLXRoZW1lPVwiZGFya1wiXSAuZmllbGQtbW9kYWwtb3ZlcmxheSB7IGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC42KTsgfVxuXG4uZmllbGQtbW9kYWwge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy14bCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy14bCk7XG4gIHdpZHRoOiA1MjBweDtcbiAgbWF4LWhlaWdodDogODV2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYW5pbWF0aW9uOiBtb2RhbEluIDE4MG1zIGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKTtcbn1cblxuLmZpZWxkLW1vZGFsLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTZweCAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5maWVsZC1tb2RhbC1oZWFkZXItbGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cblxuLmZpZWxkLW1vZGFsLXR5cGUtaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMzJweDsgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtbGlnaHQpO1xuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbn1cblxuLmZpZWxkLW1vZGFsLWZpZWxkLW5hbWUge1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1tZCk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbn1cblxuLmZpZWxkLW1vZGFsLWZpZWxkLXR5cGUge1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXRlcnRpYXJ5KTtcbn1cblxuLmZpZWxkLW1vZGFsLWNsb3NlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAzMHB4OyBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uKTtcbn1cbi5maWVsZC1tb2RhbC1jbG9zZTpob3ZlciB7IGJhY2tncm91bmQ6IHZhcigtLWJnLWFjdGl2ZSk7IGNvbG9yOiB2YXIoLS10ZXh0KTsgfVxuXG4uZmllbGQtbW9kYWwtYm9keSB7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmc6IDRweCAwO1xufVxuXG4uZmllbGQtbW9kYWwtc2VjdGlvbiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xufVxuXG4uZmllbGQtbW9kYWwtc2VjdGlvbi1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTtcbiAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbik7XG59XG4uZmllbGQtbW9kYWwtc2VjdGlvbi1oZWFkZXI6aG92ZXIgeyBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7IGNvbG9yOiB2YXIoLS10ZXh0KTsgfVxuXG4uZmllbGQtbW9kYWwtc2VjdGlvbi1pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLXRleHQtdGVydGlhcnkpO1xufVxuXG4uZmllbGQtbW9kYWwtc2VjdGlvbi10aXRsZSB7IGZsZXg6IDE7IH1cblxuLmZpZWxkLW1vZGFsLXNlY3Rpb24tYm9keSB7XG4gIHBhZGRpbmc6IDRweCAyMHB4IDE4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTJweDtcbiAgYW5pbWF0aW9uOiBzbGlkZUluVXAgMTIwbXMgZWFzZTtcbn1cblxuLmZpZWxkLW1vZGFsLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGdhcDogOHB4O1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuQGtleWZyYW1lcyBzbGlkZUluVXAge1xuICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7IH1cbiAgdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbn1cblxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XG4gIH1cbn1cbmA7XG4gICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzKTtcbiAgICAgICAgfSkoKTtcbiAgICAgICIsICJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB0eXBlIERpc3BhdGNoIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7XG4gIFRlbXBsYXRlU2NoZW1hLCBTY2hlbWFTZWN0aW9uLCBTY2hlbWFGaWVsZCwgU2NoZW1hQ29uZGl0aW9uYWwsIE1hbmlmZXN0RGF0YSxcbiAgVGFiLCBUaGVtZSxcbn0gZnJvbSAnLi90eXBlcydcbmltcG9ydCB0eXBlIHsgTG9hZFJlc3BvbnNlIH0gZnJvbSAnLi9hcGknXG5pbXBvcnQgeyBkZWVwQ2xvbmUgfSBmcm9tICcuL3V0aWxzJ1xuXG4vLyBcdTI1MDBcdTI1MDAgRGVmYXVsdHMgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1NDSEVNQTogVGVtcGxhdGVTY2hlbWEgPSB7XG4gIHNlY3Rpb25zOiBbeyBrZXk6ICdiYXNpY3MnLCBsYWJlbDogJ1RoZSBCYXNpY3MnLCBmaWVsZHM6IFtdIH1dLFxufVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9NQU5JRkVTVDogTWFuaWZlc3REYXRhID0ge1xuICBlbnRyeTogJ2luZGV4LnRzeCcsXG4gIHNjcmVlbnM6IFtdLFxuICBkZXBlbmRlbmNpZXM6IHt9LFxuICBmb250czogW10sXG59XG5cbi8vIFx1MjUwMFx1MjUwMCBTdGF0ZSBzaGFwZSBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuZXhwb3J0IHR5cGUgQ29uZmlnRGF0YSA9IHtcbiAgc2NoZW1hOiBUZW1wbGF0ZVNjaGVtYVxuICBkZW1vOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICBtYW5pZmVzdDogTWFuaWZlc3REYXRhXG59XG5cbmV4cG9ydCB0eXBlIFN0dWRpb1N0YXRlID0ge1xuICBsb2FkZWQ6IENvbmZpZ0RhdGFcbiAgd29ya2luZzogQ29uZmlnRGF0YVxuICB1aToge1xuICAgIHNlbGVjdGVkU2VjdGlvbjogbnVtYmVyXG4gICAgc2VsZWN0ZWRGaWVsZDogbnVtYmVyXG4gICAgYWN0aXZlVGFiOiBUYWJcbiAgICB0aGVtZTogVGhlbWVcbiAgICBzZWFyY2hRdWVyeTogc3RyaW5nXG4gICAgc2hvd1ByZXZpZXc6IGJvb2xlYW5cbiAgfVxuICB0b2FzdDogeyBtZXNzYWdlOiBzdHJpbmc7IHR5cGU6ICdzdWNjZXNzJyB8ICdlcnJvcicgfSB8IG51bGxcbn1cblxuLy8gXHUyNTAwXHUyNTAwIEFjdGlvbnMgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cbmV4cG9ydCB0eXBlIEZpZWxkTG9jYXRpb24gPSB7IHNlY3Rpb25JZHg6IG51bWJlcjsgZmllbGRJZHg6IG51bWJlciB9XG5cbmV4cG9ydCB0eXBlIFN0dWRpb0FjdGlvbiA9XG4gIHwgeyB0eXBlOiAnTE9BREVEJzsgZGF0YTogTG9hZFJlc3BvbnNlIH1cbiAgfCB7IHR5cGU6ICdTQVZFRCcgfVxuICB8IHsgdHlwZTogJ1NFVF9TQ0hFTUEnOyBzY2hlbWE6IFRlbXBsYXRlU2NoZW1hIH1cbiAgfCB7IHR5cGU6ICdBRERfU0VDVElPTic7IHNlY3Rpb246IFNjaGVtYVNlY3Rpb24gfVxuICB8IHsgdHlwZTogJ1VQREFURV9TRUNUSU9OJzsgaWR4OiBudW1iZXI7IHNlY3Rpb246IFNjaGVtYVNlY3Rpb24gfVxuICB8IHsgdHlwZTogJ0RFTEVURV9TRUNUSU9OJzsgaWR4OiBudW1iZXIgfVxuICB8IHsgdHlwZTogJ01PVkVfU0VDVElPTic7IGZyb206IG51bWJlcjsgdG86IG51bWJlciB9XG4gIHwgeyB0eXBlOiAnQUREX0ZJRUxEJzsgc2VjdGlvbklkeDogbnVtYmVyOyBmaWVsZDogU2NoZW1hRmllbGQgfVxuICB8IHsgdHlwZTogJ1VQREFURV9GSUVMRCc7IHNlY3Rpb25JZHg6IG51bWJlcjsgZmllbGRJZHg6IG51bWJlcjsgZmllbGQ6IFNjaGVtYUZpZWxkIH1cbiAgfCB7IHR5cGU6ICdERUxFVEVfRklFTEQnOyBzZWN0aW9uSWR4OiBudW1iZXI7IGZpZWxkSWR4OiBudW1iZXIgfVxuICB8IHsgdHlwZTogJ0RVUExJQ0FURV9GSUVMRCc7IHNlY3Rpb25JZHg6IG51bWJlcjsgZmllbGRJZHg6IG51bWJlciB9XG4gIHwgeyB0eXBlOiAnTU9WRV9GSUVMRCc7IGZyb206IG51bWJlcjsgdG86IG51bWJlciB9XG4gIHwgeyB0eXBlOiAnU0VUX0RFTU8nOyBrZXk6IHN0cmluZzsgdmFsdWU6IHVua25vd24gfVxuICB8IHsgdHlwZTogJ1NFVF9ERU1PX0FMTCc7IGRlbW86IFJlY29yZDxzdHJpbmcsIHVua25vd24+IH1cbiAgfCB7IHR5cGU6ICdTRVRfTUFOSUZFU1QnOyBtYW5pZmVzdDogTWFuaWZlc3REYXRhIH1cbiAgfCB7IHR5cGU6ICdTRUxFQ1RfU0VDVElPTic7IGlkeDogbnVtYmVyIH1cbiAgfCB7IHR5cGU6ICdTRUxFQ1RfRklFTEQnOyBpZHg6IG51bWJlciB9XG4gIHwgeyB0eXBlOiAnU0VUX1RBQic7IHRhYjogVGFiIH1cbiAgfCB7IHR5cGU6ICdTRVRfVEhFTUUnOyB0aGVtZTogVGhlbWUgfVxuICB8IHsgdHlwZTogJ1NIT1dfVE9BU1QnOyBtZXNzYWdlOiBzdHJpbmc7IHRvYXN0VHlwZTogJ3N1Y2Nlc3MnIHwgJ2Vycm9yJyB9XG4gIHwgeyB0eXBlOiAnSElERV9UT0FTVCcgfVxuICB8IHsgdHlwZTogJ0lNUE9SVF9DT05GSUcnOyBkYXRhOiBQYXJ0aWFsPENvbmZpZ0RhdGE+IH1cbiAgfCB7IHR5cGU6ICdTRVRfU0VBUkNIJzsgcXVlcnk6IHN0cmluZyB9XG4gIHwgeyB0eXBlOiAnVE9HR0xFX1BSRVZJRVcnIH1cbiAgfCB7IHR5cGU6ICdBRERfQ09ORElUSU9OQUwnOyBjb25kaXRpb25hbDogU2NoZW1hQ29uZGl0aW9uYWwgfVxuICB8IHsgdHlwZTogJ1VQREFURV9DT05ESVRJT05BTCc7IGlkeDogbnVtYmVyOyBjb25kaXRpb25hbDogU2NoZW1hQ29uZGl0aW9uYWwgfVxuICB8IHsgdHlwZTogJ0RFTEVURV9DT05ESVRJT05BTCc7IGlkeDogbnVtYmVyIH1cblxuLy8gXHUyNTAwXHUyNTAwIFJlZHVjZXIgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cbmV4cG9ydCBmdW5jdGlvbiBzdHVkaW9SZWR1Y2VyKHN0YXRlOiBTdHVkaW9TdGF0ZSwgYWN0aW9uOiBTdHVkaW9BY3Rpb24pOiBTdHVkaW9TdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdMT0FERUQnOiB7XG4gICAgICBjb25zdCBzY2hlbWEgPSBhY3Rpb24uZGF0YS5zY2hlbWEgPz8gREVGQVVMVF9TQ0hFTUFcbiAgICAgIGNvbnN0IGRlbW8gPSBhY3Rpb24uZGF0YS5kZW1vID8/IHt9XG4gICAgICBjb25zdCByYXcgPSBhY3Rpb24uZGF0YS5tYW5pZmVzdFxuICAgICAgY29uc3QgbWFuaWZlc3QgPSB7XG4gICAgICAgIGVudHJ5OiByYXc/LmVudHJ5ID8/IERFRkFVTFRfTUFOSUZFU1QuZW50cnksXG4gICAgICAgIHNjcmVlbnM6IHJhdz8uc2NyZWVucyA/PyBERUZBVUxUX01BTklGRVNULnNjcmVlbnMsXG4gICAgICAgIGRlcGVuZGVuY2llczogcmF3Py5kZXBlbmRlbmNpZXMgPz8gREVGQVVMVF9NQU5JRkVTVC5kZXBlbmRlbmNpZXMsXG4gICAgICAgIGZvbnRzOiByYXc/LmZvbnRzID8/IERFRkFVTFRfTUFOSUZFU1QuZm9udHMsXG4gICAgICB9XG4gICAgICBjb25zdCBjb25maWcgPSB7IHNjaGVtYSwgZGVtbywgbWFuaWZlc3QgfVxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRlZDogZGVlcENsb25lKGNvbmZpZyksIHdvcmtpbmc6IGRlZXBDbG9uZShjb25maWcpIH1cbiAgICB9XG5cbiAgICBjYXNlICdTQVZFRCc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGVkOiBkZWVwQ2xvbmUoc3RhdGUud29ya2luZykgfVxuXG4gICAgY2FzZSAnU0VUX1NDSEVNQSc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgd29ya2luZzogeyAuLi5zdGF0ZS53b3JraW5nLCBzY2hlbWE6IGFjdGlvbi5zY2hlbWEgfSB9XG5cbiAgICBjYXNlICdBRERfU0VDVElPTic6IHtcbiAgICAgIGNvbnN0IHNlY3Rpb25zID0gWy4uLnN0YXRlLndvcmtpbmcuc2NoZW1hLnNlY3Rpb25zLCBhY3Rpb24uc2VjdGlvbl1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB3b3JraW5nOiB7IC4uLnN0YXRlLndvcmtpbmcsIHNjaGVtYTogeyAuLi5zdGF0ZS53b3JraW5nLnNjaGVtYSwgc2VjdGlvbnMgfSB9LFxuICAgICAgICB1aTogeyAuLi5zdGF0ZS51aSwgc2VsZWN0ZWRTZWN0aW9uOiBzZWN0aW9ucy5sZW5ndGggLSAxLCBzZWxlY3RlZEZpZWxkOiAtMSB9LFxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ1VQREFURV9TRUNUSU9OJzoge1xuICAgICAgY29uc3Qgc2VjdGlvbnMgPSBzdGF0ZS53b3JraW5nLnNjaGVtYS5zZWN0aW9ucy5tYXAoKHMsIGkpID0+XG4gICAgICAgIGkgPT09IGFjdGlvbi5pZHggPyBhY3Rpb24uc2VjdGlvbiA6IHMsXG4gICAgICApXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgd29ya2luZzogeyAuLi5zdGF0ZS53b3JraW5nLCBzY2hlbWE6IHsgLi4uc3RhdGUud29ya2luZy5zY2hlbWEsIHNlY3Rpb25zIH0gfSB9XG4gICAgfVxuXG4gICAgY2FzZSAnREVMRVRFX1NFQ1RJT04nOiB7XG4gICAgICBjb25zdCBzZWN0aW9ucyA9IHN0YXRlLndvcmtpbmcuc2NoZW1hLnNlY3Rpb25zLmZpbHRlcigoXywgaSkgPT4gaSAhPT0gYWN0aW9uLmlkeClcbiAgICAgIGNvbnN0IHNlbCA9IE1hdGgubWluKHN0YXRlLnVpLnNlbGVjdGVkU2VjdGlvbiwgTWF0aC5tYXgoMCwgc2VjdGlvbnMubGVuZ3RoIC0gMSkpXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgd29ya2luZzogeyAuLi5zdGF0ZS53b3JraW5nLCBzY2hlbWE6IHsgLi4uc3RhdGUud29ya2luZy5zY2hlbWEsIHNlY3Rpb25zIH0gfSxcbiAgICAgICAgdWk6IHsgLi4uc3RhdGUudWksIHNlbGVjdGVkU2VjdGlvbjogc2VsLCBzZWxlY3RlZEZpZWxkOiAtMSB9LFxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ01PVkVfU0VDVElPTic6IHtcbiAgICAgIGNvbnN0IHNlY3Rpb25zID0gWy4uLnN0YXRlLndvcmtpbmcuc2NoZW1hLnNlY3Rpb25zXVxuICAgICAgY29uc3QgW21vdmVkXSA9IHNlY3Rpb25zLnNwbGljZShhY3Rpb24uZnJvbSwgMSlcbiAgICAgIHNlY3Rpb25zLnNwbGljZShhY3Rpb24udG8sIDAsIG1vdmVkKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHdvcmtpbmc6IHsgLi4uc3RhdGUud29ya2luZywgc2NoZW1hOiB7IC4uLnN0YXRlLndvcmtpbmcuc2NoZW1hLCBzZWN0aW9ucyB9IH0sXG4gICAgICAgIHVpOiB7IC4uLnN0YXRlLnVpLCBzZWxlY3RlZFNlY3Rpb246IGFjdGlvbi50byB9LFxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ0FERF9GSUVMRCc6IHtcbiAgICAgIGNvbnN0IHNlY3Rpb25zID0gc3RhdGUud29ya2luZy5zY2hlbWEuc2VjdGlvbnMubWFwKChzLCBpKSA9PiB7XG4gICAgICAgIGlmIChpICE9PSBhY3Rpb24uc2VjdGlvbklkeCkgcmV0dXJuIHNcbiAgICAgICAgcmV0dXJuIHsgLi4ucywgZmllbGRzOiBbLi4ucy5maWVsZHMsIGFjdGlvbi5maWVsZF0gfVxuICAgICAgfSlcbiAgICAgIGNvbnN0IG5ld0ZpZWxkSWR4ID0gc2VjdGlvbnNbYWN0aW9uLnNlY3Rpb25JZHhdLmZpZWxkcy5sZW5ndGggLSAxXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgd29ya2luZzogeyAuLi5zdGF0ZS53b3JraW5nLCBzY2hlbWE6IHsgLi4uc3RhdGUud29ya2luZy5zY2hlbWEsIHNlY3Rpb25zIH0gfSxcbiAgICAgICAgdWk6IHsgLi4uc3RhdGUudWksIHNlbGVjdGVkRmllbGQ6IG5ld0ZpZWxkSWR4IH0sXG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSAnVVBEQVRFX0ZJRUxEJzoge1xuICAgICAgY29uc3Qgc2VjdGlvbnMgPSBzdGF0ZS53b3JraW5nLnNjaGVtYS5zZWN0aW9ucy5tYXAoKHMsIHNpKSA9PiB7XG4gICAgICAgIGlmIChzaSAhPT0gYWN0aW9uLnNlY3Rpb25JZHgpIHJldHVybiBzXG4gICAgICAgIHJldHVybiB7IC4uLnMsIGZpZWxkczogcy5maWVsZHMubWFwKChmLCBmaSkgPT4gZmkgPT09IGFjdGlvbi5maWVsZElkeCA/IGFjdGlvbi5maWVsZCA6IGYpIH1cbiAgICAgIH0pXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgd29ya2luZzogeyAuLi5zdGF0ZS53b3JraW5nLCBzY2hlbWE6IHsgLi4uc3RhdGUud29ya2luZy5zY2hlbWEsIHNlY3Rpb25zIH0gfSB9XG4gICAgfVxuXG4gICAgY2FzZSAnREVMRVRFX0ZJRUxEJzoge1xuICAgICAgY29uc3QgZGVsZXRlZEtleSA9IHN0YXRlLndvcmtpbmcuc2NoZW1hLnNlY3Rpb25zW2FjdGlvbi5zZWN0aW9uSWR4XT8uZmllbGRzW2FjdGlvbi5maWVsZElkeF0/LmtleVxuICAgICAgY29uc3Qgc2VjdGlvbnMgPSBzdGF0ZS53b3JraW5nLnNjaGVtYS5zZWN0aW9ucy5tYXAoKHMsIHNpKSA9PiB7XG4gICAgICAgIGlmIChzaSAhPT0gYWN0aW9uLnNlY3Rpb25JZHgpIHJldHVybiBzXG4gICAgICAgIHJldHVybiB7IC4uLnMsIGZpZWxkczogcy5maWVsZHMuZmlsdGVyKChfLCBmaSkgPT4gZmkgIT09IGFjdGlvbi5maWVsZElkeCkgfVxuICAgICAgfSlcbiAgICAgIGNvbnN0IGRlbW8gPSB7IC4uLnN0YXRlLndvcmtpbmcuZGVtbyB9XG4gICAgICBpZiAoZGVsZXRlZEtleSkgZGVsZXRlIGRlbW9bZGVsZXRlZEtleV1cbiAgICAgIGNvbnN0IG5ld1NlbCA9IE1hdGgubWluKHN0YXRlLnVpLnNlbGVjdGVkRmllbGQsIE1hdGgubWF4KC0xLCBzZWN0aW9uc1thY3Rpb24uc2VjdGlvbklkeF0uZmllbGRzLmxlbmd0aCAtIDEpKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHdvcmtpbmc6IHsgLi4uc3RhdGUud29ya2luZywgc2NoZW1hOiB7IC4uLnN0YXRlLndvcmtpbmcuc2NoZW1hLCBzZWN0aW9ucyB9LCBkZW1vIH0sXG4gICAgICAgIHVpOiB7IC4uLnN0YXRlLnVpLCBzZWxlY3RlZEZpZWxkOiBuZXdTZWwgfSxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdEVVBMSUNBVEVfRklFTEQnOiB7XG4gICAgICBjb25zdCBzZWN0aW9ucyA9IHN0YXRlLndvcmtpbmcuc2NoZW1hLnNlY3Rpb25zLm1hcCgocywgc2kpID0+IHtcbiAgICAgICAgaWYgKHNpICE9PSBhY3Rpb24uc2VjdGlvbklkeCkgcmV0dXJuIHNcbiAgICAgICAgY29uc3Qgb3JpZ2luYWwgPSBzLmZpZWxkc1thY3Rpb24uZmllbGRJZHhdXG4gICAgICAgIGlmICghb3JpZ2luYWwpIHJldHVybiBzXG4gICAgICAgIGNvbnN0IGNvcHkgPSBkZWVwQ2xvbmUob3JpZ2luYWwpXG4gICAgICAgIGNvcHkua2V5ID0gY29weS5rZXkgKyAnQ29weSdcbiAgICAgICAgY29uc3QgZmllbGRzID0gWy4uLnMuZmllbGRzXVxuICAgICAgICBmaWVsZHMuc3BsaWNlKGFjdGlvbi5maWVsZElkeCArIDEsIDAsIGNvcHkpXG4gICAgICAgIHJldHVybiB7IC4uLnMsIGZpZWxkcyB9XG4gICAgICB9KVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHdvcmtpbmc6IHsgLi4uc3RhdGUud29ya2luZywgc2NoZW1hOiB7IC4uLnN0YXRlLndvcmtpbmcuc2NoZW1hLCBzZWN0aW9ucyB9IH0sXG4gICAgICAgIHVpOiB7IC4uLnN0YXRlLnVpLCBzZWxlY3RlZEZpZWxkOiBhY3Rpb24uZmllbGRJZHggKyAxIH0sXG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSAnTU9WRV9GSUVMRCc6IHtcbiAgICAgIGNvbnN0IHNlY3Rpb24gPSBzdGF0ZS53b3JraW5nLnNjaGVtYS5zZWN0aW9uc1tzdGF0ZS51aS5zZWxlY3RlZFNlY3Rpb25dXG4gICAgICBpZiAoIXNlY3Rpb24pIHJldHVybiBzdGF0ZVxuICAgICAgY29uc3QgZmllbGRzID0gWy4uLnNlY3Rpb24uZmllbGRzXVxuICAgICAgY29uc3QgW21vdmVkXSA9IGZpZWxkcy5zcGxpY2UoYWN0aW9uLmZyb20sIDEpXG4gICAgICBjb25zdCBpbnNlcnRBdCA9IGFjdGlvbi50byA+IGFjdGlvbi5mcm9tID8gYWN0aW9uLnRvIC0gMSA6IGFjdGlvbi50b1xuICAgICAgZmllbGRzLnNwbGljZShpbnNlcnRBdCwgMCwgbW92ZWQpXG4gICAgICBjb25zdCBzZWN0aW9ucyA9IHN0YXRlLndvcmtpbmcuc2NoZW1hLnNlY3Rpb25zLm1hcCgocywgaSkgPT5cbiAgICAgICAgaSA9PT0gc3RhdGUudWkuc2VsZWN0ZWRTZWN0aW9uID8geyAuLi5zLCBmaWVsZHMgfSA6IHMsXG4gICAgICApXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgd29ya2luZzogeyAuLi5zdGF0ZS53b3JraW5nLCBzY2hlbWE6IHsgLi4uc3RhdGUud29ya2luZy5zY2hlbWEsIHNlY3Rpb25zIH0gfSxcbiAgICAgICAgdWk6IHsgLi4uc3RhdGUudWksIHNlbGVjdGVkRmllbGQ6IGluc2VydEF0IH0sXG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSAnU0VUX0RFTU8nOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHdvcmtpbmc6IHsgLi4uc3RhdGUud29ya2luZywgZGVtbzogeyAuLi5zdGF0ZS53b3JraW5nLmRlbW8sIFthY3Rpb24ua2V5XTogYWN0aW9uLnZhbHVlIH0gfSB9XG5cbiAgICBjYXNlICdTRVRfREVNT19BTEwnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHdvcmtpbmc6IHsgLi4uc3RhdGUud29ya2luZywgZGVtbzogYWN0aW9uLmRlbW8gfSB9XG5cbiAgICBjYXNlICdTRVRfTUFOSUZFU1QnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHdvcmtpbmc6IHsgLi4uc3RhdGUud29ya2luZywgbWFuaWZlc3Q6IGFjdGlvbi5tYW5pZmVzdCB9IH1cblxuICAgIGNhc2UgJ1NFTEVDVF9TRUNUSU9OJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB1aTogeyAuLi5zdGF0ZS51aSwgc2VsZWN0ZWRTZWN0aW9uOiBhY3Rpb24uaWR4LCBzZWxlY3RlZEZpZWxkOiAtMSB9IH1cblxuICAgIGNhc2UgJ1NFTEVDVF9GSUVMRCc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdWk6IHsgLi4uc3RhdGUudWksIHNlbGVjdGVkRmllbGQ6IGFjdGlvbi5pZHggfSB9XG5cbiAgICBjYXNlICdTRVRfVEFCJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB1aTogeyAuLi5zdGF0ZS51aSwgYWN0aXZlVGFiOiBhY3Rpb24udGFiIH0gfVxuXG4gICAgY2FzZSAnU0VUX1RIRU1FJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB1aTogeyAuLi5zdGF0ZS51aSwgdGhlbWU6IGFjdGlvbi50aGVtZSB9IH1cblxuICAgIGNhc2UgJ1NIT1dfVE9BU1QnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHRvYXN0OiB7IG1lc3NhZ2U6IGFjdGlvbi5tZXNzYWdlLCB0eXBlOiBhY3Rpb24udG9hc3RUeXBlIH0gfVxuXG4gICAgY2FzZSAnSElERV9UT0FTVCc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdG9hc3Q6IG51bGwgfVxuXG4gICAgY2FzZSAnSU1QT1JUX0NPTkZJRyc6IHtcbiAgICAgIGNvbnN0IHdvcmtpbmcgPSB7IC4uLnN0YXRlLndvcmtpbmcgfVxuICAgICAgaWYgKGFjdGlvbi5kYXRhLnNjaGVtYSkgd29ya2luZy5zY2hlbWEgPSBhY3Rpb24uZGF0YS5zY2hlbWFcbiAgICAgIGlmIChhY3Rpb24uZGF0YS5kZW1vKSB3b3JraW5nLmRlbW8gPSBhY3Rpb24uZGF0YS5kZW1vXG4gICAgICBpZiAoYWN0aW9uLmRhdGEubWFuaWZlc3QpIHdvcmtpbmcubWFuaWZlc3QgPSBhY3Rpb24uZGF0YS5tYW5pZmVzdFxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHdvcmtpbmcgfVxuICAgIH1cblxuICAgIGNhc2UgJ1NFVF9TRUFSQ0gnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHVpOiB7IC4uLnN0YXRlLnVpLCBzZWFyY2hRdWVyeTogYWN0aW9uLnF1ZXJ5IH0gfVxuXG4gICAgY2FzZSAnVE9HR0xFX1BSRVZJRVcnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHVpOiB7IC4uLnN0YXRlLnVpLCBzaG93UHJldmlldzogIXN0YXRlLnVpLnNob3dQcmV2aWV3IH0gfVxuXG4gICAgY2FzZSAnQUREX0NPTkRJVElPTkFMJzoge1xuICAgICAgY29uc3QgY29uZGl0aW9uYWxzID0gWy4uLihzdGF0ZS53b3JraW5nLnNjaGVtYS5jb25kaXRpb25hbHMgfHwgW10pLCBhY3Rpb24uY29uZGl0aW9uYWxdXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgd29ya2luZzogeyAuLi5zdGF0ZS53b3JraW5nLCBzY2hlbWE6IHsgLi4uc3RhdGUud29ya2luZy5zY2hlbWEsIGNvbmRpdGlvbmFscyB9IH0gfVxuICAgIH1cblxuICAgIGNhc2UgJ1VQREFURV9DT05ESVRJT05BTCc6IHtcbiAgICAgIGNvbnN0IGNvbmRpdGlvbmFscyA9IChzdGF0ZS53b3JraW5nLnNjaGVtYS5jb25kaXRpb25hbHMgfHwgW10pLm1hcCgoYywgaSkgPT5cbiAgICAgICAgaSA9PT0gYWN0aW9uLmlkeCA/IGFjdGlvbi5jb25kaXRpb25hbCA6IGMsXG4gICAgICApXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgd29ya2luZzogeyAuLi5zdGF0ZS53b3JraW5nLCBzY2hlbWE6IHsgLi4uc3RhdGUud29ya2luZy5zY2hlbWEsIGNvbmRpdGlvbmFscyB9IH0gfVxuICAgIH1cblxuICAgIGNhc2UgJ0RFTEVURV9DT05ESVRJT05BTCc6IHtcbiAgICAgIGNvbnN0IGNvbmRpdGlvbmFscyA9IChzdGF0ZS53b3JraW5nLnNjaGVtYS5jb25kaXRpb25hbHMgfHwgW10pLmZpbHRlcigoXywgaSkgPT4gaSAhPT0gYWN0aW9uLmlkeClcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB3b3JraW5nOiB7IC4uLnN0YXRlLndvcmtpbmcsIHNjaGVtYTogeyAuLi5zdGF0ZS53b3JraW5nLnNjaGVtYSwgY29uZGl0aW9uYWxzOiBjb25kaXRpb25hbHMubGVuZ3RoID8gY29uZGl0aW9uYWxzIDogdW5kZWZpbmVkIH0gfSB9XG4gICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbi8vIFx1MjUwMFx1MjUwMCBDb250ZXh0IFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXG50eXBlIFN0dWRpb0NvbnRleHRWYWx1ZSA9IHtcbiAgc3RhdGU6IFN0dWRpb1N0YXRlXG4gIGRpc3BhdGNoOiBEaXNwYXRjaDxTdHVkaW9BY3Rpb24+XG59XG5cbmV4cG9ydCBjb25zdCBTdHVkaW9Db250ZXh0ID0gY3JlYXRlQ29udGV4dDxTdHVkaW9Db250ZXh0VmFsdWU+KG51bGwgYXMgdW5rbm93biBhcyBTdHVkaW9Db250ZXh0VmFsdWUpXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VTdHVkaW8oKSB7XG4gIHJldHVybiB1c2VDb250ZXh0KFN0dWRpb0NvbnRleHQpXG59XG4iLCAiaW1wb3J0IHR5cGUgeyBTY2hlbWFTZWN0aW9uIH0gZnJvbSAnLi90eXBlcydcblxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBDbG9uZTxUPihvYmo6IFQpOiBUIHtcbiAgcmV0dXJuIG9iaiA9PSBudWxsID8gb2JqIDogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVlcEVxdWFsKGE6IHVua25vd24sIGI6IHVua25vd24pOiBib29sZWFuIHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGEpID09PSBKU09OLnN0cmluZ2lmeShiKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9DYW1lbENhc2Uoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc3RyXG4gICAgLnJlcGxhY2UoL1teYS16QS1aMC05IF0vZywgJycpXG4gICAgLnJlcGxhY2UoL1xccysoLikvZywgKF8sIGM6IHN0cmluZykgPT4gYy50b1VwcGVyQ2FzZSgpKVxuICAgIC5yZXBsYWNlKC9eKC4pLywgKF8sIGM6IHN0cmluZykgPT4gYy50b0xvd2VyQ2FzZSgpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5zdXJlVW5pcXVlS2V5KGtleTogc3RyaW5nLCBzZWN0aW9uczogU2NoZW1hU2VjdGlvbltdKTogc3RyaW5nIHtcbiAgY29uc3QgYWxsS2V5cyA9IG5ldyBTZXQ8c3RyaW5nPigpXG4gIGZvciAoY29uc3QgcyBvZiBzZWN0aW9ucykge1xuICAgIGZvciAoY29uc3QgZiBvZiBzLmZpZWxkcykge1xuICAgICAgaWYgKGYua2V5KSBhbGxLZXlzLmFkZChmLmtleSlcbiAgICB9XG4gIH1cbiAgaWYgKCFhbGxLZXlzLmhhcyhrZXkpKSByZXR1cm4ga2V5XG4gIGxldCBpID0gMlxuICB3aGlsZSAoYWxsS2V5cy5oYXMoa2V5ICsgaSkpIGkrK1xuICByZXR1cm4ga2V5ICsgaVxufVxuIiwgImltcG9ydCB0eXBlIHsgVGVtcGxhdGVTY2hlbWEsIE1hbmlmZXN0RGF0YSB9IGZyb20gJy4vdHlwZXMnXG5cbmV4cG9ydCB0eXBlIExvYWRSZXNwb25zZSA9IHtcbiAgc2NoZW1hOiBUZW1wbGF0ZVNjaGVtYSB8IG51bGxcbiAgZGVtbzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCBudWxsXG4gIG1hbmlmZXN0OiBNYW5pZmVzdERhdGEgfCBudWxsXG59XG5cbmV4cG9ydCB0eXBlIFNhdmVQYXlsb2FkID0ge1xuICBzY2hlbWE/OiBUZW1wbGF0ZVNjaGVtYVxuICBkZW1vPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgbWFuaWZlc3Q/OiBNYW5pZmVzdERhdGFcbn1cblxuZXhwb3J0IHR5cGUgU2F2ZVJlc3BvbnNlID0ge1xuICBvazogYm9vbGVhblxuICBlcnJvcnM/OiBzdHJpbmdbXVxuICB3cml0dGVuPzogc3RyaW5nW11cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRDb25maWcoKTogUHJvbWlzZTxMb2FkUmVzcG9uc2U+IHtcbiAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKCcvc3R1ZGlvL2FwaS9sb2FkJylcbiAgcmV0dXJuIHJlc3AuanNvbigpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlQ29uZmlnKHBheWxvYWQ6IFNhdmVQYXlsb2FkKTogUHJvbWlzZTxTYXZlUmVzcG9uc2U+IHtcbiAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKCcvc3R1ZGlvL2FwaS9zYXZlJywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHsgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpLFxuICB9KVxuICByZXR1cm4gcmVzcC5qc29uKClcbn1cbiIsICJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBTZWFyY2gsIFgsIE1vb24sIFN1biwgRG93bmxvYWQsIFVwbG9hZCxcbiAgU2F2ZSwgSGV4YWdvbixcbn0gZnJvbSAnbHVjaWRlLXJlYWN0J1xuaW1wb3J0IHsgdXNlU3R1ZGlvIH0gZnJvbSAnLi4vc3RhdGUnXG5pbXBvcnQgeyBzYXZlQ29uZmlnIH0gZnJvbSAnLi4vYXBpJ1xuaW1wb3J0IHsgZGVlcEVxdWFsIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgdHlwZSB7IFN0dWRpb0NvbmZpZyB9IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBUYWIgfSBmcm9tICcuLi90eXBlcydcblxudHlwZSBQcm9wcyA9IHtcbiAgY29uZmlnOiBTdHVkaW9Db25maWdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEhlYWRlcih7IGNvbmZpZyB9OiBQcm9wcykge1xuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlU3R1ZGlvKClcbiAgY29uc3QgaXNEYXJrID0gc3RhdGUudWkudGhlbWUgPT09ICdkYXJrJ1xuICBjb25zdCBbc2F2aW5nLCBzZXRTYXZpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtzZWFyY2hPcGVuLCBzZXRTZWFyY2hPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBzZWFyY2hSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbClcbiAgY29uc3QgZmlsZUlucHV0UmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpXG5cbiAgY29uc3QgaGFzVW5zYXZlZCA9ICFkZWVwRXF1YWwoc3RhdGUubG9hZGVkLCBzdGF0ZS53b3JraW5nKVxuICBjb25zdCB0YWJzOiBUYWJbXSA9IFsnc2NoZW1hJywgJ2RlbW8nLCAnbWFuaWZlc3QnXVxuXG4gIC8vIEZvY3VzIHNlYXJjaCBpbnB1dCB3aGVuIG9wZW5lZFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZWFyY2hPcGVuKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHNlYXJjaFJlZi5jdXJyZW50Py5mb2N1cygpLCA2MClcbiAgICB9XG4gIH0sIFtzZWFyY2hPcGVuXSlcblxuICAvLyBFc2NhcGUgdG8gY2xvc2Ugc2VhcmNoXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFzZWFyY2hPcGVuKSByZXR1cm5cbiAgICBjb25zdCBoYW5kbGVyID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgc2V0U2VhcmNoT3BlbihmYWxzZSlcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnU0VUX1NFQVJDSCcsIHF1ZXJ5OiAnJyB9KVxuICAgICAgfVxuICAgIH1cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlcilcbiAgICByZXR1cm4gKCkgPT4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZXIpXG4gIH0sIFtzZWFyY2hPcGVuLCBkaXNwYXRjaF0pXG5cbiAgY29uc3QgdG9nZ2xlVGhlbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgbmV4dCA9IGlzRGFyayA/ICdsaWdodCcgOiAnZGFyaydcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdTRVRfVEhFTUUnLCB0aGVtZTogbmV4dCB9KVxuICAgIGlmIChuZXh0ID09PSAnZGFyaycpIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCAnZGFyaycpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnKVxuICAgIH1cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3R1ZGlvLXRoZW1lJywgbmV4dClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgc2V0U2F2aW5nKHRydWUpXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNhdmVDb25maWcoe1xuICAgICAgICBzY2hlbWE6IHN0YXRlLndvcmtpbmcuc2NoZW1hLFxuICAgICAgICBkZW1vOiBzdGF0ZS53b3JraW5nLmRlbW8sXG4gICAgICAgIG1hbmlmZXN0OiBzdGF0ZS53b3JraW5nLm1hbmlmZXN0LFxuICAgICAgfSlcbiAgICAgIGlmIChyZXN1bHQub2spIHtcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnU0FWRUQnIH0pXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1NIT1dfVE9BU1QnLCBtZXNzYWdlOiBgU2F2ZWQgJHsocmVzdWx0LndyaXR0ZW4gPz8gW10pLmpvaW4oJywgJyl9YCwgdG9hc3RUeXBlOiAnc3VjY2VzcycgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1NIT1dfVE9BU1QnLCBtZXNzYWdlOiAocmVzdWx0LmVycm9ycyA/PyBbJ1NhdmUgZmFpbGVkJ10pLmpvaW4oJywgJyksIHRvYXN0VHlwZTogJ2Vycm9yJyB9KVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1NIT1dfVE9BU1QnLCBtZXNzYWdlOiBgU2F2ZSBmYWlsZWQ6ICR7ZX1gLCB0b2FzdFR5cGU6ICdlcnJvcicgfSlcbiAgICB9XG4gICAgc2V0U2F2aW5nKGZhbHNlKVxuICB9LCBbc3RhdGUud29ya2luZywgZGlzcGF0Y2hdKVxuXG4gIGNvbnN0IGhhbmRsZUV4cG9ydCA9ICgpID0+IHtcbiAgICBjb25zdCBkYXRhID0geyBzY2hlbWE6IHN0YXRlLndvcmtpbmcuc2NoZW1hLCBkZW1vOiBzdGF0ZS53b3JraW5nLmRlbW8sIG1hbmlmZXN0OiBzdGF0ZS53b3JraW5nLm1hbmlmZXN0IH1cbiAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW0pTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpXSwgeyB0eXBlOiAnYXBwbGljYXRpb24vanNvbicgfSlcbiAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpXG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgIGEuaHJlZiA9IHVybFxuICAgIGEuZG93bmxvYWQgPSBgJHtjb25maWcuc2x1ZyB8fCAndGVtcGxhdGUnfS1jb25maWcuanNvbmBcbiAgICBhLmNsaWNrKClcbiAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHVybClcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdTSE9XX1RPQVNUJywgbWVzc2FnZTogJ0NvbmZpZyBleHBvcnRlZCcsIHRvYXN0VHlwZTogJ3N1Y2Nlc3MnIH0pXG4gIH1cblxuICBjb25zdCBoYW5kbGVJbXBvcnQgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXM/LlswXVxuICAgIGlmICghZmlsZSkgcmV0dXJuXG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHJlYWRlci5vbmxvYWQgPSAoZXYpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGV2LnRhcmdldD8ucmVzdWx0IGFzIHN0cmluZylcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnSU1QT1JUX0NPTkZJRycsIGRhdGEgfSlcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnU0hPV19UT0FTVCcsIG1lc3NhZ2U6ICdDb25maWcgaW1wb3J0ZWQnLCB0b2FzdFR5cGU6ICdzdWNjZXNzJyB9KVxuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1NIT1dfVE9BU1QnLCBtZXNzYWdlOiAnSW52YWxpZCBKU09OIGZpbGUnLCB0b2FzdFR5cGU6ICdlcnJvcicgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSlcbiAgICBlLnRhcmdldC52YWx1ZSA9ICcnXG4gIH1cblxuICAvLyBHbG9iYWwga2V5Ym9hcmQgc2hvcnRjdXRzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlciA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICBpZiAoKGUubWV0YUtleSB8fCBlLmN0cmxLZXkpICYmIGUua2V5ID09PSAncycpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGhhbmRsZVNhdmUoKVxuICAgICAgfVxuICAgICAgaWYgKChlLm1ldGFLZXkgfHwgZS5jdHJsS2V5KSAmJiBlLmtleSA9PT0gJ2YnKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBzZXRTZWFyY2hPcGVuKHRydWUpXG4gICAgICB9XG4gICAgfVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVyKVxuICAgIHJldHVybiAoKSA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlcilcbiAgfSwgW2hhbmRsZVNhdmVdKVxuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJzdHVkaW8taGVhZGVyXCI+XG4gICAgICB7LyogTGVmdDogTG9nbyArIHNsdWcgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1icmFuZFwiPlxuICAgICAgICA8SGV4YWdvbiBzaXplPXsxOH0gc3Ryb2tlV2lkdGg9ezIuNX0gc3R5bGU9e3sgY29sb3I6ICd2YXIoLS1hY2NlbnQpJyB9fSAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkZXItdGl0bGVcIj5TdHVkaW88L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRlci1zbHVnXCI+e2NvbmZpZy5zbHVnfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogQ2VudGVyOiBUYWIgcGlsbHMgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci10YWJzXCI+XG4gICAgICAgIHt0YWJzLm1hcCgodGFiKSA9PiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAga2V5PXt0YWJ9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BoZWFkZXItdGFiLXBpbGwke3N0YXRlLnVpLmFjdGl2ZVRhYiA9PT0gdGFiID8gJyBhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHsgdHlwZTogJ1NFVF9UQUInLCB0YWIgfSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RhYi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRhYi5zbGljZSgxKX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIFJpZ2h0OiBBY3Rpb25zICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItYWN0aW9uc1wiPlxuICAgICAgICB7LyogU2VhcmNoICovfVxuICAgICAgICB7c2VhcmNoT3BlbiA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1zZWFyY2gtZXhwYW5kZWRcIj5cbiAgICAgICAgICAgIDxTZWFyY2ggc2l6ZT17MTN9IHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tdGV4dC10ZXJ0aWFyeSknLCBmbGV4U2hyaW5rOiAwIH19IC8+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcmVmPXtzZWFyY2hSZWZ9XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZmllbGRzLi4uXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnVpLnNlYXJjaFF1ZXJ5fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGRpc3BhdGNoKHsgdHlwZTogJ1NFVF9TRUFSQ0gnLCBxdWVyeTogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXItc2VhcmNoLWNsb3NlXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBzZXRTZWFyY2hPcGVuKGZhbHNlKTsgZGlzcGF0Y2goeyB0eXBlOiAnU0VUX1NFQVJDSCcsIHF1ZXJ5OiAnJyB9KSB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8WCBzaXplPXsxMn0gLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRlci1pY29uLWJ0blwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWFyY2hPcGVuKHRydWUpfVxuICAgICAgICAgICAgdGl0bGU9XCJTZWFyY2ggZmllbGRzIChDbWQrRilcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTZWFyY2ggc2l6ZT17MTV9IC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItc2VwYXJhdG9yXCIgLz5cblxuICAgICAgICB7LyogVGhlbWUgKi99XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaGVhZGVyLWljb24tYnRuXCIgb25DbGljaz17dG9nZ2xlVGhlbWV9IHRpdGxlPVwiVG9nZ2xlIHRoZW1lXCI+XG4gICAgICAgICAge2lzRGFyayA/IDxTdW4gc2l6ZT17MTV9IC8+IDogPE1vb24gc2l6ZT17MTV9IC8+fVxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1zZXBhcmF0b3JcIiAvPlxuXG4gICAgICAgIHsvKiBJbXBvcnQgKi99XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXItaWNvbi1idG5cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGZpbGVJbnB1dFJlZi5jdXJyZW50Py5jbGljaygpfVxuICAgICAgICAgIHRpdGxlPVwiSW1wb3J0IGNvbmZpZ1wiXG4gICAgICAgID5cbiAgICAgICAgICA8VXBsb2FkIHNpemU9ezE1fSAvPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICB7LyogRXhwb3J0ICovfVxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImhlYWRlci1pY29uLWJ0blwiIG9uQ2xpY2s9e2hhbmRsZUV4cG9ydH0gdGl0bGU9XCJFeHBvcnQgY29uZmlnXCI+XG4gICAgICAgICAgPERvd25sb2FkIHNpemU9ezE1fSAvPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1zZXBhcmF0b3JcIiAvPlxuXG4gICAgICAgIHsvKiBTYXZlICovfVxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtgaGVhZGVyLXNhdmUtYnRuJHtoYXNVbnNhdmVkID8gJyB1bnNhdmVkJyA6ICcnfWB9XG4gICAgICAgICAgb25DbGljaz17aGFuZGxlU2F2ZX1cbiAgICAgICAgICBkaXNhYmxlZD17c2F2aW5nfVxuICAgICAgICA+XG4gICAgICAgICAge2hhc1Vuc2F2ZWQgJiYgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGVyLXNhdmUtZG90XCIgLz59XG4gICAgICAgICAgPFNhdmUgc2l6ZT17MTR9IC8+XG4gICAgICAgICAgPHNwYW4+e3NhdmluZyA/ICdTYXZpbmcuLi4nIDogJ1NhdmUnfTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGlucHV0IHJlZj17ZmlsZUlucHV0UmVmfSB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cIi5qc29uXCIgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19IG9uQ2hhbmdlPXtoYW5kbGVJbXBvcnR9IC8+XG4gICAgPC9oZWFkZXI+XG4gIClcbn1cbiIsICJpbXBvcnQgeyB1c2VTdHVkaW8gfSBmcm9tICcuLi9zdGF0ZSdcbmltcG9ydCB7IGRlZXBFcXVhbCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5leHBvcnQgZnVuY3Rpb24gRm9vdGVyKCkge1xuICBjb25zdCB7IHN0YXRlIH0gPSB1c2VTdHVkaW8oKVxuXG4gIGNvbnN0IGhhc1Vuc2F2ZWQgPSAhZGVlcEVxdWFsKHN0YXRlLmxvYWRlZCwgc3RhdGUud29ya2luZylcbiAgY29uc3Qgc2VjdGlvbkNvdW50ID0gc3RhdGUud29ya2luZy5zY2hlbWEuc2VjdGlvbnMubGVuZ3RoXG4gIGNvbnN0IGZpZWxkQ291bnQgPSBzdGF0ZS53b3JraW5nLnNjaGVtYS5zZWN0aW9ucy5yZWR1Y2UoKHN1bSwgcykgPT4gc3VtICsgcy5maWVsZHMubGVuZ3RoLCAwKVxuICBjb25zdCBjb25kaXRpb25hbENvdW50ID0gc3RhdGUud29ya2luZy5zY2hlbWEuY29uZGl0aW9uYWxzPy5sZW5ndGggfHwgMFxuXG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJzdHVkaW8tZm9vdGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1zdGF0c1wiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb290ZXItc3RhdFwiPlxuICAgICAgICAgIHtzZWN0aW9uQ291bnR9IHNlY3Rpb257c2VjdGlvbkNvdW50ICE9PSAxID8gJ3MnIDogJyd9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9vdGVyLWRvdFwiIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvb3Rlci1zdGF0XCI+XG4gICAgICAgICAge2ZpZWxkQ291bnR9IGZpZWxke2ZpZWxkQ291bnQgIT09IDEgPyAncycgOiAnJ31cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICB7Y29uZGl0aW9uYWxDb3VudCA+IDAgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb290ZXItZG90XCIgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvb3Rlci1zdGF0XCI+XG4gICAgICAgICAgICAgIHtjb25kaXRpb25hbENvdW50fSBydWxle2NvbmRpdGlvbmFsQ291bnQgIT09IDEgPyAncycgOiAnJ31cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAge2hhc1Vuc2F2ZWQgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb290ZXItZG90XCIgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvb3Rlci11bnNhdmVkXCI+VW5zYXZlZDwvc3Bhbj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1zaG9ydGN1dHNcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9vdGVyLXNob3J0Y3V0XCI+XG4gICAgICAgICAgPGtiZD4mIzg5ODQ7Uzwva2JkPiBTYXZlXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9vdGVyLXNob3J0Y3V0XCI+XG4gICAgICAgICAgPGtiZD4mIzg5ODQ7Qjwva2JkPiBTaWRlYmFyXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9vdGVyLXNob3J0Y3V0XCI+XG4gICAgICAgICAgPGtiZD5EZWw8L2tiZD4gRGVsZXRlXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICApXG59XG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgR3JpcFZlcnRpY2FsLCBQbHVzLCBNb3JlSG9yaXpvbnRhbCwgUGVuY2lsLCBDb3B5LCBUcmFzaDIsXG4gIExheWVycyxcbn0gZnJvbSAnbHVjaWRlLXJlYWN0J1xuaW1wb3J0IHsgdXNlU3R1ZGlvIH0gZnJvbSAnLi4vc3RhdGUnXG5pbXBvcnQgeyB0b0NhbWVsQ2FzZSwgZGVlcENsb25lIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4vY29tbW9uL01vZGFsJ1xuXG5leHBvcnQgZnVuY3Rpb24gU2VjdGlvbkxpc3QoKSB7XG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VTdHVkaW8oKVxuICBjb25zdCBzZWN0aW9ucyA9IHN0YXRlLndvcmtpbmcuc2NoZW1hLnNlY3Rpb25zXG4gIGNvbnN0IHNlbGVjdGVkID0gc3RhdGUudWkuc2VsZWN0ZWRTZWN0aW9uXG5cbiAgY29uc3QgW21vZGFsT3Blbiwgc2V0TW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbbGFiZWwsIHNldExhYmVsXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBba2V5LCBzZXRLZXldID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtjb250ZXh0TWVudSwgc2V0Q29udGV4dE1lbnVdID0gdXNlU3RhdGU8eyBpZHg6IG51bWJlcjsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtyZW5hbWluZ0lkeCwgc2V0UmVuYW1pbmdJZHhdID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW3JlbmFtZVZhbHVlLCBzZXRSZW5hbWVWYWx1ZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgcmVuYW1lUmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpXG4gIGNvbnN0IGNvbnRleHRNZW51UmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxuXG4gIC8vIERyYWcgc3RhdGVcbiAgY29uc3QgW2RyYWdJZHgsIHNldERyYWdJZHhdID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2Ryb3BUYXJnZXQsIHNldERyb3BUYXJnZXRdID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2hvdmVyZWRJZHgsIHNldEhvdmVyZWRJZHhdID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbClcblxuICBjb25zdCBvcGVuQWRkTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0TGFiZWwoJycpXG4gICAgc2V0S2V5KCcnKVxuICAgIHNldE1vZGFsT3Blbih0cnVlKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlU2F2ZSA9ICgpID0+IHtcbiAgICBjb25zdCB0cmltbWVkTGFiZWwgPSBsYWJlbC50cmltKClcbiAgICBpZiAoIXRyaW1tZWRMYWJlbCkgcmV0dXJuXG4gICAgY29uc3Qgc2VjdGlvbktleSA9IGtleS50cmltKCkgfHwgdG9DYW1lbENhc2UodHJpbW1lZExhYmVsKVxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ0FERF9TRUNUSU9OJywgc2VjdGlvbjogeyBrZXk6IHNlY3Rpb25LZXksIGxhYmVsOiB0cmltbWVkTGFiZWwsIGZpZWxkczogW10gfSB9KVxuICAgIHNldE1vZGFsT3BlbihmYWxzZSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUR1cGxpY2F0ZSA9IChpZHg6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IG9yaWdpbmFsID0gc2VjdGlvbnNbaWR4XVxuICAgIGlmICghb3JpZ2luYWwpIHJldHVyblxuICAgIGNvbnN0IGNvcHkgPSBkZWVwQ2xvbmUob3JpZ2luYWwpXG4gICAgY29weS5rZXkgPSBjb3B5LmtleSArICdDb3B5J1xuICAgIGNvcHkubGFiZWwgPSBjb3B5LmxhYmVsICsgJyAoY29weSknXG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnQUREX1NFQ1RJT04nLCBzZWN0aW9uOiBjb3B5IH0pXG4gICAgc2V0Q29udGV4dE1lbnUobnVsbClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IChpZHg6IG51bWJlcikgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ0RFTEVURV9TRUNUSU9OJywgaWR4IH0pXG4gICAgc2V0Q29udGV4dE1lbnUobnVsbClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVJlbmFtZVN0YXJ0ID0gKGlkeDogbnVtYmVyKSA9PiB7XG4gICAgc2V0UmVuYW1pbmdJZHgoaWR4KVxuICAgIHNldFJlbmFtZVZhbHVlKHNlY3Rpb25zW2lkeF0ubGFiZWwpXG4gICAgc2V0Q29udGV4dE1lbnUobnVsbClcbiAgICBzZXRUaW1lb3V0KCgpID0+IHJlbmFtZVJlZi5jdXJyZW50Py5mb2N1cygpLCA1MClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVJlbmFtZUNvbW1pdCA9ICgpID0+IHtcbiAgICBpZiAocmVuYW1pbmdJZHggPT09IG51bGwpIHJldHVyblxuICAgIGNvbnN0IHRyaW1tZWQgPSByZW5hbWVWYWx1ZS50cmltKClcbiAgICBpZiAodHJpbW1lZCAmJiB0cmltbWVkICE9PSBzZWN0aW9uc1tyZW5hbWluZ0lkeF0ubGFiZWwpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogJ1VQREFURV9TRUNUSU9OJyxcbiAgICAgICAgaWR4OiByZW5hbWluZ0lkeCxcbiAgICAgICAgc2VjdGlvbjogeyAuLi5zZWN0aW9uc1tyZW5hbWluZ0lkeF0sIGxhYmVsOiB0cmltbWVkIH0sXG4gICAgICB9KVxuICAgIH1cbiAgICBzZXRSZW5hbWluZ0lkeChudWxsKVxuICB9XG5cbiAgLy8gQ2xvc2UgY29udGV4dCBtZW51IG9uIG91dHNpZGUgY2xpY2tcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWNvbnRleHRNZW51KSByZXR1cm5cbiAgICBjb25zdCBoYW5kbGVyID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjb250ZXh0TWVudVJlZi5jdXJyZW50ICYmICFjb250ZXh0TWVudVJlZi5jdXJyZW50LmNvbnRhaW5zKGUudGFyZ2V0IGFzIE5vZGUpKSB7XG4gICAgICAgIHNldENvbnRleHRNZW51KG51bGwpXG4gICAgICB9XG4gICAgfVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZXIpXG4gICAgcmV0dXJuICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZXIpXG4gIH0sIFtjb250ZXh0TWVudV0pXG5cbiAgLy8gRHJhZyBoYW5kbGVyc1xuICBjb25zdCBvbkRyYWdTdGFydCA9IHVzZUNhbGxiYWNrKChpZHg6IG51bWJlcikgPT4geyBzZXREcmFnSWR4KGlkeCkgfSwgW10pXG4gIGNvbnN0IG9uRHJhZ0VuZCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0RHJhZ0lkeChudWxsKTsgc2V0RHJvcFRhcmdldChudWxsKSB9LCBbXSlcbiAgY29uc3Qgb25EcmFnT3ZlciA9IHVzZUNhbGxiYWNrKChlOiBSZWFjdC5EcmFnRXZlbnQsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJ1xuICAgIHNldERyb3BUYXJnZXQoaWR4KVxuICB9LCBbXSlcbiAgY29uc3Qgb25Ecm9wID0gdXNlQ2FsbGJhY2soKGU6IFJlYWN0LkRyYWdFdmVudCwgdG9JZHg6IG51bWJlcikgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGlmIChkcmFnSWR4ICE9PSBudWxsICYmIGRyYWdJZHggIT09IHRvSWR4KSB7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdNT1ZFX1NFQ1RJT04nLCBmcm9tOiBkcmFnSWR4LCB0bzogdG9JZHggfSlcbiAgICB9XG4gICAgc2V0RHJhZ0lkeChudWxsKVxuICAgIHNldERyb3BUYXJnZXQobnVsbClcbiAgfSwgW2RyYWdJZHgsIGRpc3BhdGNoXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLXNlY3Rpb25zLWhlYWRlclwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYW5lbC1zZWN0aW9ucy10aXRsZVwiPlNlY3Rpb25zPC9zcGFuPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1saXN0LXNjcm9sbFwiPlxuICAgICAgICB7c2VjdGlvbnMubWFwKChzLCBpKSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAga2V5PXtzLmtleSArIGl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BzZWN0aW9uLWl0ZW0ke2kgPT09IHNlbGVjdGVkID8gJyBhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHsgdHlwZTogJ1NFTEVDVF9TRUNUSU9OJywgaWR4OiBpIH0pfVxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRIb3ZlcmVkSWR4KGkpfVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcmVkSWR4KG51bGwpfVxuICAgICAgICAgICAgZHJhZ2dhYmxlXG4gICAgICAgICAgICBvbkRyYWdTdGFydD17KCkgPT4gb25EcmFnU3RhcnQoaSl9XG4gICAgICAgICAgICBvbkRyYWdFbmQ9e29uRHJhZ0VuZH1cbiAgICAgICAgICAgIG9uRHJhZ092ZXI9eyhlKSA9PiBvbkRyYWdPdmVyKGUsIGkpfVxuICAgICAgICAgICAgb25Ecm9wPXsoZSkgPT4gb25Ecm9wKGUsIGkpfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgb3BhY2l0eTogZHJhZ0lkeCA9PT0gaSA/IDAuNCA6IDEsXG4gICAgICAgICAgICAgIGJvcmRlclRvcENvbG9yOiBkcm9wVGFyZ2V0ID09PSBpICYmIGRyYWdJZHggIT09IGkgPyAndmFyKC0tYWNjZW50KScgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGRyYWctaGFuZGxlJHtob3ZlcmVkSWR4ID09PSBpID8gJyB2aXNpYmxlJyA6ICcnfWB9PlxuICAgICAgICAgICAgICA8R3JpcFZlcnRpY2FsIHNpemU9ezEyfSAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICB7cmVuYW1pbmdJZHggPT09IGkgPyAoXG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHJlZj17cmVuYW1lUmVmfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlY3Rpb24tcmVuYW1lLWlucHV0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cmVuYW1lVmFsdWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZW5hbWVWYWx1ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVSZW5hbWVDb21taXR9XG4gICAgICAgICAgICAgICAgb25LZXlEb3duPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSBoYW5kbGVSZW5hbWVDb21taXQoKVxuICAgICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykgc2V0UmVuYW1pbmdJZHgobnVsbClcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2VjdGlvbi1sYWJlbFwiPntzLmxhYmVsIHx8ICdVbnRpdGxlZCd9PC9zcGFuPlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2VjdGlvbi1jb3VudFwiPntzLmZpZWxkcy5sZW5ndGh9PC9zcGFuPlxuXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHNlY3Rpb24tbWVudS1idG4ke2hvdmVyZWRJZHggPT09IGkgPyAnIHZpc2libGUnIDogJyd9YH1cbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgY29uc3QgcmVjdCA9IChlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICAgICAgc2V0Q29udGV4dE1lbnUoeyBpZHg6IGksIHg6IHJlY3QucmlnaHQgKyA0LCB5OiByZWN0LnRvcCB9KVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TW9yZUhvcml6b250YWwgc2l6ZT17MTR9IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhZGQtc2VjdGlvbi1idG5cIiBvbkNsaWNrPXtvcGVuQWRkTW9kYWx9PlxuICAgICAgICA8UGx1cyBzaXplPXsxNH0gLz4gQWRkIFNlY3Rpb25cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICB7LyogQ29udGV4dCBtZW51ICovfVxuICAgICAge2NvbnRleHRNZW51ICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHJlZj17Y29udGV4dE1lbnVSZWZ9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY29udGV4dC1tZW51XCJcbiAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogJ2ZpeGVkJywgbGVmdDogY29udGV4dE1lbnUueCwgdG9wOiBjb250ZXh0TWVudS55LCB6SW5kZXg6IDk5OTkgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY29udGV4dC1tZW51LWl0ZW1cIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZW5hbWVTdGFydChjb250ZXh0TWVudS5pZHgpfT5cbiAgICAgICAgICAgIDxQZW5jaWwgc2l6ZT17MTN9IC8+IFJlbmFtZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY29udGV4dC1tZW51LWl0ZW1cIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEdXBsaWNhdGUoY29udGV4dE1lbnUuaWR4KX0+XG4gICAgICAgICAgICA8Q29weSBzaXplPXsxM30gLz4gRHVwbGljYXRlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZXh0LW1lbnUtc2VwYXJhdG9yXCIgLz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNvbnRleHQtbWVudS1pdGVtIGRhbmdlclwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShjb250ZXh0TWVudS5pZHgpfT5cbiAgICAgICAgICAgIDxUcmFzaDIgc2l6ZT17MTN9IC8+IERlbGV0ZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIDxNb2RhbCBvcGVuPXttb2RhbE9wZW59IG9uQ2xvc2U9eygpID0+IHNldE1vZGFsT3BlbihmYWxzZSl9IHRpdGxlPVwiQWRkIFNlY3Rpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLW1vZGFsLWZpZWxkc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5MYWJlbDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtsYWJlbH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7IHNldExhYmVsKGUudGFyZ2V0LnZhbHVlKTsgc2V0S2V5KHRvQ2FtZWxDYXNlKGUudGFyZ2V0LnZhbHVlKSkgfX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIFRoZSBCYXNpY3NcIlxuICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgb25LZXlEb3duPXsoZSkgPT4geyBpZiAoZS5rZXkgPT09ICdFbnRlcicpIGhhbmRsZVNhdmUoKSB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+S2V5PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e2tleX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRLZXkoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImF1dG8tZ2VuZXJhdGVkIGZyb20gbGFiZWxcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1tb2RhbC1hY3Rpb25zXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tc2Vjb25kYXJ5XCIgb25DbGljaz17KCkgPT4gc2V0TW9kYWxPcGVuKGZhbHNlKX0+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZVNhdmV9PkFkZDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTW9kYWw+XG4gICAgPC8+XG4gIClcbn1cbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdHlwZSBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcblxudHlwZSBQcm9wcyA9IHtcbiAgb3BlbjogYm9vbGVhblxuICBvbkNsb3NlOiAoKSA9PiB2b2lkXG4gIHRpdGxlOiBzdHJpbmdcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZVxuICB3aWR0aD86IG51bWJlclxufVxuXG5leHBvcnQgZnVuY3Rpb24gTW9kYWwoeyBvcGVuLCBvbkNsb3NlLCB0aXRsZSwgY2hpbGRyZW4sIHdpZHRoID0gMzYwIH06IFByb3BzKSB7XG4gIGNvbnN0IG92ZXJsYXlSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIW9wZW4pIHJldHVyblxuICAgIGNvbnN0IGhhbmRsZXIgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykgb25DbG9zZSgpXG4gICAgfVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVyKVxuICAgIHJldHVybiAoKSA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlcilcbiAgfSwgW29wZW4sIG9uQ2xvc2VdKVxuXG4gIGlmICghb3BlbikgcmV0dXJuIG51bGxcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHJlZj17b3ZlcmxheVJlZn1cbiAgICAgIGNsYXNzTmFtZT1cIm1vZGFsLW92ZXJsYXkgb3BlblwiXG4gICAgICBvbkNsaWNrPXsoZSkgPT4geyBpZiAoZS50YXJnZXQgPT09IG92ZXJsYXlSZWYuY3VycmVudCkgb25DbG9zZSgpIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiIHN0eWxlPXt7IHdpZHRoIH19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgIDxoMz57dGl0bGV9PC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgR3JpcFZlcnRpY2FsLCBQbHVzLCBNb3JlSG9yaXpvbnRhbCwgUGVuY2lsLCBDb3B5LCBUcmFzaDIsXG4gIENoZXZyb25VcCwgQ2hldnJvbkRvd24sIEdpdEJyYW5jaCxcbiAgSW1hZ2UgYXMgSW1hZ2VJY29uLCBWaWRlbywgTXVzaWMsIEhlbHBDaXJjbGUsXG59IGZyb20gJ2x1Y2lkZS1yZWFjdCdcbmltcG9ydCB7IHVzZVN0dWRpbyB9IGZyb20gJy4uL3N0YXRlJ1xuaW1wb3J0IHsgRklFTERfVFlQRVMgfSBmcm9tICcuLi9maWVsZC1yZWdpc3RyeSdcbmltcG9ydCB7IFFVSUNLX1RFTVBMQVRFUyB9IGZyb20gJy4uL2NvbnN0YW50cydcbmltcG9ydCB7IGRlZXBDbG9uZSwgZW5zdXJlVW5pcXVlS2V5IH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBUeXBlUGlja2VyIH0gZnJvbSAnLi9UeXBlUGlja2VyJ1xuaW1wb3J0IHsgQ29uZGl0aW9uYWxzQnVpbGRlciB9IGZyb20gJy4vQ29uZGl0aW9uYWxzQnVpbGRlcidcbmltcG9ydCB7IEZpZWxkRWRpdE1vZGFsIH0gZnJvbSAnLi9GaWVsZEVkaXRNb2RhbCdcbmltcG9ydCB0eXBlIHsgRmllbGRUeXBlLCBTY2hlbWFGaWVsZCwgUXVpelF1ZXN0aW9uIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgKiBhcyBJY29ucyBmcm9tICdsdWNpZGUtcmVhY3QnXG5cbmZ1bmN0aW9uIEZpZWxkSWNvbih7IG5hbWUsIHNpemUgPSAxNCwgLi4ucmVzdCB9OiB7IG5hbWU6IHN0cmluZzsgc2l6ZT86IG51bWJlcjsgW2s6IHN0cmluZ106IGFueSB9KSB7XG4gIGNvbnN0IGljb25OYW1lID0gbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSkucmVwbGFjZSgvLShbYS16XSkvZywgKF8sIGM6IHN0cmluZykgPT4gYy50b1VwcGVyQ2FzZSgpKVxuICBjb25zdCBJY29uID0gKEljb25zIGFzIGFueSlbaWNvbk5hbWVdXG4gIHJldHVybiBJY29uID8gPEljb24gc2l6ZT17c2l6ZX0gey4uLnJlc3R9IC8+IDogbnVsbFxufVxuXG4vKiAtLS0tLS0tLS0tIEZpZWxkIFByZXZpZXcgQ2FyZHMgLS0tLS0tLS0tLSAqL1xuXG5mdW5jdGlvbiBGaWVsZFByZXZpZXcoeyBmaWVsZCwgcXVpelF1ZXN0aW9ucywgb25BZGRRdWl6UXVlc3Rpb24gfToge1xuICBmaWVsZDogU2NoZW1hRmllbGRcbiAgcXVpelF1ZXN0aW9ucz86IFF1aXpRdWVzdGlvbltdXG4gIG9uQWRkUXVpelF1ZXN0aW9uPzogKCkgPT4gdm9pZFxufSkge1xuICBzd2l0Y2ggKGZpZWxkLnR5cGUpIHtcbiAgICBjYXNlICd0ZXh0JzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtcHJldmlld1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtcHJldmlldy1pbnB1dFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmllbGQtcHJldmlldy1wbGFjZWhvbGRlclwiPntmaWVsZC5wbGFjZWhvbGRlciB8fCAnRW50ZXIgdGV4dC4uLid9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcblxuICAgIGNhc2UgJ3RleHRhcmVhJzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtcHJldmlld1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtcHJldmlldy10ZXh0YXJlYVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmllbGQtcHJldmlldy1wbGFjZWhvbGRlclwiPntmaWVsZC5wbGFjZWhvbGRlciB8fCAnRW50ZXIgeW91ciBtZXNzYWdlLi4uJ308L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuXG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtcHJldmlld1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtcHJldmlldy1pbnB1dCBmaWVsZC1wcmV2aWV3LW51bWJlclwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmllbGQtcHJldmlldy1wbGFjZWhvbGRlclwiPjA8L3NwYW4+XG4gICAgICAgICAgICB7ZmllbGQuY29uc3RyYWludHM/LnVuaXQgJiYgKFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaWVsZC1wcmV2aWV3LXVuaXRcIj57ZmllbGQuY29uc3RyYWludHMudW5pdH08L3NwYW4+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcblxuICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1wcmV2aWV3XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1wcmV2aWV3LWlucHV0XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaWVsZC1wcmV2aWV3LXBsYWNlaG9sZGVyXCI+ZGQgLyBtbSAvIHl5eXk8L3NwYW4+XG4gICAgICAgICAgICA8RmllbGRJY29uIG5hbWU9XCJjYWxlbmRhclwiIHNpemU9ezEzfSBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLXRleHQtdGVydGlhcnkpJywgZmxleFNocmluazogMCB9fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcblxuICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLXByZXZpZXdcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLXByZXZpZXctaW5wdXQgZmllbGQtcHJldmlldy1zZWxlY3RcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpZWxkLXByZXZpZXctcGxhY2Vob2xkZXJcIj5cbiAgICAgICAgICAgICAge2ZpZWxkLm9wdGlvbnM/LlswXSB8fCAnU2VsZWN0IGFuIG9wdGlvbi4uLid9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8RmllbGRJY29uIG5hbWU9XCJjaGV2cm9uLWRvd25cIiBzaXplPXsxM30gc3R5bGU9e3sgY29sb3I6ICd2YXIoLS10ZXh0LXRlcnRpYXJ5KScsIGZsZXhTaHJpbms6IDAgfX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG5cbiAgICBjYXNlICd0b2dnbGUnOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1wcmV2aWV3XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1wcmV2aWV3LXRvZ2dsZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1wcmV2aWV3LXRvZ2dsZS10cmFja1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLXByZXZpZXctdG9nZ2xlLXRodW1iXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmllbGQtcHJldmlldy10b2dnbGUtbGFiZWxcIj5FbmFibGVkPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcblxuICAgIGNhc2UgJ2NvbG9yJzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtcHJldmlld1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtcHJldmlldy1jb2xvci1yb3dcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmllbGQtcHJldmlldy1jb2xvci1zd2F0Y2hcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IChmaWVsZC5kZWZhdWx0IGFzIHN0cmluZykgfHwgJyNmZjZlYjQnIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmllbGQtcHJldmlldy1jb2xvci1oZXhcIj57KGZpZWxkLmRlZmF1bHQgYXMgc3RyaW5nKSB8fCAnI2ZmNmViNCd9PC9zcGFuPlxuICAgICAgICAgICAge2ZpZWxkLnByZXNldHMgJiYgZmllbGQucHJlc2V0cy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1wcmV2aWV3LWNvbG9yLXByZXNldHNcIj5cbiAgICAgICAgICAgICAgICB7ZmllbGQucHJlc2V0cy5zbGljZSgwLCA1KS5tYXAoKGMsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJmaWVsZC1wcmV2aWV3LWNvbG9yLXByZXNldFwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogYyB9fSAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuXG4gICAgY2FzZSAnaW1hZ2UnOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1wcmV2aWV3XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1wcmV2aWV3LW1lZGlhXCI+XG4gICAgICAgICAgICA8SW1hZ2VJY29uIHNpemU9ezIwfSBzdHJva2VXaWR0aD17MS41fSAvPlxuICAgICAgICAgICAgPHNwYW4+VXBsb2FkIGltYWdlPC9zcGFuPlxuICAgICAgICAgICAge2ZpZWxkLmFzcGVjdFJhdGlvICYmIDxzcGFuIGNsYXNzTmFtZT1cImZpZWxkLXByZXZpZXctYXNwZWN0XCI+e2ZpZWxkLmFzcGVjdFJhdGlvfTwvc3Bhbj59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuXG4gICAgY2FzZSAnaW1hZ2VfYXJyYXknOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1wcmV2aWV3XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1wcmV2aWV3LWdhbGxlcnlcIj5cbiAgICAgICAgICAgIHtbMCwgMSwgMl0ubWFwKChpKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJmaWVsZC1wcmV2aWV3LWdhbGxlcnktc2xvdFwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZUljb24gc2l6ZT17MTR9IHN0cm9rZVdpZHRoPXsxLjV9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLXByZXZpZXctZ2FsbGVyeS1zbG90IGZpZWxkLXByZXZpZXctZ2FsbGVyeS1hZGRcIj5cbiAgICAgICAgICAgICAgPFBsdXMgc2l6ZT17MTR9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7ZmllbGQubWF4ICYmIChcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpZWxkLXByZXZpZXctbWVkaWEtaGludFwiPlVwIHRvIHtmaWVsZC5tYXh9IHBob3Rvczwvc3Bhbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcblxuICAgIGNhc2UgJ3ZpZGVvJzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtcHJldmlld1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtcHJldmlldy1tZWRpYVwiPlxuICAgICAgICAgICAgPFZpZGVvIHNpemU9ezIwfSBzdHJva2VXaWR0aD17MS41fSAvPlxuICAgICAgICAgICAgPHNwYW4+VXBsb2FkIHZpZGVvPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcblxuICAgIGNhc2UgJ2F1ZGlvJzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtcHJldmlld1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtcHJldmlldy1tZWRpYVwiPlxuICAgICAgICAgICAgPE11c2ljIHNpemU9ezIwfSBzdHJva2VXaWR0aD17MS41fSAvPlxuICAgICAgICAgICAgPHNwYW4+VXBsb2FkIGF1ZGlvPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcblxuICAgIGNhc2UgJ3F1aXonOiB7XG4gICAgICBjb25zdCBxdWVzdGlvbnMgPSBxdWl6UXVlc3Rpb25zIHx8IFtdXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLXByZXZpZXdcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLXByZXZpZXctcXVpelwiPlxuICAgICAgICAgICAge3F1ZXN0aW9ucy5sZW5ndGggPT09IDAgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLXByZXZpZXctbWVkaWFcIiBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcgfX0+XG4gICAgICAgICAgICAgICAgPEhlbHBDaXJjbGUgc2l6ZT17MTh9IHN0cm9rZVdpZHRoPXsxLjV9IC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+Tm8gcXVlc3Rpb25zIHlldDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3F1ZXN0aW9ucy5zbGljZSgwLCA0KS5tYXAoKHEsIGkpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e3EuaWR9IGNsYXNzTmFtZT1cImZpZWxkLXByZXZpZXctcXVpei1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmllbGQtcHJldmlldy1xdWl6LW51bVwiPntpICsgMX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmllbGQtcHJldmlldy1xdWl6LXRleHRcIj57cS50ZXh0IHx8ICdVbnRpdGxlZCBxdWVzdGlvbid9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpZWxkLXByZXZpZXctcXVpei1vcHRzXCI+e3Eub3B0aW9ucy5sZW5ndGh9IG9wdHM8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICB7cXVlc3Rpb25zLmxlbmd0aCA+IDQgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAndmFyKC0tZm9udC1zaXplLXhzKScsIGNvbG9yOiAndmFyKC0tdGV4dC10ZXJ0aWFyeSknLCBwYWRkaW5nTGVmdDogJzRweCcgfX0+XG4gICAgICAgICAgICAgICAgK3txdWVzdGlvbnMubGVuZ3RoIC0gNH0gbW9yZVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpZWxkLXByZXZpZXctcXVpei1hZGRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4geyBlLnN0b3BQcm9wYWdhdGlvbigpOyBvbkFkZFF1aXpRdWVzdGlvbj8uKCkgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFBsdXMgc2l6ZT17MTN9IC8+IEFkZCBRdWVzdGlvblxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNhc2UgJ2dyb3VwJzpcbiAgICBjYXNlICdncm91cF9hcnJheSc6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLXByZXZpZXdcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLXByZXZpZXctZ3JvdXBcIj5cbiAgICAgICAgICAgIDxGaWVsZEljb24gbmFtZT17RklFTERfVFlQRVNbZmllbGQudHlwZV0uaWNvbn0gc2l6ZT17MTZ9IHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tdGV4dC10ZXJ0aWFyeSknIH19IC8+XG4gICAgICAgICAgICA8c3Bhbj57ZmllbGQudHlwZSA9PT0gJ2dyb3VwX2FycmF5JyA/ICdSZXBlYXRpbmcgZ3JvdXAnIDogJ0ZpZWxkIGdyb3VwJ308L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuLyogLS0tLS0tLS0tLSBNYWluIENvbXBvbmVudCAtLS0tLS0tLS0tICovXG5cbmV4cG9ydCBmdW5jdGlvbiBGaWVsZExpc3QoKSB7XG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VTdHVkaW8oKVxuICBjb25zdCBzZWN0aW9uSWR4ID0gc3RhdGUudWkuc2VsZWN0ZWRTZWN0aW9uXG4gIGNvbnN0IHNlY3Rpb24gPSBzdGF0ZS53b3JraW5nLnNjaGVtYS5zZWN0aW9uc1tzZWN0aW9uSWR4XVxuICBjb25zdCBzZWxlY3RlZEZpZWxkID0gc3RhdGUudWkuc2VsZWN0ZWRGaWVsZFxuICBjb25zdCBzZWFyY2hRdWVyeSA9IHN0YXRlLnVpLnNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKClcbiAgY29uc3QgW3BpY2tlck9wZW4sIHNldFBpY2tlck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtxdWlja09wZW4sIHNldFF1aWNrT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2NvbnRleHRNZW51LCBzZXRDb250ZXh0TWVudV0gPSB1c2VTdGF0ZTx7IGlkeDogbnVtYmVyOyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbD4obnVsbClcbiAgY29uc3QgY29udGV4dE1lbnVSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXG4gIGNvbnN0IFtlZGl0aW5nRmllbGRJZHgsIHNldEVkaXRpbmdGaWVsZElkeF0gPSB1c2VTdGF0ZTxudW1iZXIgfCBudWxsPihudWxsKVxuXG4gIC8vIENoZWNrIHdoaWNoIGZpZWxkcyBoYXZlIGNvbmRpdGlvbmFsc1xuICBjb25zdCBjb25kaXRpb25hbHNTZXQgPSBuZXcgU2V0PHN0cmluZz4oKVxuICBjb25zdCBjb25kaXRpb25hbHMgPSBzdGF0ZS53b3JraW5nLnNjaGVtYS5jb25kaXRpb25hbHMgfHwgW11cbiAgZm9yIChjb25zdCBjIG9mIGNvbmRpdGlvbmFscykge1xuICAgIGNvbmRpdGlvbmFsc1NldC5hZGQoYy5pZi5maWVsZClcbiAgICBmb3IgKGNvbnN0IGsgb2YgYy5zaG93KSBjb25kaXRpb25hbHNTZXQuYWRkKGspXG4gIH1cblxuICAvLyBEcmFnIHN0YXRlXG4gIGNvbnN0IFtkcmFnSWR4LCBzZXREcmFnSWR4XSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtkcm9wVGFyZ2V0LCBzZXREcm9wVGFyZ2V0XSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtob3ZlcmVkSWR4LCBzZXRIb3ZlcmVkSWR4XSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpXG5cbiAgY29uc3Qgb25EcmFnU3RhcnQgPSB1c2VDYWxsYmFjaygoaWR4OiBudW1iZXIpID0+IHNldERyYWdJZHgoaWR4KSwgW10pXG4gIGNvbnN0IG9uRHJhZ0VuZCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0RHJhZ0lkeChudWxsKTsgc2V0RHJvcFRhcmdldChudWxsKSB9LCBbXSlcbiAgY29uc3Qgb25EcmFnT3ZlciA9IHVzZUNhbGxiYWNrKChlOiBSZWFjdC5EcmFnRXZlbnQsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJ1xuICAgIHNldERyb3BUYXJnZXQoaWR4KVxuICB9LCBbXSlcbiAgY29uc3Qgb25Ecm9wID0gdXNlQ2FsbGJhY2soKGU6IFJlYWN0LkRyYWdFdmVudCwgdG9JZHg6IG51bWJlcikgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGlmIChkcmFnSWR4ICE9PSBudWxsICYmIGRyYWdJZHggIT09IHRvSWR4KSB7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdNT1ZFX0ZJRUxEJywgZnJvbTogZHJhZ0lkeCwgdG86IHRvSWR4IH0pXG4gICAgfVxuICAgIHNldERyYWdJZHgobnVsbClcbiAgICBzZXREcm9wVGFyZ2V0KG51bGwpXG4gIH0sIFtkcmFnSWR4LCBkaXNwYXRjaF0pXG5cbiAgLy8gQ2xvc2UgY29udGV4dCBtZW51IG9uIG91dHNpZGUgY2xpY2tcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWNvbnRleHRNZW51KSByZXR1cm5cbiAgICBjb25zdCBoYW5kbGVyID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjb250ZXh0TWVudVJlZi5jdXJyZW50ICYmICFjb250ZXh0TWVudVJlZi5jdXJyZW50LmNvbnRhaW5zKGUudGFyZ2V0IGFzIE5vZGUpKSB7XG4gICAgICAgIHNldENvbnRleHRNZW51KG51bGwpXG4gICAgICB9XG4gICAgfVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZXIpXG4gICAgcmV0dXJuICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZXIpXG4gIH0sIFtjb250ZXh0TWVudV0pXG5cbiAgY29uc3QgYWRkRmllbGRPZlR5cGUgPSAodHlwZTogRmllbGRUeXBlKSA9PiB7XG4gICAgaWYgKCFzZWN0aW9uKSByZXR1cm5cbiAgICBjb25zdCBmdCA9IEZJRUxEX1RZUEVTW3R5cGVdXG4gICAgY29uc3QgZmllbGQ6IFNjaGVtYUZpZWxkID0ge1xuICAgICAga2V5OiBlbnN1cmVVbmlxdWVLZXkodHlwZSwgc3RhdGUud29ya2luZy5zY2hlbWEuc2VjdGlvbnMpLFxuICAgICAgbGFiZWw6IGZ0LmxhYmVsLFxuICAgICAgdHlwZSxcbiAgICAgIC4uLmRlZXBDbG9uZShmdC5kZWZhdWx0Q29uZmlnKSxcbiAgICB9XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnQUREX0ZJRUxEJywgc2VjdGlvbklkeCwgZmllbGQgfSlcbiAgICBjb25zdCBkZW1vVmFsdWUgPSBmdC5kZW1vRGVmYXVsdChmaWVsZClcbiAgICBpZiAoZGVtb1ZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1NFVF9ERU1PJywga2V5OiBmaWVsZC5rZXksIHZhbHVlOiBkZW1vVmFsdWUgfSlcbiAgICB9XG4gICAgc2V0UGlja2VyT3BlbihmYWxzZSlcbiAgfVxuXG4gIGNvbnN0IGFkZFF1aWNrVGVtcGxhdGUgPSAocXQ6IHR5cGVvZiBRVUlDS19URU1QTEFURVNbbnVtYmVyXSkgPT4ge1xuICAgIGlmICghc2VjdGlvbikgcmV0dXJuXG4gICAgY29uc3QgZmllbGQgPSBkZWVwQ2xvbmUocXQuZmllbGQpXG4gICAgZmllbGQua2V5ID0gZW5zdXJlVW5pcXVlS2V5KGZpZWxkLmtleSwgc3RhdGUud29ya2luZy5zY2hlbWEuc2VjdGlvbnMpXG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnQUREX0ZJRUxEJywgc2VjdGlvbklkeCwgZmllbGQgfSlcbiAgICBjb25zdCBmdCA9IEZJRUxEX1RZUEVTW2ZpZWxkLnR5cGVdXG4gICAgY29uc3QgZGVtb1ZhbHVlID0gZnQuZGVtb0RlZmF1bHQoZmllbGQpXG4gICAgaWYgKGRlbW9WYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdTRVRfREVNTycsIGtleTogZmllbGQua2V5LCB2YWx1ZTogZGVtb1ZhbHVlIH0pXG4gICAgfVxuICAgIHNldFF1aWNrT3BlbihmYWxzZSlcbiAgfVxuXG4gIGlmICghc2VjdGlvbikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWZpZWxkc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWxpc3QtZW1wdHlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWxpc3QtZW1wdHktaWNvblwiPlxuICAgICAgICAgICAgPEZpZWxkSWNvbiBuYW1lPVwibGF5ZXJzXCIgc2l6ZT17MzJ9IHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tdGV4dC10ZXJ0aWFyeSknIH19IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmllbGQtbGlzdC1lbXB0eS10aXRsZVwiPk5vIHNlY3Rpb24gc2VsZWN0ZWQ8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmllbGQtbGlzdC1lbXB0eS1oaW50XCI+QWRkIGEgc2VjdGlvbiBmcm9tIHRoZSBzaWRlYmFyIHRvIGdldCBzdGFydGVkLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBjb25zdCBmaWx0ZXJlZEZpZWxkcyA9IHNlY3Rpb24uZmllbGRzLm1hcCgoZiwgaSkgPT4gKHsgZmllbGQ6IGYsIGluZGV4OiBpIH0pKS5maWx0ZXIoKHsgZmllbGQ6IGYgfSkgPT4ge1xuICAgIGlmICghc2VhcmNoUXVlcnkpIHJldHVybiB0cnVlXG4gICAgcmV0dXJuIGYubGFiZWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeSkgfHxcbiAgICAgIGYua2V5LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoUXVlcnkpIHx8XG4gICAgICBmLnR5cGUuaW5jbHVkZXMoc2VhcmNoUXVlcnkpXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWZpZWxkc1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1maWVsZHMtaGVhZGVyXCI+XG4gICAgICAgIDxoMj57c2VjdGlvbi5sYWJlbCB8fCAnRmllbGRzJ308L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWZpZWxkcy1oZWFkZXItYWN0aW9uc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtYWRkLWRyb3Bkb3duLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmllbGQtYWRkLXF1aWNrLWJ0blwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFF1aWNrT3BlbighcXVpY2tPcGVuKX1cbiAgICAgICAgICAgICAgdGl0bGU9XCJRdWljayBhZGRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8RmllbGRJY29uIG5hbWU9XCJ6YXBcIiBzaXplPXsxNH0gLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAge3F1aWNrT3BlbiAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtYWRkLWRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1hZGQtZHJvcGRvd24tdGl0bGVcIj5RdWljayBUZW1wbGF0ZXM8L2Rpdj5cbiAgICAgICAgICAgICAgICB7UVVJQ0tfVEVNUExBVEVTLm1hcCgocXQsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PXtpfSBjbGFzc05hbWU9XCJmaWVsZC1hZGQtZHJvcGRvd24taXRlbVwiIG9uQ2xpY2s9eygpID0+IGFkZFF1aWNrVGVtcGxhdGUocXQpfT5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkSWNvbiBuYW1lPXtxdC5pY29ufSBzaXplPXsxNH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3F0LmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmaWVsZC1hZGQtYnRuLWhlYWRlclwiIG9uQ2xpY2s9eygpID0+IHNldFBpY2tlck9wZW4odHJ1ZSl9IHRpdGxlPVwiQWRkIGZpZWxkXCI+XG4gICAgICAgICAgICA8UGx1cyBzaXplPXsxNX0gLz5cbiAgICAgICAgICAgIDxzcGFuPkFkZCBGaWVsZDwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1saXN0XCI+XG4gICAgICAgIHtmaWx0ZXJlZEZpZWxkcy5sZW5ndGggPT09IDAgJiYgc2VjdGlvbi5maWVsZHMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1saXN0LW5vLXJlc3VsdHNcIj5cbiAgICAgICAgICAgIE5vIGZpZWxkcyBtYXRjaCBcIntzdGF0ZS51aS5zZWFyY2hRdWVyeX1cIlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHtmaWx0ZXJlZEZpZWxkcy5sZW5ndGggPT09IDAgJiYgc2VjdGlvbi5maWVsZHMubGVuZ3RoID09PSAwICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWxpc3QtZW1wdHktc2VjdGlvblwiPlxuICAgICAgICAgICAgPHA+VGhpcyBzZWN0aW9uIGlzIGVtcHR5LjwvcD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmllbGQtYWRkLWlubGluZVwiIG9uQ2xpY2s9eygpID0+IHNldFBpY2tlck9wZW4odHJ1ZSl9PlxuICAgICAgICAgICAgICA8UGx1cyBzaXplPXsxNH0gLz4gQWRkIHlvdXIgZmlyc3QgZmllbGRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHtmaWx0ZXJlZEZpZWxkcy5tYXAoKHsgZmllbGQ6IGYsIGluZGV4OiBpIH0pID0+IHtcbiAgICAgICAgICBjb25zdCBmdCA9IEZJRUxEX1RZUEVTW2YudHlwZV0gfHwgeyBsYWJlbDogZi50eXBlLCBpY29uOiAnaGVscC1jaXJjbGUnIH1cbiAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IGkgPT09IHNlbGVjdGVkRmllbGRcbiAgICAgICAgICBjb25zdCBoYXNDb25kaXRpb25hbCA9IGNvbmRpdGlvbmFsc1NldC5oYXMoZi5rZXkpXG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e2Yua2V5ICsgaX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmllbGQtY2FyZCR7aXNBY3RpdmUgPyAnIGFjdGl2ZScgOiAnJ31gfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0aW5nRmllbGRJZHgoaSl9XG4gICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SG92ZXJlZElkeChpKX1cbiAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcmVkSWR4KG51bGwpfVxuICAgICAgICAgICAgICBkcmFnZ2FibGVcbiAgICAgICAgICAgICAgb25EcmFnU3RhcnQ9eygpID0+IG9uRHJhZ1N0YXJ0KGkpfVxuICAgICAgICAgICAgICBvbkRyYWdFbmQ9e29uRHJhZ0VuZH1cbiAgICAgICAgICAgICAgb25EcmFnT3Zlcj17KGUpID0+IG9uRHJhZ092ZXIoZSwgaSl9XG4gICAgICAgICAgICAgIG9uRHJvcD17KGUpID0+IG9uRHJvcChlLCBpKX1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBkcmFnSWR4ID09PSBpID8gMC4zNSA6IDEsXG4gICAgICAgICAgICAgICAgYm9yZGVyVG9wOiBkcm9wVGFyZ2V0ID09PSBpICYmIGRyYWdJZHggIT09IGkgPyAnMnB4IHNvbGlkIHZhcigtLWFjY2VudCknIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7LyogRHJhZyBoYW5kbGUgKi99XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGRyYWctaGFuZGxlJHtob3ZlcmVkSWR4ID09PSBpIHx8IGlzQWN0aXZlID8gJyB2aXNpYmxlJyA6ICcnfWB9PlxuICAgICAgICAgICAgICAgIDxHcmlwVmVydGljYWwgc2l6ZT17MTJ9IC8+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICB7LyogQ2FyZCBjb250ZW50ICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgIHsvKiBUb3Agcm93OiBpY29uLCBsYWJlbCwgYmFkZ2VzLCBtZW51ICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtY2FyZC10b3BcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGZpZWxkLWljb24tYmFkZ2Uke2lzQWN0aXZlID8gJyBhY3RpdmUnIDogJyd9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZEljb24gbmFtZT17ZnQuaWNvbn0gc2l6ZT17MTN9IC8+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWNhcmQtbGFiZWwtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmllbGQtY2FyZC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtmLmxhYmVsIHx8ICdVbnRpdGxlZCd9XG4gICAgICAgICAgICAgICAgICAgICAge2YucmVxdWlyZWQgJiYgPHNwYW4gY2xhc3NOYW1lPVwiZmllbGQtcmVxdWlyZWQtYXN0ZXJpc2tcIj4qPC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaWVsZC1jYXJkLW1ldGFcIj57Zi5rZXl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIHtoYXNDb25kaXRpb25hbCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpZWxkLWNvbmRpdGlvbmFsLWJhZGdlXCIgdGl0bGU9XCJIYXMgY29uZGl0aW9uYWwgbG9naWNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8R2l0QnJhbmNoIHNpemU9ezEyfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaWVsZC10eXBlLXBpbGxcIj57ZnQubGFiZWx9PC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZpZWxkLW1lbnUtYnRuJHtob3ZlcmVkSWR4ID09PSBpIHx8IGlzQWN0aXZlID8gJyB2aXNpYmxlJyA6ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlY3QgPSAoZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgICAgICAgICAgIHNldENvbnRleHRNZW51KHsgaWR4OiBpLCB4OiByZWN0LnJpZ2h0ICsgNCwgeTogcmVjdC50b3AgfSlcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPE1vcmVIb3Jpem9udGFsIHNpemU9ezE1fSAvPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogUHJldmlldyBhcmVhICovfVxuICAgICAgICAgICAgICAgIDxGaWVsZFByZXZpZXdcbiAgICAgICAgICAgICAgICAgIGZpZWxkPXtmfVxuICAgICAgICAgICAgICAgICAgcXVpelF1ZXN0aW9ucz17Zi50eXBlID09PSAncXVpeicgPyAoc3RhdGUud29ya2luZy5kZW1vW2Yua2V5XSBhcyBRdWl6UXVlc3Rpb25bXSB8IHVuZGVmaW5lZCkgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgICBvbkFkZFF1aXpRdWVzdGlvbj17Zi50eXBlID09PSAncXVpeicgPyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nID0gKHN0YXRlLndvcmtpbmcuZGVtb1tmLmtleV0gYXMgUXVpelF1ZXN0aW9uW10gfCB1bmRlZmluZWQpIHx8IFtdXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnU0VUX0RFTU8nLFxuICAgICAgICAgICAgICAgICAgICAgIGtleTogZi5rZXksXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFsuLi5leGlzdGluZywge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdxJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIsIDgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbJ09wdGlvbiAxJywgJ09wdGlvbiAyJywgJ09wdGlvbiAzJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3JyZWN0SW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9IDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7c2VjdGlvbi5maWVsZHMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkLWZpZWxkLWFyZWFcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFkZC1maWVsZC1idG5cIiBvbkNsaWNrPXsoKSA9PiBzZXRQaWNrZXJPcGVuKHRydWUpfT5cbiAgICAgICAgICAgIDxQbHVzIHNpemU9ezE0fSAvPiBBZGQgRmllbGRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICA8Q29uZGl0aW9uYWxzQnVpbGRlciAvPlxuXG4gICAgICB7LyogQ29udGV4dCBtZW51ICovfVxuICAgICAge2NvbnRleHRNZW51ICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHJlZj17Y29udGV4dE1lbnVSZWZ9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY29udGV4dC1tZW51XCJcbiAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogJ2ZpeGVkJywgbGVmdDogY29udGV4dE1lbnUueCwgdG9wOiBjb250ZXh0TWVudS55LCB6SW5kZXg6IDk5OTkgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRleHQtbWVudS1pdGVtXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0RWRpdGluZ0ZpZWxkSWR4KGNvbnRleHRNZW51LmlkeClcbiAgICAgICAgICAgICAgc2V0Q29udGV4dE1lbnUobnVsbClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFBlbmNpbCBzaXplPXsxM30gLz4gRWRpdFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRleHQtbWVudS1pdGVtXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnRFVQTElDQVRFX0ZJRUxEJywgc2VjdGlvbklkeCwgZmllbGRJZHg6IGNvbnRleHRNZW51LmlkeCB9KVxuICAgICAgICAgICAgICBzZXRDb250ZXh0TWVudShudWxsKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q29weSBzaXplPXsxM30gLz4gRHVwbGljYXRlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZXh0LW1lbnUtc2VwYXJhdG9yXCIgLz5cbiAgICAgICAgICB7Y29udGV4dE1lbnUuaWR4ID4gMCAmJiAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRleHQtbWVudS1pdGVtXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ01PVkVfRklFTEQnLCBmcm9tOiBjb250ZXh0TWVudS5pZHgsIHRvOiBjb250ZXh0TWVudS5pZHggLSAxIH0pXG4gICAgICAgICAgICAgICAgc2V0Q29udGV4dE1lbnUobnVsbClcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPENoZXZyb25VcCBzaXplPXsxM30gLz4gTW92ZSBVcFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7c2VjdGlvbiAmJiBjb250ZXh0TWVudS5pZHggPCBzZWN0aW9uLmZpZWxkcy5sZW5ndGggLSAxICYmIChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGV4dC1tZW51LWl0ZW1cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnTU9WRV9GSUVMRCcsIGZyb206IGNvbnRleHRNZW51LmlkeCwgdG86IGNvbnRleHRNZW51LmlkeCArIDIgfSlcbiAgICAgICAgICAgICAgICBzZXRDb250ZXh0TWVudShudWxsKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Q2hldnJvbkRvd24gc2l6ZT17MTN9IC8+IE1vdmUgRG93blxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7KGNvbnRleHRNZW51LmlkeCA+IDAgfHwgKHNlY3Rpb24gJiYgY29udGV4dE1lbnUuaWR4IDwgc2VjdGlvbi5maWVsZHMubGVuZ3RoIC0gMSkpICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGV4dC1tZW51LXNlcGFyYXRvclwiIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb250ZXh0LW1lbnUtaXRlbSBkYW5nZXJcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdERUxFVEVfRklFTEQnLCBzZWN0aW9uSWR4LCBmaWVsZElkeDogY29udGV4dE1lbnUuaWR4IH0pXG4gICAgICAgICAgICAgIHNldENvbnRleHRNZW51KG51bGwpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUcmFzaDIgc2l6ZT17MTN9IC8+IERlbGV0ZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIDxUeXBlUGlja2VyIG9wZW49e3BpY2tlck9wZW59IG9uQ2xvc2U9eygpID0+IHNldFBpY2tlck9wZW4oZmFsc2UpfSBvblNlbGVjdD17YWRkRmllbGRPZlR5cGV9IC8+XG5cbiAgICAgIHtlZGl0aW5nRmllbGRJZHggIT09IG51bGwgJiYgc2VjdGlvbj8uZmllbGRzW2VkaXRpbmdGaWVsZElkeF0gJiYgKFxuICAgICAgICA8RmllbGRFZGl0TW9kYWxcbiAgICAgICAgICBmaWVsZD17c2VjdGlvbi5maWVsZHNbZWRpdGluZ0ZpZWxkSWR4XX1cbiAgICAgICAgICBkZW1vVmFsdWU9e3N0YXRlLndvcmtpbmcuZGVtb1tzZWN0aW9uLmZpZWxkc1tlZGl0aW5nRmllbGRJZHhdLmtleV19XG4gICAgICAgICAgb25TYXZlPXsodXBkYXRlZEZpZWxkLCB1cGRhdGVkRGVtbykgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnVVBEQVRFX0ZJRUxEJywgc2VjdGlvbklkeCwgZmllbGRJZHg6IGVkaXRpbmdGaWVsZElkeCwgZmllbGQ6IHVwZGF0ZWRGaWVsZCB9KVxuICAgICAgICAgICAgaWYgKHVwZGF0ZWREZW1vICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnU0VUX0RFTU8nLCBrZXk6IHVwZGF0ZWRGaWVsZC5rZXksIHZhbHVlOiB1cGRhdGVkRGVtbyB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0RWRpdGluZ0ZpZWxkSWR4KG51bGwpfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCB0eXBlIHsgRmllbGRUeXBlLCBTY2hlbWFGaWVsZCB9IGZyb20gJy4vdHlwZXMnXG5cbmV4cG9ydCB0eXBlIEZpZWxkVHlwZUNvbmZpZyA9IHtcbiAgbGFiZWw6IHN0cmluZ1xuICBpY29uOiBzdHJpbmdcbiAgY2F0ZWdvcnk6ICdiYXNpYycgfCAnbWVkaWEnIHwgJ2FkdmFuY2VkJ1xuICBkZWZhdWx0Q29uZmlnOiBQYXJ0aWFsPFNjaGVtYUZpZWxkPlxuICBkZW1vRGVmYXVsdDogKGZpZWxkOiBTY2hlbWFGaWVsZCkgPT4gdW5rbm93blxuICBjdXN0b21JbnNwZWN0b3I/OiAncXVpeicgfCAnZ3JvdXAnXG59XG5cbmNvbnN0IFNBTVBMRV9JTUFHRVMgPSB7XG4gIHBvcnRyYWl0OiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1Mjk2MjY0NTU1OTQtNGZmMDgwMmNmYjdlP3c9NDAwJyxcbiAgbWVtb3J5MTogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTE2NTg5MTc4NTgxLTZjZDc4MzNhZTNiMj93PTQwMCcsXG4gIG1lbW9yeTI6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUyMjY3MzYwNzIwMC0xNjRkMWI2Y2U0ODY/dz00MDAnLFxuICBtZW1vcnkzOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MTE5ODg2MTc1MDktYTU3YzhhMjg4NjU5P3c9NDAwJyxcbn1cblxuZXhwb3J0IGNvbnN0IEZJRUxEX1RZUEVTOiBSZWNvcmQ8RmllbGRUeXBlLCBGaWVsZFR5cGVDb25maWc+ID0ge1xuICB0ZXh0OiB7XG4gICAgbGFiZWw6ICdUZXh0JywgaWNvbjogJ3R5cGUnLCBjYXRlZ29yeTogJ2Jhc2ljJyxcbiAgICBkZWZhdWx0Q29uZmlnOiB7IHJlcXVpcmVkOiBmYWxzZSwgcGxhY2Vob2xkZXI6ICcnLCBoaW50OiAnJyB9LFxuICAgIGRlbW9EZWZhdWx0OiAoZikgPT4gZi5wbGFjZWhvbGRlcj8ucmVwbGFjZSgvXmVcXC5nXFwuXFxzKi9pLCAnJykgfHwgJ1NhbXBsZSB0ZXh0JyxcbiAgfSxcbiAgdGV4dGFyZWE6IHtcbiAgICBsYWJlbDogJ1RleHQgQXJlYScsIGljb246ICdhbGlnbi1sZWZ0JywgY2F0ZWdvcnk6ICdiYXNpYycsXG4gICAgZGVmYXVsdENvbmZpZzogeyByZXF1aXJlZDogZmFsc2UsIHBsYWNlaG9sZGVyOiAnJywgaGludDogJycgfSxcbiAgICBkZW1vRGVmYXVsdDogKCkgPT4gJ0EgbWVzc2FnZSBmcm9tIHRoZSBoZWFydC4nLFxuICB9LFxuICBudW1iZXI6IHtcbiAgICBsYWJlbDogJ051bWJlcicsIGljb246ICdoYXNoJywgY2F0ZWdvcnk6ICdiYXNpYycsXG4gICAgZGVmYXVsdENvbmZpZzogeyByZXF1aXJlZDogZmFsc2UsIGhpbnQ6ICcnIH0sXG4gICAgZGVtb0RlZmF1bHQ6ICgpID0+IDIxLFxuICB9LFxuICBkYXRlOiB7XG4gICAgbGFiZWw6ICdEYXRlJywgaWNvbjogJ2NhbGVuZGFyJywgY2F0ZWdvcnk6ICdiYXNpYycsXG4gICAgZGVmYXVsdENvbmZpZzogeyByZXF1aXJlZDogZmFsc2UsIGhpbnQ6ICcnIH0sXG4gICAgZGVtb0RlZmF1bHQ6ICgpID0+ICcyMDA0LTA4LTE0JyxcbiAgfSxcbiAgY29sb3I6IHtcbiAgICBsYWJlbDogJ0NvbG9yJywgaWNvbjogJ3BhbGV0dGUnLCBjYXRlZ29yeTogJ2Jhc2ljJyxcbiAgICBkZWZhdWx0Q29uZmlnOiB7IGRlZmF1bHQ6ICcjZmY2ZWI0JyB9LFxuICAgIGRlbW9EZWZhdWx0OiAoKSA9PiAnI2ZmNmViNCcsXG4gIH0sXG4gIHRvZ2dsZToge1xuICAgIGxhYmVsOiAnVG9nZ2xlJywgaWNvbjogJ3RvZ2dsZS1sZWZ0JywgY2F0ZWdvcnk6ICdiYXNpYycsXG4gICAgZGVmYXVsdENvbmZpZzoge30sXG4gICAgZGVtb0RlZmF1bHQ6ICgpID0+IHRydWUsXG4gIH0sXG4gIHNlbGVjdDoge1xuICAgIGxhYmVsOiAnU2VsZWN0JywgaWNvbjogJ2xpc3QnLCBjYXRlZ29yeTogJ2Jhc2ljJyxcbiAgICBkZWZhdWx0Q29uZmlnOiB7IG9wdGlvbnM6IFsnT3B0aW9uIDEnLCAnT3B0aW9uIDInXSwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgZGVtb0RlZmF1bHQ6IChmKSA9PiBmLm9wdGlvbnM/LlswXSB8fCAnT3B0aW9uIDEnLFxuICB9LFxuICBpbWFnZToge1xuICAgIGxhYmVsOiAnSW1hZ2UnLCBpY29uOiAnaW1hZ2UnLCBjYXRlZ29yeTogJ21lZGlhJyxcbiAgICBkZWZhdWx0Q29uZmlnOiB7IHJlcXVpcmVkOiBmYWxzZSB9LFxuICAgIGRlbW9EZWZhdWx0OiAoKSA9PiBTQU1QTEVfSU1BR0VTLnBvcnRyYWl0LFxuICB9LFxuICBpbWFnZV9hcnJheToge1xuICAgIGxhYmVsOiAnUGhvdG8gR2FsbGVyeScsIGljb246ICdpbWFnZXMnLCBjYXRlZ29yeTogJ21lZGlhJyxcbiAgICBkZWZhdWx0Q29uZmlnOiB7IG1heDogOCB9LFxuICAgIGRlbW9EZWZhdWx0OiAoKSA9PiBbU0FNUExFX0lNQUdFUy5tZW1vcnkxLCBTQU1QTEVfSU1BR0VTLm1lbW9yeTIsIFNBTVBMRV9JTUFHRVMubWVtb3J5M10sXG4gIH0sXG4gIHZpZGVvOiB7XG4gICAgbGFiZWw6ICdWaWRlbycsIGljb246ICd2aWRlbycsIGNhdGVnb3J5OiAnbWVkaWEnLFxuICAgIGRlZmF1bHRDb25maWc6IHsgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgZGVtb0RlZmF1bHQ6ICgpID0+ICcnLFxuICB9LFxuICBhdWRpbzoge1xuICAgIGxhYmVsOiAnQXVkaW8nLCBpY29uOiAnbXVzaWMnLCBjYXRlZ29yeTogJ21lZGlhJyxcbiAgICBkZWZhdWx0Q29uZmlnOiB7fSxcbiAgICBkZW1vRGVmYXVsdDogKCkgPT4gKHsgdXJsOiAnaHR0cHM6Ly93d3cuc291bmRoZWxpeC5jb20vZXhhbXBsZXMvbXAzL1NvdW5kSGVsaXgtU29uZy0xLm1wMycgfSksXG4gIH0sXG4gIHF1aXo6IHtcbiAgICBsYWJlbDogJ1F1aXonLCBpY29uOiAnaGVscC1jaXJjbGUnLCBjYXRlZ29yeTogJ2FkdmFuY2VkJyxcbiAgICBkZWZhdWx0Q29uZmlnOiB7fSxcbiAgICBjdXN0b21JbnNwZWN0b3I6ICdxdWl6JyxcbiAgICBkZW1vRGVmYXVsdDogKCkgPT4gW3sgaWQ6ICdxMScsIHRleHQ6ICdXaGF0IGlzIG15IGZhdm91cml0ZSBjb2xvcj8nLCBvcHRpb25zOiBbJ0JsdWUnLCAnUmVkJywgJ0dyZWVuJ10sIGNvcnJlY3RJbmRleDogMCB9XSxcbiAgfSxcbiAgZ3JvdXA6IHtcbiAgICBsYWJlbDogJ0dyb3VwJywgaWNvbjogJ2xheWVycycsIGNhdGVnb3J5OiAnYWR2YW5jZWQnLFxuICAgIGRlZmF1bHRDb25maWc6IHsgZmllbGRzOiBbXSB9LFxuICAgIGN1c3RvbUluc3BlY3RvcjogJ2dyb3VwJyxcbiAgICBkZW1vRGVmYXVsdDogKCkgPT4gKHt9KSxcbiAgfSxcbiAgZ3JvdXBfYXJyYXk6IHtcbiAgICBsYWJlbDogJ1JlcGVhdGluZyBHcm91cCcsIGljb246ICdjb3B5JywgY2F0ZWdvcnk6ICdhZHZhbmNlZCcsXG4gICAgZGVmYXVsdENvbmZpZzogeyBmaWVsZHM6IFtdIH0sXG4gICAgY3VzdG9tSW5zcGVjdG9yOiAnZ3JvdXAnLFxuICAgIGRlbW9EZWZhdWx0OiAoKSA9PiBbe31dLFxuICB9LFxufVxuXG5leHBvcnQgY29uc3QgRklFTERfQ0FURUdPUklFUyA9IFtcbiAgeyBrZXk6ICdiYXNpYycgYXMgY29uc3QsIGxhYmVsOiAnQmFzaWMnIH0sXG4gIHsga2V5OiAnbWVkaWEnIGFzIGNvbnN0LCBsYWJlbDogJ01lZGlhJyB9LFxuICB7IGtleTogJ2FkdmFuY2VkJyBhcyBjb25zdCwgbGFiZWw6ICdBZHZhbmNlZCcgfSxcbl1cbiIsICJpbXBvcnQgdHlwZSB7IFNjaGVtYUZpZWxkIH0gZnJvbSAnLi90eXBlcydcblxuZXhwb3J0IHR5cGUgUXVpY2tUZW1wbGF0ZSA9IHtcbiAgbGFiZWw6IHN0cmluZ1xuICBpY29uOiBzdHJpbmdcbiAgZmllbGQ6IFNjaGVtYUZpZWxkXG59XG5cbmV4cG9ydCBjb25zdCBRVUlDS19URU1QTEFURVM6IFF1aWNrVGVtcGxhdGVbXSA9IFtcbiAgeyBsYWJlbDogJ1JlY2lwaWVudCBOYW1lJywgaWNvbjogJ3VzZXInLCBmaWVsZDogeyBrZXk6ICdyZWNpcGllbnROYW1lJywgbGFiZWw6ICdUaGVpciBuYW1lJywgdHlwZTogJ3RleHQnLCByZXF1aXJlZDogdHJ1ZSwgcGxhY2Vob2xkZXI6ICdlLmcuIFByaXlhJyB9IH0sXG4gIHsgbGFiZWw6ICdTZW5kZXIgTmFtZScsIGljb246ICd1c2VyLWNoZWNrJywgZmllbGQ6IHsga2V5OiAnc2VuZGVyTmFtZScsIGxhYmVsOiAnWW91ciBuYW1lJywgdHlwZTogJ3RleHQnLCByZXF1aXJlZDogdHJ1ZSB9IH0sXG4gIHsgbGFiZWw6ICdQaG90b3MnLCBpY29uOiAnaW1hZ2VzJywgZmllbGQ6IHsga2V5OiAncGhvdG9zJywgbGFiZWw6ICdBZGQgcGhvdG9zJywgdHlwZTogJ2ltYWdlX2FycmF5JywgbWF4OiA4IH0gfSxcbiAgeyBsYWJlbDogJ0NvdmVyIFBob3RvJywgaWNvbjogJ2ltYWdlJywgZmllbGQ6IHsga2V5OiAnY292ZXJQaG90bycsIGxhYmVsOiAnQ292ZXIgcGhvdG8nLCB0eXBlOiAnaW1hZ2UnLCByZXF1aXJlZDogdHJ1ZSwgYXNwZWN0UmF0aW86ICczOjQnIH0gfSxcbiAgeyBsYWJlbDogJ1NvbmcnLCBpY29uOiAnbXVzaWMnLCBmaWVsZDogeyBrZXk6ICdzb25nJywgbGFiZWw6ICdBZGQgYSBzb25nJywgdHlwZTogJ2F1ZGlvJyB9IH0sXG4gIHsgbGFiZWw6ICdNZXNzYWdlJywgaWNvbjogJ21lc3NhZ2Utc3F1YXJlJywgZmllbGQ6IHsga2V5OiAncGVyc29uYWxNZXNzYWdlJywgbGFiZWw6ICdZb3VyIG1lc3NhZ2UnLCB0eXBlOiAndGV4dGFyZWEnLCByZXF1aXJlZDogdHJ1ZSwgcGxhY2Vob2xkZXI6ICdXcml0ZSBzb21ldGhpbmcgZnJvbSB0aGUgaGVhcnQuLi4nIH0gfSxcbiAgeyBsYWJlbDogJ1F1aXonLCBpY29uOiAnaGVscC1jaXJjbGUnLCBmaWVsZDogeyBrZXk6ICdxdWl6JywgbGFiZWw6ICdRdWl6IHF1ZXN0aW9ucycsIHR5cGU6ICdxdWl6JyB9IH0sXG4gIHsgbGFiZWw6ICdCaXJ0aGRheScsIGljb246ICdjYWxlbmRhcicsIGZpZWxkOiB7IGtleTogJ2RhdGVPZkJpcnRoJywgbGFiZWw6ICdUaGVpciBiaXJ0aGRheScsIHR5cGU6ICdkYXRlJyB9IH0sXG4gIHsgbGFiZWw6ICdDb2xvcicsIGljb246ICdwYWxldHRlJywgZmllbGQ6IHsga2V5OiAnYWNjZW50Q29sb3InLCBsYWJlbDogJ1RoZW1lIGNvbG91cicsIHR5cGU6ICdjb2xvcicsIGRlZmF1bHQ6ICcjZmY2ZWI0JywgcHJlc2V0czogWycjZmY2ZWI0JywgJyM2MzY2ZjEnLCAnI2Y1OWUwYicsICcjMTBiOTgxJywgJyNlYzQ4OTknLCAnIzhiNWNmNiddIH0gfSxcbl1cblxuZXhwb3J0IHR5cGUgRGVwSXRlbSA9IHtcbiAgbmFtZTogc3RyaW5nXG4gIGRlc2M6IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgQVZBSUxBQkxFX0RFUFM6IERlcEl0ZW1bXSA9IFtcbiAgeyBuYW1lOiAnZnJhbWVyLW1vdGlvbicsIGRlc2M6ICdBbmltYXRpb24gbGlicmFyeScgfSxcbiAgeyBuYW1lOiAnY2FudmFzLWNvbmZldHRpJywgZGVzYzogJ0NvbmZldHRpIGVmZmVjdHMnIH0sXG4gIHsgbmFtZTogJ2hvd2xlcicsIGRlc2M6ICdBZHZhbmNlZCBhdWRpbycgfSxcbiAgeyBuYW1lOiAndGhyZWUnLCBkZXNjOiAnM0QgcmVuZGVyaW5nJyB9LFxuICB7IG5hbWU6ICdAcmVhY3QtdGhyZWUvZmliZXInLCBkZXNjOiAnUmVhY3QgVGhyZWUuanMnIH0sXG4gIHsgbmFtZTogJ0ByZWFjdC10aHJlZS9kcmVpJywgZGVzYzogJ1RocmVlLmpzIGhlbHBlcnMnIH0sXG4gIHsgbmFtZTogJ3JlYWN0LXBhZ2VmbGlwJywgZGVzYzogJ0ZsaXBib29rIGVmZmVjdCcgfSxcbiAgeyBuYW1lOiAncmVhY3QtY291bnR1cCcsIGRlc2M6ICdOdW1iZXIgYW5pbWF0aW9uJyB9LFxuICB7IG5hbWU6ICdyZWFjdC10eXBlLWFuaW1hdGlvbicsIGRlc2M6ICdUeXBld3JpdGVyIHRleHQnIH0sXG4gIHsgbmFtZTogJ3JlYWN0LXBhcmFsbGF4LXRpbHQnLCBkZXNjOiAnVGlsdC9wYXJhbGxheCcgfSxcbiAgeyBuYW1lOiAnZW1ibGEtY2Fyb3VzZWwtcmVhY3QnLCBkZXNjOiAnQ2Fyb3VzZWwvc2xpZGVyJyB9LFxuICB7IG5hbWU6ICdiYWxsb29ucy1qcycsIGRlc2M6ICdCYWxsb29uIGVmZmVjdHMnIH0sXG4gIHsgbmFtZTogJ2xvdHRpZS1yZWFjdCcsIGRlc2M6ICdMb3R0aWUgYW5pbWF0aW9ucycgfSxcbl1cbiIsICJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFNlYXJjaCwgWCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCdcbmltcG9ydCB7IEZJRUxEX1RZUEVTLCBGSUVMRF9DQVRFR09SSUVTIH0gZnJvbSAnLi4vZmllbGQtcmVnaXN0cnknXG5pbXBvcnQgdHlwZSB7IEZpZWxkVHlwZSB9IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0ICogYXMgSWNvbnMgZnJvbSAnbHVjaWRlLXJlYWN0J1xuXG5mdW5jdGlvbiBGaWVsZEljb24oeyBuYW1lLCBzaXplID0gMTYgfTogeyBuYW1lOiBzdHJpbmc7IHNpemU/OiBudW1iZXIgfSkge1xuICBjb25zdCBpY29uTmFtZSA9IG5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpLnJlcGxhY2UoLy0oW2Etel0pL2csIChfLCBjKSA9PiBjLnRvVXBwZXJDYXNlKCkpXG4gIGNvbnN0IEljb24gPSAoSWNvbnMgYXMgYW55KVtpY29uTmFtZV1cbiAgcmV0dXJuIEljb24gPyA8SWNvbiBzaXplPXtzaXplfSAvPiA6IG51bGxcbn1cblxudHlwZSBQcm9wcyA9IHtcbiAgb3BlbjogYm9vbGVhblxuICBvbkNsb3NlOiAoKSA9PiB2b2lkXG4gIG9uU2VsZWN0OiAodHlwZTogRmllbGRUeXBlKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUeXBlUGlja2VyKHsgb3Blbiwgb25DbG9zZSwgb25TZWxlY3QgfTogUHJvcHMpIHtcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG9wZW4pIHtcbiAgICAgIHNldFNlYXJjaCgnJylcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gaW5wdXRSZWYuY3VycmVudD8uZm9jdXMoKSwgNTApXG4gICAgfVxuICB9LCBbb3Blbl0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIW9wZW4pIHJldHVyblxuICAgIGNvbnN0IG9uS2V5ID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHsgaWYgKGUua2V5ID09PSAnRXNjYXBlJykgb25DbG9zZSgpIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5KVxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5KVxuICB9LCBbb3Blbiwgb25DbG9zZV0pXG5cbiAgaWYgKCFvcGVuKSByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IHEgPSBzZWFyY2gudG9Mb3dlckNhc2UoKVxuICBjb25zdCBlbnRyaWVzID0gKE9iamVjdC5lbnRyaWVzKEZJRUxEX1RZUEVTKSBhcyBbRmllbGRUeXBlLCB0eXBlb2YgRklFTERfVFlQRVNbRmllbGRUeXBlXV1bXSlcbiAgICAuZmlsdGVyKChba2V5LCBjZmddKSA9PiAhcSB8fCBrZXkuaW5jbHVkZXMocSkgfHwgY2ZnLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocSkpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLW92ZXJsYXlcIiBvbkNsaWNrPXtvbkNsb3NlfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHlwZS1waWNrZXJcIiBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHlwZS1waWNrZXItaGVhZGVyXCI+XG4gICAgICAgICAgPGgzPkFkZCBGaWVsZDwvaDM+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJpY29uLWJ0blwiIG9uQ2xpY2s9e29uQ2xvc2V9PjxYIHNpemU9ezE2fSAvPjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0eXBlLXBpY2tlci1zZWFyY2hcIj5cbiAgICAgICAgICA8U2VhcmNoIHNpemU9ezE0fSAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZpZWxkIHR5cGVzLi4uXCJcbiAgICAgICAgICAgIHZhbHVlPXtzZWFyY2h9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHlwZS1waWNrZXItYm9keVwiPlxuICAgICAgICAgIHtGSUVMRF9DQVRFR09SSUVTLm1hcCgoY2F0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IGVudHJpZXMuZmlsdGVyKChbLCBjZmddKSA9PiBjZmcuY2F0ZWdvcnkgPT09IGNhdC5rZXkpXG4gICAgICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbFxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2NhdC5rZXl9IGNsYXNzTmFtZT1cInR5cGUtcGlja2VyLWNhdGVnb3J5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0eXBlLXBpY2tlci1jYXRlZ29yeS1sYWJlbFwiPntjYXQubGFiZWx9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0eXBlLXBpY2tlci1ncmlkXCI+XG4gICAgICAgICAgICAgICAgICB7aXRlbXMubWFwKChbdHlwZSwgY2ZnXSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXt0eXBlfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR5cGUtcGlja2VyLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uU2VsZWN0KHR5cGUpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHlwZS1waWNrZXItaWNvblwiPjxGaWVsZEljb24gbmFtZT17Y2ZnLmljb259IHNpemU9ezE4fSAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0eXBlLXBpY2tlci1sYWJlbFwiPntjZmcubGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgICB7ZW50cmllcy5sZW5ndGggPT09IDAgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0eXBlLXBpY2tlci1lbXB0eVwiPk5vIGZpZWxkIHR5cGVzIG1hdGNoIFwie3NlYXJjaH1cIjwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFBsdXMsIFgsIEdpdEJyYW5jaCwgQ2hldnJvbkRvd24sIENoZXZyb25SaWdodCwgQXJyb3dSaWdodCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCdcbmltcG9ydCB7IHVzZVN0dWRpbyB9IGZyb20gJy4uL3N0YXRlJ1xuaW1wb3J0IHR5cGUgeyBTY2hlbWFDb25kaXRpb25hbCB9IGZyb20gJy4uL3R5cGVzJ1xuXG4vKiAtLS0tLS0tLS0tIE11bHRpLXNlbGVjdCBkcm9wZG93biBmb3IgZmllbGQga2V5cyAtLS0tLS0tLS0tICovXG5cbmZ1bmN0aW9uIEZpZWxkS2V5U2VsZWN0KHtcbiAgc2VsZWN0ZWQsXG4gIGFsbEtleXMsXG4gIG9uQ2hhbmdlLFxufToge1xuICBzZWxlY3RlZDogc3RyaW5nW11cbiAgYWxsS2V5czogc3RyaW5nW11cbiAgb25DaGFuZ2U6IChrZXlzOiBzdHJpbmdbXSkgPT4gdm9pZFxufSkge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgcmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFvcGVuKSByZXR1cm5cbiAgICBjb25zdCBoYW5kbGVyID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChyZWYuY3VycmVudCAmJiAhcmVmLmN1cnJlbnQuY29udGFpbnMoZS50YXJnZXQgYXMgTm9kZSkpIHtcbiAgICAgICAgc2V0T3BlbihmYWxzZSlcbiAgICAgIH1cbiAgICB9XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlcilcbiAgICByZXR1cm4gKCkgPT4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlcilcbiAgfSwgW29wZW5dKVxuXG4gIGNvbnN0IHRvZ2dsZSA9IChrZXk6IHN0cmluZykgPT4ge1xuICAgIGlmIChzZWxlY3RlZC5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBvbkNoYW5nZShzZWxlY3RlZC5maWx0ZXIoKGspID0+IGsgIT09IGtleSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIG9uQ2hhbmdlKFsuLi5zZWxlY3RlZCwga2V5XSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uZC1maWVsZC1zZWxlY3RcIiByZWY9e3JlZn0+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNvbmQtZmllbGQtc2VsZWN0LXRyaWdnZXJcIiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKCFvcGVuKX0+XG4gICAgICAgIHtzZWxlY3RlZC5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29uZC1maWVsZC1zZWxlY3QtcGxhY2Vob2xkZXJcIj5TZWxlY3QgZmllbGRzLi4uPC9zcGFuPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uZC1maWVsZC1waWxsc1wiPlxuICAgICAgICAgICAge3NlbGVjdGVkLm1hcCgoaykgPT4gKFxuICAgICAgICAgICAgICA8c3BhbiBrZXk9e2t9IGNsYXNzTmFtZT1cImNvbmQtZmllbGQtcGlsbFwiPlxuICAgICAgICAgICAgICAgIHtrfVxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbmQtZmllbGQtcGlsbC1yZW1vdmVcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHsgZS5zdG9wUHJvcGFnYXRpb24oKTsgdG9nZ2xlKGspIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFggc2l6ZT17MTB9IC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8Q2hldnJvbkRvd24gc2l6ZT17MTN9IHN0eWxlPXt7IGZsZXhTaHJpbms6IDAsIGNvbG9yOiAndmFyKC0tdGV4dC10ZXJ0aWFyeSknIH19IC8+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIHtvcGVuICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25kLWZpZWxkLXNlbGVjdC1kcm9wZG93blwiPlxuICAgICAgICAgIHthbGxLZXlzLmZpbHRlcigoaykgPT4gIXNlbGVjdGVkLmluY2x1ZGVzKGspKS5sZW5ndGggPT09IDAgJiYgc2VsZWN0ZWQubGVuZ3RoID09PSBhbGxLZXlzLmxlbmd0aCAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbmQtZmllbGQtc2VsZWN0LWVtcHR5XCI+QWxsIGZpZWxkcyBzZWxlY3RlZDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAge2FsbEtleXMubWFwKChrKSA9PiAoXG4gICAgICAgICAgICA8bGFiZWwga2V5PXtrfSBjbGFzc05hbWU9XCJjb25kLWZpZWxkLXNlbGVjdC1vcHRpb25cIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZC5pbmNsdWRlcyhrKX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdG9nZ2xlKGspfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8c3Bhbj57a308L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLyogLS0tLS0tLS0tLSBDb25kaXRpb25hbCBSb3cgLS0tLS0tLS0tLSAqL1xuXG5mdW5jdGlvbiBDb25kaXRpb25hbFJvdyh7XG4gIGNvbmRpdGlvbmFsLFxuICBpbmRleCxcbiAgYWxsS2V5cyxcbiAgYWxsRmllbGRzLFxuICBvblVwZGF0ZSxcbiAgb25EZWxldGUsXG59OiB7XG4gIGNvbmRpdGlvbmFsOiBTY2hlbWFDb25kaXRpb25hbFxuICBpbmRleDogbnVtYmVyXG4gIGFsbEtleXM6IHN0cmluZ1tdXG4gIGFsbEZpZWxkczogeyBrZXk6IHN0cmluZzsgbGFiZWw6IHN0cmluZzsgdHlwZTogc3RyaW5nOyBvcHRpb25zPzogc3RyaW5nW10gfVtdXG4gIG9uVXBkYXRlOiAoYzogU2NoZW1hQ29uZGl0aW9uYWwpID0+IHZvaWRcbiAgb25EZWxldGU6ICgpID0+IHZvaWRcbn0pIHtcbiAgY29uc3QgW2hvdmVyZWQsIHNldEhvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHNvdXJjZUZpZWxkID0gYWxsRmllbGRzLmZpbmQoKGYpID0+IGYua2V5ID09PSBjb25kaXRpb25hbC5pZi5maWVsZClcblxuICBjb25zdCByZW5kZXJWYWx1ZUlucHV0ID0gKCkgPT4ge1xuICAgIGlmIChzb3VyY2VGaWVsZD8udHlwZSA9PT0gJ3NlbGVjdCcgJiYgc291cmNlRmllbGQub3B0aW9ucykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIGNsYXNzTmFtZT1cImNvbmQtdmFsdWUtaW5wdXRcIlxuICAgICAgICAgIHZhbHVlPXtTdHJpbmcoY29uZGl0aW9uYWwuaWYuZXF1YWxzKX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uVXBkYXRlKHsgLi4uY29uZGl0aW9uYWwsIGlmOiB7IC4uLmNvbmRpdGlvbmFsLmlmLCBlcXVhbHM6IGUudGFyZ2V0LnZhbHVlIH0gfSl9XG4gICAgICAgID5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IHZhbHVlLi4uPC9vcHRpb24+XG4gICAgICAgICAge3NvdXJjZUZpZWxkLm9wdGlvbnMubWFwKChvcHQpID0+IChcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtvcHR9IHZhbHVlPXtvcHR9PntvcHR9PC9vcHRpb24+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChzb3VyY2VGaWVsZD8udHlwZSA9PT0gJ3RvZ2dsZScpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uZC10b2dnbGUtZ3JvdXBcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Bjb25kLXRvZ2dsZS1idG4ke2NvbmRpdGlvbmFsLmlmLmVxdWFscyA9PT0gdHJ1ZSB8fCBjb25kaXRpb25hbC5pZi5lcXVhbHMgPT09ICd0cnVlJyA/ICcgYWN0aXZlJyA6ICcnfWB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblVwZGF0ZSh7IC4uLmNvbmRpdGlvbmFsLCBpZjogeyAuLi5jb25kaXRpb25hbC5pZiwgZXF1YWxzOiB0cnVlIH0gfSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgT25cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Bjb25kLXRvZ2dsZS1idG4ke2NvbmRpdGlvbmFsLmlmLmVxdWFscyA9PT0gZmFsc2UgfHwgY29uZGl0aW9uYWwuaWYuZXF1YWxzID09PSAnZmFsc2UnID8gJyBhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uVXBkYXRlKHsgLi4uY29uZGl0aW9uYWwsIGlmOiB7IC4uLmNvbmRpdGlvbmFsLmlmLCBlcXVhbHM6IGZhbHNlIH0gfSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgT2ZmXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8aW5wdXRcbiAgICAgICAgY2xhc3NOYW1lPVwiY29uZC12YWx1ZS1pbnB1dFwiXG4gICAgICAgIHZhbHVlPXtTdHJpbmcoY29uZGl0aW9uYWwuaWYuZXF1YWxzID8/ICcnKX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvblVwZGF0ZSh7IC4uLmNvbmRpdGlvbmFsLCBpZjogeyAuLi5jb25kaXRpb25hbC5pZiwgZXF1YWxzOiBlLnRhcmdldC52YWx1ZSB9IH0pfVxuICAgICAgICBwbGFjZWhvbGRlcj1cInZhbHVlXCJcbiAgICAgIC8+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJjb25kLXJ1bGVcIlxuICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRIb3ZlcmVkKHRydWUpfVxuICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcmVkKGZhbHNlKX1cbiAgICA+XG4gICAgICB7LyogV2hlbiByb3cgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbmQtcnVsZS13aGVuXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbmQtbGFiZWwgY29uZC1sYWJlbC13aGVuXCI+V0hFTjwvc3Bhbj5cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIGNsYXNzTmFtZT1cImNvbmQtZmllbGQtZHJvcGRvd25cIlxuICAgICAgICAgIHZhbHVlPXtjb25kaXRpb25hbC5pZi5maWVsZH1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uVXBkYXRlKHsgLi4uY29uZGl0aW9uYWwsIGlmOiB7IC4uLmNvbmRpdGlvbmFsLmlmLCBmaWVsZDogZS50YXJnZXQudmFsdWUgfSB9KX1cbiAgICAgICAgPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgZmllbGQuLi48L29wdGlvbj5cbiAgICAgICAgICB7YWxsS2V5cy5tYXAoKGspID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGYgPSBhbGxGaWVsZHMuZmluZCgoYWYpID0+IGFmLmtleSA9PT0gaylcbiAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIGtleT17a30gdmFsdWU9e2t9PntmPy5sYWJlbCB8fCBrfTwvb3B0aW9uPlxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29uZC1lcXVhbHMtbGFiZWxcIj5pczwvc3Bhbj5cbiAgICAgICAge3JlbmRlclZhbHVlSW5wdXQoKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogQXJyb3cgY29ubmVjdG9yICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25kLXJ1bGUtYXJyb3dcIj5cbiAgICAgICAgPEFycm93UmlnaHQgc2l6ZT17MTR9IHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tYWNjZW50KScgfX0gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogU2hvdyByb3cgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbmQtcnVsZS1zaG93XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbmQtbGFiZWwgY29uZC1sYWJlbC1zaG93XCI+U0hPVzwvc3Bhbj5cbiAgICAgICAgPEZpZWxkS2V5U2VsZWN0XG4gICAgICAgICAgc2VsZWN0ZWQ9e2NvbmRpdGlvbmFsLnNob3d9XG4gICAgICAgICAgYWxsS2V5cz17YWxsS2V5c31cbiAgICAgICAgICBvbkNoYW5nZT17KHNob3cpID0+IG9uVXBkYXRlKHsgLi4uY29uZGl0aW9uYWwsIHNob3cgfSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIERlbGV0ZSBvbiBob3ZlciAqL31cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPXtgY29uZC1ydWxlLWRlbGV0ZSR7aG92ZXJlZCA/ICcgdmlzaWJsZScgOiAnJ31gfVxuICAgICAgICBvbkNsaWNrPXtvbkRlbGV0ZX1cbiAgICAgICAgdGl0bGU9XCJSZW1vdmUgcnVsZVwiXG4gICAgICA+XG4gICAgICAgIDxYIHNpemU9ezE0fSAvPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLyogLS0tLS0tLS0tLSBNYWluIENvbXBvbmVudCAtLS0tLS0tLS0tICovXG5cbmV4cG9ydCBmdW5jdGlvbiBDb25kaXRpb25hbHNCdWlsZGVyKCkge1xuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlU3R1ZGlvKClcbiAgY29uc3QgY29uZGl0aW9uYWxzID0gc3RhdGUud29ya2luZy5zY2hlbWEuY29uZGl0aW9uYWxzIHx8IFtdXG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoY29uZGl0aW9uYWxzLmxlbmd0aCA+IDApXG5cbiAgY29uc3QgYWxsRmllbGRzID0gc3RhdGUud29ya2luZy5zY2hlbWEuc2VjdGlvbnMuZmxhdE1hcCgocykgPT4gcy5maWVsZHMpXG4gIGNvbnN0IGFsbEtleXMgPSBhbGxGaWVsZHMubWFwKChmKSA9PiBmLmtleSlcblxuICBjb25zdCBhZGRDb25kaXRpb25hbCA9ICgpID0+IHtcbiAgICBjb25zdCBjb25kOiBTY2hlbWFDb25kaXRpb25hbCA9IHtcbiAgICAgIGlmOiB7IGZpZWxkOiBhbGxLZXlzWzBdIHx8ICcnLCBlcXVhbHM6ICcnIH0sXG4gICAgICBzaG93OiBbXSxcbiAgICB9XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnQUREX0NPTkRJVElPTkFMJywgY29uZGl0aW9uYWw6IGNvbmQgfSlcbiAgICBzZXRFeHBhbmRlZCh0cnVlKVxuICB9XG5cbiAgaWYgKCFleHBhbmRlZCAmJiBjb25kaXRpb25hbHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uZGl0aW9uYWxzLWNvbGxhcHNlZFwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNvbmRpdGlvbmFscy10b2dnbGVcIiBvbkNsaWNrPXthZGRDb25kaXRpb25hbH0+XG4gICAgICAgICAgPEdpdEJyYW5jaCBzaXplPXsxM30gLz4gQWRkIENvbmRpdGlvbmFsIExvZ2ljXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbmRpdGlvbmFscy1zZWN0aW9uXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNvbmRpdGlvbmFscy1oZWFkZXJcIiBvbkNsaWNrPXsoKSA9PiBzZXRFeHBhbmRlZCghZXhwYW5kZWQpfT5cbiAgICAgICAgPEdpdEJyYW5jaCBzaXplPXsxNH0gc3R5bGU9e3sgY29sb3I6ICd2YXIoLS1hY2NlbnQpJyB9fSAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb25kaXRpb25hbHMtdGl0bGVcIj5Db25kaXRpb25hbCBMb2dpYzwvc3Bhbj5cbiAgICAgICAge2NvbmRpdGlvbmFscy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb25kaXRpb25hbHMtY291bnRcIj57Y29uZGl0aW9uYWxzLmxlbmd0aH08L3NwYW4+XG4gICAgICAgICl9XG4gICAgICAgIHtleHBhbmRlZCA/IDxDaGV2cm9uRG93biBzaXplPXsxNH0gLz4gOiA8Q2hldnJvblJpZ2h0IHNpemU9ezE0fSAvPn1cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICB7ZXhwYW5kZWQgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbmRpdGlvbmFscy1ib2R5XCI+XG4gICAgICAgICAge2NvbmRpdGlvbmFscy5sZW5ndGggPT09IDAgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25kaXRpb25hbHMtZW1wdHlcIj5cbiAgICAgICAgICAgICAgPHA+Tm8gcnVsZXMgeWV0LiBBZGQgb25lIHRvIHNob3cvaGlkZSBmaWVsZHMgYmFzZWQgb24gY29uZGl0aW9ucy48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAge2NvbmRpdGlvbmFscy5tYXAoKGNvbmQsIGkpID0+IChcbiAgICAgICAgICAgIDxDb25kaXRpb25hbFJvd1xuICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgIGNvbmRpdGlvbmFsPXtjb25kfVxuICAgICAgICAgICAgICBpbmRleD17aX1cbiAgICAgICAgICAgICAgYWxsS2V5cz17YWxsS2V5c31cbiAgICAgICAgICAgICAgYWxsRmllbGRzPXthbGxGaWVsZHN9XG4gICAgICAgICAgICAgIG9uVXBkYXRlPXsoYykgPT4gZGlzcGF0Y2goeyB0eXBlOiAnVVBEQVRFX0NPTkRJVElPTkFMJywgaWR4OiBpLCBjb25kaXRpb25hbDogYyB9KX1cbiAgICAgICAgICAgICAgb25EZWxldGU9eygpID0+IGRpc3BhdGNoKHsgdHlwZTogJ0RFTEVURV9DT05ESVRJT05BTCcsIGlkeDogaSB9KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNvbmQtYWRkLWJ0blwiIG9uQ2xpY2s9e2FkZENvbmRpdGlvbmFsfT5cbiAgICAgICAgICAgIDxQbHVzIHNpemU9ezEzfSAvPiBBZGQgUnVsZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBYLCBTZXR0aW5ncywgUGFpbnRicnVzaCwgU2xpZGVyc0hvcml6b250YWwsIFdyZW5jaCwgTGF5ZXJzLCBDaGV2cm9uUmlnaHQsIENoZXZyb25Eb3duLCBQbHVzLCBUcmFzaDIgfSBmcm9tICdsdWNpZGUtcmVhY3QnXG5pbXBvcnQgeyBGSUVMRF9UWVBFUyB9IGZyb20gJy4uL2ZpZWxkLXJlZ2lzdHJ5J1xuaW1wb3J0IHsgUXVpekJ1aWxkZXIgfSBmcm9tICcuL1F1aXpCdWlsZGVyJ1xuaW1wb3J0IHsgVGFnSW5wdXQgfSBmcm9tICcuL2NvbW1vbi9UYWdJbnB1dCdcbmltcG9ydCB7IGRlZXBDbG9uZSB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHR5cGUgeyBTY2hlbWFGaWVsZCwgRmllbGRUeXBlLCBRdWl6UXVlc3Rpb24sIFF1aXpDb25maWcgfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCAqIGFzIEljb25zIGZyb20gJ2x1Y2lkZS1yZWFjdCdcblxuZnVuY3Rpb24gRmllbGRJY29uKHsgbmFtZSwgc2l6ZSA9IDE0IH06IHsgbmFtZTogc3RyaW5nOyBzaXplPzogbnVtYmVyIH0pIHtcbiAgY29uc3QgaWNvbk5hbWUgPSBuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSgxKS5yZXBsYWNlKC8tKFthLXpdKS9nLCAoXywgYzogc3RyaW5nKSA9PiBjLnRvVXBwZXJDYXNlKCkpXG4gIGNvbnN0IEljb24gPSAoSWNvbnMgYXMgYW55KVtpY29uTmFtZV1cbiAgcmV0dXJuIEljb24gPyA8SWNvbiBzaXplPXtzaXplfSAvPiA6IG51bGxcbn1cblxuZnVuY3Rpb24gU2VjdGlvbih7XG4gIHRpdGxlLCBpY29uLCBkZWZhdWx0T3BlbiA9IHRydWUsIGNoaWxkcmVuLFxufToge1xuICB0aXRsZTogc3RyaW5nOyBpY29uOiBSZWFjdC5SZWFjdE5vZGU7IGRlZmF1bHRPcGVuPzogYm9vbGVhbjsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxufSkge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShkZWZhdWx0T3BlbilcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLW1vZGFsLXNlY3Rpb25cIj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmllbGQtbW9kYWwtc2VjdGlvbi1oZWFkZXJcIiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKCFvcGVuKX0+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpZWxkLW1vZGFsLXNlY3Rpb24taWNvblwiPntpY29ufTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmllbGQtbW9kYWwtc2VjdGlvbi10aXRsZVwiPnt0aXRsZX08L3NwYW4+XG4gICAgICAgIHtvcGVuID8gPENoZXZyb25Eb3duIHNpemU9ezE0fSAvPiA6IDxDaGV2cm9uUmlnaHQgc2l6ZT17MTR9IC8+fVxuICAgICAgPC9idXR0b24+XG4gICAgICB7b3BlbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLW1vZGFsLXNlY3Rpb24tYm9keVwiPntjaGlsZHJlbn08L2Rpdj59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgU1VCX0ZJRUxEX1RZUEVTOiB7IHZhbHVlOiBGaWVsZFR5cGU7IGxhYmVsOiBzdHJpbmcgfVtdID0gW1xuICB7IHZhbHVlOiAndGV4dCcsIGxhYmVsOiAnVGV4dCcgfSxcbiAgeyB2YWx1ZTogJ3RleHRhcmVhJywgbGFiZWw6ICdUZXh0IEFyZWEnIH0sXG4gIHsgdmFsdWU6ICdudW1iZXInLCBsYWJlbDogJ051bWJlcicgfSxcbiAgeyB2YWx1ZTogJ2RhdGUnLCBsYWJlbDogJ0RhdGUnIH0sXG4gIHsgdmFsdWU6ICdjb2xvcicsIGxhYmVsOiAnQ29sb3InIH0sXG4gIHsgdmFsdWU6ICd0b2dnbGUnLCBsYWJlbDogJ1RvZ2dsZScgfSxcbiAgeyB2YWx1ZTogJ3NlbGVjdCcsIGxhYmVsOiAnU2VsZWN0JyB9LFxuICB7IHZhbHVlOiAnaW1hZ2UnLCBsYWJlbDogJ0ltYWdlJyB9LFxuICB7IHZhbHVlOiAnaW1hZ2VfYXJyYXknLCBsYWJlbDogJ1Bob3RvIEdhbGxlcnknIH0sXG4gIHsgdmFsdWU6ICd2aWRlbycsIGxhYmVsOiAnVmlkZW8nIH0sXG4gIHsgdmFsdWU6ICdhdWRpbycsIGxhYmVsOiAnQXVkaW8nIH0sXG5dXG5cbmZ1bmN0aW9uIFN1YkZpZWxkc0VkaXRvcih7IGZpZWxkcywgb25DaGFuZ2UgfTogeyBmaWVsZHM6IFNjaGVtYUZpZWxkW107IG9uQ2hhbmdlOiAoZjogU2NoZW1hRmllbGRbXSkgPT4gdm9pZCB9KSB7XG4gIGNvbnN0IGFkZEZpZWxkID0gKCkgPT4ge1xuICAgIG9uQ2hhbmdlKFsuLi5maWVsZHMsIHsga2V5OiBgZmllbGRfJHtmaWVsZHMubGVuZ3RoICsgMX1gLCBsYWJlbDogYEZpZWxkICR7ZmllbGRzLmxlbmd0aCArIDF9YCwgdHlwZTogJ3RleHQnIH1dKVxuICB9XG5cbiAgY29uc3QgdXBkYXRlRmllbGQgPSAoaWR4OiBudW1iZXIsIHBhdGNoOiBQYXJ0aWFsPFNjaGVtYUZpZWxkPikgPT4ge1xuICAgIGNvbnN0IG5leHQgPSBbLi4uZmllbGRzXVxuICAgIG5leHRbaWR4XSA9IHsgLi4ubmV4dFtpZHhdLCAuLi5wYXRjaCB9XG4gICAgb25DaGFuZ2UobmV4dClcbiAgfVxuXG4gIGNvbnN0IHJlbW92ZUZpZWxkID0gKGlkeDogbnVtYmVyKSA9PiB7XG4gICAgb25DaGFuZ2UoZmllbGRzLmZpbHRlcigoXywgaSkgPT4gaSAhPT0gaWR4KSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzdWJmaWVsZHMtZWRpdG9yXCI+XG4gICAgICB7ZmllbGRzLm1hcCgoc2YsIGkpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cInN1YmZpZWxkLXJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViZmllbGQtcm93LWlucHV0c1wiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIlxuICAgICAgICAgICAgICB2YWx1ZT17c2YubGFiZWx9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlRmllbGQoaSwgeyBsYWJlbDogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFiZWxcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBmbGV4OiAxIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXQgZm9udC1tb25vXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3NmLmtleX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVGaWVsZChpLCB7IGtleTogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwia2V5XCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDEwMCB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtzZi50eXBlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZUZpZWxkKGksIHsgdHlwZTogZS50YXJnZXQudmFsdWUgYXMgRmllbGRUeXBlIH0pfVxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMTEwIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtTVUJfRklFTERfVFlQRVMubWFwKCh0KSA9PiAoXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3QudmFsdWV9IHZhbHVlPXt0LnZhbHVlfT57dC5sYWJlbH08L29wdGlvbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaWNvbi1idG5cIiBvbkNsaWNrPXsoKSA9PiByZW1vdmVGaWVsZChpKX0gdGl0bGU9XCJSZW1vdmUgc3ViLWZpZWxkXCI+XG4gICAgICAgICAgICAgIDxUcmFzaDIgc2l6ZT17MTJ9IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7c2YudHlwZSA9PT0gJ3NlbGVjdCcgJiYgKFxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIlxuICAgICAgICAgICAgICB2YWx1ZT17KHNmLm9wdGlvbnMgfHwgW10pLmpvaW4oJywgJyl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlRmllbGQoaSwgeyBvcHRpb25zOiBlLnRhcmdldC52YWx1ZS5zcGxpdCgnLCcpLm1hcChzID0+IHMudHJpbSgpKS5maWx0ZXIoQm9vbGVhbikgfSl9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiT3B0aW9ucyAoY29tbWEtc2VwYXJhdGVkKVwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogNCB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdWJmaWVsZC1hZGRcIiBvbkNsaWNrPXthZGRGaWVsZH0+XG4gICAgICAgIDxQbHVzIHNpemU9ezEzfSAvPiBBZGQgU3ViLWZpZWxkXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG50eXBlIFByb3BzID0ge1xuICBmaWVsZDogU2NoZW1hRmllbGRcbiAgZGVtb1ZhbHVlOiB1bmtub3duXG4gIG9uU2F2ZTogKGZpZWxkOiBTY2hlbWFGaWVsZCwgZGVtb1ZhbHVlOiB1bmtub3duKSA9PiB2b2lkXG4gIG9uQ2xvc2U6ICgpID0+IHZvaWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEZpZWxkRWRpdE1vZGFsKHsgZmllbGQ6IGluaXRpYWxGaWVsZCwgZGVtb1ZhbHVlOiBpbml0aWFsRGVtbywgb25TYXZlLCBvbkNsb3NlIH06IFByb3BzKSB7XG4gIGNvbnN0IFtmaWVsZCwgc2V0RmllbGRdID0gdXNlU3RhdGU8U2NoZW1hRmllbGQ+KCgpID0+IGRlZXBDbG9uZShpbml0aWFsRmllbGQpKVxuICBjb25zdCBbZGVtbywgc2V0RGVtb10gPSB1c2VTdGF0ZTx1bmtub3duPigoKSA9PiBkZWVwQ2xvbmUoaW5pdGlhbERlbW8pKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlciA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSBvbkNsb3NlKClcbiAgICB9XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZXIpXG4gICAgcmV0dXJuICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVyKVxuICB9LCBbb25DbG9zZV0pXG5cbiAgY29uc3QgZnQgPSBGSUVMRF9UWVBFU1tmaWVsZC50eXBlXVxuICBjb25zdCB1cGRhdGUgPSAocGF0Y2g6IFBhcnRpYWw8U2NoZW1hRmllbGQ+KSA9PiBzZXRGaWVsZCgoZikgPT4gKHsgLi4uZiwgLi4ucGF0Y2ggfSkpXG5cbiAgY29uc3QgaXNHcm91cCA9IGZpZWxkLnR5cGUgPT09ICdncm91cCcgfHwgZmllbGQudHlwZSA9PT0gJ2dyb3VwX2FycmF5J1xuICBjb25zdCBoYXNBcHBlYXJhbmNlID0gZmllbGQudHlwZSA9PT0gJ3RleHQnIHx8IGZpZWxkLnR5cGUgPT09ICd0ZXh0YXJlYScgfHwgZmllbGQudHlwZSA9PT0gJ251bWJlcicgfHwgZmllbGQudHlwZSA9PT0gJ2RhdGUnXG4gIGNvbnN0IGhhc0NvbnN0cmFpbnRzID1cbiAgICBmaWVsZC50eXBlID09PSAndGV4dCcgfHwgZmllbGQudHlwZSA9PT0gJ3RleHRhcmVhJyB8fCBmaWVsZC50eXBlID09PSAnbnVtYmVyJyB8fFxuICAgIGZpZWxkLnR5cGUgPT09ICdpbWFnZScgfHwgZmllbGQudHlwZSA9PT0gJ2ltYWdlX2FycmF5JyB8fCBmaWVsZC50eXBlID09PSAndmlkZW8nIHx8IGZpZWxkLnR5cGUgPT09ICdhdWRpbydcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtbW9kYWwtb3ZlcmxheVwiIG9uQ2xpY2s9eyhlKSA9PiB7IGlmIChlLnRhcmdldCA9PT0gZS5jdXJyZW50VGFyZ2V0KSBvbkNsb3NlKCkgfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLW1vZGFsXCI+XG4gICAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtbW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1tb2RhbC1oZWFkZXItbGVmdFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmllbGQtbW9kYWwtdHlwZS1pY29uXCI+XG4gICAgICAgICAgICAgIDxGaWVsZEljb24gbmFtZT17ZnQ/Lmljb24gfHwgJ2hlbHAtY2lyY2xlJ30gc2l6ZT17MTZ9IC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLW1vZGFsLWZpZWxkLW5hbWVcIj57ZmllbGQubGFiZWwgfHwgJ1VudGl0bGVkJ308L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1tb2RhbC1maWVsZC10eXBlXCI+e2Z0Py5sYWJlbCB8fCBmaWVsZC50eXBlfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmaWVsZC1tb2RhbC1jbG9zZVwiIG9uQ2xpY2s9e29uQ2xvc2V9PlxuICAgICAgICAgICAgPFggc2l6ZT17MTZ9IC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBCb2R5ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLW1vZGFsLWJvZHlcIj5cbiAgICAgICAgICA8U2VjdGlvbiB0aXRsZT1cIkdlbmVyYWxcIiBpY29uPXs8U2V0dGluZ3Mgc2l6ZT17MTR9IC8+fSBkZWZhdWx0T3Blbj17dHJ1ZX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5MYWJlbDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCIgdmFsdWU9e2ZpZWxkLmxhYmVsfSBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZSh7IGxhYmVsOiBlLnRhcmdldC52YWx1ZSB9KX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+S2V5PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0taW5wdXQgZm9udC1tb25vXCIgdmFsdWU9e2ZpZWxkLmtleX0gb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGUoeyBrZXk6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7ZmllbGQudHlwZSAhPT0gJ2dyb3VwJyAmJiBmaWVsZC50eXBlICE9PSAnZ3JvdXBfYXJyYXknICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwLXJvd1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+UmVxdWlyZWQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0b2dnbGUtc3dpdGNoXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17ZmllbGQucmVxdWlyZWQgfHwgZmFsc2V9IG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlKHsgcmVxdWlyZWQ6IGUudGFyZ2V0LmNoZWNrZWQgfSl9IC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b2dnbGUtc3dpdGNoLXNsaWRlclwiIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvU2VjdGlvbj5cblxuICAgICAgICAgIHtpc0dyb3VwICYmIChcbiAgICAgICAgICAgIDxTZWN0aW9uIHRpdGxlPVwiU3ViLWZpZWxkc1wiIGljb249ezxMYXllcnMgc2l6ZT17MTR9IC8+fSBkZWZhdWx0T3Blbj17dHJ1ZX0+XG4gICAgICAgICAgICAgIDxTdWJGaWVsZHNFZGl0b3JcbiAgICAgICAgICAgICAgICBmaWVsZHM9e2ZpZWxkLmZpZWxkcyB8fCBbXX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGZpZWxkcykgPT4gdXBkYXRlKHsgZmllbGRzIH0pfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7aGFzQXBwZWFyYW5jZSAmJiAoXG4gICAgICAgICAgICA8U2VjdGlvbiB0aXRsZT1cIkFwcGVhcmFuY2VcIiBpY29uPXs8UGFpbnRicnVzaCBzaXplPXsxNH0gLz59IGRlZmF1bHRPcGVuPXt0cnVlfT5cbiAgICAgICAgICAgICAgeyhmaWVsZC50eXBlID09PSAndGV4dCcgfHwgZmllbGQudHlwZSA9PT0gJ3RleHRhcmVhJykgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5QbGFjZWhvbGRlcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiIHZhbHVlPXtmaWVsZC5wbGFjZWhvbGRlciB8fCAnJ30gb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGUoeyBwbGFjZWhvbGRlcjogZS50YXJnZXQudmFsdWUgfHwgdW5kZWZpbmVkIH0pfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPkhpbnQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCIgdmFsdWU9e2ZpZWxkLmhpbnQgfHwgJyd9IG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlKHsgaGludDogZS50YXJnZXQudmFsdWUgfHwgdW5kZWZpbmVkIH0pfSBwbGFjZWhvbGRlcj1cIkhlbHAgdGV4dCBiZWxvdyB0aGUgZmllbGRcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAge2hhc0NvbnN0cmFpbnRzICYmIChcbiAgICAgICAgICAgIDxTZWN0aW9uIHRpdGxlPVwiQ29uc3RyYWludHNcIiBpY29uPXs8U2xpZGVyc0hvcml6b250YWwgc2l6ZT17MTR9IC8+fSBkZWZhdWx0T3Blbj17ZmFsc2V9PlxuICAgICAgICAgICAgICB7KGZpZWxkLnR5cGUgPT09ICd0ZXh0JyB8fCBmaWVsZC50eXBlID09PSAndGV4dGFyZWEnKSAmJiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPk1pbiBsZW5ndGg8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiIHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17ZmllbGQuY29uc3RyYWludHM/Lm1pbkxlbmd0aCA/PyAnJ30gb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGUoeyBjb25zdHJhaW50czogeyAuLi5maWVsZC5jb25zdHJhaW50cywgbWluTGVuZ3RoOiBlLnRhcmdldC52YWx1ZSA/IE51bWJlcihlLnRhcmdldC52YWx1ZSkgOiB1bmRlZmluZWQgfSB9KX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+TWF4IGxlbmd0aDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCIgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtmaWVsZC5jb25zdHJhaW50cz8ubWF4TGVuZ3RoID8/ICcnfSBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZSh7IGNvbnN0cmFpbnRzOiB7IC4uLmZpZWxkLmNvbnN0cmFpbnRzLCBtYXhMZW5ndGg6IGUudGFyZ2V0LnZhbHVlID8gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSA6IHVuZGVmaW5lZCB9IH0pfSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB7ZmllbGQudHlwZSA9PT0gJ3RleHRhcmVhJyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+TWF4IHdvcmRzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiIHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17ZmllbGQuY29uc3RyYWludHM/Lm1heFdvcmRzID8/ICcnfSBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZSh7IGNvbnN0cmFpbnRzOiB7IC4uLmZpZWxkLmNvbnN0cmFpbnRzLCBtYXhXb3JkczogZS50YXJnZXQudmFsdWUgPyBOdW1iZXIoZS50YXJnZXQudmFsdWUpIDogdW5kZWZpbmVkIH0gfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAge2ZpZWxkLnR5cGUgPT09ICdudW1iZXInICYmIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+TWluPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIiB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e2ZpZWxkLmNvbnN0cmFpbnRzPy5taW4gPz8gJyd9IG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlKHsgY29uc3RyYWludHM6IHsgLi4uZmllbGQuY29uc3RyYWludHMsIG1pbjogZS50YXJnZXQudmFsdWUgPyBOdW1iZXIoZS50YXJnZXQudmFsdWUpIDogdW5kZWZpbmVkIH0gfSl9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPk1heDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCIgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtmaWVsZC5jb25zdHJhaW50cz8ubWF4ID8/ICcnfSBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZSh7IGNvbnN0cmFpbnRzOiB7IC4uLmZpZWxkLmNvbnN0cmFpbnRzLCBtYXg6IGUudGFyZ2V0LnZhbHVlID8gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSA6IHVuZGVmaW5lZCB9IH0pfSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5Vbml0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIiB2YWx1ZT17ZmllbGQuY29uc3RyYWludHM/LnVuaXQgfHwgJyd9IG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlKHsgY29uc3RyYWludHM6IHsgLi4uZmllbGQuY29uc3RyYWludHMsIHVuaXQ6IGUudGFyZ2V0LnZhbHVlIHx8IHVuZGVmaW5lZCB9IH0pfSBwbGFjZWhvbGRlcj1cImUuZy4geWVhcnMsIGtnXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7KGZpZWxkLnR5cGUgPT09ICdpbWFnZScgfHwgZmllbGQudHlwZSA9PT0gJ2ltYWdlX2FycmF5JykgJiYgKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5Bc3BlY3QgUmF0aW88L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiIHZhbHVlPXtmaWVsZC5hc3BlY3RSYXRpbyB8fCAnJ30gb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGUoeyBhc3BlY3RSYXRpbzogZS50YXJnZXQudmFsdWUgfHwgdW5kZWZpbmVkIH0pfSBwbGFjZWhvbGRlcj1cImUuZy4gMzo0LCAxOjFcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5NYXggc2l6ZSAoTUIpPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIiB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e2ZpZWxkLmNvbnN0cmFpbnRzPy5tYXhTaXplTUIgPz8gJyd9IG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlKHsgY29uc3RyYWludHM6IHsgLi4uZmllbGQuY29uc3RyYWludHMsIG1heFNpemVNQjogZS50YXJnZXQudmFsdWUgPyBOdW1iZXIoZS50YXJnZXQudmFsdWUpIDogdW5kZWZpbmVkIH0gfSl9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIHtmaWVsZC50eXBlID09PSAnaW1hZ2VfYXJyYXknICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5NYXggaW1hZ2VzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiIHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17ZmllbGQubWF4IHx8ICcnfSBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZSh7IG1heDogZS50YXJnZXQudmFsdWUgPyBOdW1iZXIoZS50YXJnZXQudmFsdWUpIDogdW5kZWZpbmVkIH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHtmaWVsZC50eXBlID09PSAndmlkZW8nICYmIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+TWF4IHNpemUgKE1CKTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCIgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtmaWVsZC5jb25zdHJhaW50cz8ubWF4U2l6ZU1CID8/ICcnfSBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZSh7IGNvbnN0cmFpbnRzOiB7IC4uLmZpZWxkLmNvbnN0cmFpbnRzLCBtYXhTaXplTUI6IGUudGFyZ2V0LnZhbHVlID8gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSA6IHVuZGVmaW5lZCB9IH0pfSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5NYXggZHVyYXRpb24gKHNlYyk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiIHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17ZmllbGQuY29uc3RyYWludHM/Lm1heER1cmF0aW9uU2VjID8/ICcnfSBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZSh7IGNvbnN0cmFpbnRzOiB7IC4uLmZpZWxkLmNvbnN0cmFpbnRzLCBtYXhEdXJhdGlvblNlYzogZS50YXJnZXQudmFsdWUgPyBOdW1iZXIoZS50YXJnZXQudmFsdWUpIDogdW5kZWZpbmVkIH0gfSl9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAge2ZpZWxkLnR5cGUgPT09ICdhdWRpbycgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5NYXggc2l6ZSAoTUIpPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCIgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtmaWVsZC5jb25zdHJhaW50cz8ubWF4U2l6ZU1CID8/ICcnfSBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZSh7IGNvbnN0cmFpbnRzOiB7IC4uLmZpZWxkLmNvbnN0cmFpbnRzLCBtYXhTaXplTUI6IGUudGFyZ2V0LnZhbHVlID8gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSA6IHVuZGVmaW5lZCB9IH0pfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICA8U2VjdGlvbiB0aXRsZT1cIkFkdmFuY2VkXCIgaWNvbj17PFdyZW5jaCBzaXplPXsxNH0gLz59IGRlZmF1bHRPcGVuPXtmaWVsZC50eXBlID09PSAnc2VsZWN0JyB8fCBmaWVsZC50eXBlID09PSAnY29sb3InIHx8IGZpZWxkLnR5cGUgPT09ICdxdWl6J30+XG4gICAgICAgICAgICB7ZmllbGQudHlwZSA9PT0gJ3NlbGVjdCcgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPk9wdGlvbnMgKG9uZSBwZXIgbGluZSk8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCIgcm93cz17NH0gdmFsdWU9eyhmaWVsZC5vcHRpb25zIHx8IFtdKS5qb2luKCdcXG4nKX0gb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGUoeyBvcHRpb25zOiBlLnRhcmdldC52YWx1ZS5zcGxpdCgnXFxuJykuZmlsdGVyKEJvb2xlYW4pIH0pfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7ZmllbGQudHlwZSA9PT0gJ2NvbG9yJyAmJiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPkRlZmF1bHQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xvci1pbnB1dC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjb2xvclwiIHZhbHVlPXsoZmllbGQuZGVmYXVsdCBhcyBzdHJpbmcpIHx8ICcjMDAwMDAwJ30gb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGUoeyBkZWZhdWx0OiBlLnRhcmdldC52YWx1ZSB9KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIiB2YWx1ZT17KGZpZWxkLmRlZmF1bHQgYXMgc3RyaW5nKSB8fCAnJ30gb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGUoeyBkZWZhdWx0OiBlLnRhcmdldC52YWx1ZSB9KX0gc3R5bGU9e3sgZmxleDogMSB9fSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlByZXNldHMgKGhleCBjb2xvcnMpPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxUYWdJbnB1dCB2YWx1ZXM9e2ZpZWxkLnByZXNldHMgfHwgW119IG9uQ2hhbmdlPXsocHJlc2V0cykgPT4gdXBkYXRlKHsgcHJlc2V0cyB9KX0gcGxhY2Vob2xkZXI9XCIjZmY2ZWI0XCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge2ZpZWxkLnR5cGUgPT09ICdkYXRlJyAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+RGVmYXVsdCB2YWx1ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIiB0eXBlPVwiZGF0ZVwiIHZhbHVlPXsoZmllbGQuZGVmYXVsdCBhcyBzdHJpbmcpIHx8ICcnfSBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZSh7IGRlZmF1bHQ6IGUudGFyZ2V0LnZhbHVlIHx8IHVuZGVmaW5lZCB9KX0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge2ZpZWxkLnR5cGUgPT09ICdxdWl6JyAmJiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlF1aXogQ2FwYWJpbGl0aWVzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVpei1jb25maWctZ3JpZFwiPlxuICAgICAgICAgICAgICAgICAgICB7KFtcbiAgICAgICAgICAgICAgICAgICAgICBbJ2FsbG93SGludHMnLCAnSGludHMnXSBhcyBjb25zdCxcbiAgICAgICAgICAgICAgICAgICAgICBbJ2FsbG93RXhwbGFuYXRpb25zJywgJ0V4cGxhbmF0aW9ucyddIGFzIGNvbnN0LFxuICAgICAgICAgICAgICAgICAgICAgIFsnYWxsb3dJbWFnZXMnLCAnSW1hZ2VzJ10gYXMgY29uc3QsXG4gICAgICAgICAgICAgICAgICAgICAgWydhbGxvd011bHRpcGxlQ29ycmVjdCcsICdNdWx0aXBsZSBDb3JyZWN0J10gYXMgY29uc3QsXG4gICAgICAgICAgICAgICAgICAgICAgWydhbGxvd1BvaW50cycsICdQb2ludHMnXSBhcyBjb25zdCxcbiAgICAgICAgICAgICAgICAgICAgXSkubWFwKChba2V5LCBsYWJlbF0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwga2V5PXtrZXl9IGNsYXNzTmFtZT1cInF1aXotY29uZmlnLXRvZ2dsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyEhKGZpZWxkLmNvbmZpZyBhcyBRdWl6Q29uZmlnKT8uW2tleV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXYgPSAoZmllbGQuY29uZmlnIHx8IHt9KSBhcyBRdWl6Q29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlKHsgY29uZmlnOiB7IC4uLnByZXYsIFtrZXldOiBlLnRhcmdldC5jaGVja2VkIHx8IHVuZGVmaW5lZCB9IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2xhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5NYXggUXVlc3Rpb25zPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgIG1pbj17MX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyhmaWVsZC5jb25maWcgYXMgUXVpekNvbmZpZyk/Lm1heFF1ZXN0aW9ucyA/PyAnJ31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldiA9IChmaWVsZC5jb25maWcgfHwge30pIGFzIFF1aXpDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICB1cGRhdGUoeyBjb25maWc6IHsgLi4ucHJldiwgbWF4UXVlc3Rpb25zOiBlLnRhcmdldC52YWx1ZSA/IE51bWJlcihlLnRhcmdldC52YWx1ZSkgOiB1bmRlZmluZWQgfSB9KVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vIGxpbWl0XCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMjBweCcgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPFF1aXpCdWlsZGVyXG4gICAgICAgICAgICAgICAgICBxdWVzdGlvbnM9eyhkZW1vIGFzIFF1aXpRdWVzdGlvbltdKSB8fCBbXX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsocXVlc3Rpb25zKSA9PiBzZXREZW1vKHF1ZXN0aW9ucyl9XG4gICAgICAgICAgICAgICAgICBjb25maWc9eyhmaWVsZC5jb25maWcgYXMgUXVpekNvbmZpZykgfHwge319XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgeyhmaWVsZC50eXBlID09PSAndGV4dCcgfHwgZmllbGQudHlwZSA9PT0gJ3RleHRhcmVhJyB8fCBmaWVsZC50eXBlID09PSAnbnVtYmVyJykgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPkRlZmF1bHQgdmFsdWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZmllbGQuZGVmYXVsdCAhPSBudWxsID8gU3RyaW5nKGZpZWxkLmRlZmF1bHQpIDogJyd9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsID0gZmllbGQudHlwZSA9PT0gJ251bWJlcicgJiYgZS50YXJnZXQudmFsdWUgPyBOdW1iZXIoZS50YXJnZXQudmFsdWUpIDogKGUudGFyZ2V0LnZhbHVlIHx8IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlKHsgZGVmYXVsdDogdmFsIH0pXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgdHlwZT17ZmllbGQudHlwZSA9PT0gJ251bWJlcicgPyAnbnVtYmVyJyA6ICd0ZXh0J31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7ZmllbGQudHlwZSA9PT0gJ3RvZ2dsZScgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAtcm93XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5EZWZhdWx0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidG9nZ2xlLXN3aXRjaFwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9eyEhZmllbGQuZGVmYXVsdH0gb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGUoeyBkZWZhdWx0OiBlLnRhcmdldC5jaGVja2VkIH0pfSAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9nZ2xlLXN3aXRjaC1zbGlkZXJcIiAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBGb290ZXIgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtbW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tc2Vjb25kYXJ5XCIgb25DbGljaz17b25DbG9zZX0+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tcHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IHsgb25TYXZlKGZpZWxkLCBkZW1vKTsgb25DbG9zZSgpIH19PlNhdmUgQ2hhbmdlczwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFBsdXMsIFRyYXNoMiwgQ2hlY2ssIENoZXZyb25Eb3duLCBDaGV2cm9uUmlnaHQsIEltYWdlIGFzIEltYWdlSWNvbiwgTGlnaHRidWxiLCBNZXNzYWdlU3F1YXJlIH0gZnJvbSAnbHVjaWRlLXJlYWN0J1xuaW1wb3J0IHR5cGUgeyBRdWl6UXVlc3Rpb24sIFF1aXpDb25maWcgfSBmcm9tICcuLi90eXBlcydcblxudHlwZSBQcm9wcyA9IHtcbiAgcXVlc3Rpb25zOiBRdWl6UXVlc3Rpb25bXVxuICBvbkNoYW5nZTogKHF1ZXN0aW9uczogUXVpelF1ZXN0aW9uW10pID0+IHZvaWRcbiAgY29uZmlnPzogUXVpekNvbmZpZ1xufVxuXG5mdW5jdGlvbiBtYWtlSWQoKSB7XG4gIHJldHVybiAncScgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyLCA4KVxufVxuXG5mdW5jdGlvbiBRdWVzdGlvbkNhcmQoe1xuICBxdWVzdGlvbiwgaW5kZXgsIGNvbmZpZywgb25VcGRhdGUsIG9uRGVsZXRlLFxufToge1xuICBxdWVzdGlvbjogUXVpelF1ZXN0aW9uOyBpbmRleDogbnVtYmVyOyBjb25maWc6IFF1aXpDb25maWdcbiAgb25VcGRhdGU6IChxOiBRdWl6UXVlc3Rpb24pID0+IHZvaWQ7IG9uRGVsZXRlOiAoKSA9PiB2b2lkXG59KSB7XG4gIGNvbnN0IHVwZGF0ZU9wdGlvbiA9IChvcHRJZHg6IG51bWJlciwgdmFsdWU6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBbLi4ucXVlc3Rpb24ub3B0aW9uc11cbiAgICBvcHRpb25zW29wdElkeF0gPSB2YWx1ZVxuICAgIG9uVXBkYXRlKHsgLi4ucXVlc3Rpb24sIG9wdGlvbnMgfSlcbiAgfVxuXG4gIGNvbnN0IGFkZE9wdGlvbiA9ICgpID0+IHtcbiAgICBvblVwZGF0ZSh7IC4uLnF1ZXN0aW9uLCBvcHRpb25zOiBbLi4ucXVlc3Rpb24ub3B0aW9ucywgYE9wdGlvbiAke3F1ZXN0aW9uLm9wdGlvbnMubGVuZ3RoICsgMX1gXSB9KVxuICB9XG5cbiAgY29uc3QgcmVtb3ZlT3B0aW9uID0gKG9wdElkeDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHF1ZXN0aW9uLm9wdGlvbnMuZmlsdGVyKChfLCBpKSA9PiBpICE9PSBvcHRJZHgpXG4gICAgY29uc3QgY29ycmVjdEluZGV4ID0gcXVlc3Rpb24uY29ycmVjdEluZGV4ID49IG9wdGlvbnMubGVuZ3RoXG4gICAgICA/IE1hdGgubWF4KDAsIG9wdGlvbnMubGVuZ3RoIC0gMSlcbiAgICAgIDogcXVlc3Rpb24uY29ycmVjdEluZGV4ID4gb3B0SWR4XG4gICAgICAgID8gcXVlc3Rpb24uY29ycmVjdEluZGV4IC0gMVxuICAgICAgICA6IHF1ZXN0aW9uLmNvcnJlY3RJbmRleFxuICAgIGNvbnN0IGNvcnJlY3RJbmRpY2VzID0gKHF1ZXN0aW9uLmNvcnJlY3RJbmRpY2VzIHx8IFtdKVxuICAgICAgLm1hcChjaSA9PiBjaSA+IG9wdElkeCA/IGNpIC0gMSA6IGNpKVxuICAgICAgLmZpbHRlcihjaSA9PiBjaSAhPT0gb3B0SWR4ICYmIGNpIDwgb3B0aW9ucy5sZW5ndGgpXG4gICAgb25VcGRhdGUoeyAuLi5xdWVzdGlvbiwgb3B0aW9ucywgY29ycmVjdEluZGV4LCBjb3JyZWN0SW5kaWNlcyB9KVxuICB9XG5cbiAgY29uc3QgdG9nZ2xlTXVsdGlDb3JyZWN0ID0gKG9wdElkeDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgY3VycmVudCA9IHF1ZXN0aW9uLmNvcnJlY3RJbmRpY2VzIHx8IFtdXG4gICAgY29uc3QgbmV4dCA9IGN1cnJlbnQuaW5jbHVkZXMob3B0SWR4KVxuICAgICAgPyBjdXJyZW50LmZpbHRlcihpID0+IGkgIT09IG9wdElkeClcbiAgICAgIDogWy4uLmN1cnJlbnQsIG9wdElkeF0uc29ydCgpXG4gICAgb25VcGRhdGUoeyAuLi5xdWVzdGlvbiwgY29ycmVjdEluZGljZXM6IG5leHQsIGNvcnJlY3RJbmRleDogbmV4dFswXSA/PyAwIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicXVpei1jYXJkXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1aXotY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicXVpei1jYXJkLW51bVwiPntpbmRleCArIDF9PC9zcGFuPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0IHF1aXotcXVlc3Rpb24taW5wdXRcIlxuICAgICAgICAgIHZhbHVlPXtxdWVzdGlvbi50ZXh0fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25VcGRhdGUoeyAuLi5xdWVzdGlvbiwgdGV4dDogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJRdWVzdGlvbiB0ZXh0XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJpY29uLWJ0blwiIG9uQ2xpY2s9e29uRGVsZXRlfSB0aXRsZT1cIkRlbGV0ZSBxdWVzdGlvblwiPlxuICAgICAgICAgIDxUcmFzaDIgc2l6ZT17MTR9IC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHtjb25maWcuYWxsb3dJbWFnZXMgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1aXotZXh0cmEtcm93XCI+XG4gICAgICAgICAgPEltYWdlSWNvbiBzaXplPXsxM30gc3R5bGU9e3sgY29sb3I6ICd2YXIoLS10ZXh0LXRlcnRpYXJ5KScsIGZsZXhTaHJpbms6IDAgfX0gLz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIlxuICAgICAgICAgICAgdmFsdWU9e3F1ZXN0aW9uLmltYWdlIHx8ICcnfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvblVwZGF0ZSh7IC4uLnF1ZXN0aW9uLCBpbWFnZTogZS50YXJnZXQudmFsdWUgfHwgdW5kZWZpbmVkIH0pfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbWFnZSBVUkwgKG9wdGlvbmFsKVwiXG4gICAgICAgICAgICBzdHlsZT17eyBmbGV4OiAxIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1aXotb3B0aW9uc1wiPlxuICAgICAgICB7cXVlc3Rpb24ub3B0aW9ucy5tYXAoKG9wdCwgb2kpID0+IHtcbiAgICAgICAgICBjb25zdCBpc0NvcnJlY3QgPSBjb25maWcuYWxsb3dNdWx0aXBsZUNvcnJlY3RcbiAgICAgICAgICAgID8gKHF1ZXN0aW9uLmNvcnJlY3RJbmRpY2VzIHx8IFtdKS5pbmNsdWRlcyhvaSlcbiAgICAgICAgICAgIDogcXVlc3Rpb24uY29ycmVjdEluZGV4ID09PSBvaVxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17b2l9IGNsYXNzTmFtZT1cInF1aXotb3B0aW9uLXJvd1wiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcXVpei1jb3JyZWN0LWJ0biAke2lzQ29ycmVjdCA/ICdhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoY29uZmlnLmFsbG93TXVsdGlwbGVDb3JyZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZU11bHRpQ29ycmVjdChvaSlcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9uVXBkYXRlKHsgLi4ucXVlc3Rpb24sIGNvcnJlY3RJbmRleDogb2kgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHRpdGxlPXtjb25maWcuYWxsb3dNdWx0aXBsZUNvcnJlY3QgPyAnVG9nZ2xlIGNvcnJlY3QnIDogJ01hcmsgYXMgY29ycmVjdCd9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q2hlY2sgc2l6ZT17MTJ9IC8+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17b3B0fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlT3B0aW9uKG9pLCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZmxleDogMSB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7cXVlc3Rpb24ub3B0aW9ucy5sZW5ndGggPiAyICYmIChcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImljb24tYnRuXCIgb25DbGljaz17KCkgPT4gcmVtb3ZlT3B0aW9uKG9pKX0+XG4gICAgICAgICAgICAgICAgICA8VHJhc2gyIHNpemU9ezEyfSAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAge3F1ZXN0aW9uLm9wdGlvbnMubGVuZ3RoIDwgNiAmJiAoXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicXVpei1hZGQtb3B0aW9uXCIgb25DbGljaz17YWRkT3B0aW9ufT5cbiAgICAgICAgICA8UGx1cyBzaXplPXsxMn0gLz4gQWRkIG9wdGlvblxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICl9XG5cbiAgICAgIHsoY29uZmlnLmFsbG93SGludHMgfHwgY29uZmlnLmFsbG93RXhwbGFuYXRpb25zIHx8IGNvbmZpZy5hbGxvd1BvaW50cykgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1aXotZXh0cmFzXCI+XG4gICAgICAgICAge2NvbmZpZy5hbGxvd0hpbnRzICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVpei1leHRyYS1yb3dcIj5cbiAgICAgICAgICAgICAgPExpZ2h0YnVsYiBzaXplPXsxM30gc3R5bGU9e3sgY29sb3I6ICd2YXIoLS10ZXh0LXRlcnRpYXJ5KScsIGZsZXhTaHJpbms6IDAgfX0gLz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3F1ZXN0aW9uLmhpbnQgfHwgJyd9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvblVwZGF0ZSh7IC4uLnF1ZXN0aW9uLCBoaW50OiBlLnRhcmdldC52YWx1ZSB8fCB1bmRlZmluZWQgfSl9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJIaW50IChzaG93biBiZWZvcmUgYW5zd2VyaW5nKVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZmxleDogMSB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7Y29uZmlnLmFsbG93RXhwbGFuYXRpb25zICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVpei1leHRyYS1yb3dcIj5cbiAgICAgICAgICAgICAgPE1lc3NhZ2VTcXVhcmUgc2l6ZT17MTN9IHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tdGV4dC10ZXJ0aWFyeSknLCBmbGV4U2hyaW5rOiAwIH19IC8+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtxdWVzdGlvbi5leHBsYW5hdGlvbiB8fCAnJ31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uVXBkYXRlKHsgLi4ucXVlc3Rpb24sIGV4cGxhbmF0aW9uOiBlLnRhcmdldC52YWx1ZSB8fCB1bmRlZmluZWQgfSl9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFeHBsYW5hdGlvbiAoc2hvd24gYWZ0ZXIgYW5zd2VyaW5nKVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZmxleDogMSB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7Y29uZmlnLmFsbG93UG9pbnRzICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVpei1leHRyYS1yb3dcIj5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICd2YXIoLS1mb250LXNpemUteHMpJywgY29sb3I6ICd2YXIoLS10ZXh0LXRlcnRpYXJ5KScsIGZsZXhTaHJpbms6IDAsIHdpZHRoOiAnMTNweCcsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHUyNjA1PC9zcGFuPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBtaW49ezF9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3F1ZXN0aW9uLnBvaW50cyA/PyAxfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25VcGRhdGUoeyAuLi5xdWVzdGlvbiwgcG9pbnRzOiBlLnRhcmdldC52YWx1ZSA/IE51bWJlcihlLnRhcmdldC52YWx1ZSkgOiB1bmRlZmluZWQgfSl9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQb2ludHNcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnODBweCcgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICd2YXIoLS1mb250LXNpemUteHMpJywgY29sb3I6ICd2YXIoLS10ZXh0LXRlcnRpYXJ5KScgfX0+cG9pbnRzPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IERFRkFVTFRfQ09ORklHOiBRdWl6Q29uZmlnID0ge31cblxuZXhwb3J0IGZ1bmN0aW9uIFF1aXpCdWlsZGVyKHsgcXVlc3Rpb25zLCBvbkNoYW5nZSwgY29uZmlnID0gREVGQVVMVF9DT05GSUcgfTogUHJvcHMpIHtcbiAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSB1c2VTdGF0ZShxdWVzdGlvbnMubGVuZ3RoID4gMClcblxuICBjb25zdCBhZGRRdWVzdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBxOiBRdWl6UXVlc3Rpb24gPSB7XG4gICAgICBpZDogbWFrZUlkKCksXG4gICAgICB0ZXh0OiAnJyxcbiAgICAgIG9wdGlvbnM6IFsnT3B0aW9uIDEnLCAnT3B0aW9uIDInLCAnT3B0aW9uIDMnXSxcbiAgICAgIGNvcnJlY3RJbmRleDogMCxcbiAgICB9XG4gICAgaWYgKGNvbmZpZy5hbGxvd1BvaW50cykgcS5wb2ludHMgPSAxXG4gICAgb25DaGFuZ2UoWy4uLnF1ZXN0aW9ucywgcV0pXG4gICAgc2V0RXhwYW5kZWQodHJ1ZSlcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZVF1ZXN0aW9uID0gKGlkeDogbnVtYmVyLCBxOiBRdWl6UXVlc3Rpb24pID0+IHtcbiAgICBjb25zdCBuZXh0ID0gWy4uLnF1ZXN0aW9uc11cbiAgICBuZXh0W2lkeF0gPSBxXG4gICAgb25DaGFuZ2UobmV4dClcbiAgfVxuXG4gIGNvbnN0IGRlbGV0ZVF1ZXN0aW9uID0gKGlkeDogbnVtYmVyKSA9PiB7XG4gICAgb25DaGFuZ2UocXVlc3Rpb25zLmZpbHRlcigoXywgaSkgPT4gaSAhPT0gaWR4KSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJxdWl6LWJ1aWxkZXItc2VjdGlvblwiPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJxdWl6LWJ1aWxkZXItdG9nZ2xlXCIgb25DbGljaz17KCkgPT4gc2V0RXhwYW5kZWQoIWV4cGFuZGVkKX0+XG4gICAgICAgIHtleHBhbmRlZCA/IDxDaGV2cm9uRG93biBzaXplPXsxNH0gLz4gOiA8Q2hldnJvblJpZ2h0IHNpemU9ezE0fSAvPn1cbiAgICAgICAgPHNwYW4+e3F1ZXN0aW9ucy5sZW5ndGh9e2NvbmZpZy5tYXhRdWVzdGlvbnMgPyBgLyR7Y29uZmlnLm1heFF1ZXN0aW9uc31gIDogJyd9IHF1ZXN0aW9ue3F1ZXN0aW9ucy5sZW5ndGggIT09IDEgPyAncycgOiAnJ308L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cblxuICAgICAge2V4cGFuZGVkICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWl6LWJ1aWxkZXItYm9keVwiPlxuICAgICAgICAgIHtxdWVzdGlvbnMubWFwKChxLCBpKSA9PiAoXG4gICAgICAgICAgICA8UXVlc3Rpb25DYXJkXG4gICAgICAgICAgICAgIGtleT17cS5pZH1cbiAgICAgICAgICAgICAgcXVlc3Rpb249e3F9XG4gICAgICAgICAgICAgIGluZGV4PXtpfVxuICAgICAgICAgICAgICBjb25maWc9e2NvbmZpZ31cbiAgICAgICAgICAgICAgb25VcGRhdGU9eyh1cGRhdGVkKSA9PiB1cGRhdGVRdWVzdGlvbihpLCB1cGRhdGVkKX1cbiAgICAgICAgICAgICAgb25EZWxldGU9eygpID0+IGRlbGV0ZVF1ZXN0aW9uKGkpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgICB7KCFjb25maWcubWF4UXVlc3Rpb25zIHx8IHF1ZXN0aW9ucy5sZW5ndGggPCBjb25maWcubWF4UXVlc3Rpb25zKSAmJiAoXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInF1aXotYnVpbGRlci1hZGRcIiBvbkNsaWNrPXthZGRRdWVzdGlvbn0+XG4gICAgICAgICAgICAgIDxQbHVzIHNpemU9ezE0fSAvPiBBZGQgUXVlc3Rpb25cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHR5cGUgS2V5Ym9hcmRFdmVudCB9IGZyb20gJ3JlYWN0J1xuXG50eXBlIFByb3BzID0ge1xuICB2YWx1ZXM6IHN0cmluZ1tdXG4gIG9uQ2hhbmdlOiAodmFsdWVzOiBzdHJpbmdbXSkgPT4gdm9pZFxuICBwbGFjZWhvbGRlcj86IHN0cmluZ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVGFnSW5wdXQoeyB2YWx1ZXMsIG9uQ2hhbmdlLCBwbGFjZWhvbGRlciB9OiBQcm9wcykge1xuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKVxuXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZTogS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyAmJiBpbnB1dC50cmltKCkpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgb25DaGFuZ2UoWy4uLnZhbHVlcywgaW5wdXQudHJpbSgpXSlcbiAgICAgIHNldElucHV0KCcnKVxuICAgIH1cbiAgICBpZiAoZS5rZXkgPT09ICdCYWNrc3BhY2UnICYmIGlucHV0ID09PSAnJyAmJiB2YWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgb25DaGFuZ2UodmFsdWVzLnNsaWNlKDAsIC0xKSlcbiAgICB9XG4gIH1cblxuICBjb25zdCByZW1vdmUgPSAoaWR4OiBudW1iZXIpID0+IHtcbiAgICBvbkNoYW5nZSh2YWx1ZXMuZmlsdGVyKChfLCBpKSA9PiBpICE9PSBpZHgpKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZy1pbnB1dC1jb250YWluZXJcIiBvbkNsaWNrPXsoKSA9PiBpbnB1dFJlZi5jdXJyZW50Py5mb2N1cygpfT5cbiAgICAgIHt2YWx1ZXMubWFwKCh2LCBpKSA9PiAoXG4gICAgICAgIDxzcGFuIGtleT17aX0gY2xhc3NOYW1lPVwidGFnLWNoaXBcIj5cbiAgICAgICAgICB7dn1cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJlbW92ZShpKX0+JnRpbWVzOzwvYnV0dG9uPlxuICAgICAgICA8L3NwYW4+XG4gICAgICApKX1cbiAgICAgIDxpbnB1dFxuICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICBjbGFzc05hbWU9XCJ0YWctaW5wdXRcIlxuICAgICAgICB2YWx1ZT17aW5wdXR9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICBvbktleURvd249e2hhbmRsZUtleURvd259XG4gICAgICAgIHBsYWNlaG9sZGVyPXt2YWx1ZXMubGVuZ3RoID09PSAwID8gcGxhY2Vob2xkZXIgOiAnJ31cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU3R1ZGlvIH0gZnJvbSAnLi4vc3RhdGUnXG5pbXBvcnQgeyBGSUVMRF9UWVBFUyB9IGZyb20gJy4uL2ZpZWxkLXJlZ2lzdHJ5J1xuaW1wb3J0IHsgUXVpekJ1aWxkZXIgfSBmcm9tICcuL1F1aXpCdWlsZGVyJ1xuaW1wb3J0IHsgUm90YXRlQ2N3LCBQbHVzLCBUcmFzaDIsIE11c2ljLCBMaW5rMiwgQ2xvY2ssIENhbGVuZGFyLCBJbWFnZVBsdXMgfSBmcm9tICdsdWNpZGUtcmVhY3QnXG5pbXBvcnQgdHlwZSB7IFNjaGVtYUZpZWxkLCBRdWl6UXVlc3Rpb24sIFF1aXpDb25maWcgfSBmcm9tICcuLi90eXBlcydcblxuLy8gXHUyNTAwXHUyNTAwIEF1ZGlvIGZpZWxkIEdVSSBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxudHlwZSBBdWRpb1ZhbHVlID0geyB1cmw/OiBzdHJpbmc7IHN0YXJ0PzogbnVtYmVyOyBlbmQ/OiBudW1iZXIgfVxuXG5mdW5jdGlvbiBBdWRpb0VkaXRvcih7IHZhbHVlLCBvbkNoYW5nZSB9OiB7IHZhbHVlOiBBdWRpb1ZhbHVlOyBvbkNoYW5nZTogKHY6IEF1ZGlvVmFsdWUpID0+IHZvaWQgfSkge1xuICBjb25zdCB2ID0gdmFsdWUgfHwgeyB1cmw6ICcnIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8tYXVkaW8tZWRpdG9yXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8tYXVkaW8tcm93XCI+XG4gICAgICAgIDxMaW5rMiBzaXplPXsxM30gc3R5bGU9e3sgY29sb3I6ICd2YXIoLS10ZXh0LXRlcnRpYXJ5KScsIGZsZXhTaHJpbms6IDAsIG1hcmdpblRvcDogMiB9fSAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCJcbiAgICAgICAgICB2YWx1ZT17di51cmwgfHwgJyd9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZSh7IC4uLnYsIHVybDogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJBdWRpbyBVUkwgKG1wMywgbTRhLCBcdTIwMjYpXCJcbiAgICAgICAgICBzdHlsZT17eyBmbGV4OiAxIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1hdWRpby10cmltXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1hdWRpby10cmltLWZpZWxkXCI+XG4gICAgICAgICAgPENsb2NrIHNpemU9ezExfSBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLXRleHQtdGVydGlhcnkpJyB9fSAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbW8tYXVkaW8tdHJpbS1sYWJlbFwiPlN0YXJ0PC9zcGFuPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgIHN0ZXA9ezAuMX1cbiAgICAgICAgICAgIHZhbHVlPXt2LnN0YXJ0ID8/ICcnfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZSh7IC4uLnYsIHN0YXJ0OiBlLnRhcmdldC52YWx1ZSA/IE51bWJlcihlLnRhcmdldC52YWx1ZSkgOiB1bmRlZmluZWQgfSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjBcIlxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDcyIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZW1vLWF1ZGlvLXRyaW0tdW5pdFwiPnM8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8tYXVkaW8tdHJpbS1maWVsZFwiPlxuICAgICAgICAgIDxDbG9jayBzaXplPXsxMX0gc3R5bGU9e3sgY29sb3I6ICd2YXIoLS10ZXh0LXRlcnRpYXJ5KScgfX0gLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZW1vLWF1ZGlvLXRyaW0tbGFiZWxcIj5FbmQ8L3NwYW4+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgbWluPXswfVxuICAgICAgICAgICAgc3RlcD17MC4xfVxuICAgICAgICAgICAgdmFsdWU9e3YuZW5kID8/ICcnfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZSh7IC4uLnYsIGVuZDogZS50YXJnZXQudmFsdWUgPyBOdW1iZXIoZS50YXJnZXQudmFsdWUpIDogdW5kZWZpbmVkIH0pfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcdTIwMTRcIlxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDcyIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZW1vLWF1ZGlvLXRyaW0tdW5pdFwiPnM8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gXHUyNTAwXHUyNTAwIERhdGUgZmllbGQgR1VJIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXG5mdW5jdGlvbiBEYXRlRWRpdG9yKHsgdmFsdWUsIG9uQ2hhbmdlIH06IHsgdmFsdWU6IHN0cmluZzsgb25DaGFuZ2U6ICh2OiBzdHJpbmcpID0+IHZvaWQgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1kYXRlLWVkaXRvclwiPlxuICAgICAgPENhbGVuZGFyIHNpemU9ezEzfSBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLXRleHQtdGVydGlhcnkpJywgZmxleFNocmluazogMCB9fSAvPlxuICAgICAgPGlucHV0XG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIlxuICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgIHZhbHVlPXt2YWx1ZSB8fCAnJ31cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIHN0eWxlPXt7IGZsZXg6IDEgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gXHUyNTAwXHUyNTAwIEltYWdlIEFycmF5IEdVSSBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuZnVuY3Rpb24gSW1hZ2VBcnJheUVkaXRvcih7XG4gIHZhbHVlLCBtYXgsIG9uQ2hhbmdlLFxufToge1xuICB2YWx1ZTogc3RyaW5nW107IG1heD86IG51bWJlcjsgb25DaGFuZ2U6ICh2OiBzdHJpbmdbXSkgPT4gdm9pZFxufSkge1xuICBjb25zdCBpbWFnZXMgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW11cbiAgY29uc3QgY2FuQWRkID0gIW1heCB8fCBpbWFnZXMubGVuZ3RoIDwgbWF4XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8taW1hZ2UtYXJyYXlcIj5cbiAgICAgIHtpbWFnZXMubWFwKCh1cmwsIGkpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImRlbW8taW1hZ2UtYXJyYXktaXRlbVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pbWFnZS1hcnJheS10aHVtYlwiPlxuICAgICAgICAgICAge3VybCA/IChcbiAgICAgICAgICAgICAgPGltZyBzcmM9e3VybH0gYWx0PVwiXCIgb25FcnJvcj17KGUpID0+IHsgKGUudGFyZ2V0IGFzIEhUTUxJbWFnZUVsZW1lbnQpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScgfX0gLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxJbWFnZVBsdXMgc2l6ZT17MTZ9IHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tdGV4dC10ZXJ0aWFyeSknIH19IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiXG4gICAgICAgICAgICB2YWx1ZT17dXJsfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG5leHQgPSBbLi4uaW1hZ2VzXVxuICAgICAgICAgICAgICBuZXh0W2ldID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgb25DaGFuZ2UobmV4dClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17YEltYWdlIFVSTCAke2kgKyAxfWB9XG4gICAgICAgICAgICBzdHlsZT17eyBmbGV4OiAxIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImljb24tYnRuXCIgb25DbGljaz17KCkgPT4gb25DaGFuZ2UoaW1hZ2VzLmZpbHRlcigoXywgaikgPT4gaiAhPT0gaSkpfSB0aXRsZT1cIlJlbW92ZVwiPlxuICAgICAgICAgICAgPFRyYXNoMiBzaXplPXsxMn0gLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICAgIHtjYW5BZGQgJiYgKFxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRlbW8taW1hZ2UtYXJyYXktYWRkXCIgb25DbGljaz17KCkgPT4gb25DaGFuZ2UoWy4uLmltYWdlcywgJyddKX0+XG4gICAgICAgICAgPFBsdXMgc2l6ZT17MTN9IC8+IEFkZCBJbWFnZSB7bWF4ID8gYCgke2ltYWdlcy5sZW5ndGh9LyR7bWF4fSlgIDogJyd9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBcdTI1MDBcdTI1MDAgR3JvdXAgR1VJIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXG5mdW5jdGlvbiBHcm91cEVkaXRvcih7XG4gIHZhbHVlLCBzdWJGaWVsZHMsIG9uQ2hhbmdlLFxufToge1xuICB2YWx1ZTogUmVjb3JkPHN0cmluZywgdW5rbm93bj47IHN1YkZpZWxkczogU2NoZW1hRmllbGRbXTsgb25DaGFuZ2U6ICh2OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikgPT4gdm9pZFxufSkge1xuICBjb25zdCBvYmogPSAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpID8gdmFsdWUgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gOiB7fVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWdyb3VwLWVkaXRvclwiPlxuICAgICAge3N1YkZpZWxkcy5tYXAoKHNmKSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtzZi5rZXl9IGNsYXNzTmFtZT1cImRlbW8tZ3JvdXAtZmllbGRcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZGVtby1ncm91cC1maWVsZC1sYWJlbFwiPntzZi5sYWJlbH0gPHNwYW4gY2xhc3NOYW1lPVwiZGVtby1ncm91cC1maWVsZC1rZXlcIj57c2Yua2V5fTwvc3Bhbj48L2xhYmVsPlxuICAgICAgICAgIDxGaWVsZElucHV0XG4gICAgICAgICAgICBmaWVsZD17c2Z9XG4gICAgICAgICAgICB2YWx1ZT17b2JqW3NmLmtleV19XG4gICAgICAgICAgICBvbkNoYW5nZT17KHYpID0+IG9uQ2hhbmdlKHsgLi4ub2JqLCBbc2Yua2V5XTogdiB9KX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgICAge3N1YkZpZWxkcy5sZW5ndGggPT09IDAgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8tZ3JvdXAtZW1wdHlcIj5ObyBzdWItZmllbGRzIGRlZmluZWQ8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gXHUyNTAwXHUyNTAwIFJlcGVhdGluZyBHcm91cCBHVUkgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cbmZ1bmN0aW9uIEdyb3VwQXJyYXlFZGl0b3Ioe1xuICB2YWx1ZSwgc3ViRmllbGRzLCBvbkNoYW5nZSxcbn06IHtcbiAgdmFsdWU6IFJlY29yZDxzdHJpbmcsIHVua25vd24+W107IHN1YkZpZWxkczogU2NoZW1hRmllbGRbXTsgb25DaGFuZ2U6ICh2OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdKSA9PiB2b2lkXG59KSB7XG4gIGNvbnN0IGl0ZW1zID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt7fV1cblxuICBjb25zdCB1cGRhdGVJdGVtID0gKGlkeDogbnVtYmVyLCBpdGVtOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikgPT4ge1xuICAgIGNvbnN0IG5leHQgPSBbLi4uaXRlbXNdXG4gICAgbmV4dFtpZHhdID0gaXRlbVxuICAgIG9uQ2hhbmdlKG5leHQpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1ncm91cC1hcnJheVwiPlxuICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiZGVtby1ncm91cC1hcnJheS1pdGVtXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWdyb3VwLWFycmF5LWl0ZW0taGVhZGVyXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZW1vLWdyb3VwLWFycmF5LWl0ZW0tbnVtXCI+SXRlbSB7aSArIDF9PC9zcGFuPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLWJ0blwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2hhbmdlKGl0ZW1zLmZpbHRlcigoXywgaikgPT4gaiAhPT0gaSkpfVxuICAgICAgICAgICAgICB0aXRsZT1cIlJlbW92ZSBpdGVtXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFRyYXNoMiBzaXplPXsxMn0gLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxHcm91cEVkaXRvclxuICAgICAgICAgICAgdmFsdWU9e2l0ZW19XG4gICAgICAgICAgICBzdWJGaWVsZHM9e3N1YkZpZWxkc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsodikgPT4gdXBkYXRlSXRlbShpLCB2KX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkZW1vLWdyb3VwLWFycmF5LWFkZFwiIG9uQ2xpY2s9eygpID0+IG9uQ2hhbmdlKFsuLi5pdGVtcywge31dKX0+XG4gICAgICAgIDxQbHVzIHNpemU9ezEzfSAvPiBBZGQgSXRlbVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gXHUyNTAwXHUyNTAwIEdlbmVyaWMgZmllbGQgaW5wdXQgKHVzZWQgcmVjdXJzaXZlbHkgYnkgZ3JvdXBzKSBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuZnVuY3Rpb24gRmllbGRJbnB1dCh7XG4gIGZpZWxkLCB2YWx1ZSwgb25DaGFuZ2UsXG59OiB7XG4gIGZpZWxkOiBTY2hlbWFGaWVsZDsgdmFsdWU6IHVua25vd247IG9uQ2hhbmdlOiAodjogdW5rbm93bikgPT4gdm9pZFxufSkge1xuICBpZiAoZmllbGQudHlwZSA9PT0gJ3RvZ2dsZScpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRvZ2dsZS1zd2l0Y2hcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9eyEhdmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZS50YXJnZXQuY2hlY2tlZCl9IC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvZ2dsZS1zd2l0Y2gtc2xpZGVyXCIgLz5cbiAgICAgIDwvbGFiZWw+XG4gICAgKVxuICB9XG4gIGlmIChmaWVsZC50eXBlID09PSAnY29sb3InKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sb3ItaW5wdXQtcm93XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY29sb3JcIiB2YWx1ZT17KHZhbHVlIGFzIHN0cmluZykgfHwgJyMwMDAwMDAnfSBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIiB2YWx1ZT17KHZhbHVlIGFzIHN0cmluZykgfHwgJyd9IG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZS50YXJnZXQudmFsdWUpfSBzdHlsZT17eyBmbGV4OiAxIH19IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbiAgaWYgKGZpZWxkLnR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCJcbiAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgIHZhbHVlPXt2YWx1ZSBhcyBudW1iZXIgPz8gJyd9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZS50YXJnZXQudmFsdWUgPyBOdW1iZXIoZS50YXJnZXQudmFsdWUpIDogJycpfVxuICAgICAgLz5cbiAgICApXG4gIH1cbiAgaWYgKGZpZWxkLnR5cGUgPT09ICdzZWxlY3QnKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiIHZhbHVlPXsodmFsdWUgYXMgc3RyaW5nKSB8fCAnJ30gb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShlLnRhcmdldC52YWx1ZSl9PlxuICAgICAgICB7KGZpZWxkLm9wdGlvbnMgfHwgW10pLm1hcCgob3B0KSA9PiA8b3B0aW9uIGtleT17b3B0fSB2YWx1ZT17b3B0fT57b3B0fTwvb3B0aW9uPil9XG4gICAgICA8L3NlbGVjdD5cbiAgICApXG4gIH1cbiAgaWYgKGZpZWxkLnR5cGUgPT09ICdkYXRlJykge1xuICAgIHJldHVybiA8RGF0ZUVkaXRvciB2YWx1ZT17KHZhbHVlIGFzIHN0cmluZykgfHwgJyd9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cbiAgfVxuICBpZiAoZmllbGQudHlwZSA9PT0gJ2F1ZGlvJykge1xuICAgIHJldHVybiA8QXVkaW9FZGl0b3IgdmFsdWU9e3ZhbHVlIGFzIEF1ZGlvVmFsdWV9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cbiAgfVxuICBpZiAoZmllbGQudHlwZSA9PT0gJ2ltYWdlX2FycmF5Jykge1xuICAgIHJldHVybiA8SW1hZ2VBcnJheUVkaXRvciB2YWx1ZT17dmFsdWUgYXMgc3RyaW5nW119IG1heD17ZmllbGQubWF4fSBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gIH1cbiAgaWYgKGZpZWxkLnR5cGUgPT09ICd0ZXh0YXJlYScpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIlxuICAgICAgICByb3dzPXszfVxuICAgICAgICB2YWx1ZT17KHZhbHVlIGFzIHN0cmluZykgPz8gJyd9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgLz5cbiAgICApXG4gIH1cbiAgLy8gdGV4dCwgaW1hZ2UsIHZpZGVvIFx1MjAxNCBwbGFpbiB0ZXh0IGlucHV0XG4gIHJldHVybiAoXG4gICAgPGlucHV0XG4gICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCJcbiAgICAgIHZhbHVlPXsodmFsdWUgYXMgc3RyaW5nKSA/PyAnJ31cbiAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgcGxhY2Vob2xkZXI9e2ZpZWxkLnR5cGUgPT09ICdpbWFnZScgPyAnSW1hZ2UgVVJMJyA6IGZpZWxkLnR5cGUgPT09ICd2aWRlbycgPyAnVmlkZW8gVVJMJyA6ICcnfVxuICAgIC8+XG4gIClcbn1cblxuLy8gXHUyNTAwXHUyNTAwIE1haW4gRGVtb1RhYiBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuZXhwb3J0IGZ1bmN0aW9uIERlbW9UYWIoKSB7XG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VTdHVkaW8oKVxuICBjb25zdCBkZW1vID0gc3RhdGUud29ya2luZy5kZW1vXG4gIGNvbnN0IHNlY3Rpb25zID0gc3RhdGUud29ya2luZy5zY2hlbWEuc2VjdGlvbnNcblxuICBjb25zdCBhbGxGaWVsZHMgPSBzZWN0aW9ucy5mbGF0TWFwKChzKSA9PlxuICAgIHMuZmllbGRzLm1hcCgoZikgPT4gKHsgLi4uZiwgc2VjdGlvbkxhYmVsOiBzLmxhYmVsIH0pKVxuICApXG5cbiAgY29uc3QgcmVzZXRGaWVsZCA9IChrZXk6IHN0cmluZywgdHlwZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgZnQgPSBGSUVMRF9UWVBFU1t0eXBlIGFzIGtleW9mIHR5cGVvZiBGSUVMRF9UWVBFU11cbiAgICBpZiAoIWZ0KSByZXR1cm5cbiAgICBjb25zdCBmaWVsZCA9IGFsbEZpZWxkcy5maW5kKChmKSA9PiBmLmtleSA9PT0ga2V5KVxuICAgIGlmICghZmllbGQpIHJldHVyblxuICAgIGNvbnN0IGRlZmF1bHRWYWwgPSBmdC5kZW1vRGVmYXVsdChmaWVsZClcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdTRVRfREVNTycsIGtleSwgdmFsdWU6IGRlZmF1bHRWYWwgfSlcbiAgfVxuXG4gIGNvbnN0IHJlc2V0QWxsID0gKCkgPT4ge1xuICAgIGNvbnN0IG5ld0RlbW86IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge31cbiAgICBmb3IgKGNvbnN0IGYgb2YgYWxsRmllbGRzKSB7XG4gICAgICBjb25zdCBmdCA9IEZJRUxEX1RZUEVTW2YudHlwZSBhcyBrZXlvZiB0eXBlb2YgRklFTERfVFlQRVNdXG4gICAgICBpZiAoZnQpIG5ld0RlbW9bZi5rZXldID0gZnQuZGVtb0RlZmF1bHQoZilcbiAgICB9XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnU0VUX0RFTU9fQUxMJywgZGVtbzogbmV3RGVtbyB9KVxuICB9XG5cbiAgaWYgKGFsbEZpZWxkcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLXRhYlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8tdGFiLWVtcHR5XCI+XG4gICAgICAgICAgPHA+Tm8gZmllbGRzIHlldCBcdTIwMTQgYWRkIGZpZWxkcyBpbiB0aGUgU2NoZW1hIHRhYiBmaXJzdDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby10YWJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby10YWItaGVhZGVyXCI+XG4gICAgICAgIDxoMj5EZW1vIERhdGE8L2gyPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1zZWNvbmRhcnlcIiBvbkNsaWNrPXtyZXNldEFsbH0+XG4gICAgICAgICAgPFJvdGF0ZUNjdyBzaXplPXsxMn0gLz4gUmVzZXQgQWxsXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8cCBjbGFzc05hbWU9XCJkZW1vLXRhYi1kZXNjXCI+UHJldmlldyB2YWx1ZXMgdXNlZCB3aGVuIHJlbmRlcmluZyB0aGUgdGVtcGxhdGUuIFRoZXNlIGFyZSBzYXZlZCB0byBkZW1vLmpzb24uPC9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWZpZWxkc1wiPlxuICAgICAgICB7YWxsRmllbGRzLm1hcCgoZikgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gZGVtb1tmLmtleV1cblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17Zi5rZXl9IGNsYXNzTmFtZT1cImRlbW8tZmllbGRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWZpZWxkLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8tZmllbGQtbGFiZWxcIj57Zi5sYWJlbH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1maWVsZC1tZXRhXCI+e2Yua2V5fSBcdTAwQjcge2YudHlwZX0gXHUwMEI3IHtmLnNlY3Rpb25MYWJlbH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImljb24tYnRuXCIgb25DbGljaz17KCkgPT4gcmVzZXRGaWVsZChmLmtleSwgZi50eXBlKX0gdGl0bGU9XCJSZXNldCB0byBkZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICA8Um90YXRlQ2N3IHNpemU9ezEyfSAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWZpZWxkLWlucHV0XCI+XG4gICAgICAgICAgICAgICAge2YudHlwZSA9PT0gJ3F1aXonID8gKFxuICAgICAgICAgICAgICAgICAgPFF1aXpCdWlsZGVyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9ucz17KHZhbHVlIGFzIFF1aXpRdWVzdGlvbltdKSB8fCBbXX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhxdWVzdGlvbnMpID0+IGRpc3BhdGNoKHsgdHlwZTogJ1NFVF9ERU1PJywga2V5OiBmLmtleSwgdmFsdWU6IHF1ZXN0aW9ucyB9KX1cbiAgICAgICAgICAgICAgICAgICAgY29uZmlnPXsoZi5jb25maWcgYXMgUXVpekNvbmZpZykgfHwge319XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiBmLnR5cGUgPT09ICdncm91cCcgPyAoXG4gICAgICAgICAgICAgICAgICA8R3JvdXBFZGl0b3JcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+fVxuICAgICAgICAgICAgICAgICAgICBzdWJGaWVsZHM9e2YuZmllbGRzIHx8IFtdfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHYpID0+IGRpc3BhdGNoKHsgdHlwZTogJ1NFVF9ERU1PJywga2V5OiBmLmtleSwgdmFsdWU6IHYgfSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiBmLnR5cGUgPT09ICdncm91cF9hcnJheScgPyAoXG4gICAgICAgICAgICAgICAgICA8R3JvdXBBcnJheUVkaXRvclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXX1cbiAgICAgICAgICAgICAgICAgICAgc3ViRmllbGRzPXtmLmZpZWxkcyB8fCBbXX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdTRVRfREVNTycsIGtleTogZi5rZXksIHZhbHVlOiB2IH0pfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPEZpZWxkSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ9e2Z9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdTRVRfREVNTycsIGtleTogZi5rZXksIHZhbHVlOiB2IH0pfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCB7IHVzZVN0dWRpbyB9IGZyb20gJy4uL3N0YXRlJ1xuaW1wb3J0IHsgVGFnSW5wdXQgfSBmcm9tICcuL2NvbW1vbi9UYWdJbnB1dCdcbmltcG9ydCB7IEFWQUlMQUJMRV9ERVBTIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuXG5leHBvcnQgZnVuY3Rpb24gTWFuaWZlc3RUYWIoKSB7XG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VTdHVkaW8oKVxuICBjb25zdCBtYW5pZmVzdCA9IHN0YXRlLndvcmtpbmcubWFuaWZlc3RcblxuICBjb25zdCBzZXRNYW5pZmVzdCA9IChwYXRjaDogUGFydGlhbDx0eXBlb2YgbWFuaWZlc3Q+KSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnU0VUX01BTklGRVNUJywgbWFuaWZlc3Q6IHsgLi4ubWFuaWZlc3QsIC4uLnBhdGNoIH0gfSlcbiAgfVxuXG4gIGNvbnN0IHRvZ2dsZURlcCA9IChuYW1lOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBkZXBzID0geyAuLi5tYW5pZmVzdC5kZXBlbmRlbmNpZXMgfVxuICAgIGlmIChkZXBzW25hbWVdKSB7XG4gICAgICBkZWxldGUgZGVwc1tuYW1lXVxuICAgIH0gZWxzZSB7XG4gICAgICBkZXBzW25hbWVdID0gdHJ1ZVxuICAgIH1cbiAgICBzZXRNYW5pZmVzdCh7IGRlcGVuZGVuY2llczogZGVwcyB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hbmlmZXN0LXRhYlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYW5pZmVzdC10YWItaGVhZGVyXCI+XG4gICAgICAgIDxoMj5NYW5pZmVzdDwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1hbmlmZXN0LXRhYi1kZXNjXCI+Q29uZmlndXJhdGlvbiBmb3IgaG93IHRoZSB0ZW1wbGF0ZSBpcyBsb2FkZWQgYW5kIHJlbmRlcmVkLiBTYXZlZCB0byBtYW5pZmVzdC5qc29uLjwvcD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYW5pZmVzdC1zZWN0aW9uc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hbmlmZXN0LXNlY3Rpb25cIj5cbiAgICAgICAgICA8aDM+RW50cnkgUG9pbnQ8L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5FbnRyeSBmaWxlPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0IGZvbnQtbW9ub1wiXG4gICAgICAgICAgICAgIHZhbHVlPXttYW5pZmVzdC5lbnRyeX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNYW5pZmVzdCh7IGVudHJ5OiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJpbmRleC50c3hcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYW5pZmVzdC1zZWN0aW9uXCI+XG4gICAgICAgICAgPGgzPlNjcmVlbnM8L2gzPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1hbmlmZXN0LXNlY3Rpb24tZGVzY1wiPk5hbWVkIHNjcmVlbnMvcm91dGVzIHdpdGhpbiB0aGlzIHRlbXBsYXRlIChlLmcuIGdhdGUsIG1haW4sIGd1ZXN0Ym9vayk8L3A+XG4gICAgICAgICAgPFRhZ0lucHV0XG4gICAgICAgICAgICB2YWx1ZXM9e21hbmlmZXN0LnNjcmVlbnN9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHNjcmVlbnMpID0+IHNldE1hbmlmZXN0KHsgc2NyZWVucyB9KX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBzY3JlZW4gbmFtZSArIEVudGVyXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hbmlmZXN0LXNlY3Rpb25cIj5cbiAgICAgICAgICA8aDM+RGVwZW5kZW5jaWVzPC9oMz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYW5pZmVzdC1zZWN0aW9uLWRlc2NcIj5ucG0gcGFja2FnZXMgdGhpcyB0ZW1wbGF0ZSBuZWVkcyBhdCBydW50aW1lPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVwLWdyaWRcIj5cbiAgICAgICAgICAgIHtBVkFJTEFCTEVfREVQUy5tYXAoKGRlcCkgPT4gKFxuICAgICAgICAgICAgICA8bGFiZWwga2V5PXtkZXAubmFtZX0gY2xhc3NOYW1lPXtgZGVwLWNhcmQgJHttYW5pZmVzdC5kZXBlbmRlbmNpZXNbZGVwLm5hbWVdID8gJ2FjdGl2ZScgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXshIW1hbmlmZXN0LmRlcGVuZGVuY2llc1tkZXAubmFtZV19XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdG9nZ2xlRGVwKGRlcC5uYW1lKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlcC1uYW1lXCI+e2RlcC5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXAtZGVzY1wiPntkZXAuZGVzY308L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hbmlmZXN0LXNlY3Rpb25cIj5cbiAgICAgICAgICA8aDM+Rm9udHM8L2gzPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1hbmlmZXN0LXNlY3Rpb24tZGVzY1wiPkdvb2dsZSBGb250IG5hbWVzIHRvIGxvYWQgKGUuZy4gXCJEYW5jaW5nIFNjcmlwdFwiLCBcIlBsYXlmYWlyIERpc3BsYXlcIik8L3A+XG4gICAgICAgICAgPFRhZ0lucHV0XG4gICAgICAgICAgICB2YWx1ZXM9e21hbmlmZXN0LmZvbnRzfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhmb250cykgPT4gc2V0TWFuaWZlc3QoeyBmb250cyB9KX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBmb250IG5hbWUgKyBFbnRlclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU3R1ZGlvIH0gZnJvbSAnLi4vLi4vc3RhdGUnXG5cbmV4cG9ydCBmdW5jdGlvbiBUb2FzdCgpIHtcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZVN0dWRpbygpXG4gIGNvbnN0IHRvYXN0ID0gc3RhdGUudG9hc3RcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghdG9hc3QpIHJldHVyblxuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdISURFX1RPQVNUJyB9KSwgMjUwMClcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKVxuICB9LCBbdG9hc3QsIGRpc3BhdGNoXSlcblxuICBpZiAoIXRvYXN0KSByZXR1cm4gbnVsbFxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2B0b2FzdCB2aXNpYmxlICR7dG9hc3QudHlwZX1gfT5cbiAgICAgIHt0b2FzdC5tZXNzYWdlfVxuICAgIDwvZGl2PlxuICApXG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQUEsU0FBUyxrQkFBa0I7QUFDM0IsU0FBUyxZQUFZLGFBQUFBLFlBQVcsZUFBQUMsY0FBYSxZQUFBQyxXQUFVLFVBQUFDLGVBQWM7OztDQ0E1RCxXQUFXO0FBQ1YsTUFBSSxJQUFJLFNBQVMsY0FBYyxPQUFPO0FBQ3RDLElBQUUsY0FBYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZytFaEIsV0FBUyxLQUFLLFlBQVksQ0FBQztBQUM3QixHQUFHOzs7QUNwK0VYLFNBQVMsZUFBZSxrQkFBaUM7OztBQ0VsRCxTQUFTLFVBQWEsS0FBVztBQUN0QyxTQUFPLE9BQU8sT0FBTyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsR0FBRyxDQUFDO0FBQzNEO0FBRU8sU0FBUyxVQUFVLEdBQVksR0FBcUI7QUFDekQsU0FBTyxLQUFLLFVBQVUsQ0FBQyxNQUFNLEtBQUssVUFBVSxDQUFDO0FBQy9DO0FBRU8sU0FBUyxZQUFZLEtBQXFCO0FBQy9DLFNBQU8sSUFDSixRQUFRLGtCQUFrQixFQUFFLEVBQzVCLFFBQVEsV0FBVyxDQUFDLEdBQUcsTUFBYyxFQUFFLFlBQVksQ0FBQyxFQUNwRCxRQUFRLFFBQVEsQ0FBQyxHQUFHLE1BQWMsRUFBRSxZQUFZLENBQUM7QUFDdEQ7QUFFTyxTQUFTLGdCQUFnQixLQUFhLFVBQW1DO0FBQzlFLFFBQU0sVUFBVSxvQkFBSSxJQUFZO0FBQ2hDLGFBQVcsS0FBSyxVQUFVO0FBQ3hCLGVBQVcsS0FBSyxFQUFFLFFBQVE7QUFDeEIsVUFBSSxFQUFFLElBQUssU0FBUSxJQUFJLEVBQUUsR0FBRztBQUFBLElBQzlCO0FBQUEsRUFDRjtBQUNBLE1BQUksQ0FBQyxRQUFRLElBQUksR0FBRyxFQUFHLFFBQU87QUFDOUIsTUFBSSxJQUFJO0FBQ1IsU0FBTyxRQUFRLElBQUksTUFBTSxDQUFDLEVBQUc7QUFDN0IsU0FBTyxNQUFNO0FBQ2Y7OztBRGxCTyxJQUFNLGlCQUFpQztBQUFBLEVBQzVDLFVBQVUsQ0FBQyxFQUFFLEtBQUssVUFBVSxPQUFPLGNBQWMsUUFBUSxDQUFDLEVBQUUsQ0FBQztBQUMvRDtBQUVPLElBQU0sbUJBQWlDO0FBQUEsRUFDNUMsT0FBTztBQUFBLEVBQ1AsU0FBUyxDQUFDO0FBQUEsRUFDVixjQUFjLENBQUM7QUFBQSxFQUNmLE9BQU8sQ0FBQztBQUNWO0FBMkRPLFNBQVMsY0FBYyxPQUFvQixRQUFtQztBQUNuRixVQUFRLE9BQU8sTUFBTTtBQUFBLElBQ25CLEtBQUssVUFBVTtBQUNiLFlBQU0sU0FBUyxPQUFPLEtBQUssVUFBVTtBQUNyQyxZQUFNLE9BQU8sT0FBTyxLQUFLLFFBQVEsQ0FBQztBQUNsQyxZQUFNLE1BQU0sT0FBTyxLQUFLO0FBQ3hCLFlBQU0sV0FBVztBQUFBLFFBQ2YsT0FBTyxLQUFLLFNBQVMsaUJBQWlCO0FBQUEsUUFDdEMsU0FBUyxLQUFLLFdBQVcsaUJBQWlCO0FBQUEsUUFDMUMsY0FBYyxLQUFLLGdCQUFnQixpQkFBaUI7QUFBQSxRQUNwRCxPQUFPLEtBQUssU0FBUyxpQkFBaUI7QUFBQSxNQUN4QztBQUNBLFlBQU1DLFVBQVMsRUFBRSxRQUFRLE1BQU0sU0FBUztBQUN4QyxhQUFPLEVBQUUsR0FBRyxPQUFPLFFBQVEsVUFBVUEsT0FBTSxHQUFHLFNBQVMsVUFBVUEsT0FBTSxFQUFFO0FBQUEsSUFDM0U7QUFBQSxJQUVBLEtBQUs7QUFDSCxhQUFPLEVBQUUsR0FBRyxPQUFPLFFBQVEsVUFBVSxNQUFNLE9BQU8sRUFBRTtBQUFBLElBRXRELEtBQUs7QUFDSCxhQUFPLEVBQUUsR0FBRyxPQUFPLFNBQVMsRUFBRSxHQUFHLE1BQU0sU0FBUyxRQUFRLE9BQU8sT0FBTyxFQUFFO0FBQUEsSUFFMUUsS0FBSyxlQUFlO0FBQ2xCLFlBQU0sV0FBVyxDQUFDLEdBQUcsTUFBTSxRQUFRLE9BQU8sVUFBVSxPQUFPLE9BQU87QUFDbEUsYUFBTztBQUFBLFFBQ0wsR0FBRztBQUFBLFFBQ0gsU0FBUyxFQUFFLEdBQUcsTUFBTSxTQUFTLFFBQVEsRUFBRSxHQUFHLE1BQU0sUUFBUSxRQUFRLFNBQVMsRUFBRTtBQUFBLFFBQzNFLElBQUksRUFBRSxHQUFHLE1BQU0sSUFBSSxpQkFBaUIsU0FBUyxTQUFTLEdBQUcsZUFBZSxHQUFHO0FBQUEsTUFDN0U7QUFBQSxJQUNGO0FBQUEsSUFFQSxLQUFLLGtCQUFrQjtBQUNyQixZQUFNLFdBQVcsTUFBTSxRQUFRLE9BQU8sU0FBUztBQUFBLFFBQUksQ0FBQyxHQUFHLE1BQ3JELE1BQU0sT0FBTyxNQUFNLE9BQU8sVUFBVTtBQUFBLE1BQ3RDO0FBQ0EsYUFBTyxFQUFFLEdBQUcsT0FBTyxTQUFTLEVBQUUsR0FBRyxNQUFNLFNBQVMsUUFBUSxFQUFFLEdBQUcsTUFBTSxRQUFRLFFBQVEsU0FBUyxFQUFFLEVBQUU7QUFBQSxJQUNsRztBQUFBLElBRUEsS0FBSyxrQkFBa0I7QUFDckIsWUFBTSxXQUFXLE1BQU0sUUFBUSxPQUFPLFNBQVMsT0FBTyxDQUFDLEdBQUcsTUFBTSxNQUFNLE9BQU8sR0FBRztBQUNoRixZQUFNLE1BQU0sS0FBSyxJQUFJLE1BQU0sR0FBRyxpQkFBaUIsS0FBSyxJQUFJLEdBQUcsU0FBUyxTQUFTLENBQUMsQ0FBQztBQUMvRSxhQUFPO0FBQUEsUUFDTCxHQUFHO0FBQUEsUUFDSCxTQUFTLEVBQUUsR0FBRyxNQUFNLFNBQVMsUUFBUSxFQUFFLEdBQUcsTUFBTSxRQUFRLFFBQVEsU0FBUyxFQUFFO0FBQUEsUUFDM0UsSUFBSSxFQUFFLEdBQUcsTUFBTSxJQUFJLGlCQUFpQixLQUFLLGVBQWUsR0FBRztBQUFBLE1BQzdEO0FBQUEsSUFDRjtBQUFBLElBRUEsS0FBSyxnQkFBZ0I7QUFDbkIsWUFBTSxXQUFXLENBQUMsR0FBRyxNQUFNLFFBQVEsT0FBTyxRQUFRO0FBQ2xELFlBQU0sQ0FBQyxLQUFLLElBQUksU0FBUyxPQUFPLE9BQU8sTUFBTSxDQUFDO0FBQzlDLGVBQVMsT0FBTyxPQUFPLElBQUksR0FBRyxLQUFLO0FBQ25DLGFBQU87QUFBQSxRQUNMLEdBQUc7QUFBQSxRQUNILFNBQVMsRUFBRSxHQUFHLE1BQU0sU0FBUyxRQUFRLEVBQUUsR0FBRyxNQUFNLFFBQVEsUUFBUSxTQUFTLEVBQUU7QUFBQSxRQUMzRSxJQUFJLEVBQUUsR0FBRyxNQUFNLElBQUksaUJBQWlCLE9BQU8sR0FBRztBQUFBLE1BQ2hEO0FBQUEsSUFDRjtBQUFBLElBRUEsS0FBSyxhQUFhO0FBQ2hCLFlBQU0sV0FBVyxNQUFNLFFBQVEsT0FBTyxTQUFTLElBQUksQ0FBQyxHQUFHLE1BQU07QUFDM0QsWUFBSSxNQUFNLE9BQU8sV0FBWSxRQUFPO0FBQ3BDLGVBQU8sRUFBRSxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxRQUFRLE9BQU8sS0FBSyxFQUFFO0FBQUEsTUFDckQsQ0FBQztBQUNELFlBQU0sY0FBYyxTQUFTLE9BQU8sVUFBVSxFQUFFLE9BQU8sU0FBUztBQUNoRSxhQUFPO0FBQUEsUUFDTCxHQUFHO0FBQUEsUUFDSCxTQUFTLEVBQUUsR0FBRyxNQUFNLFNBQVMsUUFBUSxFQUFFLEdBQUcsTUFBTSxRQUFRLFFBQVEsU0FBUyxFQUFFO0FBQUEsUUFDM0UsSUFBSSxFQUFFLEdBQUcsTUFBTSxJQUFJLGVBQWUsWUFBWTtBQUFBLE1BQ2hEO0FBQUEsSUFDRjtBQUFBLElBRUEsS0FBSyxnQkFBZ0I7QUFDbkIsWUFBTSxXQUFXLE1BQU0sUUFBUSxPQUFPLFNBQVMsSUFBSSxDQUFDLEdBQUcsT0FBTztBQUM1RCxZQUFJLE9BQU8sT0FBTyxXQUFZLFFBQU87QUFDckMsZUFBTyxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsT0FBTyxJQUFJLENBQUMsR0FBRyxPQUFPLE9BQU8sT0FBTyxXQUFXLE9BQU8sUUFBUSxDQUFDLEVBQUU7QUFBQSxNQUM1RixDQUFDO0FBQ0QsYUFBTyxFQUFFLEdBQUcsT0FBTyxTQUFTLEVBQUUsR0FBRyxNQUFNLFNBQVMsUUFBUSxFQUFFLEdBQUcsTUFBTSxRQUFRLFFBQVEsU0FBUyxFQUFFLEVBQUU7QUFBQSxJQUNsRztBQUFBLElBRUEsS0FBSyxnQkFBZ0I7QUFDbkIsWUFBTSxhQUFhLE1BQU0sUUFBUSxPQUFPLFNBQVMsT0FBTyxVQUFVLEdBQUcsT0FBTyxPQUFPLFFBQVEsR0FBRztBQUM5RixZQUFNLFdBQVcsTUFBTSxRQUFRLE9BQU8sU0FBUyxJQUFJLENBQUMsR0FBRyxPQUFPO0FBQzVELFlBQUksT0FBTyxPQUFPLFdBQVksUUFBTztBQUNyQyxlQUFPLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxPQUFPLE9BQU8sQ0FBQyxHQUFHLE9BQU8sT0FBTyxPQUFPLFFBQVEsRUFBRTtBQUFBLE1BQzVFLENBQUM7QUFDRCxZQUFNLE9BQU8sRUFBRSxHQUFHLE1BQU0sUUFBUSxLQUFLO0FBQ3JDLFVBQUksV0FBWSxRQUFPLEtBQUssVUFBVTtBQUN0QyxZQUFNLFNBQVMsS0FBSyxJQUFJLE1BQU0sR0FBRyxlQUFlLEtBQUssSUFBSSxJQUFJLFNBQVMsT0FBTyxVQUFVLEVBQUUsT0FBTyxTQUFTLENBQUMsQ0FBQztBQUMzRyxhQUFPO0FBQUEsUUFDTCxHQUFHO0FBQUEsUUFDSCxTQUFTLEVBQUUsR0FBRyxNQUFNLFNBQVMsUUFBUSxFQUFFLEdBQUcsTUFBTSxRQUFRLFFBQVEsU0FBUyxHQUFHLEtBQUs7QUFBQSxRQUNqRixJQUFJLEVBQUUsR0FBRyxNQUFNLElBQUksZUFBZSxPQUFPO0FBQUEsTUFDM0M7QUFBQSxJQUNGO0FBQUEsSUFFQSxLQUFLLG1CQUFtQjtBQUN0QixZQUFNLFdBQVcsTUFBTSxRQUFRLE9BQU8sU0FBUyxJQUFJLENBQUMsR0FBRyxPQUFPO0FBQzVELFlBQUksT0FBTyxPQUFPLFdBQVksUUFBTztBQUNyQyxjQUFNLFdBQVcsRUFBRSxPQUFPLE9BQU8sUUFBUTtBQUN6QyxZQUFJLENBQUMsU0FBVSxRQUFPO0FBQ3RCLGNBQU0sT0FBTyxVQUFVLFFBQVE7QUFDL0IsYUFBSyxNQUFNLEtBQUssTUFBTTtBQUN0QixjQUFNLFNBQVMsQ0FBQyxHQUFHLEVBQUUsTUFBTTtBQUMzQixlQUFPLE9BQU8sT0FBTyxXQUFXLEdBQUcsR0FBRyxJQUFJO0FBQzFDLGVBQU8sRUFBRSxHQUFHLEdBQUcsT0FBTztBQUFBLE1BQ3hCLENBQUM7QUFDRCxhQUFPO0FBQUEsUUFDTCxHQUFHO0FBQUEsUUFDSCxTQUFTLEVBQUUsR0FBRyxNQUFNLFNBQVMsUUFBUSxFQUFFLEdBQUcsTUFBTSxRQUFRLFFBQVEsU0FBUyxFQUFFO0FBQUEsUUFDM0UsSUFBSSxFQUFFLEdBQUcsTUFBTSxJQUFJLGVBQWUsT0FBTyxXQUFXLEVBQUU7QUFBQSxNQUN4RDtBQUFBLElBQ0Y7QUFBQSxJQUVBLEtBQUssY0FBYztBQUNqQixZQUFNLFVBQVUsTUFBTSxRQUFRLE9BQU8sU0FBUyxNQUFNLEdBQUcsZUFBZTtBQUN0RSxVQUFJLENBQUMsUUFBUyxRQUFPO0FBQ3JCLFlBQU0sU0FBUyxDQUFDLEdBQUcsUUFBUSxNQUFNO0FBQ2pDLFlBQU0sQ0FBQyxLQUFLLElBQUksT0FBTyxPQUFPLE9BQU8sTUFBTSxDQUFDO0FBQzVDLFlBQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxPQUFPLE9BQU8sS0FBSyxJQUFJLE9BQU87QUFDbEUsYUFBTyxPQUFPLFVBQVUsR0FBRyxLQUFLO0FBQ2hDLFlBQU0sV0FBVyxNQUFNLFFBQVEsT0FBTyxTQUFTO0FBQUEsUUFBSSxDQUFDLEdBQUcsTUFDckQsTUFBTSxNQUFNLEdBQUcsa0JBQWtCLEVBQUUsR0FBRyxHQUFHLE9BQU8sSUFBSTtBQUFBLE1BQ3REO0FBQ0EsYUFBTztBQUFBLFFBQ0wsR0FBRztBQUFBLFFBQ0gsU0FBUyxFQUFFLEdBQUcsTUFBTSxTQUFTLFFBQVEsRUFBRSxHQUFHLE1BQU0sUUFBUSxRQUFRLFNBQVMsRUFBRTtBQUFBLFFBQzNFLElBQUksRUFBRSxHQUFHLE1BQU0sSUFBSSxlQUFlLFNBQVM7QUFBQSxNQUM3QztBQUFBLElBQ0Y7QUFBQSxJQUVBLEtBQUs7QUFDSCxhQUFPLEVBQUUsR0FBRyxPQUFPLFNBQVMsRUFBRSxHQUFHLE1BQU0sU0FBUyxNQUFNLEVBQUUsR0FBRyxNQUFNLFFBQVEsTUFBTSxDQUFDLE9BQU8sR0FBRyxHQUFHLE9BQU8sTUFBTSxFQUFFLEVBQUU7QUFBQSxJQUVoSCxLQUFLO0FBQ0gsYUFBTyxFQUFFLEdBQUcsT0FBTyxTQUFTLEVBQUUsR0FBRyxNQUFNLFNBQVMsTUFBTSxPQUFPLEtBQUssRUFBRTtBQUFBLElBRXRFLEtBQUs7QUFDSCxhQUFPLEVBQUUsR0FBRyxPQUFPLFNBQVMsRUFBRSxHQUFHLE1BQU0sU0FBUyxVQUFVLE9BQU8sU0FBUyxFQUFFO0FBQUEsSUFFOUUsS0FBSztBQUNILGFBQU8sRUFBRSxHQUFHLE9BQU8sSUFBSSxFQUFFLEdBQUcsTUFBTSxJQUFJLGlCQUFpQixPQUFPLEtBQUssZUFBZSxHQUFHLEVBQUU7QUFBQSxJQUV6RixLQUFLO0FBQ0gsYUFBTyxFQUFFLEdBQUcsT0FBTyxJQUFJLEVBQUUsR0FBRyxNQUFNLElBQUksZUFBZSxPQUFPLElBQUksRUFBRTtBQUFBLElBRXBFLEtBQUs7QUFDSCxhQUFPLEVBQUUsR0FBRyxPQUFPLElBQUksRUFBRSxHQUFHLE1BQU0sSUFBSSxXQUFXLE9BQU8sSUFBSSxFQUFFO0FBQUEsSUFFaEUsS0FBSztBQUNILGFBQU8sRUFBRSxHQUFHLE9BQU8sSUFBSSxFQUFFLEdBQUcsTUFBTSxJQUFJLE9BQU8sT0FBTyxNQUFNLEVBQUU7QUFBQSxJQUU5RCxLQUFLO0FBQ0gsYUFBTyxFQUFFLEdBQUcsT0FBTyxPQUFPLEVBQUUsU0FBUyxPQUFPLFNBQVMsTUFBTSxPQUFPLFVBQVUsRUFBRTtBQUFBLElBRWhGLEtBQUs7QUFDSCxhQUFPLEVBQUUsR0FBRyxPQUFPLE9BQU8sS0FBSztBQUFBLElBRWpDLEtBQUssaUJBQWlCO0FBQ3BCLFlBQU0sVUFBVSxFQUFFLEdBQUcsTUFBTSxRQUFRO0FBQ25DLFVBQUksT0FBTyxLQUFLLE9BQVEsU0FBUSxTQUFTLE9BQU8sS0FBSztBQUNyRCxVQUFJLE9BQU8sS0FBSyxLQUFNLFNBQVEsT0FBTyxPQUFPLEtBQUs7QUFDakQsVUFBSSxPQUFPLEtBQUssU0FBVSxTQUFRLFdBQVcsT0FBTyxLQUFLO0FBQ3pELGFBQU8sRUFBRSxHQUFHLE9BQU8sUUFBUTtBQUFBLElBQzdCO0FBQUEsSUFFQSxLQUFLO0FBQ0gsYUFBTyxFQUFFLEdBQUcsT0FBTyxJQUFJLEVBQUUsR0FBRyxNQUFNLElBQUksYUFBYSxPQUFPLE1BQU0sRUFBRTtBQUFBLElBRXBFLEtBQUs7QUFDSCxhQUFPLEVBQUUsR0FBRyxPQUFPLElBQUksRUFBRSxHQUFHLE1BQU0sSUFBSSxhQUFhLENBQUMsTUFBTSxHQUFHLFlBQVksRUFBRTtBQUFBLElBRTdFLEtBQUssbUJBQW1CO0FBQ3RCLFlBQU0sZUFBZSxDQUFDLEdBQUksTUFBTSxRQUFRLE9BQU8sZ0JBQWdCLENBQUMsR0FBSSxPQUFPLFdBQVc7QUFDdEYsYUFBTyxFQUFFLEdBQUcsT0FBTyxTQUFTLEVBQUUsR0FBRyxNQUFNLFNBQVMsUUFBUSxFQUFFLEdBQUcsTUFBTSxRQUFRLFFBQVEsYUFBYSxFQUFFLEVBQUU7QUFBQSxJQUN0RztBQUFBLElBRUEsS0FBSyxzQkFBc0I7QUFDekIsWUFBTSxnQkFBZ0IsTUFBTSxRQUFRLE9BQU8sZ0JBQWdCLENBQUMsR0FBRztBQUFBLFFBQUksQ0FBQyxHQUFHLE1BQ3JFLE1BQU0sT0FBTyxNQUFNLE9BQU8sY0FBYztBQUFBLE1BQzFDO0FBQ0EsYUFBTyxFQUFFLEdBQUcsT0FBTyxTQUFTLEVBQUUsR0FBRyxNQUFNLFNBQVMsUUFBUSxFQUFFLEdBQUcsTUFBTSxRQUFRLFFBQVEsYUFBYSxFQUFFLEVBQUU7QUFBQSxJQUN0RztBQUFBLElBRUEsS0FBSyxzQkFBc0I7QUFDekIsWUFBTSxnQkFBZ0IsTUFBTSxRQUFRLE9BQU8sZ0JBQWdCLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxNQUFNLE1BQU0sT0FBTyxHQUFHO0FBQ2hHLGFBQU8sRUFBRSxHQUFHLE9BQU8sU0FBUyxFQUFFLEdBQUcsTUFBTSxTQUFTLFFBQVEsRUFBRSxHQUFHLE1BQU0sUUFBUSxRQUFRLGNBQWMsYUFBYSxTQUFTLGVBQWUsT0FBVSxFQUFFLEVBQUU7QUFBQSxJQUN0SjtBQUFBLElBRUE7QUFDRSxhQUFPO0FBQUEsRUFDWDtBQUNGO0FBU08sSUFBTSxnQkFBZ0IsY0FBa0MsSUFBcUM7QUFFN0YsU0FBUyxZQUFZO0FBQzFCLFNBQU8sV0FBVyxhQUFhO0FBQ2pDOzs7QUV2UUEsZUFBc0IsYUFBb0M7QUFDeEQsUUFBTSxPQUFPLE1BQU0sTUFBTSxrQkFBa0I7QUFDM0MsU0FBTyxLQUFLLEtBQUs7QUFDbkI7QUFFQSxlQUFzQixXQUFXLFNBQTZDO0FBQzVFLFFBQU0sT0FBTyxNQUFNLE1BQU0sb0JBQW9CO0FBQUEsSUFDM0MsUUFBUTtBQUFBLElBQ1IsU0FBUyxFQUFFLGdCQUFnQixtQkFBbUI7QUFBQSxJQUM5QyxNQUFNLEtBQUssVUFBVSxPQUFPO0FBQUEsRUFDOUIsQ0FBQztBQUNELFNBQU8sS0FBSyxLQUFLO0FBQ25COzs7QUNoQ0EsU0FBUyxVQUFVLFFBQVEsV0FBVyxtQkFBbUI7QUFDekQ7QUFBQSxFQUNFO0FBQUEsRUFBUTtBQUFBLEVBQUc7QUFBQSxFQUFNO0FBQUEsRUFBSztBQUFBLEVBQVU7QUFBQSxFQUNoQztBQUFBLEVBQU07QUFBQSxPQUNEO0FBeUhELFNBQ0UsS0FERjtBQTlHQyxTQUFTLE9BQU8sRUFBRSxRQUFBQyxRQUFPLEdBQVU7QUFDeEMsUUFBTSxFQUFFLE9BQU8sU0FBUyxJQUFJLFVBQVU7QUFDdEMsUUFBTSxTQUFTLE1BQU0sR0FBRyxVQUFVO0FBQ2xDLFFBQU0sQ0FBQyxRQUFRLFNBQVMsSUFBSSxTQUFTLEtBQUs7QUFDMUMsUUFBTSxDQUFDLFlBQVksYUFBYSxJQUFJLFNBQVMsS0FBSztBQUNsRCxRQUFNLFlBQVksT0FBeUIsSUFBSTtBQUMvQyxRQUFNLGVBQWUsT0FBeUIsSUFBSTtBQUVsRCxRQUFNLGFBQWEsQ0FBQyxVQUFVLE1BQU0sUUFBUSxNQUFNLE9BQU87QUFDekQsUUFBTSxPQUFjLENBQUMsVUFBVSxRQUFRLFVBQVU7QUFHakQsWUFBVSxNQUFNO0FBQ2QsUUFBSSxZQUFZO0FBQ2QsaUJBQVcsTUFBTSxVQUFVLFNBQVMsTUFBTSxHQUFHLEVBQUU7QUFBQSxJQUNqRDtBQUFBLEVBQ0YsR0FBRyxDQUFDLFVBQVUsQ0FBQztBQUdmLFlBQVUsTUFBTTtBQUNkLFFBQUksQ0FBQyxXQUFZO0FBQ2pCLFVBQU0sVUFBVSxDQUFDLE1BQXFCO0FBQ3BDLFVBQUksRUFBRSxRQUFRLFVBQVU7QUFDdEIsc0JBQWMsS0FBSztBQUNuQixpQkFBUyxFQUFFLE1BQU0sY0FBYyxPQUFPLEdBQUcsQ0FBQztBQUFBLE1BQzVDO0FBQUEsSUFDRjtBQUNBLGFBQVMsaUJBQWlCLFdBQVcsT0FBTztBQUM1QyxXQUFPLE1BQU0sU0FBUyxvQkFBb0IsV0FBVyxPQUFPO0FBQUEsRUFDOUQsR0FBRyxDQUFDLFlBQVksUUFBUSxDQUFDO0FBRXpCLFFBQU0sY0FBYyxNQUFNO0FBQ3hCLFVBQU0sT0FBTyxTQUFTLFVBQVU7QUFDaEMsYUFBUyxFQUFFLE1BQU0sYUFBYSxPQUFPLEtBQUssQ0FBQztBQUMzQyxRQUFJLFNBQVMsUUFBUTtBQUNuQixlQUFTLGdCQUFnQixhQUFhLGNBQWMsTUFBTTtBQUFBLElBQzVELE9BQU87QUFDTCxlQUFTLGdCQUFnQixnQkFBZ0IsWUFBWTtBQUFBLElBQ3ZEO0FBQ0EsaUJBQWEsUUFBUSxnQkFBZ0IsSUFBSTtBQUFBLEVBQzNDO0FBRUEsUUFBTSxhQUFhLFlBQVksWUFBWTtBQUN6QyxjQUFVLElBQUk7QUFDZCxRQUFJO0FBQ0YsWUFBTSxTQUFTLE1BQU0sV0FBVztBQUFBLFFBQzlCLFFBQVEsTUFBTSxRQUFRO0FBQUEsUUFDdEIsTUFBTSxNQUFNLFFBQVE7QUFBQSxRQUNwQixVQUFVLE1BQU0sUUFBUTtBQUFBLE1BQzFCLENBQUM7QUFDRCxVQUFJLE9BQU8sSUFBSTtBQUNiLGlCQUFTLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDMUIsaUJBQVMsRUFBRSxNQUFNLGNBQWMsU0FBUyxVQUFVLE9BQU8sV0FBVyxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsSUFBSSxXQUFXLFVBQVUsQ0FBQztBQUFBLE1BQzlHLE9BQU87QUFDTCxpQkFBUyxFQUFFLE1BQU0sY0FBYyxVQUFVLE9BQU8sVUFBVSxDQUFDLGFBQWEsR0FBRyxLQUFLLElBQUksR0FBRyxXQUFXLFFBQVEsQ0FBQztBQUFBLE1BQzdHO0FBQUEsSUFDRixTQUFTLEdBQUc7QUFDVixlQUFTLEVBQUUsTUFBTSxjQUFjLFNBQVMsZ0JBQWdCLENBQUMsSUFBSSxXQUFXLFFBQVEsQ0FBQztBQUFBLElBQ25GO0FBQ0EsY0FBVSxLQUFLO0FBQUEsRUFDakIsR0FBRyxDQUFDLE1BQU0sU0FBUyxRQUFRLENBQUM7QUFFNUIsUUFBTSxlQUFlLE1BQU07QUFDekIsVUFBTSxPQUFPLEVBQUUsUUFBUSxNQUFNLFFBQVEsUUFBUSxNQUFNLE1BQU0sUUFBUSxNQUFNLFVBQVUsTUFBTSxRQUFRLFNBQVM7QUFDeEcsVUFBTSxPQUFPLElBQUksS0FBSyxDQUFDLEtBQUssVUFBVSxNQUFNLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25GLFVBQU0sTUFBTSxJQUFJLGdCQUFnQixJQUFJO0FBQ3BDLFVBQU0sSUFBSSxTQUFTLGNBQWMsR0FBRztBQUNwQyxNQUFFLE9BQU87QUFDVCxNQUFFLFdBQVcsR0FBR0EsUUFBTyxRQUFRLFVBQVU7QUFDekMsTUFBRSxNQUFNO0FBQ1IsUUFBSSxnQkFBZ0IsR0FBRztBQUN2QixhQUFTLEVBQUUsTUFBTSxjQUFjLFNBQVMsbUJBQW1CLFdBQVcsVUFBVSxDQUFDO0FBQUEsRUFDbkY7QUFFQSxRQUFNLGVBQWUsQ0FBQyxNQUEyQztBQUMvRCxVQUFNLE9BQU8sRUFBRSxPQUFPLFFBQVEsQ0FBQztBQUMvQixRQUFJLENBQUMsS0FBTTtBQUNYLFVBQU0sU0FBUyxJQUFJLFdBQVc7QUFDOUIsV0FBTyxTQUFTLENBQUMsT0FBTztBQUN0QixVQUFJO0FBQ0YsY0FBTSxPQUFPLEtBQUssTUFBTSxHQUFHLFFBQVEsTUFBZ0I7QUFDbkQsaUJBQVMsRUFBRSxNQUFNLGlCQUFpQixLQUFLLENBQUM7QUFDeEMsaUJBQVMsRUFBRSxNQUFNLGNBQWMsU0FBUyxtQkFBbUIsV0FBVyxVQUFVLENBQUM7QUFBQSxNQUNuRixRQUFRO0FBQ04saUJBQVMsRUFBRSxNQUFNLGNBQWMsU0FBUyxxQkFBcUIsV0FBVyxRQUFRLENBQUM7QUFBQSxNQUNuRjtBQUFBLElBQ0Y7QUFDQSxXQUFPLFdBQVcsSUFBSTtBQUN0QixNQUFFLE9BQU8sUUFBUTtBQUFBLEVBQ25CO0FBR0EsWUFBVSxNQUFNO0FBQ2QsVUFBTSxVQUFVLENBQUMsTUFBcUI7QUFDcEMsV0FBSyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsUUFBUSxLQUFLO0FBQzdDLFVBQUUsZUFBZTtBQUNqQixtQkFBVztBQUFBLE1BQ2I7QUFDQSxXQUFLLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxRQUFRLEtBQUs7QUFDN0MsVUFBRSxlQUFlO0FBQ2pCLHNCQUFjLElBQUk7QUFBQSxNQUNwQjtBQUFBLElBQ0Y7QUFDQSxhQUFTLGlCQUFpQixXQUFXLE9BQU87QUFDNUMsV0FBTyxNQUFNLFNBQVMsb0JBQW9CLFdBQVcsT0FBTztBQUFBLEVBQzlELEdBQUcsQ0FBQyxVQUFVLENBQUM7QUFFZixTQUNFLHFCQUFDLFlBQU8sV0FBVSxpQkFFaEI7QUFBQSx5QkFBQyxTQUFJLFdBQVUsZ0JBQ2I7QUFBQSwwQkFBQyxXQUFRLE1BQU0sSUFBSSxhQUFhLEtBQUssT0FBTyxFQUFFLE9BQU8sZ0JBQWdCLEdBQUc7QUFBQSxNQUN4RSxvQkFBQyxVQUFLLFdBQVUsZ0JBQWUsb0JBQU07QUFBQSxNQUNyQyxvQkFBQyxVQUFLLFdBQVUsZUFBZSxVQUFBQSxRQUFPLE1BQUs7QUFBQSxPQUM3QztBQUFBLElBR0Esb0JBQUMsU0FBSSxXQUFVLGVBQ1osZUFBSyxJQUFJLENBQUMsUUFDVDtBQUFBLE1BQUM7QUFBQTtBQUFBLFFBRUMsV0FBVyxrQkFBa0IsTUFBTSxHQUFHLGNBQWMsTUFBTSxZQUFZLEVBQUU7QUFBQSxRQUN4RSxTQUFTLE1BQU0sU0FBUyxFQUFFLE1BQU0sV0FBVyxJQUFJLENBQUM7QUFBQSxRQUUvQyxjQUFJLE9BQU8sQ0FBQyxFQUFFLFlBQVksSUFBSSxJQUFJLE1BQU0sQ0FBQztBQUFBO0FBQUEsTUFKckM7QUFBQSxJQUtQLENBQ0QsR0FDSDtBQUFBLElBR0EscUJBQUMsU0FBSSxXQUFVLGtCQUVaO0FBQUEsbUJBQ0MscUJBQUMsU0FBSSxXQUFVLDBCQUNiO0FBQUEsNEJBQUMsVUFBTyxNQUFNLElBQUksT0FBTyxFQUFFLE9BQU8sd0JBQXdCLFlBQVksRUFBRSxHQUFHO0FBQUEsUUFDM0U7QUFBQSxVQUFDO0FBQUE7QUFBQSxZQUNDLEtBQUs7QUFBQSxZQUNMLE1BQUs7QUFBQSxZQUNMLGFBQVk7QUFBQSxZQUNaLE9BQU8sTUFBTSxHQUFHO0FBQUEsWUFDaEIsVUFBVSxDQUFDLE1BQU0sU0FBUyxFQUFFLE1BQU0sY0FBYyxPQUFPLEVBQUUsT0FBTyxNQUFNLENBQUM7QUFBQTtBQUFBLFFBQ3pFO0FBQUEsUUFDQTtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0MsV0FBVTtBQUFBLFlBQ1YsU0FBUyxNQUFNO0FBQUUsNEJBQWMsS0FBSztBQUFHLHVCQUFTLEVBQUUsTUFBTSxjQUFjLE9BQU8sR0FBRyxDQUFDO0FBQUEsWUFBRTtBQUFBLFlBRW5GLDhCQUFDLEtBQUUsTUFBTSxJQUFJO0FBQUE7QUFBQSxRQUNmO0FBQUEsU0FDRixJQUVBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDQyxXQUFVO0FBQUEsVUFDVixTQUFTLE1BQU0sY0FBYyxJQUFJO0FBQUEsVUFDakMsT0FBTTtBQUFBLFVBRU4sOEJBQUMsVUFBTyxNQUFNLElBQUk7QUFBQTtBQUFBLE1BQ3BCO0FBQUEsTUFHRixvQkFBQyxTQUFJLFdBQVUsb0JBQW1CO0FBQUEsTUFHbEMsb0JBQUMsWUFBTyxXQUFVLG1CQUFrQixTQUFTLGFBQWEsT0FBTSxnQkFDN0QsbUJBQVMsb0JBQUMsT0FBSSxNQUFNLElBQUksSUFBSyxvQkFBQyxRQUFLLE1BQU0sSUFBSSxHQUNoRDtBQUFBLE1BRUEsb0JBQUMsU0FBSSxXQUFVLG9CQUFtQjtBQUFBLE1BR2xDO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDQyxXQUFVO0FBQUEsVUFDVixTQUFTLE1BQU0sYUFBYSxTQUFTLE1BQU07QUFBQSxVQUMzQyxPQUFNO0FBQUEsVUFFTiw4QkFBQyxVQUFPLE1BQU0sSUFBSTtBQUFBO0FBQUEsTUFDcEI7QUFBQSxNQUdBLG9CQUFDLFlBQU8sV0FBVSxtQkFBa0IsU0FBUyxjQUFjLE9BQU0saUJBQy9ELDhCQUFDLFlBQVMsTUFBTSxJQUFJLEdBQ3RCO0FBQUEsTUFFQSxvQkFBQyxTQUFJLFdBQVUsb0JBQW1CO0FBQUEsTUFHbEM7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNDLFdBQVcsa0JBQWtCLGFBQWEsYUFBYSxFQUFFO0FBQUEsVUFDekQsU0FBUztBQUFBLFVBQ1QsVUFBVTtBQUFBLFVBRVQ7QUFBQSwwQkFBYyxvQkFBQyxVQUFLLFdBQVUsbUJBQWtCO0FBQUEsWUFDakQsb0JBQUMsUUFBSyxNQUFNLElBQUk7QUFBQSxZQUNoQixvQkFBQyxVQUFNLG1CQUFTLGNBQWMsUUFBTztBQUFBO0FBQUE7QUFBQSxNQUN2QztBQUFBLE9BQ0Y7QUFBQSxJQUVBLG9CQUFDLFdBQU0sS0FBSyxjQUFjLE1BQUssUUFBTyxRQUFPLFNBQVEsT0FBTyxFQUFFLFNBQVMsT0FBTyxHQUFHLFVBQVUsY0FBYztBQUFBLEtBQzNHO0FBRUo7OztBQ3hNUSxTQVFFLFVBTEYsT0FBQUMsTUFIQSxRQUFBQyxhQUFBO0FBWEQsU0FBUyxTQUFTO0FBQ3ZCLFFBQU0sRUFBRSxNQUFNLElBQUksVUFBVTtBQUU1QixRQUFNLGFBQWEsQ0FBQyxVQUFVLE1BQU0sUUFBUSxNQUFNLE9BQU87QUFDekQsUUFBTSxlQUFlLE1BQU0sUUFBUSxPQUFPLFNBQVM7QUFDbkQsUUFBTSxhQUFhLE1BQU0sUUFBUSxPQUFPLFNBQVMsT0FBTyxDQUFDLEtBQUssTUFBTSxNQUFNLEVBQUUsT0FBTyxRQUFRLENBQUM7QUFDNUYsUUFBTSxtQkFBbUIsTUFBTSxRQUFRLE9BQU8sY0FBYyxVQUFVO0FBRXRFLFNBQ0UsZ0JBQUFBLE1BQUMsWUFBTyxXQUFVLGlCQUNoQjtBQUFBLG9CQUFBQSxNQUFDLFNBQUksV0FBVSxnQkFDYjtBQUFBLHNCQUFBQSxNQUFDLFVBQUssV0FBVSxlQUNiO0FBQUE7QUFBQSxRQUFhO0FBQUEsUUFBUyxpQkFBaUIsSUFBSSxNQUFNO0FBQUEsU0FDcEQ7QUFBQSxNQUNBLGdCQUFBRCxLQUFDLFVBQUssV0FBVSxjQUFhO0FBQUEsTUFDN0IsZ0JBQUFDLE1BQUMsVUFBSyxXQUFVLGVBQ2I7QUFBQTtBQUFBLFFBQVc7QUFBQSxRQUFPLGVBQWUsSUFBSSxNQUFNO0FBQUEsU0FDOUM7QUFBQSxNQUNDLG1CQUFtQixLQUNsQixnQkFBQUEsTUFBQSxZQUNFO0FBQUEsd0JBQUFELEtBQUMsVUFBSyxXQUFVLGNBQWE7QUFBQSxRQUM3QixnQkFBQUMsTUFBQyxVQUFLLFdBQVUsZUFDYjtBQUFBO0FBQUEsVUFBaUI7QUFBQSxVQUFNLHFCQUFxQixJQUFJLE1BQU07QUFBQSxXQUN6RDtBQUFBLFNBQ0Y7QUFBQSxNQUVELGNBQ0MsZ0JBQUFBLE1BQUEsWUFDRTtBQUFBLHdCQUFBRCxLQUFDLFVBQUssV0FBVSxjQUFhO0FBQUEsUUFDN0IsZ0JBQUFBLEtBQUMsVUFBSyxXQUFVLGtCQUFpQixxQkFBTztBQUFBLFNBQzFDO0FBQUEsT0FFSjtBQUFBLElBRUEsZ0JBQUFDLE1BQUMsU0FBSSxXQUFVLG9CQUNiO0FBQUEsc0JBQUFBLE1BQUMsVUFBSyxXQUFVLG1CQUNkO0FBQUEsd0JBQUFELEtBQUMsU0FBSSxxQkFBUTtBQUFBLFFBQU07QUFBQSxTQUNyQjtBQUFBLE1BQ0EsZ0JBQUFDLE1BQUMsVUFBSyxXQUFVLG1CQUNkO0FBQUEsd0JBQUFELEtBQUMsU0FBSSxxQkFBUTtBQUFBLFFBQU07QUFBQSxTQUNyQjtBQUFBLE1BQ0EsZ0JBQUFDLE1BQUMsVUFBSyxXQUFVLG1CQUNkO0FBQUEsd0JBQUFELEtBQUMsU0FBSSxpQkFBRztBQUFBLFFBQU07QUFBQSxTQUNoQjtBQUFBLE9BQ0Y7QUFBQSxLQUNGO0FBRUo7OztBQ2xEQSxTQUFTLFlBQUFFLFdBQVUsZUFBQUMsY0FBYSxVQUFBQyxTQUFRLGFBQUFDLGtCQUFpQjtBQUN6RDtBQUFBLEVBQ0U7QUFBQSxFQUFjO0FBQUEsRUFBTTtBQUFBLEVBQWdCO0FBQUEsRUFBUTtBQUFBLEVBQU07QUFBQSxPQUU3Qzs7O0FDSlAsU0FBUyxhQUFBQyxZQUFXLFVBQUFDLGVBQThCO0FBOEI1QyxTQUVJLE9BQUFDLE1BRkosUUFBQUMsYUFBQTtBQXBCQyxTQUFTLE1BQU0sRUFBRSxNQUFNLFNBQVMsT0FBTyxVQUFVLFFBQVEsSUFBSSxHQUFVO0FBQzVFLFFBQU0sYUFBYUYsUUFBdUIsSUFBSTtBQUU5QyxFQUFBRCxXQUFVLE1BQU07QUFDZCxRQUFJLENBQUMsS0FBTTtBQUNYLFVBQU0sVUFBVSxDQUFDLE1BQXFCO0FBQ3BDLFVBQUksRUFBRSxRQUFRLFNBQVUsU0FBUTtBQUFBLElBQ2xDO0FBQ0EsYUFBUyxpQkFBaUIsV0FBVyxPQUFPO0FBQzVDLFdBQU8sTUFBTSxTQUFTLG9CQUFvQixXQUFXLE9BQU87QUFBQSxFQUM5RCxHQUFHLENBQUMsTUFBTSxPQUFPLENBQUM7QUFFbEIsTUFBSSxDQUFDLEtBQU0sUUFBTztBQUVsQixTQUNFLGdCQUFBRTtBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0MsS0FBSztBQUFBLE1BQ0wsV0FBVTtBQUFBLE1BQ1YsU0FBUyxDQUFDLE1BQU07QUFBRSxZQUFJLEVBQUUsV0FBVyxXQUFXLFFBQVMsU0FBUTtBQUFBLE1BQUU7QUFBQSxNQUVqRSwwQkFBQUMsTUFBQyxTQUFJLFdBQVUsU0FBUSxPQUFPLEVBQUUsTUFBTSxHQUNwQztBQUFBLHdCQUFBRCxLQUFDLFNBQUksV0FBVSxnQkFDYiwwQkFBQUEsS0FBQyxRQUFJLGlCQUFNLEdBQ2I7QUFBQSxRQUNDO0FBQUEsU0FDSDtBQUFBO0FBQUEsRUFDRjtBQUVKOzs7QURxRUkscUJBQUFFLFdBRUksT0FBQUMsTUFLRSxRQUFBQyxhQVBOO0FBbEdHLFNBQVMsY0FBYztBQUM1QixRQUFNLEVBQUUsT0FBTyxTQUFTLElBQUksVUFBVTtBQUN0QyxRQUFNLFdBQVcsTUFBTSxRQUFRLE9BQU87QUFDdEMsUUFBTSxXQUFXLE1BQU0sR0FBRztBQUUxQixRQUFNLENBQUMsV0FBVyxZQUFZLElBQUlDLFVBQVMsS0FBSztBQUNoRCxRQUFNLENBQUMsT0FBTyxRQUFRLElBQUlBLFVBQVMsRUFBRTtBQUNyQyxRQUFNLENBQUMsS0FBSyxNQUFNLElBQUlBLFVBQVMsRUFBRTtBQUNqQyxRQUFNLENBQUMsYUFBYSxjQUFjLElBQUlBLFVBQXVELElBQUk7QUFDakcsUUFBTSxDQUFDLGFBQWEsY0FBYyxJQUFJQSxVQUF3QixJQUFJO0FBQ2xFLFFBQU0sQ0FBQyxhQUFhLGNBQWMsSUFBSUEsVUFBUyxFQUFFO0FBQ2pELFFBQU0sWUFBWUMsUUFBeUIsSUFBSTtBQUMvQyxRQUFNLGlCQUFpQkEsUUFBdUIsSUFBSTtBQUdsRCxRQUFNLENBQUMsU0FBUyxVQUFVLElBQUlELFVBQXdCLElBQUk7QUFDMUQsUUFBTSxDQUFDLFlBQVksYUFBYSxJQUFJQSxVQUF3QixJQUFJO0FBQ2hFLFFBQU0sQ0FBQyxZQUFZLGFBQWEsSUFBSUEsVUFBd0IsSUFBSTtBQUVoRSxRQUFNLGVBQWUsTUFBTTtBQUN6QixhQUFTLEVBQUU7QUFDWCxXQUFPLEVBQUU7QUFDVCxpQkFBYSxJQUFJO0FBQUEsRUFDbkI7QUFFQSxRQUFNLGFBQWEsTUFBTTtBQUN2QixVQUFNLGVBQWUsTUFBTSxLQUFLO0FBQ2hDLFFBQUksQ0FBQyxhQUFjO0FBQ25CLFVBQU0sYUFBYSxJQUFJLEtBQUssS0FBSyxZQUFZLFlBQVk7QUFDekQsYUFBUyxFQUFFLE1BQU0sZUFBZSxTQUFTLEVBQUUsS0FBSyxZQUFZLE9BQU8sY0FBYyxRQUFRLENBQUMsRUFBRSxFQUFFLENBQUM7QUFDL0YsaUJBQWEsS0FBSztBQUFBLEVBQ3BCO0FBRUEsUUFBTSxrQkFBa0IsQ0FBQyxRQUFnQjtBQUN2QyxVQUFNLFdBQVcsU0FBUyxHQUFHO0FBQzdCLFFBQUksQ0FBQyxTQUFVO0FBQ2YsVUFBTSxPQUFPLFVBQVUsUUFBUTtBQUMvQixTQUFLLE1BQU0sS0FBSyxNQUFNO0FBQ3RCLFNBQUssUUFBUSxLQUFLLFFBQVE7QUFDMUIsYUFBUyxFQUFFLE1BQU0sZUFBZSxTQUFTLEtBQUssQ0FBQztBQUMvQyxtQkFBZSxJQUFJO0FBQUEsRUFDckI7QUFFQSxRQUFNLGVBQWUsQ0FBQyxRQUFnQjtBQUNwQyxhQUFTLEVBQUUsTUFBTSxrQkFBa0IsSUFBSSxDQUFDO0FBQ3hDLG1CQUFlLElBQUk7QUFBQSxFQUNyQjtBQUVBLFFBQU0sb0JBQW9CLENBQUMsUUFBZ0I7QUFDekMsbUJBQWUsR0FBRztBQUNsQixtQkFBZSxTQUFTLEdBQUcsRUFBRSxLQUFLO0FBQ2xDLG1CQUFlLElBQUk7QUFDbkIsZUFBVyxNQUFNLFVBQVUsU0FBUyxNQUFNLEdBQUcsRUFBRTtBQUFBLEVBQ2pEO0FBRUEsUUFBTSxxQkFBcUIsTUFBTTtBQUMvQixRQUFJLGdCQUFnQixLQUFNO0FBQzFCLFVBQU0sVUFBVSxZQUFZLEtBQUs7QUFDakMsUUFBSSxXQUFXLFlBQVksU0FBUyxXQUFXLEVBQUUsT0FBTztBQUN0RCxlQUFTO0FBQUEsUUFDUCxNQUFNO0FBQUEsUUFDTixLQUFLO0FBQUEsUUFDTCxTQUFTLEVBQUUsR0FBRyxTQUFTLFdBQVcsR0FBRyxPQUFPLFFBQVE7QUFBQSxNQUN0RCxDQUFDO0FBQUEsSUFDSDtBQUNBLG1CQUFlLElBQUk7QUFBQSxFQUNyQjtBQUdBLEVBQUFFLFdBQVUsTUFBTTtBQUNkLFFBQUksQ0FBQyxZQUFhO0FBQ2xCLFVBQU0sVUFBVSxDQUFDLE1BQWtCO0FBQ2pDLFVBQUksZUFBZSxXQUFXLENBQUMsZUFBZSxRQUFRLFNBQVMsRUFBRSxNQUFjLEdBQUc7QUFDaEYsdUJBQWUsSUFBSTtBQUFBLE1BQ3JCO0FBQUEsSUFDRjtBQUNBLGFBQVMsaUJBQWlCLGFBQWEsT0FBTztBQUM5QyxXQUFPLE1BQU0sU0FBUyxvQkFBb0IsYUFBYSxPQUFPO0FBQUEsRUFDaEUsR0FBRyxDQUFDLFdBQVcsQ0FBQztBQUdoQixRQUFNLGNBQWNDLGFBQVksQ0FBQyxRQUFnQjtBQUFFLGVBQVcsR0FBRztBQUFBLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDeEUsUUFBTSxZQUFZQSxhQUFZLE1BQU07QUFBRSxlQUFXLElBQUk7QUFBRyxrQkFBYyxJQUFJO0FBQUEsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNqRixRQUFNLGFBQWFBLGFBQVksQ0FBQyxHQUFvQixRQUFnQjtBQUNsRSxNQUFFLGVBQWU7QUFDakIsTUFBRSxhQUFhLGFBQWE7QUFDNUIsa0JBQWMsR0FBRztBQUFBLEVBQ25CLEdBQUcsQ0FBQyxDQUFDO0FBQ0wsUUFBTSxTQUFTQSxhQUFZLENBQUMsR0FBb0IsVUFBa0I7QUFDaEUsTUFBRSxlQUFlO0FBQ2pCLFFBQUksWUFBWSxRQUFRLFlBQVksT0FBTztBQUN6QyxlQUFTLEVBQUUsTUFBTSxnQkFBZ0IsTUFBTSxTQUFTLElBQUksTUFBTSxDQUFDO0FBQUEsSUFDN0Q7QUFDQSxlQUFXLElBQUk7QUFDZixrQkFBYyxJQUFJO0FBQUEsRUFDcEIsR0FBRyxDQUFDLFNBQVMsUUFBUSxDQUFDO0FBRXRCLFNBQ0UsZ0JBQUFKLE1BQUFGLFdBQUEsRUFDRTtBQUFBLG9CQUFBQyxLQUFDLFNBQUksV0FBVSx5QkFDYiwwQkFBQUEsS0FBQyxVQUFLLFdBQVUsd0JBQXVCLHNCQUFRLEdBQ2pEO0FBQUEsSUFFQSxnQkFBQUEsS0FBQyxTQUFJLFdBQVUsdUJBQ1osbUJBQVMsSUFBSSxDQUFDLEdBQUcsTUFDaEIsZ0JBQUFDO0FBQUEsTUFBQztBQUFBO0FBQUEsUUFFQyxXQUFXLGVBQWUsTUFBTSxXQUFXLFlBQVksRUFBRTtBQUFBLFFBQ3pELFNBQVMsTUFBTSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsS0FBSyxFQUFFLENBQUM7QUFBQSxRQUMxRCxjQUFjLE1BQU0sY0FBYyxDQUFDO0FBQUEsUUFDbkMsY0FBYyxNQUFNLGNBQWMsSUFBSTtBQUFBLFFBQ3RDLFdBQVM7QUFBQSxRQUNULGFBQWEsTUFBTSxZQUFZLENBQUM7QUFBQSxRQUNoQztBQUFBLFFBQ0EsWUFBWSxDQUFDLE1BQU0sV0FBVyxHQUFHLENBQUM7QUFBQSxRQUNsQyxRQUFRLENBQUMsTUFBTSxPQUFPLEdBQUcsQ0FBQztBQUFBLFFBQzFCLE9BQU87QUFBQSxVQUNMLFNBQVMsWUFBWSxJQUFJLE1BQU07QUFBQSxVQUMvQixnQkFBZ0IsZUFBZSxLQUFLLFlBQVksSUFBSSxrQkFBa0I7QUFBQSxRQUN4RTtBQUFBLFFBRUE7QUFBQSwwQkFBQUQsS0FBQyxVQUFLLFdBQVcsY0FBYyxlQUFlLElBQUksYUFBYSxFQUFFLElBQy9ELDBCQUFBQSxLQUFDLGdCQUFhLE1BQU0sSUFBSSxHQUMxQjtBQUFBLFVBRUMsZ0JBQWdCLElBQ2YsZ0JBQUFBO0FBQUEsWUFBQztBQUFBO0FBQUEsY0FDQyxLQUFLO0FBQUEsY0FDTCxXQUFVO0FBQUEsY0FDVixPQUFPO0FBQUEsY0FDUCxVQUFVLENBQUMsTUFBTSxlQUFlLEVBQUUsT0FBTyxLQUFLO0FBQUEsY0FDOUMsUUFBUTtBQUFBLGNBQ1IsV0FBVyxDQUFDLE1BQU07QUFDaEIsb0JBQUksRUFBRSxRQUFRLFFBQVMsb0JBQW1CO0FBQzFDLG9CQUFJLEVBQUUsUUFBUSxTQUFVLGdCQUFlLElBQUk7QUFBQSxjQUM3QztBQUFBLGNBQ0EsU0FBUyxDQUFDLE1BQU0sRUFBRSxnQkFBZ0I7QUFBQTtBQUFBLFVBQ3BDLElBRUEsZ0JBQUFBLEtBQUMsVUFBSyxXQUFVLGlCQUFpQixZQUFFLFNBQVMsWUFBVztBQUFBLFVBR3pELGdCQUFBQSxLQUFDLFVBQUssV0FBVSxpQkFBaUIsWUFBRSxPQUFPLFFBQU87QUFBQSxVQUVqRCxnQkFBQUE7QUFBQSxZQUFDO0FBQUE7QUFBQSxjQUNDLFdBQVcsbUJBQW1CLGVBQWUsSUFBSSxhQUFhLEVBQUU7QUFBQSxjQUNoRSxTQUFTLENBQUMsTUFBTTtBQUNkLGtCQUFFLGdCQUFnQjtBQUNsQixzQkFBTSxPQUFRLEVBQUUsY0FBOEIsc0JBQXNCO0FBQ3BFLCtCQUFlLEVBQUUsS0FBSyxHQUFHLEdBQUcsS0FBSyxRQUFRLEdBQUcsR0FBRyxLQUFLLElBQUksQ0FBQztBQUFBLGNBQzNEO0FBQUEsY0FFQSwwQkFBQUEsS0FBQyxrQkFBZSxNQUFNLElBQUk7QUFBQTtBQUFBLFVBQzVCO0FBQUE7QUFBQTtBQUFBLE1BL0NLLEVBQUUsTUFBTTtBQUFBLElBZ0RmLENBQ0QsR0FDSDtBQUFBLElBRUEsZ0JBQUFDLE1BQUMsWUFBTyxXQUFVLG1CQUFrQixTQUFTLGNBQzNDO0FBQUEsc0JBQUFELEtBQUMsUUFBSyxNQUFNLElBQUk7QUFBQSxNQUFFO0FBQUEsT0FDcEI7QUFBQSxJQUdDLGVBQ0MsZ0JBQUFDO0FBQUEsTUFBQztBQUFBO0FBQUEsUUFDQyxLQUFLO0FBQUEsUUFDTCxXQUFVO0FBQUEsUUFDVixPQUFPLEVBQUUsVUFBVSxTQUFTLE1BQU0sWUFBWSxHQUFHLEtBQUssWUFBWSxHQUFHLFFBQVEsS0FBSztBQUFBLFFBRWxGO0FBQUEsMEJBQUFBLE1BQUMsWUFBTyxXQUFVLHFCQUFvQixTQUFTLE1BQU0sa0JBQWtCLFlBQVksR0FBRyxHQUNwRjtBQUFBLDRCQUFBRCxLQUFDLFVBQU8sTUFBTSxJQUFJO0FBQUEsWUFBRTtBQUFBLGFBQ3RCO0FBQUEsVUFDQSxnQkFBQUMsTUFBQyxZQUFPLFdBQVUscUJBQW9CLFNBQVMsTUFBTSxnQkFBZ0IsWUFBWSxHQUFHLEdBQ2xGO0FBQUEsNEJBQUFELEtBQUMsUUFBSyxNQUFNLElBQUk7QUFBQSxZQUFFO0FBQUEsYUFDcEI7QUFBQSxVQUNBLGdCQUFBQSxLQUFDLFNBQUksV0FBVSwwQkFBeUI7QUFBQSxVQUN4QyxnQkFBQUMsTUFBQyxZQUFPLFdBQVUsNEJBQTJCLFNBQVMsTUFBTSxhQUFhLFlBQVksR0FBRyxHQUN0RjtBQUFBLDRCQUFBRCxLQUFDLFVBQU8sTUFBTSxJQUFJO0FBQUEsWUFBRTtBQUFBLGFBQ3RCO0FBQUE7QUFBQTtBQUFBLElBQ0Y7QUFBQSxJQUdGLGdCQUFBQyxNQUFDLFNBQU0sTUFBTSxXQUFXLFNBQVMsTUFBTSxhQUFhLEtBQUssR0FBRyxPQUFNLGVBQ2hFO0FBQUEsc0JBQUFBLE1BQUMsU0FBSSxXQUFVLHdCQUNiO0FBQUEsd0JBQUFBLE1BQUMsU0FBSSxXQUFVLGNBQ2I7QUFBQSwwQkFBQUQsS0FBQyxXQUFNLFdBQVUsY0FBYSxtQkFBSztBQUFBLFVBQ25DLGdCQUFBQTtBQUFBLFlBQUM7QUFBQTtBQUFBLGNBQ0MsV0FBVTtBQUFBLGNBQ1YsT0FBTztBQUFBLGNBQ1AsVUFBVSxDQUFDLE1BQU07QUFBRSx5QkFBUyxFQUFFLE9BQU8sS0FBSztBQUFHLHVCQUFPLFlBQVksRUFBRSxPQUFPLEtBQUssQ0FBQztBQUFBLGNBQUU7QUFBQSxjQUNqRixhQUFZO0FBQUEsY0FDWixXQUFTO0FBQUEsY0FDVCxXQUFXLENBQUMsTUFBTTtBQUFFLG9CQUFJLEVBQUUsUUFBUSxRQUFTLFlBQVc7QUFBQSxjQUFFO0FBQUE7QUFBQSxVQUMxRDtBQUFBLFdBQ0Y7QUFBQSxRQUNBLGdCQUFBQyxNQUFDLFNBQUksV0FBVSxjQUNiO0FBQUEsMEJBQUFELEtBQUMsV0FBTSxXQUFVLGNBQWEsaUJBQUc7QUFBQSxVQUNqQyxnQkFBQUE7QUFBQSxZQUFDO0FBQUE7QUFBQSxjQUNDLFdBQVU7QUFBQSxjQUNWLE9BQU87QUFBQSxjQUNQLFVBQVUsQ0FBQyxNQUFNLE9BQU8sRUFBRSxPQUFPLEtBQUs7QUFBQSxjQUN0QyxhQUFZO0FBQUE7QUFBQSxVQUNkO0FBQUEsV0FDRjtBQUFBLFNBQ0Y7QUFBQSxNQUNBLGdCQUFBQyxNQUFDLFNBQUksV0FBVSx5QkFDYjtBQUFBLHdCQUFBRCxLQUFDLFlBQU8sV0FBVSxpQkFBZ0IsU0FBUyxNQUFNLGFBQWEsS0FBSyxHQUFHLG9CQUFNO0FBQUEsUUFDNUUsZ0JBQUFBLEtBQUMsWUFBTyxXQUFVLGVBQWMsU0FBUyxZQUFZLGlCQUFHO0FBQUEsU0FDMUQ7QUFBQSxPQUNGO0FBQUEsS0FDRjtBQUVKOzs7QUU3TkEsU0FBUyxZQUFBTSxXQUFVLGVBQUFDLGNBQWEsVUFBQUMsU0FBUSxhQUFBQyxrQkFBaUI7QUFDekQ7QUFBQSxFQUNFLGdCQUFBQztBQUFBLEVBQWMsUUFBQUM7QUFBQSxFQUFNLGtCQUFBQztBQUFBLEVBQWdCLFVBQUFDO0FBQUEsRUFBUSxRQUFBQztBQUFBLEVBQU0sVUFBQUM7QUFBQSxFQUNsRDtBQUFBLEVBQVcsZUFBQUM7QUFBQSxFQUFhLGFBQUFDO0FBQUEsRUFDeEIsU0FBU0M7QUFBQSxFQUFXO0FBQUEsRUFBTztBQUFBLEVBQU87QUFBQSxPQUM3Qjs7O0FDTVAsSUFBTSxnQkFBZ0I7QUFBQSxFQUNwQixVQUFVO0FBQUEsRUFDVixTQUFTO0FBQUEsRUFDVCxTQUFTO0FBQUEsRUFDVCxTQUFTO0FBQ1g7QUFFTyxJQUFNLGNBQWtEO0FBQUEsRUFDN0QsTUFBTTtBQUFBLElBQ0osT0FBTztBQUFBLElBQVEsTUFBTTtBQUFBLElBQVEsVUFBVTtBQUFBLElBQ3ZDLGVBQWUsRUFBRSxVQUFVLE9BQU8sYUFBYSxJQUFJLE1BQU0sR0FBRztBQUFBLElBQzVELGFBQWEsQ0FBQyxNQUFNLEVBQUUsYUFBYSxRQUFRLGVBQWUsRUFBRSxLQUFLO0FBQUEsRUFDbkU7QUFBQSxFQUNBLFVBQVU7QUFBQSxJQUNSLE9BQU87QUFBQSxJQUFhLE1BQU07QUFBQSxJQUFjLFVBQVU7QUFBQSxJQUNsRCxlQUFlLEVBQUUsVUFBVSxPQUFPLGFBQWEsSUFBSSxNQUFNLEdBQUc7QUFBQSxJQUM1RCxhQUFhLE1BQU07QUFBQSxFQUNyQjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sT0FBTztBQUFBLElBQVUsTUFBTTtBQUFBLElBQVEsVUFBVTtBQUFBLElBQ3pDLGVBQWUsRUFBRSxVQUFVLE9BQU8sTUFBTSxHQUFHO0FBQUEsSUFDM0MsYUFBYSxNQUFNO0FBQUEsRUFDckI7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLE9BQU87QUFBQSxJQUFRLE1BQU07QUFBQSxJQUFZLFVBQVU7QUFBQSxJQUMzQyxlQUFlLEVBQUUsVUFBVSxPQUFPLE1BQU0sR0FBRztBQUFBLElBQzNDLGFBQWEsTUFBTTtBQUFBLEVBQ3JCO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxPQUFPO0FBQUEsSUFBUyxNQUFNO0FBQUEsSUFBVyxVQUFVO0FBQUEsSUFDM0MsZUFBZSxFQUFFLFNBQVMsVUFBVTtBQUFBLElBQ3BDLGFBQWEsTUFBTTtBQUFBLEVBQ3JCO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFBVSxNQUFNO0FBQUEsSUFBZSxVQUFVO0FBQUEsSUFDaEQsZUFBZSxDQUFDO0FBQUEsSUFDaEIsYUFBYSxNQUFNO0FBQUEsRUFDckI7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE9BQU87QUFBQSxJQUFVLE1BQU07QUFBQSxJQUFRLFVBQVU7QUFBQSxJQUN6QyxlQUFlLEVBQUUsU0FBUyxDQUFDLFlBQVksVUFBVSxHQUFHLFVBQVUsTUFBTTtBQUFBLElBQ3BFLGFBQWEsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEtBQUs7QUFBQSxFQUN4QztBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsT0FBTztBQUFBLElBQVMsTUFBTTtBQUFBLElBQVMsVUFBVTtBQUFBLElBQ3pDLGVBQWUsRUFBRSxVQUFVLE1BQU07QUFBQSxJQUNqQyxhQUFhLE1BQU0sY0FBYztBQUFBLEVBQ25DO0FBQUEsRUFDQSxhQUFhO0FBQUEsSUFDWCxPQUFPO0FBQUEsSUFBaUIsTUFBTTtBQUFBLElBQVUsVUFBVTtBQUFBLElBQ2xELGVBQWUsRUFBRSxLQUFLLEVBQUU7QUFBQSxJQUN4QixhQUFhLE1BQU0sQ0FBQyxjQUFjLFNBQVMsY0FBYyxTQUFTLGNBQWMsT0FBTztBQUFBLEVBQ3pGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxPQUFPO0FBQUEsSUFBUyxNQUFNO0FBQUEsSUFBUyxVQUFVO0FBQUEsSUFDekMsZUFBZSxFQUFFLFVBQVUsTUFBTTtBQUFBLElBQ2pDLGFBQWEsTUFBTTtBQUFBLEVBQ3JCO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxPQUFPO0FBQUEsSUFBUyxNQUFNO0FBQUEsSUFBUyxVQUFVO0FBQUEsSUFDekMsZUFBZSxDQUFDO0FBQUEsSUFDaEIsYUFBYSxPQUFPLEVBQUUsS0FBSyxnRUFBZ0U7QUFBQSxFQUM3RjtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0osT0FBTztBQUFBLElBQVEsTUFBTTtBQUFBLElBQWUsVUFBVTtBQUFBLElBQzlDLGVBQWUsQ0FBQztBQUFBLElBQ2hCLGlCQUFpQjtBQUFBLElBQ2pCLGFBQWEsTUFBTSxDQUFDLEVBQUUsSUFBSSxNQUFNLE1BQU0sK0JBQStCLFNBQVMsQ0FBQyxRQUFRLE9BQU8sT0FBTyxHQUFHLGNBQWMsRUFBRSxDQUFDO0FBQUEsRUFDM0g7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLE9BQU87QUFBQSxJQUFTLE1BQU07QUFBQSxJQUFVLFVBQVU7QUFBQSxJQUMxQyxlQUFlLEVBQUUsUUFBUSxDQUFDLEVBQUU7QUFBQSxJQUM1QixpQkFBaUI7QUFBQSxJQUNqQixhQUFhLE9BQU8sQ0FBQztBQUFBLEVBQ3ZCO0FBQUEsRUFDQSxhQUFhO0FBQUEsSUFDWCxPQUFPO0FBQUEsSUFBbUIsTUFBTTtBQUFBLElBQVEsVUFBVTtBQUFBLElBQ2xELGVBQWUsRUFBRSxRQUFRLENBQUMsRUFBRTtBQUFBLElBQzVCLGlCQUFpQjtBQUFBLElBQ2pCLGFBQWEsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUFBLEVBQ3hCO0FBQ0Y7QUFFTyxJQUFNLG1CQUFtQjtBQUFBLEVBQzlCLEVBQUUsS0FBSyxTQUFrQixPQUFPLFFBQVE7QUFBQSxFQUN4QyxFQUFFLEtBQUssU0FBa0IsT0FBTyxRQUFRO0FBQUEsRUFDeEMsRUFBRSxLQUFLLFlBQXFCLE9BQU8sV0FBVztBQUNoRDs7O0FDMUZPLElBQU0sa0JBQW1DO0FBQUEsRUFDOUMsRUFBRSxPQUFPLGtCQUFrQixNQUFNLFFBQVEsT0FBTyxFQUFFLEtBQUssaUJBQWlCLE9BQU8sY0FBYyxNQUFNLFFBQVEsVUFBVSxNQUFNLGFBQWEsYUFBYSxFQUFFO0FBQUEsRUFDdkosRUFBRSxPQUFPLGVBQWUsTUFBTSxjQUFjLE9BQU8sRUFBRSxLQUFLLGNBQWMsT0FBTyxhQUFhLE1BQU0sUUFBUSxVQUFVLEtBQUssRUFBRTtBQUFBLEVBQzNILEVBQUUsT0FBTyxVQUFVLE1BQU0sVUFBVSxPQUFPLEVBQUUsS0FBSyxVQUFVLE9BQU8sY0FBYyxNQUFNLGVBQWUsS0FBSyxFQUFFLEVBQUU7QUFBQSxFQUM5RyxFQUFFLE9BQU8sZUFBZSxNQUFNLFNBQVMsT0FBTyxFQUFFLEtBQUssY0FBYyxPQUFPLGVBQWUsTUFBTSxTQUFTLFVBQVUsTUFBTSxhQUFhLE1BQU0sRUFBRTtBQUFBLEVBQzdJLEVBQUUsT0FBTyxRQUFRLE1BQU0sU0FBUyxPQUFPLEVBQUUsS0FBSyxRQUFRLE9BQU8sY0FBYyxNQUFNLFFBQVEsRUFBRTtBQUFBLEVBQzNGLEVBQUUsT0FBTyxXQUFXLE1BQU0sa0JBQWtCLE9BQU8sRUFBRSxLQUFLLG1CQUFtQixPQUFPLGdCQUFnQixNQUFNLFlBQVksVUFBVSxNQUFNLGFBQWEsb0NBQW9DLEVBQUU7QUFBQSxFQUN6TCxFQUFFLE9BQU8sUUFBUSxNQUFNLGVBQWUsT0FBTyxFQUFFLEtBQUssUUFBUSxPQUFPLGtCQUFrQixNQUFNLE9BQU8sRUFBRTtBQUFBLEVBQ3BHLEVBQUUsT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEVBQUUsS0FBSyxlQUFlLE9BQU8sa0JBQWtCLE1BQU0sT0FBTyxFQUFFO0FBQUEsRUFDNUcsRUFBRSxPQUFPLFNBQVMsTUFBTSxXQUFXLE9BQU8sRUFBRSxLQUFLLGVBQWUsT0FBTyxnQkFBZ0IsTUFBTSxTQUFTLFNBQVMsV0FBVyxTQUFTLENBQUMsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFNBQVMsRUFBRSxFQUFFO0FBQzFNO0FBT08sSUFBTSxpQkFBNEI7QUFBQSxFQUN2QyxFQUFFLE1BQU0saUJBQWlCLE1BQU0sb0JBQW9CO0FBQUEsRUFDbkQsRUFBRSxNQUFNLG1CQUFtQixNQUFNLG1CQUFtQjtBQUFBLEVBQ3BELEVBQUUsTUFBTSxVQUFVLE1BQU0saUJBQWlCO0FBQUEsRUFDekMsRUFBRSxNQUFNLFNBQVMsTUFBTSxlQUFlO0FBQUEsRUFDdEMsRUFBRSxNQUFNLHNCQUFzQixNQUFNLGlCQUFpQjtBQUFBLEVBQ3JELEVBQUUsTUFBTSxxQkFBcUIsTUFBTSxtQkFBbUI7QUFBQSxFQUN0RCxFQUFFLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCO0FBQUEsRUFDbEQsRUFBRSxNQUFNLGlCQUFpQixNQUFNLG1CQUFtQjtBQUFBLEVBQ2xELEVBQUUsTUFBTSx3QkFBd0IsTUFBTSxrQkFBa0I7QUFBQSxFQUN4RCxFQUFFLE1BQU0sdUJBQXVCLE1BQU0sZ0JBQWdCO0FBQUEsRUFDckQsRUFBRSxNQUFNLHdCQUF3QixNQUFNLGtCQUFrQjtBQUFBLEVBQ3hELEVBQUUsTUFBTSxlQUFlLE1BQU0sa0JBQWtCO0FBQUEsRUFDL0MsRUFBRSxNQUFNLGdCQUFnQixNQUFNLG9CQUFvQjtBQUNwRDs7O0FDdkNBLFNBQVMsWUFBQUMsV0FBVSxVQUFBQyxTQUFRLGFBQUFDLGtCQUFpQjtBQUM1QyxTQUFTLFVBQUFDLFNBQVEsS0FBQUMsVUFBUztBQUcxQixZQUFZLFdBQVc7QUFLUCxnQkFBQUMsTUFvQ1IsUUFBQUMsYUFwQ1E7QUFIaEIsU0FBUyxVQUFVLEVBQUUsTUFBTSxPQUFPLEdBQUcsR0FBb0M7QUFDdkUsUUFBTSxXQUFXLEtBQUssT0FBTyxDQUFDLEVBQUUsWUFBWSxJQUFJLEtBQUssTUFBTSxDQUFDLEVBQUUsUUFBUSxhQUFhLENBQUMsR0FBRyxNQUFNLEVBQUUsWUFBWSxDQUFDO0FBQzVHLFFBQU0sT0FBUSxNQUFjLFFBQVE7QUFDcEMsU0FBTyxPQUFPLGdCQUFBRCxLQUFDLFFBQUssTUFBWSxJQUFLO0FBQ3ZDO0FBUU8sU0FBUyxXQUFXLEVBQUUsTUFBTSxTQUFTLFNBQVMsR0FBVTtBQUM3RCxRQUFNLENBQUMsUUFBUSxTQUFTLElBQUlFLFVBQVMsRUFBRTtBQUN2QyxRQUFNLFdBQVdDLFFBQXlCLElBQUk7QUFFOUMsRUFBQUMsV0FBVSxNQUFNO0FBQ2QsUUFBSSxNQUFNO0FBQ1IsZ0JBQVUsRUFBRTtBQUNaLGlCQUFXLE1BQU0sU0FBUyxTQUFTLE1BQU0sR0FBRyxFQUFFO0FBQUEsSUFDaEQ7QUFBQSxFQUNGLEdBQUcsQ0FBQyxJQUFJLENBQUM7QUFFVCxFQUFBQSxXQUFVLE1BQU07QUFDZCxRQUFJLENBQUMsS0FBTTtBQUNYLFVBQU0sUUFBUSxDQUFDLE1BQXFCO0FBQUUsVUFBSSxFQUFFLFFBQVEsU0FBVSxTQUFRO0FBQUEsSUFBRTtBQUN4RSxXQUFPLGlCQUFpQixXQUFXLEtBQUs7QUFDeEMsV0FBTyxNQUFNLE9BQU8sb0JBQW9CLFdBQVcsS0FBSztBQUFBLEVBQzFELEdBQUcsQ0FBQyxNQUFNLE9BQU8sQ0FBQztBQUVsQixNQUFJLENBQUMsS0FBTSxRQUFPO0FBRWxCLFFBQU0sSUFBSSxPQUFPLFlBQVk7QUFDN0IsUUFBTSxVQUFXLE9BQU8sUUFBUSxXQUFXLEVBQ3hDLE9BQU8sQ0FBQyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxJQUFJLFNBQVMsQ0FBQyxLQUFLLElBQUksTUFBTSxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFFdEYsU0FDRSxnQkFBQUosS0FBQyxTQUFJLFdBQVUsaUJBQWdCLFNBQVMsU0FDdEMsMEJBQUFDLE1BQUMsU0FBSSxXQUFVLGVBQWMsU0FBUyxDQUFDLE1BQU0sRUFBRSxnQkFBZ0IsR0FDN0Q7QUFBQSxvQkFBQUEsTUFBQyxTQUFJLFdBQVUsc0JBQ2I7QUFBQSxzQkFBQUQsS0FBQyxRQUFHLHVCQUFTO0FBQUEsTUFDYixnQkFBQUEsS0FBQyxZQUFPLFdBQVUsWUFBVyxTQUFTLFNBQVMsMEJBQUFBLEtBQUNLLElBQUEsRUFBRSxNQUFNLElBQUksR0FBRTtBQUFBLE9BQ2hFO0FBQUEsSUFDQSxnQkFBQUosTUFBQyxTQUFJLFdBQVUsc0JBQ2I7QUFBQSxzQkFBQUQsS0FBQ00sU0FBQSxFQUFPLE1BQU0sSUFBSTtBQUFBLE1BQ2xCLGdCQUFBTjtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0MsS0FBSztBQUFBLFVBQ0wsTUFBSztBQUFBLFVBQ0wsYUFBWTtBQUFBLFVBQ1osT0FBTztBQUFBLFVBQ1AsVUFBVSxDQUFDLE1BQU0sVUFBVSxFQUFFLE9BQU8sS0FBSztBQUFBO0FBQUEsTUFDM0M7QUFBQSxPQUNGO0FBQUEsSUFDQSxnQkFBQUMsTUFBQyxTQUFJLFdBQVUsb0JBQ1o7QUFBQSx1QkFBaUIsSUFBSSxDQUFDLFFBQVE7QUFDN0IsY0FBTSxRQUFRLFFBQVEsT0FBTyxDQUFDLENBQUMsRUFBRSxHQUFHLE1BQU0sSUFBSSxhQUFhLElBQUksR0FBRztBQUNsRSxZQUFJLE1BQU0sV0FBVyxFQUFHLFFBQU87QUFDL0IsZUFDRSxnQkFBQUEsTUFBQyxTQUFrQixXQUFVLHdCQUMzQjtBQUFBLDBCQUFBRCxLQUFDLFNBQUksV0FBVSw4QkFBOEIsY0FBSSxPQUFNO0FBQUEsVUFDdkQsZ0JBQUFBLEtBQUMsU0FBSSxXQUFVLG9CQUNaLGdCQUFNLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxNQUNwQixnQkFBQUM7QUFBQSxZQUFDO0FBQUE7QUFBQSxjQUVDLFdBQVU7QUFBQSxjQUNWLFNBQVMsTUFBTSxTQUFTLElBQUk7QUFBQSxjQUU1QjtBQUFBLGdDQUFBRCxLQUFDLFVBQUssV0FBVSxvQkFBbUIsMEJBQUFBLEtBQUMsYUFBVSxNQUFNLElBQUksTUFBTSxNQUFNLElBQUksR0FBRTtBQUFBLGdCQUMxRSxnQkFBQUEsS0FBQyxVQUFLLFdBQVUscUJBQXFCLGNBQUksT0FBTTtBQUFBO0FBQUE7QUFBQSxZQUwxQztBQUFBLFVBTVAsQ0FDRCxHQUNIO0FBQUEsYUFiUSxJQUFJLEdBY2Q7QUFBQSxNQUVKLENBQUM7QUFBQSxNQUNBLFFBQVEsV0FBVyxLQUNsQixnQkFBQUMsTUFBQyxTQUFJLFdBQVUscUJBQW9CO0FBQUE7QUFBQSxRQUF1QjtBQUFBLFFBQU87QUFBQSxTQUFDO0FBQUEsT0FFdEU7QUFBQSxLQUNGLEdBQ0Y7QUFFSjs7O0FDeEZBLFNBQVMsWUFBQU0sV0FBVSxVQUFBQyxTQUFRLGFBQUFDLGtCQUFpQjtBQUM1QyxTQUFTLFFBQUFDLE9BQU0sS0FBQUMsSUFBRyxXQUFXLGFBQWEsY0FBYyxrQkFBa0I7QUF5Q2hFLGdCQUFBQyxNQUlJLFFBQUFDLGFBSko7QUFuQ1YsU0FBUyxlQUFlO0FBQUEsRUFDdEI7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUNGLEdBSUc7QUFDRCxRQUFNLENBQUMsTUFBTSxPQUFPLElBQUlDLFVBQVMsS0FBSztBQUN0QyxRQUFNLE1BQU1DLFFBQXVCLElBQUk7QUFFdkMsRUFBQUMsV0FBVSxNQUFNO0FBQ2QsUUFBSSxDQUFDLEtBQU07QUFDWCxVQUFNLFVBQVUsQ0FBQyxNQUFrQjtBQUNqQyxVQUFJLElBQUksV0FBVyxDQUFDLElBQUksUUFBUSxTQUFTLEVBQUUsTUFBYyxHQUFHO0FBQzFELGdCQUFRLEtBQUs7QUFBQSxNQUNmO0FBQUEsSUFDRjtBQUNBLGFBQVMsaUJBQWlCLGFBQWEsT0FBTztBQUM5QyxXQUFPLE1BQU0sU0FBUyxvQkFBb0IsYUFBYSxPQUFPO0FBQUEsRUFDaEUsR0FBRyxDQUFDLElBQUksQ0FBQztBQUVULFFBQU0sU0FBUyxDQUFDLFFBQWdCO0FBQzlCLFFBQUksU0FBUyxTQUFTLEdBQUcsR0FBRztBQUMxQixlQUFTLFNBQVMsT0FBTyxDQUFDLE1BQU0sTUFBTSxHQUFHLENBQUM7QUFBQSxJQUM1QyxPQUFPO0FBQ0wsZUFBUyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUM7QUFBQSxJQUM3QjtBQUFBLEVBQ0Y7QUFFQSxTQUNFLGdCQUFBSCxNQUFDLFNBQUksV0FBVSxxQkFBb0IsS0FDakM7QUFBQSxvQkFBQUEsTUFBQyxZQUFPLFdBQVUsNkJBQTRCLFNBQVMsTUFBTSxRQUFRLENBQUMsSUFBSSxHQUN2RTtBQUFBLGVBQVMsV0FBVyxJQUNuQixnQkFBQUQsS0FBQyxVQUFLLFdBQVUsaUNBQWdDLDhCQUFnQixJQUVoRSxnQkFBQUEsS0FBQyxTQUFJLFdBQVUsb0JBQ1osbUJBQVMsSUFBSSxDQUFDLE1BQ2IsZ0JBQUFDLE1BQUMsVUFBYSxXQUFVLG1CQUNyQjtBQUFBO0FBQUEsUUFDRCxnQkFBQUQ7QUFBQSxVQUFDO0FBQUE7QUFBQSxZQUNDLFdBQVU7QUFBQSxZQUNWLFNBQVMsQ0FBQyxNQUFNO0FBQUUsZ0JBQUUsZ0JBQWdCO0FBQUcscUJBQU8sQ0FBQztBQUFBLFlBQUU7QUFBQSxZQUVqRCwwQkFBQUEsS0FBQ0ssSUFBQSxFQUFFLE1BQU0sSUFBSTtBQUFBO0FBQUEsUUFDZjtBQUFBLFdBUFMsQ0FRWCxDQUNELEdBQ0g7QUFBQSxNQUVGLGdCQUFBTCxLQUFDLGVBQVksTUFBTSxJQUFJLE9BQU8sRUFBRSxZQUFZLEdBQUcsT0FBTyx1QkFBdUIsR0FBRztBQUFBLE9BQ2xGO0FBQUEsSUFDQyxRQUNDLGdCQUFBQyxNQUFDLFNBQUksV0FBVSw4QkFDWjtBQUFBLGNBQVEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLFNBQVMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxLQUFLLFNBQVMsV0FBVyxRQUFRLFVBQ3hGLGdCQUFBRCxLQUFDLFNBQUksV0FBVSwyQkFBMEIsaUNBQW1CO0FBQUEsTUFFN0QsUUFBUSxJQUFJLENBQUMsTUFDWixnQkFBQUMsTUFBQyxXQUFjLFdBQVUsNEJBQ3ZCO0FBQUEsd0JBQUFEO0FBQUEsVUFBQztBQUFBO0FBQUEsWUFDQyxNQUFLO0FBQUEsWUFDTCxTQUFTLFNBQVMsU0FBUyxDQUFDO0FBQUEsWUFDNUIsVUFBVSxNQUFNLE9BQU8sQ0FBQztBQUFBO0FBQUEsUUFDMUI7QUFBQSxRQUNBLGdCQUFBQSxLQUFDLFVBQU0sYUFBRTtBQUFBLFdBTkMsQ0FPWixDQUNEO0FBQUEsT0FDSDtBQUFBLEtBRUo7QUFFSjtBQUlBLFNBQVMsZUFBZTtBQUFBLEVBQ3RCO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFDRixHQU9HO0FBQ0QsUUFBTSxDQUFDLFNBQVMsVUFBVSxJQUFJRSxVQUFTLEtBQUs7QUFDNUMsUUFBTSxjQUFjLFVBQVUsS0FBSyxDQUFDLE1BQU0sRUFBRSxRQUFRLFlBQVksR0FBRyxLQUFLO0FBRXhFLFFBQU0sbUJBQW1CLE1BQU07QUFDN0IsUUFBSSxhQUFhLFNBQVMsWUFBWSxZQUFZLFNBQVM7QUFDekQsYUFDRSxnQkFBQUQ7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNDLFdBQVU7QUFBQSxVQUNWLE9BQU8sT0FBTyxZQUFZLEdBQUcsTUFBTTtBQUFBLFVBQ25DLFVBQVUsQ0FBQyxNQUFNLFNBQVMsRUFBRSxHQUFHLGFBQWEsSUFBSSxFQUFFLEdBQUcsWUFBWSxJQUFJLFFBQVEsRUFBRSxPQUFPLE1BQU0sRUFBRSxDQUFDO0FBQUEsVUFFL0Y7QUFBQSw0QkFBQUQsS0FBQyxZQUFPLE9BQU0sSUFBRyw2QkFBZTtBQUFBLFlBQy9CLFlBQVksUUFBUSxJQUFJLENBQUMsUUFDeEIsZ0JBQUFBLEtBQUMsWUFBaUIsT0FBTyxLQUFNLGlCQUFsQixHQUFzQixDQUNwQztBQUFBO0FBQUE7QUFBQSxNQUNIO0FBQUEsSUFFSjtBQUVBLFFBQUksYUFBYSxTQUFTLFVBQVU7QUFDbEMsYUFDRSxnQkFBQUMsTUFBQyxTQUFJLFdBQVUscUJBQ2I7QUFBQSx3QkFBQUQ7QUFBQSxVQUFDO0FBQUE7QUFBQSxZQUNDLFdBQVcsa0JBQWtCLFlBQVksR0FBRyxXQUFXLFFBQVEsWUFBWSxHQUFHLFdBQVcsU0FBUyxZQUFZLEVBQUU7QUFBQSxZQUNoSCxTQUFTLE1BQU0sU0FBUyxFQUFFLEdBQUcsYUFBYSxJQUFJLEVBQUUsR0FBRyxZQUFZLElBQUksUUFBUSxLQUFLLEVBQUUsQ0FBQztBQUFBLFlBQ3BGO0FBQUE7QUFBQSxRQUVEO0FBQUEsUUFDQSxnQkFBQUE7QUFBQSxVQUFDO0FBQUE7QUFBQSxZQUNDLFdBQVcsa0JBQWtCLFlBQVksR0FBRyxXQUFXLFNBQVMsWUFBWSxHQUFHLFdBQVcsVUFBVSxZQUFZLEVBQUU7QUFBQSxZQUNsSCxTQUFTLE1BQU0sU0FBUyxFQUFFLEdBQUcsYUFBYSxJQUFJLEVBQUUsR0FBRyxZQUFZLElBQUksUUFBUSxNQUFNLEVBQUUsQ0FBQztBQUFBLFlBQ3JGO0FBQUE7QUFBQSxRQUVEO0FBQUEsU0FDRjtBQUFBLElBRUo7QUFFQSxXQUNFLGdCQUFBQTtBQUFBLE1BQUM7QUFBQTtBQUFBLFFBQ0MsV0FBVTtBQUFBLFFBQ1YsT0FBTyxPQUFPLFlBQVksR0FBRyxVQUFVLEVBQUU7QUFBQSxRQUN6QyxVQUFVLENBQUMsTUFBTSxTQUFTLEVBQUUsR0FBRyxhQUFhLElBQUksRUFBRSxHQUFHLFlBQVksSUFBSSxRQUFRLEVBQUUsT0FBTyxNQUFNLEVBQUUsQ0FBQztBQUFBLFFBQy9GLGFBQVk7QUFBQTtBQUFBLElBQ2Q7QUFBQSxFQUVKO0FBRUEsU0FDRSxnQkFBQUM7QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNDLFdBQVU7QUFBQSxNQUNWLGNBQWMsTUFBTSxXQUFXLElBQUk7QUFBQSxNQUNuQyxjQUFjLE1BQU0sV0FBVyxLQUFLO0FBQUEsTUFHcEM7QUFBQSx3QkFBQUEsTUFBQyxTQUFJLFdBQVUsa0JBQ2I7QUFBQSwwQkFBQUQsS0FBQyxVQUFLLFdBQVUsOEJBQTZCLGtCQUFJO0FBQUEsVUFDakQsZ0JBQUFDO0FBQUEsWUFBQztBQUFBO0FBQUEsY0FDQyxXQUFVO0FBQUEsY0FDVixPQUFPLFlBQVksR0FBRztBQUFBLGNBQ3RCLFVBQVUsQ0FBQyxNQUFNLFNBQVMsRUFBRSxHQUFHLGFBQWEsSUFBSSxFQUFFLEdBQUcsWUFBWSxJQUFJLE9BQU8sRUFBRSxPQUFPLE1BQU0sRUFBRSxDQUFDO0FBQUEsY0FFOUY7QUFBQSxnQ0FBQUQsS0FBQyxZQUFPLE9BQU0sSUFBRyw2QkFBZTtBQUFBLGdCQUMvQixRQUFRLElBQUksQ0FBQyxNQUFNO0FBQ2xCLHdCQUFNLElBQUksVUFBVSxLQUFLLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztBQUM3Qyx5QkFBTyxnQkFBQUEsS0FBQyxZQUFlLE9BQU8sR0FBSSxhQUFHLFNBQVMsS0FBMUIsQ0FBNEI7QUFBQSxnQkFDbEQsQ0FBQztBQUFBO0FBQUE7QUFBQSxVQUNIO0FBQUEsVUFDQSxnQkFBQUEsS0FBQyxVQUFLLFdBQVUscUJBQW9CLGdCQUFFO0FBQUEsVUFDckMsaUJBQWlCO0FBQUEsV0FDcEI7QUFBQSxRQUdBLGdCQUFBQSxLQUFDLFNBQUksV0FBVSxtQkFDYiwwQkFBQUEsS0FBQyxjQUFXLE1BQU0sSUFBSSxPQUFPLEVBQUUsT0FBTyxnQkFBZ0IsR0FBRyxHQUMzRDtBQUFBLFFBR0EsZ0JBQUFDLE1BQUMsU0FBSSxXQUFVLGtCQUNiO0FBQUEsMEJBQUFELEtBQUMsVUFBSyxXQUFVLDhCQUE2QixrQkFBSTtBQUFBLFVBQ2pELGdCQUFBQTtBQUFBLFlBQUM7QUFBQTtBQUFBLGNBQ0MsVUFBVSxZQUFZO0FBQUEsY0FDdEI7QUFBQSxjQUNBLFVBQVUsQ0FBQyxTQUFTLFNBQVMsRUFBRSxHQUFHLGFBQWEsS0FBSyxDQUFDO0FBQUE7QUFBQSxVQUN2RDtBQUFBLFdBQ0Y7QUFBQSxRQUdBLGdCQUFBQTtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0MsV0FBVyxtQkFBbUIsVUFBVSxhQUFhLEVBQUU7QUFBQSxZQUN2RCxTQUFTO0FBQUEsWUFDVCxPQUFNO0FBQUEsWUFFTiwwQkFBQUEsS0FBQ0ssSUFBQSxFQUFFLE1BQU0sSUFBSTtBQUFBO0FBQUEsUUFDZjtBQUFBO0FBQUE7QUFBQSxFQUNGO0FBRUo7QUFJTyxTQUFTLHNCQUFzQjtBQUNwQyxRQUFNLEVBQUUsT0FBTyxTQUFTLElBQUksVUFBVTtBQUN0QyxRQUFNLGVBQWUsTUFBTSxRQUFRLE9BQU8sZ0JBQWdCLENBQUM7QUFDM0QsUUFBTSxDQUFDLFVBQVUsV0FBVyxJQUFJSCxVQUFTLGFBQWEsU0FBUyxDQUFDO0FBRWhFLFFBQU0sWUFBWSxNQUFNLFFBQVEsT0FBTyxTQUFTLFFBQVEsQ0FBQyxNQUFNLEVBQUUsTUFBTTtBQUN2RSxRQUFNLFVBQVUsVUFBVSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUc7QUFFMUMsUUFBTSxpQkFBaUIsTUFBTTtBQUMzQixVQUFNLE9BQTBCO0FBQUEsTUFDOUIsSUFBSSxFQUFFLE9BQU8sUUFBUSxDQUFDLEtBQUssSUFBSSxRQUFRLEdBQUc7QUFBQSxNQUMxQyxNQUFNLENBQUM7QUFBQSxJQUNUO0FBQ0EsYUFBUyxFQUFFLE1BQU0sbUJBQW1CLGFBQWEsS0FBSyxDQUFDO0FBQ3ZELGdCQUFZLElBQUk7QUFBQSxFQUNsQjtBQUVBLE1BQUksQ0FBQyxZQUFZLGFBQWEsV0FBVyxHQUFHO0FBQzFDLFdBQ0UsZ0JBQUFGLEtBQUMsU0FBSSxXQUFVLDBCQUNiLDBCQUFBQyxNQUFDLFlBQU8sV0FBVSx1QkFBc0IsU0FBUyxnQkFDL0M7QUFBQSxzQkFBQUQsS0FBQyxhQUFVLE1BQU0sSUFBSTtBQUFBLE1BQUU7QUFBQSxPQUN6QixHQUNGO0FBQUEsRUFFSjtBQUVBLFNBQ0UsZ0JBQUFDLE1BQUMsU0FBSSxXQUFVLHdCQUNiO0FBQUEsb0JBQUFBLE1BQUMsWUFBTyxXQUFVLHVCQUFzQixTQUFTLE1BQU0sWUFBWSxDQUFDLFFBQVEsR0FDMUU7QUFBQSxzQkFBQUQsS0FBQyxhQUFVLE1BQU0sSUFBSSxPQUFPLEVBQUUsT0FBTyxnQkFBZ0IsR0FBRztBQUFBLE1BQ3hELGdCQUFBQSxLQUFDLFVBQUssV0FBVSxzQkFBcUIsK0JBQWlCO0FBQUEsTUFDckQsYUFBYSxTQUFTLEtBQ3JCLGdCQUFBQSxLQUFDLFVBQUssV0FBVSxzQkFBc0IsdUJBQWEsUUFBTztBQUFBLE1BRTNELFdBQVcsZ0JBQUFBLEtBQUMsZUFBWSxNQUFNLElBQUksSUFBSyxnQkFBQUEsS0FBQyxnQkFBYSxNQUFNLElBQUk7QUFBQSxPQUNsRTtBQUFBLElBRUMsWUFDQyxnQkFBQUMsTUFBQyxTQUFJLFdBQVUscUJBQ1o7QUFBQSxtQkFBYSxXQUFXLEtBQ3ZCLGdCQUFBRCxLQUFDLFNBQUksV0FBVSxzQkFDYiwwQkFBQUEsS0FBQyxPQUFFLDRFQUE4RCxHQUNuRTtBQUFBLE1BR0QsYUFBYSxJQUFJLENBQUMsTUFBTSxNQUN2QixnQkFBQUE7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUVDLGFBQWE7QUFBQSxVQUNiLE9BQU87QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFVBQ0EsVUFBVSxDQUFDLE1BQU0sU0FBUyxFQUFFLE1BQU0sc0JBQXNCLEtBQUssR0FBRyxhQUFhLEVBQUUsQ0FBQztBQUFBLFVBQ2hGLFVBQVUsTUFBTSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsS0FBSyxFQUFFLENBQUM7QUFBQTtBQUFBLFFBTjFEO0FBQUEsTUFPUCxDQUNEO0FBQUEsTUFFRCxnQkFBQUMsTUFBQyxZQUFPLFdBQVUsZ0JBQWUsU0FBUyxnQkFDeEM7QUFBQSx3QkFBQUQsS0FBQ00sT0FBQSxFQUFLLE1BQU0sSUFBSTtBQUFBLFFBQUU7QUFBQSxTQUNwQjtBQUFBLE9BQ0Y7QUFBQSxLQUVKO0FBRUo7OztBQ3hRQSxTQUFTLFlBQUFDLFdBQVUsYUFBQUMsa0JBQWlCO0FBQ3BDLFNBQVMsS0FBQUMsSUFBRyxVQUFVLFlBQVksbUJBQW1CLFFBQVEsVUFBQUMsU0FBUSxnQkFBQUMsZUFBYyxlQUFBQyxjQUFhLFFBQUFDLE9BQU0sVUFBQUMsZUFBYzs7O0FDRHBILFNBQVMsWUFBQUMsaUJBQWdCO0FBQ3pCLFNBQVMsUUFBQUMsT0FBTSxVQUFBQyxTQUFRLE9BQU8sZUFBQUMsY0FBYSxnQkFBQUMsZUFBYyxTQUFTLFdBQVcsV0FBVyxxQkFBcUI7QUFvRHZHLFNBQ0UsT0FBQUMsTUFERixRQUFBQyxhQUFBO0FBM0NOLFNBQVMsU0FBUztBQUNoQixTQUFPLE1BQU0sS0FBSyxPQUFPLEVBQUUsU0FBUyxFQUFFLEVBQUUsTUFBTSxHQUFHLENBQUM7QUFDcEQ7QUFFQSxTQUFTLGFBQWE7QUFBQSxFQUNwQjtBQUFBLEVBQVU7QUFBQSxFQUFPLFFBQUFDO0FBQUEsRUFBUTtBQUFBLEVBQVU7QUFDckMsR0FHRztBQUNELFFBQU0sZUFBZSxDQUFDLFFBQWdCLFVBQWtCO0FBQ3RELFVBQU0sVUFBVSxDQUFDLEdBQUcsU0FBUyxPQUFPO0FBQ3BDLFlBQVEsTUFBTSxJQUFJO0FBQ2xCLGFBQVMsRUFBRSxHQUFHLFVBQVUsUUFBUSxDQUFDO0FBQUEsRUFDbkM7QUFFQSxRQUFNLFlBQVksTUFBTTtBQUN0QixhQUFTLEVBQUUsR0FBRyxVQUFVLFNBQVMsQ0FBQyxHQUFHLFNBQVMsU0FBUyxVQUFVLFNBQVMsUUFBUSxTQUFTLENBQUMsRUFBRSxFQUFFLENBQUM7QUFBQSxFQUNuRztBQUVBLFFBQU0sZUFBZSxDQUFDLFdBQW1CO0FBQ3ZDLFVBQU0sVUFBVSxTQUFTLFFBQVEsT0FBTyxDQUFDLEdBQUcsTUFBTSxNQUFNLE1BQU07QUFDOUQsVUFBTSxlQUFlLFNBQVMsZ0JBQWdCLFFBQVEsU0FDbEQsS0FBSyxJQUFJLEdBQUcsUUFBUSxTQUFTLENBQUMsSUFDOUIsU0FBUyxlQUFlLFNBQ3RCLFNBQVMsZUFBZSxJQUN4QixTQUFTO0FBQ2YsVUFBTSxrQkFBa0IsU0FBUyxrQkFBa0IsQ0FBQyxHQUNqRCxJQUFJLFFBQU0sS0FBSyxTQUFTLEtBQUssSUFBSSxFQUFFLEVBQ25DLE9BQU8sUUFBTSxPQUFPLFVBQVUsS0FBSyxRQUFRLE1BQU07QUFDcEQsYUFBUyxFQUFFLEdBQUcsVUFBVSxTQUFTLGNBQWMsZUFBZSxDQUFDO0FBQUEsRUFDakU7QUFFQSxRQUFNLHFCQUFxQixDQUFDLFdBQW1CO0FBQzdDLFVBQU0sVUFBVSxTQUFTLGtCQUFrQixDQUFDO0FBQzVDLFVBQU0sT0FBTyxRQUFRLFNBQVMsTUFBTSxJQUNoQyxRQUFRLE9BQU8sT0FBSyxNQUFNLE1BQU0sSUFDaEMsQ0FBQyxHQUFHLFNBQVMsTUFBTSxFQUFFLEtBQUs7QUFDOUIsYUFBUyxFQUFFLEdBQUcsVUFBVSxnQkFBZ0IsTUFBTSxjQUFjLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUFBLEVBQzVFO0FBRUEsU0FDRSxnQkFBQUQsTUFBQyxTQUFJLFdBQVUsYUFDYjtBQUFBLG9CQUFBQSxNQUFDLFNBQUksV0FBVSxvQkFDYjtBQUFBLHNCQUFBRCxLQUFDLFVBQUssV0FBVSxpQkFBaUIsa0JBQVEsR0FBRTtBQUFBLE1BQzNDLGdCQUFBQTtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0MsV0FBVTtBQUFBLFVBQ1YsT0FBTyxTQUFTO0FBQUEsVUFDaEIsVUFBVSxDQUFDLE1BQU0sU0FBUyxFQUFFLEdBQUcsVUFBVSxNQUFNLEVBQUUsT0FBTyxNQUFNLENBQUM7QUFBQSxVQUMvRCxhQUFZO0FBQUE7QUFBQSxNQUNkO0FBQUEsTUFDQSxnQkFBQUEsS0FBQyxZQUFPLFdBQVUsWUFBVyxTQUFTLFVBQVUsT0FBTSxtQkFDcEQsMEJBQUFBLEtBQUNILFNBQUEsRUFBTyxNQUFNLElBQUksR0FDcEI7QUFBQSxPQUNGO0FBQUEsSUFFQ0ssUUFBTyxlQUNOLGdCQUFBRCxNQUFDLFNBQUksV0FBVSxrQkFDYjtBQUFBLHNCQUFBRCxLQUFDLGFBQVUsTUFBTSxJQUFJLE9BQU8sRUFBRSxPQUFPLHdCQUF3QixZQUFZLEVBQUUsR0FBRztBQUFBLE1BQzlFLGdCQUFBQTtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0MsV0FBVTtBQUFBLFVBQ1YsT0FBTyxTQUFTLFNBQVM7QUFBQSxVQUN6QixVQUFVLENBQUMsTUFBTSxTQUFTLEVBQUUsR0FBRyxVQUFVLE9BQU8sRUFBRSxPQUFPLFNBQVMsT0FBVSxDQUFDO0FBQUEsVUFDN0UsYUFBWTtBQUFBLFVBQ1osT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUFBO0FBQUEsTUFDbkI7QUFBQSxPQUNGO0FBQUEsSUFHRixnQkFBQUEsS0FBQyxTQUFJLFdBQVUsZ0JBQ1osbUJBQVMsUUFBUSxJQUFJLENBQUMsS0FBSyxPQUFPO0FBQ2pDLFlBQU0sWUFBWUUsUUFBTyx3QkFDcEIsU0FBUyxrQkFBa0IsQ0FBQyxHQUFHLFNBQVMsRUFBRSxJQUMzQyxTQUFTLGlCQUFpQjtBQUM5QixhQUNFLGdCQUFBRCxNQUFDLFNBQWEsV0FBVSxtQkFDdEI7QUFBQSx3QkFBQUQ7QUFBQSxVQUFDO0FBQUE7QUFBQSxZQUNDLFdBQVcsb0JBQW9CLFlBQVksV0FBVyxFQUFFO0FBQUEsWUFDeEQsU0FBUyxNQUFNO0FBQ2Isa0JBQUlFLFFBQU8sc0JBQXNCO0FBQy9CLG1DQUFtQixFQUFFO0FBQUEsY0FDdkIsT0FBTztBQUNMLHlCQUFTLEVBQUUsR0FBRyxVQUFVLGNBQWMsR0FBRyxDQUFDO0FBQUEsY0FDNUM7QUFBQSxZQUNGO0FBQUEsWUFDQSxPQUFPQSxRQUFPLHVCQUF1QixtQkFBbUI7QUFBQSxZQUV4RCwwQkFBQUYsS0FBQyxTQUFNLE1BQU0sSUFBSTtBQUFBO0FBQUEsUUFDbkI7QUFBQSxRQUNBLGdCQUFBQTtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0MsV0FBVTtBQUFBLFlBQ1YsT0FBTztBQUFBLFlBQ1AsVUFBVSxDQUFDLE1BQU0sYUFBYSxJQUFJLEVBQUUsT0FBTyxLQUFLO0FBQUEsWUFDaEQsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUFBO0FBQUEsUUFDbkI7QUFBQSxRQUNDLFNBQVMsUUFBUSxTQUFTLEtBQ3pCLGdCQUFBQSxLQUFDLFlBQU8sV0FBVSxZQUFXLFNBQVMsTUFBTSxhQUFhLEVBQUUsR0FDekQsMEJBQUFBLEtBQUNILFNBQUEsRUFBTyxNQUFNLElBQUksR0FDcEI7QUFBQSxXQXZCTSxFQXlCVjtBQUFBLElBRUosQ0FBQyxHQUNIO0FBQUEsSUFDQyxTQUFTLFFBQVEsU0FBUyxLQUN6QixnQkFBQUksTUFBQyxZQUFPLFdBQVUsbUJBQWtCLFNBQVMsV0FDM0M7QUFBQSxzQkFBQUQsS0FBQ0osT0FBQSxFQUFLLE1BQU0sSUFBSTtBQUFBLE1BQUU7QUFBQSxPQUNwQjtBQUFBLEtBR0FNLFFBQU8sY0FBY0EsUUFBTyxxQkFBcUJBLFFBQU8sZ0JBQ3hELGdCQUFBRCxNQUFDLFNBQUksV0FBVSxlQUNaO0FBQUEsTUFBQUMsUUFBTyxjQUNOLGdCQUFBRCxNQUFDLFNBQUksV0FBVSxrQkFDYjtBQUFBLHdCQUFBRCxLQUFDLGFBQVUsTUFBTSxJQUFJLE9BQU8sRUFBRSxPQUFPLHdCQUF3QixZQUFZLEVBQUUsR0FBRztBQUFBLFFBQzlFLGdCQUFBQTtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0MsV0FBVTtBQUFBLFlBQ1YsT0FBTyxTQUFTLFFBQVE7QUFBQSxZQUN4QixVQUFVLENBQUMsTUFBTSxTQUFTLEVBQUUsR0FBRyxVQUFVLE1BQU0sRUFBRSxPQUFPLFNBQVMsT0FBVSxDQUFDO0FBQUEsWUFDNUUsYUFBWTtBQUFBLFlBQ1osT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUFBO0FBQUEsUUFDbkI7QUFBQSxTQUNGO0FBQUEsTUFFREUsUUFBTyxxQkFDTixnQkFBQUQsTUFBQyxTQUFJLFdBQVUsa0JBQ2I7QUFBQSx3QkFBQUQsS0FBQyxpQkFBYyxNQUFNLElBQUksT0FBTyxFQUFFLE9BQU8sd0JBQXdCLFlBQVksRUFBRSxHQUFHO0FBQUEsUUFDbEYsZ0JBQUFBO0FBQUEsVUFBQztBQUFBO0FBQUEsWUFDQyxXQUFVO0FBQUEsWUFDVixPQUFPLFNBQVMsZUFBZTtBQUFBLFlBQy9CLFVBQVUsQ0FBQyxNQUFNLFNBQVMsRUFBRSxHQUFHLFVBQVUsYUFBYSxFQUFFLE9BQU8sU0FBUyxPQUFVLENBQUM7QUFBQSxZQUNuRixhQUFZO0FBQUEsWUFDWixPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQUE7QUFBQSxRQUNuQjtBQUFBLFNBQ0Y7QUFBQSxNQUVERSxRQUFPLGVBQ04sZ0JBQUFELE1BQUMsU0FBSSxXQUFVLGtCQUNiO0FBQUEsd0JBQUFELEtBQUMsVUFBSyxPQUFPLEVBQUUsVUFBVSx1QkFBdUIsT0FBTyx3QkFBd0IsWUFBWSxHQUFHLE9BQU8sUUFBUSxXQUFXLFNBQVMsR0FBRyxvQkFBQztBQUFBLFFBQ3JJLGdCQUFBQTtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0MsV0FBVTtBQUFBLFlBQ1YsTUFBSztBQUFBLFlBQ0wsS0FBSztBQUFBLFlBQ0wsT0FBTyxTQUFTLFVBQVU7QUFBQSxZQUMxQixVQUFVLENBQUMsTUFBTSxTQUFTLEVBQUUsR0FBRyxVQUFVLFFBQVEsRUFBRSxPQUFPLFFBQVEsT0FBTyxFQUFFLE9BQU8sS0FBSyxJQUFJLE9BQVUsQ0FBQztBQUFBLFlBQ3RHLGFBQVk7QUFBQSxZQUNaLE9BQU8sRUFBRSxPQUFPLE9BQU87QUFBQTtBQUFBLFFBQ3pCO0FBQUEsUUFDQSxnQkFBQUEsS0FBQyxVQUFLLE9BQU8sRUFBRSxVQUFVLHVCQUF1QixPQUFPLHVCQUF1QixHQUFHLG9CQUFNO0FBQUEsU0FDekY7QUFBQSxPQUVKO0FBQUEsS0FFSjtBQUVKO0FBRUEsSUFBTSxpQkFBNkIsQ0FBQztBQUU3QixTQUFTLFlBQVksRUFBRSxXQUFXLFVBQVUsUUFBQUUsVUFBUyxlQUFlLEdBQVU7QUFDbkYsUUFBTSxDQUFDLFVBQVUsV0FBVyxJQUFJUCxVQUFTLFVBQVUsU0FBUyxDQUFDO0FBRTdELFFBQU0sY0FBYyxNQUFNO0FBQ3hCLFVBQU0sSUFBa0I7QUFBQSxNQUN0QixJQUFJLE9BQU87QUFBQSxNQUNYLE1BQU07QUFBQSxNQUNOLFNBQVMsQ0FBQyxZQUFZLFlBQVksVUFBVTtBQUFBLE1BQzVDLGNBQWM7QUFBQSxJQUNoQjtBQUNBLFFBQUlPLFFBQU8sWUFBYSxHQUFFLFNBQVM7QUFDbkMsYUFBUyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUM7QUFDMUIsZ0JBQVksSUFBSTtBQUFBLEVBQ2xCO0FBRUEsUUFBTSxpQkFBaUIsQ0FBQyxLQUFhLE1BQW9CO0FBQ3ZELFVBQU0sT0FBTyxDQUFDLEdBQUcsU0FBUztBQUMxQixTQUFLLEdBQUcsSUFBSTtBQUNaLGFBQVMsSUFBSTtBQUFBLEVBQ2Y7QUFFQSxRQUFNLGlCQUFpQixDQUFDLFFBQWdCO0FBQ3RDLGFBQVMsVUFBVSxPQUFPLENBQUMsR0FBRyxNQUFNLE1BQU0sR0FBRyxDQUFDO0FBQUEsRUFDaEQ7QUFFQSxTQUNFLGdCQUFBRCxNQUFDLFNBQUksV0FBVSx3QkFDYjtBQUFBLG9CQUFBQSxNQUFDLFlBQU8sV0FBVSx1QkFBc0IsU0FBUyxNQUFNLFlBQVksQ0FBQyxRQUFRLEdBQ3pFO0FBQUEsaUJBQVcsZ0JBQUFELEtBQUNGLGNBQUEsRUFBWSxNQUFNLElBQUksSUFBSyxnQkFBQUUsS0FBQ0QsZUFBQSxFQUFhLE1BQU0sSUFBSTtBQUFBLE1BQ2hFLGdCQUFBRSxNQUFDLFVBQU07QUFBQSxrQkFBVTtBQUFBLFFBQVFDLFFBQU8sZUFBZSxJQUFJQSxRQUFPLFlBQVksS0FBSztBQUFBLFFBQUc7QUFBQSxRQUFVLFVBQVUsV0FBVyxJQUFJLE1BQU07QUFBQSxTQUFHO0FBQUEsT0FDNUg7QUFBQSxJQUVDLFlBQ0MsZ0JBQUFELE1BQUMsU0FBSSxXQUFVLHFCQUNaO0FBQUEsZ0JBQVUsSUFBSSxDQUFDLEdBQUcsTUFDakIsZ0JBQUFEO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFFQyxVQUFVO0FBQUEsVUFDVixPQUFPO0FBQUEsVUFDUCxRQUFRRTtBQUFBLFVBQ1IsVUFBVSxDQUFDLFlBQVksZUFBZSxHQUFHLE9BQU87QUFBQSxVQUNoRCxVQUFVLE1BQU0sZUFBZSxDQUFDO0FBQUE7QUFBQSxRQUwzQixFQUFFO0FBQUEsTUFNVCxDQUNEO0FBQUEsT0FDQyxDQUFDQSxRQUFPLGdCQUFnQixVQUFVLFNBQVNBLFFBQU8saUJBQ2xELGdCQUFBRCxNQUFDLFlBQU8sV0FBVSxvQkFBbUIsU0FBUyxhQUM1QztBQUFBLHdCQUFBRCxLQUFDSixPQUFBLEVBQUssTUFBTSxJQUFJO0FBQUEsUUFBRTtBQUFBLFNBQ3BCO0FBQUEsT0FFSjtBQUFBLEtBRUo7QUFFSjs7O0FDOU5BLFNBQVMsWUFBQU8sV0FBVSxVQUFBQyxlQUFrQztBQThCN0MsU0FFRSxPQUFBQyxNQUZGLFFBQUFDLGFBQUE7QUF0QkQsU0FBUyxTQUFTLEVBQUUsUUFBUSxVQUFVLFlBQVksR0FBVTtBQUNqRSxRQUFNLENBQUMsT0FBTyxRQUFRLElBQUlILFVBQVMsRUFBRTtBQUNyQyxRQUFNLFdBQVdDLFFBQXlCLElBQUk7QUFFOUMsUUFBTSxnQkFBZ0IsQ0FBQyxNQUF1QztBQUM1RCxRQUFJLEVBQUUsUUFBUSxXQUFXLE1BQU0sS0FBSyxHQUFHO0FBQ3JDLFFBQUUsZUFBZTtBQUNqQixlQUFTLENBQUMsR0FBRyxRQUFRLE1BQU0sS0FBSyxDQUFDLENBQUM7QUFDbEMsZUFBUyxFQUFFO0FBQUEsSUFDYjtBQUNBLFFBQUksRUFBRSxRQUFRLGVBQWUsVUFBVSxNQUFNLE9BQU8sU0FBUyxHQUFHO0FBQzlELGVBQVMsT0FBTyxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQUEsSUFDOUI7QUFBQSxFQUNGO0FBRUEsUUFBTSxTQUFTLENBQUMsUUFBZ0I7QUFDOUIsYUFBUyxPQUFPLE9BQU8sQ0FBQyxHQUFHLE1BQU0sTUFBTSxHQUFHLENBQUM7QUFBQSxFQUM3QztBQUVBLFNBQ0UsZ0JBQUFFLE1BQUMsU0FBSSxXQUFVLHVCQUFzQixTQUFTLE1BQU0sU0FBUyxTQUFTLE1BQU0sR0FDekU7QUFBQSxXQUFPLElBQUksQ0FBQyxHQUFHLE1BQ2QsZ0JBQUFBLE1BQUMsVUFBYSxXQUFVLFlBQ3JCO0FBQUE7QUFBQSxNQUNELGdCQUFBRCxLQUFDLFlBQU8sU0FBUyxNQUFNLE9BQU8sQ0FBQyxHQUFHLGtCQUFPO0FBQUEsU0FGaEMsQ0FHWCxDQUNEO0FBQUEsSUFDRCxnQkFBQUE7QUFBQSxNQUFDO0FBQUE7QUFBQSxRQUNDLEtBQUs7QUFBQSxRQUNMLFdBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxRQUNQLFVBQVUsQ0FBQyxNQUFNLFNBQVMsRUFBRSxPQUFPLEtBQUs7QUFBQSxRQUN4QyxXQUFXO0FBQUEsUUFDWCxhQUFhLE9BQU8sV0FBVyxJQUFJLGNBQWM7QUFBQTtBQUFBLElBQ25EO0FBQUEsS0FDRjtBQUVKOzs7QUZ0Q0EsWUFBWUUsWUFBVztBQUtQLFNBcU1BLFlBQUFDLFdBck1BLE9BQUFDLE1BV1YsUUFBQUMsYUFYVTtBQUhoQixTQUFTQyxXQUFVLEVBQUUsTUFBTSxPQUFPLEdBQUcsR0FBb0M7QUFDdkUsUUFBTSxXQUFXLEtBQUssT0FBTyxDQUFDLEVBQUUsWUFBWSxJQUFJLEtBQUssTUFBTSxDQUFDLEVBQUUsUUFBUSxhQUFhLENBQUMsR0FBRyxNQUFjLEVBQUUsWUFBWSxDQUFDO0FBQ3BILFFBQU0sT0FBUUosT0FBYyxRQUFRO0FBQ3BDLFNBQU8sT0FBTyxnQkFBQUUsS0FBQyxRQUFLLE1BQVksSUFBSztBQUN2QztBQUVBLFNBQVMsUUFBUTtBQUFBLEVBQ2Y7QUFBQSxFQUFPO0FBQUEsRUFBTSxjQUFjO0FBQUEsRUFBTTtBQUNuQyxHQUVHO0FBQ0QsUUFBTSxDQUFDLE1BQU0sT0FBTyxJQUFJRyxVQUFTLFdBQVc7QUFDNUMsU0FDRSxnQkFBQUYsTUFBQyxTQUFJLFdBQVUsdUJBQ2I7QUFBQSxvQkFBQUEsTUFBQyxZQUFPLFdBQVUsOEJBQTZCLFNBQVMsTUFBTSxRQUFRLENBQUMsSUFBSSxHQUN6RTtBQUFBLHNCQUFBRCxLQUFDLFVBQUssV0FBVSw0QkFBNEIsZ0JBQUs7QUFBQSxNQUNqRCxnQkFBQUEsS0FBQyxVQUFLLFdBQVUsNkJBQTZCLGlCQUFNO0FBQUEsTUFDbEQsT0FBTyxnQkFBQUEsS0FBQ0ksY0FBQSxFQUFZLE1BQU0sSUFBSSxJQUFLLGdCQUFBSixLQUFDSyxlQUFBLEVBQWEsTUFBTSxJQUFJO0FBQUEsT0FDOUQ7QUFBQSxJQUNDLFFBQVEsZ0JBQUFMLEtBQUMsU0FBSSxXQUFVLDRCQUE0QixVQUFTO0FBQUEsS0FDL0Q7QUFFSjtBQUVBLElBQU0sa0JBQXlEO0FBQUEsRUFDN0QsRUFBRSxPQUFPLFFBQVEsT0FBTyxPQUFPO0FBQUEsRUFDL0IsRUFBRSxPQUFPLFlBQVksT0FBTyxZQUFZO0FBQUEsRUFDeEMsRUFBRSxPQUFPLFVBQVUsT0FBTyxTQUFTO0FBQUEsRUFDbkMsRUFBRSxPQUFPLFFBQVEsT0FBTyxPQUFPO0FBQUEsRUFDL0IsRUFBRSxPQUFPLFNBQVMsT0FBTyxRQUFRO0FBQUEsRUFDakMsRUFBRSxPQUFPLFVBQVUsT0FBTyxTQUFTO0FBQUEsRUFDbkMsRUFBRSxPQUFPLFVBQVUsT0FBTyxTQUFTO0FBQUEsRUFDbkMsRUFBRSxPQUFPLFNBQVMsT0FBTyxRQUFRO0FBQUEsRUFDakMsRUFBRSxPQUFPLGVBQWUsT0FBTyxnQkFBZ0I7QUFBQSxFQUMvQyxFQUFFLE9BQU8sU0FBUyxPQUFPLFFBQVE7QUFBQSxFQUNqQyxFQUFFLE9BQU8sU0FBUyxPQUFPLFFBQVE7QUFDbkM7QUFFQSxTQUFTLGdCQUFnQixFQUFFLFFBQVEsU0FBUyxHQUFvRTtBQUM5RyxRQUFNLFdBQVcsTUFBTTtBQUNyQixhQUFTLENBQUMsR0FBRyxRQUFRLEVBQUUsS0FBSyxTQUFTLE9BQU8sU0FBUyxDQUFDLElBQUksT0FBTyxTQUFTLE9BQU8sU0FBUyxDQUFDLElBQUksTUFBTSxPQUFPLENBQUMsQ0FBQztBQUFBLEVBQ2hIO0FBRUEsUUFBTSxjQUFjLENBQUMsS0FBYSxVQUFnQztBQUNoRSxVQUFNLE9BQU8sQ0FBQyxHQUFHLE1BQU07QUFDdkIsU0FBSyxHQUFHLElBQUksRUFBRSxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsTUFBTTtBQUNyQyxhQUFTLElBQUk7QUFBQSxFQUNmO0FBRUEsUUFBTSxjQUFjLENBQUMsUUFBZ0I7QUFDbkMsYUFBUyxPQUFPLE9BQU8sQ0FBQyxHQUFHLE1BQU0sTUFBTSxHQUFHLENBQUM7QUFBQSxFQUM3QztBQUVBLFNBQ0UsZ0JBQUFDLE1BQUMsU0FBSSxXQUFVLG9CQUNaO0FBQUEsV0FBTyxJQUFJLENBQUMsSUFBSSxNQUNmLGdCQUFBQSxNQUFDLFNBQVksV0FBVSxnQkFDckI7QUFBQSxzQkFBQUEsTUFBQyxTQUFJLFdBQVUsdUJBQ2I7QUFBQSx3QkFBQUQ7QUFBQSxVQUFDO0FBQUE7QUFBQSxZQUNDLFdBQVU7QUFBQSxZQUNWLE9BQU8sR0FBRztBQUFBLFlBQ1YsVUFBVSxDQUFDLE1BQU0sWUFBWSxHQUFHLEVBQUUsT0FBTyxFQUFFLE9BQU8sTUFBTSxDQUFDO0FBQUEsWUFDekQsYUFBWTtBQUFBLFlBQ1osT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUFBO0FBQUEsUUFDbkI7QUFBQSxRQUNBLGdCQUFBQTtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0MsV0FBVTtBQUFBLFlBQ1YsT0FBTyxHQUFHO0FBQUEsWUFDVixVQUFVLENBQUMsTUFBTSxZQUFZLEdBQUcsRUFBRSxLQUFLLEVBQUUsT0FBTyxNQUFNLENBQUM7QUFBQSxZQUN2RCxhQUFZO0FBQUEsWUFDWixPQUFPLEVBQUUsT0FBTyxJQUFJO0FBQUE7QUFBQSxRQUN0QjtBQUFBLFFBQ0EsZ0JBQUFBO0FBQUEsVUFBQztBQUFBO0FBQUEsWUFDQyxXQUFVO0FBQUEsWUFDVixPQUFPLEdBQUc7QUFBQSxZQUNWLFVBQVUsQ0FBQyxNQUFNLFlBQVksR0FBRyxFQUFFLE1BQU0sRUFBRSxPQUFPLE1BQW1CLENBQUM7QUFBQSxZQUNyRSxPQUFPLEVBQUUsT0FBTyxJQUFJO0FBQUEsWUFFbkIsMEJBQWdCLElBQUksQ0FBQyxNQUNwQixnQkFBQUEsS0FBQyxZQUFxQixPQUFPLEVBQUUsT0FBUSxZQUFFLFNBQTVCLEVBQUUsS0FBZ0MsQ0FDaEQ7QUFBQTtBQUFBLFFBQ0g7QUFBQSxRQUNBLGdCQUFBQSxLQUFDLFlBQU8sV0FBVSxZQUFXLFNBQVMsTUFBTSxZQUFZLENBQUMsR0FBRyxPQUFNLG9CQUNoRSwwQkFBQUEsS0FBQ00sU0FBQSxFQUFPLE1BQU0sSUFBSSxHQUNwQjtBQUFBLFNBQ0Y7QUFBQSxNQUNDLEdBQUcsU0FBUyxZQUNYLGdCQUFBTjtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0MsV0FBVTtBQUFBLFVBQ1YsUUFBUSxHQUFHLFdBQVcsQ0FBQyxHQUFHLEtBQUssSUFBSTtBQUFBLFVBQ25DLFVBQVUsQ0FBQyxNQUFNLFlBQVksR0FBRyxFQUFFLFNBQVMsRUFBRSxPQUFPLE1BQU0sTUFBTSxHQUFHLEVBQUUsSUFBSSxPQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxPQUFPLEVBQUUsQ0FBQztBQUFBLFVBQ3pHLGFBQVk7QUFBQSxVQUNaLE9BQU8sRUFBRSxXQUFXLEVBQUU7QUFBQTtBQUFBLE1BQ3hCO0FBQUEsU0FyQ00sQ0F1Q1YsQ0FDRDtBQUFBLElBQ0QsZ0JBQUFDLE1BQUMsWUFBTyxXQUFVLGdCQUFlLFNBQVMsVUFDeEM7QUFBQSxzQkFBQUQsS0FBQ08sT0FBQSxFQUFLLE1BQU0sSUFBSTtBQUFBLE1BQUU7QUFBQSxPQUNwQjtBQUFBLEtBQ0Y7QUFFSjtBQVNPLFNBQVMsZUFBZSxFQUFFLE9BQU8sY0FBYyxXQUFXLGFBQWEsUUFBUSxRQUFRLEdBQVU7QUFDdEcsUUFBTSxDQUFDLE9BQU8sUUFBUSxJQUFJSixVQUFzQixNQUFNLFVBQVUsWUFBWSxDQUFDO0FBQzdFLFFBQU0sQ0FBQyxNQUFNLE9BQU8sSUFBSUEsVUFBa0IsTUFBTSxVQUFVLFdBQVcsQ0FBQztBQUV0RSxFQUFBSyxXQUFVLE1BQU07QUFDZCxVQUFNLFVBQVUsQ0FBQyxNQUFxQjtBQUNwQyxVQUFJLEVBQUUsUUFBUSxTQUFVLFNBQVE7QUFBQSxJQUNsQztBQUNBLGFBQVMsaUJBQWlCLFdBQVcsT0FBTztBQUM1QyxXQUFPLE1BQU0sU0FBUyxvQkFBb0IsV0FBVyxPQUFPO0FBQUEsRUFDOUQsR0FBRyxDQUFDLE9BQU8sQ0FBQztBQUVaLFFBQU0sS0FBSyxZQUFZLE1BQU0sSUFBSTtBQUNqQyxRQUFNLFNBQVMsQ0FBQyxVQUFnQyxTQUFTLENBQUMsT0FBTyxFQUFFLEdBQUcsR0FBRyxHQUFHLE1BQU0sRUFBRTtBQUVwRixRQUFNLFVBQVUsTUFBTSxTQUFTLFdBQVcsTUFBTSxTQUFTO0FBQ3pELFFBQU0sZ0JBQWdCLE1BQU0sU0FBUyxVQUFVLE1BQU0sU0FBUyxjQUFjLE1BQU0sU0FBUyxZQUFZLE1BQU0sU0FBUztBQUN0SCxRQUFNLGlCQUNKLE1BQU0sU0FBUyxVQUFVLE1BQU0sU0FBUyxjQUFjLE1BQU0sU0FBUyxZQUNyRSxNQUFNLFNBQVMsV0FBVyxNQUFNLFNBQVMsaUJBQWlCLE1BQU0sU0FBUyxXQUFXLE1BQU0sU0FBUztBQUVyRyxTQUNFLGdCQUFBUixLQUFDLFNBQUksV0FBVSx1QkFBc0IsU0FBUyxDQUFDLE1BQU07QUFBRSxRQUFJLEVBQUUsV0FBVyxFQUFFLGNBQWUsU0FBUTtBQUFBLEVBQUUsR0FDakcsMEJBQUFDLE1BQUMsU0FBSSxXQUFVLGVBRWI7QUFBQSxvQkFBQUEsTUFBQyxTQUFJLFdBQVUsc0JBQ2I7QUFBQSxzQkFBQUEsTUFBQyxTQUFJLFdBQVUsMkJBQ2I7QUFBQSx3QkFBQUQsS0FBQyxVQUFLLFdBQVUseUJBQ2QsMEJBQUFBLEtBQUNFLFlBQUEsRUFBVSxNQUFNLElBQUksUUFBUSxlQUFlLE1BQU0sSUFBSSxHQUN4RDtBQUFBLFFBQ0EsZ0JBQUFELE1BQUMsU0FDQztBQUFBLDBCQUFBRCxLQUFDLFNBQUksV0FBVSwwQkFBMEIsZ0JBQU0sU0FBUyxZQUFXO0FBQUEsVUFDbkUsZ0JBQUFBLEtBQUMsU0FBSSxXQUFVLDBCQUEwQixjQUFJLFNBQVMsTUFBTSxNQUFLO0FBQUEsV0FDbkU7QUFBQSxTQUNGO0FBQUEsTUFDQSxnQkFBQUEsS0FBQyxZQUFPLFdBQVUscUJBQW9CLFNBQVMsU0FDN0MsMEJBQUFBLEtBQUNTLElBQUEsRUFBRSxNQUFNLElBQUksR0FDZjtBQUFBLE9BQ0Y7QUFBQSxJQUdBLGdCQUFBUixNQUFDLFNBQUksV0FBVSxvQkFDYjtBQUFBLHNCQUFBQSxNQUFDLFdBQVEsT0FBTSxXQUFVLE1BQU0sZ0JBQUFELEtBQUMsWUFBUyxNQUFNLElBQUksR0FBSSxhQUFhLE1BQ2xFO0FBQUEsd0JBQUFDLE1BQUMsU0FBSSxXQUFVLGNBQ2I7QUFBQSwwQkFBQUQsS0FBQyxXQUFNLFdBQVUsY0FBYSxtQkFBSztBQUFBLFVBQ25DLGdCQUFBQSxLQUFDLFdBQU0sV0FBVSxjQUFhLE9BQU8sTUFBTSxPQUFPLFVBQVUsQ0FBQyxNQUFNLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxNQUFNLENBQUMsR0FBRztBQUFBLFdBQ3hHO0FBQUEsUUFDQSxnQkFBQUMsTUFBQyxTQUFJLFdBQVUsY0FDYjtBQUFBLDBCQUFBRCxLQUFDLFdBQU0sV0FBVSxjQUFhLGlCQUFHO0FBQUEsVUFDakMsZ0JBQUFBLEtBQUMsV0FBTSxXQUFVLHdCQUF1QixPQUFPLE1BQU0sS0FBSyxVQUFVLENBQUMsTUFBTSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sTUFBTSxDQUFDLEdBQUc7QUFBQSxXQUM5RztBQUFBLFFBQ0MsTUFBTSxTQUFTLFdBQVcsTUFBTSxTQUFTLGlCQUN4QyxnQkFBQUMsTUFBQyxTQUFJLFdBQVUsa0JBQ2I7QUFBQSwwQkFBQUQsS0FBQyxXQUFNLFdBQVUsY0FBYSxzQkFBUTtBQUFBLFVBQ3RDLGdCQUFBQyxNQUFDLFdBQU0sV0FBVSxpQkFDZjtBQUFBLDRCQUFBRCxLQUFDLFdBQU0sTUFBSyxZQUFXLFNBQVMsTUFBTSxZQUFZLE9BQU8sVUFBVSxDQUFDLE1BQU0sT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLFFBQVEsQ0FBQyxHQUFHO0FBQUEsWUFDbEgsZ0JBQUFBLEtBQUMsVUFBSyxXQUFVLHdCQUF1QjtBQUFBLGFBQ3pDO0FBQUEsV0FDRjtBQUFBLFNBRUo7QUFBQSxNQUVDLFdBQ0MsZ0JBQUFBLEtBQUMsV0FBUSxPQUFNLGNBQWEsTUFBTSxnQkFBQUEsS0FBQ1UsU0FBQSxFQUFPLE1BQU0sSUFBSSxHQUFJLGFBQWEsTUFDbkUsMEJBQUFWO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDQyxRQUFRLE1BQU0sVUFBVSxDQUFDO0FBQUEsVUFDekIsVUFBVSxDQUFDLFdBQVcsT0FBTyxFQUFFLE9BQU8sQ0FBQztBQUFBO0FBQUEsTUFDekMsR0FDRjtBQUFBLE1BR0QsaUJBQ0MsZ0JBQUFDLE1BQUMsV0FBUSxPQUFNLGNBQWEsTUFBTSxnQkFBQUQsS0FBQyxjQUFXLE1BQU0sSUFBSSxHQUFJLGFBQWEsTUFDckU7QUFBQSxlQUFNLFNBQVMsVUFBVSxNQUFNLFNBQVMsZUFDeEMsZ0JBQUFDLE1BQUMsU0FBSSxXQUFVLGNBQ2I7QUFBQSwwQkFBQUQsS0FBQyxXQUFNLFdBQVUsY0FBYSx5QkFBVztBQUFBLFVBQ3pDLGdCQUFBQSxLQUFDLFdBQU0sV0FBVSxjQUFhLE9BQU8sTUFBTSxlQUFlLElBQUksVUFBVSxDQUFDLE1BQU0sT0FBTyxFQUFFLGFBQWEsRUFBRSxPQUFPLFNBQVMsT0FBVSxDQUFDLEdBQUc7QUFBQSxXQUN2STtBQUFBLFFBRUYsZ0JBQUFDLE1BQUMsU0FBSSxXQUFVLGNBQ2I7QUFBQSwwQkFBQUQsS0FBQyxXQUFNLFdBQVUsY0FBYSxrQkFBSTtBQUFBLFVBQ2xDLGdCQUFBQSxLQUFDLFdBQU0sV0FBVSxjQUFhLE9BQU8sTUFBTSxRQUFRLElBQUksVUFBVSxDQUFDLE1BQU0sT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLFNBQVMsT0FBVSxDQUFDLEdBQUcsYUFBWSw2QkFBNEI7QUFBQSxXQUNqSztBQUFBLFNBQ0Y7QUFBQSxNQUdELGtCQUNDLGdCQUFBQyxNQUFDLFdBQVEsT0FBTSxlQUFjLE1BQU0sZ0JBQUFELEtBQUMscUJBQWtCLE1BQU0sSUFBSSxHQUFJLGFBQWEsT0FDN0U7QUFBQSxlQUFNLFNBQVMsVUFBVSxNQUFNLFNBQVMsZUFDeEMsZ0JBQUFDLE1BQUFGLFdBQUEsRUFDRTtBQUFBLDBCQUFBRSxNQUFDLFNBQUksV0FBVSxjQUNiO0FBQUEsNEJBQUFELEtBQUMsV0FBTSxXQUFVLGNBQWEsd0JBQVU7QUFBQSxZQUN4QyxnQkFBQUEsS0FBQyxXQUFNLFdBQVUsY0FBYSxNQUFLLFVBQVMsT0FBTyxNQUFNLGFBQWEsYUFBYSxJQUFJLFVBQVUsQ0FBQyxNQUFNLE9BQU8sRUFBRSxhQUFhLEVBQUUsR0FBRyxNQUFNLGFBQWEsV0FBVyxFQUFFLE9BQU8sUUFBUSxPQUFPLEVBQUUsT0FBTyxLQUFLLElBQUksT0FBVSxFQUFFLENBQUMsR0FBRztBQUFBLGFBQzdOO0FBQUEsVUFDQSxnQkFBQUMsTUFBQyxTQUFJLFdBQVUsY0FDYjtBQUFBLDRCQUFBRCxLQUFDLFdBQU0sV0FBVSxjQUFhLHdCQUFVO0FBQUEsWUFDeEMsZ0JBQUFBLEtBQUMsV0FBTSxXQUFVLGNBQWEsTUFBSyxVQUFTLE9BQU8sTUFBTSxhQUFhLGFBQWEsSUFBSSxVQUFVLENBQUMsTUFBTSxPQUFPLEVBQUUsYUFBYSxFQUFFLEdBQUcsTUFBTSxhQUFhLFdBQVcsRUFBRSxPQUFPLFFBQVEsT0FBTyxFQUFFLE9BQU8sS0FBSyxJQUFJLE9BQVUsRUFBRSxDQUFDLEdBQUc7QUFBQSxhQUM3TjtBQUFBLFVBQ0MsTUFBTSxTQUFTLGNBQ2QsZ0JBQUFDLE1BQUMsU0FBSSxXQUFVLGNBQ2I7QUFBQSw0QkFBQUQsS0FBQyxXQUFNLFdBQVUsY0FBYSx1QkFBUztBQUFBLFlBQ3ZDLGdCQUFBQSxLQUFDLFdBQU0sV0FBVSxjQUFhLE1BQUssVUFBUyxPQUFPLE1BQU0sYUFBYSxZQUFZLElBQUksVUFBVSxDQUFDLE1BQU0sT0FBTyxFQUFFLGFBQWEsRUFBRSxHQUFHLE1BQU0sYUFBYSxVQUFVLEVBQUUsT0FBTyxRQUFRLE9BQU8sRUFBRSxPQUFPLEtBQUssSUFBSSxPQUFVLEVBQUUsQ0FBQyxHQUFHO0FBQUEsYUFDM047QUFBQSxXQUVKO0FBQUEsUUFFRCxNQUFNLFNBQVMsWUFDZCxnQkFBQUMsTUFBQUYsV0FBQSxFQUNFO0FBQUEsMEJBQUFFLE1BQUMsU0FBSSxXQUFVLGNBQ2I7QUFBQSw0QkFBQUQsS0FBQyxXQUFNLFdBQVUsY0FBYSxpQkFBRztBQUFBLFlBQ2pDLGdCQUFBQSxLQUFDLFdBQU0sV0FBVSxjQUFhLE1BQUssVUFBUyxPQUFPLE1BQU0sYUFBYSxPQUFPLElBQUksVUFBVSxDQUFDLE1BQU0sT0FBTyxFQUFFLGFBQWEsRUFBRSxHQUFHLE1BQU0sYUFBYSxLQUFLLEVBQUUsT0FBTyxRQUFRLE9BQU8sRUFBRSxPQUFPLEtBQUssSUFBSSxPQUFVLEVBQUUsQ0FBQyxHQUFHO0FBQUEsYUFDak47QUFBQSxVQUNBLGdCQUFBQyxNQUFDLFNBQUksV0FBVSxjQUNiO0FBQUEsNEJBQUFELEtBQUMsV0FBTSxXQUFVLGNBQWEsaUJBQUc7QUFBQSxZQUNqQyxnQkFBQUEsS0FBQyxXQUFNLFdBQVUsY0FBYSxNQUFLLFVBQVMsT0FBTyxNQUFNLGFBQWEsT0FBTyxJQUFJLFVBQVUsQ0FBQyxNQUFNLE9BQU8sRUFBRSxhQUFhLEVBQUUsR0FBRyxNQUFNLGFBQWEsS0FBSyxFQUFFLE9BQU8sUUFBUSxPQUFPLEVBQUUsT0FBTyxLQUFLLElBQUksT0FBVSxFQUFFLENBQUMsR0FBRztBQUFBLGFBQ2pOO0FBQUEsVUFDQSxnQkFBQUMsTUFBQyxTQUFJLFdBQVUsY0FDYjtBQUFBLDRCQUFBRCxLQUFDLFdBQU0sV0FBVSxjQUFhLGtCQUFJO0FBQUEsWUFDbEMsZ0JBQUFBLEtBQUMsV0FBTSxXQUFVLGNBQWEsT0FBTyxNQUFNLGFBQWEsUUFBUSxJQUFJLFVBQVUsQ0FBQyxNQUFNLE9BQU8sRUFBRSxhQUFhLEVBQUUsR0FBRyxNQUFNLGFBQWEsTUFBTSxFQUFFLE9BQU8sU0FBUyxPQUFVLEVBQUUsQ0FBQyxHQUFHLGFBQVksa0JBQWlCO0FBQUEsYUFDMU07QUFBQSxXQUNGO0FBQUEsU0FFQSxNQUFNLFNBQVMsV0FBVyxNQUFNLFNBQVMsa0JBQ3pDLGdCQUFBQyxNQUFBRixXQUFBLEVBQ0U7QUFBQSwwQkFBQUUsTUFBQyxTQUFJLFdBQVUsY0FDYjtBQUFBLDRCQUFBRCxLQUFDLFdBQU0sV0FBVSxjQUFhLDBCQUFZO0FBQUEsWUFDMUMsZ0JBQUFBLEtBQUMsV0FBTSxXQUFVLGNBQWEsT0FBTyxNQUFNLGVBQWUsSUFBSSxVQUFVLENBQUMsTUFBTSxPQUFPLEVBQUUsYUFBYSxFQUFFLE9BQU8sU0FBUyxPQUFVLENBQUMsR0FBRyxhQUFZLGlCQUFnQjtBQUFBLGFBQ25LO0FBQUEsVUFDQSxnQkFBQUMsTUFBQyxTQUFJLFdBQVUsY0FDYjtBQUFBLDRCQUFBRCxLQUFDLFdBQU0sV0FBVSxjQUFhLDJCQUFhO0FBQUEsWUFDM0MsZ0JBQUFBLEtBQUMsV0FBTSxXQUFVLGNBQWEsTUFBSyxVQUFTLE9BQU8sTUFBTSxhQUFhLGFBQWEsSUFBSSxVQUFVLENBQUMsTUFBTSxPQUFPLEVBQUUsYUFBYSxFQUFFLEdBQUcsTUFBTSxhQUFhLFdBQVcsRUFBRSxPQUFPLFFBQVEsT0FBTyxFQUFFLE9BQU8sS0FBSyxJQUFJLE9BQVUsRUFBRSxDQUFDLEdBQUc7QUFBQSxhQUM3TjtBQUFBLFVBQ0MsTUFBTSxTQUFTLGlCQUNkLGdCQUFBQyxNQUFDLFNBQUksV0FBVSxjQUNiO0FBQUEsNEJBQUFELEtBQUMsV0FBTSxXQUFVLGNBQWEsd0JBQVU7QUFBQSxZQUN4QyxnQkFBQUEsS0FBQyxXQUFNLFdBQVUsY0FBYSxNQUFLLFVBQVMsT0FBTyxNQUFNLE9BQU8sSUFBSSxVQUFVLENBQUMsTUFBTSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sUUFBUSxPQUFPLEVBQUUsT0FBTyxLQUFLLElBQUksT0FBVSxDQUFDLEdBQUc7QUFBQSxhQUM3SjtBQUFBLFdBRUo7QUFBQSxRQUVELE1BQU0sU0FBUyxXQUNkLGdCQUFBQyxNQUFBRixXQUFBLEVBQ0U7QUFBQSwwQkFBQUUsTUFBQyxTQUFJLFdBQVUsY0FDYjtBQUFBLDRCQUFBRCxLQUFDLFdBQU0sV0FBVSxjQUFhLDJCQUFhO0FBQUEsWUFDM0MsZ0JBQUFBLEtBQUMsV0FBTSxXQUFVLGNBQWEsTUFBSyxVQUFTLE9BQU8sTUFBTSxhQUFhLGFBQWEsSUFBSSxVQUFVLENBQUMsTUFBTSxPQUFPLEVBQUUsYUFBYSxFQUFFLEdBQUcsTUFBTSxhQUFhLFdBQVcsRUFBRSxPQUFPLFFBQVEsT0FBTyxFQUFFLE9BQU8sS0FBSyxJQUFJLE9BQVUsRUFBRSxDQUFDLEdBQUc7QUFBQSxhQUM3TjtBQUFBLFVBQ0EsZ0JBQUFDLE1BQUMsU0FBSSxXQUFVLGNBQ2I7QUFBQSw0QkFBQUQsS0FBQyxXQUFNLFdBQVUsY0FBYSxnQ0FBa0I7QUFBQSxZQUNoRCxnQkFBQUEsS0FBQyxXQUFNLFdBQVUsY0FBYSxNQUFLLFVBQVMsT0FBTyxNQUFNLGFBQWEsa0JBQWtCLElBQUksVUFBVSxDQUFDLE1BQU0sT0FBTyxFQUFFLGFBQWEsRUFBRSxHQUFHLE1BQU0sYUFBYSxnQkFBZ0IsRUFBRSxPQUFPLFFBQVEsT0FBTyxFQUFFLE9BQU8sS0FBSyxJQUFJLE9BQVUsRUFBRSxDQUFDLEdBQUc7QUFBQSxhQUN2TztBQUFBLFdBQ0Y7QUFBQSxRQUVELE1BQU0sU0FBUyxXQUNkLGdCQUFBQyxNQUFDLFNBQUksV0FBVSxjQUNiO0FBQUEsMEJBQUFELEtBQUMsV0FBTSxXQUFVLGNBQWEsMkJBQWE7QUFBQSxVQUMzQyxnQkFBQUEsS0FBQyxXQUFNLFdBQVUsY0FBYSxNQUFLLFVBQVMsT0FBTyxNQUFNLGFBQWEsYUFBYSxJQUFJLFVBQVUsQ0FBQyxNQUFNLE9BQU8sRUFBRSxhQUFhLEVBQUUsR0FBRyxNQUFNLGFBQWEsV0FBVyxFQUFFLE9BQU8sUUFBUSxPQUFPLEVBQUUsT0FBTyxLQUFLLElBQUksT0FBVSxFQUFFLENBQUMsR0FBRztBQUFBLFdBQzdOO0FBQUEsU0FFSjtBQUFBLE1BR0YsZ0JBQUFDLE1BQUMsV0FBUSxPQUFNLFlBQVcsTUFBTSxnQkFBQUQsS0FBQyxVQUFPLE1BQU0sSUFBSSxHQUFJLGFBQWEsTUFBTSxTQUFTLFlBQVksTUFBTSxTQUFTLFdBQVcsTUFBTSxTQUFTLFFBQ3BJO0FBQUEsY0FBTSxTQUFTLFlBQ2QsZ0JBQUFDLE1BQUMsU0FBSSxXQUFVLGNBQ2I7QUFBQSwwQkFBQUQsS0FBQyxXQUFNLFdBQVUsY0FBYSxvQ0FBc0I7QUFBQSxVQUNwRCxnQkFBQUEsS0FBQyxjQUFTLFdBQVUsY0FBYSxNQUFNLEdBQUcsUUFBUSxNQUFNLFdBQVcsQ0FBQyxHQUFHLEtBQUssSUFBSSxHQUFHLFVBQVUsQ0FBQyxNQUFNLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxNQUFNLE1BQU0sSUFBSSxFQUFFLE9BQU8sT0FBTyxFQUFFLENBQUMsR0FBRztBQUFBLFdBQ3ZLO0FBQUEsUUFFRCxNQUFNLFNBQVMsV0FDZCxnQkFBQUMsTUFBQUYsV0FBQSxFQUNFO0FBQUEsMEJBQUFFLE1BQUMsU0FBSSxXQUFVLGNBQ2I7QUFBQSw0QkFBQUQsS0FBQyxXQUFNLFdBQVUsY0FBYSxxQkFBTztBQUFBLFlBQ3JDLGdCQUFBQyxNQUFDLFNBQUksV0FBVSxtQkFDYjtBQUFBLDhCQUFBRCxLQUFDLFdBQU0sTUFBSyxTQUFRLE9BQVEsTUFBTSxXQUFzQixXQUFXLFVBQVUsQ0FBQyxNQUFNLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxNQUFNLENBQUMsR0FBRztBQUFBLGNBQ3pILGdCQUFBQSxLQUFDLFdBQU0sV0FBVSxjQUFhLE9BQVEsTUFBTSxXQUFzQixJQUFJLFVBQVUsQ0FBQyxNQUFNLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxNQUFNLENBQUMsR0FBRyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUc7QUFBQSxlQUNsSjtBQUFBLGFBQ0Y7QUFBQSxVQUNBLGdCQUFBQyxNQUFDLFNBQUksV0FBVSxjQUNiO0FBQUEsNEJBQUFELEtBQUMsV0FBTSxXQUFVLGNBQWEsa0NBQW9CO0FBQUEsWUFDbEQsZ0JBQUFBLEtBQUMsWUFBUyxRQUFRLE1BQU0sV0FBVyxDQUFDLEdBQUcsVUFBVSxDQUFDLFlBQVksT0FBTyxFQUFFLFFBQVEsQ0FBQyxHQUFHLGFBQVksV0FBVTtBQUFBLGFBQzNHO0FBQUEsV0FDRjtBQUFBLFFBRUQsTUFBTSxTQUFTLFVBQ2QsZ0JBQUFDLE1BQUMsU0FBSSxXQUFVLGNBQ2I7QUFBQSwwQkFBQUQsS0FBQyxXQUFNLFdBQVUsY0FBYSwyQkFBYTtBQUFBLFVBQzNDLGdCQUFBQSxLQUFDLFdBQU0sV0FBVSxjQUFhLE1BQUssUUFBTyxPQUFRLE1BQU0sV0FBc0IsSUFBSSxVQUFVLENBQUMsTUFBTSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sU0FBUyxPQUFVLENBQUMsR0FBRztBQUFBLFdBQ3ZKO0FBQUEsUUFFRCxNQUFNLFNBQVMsVUFDZCxnQkFBQUMsTUFBQUYsV0FBQSxFQUNFO0FBQUEsMEJBQUFFLE1BQUMsU0FBSSxXQUFVLGNBQ2I7QUFBQSw0QkFBQUQsS0FBQyxXQUFNLFdBQVUsY0FBYSwrQkFBaUI7QUFBQSxZQUMvQyxnQkFBQUEsS0FBQyxTQUFJLFdBQVUsb0JBQ1g7QUFBQSxjQUNBLENBQUMsY0FBYyxPQUFPO0FBQUEsY0FDdEIsQ0FBQyxxQkFBcUIsY0FBYztBQUFBLGNBQ3BDLENBQUMsZUFBZSxRQUFRO0FBQUEsY0FDeEIsQ0FBQyx3QkFBd0Isa0JBQWtCO0FBQUEsY0FDM0MsQ0FBQyxlQUFlLFFBQVE7QUFBQSxZQUMxQixFQUFHLElBQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxNQUNqQixnQkFBQUMsTUFBQyxXQUFnQixXQUFVLHNCQUN6QjtBQUFBLDhCQUFBRDtBQUFBLGdCQUFDO0FBQUE7QUFBQSxrQkFDQyxNQUFLO0FBQUEsa0JBQ0wsU0FBUyxDQUFDLENBQUUsTUFBTSxTQUF3QixHQUFHO0FBQUEsa0JBQzdDLFVBQVUsQ0FBQyxNQUFNO0FBQ2YsMEJBQU0sT0FBUSxNQUFNLFVBQVUsQ0FBQztBQUMvQiwyQkFBTyxFQUFFLFFBQVEsRUFBRSxHQUFHLE1BQU0sQ0FBQyxHQUFHLEdBQUcsRUFBRSxPQUFPLFdBQVcsT0FBVSxFQUFFLENBQUM7QUFBQSxrQkFDdEU7QUFBQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBLGdCQUFBQSxLQUFDLFVBQU0saUJBQU07QUFBQSxpQkFUSCxHQVVaLENBQ0QsR0FDSDtBQUFBLGFBQ0Y7QUFBQSxVQUNBLGdCQUFBQyxNQUFDLFNBQUksV0FBVSxjQUNiO0FBQUEsNEJBQUFELEtBQUMsV0FBTSxXQUFVLGNBQWEsMkJBQWE7QUFBQSxZQUMzQyxnQkFBQUE7QUFBQSxjQUFDO0FBQUE7QUFBQSxnQkFDQyxXQUFVO0FBQUEsZ0JBQ1YsTUFBSztBQUFBLGdCQUNMLEtBQUs7QUFBQSxnQkFDTCxPQUFRLE1BQU0sUUFBdUIsZ0JBQWdCO0FBQUEsZ0JBQ3JELFVBQVUsQ0FBQyxNQUFNO0FBQ2Ysd0JBQU0sT0FBUSxNQUFNLFVBQVUsQ0FBQztBQUMvQix5QkFBTyxFQUFFLFFBQVEsRUFBRSxHQUFHLE1BQU0sY0FBYyxFQUFFLE9BQU8sUUFBUSxPQUFPLEVBQUUsT0FBTyxLQUFLLElBQUksT0FBVSxFQUFFLENBQUM7QUFBQSxnQkFDbkc7QUFBQSxnQkFDQSxhQUFZO0FBQUEsZ0JBQ1osT0FBTyxFQUFFLE9BQU8sUUFBUTtBQUFBO0FBQUEsWUFDMUI7QUFBQSxhQUNGO0FBQUEsVUFDQSxnQkFBQUE7QUFBQSxZQUFDO0FBQUE7QUFBQSxjQUNDLFdBQVksUUFBMkIsQ0FBQztBQUFBLGNBQ3hDLFVBQVUsQ0FBQyxjQUFjLFFBQVEsU0FBUztBQUFBLGNBQzFDLFFBQVMsTUFBTSxVQUF5QixDQUFDO0FBQUE7QUFBQSxVQUMzQztBQUFBLFdBQ0Y7QUFBQSxTQUVBLE1BQU0sU0FBUyxVQUFVLE1BQU0sU0FBUyxjQUFjLE1BQU0sU0FBUyxhQUNyRSxnQkFBQUMsTUFBQyxTQUFJLFdBQVUsY0FDYjtBQUFBLDBCQUFBRCxLQUFDLFdBQU0sV0FBVSxjQUFhLDJCQUFhO0FBQUEsVUFDM0MsZ0JBQUFBO0FBQUEsWUFBQztBQUFBO0FBQUEsY0FDQyxXQUFVO0FBQUEsY0FDVixPQUFPLE1BQU0sV0FBVyxPQUFPLE9BQU8sTUFBTSxPQUFPLElBQUk7QUFBQSxjQUN2RCxVQUFVLENBQUMsTUFBTTtBQUNmLHNCQUFNLE1BQU0sTUFBTSxTQUFTLFlBQVksRUFBRSxPQUFPLFFBQVEsT0FBTyxFQUFFLE9BQU8sS0FBSyxJQUFLLEVBQUUsT0FBTyxTQUFTO0FBQ3BHLHVCQUFPLEVBQUUsU0FBUyxJQUFJLENBQUM7QUFBQSxjQUN6QjtBQUFBLGNBQ0EsTUFBTSxNQUFNLFNBQVMsV0FBVyxXQUFXO0FBQUE7QUFBQSxVQUM3QztBQUFBLFdBQ0Y7QUFBQSxRQUVELE1BQU0sU0FBUyxZQUNkLGdCQUFBQyxNQUFDLFNBQUksV0FBVSxrQkFDYjtBQUFBLDBCQUFBRCxLQUFDLFdBQU0sV0FBVSxjQUFhLHFCQUFPO0FBQUEsVUFDckMsZ0JBQUFDLE1BQUMsV0FBTSxXQUFVLGlCQUNmO0FBQUEsNEJBQUFELEtBQUMsV0FBTSxNQUFLLFlBQVcsU0FBUyxDQUFDLENBQUMsTUFBTSxTQUFTLFVBQVUsQ0FBQyxNQUFNLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxRQUFRLENBQUMsR0FBRztBQUFBLFlBQ3pHLGdCQUFBQSxLQUFDLFVBQUssV0FBVSx3QkFBdUI7QUFBQSxhQUN6QztBQUFBLFdBQ0Y7QUFBQSxTQUVKO0FBQUEsT0FDRjtBQUFBLElBR0EsZ0JBQUFDLE1BQUMsU0FBSSxXQUFVLHNCQUNiO0FBQUEsc0JBQUFELEtBQUMsWUFBTyxXQUFVLGlCQUFnQixTQUFTLFNBQVMsb0JBQU07QUFBQSxNQUMxRCxnQkFBQUEsS0FBQyxZQUFPLFdBQVUsZUFBYyxTQUFTLE1BQU07QUFBRSxlQUFPLE9BQU8sSUFBSTtBQUFHLGdCQUFRO0FBQUEsTUFBRSxHQUFHLDBCQUFZO0FBQUEsT0FDakc7QUFBQSxLQUNGLEdBQ0Y7QUFFSjs7O0FMelhBLFlBQVlXLFlBQVc7QUFLUCxnQkFBQUMsT0FnQ04sUUFBQUMsY0FoQ007QUFIaEIsU0FBU0MsV0FBVSxFQUFFLE1BQU0sT0FBTyxJQUFJLEdBQUcsS0FBSyxHQUFzRDtBQUNsRyxRQUFNLFdBQVcsS0FBSyxPQUFPLENBQUMsRUFBRSxZQUFZLElBQUksS0FBSyxNQUFNLENBQUMsRUFBRSxRQUFRLGFBQWEsQ0FBQyxHQUFHLE1BQWMsRUFBRSxZQUFZLENBQUM7QUFDcEgsUUFBTSxPQUFRSCxPQUFjLFFBQVE7QUFDcEMsU0FBTyxPQUFPLGdCQUFBQyxNQUFDLFFBQUssTUFBYSxHQUFHLE1BQU0sSUFBSztBQUNqRDtBQUlBLFNBQVMsYUFBYSxFQUFFLE9BQU8sZUFBZSxrQkFBa0IsR0FJN0Q7QUFDRCxVQUFRLE1BQU0sTUFBTTtBQUFBLElBQ2xCLEtBQUs7QUFDSCxhQUNFLGdCQUFBQSxNQUFDLFNBQUksV0FBVSxpQkFDYiwwQkFBQUEsTUFBQyxTQUFJLFdBQVUsdUJBQ2IsMEJBQUFBLE1BQUMsVUFBSyxXQUFVLDZCQUE2QixnQkFBTSxlQUFlLGlCQUFnQixHQUNwRixHQUNGO0FBQUEsSUFHSixLQUFLO0FBQ0gsYUFDRSxnQkFBQUEsTUFBQyxTQUFJLFdBQVUsaUJBQ2IsMEJBQUFBLE1BQUMsU0FBSSxXQUFVLDBCQUNiLDBCQUFBQSxNQUFDLFVBQUssV0FBVSw2QkFBNkIsZ0JBQU0sZUFBZSx5QkFBd0IsR0FDNUYsR0FDRjtBQUFBLElBR0osS0FBSztBQUNILGFBQ0UsZ0JBQUFBLE1BQUMsU0FBSSxXQUFVLGlCQUNiLDBCQUFBQyxPQUFDLFNBQUksV0FBVSw0Q0FDYjtBQUFBLHdCQUFBRCxNQUFDLFVBQUssV0FBVSw2QkFBNEIsZUFBQztBQUFBLFFBQzVDLE1BQU0sYUFBYSxRQUNsQixnQkFBQUEsTUFBQyxVQUFLLFdBQVUsc0JBQXNCLGdCQUFNLFlBQVksTUFBSztBQUFBLFNBRWpFLEdBQ0Y7QUFBQSxJQUdKLEtBQUs7QUFDSCxhQUNFLGdCQUFBQSxNQUFDLFNBQUksV0FBVSxpQkFDYiwwQkFBQUMsT0FBQyxTQUFJLFdBQVUsdUJBQ2I7QUFBQSx3QkFBQUQsTUFBQyxVQUFLLFdBQVUsNkJBQTRCLDRCQUFjO0FBQUEsUUFDMUQsZ0JBQUFBLE1BQUNFLFlBQUEsRUFBVSxNQUFLLFlBQVcsTUFBTSxJQUFJLE9BQU8sRUFBRSxPQUFPLHdCQUF3QixZQUFZLEVBQUUsR0FBRztBQUFBLFNBQ2hHLEdBQ0Y7QUFBQSxJQUdKLEtBQUs7QUFDSCxhQUNFLGdCQUFBRixNQUFDLFNBQUksV0FBVSxpQkFDYiwwQkFBQUMsT0FBQyxTQUFJLFdBQVUsNENBQ2I7QUFBQSx3QkFBQUQsTUFBQyxVQUFLLFdBQVUsNkJBQ2IsZ0JBQU0sVUFBVSxDQUFDLEtBQUssdUJBQ3pCO0FBQUEsUUFDQSxnQkFBQUEsTUFBQ0UsWUFBQSxFQUFVLE1BQUssZ0JBQWUsTUFBTSxJQUFJLE9BQU8sRUFBRSxPQUFPLHdCQUF3QixZQUFZLEVBQUUsR0FBRztBQUFBLFNBQ3BHLEdBQ0Y7QUFBQSxJQUdKLEtBQUs7QUFDSCxhQUNFLGdCQUFBRixNQUFDLFNBQUksV0FBVSxpQkFDYiwwQkFBQUMsT0FBQyxTQUFJLFdBQVUsd0JBQ2I7QUFBQSx3QkFBQUQsTUFBQyxTQUFJLFdBQVUsOEJBQ2IsMEJBQUFBLE1BQUMsU0FBSSxXQUFVLDhCQUE2QixHQUM5QztBQUFBLFFBQ0EsZ0JBQUFBLE1BQUMsVUFBSyxXQUFVLDhCQUE2QixxQkFBTztBQUFBLFNBQ3RELEdBQ0Y7QUFBQSxJQUdKLEtBQUs7QUFDSCxhQUNFLGdCQUFBQSxNQUFDLFNBQUksV0FBVSxpQkFDYiwwQkFBQUMsT0FBQyxTQUFJLFdBQVUsMkJBQ2I7QUFBQSx3QkFBQUQ7QUFBQSxVQUFDO0FBQUE7QUFBQSxZQUNDLFdBQVU7QUFBQSxZQUNWLE9BQU8sRUFBRSxpQkFBa0IsTUFBTSxXQUFzQixVQUFVO0FBQUE7QUFBQSxRQUNuRTtBQUFBLFFBQ0EsZ0JBQUFBLE1BQUMsVUFBSyxXQUFVLDJCQUE0QixnQkFBTSxXQUFzQixXQUFVO0FBQUEsUUFDakYsTUFBTSxXQUFXLE1BQU0sUUFBUSxTQUFTLEtBQ3ZDLGdCQUFBQSxNQUFDLFNBQUksV0FBVSwrQkFDWixnQkFBTSxRQUFRLE1BQU0sR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsTUFDakMsZ0JBQUFBLE1BQUMsU0FBWSxXQUFVLDhCQUE2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsS0FBdEUsQ0FBeUUsQ0FDcEYsR0FDSDtBQUFBLFNBRUosR0FDRjtBQUFBLElBR0osS0FBSztBQUNILGFBQ0UsZ0JBQUFBLE1BQUMsU0FBSSxXQUFVLGlCQUNiLDBCQUFBQyxPQUFDLFNBQUksV0FBVSx1QkFDYjtBQUFBLHdCQUFBRCxNQUFDRyxZQUFBLEVBQVUsTUFBTSxJQUFJLGFBQWEsS0FBSztBQUFBLFFBQ3ZDLGdCQUFBSCxNQUFDLFVBQUssMEJBQVk7QUFBQSxRQUNqQixNQUFNLGVBQWUsZ0JBQUFBLE1BQUMsVUFBSyxXQUFVLHdCQUF3QixnQkFBTSxhQUFZO0FBQUEsU0FDbEYsR0FDRjtBQUFBLElBR0osS0FBSztBQUNILGFBQ0UsZ0JBQUFDLE9BQUMsU0FBSSxXQUFVLGlCQUNiO0FBQUEsd0JBQUFBLE9BQUMsU0FBSSxXQUFVLHlCQUNaO0FBQUEsV0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUNkLGdCQUFBRCxNQUFDLFNBQVksV0FBVSw4QkFDckIsMEJBQUFBLE1BQUNHLFlBQUEsRUFBVSxNQUFNLElBQUksYUFBYSxLQUFLLEtBRC9CLENBRVYsQ0FDRDtBQUFBLFVBQ0QsZ0JBQUFILE1BQUMsU0FBSSxXQUFVLHdEQUNiLDBCQUFBQSxNQUFDSSxPQUFBLEVBQUssTUFBTSxJQUFJLEdBQ2xCO0FBQUEsV0FDRjtBQUFBLFFBQ0MsTUFBTSxPQUNMLGdCQUFBSCxPQUFDLFVBQUssV0FBVSw0QkFBMkI7QUFBQTtBQUFBLFVBQU8sTUFBTTtBQUFBLFVBQUk7QUFBQSxXQUFPO0FBQUEsU0FFdkU7QUFBQSxJQUdKLEtBQUs7QUFDSCxhQUNFLGdCQUFBRCxNQUFDLFNBQUksV0FBVSxpQkFDYiwwQkFBQUMsT0FBQyxTQUFJLFdBQVUsdUJBQ2I7QUFBQSx3QkFBQUQsTUFBQyxTQUFNLE1BQU0sSUFBSSxhQUFhLEtBQUs7QUFBQSxRQUNuQyxnQkFBQUEsTUFBQyxVQUFLLDBCQUFZO0FBQUEsU0FDcEIsR0FDRjtBQUFBLElBR0osS0FBSztBQUNILGFBQ0UsZ0JBQUFBLE1BQUMsU0FBSSxXQUFVLGlCQUNiLDBCQUFBQyxPQUFDLFNBQUksV0FBVSx1QkFDYjtBQUFBLHdCQUFBRCxNQUFDLFNBQU0sTUFBTSxJQUFJLGFBQWEsS0FBSztBQUFBLFFBQ25DLGdCQUFBQSxNQUFDLFVBQUssMEJBQVk7QUFBQSxTQUNwQixHQUNGO0FBQUEsSUFHSixLQUFLLFFBQVE7QUFDWCxZQUFNLFlBQVksaUJBQWlCLENBQUM7QUFDcEMsYUFDRSxnQkFBQUEsTUFBQyxTQUFJLFdBQVUsaUJBQ2IsMEJBQUFDLE9BQUMsU0FBSSxXQUFVLHNCQUNaO0FBQUEsa0JBQVUsV0FBVyxLQUNwQixnQkFBQUEsT0FBQyxTQUFJLFdBQVUsdUJBQXNCLE9BQU8sRUFBRSxTQUFTLE9BQU8sR0FDNUQ7QUFBQSwwQkFBQUQsTUFBQyxjQUFXLE1BQU0sSUFBSSxhQUFhLEtBQUs7QUFBQSxVQUN4QyxnQkFBQUEsTUFBQyxVQUFLLDhCQUFnQjtBQUFBLFdBQ3hCO0FBQUEsUUFFRCxVQUFVLE1BQU0sR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsTUFDN0IsZ0JBQUFDLE9BQUMsU0FBZSxXQUFVLDJCQUN4QjtBQUFBLDBCQUFBRCxNQUFDLFVBQUssV0FBVSwwQkFBMEIsY0FBSSxHQUFFO0FBQUEsVUFDaEQsZ0JBQUFBLE1BQUMsVUFBSyxXQUFVLDJCQUEyQixZQUFFLFFBQVEscUJBQW9CO0FBQUEsVUFDekUsZ0JBQUFDLE9BQUMsVUFBSyxXQUFVLDJCQUEyQjtBQUFBLGNBQUUsUUFBUTtBQUFBLFlBQU87QUFBQSxhQUFLO0FBQUEsYUFIekQsRUFBRSxFQUlaLENBQ0Q7QUFBQSxRQUNBLFVBQVUsU0FBUyxLQUNsQixnQkFBQUEsT0FBQyxTQUFJLE9BQU8sRUFBRSxVQUFVLHVCQUF1QixPQUFPLHdCQUF3QixhQUFhLE1BQU0sR0FBRztBQUFBO0FBQUEsVUFDaEcsVUFBVSxTQUFTO0FBQUEsVUFBRTtBQUFBLFdBQ3pCO0FBQUEsUUFFRixnQkFBQUE7QUFBQSxVQUFDO0FBQUE7QUFBQSxZQUNDLFdBQVU7QUFBQSxZQUNWLFNBQVMsQ0FBQyxNQUFNO0FBQUUsZ0JBQUUsZ0JBQWdCO0FBQUcsa0NBQW9CO0FBQUEsWUFBRTtBQUFBLFlBRTdEO0FBQUEsOEJBQUFELE1BQUNJLE9BQUEsRUFBSyxNQUFNLElBQUk7QUFBQSxjQUFFO0FBQUE7QUFBQTtBQUFBLFFBQ3BCO0FBQUEsU0FDRixHQUNGO0FBQUEsSUFFSjtBQUFBLElBRUEsS0FBSztBQUFBLElBQ0wsS0FBSztBQUNILGFBQ0UsZ0JBQUFKLE1BQUMsU0FBSSxXQUFVLGlCQUNiLDBCQUFBQyxPQUFDLFNBQUksV0FBVSx1QkFDYjtBQUFBLHdCQUFBRCxNQUFDRSxZQUFBLEVBQVUsTUFBTSxZQUFZLE1BQU0sSUFBSSxFQUFFLE1BQU0sTUFBTSxJQUFJLE9BQU8sRUFBRSxPQUFPLHVCQUF1QixHQUFHO0FBQUEsUUFDbkcsZ0JBQUFGLE1BQUMsVUFBTSxnQkFBTSxTQUFTLGdCQUFnQixvQkFBb0IsZUFBYztBQUFBLFNBQzFFLEdBQ0Y7QUFBQSxJQUdKO0FBQ0UsYUFBTztBQUFBLEVBQ1g7QUFDRjtBQUlPLFNBQVMsWUFBWTtBQUMxQixRQUFNLEVBQUUsT0FBTyxTQUFTLElBQUksVUFBVTtBQUN0QyxRQUFNLGFBQWEsTUFBTSxHQUFHO0FBQzVCLFFBQU0sVUFBVSxNQUFNLFFBQVEsT0FBTyxTQUFTLFVBQVU7QUFDeEQsUUFBTSxnQkFBZ0IsTUFBTSxHQUFHO0FBQy9CLFFBQU0sY0FBYyxNQUFNLEdBQUcsWUFBWSxZQUFZO0FBQ3JELFFBQU0sQ0FBQyxZQUFZLGFBQWEsSUFBSUssVUFBUyxLQUFLO0FBQ2xELFFBQU0sQ0FBQyxXQUFXLFlBQVksSUFBSUEsVUFBUyxLQUFLO0FBQ2hELFFBQU0sQ0FBQyxhQUFhLGNBQWMsSUFBSUEsVUFBdUQsSUFBSTtBQUNqRyxRQUFNLGlCQUFpQkMsUUFBdUIsSUFBSTtBQUNsRCxRQUFNLENBQUMsaUJBQWlCLGtCQUFrQixJQUFJRCxVQUF3QixJQUFJO0FBRzFFLFFBQU0sa0JBQWtCLG9CQUFJLElBQVk7QUFDeEMsUUFBTSxlQUFlLE1BQU0sUUFBUSxPQUFPLGdCQUFnQixDQUFDO0FBQzNELGFBQVcsS0FBSyxjQUFjO0FBQzVCLG9CQUFnQixJQUFJLEVBQUUsR0FBRyxLQUFLO0FBQzlCLGVBQVcsS0FBSyxFQUFFLEtBQU0saUJBQWdCLElBQUksQ0FBQztBQUFBLEVBQy9DO0FBR0EsUUFBTSxDQUFDLFNBQVMsVUFBVSxJQUFJQSxVQUF3QixJQUFJO0FBQzFELFFBQU0sQ0FBQyxZQUFZLGFBQWEsSUFBSUEsVUFBd0IsSUFBSTtBQUNoRSxRQUFNLENBQUMsWUFBWSxhQUFhLElBQUlBLFVBQXdCLElBQUk7QUFFaEUsUUFBTSxjQUFjRSxhQUFZLENBQUMsUUFBZ0IsV0FBVyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ3BFLFFBQU0sWUFBWUEsYUFBWSxNQUFNO0FBQUUsZUFBVyxJQUFJO0FBQUcsa0JBQWMsSUFBSTtBQUFBLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDakYsUUFBTSxhQUFhQSxhQUFZLENBQUMsR0FBb0IsUUFBZ0I7QUFDbEUsTUFBRSxlQUFlO0FBQ2pCLE1BQUUsYUFBYSxhQUFhO0FBQzVCLGtCQUFjLEdBQUc7QUFBQSxFQUNuQixHQUFHLENBQUMsQ0FBQztBQUNMLFFBQU0sU0FBU0EsYUFBWSxDQUFDLEdBQW9CLFVBQWtCO0FBQ2hFLE1BQUUsZUFBZTtBQUNqQixRQUFJLFlBQVksUUFBUSxZQUFZLE9BQU87QUFDekMsZUFBUyxFQUFFLE1BQU0sY0FBYyxNQUFNLFNBQVMsSUFBSSxNQUFNLENBQUM7QUFBQSxJQUMzRDtBQUNBLGVBQVcsSUFBSTtBQUNmLGtCQUFjLElBQUk7QUFBQSxFQUNwQixHQUFHLENBQUMsU0FBUyxRQUFRLENBQUM7QUFHdEIsRUFBQUMsV0FBVSxNQUFNO0FBQ2QsUUFBSSxDQUFDLFlBQWE7QUFDbEIsVUFBTSxVQUFVLENBQUMsTUFBa0I7QUFDakMsVUFBSSxlQUFlLFdBQVcsQ0FBQyxlQUFlLFFBQVEsU0FBUyxFQUFFLE1BQWMsR0FBRztBQUNoRix1QkFBZSxJQUFJO0FBQUEsTUFDckI7QUFBQSxJQUNGO0FBQ0EsYUFBUyxpQkFBaUIsYUFBYSxPQUFPO0FBQzlDLFdBQU8sTUFBTSxTQUFTLG9CQUFvQixhQUFhLE9BQU87QUFBQSxFQUNoRSxHQUFHLENBQUMsV0FBVyxDQUFDO0FBRWhCLFFBQU0saUJBQWlCLENBQUMsU0FBb0I7QUFDMUMsUUFBSSxDQUFDLFFBQVM7QUFDZCxVQUFNLEtBQUssWUFBWSxJQUFJO0FBQzNCLFVBQU0sUUFBcUI7QUFBQSxNQUN6QixLQUFLLGdCQUFnQixNQUFNLE1BQU0sUUFBUSxPQUFPLFFBQVE7QUFBQSxNQUN4RCxPQUFPLEdBQUc7QUFBQSxNQUNWO0FBQUEsTUFDQSxHQUFHLFVBQVUsR0FBRyxhQUFhO0FBQUEsSUFDL0I7QUFDQSxhQUFTLEVBQUUsTUFBTSxhQUFhLFlBQVksTUFBTSxDQUFDO0FBQ2pELFVBQU0sWUFBWSxHQUFHLFlBQVksS0FBSztBQUN0QyxRQUFJLGNBQWMsUUFBVztBQUMzQixlQUFTLEVBQUUsTUFBTSxZQUFZLEtBQUssTUFBTSxLQUFLLE9BQU8sVUFBVSxDQUFDO0FBQUEsSUFDakU7QUFDQSxrQkFBYyxLQUFLO0FBQUEsRUFDckI7QUFFQSxRQUFNLG1CQUFtQixDQUFDLE9BQXVDO0FBQy9ELFFBQUksQ0FBQyxRQUFTO0FBQ2QsVUFBTSxRQUFRLFVBQVUsR0FBRyxLQUFLO0FBQ2hDLFVBQU0sTUFBTSxnQkFBZ0IsTUFBTSxLQUFLLE1BQU0sUUFBUSxPQUFPLFFBQVE7QUFDcEUsYUFBUyxFQUFFLE1BQU0sYUFBYSxZQUFZLE1BQU0sQ0FBQztBQUNqRCxVQUFNLEtBQUssWUFBWSxNQUFNLElBQUk7QUFDakMsVUFBTSxZQUFZLEdBQUcsWUFBWSxLQUFLO0FBQ3RDLFFBQUksY0FBYyxRQUFXO0FBQzNCLGVBQVMsRUFBRSxNQUFNLFlBQVksS0FBSyxNQUFNLEtBQUssT0FBTyxVQUFVLENBQUM7QUFBQSxJQUNqRTtBQUNBLGlCQUFhLEtBQUs7QUFBQSxFQUNwQjtBQUVBLE1BQUksQ0FBQyxTQUFTO0FBQ1osV0FDRSxnQkFBQVIsTUFBQyxTQUFJLFdBQVUsZ0JBQ2IsMEJBQUFDLE9BQUMsU0FBSSxXQUFVLG9CQUNiO0FBQUEsc0JBQUFELE1BQUMsU0FBSSxXQUFVLHlCQUNiLDBCQUFBQSxNQUFDRSxZQUFBLEVBQVUsTUFBSyxVQUFTLE1BQU0sSUFBSSxPQUFPLEVBQUUsT0FBTyx1QkFBdUIsR0FBRyxHQUMvRTtBQUFBLE1BQ0EsZ0JBQUFGLE1BQUMsT0FBRSxXQUFVLDBCQUF5QixpQ0FBbUI7QUFBQSxNQUN6RCxnQkFBQUEsTUFBQyxPQUFFLFdBQVUseUJBQXdCLDREQUE4QztBQUFBLE9BQ3JGLEdBQ0Y7QUFBQSxFQUVKO0FBRUEsUUFBTSxpQkFBaUIsUUFBUSxPQUFPLElBQUksQ0FBQyxHQUFHLE9BQU8sRUFBRSxPQUFPLEdBQUcsT0FBTyxFQUFFLEVBQUUsRUFBRSxPQUFPLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTTtBQUNyRyxRQUFJLENBQUMsWUFBYSxRQUFPO0FBQ3pCLFdBQU8sRUFBRSxNQUFNLFlBQVksRUFBRSxTQUFTLFdBQVcsS0FDL0MsRUFBRSxJQUFJLFlBQVksRUFBRSxTQUFTLFdBQVcsS0FDeEMsRUFBRSxLQUFLLFNBQVMsV0FBVztBQUFBLEVBQy9CLENBQUM7QUFFRCxTQUNFLGdCQUFBQyxPQUFDLFNBQUksV0FBVSxnQkFDYjtBQUFBLG9CQUFBQSxPQUFDLFNBQUksV0FBVSx1QkFDYjtBQUFBLHNCQUFBRCxNQUFDLFFBQUksa0JBQVEsU0FBUyxVQUFTO0FBQUEsTUFDL0IsZ0JBQUFDLE9BQUMsU0FBSSxXQUFVLCtCQUNiO0FBQUEsd0JBQUFBLE9BQUMsU0FBSSxXQUFVLDhCQUNiO0FBQUEsMEJBQUFEO0FBQUEsWUFBQztBQUFBO0FBQUEsY0FDQyxXQUFVO0FBQUEsY0FDVixTQUFTLE1BQU0sYUFBYSxDQUFDLFNBQVM7QUFBQSxjQUN0QyxPQUFNO0FBQUEsY0FFTiwwQkFBQUEsTUFBQ0UsWUFBQSxFQUFVLE1BQUssT0FBTSxNQUFNLElBQUk7QUFBQTtBQUFBLFVBQ2xDO0FBQUEsVUFDQyxhQUNDLGdCQUFBRCxPQUFDLFNBQUksV0FBVSxzQkFDYjtBQUFBLDRCQUFBRCxNQUFDLFNBQUksV0FBVSw0QkFBMkIsNkJBQWU7QUFBQSxZQUN4RCxnQkFBZ0IsSUFBSSxDQUFDLElBQUksTUFDeEIsZ0JBQUFDLE9BQUMsWUFBZSxXQUFVLDJCQUEwQixTQUFTLE1BQU0saUJBQWlCLEVBQUUsR0FDcEY7QUFBQSw4QkFBQUQsTUFBQ0UsWUFBQSxFQUFVLE1BQU0sR0FBRyxNQUFNLE1BQU0sSUFBSTtBQUFBLGNBQ3BDLGdCQUFBRixNQUFDLFVBQU0sYUFBRyxPQUFNO0FBQUEsaUJBRkwsQ0FHYixDQUNEO0FBQUEsYUFDSDtBQUFBLFdBRUo7QUFBQSxRQUNBLGdCQUFBQyxPQUFDLFlBQU8sV0FBVSx3QkFBdUIsU0FBUyxNQUFNLGNBQWMsSUFBSSxHQUFHLE9BQU0sYUFDakY7QUFBQSwwQkFBQUQsTUFBQ0ksT0FBQSxFQUFLLE1BQU0sSUFBSTtBQUFBLFVBQ2hCLGdCQUFBSixNQUFDLFVBQUssdUJBQVM7QUFBQSxXQUNqQjtBQUFBLFNBQ0Y7QUFBQSxPQUNGO0FBQUEsSUFFQSxnQkFBQUMsT0FBQyxTQUFJLFdBQVUsY0FDWjtBQUFBLHFCQUFlLFdBQVcsS0FBSyxRQUFRLE9BQU8sU0FBUyxLQUN0RCxnQkFBQUEsT0FBQyxTQUFJLFdBQVUseUJBQXdCO0FBQUE7QUFBQSxRQUNuQixNQUFNLEdBQUc7QUFBQSxRQUFZO0FBQUEsU0FDekM7QUFBQSxNQUdELGVBQWUsV0FBVyxLQUFLLFFBQVEsT0FBTyxXQUFXLEtBQ3hELGdCQUFBQSxPQUFDLFNBQUksV0FBVSw0QkFDYjtBQUFBLHdCQUFBRCxNQUFDLE9BQUUsb0NBQXNCO0FBQUEsUUFDekIsZ0JBQUFDLE9BQUMsWUFBTyxXQUFVLG9CQUFtQixTQUFTLE1BQU0sY0FBYyxJQUFJLEdBQ3BFO0FBQUEsMEJBQUFELE1BQUNJLE9BQUEsRUFBSyxNQUFNLElBQUk7QUFBQSxVQUFFO0FBQUEsV0FDcEI7QUFBQSxTQUNGO0FBQUEsTUFHRCxlQUFlLElBQUksQ0FBQyxFQUFFLE9BQU8sR0FBRyxPQUFPLEVBQUUsTUFBTTtBQUM5QyxjQUFNLEtBQUssWUFBWSxFQUFFLElBQUksS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sY0FBYztBQUN2RSxjQUFNLFdBQVcsTUFBTTtBQUN2QixjQUFNLGlCQUFpQixnQkFBZ0IsSUFBSSxFQUFFLEdBQUc7QUFFaEQsZUFDRSxnQkFBQUg7QUFBQSxVQUFDO0FBQUE7QUFBQSxZQUVDLFdBQVcsYUFBYSxXQUFXLFlBQVksRUFBRTtBQUFBLFlBQ2pELFNBQVMsTUFBTSxtQkFBbUIsQ0FBQztBQUFBLFlBQ25DLGNBQWMsTUFBTSxjQUFjLENBQUM7QUFBQSxZQUNuQyxjQUFjLE1BQU0sY0FBYyxJQUFJO0FBQUEsWUFDdEMsV0FBUztBQUFBLFlBQ1QsYUFBYSxNQUFNLFlBQVksQ0FBQztBQUFBLFlBQ2hDO0FBQUEsWUFDQSxZQUFZLENBQUMsTUFBTSxXQUFXLEdBQUcsQ0FBQztBQUFBLFlBQ2xDLFFBQVEsQ0FBQyxNQUFNLE9BQU8sR0FBRyxDQUFDO0FBQUEsWUFDMUIsT0FBTztBQUFBLGNBQ0wsU0FBUyxZQUFZLElBQUksT0FBTztBQUFBLGNBQ2hDLFdBQVcsZUFBZSxLQUFLLFlBQVksSUFBSSw0QkFBNEI7QUFBQSxZQUM3RTtBQUFBLFlBR0E7QUFBQSw4QkFBQUQsTUFBQyxVQUFLLFdBQVcsY0FBYyxlQUFlLEtBQUssV0FBVyxhQUFhLEVBQUUsSUFDM0UsMEJBQUFBLE1BQUNTLGVBQUEsRUFBYSxNQUFNLElBQUksR0FDMUI7QUFBQSxjQUdBLGdCQUFBUixPQUFDLFNBQUksV0FBVSxtQkFFYjtBQUFBLGdDQUFBQSxPQUFDLFNBQUksV0FBVSxrQkFDYjtBQUFBLGtDQUFBRCxNQUFDLFVBQUssV0FBVyxtQkFBbUIsV0FBVyxZQUFZLEVBQUUsSUFDM0QsMEJBQUFBLE1BQUNFLFlBQUEsRUFBVSxNQUFNLEdBQUcsTUFBTSxNQUFNLElBQUksR0FDdEM7QUFBQSxrQkFDQSxnQkFBQUQsT0FBQyxTQUFJLFdBQVUsMEJBQ2I7QUFBQSxvQ0FBQUEsT0FBQyxVQUFLLFdBQVUsb0JBQ2I7QUFBQSx3QkFBRSxTQUFTO0FBQUEsc0JBQ1gsRUFBRSxZQUFZLGdCQUFBRCxNQUFDLFVBQUssV0FBVSwyQkFBMEIsZUFBQztBQUFBLHVCQUM1RDtBQUFBLG9CQUNBLGdCQUFBQSxNQUFDLFVBQUssV0FBVSxtQkFBbUIsWUFBRSxLQUFJO0FBQUEscUJBQzNDO0FBQUEsa0JBRUMsa0JBQ0MsZ0JBQUFBLE1BQUMsVUFBSyxXQUFVLDJCQUEwQixPQUFNLHlCQUM5QywwQkFBQUEsTUFBQ1UsWUFBQSxFQUFVLE1BQU0sSUFBSSxHQUN2QjtBQUFBLGtCQUdGLGdCQUFBVixNQUFDLFVBQUssV0FBVSxtQkFBbUIsYUFBRyxPQUFNO0FBQUEsa0JBRTVDLGdCQUFBQTtBQUFBLG9CQUFDO0FBQUE7QUFBQSxzQkFDQyxXQUFXLGlCQUFpQixlQUFlLEtBQUssV0FBVyxhQUFhLEVBQUU7QUFBQSxzQkFDMUUsU0FBUyxDQUFDLE1BQU07QUFDZCwwQkFBRSxnQkFBZ0I7QUFDbEIsOEJBQU0sT0FBUSxFQUFFLGNBQThCLHNCQUFzQjtBQUNwRSx1Q0FBZSxFQUFFLEtBQUssR0FBRyxHQUFHLEtBQUssUUFBUSxHQUFHLEdBQUcsS0FBSyxJQUFJLENBQUM7QUFBQSxzQkFDM0Q7QUFBQSxzQkFFQSwwQkFBQUEsTUFBQ1csaUJBQUEsRUFBZSxNQUFNLElBQUk7QUFBQTtBQUFBLGtCQUM1QjtBQUFBLG1CQUNGO0FBQUEsZ0JBR0EsZ0JBQUFYO0FBQUEsa0JBQUM7QUFBQTtBQUFBLG9CQUNDLE9BQU87QUFBQSxvQkFDUCxlQUFlLEVBQUUsU0FBUyxTQUFVLE1BQU0sUUFBUSxLQUFLLEVBQUUsR0FBRyxJQUFtQztBQUFBLG9CQUMvRixtQkFBbUIsRUFBRSxTQUFTLFNBQVMsTUFBTTtBQUMzQyw0QkFBTSxXQUFZLE1BQU0sUUFBUSxLQUFLLEVBQUUsR0FBRyxLQUFvQyxDQUFDO0FBQy9FLCtCQUFTO0FBQUEsd0JBQ1AsTUFBTTtBQUFBLHdCQUNOLEtBQUssRUFBRTtBQUFBLHdCQUNQLE9BQU8sQ0FBQyxHQUFHLFVBQVU7QUFBQSwwQkFDbkIsSUFBSSxNQUFNLEtBQUssT0FBTyxFQUFFLFNBQVMsRUFBRSxFQUFFLE1BQU0sR0FBRyxDQUFDO0FBQUEsMEJBQy9DLE1BQU07QUFBQSwwQkFDTixTQUFTLENBQUMsWUFBWSxZQUFZLFVBQVU7QUFBQSwwQkFDNUMsY0FBYztBQUFBLHdCQUNoQixDQUFDO0FBQUEsc0JBQ0gsQ0FBQztBQUFBLG9CQUNILElBQUk7QUFBQTtBQUFBLGdCQUNOO0FBQUEsaUJBQ0Y7QUFBQTtBQUFBO0FBQUEsVUF6RUssRUFBRSxNQUFNO0FBQUEsUUEwRWY7QUFBQSxNQUVKLENBQUM7QUFBQSxPQUNIO0FBQUEsSUFFQyxRQUFRLE9BQU8sU0FBUyxLQUN2QixnQkFBQUEsTUFBQyxTQUFJLFdBQVUsa0JBQ2IsMEJBQUFDLE9BQUMsWUFBTyxXQUFVLGlCQUFnQixTQUFTLE1BQU0sY0FBYyxJQUFJLEdBQ2pFO0FBQUEsc0JBQUFELE1BQUNJLE9BQUEsRUFBSyxNQUFNLElBQUk7QUFBQSxNQUFFO0FBQUEsT0FDcEIsR0FDRjtBQUFBLElBR0YsZ0JBQUFKLE1BQUMsdUJBQW9CO0FBQUEsSUFHcEIsZUFDQyxnQkFBQUM7QUFBQSxNQUFDO0FBQUE7QUFBQSxRQUNDLEtBQUs7QUFBQSxRQUNMLFdBQVU7QUFBQSxRQUNWLE9BQU8sRUFBRSxVQUFVLFNBQVMsTUFBTSxZQUFZLEdBQUcsS0FBSyxZQUFZLEdBQUcsUUFBUSxLQUFLO0FBQUEsUUFFbEY7QUFBQSwwQkFBQUE7QUFBQSxZQUFDO0FBQUE7QUFBQSxjQUNDLFdBQVU7QUFBQSxjQUNWLFNBQVMsTUFBTTtBQUNiLG1DQUFtQixZQUFZLEdBQUc7QUFDbEMsK0JBQWUsSUFBSTtBQUFBLGNBQ3JCO0FBQUEsY0FFQTtBQUFBLGdDQUFBRCxNQUFDWSxTQUFBLEVBQU8sTUFBTSxJQUFJO0FBQUEsZ0JBQUU7QUFBQTtBQUFBO0FBQUEsVUFDdEI7QUFBQSxVQUNBLGdCQUFBWDtBQUFBLFlBQUM7QUFBQTtBQUFBLGNBQ0MsV0FBVTtBQUFBLGNBQ1YsU0FBUyxNQUFNO0FBQ2IseUJBQVMsRUFBRSxNQUFNLG1CQUFtQixZQUFZLFVBQVUsWUFBWSxJQUFJLENBQUM7QUFDM0UsK0JBQWUsSUFBSTtBQUFBLGNBQ3JCO0FBQUEsY0FFQTtBQUFBLGdDQUFBRCxNQUFDYSxPQUFBLEVBQUssTUFBTSxJQUFJO0FBQUEsZ0JBQUU7QUFBQTtBQUFBO0FBQUEsVUFDcEI7QUFBQSxVQUNBLGdCQUFBYixNQUFDLFNBQUksV0FBVSwwQkFBeUI7QUFBQSxVQUN2QyxZQUFZLE1BQU0sS0FDakIsZ0JBQUFDO0FBQUEsWUFBQztBQUFBO0FBQUEsY0FDQyxXQUFVO0FBQUEsY0FDVixTQUFTLE1BQU07QUFDYix5QkFBUyxFQUFFLE1BQU0sY0FBYyxNQUFNLFlBQVksS0FBSyxJQUFJLFlBQVksTUFBTSxFQUFFLENBQUM7QUFDL0UsK0JBQWUsSUFBSTtBQUFBLGNBQ3JCO0FBQUEsY0FFQTtBQUFBLGdDQUFBRCxNQUFDLGFBQVUsTUFBTSxJQUFJO0FBQUEsZ0JBQUU7QUFBQTtBQUFBO0FBQUEsVUFDekI7QUFBQSxVQUVELFdBQVcsWUFBWSxNQUFNLFFBQVEsT0FBTyxTQUFTLEtBQ3BELGdCQUFBQztBQUFBLFlBQUM7QUFBQTtBQUFBLGNBQ0MsV0FBVTtBQUFBLGNBQ1YsU0FBUyxNQUFNO0FBQ2IseUJBQVMsRUFBRSxNQUFNLGNBQWMsTUFBTSxZQUFZLEtBQUssSUFBSSxZQUFZLE1BQU0sRUFBRSxDQUFDO0FBQy9FLCtCQUFlLElBQUk7QUFBQSxjQUNyQjtBQUFBLGNBRUE7QUFBQSxnQ0FBQUQsTUFBQ2MsY0FBQSxFQUFZLE1BQU0sSUFBSTtBQUFBLGdCQUFFO0FBQUE7QUFBQTtBQUFBLFVBQzNCO0FBQUEsV0FFQSxZQUFZLE1BQU0sS0FBTSxXQUFXLFlBQVksTUFBTSxRQUFRLE9BQU8sU0FBUyxNQUM3RSxnQkFBQWQsTUFBQyxTQUFJLFdBQVUsMEJBQXlCO0FBQUEsVUFFMUMsZ0JBQUFDO0FBQUEsWUFBQztBQUFBO0FBQUEsY0FDQyxXQUFVO0FBQUEsY0FDVixTQUFTLE1BQU07QUFDYix5QkFBUyxFQUFFLE1BQU0sZ0JBQWdCLFlBQVksVUFBVSxZQUFZLElBQUksQ0FBQztBQUN4RSwrQkFBZSxJQUFJO0FBQUEsY0FDckI7QUFBQSxjQUVBO0FBQUEsZ0NBQUFELE1BQUNlLFNBQUEsRUFBTyxNQUFNLElBQUk7QUFBQSxnQkFBRTtBQUFBO0FBQUE7QUFBQSxVQUN0QjtBQUFBO0FBQUE7QUFBQSxJQUNGO0FBQUEsSUFHRixnQkFBQWYsTUFBQyxjQUFXLE1BQU0sWUFBWSxTQUFTLE1BQU0sY0FBYyxLQUFLLEdBQUcsVUFBVSxnQkFBZ0I7QUFBQSxJQUU1RixvQkFBb0IsUUFBUSxTQUFTLE9BQU8sZUFBZSxLQUMxRCxnQkFBQUE7QUFBQSxNQUFDO0FBQUE7QUFBQSxRQUNDLE9BQU8sUUFBUSxPQUFPLGVBQWU7QUFBQSxRQUNyQyxXQUFXLE1BQU0sUUFBUSxLQUFLLFFBQVEsT0FBTyxlQUFlLEVBQUUsR0FBRztBQUFBLFFBQ2pFLFFBQVEsQ0FBQyxjQUFjLGdCQUFnQjtBQUNyQyxtQkFBUyxFQUFFLE1BQU0sZ0JBQWdCLFlBQVksVUFBVSxpQkFBaUIsT0FBTyxhQUFhLENBQUM7QUFDN0YsY0FBSSxnQkFBZ0IsUUFBVztBQUM3QixxQkFBUyxFQUFFLE1BQU0sWUFBWSxLQUFLLGFBQWEsS0FBSyxPQUFPLFlBQVksQ0FBQztBQUFBLFVBQzFFO0FBQUEsUUFDRjtBQUFBLFFBQ0EsU0FBUyxNQUFNLG1CQUFtQixJQUFJO0FBQUE7QUFBQSxJQUN4QztBQUFBLEtBRUo7QUFFSjs7O0FRNWhCQSxTQUFTLFdBQVcsUUFBQWdCLE9BQU0sVUFBQUMsU0FBZSxPQUFPLE9BQU8sVUFBVSxpQkFBaUI7QUFXNUUsU0FDRSxPQUFBQyxPQURGLFFBQUFDLGNBQUE7QUFKTixTQUFTLFlBQVksRUFBRSxPQUFPLFNBQVMsR0FBNkQ7QUFDbEcsUUFBTSxJQUFJLFNBQVMsRUFBRSxLQUFLLEdBQUc7QUFDN0IsU0FDRSxnQkFBQUEsT0FBQyxTQUFJLFdBQVUscUJBQ2I7QUFBQSxvQkFBQUEsT0FBQyxTQUFJLFdBQVUsa0JBQ2I7QUFBQSxzQkFBQUQsTUFBQyxTQUFNLE1BQU0sSUFBSSxPQUFPLEVBQUUsT0FBTyx3QkFBd0IsWUFBWSxHQUFHLFdBQVcsRUFBRSxHQUFHO0FBQUEsTUFDeEYsZ0JBQUFBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDQyxXQUFVO0FBQUEsVUFDVixPQUFPLEVBQUUsT0FBTztBQUFBLFVBQ2hCLFVBQVUsQ0FBQyxNQUFNLFNBQVMsRUFBRSxHQUFHLEdBQUcsS0FBSyxFQUFFLE9BQU8sTUFBTSxDQUFDO0FBQUEsVUFDdkQsYUFBWTtBQUFBLFVBQ1osT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUFBO0FBQUEsTUFDbkI7QUFBQSxPQUNGO0FBQUEsSUFDQSxnQkFBQUMsT0FBQyxTQUFJLFdBQVUsbUJBQ2I7QUFBQSxzQkFBQUEsT0FBQyxTQUFJLFdBQVUseUJBQ2I7QUFBQSx3QkFBQUQsTUFBQyxTQUFNLE1BQU0sSUFBSSxPQUFPLEVBQUUsT0FBTyx1QkFBdUIsR0FBRztBQUFBLFFBQzNELGdCQUFBQSxNQUFDLFVBQUssV0FBVSx5QkFBd0IsbUJBQUs7QUFBQSxRQUM3QyxnQkFBQUE7QUFBQSxVQUFDO0FBQUE7QUFBQSxZQUNDLFdBQVU7QUFBQSxZQUNWLE1BQUs7QUFBQSxZQUNMLEtBQUs7QUFBQSxZQUNMLE1BQU07QUFBQSxZQUNOLE9BQU8sRUFBRSxTQUFTO0FBQUEsWUFDbEIsVUFBVSxDQUFDLE1BQU0sU0FBUyxFQUFFLEdBQUcsR0FBRyxPQUFPLEVBQUUsT0FBTyxRQUFRLE9BQU8sRUFBRSxPQUFPLEtBQUssSUFBSSxPQUFVLENBQUM7QUFBQSxZQUM5RixhQUFZO0FBQUEsWUFDWixPQUFPLEVBQUUsT0FBTyxHQUFHO0FBQUE7QUFBQSxRQUNyQjtBQUFBLFFBQ0EsZ0JBQUFBLE1BQUMsVUFBSyxXQUFVLHdCQUF1QixlQUFDO0FBQUEsU0FDMUM7QUFBQSxNQUNBLGdCQUFBQyxPQUFDLFNBQUksV0FBVSx5QkFDYjtBQUFBLHdCQUFBRCxNQUFDLFNBQU0sTUFBTSxJQUFJLE9BQU8sRUFBRSxPQUFPLHVCQUF1QixHQUFHO0FBQUEsUUFDM0QsZ0JBQUFBLE1BQUMsVUFBSyxXQUFVLHlCQUF3QixpQkFBRztBQUFBLFFBQzNDLGdCQUFBQTtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0MsV0FBVTtBQUFBLFlBQ1YsTUFBSztBQUFBLFlBQ0wsS0FBSztBQUFBLFlBQ0wsTUFBTTtBQUFBLFlBQ04sT0FBTyxFQUFFLE9BQU87QUFBQSxZQUNoQixVQUFVLENBQUMsTUFBTSxTQUFTLEVBQUUsR0FBRyxHQUFHLEtBQUssRUFBRSxPQUFPLFFBQVEsT0FBTyxFQUFFLE9BQU8sS0FBSyxJQUFJLE9BQVUsQ0FBQztBQUFBLFlBQzVGLGFBQVk7QUFBQSxZQUNaLE9BQU8sRUFBRSxPQUFPLEdBQUc7QUFBQTtBQUFBLFFBQ3JCO0FBQUEsUUFDQSxnQkFBQUEsTUFBQyxVQUFLLFdBQVUsd0JBQXVCLGVBQUM7QUFBQSxTQUMxQztBQUFBLE9BQ0Y7QUFBQSxLQUNGO0FBRUo7QUFJQSxTQUFTLFdBQVcsRUFBRSxPQUFPLFNBQVMsR0FBcUQ7QUFDekYsU0FDRSxnQkFBQUMsT0FBQyxTQUFJLFdBQVUsb0JBQ2I7QUFBQSxvQkFBQUQsTUFBQyxZQUFTLE1BQU0sSUFBSSxPQUFPLEVBQUUsT0FBTyx3QkFBd0IsWUFBWSxFQUFFLEdBQUc7QUFBQSxJQUM3RSxnQkFBQUE7QUFBQSxNQUFDO0FBQUE7QUFBQSxRQUNDLFdBQVU7QUFBQSxRQUNWLE1BQUs7QUFBQSxRQUNMLE9BQU8sU0FBUztBQUFBLFFBQ2hCLFVBQVUsQ0FBQyxNQUFNLFNBQVMsRUFBRSxPQUFPLEtBQUs7QUFBQSxRQUN4QyxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQUE7QUFBQSxJQUNuQjtBQUFBLEtBQ0Y7QUFFSjtBQUlBLFNBQVMsaUJBQWlCO0FBQUEsRUFDeEI7QUFBQSxFQUFPO0FBQUEsRUFBSztBQUNkLEdBRUc7QUFDRCxRQUFNLFNBQVMsTUFBTSxRQUFRLEtBQUssSUFBSSxRQUFRLENBQUM7QUFDL0MsUUFBTSxTQUFTLENBQUMsT0FBTyxPQUFPLFNBQVM7QUFFdkMsU0FDRSxnQkFBQUMsT0FBQyxTQUFJLFdBQVUsb0JBQ1o7QUFBQSxXQUFPLElBQUksQ0FBQyxLQUFLLE1BQ2hCLGdCQUFBQSxPQUFDLFNBQVksV0FBVSx5QkFDckI7QUFBQSxzQkFBQUQsTUFBQyxTQUFJLFdBQVUsMEJBQ1osZ0JBQ0MsZ0JBQUFBLE1BQUMsU0FBSSxLQUFLLEtBQUssS0FBSSxJQUFHLFNBQVMsQ0FBQyxNQUFNO0FBQUUsUUFBQyxFQUFFLE9BQTRCLE1BQU0sVUFBVTtBQUFBLE1BQU8sR0FBRyxJQUVqRyxnQkFBQUEsTUFBQyxhQUFVLE1BQU0sSUFBSSxPQUFPLEVBQUUsT0FBTyx1QkFBdUIsR0FBRyxHQUVuRTtBQUFBLE1BQ0EsZ0JBQUFBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDQyxXQUFVO0FBQUEsVUFDVixPQUFPO0FBQUEsVUFDUCxVQUFVLENBQUMsTUFBTTtBQUNmLGtCQUFNLE9BQU8sQ0FBQyxHQUFHLE1BQU07QUFDdkIsaUJBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTztBQUNuQixxQkFBUyxJQUFJO0FBQUEsVUFDZjtBQUFBLFVBQ0EsYUFBYSxhQUFhLElBQUksQ0FBQztBQUFBLFVBQy9CLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFBQTtBQUFBLE1BQ25CO0FBQUEsTUFDQSxnQkFBQUEsTUFBQyxZQUFPLFdBQVUsWUFBVyxTQUFTLE1BQU0sU0FBUyxPQUFPLE9BQU8sQ0FBQyxHQUFHLE1BQU0sTUFBTSxDQUFDLENBQUMsR0FBRyxPQUFNLFVBQzVGLDBCQUFBQSxNQUFDRCxTQUFBLEVBQU8sTUFBTSxJQUFJLEdBQ3BCO0FBQUEsU0FyQlEsQ0FzQlYsQ0FDRDtBQUFBLElBQ0EsVUFDQyxnQkFBQUUsT0FBQyxZQUFPLFdBQVUsd0JBQXVCLFNBQVMsTUFBTSxTQUFTLENBQUMsR0FBRyxRQUFRLEVBQUUsQ0FBQyxHQUM5RTtBQUFBLHNCQUFBRCxNQUFDRixPQUFBLEVBQUssTUFBTSxJQUFJO0FBQUEsTUFBRTtBQUFBLE1BQVksTUFBTSxJQUFJLE9BQU8sTUFBTSxJQUFJLEdBQUcsTUFBTTtBQUFBLE9BQ3BFO0FBQUEsS0FFSjtBQUVKO0FBSUEsU0FBUyxZQUFZO0FBQUEsRUFDbkI7QUFBQSxFQUFPO0FBQUEsRUFBVztBQUNwQixHQUVHO0FBQ0QsUUFBTSxNQUFPLE9BQU8sVUFBVSxZQUFZLFNBQVMsQ0FBQyxNQUFNLFFBQVEsS0FBSyxJQUFLLFFBQW1DLENBQUM7QUFFaEgsU0FDRSxnQkFBQUcsT0FBQyxTQUFJLFdBQVUscUJBQ1o7QUFBQSxjQUFVLElBQUksQ0FBQyxPQUNkLGdCQUFBQSxPQUFDLFNBQWlCLFdBQVUsb0JBQzFCO0FBQUEsc0JBQUFBLE9BQUMsV0FBTSxXQUFVLDBCQUEwQjtBQUFBLFdBQUc7QUFBQSxRQUFNO0FBQUEsUUFBQyxnQkFBQUQsTUFBQyxVQUFLLFdBQVUsd0JBQXdCLGFBQUcsS0FBSTtBQUFBLFNBQU87QUFBQSxNQUMzRyxnQkFBQUE7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNDLE9BQU87QUFBQSxVQUNQLE9BQU8sSUFBSSxHQUFHLEdBQUc7QUFBQSxVQUNqQixVQUFVLENBQUMsTUFBTSxTQUFTLEVBQUUsR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQUE7QUFBQSxNQUNuRDtBQUFBLFNBTlEsR0FBRyxHQU9iLENBQ0Q7QUFBQSxJQUNBLFVBQVUsV0FBVyxLQUNwQixnQkFBQUEsTUFBQyxTQUFJLFdBQVUsb0JBQW1CLG1DQUFxQjtBQUFBLEtBRTNEO0FBRUo7QUFJQSxTQUFTLGlCQUFpQjtBQUFBLEVBQ3hCO0FBQUEsRUFBTztBQUFBLEVBQVc7QUFDcEIsR0FFRztBQUNELFFBQU0sUUFBUSxNQUFNLFFBQVEsS0FBSyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFFaEQsUUFBTSxhQUFhLENBQUMsS0FBYSxTQUFrQztBQUNqRSxVQUFNLE9BQU8sQ0FBQyxHQUFHLEtBQUs7QUFDdEIsU0FBSyxHQUFHLElBQUk7QUFDWixhQUFTLElBQUk7QUFBQSxFQUNmO0FBRUEsU0FDRSxnQkFBQUMsT0FBQyxTQUFJLFdBQVUsb0JBQ1o7QUFBQSxVQUFNLElBQUksQ0FBQyxNQUFNLE1BQ2hCLGdCQUFBQSxPQUFDLFNBQVksV0FBVSx5QkFDckI7QUFBQSxzQkFBQUEsT0FBQyxTQUFJLFdBQVUsZ0NBQ2I7QUFBQSx3QkFBQUEsT0FBQyxVQUFLLFdBQVUsNkJBQTRCO0FBQUE7QUFBQSxVQUFNLElBQUk7QUFBQSxXQUFFO0FBQUEsUUFDeEQsZ0JBQUFEO0FBQUEsVUFBQztBQUFBO0FBQUEsWUFDQyxXQUFVO0FBQUEsWUFDVixTQUFTLE1BQU0sU0FBUyxNQUFNLE9BQU8sQ0FBQyxHQUFHLE1BQU0sTUFBTSxDQUFDLENBQUM7QUFBQSxZQUN2RCxPQUFNO0FBQUEsWUFFTiwwQkFBQUEsTUFBQ0QsU0FBQSxFQUFPLE1BQU0sSUFBSTtBQUFBO0FBQUEsUUFDcEI7QUFBQSxTQUNGO0FBQUEsTUFDQSxnQkFBQUM7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNDLE9BQU87QUFBQSxVQUNQO0FBQUEsVUFDQSxVQUFVLENBQUMsTUFBTSxXQUFXLEdBQUcsQ0FBQztBQUFBO0FBQUEsTUFDbEM7QUFBQSxTQWZRLENBZ0JWLENBQ0Q7QUFBQSxJQUNELGdCQUFBQyxPQUFDLFlBQU8sV0FBVSx3QkFBdUIsU0FBUyxNQUFNLFNBQVMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FDN0U7QUFBQSxzQkFBQUQsTUFBQ0YsT0FBQSxFQUFLLE1BQU0sSUFBSTtBQUFBLE1BQUU7QUFBQSxPQUNwQjtBQUFBLEtBQ0Y7QUFFSjtBQUlBLFNBQVMsV0FBVztBQUFBLEVBQ2xCO0FBQUEsRUFBTztBQUFBLEVBQU87QUFDaEIsR0FFRztBQUNELE1BQUksTUFBTSxTQUFTLFVBQVU7QUFDM0IsV0FDRSxnQkFBQUcsT0FBQyxXQUFNLFdBQVUsaUJBQ2Y7QUFBQSxzQkFBQUQsTUFBQyxXQUFNLE1BQUssWUFBVyxTQUFTLENBQUMsQ0FBQyxPQUFPLFVBQVUsQ0FBQyxNQUFNLFNBQVMsRUFBRSxPQUFPLE9BQU8sR0FBRztBQUFBLE1BQ3RGLGdCQUFBQSxNQUFDLFVBQUssV0FBVSx3QkFBdUI7QUFBQSxPQUN6QztBQUFBLEVBRUo7QUFDQSxNQUFJLE1BQU0sU0FBUyxTQUFTO0FBQzFCLFdBQ0UsZ0JBQUFDLE9BQUMsU0FBSSxXQUFVLG1CQUNiO0FBQUEsc0JBQUFELE1BQUMsV0FBTSxNQUFLLFNBQVEsT0FBUSxTQUFvQixXQUFXLFVBQVUsQ0FBQyxNQUFNLFNBQVMsRUFBRSxPQUFPLEtBQUssR0FBRztBQUFBLE1BQ3RHLGdCQUFBQSxNQUFDLFdBQU0sV0FBVSxjQUFhLE9BQVEsU0FBb0IsSUFBSSxVQUFVLENBQUMsTUFBTSxTQUFTLEVBQUUsT0FBTyxLQUFLLEdBQUcsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHO0FBQUEsT0FDL0g7QUFBQSxFQUVKO0FBQ0EsTUFBSSxNQUFNLFNBQVMsVUFBVTtBQUMzQixXQUNFLGdCQUFBQTtBQUFBLE1BQUM7QUFBQTtBQUFBLFFBQ0MsV0FBVTtBQUFBLFFBQ1YsTUFBSztBQUFBLFFBQ0wsT0FBTyxTQUFtQjtBQUFBLFFBQzFCLFVBQVUsQ0FBQyxNQUFNLFNBQVMsRUFBRSxPQUFPLFFBQVEsT0FBTyxFQUFFLE9BQU8sS0FBSyxJQUFJLEVBQUU7QUFBQTtBQUFBLElBQ3hFO0FBQUEsRUFFSjtBQUNBLE1BQUksTUFBTSxTQUFTLFVBQVU7QUFDM0IsV0FDRSxnQkFBQUEsTUFBQyxZQUFPLFdBQVUsY0FBYSxPQUFRLFNBQW9CLElBQUksVUFBVSxDQUFDLE1BQU0sU0FBUyxFQUFFLE9BQU8sS0FBSyxHQUNuRyxpQkFBTSxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxnQkFBQUEsTUFBQyxZQUFpQixPQUFPLEtBQU0saUJBQWxCLEdBQXNCLENBQVMsR0FDbEY7QUFBQSxFQUVKO0FBQ0EsTUFBSSxNQUFNLFNBQVMsUUFBUTtBQUN6QixXQUFPLGdCQUFBQSxNQUFDLGNBQVcsT0FBUSxTQUFvQixJQUFJLFVBQW9CO0FBQUEsRUFDekU7QUFDQSxNQUFJLE1BQU0sU0FBUyxTQUFTO0FBQzFCLFdBQU8sZ0JBQUFBLE1BQUMsZUFBWSxPQUE0QixVQUFvQjtBQUFBLEVBQ3RFO0FBQ0EsTUFBSSxNQUFNLFNBQVMsZUFBZTtBQUNoQyxXQUFPLGdCQUFBQSxNQUFDLG9CQUFpQixPQUEwQixLQUFLLE1BQU0sS0FBSyxVQUFvQjtBQUFBLEVBQ3pGO0FBQ0EsTUFBSSxNQUFNLFNBQVMsWUFBWTtBQUM3QixXQUNFLGdCQUFBQTtBQUFBLE1BQUM7QUFBQTtBQUFBLFFBQ0MsV0FBVTtBQUFBLFFBQ1YsTUFBTTtBQUFBLFFBQ04sT0FBUSxTQUFvQjtBQUFBLFFBQzVCLFVBQVUsQ0FBQyxNQUFNLFNBQVMsRUFBRSxPQUFPLEtBQUs7QUFBQTtBQUFBLElBQzFDO0FBQUEsRUFFSjtBQUVBLFNBQ0UsZ0JBQUFBO0FBQUEsSUFBQztBQUFBO0FBQUEsTUFDQyxXQUFVO0FBQUEsTUFDVixPQUFRLFNBQW9CO0FBQUEsTUFDNUIsVUFBVSxDQUFDLE1BQU0sU0FBUyxFQUFFLE9BQU8sS0FBSztBQUFBLE1BQ3hDLGFBQWEsTUFBTSxTQUFTLFVBQVUsY0FBYyxNQUFNLFNBQVMsVUFBVSxjQUFjO0FBQUE7QUFBQSxFQUM3RjtBQUVKO0FBSU8sU0FBUyxVQUFVO0FBQ3hCLFFBQU0sRUFBRSxPQUFPLFNBQVMsSUFBSSxVQUFVO0FBQ3RDLFFBQU0sT0FBTyxNQUFNLFFBQVE7QUFDM0IsUUFBTSxXQUFXLE1BQU0sUUFBUSxPQUFPO0FBRXRDLFFBQU0sWUFBWSxTQUFTO0FBQUEsSUFBUSxDQUFDLE1BQ2xDLEVBQUUsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsR0FBRyxjQUFjLEVBQUUsTUFBTSxFQUFFO0FBQUEsRUFDdkQ7QUFFQSxRQUFNLGFBQWEsQ0FBQyxLQUFhLFNBQWlCO0FBQ2hELFVBQU0sS0FBSyxZQUFZLElBQWdDO0FBQ3ZELFFBQUksQ0FBQyxHQUFJO0FBQ1QsVUFBTSxRQUFRLFVBQVUsS0FBSyxDQUFDLE1BQU0sRUFBRSxRQUFRLEdBQUc7QUFDakQsUUFBSSxDQUFDLE1BQU87QUFDWixVQUFNLGFBQWEsR0FBRyxZQUFZLEtBQUs7QUFDdkMsYUFBUyxFQUFFLE1BQU0sWUFBWSxLQUFLLE9BQU8sV0FBVyxDQUFDO0FBQUEsRUFDdkQ7QUFFQSxRQUFNLFdBQVcsTUFBTTtBQUNyQixVQUFNLFVBQW1DLENBQUM7QUFDMUMsZUFBVyxLQUFLLFdBQVc7QUFDekIsWUFBTSxLQUFLLFlBQVksRUFBRSxJQUFnQztBQUN6RCxVQUFJLEdBQUksU0FBUSxFQUFFLEdBQUcsSUFBSSxHQUFHLFlBQVksQ0FBQztBQUFBLElBQzNDO0FBQ0EsYUFBUyxFQUFFLE1BQU0sZ0JBQWdCLE1BQU0sUUFBUSxDQUFDO0FBQUEsRUFDbEQ7QUFFQSxNQUFJLFVBQVUsV0FBVyxHQUFHO0FBQzFCLFdBQ0UsZ0JBQUFBLE1BQUMsU0FBSSxXQUFVLFlBQ2IsMEJBQUFBLE1BQUMsU0FBSSxXQUFVLGtCQUNiLDBCQUFBQSxNQUFDLE9BQUUscUVBQWtELEdBQ3ZELEdBQ0Y7QUFBQSxFQUVKO0FBRUEsU0FDRSxnQkFBQUMsT0FBQyxTQUFJLFdBQVUsWUFDYjtBQUFBLG9CQUFBQSxPQUFDLFNBQUksV0FBVSxtQkFDYjtBQUFBLHNCQUFBRCxNQUFDLFFBQUcsdUJBQVM7QUFBQSxNQUNiLGdCQUFBQyxPQUFDLFlBQU8sV0FBVSxpQkFBZ0IsU0FBUyxVQUN6QztBQUFBLHdCQUFBRCxNQUFDLGFBQVUsTUFBTSxJQUFJO0FBQUEsUUFBRTtBQUFBLFNBQ3pCO0FBQUEsT0FDRjtBQUFBLElBQ0EsZ0JBQUFBLE1BQUMsT0FBRSxXQUFVLGlCQUFnQiw0RkFBOEU7QUFBQSxJQUMzRyxnQkFBQUEsTUFBQyxTQUFJLFdBQVUsZUFDWixvQkFBVSxJQUFJLENBQUMsTUFBTTtBQUNwQixZQUFNLFFBQVEsS0FBSyxFQUFFLEdBQUc7QUFFeEIsYUFDRSxnQkFBQUMsT0FBQyxTQUFnQixXQUFVLGNBQ3pCO0FBQUEsd0JBQUFBLE9BQUMsU0FBSSxXQUFVLHFCQUNiO0FBQUEsMEJBQUFBLE9BQUMsU0FDQztBQUFBLDRCQUFBRCxNQUFDLFNBQUksV0FBVSxvQkFBb0IsWUFBRSxPQUFNO0FBQUEsWUFDM0MsZ0JBQUFDLE9BQUMsU0FBSSxXQUFVLG1CQUFtQjtBQUFBLGdCQUFFO0FBQUEsY0FBSTtBQUFBLGNBQUksRUFBRTtBQUFBLGNBQUs7QUFBQSxjQUFJLEVBQUU7QUFBQSxlQUFhO0FBQUEsYUFDeEU7QUFBQSxVQUNBLGdCQUFBRCxNQUFDLFlBQU8sV0FBVSxZQUFXLFNBQVMsTUFBTSxXQUFXLEVBQUUsS0FBSyxFQUFFLElBQUksR0FBRyxPQUFNLG9CQUMzRSwwQkFBQUEsTUFBQyxhQUFVLE1BQU0sSUFBSSxHQUN2QjtBQUFBLFdBQ0Y7QUFBQSxRQUNBLGdCQUFBQSxNQUFDLFNBQUksV0FBVSxvQkFDWixZQUFFLFNBQVMsU0FDVixnQkFBQUE7QUFBQSxVQUFDO0FBQUE7QUFBQSxZQUNDLFdBQVksU0FBNEIsQ0FBQztBQUFBLFlBQ3pDLFVBQVUsQ0FBQyxjQUFjLFNBQVMsRUFBRSxNQUFNLFlBQVksS0FBSyxFQUFFLEtBQUssT0FBTyxVQUFVLENBQUM7QUFBQSxZQUNwRixRQUFTLEVBQUUsVUFBeUIsQ0FBQztBQUFBO0FBQUEsUUFDdkMsSUFDRSxFQUFFLFNBQVMsVUFDYixnQkFBQUE7QUFBQSxVQUFDO0FBQUE7QUFBQSxZQUNDO0FBQUEsWUFDQSxXQUFXLEVBQUUsVUFBVSxDQUFDO0FBQUEsWUFDeEIsVUFBVSxDQUFDLE1BQU0sU0FBUyxFQUFFLE1BQU0sWUFBWSxLQUFLLEVBQUUsS0FBSyxPQUFPLEVBQUUsQ0FBQztBQUFBO0FBQUEsUUFDdEUsSUFDRSxFQUFFLFNBQVMsZ0JBQ2IsZ0JBQUFBO0FBQUEsVUFBQztBQUFBO0FBQUEsWUFDQztBQUFBLFlBQ0EsV0FBVyxFQUFFLFVBQVUsQ0FBQztBQUFBLFlBQ3hCLFVBQVUsQ0FBQyxNQUFNLFNBQVMsRUFBRSxNQUFNLFlBQVksS0FBSyxFQUFFLEtBQUssT0FBTyxFQUFFLENBQUM7QUFBQTtBQUFBLFFBQ3RFLElBRUEsZ0JBQUFBO0FBQUEsVUFBQztBQUFBO0FBQUEsWUFDQyxPQUFPO0FBQUEsWUFDUDtBQUFBLFlBQ0EsVUFBVSxDQUFDLE1BQU0sU0FBUyxFQUFFLE1BQU0sWUFBWSxLQUFLLEVBQUUsS0FBSyxPQUFPLEVBQUUsQ0FBQztBQUFBO0FBQUEsUUFDdEUsR0FFSjtBQUFBLFdBcENRLEVBQUUsR0FxQ1o7QUFBQSxJQUVKLENBQUMsR0FDSDtBQUFBLEtBQ0Y7QUFFSjs7O0FDaFZRLGdCQUFBRSxPQU9FLFFBQUFDLGNBUEY7QUFyQkQsU0FBUyxjQUFjO0FBQzVCLFFBQU0sRUFBRSxPQUFPLFNBQVMsSUFBSSxVQUFVO0FBQ3RDLFFBQU0sV0FBVyxNQUFNLFFBQVE7QUFFL0IsUUFBTSxjQUFjLENBQUMsVUFBb0M7QUFDdkQsYUFBUyxFQUFFLE1BQU0sZ0JBQWdCLFVBQVUsRUFBRSxHQUFHLFVBQVUsR0FBRyxNQUFNLEVBQUUsQ0FBQztBQUFBLEVBQ3hFO0FBRUEsUUFBTSxZQUFZLENBQUMsU0FBaUI7QUFDbEMsVUFBTSxPQUFPLEVBQUUsR0FBRyxTQUFTLGFBQWE7QUFDeEMsUUFBSSxLQUFLLElBQUksR0FBRztBQUNkLGFBQU8sS0FBSyxJQUFJO0FBQUEsSUFDbEIsT0FBTztBQUNMLFdBQUssSUFBSSxJQUFJO0FBQUEsSUFDZjtBQUNBLGdCQUFZLEVBQUUsY0FBYyxLQUFLLENBQUM7QUFBQSxFQUNwQztBQUVBLFNBQ0UsZ0JBQUFBLE9BQUMsU0FBSSxXQUFVLGdCQUNiO0FBQUEsb0JBQUFELE1BQUMsU0FBSSxXQUFVLHVCQUNiLDBCQUFBQSxNQUFDLFFBQUcsc0JBQVEsR0FDZDtBQUFBLElBQ0EsZ0JBQUFBLE1BQUMsT0FBRSxXQUFVLHFCQUFvQixnR0FBa0Y7QUFBQSxJQUVuSCxnQkFBQUMsT0FBQyxTQUFJLFdBQVUscUJBQ2I7QUFBQSxzQkFBQUEsT0FBQyxTQUFJLFdBQVUsb0JBQ2I7QUFBQSx3QkFBQUQsTUFBQyxRQUFHLHlCQUFXO0FBQUEsUUFDZixnQkFBQUMsT0FBQyxTQUFJLFdBQVUsY0FDYjtBQUFBLDBCQUFBRCxNQUFDLFdBQU0sV0FBVSxjQUFhLHdCQUFVO0FBQUEsVUFDeEMsZ0JBQUFBO0FBQUEsWUFBQztBQUFBO0FBQUEsY0FDQyxXQUFVO0FBQUEsY0FDVixPQUFPLFNBQVM7QUFBQSxjQUNoQixVQUFVLENBQUMsTUFBTSxZQUFZLEVBQUUsT0FBTyxFQUFFLE9BQU8sTUFBTSxDQUFDO0FBQUEsY0FDdEQsYUFBWTtBQUFBO0FBQUEsVUFDZDtBQUFBLFdBQ0Y7QUFBQSxTQUNGO0FBQUEsTUFFQSxnQkFBQUMsT0FBQyxTQUFJLFdBQVUsb0JBQ2I7QUFBQSx3QkFBQUQsTUFBQyxRQUFHLHFCQUFPO0FBQUEsUUFDWCxnQkFBQUEsTUFBQyxPQUFFLFdBQVUseUJBQXdCLG9GQUFzRTtBQUFBLFFBQzNHLGdCQUFBQTtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0MsUUFBUSxTQUFTO0FBQUEsWUFDakIsVUFBVSxDQUFDLFlBQVksWUFBWSxFQUFFLFFBQVEsQ0FBQztBQUFBLFlBQzlDLGFBQVk7QUFBQTtBQUFBLFFBQ2Q7QUFBQSxTQUNGO0FBQUEsTUFFQSxnQkFBQUMsT0FBQyxTQUFJLFdBQVUsb0JBQ2I7QUFBQSx3QkFBQUQsTUFBQyxRQUFHLDBCQUFZO0FBQUEsUUFDaEIsZ0JBQUFBLE1BQUMsT0FBRSxXQUFVLHlCQUF3Qix5REFBMkM7QUFBQSxRQUNoRixnQkFBQUEsTUFBQyxTQUFJLFdBQVUsWUFDWix5QkFBZSxJQUFJLENBQUMsUUFDbkIsZ0JBQUFDLE9BQUMsV0FBcUIsV0FBVyxZQUFZLFNBQVMsYUFBYSxJQUFJLElBQUksSUFBSSxXQUFXLEVBQUUsSUFDMUY7QUFBQSwwQkFBQUQ7QUFBQSxZQUFDO0FBQUE7QUFBQSxjQUNDLE1BQUs7QUFBQSxjQUNMLFNBQVMsQ0FBQyxDQUFDLFNBQVMsYUFBYSxJQUFJLElBQUk7QUFBQSxjQUN6QyxVQUFVLE1BQU0sVUFBVSxJQUFJLElBQUk7QUFBQTtBQUFBLFVBQ3BDO0FBQUEsVUFDQSxnQkFBQUMsT0FBQyxTQUNDO0FBQUEsNEJBQUFELE1BQUMsU0FBSSxXQUFVLFlBQVksY0FBSSxNQUFLO0FBQUEsWUFDcEMsZ0JBQUFBLE1BQUMsU0FBSSxXQUFVLFlBQVksY0FBSSxNQUFLO0FBQUEsYUFDdEM7QUFBQSxhQVRVLElBQUksSUFVaEIsQ0FDRCxHQUNIO0FBQUEsU0FDRjtBQUFBLE1BRUEsZ0JBQUFDLE9BQUMsU0FBSSxXQUFVLG9CQUNiO0FBQUEsd0JBQUFELE1BQUMsUUFBRyxtQkFBSztBQUFBLFFBQ1QsZ0JBQUFBLE1BQUMsT0FBRSxXQUFVLHlCQUF3QixtRkFBcUU7QUFBQSxRQUMxRyxnQkFBQUE7QUFBQSxVQUFDO0FBQUE7QUFBQSxZQUNDLFFBQVEsU0FBUztBQUFBLFlBQ2pCLFVBQVUsQ0FBQyxVQUFVLFlBQVksRUFBRSxNQUFNLENBQUM7QUFBQSxZQUMxQyxhQUFZO0FBQUE7QUFBQSxRQUNkO0FBQUEsU0FDRjtBQUFBLE9BQ0Y7QUFBQSxLQUNGO0FBRUo7OztBQ3JGQSxTQUFTLGFBQUFFLGtCQUFpQjtBQWdCdEIsZ0JBQUFDLGFBQUE7QUFiRyxTQUFTLFFBQVE7QUFDdEIsUUFBTSxFQUFFLE9BQU8sU0FBUyxJQUFJLFVBQVU7QUFDdEMsUUFBTSxRQUFRLE1BQU07QUFFcEIsRUFBQUMsV0FBVSxNQUFNO0FBQ2QsUUFBSSxDQUFDLE1BQU87QUFDWixVQUFNLFFBQVEsV0FBVyxNQUFNLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQyxHQUFHLElBQUk7QUFDckUsV0FBTyxNQUFNLGFBQWEsS0FBSztBQUFBLEVBQ2pDLEdBQUcsQ0FBQyxPQUFPLFFBQVEsQ0FBQztBQUVwQixNQUFJLENBQUMsTUFBTyxRQUFPO0FBRW5CLFNBQ0UsZ0JBQUFELE1BQUMsU0FBSSxXQUFXLGlCQUFpQixNQUFNLElBQUksSUFDeEMsZ0JBQU0sU0FDVDtBQUVKOzs7QW5CeUNTLFNBc0ZHLFlBQUFFLFdBdEZILE9BQUFDLE9BcUVELFFBQUFDLGNBckVDO0FBOUNULElBQU0sU0FBd0IsT0FBZSxxQkFBcUIsRUFBRSxNQUFNLFdBQVcsTUFBTSxLQUFLO0FBRWhHLElBQU0sZUFBNEI7QUFBQSxFQUNoQyxRQUFRLEVBQUUsUUFBUSxnQkFBZ0IsTUFBTSxDQUFDLEdBQUcsVUFBVSxpQkFBaUI7QUFBQSxFQUN2RSxTQUFTLEVBQUUsUUFBUSxnQkFBZ0IsTUFBTSxDQUFDLEdBQUcsVUFBVSxpQkFBaUI7QUFBQSxFQUN4RSxJQUFJO0FBQUEsSUFDRixpQkFBaUI7QUFBQSxJQUNqQixlQUFlO0FBQUEsSUFDZixXQUFXO0FBQUEsSUFDWCxPQUFRLGFBQWEsUUFBUSxjQUFjLEtBQTBCO0FBQUEsSUFDckUsYUFBYTtBQUFBLElBQ2IsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLE9BQU87QUFDVDtBQUVBLFNBQVMsYUFBYSxFQUFFLFVBQVUsS0FBSyxHQUFrRTtBQUN2RyxRQUFNLFdBQVdDLFFBQU8sS0FBSztBQUM3QixRQUFNLFNBQVNBLFFBQU8sQ0FBQztBQUV2QixRQUFNLGNBQWNDLGFBQVksQ0FBQyxNQUF3QjtBQUN2RCxNQUFFLGVBQWU7QUFDakIsYUFBUyxVQUFVO0FBQ25CLFdBQU8sVUFBVSxFQUFFO0FBQ25CLGFBQVMsS0FBSyxNQUFNLFNBQVM7QUFDN0IsYUFBUyxLQUFLLE1BQU0sYUFBYTtBQUVqQyxVQUFNLGNBQWMsQ0FBQyxPQUFtQjtBQUN0QyxVQUFJLENBQUMsU0FBUyxRQUFTO0FBQ3ZCLFlBQU0sUUFBUSxHQUFHLFVBQVUsT0FBTztBQUNsQyxhQUFPLFVBQVUsR0FBRztBQUNwQixlQUFTLFNBQVMsU0FBUyxRQUFRLENBQUMsS0FBSztBQUFBLElBQzNDO0FBRUEsVUFBTSxZQUFZLE1BQU07QUFDdEIsZUFBUyxVQUFVO0FBQ25CLGVBQVMsS0FBSyxNQUFNLFNBQVM7QUFDN0IsZUFBUyxLQUFLLE1BQU0sYUFBYTtBQUNqQyxhQUFPLG9CQUFvQixhQUFhLFdBQVc7QUFDbkQsYUFBTyxvQkFBb0IsV0FBVyxTQUFTO0FBQUEsSUFDakQ7QUFFQSxXQUFPLGlCQUFpQixhQUFhLFdBQVc7QUFDaEQsV0FBTyxpQkFBaUIsV0FBVyxTQUFTO0FBQUEsRUFDOUMsR0FBRyxDQUFDLFVBQVUsSUFBSSxDQUFDO0FBRW5CLFNBQU8sZ0JBQUFILE1BQUMsU0FBSSxXQUFVLHVCQUFzQixhQUEwQjtBQUN4RTtBQUVBLFNBQVMsU0FBUztBQUNoQixRQUFNLENBQUMsT0FBTyxRQUFRLElBQUksV0FBVyxlQUFlLFlBQVk7QUFDaEUsUUFBTSxDQUFDLFNBQVMsVUFBVSxJQUFJSSxVQUFTLElBQUk7QUFDM0MsUUFBTSxDQUFDLG1CQUFtQixvQkFBb0IsSUFBSUEsVUFBUyxLQUFLO0FBQ2hFLFFBQU0sQ0FBQyxlQUFlLGdCQUFnQixJQUFJQSxVQUFTLEdBQUc7QUFFdEQsRUFBQUMsV0FBVSxNQUFNO0FBQ2QsVUFBTSxRQUFRLGFBQWEsUUFBUSxjQUFjO0FBQ2pELFFBQUksVUFBVSxPQUFRLFVBQVMsZ0JBQWdCLGFBQWEsY0FBYyxNQUFNO0FBQUEsRUFDbEYsR0FBRyxDQUFDLENBQUM7QUFFTCxFQUFBQSxXQUFVLE1BQU07QUFDZCxlQUFXLEVBQUUsS0FBSyxDQUFDLFNBQVM7QUFDMUIsZUFBUyxFQUFFLE1BQU0sVUFBVSxLQUFLLENBQUM7QUFDakMsaUJBQVcsS0FBSztBQUFBLElBQ2xCLENBQUMsRUFBRSxNQUFNLE1BQU0sV0FBVyxLQUFLLENBQUM7QUFBQSxFQUNsQyxHQUFHLENBQUMsQ0FBQztBQUVMLFFBQU0sdUJBQXVCRixhQUFZLENBQUMsVUFBa0I7QUFDMUQscUJBQWlCLENBQUMsTUFBTSxLQUFLLElBQUksS0FBSyxLQUFLLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDO0FBQUEsRUFDakUsR0FBRyxDQUFDLENBQUM7QUFFTCxFQUFBRSxXQUFVLE1BQU07QUFDZCxVQUFNLFFBQVEsQ0FBQyxNQUFxQjtBQUNsQyxZQUFNLE1BQU8sRUFBRSxPQUF1QjtBQUN0QyxZQUFNLFVBQVUsUUFBUSxXQUFXLFFBQVEsY0FBYyxRQUFRO0FBRWpFLFdBQUssRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFFBQVEsS0FBSztBQUM3QyxVQUFFLGVBQWU7QUFDakIsaUJBQVMsY0FBaUMsa0JBQWtCLEdBQUcsTUFBTTtBQUNyRTtBQUFBLE1BQ0Y7QUFFQSxXQUFLLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxRQUFRLE9BQU8sQ0FBQyxTQUFTO0FBQ3pELFVBQUUsZUFBZTtBQUNqQixZQUFJLE1BQU0sR0FBRyxpQkFBaUIsR0FBRztBQUMvQixtQkFBUyxFQUFFLE1BQU0sbUJBQW1CLFlBQVksTUFBTSxHQUFHLGlCQUFpQixVQUFVLE1BQU0sR0FBRyxjQUFjLENBQUM7QUFBQSxRQUM5RztBQUNBO0FBQUEsTUFDRjtBQUVBLFdBQUssRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFFBQVEsT0FBTyxDQUFDLFNBQVM7QUFDekQsVUFBRSxlQUFlO0FBQ2pCLDZCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzlCO0FBQUEsTUFDRjtBQUVBLFVBQUksUUFBUztBQUViLFVBQUksRUFBRSxRQUFRLFVBQVU7QUFDdEIsaUJBQVMsRUFBRSxNQUFNLGdCQUFnQixLQUFLLEdBQUcsQ0FBQztBQUMxQztBQUFBLE1BQ0Y7QUFFQSxXQUFLLEVBQUUsUUFBUSxZQUFZLEVBQUUsUUFBUSxnQkFBZ0IsTUFBTSxHQUFHLGlCQUFpQixHQUFHO0FBQ2hGLGlCQUFTLEVBQUUsTUFBTSxnQkFBZ0IsWUFBWSxNQUFNLEdBQUcsaUJBQWlCLFVBQVUsTUFBTSxHQUFHLGNBQWMsQ0FBQztBQUN6RztBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQ0EsV0FBTyxpQkFBaUIsV0FBVyxLQUFLO0FBQ3hDLFdBQU8sTUFBTSxPQUFPLG9CQUFvQixXQUFXLEtBQUs7QUFBQSxFQUMxRCxHQUFHLENBQUMsTUFBTSxHQUFHLGVBQWUsTUFBTSxHQUFHLGVBQWUsQ0FBQztBQUVyRCxNQUFJLFNBQVM7QUFDWCxXQUNFLGdCQUFBTCxNQUFDLFNBQUksV0FBVSxnQkFDYiwwQkFBQUMsT0FBQyxTQUFJLFdBQVUsa0JBQ2I7QUFBQSxzQkFBQUQsTUFBQyxTQUFJLFdBQVUsbUJBQWtCO0FBQUEsTUFDakMsZ0JBQUFBLE1BQUMsT0FBRSx3Q0FBMEI7QUFBQSxPQUMvQixHQUNGO0FBQUEsRUFFSjtBQUVBLFFBQU0sY0FBYyxNQUFNLEdBQUcsY0FBYztBQUUzQyxTQUNFLGdCQUFBQSxNQUFDLGNBQWMsVUFBZCxFQUF1QixPQUFPLEVBQUUsT0FBTyxTQUFTLEdBQy9DLDBCQUFBQyxPQUFDLFNBQUksV0FBVSxnQkFDYjtBQUFBLG9CQUFBRCxNQUFDLFVBQU8sUUFBZ0I7QUFBQSxJQUV4QixnQkFBQUEsTUFBQyxTQUFJLFdBQVUsZUFDWix3QkFDQyxnQkFBQUMsT0FBQUYsV0FBQSxFQUNFO0FBQUEsc0JBQUFDO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDQyxXQUFXLGlCQUFpQixvQkFBb0IscUJBQXFCLEVBQUU7QUFBQSxVQUN2RSxPQUFPLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxlQUFlLFVBQVUsY0FBYyxJQUFJO0FBQUEsVUFFaEYsMEJBQUFBLE1BQUMsZUFBWTtBQUFBO0FBQUEsTUFDZjtBQUFBLE1BQ0MsQ0FBQyxxQkFDQSxnQkFBQUEsTUFBQyxnQkFBYSxVQUFVLHNCQUFzQixNQUFLLFFBQU87QUFBQSxNQUc1RCxnQkFBQUEsTUFBQyxhQUFVO0FBQUEsT0FDYixJQUNFLE1BQU0sR0FBRyxjQUFjLFNBQ3pCLGdCQUFBQSxNQUFDLFdBQVEsSUFFVCxnQkFBQUEsTUFBQyxlQUFZLEdBRWpCO0FBQUEsSUFFQSxnQkFBQUEsTUFBQyxVQUFPO0FBQUEsSUFDUixnQkFBQUEsTUFBQyxTQUFNO0FBQUEsS0FDVCxHQUNGO0FBRUo7QUFFQSxJQUFNLEtBQUssU0FBUyxlQUFlLGFBQWE7QUFDaEQsSUFBSSxJQUFJO0FBQ04sYUFBVyxFQUFFLEVBQUUsT0FBTyxnQkFBQUEsTUFBQyxVQUFPLENBQUU7QUFDbEM7IiwKICAibmFtZXMiOiBbInVzZUVmZmVjdCIsICJ1c2VDYWxsYmFjayIsICJ1c2VTdGF0ZSIsICJ1c2VSZWYiLCAiY29uZmlnIiwgImNvbmZpZyIsICJqc3giLCAianN4cyIsICJ1c2VTdGF0ZSIsICJ1c2VDYWxsYmFjayIsICJ1c2VSZWYiLCAidXNlRWZmZWN0IiwgInVzZUVmZmVjdCIsICJ1c2VSZWYiLCAianN4IiwgImpzeHMiLCAiRnJhZ21lbnQiLCAianN4IiwgImpzeHMiLCAidXNlU3RhdGUiLCAidXNlUmVmIiwgInVzZUVmZmVjdCIsICJ1c2VDYWxsYmFjayIsICJ1c2VTdGF0ZSIsICJ1c2VDYWxsYmFjayIsICJ1c2VSZWYiLCAidXNlRWZmZWN0IiwgIkdyaXBWZXJ0aWNhbCIsICJQbHVzIiwgIk1vcmVIb3Jpem9udGFsIiwgIlBlbmNpbCIsICJDb3B5IiwgIlRyYXNoMiIsICJDaGV2cm9uRG93biIsICJHaXRCcmFuY2giLCAiSW1hZ2VJY29uIiwgInVzZVN0YXRlIiwgInVzZVJlZiIsICJ1c2VFZmZlY3QiLCAiU2VhcmNoIiwgIlgiLCAianN4IiwgImpzeHMiLCAidXNlU3RhdGUiLCAidXNlUmVmIiwgInVzZUVmZmVjdCIsICJYIiwgIlNlYXJjaCIsICJ1c2VTdGF0ZSIsICJ1c2VSZWYiLCAidXNlRWZmZWN0IiwgIlBsdXMiLCAiWCIsICJqc3giLCAianN4cyIsICJ1c2VTdGF0ZSIsICJ1c2VSZWYiLCAidXNlRWZmZWN0IiwgIlgiLCAiUGx1cyIsICJ1c2VTdGF0ZSIsICJ1c2VFZmZlY3QiLCAiWCIsICJMYXllcnMiLCAiQ2hldnJvblJpZ2h0IiwgIkNoZXZyb25Eb3duIiwgIlBsdXMiLCAiVHJhc2gyIiwgInVzZVN0YXRlIiwgIlBsdXMiLCAiVHJhc2gyIiwgIkNoZXZyb25Eb3duIiwgIkNoZXZyb25SaWdodCIsICJqc3giLCAianN4cyIsICJjb25maWciLCAidXNlU3RhdGUiLCAidXNlUmVmIiwgImpzeCIsICJqc3hzIiwgIkljb25zIiwgIkZyYWdtZW50IiwgImpzeCIsICJqc3hzIiwgIkZpZWxkSWNvbiIsICJ1c2VTdGF0ZSIsICJDaGV2cm9uRG93biIsICJDaGV2cm9uUmlnaHQiLCAiVHJhc2gyIiwgIlBsdXMiLCAidXNlRWZmZWN0IiwgIlgiLCAiTGF5ZXJzIiwgIkljb25zIiwgImpzeCIsICJqc3hzIiwgIkZpZWxkSWNvbiIsICJJbWFnZUljb24iLCAiUGx1cyIsICJ1c2VTdGF0ZSIsICJ1c2VSZWYiLCAidXNlQ2FsbGJhY2siLCAidXNlRWZmZWN0IiwgIkdyaXBWZXJ0aWNhbCIsICJHaXRCcmFuY2giLCAiTW9yZUhvcml6b250YWwiLCAiUGVuY2lsIiwgIkNvcHkiLCAiQ2hldnJvbkRvd24iLCAiVHJhc2gyIiwgIlBsdXMiLCAiVHJhc2gyIiwgImpzeCIsICJqc3hzIiwgImpzeCIsICJqc3hzIiwgInVzZUVmZmVjdCIsICJqc3giLCAidXNlRWZmZWN0IiwgIkZyYWdtZW50IiwgImpzeCIsICJqc3hzIiwgInVzZVJlZiIsICJ1c2VDYWxsYmFjayIsICJ1c2VTdGF0ZSIsICJ1c2VFZmZlY3QiXQp9Cg==
