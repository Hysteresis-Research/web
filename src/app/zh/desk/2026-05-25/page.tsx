import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-05-25 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-05-25',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-05-25' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260525() {
  await requireViewer('/zh/desk/2026-05-25');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HR · BTC · 交易台备忘 · 2026-05-25 · v2</span>
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
              <span className="dn-big">$77,195</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.66%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-05-25 00:08Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-05-25 00:08Z（pin 锁定）</td>
                  <td className="dn-flag">最新 · 1 分钟 · 审计时文件 tail 在 00:10Z</td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-05-25 00:01Z scan</td>
                  <td className="dn-flag">
                    滚动 latest 文件（约每 15 分钟重写）· 较快照锚滞后约 7
                    分钟 · 含未收盘 K 线 · 扫描存档于
                    audits/2026-05-25-desk-note.md
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 00:00Z 快照</td>
                  <td className="dn-flag">最新 · Deribit idx $77,162 对现货 $77,195 · 930 合约</td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 00:00Z
                  </td>
                  <td className="dn-flag">滞后约 8 分钟 · 7d 1h bar · 22 资产</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-05-24 22:17Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.9h · FRED Tier-1 较 05-24 数无变化 ·
                    下一轮 FRED Tier-1 在今日美国时段印
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-05-25 00:06Z</td>
                  <td className="dn-flag">
                    较快照锚滞后约 2 分钟 · 偏移按现货重算
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
              <span className="dn-v bear">+7.12%</span>
              <span className="dn-src">live · 00:08Z · 24h 均值 +8.90% · 多头付费有所降温</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v">+9.90% → +7.12%</span>
              <span className="dn-src">区间 +6.47% / +10.95% · 净下行（388 分钟正 · 424 负 · 628 平）</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−3.73%（−3,842 BTC）</span>
              <span className="dn-src">live · short_btc −9.69k（回补）；long_btc +1.40k</span>
            </div>
            <div>
              <span className="dn-k">Binance mkt long/short</span>
              <span className="dn-v">53.96 / 46.04</span>
              <span className="dn-src">live_db `mkt_long_pct` · 拥挤度继续走薄 55.23 → 53.96</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−13.7k（净 SHORT）</span>
              <span className="dn-src">live · long 11.05k − short 24.76k</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 05-24 备忘</span>
              <span className="dn-v bull">−24.9k → −13.7k</span>
              <span className="dn-src">峰值 −8.99k @ 2026-05-24 06:36Z · 回补步在 05:11Z + 05:16Z（BJ 13:11/13:16）</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">42.5% / 26.3%</span>
              <span className="dn-src">GEX IV 中位数 · 930 合约</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+1.59%（在上方）</span>
              <span className="dn-src">flip $75,969 · aggregate GEX +65.1M（前 +83.8M）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              昨天「按兵不动」的判断之后，盘面只发生了两件事。第一件：
              <span className="dn-signal">SM 回补——五分钟内 SM net
              +14.7k（−23.83k → −9.12k）、06:36Z 触及当日峰值
              −8.99k、之后又重新加空回到 −13.71k</span>。
              2026-05-24 05:11Z + 05:16Z 两个离散一分钟印（BJ 13:11/13:16）：
              第一步 05:11Z 在簇上 <span className="dn-tag">$76,730.00</span>
              开了 +5.2k 的多头（long_btc 9.5k → 14.7k）；
              第二步五分钟之后 05:16Z 在 <span className="dn-tag">$76,730.19</span>
              平掉 −9.9k 的空头（short_btc 33.5k → 23.6k）；
              SM net 五分钟之内由 <span className="dn-tag">−23.83k</span>
              走到 <span className="dn-tag">−9.12k</span>。
              和 05-22 06:30Z、05-23 05:00Z 完全同一型的硬步——
              只是这次方向反过来。第二件：
              <span className="dn-signal">价格没有跟</span>。
              现货从回补的 $76,730 走到 24h 高
              <span className="dn-tag">$77,353</span>（10:27Z，
              +$623 / +0.81%）就被卖回去；之后跌到 24h 低
              <span className="dn-tag">$76,122</span>（21:59Z，距回补
              −$608）；又反弹回到现报
              <span className="dn-tag">$77,195</span>（24h +0.66%、
              距回补步 +$465）。昨天 05-24 写下的 squeeze 启动条件
              （SM &gt; −10k 持续 &gt; 4h 且 1h 收盘 &gt; $76,827）
              恰恰差一点没满足——SM 在 −10k 之上待了
              <span className="dn-tag">3h 9min</span>（05:16Z → 08:25Z），
              比 4h 门槛短了 51 分钟；而 1h 收盘越过簇顶的几根
              （09–12Z、23Z、00Z）多数发生在 SM 已经漂回 −10k 之下之后。
              按规则字面：「按兵不动」是对的；按实质：squeeze 确实
              ratify 了（回补出现、价格冲了 +$623、然后被供给吃掉），
              本台没接住。<span className="dn-em">
                仓位面已经明显松——空 24.76k 对昨天的 34.55k、
                多 11.05k 对 9.66k；funding 由 +9.9% 高点降至 +7.12%；
                簇略松但仍盖着现货；dealer +gamma 从 +83.8M 减到
                +65.1M、仍在抑制半边。昨天那套不对称（空头创纪录 +
                多头费创纪录 + dealer 钉）已经用掉了一半。剩下的是
                一个更中性的盘整、燃料过半、SM 慢节奏在重新加空：
                自 05:17Z −9.1k 漂到现在 −13.7k，约 −269 BTC/小时，
                没有硬步——节奏在动、动力不大。
              </span>
            </p>

            <p>
              BTC 现报 <span className="dn-tag">$77,195</span>、24h
              +0.66%，在新 <span className="dn-tag">0-γ flip $75,969</span>
              上方 +1.59%（flip 较昨天 $75,768 漂上 $201）；
              仍被一组日 MA 簇盖住，只是今天比昨天更宽：
              簇下三线—— <span className="dn-tag">D-SMA50 $76,908 (+0.37%)</span>、
              <span className="dn-tag">D-EMA100 $76,840 (+0.46%)</span>、
              <span className="dn-tag">D-SMA150 $76,726 (+0.61%)</span>；
              簇上两线——<span className="dn-tag bear">D-EMA50 $77,813 (−0.79%)</span>
              、<span className="dn-tag bear">W-EMA20 $78,049 (−1.09%)</span>。
              aggregate dealer gamma <span className="dn-tag bull">+65.1M/1%</span>
              （前 +83.8M——减了 $18.7M 仍在抑制半边）。
              SM 由 <span className="dn-tag bear">−24.9k</span> 24h 前
              经一道回补窗口缩到 <span className="dn-tag bear">−13.7k</span>，
              其余时间慢节奏在重新加空。funding 已冷却到
              <span className="dn-tag">+7.12% 年化 live</span>，24h 均
              <span className="dn-tag">+8.90%</span>（峰值 +10.95% 出在
              回补当时、之后随追涨者退场而缓和；分钟级 388 正 / 424 负 /
              628 平——净下行）。OI <span className="dn-tag bear">
              −3.73%（−3,842 BTC）</span>是 SM 回补的结构脚印
              （short 侧 −9.69k、long 侧 +1.40k，其余由非 SM 账户重新
              开仓填回）。Binance 散户 <span className="dn-tag">mkt_long_pct
              53.96%</span>（从 55.23%）——继续走薄、散户没有追这一波。
              <span className="dn-em">
                一句话读：回补印在簇上、价格没有走出去。dealer 把上盖
                按住了；簇顶在 $77,350 一带把供给吐出来；现货在 $1,231
                的日内幅度里圆了一圈；SM 已在慢节奏地重新加空。flip
                $75,969 之下，regime 反转回放大半边、$75k −27.1M 的口袋
                重新上膛；$77,813 之上是下一层（D-EMA50 / W-EMA20 /
                W-EMA150）的墙。簇仍是开关。
              </span>
            </p>

            <h2 className="dn-sec">
              仓位结构 <span className="dn-roman">I · 实时盘面 · 回补没把价格抬起来</span>
            </h2>

            <p>
              SM 回补是这一节真正重要的格子。
              <span className="dn-tag">2026-05-24 05:11Z（BJ 13:11）</span>
              、现货 <span className="dn-tag">$76,730.00</span>（前一分钟
              05:10Z 现货 $76,738.86）：long_btc
              一分钟之内从 <span className="dn-tag">9,515</span> 跳到
              <span className="dn-tag">14,723</span>——+5.2k 多头开进簇里，
              short_btc 基本未动（33,344 → 33,485）；SM net 由
              <span className="dn-tag">−23.83k</span> 到
              <span className="dn-tag">−18.76k</span>。五分钟之后
              <span className="dn-tag">05:16Z（BJ 13:16）</span>
              、现货 <span className="dn-tag">$76,730.19</span>：
              short_btc 一分钟之内从 <span className="dn-tag">33,485</span>
              跳到 <span className="dn-tag">23,585</span>——
              −9.9k 空头关掉，long_btc 略微回吐（14,723 → 14,464）；
              SM net 由 <span className="dn-tag">−18.76k</span> 到
              <span className="dn-tag">−9.12k</span>。两步合计：
              五分钟之内 +14.7k 的 net 变化、两条腿都参与（开多 + 平空）、
              发生位置都在 <span className="dn-tag">$76,730 附近</span>
              ——刚好簇中。形态和 05-22 06:30Z、05-23 05:00Z 的两次硬步
              一模一样：北京下午一根小时之内两个离散分钟印、规模足够
              一举重做账本——只是这次方向反了。SM 峰值（最小净空）落在
              <span className="dn-tag">2026-05-24 06:36Z，
              −8,992 BTC</span>，现货 <span className="dn-tag">$76,757</span>。
              从 −8.99k 峰值起 SM 在 −10k 之上停留了
              <span className="dn-tag">189 分钟（3h 9min、05:16Z →
              08:25Z）</span>，之后慢慢漂回：小时取样 −9.1k → −10.0k
              (08:00Z) → −10.4k (09:00Z) → −11.4k (10:00Z) → −11.9k
              (12:00Z) → −12.3k (15:00Z) → −13.0k (17:00Z) → −13.4k
              (22:00Z) → −13.7k（00:00Z 现报）。慢、连续、没有硬步。
              从 −8.99k 到 −13.71k：~17.5 小时 −4.7k 的漂移
              （~−269 BTC/小时）——这就是今天 SM 在 dealer 抑制和簇顶
              供给两边夹缝中愿意重新加空的胃口。
              <span className="dn-em">
                回补出现了。只是没有转换。现货向上 +$623 到 $77,353
                被卖回；向下 −$608 到 $76,122 被买起；现报距回补 +$465
                ——前后扣完几乎为零。仓位面把 squeeze 燃料吸收了、没
                付出代价。
              </span>
            </p>

            <p>
              杠杆面给的是同样的「软结果」读。funding live
              <span className="dn-tag">+7.12% 年化</span>——较昨天
              <span className="dn-tag">+9.90% 快照</span>和 24h 高点
              <span className="dn-tag">+10.95%</span>都下来了（高点出现
              在 01:00–05:00Z 还在堆空时一次、19:00–21:00Z 追涨者拥进
              来时再来一次——两次都是多头付得很狠然后回落）。24h 均
              <span className="dn-tag">+8.90%</span>，分钟级
              <span className="dn-tag">388 正 / 424 负 / 628 平</span>
              （净下行）。OI 最干净：<span className="dn-tag bear">
              −3,842 BTC（−3.73%）</span>，体量基本对应 SM 短头平掉的
              −9.69k（剔除非 SM 账户在空腾出的位置上重新开了大约一半）。
              散户 <span className="dn-tag">mkt_long_pct 53.96%</span>
              （从 55.23%）——反弹里继续走薄、没追。perp 较现货
              <span className="dn-tag bear">−$88.71</span> 折价（1h 均
              −$93、区间 −$144 / −$52；24h 均 −$100）——较昨天 −$106
              略收窄但结构上仍负；<span className="dn-em">
                离岸现货买盘仍领先、期货下单簿结构性贴水、正向 funding
                叠加在负基差之上——读法是：这里的正 funding 不是被一个
                可交易的 cash-and-carry 给付的、而是被杠杆 perp 持仓
                自己滚出来付的
              </span>。1 分钟 aggressor skew_agg 快照
              <span className="dn-tag">+18.1</span>（1h 均 −2.2、区间
              −51 / +40；24h 均 +0.6——按点读、不按窗口读）。
            </p>

            <p>
              分窗 flow 给当天的 round-trip 一个上下文。
              24h：价格 <span className="dn-tag bull">+0.66%</span>，OI
              <span className="dn-tag">−3,842 BTC</span>，spot CVD
              <span className="dn-tag bull">Δ +6,416</span>，futures CVD
              <span className="dn-tag bull">Δ +547</span>，big-print
              <span className="dn-tag bull">+769 BTC / 656 印</span>，
              taker-net <span className="dn-tag bull">+547</span>——
              <span className="dn-em">
                这是现货带的一天，和昨天的「期货带、现货供给」完全反过来：
                spot CVD bid +6.4k 而 futures CVD 只 +547。现货侧在
                干活、perp 在主要关风险
              </span>。4h（到快照）：价格
              <span className="dn-tag bull">+0.60%</span>，OI
              <span className="dn-tag">−1,033 BTC</span>，spot CVD
              <span className="dn-tag bull">Δ +1,143</span>，futures CVD
              <span className="dn-tag bull">Δ +440</span>，big-print
              <span className="dn-tag bull">+440 BTC / 116 印</span>，
              taker-net <span className="dn-tag bull">+440</span>——
              21:59Z 低位之后的新一波现货买。1h：价格
              <span className="dn-tag bull">+0.40%</span>，OI
              <span className="dn-tag">−258 BTC</span>，spot CVD
              <span className="dn-tag bull">Δ +734</span>，futures CVD
              <span className="dn-tag">Δ +55</span>，big-print
              <span className="dn-tag bull">+9 BTC / 24 印</span>，
              taker-net <span className="dn-tag bull">+55</span>——
              最高分辨率上同样形态、perp 几乎不动。按顺序读：当天是
              一个 $1,231 的 round-trip，全程由现货向簇里磨高，最近 1h+
              从 $76,122 起的反弹是现货在磨而非追。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 地图 · 中周期上、1h 反向、钉位松了</span>
            </h2>

            <p>
              今天的 MTF 结构是个
              <span className="dn-signal">
                分裂图：中周期（4h / 8h / 12h）印了新的水下金叉
                （12h 这一根才 1 bar 前印出），同一时间 1h 印了水上死叉
                （早期下行探测）；快周期（15m / 30m）在云上、RSI 60s
                温
              </span>。1h 这道反向才是要标的格子——水上死叉是 runbook
              分类里「DIF 水上的早期死叉」（多转空探测），出现在最
              快有意义的 TF 上、和中周期的反向探测同 bar 出现，这是
              「迟疑钉位」的结构形状、不是翻转。RSI：1h
              <span className="dn-tag">58.5</span>、30m
              <span className="dn-tag">60.8</span>、15m
              <span className="dn-tag">60.2</span>——温而不过头；4h
              <span className="dn-tag">53.7</span>、8h
              <span className="dn-tag">49.1</span>、12h
              <span className="dn-tag">46.4</span>、1d
              <span className="dn-tag">47.4</span>——都在 50 附近。
              云图：15m / 30m 云上（刚穿）；1h 云上 2b（很新）；4h 云下
              3b（↑ 77.1k 云顶阻力）；8h 云下 27b（↑ 78.8k）；12h 云下
              5b（↑ 78.0k）；1d 云上 39b（↓ 75.1k）；3d 云内
              (73.5k–93.0k)；1w 云下 17b（↑ 100.3k）；1M 云上 27b。
              <span className="dn-em">
                和昨天一样是「coil vs 决定尝试」：快周期支持向上延续、
                中周期印的早期反转能配合延续、但 1h 在错误时刻印了
                早期死叉、且 4h / 8h / 12h 的云顶仍压在 $77.1k–78.8k
                上方。MTF 允许这一波回补反弹继续推到簇顶，但还没
                ratify regime 翻出 coil。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活动背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">77,101</td><td className="num">60.2</td><td className="bull">金叉（水下）7b</td><td className="bull">云上 ↓76.9k 2b</td><td>Sell 4</td><td>BEAR hid · BEAR reg · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">77,107</td><td className="num">60.8</td><td className="bull">金叉（水下）3b</td><td className="bull">云上 ↓77.1k 刚穿</td><td>Sell 5</td><td>BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">77,107</td><td className="num">58.5</td><td className="bear">死叉（水上）10b</td><td className="bull">云上 ↓76.0k 2b</td><td>Sell 3</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">77,107</td><td className="num">53.7</td><td className="bull">金叉（水下）6b</td><td className="bear">云下 ↑77.1k 3b</td><td>Buy 1</td><td>BEAR hid</td></tr>
                <tr><td>8h</td><td className="num">77,107</td><td className="num">49.1</td><td className="bull">金叉（水下）3b</td><td className="bear">云下 ↑78.8k 27b</td><td>Sell 4</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>12h</td><td className="num">77,101</td><td className="num">46.4</td><td className="bull">金叉（水下）1b · 刚印</td><td className="bear">云下 ↑78.0k 5b</td><td>Sell 2</td><td>BEAR hid</td></tr>
                <tr><td>1d</td><td className="num">77,107</td><td className="num">47.4</td><td className="bear">死叉（水上）13b</td><td className="bull">云上 ↓75.1k 39b</td><td>Buy 4</td><td>BEAR reg</td></tr>
                <tr><td>3d</td><td className="num">77,107</td><td className="num">51.6</td><td className="neut">—</td><td className="neut">云内 73.5–93.0k 7b</td><td>Buy 4</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">77,107</td><td className="num">46.0</td><td className="bull">金叉（水下）6b</td><td className="bear">云下 ↑100.3k 17b</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">77,101</td><td className="num">49.0</td><td className="neut">—</td><td className="bull">云上 ↓46.9k 27b</td><td>Buy 7</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    源：mtf_div_latest.html 00:01Z scan（滚动 latest 文件；
                    本份在 audits/2026-05-25-desk-note.md 中逐字存档）。
                    标题告警：<em>12h 水下金叉 刚印 1b</em>——最慢的
                    日内 TF 上的早期反转探测；和 4h+8h 的水下金叉
                    6b/3b 一致。反向信号：<em>1h 水上死叉 10b 前</em>——
                    最快有意义 TF 上的早期死叉、方向相反。本次扫描
                    无活动 ⚡TD9。close 均为未收盘 bar、每个值在该 TF
                    收盘前都按临时数读。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵今天比昨天宽、但仍把现货钉在里头。
              <span className="dn-signal">
                簇下三条日 MA 在现货以下 $469 之内、簇上两条在现货
                以上 $854 之内
              </span>：簇下——<span className="dn-tag">D-SMA50 $76,908
              (+0.37%)</span>、<span className="dn-tag">D-EMA100 $76,840
              (+0.46%)</span>、<span className="dn-tag">D-SMA150 $76,726
              (+0.61%)</span>；簇上——<span className="dn-tag bear">
              D-EMA50 $77,813 (−0.79%)</span>、
              <span className="dn-tag bear">W-EMA20 $78,049 (−1.09%)</span>。
              再上一层是 <span className="dn-tag bear">W-EMA150 $78,274
              (−1.38%)</span>、<span className="dn-tag bear">D-SMA20
              $78,833 (−2.08%)</span>、<span className="dn-tag bear">
              D-EMA150 $79,050 (−2.35%)</span>，
              再上是 <span className="dn-tag bear">D-SMA200/EMA200
              $80.4–81.5k (−3.99% / −5.24%)</span>的天花板。簇下：薄薄
              一层 <span className="dn-tag bull">W-SMA20 $74,325
              (+3.86%)</span>，然后是
              <span className="dn-tag bull">W-EMA200 $73,736 (+4.69%)</span>
              / <span className="dn-tag bull">D-SMA100 $72,759 (+6.10%)</span>
              这条周期锚的长跑道。远上方且未用：W-EMA50
              <span className="dn-tag bear">$84.9k (−9.09%)</span>、
              W-EMA100 <span className="dn-tag bear">$83.3k (−7.32%)</span>、
              W-SMA100 <span className="dn-tag bear">$88.4k (−12.64%)</span>、
              W-SMA50 <span className="dn-tag bear">$93.4k (−17.38%)</span>。
              <span className="dn-em">
                W-SMA150 / W-SMA200 仍不可计算——parquet 历史 126 根
                周线、短于两窗口；W-EMA150 $78,274 (−1.38%) 与 W-EMA200
                $73,736 (+4.69%) 能显示是因为 EMA 由已有历史种入。
                所有 MA 锚定 parquet 最末 bar 2026-05-25 00:06Z（close
                $77,101）；偏移按 live 现货 $77,195 重算。展示 MA 取整
                到美元、偏移按精确序列值计算。钉位较昨天 $113 带松了
                （同样这五条 MA 今天跨 ~$1,323，从簇下 D-SMA150 到
                簇上 W-EMA20），但仍机械上把当天大部分行情圈在里头。
              </span>{' '}
              簇上边界（$77,813 D-EMA50 / $78,049 W-EMA20 / $78,274
              W-EMA150）是 squeeze 要拿下才能转换的墙；这一波没靠近过
              $400（高 $77,353）。
            </p>

            <h2 className="dn-sec">
              Dealer 图 <span className="dn-roman">III · GEX 降到 +65.1M · flip 漂上 · 前段更重的正</span>
            </h2>

            <p>
              dealer 总 gamma 降到 <span className="dn-tag bull">
              +65.1M/1%</span>，较昨天 +83.8M 减了 ~$18.7M——仍稳稳在
              regime 抑制半边。0γ flip <span className="dn-tag">漂上
              $201 到 $75,969</span>（前 $75,768）。现货 $77,195 距
              flip <span className="dn-tag bull">+1.59%</span>（按现货
              算）；GEX 文件自己写的 dist 是 <span className="dn-em">
              +1.6%</span>（按 Deribit-idx $77,162 算，idx 比 live 现货
              低 $33——四舍五入对齐）。flip 之上 dealer 多 gamma、对冲
              流 <span className="dn-em">抑制</span>下一波——就是昨天
              把 squeeze 顶在 $77,400 之内、把 round-trip 框在 $1,231
              内的那本账。正向上方加重在承重墙上：
              <span className="dn-tag bull">$80k +51.30M</span>（前
              +45.69M——增 +$5.6M，全链最重一道墙）、
              <span className="dn-tag bull">$82k +19.55M</span>（前
              +18.86M）、<span className="dn-tag bull">$78k +13.14M</span>
              （前 +10.61M——加厚）、<span className="dn-tag bull">$85k
              +9.55M</span>、<span className="dn-tag bull">$90k +8.83M</span>、
              <span className="dn-tag bull">$81k +8.13M</span>。负向下方
              每一道都松了一些：<span className="dn-tag bear">$75k −27.06M</span>
              （前 −31.66M——松 $4.6M）、<span className="dn-tag bear">$74k
              −8.90M</span>（前 −10.21M）、<span className="dn-tag bear">$76k
              −8.75M</span>（前 −9.58M）、<span className="dn-tag bear">$60k
              −7.80M</span>是 crash put 残值。by-expiry 前段失去了
              昨天的 25MAY −12.64M 口袋（今天 25MAY 0DTE 是前段唯一负值
              <span className="dn-tag bear">−9.21M</span>、今日到期）；
              承重的 29MAY 反而<span className="dn-em">变重</span>：
              <span className="dn-tag bull">26MAY 1.3DTE +3.86M</span>、
              <span className="dn-tag bull">27MAY 2.3DTE +2.06M</span>、
              <span className="dn-tag bull">28MAY 3.3DTE +0.53M</span>、
              <span className="dn-tag bull">29MAY 4.3DTE +24.48M</span>
              （前 +17.28M——增 +$7.2M，整段 by-expiry 上最重的一档；26JUN +15.62M 第二）、
              <span className="dn-tag bull">5JUN +6.85M</span>、
              <span className="dn-tag bull">12JUN +4.91M</span>、
              <span className="dn-tag bull">26JUN +15.62M</span>。
            </p>

            <p>
              一句话读：<span className="dn-signal">
                昨天把 round-trip 钉住的 dealer regime 形状未变、只是
                体重略轻
              </span>。+65.1M 仍是强抑制——接近 05-22 +67.4M coil 那一档、
              远在翻转点之上。MA 簇钉位（§II）继续吃 dealer 配合：现货
              夹在 long-gamma 上盖（78k+13.14M、80k+51.30M、82k+19.55M）
              和 $75k −27.06M 口袋之间，cover 一侧最重在 $80k +51.30M
              （本周最强单墙）。25MAY 0DTE −9.21M 今日到期、明日开盘前
              段负口袋清掉；26MAY 之后整段前 strip 全正。930 合约的
              IV 中位数 <span className="dn-tag">42.5%</span>，对 30D
              close-to-close RV <span className="dn-tag">26.3%</span>
              ——链层 richness <span className="dn-tag">~+16.2pt</span>，
              和 05-24 的 +16.0pt 基本平。N 合约的链中位数、
              <span className="dn-em">不是</span>可交易价差；到期-/
              行权价层面的 vega、skew、期限结构仍未载入；vol 读维持
              framework only。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · 周末尾 · DXY 走软 · BTC 落差缩小</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观是第二天周日读——FRED Tier-1 对 05-24 冻结
              </span>。Dashboard 渲染时间 2026-05-24 22:17Z，较快照锚
              滞后约 1.9h。US 10Y nominal
              <span className="dn-tag">4.57% (0.0bp)</span>——持平、
              较 4.55% 长侧重夺门槛仍高 2bp。10Y TIPS real
              <span className="dn-tag">2.18% (+5.0bp)</span>——水平
              与昨天相同，但面板显示的还是昨天的 +5bp Δ（FRED 周末
              延后；今天的美时开盘会印新数）。5Y5Y BE 通胀
              <span className="dn-tag">2.26% (+5.0bp)</span>、HY OAS
              <span className="dn-tag bull">2.78% (−2.0bp)</span>、
              MOVE 国债 vol <span className="dn-tag">78.4 (−1.29)</span>
              ——水平都和 05-24 相同、面板里挂着昨天的 Δ。Fed net
              liquidity <span className="dn-tag bull">$5.907T (+0.030T)</span>
              ——同。<span className="dn-signal">DXY 99.05 (−0.27)</span>
              ——今天唯一值得标的周日新数、由昨天的 99.32 降下来；DXY
              走软是 BTC 跨资产的软利好。慢 regime z 仍极端：
              10Y <span className="dn-tag bear">+2.24</span>、TIPS
              <span className="dn-tag bear">+2.26</span>、JGB
              <span className="dn-tag bear">+2.55</span>，EXTREME
              RISK-OFF 旗子还在，但今天的 Δ 不是这些。
              <span className="dn-em">
                信用 / 利率过滤仍在：HY OAS 2.78% 距 3.0% 再加门槛
                还有 22bp；长侧重夺利率门槛（10Y &lt; 4.55%）还差 2bp。
                宏观今天是「平到软利好」背景——DXY 略助力；其余无动。
                下一轮 FRED Tier-1 在今日美时印、是三天来第一道新鲜
                宏观输入。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>宏观指标</th>
                  <th>水平</th>
                  <th>Δ</th>
                  <th>regime z</th>
                  <th>episodic z</th>
                  <th>读</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>US 10Y nominal</td><td className="num">4.57%</td><td className="num">0.0bp</td><td className="num bear">+2.24</td><td className="num bear">+1.52</td><td className="bear">risk-off · 平</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.18%</td><td className="num">+5.0bp（停）</td><td className="num bear">+2.26</td><td className="num bear">+2.47</td><td className="bear">紧 · 面板 Δ 冻结</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.26%</td><td className="num">+5.0bp（停）</td><td className="num">+0.35</td><td className="num">+0.47</td><td className="neut">无 tag · 面板 Δ 冻结</td></tr>
                <tr><td>HY OAS</td><td className="num">2.78%</td><td className="num bull">−2.0bp（停）</td><td className="num bull">−0.98</td><td className="num bull">−1.02</td><td className="bull">松 · risk-on</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num stale">−0.523</td><td className="num">−0.01</td><td className="num bull">−0.48</td><td className="num bull">−1.35</td><td className="stale">stale 9d · 中性</td></tr>
                <tr><td>MOVE 国债 vol</td><td className="num">78.4</td><td className="num bull">−1.29（停）</td><td className="num">+0.11</td><td className="num">+1.01</td><td className="neut">vol 缓</td></tr>
                <tr><td>DXY</td><td className="num">99.05</td><td className="num bull">−0.27</td><td className="num">+0.63</td><td className="num bear">+1.16</td><td className="neut">紧 · 今日缓</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.907T</td><td className="num bull">+0.030T（停）</td><td className="num bull">+0.77</td><td className="num bull">+2.16</td><td className="bull">松 · 涌</td></tr>
                <tr><td>USD/JPY</td><td className="num">158.88</td><td className="num bull">−0.14</td><td className="num bear">+1.16</td><td className="num">+0.37</td><td className="neut">无 tag · 缓</td></tr>
                <tr><td>US-JP 10Y 价差</td><td className="num">2.06%</td><td className="num">0.0bp</td><td className="num bull">−0.65</td><td className="num bear">+1.52</td><td className="bear">紧 episodic</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7940</td><td className="num bull">−0.01</td><td className="num bull">−1.82</td><td className="num bull">−1.35</td><td className="neut">无 tag</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">+17.0bp</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">月度 · 不可倚</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗口、summary 00:00Z——
              <span className="dn-em">7 天滚动读、不是「今天」</span>）。
              非对角均值 <span className="dn-tag">|r| 0.384</span>
              （较 05-24 的 0.403 略松——仍 NORMAL 带）。BTC 的列出
              关系：NQ <span className="dn-tag">+0.663</span>、SP500
              <span className="dn-tag">+0.621</span>、CL
              <span className="dn-tag">−0.605</span>、SILVER
              <span className="dn-tag">+0.556</span>、NVDA
              <span className="dn-tag">+0.551</span>、BRENT
              <span className="dn-tag">−0.533</span>、GOLD
              <span className="dn-tag">+0.477</span>、META
              <span className="dn-tag">+0.461</span>、TSLA
              <span className="dn-tag">+0.451</span>、PALL
              <span className="dn-tag">+0.433</span>。7d 相对表现：
              <span className="dn-tag bear">BTC −0.16%</span>
              （较 05-24 的 −1.49% 缩小）、NQ
              <span className="dn-tag bull">+2.87%</span>、SP500
              <span className="dn-tag bull">+1.96%</span>、JP225
              <span className="dn-tag bull">+5.16%</span>（新出来的标——
              日本强）、NVDA <span className="dn-tag bear">−1.30%</span>、
              AAPL <span className="dn-tag bull">+3.51%</span>、TSLA
              <span className="dn-tag bull">+4.11%</span>、AMZN
              <span className="dn-tag bull">+2.80%</span>、GOOGL
              <span className="dn-tag bear">−2.04%</span>；金属杂——
              GOLD <span className="dn-tag bull">+1.23%</span>、SILVER
              <span className="dn-tag bull">+3.72%</span>、PALL
              <span className="dn-tag bear">−2.30%</span>、PLAT
              <span className="dn-tag bear">−1.03%</span>、COPPER
              <span className="dn-tag bull">+3.21%</span>；能源继续崩
              ——CL <span className="dn-tag bear">−10.65%</span>、BRENT
              <span className="dn-tag bear">−9.97%</span>、NGAS
              <span className="dn-tag bear">−5.44%</span>。
              <span className="dn-em">
                BTC 对指数复合体的 7d 落差由 ~−4.5pt（昨天）缩小到
                ~−3.0pt（今天，BTC −0.16% 对 NQ +2.87%、SP500 +1.96%）
                ——部分追平。单名拖累有所缓和（NVDA −1.30% 对昨天
                −1.54%；GOOGL −2.04% 对 −1.93%）。能源继续崩——
                CL 滚窗里再深 +0.5pt；BTC/能源 −0.60/−0.53 的负相关
                把这一段油崩翻译成跨资产软利好。日本强（JP225 +5.16%）
                是单一指数最亮，BTC-JP225 +0.359 中等相关、读穿被稀释
                但方向上同。
              </span>{' '}
              JGB 月度 2.52% 带 EXTREME RISK-OFF 月标——不可倚。
              USD/JPY 158.88、由 159.15 缓下。
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · 按规则按兵不动是对的 · 实质上软miss · 守住宏观尾</span>
            </h2>

            <p>
              <span className="dn-signal">
                05-24 「按兵不动」按规则字面是对的；squeeze 实质上确实
                ratify 了、本台没接住
              </span>。05-24 六条决定条件无一在 24h 窗口内严格触发：
              squeeze-arm（SM &gt; −10k 持续 &gt; 4h 且 1h 收盘 &gt;
              $76,827）SM 这条腿真值
              <span className="dn-tag">3h 9min</span>（差 4h 一点）、
              1h 收盘越过簇顶的几根多数发生在 SM 已经跌回 −10k 之下
              之后——两条腿同时为真的滚动 4h 窗口：零；squeeze-harder
              （SM &gt; −5k 且 1h 收盘 &gt; $77,900）远未靠近（SM 峰
              −8.99k；1h 收盘高 $77,290）；cluster-loses（1h 收盘 &lt;
              $75,768 且 SM &lt; −20k）远未靠近（1h 收盘低 $76,106；
              SM 在 −20k 仅出现在回补之前的 00:00–05:15Z）；mid-cycle、
              宏观尾再加、reclaim filter——全干净。按兵不动的账本今天
              零已实现损益；宏观 put-spread 落在 29MAY 到期上、那一档
              今天 <span className="dn-tag">+24.48M dealer gamma</span>
              （较昨天 +17.28M 抑制更重——对冲到期落入 dealer 最强
              正向 expiry strip 之内）。
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">按兵不动 · 主体 · 今日</span>
              <div className="dn-trade-name">
                不开新方向——回补印了没转换、SM 慢节奏在重新加空
              </div>
              <div className="dn-thesis">
                现货被钉在比昨天宽的日 MA 簇里（$76,726 D-SMA150 到
                $77,813 D-EMA50——$1,087 跨度）。dealer +65.1M 仍抑制
                两边离开（较昨天 −$18.7M 但稳在抑制半边）。SM 回补
                印过（−24.9k → −8.99k 峰），但没转换（高 $77,353、
                又回吐、$1,231 round-trip 到 $76,122 再回 $77,195）。
                SM 自 05:17Z 已经慢节奏在重新加空（−9.1k → −13.7k、
                ~−269 BTC/小时、无硬步）。funding 冷却（+9.9% → +7.12%
                年化）、散户继续薄（55.23% → 53.96%）。昨天那套不
                对称（创纪录空 + 创纪录多头费 + dealer 钉）已经用掉
                一半；剩下的是更中性的 coil、同一道 dealer 钉、更松的
                仓位面。更宽的钉位上、燃料过半、SM 在重新加空——
                合理仓位仍是零。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">立场</span><span className="dn-lvl-v">方向上平 · 不开新风险</span></div>
                <div><span className="dn-lvl-k">决定带</span><span className="dn-lvl-v">$75,969（flip）↔ $78,049（W-EMA20、簇顶）</span></div>
                <div><span className="dn-lvl-k">上行 re-engage（更宽门）</span><span className="dn-lvl-v bull">1h 收盘 &gt; $78,049（W-EMA20）且 SM 在 leading 4h 内未再加空到 &lt; −20k——侦察多 0.2R、目标 $78,833（D-SMA20）然后 $79,050（D-EMA150）</span></div>
                <div><span className="dn-lvl-k">下行 re-engage</span><span className="dn-lvl-v bear">1h 收盘 &lt; $75,969（flip）且 SM &lt; −18k——flip-break 空 0.3R、目标 $75,000 / $74,378（周期低）</span></div>
                <div><span className="dn-lvl-k">re-stack 升级</span><span className="dn-lvl-v bear">SM 一分钟 net 变动 ≤ −5k 把 SM 推 &lt; −22k——squeeze 反方向重新上膛、按下一次簇顶夺回作即时空 setup 处理</span></div>
              </div>
              <div className="dn-gating">
                <b>为什么不在回补印之后追多 re-engage：</b>
                回补印过但 dealer 把跟随挡住了——现货拿不下 $77,400
                一带、更别提 $78k 簇顶。SM 已经在慢节奏重新加空
                （没有硬步但是持续），把多侧的 squeeze 燃料抽掉。
                没有那套不对称（创纪录空 + 创纪录多头费 + dealer 钉），
                剩下的边缘只是钉位内方向上的硬币翻——等簇顶清楚被
                收盘拿下且 SM 不重新加空（多 re-engage）或 flip 干净
                跌穿且 SM 再次堆起（空 re-engage）。预先押下一轮
                squeeze 也是不——前一轮把自己的燃料用掉了、没有新
                仓位面可以重新点燃。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">已关闭 · 上一份 squeeze 看 · 执行印</span>
              <div className="dn-trade-name">
                squeeze 潜力——昨日上膛、燃料用掉、不再装填
              </div>
              <div className="dn-thesis">
                昨日的 squeeze 框架块（「上膛、未装填」）要求：SM net
                &gt; −10k 持续 &gt; 4h 且 1h 收盘 &gt; $76,827。结果：
                SM 在 −10k 之上停了 3h 9min（差 4h 一点）；簇顶 1h
                收盘的几根多数发生在 SM 已经过期之后。两条腿在所需
                4h 滚动窗口里从未同时为真。诚实印：回补出现了（仓位
                面 squeeze ratify）、现货走了 $623（$76,730 → $77,353）、
                又被卖回、本台没接住——因为严格门没踏。在 06:00Z 那
                根 1h 收盘 $76,956 处（两条腿同时为真但只一根 closing
                bar）酌情侦察多会入场 ~$77,000、面对 $400 上行
                ($77,353 高) 对 $1,231 round-trip——即便酌情读，在
                dealer 钉撑住之后，不对称边缘也小。squeeze 框架收下；
                setup 降到中性钉位。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">框架状态</span><span className="dn-lvl-v">关闭 · 仓位面 setup 被回补吃掉</span></div>
                <div><span className="dn-lvl-k">squeeze 顶印</span><span className="dn-lvl-v">$77,353 @ 2026-05-24 10:27Z · 距回补步（$76,730）+ $623</span></div>
                <div><span className="dn-lvl-k">round-trip 低</span><span className="dn-lvl-v">$76,122 @ 2026-05-24 21:59Z · 距回补步 − $608</span></div>
                <div><span className="dn-lvl-k">回补到现报</span><span className="dn-lvl-v">$76,730 → $77,195 = + $465（24h 净涨全在回补 bar、其余是幅度）</span></div>
                <div><span className="dn-lvl-k">重新上膛条件</span><span className="dn-lvl-v">需要 SM 重新加空回到 −20k 之下再重新平掉——这一轮形态的不对称已用掉</span></div>
              </div>
              <div className="dn-gating">
                <b>教训：</b>严格 squeeze 门（SM &gt; −10k 且 1h 收盘 &gt;
                簇顶、二者 &gt;4h 连续）作纪律来用是对的——把本台
                挡在 dealer 钉之下不对称很小的入场之外。如果考题是
                「接住每一次跟得动的回补」，门太严；但考题是「只在
                不对称大到可以打穿钉位时入场」，按这个考题它运行
                正确。归入 runbook 谱系作确认：SM 回补 + 现货过簇顶
                自身不够；要求回补是持续的（SM 在同一 4h 内不再跌回
                −10k 之下）且簇顶被收盘清掉（不是只有插针）。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">宏观尾 · 对冲 · 持仓</span>
              <div className="dn-trade-name">
                下行 put-spread——余位 0.15R 持有
              </div>
              <div className="dn-thesis">
                宏观基本对 05-24 一致（FRED Tier-1 周末冻结；面板挂的
                Δ 是昨天的）。DXY 略缓（−0.27）是 BTC 的边际软利好、
                但没有 size 动作的新触发。承载对冲的 29MAY 到期今天
                带 +24.48M dealer gamma（前 +17.28M）——对冲到期上
                的 dealer 账本朝抑制半边更厚，对 active 下行尾的
                dealer 环境略差。regime-z 背景不变（10Y +2.24σ、
                JGB +2.55σ、TIPS real +2.26σ）；理据（对慢 regime z
                的肥尾保险）成立。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">结构</span><span className="dn-lvl-v">多 $74k / 空 $70k put</span></div>
                <div><span className="dn-lvl-k">到期</span><span className="dn-lvl-v">29-MAY-26（4.3 DTE）——前 strip 现为正向阶梯、29MAY 最重 +24.48M</span></div>
                <div><span className="dn-lvl-k">本次动作</span><span className="dn-lvl-v">持 0.15R · 不加（regime z 未变）· 不减（再加门未破）</span></div>
                <div><span className="dn-lvl-k">再加触发</span><span className="dn-lvl-v bear">HY OAS &gt; 3.0% 收盘 → 朝主体增；10Y &gt; 4.75% 收盘 → +0.1R；1d 收盘破 $75.1k 云 → 顶到最大尾</span></div>
              </div>
              <div className="dn-gating">
                <b>注意：</b>strike / 权利金 / Greeks 未载入——结构示意、
                size 待 Deribit 29-MAY 链拉。29MAY +24.48M 是整段
                by-expiry 上最重的一档（26JUN +15.62M 第二）；该到期上的 dealer
                对冲将抑制跟随而非放大——意味着如果宏观尾真触发，
                已实现移动可能比 regime-z 算出的小；strike 层 Greeks
                拉一下会更清楚实际 payoff 曲线。
              </div>
            </div>

            <h2 className="dn-sec">
              失效条件{' '}
              <span className="dn-roman">VI · 钉位仍稳 · 干净突破后 re-engage · re-stack 升级作新尾</span>
            </h2>

            <p>
              05-24 六条决定条件中、<em>零</em>在 24h 窗口内严格触发——
              最接近的是 squeeze-arm 这一行：SM &gt; −10k 持续 3h 9min
              （差 4h 一截）、且从未与某根 1h 收盘 &gt; $76,827 在
              完整 4h 滚动窗口里同时为真。squeeze-harder、cluster-loses、
              mid-cycle、宏观尾再加、reclaim filter——全干净。昨日
              按兵不动的账本今天不变（方向上平、宏观尾持）。今天的
              条件按新「钉 + flip」网重置：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水平</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>簇顶夺回 ratify</td><td className="bull">1h 收盘 &gt; $78,049（W-EMA20）且 SM 在 leading 4h 内未再加空到 &lt; −20k</td><td>侦察多 0.2R、目标 $78,833（D-SMA20）然后 $79,050（D-EMA150）</td></tr>
                <tr><td>夺回 ratify 更狠</td><td className="bull">SM &gt; −5k 持续 且 1h 收盘 &gt; $79,050（D-EMA150）</td><td>加 +0.2R、目标 $80,400（D-SMA200）——撞顶墙 +51.30M</td></tr>
                <tr><td>簇丢（再破）</td><td className="bear">1h 收盘 &lt; $75,969（flip）且 SM &lt; −18k</td><td>flip-break 空 0.3R、目标 $75,000 / $74,378（周期低）</td></tr>
                <tr><td>re-stack 敌意（新尾）</td><td className="bear">SM 一分钟 net 变动 ≤ −5k 把 SM 推 &lt; −22k</td><td>按下一次簇顶（$77,813 D-EMA50）夺回作即时空 setup 处理</td></tr>
                <tr><td>mid-cycle 升级</td><td className="bear">1d 收盘破 $75,100 云（↓ Ichimoku 1d 云顶）</td><td>尾向主体（0.3R）、不论 SM 都开空</td></tr>
                <tr><td>宏观尾再加</td><td className="bear">HY OAS &gt; 3.0% 或 10Y &gt; 4.75% 收盘（FRED Tier-1 今天是第一道新鲜印）</td><td>尾 +0.1R 朝主体</td></tr>
                <tr><td>Reclaim filter ratify</td><td className="bull">SM &gt; 0 持续 且 10Y 收盘 &lt; 4.55% 且 1h 收盘 &gt; $78,049</td><td>侦察多 0.2R（与「簇顶」账分开）</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>这一</em>份的单一变量是
              <span className="dn-signal">
                SM 慢节奏 re-stack 是继续漂还是印出离散步。漂（~−250
                BTC/小时）和 dealer 钉一致、会延长 coil；硬步回到
                −20k 之下、簇顶处的空 setup 重新上膛；硬回补步（SM &gt;
                −5k）是唯一能强迫多 re-engage 在干净的簇顶突破上的
                东西
              </span>。在 SM 一小时不动出 ~±5k 之前、本备忘按写下的
              运行——方向上平、宏观尾持、squeeze 框架收下。钉位可以
              再撑几小时、也可能一根 bar 之内断；今天的 SM 回补是
              四天里的第三道硬步（05-22 06:30Z 再加空、05-23 05:00Z
              再加空、05-24 05:11Z + 05:16Z 回补）——节奏说下一道
              比日历感觉的近、dealer 账本布好了对下一道方向都抑制。
              本周第一道 FRED Tier-1 新鲜印将在下个 24h 内落地——
              是唯一能从 BTC 账本之外把钉位打破的宏观变量。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计追踪 · v2（已过 codex 敌对式审计 · 0 CRITICAL · 2 HIGH + 3 MED + 1 LOW 全部修正）
            </span>
            <b>Codex CLI 0.132.0（gpt-5.5、xhigh reasoning）干净跑完
            了敌对式审计——empty-stdin pipe 撑住、无 TTY 阻塞。</b>
            零 CRITICAL；6 条 findings 全部在 EN+ZH 应用：
            (a) <b>F-01 · HIGH</b>——<em>审计存档缺失</em>：页面声明
            <code>audits/2026-05-25-desk-note.md</code> 已存在；v1 作者
            时实际不存在。已在本次 commit 创建该审计文件、完整
            findings 列表 + 00:01Z MTF 扫描逐字存档（滚动 latest 文件
            其后已滚到 08:31 BJ）。
            (b) <b>F-02 · HIGH</b>——<em>回补幅度夸大</em>：v1 lead
            写「−24.9k 的整摞空头几乎全数关掉」；硬窗口仅把 SM net
            由 −23.83k 拉到 −9.12k（+14.7k）、快照时 SM 已经回到
            −13.71k，所以「几乎全数」在低点（−9.12k 仍净空）和在
            快照（−13.71k 远在低点之上）两端都不对。EN+ZH lead 改写为
            「五分钟内 SM net +14.7k（−23.83k → −9.12k）、06:36Z 触及
            当日峰值 −8.99k、之后又重新加空回到 −13.71k」。
            (c) <b>F-03 · MED</b>——<em>funding 分钟计数差 2 且
            prose-vs-meta 均值漂移</em>：v1 写 386/426/628；从锁定行
            范围 29849–31289 直接数得 388/424/628。prose 带「+8.88%
            均值」、meta 带「+8.90%」——核算均值是 +8.9004%。两版均
            更新到 388/424/628 并统一到 +8.90%。
            (d) <b>F-04 · MED</b>——<em>by-expiry 排序颠倒</em>：v1
            写「29MAY +24.48M 是链上 26JUN 之后第二重的月度」——而
            29MAY +24.48M 比 26JUN +15.62M 重。EN+ZH 的 §III prose 与
            交易块 caveat 重写为「29MAY 是整段 by-expiry 上最重的
            一档；26JUN +15.62M 第二」。
            (e) <b>F-05 · MED</b>——<em>re-stack 门符号歧义</em>：v1
            写「一分钟离散步 &gt; −5k 把 SM 推 &lt; −22k」；
            敌意短头重新加空 net 变化应为负，「&gt; −5k」反着读。
            EN+ZH §V 交易块与 §VI 表都改写为：「SM 一分钟 net 变动
            ≤ −5k 把 SM 推 &lt; −22k」。
            (f) <b>F-06 · LOW</b>——<em>05:11Z 现货取错行</em>：v1
            §I 把 $76,738.86 标为 05:11Z 现货；那是 05:10Z 现货。
            05:11Z 现货（step bar）是 $76,730.00。EN+ZH §I 都修，
            前后分钟都披露。
            codex 明确清扫：funding × 1095（无 05-15 ×100 landmine
            复发）、GEX 双参考符号一致性（flip $75,969、总 +65.1M、
            距 +1.59% 对 live $77,195 / +1.6% 对 Deribit-idx $77,162——
            干净对齐）、GEX 墙与 by-expiry strip、MA 矩阵
            （D-SMA50/EMA100/SMA150 簇 +0.37/+0.46/+0.61% 在现货之下；
            D-EMA50/W-EMA20 簇 −0.79/−1.09% 在上 · W-SMA150/200
            不可计算、周线 126 根）、30D RV 26.26%、
            claims-vs-loaded-data 纪律（NTT / max-pain / strike-IV /
            BTC-NQ framework-only · IV 链中位数 · 跨资产按 7d 滚动
            窗口而非「今天」框定）、requireViewer 门控形态（两条
            路径、首语句）、index <code>&lt;li&gt;</code> 新增、
            SM 回补时序（cover 步 05:11Z + 05:16Z、现货 $76,730、
            峰值 −8,992 在 06:36Z、在 −10k 之上 189 分钟）、
            1h 收盘越过簇顶（8 根：01/06/09/10/11/12/23/00Z）、
            squeeze-arm 两条腿同时为真的滚动 4h 窗口检查（零窗口）。
            完整审计记录 + MTF 扫描存档：audits/2026-05-25-desk-note.md。
            <b>Build note (INFO)：</b>本服务器跑 Node 18.19.1；Next
            16.2.6 在 <code>node_modules/next/dist/bin/next:21-25</code>
            硬退出于 Node &lt; 20.9.0，所以完整 <code>next build</code>
            被环境挡住（lineage 自 05-21 / 05-22 / 05-23 / 05-24）。
            <code>npx --no-install tsc --noEmit</code> 返回 exit 0
            （TypeScript 干净）、作为 build proxy。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘为 Hysteresis Research 内部交易台供原则成员讨论的
            产物，<em>不是投资建议、不是要约、不是邀约</em>，
            未针对任何收件人具体情况定制。所列数字基于单一原子快照
            (2026-05-25 00:08Z)，分节出处见上方数据来源区；
            宏观对 05-24 基本无变（FRED Tier-1 周末冻结；下次新鲜印
            在今日美时）。各项水平、size、条件示意本台的工作流程，
            不是常态推荐。过去的相关性、gamma、仓位形态不约束未来盘面。
            衍生品有全损风险；如带杠杆，损失可能超过保证金。
            <em>请自行尽职调查。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                回补印在簇上、没走出去。钉位仍稳；下一道、还是 SM 来印。
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
            v2 · 2026-05-25 00:08Z · sources: live_db.json · mtf_div_latest.html ·
            btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
