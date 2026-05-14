import Link from 'next/link';
import BHMark from '../../components/BHMark';
import TickerMark from '../../components/TickerMark';
import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: '札记 · Hysteresis Research · 迟滞研究',
  description: '来自交易台的短篇——观察、被回收的假设、宏观范式转换的形状。',
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
        <p className="lede">两次交易之间，长篇阅读。</p>

        <div className="marginalia">§2</div>
        <p className="body-paragraph">用于短篇文字<span className="em">——</span>交易台的观察、被回收的假设及其原因、宏观范式转换在文字沉淀之后呈现出的形状。</p>

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
            <Link href="/zh/notes/three-cycles">更浅，至今为止</Link>
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
        <p className="signature">更多正在准备。每一篇等到它<span className="signal">能够独立成篇</span>时发表。</p>
      </div>
    </main>
  );
}
