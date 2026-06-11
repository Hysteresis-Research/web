'use client';

import { useEffect, useState } from 'react';

const KEY = 'hr-theme';
type Theme = 'light' | 'dark';

// The desk switches editions. Toggles theme-light / theme-dark on <html>,
// persists the choice to localStorage('hr-theme'). The no-flash init script in
// the layout has already set the correct class before hydration (from storage,
// else prefers-color-scheme), so on mount we simply read it back from the DOM.
// `locale` only swaps the user-facing label / aria-label; the toggle behaviour
// is identical in both editions.
export default function ThemeToggle({ locale = 'en' }: { locale?: 'en' | 'zh' }) {
  // Default matches the server render (theme-light); corrected on mount.
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    setTheme(
      document.documentElement.classList.contains('theme-dark')
        ? 'dark'
        : 'light',
    );
  }, []);

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    const root = document.documentElement;
    root.classList.remove('theme-light', 'theme-dark');
    root.classList.add(`theme-${next}`);
    try {
      localStorage.setItem(KEY, next);
    } catch {}
    setTheme(next);
  }

  const isDark = theme === 'dark';
  const zh = locale === 'zh';

  const ariaLabel = zh
    ? '在日间版与夜间版之间切换'
    : 'Switch between the light and dark edition';
  const label = zh
    ? isDark
      ? '日间版'
      : '夜间版'
    : isDark
      ? 'Light edition'
      : 'Dark edition';

  return (
    <button
      type="button"
      className="edition-toggle"
      onClick={toggle}
      aria-pressed={isDark}
      aria-label={ariaLabel}
      lang={zh ? 'zh-Hans' : undefined}
      suppressHydrationWarning
    >
      <span className="dot" aria-hidden="true" />
      {label}
    </button>
  );
}
