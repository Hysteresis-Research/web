import type { NavFeed } from '@/lib/navData';

// Server component: renders the gated NAV block from the dollar-free feed.
// Page prose stays native per language page; only chart/table labels are
// parameterized here. Everything is static markup — no client JS.

const L = {
  en: {
    unavailable:
      'The NAV feed is not reachable right now. The unit track is struck daily at 00:00 UTC; check back shortly.',
    preGenesis:
      'The unitized track record begins at inception (T0). Valuation infrastructure is live and running in shadow; the first unit strike follows the inception close.',
    navps: 'NAV per unit',
    day: 'day',
    mtd: 'month to date',
    si: 'since inception',
    btc: 'BTC (rebased)',
    fund: 'unit value',
    figcap:
      'Unit value against bitcoin held over the same window, both rebased to 1,000 at inception. Struck daily at 00:00 UTC from exchange marks.',
    metrics: 'Measures',
    monthly: 'Monthly',
    gatedNote: (n: number) =>
      `Annualized risk ratios are withheld below sixty daily observations (n = ${n}); the confidence interval is shown instead — a small sample cannot honestly carry an annualized Sharpe.`,
    sharpe: 'Sharpe (ann., rf = 0)',
    ci: '95% CI',
    sortino: 'Sortino (ann.)',
    vol: 'Volatility (ann.)',
    mdd: 'Max drawdown',
    calmar: 'Calmar',
    hit: 'Hit rate',
    n: 'Observations',
    shadow:
      'Operational shadow run — struck and reconciled daily, not yet the official record.',
    provisional: 'Latest strike is provisional pending reconciliation.',
    restated:
      'A prior strike on this track has been restated; the changelog is preserved in the ledger.',
    disclosure:
      'Private to allowlisted LPs. Unit-price track only — figures are unaudited, struck from a single venue’s marks, and nothing here is an offer, a solicitation, or investment advice.',
  },
  zh: {
    unavailable:
      '净值数据源暂时不可达。份额净值每日 00:00 UTC 定价，请稍后再来。',
    preGenesis:
      '份额化的净值记录自成立日（T0）起算。估值系统已上线并处于影子运行；首次份额定价在成立日收盘之后。',
    navps: '单位净值',
    day: '当日',
    mtd: '本月以来',
    si: '成立以来',
    btc: 'BTC（重定基）',
    fund: '单位净值',
    figcap:
      '单位净值与同期持有比特币的对照，二者均在成立时重定基为 1,000。每日 00:00 UTC 按交易所标记价格定价。',
    metrics: '度量',
    monthly: '月度',
    gatedNote: (n: number) =>
      `日度样本不足六十个（n = ${n}）时，年化风险比率暂不展示，仅给出置信区间——小样本撑不起一个诚实的年化夏普。`,
    sharpe: '夏普（年化，rf = 0）',
    ci: '95% 置信区间',
    sortino: '索提诺（年化）',
    vol: '波动率（年化）',
    mdd: '最大回撤',
    calmar: '卡玛比率',
    hit: '胜率',
    n: '样本数',
    shadow: '影子运行中——每日定价与对账，尚非正式记录。',
    provisional: '最近一次定价仍为临时值，待对账确认。',
    restated: '该曲线曾有定价被更正；更正记录完整保留在账本中。',
    disclosure:
      '仅向白名单 LP 展示。此处只有单位净值曲线——数字未经审计，按单一交易所标记价格定价；本页不构成要约、募集或投资建议。',
  },
} as const;

type Strings = (typeof L)['en'] | (typeof L)['zh'];

function pct(x: number | null | undefined, dp = 2): string {
  if (x === null || x === undefined || !Number.isFinite(x)) return '—';
  const v = x * 100;
  return `${v >= 0 ? '+' : ''}${v.toFixed(dp)}%`;
}

function num(x: number | null | undefined, dp = 2): string {
  if (x === null || x === undefined || !Number.isFinite(x)) return '—';
  return x.toFixed(dp);
}

