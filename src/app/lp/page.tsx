import Link from 'next/link';
import type { Metadata } from 'next';
import BHMark from '@/app/components/BHMark';
import { pageMetadata } from '@/lib/seo';
import { requireViewer } from '@/lib/gate';

// Allowlist-tier route: not in public nav, not in sitemap, noindex/nofollow.
// Accessible only to LP_ALLOWLIST accounts via Google sign-in.
export const metadata: Metadata = {
  ...pageMetadata({
    title: 'LP · Hysteresis Research',
    description: 'Private LP introduction.',
    path: '/lp',
    lang: 'en',
  }),
  alternates: { canonical: '/lp' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Lp() {
  await requireViewer('/lp');
  return (
    <main>
      <div className="col">
        <div className="marginalia">§1</div>
        <div className="hero-mark">
          <BHMark width={180} height={108} strokeWidth={2.2} />
        </div>

        <div className="marginalia">lp</div>
        <h1>Introduction</h1>

        <div></div>
        <p className="lede">
          Hysteresis Research is a research-driven quantitative trading firm.
        </p>

        <div className="marginalia">§2</div>
        <p className="body-paragraph">
          We operate across global macro and crypto derivatives. We trade
          cross-asset regime transitions <span className="em">—</span> where
          the gap between fundamentals and price persists{' '}
          <span className="signal">long enough to be measured</span>.
        </p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">
          Capacity is finite by design. We accept capital only inside the
          window where the edge survives, and refuse it where it would
          dilute. This is a constraint we hold against ourselves, not a phase
          we expect to grow out of.
        </p>

        <div className="marginalia">§4</div>
        <p className="body-paragraph">
          What you are reading sits behind a deliberate door. Nothing here
          runs at the calendar&rsquo;s pace <span className="em">—</span> not
          the research, not the relationship. The{' '}
          <Link href="/lp/firm">firm profile</Link>, the scope of what we will
          and will not trade, and the <Link href="/lp/terms">terms</Link>{' '}
          under which a relationship would form are set out in the pages
          alongside this one. Read them when you have time to read rather than
          skim.
        </p>

        <div className="marginalia">§5</div>
        <p className="body-paragraph">
          Strategy briefs are not published yet <span className="em">—</span>{' '}
          <Link href="/lp/strategies">the section</Link> will carry them when
          they are ready.
        </p>

        <div></div>
        <p className="signature">Research compounds; capital follows.</p>
      </div>
    </main>
  );
}
