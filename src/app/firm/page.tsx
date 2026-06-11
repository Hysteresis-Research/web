import type { Metadata } from 'next';
import { pageMetadata } from '../../lib/seo';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';

export const metadata: Metadata = pageMetadata({
  title: 'The Practice · Hysteresis Research',
  description:
    'On scale and mandate — a discipline whose limit is set by its method, not its size, built toward institutional-scale cross-asset allocation.',
  path: '/firm',
  lang: 'en',
});

export default function Firm() {
  return (
    <main>
      {/* ============ II. THE PRACTICE ============ */}
      <section className="article wrap" id="practice">
        <SectionHead
          numeral="II"
          title="The Practice"
          folio="On scale · p. 03"
        />

        <Reveal as="p" className="standfirst">
          <span className="cap">A research-driven trading firm</span> is, in our
          model, a discipline whose limit is set by its method, not its size.
        </Reveal>

        <div className="essay">
          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            One desk, one ledger. The firm is run as a single-PM practice; the
            binding constraint is the method, never the calendar or the count.
          </Reveal>

          <Reveal as="p" className="lede">
            <span className="leadin">In markets</span> rich with narrative, what
            carries a strategy is the <em>rigor of its method</em>, not the
            headcount that runs it. Our ambition is institutional-scale
            cross-asset allocation across the cross-asset majors, run as a
            single-PM practice and held to the same discipline at any size.
          </Reveal>

          <Reveal as="p" className="close">
            The firm is young by the calendar and deliberate by temperament. What
            is being compounded now is not capital. It is the research that will
            deserve it.
          </Reveal>
        </div>
      </section>

      {/* ============ III. THE MANDATE ============ */}
      <section className="article wrap" id="mandate">
        <SectionHead
          numeral="III"
          title="The Mandate"
          folio="A statement of ambition · p. 04"
          as="h2"
        />

        <div className="mandate-grid">
          <Reveal as="h3" className="mandate-state">
            One book. One decision-maker.
            <br />
            <span className="u">Built toward institutional scale.</span>
          </Reveal>

          <Reveal className="mandate-prose">
            <p>
              The ambition is institutional-scale cross-asset allocation: a book
              that moves across regimes as they turn — in time, and across the
              cross-asset majors — and is run with the same discipline at any
              size.
            </p>
            <p>
              Within three years — a unified regime model across the cross-asset
              majors in a reusable form, kept honest by the daily operational
              process. Within five — multiple sleeves running in parallel, and
              the first public thesis paper documenting the core of the method.
              Within ten — a method validated across regime environments, in a
              form that can be inherited.
            </p>
          </Reveal>

          <Reveal
            as="aside"
            className="mandate-aside"
            aria-label="For the record"
          >
            <span className="label label--ink">For the record</span>
            <dl>
              <dt>Character</dt>
              <dd>Research-driven, quantitative, regime-focused.</dd>
              <dt>Subject</dt>
              <dd>
                Cross-asset regime transitions — where price lags what is already
                true.
              </dd>
              <dt>Horizon</dt>
              <dd>
                Long enough to be measured. Long enough to be wrong in public and
                corrected in print.
              </dd>
            </dl>
          </Reveal>

          <Reveal as="aside" className="notlist">
            <h3>Not on this page</h3>
            <p>
              No performance figures are shown here, by design. No invented
              certainty, no borrowed logos, no numbers that cannot be defended.
            </p>
            <p>
              <i>Research compounds; capital follows.</i>
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
