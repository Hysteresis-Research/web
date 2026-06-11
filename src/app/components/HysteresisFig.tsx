'use client';

import { useEffect, useRef } from 'react';

// Fig. 1 — The Loop. The two branches draw themselves on entry (stroke-dashoffset
// keyed on .fig-plate.in via CSS); the enclosed wash, arrows, and the measured-lag
// callout fade in after. Under reduced-motion the CSS retires every transition to
// a strong still (full loop, wash, labels all present). This component only needs
// JS to add .in when the plate scrolls into view, so it observes itself.
export default function HysteresisFig() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reduced || !('IntersectionObserver' in window)) {
      el.classList.add('in');
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -6% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <figure className="fig-plate" ref={ref}>
      <figcaption>
        <span className="fig-label">
          <b>Fig. 1</b> — The Loop
        </span>
        <p className="fig-cap">
          A system with memory does not retrace its path: the way out differs
          from the way in, and the area between the branches is real. Markets
          are such systems.
        </p>
      </figcaption>
      <svg
        viewBox="0 0 760 470"
        role="img"
        aria-label="A hysteresis loop drawn between axes labelled price and fundamentals: two curved branches between the same endpoints, the path out differing from the path in. A dashed vertical interval between the branches is labelled the lag — measured, then traded."
      >
        {/* axes */}
        <line className="axis" x1="50" y1="430" x2="730" y2="430" />
        <line className="axis" x1="50" y1="430" x2="50" y2="30" />
        {/* ticks */}
        <line className="axis" x1="220" y1="426" x2="220" y2="434" />
        <line className="axis" x1="390" y1="426" x2="390" y2="434" />
        <line className="axis" x1="560" y1="426" x2="560" y2="434" />
        <line className="axis" x1="46" y1="300" x2="54" y2="300" />
        <line className="axis" x1="46" y1="170" x2="54" y2="170" />
        {/* enclosed area: where the firm works */}
        <path
          className="loop-fill fig-late"
          d="M 100,400 C 320,370 300,120 690,60 C 520,90 470,330 100,400 Z"
        />
        {/* branches, drawn on scroll */}
        <path
          className="loop l1"
          pathLength={1}
          d="M 100,400 C 320,370 300,120 690,60"
        />
        <path
          className="loop l2"
          pathLength={1}
          d="M 690,60 C 520,90 470,330 100,400"
        />
        {/* direction arrows */}
        <g className="fig-late">
          <polygon
            className="arrow"
            points="0,-5.5 10,0 0,5.5"
            transform="translate(331,241) rotate(-46)"
          />
          <polygon
            className="arrow"
            points="0,-5.5 10,0 0,5.5"
            transform="translate(470,215) rotate(138)"
          />
        </g>
        {/* the measured lag */}
        <g className="fig-late">
          <line className="gapline" x1="402" y1="176" x2="402" y2="271" />
          <circle className="dot" cx="402" cy="176" r="4" />
          <circle className="dot" cx="402" cy="271" r="4" />
          <text className="sig" x="418" y="214">
            THE LAG —
          </text>
          <text className="sig" x="418" y="232">
            MEASURED, THEN TRADED
          </text>
        </g>
        {/* axis labels */}
        <text x="730" y="458" textAnchor="end">
          FUNDAMENTALS →
        </text>
        <text x="40" y="34" transform="rotate(-90 40,34)" textAnchor="end">
          PRICE ↑
        </text>
      </svg>
    </figure>
  );
}
