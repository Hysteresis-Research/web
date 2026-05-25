import Link from 'next/link';
import BHMark from '../../components/BHMark';
import TickerMark from '../../components/TickerMark';
import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 仅通过直链给交易台成员访问；中英文版互为镜像，两版均不索引。
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

export const dynamic = 'force-dynamic';

export default async function DeskZh() {
  await requireViewer('/zh/desk');
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
          按日期归档的盘口读数。数据齐就写水位，数据不齐就写 framework。
        </p>

        <div className="marginalia">§2</div>
        <p className="body-paragraph">
          日级的台面记录<span className="em">——</span>regime、仓位结构、
          dealer map、trade book、失效条件。每一节数字分别带时间戳；
          一项主张超出它的数据所能支撑时，明确降级为 framework only。
          备忘失效很快，发布之后不再回改。先看上方的数据来源区，再读正文。
        </p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">
          中英双版镜像发布（英文版在 <Link href="/desk">/desk</Link>）。
          仅作内部参考<span className="em">——</span>非投资建议。
          每篇备忘自带 NFA 免责声明与审计追踪。
        </p>

        <div className="marginalia">§4</div>
        <ul className="entry-list">
          <li>
            <time dateTime="2026-05-25">2026-05-25</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-05-25">回补印在簇上</Link>
          </li>
          <li>
            <time dateTime="2026-05-24">2026-05-24</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-05-24">钉在簇上</Link>
          </li>
          <li>
            <time dateTime="2026-05-23">2026-05-23</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-05-23">空头重新堆</Link>
          </li>
          <li>
            <time dateTime="2026-05-22">2026-05-22</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-05-22">空头底气流失</Link>
          </li>
          <li>
            <time dateTime="2026-05-21">2026-05-21</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-05-21">聪明钱卖了反弹</Link>
          </li>
          <li>
            <time dateTime="2026-05-20">2026-05-20</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-05-20">宏观下场</Link>
          </li>
          <li>
            <time dateTime="2026-05-19">2026-05-19</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-05-19">锚上盘整</Link>
          </li>
          <li>
            <time dateTime="2026-05-18">2026-05-18</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-05-18">聪明钱转空</Link>
          </li>
          <li>
            <time dateTime="2026-05-17">2026-05-17</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-05-17">第一条失效线</Link>
          </li>
          <li>
            <time dateTime="2026-05-15">2026-05-15</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-05-15">两道墙之间</Link>
          </li>
        </ul>

        <div></div>
        <p className="signature">
          盘口有话说才写，不按日历凑数。
        </p>
      </div>
    </main>
  );
}
