import BHMark from '../../../components/BHMark';
import MnavDurationChart from '../../../components/charts/MnavDurationChart';
import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: '折价，正在收窄 · 札记 · Hysteresis Research · 迟滞研究',
  description: '关于 MSTR 历史上第二长的 mNAV 折价 episode。第 145 天，4 月 7 日触底 0.73 倍，截至 2026-05-04 修复到 0.94 倍。',
  path: '/zh/notes/mstr-mnav',
  lang: 'zh-Hans',
  type: 'article',
});

export default function MstrMnavZh() {
  return (
    <main lang="zh-Hans">
      <div className="col">
        <div className="marginalia">2026<br/>05-13</div>
        <div className="hero-mark">
          <BHMark width={180} height={108} strokeWidth={2.2} />
        </div>

        <div className="marginalia">notes</div>
        <h1>折价，正在收窄</h1>

        <div></div>
        <p className="lede">4 月 7 日 0.73 倍。今天 0.94 倍。</p>

        <div></div>
        <figure className="note-figure">
          <MnavDurationChart />
          <figcaption>
            ≥ 30 天的 mNAV 折价 episode，按持续时间排列。
          </figcaption>
        </figure>

        <div className="marginalia">§2</div>
        <p className="body-paragraph">2025 年 12 月 10 日，MSTR 的市值跌破账面上比特币的价值。折价在春季继续扩大<span className="em">——</span>4 月 7 日触底 0.73 倍 mNAV<span className="em">——</span>之后开始收窄。截至 2026-05-04，按 0.94 倍交易：市值 $61.3B，对应比特币 NAV $65.1B。</p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">这一段已经进了第 145 天，还在走。MSTR 历史上只有一段折价拖得更久<span className="em">——</span>180 天，2022 年 1 月到 7 月，上一轮熊市最狠的一段。按持续天数，当前已经是<span className="signal">历史第二长</span>。</p>

        <div className="marginalia">§4</div>
        <p className="body-paragraph">历史上 ≥30 天的折价段，已经收口的只有三段。N=3 不是分布，是三个并列的历史样本。在这有限的样本里，从 mNAV 重新站上 1.0 倍那一天起算，MSTR 之后 30/60/90 天的中位数表现是 −2% / −7% / −13%；BTC 对应 −6% / −16% / −12%。到 180 天的所谓&ldquo;反转&rdquo;<span className="em">——</span>MSTR +49%、BTC +26%<span className="em">——</span>其实是其中两段大涨拉出来的，第三段延续了 2022 年熊市的下跌。目前没有 MSTR 多空仓位；mNAV 折价持续天数留作追踪指标。等 mNAV 重新站上 1.0× 之后，按当时 BTC 周期位置和 MSTR 估值结构重新评估。</p>

        <div></div>
        <p className="signature">折价是数据，不是结论。</p>
      </div>
    </main>
  );
}
