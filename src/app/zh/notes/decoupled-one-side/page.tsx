import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import Reveal from '../../../components/Reveal';
import SectionHead from '../../../components/SectionHead';
import CorrelationChart from '../../../components/charts/CorrelationChart';

export const metadata: Metadata = pageMetadata({
  title: '脱钩，只脱一边 · 札记 · Hysteresis Research · 迟滞研究',
  description:
    'BTC-NQ 七日滚动相关性 +0.71 → +0.34，下跌那一边的 β 还在。脱钩只脱了一边。',
  path: '/zh/notes/decoupled-one-side',
  lang: 'zh-Hans',
  type: 'article',
});

export default function DecoupledOneSideZh() {
  return (
    <main lang="zh-Hans">
      <section className="article wrap" id="note">
        <SectionHead
          numeral="五"
          title="脱钩，只脱一边"
          folio="札记 · 2026-05-05 · BTC"
        />

        <Reveal as="p" className="standfirst">
          <span className="cap">整个三月，BTC 就是个高 β 的 NQ 影子。</span>四周过去，那相关性掉了一半——只掉在涨的那一边。
        </Reveal>

        <div className="essay">
          <Reveal as="figure" className="fig-plate">
            <figcaption>
              <span className="fig-label">
                <b>图一</b> — 滚动相关性
              </span>
              <p className="fig-cap">
                七日滚动相关性，2026-03-25 至 2026-05-05。
              </p>
            </figcaption>
            <CorrelationChart />
          </Reveal>

          <Reveal as="p" className="lede">
            2026-04-08，BTC-NQ 的七日滚动相关性是 +0.71；到 2026-05-05，只剩 +0.34。BTC-NVDA 那对掉得更狠——从 +0.68 一路到 +0.21。按惯常的读法，BTC 脱钩了。
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            NQ 下跌的那些小时里，BTC 对它的 β 还是 +0.92——下跌这一边根本没脱。
          </Reveal>

          <Reveal as="p">
            这读法不完整。NQ 下跌的那些小时里，BTC 对它的 β 仍然是 +0.92。脱掉的是另一半——NQ 走平或上涨的那些小时里，BTC 在三十天内独立走出 +9.28%，
            {' '}
            <span className="signal">超过它这段总收益的一半</span>。
          </Reveal>

          <Reveal as="p">
            驱动它的机制是单边的。2026-04-01 以来，资金费率在 66% 的八小时窗口里为负，最低跌到 −13.4% 年化。这是一股单向的燃料——逼空的势能，股票那边没有对称的对手盘。只要它还在，BTC 就多一条股票那边没有的挤压通道。继续盯着；它失效的条件是 BTC-NQ 七日相关性站上 +0.55 连续五个交易日，或者负资金费率的累计窗口跌破近三十天的 30%。
          </Reveal>

          <Reveal as="p" className="close">
            脱钩天生就是不对称的——对称起来，就不叫脱钩了。
          </Reveal>
        </div>
      </section>
    </main>
  );
}
