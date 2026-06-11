import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import Reveal from '../../components/Reveal';
import SectionHead from '../../components/SectionHead';

export const metadata: Metadata = pageMetadata({
  title: '方法 · 迟滞研究',
  description:
    '论方法——度量基本面与价格之间的缺口，按缺口能撑多久配仓，不按它会不会收口的信心。',
  path: '/zh/approach',
  lang: 'zh-Hans',
});

export default function ApproachZh() {
  return (
    <main lang="zh-Hans">
      <section className="article wrap" id="method">
        <SectionHead numeral="一" title="方法" folio="一篇短论 · 页 02" />

        <Reveal as="p" className="standfirst">
          <span className="cap">研究驱动的交易公司</span>
          ，在我们这里，是一种有方向的怀疑——一套按缺口能撑多久来配仓的纪律，
          而不是按它终将收口的信心。
        </Reveal>

        <div className="essay">
          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            <i>迟滞</i>不是延迟，是路径依赖：一个系统在受冲击之后，回不到先前的状态。
            公司的名字取自那段迟滞，不取自某一笔交易。
          </Reveal>

          <Reveal as="p" className="lede">
            <span className="leadin">我们承认</span>
            市场处理信息，快过任何由人组成的判断机制。我们也看到，它处理得
            <em>并不均匀</em>
            <sup className="fn">
              <a href="#fn1" id="ref1">
                1
              </a>
            </sup>{' '}
            ——总有那么一些时段，价格还没跟上结构里真正在变的部分。那些时段，
            就是全部的主题。其余都是等待。
          </Reveal>

          <Reveal className="twocol">
            <p>
              迟滞这个术语，说的不是延迟，是路径依赖——一个系统受冲击之后回不到先前的状态，
              那段历史被吸收进了结构本身。在磁学里，磁场记得自己被磁化的方式；在经济学里，
              范式早已更替，而预期与资本的去向，仍久久带着那次更替的记忆。
            </p>
            <p>
              框架是借来的，纪律是实证的。我们度量基本面与价格之间的缺口，按这道缺口能撑多久
              来配仓——不按信心，也不去预判它何时收口。仓位必须带一条写下来的离场规则；
              没有规则，这个仓位就在方法之外，无论那一判断对错。
              <sup className="fn">
                <a href="#fn2" id="ref2">
                  2
                </a>
              </sup>
            </p>
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            一套总跟心里那个「想被证明对」的部分过不去的纪律，按其构造，也注定会在拉长的
            上涨里偶尔让人失望。这份失望，就是那笔过路费。
          </Reveal>

          <Reveal as="p" className="close">
            这要求你接受一件事：一套总让心里那个「想被证明对」的部分失望的纪律，
            按其构造，也会偶尔在拉长的上涨里让你失望。我们把这份失望，看作日后不会
            站在同一次范式转换错误一边的代价。一篇更长的文字正在写——关于我们在范式转换处
            看什么、持仓期间追踪什么、何时让一个论断退场。等文字成型，在此发表。
          </Reveal>

          <Reveal as="ol" className="footnotes">
            <li id="fn1">
              <span className="fnum">1</span>关键词是「不均匀」。总体上的有效，与局部上
              持续存在的误差并不矛盾；公司活在那道误差里，不在那个总体里。{' '}
              <a href="#ref1" aria-label="返回正文">
                ↩
              </a>
            </li>
            <li id="fn2">
              <span className="fnum">2</span>离场写在入场之前，否则不入场。一个没有规则的
              正确判断，是我们不愿入账的运气。{' '}
              <a href="#ref2" aria-label="返回正文">
                ↩
              </a>
            </li>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
