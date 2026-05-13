import BHMark from '../../components/BHMark';
import MnavDurationChart from '../../components/charts/MnavDurationChart';

export const metadata = {
  title: 'Discount, unwinding · Notes · Hysteresis Research',
  description:
    "On the second-longest mNAV discount in MSTR's history. Day 145, trough at 0.73× on 2026-04-07, recovering to 0.94× as of 2026-05-04.",
};

export default function MstrMnav() {
  return (
    <main>
      <div className="col">
        <div className="marginalia">2026<br/>05-13</div>
        <div className="hero-mark">
          <BHMark width={180} height={108} strokeWidth={2.2} />
        </div>

        <div className="marginalia">notes</div>
        <h1>Discount, unwinding</h1>

        <div></div>
        <p className="lede">
          0.73<span className="em">×</span> on April 7. 0.94<span className="em">×</span> today.
        </p>

        <div></div>
        <figure className="note-figure">
          <MnavDurationChart />
          <figcaption>
            mNAV discount episodes of 30 days or more, MSTR history.
          </figcaption>
        </figure>

        <div className="marginalia">§2</div>
        <p className="body-paragraph">
          On 2025-12-10, MSTR&rsquo;s market capitalization fell below the
          value of the bitcoin on its balance sheet. The discount widened
          through the spring <span className="em">—</span> to a trough of
          0.73<span className="em">×</span> mNAV on 2026-04-07{' '}
          <span className="em">—</span> before beginning to compress. As of
          2026-05-04, the company trades at 0.94<span className="em">×</span>:
          a market capitalization of $61.3B against a bitcoin NAV of $65.1B.
        </p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">
          The episode is in its 145th day and counting. Only one prior
          discount episode in MSTR&rsquo;s history has run longer{' '}
          <span className="em">—</span> 180 days, from January through July
          of 2022, during the worst stretch of the last bear cycle. By
          duration, this is already the{' '}
          <span className="signal">second-longest mNAV discount on record</span>.
        </p>

        <div className="marginalia">§4</div>
        <p className="body-paragraph">
          Three prior episodes of thirty days or more have fully ended. N=3
          is not a base rate <span className="em">—</span> it is three
          histories laid side by side. Across those three, measured from the
          day mNAV crossed back above 1.0<span className="em">×</span>,
          MSTR&rsquo;s median forward return was −2% at thirty days, −7% at
          sixty, −13% at ninety. Bitcoin&rsquo;s was −6%, −16%, −12%. By 180
          days the median had &ldquo;inverted&rdquo;{' '}
          <span className="em">—</span> +49% for MSTR, +26% for BTC{' '}
          <span className="em">—</span> but that was two analogs lifting the
          median while the third extended the 2022 bear.
        </p>

        <div></div>
        <p className="signature">
          A discount is data, not a thesis. We are tracking it.
        </p>
      </div>
    </main>
  );
}
