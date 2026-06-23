// scripts/studio/App.tsx
import { createRoot } from "react-dom/client";
import { useReducer, useEffect as useEffect9, useCallback as useCallback4, useState as useState9, useRef as useRef8 } from "react";

// scripts/studio/styles.css
(function() {
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
  return str.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+(.)/g, (_, c) => c.toUpperCase()).replace(/^(.)/, (_, c) => c.toLowerCase());
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
  sections: [{ key: "basics", label: "The Basics", fields: [] }]
};
var DEFAULT_MANIFEST = {
  entry: "index.tsx",
  screens: [],
  dependencies: {},
  fonts: []
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
        fonts: raw?.fonts ?? DEFAULT_MANIFEST.fonts
      };
      const config2 = { schema, demo, manifest };
      return { ...state, loaded: deepClone(config2), working: deepClone(config2) };
    }
    case "SAVED":
      return { ...state, loaded: deepClone(state.working) };
    case "SET_SCHEMA":
      return { ...state, working: { ...state.working, schema: action.schema } };
    case "ADD_SECTION": {
      const sections = [...state.working.schema.sections, action.section];
      return {
        ...state,
        working: { ...state.working, schema: { ...state.working.schema, sections } },
        ui: { ...state.ui, selectedSection: sections.length - 1, selectedField: -1 }
      };
    }
    case "UPDATE_SECTION": {
      const sections = state.working.schema.sections.map(
        (s, i) => i === action.idx ? action.section : s
      );
      return { ...state, working: { ...state.working, schema: { ...state.working.schema, sections } } };
    }
    case "DELETE_SECTION": {
      const sections = state.working.schema.sections.filter((_, i) => i !== action.idx);
      const sel = Math.min(state.ui.selectedSection, Math.max(0, sections.length - 1));
      return {
        ...state,
        working: { ...state.working, schema: { ...state.working.schema, sections } },
        ui: { ...state.ui, selectedSection: sel, selectedField: -1 }
      };
    }
    case "MOVE_SECTION": {
      const sections = [...state.working.schema.sections];
      const [moved] = sections.splice(action.from, 1);
      sections.splice(action.to, 0, moved);
      return {
        ...state,
        working: { ...state.working, schema: { ...state.working.schema, sections } },
        ui: { ...state.ui, selectedSection: action.to }
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
        working: { ...state.working, schema: { ...state.working.schema, sections } },
        ui: { ...state.ui, selectedField: newFieldIdx }
      };
    }
    case "UPDATE_FIELD": {
      const sections = state.working.schema.sections.map((s, si) => {
        if (si !== action.sectionIdx) return s;
        return { ...s, fields: s.fields.map((f, fi) => fi === action.fieldIdx ? action.field : f) };
      });
      return { ...state, working: { ...state.working, schema: { ...state.working.schema, sections } } };
    }
    case "DELETE_FIELD": {
      const deletedKey = state.working.schema.sections[action.sectionIdx]?.fields[action.fieldIdx]?.key;
      const sections = state.working.schema.sections.map((s, si) => {
        if (si !== action.sectionIdx) return s;
        return { ...s, fields: s.fields.filter((_, fi) => fi !== action.fieldIdx) };
      });
      const demo = { ...state.working.demo };
      if (deletedKey) delete demo[deletedKey];
      const newSel = Math.min(state.ui.selectedField, Math.max(-1, sections[action.sectionIdx].fields.length - 1));
      return {
        ...state,
        working: { ...state.working, schema: { ...state.working.schema, sections }, demo },
        ui: { ...state.ui, selectedField: newSel }
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
        working: { ...state.working, schema: { ...state.working.schema, sections } },
        ui: { ...state.ui, selectedField: action.fieldIdx + 1 }
      };
    }
    case "MOVE_FIELD": {
      const section = state.working.schema.sections[state.ui.selectedSection];
      if (!section) return state;
      const fields = [...section.fields];
      const [moved] = fields.splice(action.from, 1);
      const insertAt = action.to > action.from ? action.to - 1 : action.to;
      fields.splice(insertAt, 0, moved);
      const sections = state.working.schema.sections.map(
        (s, i) => i === state.ui.selectedSection ? { ...s, fields } : s
      );
      return {
        ...state,
        working: { ...state.working, schema: { ...state.working.schema, sections } },
        ui: { ...state.ui, selectedField: insertAt }
      };
    }
    case "SET_DEMO":
      return { ...state, working: { ...state.working, demo: { ...state.working.demo, [action.key]: action.value } } };
    case "SET_DEMO_ALL":
      return { ...state, working: { ...state.working, demo: action.demo } };
    case "SET_MANIFEST":
      return { ...state, working: { ...state.working, manifest: action.manifest } };
    case "SELECT_SECTION":
      return { ...state, ui: { ...state.ui, selectedSection: action.idx, selectedField: -1 } };
    case "SELECT_FIELD":
      return { ...state, ui: { ...state.ui, selectedField: action.idx } };
    case "SET_TAB":
      return { ...state, ui: { ...state.ui, activeTab: action.tab } };
    case "SET_THEME":
      return { ...state, ui: { ...state.ui, theme: action.theme } };
    case "SHOW_TOAST":
      return { ...state, toast: { message: action.message, type: action.toastType } };
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
      return { ...state, ui: { ...state.ui, showPreview: !state.ui.showPreview } };
    case "ADD_CONDITIONAL": {
      const conditionals = [...state.working.schema.conditionals || [], action.conditional];
      return { ...state, working: { ...state.working, schema: { ...state.working.schema, conditionals } } };
    }
    case "UPDATE_CONDITIONAL": {
      const conditionals = (state.working.schema.conditionals || []).map(
        (c, i) => i === action.idx ? action.conditional : c
      );
      return { ...state, working: { ...state.working, schema: { ...state.working.schema, conditionals } } };
    }
    case "DELETE_CONDITIONAL": {
      const conditionals = (state.working.schema.conditionals || []).filter((_, i) => i !== action.idx);
      return { ...state, working: { ...state.working, schema: { ...state.working.schema, conditionals: conditionals.length ? conditionals : void 0 } } };
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
    body: JSON.stringify(payload)
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
  Hexagon
} from "lucide-react";

