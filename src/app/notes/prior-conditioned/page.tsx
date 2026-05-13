import BHMark from '../../components/BHMark';

export const metadata = {
  title: 'The prior, conditioned · Notes · Hysteresis Research',
  description:
    'Eight historical FOMC meetings averaged −3.5% over five days. The 2026-04-29 outcome was +3.7%. The prior, conditioned on entry positioning, flipped sign.',
};

export default function PriorConditioned() {
  return (
    <main>
      <div className="col">
        <div className="marginalia">2026<br/>05-02</div>
        <div className="hero-mark">
          <BHMark width={180} height={108} strokeWidth={2.2} />
        </div>

        <div className="marginalia">notes</div>
        <h1>The prior, conditioned</h1>

        <div></div>
        <p className="lede">
          The historical prior pointed short. The actual move was a +3.7%
          squeeze.
        </p>

        <div className="marginalia">§2</div>
        <p className="body-paragraph">
          Between April 2025 and April 2026, BTC moved through eight FOMC
          meetings. Pooled, the five-day post-meeting return averaged −3.5%.
          Mechanically, the rule said to short the next one. 2026-04-29 was the
          next one.
        </p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">
          Four of those eight events had been entered with{' '}
          <span className="signal">crowded longs</span>{' '}
          <span className="em">—</span> funding paying premium, open interest
          extended, price near the range high. Those four dominated the pooled
          mean. Sliced by entry positioning, the drift sign flips.
        </p>

        <div className="marginalia">§4</div>
        <p className="body-paragraph">
          2026-04-29 entered with the opposite profile. Funding wobbled near
          zero. Top traders sat position-tilted short. Spot was mid-range. The
          relevant conditional prior was a squeeze, not a flush. BTC peaked at
          +3.70% on hour 44 after the print.
        </p>

        <div></div>
        <p className="signature">
          A mean over a mixed sample is not a probability. It is a question
          about which sample applies.
        </p>
      </div>
    </main>
  );
}
