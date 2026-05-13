import BHMark from '../../components/BHMark';
import CorrelationChart from '../../components/charts/CorrelationChart';

export const metadata = {
  title: 'Decoupled, on one side · Notes · Hysteresis Research',
  description:
    'Four-week BTC-NQ correlation: +0.71 to +0.34. Down-side beta intact. The decoupling is one-sided.',
};

export default function DecoupledOneSide() {
  return (
    <main>
      <div className="col">
        <div className="marginalia">2026<br/>05-05</div>
        <div className="hero-mark">
          <BHMark width={180} height={108} strokeWidth={2.2} />
        </div>

        <div className="marginalia">notes</div>
        <h1>Decoupled, on one side</h1>

        <div></div>
        <p className="lede">
          Through March, BTC traded as a high-beta NQ proxy. Four weeks later,
          half of that correlation is gone. Only on the upside.
        </p>

        <div></div>
        <figure className="note-figure">
          <CorrelationChart />
          <figcaption>
            Rolling 7-day correlation, 2026-03-25 → 2026-05-05.
          </figcaption>
        </figure>

        <div className="marginalia">§2</div>
        <p className="body-paragraph">
          On 2026-04-08, the rolling seven-day BTC-NQ correlation was +0.71. On
          2026-05-05, it was +0.34. The BTC-NVDA pair collapsed further{' '}
          <span className="em">—</span> from +0.68 to +0.21. By the
          conventional reading, BTC has decoupled.
        </p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">
          The reading is incomplete. On the hours when NQ fell, BTC&rsquo;s
          beta to it was still +0.92. The decoupling is in the other half{' '}
          <span className="em">—</span> on hours when NQ was flat or up, BTC
          contributed +9.28% of independent gain over thirty days.{' '}
          <span className="signal">More than half of its total return.</span>
        </p>

        <div className="marginalia">§4</div>
        <p className="body-paragraph">
          The mechanism is unilateral. Funding has been negative on 66% of all
          eight-hour periods since 2026-04-01, with a trough of −13.4%
          annualized. That is one-directional fuel{' '}
          <span className="em">—</span> squeeze potential, no symmetric
          counterpart in equities. As long as it persists, BTC has an axis
          they do not.
        </p>

        <div></div>
        <p className="signature">
          Decoupling is not symmetric until it is.
        </p>
      </div>
    </main>
  );
}
