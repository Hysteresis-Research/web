import ChartFrame from './ChartFrame';

type Episode = {
  label: string;
  sub: string;
  days: number;
  highlight?: boolean;
};

const DATA: readonly Episode[] = [
  { label: '2018-12', sub: 'closed', days: 38 },
  { label: '2020-03', sub: 'closed', days: 52 },
  { label: '2021-Q4', sub: 'closed', days: 71 },
  { label: '2022-01', sub: 'closed', days: 180 },
  { label: '2025-12', sub: 'ongoing', days: 145, highlight: true },
];

const M = { top: 36, right: 60, bottom: 44, left: 96 };
const W = 600;
const H = 320;
const innerW = W - M.left - M.right;
const innerH = H - M.top - M.bottom;
const X_MAX = 220;

function xScale(v: number) {
  return M.left + (innerW * v) / X_MAX;
}

export default function MnavDurationChart() {
  const rowH = innerH / DATA.length;
  const barH = rowH * 0.55;

  return (
    <ChartFrame
      title="mNAV discount episodes ≥ 30 days, by duration"
      ariaLabel="Horizontal bar chart of MSTR mNAV discount episodes by duration, with the ongoing 145-day episode highlighted"
    >
      {[0, 50, 100, 150, 200].map((v) => (
        <g key={v}>
          <line
            x1={xScale(v)}
            x2={xScale(v)}
            y1={M.top}
            y2={H - M.bottom}
            stroke="var(--gridline)"
            strokeWidth={0.5}
          />
          <text
            x={xScale(v)}
            y={H - M.bottom + 14}
            fill="var(--ink-3)"
            fontFamily="var(--grot)"
            fontSize={9}
            textAnchor="middle"
          >
            {v}
          </text>
        </g>
      ))}
      {DATA.map((d, i) => {
        const yMid = M.top + rowH * (i + 0.5);
        const barTop = yMid - barH / 2;
        return (
          <g key={d.label}>
            <rect
              x={M.left}
              y={barTop}
              width={xScale(d.days) - M.left}
              height={barH}
              fill={d.highlight ? 'var(--signal)' : 'var(--ink-3)'}
              opacity={d.highlight ? 1 : 0.7}
            />
            <text
              x={xScale(d.days) + 8}
              y={yMid + 3.5}
              fill="var(--ink)"
              fontFamily="var(--grot)"
              fontSize={10}
            >
              {d.days}d
            </text>
            <text
              x={M.left - 10}
              y={yMid - 2}
              fill="var(--ink-2)"
              fontFamily="var(--grot)"
              fontSize={9.5}
              textAnchor="end"
            >
              {d.label}
            </text>
            <text
              x={M.left - 10}
              y={yMid + 10}
              fill="var(--ink-3)"
              fontFamily="var(--grot)"
              fontSize={8}
              textAnchor="end"
              opacity={0.7}
            >
              ({d.sub})
            </text>
          </g>
        );
      })}
      <text
        x={M.left + innerW / 2}
        y={H - 6}
        fill="var(--ink-3)"
        fontFamily="var(--grot)"
        fontSize={9}
        textAnchor="middle"
      >
        Days at mNAV &lt; 1.0×
      </text>
    </ChartFrame>
  );
}
