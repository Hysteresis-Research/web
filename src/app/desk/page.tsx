import Link from 'next/link';
import TickerMark from '../components/TickerMark';
import type { Metadata } from 'next';
import { pageMetadata } from '../../lib/seo';
import { requireViewer } from '@/lib/gate';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';

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
      <section className="article wrap" id="desk">
        <SectionHead
          numeral="D"
          title="Desk"
          folio="Dated tactical reads"
        />

        <Reveal as="p" className="standfirst">
          <span className="cap">Dated tactical reads.</span> Live tape,
          framework-only when the data isn&rsquo;t there.
        </Reveal>

        <div className="essay">
          <Reveal as="p" className="lede">
            <span className="leadin">A daily artifact</span>{' '}
            <span className="em">—</span> regime, positioning,
            dealer map, trade book, kill conditions. Numbers are timestamped
            per-section; framework-only when a claim outruns its data. Notes
            decay fast and are not re-edited after publication. Read with the
            manifest band first.
          </Reveal>

          <Reveal as="p">
            Published in English with a parallel <Link href="/zh/desk">中文
            镜像</Link>. <span className="em">Not financial advice.</span>{' '}
            Each note carries its own NFA disclaimer and audit trace.
          </Reveal>
        </div>

        <Reveal as="ol" className="notindex" style={{ marginTop: '2.4rem' }}>
          <li>
            <Link href="/desk/2026-06-07">
              <time className="when" dateTime="2026-06-07">2026-06-07</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">Bounce off the cycle floor</span>
            </Link>
          </li>
          <li>
            <Link href="/desk/2026-06-06">
              <time className="when" dateTime="2026-06-06">2026-06-06</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">Through the floor on the print</span>
            </Link>
          </li>
          <li>
            <Link href="/desk/2026-06-05">
              <time className="when" dateTime="2026-06-05">2026-06-05</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">Pause without recovery</span>
            </Link>
          </li>
          <li>
            <Link href="/desk/2026-06-04">
              <time className="when" dateTime="2026-06-04">2026-06-04</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">Third tier deeper, TD9 across five frames</span>
            </Link>
          </li>
          <li>
            <Link href="/desk/2026-06-03">
              <time className="when" dateTime="2026-06-03">2026-06-03</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">Wall cleared, new magnet below</span>
            </Link>
          </li>
          <li>
            <Link href="/desk/2026-06-02">
              <time className="when" dateTime="2026-06-02">2026-06-02</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">Cycle anchor lost, dealer book flipped back net-short-gamma, scout deferred</span>
            </Link>
          </li>
          <li>
            <Link href="/desk/2026-06-01">
              <time className="when" dateTime="2026-06-01">2026-06-01</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">Anchor held on close, leverage rebuilt one-sided short, scout re-anchored off the dead W-SMA20</span>
            </Link>
          </li>
          <li>
            <Link href="/desk/2026-05-31">
              <time className="when" dateTime="2026-05-31">2026-05-31</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">Book flipped to net-long-gamma, anchor held on close, scout deferred</span>
            </Link>
          </li>
          <li>
            <Link href="/desk/2026-05-29">
              <time className="when" dateTime="2026-05-29">2026-05-29</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">Full ladder tagged, the amplifier expires today</span>
            </Link>
          </li>
          <li>
            <Link href="/desk/2026-05-28">
              <time className="when" dateTime="2026-05-28">2026-05-28</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">Gate fired clean, target tagged to the dollar</span>
            </Link>
          </li>
          <li>
            <Link href="/desk/2026-05-27">
              <time className="when" dateTime="2026-05-27">2026-05-27</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">The long got cut and the flip cracked</span>
            </Link>
          </li>
          <li>
            <Link href="/desk/2026-05-26">
              <time className="when" dateTime="2026-05-26">2026-05-26</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">Long-add at the cluster</span>
            </Link>
          </li>
          <li>
            <Link href="/desk/2026-05-25">
              <time className="when" dateTime="2026-05-25">2026-05-25</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">The cover printed at the cluster</span>
            </Link>
          </li>
          <li>
            <Link href="/desk/2026-05-24">
              <time className="when" dateTime="2026-05-24">2026-05-24</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">Pinned at the cluster</span>
            </Link>
          </li>
          <li>
            <Link href="/desk/2026-05-23">
              <time className="when" dateTime="2026-05-23">2026-05-23</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">The short re-stacked</span>
            </Link>
          </li>
          <li>
            <Link href="/desk/2026-05-22">
              <time className="when" dateTime="2026-05-22">2026-05-22</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">The short case drained</span>
            </Link>
          </li>
          <li>
            <Link href="/desk/2026-05-21">
              <time className="when" dateTime="2026-05-21">2026-05-21</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">SM sold the reclaim</span>
            </Link>
          </li>
          <li>
            <Link href="/desk/2026-05-20">
              <time className="when" dateTime="2026-05-20">2026-05-20</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">Macro joins</span>
            </Link>
          </li>
          <li>
            <Link href="/desk/2026-05-19">
              <time className="when" dateTime="2026-05-19">2026-05-19</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">Coiled on the anchor</span>
            </Link>
          </li>
          <li>
            <Link href="/desk/2026-05-18">
              <time className="when" dateTime="2026-05-18">2026-05-18</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">Smart money short</span>
            </Link>
          </li>
          <li>
            <Link href="/desk/2026-05-17">
              <time className="when" dateTime="2026-05-17">2026-05-17</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">Kill condition one</span>
            </Link>
          </li>
          <li>
            <Link href="/desk/2026-05-15">
              <time className="when" dateTime="2026-05-15">2026-05-15</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">Between two walls</span>
            </Link>
          </li>
        </Reveal>

        <Reveal as="p" className="close" style={{ marginTop: '1.7rem' }}>
          A note appears when the tape gives one. No calendar.
        </Reveal>
      </section>
    </main>
  );
}
