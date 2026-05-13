import ChartFrame from './ChartFrame';

type Round = {
  label: string;
  sub: string;
  is?: number;
  oos?: number;
  survived?: boolean;
};

const ROUNDS: Round[] = [
  { label: 'R1', sub: 'dual-EMA', is: 1.10, oos: 0.16 },
  { label: 'R2', sub: 'single-line', is: 1.10, oos: 0.45 },
  { label: 'R3', sub: '1d four-mech', is: 0.49 },
  { label: 'R4', sub: '15m tag-fail', oos: 1.87, survived: true },
  { label: 'R5', sub: 'filtered', oos: 1.50 },
  { label: 'R6', sub: 'holdout', oos: 2.25, survived: true },
];

const M = { top: 36, right: 30, bottom: 56, left: 50 };
const W = 600;
const H = 320;
const innerW = W - M.left - M.right;
const innerH = H - M.top - M.bottom;
const Y_MAX = 2.6;

function yScale(v: number) {
  return M.top + innerH * (1 - v / Y_MAX);
}

export default function WalkforwardChart() {
  const yZero = yScale(0);
  const groupW = innerW / ROUNDS.length;
  const barW = groupW * 0.32;
  const xCenter = (i: number) => M.left + groupW * (i + 0.5);

  return (
    <ChartFrame
      title="State-based crossovers collapse; event-based survives"
      ariaLabel="Bar chart of Sharpe ratios across six walk-forward rounds of EMA400 testing"
    >
      {[0, 0.5, 1.0, 1.5, 2.0, 2.5].map((v) => (
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
            {v.toFixed(1)}
          </text>
        </g>
      ))}
      <line
        x1={M.left}
        x2={W - M.right}
        y1={yScale(1.0)}
        y2={yScale(1.0)}
        stroke="var(--rule)"
        strokeWidth={0.5}
        strokeDasharray="2 3"
      />
      {ROUNDS.map((r, i) => {
        const cx = xCenter(i);
        return (
          <g key={r.label}>
            {r.is !== undefined && (
              <>
                <rect
                  x={cx - barW - 1}
                  y={yScale(r.is)}
                  width={barW}
                  height={yZero - yScale(r.is)}
                  fill="var(--ink-3)"
                  opacity={0.65}
                />
                <text
                  x={cx - barW / 2 - 1}
                  y={yScale(r.is) - 4}
                  fill="var(--ink-2)"
                  fontFamily="var(--mono)"
                  fontSize={8.5}
                  textAnchor="middle"
                >
                  {r.is.toFixed(2)}
                </text>
              </>
            )}
            {r.oos !== undefined && (
              <>
                <rect
                  x={cx + 1}
                  y={yScale(r.oos)}
                  width={barW}
                  height={yZero - yScale(r.oos)}
                  fill={r.survived ? 'var(--accent)' : 'var(--ink-2)'}
                  opacity={r.survived ? 1 : 0.7}
                />
                <text
                  x={cx + barW / 2 + 1}
                  y={yScale(r.oos) - 4}
                  fill="var(--ink)"
                  fontFamily="var(--mono)"
                  fontSize={8.5}
                  textAnchor="middle"
                >
                  {r.oos.toFixed(2)}
                </text>
              </>
            )}
            <text
              x={cx}
              y={H - M.bottom + 16}
              fill="var(--ink-2)"
              fontFamily="var(--mono)"
              fontSize={9.5}
              textAnchor="middle"
            >
              {r.label}
            </text>
            <text
              x={cx}
              y={H - M.bottom + 28}
              fill="var(--ink-3)"
              fontFamily="var(--mono)"
              fontSize={7.5}
              textAnchor="middle"
              opacity={0.75}
            >
              {r.sub}
            </text>
          </g>
        );
      })}
      <g transform={`translate(${M.left + 8} ${M.top - 8})`}>
        <rect x={0} y={-8} width={10} height={10} fill="var(--ink-3)" opacity={0.65} />
        <text x={14} y={1} fill="var(--ink-2)" fontFamily="var(--mono)" fontSize={9}>
          in-sample
        </text>
        <rect x={80} y={-8} width={10} height={10} fill="var(--accent)" />
        <text x={94} y={1} fill="var(--ink-2)" fontFamily="var(--mono)" fontSize={9}>
          walk-forward
        </text>
      </g>
      <text
        x={14}
        y={M.top + innerH / 2}
        transform={`rotate(-90 14 ${M.top + innerH / 2})`}
        fill="var(--ink-3)"
        fontFamily="var(--mono)"
        fontSize={9}
        textAnchor="middle"
      >
        Sharpe
      </text>
    </ChartFrame>
  );
}
