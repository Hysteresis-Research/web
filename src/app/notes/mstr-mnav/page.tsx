import MnavDurationChart from '../../components/charts/MnavDurationChart';
import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import Reveal from '../../components/Reveal';
import SectionHead from '../../components/SectionHead';

export const metadata: Metadata = pageMetadata({
  title: 'Discount, unwinding · Notes · Hysteresis Research',
  description: "On the second-longest mNAV discount in MSTR's history. Day 145, trough at 0.73× on 2026-04-07, recovering to 0.94× as of 2026-05-04.",
  path: '/notes/mstr-mnav',
  lang: 'en',
  type: 'article',
});

export default function MstrMnav() {
  return (
    <main>
      <article className="article wrap" id="mstr-mnav">
        <SectionHead
          numeral="V"
          title="Discount, unwinding"
          folio="Notes · MSTR · 2026-05-13"
        />

        <Reveal as="p" className="standfirst">
          <span className="cap">0.73&times; on April 7.</span> 0.94&times;
          today — the second-longest mNAV discount MSTR has run, still open.
        </Reveal>

        <div className="essay">
          <Reveal as="figure" className="fig-plate">
            <figcaption>
              <span className="fig-label">
                <b>Fig.</b> — Discount episodes
              </span>
              <p className="fig-cap">
                mNAV discount episodes of 30 days or more, MSTR history.
              </p>
            </figcaption>
            <MnavDurationChart />
          </Reveal>

          <Reveal as="p" className="lede">
            <span className="leadin">On 2025-12-10</span>, MSTR&rsquo;s market
            capitalization fell below the value of the bitcoin on its balance
            sheet. The discount widened through the spring — to a trough of
            0.73&times; mNAV on 2026-04-07 — before beginning to compress. As of
            2026-05-04, the company trades at 0.94&times;: a market
            capitalization of $61.3B against a bitcoin NAV of $65.1B.
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            Day 145 and counting. Only the 180-day episode of 2022 — the worst
            stretch of the last bear cycle — has run longer.
          </Reveal>

          <Reveal as="p">
            The episode is in its 145th day and counting. Only one prior
            discount episode in MSTR&rsquo;s history has run longer — 180 days,
            from January through July of 2022, during the worst stretch of the
            last bear cycle. By duration, this is already the second-longest
            mNAV discount on record.
          </Reveal>

          <Reveal as="p">
            Three prior episodes of thirty days or more have fully ended. N=3 is
            not a base rate — it is three histories laid side by side. Across
            those three, measured from the day mNAV crossed back above
            1.0&times;, MSTR&rsquo;s median forward return was −2% at thirty
            days, −7% at sixty, −13% at ninety. Bitcoin&rsquo;s was −6%, −16%,
            −12%. By 180 days the median had &ldquo;inverted&rdquo; — +49% for
            MSTR, +26% for BTC — but that was two analogs lifting the median
            while the third extended the 2022 bear.
          </Reveal>

          <Reveal as="p" className="close">
            A discount is data, not a thesis. We are tracking it.
          </Reveal>
        </div>
      </article>
    </main>
  );
}
