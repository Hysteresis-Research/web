import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { requireViewer } from '@/lib/gate';
import { fetchNavFeed } from '@/lib/navData';
import Reveal from '@/app/components/Reveal';
import SectionHead from '@/app/components/SectionHead';
import NavPerformance from '@/app/components/NavPerformance';

// Allowlist-tier route: not in public nav, not in sitemap, noindex/nofollow.
// Accessible only to LP_ALLOWLIST accounts via Google sign-in. The data is
// the dollar-free aggregate feed (unit price + measures) — per-investor
// figures exist only in statements, pool size appears nowhere on the web.
export const metadata: Metadata = {
  ...pageMetadata({
    title: 'LP · NAV · Hysteresis Research',
    description: 'Private LP net asset value.',
    path: '/lp/nav',
    lang: 'en',
  }),
  alternates: { canonical: '/lp/nav' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function LpNavPage() {
  await requireViewer('/lp/nav');
  const feed = await fetchNavFeed();
  return (
    <main>
      <section className="article wrap" id="lp-nav">
        <SectionHead numeral="V" title="NAV" folio="LP · private" />

        <Reveal as="p" className="standfirst">
          one number, struck the same way every day.
        </Reveal>

        <div className="essay">
          <Reveal as="p" className="lede">
            <span className="leadin">The unit price</span> below is the whole
            story of the pool in one series: every subscription buys at it,
            every redemption leaves at it, and no deposit or withdrawal can
            move it <span className="em">—</span> flows mint and burn units;
            only performance moves the price. It is struck daily at 00:00 UTC
            against exchange marks, reconciled against an independent
            valuation read, and recorded in an append-only ledger whose
            corrections are themselves permanent entries.
          </Reveal>

          <Reveal as="p">
            We publish the measures with their uncertainty attached. A Sharpe
            ratio on a young track is mostly noise, so below sixty daily
            observations we show only its confidence interval{' '}
            <span className="em">—</span> the honest version of{' '}
            <span className="signal">long enough to be measured</span>.
          </Reveal>

          <Reveal>
            <NavPerformance feed={feed} lang="en" />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
