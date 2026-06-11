import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import Reveal from '../../../components/Reveal';
import SectionHead from '../../../components/SectionHead';

export const metadata: Metadata = pageMetadata({
  title: '电力是算力的硬约束 · 札记 · Hysteresis Research · 迟滞研究',
  description:
    '约束已经从硅挪到了电力。作为一个归档的 v0.1 研究方向写下——不是仓位，也不主张任何优势。',
  path: '/zh/notes/power-constrained-compute',
  lang: 'zh-Hans',
  type: 'article',
});

export default function PowerConstrainedComputeZh() {
  return (
    <main lang="zh-Hans">
      <section className="article wrap" id="note">
        <SectionHead
          numeral="一"
          title="电力是算力的硬约束"
          folio="札记 · 2026-05-16 · MACRO"
        />

        <Reveal as="p" className="standfirst">
          <span className="cap">迟滞研究是一家研究驱动的量化交易公司，</span>
          做全球宏观与跨资产衍生品。留得住的优势是方法，不是某个被主张的范式优势。这篇出自我们关于范式迟滞的研究，是一段论证，不是仓位。
        </Reveal>

        <div className="essay">
          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            <i>归档于 v0.1。</i>休眠、未配资、不主张任何优势——它进档案，恰恰因为它是这套检验里最难的那个版本。
          </Reveal>

          <Reveal as="p" className="lede">
            这篇讲的范式变化，是我们觉得值得先把度量搭起来的那一种。底下写的是论证本身，不是据此下的注。
          </Reveal>

          <Reveal as="p">
            过去十来年，AI 算力的约束一直是硅。算力要更强，就要更多芯片；这条链路市场学会了精确定价——芯片设计、晶圆代工、模型实验室、超大规模厂商的资本开支。它是今天股票市场里被研究得最密、被讲得最多的一摊。
          </Reveal>

          <Reveal className="twocol">
            <p>
              这个约束挪位置了。再多铺一块算力，边际上卡住的已经不是芯片，而是带得动它的电、送得到的电网，以及建成这两样要花的那几年。瓶颈从市场盯得最紧的那一层，滑到了它最少看的那一层：电的物理供给，和承载它的基础设施。
            </p>
            <p>
              市场有没有以同样的精度把这件事重新定价进去，是个经验问题，不是口号——而它可能还没有，原因是结构性的，不是信息性的。电力板块的基本面不会因为一纸公告就重定级，它要靠跨数个季度的反复确认才走；而设定锚点的那批分析师，手里的需求模型还是这一轮范式之前建的，里头用电量一年只涨零点几个百分点。一条已经拐弯的需求曲线，不会在拐弯当天就走进这些模型；它慢慢地、恰好沿着一本按月考核的主观仓位等不起的那段时间到来。
            </p>
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            主题是吵的，吵的早已被定价。我们要的是因为慢而安静的那部分——滞后本身。
          </Reveal>

          <Reveal as="p">
            如果这个判断成立，那么一个已经变了的电力需求范式，与一个还没重定级的电力供给板块之间的距离，就不是一条等着抢跑的传闻。这篇要框出的问题只有一个：它会不会是一道
            <em>可能</em>持续的缝——久到足以被量出来
            <sup className="fn">
              <a href="#fn1" id="ref1">
                1
              </a>
            </sup>
            。
          </Reveal>

          <Reveal as="p">
            最后那半句，就是全部的纪律，也是前提。我们对主题没兴趣；主题响，响的早在价里。我们要的是那一部分慢——慢所以安静：滞后本身，它是不是按同一套&ldquo;需求转向基础设施&rdquo;的方式在更早的范式里走过，以及它在哪些具体条件下会收口或反转。一个值得持有的判断，要能提前说清什么会证伪它
            <sup className="fn">
              <a href="#fn2" id="ref2">
                2
              </a>
            </sup>
            ；也只有当那段距离真的按这个标准量出来之后，它才挣得到仓位，而不是之前。它现在归档为 v0.1 方向，正因为它是这套检验里最硬的版本：不带资金，度量本身、以及它在更早范式上的复现，都还没拿到手。
          </Reveal>

          <Reveal as="p" className="close">
            这就是活儿——把一次观察到的范式变化，磨成一个可证伪的问题，再让研究、而不是叙事，去决定它配不配、什么时候配上仓位。研究先复利，资金随后跟上。
          </Reveal>

          <Reveal as="ol" className="footnotes">
            <li id="fn1">
              <span className="fnum">1</span>
              &ldquo;久到足以被量出来&rdquo;不是修辞。一道关不上、却短到测不出来的缝，对我们没用；能不能在样本里把这段距离量到带误差区间的程度，是它离不离得开档案的门槛。{' '}
              <a href="#ref1" aria-label="回到正文">
                ↩
              </a>
            </li>
            <li id="fn2">
              <span className="fnum">2</span>
              先写好出场条件，再谈进场。一个说不出自己会怎么错的判断，不进这套方法——哪怕方向蒙对了。{' '}
              <a href="#ref2" aria-label="回到正文">
                ↩
              </a>
            </li>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
