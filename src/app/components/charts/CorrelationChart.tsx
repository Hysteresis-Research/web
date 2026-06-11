import ChartFrame from './ChartFrame';

const DATES = ['03-25', '04-08', '04-15', '04-22', '04-29', '05-05'];
const BTC_NQ = [0.67, 0.71, 0.59, 0.47, 0.37, 0.34];
const BTC_NVDA = [0.59, 0.68, 0.50, 0.35, 0.14, 0.21];

const M = { top: 38, right: 100, bottom: 50, left: 56 };
const W = 600;
const H = 320;
const innerW = W - M.left - M.right;
const innerH = H - M.top - M.bottom;
const Y_MAX = 0.85;
const Y_MIN = 0;

function yScale(v: number) {
  return M.top + (innerH * (Y_MAX - v)) / (Y_MAX - Y_MIN);
}

function xScale(i: number) {
  return M.left + (innerW * i) / (DATES.length - 1);
}

function toPath(values: readonly number[]) {
  return values
    .map((v, i) => `${i === 0 ? 'M' : 'L'} ${xScale(i)} ${yScale(v)}`)
    .join(' ');
}

export default function CorrelationChart() {
  return (
    <ChartFrame
      title="BTC vs equity, four weeks of correlation collapse"
      ariaLabel="Line chart of rolling 7-day correlation of BTC against NQ and NVDA from 2026-03-25 to 2026-05-05"
    >
      {[0, 0.2, 0.4, 0.6, 0.8].map((v) => (
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
            +{v.toFixed(1)}
          </text>
        </g>
      ))}
      <path d={toPath(BTC_NVDA)} fill="none" stroke="var(--ink-3)" strokeWidth={1.6} opacity={0.85} />
      <path d={toPath(BTC_NQ)} fill="none" stroke="var(--signal)" strokeWidth={2.2} />
      {BTC_NQ.map((v, i) => (
        <circle key={`nq${i}`} cx={xScale(i)} cy={yScale(v)} r={3} fill="var(--signal)" />
      ))}
      {BTC_NVDA.map((v, i) => (
        <circle key={`nv${i}`} cx={xScale(i)} cy={yScale(v)} r={2.5} fill="var(--ink-3)" />
      ))}
      {DATES.map((d, i) => (
        <text
          key={d}
          x={xScale(i)}
          y={H - M.bottom + 16}
          fill="var(--ink-3)"
          fontFamily="var(--grot)"
          fontSize={9.5}
          textAnchor="middle"
        >
          {d}
        </text>
      ))}
      <text
        x={xScale(DATES.length - 1) - 38}
        y={yScale(BTC_NQ[BTC_NQ.length - 1]) - 14}
        fill="var(--ink-2)"
        fontFamily="var(--grot)"
        fontSize={10}
      >
        +0.71 → +0.34
      </text>
      <g transform={`translate(${W - M.right + 14} ${M.top + 8})`}>
        <line x1={0} x2={18} y1={6} y2={6} stroke="var(--signal)" strokeWidth={2.2} />
        <text x={24} y={9} fill="var(--ink-2)" fontFamily="var(--grot)" fontSize={9}>
          BTC – NQ
        </text>
        <line x1={0} x2={18} y1={22} y2={22} stroke="var(--ink-3)" strokeWidth={1.6} />
        <text x={24} y={25} fill="var(--ink-2)" fontFamily="var(--grot)" fontSize={9}>
          BTC – NVDA
        </text>
      </g>
      <text
        x={14}
        y={M.top + innerH / 2}
        transform={`rotate(-90 14 ${M.top + innerH / 2})`}
        fill="var(--ink-3)"
        fontFamily="var(--grot)"
        fontSize={9}
        textAnchor="middle"
      >
        Rolling 7-day correlation
      </text>
    </ChartFrame>
  );
}
