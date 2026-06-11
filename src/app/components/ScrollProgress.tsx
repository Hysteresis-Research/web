'use client';

import { useEffect, useRef } from 'react';

// The scroll-progress hairline. Hidden + inert under prefers-reduced-motion
// (the CSS sets display:none; we also skip wiring the listeners).
export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    const bar = ref.current;
    if (reduced || !bar) return;

    function progress() {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      if (bar) {
        bar.style.transform = `scaleX(${max > 0 ? h.scrollTop / max : 0})`;
      }
    }
    progress();
    window.addEventListener('scroll', progress, { passive: true });
    window.addEventListener('resize', progress);
    return () => {
      window.removeEventListener('scroll', progress);
      window.removeEventListener('resize', progress);
    };
  }, []);

  return <div className="progress" aria-hidden="true" ref={ref} />;
}
