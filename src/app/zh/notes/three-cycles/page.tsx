import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import Reveal from '../../../components/Reveal';
import SectionHead from '../../../components/SectionHead';
import CycleDrawdownChart from '../../../components/charts/CycleDrawdownChart';

export const metadata: Metadata = pageMetadata({
  title: '更浅，目前为止 · 札记 · Hysteresis Research · 迟滞研究',
  description:
    '从顶部算起第 219 天，本轮 BTC 回撤比前两轮同期的中位数浅 28 个百分点。N=2，不是预测。',
  path: '/zh/notes/three-cycles',
  lang: 'zh-Hans',
  type: 'article',
});

export default function ThreeCyclesZh() {
  return (
    <main lang="zh-Hans">
      <section className="article wrap" id="note">
        <SectionHead
          numeral="三"
          title="更浅，目前为止"
          folio="札记 · 2026-05-13 · BTC"
        />

        <Reveal as="p" className="standfirst">
          <span className="cap">第 219 天，回撤 −35%。</span>前两轮周期走到同一天，分别落在 −60% 到 −67% 之间。
        </Reveal>

        <div className="essay">
          <Reveal as="figure" className="fig-plate">
            <figcaption>
              <span className="fig-label">
                <b>图一</b> — 回撤轨迹
              </span>
              <p className="fig-cap">
                以顶部对齐的回撤轨迹；本轮描到第 219 天。
              </p>
            </figcaption>
            <CycleDrawdownChart />
          </Reveal>

          <Reveal as="p" className="lede">
            比特币有可交易盘口以来，只走完过两轮熊市。2017 年那个顶，往后 364 天里跌出 −83%；2021 年那个顶，378 天里跌出 −77%。本轮的顶在 2025-10-06，$124,628。今天，219 天过去，BTC 报 $80,630——距顶回撤 −35%。
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            同一天对齐：2017 在 −60%，2021 在 −67%，两者中位数 −63%。
          </Reveal>

          <Reveal as="p">
            走到同一天（第 219 天），2017 那轮在 −60%，2021 那轮在 −67%，两者的中位数是 −63%。本轮的回撤
            {' '}
            <span className="signal">比这个中位数浅 28 个百分点</span>。
          </Reveal>

          <Reveal as="p">
            N=2，撑不起任何统计推断。本轮的顶还没被确认为最终的熊市顶——BTC 一旦再创新高，这一轮就没有熊市段可言。中途那个低点（2026-02-05，$62,868）也只是暂定的——价格可能回去测，甚至跌穿。这些都不是预测，只是三段回撤在同一时刻互相照一照而已。本轮顶部既未确认，眼下不动；若 BTC 站上 $124,728 并站稳，这一轮就重新算作延续，没有熊市段。
          </Reveal>

          <Reveal as="p" className="close">
            两轮周期撑不起一条基准线。它们是两个故事，不是一个概率。
          </Reveal>
        </div>
      </section>
    </main>
  );
}
