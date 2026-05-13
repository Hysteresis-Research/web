import BHMark from '../../../components/BHMark';
import CycleDrawdownChart from '../../../components/charts/CycleDrawdownChart';

export const metadata = {
  title: '更浅，至今为止 · 札记 · Hysteresis Research · 迟滞研究',
  description:
    '从顶部起第 219 天，当前 BTC 回撤较前两轮周期同期中位数浅 28 个百分点。N=2，非预测。',
};

export default function ThreeCyclesZh() {
  return (
    <main lang="zh-Hans">
      <div className="col">
        <div className="marginalia">2026<br/>05-13</div>
        <div className="hero-mark">
          <BHMark width={180} height={108} strokeWidth={2.2} />
        </div>

        <div className="marginalia">notes</div>
        <h1>更浅，至今为止</h1>

        <div></div>
        <p className="lede">第 219 天回撤 −35%。前两个周期在同一时间点之间在 −60% 到 −67% 之间。</p>

        <div></div>
        <figure className="note-figure">
          <CycleDrawdownChart />
          <figcaption>
            顶部对齐的回撤轨迹。当前周期描到第 219 天。
          </figcaption>
        </figure>

        <div className="marginalia">§2</div>
        <p className="body-paragraph">比特币自成为可交易品种以来，经历过两轮完整的熊市。2017 年的顶部之后，364 天内出现 −83% 的回撤；2021 年的顶部之后，378 天内 −77%。当前周期顶部出现在 2025-10-06，$124,628。今天，219 天之后，BTC 报 $80,630<span className="em">——</span>较顶部回撤 −35%。</p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">在同一时间点（第 219 天），2017 年周期处于 −60%；2021 年周期处于 −67%。前两个周期的中位数是 −63%。当前周期的回撤<span className="signal">较该中位数浅 28 个百分点</span>。</p>

        <div className="marginalia">§4</div>
        <p className="body-paragraph">N=2 不允许任何统计推断。当前周期的顶部尚未被确认为最终的熊市顶<span className="em">——</span>如果 BTC 创出新高，本轮就没有熊市阶段。当前低点（2026-02-05，$62,868）也是临时的<span className="em">——</span>价格可能回测甚至跌破。这些都不是预测，仅仅是关于三段回撤在某一个时点上相互衡量的一个观察。本轮顶部尚未确认；无持仓动作。若 BTC 突破 $124,728 上方并持稳，本轮重新归为延续，无熊市阶段。</p>

        <div></div>
        <p className="signature">两个周期不构成基准线，只是两个样本。</p>
      </div>
    </main>
  );
}
