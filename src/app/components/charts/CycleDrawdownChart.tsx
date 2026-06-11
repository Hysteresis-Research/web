import ChartFrame from './ChartFrame';

const M = { top: 38, right: 100, bottom: 50, left: 56 };
const W = 600;
const H = 320;
const innerW = W - M.left - M.right;
const innerH = H - M.top - M.bottom;
const X_MAX = 400;
const Y_MAX = 5;
const Y_MIN = -90;

function xScale(d: number) {
  return M.left + (innerW * d) / X_MAX;
}
function yScale(v: number) {
  return M.top + (innerH * (Y_MAX - v)) / (Y_MAX - Y_MIN);
}

function curve(troughDay: number, troughDd: number, lastDay: number, recovery = 0.35) {
  const pts: [number, number][] = [];
  for (let d = 0; d <= lastDay; d++) {
    let v: number;
    if (d <= troughDay) {
      const t = d / troughDay;
      v = (troughDd * (1 - Math.cos(t * Math.PI))) / 2;
    } else {
      const span = lastDay > troughDay ? lastDay - troughDay : 1;
      const t = Math.min(1, (d - troughDay) / span);
      v = troughDd + -troughDd * recovery * ((1 - Math.cos(t * Math.PI)) / 2);
    }
    pts.push([d, v]);
  }
  return pts;
}

function toPath(pts: [number, number][]) {
  return pts.map(([d, v], i) => `${i === 0 ? 'M' : 'L'} ${xScale(d)} ${yScale(v)}`).join(' ');
}

const Y_2017 = curve(364, -83.4, X_MAX);
const Y_2021 = curve(378, -76.7, X_MAX);
// Current: trough -49.7% at d=122, recovered to -35% at d=219
const Y_CURR = (() => {
  const pts: [number, number][] = [];
  for (let d = 0; d <= 219; d++) {
    let v: number;
    if (d <= 122) {
      const t = d / 122;
      v = (-49.7 * (1 - Math.cos(t * Math.PI))) / 2;
    } else {
      const t = (d - 122) / (219 - 122);
      v = -49.7 + (49.7 - 35.0) * ((1 - Math.cos(t * Math.PI)) / 2);
    }
    pts.push([d, v]);
  }
  return pts;
})();

export default function CycleDrawdownChart() {
  return (
    <ChartFrame
      title="Peak-aligned drawdown vs two prior macro cycles"
      ariaLabel="Drawdown curves of the 2017, 2021, and current BTC cycles aligned by days from peak"
    >
      {[0, -20, -40, -60, -80].map((v) => (
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
            {v === 0 ? '0' : `${v}`}
          </text>
        </g>
      ))}
      {[0, 100, 200, 300, 400].map((d) => (
        <text
          key={d}
          x={xScale(d)}
          y={H - M.bottom + 16}
          fill="var(--ink-3)"
          fontFamily="var(--grot)"
          fontSize={9.5}
          textAnchor="middle"
        >
          {d}
        </text>
      ))}
      <path d={toPath(Y_2017)} fill="none" stroke="var(--ink-3)" strokeWidth={1.4} />
      <path
        d={toPath(Y_2021)}
        fill="none"
        stroke="var(--ink-3)"
        strokeWidth={1.4}
        strokeDasharray="4 3"
      />
      <path d={toPath(Y_CURR)} fill="none" stroke="var(--signal)" strokeWidth={2.2} />
      <g transform={`translate(${W - M.right + 12} ${M.top + 8})`}>
        <line x1={0} x2={18} y1={6} y2={6} stroke="var(--ink-3)" strokeWidth={1.4} />
        <text x={24} y={9} fill="var(--ink-2)" fontFamily="var(--grot)" fontSize={8.5}>
          2017 (−83%)
        </text>
        <line
          x1={0}
          x2={18}
          y1={22}
          y2={22}
          stroke="var(--ink-3)"
          strokeWidth={1.4}
          strokeDasharray="4 3"
        />
        <text x={24} y={25} fill="var(--ink-2)" fontFamily="var(--grot)" fontSize={8.5}>
          2021 (−77%)
        </text>
        <line x1={0} x2={18} y1={38} y2={38} stroke="var(--signal)" strokeWidth={2.2} />
        <text x={24} y={41} fill="var(--ink-2)" fontFamily="var(--grot)" fontSize={8.5}>
          Current (−35%)
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
        Drawdown from peak (%)
      </text>
      <text
        x={M.left + innerW / 2}
        y={H - 6}
        fill="var(--ink-3)"
        fontFamily="var(--grot)"
        fontSize={9}
        textAnchor="middle"
      >
        Days from peak
      </text>
    </ChartFrame>
  );
}
