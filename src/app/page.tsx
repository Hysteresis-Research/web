import BHMark from './components/BHMark';
import type { Metadata } from 'next';
import { pageMetadata } from '../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Hysteresis Research',
  description: 'A research-driven quantitative trading firm operating where price lags fundamentals.',
  path: '/',
  lang: 'en',
});

export default function Home() {
  return (
    <main>
      <div className="col">
        <div className="marginalia">§1</div>
        <div className="hero-mark">
          <BHMark width={180} height={108} strokeWidth={2.2} />
        </div>

        <div className="marginalia">est<br />2026</div>
        <h1>Hysteresis Research</h1>

        <div></div>
        <p className="lede">long enough to be measured.</p>

        <div className="marginalia">§2</div>
        <p className="tagline">
          A research-driven quantitative trading firm. We operate at cross-asset
          regime transitions <span className="em">—</span> where the gap between
          fundamentals and price persists{' '}
          <span className="signal">long enough to be measured</span>.
        </p>

        <div className="marginalia">§3</div>
        <p className="signature">Research compounds; capital follows.</p>
      </div>
    </main>
  );
}
