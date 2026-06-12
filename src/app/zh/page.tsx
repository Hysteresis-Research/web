import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import { pageMetadata } from '../../lib/seo';
import Ticker from '../components/Ticker';
import Reveal from '../components/Reveal';
import HysteresisFig from '../components/HysteresisFig';

export const metadata: Metadata = pageMetadata({
  title: 'Hysteresis Research · 迟滞研究',
  description:
    '迟滞研究——研究驱动的量化交易公司。做的是基本面已经动、价格尚未跟上的那段距离。',
  path: '/zh',
  lang: 'zh-Hans',
});

// Custom-property style helper (CSS vars aren't in CSSProperties' typed keys).
function d(n: number): CSSProperties {
  return { ['--d' as string]: n } as CSSProperties;
}

// 封面标题，逐字落位。每个 .g 带一个 --d 延迟变量；偏移与锁定全由 CSS 完成，
// 在 .js.loaded 时触发（由 CoverArm 武装）。无障碍读名挂在 <h1> 的 aria-label 上，
// 字形本身是装饰性的。读作：价格 / 最后 / 才知道。
const LINES: { g: string; d: number }[][] = [
  [
    { g: '价', d: 0 },
    { g: '格', d: 1 },
  ],
  [
    { g: '最', d: 2 },
    { g: '后', d: 3 },
  ],
  [
    { g: '才', d: 4 },
    { g: '知', d: 5 },
    { g: '道', d: 6 },
  ],
];

function HeadlineLine({ glyphs, stop }: { glyphs: { g: string; d: number }[]; stop?: number }) {
  return (
    <span className="hl-line" aria-hidden="true">
      {glyphs.map((it, i) => (
        <span key={i} className="g" style={d(it.d)}>
          {it.g}
        </span>
      ))}
      {stop !== undefined && <span className="stop" style={d(stop)} />}
    </span>
  );
}

