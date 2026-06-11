import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import Reveal from '../../../components/Reveal';
import SectionHead from '../../../components/SectionHead';
import FOMCEntryChart from '../../../components/charts/FOMCEntryChart';

export const metadata: Metadata = pageMetadata({
  title: '先验，因条件而异 · 札记 · Hysteresis Research · 迟滞研究',
  description:
    '八次 FOMC 的历史平均给出会后五日 −3.5%。按进场时的持仓结构切一刀，先验翻号。2026-04-29 走出了 +3.7% 的逼空。',
  path: '/zh/notes/prior-conditioned',
  lang: 'zh-Hans',
  type: 'article',
});

export default function PriorConditionedZh() {
  return (
    <main lang="zh-Hans">
      <section className="article wrap" id="note">
        <SectionHead
          numeral="六"
          title="先验，因条件而异"
          folio="札记 · 2026-05-02 · BTC"
        />

        <Reveal as="p" className="standfirst">
          <span className="cap">历史先验指向做空。</span>实际走出来的，是一段 +3.7% 的逼空。
        </Reveal>

        <div className="essay">
          <Reveal as="figure" className="fig-plate">
            <figcaption>
              <span className="fig-label">
                <b>图一</b> — 会后五日收益
              </span>
              <p className="fig-cap">
                按进场时的持仓结构切片的会后五日收益；合在一起的均值，平均掉了两个相反的分布。
              </p>
            </figcaption>
            <FOMCEntryChart />
          </Reveal>

          <Reveal as="p" className="lede">
            2025 年 4 月到 2026 年 4 月之间，BTC 穿过八次 FOMC。合在一起看，会后五日收益均值是 −3.5%。机械地照规则办，下一次就该做空。2026-04-29 正是下一次。
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            八次里有四次是顶着多头拥挤进场的——是这四次把均值拽到了负的。
          </Reveal>

          <Reveal as="p">
            这八次里，有四次是顶着
            {' '}
            <span className="signal">多头拥挤</span>
            {' '}
            进场的——资金费率在付溢价，持仓量堆在高位，价格贴着区间顶。是这四次把合并的均值拽了过去。按进场时的持仓结构切一刀，会后那段惯性走向的符号就翻了。
          </Reveal>

          <Reveal as="p">
            2026-04-29 进场时的画像恰好相反。资金费率在零附近来回晃，头部交易者的仓位偏空，现货停在区间中段。对得上的那个条件先验，是逼空，不是冲洗。BTC 在公布后第 44 小时见顶 +3.70%。
          </Reveal>

          <Reveal as="p" className="close">
            这次记进&ldquo;FOMC 进场结构&rdquo;的先验里，算一个样本；要是接下来两三次类似的进场配置都没再挤出行情，这条先验就得重估。一个混合样本的均值不是概率，它是&ldquo;到底哪个子样本适用&rdquo;的问题。
          </Reveal>
        </div>
      </section>
    </main>
  );
}
