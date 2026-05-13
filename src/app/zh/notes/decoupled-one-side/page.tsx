import BHMark from '../../../components/BHMark';
import CorrelationChart from '../../../components/charts/CorrelationChart';

export const metadata = {
  title: '脱钩，仅在单向 · 札记 · Hysteresis Research · 迟滞研究',
  description:
    'BTC-NQ 7 日滚动相关性 +0.71 → +0.34。下行 β 保持。脱钩是单向的。',
};

export default function DecoupledOneSideZh() {
  return (
    <main lang="zh-Hans">
      <div className="col">
        <div className="marginalia">2026<br/>05-05</div>
        <div className="hero-mark">
          <BHMark width={180} height={108} strokeWidth={2.2} />
        </div>

        <div className="marginalia">notes</div>
        <h1>脱钩，仅在单向</h1>

        <div></div>
        <p className="lede">
          整个 3 月份，BTC 一直作为高 β NQ 代理在交易。四周之后，那个相关性少了一半。只在上行端。
        </p>

        <div></div>
        <figure className="note-figure">
          <CorrelationChart />
          <figcaption>
            7 日滚动相关性，2026-03-25 → 2026-05-05。
          </figcaption>
        </figure>

        <div className="marginalia">§2</div>
        <p className="body-paragraph">
          2026-04-08，BTC-NQ 7 日滚动相关性是 +0.71。2026-05-05，是 +0.34。BTC-NVDA 跌得更深<span className="em">——</span>从 +0.68 到 +0.21。按惯常读法，BTC 脱钩了。
        </p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">
          这个读法不完整。NQ 下跌的小时里，BTC 对它的 β 仍然是 +0.92。脱钩在另一半<span className="em">——</span>NQ 平或上涨的小时，BTC 在 30 天里贡献了 +9.28% 的独立涨幅。
          <span className="signal">超过它总收益的一半。</span>
        </p>

        <div className="marginalia">§4</div>
        <p className="body-paragraph">
          机制是单向的。自 2026-04-01 以来，funding 在 66% 的 8 小时窗口里是负的，最低 −13.4% 年化。这是单向燃料<span className="em">——</span>逼空潜力，股票端没有对称对应物。只要它持续，BTC 就拥有一根股票不具备的轴。
        </p>

        <div></div>
        <p className="signature">
          脱钩不是对称的，直到它变成。
        </p>
      </div>
    </main>
  );
}
