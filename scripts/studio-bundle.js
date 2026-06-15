// scripts/studio/App.tsx
import { createRoot } from "react-dom/client";
import { useReducer, useEffect as useEffect4, useCallback as useCallback4, useState as useState9 } from "react";

// scripts/studio/styles.css
(function() {
  var s = document.createElement("style");
  s.textContent = `:root {
  --bg: #ffffff;
  --bg-secondary: #f9fafb;
  --bg-tertiary: #f3f4f6;
  --bg-hover: #f3f4f6;
  --bg-active: #e5e7eb;
  --border: #e5e7eb;
  --border-light: #f3f4f6;
  --text: #111827;
  --text-secondary: #6b7280;
  --text-tertiary: #9ca3af;
  --accent: #6366f1;
  --accent-light: #eef2ff;
  --accent-hover: #4f46e5;
  --danger: #ef4444;
  --danger-light: #fef2f2;
  --success: #10b981;
  --success-light: #ecfdf5;
  --warning: #f59e0b;
  --warning-light: #fffbeb;
  --radius: 8px;
  --radius-lg: 12px;
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow: 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1);
  --transition: 150ms ease;
  --font: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', monospace;
}

[data-theme="dark"] {
  --bg: #0f1117;
  --bg-secondary: #1a1d27;
  --bg-tertiary: #242833;
  --bg-hover: #242833;
  --bg-active: #2e3340;
  --border: #2e3340;
  --border-light: #242833;
  --text: #e5e7eb;
  --text-secondary: #9ca3af;
  --text-tertiary: #6b7280;
  --accent: #818cf8;
  --accent-light: #1e1b4b;
  --accent-hover: #6366f1;
  --danger: #f87171;
  --danger-light: #450a0a;
  --success: #34d399;
  --success-light: #052e16;
  --warning: #fbbf24;
  --warning-light: #451a03;
}

* { margin: 0; padding: 0; box-sizing: border-box; }
html, body { height: 100%; overflow: hidden; }
body {
  font-family: var(--font);
  font-size: 13px;
  color: var(--text);
  background: var(--bg);
}

/* \u2500\u2500 Shell \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.studio-shell {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.studio-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 12px;
  color: var(--text-secondary);
}

.loading-spinner {
  width: 24px;
  height: 24px;
  border: 2px solid var(--border);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: spin 600ms linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }

/* \u2500\u2500 Header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.studio-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 16px;
  height: 48px;
  border-bottom: 1px solid var(--border);
  background: var(--bg);
  flex-shrink: 0;
}
.studio-header h1 {
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
}
.slug { color: var(--text-secondary); font-weight: 400; }
.header-spacer { flex: 1; }

.header-search {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg-secondary);
  max-width: 220px;
}
.header-search input {
  border: none;
  background: transparent;
  color: var(--text);
  font-size: 12px;
  outline: none;
  width: 100%;
}

/* \u2500\u2500 Main layout \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.studio-main {
  flex: 1;
  display: flex;
  overflow: hidden;
}

.tab-placeholder {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-tertiary);
  font-size: 14px;
}

/* \u2500\u2500 Buttons \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: none;
  background: transparent;
  color: var(--text-secondary);
  border-radius: var(--radius);
  cursor: pointer;
  transition: all var(--transition);
  text-decoration: none;
}
.icon-btn:hover { background: var(--bg-hover); color: var(--text); }

.btn-primary {
  padding: 6px 14px;
  border: none;
  border-radius: var(--radius);
  background: var(--accent);
  color: white;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: background var(--transition);
}
.btn-primary:hover { background: var(--accent-hover); }

.btn-secondary {
  padding: 6px 14px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: transparent;
  color: var(--text-secondary);
  font-size: 12px;
  cursor: pointer;
  transition: all var(--transition);
}
.btn-secondary:hover { border-color: var(--text-tertiary); color: var(--text); }

/* \u2500\u2500 Sections panel (left) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.panel-sections {
  width: 200px;
  min-width: 200px;
  border-right: 1px solid var(--border);
  background: var(--bg-secondary);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.panel-sections-header {
  padding: 12px 14px 8px;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--text-tertiary);
}

.section-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  cursor: pointer;
  border-left: 2px solid transparent;
  transition: all var(--transition);
  font-size: 13px;
}
.section-item:hover { background: var(--bg-hover); }
.section-item.active {
  background: var(--accent-light);
  border-left-color: var(--accent);
  color: var(--accent);
}

.section-label { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.section-count {
  font-size: 10px;
  color: var(--text-tertiary);
  background: var(--bg-tertiary);
  padding: 1px 6px;
  border-radius: 10px;
}

.drag-handle {
  color: var(--text-tertiary);
  cursor: grab;
  flex-shrink: 0;
  display: flex;
  align-items: center;
}
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
  font-size: 12px;
  transition: color var(--transition);
  margin-top: auto;
  border-top: 1px solid var(--border-light);
}
.add-section-btn:hover { color: var(--accent); }

/* \u2500\u2500 Section modal \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.section-modal-fields { display: flex; flex-direction: column; gap: 12px; padding: 0 0 16px; }
.section-modal-actions { display: flex; gap: 8px; justify-content: flex-end; }

/* \u2500\u2500 Fields panel (center) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.panel-fields {
  flex: 1;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  border-right: 1px solid var(--border);
}

.panel-fields-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px 8px;
}
.panel-fields-header h2 {
  font-size: 13px;
  font-weight: 600;
}

.field-list {
  flex: 1;
  overflow-y: auto;
  padding: 0 8px;
}

.field-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  margin-bottom: 2px;
  border-radius: var(--radius);
  cursor: pointer;
  transition: all var(--transition);
  border: 1px solid transparent;
}
.field-item:hover { background: var(--bg-hover); }
.field-item.active {
  background: var(--accent-light);
  border-color: var(--accent);
}

.field-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: var(--bg-tertiary);
  color: var(--text-secondary);
  flex-shrink: 0;
}
.field-icon.active { background: var(--accent); color: white; }

.field-info { flex: 1; min-width: 0; }
.field-label {
  font-size: 13px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.field-meta {
  font-size: 11px;
  color: var(--text-tertiary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.field-required {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--danger);
  flex-shrink: 0;
}

.field-actions {
  display: flex;
  gap: 2px;
  opacity: 0;
  transition: opacity var(--transition);
}
.field-item:hover .field-actions { opacity: 1; }

.add-field-area {
  padding: 8px 16px;
}
.add-field-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  padding: 8px;
  border: 1px dashed var(--border);
  border-radius: var(--radius);
  background: transparent;
  color: var(--text-tertiary);
  cursor: pointer;
  font-size: 12px;
  justify-content: center;
  transition: all var(--transition);
}
.add-field-btn:hover { border-color: var(--accent); color: var(--accent); }

/* \u2500\u2500 Quick templates \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.quick-templates {
  padding: 8px 16px 12px;
  border-top: 1px solid var(--border-light);
}
.quick-templates-label {
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--text-tertiary);
  margin-bottom: 8px;
}
.quick-templates-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
.quick-template-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  border: 1px solid var(--border);
  border-radius: 20px;
  background: transparent;
  color: var(--text-secondary);
  font-size: 11px;
  cursor: pointer;
  transition: all var(--transition);
  white-space: nowrap;
}
.quick-template-chip:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-light);
}

/* \u2500\u2500 Inspector panel (right) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.panel-inspector {
  width: 280px;
  min-width: 280px;
  background: var(--bg-secondary);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.inspector-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  color: var(--text-tertiary);
  font-size: 13px;
}

.inspector-section,
.inspector-fields {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.inspector-section h3 {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--text-tertiary);
}

.inspector-header {
  padding: 12px 16px;
  border-bottom: 1px solid var(--border-light);
}

.inspector-type-badge {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 20px;
  background: var(--accent-light);
  color: var(--accent);
  font-size: 11px;
  font-weight: 500;
}

.inspector-placeholder {
  padding: 24px;
  text-align: center;
  color: var(--text-tertiary);
  font-size: 12px;
}

/* \u2500\u2500 Forms \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.form-group { display: flex; flex-direction: column; gap: 4px; }
.form-group-row { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.form-label {
  font-size: 11px;
  font-weight: 500;
  color: var(--text-secondary);
}
.form-input {
  padding: 6px 10px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg);
  color: var(--text);
  font-size: 12px;
  font-family: var(--font);
  outline: none;
  transition: border-color var(--transition);
  resize: vertical;
}
.form-input:focus { border-color: var(--accent); }
.form-input.font-mono { font-family: var(--font-mono); }

.color-input-row { display: flex; align-items: center; gap: 8px; }
.color-input-row input[type="color"] {
  width: 28px;
  height: 28px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 0;
  cursor: pointer;
}

.color-presets { display: flex; gap: 4px; flex-wrap: wrap; }
.color-preset-swatch {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid var(--bg);
  box-shadow: 0 0 0 1px var(--border);
  cursor: pointer;
}

/* \u2500\u2500 Footer \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.studio-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 16px;
  height: 42px;
  border-top: 1px solid var(--border);
  background: var(--bg);
  flex-shrink: 0;
}

.tab-bar { display: flex; gap: 2px; }
.tab-btn {
  padding: 4px 12px;
  border: none;
  border-radius: var(--radius);
  background: transparent;
  color: var(--text-secondary);
  font-size: 12px;
  cursor: pointer;
  transition: all var(--transition);
}
.tab-btn:hover { background: var(--bg-hover); }
.tab-btn.active { background: var(--accent-light); color: var(--accent); font-weight: 500; }

.footer-spacer { flex: 1; }

.unsaved-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--warning);
  display: none;
}
.unsaved-dot.visible { display: block; }

.unsaved-label {
  font-size: 11px;
  color: var(--warning);
  display: none;
}
.unsaved-label.visible { display: block; }

.save-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 14px;
  border: none;
  border-radius: var(--radius);
  background: var(--accent);
  color: white;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: background var(--transition);
}
.save-btn:hover { background: var(--accent-hover); }
.save-btn:disabled { opacity: 0.6; cursor: not-allowed; }

/* \u2500\u2500 Modal \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.modal {
  background: var(--bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  width: 380px;
  max-height: 80vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-bottom: 1px solid var(--border-light);
}
.modal-header h3 { font-size: 14px; font-weight: 600; }

.modal-body { padding: 16px; overflow-y: auto; }

/* \u2500\u2500 Type Picker \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.type-picker {
  background: var(--bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  width: 420px;
  max-height: 480px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.type-picker-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid var(--border-light);
}
.type-picker-header h3 { font-size: 14px; font-weight: 600; }

.type-picker-search {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-bottom: 1px solid var(--border-light);
  color: var(--text-tertiary);
}
.type-picker-search input {
  border: none;
  background: transparent;
  color: var(--text);
  font-size: 13px;
  outline: none;
  width: 100%;
}

.type-picker-body {
  overflow-y: auto;
  padding: 12px 16px;
}

.type-picker-category { margin-bottom: 16px; }
.type-picker-category:last-child { margin-bottom: 0; }
.type-picker-category-label {
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
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
  gap: 6px;
  padding: 12px 8px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all var(--transition);
}
.type-picker-item:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-light);
}

.type-picker-icon { display: flex; align-items: center; justify-content: center; }
.type-picker-label { font-size: 11px; font-weight: 500; }

.type-picker-empty {
  text-align: center;
  padding: 24px;
  color: var(--text-tertiary);
  font-size: 13px;
}

/* \u2500\u2500 Toast \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.toast {
  position: fixed;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%) translateY(20px);
  padding: 8px 16px;
  border-radius: var(--radius);
  font-size: 12px;
  font-weight: 500;
  box-shadow: var(--shadow-lg);
  z-index: 200;
  opacity: 0;
  transition: all 200ms ease;
  pointer-events: none;
}
.toast.visible { opacity: 1; transform: translateX(-50%) translateY(0); }
.toast.success { background: var(--success); color: white; }
.toast.error { background: var(--danger); color: white; }

/* \u2500\u2500 Scrollbar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb {
  background: var(--border);
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover { background: var(--text-tertiary); }

/* \u2500\u2500 Checkbox \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

input[type="checkbox"] {
  width: 16px;
  height: 16px;
  accent-color: var(--accent);
  cursor: pointer;
}

/* \u2500\u2500 Inspector extras \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.inspector-divider {
  height: 1px;
  background: var(--border-light);
  margin: 4px 0;
}

.inspector-constraint-header {
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--text-tertiary);
}

.btn-danger {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border: 1px solid var(--danger);
  border-radius: var(--radius);
  background: var(--danger-light);
  color: var(--danger);
  font-size: 12px;
  cursor: pointer;
  transition: all var(--transition);
}
.btn-danger:hover { background: var(--danger); color: white; }

/* \u2500\u2500 Tag Input \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tag-input-container {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 4px 8px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg);
  min-height: 32px;
  cursor: text;
  transition: border-color var(--transition);
}
.tag-input-container:focus-within { border-color: var(--accent); }

.tag-chip {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 1px 6px;
  background: var(--accent-light);
  color: var(--accent);
  border-radius: 4px;
  font-size: 11px;
  white-space: nowrap;
}
.tag-chip button {
  border: none;
  background: none;
  color: inherit;
  cursor: pointer;
  padding: 0 2px;
  font-size: 13px;
  line-height: 1;
}

.tag-input {
  border: none;
  background: transparent;
  color: var(--text);
  font-size: 12px;
  outline: none;
  flex: 1;
  min-width: 60px;
}

/* \u2500\u2500 Toggle \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.form-toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  user-select: none;
}

.form-toggle-track {
  width: 32px;
  height: 18px;
  border-radius: 9px;
  background: var(--border);
  position: relative;
  transition: background var(--transition);
}
.form-toggle-track.on { background: var(--accent); }

.form-toggle-thumb {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: white;
  position: absolute;
  top: 2px;
  left: 2px;
  transition: left var(--transition);
}
.form-toggle-track.on .form-toggle-thumb { left: 16px; }

/* \u2500\u2500 Quiz Builder \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.quiz-builder-section { padding: 0; }

.quiz-builder-body {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 420px;
}

.quiz-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 12px;
  background: var(--bg-secondary);
}

.quiz-card-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}

.quiz-card-num {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--accent);
  color: white;
  font-size: 11px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.quiz-question-input { flex: 1; }

.quiz-options {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 8px;
}

.quiz-option-row {
  display: flex;
  align-items: center;
  gap: 6px;
}

.quiz-correct-btn {
  width: 22px;
  height: 22px;
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
.quiz-correct-btn.active {
  border-color: var(--success);
  background: var(--success);
  color: white;
}

.quiz-add-option {
  display: flex;
  align-items: center;
  gap: 4px;
  border: none;
  background: transparent;
  color: var(--text-tertiary);
  font-size: 11px;
  cursor: pointer;
  padding: 4px 0;
}
.quiz-add-option:hover { color: var(--accent); }

/* \u2500\u2500 Demo Tab \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.demo-tab {
  flex: 1;
  overflow-y: auto;
  padding: 20px 24px;
  max-width: 700px;
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
.demo-tab-header h2 { font-size: 16px; font-weight: 600; }
.demo-tab-header .btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.demo-tab-desc {
  font-size: 12px;
  color: var(--text-tertiary);
  margin-bottom: 20px;
}

.demo-fields {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.demo-field {
  border: 1px solid var(--border-light);
  border-radius: var(--radius);
  padding: 12px 14px;
  background: var(--bg-secondary);
}

.demo-field-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 8px;
}

.demo-field-label {
  font-size: 13px;
  font-weight: 500;
}

.demo-field-meta {
  font-size: 11px;
  color: var(--text-tertiary);
}

.demo-field-input { width: 100%; }
.demo-field-input .form-input { width: 100%; }
.demo-field-input select { width: 100%; }

.demo-toggle-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  cursor: pointer;
}

/* \u2500\u2500 Manifest Tab \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.manifest-tab {
  flex: 1;
  overflow-y: auto;
  padding: 20px 24px;
  max-width: 700px;
  margin: 0 auto;
  width: 100%;
}

.manifest-tab-header {
  margin-bottom: 4px;
}
.manifest-tab-header h2 { font-size: 16px; font-weight: 600; }

.manifest-tab-desc {
  font-size: 12px;
  color: var(--text-tertiary);
  margin-bottom: 20px;
}

.manifest-sections {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.manifest-section h3 {
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 6px;
}

.manifest-section-desc {
  font-size: 12px;
  color: var(--text-tertiary);
  margin-bottom: 10px;
}

.dep-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;
}

.dep-card {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 8px 10px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  cursor: pointer;
  transition: all var(--transition);
  font-size: 12px;
}
.dep-card:hover { border-color: var(--accent); }
.dep-card.active {
  border-color: var(--accent);
  background: var(--accent-light);
}
.dep-card input[type="checkbox"] { margin-top: 1px; flex-shrink: 0; }

.dep-name { font-weight: 500; font-family: var(--font-mono); font-size: 11px; }
.dep-desc { color: var(--text-tertiary); font-size: 11px; }

/* \u2500\u2500 Select \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* \u2500\u2500 Preview Pane \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.preview-pane {
  width: 320px;
  min-width: 320px;
  border-left: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  background: var(--bg-tertiary);
  transition: width 200ms ease;
}
.preview-pane.expanded {
  width: 440px;
  min-width: 440px;
}

.preview-pane-header {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 10px;
  border-bottom: 1px solid var(--border);
  background: var(--bg-secondary);
}

.preview-pane-label {
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
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
  width: 100%;
  height: 100%;
  border: none;
  border-radius: var(--radius);
  background: white;
}

/* \u2500\u2500 Search clear \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.search-clear {
  border: none;
  background: none;
  color: var(--text-tertiary);
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
  padding: 0 2px;
}
.search-clear:hover { color: var(--text); }

.icon-btn.active {
  color: var(--accent);
  background: var(--accent-light);
}

/* \u2500\u2500 Conditionals \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

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
  font-size: 12px;
  cursor: pointer;
  padding: 4px 0;
}
.conditionals-toggle:hover { color: var(--accent); }

.conditionals-section {
  border-top: 1px solid var(--border-light);
}

.conditionals-header {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 500;
  color: var(--text-secondary);
  cursor: pointer;
  user-select: none;
}
.conditionals-header:hover { color: var(--text); }

.conditionals-count {
  font-size: 10px;
  background: var(--bg-tertiary);
  padding: 0 6px;
  border-radius: 10px;
  color: var(--text-tertiary);
}

.conditionals-chevron {
  margin-left: auto;
  font-size: 10px;
  color: var(--text-tertiary);
}

.conditionals-body {
  padding: 0 16px 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.conditional-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
}

.conditional-card-header {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border-light);
}

.conditional-card-num {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--accent);
  color: white;
  font-size: 10px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.conditional-card-label {
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--accent);
  flex: 1;
}

.conditional-card-body {
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.conditional-row {
  display: flex;
  align-items: center;
  gap: 6px;
}
.conditional-row .form-input { flex: 1; min-width: 0; }

.conditional-equals {
  font-weight: 600;
  color: var(--text-tertiary);
  flex-shrink: 0;
}

.conditional-then {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

/* \u2500\u2500 Select \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

select.form-input {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;
  padding-right: 24px;
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
  version: "2",
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
      const manifest = action.data.manifest ?? DEFAULT_MANIFEST;
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
import { Search, RefreshCw, Moon, Sun, ArrowLeft, Eye, EyeOff } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
function Header({ config: config2, onSearch, onRefreshPreview }) {
  const { state, dispatch } = useStudio();
  const isDark = state.ui.theme === "dark";
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
  return /* @__PURE__ */ jsxs("header", { className: "studio-header", children: [
    /* @__PURE__ */ jsxs("h1", { children: [
      "Template Studio ",
      /* @__PURE__ */ jsxs("span", { className: "slug", children: [
        "\u2014 ",
        config2.slug
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "header-spacer" }),
    /* @__PURE__ */ jsxs("div", { className: "header-search", children: [
      /* @__PURE__ */ jsx(Search, { size: 14, style: { color: "var(--text-tertiary)", flexShrink: 0 } }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          placeholder: "Search fields... (Cmd+F)",
          value: state.ui.searchQuery,
          onChange: (e) => onSearch(e.target.value)
        }
      ),
      state.ui.searchQuery && /* @__PURE__ */ jsx("button", { className: "search-clear", onClick: () => onSearch(""), children: "\xD7" })
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: `icon-btn ${state.ui.showPreview ? "active" : ""}`,
        onClick: () => dispatch({ type: "TOGGLE_PREVIEW" }),
        title: "Toggle preview (Cmd+P)",
        children: state.ui.showPreview ? /* @__PURE__ */ jsx(EyeOff, { size: 16 }) : /* @__PURE__ */ jsx(Eye, { size: 16 })
      }
    ),
    /* @__PURE__ */ jsx("button", { className: "icon-btn", onClick: onRefreshPreview, title: "Refresh preview", children: /* @__PURE__ */ jsx(RefreshCw, { size: 16 }) }),
    /* @__PURE__ */ jsx("button", { className: "icon-btn", onClick: toggleTheme, title: "Toggle theme", children: isDark ? /* @__PURE__ */ jsx(Sun, { size: 16 }) : /* @__PURE__ */ jsx(Moon, { size: 16 }) }),
    /* @__PURE__ */ jsx("a", { href: "/", className: "icon-btn", title: "Back to preview", children: /* @__PURE__ */ jsx(ArrowLeft, { size: 16 }) })
  ] });
}

// scripts/studio/components/Footer.tsx
import { Save, Download, Upload } from "lucide-react";
import { useState, useRef } from "react";
import { Fragment, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function Footer({ onRefreshPreview }) {
  const { state, dispatch } = useStudio();
  const [saving, setSaving] = useState(false);
  const fileInputRef = useRef(null);
  const hasUnsaved = !deepEqual(state.loaded, state.working);
  const handleSave = async () => {
    setSaving(true);
    try {
      const result = await saveConfig({
        schema: state.working.schema,
        demo: state.working.demo,
        manifest: state.working.manifest
      });
      if (result.ok) {
        dispatch({ type: "SAVED" });
        dispatch({ type: "SHOW_TOAST", message: `Saved ${(result.written ?? []).join(", ")}`, toastType: "success" });
        setTimeout(onRefreshPreview, 500);
      } else {
        dispatch({ type: "SHOW_TOAST", message: (result.errors ?? ["Save failed"]).join(", "), toastType: "error" });
      }
    } catch (e) {
      dispatch({ type: "SHOW_TOAST", message: `Save failed: ${e}`, toastType: "error" });
    }
    setSaving(false);
  };
  const handleExport = () => {
    const data = { schema: state.working.schema, demo: state.working.demo, manifest: state.working.manifest };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${window.__STUDIO_CONFIG__?.slug || "template"}-config.json`;
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
  const tabs = ["schema", "demo", "manifest"];
  return /* @__PURE__ */ jsxs2("footer", { className: "studio-footer", children: [
    /* @__PURE__ */ jsx2("div", { className: "tab-bar", children: tabs.map((tab) => /* @__PURE__ */ jsx2(
      "button",
      {
        className: `tab-btn ${state.ui.activeTab === tab ? "active" : ""}`,
        onClick: () => dispatch({ type: "SET_TAB", tab }),
        children: tab.charAt(0).toUpperCase() + tab.slice(1)
      },
      tab
    )) }),
    /* @__PURE__ */ jsx2("div", { className: "footer-spacer" }),
    hasUnsaved && /* @__PURE__ */ jsxs2(Fragment, { children: [
      /* @__PURE__ */ jsx2("span", { className: "unsaved-dot visible" }),
      /* @__PURE__ */ jsx2("span", { className: "unsaved-label visible", children: "Unsaved changes" })
    ] }),
    /* @__PURE__ */ jsx2("button", { className: "icon-btn", onClick: handleExport, title: "Export", children: /* @__PURE__ */ jsx2(Download, { size: 14 }) }),
    /* @__PURE__ */ jsx2("button", { className: "icon-btn", onClick: () => fileInputRef.current?.click(), title: "Import", children: /* @__PURE__ */ jsx2(Upload, { size: 14 }) }),
    /* @__PURE__ */ jsxs2("button", { className: "save-btn", onClick: handleSave, disabled: saving, children: [
      /* @__PURE__ */ jsx2(Save, { size: 14 }),
      saving ? "Saving..." : "Save"
    ] }),
    /* @__PURE__ */ jsx2("input", { ref: fileInputRef, type: "file", accept: ".json", style: { display: "none" }, onChange: handleImport })
  ] });
}

// scripts/studio/components/SectionList.tsx
import { useState as useState2, useCallback } from "react";
import { GripVertical, Plus } from "lucide-react";

// scripts/studio/components/common/Modal.tsx
import { useEffect, useRef as useRef2 } from "react";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
function Modal({ open, onClose, title, children, width = 360 }) {
  const overlayRef = useRef2(null);
  useEffect(() => {
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
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
function SectionList() {
  const { state, dispatch } = useStudio();
  const sections = state.working.schema.sections;
  const selected = state.ui.selectedSection;
  const [modalOpen, setModalOpen] = useState2(false);
  const [label, setLabel] = useState2("");
  const [key, setKey] = useState2("");
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
  const [dragIdx, setDragIdx] = useState2(null);
  const [dropTarget, setDropTarget] = useState2(null);
  const onDragStart = useCallback((idx) => {
    setDragIdx(idx);
  }, []);
  const onDragEnd = useCallback(() => {
    setDragIdx(null);
    setDropTarget(null);
  }, []);
  const onDragOver = useCallback((e, idx) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    setDropTarget(idx);
  }, []);
  const onDrop = useCallback((e, toIdx) => {
    e.preventDefault();
    if (dragIdx !== null && dragIdx !== toIdx) {
      dispatch({ type: "MOVE_SECTION", from: dragIdx, to: toIdx });
    }
    setDragIdx(null);
    setDropTarget(null);
  }, [dragIdx, dispatch]);
  return /* @__PURE__ */ jsxs4("div", { className: "panel-sections", children: [
    /* @__PURE__ */ jsx4("div", { className: "panel-sections-header", children: "Sections" }),
    /* @__PURE__ */ jsx4("div", { children: sections.map((s, i) => /* @__PURE__ */ jsxs4(
      "div",
      {
        className: `section-item ${i === selected ? "active" : ""}`,
        onClick: () => dispatch({ type: "SELECT_SECTION", idx: i }),
        draggable: true,
        onDragStart: () => onDragStart(i),
        onDragEnd,
        onDragOver: (e) => onDragOver(e, i),
        onDrop: (e) => onDrop(e, i),
        style: { opacity: dragIdx === i ? 0.4 : 1, borderTopColor: dropTarget === i ? "var(--accent)" : void 0 },
        children: [
          /* @__PURE__ */ jsx4("span", { className: "drag-handle", children: /* @__PURE__ */ jsx4(GripVertical, { size: 12 }) }),
          /* @__PURE__ */ jsx4("span", { className: "section-label", children: s.label || "Untitled" }),
          /* @__PURE__ */ jsx4("span", { className: "section-count", children: s.fields.length })
        ]
      },
      s.key + i
    )) }),
    /* @__PURE__ */ jsxs4("button", { className: "add-section-btn", onClick: openAddModal, children: [
      /* @__PURE__ */ jsx4(Plus, { size: 14 }),
      " Add Section"
    ] }),
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
import { useState as useState6, useCallback as useCallback2 } from "react";
import { GripVertical as GripVertical2, Plus as Plus3, Copy, Trash2 as Trash22 } from "lucide-react";

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
import { useState as useState3, useRef as useRef3, useEffect as useEffect2 } from "react";
import { Search as Search2, X } from "lucide-react";
import * as Icons from "lucide-react";
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
function FieldIcon({ name, size = 16 }) {
  const iconName = name.charAt(0).toUpperCase() + name.slice(1).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  const Icon = Icons[iconName];
  return Icon ? /* @__PURE__ */ jsx5(Icon, { size }) : null;
}
function TypePicker({ open, onClose, onSelect }) {
  const [search, setSearch] = useState3("");
  const inputRef = useRef3(null);
  useEffect2(() => {
    if (open) {
      setSearch("");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);
  useEffect2(() => {
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
      /* @__PURE__ */ jsx5("button", { className: "icon-btn", onClick: onClose, children: /* @__PURE__ */ jsx5(X, { size: 16 }) })
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
import { useState as useState5 } from "react";
import { Plus as Plus2, Trash2, GitBranch } from "lucide-react";

// scripts/studio/components/common/TagInput.tsx
import { useState as useState4, useRef as useRef4 } from "react";
import { jsx as jsx6, jsxs as jsxs6 } from "react/jsx-runtime";
function TagInput({ values, onChange, placeholder }) {
  const [input, setInput] = useState4("");
  const inputRef = useRef4(null);
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
  return /* @__PURE__ */ jsxs6("div", { className: "tag-input-container", onClick: () => inputRef.current?.focus(), children: [
    values.map((v, i) => /* @__PURE__ */ jsxs6("span", { className: "tag-chip", children: [
      v,
      /* @__PURE__ */ jsx6("button", { onClick: () => remove(i), children: "\xD7" })
    ] }, i)),
    /* @__PURE__ */ jsx6(
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

// scripts/studio/components/ConditionalsBuilder.tsx
import { jsx as jsx7, jsxs as jsxs7 } from "react/jsx-runtime";
function ConditionalsBuilder() {
  const { state, dispatch } = useStudio();
  const conditionals = state.working.schema.conditionals || [];
  const [expanded, setExpanded] = useState5(false);
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
    return /* @__PURE__ */ jsx7("div", { className: "conditionals-collapsed", children: /* @__PURE__ */ jsxs7("button", { className: "conditionals-toggle", onClick: addConditional, children: [
      /* @__PURE__ */ jsx7(GitBranch, { size: 12 }),
      " Add Conditional Logic"
    ] }) });
  }
  return /* @__PURE__ */ jsxs7("div", { className: "conditionals-section", children: [
    /* @__PURE__ */ jsxs7("div", { className: "conditionals-header", onClick: () => setExpanded(!expanded), children: [
      /* @__PURE__ */ jsx7(GitBranch, { size: 14 }),
      /* @__PURE__ */ jsx7("span", { children: "Conditionals" }),
      /* @__PURE__ */ jsx7("span", { className: "conditionals-count", children: conditionals.length }),
      /* @__PURE__ */ jsx7("span", { className: "conditionals-chevron", children: expanded ? "\u25BE" : "\u25B8" })
    ] }),
    expanded && /* @__PURE__ */ jsxs7("div", { className: "conditionals-body", children: [
      conditionals.map((cond, i) => /* @__PURE__ */ jsx7(
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
      /* @__PURE__ */ jsxs7("button", { className: "add-field-btn", onClick: addConditional, style: { marginTop: 4 }, children: [
        /* @__PURE__ */ jsx7(Plus2, { size: 12 }),
        " Add Rule"
      ] })
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
  const sourceField = allFields.find((f) => f.key === conditional.if.field);
  return /* @__PURE__ */ jsxs7("div", { className: "conditional-card", children: [
    /* @__PURE__ */ jsxs7("div", { className: "conditional-card-header", children: [
      /* @__PURE__ */ jsx7("span", { className: "conditional-card-num", children: index + 1 }),
      /* @__PURE__ */ jsx7("span", { className: "conditional-card-label", children: "IF" }),
      /* @__PURE__ */ jsx7("button", { className: "icon-btn", onClick: onDelete, title: "Delete rule", children: /* @__PURE__ */ jsx7(Trash2, { size: 12 }) })
    ] }),
    /* @__PURE__ */ jsxs7("div", { className: "conditional-card-body", children: [
      /* @__PURE__ */ jsxs7("div", { className: "conditional-row", children: [
        /* @__PURE__ */ jsxs7(
          "select",
          {
            className: "form-input",
            value: conditional.if.field,
            onChange: (e) => onUpdate({ ...conditional, if: { ...conditional.if, field: e.target.value } }),
            children: [
              /* @__PURE__ */ jsx7("option", { value: "", children: "Select field..." }),
              allKeys.map((k) => /* @__PURE__ */ jsx7("option", { value: k, children: k }, k))
            ]
          }
        ),
        /* @__PURE__ */ jsx7("span", { className: "conditional-equals", children: "=" }),
        sourceField?.type === "select" && sourceField.options ? /* @__PURE__ */ jsxs7(
          "select",
          {
            className: "form-input",
            value: String(conditional.if.equals),
            onChange: (e) => onUpdate({ ...conditional, if: { ...conditional.if, equals: e.target.value } }),
            children: [
              /* @__PURE__ */ jsx7("option", { value: "", children: "Select value..." }),
              sourceField.options.map((opt) => /* @__PURE__ */ jsx7("option", { value: opt, children: opt }, opt))
            ]
          }
        ) : sourceField?.type === "toggle" ? /* @__PURE__ */ jsxs7(
          "select",
          {
            className: "form-input",
            value: String(conditional.if.equals),
            onChange: (e) => onUpdate({ ...conditional, if: { ...conditional.if, equals: e.target.value === "true" } }),
            children: [
              /* @__PURE__ */ jsx7("option", { value: "true", children: "true" }),
              /* @__PURE__ */ jsx7("option", { value: "false", children: "false" })
            ]
          }
        ) : /* @__PURE__ */ jsx7(
          "input",
          {
            className: "form-input",
            value: String(conditional.if.equals ?? ""),
            onChange: (e) => onUpdate({ ...conditional, if: { ...conditional.if, equals: e.target.value } }),
            placeholder: "value"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs7("div", { className: "conditional-then", children: [
        /* @__PURE__ */ jsx7("span", { className: "conditional-card-label", children: "SHOW" }),
        /* @__PURE__ */ jsx7(
          TagInput,
          {
            values: conditional.show,
            onChange: (show) => onUpdate({ ...conditional, show }),
            placeholder: "Type field key + Enter"
          }
        )
      ] })
    ] })
  ] });
}

// scripts/studio/components/FieldList.tsx
import * as Icons2 from "lucide-react";
import { jsx as jsx8, jsxs as jsxs8 } from "react/jsx-runtime";
function FieldIcon2({ name, size = 14, ...rest }) {
  const iconName = name.charAt(0).toUpperCase() + name.slice(1).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  const Icon = Icons2[iconName];
  return Icon ? /* @__PURE__ */ jsx8(Icon, { size, ...rest }) : null;
}
function FieldList() {
  const { state, dispatch } = useStudio();
  const sectionIdx = state.ui.selectedSection;
  const section = state.working.schema.sections[sectionIdx];
  const selectedField = state.ui.selectedField;
  const searchQuery = state.ui.searchQuery.toLowerCase();
  const [pickerOpen, setPickerOpen] = useState6(false);
  const [dragIdx, setDragIdx] = useState6(null);
  const [dropTarget, setDropTarget] = useState6(null);
  const onDragStart = useCallback2((idx) => setDragIdx(idx), []);
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
      dispatch({ type: "MOVE_FIELD", from: dragIdx, to: toIdx });
    }
    setDragIdx(null);
    setDropTarget(null);
  }, [dragIdx, dispatch]);
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
  };
  if (!section) {
    return /* @__PURE__ */ jsx8("div", { className: "panel-fields", children: /* @__PURE__ */ jsx8("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", flex: 1, color: "var(--text-tertiary)" }, children: /* @__PURE__ */ jsx8("p", { children: "Add a section to get started" }) }) });
  }
  return /* @__PURE__ */ jsxs8("div", { className: "panel-fields", children: [
    /* @__PURE__ */ jsxs8("div", { className: "panel-fields-header", children: [
      /* @__PURE__ */ jsx8("h2", { children: section.label || "Fields" }),
      /* @__PURE__ */ jsx8("button", { className: "icon-btn", onClick: () => setPickerOpen(true), title: "Add field", children: /* @__PURE__ */ jsx8(Plus3, { size: 16 }) })
    ] }),
    /* @__PURE__ */ jsx8("div", { className: "field-list", children: section.fields.map((f, i) => {
      if (searchQuery && !f.label.toLowerCase().includes(searchQuery) && !f.key.toLowerCase().includes(searchQuery) && !f.type.includes(searchQuery)) {
        return null;
      }
      const ft = FIELD_TYPES[f.type] || { label: f.type, icon: "help-circle" };
      const isActive = i === selectedField;
      return /* @__PURE__ */ jsxs8(
        "div",
        {
          className: `field-item ${isActive ? "active" : ""}`,
          onClick: () => dispatch({ type: "SELECT_FIELD", idx: i }),
          draggable: true,
          onDragStart: () => onDragStart(i),
          onDragEnd,
          onDragOver: (e) => onDragOver(e, i),
          onDrop: (e) => onDrop(e, i),
          style: {
            opacity: dragIdx === i ? 0.4 : 1,
            borderTop: dropTarget === i ? "2px solid var(--accent)" : void 0
          },
          children: [
            /* @__PURE__ */ jsx8("span", { className: "drag-handle", children: /* @__PURE__ */ jsx8(GripVertical2, { size: 12 }) }),
            /* @__PURE__ */ jsx8("span", { className: `field-icon${isActive ? " active" : ""}`, children: /* @__PURE__ */ jsx8(FieldIcon2, { name: ft.icon, size: 14 }) }),
            /* @__PURE__ */ jsxs8("div", { className: "field-info", children: [
              /* @__PURE__ */ jsx8("div", { className: "field-label", children: f.label || "Untitled" }),
              /* @__PURE__ */ jsxs8("div", { className: "field-meta", children: [
                f.key || "",
                " \xB7 ",
                ft.label
              ] })
            ] }),
            f.required && /* @__PURE__ */ jsx8("span", { className: "field-required" }),
            /* @__PURE__ */ jsxs8("div", { className: "field-actions", children: [
              /* @__PURE__ */ jsx8("button", { className: "icon-btn", onClick: (e) => {
                e.stopPropagation();
                dispatch({ type: "DUPLICATE_FIELD", sectionIdx, fieldIdx: i });
              }, title: "Duplicate", children: /* @__PURE__ */ jsx8(Copy, { size: 12 }) }),
              /* @__PURE__ */ jsx8("button", { className: "icon-btn", onClick: (e) => {
                e.stopPropagation();
                dispatch({ type: "DELETE_FIELD", sectionIdx, fieldIdx: i });
              }, title: "Delete", children: /* @__PURE__ */ jsx8(Trash22, { size: 12 }) })
            ] })
          ]
        },
        f.key + i
      );
    }) }),
    /* @__PURE__ */ jsx8("div", { className: "add-field-area", children: /* @__PURE__ */ jsxs8("button", { className: "add-field-btn", onClick: () => setPickerOpen(true), children: [
      /* @__PURE__ */ jsx8(Plus3, { size: 14 }),
      " Add Field"
    ] }) }),
    /* @__PURE__ */ jsxs8("div", { className: "quick-templates", children: [
      /* @__PURE__ */ jsx8("div", { className: "quick-templates-label", children: "Quick Add" }),
      /* @__PURE__ */ jsx8("div", { className: "quick-templates-grid", children: QUICK_TEMPLATES.map((qt, i) => /* @__PURE__ */ jsxs8("button", { className: "quick-template-chip", onClick: () => addQuickTemplate(qt), children: [
        /* @__PURE__ */ jsx8(FieldIcon2, { name: qt.icon, size: 12 }),
        " ",
        qt.label
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsx8(ConditionalsBuilder, {}),
    /* @__PURE__ */ jsx8(TypePicker, { open: pickerOpen, onClose: () => setPickerOpen(false), onSelect: addFieldOfType })
  ] });
}

// scripts/studio/components/Inspector.tsx
import { Trash2 as Trash24 } from "lucide-react";

// scripts/studio/components/QuizBuilder.tsx
import { useState as useState7 } from "react";
import { Plus as Plus4, Trash2 as Trash23, Check } from "lucide-react";
import { jsx as jsx9, jsxs as jsxs9 } from "react/jsx-runtime";
function makeId() {
  return "q" + Math.random().toString(36).slice(2, 8);
}
function QuestionCard({
  question,
  index,
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
    onUpdate({ ...question, options, correctIndex });
  };
  return /* @__PURE__ */ jsxs9("div", { className: "quiz-card", children: [
    /* @__PURE__ */ jsxs9("div", { className: "quiz-card-header", children: [
      /* @__PURE__ */ jsx9("span", { className: "quiz-card-num", children: index + 1 }),
      /* @__PURE__ */ jsx9(
        "input",
        {
          className: "form-input quiz-question-input",
          value: question.text,
          onChange: (e) => onUpdate({ ...question, text: e.target.value }),
          placeholder: "Question text"
        }
      ),
      /* @__PURE__ */ jsx9("button", { className: "icon-btn", onClick: onDelete, title: "Delete question", children: /* @__PURE__ */ jsx9(Trash23, { size: 14 }) })
    ] }),
    /* @__PURE__ */ jsx9("div", { className: "quiz-options", children: question.options.map((opt, oi) => /* @__PURE__ */ jsxs9("div", { className: "quiz-option-row", children: [
      /* @__PURE__ */ jsx9(
        "button",
        {
          className: `quiz-correct-btn ${question.correctIndex === oi ? "active" : ""}`,
          onClick: () => onUpdate({ ...question, correctIndex: oi }),
          title: "Mark as correct",
          children: /* @__PURE__ */ jsx9(Check, { size: 12 })
        }
      ),
      /* @__PURE__ */ jsx9(
        "input",
        {
          className: "form-input",
          value: opt,
          onChange: (e) => updateOption(oi, e.target.value),
          style: { flex: 1 }
        }
      ),
      question.options.length > 2 && /* @__PURE__ */ jsx9("button", { className: "icon-btn", onClick: () => removeOption(oi), children: /* @__PURE__ */ jsx9(Trash23, { size: 12 }) })
    ] }, oi)) }),
    question.options.length < 6 && /* @__PURE__ */ jsxs9("button", { className: "quiz-add-option", onClick: addOption, children: [
      /* @__PURE__ */ jsx9(Plus4, { size: 12 }),
      " Add option"
    ] })
  ] });
}
function QuizBuilder({ questions, onChange }) {
  const [open, setOpen] = useState7(false);
  const addQuestion = () => {
    onChange([...questions, {
      id: makeId(),
      text: "",
      options: ["Option 1", "Option 2", "Option 3"],
      correctIndex: 0
    }]);
  };
  const updateQuestion = (idx, q) => {
    const next = [...questions];
    next[idx] = q;
    onChange(next);
  };
  const deleteQuestion = (idx) => {
    onChange(questions.filter((_, i) => i !== idx));
  };
  return /* @__PURE__ */ jsxs9("div", { className: "quiz-builder-section", children: [
    /* @__PURE__ */ jsxs9("div", { className: "form-group-row", style: { marginBottom: 8 }, children: [
      /* @__PURE__ */ jsxs9("label", { className: "form-label", children: [
        questions.length,
        " question",
        questions.length !== 1 ? "s" : ""
      ] }),
      /* @__PURE__ */ jsx9("button", { className: "btn-secondary", onClick: () => setOpen(true), children: "Edit Quiz" })
    ] }),
    /* @__PURE__ */ jsx9(Modal, { open, onClose: () => setOpen(false), title: "Quiz Builder", width: 520, children: /* @__PURE__ */ jsxs9("div", { className: "modal-body quiz-builder-body", children: [
      questions.map((q, i) => /* @__PURE__ */ jsx9(
        QuestionCard,
        {
          question: q,
          index: i,
          onUpdate: (updated) => updateQuestion(i, updated),
          onDelete: () => deleteQuestion(i)
        },
        q.id
      )),
      /* @__PURE__ */ jsxs9("button", { className: "add-field-btn", onClick: addQuestion, style: { marginTop: 8 }, children: [
        /* @__PURE__ */ jsx9(Plus4, { size: 14 }),
        " Add Question"
      ] })
    ] }) })
  ] });
}

// scripts/studio/components/Inspector.tsx
import { Fragment as Fragment2, jsx as jsx10, jsxs as jsxs10 } from "react/jsx-runtime";
function Inspector() {
  const { state, dispatch } = useStudio();
  const sectionIdx = state.ui.selectedSection;
  const fieldIdx = state.ui.selectedField;
  const section = state.working.schema.sections[sectionIdx];
  if (!section) {
    return /* @__PURE__ */ jsx10("div", { className: "panel-inspector", children: /* @__PURE__ */ jsx10("div", { className: "inspector-empty", children: /* @__PURE__ */ jsx10("p", { children: "Select a section to inspect" }) }) });
  }
  const field = fieldIdx >= 0 ? section.fields[fieldIdx] : null;
  if (!field) {
    return /* @__PURE__ */ jsx10("div", { className: "panel-inspector", children: /* @__PURE__ */ jsxs10("div", { className: "inspector-section", children: [
      /* @__PURE__ */ jsx10("h3", { children: "Section" }),
      /* @__PURE__ */ jsxs10("div", { className: "form-group", children: [
        /* @__PURE__ */ jsx10("label", { className: "form-label", children: "Label" }),
        /* @__PURE__ */ jsx10(
          "input",
          {
            className: "form-input",
            value: section.label,
            onChange: (e) => dispatch({ type: "UPDATE_SECTION", idx: sectionIdx, section: { ...section, label: e.target.value } })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs10("div", { className: "form-group", children: [
        /* @__PURE__ */ jsx10("label", { className: "form-label", children: "Key" }),
        /* @__PURE__ */ jsx10(
          "input",
          {
            className: "form-input font-mono",
            value: section.key,
            onChange: (e) => dispatch({ type: "UPDATE_SECTION", idx: sectionIdx, section: { ...section, key: e.target.value } })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs10("div", { className: "form-group", children: [
        /* @__PURE__ */ jsx10("label", { className: "form-label", children: "Description" }),
        /* @__PURE__ */ jsx10(
          "textarea",
          {
            className: "form-input",
            rows: 3,
            value: section.description || "",
            onChange: (e) => dispatch({ type: "UPDATE_SECTION", idx: sectionIdx, section: { ...section, description: e.target.value || void 0 } }),
            placeholder: "Optional help text for this section"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs10("div", { className: "form-group", children: [
        /* @__PURE__ */ jsx10("label", { className: "form-label", children: "Icon" }),
        /* @__PURE__ */ jsx10(
          "input",
          {
            className: "form-input",
            value: section.icon || "",
            onChange: (e) => dispatch({ type: "UPDATE_SECTION", idx: sectionIdx, section: { ...section, icon: e.target.value || void 0 } }),
            placeholder: "Lucide icon name"
          }
        )
      ] }),
      /* @__PURE__ */ jsx10("div", { style: { marginTop: 12 }, children: /* @__PURE__ */ jsxs10(
        "button",
        {
          className: "btn-danger",
          onClick: () => dispatch({ type: "DELETE_SECTION", idx: sectionIdx }),
          children: [
            /* @__PURE__ */ jsx10(Trash24, { size: 12 }),
            " Delete Section"
          ]
        }
      ) })
    ] }) });
  }
  const ft = FIELD_TYPES[field.type];
  const updateField = (patch) => {
    dispatch({ type: "UPDATE_FIELD", sectionIdx, fieldIdx, field: { ...field, ...patch } });
  };
  return /* @__PURE__ */ jsxs10("div", { className: "panel-inspector", children: [
    /* @__PURE__ */ jsx10("div", { className: "inspector-header", children: /* @__PURE__ */ jsx10("span", { className: "inspector-type-badge", children: ft?.label || field.type }) }),
    /* @__PURE__ */ jsxs10("div", { className: "inspector-fields", children: [
      /* @__PURE__ */ jsxs10("div", { className: "form-group", children: [
        /* @__PURE__ */ jsx10("label", { className: "form-label", children: "Label" }),
        /* @__PURE__ */ jsx10("input", { className: "form-input", value: field.label, onChange: (e) => updateField({ label: e.target.value }) })
      ] }),
      /* @__PURE__ */ jsxs10("div", { className: "form-group", children: [
        /* @__PURE__ */ jsx10("label", { className: "form-label", children: "Key" }),
        /* @__PURE__ */ jsx10("input", { className: "form-input font-mono", value: field.key, onChange: (e) => updateField({ key: e.target.value }) })
      ] }),
      field.type !== "group" && field.type !== "group_array" && /* @__PURE__ */ jsxs10("div", { className: "form-group-row", children: [
        /* @__PURE__ */ jsx10("label", { className: "form-label", children: "Required" }),
        /* @__PURE__ */ jsx10("input", { type: "checkbox", checked: field.required || false, onChange: (e) => updateField({ required: e.target.checked }) })
      ] }),
      (field.type === "text" || field.type === "textarea") && /* @__PURE__ */ jsxs10(Fragment2, { children: [
        /* @__PURE__ */ jsxs10("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx10("label", { className: "form-label", children: "Placeholder" }),
          /* @__PURE__ */ jsx10("input", { className: "form-input", value: field.placeholder || "", onChange: (e) => updateField({ placeholder: e.target.value || void 0 }) })
        ] }),
        /* @__PURE__ */ jsxs10("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx10("label", { className: "form-label", children: "Hint" }),
          /* @__PURE__ */ jsx10("input", { className: "form-input", value: field.hint || "", onChange: (e) => updateField({ hint: e.target.value || void 0 }) })
        ] }),
        /* @__PURE__ */ jsx10("div", { className: "inspector-divider" }),
        /* @__PURE__ */ jsx10("div", { className: "inspector-constraint-header", children: "Constraints" }),
        /* @__PURE__ */ jsxs10("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx10("label", { className: "form-label", children: "Min length" }),
          /* @__PURE__ */ jsx10("input", { className: "form-input", type: "number", value: field.constraints?.minLength ?? "", onChange: (e) => updateField({ constraints: { ...field.constraints, minLength: e.target.value ? Number(e.target.value) : void 0 } }) })
        ] }),
        /* @__PURE__ */ jsxs10("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx10("label", { className: "form-label", children: "Max length" }),
          /* @__PURE__ */ jsx10("input", { className: "form-input", type: "number", value: field.constraints?.maxLength ?? "", onChange: (e) => updateField({ constraints: { ...field.constraints, maxLength: e.target.value ? Number(e.target.value) : void 0 } }) })
        ] }),
        field.type === "textarea" && /* @__PURE__ */ jsxs10("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx10("label", { className: "form-label", children: "Max words" }),
          /* @__PURE__ */ jsx10("input", { className: "form-input", type: "number", value: field.constraints?.maxWords ?? "", onChange: (e) => updateField({ constraints: { ...field.constraints, maxWords: e.target.value ? Number(e.target.value) : void 0 } }) })
        ] })
      ] }),
      field.type === "number" && /* @__PURE__ */ jsxs10(Fragment2, { children: [
        /* @__PURE__ */ jsxs10("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx10("label", { className: "form-label", children: "Hint" }),
          /* @__PURE__ */ jsx10("input", { className: "form-input", value: field.hint || "", onChange: (e) => updateField({ hint: e.target.value || void 0 }) })
        ] }),
        /* @__PURE__ */ jsx10("div", { className: "inspector-divider" }),
        /* @__PURE__ */ jsx10("div", { className: "inspector-constraint-header", children: "Constraints" }),
        /* @__PURE__ */ jsxs10("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx10("label", { className: "form-label", children: "Min" }),
          /* @__PURE__ */ jsx10("input", { className: "form-input", type: "number", value: field.constraints?.min ?? "", onChange: (e) => updateField({ constraints: { ...field.constraints, min: e.target.value ? Number(e.target.value) : void 0 } }) })
        ] }),
        /* @__PURE__ */ jsxs10("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx10("label", { className: "form-label", children: "Max" }),
          /* @__PURE__ */ jsx10("input", { className: "form-input", type: "number", value: field.constraints?.max ?? "", onChange: (e) => updateField({ constraints: { ...field.constraints, max: e.target.value ? Number(e.target.value) : void 0 } }) })
        ] }),
        /* @__PURE__ */ jsxs10("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx10("label", { className: "form-label", children: "Step" }),
          /* @__PURE__ */ jsx10("input", { className: "form-input", type: "number", value: field.constraints?.step ?? "", onChange: (e) => updateField({ constraints: { ...field.constraints, step: e.target.value ? Number(e.target.value) : void 0 } }) })
        ] }),
        /* @__PURE__ */ jsxs10("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx10("label", { className: "form-label", children: "Unit" }),
          /* @__PURE__ */ jsx10("input", { className: "form-input", value: field.constraints?.unit || "", onChange: (e) => updateField({ constraints: { ...field.constraints, unit: e.target.value || void 0 } }), placeholder: "e.g. years, kg" })
        ] })
      ] }),
      field.type === "date" && /* @__PURE__ */ jsxs10("div", { className: "form-group", children: [
        /* @__PURE__ */ jsx10("label", { className: "form-label", children: "Hint" }),
        /* @__PURE__ */ jsx10("input", { className: "form-input", value: field.hint || "", onChange: (e) => updateField({ hint: e.target.value || void 0 }) })
      ] }),
      field.type === "select" && /* @__PURE__ */ jsxs10("div", { className: "form-group", children: [
        /* @__PURE__ */ jsx10("label", { className: "form-label", children: "Options (one per line)" }),
        /* @__PURE__ */ jsx10(
          "textarea",
          {
            className: "form-input",
            rows: 4,
            value: (field.options || []).join("\n"),
            onChange: (e) => updateField({ options: e.target.value.split("\n").filter(Boolean) })
          }
        )
      ] }),
      field.type === "color" && /* @__PURE__ */ jsxs10(Fragment2, { children: [
        /* @__PURE__ */ jsxs10("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx10("label", { className: "form-label", children: "Default" }),
          /* @__PURE__ */ jsxs10("div", { className: "color-input-row", children: [
            /* @__PURE__ */ jsx10("input", { type: "color", value: field.default || "#000000", onChange: (e) => updateField({ default: e.target.value }) }),
            /* @__PURE__ */ jsx10("input", { className: "form-input", value: field.default || "", onChange: (e) => updateField({ default: e.target.value }), style: { flex: 1 } })
          ] })
        ] }),
        /* @__PURE__ */ jsxs10("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx10("label", { className: "form-label", children: "Presets (hex colors)" }),
          /* @__PURE__ */ jsx10(
            TagInput,
            {
              values: field.presets || [],
              onChange: (presets) => updateField({ presets }),
              placeholder: "#ff6eb4"
            }
          )
        ] })
      ] }),
      (field.type === "image" || field.type === "image_array") && /* @__PURE__ */ jsxs10(Fragment2, { children: [
        /* @__PURE__ */ jsxs10("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx10("label", { className: "form-label", children: "Aspect Ratio" }),
          /* @__PURE__ */ jsx10("input", { className: "form-input", value: field.aspectRatio || "", onChange: (e) => updateField({ aspectRatio: e.target.value || void 0 }), placeholder: "e.g. 3:4, 1:1" })
        ] }),
        /* @__PURE__ */ jsx10("div", { className: "inspector-divider" }),
        /* @__PURE__ */ jsx10("div", { className: "inspector-constraint-header", children: "Constraints" }),
        /* @__PURE__ */ jsxs10("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx10("label", { className: "form-label", children: "Max size (MB)" }),
          /* @__PURE__ */ jsx10("input", { className: "form-input", type: "number", value: field.constraints?.maxSizeMB ?? "", onChange: (e) => updateField({ constraints: { ...field.constraints, maxSizeMB: e.target.value ? Number(e.target.value) : void 0 } }) })
        ] }),
        /* @__PURE__ */ jsxs10("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx10("label", { className: "form-label", children: "Min width (px)" }),
          /* @__PURE__ */ jsx10("input", { className: "form-input", type: "number", value: field.constraints?.minWidth ?? "", onChange: (e) => updateField({ constraints: { ...field.constraints, minWidth: e.target.value ? Number(e.target.value) : void 0 } }) })
        ] })
      ] }),
      field.type === "image_array" && /* @__PURE__ */ jsxs10("div", { className: "form-group", children: [
        /* @__PURE__ */ jsx10("label", { className: "form-label", children: "Max images" }),
        /* @__PURE__ */ jsx10("input", { className: "form-input", type: "number", value: field.max || "", onChange: (e) => updateField({ max: e.target.value ? Number(e.target.value) : void 0 }) })
      ] }),
      field.type === "video" && /* @__PURE__ */ jsxs10(Fragment2, { children: [
        /* @__PURE__ */ jsx10("div", { className: "inspector-divider" }),
        /* @__PURE__ */ jsx10("div", { className: "inspector-constraint-header", children: "Constraints" }),
        /* @__PURE__ */ jsxs10("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx10("label", { className: "form-label", children: "Max size (MB)" }),
          /* @__PURE__ */ jsx10("input", { className: "form-input", type: "number", value: field.constraints?.maxSizeMB ?? "", onChange: (e) => updateField({ constraints: { ...field.constraints, maxSizeMB: e.target.value ? Number(e.target.value) : void 0 } }) })
        ] }),
        /* @__PURE__ */ jsxs10("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx10("label", { className: "form-label", children: "Max duration (sec)" }),
          /* @__PURE__ */ jsx10("input", { className: "form-input", type: "number", value: field.constraints?.maxDurationSec ?? "", onChange: (e) => updateField({ constraints: { ...field.constraints, maxDurationSec: e.target.value ? Number(e.target.value) : void 0 } }) })
        ] })
      ] }),
      field.type === "audio" && /* @__PURE__ */ jsxs10(Fragment2, { children: [
        /* @__PURE__ */ jsx10("div", { className: "inspector-divider" }),
        /* @__PURE__ */ jsx10("div", { className: "inspector-constraint-header", children: "Constraints" }),
        /* @__PURE__ */ jsxs10("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx10("label", { className: "form-label", children: "Max size (MB)" }),
          /* @__PURE__ */ jsx10("input", { className: "form-input", type: "number", value: field.constraints?.maxSizeMB ?? "", onChange: (e) => updateField({ constraints: { ...field.constraints, maxSizeMB: e.target.value ? Number(e.target.value) : void 0 } }) })
        ] }),
        /* @__PURE__ */ jsxs10("div", { className: "form-group-row", children: [
          /* @__PURE__ */ jsx10("label", { className: "form-label", children: "Loop" }),
          /* @__PURE__ */ jsx10("input", { type: "checkbox", checked: field.constraints?.loop || false, onChange: (e) => updateField({ constraints: { ...field.constraints, loop: e.target.checked } }) })
        ] })
      ] }),
      field.type === "quiz" && /* @__PURE__ */ jsxs10(Fragment2, { children: [
        /* @__PURE__ */ jsx10("div", { className: "inspector-divider" }),
        /* @__PURE__ */ jsx10(
          QuizBuilder,
          {
            questions: state.working.demo[field.key] || [],
            onChange: (questions) => dispatch({ type: "SET_DEMO", key: field.key, value: questions })
          }
        )
      ] }),
      (field.type === "group" || field.type === "group_array") && /* @__PURE__ */ jsx10("div", { className: "inspector-placeholder", children: /* @__PURE__ */ jsx10("p", { children: "Nested group editing \u2014 drag fields from the field list into this group, or edit sub-fields in schema.json directly." }) })
    ] })
  ] });
}

// scripts/studio/components/DemoTab.tsx
import { RotateCcw } from "lucide-react";
import { jsx as jsx11, jsxs as jsxs11 } from "react/jsx-runtime";
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
      const isArray = Array.isArray(value);
      const isObject = typeof value === "object" && value !== null && !isArray;
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
        /* @__PURE__ */ jsx11("div", { className: "demo-field-input", children: f.type === "toggle" ? /* @__PURE__ */ jsxs11("label", { className: "demo-toggle-label", children: [
          /* @__PURE__ */ jsx11(
            "input",
            {
              type: "checkbox",
              checked: !!value,
              onChange: (e) => dispatch({ type: "SET_DEMO", key: f.key, value: e.target.checked })
            }
          ),
          value ? "true" : "false"
        ] }) : f.type === "color" ? /* @__PURE__ */ jsxs11("div", { className: "color-input-row", children: [
          /* @__PURE__ */ jsx11(
            "input",
            {
              type: "color",
              value: value || "#000000",
              onChange: (e) => dispatch({ type: "SET_DEMO", key: f.key, value: e.target.value })
            }
          ),
          /* @__PURE__ */ jsx11(
            "input",
            {
              className: "form-input",
              value: value || "",
              onChange: (e) => dispatch({ type: "SET_DEMO", key: f.key, value: e.target.value }),
              style: { flex: 1 }
            }
          )
        ] }) : f.type === "number" ? /* @__PURE__ */ jsx11(
          "input",
          {
            className: "form-input",
            type: "number",
            value: value ?? "",
            onChange: (e) => dispatch({ type: "SET_DEMO", key: f.key, value: e.target.value ? Number(e.target.value) : "" })
          }
        ) : f.type === "select" ? /* @__PURE__ */ jsx11(
          "select",
          {
            className: "form-input",
            value: value || "",
            onChange: (e) => dispatch({ type: "SET_DEMO", key: f.key, value: e.target.value }),
            children: (f.options || []).map((opt) => /* @__PURE__ */ jsx11("option", { value: opt, children: opt }, opt))
          }
        ) : isArray || isObject ? /* @__PURE__ */ jsx11(
          "textarea",
          {
            className: "form-input font-mono",
            rows: Math.min(8, JSON.stringify(value, null, 2).split("\n").length + 1),
            value: JSON.stringify(value, null, 2),
            onChange: (e) => {
              try {
                dispatch({ type: "SET_DEMO", key: f.key, value: JSON.parse(e.target.value) });
              } catch {
              }
            }
          }
        ) : f.type === "textarea" ? /* @__PURE__ */ jsx11(
          "textarea",
          {
            className: "form-input",
            rows: 3,
            value: value ?? "",
            onChange: (e) => dispatch({ type: "SET_DEMO", key: f.key, value: e.target.value })
          }
        ) : /* @__PURE__ */ jsx11(
          "input",
          {
            className: "form-input",
            value: value ?? "",
            onChange: (e) => dispatch({ type: "SET_DEMO", key: f.key, value: e.target.value })
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

// scripts/studio/components/PreviewPane.tsx
import { useRef as useRef5, useCallback as useCallback3 } from "react";
import { RefreshCw as RefreshCw2, Maximize2, Minimize2 } from "lucide-react";
import { useState as useState8 } from "react";
import { jsx as jsx13, jsxs as jsxs13 } from "react/jsx-runtime";
function PreviewPane({ port }) {
  const iframeRef = useRef5(null);
  const [expanded, setExpanded] = useState8(false);
  const refresh = useCallback3(() => {
    if (iframeRef.current) {
      iframeRef.current.src = iframeRef.current.src;
    }
  }, []);
  return /* @__PURE__ */ jsxs13("div", { className: `preview-pane ${expanded ? "expanded" : ""}`, children: [
    /* @__PURE__ */ jsxs13("div", { className: "preview-pane-header", children: [
      /* @__PURE__ */ jsx13("span", { className: "preview-pane-label", children: "Preview" }),
      /* @__PURE__ */ jsx13("button", { className: "icon-btn", onClick: refresh, title: "Refresh preview", children: /* @__PURE__ */ jsx13(RefreshCw2, { size: 12 }) }),
      /* @__PURE__ */ jsx13("button", { className: "icon-btn", onClick: () => setExpanded(!expanded), title: expanded ? "Collapse" : "Expand", children: expanded ? /* @__PURE__ */ jsx13(Minimize2, { size: 12 }) : /* @__PURE__ */ jsx13(Maximize2, { size: 12 }) })
    ] }),
    /* @__PURE__ */ jsx13("div", { className: "preview-pane-frame", children: /* @__PURE__ */ jsx13(
      "iframe",
      {
        ref: iframeRef,
        className: "preview-frame",
        src: `http://localhost:${port}/`,
        title: "Template Preview"
      }
    ) })
  ] });
}

// scripts/studio/components/common/Toast.tsx
import { useEffect as useEffect3 } from "react";
import { jsx as jsx14 } from "react/jsx-runtime";
function Toast() {
  const { state, dispatch } = useStudio();
  const toast = state.toast;
  useEffect3(() => {
    if (!toast) return;
    const timer = setTimeout(() => dispatch({ type: "HIDE_TOAST" }), 2500);
    return () => clearTimeout(timer);
  }, [toast, dispatch]);
  if (!toast) return null;
  return /* @__PURE__ */ jsx14("div", { className: `toast visible ${toast.type}`, children: toast.message });
}

// scripts/studio/App.tsx
import { Fragment as Fragment3, jsx as jsx15, jsxs as jsxs14 } from "react/jsx-runtime";
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
function Studio() {
  const [state, dispatch] = useReducer(studioReducer, initialState);
  const [loading, setLoading] = useState9(true);
  useEffect4(() => {
    const saved = localStorage.getItem("studio-theme");
    if (saved === "dark") document.documentElement.setAttribute("data-theme", "dark");
  }, []);
  useEffect4(() => {
    loadConfig().then((data) => {
      dispatch({ type: "LOADED", data });
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);
  const refreshPreview = useCallback4(() => {
    const iframe = document.querySelector("iframe.preview-frame");
    if (iframe) iframe.src = iframe.src;
  }, []);
  const handleSearch = useCallback4((query) => {
    dispatch({ type: "SET_SEARCH", query });
  }, []);
  useEffect4(() => {
    const onKey = (e) => {
      const tag = e.target.tagName;
      const isInput = tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
      if ((e.metaKey || e.ctrlKey) && e.key === "s") {
        e.preventDefault();
        document.querySelector(".save-btn")?.click();
        return;
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "p") {
        e.preventDefault();
        dispatch({ type: "TOGGLE_PREVIEW" });
        return;
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "d" && !isInput) {
        e.preventDefault();
        if (state.ui.selectedField >= 0) {
          dispatch({ type: "DUPLICATE_FIELD", sectionIdx: state.ui.selectedSection, fieldIdx: state.ui.selectedField });
        }
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
    return /* @__PURE__ */ jsx15("div", { className: "studio-shell", children: /* @__PURE__ */ jsxs14("div", { className: "studio-loading", children: [
      /* @__PURE__ */ jsx15("div", { className: "loading-spinner" }),
      /* @__PURE__ */ jsx15("p", { children: "Loading template config..." })
    ] }) });
  }
  return /* @__PURE__ */ jsx15(StudioContext.Provider, { value: { state, dispatch }, children: /* @__PURE__ */ jsxs14("div", { className: "studio-shell", children: [
    /* @__PURE__ */ jsx15(Header, { config, onSearch: handleSearch, onRefreshPreview: refreshPreview }),
    /* @__PURE__ */ jsxs14("div", { className: "studio-main", children: [
      state.ui.activeTab === "schema" ? /* @__PURE__ */ jsxs14(Fragment3, { children: [
        /* @__PURE__ */ jsx15(SectionList, {}),
        /* @__PURE__ */ jsx15(FieldList, {}),
        /* @__PURE__ */ jsx15(Inspector, {})
      ] }) : state.ui.activeTab === "demo" ? /* @__PURE__ */ jsx15(DemoTab, {}) : /* @__PURE__ */ jsx15(ManifestTab, {}),
      state.ui.showPreview && /* @__PURE__ */ jsx15(PreviewPane, { port: config.port })
    ] }),
    /* @__PURE__ */ jsx15(Footer, { onRefreshPreview: refreshPreview }),
    /* @__PURE__ */ jsx15(Toast, {})
  ] }) });
}
var el = document.getElementById("studio-root");
if (el) {
  createRoot(el).render(/* @__PURE__ */ jsx15(Studio, {}));
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic2NyaXB0cy9zdHVkaW8vQXBwLnRzeCIsICJzY3JpcHRzL3N0dWRpby9zdHlsZXMuY3NzIiwgInNjcmlwdHMvc3R1ZGlvL3N0YXRlLnRzIiwgInNjcmlwdHMvc3R1ZGlvL3V0aWxzLnRzIiwgInNjcmlwdHMvc3R1ZGlvL2FwaS50cyIsICJzY3JpcHRzL3N0dWRpby9jb21wb25lbnRzL0hlYWRlci50c3giLCAic2NyaXB0cy9zdHVkaW8vY29tcG9uZW50cy9Gb290ZXIudHN4IiwgInNjcmlwdHMvc3R1ZGlvL2NvbXBvbmVudHMvU2VjdGlvbkxpc3QudHN4IiwgInNjcmlwdHMvc3R1ZGlvL2NvbXBvbmVudHMvY29tbW9uL01vZGFsLnRzeCIsICJzY3JpcHRzL3N0dWRpby9jb21wb25lbnRzL0ZpZWxkTGlzdC50c3giLCAic2NyaXB0cy9zdHVkaW8vZmllbGQtcmVnaXN0cnkudHMiLCAic2NyaXB0cy9zdHVkaW8vY29uc3RhbnRzLnRzIiwgInNjcmlwdHMvc3R1ZGlvL2NvbXBvbmVudHMvVHlwZVBpY2tlci50c3giLCAic2NyaXB0cy9zdHVkaW8vY29tcG9uZW50cy9Db25kaXRpb25hbHNCdWlsZGVyLnRzeCIsICJzY3JpcHRzL3N0dWRpby9jb21wb25lbnRzL2NvbW1vbi9UYWdJbnB1dC50c3giLCAic2NyaXB0cy9zdHVkaW8vY29tcG9uZW50cy9JbnNwZWN0b3IudHN4IiwgInNjcmlwdHMvc3R1ZGlvL2NvbXBvbmVudHMvUXVpekJ1aWxkZXIudHN4IiwgInNjcmlwdHMvc3R1ZGlvL2NvbXBvbmVudHMvRGVtb1RhYi50c3giLCAic2NyaXB0cy9zdHVkaW8vY29tcG9uZW50cy9NYW5pZmVzdFRhYi50c3giLCAic2NyaXB0cy9zdHVkaW8vY29tcG9uZW50cy9QcmV2aWV3UGFuZS50c3giLCAic2NyaXB0cy9zdHVkaW8vY29tcG9uZW50cy9jb21tb24vVG9hc3QudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSAncmVhY3QtZG9tL2NsaWVudCdcbmltcG9ydCB7IHVzZVJlZHVjZXIsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgJy4vc3R5bGVzLmNzcydcbmltcG9ydCB7IHN0dWRpb1JlZHVjZXIsIFN0dWRpb0NvbnRleHQsIERFRkFVTFRfU0NIRU1BLCBERUZBVUxUX01BTklGRVNUIH0gZnJvbSAnLi9zdGF0ZSdcbmltcG9ydCB0eXBlIHsgU3R1ZGlvU3RhdGUgfSBmcm9tICcuL3N0YXRlJ1xuaW1wb3J0IHR5cGUgeyBTdHVkaW9Db25maWcgfSBmcm9tICcuL3R5cGVzJ1xuaW1wb3J0IHsgbG9hZENvbmZpZyB9IGZyb20gJy4vYXBpJ1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gJy4vY29tcG9uZW50cy9Gb290ZXInXG5pbXBvcnQgeyBTZWN0aW9uTGlzdCB9IGZyb20gJy4vY29tcG9uZW50cy9TZWN0aW9uTGlzdCdcbmltcG9ydCB7IEZpZWxkTGlzdCB9IGZyb20gJy4vY29tcG9uZW50cy9GaWVsZExpc3QnXG5pbXBvcnQgeyBJbnNwZWN0b3IgfSBmcm9tICcuL2NvbXBvbmVudHMvSW5zcGVjdG9yJ1xuaW1wb3J0IHsgRGVtb1RhYiB9IGZyb20gJy4vY29tcG9uZW50cy9EZW1vVGFiJ1xuaW1wb3J0IHsgTWFuaWZlc3RUYWIgfSBmcm9tICcuL2NvbXBvbmVudHMvTWFuaWZlc3RUYWInXG5pbXBvcnQgeyBQcmV2aWV3UGFuZSB9IGZyb20gJy4vY29tcG9uZW50cy9QcmV2aWV3UGFuZSdcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbW1vbi9Ub2FzdCdcblxuY29uc3QgY29uZmlnOiBTdHVkaW9Db25maWcgPSAod2luZG93IGFzIGFueSkuX19TVFVESU9fQ09ORklHX18gPz8geyBzbHVnOiAndW5rbm93bicsIHBvcnQ6IDQzMjEgfVxuXG5jb25zdCBpbml0aWFsU3RhdGU6IFN0dWRpb1N0YXRlID0ge1xuICBsb2FkZWQ6IHsgc2NoZW1hOiBERUZBVUxUX1NDSEVNQSwgZGVtbzoge30sIG1hbmlmZXN0OiBERUZBVUxUX01BTklGRVNUIH0sXG4gIHdvcmtpbmc6IHsgc2NoZW1hOiBERUZBVUxUX1NDSEVNQSwgZGVtbzoge30sIG1hbmlmZXN0OiBERUZBVUxUX01BTklGRVNUIH0sXG4gIHVpOiB7XG4gICAgc2VsZWN0ZWRTZWN0aW9uOiAwLFxuICAgIHNlbGVjdGVkRmllbGQ6IC0xLFxuICAgIGFjdGl2ZVRhYjogJ3NjaGVtYScsXG4gICAgdGhlbWU6IChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3R1ZGlvLXRoZW1lJykgYXMgJ2xpZ2h0JyB8ICdkYXJrJykgfHwgJ2xpZ2h0JyxcbiAgICBzZWFyY2hRdWVyeTogJycsXG4gICAgc2hvd1ByZXZpZXc6IGZhbHNlLFxuICB9LFxuICB0b2FzdDogbnVsbCxcbn1cblxuZnVuY3Rpb24gU3R1ZGlvKCkge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoc3R1ZGlvUmVkdWNlciwgaW5pdGlhbFN0YXRlKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2F2ZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3R1ZGlvLXRoZW1lJylcbiAgICBpZiAoc2F2ZWQgPT09ICdkYXJrJykgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsICdkYXJrJylcbiAgfSwgW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2FkQ29uZmlnKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnTE9BREVEJywgZGF0YSB9KVxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICB9KS5jYXRjaCgoKSA9PiBzZXRMb2FkaW5nKGZhbHNlKSlcbiAgfSwgW10pXG5cbiAgY29uc3QgcmVmcmVzaFByZXZpZXcgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgaWZyYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaWZyYW1lLnByZXZpZXctZnJhbWUnKSBhcyBIVE1MSUZyYW1lRWxlbWVudCB8IG51bGxcbiAgICBpZiAoaWZyYW1lKSBpZnJhbWUuc3JjID0gaWZyYW1lLnNyY1xuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSB1c2VDYWxsYmFjaygocXVlcnk6IHN0cmluZykgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ1NFVF9TRUFSQ0gnLCBxdWVyeSB9KVxuICB9LCBbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG9uS2V5ID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHRhZyA9IChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkudGFnTmFtZVxuICAgICAgY29uc3QgaXNJbnB1dCA9IHRhZyA9PT0gJ0lOUFVUJyB8fCB0YWcgPT09ICdURVhUQVJFQScgfHwgdGFnID09PSAnU0VMRUNUJ1xuXG4gICAgICAvLyBDbWQrUyBcdTIwMTQgc2F2ZVxuICAgICAgaWYgKChlLm1ldGFLZXkgfHwgZS5jdHJsS2V5KSAmJiBlLmtleSA9PT0gJ3MnKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PignLnNhdmUtYnRuJyk/LmNsaWNrKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIENtZCtQIFx1MjAxNCB0b2dnbGUgcHJldmlld1xuICAgICAgaWYgKChlLm1ldGFLZXkgfHwgZS5jdHJsS2V5KSAmJiBlLmtleSA9PT0gJ3AnKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdUT0dHTEVfUFJFVklFVycgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIENtZCtEIFx1MjAxNCBkdXBsaWNhdGUgZmllbGRcbiAgICAgIGlmICgoZS5tZXRhS2V5IHx8IGUuY3RybEtleSkgJiYgZS5rZXkgPT09ICdkJyAmJiAhaXNJbnB1dCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgaWYgKHN0YXRlLnVpLnNlbGVjdGVkRmllbGQgPj0gMCkge1xuICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0RVUExJQ0FURV9GSUVMRCcsIHNlY3Rpb25JZHg6IHN0YXRlLnVpLnNlbGVjdGVkU2VjdGlvbiwgZmllbGRJZHg6IHN0YXRlLnVpLnNlbGVjdGVkRmllbGQgfSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGlzSW5wdXQpIHJldHVyblxuXG4gICAgICAvLyBFc2NhcGUgXHUyMDE0IGRlc2VsZWN0XG4gICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1NFTEVDVF9GSUVMRCcsIGlkeDogLTEgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIERlbGV0ZS9CYWNrc3BhY2UgXHUyMDE0IHJlbW92ZSBzZWxlY3RlZCBmaWVsZFxuICAgICAgaWYgKChlLmtleSA9PT0gJ0RlbGV0ZScgfHwgZS5rZXkgPT09ICdCYWNrc3BhY2UnKSAmJiBzdGF0ZS51aS5zZWxlY3RlZEZpZWxkID49IDApIHtcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnREVMRVRFX0ZJRUxEJywgc2VjdGlvbklkeDogc3RhdGUudWkuc2VsZWN0ZWRTZWN0aW9uLCBmaWVsZElkeDogc3RhdGUudWkuc2VsZWN0ZWRGaWVsZCB9KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleSlcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleSlcbiAgfSwgW3N0YXRlLnVpLnNlbGVjdGVkRmllbGQsIHN0YXRlLnVpLnNlbGVjdGVkU2VjdGlvbl0pXG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHVkaW8tc2hlbGxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHVkaW8tbG9hZGluZ1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1zcGlubmVyXCIgLz5cbiAgICAgICAgICA8cD5Mb2FkaW5nIHRlbXBsYXRlIGNvbmZpZy4uLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxTdHVkaW9Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHN0YXRlLCBkaXNwYXRjaCB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3R1ZGlvLXNoZWxsXCI+XG4gICAgICAgIDxIZWFkZXIgY29uZmlnPXtjb25maWd9IG9uU2VhcmNoPXtoYW5kbGVTZWFyY2h9IG9uUmVmcmVzaFByZXZpZXc9e3JlZnJlc2hQcmV2aWV3fSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0dWRpby1tYWluXCI+XG4gICAgICAgICAge3N0YXRlLnVpLmFjdGl2ZVRhYiA9PT0gJ3NjaGVtYScgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8U2VjdGlvbkxpc3QgLz5cbiAgICAgICAgICAgICAgPEZpZWxkTGlzdCAvPlxuICAgICAgICAgICAgICA8SW5zcGVjdG9yIC8+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogc3RhdGUudWkuYWN0aXZlVGFiID09PSAnZGVtbycgPyAoXG4gICAgICAgICAgICA8RGVtb1RhYiAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8TWFuaWZlc3RUYWIgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtzdGF0ZS51aS5zaG93UHJldmlldyAmJiA8UHJldmlld1BhbmUgcG9ydD17Y29uZmlnLnBvcnR9IC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZvb3RlciBvblJlZnJlc2hQcmV2aWV3PXtyZWZyZXNoUHJldmlld30gLz5cbiAgICAgICAgPFRvYXN0IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L1N0dWRpb0NvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3R1ZGlvLXJvb3QnKVxuaWYgKGVsKSB7XG4gIGNyZWF0ZVJvb3QoZWwpLnJlbmRlcig8U3R1ZGlvIC8+KVxufVxuIiwgIlxuICAgICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICAgIHMudGV4dENvbnRlbnQgPSBgOnJvb3Qge1xuICAtLWJnOiAjZmZmZmZmO1xuICAtLWJnLXNlY29uZGFyeTogI2Y5ZmFmYjtcbiAgLS1iZy10ZXJ0aWFyeTogI2YzZjRmNjtcbiAgLS1iZy1ob3ZlcjogI2YzZjRmNjtcbiAgLS1iZy1hY3RpdmU6ICNlNWU3ZWI7XG4gIC0tYm9yZGVyOiAjZTVlN2ViO1xuICAtLWJvcmRlci1saWdodDogI2YzZjRmNjtcbiAgLS10ZXh0OiAjMTExODI3O1xuICAtLXRleHQtc2Vjb25kYXJ5OiAjNmI3MjgwO1xuICAtLXRleHQtdGVydGlhcnk6ICM5Y2EzYWY7XG4gIC0tYWNjZW50OiAjNjM2NmYxO1xuICAtLWFjY2VudC1saWdodDogI2VlZjJmZjtcbiAgLS1hY2NlbnQtaG92ZXI6ICM0ZjQ2ZTU7XG4gIC0tZGFuZ2VyOiAjZWY0NDQ0O1xuICAtLWRhbmdlci1saWdodDogI2ZlZjJmMjtcbiAgLS1zdWNjZXNzOiAjMTBiOTgxO1xuICAtLXN1Y2Nlc3MtbGlnaHQ6ICNlY2ZkZjU7XG4gIC0td2FybmluZzogI2Y1OWUwYjtcbiAgLS13YXJuaW5nLWxpZ2h0OiAjZmZmYmViO1xuICAtLXJhZGl1czogOHB4O1xuICAtLXJhZGl1cy1sZzogMTJweDtcbiAgLS1zaGFkb3ctc206IDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMDUpO1xuICAtLXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xKSwgMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4wNik7XG4gIC0tc2hhZG93LWxnOiAwIDEwcHggMTVweCAtM3B4IHJnYmEoMCwwLDAsMC4xKSwgMCA0cHggNnB4IC00cHggcmdiYSgwLDAsMCwwLjEpO1xuICAtLXRyYW5zaXRpb246IDE1MG1zIGVhc2U7XG4gIC0tZm9udDogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWY7XG4gIC0tZm9udC1tb25vOiAnU0YgTW9ubycsICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgbW9ub3NwYWNlO1xufVxuXG5bZGF0YS10aGVtZT1cImRhcmtcIl0ge1xuICAtLWJnOiAjMGYxMTE3O1xuICAtLWJnLXNlY29uZGFyeTogIzFhMWQyNztcbiAgLS1iZy10ZXJ0aWFyeTogIzI0MjgzMztcbiAgLS1iZy1ob3ZlcjogIzI0MjgzMztcbiAgLS1iZy1hY3RpdmU6ICMyZTMzNDA7XG4gIC0tYm9yZGVyOiAjMmUzMzQwO1xuICAtLWJvcmRlci1saWdodDogIzI0MjgzMztcbiAgLS10ZXh0OiAjZTVlN2ViO1xuICAtLXRleHQtc2Vjb25kYXJ5OiAjOWNhM2FmO1xuICAtLXRleHQtdGVydGlhcnk6ICM2YjcyODA7XG4gIC0tYWNjZW50OiAjODE4Y2Y4O1xuICAtLWFjY2VudC1saWdodDogIzFlMWI0YjtcbiAgLS1hY2NlbnQtaG92ZXI6ICM2MzY2ZjE7XG4gIC0tZGFuZ2VyOiAjZjg3MTcxO1xuICAtLWRhbmdlci1saWdodDogIzQ1MGEwYTtcbiAgLS1zdWNjZXNzOiAjMzRkMzk5O1xuICAtLXN1Y2Nlc3MtbGlnaHQ6ICMwNTJlMTY7XG4gIC0td2FybmluZzogI2ZiYmYyNDtcbiAgLS13YXJuaW5nLWxpZ2h0OiAjNDUxYTAzO1xufVxuXG4qIHsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwOyBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5odG1sLCBib2R5IHsgaGVpZ2h0OiAxMDAlOyBvdmVyZmxvdzogaGlkZGVuOyB9XG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmcpO1xufVxuXG4vKiBcdTI1MDBcdTI1MDAgU2hlbGwgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwICovXG5cbi5zdHVkaW8tc2hlbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uc3R1ZGlvLWxvYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleDogMTtcbiAgZ2FwOiAxMnB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xufVxuXG4ubG9hZGluZy1zcGlubmVyIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbmltYXRpb246IHNwaW4gNjAwbXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4geyB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxuXG4vKiBcdTI1MDBcdTI1MDAgSGVhZGVyIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMCAqL1xuXG4uc3R1ZGlvLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuLnN0dWRpby1oZWFkZXIgaDEge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uc2x1ZyB7IGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7IGZvbnQtd2VpZ2h0OiA0MDA7IH1cbi5oZWFkZXItc3BhY2VyIHsgZmxleDogMTsgfVxuXG4uaGVhZGVyLXNlYXJjaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBwYWRkaW5nOiA0cHggMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5KTtcbiAgbWF4LXdpZHRoOiAyMjBweDtcbn1cbi5oZWFkZXItc2VhcmNoIGlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBmb250LXNpemU6IDEycHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBcdTI1MDBcdTI1MDAgTWFpbiBsYXlvdXQgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwICovXG5cbi5zdHVkaW8tbWFpbiB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50YWItcGxhY2Vob2xkZXIge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLXRleHQtdGVydGlhcnkpO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi8qIFx1MjUwMFx1MjUwMCBCdXR0b25zIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMCAqL1xuXG4uaWNvbi1idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24pO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uaWNvbi1idG46aG92ZXIgeyBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7IGNvbG9yOiB2YXIoLS10ZXh0KTsgfVxuXG4uYnRuLXByaW1hcnkge1xuICBwYWRkaW5nOiA2cHggMTRweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIHZhcigtLXRyYW5zaXRpb24pO1xufVxuLmJ0bi1wcmltYXJ5OmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWhvdmVyKTsgfVxuXG4uYnRuLXNlY29uZGFyeSB7XG4gIHBhZGRpbmc6IDZweCAxNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uKTtcbn1cbi5idG4tc2Vjb25kYXJ5OmhvdmVyIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS10ZXh0LXRlcnRpYXJ5KTsgY29sb3I6IHZhcigtLXRleHQpOyB9XG5cbi8qIFx1MjUwMFx1MjUwMCBTZWN0aW9ucyBwYW5lbCAobGVmdCkgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwICovXG5cbi5wYW5lbC1zZWN0aW9ucyB7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLnBhbmVsLXNlY3Rpb25zLWhlYWRlciB7XG4gIHBhZGRpbmc6IDEycHggMTRweCA4cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7XG59XG5cbi5zZWN0aW9uLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgcGFkZGluZzogOHB4IDE0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24pO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4uc2VjdGlvbi1pdGVtOmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpOyB9XG4uc2VjdGlvbi1pdGVtLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1saWdodCk7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbn1cblxuLnNlY3Rpb24tbGFiZWwgeyBmbGV4OiAxOyBvdmVyZmxvdzogaGlkZGVuOyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuLnNlY3Rpb24tY291bnQge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXRlcnRpYXJ5KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICBwYWRkaW5nOiAxcHggNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uZHJhZy1oYW5kbGUge1xuICBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7XG4gIGN1cnNvcjogZ3JhYjtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZHJhZy1oYW5kbGU6YWN0aXZlIHsgY3Vyc29yOiBncmFiYmluZzsgfVxuXG4uYWRkLXNlY3Rpb24tYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLXRleHQtdGVydGlhcnkpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdHJhbnNpdGlvbjogY29sb3IgdmFyKC0tdHJhbnNpdGlvbik7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xufVxuLmFkZC1zZWN0aW9uLWJ0bjpob3ZlciB7IGNvbG9yOiB2YXIoLS1hY2NlbnQpOyB9XG5cbi8qIFx1MjUwMFx1MjUwMCBTZWN0aW9uIG1vZGFsIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMCAqL1xuXG4uc2VjdGlvbi1tb2RhbC1maWVsZHMgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDEycHg7IHBhZGRpbmc6IDAgMCAxNnB4OyB9XG4uc2VjdGlvbi1tb2RhbC1hY3Rpb25zIHsgZGlzcGxheTogZmxleDsgZ2FwOiA4cHg7IGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IH1cblxuLyogXHUyNTAwXHUyNTAwIEZpZWxkcyBwYW5lbCAoY2VudGVyKSBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgKi9cblxuLnBhbmVsLWZpZWxkcyB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMjgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG59XG5cbi5wYW5lbC1maWVsZHMtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxMnB4IDE2cHggOHB4O1xufVxuLnBhbmVsLWZpZWxkcy1oZWFkZXIgaDIge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5maWVsZC1saXN0IHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogMCA4cHg7XG59XG5cbi5maWVsZC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDhweCAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24pO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5maWVsZC1pdGVtOmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpOyB9XG4uZmllbGQtaXRlbS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtbGlnaHQpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudCk7XG59XG5cbi5maWVsZC1pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBmbGV4LXNocmluazogMDtcbn1cbi5maWVsZC1pY29uLmFjdGl2ZSB7IGJhY2tncm91bmQ6IHZhcigtLWFjY2VudCk7IGNvbG9yOiB3aGl0ZTsgfVxuXG4uZmllbGQtaW5mbyB7IGZsZXg6IDE7IG1pbi13aWR0aDogMDsgfVxuLmZpZWxkLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5maWVsZC1tZXRhIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uZmllbGQtcmVxdWlyZWQge1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXIpO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmZpZWxkLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDJweDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSB2YXIoLS10cmFuc2l0aW9uKTtcbn1cbi5maWVsZC1pdGVtOmhvdmVyIC5maWVsZC1hY3Rpb25zIHsgb3BhY2l0eTogMTsgfVxuXG4uYWRkLWZpZWxkLWFyZWEge1xuICBwYWRkaW5nOiA4cHggMTZweDtcbn1cbi5hZGQtZmllbGQtYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCB2YXIoLS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLXRleHQtdGVydGlhcnkpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uKTtcbn1cbi5hZGQtZmllbGQtYnRuOmhvdmVyIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQpOyBjb2xvcjogdmFyKC0tYWNjZW50KTsgfVxuXG4vKiBcdTI1MDBcdTI1MDAgUXVpY2sgdGVtcGxhdGVzIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMCAqL1xuXG4ucXVpY2stdGVtcGxhdGVzIHtcbiAgcGFkZGluZzogOHB4IDE2cHggMTJweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saWdodCk7XG59XG4ucXVpY2stdGVtcGxhdGVzLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXRlcnRpYXJ5KTtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLnF1aWNrLXRlbXBsYXRlcy1ncmlkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDRweDtcbn1cbi5xdWljay10ZW1wbGF0ZS1jaGlwIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICBwYWRkaW5nOiAzcHggOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5xdWljay10ZW1wbGF0ZS1jaGlwOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWxpZ2h0KTtcbn1cblxuLyogXHUyNTAwXHUyNTAwIEluc3BlY3RvciBwYW5lbCAocmlnaHQpIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMCAqL1xuXG4ucGFuZWwtaW5zcGVjdG9yIHtcbiAgd2lkdGg6IDI4MHB4O1xuICBtaW4td2lkdGg6IDI4MHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uaW5zcGVjdG9yLWVtcHR5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXg6IDE7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXRlcnRpYXJ5KTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uaW5zcGVjdG9yLXNlY3Rpb24sXG4uaW5zcGVjdG9yLWZpZWxkcyB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTJweDtcbn1cblxuLmluc3BlY3Rvci1zZWN0aW9uIGgzIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXRlcnRpYXJ5KTtcbn1cblxuLmluc3BlY3Rvci1oZWFkZXIge1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xufVxuXG4uaW5zcGVjdG9yLXR5cGUtYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDJweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1saWdodCk7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5pbnNwZWN0b3ItcGxhY2Vob2xkZXIge1xuICBwYWRkaW5nOiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXRlcnRpYXJ5KTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4vKiBcdTI1MDBcdTI1MDAgRm9ybXMgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwICovXG5cbi5mb3JtLWdyb3VwIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiA0cHg7IH1cbi5mb3JtLWdyb3VwLXJvdyB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgZ2FwOiA4cHg7IH1cbi5mb3JtLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xufVxuLmZvcm0taW5wdXQge1xuICBwYWRkaW5nOiA2cHggMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmcpO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xuICBvdXRsaW5lOiBub25lO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgdmFyKC0tdHJhbnNpdGlvbik7XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG4uZm9ybS1pbnB1dDpmb2N1cyB7IGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50KTsgfVxuLmZvcm0taW5wdXQuZm9udC1tb25vIHsgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9ubyk7IH1cblxuLmNvbG9yLWlucHV0LXJvdyB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogOHB4OyB9XG4uY29sb3ItaW5wdXQtcm93IGlucHV0W3R5cGU9XCJjb2xvclwiXSB7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG4gIHBhZGRpbmc6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbG9yLXByZXNldHMgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDRweDsgZmxleC13cmFwOiB3cmFwOyB9XG4uY29sb3ItcHJlc2V0LXN3YXRjaCB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmcpO1xuICBib3gtc2hhZG93OiAwIDAgMCAxcHggdmFyKC0tYm9yZGVyKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBcdTI1MDBcdTI1MDAgRm9vdGVyIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMCAqL1xuXG4uc3R1ZGlvLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIGhlaWdodDogNDJweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnKTtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi50YWItYmFyIHsgZGlzcGxheTogZmxleDsgZ2FwOiAycHg7IH1cbi50YWItYnRuIHtcbiAgcGFkZGluZzogNHB4IDEycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbik7XG59XG4udGFiLWJ0bjpob3ZlciB7IGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyKTsgfVxuLnRhYi1idG4uYWN0aXZlIHsgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWxpZ2h0KTsgY29sb3I6IHZhcigtLWFjY2VudCk7IGZvbnQtd2VpZ2h0OiA1MDA7IH1cblxuLmZvb3Rlci1zcGFjZXIgeyBmbGV4OiAxOyB9XG5cbi51bnNhdmVkLWRvdCB7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdhcm5pbmcpO1xuICBkaXNwbGF5OiBub25lO1xufVxuLnVuc2F2ZWQtZG90LnZpc2libGUgeyBkaXNwbGF5OiBibG9jazsgfVxuXG4udW5zYXZlZC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6IHZhcigtLXdhcm5pbmcpO1xuICBkaXNwbGF5OiBub25lO1xufVxuLnVuc2F2ZWQtbGFiZWwudmlzaWJsZSB7IGRpc3BsYXk6IGJsb2NrOyB9XG5cbi5zYXZlLWJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgcGFkZGluZzogNXB4IDE0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50KTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCB2YXIoLS10cmFuc2l0aW9uKTtcbn1cbi5zYXZlLWJ0bjpob3ZlciB7IGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1ob3Zlcik7IH1cbi5zYXZlLWJ0bjpkaXNhYmxlZCB7IG9wYWNpdHk6IDAuNjsgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxuXG4vKiBcdTI1MDBcdTI1MDAgTW9kYWwgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwICovXG5cbi5tb2RhbC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwO1xufVxuXG4ubW9kYWwge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1sZyk7XG4gIHdpZHRoOiAzODBweDtcbiAgbWF4LWhlaWdodDogODB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm1vZGFsLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTRweCAxNnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbn1cbi5tb2RhbC1oZWFkZXIgaDMgeyBmb250LXNpemU6IDE0cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IH1cblxuLm1vZGFsLWJvZHkgeyBwYWRkaW5nOiAxNnB4OyBvdmVyZmxvdy15OiBhdXRvOyB9XG5cbi8qIFx1MjUwMFx1MjUwMCBUeXBlIFBpY2tlciBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgKi9cblxuLnR5cGUtcGlja2VyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmcpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbGcpO1xuICB3aWR0aDogNDIwcHg7XG4gIG1heC1oZWlnaHQ6IDQ4MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udHlwZS1waWNrZXItaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xufVxuLnR5cGUtcGlja2VyLWhlYWRlciBoMyB7IGZvbnQtc2l6ZTogMTRweDsgZm9udC13ZWlnaHQ6IDYwMDsgfVxuXG4udHlwZS1waWNrZXItc2VhcmNoIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbiAgY29sb3I6IHZhcigtLXRleHQtdGVydGlhcnkpO1xufVxuLnR5cGUtcGlja2VyLXNlYXJjaCBpbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBvdXRsaW5lOiBub25lO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnR5cGUtcGlja2VyLWJvZHkge1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG59XG5cbi50eXBlLXBpY2tlci1jYXRlZ29yeSB7IG1hcmdpbi1ib3R0b206IDE2cHg7IH1cbi50eXBlLXBpY2tlci1jYXRlZ29yeTpsYXN0LWNoaWxkIHsgbWFyZ2luLWJvdHRvbTogMDsgfVxuLnR5cGUtcGlja2VyLWNhdGVnb3J5LWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXRlcnRpYXJ5KTtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4udHlwZS1waWNrZXItZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGdhcDogNnB4O1xufVxuXG4udHlwZS1waWNrZXItaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBwYWRkaW5nOiAxMnB4IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24pO1xufVxuLnR5cGUtcGlja2VyLWl0ZW06aG92ZXIge1xuICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudCk7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtbGlnaHQpO1xufVxuXG4udHlwZS1waWNrZXItaWNvbiB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG4udHlwZS1waWNrZXItbGFiZWwgeyBmb250LXNpemU6IDExcHg7IGZvbnQtd2VpZ2h0OiA1MDA7IH1cblxuLnR5cGUtcGlja2VyLWVtcHR5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyNHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLyogXHUyNTAwXHUyNTAwIFRvYXN0IFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMCAqL1xuXG4udG9hc3Qge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNjBweDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgyMHB4KTtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWxnKTtcbiAgei1pbmRleDogMjAwO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4udG9hc3QudmlzaWJsZSB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKDApOyB9XG4udG9hc3Quc3VjY2VzcyB7IGJhY2tncm91bmQ6IHZhcigtLXN1Y2Nlc3MpOyBjb2xvcjogd2hpdGU7IH1cbi50b2FzdC5lcnJvciB7IGJhY2tncm91bmQ6IHZhcigtLWRhbmdlcik7IGNvbG9yOiB3aGl0ZTsgfVxuXG4vKiBcdTI1MDBcdTI1MDAgU2Nyb2xsYmFyIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMCAqL1xuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHsgd2lkdGg6IDZweDsgfVxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7IGJhY2tncm91bmQ6IHZhcigtLXRleHQtdGVydGlhcnkpOyB9XG5cbi8qIFx1MjUwMFx1MjUwMCBDaGVja2JveCBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgKi9cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgYWNjZW50LWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIFx1MjUwMFx1MjUwMCBJbnNwZWN0b3IgZXh0cmFzIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMCAqL1xuXG4uaW5zcGVjdG9yLWRpdmlkZXIge1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbiAgbWFyZ2luOiA0cHggMDtcbn1cblxuLmluc3BlY3Rvci1jb25zdHJhaW50LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7XG59XG5cbi5idG4tZGFuZ2VyIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBwYWRkaW5nOiA2cHggMTRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFuZ2VyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyLWxpZ2h0KTtcbiAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbik7XG59XG4uYnRuLWRhbmdlcjpob3ZlciB7IGJhY2tncm91bmQ6IHZhcigtLWRhbmdlcik7IGNvbG9yOiB3aGl0ZTsgfVxuXG4vKiBcdTI1MDBcdTI1MDAgVGFnIElucHV0IFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMCAqL1xuXG4udGFnLWlucHV0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiA0cHg7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnKTtcbiAgbWluLWhlaWdodDogMzJweDtcbiAgY3Vyc29yOiB0ZXh0O1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgdmFyKC0tdHJhbnNpdGlvbik7XG59XG4udGFnLWlucHV0LWNvbnRhaW5lcjpmb2N1cy13aXRoaW4geyBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudCk7IH1cblxuLnRhZy1jaGlwIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMnB4O1xuICBwYWRkaW5nOiAxcHggNnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtbGlnaHQpO1xuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4udGFnLWNoaXAgYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwIDJweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuLnRhZy1pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBvdXRsaW5lOiBub25lO1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDYwcHg7XG59XG5cbi8qIFx1MjUwMFx1MjUwMCBUb2dnbGUgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwICovXG5cbi5mb3JtLXRvZ2dsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmZvcm0tdG9nZ2xlLXRyYWNrIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMThweDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ib3JkZXIpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgdmFyKC0tdHJhbnNpdGlvbik7XG59XG4uZm9ybS10b2dnbGUtdHJhY2sub24geyBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQpOyB9XG5cbi5mb3JtLXRvZ2dsZS10aHVtYiB7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAycHg7XG4gIGxlZnQ6IDJweDtcbiAgdHJhbnNpdGlvbjogbGVmdCB2YXIoLS10cmFuc2l0aW9uKTtcbn1cbi5mb3JtLXRvZ2dsZS10cmFjay5vbiAuZm9ybS10b2dnbGUtdGh1bWIgeyBsZWZ0OiAxNnB4OyB9XG5cbi8qIFx1MjUwMFx1MjUwMCBRdWl6IEJ1aWxkZXIgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwICovXG5cbi5xdWl6LWJ1aWxkZXItc2VjdGlvbiB7IHBhZGRpbmc6IDA7IH1cblxuLnF1aXotYnVpbGRlci1ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMnB4O1xuICBtYXgtaGVpZ2h0OiA0MjBweDtcbn1cblxuLnF1aXotY2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XG59XG5cbi5xdWl6LWNhcmQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5xdWl6LWNhcmQtbnVtIHtcbiAgd2lkdGg6IDIycHg7XG4gIGhlaWdodDogMjJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4ucXVpei1xdWVzdGlvbi1pbnB1dCB7IGZsZXg6IDE7IH1cblxuLnF1aXotb3B0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNnB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5xdWl6LW9wdGlvbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbn1cblxuLnF1aXotY29ycmVjdC1idG4ge1xuICB3aWR0aDogMjJweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbik7XG59XG4ucXVpei1jb3JyZWN0LWJ0bi5hY3RpdmUge1xuICBib3JkZXItY29sb3I6IHZhcigtLXN1Y2Nlc3MpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdWNjZXNzKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucXVpei1hZGQtb3B0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXRlcnRpYXJ5KTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDRweCAwO1xufVxuLnF1aXotYWRkLW9wdGlvbjpob3ZlciB7IGNvbG9yOiB2YXIoLS1hY2NlbnQpOyB9XG5cbi8qIFx1MjUwMFx1MjUwMCBEZW1vIFRhYiBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgKi9cblxuLmRlbW8tdGFiIHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogMjBweCAyNHB4O1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kZW1vLXRhYi1lbXB0eSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7XG59XG5cbi5kZW1vLXRhYi1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbi5kZW1vLXRhYi1oZWFkZXIgaDIgeyBmb250LXNpemU6IDE2cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IH1cbi5kZW1vLXRhYi1oZWFkZXIgLmJ0bi1zZWNvbmRhcnkge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG59XG5cbi5kZW1vLXRhYi1kZXNjIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5kZW1vLWZpZWxkcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTZweDtcbn1cblxuLmRlbW8tZmllbGQge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xuICBwYWRkaW5nOiAxMnB4IDE0cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XG59XG5cbi5kZW1vLWZpZWxkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLmRlbW8tZmllbGQtbGFiZWwge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5kZW1vLWZpZWxkLW1ldGEge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXRlcnRpYXJ5KTtcbn1cblxuLmRlbW8tZmllbGQtaW5wdXQgeyB3aWR0aDogMTAwJTsgfVxuLmRlbW8tZmllbGQtaW5wdXQgLmZvcm0taW5wdXQgeyB3aWR0aDogMTAwJTsgfVxuLmRlbW8tZmllbGQtaW5wdXQgc2VsZWN0IHsgd2lkdGg6IDEwMCU7IH1cblxuLmRlbW8tdG9nZ2xlLWxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBcdTI1MDBcdTI1MDAgTWFuaWZlc3QgVGFiIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMCAqL1xuXG4ubWFuaWZlc3QtdGFiIHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogMjBweCAyNHB4O1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYW5pZmVzdC10YWItaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuLm1hbmlmZXN0LXRhYi1oZWFkZXIgaDIgeyBmb250LXNpemU6IDE2cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IH1cblxuLm1hbmlmZXN0LXRhYi1kZXNjIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5tYW5pZmVzdC1zZWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjRweDtcbn1cblxuLm1hbmlmZXN0LXNlY3Rpb24gaDMge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuLm1hbmlmZXN0LXNlY3Rpb24tZGVzYyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLXRleHQtdGVydGlhcnkpO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZGVwLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogNnB4O1xufVxuXG4uZGVwLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDhweCAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uKTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmRlcC1jYXJkOmhvdmVyIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQpOyB9XG4uZGVwLWNhcmQuYWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtbGlnaHQpO1xufVxuLmRlcC1jYXJkIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7IG1hcmdpbi10b3A6IDFweDsgZmxleC1zaHJpbms6IDA7IH1cblxuLmRlcC1uYW1lIHsgZm9udC13ZWlnaHQ6IDUwMDsgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9ubyk7IGZvbnQtc2l6ZTogMTFweDsgfVxuLmRlcC1kZXNjIHsgY29sb3I6IHZhcigtLXRleHQtdGVydGlhcnkpOyBmb250LXNpemU6IDExcHg7IH1cblxuLyogXHUyNTAwXHUyNTAwIFNlbGVjdCBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgKi9cblxuLyogXHUyNTAwXHUyNTAwIFByZXZpZXcgUGFuZSBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgKi9cblxuLnByZXZpZXctcGFuZSB7XG4gIHdpZHRoOiAzMjBweDtcbiAgbWluLXdpZHRoOiAzMjBweDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gIHRyYW5zaXRpb246IHdpZHRoIDIwMG1zIGVhc2U7XG59XG4ucHJldmlldy1wYW5lLmV4cGFuZGVkIHtcbiAgd2lkdGg6IDQ0MHB4O1xuICBtaW4td2lkdGg6IDQ0MHB4O1xufVxuXG4ucHJldmlldy1wYW5lLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICBwYWRkaW5nOiA2cHggMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XG59XG5cbi5wcmV2aWV3LXBhbmUtbGFiZWwge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgY29sb3I6IHZhcigtLXRleHQtdGVydGlhcnkpO1xuICBmbGV4OiAxO1xufVxuXG4ucHJldmlldy1wYW5lLWZyYW1lIHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEycHg7XG59XG5cbi5wcmV2aWV3LWZyYW1lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLyogXHUyNTAwXHUyNTAwIFNlYXJjaCBjbGVhciBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgKi9cblxuLnNlYXJjaC1jbGVhciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IHZhcigtLXRleHQtdGVydGlhcnkpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHBhZGRpbmc6IDAgMnB4O1xufVxuLnNlYXJjaC1jbGVhcjpob3ZlciB7IGNvbG9yOiB2YXIoLS10ZXh0KTsgfVxuXG4uaWNvbi1idG4uYWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLWFjY2VudCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1saWdodCk7XG59XG5cbi8qIFx1MjUwMFx1MjUwMCBDb25kaXRpb25hbHMgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwICovXG5cbi5jb25kaXRpb25hbHMtY29sbGFwc2VkIHtcbiAgcGFkZGluZzogOHB4IDE2cHggMTJweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saWdodCk7XG59XG5cbi5jb25kaXRpb25hbHMtdG9nZ2xlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXRlcnRpYXJ5KTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDRweCAwO1xufVxuLmNvbmRpdGlvbmFscy10b2dnbGU6aG92ZXIgeyBjb2xvcjogdmFyKC0tYWNjZW50KTsgfVxuXG4uY29uZGl0aW9uYWxzLXNlY3Rpb24ge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbn1cblxuLmNvbmRpdGlvbmFscy1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5jb25kaXRpb25hbHMtaGVhZGVyOmhvdmVyIHsgY29sb3I6IHZhcigtLXRleHQpOyB9XG5cbi5jb25kaXRpb25hbHMtY291bnQge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgcGFkZGluZzogMCA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXRlcnRpYXJ5KTtcbn1cblxuLmNvbmRpdGlvbmFscy1jaGV2cm9uIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6IHZhcigtLXRleHQtdGVydGlhcnkpO1xufVxuXG4uY29uZGl0aW9uYWxzLWJvZHkge1xuICBwYWRkaW5nOiAwIDE2cHggMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5jb25kaXRpb25hbC1jYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbmRpdGlvbmFsLWNhcmQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbn1cblxuLmNvbmRpdGlvbmFsLWNhcmQtbnVtIHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uY29uZGl0aW9uYWwtY2FyZC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgZmxleDogMTtcbn1cblxuLmNvbmRpdGlvbmFsLWNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogOHB4O1xufVxuXG4uY29uZGl0aW9uYWwtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG59XG4uY29uZGl0aW9uYWwtcm93IC5mb3JtLWlucHV0IHsgZmxleDogMTsgbWluLXdpZHRoOiAwOyB9XG5cbi5jb25kaXRpb25hbC1lcXVhbHMge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uY29uZGl0aW9uYWwtdGhlbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNHB4O1xufVxuXG4vKiBcdTI1MDBcdTI1MDAgU2VsZWN0IFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMCAqL1xuXG5zZWxlY3QuZm9ybS1pbnB1dCB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTInIGhlaWdodD0nMTInIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjM2YjcyODAnIHN0cm9rZS13aWR0aD0nMiclM0UlM0NwYXRoIGQ9J202IDkgNiA2IDYtNicvJTNFJTNDL3N2ZyUzRVwiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgOHB4IGNlbnRlcjtcbiAgcGFkZGluZy1yaWdodDogMjRweDtcbn1cbmA7XG4gICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzKTtcbiAgICAgICAgfSkoKTtcbiAgICAgICIsICJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB0eXBlIERpc3BhdGNoIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7XG4gIFRlbXBsYXRlU2NoZW1hLCBTY2hlbWFTZWN0aW9uLCBTY2hlbWFGaWVsZCwgU2NoZW1hQ29uZGl0aW9uYWwsIE1hbmlmZXN0RGF0YSxcbiAgVGFiLCBUaGVtZSxcbn0gZnJvbSAnLi90eXBlcydcbmltcG9ydCB0eXBlIHsgTG9hZFJlc3BvbnNlIH0gZnJvbSAnLi9hcGknXG5pbXBvcnQgeyBkZWVwQ2xvbmUgfSBmcm9tICcuL3V0aWxzJ1xuXG4vLyBcdTI1MDBcdTI1MDAgRGVmYXVsdHMgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1NDSEVNQTogVGVtcGxhdGVTY2hlbWEgPSB7XG4gIHZlcnNpb246ICcyJyxcbiAgc2VjdGlvbnM6IFt7IGtleTogJ2Jhc2ljcycsIGxhYmVsOiAnVGhlIEJhc2ljcycsIGZpZWxkczogW10gfV0sXG59XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX01BTklGRVNUOiBNYW5pZmVzdERhdGEgPSB7XG4gIGVudHJ5OiAnaW5kZXgudHN4JyxcbiAgc2NyZWVuczogW10sXG4gIGRlcGVuZGVuY2llczoge30sXG4gIGZvbnRzOiBbXSxcbn1cblxuLy8gXHUyNTAwXHUyNTAwIFN0YXRlIHNoYXBlIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXG5leHBvcnQgdHlwZSBDb25maWdEYXRhID0ge1xuICBzY2hlbWE6IFRlbXBsYXRlU2NoZW1hXG4gIGRlbW86IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gIG1hbmlmZXN0OiBNYW5pZmVzdERhdGFcbn1cblxuZXhwb3J0IHR5cGUgU3R1ZGlvU3RhdGUgPSB7XG4gIGxvYWRlZDogQ29uZmlnRGF0YVxuICB3b3JraW5nOiBDb25maWdEYXRhXG4gIHVpOiB7XG4gICAgc2VsZWN0ZWRTZWN0aW9uOiBudW1iZXJcbiAgICBzZWxlY3RlZEZpZWxkOiBudW1iZXJcbiAgICBhY3RpdmVUYWI6IFRhYlxuICAgIHRoZW1lOiBUaGVtZVxuICAgIHNlYXJjaFF1ZXJ5OiBzdHJpbmdcbiAgICBzaG93UHJldmlldzogYm9vbGVhblxuICB9XG4gIHRvYXN0OiB7IG1lc3NhZ2U6IHN0cmluZzsgdHlwZTogJ3N1Y2Nlc3MnIHwgJ2Vycm9yJyB9IHwgbnVsbFxufVxuXG4vLyBcdTI1MDBcdTI1MDAgQWN0aW9ucyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuZXhwb3J0IHR5cGUgRmllbGRMb2NhdGlvbiA9IHsgc2VjdGlvbklkeDogbnVtYmVyOyBmaWVsZElkeDogbnVtYmVyIH1cblxuZXhwb3J0IHR5cGUgU3R1ZGlvQWN0aW9uID1cbiAgfCB7IHR5cGU6ICdMT0FERUQnOyBkYXRhOiBMb2FkUmVzcG9uc2UgfVxuICB8IHsgdHlwZTogJ1NBVkVEJyB9XG4gIHwgeyB0eXBlOiAnU0VUX1NDSEVNQSc7IHNjaGVtYTogVGVtcGxhdGVTY2hlbWEgfVxuICB8IHsgdHlwZTogJ0FERF9TRUNUSU9OJzsgc2VjdGlvbjogU2NoZW1hU2VjdGlvbiB9XG4gIHwgeyB0eXBlOiAnVVBEQVRFX1NFQ1RJT04nOyBpZHg6IG51bWJlcjsgc2VjdGlvbjogU2NoZW1hU2VjdGlvbiB9XG4gIHwgeyB0eXBlOiAnREVMRVRFX1NFQ1RJT04nOyBpZHg6IG51bWJlciB9XG4gIHwgeyB0eXBlOiAnTU9WRV9TRUNUSU9OJzsgZnJvbTogbnVtYmVyOyB0bzogbnVtYmVyIH1cbiAgfCB7IHR5cGU6ICdBRERfRklFTEQnOyBzZWN0aW9uSWR4OiBudW1iZXI7IGZpZWxkOiBTY2hlbWFGaWVsZCB9XG4gIHwgeyB0eXBlOiAnVVBEQVRFX0ZJRUxEJzsgc2VjdGlvbklkeDogbnVtYmVyOyBmaWVsZElkeDogbnVtYmVyOyBmaWVsZDogU2NoZW1hRmllbGQgfVxuICB8IHsgdHlwZTogJ0RFTEVURV9GSUVMRCc7IHNlY3Rpb25JZHg6IG51bWJlcjsgZmllbGRJZHg6IG51bWJlciB9XG4gIHwgeyB0eXBlOiAnRFVQTElDQVRFX0ZJRUxEJzsgc2VjdGlvbklkeDogbnVtYmVyOyBmaWVsZElkeDogbnVtYmVyIH1cbiAgfCB7IHR5cGU6ICdNT1ZFX0ZJRUxEJzsgZnJvbTogbnVtYmVyOyB0bzogbnVtYmVyIH1cbiAgfCB7IHR5cGU6ICdTRVRfREVNTyc7IGtleTogc3RyaW5nOyB2YWx1ZTogdW5rbm93biB9XG4gIHwgeyB0eXBlOiAnU0VUX0RFTU9fQUxMJzsgZGVtbzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfVxuICB8IHsgdHlwZTogJ1NFVF9NQU5JRkVTVCc7IG1hbmlmZXN0OiBNYW5pZmVzdERhdGEgfVxuICB8IHsgdHlwZTogJ1NFTEVDVF9TRUNUSU9OJzsgaWR4OiBudW1iZXIgfVxuICB8IHsgdHlwZTogJ1NFTEVDVF9GSUVMRCc7IGlkeDogbnVtYmVyIH1cbiAgfCB7IHR5cGU6ICdTRVRfVEFCJzsgdGFiOiBUYWIgfVxuICB8IHsgdHlwZTogJ1NFVF9USEVNRSc7IHRoZW1lOiBUaGVtZSB9XG4gIHwgeyB0eXBlOiAnU0hPV19UT0FTVCc7IG1lc3NhZ2U6IHN0cmluZzsgdG9hc3RUeXBlOiAnc3VjY2VzcycgfCAnZXJyb3InIH1cbiAgfCB7IHR5cGU6ICdISURFX1RPQVNUJyB9XG4gIHwgeyB0eXBlOiAnSU1QT1JUX0NPTkZJRyc7IGRhdGE6IFBhcnRpYWw8Q29uZmlnRGF0YT4gfVxuICB8IHsgdHlwZTogJ1NFVF9TRUFSQ0gnOyBxdWVyeTogc3RyaW5nIH1cbiAgfCB7IHR5cGU6ICdUT0dHTEVfUFJFVklFVycgfVxuICB8IHsgdHlwZTogJ0FERF9DT05ESVRJT05BTCc7IGNvbmRpdGlvbmFsOiBTY2hlbWFDb25kaXRpb25hbCB9XG4gIHwgeyB0eXBlOiAnVVBEQVRFX0NPTkRJVElPTkFMJzsgaWR4OiBudW1iZXI7IGNvbmRpdGlvbmFsOiBTY2hlbWFDb25kaXRpb25hbCB9XG4gIHwgeyB0eXBlOiAnREVMRVRFX0NPTkRJVElPTkFMJzsgaWR4OiBudW1iZXIgfVxuXG4vLyBcdTI1MDBcdTI1MDAgUmVkdWNlciBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuZXhwb3J0IGZ1bmN0aW9uIHN0dWRpb1JlZHVjZXIoc3RhdGU6IFN0dWRpb1N0YXRlLCBhY3Rpb246IFN0dWRpb0FjdGlvbik6IFN0dWRpb1N0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0xPQURFRCc6IHtcbiAgICAgIGNvbnN0IHNjaGVtYSA9IGFjdGlvbi5kYXRhLnNjaGVtYSA/PyBERUZBVUxUX1NDSEVNQVxuICAgICAgY29uc3QgZGVtbyA9IGFjdGlvbi5kYXRhLmRlbW8gPz8ge31cbiAgICAgIGNvbnN0IG1hbmlmZXN0ID0gYWN0aW9uLmRhdGEubWFuaWZlc3QgPz8gREVGQVVMVF9NQU5JRkVTVFxuICAgICAgY29uc3QgY29uZmlnID0geyBzY2hlbWEsIGRlbW8sIG1hbmlmZXN0IH1cbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkZWQ6IGRlZXBDbG9uZShjb25maWcpLCB3b3JraW5nOiBkZWVwQ2xvbmUoY29uZmlnKSB9XG4gICAgfVxuXG4gICAgY2FzZSAnU0FWRUQnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRlZDogZGVlcENsb25lKHN0YXRlLndvcmtpbmcpIH1cblxuICAgIGNhc2UgJ1NFVF9TQ0hFTUEnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHdvcmtpbmc6IHsgLi4uc3RhdGUud29ya2luZywgc2NoZW1hOiBhY3Rpb24uc2NoZW1hIH0gfVxuXG4gICAgY2FzZSAnQUREX1NFQ1RJT04nOiB7XG4gICAgICBjb25zdCBzZWN0aW9ucyA9IFsuLi5zdGF0ZS53b3JraW5nLnNjaGVtYS5zZWN0aW9ucywgYWN0aW9uLnNlY3Rpb25dXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgd29ya2luZzogeyAuLi5zdGF0ZS53b3JraW5nLCBzY2hlbWE6IHsgLi4uc3RhdGUud29ya2luZy5zY2hlbWEsIHNlY3Rpb25zIH0gfSxcbiAgICAgICAgdWk6IHsgLi4uc3RhdGUudWksIHNlbGVjdGVkU2VjdGlvbjogc2VjdGlvbnMubGVuZ3RoIC0gMSwgc2VsZWN0ZWRGaWVsZDogLTEgfSxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdVUERBVEVfU0VDVElPTic6IHtcbiAgICAgIGNvbnN0IHNlY3Rpb25zID0gc3RhdGUud29ya2luZy5zY2hlbWEuc2VjdGlvbnMubWFwKChzLCBpKSA9PlxuICAgICAgICBpID09PSBhY3Rpb24uaWR4ID8gYWN0aW9uLnNlY3Rpb24gOiBzLFxuICAgICAgKVxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHdvcmtpbmc6IHsgLi4uc3RhdGUud29ya2luZywgc2NoZW1hOiB7IC4uLnN0YXRlLndvcmtpbmcuc2NoZW1hLCBzZWN0aW9ucyB9IH0gfVxuICAgIH1cblxuICAgIGNhc2UgJ0RFTEVURV9TRUNUSU9OJzoge1xuICAgICAgY29uc3Qgc2VjdGlvbnMgPSBzdGF0ZS53b3JraW5nLnNjaGVtYS5zZWN0aW9ucy5maWx0ZXIoKF8sIGkpID0+IGkgIT09IGFjdGlvbi5pZHgpXG4gICAgICBjb25zdCBzZWwgPSBNYXRoLm1pbihzdGF0ZS51aS5zZWxlY3RlZFNlY3Rpb24sIE1hdGgubWF4KDAsIHNlY3Rpb25zLmxlbmd0aCAtIDEpKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHdvcmtpbmc6IHsgLi4uc3RhdGUud29ya2luZywgc2NoZW1hOiB7IC4uLnN0YXRlLndvcmtpbmcuc2NoZW1hLCBzZWN0aW9ucyB9IH0sXG4gICAgICAgIHVpOiB7IC4uLnN0YXRlLnVpLCBzZWxlY3RlZFNlY3Rpb246IHNlbCwgc2VsZWN0ZWRGaWVsZDogLTEgfSxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdNT1ZFX1NFQ1RJT04nOiB7XG4gICAgICBjb25zdCBzZWN0aW9ucyA9IFsuLi5zdGF0ZS53b3JraW5nLnNjaGVtYS5zZWN0aW9uc11cbiAgICAgIGNvbnN0IFttb3ZlZF0gPSBzZWN0aW9ucy5zcGxpY2UoYWN0aW9uLmZyb20sIDEpXG4gICAgICBzZWN0aW9ucy5zcGxpY2UoYWN0aW9uLnRvLCAwLCBtb3ZlZClcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB3b3JraW5nOiB7IC4uLnN0YXRlLndvcmtpbmcsIHNjaGVtYTogeyAuLi5zdGF0ZS53b3JraW5nLnNjaGVtYSwgc2VjdGlvbnMgfSB9LFxuICAgICAgICB1aTogeyAuLi5zdGF0ZS51aSwgc2VsZWN0ZWRTZWN0aW9uOiBhY3Rpb24udG8gfSxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlICdBRERfRklFTEQnOiB7XG4gICAgICBjb25zdCBzZWN0aW9ucyA9IHN0YXRlLndvcmtpbmcuc2NoZW1hLnNlY3Rpb25zLm1hcCgocywgaSkgPT4ge1xuICAgICAgICBpZiAoaSAhPT0gYWN0aW9uLnNlY3Rpb25JZHgpIHJldHVybiBzXG4gICAgICAgIHJldHVybiB7IC4uLnMsIGZpZWxkczogWy4uLnMuZmllbGRzLCBhY3Rpb24uZmllbGRdIH1cbiAgICAgIH0pXG4gICAgICBjb25zdCBuZXdGaWVsZElkeCA9IHNlY3Rpb25zW2FjdGlvbi5zZWN0aW9uSWR4XS5maWVsZHMubGVuZ3RoIC0gMVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHdvcmtpbmc6IHsgLi4uc3RhdGUud29ya2luZywgc2NoZW1hOiB7IC4uLnN0YXRlLndvcmtpbmcuc2NoZW1hLCBzZWN0aW9ucyB9IH0sXG4gICAgICAgIHVpOiB7IC4uLnN0YXRlLnVpLCBzZWxlY3RlZEZpZWxkOiBuZXdGaWVsZElkeCB9LFxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ1VQREFURV9GSUVMRCc6IHtcbiAgICAgIGNvbnN0IHNlY3Rpb25zID0gc3RhdGUud29ya2luZy5zY2hlbWEuc2VjdGlvbnMubWFwKChzLCBzaSkgPT4ge1xuICAgICAgICBpZiAoc2kgIT09IGFjdGlvbi5zZWN0aW9uSWR4KSByZXR1cm4gc1xuICAgICAgICByZXR1cm4geyAuLi5zLCBmaWVsZHM6IHMuZmllbGRzLm1hcCgoZiwgZmkpID0+IGZpID09PSBhY3Rpb24uZmllbGRJZHggPyBhY3Rpb24uZmllbGQgOiBmKSB9XG4gICAgICB9KVxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHdvcmtpbmc6IHsgLi4uc3RhdGUud29ya2luZywgc2NoZW1hOiB7IC4uLnN0YXRlLndvcmtpbmcuc2NoZW1hLCBzZWN0aW9ucyB9IH0gfVxuICAgIH1cblxuICAgIGNhc2UgJ0RFTEVURV9GSUVMRCc6IHtcbiAgICAgIGNvbnN0IGRlbGV0ZWRLZXkgPSBzdGF0ZS53b3JraW5nLnNjaGVtYS5zZWN0aW9uc1thY3Rpb24uc2VjdGlvbklkeF0/LmZpZWxkc1thY3Rpb24uZmllbGRJZHhdPy5rZXlcbiAgICAgIGNvbnN0IHNlY3Rpb25zID0gc3RhdGUud29ya2luZy5zY2hlbWEuc2VjdGlvbnMubWFwKChzLCBzaSkgPT4ge1xuICAgICAgICBpZiAoc2kgIT09IGFjdGlvbi5zZWN0aW9uSWR4KSByZXR1cm4gc1xuICAgICAgICByZXR1cm4geyAuLi5zLCBmaWVsZHM6IHMuZmllbGRzLmZpbHRlcigoXywgZmkpID0+IGZpICE9PSBhY3Rpb24uZmllbGRJZHgpIH1cbiAgICAgIH0pXG4gICAgICBjb25zdCBkZW1vID0geyAuLi5zdGF0ZS53b3JraW5nLmRlbW8gfVxuICAgICAgaWYgKGRlbGV0ZWRLZXkpIGRlbGV0ZSBkZW1vW2RlbGV0ZWRLZXldXG4gICAgICBjb25zdCBuZXdTZWwgPSBNYXRoLm1pbihzdGF0ZS51aS5zZWxlY3RlZEZpZWxkLCBNYXRoLm1heCgtMSwgc2VjdGlvbnNbYWN0aW9uLnNlY3Rpb25JZHhdLmZpZWxkcy5sZW5ndGggLSAxKSlcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB3b3JraW5nOiB7IC4uLnN0YXRlLndvcmtpbmcsIHNjaGVtYTogeyAuLi5zdGF0ZS53b3JraW5nLnNjaGVtYSwgc2VjdGlvbnMgfSwgZGVtbyB9LFxuICAgICAgICB1aTogeyAuLi5zdGF0ZS51aSwgc2VsZWN0ZWRGaWVsZDogbmV3U2VsIH0sXG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSAnRFVQTElDQVRFX0ZJRUxEJzoge1xuICAgICAgY29uc3Qgc2VjdGlvbnMgPSBzdGF0ZS53b3JraW5nLnNjaGVtYS5zZWN0aW9ucy5tYXAoKHMsIHNpKSA9PiB7XG4gICAgICAgIGlmIChzaSAhPT0gYWN0aW9uLnNlY3Rpb25JZHgpIHJldHVybiBzXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsID0gcy5maWVsZHNbYWN0aW9uLmZpZWxkSWR4XVxuICAgICAgICBpZiAoIW9yaWdpbmFsKSByZXR1cm4gc1xuICAgICAgICBjb25zdCBjb3B5ID0gZGVlcENsb25lKG9yaWdpbmFsKVxuICAgICAgICBjb3B5LmtleSA9IGNvcHkua2V5ICsgJ0NvcHknXG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IFsuLi5zLmZpZWxkc11cbiAgICAgICAgZmllbGRzLnNwbGljZShhY3Rpb24uZmllbGRJZHggKyAxLCAwLCBjb3B5KVxuICAgICAgICByZXR1cm4geyAuLi5zLCBmaWVsZHMgfVxuICAgICAgfSlcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB3b3JraW5nOiB7IC4uLnN0YXRlLndvcmtpbmcsIHNjaGVtYTogeyAuLi5zdGF0ZS53b3JraW5nLnNjaGVtYSwgc2VjdGlvbnMgfSB9LFxuICAgICAgICB1aTogeyAuLi5zdGF0ZS51aSwgc2VsZWN0ZWRGaWVsZDogYWN0aW9uLmZpZWxkSWR4ICsgMSB9LFxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ01PVkVfRklFTEQnOiB7XG4gICAgICBjb25zdCBzZWN0aW9uID0gc3RhdGUud29ya2luZy5zY2hlbWEuc2VjdGlvbnNbc3RhdGUudWkuc2VsZWN0ZWRTZWN0aW9uXVxuICAgICAgaWYgKCFzZWN0aW9uKSByZXR1cm4gc3RhdGVcbiAgICAgIGNvbnN0IGZpZWxkcyA9IFsuLi5zZWN0aW9uLmZpZWxkc11cbiAgICAgIGNvbnN0IFttb3ZlZF0gPSBmaWVsZHMuc3BsaWNlKGFjdGlvbi5mcm9tLCAxKVxuICAgICAgY29uc3QgaW5zZXJ0QXQgPSBhY3Rpb24udG8gPiBhY3Rpb24uZnJvbSA/IGFjdGlvbi50byAtIDEgOiBhY3Rpb24udG9cbiAgICAgIGZpZWxkcy5zcGxpY2UoaW5zZXJ0QXQsIDAsIG1vdmVkKVxuICAgICAgY29uc3Qgc2VjdGlvbnMgPSBzdGF0ZS53b3JraW5nLnNjaGVtYS5zZWN0aW9ucy5tYXAoKHMsIGkpID0+XG4gICAgICAgIGkgPT09IHN0YXRlLnVpLnNlbGVjdGVkU2VjdGlvbiA/IHsgLi4ucywgZmllbGRzIH0gOiBzLFxuICAgICAgKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHdvcmtpbmc6IHsgLi4uc3RhdGUud29ya2luZywgc2NoZW1hOiB7IC4uLnN0YXRlLndvcmtpbmcuc2NoZW1hLCBzZWN0aW9ucyB9IH0sXG4gICAgICAgIHVpOiB7IC4uLnN0YXRlLnVpLCBzZWxlY3RlZEZpZWxkOiBpbnNlcnRBdCB9LFxuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgJ1NFVF9ERU1PJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB3b3JraW5nOiB7IC4uLnN0YXRlLndvcmtpbmcsIGRlbW86IHsgLi4uc3RhdGUud29ya2luZy5kZW1vLCBbYWN0aW9uLmtleV06IGFjdGlvbi52YWx1ZSB9IH0gfVxuXG4gICAgY2FzZSAnU0VUX0RFTU9fQUxMJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB3b3JraW5nOiB7IC4uLnN0YXRlLndvcmtpbmcsIGRlbW86IGFjdGlvbi5kZW1vIH0gfVxuXG4gICAgY2FzZSAnU0VUX01BTklGRVNUJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB3b3JraW5nOiB7IC4uLnN0YXRlLndvcmtpbmcsIG1hbmlmZXN0OiBhY3Rpb24ubWFuaWZlc3QgfSB9XG5cbiAgICBjYXNlICdTRUxFQ1RfU0VDVElPTic6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdWk6IHsgLi4uc3RhdGUudWksIHNlbGVjdGVkU2VjdGlvbjogYWN0aW9uLmlkeCwgc2VsZWN0ZWRGaWVsZDogLTEgfSB9XG5cbiAgICBjYXNlICdTRUxFQ1RfRklFTEQnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHVpOiB7IC4uLnN0YXRlLnVpLCBzZWxlY3RlZEZpZWxkOiBhY3Rpb24uaWR4IH0gfVxuXG4gICAgY2FzZSAnU0VUX1RBQic6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdWk6IHsgLi4uc3RhdGUudWksIGFjdGl2ZVRhYjogYWN0aW9uLnRhYiB9IH1cblxuICAgIGNhc2UgJ1NFVF9USEVNRSc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdWk6IHsgLi4uc3RhdGUudWksIHRoZW1lOiBhY3Rpb24udGhlbWUgfSB9XG5cbiAgICBjYXNlICdTSE9XX1RPQVNUJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB0b2FzdDogeyBtZXNzYWdlOiBhY3Rpb24ubWVzc2FnZSwgdHlwZTogYWN0aW9uLnRvYXN0VHlwZSB9IH1cblxuICAgIGNhc2UgJ0hJREVfVE9BU1QnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHRvYXN0OiBudWxsIH1cblxuICAgIGNhc2UgJ0lNUE9SVF9DT05GSUcnOiB7XG4gICAgICBjb25zdCB3b3JraW5nID0geyAuLi5zdGF0ZS53b3JraW5nIH1cbiAgICAgIGlmIChhY3Rpb24uZGF0YS5zY2hlbWEpIHdvcmtpbmcuc2NoZW1hID0gYWN0aW9uLmRhdGEuc2NoZW1hXG4gICAgICBpZiAoYWN0aW9uLmRhdGEuZGVtbykgd29ya2luZy5kZW1vID0gYWN0aW9uLmRhdGEuZGVtb1xuICAgICAgaWYgKGFjdGlvbi5kYXRhLm1hbmlmZXN0KSB3b3JraW5nLm1hbmlmZXN0ID0gYWN0aW9uLmRhdGEubWFuaWZlc3RcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB3b3JraW5nIH1cbiAgICB9XG5cbiAgICBjYXNlICdTRVRfU0VBUkNIJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB1aTogeyAuLi5zdGF0ZS51aSwgc2VhcmNoUXVlcnk6IGFjdGlvbi5xdWVyeSB9IH1cblxuICAgIGNhc2UgJ1RPR0dMRV9QUkVWSUVXJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB1aTogeyAuLi5zdGF0ZS51aSwgc2hvd1ByZXZpZXc6ICFzdGF0ZS51aS5zaG93UHJldmlldyB9IH1cblxuICAgIGNhc2UgJ0FERF9DT05ESVRJT05BTCc6IHtcbiAgICAgIGNvbnN0IGNvbmRpdGlvbmFscyA9IFsuLi4oc3RhdGUud29ya2luZy5zY2hlbWEuY29uZGl0aW9uYWxzIHx8IFtdKSwgYWN0aW9uLmNvbmRpdGlvbmFsXVxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHdvcmtpbmc6IHsgLi4uc3RhdGUud29ya2luZywgc2NoZW1hOiB7IC4uLnN0YXRlLndvcmtpbmcuc2NoZW1hLCBjb25kaXRpb25hbHMgfSB9IH1cbiAgICB9XG5cbiAgICBjYXNlICdVUERBVEVfQ09ORElUSU9OQUwnOiB7XG4gICAgICBjb25zdCBjb25kaXRpb25hbHMgPSAoc3RhdGUud29ya2luZy5zY2hlbWEuY29uZGl0aW9uYWxzIHx8IFtdKS5tYXAoKGMsIGkpID0+XG4gICAgICAgIGkgPT09IGFjdGlvbi5pZHggPyBhY3Rpb24uY29uZGl0aW9uYWwgOiBjLFxuICAgICAgKVxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHdvcmtpbmc6IHsgLi4uc3RhdGUud29ya2luZywgc2NoZW1hOiB7IC4uLnN0YXRlLndvcmtpbmcuc2NoZW1hLCBjb25kaXRpb25hbHMgfSB9IH1cbiAgICB9XG5cbiAgICBjYXNlICdERUxFVEVfQ09ORElUSU9OQUwnOiB7XG4gICAgICBjb25zdCBjb25kaXRpb25hbHMgPSAoc3RhdGUud29ya2luZy5zY2hlbWEuY29uZGl0aW9uYWxzIHx8IFtdKS5maWx0ZXIoKF8sIGkpID0+IGkgIT09IGFjdGlvbi5pZHgpXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgd29ya2luZzogeyAuLi5zdGF0ZS53b3JraW5nLCBzY2hlbWE6IHsgLi4uc3RhdGUud29ya2luZy5zY2hlbWEsIGNvbmRpdGlvbmFsczogY29uZGl0aW9uYWxzLmxlbmd0aCA/IGNvbmRpdGlvbmFscyA6IHVuZGVmaW5lZCB9IH0gfVxuICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG4vLyBcdTI1MDBcdTI1MDAgQ29udGV4dCBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxudHlwZSBTdHVkaW9Db250ZXh0VmFsdWUgPSB7XG4gIHN0YXRlOiBTdHVkaW9TdGF0ZVxuICBkaXNwYXRjaDogRGlzcGF0Y2g8U3R1ZGlvQWN0aW9uPlxufVxuXG5leHBvcnQgY29uc3QgU3R1ZGlvQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8U3R1ZGlvQ29udGV4dFZhbHVlPihudWxsIGFzIHVua25vd24gYXMgU3R1ZGlvQ29udGV4dFZhbHVlKVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlU3R1ZGlvKCkge1xuICByZXR1cm4gdXNlQ29udGV4dChTdHVkaW9Db250ZXh0KVxufVxuIiwgImltcG9ydCB0eXBlIHsgU2NoZW1hU2VjdGlvbiB9IGZyb20gJy4vdHlwZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiBkZWVwQ2xvbmU8VD4ob2JqOiBUKTogVCB7XG4gIHJldHVybiBvYmogPT0gbnVsbCA/IG9iaiA6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBFcXVhbChhOiB1bmtub3duLCBiOiB1bmtub3duKTogYm9vbGVhbiB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShhKSA9PT0gSlNPTi5zdHJpbmdpZnkoYilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvQ2FtZWxDYXNlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHN0clxuICAgIC5yZXBsYWNlKC9bXmEtekEtWjAtOSBdL2csICcnKVxuICAgIC5yZXBsYWNlKC9cXHMrKC4pL2csIChfLCBjOiBzdHJpbmcpID0+IGMudG9VcHBlckNhc2UoKSlcbiAgICAucmVwbGFjZSgvXiguKS8sIChfLCBjOiBzdHJpbmcpID0+IGMudG9Mb3dlckNhc2UoKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuc3VyZVVuaXF1ZUtleShrZXk6IHN0cmluZywgc2VjdGlvbnM6IFNjaGVtYVNlY3Rpb25bXSk6IHN0cmluZyB7XG4gIGNvbnN0IGFsbEtleXMgPSBuZXcgU2V0PHN0cmluZz4oKVxuICBmb3IgKGNvbnN0IHMgb2Ygc2VjdGlvbnMpIHtcbiAgICBmb3IgKGNvbnN0IGYgb2Ygcy5maWVsZHMpIHtcbiAgICAgIGlmIChmLmtleSkgYWxsS2V5cy5hZGQoZi5rZXkpXG4gICAgfVxuICB9XG4gIGlmICghYWxsS2V5cy5oYXMoa2V5KSkgcmV0dXJuIGtleVxuICBsZXQgaSA9IDJcbiAgd2hpbGUgKGFsbEtleXMuaGFzKGtleSArIGkpKSBpKytcbiAgcmV0dXJuIGtleSArIGlcbn1cbiIsICJpbXBvcnQgdHlwZSB7IFRlbXBsYXRlU2NoZW1hLCBNYW5pZmVzdERhdGEgfSBmcm9tICcuL3R5cGVzJ1xuXG5leHBvcnQgdHlwZSBMb2FkUmVzcG9uc2UgPSB7XG4gIHNjaGVtYTogVGVtcGxhdGVTY2hlbWEgfCBudWxsXG4gIGRlbW86IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgbnVsbFxuICBtYW5pZmVzdDogTWFuaWZlc3REYXRhIHwgbnVsbFxufVxuXG5leHBvcnQgdHlwZSBTYXZlUGF5bG9hZCA9IHtcbiAgc2NoZW1hPzogVGVtcGxhdGVTY2hlbWFcbiAgZGVtbz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gIG1hbmlmZXN0PzogTWFuaWZlc3REYXRhXG59XG5cbmV4cG9ydCB0eXBlIFNhdmVSZXNwb25zZSA9IHtcbiAgb2s6IGJvb2xlYW5cbiAgZXJyb3JzPzogc3RyaW5nW11cbiAgd3JpdHRlbj86IHN0cmluZ1tdXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkQ29uZmlnKCk6IFByb21pc2U8TG9hZFJlc3BvbnNlPiB7XG4gIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaCgnL3N0dWRpby9hcGkvbG9hZCcpXG4gIHJldHVybiByZXNwLmpzb24oKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZUNvbmZpZyhwYXlsb2FkOiBTYXZlUGF5bG9hZCk6IFByb21pc2U8U2F2ZVJlc3BvbnNlPiB7XG4gIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaCgnL3N0dWRpby9hcGkvc2F2ZScsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7ICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXlsb2FkKSxcbiAgfSlcbiAgcmV0dXJuIHJlc3AuanNvbigpXG59XG4iLCAiaW1wb3J0IHsgU2VhcmNoLCBSZWZyZXNoQ3csIE1vb24sIFN1biwgQXJyb3dMZWZ0LCBFeWUsIEV5ZU9mZiB9IGZyb20gJ2x1Y2lkZS1yZWFjdCdcbmltcG9ydCB7IHVzZVN0dWRpbyB9IGZyb20gJy4uL3N0YXRlJ1xuaW1wb3J0IHR5cGUgeyBTdHVkaW9Db25maWcgfSBmcm9tICcuLi90eXBlcydcblxudHlwZSBQcm9wcyA9IHtcbiAgY29uZmlnOiBTdHVkaW9Db25maWdcbiAgb25TZWFyY2g6IChxdWVyeTogc3RyaW5nKSA9PiB2b2lkXG4gIG9uUmVmcmVzaFByZXZpZXc6ICgpID0+IHZvaWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEhlYWRlcih7IGNvbmZpZywgb25TZWFyY2gsIG9uUmVmcmVzaFByZXZpZXcgfTogUHJvcHMpIHtcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZVN0dWRpbygpXG4gIGNvbnN0IGlzRGFyayA9IHN0YXRlLnVpLnRoZW1lID09PSAnZGFyaydcblxuICBjb25zdCB0b2dnbGVUaGVtZSA9ICgpID0+IHtcbiAgICBjb25zdCBuZXh0ID0gaXNEYXJrID8gJ2xpZ2h0JyA6ICdkYXJrJ1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ1NFVF9USEVNRScsIHRoZW1lOiBuZXh0IH0pXG4gICAgaWYgKG5leHQgPT09ICdkYXJrJykge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsICdkYXJrJylcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10aGVtZScpXG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdHVkaW8tdGhlbWUnLCBuZXh0KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInN0dWRpby1oZWFkZXJcIj5cbiAgICAgIDxoMT5UZW1wbGF0ZSBTdHVkaW8gPHNwYW4gY2xhc3NOYW1lPVwic2x1Z1wiPlx1MjAxNCB7Y29uZmlnLnNsdWd9PC9zcGFuPjwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1zcGFjZXJcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItc2VhcmNoXCI+XG4gICAgICAgIDxTZWFyY2ggc2l6ZT17MTR9IHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tdGV4dC10ZXJ0aWFyeSknLCBmbGV4U2hyaW5rOiAwIH19IC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmaWVsZHMuLi4gKENtZCtGKVwiXG4gICAgICAgICAgdmFsdWU9e3N0YXRlLnVpLnNlYXJjaFF1ZXJ5fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25TZWFyY2goZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICB7c3RhdGUudWkuc2VhcmNoUXVlcnkgJiYgKFxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2VhcmNoLWNsZWFyXCIgb25DbGljaz17KCkgPT4gb25TZWFyY2goJycpfT4mdGltZXM7PC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPXtgaWNvbi1idG4gJHtzdGF0ZS51aS5zaG93UHJldmlldyA/ICdhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnVE9HR0xFX1BSRVZJRVcnIH0pfVxuICAgICAgICB0aXRsZT1cIlRvZ2dsZSBwcmV2aWV3IChDbWQrUClcIlxuICAgICAgPlxuICAgICAgICB7c3RhdGUudWkuc2hvd1ByZXZpZXcgPyA8RXllT2ZmIHNpemU9ezE2fSAvPiA6IDxFeWUgc2l6ZT17MTZ9IC8+fVxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImljb24tYnRuXCIgb25DbGljaz17b25SZWZyZXNoUHJldmlld30gdGl0bGU9XCJSZWZyZXNoIHByZXZpZXdcIj5cbiAgICAgICAgPFJlZnJlc2hDdyBzaXplPXsxNn0gLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJpY29uLWJ0blwiIG9uQ2xpY2s9e3RvZ2dsZVRoZW1lfSB0aXRsZT1cIlRvZ2dsZSB0aGVtZVwiPlxuICAgICAgICB7aXNEYXJrID8gPFN1biBzaXplPXsxNn0gLz4gOiA8TW9vbiBzaXplPXsxNn0gLz59XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiaWNvbi1idG5cIiB0aXRsZT1cIkJhY2sgdG8gcHJldmlld1wiPlxuICAgICAgICA8QXJyb3dMZWZ0IHNpemU9ezE2fSAvPlxuICAgICAgPC9hPlxuICAgIDwvaGVhZGVyPlxuICApXG59XG4iLCAiaW1wb3J0IHsgU2F2ZSwgRG93bmxvYWQsIFVwbG9hZCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCdcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVN0dWRpbyB9IGZyb20gJy4uL3N0YXRlJ1xuaW1wb3J0IHsgc2F2ZUNvbmZpZyB9IGZyb20gJy4uL2FwaSdcbmltcG9ydCB7IGRlZXBFcXVhbCB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHR5cGUgeyBUYWIgfSBmcm9tICcuLi90eXBlcydcblxudHlwZSBQcm9wcyA9IHtcbiAgb25SZWZyZXNoUHJldmlldzogKCkgPT4gdm9pZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gRm9vdGVyKHsgb25SZWZyZXNoUHJldmlldyB9OiBQcm9wcykge1xuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlU3R1ZGlvKClcbiAgY29uc3QgW3NhdmluZywgc2V0U2F2aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBmaWxlSW5wdXRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbClcblxuICBjb25zdCBoYXNVbnNhdmVkID0gIWRlZXBFcXVhbChzdGF0ZS5sb2FkZWQsIHN0YXRlLndvcmtpbmcpXG5cbiAgY29uc3QgaGFuZGxlU2F2ZSA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRTYXZpbmcodHJ1ZSlcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2F2ZUNvbmZpZyh7XG4gICAgICAgIHNjaGVtYTogc3RhdGUud29ya2luZy5zY2hlbWEsXG4gICAgICAgIGRlbW86IHN0YXRlLndvcmtpbmcuZGVtbyxcbiAgICAgICAgbWFuaWZlc3Q6IHN0YXRlLndvcmtpbmcubWFuaWZlc3QsXG4gICAgICB9KVxuICAgICAgaWYgKHJlc3VsdC5vaykge1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdTQVZFRCcgfSlcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnU0hPV19UT0FTVCcsIG1lc3NhZ2U6IGBTYXZlZCAkeyhyZXN1bHQud3JpdHRlbiA/PyBbXSkuam9pbignLCAnKX1gLCB0b2FzdFR5cGU6ICdzdWNjZXNzJyB9KVxuICAgICAgICBzZXRUaW1lb3V0KG9uUmVmcmVzaFByZXZpZXcsIDUwMClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1NIT1dfVE9BU1QnLCBtZXNzYWdlOiAocmVzdWx0LmVycm9ycyA/PyBbJ1NhdmUgZmFpbGVkJ10pLmpvaW4oJywgJyksIHRvYXN0VHlwZTogJ2Vycm9yJyB9KVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1NIT1dfVE9BU1QnLCBtZXNzYWdlOiBgU2F2ZSBmYWlsZWQ6ICR7ZX1gLCB0b2FzdFR5cGU6ICdlcnJvcicgfSlcbiAgICB9XG4gICAgc2V0U2F2aW5nKGZhbHNlKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlRXhwb3J0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSB7IHNjaGVtYTogc3RhdGUud29ya2luZy5zY2hlbWEsIGRlbW86IHN0YXRlLndvcmtpbmcuZGVtbywgbWFuaWZlc3Q6IHN0YXRlLndvcmtpbmcubWFuaWZlc3QgfVxuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbSlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgMildLCB7IHR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyB9KVxuICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYilcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgYS5ocmVmID0gdXJsXG4gICAgYS5kb3dubG9hZCA9IGAkeyh3aW5kb3cgYXMgYW55KS5fX1NUVURJT19DT05GSUdfXz8uc2x1ZyB8fCAndGVtcGxhdGUnfS1jb25maWcuanNvbmBcbiAgICBhLmNsaWNrKClcbiAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHVybClcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdTSE9XX1RPQVNUJywgbWVzc2FnZTogJ0NvbmZpZyBleHBvcnRlZCcsIHRvYXN0VHlwZTogJ3N1Y2Nlc3MnIH0pXG4gIH1cblxuICBjb25zdCBoYW5kbGVJbXBvcnQgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXM/LlswXVxuICAgIGlmICghZmlsZSkgcmV0dXJuXG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHJlYWRlci5vbmxvYWQgPSAoZXYpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGV2LnRhcmdldD8ucmVzdWx0IGFzIHN0cmluZylcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnSU1QT1JUX0NPTkZJRycsIGRhdGEgfSlcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnU0hPV19UT0FTVCcsIG1lc3NhZ2U6ICdDb25maWcgaW1wb3J0ZWQnLCB0b2FzdFR5cGU6ICdzdWNjZXNzJyB9KVxuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1NIT1dfVE9BU1QnLCBtZXNzYWdlOiAnSW52YWxpZCBKU09OIGZpbGUnLCB0b2FzdFR5cGU6ICdlcnJvcicgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSlcbiAgICBlLnRhcmdldC52YWx1ZSA9ICcnXG4gIH1cblxuICBjb25zdCB0YWJzOiBUYWJbXSA9IFsnc2NoZW1hJywgJ2RlbW8nLCAnbWFuaWZlc3QnXVxuXG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJzdHVkaW8tZm9vdGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1iYXJcIj5cbiAgICAgICAge3RhYnMubWFwKCh0YWIpID0+IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBrZXk9e3RhYn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHRhYi1idG4gJHtzdGF0ZS51aS5hY3RpdmVUYWIgPT09IHRhYiA/ICdhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHsgdHlwZTogJ1NFVF9UQUInLCB0YWIgfSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RhYi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRhYi5zbGljZSgxKX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXNwYWNlclwiIC8+XG4gICAgICB7aGFzVW5zYXZlZCAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidW5zYXZlZC1kb3QgdmlzaWJsZVwiIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidW5zYXZlZC1sYWJlbCB2aXNpYmxlXCI+VW5zYXZlZCBjaGFuZ2VzPC9zcGFuPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImljb24tYnRuXCIgb25DbGljaz17aGFuZGxlRXhwb3J0fSB0aXRsZT1cIkV4cG9ydFwiPlxuICAgICAgICA8RG93bmxvYWQgc2l6ZT17MTR9IC8+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaWNvbi1idG5cIiBvbkNsaWNrPXsoKSA9PiBmaWxlSW5wdXRSZWYuY3VycmVudD8uY2xpY2soKX0gdGl0bGU9XCJJbXBvcnRcIj5cbiAgICAgICAgPFVwbG9hZCBzaXplPXsxNH0gLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzYXZlLWJ0blwiIG9uQ2xpY2s9e2hhbmRsZVNhdmV9IGRpc2FibGVkPXtzYXZpbmd9PlxuICAgICAgICA8U2F2ZSBzaXplPXsxNH0gLz5cbiAgICAgICAge3NhdmluZyA/ICdTYXZpbmcuLi4nIDogJ1NhdmUnfVxuICAgICAgPC9idXR0b24+XG4gICAgICA8aW5wdXQgcmVmPXtmaWxlSW5wdXRSZWZ9IHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiLmpzb25cIiBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0gb25DaGFuZ2U9e2hhbmRsZUltcG9ydH0gLz5cbiAgICA8L2Zvb3Rlcj5cbiAgKVxufVxuIiwgImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgR3JpcFZlcnRpY2FsLCBQbHVzIH0gZnJvbSAnbHVjaWRlLXJlYWN0J1xuaW1wb3J0IHsgdXNlU3R1ZGlvIH0gZnJvbSAnLi4vc3RhdGUnXG5pbXBvcnQgeyB0b0NhbWVsQ2FzZSB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuL2NvbW1vbi9Nb2RhbCdcblxuZXhwb3J0IGZ1bmN0aW9uIFNlY3Rpb25MaXN0KCkge1xuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlU3R1ZGlvKClcbiAgY29uc3Qgc2VjdGlvbnMgPSBzdGF0ZS53b3JraW5nLnNjaGVtYS5zZWN0aW9uc1xuICBjb25zdCBzZWxlY3RlZCA9IHN0YXRlLnVpLnNlbGVjdGVkU2VjdGlvblxuXG4gIGNvbnN0IFttb2RhbE9wZW4sIHNldE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2xhYmVsLCBzZXRMYWJlbF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2tleSwgc2V0S2V5XSA9IHVzZVN0YXRlKCcnKVxuXG4gIGNvbnN0IG9wZW5BZGRNb2RhbCA9ICgpID0+IHtcbiAgICBzZXRMYWJlbCgnJylcbiAgICBzZXRLZXkoJycpXG4gICAgc2V0TW9kYWxPcGVuKHRydWUpXG4gIH1cblxuICBjb25zdCBoYW5kbGVTYXZlID0gKCkgPT4ge1xuICAgIGNvbnN0IHRyaW1tZWRMYWJlbCA9IGxhYmVsLnRyaW0oKVxuICAgIGlmICghdHJpbW1lZExhYmVsKSByZXR1cm5cbiAgICBjb25zdCBzZWN0aW9uS2V5ID0ga2V5LnRyaW0oKSB8fCB0b0NhbWVsQ2FzZSh0cmltbWVkTGFiZWwpXG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnQUREX1NFQ1RJT04nLCBzZWN0aW9uOiB7IGtleTogc2VjdGlvbktleSwgbGFiZWw6IHRyaW1tZWRMYWJlbCwgZmllbGRzOiBbXSB9IH0pXG4gICAgc2V0TW9kYWxPcGVuKGZhbHNlKVxuICB9XG5cbiAgLy8gRHJhZyAmIGRyb3BcbiAgY29uc3QgW2RyYWdJZHgsIHNldERyYWdJZHhdID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2Ryb3BUYXJnZXQsIHNldERyb3BUYXJnZXRdID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbClcblxuICBjb25zdCBvbkRyYWdTdGFydCA9IHVzZUNhbGxiYWNrKChpZHg6IG51bWJlcikgPT4geyBzZXREcmFnSWR4KGlkeCkgfSwgW10pXG4gIGNvbnN0IG9uRHJhZ0VuZCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0RHJhZ0lkeChudWxsKTsgc2V0RHJvcFRhcmdldChudWxsKSB9LCBbXSlcblxuICBjb25zdCBvbkRyYWdPdmVyID0gdXNlQ2FsbGJhY2soKGU6IFJlYWN0LkRyYWdFdmVudCwgaWR4OiBudW1iZXIpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnXG4gICAgc2V0RHJvcFRhcmdldChpZHgpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IG9uRHJvcCA9IHVzZUNhbGxiYWNrKChlOiBSZWFjdC5EcmFnRXZlbnQsIHRvSWR4OiBudW1iZXIpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBpZiAoZHJhZ0lkeCAhPT0gbnVsbCAmJiBkcmFnSWR4ICE9PSB0b0lkeCkge1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnTU9WRV9TRUNUSU9OJywgZnJvbTogZHJhZ0lkeCwgdG86IHRvSWR4IH0pXG4gICAgfVxuICAgIHNldERyYWdJZHgobnVsbClcbiAgICBzZXREcm9wVGFyZ2V0KG51bGwpXG4gIH0sIFtkcmFnSWR4LCBkaXNwYXRjaF0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLXNlY3Rpb25zXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLXNlY3Rpb25zLWhlYWRlclwiPlNlY3Rpb25zPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICB7c2VjdGlvbnMubWFwKChzLCBpKSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAga2V5PXtzLmtleSArIGl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BzZWN0aW9uLWl0ZW0gJHtpID09PSBzZWxlY3RlZCA/ICdhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHsgdHlwZTogJ1NFTEVDVF9TRUNUSU9OJywgaWR4OiBpIH0pfVxuICAgICAgICAgICAgZHJhZ2dhYmxlXG4gICAgICAgICAgICBvbkRyYWdTdGFydD17KCkgPT4gb25EcmFnU3RhcnQoaSl9XG4gICAgICAgICAgICBvbkRyYWdFbmQ9e29uRHJhZ0VuZH1cbiAgICAgICAgICAgIG9uRHJhZ092ZXI9eyhlKSA9PiBvbkRyYWdPdmVyKGUsIGkpfVxuICAgICAgICAgICAgb25Ecm9wPXsoZSkgPT4gb25Ecm9wKGUsIGkpfVxuICAgICAgICAgICAgc3R5bGU9e3sgb3BhY2l0eTogZHJhZ0lkeCA9PT0gaSA/IDAuNCA6IDEsIGJvcmRlclRvcENvbG9yOiBkcm9wVGFyZ2V0ID09PSBpID8gJ3ZhcigtLWFjY2VudCknIDogdW5kZWZpbmVkIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZHJhZy1oYW5kbGVcIj48R3JpcFZlcnRpY2FsIHNpemU9ezEyfSAvPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlY3Rpb24tbGFiZWxcIj57cy5sYWJlbCB8fCAnVW50aXRsZWQnfTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlY3Rpb24tY291bnRcIj57cy5maWVsZHMubGVuZ3RofTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWRkLXNlY3Rpb24tYnRuXCIgb25DbGljaz17b3BlbkFkZE1vZGFsfT5cbiAgICAgICAgPFBsdXMgc2l6ZT17MTR9IC8+IEFkZCBTZWN0aW9uXG4gICAgICA8L2J1dHRvbj5cblxuICAgICAgPE1vZGFsIG9wZW49e21vZGFsT3Blbn0gb25DbG9zZT17KCkgPT4gc2V0TW9kYWxPcGVuKGZhbHNlKX0gdGl0bGU9XCJBZGQgU2VjdGlvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tbW9kYWwtZmllbGRzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPkxhYmVsPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e2xhYmVsfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHsgc2V0TGFiZWwoZS50YXJnZXQudmFsdWUpOyBzZXRLZXkodG9DYW1lbENhc2UoZS50YXJnZXQudmFsdWUpKSB9fVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4gVGhlIEJhc2ljc1wiXG4gICAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgICAgICBvbktleURvd249eyhlKSA9PiB7IGlmIChlLmtleSA9PT0gJ0VudGVyJykgaGFuZGxlU2F2ZSgpIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5LZXk8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIlxuICAgICAgICAgICAgICB2YWx1ZT17a2V5fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEtleShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiYXV0by1nZW5lcmF0ZWQgZnJvbSBsYWJlbFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLW1vZGFsLWFjdGlvbnNcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1zZWNvbmRhcnlcIiBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbE9wZW4oZmFsc2UpfT5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5XCIgb25DbGljaz17aGFuZGxlU2F2ZX0+QWRkPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Nb2RhbD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB0eXBlIFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xuXG50eXBlIFByb3BzID0ge1xuICBvcGVuOiBib29sZWFuXG4gIG9uQ2xvc2U6ICgpID0+IHZvaWRcbiAgdGl0bGU6IHN0cmluZ1xuICBjaGlsZHJlbjogUmVhY3ROb2RlXG4gIHdpZHRoPzogbnVtYmVyXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBNb2RhbCh7IG9wZW4sIG9uQ2xvc2UsIHRpdGxlLCBjaGlsZHJlbiwgd2lkdGggPSAzNjAgfTogUHJvcHMpIHtcbiAgY29uc3Qgb3ZlcmxheVJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghb3BlbikgcmV0dXJuXG4gICAgY29uc3QgaGFuZGxlciA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSBvbkNsb3NlKClcbiAgICB9XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZXIpXG4gICAgcmV0dXJuICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVyKVxuICB9LCBbb3Blbiwgb25DbG9zZV0pXG5cbiAgaWYgKCFvcGVuKSByZXR1cm4gbnVsbFxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgcmVmPXtvdmVybGF5UmVmfVxuICAgICAgY2xhc3NOYW1lPVwibW9kYWwtb3ZlcmxheSBvcGVuXCJcbiAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7IGlmIChlLnRhcmdldCA9PT0gb3ZlcmxheVJlZi5jdXJyZW50KSBvbkNsb3NlKCkgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCIgc3R5bGU9e3sgd2lkdGggfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgPGgzPnt0aXRsZX08L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEdyaXBWZXJ0aWNhbCwgUGx1cywgQ29weSwgVHJhc2gyIH0gZnJvbSAnbHVjaWRlLXJlYWN0J1xuaW1wb3J0IHsgdXNlU3R1ZGlvIH0gZnJvbSAnLi4vc3RhdGUnXG5pbXBvcnQgeyBGSUVMRF9UWVBFUyB9IGZyb20gJy4uL2ZpZWxkLXJlZ2lzdHJ5J1xuaW1wb3J0IHsgUVVJQ0tfVEVNUExBVEVTIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgZGVlcENsb25lLCBlbnN1cmVVbmlxdWVLZXkgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IFR5cGVQaWNrZXIgfSBmcm9tICcuL1R5cGVQaWNrZXInXG5pbXBvcnQgeyBDb25kaXRpb25hbHNCdWlsZGVyIH0gZnJvbSAnLi9Db25kaXRpb25hbHNCdWlsZGVyJ1xuaW1wb3J0IHR5cGUgeyBGaWVsZFR5cGUsIFNjaGVtYUZpZWxkIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgKiBhcyBJY29ucyBmcm9tICdsdWNpZGUtcmVhY3QnXG5cbmZ1bmN0aW9uIEZpZWxkSWNvbih7IG5hbWUsIHNpemUgPSAxNCwgLi4ucmVzdCB9OiB7IG5hbWU6IHN0cmluZzsgc2l6ZT86IG51bWJlcjsgW2s6IHN0cmluZ106IGFueSB9KSB7XG4gIGNvbnN0IGljb25OYW1lID0gbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSkucmVwbGFjZSgvLShbYS16XSkvZywgKF8sIGMpID0+IGMudG9VcHBlckNhc2UoKSlcbiAgY29uc3QgSWNvbiA9IChJY29ucyBhcyBhbnkpW2ljb25OYW1lXVxuICByZXR1cm4gSWNvbiA/IDxJY29uIHNpemU9e3NpemV9IHsuLi5yZXN0fSAvPiA6IG51bGxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEZpZWxkTGlzdCgpIHtcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZVN0dWRpbygpXG4gIGNvbnN0IHNlY3Rpb25JZHggPSBzdGF0ZS51aS5zZWxlY3RlZFNlY3Rpb25cbiAgY29uc3Qgc2VjdGlvbiA9IHN0YXRlLndvcmtpbmcuc2NoZW1hLnNlY3Rpb25zW3NlY3Rpb25JZHhdXG4gIGNvbnN0IHNlbGVjdGVkRmllbGQgPSBzdGF0ZS51aS5zZWxlY3RlZEZpZWxkXG4gIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gc3RhdGUudWkuc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKVxuICBjb25zdCBbcGlja2VyT3Blbiwgc2V0UGlja2VyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAvLyBEcmFnIHN0YXRlXG4gIGNvbnN0IFtkcmFnSWR4LCBzZXREcmFnSWR4XSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtkcm9wVGFyZ2V0LCBzZXREcm9wVGFyZ2V0XSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpXG5cbiAgY29uc3Qgb25EcmFnU3RhcnQgPSB1c2VDYWxsYmFjaygoaWR4OiBudW1iZXIpID0+IHNldERyYWdJZHgoaWR4KSwgW10pXG4gIGNvbnN0IG9uRHJhZ0VuZCA9IHVzZUNhbGxiYWNrKCgpID0+IHsgc2V0RHJhZ0lkeChudWxsKTsgc2V0RHJvcFRhcmdldChudWxsKSB9LCBbXSlcbiAgY29uc3Qgb25EcmFnT3ZlciA9IHVzZUNhbGxiYWNrKChlOiBSZWFjdC5EcmFnRXZlbnQsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJ1xuICAgIHNldERyb3BUYXJnZXQoaWR4KVxuICB9LCBbXSlcbiAgY29uc3Qgb25Ecm9wID0gdXNlQ2FsbGJhY2soKGU6IFJlYWN0LkRyYWdFdmVudCwgdG9JZHg6IG51bWJlcikgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGlmIChkcmFnSWR4ICE9PSBudWxsICYmIGRyYWdJZHggIT09IHRvSWR4KSB7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdNT1ZFX0ZJRUxEJywgZnJvbTogZHJhZ0lkeCwgdG86IHRvSWR4IH0pXG4gICAgfVxuICAgIHNldERyYWdJZHgobnVsbClcbiAgICBzZXREcm9wVGFyZ2V0KG51bGwpXG4gIH0sIFtkcmFnSWR4LCBkaXNwYXRjaF0pXG5cbiAgY29uc3QgYWRkRmllbGRPZlR5cGUgPSAodHlwZTogRmllbGRUeXBlKSA9PiB7XG4gICAgaWYgKCFzZWN0aW9uKSByZXR1cm5cbiAgICBjb25zdCBmdCA9IEZJRUxEX1RZUEVTW3R5cGVdXG4gICAgY29uc3QgZmllbGQ6IFNjaGVtYUZpZWxkID0ge1xuICAgICAga2V5OiBlbnN1cmVVbmlxdWVLZXkodHlwZSwgc3RhdGUud29ya2luZy5zY2hlbWEuc2VjdGlvbnMpLFxuICAgICAgbGFiZWw6IGZ0LmxhYmVsLFxuICAgICAgdHlwZSxcbiAgICAgIC4uLmRlZXBDbG9uZShmdC5kZWZhdWx0Q29uZmlnKSxcbiAgICB9XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnQUREX0ZJRUxEJywgc2VjdGlvbklkeCwgZmllbGQgfSlcbiAgICAvLyBBdXRvLWdlbmVyYXRlIGRlbW9cbiAgICBjb25zdCBkZW1vVmFsdWUgPSBmdC5kZW1vRGVmYXVsdChmaWVsZClcbiAgICBpZiAoZGVtb1ZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1NFVF9ERU1PJywga2V5OiBmaWVsZC5rZXksIHZhbHVlOiBkZW1vVmFsdWUgfSlcbiAgICB9XG4gICAgc2V0UGlja2VyT3BlbihmYWxzZSlcbiAgfVxuXG4gIGNvbnN0IGFkZFF1aWNrVGVtcGxhdGUgPSAocXQ6IHR5cGVvZiBRVUlDS19URU1QTEFURVNbbnVtYmVyXSkgPT4ge1xuICAgIGlmICghc2VjdGlvbikgcmV0dXJuXG4gICAgY29uc3QgZmllbGQgPSBkZWVwQ2xvbmUocXQuZmllbGQpXG4gICAgZmllbGQua2V5ID0gZW5zdXJlVW5pcXVlS2V5KGZpZWxkLmtleSwgc3RhdGUud29ya2luZy5zY2hlbWEuc2VjdGlvbnMpXG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnQUREX0ZJRUxEJywgc2VjdGlvbklkeCwgZmllbGQgfSlcbiAgICBjb25zdCBmdCA9IEZJRUxEX1RZUEVTW2ZpZWxkLnR5cGVdXG4gICAgY29uc3QgZGVtb1ZhbHVlID0gZnQuZGVtb0RlZmF1bHQoZmllbGQpXG4gICAgaWYgKGRlbW9WYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdTRVRfREVNTycsIGtleTogZmllbGQua2V5LCB2YWx1ZTogZGVtb1ZhbHVlIH0pXG4gICAgfVxuICB9XG5cbiAgaWYgKCFzZWN0aW9uKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtZmllbGRzXCI+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBmbGV4OiAxLCBjb2xvcjogJ3ZhcigtLXRleHQtdGVydGlhcnkpJyB9fT5cbiAgICAgICAgICA8cD5BZGQgYSBzZWN0aW9uIHRvIGdldCBzdGFydGVkPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1maWVsZHNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtZmllbGRzLWhlYWRlclwiPlxuICAgICAgICA8aDI+e3NlY3Rpb24ubGFiZWwgfHwgJ0ZpZWxkcyd9PC9oMj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJpY29uLWJ0blwiIG9uQ2xpY2s9eygpID0+IHNldFBpY2tlck9wZW4odHJ1ZSl9IHRpdGxlPVwiQWRkIGZpZWxkXCI+XG4gICAgICAgICAgPFBsdXMgc2l6ZT17MTZ9IC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtbGlzdFwiPlxuICAgICAgICB7c2VjdGlvbi5maWVsZHMubWFwKChmLCBpKSA9PiB7XG4gICAgICAgICAgaWYgKHNlYXJjaFF1ZXJ5ICYmICFmLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoUXVlcnkpICYmICFmLmtleS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5KSAmJiAhZi50eXBlLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5KSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgZnQgPSBGSUVMRF9UWVBFU1tmLnR5cGVdIHx8IHsgbGFiZWw6IGYudHlwZSwgaWNvbjogJ2hlbHAtY2lyY2xlJyB9XG4gICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBpID09PSBzZWxlY3RlZEZpZWxkXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAga2V5PXtmLmtleSArIGl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZpZWxkLWl0ZW0gJHtpc0FjdGl2ZSA/ICdhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnU0VMRUNUX0ZJRUxEJywgaWR4OiBpIH0pfVxuICAgICAgICAgICAgICBkcmFnZ2FibGVcbiAgICAgICAgICAgICAgb25EcmFnU3RhcnQ9eygpID0+IG9uRHJhZ1N0YXJ0KGkpfVxuICAgICAgICAgICAgICBvbkRyYWdFbmQ9e29uRHJhZ0VuZH1cbiAgICAgICAgICAgICAgb25EcmFnT3Zlcj17KGUpID0+IG9uRHJhZ092ZXIoZSwgaSl9XG4gICAgICAgICAgICAgIG9uRHJvcD17KGUpID0+IG9uRHJvcChlLCBpKX1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBkcmFnSWR4ID09PSBpID8gMC40IDogMSxcbiAgICAgICAgICAgICAgICBib3JkZXJUb3A6IGRyb3BUYXJnZXQgPT09IGkgPyAnMnB4IHNvbGlkIHZhcigtLWFjY2VudCknIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkcmFnLWhhbmRsZVwiPjxHcmlwVmVydGljYWwgc2l6ZT17MTJ9IC8+PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BmaWVsZC1pY29uJHtpc0FjdGl2ZSA/ICcgYWN0aXZlJyA6ICcnfWB9PlxuICAgICAgICAgICAgICAgIDxGaWVsZEljb24gbmFtZT17ZnQuaWNvbn0gc2l6ZT17MTR9IC8+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1sYWJlbFwiPntmLmxhYmVsIHx8ICdVbnRpdGxlZCd9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1tZXRhXCI+e2Yua2V5IHx8ICcnfSBcdTAwQjcge2Z0LmxhYmVsfTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAge2YucmVxdWlyZWQgJiYgPHNwYW4gY2xhc3NOYW1lPVwiZmllbGQtcmVxdWlyZWRcIiAvPn1cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJpY29uLWJ0blwiIG9uQ2xpY2s9eyhlKSA9PiB7IGUuc3RvcFByb3BhZ2F0aW9uKCk7IGRpc3BhdGNoKHsgdHlwZTogJ0RVUExJQ0FURV9GSUVMRCcsIHNlY3Rpb25JZHgsIGZpZWxkSWR4OiBpIH0pIH19IHRpdGxlPVwiRHVwbGljYXRlXCI+XG4gICAgICAgICAgICAgICAgICA8Q29weSBzaXplPXsxMn0gLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImljb24tYnRuXCIgb25DbGljaz17KGUpID0+IHsgZS5zdG9wUHJvcGFnYXRpb24oKTsgZGlzcGF0Y2goeyB0eXBlOiAnREVMRVRFX0ZJRUxEJywgc2VjdGlvbklkeCwgZmllbGRJZHg6IGkgfSkgfX0gdGl0bGU9XCJEZWxldGVcIj5cbiAgICAgICAgICAgICAgICAgIDxUcmFzaDIgc2l6ZT17MTJ9IC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZC1maWVsZC1hcmVhXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWRkLWZpZWxkLWJ0blwiIG9uQ2xpY2s9eygpID0+IHNldFBpY2tlck9wZW4odHJ1ZSl9PlxuICAgICAgICAgIDxQbHVzIHNpemU9ezE0fSAvPiBBZGQgRmllbGRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWljay10ZW1wbGF0ZXNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWljay10ZW1wbGF0ZXMtbGFiZWxcIj5RdWljayBBZGQ8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWljay10ZW1wbGF0ZXMtZ3JpZFwiPlxuICAgICAgICAgIHtRVUlDS19URU1QTEFURVMubWFwKChxdCwgaSkgPT4gKFxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9e2l9IGNsYXNzTmFtZT1cInF1aWNrLXRlbXBsYXRlLWNoaXBcIiBvbkNsaWNrPXsoKSA9PiBhZGRRdWlja1RlbXBsYXRlKHF0KX0+XG4gICAgICAgICAgICAgIDxGaWVsZEljb24gbmFtZT17cXQuaWNvbn0gc2l6ZT17MTJ9IC8+IHtxdC5sYWJlbH1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8Q29uZGl0aW9uYWxzQnVpbGRlciAvPlxuXG4gICAgICA8VHlwZVBpY2tlciBvcGVuPXtwaWNrZXJPcGVufSBvbkNsb3NlPXsoKSA9PiBzZXRQaWNrZXJPcGVuKGZhbHNlKX0gb25TZWxlY3Q9e2FkZEZpZWxkT2ZUeXBlfSAvPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHR5cGUgeyBGaWVsZFR5cGUsIFNjaGVtYUZpZWxkIH0gZnJvbSAnLi90eXBlcydcblxuZXhwb3J0IHR5cGUgRmllbGRUeXBlQ29uZmlnID0ge1xuICBsYWJlbDogc3RyaW5nXG4gIGljb246IHN0cmluZ1xuICBjYXRlZ29yeTogJ2Jhc2ljJyB8ICdtZWRpYScgfCAnYWR2YW5jZWQnXG4gIGRlZmF1bHRDb25maWc6IFBhcnRpYWw8U2NoZW1hRmllbGQ+XG4gIGRlbW9EZWZhdWx0OiAoZmllbGQ6IFNjaGVtYUZpZWxkKSA9PiB1bmtub3duXG4gIGN1c3RvbUluc3BlY3Rvcj86ICdxdWl6JyB8ICdncm91cCdcbn1cblxuY29uc3QgU0FNUExFX0lNQUdFUyA9IHtcbiAgcG9ydHJhaXQ6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUyOTYyNjQ1NTU5NC00ZmYwODAyY2ZiN2U/dz00MDAnLFxuICBtZW1vcnkxOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MTY1ODkxNzg1ODEtNmNkNzgzM2FlM2IyP3c9NDAwJyxcbiAgbWVtb3J5MjogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTIyNjczNjA3MjAwLTE2NGQxYjZjZTQ4Nj93PTQwMCcsXG4gIG1lbW9yeTM6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxMTk4ODYxNzUwOS1hNTdjOGEyODg2NTk/dz00MDAnLFxufVxuXG5leHBvcnQgY29uc3QgRklFTERfVFlQRVM6IFJlY29yZDxGaWVsZFR5cGUsIEZpZWxkVHlwZUNvbmZpZz4gPSB7XG4gIHRleHQ6IHtcbiAgICBsYWJlbDogJ1RleHQnLCBpY29uOiAndHlwZScsIGNhdGVnb3J5OiAnYmFzaWMnLFxuICAgIGRlZmF1bHRDb25maWc6IHsgcmVxdWlyZWQ6IGZhbHNlLCBwbGFjZWhvbGRlcjogJycsIGhpbnQ6ICcnIH0sXG4gICAgZGVtb0RlZmF1bHQ6IChmKSA9PiBmLnBsYWNlaG9sZGVyPy5yZXBsYWNlKC9eZVxcLmdcXC5cXHMqL2ksICcnKSB8fCAnU2FtcGxlIHRleHQnLFxuICB9LFxuICB0ZXh0YXJlYToge1xuICAgIGxhYmVsOiAnVGV4dCBBcmVhJywgaWNvbjogJ2FsaWduLWxlZnQnLCBjYXRlZ29yeTogJ2Jhc2ljJyxcbiAgICBkZWZhdWx0Q29uZmlnOiB7IHJlcXVpcmVkOiBmYWxzZSwgcGxhY2Vob2xkZXI6ICcnLCBoaW50OiAnJyB9LFxuICAgIGRlbW9EZWZhdWx0OiAoKSA9PiAnQSBtZXNzYWdlIGZyb20gdGhlIGhlYXJ0LicsXG4gIH0sXG4gIG51bWJlcjoge1xuICAgIGxhYmVsOiAnTnVtYmVyJywgaWNvbjogJ2hhc2gnLCBjYXRlZ29yeTogJ2Jhc2ljJyxcbiAgICBkZWZhdWx0Q29uZmlnOiB7IHJlcXVpcmVkOiBmYWxzZSwgaGludDogJycgfSxcbiAgICBkZW1vRGVmYXVsdDogKCkgPT4gMjEsXG4gIH0sXG4gIGRhdGU6IHtcbiAgICBsYWJlbDogJ0RhdGUnLCBpY29uOiAnY2FsZW5kYXInLCBjYXRlZ29yeTogJ2Jhc2ljJyxcbiAgICBkZWZhdWx0Q29uZmlnOiB7IHJlcXVpcmVkOiBmYWxzZSwgaGludDogJycgfSxcbiAgICBkZW1vRGVmYXVsdDogKCkgPT4gJzIwMDQtMDgtMTQnLFxuICB9LFxuICBjb2xvcjoge1xuICAgIGxhYmVsOiAnQ29sb3InLCBpY29uOiAncGFsZXR0ZScsIGNhdGVnb3J5OiAnYmFzaWMnLFxuICAgIGRlZmF1bHRDb25maWc6IHsgZGVmYXVsdDogJyNmZjZlYjQnIH0sXG4gICAgZGVtb0RlZmF1bHQ6ICgpID0+ICcjZmY2ZWI0JyxcbiAgfSxcbiAgdG9nZ2xlOiB7XG4gICAgbGFiZWw6ICdUb2dnbGUnLCBpY29uOiAndG9nZ2xlLWxlZnQnLCBjYXRlZ29yeTogJ2Jhc2ljJyxcbiAgICBkZWZhdWx0Q29uZmlnOiB7fSxcbiAgICBkZW1vRGVmYXVsdDogKCkgPT4gdHJ1ZSxcbiAgfSxcbiAgc2VsZWN0OiB7XG4gICAgbGFiZWw6ICdTZWxlY3QnLCBpY29uOiAnbGlzdCcsIGNhdGVnb3J5OiAnYmFzaWMnLFxuICAgIGRlZmF1bHRDb25maWc6IHsgb3B0aW9uczogWydPcHRpb24gMScsICdPcHRpb24gMiddLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICBkZW1vRGVmYXVsdDogKGYpID0+IGYub3B0aW9ucz8uWzBdIHx8ICdPcHRpb24gMScsXG4gIH0sXG4gIGltYWdlOiB7XG4gICAgbGFiZWw6ICdJbWFnZScsIGljb246ICdpbWFnZScsIGNhdGVnb3J5OiAnbWVkaWEnLFxuICAgIGRlZmF1bHRDb25maWc6IHsgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgZGVtb0RlZmF1bHQ6ICgpID0+IFNBTVBMRV9JTUFHRVMucG9ydHJhaXQsXG4gIH0sXG4gIGltYWdlX2FycmF5OiB7XG4gICAgbGFiZWw6ICdQaG90byBHYWxsZXJ5JywgaWNvbjogJ2ltYWdlcycsIGNhdGVnb3J5OiAnbWVkaWEnLFxuICAgIGRlZmF1bHRDb25maWc6IHsgbWF4OiA4IH0sXG4gICAgZGVtb0RlZmF1bHQ6ICgpID0+IFtTQU1QTEVfSU1BR0VTLm1lbW9yeTEsIFNBTVBMRV9JTUFHRVMubWVtb3J5MiwgU0FNUExFX0lNQUdFUy5tZW1vcnkzXSxcbiAgfSxcbiAgdmlkZW86IHtcbiAgICBsYWJlbDogJ1ZpZGVvJywgaWNvbjogJ3ZpZGVvJywgY2F0ZWdvcnk6ICdtZWRpYScsXG4gICAgZGVmYXVsdENvbmZpZzogeyByZXF1aXJlZDogZmFsc2UgfSxcbiAgICBkZW1vRGVmYXVsdDogKCkgPT4gJycsXG4gIH0sXG4gIGF1ZGlvOiB7XG4gICAgbGFiZWw6ICdBdWRpbycsIGljb246ICdtdXNpYycsIGNhdGVnb3J5OiAnbWVkaWEnLFxuICAgIGRlZmF1bHRDb25maWc6IHt9LFxuICAgIGRlbW9EZWZhdWx0OiAoKSA9PiAoeyB1cmw6ICdodHRwczovL3d3dy5zb3VuZGhlbGl4LmNvbS9leGFtcGxlcy9tcDMvU291bmRIZWxpeC1Tb25nLTEubXAzJyB9KSxcbiAgfSxcbiAgcXVpejoge1xuICAgIGxhYmVsOiAnUXVpeicsIGljb246ICdoZWxwLWNpcmNsZScsIGNhdGVnb3J5OiAnYWR2YW5jZWQnLFxuICAgIGRlZmF1bHRDb25maWc6IHt9LFxuICAgIGN1c3RvbUluc3BlY3RvcjogJ3F1aXonLFxuICAgIGRlbW9EZWZhdWx0OiAoKSA9PiBbeyBpZDogJ3ExJywgdGV4dDogJ1doYXQgaXMgbXkgZmF2b3VyaXRlIGNvbG9yPycsIG9wdGlvbnM6IFsnQmx1ZScsICdSZWQnLCAnR3JlZW4nXSwgY29ycmVjdEluZGV4OiAwIH1dLFxuICB9LFxuICBncm91cDoge1xuICAgIGxhYmVsOiAnR3JvdXAnLCBpY29uOiAnbGF5ZXJzJywgY2F0ZWdvcnk6ICdhZHZhbmNlZCcsXG4gICAgZGVmYXVsdENvbmZpZzogeyBmaWVsZHM6IFtdIH0sXG4gICAgY3VzdG9tSW5zcGVjdG9yOiAnZ3JvdXAnLFxuICAgIGRlbW9EZWZhdWx0OiAoKSA9PiAoe30pLFxuICB9LFxuICBncm91cF9hcnJheToge1xuICAgIGxhYmVsOiAnUmVwZWF0aW5nIEdyb3VwJywgaWNvbjogJ2NvcHknLCBjYXRlZ29yeTogJ2FkdmFuY2VkJyxcbiAgICBkZWZhdWx0Q29uZmlnOiB7IGZpZWxkczogW10gfSxcbiAgICBjdXN0b21JbnNwZWN0b3I6ICdncm91cCcsXG4gICAgZGVtb0RlZmF1bHQ6ICgpID0+IFt7fV0sXG4gIH0sXG59XG5cbmV4cG9ydCBjb25zdCBGSUVMRF9DQVRFR09SSUVTID0gW1xuICB7IGtleTogJ2Jhc2ljJyBhcyBjb25zdCwgbGFiZWw6ICdCYXNpYycgfSxcbiAgeyBrZXk6ICdtZWRpYScgYXMgY29uc3QsIGxhYmVsOiAnTWVkaWEnIH0sXG4gIHsga2V5OiAnYWR2YW5jZWQnIGFzIGNvbnN0LCBsYWJlbDogJ0FkdmFuY2VkJyB9LFxuXVxuIiwgImltcG9ydCB0eXBlIHsgU2NoZW1hRmllbGQgfSBmcm9tICcuL3R5cGVzJ1xuXG5leHBvcnQgdHlwZSBRdWlja1RlbXBsYXRlID0ge1xuICBsYWJlbDogc3RyaW5nXG4gIGljb246IHN0cmluZ1xuICBmaWVsZDogU2NoZW1hRmllbGRcbn1cblxuZXhwb3J0IGNvbnN0IFFVSUNLX1RFTVBMQVRFUzogUXVpY2tUZW1wbGF0ZVtdID0gW1xuICB7IGxhYmVsOiAnUmVjaXBpZW50IE5hbWUnLCBpY29uOiAndXNlcicsIGZpZWxkOiB7IGtleTogJ3JlY2lwaWVudE5hbWUnLCBsYWJlbDogJ1RoZWlyIG5hbWUnLCB0eXBlOiAndGV4dCcsIHJlcXVpcmVkOiB0cnVlLCBwbGFjZWhvbGRlcjogJ2UuZy4gUHJpeWEnIH0gfSxcbiAgeyBsYWJlbDogJ1NlbmRlciBOYW1lJywgaWNvbjogJ3VzZXItY2hlY2snLCBmaWVsZDogeyBrZXk6ICdzZW5kZXJOYW1lJywgbGFiZWw6ICdZb3VyIG5hbWUnLCB0eXBlOiAndGV4dCcsIHJlcXVpcmVkOiB0cnVlIH0gfSxcbiAgeyBsYWJlbDogJ1Bob3RvcycsIGljb246ICdpbWFnZXMnLCBmaWVsZDogeyBrZXk6ICdwaG90b3MnLCBsYWJlbDogJ0FkZCBwaG90b3MnLCB0eXBlOiAnaW1hZ2VfYXJyYXknLCBtYXg6IDggfSB9LFxuICB7IGxhYmVsOiAnQ292ZXIgUGhvdG8nLCBpY29uOiAnaW1hZ2UnLCBmaWVsZDogeyBrZXk6ICdjb3ZlclBob3RvJywgbGFiZWw6ICdDb3ZlciBwaG90bycsIHR5cGU6ICdpbWFnZScsIHJlcXVpcmVkOiB0cnVlLCBhc3BlY3RSYXRpbzogJzM6NCcgfSB9LFxuICB7IGxhYmVsOiAnU29uZycsIGljb246ICdtdXNpYycsIGZpZWxkOiB7IGtleTogJ3NvbmcnLCBsYWJlbDogJ0FkZCBhIHNvbmcnLCB0eXBlOiAnYXVkaW8nIH0gfSxcbiAgeyBsYWJlbDogJ01lc3NhZ2UnLCBpY29uOiAnbWVzc2FnZS1zcXVhcmUnLCBmaWVsZDogeyBrZXk6ICdwZXJzb25hbE1lc3NhZ2UnLCBsYWJlbDogJ1lvdXIgbWVzc2FnZScsIHR5cGU6ICd0ZXh0YXJlYScsIHJlcXVpcmVkOiB0cnVlLCBwbGFjZWhvbGRlcjogJ1dyaXRlIHNvbWV0aGluZyBmcm9tIHRoZSBoZWFydC4uLicgfSB9LFxuICB7IGxhYmVsOiAnUXVpeicsIGljb246ICdoZWxwLWNpcmNsZScsIGZpZWxkOiB7IGtleTogJ3F1aXonLCBsYWJlbDogJ1F1aXogcXVlc3Rpb25zJywgdHlwZTogJ3F1aXonIH0gfSxcbiAgeyBsYWJlbDogJ0JpcnRoZGF5JywgaWNvbjogJ2NhbGVuZGFyJywgZmllbGQ6IHsga2V5OiAnZGF0ZU9mQmlydGgnLCBsYWJlbDogJ1RoZWlyIGJpcnRoZGF5JywgdHlwZTogJ2RhdGUnIH0gfSxcbiAgeyBsYWJlbDogJ0NvbG9yJywgaWNvbjogJ3BhbGV0dGUnLCBmaWVsZDogeyBrZXk6ICdhY2NlbnRDb2xvcicsIGxhYmVsOiAnVGhlbWUgY29sb3VyJywgdHlwZTogJ2NvbG9yJywgZGVmYXVsdDogJyNmZjZlYjQnLCBwcmVzZXRzOiBbJyNmZjZlYjQnLCAnIzYzNjZmMScsICcjZjU5ZTBiJywgJyMxMGI5ODEnLCAnI2VjNDg5OScsICcjOGI1Y2Y2J10gfSB9LFxuXVxuXG5leHBvcnQgdHlwZSBEZXBJdGVtID0ge1xuICBuYW1lOiBzdHJpbmdcbiAgZGVzYzogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBBVkFJTEFCTEVfREVQUzogRGVwSXRlbVtdID0gW1xuICB7IG5hbWU6ICdmcmFtZXItbW90aW9uJywgZGVzYzogJ0FuaW1hdGlvbiBsaWJyYXJ5JyB9LFxuICB7IG5hbWU6ICdjYW52YXMtY29uZmV0dGknLCBkZXNjOiAnQ29uZmV0dGkgZWZmZWN0cycgfSxcbiAgeyBuYW1lOiAnaG93bGVyJywgZGVzYzogJ0FkdmFuY2VkIGF1ZGlvJyB9LFxuICB7IG5hbWU6ICd0aHJlZScsIGRlc2M6ICczRCByZW5kZXJpbmcnIH0sXG4gIHsgbmFtZTogJ0ByZWFjdC10aHJlZS9maWJlcicsIGRlc2M6ICdSZWFjdCBUaHJlZS5qcycgfSxcbiAgeyBuYW1lOiAnQHJlYWN0LXRocmVlL2RyZWknLCBkZXNjOiAnVGhyZWUuanMgaGVscGVycycgfSxcbiAgeyBuYW1lOiAncmVhY3QtcGFnZWZsaXAnLCBkZXNjOiAnRmxpcGJvb2sgZWZmZWN0JyB9LFxuICB7IG5hbWU6ICdyZWFjdC1jb3VudHVwJywgZGVzYzogJ051bWJlciBhbmltYXRpb24nIH0sXG4gIHsgbmFtZTogJ3JlYWN0LXR5cGUtYW5pbWF0aW9uJywgZGVzYzogJ1R5cGV3cml0ZXIgdGV4dCcgfSxcbiAgeyBuYW1lOiAncmVhY3QtcGFyYWxsYXgtdGlsdCcsIGRlc2M6ICdUaWx0L3BhcmFsbGF4JyB9LFxuICB7IG5hbWU6ICdlbWJsYS1jYXJvdXNlbC1yZWFjdCcsIGRlc2M6ICdDYXJvdXNlbC9zbGlkZXInIH0sXG4gIHsgbmFtZTogJ2JhbGxvb25zLWpzJywgZGVzYzogJ0JhbGxvb24gZWZmZWN0cycgfSxcbiAgeyBuYW1lOiAnbG90dGllLXJlYWN0JywgZGVzYzogJ0xvdHRpZSBhbmltYXRpb25zJyB9LFxuXVxuIiwgImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU2VhcmNoLCBYIH0gZnJvbSAnbHVjaWRlLXJlYWN0J1xuaW1wb3J0IHsgRklFTERfVFlQRVMsIEZJRUxEX0NBVEVHT1JJRVMgfSBmcm9tICcuLi9maWVsZC1yZWdpc3RyeSdcbmltcG9ydCB0eXBlIHsgRmllbGRUeXBlIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgKiBhcyBJY29ucyBmcm9tICdsdWNpZGUtcmVhY3QnXG5cbmZ1bmN0aW9uIEZpZWxkSWNvbih7IG5hbWUsIHNpemUgPSAxNiB9OiB7IG5hbWU6IHN0cmluZzsgc2l6ZT86IG51bWJlciB9KSB7XG4gIGNvbnN0IGljb25OYW1lID0gbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSkucmVwbGFjZSgvLShbYS16XSkvZywgKF8sIGMpID0+IGMudG9VcHBlckNhc2UoKSlcbiAgY29uc3QgSWNvbiA9IChJY29ucyBhcyBhbnkpW2ljb25OYW1lXVxuICByZXR1cm4gSWNvbiA/IDxJY29uIHNpemU9e3NpemV9IC8+IDogbnVsbFxufVxuXG50eXBlIFByb3BzID0ge1xuICBvcGVuOiBib29sZWFuXG4gIG9uQ2xvc2U6ICgpID0+IHZvaWRcbiAgb25TZWxlY3Q6ICh0eXBlOiBGaWVsZFR5cGUpID0+IHZvaWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFR5cGVQaWNrZXIoeyBvcGVuLCBvbkNsb3NlLCBvblNlbGVjdCB9OiBQcm9wcykge1xuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAob3Blbikge1xuICAgICAgc2V0U2VhcmNoKCcnKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiBpbnB1dFJlZi5jdXJyZW50Py5mb2N1cygpLCA1MClcbiAgICB9XG4gIH0sIFtvcGVuXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghb3BlbikgcmV0dXJuXG4gICAgY29uc3Qgb25LZXkgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4geyBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSBvbkNsb3NlKCkgfVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXkpXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXkpXG4gIH0sIFtvcGVuLCBvbkNsb3NlXSlcblxuICBpZiAoIW9wZW4pIHJldHVybiBudWxsXG5cbiAgY29uc3QgcSA9IHNlYXJjaC50b0xvd2VyQ2FzZSgpXG4gIGNvbnN0IGVudHJpZXMgPSAoT2JqZWN0LmVudHJpZXMoRklFTERfVFlQRVMpIGFzIFtGaWVsZFR5cGUsIHR5cGVvZiBGSUVMRF9UWVBFU1tGaWVsZFR5cGVdXVtdKVxuICAgIC5maWx0ZXIoKFtrZXksIGNmZ10pID0+ICFxIHx8IGtleS5pbmNsdWRlcyhxKSB8fCBjZmcubGFiZWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxKSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtb3ZlcmxheVwiIG9uQ2xpY2s9e29uQ2xvc2V9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0eXBlLXBpY2tlclwiIG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0eXBlLXBpY2tlci1oZWFkZXJcIj5cbiAgICAgICAgICA8aDM+QWRkIEZpZWxkPC9oMz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImljb24tYnRuXCIgb25DbGljaz17b25DbG9zZX0+PFggc2l6ZT17MTZ9IC8+PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR5cGUtcGlja2VyLXNlYXJjaFwiPlxuICAgICAgICAgIDxTZWFyY2ggc2l6ZT17MTR9IC8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZmllbGQgdHlwZXMuLi5cIlxuICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0eXBlLXBpY2tlci1ib2R5XCI+XG4gICAgICAgICAge0ZJRUxEX0NBVEVHT1JJRVMubWFwKChjYXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gZW50cmllcy5maWx0ZXIoKFssIGNmZ10pID0+IGNmZy5jYXRlZ29yeSA9PT0gY2F0LmtleSlcbiAgICAgICAgICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHJldHVybiBudWxsXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17Y2F0LmtleX0gY2xhc3NOYW1lPVwidHlwZS1waWNrZXItY2F0ZWdvcnlcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR5cGUtcGlja2VyLWNhdGVnb3J5LWxhYmVsXCI+e2NhdC5sYWJlbH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR5cGUtcGlja2VyLWdyaWRcIj5cbiAgICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKFt0eXBlLCBjZmddKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e3R5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHlwZS1waWNrZXItaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25TZWxlY3QodHlwZSl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0eXBlLXBpY2tlci1pY29uXCI+PEZpZWxkSWNvbiBuYW1lPXtjZmcuaWNvbn0gc2l6ZT17MTh9IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInR5cGUtcGlja2VyLWxhYmVsXCI+e2NmZy5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICAgIHtlbnRyaWVzLmxlbmd0aCA9PT0gMCAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR5cGUtcGlja2VyLWVtcHR5XCI+Tm8gZmllbGQgdHlwZXMgbWF0Y2ggXCJ7c2VhcmNofVwiPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQbHVzLCBUcmFzaDIsIEdpdEJyYW5jaCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCdcbmltcG9ydCB7IHVzZVN0dWRpbyB9IGZyb20gJy4uL3N0YXRlJ1xuaW1wb3J0IHsgVGFnSW5wdXQgfSBmcm9tICcuL2NvbW1vbi9UYWdJbnB1dCdcbmltcG9ydCB0eXBlIHsgU2NoZW1hQ29uZGl0aW9uYWwgfSBmcm9tICcuLi90eXBlcydcblxuZXhwb3J0IGZ1bmN0aW9uIENvbmRpdGlvbmFsc0J1aWxkZXIoKSB7XG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VTdHVkaW8oKVxuICBjb25zdCBjb25kaXRpb25hbHMgPSBzdGF0ZS53b3JraW5nLnNjaGVtYS5jb25kaXRpb25hbHMgfHwgW11cbiAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBhbGxGaWVsZHMgPSBzdGF0ZS53b3JraW5nLnNjaGVtYS5zZWN0aW9ucy5mbGF0TWFwKChzKSA9PiBzLmZpZWxkcylcbiAgY29uc3QgYWxsS2V5cyA9IGFsbEZpZWxkcy5tYXAoKGYpID0+IGYua2V5KVxuXG4gIGNvbnN0IGFkZENvbmRpdGlvbmFsID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbmQ6IFNjaGVtYUNvbmRpdGlvbmFsID0ge1xuICAgICAgaWY6IHsgZmllbGQ6IGFsbEtleXNbMF0gfHwgJycsIGVxdWFsczogJycgfSxcbiAgICAgIHNob3c6IFtdLFxuICAgIH1cbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdBRERfQ09ORElUSU9OQUwnLCBjb25kaXRpb25hbDogY29uZCB9KVxuICAgIHNldEV4cGFuZGVkKHRydWUpXG4gIH1cblxuICBpZiAoIWV4cGFuZGVkICYmIGNvbmRpdGlvbmFscy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25kaXRpb25hbHMtY29sbGFwc2VkXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY29uZGl0aW9uYWxzLXRvZ2dsZVwiIG9uQ2xpY2s9e2FkZENvbmRpdGlvbmFsfT5cbiAgICAgICAgICA8R2l0QnJhbmNoIHNpemU9ezEyfSAvPiBBZGQgQ29uZGl0aW9uYWwgTG9naWNcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uZGl0aW9uYWxzLXNlY3Rpb25cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uZGl0aW9uYWxzLWhlYWRlclwiIG9uQ2xpY2s9eygpID0+IHNldEV4cGFuZGVkKCFleHBhbmRlZCl9PlxuICAgICAgICA8R2l0QnJhbmNoIHNpemU9ezE0fSAvPlxuICAgICAgICA8c3Bhbj5Db25kaXRpb25hbHM8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbmRpdGlvbmFscy1jb3VudFwiPntjb25kaXRpb25hbHMubGVuZ3RofTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29uZGl0aW9uYWxzLWNoZXZyb25cIj57ZXhwYW5kZWQgPyAnXHUyNUJFJyA6ICdcdTI1QjgnfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7ZXhwYW5kZWQgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbmRpdGlvbmFscy1ib2R5XCI+XG4gICAgICAgICAge2NvbmRpdGlvbmFscy5tYXAoKGNvbmQsIGkpID0+IChcbiAgICAgICAgICAgIDxDb25kaXRpb25hbFJvd1xuICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgIGNvbmRpdGlvbmFsPXtjb25kfVxuICAgICAgICAgICAgICBpbmRleD17aX1cbiAgICAgICAgICAgICAgYWxsS2V5cz17YWxsS2V5c31cbiAgICAgICAgICAgICAgYWxsRmllbGRzPXthbGxGaWVsZHN9XG4gICAgICAgICAgICAgIG9uVXBkYXRlPXsoYykgPT4gZGlzcGF0Y2goeyB0eXBlOiAnVVBEQVRFX0NPTkRJVElPTkFMJywgaWR4OiBpLCBjb25kaXRpb25hbDogYyB9KX1cbiAgICAgICAgICAgICAgb25EZWxldGU9eygpID0+IGRpc3BhdGNoKHsgdHlwZTogJ0RFTEVURV9DT05ESVRJT05BTCcsIGlkeDogaSB9KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhZGQtZmllbGQtYnRuXCIgb25DbGljaz17YWRkQ29uZGl0aW9uYWx9IHN0eWxlPXt7IG1hcmdpblRvcDogNCB9fT5cbiAgICAgICAgICAgIDxQbHVzIHNpemU9ezEyfSAvPiBBZGQgUnVsZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZnVuY3Rpb24gQ29uZGl0aW9uYWxSb3coe1xuICBjb25kaXRpb25hbCwgaW5kZXgsIGFsbEtleXMsIGFsbEZpZWxkcywgb25VcGRhdGUsIG9uRGVsZXRlLFxufToge1xuICBjb25kaXRpb25hbDogU2NoZW1hQ29uZGl0aW9uYWxcbiAgaW5kZXg6IG51bWJlclxuICBhbGxLZXlzOiBzdHJpbmdbXVxuICBhbGxGaWVsZHM6IHsga2V5OiBzdHJpbmc7IGxhYmVsOiBzdHJpbmc7IHR5cGU6IHN0cmluZzsgb3B0aW9ucz86IHN0cmluZ1tdIH1bXVxuICBvblVwZGF0ZTogKGM6IFNjaGVtYUNvbmRpdGlvbmFsKSA9PiB2b2lkXG4gIG9uRGVsZXRlOiAoKSA9PiB2b2lkXG59KSB7XG4gIGNvbnN0IHNvdXJjZUZpZWxkID0gYWxsRmllbGRzLmZpbmQoKGYpID0+IGYua2V5ID09PSBjb25kaXRpb25hbC5pZi5maWVsZClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uZGl0aW9uYWwtY2FyZFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25kaXRpb25hbC1jYXJkLWhlYWRlclwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb25kaXRpb25hbC1jYXJkLW51bVwiPntpbmRleCArIDF9PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb25kaXRpb25hbC1jYXJkLWxhYmVsXCI+SUY8L3NwYW4+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaWNvbi1idG5cIiBvbkNsaWNrPXtvbkRlbGV0ZX0gdGl0bGU9XCJEZWxldGUgcnVsZVwiPlxuICAgICAgICAgIDxUcmFzaDIgc2l6ZT17MTJ9IC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uZGl0aW9uYWwtY2FyZC1ib2R5XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uZGl0aW9uYWwtcm93XCI+XG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiXG4gICAgICAgICAgICB2YWx1ZT17Y29uZGl0aW9uYWwuaWYuZmllbGR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uVXBkYXRlKHsgLi4uY29uZGl0aW9uYWwsIGlmOiB7IC4uLmNvbmRpdGlvbmFsLmlmLCBmaWVsZDogZS50YXJnZXQudmFsdWUgfSB9KX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IGZpZWxkLi4uPC9vcHRpb24+XG4gICAgICAgICAgICB7YWxsS2V5cy5tYXAoKGspID0+IChcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2t9IHZhbHVlPXtrfT57a308L29wdGlvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbmRpdGlvbmFsLWVxdWFsc1wiPj08L3NwYW4+XG4gICAgICAgICAge3NvdXJjZUZpZWxkPy50eXBlID09PSAnc2VsZWN0JyAmJiBzb3VyY2VGaWVsZC5vcHRpb25zID8gKFxuICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e1N0cmluZyhjb25kaXRpb25hbC5pZi5lcXVhbHMpfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uVXBkYXRlKHsgLi4uY29uZGl0aW9uYWwsIGlmOiB7IC4uLmNvbmRpdGlvbmFsLmlmLCBlcXVhbHM6IGUudGFyZ2V0LnZhbHVlIH0gfSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgdmFsdWUuLi48L29wdGlvbj5cbiAgICAgICAgICAgICAge3NvdXJjZUZpZWxkLm9wdGlvbnMubWFwKChvcHQpID0+IChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17b3B0fSB2YWx1ZT17b3B0fT57b3B0fTwvb3B0aW9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICkgOiBzb3VyY2VGaWVsZD8udHlwZSA9PT0gJ3RvZ2dsZScgPyAoXG4gICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIlxuICAgICAgICAgICAgICB2YWx1ZT17U3RyaW5nKGNvbmRpdGlvbmFsLmlmLmVxdWFscyl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25VcGRhdGUoeyAuLi5jb25kaXRpb25hbCwgaWY6IHsgLi4uY29uZGl0aW9uYWwuaWYsIGVxdWFsczogZS50YXJnZXQudmFsdWUgPT09ICd0cnVlJyB9IH0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidHJ1ZVwiPnRydWU8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZhbHNlXCI+ZmFsc2U8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtTdHJpbmcoY29uZGl0aW9uYWwuaWYuZXF1YWxzID8/ICcnKX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvblVwZGF0ZSh7IC4uLmNvbmRpdGlvbmFsLCBpZjogeyAuLi5jb25kaXRpb25hbC5pZiwgZXF1YWxzOiBlLnRhcmdldC52YWx1ZSB9IH0pfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInZhbHVlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25kaXRpb25hbC10aGVuXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29uZGl0aW9uYWwtY2FyZC1sYWJlbFwiPlNIT1c8L3NwYW4+XG4gICAgICAgICAgPFRhZ0lucHV0XG4gICAgICAgICAgICB2YWx1ZXM9e2NvbmRpdGlvbmFsLnNob3d9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHNob3cpID0+IG9uVXBkYXRlKHsgLi4uY29uZGl0aW9uYWwsIHNob3cgfSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgZmllbGQga2V5ICsgRW50ZXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB0eXBlIEtleWJvYXJkRXZlbnQgfSBmcm9tICdyZWFjdCdcblxudHlwZSBQcm9wcyA9IHtcbiAgdmFsdWVzOiBzdHJpbmdbXVxuICBvbkNoYW5nZTogKHZhbHVlczogc3RyaW5nW10pID0+IHZvaWRcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRhZ0lucHV0KHsgdmFsdWVzLCBvbkNoYW5nZSwgcGxhY2Vob2xkZXIgfTogUHJvcHMpIHtcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbClcblxuICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGU6IEtleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicgJiYgaW5wdXQudHJpbSgpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIG9uQ2hhbmdlKFsuLi52YWx1ZXMsIGlucHV0LnRyaW0oKV0pXG4gICAgICBzZXRJbnB1dCgnJylcbiAgICB9XG4gICAgaWYgKGUua2V5ID09PSAnQmFja3NwYWNlJyAmJiBpbnB1dCA9PT0gJycgJiYgdmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIG9uQ2hhbmdlKHZhbHVlcy5zbGljZSgwLCAtMSkpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcmVtb3ZlID0gKGlkeDogbnVtYmVyKSA9PiB7XG4gICAgb25DaGFuZ2UodmFsdWVzLmZpbHRlcigoXywgaSkgPT4gaSAhPT0gaWR4KSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0YWctaW5wdXQtY29udGFpbmVyXCIgb25DbGljaz17KCkgPT4gaW5wdXRSZWYuY3VycmVudD8uZm9jdXMoKX0+XG4gICAgICB7dmFsdWVzLm1hcCgodiwgaSkgPT4gKFxuICAgICAgICA8c3BhbiBrZXk9e2l9IGNsYXNzTmFtZT1cInRhZy1jaGlwXCI+XG4gICAgICAgICAge3Z9XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByZW1vdmUoaSl9PiZ0aW1lczs8L2J1dHRvbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgKSl9XG4gICAgICA8aW5wdXRcbiAgICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgICAgY2xhc3NOYW1lPVwidGFnLWlucHV0XCJcbiAgICAgICAgdmFsdWU9e2lucHV0fVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldElucHV0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufVxuICAgICAgICBwbGFjZWhvbGRlcj17dmFsdWVzLmxlbmd0aCA9PT0gMCA/IHBsYWNlaG9sZGVyIDogJyd9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgVHJhc2gyIH0gZnJvbSAnbHVjaWRlLXJlYWN0J1xuaW1wb3J0IHsgdXNlU3R1ZGlvIH0gZnJvbSAnLi4vc3RhdGUnXG5pbXBvcnQgeyBGSUVMRF9UWVBFUyB9IGZyb20gJy4uL2ZpZWxkLXJlZ2lzdHJ5J1xuaW1wb3J0IHsgUXVpekJ1aWxkZXIgfSBmcm9tICcuL1F1aXpCdWlsZGVyJ1xuaW1wb3J0IHsgVGFnSW5wdXQgfSBmcm9tICcuL2NvbW1vbi9UYWdJbnB1dCdcbmltcG9ydCB0eXBlIHsgU2NoZW1hRmllbGQsIFF1aXpRdWVzdGlvbiB9IGZyb20gJy4uL3R5cGVzJ1xuXG5leHBvcnQgZnVuY3Rpb24gSW5zcGVjdG9yKCkge1xuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlU3R1ZGlvKClcbiAgY29uc3Qgc2VjdGlvbklkeCA9IHN0YXRlLnVpLnNlbGVjdGVkU2VjdGlvblxuICBjb25zdCBmaWVsZElkeCA9IHN0YXRlLnVpLnNlbGVjdGVkRmllbGRcbiAgY29uc3Qgc2VjdGlvbiA9IHN0YXRlLndvcmtpbmcuc2NoZW1hLnNlY3Rpb25zW3NlY3Rpb25JZHhdXG5cbiAgaWYgKCFzZWN0aW9uKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtaW5zcGVjdG9yXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zcGVjdG9yLWVtcHR5XCI+XG4gICAgICAgICAgPHA+U2VsZWN0IGEgc2VjdGlvbiB0byBpbnNwZWN0PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGNvbnN0IGZpZWxkID0gZmllbGRJZHggPj0gMCA/IHNlY3Rpb24uZmllbGRzW2ZpZWxkSWR4XSA6IG51bGxcblxuICBpZiAoIWZpZWxkKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtaW5zcGVjdG9yXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zcGVjdG9yLXNlY3Rpb25cIj5cbiAgICAgICAgICA8aDM+U2VjdGlvbjwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPkxhYmVsPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlY3Rpb24ubGFiZWx9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnVVBEQVRFX1NFQ1RJT04nLCBpZHg6IHNlY3Rpb25JZHgsIHNlY3Rpb246IHsgLi4uc2VjdGlvbiwgbGFiZWw6IGUudGFyZ2V0LnZhbHVlIH0gfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5LZXk8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXQgZm9udC1tb25vXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlY3Rpb24ua2V5fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGRpc3BhdGNoKHsgdHlwZTogJ1VQREFURV9TRUNUSU9OJywgaWR4OiBzZWN0aW9uSWR4LCBzZWN0aW9uOiB7IC4uLnNlY3Rpb24sIGtleTogZS50YXJnZXQudmFsdWUgfSB9KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCJcbiAgICAgICAgICAgICAgcm93cz17M31cbiAgICAgICAgICAgICAgdmFsdWU9e3NlY3Rpb24uZGVzY3JpcHRpb24gfHwgJyd9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnVVBEQVRFX1NFQ1RJT04nLCBpZHg6IHNlY3Rpb25JZHgsIHNlY3Rpb246IHsgLi4uc2VjdGlvbiwgZGVzY3JpcHRpb246IGUudGFyZ2V0LnZhbHVlIHx8IHVuZGVmaW5lZCB9IH0pfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk9wdGlvbmFsIGhlbHAgdGV4dCBmb3IgdGhpcyBzZWN0aW9uXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPkljb248L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIlxuICAgICAgICAgICAgICB2YWx1ZT17c2VjdGlvbi5pY29uIHx8ICcnfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGRpc3BhdGNoKHsgdHlwZTogJ1VQREFURV9TRUNUSU9OJywgaWR4OiBzZWN0aW9uSWR4LCBzZWN0aW9uOiB7IC4uLnNlY3Rpb24sIGljb246IGUudGFyZ2V0LnZhbHVlIHx8IHVuZGVmaW5lZCB9IH0pfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkx1Y2lkZSBpY29uIG5hbWVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogMTIgfX0+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1kYW5nZXJcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdERUxFVEVfU0VDVElPTicsIGlkeDogc2VjdGlvbklkeCB9KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFRyYXNoMiBzaXplPXsxMn0gLz4gRGVsZXRlIFNlY3Rpb25cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGNvbnN0IGZ0ID0gRklFTERfVFlQRVNbZmllbGQudHlwZV1cbiAgY29uc3QgdXBkYXRlRmllbGQgPSAocGF0Y2g6IFBhcnRpYWw8U2NoZW1hRmllbGQ+KSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnVVBEQVRFX0ZJRUxEJywgc2VjdGlvbklkeCwgZmllbGRJZHgsIGZpZWxkOiB7IC4uLmZpZWxkLCAuLi5wYXRjaCB9IH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtaW5zcGVjdG9yXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImluc3BlY3Rvci1oZWFkZXJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5zcGVjdG9yLXR5cGUtYmFkZ2VcIj57ZnQ/LmxhYmVsIHx8IGZpZWxkLnR5cGV9PC9zcGFuPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zcGVjdG9yLWZpZWxkc1wiPlxuICAgICAgICB7LyogQ29tbW9uIHByb3BlcnRpZXMgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+TGFiZWw8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCIgdmFsdWU9e2ZpZWxkLmxhYmVsfSBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZUZpZWxkKHsgbGFiZWw6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPktleTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0taW5wdXQgZm9udC1tb25vXCIgdmFsdWU9e2ZpZWxkLmtleX0gb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVGaWVsZCh7IGtleTogZS50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtmaWVsZC50eXBlICE9PSAnZ3JvdXAnICYmIGZpZWxkLnR5cGUgIT09ICdncm91cF9hcnJheScgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cC1yb3dcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+UmVxdWlyZWQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e2ZpZWxkLnJlcXVpcmVkIHx8IGZhbHNlfSBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZUZpZWxkKHsgcmVxdWlyZWQ6IGUudGFyZ2V0LmNoZWNrZWQgfSl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIFRleHQgLyBUZXh0YXJlYSAqL31cbiAgICAgICAgeyhmaWVsZC50eXBlID09PSAndGV4dCcgfHwgZmllbGQudHlwZSA9PT0gJ3RleHRhcmVhJykgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5QbGFjZWhvbGRlcjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCIgdmFsdWU9e2ZpZWxkLnBsYWNlaG9sZGVyIHx8ICcnfSBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZUZpZWxkKHsgcGxhY2Vob2xkZXI6IGUudGFyZ2V0LnZhbHVlIHx8IHVuZGVmaW5lZCB9KX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+SGludDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCIgdmFsdWU9e2ZpZWxkLmhpbnQgfHwgJyd9IG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlRmllbGQoeyBoaW50OiBlLnRhcmdldC52YWx1ZSB8fCB1bmRlZmluZWQgfSl9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zcGVjdG9yLWRpdmlkZXJcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnNwZWN0b3ItY29uc3RyYWludC1oZWFkZXJcIj5Db25zdHJhaW50czwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+TWluIGxlbmd0aDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCIgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtmaWVsZC5jb25zdHJhaW50cz8ubWluTGVuZ3RoID8/ICcnfSBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZUZpZWxkKHsgY29uc3RyYWludHM6IHsgLi4uZmllbGQuY29uc3RyYWludHMsIG1pbkxlbmd0aDogZS50YXJnZXQudmFsdWUgPyBOdW1iZXIoZS50YXJnZXQudmFsdWUpIDogdW5kZWZpbmVkIH0gfSl9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPk1heCBsZW5ndGg8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiIHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17ZmllbGQuY29uc3RyYWludHM/Lm1heExlbmd0aCA/PyAnJ30gb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVGaWVsZCh7IGNvbnN0cmFpbnRzOiB7IC4uLmZpZWxkLmNvbnN0cmFpbnRzLCBtYXhMZW5ndGg6IGUudGFyZ2V0LnZhbHVlID8gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSA6IHVuZGVmaW5lZCB9IH0pfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7ZmllbGQudHlwZSA9PT0gJ3RleHRhcmVhJyAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+TWF4IHdvcmRzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiIHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17ZmllbGQuY29uc3RyYWludHM/Lm1heFdvcmRzID8/ICcnfSBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZUZpZWxkKHsgY29uc3RyYWludHM6IHsgLi4uZmllbGQuY29uc3RyYWludHMsIG1heFdvcmRzOiBlLnRhcmdldC52YWx1ZSA/IE51bWJlcihlLnRhcmdldC52YWx1ZSkgOiB1bmRlZmluZWQgfSB9KX0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBOdW1iZXIgKi99XG4gICAgICAgIHtmaWVsZC50eXBlID09PSAnbnVtYmVyJyAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPkhpbnQ8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiIHZhbHVlPXtmaWVsZC5oaW50IHx8ICcnfSBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZUZpZWxkKHsgaGludDogZS50YXJnZXQudmFsdWUgfHwgdW5kZWZpbmVkIH0pfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluc3BlY3Rvci1kaXZpZGVyXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zcGVjdG9yLWNvbnN0cmFpbnQtaGVhZGVyXCI+Q29uc3RyYWludHM8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPk1pbjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCIgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtmaWVsZC5jb25zdHJhaW50cz8ubWluID8/ICcnfSBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZUZpZWxkKHsgY29uc3RyYWludHM6IHsgLi4uZmllbGQuY29uc3RyYWludHMsIG1pbjogZS50YXJnZXQudmFsdWUgPyBOdW1iZXIoZS50YXJnZXQudmFsdWUpIDogdW5kZWZpbmVkIH0gfSl9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPk1heDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCIgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtmaWVsZC5jb25zdHJhaW50cz8ubWF4ID8/ICcnfSBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZUZpZWxkKHsgY29uc3RyYWludHM6IHsgLi4uZmllbGQuY29uc3RyYWludHMsIG1heDogZS50YXJnZXQudmFsdWUgPyBOdW1iZXIoZS50YXJnZXQudmFsdWUpIDogdW5kZWZpbmVkIH0gfSl9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlN0ZXA8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiIHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17ZmllbGQuY29uc3RyYWludHM/LnN0ZXAgPz8gJyd9IG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlRmllbGQoeyBjb25zdHJhaW50czogeyAuLi5maWVsZC5jb25zdHJhaW50cywgc3RlcDogZS50YXJnZXQudmFsdWUgPyBOdW1iZXIoZS50YXJnZXQudmFsdWUpIDogdW5kZWZpbmVkIH0gfSl9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlVuaXQ8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiIHZhbHVlPXtmaWVsZC5jb25zdHJhaW50cz8udW5pdCB8fCAnJ30gb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVGaWVsZCh7IGNvbnN0cmFpbnRzOiB7IC4uLmZpZWxkLmNvbnN0cmFpbnRzLCB1bml0OiBlLnRhcmdldC52YWx1ZSB8fCB1bmRlZmluZWQgfSB9KX0gcGxhY2Vob2xkZXI9XCJlLmcuIHllYXJzLCBrZ1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cblxuICAgICAgICB7LyogRGF0ZSAqL31cbiAgICAgICAge2ZpZWxkLnR5cGUgPT09ICdkYXRlJyAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPkhpbnQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIiB2YWx1ZT17ZmllbGQuaGludCB8fCAnJ30gb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVGaWVsZCh7IGhpbnQ6IGUudGFyZ2V0LnZhbHVlIHx8IHVuZGVmaW5lZCB9KX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICB7LyogU2VsZWN0ICovfVxuICAgICAgICB7ZmllbGQudHlwZSA9PT0gJ3NlbGVjdCcgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5PcHRpb25zIChvbmUgcGVyIGxpbmUpPC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCJcbiAgICAgICAgICAgICAgcm93cz17NH1cbiAgICAgICAgICAgICAgdmFsdWU9eyhmaWVsZC5vcHRpb25zIHx8IFtdKS5qb2luKCdcXG4nKX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVGaWVsZCh7IG9wdGlvbnM6IGUudGFyZ2V0LnZhbHVlLnNwbGl0KCdcXG4nKS5maWx0ZXIoQm9vbGVhbikgfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBDb2xvciAqL31cbiAgICAgICAge2ZpZWxkLnR5cGUgPT09ICdjb2xvcicgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5EZWZhdWx0PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xvci1pbnB1dC1yb3dcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNvbG9yXCIgdmFsdWU9eyhmaWVsZC5kZWZhdWx0IGFzIHN0cmluZykgfHwgJyMwMDAwMDAnfSBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZUZpZWxkKHsgZGVmYXVsdDogZS50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIiB2YWx1ZT17KGZpZWxkLmRlZmF1bHQgYXMgc3RyaW5nKSB8fCAnJ30gb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVGaWVsZCh7IGRlZmF1bHQ6IGUudGFyZ2V0LnZhbHVlIH0pfSBzdHlsZT17eyBmbGV4OiAxIH19IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5QcmVzZXRzIChoZXggY29sb3JzKTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxUYWdJbnB1dFxuICAgICAgICAgICAgICAgIHZhbHVlcz17ZmllbGQucHJlc2V0cyB8fCBbXX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHByZXNldHMpID0+IHVwZGF0ZUZpZWxkKHsgcHJlc2V0cyB9KX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIiNmZjZlYjRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIEltYWdlIC8gSW1hZ2UgQXJyYXkgKi99XG4gICAgICAgIHsoZmllbGQudHlwZSA9PT0gJ2ltYWdlJyB8fCBmaWVsZC50eXBlID09PSAnaW1hZ2VfYXJyYXknKSAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPkFzcGVjdCBSYXRpbzwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCIgdmFsdWU9e2ZpZWxkLmFzcGVjdFJhdGlvIHx8ICcnfSBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZUZpZWxkKHsgYXNwZWN0UmF0aW86IGUudGFyZ2V0LnZhbHVlIHx8IHVuZGVmaW5lZCB9KX0gcGxhY2Vob2xkZXI9XCJlLmcuIDM6NCwgMToxXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnNwZWN0b3ItZGl2aWRlclwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluc3BlY3Rvci1jb25zdHJhaW50LWhlYWRlclwiPkNvbnN0cmFpbnRzPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5NYXggc2l6ZSAoTUIpPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIiB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e2ZpZWxkLmNvbnN0cmFpbnRzPy5tYXhTaXplTUIgPz8gJyd9IG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlRmllbGQoeyBjb25zdHJhaW50czogeyAuLi5maWVsZC5jb25zdHJhaW50cywgbWF4U2l6ZU1COiBlLnRhcmdldC52YWx1ZSA/IE51bWJlcihlLnRhcmdldC52YWx1ZSkgOiB1bmRlZmluZWQgfSB9KX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+TWluIHdpZHRoIChweCk8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiIHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17ZmllbGQuY29uc3RyYWludHM/Lm1pbldpZHRoID8/ICcnfSBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZUZpZWxkKHsgY29uc3RyYWludHM6IHsgLi4uZmllbGQuY29uc3RyYWludHMsIG1pbldpZHRoOiBlLnRhcmdldC52YWx1ZSA/IE51bWJlcihlLnRhcmdldC52YWx1ZSkgOiB1bmRlZmluZWQgfSB9KX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuXG4gICAgICAgIHtmaWVsZC50eXBlID09PSAnaW1hZ2VfYXJyYXknICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+TWF4IGltYWdlczwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiIHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17ZmllbGQubWF4IHx8ICcnfSBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZUZpZWxkKHsgbWF4OiBlLnRhcmdldC52YWx1ZSA/IE51bWJlcihlLnRhcmdldC52YWx1ZSkgOiB1bmRlZmluZWQgfSl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIFZpZGVvICovfVxuICAgICAgICB7ZmllbGQudHlwZSA9PT0gJ3ZpZGVvJyAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zcGVjdG9yLWRpdmlkZXJcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnNwZWN0b3ItY29uc3RyYWludC1oZWFkZXJcIj5Db25zdHJhaW50czwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+TWF4IHNpemUgKE1CKTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCIgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtmaWVsZC5jb25zdHJhaW50cz8ubWF4U2l6ZU1CID8/ICcnfSBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZUZpZWxkKHsgY29uc3RyYWludHM6IHsgLi4uZmllbGQuY29uc3RyYWludHMsIG1heFNpemVNQjogZS50YXJnZXQudmFsdWUgPyBOdW1iZXIoZS50YXJnZXQudmFsdWUpIDogdW5kZWZpbmVkIH0gfSl9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPk1heCBkdXJhdGlvbiAoc2VjKTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCIgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtmaWVsZC5jb25zdHJhaW50cz8ubWF4RHVyYXRpb25TZWMgPz8gJyd9IG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlRmllbGQoeyBjb25zdHJhaW50czogeyAuLi5maWVsZC5jb25zdHJhaW50cywgbWF4RHVyYXRpb25TZWM6IGUudGFyZ2V0LnZhbHVlID8gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSA6IHVuZGVmaW5lZCB9IH0pfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIEF1ZGlvICovfVxuICAgICAgICB7ZmllbGQudHlwZSA9PT0gJ2F1ZGlvJyAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zcGVjdG9yLWRpdmlkZXJcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnNwZWN0b3ItY29uc3RyYWludC1oZWFkZXJcIj5Db25zdHJhaW50czwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+TWF4IHNpemUgKE1CKTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCIgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtmaWVsZC5jb25zdHJhaW50cz8ubWF4U2l6ZU1CID8/ICcnfSBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZUZpZWxkKHsgY29uc3RyYWludHM6IHsgLi4uZmllbGQuY29uc3RyYWludHMsIG1heFNpemVNQjogZS50YXJnZXQudmFsdWUgPyBOdW1iZXIoZS50YXJnZXQudmFsdWUpIDogdW5kZWZpbmVkIH0gfSl9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cC1yb3dcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5Mb29wPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e2ZpZWxkLmNvbnN0cmFpbnRzPy5sb29wIHx8IGZhbHNlfSBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZUZpZWxkKHsgY29uc3RyYWludHM6IHsgLi4uZmllbGQuY29uc3RyYWludHMsIGxvb3A6IGUudGFyZ2V0LmNoZWNrZWQgfSB9KX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBRdWl6ICovfVxuICAgICAgICB7ZmllbGQudHlwZSA9PT0gJ3F1aXonICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnNwZWN0b3ItZGl2aWRlclwiIC8+XG4gICAgICAgICAgICA8UXVpekJ1aWxkZXJcbiAgICAgICAgICAgICAgcXVlc3Rpb25zPXsoc3RhdGUud29ya2luZy5kZW1vW2ZpZWxkLmtleV0gYXMgUXVpelF1ZXN0aW9uW10pIHx8IFtdfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHF1ZXN0aW9ucykgPT4gZGlzcGF0Y2goeyB0eXBlOiAnU0VUX0RFTU8nLCBrZXk6IGZpZWxkLmtleSwgdmFsdWU6IHF1ZXN0aW9ucyB9KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIEdyb3VwIC8gR3JvdXAgQXJyYXkgKi99XG4gICAgICAgIHsoZmllbGQudHlwZSA9PT0gJ2dyb3VwJyB8fCBmaWVsZC50eXBlID09PSAnZ3JvdXBfYXJyYXknKSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnNwZWN0b3ItcGxhY2Vob2xkZXJcIj5cbiAgICAgICAgICAgIDxwPk5lc3RlZCBncm91cCBlZGl0aW5nIFx1MjAxNCBkcmFnIGZpZWxkcyBmcm9tIHRoZSBmaWVsZCBsaXN0IGludG8gdGhpcyBncm91cCwgb3IgZWRpdCBzdWItZmllbGRzIGluIHNjaGVtYS5qc29uIGRpcmVjdGx5LjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFBsdXMsIFRyYXNoMiwgR3JpcFZlcnRpY2FsLCBDaGVjayB9IGZyb20gJ2x1Y2lkZS1yZWFjdCdcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnLi9jb21tb24vTW9kYWwnXG5pbXBvcnQgdHlwZSB7IFF1aXpRdWVzdGlvbiB9IGZyb20gJy4uL3R5cGVzJ1xuXG50eXBlIFByb3BzID0ge1xuICBxdWVzdGlvbnM6IFF1aXpRdWVzdGlvbltdXG4gIG9uQ2hhbmdlOiAocXVlc3Rpb25zOiBRdWl6UXVlc3Rpb25bXSkgPT4gdm9pZFxufVxuXG5mdW5jdGlvbiBtYWtlSWQoKSB7XG4gIHJldHVybiAncScgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyLCA4KVxufVxuXG5mdW5jdGlvbiBRdWVzdGlvbkNhcmQoe1xuICBxdWVzdGlvbiwgaW5kZXgsIG9uVXBkYXRlLCBvbkRlbGV0ZSxcbn06IHtcbiAgcXVlc3Rpb246IFF1aXpRdWVzdGlvbjsgaW5kZXg6IG51bWJlclxuICBvblVwZGF0ZTogKHE6IFF1aXpRdWVzdGlvbikgPT4gdm9pZDsgb25EZWxldGU6ICgpID0+IHZvaWRcbn0pIHtcbiAgY29uc3QgdXBkYXRlT3B0aW9uID0gKG9wdElkeDogbnVtYmVyLCB2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IFsuLi5xdWVzdGlvbi5vcHRpb25zXVxuICAgIG9wdGlvbnNbb3B0SWR4XSA9IHZhbHVlXG4gICAgb25VcGRhdGUoeyAuLi5xdWVzdGlvbiwgb3B0aW9ucyB9KVxuICB9XG5cbiAgY29uc3QgYWRkT3B0aW9uID0gKCkgPT4ge1xuICAgIG9uVXBkYXRlKHsgLi4ucXVlc3Rpb24sIG9wdGlvbnM6IFsuLi5xdWVzdGlvbi5vcHRpb25zLCBgT3B0aW9uICR7cXVlc3Rpb24ub3B0aW9ucy5sZW5ndGggKyAxfWBdIH0pXG4gIH1cblxuICBjb25zdCByZW1vdmVPcHRpb24gPSAob3B0SWR4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBvcHRpb25zID0gcXVlc3Rpb24ub3B0aW9ucy5maWx0ZXIoKF8sIGkpID0+IGkgIT09IG9wdElkeClcbiAgICBjb25zdCBjb3JyZWN0SW5kZXggPSBxdWVzdGlvbi5jb3JyZWN0SW5kZXggPj0gb3B0aW9ucy5sZW5ndGhcbiAgICAgID8gTWF0aC5tYXgoMCwgb3B0aW9ucy5sZW5ndGggLSAxKVxuICAgICAgOiBxdWVzdGlvbi5jb3JyZWN0SW5kZXggPiBvcHRJZHhcbiAgICAgICAgPyBxdWVzdGlvbi5jb3JyZWN0SW5kZXggLSAxXG4gICAgICAgIDogcXVlc3Rpb24uY29ycmVjdEluZGV4XG4gICAgb25VcGRhdGUoeyAuLi5xdWVzdGlvbiwgb3B0aW9ucywgY29ycmVjdEluZGV4IH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicXVpei1jYXJkXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1aXotY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicXVpei1jYXJkLW51bVwiPntpbmRleCArIDF9PC9zcGFuPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0IHF1aXotcXVlc3Rpb24taW5wdXRcIlxuICAgICAgICAgIHZhbHVlPXtxdWVzdGlvbi50ZXh0fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25VcGRhdGUoeyAuLi5xdWVzdGlvbiwgdGV4dDogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJRdWVzdGlvbiB0ZXh0XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJpY29uLWJ0blwiIG9uQ2xpY2s9e29uRGVsZXRlfSB0aXRsZT1cIkRlbGV0ZSBxdWVzdGlvblwiPlxuICAgICAgICAgIDxUcmFzaDIgc2l6ZT17MTR9IC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1aXotb3B0aW9uc1wiPlxuICAgICAgICB7cXVlc3Rpb24ub3B0aW9ucy5tYXAoKG9wdCwgb2kpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17b2l9IGNsYXNzTmFtZT1cInF1aXotb3B0aW9uLXJvd1wiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BxdWl6LWNvcnJlY3QtYnRuICR7cXVlc3Rpb24uY29ycmVjdEluZGV4ID09PSBvaSA/ICdhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25VcGRhdGUoeyAuLi5xdWVzdGlvbiwgY29ycmVjdEluZGV4OiBvaSB9KX1cbiAgICAgICAgICAgICAgdGl0bGU9XCJNYXJrIGFzIGNvcnJlY3RcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Q2hlY2sgc2l6ZT17MTJ9IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e29wdH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVPcHRpb24ob2ksIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgZmxleDogMSB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtxdWVzdGlvbi5vcHRpb25zLmxlbmd0aCA+IDIgJiYgKFxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImljb24tYnRuXCIgb25DbGljaz17KCkgPT4gcmVtb3ZlT3B0aW9uKG9pKX0+XG4gICAgICAgICAgICAgICAgPFRyYXNoMiBzaXplPXsxMn0gLz5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAge3F1ZXN0aW9uLm9wdGlvbnMubGVuZ3RoIDwgNiAmJiAoXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicXVpei1hZGQtb3B0aW9uXCIgb25DbGljaz17YWRkT3B0aW9ufT5cbiAgICAgICAgICA8UGx1cyBzaXplPXsxMn0gLz4gQWRkIG9wdGlvblxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFF1aXpCdWlsZGVyKHsgcXVlc3Rpb25zLCBvbkNoYW5nZSB9OiBQcm9wcykge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBhZGRRdWVzdGlvbiA9ICgpID0+IHtcbiAgICBvbkNoYW5nZShbLi4ucXVlc3Rpb25zLCB7XG4gICAgICBpZDogbWFrZUlkKCksXG4gICAgICB0ZXh0OiAnJyxcbiAgICAgIG9wdGlvbnM6IFsnT3B0aW9uIDEnLCAnT3B0aW9uIDInLCAnT3B0aW9uIDMnXSxcbiAgICAgIGNvcnJlY3RJbmRleDogMCxcbiAgICB9XSlcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZVF1ZXN0aW9uID0gKGlkeDogbnVtYmVyLCBxOiBRdWl6UXVlc3Rpb24pID0+IHtcbiAgICBjb25zdCBuZXh0ID0gWy4uLnF1ZXN0aW9uc11cbiAgICBuZXh0W2lkeF0gPSBxXG4gICAgb25DaGFuZ2UobmV4dClcbiAgfVxuXG4gIGNvbnN0IGRlbGV0ZVF1ZXN0aW9uID0gKGlkeDogbnVtYmVyKSA9PiB7XG4gICAgb25DaGFuZ2UocXVlc3Rpb25zLmZpbHRlcigoXywgaSkgPT4gaSAhPT0gaWR4KSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJxdWl6LWJ1aWxkZXItc2VjdGlvblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwLXJvd1wiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogOCB9fT5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj57cXVlc3Rpb25zLmxlbmd0aH0gcXVlc3Rpb257cXVlc3Rpb25zLmxlbmd0aCAhPT0gMSA/ICdzJyA6ICcnfTwvbGFiZWw+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLXNlY29uZGFyeVwiIG9uQ2xpY2s9eygpID0+IHNldE9wZW4odHJ1ZSl9PkVkaXQgUXVpejwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxNb2RhbCBvcGVuPXtvcGVufSBvbkNsb3NlPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX0gdGl0bGU9XCJRdWl6IEJ1aWxkZXJcIiB3aWR0aD17NTIwfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5IHF1aXotYnVpbGRlci1ib2R5XCI+XG4gICAgICAgICAge3F1ZXN0aW9ucy5tYXAoKHEsIGkpID0+IChcbiAgICAgICAgICAgIDxRdWVzdGlvbkNhcmRcbiAgICAgICAgICAgICAga2V5PXtxLmlkfVxuICAgICAgICAgICAgICBxdWVzdGlvbj17cX1cbiAgICAgICAgICAgICAgaW5kZXg9e2l9XG4gICAgICAgICAgICAgIG9uVXBkYXRlPXsodXBkYXRlZCkgPT4gdXBkYXRlUXVlc3Rpb24oaSwgdXBkYXRlZCl9XG4gICAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBkZWxldGVRdWVzdGlvbihpKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhZGQtZmllbGQtYnRuXCIgb25DbGljaz17YWRkUXVlc3Rpb259IHN0eWxlPXt7IG1hcmdpblRvcDogOCB9fT5cbiAgICAgICAgICAgIDxQbHVzIHNpemU9ezE0fSAvPiBBZGQgUXVlc3Rpb25cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L01vZGFsPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgdXNlU3R1ZGlvIH0gZnJvbSAnLi4vc3RhdGUnXG5pbXBvcnQgeyBGSUVMRF9UWVBFUyB9IGZyb20gJy4uL2ZpZWxkLXJlZ2lzdHJ5J1xuaW1wb3J0IHsgUm90YXRlQ2N3IH0gZnJvbSAnbHVjaWRlLXJlYWN0J1xuXG5leHBvcnQgZnVuY3Rpb24gRGVtb1RhYigpIHtcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZVN0dWRpbygpXG4gIGNvbnN0IGRlbW8gPSBzdGF0ZS53b3JraW5nLmRlbW9cbiAgY29uc3Qgc2VjdGlvbnMgPSBzdGF0ZS53b3JraW5nLnNjaGVtYS5zZWN0aW9uc1xuXG4gIGNvbnN0IGFsbEZpZWxkcyA9IHNlY3Rpb25zLmZsYXRNYXAoKHMpID0+XG4gICAgcy5maWVsZHMubWFwKChmKSA9PiAoeyAuLi5mLCBzZWN0aW9uTGFiZWw6IHMubGFiZWwgfSkpXG4gIClcblxuICBjb25zdCByZXNldEZpZWxkID0gKGtleTogc3RyaW5nLCB0eXBlOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBmdCA9IEZJRUxEX1RZUEVTW3R5cGUgYXMga2V5b2YgdHlwZW9mIEZJRUxEX1RZUEVTXVxuICAgIGlmICghZnQpIHJldHVyblxuICAgIGNvbnN0IGZpZWxkID0gYWxsRmllbGRzLmZpbmQoKGYpID0+IGYua2V5ID09PSBrZXkpXG4gICAgaWYgKCFmaWVsZCkgcmV0dXJuXG4gICAgY29uc3QgZGVmYXVsdFZhbCA9IGZ0LmRlbW9EZWZhdWx0KGZpZWxkKVxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ1NFVF9ERU1PJywga2V5LCB2YWx1ZTogZGVmYXVsdFZhbCB9KVxuICB9XG5cbiAgY29uc3QgcmVzZXRBbGwgPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3RGVtbzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fVxuICAgIGZvciAoY29uc3QgZiBvZiBhbGxGaWVsZHMpIHtcbiAgICAgIGNvbnN0IGZ0ID0gRklFTERfVFlQRVNbZi50eXBlIGFzIGtleW9mIHR5cGVvZiBGSUVMRF9UWVBFU11cbiAgICAgIGlmIChmdCkgbmV3RGVtb1tmLmtleV0gPSBmdC5kZW1vRGVmYXVsdChmKVxuICAgIH1cbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdTRVRfREVNT19BTEwnLCBkZW1vOiBuZXdEZW1vIH0pXG4gIH1cblxuICBpZiAoYWxsRmllbGRzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8tdGFiXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby10YWItZW1wdHlcIj5cbiAgICAgICAgICA8cD5ObyBmaWVsZHMgeWV0IFx1MjAxNCBhZGQgZmllbGRzIGluIHRoZSBTY2hlbWEgdGFiIGZpcnN0PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLXRhYlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLXRhYi1oZWFkZXJcIj5cbiAgICAgICAgPGgyPkRlbW8gRGF0YTwvaDI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLXNlY29uZGFyeVwiIG9uQ2xpY2s9e3Jlc2V0QWxsfT5cbiAgICAgICAgICA8Um90YXRlQ2N3IHNpemU9ezEyfSAvPiBSZXNldCBBbGxcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImRlbW8tdGFiLWRlc2NcIj5QcmV2aWV3IHZhbHVlcyB1c2VkIHdoZW4gcmVuZGVyaW5nIHRoZSB0ZW1wbGF0ZS4gVGhlc2UgYXJlIHNhdmVkIHRvIGRlbW8uanNvbi48L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8tZmllbGRzXCI+XG4gICAgICAgIHthbGxGaWVsZHMubWFwKChmKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBkZW1vW2Yua2V5XVxuICAgICAgICAgIGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KHZhbHVlKVxuICAgICAgICAgIGNvbnN0IGlzT2JqZWN0ID0gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbCAmJiAhaXNBcnJheVxuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYga2V5PXtmLmtleX0gY2xhc3NOYW1lPVwiZGVtby1maWVsZFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8tZmllbGQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1maWVsZC1sYWJlbFwiPntmLmxhYmVsfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWZpZWxkLW1ldGFcIj57Zi5rZXl9IFx1MDBCNyB7Zi50eXBlfSBcdTAwQjcge2Yuc2VjdGlvbkxhYmVsfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaWNvbi1idG5cIiBvbkNsaWNrPXsoKSA9PiByZXNldEZpZWxkKGYua2V5LCBmLnR5cGUpfSB0aXRsZT1cIlJlc2V0IHRvIGRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgIDxSb3RhdGVDY3cgc2l6ZT17MTJ9IC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8tZmllbGQtaW5wdXRcIj5cbiAgICAgICAgICAgICAgICB7Zi50eXBlID09PSAndG9nZ2xlJyA/IChcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJkZW1vLXRvZ2dsZS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyEhdmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdTRVRfREVNTycsIGtleTogZi5rZXksIHZhbHVlOiBlLnRhcmdldC5jaGVja2VkIH0pfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7dmFsdWUgPyAndHJ1ZScgOiAnZmFsc2UnfVxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICApIDogZi50eXBlID09PSAnY29sb3InID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xvci1pbnB1dC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17KHZhbHVlIGFzIHN0cmluZykgfHwgJyMwMDAwMDAnfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnU0VUX0RFTU8nLCBrZXk6IGYua2V5LCB2YWx1ZTogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsodmFsdWUgYXMgc3RyaW5nKSB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGRpc3BhdGNoKHsgdHlwZTogJ1NFVF9ERU1PJywga2V5OiBmLmtleSwgdmFsdWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZsZXg6IDEgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBmLnR5cGUgPT09ICdudW1iZXInID8gKFxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlIGFzIG51bWJlciA/PyAnJ31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdTRVRfREVNTycsIGtleTogZi5rZXksIHZhbHVlOiBlLnRhcmdldC52YWx1ZSA/IE51bWJlcihlLnRhcmdldC52YWx1ZSkgOiAnJyB9KX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSA6IGYudHlwZSA9PT0gJ3NlbGVjdCcgPyAoXG4gICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17KHZhbHVlIGFzIHN0cmluZykgfHwgJyd9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnU0VUX0RFTU8nLCBrZXk6IGYua2V5LCB2YWx1ZTogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHsoZi5vcHRpb25zIHx8IFtdKS5tYXAoKG9wdCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtvcHR9IHZhbHVlPXtvcHR9PntvcHR9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgKSA6IGlzQXJyYXkgfHwgaXNPYmplY3QgPyAoXG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dCBmb250LW1vbm9cIlxuICAgICAgICAgICAgICAgICAgICByb3dzPXtNYXRoLm1pbig4LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgbnVsbCwgMikuc3BsaXQoJ1xcbicpLmxlbmd0aCArIDEpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SlNPTi5zdHJpbmdpZnkodmFsdWUsIG51bGwsIDIpfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnU0VUX0RFTU8nLCBrZXk6IGYua2V5LCB2YWx1ZTogSlNPTi5wYXJzZShlLnRhcmdldC52YWx1ZSkgfSlcbiAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHsgLyogbGV0IHRoZW0ga2VlcCB0eXBpbmcgKi8gfVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogZi50eXBlID09PSAndGV4dGFyZWEnID8gKFxuICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICByb3dzPXszfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17KHZhbHVlIGFzIHN0cmluZykgPz8gJyd9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnU0VUX0RFTU8nLCBrZXk6IGYua2V5LCB2YWx1ZTogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsodmFsdWUgYXMgc3RyaW5nKSA/PyAnJ31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdTRVRfREVNTycsIGtleTogZi5rZXksIHZhbHVlOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgeyB1c2VTdHVkaW8gfSBmcm9tICcuLi9zdGF0ZSdcbmltcG9ydCB7IFRhZ0lucHV0IH0gZnJvbSAnLi9jb21tb24vVGFnSW5wdXQnXG5pbXBvcnQgeyBBVkFJTEFCTEVfREVQUyB9IGZyb20gJy4uL2NvbnN0YW50cydcblxuZXhwb3J0IGZ1bmN0aW9uIE1hbmlmZXN0VGFiKCkge1xuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlU3R1ZGlvKClcbiAgY29uc3QgbWFuaWZlc3QgPSBzdGF0ZS53b3JraW5nLm1hbmlmZXN0XG5cbiAgY29uc3Qgc2V0TWFuaWZlc3QgPSAocGF0Y2g6IFBhcnRpYWw8dHlwZW9mIG1hbmlmZXN0PikgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ1NFVF9NQU5JRkVTVCcsIG1hbmlmZXN0OiB7IC4uLm1hbmlmZXN0LCAuLi5wYXRjaCB9IH0pXG4gIH1cblxuICBjb25zdCB0b2dnbGVEZXAgPSAobmFtZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgZGVwcyA9IHsgLi4ubWFuaWZlc3QuZGVwZW5kZW5jaWVzIH1cbiAgICBpZiAoZGVwc1tuYW1lXSkge1xuICAgICAgZGVsZXRlIGRlcHNbbmFtZV1cbiAgICB9IGVsc2Uge1xuICAgICAgZGVwc1tuYW1lXSA9IHRydWVcbiAgICB9XG4gICAgc2V0TWFuaWZlc3QoeyBkZXBlbmRlbmNpZXM6IGRlcHMgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYW5pZmVzdC10YWJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFuaWZlc3QtdGFiLWhlYWRlclwiPlxuICAgICAgICA8aDI+TWFuaWZlc3Q8L2gyPlxuICAgICAgPC9kaXY+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYW5pZmVzdC10YWItZGVzY1wiPkNvbmZpZ3VyYXRpb24gZm9yIGhvdyB0aGUgdGVtcGxhdGUgaXMgbG9hZGVkIGFuZCByZW5kZXJlZC4gU2F2ZWQgdG8gbWFuaWZlc3QuanNvbi48L3A+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFuaWZlc3Qtc2VjdGlvbnNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYW5pZmVzdC1zZWN0aW9uXCI+XG4gICAgICAgICAgPGgzPkVudHJ5IFBvaW50PC9oMz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+RW50cnkgZmlsZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dCBmb250LW1vbm9cIlxuICAgICAgICAgICAgICB2YWx1ZT17bWFuaWZlc3QuZW50cnl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWFuaWZlc3QoeyBlbnRyeTogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaW5kZXgudHN4XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFuaWZlc3Qtc2VjdGlvblwiPlxuICAgICAgICAgIDxoMz5TY3JlZW5zPC9oMz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYW5pZmVzdC1zZWN0aW9uLWRlc2NcIj5OYW1lZCBzY3JlZW5zL3JvdXRlcyB3aXRoaW4gdGhpcyB0ZW1wbGF0ZSAoZS5nLiBnYXRlLCBtYWluLCBndWVzdGJvb2spPC9wPlxuICAgICAgICAgIDxUYWdJbnB1dFxuICAgICAgICAgICAgdmFsdWVzPXttYW5pZmVzdC5zY3JlZW5zfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhzY3JlZW5zKSA9PiBzZXRNYW5pZmVzdCh7IHNjcmVlbnMgfSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgc2NyZWVuIG5hbWUgKyBFbnRlclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYW5pZmVzdC1zZWN0aW9uXCI+XG4gICAgICAgICAgPGgzPkRlcGVuZGVuY2llczwvaDM+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWFuaWZlc3Qtc2VjdGlvbi1kZXNjXCI+bnBtIHBhY2thZ2VzIHRoaXMgdGVtcGxhdGUgbmVlZHMgYXQgcnVudGltZTwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlcC1ncmlkXCI+XG4gICAgICAgICAgICB7QVZBSUxBQkxFX0RFUFMubWFwKChkZXApID0+IChcbiAgICAgICAgICAgICAgPGxhYmVsIGtleT17ZGVwLm5hbWV9IGNsYXNzTmFtZT17YGRlcC1jYXJkICR7bWFuaWZlc3QuZGVwZW5kZW5jaWVzW2RlcC5uYW1lXSA/ICdhY3RpdmUnIDogJyd9YH0+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ISFtYW5pZmVzdC5kZXBlbmRlbmNpZXNbZGVwLm5hbWVdfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRvZ2dsZURlcChkZXAubmFtZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXAtbmFtZVwiPntkZXAubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVwLWRlc2NcIj57ZGVwLmRlc2N9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYW5pZmVzdC1zZWN0aW9uXCI+XG4gICAgICAgICAgPGgzPkZvbnRzPC9oMz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYW5pZmVzdC1zZWN0aW9uLWRlc2NcIj5Hb29nbGUgRm9udCBuYW1lcyB0byBsb2FkIChlLmcuIFwiRGFuY2luZyBTY3JpcHRcIiwgXCJQbGF5ZmFpciBEaXNwbGF5XCIpPC9wPlxuICAgICAgICAgIDxUYWdJbnB1dFxuICAgICAgICAgICAgdmFsdWVzPXttYW5pZmVzdC5mb250c31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZm9udHMpID0+IHNldE1hbmlmZXN0KHsgZm9udHMgfSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgZm9udCBuYW1lICsgRW50ZXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgeyB1c2VSZWYsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBSZWZyZXNoQ3csIE1heGltaXplMiwgTWluaW1pemUyIH0gZnJvbSAnbHVjaWRlLXJlYWN0J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxudHlwZSBQcm9wcyA9IHtcbiAgcG9ydDogbnVtYmVyXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQcmV2aWV3UGFuZSh7IHBvcnQgfTogUHJvcHMpIHtcbiAgY29uc3QgaWZyYW1lUmVmID0gdXNlUmVmPEhUTUxJRnJhbWVFbGVtZW50PihudWxsKVxuICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHJlZnJlc2ggPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKGlmcmFtZVJlZi5jdXJyZW50KSB7XG4gICAgICBpZnJhbWVSZWYuY3VycmVudC5zcmMgPSBpZnJhbWVSZWYuY3VycmVudC5zcmNcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BwcmV2aWV3LXBhbmUgJHtleHBhbmRlZCA/ICdleHBhbmRlZCcgOiAnJ31gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlldy1wYW5lLWhlYWRlclwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmV2aWV3LXBhbmUtbGFiZWxcIj5QcmV2aWV3PC9zcGFuPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImljb24tYnRuXCIgb25DbGljaz17cmVmcmVzaH0gdGl0bGU9XCJSZWZyZXNoIHByZXZpZXdcIj5cbiAgICAgICAgICA8UmVmcmVzaEN3IHNpemU9ezEyfSAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJpY29uLWJ0blwiIG9uQ2xpY2s9eygpID0+IHNldEV4cGFuZGVkKCFleHBhbmRlZCl9IHRpdGxlPXtleHBhbmRlZCA/ICdDb2xsYXBzZScgOiAnRXhwYW5kJ30+XG4gICAgICAgICAge2V4cGFuZGVkID8gPE1pbmltaXplMiBzaXplPXsxMn0gLz4gOiA8TWF4aW1pemUyIHNpemU9ezEyfSAvPn1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlldy1wYW5lLWZyYW1lXCI+XG4gICAgICAgIDxpZnJhbWVcbiAgICAgICAgICByZWY9e2lmcmFtZVJlZn1cbiAgICAgICAgICBjbGFzc05hbWU9XCJwcmV2aWV3LWZyYW1lXCJcbiAgICAgICAgICBzcmM9e2BodHRwOi8vbG9jYWxob3N0OiR7cG9ydH0vYH1cbiAgICAgICAgICB0aXRsZT1cIlRlbXBsYXRlIFByZXZpZXdcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVN0dWRpbyB9IGZyb20gJy4uLy4uL3N0YXRlJ1xuXG5leHBvcnQgZnVuY3Rpb24gVG9hc3QoKSB7XG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VTdHVkaW8oKVxuICBjb25zdCB0b2FzdCA9IHN0YXRlLnRvYXN0XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXRvYXN0KSByZXR1cm5cbiAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnSElERV9UT0FTVCcgfSksIDI1MDApXG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcilcbiAgfSwgW3RvYXN0LCBkaXNwYXRjaF0pXG5cbiAgaWYgKCF0b2FzdCkgcmV0dXJuIG51bGxcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgdG9hc3QgdmlzaWJsZSAke3RvYXN0LnR5cGV9YH0+XG4gICAgICB7dG9hc3QubWVzc2FnZX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFBLFNBQVMsa0JBQWtCO0FBQzNCLFNBQVMsWUFBWSxhQUFBQSxZQUFXLGVBQUFDLGNBQWEsWUFBQUMsaUJBQWdCOzs7Q0NBcEQsV0FBVztBQUNWLE1BQUksSUFBSSxTQUFTLGNBQWMsT0FBTztBQUN0QyxJQUFFLGNBQWM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMHdDaEIsV0FBUyxLQUFLLFlBQVksQ0FBQztBQUM3QixHQUFHOzs7QUM5d0NYLFNBQVMsZUFBZSxrQkFBaUM7OztBQ0VsRCxTQUFTLFVBQWEsS0FBVztBQUN0QyxTQUFPLE9BQU8sT0FBTyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsR0FBRyxDQUFDO0FBQzNEO0FBRU8sU0FBUyxVQUFVLEdBQVksR0FBcUI7QUFDekQsU0FBTyxLQUFLLFVBQVUsQ0FBQyxNQUFNLEtBQUssVUFBVSxDQUFDO0FBQy9DO0FBRU8sU0FBUyxZQUFZLEtBQXFCO0FBQy9DLFNBQU8sSUFDSixRQUFRLGtCQUFrQixFQUFFLEVBQzVCLFFBQVEsV0FBVyxDQUFDLEdBQUcsTUFBYyxFQUFFLFlBQVksQ0FBQyxFQUNwRCxRQUFRLFFBQVEsQ0FBQyxHQUFHLE1BQWMsRUFBRSxZQUFZLENBQUM7QUFDdEQ7QUFFTyxTQUFTLGdCQUFnQixLQUFhLFVBQW1DO0FBQzlFLFFBQU0sVUFBVSxvQkFBSSxJQUFZO0FBQ2hDLGFBQVcsS0FBSyxVQUFVO0FBQ3hCLGVBQVcsS0FBSyxFQUFFLFFBQVE7QUFDeEIsVUFBSSxFQUFFLElBQUssU0FBUSxJQUFJLEVBQUUsR0FBRztBQUFBLElBQzlCO0FBQUEsRUFDRjtBQUNBLE1BQUksQ0FBQyxRQUFRLElBQUksR0FBRyxFQUFHLFFBQU87QUFDOUIsTUFBSSxJQUFJO0FBQ1IsU0FBTyxRQUFRLElBQUksTUFBTSxDQUFDLEVBQUc7QUFDN0IsU0FBTyxNQUFNO0FBQ2Y7OztBRGxCTyxJQUFNLGlCQUFpQztBQUFBLEVBQzVDLFNBQVM7QUFBQSxFQUNULFVBQVUsQ0FBQyxFQUFFLEtBQUssVUFBVSxPQUFPLGNBQWMsUUFBUSxDQUFDLEVBQUUsQ0FBQztBQUMvRDtBQUVPLElBQU0sbUJBQWlDO0FBQUEsRUFDNUMsT0FBTztBQUFBLEVBQ1AsU0FBUyxDQUFDO0FBQUEsRUFDVixjQUFjLENBQUM7QUFBQSxFQUNmLE9BQU8sQ0FBQztBQUNWO0FBMkRPLFNBQVMsY0FBYyxPQUFvQixRQUFtQztBQUNuRixVQUFRLE9BQU8sTUFBTTtBQUFBLElBQ25CLEtBQUssVUFBVTtBQUNiLFlBQU0sU0FBUyxPQUFPLEtBQUssVUFBVTtBQUNyQyxZQUFNLE9BQU8sT0FBTyxLQUFLLFFBQVEsQ0FBQztBQUNsQyxZQUFNLFdBQVcsT0FBTyxLQUFLLFlBQVk7QUFDekMsWUFBTUMsVUFBUyxFQUFFLFFBQVEsTUFBTSxTQUFTO0FBQ3hDLGFBQU8sRUFBRSxHQUFHLE9BQU8sUUFBUSxVQUFVQSxPQUFNLEdBQUcsU0FBUyxVQUFVQSxPQUFNLEVBQUU7QUFBQSxJQUMzRTtBQUFBLElBRUEsS0FBSztBQUNILGFBQU8sRUFBRSxHQUFHLE9BQU8sUUFBUSxVQUFVLE1BQU0sT0FBTyxFQUFFO0FBQUEsSUFFdEQsS0FBSztBQUNILGFBQU8sRUFBRSxHQUFHLE9BQU8sU0FBUyxFQUFFLEdBQUcsTUFBTSxTQUFTLFFBQVEsT0FBTyxPQUFPLEVBQUU7QUFBQSxJQUUxRSxLQUFLLGVBQWU7QUFDbEIsWUFBTSxXQUFXLENBQUMsR0FBRyxNQUFNLFFBQVEsT0FBTyxVQUFVLE9BQU8sT0FBTztBQUNsRSxhQUFPO0FBQUEsUUFDTCxHQUFHO0FBQUEsUUFDSCxTQUFTLEVBQUUsR0FBRyxNQUFNLFNBQVMsUUFBUSxFQUFFLEdBQUcsTUFBTSxRQUFRLFFBQVEsU0FBUyxFQUFFO0FBQUEsUUFDM0UsSUFBSSxFQUFFLEdBQUcsTUFBTSxJQUFJLGlCQUFpQixTQUFTLFNBQVMsR0FBRyxlQUFlLEdBQUc7QUFBQSxNQUM3RTtBQUFBLElBQ0Y7QUFBQSxJQUVBLEtBQUssa0JBQWtCO0FBQ3JCLFlBQU0sV0FBVyxNQUFNLFFBQVEsT0FBTyxTQUFTO0FBQUEsUUFBSSxDQUFDLEdBQUcsTUFDckQsTUFBTSxPQUFPLE1BQU0sT0FBTyxVQUFVO0FBQUEsTUFDdEM7QUFDQSxhQUFPLEVBQUUsR0FBRyxPQUFPLFNBQVMsRUFBRSxHQUFHLE1BQU0sU0FBUyxRQUFRLEVBQUUsR0FBRyxNQUFNLFFBQVEsUUFBUSxTQUFTLEVBQUUsRUFBRTtBQUFBLElBQ2xHO0FBQUEsSUFFQSxLQUFLLGtCQUFrQjtBQUNyQixZQUFNLFdBQVcsTUFBTSxRQUFRLE9BQU8sU0FBUyxPQUFPLENBQUMsR0FBRyxNQUFNLE1BQU0sT0FBTyxHQUFHO0FBQ2hGLFlBQU0sTUFBTSxLQUFLLElBQUksTUFBTSxHQUFHLGlCQUFpQixLQUFLLElBQUksR0FBRyxTQUFTLFNBQVMsQ0FBQyxDQUFDO0FBQy9FLGFBQU87QUFBQSxRQUNMLEdBQUc7QUFBQSxRQUNILFNBQVMsRUFBRSxHQUFHLE1BQU0sU0FBUyxRQUFRLEVBQUUsR0FBRyxNQUFNLFFBQVEsUUFBUSxTQUFTLEVBQUU7QUFBQSxRQUMzRSxJQUFJLEVBQUUsR0FBRyxNQUFNLElBQUksaUJBQWlCLEtBQUssZUFBZSxHQUFHO0FBQUEsTUFDN0Q7QUFBQSxJQUNGO0FBQUEsSUFFQSxLQUFLLGdCQUFnQjtBQUNuQixZQUFNLFdBQVcsQ0FBQyxHQUFHLE1BQU0sUUFBUSxPQUFPLFFBQVE7QUFDbEQsWUFBTSxDQUFDLEtBQUssSUFBSSxTQUFTLE9BQU8sT0FBTyxNQUFNLENBQUM7QUFDOUMsZUFBUyxPQUFPLE9BQU8sSUFBSSxHQUFHLEtBQUs7QUFDbkMsYUFBTztBQUFBLFFBQ0wsR0FBRztBQUFBLFFBQ0gsU0FBUyxFQUFFLEdBQUcsTUFBTSxTQUFTLFFBQVEsRUFBRSxHQUFHLE1BQU0sUUFBUSxRQUFRLFNBQVMsRUFBRTtBQUFBLFFBQzNFLElBQUksRUFBRSxHQUFHLE1BQU0sSUFBSSxpQkFBaUIsT0FBTyxHQUFHO0FBQUEsTUFDaEQ7QUFBQSxJQUNGO0FBQUEsSUFFQSxLQUFLLGFBQWE7QUFDaEIsWUFBTSxXQUFXLE1BQU0sUUFBUSxPQUFPLFNBQVMsSUFBSSxDQUFDLEdBQUcsTUFBTTtBQUMzRCxZQUFJLE1BQU0sT0FBTyxXQUFZLFFBQU87QUFDcEMsZUFBTyxFQUFFLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLFFBQVEsT0FBTyxLQUFLLEVBQUU7QUFBQSxNQUNyRCxDQUFDO0FBQ0QsWUFBTSxjQUFjLFNBQVMsT0FBTyxVQUFVLEVBQUUsT0FBTyxTQUFTO0FBQ2hFLGFBQU87QUFBQSxRQUNMLEdBQUc7QUFBQSxRQUNILFNBQVMsRUFBRSxHQUFHLE1BQU0sU0FBUyxRQUFRLEVBQUUsR0FBRyxNQUFNLFFBQVEsUUFBUSxTQUFTLEVBQUU7QUFBQSxRQUMzRSxJQUFJLEVBQUUsR0FBRyxNQUFNLElBQUksZUFBZSxZQUFZO0FBQUEsTUFDaEQ7QUFBQSxJQUNGO0FBQUEsSUFFQSxLQUFLLGdCQUFnQjtBQUNuQixZQUFNLFdBQVcsTUFBTSxRQUFRLE9BQU8sU0FBUyxJQUFJLENBQUMsR0FBRyxPQUFPO0FBQzVELFlBQUksT0FBTyxPQUFPLFdBQVksUUFBTztBQUNyQyxlQUFPLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxPQUFPLElBQUksQ0FBQyxHQUFHLE9BQU8sT0FBTyxPQUFPLFdBQVcsT0FBTyxRQUFRLENBQUMsRUFBRTtBQUFBLE1BQzVGLENBQUM7QUFDRCxhQUFPLEVBQUUsR0FBRyxPQUFPLFNBQVMsRUFBRSxHQUFHLE1BQU0sU0FBUyxRQUFRLEVBQUUsR0FBRyxNQUFNLFFBQVEsUUFBUSxTQUFTLEVBQUUsRUFBRTtBQUFBLElBQ2xHO0FBQUEsSUFFQSxLQUFLLGdCQUFnQjtBQUNuQixZQUFNLGFBQWEsTUFBTSxRQUFRLE9BQU8sU0FBUyxPQUFPLFVBQVUsR0FBRyxPQUFPLE9BQU8sUUFBUSxHQUFHO0FBQzlGLFlBQU0sV0FBVyxNQUFNLFFBQVEsT0FBTyxTQUFTLElBQUksQ0FBQyxHQUFHLE9BQU87QUFDNUQsWUFBSSxPQUFPLE9BQU8sV0FBWSxRQUFPO0FBQ3JDLGVBQU8sRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLE9BQU8sT0FBTyxDQUFDLEdBQUcsT0FBTyxPQUFPLE9BQU8sUUFBUSxFQUFFO0FBQUEsTUFDNUUsQ0FBQztBQUNELFlBQU0sT0FBTyxFQUFFLEdBQUcsTUFBTSxRQUFRLEtBQUs7QUFDckMsVUFBSSxXQUFZLFFBQU8sS0FBSyxVQUFVO0FBQ3RDLFlBQU0sU0FBUyxLQUFLLElBQUksTUFBTSxHQUFHLGVBQWUsS0FBSyxJQUFJLElBQUksU0FBUyxPQUFPLFVBQVUsRUFBRSxPQUFPLFNBQVMsQ0FBQyxDQUFDO0FBQzNHLGFBQU87QUFBQSxRQUNMLEdBQUc7QUFBQSxRQUNILFNBQVMsRUFBRSxHQUFHLE1BQU0sU0FBUyxRQUFRLEVBQUUsR0FBRyxNQUFNLFFBQVEsUUFBUSxTQUFTLEdBQUcsS0FBSztBQUFBLFFBQ2pGLElBQUksRUFBRSxHQUFHLE1BQU0sSUFBSSxlQUFlLE9BQU87QUFBQSxNQUMzQztBQUFBLElBQ0Y7QUFBQSxJQUVBLEtBQUssbUJBQW1CO0FBQ3RCLFlBQU0sV0FBVyxNQUFNLFFBQVEsT0FBTyxTQUFTLElBQUksQ0FBQyxHQUFHLE9BQU87QUFDNUQsWUFBSSxPQUFPLE9BQU8sV0FBWSxRQUFPO0FBQ3JDLGNBQU0sV0FBVyxFQUFFLE9BQU8sT0FBTyxRQUFRO0FBQ3pDLFlBQUksQ0FBQyxTQUFVLFFBQU87QUFDdEIsY0FBTSxPQUFPLFVBQVUsUUFBUTtBQUMvQixhQUFLLE1BQU0sS0FBSyxNQUFNO0FBQ3RCLGNBQU0sU0FBUyxDQUFDLEdBQUcsRUFBRSxNQUFNO0FBQzNCLGVBQU8sT0FBTyxPQUFPLFdBQVcsR0FBRyxHQUFHLElBQUk7QUFDMUMsZUFBTyxFQUFFLEdBQUcsR0FBRyxPQUFPO0FBQUEsTUFDeEIsQ0FBQztBQUNELGFBQU87QUFBQSxRQUNMLEdBQUc7QUFBQSxRQUNILFNBQVMsRUFBRSxHQUFHLE1BQU0sU0FBUyxRQUFRLEVBQUUsR0FBRyxNQUFNLFFBQVEsUUFBUSxTQUFTLEVBQUU7QUFBQSxRQUMzRSxJQUFJLEVBQUUsR0FBRyxNQUFNLElBQUksZUFBZSxPQUFPLFdBQVcsRUFBRTtBQUFBLE1BQ3hEO0FBQUEsSUFDRjtBQUFBLElBRUEsS0FBSyxjQUFjO0FBQ2pCLFlBQU0sVUFBVSxNQUFNLFFBQVEsT0FBTyxTQUFTLE1BQU0sR0FBRyxlQUFlO0FBQ3RFLFVBQUksQ0FBQyxRQUFTLFFBQU87QUFDckIsWUFBTSxTQUFTLENBQUMsR0FBRyxRQUFRLE1BQU07QUFDakMsWUFBTSxDQUFDLEtBQUssSUFBSSxPQUFPLE9BQU8sT0FBTyxNQUFNLENBQUM7QUFDNUMsWUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLE9BQU8sT0FBTyxLQUFLLElBQUksT0FBTztBQUNsRSxhQUFPLE9BQU8sVUFBVSxHQUFHLEtBQUs7QUFDaEMsWUFBTSxXQUFXLE1BQU0sUUFBUSxPQUFPLFNBQVM7QUFBQSxRQUFJLENBQUMsR0FBRyxNQUNyRCxNQUFNLE1BQU0sR0FBRyxrQkFBa0IsRUFBRSxHQUFHLEdBQUcsT0FBTyxJQUFJO0FBQUEsTUFDdEQ7QUFDQSxhQUFPO0FBQUEsUUFDTCxHQUFHO0FBQUEsUUFDSCxTQUFTLEVBQUUsR0FBRyxNQUFNLFNBQVMsUUFBUSxFQUFFLEdBQUcsTUFBTSxRQUFRLFFBQVEsU0FBUyxFQUFFO0FBQUEsUUFDM0UsSUFBSSxFQUFFLEdBQUcsTUFBTSxJQUFJLGVBQWUsU0FBUztBQUFBLE1BQzdDO0FBQUEsSUFDRjtBQUFBLElBRUEsS0FBSztBQUNILGFBQU8sRUFBRSxHQUFHLE9BQU8sU0FBUyxFQUFFLEdBQUcsTUFBTSxTQUFTLE1BQU0sRUFBRSxHQUFHLE1BQU0sUUFBUSxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsT0FBTyxNQUFNLEVBQUUsRUFBRTtBQUFBLElBRWhILEtBQUs7QUFDSCxhQUFPLEVBQUUsR0FBRyxPQUFPLFNBQVMsRUFBRSxHQUFHLE1BQU0sU0FBUyxNQUFNLE9BQU8sS0FBSyxFQUFFO0FBQUEsSUFFdEUsS0FBSztBQUNILGFBQU8sRUFBRSxHQUFHLE9BQU8sU0FBUyxFQUFFLEdBQUcsTUFBTSxTQUFTLFVBQVUsT0FBTyxTQUFTLEVBQUU7QUFBQSxJQUU5RSxLQUFLO0FBQ0gsYUFBTyxFQUFFLEdBQUcsT0FBTyxJQUFJLEVBQUUsR0FBRyxNQUFNLElBQUksaUJBQWlCLE9BQU8sS0FBSyxlQUFlLEdBQUcsRUFBRTtBQUFBLElBRXpGLEtBQUs7QUFDSCxhQUFPLEVBQUUsR0FBRyxPQUFPLElBQUksRUFBRSxHQUFHLE1BQU0sSUFBSSxlQUFlLE9BQU8sSUFBSSxFQUFFO0FBQUEsSUFFcEUsS0FBSztBQUNILGFBQU8sRUFBRSxHQUFHLE9BQU8sSUFBSSxFQUFFLEdBQUcsTUFBTSxJQUFJLFdBQVcsT0FBTyxJQUFJLEVBQUU7QUFBQSxJQUVoRSxLQUFLO0FBQ0gsYUFBTyxFQUFFLEdBQUcsT0FBTyxJQUFJLEVBQUUsR0FBRyxNQUFNLElBQUksT0FBTyxPQUFPLE1BQU0sRUFBRTtBQUFBLElBRTlELEtBQUs7QUFDSCxhQUFPLEVBQUUsR0FBRyxPQUFPLE9BQU8sRUFBRSxTQUFTLE9BQU8sU0FBUyxNQUFNLE9BQU8sVUFBVSxFQUFFO0FBQUEsSUFFaEYsS0FBSztBQUNILGFBQU8sRUFBRSxHQUFHLE9BQU8sT0FBTyxLQUFLO0FBQUEsSUFFakMsS0FBSyxpQkFBaUI7QUFDcEIsWUFBTSxVQUFVLEVBQUUsR0FBRyxNQUFNLFFBQVE7QUFDbkMsVUFBSSxPQUFPLEtBQUssT0FBUSxTQUFRLFNBQVMsT0FBTyxLQUFLO0FBQ3JELFVBQUksT0FBTyxLQUFLLEtBQU0sU0FBUSxPQUFPLE9BQU8sS0FBSztBQUNqRCxVQUFJLE9BQU8sS0FBSyxTQUFVLFNBQVEsV0FBVyxPQUFPLEtBQUs7QUFDekQsYUFBTyxFQUFFLEdBQUcsT0FBTyxRQUFRO0FBQUEsSUFDN0I7QUFBQSxJQUVBLEtBQUs7QUFDSCxhQUFPLEVBQUUsR0FBRyxPQUFPLElBQUksRUFBRSxHQUFHLE1BQU0sSUFBSSxhQUFhLE9BQU8sTUFBTSxFQUFFO0FBQUEsSUFFcEUsS0FBSztBQUNILGFBQU8sRUFBRSxHQUFHLE9BQU8sSUFBSSxFQUFFLEdBQUcsTUFBTSxJQUFJLGFBQWEsQ0FBQyxNQUFNLEdBQUcsWUFBWSxFQUFFO0FBQUEsSUFFN0UsS0FBSyxtQkFBbUI7QUFDdEIsWUFBTSxlQUFlLENBQUMsR0FBSSxNQUFNLFFBQVEsT0FBTyxnQkFBZ0IsQ0FBQyxHQUFJLE9BQU8sV0FBVztBQUN0RixhQUFPLEVBQUUsR0FBRyxPQUFPLFNBQVMsRUFBRSxHQUFHLE1BQU0sU0FBUyxRQUFRLEVBQUUsR0FBRyxNQUFNLFFBQVEsUUFBUSxhQUFhLEVBQUUsRUFBRTtBQUFBLElBQ3RHO0FBQUEsSUFFQSxLQUFLLHNCQUFzQjtBQUN6QixZQUFNLGdCQUFnQixNQUFNLFFBQVEsT0FBTyxnQkFBZ0IsQ0FBQyxHQUFHO0FBQUEsUUFBSSxDQUFDLEdBQUcsTUFDckUsTUFBTSxPQUFPLE1BQU0sT0FBTyxjQUFjO0FBQUEsTUFDMUM7QUFDQSxhQUFPLEVBQUUsR0FBRyxPQUFPLFNBQVMsRUFBRSxHQUFHLE1BQU0sU0FBUyxRQUFRLEVBQUUsR0FBRyxNQUFNLFFBQVEsUUFBUSxhQUFhLEVBQUUsRUFBRTtBQUFBLElBQ3RHO0FBQUEsSUFFQSxLQUFLLHNCQUFzQjtBQUN6QixZQUFNLGdCQUFnQixNQUFNLFFBQVEsT0FBTyxnQkFBZ0IsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxHQUFHLE1BQU0sTUFBTSxPQUFPLEdBQUc7QUFDaEcsYUFBTyxFQUFFLEdBQUcsT0FBTyxTQUFTLEVBQUUsR0FBRyxNQUFNLFNBQVMsUUFBUSxFQUFFLEdBQUcsTUFBTSxRQUFRLFFBQVEsY0FBYyxhQUFhLFNBQVMsZUFBZSxPQUFVLEVBQUUsRUFBRTtBQUFBLElBQ3RKO0FBQUEsSUFFQTtBQUNFLGFBQU87QUFBQSxFQUNYO0FBQ0Y7QUFTTyxJQUFNLGdCQUFnQixjQUFrQyxJQUFxQztBQUU3RixTQUFTLFlBQVk7QUFDMUIsU0FBTyxXQUFXLGFBQWE7QUFDakM7OztBRWxRQSxlQUFzQixhQUFvQztBQUN4RCxRQUFNLE9BQU8sTUFBTSxNQUFNLGtCQUFrQjtBQUMzQyxTQUFPLEtBQUssS0FBSztBQUNuQjtBQUVBLGVBQXNCLFdBQVcsU0FBNkM7QUFDNUUsUUFBTSxPQUFPLE1BQU0sTUFBTSxvQkFBb0I7QUFBQSxJQUMzQyxRQUFRO0FBQUEsSUFDUixTQUFTLEVBQUUsZ0JBQWdCLG1CQUFtQjtBQUFBLElBQzlDLE1BQU0sS0FBSyxVQUFVLE9BQU87QUFBQSxFQUM5QixDQUFDO0FBQ0QsU0FBTyxLQUFLLEtBQUs7QUFDbkI7OztBQ2hDQSxTQUFTLFFBQVEsV0FBVyxNQUFNLEtBQUssV0FBVyxLQUFLLGNBQWM7QUEyQjNDLFNBQ3BCLEtBRG9CO0FBakJuQixTQUFTLE9BQU8sRUFBRSxRQUFBQyxTQUFRLFVBQVUsaUJBQWlCLEdBQVU7QUFDcEUsUUFBTSxFQUFFLE9BQU8sU0FBUyxJQUFJLFVBQVU7QUFDdEMsUUFBTSxTQUFTLE1BQU0sR0FBRyxVQUFVO0FBRWxDLFFBQU0sY0FBYyxNQUFNO0FBQ3hCLFVBQU0sT0FBTyxTQUFTLFVBQVU7QUFDaEMsYUFBUyxFQUFFLE1BQU0sYUFBYSxPQUFPLEtBQUssQ0FBQztBQUMzQyxRQUFJLFNBQVMsUUFBUTtBQUNuQixlQUFTLGdCQUFnQixhQUFhLGNBQWMsTUFBTTtBQUFBLElBQzVELE9BQU87QUFDTCxlQUFTLGdCQUFnQixnQkFBZ0IsWUFBWTtBQUFBLElBQ3ZEO0FBQ0EsaUJBQWEsUUFBUSxnQkFBZ0IsSUFBSTtBQUFBLEVBQzNDO0FBRUEsU0FDRSxxQkFBQyxZQUFPLFdBQVUsaUJBQ2hCO0FBQUEseUJBQUMsUUFBRztBQUFBO0FBQUEsTUFBZ0IscUJBQUMsVUFBSyxXQUFVLFFBQU87QUFBQTtBQUFBLFFBQUdBLFFBQU87QUFBQSxTQUFLO0FBQUEsT0FBTztBQUFBLElBQ2pFLG9CQUFDLFNBQUksV0FBVSxpQkFBZ0I7QUFBQSxJQUMvQixxQkFBQyxTQUFJLFdBQVUsaUJBQ2I7QUFBQSwwQkFBQyxVQUFPLE1BQU0sSUFBSSxPQUFPLEVBQUUsT0FBTyx3QkFBd0IsWUFBWSxFQUFFLEdBQUc7QUFBQSxNQUMzRTtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0MsTUFBSztBQUFBLFVBQ0wsYUFBWTtBQUFBLFVBQ1osT0FBTyxNQUFNLEdBQUc7QUFBQSxVQUNoQixVQUFVLENBQUMsTUFBTSxTQUFTLEVBQUUsT0FBTyxLQUFLO0FBQUE7QUFBQSxNQUMxQztBQUFBLE1BQ0MsTUFBTSxHQUFHLGVBQ1Isb0JBQUMsWUFBTyxXQUFVLGdCQUFlLFNBQVMsTUFBTSxTQUFTLEVBQUUsR0FBRyxrQkFBTztBQUFBLE9BRXpFO0FBQUEsSUFDQTtBQUFBLE1BQUM7QUFBQTtBQUFBLFFBQ0MsV0FBVyxZQUFZLE1BQU0sR0FBRyxjQUFjLFdBQVcsRUFBRTtBQUFBLFFBQzNELFNBQVMsTUFBTSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUFBLFFBQ2xELE9BQU07QUFBQSxRQUVMLGdCQUFNLEdBQUcsY0FBYyxvQkFBQyxVQUFPLE1BQU0sSUFBSSxJQUFLLG9CQUFDLE9BQUksTUFBTSxJQUFJO0FBQUE7QUFBQSxJQUNoRTtBQUFBLElBQ0Esb0JBQUMsWUFBTyxXQUFVLFlBQVcsU0FBUyxrQkFBa0IsT0FBTSxtQkFDNUQsOEJBQUMsYUFBVSxNQUFNLElBQUksR0FDdkI7QUFBQSxJQUNBLG9CQUFDLFlBQU8sV0FBVSxZQUFXLFNBQVMsYUFBYSxPQUFNLGdCQUN0RCxtQkFBUyxvQkFBQyxPQUFJLE1BQU0sSUFBSSxJQUFLLG9CQUFDLFFBQUssTUFBTSxJQUFJLEdBQ2hEO0FBQUEsSUFDQSxvQkFBQyxPQUFFLE1BQUssS0FBSSxXQUFVLFlBQVcsT0FBTSxtQkFDckMsOEJBQUMsYUFBVSxNQUFNLElBQUksR0FDdkI7QUFBQSxLQUNGO0FBRUo7OztBQzNEQSxTQUFTLE1BQU0sVUFBVSxjQUFjO0FBQ3ZDLFNBQVMsVUFBVSxjQUFjO0FBeUV2QixTQVdGLFVBWEUsT0FBQUMsTUFXRixRQUFBQyxhQVhFO0FBL0RILFNBQVMsT0FBTyxFQUFFLGlCQUFpQixHQUFVO0FBQ2xELFFBQU0sRUFBRSxPQUFPLFNBQVMsSUFBSSxVQUFVO0FBQ3RDLFFBQU0sQ0FBQyxRQUFRLFNBQVMsSUFBSSxTQUFTLEtBQUs7QUFDMUMsUUFBTSxlQUFlLE9BQXlCLElBQUk7QUFFbEQsUUFBTSxhQUFhLENBQUMsVUFBVSxNQUFNLFFBQVEsTUFBTSxPQUFPO0FBRXpELFFBQU0sYUFBYSxZQUFZO0FBQzdCLGNBQVUsSUFBSTtBQUNkLFFBQUk7QUFDRixZQUFNLFNBQVMsTUFBTSxXQUFXO0FBQUEsUUFDOUIsUUFBUSxNQUFNLFFBQVE7QUFBQSxRQUN0QixNQUFNLE1BQU0sUUFBUTtBQUFBLFFBQ3BCLFVBQVUsTUFBTSxRQUFRO0FBQUEsTUFDMUIsQ0FBQztBQUNELFVBQUksT0FBTyxJQUFJO0FBQ2IsaUJBQVMsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUMxQixpQkFBUyxFQUFFLE1BQU0sY0FBYyxTQUFTLFVBQVUsT0FBTyxXQUFXLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxJQUFJLFdBQVcsVUFBVSxDQUFDO0FBQzVHLG1CQUFXLGtCQUFrQixHQUFHO0FBQUEsTUFDbEMsT0FBTztBQUNMLGlCQUFTLEVBQUUsTUFBTSxjQUFjLFVBQVUsT0FBTyxVQUFVLENBQUMsYUFBYSxHQUFHLEtBQUssSUFBSSxHQUFHLFdBQVcsUUFBUSxDQUFDO0FBQUEsTUFDN0c7QUFBQSxJQUNGLFNBQVMsR0FBRztBQUNWLGVBQVMsRUFBRSxNQUFNLGNBQWMsU0FBUyxnQkFBZ0IsQ0FBQyxJQUFJLFdBQVcsUUFBUSxDQUFDO0FBQUEsSUFDbkY7QUFDQSxjQUFVLEtBQUs7QUFBQSxFQUNqQjtBQUVBLFFBQU0sZUFBZSxNQUFNO0FBQ3pCLFVBQU0sT0FBTyxFQUFFLFFBQVEsTUFBTSxRQUFRLFFBQVEsTUFBTSxNQUFNLFFBQVEsTUFBTSxVQUFVLE1BQU0sUUFBUSxTQUFTO0FBQ3hHLFVBQU0sT0FBTyxJQUFJLEtBQUssQ0FBQyxLQUFLLFVBQVUsTUFBTSxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRixVQUFNLE1BQU0sSUFBSSxnQkFBZ0IsSUFBSTtBQUNwQyxVQUFNLElBQUksU0FBUyxjQUFjLEdBQUc7QUFDcEMsTUFBRSxPQUFPO0FBQ1QsTUFBRSxXQUFXLEdBQUksT0FBZSxtQkFBbUIsUUFBUSxVQUFVO0FBQ3JFLE1BQUUsTUFBTTtBQUNSLFFBQUksZ0JBQWdCLEdBQUc7QUFDdkIsYUFBUyxFQUFFLE1BQU0sY0FBYyxTQUFTLG1CQUFtQixXQUFXLFVBQVUsQ0FBQztBQUFBLEVBQ25GO0FBRUEsUUFBTSxlQUFlLENBQUMsTUFBMkM7QUFDL0QsVUFBTSxPQUFPLEVBQUUsT0FBTyxRQUFRLENBQUM7QUFDL0IsUUFBSSxDQUFDLEtBQU07QUFDWCxVQUFNLFNBQVMsSUFBSSxXQUFXO0FBQzlCLFdBQU8sU0FBUyxDQUFDLE9BQU87QUFDdEIsVUFBSTtBQUNGLGNBQU0sT0FBTyxLQUFLLE1BQU0sR0FBRyxRQUFRLE1BQWdCO0FBQ25ELGlCQUFTLEVBQUUsTUFBTSxpQkFBaUIsS0FBSyxDQUFDO0FBQ3hDLGlCQUFTLEVBQUUsTUFBTSxjQUFjLFNBQVMsbUJBQW1CLFdBQVcsVUFBVSxDQUFDO0FBQUEsTUFDbkYsUUFBUTtBQUNOLGlCQUFTLEVBQUUsTUFBTSxjQUFjLFNBQVMscUJBQXFCLFdBQVcsUUFBUSxDQUFDO0FBQUEsTUFDbkY7QUFBQSxJQUNGO0FBQ0EsV0FBTyxXQUFXLElBQUk7QUFDdEIsTUFBRSxPQUFPLFFBQVE7QUFBQSxFQUNuQjtBQUVBLFFBQU0sT0FBYyxDQUFDLFVBQVUsUUFBUSxVQUFVO0FBRWpELFNBQ0UsZ0JBQUFBLE1BQUMsWUFBTyxXQUFVLGlCQUNoQjtBQUFBLG9CQUFBRCxLQUFDLFNBQUksV0FBVSxXQUNaLGVBQUssSUFBSSxDQUFDLFFBQ1QsZ0JBQUFBO0FBQUEsTUFBQztBQUFBO0FBQUEsUUFFQyxXQUFXLFdBQVcsTUFBTSxHQUFHLGNBQWMsTUFBTSxXQUFXLEVBQUU7QUFBQSxRQUNoRSxTQUFTLE1BQU0sU0FBUyxFQUFFLE1BQU0sV0FBVyxJQUFJLENBQUM7QUFBQSxRQUUvQyxjQUFJLE9BQU8sQ0FBQyxFQUFFLFlBQVksSUFBSSxJQUFJLE1BQU0sQ0FBQztBQUFBO0FBQUEsTUFKckM7QUFBQSxJQUtQLENBQ0QsR0FDSDtBQUFBLElBQ0EsZ0JBQUFBLEtBQUMsU0FBSSxXQUFVLGlCQUFnQjtBQUFBLElBQzlCLGNBQ0MsZ0JBQUFDLE1BQUEsWUFDRTtBQUFBLHNCQUFBRCxLQUFDLFVBQUssV0FBVSx1QkFBc0I7QUFBQSxNQUN0QyxnQkFBQUEsS0FBQyxVQUFLLFdBQVUseUJBQXdCLDZCQUFlO0FBQUEsT0FDekQ7QUFBQSxJQUVGLGdCQUFBQSxLQUFDLFlBQU8sV0FBVSxZQUFXLFNBQVMsY0FBYyxPQUFNLFVBQ3hELDBCQUFBQSxLQUFDLFlBQVMsTUFBTSxJQUFJLEdBQ3RCO0FBQUEsSUFDQSxnQkFBQUEsS0FBQyxZQUFPLFdBQVUsWUFBVyxTQUFTLE1BQU0sYUFBYSxTQUFTLE1BQU0sR0FBRyxPQUFNLFVBQy9FLDBCQUFBQSxLQUFDLFVBQU8sTUFBTSxJQUFJLEdBQ3BCO0FBQUEsSUFDQSxnQkFBQUMsTUFBQyxZQUFPLFdBQVUsWUFBVyxTQUFTLFlBQVksVUFBVSxRQUMxRDtBQUFBLHNCQUFBRCxLQUFDLFFBQUssTUFBTSxJQUFJO0FBQUEsTUFDZixTQUFTLGNBQWM7QUFBQSxPQUMxQjtBQUFBLElBQ0EsZ0JBQUFBLEtBQUMsV0FBTSxLQUFLLGNBQWMsTUFBSyxRQUFPLFFBQU8sU0FBUSxPQUFPLEVBQUUsU0FBUyxPQUFPLEdBQUcsVUFBVSxjQUFjO0FBQUEsS0FDM0c7QUFFSjs7O0FDdkdBLFNBQVMsWUFBQUUsV0FBVSxtQkFBbUI7QUFDdEMsU0FBUyxjQUFjLFlBQVk7OztBQ0RuQyxTQUFTLFdBQVcsVUFBQUMsZUFBOEI7QUE4QjVDLFNBRUksT0FBQUMsTUFGSixRQUFBQyxhQUFBO0FBcEJDLFNBQVMsTUFBTSxFQUFFLE1BQU0sU0FBUyxPQUFPLFVBQVUsUUFBUSxJQUFJLEdBQVU7QUFDNUUsUUFBTSxhQUFhRixRQUF1QixJQUFJO0FBRTlDLFlBQVUsTUFBTTtBQUNkLFFBQUksQ0FBQyxLQUFNO0FBQ1gsVUFBTSxVQUFVLENBQUMsTUFBcUI7QUFDcEMsVUFBSSxFQUFFLFFBQVEsU0FBVSxTQUFRO0FBQUEsSUFDbEM7QUFDQSxhQUFTLGlCQUFpQixXQUFXLE9BQU87QUFDNUMsV0FBTyxNQUFNLFNBQVMsb0JBQW9CLFdBQVcsT0FBTztBQUFBLEVBQzlELEdBQUcsQ0FBQyxNQUFNLE9BQU8sQ0FBQztBQUVsQixNQUFJLENBQUMsS0FBTSxRQUFPO0FBRWxCLFNBQ0UsZ0JBQUFDO0FBQUEsSUFBQztBQUFBO0FBQUEsTUFDQyxLQUFLO0FBQUEsTUFDTCxXQUFVO0FBQUEsTUFDVixTQUFTLENBQUMsTUFBTTtBQUFFLFlBQUksRUFBRSxXQUFXLFdBQVcsUUFBUyxTQUFRO0FBQUEsTUFBRTtBQUFBLE1BRWpFLDBCQUFBQyxNQUFDLFNBQUksV0FBVSxTQUFRLE9BQU8sRUFBRSxNQUFNLEdBQ3BDO0FBQUEsd0JBQUFELEtBQUMsU0FBSSxXQUFVLGdCQUNiLDBCQUFBQSxLQUFDLFFBQUksaUJBQU0sR0FDYjtBQUFBLFFBQ0M7QUFBQSxTQUNIO0FBQUE7QUFBQSxFQUNGO0FBRUo7OztBRGVNLGdCQUFBRSxNQUdJLFFBQUFDLGFBSEo7QUEvQ0MsU0FBUyxjQUFjO0FBQzVCLFFBQU0sRUFBRSxPQUFPLFNBQVMsSUFBSSxVQUFVO0FBQ3RDLFFBQU0sV0FBVyxNQUFNLFFBQVEsT0FBTztBQUN0QyxRQUFNLFdBQVcsTUFBTSxHQUFHO0FBRTFCLFFBQU0sQ0FBQyxXQUFXLFlBQVksSUFBSUMsVUFBUyxLQUFLO0FBQ2hELFFBQU0sQ0FBQyxPQUFPLFFBQVEsSUFBSUEsVUFBUyxFQUFFO0FBQ3JDLFFBQU0sQ0FBQyxLQUFLLE1BQU0sSUFBSUEsVUFBUyxFQUFFO0FBRWpDLFFBQU0sZUFBZSxNQUFNO0FBQ3pCLGFBQVMsRUFBRTtBQUNYLFdBQU8sRUFBRTtBQUNULGlCQUFhLElBQUk7QUFBQSxFQUNuQjtBQUVBLFFBQU0sYUFBYSxNQUFNO0FBQ3ZCLFVBQU0sZUFBZSxNQUFNLEtBQUs7QUFDaEMsUUFBSSxDQUFDLGFBQWM7QUFDbkIsVUFBTSxhQUFhLElBQUksS0FBSyxLQUFLLFlBQVksWUFBWTtBQUN6RCxhQUFTLEVBQUUsTUFBTSxlQUFlLFNBQVMsRUFBRSxLQUFLLFlBQVksT0FBTyxjQUFjLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQztBQUMvRixpQkFBYSxLQUFLO0FBQUEsRUFDcEI7QUFHQSxRQUFNLENBQUMsU0FBUyxVQUFVLElBQUlBLFVBQXdCLElBQUk7QUFDMUQsUUFBTSxDQUFDLFlBQVksYUFBYSxJQUFJQSxVQUF3QixJQUFJO0FBRWhFLFFBQU0sY0FBYyxZQUFZLENBQUMsUUFBZ0I7QUFBRSxlQUFXLEdBQUc7QUFBQSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3hFLFFBQU0sWUFBWSxZQUFZLE1BQU07QUFBRSxlQUFXLElBQUk7QUFBRyxrQkFBYyxJQUFJO0FBQUEsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUVqRixRQUFNLGFBQWEsWUFBWSxDQUFDLEdBQW9CLFFBQWdCO0FBQ2xFLE1BQUUsZUFBZTtBQUNqQixNQUFFLGFBQWEsYUFBYTtBQUM1QixrQkFBYyxHQUFHO0FBQUEsRUFDbkIsR0FBRyxDQUFDLENBQUM7QUFFTCxRQUFNLFNBQVMsWUFBWSxDQUFDLEdBQW9CLFVBQWtCO0FBQ2hFLE1BQUUsZUFBZTtBQUNqQixRQUFJLFlBQVksUUFBUSxZQUFZLE9BQU87QUFDekMsZUFBUyxFQUFFLE1BQU0sZ0JBQWdCLE1BQU0sU0FBUyxJQUFJLE1BQU0sQ0FBQztBQUFBLElBQzdEO0FBQ0EsZUFBVyxJQUFJO0FBQ2Ysa0JBQWMsSUFBSTtBQUFBLEVBQ3BCLEdBQUcsQ0FBQyxTQUFTLFFBQVEsQ0FBQztBQUV0QixTQUNFLGdCQUFBRCxNQUFDLFNBQUksV0FBVSxrQkFDYjtBQUFBLG9CQUFBRCxLQUFDLFNBQUksV0FBVSx5QkFBd0Isc0JBQVE7QUFBQSxJQUMvQyxnQkFBQUEsS0FBQyxTQUNFLG1CQUFTLElBQUksQ0FBQyxHQUFHLE1BQ2hCLGdCQUFBQztBQUFBLE1BQUM7QUFBQTtBQUFBLFFBRUMsV0FBVyxnQkFBZ0IsTUFBTSxXQUFXLFdBQVcsRUFBRTtBQUFBLFFBQ3pELFNBQVMsTUFBTSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsS0FBSyxFQUFFLENBQUM7QUFBQSxRQUMxRCxXQUFTO0FBQUEsUUFDVCxhQUFhLE1BQU0sWUFBWSxDQUFDO0FBQUEsUUFDaEM7QUFBQSxRQUNBLFlBQVksQ0FBQyxNQUFNLFdBQVcsR0FBRyxDQUFDO0FBQUEsUUFDbEMsUUFBUSxDQUFDLE1BQU0sT0FBTyxHQUFHLENBQUM7QUFBQSxRQUMxQixPQUFPLEVBQUUsU0FBUyxZQUFZLElBQUksTUFBTSxHQUFHLGdCQUFnQixlQUFlLElBQUksa0JBQWtCLE9BQVU7QUFBQSxRQUUxRztBQUFBLDBCQUFBRCxLQUFDLFVBQUssV0FBVSxlQUFjLDBCQUFBQSxLQUFDLGdCQUFhLE1BQU0sSUFBSSxHQUFFO0FBQUEsVUFDeEQsZ0JBQUFBLEtBQUMsVUFBSyxXQUFVLGlCQUFpQixZQUFFLFNBQVMsWUFBVztBQUFBLFVBQ3ZELGdCQUFBQSxLQUFDLFVBQUssV0FBVSxpQkFBaUIsWUFBRSxPQUFPLFFBQU87QUFBQTtBQUFBO0FBQUEsTUFaNUMsRUFBRSxNQUFNO0FBQUEsSUFhZixDQUNELEdBQ0g7QUFBQSxJQUNBLGdCQUFBQyxNQUFDLFlBQU8sV0FBVSxtQkFBa0IsU0FBUyxjQUMzQztBQUFBLHNCQUFBRCxLQUFDLFFBQUssTUFBTSxJQUFJO0FBQUEsTUFBRTtBQUFBLE9BQ3BCO0FBQUEsSUFFQSxnQkFBQUMsTUFBQyxTQUFNLE1BQU0sV0FBVyxTQUFTLE1BQU0sYUFBYSxLQUFLLEdBQUcsT0FBTSxlQUNoRTtBQUFBLHNCQUFBQSxNQUFDLFNBQUksV0FBVSx3QkFDYjtBQUFBLHdCQUFBQSxNQUFDLFNBQUksV0FBVSxjQUNiO0FBQUEsMEJBQUFELEtBQUMsV0FBTSxXQUFVLGNBQWEsbUJBQUs7QUFBQSxVQUNuQyxnQkFBQUE7QUFBQSxZQUFDO0FBQUE7QUFBQSxjQUNDLFdBQVU7QUFBQSxjQUNWLE9BQU87QUFBQSxjQUNQLFVBQVUsQ0FBQyxNQUFNO0FBQUUseUJBQVMsRUFBRSxPQUFPLEtBQUs7QUFBRyx1QkFBTyxZQUFZLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFBQSxjQUFFO0FBQUEsY0FDakYsYUFBWTtBQUFBLGNBQ1osV0FBUztBQUFBLGNBQ1QsV0FBVyxDQUFDLE1BQU07QUFBRSxvQkFBSSxFQUFFLFFBQVEsUUFBUyxZQUFXO0FBQUEsY0FBRTtBQUFBO0FBQUEsVUFDMUQ7QUFBQSxXQUNGO0FBQUEsUUFDQSxnQkFBQUMsTUFBQyxTQUFJLFdBQVUsY0FDYjtBQUFBLDBCQUFBRCxLQUFDLFdBQU0sV0FBVSxjQUFhLGlCQUFHO0FBQUEsVUFDakMsZ0JBQUFBO0FBQUEsWUFBQztBQUFBO0FBQUEsY0FDQyxXQUFVO0FBQUEsY0FDVixPQUFPO0FBQUEsY0FDUCxVQUFVLENBQUMsTUFBTSxPQUFPLEVBQUUsT0FBTyxLQUFLO0FBQUEsY0FDdEMsYUFBWTtBQUFBO0FBQUEsVUFDZDtBQUFBLFdBQ0Y7QUFBQSxTQUNGO0FBQUEsTUFDQSxnQkFBQUMsTUFBQyxTQUFJLFdBQVUseUJBQ2I7QUFBQSx3QkFBQUQsS0FBQyxZQUFPLFdBQVUsaUJBQWdCLFNBQVMsTUFBTSxhQUFhLEtBQUssR0FBRyxvQkFBTTtBQUFBLFFBQzVFLGdCQUFBQSxLQUFDLFlBQU8sV0FBVSxlQUFjLFNBQVMsWUFBWSxpQkFBRztBQUFBLFNBQzFEO0FBQUEsT0FDRjtBQUFBLEtBQ0Y7QUFFSjs7O0FFM0dBLFNBQVMsWUFBQUcsV0FBVSxlQUFBQyxvQkFBbUI7QUFDdEMsU0FBUyxnQkFBQUMsZUFBYyxRQUFBQyxPQUFNLE1BQU0sVUFBQUMsZUFBYzs7O0FDVWpELElBQU0sZ0JBQWdCO0FBQUEsRUFDcEIsVUFBVTtBQUFBLEVBQ1YsU0FBUztBQUFBLEVBQ1QsU0FBUztBQUFBLEVBQ1QsU0FBUztBQUNYO0FBRU8sSUFBTSxjQUFrRDtBQUFBLEVBQzdELE1BQU07QUFBQSxJQUNKLE9BQU87QUFBQSxJQUFRLE1BQU07QUFBQSxJQUFRLFVBQVU7QUFBQSxJQUN2QyxlQUFlLEVBQUUsVUFBVSxPQUFPLGFBQWEsSUFBSSxNQUFNLEdBQUc7QUFBQSxJQUM1RCxhQUFhLENBQUMsTUFBTSxFQUFFLGFBQWEsUUFBUSxlQUFlLEVBQUUsS0FBSztBQUFBLEVBQ25FO0FBQUEsRUFDQSxVQUFVO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFBYSxNQUFNO0FBQUEsSUFBYyxVQUFVO0FBQUEsSUFDbEQsZUFBZSxFQUFFLFVBQVUsT0FBTyxhQUFhLElBQUksTUFBTSxHQUFHO0FBQUEsSUFDNUQsYUFBYSxNQUFNO0FBQUEsRUFDckI7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE9BQU87QUFBQSxJQUFVLE1BQU07QUFBQSxJQUFRLFVBQVU7QUFBQSxJQUN6QyxlQUFlLEVBQUUsVUFBVSxPQUFPLE1BQU0sR0FBRztBQUFBLElBQzNDLGFBQWEsTUFBTTtBQUFBLEVBQ3JCO0FBQUEsRUFDQSxNQUFNO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFBUSxNQUFNO0FBQUEsSUFBWSxVQUFVO0FBQUEsSUFDM0MsZUFBZSxFQUFFLFVBQVUsT0FBTyxNQUFNLEdBQUc7QUFBQSxJQUMzQyxhQUFhLE1BQU07QUFBQSxFQUNyQjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsT0FBTztBQUFBLElBQVMsTUFBTTtBQUFBLElBQVcsVUFBVTtBQUFBLElBQzNDLGVBQWUsRUFBRSxTQUFTLFVBQVU7QUFBQSxJQUNwQyxhQUFhLE1BQU07QUFBQSxFQUNyQjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sT0FBTztBQUFBLElBQVUsTUFBTTtBQUFBLElBQWUsVUFBVTtBQUFBLElBQ2hELGVBQWUsQ0FBQztBQUFBLElBQ2hCLGFBQWEsTUFBTTtBQUFBLEVBQ3JCO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFBVSxNQUFNO0FBQUEsSUFBUSxVQUFVO0FBQUEsSUFDekMsZUFBZSxFQUFFLFNBQVMsQ0FBQyxZQUFZLFVBQVUsR0FBRyxVQUFVLE1BQU07QUFBQSxJQUNwRSxhQUFhLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxLQUFLO0FBQUEsRUFDeEM7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLE9BQU87QUFBQSxJQUFTLE1BQU07QUFBQSxJQUFTLFVBQVU7QUFBQSxJQUN6QyxlQUFlLEVBQUUsVUFBVSxNQUFNO0FBQUEsSUFDakMsYUFBYSxNQUFNLGNBQWM7QUFBQSxFQUNuQztBQUFBLEVBQ0EsYUFBYTtBQUFBLElBQ1gsT0FBTztBQUFBLElBQWlCLE1BQU07QUFBQSxJQUFVLFVBQVU7QUFBQSxJQUNsRCxlQUFlLEVBQUUsS0FBSyxFQUFFO0FBQUEsSUFDeEIsYUFBYSxNQUFNLENBQUMsY0FBYyxTQUFTLGNBQWMsU0FBUyxjQUFjLE9BQU87QUFBQSxFQUN6RjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsT0FBTztBQUFBLElBQVMsTUFBTTtBQUFBLElBQVMsVUFBVTtBQUFBLElBQ3pDLGVBQWUsRUFBRSxVQUFVLE1BQU07QUFBQSxJQUNqQyxhQUFhLE1BQU07QUFBQSxFQUNyQjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsT0FBTztBQUFBLElBQVMsTUFBTTtBQUFBLElBQVMsVUFBVTtBQUFBLElBQ3pDLGVBQWUsQ0FBQztBQUFBLElBQ2hCLGFBQWEsT0FBTyxFQUFFLEtBQUssZ0VBQWdFO0FBQUEsRUFDN0Y7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLE9BQU87QUFBQSxJQUFRLE1BQU07QUFBQSxJQUFlLFVBQVU7QUFBQSxJQUM5QyxlQUFlLENBQUM7QUFBQSxJQUNoQixpQkFBaUI7QUFBQSxJQUNqQixhQUFhLE1BQU0sQ0FBQyxFQUFFLElBQUksTUFBTSxNQUFNLCtCQUErQixTQUFTLENBQUMsUUFBUSxPQUFPLE9BQU8sR0FBRyxjQUFjLEVBQUUsQ0FBQztBQUFBLEVBQzNIO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxPQUFPO0FBQUEsSUFBUyxNQUFNO0FBQUEsSUFBVSxVQUFVO0FBQUEsSUFDMUMsZUFBZSxFQUFFLFFBQVEsQ0FBQyxFQUFFO0FBQUEsSUFDNUIsaUJBQWlCO0FBQUEsSUFDakIsYUFBYSxPQUFPLENBQUM7QUFBQSxFQUN2QjtBQUFBLEVBQ0EsYUFBYTtBQUFBLElBQ1gsT0FBTztBQUFBLElBQW1CLE1BQU07QUFBQSxJQUFRLFVBQVU7QUFBQSxJQUNsRCxlQUFlLEVBQUUsUUFBUSxDQUFDLEVBQUU7QUFBQSxJQUM1QixpQkFBaUI7QUFBQSxJQUNqQixhQUFhLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFBQSxFQUN4QjtBQUNGO0FBRU8sSUFBTSxtQkFBbUI7QUFBQSxFQUM5QixFQUFFLEtBQUssU0FBa0IsT0FBTyxRQUFRO0FBQUEsRUFDeEMsRUFBRSxLQUFLLFNBQWtCLE9BQU8sUUFBUTtBQUFBLEVBQ3hDLEVBQUUsS0FBSyxZQUFxQixPQUFPLFdBQVc7QUFDaEQ7OztBQzFGTyxJQUFNLGtCQUFtQztBQUFBLEVBQzlDLEVBQUUsT0FBTyxrQkFBa0IsTUFBTSxRQUFRLE9BQU8sRUFBRSxLQUFLLGlCQUFpQixPQUFPLGNBQWMsTUFBTSxRQUFRLFVBQVUsTUFBTSxhQUFhLGFBQWEsRUFBRTtBQUFBLEVBQ3ZKLEVBQUUsT0FBTyxlQUFlLE1BQU0sY0FBYyxPQUFPLEVBQUUsS0FBSyxjQUFjLE9BQU8sYUFBYSxNQUFNLFFBQVEsVUFBVSxLQUFLLEVBQUU7QUFBQSxFQUMzSCxFQUFFLE9BQU8sVUFBVSxNQUFNLFVBQVUsT0FBTyxFQUFFLEtBQUssVUFBVSxPQUFPLGNBQWMsTUFBTSxlQUFlLEtBQUssRUFBRSxFQUFFO0FBQUEsRUFDOUcsRUFBRSxPQUFPLGVBQWUsTUFBTSxTQUFTLE9BQU8sRUFBRSxLQUFLLGNBQWMsT0FBTyxlQUFlLE1BQU0sU0FBUyxVQUFVLE1BQU0sYUFBYSxNQUFNLEVBQUU7QUFBQSxFQUM3SSxFQUFFLE9BQU8sUUFBUSxNQUFNLFNBQVMsT0FBTyxFQUFFLEtBQUssUUFBUSxPQUFPLGNBQWMsTUFBTSxRQUFRLEVBQUU7QUFBQSxFQUMzRixFQUFFLE9BQU8sV0FBVyxNQUFNLGtCQUFrQixPQUFPLEVBQUUsS0FBSyxtQkFBbUIsT0FBTyxnQkFBZ0IsTUFBTSxZQUFZLFVBQVUsTUFBTSxhQUFhLG9DQUFvQyxFQUFFO0FBQUEsRUFDekwsRUFBRSxPQUFPLFFBQVEsTUFBTSxlQUFlLE9BQU8sRUFBRSxLQUFLLFFBQVEsT0FBTyxrQkFBa0IsTUFBTSxPQUFPLEVBQUU7QUFBQSxFQUNwRyxFQUFFLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxFQUFFLEtBQUssZUFBZSxPQUFPLGtCQUFrQixNQUFNLE9BQU8sRUFBRTtBQUFBLEVBQzVHLEVBQUUsT0FBTyxTQUFTLE1BQU0sV0FBVyxPQUFPLEVBQUUsS0FBSyxlQUFlLE9BQU8sZ0JBQWdCLE1BQU0sU0FBUyxTQUFTLFdBQVcsU0FBUyxDQUFDLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxTQUFTLEVBQUUsRUFBRTtBQUMxTTtBQU9PLElBQU0saUJBQTRCO0FBQUEsRUFDdkMsRUFBRSxNQUFNLGlCQUFpQixNQUFNLG9CQUFvQjtBQUFBLEVBQ25ELEVBQUUsTUFBTSxtQkFBbUIsTUFBTSxtQkFBbUI7QUFBQSxFQUNwRCxFQUFFLE1BQU0sVUFBVSxNQUFNLGlCQUFpQjtBQUFBLEVBQ3pDLEVBQUUsTUFBTSxTQUFTLE1BQU0sZUFBZTtBQUFBLEVBQ3RDLEVBQUUsTUFBTSxzQkFBc0IsTUFBTSxpQkFBaUI7QUFBQSxFQUNyRCxFQUFFLE1BQU0scUJBQXFCLE1BQU0sbUJBQW1CO0FBQUEsRUFDdEQsRUFBRSxNQUFNLGtCQUFrQixNQUFNLGtCQUFrQjtBQUFBLEVBQ2xELEVBQUUsTUFBTSxpQkFBaUIsTUFBTSxtQkFBbUI7QUFBQSxFQUNsRCxFQUFFLE1BQU0sd0JBQXdCLE1BQU0sa0JBQWtCO0FBQUEsRUFDeEQsRUFBRSxNQUFNLHVCQUF1QixNQUFNLGdCQUFnQjtBQUFBLEVBQ3JELEVBQUUsTUFBTSx3QkFBd0IsTUFBTSxrQkFBa0I7QUFBQSxFQUN4RCxFQUFFLE1BQU0sZUFBZSxNQUFNLGtCQUFrQjtBQUFBLEVBQy9DLEVBQUUsTUFBTSxnQkFBZ0IsTUFBTSxvQkFBb0I7QUFDcEQ7OztBQ3ZDQSxTQUFTLFlBQUFDLFdBQVUsVUFBQUMsU0FBUSxhQUFBQyxrQkFBaUI7QUFDNUMsU0FBUyxVQUFBQyxTQUFRLFNBQVM7QUFHMUIsWUFBWSxXQUFXO0FBS1AsZ0JBQUFDLE1Bb0NSLFFBQUFDLGFBcENRO0FBSGhCLFNBQVMsVUFBVSxFQUFFLE1BQU0sT0FBTyxHQUFHLEdBQW9DO0FBQ3ZFLFFBQU0sV0FBVyxLQUFLLE9BQU8sQ0FBQyxFQUFFLFlBQVksSUFBSSxLQUFLLE1BQU0sQ0FBQyxFQUFFLFFBQVEsYUFBYSxDQUFDLEdBQUcsTUFBTSxFQUFFLFlBQVksQ0FBQztBQUM1RyxRQUFNLE9BQVEsTUFBYyxRQUFRO0FBQ3BDLFNBQU8sT0FBTyxnQkFBQUQsS0FBQyxRQUFLLE1BQVksSUFBSztBQUN2QztBQVFPLFNBQVMsV0FBVyxFQUFFLE1BQU0sU0FBUyxTQUFTLEdBQVU7QUFDN0QsUUFBTSxDQUFDLFFBQVEsU0FBUyxJQUFJRSxVQUFTLEVBQUU7QUFDdkMsUUFBTSxXQUFXQyxRQUF5QixJQUFJO0FBRTlDLEVBQUFDLFdBQVUsTUFBTTtBQUNkLFFBQUksTUFBTTtBQUNSLGdCQUFVLEVBQUU7QUFDWixpQkFBVyxNQUFNLFNBQVMsU0FBUyxNQUFNLEdBQUcsRUFBRTtBQUFBLElBQ2hEO0FBQUEsRUFDRixHQUFHLENBQUMsSUFBSSxDQUFDO0FBRVQsRUFBQUEsV0FBVSxNQUFNO0FBQ2QsUUFBSSxDQUFDLEtBQU07QUFDWCxVQUFNLFFBQVEsQ0FBQyxNQUFxQjtBQUFFLFVBQUksRUFBRSxRQUFRLFNBQVUsU0FBUTtBQUFBLElBQUU7QUFDeEUsV0FBTyxpQkFBaUIsV0FBVyxLQUFLO0FBQ3hDLFdBQU8sTUFBTSxPQUFPLG9CQUFvQixXQUFXLEtBQUs7QUFBQSxFQUMxRCxHQUFHLENBQUMsTUFBTSxPQUFPLENBQUM7QUFFbEIsTUFBSSxDQUFDLEtBQU0sUUFBTztBQUVsQixRQUFNLElBQUksT0FBTyxZQUFZO0FBQzdCLFFBQU0sVUFBVyxPQUFPLFFBQVEsV0FBVyxFQUN4QyxPQUFPLENBQUMsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssSUFBSSxTQUFTLENBQUMsS0FBSyxJQUFJLE1BQU0sWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBRXRGLFNBQ0UsZ0JBQUFKLEtBQUMsU0FBSSxXQUFVLGlCQUFnQixTQUFTLFNBQ3RDLDBCQUFBQyxNQUFDLFNBQUksV0FBVSxlQUFjLFNBQVMsQ0FBQyxNQUFNLEVBQUUsZ0JBQWdCLEdBQzdEO0FBQUEsb0JBQUFBLE1BQUMsU0FBSSxXQUFVLHNCQUNiO0FBQUEsc0JBQUFELEtBQUMsUUFBRyx1QkFBUztBQUFBLE1BQ2IsZ0JBQUFBLEtBQUMsWUFBTyxXQUFVLFlBQVcsU0FBUyxTQUFTLDBCQUFBQSxLQUFDLEtBQUUsTUFBTSxJQUFJLEdBQUU7QUFBQSxPQUNoRTtBQUFBLElBQ0EsZ0JBQUFDLE1BQUMsU0FBSSxXQUFVLHNCQUNiO0FBQUEsc0JBQUFELEtBQUNLLFNBQUEsRUFBTyxNQUFNLElBQUk7QUFBQSxNQUNsQixnQkFBQUw7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNDLEtBQUs7QUFBQSxVQUNMLE1BQUs7QUFBQSxVQUNMLGFBQVk7QUFBQSxVQUNaLE9BQU87QUFBQSxVQUNQLFVBQVUsQ0FBQyxNQUFNLFVBQVUsRUFBRSxPQUFPLEtBQUs7QUFBQTtBQUFBLE1BQzNDO0FBQUEsT0FDRjtBQUFBLElBQ0EsZ0JBQUFDLE1BQUMsU0FBSSxXQUFVLG9CQUNaO0FBQUEsdUJBQWlCLElBQUksQ0FBQyxRQUFRO0FBQzdCLGNBQU0sUUFBUSxRQUFRLE9BQU8sQ0FBQyxDQUFDLEVBQUUsR0FBRyxNQUFNLElBQUksYUFBYSxJQUFJLEdBQUc7QUFDbEUsWUFBSSxNQUFNLFdBQVcsRUFBRyxRQUFPO0FBQy9CLGVBQ0UsZ0JBQUFBLE1BQUMsU0FBa0IsV0FBVSx3QkFDM0I7QUFBQSwwQkFBQUQsS0FBQyxTQUFJLFdBQVUsOEJBQThCLGNBQUksT0FBTTtBQUFBLFVBQ3ZELGdCQUFBQSxLQUFDLFNBQUksV0FBVSxvQkFDWixnQkFBTSxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFDcEIsZ0JBQUFDO0FBQUEsWUFBQztBQUFBO0FBQUEsY0FFQyxXQUFVO0FBQUEsY0FDVixTQUFTLE1BQU0sU0FBUyxJQUFJO0FBQUEsY0FFNUI7QUFBQSxnQ0FBQUQsS0FBQyxVQUFLLFdBQVUsb0JBQW1CLDBCQUFBQSxLQUFDLGFBQVUsTUFBTSxJQUFJLE1BQU0sTUFBTSxJQUFJLEdBQUU7QUFBQSxnQkFDMUUsZ0JBQUFBLEtBQUMsVUFBSyxXQUFVLHFCQUFxQixjQUFJLE9BQU07QUFBQTtBQUFBO0FBQUEsWUFMMUM7QUFBQSxVQU1QLENBQ0QsR0FDSDtBQUFBLGFBYlEsSUFBSSxHQWNkO0FBQUEsTUFFSixDQUFDO0FBQUEsTUFDQSxRQUFRLFdBQVcsS0FDbEIsZ0JBQUFDLE1BQUMsU0FBSSxXQUFVLHFCQUFvQjtBQUFBO0FBQUEsUUFBdUI7QUFBQSxRQUFPO0FBQUEsU0FBQztBQUFBLE9BRXRFO0FBQUEsS0FDRixHQUNGO0FBRUo7OztBQ3hGQSxTQUFTLFlBQUFLLGlCQUFnQjtBQUN6QixTQUFTLFFBQUFDLE9BQU0sUUFBUSxpQkFBaUI7OztBQ0R4QyxTQUFTLFlBQUFDLFdBQVUsVUFBQUMsZUFBa0M7QUE4QjdDLFNBRUUsT0FBQUMsTUFGRixRQUFBQyxhQUFBO0FBdEJELFNBQVMsU0FBUyxFQUFFLFFBQVEsVUFBVSxZQUFZLEdBQVU7QUFDakUsUUFBTSxDQUFDLE9BQU8sUUFBUSxJQUFJSCxVQUFTLEVBQUU7QUFDckMsUUFBTSxXQUFXQyxRQUF5QixJQUFJO0FBRTlDLFFBQU0sZ0JBQWdCLENBQUMsTUFBdUM7QUFDNUQsUUFBSSxFQUFFLFFBQVEsV0FBVyxNQUFNLEtBQUssR0FBRztBQUNyQyxRQUFFLGVBQWU7QUFDakIsZUFBUyxDQUFDLEdBQUcsUUFBUSxNQUFNLEtBQUssQ0FBQyxDQUFDO0FBQ2xDLGVBQVMsRUFBRTtBQUFBLElBQ2I7QUFDQSxRQUFJLEVBQUUsUUFBUSxlQUFlLFVBQVUsTUFBTSxPQUFPLFNBQVMsR0FBRztBQUM5RCxlQUFTLE9BQU8sTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUFBLElBQzlCO0FBQUEsRUFDRjtBQUVBLFFBQU0sU0FBUyxDQUFDLFFBQWdCO0FBQzlCLGFBQVMsT0FBTyxPQUFPLENBQUMsR0FBRyxNQUFNLE1BQU0sR0FBRyxDQUFDO0FBQUEsRUFDN0M7QUFFQSxTQUNFLGdCQUFBRSxNQUFDLFNBQUksV0FBVSx1QkFBc0IsU0FBUyxNQUFNLFNBQVMsU0FBUyxNQUFNLEdBQ3pFO0FBQUEsV0FBTyxJQUFJLENBQUMsR0FBRyxNQUNkLGdCQUFBQSxNQUFDLFVBQWEsV0FBVSxZQUNyQjtBQUFBO0FBQUEsTUFDRCxnQkFBQUQsS0FBQyxZQUFPLFNBQVMsTUFBTSxPQUFPLENBQUMsR0FBRyxrQkFBTztBQUFBLFNBRmhDLENBR1gsQ0FDRDtBQUFBLElBQ0QsZ0JBQUFBO0FBQUEsTUFBQztBQUFBO0FBQUEsUUFDQyxLQUFLO0FBQUEsUUFDTCxXQUFVO0FBQUEsUUFDVixPQUFPO0FBQUEsUUFDUCxVQUFVLENBQUMsTUFBTSxTQUFTLEVBQUUsT0FBTyxLQUFLO0FBQUEsUUFDeEMsV0FBVztBQUFBLFFBQ1gsYUFBYSxPQUFPLFdBQVcsSUFBSSxjQUFjO0FBQUE7QUFBQSxJQUNuRDtBQUFBLEtBQ0Y7QUFFSjs7O0FEbkJRLFNBQ0UsT0FBQUUsTUFERixRQUFBQyxhQUFBO0FBcEJELFNBQVMsc0JBQXNCO0FBQ3BDLFFBQU0sRUFBRSxPQUFPLFNBQVMsSUFBSSxVQUFVO0FBQ3RDLFFBQU0sZUFBZSxNQUFNLFFBQVEsT0FBTyxnQkFBZ0IsQ0FBQztBQUMzRCxRQUFNLENBQUMsVUFBVSxXQUFXLElBQUlDLFVBQVMsS0FBSztBQUU5QyxRQUFNLFlBQVksTUFBTSxRQUFRLE9BQU8sU0FBUyxRQUFRLENBQUMsTUFBTSxFQUFFLE1BQU07QUFDdkUsUUFBTSxVQUFVLFVBQVUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHO0FBRTFDLFFBQU0saUJBQWlCLE1BQU07QUFDM0IsVUFBTSxPQUEwQjtBQUFBLE1BQzlCLElBQUksRUFBRSxPQUFPLFFBQVEsQ0FBQyxLQUFLLElBQUksUUFBUSxHQUFHO0FBQUEsTUFDMUMsTUFBTSxDQUFDO0FBQUEsSUFDVDtBQUNBLGFBQVMsRUFBRSxNQUFNLG1CQUFtQixhQUFhLEtBQUssQ0FBQztBQUN2RCxnQkFBWSxJQUFJO0FBQUEsRUFDbEI7QUFFQSxNQUFJLENBQUMsWUFBWSxhQUFhLFdBQVcsR0FBRztBQUMxQyxXQUNFLGdCQUFBRixLQUFDLFNBQUksV0FBVSwwQkFDYiwwQkFBQUMsTUFBQyxZQUFPLFdBQVUsdUJBQXNCLFNBQVMsZ0JBQy9DO0FBQUEsc0JBQUFELEtBQUMsYUFBVSxNQUFNLElBQUk7QUFBQSxNQUFFO0FBQUEsT0FDekIsR0FDRjtBQUFBLEVBRUo7QUFFQSxTQUNFLGdCQUFBQyxNQUFDLFNBQUksV0FBVSx3QkFDYjtBQUFBLG9CQUFBQSxNQUFDLFNBQUksV0FBVSx1QkFBc0IsU0FBUyxNQUFNLFlBQVksQ0FBQyxRQUFRLEdBQ3ZFO0FBQUEsc0JBQUFELEtBQUMsYUFBVSxNQUFNLElBQUk7QUFBQSxNQUNyQixnQkFBQUEsS0FBQyxVQUFLLDBCQUFZO0FBQUEsTUFDbEIsZ0JBQUFBLEtBQUMsVUFBSyxXQUFVLHNCQUFzQix1QkFBYSxRQUFPO0FBQUEsTUFDMUQsZ0JBQUFBLEtBQUMsVUFBSyxXQUFVLHdCQUF3QixxQkFBVyxXQUFNLFVBQUk7QUFBQSxPQUMvRDtBQUFBLElBRUMsWUFDQyxnQkFBQUMsTUFBQyxTQUFJLFdBQVUscUJBQ1o7QUFBQSxtQkFBYSxJQUFJLENBQUMsTUFBTSxNQUN2QixnQkFBQUQ7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUVDLGFBQWE7QUFBQSxVQUNiLE9BQU87QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFVBQ0EsVUFBVSxDQUFDLE1BQU0sU0FBUyxFQUFFLE1BQU0sc0JBQXNCLEtBQUssR0FBRyxhQUFhLEVBQUUsQ0FBQztBQUFBLFVBQ2hGLFVBQVUsTUFBTSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsS0FBSyxFQUFFLENBQUM7QUFBQTtBQUFBLFFBTjFEO0FBQUEsTUFPUCxDQUNEO0FBQUEsTUFDRCxnQkFBQUMsTUFBQyxZQUFPLFdBQVUsaUJBQWdCLFNBQVMsZ0JBQWdCLE9BQU8sRUFBRSxXQUFXLEVBQUUsR0FDL0U7QUFBQSx3QkFBQUQsS0FBQ0csT0FBQSxFQUFLLE1BQU0sSUFBSTtBQUFBLFFBQUU7QUFBQSxTQUNwQjtBQUFBLE9BQ0Y7QUFBQSxLQUVKO0FBRUo7QUFFQSxTQUFTLGVBQWU7QUFBQSxFQUN0QjtBQUFBLEVBQWE7QUFBQSxFQUFPO0FBQUEsRUFBUztBQUFBLEVBQVc7QUFBQSxFQUFVO0FBQ3BELEdBT0c7QUFDRCxRQUFNLGNBQWMsVUFBVSxLQUFLLENBQUMsTUFBTSxFQUFFLFFBQVEsWUFBWSxHQUFHLEtBQUs7QUFFeEUsU0FDRSxnQkFBQUYsTUFBQyxTQUFJLFdBQVUsb0JBQ2I7QUFBQSxvQkFBQUEsTUFBQyxTQUFJLFdBQVUsMkJBQ2I7QUFBQSxzQkFBQUQsS0FBQyxVQUFLLFdBQVUsd0JBQXdCLGtCQUFRLEdBQUU7QUFBQSxNQUNsRCxnQkFBQUEsS0FBQyxVQUFLLFdBQVUsMEJBQXlCLGdCQUFFO0FBQUEsTUFDM0MsZ0JBQUFBLEtBQUMsWUFBTyxXQUFVLFlBQVcsU0FBUyxVQUFVLE9BQU0sZUFDcEQsMEJBQUFBLEtBQUMsVUFBTyxNQUFNLElBQUksR0FDcEI7QUFBQSxPQUNGO0FBQUEsSUFFQSxnQkFBQUMsTUFBQyxTQUFJLFdBQVUseUJBQ2I7QUFBQSxzQkFBQUEsTUFBQyxTQUFJLFdBQVUsbUJBQ2I7QUFBQSx3QkFBQUE7QUFBQSxVQUFDO0FBQUE7QUFBQSxZQUNDLFdBQVU7QUFBQSxZQUNWLE9BQU8sWUFBWSxHQUFHO0FBQUEsWUFDdEIsVUFBVSxDQUFDLE1BQU0sU0FBUyxFQUFFLEdBQUcsYUFBYSxJQUFJLEVBQUUsR0FBRyxZQUFZLElBQUksT0FBTyxFQUFFLE9BQU8sTUFBTSxFQUFFLENBQUM7QUFBQSxZQUU5RjtBQUFBLDhCQUFBRCxLQUFDLFlBQU8sT0FBTSxJQUFHLDZCQUFlO0FBQUEsY0FDL0IsUUFBUSxJQUFJLENBQUMsTUFDWixnQkFBQUEsS0FBQyxZQUFlLE9BQU8sR0FBSSxlQUFkLENBQWdCLENBQzlCO0FBQUE7QUFBQTtBQUFBLFFBQ0g7QUFBQSxRQUNBLGdCQUFBQSxLQUFDLFVBQUssV0FBVSxzQkFBcUIsZUFBQztBQUFBLFFBQ3JDLGFBQWEsU0FBUyxZQUFZLFlBQVksVUFDN0MsZ0JBQUFDO0FBQUEsVUFBQztBQUFBO0FBQUEsWUFDQyxXQUFVO0FBQUEsWUFDVixPQUFPLE9BQU8sWUFBWSxHQUFHLE1BQU07QUFBQSxZQUNuQyxVQUFVLENBQUMsTUFBTSxTQUFTLEVBQUUsR0FBRyxhQUFhLElBQUksRUFBRSxHQUFHLFlBQVksSUFBSSxRQUFRLEVBQUUsT0FBTyxNQUFNLEVBQUUsQ0FBQztBQUFBLFlBRS9GO0FBQUEsOEJBQUFELEtBQUMsWUFBTyxPQUFNLElBQUcsNkJBQWU7QUFBQSxjQUMvQixZQUFZLFFBQVEsSUFBSSxDQUFDLFFBQ3hCLGdCQUFBQSxLQUFDLFlBQWlCLE9BQU8sS0FBTSxpQkFBbEIsR0FBc0IsQ0FDcEM7QUFBQTtBQUFBO0FBQUEsUUFDSCxJQUNFLGFBQWEsU0FBUyxXQUN4QixnQkFBQUM7QUFBQSxVQUFDO0FBQUE7QUFBQSxZQUNDLFdBQVU7QUFBQSxZQUNWLE9BQU8sT0FBTyxZQUFZLEdBQUcsTUFBTTtBQUFBLFlBQ25DLFVBQVUsQ0FBQyxNQUFNLFNBQVMsRUFBRSxHQUFHLGFBQWEsSUFBSSxFQUFFLEdBQUcsWUFBWSxJQUFJLFFBQVEsRUFBRSxPQUFPLFVBQVUsT0FBTyxFQUFFLENBQUM7QUFBQSxZQUUxRztBQUFBLDhCQUFBRCxLQUFDLFlBQU8sT0FBTSxRQUFPLGtCQUFJO0FBQUEsY0FDekIsZ0JBQUFBLEtBQUMsWUFBTyxPQUFNLFNBQVEsbUJBQUs7QUFBQTtBQUFBO0FBQUEsUUFDN0IsSUFFQSxnQkFBQUE7QUFBQSxVQUFDO0FBQUE7QUFBQSxZQUNDLFdBQVU7QUFBQSxZQUNWLE9BQU8sT0FBTyxZQUFZLEdBQUcsVUFBVSxFQUFFO0FBQUEsWUFDekMsVUFBVSxDQUFDLE1BQU0sU0FBUyxFQUFFLEdBQUcsYUFBYSxJQUFJLEVBQUUsR0FBRyxZQUFZLElBQUksUUFBUSxFQUFFLE9BQU8sTUFBTSxFQUFFLENBQUM7QUFBQSxZQUMvRixhQUFZO0FBQUE7QUFBQSxRQUNkO0FBQUEsU0FFSjtBQUFBLE1BRUEsZ0JBQUFDLE1BQUMsU0FBSSxXQUFVLG9CQUNiO0FBQUEsd0JBQUFELEtBQUMsVUFBSyxXQUFVLDBCQUF5QixrQkFBSTtBQUFBLFFBQzdDLGdCQUFBQTtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0MsUUFBUSxZQUFZO0FBQUEsWUFDcEIsVUFBVSxDQUFDLFNBQVMsU0FBUyxFQUFFLEdBQUcsYUFBYSxLQUFLLENBQUM7QUFBQSxZQUNyRCxhQUFZO0FBQUE7QUFBQSxRQUNkO0FBQUEsU0FDRjtBQUFBLE9BQ0Y7QUFBQSxLQUNGO0FBRUo7OztBSm5JQSxZQUFZSSxZQUFXO0FBS1AsZ0JBQUFDLE1BeUVWLFFBQUFDLGFBekVVO0FBSGhCLFNBQVNDLFdBQVUsRUFBRSxNQUFNLE9BQU8sSUFBSSxHQUFHLEtBQUssR0FBc0Q7QUFDbEcsUUFBTSxXQUFXLEtBQUssT0FBTyxDQUFDLEVBQUUsWUFBWSxJQUFJLEtBQUssTUFBTSxDQUFDLEVBQUUsUUFBUSxhQUFhLENBQUMsR0FBRyxNQUFNLEVBQUUsWUFBWSxDQUFDO0FBQzVHLFFBQU0sT0FBUUgsT0FBYyxRQUFRO0FBQ3BDLFNBQU8sT0FBTyxnQkFBQUMsS0FBQyxRQUFLLE1BQWEsR0FBRyxNQUFNLElBQUs7QUFDakQ7QUFFTyxTQUFTLFlBQVk7QUFDMUIsUUFBTSxFQUFFLE9BQU8sU0FBUyxJQUFJLFVBQVU7QUFDdEMsUUFBTSxhQUFhLE1BQU0sR0FBRztBQUM1QixRQUFNLFVBQVUsTUFBTSxRQUFRLE9BQU8sU0FBUyxVQUFVO0FBQ3hELFFBQU0sZ0JBQWdCLE1BQU0sR0FBRztBQUMvQixRQUFNLGNBQWMsTUFBTSxHQUFHLFlBQVksWUFBWTtBQUNyRCxRQUFNLENBQUMsWUFBWSxhQUFhLElBQUlHLFVBQVMsS0FBSztBQUdsRCxRQUFNLENBQUMsU0FBUyxVQUFVLElBQUlBLFVBQXdCLElBQUk7QUFDMUQsUUFBTSxDQUFDLFlBQVksYUFBYSxJQUFJQSxVQUF3QixJQUFJO0FBRWhFLFFBQU0sY0FBY0MsYUFBWSxDQUFDLFFBQWdCLFdBQVcsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUNwRSxRQUFNLFlBQVlBLGFBQVksTUFBTTtBQUFFLGVBQVcsSUFBSTtBQUFHLGtCQUFjLElBQUk7QUFBQSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ2pGLFFBQU0sYUFBYUEsYUFBWSxDQUFDLEdBQW9CLFFBQWdCO0FBQ2xFLE1BQUUsZUFBZTtBQUNqQixNQUFFLGFBQWEsYUFBYTtBQUM1QixrQkFBYyxHQUFHO0FBQUEsRUFDbkIsR0FBRyxDQUFDLENBQUM7QUFDTCxRQUFNLFNBQVNBLGFBQVksQ0FBQyxHQUFvQixVQUFrQjtBQUNoRSxNQUFFLGVBQWU7QUFDakIsUUFBSSxZQUFZLFFBQVEsWUFBWSxPQUFPO0FBQ3pDLGVBQVMsRUFBRSxNQUFNLGNBQWMsTUFBTSxTQUFTLElBQUksTUFBTSxDQUFDO0FBQUEsSUFDM0Q7QUFDQSxlQUFXLElBQUk7QUFDZixrQkFBYyxJQUFJO0FBQUEsRUFDcEIsR0FBRyxDQUFDLFNBQVMsUUFBUSxDQUFDO0FBRXRCLFFBQU0saUJBQWlCLENBQUMsU0FBb0I7QUFDMUMsUUFBSSxDQUFDLFFBQVM7QUFDZCxVQUFNLEtBQUssWUFBWSxJQUFJO0FBQzNCLFVBQU0sUUFBcUI7QUFBQSxNQUN6QixLQUFLLGdCQUFnQixNQUFNLE1BQU0sUUFBUSxPQUFPLFFBQVE7QUFBQSxNQUN4RCxPQUFPLEdBQUc7QUFBQSxNQUNWO0FBQUEsTUFDQSxHQUFHLFVBQVUsR0FBRyxhQUFhO0FBQUEsSUFDL0I7QUFDQSxhQUFTLEVBQUUsTUFBTSxhQUFhLFlBQVksTUFBTSxDQUFDO0FBRWpELFVBQU0sWUFBWSxHQUFHLFlBQVksS0FBSztBQUN0QyxRQUFJLGNBQWMsUUFBVztBQUMzQixlQUFTLEVBQUUsTUFBTSxZQUFZLEtBQUssTUFBTSxLQUFLLE9BQU8sVUFBVSxDQUFDO0FBQUEsSUFDakU7QUFDQSxrQkFBYyxLQUFLO0FBQUEsRUFDckI7QUFFQSxRQUFNLG1CQUFtQixDQUFDLE9BQXVDO0FBQy9ELFFBQUksQ0FBQyxRQUFTO0FBQ2QsVUFBTSxRQUFRLFVBQVUsR0FBRyxLQUFLO0FBQ2hDLFVBQU0sTUFBTSxnQkFBZ0IsTUFBTSxLQUFLLE1BQU0sUUFBUSxPQUFPLFFBQVE7QUFDcEUsYUFBUyxFQUFFLE1BQU0sYUFBYSxZQUFZLE1BQU0sQ0FBQztBQUNqRCxVQUFNLEtBQUssWUFBWSxNQUFNLElBQUk7QUFDakMsVUFBTSxZQUFZLEdBQUcsWUFBWSxLQUFLO0FBQ3RDLFFBQUksY0FBYyxRQUFXO0FBQzNCLGVBQVMsRUFBRSxNQUFNLFlBQVksS0FBSyxNQUFNLEtBQUssT0FBTyxVQUFVLENBQUM7QUFBQSxJQUNqRTtBQUFBLEVBQ0Y7QUFFQSxNQUFJLENBQUMsU0FBUztBQUNaLFdBQ0UsZ0JBQUFKLEtBQUMsU0FBSSxXQUFVLGdCQUNiLDBCQUFBQSxLQUFDLFNBQUksT0FBTyxFQUFFLFNBQVMsUUFBUSxZQUFZLFVBQVUsZ0JBQWdCLFVBQVUsTUFBTSxHQUFHLE9BQU8sdUJBQXVCLEdBQ3BILDBCQUFBQSxLQUFDLE9BQUUsMENBQTRCLEdBQ2pDLEdBQ0Y7QUFBQSxFQUVKO0FBRUEsU0FDRSxnQkFBQUMsTUFBQyxTQUFJLFdBQVUsZ0JBQ2I7QUFBQSxvQkFBQUEsTUFBQyxTQUFJLFdBQVUsdUJBQ2I7QUFBQSxzQkFBQUQsS0FBQyxRQUFJLGtCQUFRLFNBQVMsVUFBUztBQUFBLE1BQy9CLGdCQUFBQSxLQUFDLFlBQU8sV0FBVSxZQUFXLFNBQVMsTUFBTSxjQUFjLElBQUksR0FBRyxPQUFNLGFBQ3JFLDBCQUFBQSxLQUFDSyxPQUFBLEVBQUssTUFBTSxJQUFJLEdBQ2xCO0FBQUEsT0FDRjtBQUFBLElBRUEsZ0JBQUFMLEtBQUMsU0FBSSxXQUFVLGNBQ1osa0JBQVEsT0FBTyxJQUFJLENBQUMsR0FBRyxNQUFNO0FBQzVCLFVBQUksZUFBZSxDQUFDLEVBQUUsTUFBTSxZQUFZLEVBQUUsU0FBUyxXQUFXLEtBQUssQ0FBQyxFQUFFLElBQUksWUFBWSxFQUFFLFNBQVMsV0FBVyxLQUFLLENBQUMsRUFBRSxLQUFLLFNBQVMsV0FBVyxHQUFHO0FBQzlJLGVBQU87QUFBQSxNQUNUO0FBQ0EsWUFBTSxLQUFLLFlBQVksRUFBRSxJQUFJLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLGNBQWM7QUFDdkUsWUFBTSxXQUFXLE1BQU07QUFDdkIsYUFDRSxnQkFBQUM7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUVDLFdBQVcsY0FBYyxXQUFXLFdBQVcsRUFBRTtBQUFBLFVBQ2pELFNBQVMsTUFBTSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsS0FBSyxFQUFFLENBQUM7QUFBQSxVQUN4RCxXQUFTO0FBQUEsVUFDVCxhQUFhLE1BQU0sWUFBWSxDQUFDO0FBQUEsVUFDaEM7QUFBQSxVQUNBLFlBQVksQ0FBQyxNQUFNLFdBQVcsR0FBRyxDQUFDO0FBQUEsVUFDbEMsUUFBUSxDQUFDLE1BQU0sT0FBTyxHQUFHLENBQUM7QUFBQSxVQUMxQixPQUFPO0FBQUEsWUFDTCxTQUFTLFlBQVksSUFBSSxNQUFNO0FBQUEsWUFDL0IsV0FBVyxlQUFlLElBQUksNEJBQTRCO0FBQUEsVUFDNUQ7QUFBQSxVQUVBO0FBQUEsNEJBQUFELEtBQUMsVUFBSyxXQUFVLGVBQWMsMEJBQUFBLEtBQUNNLGVBQUEsRUFBYSxNQUFNLElBQUksR0FBRTtBQUFBLFlBQ3hELGdCQUFBTixLQUFDLFVBQUssV0FBVyxhQUFhLFdBQVcsWUFBWSxFQUFFLElBQ3JELDBCQUFBQSxLQUFDRSxZQUFBLEVBQVUsTUFBTSxHQUFHLE1BQU0sTUFBTSxJQUFJLEdBQ3RDO0FBQUEsWUFDQSxnQkFBQUQsTUFBQyxTQUFJLFdBQVUsY0FDYjtBQUFBLDhCQUFBRCxLQUFDLFNBQUksV0FBVSxlQUFlLFlBQUUsU0FBUyxZQUFXO0FBQUEsY0FDcEQsZ0JBQUFDLE1BQUMsU0FBSSxXQUFVLGNBQWM7QUFBQSxrQkFBRSxPQUFPO0FBQUEsZ0JBQUc7QUFBQSxnQkFBSSxHQUFHO0FBQUEsaUJBQU07QUFBQSxlQUN4RDtBQUFBLFlBQ0MsRUFBRSxZQUFZLGdCQUFBRCxLQUFDLFVBQUssV0FBVSxrQkFBaUI7QUFBQSxZQUNoRCxnQkFBQUMsTUFBQyxTQUFJLFdBQVUsaUJBQ2I7QUFBQSw4QkFBQUQsS0FBQyxZQUFPLFdBQVUsWUFBVyxTQUFTLENBQUMsTUFBTTtBQUFFLGtCQUFFLGdCQUFnQjtBQUFHLHlCQUFTLEVBQUUsTUFBTSxtQkFBbUIsWUFBWSxVQUFVLEVBQUUsQ0FBQztBQUFBLGNBQUUsR0FBRyxPQUFNLGFBQzFJLDBCQUFBQSxLQUFDLFFBQUssTUFBTSxJQUFJLEdBQ2xCO0FBQUEsY0FDQSxnQkFBQUEsS0FBQyxZQUFPLFdBQVUsWUFBVyxTQUFTLENBQUMsTUFBTTtBQUFFLGtCQUFFLGdCQUFnQjtBQUFHLHlCQUFTLEVBQUUsTUFBTSxnQkFBZ0IsWUFBWSxVQUFVLEVBQUUsQ0FBQztBQUFBLGNBQUUsR0FBRyxPQUFNLFVBQ3ZJLDBCQUFBQSxLQUFDTyxTQUFBLEVBQU8sTUFBTSxJQUFJLEdBQ3BCO0FBQUEsZUFDRjtBQUFBO0FBQUE7QUFBQSxRQTdCSyxFQUFFLE1BQU07QUFBQSxNQThCZjtBQUFBLElBRUosQ0FBQyxHQUNIO0FBQUEsSUFFQSxnQkFBQVAsS0FBQyxTQUFJLFdBQVUsa0JBQ2IsMEJBQUFDLE1BQUMsWUFBTyxXQUFVLGlCQUFnQixTQUFTLE1BQU0sY0FBYyxJQUFJLEdBQ2pFO0FBQUEsc0JBQUFELEtBQUNLLE9BQUEsRUFBSyxNQUFNLElBQUk7QUFBQSxNQUFFO0FBQUEsT0FDcEIsR0FDRjtBQUFBLElBRUEsZ0JBQUFKLE1BQUMsU0FBSSxXQUFVLG1CQUNiO0FBQUEsc0JBQUFELEtBQUMsU0FBSSxXQUFVLHlCQUF3Qix1QkFBUztBQUFBLE1BQ2hELGdCQUFBQSxLQUFDLFNBQUksV0FBVSx3QkFDWiwwQkFBZ0IsSUFBSSxDQUFDLElBQUksTUFDeEIsZ0JBQUFDLE1BQUMsWUFBZSxXQUFVLHVCQUFzQixTQUFTLE1BQU0saUJBQWlCLEVBQUUsR0FDaEY7QUFBQSx3QkFBQUQsS0FBQ0UsWUFBQSxFQUFVLE1BQU0sR0FBRyxNQUFNLE1BQU0sSUFBSTtBQUFBLFFBQUU7QUFBQSxRQUFFLEdBQUc7QUFBQSxXQURoQyxDQUViLENBQ0QsR0FDSDtBQUFBLE9BQ0Y7QUFBQSxJQUVBLGdCQUFBRixLQUFDLHVCQUFvQjtBQUFBLElBRXJCLGdCQUFBQSxLQUFDLGNBQVcsTUFBTSxZQUFZLFNBQVMsTUFBTSxjQUFjLEtBQUssR0FBRyxVQUFVLGdCQUFnQjtBQUFBLEtBQy9GO0FBRUo7OztBTWhLQSxTQUFTLFVBQUFRLGVBQWM7OztBQ0F2QixTQUFTLFlBQUFDLGlCQUFnQjtBQUN6QixTQUFTLFFBQUFDLE9BQU0sVUFBQUMsU0FBc0IsYUFBYTtBQXlDNUMsU0FDRSxPQUFBQyxNQURGLFFBQUFDLGFBQUE7QUFoQ04sU0FBUyxTQUFTO0FBQ2hCLFNBQU8sTUFBTSxLQUFLLE9BQU8sRUFBRSxTQUFTLEVBQUUsRUFBRSxNQUFNLEdBQUcsQ0FBQztBQUNwRDtBQUVBLFNBQVMsYUFBYTtBQUFBLEVBQ3BCO0FBQUEsRUFBVTtBQUFBLEVBQU87QUFBQSxFQUFVO0FBQzdCLEdBR0c7QUFDRCxRQUFNLGVBQWUsQ0FBQyxRQUFnQixVQUFrQjtBQUN0RCxVQUFNLFVBQVUsQ0FBQyxHQUFHLFNBQVMsT0FBTztBQUNwQyxZQUFRLE1BQU0sSUFBSTtBQUNsQixhQUFTLEVBQUUsR0FBRyxVQUFVLFFBQVEsQ0FBQztBQUFBLEVBQ25DO0FBRUEsUUFBTSxZQUFZLE1BQU07QUFDdEIsYUFBUyxFQUFFLEdBQUcsVUFBVSxTQUFTLENBQUMsR0FBRyxTQUFTLFNBQVMsVUFBVSxTQUFTLFFBQVEsU0FBUyxDQUFDLEVBQUUsRUFBRSxDQUFDO0FBQUEsRUFDbkc7QUFFQSxRQUFNLGVBQWUsQ0FBQyxXQUFtQjtBQUN2QyxVQUFNLFVBQVUsU0FBUyxRQUFRLE9BQU8sQ0FBQyxHQUFHLE1BQU0sTUFBTSxNQUFNO0FBQzlELFVBQU0sZUFBZSxTQUFTLGdCQUFnQixRQUFRLFNBQ2xELEtBQUssSUFBSSxHQUFHLFFBQVEsU0FBUyxDQUFDLElBQzlCLFNBQVMsZUFBZSxTQUN0QixTQUFTLGVBQWUsSUFDeEIsU0FBUztBQUNmLGFBQVMsRUFBRSxHQUFHLFVBQVUsU0FBUyxhQUFhLENBQUM7QUFBQSxFQUNqRDtBQUVBLFNBQ0UsZ0JBQUFBLE1BQUMsU0FBSSxXQUFVLGFBQ2I7QUFBQSxvQkFBQUEsTUFBQyxTQUFJLFdBQVUsb0JBQ2I7QUFBQSxzQkFBQUQsS0FBQyxVQUFLLFdBQVUsaUJBQWlCLGtCQUFRLEdBQUU7QUFBQSxNQUMzQyxnQkFBQUE7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNDLFdBQVU7QUFBQSxVQUNWLE9BQU8sU0FBUztBQUFBLFVBQ2hCLFVBQVUsQ0FBQyxNQUFNLFNBQVMsRUFBRSxHQUFHLFVBQVUsTUFBTSxFQUFFLE9BQU8sTUFBTSxDQUFDO0FBQUEsVUFDL0QsYUFBWTtBQUFBO0FBQUEsTUFDZDtBQUFBLE1BQ0EsZ0JBQUFBLEtBQUMsWUFBTyxXQUFVLFlBQVcsU0FBUyxVQUFVLE9BQU0sbUJBQ3BELDBCQUFBQSxLQUFDRSxTQUFBLEVBQU8sTUFBTSxJQUFJLEdBQ3BCO0FBQUEsT0FDRjtBQUFBLElBQ0EsZ0JBQUFGLEtBQUMsU0FBSSxXQUFVLGdCQUNaLG1CQUFTLFFBQVEsSUFBSSxDQUFDLEtBQUssT0FDMUIsZ0JBQUFDLE1BQUMsU0FBYSxXQUFVLG1CQUN0QjtBQUFBLHNCQUFBRDtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0MsV0FBVyxvQkFBb0IsU0FBUyxpQkFBaUIsS0FBSyxXQUFXLEVBQUU7QUFBQSxVQUMzRSxTQUFTLE1BQU0sU0FBUyxFQUFFLEdBQUcsVUFBVSxjQUFjLEdBQUcsQ0FBQztBQUFBLFVBQ3pELE9BQU07QUFBQSxVQUVOLDBCQUFBQSxLQUFDLFNBQU0sTUFBTSxJQUFJO0FBQUE7QUFBQSxNQUNuQjtBQUFBLE1BQ0EsZ0JBQUFBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDQyxXQUFVO0FBQUEsVUFDVixPQUFPO0FBQUEsVUFDUCxVQUFVLENBQUMsTUFBTSxhQUFhLElBQUksRUFBRSxPQUFPLEtBQUs7QUFBQSxVQUNoRCxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQUE7QUFBQSxNQUNuQjtBQUFBLE1BQ0MsU0FBUyxRQUFRLFNBQVMsS0FDekIsZ0JBQUFBLEtBQUMsWUFBTyxXQUFVLFlBQVcsU0FBUyxNQUFNLGFBQWEsRUFBRSxHQUN6RCwwQkFBQUEsS0FBQ0UsU0FBQSxFQUFPLE1BQU0sSUFBSSxHQUNwQjtBQUFBLFNBakJNLEVBbUJWLENBQ0QsR0FDSDtBQUFBLElBQ0MsU0FBUyxRQUFRLFNBQVMsS0FDekIsZ0JBQUFELE1BQUMsWUFBTyxXQUFVLG1CQUFrQixTQUFTLFdBQzNDO0FBQUEsc0JBQUFELEtBQUNHLE9BQUEsRUFBSyxNQUFNLElBQUk7QUFBQSxNQUFFO0FBQUEsT0FDcEI7QUFBQSxLQUVKO0FBRUo7QUFFTyxTQUFTLFlBQVksRUFBRSxXQUFXLFNBQVMsR0FBVTtBQUMxRCxRQUFNLENBQUMsTUFBTSxPQUFPLElBQUlDLFVBQVMsS0FBSztBQUV0QyxRQUFNLGNBQWMsTUFBTTtBQUN4QixhQUFTLENBQUMsR0FBRyxXQUFXO0FBQUEsTUFDdEIsSUFBSSxPQUFPO0FBQUEsTUFDWCxNQUFNO0FBQUEsTUFDTixTQUFTLENBQUMsWUFBWSxZQUFZLFVBQVU7QUFBQSxNQUM1QyxjQUFjO0FBQUEsSUFDaEIsQ0FBQyxDQUFDO0FBQUEsRUFDSjtBQUVBLFFBQU0saUJBQWlCLENBQUMsS0FBYSxNQUFvQjtBQUN2RCxVQUFNLE9BQU8sQ0FBQyxHQUFHLFNBQVM7QUFDMUIsU0FBSyxHQUFHLElBQUk7QUFDWixhQUFTLElBQUk7QUFBQSxFQUNmO0FBRUEsUUFBTSxpQkFBaUIsQ0FBQyxRQUFnQjtBQUN0QyxhQUFTLFVBQVUsT0FBTyxDQUFDLEdBQUcsTUFBTSxNQUFNLEdBQUcsQ0FBQztBQUFBLEVBQ2hEO0FBRUEsU0FDRSxnQkFBQUgsTUFBQyxTQUFJLFdBQVUsd0JBQ2I7QUFBQSxvQkFBQUEsTUFBQyxTQUFJLFdBQVUsa0JBQWlCLE9BQU8sRUFBRSxjQUFjLEVBQUUsR0FDdkQ7QUFBQSxzQkFBQUEsTUFBQyxXQUFNLFdBQVUsY0FBYztBQUFBLGtCQUFVO0FBQUEsUUFBTztBQUFBLFFBQVUsVUFBVSxXQUFXLElBQUksTUFBTTtBQUFBLFNBQUc7QUFBQSxNQUM1RixnQkFBQUQsS0FBQyxZQUFPLFdBQVUsaUJBQWdCLFNBQVMsTUFBTSxRQUFRLElBQUksR0FBRyx1QkFBUztBQUFBLE9BQzNFO0FBQUEsSUFFQSxnQkFBQUEsS0FBQyxTQUFNLE1BQVksU0FBUyxNQUFNLFFBQVEsS0FBSyxHQUFHLE9BQU0sZ0JBQWUsT0FBTyxLQUM1RSwwQkFBQUMsTUFBQyxTQUFJLFdBQVUsZ0NBQ1o7QUFBQSxnQkFBVSxJQUFJLENBQUMsR0FBRyxNQUNqQixnQkFBQUQ7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUVDLFVBQVU7QUFBQSxVQUNWLE9BQU87QUFBQSxVQUNQLFVBQVUsQ0FBQyxZQUFZLGVBQWUsR0FBRyxPQUFPO0FBQUEsVUFDaEQsVUFBVSxNQUFNLGVBQWUsQ0FBQztBQUFBO0FBQUEsUUFKM0IsRUFBRTtBQUFBLE1BS1QsQ0FDRDtBQUFBLE1BQ0QsZ0JBQUFDLE1BQUMsWUFBTyxXQUFVLGlCQUFnQixTQUFTLGFBQWEsT0FBTyxFQUFFLFdBQVcsRUFBRSxHQUM1RTtBQUFBLHdCQUFBRCxLQUFDRyxPQUFBLEVBQUssTUFBTSxJQUFJO0FBQUEsUUFBRTtBQUFBLFNBQ3BCO0FBQUEsT0FDRixHQUNGO0FBQUEsS0FDRjtBQUVKOzs7QURySFUsU0E2RkEsWUFBQUUsV0E3RkEsT0FBQUMsT0FhQSxRQUFBQyxjQWJBO0FBVkgsU0FBUyxZQUFZO0FBQzFCLFFBQU0sRUFBRSxPQUFPLFNBQVMsSUFBSSxVQUFVO0FBQ3RDLFFBQU0sYUFBYSxNQUFNLEdBQUc7QUFDNUIsUUFBTSxXQUFXLE1BQU0sR0FBRztBQUMxQixRQUFNLFVBQVUsTUFBTSxRQUFRLE9BQU8sU0FBUyxVQUFVO0FBRXhELE1BQUksQ0FBQyxTQUFTO0FBQ1osV0FDRSxnQkFBQUQsTUFBQyxTQUFJLFdBQVUsbUJBQ2IsMEJBQUFBLE1BQUMsU0FBSSxXQUFVLG1CQUNiLDBCQUFBQSxNQUFDLE9BQUUseUNBQTJCLEdBQ2hDLEdBQ0Y7QUFBQSxFQUVKO0FBRUEsUUFBTSxRQUFRLFlBQVksSUFBSSxRQUFRLE9BQU8sUUFBUSxJQUFJO0FBRXpELE1BQUksQ0FBQyxPQUFPO0FBQ1YsV0FDRSxnQkFBQUEsTUFBQyxTQUFJLFdBQVUsbUJBQ2IsMEJBQUFDLE9BQUMsU0FBSSxXQUFVLHFCQUNiO0FBQUEsc0JBQUFELE1BQUMsUUFBRyxxQkFBTztBQUFBLE1BQ1gsZ0JBQUFDLE9BQUMsU0FBSSxXQUFVLGNBQ2I7QUFBQSx3QkFBQUQsTUFBQyxXQUFNLFdBQVUsY0FBYSxtQkFBSztBQUFBLFFBQ25DLGdCQUFBQTtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0MsV0FBVTtBQUFBLFlBQ1YsT0FBTyxRQUFRO0FBQUEsWUFDZixVQUFVLENBQUMsTUFBTSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsS0FBSyxZQUFZLFNBQVMsRUFBRSxHQUFHLFNBQVMsT0FBTyxFQUFFLE9BQU8sTUFBTSxFQUFFLENBQUM7QUFBQTtBQUFBLFFBQ3ZIO0FBQUEsU0FDRjtBQUFBLE1BQ0EsZ0JBQUFDLE9BQUMsU0FBSSxXQUFVLGNBQ2I7QUFBQSx3QkFBQUQsTUFBQyxXQUFNLFdBQVUsY0FBYSxpQkFBRztBQUFBLFFBQ2pDLGdCQUFBQTtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0MsV0FBVTtBQUFBLFlBQ1YsT0FBTyxRQUFRO0FBQUEsWUFDZixVQUFVLENBQUMsTUFBTSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsS0FBSyxZQUFZLFNBQVMsRUFBRSxHQUFHLFNBQVMsS0FBSyxFQUFFLE9BQU8sTUFBTSxFQUFFLENBQUM7QUFBQTtBQUFBLFFBQ3JIO0FBQUEsU0FDRjtBQUFBLE1BQ0EsZ0JBQUFDLE9BQUMsU0FBSSxXQUFVLGNBQ2I7QUFBQSx3QkFBQUQsTUFBQyxXQUFNLFdBQVUsY0FBYSx5QkFBVztBQUFBLFFBQ3pDLGdCQUFBQTtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0MsV0FBVTtBQUFBLFlBQ1YsTUFBTTtBQUFBLFlBQ04sT0FBTyxRQUFRLGVBQWU7QUFBQSxZQUM5QixVQUFVLENBQUMsTUFBTSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsS0FBSyxZQUFZLFNBQVMsRUFBRSxHQUFHLFNBQVMsYUFBYSxFQUFFLE9BQU8sU0FBUyxPQUFVLEVBQUUsQ0FBQztBQUFBLFlBQ3hJLGFBQVk7QUFBQTtBQUFBLFFBQ2Q7QUFBQSxTQUNGO0FBQUEsTUFDQSxnQkFBQUMsT0FBQyxTQUFJLFdBQVUsY0FDYjtBQUFBLHdCQUFBRCxNQUFDLFdBQU0sV0FBVSxjQUFhLGtCQUFJO0FBQUEsUUFDbEMsZ0JBQUFBO0FBQUEsVUFBQztBQUFBO0FBQUEsWUFDQyxXQUFVO0FBQUEsWUFDVixPQUFPLFFBQVEsUUFBUTtBQUFBLFlBQ3ZCLFVBQVUsQ0FBQyxNQUFNLFNBQVMsRUFBRSxNQUFNLGtCQUFrQixLQUFLLFlBQVksU0FBUyxFQUFFLEdBQUcsU0FBUyxNQUFNLEVBQUUsT0FBTyxTQUFTLE9BQVUsRUFBRSxDQUFDO0FBQUEsWUFDakksYUFBWTtBQUFBO0FBQUEsUUFDZDtBQUFBLFNBQ0Y7QUFBQSxNQUNBLGdCQUFBQSxNQUFDLFNBQUksT0FBTyxFQUFFLFdBQVcsR0FBRyxHQUMxQiwwQkFBQUM7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNDLFdBQVU7QUFBQSxVQUNWLFNBQVMsTUFBTSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsS0FBSyxXQUFXLENBQUM7QUFBQSxVQUVuRTtBQUFBLDRCQUFBRCxNQUFDRSxTQUFBLEVBQU8sTUFBTSxJQUFJO0FBQUEsWUFBRTtBQUFBO0FBQUE7QUFBQSxNQUN0QixHQUNGO0FBQUEsT0FDRixHQUNGO0FBQUEsRUFFSjtBQUVBLFFBQU0sS0FBSyxZQUFZLE1BQU0sSUFBSTtBQUNqQyxRQUFNLGNBQWMsQ0FBQyxVQUFnQztBQUNuRCxhQUFTLEVBQUUsTUFBTSxnQkFBZ0IsWUFBWSxVQUFVLE9BQU8sRUFBRSxHQUFHLE9BQU8sR0FBRyxNQUFNLEVBQUUsQ0FBQztBQUFBLEVBQ3hGO0FBRUEsU0FDRSxnQkFBQUQsT0FBQyxTQUFJLFdBQVUsbUJBQ2I7QUFBQSxvQkFBQUQsTUFBQyxTQUFJLFdBQVUsb0JBQ2IsMEJBQUFBLE1BQUMsVUFBSyxXQUFVLHdCQUF3QixjQUFJLFNBQVMsTUFBTSxNQUFLLEdBQ2xFO0FBQUEsSUFFQSxnQkFBQUMsT0FBQyxTQUFJLFdBQVUsb0JBRWI7QUFBQSxzQkFBQUEsT0FBQyxTQUFJLFdBQVUsY0FDYjtBQUFBLHdCQUFBRCxNQUFDLFdBQU0sV0FBVSxjQUFhLG1CQUFLO0FBQUEsUUFDbkMsZ0JBQUFBLE1BQUMsV0FBTSxXQUFVLGNBQWEsT0FBTyxNQUFNLE9BQU8sVUFBVSxDQUFDLE1BQU0sWUFBWSxFQUFFLE9BQU8sRUFBRSxPQUFPLE1BQU0sQ0FBQyxHQUFHO0FBQUEsU0FDN0c7QUFBQSxNQUVBLGdCQUFBQyxPQUFDLFNBQUksV0FBVSxjQUNiO0FBQUEsd0JBQUFELE1BQUMsV0FBTSxXQUFVLGNBQWEsaUJBQUc7QUFBQSxRQUNqQyxnQkFBQUEsTUFBQyxXQUFNLFdBQVUsd0JBQXVCLE9BQU8sTUFBTSxLQUFLLFVBQVUsQ0FBQyxNQUFNLFlBQVksRUFBRSxLQUFLLEVBQUUsT0FBTyxNQUFNLENBQUMsR0FBRztBQUFBLFNBQ25IO0FBQUEsTUFFQyxNQUFNLFNBQVMsV0FBVyxNQUFNLFNBQVMsaUJBQ3hDLGdCQUFBQyxPQUFDLFNBQUksV0FBVSxrQkFDYjtBQUFBLHdCQUFBRCxNQUFDLFdBQU0sV0FBVSxjQUFhLHNCQUFRO0FBQUEsUUFDdEMsZ0JBQUFBLE1BQUMsV0FBTSxNQUFLLFlBQVcsU0FBUyxNQUFNLFlBQVksT0FBTyxVQUFVLENBQUMsTUFBTSxZQUFZLEVBQUUsVUFBVSxFQUFFLE9BQU8sUUFBUSxDQUFDLEdBQUc7QUFBQSxTQUN6SDtBQUFBLE9BSUEsTUFBTSxTQUFTLFVBQVUsTUFBTSxTQUFTLGVBQ3hDLGdCQUFBQyxPQUFBRixXQUFBLEVBQ0U7QUFBQSx3QkFBQUUsT0FBQyxTQUFJLFdBQVUsY0FDYjtBQUFBLDBCQUFBRCxNQUFDLFdBQU0sV0FBVSxjQUFhLHlCQUFXO0FBQUEsVUFDekMsZ0JBQUFBLE1BQUMsV0FBTSxXQUFVLGNBQWEsT0FBTyxNQUFNLGVBQWUsSUFBSSxVQUFVLENBQUMsTUFBTSxZQUFZLEVBQUUsYUFBYSxFQUFFLE9BQU8sU0FBUyxPQUFVLENBQUMsR0FBRztBQUFBLFdBQzVJO0FBQUEsUUFDQSxnQkFBQUMsT0FBQyxTQUFJLFdBQVUsY0FDYjtBQUFBLDBCQUFBRCxNQUFDLFdBQU0sV0FBVSxjQUFhLGtCQUFJO0FBQUEsVUFDbEMsZ0JBQUFBLE1BQUMsV0FBTSxXQUFVLGNBQWEsT0FBTyxNQUFNLFFBQVEsSUFBSSxVQUFVLENBQUMsTUFBTSxZQUFZLEVBQUUsTUFBTSxFQUFFLE9BQU8sU0FBUyxPQUFVLENBQUMsR0FBRztBQUFBLFdBQzlIO0FBQUEsUUFDQSxnQkFBQUEsTUFBQyxTQUFJLFdBQVUscUJBQW9CO0FBQUEsUUFDbkMsZ0JBQUFBLE1BQUMsU0FBSSxXQUFVLCtCQUE4Qix5QkFBVztBQUFBLFFBQ3hELGdCQUFBQyxPQUFDLFNBQUksV0FBVSxjQUNiO0FBQUEsMEJBQUFELE1BQUMsV0FBTSxXQUFVLGNBQWEsd0JBQVU7QUFBQSxVQUN4QyxnQkFBQUEsTUFBQyxXQUFNLFdBQVUsY0FBYSxNQUFLLFVBQVMsT0FBTyxNQUFNLGFBQWEsYUFBYSxJQUFJLFVBQVUsQ0FBQyxNQUFNLFlBQVksRUFBRSxhQUFhLEVBQUUsR0FBRyxNQUFNLGFBQWEsV0FBVyxFQUFFLE9BQU8sUUFBUSxPQUFPLEVBQUUsT0FBTyxLQUFLLElBQUksT0FBVSxFQUFFLENBQUMsR0FBRztBQUFBLFdBQ2xPO0FBQUEsUUFDQSxnQkFBQUMsT0FBQyxTQUFJLFdBQVUsY0FDYjtBQUFBLDBCQUFBRCxNQUFDLFdBQU0sV0FBVSxjQUFhLHdCQUFVO0FBQUEsVUFDeEMsZ0JBQUFBLE1BQUMsV0FBTSxXQUFVLGNBQWEsTUFBSyxVQUFTLE9BQU8sTUFBTSxhQUFhLGFBQWEsSUFBSSxVQUFVLENBQUMsTUFBTSxZQUFZLEVBQUUsYUFBYSxFQUFFLEdBQUcsTUFBTSxhQUFhLFdBQVcsRUFBRSxPQUFPLFFBQVEsT0FBTyxFQUFFLE9BQU8sS0FBSyxJQUFJLE9BQVUsRUFBRSxDQUFDLEdBQUc7QUFBQSxXQUNsTztBQUFBLFFBQ0MsTUFBTSxTQUFTLGNBQ2QsZ0JBQUFDLE9BQUMsU0FBSSxXQUFVLGNBQ2I7QUFBQSwwQkFBQUQsTUFBQyxXQUFNLFdBQVUsY0FBYSx1QkFBUztBQUFBLFVBQ3ZDLGdCQUFBQSxNQUFDLFdBQU0sV0FBVSxjQUFhLE1BQUssVUFBUyxPQUFPLE1BQU0sYUFBYSxZQUFZLElBQUksVUFBVSxDQUFDLE1BQU0sWUFBWSxFQUFFLGFBQWEsRUFBRSxHQUFHLE1BQU0sYUFBYSxVQUFVLEVBQUUsT0FBTyxRQUFRLE9BQU8sRUFBRSxPQUFPLEtBQUssSUFBSSxPQUFVLEVBQUUsQ0FBQyxHQUFHO0FBQUEsV0FDaE87QUFBQSxTQUVKO0FBQUEsTUFJRCxNQUFNLFNBQVMsWUFDZCxnQkFBQUMsT0FBQUYsV0FBQSxFQUNFO0FBQUEsd0JBQUFFLE9BQUMsU0FBSSxXQUFVLGNBQ2I7QUFBQSwwQkFBQUQsTUFBQyxXQUFNLFdBQVUsY0FBYSxrQkFBSTtBQUFBLFVBQ2xDLGdCQUFBQSxNQUFDLFdBQU0sV0FBVSxjQUFhLE9BQU8sTUFBTSxRQUFRLElBQUksVUFBVSxDQUFDLE1BQU0sWUFBWSxFQUFFLE1BQU0sRUFBRSxPQUFPLFNBQVMsT0FBVSxDQUFDLEdBQUc7QUFBQSxXQUM5SDtBQUFBLFFBQ0EsZ0JBQUFBLE1BQUMsU0FBSSxXQUFVLHFCQUFvQjtBQUFBLFFBQ25DLGdCQUFBQSxNQUFDLFNBQUksV0FBVSwrQkFBOEIseUJBQVc7QUFBQSxRQUN4RCxnQkFBQUMsT0FBQyxTQUFJLFdBQVUsY0FDYjtBQUFBLDBCQUFBRCxNQUFDLFdBQU0sV0FBVSxjQUFhLGlCQUFHO0FBQUEsVUFDakMsZ0JBQUFBLE1BQUMsV0FBTSxXQUFVLGNBQWEsTUFBSyxVQUFTLE9BQU8sTUFBTSxhQUFhLE9BQU8sSUFBSSxVQUFVLENBQUMsTUFBTSxZQUFZLEVBQUUsYUFBYSxFQUFFLEdBQUcsTUFBTSxhQUFhLEtBQUssRUFBRSxPQUFPLFFBQVEsT0FBTyxFQUFFLE9BQU8sS0FBSyxJQUFJLE9BQVUsRUFBRSxDQUFDLEdBQUc7QUFBQSxXQUN0TjtBQUFBLFFBQ0EsZ0JBQUFDLE9BQUMsU0FBSSxXQUFVLGNBQ2I7QUFBQSwwQkFBQUQsTUFBQyxXQUFNLFdBQVUsY0FBYSxpQkFBRztBQUFBLFVBQ2pDLGdCQUFBQSxNQUFDLFdBQU0sV0FBVSxjQUFhLE1BQUssVUFBUyxPQUFPLE1BQU0sYUFBYSxPQUFPLElBQUksVUFBVSxDQUFDLE1BQU0sWUFBWSxFQUFFLGFBQWEsRUFBRSxHQUFHLE1BQU0sYUFBYSxLQUFLLEVBQUUsT0FBTyxRQUFRLE9BQU8sRUFBRSxPQUFPLEtBQUssSUFBSSxPQUFVLEVBQUUsQ0FBQyxHQUFHO0FBQUEsV0FDdE47QUFBQSxRQUNBLGdCQUFBQyxPQUFDLFNBQUksV0FBVSxjQUNiO0FBQUEsMEJBQUFELE1BQUMsV0FBTSxXQUFVLGNBQWEsa0JBQUk7QUFBQSxVQUNsQyxnQkFBQUEsTUFBQyxXQUFNLFdBQVUsY0FBYSxNQUFLLFVBQVMsT0FBTyxNQUFNLGFBQWEsUUFBUSxJQUFJLFVBQVUsQ0FBQyxNQUFNLFlBQVksRUFBRSxhQUFhLEVBQUUsR0FBRyxNQUFNLGFBQWEsTUFBTSxFQUFFLE9BQU8sUUFBUSxPQUFPLEVBQUUsT0FBTyxLQUFLLElBQUksT0FBVSxFQUFFLENBQUMsR0FBRztBQUFBLFdBQ3hOO0FBQUEsUUFDQSxnQkFBQUMsT0FBQyxTQUFJLFdBQVUsY0FDYjtBQUFBLDBCQUFBRCxNQUFDLFdBQU0sV0FBVSxjQUFhLGtCQUFJO0FBQUEsVUFDbEMsZ0JBQUFBLE1BQUMsV0FBTSxXQUFVLGNBQWEsT0FBTyxNQUFNLGFBQWEsUUFBUSxJQUFJLFVBQVUsQ0FBQyxNQUFNLFlBQVksRUFBRSxhQUFhLEVBQUUsR0FBRyxNQUFNLGFBQWEsTUFBTSxFQUFFLE9BQU8sU0FBUyxPQUFVLEVBQUUsQ0FBQyxHQUFHLGFBQVksa0JBQWlCO0FBQUEsV0FDL007QUFBQSxTQUNGO0FBQUEsTUFJRCxNQUFNLFNBQVMsVUFDZCxnQkFBQUMsT0FBQyxTQUFJLFdBQVUsY0FDYjtBQUFBLHdCQUFBRCxNQUFDLFdBQU0sV0FBVSxjQUFhLGtCQUFJO0FBQUEsUUFDbEMsZ0JBQUFBLE1BQUMsV0FBTSxXQUFVLGNBQWEsT0FBTyxNQUFNLFFBQVEsSUFBSSxVQUFVLENBQUMsTUFBTSxZQUFZLEVBQUUsTUFBTSxFQUFFLE9BQU8sU0FBUyxPQUFVLENBQUMsR0FBRztBQUFBLFNBQzlIO0FBQUEsTUFJRCxNQUFNLFNBQVMsWUFDZCxnQkFBQUMsT0FBQyxTQUFJLFdBQVUsY0FDYjtBQUFBLHdCQUFBRCxNQUFDLFdBQU0sV0FBVSxjQUFhLG9DQUFzQjtBQUFBLFFBQ3BELGdCQUFBQTtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0MsV0FBVTtBQUFBLFlBQ1YsTUFBTTtBQUFBLFlBQ04sUUFBUSxNQUFNLFdBQVcsQ0FBQyxHQUFHLEtBQUssSUFBSTtBQUFBLFlBQ3RDLFVBQVUsQ0FBQyxNQUFNLFlBQVksRUFBRSxTQUFTLEVBQUUsT0FBTyxNQUFNLE1BQU0sSUFBSSxFQUFFLE9BQU8sT0FBTyxFQUFFLENBQUM7QUFBQTtBQUFBLFFBQ3RGO0FBQUEsU0FDRjtBQUFBLE1BSUQsTUFBTSxTQUFTLFdBQ2QsZ0JBQUFDLE9BQUFGLFdBQUEsRUFDRTtBQUFBLHdCQUFBRSxPQUFDLFNBQUksV0FBVSxjQUNiO0FBQUEsMEJBQUFELE1BQUMsV0FBTSxXQUFVLGNBQWEscUJBQU87QUFBQSxVQUNyQyxnQkFBQUMsT0FBQyxTQUFJLFdBQVUsbUJBQ2I7QUFBQSw0QkFBQUQsTUFBQyxXQUFNLE1BQUssU0FBUSxPQUFRLE1BQU0sV0FBc0IsV0FBVyxVQUFVLENBQUMsTUFBTSxZQUFZLEVBQUUsU0FBUyxFQUFFLE9BQU8sTUFBTSxDQUFDLEdBQUc7QUFBQSxZQUM5SCxnQkFBQUEsTUFBQyxXQUFNLFdBQVUsY0FBYSxPQUFRLE1BQU0sV0FBc0IsSUFBSSxVQUFVLENBQUMsTUFBTSxZQUFZLEVBQUUsU0FBUyxFQUFFLE9BQU8sTUFBTSxDQUFDLEdBQUcsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHO0FBQUEsYUFDdko7QUFBQSxXQUNGO0FBQUEsUUFDQSxnQkFBQUMsT0FBQyxTQUFJLFdBQVUsY0FDYjtBQUFBLDBCQUFBRCxNQUFDLFdBQU0sV0FBVSxjQUFhLGtDQUFvQjtBQUFBLFVBQ2xELGdCQUFBQTtBQUFBLFlBQUM7QUFBQTtBQUFBLGNBQ0MsUUFBUSxNQUFNLFdBQVcsQ0FBQztBQUFBLGNBQzFCLFVBQVUsQ0FBQyxZQUFZLFlBQVksRUFBRSxRQUFRLENBQUM7QUFBQSxjQUM5QyxhQUFZO0FBQUE7QUFBQSxVQUNkO0FBQUEsV0FDRjtBQUFBLFNBQ0Y7QUFBQSxPQUlBLE1BQU0sU0FBUyxXQUFXLE1BQU0sU0FBUyxrQkFDekMsZ0JBQUFDLE9BQUFGLFdBQUEsRUFDRTtBQUFBLHdCQUFBRSxPQUFDLFNBQUksV0FBVSxjQUNiO0FBQUEsMEJBQUFELE1BQUMsV0FBTSxXQUFVLGNBQWEsMEJBQVk7QUFBQSxVQUMxQyxnQkFBQUEsTUFBQyxXQUFNLFdBQVUsY0FBYSxPQUFPLE1BQU0sZUFBZSxJQUFJLFVBQVUsQ0FBQyxNQUFNLFlBQVksRUFBRSxhQUFhLEVBQUUsT0FBTyxTQUFTLE9BQVUsQ0FBQyxHQUFHLGFBQVksaUJBQWdCO0FBQUEsV0FDeEs7QUFBQSxRQUNBLGdCQUFBQSxNQUFDLFNBQUksV0FBVSxxQkFBb0I7QUFBQSxRQUNuQyxnQkFBQUEsTUFBQyxTQUFJLFdBQVUsK0JBQThCLHlCQUFXO0FBQUEsUUFDeEQsZ0JBQUFDLE9BQUMsU0FBSSxXQUFVLGNBQ2I7QUFBQSwwQkFBQUQsTUFBQyxXQUFNLFdBQVUsY0FBYSwyQkFBYTtBQUFBLFVBQzNDLGdCQUFBQSxNQUFDLFdBQU0sV0FBVSxjQUFhLE1BQUssVUFBUyxPQUFPLE1BQU0sYUFBYSxhQUFhLElBQUksVUFBVSxDQUFDLE1BQU0sWUFBWSxFQUFFLGFBQWEsRUFBRSxHQUFHLE1BQU0sYUFBYSxXQUFXLEVBQUUsT0FBTyxRQUFRLE9BQU8sRUFBRSxPQUFPLEtBQUssSUFBSSxPQUFVLEVBQUUsQ0FBQyxHQUFHO0FBQUEsV0FDbE87QUFBQSxRQUNBLGdCQUFBQyxPQUFDLFNBQUksV0FBVSxjQUNiO0FBQUEsMEJBQUFELE1BQUMsV0FBTSxXQUFVLGNBQWEsNEJBQWM7QUFBQSxVQUM1QyxnQkFBQUEsTUFBQyxXQUFNLFdBQVUsY0FBYSxNQUFLLFVBQVMsT0FBTyxNQUFNLGFBQWEsWUFBWSxJQUFJLFVBQVUsQ0FBQyxNQUFNLFlBQVksRUFBRSxhQUFhLEVBQUUsR0FBRyxNQUFNLGFBQWEsVUFBVSxFQUFFLE9BQU8sUUFBUSxPQUFPLEVBQUUsT0FBTyxLQUFLLElBQUksT0FBVSxFQUFFLENBQUMsR0FBRztBQUFBLFdBQ2hPO0FBQUEsU0FDRjtBQUFBLE1BR0QsTUFBTSxTQUFTLGlCQUNkLGdCQUFBQyxPQUFDLFNBQUksV0FBVSxjQUNiO0FBQUEsd0JBQUFELE1BQUMsV0FBTSxXQUFVLGNBQWEsd0JBQVU7QUFBQSxRQUN4QyxnQkFBQUEsTUFBQyxXQUFNLFdBQVUsY0FBYSxNQUFLLFVBQVMsT0FBTyxNQUFNLE9BQU8sSUFBSSxVQUFVLENBQUMsTUFBTSxZQUFZLEVBQUUsS0FBSyxFQUFFLE9BQU8sUUFBUSxPQUFPLEVBQUUsT0FBTyxLQUFLLElBQUksT0FBVSxDQUFDLEdBQUc7QUFBQSxTQUNsSztBQUFBLE1BSUQsTUFBTSxTQUFTLFdBQ2QsZ0JBQUFDLE9BQUFGLFdBQUEsRUFDRTtBQUFBLHdCQUFBQyxNQUFDLFNBQUksV0FBVSxxQkFBb0I7QUFBQSxRQUNuQyxnQkFBQUEsTUFBQyxTQUFJLFdBQVUsK0JBQThCLHlCQUFXO0FBQUEsUUFDeEQsZ0JBQUFDLE9BQUMsU0FBSSxXQUFVLGNBQ2I7QUFBQSwwQkFBQUQsTUFBQyxXQUFNLFdBQVUsY0FBYSwyQkFBYTtBQUFBLFVBQzNDLGdCQUFBQSxNQUFDLFdBQU0sV0FBVSxjQUFhLE1BQUssVUFBUyxPQUFPLE1BQU0sYUFBYSxhQUFhLElBQUksVUFBVSxDQUFDLE1BQU0sWUFBWSxFQUFFLGFBQWEsRUFBRSxHQUFHLE1BQU0sYUFBYSxXQUFXLEVBQUUsT0FBTyxRQUFRLE9BQU8sRUFBRSxPQUFPLEtBQUssSUFBSSxPQUFVLEVBQUUsQ0FBQyxHQUFHO0FBQUEsV0FDbE87QUFBQSxRQUNBLGdCQUFBQyxPQUFDLFNBQUksV0FBVSxjQUNiO0FBQUEsMEJBQUFELE1BQUMsV0FBTSxXQUFVLGNBQWEsZ0NBQWtCO0FBQUEsVUFDaEQsZ0JBQUFBLE1BQUMsV0FBTSxXQUFVLGNBQWEsTUFBSyxVQUFTLE9BQU8sTUFBTSxhQUFhLGtCQUFrQixJQUFJLFVBQVUsQ0FBQyxNQUFNLFlBQVksRUFBRSxhQUFhLEVBQUUsR0FBRyxNQUFNLGFBQWEsZ0JBQWdCLEVBQUUsT0FBTyxRQUFRLE9BQU8sRUFBRSxPQUFPLEtBQUssSUFBSSxPQUFVLEVBQUUsQ0FBQyxHQUFHO0FBQUEsV0FDNU87QUFBQSxTQUNGO0FBQUEsTUFJRCxNQUFNLFNBQVMsV0FDZCxnQkFBQUMsT0FBQUYsV0FBQSxFQUNFO0FBQUEsd0JBQUFDLE1BQUMsU0FBSSxXQUFVLHFCQUFvQjtBQUFBLFFBQ25DLGdCQUFBQSxNQUFDLFNBQUksV0FBVSwrQkFBOEIseUJBQVc7QUFBQSxRQUN4RCxnQkFBQUMsT0FBQyxTQUFJLFdBQVUsY0FDYjtBQUFBLDBCQUFBRCxNQUFDLFdBQU0sV0FBVSxjQUFhLDJCQUFhO0FBQUEsVUFDM0MsZ0JBQUFBLE1BQUMsV0FBTSxXQUFVLGNBQWEsTUFBSyxVQUFTLE9BQU8sTUFBTSxhQUFhLGFBQWEsSUFBSSxVQUFVLENBQUMsTUFBTSxZQUFZLEVBQUUsYUFBYSxFQUFFLEdBQUcsTUFBTSxhQUFhLFdBQVcsRUFBRSxPQUFPLFFBQVEsT0FBTyxFQUFFLE9BQU8sS0FBSyxJQUFJLE9BQVUsRUFBRSxDQUFDLEdBQUc7QUFBQSxXQUNsTztBQUFBLFFBQ0EsZ0JBQUFDLE9BQUMsU0FBSSxXQUFVLGtCQUNiO0FBQUEsMEJBQUFELE1BQUMsV0FBTSxXQUFVLGNBQWEsa0JBQUk7QUFBQSxVQUNsQyxnQkFBQUEsTUFBQyxXQUFNLE1BQUssWUFBVyxTQUFTLE1BQU0sYUFBYSxRQUFRLE9BQU8sVUFBVSxDQUFDLE1BQU0sWUFBWSxFQUFFLGFBQWEsRUFBRSxHQUFHLE1BQU0sYUFBYSxNQUFNLEVBQUUsT0FBTyxRQUFRLEVBQUUsQ0FBQyxHQUFHO0FBQUEsV0FDcks7QUFBQSxTQUNGO0FBQUEsTUFJRCxNQUFNLFNBQVMsVUFDZCxnQkFBQUMsT0FBQUYsV0FBQSxFQUNFO0FBQUEsd0JBQUFDLE1BQUMsU0FBSSxXQUFVLHFCQUFvQjtBQUFBLFFBQ25DLGdCQUFBQTtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0MsV0FBWSxNQUFNLFFBQVEsS0FBSyxNQUFNLEdBQUcsS0FBd0IsQ0FBQztBQUFBLFlBQ2pFLFVBQVUsQ0FBQyxjQUFjLFNBQVMsRUFBRSxNQUFNLFlBQVksS0FBSyxNQUFNLEtBQUssT0FBTyxVQUFVLENBQUM7QUFBQTtBQUFBLFFBQzFGO0FBQUEsU0FDRjtBQUFBLE9BSUEsTUFBTSxTQUFTLFdBQVcsTUFBTSxTQUFTLGtCQUN6QyxnQkFBQUEsTUFBQyxTQUFJLFdBQVUseUJBQ2IsMEJBQUFBLE1BQUMsT0FBRSxzSUFBbUgsR0FDeEg7QUFBQSxPQUVKO0FBQUEsS0FDRjtBQUVKOzs7QUU3UkEsU0FBUyxpQkFBaUI7QUFpQ2hCLGdCQUFBRyxPQVVGLFFBQUFDLGNBVkU7QUEvQkgsU0FBUyxVQUFVO0FBQ3hCLFFBQU0sRUFBRSxPQUFPLFNBQVMsSUFBSSxVQUFVO0FBQ3RDLFFBQU0sT0FBTyxNQUFNLFFBQVE7QUFDM0IsUUFBTSxXQUFXLE1BQU0sUUFBUSxPQUFPO0FBRXRDLFFBQU0sWUFBWSxTQUFTO0FBQUEsSUFBUSxDQUFDLE1BQ2xDLEVBQUUsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsR0FBRyxjQUFjLEVBQUUsTUFBTSxFQUFFO0FBQUEsRUFDdkQ7QUFFQSxRQUFNLGFBQWEsQ0FBQyxLQUFhLFNBQWlCO0FBQ2hELFVBQU0sS0FBSyxZQUFZLElBQWdDO0FBQ3ZELFFBQUksQ0FBQyxHQUFJO0FBQ1QsVUFBTSxRQUFRLFVBQVUsS0FBSyxDQUFDLE1BQU0sRUFBRSxRQUFRLEdBQUc7QUFDakQsUUFBSSxDQUFDLE1BQU87QUFDWixVQUFNLGFBQWEsR0FBRyxZQUFZLEtBQUs7QUFDdkMsYUFBUyxFQUFFLE1BQU0sWUFBWSxLQUFLLE9BQU8sV0FBVyxDQUFDO0FBQUEsRUFDdkQ7QUFFQSxRQUFNLFdBQVcsTUFBTTtBQUNyQixVQUFNLFVBQW1DLENBQUM7QUFDMUMsZUFBVyxLQUFLLFdBQVc7QUFDekIsWUFBTSxLQUFLLFlBQVksRUFBRSxJQUFnQztBQUN6RCxVQUFJLEdBQUksU0FBUSxFQUFFLEdBQUcsSUFBSSxHQUFHLFlBQVksQ0FBQztBQUFBLElBQzNDO0FBQ0EsYUFBUyxFQUFFLE1BQU0sZ0JBQWdCLE1BQU0sUUFBUSxDQUFDO0FBQUEsRUFDbEQ7QUFFQSxNQUFJLFVBQVUsV0FBVyxHQUFHO0FBQzFCLFdBQ0UsZ0JBQUFELE1BQUMsU0FBSSxXQUFVLFlBQ2IsMEJBQUFBLE1BQUMsU0FBSSxXQUFVLGtCQUNiLDBCQUFBQSxNQUFDLE9BQUUscUVBQWtELEdBQ3ZELEdBQ0Y7QUFBQSxFQUVKO0FBRUEsU0FDRSxnQkFBQUMsT0FBQyxTQUFJLFdBQVUsWUFDYjtBQUFBLG9CQUFBQSxPQUFDLFNBQUksV0FBVSxtQkFDYjtBQUFBLHNCQUFBRCxNQUFDLFFBQUcsdUJBQVM7QUFBQSxNQUNiLGdCQUFBQyxPQUFDLFlBQU8sV0FBVSxpQkFBZ0IsU0FBUyxVQUN6QztBQUFBLHdCQUFBRCxNQUFDLGFBQVUsTUFBTSxJQUFJO0FBQUEsUUFBRTtBQUFBLFNBQ3pCO0FBQUEsT0FDRjtBQUFBLElBQ0EsZ0JBQUFBLE1BQUMsT0FBRSxXQUFVLGlCQUFnQiw0RkFBOEU7QUFBQSxJQUMzRyxnQkFBQUEsTUFBQyxTQUFJLFdBQVUsZUFDWixvQkFBVSxJQUFJLENBQUMsTUFBTTtBQUNwQixZQUFNLFFBQVEsS0FBSyxFQUFFLEdBQUc7QUFDeEIsWUFBTSxVQUFVLE1BQU0sUUFBUSxLQUFLO0FBQ25DLFlBQU0sV0FBVyxPQUFPLFVBQVUsWUFBWSxVQUFVLFFBQVEsQ0FBQztBQUVqRSxhQUNFLGdCQUFBQyxPQUFDLFNBQWdCLFdBQVUsY0FDekI7QUFBQSx3QkFBQUEsT0FBQyxTQUFJLFdBQVUscUJBQ2I7QUFBQSwwQkFBQUEsT0FBQyxTQUNDO0FBQUEsNEJBQUFELE1BQUMsU0FBSSxXQUFVLG9CQUFvQixZQUFFLE9BQU07QUFBQSxZQUMzQyxnQkFBQUMsT0FBQyxTQUFJLFdBQVUsbUJBQW1CO0FBQUEsZ0JBQUU7QUFBQSxjQUFJO0FBQUEsY0FBSSxFQUFFO0FBQUEsY0FBSztBQUFBLGNBQUksRUFBRTtBQUFBLGVBQWE7QUFBQSxhQUN4RTtBQUFBLFVBQ0EsZ0JBQUFELE1BQUMsWUFBTyxXQUFVLFlBQVcsU0FBUyxNQUFNLFdBQVcsRUFBRSxLQUFLLEVBQUUsSUFBSSxHQUFHLE9BQU0sb0JBQzNFLDBCQUFBQSxNQUFDLGFBQVUsTUFBTSxJQUFJLEdBQ3ZCO0FBQUEsV0FDRjtBQUFBLFFBQ0EsZ0JBQUFBLE1BQUMsU0FBSSxXQUFVLG9CQUNaLFlBQUUsU0FBUyxXQUNWLGdCQUFBQyxPQUFDLFdBQU0sV0FBVSxxQkFDZjtBQUFBLDBCQUFBRDtBQUFBLFlBQUM7QUFBQTtBQUFBLGNBQ0MsTUFBSztBQUFBLGNBQ0wsU0FBUyxDQUFDLENBQUM7QUFBQSxjQUNYLFVBQVUsQ0FBQyxNQUFNLFNBQVMsRUFBRSxNQUFNLFlBQVksS0FBSyxFQUFFLEtBQUssT0FBTyxFQUFFLE9BQU8sUUFBUSxDQUFDO0FBQUE7QUFBQSxVQUNyRjtBQUFBLFVBQ0MsUUFBUSxTQUFTO0FBQUEsV0FDcEIsSUFDRSxFQUFFLFNBQVMsVUFDYixnQkFBQUMsT0FBQyxTQUFJLFdBQVUsbUJBQ2I7QUFBQSwwQkFBQUQ7QUFBQSxZQUFDO0FBQUE7QUFBQSxjQUNDLE1BQUs7QUFBQSxjQUNMLE9BQVEsU0FBb0I7QUFBQSxjQUM1QixVQUFVLENBQUMsTUFBTSxTQUFTLEVBQUUsTUFBTSxZQUFZLEtBQUssRUFBRSxLQUFLLE9BQU8sRUFBRSxPQUFPLE1BQU0sQ0FBQztBQUFBO0FBQUEsVUFDbkY7QUFBQSxVQUNBLGdCQUFBQTtBQUFBLFlBQUM7QUFBQTtBQUFBLGNBQ0MsV0FBVTtBQUFBLGNBQ1YsT0FBUSxTQUFvQjtBQUFBLGNBQzVCLFVBQVUsQ0FBQyxNQUFNLFNBQVMsRUFBRSxNQUFNLFlBQVksS0FBSyxFQUFFLEtBQUssT0FBTyxFQUFFLE9BQU8sTUFBTSxDQUFDO0FBQUEsY0FDakYsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUFBO0FBQUEsVUFDbkI7QUFBQSxXQUNGLElBQ0UsRUFBRSxTQUFTLFdBQ2IsZ0JBQUFBO0FBQUEsVUFBQztBQUFBO0FBQUEsWUFDQyxXQUFVO0FBQUEsWUFDVixNQUFLO0FBQUEsWUFDTCxPQUFPLFNBQW1CO0FBQUEsWUFDMUIsVUFBVSxDQUFDLE1BQU0sU0FBUyxFQUFFLE1BQU0sWUFBWSxLQUFLLEVBQUUsS0FBSyxPQUFPLEVBQUUsT0FBTyxRQUFRLE9BQU8sRUFBRSxPQUFPLEtBQUssSUFBSSxHQUFHLENBQUM7QUFBQTtBQUFBLFFBQ2pILElBQ0UsRUFBRSxTQUFTLFdBQ2IsZ0JBQUFBO0FBQUEsVUFBQztBQUFBO0FBQUEsWUFDQyxXQUFVO0FBQUEsWUFDVixPQUFRLFNBQW9CO0FBQUEsWUFDNUIsVUFBVSxDQUFDLE1BQU0sU0FBUyxFQUFFLE1BQU0sWUFBWSxLQUFLLEVBQUUsS0FBSyxPQUFPLEVBQUUsT0FBTyxNQUFNLENBQUM7QUFBQSxZQUUvRSxhQUFFLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUN0QixnQkFBQUEsTUFBQyxZQUFpQixPQUFPLEtBQU0saUJBQWxCLEdBQXNCLENBQ3BDO0FBQUE7QUFBQSxRQUNILElBQ0UsV0FBVyxXQUNiLGdCQUFBQTtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0MsV0FBVTtBQUFBLFlBQ1YsTUFBTSxLQUFLLElBQUksR0FBRyxLQUFLLFVBQVUsT0FBTyxNQUFNLENBQUMsRUFBRSxNQUFNLElBQUksRUFBRSxTQUFTLENBQUM7QUFBQSxZQUN2RSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sQ0FBQztBQUFBLFlBQ3BDLFVBQVUsQ0FBQyxNQUFNO0FBQ2Ysa0JBQUk7QUFDRix5QkFBUyxFQUFFLE1BQU0sWUFBWSxLQUFLLEVBQUUsS0FBSyxPQUFPLEtBQUssTUFBTSxFQUFFLE9BQU8sS0FBSyxFQUFFLENBQUM7QUFBQSxjQUM5RSxRQUFRO0FBQUEsY0FBNkI7QUFBQSxZQUN2QztBQUFBO0FBQUEsUUFDRixJQUNFLEVBQUUsU0FBUyxhQUNiLGdCQUFBQTtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0MsV0FBVTtBQUFBLFlBQ1YsTUFBTTtBQUFBLFlBQ04sT0FBUSxTQUFvQjtBQUFBLFlBQzVCLFVBQVUsQ0FBQyxNQUFNLFNBQVMsRUFBRSxNQUFNLFlBQVksS0FBSyxFQUFFLEtBQUssT0FBTyxFQUFFLE9BQU8sTUFBTSxDQUFDO0FBQUE7QUFBQSxRQUNuRixJQUVBLGdCQUFBQTtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0MsV0FBVTtBQUFBLFlBQ1YsT0FBUSxTQUFvQjtBQUFBLFlBQzVCLFVBQVUsQ0FBQyxNQUFNLFNBQVMsRUFBRSxNQUFNLFlBQVksS0FBSyxFQUFFLEtBQUssT0FBTyxFQUFFLE9BQU8sTUFBTSxDQUFDO0FBQUE7QUFBQSxRQUNuRixHQUVKO0FBQUEsV0E1RVEsRUFBRSxHQTZFWjtBQUFBLElBRUosQ0FBQyxHQUNIO0FBQUEsS0FDRjtBQUVKOzs7QUNuSFEsZ0JBQUFFLE9BT0UsUUFBQUMsY0FQRjtBQXJCRCxTQUFTLGNBQWM7QUFDNUIsUUFBTSxFQUFFLE9BQU8sU0FBUyxJQUFJLFVBQVU7QUFDdEMsUUFBTSxXQUFXLE1BQU0sUUFBUTtBQUUvQixRQUFNLGNBQWMsQ0FBQyxVQUFvQztBQUN2RCxhQUFTLEVBQUUsTUFBTSxnQkFBZ0IsVUFBVSxFQUFFLEdBQUcsVUFBVSxHQUFHLE1BQU0sRUFBRSxDQUFDO0FBQUEsRUFDeEU7QUFFQSxRQUFNLFlBQVksQ0FBQyxTQUFpQjtBQUNsQyxVQUFNLE9BQU8sRUFBRSxHQUFHLFNBQVMsYUFBYTtBQUN4QyxRQUFJLEtBQUssSUFBSSxHQUFHO0FBQ2QsYUFBTyxLQUFLLElBQUk7QUFBQSxJQUNsQixPQUFPO0FBQ0wsV0FBSyxJQUFJLElBQUk7QUFBQSxJQUNmO0FBQ0EsZ0JBQVksRUFBRSxjQUFjLEtBQUssQ0FBQztBQUFBLEVBQ3BDO0FBRUEsU0FDRSxnQkFBQUEsT0FBQyxTQUFJLFdBQVUsZ0JBQ2I7QUFBQSxvQkFBQUQsTUFBQyxTQUFJLFdBQVUsdUJBQ2IsMEJBQUFBLE1BQUMsUUFBRyxzQkFBUSxHQUNkO0FBQUEsSUFDQSxnQkFBQUEsTUFBQyxPQUFFLFdBQVUscUJBQW9CLGdHQUFrRjtBQUFBLElBRW5ILGdCQUFBQyxPQUFDLFNBQUksV0FBVSxxQkFDYjtBQUFBLHNCQUFBQSxPQUFDLFNBQUksV0FBVSxvQkFDYjtBQUFBLHdCQUFBRCxNQUFDLFFBQUcseUJBQVc7QUFBQSxRQUNmLGdCQUFBQyxPQUFDLFNBQUksV0FBVSxjQUNiO0FBQUEsMEJBQUFELE1BQUMsV0FBTSxXQUFVLGNBQWEsd0JBQVU7QUFBQSxVQUN4QyxnQkFBQUE7QUFBQSxZQUFDO0FBQUE7QUFBQSxjQUNDLFdBQVU7QUFBQSxjQUNWLE9BQU8sU0FBUztBQUFBLGNBQ2hCLFVBQVUsQ0FBQyxNQUFNLFlBQVksRUFBRSxPQUFPLEVBQUUsT0FBTyxNQUFNLENBQUM7QUFBQSxjQUN0RCxhQUFZO0FBQUE7QUFBQSxVQUNkO0FBQUEsV0FDRjtBQUFBLFNBQ0Y7QUFBQSxNQUVBLGdCQUFBQyxPQUFDLFNBQUksV0FBVSxvQkFDYjtBQUFBLHdCQUFBRCxNQUFDLFFBQUcscUJBQU87QUFBQSxRQUNYLGdCQUFBQSxNQUFDLE9BQUUsV0FBVSx5QkFBd0Isb0ZBQXNFO0FBQUEsUUFDM0csZ0JBQUFBO0FBQUEsVUFBQztBQUFBO0FBQUEsWUFDQyxRQUFRLFNBQVM7QUFBQSxZQUNqQixVQUFVLENBQUMsWUFBWSxZQUFZLEVBQUUsUUFBUSxDQUFDO0FBQUEsWUFDOUMsYUFBWTtBQUFBO0FBQUEsUUFDZDtBQUFBLFNBQ0Y7QUFBQSxNQUVBLGdCQUFBQyxPQUFDLFNBQUksV0FBVSxvQkFDYjtBQUFBLHdCQUFBRCxNQUFDLFFBQUcsMEJBQVk7QUFBQSxRQUNoQixnQkFBQUEsTUFBQyxPQUFFLFdBQVUseUJBQXdCLHlEQUEyQztBQUFBLFFBQ2hGLGdCQUFBQSxNQUFDLFNBQUksV0FBVSxZQUNaLHlCQUFlLElBQUksQ0FBQyxRQUNuQixnQkFBQUMsT0FBQyxXQUFxQixXQUFXLFlBQVksU0FBUyxhQUFhLElBQUksSUFBSSxJQUFJLFdBQVcsRUFBRSxJQUMxRjtBQUFBLDBCQUFBRDtBQUFBLFlBQUM7QUFBQTtBQUFBLGNBQ0MsTUFBSztBQUFBLGNBQ0wsU0FBUyxDQUFDLENBQUMsU0FBUyxhQUFhLElBQUksSUFBSTtBQUFBLGNBQ3pDLFVBQVUsTUFBTSxVQUFVLElBQUksSUFBSTtBQUFBO0FBQUEsVUFDcEM7QUFBQSxVQUNBLGdCQUFBQyxPQUFDLFNBQ0M7QUFBQSw0QkFBQUQsTUFBQyxTQUFJLFdBQVUsWUFBWSxjQUFJLE1BQUs7QUFBQSxZQUNwQyxnQkFBQUEsTUFBQyxTQUFJLFdBQVUsWUFBWSxjQUFJLE1BQUs7QUFBQSxhQUN0QztBQUFBLGFBVFUsSUFBSSxJQVVoQixDQUNELEdBQ0g7QUFBQSxTQUNGO0FBQUEsTUFFQSxnQkFBQUMsT0FBQyxTQUFJLFdBQVUsb0JBQ2I7QUFBQSx3QkFBQUQsTUFBQyxRQUFHLG1CQUFLO0FBQUEsUUFDVCxnQkFBQUEsTUFBQyxPQUFFLFdBQVUseUJBQXdCLG1GQUFxRTtBQUFBLFFBQzFHLGdCQUFBQTtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0MsUUFBUSxTQUFTO0FBQUEsWUFDakIsVUFBVSxDQUFDLFVBQVUsWUFBWSxFQUFFLE1BQU0sQ0FBQztBQUFBLFlBQzFDLGFBQVk7QUFBQTtBQUFBLFFBQ2Q7QUFBQSxTQUNGO0FBQUEsT0FDRjtBQUFBLEtBQ0Y7QUFFSjs7O0FDckZBLFNBQVMsVUFBQUUsU0FBUSxlQUFBQyxvQkFBbUI7QUFDcEMsU0FBUyxhQUFBQyxZQUFXLFdBQVcsaUJBQWlCO0FBQ2hELFNBQVMsWUFBQUMsaUJBQWdCO0FBa0JuQixTQUNFLE9BQUFDLE9BREYsUUFBQUMsY0FBQTtBQVpDLFNBQVMsWUFBWSxFQUFFLEtBQUssR0FBVTtBQUMzQyxRQUFNLFlBQVlMLFFBQTBCLElBQUk7QUFDaEQsUUFBTSxDQUFDLFVBQVUsV0FBVyxJQUFJRyxVQUFTLEtBQUs7QUFFOUMsUUFBTSxVQUFVRixhQUFZLE1BQU07QUFDaEMsUUFBSSxVQUFVLFNBQVM7QUFDckIsZ0JBQVUsUUFBUSxNQUFNLFVBQVUsUUFBUTtBQUFBLElBQzVDO0FBQUEsRUFDRixHQUFHLENBQUMsQ0FBQztBQUVMLFNBQ0UsZ0JBQUFJLE9BQUMsU0FBSSxXQUFXLGdCQUFnQixXQUFXLGFBQWEsRUFBRSxJQUN4RDtBQUFBLG9CQUFBQSxPQUFDLFNBQUksV0FBVSx1QkFDYjtBQUFBLHNCQUFBRCxNQUFDLFVBQUssV0FBVSxzQkFBcUIscUJBQU87QUFBQSxNQUM1QyxnQkFBQUEsTUFBQyxZQUFPLFdBQVUsWUFBVyxTQUFTLFNBQVMsT0FBTSxtQkFDbkQsMEJBQUFBLE1BQUNGLFlBQUEsRUFBVSxNQUFNLElBQUksR0FDdkI7QUFBQSxNQUNBLGdCQUFBRSxNQUFDLFlBQU8sV0FBVSxZQUFXLFNBQVMsTUFBTSxZQUFZLENBQUMsUUFBUSxHQUFHLE9BQU8sV0FBVyxhQUFhLFVBQ2hHLHFCQUFXLGdCQUFBQSxNQUFDLGFBQVUsTUFBTSxJQUFJLElBQUssZ0JBQUFBLE1BQUMsYUFBVSxNQUFNLElBQUksR0FDN0Q7QUFBQSxPQUNGO0FBQUEsSUFDQSxnQkFBQUEsTUFBQyxTQUFJLFdBQVUsc0JBQ2IsMEJBQUFBO0FBQUEsTUFBQztBQUFBO0FBQUEsUUFDQyxLQUFLO0FBQUEsUUFDTCxXQUFVO0FBQUEsUUFDVixLQUFLLG9CQUFvQixJQUFJO0FBQUEsUUFDN0IsT0FBTTtBQUFBO0FBQUEsSUFDUixHQUNGO0FBQUEsS0FDRjtBQUVKOzs7QUN2Q0EsU0FBUyxhQUFBRSxrQkFBaUI7QUFnQnRCLGdCQUFBQyxhQUFBO0FBYkcsU0FBUyxRQUFRO0FBQ3RCLFFBQU0sRUFBRSxPQUFPLFNBQVMsSUFBSSxVQUFVO0FBQ3RDLFFBQU0sUUFBUSxNQUFNO0FBRXBCLEVBQUFDLFdBQVUsTUFBTTtBQUNkLFFBQUksQ0FBQyxNQUFPO0FBQ1osVUFBTSxRQUFRLFdBQVcsTUFBTSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUMsR0FBRyxJQUFJO0FBQ3JFLFdBQU8sTUFBTSxhQUFhLEtBQUs7QUFBQSxFQUNqQyxHQUFHLENBQUMsT0FBTyxRQUFRLENBQUM7QUFFcEIsTUFBSSxDQUFDLE1BQU8sUUFBTztBQUVuQixTQUNFLGdCQUFBRCxNQUFDLFNBQUksV0FBVyxpQkFBaUIsTUFBTSxJQUFJLElBQ3hDLGdCQUFNLFNBQ1Q7QUFFSjs7O0FwQnVGUSxTQWNJLFlBQUFFLFdBYkYsT0FBQUMsT0FERixRQUFBQyxjQUFBO0FBMUZSLElBQU0sU0FBd0IsT0FBZSxxQkFBcUIsRUFBRSxNQUFNLFdBQVcsTUFBTSxLQUFLO0FBRWhHLElBQU0sZUFBNEI7QUFBQSxFQUNoQyxRQUFRLEVBQUUsUUFBUSxnQkFBZ0IsTUFBTSxDQUFDLEdBQUcsVUFBVSxpQkFBaUI7QUFBQSxFQUN2RSxTQUFTLEVBQUUsUUFBUSxnQkFBZ0IsTUFBTSxDQUFDLEdBQUcsVUFBVSxpQkFBaUI7QUFBQSxFQUN4RSxJQUFJO0FBQUEsSUFDRixpQkFBaUI7QUFBQSxJQUNqQixlQUFlO0FBQUEsSUFDZixXQUFXO0FBQUEsSUFDWCxPQUFRLGFBQWEsUUFBUSxjQUFjLEtBQTBCO0FBQUEsSUFDckUsYUFBYTtBQUFBLElBQ2IsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLE9BQU87QUFDVDtBQUVBLFNBQVMsU0FBUztBQUNoQixRQUFNLENBQUMsT0FBTyxRQUFRLElBQUksV0FBVyxlQUFlLFlBQVk7QUFDaEUsUUFBTSxDQUFDLFNBQVMsVUFBVSxJQUFJQyxVQUFTLElBQUk7QUFFM0MsRUFBQUMsV0FBVSxNQUFNO0FBQ2QsVUFBTSxRQUFRLGFBQWEsUUFBUSxjQUFjO0FBQ2pELFFBQUksVUFBVSxPQUFRLFVBQVMsZ0JBQWdCLGFBQWEsY0FBYyxNQUFNO0FBQUEsRUFDbEYsR0FBRyxDQUFDLENBQUM7QUFFTCxFQUFBQSxXQUFVLE1BQU07QUFDZCxlQUFXLEVBQUUsS0FBSyxDQUFDLFNBQVM7QUFDMUIsZUFBUyxFQUFFLE1BQU0sVUFBVSxLQUFLLENBQUM7QUFDakMsaUJBQVcsS0FBSztBQUFBLElBQ2xCLENBQUMsRUFBRSxNQUFNLE1BQU0sV0FBVyxLQUFLLENBQUM7QUFBQSxFQUNsQyxHQUFHLENBQUMsQ0FBQztBQUVMLFFBQU0saUJBQWlCQyxhQUFZLE1BQU07QUFDdkMsVUFBTSxTQUFTLFNBQVMsY0FBYyxzQkFBc0I7QUFDNUQsUUFBSSxPQUFRLFFBQU8sTUFBTSxPQUFPO0FBQUEsRUFDbEMsR0FBRyxDQUFDLENBQUM7QUFFTCxRQUFNLGVBQWVBLGFBQVksQ0FBQyxVQUFrQjtBQUNsRCxhQUFTLEVBQUUsTUFBTSxjQUFjLE1BQU0sQ0FBQztBQUFBLEVBQ3hDLEdBQUcsQ0FBQyxDQUFDO0FBRUwsRUFBQUQsV0FBVSxNQUFNO0FBQ2QsVUFBTSxRQUFRLENBQUMsTUFBcUI7QUFDbEMsWUFBTSxNQUFPLEVBQUUsT0FBdUI7QUFDdEMsWUFBTSxVQUFVLFFBQVEsV0FBVyxRQUFRLGNBQWMsUUFBUTtBQUdqRSxXQUFLLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxRQUFRLEtBQUs7QUFDN0MsVUFBRSxlQUFlO0FBQ2pCLGlCQUFTLGNBQWlDLFdBQVcsR0FBRyxNQUFNO0FBQzlEO0FBQUEsTUFDRjtBQUdBLFdBQUssRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFFBQVEsS0FBSztBQUM3QyxVQUFFLGVBQWU7QUFDakIsaUJBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25DO0FBQUEsTUFDRjtBQUdBLFdBQUssRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFFBQVEsT0FBTyxDQUFDLFNBQVM7QUFDekQsVUFBRSxlQUFlO0FBQ2pCLFlBQUksTUFBTSxHQUFHLGlCQUFpQixHQUFHO0FBQy9CLG1CQUFTLEVBQUUsTUFBTSxtQkFBbUIsWUFBWSxNQUFNLEdBQUcsaUJBQWlCLFVBQVUsTUFBTSxHQUFHLGNBQWMsQ0FBQztBQUFBLFFBQzlHO0FBQ0E7QUFBQSxNQUNGO0FBRUEsVUFBSSxRQUFTO0FBR2IsVUFBSSxFQUFFLFFBQVEsVUFBVTtBQUN0QixpQkFBUyxFQUFFLE1BQU0sZ0JBQWdCLEtBQUssR0FBRyxDQUFDO0FBQzFDO0FBQUEsTUFDRjtBQUdBLFdBQUssRUFBRSxRQUFRLFlBQVksRUFBRSxRQUFRLGdCQUFnQixNQUFNLEdBQUcsaUJBQWlCLEdBQUc7QUFDaEYsaUJBQVMsRUFBRSxNQUFNLGdCQUFnQixZQUFZLE1BQU0sR0FBRyxpQkFBaUIsVUFBVSxNQUFNLEdBQUcsY0FBYyxDQUFDO0FBQ3pHO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFDQSxXQUFPLGlCQUFpQixXQUFXLEtBQUs7QUFDeEMsV0FBTyxNQUFNLE9BQU8sb0JBQW9CLFdBQVcsS0FBSztBQUFBLEVBQzFELEdBQUcsQ0FBQyxNQUFNLEdBQUcsZUFBZSxNQUFNLEdBQUcsZUFBZSxDQUFDO0FBRXJELE1BQUksU0FBUztBQUNYLFdBQ0UsZ0JBQUFILE1BQUMsU0FBSSxXQUFVLGdCQUNiLDBCQUFBQyxPQUFDLFNBQUksV0FBVSxrQkFDYjtBQUFBLHNCQUFBRCxNQUFDLFNBQUksV0FBVSxtQkFBa0I7QUFBQSxNQUNqQyxnQkFBQUEsTUFBQyxPQUFFLHdDQUEwQjtBQUFBLE9BQy9CLEdBQ0Y7QUFBQSxFQUVKO0FBRUEsU0FDRSxnQkFBQUEsTUFBQyxjQUFjLFVBQWQsRUFBdUIsT0FBTyxFQUFFLE9BQU8sU0FBUyxHQUMvQywwQkFBQUMsT0FBQyxTQUFJLFdBQVUsZ0JBQ2I7QUFBQSxvQkFBQUQsTUFBQyxVQUFPLFFBQWdCLFVBQVUsY0FBYyxrQkFBa0IsZ0JBQWdCO0FBQUEsSUFDbEYsZ0JBQUFDLE9BQUMsU0FBSSxXQUFVLGVBQ1o7QUFBQSxZQUFNLEdBQUcsY0FBYyxXQUN0QixnQkFBQUEsT0FBQUYsV0FBQSxFQUNFO0FBQUEsd0JBQUFDLE1BQUMsZUFBWTtBQUFBLFFBQ2IsZ0JBQUFBLE1BQUMsYUFBVTtBQUFBLFFBQ1gsZ0JBQUFBLE1BQUMsYUFBVTtBQUFBLFNBQ2IsSUFDRSxNQUFNLEdBQUcsY0FBYyxTQUN6QixnQkFBQUEsTUFBQyxXQUFRLElBRVQsZ0JBQUFBLE1BQUMsZUFBWTtBQUFBLE1BRWQsTUFBTSxHQUFHLGVBQWUsZ0JBQUFBLE1BQUMsZUFBWSxNQUFNLE9BQU8sTUFBTTtBQUFBLE9BQzNEO0FBQUEsSUFDQSxnQkFBQUEsTUFBQyxVQUFPLGtCQUFrQixnQkFBZ0I7QUFBQSxJQUMxQyxnQkFBQUEsTUFBQyxTQUFNO0FBQUEsS0FDVCxHQUNGO0FBRUo7QUFFQSxJQUFNLEtBQUssU0FBUyxlQUFlLGFBQWE7QUFDaEQsSUFBSSxJQUFJO0FBQ04sYUFBVyxFQUFFLEVBQUUsT0FBTyxnQkFBQUEsTUFBQyxVQUFPLENBQUU7QUFDbEM7IiwKICAibmFtZXMiOiBbInVzZUVmZmVjdCIsICJ1c2VDYWxsYmFjayIsICJ1c2VTdGF0ZSIsICJjb25maWciLCAiY29uZmlnIiwgImpzeCIsICJqc3hzIiwgInVzZVN0YXRlIiwgInVzZVJlZiIsICJqc3giLCAianN4cyIsICJqc3giLCAianN4cyIsICJ1c2VTdGF0ZSIsICJ1c2VTdGF0ZSIsICJ1c2VDYWxsYmFjayIsICJHcmlwVmVydGljYWwiLCAiUGx1cyIsICJUcmFzaDIiLCAidXNlU3RhdGUiLCAidXNlUmVmIiwgInVzZUVmZmVjdCIsICJTZWFyY2giLCAianN4IiwgImpzeHMiLCAidXNlU3RhdGUiLCAidXNlUmVmIiwgInVzZUVmZmVjdCIsICJTZWFyY2giLCAidXNlU3RhdGUiLCAiUGx1cyIsICJ1c2VTdGF0ZSIsICJ1c2VSZWYiLCAianN4IiwgImpzeHMiLCAianN4IiwgImpzeHMiLCAidXNlU3RhdGUiLCAiUGx1cyIsICJJY29ucyIsICJqc3giLCAianN4cyIsICJGaWVsZEljb24iLCAidXNlU3RhdGUiLCAidXNlQ2FsbGJhY2siLCAiUGx1cyIsICJHcmlwVmVydGljYWwiLCAiVHJhc2gyIiwgIlRyYXNoMiIsICJ1c2VTdGF0ZSIsICJQbHVzIiwgIlRyYXNoMiIsICJqc3giLCAianN4cyIsICJUcmFzaDIiLCAiUGx1cyIsICJ1c2VTdGF0ZSIsICJGcmFnbWVudCIsICJqc3giLCAianN4cyIsICJUcmFzaDIiLCAianN4IiwgImpzeHMiLCAianN4IiwgImpzeHMiLCAidXNlUmVmIiwgInVzZUNhbGxiYWNrIiwgIlJlZnJlc2hDdyIsICJ1c2VTdGF0ZSIsICJqc3giLCAianN4cyIsICJ1c2VFZmZlY3QiLCAianN4IiwgInVzZUVmZmVjdCIsICJGcmFnbWVudCIsICJqc3giLCAianN4cyIsICJ1c2VTdGF0ZSIsICJ1c2VFZmZlY3QiLCAidXNlQ2FsbGJhY2siXQp9Cg==
