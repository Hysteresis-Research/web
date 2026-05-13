import BHMark from '../components/BHMark';

export const metadata = {
  title: 'Notes · Hysteresis Research',
  description: 'Shorter pieces from the desk — in preparation.',
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
        <p className="lede">in preparation.</p>

        <div className="marginalia">§2</div>
        <p className="body-paragraph">
          A space for shorter pieces <span className="em">—</span> observations
          from the desk, theses that were retired and why, the shape of a
          regime transition once the prose has settled.
        </p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">
          Where a thesis paper takes a year, a note can take a week. The
          shorter form holds what has been tested but not yet load-bearing:
          empirical surprises, retired hypotheses, the shape of a market on a
          given Tuesday.
        </p>

        <div></div>
        <p className="signature">
          The first notes are being written. They will be published here when
          they can <span className="signal">stand on their own</span>.
        </p>
      </div>
    </main>
  );
}
