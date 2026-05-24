import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap,noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-05-24 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-05-24',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-05-24' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260524() {
  await requireViewer('/zh/desk/2026-05-24');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HR · BTC · 交易台备忘 · 2026-05-24 · v2</span>
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
              <span className="dn-big">$76,752</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+1.56%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-05-24 00:00Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-05-24 00:00Z（pin 锁定）</td>
                  <td className="dn-flag">最新 · 1 分钟 · 运行时文件 tail 在 00:09Z</td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-05-24 00:01Z scan</td>
                  <td className="dn-flag">
                    滚动 latest 文件（约每 15 分钟重写）· 较快照锚滞后约 1
                    分钟 · 含未收盘 K 线 · 扫描存档于
                    audits/2026-05-24-desk-note.md
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 00:01Z 快照</td>
                  <td className="dn-flag">最新 · Deribit idx $76,784 对现货 $76,752 · 932 合约</td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 00:01Z
                  </td>
                  <td className="dn-flag">滞后约 1 分钟 · 7d 1h bar · 22 资产</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-05-23 22:17Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.7h · FRED Tier-1 较 05-23 周末数无变化 ·
                    下次 FRED 更新在周一
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-05-24 00:06Z</td>
                  <td className="dn-flag">
                    较快照锚滞后约 6 分钟 · 偏移按现货重算
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
              <span className="dn-v bear">+9.9%</span>
              <span className="dn-src">live · 00:00Z · 24h 均值 +6.27% · 多头付得重</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">+2.0% → +9.9%</span>
              <span className="dn-src">区间 +0.34% / +9.92% · 净上行（511 分钟正 · 433 负）</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v">−1.84%（−1,934 BTC）</span>
              <span className="dn-src">live · 反弹里多头平仓回吐</span>
            </div>
            <div>
              <span className="dn-k">Binance mkt long/short</span>
              <span className="dn-v">55.3 / 44.7</span>
              <span className="dn-src">live_db `mkt_long_pct` · 拥挤度回落 60.1 → 55.3</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−24.9k（净 SHORT）</span>
              <span className="dn-src">live · long 9.66k − short 34.53k</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 05-23 备忘</span>
              <span className="dn-v bear">−14.5k → −24.9k</span>
              <span className="dn-src">峰值 −32.4k @ 2026-05-23 08:51Z · 重新加空在 05:00Z BJ 13:00</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">42.2% / 26.2%</span>
              <span className="dn-src">GEX IV 中位数 · 932 合约</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+1.30%（在上方）</span>
              <span className="dn-src">flip $75,768 · aggregate GEX +83.8M（前 −57.1M）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              05-23 快照之后发生了两件事。第一件，05-23 runner
              <span className="dn-signal">把整段下跌握住了</span>：
              快照之后的 1h 收盘连续 ~20 个 UTC 小时停在 flip 之下，
              runner 的第二目标门（1h 收盘 &lt; $75,000）在
              2026-05-23 07:00Z（收盘 <span className="dn-tag">$74,547</span>）
              印出、计划中的一半 runner 在那里平掉，现货继续走到 24h 低位
              <span className="dn-tag">$74,378</span>（2026-05-23 07:51Z、
              在 runner 拉伸目标 $74,000 上方 $378）。之后约 13 小时，
              cover 信号（1h 收盘 &gt; $76,325、flip 收回）在
              2026-05-23 20:00Z 印出（收盘
              <span className="dn-tag">$77,132</span>），residual 在反弹
              里被平。第二件，<span className="dn-signal">
                SM 又来了一次——2026-05-23 05:00Z（BJ 13:00）一根小时内
                两个离散分钟步从 −14.3k 跳到 −32.3k，价格约 $75,500
              </span>
              ，是整周里最深的 SM 净空（峰值 −32.4k 在 2026-05-23 08:51Z）。
              本台读对了方向、规则驱动的目标序列也吃到了下跌的肉；
              但 sub-$75k 的条件加仓票据在 07:00Z 同门一起印出、随后在
              反弹里被止——把 runner 的大部分利润又吃回去。诚实的记账：
              交易在计划目标这一段是赚的、在规则加仓这一段是亏的，整体
              净小赢是被握住的 runner 推上去的、不是追加仓推的。
            </p>

            <p>
              BTC 现报 <span className="dn-tag">$76,752</span>、24h
              +1.56%，在新 <span className="dn-tag">0-γ flip $75,768</span>
              上方 +1.30%，被一组四线日 MA 簇钉在 $113 带里：
              <span className="dn-tag">D-EMA50 $76,714 (+0.05%)</span>、
              <span className="dn-tag">D-SMA50 $76,738 (+0.02%)</span>、
              <span className="dn-tag">D-SMA150 $76,792 (−0.05%)</span>、
              <span className="dn-tag">D-EMA100 $76,827 (−0.10%)</span>。
              Dealer gamma 翻回 <span className="dn-signal">净正 +83.8M</span>
              （前 −57.1M、24h 内反向摆动约 $141M），SM 较 −32.3k 峰位
              回了约 7k 到 −24.9k、但从未跨过 cover 信号（−5k），funding
              在付空头 <span className="dn-tag bear">+9.9% 年化（实时）</span>
              、24h 从 +2.0% 净上行（带噪），OI{' '}
              <span className="dn-tag">−1.84%（−1,934 BTC）</span>
              ——价格反弹时 OI 在收，是多头平仓、不是新鲜多头。
              <span className="dn-em">
                这是一张 squeeze 脸（SM 创纪录净空 + funding 付空头 +
                dealer 压波 + MA 钉位），但唯一能验证它的事情还没发生
                ——SM 真正在 cover。flip $75,768 下方，regime 又翻回放大，
                $75k −31.7M pocket 重新武装；簇就是那个开关。
              </span>
            </p>

            <h2 className="dn-sec">
              仓位结构 <span className="dn-roman">I · 实时盘面 · 第二次重新加空</span>
            </h2>

            <p>
              昨天的 runner 是本台今天首先要标记的入场。05-23 备忘的规则
              格子：trail $76,400（盘中）、cover 信号 1h 收盘 &gt; $76,325
              （flip 收回）、runner 第二目标 1h 收盘 &lt; $75,000、加仓
              重新武装 1h 收盘 &lt; $75,000 且 SM 仍 &lt; −5k。快照之后
              1h 收盘立刻进 sub-flip，连续约 20 个 UTC 小时停在 flip 之下；
              runner 的计划目标序列干净印出：第二目标门在{' '}
              <span className="dn-tag">2026-05-23 07:00Z、1h 收盘 $74,547</span>
              ——按规则平掉 0.15R runner 的一半（这一半锁住对 $76,497
              入场的 +$1,950/单位）。加仓重新武装在同门印出（1h 收盘
              &lt; $75k + SM −31.5k &lt; −5k），+0.2R 加仓在大约
              <span className="dn-tag">~$74,547</span>填入。现货随后印出
              24h 低位 <span className="dn-tag">$74,378</span>（07:51Z、
              在 runner 拉伸目标 $74,000 之上 $378）。cover 信号
              （1h 收盘 &gt; $76,325）约 13 小时后在
              <span className="dn-tag">2026-05-23 20:00Z、1h 收盘 $77,132</span>
              印出 — 平掉 residual + 加仓。P&amp;L 流对入场 $76,497：
              {' '}<span className="dn-tag">+0.15R @ $75,700 = +$797/单位</span>
              {' '}（05-22）、然后
              <span className="dn-tag">+0.075R @ $74,547 = +$1,950/单位</span>
              （第二目标）、然后
              <span className="dn-tag">+0.075R @ $77,132 = −$635/单位</span>
              （residual 止）、加仓
              <span className="dn-tag">+0.2R @ $74,547 → −$2,585/单位 @ $77,132</span>
              。按 R-单位归一：仅 runner ≈ +0.165R/单位（计划目标序列的
              P&amp;L）；加上规则武装的加仓后掉到 ≈ −0.06R/单位。
              诚实记账：
              <span className="dn-em">
                本台按计划 runner 的安排吃到了下跌的肉，又把它在追规则
                武装的加仓进印出的底里还了回去——若把加仓当作 discretionary-
                skip 处理，整体净 ~微正；若按规则全执行，整体净小亏
              </span>
              。两种读法都记录在案；05-23 的 framework 块已经标过
              「TD9 BUY 用来管理空、不要进多」，那条 discretion 就是
              跳掉这个加仓的依据。
            </p>

            <p>
              SM 是更大的故事。05-23 快照时 SM 在
              <span className="dn-tag bear">−14.5k</span>；在
              <span className="dn-tag">2026-05-23 05:00Z（BJ 13:00）</span>
              一根小时内塌到 <span className="dn-tag bear">−32.3k</span>
              ——两个离散分钟步在 05:26Z（−14.0k 步）与 05:31Z（−4.1k 步），
              与 05-22 06:30Z 同形的硬步 pattern、但更大（long 11.7k → 8.0k、
              short 25.9k → 40.3k——+14.4k 的 margin 摆动）。当时价格
              <span className="dn-tag">~$75,500</span>；现货继续走到
              <span className="dn-tag">$74,378</span>（07:51Z）；SM
              <em>峰值</em>净空 <span className="dn-tag bear">−32.4k</span>
              在 <span className="dn-tag">2026-05-23 08:51Z</span>印出
              （long 7.46k − short 39.83k）。从 −32.4k 峰位 SM 现在回到
              <span className="dn-tag bear">−24.9k</span>
              （long 9.66k − short 34.53k），过去 ~15 小时部分 cover 了
              ~7.5k BTC margin。<span className="dn-em">
                SM cover 了一些、但远远不够翻读法：long book 是整周里最小
                （9.66k 对 05-17 的 28.8k），short book 是整周里最大
                （34.53k 对 05-17 的 12.7k）。05-23 的 cover 信号门槛
                （SM net &gt; −5k）距现在还有 ~$20k margin。这本空仓
                是在强势里慢慢拆、不是夺门而出——注意 SM net 在整个 24h
                窗口里没有任何一分钟跨过 −5k。
              </span>
            </p>

            <p>
              杠杆侧把话说得最响。funding 实时
              <span className="dn-tag bear">+9.9% 年化</span>——是 05-17
              +5.0% 以来最高的多头付款读数，从 24h 前的
              <span className="dn-tag">+2.0% 年化</span>上行，24h 路径
              净上行带噪（区间 +0.34% / +9.92%、均值 +6.27%、511 分钟正
              vs 433 负）。OI
              <span className="dn-tag">−1.84%（−1,934 BTC）24h</span>
              ——OI 在 +1.56% 反弹里收，是多头平仓与空仓缩边的签名、不是
              新鲜多头堆。散户去拥挤化：Binance
              <span className="dn-tag">mkt_long_pct 55.3%</span>，从 24h
              前 60.1% 收回——散户在反弹里减多，前一天在跌里加多
              （两边都站错）。perp 对现货
              <span className="dn-tag bear">−$106 贴水</span>
              （1h 均值 −$102、区间 −$122 / −$70），比 05-23 的 −$99 更深
              ——offshore（现货）bid 仍在领，futures 簿在结构性贴水；
              <span className="dn-em">
                如果是真的 cover，你会预期 perp 贴水收窄、而不是扩大。
                它扩大了。
              </span>{' '}
              1 分钟 aggressor skew_agg 快照
              <span className="dn-tag">−11.6</span>（分钟级噪声大、1h
              均值 +1.4、区间 −53 / +46——当 point read，不当窗口均值）。
            </p>

            <p>
              窗口 flow 把今天放进更大的反弹里。24h：价格
              <span className="dn-tag bull">+1.56%</span>、OI
              <span className="dn-tag">−1,934 BTC</span>、spot CVD
              <span className="dn-tag bear">Δ −5,229</span>、futures CVD
              <span className="dn-tag bull">Δ +4,273</span>、大单
              <span className="dn-tag bull">1,010 笔 +1,126 BTC</span>、
              taker-net <span className="dn-tag bull">+1,340</span>——
              <span className="dn-em">
                spot CVD 在流血、futures CVD 在买：这是 futures 主导的反弹
                对着持续的 offshore 现货供给，大单 tape 在买侧
              </span>
              。4h：价格 <span className="dn-tag bull">+0.99%</span>、OI
              <span className="dn-tag">−1,446 BTC</span>、spot CVD
              <span className="dn-tag bull">Δ +592</span>、futures CVD
              <span className="dn-tag bull">Δ +846</span>、大单
              <span className="dn-tag bull">150 笔 +661 BTC</span>、
              taker-net <span className="dn-tag bull">+966</span>——
              新鲜 aggressive 买。1h（进快照）：价格
              <span className="dn-tag bull">+0.26%</span>、OI
              <span className="dn-tag">−148 BTC</span>、spot CVD
              <span className="dn-tag bear">Δ −410</span>、futures CVD
              <span className="dn-tag bull">Δ +768</span>、大单
              <span className="dn-tag bull">30 笔 +174 BTC</span>、
              taker-net <span className="dn-tag bull">+766</span>——
              更高分辨率下同一个 futures 主导、现货供给的 pattern。按
              顺序读：今天是 $74,378 起来的反弹、由 futures 买推上去、
              撞进 MA 簇钉位，而 spot CVD 在底下仍在流。
            </p>

            <h2 className="dn-sec">
              结构 <span className="dn-roman">II · MTF 图 · 新鲜金叉 · 钉在簇上</span>
            </h2>

            <p>
              结构从 05-23 的
              <span className="dn-em">偏空趋势、快 TF 超卖</span>翻到
              <span className="dn-signal">
                钉在簇上、4h+8h 新鲜金叉、快 RSI 回到中性偏暖
              </span>
              。1h TD9 BUY 在 $75,475 被印证——价格从那个 print 收回
              $1,277、走进 MA 簇。RSI 解开：1h
              <span className="dn-tag">23.1 → 62.3</span>、30m
              <span className="dn-tag">21.1 → 67.6</span>、15m
              <span className="dn-tag">29.7 → 64.9</span>。交叉形态：4h 印了
              <span className="dn-tag bull">水下金叉、刚印</span>、8h 同形
              ——按 runbook 分类法两者都是早期金叉（DIF 水下）、属
              「空头转多探测」、不是确认。1h 带
              <span className="dn-tag bull">水下金叉 11b 前</span>。
              云带图升级：15m / 1d / 1M 云上；30m 云上（出云 7 根）；
              1h 云内（76.5k–76.8k、转折中）；4h / 8h / 1w 云下；
              12h 云下 3 根；3d 仍在云内（73.5k–93.0k）。
              <span className="dn-em">
                直白读：快 TF 把超卖吸收掉、印了早期反转形态；中 TF
                （4h/8h）处在反转尝试中段、金叉刚印但仍在云下；
                慢 TF（1d/1w/3d/1M）跟昨天的盘整一样。MTF 允许 counter-trend
                反弹继续；它还没确认从空到多的 regime 翻。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">76,758</td><td className="num">64.9</td><td className="bear">死叉（水上）6b</td><td className="bull">云上 ↓75.3k 38b</td><td>Sell 5</td><td>BULL hid</td></tr>
                <tr><td>30m</td><td className="num">76,758</td><td className="num">67.6</td><td className="bull">金叉（水下）26b</td><td className="bull">云上 ↓75.9k 7b</td><td>Sell 1</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">76,758</td><td className="num">62.3</td><td className="bull">金叉（水下）11b</td><td className="neut">云内 76.5k–76.8k 1b</td><td>Buy 1</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">76,758</td><td className="num">51.0</td><td className="bull">金叉（水下）0b · 刚印</td><td className="bear">云下 ↑77.6k 51b</td><td>Sell 3</td><td>BEAR hid</td></tr>
                <tr><td>8h</td><td className="num">76,758</td><td className="num">—</td><td className="bull">金叉（水下）0b · 刚印</td><td className="bear">云下</td><td>—</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">76,758</td><td className="num">44.2</td><td className="neut">—</td><td className="bear">云下 ↑78.0k 3b</td><td>Buy 4</td><td>BEAR hid</td></tr>
                <tr><td>1d</td><td className="num">76,758</td><td className="num">45.9</td><td className="bear">死叉（水上）12b</td><td className="bull">云上 ↓74.7k 38b</td><td>Buy 3</td><td>BEAR reg</td></tr>
                <tr><td>3d</td><td className="num">76,758</td><td className="num">50.9</td><td className="neut">—</td><td className="neut">云内 73.5–93.0k 7b</td><td>Buy 4</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">76,758</td><td className="num">45.6</td><td className="bull">金叉（水下）5b</td><td className="bear">云下 ↑100.3k 16b</td><td>Buy 1</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">76,758</td><td className="num">48.9</td><td className="neut">—</td><td className="bull">云上 ↓46.9k 27b</td><td>Buy 7</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 00:01Z 扫描（滚动 latest 文件；
                    原样存档于 audits/2026-05-24-desk-note.md）。
                    Header alerts：<em>4h 水下金叉 刚印</em>与
                    <em>8h 水下金叉 刚印</em>——两者都是早期金叉
                    （DIF 水下）变体，按「空头转多探测」处理、不当确认。
                    本次扫描无活跃 ⚡TD9（昨日 1h TD9 BUY 在 $75,475 被印证
                    ——价格从那个 print 收回 $1,277）。
                    收盘均为未收盘 K 线；未收盘前每个值按 provisional。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵是本页最响的一格。
              <span className="dn-signal">
                四条日 MA 簇在现货 $113 带内
              </span>
              ：<span className="dn-tag">D-EMA50 $76,714 (+0.05%)</span>、
              <span className="dn-tag">D-SMA50 $76,738 (+0.02%)</span>、
              <span className="dn-tag">D-SMA150 $76,792 (−0.05%)</span>、
              <span className="dn-tag">D-EMA100 $76,827 (−0.10%)</span>。
              现货被机械地钉住。簇之上的下一道天花板梯：
              <span className="dn-tag bear">D-EMA20 $77,849 (−1.41%)</span>、
              <span className="dn-tag bear">W-EMA20 $78,110 (−1.74%)</span>、
              <span className="dn-tag bear">W-EMA150 $78,285 (−1.96%)</span>、
              <span className="dn-tag bear">D-SMA20 $79,001 (−2.85%)</span>、
              <span className="dn-tag bear">D-EMA150 $79,071 (−2.93%)</span>，
              再到 <span className="dn-tag bear">
                D-SMA200/EMA200 $80.5–81.5k (−4.68/−5.83%)
              </span>
              天花板。下方：薄一层
              <span className="dn-tag bull">W-SMA20 $74,998 (+2.34%)</span>，
              然后是长跑道
              <span className="dn-tag bull">W-EMA200 $73,698 (+4.14%)</span>
              / <span className="dn-tag bull">D-SMA100 $72,682 (+5.60%)</span>
              周期之锚。更高处与不再活跃：W-SMA50
              <span className="dn-tag bear">$94.0k (−18.35%)</span>、
              W-SMA100 <span className="dn-tag bear">$88.2k (−13.00%)</span>、
              W-EMA50 <span className="dn-tag bear">$85.2k (−9.94%)</span>。
              <span className="dn-em">
                W-SMA150 / W-SMA200 仍未计算——parquet 历史 125 根周线 bar，
                不足两个窗口；W-EMA150 $78,285 (−1.96%) 与 W-EMA200
                $73,698 (+4.14%) 因 EMA 从可用历史 seed 而显示。所有 MA
                锚定 parquet 最末 bar 2026-05-24 00:06Z（close $76,628）；
                偏移按现货 $76,752 重算。显示水位为 $ 取整；偏移按精确
                序列值计算。
              </span>{' '}
              簇是 dealer 图要对着交易的开关——见 §III。
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · GEX 翻回正 · flip 下移</span>
            </h2>

            <p>
              dealer gamma <span className="dn-signal">
                从 −57.1M 翻回 +83.8M
              </span>
              ——24h 内约 $141M 的压波方向摆动，比 05-23 的 −$125M 反向
              摆动还要大。aggregate GEX
              <span className="dn-tag bull">+83.8M/1%</span>，0-γ flip
              下移到 <span className="dn-tag">$75,768</span>
              （较 05-23 的 $76,325 −$557）。现货 $76,752 在 flip
              <span className="dn-tag bull">上方 +1.30%</span>——GEX 源
              文件自己的「dist to flip」对 Deribit-index $76,784 也读
              <span className="dn-em">+1.3%</span>（idx 较现货 ~$32 之上；
              双参考在取整内一致）。flip 上方 dealer 净多 gamma，意思是
              对冲流<span className="dn-em">压波</span>下一步——昨天
              加速破到 $74,378 的那本 dealer 书，今天会让两边的延续都
              慢下来。正天花板重新增厚：顶墙
              <span className="dn-tag bull">$80k +45.69M</span>
              （05-23 时 $80k +29.06M、回了约 $17M）、
              <span className="dn-tag bull">$82k +18.86M</span>
              （前 +13.92M）、
              <span className="dn-tag bull">$78k +10.61M</span>（前为负）、
              <span className="dn-tag bull">$85k +9.58M</span>、
              <span className="dn-tag bull">$90k +8.77M</span>、
              <span className="dn-tag bull">$81k +7.82M</span>。
              下方负 pocket 变薄但没消失：
              <span className="dn-tag bear">$75k −31.66M</span>
              （05-23 时 −53.53M——重新武装得轻一点、部分 put gamma 衰减）、
              <span className="dn-tag bear">$74k −10.21M</span>（前 −13.86M）、
              <span className="dn-tag bear">$76k −9.58M</span>（前 −15.21M）、
              <span className="dn-tag bear">$60k −7.97M</span> 崩盘 put
              残余。by-expiry strip 从一周长的负隧道翻成大部分正的梯：
              <span className="dn-tag bull">24MAY 0DTE +3.70M</span>、
              <span className="dn-tag bear">25MAY −12.64M</span>（近月仅
              剩这一个负）、
              <span className="dn-tag bull">26MAY +2.22M</span>、
              <span className="dn-tag">27MAY +0.32M</span>、
              <span className="dn-tag bull">29MAY +17.28M</span>（承重的
              近月）、<span className="dn-tag bull">5JUN +3.59M</span>、
              <span className="dn-tag bull">12JUN +4.44M</span>、
              <span className="dn-tag bull">26JUN +14.52M</span>，然后
              一路正到年末。
            </p>

            <p>
              直白读：<span className="dn-signal">
                加速昨天那一破的 dealer regime 没了；支持 05-21 / 05-22
                盘整的 regime 回来了、而且更响
              </span>
              。+83.8M 是自 05-22 +67.4M（那天 flip 之前）以来最强的压波
              读数。MA 簇钉位（§II）拿到 dealer flow 的支持：现货被
              头顶长 gamma 与底下 $75k 负 pocket 夹住、dealer 对冲会
              对着任一方向的出簇交易。25MAY −12.64M 那条 strip 是近期
              唯一皱褶——一个周日夜晚的近月负 pocket，万一仓位转空又
              会放大下行。932 个合约的 IV 中位数
              <span className="dn-tag">42.2%</span>对 30D close-to-close RV
              <span className="dn-tag">26.2%</span>——链层 richness
              <span className="dn-tag">~+16.0pt</span>，较 05-23 的 +15.7pt
              略宽、较 05-22 的 +17.5pt 略窄。一如既往，那是 N 个合约
              的链中位数、<span className="dn-em">不是</span>可交易 spread；
              到期 / strike 级别的 vega、skew、term structure 仍未载入，
              vol 读法保持 framework only。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · 周末持平 · 跨资产 · BTC 单名落后</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观与 05-23 基本一致——周日数、FRED 周末
              </span>
              。dashboard 渲染时间 2026-05-23 22:17Z、较快照早约 1.7h。
              US 10Y nominal <span className="dn-tag">4.57%（0.0bp）</span>
              ——仍在 4.55% reclaim-long filter 之上 2bp（连续 3 个 session
              没过）。10Y TIPS real
              <span className="dn-tag bear">2.18%（+5.0bp）</span>
              ——在 05-23 +5bp 之后再 +5bp、regime z 仍 +2.26 risk-off。5Y5Y
              BE inflation <span className="dn-tag">2.26%（+5.0bp）</span>
              ——本日唯一新鲜的周五 print 变化、对昨日所写的 2.21% +5bp
              （注：2026-05-23 备忘记录的 5Y5Y 是相对 05-22 的 −8bp Δ；
              今天面板把 5Y5Y 写为 2.26% +5bp——+5bp 是对昨日所示值的、
              水位本身回到 05-22 区域）。HY OAS
              <span className="dn-tag bull">2.78%（−2bp）</span>——再松，
              regime 仍 loose。MOVE 债波
              <span className="dn-tag">78.4（−1.29）</span>——再缓和。DXY
              <span className="dn-tag bear">99.32（+0.13）</span>——紧 episodic
              标签、+1.85σ episodic。Fed 净流动性
              <span className="dn-tag bull">$5.907T（+0.030T）</span>。慢的
              regime z-score 仍 extreme——10Y
              <span className="dn-tag bear">+2.24</span>、TIPS
              <span className="dn-tag bear">+2.26</span>、JGB
              <span className="dn-tag bear">+2.55</span>，EXTREME RISK-OFF
              标签维持——但今天变的不是日增量。
              <span className="dn-em">
                05-21 升级的 credit 裂痕观察继续回撤——HY OAS 2.78% 距
                3.0% 重新加 tail 门约 22bp；reclaim-long 利率 filter
                （10Y &lt; 4.55%）仍差 2bp。今天宏观是个平的背景；
                从 $74,378 到 $76,752 这一段来自 BTC 这本书在 cover、
                不是来自宏观的新鲜脉冲。
              </span>
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
                <tr><td>US 10Y nominal</td><td className="num">4.57%</td><td className="num">0.0bp</td><td className="num bear">+2.24</td><td className="num bear">+1.52</td><td className="bear">risk-off · 持平</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.18%</td><td className="num bear">+5.0bp</td><td className="num bear">+2.26</td><td className="num bear">+2.47</td><td className="bear">紧 · 抬升</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.26%</td><td className="num bear">+5.0bp</td><td className="num">+0.35</td><td className="num">+0.47</td><td className="neut">无标签 · 回到 05-22</td></tr>
                <tr><td>HY OAS</td><td className="num">2.78%</td><td className="num bull">−2.0bp</td><td className="num bull">−0.98</td><td className="num bull">−1.02</td><td className="bull">loose · risk-on</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num stale">−0.523</td><td className="num">−0.01</td><td className="num bull">−0.48</td><td className="num bull">−1.35</td><td className="stale">陈旧 8d · 中性</td></tr>
                <tr><td>MOVE 债波</td><td className="num">78.4</td><td className="num bull">−1.29</td><td className="num">+0.11</td><td className="num">+1.01</td><td className="neut">波动再缓和</td></tr>
                <tr><td>DXY</td><td className="num">99.32</td><td className="num bear">+0.13</td><td className="num bear">+0.93</td><td className="num bear">+1.85</td><td className="bear">紧 episodic</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.907T</td><td className="num bull">+0.030T</td><td className="num bull">+0.77</td><td className="num bull">+2.16</td><td className="bull">loose · 激增</td></tr>
                <tr><td>USD/JPY</td><td className="num">159.15</td><td className="num">+0.14</td><td className="num bear">+1.21</td><td className="num">+0.62</td><td className="neut">无标签</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">2.06%</td><td className="num">0.0bp</td><td className="num bull">−0.65</td><td className="num bear">+1.52</td><td className="bear">紧 episodic</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7940</td><td className="num bull">−0.01</td><td className="num bull">−1.82</td><td className="num bull">−1.35</td><td className="neut">无标签</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">+17.0bp</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">月度 · 不作依据</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗口，summary 00:01Z——
              <span className="dn-em">7 天滚动读数、不是「今天」</span>
              ）。平均 off-diagonal{' '}
              <span className="dn-tag">|r| 0.403</span>
              （较 05-23 的 0.395 紧——仍属 NORMAL 带）。BTC 的列出系数：
              NQ <span className="dn-tag">+0.668</span>、SP500
              <span className="dn-tag">+0.642</span>、CL
              <span className="dn-tag">−0.617</span>、NVDA
              <span className="dn-tag">+0.572</span>、BRENT
              <span className="dn-tag">−0.543</span>、SILVER
              <span className="dn-tag">+0.484</span>、GOLD
              <span className="dn-tag">+0.449</span>、TSLA
              <span className="dn-tag">+0.475</span>。7d 相对表现：
              <span className="dn-tag bear">BTC −1.49%</span>、NQ
              <span className="dn-tag bull">+3.01%</span>、SP500
              <span className="dn-tag bull">+2.60%</span>、JP225
              <span className="dn-tag bull">+2.45%</span>、NVDA
              <span className="dn-tag bear">−1.54%</span>、AAPL
              <span className="dn-tag bull">+4.36%</span>、TSLA
              <span className="dn-tag bull">+3.47%</span>、AMZN
              <span className="dn-tag bull">+3.22%</span>、GOOGL
              <span className="dn-tag bear">−1.93%</span>；金属混杂——
              GOLD <span className="dn-tag bull">+0.15%</span>、SILVER
              <span className="dn-tag bull">+2.57%</span>、PALL
              <span className="dn-tag bear">−4.59%</span>、PLAT
              <span className="dn-tag bear">−3.64%</span>；能源
              崩盘——CL <span className="dn-tag bear">−12.05%</span>、
              BRENT <span className="dn-tag bear">−11.57%</span>、NGAS
              <span className="dn-tag bear">−3.10%</span>。
              <span className="dn-em">
                这个 7d 窗口显示美国主要股指 +2.6% 到 +3.0%
                （NQ +3.01%、SP500 +2.60%、JP225 +2.45%）而 BTC 走
                −1.49%、能源双位数崩盘（CL −12.05%、BRENT −11.57%）。
                故事是 BTC vs 股指综合的差距——BTC 对股指梯队明显落后。
                单名落后里更深的有（GOOGL −1.93%、NVDA −1.54%、
                PLAT −3.64%、PALL −4.59%）；我们不声称 BTC 是 board
                上最落后的单名，只是整周最响的 BTC vs 股指偏离。窗口
                构成效应叠加（滚出的那根 bar 是前一周的高点），但 BTC
                跑输 NQ/SP500 的量级是个单名故事——仓位与 dealer 书的
                BTC 本身、不是风险资产的 beta 回声。能源 / BTC 的负
                相关（−0.62 / −0.54）让原油崩盘在回看里是 BTC 的软
                正向跨资产偏，尽管没体现为 BTC 强势。
              </span>{' '}
              JGB 月度 2.52% 带 EXTREME RISK-OFF 月度标签——不作依据。
              USD/JPY 159.15。
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · runner 已平 · 观望为主 · 有 squeeze 脸、无验证</span>
            </h2>

            <p>
              <span className="dn-signal">
                05-23 runner 已平；本台除 macro tail 外无方向性持仓
              </span>
              。簇钉位 + dealer flip 上方 +gamma + funding 飙 + 未印证
              的 SM cover 是一个 setup、不是一个交易。纪律是要等到任一
              侧印证（SM net &gt; −5k 且 1h 收盘站住簇之上——加多偏）
              或验证失效（1h 收盘 &lt; flip $75,768 且 SM 仍 &lt; −20k
              ——重新武装空）才可再入。坐在 $76,750 的簇上、SM 创纪录净空
              又没在 cover，是一个被 dealer 书钉在半空的硬币——这里的正确
              规模是零。
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">已平 · 前 runner · 执行记账</span>
              <div className="dn-trade-name">
                flip 破位空——握住整段下跌、在反弹里被平
              </div>
              <div className="dn-thesis">
                05-23 runner 的规则格子：trail $76,400 盘中、cover 信号
                1h 收盘 &gt; $76,325、runner 第二目标 1h 收盘 &lt; $75,000、
                加仓重新武装 1h 收盘 &lt; $75,000 且 SM 仍 &lt; −5k。
                快照之后 1h 收盘立刻进 sub-flip、连续 ~20 个 UTC 小时
                停在 flip 之下；runner 的计划目标序列干净印出：第二目标
                门在 <span className="dn-em">2026-05-23 07:00Z、1h 收盘
                $74,547</span> 平掉 runner 的一半（对 $76,497 入场
                +$1,950/单位）。加仓重新武装在同门印出（1h 收盘 &lt; $75k
                + SM −31.5k &lt; −5k），+0.2R 加仓在大约 $74,547 填入。
                现货随后印出 24h 低位 $74,378（07:51Z、距 $74k 拉伸目标
                $378）。cover 信号（1h 收盘 &gt; $76,325）约 13 小时后在{' '}
                <span className="dn-em">2026-05-23 20:00Z、1h 收盘 $77,132</span>
                印出、平掉 residual + 加仓。Thesis 是对的、计划顺序也
                工作了；规则武装的加仓追到了底，把利润吃回去大半。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">已平 · 2026-05-23 20:00Z cover 信号印出</span></div>
                <div><span className="dn-lvl-k">仅 runner P&amp;L</span><span className="dn-lvl-v bull">+0.15R @ $75,700（05-22）+ +0.075R @ $74,547 + −0.075R @ $77,132 = 净 ≈ +0.165R/单位（0.3R 基础上小到中等赚）</span></div>
                <div><span className="dn-lvl-k">加仓 P&amp;L（若执行）</span><span className="dn-lvl-v bear">+0.2R @ $74,547 → −$2,585/单位 @ $77,132 ≈ 加仓 −0.22R/单位</span></div>
                <div><span className="dn-lvl-k">净交易（按规则）</span><span className="dn-lvl-v">runner +0.165R + 加仓 −0.22R ≈ 整体 −0.06R/单位（按规则执行加仓为小亏）</span></div>
                <div><span className="dn-lvl-k">净交易（discretion 跳加仓）</span><span className="dn-lvl-v bull">仅 runner ≈ +0.165R/单位（小到中等赚）</span></div>
                <div><span className="dn-lvl-k">事后印出的低位</span><span className="dn-lvl-v">$74,378 @ 2026-05-23 07:51Z · 距拉伸目标 $378</span></div>
                <div><span className="dn-lvl-k">教训</span><span className="dn-lvl-v">在 sub-flip 1h 收盘 + 可见 TD9 BUY 的规则武装加仓本质上就是在买底；05-23 framework 块已经写过「TD9 BUY 用来管理空、不要进多」——那条 discipline 就是跳加仓的依据</span></div>
              </div>
              <div className="dn-gating">
                <b>为何在 §V 标记：</b>纪律是无论规则给我们留下赚、亏
                还是分裂的结果都如实记录。runner 安排完美工作；加仓票据
                是给回利润的那部分。两条 runbook lineage：(a) 按触发当下
                的 SM 定规模（lineage 05-23 F-02）继续有效；(b)
                <em>价格极端门的条件加仓只在 positioning 联署延续时才
                fire、而不是同一数据块在标 counter-trend 衰竭
                （TD9 BUY + RSI 23）时</em>。把 05-23 framework 的 caveat
                转成下一版的硬加仓门限定。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">观望 · 主仓 · 今日</span>
              <div className="dn-trade-name">
                无新方向——钉在簇上、等 SM 信号
              </div>
              <div className="dn-thesis">
                现货钉在四条日 MA（D-EMA50、D-SMA50、D-SMA150、D-EMA100
                $76,714–$76,827）$113 带里；dealer 书 +83.8M 压两侧
                departure；SM 仍 −24.9k 装载好、没跨过 cover 信号；funding
                付空头 +9.9% 年化（squeeze fuel 在积）。多偏（SM cover
                上的 squeeze）与空偏（flip 失守、SM 仍堆着的 re-break）
                都有 case；都没印证。在 split 信号的钉位上正确规模是零。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">stance</span><span className="dn-lvl-v">flat directional · 无新风险</span></div>
                <div><span className="dn-lvl-k">决策带</span><span className="dn-lvl-v">$75,768（flip）↔ $76,827（D-EMA100、簇顶）</span></div>
                <div><span className="dn-lvl-k">上行再入</span><span className="dn-lvl-v bull">SM net &gt; −5k 且 1h 收盘 &gt; $76,827（簇顶）——squeeze 武装</span></div>
                <div><span className="dn-lvl-k">下行再入</span><span className="dn-lvl-v bear">1h 收盘 &lt; $75,768（flip）且 SM 仍 &lt; −20k——re-break 武装</span></div>
              </div>
              <div className="dn-gating">
                <b>为何观望、不下方向赌：</b>positioning 数据与 dealer
                数据给的是相反的战术含义。SM 创纪录空 + funding 付空头
                + 散户去拥挤 = 教科书 squeeze setup，但 SM 没闪
                （只 cover 了 ~32k 峰位中的 ~7k、从未跨过 −5k）。
                Dealer +83.8M 在 flip 上方 + MA 簇钉 = 均值回归钉位；
                chain 也没在定价两侧延续（IV 42.2% / RV30 26.2% richness
                ~+16pt、与前几日持平）。坐在钉位上两边都堆好了，是个
                等盘面的问题、不是仓位的问题。任一侧印证再武装。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · squeeze 观察 · 非交易</span>
              <div className="dn-trade-name">
                squeeze 潜力——武装、未装载
              </div>
              <div className="dn-thesis">
                SM 创纪录空（long 9.66k − short 34.53k、long 是整周最小、
                short 是整周最大）+ funding 付空头 +9.9% 年化（自 05-17
                以来最高）+ 散户去拥挤（55.3% 对 24h 前 60.1%）+ dealer
                +83.8M 在 flip 上方压波 + 价格在 flip 上方 = 教科书
                cover squeeze setup。缺的那道菜是 SM 自己的手：SM 从
                −32.3k 峰位回了 7.4k（部分 cover），但仍是 cover 信号
                门槛的 5 倍（−24.9k 对 −5k）。本台不在 positioning 没
                印证的情况下提前布置 squeeze——前两次 SM 重新加空
                （05-22 06:30Z、05-23 05:00Z）都是单根小时离散加仓、
                没预警。除非 SM net 移到 −10k 上方至少 4h 且 1h 收盘
                站上簇顶，否则把 squeeze 当观察、不当交易——以下水位行
                的门为准。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">观察区</span><span className="dn-lvl-v">现货 $75,768（flip）→ $77,900（D-EMA20 / 下一道头顶梯）</span></div>
                <div><span className="dn-lvl-k">squeeze 武装条件</span><span className="dn-lvl-v bull">SM net &gt; −10k 持续 &gt; 4h 且 1h 收盘 &gt; $76,827（簇顶）</span></div>
                <div><span className="dn-lvl-k">squeeze 失败条件</span><span className="dn-lvl-v bear">SM net 跌 &lt; −30k 或 1h 收盘 &lt; $75,768（flip）——重新武装空侧</span></div>
              </div>
              <div className="dn-gating">
                <b>为何不预置：</b>本台已经看到两次 SM 重新加空（05-22、
                05-23）从仓位中性的读法里抛出来。一笔不来的 squeeze
                的 base-rate 成本在这里是非对称的——$76.7–77.0k 进多，
                stop 距入场只有几百块（flip 失守）然后进负 pocket。等
                SM 把它做出来、或等簇破再按实信号入场。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">macro tail · 对冲 · 维持</span>
              <div className="dn-trade-name">
                downside put-spread——残余 0.15R 维持
              </div>
              <div className="dn-thesis">
                宏观较 05-23 基本持平（HY OAS −2bp 紧、MOVE −1.29 缓和、
                10Y / TIPS 持平）。无新鲜缓和、无新鲜升级——残余对冲
                对 regime z 背景（10Y +2.24σ、JGB +2.55σ）的 rationale
                仍成立。25MAY −12.64M 的到期重叠是一道软的近月负 pocket，
                但无新鲜加仓 justification。本篇无规模动作。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">结构</span><span className="dn-lvl-v">long $74k / short $70k put</span></div>
                <div><span className="dn-lvl-k">到期</span><span className="dn-lvl-v">29-MAY-26（5d）——近月 strip 翻回大部分正（29MAY +17.28M）</span></div>
                <div><span className="dn-lvl-k">本篇动作</span><span className="dn-lvl-v">维持 0.15R · 不加（regime z 未变）· 不减（重新加仓门两侧都未破）</span></div>
                <div><span className="dn-lvl-k">重新加仓触发</span><span className="dn-lvl-v bear">HY OAS &gt; 3.0% 收盘 → 朝主仓加；10Y &gt; 4.75% 收盘 → +0.1R；1d 收盘跌破 $74.7k 云 → 尾部最大</span></div>
              </div>
              <div className="dn-gating">
                <b>说明：</b>strike/premium/Greeks 未载入——结构示意，
                规模待 Deribit 29-MAY chain 拉取。近月 strip GEX 从负
                隧道（05-23）翻回大部分正梯（今日）——所持 29MAY 到期
                现在 +17.28M（前 −14.62M），意味着该到期的 dealer
                对冲现在压制延续而非加速延续；这对一笔活跃的下行 tail
                是稍差的 dealer 环境，但结构性 rationale（regime z、
                fat-tail 保险）不变。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 钉位、开关与 squeeze 触发</span>
            </h2>

            <p>
              05-23 的六条决策条件，过去 24h 内有三条印出：(i)
              <em>runner 第二目标</em>（1h 收盘 &lt; $75,000）在
              2026-05-23 07:00Z、1h 收盘 $74,547 印出——按规则平掉
              runner 一半；(ii) <em>加仓重新武装</em>（1h 收盘
              &lt; $75,000 + SM net 仍 &lt; −5k）在同门印出——按规则
              +0.2R 加仓在大约 $74,547 填入；(iii) <em>平仓（结构）</em>
              （1h 收盘 &gt; $76,325 flip 收回）在 2026-05-23 20:00Z、
              1h 收盘 $77,132 印出——按规则平掉 residual + 加仓。其余
              三行干净：SM net 没翻 &gt; −5k（cover 信号——24h 窗口里
              没有一分钟跨过）；1d 没收盘跌破 $74.6k 云（1d 未收盘在
              $76,628——远在上方）；HY OAS 没收盘 &gt; 3.0%（缓和到
              2.78%）；10Y 没收盘 &gt; 4.75%（持平 4.57%）。今天条件
              围绕新的钉-flip 网格重置：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>squeeze 印证</td><td className="bull">SM net &gt; −10k 持续 &gt; 4h 且 1h 收盘 &gt; $76,827</td><td>scout 多 0.2R、目标 $77,850（D-EMA20）</td></tr>
                <tr><td>squeeze 加印证</td><td className="bull">SM net &gt; −5k 且 1h 收盘 &gt; $77,900</td><td>加 +0.2R、目标 $79,000–79,300（D-SMA20 / 簇）</td></tr>
                <tr><td>簇失守（re-break）</td><td className="bear">1h 收盘 &lt; $75,768（flip）且 SM 仍 &lt; −20k</td><td>flip 破位空 0.3R、目标 $75,000 / $74,378（前低）</td></tr>
                <tr><td>周期中段升级</td><td className="bear">1d 收盘跌破 $74,700 云</td><td>tail 升到主仓（0.3R），空开仓不问 SM</td></tr>
                <tr><td>macro tail 重新加</td><td className="bear">HY OAS &gt; 3.0% 或 10Y &gt; 4.75% 收盘</td><td>tail +0.1R 朝主仓</td></tr>
                <tr><td>reclaim filter 印证</td><td className="bull">SM net &gt; 0 持续 且 10Y 收盘 &lt; 4.55% 且 1h 收盘 &gt; $77,900</td><td>scout 多 0.2R（与 squeeze book 分开）</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>这</em>份备忘的一行是
              <span className="dn-signal">
                SM 下一个离散步——要么朝零迈一步（cover；squeeze 武装），
                要么再朝更深迈一步（re-stack；前两次破位会叠加）。任一
                情况下，移动都是 positioning 驱动、dealer 书是胜方的
                加速器、价格趴在 MA 簇上当钉位等书定方
              </span>
              。除非 SM 较当前 −24.9k 朝任一方向移 &gt; ~$10k，本篇按
              写出来的方式跑——flat directional、macro tail 维持、squeeze
              当观察不当交易。钉位可以撑数小时、也可一根 bar 破——前两次
              SM 跳步（05-22 06:30Z、05-23 05:00Z）分别 6 分钟与 ~5 分钟
              完成、没有预警、除了已经在页面上的 positioning 极端。今天
              本页有全部一样的 ingredient、唯缺方向。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计追踪 · v2（已过 codex 敌对式审计 · 0 CRITICAL · 修复 4 HIGH + 3 MED + 3 LOW）
            </span>
            <b>Codex CLI 0.132.0（gpt-5.5、xhigh reasoning）敌对式审计
            跑通——empty-stdin 管道稳定，无 TTY 阻塞。</b>无 CRITICAL；
            10 处发现，中英双版均已修：{' '}
            (a) <b>F-01 · HIGH</b> &mdash; <em>runner 止损时序倒了</em>：
            v1 lead 说 runner 在 2026-05-23 00:59Z 1h 收盘 $76,929 被止——
            但作者把 live_db <code>t</code> 字段（Beijing）当成了 UTC；
            00:08Z 快照之后第一根 1h 收盘 &gt; $76,400 实际上在
            2026-05-23 20:00Z 收盘 $77,132，晚了约 20 个 UTC 小时。
            runner 实际上握住了整段下跌；中英 lead、§I、§V 已按修正后的
            执行序列重写（第二目标门 07:00Z 收盘 $74,547、cover 信号
            20:00Z 收盘 $77,132）。{' '}
            (b) <b>F-02 · HIGH</b> &mdash; <em>SM 重新加空时间戳 tz
            污染</em>：v1 说重新加空在「13:00Z 05-23」——那是 BJ 13:00、
            即 UTC 05:00。已核验重新加空窗：两个离散分钟步在 2026-05-23
            05:26Z（−14.0k 步）与 05:31Z（−4.1k 步），净 −14.3k → −32.3k
            在一根 UTC 小时内。SM 峰值净空在 2026-05-23 08:51Z，净
            −32.4k（long 7.46k − short 39.83k）。中英 §I 与 §VI 所有
            时间戳改写为 UTC、必要处用括号注 BJ。{' '}
            (c) <b>F-03 · HIGH</b> &mdash; <em>P&amp;L 算术依赖 F-01</em>：
            v1 引用「+~$50 / +~$120 / ~+0.07R」基于 $76,929/$76,400 的
            stop；按修正后的 $77,132 stop，residual 是 −$635/单位。
            §V trade 块从头到尾重算：仅 runner +0.165R/单位，加仓
            （按规则执行）−0.22R/单位，按规则净 ≈ −0.06R/单位，
            discretion 跳加仓变体 ≈ +0.165R/单位。两种读法都公开。{' '}
            (d) <b>F-04 · HIGH</b> &mdash; <em>§VI lineage 重建</em>：
            v1 说「六条没有一条印出」——按修正后的时序实际上有三条
            印出（第二目标、加仓重新武装、结构性 cover）。中英 §VI
            lineage 段已重写。{' '}
            (e) <b>F-05 · MED</b> &mdash; <em>squeeze 观察 gating 不一致</em>：
            v1 thesis 写「SM net &gt; −5k 或 &lt; −15k ≥ 4h」——但 SM
            在整个 4h 窗口里都 &lt; −15k，字面上已经成立。已删除
            「或 &lt; −15k」分句；thesis 现在沿用水位行的权威门
            （武装：SM &gt; −10k 持续 &gt; 4h + 1h 收盘 &gt; $76,827；
            失败：SM &lt; −30k 或 1h 收盘 &lt; $75,768）。{' '}
            (f) <b>F-06 · MED</b> &mdash; <em>宏观增量写错</em>：10Y TIPS
            real Δ 写成了「0.0bp / 持平」，macro_dashboard.html 显示
            +5.0bp；Fed 净流动性 Δ 写成「持平」，面板显示 +0.030T。
            中英宏观表与正文已修正。{' '}
            (g) <b>F-07 · LOW</b> &mdash; <em>funding 措辞</em>：
            「单调上行」太重；实际分钟增量是 511 正 vs 433 负。改成
            「净上行（511 分钟正 · 433 负）」中英 dn-meta。{' '}
            (h) <b>F-08 · LOW</b> &mdash; <em>ZH 平价泄漏</em>：
            ZH GEX 段「922 932 个合约」——删除过时的 922。{' '}
            (i) <b>F-09 · LOW</b> &mdash; <em>跨资产说法太宽</em>：
            「BTC 是 board 上除能源外落后最多的单名」其实是假的
            （GOOGL −1.93%、NVDA −1.54%、PLAT −3.64%、PALL −4.59%
            都更深）。改成「BTC vs 美国主要股指综合」的框定、并公开
            更深的单名落后。{' '}
            (j) <b>F-10 · HIGH</b> &mdash; <em>审计存档缺失</em>：
            页面声称 00:01Z MTF 扫描存档于
            <code>audits/2026-05-24-desk-note.md</code>；文件不存在。
            已创建并把 00:01Z 扫描原样存档（滚动 latest 文件至此已
            滚到 08:31 BJ）。{' '}
            审计放行：funding × 1095（无 ×100 复发 05-15 地雷）、GEX
            双参考符号一致（flip $75,768、total +83.8M、dist +1.30%
            对实时 $76,752 / +1.3% 对 Deribit-idx $76,784——干净塌成
            同一个）、GEX 墙与 by-expiry strip、MA 矩阵
            （D-EMA50/SMA50/SMA150/EMA100 簇在现货 $113 带内 ·
            W-SMA150/200 在 125 周线 bar 下不可计算）、30D RV 26.229%、
            claims-vs-loaded-data 纪律（NTT / max-pain / strike-IV /
            BTC-NQ framework only · IV 链中位数 · 跨资产框定为 7d
            滚动窗口、不是「今天」）、requireViewer gating（两条路径
            首句）、index <code>&lt;li&gt;</code> 新增。
            <b>Build 说明（INFO）：</b>本服务器跑 Node 18.19.1；Next
            16.2.6 在 Node &lt; 20.9.0 硬退出于
            <code>node_modules/next/dist/bin/next:21-25</code>，
            完整 <code>next build</code> 因环境受阻（lineage 05-21 / 05-22 / 05-23）。
            <code>npx --no-install tsc --noEmit</code> 退出 0
            （TypeScript 干净）作为 build 替代证据。原始审计记录与
            完整 MTF 扫描存档：audits/2026-05-24-desk-note.md。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是 Hysteresis Research 内部交易台讨论材料，
            <em>非投资建议、非要约、非任何形式招揽</em>
            ，未对任何收件方个人情况定制。所有数字反映同一原子快照
            （2026-05-24 00:00Z），各节出处见上方数据来源区；宏观较
            05-23 基本未变（周日数、FRED 周末）。水位、规模与条件用于
            说明本台流程，不构成持续建议。过往的相关性、gamma 与仓位
            模式不约束未来盘口。衍生品有全损风险；杠杆条件下损失可能
            超过保证金。<em>请自行做研究。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                钉在簇上、dealer 书把它按住、仓位簿两边都装好了。下一步
                看 SM。
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
            v2 · 2026-05-24 00:00Z · 数据源：live_db.json · mtf_div_latest.html ·
            btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
