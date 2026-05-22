import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-05-22 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-05-22',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-05-22' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260522() {
  await requireViewer('/zh/desk/2026-05-22');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HR · BTC · 交易台备忘 · 2026-05-22 · v2</span>
          <span>内部 · 仅供讨论 · 已过 codex 敌对式审计</span>
        </header>

        <div className="dn-body">

          <div className="dn-head">
            <div className="dn-mark" aria-hidden="true">
              <svg width="80" height="48" viewBox="0 0 100 60">
                <path
                  d="M 10 54 C 30 54, 38 53, 58 30 C 70 13, 78 7, 90 6 C 70 6, 62 7, 42 30 C 30 47, 22 53, 10 54 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="dn-lockup">
              <div className="dn-name">Hysteresis Research</div>
              <div className="dn-name-cn">迟 滞 研 究</div>
            </div>
            <div className="dn-stamp">
              BTC · spot
              <span className="dn-big">$77,568</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.1%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-05-22 00:07Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-05-22 00:07Z</td>
                  <td className="dn-flag">最新 · 1 分钟</td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-05-22 00:31Z scan</td>
                  <td className="dn-flag">
                    滚动 latest 文件（约每 15 分钟重写）· 较快照锚 +24 分钟 ·
                    含未收盘 K 线
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 00:01Z 快照</td>
                  <td className="dn-flag">最新 · Deribit idx $77,635 对现货 $77,568 · 920 合约</td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 00:01Z
                  </td>
                  <td className="dn-flag">滞后约 6 分钟 · 7d 1h bar · 22 资产</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-05-21 22:15Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 2h · FRED Tier-1 数值新鲜 · 较 05-21 缓和 ·
                    Tier-3 通胀面板抓取失败（仅 driver · 非承重）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-05-22 00:06Z</td>
                  <td className="dn-flag">
                    陈旧约 1 分钟 · 偏移已对现货重算
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED 月度 · IRLTLT01JPM156N</td>
                  <td className="dn-flag">陈旧 · 月度 · 不作实时</td>
                </tr>
                <tr>
                  <td className="dn-s">
                    NTT pivot、max-pain、strike-level IV、BTC/NQ 比率
                  </td>
                  <td className="dn-v-cell">本次未载入</td>
                  <td className="dn-flag">相关主张明确为 framework only</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dn-meta">
            <div>
              <span className="dn-k">funding · 8h 年化</span>
              <span className="dn-v">+3.6%</span>
              <span className="dn-src">live · 00:07Z · 24h 均值 +5.1% · 区间下半</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v">+2.1% → +3.6%</span>
              <span className="dn-src">窗口中段冲到 +7.9% 后回落</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−0.73% (−742 BTC)</span>
              <span className="dn-src">live · 慢泄（05-21 是 −2.27%）</span>
            </div>
            <div>
              <span className="dn-k">Binance mkt long/short</span>
              <span className="dn-v">55.3 / 44.7</span>
              <span className="dn-src">live_db `mkt_long_pct` · 降温 56.8 → 55.3</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">−1.3k（净 SHORT）</span>
              <span className="dn-src">live · long 17.92k − short 19.21k</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 05-21 备忘</span>
              <span className="dn-v">−6.7k → −1.3k</span>
              <span className="dn-src">空仓砍掉 81% · 未翻净多</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">42.0% / 24.1%</span>
              <span className="dn-src">GEX IV 中位数 · 920 合约</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v">−1.3%</span>
              <span className="dn-src">flip $76,534 对现货 · 源文件 +1.4% 对 idx $77,635</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              05-21 那篇写了六条决策线，并把其中一条点名为「改写整份备忘
              的那一行」——聪明钱在持续窗口内重新翻净多。接下来 24 小时
              里，<span className="dn-signal">
                六条一条没触发，那个触发也没走完
              </span>
              。价格整个 session 都在一个 $1.1k 的箱体里（1h 收盘
              $76,944–$78,039），收平，<span className="dn-tag">24h −0.1%</span>。
              但这份备忘并非原封不动，因为 05-21 偏空所倚的两根支柱，
              在这条走平的盘面下面都失血了：<span className="dn-em">
                聪明钱把净空仓砍掉了 81%（−6.7k → −1.3k BTC——它没翻到
                净多，所以那条触发按字面读是未触发，但「死死锁空」已经
                不成立了），宏观在每条活跃 lane 上都缓和（10Y −10bp 到
                4.57%，HY OAS −6bp 到 2.80%、regime 标签从 neutral 翻回
                loose，MOVE −1.8 到 79.7）
              </span>
              。同一窗口里 dealer 缓冲也变薄了（aggregate GEX +87.9M →
              +67.4M，0-γ flip 上移 $841 逼近现货）。没有任何东西是被
              止损打掉的。05-21 那个「有条件偏空」的立场，是在价格什么
              都没做的时候、被它自己的前提软化给瓦解掉的。今天是一篇
              盘整备忘，而且这个盘整现在两侧都没有方向。
            </p>

            <p>
              BTC 现报 <span className="dn-tag">$77,568</span>，正在箱体
              正中。下方：<span className="dn-tag bear">GEX flip $76,534
              (−1.3%)</span> 接一组紧凑的 MA 簇——
              <span className="dn-tag stale">D-EMA50 $76,797 (+1.00%)</span>、
              <span className="dn-tag stale">D-EMA100 $76,873 (+0.90%)</span>、
              <span className="dn-tag stale">D-SMA150 $76,948 (+0.81%)</span>
              ——而过去 24h 的最低 1h 收盘是
              <span className="dn-tag">$76,944</span>，按收盘价测了
              D-SMA150 到个位数、守住了。上方：
              <span className="dn-tag bear">W-EMA20 $78,196 (−0.80%)</span>
              接 <span className="dn-tag bear">D-EMA20 $78,303 (−0.94%)</span>，
              24h perp 高 $78,180 在那组簇之下刚好停住。05-21 的解出带
              （$76,750 ↔ $78,200）两边都被插针、
              <span className="dn-signal">两边都按收盘价守住</span>。
              盘整是真的、是紧的，而今天之后，它里面没有方向。
            </p>

            <h2 className="dn-sec">
              仓位结构 <span className="dn-roman">I · 实时盘面</span>
            </h2>

            <p>
              今天就这一件事。<span className="dn-signal">
                聪明钱（top-trader）把净空仓砍掉了 81%
              </span>
              ——SM net 从 05-21 快照的 −6,698 BTC 走到现在的
              <span className="dn-tag">−1,290 BTC</span>，+5,408 BTC 的
              摆动对着 −6,698 的前净空，即 81% 的空仓被退掉。构成：
              short book 从 <span className="dn-tag">23.44k → 19.21k
              （−4.2k）</span>，long book 从 <span className="dn-tag">
              16.74k → 17.92k（+1.2k）</span>——一次真实的回补，主要
              在空头一侧。<span className="dn-em">
                两点对读法重要。第一，SM 没翻到净多；它停在 −1.3k，
                仍是空、只是很浅。05-21「改写整份备忘的那一行」要的是
                净多 cross 持续 &gt; 4h——那没发生，所以按字面，触发是
                未触发。第二，这次回补是一个离散事件、不是漂移：SM net
                在 05-21 05:06Z→06:06Z 的那一个小时里从 −6.3k 塌到
                −1.3k，之后的约 18 小时在 −0.8k 到 −1.9k 之间来回——
                没有再朝 −6.7k 走宽、也没有跨过零，快照时落在 −1.3k。
                它补完了、然后停了——它现在没有在继续补。
              </span>{' '}
              诚实的综合：05-21 的 thesis 倚的是 SM 在价格底下<em>死死
              锁空</em>。−1.3k 的净空不是那个。仓位这根支柱没翻——
              它失血了。
            </p>

            <p>
              杠杆侧安静、略偏多。funding 实时
              <span className="dn-tag">+3.6% 年化</span>（多头付），
              比 24h 前的 <span className="dn-tag">+2.1%</span> 高，
              但远低于窗口中段冲到的 <span className="dn-tag">+7.9%</span>
              ——24h 均值 +5.1%，实时现在落在 +1.6/+7.9% 区间的下半。
              多头在付一笔小的、在衰减的 carry，不是抬价加仓。OI 24h
              <span className="dn-tag bear">−0.73%（−742 BTC）</span>
              ——慢泄，而且比 05-21 的 <span className="dn-tag">−2.27% /
              −2,352 BTC</span> 缓和得多。散户（Binance mkt）降温到
              <span className="dn-tag">55.3% 多</span>，从 56.8 退下来
              ——仍偏多、稍微少一点。perp 维持
              <span className="dn-tag bear">−$70 贴水</span>对现货；
              aggressor skew <span className="dn-tag bear">−17</span>
              （轻微净卖压）。
            </p>

            <p>
              窗口 flow 是一个带现货 bid 的平衡盘整。4h：价格
              <span className="dn-tag">−0.18%</span>、OI
              <span className="dn-tag">−34 BTC</span>、spot CVD
              <span className="dn-tag bull">Δ +615</span>、futures CVD
              <span className="dn-tag">Δ +89</span>、大单
              <span className="dn-tag bull">72 笔 +67 BTC</span>。1h：
              价格 <span className="dn-tag">−0.13%</span>、OI
              <span className="dn-tag">−75 BTC</span>、spot CVD
              <span className="dn-tag bull">Δ +437</span>、futures CVD
              <span className="dn-tag">Δ +101</span>、大单
              <span className="dn-tag">17 笔 −3 BTC</span>。整个 24h，
              spot CVD <span className="dn-tag bull">Δ +2,885</span>
              对 futures CVD <span className="dn-tag bear">Δ −839</span>、
              OI <span className="dn-tag bear">−742 BTC</span>、价格走平。
              <span className="dn-em">
                一个持续的现货 bid 吸收了温和的 futures 派发和一笔慢的
                OI 泄，所有这些加起来净价格变动为零。这是盘整的签名、
                不是哪一侧赢了的签名——而且这就是 05-21 备忘标过的那个
                spot-bid 性质，只是现在演在一个走平的价格上、而不是
                上涨的价格上。
              </span>
            </p>

            <h2 className="dn-sec">
              结构 <span className="dn-roman">II · MTF 图 · 标陈旧</span>
            </h2>

            <p>
              多周期图是<span className="dn-signal">中性、盘整</span>的，
              这是走平盘面的结构回声。盘面上每个 RSI 都落在 40s 低位到
              50s 低位——没有洗、没有超买、没有什么被拉伸。云带图真的混：
              15m / 1h / 1d / 1M 在云上，30m / 4h / 8h / 1w 在云下，
              12h / 3d 在云内。没有活跃 ⚡TD9。对 05-21 值得标记的位移：
              <span className="dn-em">
                1d 的 TD setup 从 Sell 1 进到 Sell 2——05-21 标过的
                日线顶侧逆势计数在推进，但很慢、离 9 还远；1h 仍带一个
                水上金叉（4 根前、DIF 在水上——强金叉），是唯一建设性
                的那一格；30m 刚印出一个新鲜的水上死叉，是对应的看空
                flicker。
              </span>{' '}
              12h 仍在云内（76.8k–79.9k）。直白读：结构没在偏向。
              它在等，跟价格一样。这是 00:31Z 的 MTF 扫描——该文件是
              滚动 latest 文件，较快照锚晚 24 分钟。
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">77,479</td><td className="num">45.9</td><td className="bear">死叉（水上）11b</td><td className="bull">云上 ↓77.4k</td><td>Buy 4</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">77,479</td><td className="num">48.1</td><td className="bear">死叉（水上）1b</td><td className="bear">云下 ↑77.5k</td><td>Buy 5</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>1h</td><td className="num">77,465</td><td className="num">49.6</td><td className="bull">金叉（水上）4b</td><td className="bull">云上 ↓77.2k</td><td>Buy 2</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>4h</td><td className="num">77,465</td><td className="num">48.6</td><td className="bull">金叉（水下）17b</td><td className="bear">云下 ↑78.9k</td><td>Sell 1</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>8h</td><td className="num">77,479</td><td className="num">44.6</td><td className="bull">金叉（水下）4b</td><td className="bear">云下 ↑78.8k</td><td>Buy 1</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">77,479</td><td className="num">43.2</td><td className="neut">—</td><td className="neut">云内 76.8–79.9k</td><td>Sell 5</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">77,465</td><td className="num">47.4</td><td className="bear">死叉（水上）10b</td><td className="bull">云上 ↓74.6k</td><td className="hot">Sell 2</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>3d</td><td className="num">77,479</td><td className="num">52.2</td><td className="neut">—</td><td className="neut">云内 73.5–93.0k</td><td>Buy 3</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">77,479</td><td className="num">46.3</td><td className="bull">金叉（水下）5b</td><td className="bear">云下 ↑100.3k</td><td>Buy 1</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">77,479</td><td className="num">49.2</td><td className="neut">—</td><td className="bull">云上 ↓46.9k</td><td>Buy 7</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 00:31Z 扫描（滚动 latest
                    文件；该扫描已存档于 audits/2026-05-22-desk-note.md）。
                    无活跃 ⚡TD9。对 05-21 的位移：1d TD Sell 1 → Sell 2
                    （顶侧计数推进、离 9 还远）；1h 仍带 4 根前的水上金叉
                    （唯一建设性的一格）；30m 在 1 根前印出新鲜的水上死叉。
                    RSI 落在 40s 低位到 50s 低位——盘整，没有被拉伸的
                    东西。收盘均为未收盘 K 线；未收盘前每个值按 provisional。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵把盘整讲得很精确。现货
              <span className="dn-signal">
                钉在它 05-21 收回的那组簇上
              </span>
              ，而那组簇基本没动：站上
              <span className="dn-tag bull">D-EMA50 $76,797 (+1.00%)</span>、
              <span className="dn-tag bull">D-EMA100 $76,873 (+0.90%)</span>、
              <span className="dn-tag bull">D-SMA150 $76,948 (+0.81%)</span>
              ——同样三条线、偏移对 05-21 一致到小数后一位。再下方：
              <span className="dn-tag bull">D-SMA50 $76,395 (+1.54%)</span>，
              再到 <span className="dn-tag bull">D-SMA100 $72,520 (+6.96%)</span>
              周期之锚。头顶：
              <span className="dn-tag bear">W-EMA20 $78,196 (−0.80%)</span> /
              <span className="dn-tag bear">W-EMA150 $78,297 (−0.93%)</span> /
              <span className="dn-tag bear">D-EMA20 $78,303 (−0.94%)</span>
              叠得很紧，再到
              <span className="dn-tag bear">D-SMA20 $79,352 (−2.25%)</span>
              和 <span className="dn-tag bear">
                D-SMA200/EMA200 $80.8–81.6k (−3.99 至 −4.97%)
              </span>
              的天花板。周线：站上
              <span className="dn-tag bull">W-SMA20 $75,043 (+3.36%)</span>
              和 <span className="dn-tag bull">W-EMA200 $73,707 (+5.24%)</span>，
              低于 <span className="dn-tag bear">W-EMA50 $85,255 (−9.02%)</span>、
              <span className="dn-tag bear">W-EMA100 $83,425 (−7.02%)</span>、
              <span className="dn-tag bear">W-SMA50 $94,017 (−17.50%)</span>
              和 <span className="dn-tag bear">W-SMA100 $88,226 (−12.08%)</span>。
              <span className="dn-em">
                W-SMA150 与 W-SMA200 未计算——parquet 历史只有 125 根
                周线 bar，不足 150/200 窗口；W-EMA150 $78,297 (−0.93%)
                与 W-EMA200 $73,707 (+5.24%) 因 EMA 从可用历史 seed
                而显示。所有 MA 锚定 parquet 最末 bar 2026-05-22 00:06Z
                （close $77,532）；偏移按现货 $77,568 重算。显示的 MA
                水位为 $ 取整；偏移按精确序列值计算。
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · GEX + IV</span>
            </h2>

            <p>
              dealer gamma <span className="dn-signal">
                仍是净正——仍是压波 regime——但缓冲变薄了
              </span>
              。aggregate GEX <span className="dn-tag bull">+67.4M/1%</span>，
              比 05-21 的 +87.9M 低，但仍远高于 05-18 +15.9M 的脆弱
              低点——dealer 这一侧仍想让盘面区间内回归。真正要紧的
              变化是 flip：0-gamma flip <span className="dn-signal">
                上移 $841 到 $76,534</span>（前 $75,693），所以那
              $900 出头的「没怎么动」全部转成了<em>丢掉的缓冲</em>
              ——实时现货 $77,568 现在
              <span className="dn-tag">距 flip −1.3%</span>
              （GEX 源文件自己的「dist to flip」对其 Deribit-index
              参考 $77,635 读 +1.4%；现货 ≈ index，那 0.1pt 差是分母
              ——源文件除以 flip、tile 除以现货——两者都说 flip 在价格
              下方约 1.3–1.4%、明确在下方）。这比 05-21 的 −2.4% 缓冲
              更薄。下方的负 pocket <span className="dn-em">变重、不是
              变轻</span>：<span className="dn-tag bear">$75k −26.0M</span>
              （前 −20.1M），现货正下方新出一道
              <span className="dn-tag bear">$77k −8.08M</span> 台阶，
              再下 <span className="dn-tag bear">$74k −7.96M</span>。
              正天花板还在：<span className="dn-tag bull">$80k +47.7M</span>
              （承重墙，前 +46.2M）、
              <span className="dn-tag bull">$82k +19.85M</span>、
              <span className="dn-tag bull">$78k +15.15M</span> 紧贴头顶。
              <span className="dn-em">
                按到期看，近月大多是正——22MAY 0DTE +3.27M、23MAY
                +8.50M、29MAY +35.81M——只有 25MAY 3DTE −18.67M 一个
                负 pocket。近月压波，带一个 3 天之外的缺口。
              </span>
            </p>

            <p>
              直白读：dealer 图<span className="dn-signal">
                支持盘整，但比 05-21 弱
              </span>
              。正的 aggregate gamma、正的近月 strip 仍偏向箱体内
              均值回归，这跟一个走平的日子一致。但 flip 上移进 MA 簇，
              意味着一次向下破位到 dealer 翻空 gamma 的那个点的距离
              更短了，而 flip 下方的 −26.0M @75k pocket 比 24 小时前
              是更大的加速器。缓冲没消失；它变薄了。920 个合约的 IV
              中位数 <span className="dn-tag">42.0%</span> 对 30D
              close-to-close RV <span className="dn-tag">24.1%</span>
              ——链层面 richness 约 +18pt，基本等于 05-21 的 +17.5pt。
              一如既往，那是 N 个合约的链中位数、
              <span className="dn-em">不是</span>可交易的 spread；
              到期/strike 级别的 vega、skew、term structure 未载入，
              vol 读法保持 framework only。
            </p>

            <h2 className="dn-sec">
              宏观 <span className="dn-roman">IV · 缓和一档 · 跨资产</span>
            </h2>

            <p>
              <span className="dn-signal">宏观在每条活跃 lane 上都缓和。</span>
              05-21 那篇把宏观写成一个承重的偏空小节——「比 05-20
              更差」、利率推入 EXTREME RISK-OFF、credit 出第一道裂痕。
              今天的 day-over-day 增量全部指向另一边：US 10Y nominal
              <span className="dn-tag">4.57%（−10bp）</span>、10Y TIPS real
              <span className="dn-tag">2.13%（−5bp）</span>、5Y5Y BE
              <span className="dn-tag">2.21%（−8bp）</span>、HY OAS
              <span className="dn-tag bull">2.80%（−6bp）</span>、regime
              标签从 <span className="dn-em">neutral → loose</span>，
              MOVE 债波 <span className="dn-tag">79.7</span>——dashboard
              自己的 1d Δ 是 −1.81，水位较 05-21 备忘的 85.3 低 5.6——
              退出了偏高区。<span className="dn-em">
                慢的 regime z-score 仍是 extreme——10Y 带 252 天的
                regime z +2.25 和 EXTREME RISK-OFF 标签，JGB +2.55
                ——因为 252 天窗口不会因一天 −10bp 就动。但 30 天的
                episodic z 和那些增量、也就是真正变了的东西，全部缓和：
                10Y episodic +1.65（05-21 是 +2.75），TIPS +2.23，
                HY −0.66。背景仍是 risk-off regime；这一天在它里面
                走的那一步是缓和。
              </span>{' '}
              05-21 备忘升级的那个 credit 裂痕观察——HY OAS 朝 3.0%
              收盘走——回撤了：HY 回到 loose 标签，现在距门约 20bp，
              不是 05-21 的约 14bp。
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>宏观指标</th>
                  <th>水位</th>
                  <th>Δ</th>
                  <th>regime z</th>
                  <th>episodic z</th>
                  <th>读</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>US 10Y nominal</td><td className="num">4.57%</td><td className="num bull">−10.0bp</td><td className="num bear">+2.25</td><td className="num bear">+1.65</td><td className="bear">risk-off · 缓和</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.13%</td><td className="num bull">−5.0bp</td><td className="num bear">+1.86</td><td className="num bear">+2.23</td><td className="bear">紧 · 缓和</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.21%</td><td className="num">−8.0bp</td><td className="num">−0.32</td><td className="num">−0.39</td><td className="neut">无标签</td></tr>
                <tr><td>HY OAS</td><td className="num">2.80%</td><td className="num bull">−6.0bp</td><td className="num bull">−0.85</td><td className="num bull">−0.66</td><td className="bull">loose · risk-on</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.523</td><td className="num">−0.01</td><td className="num bull">−0.48</td><td className="num bull">−1.35</td><td className="neut">neutral</td></tr>
                <tr><td>MOVE 债波</td><td className="num">79.7</td><td className="num bull">−1.81</td><td className="num">+0.21</td><td className="num">+1.30</td><td className="neut">波动缓和</td></tr>
                <tr><td>DXY</td><td className="num">99.19</td><td className="num">+0.08</td><td className="num bear">+0.78</td><td className="num bear">+1.71</td><td className="bear">紧</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.907T</td><td className="num bull">+0.030T</td><td className="num bull">+0.77</td><td className="num bull">+2.16</td><td className="bull">loose · 激增</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">2.06%</td><td className="num">−10.0bp</td><td className="num bull">−0.66</td><td className="num bear">+1.65</td><td className="bear">紧</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">+17.0bp</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">月度 · 不作依据</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗口，summary 00:01Z——
              <span className="dn-em">是一个 7 天滚动读数、不是「今天」</span>
              ）。平均 off-diagonal <span className="dn-tag">|r| 0.413</span>
              （从 05-21 的 0.365 上来——相关性又在收紧，仍属 NORMAL
              带）。BTC 的列出系数：NQ <span className="dn-tag">+0.65</span>、
              NVDA <span className="dn-tag">+0.63</span>、TSLA
              <span className="dn-tag">+0.63</span>、SP500
              <span className="dn-tag">+0.60</span>。7d 相对表现：BTC
              <span className="dn-tag bear">−4.83%</span>、NQ
              <span className="dn-tag bear">−0.45%</span>、SP500
              <span className="dn-tag bear">−0.53%</span>、NVDA
              <span className="dn-tag bear">−7.97%</span>、TSLA
              <span className="dn-tag bear">−5.42%</span>；金属又更弱
              ——GOLD <span className="dn-tag bear">−2.12%</span>、SILVER
              <span className="dn-tag bear">−7.23%</span>、PLAT
              <span className="dn-tag bear">−4.21%</span>、URNM
              <span className="dn-tag bear">−7.39%</span>。
              <span className="dn-em">
                在这个 7d 窗口里，广义股指几乎没动（NQ −0.45%、SP500
                −0.53%），而 BTC 和那些高 beta 单名在跌——BTC −4.83%
                比股指差，但与跌得更深的高 beta 一组同档（NVDA −7.97%、
                TSLA −5.42%、URNM −7.39%、SILVER −7.23%）。05-21 备忘
                的窗口读数是 BTC −2.53% 对 NQ −1.63%；窗口往前滚 24h
                把这个差距拉宽到 −4.83% 对 −0.45%，但那是窗口构成效应
                ——起始 bar 滚出去了——不是今天的一个动作，而在今天
                走平的盘面上 BTC 没带头也没殿后。
              </span>{' '}
              JGB 月度 2.52% 带 EXTREME RISK-OFF 月度标签——不作依据。
              USD/JPY 159.00。
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · 只写证据撑得住的规模</span>
            </h2>

            <p>
              过去 24h 没有方向性交易执行。05-21 的 book 带两个有条件
              触发（一个 D-EMA50 重失守空、一个推迟的 reclaim 多）和一个
              维持的 macro tail；没有任何有条件触发印出——见下方与 §VI
              的核对。本篇记录的唯一一笔 book 动作是把 macro tail
              减仓（0.25R → 0.15R），因为宏观缓和；方向性 book 是空的，
              今天的工作是把这些 conditional 对着一个两根偏空支柱都
              失血的盘面重新打分。
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">stand-aside · 主仓</span>
              <div className="dn-trade-name">
                在盘整里空仓——而现在盘整里没有方向
              </div>
              <div className="dn-thesis">
                05-21 的主仓是「区间内空仓、等结构确认仓位」。它对了
                ——价格守住箱体一整个 session。今天的不同是：已经没有
                一个仓位方向等着结构去确认了——SM 砍掉 81% 的空、
                宏观缓和、dealer 缓冲变薄。仓位、宏观、结构全都读到
                接近中性。箱体真正两侧化。break 就是 entry——而现在
                break 本身就是方向信号，不是对一个既有偏向的确认。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">立场</span><span className="dn-lvl-v">方向性空仓 · 区间内不加风险</span></div>
                <div><span className="dn-lvl-k">解出带</span><span className="dn-lvl-v">$76,534 (0γ flip) ↔ $78,303 (D-EMA20)</span></div>
                <div><span className="dn-lvl-k">向下解</span><span className="dn-lvl-v bear">1h 收盘 &lt; $76,500（破 flip + MA 簇）</span></div>
                <div><span className="dn-lvl-k">向上解</span><span className="dn-lvl-v bull">1h 收盘 &gt; $78,300（站上 D-EMA20）</span></div>
              </div>
              <div className="dn-gating">
                <b>为何区间内不做：</b>dealer gamma 仍压波（+67.4M）、
                funding 是一笔小的衰减 carry、OI 是慢泄——没有一样
                值得在一个 $1.8k 的箱体里预先下注。下面两笔有条件
                交易互斥，且都等一根箱体外的 1h 收盘。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">short · 有条件 · 已降级</span>
              <div className="dn-trade-name">
                flip 破位空——dealer 图在后面、仓位不再在了
              </div>
              <div className="dn-thesis">
                跌破 0γ flip $76,534，dealer 翻空 gamma，$75k −26.0M
                pocket——比 05-21 的 −20.1M 更重——是加速器。这跟
                05-21 重武装空是同样的 dealer-map 逻辑。变的是仓位
                那条腿：05-21 那版是「仓位读对了、结构跟上」，底下有
                SM 死死锁空。SM 已经不死死锁空了——它砍掉了 81%。
                破位空保留 gamma 图在后面，但丢掉仓位顺风，所以比
                05-21 的规模更小、gating 更紧。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">触发</span><span className="dn-lvl-v bear">1h 收盘 &lt; $76,500 + SM net 仍 &lt; 0</span></div>
                <div><span className="dn-lvl-k">止损</span><span className="dn-lvl-v bull">1h 收盘 &gt; $77,600（回到箱体里）</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">$75,700 / $75,000（−26.0M pocket）</span></div>
                <div><span className="dn-lvl-k">规模</span><span className="dn-lvl-v">触发 0.3R；$75,000 下 +0.2R；≤ 0.5R</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R：</b>触发 $76,500、止损 $77,600 = 约 $1,100 风险；
                $75,700 = 约 $800、$75,000 = 约 $1,500 ≈ 费前 0.7–1.4:1。
                <b>Gating：</b>触发时 SM 必须仍净空——若届时 SM 已翻
                净多，仓位 piece 没了、交易作废。规模上限从 05-21 的
                0.9R 砍到 0.5R：dealer 图联署，仓位不再联署。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · 有条件 · 近武装</span>
              <div className="dn-trade-name">
                reclaim 多——05-21 的两条 filter 现在都差一点通过
              </div>
              <div className="dn-thesis">
                05-21 的 reclaim 多因三条 filter 倒两条而推迟：SM net
                &lt; 0，以及 10Y &gt; 4.55%。两条都没真的通过——所以
                这笔多仍未武装——但两条都走进了一线之内。SM 砍掉了
                81% 的空（−1.3k；没跨过零）。10Y 缓和到 4.57%，在
                4.55% 线上方 2bp。这笔交易从「推迟」升级为
                <span className="dn-signal">近武装</span>：它只在 SM 在
                持续窗口翻净多<em>且</em> 10Y 收盘跌破 4.55% 时武装。
                不要只看价格预先下注——两条 filter 都必须印出。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">武装触发</span><span className="dn-lvl-v bull">SM net &gt; 0 持续 &gt; 4h 且 10Y 收盘 &lt; 4.55%</span></div>
                <div><span className="dn-lvl-k">入场（若武装）</span><span className="dn-lvl-v">$77,300–78,000</span></div>
                <div><span className="dn-lvl-k">止损</span><span className="dn-lvl-v bear">1h 收盘 &lt; $76,500（flip 失守）</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">$78,300 (D-EMA20) / $79,350 (D-SMA20)</span></div>
                <div><span className="dn-lvl-k">规模（若武装）</span><span className="dn-lvl-v">0.2R · 与 05-20 reclaim 多同</span></div>
              </div>
              <div className="dn-gating">
                <b>为何是近武装、不是武装：</b>「砍掉 81%」不是「净多」。
                −1.3k 的净空对一笔多来说仍偏错边，且两条 filter 之一
                （利率）是 2bp 的差。两者都可观察、都很近——所以叫
                近武装——但两条都翻之前这笔交易不存在。光有价格不是
                入场。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">macro tail · 对冲 · 已减仓</span>
              <div className="dn-trade-name">
                downside put-spread——宏观缓和，减为残余对冲
              </div>
              <div className="dn-thesis">
                05-21 的 tail 倚的是利率 fresh 更差、HY 朝 credit 裂痕
                走了第一档。今天两条都反向：10Y −10bp、HY OAS −6bp、
                标签回 loose、MOVE 缓和。急性升级暂停了——HY OAS 2.80%
                回到 loose 标签、距 3.0% 门约 20bp。慢的 regime
                z-score 仍是 extreme（10Y +2.25、JGB +2.55），所以
                残余对冲对背景还保留 rationale——但 0.25R 的规模配不上
                一个已缓和的盘面。这篇就动手：tail 从 0.25R 减到 0.15R。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">结构</span><span className="dn-lvl-v">long $74k / short $70k put</span></div>
                <div><span className="dn-lvl-k">到期</span><span className="dn-lvl-v">29-MAY-26（7d）— 正 GEX 到期（+35.81M）</span></div>
                <div><span className="dn-lvl-k">本篇动作</span><span className="dn-lvl-v bull">减仓 0.25R → 0.15R（宏观缓和 · HY 回 loose）</span></div>
                <div><span className="dn-lvl-k">重新加仓触发</span><span className="dn-lvl-v bear">HY OAS &gt; 3.0% 收盘 → 朝主仓加；10Y &gt; 4.75% 收盘 → +0.1R</span></div>
              </div>
              <div className="dn-gating">
                <b>说明：</b>strike/premium/Greeks 未载入——结构示意，
                规模待 Deribit 29-MAY chain 拉取。宏观缓和是一天的
                增量、不是 regime 转向——对冲是减仓、不是平仓；一天的
                缓和不会改写一个 +2.25σ 的 regime z。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 这个箱体，往哪边破</span>
            </h2>

            <p>
              05-21 的六条决策线，过去 24h 一条没触发。对着盘面核对：
              没有 1h 收盘跌破 $76,750（最低是 $76,944）；没有 1h 收盘
              站上 $78,200（最高是 $78,039）；SM 没翻净多（停在 −1.3k）；
              HY OAS 没收盘破 3.0%（缓和到 2.80%）；10Y 没收盘破 4.75%
              （缓和到 4.57%）；1d 没收盘跌破 $74.6k 云带。方向性 book
              是空的——唯一持有的是 macro tail，本篇已减为残余 0.15R
              对冲——条件围绕一个更紧的箱体重置：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>盘整向下破</td><td className="bear">1h 收盘 &lt; $76,500（破 0γ flip）+ SM net &lt; 0</td><td>flip 破位空 0.3R，$75,000 下 +0.2R</td></tr>
                <tr><td>盘整向上破</td><td className="bull">1h 收盘 &gt; $78,300（站上 D-EMA20）</td><td>砍偏空 setup；reclaim 多仅在 SM + 利率 filter 也通过时才合格</td></tr>
                <tr><td>仓位武装多</td><td className="bull">SM net BTC &gt; 0 持续 &gt; 4h 且 10Y 收盘 &lt; 4.55%</td><td>武装 reclaim 多 0.2R</td></tr>
                <tr><td>credit 重新升级（重新加 tail）</td><td className="bear">HY OAS &gt; 3.0% 收盘</td><td>把已减的 0.15R tail 朝主仓加；今天回撤了（约 20bp 之外）</td></tr>
                <tr><td>利率继续走</td><td className="bear">10Y &gt; 4.75% 收盘</td><td>macro tail 在已减的 0.15R 上 +0.1R</td></tr>
                <tr><td>周期中段破（升级）</td><td className="bear">1d 收盘跌破云 $74.6k</td><td>持空 runner、砍所有多、尾部最大</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>这</em>份备忘的一行是：
              <span className="dn-signal">
                一根箱体外的 1h 收盘，$76,500–$78,300 之外
              </span>
              。这跟 05-21 是种类上的不同。05-21 的 book 偏空、
              等结构去确认仓位；今天仓位、宏观、结构全都坐在接近
              中性的位置，所以没有偏向给 break 去确认——break 就是
              信号。向下破 flip 把走势交给 dealer 图和 −26.0M @75k
              pocket；向上破 D-EMA20 清掉头顶那一摞、并在 SM 与利率
              也翻了的情况下把近武装的多放进场。在其中一条印出之前，
              这是一本空的方向性 book、看着一个箱体，里面没有方向——
              已减的 0.15R macro tail 除外。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计追踪 · v2（已过 codex 敌对式审计 · 修复 1 CRITICAL + 3 HIGH）
            </span>
            <b>Codex CLI 0.132.0（gpt-5.5、xhigh reasoning）敌对式审计
            跑通——empty-stdin 管道稳定，无 TTY 阻塞。</b>1 处 CRITICAL、
            3 处 HIGH，中英双版均已修：{' '}
            (a) <b>F-01 · CRITICAL</b> &mdash; 交易状态自相矛盾：备忘说
            book 是空的，§V 却持有 0.25R 的 macro tail，而该 tail 自己
            的 trim 触发（HY OAS &lt; 2.85%）已被备忘自报的 HY OAS 2.80%
            满足。修复：把减仓记为本篇已执行（0.25R → 0.15R，由今日宏观
            缓和驱动），把方向性 book 标为「空」、tail 标为单独披露的
            残余对冲。{' '}
            (b) <b>F-02 · HIGH</b> &mdash; MTF 出处：mtf_div_latest.html
            是滚动「latest」文件，生成器约每 15 分钟重写一次，快照时
            载入的 00:01Z 扫描已被覆盖。§II 表/正文与数据来源区已重新
            对齐到实际载入的 00:31Z 扫描，并把该扫描原样存档于
            audits/2026-05-22-desk-note.md 以供核验。{' '}
            (c) <b>F-03 · HIGH</b> &mdash; MOVE 增量：正文写 −5.6（对
            05-21 备忘 85.3 的水位变化），宏观表写 dashboard 1d Δ −1.81；
            两者现在分别明确标注。{' '}
            (d) <b>F-04 · HIGH</b> &mdash; SM 回补后路径：「−1.2k 到 −1.6k
            带」错（核验后回补后区间为 −0.8k 到 −1.9k），且中文版漂移到
            另一个事件窗口；两版均改写为核验路径（−6.3k → −1.3k 于
            05:06Z→06:06Z 内，之后 −0.8k 到 −1.9k，收于 −1.3k，未跨净多）。
            审计放行：funding × 1095（+3.6% 年化，无 ×100）、SM 砍仓比例
            （80.75%）、GEX flip 双参考（−1.3% 对现货 / +1.4% 源文件，
            无符号翻转）、所有 MA 矩阵偏移与 W-SMA150/200 不可计算、
            30D RV 24.05%、claims-vs-loaded-data 纪律（NTT / max-pain /
            strike-IV / BTC-NQ 仅 framework；IV 链中位数；跨资产 7d 窗口
            框定）、实时盘面 flow、中英定量平价、requireViewer gating
            （两条路径首句）、index <code>&lt;li&gt;</code> 新增。{' '}
            <b>Build 说明（INFO）：</b>本服务器跑 Node 18.19.1；Next
            16.2.6 在 Node &lt; 20.9.0 硬退出，完整 <code>next build</code>{' '}
            因环境受阻。<code>npx --no-install tsc --noEmit</code> 退出 0
            （TypeScript 干净），作为 build 替代证据。原始审计记录：
            audits/2026-05-22-desk-note.md。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是 Hysteresis Research 内部交易台讨论材料，
            <em>非投资建议、非要约、非任何形式招揽</em>
            ，未对任何收件方个人情况定制。所有数字反映同一原子快照
            （2026-05-22 00:07Z），各节出处见上方数据来源区；宏观今日
            已刷新、缓和了一档，但 regime z-score 仍偏高。水位、规模与
            条件用于说明本台流程，不构成持续建议。过往的相关性、gamma
            与仓位模式不约束未来盘口。衍生品有全损风险；杠杆条件下
            损失可能超过保证金。<em>请自行做研究。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                什么都没触发——而这份备忘还是变了。价格站着没动，
                做空的理由在流失。
              </div>
              <div className="dn-sign-name">Desk · BTC derivatives</div>
            </div>
            <div className="dn-sign-stamp" aria-hidden="true">
              <svg width="36" height="22" viewBox="0 0 100 60">
                <path
                  d="M 10 54 C 30 54, 38 53, 58 30 C 70 13, 78 7, 90 6 C 70 6, 62 7, 42 30 C 30 47, 22 53, 10 54 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

        </div>

        <footer className="dn-foot">
          <span>Hysteresis Research · 迟滞研究 · HK</span>
          <span>
            v2 · 2026-05-22 00:07Z · 数据源：live_db.json · mtf_div_latest.html ·
            btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
