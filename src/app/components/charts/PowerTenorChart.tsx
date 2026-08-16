import ChartFrame from './ChartFrame';

type Lang = 'en' | 'zh';

type Strings = {
  title: string;
  aria: string;
  xTitle: string;
  spot1: string;
  spot2: string;
  ercot: string;
  spx1: string;
  spx2: string;
  spx3: string;
  wulf1: string;
  wulf2: string;
  volta1: string;
  volta2: string;
  clusterHi: string;
  clusterLo: string;
  ticks: readonly string[];
};

const STRINGS: Record<Lang, Strings> = {
  en: {
    title: 'Two products, two tenors — what compute-grade power now clears at',
    aria: 'Scatter chart of price per megawatt-hour against contract tenor, both on log axes. Wholesale spot power clears at ten to one hundred fifty dollars at a one-day tenor. TeraWulf–Anthropic, a twenty-year powered-campus lease, implies about two hundred seventy dollars per megawatt-hour; Volta–Bitdeer, a sixteen-year lease, about two hundred seventy-seven. SpaceX–Reflection, a compute rental with GPUs included and a ninety-day exit, on terms as reported, is estimated by Neel Somani at roughly five thousand dollars per megawatt-hour; the products differ, so the chart shows two ends of the market rather than one curve for one product. A dashed reference marks the nine-thousand-dollar ERCOT scarcity print.',
    xTitle: 'contract tenor (log) →',
    spot1: 'spot · day-ahead',
    spot2: 'US ISOs, $10–150',
    ercot: 'ERCOT scarcity print $9,000',
    spx1: 'SPACEX–REFLECTION · GPUs included',
    spx2: '90-day exit · ≈ $5,000 (Somani est.)',
    spx3: 'reported terms · $150M / mo · to 2029',
    wulf1: 'TERAWULF–ANTHROPIC · 20 yr',
    wulf2: '≈ $270 · $19B / 401 MW · powered campus',
    volta1: 'VOLTA–BITDEER TYDAL · 16 yr',
    volta2: '≈ $277 · avg $202 / kW·mo',
    clusterHi: 'compute rental · pays scarcity rent',
    clusterLo: 'powered campus · near cost-plus',
    ticks: ['1 d', '90 d', '1 yr', '5 yr', '20 yr'],
  },
  zh: {
    title: '两种产品，两种期限——算力级电力如今成交在哪儿',
    aria: '散点图：横轴为合约期限，纵轴为每兆瓦时价格，双对数坐标。现货日前电价在一天期限上落在 10 到 150 美元。TeraWulf 与 Anthropic 的二十年带电园区租约隐含每兆瓦时约 270 美元；Volta 与 Bitdeer 的十六年租约约 277 美元。SpaceX 与 Reflection 的算力租赁含 GPU、九十天可退出，条款为报道口径，Neel Somani 估算约每兆瓦时 5,000 美元；两者产品不同，图中呈现的是市场两端，而非同一种产品的一条曲线。虚线为 ERCOT 9,000 美元的稀缺尖峰参照。',
    xTitle: '合约期限（对数）→',
    spot1: '现货 · 日前',
    spot2: '美国各 ISO，$10–150',
    ercot: 'ERCOT 稀缺尖峰 $9,000',
    spx1: 'SPACEX–REFLECTION · 含 GPU',
    spx2: '90 天可退 · ≈ $5,000（Somani 估）',
    spx3: '据报条款 · $150M / 月 · 至 2029',
    wulf1: 'TERAWULF–ANTHROPIC · 20 年',
    wulf2: '≈ $270 · $19B / 401 MW · 带电园区',
    volta1: 'VOLTA–BITDEER TYDAL · 16 年',
    volta2: '≈ $277 · 均价 $202 / kW·月',
    clusterHi: '算力租赁 · 付稀缺租金',
    clusterLo: '带电园区 · 贴近成本加成',
    ticks: ['1 天', '90 天', '1 年', '5 年', '20 年'],
  },
};

