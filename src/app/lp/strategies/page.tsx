import type { Metadata } from 'next';
import BHMark from '@/app/components/BHMark';
import { pageMetadata } from '@/lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'LP · Strategies · Hysteresis Research',
    description: 'Private LP strategies.',
    path: '/lp/strategies',
    lang: 'en',
  }),
  alternates: { canonical: '/lp/strategies' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function LpStrategies() {
  await requireViewer('/lp/strategies');
  return (
    <main>
      <div className="col">
        <div className="marginalia">§1</div>
        <div className="hero-mark">
          <BHMark width={180} height={108} strokeWidth={2.2} />
        </div>

        <div className="marginalia">strategies</div>
        <h1>Strategies</h1>

        <div></div>
        <p className="lede">in preparation.</p>

        <div className="marginalia">§2</div>
        <p className="body-paragraph">
          Strategy briefs are not published here yet. This page will carry
          them when they are ready.
        </p>
      </div>
    </main>
  );
}
