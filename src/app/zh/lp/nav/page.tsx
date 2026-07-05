import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { requireViewer } from '@/lib/gate';
import { fetchNavFeed } from '@/lib/navData';
import Reveal from '@/app/components/Reveal';
import SectionHead from '@/app/components/SectionHead';
import NavPerformance from '@/app/components/NavPerformance';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'LP · 净值 · Hysteresis Research · 迟滞研究',
    description: 'LP 净值（不公开）。',
    path: '/zh/lp/nav',
    lang: 'zh-Hans',
  }),
  alternates: { canonical: '/zh/lp/nav' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function LpNavZh() {
  await requireViewer('/zh/lp/nav');
  const feed = await fetchNavFeed();
  return (
    <main lang="zh-Hans">
      <section className="article wrap" id="lp-nav">
        <SectionHead numeral="五" title="净值" folio="LP · 不公开" />

        <Reveal as="p" className="standfirst">
          一个数字，每天以同一种方式定价。
        </Reveal>

        <div className="essay">
          <Reveal as="p" className="lede">
            <span className="leadin">下面这条</span>
            单位净值曲线，就是这个池子的全部：申购按它买入，赎回按它离场；
            出入金动不了它<span className="em">——</span>
            资金流只增减份额，唯有业绩才移动价格。它每日 00:00 UTC
            按交易所标记价格定价，与一路独立的估值读数对账，写入一本只增不改的账本
            <span className="em">——</span>连更正本身也是永久的账目。
          </Reveal>

          <Reveal as="p">
            所有度量都带着各自的不确定性一起发布。年轻曲线上的夏普比率大半是噪声，
            所以在日度样本满六十个之前，我们只给置信区间
            <span className="em">——</span>这才是{' '}
            <span className="signal">long enough to be measured</span>{' '}
            的诚实版本。
          </Reveal>

          <Reveal>
            <NavPerformance feed={feed} lang="zh" />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
