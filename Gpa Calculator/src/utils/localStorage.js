// Small helpers for saving and loading data in the browser's localStorage.
// Everything is stored as JSON text.

export function loadFromStorage(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    if (saved === null) return fallback;
    return JSON.parse(saved);
  } catch {
    // The saved data was broken, so start fresh.
    localStorage.removeItem(key);
    return fallback;
  }
}

export function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage can be full or blocked — ignore it.
  }
}