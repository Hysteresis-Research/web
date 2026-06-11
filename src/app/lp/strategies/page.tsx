import Link from 'next/link';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { requireViewer } from '@/lib/gate';
import Reveal from '@/app/components/Reveal';
import SectionHead from '@/app/components/SectionHead';

// Allowlist-tier route: not in public nav, not in sitemap, noindex/nofollow.
// Accessible only to LP_ALLOWLIST accounts via Google sign-in.
// CONTENT GATE: this page is downstream of the strategy package. It must
// not claim any program is "validated" until the package clears the codex
// hostile-but-fair pass and the W3 falsifier is resolved. Maturity language
// here is deliberately "in validation / data-gated", never "validated".
export const metadata: Metadata = {
  ...pageMetadata({
    title: 'LP · Strategies · Hysteresis Research',
    description: 'Private LP strategies.',
    path: '/lp/strategies',
    lang: 'en',
  }),
  alternates: { canonical: '/lp/strategies' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function LpStrategies() {
  await requireViewer('/lp/strategies');
  return (
    <main>
      <section className="article wrap" id="lp-strategies">
        <SectionHead numeral="III" title="Strategies" folio="LP · private" />

        <Reveal as="p" className="standfirst">
          one disciplined process, several domains.
        </Reveal>

        <div className="essay">
          <Reveal as="p" className="lede">
            <span className="leadin">
              <span className="signal">The process</span>
            </span>{' '}
            <span className="em">—</span> we run one disciplined process
            across several domains. The durable advantage is method, not a
            claimed regime edge: falsifiable kill conditions declared before
            entry, independent hostile review at small N, and capital
            committed only to what has been measured to our standard{' '}
            <span className="em">—</span> not tools, not information, not a
            claimed edge. The research program studies cross-asset regime
            transitions: gaps between fundamentals and price that may persist{' '}
            <span className="signal">long enough to be measured</span>.
          </Reveal>

          <Reveal as="p">
            <span className="signal">Digital assets</span>{' '}
            <span className="em">—</span> a systematic trend program with a
            hard drawdown-control overlay. The domain nearest to deployment:
            in walk-forward validation against its own falsification test, and
            it carries capital only once that test is passed{' '}
            <span className="em">—</span> not before.
          </Reveal>

          <Reveal as="p">
            <span className="signal">Volatility</span>{' '}
            <span className="em">—</span> where implied volatility re-rates to a
            new realized regime with a delay. Studied today only through an
            index proxy, and treated with caution because the premium it once
            relied on has compressed. A satellite by design, not a pillar.
          </Reveal>

          <Reveal as="p">
            <span className="signal">Global macro</span>{' '}
            <span className="em">—</span> the same systematic read across
            equity, metals, energy and currency <span className="em">—</span> a
            cross-asset view a single-market desk structurally cannot see.
            Design complete; held back pending the data history to test it
            honestly.
          </Reveal>

          <Reveal as="p">
            <span className="signal">Power-constrained compute</span>{' '}
            <span className="em">—</span> an archived v0.1 research direction
            (dormant, unfunded; no asserted edge): the constraint on AI compute
            has moved from chips to electricity, and the question is whether the
            market lags the power-supply layer it depends on. It remains an open
            research question and carries no capital; any future activation is a
            separate decision, and the measurement and its replication across
            prior regimes are not in hand. Set out in the thesis note,{' '}
            <span className="em">Power Is the Binding Constraint on
            Compute</span> (forthcoming).
          </Reveal>

          <Reveal as="p">
            <span className="signal">Readiness</span>{' '}
            <span className="em">—</span> the digital-assets program is the only
            near-term program; the v0.1 research directions (vol-hysteresis,
            cross-asset, power-compute) are archived as provenance — dormant,
            unfunded, and not carrying size. They remain open research, not a
            live roster. Capital is allocated by what has been measured to our
            standard and by capacity, never by the loudest opportunity. A thesis
            not yet measured to that standard does not carry size, and we say so
            rather than imply otherwise. The{' '}
            <Link href="/lp/terms">terms</Link> under which each would be funded
            are set out per scheme alongside this page.
          </Reveal>

          <Reveal as="p" className="close">
            Research compounds; capital follows.
          </Reveal>
        </div>
      </section>
    </main>
  );
}
