import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-05-17 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-05-17',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-05-17' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export default function DeskZh20260517() {
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HR · BTC · 交易台备忘 · 2026-05-17 · v1</span>
          <span>内部 · 仅供讨论 · 未审计</span>
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
              <span className="dn-big">$77,988</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−1.3%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-05-17 01:30Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-05-17 01:30Z</td>
                  <td className="dn-flag">最新 · 1 分钟</td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 01:16Z scan</td>
                  <td className="dn-flag">滞后 14 分钟 · 含未收盘 K 线</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 01:28Z scan</td>
                  <td className="dn-flag">滞后 2 分钟 · 日/周级指标</td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 01:28Z 快照</td>
                  <td className="dn-flag">滞后 2 分钟 · Deribit chain · 942 合约</td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 01:00Z
                  </td>
                  <td className="dn-flag">滞后 30 分钟 · 1h bar · 22 资产</td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-05-17 00:06Z</td>
                  <td className="dn-flag">
                    陈旧约 1.4h · 偏移已对现货重算
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
              <span className="dn-v bear">+5.0%</span>
              <span className="dn-src">live · 01:30Z · 多头付费</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v">+3.7% → +5.0%</span>
              <span className="dn-src">live_db 24h 截点</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v">+0.96% (+973 BTC)</span>
              <span className="dn-src">live · 01:30Z</span>
            </div>
            <div>
              <span className="dn-k">Binance mkt long/short</span>
              <span className="dn-v bear">54.8 / 45.2</span>
              <span className="dn-src">live_db `mkt_long_pct`</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bull">+16.1k</span>
              <span className="dn-src">live · long − short BTC</span>
            </div>
            <div>
              <span className="dn-k">SM 24h Δ</span>
              <span className="dn-v bear">−23.8k BTC</span>
              <span className="dn-src">逢弱派发</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">43.8% / 29.1%</span>
              <span className="dn-src">GEX IV 中位数 · 942 合约</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bear">+2.0%</span>
              <span className="dn-src">GEX · flip $76,496</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              05-15 那篇偏多，押的是「$82.3k 干净拿下」的 squeeze。盘口走了
              反方向。两天后，funding 从付空头翻成付多头，SM 砍掉四分之一净
              book，dealer 卸掉五分之四的 long gamma，0-gamma flip 现在
              <span className="dn-em">——</span>
              <span className="dn-signal">在下方 2%，不再是下方 5%</span>
              。这篇不替前一篇辩护；它只标记第一条失效线在哪里触发、
              触发之后的结构是什么。
            </p>

            <p>
              BTC 现报 <span className="dn-tag">$77,988</span>，落在
              <span className="dn-tag">$77.6k–$79.2k</span> 这段窄幅 24h 区间
              的下半部（24h qVol $7.0B），正压在决定下一段的那个集群上：
              <span className="dn-tag stale">日线 SMA150 $77.3k (+0.87%)</span>{' '}
              / <span className="dn-tag stale">周线 EMA20 $78.3k (−0.45%)</span>{' '}
              / <span className="dn-tag bear">GEX-flip $76,496 (−1.9%)</span>{' '}
              这一带。在它上方，结构是周期内的回撤（仍站日线
              SMA50/SMA100）；跌穿它，dealer map 转为放波，下方前 10 大里
              下一个 pocket 是 <span className="dn-tag bear">$75k −20M GEX</span>
              。regime 分界点很清楚<span className="dn-em">——</span>
              <span className="dn-signal">价格守住 $77.3k，或者丢掉 flip</span>
              ，05-15 还朝上的不对称，现在朝下。
            </p>

            <h2 className="dn-sec">
              Regime <span className="dn-roman">I · 跨资产 + 宏观</span>
            </h2>

            <p>
              相关性 regime <span className="dn-signal">收紧了，不是放松</span>
              ：7d 1h 平均 |r| = 0.275（<span className="dn-tag">NORMAL</span>），
              高于 05-15 那次 0.234 的 idiosyncratic。BTC 列表内最强的几条是
              NVDA <span className="dn-tag">+0.47</span>、NQ{' '}
              <span className="dn-tag">+0.45</span>、TSLA{' '}
              <span className="dn-tag">+0.41</span>、SP500{' '}
              <span className="dn-tag">+0.40</span>——绳子缩短了。7d 窗口里
              BTC 印了 <span className="dn-tag bear">−3.37%</span>，对比 SP500{' '}
              <span className="dn-tag">−0.36%</span>、NQ{' '}
              <span className="dn-tag">−1.31%</span>、NVDA{' '}
              <span className="dn-tag bull">+3.13%</span>。
              <span className="dn-em">
                05-15 那句「5.5pt 落后是仓位问题、不是 beta 问题」，朝错的
                方向落地了。
              </span>
              BTC 持续落后、相关性同时抬升——这读作 risk-off 盘里的高下行
              beta，不是仓位缺口在收敛。能源跑得很凶（CL{' '}
              <span className="dn-tag">+8.97%</span>、BRENT{' '}
              <span className="dn-tag">+6.63%</span>、NGAS{' '}
              <span className="dn-tag">+8.97%</span>），金属在跌（SILVER{' '}
              <span className="dn-tag bear">−6.00%</span>、GOLD{' '}
              <span className="dn-tag bear">−4.01%</span>）——这是
              通胀叠加 risk-off 的结构，不是干净的 risk bid。
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>宏观指标</th>
                  <th>水位</th>
                  <th>regime z</th>
                  <th>30d 事件 z</th>
                  <th>读法</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>US 10Y 名义</td><td className="num">4.47%</td><td className="num bear">+1.63</td><td className="num bear">+1.80</td><td className="bear">risk-off</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.00%</td><td className="num bear">+0.78</td><td className="num bear">+1.92</td><td className="bear">偏紧</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.28%</td><td className="num">+0.61</td><td className="num">+1.10</td><td className="neut">缓升</td></tr>
                <tr><td>HY OAS</td><td className="num">2.76%</td><td className="num bull">−1.13</td><td className="num bull">−1.08</td><td className="bull">宽松 · risk-on</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num stale">−0.524</td><td className="num bull">−0.49</td><td className="num bull">−1.64</td><td className="stale">转松 · 陈旧 9 日</td></tr>
                <tr><td>MOVE 债波</td><td className="num">79.9 (+10.2)</td><td className="num">+0.19</td><td className="num bear">+1.68</td><td className="bear">波动跳升 · 新增</td></tr>
                <tr><td>DXY</td><td className="num">99.27</td><td className="num bear">+0.82</td><td className="num bear">+1.50</td><td className="bear">偏紧</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.886T</td><td className="num bull">+0.70</td><td className="num bull">+2.47</td><td className="bull">激增</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.95%</td><td className="num bull">−0.92</td><td className="num bear">+1.80</td><td className="bear">偏紧</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">月度 · 不作依据</td></tr>
              </tbody>
            </table>

            <p>
              宏观的诚实读法：和 05-15 同一副骨架，但两个关节更僵了——
              <span className="dn-signal">利率压得更狠</span>（10Y 事件
              +1.80σ，TIPS real +1.92σ），外加一个新的 stress vector
              <span className="dn-em">——</span>MOVE 债波跳升 +10.2 到 79.9
              （事件 +1.68σ），这在 05-15 的盘面上还没出现。DXY 偏紧
              （+1.50σ）。挡在这套结构和 risk-off cascade 之间的只剩 credit，
              而 credit 不配合：<span className="dn-signal">HY OAS 2.76%</span>
              比 05-15 的 2.82% 还紧，挂 risk-on（事件 −1.08σ）。net
              liquidity 仍印 +2.47σ 的 surge。这让 HY OAS 成为最关键的单一
              外部触发线——主观警戒是收盘上穿约 3.0–3.2%（这个阈值不是
              历史推出来的，是触发线，不是已检验水位）。JGB 挂 +2.55σ 的
              regime tag 和 EXTREME RISK-OFF，但源 series 是 FRED 月度；
              按本台纪律，不算进战术读数。
            </p>

            <h2 className="dn-sec">
              结构 <span className="dn-roman">II · MTF 图 · 标陈旧</span>
            </h2>

            <p>
              短周期结构<span className="dn-signal">已破，但超卖</span>。
              现货在 15m / 30m / 1h / 4h / 8h 及 1w 都跌到 Ichimoku 云下，
              30m 1 根 K 线前印出水下死叉（空头延续）。引擎周期 RSI 洗过了
              （<span className="dn-tag">1h 35.1</span>、
              <span className="dn-tag">4h 35.0</span>、
              <span className="dn-tag">8h 38.4</span>），4h/8h/12h/1d 的 MACD
              柱深度为负。对冲这一面的是：1h 在 9 根前印出水下金叉，并带
              <span className="dn-tag bull">BULL hidden + BULL regular</span>
              背离<span className="dn-em">——</span>全盘唯一建设性的一格，
              也是这里是「反弹 setup」而不是「干净空」的原因。更高周期
              （12h / 1d / 3d / 1M）仍在云上或云内：
              <span className="dn-em">
                这是周期中段内部的短周期破位，不是周期顶——除非那个集群丢掉。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">78,044</td><td className="num">42.3</td><td className="bear">死叉（水上）13b</td><td className="bear">云下 ↑78.1k</td><td>Buy 5</td><td>BEAR/BULL 混</td></tr>
                <tr><td>30m</td><td className="num">78,044</td><td className="num">42.0</td><td className="bear">死叉（水下）1b</td><td className="bear">云下 ↑78.2k</td><td>Buy 7</td><td>BEAR hid</td></tr>
                <tr><td>1h</td><td className="num">78,044</td><td className="num bull">35.1</td><td className="bull">金叉（水下）9b</td><td className="bear">云下 ↑79.7k</td><td>Buy 4</td><td className="bull">BULL hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">78,044</td><td className="num bull">35.0</td><td className="bear">死叉（水下）9b</td><td className="bear">云下 ↑80.5k</td><td>Sell 1</td><td>—</td></tr>
                <tr><td>8h</td><td className="num">78,044</td><td className="num">38.4</td><td className="bear">死叉（水上）18b</td><td className="bear">云下 ↑78.8k</td><td>Buy 6</td><td>BEAR reg</td></tr>
                <tr><td>12h</td><td className="num">78,044</td><td className="num">41.3</td><td className="bear">死叉（水上）12b</td><td className="bull">云上 ↓77.8k</td><td>Buy 4</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">78,044</td><td className="num">48.7</td><td className="bear">死叉（水上）5b</td><td className="bull">云上 ↓73.0k</td><td>Buy 5</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>3d</td><td className="num">78,044</td><td className="num">53.3</td><td className="neut">—</td><td className="neut">云内 73.6–93.0k</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">78,044</td><td className="num">46.9</td><td className="bull">金叉（水下）4b</td><td className="bear">云下 ↑100.3k</td><td>Sell 5</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    无 active ⚡TD9。1h 是建设性 outlier；在一根干净的 1h
                    收盘站回 $79.7k 云底之前，把它的方向当 provisional。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵说的是同一件事，而且更精确。现货
              <span className="dn-signal">丢了日线 20</span>：跌破{' '}
              <span className="dn-tag bear">D-SMA20 $79.3k (−1.69%)</span> 与{' '}
              <span className="dn-tag bear">D-EMA20 $79.0k (−1.30%)</span>。
              但仍守住周期梯队：
              <span className="dn-tag bull">D-SMA50 $75.4k (+3.43%)</span>、
              <span className="dn-tag bull">D-SMA100 $72.1k (+8.14%)</span>
              （周期之锚）。阻力是
              <span className="dn-tag stale">
                日线 SMA200/EMA200 集群 $81.6–81.9k (−4.4% 至 −4.7%)
              </span>
              ——注意这比 05-15 的 $82.0–82.3k 落了约 $0.4k。决定性支撑是
              贴在现货下方的
              <span className="dn-tag stale">D-SMA150 $77.3k (+0.87%)</span>
              ，与 <span className="dn-tag stale">W-EMA20 $78.3k (−0.45%)</span>
              重合——现货正压在周线 pivot 上。D-SMA150 下方没有 MA 结构，
              直到 D-SMA50 $75.4k——而那正是 GEX flip（$76.5k）与 −20M @75k
              pocket 所在。
              <span className="dn-em">
                所有 MA 水位锚定 parquet 最末 bar 2026-05-17 00:06Z
                （收盘 $78,187）；上述偏移已对现货 $77,988 重算。
              </span>
            </p>

            <p>
              周线维持结构性分歧：站上
              <span className="dn-tag bull">W-SMA20 $75.8k (+2.92%)</span>，
              但低于 <span className="dn-tag bear">W-EMA50 $85.6k (−8.89%)</span>、
              <span className="dn-tag bear">W-SMA50 $94.6k (−17.56%)</span> 与{' '}
              <span className="dn-tag bear">W-EMA100 $83.6k (−6.67%)</span>。
              $78.3k 的 W-EMA20 测试是关键：周线收盘站回它上方，维持消化读法；
              周线收盘跌穿，就把「日线 20 失守」升级成「周线 pivot 失守」。
              本次未载入 NTT pivot 数据；这里只用云 + MA 结构，不主张存在
              独立的 NTT pivot 确认。
            </p>

            <h2 className="dn-sec">
              仓位结构 <span className="dn-roman">III · 实时盘面</span>
            </h2>

            <p>
              这就是 05-15 thesis 死掉的地方。那笔 squeeze long 押的是
              <span className="dn-signal">funding 付空头</span>（05-15 −2.10%
              年化）。实时盘面现在读
              <span className="dn-tag bear">+5.0% 年化（多头付费）</span>，
              从 24h 前截点的 <span className="dn-tag">+3.7% 年化</span> 升上来，
              24h 路径区间 −0.4% 到 +7.0%，24h 均值 +3.3% 年化。
              <span className="dn-em">
                funding 翻正并维持，正好是 05-15 的第一条失效线
                （「8h funding 年化 &gt; +0.5% 持续 24h → 砍 squeeze long」）。
                它触发了。
              </span>
              squeeze 燃料这条 thesis 是关闭，不是延后。
            </p>

            <p>
              盘口其余部分确认的是降风险，不是吸筹。OI 24h 增长
              <span className="dn-tag">+0.96%</span>（
              <span className="dn-tag">+973 BTC</span>），4h{' '}
              <span className="dn-tag">+806 BTC</span>，而价格在跌——funding
              为正，边际 book 是
              <span className="dn-signal">多头逢弱加仓</span>，不是新空。
              SM（top-trader）仍净多
              <span className="dn-tag bull">+16.1k BTC</span>（long 28.8k −
              short 12.7k），但 24h 内砍掉
              <span className="dn-tag bear">−23.8k BTC</span>——比 05-15 的
              −14.0k 更狠的派发，而且是逢弱不是逢强。Binance mkt 散户翻成
              <span className="dn-tag bear">54.8% 多</span>，从 05-15 的
              38.4% 多——它平掉空、在 −1.3% 的一天转多，又站错边，这次站
              在多这边。perp 对现货
              <span className="dn-tag bear">贴水 −$29</span>；aggressor skew
              <span className="dn-tag bear">−22</span>（净卖压）。
            </p>

            <p>
              窗口 flow：4h 价格
              <span className="dn-tag bear">−0.42%</span>、OI{' '}
              <span className="dn-tag">+806 BTC</span>、spot CVD{' '}
              <span className="dn-tag bull">Δ +661</span>、futures CVD{' '}
              <span className="dn-tag bear">Δ −800</span>、大单净{' '}
              <span className="dn-tag bear">105 笔 −203 BTC</span>。1h 价格{' '}
              <span className="dn-tag bear">−0.29%</span>、spot CVD{' '}
              <span className="dn-tag bull">Δ +186</span>、futures CVD{' '}
              <span className="dn-tag bear">Δ −398</span>。
              <span className="dn-em">
                小结：futures 端持续派发，spot 端在下面吸——SM 在减、
                retail 在接、空头现在收 funding 压价。
              </span>
              spot 端这点吸收，是反弹能成为一笔交易而不是一个 fade 的
              唯一理由。
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">IV · GEX + IV</span>
            </h2>

            <p>
              dealer map 翻面了。aggregate GEX 是
              <span className="dn-tag">+37.7M/1%</span>——是 long gamma，
              但<span className="dn-signal">只有 05-15 在 pin 的 +204M
              的五分之一</span>。0-gamma flip 在
              <span className="dn-tag bear">$76,496</span>，现在在现货
              $77,988 <span className="dn-tag bear">下方 1.9%</span>
              （GEX 源文件自报的 +2.0%「dist to flip」是对其 Deribit-index
              参考价 $78,035 算的；两者指向同一件事——05-15 是下方
              5.4%，缓冲基本没了）。前 10 大墙是上方一个正的天花板（
              <span className="dn-tag bull">$80k +41.7M</span>、
              <span className="dn-tag bull">$82k +27.8M</span>）加上现货处
              及下方一个<span className="dn-signal">负 gamma 台阶</span>：
              <span className="dn-tag bear">$78k −14.1M</span>（dealer 在
              当前价 short gamma → 在这里放大日内波动）、
              <span className="dn-tag bear">$77.5k −10.5M</span>、
              <span className="dn-tag bear">$75k −20.1M</span>、
              <span className="dn-tag bear">$74k −7.7M</span>，还有一个深的
              <span className="dn-tag">$60k −7.6M</span> 崩盘 put pocket。
              <span className="dn-em">
                所有近月到期都是负 gamma——0DTE 17MAY −8.7M、18MAY −15.5M、
                19MAY −4.2M、22MAY −5.7M——要到 29MAY（+26.7M）和
                26JUN（+19.5M）才转正。
              </span>
            </p>

            <p>
              直白读：上方仅 2%、现货下方一个负 gamma 台阶、整条 0–5 DTE
              全 short gamma，这是个<span className="dn-signal">放波</span>
              结构，和 05-15 的 pin 正相反。跌穿 $77.3k / $76.5k 集群，
              dealer 是顺着卖、不是接。
              <span className="dn-em">
                05-15 的卖近月 vol 思路现在是明确的错误——这里不要卖
                front gamma；要 lean 的话，framework 是测 flip 时偏 long
                gamma。
              </span>
              942 个合约的 IV 中位数是
              <span className="dn-tag">43.8%</span>（这是期权链层面的汇总
              统计量，不是任何单一到期的 IV），对应 30D close-to-close RV{' '}
              <span className="dn-tag">29.1%</span>——链层面约 +15pt 的
              richness 信号，<span className="dn-em">不是</span>可直接交易
              的 spread。本次未载入按到期/strike 的 IV、vega、skew 或 term
              structure；下面的 vol 读法只是 framework。
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · 只写证据撑得住的规模</span>
            </h2>

            <div className="dn-trade">
              <span className="dn-side framework">stand-aside · 主仓</span>
              <div className="dn-trade-name">
                集群处无方向性 edge——空仓，thesis 已被杀
              </div>
              <div className="dn-thesis">
                05-15 那笔 squeeze long 已按它自己的失效线关闭（funding 翻正
                并维持）。在 1h RSI 35、带 1h 多头背离、距负 gamma flip 仅 2%、
                周期 MA 梯队仍完整的位置去做空，是低质量入场。本台主仓立场是
                <span className="dn-em">方向性空仓</span>，直到 $77.3k
                D-SMA150 / $76.5k flip 集群以收盘形式给出结论。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">立场</span><span className="dn-lvl-v">方向性空仓 · 不加新风险</span></div>
                <div><span className="dn-lvl-k">决策带</span><span className="dn-lvl-v">$77.3k–$76.5k（D-SMA150 → flip）</span></div>
                <div><span className="dn-lvl-k">上行失效</span><span className="dn-lvl-v">1h 收盘站回 $79.7k 云底</span></div>
                <div><span className="dn-lvl-k">重新介入</span><span className="dn-lvl-v">集群跌穿（空）或反弹确认（多）</span></div>
              </div>
              <div className="dn-gating">
                <b>为何主仓是「什么都不做」：</b>下面仅有的两笔真交易都是
                <i>条件式</i>——一笔等跌破，一笔等守住。在集群给出结论前
                预先押任一边，等于在一个放波 flip 上方 2% 处为一个掷硬币
                付费。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">short · 条件式</span>
              <div className="dn-trade-name">
                flip-break 空，条件：丢 $76.5k + credit 配合
              </div>
              <div className="dn-thesis">
                跌穿 $77.3k D-SMA150 → $76.5k 0-gamma flip，dealer 翻 short
                gamma，−20M @75k / −7.7M @74k pocket 是加速器。这是有 dealer
                map 在背后的方向性交易——但条件是 break 印出来，不是预先押，
                而且鉴于 HY credit 是撑住整个 complex 的唯一一项，它要一个
                宏观确认。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">触发</span><span className="dn-lvl-v bear">1h 收盘 &lt; $76,400（flip 下方）</span></div>
                <div><span className="dn-lvl-k">确认</span><span className="dn-lvl-v">HY OAS &gt; 约 3.0% 收盘（watch）或干净 4h 跟进</span></div>
                <div><span className="dn-lvl-k">止损</span><span className="dn-lvl-v bull">1h 收盘站回 &gt; $77,800</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">$75,000 / $74,000 / 周期锚 watch $72.1k</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R：</b>触发 $76,400，止损 $77,800 = 约 $1,400 风险；
                首目标 $75,000 ≈ $1,400，延伸 $74,000 ≈ $2,400 ≈ 含费前
                1.0–1.7:1。<b>规模：</b>触发上 0.5R，HY-OAS 确认后 +0.3R，
                总 ≤ 0.8R。<b>没有 break 不做</b>——区间内做空没有 edge。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · 小</span>
              <div className="dn-trade-name">
                逆势反弹 scout——超卖 + spot 吸收
              </div>
              <div className="dn-thesis">
                1h 水下金叉 + 1h BULL hidden/regular 背离 + RSI 35 洗过 +
                现货压在 W-EMA20 $78.3k + 4h spot CVD +661 对冲 futures
                CVD −800。一个朝失守的日线 20（$79.0–79.3k）去的战术反弹
                成形。这是
                <span className="dn-em">破了的短周期结构内部的逆势单</span>
                ——小、快，最先被砍。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">scout 入场</span><span className="dn-lvl-v bull">$77,600–78,100</span></div>
                <div><span className="dn-lvl-k">止损</span><span className="dn-lvl-v bear">1h 收盘 &lt; $77,300（D-SMA150）</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">$79,000–79,300（D-EMA20/SMA20）</span></div>
                <div><span className="dn-lvl-k">规模</span><span className="dn-lvl-v">0.25R · $78.8k 减半</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R：</b>入场中点 $77,850，止损 $77,300 = 约 $550 风险，
                目标 $79,000–79,300 = 约 $1,200–1,450 ≈ 2.2–2.6:1。
                <b>硬规则：</b>这笔和 flip-break 空互斥——$77.3k 的 1h
                收盘是两者之间唯一的开关。不向下加仓；D-SMA150 一收破，
                反弹立即失效。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">macro tail · 对冲</span>
              <div className="dn-trade-name">
                downside put-spread——尾部比 05-15 更肥
              </div>
              <div className="dn-thesis">
                rates 事件 +1.80σ、TIPS real +1.92σ、MOVE 债波 +1.68σ（新），
                DXY 偏紧，HY OAS 是撑住整个 complex 的唯一一项。近月 dealer
                gamma 为负。credit revaluation 的凸性比 05-15 更高。规模按
                保险、不按观点；触发主观、非回测。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">结构</span><span className="dn-lvl-v">long $75k / short $71k put</span></div>
                <div><span className="dn-lvl-k">到期</span><span className="dn-lvl-v">29-MAY-26（12d）— 第一个正 GEX 到期</span></div>
                <div><span className="dn-lvl-k">加仓 trigger</span><span className="dn-lvl-v bear">HY OAS &gt; 约 3.0–3.2% 收盘（watch）</span></div>
                <div><span className="dn-lvl-k">规模</span><span className="dn-lvl-v">0.15R（05-15 是 0.10R）</span></div>
              </div>
              <div className="dn-gating">
                <b>说明：</b>3.0–3.2% 的 HY 阈值是主观警戒，不是已检验的
                HY-OAS 断点。strike/premium/Greeks 未载入——结构示意，
                规模待 Deribit 29-MAY chain 拉出来再定。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 唯一的开关</span>
            </h2>

            <p>
              05-15 的 book 已按它自己的失效表退场。退场后的立场是空仓，
              围绕一个水位挂两个条件式触发。哪一个印出来，我们才动，
              不提前：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>集群丢掉（空路径）</td><td className="bear">1h 收盘 &lt; $76,400（flip 下方）</td><td>flip-break 空，HY-OAS 确认</td></tr>
                <tr><td>集群守住 + 超卖（反弹）</td><td className="bull">1h 守 &gt; $77,300 且 1h 多头背离仍在</td><td>scout 多到 D-20，$78.8k 减半</td></tr>
                <tr><td>credit 裂开（尾部）</td><td className="bear">HY OAS &gt; 约 3.0–3.2% 收盘（watch）</td><td>放大尾部对冲，不做多</td></tr>
                <tr><td>站回令两者失效</td><td className="bull">1h 收盘 &gt; $79,700（云底）</td><td>空仓，回到消化读法重评</td></tr>
              </tbody>
            </table>

            <p>
              能改写整份备忘的那一行是：
              <span className="dn-signal">
                1h 收盘越过（向下）$76,400
              </span>
              。它把条件式空变成有 dealer map 在背后的方向性单，作废
              反弹 scout，并把「周期中段完整」的读法变成对 D-SMA50 $75.4k
              周期梯队的实测。在那之前，这是一个盯着一个水位的空仓 book，
              不是一个带观点的仓位。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计追踪 · v1 · 未审计
            </span>
            本备忘<b>尚未</b>经过跨模型敌对式审计。与 05-15 v2（在 codex
            26 项发现的审计后才发布，其中 funding ×100 单位错误为 CRITICAL）
            不同，这是基于单一原子快照（2026-05-17 01:30Z）的单模型综合。
            这里的 funding 年化是 field × 1095（8h 利率已是百分比：
            +0.0046%/8h → +5.0% 年化），与 05-15 的 F-02 修正及实时快照
            banner 一致——但敌对式审计者应重新核验它、SM net-BTC 增量、
            MA 锚点偏移以及 GEX flip 距离，再当作 desk-final。codex 敌对式
            审计待跑；跑完后连同完整审计追踪升级为 v2。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是 Hysteresis Research 内部交易台讨论材料，
            <em>非投资建议、非要约、非任何形式招揽</em>
            ，未对任何收件方个人情况定制。所有数字反映同一原子快照
            （2026-05-17 01:30Z），各节出处见上方数据来源区；部分输入
            明确标记为陈旧或待载入。水位、规模与条件用于说明本台流程，
            不构成持续建议。过往的相关性、gamma 与仓位模式不约束未来盘口。
            衍生品有全损风险；杠杆条件下损失可能超过保证金。
            <em>请自行做研究。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                失效线触发的时候，不跟它争——标记它。
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
            v1 · 2026-05-17 01:30Z · 数据源：live_db.json · mtf_div_latest.html ·
            btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
