import { type ReactElement } from 'react';

type Ticker = 'BTC' | 'MSTR' | 'MACRO';

const GLYPHS: Record<Ticker, ReactElement> = {
  BTC: (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 2.5v3M14 2.5v3" />
        <path d="M10 18.5v3M14 18.5v3" />
        <path d="M7.5 5.5h7.25a3.25 3.25 0 0 1 0 6.5H7.5m0-6.5v13m0 0h8.25a3.25 3.25 0 0 0 0-6.5H7.5" />
      </g>
    </svg>
  ),
  MSTR: (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19.5V4.5l8 9 8-9v15" />
      </g>
    </svg>
  ),
  MACRO: (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <ellipse cx="12" cy="12" rx="4" ry="9" />
      </g>
    </svg>
  ),
};

export default function TickerMark({ ticker }: { ticker: Ticker }) {
  return (
    <span className="ticker-mark" aria-label={ticker}>
      {GLYPHS[ticker]}
      <span className="ticker-mark-text">{ticker}</span>
    </span>
  );
}

export type { Ticker };
