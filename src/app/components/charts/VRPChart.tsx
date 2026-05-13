import ChartFrame from './ChartFrame';

type Bar = { year: string; value: number; sub?: string };

const DATA: readonly Bar[] = [
  { year: '2022', value: 9.7 },
  { year: '2023', value: 7.9 },
  { year: '2024', value: 6.6 },
  { year: '2025', value: 5.1 },
  { year: '2026', value: -2.1, sub: 'YTD' },
];

const M = { top: 36, right: 30, bottom: 50, left: 56 };
const W = 600;
const H = 320;
const innerW = W - M.left - M.right;
const innerH = H - M.top - M.bottom;
const Y_MAX = 11;
const Y_MIN = -4;

function yScale(v: number) {
  return M.top + (innerH * (Y_MAX - v)) / (Y_MAX - Y_MIN);
}

export default function VRPChart() {
  const yZero = yScale(0);
  const barW = (innerW / DATA.length) * 0.5;
  const xStep = innerW / DATA.length;
  const xCenter = (i: number) => M.left + xStep * (i + 0.5);

  return (
    <ChartFrame
      title="Annual variance risk premium, five-year compression"
      ariaLabel="Bar chart of annual DVOL minus RV30 mean, 2022 through 2026 year-to-date, compressing from +9.7 to −2.1 vol points"
    >
      {[-2, 0, 2, 4, 6, 8, 10].map((v) => (
        <g key={v}>
          <line
            x1={M.left}
            x2={W - M.right}
            y1={yScale(v)}
            y2={yScale(v)}
            stroke="var(--rule-soft)"
            strokeWidth={0.5}
          />
          <text
            x={M.left - 6}
            y={yScale(v) + 3}
            fill="var(--ink-3)"
            fontFamily="var(--mono)"
            fontSize={9}
            textAnchor="end"
          >
            {v >= 0 ? `+${v}` : v}
          </text>
        </g>
      ))}
      <line
        x1={M.left}
        x2={W - M.right}
        y1={yZero}
        y2={yZero}
        stroke="var(--rule)"
        strokeWidth={1}
      />
      {DATA.map((d, i) => {
        const cx = xCenter(i);
        const top = d.value >= 0 ? yScale(d.value) : yZero;
        const h = Math.abs(yScale(d.value) - yZero);
        const isHighlight = d.value < 0;
        return (
          <g key={d.year}>
            <rect
              x={cx - barW / 2}
              y={top}
              width={barW}
              height={h}
              fill={isHighlight ? 'var(--accent)' : 'var(--ink-3)'}
              opacity={isHighlight ? 1 : 0.85}
            />
            <text
              x={cx}
              y={d.value >= 0 ? top - 6 : top + h + 12}
              fill="var(--ink)"
              fontFamily="var(--mono)"
              fontSize={10}
              textAnchor="middle"
            >
              {d.value >= 0 ? `+${d.value}` : d.value}
            </text>
            <text
              x={cx}
              y={H - M.bottom + 16}
              fill="var(--ink-3)"
              fontFamily="var(--mono)"
              fontSize={9.5}
              textAnchor="middle"
            >
              {d.year}
            </text>
            {d.sub && (
              <text
                x={cx}
                y={H - M.bottom + 28}
                fill="var(--ink-3)"
                fontFamily="var(--mono)"
                fontSize={8}
                textAnchor="middle"
                opacity={0.65}
              >
                {d.sub}
              </text>
            )}
          </g>
        );
      })}
      <text
        x={14}
        y={M.top + innerH / 2}
        transform={`rotate(-90 14 ${M.top + innerH / 2})`}
        fill="var(--ink-3)"
        fontFamily="var(--mono)"
        fontSize={9}
        textAnchor="middle"
      >
        DVOL − RV30 mean (vol points)
      </text>
    </ChartFrame>
  );
}
