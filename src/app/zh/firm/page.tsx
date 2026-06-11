import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import Reveal from '../../components/Reveal';
import SectionHead from '../../components/SectionHead';

export const metadata: Metadata = pageMetadata({
  title: '实践 · 迟滞研究',
  description:
    '论体量——一门纪律，上限由方法定，不由规模定，朝着机构级的跨资产配置去做。',
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

      {/* ============ 三 · 纲领 ============ */}
      <section className="article wrap" id="mandate">
        <SectionHead
          numeral="三"
          title="纲领"
          folio="一份抱负的陈述 · 页 04"
          as="h2"
        />

        <div className="mandate-grid">
          <Reveal as="h3" className="mandate-state">
            一本账。一个拍板的人。
            <br />
            <span className="u">朝着机构级体量去做。</span>
          </Reveal>

          <Reveal className="mandate-prose">
            <p>
              抱负是机构级的跨资产配置：一本账，随范式更替而在其间转移——在时间维度上，
              也在跨资产的主要品种之间——并以同一套纪律，在任何体量下运转。
            </p>
            <p>
              三年内——在主要品种上形成一套统一的范式模型，可复用，由日常运作的流程
              不断校验。五年内——多个子策略并行运转，发表第一篇公开的论文，把方法的内核
              记录在案。十年内——方法在几轮不同的市场环境里得到验证，成为一种可被继承的形态。
            </p>
          </Reveal>

          <Reveal as="aside" className="mandate-aside" aria-label="备案">
            <span className="label label--ink">备案</span>
            <dl>
              <dt>性质</dt>
              <dd>研究驱动，量化，专注于范式。</dd>
              <dt>对象</dt>
              <dd>跨资产的范式转换——价格落在已成事实之后的那段。</dd>
              <dt>周期</dt>
              <dd>久到足以被度量。久到可以当众判断错、再在白纸黑字里改正。</dd>
            </dl>
          </Reveal>

          <Reveal as="aside" className="notlist">
            <h3>这一页没有的东西</h3>
            <p>
              此处不列业绩，是有意为之。没有凭空的笃定，没有借来的招牌，
              没有撑不住的数字。
            </p>
            <p>
              <i>研究先行，资本随后。</i>
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