export default function Home() {
  return (
    <>
      {/* ============================================================
          封面 —— 一份顶着报头的现代主义陈述。
          （报头那套装置是共用外壳，已在上层渲染。）
          ============================================================ */}
      <div className="cover-unit" id="top">
        <div className="cover-grid" aria-hidden="true">
          {Array.from({ length: 12 }).map((_, i) => (
            <i key={i} />
          ))}
        </div>

        <section className="cover wrap" aria-label="封面陈述" lang="zh-Hans">
          <div
            className="reg"
            style={{ top: '8px', left: 'calc(var(--gutter) - 20px)' }}
            aria-hidden="true"
          />
          <div
            className="reg"
            style={{ top: '8px', right: 'calc(var(--gutter) - 20px)' }}
            aria-hidden="true"
          />

          <div className="kicker">
            <span className="label label--signal">
              论真相与定价之间的那段迟滞
            </span>
          </div>

          <h1 className="headline" aria-label="价格最后才知道。">
            <HeadlineLine glyphs={LINES[0]} />
            <HeadlineLine glyphs={LINES[1]} />
            <HeadlineLine glyphs={LINES[2]} stop={7} />
          </h1>

          <div className="cover-base">
            <p className="deck">
              <strong>迟滞研究</strong>
              是一家研究驱动的量化交易公司。它做的，是世界已经变、价格还没变的那段时间——
              基本面与价格拉开的距离，且这段距离久到足以被度量。
            </p>
            <ul className="facts" aria-label="公司基本面">
              <li>
                <b>始于</b>&#32;二〇二六
              </li>
              <li>
                <b>形态</b>&#32;单一基金经理的实践
              </li>
              <li>
                <b>规矩</b>&#32;先写下，再交易
              </li>
            </ul>
            <a className="scroll" href="#toc">
              翻开本期 <i>↓</i>
            </a>
          </div>
        </section>
      </div>

      {/* ============ 装订胶带 ============ */}
      <Ticker />

      <main lang="zh-Hans">
        {/* ============ 本期目录 ============ */}
        <section className="contents wrap" id="toc" aria-label="本期目录">
          <Reveal as="h2" className="label label--ink">
            本期目录
          </Reveal>
          <Reveal as="ol" className="toc">
            <li>
              <a href="#method">
                <span className="num">一</span>
                <span className="t">方法</span>
                <span className="d">—— 这段迟滞为何存在，度量它要付什么代价</span>
                <span className="leader" role="presentation" />
                <span className="folio">页 02</span>
              </a>
            </li>
            <li>
              <a href="/zh/firm">
                <span className="num">二</span>
                <span className="t">实践</span>
                <span className="d">—— 一张桌、一本账；公司怎么运转</span>
                <span className="leader" role="presentation" />
                <span className="folio">页 03</span>
              </a>
            </li>
            <li>
              <a href="#mandate">
                <span className="num">三</span>
                <span className="t">纲领</span>
                <span className="d">—— 这件事是冲着什么去做的</span>
                <span className="leader" role="presentation" />
                <span className="folio">页 04</span>
              </a>
            </li>
            <li>
              <a href="/zh/contact">
                <span className="num">四</span>
                <span className="t">通信</span>
                <span className="d">—— 写给读到这里的配置方</span>
                <span className="leader" role="presentation" />
                <span className="folio">页 05</span>
              </a>
            </li>
            <li>
              <a href="/zh/notes">
                <span className="num">五</span>
                <span className="t">笔记</span>
                <span className="d">—— 一直在记的档案：哪些论断退场了，为什么</span>
                <span className="leader" role="presentation" />
                <span className="folio">页 06</span>
              </a>
            </li>
          </Reveal>
        </section>

        {/* ============ 一 · 方法 ============ */}
        <section className="article wrap" id="method">
          <Reveal className="section-head">
            <span className="ghost" aria-hidden="true">
              一.
            </span>
            <h2>方法</h2>
            <span className="folio">一篇短论 · 页 02</span>
          </Reveal>

          <div className="essay">
            <Reveal as="aside" className="marginnote">
              <span className="mn-rule" />
              <i>ὑστέρησις</i>——希腊语，意为来迟、落在后头。公司的名字取自那段迟滞，
              不取自某一笔交易。
            </Reveal>

            <Reveal as="p" className="lede">
              <span className="leadin">这个词</span>
              出自物理学。一八八〇年代，尤因研究被磁化的铁，发现金属记得自己受过的力：
              施力再撤去，它回不到出发的地方。他要给这段因与果之间的迟滞起个名字，
              便从希腊语里取了来。
              <sup className="fn">
                <a href="#fn1" id="ref1">
                  1
                </a>
              </sup>{' '}
              市场也是这样的物体。它带着自己的来路。世界变的那一刻，它不重新定价；
              它要等证据的分量压到撑不住，才重新定价。
            </Reveal>

            <Reveal className="twocol">
              <p>
                多数时候无事可做。价格与基本面一致，这份一致足够有效，不必去碰。
                真正让人上心的，是那些转折的时辰——一个维持多年的范式让位，而资本、
                履历、信念，全押在那个正在结束的世界，而非那个刚刚开始的世界上。
                这种时候，真相与定价之间的缺口张得够大，肉眼即可看见，用不着仪器。
                难的从来不是看见。难的是判断它会不会撑下去。
                <sup className="fn">
                  <a href="#fn2" id="ref2">
                    2
                  </a>
                </sup>
              </p>
              <p>
                一收即合的迟滞，是个奇观。撑得住的迟滞，才是一个仓位。公司的纪律，
                是把这道分别当成一个实证问题来处理——去度量它能否持续，而不是替它编故事；
                去清点那些没等人赚到就已收口的缺口；并对成本、误差，以及事后诸葛的诱惑
                保持诚实。经得起这番核账的，所剩无几。这就够了。
              </p>
            </Reveal>

            <Reveal as="aside" className="marginnote">
              <span className="mn-rule" />
              这一页不登业绩。数字给对手方看，在私下，能被审视的地方——不排进版面去做广告。
            </Reveal>

            <Reveal as="p" className="close">
              所以公司围着写作来组织。一个写不下来的看法，无法被检验；一个无法被检验的看法，
              不过是一种情绪。每个仓位都从一篇文字起步——论证、被攻击、归档——好让研究的寿命
              长过交易，让下一个决定从更靠前的地方开始。资本，在这座书库的下游。
            </Reveal>
          </div>

          {/* Fig. 1 —— 插版 */}
          <HysteresisFig />

          <Reveal as="ol" className="footnotes">
            <li id="fn1">
              <span className="fnum">1</span>这个造词出自詹姆斯·阿尔弗雷德·尤因，
              来自他对铁磁性的研究；词根是希腊语{' '}
              <i>hysterein</i>，意为来迟。我们借来这个词，也借来随它而来的那套度量的习惯。{' '}
              <a href="#ref1" aria-label="返回正文">
                ↩
              </a>
            </li>
            <li id="fn2">
              <span className="fnum">2</span>能否持续，是问题的全部。一个连自身交易成本都
              熬不过的缺口，不是低效，是过路费。{' '}
              <a href="#ref2" aria-label="返回正文">
                ↩
              </a>
            </li>
          </Reveal>
        </section>

        {/* ============ 题词 ============ */}
        <section className="pullquote wrap" aria-label="公司信条">
          <Reveal>
            <div className="asterism" aria-hidden="true">
              ⁂
            </div>
            <blockquote>
              <span className="cap">研究先行，</span>
              <br />
              资本随后。
            </blockquote>
            <cite className="label">公司信条 · 创始手记，二〇二六</cite>
          </Reveal>
        </section>

        {/* ============ 三 · 纲领 ============ */}
        <section className="article wrap" id="mandate">
          <Reveal className="section-head">
            <span className="ghost" aria-hidden="true">
              三.
            </span>
            <h2>纲领</h2>
            <span className="folio">一份抱负的陈述 · 页 04</span>
          </Reveal>

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
                这份抱负有自己的日程。三年内——在主要品种上形成一套统一的范式模型，可复用，
                由日常运作的流程不断校验。五年内——多个子策略并行运转，发表第一篇公开的论文，
                把方法的内核记录在案。十年内——方法在几轮不同的市场环境里得到验证，
                成为一种可被继承的形态。
              </p>
              <p>
                论日历，公司还年轻；论性情，它走得审慎。它创立于二〇二六年，是为周期里
                那段尚未到来的部分而建。眼下被复利累积的不是资本，是那份配得上资本的研究。
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
                <i>
                  数字要等到它能被审视，才会出现，不会更早。觉得这样别扭的配置方，
                  是读错了页；觉得这样眼熟的，请接着读。
                </i>
              </p>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
