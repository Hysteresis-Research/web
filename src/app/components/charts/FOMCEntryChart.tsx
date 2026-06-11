import ChartFrame from './ChartFrame';

type Bar = {
  label: string;
  sub: string;
  value: number;
  muted?: boolean;
  highlight?: boolean;
};

const DATA: readonly Bar[] = [
  { label: 'Crowded long', sub: 'entry (n=4)', value: -9.2 },
  { label: 'Other', sub: 'entry (n=4)', value: 2.5 },
  { label: 'Pooled', sub: '(n=8)', value: -3.5, muted: true },
  { label: '2026-04-29', sub: 'actual', value: 2.9, highlight: true },
];

const M = { top: 36, right: 30, bottom: 56, left: 56 };
const W = 600;
const H = 320;
const innerW = W - M.left - M.right;
const innerH = H - M.top - M.bottom;
const Y_MAX = 6;
const Y_MIN = -12;

function yScale(v: number) {
  return M.top + (innerH * (Y_MAX - v)) / (Y_MAX - Y_MIN);
}

export default function FOMCEntryChart() {
  const yZero = yScale(0);
  const barW = (innerW / DATA.length) * 0.5;
  const xStep = innerW / DATA.length;
  const xCenter = (i: number) => M.left + xStep * (i + 0.5);

  return (
    <ChartFrame
      title="The pooled FOMC prior averages two opposite regimes"
      ariaLabel="Bar chart of 5-day post-FOMC BTC returns split by entry positioning"
    >
      {[-12, -9, -6, -3, 0, 3, 6].map((v) => (
        <g key={v}>
          <line
            x1={M.left}
            x2={W - M.right}
            y1={yScale(v)}
            y2={yScale(v)}
            stroke="var(--gridline)"
            strokeWidth={0.5}
          />
          <text
            x={M.left - 6}
            y={yScale(v) + 3}
            fill="var(--ink-3)"
            fontFamily="var(--grot)"
            fontSize={9}
            textAnchor="end"
          >
            {v > 0 ? `+${v}` : v}
          </text>
        </g>
      ))}
      <line
        x1={M.left}
        x2={W - M.right}
        y1={yZero}
        y2={yZero}
        stroke="var(--hair)"
        strokeWidth={1}
      />
      {DATA.map((d, i) => {
        const cx = xCenter(i);
        const top = d.value >= 0 ? yScale(d.value) : yZero;
        const h = Math.abs(yScale(d.value) - yZero);
        const fill = d.highlight
          ? 'var(--signal)'
          : d.muted
            ? 'var(--ink-3)'
            : 'var(--ink-2)';
        return (
          <g key={d.label}>
            <rect
              x={cx - barW / 2}
              y={top}
              width={barW}
              height={h}
              fill={fill}
              opacity={d.muted ? 0.55 : d.highlight ? 1 : 0.78}
            />
            <text
              x={cx}
              y={d.value >= 0 ? top - 6 : top + h + 12}
              fill="var(--ink)"
              fontFamily="var(--grot)"
              fontSize={10}
              textAnchor="middle"
            >
              {d.value > 0 ? `+${d.value}%` : `${d.value}%`}
            </text>
            <text
              x={cx}
              y={H - M.bottom + 16}
              fill="var(--ink-2)"
              fontFamily="var(--grot)"
              fontSize={9.5}
              textAnchor="middle"
            >
              {d.label}
            </text>
            <text
              x={cx}
              y={H - M.bottom + 28}
              fill="var(--ink-3)"
              fontFamily="var(--grot)"
              fontSize={8}
              textAnchor="middle"
              opacity={0.7}
            >
              {d.sub}
            </text>
          </g>
        );
      })}
      <text
        x={14}
        y={M.top + innerH / 2}
        transform={`rotate(-90 14 ${M.top + innerH / 2})`}
        fill="var(--ink-3)"
        fontFamily="var(--grot)"
        fontSize={9}
        textAnchor="middle"
      >
        5-day post-FOMC return
      </text>
    </ChartFrame>
  );
}
