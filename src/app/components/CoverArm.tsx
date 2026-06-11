'use client';

import { useEffect } from 'react';

// Ports the mockup's cover-locking behavior. The headline glyphs sit offset
// (CSS, gated on .js) until the type "locks into the chase" — armed once the
// face is loaded, or immediately under reduced-motion. Renders nothing.
//
// .js is added as early as possible so the pre-armed (offset) state is only
// ever shown when JS is present to remove it; without JS the headline simply
// renders in place.
export default function CoverArm() {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reduced) {
      root.classList.add('js', 'loaded');
      return;
    }

    root.classList.add('js');

    let done = false;
    const arm = () => {
      if (done) return;
      done = true;
      root.classList.add('loaded');
    };

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(arm);
      // never hold the page hostage to a slow face
      const t = setTimeout(arm, 900);
      return () => clearTimeout(t);
    }
    const t = setTimeout(arm, 250);
    return () => clearTimeout(t);
  }, []);

  return null;
}
