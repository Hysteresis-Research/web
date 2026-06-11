import WalkforwardChart from '../../components/charts/WalkforwardChart';
import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import Reveal from '../../components/Reveal';
import SectionHead from '../../components/SectionHead';

export const metadata: Metadata = pageMetadata({
  title: 'Not the line, the touch · Notes · Hysteresis Research',
  description: 'Six rounds of walk-forward on a long-EMA signal. State-based crossovers fail out of sample. A specific event at the line survives.',
  path: '/notes/not-the-line',
  lang: 'en',
  type: 'article',
});

export default function NotTheLine() {
  return (
    <main>
      <article className="article wrap" id="not-the-line">
        <SectionHead
          numeral="V"
          title="Not the line, the touch"
          folio="Notes · BTC · 2026-05-06"
        />

        <Reveal as="p" className="standfirst">
          <span className="cap">A long-EMA signal</span> &ldquo;felt
          useful&rdquo; across timeframes. Six rounds of walk-forward; one form
          survived.
        </Reveal>

        <div className="essay">
          <Reveal as="figure" className="fig-plate">
            <figcaption>
              <span className="fig-label">
                <b>Fig.</b> — Sharpe by round
              </span>
              <p className="fig-cap">
                Sharpe by round, in-sample vs walk-forward / holdout. Surviving
                forms highlighted.
              </p>
            </figcaption>
            <WalkforwardChart />
          </Reveal>

          <Reveal as="p" className="lede">
            <span className="leadin">The signal</span> was the 400-period
            exponential moving average — a line this desk has looked at for
            years. Round one tested dual-EMA crossovers, four timeframes,
            forty-nine parameter combinations. The in-sample winner reached a
            Sharpe of 1.10. Out of sample, with monthly re-selection, it fell to
            0.16.
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            Stop measuring state. Measure events. A rule that wins in one regime
            is the wrong rule in the next.
          </Reveal>

          <Reveal as="p">
            The state of being above or below a line is regime-dependent. A rule
            that wins in one regime is the wrong rule in the next, and a
            walk-forward selector thrashes between them. Three rounds of variants
            — single-line versions, daily timeframe, four mechanism splits —
            produced the same shape.
          </Reveal>

          <Reveal as="p">
            Round four reframed the question. Stop measuring state. Measure
            events. A specific fifteen-minute pattern — price tags the EMA, then
            closes back through within the same bar — produced a walk-forward
            Sharpe of 1.87. The true holdout produced thirteen trades at Sharpe
            2.25
            <sup className="fn">
              <a href="#fn1" id="ref1">
                1
              </a>
            </sup>{' '}
            — too few to validate, kept as a provisional observation, not a
            result. Every filter added on top of it hurt.
          </Reveal>

          <Reveal as="p" className="close">
            The line is not the signal. What happens at the line is.
          </Reveal>

          <Reveal as="ol" className="footnotes">
            <li id="fn1">
              <span className="fnum">1</span>Thirteen trades is too few to
              validate. We keep the holdout result as a provisional observation,
              not a result; every filter added on top of it hurt.{' '}
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
