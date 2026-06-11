import Link from 'next/link';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { requireViewer } from '@/lib/gate';
import Reveal from '@/app/components/Reveal';
import SectionHead from '@/app/components/SectionHead';

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
      <section className="article wrap" id="lp">
        <SectionHead numeral="I" title="Introduction" folio="LP · private" />

        <Reveal as="p" className="standfirst">
          <span className="cap">Hysteresis Research</span> is a
          research-driven quantitative trading firm.
        </Reveal>

        <div className="essay">
          <Reveal as="p" className="lede">
            <span className="leadin">We operate</span> across global macro and
            crypto derivatives. We trade cross-asset regime transitions{' '}
            <span className="em">—</span> where the gap between fundamentals
            and price persists{' '}
            <span className="signal">long enough to be measured</span>.
          </Reveal>

          <Reveal as="p">
            Capacity is finite by design. We accept capital only inside the
            window where the edge survives, and refuse it where it would
            dilute. This is a constraint we hold against ourselves, not a phase
            we expect to grow out of.
          </Reveal>

          <Reveal as="p">
            What you are reading sits behind a deliberate door. Nothing here
            runs at the calendar&rsquo;s pace <span className="em">—</span> not
            the research, not the relationship. The{' '}
            <Link href="/lp/firm">firm profile</Link>, the scope of what we will
            and will not trade, and the <Link href="/lp/terms">terms</Link>{' '}
            under which a relationship would form are set out in the pages
            alongside this one. Read them when you have time to read rather than
            skim.
          </Reveal>

          <Reveal as="p">
            Strategy briefs are not published yet{' '}
            <span className="em">—</span>{' '}
            <Link href="/lp/strategies">the section</Link> will carry them when
            they are ready.
          </Reveal>

          <Reveal as="p" className="close">
            Research compounds; capital follows.
          </Reveal>
        </div>
      </section>
    </main>
  );
}
