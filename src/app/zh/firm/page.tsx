import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import Reveal from '../../components/Reveal';
import SectionHead from '../../components/SectionHead';

export const metadata: Metadata = pageMetadata({
  title: '实践 · 迟滞研究',
  description:
    '论实践——一张桌、一本账：一门纪律，上限由方法定，不由规模定。',
  path: '/zh/firm',
  lang: 'zh-Hans',
});

export default function FirmZh() {
  return (
    <main lang="zh-Hans">
      {/* ============ 二 · 实践 ============ */}
      <section className="article wrap" id="practice">
        <SectionHead numeral="二" title="实践" folio="论体量 · 页 03" />

        <Reveal as="p" className="standfirst">
          <span className="cap">研究驱动的交易公司</span>
          ，在我们的设想里，是一门纪律：它的上限由方法划定，不由体量划定。
        </Reveal>

        <div className="essay">
          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            一张桌，一本账。公司以单一基金经理的实践运转；约束它的始终是方法，
            不是日历，也不是人头。
          </Reveal>

          <Reveal as="p" className="lede">
            <span className="leadin">在不缺故事的市场里</span>
            ，撑住一条策略的，是<em>方法的严谨</em>，不是跑它的人数。我们的方向，
            是把跨资产配置——做在那些主要品种之间——做到机构级体量；以单一基金经理的实践来运转，
            并在任何体量下都守同一套纪律。
          </Reveal>

          <Reveal as="p" className="close">
            论日历，公司还年轻；论性情，它走得审慎。眼下被复利累积的不是资本，
            是那份配得上资本的研究。
          </Reveal>
        </div>
      </section>
    </main>
  );
}
