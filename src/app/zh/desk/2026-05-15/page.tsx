import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-05-15 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-05-15',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-05-15' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260515() {
  await requireViewer('/zh/desk/2026-05-15');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HR · BTC · 交易台备忘 · 2026-05-15 · v2</span>
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
              <span className="dn-big">$80,951</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+1.70%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-05-15 02:39Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-05-15 02:39Z</td>
                  <td className="dn-flag">最新 · 1 分钟</td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD9</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 02:39Z scan</td>
                  <td className="dn-flag">最新 · 含未收盘 K 线</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 02:14Z scan</td>
                  <td className="dn-flag">滞后 25 分钟 · 日级指标</td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 02:14Z 快照</td>
                  <td className="dn-flag">滞后 25 分钟 · Deribit chain</td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 02:14Z
                  </td>
                  <td className="dn-flag">滞后 25 分钟 · 1h bar</td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 水位</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-05-13 23:59Z</td>
                  <td className="dn-flag">
                    陈旧 2 日 · 偏移已对现货重算
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED 月度 · 源文件标 75 日陈旧</td>
                  <td className="dn-flag">陈旧 · 不作为实时确认</td>
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
              <span className="dn-v bear">−2.10%</span>
              <span className="dn-src">live · 02:39Z</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v">+0.78% → −2.10%</span>
              <span className="dn-src">live_db 24h 截点</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v">+5.95% (+6.2k BTC)</span>
              <span className="dn-src">live · 02:39Z</span>
            </div>
            <div>
              <span className="dn-k">Binance mkt long/short</span>
              <span className="dn-v">38.4 / 61.6</span>
              <span className="dn-src">live_db `mkt_long_pct`</span>
            </div>
            <div>
              <span className="dn-k">top-trader long%</span>
              <span className="dn-v bull">60.86</span>
              <span className="dn-src">live_db `long_pct`</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bull">+23.1k</span>
              <span className="dn-src">live · top-trader long − short</span>
            </div>
            <div>
              <span className="dn-k">SM 24h Δ</span>
              <span className="dn-v bear">−14.0k BTC</span>
              <span className="dn-src">逢强派发</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">43.6% / 27.7%</span>
              <span className="dn-src">GEX IV 中位数 · 936 合约</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              市场卡在两道清楚的墙之间，暂时没人控盘。book 偏多，
              对手是一群拿着负 funding 收钱的拥挤空头；但触发还没来，
              dealer 在压波，不是放波。下面每一处主张都标了它的快照。
            </p>

            <p>
              BTC 现报 <span className="dn-tag">$80,951</span>，被夹在{' '}
              <span className="dn-tag bull">$80k +42M GEX 平台</span> 与{' '}
              <span className="dn-tag bear">$82k +65M GEX 顶</span>{' '}
              之间，后者刚好叠上日线 SMA200{' '}
              <span className="dn-tag stale">$82.3k（陈旧 2 日）</span> 与日线
              EMA200 <span className="dn-tag stale">$82.0k（陈旧 2 日）</span>
              。0-gamma flip 在 <span className="dn-tag">$76,547</span>{' '}
              （相对现货 <span className="dn-tag">−5.4%</span>，GEX 源文件
              以 $81,078 为参考价，显示 +5.9%）。flip 下方，前 10 大墙里唯一
              显示的下行 pocket 是 $75k{' '}
              <span className="dn-tag bear">−14M GEX</span>{' '}
              这一档；完整 strike 分布未载入。regime 分界点很清楚
              <span className="dn-em">——</span>
              <span className="dn-signal">价格必须干净突破 $82k 或丢 $79k</span>
              ，在此之前就是一笔 pin 单加情绪 kicker。
            </p>

            <h2 className="dn-sec">
              Regime <span className="dn-roman">I · 跨资产 + 宏观</span>
            </h2>

            <p>
              跨资产相关性进入<span className="dn-signal">idiosyncratic</span>
              （自身驱动）regime（7d 1h 平均 |r| = 0.234，阈值 0.25）。
              BTC 列表内最强正相关是 NQ <span className="dn-tag">+0.37</span> 与
              SP500 <span className="dn-tag">+0.35</span>
              <span className="dn-em">——</span>相关还在，但绳子已经够松，
              单资产仓位逻辑有空间走出来。自 2026-03-28 基准日，NQ 跑了
              <span className="dn-tag bull">+27.7%</span>、BTC{' '}
              <span className="dn-tag">+22.2%</span>
              <span className="dn-em">——</span>这
              <span className="dn-signal">5.5pt 相对落后</span>
              ，从 funding 盘口看，是仓位结构问题，不是 beta 问题。
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>宏观 tier-1 指标</th>
                  <th>水位</th>
                  <th>regime z</th>
                  <th>30d 事件 z</th>
                  <th>读法</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>US 10Y 名义</td><td className="num">4.46%</td><td className="num bear">+1.56</td><td className="num bear">+1.83</td><td className="bear">risk-off</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">1.99%</td><td className="num bear">+0.69</td><td className="num bear">+1.72</td><td className="bear">偏紧</td></tr>
                <tr><td>HY OAS</td><td className="num">2.82%</td><td className="num bull">−0.75</td><td className="num bull">−0.52</td><td className="bull">宽松</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.524</td><td className="num bull">−0.49</td><td className="num bull">−1.64</td><td className="neut">转松</td></tr>
                <tr><td>DXY</td><td className="num">99.08</td><td className="num bear">+0.62</td><td className="num bear">+1.16</td><td className="bear">偏紧</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.886T</td><td className="num bull">+0.70</td><td className="num bull">+2.47</td><td className="bull">激增</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.35%</td><td className="num bear">+2.47</td><td className="num">+1.18</td><td className="stale">陈旧 75 日 · 不作为依据</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">2.11%</td><td className="num bull">−0.62</td><td className="num bear">+1.83</td><td className="bear">偏紧</td></tr>
              </tbody>
            </table>

            <p>
              宏观盘口的诚实读法：
              <span className="dn-signal">利率向上</span>（事件 +1.83σ），
              叠加 DXY 偏紧（事件 +1.16σ）
              <span className="dn-em">——</span>理论上是个轻滞胀的逆风组合。
              但风险没死，因为 Fed net liquidity 刚印出 +2.47σ 的事件 surge，
              HY 信用又不愿走阔。
              <span className="dn-em">
                能杀风险的条件几乎都到位，只差最关键的那一项——credit。
              </span>
              本台对 HY OAS 的主观警戒线是 3.20%（当前 2.82%）；这个阈值不是
              历史回测推出来的，只作触发线用，不作已检验水位。JGB 虽然挂
              +2.47σ 的 regime tag，但源文件标这条 series 已 75 日陈旧，
              我们不算进战术读数。
            </p>

            <h2 className="dn-sec">
              结构 <span className="dn-roman">II · MTF 图 · 标陈旧</span>
            </h2>

            <p>
              多周期处在<span className="dn-signal">明显分歧</span>
              <span className="dn-em">——</span>这是这笔交易有意思的地方。
              4h 2 根 K 线前在水下印出 MACD 金叉（
              <span className="dn-tag">
                印出时 DIF −129.3, MACDh +68.2；当前 MACDh +124
              </span>
              ）。1h 刚印出零轴上方的死叉（
              <span className="dn-tag">DIF +345, MACDh −5</span>
              ）<span className="dn-em">——</span>一个边界事件：02:16Z 那次
              scan 时 MACDh 一度回到 0 把死叉吃掉，到 02:39Z 又重新印出。
              <span className="dn-em">
                1h 这一格是整份备忘里对快照最敏感的一行；
                在一根干净的 1h 收盘出来之前，把它当作 provisional。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">80,890</td><td className="num">39.2</td><td className="bear">死叉（32 根前）</td><td className="neut">云内 80.6–81.2k</td><td>Buy 4</td><td>BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">80,890</td><td className="num">47.1</td><td className="bear">死叉（11 根前）</td><td className="bull">云上 ↓79.6k</td><td>Buy 2</td><td>BEAR hid · BULL hid</td></tr>
                <tr><td>1h</td><td className="num">80,890</td><td className="num">52.9</td><td className="bear">死叉（刚印）*</td><td className="bull">云上 ↓80.3k</td><td>Buy 2</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>4h</td><td className="num">80,890</td><td className="num">53.0</td><td className="bull">金叉（2 根前）</td><td className="bull">云上 ↓80.8k</td><td>Sell 4</td><td>BEAR hid</td></tr>
                <tr><td>8h</td><td className="num">80,890</td><td className="num">53.5</td><td className="bear">死叉（12 根前）</td><td className="bull">云上 ↓79.7k</td><td>Sell 3</td><td>BEAR reg</td></tr>
                <tr><td>12h</td><td className="num">80,890</td><td className="num">55.7</td><td className="bear">死叉（8 根前）</td><td className="bull">云上 ↓76.7k</td><td>Sell 2</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">80,890</td><td className="num">59.3</td><td className="bear">死叉（3 根前）</td><td className="bull">云上 ↓73.0k</td><td>Buy 3</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>3d</td><td className="num">80,890</td><td className="num">58.3</td><td className="neut">—</td><td className="neut">云内</td><td className="hot">⚡ TD9 SELL</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">80,890</td><td className="num">49.8</td><td className="bull">金叉（4 根前）</td><td className="bear">云下 ↑100.3k</td><td>Sell 5</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    * 1h MACD cross 在 02:16Z 那次 scan 里曾因 MACDh 回到 ~0
                    而消失，到 02:39Z scan 重新印出死叉——视为 provisional
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 梯队很清楚：现货站上
              <span className="dn-tag bull">D-SMA20 $79.1k (+2.40%)</span>、
              <span className="dn-tag bull">D-SMA50 $74.5k (+8.62%)</span>，
              以及周期之锚{' '}
              <span className="dn-tag bull">D-SMA100 $71.8k (+12.78%)</span>；
              阻力是日线 SMA200/EMA200 集群{' '}
              <span className="dn-tag stale">
                $82.0–82.3k (−1.23% 至 −1.59%)
              </span>
              。周线维持<span className="dn-signal">结构性分歧</span>：
              站上 W-EMA20 <span className="dn-tag bull">$78.4k (+3.20%)</span>，
              低于 W-SMA50{' '}
              <span className="dn-tag bear">$94.6k (−14.45%)</span>，
              远高于 W-EMA200{' '}
              <span className="dn-tag bull">$68.9k (+17.54%)</span>。
              这是周期中段的消化结构，不是见顶结构。
              <span className="dn-em">
                所有 MA 水位锚定 2026-05-13 23:59Z 收盘 $79,288；
                上述偏移已对现货 $80,951 重算。
              </span>
            </p>

            <p>
              4h Ichimoku 云在 $80.8k 附近撑住。本次未载入 NTT pivot 数据；
              这里只用云结构，不主张存在独立的 NTT pivot 确认。3D TD9 SELL
              是唯一反对继续追的信号<span className="dn-em">——</span>
              我们把它当作进入 $82–83k 平台时的超买反转警示，作为减仓依据，
              不作已检验的 short trigger；这个读法没有 TD9 forward-return
              study 支撑。
            </p>

            <h2 className="dn-sec">
              仓位结构 <span className="dn-roman">III · 实时盘面</span>
            </h2>

            <p>
              这是整张图最干净的一块，也是我们偏多的理由。过去 24h，
              实时 8h funding 已经从 <span className="dn-tag">+0.78% 年化</span>
              （24h 前截点）走到{' '}
              <span className="dn-tag bear">−2.10% 年化</span>（最新），
              中间 2026-05-15 00:00Z 一次实际结算的年化是{' '}
              <span className="dn-tag bear">−4.64%</span>。同一窗口 OI 增长
              <span className="dn-tag">+5.95%</span>（
              <span className="dn-tag">+6,196 BTC</span>，约 $501M）；funding
              在窗口内翻负，意味着边际新加的是
              <span className="dn-signal">新 short</span>。Binance mkt 散户
              当前 <span className="dn-tag bear">61.6% short</span>；
              top-trader（SM）一侧
              <span className="dn-tag bull">long% 60.86 · net +23.1k BTC</span>
              ，但 24h 内已削掉
              <span className="dn-tag bear">−14.0k BTC</span>
              <span className="dn-em">——</span>逢强派发，不是反手翻空。
            </p>

            <p>
              本 session CVD：Coinbase spot{' '}
              <span className="dn-tag bull">+428 BTC</span>，perp{' '}
              <span className="dn-tag bull">+1,575 BTC</span>。1h 窗口：
              价格 <span className="dn-tag bear">−0.56%</span>、OI{' '}
              <span className="dn-tag bear">−476 BTC</span>、spot CVD{' '}
              <span className="dn-tag bear">Δ −289</span>、futures CVD{' '}
              <span className="dn-tag bull">Δ +138</span>
              <span className="dn-em">——</span>也就是 spot 端温和派发，
              perp 端温和吸收。4h 大单倾向偏多（
              <span className="dn-tag">126 笔大单合计 +57 BTC</span>）。
              <span className="dn-em">
                小结：空头收 funding 而留场、SM 净多但在减、retail 站反方向、
                盘口在消化。
              </span>
              这是一笔有红利的多<span className="dn-em">——</span>但前提是
              <span className="dn-signal">$82k 干净拿下</span>，没拿下之前不算。
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">IV · GEX + IV</span>
            </h2>

            <p>
              dealer aggregate GEX（取 02:14Z 快照）是
              <span className="dn-tag bull">+204.1M/1%</span>（long gamma），
              0-gamma flip 在 <span className="dn-tag">$76,547</span>，
              对现货低 <span className="dn-tag">5.4%</span>。flip 上方
              dealer 压波<span className="dn-em">——</span>恰好对应盘口现在
              显示的 pin 行为。前 10 大墙集中在当前价附近：$82k (+65M)、
              $80k (+42M)、$81.5k (+29M)、$85k (+19M)、$90k (+19M)、$84k (+15M)。
              flip 下方，前 10 大里只显示 $75k −14M 这一档；完整 strike
              分布未载入。今日到期
              <span className="dn-tag">78.5M 0DTE GEX</span>；预期 NY 收盘前
              会有围绕 80–82k strike 集群的 pin bias，但源数据没给
              max-pain、dealer 持仓方向或日内对冲流，所以不当作确定性判断。
            </p>

            <p>
              整条期权链 IV 中位数{' '}
              <span className="dn-tag">936 个合约 43.6%</span>
              （这是期权链层面的汇总统计量，不是任何单一到期的 IV），
              对应 30D RV <span className="dn-tag">27.7%</span>。这是链层面
              的方向性 richness 信号<span className="dn-em">——</span>
              <span className="dn-em">不是</span>一个可以直接拿来卖
              7D short strangle 的 spread。本次未载入按到期/strike 的 IV、
              vega、skew 或 term structure；下面的 vol 思路只是 framework，
              等数据拉出来再 size。
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · 只写证据撑得住的规模</span>
            </h2>

            <div className="dn-trade">
              <span className="dn-side long">long · 主仓</span>
              <div className="dn-trade-name">
                BTC short-squeeze long，条件：突破 $82.3k
              </div>
              <div className="dn-thesis">
                funding 转负付空（−2.10% 年化）；retail 61.6% short；
                SM 净多但在减；dealer flip 上方 long gamma 在 pin；4h MACD
                水下金叉；1h 暂定 death cross。squeeze 燃料是真的，但触发
                要等 1h 干净收盘越过 $82.3k 才扣下。下方给两个执行口：
                区间内 scout，或者等 break。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">scout 入场</span><span className="dn-lvl-v bull">$80,500–80,900</span></div>
                <div><span className="dn-lvl-k">scout 止损</span><span className="dn-lvl-v bear">$79,400（1h 收盘）</span></div>
                <div><span className="dn-lvl-k">首个目标</span><span className="dn-lvl-v">$82,000–82,300</span></div>
                <div><span className="dn-lvl-k">延伸目标</span><span className="dn-lvl-v">$84,800 / $87,500</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R 算式（scout 入场承认偏弱）：</b>
                中点 $80,700，止损风险 $1,300，到首个目标回报 $1,300–1,600
                = 含费前约 1.0–1.2:1。
                <b>偏好执行：</b>1h 干净收盘 &gt; $82,300 后加仓，止损放
                $81,000 重新失守下方 = $1,300 风险对应首延伸 $84,800
                约 2.9:1。<b>仓位：</b>scout 0.4R，确认 break 后 +0.6R，
                总 book ≤ 1.0R。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">rel-val · framework only</span>
              <div className="dn-trade-name">
                BTC vs NQ pair long——ratio 序列就位前不 size
              </div>
              <div className="dn-thesis">
                自 3/28 起以基准 rebase 后相对落后 5.5pt，相关性 0.37 不是
                随机；宏观顺风已经反映在 NQ 价格里，BTC 的仓位顺风还没兑现。
                当前 idiosyncratic regime 让这组 pair trade 有可读性。
                <span className="dn-em">
                  本次未载入 BTC/NQ price-ratio 序列
                </span>
                ——rebase 回报比 ≈0.957，但这不等于价格比率，也不等于
                beta 调整后的敞口。ratio 图建好之前不公布水位。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">结构</span><span className="dn-lvl-v">long BTC / short XYZ100 (xyz:NQ proxy)</span></div>
                <div><span className="dn-lvl-k">规模草案</span><span className="dn-lvl-v">vol-parity ≈ 0.6× BTC notional : 1× NQ notional（RV 27.7%/17%）</span></div>
                <div><span className="dn-lvl-k">入场</span><span className="dn-lvl-v">待定</span></div>
                <div><span className="dn-lvl-k">失效</span><span className="dn-lvl-v">待定</span></div>
              </div>
              <div className="dn-gating">
                <b>定 size 前需要：</b>BTC/NQ price-ratio 序列以 3/28 rebase；
                vol/beta 归一化定义；NQ RV（来自 xyz:XYZ100 K 线）；
                相关性稳定性检查。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side vol">vol · framework only</span>
              <div className="dn-trade-name">
                近月 short vol 接 pin——vol 贵，但暂不 size
              </div>
              <div className="dn-thesis">
                整条期权链 IV 中位数 43.6% 对 30D RV 27.7% 是 +16 vol pt 的
                链层面 richness。flip 上方 dealer long gamma 在压 RV；
                今日 0DTE 78.5M GEX 在 pin。
                <span className="dn-em">
                  但 short strangle 要按 strike 的 IV、premium、Greeks、skew
                </span>
                ——这些本次都没载入。我们不会用链层面中位数 size 这笔。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">候选</span><span className="dn-lvl-v">short 22-MAY $79k / $82k strangle</span></div>
                <div><span className="dn-lvl-k">对冲</span><span className="dn-lvl-v">long $76k put / $84k call（29-MAY wing）</span></div>
                <div><span className="dn-lvl-k">规模</span><span className="dn-lvl-v">待 strike IV / Greeks</span></div>
                <div><span className="dn-lvl-k">失效</span><span className="dn-lvl-v">任一 short strike 被破</span></div>
              </div>
              <div className="dn-gating">
                <b>定 size 前需要：</b>Deribit 22-MAY + 29-MAY chain；
                net credit；breakeven；vega + gamma + theta；term structure；
                25Δ skew；±3σ spot move 的 scenario P&amp;L grid。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">macro tail · 对冲</span>
              <div className="dn-trade-name">
                对主多的小额 downside put-spread
              </div>
              <div className="dn-thesis">
                rates 事件 +1.83σ、DXY 偏紧；HY z −0.75σ 的 credit 错配，
                任何增长担忧催化都可能快速 revalue。规模按保险，不按观点。
                触发是主观判断，不来自回测。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">结构</span><span className="dn-lvl-v">long $77k / short $74k put</span></div>
                <div><span className="dn-lvl-k">到期</span><span className="dn-lvl-v">29-MAY-26（14d）</span></div>
                <div><span className="dn-lvl-k">加仓 trigger</span><span className="dn-lvl-v bear">HY OAS &gt; 3.20% 收盘（watch）</span></div>
                <div><span className="dn-lvl-k">规模</span><span className="dn-lvl-v">0.10R</span></div>
              </div>
              <div className="dn-gating">
                <b>说明：</b>3.20% 阈值是主观警戒线，不是已检验的 HY-OAS
                断点；等 HY-vs-BTC drawdown study 跑出来后再换成可检验阈值。
              </div>
            </div>

            <h2 className="dn-sec">
              失效条件 <span className="dn-roman">VI · 何时退场</span>
            </h2>

            <p>
              只要下面四件事都还成立，book 维持偏多；任一失效，立即降风险：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>失效水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>funding 仍付空头或维持平直</td><td className="bear">8h funding 年化 &gt; +0.5% 持续 24h</td><td>砍 squeeze long，重新评估</td></tr>
                <tr><td>价格守住 1h 云上方</td><td className="bear">1h 收盘 &lt; $79.4k</td><td>主仓平掉，等 $77k tag</td></tr>
                <tr><td>HY 信用不愿走阔</td><td className="bear">HY OAS &gt; 3.20% 收盘（watch）</td><td>放大尾部对冲，整体减半</td></tr>
                <tr><td>3D TD9 SELL 延伸为 bear divergence</td><td className="bear">TD13 之后 3d 收盘 &lt; $79k</td><td>所有方向性仓位归零，等重置</td></tr>
              </tbody>
            </table>

            <p>
              能改写整份备忘的那一行是：
              <span className="dn-signal">
                1h 干净收盘越过 $82.3k
              </span>
              。它把 framework-only 的 rel-val long 变成 directional；
              把 scout squeeze long 变成 runner；把链层面中位数的
              short-vol 思路变成代价高昂的错误<span className="dn-em">——</span>
              所有 short vega 敞口在 break 印出来时就平，不等回踩。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计追踪 · v2 来自 2026-05-15 敌对式审计
            </span>
            codex CLI 0.125.0（xhigh）敌对式审计共 26 项发现
            （4 CRITICAL, 9 HIGH, 9 MED, 3 LOW, 1 NIT）。本版处理全部 11 个
            正确性阻断项：数据来源区（F-01）；funding 单位 ×100 错误修正
            （F-02）；MTF 表逐格复制 02:39Z scan（F-03 / F-06）；
            实时盘面段重新拉取同一原子快照（F-04）；删除 NTT pivot 主张
            （F-05）；BTC/NQ ratio 改为 framework only（F-07）；vol 交易
            改为 framework only 附数据需求清单（F-08 / F-09）；主仓 R/R
            显式拆为 scout 与确认 break 两段（F-10）；squeeze 措辞改为
            条件式（F-11）；JGB 标 stale 75d（F-12）；MA stale 锚点显式
            披露（F-13）。二级修正（F-14 GEX flip 数学 · F-15 max-pain ·
            F-16「唯一结构」措辞 · F-18「rates +27.7%」→「NQ +27.7%」·
            F-19 HY 阈值改为 watch · F-20 TD9 中性化 · F-21「最松绑」
            措辞倒置 · F-25 MACD 括号写法 · F-26 三对四）全部应用。
            原始审计记录留在 desk 仓库。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是 Hysteresis Research 内部交易台讨论材料，
            <em>非投资建议、非要约、非任何形式招揽</em>
            ，未对任何收件方个人情况定制。所有数字反映同一原子快照
            （2026-05-15 02:39Z），各节出处见上方数据来源区；部分输入
            明确标记为陈旧或待载入。水位、规模与失效条件用于说明本台
            流程，不构成持续建议。过往的相关性、gamma 与仓位模式不约束
            未来盘口。衍生品有全损风险；杠杆条件下损失可能超过保证金。
            <em>请自行做研究。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                听盘口的，不听图形脑补的。
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
            v2 · 2026-05-15 02:39Z · 数据源：live_db.json · mtf_div_latest.html ·
            btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
