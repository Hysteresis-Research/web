import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import Reveal from '../../../components/Reveal';
import SectionHead from '../../../components/SectionHead';
import WalkforwardChart from '../../../components/charts/WalkforwardChart';

export const metadata: Metadata = pageMetadata({
  title: '不是那条线，是那一触 · 札记 · Hysteresis Research · 迟滞研究',
  description:
    '一条长 EMA 信号过了六轮滚动前推检验。盯“状态”的交叉规则在样本外失效；盯“事件”的那一版活了下来。',
  path: '/zh/notes/not-the-line',
  lang: 'zh-Hans',
  type: 'article',
});

export default function NotTheLineZh() {
  return (
    <main lang="zh-Hans">
      <section className="article wrap" id="note">
        <SectionHead
          numeral="四"
          title="不是那条线，是那一触"
          folio="札记 · 2026-05-06 · BTC"
        />

        <Reveal as="p" className="standfirst">
          <span className="cap">一条长 EMA 信号，用着&ldquo;感觉对&rdquo;，</span>换几个周期看也都对。过了六轮滚动前推检验，只有一个形态活下来。
        </Reveal>

        <div className="essay">
          <Reveal as="figure" className="fig-plate">
            <figcaption>
              <span className="fig-label">
                <b>图一</b> — 各轮 Sharpe
              </span>
              <p className="fig-cap">
                各轮 Sharpe，样本内对前推 / 留出；活下来的形态高亮。
              </p>
            </figcaption>
            <WalkforwardChart />
          </Reveal>

          <Reveal as="p" className="lede">
            信号是 400 周期的指数移动均线——这张桌子盯了好些年的一条线。第一轮测双 EMA 交叉，四个周期，四十九组参数。样本内最优 Sharpe 跑到 1.10；一进样本外，加上每月重新选参，掉到 0.16。
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            &ldquo;在线上还是线下&rdquo;是一个状态——状态依赖于当下的范式，前推选参就在两个范式之间来回打架。
          </Reveal>

          <Reveal as="p">
            &ldquo;在这条线上方还是下方&rdquo;这个状态，本身就依赖于当下的范式。在一个范式里能赢的规则，到下一个范式就是错的，而前推选参会在两者之间反复横跳。后面三轮变体——单线版本、改日线、四种机制切分——出来的都是同一副样子。
          </Reveal>

          <Reveal as="p">
            第四轮把问题重写了。
            {' '}
            <span className="signal">别测状态，去测事件。</span>
            {' '}
            一个具体的十五分钟形态——价格碰到 EMA、又在同一根 K 线里反穿回去——给出前推 Sharpe 1.87。真正的留出集只有十三笔，Sharpe 2.25——笔数太少，验证不了，只能留作提示性观察，不当结论。往上叠的每一个过滤项，都让它变差。
          </Reveal>

          <Reveal as="p" className="close">
            信号不在那条线本身，在那条线上发生的事。
          </Reveal>
        </div>
      </section>
    </main>
  );
}
