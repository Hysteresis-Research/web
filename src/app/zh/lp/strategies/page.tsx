import type { Metadata } from 'next';
import BHMark from '@/app/components/BHMark';
import { pageMetadata } from '@/lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'LP · 策略 · Hysteresis Research · 迟滞研究',
    description: 'LP 策略（不公开）。',
    path: '/zh/lp/strategies',
    lang: 'zh-Hans',
  }),
  alternates: { canonical: '/zh/lp/strategies' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function LpStrategiesZh() {
  await requireViewer('/zh/lp/strategies');
  return (
    <main lang="zh-Hans">
      <div className="col">
        <div className="marginalia">§1</div>
        <div className="hero-mark">
          <BHMark width={180} height={108} strokeWidth={2.2} />
        </div>

        <div className="marginalia">strategies</div>
        <h1>策略</h1>

        <div></div>
        <p className="lede">筹备中。</p>

        <div className="marginalia">§2</div>
        <p className="body-paragraph">
          此处暂未发布策略简报。准备就绪后，本页将载入。
        </p>
      </div>
    </main>
  );
}
