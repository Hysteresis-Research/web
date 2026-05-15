import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';

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

export default function DeskZh20260515() {
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HR · BTC · 交易台备忘 · 2026-05-15 · v2</span>
          <span>内部 · 仅供讨论 · 经敌意审计</span>
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
              BTC · 现价
              <span className="dn-big">$80,951</span>
              24H&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+1.70%</span>
            </div>
          </div>

          {/* 数据来源清单 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据清单 · 原子快照 2026-05-15 02:39Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘口（现货 / 永续 / 持仓 / 大户 / 资费）</td>
                  <td className="dn-v-cell">live_db.json · 2026-05-15 02:39Z</td>
                  <td className="dn-flag">最新 · 1 分钟</td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD9</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 02:39Z 扫描</td>
                  <td className="dn-flag">最新 · 含未收盘 bar</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观状态 z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 02:14Z 扫描</td>
                  <td className="dn-flag">滞后 25 分钟 · 日级指标</td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 02:14Z 快照</td>
                  <td className="dn-flag">滞后 25 分钟 · Deribit 链</td>
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
                    滞后 2 日 · 偏移已对现价重算
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED 月度 · 源文件标 75 日陈旧</td>
                  <td className="dn-flag">陈旧 · 不作为今日确认</td>
                </tr>
                <tr>
                  <td className="dn-s">
                    NTT 枢轴、max-pain、按行权价 IV、BTC/NQ 比率
                  </td>
                  <td className="dn-v-cell">本次未载入</td>
                  <td className="dn-flag">相关主张明确仅为框架</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dn-meta">
            <div>
              <span className="dn-k">资费 · 8h 年化</span>
              <span className="dn-v bear">−2.10%</span>
              <span className="dn-src">实时 · 02:39Z</span>
            </div>
            <div>
              <span className="dn-k">资费 24h 变动</span>
              <span className="dn-v">+0.78% → −2.10%</span>
              <span className="dn-src">live_db 24h 端点</span>
            </div>
            <div>
              <span className="dn-k">持仓 · 24h</span>
              <span className="dn-v">+5.95% (+6.2k BTC)</span>
              <span className="dn-src">实时 · 02:39Z</span>
            </div>
            <div>
              <span className="dn-k">币安散户多/空</span>
              <span className="dn-v">38.4 / 61.6</span>
              <span className="dn-src">live_db `mkt_long_pct`</span>
            </div>
            <div>
              <span className="dn-k">大户多仓占比</span>
              <span className="dn-v bull">60.86</span>
              <span className="dn-src">live_db `long_pct`</span>
            </div>
            <div>
              <span className="dn-k">大户净多 BTC</span>
              <span className="dn-v bull">+23.1k</span>
              <span className="dn-src">实时 · 大户多减空</span>
            </div>
            <div>
              <span className="dn-k">大户 24h Δ</span>
              <span className="dn-v bear">−14.0k BTC</span>
              <span className="dn-src">逆势派发</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">43.6% / 27.7%</span>
              <span className="dn-src">GEX IV 中位数 · 936 合约</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              市场夹在两面定义清晰的墙之间，而无人扶舵。
              账本偏多对一个被资费惩罚的空头群体，但扳机尚未扣下，
              做市商的盘口在缓和，不在放大。下面的每一处主张都标了它的快照。
            </p>

            <p>
              BTC 现位 <span className="dn-tag">$80,951</span>，被夹在
              <span className="dn-tag bull">$80k +42M-GEX 平台</span> 与
              <span className="dn-tag bear">$82k +65M-GEX 顶</span>
              之间，后者与日线 SMA200{' '}
              <span className="dn-tag stale">$82.3k（陈旧 2 日）</span> 及日线
              EMA200 <span className="dn-tag stale">$82.0k（陈旧 2 日）</span>
              重合。0-gamma 翻转位于 <span className="dn-tag">$76,547</span>{' '}
              （较现价 <span className="dn-tag">−5.4%</span>，GEX 源文件以其自身
              $81,078 参考价显示 +5.9%）。翻转之下，前 10 大伽马墙里唯一显示的
              下方结构是 $75k <span className="dn-tag bear">−14M GEX</span>{' '}
              这一档；完整行权价分布并未载入。状态决定的位置毫不含糊
              <span className="dn-em">——</span>
              <span className="dn-signal">价格必须干净突破 $82k 或失守 $79k</span>
              ，在此之前这是一笔带情绪权重的钉单。
            </p>

            <h2 className="dn-sec">
              状态 <span className="dn-roman">I · 跨资产 + 宏观</span>
            </h2>

            <p>
              跨资产相关性进入<span className="dn-signal">个性化</span>状态（7d
              1h 平均 |r| = 0.234，阈值 0.25）。BTC 列表内最强正相关来自 NQ
              <span className="dn-tag">+0.37</span> 和 SP500
              <span className="dn-tag">+0.35</span>
              <span className="dn-em">——</span>仍系着，但绳子松到单一资产的
              仓位故事可以走出来。自 2026-03-28 基准日，NQ 跑了
              <span className="dn-tag bull">+27.7%</span>，BTC{' '}
              <span className="dn-tag">+22.2%</span>
              <span className="dn-em">——</span>这
              <span className="dn-signal">5.5 个百分点的相对落后</span>
              ，从资费盘口的读数看，是仓位结构问题，不是 beta 问题。
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>宏观一级指标</th>
                  <th>水位</th>
                  <th>状态 z</th>
                  <th>30d 事件 z</th>
                  <th>读法</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>美国 10Y 名义</td><td className="num">4.46%</td><td className="num bear">+1.56</td><td className="num bear">+1.83</td><td className="bear">风险关闭</td></tr>
                <tr><td>10Y TIPS 实际利率</td><td className="num">1.99%</td><td className="num bear">+0.69</td><td className="num bear">+1.72</td><td className="bear">偏紧</td></tr>
                <tr><td>HY OAS（垃圾债利差）</td><td className="num">2.82%</td><td className="num bull">−0.75</td><td className="num bull">−0.52</td><td className="bull">宽松</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.524</td><td className="num bull">−0.49</td><td className="num bull">−1.64</td><td className="neut">转松</td></tr>
                <tr><td>DXY</td><td className="num">99.08</td><td className="num bear">+0.62</td><td className="num bear">+1.16</td><td className="bear">偏紧</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.886T</td><td className="num bull">+0.70</td><td className="num bull">+2.47</td><td className="bull">激增</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.35%</td><td className="num bear">+2.47</td><td className="num">+1.18</td><td className="stale">陈旧 75 日 · 不可依赖</td></tr>
                <tr><td>美日 10Y 利差</td><td className="num">2.11%</td><td className="num bull">−0.62</td><td className="num bear">+1.83</td><td className="bear">偏紧</td></tr>
              </tbody>
            </table>

            <p>
              宏观盘口的诚实读法：
              <span className="dn-signal">利率向上施压</span>（事件 +1.83σ）
              叠加 DXY 偏紧（事件 +1.16σ），一个本该是逆风的浅滞胀脚印。
              但风险没死，因为 Fed 净流动性刚印出 +2.47σ 的事件激增，
              而高收益债利差拒绝走阔。
              <span className="dn-em">
                能杀风险的条件几乎全部到位，只差最关键的那一项——信用。
              </span>
              本台对 HY OAS 的主观警戒线是 3.20%（当前 2.82%）；这个阈值并未由
              历史回测推出，仅作为绊线，不作为已检验水位。JGB 虽然带 +2.47σ 状态标签，
              但源文件标注该序列陈旧 75 日，我们不把它纳入战术读数。
            </p>

            <h2 className="dn-sec">
              结构 <span className="dn-roman">II · MTF 图 · 已标陈旧</span>
            </h2>

            <p>
              多周期处在<span className="dn-signal">明显分歧</span>，这是该交易
              有意思的地方。4h 刚于 2 bar 前在水下印出 MACD 金叉
              （<span className="dn-tag">印出时 DIF −129.3, MACDh +68.2；
              当前 MACDh +124</span>）。1h 刚印出零轴之上的死叉
              （<span className="dn-tag">DIF +345, MACDh −5</span>）——一个
              临界事件：02:16Z 那次扫描中 MACDh 一度回到 0 把死叉吃掉，
              02:39Z 又重新印出。
              <span className="dn-em">
                1h 这一格是整份备忘里对快照最敏感的一行；
                在一根干净的 1h K 线收盘之前，把它的方向视为暂定。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>收盘</th><th>RSI</th><th>MACD 交叉</th><th>Ichimoku 云</th><th>TD</th><th>活动背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">80,890</td><td className="num">39.2</td><td className="bear">死叉 32b 前</td><td className="neut">云内 80.6–81.2k</td><td>Buy 4</td><td>BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">80,890</td><td className="num">47.1</td><td className="bear">死叉 11b 前</td><td className="bull">云上 ↓79.6k</td><td>Buy 2</td><td>BEAR hid · BULL hid</td></tr>
                <tr><td>1h</td><td className="num">80,890</td><td className="num">52.9</td><td className="bear">死叉 0b 前 *</td><td className="bull">云上 ↓80.3k</td><td>Buy 2</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>4h</td><td className="num">80,890</td><td className="num">53.0</td><td className="bull">金叉 2b 前</td><td className="bull">云上 ↓80.8k</td><td>Sell 4</td><td>BEAR hid</td></tr>
                <tr><td>8h</td><td className="num">80,890</td><td className="num">53.5</td><td className="bear">死叉 12b 前</td><td className="bull">云上 ↓79.7k</td><td>Sell 3</td><td>BEAR reg</td></tr>
                <tr><td>12h</td><td className="num">80,890</td><td className="num">55.7</td><td className="bear">死叉 8b 前</td><td className="bull">云上 ↓76.7k</td><td>Sell 2</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">80,890</td><td className="num">59.3</td><td className="bear">死叉 3b 前</td><td className="bull">云上 ↓73.0k</td><td>Buy 3</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>3d</td><td className="num">80,890</td><td className="num">58.3</td><td className="neut">—</td><td className="neut">云内</td><td className="hot">⚡ TD9 SELL</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">80,890</td><td className="num">49.8</td><td className="bull">金叉 4b 前</td><td className="bear">云下 ↑100.3k</td><td>Sell 5</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    * 1h MACD 交叉在 02:16Z 那次扫描中曾因 MACDh 回到 ~0 而消失，
                    在 02:39Z 扫描重新印出死叉 0b——视为暂定状态
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵给出一个干净的阶梯：现价高于
              <span className="dn-tag bull">D-SMA20 $79.1k (+2.40%)</span>、
              <span className="dn-tag bull">D-SMA50 $74.5k (+8.62%)</span>，
              以及周期之锚{' '}
              <span className="dn-tag bull">D-SMA100 $71.8k (+12.78%)</span>；
              阻力是日线 SMA200/EMA200 集群
              <span className="dn-tag stale">
                $82.0–82.3k (−1.23% 至 −1.59%)
              </span>
              。周线维持<span className="dn-signal">结构性混合</span>：
              站上 W-EMA20 <span className="dn-tag bull">$78.4k (+3.20%)</span>，
              但仍低于 W-SMA50{' '}
              <span className="dn-tag bear">$94.6k (−14.45%)</span>，
              远高于周期牛底基线 W-EMA200{' '}
              <span className="dn-tag bull">$68.9k (+17.54%)</span>。
              这是一个周期中段的消化脚印，不是顶部脚印。
              <span className="dn-em">
                所有 MA 水位锚定 2026-05-13 23:59Z 收盘 $79,288；
                以上偏移均对现价 $80,951 重算。
              </span>
            </p>

            <p>
              4h Ichimoku 云在 $80.8k 附近撑住。本次未载入 NTT 枢轴数据；
              这里仅用云结构，不主张存在独立的 NTT 枢轴印证。3D TD9 SELL 是
              唯一不支持向上追的信号——我们把它当作进入 $82–83k 平台时
              削仓的超买反转警示，而非已检验的做空触发；
              此读法不附 TD9 前瞻收益研究。
            </p>

            <h2 className="dn-sec">
              仓位结构 <span className="dn-roman">III · 实时盘口</span>
            </h2>

            <p>
              这是图景中最干净的一块，也是我们偏多的理由。过去 24h，
              实时盘口的 8h 资费年化已从
              <span className="dn-tag">+0.78%</span>（24h 前端点）走到
              <span className="dn-tag bear">−2.10%</span>（最新），
              中间 2026-05-15 00:00Z 一次结算的真实年化是
              <span className="dn-tag bear">−4.64%</span>。OI 在同窗口增长
              <span className="dn-tag">+5.95%</span>（
              <span className="dn-tag">+6,196 BTC</span>，约 $501M），
              而资费在此窗口翻负，意味着边际加仓方向是
              <span className="dn-signal">新空头</span>。币安散户当前
              <span className="dn-tag bear">61.6% 看空</span>；
              大户（top-trader）一侧多仓占比
              <span className="dn-tag bull">60.86 · 净多 +23.1k BTC</span>
              ，但 24h 内已
              <span className="dn-tag bear">削减 −14.0k BTC</span>
              ——逆势派发，非翻向。
            </p>

            <p>
              交易日 CVD：Coinbase 现货
              <span className="dn-tag bull">+428 BTC</span>，永续
              <span className="dn-tag bull">+1,575 BTC</span>。1h 窗口：
              价格 <span className="dn-tag bear">−0.56%</span>，
              OI <span className="dn-tag bear">−476 BTC</span>，
              现货 CVD <span className="dn-tag bear">Δ −289</span>，
              期货 CVD <span className="dn-tag bull">Δ +138</span>
              ——即现货温和派发，期货温和吸收。4h 大单偏向轻微做多
              （<span className="dn-tag">126 笔大单净 +57 BTC</span>）。
              <span className="dn-em">
                小结：空头被资费惩罚而留场，大户净多但在派发，
                散户站错边，盘口在消化。
              </span>
              这是一个有条件偏多的盘面，但前提是
              <span className="dn-signal">$82k 被干净拿下</span>——不是之前。
            </p>

            <h2 className="dn-sec">
              做市商图 <span className="dn-roman">IV · GEX + IV</span>
            </h2>

            <p>
              做市商总 GEX（取 02:14Z 快照）为
              <span className="dn-tag bull">+204.1M/1%</span>（多伽马），
              0-gamma 翻转位 <span className="dn-tag">$76,547</span>，
              当前低于现价 <span className="dn-tag">−5.4%</span>。
              翻转之上做市商抑波——恰好对应盘口正在显示的钉单形态。
              前 10 大墙集中在当前价附近：$82k (+65M)、$80k (+42M)、
              $81.5k (+29M)、$85k (+19M)、$90k (+19M)、$84k (+15M)。
              翻转之下，前 10 大里只显示 $75k −14M 这一档；完整的行权价
              分布未载入。今日到期
              <span className="dn-tag">78.5M 0DTE GEX</span>；
              我们预期在 NY 收盘前会有围绕 80–82k 行权价集群的钉单偏向，
              但源数据未给出 max-pain、做市商持仓方向或日内对冲流，
              因此不作为确定性判断。
            </p>

            <p>
              IV 中位数{' '}
              <span className="dn-tag">936 合约横跨链 43.6%</span>
              （一个跨链汇总统计量，并非任何单一到期的 IV），对应 30D 已实现
              <span className="dn-tag">27.7%</span>。这是链级别的方向性
              「贵」信号，<span className="dn-em">不是</span>一个可交易的
              7 日宽跨式价差。本次未载入按到期/行权价的 IV、vega、skew 或
              term structure；下面的 vol 思路仅作为框架，待上述数据载入后再定型。
            </p>

            <h2 className="dn-sec">
              交易清单 <span className="dn-roman">V · 按可证据规模配置</span>
            </h2>

            <div className="dn-trade">
              <span className="dn-side long">多 · 主仓</span>
              <div className="dn-trade-name">
                BTC 空头挤仓做多，条件：突破 $82.3k
              </div>
              <div className="dn-thesis">
                资费翻成付空头（−2.10% 年化），散户 61.6% 看空，
                大户净多但在派发，做市商翻转之上多伽马在钉单，4h MACD 水下金叉，
                1h 死叉暂定。挤仓燃料是真的，但扳机要等到 1h 收盘越过
                $82.3k 才扣下。下方给两个执行窗口：区间里试探仓位，或等突破。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">试探入场</span><span className="dn-lvl-v bull">$80,500–80,900</span></div>
                <div><span className="dn-lvl-k">试探止损</span><span className="dn-lvl-v bear">$79,400 (1h 收盘)</span></div>
                <div><span className="dn-lvl-k">首个目标</span><span className="dn-lvl-v">$82,000–82,300</span></div>
                <div><span className="dn-lvl-k">延伸目标</span><span className="dn-lvl-v">$84,800 / $87,500</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R 算式（试探入场承认偏弱）：</b>{' '}
                中点 $80,700，至止损风险 $1,300，至首个目标回报
                $1,300–1,600 = 含费前约 1.0–1.2:1。
                <b>偏好执行：</b>等 1h 干净收盘 &gt; $82,300 后加仓，
                止损放 $81,000 重夺之下 = $1,300 风险对首延伸 $84,800
                ≈ 2.9:1。<b>仓位：</b>试探 0.4R，突破确认后追 +0.6R，
                总仓位 ≤ 1.0R。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">仅为框架</span>
              <div className="dn-trade-name">
                BTC vs NQ 相对价值多——比率序列就位前不配置规模
              </div>
              <div className="dn-thesis">
                自 3/28 起以基准 rebase 的相对落后 5.5pt，相关性 0.37
                不算随机；NQ 已把宏观顺风价进去，BTC 的仓位顺风还在前面。
                个性化状态让这一对可读。
                <span className="dn-em">
                  本次未载入 BTC/NQ 比率序列
                </span>
                ——rebase 后的回报比 ≈0.957，但这不等于价格比率或 beta 调整后
                的暴露。比率图建好前不公布水位。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">结构</span><span className="dn-lvl-v">多 BTC / 空 XYZ100 (xyz:NQ 代理)</span></div>
                <div><span className="dn-lvl-k">规模草案</span><span className="dn-lvl-v">波动率平价 ≈ 0.6× BTC 名义 : 1× NQ 名义 (RV 27.7%/17%)</span></div>
                <div><span className="dn-lvl-k">入场</span><span className="dn-lvl-v">待定</span></div>
                <div><span className="dn-lvl-k">失效</span><span className="dn-lvl-v">待定</span></div>
              </div>
              <div className="dn-gating">
                <b>定规模前需要：</b>BTC/NQ 价格比率序列以 3/28 重基，
                波动率/beta 归一化定义，NQ 已实现波动率来自 xyz:XYZ100 K 线，
                相关性稳定性检查。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side vol">vol · 仅为框架</span>
              <div className="dn-trade-name">
                前月做空波动率以接钉单——溢价富但未定规模
              </div>
              <div className="dn-thesis">
                跨链 IV 中位数 43.6% 对 30D RV 27.7% 是链级别 +16 个波动点的
                「贵」信号。做市商翻转之上多伽马抑制已实现波动；今日 0DTE
                78.5M GEX 在钉。
                <span className="dn-em">
                  做空宽跨式需要按行权价的 IV、权利金、希腊字母、skew
                </span>
                ——这些本次全未载入。我们不会用跨链中位数定这笔交易的规模。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">候选</span><span className="dn-lvl-v">空 22-MAY $79k / $82k 宽跨式</span></div>
                <div><span className="dn-lvl-k">对冲</span><span className="dn-lvl-v">多 $76k put / $84k call (29-MAY 翼)</span></div>
                <div><span className="dn-lvl-k">规模</span><span className="dn-lvl-v">待行权价 IV/Greeks 拉取</span></div>
                <div><span className="dn-lvl-k">失效</span><span className="dn-lvl-v">两侧行权价任一被破</span></div>
              </div>
              <div className="dn-gating">
                <b>定规模前需要：</b>Deribit 22-MAY + 29-MAY 链、净权利金、
                盈亏平衡、vega + gamma + theta、term structure、25Δ skew、
                ±3σ 现价情景 P&amp;L 网格。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">宏观尾部 · 对冲</span>
              <div className="dn-trade-name">
                对主仓多头的小额下行 put 价差
              </div>
              <div className="dn-thesis">
                利率事件 +1.83σ，DXY 偏紧；信用错配（HY z −0.75σ）
                可在任何增长惊吓催化下迅速重定价。规模按保险配置，不按观点。
                触发是主观判断，不源自回测。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">结构</span><span className="dn-lvl-v">多 $77k / 空 $74k put</span></div>
                <div><span className="dn-lvl-k">到期</span><span className="dn-lvl-v">29-MAY-26 (14d)</span></div>
                <div><span className="dn-lvl-k">加仓触发</span><span className="dn-lvl-v bear">HY OAS &gt; 3.20% 收盘 (观察)</span></div>
                <div><span className="dn-lvl-k">规模</span><span className="dn-lvl-v">0.10R</span></div>
              </div>
              <div className="dn-gating">
                <b>说明：</b>3.20% 阈值是主观警戒线，并非检验过的 HY-OAS
                断点；待 HY-vs-BTC 回撤研究跑出来后再换为可检验阈值。
              </div>
            </div>

            <h2 className="dn-sec">
              止损条件{' '}
              <span className="dn-roman">VI · 何时退场</span>
            </h2>

            <p>
              当下面四件事同时成立，我们持有偏多账本。任一不再成立，立即拆解：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>退场水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>资费持续付空头或保持平直</td><td className="bear">8h 资费年化 &gt; +0.5% 持续 24h</td><td>砍挤仓多，重新评估</td></tr>
                <tr><td>价格守住 1h 云上</td><td className="bear">1h 收盘 &lt; $79.4k</td><td>主仓平掉，准备打 $77k 触摸</td></tr>
                <tr><td>HY 信用拒绝走阔</td><td className="bear">HY OAS &gt; 3.20% 收盘 (观察)</td><td>加大尾部对冲，整体减半</td></tr>
                <tr><td>3D TD9 SELL 延伸至 bear 背离</td><td className="bear">TD13 之后 3d 收盘 &lt; $79k</td><td>所有方向性仓位归零，等重置</td></tr>
              </tbody>
            </table>

            <p>
              能改写整份备忘的那一行是
              <span className="dn-signal">
                1h 干净收盘越过 $82.3k
              </span>
              。它把仅为框架的相对价值多转成方向性、把试探挤仓多转成奔跑者、
              把跨链中位数的空波动思路变成代价高昂的错误
              ——任何空 vega 暴露在突破印出时就平，不在回测时平。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计追踪 · v2 派生自 2026-05-15 敌意审计
            </span>
            codex CLI 0.125.0 (xhigh) 敌意审计共 26 项发现
            (4 CRITICAL, 9 HIGH, 9 MED, 3 LOW, 1 NIT)。本版处理全部 11 个
            正确性 blocker：数据清单条带 (F-01)、修正 funding ×100 单位错
            (F-02)、MTF 表逐 cell 复制 02:39Z 扫描 (F-03 / F-06)、
            实时盘口段重抽原子切片 (F-04)、删除 NTT 枢轴主张 (F-05)、
            BTC/NQ 比率改为仅框架 (F-07)、vol 交易改为仅框架附必备数据清单
            (F-08 / F-09)、主仓 R/R 显式拆分为试探与突破确认 (F-10)、
            挤仓措辞改为条件式 (F-11)、JGB 标陈旧 75 日 (F-12)、
            MA 陈旧锚定明示 (F-13)。二级修正（F-14 GEX 翻转算式 · F-15
            max-pain · F-16 「唯一结构」措辞 · F-18「rates +27.7%」→「NQ +27.7%」·
            F-19 HY 阈值改为主观警戒线 · F-20 TD9 措辞中性化 · F-21
            「最松绑」措辞倒置 · F-25 MACD 括号写法 · F-26 三对四）全部应用。
            原始审计记录留存于交易台仓库。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是 Hysteresis Research 内部交易台为讨论用而准备的工件，
            <em>非投资建议、非要约、非任何形式的招揽</em>
            ，且未针对任何收件方的个人情况定制。所有数字反映单一原子快照
            （2026-05-15 02:39Z），各节出处见上方清单条带；部分输入明确标记为
            陈旧或待载入。水位、规模与止损条件用于说明本台流程，
            不构成持续建议。过往的相关性、伽马与仓位模式不约束未来的盘口。
            衍生品有全损风险；杠杆条件下损失可能超过保证金。
            <em>请自行做研究。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                做盘口给的交易，不是图形暗示的交易。
              </div>
              <div className="dn-sign-name">交易台 · BTC 衍生品</div>
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