// scripts/studio/field-registry.ts
var SAMPLE_IMAGES = {
  portrait: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400",
  memory1: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400",
  memory2: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400",
  memory3: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=400"
};
var FIELD_TYPES = {
  text: {
    label: "Text",
    icon: "type",
    category: "basic",
    defaultConfig: { required: false, placeholder: "", hint: "" },
    demoDefault: (f) => f.placeholder?.replace(/^e\.g\.\s*/i, "") || "Sample text"
  },
  textarea: {
    label: "Text Area",
    icon: "align-left",
    category: "basic",
    defaultConfig: { required: false, placeholder: "", hint: "" },
    demoDefault: () => "A message from the heart."
  },
  number: {
    label: "Number",
    icon: "hash",
    category: "basic",
    defaultConfig: { required: false, hint: "" },
    demoDefault: () => 21
  },
  date: {
    label: "Date",
    icon: "calendar",
    category: "basic",
    defaultConfig: { required: false, hint: "" },
    demoDefault: () => "2004-08-14"
  },
  color: {
    label: "Color",
    icon: "palette",
    category: "basic",
    defaultConfig: { default: "#ff6eb4" },
    demoDefault: () => "#ff6eb4"
  },
  toggle: {
    label: "Toggle",
    icon: "toggle-left",
    category: "basic",
    defaultConfig: {},
    demoDefault: () => true
  },
  select: {
    label: "Select",
    icon: "list",
    category: "basic",
    defaultConfig: { options: ["Option 1", "Option 2"], required: false },
    demoDefault: (f) => f.options?.[0] || "Option 1"
  },
  image: {
    label: "Image",
    icon: "image",
    category: "media",
    defaultConfig: { required: false },
    demoDefault: () => SAMPLE_IMAGES.portrait
  },
  image_array: {
    label: "Photo Gallery",
    icon: "images",
    category: "media",
    defaultConfig: { max: 8 },
    demoDefault: () => [SAMPLE_IMAGES.memory1, SAMPLE_IMAGES.memory2, SAMPLE_IMAGES.memory3]
  },
  video: {
    label: "Video",
    icon: "video",
    category: "media",
    defaultConfig: { required: false },
    demoDefault: () => ""
  },
  video_array: {
    label: "Video Gallery",
    icon: "video",
    category: "media",
    defaultConfig: { max: 4 },
    demoDefault: () => []
  },
  audio: {
    label: "Audio",
    icon: "music",
    category: "media",
    defaultConfig: {},
    demoDefault: () => ({ url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" })
  },
  quiz: {
    label: "Quiz",
    icon: "help-circle",
    category: "advanced",
    defaultConfig: {},
    customInspector: "quiz",
    demoDefault: () => [{ id: "q1", text: "What is my favourite color?", options: ["Blue", "Red", "Green"], correctIndex: 0 }]
  },
  group: {
    label: "Group",
    icon: "layers",
    category: "advanced",
    defaultConfig: { fields: [] },
    customInspector: "group",
    demoDefault: () => ({})
  },
  group_array: {
    label: "Repeating Group",
    icon: "copy",
    category: "advanced",
    defaultConfig: { fields: [] },
    customInspector: "group",
    demoDefault: () => [{}]
  }
};
var FIELD_CATEGORIES = [
  { key: "basic", label: "Basic" },
  { key: "media", label: "Media" },
  { key: "advanced", label: "Advanced" }
];

// scripts/studio/components/Header.tsx
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
      const allFields = state.working.schema.sections.flatMap((s) => s.fields);
      const prunedDemo = {};
      for (const f of allFields) {
        if (f.key in state.working.demo) {
          prunedDemo[f.key] = state.working.demo[f.key];
        } else {
          const ft = FIELD_TYPES[f.type];
          if (ft) prunedDemo[f.key] = ft.demoDefault(f);
        }
      }
      const result = await saveConfig({
        schema: state.working.schema,
        demo: prunedDemo,
        manifest: state.working.manifest
      });
      if (result.ok) {
        dispatch({ type: "SET_DEMO_ALL", demo: prunedDemo });
        dispatch({ type: "SAVED" });
        dispatch({ type: "SHOW_TOAST", message: `Saved ${(result.written ?? []).join(", ")}`, toastType: "success" });
      } else {
        dispatch({ type: "SHOW_TOAST", message: (result.errors ?? ["Save failed"]).join(", "), toastType: "error" });
      }
    } catch (e) {
      dispatch({ type: "SHOW_TOAST", message: `Save failed: ${e}`, toastType: "error" });
    }
    setSaving(false);
  }, [state.working, dispatch]);
  const handleExport = () => {
    const data = { schema: state.working.schema, demo: state.working.demo, manifest: state.working.manifest };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${config2.slug || "template"}-config.json`;
    a.click();
    URL.revokeObjectURL(url);
    dispatch({ type: "SHOW_TOAST", message: "Config exported", toastType: "success" });
  };
  const handleImport = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target?.result);
        dispatch({ type: "IMPORT_CONFIG", data });
        dispatch({ type: "SHOW_TOAST", message: "Config imported", toastType: "success" });
      } catch {
        dispatch({ type: "SHOW_TOAST", message: "Invalid JSON file", toastType: "error" });
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
  return /* @__PURE__ */ jsxs("header", { className: "studio-header", children: [
    /* @__PURE__ */ jsxs("div", { className: "header-brand", children: [
      /* @__PURE__ */ jsx(Hexagon, { size: 18, strokeWidth: 2.5, style: { color: "var(--accent)" } }),
      /* @__PURE__ */ jsx("span", { className: "header-title", children: "Studio" }),
      /* @__PURE__ */ jsx("span", { className: "header-slug", children: config2.slug })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "header-tabs", children: tabs.map((tab) => /* @__PURE__ */ jsx(
      "button",
      {
        className: `header-tab-pill${state.ui.activeTab === tab ? " active" : ""}`,
        onClick: () => dispatch({ type: "SET_TAB", tab }),
        children: tab.charAt(0).toUpperCase() + tab.slice(1)
      },
      tab
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "header-actions", children: [
      searchOpen ? /* @__PURE__ */ jsxs("div", { className: "header-search-expanded", children: [
        /* @__PURE__ */ jsx(Search, { size: 13, style: { color: "var(--text-tertiary)", flexShrink: 0 } }),
        /* @__PURE__ */ jsx(
          "input",
          {
            ref: searchRef,
            type: "text",
            placeholder: "Search fields...",
            value: state.ui.searchQuery,
            onChange: (e) => dispatch({ type: "SET_SEARCH", query: e.target.value })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "header-search-close",
            onClick: () => {
              setSearchOpen(false);
              dispatch({ type: "SET_SEARCH", query: "" });
            },
            children: /* @__PURE__ */ jsx(X, { size: 12 })
          }
        )
      ] }) : /* @__PURE__ */ jsx(
        "button",
        {
          className: "header-icon-btn",
          onClick: () => setSearchOpen(true),
          title: "Search fields (Cmd+F)",
          children: /* @__PURE__ */ jsx(Search, { size: 15 })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "header-separator" }),
      /* @__PURE__ */ jsx("button", { className: "header-icon-btn", onClick: toggleTheme, title: "Toggle theme", children: isDark ? /* @__PURE__ */ jsx(Sun, { size: 15 }) : /* @__PURE__ */ jsx(Moon, { size: 15 }) }),
      /* @__PURE__ */ jsx("div", { className: "header-separator" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "header-icon-btn",
          onClick: () => fileInputRef.current?.click(),
          title: "Import config",
          children: /* @__PURE__ */ jsx(Upload, { size: 15 })
        }
      ),
      /* @__PURE__ */ jsx("button", { className: "header-icon-btn", onClick: handleExport, title: "Export config", children: /* @__PURE__ */ jsx(Download, { size: 15 }) }),
      /* @__PURE__ */ jsx("div", { className: "header-separator" }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          className: `header-save-btn${hasUnsaved ? " unsaved" : ""}`,
          onClick: handleSave,
          disabled: saving,
          children: [
            hasUnsaved && /* @__PURE__ */ jsx("span", { className: "header-save-dot" }),
            /* @__PURE__ */ jsx(Save, { size: 14 }),
            /* @__PURE__ */ jsx("span", { children: saving ? "Saving..." : "Save" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("input", { ref: fileInputRef, type: "file", accept: ".json", style: { display: "none" }, onChange: handleImport })
  ] });
}

// scripts/studio/components/Footer.tsx
import { Fragment, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function Footer() {
  const { state } = useStudio();
  const hasUnsaved = !deepEqual(state.loaded, state.working);
  const sectionCount = state.working.schema.sections.length;
  const fieldCount = state.working.schema.sections.reduce((sum, s) => sum + s.fields.length, 0);
  const conditionalCount = state.working.schema.conditionals?.length || 0;
  return /* @__PURE__ */ jsxs2("footer", { className: "studio-footer", children: [
    /* @__PURE__ */ jsxs2("div", { className: "footer-stats", children: [
      /* @__PURE__ */ jsxs2("span", { className: "footer-stat", children: [
        sectionCount,
        " section",
        sectionCount !== 1 ? "s" : ""
      ] }),
      /* @__PURE__ */ jsx2("span", { className: "footer-dot" }),
      /* @__PURE__ */ jsxs2("span", { className: "footer-stat", children: [
        fieldCount,
        " field",
        fieldCount !== 1 ? "s" : ""
      ] }),
      conditionalCount > 0 && /* @__PURE__ */ jsxs2(Fragment, { children: [
        /* @__PURE__ */ jsx2("span", { className: "footer-dot" }),
        /* @__PURE__ */ jsxs2("span", { className: "footer-stat", children: [
          conditionalCount,
          " rule",
          conditionalCount !== 1 ? "s" : ""
        ] })
      ] }),
      hasUnsaved && /* @__PURE__ */ jsxs2(Fragment, { children: [
        /* @__PURE__ */ jsx2("span", { className: "footer-dot" }),
        /* @__PURE__ */ jsx2("span", { className: "footer-unsaved", children: "Unsaved" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs2("div", { className: "footer-shortcuts", children: [
      /* @__PURE__ */ jsxs2("span", { className: "footer-shortcut", children: [
        /* @__PURE__ */ jsx2("kbd", { children: "\u2318S" }),
        " Save"
      ] }),
      /* @__PURE__ */ jsxs2("span", { className: "footer-shortcut", children: [
        /* @__PURE__ */ jsx2("kbd", { children: "\u2318B" }),
        " Sidebar"
      ] }),
      /* @__PURE__ */ jsxs2("span", { className: "footer-shortcut", children: [
        /* @__PURE__ */ jsx2("kbd", { children: "Del" }),
        " Delete"
      ] })
    ] })
  ] });
}

// scripts/studio/components/SectionList.tsx
import { useState as useState2, useCallback as useCallback2, useRef as useRef3, useEffect as useEffect3 } from "react";
import {
  GripVertical,
  Plus,
  MoreHorizontal,
  Pencil,
  Copy,
  Trash2
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
  return /* @__PURE__ */ jsx3(
    "div",
    {
      ref: overlayRef,
      className: "modal-overlay open",
      onClick: (e) => {
        if (e.target === overlayRef.current) onClose();
      },
      children: /* @__PURE__ */ jsxs3("div", { className: "modal", style: { width }, children: [
        /* @__PURE__ */ jsx3("div", { className: "modal-header", children: /* @__PURE__ */ jsx3("h3", { children: title }) }),
        children
      ] })
    }
  );
}

// scripts/studio/components/SectionList.tsx
import { Fragment as Fragment2, jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
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
    dispatch({ type: "ADD_SECTION", section: { key: sectionKey, label: trimmedLabel, fields: [] } });
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
        section: { ...sections[renamingIdx], label: trimmed }
      });
    }
    setRenamingIdx(null);
  };
  useEffect3(() => {
    if (!contextMenu) return;
    const handler = (e) => {
      if (contextMenuRef.current && !contextMenuRef.current.contains(e.target)) {
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
  const onDrop = useCallback2((e, toIdx) => {
    e.preventDefault();
    if (dragIdx !== null && dragIdx !== toIdx) {
      dispatch({ type: "MOVE_SECTION", from: dragIdx, to: toIdx });
    }
    setDragIdx(null);
    setDropTarget(null);
  }, [dragIdx, dispatch]);
  return /* @__PURE__ */ jsxs4(Fragment2, { children: [
    /* @__PURE__ */ jsx4("div", { className: "panel-sections-header", children: /* @__PURE__ */ jsx4("span", { className: "panel-sections-title", children: "Sections" }) }),
    /* @__PURE__ */ jsx4("div", { className: "section-list-scroll", children: sections.map((s, i) => /* @__PURE__ */ jsxs4(
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
          borderTopColor: dropTarget === i && dragIdx !== i ? "var(--accent)" : void 0
        },
        children: [
          /* @__PURE__ */ jsx4("span", { className: `drag-handle${hoveredIdx === i ? " visible" : ""}`, children: /* @__PURE__ */ jsx4(GripVertical, { size: 12 }) }),
          renamingIdx === i ? /* @__PURE__ */ jsx4(
            "input",
            {
              ref: renameRef,
              className: "section-rename-input",
              value: renameValue,
              onChange: (e) => setRenameValue(e.target.value),
              onBlur: handleRenameCommit,
              onKeyDown: (e) => {
                if (e.key === "Enter") handleRenameCommit();
                if (e.key === "Escape") setRenamingIdx(null);
              },
              onClick: (e) => e.stopPropagation()
            }
          ) : /* @__PURE__ */ jsx4("span", { className: "section-label", children: s.label || "Untitled" }),
          /* @__PURE__ */ jsx4("span", { className: "section-count", children: s.fields.length }),
          /* @__PURE__ */ jsx4(
            "button",
            {
              className: `section-menu-btn${hoveredIdx === i ? " visible" : ""}`,
              onClick: (e) => {
                e.stopPropagation();
                const rect = e.currentTarget.getBoundingClientRect();
                setContextMenu({ idx: i, x: rect.right + 4, y: rect.top });
              },
              children: /* @__PURE__ */ jsx4(MoreHorizontal, { size: 14 })
            }
          )
        ]
      },
      s.key + i
    )) }),
    /* @__PURE__ */ jsxs4("button", { className: "add-section-btn", onClick: openAddModal, children: [
      /* @__PURE__ */ jsx4(Plus, { size: 14 }),
      " Add Section"
    ] }),
    contextMenu && /* @__PURE__ */ jsxs4(
      "div",
      {
        ref: contextMenuRef,
        className: "context-menu",
        style: { position: "fixed", left: contextMenu.x, top: contextMenu.y, zIndex: 9999 },
        children: [
          /* @__PURE__ */ jsxs4("button", { className: "context-menu-item", onClick: () => handleRenameStart(contextMenu.idx), children: [
            /* @__PURE__ */ jsx4(Pencil, { size: 13 }),
            " Rename"
          ] }),
          /* @__PURE__ */ jsxs4("button", { className: "context-menu-item", onClick: () => handleDuplicate(contextMenu.idx), children: [
            /* @__PURE__ */ jsx4(Copy, { size: 13 }),
            " Duplicate"
          ] }),
          /* @__PURE__ */ jsx4("div", { className: "context-menu-separator" }),
          /* @__PURE__ */ jsxs4("button", { className: "context-menu-item danger", onClick: () => handleDelete(contextMenu.idx), children: [
            /* @__PURE__ */ jsx4(Trash2, { size: 13 }),
            " Delete"
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxs4(Modal, { open: modalOpen, onClose: () => setModalOpen(false), title: "Add Section", children: [
      /* @__PURE__ */ jsxs4("div", { className: "section-modal-fields", children: [
        /* @__PURE__ */ jsxs4("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx4("label", { className: "form-label", children: "Label" }),
          /* @__PURE__ */ jsx4(
            "input",
            {
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
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsxs4("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx4("label", { className: "form-label", children: "Key" }),
          /* @__PURE__ */ jsx4(
            "input",
            {
              className: "form-input",
              value: key,
              onChange: (e) => setKey(e.target.value),
              placeholder: "auto-generated from label"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs4("div", { className: "section-modal-actions", children: [
        /* @__PURE__ */ jsx4("button", { className: "btn-secondary", onClick: () => setModalOpen(false), children: "Cancel" }),
        /* @__PURE__ */ jsx4("button", { className: "btn-primary", onClick: handleSave, children: "Add" })
      ] })
    ] })
  ] });
}

// scripts/studio/components/FieldList.tsx
import { useState as useState8, useCallback as useCallback3, useRef as useRef7, useEffect as useEffect7 } from "react";
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
  HelpCircle
} from "lucide-react";

// scripts/studio/constants.ts
var QUICK_TEMPLATES = [
  { label: "Recipient Name", icon: "user", field: { key: "recipientName", label: "Their name", type: "text", required: true, placeholder: "e.g. Priya" } },
  { label: "Sender Name", icon: "user-check", field: { key: "senderName", label: "Your name", type: "text", required: true } },
  { label: "Photos", icon: "images", field: { key: "photos", label: "Add photos", type: "image_array", max: 8 } },
  { label: "Cover Photo", icon: "image", field: { key: "coverPhoto", label: "Cover photo", type: "image", required: true, aspectRatio: "3:4" } },
  { label: "Song", icon: "music", field: { key: "song", label: "Add a song", type: "audio" } },
  { label: "Message", icon: "message-square", field: { key: "personalMessage", label: "Your message", type: "textarea", required: true, placeholder: "Write something from the heart..." } },
  { label: "Quiz", icon: "help-circle", field: { key: "quiz", label: "Quiz questions", type: "quiz" } },
  { label: "Birthday", icon: "calendar", field: { key: "dateOfBirth", label: "Their birthday", type: "date" } },
  { label: "Color", icon: "palette", field: { key: "accentColor", label: "Theme colour", type: "color", default: "#ff6eb4", presets: ["#ff6eb4", "#6366f1", "#f59e0b", "#10b981", "#ec4899", "#8b5cf6"] } }
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
  { name: "lottie-react", desc: "Lottie animations" }
];

// scripts/studio/components/TypePicker.tsx
import { useState as useState3, useRef as useRef4, useEffect as useEffect4 } from "react";
import { Search as Search2, X as X2 } from "lucide-react";
import * as Icons from "lucide-react";
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
function FieldIcon({ name, size = 16 }) {
  const iconName = name.charAt(0).toUpperCase() + name.slice(1).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
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
  const entries = Object.entries(FIELD_TYPES).filter(([key, cfg]) => !q || key.includes(q) || cfg.label.toLowerCase().includes(q));
  return /* @__PURE__ */ jsx5("div", { className: "modal-overlay", onClick: onClose, children: /* @__PURE__ */ jsxs5("div", { className: "type-picker", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsxs5("div", { className: "type-picker-header", children: [
      /* @__PURE__ */ jsx5("h3", { children: "Add Field" }),
      /* @__PURE__ */ jsx5("button", { className: "icon-btn", onClick: onClose, children: /* @__PURE__ */ jsx5(X2, { size: 16 }) })
    ] }),
    /* @__PURE__ */ jsxs5("div", { className: "type-picker-search", children: [
      /* @__PURE__ */ jsx5(Search2, { size: 14 }),
      /* @__PURE__ */ jsx5(
        "input",
        {
          ref: inputRef,
          type: "text",
          placeholder: "Search field types...",
          value: search,
          onChange: (e) => setSearch(e.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ jsxs5("div", { className: "type-picker-body", children: [
      FIELD_CATEGORIES.map((cat) => {
        const items = entries.filter(([, cfg]) => cfg.category === cat.key);
        if (items.length === 0) return null;
        return /* @__PURE__ */ jsxs5("div", { className: "type-picker-category", children: [
          /* @__PURE__ */ jsx5("div", { className: "type-picker-category-label", children: cat.label }),
          /* @__PURE__ */ jsx5("div", { className: "type-picker-grid", children: items.map(([type, cfg]) => /* @__PURE__ */ jsxs5(
            "button",
            {
              className: "type-picker-item",
              onClick: () => onSelect(type),
              children: [
                /* @__PURE__ */ jsx5("span", { className: "type-picker-icon", children: /* @__PURE__ */ jsx5(FieldIcon, { name: cfg.icon, size: 18 }) }),
                /* @__PURE__ */ jsx5("span", { className: "type-picker-label", children: cfg.label })
              ]
            },
            type
          )) })
        ] }, cat.key);
      }),
      entries.length === 0 && /* @__PURE__ */ jsxs5("div", { className: "type-picker-empty", children: [
        'No field types match "',
        search,
        '"'
      ] })
    ] })
  ] }) });
}

// scripts/studio/components/ConditionalsBuilder.tsx
import { useState as useState4, useRef as useRef5, useEffect as useEffect5 } from "react";
import { Plus as Plus2, X as X3, GitBranch, ChevronDown, ChevronRight, ArrowRight } from "lucide-react";
import { jsx as jsx6, jsxs as jsxs6 } from "react/jsx-runtime";
function FieldKeySelect({
  selected,
  allKeys,
  onChange
}) {
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
  return /* @__PURE__ */ jsxs6("div", { className: "cond-field-select", ref, children: [
    /* @__PURE__ */ jsxs6("button", { className: "cond-field-select-trigger", onClick: () => setOpen(!open), children: [
      selected.length === 0 ? /* @__PURE__ */ jsx6("span", { className: "cond-field-select-placeholder", children: "Select fields..." }) : /* @__PURE__ */ jsx6("div", { className: "cond-field-pills", children: selected.map((k) => /* @__PURE__ */ jsxs6("span", { className: "cond-field-pill", children: [
        k,
        /* @__PURE__ */ jsx6(
          "button",
          {
            className: "cond-field-pill-remove",
            onClick: (e) => {
              e.stopPropagation();
              toggle(k);
            },
            children: /* @__PURE__ */ jsx6(X3, { size: 10 })
          }
        )
      ] }, k)) }),
      /* @__PURE__ */ jsx6(ChevronDown, { size: 13, style: { flexShrink: 0, color: "var(--text-tertiary)" } })
    ] }),
    open && /* @__PURE__ */ jsxs6("div", { className: "cond-field-select-dropdown", children: [
      allKeys.filter((k) => !selected.includes(k)).length === 0 && selected.length === allKeys.length && /* @__PURE__ */ jsx6("div", { className: "cond-field-select-empty", children: "All fields selected" }),
      allKeys.map((k) => /* @__PURE__ */ jsxs6("label", { className: "cond-field-select-option", children: [
        /* @__PURE__ */ jsx6(
          "input",
          {
            type: "checkbox",
            checked: selected.includes(k),
            onChange: () => toggle(k)
          }
        ),
        /* @__PURE__ */ jsx6("span", { children: k })
      ] }, k))
    ] })
  ] });
}
function ConditionalRow({
  conditional,
  index,
  allKeys,
  allFields,
  onUpdate,
  onDelete
}) {
  const [hovered, setHovered] = useState4(false);
  const sourceField = allFields.find((f) => f.key === conditional.if.field);
  const renderValueInput = () => {
    if (sourceField?.type === "select" && sourceField.options) {
      return /* @__PURE__ */ jsxs6(
        "select",
        {
          className: "cond-value-input",
          value: String(conditional.if.equals),
          onChange: (e) => onUpdate({ ...conditional, if: { ...conditional.if, equals: e.target.value } }),
          children: [
            /* @__PURE__ */ jsx6("option", { value: "", children: "Select value..." }),
            sourceField.options.map((opt) => /* @__PURE__ */ jsx6("option", { value: opt, children: opt }, opt))
          ]
        }
      );
    }
    if (sourceField?.type === "toggle") {
      return /* @__PURE__ */ jsxs6("div", { className: "cond-toggle-group", children: [
        /* @__PURE__ */ jsx6(
          "button",
          {
            className: `cond-toggle-btn${conditional.if.equals === true || conditional.if.equals === "true" ? " active" : ""}`,
            onClick: () => onUpdate({ ...conditional, if: { ...conditional.if, equals: true } }),
            children: "On"
          }
        ),
        /* @__PURE__ */ jsx6(
          "button",
          {
            className: `cond-toggle-btn${conditional.if.equals === false || conditional.if.equals === "false" ? " active" : ""}`,
            onClick: () => onUpdate({ ...conditional, if: { ...conditional.if, equals: false } }),
            children: "Off"
          }
        )
      ] });
    }
    return /* @__PURE__ */ jsx6(
      "input",
      {
        className: "cond-value-input",
        value: String(conditional.if.equals ?? ""),
        onChange: (e) => onUpdate({ ...conditional, if: { ...conditional.if, equals: e.target.value } }),
        placeholder: "value"
      }
    );
  };
  return /* @__PURE__ */ jsxs6(
    "div",
    {
      className: "cond-rule",
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      children: [
        /* @__PURE__ */ jsxs6("div", { className: "cond-rule-when", children: [
          /* @__PURE__ */ jsx6("span", { className: "cond-label cond-label-when", children: "WHEN" }),
          /* @__PURE__ */ jsxs6(
            "select",
            {
              className: "cond-field-dropdown",
              value: conditional.if.field,
              onChange: (e) => onUpdate({ ...conditional, if: { ...conditional.if, field: e.target.value } }),
              children: [
                /* @__PURE__ */ jsx6("option", { value: "", children: "Select field..." }),
                allKeys.map((k) => {
                  const f = allFields.find((af) => af.key === k);
                  return /* @__PURE__ */ jsx6("option", { value: k, children: f?.label || k }, k);
                })
              ]
            }
          ),
          /* @__PURE__ */ jsx6("span", { className: "cond-equals-label", children: "is" }),
          renderValueInput()
        ] }),
        /* @__PURE__ */ jsx6("div", { className: "cond-rule-arrow", children: /* @__PURE__ */ jsx6(ArrowRight, { size: 14, style: { color: "var(--accent)" } }) }),
        /* @__PURE__ */ jsxs6("div", { className: "cond-rule-show", children: [
          /* @__PURE__ */ jsx6("span", { className: "cond-label cond-label-show", children: "SHOW" }),
          /* @__PURE__ */ jsx6(
            FieldKeySelect,
            {
              selected: conditional.show,
              allKeys,
              onChange: (show) => onUpdate({ ...conditional, show })
            }
          )
        ] }),
        /* @__PURE__ */ jsx6(
          "button",
          {
            className: `cond-rule-delete${hovered ? " visible" : ""}`,
            onClick: onDelete,
            title: "Remove rule",
            children: /* @__PURE__ */ jsx6(X3, { size: 14 })
          }
        )
      ]
    }
  );
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
      show: []
    };
    dispatch({ type: "ADD_CONDITIONAL", conditional: cond });
    setExpanded(true);
  };
  if (!expanded && conditionals.length === 0) {
    return /* @__PURE__ */ jsx6("div", { className: "conditionals-collapsed", children: /* @__PURE__ */ jsxs6("button", { className: "conditionals-toggle", onClick: addConditional, children: [
      /* @__PURE__ */ jsx6(GitBranch, { size: 13 }),
      " Add Conditional Logic"
    ] }) });
  }
  return /* @__PURE__ */ jsxs6("div", { className: "conditionals-section", children: [
    /* @__PURE__ */ jsxs6("button", { className: "conditionals-header", onClick: () => setExpanded(!expanded), children: [
      /* @__PURE__ */ jsx6(GitBranch, { size: 14, style: { color: "var(--accent)" } }),
      /* @__PURE__ */ jsx6("span", { className: "conditionals-title", children: "Conditional Logic" }),
      conditionals.length > 0 && /* @__PURE__ */ jsx6("span", { className: "conditionals-count", children: conditionals.length }),
      expanded ? /* @__PURE__ */ jsx6(ChevronDown, { size: 14 }) : /* @__PURE__ */ jsx6(ChevronRight, { size: 14 })
    ] }),
    expanded && /* @__PURE__ */ jsxs6("div", { className: "conditionals-body", children: [
      conditionals.length === 0 && /* @__PURE__ */ jsx6("div", { className: "conditionals-empty", children: /* @__PURE__ */ jsx6("p", { children: "No rules yet. Add one to show/hide fields based on conditions." }) }),
      conditionals.map((cond, i) => /* @__PURE__ */ jsx6(
        ConditionalRow,
        {
          conditional: cond,
          index: i,
          allKeys,
          allFields,
          onUpdate: (c) => dispatch({ type: "UPDATE_CONDITIONAL", idx: i, conditional: c }),
          onDelete: () => dispatch({ type: "DELETE_CONDITIONAL", idx: i })
        },
        i
      )),
      /* @__PURE__ */ jsxs6("button", { className: "cond-add-btn", onClick: addConditional, children: [
        /* @__PURE__ */ jsx6(Plus2, { size: 13 }),
        " Add Rule"
      ] })
    ] })
  ] });
}

// scripts/studio/components/FieldEditModal.tsx
import { useState as useState7, useEffect as useEffect6 } from "react";
import { X as X4, Settings, Paintbrush, SlidersHorizontal, Wrench, Layers as Layers2, ChevronRight as ChevronRight3, ChevronDown as ChevronDown3, Plus as Plus4, Trash2 as Trash23 } from "lucide-react";

// scripts/studio/components/QuizBuilder.tsx
import { useState as useState5 } from "react";
import { Plus as Plus3, Trash2 as Trash22, Check, ChevronDown as ChevronDown2, ChevronRight as ChevronRight2, Image as ImageIcon, Lightbulb, MessageSquare } from "lucide-react";
import { jsx as jsx7, jsxs as jsxs7 } from "react/jsx-runtime";
function makeId() {
  return "q" + Math.random().toString(36).slice(2, 8);
}
function QuestionCard({
  question,
  index,
  config: config2,
  onUpdate,
  onDelete
}) {
  const updateOption = (optIdx, value) => {
    const options = [...question.options];
    options[optIdx] = value;
    onUpdate({ ...question, options });
  };
  const addOption = () => {
    onUpdate({ ...question, options: [...question.options, `Option ${question.options.length + 1}`] });
  };
  const removeOption = (optIdx) => {
    const options = question.options.filter((_, i) => i !== optIdx);
    const correctIndex = question.correctIndex >= options.length ? Math.max(0, options.length - 1) : question.correctIndex > optIdx ? question.correctIndex - 1 : question.correctIndex;
    const correctIndices = (question.correctIndices || []).map((ci) => ci > optIdx ? ci - 1 : ci).filter((ci) => ci !== optIdx && ci < options.length);
    onUpdate({ ...question, options, correctIndex, correctIndices });
  };
  const toggleMultiCorrect = (optIdx) => {
    const current = question.correctIndices || [];
    const next = current.includes(optIdx) ? current.filter((i) => i !== optIdx) : [...current, optIdx].sort();
    onUpdate({ ...question, correctIndices: next, correctIndex: next[0] ?? 0 });
  };
  return /* @__PURE__ */ jsxs7("div", { className: "quiz-card", children: [
    /* @__PURE__ */ jsxs7("div", { className: "quiz-card-header", children: [
      /* @__PURE__ */ jsx7("span", { className: "quiz-card-num", children: index + 1 }),
      /* @__PURE__ */ jsx7(
        "input",
        {
          className: "form-input quiz-question-input",
          value: question.text,
          onChange: (e) => onUpdate({ ...question, text: e.target.value }),
          placeholder: "Question text"
        }
      ),
      /* @__PURE__ */ jsx7("button", { className: "icon-btn", onClick: onDelete, title: "Delete question", children: /* @__PURE__ */ jsx7(Trash22, { size: 14 }) })
    ] }),
    config2.allowImages && /* @__PURE__ */ jsxs7("div", { className: "quiz-extra-row", children: [
      /* @__PURE__ */ jsx7(ImageIcon, { size: 13, style: { color: "var(--text-tertiary)", flexShrink: 0 } }),
      /* @__PURE__ */ jsx7(
        "input",
        {
          className: "form-input",
          value: question.image || "",
          onChange: (e) => onUpdate({ ...question, image: e.target.value || void 0 }),
          placeholder: "Image URL (optional)",
          style: { flex: 1 }
        }
      )
    ] }),
    /* @__PURE__ */ jsx7("div", { className: "quiz-options", children: question.options.map((opt, oi) => {
      const isCorrect = config2.allowMultipleCorrect ? (question.correctIndices || []).includes(oi) : question.correctIndex === oi;
      return /* @__PURE__ */ jsxs7("div", { className: "quiz-option-row", children: [
        /* @__PURE__ */ jsx7(
          "button",
          {
            className: `quiz-correct-btn ${isCorrect ? "active" : ""}`,
            onClick: () => {
              if (config2.allowMultipleCorrect) {
                toggleMultiCorrect(oi);
              } else {
                onUpdate({ ...question, correctIndex: oi });
              }
            },
            title: config2.allowMultipleCorrect ? "Toggle correct" : "Mark as correct",
            children: /* @__PURE__ */ jsx7(Check, { size: 12 })
          }
        ),
        /* @__PURE__ */ jsx7(
          "input",
          {
            className: "form-input",
            value: opt,
            onChange: (e) => updateOption(oi, e.target.value),
            style: { flex: 1 }
          }
        ),
        question.options.length > 2 && /* @__PURE__ */ jsx7("button", { className: "icon-btn", onClick: () => removeOption(oi), children: /* @__PURE__ */ jsx7(Trash22, { size: 12 }) })
      ] }, oi);
    }) }),
    question.options.length < (config2.maxOptions ?? 6) && /* @__PURE__ */ jsxs7("button", { className: "quiz-add-option", onClick: addOption, children: [
      /* @__PURE__ */ jsx7(Plus3, { size: 12 }),
      " Add option ",
      config2.maxOptions ? `(${question.options.length}/${config2.maxOptions})` : ""
    ] }),
    (config2.allowHints || config2.allowExplanations || config2.allowPoints) && /* @__PURE__ */ jsxs7("div", { className: "quiz-extras", children: [
      config2.allowHints && /* @__PURE__ */ jsxs7("div", { className: "quiz-extra-row", children: [
        /* @__PURE__ */ jsx7(Lightbulb, { size: 13, style: { color: "var(--text-tertiary)", flexShrink: 0 } }),
        /* @__PURE__ */ jsx7(
          "input",
          {
            className: "form-input",
            value: question.hint || "",
            onChange: (e) => onUpdate({ ...question, hint: e.target.value || void 0 }),
            placeholder: "Hint (shown before answering)",
            style: { flex: 1 }
          }
        )
      ] }),
      config2.allowExplanations && /* @__PURE__ */ jsxs7("div", { className: "quiz-extra-row", children: [
        /* @__PURE__ */ jsx7(MessageSquare, { size: 13, style: { color: "var(--text-tertiary)", flexShrink: 0 } }),
        /* @__PURE__ */ jsx7(
          "input",
          {
            className: "form-input",
            value: question.explanation || "",
            onChange: (e) => onUpdate({ ...question, explanation: e.target.value || void 0 }),
            placeholder: "Explanation (shown after answering)",
            style: { flex: 1 }
          }
        )
      ] }),
      config2.allowPoints && /* @__PURE__ */ jsxs7("div", { className: "quiz-extra-row", children: [
        /* @__PURE__ */ jsx7("span", { style: { fontSize: "var(--font-size-xs)", color: "var(--text-tertiary)", flexShrink: 0, width: "13px", textAlign: "center" }, children: "\u2605" }),
        /* @__PURE__ */ jsx7(
          "input",
          {
            className: "form-input",
            type: "number",
            min: 1,
            value: question.points ?? 1,
            onChange: (e) => onUpdate({ ...question, points: e.target.value ? Number(e.target.value) : void 0 }),
            placeholder: "Points",
            style: { width: "80px" }
          }
        ),
        /* @__PURE__ */ jsx7("span", { style: { fontSize: "var(--font-size-xs)", color: "var(--text-tertiary)" }, children: "points" })
      ] })
    ] })
  ] });
}
var DEFAULT_CONFIG = {};
function QuizBuilder({ questions, onChange, config: config2 = DEFAULT_CONFIG }) {
  const [expanded, setExpanded] = useState5(questions.length > 0);
  const addQuestion = () => {
    const q = {
      id: makeId(),
      text: "",
      options: ["Option 1", "Option 2", "Option 3"],
      correctIndex: 0
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
  return /* @__PURE__ */ jsxs7("div", { className: "quiz-builder-section", children: [
    /* @__PURE__ */ jsxs7("button", { className: "quiz-builder-toggle", onClick: () => setExpanded(!expanded), children: [
      expanded ? /* @__PURE__ */ jsx7(ChevronDown2, { size: 14 }) : /* @__PURE__ */ jsx7(ChevronRight2, { size: 14 }),
      /* @__PURE__ */ jsxs7("span", { children: [
        questions.length,
        config2.maxQuestions ? `/${config2.maxQuestions}` : "",
        " question",
        questions.length !== 1 ? "s" : ""
      ] })
    ] }),
    expanded && /* @__PURE__ */ jsxs7("div", { className: "quiz-builder-body", children: [
      questions.map((q, i) => /* @__PURE__ */ jsx7(
        QuestionCard,
        {
          question: q,
          index: i,
          config: config2,
          onUpdate: (updated) => updateQuestion(i, updated),
          onDelete: () => deleteQuestion(i)
        },
        q.id
      )),
      (!config2.maxQuestions || questions.length < config2.maxQuestions) && /* @__PURE__ */ jsxs7("button", { className: "quiz-builder-add", onClick: addQuestion, children: [
        /* @__PURE__ */ jsx7(Plus3, { size: 14 }),
        " Add Question"
      ] })
    ] })
  ] });
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
  return /* @__PURE__ */ jsxs8("div", { className: "tag-input-container", onClick: () => inputRef.current?.focus(), children: [
    values.map((v, i) => /* @__PURE__ */ jsxs8("span", { className: "tag-chip", children: [
      v,
      /* @__PURE__ */ jsx8("button", { onClick: () => remove(i), children: "\xD7" })
    ] }, i)),
    /* @__PURE__ */ jsx8(
      "input",
      {
        ref: inputRef,
        className: "tag-input",
        value: input,
        onChange: (e) => setInput(e.target.value),
        onKeyDown: handleKeyDown,
        placeholder: values.length === 0 ? placeholder : ""
      }
    )
  ] });
}

// scripts/studio/components/FieldEditModal.tsx
import * as Icons2 from "lucide-react";
import { Fragment as Fragment3, jsx as jsx9, jsxs as jsxs9 } from "react/jsx-runtime";
function FieldIcon2({ name, size = 14 }) {
  const iconName = name.charAt(0).toUpperCase() + name.slice(1).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  const Icon = Icons2[iconName];
  return Icon ? /* @__PURE__ */ jsx9(Icon, { size }) : null;
}
function Section({
  title,
  icon,
  defaultOpen = true,
  children
}) {
  const [open, setOpen] = useState7(defaultOpen);
  return /* @__PURE__ */ jsxs9("div", { className: "field-modal-section", children: [
    /* @__PURE__ */ jsxs9("button", { className: "field-modal-section-header", onClick: () => setOpen(!open), children: [
      /* @__PURE__ */ jsx9("span", { className: "field-modal-section-icon", children: icon }),
      /* @__PURE__ */ jsx9("span", { className: "field-modal-section-title", children: title }),
      open ? /* @__PURE__ */ jsx9(ChevronDown3, { size: 14 }) : /* @__PURE__ */ jsx9(ChevronRight3, { size: 14 })
    ] }),
    open && /* @__PURE__ */ jsx9("div", { className: "field-modal-section-body", children })
  ] });
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
  { value: "video_array", label: "Video Gallery" },
  { value: "audio", label: "Audio" }
];
function SubFieldsEditor({ fields, onChange }) {
  const addField = () => {
    onChange([...fields, { key: `field_${fields.length + 1}`, label: `Field ${fields.length + 1}`, type: "text" }]);
  };
  const updateField = (idx, patch) => {
    const next = [...fields];
    next[idx] = { ...next[idx], ...patch };
    onChange(next);
  };
  const removeField = (idx) => {
    onChange(fields.filter((_, i) => i !== idx));
  };
  return /* @__PURE__ */ jsxs9("div", { className: "subfields-editor", children: [
    fields.map((sf, i) => /* @__PURE__ */ jsxs9("div", { className: "subfield-row", children: [
      /* @__PURE__ */ jsxs9("div", { className: "subfield-row-inputs", children: [
        /* @__PURE__ */ jsx9(
          "input",
          {
            className: "form-input",
            value: sf.label,
            onChange: (e) => updateField(i, { label: e.target.value }),
            placeholder: "Label",
            style: { flex: 1 }
          }
        ),
        /* @__PURE__ */ jsx9(
          "input",
          {
            className: "form-input font-mono",
            value: sf.key,
            onChange: (e) => updateField(i, { key: e.target.value }),
            placeholder: "key",
            style: { width: 100 }
          }
        ),
        /* @__PURE__ */ jsx9(
          "select",
          {
            className: "form-input",
            value: sf.type,
            onChange: (e) => updateField(i, { type: e.target.value }),
            style: { width: 110 },
            children: SUB_FIELD_TYPES.map((t) => /* @__PURE__ */ jsx9("option", { value: t.value, children: t.label }, t.value))
          }
        ),
        /* @__PURE__ */ jsx9("button", { className: "icon-btn", onClick: () => removeField(i), title: "Remove sub-field", children: /* @__PURE__ */ jsx9(Trash23, { size: 12 }) })
      ] }),
      sf.type === "select" && /* @__PURE__ */ jsx9(
        "input",
        {
          className: "form-input",
          value: (sf.options || []).join(", "),
          onChange: (e) => updateField(i, { options: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) }),
          placeholder: "Options (comma-separated)",
          style: { marginTop: 4 }
        }
      )
    ] }, i)),
    /* @__PURE__ */ jsxs9("button", { className: "subfield-add", onClick: addField, children: [
      /* @__PURE__ */ jsx9(Plus4, { size: 13 }),
      " Add Sub-field"
    ] })
  ] });
}
function FieldEditModal({ field: initialField, demoValue: initialDemo, onSave, onClose }) {
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
  const hasAppearance = field.type === "text" || field.type === "textarea" || field.type === "number" || field.type === "date";
  const hasConstraints = field.type === "text" || field.type === "textarea" || field.type === "number" || field.type === "image" || field.type === "image_array" || field.type === "video" || field.type === "video_array" || field.type === "audio";
  return /* @__PURE__ */ jsx9("div", { className: "field-modal-overlay", onClick: (e) => {
    if (e.target === e.currentTarget) onClose();
  }, children: /* @__PURE__ */ jsxs9("div", { className: "field-modal", children: [
    /* @__PURE__ */ jsxs9("div", { className: "field-modal-header", children: [
      /* @__PURE__ */ jsxs9("div", { className: "field-modal-header-left", children: [
        /* @__PURE__ */ jsx9("span", { className: "field-modal-type-icon", children: /* @__PURE__ */ jsx9(FieldIcon2, { name: ft?.icon || "help-circle", size: 16 }) }),
        /* @__PURE__ */ jsxs9("div", { children: [
          /* @__PURE__ */ jsx9("div", { className: "field-modal-field-name", children: field.label || "Untitled" }),
          /* @__PURE__ */ jsx9("div", { className: "field-modal-field-type", children: ft?.label || field.type })
        ] })
      ] }),
      /* @__PURE__ */ jsx9("button", { className: "field-modal-close", onClick: onClose, children: /* @__PURE__ */ jsx9(X4, { size: 16 }) })
    ] }),
    /* @__PURE__ */ jsxs9("div", { className: "field-modal-body", children: [
      /* @__PURE__ */ jsxs9(Section, { title: "General", icon: /* @__PURE__ */ jsx9(Settings, { size: 14 }), defaultOpen: true, children: [
        /* @__PURE__ */ jsxs9("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx9("label", { className: "form-label", children: "Label" }),
          /* @__PURE__ */ jsx9("input", { className: "form-input", value: field.label, onChange: (e) => update({ label: e.target.value }) })
        ] }),
        /* @__PURE__ */ jsxs9("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx9("label", { className: "form-label", children: "Key" }),
          /* @__PURE__ */ jsx9("input", { className: "form-input font-mono", value: field.key, onChange: (e) => update({ key: e.target.value }) })
        ] }),
        field.type !== "group" && field.type !== "group_array" && /* @__PURE__ */ jsxs9("div", { className: "form-group-row", children: [
          /* @__PURE__ */ jsx9("label", { className: "form-label", children: "Required" }),
          /* @__PURE__ */ jsxs9("label", { className: "toggle-switch", children: [
            /* @__PURE__ */ jsx9("input", { type: "checkbox", checked: field.required || false, onChange: (e) => update({ required: e.target.checked }) }),
            /* @__PURE__ */ jsx9("span", { className: "toggle-switch-slider" })
          ] })
        ] })
      ] }),
      isGroup && /* @__PURE__ */ jsx9(Section, { title: "Sub-fields", icon: /* @__PURE__ */ jsx9(Layers2, { size: 14 }), defaultOpen: true, children: /* @__PURE__ */ jsx9(
        SubFieldsEditor,
        {
          fields: field.fields || [],
          onChange: (fields) => update({ fields })
        }
      ) }),
      hasAppearance && /* @__PURE__ */ jsxs9(Section, { title: "Appearance", icon: /* @__PURE__ */ jsx9(Paintbrush, { size: 14 }), defaultOpen: true, children: [
        (field.type === "text" || field.type === "textarea") && /* @__PURE__ */ jsxs9("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx9("label", { className: "form-label", children: "Placeholder" }),
          /* @__PURE__ */ jsx9("input", { className: "form-input", value: field.placeholder || "", onChange: (e) => update({ placeholder: e.target.value || void 0 }) })
        ] }),
        /* @__PURE__ */ jsxs9("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx9("label", { className: "form-label", children: "Hint" }),
          /* @__PURE__ */ jsx9("input", { className: "form-input", value: field.hint || "", onChange: (e) => update({ hint: e.target.value || void 0 }), placeholder: "Help text below the field" })
        ] })
      ] }),
      hasConstraints && /* @__PURE__ */ jsxs9(Section, { title: "Constraints", icon: /* @__PURE__ */ jsx9(SlidersHorizontal, { size: 14 }), defaultOpen: false, children: [
        (field.type === "text" || field.type === "textarea") && /* @__PURE__ */ jsxs9(Fragment3, { children: [
          /* @__PURE__ */ jsxs9("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx9("label", { className: "form-label", children: "Min length" }),
            /* @__PURE__ */ jsx9("input", { className: "form-input", type: "number", value: field.constraints?.minLength ?? "", onChange: (e) => update({ constraints: { ...field.constraints, minLength: e.target.value ? Number(e.target.value) : void 0 } }) })
          ] }),
          /* @__PURE__ */ jsxs9("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx9("label", { className: "form-label", children: "Max length" }),
            /* @__PURE__ */ jsx9("input", { className: "form-input", type: "number", value: field.constraints?.maxLength ?? "", onChange: (e) => update({ constraints: { ...field.constraints, maxLength: e.target.value ? Number(e.target.value) : void 0 } }) })
          ] }),
          field.type === "textarea" && /* @__PURE__ */ jsxs9("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx9("label", { className: "form-label", children: "Max words" }),
            /* @__PURE__ */ jsx9("input", { className: "form-input", type: "number", value: field.constraints?.maxWords ?? "", onChange: (e) => update({ constraints: { ...field.constraints, maxWords: e.target.value ? Number(e.target.value) : void 0 } }) })
          ] })
        ] }),
        field.type === "number" && /* @__PURE__ */ jsxs9(Fragment3, { children: [
          /* @__PURE__ */ jsxs9("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx9("label", { className: "form-label", children: "Min" }),
            /* @__PURE__ */ jsx9("input", { className: "form-input", type: "number", value: field.constraints?.min ?? "", onChange: (e) => update({ constraints: { ...field.constraints, min: e.target.value ? Number(e.target.value) : void 0 } }) })
          ] }),
          /* @__PURE__ */ jsxs9("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx9("label", { className: "form-label", children: "Max" }),
            /* @__PURE__ */ jsx9("input", { className: "form-input", type: "number", value: field.constraints?.max ?? "", onChange: (e) => update({ constraints: { ...field.constraints, max: e.target.value ? Number(e.target.value) : void 0 } }) })
          ] }),
          /* @__PURE__ */ jsxs9("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx9("label", { className: "form-label", children: "Unit" }),
            /* @__PURE__ */ jsx9("input", { className: "form-input", value: field.constraints?.unit || "", onChange: (e) => update({ constraints: { ...field.constraints, unit: e.target.value || void 0 } }), placeholder: "e.g. years, kg" })
          ] })
        ] }),
        (field.type === "image" || field.type === "image_array") && /* @__PURE__ */ jsxs9(Fragment3, { children: [
          /* @__PURE__ */ jsxs9("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx9("label", { className: "form-label", children: "Aspect Ratio" }),
            /* @__PURE__ */ jsx9("input", { className: "form-input", value: field.aspectRatio || "", onChange: (e) => update({ aspectRatio: e.target.value || void 0 }), placeholder: "e.g. 3:4, 1:1" })
          ] }),
          /* @__PURE__ */ jsxs9("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx9("label", { className: "form-label", children: "Max size (MB)" }),
            /* @__PURE__ */ jsx9("input", { className: "form-input", type: "number", value: field.constraints?.maxSizeMB ?? "", onChange: (e) => update({ constraints: { ...field.constraints, maxSizeMB: e.target.value ? Number(e.target.value) : void 0 } }) })
          ] }),
          field.type === "image_array" && /* @__PURE__ */ jsxs9("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx9("label", { className: "form-label", children: "Max images" }),
            /* @__PURE__ */ jsx9("input", { className: "form-input", type: "number", value: field.max || "", onChange: (e) => update({ max: e.target.value ? Number(e.target.value) : void 0 }) })
          ] })
        ] }),
        field.type === "video" && /* @__PURE__ */ jsxs9(Fragment3, { children: [
          /* @__PURE__ */ jsxs9("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx9("label", { className: "form-label", children: "Max size (MB)" }),
            /* @__PURE__ */ jsx9("input", { className: "form-input", type: "number", value: field.constraints?.maxSizeMB ?? "", onChange: (e) => update({ constraints: { ...field.constraints, maxSizeMB: e.target.value ? Number(e.target.value) : void 0 } }) })
          ] }),
          /* @__PURE__ */ jsxs9("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx9("label", { className: "form-label", children: "Max duration (sec)" }),
            /* @__PURE__ */ jsx9("input", { className: "form-input", type: "number", value: field.constraints?.maxDurationSec ?? "", onChange: (e) => update({ constraints: { ...field.constraints, maxDurationSec: e.target.value ? Number(e.target.value) : void 0 } }) })
          ] })
        ] }),
        field.type === "video_array" && /* @__PURE__ */ jsxs9(Fragment3, { children: [
          /* @__PURE__ */ jsxs9("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx9("label", { className: "form-label", children: "Max videos" }),
            /* @__PURE__ */ jsx9("input", { className: "form-input", type: "number", value: field.max || "", onChange: (e) => update({ max: e.target.value ? Number(e.target.value) : void 0 }) })
          ] }),
          /* @__PURE__ */ jsxs9("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx9("label", { className: "form-label", children: "Max size per video (MB)" }),
            /* @__PURE__ */ jsx9("input", { className: "form-input", type: "number", value: field.constraints?.maxSizeMB ?? "", onChange: (e) => update({ constraints: { ...field.constraints, maxSizeMB: e.target.value ? Number(e.target.value) : void 0 } }) })
          ] }),
          /* @__PURE__ */ jsxs9("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx9("label", { className: "form-label", children: "Max duration per video (sec)" }),
            /* @__PURE__ */ jsx9("input", { className: "form-input", type: "number", value: field.constraints?.maxDurationSec ?? "", onChange: (e) => update({ constraints: { ...field.constraints, maxDurationSec: e.target.value ? Number(e.target.value) : void 0 } }) })
          ] })
        ] }),
        field.type === "audio" && /* @__PURE__ */ jsxs9("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx9("label", { className: "form-label", children: "Max size (MB)" }),
          /* @__PURE__ */ jsx9("input", { className: "form-input", type: "number", value: field.constraints?.maxSizeMB ?? "", onChange: (e) => update({ constraints: { ...field.constraints, maxSizeMB: e.target.value ? Number(e.target.value) : void 0 } }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs9(Section, { title: "Advanced", icon: /* @__PURE__ */ jsx9(Wrench, { size: 14 }), defaultOpen: field.type === "select" || field.type === "color" || field.type === "quiz", children: [
        field.type === "select" && /* @__PURE__ */ jsxs9("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx9("label", { className: "form-label", children: "Options (one per line)" }),
          /* @__PURE__ */ jsx9("textarea", { className: "form-input", rows: 4, value: (field.options || []).join("\n"), onChange: (e) => update({ options: e.target.value.split("\n").filter(Boolean) }) })
        ] }),
        field.type === "color" && /* @__PURE__ */ jsxs9(Fragment3, { children: [
          /* @__PURE__ */ jsxs9("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx9("label", { className: "form-label", children: "Default" }),
            /* @__PURE__ */ jsxs9("div", { className: "color-input-row", children: [
              /* @__PURE__ */ jsx9("input", { type: "color", value: field.default || "#000000", onChange: (e) => update({ default: e.target.value }) }),
              /* @__PURE__ */ jsx9("input", { className: "form-input", value: field.default || "", onChange: (e) => update({ default: e.target.value }), style: { flex: 1 } })
            ] })
          ] }),
          /* @__PURE__ */ jsxs9("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx9("label", { className: "form-label", children: "Presets (hex colors)" }),
            /* @__PURE__ */ jsx9(TagInput, { values: field.presets || [], onChange: (presets) => update({ presets }), placeholder: "#ff6eb4" })
          ] })
        ] }),
        field.type === "date" && /* @__PURE__ */ jsxs9("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx9("label", { className: "form-label", children: "Default value" }),
          /* @__PURE__ */ jsx9("input", { className: "form-input", type: "date", value: field.default || "", onChange: (e) => update({ default: e.target.value || void 0 }) })
        ] }),
        field.type === "quiz" && /* @__PURE__ */ jsxs9(Fragment3, { children: [
          /* @__PURE__ */ jsxs9("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx9("label", { className: "form-label", children: "Quiz Capabilities" }),
            /* @__PURE__ */ jsx9("div", { className: "quiz-config-grid", children: [
              ["allowHints", "Hints"],
              ["allowExplanations", "Explanations"],
              ["allowImages", "Images"],
              ["allowMultipleCorrect", "Multiple Correct"],
              ["allowPoints", "Points"]
            ].map(([key, label]) => /* @__PURE__ */ jsxs9("label", { className: "quiz-config-toggle", children: [
              /* @__PURE__ */ jsx9(
                "input",
                {
                  type: "checkbox",
                  checked: !!field.config?.[key],
                  onChange: (e) => {
                    const prev = field.config || {};
                    update({ config: { ...prev, [key]: e.target.checked || void 0 } });
                  }
                }
              ),
              /* @__PURE__ */ jsx9("span", { children: label })
            ] }, key)) })
          ] }),
          /* @__PURE__ */ jsxs9("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx9("label", { className: "form-label", children: "Max Questions" }),
            /* @__PURE__ */ jsx9(
              "input",
              {
                className: "form-input",
                type: "number",
                min: 1,
                value: field.config?.maxQuestions ?? "",
                onChange: (e) => {
                  const prev = field.config || {};
                  update({ config: { ...prev, maxQuestions: e.target.value ? Number(e.target.value) : void 0 } });
                },
                placeholder: "No limit",
                style: { width: "120px" }
              }
            )
          ] }),
          /* @__PURE__ */ jsxs9("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx9("label", { className: "form-label", children: "Max Options per Question" }),
            /* @__PURE__ */ jsx9(
              "input",
              {
                className: "form-input",
                type: "number",
                min: 2,
                max: 10,
                value: field.config?.maxOptions ?? "",
                onChange: (e) => {
                  const prev = field.config || {};
                  update({ config: { ...prev, maxOptions: e.target.value ? Number(e.target.value) : void 0 } });
                },
                placeholder: "6 (default)",
                style: { width: "120px" }
              }
            )
          ] }),
          /* @__PURE__ */ jsx9(
            QuizBuilder,
            {
              questions: demo || [],
              onChange: (questions) => setDemo(questions),
              config: field.config || {}
            }
          )
        ] }),
        (field.type === "text" || field.type === "textarea" || field.type === "number") && /* @__PURE__ */ jsxs9("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx9("label", { className: "form-label", children: "Default value" }),
          /* @__PURE__ */ jsx9(
            "input",
            {
              className: "form-input",
              value: field.default != null ? String(field.default) : "",
              onChange: (e) => {
                const val = field.type === "number" && e.target.value ? Number(e.target.value) : e.target.value || void 0;
                update({ default: val });
              },
              type: field.type === "number" ? "number" : "text"
            }
          )
        ] }),
        field.type === "toggle" && /* @__PURE__ */ jsxs9("div", { className: "form-group-row", children: [
          /* @__PURE__ */ jsx9("label", { className: "form-label", children: "Default" }),
          /* @__PURE__ */ jsxs9("label", { className: "toggle-switch", children: [
            /* @__PURE__ */ jsx9("input", { type: "checkbox", checked: !!field.default, onChange: (e) => update({ default: e.target.checked }) }),
            /* @__PURE__ */ jsx9("span", { className: "toggle-switch-slider" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs9("div", { className: "field-modal-footer", children: [
      /* @__PURE__ */ jsx9("button", { className: "btn-secondary", onClick: onClose, children: "Cancel" }),
      /* @__PURE__ */ jsx9("button", { className: "btn-primary", onClick: () => {
        onSave(field, demo);
        onClose();
      }, children: "Save Changes" })
    ] })
  ] }) });
}

// scripts/studio/components/FieldList.tsx
import * as Icons3 from "lucide-react";
import { jsx as jsx10, jsxs as jsxs10 } from "react/jsx-runtime";
function FieldIcon3({ name, size = 14, ...rest }) {
  const iconName = name.charAt(0).toUpperCase() + name.slice(1).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  const Icon = Icons3[iconName];
  return Icon ? /* @__PURE__ */ jsx10(Icon, { size, ...rest }) : null;
}
function FieldPreview({ field, quizQuestions, onAddQuizQuestion }) {
  switch (field.type) {
    case "text":
      return /* @__PURE__ */ jsx10("div", { className: "field-preview", children: /* @__PURE__ */ jsx10("div", { className: "field-preview-input", children: /* @__PURE__ */ jsx10("span", { className: "field-preview-placeholder", children: field.placeholder || "Enter text..." }) }) });
    case "textarea":
      return /* @__PURE__ */ jsx10("div", { className: "field-preview", children: /* @__PURE__ */ jsx10("div", { className: "field-preview-textarea", children: /* @__PURE__ */ jsx10("span", { className: "field-preview-placeholder", children: field.placeholder || "Enter your message..." }) }) });
    case "number":
      return /* @__PURE__ */ jsx10("div", { className: "field-preview", children: /* @__PURE__ */ jsxs10("div", { className: "field-preview-input field-preview-number", children: [
        /* @__PURE__ */ jsx10("span", { className: "field-preview-placeholder", children: "0" }),
        field.constraints?.unit && /* @__PURE__ */ jsx10("span", { className: "field-preview-unit", children: field.constraints.unit })
      ] }) });
    case "date":
      return /* @__PURE__ */ jsx10("div", { className: "field-preview", children: /* @__PURE__ */ jsxs10("div", { className: "field-preview-input", children: [
        /* @__PURE__ */ jsx10("span", { className: "field-preview-placeholder", children: "dd / mm / yyyy" }),
        /* @__PURE__ */ jsx10(FieldIcon3, { name: "calendar", size: 13, style: { color: "var(--text-tertiary)", flexShrink: 0 } })
      ] }) });
    case "select":
      return /* @__PURE__ */ jsx10("div", { className: "field-preview", children: /* @__PURE__ */ jsxs10("div", { className: "field-preview-input field-preview-select", children: [
        /* @__PURE__ */ jsx10("span", { className: "field-preview-placeholder", children: field.options?.[0] || "Select an option..." }),
        /* @__PURE__ */ jsx10(FieldIcon3, { name: "chevron-down", size: 13, style: { color: "var(--text-tertiary)", flexShrink: 0 } })
      ] }) });
    case "toggle":
      return /* @__PURE__ */ jsx10("div", { className: "field-preview", children: /* @__PURE__ */ jsxs10("div", { className: "field-preview-toggle", children: [
        /* @__PURE__ */ jsx10("div", { className: "field-preview-toggle-track", children: /* @__PURE__ */ jsx10("div", { className: "field-preview-toggle-thumb" }) }),
        /* @__PURE__ */ jsx10("span", { className: "field-preview-toggle-label", children: "Enabled" })
      ] }) });
    case "color":
      return /* @__PURE__ */ jsx10("div", { className: "field-preview", children: /* @__PURE__ */ jsxs10("div", { className: "field-preview-color-row", children: [
        /* @__PURE__ */ jsx10(
          "div",
          {
            className: "field-preview-color-swatch",
            style: { backgroundColor: field.default || "#ff6eb4" }
          }
        ),
        /* @__PURE__ */ jsx10("span", { className: "field-preview-color-hex", children: field.default || "#ff6eb4" }),
        field.presets && field.presets.length > 0 && /* @__PURE__ */ jsx10("div", { className: "field-preview-color-presets", children: field.presets.slice(0, 5).map((c, i) => /* @__PURE__ */ jsx10("div", { className: "field-preview-color-preset", style: { backgroundColor: c } }, i)) })
      ] }) });
    case "image":
      return /* @__PURE__ */ jsx10("div", { className: "field-preview", children: /* @__PURE__ */ jsxs10("div", { className: "field-preview-media", children: [
        /* @__PURE__ */ jsx10(ImageIcon2, { size: 20, strokeWidth: 1.5 }),
        /* @__PURE__ */ jsx10("span", { children: "Upload image" }),
        field.aspectRatio && /* @__PURE__ */ jsx10("span", { className: "field-preview-aspect", children: field.aspectRatio })
      ] }) });
    case "image_array":
      return /* @__PURE__ */ jsxs10("div", { className: "field-preview", children: [
        /* @__PURE__ */ jsxs10("div", { className: "field-preview-gallery", children: [
          [0, 1, 2].map((i) => /* @__PURE__ */ jsx10("div", { className: "field-preview-gallery-slot", children: /* @__PURE__ */ jsx10(ImageIcon2, { size: 14, strokeWidth: 1.5 }) }, i)),
          /* @__PURE__ */ jsx10("div", { className: "field-preview-gallery-slot field-preview-gallery-add", children: /* @__PURE__ */ jsx10(Plus5, { size: 14 }) })
        ] }),
        field.max && /* @__PURE__ */ jsxs10("span", { className: "field-preview-media-hint", children: [
          "Up to ",
          field.max,
          " photos"
        ] })
      ] });
    case "video":
      return /* @__PURE__ */ jsx10("div", { className: "field-preview", children: /* @__PURE__ */ jsxs10("div", { className: "field-preview-media", children: [
        /* @__PURE__ */ jsx10(Video, { size: 20, strokeWidth: 1.5 }),
        /* @__PURE__ */ jsx10("span", { children: "Upload video" })
      ] }) });
    case "audio":
      return /* @__PURE__ */ jsx10("div", { className: "field-preview", children: /* @__PURE__ */ jsxs10("div", { className: "field-preview-media", children: [
        /* @__PURE__ */ jsx10(Music, { size: 20, strokeWidth: 1.5 }),
        /* @__PURE__ */ jsx10("span", { children: "Upload audio" })
      ] }) });
    case "quiz": {
      const questions = quizQuestions || [];
      return /* @__PURE__ */ jsx10("div", { className: "field-preview", children: /* @__PURE__ */ jsxs10("div", { className: "field-preview-quiz", children: [
        questions.length === 0 && /* @__PURE__ */ jsxs10("div", { className: "field-preview-media", style: { padding: "10px" }, children: [
          /* @__PURE__ */ jsx10(HelpCircle, { size: 18, strokeWidth: 1.5 }),
          /* @__PURE__ */ jsx10("span", { children: "No questions yet" })
        ] }),
        questions.slice(0, 4).map((q, i) => /* @__PURE__ */ jsxs10("div", { className: "field-preview-quiz-item", children: [
          /* @__PURE__ */ jsx10("span", { className: "field-preview-quiz-num", children: i + 1 }),
          /* @__PURE__ */ jsx10("span", { className: "field-preview-quiz-text", children: q.text || "Untitled question" }),
          /* @__PURE__ */ jsxs10("span", { className: "field-preview-quiz-opts", children: [
            q.options.length,
            " opts"
          ] })
        ] }, q.id)),
        questions.length > 4 && /* @__PURE__ */ jsxs10("div", { style: { fontSize: "var(--font-size-xs)", color: "var(--text-tertiary)", paddingLeft: "4px" }, children: [
          "+",
          questions.length - 4,
          " more"
        ] }),
        /* @__PURE__ */ jsxs10(
          "button",
          {
            className: "field-preview-quiz-add",
            onClick: (e) => {
              e.stopPropagation();
              onAddQuizQuestion?.();
            },
            children: [
              /* @__PURE__ */ jsx10(Plus5, { size: 13 }),
              " Add Question"
            ]
          }
        )
      ] }) });
    }
    case "group":
    case "group_array":
      return /* @__PURE__ */ jsx10("div", { className: "field-preview", children: /* @__PURE__ */ jsxs10("div", { className: "field-preview-group", children: [
        /* @__PURE__ */ jsx10(FieldIcon3, { name: FIELD_TYPES[field.type].icon, size: 16, style: { color: "var(--text-tertiary)" } }),
        /* @__PURE__ */ jsx10("span", { children: field.type === "group_array" ? "Repeating group" : "Field group" })
      ] }) });
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
  const onDrop = useCallback3((e, toIdx) => {
    e.preventDefault();
    if (dragIdx !== null && dragIdx !== toIdx) {
      dispatch({ type: "MOVE_FIELD", from: dragIdx, to: toIdx });
    }
    setDragIdx(null);
    setDropTarget(null);
  }, [dragIdx, dispatch]);
  useEffect7(() => {
    if (!contextMenu) return;
    const handler = (e) => {
      if (contextMenuRef.current && !contextMenuRef.current.contains(e.target)) {
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
      ...deepClone(ft.defaultConfig)
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
    return /* @__PURE__ */ jsx10("div", { className: "panel-fields", children: /* @__PURE__ */ jsxs10("div", { className: "field-list-empty", children: [
      /* @__PURE__ */ jsx10("div", { className: "field-list-empty-icon", children: /* @__PURE__ */ jsx10(FieldIcon3, { name: "layers", size: 32, style: { color: "var(--text-tertiary)" } }) }),
      /* @__PURE__ */ jsx10("p", { className: "field-list-empty-title", children: "No section selected" }),
      /* @__PURE__ */ jsx10("p", { className: "field-list-empty-hint", children: "Add a section from the sidebar to get started." })
    ] }) });
  }
  const filteredFields = section.fields.map((f, i) => ({ field: f, index: i })).filter(({ field: f }) => {
    if (!searchQuery) return true;
    return f.label.toLowerCase().includes(searchQuery) || f.key.toLowerCase().includes(searchQuery) || f.type.includes(searchQuery);
  });
  return /* @__PURE__ */ jsxs10("div", { className: "panel-fields", children: [
    /* @__PURE__ */ jsxs10("div", { className: "panel-fields-header", children: [
      /* @__PURE__ */ jsx10("h2", { children: section.label || "Fields" }),
      /* @__PURE__ */ jsxs10("div", { className: "panel-fields-header-actions", children: [
        /* @__PURE__ */ jsxs10("div", { className: "field-add-dropdown-wrapper", children: [
          /* @__PURE__ */ jsx10(
            "button",
            {
              className: "field-add-quick-btn",
              onClick: () => setQuickOpen(!quickOpen),
              title: "Quick add",
              children: /* @__PURE__ */ jsx10(FieldIcon3, { name: "zap", size: 14 })
            }
          ),
          quickOpen && /* @__PURE__ */ jsxs10("div", { className: "field-add-dropdown", children: [
            /* @__PURE__ */ jsx10("div", { className: "field-add-dropdown-title", children: "Quick Templates" }),
            QUICK_TEMPLATES.map((qt, i) => /* @__PURE__ */ jsxs10("button", { className: "field-add-dropdown-item", onClick: () => addQuickTemplate(qt), children: [
              /* @__PURE__ */ jsx10(FieldIcon3, { name: qt.icon, size: 14 }),
              /* @__PURE__ */ jsx10("span", { children: qt.label })
            ] }, i))
          ] })
        ] }),
        /* @__PURE__ */ jsxs10("button", { className: "field-add-btn-header", onClick: () => setPickerOpen(true), title: "Add field", children: [
          /* @__PURE__ */ jsx10(Plus5, { size: 15 }),
          /* @__PURE__ */ jsx10("span", { children: "Add Field" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs10("div", { className: "field-list", children: [
      filteredFields.length === 0 && section.fields.length > 0 && /* @__PURE__ */ jsxs10("div", { className: "field-list-no-results", children: [
        'No fields match "',
        state.ui.searchQuery,
        '"'
      ] }),
      filteredFields.length === 0 && section.fields.length === 0 && /* @__PURE__ */ jsxs10("div", { className: "field-list-empty-section", children: [
        /* @__PURE__ */ jsx10("p", { children: "This section is empty." }),
        /* @__PURE__ */ jsxs10("button", { className: "field-add-inline", onClick: () => setPickerOpen(true), children: [
          /* @__PURE__ */ jsx10(Plus5, { size: 14 }),
          " Add your first field"
        ] })
      ] }),
      filteredFields.map(({ field: f, index: i }) => {
        const ft = FIELD_TYPES[f.type] || { label: f.type, icon: "help-circle" };
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
              borderTop: dropTarget === i && dragIdx !== i ? "2px solid var(--accent)" : void 0
            },
            children: [
              /* @__PURE__ */ jsx10("span", { className: `drag-handle${hoveredIdx === i || isActive ? " visible" : ""}`, children: /* @__PURE__ */ jsx10(GripVertical2, { size: 12 }) }),
              /* @__PURE__ */ jsxs10("div", { className: "field-card-body", children: [
                /* @__PURE__ */ jsxs10("div", { className: "field-card-top", children: [
                  /* @__PURE__ */ jsx10("span", { className: `field-icon-badge${isActive ? " active" : ""}`, children: /* @__PURE__ */ jsx10(FieldIcon3, { name: ft.icon, size: 13 }) }),
                  /* @__PURE__ */ jsxs10("div", { className: "field-card-label-group", children: [
                    /* @__PURE__ */ jsxs10("span", { className: "field-card-label", children: [
                      f.label || "Untitled",
                      f.required && /* @__PURE__ */ jsx10("span", { className: "field-required-asterisk", children: "*" })
                    ] }),
                    /* @__PURE__ */ jsx10("span", { className: "field-card-meta", children: f.key })
                  ] }),
                  hasConditional && /* @__PURE__ */ jsx10("span", { className: "field-conditional-badge", title: "Has conditional logic", children: /* @__PURE__ */ jsx10(GitBranch2, { size: 12 }) }),
                  /* @__PURE__ */ jsx10("span", { className: "field-type-pill", children: ft.label }),
                  /* @__PURE__ */ jsx10(
                    "button",
                    {
                      className: `field-menu-btn${hoveredIdx === i || isActive ? " visible" : ""}`,
                      onClick: (e) => {
                        e.stopPropagation();
                        const rect = e.currentTarget.getBoundingClientRect();
                        setContextMenu({ idx: i, x: rect.right + 4, y: rect.top });
                      },
                      children: /* @__PURE__ */ jsx10(MoreHorizontal2, { size: 15 })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx10(
                  FieldPreview,
                  {
                    field: f,
                    quizQuestions: f.type === "quiz" ? state.working.demo[f.key] : void 0,
                    onAddQuizQuestion: f.type === "quiz" ? () => {
                      const existing = state.working.demo[f.key] || [];
                      dispatch({
                        type: "SET_DEMO",
                        key: f.key,
                        value: [...existing, {
                          id: "q" + Math.random().toString(36).slice(2, 8),
                          text: "",
                          options: ["Option 1", "Option 2", "Option 3"],
                          correctIndex: 0
                        }]
                      });
                    } : void 0
                  }
                )
              ] })
            ]
          },
          f.key + i
        );
      })
    ] }),
    section.fields.length > 0 && /* @__PURE__ */ jsx10("div", { className: "add-field-area", children: /* @__PURE__ */ jsxs10("button", { className: "add-field-btn", onClick: () => setPickerOpen(true), children: [
      /* @__PURE__ */ jsx10(Plus5, { size: 14 }),
      " Add Field"
    ] }) }),
    /* @__PURE__ */ jsx10(ConditionalsBuilder, {}),
    contextMenu && /* @__PURE__ */ jsxs10(
      "div",
      {
        ref: contextMenuRef,
        className: "context-menu",
        style: { position: "fixed", left: contextMenu.x, top: contextMenu.y, zIndex: 9999 },
        children: [
          /* @__PURE__ */ jsxs10(
            "button",
            {
              className: "context-menu-item",
              onClick: () => {
                setEditingFieldIdx(contextMenu.idx);
                setContextMenu(null);
              },
              children: [
                /* @__PURE__ */ jsx10(Pencil2, { size: 13 }),
                " Edit"
              ]
            }
          ),
          /* @__PURE__ */ jsxs10(
            "button",
            {
              className: "context-menu-item",
              onClick: () => {
                dispatch({ type: "DUPLICATE_FIELD", sectionIdx, fieldIdx: contextMenu.idx });
                setContextMenu(null);
              },
              children: [
                /* @__PURE__ */ jsx10(Copy2, { size: 13 }),
                " Duplicate"
              ]
            }
          ),
          /* @__PURE__ */ jsx10("div", { className: "context-menu-separator" }),
          contextMenu.idx > 0 && /* @__PURE__ */ jsxs10(
            "button",
            {
              className: "context-menu-item",
              onClick: () => {
                dispatch({ type: "MOVE_FIELD", from: contextMenu.idx, to: contextMenu.idx - 1 });
                setContextMenu(null);
              },
              children: [
                /* @__PURE__ */ jsx10(ChevronUp, { size: 13 }),
                " Move Up"
              ]
            }
          ),
          section && contextMenu.idx < section.fields.length - 1 && /* @__PURE__ */ jsxs10(
            "button",
            {
              className: "context-menu-item",
              onClick: () => {
                dispatch({ type: "MOVE_FIELD", from: contextMenu.idx, to: contextMenu.idx + 2 });
                setContextMenu(null);
              },
              children: [
                /* @__PURE__ */ jsx10(ChevronDown4, { size: 13 }),
                " Move Down"
              ]
            }
          ),
          (contextMenu.idx > 0 || section && contextMenu.idx < section.fields.length - 1) && /* @__PURE__ */ jsx10("div", { className: "context-menu-separator" }),
          /* @__PURE__ */ jsxs10(
            "button",
            {
              className: "context-menu-item danger",
              onClick: () => {
                dispatch({ type: "DELETE_FIELD", sectionIdx, fieldIdx: contextMenu.idx });
                setContextMenu(null);
              },
              children: [
                /* @__PURE__ */ jsx10(Trash24, { size: 13 }),
                " Delete"
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx10(TypePicker, { open: pickerOpen, onClose: () => setPickerOpen(false), onSelect: addFieldOfType }),
    editingFieldIdx !== null && section?.fields[editingFieldIdx] && /* @__PURE__ */ jsx10(
      FieldEditModal,
      {
        field: section.fields[editingFieldIdx],
        demoValue: state.working.demo[section.fields[editingFieldIdx].key],
        onSave: (updatedField, updatedDemo) => {
          dispatch({ type: "UPDATE_FIELD", sectionIdx, fieldIdx: editingFieldIdx, field: updatedField });
          if (updatedDemo !== void 0) {
            dispatch({ type: "SET_DEMO", key: updatedField.key, value: updatedDemo });
          }
        },
        onClose: () => setEditingFieldIdx(null)
      }
    )
  ] });
}

// scripts/studio/components/DemoTab.tsx
import { RotateCcw, Plus as Plus6, Trash2 as Trash25, Link2, Clock, Calendar, ImagePlus, Video as Video2 } from "lucide-react";
import { jsx as jsx11, jsxs as jsxs11 } from "react/jsx-runtime";
function AudioEditor({ value, onChange }) {
  const v = value || { url: "" };
  return /* @__PURE__ */ jsxs11("div", { className: "demo-audio-editor", children: [
    /* @__PURE__ */ jsxs11("div", { className: "demo-audio-row", children: [
      /* @__PURE__ */ jsx11(Link2, { size: 13, style: { color: "var(--text-tertiary)", flexShrink: 0, marginTop: 2 } }),
      /* @__PURE__ */ jsx11(
        "input",
        {
          className: "form-input",
          value: v.url || "",
          onChange: (e) => onChange({ ...v, url: e.target.value }),
          placeholder: "Audio URL (mp3, m4a, \u2026)",
          style: { flex: 1 }
        }
      )
    ] }),
    /* @__PURE__ */ jsxs11("div", { className: "demo-audio-trim", children: [
      /* @__PURE__ */ jsxs11("div", { className: "demo-audio-trim-field", children: [
        /* @__PURE__ */ jsx11(Clock, { size: 11, style: { color: "var(--text-tertiary)" } }),
        /* @__PURE__ */ jsx11("span", { className: "demo-audio-trim-label", children: "Start" }),
        /* @__PURE__ */ jsx11(
          "input",
          {
            className: "form-input",
            type: "number",
            min: 0,
            step: 0.1,
            value: v.start ?? "",
            onChange: (e) => onChange({ ...v, start: e.target.value ? Number(e.target.value) : void 0 }),
            placeholder: "0",
            style: { width: 72 }
          }
        ),
        /* @__PURE__ */ jsx11("span", { className: "demo-audio-trim-unit", children: "s" })
      ] }),
      /* @__PURE__ */ jsxs11("div", { className: "demo-audio-trim-field", children: [
        /* @__PURE__ */ jsx11(Clock, { size: 11, style: { color: "var(--text-tertiary)" } }),
        /* @__PURE__ */ jsx11("span", { className: "demo-audio-trim-label", children: "End" }),
        /* @__PURE__ */ jsx11(
          "input",
          {
            className: "form-input",
            type: "number",
            min: 0,
            step: 0.1,
            value: v.end ?? "",
            onChange: (e) => onChange({ ...v, end: e.target.value ? Number(e.target.value) : void 0 }),
            placeholder: "\u2014",
            style: { width: 72 }
          }
        ),
        /* @__PURE__ */ jsx11("span", { className: "demo-audio-trim-unit", children: "s" })
      ] })
    ] })
  ] });
}
function DateEditor({ value, onChange }) {
  return /* @__PURE__ */ jsxs11("div", { className: "demo-date-editor", children: [
    /* @__PURE__ */ jsx11(Calendar, { size: 13, style: { color: "var(--text-tertiary)", flexShrink: 0 } }),
    /* @__PURE__ */ jsx11(
      "input",
      {
        className: "form-input",
        type: "date",
        value: value || "",
        onChange: (e) => onChange(e.target.value),
        style: { flex: 1 }
      }
    )
  ] });
}
function ImageArrayEditor({
  value,
  max,
  onChange
}) {
  const images = Array.isArray(value) ? value : [];
  const canAdd = !max || images.length < max;
  return /* @__PURE__ */ jsxs11("div", { className: "demo-image-array", children: [
    images.map((url, i) => /* @__PURE__ */ jsxs11("div", { className: "demo-image-array-item", children: [
      /* @__PURE__ */ jsx11("div", { className: "demo-image-array-thumb", children: url ? /* @__PURE__ */ jsx11("img", { src: url, alt: "", onError: (e) => {
        e.target.style.display = "none";
      } }) : /* @__PURE__ */ jsx11(ImagePlus, { size: 16, style: { color: "var(--text-tertiary)" } }) }),
      /* @__PURE__ */ jsx11(
        "input",
        {
          className: "form-input",
          value: url,
          onChange: (e) => {
            const next = [...images];
            next[i] = e.target.value;
            onChange(next);
          },
          placeholder: `Image URL ${i + 1}`,
          style: { flex: 1 }
        }
      ),
      /* @__PURE__ */ jsx11("button", { className: "icon-btn", onClick: () => onChange(images.filter((_, j) => j !== i)), title: "Remove", children: /* @__PURE__ */ jsx11(Trash25, { size: 12 }) })
    ] }, i)),
    canAdd && /* @__PURE__ */ jsxs11("button", { className: "demo-image-array-add", onClick: () => onChange([...images, ""]), children: [
      /* @__PURE__ */ jsx11(Plus6, { size: 13 }),
      " Add Image ",
      max ? `(${images.length}/${max})` : ""
    ] })
  ] });
}
function VideoArrayEditor({
  value,
  max,
  onChange
}) {
  const videos = Array.isArray(value) ? value : [];
  const canAdd = !max || videos.length < max;
  return /* @__PURE__ */ jsxs11("div", { className: "demo-image-array", children: [
    videos.map((url, i) => /* @__PURE__ */ jsxs11("div", { className: "demo-image-array-item", children: [
      /* @__PURE__ */ jsx11("div", { className: "demo-image-array-thumb", children: url ? /* @__PURE__ */ jsx11("video", { src: url, style: { width: "100%", height: "100%", objectFit: "cover" }, muted: true }) : /* @__PURE__ */ jsx11(Video2, { size: 16, style: { color: "var(--text-tertiary)" } }) }),
      /* @__PURE__ */ jsx11(
        "input",
        {
          className: "form-input",
          value: url,
          onChange: (e) => {
            const next = [...videos];
            next[i] = e.target.value;
            onChange(next);
          },
          placeholder: `Video URL ${i + 1}`,
          style: { flex: 1 }
        }
      ),
      /* @__PURE__ */ jsx11("button", { className: "icon-btn", onClick: () => onChange(videos.filter((_, j) => j !== i)), title: "Remove", children: /* @__PURE__ */ jsx11(Trash25, { size: 12 }) })
    ] }, i)),
    canAdd && /* @__PURE__ */ jsxs11("button", { className: "demo-image-array-add", onClick: () => onChange([...videos, ""]), children: [
      /* @__PURE__ */ jsx11(Plus6, { size: 13 }),
      " Add Video ",
      max ? `(${videos.length}/${max})` : ""
    ] })
  ] });
}
function GroupEditor({
  value,
  subFields,
  onChange
}) {
  const obj = typeof value === "object" && value && !Array.isArray(value) ? value : {};
  return /* @__PURE__ */ jsxs11("div", { className: "demo-group-editor", children: [
    subFields.map((sf) => /* @__PURE__ */ jsxs11("div", { className: "demo-group-field", children: [
      /* @__PURE__ */ jsxs11("label", { className: "demo-group-field-label", children: [
        sf.label,
        " ",
        /* @__PURE__ */ jsx11("span", { className: "demo-group-field-key", children: sf.key })
      ] }),
      /* @__PURE__ */ jsx11(
        FieldInput,
        {
          field: sf,
          value: obj[sf.key],
          onChange: (v) => onChange({ ...obj, [sf.key]: v })
        }
      )
    ] }, sf.key)),
    subFields.length === 0 && /* @__PURE__ */ jsx11("div", { className: "demo-group-empty", children: "No sub-fields defined" })
  ] });
}
function GroupArrayEditor({
  value,
  subFields,
  onChange
}) {
  const items = Array.isArray(value) ? value : [{}];
  const updateItem = (idx, item) => {
    const next = [...items];
    next[idx] = item;
    onChange(next);
  };
  return /* @__PURE__ */ jsxs11("div", { className: "demo-group-array", children: [
    items.map((item, i) => /* @__PURE__ */ jsxs11("div", { className: "demo-group-array-item", children: [
      /* @__PURE__ */ jsxs11("div", { className: "demo-group-array-item-header", children: [
        /* @__PURE__ */ jsxs11("span", { className: "demo-group-array-item-num", children: [
          "Item ",
          i + 1
        ] }),
        /* @__PURE__ */ jsx11(
          "button",
          {
            className: "icon-btn",
            onClick: () => onChange(items.filter((_, j) => j !== i)),
            title: "Remove item",
            children: /* @__PURE__ */ jsx11(Trash25, { size: 12 })
          }
        )
      ] }),
      /* @__PURE__ */ jsx11(
        GroupEditor,
        {
          value: item,
          subFields,
          onChange: (v) => updateItem(i, v)
        }
      )
    ] }, i)),
    /* @__PURE__ */ jsxs11("button", { className: "demo-group-array-add", onClick: () => onChange([...items, {}]), children: [
      /* @__PURE__ */ jsx11(Plus6, { size: 13 }),
      " Add Item"
    ] })
  ] });
}
function FieldInput({
  field,
  value,
  onChange
}) {
  if (field.type === "toggle") {
    return /* @__PURE__ */ jsxs11("label", { className: "toggle-switch", children: [
      /* @__PURE__ */ jsx11("input", { type: "checkbox", checked: !!value, onChange: (e) => onChange(e.target.checked) }),
      /* @__PURE__ */ jsx11("span", { className: "toggle-switch-slider" })
    ] });
  }
  if (field.type === "color") {
    return /* @__PURE__ */ jsxs11("div", { className: "color-input-row", children: [
      /* @__PURE__ */ jsx11("input", { type: "color", value: value || "#000000", onChange: (e) => onChange(e.target.value) }),
      /* @__PURE__ */ jsx11("input", { className: "form-input", value: value || "", onChange: (e) => onChange(e.target.value), style: { flex: 1 } })
    ] });
  }
  if (field.type === "number") {
    return /* @__PURE__ */ jsx11(
      "input",
      {
        className: "form-input",
        type: "number",
        value: value ?? "",
        onChange: (e) => onChange(e.target.value ? Number(e.target.value) : "")
      }
    );
  }
  if (field.type === "select") {
    return /* @__PURE__ */ jsx11("select", { className: "form-input", value: value || "", onChange: (e) => onChange(e.target.value), children: (field.options || []).map((opt) => /* @__PURE__ */ jsx11("option", { value: opt, children: opt }, opt)) });
  }
  if (field.type === "date") {
    return /* @__PURE__ */ jsx11(DateEditor, { value: value || "", onChange });
  }
  if (field.type === "audio") {
    return /* @__PURE__ */ jsx11(AudioEditor, { value, onChange });
  }
  if (field.type === "image_array") {
    return /* @__PURE__ */ jsx11(ImageArrayEditor, { value, max: field.max, onChange });
  }
  if (field.type === "video_array") {
    return /* @__PURE__ */ jsx11(VideoArrayEditor, { value, max: field.max, onChange });
  }
  if (field.type === "textarea") {
    return /* @__PURE__ */ jsx11(
      "textarea",
      {
        className: "form-input",
        rows: 3,
        value: value ?? "",
        onChange: (e) => onChange(e.target.value)
      }
    );
  }
  return /* @__PURE__ */ jsx11(
    "input",
    {
      className: "form-input",
      value: value ?? "",
      onChange: (e) => onChange(e.target.value),
      placeholder: field.type === "image" ? "Image URL" : field.type === "video" ? "Video URL" : ""
    }
  );
}
function DemoTab() {
  const { state, dispatch } = useStudio();
  const demo = state.working.demo;
  const sections = state.working.schema.sections;
  const allFields = sections.flatMap(
    (s) => s.fields.map((f) => ({ ...f, sectionLabel: s.label }))
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
    return /* @__PURE__ */ jsx11("div", { className: "demo-tab", children: /* @__PURE__ */ jsx11("div", { className: "demo-tab-empty", children: /* @__PURE__ */ jsx11("p", { children: "No fields yet \u2014 add fields in the Schema tab first" }) }) });
  }
  return /* @__PURE__ */ jsxs11("div", { className: "demo-tab", children: [
    /* @__PURE__ */ jsxs11("div", { className: "demo-tab-header", children: [
      /* @__PURE__ */ jsx11("h2", { children: "Demo Data" }),
      /* @__PURE__ */ jsxs11("button", { className: "btn-secondary", onClick: resetAll, children: [
        /* @__PURE__ */ jsx11(RotateCcw, { size: 12 }),
        " Reset All"
      ] })
    ] }),
    /* @__PURE__ */ jsx11("p", { className: "demo-tab-desc", children: "Preview values used when rendering the template. These are saved to demo.json." }),
    /* @__PURE__ */ jsx11("div", { className: "demo-fields", children: allFields.map((f) => {
      const value = demo[f.key];
      return /* @__PURE__ */ jsxs11("div", { className: "demo-field", children: [
        /* @__PURE__ */ jsxs11("div", { className: "demo-field-header", children: [
          /* @__PURE__ */ jsxs11("div", { children: [
            /* @__PURE__ */ jsx11("div", { className: "demo-field-label", children: f.label }),
            /* @__PURE__ */ jsxs11("div", { className: "demo-field-meta", children: [
              f.key,
              " \xB7 ",
              f.type,
              " \xB7 ",
              f.sectionLabel
            ] })
          ] }),
          /* @__PURE__ */ jsx11("button", { className: "icon-btn", onClick: () => resetField(f.key, f.type), title: "Reset to default", children: /* @__PURE__ */ jsx11(RotateCcw, { size: 12 }) })
        ] }),
        /* @__PURE__ */ jsx11("div", { className: "demo-field-input", children: f.type === "quiz" ? /* @__PURE__ */ jsx11(
          QuizBuilder,
          {
            questions: value || [],
            onChange: (questions) => dispatch({ type: "SET_DEMO", key: f.key, value: questions }),
            config: f.config || {}
          }
        ) : f.type === "group" ? /* @__PURE__ */ jsx11(
          GroupEditor,
          {
            value,
            subFields: f.fields || [],
            onChange: (v) => dispatch({ type: "SET_DEMO", key: f.key, value: v })
          }
        ) : f.type === "group_array" ? /* @__PURE__ */ jsx11(
          GroupArrayEditor,
          {
            value,
            subFields: f.fields || [],
            onChange: (v) => dispatch({ type: "SET_DEMO", key: f.key, value: v })
          }
        ) : /* @__PURE__ */ jsx11(
          FieldInput,
          {
            field: f,
            value,
            onChange: (v) => dispatch({ type: "SET_DEMO", key: f.key, value: v })
          }
        ) })
      ] }, f.key);
    }) })
  ] });
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
  return /* @__PURE__ */ jsxs12("div", { className: "manifest-tab", children: [
    /* @__PURE__ */ jsx12("div", { className: "manifest-tab-header", children: /* @__PURE__ */ jsx12("h2", { children: "Manifest" }) }),
    /* @__PURE__ */ jsx12("p", { className: "manifest-tab-desc", children: "Configuration for how the template is loaded and rendered. Saved to manifest.json." }),
    /* @__PURE__ */ jsxs12("div", { className: "manifest-sections", children: [
      /* @__PURE__ */ jsxs12("div", { className: "manifest-section", children: [
        /* @__PURE__ */ jsx12("h3", { children: "Entry Point" }),
        /* @__PURE__ */ jsxs12("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx12("label", { className: "form-label", children: "Entry file" }),
          /* @__PURE__ */ jsx12(
            "input",
            {
              className: "form-input font-mono",
              value: manifest.entry,
              onChange: (e) => setManifest({ entry: e.target.value }),
              placeholder: "index.tsx"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs12("div", { className: "manifest-section", children: [
        /* @__PURE__ */ jsx12("h3", { children: "Screens" }),
        /* @__PURE__ */ jsx12("p", { className: "manifest-section-desc", children: "Named screens/routes within this template (e.g. gate, main, guestbook)" }),
        /* @__PURE__ */ jsx12(
          TagInput,
          {
            values: manifest.screens,
            onChange: (screens) => setManifest({ screens }),
            placeholder: "Type screen name + Enter"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs12("div", { className: "manifest-section", children: [
        /* @__PURE__ */ jsx12("h3", { children: "Dependencies" }),
        /* @__PURE__ */ jsx12("p", { className: "manifest-section-desc", children: "npm packages this template needs at runtime" }),
        /* @__PURE__ */ jsx12("div", { className: "dep-grid", children: AVAILABLE_DEPS.map((dep) => /* @__PURE__ */ jsxs12("label", { className: `dep-card ${manifest.dependencies[dep.name] ? "active" : ""}`, children: [
          /* @__PURE__ */ jsx12(
            "input",
            {
              type: "checkbox",
              checked: !!manifest.dependencies[dep.name],
              onChange: () => toggleDep(dep.name)
            }
          ),
          /* @__PURE__ */ jsxs12("div", { children: [
            /* @__PURE__ */ jsx12("div", { className: "dep-name", children: dep.name }),
            /* @__PURE__ */ jsx12("div", { className: "dep-desc", children: dep.desc })
          ] })
        ] }, dep.name)) })
      ] }),
      /* @__PURE__ */ jsxs12("div", { className: "manifest-section", children: [
        /* @__PURE__ */ jsx12("h3", { children: "Fonts" }),
        /* @__PURE__ */ jsx12("p", { className: "manifest-section-desc", children: 'Google Font names to load (e.g. "Dancing Script", "Playfair Display")' }),
        /* @__PURE__ */ jsx12(
          TagInput,
          {
            values: manifest.fonts,
            onChange: (fonts) => setManifest({ fonts }),
            placeholder: "Type font name + Enter"
          }
        )
      ] })
    ] })
  ] });
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
  return /* @__PURE__ */ jsx13("div", { className: `toast visible ${toast.type}`, children: toast.message });
}

// scripts/studio/App.tsx
import { Fragment as Fragment4, jsx as jsx14, jsxs as jsxs13 } from "react/jsx-runtime";
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
    showPreview: false
  },
  toast: null
};
function ResizeHandle({ onResize, side }) {
  const dragging = useRef8(false);
  const startX = useRef8(0);
  const onMouseDown = useCallback4((e) => {
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
  }, [onResize, side]);
  return /* @__PURE__ */ jsx14("div", { className: "panel-resize-handle", onMouseDown });
}
function Studio() {
  const [state, dispatch] = useReducer(studioReducer, initialState);
  const [loading, setLoading] = useState9(true);
  const [sectionsCollapsed, setSectionsCollapsed] = useState9(false);
  const [sectionsWidth, setSectionsWidth] = useState9(220);
  useEffect9(() => {
    const saved = localStorage.getItem("studio-theme");
    if (saved === "dark") document.documentElement.setAttribute("data-theme", "dark");
  }, []);
  useEffect9(() => {
    loadConfig().then((data) => {
      dispatch({ type: "LOADED", data });
      setLoading(false);
    }).catch(() => setLoading(false));
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
          dispatch({ type: "DUPLICATE_FIELD", sectionIdx: state.ui.selectedSection, fieldIdx: state.ui.selectedField });
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
      if ((e.key === "Delete" || e.key === "Backspace") && state.ui.selectedField >= 0) {
        dispatch({ type: "DELETE_FIELD", sectionIdx: state.ui.selectedSection, fieldIdx: state.ui.selectedField });
        return;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [state.ui.selectedField, state.ui.selectedSection]);
  if (loading) {
    return /* @__PURE__ */ jsx14("div", { className: "studio-shell", children: /* @__PURE__ */ jsxs13("div", { className: "studio-loading", children: [
      /* @__PURE__ */ jsx14("div", { className: "loading-spinner" }),
      /* @__PURE__ */ jsx14("p", { children: "Loading template config..." })
    ] }) });
  }
  const isSchemaTab = state.ui.activeTab === "schema";
  return /* @__PURE__ */ jsx14(StudioContext.Provider, { value: { state, dispatch }, children: /* @__PURE__ */ jsxs13("div", { className: "studio-shell", children: [
    /* @__PURE__ */ jsx14(Header, { config }),
    /* @__PURE__ */ jsx14("div", { className: "studio-main", children: isSchemaTab ? /* @__PURE__ */ jsxs13(Fragment4, { children: [
      /* @__PURE__ */ jsx14(
        "div",
        {
          className: `panel-sections${sectionsCollapsed ? " panel-collapsed" : ""}`,
          style: !sectionsCollapsed ? { width: sectionsWidth, minWidth: sectionsWidth } : void 0,
          children: /* @__PURE__ */ jsx14(SectionList, {})
        }
      ),
      !sectionsCollapsed && /* @__PURE__ */ jsx14(ResizeHandle, { onResize: handleResizeSections, side: "left" }),
      /* @__PURE__ */ jsx14(FieldList, {})
    ] }) : state.ui.activeTab === "demo" ? /* @__PURE__ */ jsx14(DemoTab, {}) : /* @__PURE__ */ jsx14(ManifestTab, {}) }),
    /* @__PURE__ */ jsx14(Footer, {}),
    /* @__PURE__ */ jsx14(Toast, {})
  ] }) });
}
var el = document.getElementById("studio-root");
if (el) {
  createRoot(el).render(/* @__PURE__ */ jsx14(Studio, {}));
}
