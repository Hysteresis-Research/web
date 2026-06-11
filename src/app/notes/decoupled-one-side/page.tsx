import CorrelationChart from '../../components/charts/CorrelationChart';
import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import Reveal from '../../components/Reveal';
import SectionHead from '../../components/SectionHead';

export const metadata: Metadata = pageMetadata({
  title: 'Decoupled, on one side · Notes · Hysteresis Research',
  description: 'Four-week BTC-NQ correlation: +0.71 to +0.34. Down-side beta intact. The decoupling is one-sided.',
  path: '/notes/decoupled-one-side',
  lang: 'en',
  type: 'article',
});

export default function DecoupledOneSide() {
  return (
    <main>
      <article className="article wrap" id="decoupled-one-side">
        <SectionHead
          numeral="V"
          title="Decoupled, on one side"
          folio="Notes · BTC · 2026-05-05"
        />

        <Reveal as="p" className="standfirst">
          <span className="cap">Through March</span>, BTC traded as a high-beta
          NQ proxy. Four weeks later, half of that correlation is gone — only on
          the upside.
        </Reveal>

        <div className="essay">
          <Reveal as="figure" className="fig-plate">
            <figcaption>
              <span className="fig-label">
                <b>Fig.</b> — Correlation collapse
              </span>
              <p className="fig-cap">
                Rolling 7-day correlation, 2026-03-25 &rarr; 2026-05-05.
              </p>
            </figcaption>
            <CorrelationChart />
          </Reveal>

          <Reveal as="p" className="lede">
            <span className="leadin">By the count</span> — on 2026-04-08, the
            rolling seven-day BTC-NQ correlation was +0.71. On 2026-05-05, it was
            +0.34. The BTC-NVDA pair collapsed further
            <sup className="fn">
              <a href="#fn1" id="ref1">
                1
              </a>
            </sup>{' '}
            — from +0.68 to +0.21. By the conventional reading, BTC has
            decoupled.
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            On the hours when NQ fell, BTC&rsquo;s beta to it was still +0.92.
            The decoupling is in the other half.
          </Reveal>

          <Reveal as="p">
            The reading is incomplete. On the hours when NQ fell, BTC&rsquo;s
            beta to it was still +0.92. The decoupling is in the other half — on
            hours when NQ was flat or up, BTC contributed +9.28% of independent
            gain over thirty days. More than half of its total return.
          </Reveal>

          <Reveal as="p">
            The mechanism is unilateral. Funding has been negative on 66% of all
            eight-hour periods since 2026-04-01, with a trough of −13.4%
            annualized. That is one-directional fuel — squeeze potential, no
            symmetric counterpart in equities. As long as it persists, BTC has
            an axis they do not.
          </Reveal>

          <Reveal as="p" className="close">
            Decoupling is not symmetric until it is.
          </Reveal>

          <Reveal as="ol" className="footnotes">
            <li id="fn1">
              <span className="fnum">1</span>The BTC-NVDA pair ran from +0.68 on
              2026-04-08 to +0.21 on 2026-05-05 — a deeper collapse than the
              BTC-NQ pair over the same window.{' '}
              <a href="#ref1" aria-label="Back to text">
                ↩
              </a>
            </li>
          </Reveal>
        </div>
      </article>
    </main>
  );
}
