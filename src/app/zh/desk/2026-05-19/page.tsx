import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-05-19 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-05-19',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-05-19' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260519() {
  await requireViewer('/zh/desk/2026-05-19');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HR · BTC · 交易台备忘 · 2026-05-19 · v2</span>
          <span>内部 · 仅供讨论 · 经敌对式审计 · 延迟快照</span>
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
              <span className="dn-big">$76,823</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.2%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 快照 2026-05-19 09:58Z（晚——例程未自动运行，
              按需手动产出）
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-05-19 09:58Z</td>
                  <td className="dn-flag">最新 · 1 分钟</td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 09:46Z scan</td>
                  <td className="dn-flag">最新 · 含未收盘 K 线</td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 09:01Z
                  </td>
                  <td className="dn-flag">滞后约 57 分钟 · 1h bar · 22 资产</td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 08:00Z 快照</td>
                  <td className="dn-flag">
                    滞后约 2h · Deribit idx $77,334 对现货 $76,823
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 01:50Z 渲染</td>
                  <td className="dn-flag">
                    渲染陈旧约 8h · FRED series 陈旧 4 日 · 不作依据
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-05-19 08:05Z</td>
                  <td className="dn-flag">
                    陈旧约 1.9h · 偏移已对现货重算
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
              <span className="dn-v bear">+5.1%</span>
              <span className="dn-src">live · 09:58Z · 24h 均值 +6.8%</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v">+6.7% → +5.1%</span>
              <span className="dn-src">正 · 多头付费 · 区间 +3.2/+11%</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">+2.17% (+2,224 BTC)</span>
              <span className="dn-src">live · 平价上堆杠杆</span>
            </div>
            <div>
              <span className="dn-k">Binance mkt long/short</span>
              <span className="dn-v bear">58.1 / 41.9</span>
              <span className="dn-src">live_db `mkt_long_pct`</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">+2.9k（净多）</span>
              <span className="dn-src">live · long 20.57k − short 17.71k</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 05-18 备忘</span>
              <span className="dn-v">−2.5k → +2.9k</span>
              <span className="dn-src">净空已平 → 小幅净多</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">43.5% / 27.0%</span>
              <span className="dn-src">GEX IV 中位数 · 828 合约</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v">−1.9%</span>
              <span className="dn-src">flip $75,329 对现货 · 源文件 +2.7% 对 idx</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              05-18 那篇设了一个开关：1h 收盘跌穿 $76,000，flip-break 空转
              方向性。它没印出来——24h 低点是 $76,014。对那个 thesis 更糟的
              是，它最强的一条腿已经松开<span className="dn-em">——</span>
              <span className="dn-signal">
                聪明钱已由净空平回小幅净多
              </span>
              ，dealer 重建 long gamma，flip 也往下挪开了。方向性空没有
              得到确认。剩下的是一个贴着周期之锚收紧的 48 小时盘整
              ——更低 conviction，同样偏空的底色。
            </p>

            <p>
              BTC 现报 <span className="dn-tag">$76,823</span>，全天走平
              （<span className="dn-tag">−0.2% 24h</span>），夹在一段收窄的
              <span className="dn-tag">$76.0k–$77.8k</span> 区间——连续第二
              个交易日钉在
              <span className="dn-tag stale">D-EMA100 $76.8k (−0.02%)</span>{' '}
              /{' '}
              <span className="dn-tag stale">D-EMA50 $76.7k (+0.14%)</span>{' '}
              这道防线上，48 小时里现货一直在 100 日 EMA 的约 $15 之内。
              05-18 的决策支撑
              <span className="dn-tag stale">D-SMA150 $77.2k (−0.44%)</span>
              已由地板翻成头顶的近阻；下方是
              <span className="dn-tag bull">D-SMA50 $75.8k (+1.33%)</span>，
              再下是挪了位的
              <span className="dn-tag bear">GEX-flip $75,329 (−1.9%)</span>，
              进入 <span className="dn-tag bear">$75k −23M GEX</span> pocket。
              问题已不是「防线守不守得住」——它守了两天
              <span className="dn-em">——</span>而是
              <span className="dn-signal">
                盘整往哪个方向解，急性下行催化剂已消失、但结构性的重量仍偏下
              </span>。
            </p>

            <h2 className="dn-sec">
              仓位结构 <span className="dn-roman">I · 实时盘面</span>
            </h2>

            <p>
              05-18 的 thesis 押的是聪明钱净空。那个反过来了：
              <span className="dn-signal">top-trader net 已回到{' '}
              <span className="dn-tag">+2.9k BTC</span></span>
              （long 20.57k − short 17.71k），对比 05-18 备忘里报的 −2.5k
              净空——它们平掉空、重新建了小幅净多。这不是 05-17 那种 +16.1k
              的 conviction；是在防线上下骑着的近乎平。
              <span className="dn-em">
                拿掉「聪明钱净空」，就拿掉了 05-18 最强的空头确认——
                方向性空是被撤下，不只是没触发。
              </span>
              与此同时，散户继续<span className="dn-tag bear">加多到
              58.1%</span>（三个 session 54.8 → 56.4 → 58.1），对着一个
              哪都没去的盘——一个稳步更拥挤的多。
            </p>

            <p>
              偏空的底色在 flow，不在方向。funding 重新明确为正：实时
              <span className="dn-tag bear">+5.1% 年化</span>，24h 均值
              <span className="dn-tag bear">+6.8%</span>（区间 +3.2% 到
              +11.0%）——多头在付 carry，去扛一个没动过的仓位。OI 24h
              <span className="dn-tag bear">+2.17%（+2,224 BTC）</span>
              在平价上堆<span className="dn-em">——杠杆往一个被封住的水位
              累积，正是防线一旦丢就成燃料的 trapped-long</span>。perp 对
              现货 <span className="dn-tag bear">贴水 −$72</span>（spot 强、
              perp 重）。本 session spot CVD 持续为负（4h{' '}
              <span className="dn-tag bear">Δ −792</span>、1h{' '}
              <span className="dn-tag bear">Δ −413</span>、4h 大单{' '}
              <span className="dn-tag bear">−174 / 160 笔</span>），而价格走平
              ——安静的 spot 派发被 bid 吃掉。
              <span className="dn-em">
                拥挤多在付 funding、OI 在堆、spot 在渗、价格钉在锚上：
                这是一个带下行倾斜的压缩，不是底。
              </span>
            </p>

            <h2 className="dn-sec">
              结构 <span className="dn-roman">II · MTF 图 · 标陈旧</span>
            </h2>

            <p>
              洗盘是<span className="dn-signal">缓解，不是反转</span>。05-18
              那些 sub-25 的 RSI 已回到 30 多/40 出头（1h{' '}
              <span className="dn-tag">45.5</span>、4h{' '}
              <span className="dn-tag">37.6</span>、8h{' '}
              <span className="dn-tag">35.5</span>）——超卖压力是靠时间
              泄掉的，不是涨上来的。1h 与 4h 印了水下金叉（早期，DIF 仍
              深度为负）；8h 仍挂 <span className="dn-tag">⚡TD9 BUY</span>，
              15m、12h 离 TD9 各差一根。价格 15m 云内（76.7–76.8k）、
              12h 云内（76.6–79.6k），30m/1h/4h/8h/1w 云下，1d 仍站云上
              （↓74.3k）。<span className="dn-em">
                每个周期说的是同一件事：balance。没有洗盘可 fade 多、
                没有趋势推力可追——一个盘整，1d 云 $74.3k 是「周期中段
                仍完整」的那条线。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">76,750</td><td className="num">41.3</td><td className="bear">死叉（水上）3b</td><td className="neut">云内 76.7–76.8k</td><td>Buy 8→9?</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>30m</td><td className="num">76,750</td><td className="num">45.8</td><td className="bear">死叉（水上）刚印</td><td className="bear">云下 ↑76.8k</td><td>Buy 2</td><td className="bull">BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">76,750</td><td className="num">45.5</td><td className="bull">金叉（水下）14b</td><td className="bear">云下 ↑77.4k</td><td>Buy 1</td><td className="bull">BULL hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">76,750</td><td className="num">37.6</td><td className="bull">金叉（水下）1b</td><td className="bear">云下 ↑80.5k</td><td>Buy 1</td><td className="bull">BULL reg</td></tr>
                <tr><td>8h</td><td className="num">76,750</td><td className="num">35.5</td><td className="neut">—</td><td className="bear">云下 ↑78.8k</td><td className="hot">⚡ TD9 BUY</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">76,750</td><td className="num">36.0</td><td className="bear">死叉（水上）16b</td><td className="neut">云内 76.6–79.6k</td><td>Buy 8→9?</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">76,750</td><td className="num">44.4</td><td className="bear">死叉（水上）7b</td><td className="bull">云上 ↓74.3k</td><td>Buy 7</td><td>BEAR reg</td></tr>
                <tr><td>3d</td><td className="num">76,750</td><td className="num">50.8</td><td className="neut">—</td><td className="neut">云内 73.6–93.0k</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">76,750</td><td className="num">45.6</td><td className="bull">金叉（水下）5b</td><td className="bear">云下 ↑100.3k</td><td>Buy 1</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">76,750</td><td className="num">48.9</td><td className="neut">—</td><td className="bull">云上 ↓46.9k</td><td>Buy 7</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    RSI 从 05-18 洗盘缓解（曾 sub-25，现 35–46）；1h/4h
                    水下金叉 + 8h TD9 BUY = 筑底尝试，provisional。1d 仍
                    云上（↓74.3k）——周期中段完整。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵与 05-18 几乎一模一样——其<span className="dn-signal">
              停滞本身</span>就是信号。现货又在
              <span className="dn-tag stale">D-EMA100 $76.8k (−0.02%)</span>{' '}
              的约 $15 之内，并踩在
              <span className="dn-tag stale">D-EMA50 $76.7k (+0.14%)</span>
              上——整整两个 session 钉在周期 EMA 防线。上方已丢：
              <span className="dn-tag bear">D-SMA20 $79.4k (−3.24%)</span>、
              <span className="dn-tag bear">D-EMA20 $78.6k (−2.26%)</span>；
              <span className="dn-tag stale">D-SMA150 $77.2k (−0.44%)</span>
              现作头顶第一个 reclaim 测试。SMA 周期梯队仍为正但走平：
              <span className="dn-tag bull">D-SMA50 $75.8k (+1.33%)</span>、
              <span className="dn-tag bull">D-SMA100 $72.3k (+6.32%)</span>；
              远阻
              <span className="dn-tag stale">
                D-SMA200/EMA200 $81.3–81.7k (−5.5% 至 −6.0%)
              </span>
              。周线不变：站上
              <span className="dn-tag bull">W-SMA20 $75.0k (+2.40%)</span>，
              低于 W-EMA20 $78.2k / W-EMA50 $85.2k / W-SMA50 $94.0k。
              <span className="dn-em">
                所有 MA 锚定 parquet 最末 bar 2026-05-19 08:05Z
                （收盘 $77,130）；偏移已对现货 $76,823 重算。
                显示的 MA 水位为 $ 取整；偏移按精确序列值计算。
              </span>
              两天零净结构变化本身就是信号：一个在锚上收紧的盘整。
              NTT pivot 未载入——只用云 + MA，不主张独立 NTT 确认。
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · GEX + IV</span>
            </h2>

            <p>
              dealer map 较 05-18 <span className="dn-signal">已降级</span>。
              aggregate GEX 重建到
              <span className="dn-tag">+65.7M/1%</span>——从 05-18 的 +15.9M
              升上来，是 05-15 +204M 衰减以来最高；dealer 回到压波姿态。
              0-gamma flip 下移到 <span className="dn-tag bear">$75,329</span>；
              现货 $76,823 在它<span className="dn-tag">上方约 1.9%</span>
              （GEX 源文件「+2.7% dist to flip」是对其 08:00Z Deribit-index
              $77,334 算的——两者都指现货在 flip 上方约 2%，比 05-18 的
              约 0.9% 缓冲更厚）。现货处的负 gamma 台阶变薄（76k 现
              <span className="dn-tag bear">−6.8M</span>，05-18 是 −10M 量级）；
              重 pocket 仍是 <span className="dn-tag bear">$75k −23.2M</span>
              再 <span className="dn-tag bear">$74k −11.6M</span>，
              压在一个正天花板下（<span className="dn-tag bull">$80k +42M</span>、
              <span className="dn-tag bull">$82k +24.8M</span>、
              <span className="dn-tag bull">$81k +9.5M</span>）。
              <span className="dn-em">
                近月不再是 short gamma——20/21MAY ≈ 平/正，仅 22MAY −7.9M，
                29MAY +22M；dealer 不再像 05-18 那样放大近端波动。
              </span>
            </p>

            <p>
              直白读：flip 上方的自动加速器没了。在 $75.3k 破之前下行不再
              被 dealer 放大；干净 break 现在要靠自己的力，−23M @75k 只在
              flip 下方才咬合。这<span className="dn-signal">缓解急性风险、
              支持盘整读法</span>——区间内 vol 被压，不是被放大。828 个
              合约的 IV 中位数 <span className="dn-tag">43.5%</span>
              （链层面汇总，非可交易单一到期）对 30D close-to-close RV
              <span className="dn-tag">27.0%</span>，随区间压缩
              （28.6 → 27.0）——链层面约 +16pt richness，
              <span className="dn-em">不是</span>用中位数 size 的 spread。
              按 strike/到期的 IV、vega、skew 未载入；vol 读法 framework only。
            </p>

            <h2 className="dn-sec">
              宏观 <span className="dn-roman">IV · 陈旧 · 不作依据</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观渲染约 8h 旧，且 FRED Tier-1 series 陈旧 4 日
                （NFCI 11 日）；今天不承重。
              </span>{' '}
              有一点值得作为<span className="dn-em">watch、不是 lean</span>
              标出：陈旧面板现在印出利率升级——US 10Y{' '}
              <span className="dn-tag stale">4.59%（+12bp，事件 +2.94，
              EXTREME RISK-OFF）</span>、10Y TIPS real{' '}
              <span className="dn-tag stale">2.10%（+10bp，事件 +3.73）</span>、
              MOVE 债波{' '}
              <span className="dn-tag stale">86.1（+6.2，事件 +2.77）</span>。
              如果这个 print 刷新并维持为新，对高 β 的 BTC 是真正的
              risk-off 升级。但它在一个约 8h 旧的渲染上、且陈旧 4 日——
              我们不据此行动；标记为新 credit/利率数据一到就立刻复核的
              那个唯一宏观项。HY OAS{' '}
              <span className="dn-tag stale">2.80%（loose，regime −0.87）</span>
              仍不佐证压力；JGB{' '}
              <span className="dn-tag stale">2.52%（月度 · 不作依据）</span>。
              <span className="dn-em">
                今天的读数只靠仓位 + 结构 + dealer map；宏观是个标记的 watch。
              </span>
              相关性 regime NORMAL 且在硬收紧（7d 1h 平均 |r| 0.331，
              三日 0.275 → 0.281 → 0.331）：BTC 系 NVDA{' '}
              <span className="dn-tag">+0.59</span>、NQ{' '}
              <span className="dn-tag">+0.58</span>、SP500{' '}
              <span className="dn-tag">+0.53</span>。7d 内 BTC 印{' '}
              <span className="dn-tag bear">−4.70%</span> 对 SP500{' '}
              <span className="dn-tag">−0.01%</span>、NQ{' '}
              <span className="dn-tag">−0.70%</span>、NVDA{' '}
              <span className="dn-tag bull">+1.37%</span>、MSFT{' '}
              <span className="dn-tag bull">+3.61%</span>
              <span className="dn-em">
                ——BTC 仍是一个平到上的 TradFi peer set 里唯一的高 β
                下行落后者；这是 idiosyncratic BTC 弱，不是全市场 risk-off。
              </span>
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · 只写证据撑得住的规模</span>
            </h2>

            <div className="dn-trade">
              <span className="dn-side framework">stand-aside · 主仓</span>
              <div className="dn-trade-name">
                盘整里空仓——05-18 空已撤，区间内无 edge
              </div>
              <div className="dn-thesis">
                05-18 flip-break 空从未触发（$76,014 低，无 1h 收盘 &lt;
                $76k），且其核心前提已松（SM 平回净多、dealer 重建 gamma、
                flip 挪开）。在一个 dealer 区间内压波的收紧盘整里没有方向
                edge。主仓立场是空仓，等盘整以收盘解。倾斜仅在下方触发上
                表达，按证据权重仍偏下（idiosyncratic −4.7% 落后、retail
                58% 多、OI 堆 + funding 渗、spot 派发）。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">立场</span><span className="dn-lvl-v">方向性空仓 · 区间内不加风险</span></div>
                <div><span className="dn-lvl-k">盘整带</span><span className="dn-lvl-v">$75.3k (flip) ↔ $77.2k (D-SMA150)</span></div>
                <div><span className="dn-lvl-k">向下解</span><span className="dn-lvl-v bear">1h 收盘 &lt; $75,300</span></div>
                <div><span className="dn-lvl-k">向上解</span><span className="dn-lvl-v bull">1h 收盘 &gt; $77,200 + SM 仍净多</span></div>
              </div>
              <div className="dn-gating">
                <b>为何主仓是「什么都不做」：</b>下面两笔真交易都条件于
                盘整破。在一个 dealer 压波区间内、对着 48h 走平的盘预先
                押，是为掷硬币付 theta。压缩本身是唯一的确定性。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">short · 主触发</span>
              <div className="dn-trade-name">
                盘整破位空——跌穿挪了位的 flip
              </div>
              <div className="dn-thesis">
                收盘跌穿 $75,300，一动同时破 flip 与 D-SMA50 $75.8k 周期
                梯队，咬合 −23M @75k pocket，dealer 在那里翻 short gamma。
                证据权重（拥挤多、OI 堆、spot 派发、idiosyncratic 弱）说
                这是较高概率的解——但必须印；flip 上方的 dealer 缓冲意味
                区间内做空没有 edge。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">触发</span><span className="dn-lvl-v bear">1h 收盘 &lt; $75,300（flip + D-SMA50）</span></div>
                <div><span className="dn-lvl-k">止损</span><span className="dn-lvl-v bull">1h 收盘 &gt; $76,900（回到防线上）</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">$75,000 / $74,000 / $72.3k D-SMA100 watch</span></div>
                <div><span className="dn-lvl-k">规模</span><span className="dn-lvl-v">触发 0.5R；$74k 下 +0.3R；≤ 0.8R</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R：</b>触发 $75,300，止损 $76,900 = 约 $1,600 风险；
                $75,000 = 约 $300，$74,000 = 约 $1,300 ≈ 到首目标 0.2–0.8:1
                ——偏弱；真正回报是周期梯队裂开后的 $72.3k 延伸。规模封顶，
                $74k 下才加。不抢收盘。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · 条件式 · 小</span>
              <div className="dn-trade-name">
                Reclaim 多——仅在 D-SMA150 且 SM 确认时
              </div>
              <div className="dn-thesis">
                这次没有洗盘可 scalp（RSI 缓解到 40s，非 sub-25），所以
                唯一允许的多是确认式 regime-shift reclaim，不是抄底：
                收盘站回 D-SMA150 $77.2k 且 SM net 仍为正，会作废空头
                倾斜并打开通往失守 D-EMA20 / W-EMA20 的缺口。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">触发</span><span className="dn-lvl-v bull">1h 收盘 &gt; $77,200 + SM net &gt; 0</span></div>
                <div><span className="dn-lvl-k">止损</span><span className="dn-lvl-v bear">1h 收盘 &lt; $76,400</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">$78,200 (W-EMA20) / $78,600</span></div>
                <div><span className="dn-lvl-k">规模</span><span className="dn-lvl-v">0.3R · $78,200 减半</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R：</b>触发 $77,200，止损 $76,400 = 约 $800 风险，
                目标 $78,200–78,600 = 约 $1,000–1,400 ≈ 1.3–1.8:1。
                <b>Gating：</b>与盘整破位空互斥；要求触发时 SM net 仍为正
                ——若 SM 已重新翻空，整笔多跳过。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">macro tail · 对冲</span>
              <div className="dn-trade-name">
                downside put-spread——结构性，宏观是标记的 watch
              </div>
              <div className="dn-thesis">
                拥挤多 + OI 堆 + spot 派发让下行尾部仅凭结构就是真的。
                陈旧宏观面板暗示的利率/MOVE 升级，如果刷新为新，会显著
                加肥这个尾部——但它陈旧 4 日，所以这仍是带宏观触发待确认
                的结构性保险，不是宏观驱动的仓位。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">结构</span><span className="dn-lvl-v">long $74k / short $70k put</span></div>
                <div><span className="dn-lvl-k">到期</span><span className="dn-lvl-v">29-MAY-26（10d）— 第一个大正 GEX 到期</span></div>
                <div><span className="dn-lvl-k">加仓 trigger</span><span className="dn-lvl-v bear">新 10Y &gt; 4.55% 确认 或 HY OAS &gt; 约 3.0%</span></div>
                <div><span className="dn-lvl-k">规模（示意）</span><span className="dn-lvl-v">0.15R · 最终待 chain 拉取</span></div>
              </div>
              <div className="dn-gating">
                <b>说明：</b>10Y / HY 触发不能用陈旧 4 日的渲染执行——
                「等新」。strike/premium/Greeks 未载入——结构示意，
                规模待 Deribit 29-MAY chain 拉取。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 盘整解出</span>
            </h2>

            <p>
              05-18 的 book 已关闭：flip-break 空从未触发、已撤下
              （SM 平了）。盘整后的立场是空仓，围绕压缩带挂两个条件式触发：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>盘整向下破（倾斜）</td><td className="bear">1h 收盘 &lt; $75,300</td><td>盘整破位空，$74k 下加仓</td></tr>
                <tr><td>盘整向上破 + SM 多</td><td className="bull">1h 收盘 &gt; $77,200，SM net &gt; 0</td><td>reclaim 多，$78.2k 减半</td></tr>
                <tr><td>周期中段破（升级）</td><td className="bear">1d 收盘跌破云 $74.3k</td><td>持空 runner，放大尾部，不做多</td></tr>
                <tr><td>宏观转真（watch）</td><td className="bear">新 10Y &gt; 4.55% / HY &gt; 约 3.0% 收盘</td><td>不管价格，放大尾部</td></tr>
              </tbody>
            </table>

            <p>
              能改写整份备忘的那一行是：
              <span className="dn-signal">
                聪明钱重新翻净空
              </span>
              且价格仍钉在防线上——那会在不等 $75.3k 破的情况下恢复 05-18
              的方向性空 conviction，并作废 reclaim 多。在 SM net 转负或
              盘整以收盘破之前，这是一个盯着压缩的空仓 book，结构性倾斜
              偏下、但急性催化剂已消失。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计追踪 · v2 来自 2026-05-19 敌对式审计
            </span>
            codex CLI 0.125.0（gpt-5.5, xhigh）敌对式审计返回
            <b>0 个正确性 blocker</b> 与 1 个 LOW（ZH titleband
            「晚间快照」是时段读法，与 EN「late snapshot」的延迟/迟到义
            漂移——已改为「延迟快照」）。本备忘在撰写时即前置应用
            05-15/05-17/05-18 的审计教训；codex 明确全部放行：funding
            年化（field × 1095，无 ×100）、SM 净空 → 小幅净多的
            <em>reversion</em> 措辞（05-18 备忘 −2.5k → +2.9k；long
            20.57k − short 17.71k = +2.86k ≈ +2.9k，成分能复现 net，
            始终非分数）、GEX flip 双参考符号一致（对现货 −1.9%；对 GEX
            源文件 Deribit-index $77,334 为 +2.7%）、D-EMA100 邻近用
            「约 $15 之内」（非「到分钱」）、MA 锚点 $ 取整披露、章节
            编号、§VI 与 trade-book 触发一致、陈旧宏观纪律（约 8h 渲染 +
            FRED 陈旧 4 日，利率/MOVE 升级保持 watch-not-lean）、
            claims-vs-loaded-data、相关性序列（0.275 → 0.281 → 0.331，
            已对 05-17/05-18 备忘核验）、中英数值零漂移、requireViewer
            gating 与 Next.js build。原始审计记录留在 desk 仓库
            audits/2026-05-19-desk-note.md。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是 Hysteresis Research 内部交易台讨论材料，
            <em>非投资建议、非要约、非任何形式招揽</em>
            ，未对任何收件方个人情况定制。所有数字反映同一快照
            （2026-05-19 09:58Z），各节出处见上方数据来源区；部分输入
            ——尤其宏观——明确标记为陈旧。水位、规模与条件用于说明本台
            流程，不构成持续建议。过往的相关性、gamma 与仓位模式不约束
            未来盘口。衍生品有全损风险；杠杆条件下损失可能超过保证金。
            <em>请自行做研究。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                盘整付钱给你等，不付钱给你猜它往哪弹。
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
            v2 · 2026-05-19 09:58Z · 数据源：live_db.json · mtf_div_latest.html ·
            btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
