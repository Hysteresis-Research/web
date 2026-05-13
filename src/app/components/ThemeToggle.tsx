'use client';

import { useEffect, useState } from 'react';

const KEY = 'hr-mode';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    try {
      const stored = localStorage.getItem(KEY);
      if (stored === 'light' || stored === 'dark') setMode(stored);
    } catch {}
    setMounted(true);
  }, []);

  function toggle() {
    const next = mode === 'dark' ? 'light' : 'dark';
    setMode(next);
    const root = document.documentElement;
    root.classList.remove('va-dark', 'va-light');
    root.classList.add(`va-${next}`);
    try {
      localStorage.setItem(KEY, next);
    } catch {}
  }

  return (
    <button
      className="toggle"
      onClick={toggle}
      aria-label="Toggle light / dark"
      suppressHydrationWarning
    >
      {mounted ? (mode === 'dark' ? '— Light' : '— Dark') : '— Mode'}
    </button>
  );
}
