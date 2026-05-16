'use client';

import { useSyncExternalStore } from 'react';

const KEY = 'hr-mode';

type Mode = 'dark' | 'light';

const listeners = new Set<() => void>();

function subscribe(callback: () => void): () => void {
  listeners.add(callback);
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY) callback();
  };
  window.addEventListener('storage', onStorage);
  return () => {
    listeners.delete(callback);
    window.removeEventListener('storage', onStorage);
  };
}

function emit() {
  for (const callback of listeners) callback();
}

function getSnapshot(): Mode {
  try {
    const stored = localStorage.getItem(KEY);
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {}
  return 'dark';
}

function getServerSnapshot(): Mode {
  return 'dark';
}

export default function ThemeToggle() {
  const mode = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggle() {
    const next: Mode = mode === 'dark' ? 'light' : 'dark';
    const root = document.documentElement;
    root.classList.remove('va-dark', 'va-light');
    root.classList.add(`va-${next}`);
    try {
      localStorage.setItem(KEY, next);
    } catch {}
    emit();
  }

  return (
    <button
      className="toggle"
      onClick={toggle}
      aria-label="Toggle light / dark"
      suppressHydrationWarning
    >
      {mode === 'dark' ? '— Light' : '— Dark'}
    </button>
  );
}
