import Link from 'next/link';
import TickerMark from '../../components/TickerMark';
import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';
import Reveal from '../../components/Reveal';
import SectionHead from '../../components/SectionHead';

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
      <section className="article wrap" id="desk">
        <SectionHead
          numeral="D"
          title="交易台"
          folio="按日期归档的盘口读数"
        />

        <Reveal as="p" className="standfirst">
          <span className="cap">按日期归档的盘口读数。</span>数据齐就写水位，数据不齐就写 framework。
        </Reveal>

        <div className="essay">
          <Reveal as="p" className="lede">
            <span className="leadin">每日的台面备忘</span>
            <span className="em">——</span>regime、仓位结构、
            dealer map、trade book、失效条件。每一节的数字各自带时间戳；
            一项主张超出了数据能撑住的范围，就明确降级为 framework only。
            备忘失效很快，发布之后不再回改。先看上方的数据来源区，再读正文。
          </Reveal>

          <Reveal as="p">
            中英双版同步发布（英文版在 <Link href="/desk">/desk</Link>）。
            仅作内部参考、非投资建议。每篇备忘自带 NFA 免责声明与审计追踪。
          </Reveal>
        </div>

        <Reveal as="ol" className="notindex" style={{ marginTop: '2.4rem' }}>
          <li>
            <Link href="/zh/desk/2026-06-07">
              <time className="when" dateTime="2026-06-07">2026-06-07</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">周期底上反弹</span>
            </Link>
          </li>
          <li>
            <Link href="/zh/desk/2026-06-06">
              <time className="when" dateTime="2026-06-06">2026-06-06</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">底破在印上</span>
            </Link>
          </li>
          <li>
            <Link href="/zh/desk/2026-06-05">
              <time className="when" dateTime="2026-06-05">2026-06-05</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">停了但底没起</span>
            </Link>
          </li>
          <li>
            <Link href="/zh/desk/2026-06-04">
              <time className="when" dateTime="2026-06-04">2026-06-04</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">再下一层，TD9 五框架</span>
            </Link>
          </li>
          <li>
            <Link href="/zh/desk/2026-06-03">
              <time className="when" dateTime="2026-06-03">2026-06-03</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">墙穿过去，新磁下移</span>
            </Link>
          </li>
          <li>
            <Link href="/zh/desk/2026-06-02">
              <time className="when" dateTime="2026-06-02">2026-06-02</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">周期锚收盘破位 · 本子翻回净空 γ · scout 递延</span>
            </Link>
          </li>
          <li>
            <Link href="/zh/desk/2026-06-01">
              <time className="when" dateTime="2026-06-01">2026-06-01</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">锚在收盘上守住 · 杠杆单侧空头重建 · scout 离开死的 W-SMA20 重锚</span>
            </Link>
          </li>
          <li>
            <Link href="/zh/desk/2026-05-31">
              <time className="when" dateTime="2026-05-31">2026-05-31</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">本子翻面到净多 γ · 锚在收盘上守住 · scout 递延</span>
            </Link>
          </li>
          <li>
            <Link href="/zh/desk/2026-05-29">
              <time className="when" dateTime="2026-05-29">2026-05-29</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">阶梯跑满 · 放大器今天解</span>
            </Link>
          </li>
          <li>
            <Link href="/zh/desk/2026-05-28">
              <time className="when" dateTime="2026-05-28">2026-05-28</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">门打齐 · 目标贴位差 $0 触到</span>
            </Link>
          </li>
          <li>
            <Link href="/zh/desk/2026-05-27">
              <time className="when" dateTime="2026-05-27">2026-05-27</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">加多在簇顶被砍 · flip 裂开</span>
            </Link>
          </li>
          <li>
            <Link href="/zh/desk/2026-05-26">
              <time className="when" dateTime="2026-05-26">2026-05-26</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">加多印在簇上</span>
            </Link>
          </li>
          <li>
            <Link href="/zh/desk/2026-05-25">
              <time className="when" dateTime="2026-05-25">2026-05-25</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">回补印在簇上</span>
            </Link>
          </li>
          <li>
            <Link href="/zh/desk/2026-05-24">
              <time className="when" dateTime="2026-05-24">2026-05-24</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">钉在簇上</span>
            </Link>
          </li>
          <li>
            <Link href="/zh/desk/2026-05-23">
              <time className="when" dateTime="2026-05-23">2026-05-23</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">空头重新堆</span>
            </Link>
          </li>
          <li>
            <Link href="/zh/desk/2026-05-22">
              <time className="when" dateTime="2026-05-22">2026-05-22</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">空头底气流失</span>
            </Link>
          </li>
          <li>
            <Link href="/zh/desk/2026-05-21">
              <time className="when" dateTime="2026-05-21">2026-05-21</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">聪明钱卖了反弹</span>
            </Link>
          </li>
          <li>
            <Link href="/zh/desk/2026-05-20">
              <time className="when" dateTime="2026-05-20">2026-05-20</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">宏观下场</span>
            </Link>
          </li>
          <li>
            <Link href="/zh/desk/2026-05-19">
              <time className="when" dateTime="2026-05-19">2026-05-19</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">锚上盘整</span>
            </Link>
          </li>
          <li>
            <Link href="/zh/desk/2026-05-18">
              <time className="when" dateTime="2026-05-18">2026-05-18</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">聪明钱转空</span>
            </Link>
          </li>
          <li>
            <Link href="/zh/desk/2026-05-17">
              <time className="when" dateTime="2026-05-17">2026-05-17</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">第一条失效线</span>
            </Link>
          </li>
          <li>
            <Link href="/zh/desk/2026-05-15">
              <time className="when" dateTime="2026-05-15">2026-05-15</time>
              <span className="tag"><TickerMark ticker="BTC" /></span>
              <span className="head">两道墙之间</span>
            </Link>
          </li>
        </Reveal>

        <Reveal as="p" className="close" style={{ marginTop: '1.7rem' }}>
          盘口有话说才写，不按日历凑数。
        </Reveal>
      </section>
    </main>
  );
}
