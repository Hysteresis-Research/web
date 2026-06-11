import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import Reveal from '../../../components/Reveal';
import SectionHead from '../../../components/SectionHead';
import MnavDurationChart from '../../../components/charts/MnavDurationChart';

export const metadata: Metadata = pageMetadata({
  title: '折价，正在收窄 · 札记 · Hysteresis Research · 迟滞研究',
  description:
    'MSTR 史上第二长的 mNAV 折价。第 145 天，4 月 7 日触底 0.73×，截至 2026-05-04 修复到 0.94×。',
  path: '/zh/notes/mstr-mnav',
  lang: 'zh-Hans',
  type: 'article',
});

export default function MstrMnavZh() {
  return (
    <main lang="zh-Hans">
      <section className="article wrap" id="note">
        <SectionHead
          numeral="二"
          title="折价，正在收窄"
          folio="札记 · 2026-05-13 · MSTR"
        />

        <Reveal as="p" className="standfirst">
          <span className="cap">4 月 7 日 0.73×，</span>今天 0.94×。一段折价拖到第 145 天，史上只有一段比它更久。
        </Reveal>

        <div className="essay">
          <Reveal as="figure" className="fig-plate">
            <figcaption>
              <span className="fig-label">
                <b>图一</b> — 折价持续天数
              </span>
              <p className="fig-cap">
                MSTR 史上≥30 天的 mNAV 折价段，按持续天数排列；进行中的这一段高亮。
              </p>
            </figcaption>
            <MnavDurationChart />
          </Reveal>

          <Reveal as="p" className="lede">
            2025 年 12 月 10 日，MSTR 的市值跌破了它账面上那批比特币的价值。折价在春天里继续扩大——4 月 7 日触底 0.73× mNAV——之后开始收窄。截至 2026-05-04，它按 0.94× 交易：市值 $61.3B，对着 $65.1B 的比特币 NAV。
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            上一次拖得更久，是 2022 年那 180 天，上一轮熊市最狠的一段。
          </Reveal>

          <Reveal as="p">
            这一段已经走到第 145 天，还在走。MSTR 史上只有一段折价拖得更久——180 天，从 2022 年 1 月到 7 月。按持续天数算，眼下这段已经是
            {' '}
            <span className="signal">有记录以来第二长的 mNAV 折价</span>。
          </Reveal>

          <Reveal as="p">
            史上≥30 天、且已经收口的折价段，只有三段。N=3 不是基准概率，是三段历史并排摆在一起。从 mNAV 重新站回 1.0× 那天起算，这三段里 MSTR 之后 30/60/90 天的中位数收益是 −2% / −7% / −13%，比特币对应 −6% / −16% / −12%。到 180 天，中位数&ldquo;翻正&rdquo;了——MSTR +49%、比特币 +26%——但那是其中两段把中位数抬上去，第三段还在延续 2022 年的熊市。
          </Reveal>

          <Reveal as="p" className="close">
            眼下没有 MSTR 多空持仓；折价天数留作追踪指标。等 mNAV 重新站回 1.0× 之后，再按那时的比特币周期位置和 MSTR 的估值结构重新评估。折价是数据，不是结论——我们在盯着它。
          </Reveal>
        </div>
      </section>
    </main>
  );
}
