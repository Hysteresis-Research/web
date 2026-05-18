import type { Metadata } from 'next';
import BHMark from '@/app/components/BHMark';
import { pageMetadata } from '@/lib/seo';
import { requireViewer } from '@/lib/gate';

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
      <div className="col">
        <div className="marginalia">§1</div>
        <div className="hero-mark">
          <BHMark width={180} height={108} strokeWidth={2.2} />
        </div>

        <div className="marginalia">terms</div>
        <h1>Terms</h1>

        <div></div>
        <p className="lede">
          Draft. Non-binding. Not an offer or solicitation.
        </p>

        <div className="marginalia">§1</div>
        <p className="body-paragraph">
          This page sets out the posture under which a relationship would
          form. It is <span className="em">not</span> a private placement
          memorandum, subscription agreement, or any definitive document, and
          creates no obligation on either side. Entity registration is not
          complete; every legal and commercial fact below is an explicit{' '}
          <span className="signal">[PENDING]</span> placeholder until
          verified.
        </p>

        <div className="marginalia">§1</div>
        <p className="body-paragraph">
          <span className="signal">Nature of the relationship</span>{' '}
          <span className="em">—</span> capacity is finite by design. We
          accept capital only inside the window where the edge survives, and
          refuse it where it would dilute. A relationship here runs at the
          firm&rsquo;s pace, not the calendar&rsquo;s: research precedes
          capital, and admission follows diligence on both sides rather than
          a fundraising timetable.
        </p>

        <div className="marginalia">§2</div>
        <p className="body-paragraph">
          <span className="signal">Admission &amp; capacity</span> — Eligibility:{' '}
          [PENDING — eligibility definition and investor categories, subject
          to counsel and final jurisdiction/regulatory classification].
          Capacity cap: [PENDING — figure]. Minimum commitment: [PENDING].
        </p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">
          <span className="signal">Structure &amp; vehicle</span> — [PENDING —
          entity registration not complete]. Fund vs managed-account,
          domicile, administrator, auditor, prime/custody — all to be set out
          in definitive documents. Nothing on this page should be read as the
          chosen structure.
        </p>

        <div className="marginalia">§4</div>
        <p className="body-paragraph">
          <span className="signal">Economics</span> — [PENDING]. Management
          fee, performance fee, hurdle / high-water-mark mechanics. No figure
          is stated here by design; an unstated number is honest, an invented
          one is not.
        </p>

        <div className="marginalia">§5</div>
        <p className="body-paragraph">
          <span className="signal">Liquidity — lock-up &amp; redemption</span>{' '}
          — [PENDING — liquidity, lock-up, redemption, and notice terms to be
          set by definitive documents].
        </p>

        <div className="marginalia">§6</div>
        <p className="body-paragraph">
          <span className="signal">Jurisdiction &amp; entity</span> — [PENDING
          — entity registration not complete; domicile, jurisdiction,
          regulatory classification, governing law, and dispute forum not
          final. All to be set by definitive documents].
        </p>

        <div className="marginalia">§7</div>
        <p className="body-paragraph">
          <span className="signal">Reporting &amp; transparency</span> —
          [PENDING — reporting package, cadence, and disclosure materials to
          be defined in definitive documents].
        </p>

        <div className="marginalia">§8</div>
        <p className="body-paragraph">
          <span className="signal">What would disqualify a relationship</span>{' '}
          <span className="em">—</span> we decline mandates whose constraints
          we cannot meet without compromising the process. Where a
          relationship would require that, we do not enter it.
        </p>

        <div className="marginalia">§9</div>
        <p className="body-paragraph">
          <span className="signal">To engage</span> — [PENDING — contact /
          process]. <code>contact@</code> is a placeholder until the entity
          exists.
        </p>

        <div></div>
        <p className="signature">
          This material is provided for information only to vetted recipients
          behind authenticated access. It is not investment advice, not an
          offer to sell or a solicitation to buy any interest, and not a
          recommendation. Any relationship is governed solely by definitive
          documents executed by both parties; nothing here is binding. Not
          available where such an offer would be unlawful.
        </p>
      </div>
    </main>
  );
}
