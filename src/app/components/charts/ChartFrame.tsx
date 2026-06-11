import { type ReactNode } from 'react';

type Props = {
  title: string;
  ariaLabel: string;
  children: ReactNode;
};

// Shared 600 × 320 SVG container for note charts, drawn as a Signal Issue plate.
// Renders the chart's own italic serif title at top-left + the B-H mark and a
// 'HYSTERESIS RESEARCH' grotesque watermark at bottom-right. Every colour is a
// CSS variable so the plate reads correctly in both the warm-paper and
// warm-midnight editions.
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
      <g transform="translate(440 300)" opacity={0.78}>
        <g transform="scale(0.18)">
          <path
            d="M 10 54 C 30 54, 38 53, 58 30 C 70 13, 78 7, 90 6 C 70 6, 62 7, 42 30 C 30 47, 22 53, 10 54 Z"
            fill="none"
            stroke="var(--signal)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <text
          x={22}
          y={12}
          fill="var(--ink-3)"
          fontFamily="var(--grot)"
          fontSize={7}
          letterSpacing="0.18em"
        >
          HYSTERESIS  RESEARCH
        </text>
      </g>
    </svg>
  );
}
