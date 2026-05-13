import Link from 'next/link';
import BHMark from '../components/BHMark';
import TickerMark from '../components/TickerMark';

export const metadata = {
  title: 'Notes · Hysteresis Research',
  description:
    'Shorter empirical pieces from the desk — observations, retired theses, the shape of a regime transition once the prose has settled.',
};

export default function Notes() {
  return (
    <main>
      <div className="col">
        <div className="marginalia">§1</div>
        <div className="hero-mark">
          <BHMark width={180} height={108} strokeWidth={2.2} />
        </div>

        <div className="marginalia">notes</div>
        <h1>Notes</h1>

        <div></div>
        <p className="lede">on the long form between trades.</p>

        <div className="marginalia">§2</div>
        <p className="body-paragraph">
          A space for shorter pieces <span className="em">—</span> observations
          from the desk, theses that were retired and why, the shape of a
          regime transition once the prose has settled.
        </p>

        <div className="marginalia">§3</div>
        <ul className="entry-list">
          <li>
            <time dateTime="2026-05-13">2026-05-13</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="MSTR" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/notes/mstr-mnav">Discount, unwinding</Link>
          </li>
          <li>
            <time dateTime="2026-05-13">2026-05-13</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/notes/three-cycles">Shallower, so far</Link>
          </li>
          <li>
            <time dateTime="2026-05-06">2026-05-06</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/notes/not-the-line">Not the line, the touch</Link>
          </li>
          <li>
            <time dateTime="2026-05-05">2026-05-05</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/notes/decoupled-one-side">Decoupled, on one side</Link>
          </li>
          <li>
            <time dateTime="2026-05-02">2026-05-02</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/notes/prior-conditioned">The prior, conditioned</Link>
          </li>
        </ul>

        <div></div>
        <p className="signature">
          More in preparation. Each note is published when it can{' '}
          <span className="signal">stand on its own</span>.
        </p>
      </div>
    </main>
  );
}
