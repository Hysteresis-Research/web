import type { Metadata } from 'next';
import { pageMetadata } from '../../lib/seo';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';

export const metadata: Metadata = pageMetadata({
  title: 'The Practice · Hysteresis Research',
  description:
    'On the practice — one desk, one ledger: a discipline whose limit is set by its method, not its size.',
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
    </main>
  );
}
