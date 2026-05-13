import BHMark from '../../components/BHMark';

export const metadata = {
  title: 'Shallower, so far · Notes · Hysteresis Research',
  description:
    'At day 219 from peak, the current BTC drawdown sits 28 percentage points shallower than the prior-cycle median. N=2; not a forecast.',
};

export default function ThreeCycles() {
  return (
    <main>
      <div className="col">
        <div className="marginalia">2026<br/>05-13</div>
        <div className="hero-mark">
          <BHMark width={180} height={108} strokeWidth={2.2} />
        </div>

        <div className="marginalia">notes</div>
        <h1>Shallower, so far</h1>

        <div></div>
        <p className="lede">
          −35% at day 219. The prior two cycles, at the same elapsed time,
          sat between −60% and −67%.
        </p>

        <div></div>
        <figure className="note-figure">
          <img
            src="/notes/three-cycles.png"
            alt="Peak-aligned drawdown curves of the 2017 cycle (−83% at day 364), 2021 cycle (−77% at day 378), and the current cycle (−35% at day 219)"
            width={1600}
            height={840}
          />
          <figcaption>
            Peak-aligned drawdown trajectories. Current cycle traced through
            day 219.
          </figcaption>
        </figure>

        <div className="marginalia">§2</div>
        <p className="body-paragraph">
          Bitcoin has lived through two completed bear cycles since it became
          a tradable instrument. The 2017 peak gave way to a drawdown of
          −83% over 364 days; the 2021 peak gave way to −77% over 378 days.
          The current cycle peaked on 2025-10-06 at $124,628. Today, 219
          days later, BTC trades at $80,630 <span className="em">—</span> a
          drawdown of −35% from that peak.
        </p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">
          At the same elapsed time, the 2017 cycle was at −60%; the 2021
          cycle was at −67%. The median of the two prior instances was −63%.
          The current cycle&rsquo;s drawdown is{' '}
          <span className="signal">28 percentage points shallower</span>{' '}
          than that median.
        </p>

        <div className="marginalia">§4</div>
        <p className="body-paragraph">
          N=2 precludes any statistical inference. The current cycle&rsquo;s
          peak is not confirmed as the final bear-market peak; if BTC
          reclaims a new all-time high, this cycle has no bear phase. The
          interim low, on 2026-02-05 at $62,868, is provisional{' '}
          <span className="em">—</span> price could re-test or exceed it.
          None of this is a forecast. It is an observation about how three
          drawdowns measure against one another, at one moment in time.
        </p>

        <div></div>
        <p className="signature">
          Two prior cycles are not a base rate. They are two stories.
        </p>
      </div>
    </main>
  );
}
