import type { Metadata } from 'next';
import BHMark from '@/app/components/BHMark';
import { pageMetadata } from '@/lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'LP · Firm · Hysteresis Research',
    description: 'Private LP firm profile.',
    path: '/lp/firm',
    lang: 'en',
  }),
  alternates: { canonical: '/lp/firm' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function LpFirm() {
  await requireViewer('/lp/firm');
  return (
    <main>
      <div className="col">
        <div className="marginalia">§1</div>
        <div className="hero-mark">
          <BHMark width={180} height={108} strokeWidth={2.2} />
        </div>

        <div className="marginalia">firm</div>
        <h1>Firm</h1>

        <div></div>
        <p className="lede">the long view.</p>

        <div className="marginalia">§2</div>
        <p className="body-paragraph">
          <span className="signal">Vision — North Star</span>{' '}
          <span className="em">—</span> to drive $50&ndash;100B of cross-asset
          capital through a single-PM industrial epistemic engine, proving
          that in narrative-rich markets discipline is the binding
          constraint, not headcount. Stated trajectory, the firm&rsquo;s
          ambition and not a projection of investor returns: 3y, a unified
          regime model across crypto + macro majors with process
          infrastructure live; 5y, a multi-sleeve operation (regime /
          event-driven / boundary) and a first public thesis paper; 10y, the
          single-PM industrial process proven and transferable.
        </p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">
          <span className="signal">Mission</span> <span className="em">—</span>{' '}
          every trading day, convert market observation into falsifiable
          propositions and run the full pipeline <span className="em">—</span>{' '}
          hypothesis &rarr; data &rarr; independent cross-validation &rarr;
          regime integration &rarr; position sizing <span className="em">—</span>{' '}
          so that knowledge compounds faster than capital. Trading is a
          byproduct of research. Position size is the scale that weighs
          conviction.
        </p>

        <div className="marginalia">§4</div>
        <p className="body-paragraph">
          <span className="signal">Values</span> <span className="em">—</span>{' '}
          these are ordered, not parallel. When two conflict, the earlier one
          governs. Epistemic integrity before P&amp;L: process quality is
          judged independently of the outcome it produced. Falsifiability
          before confidence: a thesis we cannot disprove is not one we will
          hold. Cross-validation before speed: conclusions are not
          extrapolated from single instances. Survival before optimality: the
          drawdown ceiling outranks return optimization. Capacity discipline
          before growth: capital is refused rather than the edge diluted.
        </p>

        <div className="marginalia">§5</div>
        <p className="body-paragraph">
          <span className="signal">Scope</span> <span className="em">—</span>{' '}
          what we will trade: cross-asset regime-transition trades (the
          primary book); positioning-conditioned, event-driven trades;
          crypto&ndash;TradFi boundary data-hygiene dislocations; distribution
          / accumulation structure traded on a formalized method. What we
          will not: liquidity provision or market making (capacity conflict);
          high-frequency microstructure arbitrage (not our edge); narrative-
          or sentiment-driven trades; &ldquo;unique opportunities&rdquo;
          without cross-event replication; P&amp;L the framework cannot
          explain — out of scope.
        </p>

        <div></div>
        <p className="signature">Trading is a byproduct of research.</p>
      </div>
    </main>
  );
}
