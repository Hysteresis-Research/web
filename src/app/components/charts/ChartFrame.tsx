import { type ReactNode } from 'react';

type Props = {
  title: string;
  ariaLabel: string;
  children: ReactNode;
};

// Shared 600 × 320 SVG container for note charts. Renders italic title at
// top-left + BHMark + 'HYSTERESIS RESEARCH' watermark at bottom-right.
export default function ChartFrame({ title, ariaLabel, children }: Props) {
  return (
    <svg
      viewBox="0 0 600 320"
      className="chart-svg"
      role="img"
      aria-label={ariaLabel}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <text
        x={50}
        y={20}
        fill="var(--ink-2)"
        fontFamily="var(--serif)"
        fontSize={13}
        fontStyle="italic"
      >
        {title}
      </text>
      {children}
      <g transform="translate(440 300)" opacity={0.7}>
        <g transform="scale(0.18)">
          <path
            d="M 10 6 C 30 6, 38 7, 58 30 C 70 47, 78 53, 90 54 C 70 54, 62 53, 42 30 C 30 13, 22 7, 10 6 Z"
            fill="none"
            stroke="var(--ink-3)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <text
          x={22}
          y={12}
          fill="var(--ink-3)"
          fontFamily="var(--mono)"
          fontSize={7}
          letterSpacing="0.12em"
        >
          HYSTERESIS  RESEARCH
        </text>
      </g>
    </svg>
  );
}
