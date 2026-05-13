import Link from 'next/link';
import BHMark from '../components/BHMark';

export const metadata = {
  title: 'Approach · Hysteresis Research',
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
        <p className="lede">forthcoming.</p>

        <div className="marginalia">§2</div>
        <p className="tagline">
          A formal note on method is in preparation. It will be published here
          when the prose has settled. <Link href="/">Return.</Link>
        </p>
      </div>
    </main>
  );
}
