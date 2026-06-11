import CycleDrawdownChart from '../../components/charts/CycleDrawdownChart';
import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import Reveal from '../../components/Reveal';
import SectionHead from '../../components/SectionHead';

export const metadata: Metadata = pageMetadata({
  title: 'Shallower, so far · Notes · Hysteresis Research',
  description: 'At day 219 from peak, the current BTC drawdown sits 28 percentage points shallower than the prior-cycle median. N=2; not a forecast.',
  path: '/notes/three-cycles',
  lang: 'en',
  type: 'article',
});

export default function ThreeCycles() {
  return (
    <main>
      <article className="article wrap" id="three-cycles">
        <SectionHead
          numeral="V"
          title="Shallower, so far"
          folio="Notes · BTC · 2026-05-13"
        />

        <Reveal as="p" className="standfirst">
          <span className="cap">−35% at day 219.</span> The prior two cycles, at
          the same elapsed time, sat between −60% and −67%.
        </Reveal>

        <div className="essay">
          <Reveal as="figure" className="fig-plate">
            <figcaption>
              <span className="fig-label">
                <b>Fig.</b> — Peak-aligned drawdowns
              </span>
              <p className="fig-cap">
                Peak-aligned drawdown trajectories. Current cycle traced through
                day 219.
              </p>
            </figcaption>
            <CycleDrawdownChart />
          </Reveal>

          <Reveal as="p" className="lede">
            <span className="leadin">Two completed bears</span> — Bitcoin has
            lived through two completed bear cycles since it became a tradable
            instrument. The 2017 peak gave way to a drawdown of −83% over 364
            days; the 2021 peak gave way to −77% over 378 days. The current cycle
            peaked on 2025-10-06 at $124,628. Today, 219 days later, BTC trades
            at $80,630 — a drawdown of −35% from that peak.
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            At the same elapsed time, 2017 was at −60%, 2021 at −67%. The median
            of the two: −63%. The current cycle is 28 points shallower.
          </Reveal>

          <Reveal as="p">
            At the same elapsed time, the 2017 cycle was at −60%; the 2021 cycle
            was at −67%. The median of the two prior instances was −63%. The
            current cycle&rsquo;s drawdown is 28 percentage points shallower than
            that median.
          </Reveal>

          <Reveal as="p">
            N=2 precludes any statistical inference. The current cycle&rsquo;s
            peak is not confirmed as the final bear-market peak; if BTC reclaims
            a new all-time high, this cycle has no bear phase. The interim low,
            on 2026-02-05 at $62,868, is provisional — price could re-test or
            exceed it. None of this is a forecast. It is an observation about how
            three drawdowns measure against one another, at one moment in time.
          </Reveal>

          <Reveal as="p" className="close">
            Two prior cycles are not a base rate. They are two stories.
          </Reveal>
        </div>
      </article>
    </main>
  );
}
