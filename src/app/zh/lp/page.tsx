import Link from 'next/link';
import type { Metadata } from 'next';
import BHMark from '@/app/components/BHMark';
import { pageMetadata } from '@/lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'LP · Hysteresis Research · 迟滞研究',
    description: 'LP 引言（不公开）。',
    path: '/zh/lp',
    lang: 'zh-Hans',
  }),
  alternates: { canonical: '/zh/lp' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function LpZh() {
  await requireViewer('/zh/lp');
  return (
    <main lang="zh-Hans">
      <div className="col">
        <div className="marginalia">§1</div>
        <div className="hero-mark">
          <BHMark width={180} height={108} strokeWidth={2.2} />
        </div>

        <div className="marginalia">lp</div>
        <h1>引言</h1>

        <div></div>
        <p className="lede">
          Hysteresis Research · 迟滞研究 是一家研究驱动的量化交易公司。
        </p>

        <div className="marginalia">§2</div>
        <p className="body-paragraph">
          我们在全球宏观与加密衍生品上运作，交易跨资产的宏观范式转换
          <span className="em">——</span>在基本面与价格之间，差距{' '}
          <span className="signal">long enough to be measured</span> 的地方。
        </p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">
          承载力被刻意设为有限。我们只在边际能够存活的窗口内接受资本，会拒绝
          那些会稀释边际的资本。这是我们对自己设下的约束，不是一个等着被增长
          摆脱的阶段。
        </p>

        <div className="marginalia">§4</div>
        <p className="body-paragraph">
          你现在读到的内容在一道刻意设置的门后。这里没有任何东西按日历的节奏走
          <span className="em">——</span>研究不按，关系也不按。
          <Link href="/zh/lp/firm">公司概况</Link>、我们会与不会交易的边界、
          以及关系成立所依据的<Link href="/zh/lp/terms">条款</Link>，都列在与此
          并列的页面里。请在有时间细读、而非略读时再看。
        </p>

        <div className="marginalia">§5</div>
        <p className="body-paragraph">
          策略简报尚未发布<span className="em">——</span>
          <Link href="/zh/lp/strategies">该栏目</Link>准备就绪后将载入。
        </p>

        <div></div>
        <p className="signature">研究自循环，资本跟随。</p>
      </div>
    </main>
  );
}
