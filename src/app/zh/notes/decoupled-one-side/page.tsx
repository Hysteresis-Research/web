import BHMark from '../../../components/BHMark';
import CorrelationChart from '../../../components/charts/CorrelationChart';
import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: '脱钩，只脱一边 · 札记 · Hysteresis Research · 迟滞研究',
  description: 'BTC-NQ 7 日滚动相关性 +0.71 → +0.34。下跌的 β 还在。脱钩只脱一边。',
  path: '/zh/notes/decoupled-one-side',
  lang: 'zh-Hans',
  type: 'article',
});

export default function DecoupledOneSideZh() {
  return (
    <main lang="zh-Hans">
      <div className="col">
        <div className="marginalia">2026<br/>05-05</div>
        <div className="hero-mark">
          <BHMark width={180} height={108} strokeWidth={2.2} />
        </div>

        <div className="marginalia">notes</div>
        <h1>脱钩，只脱一边</h1>

        <div></div>
        <p className="lede">
          整个 3 月，BTC 就是个高 β 的 NQ 代理。四周之后，那相关性少了一半。只在涨的那一边。
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
          2026-04-08，BTC-NQ 7 日滚动相关性为 +0.71。2026-05-05，为 +0.34。BTC-NVDA 掉得更深<span className="em">——</span>从 +0.68 到 +0.21。按常规读法，BTC 脱钩了。
        </p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">
          这读法不完整。NQ 下跌的那些小时里，BTC 对它的 β 仍然为 +0.92。脱钩在另一半<span className="em">——</span>NQ 持平或上涨的小时里，BTC 30 天内独立走出 +9.28%。
          <span className="signal">超过它总收益的一半。</span>
        </p>

        <div className="marginalia">§4</div>
        <p className="body-paragraph">
          机制是单边的。2026-04-01 以来，funding 在 66% 的 8 小时窗口内为负，最低 −13.4% 年化。这是单边燃料<span className="em">——</span>逼空动能，股票端没有对称的等价物。只要它还在，BTC 就有一条股票端没有的挤压通道。继续追踪；失效条件是 BTC-NQ 7 日相关性站稳 +0.55 上方 5 个交易日，或负 funding 累计窗口跌破近 30 天的 30%。
        </p>

        <div></div>
        <p className="signature">
          脱钩天生不对称<span className="em">——</span>对称的现象不算脱钩。
        </p>
      </div>
    </main>
  );
}
