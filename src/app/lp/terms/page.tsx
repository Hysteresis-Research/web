import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { requireViewer } from '@/lib/gate';
import Reveal from '@/app/components/Reveal';
import SectionHead from '@/app/components/SectionHead';

// Allowlist-tier route: not in public nav, not in sitemap, noindex/nofollow.
// CONTENT GATE: terms are split per scheme (one segregated portfolio per
// program) but every legal/commercial figure stays [PENDING] by design.
// "an unstated number is honest, an invented one is not." Per-scheme
// differentiation states only the FUND-TERMS §0 design principle
// (redemption slower than each program's process horizon; liquidity
// matched to each regime clock); no number is asserted until counsel +
// definitive documents, and not before the strategy package clears codex.
export const metadata: Metadata = {
  ...pageMetadata({
    title: 'LP · Terms · Hysteresis Research',
    description: 'Private LP terms — draft, non-binding.',
    path: '/lp/terms',
    lang: 'en',
  }),
  alternates: { canonical: '/lp/terms' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function LpTerms() {
  await requireViewer('/lp/terms');
  return (
    <main>
      <section className="article wrap" id="lp-terms">
        <SectionHead numeral="IV" title="Terms" folio="LP · private · draft" />

        <Reveal as="p" className="standfirst">
          Draft. Non-binding. Not an offer or solicitation.
        </Reveal>

        <div className="essay">
          <Reveal as="p" className="lede">
            This page sets out the posture under which a relationship would
            form. It is <em>not</em> a private placement
            memorandum, subscription agreement, or any definitive document, and
            creates no obligation on either side. Entity registration is not
            complete; every legal and commercial fact below is an explicit{' '}
            <span className="signal">[PENDING]</span> placeholder until
            verified.
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            §2 — nature of the relationship
          </Reveal>

          <Reveal as="p">
            <span className="signal">Nature of the relationship</span>{' '}
            <span className="em">—</span> capacity is finite by design. We
            accept capital only inside the window where the method&rsquo;s
            capacity holds, and refuse it where it would dilute. A relationship
            here runs at the
            firm&rsquo;s pace, not the calendar&rsquo;s: research precedes
            capital, and admission follows diligence on both sides rather than
            a fundraising timetable.
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            §3 — why terms differ by scheme
          </Reveal>

          <Reveal as="p">
            <span className="signal">Why terms differ by scheme</span>{' '}
            <span className="em">—</span> each program is run as its own
            segregated scheme, with its own terms, not a single commingled
            set. The reason is structural: each program&rsquo;s process needs
            a holding horizon longer than the noise it is built to filter. A
            scheme whose own redemption profile is faster than that horizon
            would be forced to liquidate into exactly the conditions the
            process exists to hold through <span className="em">—</span> it
            would become the forced seller it is built to outlast. So
            liquidity is matched to each program&rsquo;s process horizon{' '}
            <span className="em">—</span> the slower the horizon, the longer
            the lock and the slower the redemption. Authorized scope is broad;
            only a program that has cleared its validation gate is funded and
            charged a fee. The others are authorized but dormant. Every figure
            below is <span className="signal">[PENDING]</span>; what is stated
            is the ordering principle, not a number.
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            §4 — Scheme A
          </Reveal>

          <Reveal as="p">
            <span className="signal">Scheme A &middot; Digital assets</span>{' '}
            <span className="em">—</span> regime clock: weeks to months. The
            program nearest to deployment; funded only once it has passed its
            own falsification test, not before. Subscription, redemption,
            lock-up, gates, minimum: <span className="signal">[PENDING]</span>,
            set by definitive documents and matched to this clock.
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            §5 — Scheme B
          </Reveal>

          <Reveal as="p">
            <span className="signal">Scheme B &middot; Volatility</span>{' '}
            <span className="em">—</span> an archived v0.1 research direction:
            dormant, unfunded, no asserted edge. A capacity-tiny satellite,
            studied today through an index proxy only. Terms:{' '}
            <span className="signal">[PENDING]</span> at any future activation,
            a future decision; capacity here is refused rather than scaled.
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            §6 — Scheme C
          </Reveal>

          <Reveal as="p">
            <span className="signal">Scheme C &middot; Global macro</span>{' '}
            <span className="em">—</span> an archived v0.1 research direction:
            dormant, unfunded, no asserted edge. Cross-asset, design complete,
            data-gated. Terms: <span className="signal">[PENDING]</span> at any
            future activation, a future decision; matched to its clock and no
            looser than Scheme A.
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            §7 — Scheme D
          </Reveal>

          <Reveal as="p">
            <span className="signal">
              Scheme D &middot; Power-constrained compute
            </span>{' '}
            <span className="em">—</span> an archived v0.1 research direction:
            dormant, unfunded, no asserted edge. Multi-quarter regime clock,
            the longest in the book; by the principle in §3, on any future
            activation it would carry the longest lock and slowest redemption
            of the four. Terms: <span className="signal">[PENDING]</span> at any
            future activation, a future decision; deliberately the slowest.
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            §8–§13
          </Reveal>

          <Reveal as="p">
            <span className="signal">Economics</span>{' '}
            <span className="em">—</span> fees are charged per scheme and only
            on a scheme that has been funded after clearing its gate; an
            unvalidated scheme carries no fee. Management fee, performance fee,
            hurdle / high-water-mark mechanics:{' '}
            <span className="signal">[PENDING]</span>. No figure is stated here
            by design; an unstated number is honest, an invented one is not.
          </Reveal>

          <Reveal as="p">
            <span className="signal">Structure &amp; vehicle</span>{' '}
            <span className="em">—</span> the design under consideration is a
            segregated-portfolio structure, one ring-fenced portfolio per
            scheme, so that scope can be authorized broadly while only
            validated schemes are funded. <span className="signal">[PENDING]</span>{' '}
            <span className="em">—</span> vehicle, domicile, administrator,
            auditor, prime / custody are set by counsel and definitive
            documents. Nothing here should be read as the chosen structure.
          </Reveal>

          <Reveal as="p">
            <span className="signal">Jurisdiction &amp; entity</span>{' '}
            <span className="em">—</span> <span className="signal">[PENDING]</span>{' '}
            <span className="em">—</span> entity registration not complete;
            domicile, regulatory classification, governing law, and dispute
            forum not final. All to be set by definitive documents.
          </Reveal>

          <Reveal as="p">
            <span className="signal">Reporting &amp; transparency</span>{' '}
            <span className="em">—</span> <span className="signal">[PENDING]</span>{' '}
            <span className="em">—</span> reporting package, cadence, and
            disclosure materials to be defined in definitive documents, per
            scheme.
          </Reveal>

          <Reveal as="p">
            <span className="signal">What would disqualify a relationship</span>{' '}
            <span className="em">—</span> we decline mandates whose constraints
            we cannot meet without compromising the process. A scheme&rsquo;s
            liquidity terms are one such constraint: a mandate requiring
            redemption faster than that scheme&rsquo;s process horizon is one
            we do not enter, because it would convert the fund into the forced
            seller its process is built to outlast.
          </Reveal>

          <Reveal as="p">
            <span className="signal">To engage</span>{' '}
            <span className="em">—</span> <span className="signal">[PENDING]</span>{' '}
            <span className="em">—</span> contact / process. <code>contact@</code>{' '}
            is a placeholder until the entity exists.
          </Reveal>

          <Reveal as="p" className="close">
            This material is provided for information only to vetted recipients
            behind authenticated access. It is not investment advice, not an
            offer to sell or a solicitation to buy any interest, and not a
            recommendation. Any relationship is governed solely by definitive
            documents executed by both parties; nothing here is binding. Not
            available where such an offer would be unlawful.
          </Reveal>
        </div>
      </section>
    </main>
  );
}
