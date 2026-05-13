import Link from 'next/link';
import BHMark from '../../components/BHMark';
import TickerMark from '../../components/TickerMark';

export const metadata = {
  title: '札记 · Hysteresis Research · 迟滞研究',
  description: '案头的短篇文字——观察、被回收的 thesis、regime 转换的形状。',
};

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
        <p className="lede">关于交易之间的长形态。</p>

        <div className="marginalia">§2</div>
        <p className="body-paragraph">用于短篇文字<span className="em">——</span>案头的观察、被回收的 thesis 及其原因、regime 转换在文字沉淀之后呈现出的形状。</p>

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
        </ul>

        <div></div>
        <p className="signature">更多正在准备。每一篇等到它<span className="signal">能够独立成篇</span>时发表。</p>
      </div>
    </main>
  );
}
