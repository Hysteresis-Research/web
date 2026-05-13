import BHMark from '../components/BHMark';

export const metadata = {
  title: 'Approach · Hysteresis Research',
  description:
    'On method — measuring the gap between fundamentals and price, sizing on durability not conviction.',
};

export default function Approach() {
  return (
    <main>
      <div className="col">
        <div className="marginalia">§1</div>
        <div className="hero-mark">
          <BHMark width={180} height={108} strokeWidth={2.2} />
        </div>

        <div className="marginalia">approach</div>
        <h1>Approach</h1>

        <div></div>
        <p className="lede">on method.</p>

        <div className="marginalia">§2</div>
        <p className="body-paragraph">
          A research-driven trading firm is, in our practice, a particular kind
          of skepticism. We accept that markets pre-process information faster
          than any human consortium can, and we observe that they pre-process it{' '}
          <span className="signal">unevenly</span>
          {' '}<span className="em">—</span> that there are durations during
          which price has not yet caught up with what is structurally true.
        </p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">
          Hysteresis is the technical name not for delay, but for
          path-dependence <span className="em">—</span> a system that, after
          a shock, does not return to its prior state; the history is absorbed
          into the structure itself. In magnetism, the field carries the
          memory of how it was magnetised; in economics, expectations and
          capital allocation carry the memory of a regime change long after
          the regime has changed. The framing is borrowed; the discipline is
          empirical. We measure the gap between fundamentals and price rather
          than forecast the moment of its closure. We size on durability, not
          conviction. A thesis describes the world; a position is a trade{' '}
          <span className="em">—</span> and a correct call without a written
          exit rule is luck, not skill.
        </p>

        <div className="marginalia">§4</div>
        <p className="body-paragraph">
          This requires accepting that a discipline which consistently
          disappoints the part of the mind wanting to be right will, by
          construction, also occasionally disappoint on the long run-up. We
          treat that disappointment as the price of not being on the wrong
          side of the same regime change later.
        </p>

        <div></div>
        <p className="signature">
          A longer note is in preparation <span className="em">—</span> on what
          we look for at regime transitions, what we track during a position,
          and what retires a thesis. It will be published here when the prose
          has settled.
        </p>
      </div>
    </main>
  );
}
