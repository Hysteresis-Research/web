import VRPChart from '../../components/charts/VRPChart';
import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import Reveal from '../../components/Reveal';
import SectionHead from '../../components/SectionHead';

export const metadata: Metadata = pageMetadata({
  title: 'Premium, compressing · Notes · Hysteresis Research',
  description: "BTC's variance risk premium has compressed every year since 2022. 2026 year-to-date: −2.1 vol points. The structural premium has crossed zero.",
  path: '/notes/premium-compressing',
  lang: 'en',
  type: 'article',
});

export default function PremiumCompressing() {
  return (
    <main>
      <article className="article wrap" id="premium-compressing">
        <SectionHead
          numeral="V"
          title="Premium, compressing"
          folio="Notes · BTC · 2026-04-26"
        />

        <Reveal as="p" className="standfirst">
          <span className="cap">Four years of compression.</span> The variance
          risk premium turned negative in 2026.
        </Reveal>

        <div className="essay">
          <Reveal as="figure" className="fig-plate">
            <figcaption>
              <span className="fig-label">
                <b>Fig.</b> — Variance risk premium
              </span>
              <p className="fig-cap">
                Annual mean of DVOL − RV30, in vol points. 2026 through
                2026-04-26.
              </p>
            </figcaption>
            <VRPChart />
          </Reveal>

          <Reveal as="p" className="lede">
            <span className="leadin">For four years</span>, DVOL —
            Deribit&rsquo;s BTC implied-volatility index — has averaged 6.6
            vol-points above thirty-day realized volatility. Selling that gap,
            mechanically, every month: fifty trades, sixty-six percent win rate,
            Sharpe of 1.34. The textbook short-vol carry.
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            +9.7 in 2022, then +7.9, +6.6, +5.1. Year-to-date 2026: −2.1 vol
            points. The structural premium has crossed zero.
          </Reveal>

          <Reveal as="p">
            The gap has narrowed every year. +9.7 in 2022. +7.9, +6.6, +5.1.
            Year-to-date 2026, it is −2.1 vol points — the structural premium has
            crossed zero. ETF launches absorbed retail tail-hedging demand. DVOL
            futures gave the street another way to short the index. Dealer
            competition closed what was left.
          </Reveal>

          <Reveal as="p">
            One conditioning rule survives. Skip months where the prior
            seven-day maximum daily move was above 5%. Thirty-six trades instead
            of fifty; Sharpe rises to 1.80; maximum drawdown halves. The premium
            has not vanished — it has retreated into the calm regimes. At the
            current state, with spread30 at the 41st percentile and recent
            realized above implied, the rule says: wait.
          </Reveal>

          <Reveal as="p" className="close">
            A premium that everyone harvests is a premium that compresses.
          </Reveal>
        </div>
      </article>
    </main>
  );
}
