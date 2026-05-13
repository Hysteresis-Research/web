import BHMark from '../../components/BHMark';

export const metadata = {
  title: 'Premium, compressing · Notes · Hysteresis Research',
  description:
    "BTC's variance risk premium has compressed every year since 2022. 2026 year-to-date: −2.1 vol points. The structural premium has crossed zero.",
};

export default function PremiumCompressing() {
  return (
    <main>
      <div className="col">
        <div className="marginalia">2026<br/>04-26</div>
        <div className="hero-mark">
          <BHMark width={180} height={108} strokeWidth={2.2} />
        </div>

        <div className="marginalia">notes</div>
        <h1>Premium, compressing</h1>

        <div></div>
        <p className="lede">
          Four years of compression. The variance risk premium turned negative
          in 2026.
        </p>

        <div></div>
        <figure className="note-figure">
          <img
            src="/notes/premium-compressing.png"
            alt="Bar chart of the annual mean spread between DVOL and 30-day realized volatility from 2022 to 2026 year-to-date: +9.7, +7.9, +6.6, +5.1, then −2.1 vol points"
            width={1600}
            height={840}
          />
          <figcaption>
            Annual mean of DVOL − RV30, in vol points. 2026 through 2026-04-26.
          </figcaption>
        </figure>

        <div className="marginalia">§2</div>
        <p className="body-paragraph">
          For four years, DVOL <span className="em">—</span> Deribit&rsquo;s
          BTC implied-volatility index <span className="em">—</span> has
          averaged 6.6 vol-points above thirty-day realized volatility.
          Selling that gap, mechanically, every month: fifty trades, sixty-six
          percent win rate, Sharpe of 1.34. The textbook short-vol carry.
        </p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">
          The gap has narrowed every year. +9.7 in 2022. +7.9, +6.6, +5.1.
          Year-to-date 2026, it is{' '}
          <span className="signal">−2.1 vol points</span>{' '}
          <span className="em">—</span> the structural premium has crossed
          zero. ETF launches absorbed retail tail-hedging demand. DVOL futures
          gave the street another way to short the index. Dealer competition
          closed what was left.
        </p>

        <div className="marginalia">§4</div>
        <p className="body-paragraph">
          One conditioning rule survives. Skip months where the prior seven-day
          maximum daily move was above 5%. Thirty-six trades instead of fifty;
          Sharpe rises to 1.80; maximum drawdown halves. The premium has not
          vanished <span className="em">—</span> it has retreated into the
          calm regimes. At the current state, with spread30 at the 41st
          percentile and recent realized above implied, the rule says: wait.
        </p>

        <div></div>
        <p className="signature">
          A premium that everyone harvests is a premium that compresses.
        </p>
      </div>
    </main>
  );
}
