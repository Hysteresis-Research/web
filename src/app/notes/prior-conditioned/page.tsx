import FOMCEntryChart from '../../components/charts/FOMCEntryChart';
import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import Reveal from '../../components/Reveal';
import SectionHead from '../../components/SectionHead';

export const metadata: Metadata = pageMetadata({
  title: 'The prior, conditioned · Notes · Hysteresis Research',
  description: 'Eight historical FOMC meetings averaged −3.5% over five days. The 2026-04-29 outcome was +3.7%. The prior, conditioned on entry positioning, flipped sign.',
  path: '/notes/prior-conditioned',
  lang: 'en',
  type: 'article',
});

export default function PriorConditioned() {
  return (
    <main>
      <article className="article wrap" id="prior-conditioned">
        <SectionHead
          numeral="V"
          title="The prior, conditioned"
          folio="Notes · BTC · 2026-05-02"
        />

        <Reveal as="p" className="standfirst">
          <span className="cap">The historical prior</span> pointed short. The
          actual move was a +3.7% squeeze.
        </Reveal>

        <div className="essay">
          <Reveal as="figure" className="fig-plate">
            <figcaption>
              <span className="fig-label">
                <b>Fig.</b> — Returns by entry regime
              </span>
              <p className="fig-cap">
                5-day post-FOMC returns by entry regime. The pooled mean
                averages two opposite distributions.
              </p>
            </figcaption>
            <FOMCEntryChart />
          </Reveal>

          <Reveal as="p" className="lede">
            <span className="leadin">Between April 2025</span> and April 2026,
            BTC moved through eight FOMC meetings. Pooled, the five-day
            post-meeting return averaged −3.5%. Mechanically, the rule said to
            short the next one. 2026-04-29 was the next one.
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            Four of the eight were entered with crowded longs. Those four
            dominated the pooled mean. Sliced by entry, the drift sign flips.
          </Reveal>

          <Reveal as="p">
            Four of those eight events had been entered with crowded longs —
            funding paying premium, open interest extended, price near the range
            high. Those four dominated the pooled mean. Sliced by entry
            positioning, the drift sign flips.
          </Reveal>

          <Reveal as="p">
            2026-04-29 entered with the opposite profile. Funding wobbled near
            zero. Top traders sat position-tilted short. Spot was mid-range. The
            relevant conditional prior was a squeeze, not a flush. BTC peaked at
            +3.70% on hour 44 after the print.
          </Reveal>

          <Reveal as="p" className="close">
            A mean over a mixed sample is not a probability. It is a question
            about which sample applies.
          </Reveal>
        </div>
      </article>
    </main>
  );
}
