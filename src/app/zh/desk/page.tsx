import Link from 'next/link';
import BHMark from '../../components/BHMark';
import TickerMark from '../../components/TickerMark';
import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 仅通过直链给交易台成员访问；中文版与英文版互为镜像，两版均不索引。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台 · Hysteresis Research · 迟滞研究',
    description: '内部交易台存档。',
    path: '/zh/desk',
    lang: 'zh-Hans',
  }),
  alternates: { canonical: '/zh/desk' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export default function DeskZh() {
  return (
    <main lang="zh-Hans">
      <div className="col">
        <div className="marginalia">§1</div>
        <div className="hero-mark">
          <BHMark width={180} height={108} strokeWidth={2.2} />
        </div>

        <div className="marginalia">desk</div>
        <h1>交易台</h1>

        <div></div>
        <p className="lede">
          带日期的盘口读数。数据到位就讲水位，数据不齐就讲框架。
        </p>

        <div className="marginalia">§2</div>
        <p className="body-paragraph">
          一份日级的工作底稿<span className="em">——</span>状态、仓位结构、做市商图、交易清单、止损条件。
          每一节数字分别带时间戳；当某项主张超出其数据所能支撑时，明确降级为「仅为框架」。
          备忘退色得很快，发布之后不再回改。先看清单条带，再看正文。
        </p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">
          仅作内部参考<span className="em">——</span>非投资建议。每篇备忘自带 NFA 免责声明与审计追踪。
        </p>

        <div className="marginalia">§4</div>
        <ul className="entry-list">
          <li>
            <time dateTime="2026-05-15">2026-05-15</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-05-15">两面墙之间</Link>
          </li>
        </ul>

        <div></div>
        <p className="signature">
          盘口给出备忘时它才出现，无日历。
        </p>
      </div>
    </main>
  );
}
