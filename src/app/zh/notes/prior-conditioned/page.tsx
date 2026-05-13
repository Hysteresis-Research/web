import BHMark from '../../../components/BHMark';
import FOMCEntryChart from '../../../components/charts/FOMCEntryChart';

export const metadata = {
  title: '先验，因条件而异 · 札记 · Hysteresis Research · 迟滞研究',
  description:
    '8 次 FOMC 历史平均给出 5 日 −3.5%。按入场仓位切片之后，先验翻号。2026-04-29 走出 +3.7% 的逼空。',
};

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
          历史先验指向做空。实际走势是 +3.7% 的逼空。
        </p>

        <div></div>
        <figure className="note-figure">
          <FOMCEntryChart />
          <figcaption>
            按入场 regime 切片的 5 日 post-FOMC 收益。整池均值平均了两个相反的分布。
          </figcaption>
        </figure>

        <div className="marginalia">§2</div>
        <p className="body-paragraph">
          2025 年 4 月到 2026 年 4 月之间，BTC 经历了 8 次 FOMC 会议。整池来看，事件后 5 日收益平均 −3.5%。按机械规则，下一次应当做空。2026-04-29 就是下一次。
        </p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">
          这 8 次事件中有 4 次以{' '}
          <span className="signal">crowded long</span>{' '}
          的状态进入<span className="em">——</span>funding 付溢价、OI 高位伸张、价格贴近区间顶。这 4 次主导了整池均值。按入场仓位切片，drift 的方向翻转。
        </p>

        <div className="marginalia">§4</div>
        <p className="body-paragraph">
          2026-04-29 以相反的画像进入。Funding 在零附近震荡。Top traders 仓位偏空。Spot 在区间中部。相关的条件先验是逼空，不是冲洗。BTC 在打印后第 44 小时见顶 +3.70%。
        </p>

        <div></div>
        <p className="signature">
          混合样本的均值不是概率，是关于哪个子样本适用的问题。
        </p>
      </div>
    </main>
  );
}
