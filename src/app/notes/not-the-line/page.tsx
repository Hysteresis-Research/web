import BHMark from '../../components/BHMark';
import WalkforwardChart from '../../components/charts/WalkforwardChart';

export const metadata = {
  title: 'Not the line, the touch · Notes · Hysteresis Research',
  description:
    'Six rounds of walk-forward on a long-EMA signal. State-based crossovers fail out of sample. A specific event at the line survives.',
};

export default function NotTheLine() {
  return (
    <main>
      <div className="col">
        <div className="marginalia">2026<br/>05-06</div>
        <div className="hero-mark">
          <BHMark width={180} height={108} strokeWidth={2.2} />
        </div>

        <div className="marginalia">notes</div>
        <h1>Not the line, the touch</h1>

        <div></div>
        <p className="lede">
          A long-EMA signal &ldquo;felt useful&rdquo; across timeframes. Six
          rounds of walk-forward; one form survived.
        </p>

        <div></div>
        <figure className="note-figure">
          <WalkforwardChart />
          <figcaption>
            Sharpe by round, in-sample vs walk-forward / holdout. Surviving
            forms highlighted.
          </figcaption>
        </figure>

        <div className="marginalia">§2</div>
        <p className="body-paragraph">
          The signal was the 400-period exponential moving average{' '}
          <span className="em">—</span> a line this desk has looked at for
          years. Round one tested dual-EMA crossovers, four timeframes,
          forty-nine parameter combinations. The in-sample winner reached a
          Sharpe of 1.10. Out of sample, with monthly re-selection, it fell to
          0.16.
        </p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">
          The state of being above or below a line is regime-dependent. A rule
          that wins in one regime is the wrong rule in the next, and a
          walk-forward selector thrashes between them. Three rounds of
          variants <span className="em">—</span> single-line versions, daily
          timeframe, four mechanism splits <span className="em">—</span>{' '}
          produced the same shape.
        </p>

        <div className="marginalia">§4</div>
        <p className="body-paragraph">
          Round four reframed the question.{' '}
          <span className="signal">
            Stop measuring state. Measure events.
          </span>{' '}
          A specific fifteen-minute pattern <span className="em">—</span>{' '}
          price tags the EMA, then closes back through within the same bar{' '}
          <span className="em">—</span> produced a walk-forward Sharpe of
          1.87. The true holdout produced thirteen trades at Sharpe 2.25{' '}
          <span className="em">—</span> too few to validate, kept as a
          provisional observation, not a result. Every filter added on top of
          it hurt.
        </p>

        <div></div>
        <p className="signature">
          The line is not the signal. What happens at the line is.
        </p>
      </div>
    </main>
  );
}
