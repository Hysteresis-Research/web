import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-05-18 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-05-18',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-05-18' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260518() {
  await requireViewer('/zh/desk/2026-05-18');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HR · BTC · 交易台备忘 · 2026-05-18 · v2</span>
          <span>内部 · 仅供讨论 · 经敌对式审计</span>
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
              <span className="dn-big">$76,820</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−1.2%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-05-18 01:43Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-05-18 01:43Z</td>
                  <td className="dn-flag">最新 · 1 分钟</td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 01:42Z scan</td>
                  <td className="dn-flag">最新 · 含未收盘 K 线</td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 01:01Z 快照</td>
                  <td className="dn-flag">
                    滞后约 42 分钟 · Deribit idx $77,218 对现货 $76,820
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 01:01Z
                  </td>
                  <td className="dn-flag">滞后约 42 分钟 · 1h bar · 22 资产</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 01:43Z 渲染</td>
                  <td className="dn-flag">
                    FRED series 陈旧 4 日（NFCI 10 日）· 宏观不作依据
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-05-18 00:06Z</td>
                  <td className="dn-flag">
                    陈旧约 1.6h · 偏移已对现货重算
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
              <span className="dn-v">≈ 0.0%</span>
              <span className="dn-src">live · 01:43Z · 24h 均值 +0.1%</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v">+4.9% → ≈ 0%</span>
              <span className="dn-src">衰减 · 区间 −4.3/+5.1%</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−1.08% (−1,111 BTC)</span>
              <span className="dn-src">live · 去杠杆</span>
            </div>
            <div>
              <span className="dn-k">Binance mkt long/short</span>
              <span className="dn-v bear">56.4 / 43.6</span>
              <span className="dn-src">live_db `mkt_long_pct`</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−2.5k（净空）</span>
              <span className="dn-src">live · long 17.96k − short 20.43k</span>
            </div>
            <div>
              <span className="dn-k">SM 24h Δ</span>
              <span className="dn-v bear">+16.1k → −2.5k</span>
              <span className="dn-src">由净多反手净空</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">44.6% / 28.6%</span>
              <span className="dn-src">GEX IV 中位数 · 934 合约</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bear">−0.9%</span>
              <span className="dn-src">flip $76,142 对现货 · 源文件 +1.4% 对 idx</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              05-17 那篇设了一个开关：收盘跌穿 $77.3k / $76.5k 集群，
              条件式空就转为方向性。集群丢了。日线 SMA150 与周线 EMA20
              双双失守，反弹 scout 按它自己的止损出局，而最重要的那一个
              事实在下方印了出来<span className="dn-em">——</span>
              <span className="dn-signal">聪明钱已由净多反手净空</span>
              。这篇不重新论证路径；它标记路径已向下兑现，并读最后一道
              防线的结构。
            </p>

            <p>
              BTC 现报 <span className="dn-tag">$76,820</span>，在一段
              <span className="dn-tag">$76.7k–$78.6k</span> 24h 区间
              （qVol $7.5B）经历
              <span className="dn-tag bear">−2.0% 的 4h 下腿</span>后，
              贴在区间底部。价格丢掉了 05-17 的决策支撑
              <span className="dn-tag stale">D-SMA150 $77.2k (−0.54%)</span>
              与周线 pivot
              <span className="dn-tag stale">W-EMA20 $78.2k (−1.70%)</span>，
              现在正压在最后一道防线上：
              <span className="dn-tag stale">D-EMA100 $76.8k (−0.02%)</span>{' '}
              /{' '}
              <span className="dn-tag stale">D-EMA50 $76.7k (+0.16%)</span>{' '}
              /{' '}
              <span className="dn-tag bear">GEX-flip $76,142 (−0.9%)</span>
              。再往下唯一的结构是
              <span className="dn-tag bull">D-SMA50 $75.6k (+1.60%)</span>，
              进入 <span className="dn-tag bear">$75k −23M GEX</span> pocket。
              问题已不是「集群守不守得住」<span className="dn-em">——</span>
              而是<span className="dn-signal">
              周期 EMA / flip 这道防线守不守得住，且聪明钱已经在空
              </span>。
            </p>

            <h2 className="dn-sec">
              仓位结构 <span className="dn-roman">I · 实时盘面</span>
            </h2>

            <p>
              先讲仓位，因为换 regime 的是它，不是宏观（陈旧，见 §IV）。
              最高信号的一笔：
              <span className="dn-signal">
                top-trader（聪明钱）由净多{' '}
                <span className="dn-tag">+16.1k BTC</span>（05-17）反手净空{' '}
                <span className="dn-tag bear">−2.5k BTC</span>
              </span>
              ——long 17.96k 对 short 20.43k，24h 内 −18.6k BTC 的摆动。
              05-17 它们还是净多但在派发；现在已经过到了另一边。对面，
              散户（Binance mkt）<span className="dn-tag bear">更多了，56.4%
              多</span>（从 05-17 的 54.8%），在持续下跌里加多
              <span className="dn-em">
                ——笨钱多、聪明钱空、价格创更低低点，这是教科书结构，
                不是一个逆向做多的信号。
              </span>
            </p>

            <p>
              funding <span className="dn-signal">衰减到中性</span>：
              实时 8h 年化 <span className="dn-tag">≈ 0.0%</span>
              （24h 均值 <span className="dn-tag">+0.1%</span>，区间 −4.3%
              到 +5.1%），从 24h 前截点的 <span className="dn-tag">+4.9%</span>
              掉下来。05-17 的 thesis 挂在 funding 付多头上；这个信号没了
              ——funding 现在信息中性，读法完全转到 SM 仓位与结构。
              OI 24h <span className="dn-tag bear">−1.08%（−1,111 BTC）</span>、
              4h <span className="dn-tag bear">−825 BTC</span>，价格在跌
              <span className="dn-em">——是多头被冲 / 去杠杆</span>，
              不是新空在砌这段下跌；只有最后 1h OI
              <span className="dn-tag">+1,014 BTC</span>（晚到的空头压低点）。
              perp 对现货 <span className="dn-tag bear">贴水 −$33</span>。
            </p>

            <p>
              窗口 flow 确认 spot 端派发：4h 价格
              <span className="dn-tag bear">−2.02%</span>、spot CVD
              <span className="dn-tag bear">Δ −1,886</span>、futures CVD
              <span className="dn-tag">Δ +75</span>、大单净
              <span className="dn-tag bull">+215 / 161 笔</span>；1h 价格
              <span className="dn-tag bear">−0.30%</span>、spot CVD
              <span className="dn-tag bear">Δ −896</span>、futures CVD
              <span className="dn-tag bull">Δ +451</span>、大单净
              <span className="dn-tag bull">+484 / 40 笔</span>。
              <span className="dn-em">
                4h 那腿是 desk 吃不掉的 spot 抛压；最后 1h 大单在低点
                进场——盘口上唯一建设性的 tell，也是下面逆势 scout 的种子。
              </span>
            </p>

            <h2 className="dn-sec">
              结构 <span className="dn-roman">II · MTF 图 · 标陈旧</span>
            </h2>

            <p>
              盘口<span className="dn-signal">被洗穿了</span>：15m RSI
              <span className="dn-tag">24.9</span>、30m
              <span className="dn-tag">21.9</span>、1h
              <span className="dn-tag">23.9</span>——投降级读数，
              且 <span className="dn-tag bull">⚡TD9 BUY 在 15m / 30m / 8h</span>
              同时触发（超卖反转提示；末根可能未收，视为 provisional）。
              现货在 15m / 30m / 1h / 4h / 8h 及 1w 都跌到云下；12h 已滑入
              云内（75.9–78.4k）；只有 1d / 3d / 1M 还云上或云内。1h 带
              <span className="dn-tag bull">BULL regular + BULL hidden</span>
              背离。<span className="dn-em">
                反弹 setup 很到位——但所有短/中周期都在云下、MACD 柱深度
                为负；这是确认下行趋势内部的超卖弹簧，不是底。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">76,756</td><td className="num bull">24.9</td><td className="bear">死叉（水上）14b</td><td className="bear">云下 ↑78.1k</td><td className="hot">⚡ TD9 BUY</td><td>BEAR reg · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">76,756</td><td className="num bull">21.9</td><td className="bear">死叉（水上）6b</td><td className="bear">云下 ↑78.1k</td><td className="hot">⚡ TD9 BUY</td><td>BEAR hid · BULL hid</td></tr>
                <tr><td>1h</td><td className="num">76,756</td><td className="num bull">23.9</td><td className="bear">死叉（水下）2b</td><td className="bear">云下 ↑78.3k</td><td>Buy 4</td><td className="bull">BULL reg · BULL hid</td></tr>
                <tr><td>4h</td><td className="num">76,756</td><td className="num">30.1</td><td className="bear">死叉（水下）15b</td><td className="bear">云下 ↑80.3k</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>8h</td><td className="num">76,756</td><td className="num">31.9</td><td className="neut">—</td><td className="bear">云下 ↑78.8k</td><td className="hot">⚡ TD9 BUY</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">76,756</td><td className="num">36.2</td><td className="bear">死叉（水上）14b</td><td className="neut">云内 75.9–78.4k</td><td>Buy 6</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">76,756</td><td className="num">44.5</td><td className="bear">死叉（水上）6b</td><td className="bull">云上 ↓74.3k</td><td>Buy 6</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>3d</td><td className="num">76,751</td><td className="num">50.8</td><td className="neut">—</td><td className="neut">云内 73.6–93.0k</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">76,756</td><td className="num">45.6</td><td className="bull">金叉（水下）5b</td><td className="bear">云下 ↑100.3k</td><td>Buy 1</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    三重 ⚡TD9 BUY（15m/30m/8h）+ 低于 25 的 RSI = 洗盘
                    反转提示；干净 K 线收出来前 provisional。1d 仍云上
                    （↓74.3k）——周期中段尚未破。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵精确标定 regime 破位的位置。现货已丢
              <span className="dn-tag bear">D-SMA20 $79.3k (−3.16%)</span>、
              <span className="dn-tag bear">D-EMA20 $78.8k (−2.47%)</span>、
              05-17 的支撑
              <span className="dn-tag stale">D-SMA150 $77.2k (−0.54%)</span>
              与周线 pivot
              <span className="dn-tag stale">W-EMA20 $78.2k (−1.70%)</span>。
              现在<span className="dn-signal">正压在周期 EMA 防线上</span>：
              <span className="dn-tag stale">D-EMA50 $76.7k (+0.16%)</span> 与
              <span className="dn-tag stale">D-EMA100 $76.8k (−0.02%)</span>
              ——价格距 100 日 EMA 约 $14。SMA 周期梯队仍为正但在
              侵蚀：<span className="dn-tag bull">D-SMA50 $75.6k (+1.60%)</span>、
              <span className="dn-tag bull">D-SMA100 $72.2k (+6.42%)</span>；
              阻力是远处的
              <span className="dn-tag stale">
                D-SMA200/EMA200 $81.4–81.8k (−5.7% 至 −6.1%)
              </span>
              。周线：仅站上
              <span className="dn-tag bull">W-SMA20 $75.0k (+2.40%)</span>；
              低于 W-EMA20 / W-EMA50 $85.2k / W-SMA50 $94.0k。
              <span className="dn-em">
                所有 MA 锚定 parquet 最末 bar 2026-05-18 00:06Z
                （收盘 $77,057）；偏移已对现货 $76,820 重算。
                显示的 MA 水位为 $ 取整；偏移按精确序列值计算。
              </span>
              小结：周期 EMA 锚今天正在被测；SMA 周期梯队是它下面的下一道
              线。NTT pivot 未载入——只用云 + MA，不主张独立 NTT 确认。
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · GEX + IV</span>
            </h2>

            <p>
              dealer gamma <span className="dn-signal">近零，且正好在
              决策点放波</span>。aggregate GEX
              <span className="dn-tag">+15.9M/1%</span>——从 05-17 的 +37.7M、
              05-15 的 +204M 进一步塌缩。0-gamma flip 在
              <span className="dn-tag bear">$76,142</span>；现货 $76,820 只在
              它<span className="dn-tag bear">上方约 0.9%</span>
              （GEX 源文件自报的「+1.4% dist to flip」是对其 01:01Z
              Deribit-index $77,218 算的——之后现货又掉了约 $400，
              所以实时缓冲比源文件说的更薄）。墙图是上方一个正天花板（
              <span className="dn-tag bull">$80k +39M</span>、
              <span className="dn-tag bull">$82k +24M</span>）压着现货处
              及下方一个负 gamma 台阶：
              <span className="dn-tag bear">$77.5k −14.3M</span>、
              <span className="dn-tag bear">$78k −10.4M</span>、
              <span className="dn-tag bear">$75k −23.1M</span>、
              <span className="dn-tag bear">$74k −10.2M</span>，深处
              <span className="dn-tag">$60k −7.8M</span> 崩盘 pocket。
              <span className="dn-em">
                今日 0DTE（18MAY）是 −25.5M GEX——全盘最大的负到期；
                整条近月（19/20/22MAY）皆负，要到 29MAY（+16.4M）才转正。
              </span>
            </p>

            <p>
              直白读：跌穿 $76.1k flip，dealer 进 short gamma，
              下方紧贴 <span className="dn-signal">−23M @75k 加速器</span>，
              且 −25.5M 的 0DTE 什么也 pin 不住——他们顺势卖。这是 05-17
              标过的同一个放波结构，只是现货从「上方 2%」变成「就在触发位」。
              934 个合约的 IV 中位数 <span className="dn-tag">44.6%</span>
              （链层面汇总，非可交易单一到期）对 30D close-to-close RV
              <span className="dn-tag">28.6%</span>——链层面约 +16pt 的
              richness，<span className="dn-em">不是</span>我们会往负 front
              gamma 里卖的 spread。按 strike/到期的 IV、vega、skew 未载入；
              vol 读法 framework only。
            </p>

            <h2 className="dn-sec">
              宏观 <span className="dn-roman">IV · 陈旧 · 不作依据</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观面板陈旧 4 日（NFCI 10 日），今天明确不承重。
              </span>{' '}
              FRED Tier-1 series 周末前最后刷新；数值是 carry 的，不是当前。
              为完整起见，carry 下来的结构与 05-17 无变化：US 10Y
              <span className="dn-tag stale">4.47%</span>（regime +1.63）、
              10Y TIPS real <span className="dn-tag stale">2.00%</span>、
              HY OAS <span className="dn-tag stale">2.76%</span>
              （risk-on，regime −1.13）、MOVE 债波
              <span className="dn-tag stale">79.9</span>、DXY
              <span className="dn-tag stale">99.27</span>、Fed net liquidity
              <span className="dn-tag stale">$5.886T</span>、JGB 10Y
              <span className="dn-tag stale">2.52%（月度 · 不作依据）</span>。
              <span className="dn-em">
                因为宏观陈旧，今天的 regime 读数只靠仓位 + dealer 结构。
              </span>
              HY-OAS 触发线（主观警戒 &gt; 约 3.0–3.2% 收盘）不变，但不能
              用一个陈旧 4 日的 print 去执行——按「等新 credit」，
              不作已确认。相关性 regime NORMAL（7d 1h 平均 |r| 0.281）；
              BTC 相关收紧（NQ <span className="dn-tag">+0.51</span>、NVDA
              <span className="dn-tag">+0.49</span>、SP500
              <span className="dn-tag">+0.46</span>），7d 内 BTC 印
              <span className="dn-tag bear">−5.29%</span> 对 SP500
              <span className="dn-tag">−0.15%</span>、NQ
              <span className="dn-tag">−1.00%</span>、NVDA
              <span className="dn-tag bull">+3.59%</span>
              <span className="dn-em">
                ——在相关收紧的盘里，BTC 是它 TradFi peer set 里明确的
                高 β 下行落后者。
              </span>
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · 只写证据撑得住的规模</span>
            </h2>

            <div className="dn-trade">
              <span className="dn-side short">short · 主仓 · 确认 break</span>
              <div className="dn-trade-name">
                flip-break runner——有 SM 净空 + dealer map 在背后的方向性
              </div>
              <div className="dn-thesis">
                05-17 的条件式空现在到了触发位，且有仓位在背后：SM 净空、
                retail 多、OI 去杠杆、dealer 近零 gamma。收盘跌穿 $76.1k
                flip，把 −23M @75k pocket 变成加速器。这是方向性交易
                ——但它在 break 触发，不是在 sub-25 RSI + 三重 TD9 BUY 的
                洗盘里去卖。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">触发</span><span className="dn-lvl-v bear">1h 收盘 &lt; $76,000（flip 下方）</span></div>
                <div><span className="dn-lvl-k">止损</span><span className="dn-lvl-v bull">1h 收盘 &gt; $77,300（收回 D-SMA150）</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">$75,600 (D-SMA50) / $75,000 / $74,000</span></div>
                <div><span className="dn-lvl-k">规模</span><span className="dn-lvl-v">触发 0.5R；丢 $75.6k +0.3R；≤ 0.8R</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R：</b>触发 $76,000，止损 $77,300 = 约 $1,300 风险；
                $75,000 = 约 $1,000，$74,000 = 约 $2,000 ≈ 含费前 0.8–1.5:1
                ——偏弱，所以规模封顶、加仓等 $75.6k D-SMA50 失守。
                <b>不要</b>在洗盘里预先押空；edge 是 break，不是那个坑。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">short · 偏好 · 反弹做空</span>
              <div className="dn-trade-name">
                把超卖反弹卖回失守的支撑
              </div>
              <div className="dn-thesis">
                更高质量的空不是 break，是把超卖反弹 fade 回刚丢的水位。
                三重 TD9 BUY + sub-25 RSI 说先来个反弹；把它卖进失守的
                D-SMA150 / W-EMA20，SM 已经在空，云顶在上方做阻力。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">区域</span><span className="dn-lvl-v bear">$77,200–78,300（D-SMA150 → W-EMA20）</span></div>
                <div><span className="dn-lvl-k">止损</span><span className="dn-lvl-v bull">1h 收盘 &gt; $78,600（24h 高 / 云）</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">$76,100 flip / $75,600 / $75,000</span></div>
                <div><span className="dn-lvl-k">规模</span><span className="dn-lvl-v">0.5R，进区域每 $0.5k 加 0.25R</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R：</b>区域中点 $77,750，止损 $78,600 = 约 $850 风险；
                $76,100 = 约 $1,650，$75,000 = 约 $2,750 ≈ 1.9–3.2:1
                ——本页最干净的 book。<b>Gating：</b>仅在 SM 维持净空且
                1d 守住云上（$74.3k）时有效；1h 收回 &gt; $78,600 作废。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · 小 · 逆势</span>
              <div className="dn-trade-name">
                洗盘反弹 scalp——TD9 集群 + spot 吸收
              </div>
              <div className="dn-thesis">
                三重 ⚡TD9 BUY（15m/30m/8h）+ 1h RSI 24 + 1h BULL regular
                背离 + 大单净 +484 在 1h 低点进场，现货距 D-EMA100 约 $14。
                一个朝失守 D-SMA150 去的快速反弹可做——逆势、最小规模、
                最先砍。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">入场</span><span className="dn-lvl-v bull">$76,500–76,850（D-EMA100 守住）</span></div>
                <div><span className="dn-lvl-k">止损</span><span className="dn-lvl-v bear">1h 收盘 &lt; $76,000（flip 丢）</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">$77,200–77,800；$77,200 减半</span></div>
                <div><span className="dn-lvl-k">规模</span><span className="dn-lvl-v">0.2R · 仅 scalp</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R：</b>入场中点 $76,675，止损 $76,000 = 约 $675 风险，
                目标 $77,200–77,800 = 约 $525–1,125 ≈ 0.8–1.7:1——偏弱；
                这是 TD9 集群上的动量 scalp，不是仓位。
                <b>硬规则：</b>与 flip-break 空互斥——$76,000 的 1h 收盘
                是唯一开关。不向下加仓。任何收盘破 flip 即空仓。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">macro tail · 对冲</span>
              <div className="dn-trade-name">
                downside put-spread——结构性，非宏观确认
              </div>
              <div className="dn-thesis">
                近月 dealer gamma 为负、SM 净空、周期 EMA 防线在测。
                尾部仅凭结构就是真的；宏观陈旧 4 日，所以这不是宏观确认的
                对冲——是 dealer/仓位驱动的保险。触发主观。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">结构</span><span className="dn-lvl-v">long $74k / short $70k put</span></div>
                <div><span className="dn-lvl-k">到期</span><span className="dn-lvl-v">29-MAY-26（11d）— 第一个正 GEX 到期</span></div>
                <div><span className="dn-lvl-k">加仓 trigger</span><span className="dn-lvl-v bear">新 HY OAS &gt; 约 3.0–3.2% 收盘</span></div>
                <div><span className="dn-lvl-k">规模（示意）</span><span className="dn-lvl-v">0.15R · 最终待 chain 拉取</span></div>
              </div>
              <div className="dn-gating">
                <b>说明：</b>HY 阈值不能用陈旧 4 日的 print 执行——
                「等新 credit」。strike/premium/Greeks 未载入——结构示意，
                规模待 Deribit 29-MAY chain 拉取。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 唯一的开关</span>
            </h2>

            <p>
              05-17 的 book 已结清：反弹 scout 止损、条件式空到触发位。
              结清后的立场是偏空，由一个水位主导一切：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>flip 丢（空路径仍活）</td><td className="bear">1h 收盘 &lt; $76,000</td><td>flip-break runner，丢 $75.6k 加仓；洗盘 scout 平掉</td></tr>
                <tr><td>超卖反弹（偏好）</td><td className="bull">反弹进 $77.2–78.3k 且 SM 仍净空</td><td>反弹做空</td></tr>
                <tr><td>周期中段破（升级）</td><td className="bear">1d 收盘跌破云 $74.3k</td><td>持 runner，砍掉全部多，放大尾部</td></tr>
                <tr><td>结构收回（失效）</td><td className="bull">1h 收盘 &gt; $78,600</td><td>空仓平掉，重评；盯 SM 是否反手</td></tr>
              </tbody>
            </table>

            <p>
              能改写整份备忘的那一行是：
              <span className="dn-signal">
                聪明钱反手回净多
              </span>
              且价格守住周期 EMA 防线——那会作废反弹做空、否掉空路径、
              把洗盘 scout 变成一笔真的多。在 SM net BTC 重新转正之前，
              这个 book 偏空，唯一允许的多是对着 $76.0k 开关的那个小 scalp。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计追踪 · v2 来自 2026-05-18 敌对式审计
            </span>
            codex CLI 0.125.0（gpt-5.5, xhigh）敌对式审计共 5 项发现
            （2 HIGH, 1 MED, 2 LOW）。两个 blocker 已修中英双版：
            <b>F-01</b>——SM 成分显示「long 18.0k − short 20.4k」（= −2.4k），
            与陈述的 −2.5k net 矛盾；成分改为能复现 net 的精度
            （long 17.96k − short 20.43k = −2.47k ≈ −2.5k；+16.1k → −2.5k
            = −18.6k 摆动不变）；<b>F-02</b>——「到分钱地踩在 100 日 EMA」
            把 $14 的差距夸成了亚美元级；改为「约 $14」（中）/
            「within ~$15」（英）。二级：<b>F-03</b>——宏观交叉引用
            「见 §III」→「§IV」；<b>F-04</b>——锚点脚注补充：显示的 MA
            水位为 $ 取整、偏移按精确序列计算；<b>F-05</b>——§VI「flip 丢」
            行补回洗盘 scout 在 $76,000 平掉。codex 放行：funding 年化
            （field × 1095，无 ×100）、GEX flip 双参考符号一致、SM
            净多→净空 flip 措辞（始终非分数）、宏观陈旧纪律（全部 6 处）、
            claims-vs-loaded-data、trade-book R/R 算术、互斥开关、
            中英数值零漂移、requireViewer gating 与 Next.js build。
            原始审计记录留在 desk 仓库 audits/2026-05-18-desk-note.md。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是 Hysteresis Research 内部交易台讨论材料，
            <em>非投资建议、非要约、非任何形式招揽</em>
            ，未对任何收件方个人情况定制。所有数字反映同一原子快照
            （2026-05-18 01:43Z），各节出处见上方数据来源区；部分输入
            ——尤其宏观——明确标记为陈旧。水位、规模与条件用于说明本台
            流程，不构成持续建议。过往的相关性、gamma 与仓位模式不约束
            未来盘口。衍生品有全损风险；杠杆条件下损失可能超过保证金。
            <em>请自行做研究。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                聪明的一边过界时，不要 fade 它——跟着它，去 fade 反弹。
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
            v2 · 2026-05-18 01:43Z · 数据源：live_db.json · mtf_div_latest.html ·
            btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