function Chart({ feed, t }: { feed: NavFeed; t: Strings }) {
  // bound render cost against a malformed/hostile feed: two years of dailies
  const s = feed.series.slice(-730);
  const b = feed.btc_rebased.slice(-730);
  if (s.length < 2) return null;
  const W = 720;
  const H = 300;
  const PL = 56;
  const PB = 26;
  const ys = [...s.map(([, v]) => v), ...b.map(([, v]) => v)];
  const lo = Math.min(...ys);
  const hi = Math.max(...ys);
  const pad = (hi - lo) * 0.08 || hi * 0.01 || 1;
  const y0 = lo - pad;
  const y1 = hi + pad;
  const px = (i: number, n: number) =>
    PL + (i * (W - PL - 12)) / Math.max(n - 1, 1);
  const py = (v: number) => H - PB - ((v - y0) / (y1 - y0)) * (H - PB - 14);
  const line = (pts: [string, number][]) =>
    pts
      .map(([, v], i) => `${px(i, pts.length).toFixed(1)},${py(v).toFixed(1)}`)
      .join(' ');
  return (
    <figure className="fig-plate lp-nav-plate">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={t.figcap}>
        <line className="axis" x1={PL} y1={H - PB} x2={W - 12} y2={H - PB} />
        <line className="axis" x1={PL} y1={14} x2={PL} y2={H - PB} />
        {b.length >= 2 && <polyline className="gapline" points={line(b)} />}
        <polyline className="loop" points={line(s)} />
        <text x={4} y={py(hi) + 4}>
          {hi.toFixed(0)}
        </text>
        <text x={4} y={py(lo) + 4}>
          {lo.toFixed(0)}
        </text>
        <text x={PL} y={H - 8}>
          {s[0][0]}
        </text>
        <text x={W - 130} y={H - 8}>
          {s[s.length - 1][0]}
        </text>
        <text className="sig" x={W - 130} y={22}>
          {t.fund}
        </text>
        <text x={W - 130} y={38}>
          {t.btc}
        </text>
      </svg>
      <figcaption className="fig-cap">{t.figcap}</figcaption>
    </figure>
  );
}

export default function NavPerformance({
  feed,
  lang,
}: {
  feed: NavFeed | null;
  lang: 'en' | 'zh';
}) {
  const t = L[lang];
  if (!feed) return <p className="lp-nav-note">{t.unavailable}</p>;
  if (feed.status === 'PRE_GENESIS' || feed.navps === null) {
    return <p className="lp-nav-note">{t.preGenesis}</p>;
  }
  const m = feed.metrics;
  const months = Object.entries(feed.monthly ?? {})
    .sort(([a], [b]) => (a < b ? 1 : -1))
    .slice(0, 12);
  return (
    <div className="lp-nav">
      {feed.status === 'SHADOW' && <p className="lp-nav-flag">{t.shadow}</p>}
      {feed.provisional && <p className="lp-nav-flag">{t.provisional}</p>}
      {feed.strike?.restated && <p className="lp-nav-flag">{t.restated}</p>}

      <div className="lp-nav-heads">
        <div>
          <span className="lp-nav-k">{t.navps}</span>
          <b>{num(feed.navps, 4)}</b>
          <span className="lp-nav-sub">
            {feed.strike?.date} · {pct(feed.day_pct)} {t.day}
          </span>
        </div>
        <div>
          <span className="lp-nav-k">{t.mtd}</span>
          <b>{pct(feed.mtd_pct)}</b>
        </div>
        <div>
          <span className="lp-nav-k">{t.si}</span>
          <b>{pct(feed.si_pct)}</b>
          <span className="lp-nav-sub">
            {t.btc} {pct(feed.btc_si_pct)}
          </span>
        </div>
      </div>

      <Chart feed={feed} t={t} />

      {m && (
        <table className="lp-nav-table">
          <caption>{t.metrics}</caption>
          <tbody>
            <tr>
              <td>{t.sharpe}</td>
              <td>{m.gated ? '—' : num(m.sharpe_ann)}</td>
              <td>
                {t.ci}{' '}
                {m.sharpe_ci95
                  ? `[${num(m.sharpe_ci95[0])}, ${num(m.sharpe_ci95[1])}]`
                  : '—'}
              </td>
            </tr>
            <tr>
              <td>{t.sortino}</td>
              <td>{m.gated ? '—' : num(m.sortino_ann)}</td>
              <td />
            </tr>
            <tr>
              <td>{t.vol}</td>
              <td>{pct(m.vol_ann)}</td>
              <td />
            </tr>
            <tr>
              <td>{t.mdd}</td>
              <td>{pct(m.max_dd)}</td>
              <td />
            </tr>
            <tr>
              <td>{t.calmar}</td>
              <td>{num(m.calmar)}</td>
              <td />
            </tr>
            <tr>
              <td>{t.hit}</td>
              <td>{pct(m.hit_rate, 1)}</td>
              <td />
            </tr>
            <tr>
              <td>{t.n}</td>
              <td>{m.n_returns}</td>
              <td className="lp-nav-notecell">
                {m.gated ? t.gatedNote(m.n_returns) : m.note}
              </td>
            </tr>
          </tbody>
        </table>
      )}

      {months.length > 0 && (
        <table className="lp-nav-table">
          <caption>{t.monthly}</caption>
          <tbody>
            {months.map(([k, v]) => (
              <tr key={k}>
                <td>{k}</td>
                <td>{pct(v)}</td>
                <td />
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <p className="lp-nav-disclosure">{t.disclosure}</p>
    </div>
  );
}
