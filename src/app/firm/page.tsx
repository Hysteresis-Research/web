import BHMark from '../components/BHMark';

export const metadata = {
  title: 'Firm · Hysteresis Research',
  description:
    'On scale — a discipline whose limit is set by its method, not its size.',
};

export default function Firm() {
  return (
    <main>
      <div className="col">
        <div className="marginalia">§1</div>
        <div className="hero-mark">
          <BHMark width={180} height={108} strokeWidth={2.2} />
        </div>

        <div className="marginalia">firm</div>
        <h1>Firm</h1>

        <div></div>
        <p className="lede">on scale.</p>

        <div className="marginalia">§2</div>
        <p className="body-paragraph">
          A research-driven trading firm is, in our model, a discipline whose
          limit is set by its method, not its size. In markets rich with
          narrative, what carries a strategy is the{' '}
          <span className="signal">rigor of its method</span>, not the
          headcount that runs it.
        </p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">
          Our ambition is institutional-scale cross-asset allocation across
          crypto and global macro, run as a single-PM practice.
        </p>

        <div className="marginalia">§4</div>
        <p className="body-paragraph">
          Within three years <span className="em">—</span> a unified regime
          model across the cross-asset majors, and the operational
          infrastructure to keep it honest. Within five{' '}
          <span className="em">—</span> multiple sleeves running in parallel,
          and the first public thesis paper. Within ten{' '}
          <span className="em">—</span> a method validated, and one that can
          be inherited.
        </p>

        <div></div>
        <p className="signature">Research compounds; capital follows.</p>
      </div>
    </main>
  );
}