const W = 600;
const H = 320;
const M = { top: 38, right: 100, bottom: 50, left: 64 };
const innerW = W - M.left - M.right;
const innerH = H - M.top - M.bottom;

// x: contract tenor in days, log10 from 0.4 day to ~8,900 days
const X_LO = -0.4;
const X_HI = 3.95;
// y: $/MWh, log10 from 10 to 10,000
const Y_LO = 1;
const Y_HI = 4;

function xs(days: number) {
  return M.left + (innerW * (Math.log10(days) - X_LO)) / (X_HI - X_LO);
}
function ys(usd: number) {
  return M.top + (innerH * (Y_HI - Math.log10(usd))) / (Y_HI - Y_LO);
}

const TICK_DAYS = [1, 90, 365, 365 * 5, 365 * 20];
const GRID_USD = [10, 100, 1000, 10000];

// Data points (public terms; per-MWh arithmetic is ours, the SpaceX level is
// Somani's estimate — the MW allocation behind it is not public).
const SPOT = { days: 1, lo: 10, hi: 150 };
const SPX = { days: 90, usd: 5000 };
const VOLTA = { days: 365 * 16, usd: 277 };
const WULF = { days: 365 * 20, usd: 270 };
const ERCOT = 9000;

// Static plate: price against tenor for compute-grade power. Server-rendered
// SVG; every colour is a CSS variable so it reads in both editions.
export default function PowerTenorChart({ lang = 'en' }: { lang?: Lang }) {
  const s = STRINGS[lang];
  const grot = 'var(--grot)';
  const serif = 'var(--serif)';
  return (
    <ChartFrame title={s.title} ariaLabel={s.aria}>
      {/* horizontal log grid */}
      {GRID_USD.map((v) => (
        <g key={v}>
          <line
            x1={M.left}
            x2={W - M.right}
            y1={ys(v)}
            y2={ys(v)}
            stroke="var(--gridline)"
            strokeWidth={0.5}
          />
          <text
            x={M.left - 6}
            y={ys(v) + 3}
            fill="var(--ink-3)"
            fontFamily={grot}
            fontSize={9}
            textAnchor="end"
          >
            ${v.toLocaleString('en-US')}
          </text>
        </g>
      ))}
      {/* axes */}
      <line
        x1={M.left}
        x2={W - M.right}
        y1={H - M.bottom}
        y2={H - M.bottom}
        className="axis"
      />
      <line x1={M.left} x2={M.left} y1={M.top} y2={H - M.bottom} className="axis" />
      {TICK_DAYS.map((d, i) => (
        <text
          key={d}
          x={xs(d)}
          y={H - M.bottom + 16}
          fill="var(--ink-3)"
          fontFamily={grot}
          fontSize={9.5}
          textAnchor="middle"
        >
          {s.ticks[i]}
        </text>
      ))}
      <text
        x={M.left + innerW / 2}
        y={H - M.bottom + 30}
        fill="var(--ink-3)"
        fontFamily={grot}
        fontSize={8}
        letterSpacing="0.1em"
        textAnchor="middle"
      >
        {s.xTitle}
      </text>

      {/* ERCOT reference */}
      <line
        x1={M.left}
        x2={W - M.right}
        y1={ys(ERCOT)}
        y2={ys(ERCOT)}
        className="gapline"
        opacity={0.55}
      />
      <text
        x={W - M.right}
        y={ys(ERCOT) - 4}
        fill="var(--ink-3)"
        fontFamily={serif}
        fontSize={8}
        fontStyle="italic"
        textAnchor="end"
      >
        {s.ercot}
      </text>

      {/* spot band */}
      <rect
        x={xs(SPOT.days) - 5}
        y={ys(SPOT.hi)}
        width={10}
        height={ys(SPOT.lo) - ys(SPOT.hi)}
        fill="var(--signal-wash)"
        stroke="var(--ink)"
        strokeWidth={1}
        opacity={0.9}
      />
      <text
        x={xs(SPOT.days) + 12}
        y={ys(60) - 2}
        fill="var(--ink-2)"
        fontFamily={grot}
        fontSize={8.5}
        letterSpacing="0.04em"
      >
        {s.spot1}
      </text>
      <text
        x={xs(SPOT.days) + 12}
        y={ys(60) + 9}
        fill="var(--ink-3)"
        fontFamily={serif}
        fontSize={8}
        fontStyle="italic"
      >
        {s.spot2}
      </text>

      {/* SpaceX–Reflection: estimate → hollow marker */}
      <circle
        cx={xs(SPX.days)}
        cy={ys(SPX.usd)}
        r={5}
        fill="none"
        stroke="var(--signal)"
        strokeWidth={1.8}
      />
      <text
        x={xs(SPX.days) + 12}
        y={ys(SPX.usd) - 2}
        fill="var(--signal)"
        fontFamily={grot}
        fontSize={8.5}
        letterSpacing="0.04em"
      >
        {s.spx1}
      </text>
      <text
        x={xs(SPX.days) + 12}
        y={ys(SPX.usd) + 10.5}
        fill="var(--ink-2)"
        fontFamily={serif}
        fontSize={8}
        fontStyle="italic"
      >
        {s.spx2}
      </text>
      <text
        x={xs(SPX.days) + 12}
        y={ys(SPX.usd) + 22}
        fill="var(--ink-3)"
        fontFamily={serif}
        fontSize={8}
        fontStyle="italic"
      >
        {s.spx3}
      </text>

      {/* the two long-tenor leases */}
      <circle cx={xs(VOLTA.days)} cy={ys(VOLTA.usd)} r={4} fill="var(--ink-3)" />
      <circle cx={xs(WULF.days)} cy={ys(WULF.usd)} r={4.5} fill="var(--signal)" />
      <line
        x1={xs(WULF.days) - 8}
        y1={ys(WULF.usd) - 6}
        x2={xs(WULF.days) - 44}
        y2={ys(WULF.usd) - 26}
        stroke="var(--hair)"
        strokeWidth={1}
      />
      <text
        x={xs(WULF.days) - 46}
        y={ys(WULF.usd) - 30}
        fill="var(--signal)"
        fontFamily={grot}
        fontSize={8.5}
        letterSpacing="0.04em"
        textAnchor="end"
      >
        {s.wulf1}
      </text>
      <text
        x={xs(WULF.days) - 46}
        y={ys(WULF.usd) - 19}
        fill="var(--ink-2)"
        fontFamily={serif}
        fontSize={8}
        fontStyle="italic"
        textAnchor="end"
      >
        {s.wulf2}
      </text>
      <line
        x1={xs(VOLTA.days) - 6}
        y1={ys(VOLTA.usd) + 6}
        x2={xs(VOLTA.days) - 34}
        y2={ys(VOLTA.usd) + 24}
        stroke="var(--hair)"
        strokeWidth={1}
      />
      <text
        x={xs(VOLTA.days) - 36}
        y={ys(VOLTA.usd) + 29}
        fill="var(--ink-2)"
        fontFamily={grot}
        fontSize={8.5}
        letterSpacing="0.04em"
        textAnchor="end"
      >
        {s.volta1}
      </text>
      <text
        x={xs(VOLTA.days) - 36}
        y={ys(VOLTA.usd) + 40}
        fill="var(--ink-3)"
        fontFamily={serif}
        fontSize={8}
        fontStyle="italic"
        textAnchor="end"
      >
        {s.volta2}
      </text>

      {/* cluster glosses */}
      <text
        x={xs(SPX.days) + 12}
        y={ys(1250)}
        fill="var(--ink-3)"
        fontFamily={serif}
        fontSize={8.5}
        fontStyle="italic"
      >
        {s.clusterHi}
      </text>
      <text
        x={xs(300)}
        y={ys(48)}
        fill="var(--ink-3)"
        fontFamily={serif}
        fontSize={8.5}
        fontStyle="italic"
      >
        {s.clusterLo}
      </text>
    </ChartFrame>
  );
}
