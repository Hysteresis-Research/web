import Link from 'next/link';
import BHMark from '../../components/BHMark';
import TickerMark from '../../components/TickerMark';
import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: '札记 · Hysteresis Research · 迟滞研究',
  description: '盘面短文——观察、被回收的假设、宏观范式转换沉淀之后的样子。',
  path: '/zh/notes',
  lang: 'zh-Hans',
});

export default function NotesZh() {
  return (
    <main lang="zh-Hans">
      <div className="col">
        <div className="marginalia">§1</div>
        <div className="hero-mark">
          <BHMark width={180} height={108} strokeWidth={2.2} />
        </div>

        <div className="marginalia">notes</div>
        <h1>札记</h1>

        <div></div>
        <p className="lede">两单之间，长读。</p>

        <div className="marginalia">§2</div>
        <p className="body-paragraph">此处放置短文<span className="em">——</span>盘面观察、被回收的假设与它们被回收的原因、宏观范式转换沉淀之后呈现的样子。</p>

        <div className="marginalia">§3</div>
        <ul className="entry-list">
          <li>
            <time dateTime="2026-05-13">2026-05-13</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="MSTR" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/notes/mstr-mnav">折价，正在收窄</Link>
          </li>
          <li>
            <time dateTime="2026-05-13">2026-05-13</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/notes/three-cycles">更浅，目前为止</Link>
          </li>
          <li>
            <time dateTime="2026-05-06">2026-05-06</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/notes/not-the-line">不是那条线，是那一触</Link>
          </li>
          <li>
            <time dateTime="2026-05-05">2026-05-05</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/notes/decoupled-one-side">脱钩，只脱一边</Link>
          </li>
          <li>
            <time dateTime="2026-05-02">2026-05-02</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/notes/prior-conditioned">先验，因条件而异</Link>
          </li>
          <li>
            <time dateTime="2026-04-26">2026-04-26</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/notes/premium-compressing">溢价，正在压缩</Link>
          </li>
        </ul>

        <div></div>
        <p className="signature">还有更多在写。每一篇等到它<span className="signal">能独立成篇</span>，再发表。</p>
      </div>
    </main>
  );
}
