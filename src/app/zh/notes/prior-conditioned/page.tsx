import BHMark from '../../../components/BHMark';
import FOMCEntryChart from '../../../components/charts/FOMCEntryChart';
import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: '先验，因条件而异 · 札记 · Hysteresis Research · 迟滞研究',
  description: '8 次 FOMC 历史平均给出 5 日 −3.5%。按入场仓位状态切一刀之后，先验翻号。2026-04-29 走出 +3.7% 的逼空。',
  path: '/zh/notes/prior-conditioned',
  lang: 'zh-Hans',
  type: 'article',
});

export default function PriorConditionedZh() {
  return (
    <main lang="zh-Hans">
      <div className="col">
        <div className="marginalia">2026<br/>05-02</div>
        <div className="hero-mark">
          <BHMark width={180} height={108} strokeWidth={2.2} />
        </div>

        <div className="marginalia">notes</div>
        <h1>先验，因条件而异</h1>

        <div></div>
        <p className="lede">
          历史先验指向做空。实际走的是 +3.7% 的逼空。
        </p>

        <div></div>
        <figure className="note-figure">
          <FOMCEntryChart />
          <figcaption>
            按入场仓位状态切片的 5 日会后收益。整池均值平均了两个相反的分布。
          </figcaption>
        </figure>

        <div className="marginalia">§2</div>
        <p className="body-paragraph">
          2025 年 4 月到 2026 年 4 月之间，BTC 走过 8 次 FOMC。整池看，会后 5 日收益均值 −3.5%。按机械规则，下一次该做空。2026-04-29 就是下一次。
        </p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">
          这 8 次里有 4 次是{' '}
          <span className="signal">多头拥挤</span>{' '}
          的状态进的<span className="em">——</span>funding 付溢价、OI 高位顶着、价格贴区间顶。这 4 次把整池均值拉了过去。按入场仓位切一刀，drift 的方向就翻了。
        </p>

        <div className="marginalia">§4</div>
        <p className="body-paragraph">
          2026-04-29 进入的画像正好相反。Funding 在零附近晃。Top traders 仓位偏空。现货在区间中段。对应的条件先验是逼空，不是冲洗。BTC 在打印后第 44 小时见顶 +3.70%。本次事件记进 FOMC 入场状态先验，作为一个样本；如果接下来两到三次类似入场配置都没再出现挤压，这条先验要重估。
        </p>

        <div></div>
        <p className="signature">
          混合样本的均值不是概率，是「哪个子样本适用」的问题。
        </p>
      </div>
    </main>
  );
}
