import Link from 'next/link';
import BHMark from '../components/BHMark';
import TickerMark from '../components/TickerMark';
import type { Metadata } from 'next';
import { pageMetadata } from '../../lib/seo';
import { requireViewer } from '@/lib/gate';

// Internal-only route: not in public nav, not in sitemap, noindex/nofollow.
// Accessible by direct URL for desk principals; intentionally invisible to
// crawlers, search snippets, and social card harvesters.
export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk · Hysteresis Research',
    description: 'Internal desk archive.',
    path: '/desk',
    lang: 'en',
  }),
  alternates: { canonical: '/desk' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk() {
  await requireViewer('/desk');
  return (
    <main>
      <div className="col">
        <div className="marginalia">§1</div>
        <div className="hero-mark">
          <BHMark width={180} height={108} strokeWidth={2.2} />
        </div>

        <div className="marginalia">desk</div>
        <h1>Desk</h1>

        <div></div>
        <p className="lede">
          Dated tactical reads. Live tape, framework-only when the data
          isn&rsquo;t there.
        </p>

        <div className="marginalia">§2</div>
        <p className="body-paragraph">
          A daily artifact <span className="em">—</span> regime, positioning,
          dealer map, trade book, kill conditions. Numbers are timestamped
          per-section; framework-only when a claim outruns its data. Notes
          decay fast and are not re-edited after publication. Read with the
          manifest band first.
        </p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">
          Published in English with a parallel <Link href="/zh/desk">中文
          镜像</Link>. <span className="em">Not financial advice.</span>{' '}
          Each note carries its own NFA disclaimer and audit trace.
        </p>

        <div className="marginalia">§4</div>
        <ul className="entry-list">
          <li>
            <time dateTime="2026-05-29">2026-05-29</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-05-29">Full ladder tagged, the amplifier expires today</Link>
          </li>
          <li>
            <time dateTime="2026-05-28">2026-05-28</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-05-28">Gate fired clean, target tagged to the dollar</Link>
          </li>
          <li>
            <time dateTime="2026-05-27">2026-05-27</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-05-27">The long got cut and the flip cracked</Link>
          </li>
          <li>
            <time dateTime="2026-05-26">2026-05-26</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-05-26">Long-add at the cluster</Link>
          </li>
          <li>
            <time dateTime="2026-05-25">2026-05-25</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-05-25">The cover printed at the cluster</Link>
          </li>
          <li>
            <time dateTime="2026-05-24">2026-05-24</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-05-24">Pinned at the cluster</Link>
          </li>
          <li>
            <time dateTime="2026-05-23">2026-05-23</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-05-23">The short re-stacked</Link>
          </li>
          <li>
            <time dateTime="2026-05-22">2026-05-22</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-05-22">The short case drained</Link>
          </li>
          <li>
            <time dateTime="2026-05-21">2026-05-21</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-05-21">SM sold the reclaim</Link>
          </li>
          <li>
            <time dateTime="2026-05-20">2026-05-20</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-05-20">Macro joins</Link>
          </li>
          <li>
            <time dateTime="2026-05-19">2026-05-19</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-05-19">Coiled on the anchor</Link>
          </li>
          <li>
            <time dateTime="2026-05-18">2026-05-18</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-05-18">Smart money short</Link>
          </li>
          <li>
            <time dateTime="2026-05-17">2026-05-17</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-05-17">Kill condition one</Link>
          </li>
          <li>
            <time dateTime="2026-05-15">2026-05-15</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/desk/2026-05-15">Between two walls</Link>
          </li>
        </ul>

        <div></div>
        <p className="signature">
          A note appears when the tape gives one. No calendar.
        </p>
      </div>
    </main>
  );
}
