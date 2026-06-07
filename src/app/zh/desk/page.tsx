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
          每日的台面备忘<span className="em">——</span>regime、仓位结构、
          dealer map、trade book、失效条件。每一节的数字各自带时间戳；
          一项主张超出了数据能撑住的范围，就明确降级为 framework only。
          备忘失效很快，发布之后不再回改。先看上方的数据来源区，再读正文。
        </p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">
          中英双版同步发布（英文版在 <Link href="/desk">/desk</Link>）。
          仅作内部参考、非投资建议。每篇备忘自带 NFA 免责声明与审计追踪。
        </p>

        <div className="marginalia">§4</div>
        <ul className="entry-list">
          <li>
            <time dateTime="2026-06-07">2026-06-07</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-06-07">6JUN 前段放大器干净结清且 7JUN 替换块挂正向（+3.87M、下腿首根正向前段块）· 插针没延伸（24h 低在 06-06 投降低上方）· dealer 本子修了下腿单篇最大一根 +$14.8M γ 动作 · 4h 回补形在 00:05Z 锚上印干净 · SM 本子在引擎反弹上反回空堆 · 200W 周期地板缝在现货上收窄到 −1.73% 但日收仍下方 · mean-revert 长 scout R/R 在重 framing $63,538 flip 上改善到 2.15:1（仍 NON-ACTIONABLE 待 leg-3 印）</Link>
          </li>
          <li>
            <time dateTime="2026-06-06">2026-06-06</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-06-06">5JUN 结算解但 6JUN 在同一 24h 内替进 · 现货在印上丢 200W 周期地板 · 多头在 −5.41% 插针里抄底 · 四根并发 TD9 BUY 簇加谱系首根负 24h funding 均值 · mean-revert 长 scout R/R reframed 到 $63,778 flip 过 1.5:1 门到 2.00:1（仍 NON-ACTIONABLE 待 leg-3 印）</Link>
          </li>
          <li>
            <time dateTime="2026-06-05">2026-06-05</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-06-05">下腿停止延伸但底没起 · dealer 本子松 $13.4M 而现货守住低位 · 周期延续五印 CLOSED-VINDICATED · mean-revert 长 scout 在 $68k inflection 上 R/R 失 1.5:1 门 NON-ACTIONABLE</Link>
          </li>
          <li>
            <time dateTime="2026-06-04">2026-06-04</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-06-04">阶梯再下一层（第三层）· 多 TF TD9 BUY 五框架同步印 · funding 全脱顶（累积 ~22.15h）· mean-revert 长 scout 3 腿过 2</Link>
          </li>
          <li>
            <time dateTime="2026-06-03">2026-06-03</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-06-03">阶梯再下一层 · $70k 墙穿干净到新 $65k 磁石 · funding 累积脱顶门 CLEARED · mean-revert scout 框架监控</Link>
          </li>
          <li>
            <time dateTime="2026-06-02">2026-06-02</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-06-02">周期锚收盘破位 · 本子翻回净空 γ · scout 递延</Link>
          </li>
          <li>
            <time dateTime="2026-06-01">2026-06-01</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-06-01">锚在收盘上守住 · 杠杆单侧空头重建 · scout 离开死的 W-SMA20 重锚</Link>
          </li>
          <li>
            <time dateTime="2026-05-31">2026-05-31</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-05-31">本子翻面到净多 γ · 锚在收盘上守住 · scout 递延</Link>
          </li>
          <li>
            <time dateTime="2026-05-29">2026-05-29</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-05-29">阶梯跑满 · 放大器今天解</Link>
          </li>
          <li>
            <time dateTime="2026-05-28">2026-05-28</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-05-28">门打齐 · 目标贴位差 $0 触到</Link>
          </li>
          <li>
            <time dateTime="2026-05-27">2026-05-27</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-05-27">加多在簇顶被砍 · flip 裂开</Link>
          </li>
          <li>
            <time dateTime="2026-05-26">2026-05-26</time>
            <span className="entry-sep" aria-hidden="true">·</span>
            <TickerMark ticker="BTC" />
            <span className="entry-sep" aria-hidden="true">·</span>
            <Link href="/zh/desk/2026-05-26">加多印在簇上</Link>
          </li>
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
