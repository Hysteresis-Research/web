import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-06-11 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-06-11',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-06-11' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260611() {
  await requireViewer('/zh/desk/2026-06-11');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-06-11 · v2</span>
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
              <span className="dn-big">$61,651</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.38%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-06-11 00:07Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-06-11 00:07Z（snapshot pin）</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · 所有衍生值钉到 00:07Z 锚行 · live `t`
                    字段是 BJ-local（UTC+8）、所以 00:07Z 锚行是 `06-11
                    08:07` · 此快照落在 10JUN 08:00Z 期权结算后约 16h07m、
                    在 11JUN 08:00Z 结算前约 7h53m
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-11 00:01Z scan</td>
                  <td className="dn-flag">
                    滚动 latest 文件（约每 15 分钟重写）· 较 00:07Z 快照锚
                    滞后约 6 分钟 · 含未收盘 K 线 · 存档于{' '}
                    <code>/opt/desk-note/snapshots/2026-06-11-0007/</code>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-11 00:01Z 快照</td>
                  <td className="dn-flag">
                    pre-settle · 较快照锚滞后约 6 分钟 · Deribit idx
                    $61,747 对 live $61,650.58 · 956 合约（05-10 是 958 · −2）·
                    11JUN 0.3DTE −14.07M 今日 08:00Z 结算（约 8h 后）· 除
                    11JUN 后 aggregate ≈ −54.93M 仍净负（dashboard-total
                    捷径；显示行非可加 —— 见盘口本子节）· 存档于{' '}
                    <code>/opt/desk-note/snapshots/2026-06-11-0007/</code>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-11 00:01Z
                  </td>
                  <td className="dn-flag">滞后约 6 分钟 · 7d 1h bar · 22 资产 · 167 rows · regime NORMAL（mean |r| 0.318）· 存档于 <code>/opt/desk-note/snapshots/2026-06-11-0007/</code></td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-10 22:15Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1h52m · FRED Tier-1 长端松（10Y −3bp 到
                    4.53%、TIPS −1bp 到 2.20%）· HY OAS +3bp 到 2.78%（现
                    AT 那 2.78% re-grow 闸）· DXY 99.88（−0.17）· Fed 净
                    流动性 $5.834T（−0.038T）· 存档于{' '}
                    <code>/opt/desk-note/snapshots/2026-06-11-0007/</code>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵 + 200W 地板</td>
                  <td className="dn-v-cell">btcusdt_1m parquet · 全历史 + 2024–2026 子集</td>
                  <td className="dn-flag">
                    偏移按 live 现货重算 · 子集 MA 阶梯取 2024–2026 窗（按
                    台面政策）· 200W 地板读自全历史 parquet（W-MON
                    resample、354 根周 bar）·{' '}
                    <code>weekly_200sma.json</code> 缺失、所以 200W 直接从
                    parquet 算、JSON 的 percentile / last-event 字段不可得
                    （非杜撰）· 子集 W-SMA150 / W-SMA200 不可计算（128 根
                    子集周 bar）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED 月度 · IRLTLT01JPM156N</td>
                  <td className="dn-flag">陈旧 70d · 月度 · 不作实时</td>
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
              <span className="dn-v bear">−0.48%</span>
              <span className="dn-src">live · 快照 −0.48% ann（快照时空头实付）· 24h 均值 ann −2.41%（05-10 是 +0.93%、翻 −3.34pt）· 封顶占用 0 / 1441 采样行（连续第 7 根封顶空）· 负分钟占比 81.96%（1181 / 1441、05-10 是 35.53%、+46.43pt）· 24h 谷 −5.485% ann @ UTC 11:07 06-10 · 24h 峰 +2.983% ann @ UTC 15:55 06-10</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">快照 +0.35% → −0.48%（−0.83pt）· 均值 +0.93% → −2.41%（−3.34pt）</span>
              <span className="dn-src">区间 −5.485% / +2.983% ann · 最长负付费连段 850 采样行 / 14h08m 墙钟（UTC 00:17→14:25 06-10；盘里有一根重复的 06-10 14:40 行、所以 850 采样行跨的是 14h08m 墙钟而非 14h10m）—— 清掉 ≥4h 空付费 leg-2 闸 AND 快照时 funding 为负、所以这根 re-clear 是 LIVE、不是 stale · 最长正付费连段 253 采样行</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v">+0.21%（+209 BTC）</span>
              <span className="dn-src">live · OI ~平 / 微扩 · 基数 99,258（08:07 基线）→ 99,467 · 24h 峰 101,202 @ UTC 13:58 06-10、谷 99,225 @ UTC 22:49 06-10 · SM long Δ +98、short Δ +1,366 跨 24h 盘</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bear">67.92 / 32.08</span>
              <span className="dn-src">live_db `mkt_long_pct` · 较 05-10 的 67.36 边际再拥挤 +0.57pt（仍拥挤多）· 24h 区间 66.12 / 68.26 · 峰 68.26 @ UTC 09:37 06-10、谷 66.12 @ UTC 15:43 06-10（谷在现货高点 —— 反弹被淡）</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−42.7k（净 SHORT · 连续第 3 根加空）</span>
              <span className="dn-src">live · long 13.78k − short 56.52k · short 峰 58,719 @ UTC 13:26 06-10（压进反弹、不在低点）、short 谷 54,901 @ UTC 01:41 06-10 · long 峰 14,354 @ UTC 16:06 06-10、long 谷 13,619 @ UTC 06:40 06-10 · net 谷（最空）−44,838 @ UTC 13:26 06-10、net 峰（最少空）−41,015 @ UTC 01:41 06-10</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 05-10 备忘</span>
              <span className="dn-v bear">−41.4k → −42.7k（−1,338 更空）</span>
              <span className="dn-src">long +115、short +1,454（各自独立取整、net −1,338）· |Δ| / prior_net = 3.23%（1,338 / 41,398）· 连续第三根加空、但幅度在 EASING（05-10 −2,740 → 今天 −1,338）</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">48.6% / 39.59%</span>
              <span className="dn-src">GEX IV 中位数横跨 956 合约（05-10 是 958、−2）· IV/RV 价差 +9.01pt · 30D close-to-close RV 39.59%（30 returns / 31 closes；29-return 另读 40.23%）</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bear">−2.88%（在下方）</span>
              <span className="dn-src">flip $63,480（前 $63,592、走 DOWN −$112）· 对 live 现货 $61,650.58（61,650.58 / 63,480 − 1 = −2.882%）/ GEX 文件 idx $61,747（−2.730%；61,747 / 63,480 − 1 = −2.730%）—— 两参考都负、现货在 flip 下方 · aggregate GEX −69.0M（前 −58.6M、加深 −$10.4M 负 γ）· 文件自己的 dist-to-flip 读 −2.7%</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                200W 地板盯位仍在线下方开着、但底下点起了一簇均值回归
              </span>
              。现货报<span className="dn-tag bear">−0.38% 到 $61,651</span>、
              走了一根宽的来回（24h 高 <span className="dn-tag">$62,813</span>、
              低 <span className="dn-tag bear">$60,827</span>、净 ~平）。全
              历史 W-MON 200 周 SMA 是 <span className="dn-tag">$62,019</span>
              （200 根收盘 bar、止于 06-08）；live 现货
              <span className="dn-tag bear">−0.59% / −$368 在下方</span>、
              06-10 日收 <span className="dn-tag bear">$61,484</span> 收在它
              下方、未收盘的 06-15 周 bar 印
              <span className="dn-tag bear">$61,596 = −0.68% / −$423 在下方</span>。
              06-15 周收仍是那个二元。<span className="dn-signal">底下变的
              是均值回归盘</span>：funding 决然转负（24h 均值 ann
              <span className="dn-tag bear">+0.93% → −2.41%</span>、快照时
              空头实付、负分钟占比<span className="dn-tag">81.96%</span>、最
              长负付费连段<span className="dn-tag">14h08m</span>跑着 live）、
              TD9-BUY 簇 BROADENED（3d active ⚡ TD9 BUY + 1h/1M pending）、
              而且<span className="dn-em">BTC 从落后反转成相对跑赢</span>——
              BTC 7d −2.73% 现在跑赢 NQ −6.81% 达 +4.08pt（05-10 是一根
              −2.47pt 的落后）、TradFi 滚得更狠。利率筛甚至 re-clear 了：
              10Y 松 <span className="dn-tag bull">4.56% → 4.53%</span>（回到
              4.55% reclaim-long 筛下方）。对着这一切、结构仍偏空：dealer
              本子加深到 <span className="dn-tag bear">−69.0M</span>（flip 走
              下到 <span className="dn-tag bear">$63,480</span>、现货在它下方
              −2.88%）、SM 连压第 3 天空（−1,338 更空、|Δ|/prior 3.23%、
              幅度在 easing）、头顶一根 MA 都没让开。均值回归多 scout 的
              funding 腿这一刻转 LIVE、但 flip-reclaim 腿（1h 收 &gt;
              $63,480、在上方 −2.88%）是把关的留守 ——
              <span className="dn-em">几条腿在收敛、不是对齐</span>。$60k
              崩盘 put 磁铁在两次 re-load 后首次松（−47.86M → −38.65M、
              +9.21M）。台面继续 flat。
            </p>

            <p>
              BTC 报 <span className="dn-tag">$61,651</span> live、
              <span className="dn-tag bear">−0.38%</span> 在 24h、在一条宽
              区间 <span className="dn-tag">$62,812.76 / $60,826.51</span> 内
              （高 @ UTC 15:55 06-10、低 @ UTC 09:22 06-10 —— 24h 前现货是
              $61,886、在 08:07 基线）。盘走了一整根来回、又 ~平回来：1h
              <span className="dn-tag bull">+0.48%</span>、4h
              <span className="dn-tag bear">−0.27%</span>。
              <span className="dn-signal">承重的线仍是 200W 地板</span>：
              W-MON 全历史 200 周 SMA 是
              <span className="dn-tag">$62,019</span>、live 现货
              <span className="dn-tag bear">−0.59% 在下方（$61,651）</span>、
              06-10 日收 $61,484 收在它下方、未收盘的 06-15 周 bar 印
              $61,596 —— 也在下方。在收盘频率口径上、只有
              <span className="dn-tag">8 / 154 根周收（5.19%）</span>印在它
              们各自当时的 200W 下方 —— 正是自 06-09 再破以来盘一直在测试
              的那个低基率位。
              <span className="dn-em">
                200W 是本篇承重的线：一根 06-15 周收回到 $62,019 上方就在
                那条唯一对周期读法要紧的周期上重夺地板；一根收在下方就确认
                当前 post-06-08 floor-watch 谱系里首根周收破 200W（上一根
                全历史 below-own-200W 周收是 2023-10-09）。
              </span>{' '}
              日收谱系显示连续三根收在地板下：06-07 $63,298、06-08
              $63,058、06-09 $61,695、06-10 $61,484（FINAL）、06-11 未收盘
              $61,596 —— 自 06-08 重夺以来、地板在每一根收上都丢了。
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面 · SM 连压第 3 天空（幅度 EASING）· OI ~平 · retail 仍拥挤 · funding 决然转负 —— 空付费 leg-2 现 LIVE 不再 stale</span>
            </h2>

            <p>
              <span className="dn-signal">
                Smart money 连压第三天空、但幅度在 easing
              </span>
              。SM net 是 <span className="dn-tag bear">−42,736</span>、对
              05-10 备忘的 −41,398 —— 也就是
              <span className="dn-em">−1,338 更空</span>
              （|−42,736 − (−41,398)| / 41,398 = 3.23%）。分量：long_btc
              <span className="dn-tag bear">13,665 → 13,781（+115）</span>、
              short_btc <span className="dn-tag bear">55,063 → 56,517
              （+1,454）</span>—— 一根加空、这次配一根边际加多（分量各自
              独立取整、来自精确 long 13,665.270 → 13,780.700、short
              55,063.368 → 56,516.884；net −1,338.086 —— 不要拿取整端点
              相减）。第三天加空完整、但切的幅度在
              <span className="dn-em">衰减</span>：05-10 −2,740 → 今天
              −1,338。short_btc 峰
              <span className="dn-tag bear">58,719 @ 2026-06-10 13:26Z</span>
              —— <span className="dn-em">压进反弹、不在低点</span>（24h 低印
              在 UTC 09:22、早约 4h）—— 此后泄进快照；short 谷 54,901 @ UTC
              01:41 06-10。SM net 谷（最空）
              <span className="dn-tag bear">−44,838 @ 2026-06-10 13:26Z</span>
              与那根 short 峰重合；net 峰（最少空）−41,015 @ UTC 01:41
              06-10。long_btc 谷 13,619 @ UTC 06:40 06-10、long 峰 14,354 @
              UTC 16:06 06-10。本子仍在卖、但压的节奏在放慢。
            </p>

            <p>
              <span className="dn-signal">
                OI 坐 ~平、funding 却决然转负 —— 这一刀最清楚的盘面切换
              </span>
              。OI Δ <span className="dn-tag">+209 BTC / +0.21%</span> 跨
              24h（基数 99,258 在 08:07 基线 → 99,467）、微扩；24h 峰
              101,202 @ UTC 13:58 06-10、谷 99,225 @ UTC 22:49 06-10。
              retail <span className="dn-tag bear">mkt_long_pct 67.92%</span>
              从 67.36% —— 一根边际 +0.57pt 再拥挤、仍拥挤多（24h 区间
              66.12 / 68.26、谷 66.12 @ UTC 15:43 06-10 在现货高点 —— retail
              淡了反弹）。头条切换是 funding：
              <span className="dn-em">快照空付费 −0.48% ann、24h 均值从
              +0.93% 翻到 −2.41% ann（−3.34pt）</span>、封顶占用
              <span className="dn-tag">0 / 1441（连续第 7 根封顶空）</span>、
              负分钟占比 <span className="dn-tag bear">81.96%（1181 / 1441）</span>
              从 35.53% 上 +46.43pt。最长负付费连段是
              <span className="dn-tag">850 采样行 / 14h08m 墙钟（UTC
              00:17→14:25 06-10；盘里有一根重复的 06-10 14:40 行、所以 850
              采样行跨的是 14h08m 墙钟窗）</span>、它 RE-CLEAR 了均值回归
              scout 的 ≥4h 空付费 leg-2 闸 ——
              <span className="dn-em">而且不像 05-10、快照时 funding 为负
              （−0.48%）、所以这是一根 LIVE 空付费条件、不是 stale 的早窗
              re-clear</span>。funding 付钱让空头持仓是均值回归的 tell：perp
              盘被过度卖出、carry 现在偏向多。
            </p>

            <p>
              窗口流向是<em>现货领买、从低位回收、OI ~平</em>。24h：价格
              <span className="dn-tag bear">−0.38%</span>、OI
              <span className="dn-tag">+209 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +1,767</span>、期货 CVD
              <span className="dn-tag bull">Δ +404</span>、大单
              <span className="dn-tag bull">+20 BTC / 327 笔</span>、
              taker-net <span className="dn-tag bull">+404</span>
              <span className="dn-em">（reset 调整后：fut_cvd 字段在 UTC
              06:40 06-10 rebase 到 0、所以 reset 调整后的 24h 期货 CVD =
              每分钟 taker-net 之和 = +404 —— futCVD 与 taker-net 按构造是
              一读；cb_cvd 在 24h 内无 reset）</span>。
              <span className="dn-em">
                现货 CVD 领正（+1,767）、期货 CVD 只温和正（+404）、OI 平
                —— 是现货领买签名：从 $60,827 低位回收是在现货里买的、不是
                在 perp 里加杠杆。
              </span>{' '}
              4h（进快照）：价格 <span className="dn-tag bear">−0.27%</span>、
              OI <span className="dn-tag bull">−735 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +272</span>、期货 CVD
              <span className="dn-tag bull">Δ +689</span>、大单
              <span className="dn-tag bull">+75 BTC / 52 笔</span>、taker-net
              <span className="dn-tag bull">+689</span> ——
              <em>两条 CVD 都买、OI 在落、一根向强势 de-grossing 读</em>。
              1h：价格 <span className="dn-tag bull">+0.48%</span>、OI
              <span className="dn-tag">+188 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +443</span>、期货 CVD
              <span className="dn-tag bull">Δ +335</span>、大单
              <span className="dn-tag bear">−47 BTC / 13 笔</span>、taker-net
              <span className="dn-tag bull">+335</span> ——
              <em>最近一小时一根新鲜买盘上印</em>。perp 在快照对现货
              <span className="dn-tag bear">−$62.26 折价</span>（1h 均
              −$59.32、区间 −$109.68 / −$33.18；4h 均 −$61.03、区间
              −$117.57 / +$61.28；24h 均 −$53.99、区间 −$196.96 / +$61.28
              —— basis 盘中一度短暂升水）。1 分钟 aggressor skew 快照
              <span className="dn-tag bull">+18.7</span>（1h 均 −6.25、区间
              −39.1 / +40.8）—— 一档买攻反射进快照、与现货领买回收一致。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 图 · 慢周期深超卖（1d 24.3、12h 29.3、3d 31.3）· 3d ⚡ TD9 BUY active、1h/1M pending —— 簇 BROADENED · 所有盘中在云下 · 破位里超卖的净读</span>
            </h2>

            <p>
              <span className="dn-signal">
                慢周期深超卖、TD9-BUY 簇 broadened
              </span>
              。1d 是最深超卖 <span className="dn-tag bear">24.3</span>、12h
              <span className="dn-tag bear">29.3</span>（回到 30 下方）、3d
              <span className="dn-tag bear">31.3</span>、8h 36.4 —— 慢端被
              拉伸。引擎周期坐在中位线下方一点：4h RSI 44.5、1h 46.7、30m
              47.7、15m 49.3。Ichimoku 图一致沉重：1h 起每一根都
              <span className="dn-tag bear">在云下</span> —— 1h 云下
              ↑61.9k、4h 云下 ↑62.7k、8h 云下 ↑71.6k、12h 云下 ↑75.4k、1d
              云下 ↑73.9k —— 只有 30m 还
              <span className="dn-tag">在云内 61.3k–61.8k</span> 攀着、15m
              云下 ↑61.8k、1M 仍在周期框上
              <span className="dn-tag bull">云上 ↓46.9k</span>。TD 读法
              broadened 建设性：<span className="dn-tag bull">3d 带一根
              active ⚡ TD9 BUY</span>、配 1h（Buy 8 → 9?）与 1M（Buy 8 →
              9?）等一根 9-count —— 比 05-10 更宽的 TD9-BUY 簇（05-10 是
              3d-active 配 4h/1M pending；active 印现在被 1h 和 1M 夹住）。
              <span className="dn-em">
                {' '}直读：慢周期超卖、3d TD9 BUY 活着、簇在变宽、但除 30m
                外每根盘中都在云下、盘在一根确认的破位里。这是一根破位里
                的超卖盘 —— TD 簇是均值回归 scout 的观察项、不是结构性转向。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">49.3</td><td className="bull">金叉（水下）刚印</td><td className="bear">云下 ↑61.8k 9b</td><td>Sell 2</td><td>BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">47.7</td><td className="bear">死叉（水上）10b</td><td className="neut">云内 61.3–61.8k 3b</td><td>Sell 2</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">46.7</td><td className="bear">死叉（水下）2b</td><td className="bear">云下 ↑61.9k 34b</td><td>Buy 8 → 9?</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">44.5</td><td className="bull">金叉（水下）3b</td><td className="bear">云下 ↑62.7k 97b</td><td>Sell 1</td><td>BEAR hid</td></tr>
                <tr><td>8h</td><td className="num bull">36.4</td><td className="bull">金叉（水下）11b</td><td className="bear">云下 ↑71.6k 78b</td><td>Buy 1</td><td>BEAR hid</td></tr>
                <tr><td>12h</td><td className="num bull">29.3</td><td className="bull">金叉（水下）5b</td><td className="bear">云下 ↑75.4k 39b</td><td>Buy 4</td><td>BEAR hid</td></tr>
                <tr><td>1d</td><td className="num bull">24.3</td><td className="neut">—</td><td className="bear">云下 ↑73.9k 10b</td><td>Buy 1</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>3d</td><td className="num bull">31.3</td><td className="neut">死叉（水上）5b</td><td className="bear">云下 ↑74.2k 3b</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr><td>1w</td><td className="num bull">33.1</td><td className="neut">—</td><td className="bear">云下 ↑100.3k 19b</td><td>Buy 4</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">41.9</td><td className="neut">—（DIF 在水上）</td><td className="bull">云上 ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr>
                  <td colSpan={6} className="note">
                    来源：mtf_div_latest.html 00:01Z scan（滚动 latest
                    文件；存档于{' '}
                    <code>/opt/desk-note/snapshots/2026-06-11-0007/</code>）。
                    头部告警：<em>3d ⚡ TD9 BUY active</em>、
                    <em>1h / 1M TD Buy 8 → 9? pending</em>、
                    <em>1h 水下死叉 2b（看空续）</em>、
                    <em>15m 水下金叉刚印</em>。扫描现货 $61,569、24h −0.21%
                    （00:01Z scan；live-tape 头部 00:07Z 在同一 24h 窗读
                    −0.38% —— 约 6 分钟差导致偏差）、24h H/L $62,840 /
                    $60,692、qVol $11.91B、扫描 close $61,576。收盘为未收盘
                    K 线；每个值在各周期收盘前都按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵在日线阶梯上一致头顶 —— 日线上没有一根正偏移了。现货
              $61,651 坐在每一根日 MA 下方：最近头顶是
              <span className="dn-tag bear">D-EMA20 $67,319（−8.42%）</span>、
              再是 <span className="dn-tag bear">D-SMA20 $68,749（−10.32%）</span>、
              <span className="dn-tag bear">D-EMA50 $71,594（−13.89%）</span>、
              <span className="dn-tag bear">D-SMA100 $72,783（−15.30%、周期锚）</span>、
              <span className="dn-tag bear">D-EMA100 $73,945（−16.63%）</span>、
              <span className="dn-tag bear">D-SMA150 $74,133（−16.84%）</span>、
              <span className="dn-tag bear">D-SMA50 $74,687（−17.45%）</span>、
              <span className="dn-tag bear">D-EMA150 $76,599（−19.51%）</span>、
              <span className="dn-tag bear">D-SMA200 $77,997（−20.96%）</span>、
              <span className="dn-tag bear">D-EMA200 $79,209（−22.17%）</span>。
              周期锚 D-SMA100 头顶 −15.30%。子集周阶梯同样头顶：W-SMA20
              $71,385（−13.64%）、W-EMA20 $74,942（−17.74%）、W-EMA100
              $82,407（−25.19%）、W-EMA50 $83,062（−25.78%）、W-SMA100
              $88,413（−30.27%）、W-SMA50 $91,683（−32.76%）；子集 W-EMA150
              $77,813（−20.77% 种子）、W-EMA200 $73,479（−16.10% 种子）；
              子集 W-SMA150 / W-SMA200 在 128 根子集周 bar 下不可计算。
              <span className="dn-signal">
                本篇结构性的线是全历史 200W 地板
              </span>
              ：全历史 W-MON 200 周 SMA <span className="dn-tag">$62,019</span>
              （200 根收盘 bar、止于 06-08）、live 现货
              <span className="dn-tag bear">−0.59% / −$368 在下方</span>、未
              收盘 06-15 周 bar 的 1 分钟 close
              <span className="dn-tag bear">$61,596（−0.68% / −$423 在下方）</span>、
              上一根已收盘周（06-08）$63,058 现在成历史、在 +1.68% 上方。
              周收 below-own-200W 频率 8 / 154 = 5.19%。
              <span className="dn-em">
                MA 锚自 btcusdt_1m parquet（子集阶梯取 2024–2026 窗、按
                台面政策；200W 取全历史 W-MON resample、354 根周 bar）；
                偏移按 live 现货 $61,650.58 重算（parquet 锚行 ≤00:05Z
                close $61,596、gap $54.58）。<code>weekly_200sma.json</code>
                precompute 缺失、所以 200W 直接从 parquet 算、JSON 的
                percentile / last-event 字段不可得（非杜撰）。日收：06-07
                $63,298、06-08 $63,058、06-09 $61,695、06-10 $61,484
                （FINAL）、06-11 未收盘 $61,596 —— 自 06-08 重夺后连续三根
                收在 200W 下方。30D RV 39.59%。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子加深净空 γ aggregate −69.0M · flip 走下到 $63,480（现货在下方 −2.88%）· $60k 崩盘 put LIGHTENED 到 −38.65M（两次 re-load 后首次松）· 11JUN −14.07M 约 8h 后结算</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子又加深它的空 γ、即便 $60k put 磁铁首次松了
              </span>
              。aggregate GEX 是 <span className="dn-tag bear">−69.0M</span>
              （05-10 是 −58.6M —— 一根 $10.4M 的负 γ 再堆）；本子更
              destabilizing、不是更少。0-γ flip 走
              <span className="dn-tag bear">$63,592 → $63,480（−$112）</span>、
              现货 $61,651 坐在
              <span className="dn-tag bear">flip 下方 −2.88%</span>
              （现货口径 61,650.58 / 63,480 − 1 = −2.882%）；GEX 文件自己的
              dist-to-flip 读 −2.7%、对它的 Deribit idx $61,747（比 live
              现货高 $96）算 <span className="dn-tag bear">−2.730%</span>
              （61,747 / 63,480 − 1 = −2.730%）—— 两参考都负、现货在 flip
              下方、<span className="dn-em">在 dealer 空 γ 区里、对冲放大
              下行</span>。墙图仍被 $60k 崩盘 put 主导、但它松了：
              <span className="dn-tag bear">$60k −38.65M</span>（从 −47.86M
              LIGHTENED、+$9.21M —— 两次连续 re-load 后的首次松）、
              <span className="dn-tag bear">$58k −11.01M</span>、
              <span className="dn-tag bear">$61k −10.44M</span>、
              <span className="dn-tag bear">$55k −9.53M</span>、
              <span className="dn-tag bull">$80k +8.99M</span>（top 10 里唯一
              正墙）、
              <span className="dn-tag bear">$62k −8.51M</span>、
              <span className="dn-tag bear">$60.5k −6.73M</span>、
              <span className="dn-tag bear">$50k −6.52M</span>、
              <span className="dn-tag bear">$59k −4.04M</span>、
              <span className="dn-tag bull">$70k +4.01M</span>。
              <span className="dn-em">
                $60k strike 仍是结构性磁铁、在 −38.65M、低于现货三个 handle、
                但这根松是崩盘 put 出价停止 re-load 的首个迹象；24h 低
                $60,827 这一刀守在 strike 上方。
              </span>{' '}
              按 expiry、近端 strip 一致为负：
              <span className="dn-tag bear">11JUN 0.3 −14.07M</span> 今日
              08:00Z 结算（约 8h 后）、
              <span className="dn-tag bear">12JUN 1.3 −19.39M</span>、
              <span className="dn-tag bear">13JUN 2.3 −4.89M</span>、14JUN 3.3
              −1.76M、19JUN 8.3 −5.09M、
              <span className="dn-tag bear">26JUN 15.3 −25.08M</span>（月度、
              最重）、31JUL 50.3 +5.81M、28AUG 78.3 +1.59M、25SEP 106.3
              −0.25M、25DEC 197.3 +2.33M、26MAR27 288.3 +0.30M。11JUN 结算
              后、除 11JUN 的 aggregate 约 −69.0M − (−14.07M) = −54.93M、
              仍深净负。
              <span className="dn-em">
                注意：这根 aggregate 捷径用 dashboard total（−69.0M）；上面
                取整的 expiry 显示行合计 −60.50M、所以 by-expiry 列表与
                dashboard total 内部非可加、差约 8.5M —— −69.0M dashboard
                total 是权威、不要单从行列表重构 aggregate。
              </span>{' '}
              <span className="dn-em">
                11JUN −14.07M 前块今日 08:00Z 结算是首个日历事件：它清掉一
                块负、但它后面的 strip（12JUN、13JUN、26JUN）让本子继续空 γ
                —— 放大器不随这根结算下来。
              </span>
            </p>

            <p>
              IV 中位数横跨 956 合约是 <span className="dn-tag">48.6%</span>
              （05-10 是 958、−2 合约）对 30D close-to-close RV
              <span className="dn-tag">39.59%</span> —— 链级 richness
              <span className="dn-tag">+9.01pt</span>。是 N 合约的链中位数、
              <span className="dn-em">不是</span>可交易价差；expiry- /
              strike-level vega、skew、期限结构仍未载入、vol 读法保持
              framework only。RV 方法：30D close-to-close、logret.std × √365
              × 100、用最末 30 根日 log return（= 31 根连续日 close）、锚自
              parquet 最末 bar（窗 2026-05-12 → 06-11）；最末 29-returns /
              30-closes 另读 40.23%、页面值 39.59% 来自 30 returns。IV 48.6%
              对实现 39.59% 是一根温和溢价、对 05-10 走宽 +0.41pt —— vol
              被买、但不在恐慌、与一根受控破位一致、不是清算。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · Tier-1 长端 EASED（10Y −3bp 到 4.53%、TIPS −1bp 到 2.20%）· reclaim-long 利率筛（10Y &lt; 4.55%）RE-CLEARED · HY OAS 2.78% 现 AT re-grow 闸 · 跨资产 NORMAL、BTC 反转成相对跑赢</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观盘这一刀长端松 —— 利率与实际利率都退、re-clear 了
                reclaim-long 筛
              </span>
              。面板渲染 2026-06-10 22:15Z、比快照早约 1h52m。US 10Y nominal
              <span className="dn-tag bull">4.53%（−3.0bp）</span>、regime z
              <span className="dn-tag bear">+1.92</span>、偶发 z
              <span className="dn-tag bear">+0.65</span> —— z 上仍 RISK-OFF、
              但水位松、reclaim-long 利率筛（10Y &lt; 4.55%）现
              <span className="dn-tag bull">RE-CLEARED 在 4.53%</span>（05-10
              在 4.56% BROKEN）。10Y TIPS real
              <span className="dn-tag bull">2.20%（−1.0bp）</span>、regime z
              <span className="dn-tag bear">+2.46</span>、偶发 z
              <span className="dn-tag bear">+1.53</span> —— z 上 EXTREME
              RISK-OFF、但水位松。5Y5Y BE 通胀
              <span className="dn-tag">2.24%（+2.0bp）</span>。HY OAS
              <span className="dn-tag bear">2.78%（+3.0bp）</span>、regime z
              <span className="dn-tag">−0.85</span>、偶发 z
              <span className="dn-tag">+0.28</span> —— 仍松、但现
              <span className="dn-em">AT 那 2.78% re-grow 闸</span>（05-10 距
              3bp —— HY OAS 硬了 +3bp、正好把缺口收到闸上）。MOVE 债波
              <span className="dn-tag bull">73.9（−3.08）</span> —— 松了。
              抵消项：DXY <span className="dn-tag bull">99.88（−0.17）</span>、
              regime z +1.55、偶发 z +1.60 —— z 上 RISK-OFF；Fed 净流动性
              <span className="dn-tag bear">$5.834T（−0.038T）</span>。USD/JPY
              <span className="dn-tag">160.22（−0.10）</span>；US-JP 10Y 利差
              <span className="dn-tag">2.02%（−3.0bp）</span>、紧；USD/CNY
              6.7717（+0.01）；10Y breakeven 2.34%（+1.0bp）；WTI $95.0；
              NFCI −0.506 中性。
              <span className="dn-em">
                净：长端松进 BTC 的来回、reclaim-long 利率筛 RE-CLEARED
                （10Y 4.53% &lt; 4.55%）、HY OAS re-grow 闸现 AT 2.78% ——
                两条宏观尾 re-grow 腿都坐在各自边界上（10Y 松到正好 4.53%
                un-fired；HY OAS 硬到正好 2.78% 闸）、一根刀刃、两条都没
                干净在上方。利率筛 re-clear 是 scout-long 论一个试探性正面；
                它还没转成 flip 上方的 BTC 出价。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>宏观指标</th>
                  <th>水位</th>
                  <th>Δ</th>
                  <th>regime z</th>
                  <th>偶发 z</th>
                  <th>读</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>US 10Y nominal</td><td className="num">4.53%</td><td className="num bull">−3.0bp</td><td className="num bear">+1.92</td><td className="num">+0.65</td><td className="bull">RISK-OFF z · 筛 RE-CLEARED</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.20%</td><td className="num bull">−1.0bp</td><td className="num bear">+2.46</td><td className="num bear">+1.53</td><td className="bear">EXTREME RISK-OFF z · 水位松</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.24%</td><td className="num bear">+2.0bp</td><td className="num">—</td><td className="num">—</td><td className="neut">无标</td></tr>
                <tr><td>HY OAS</td><td className="num">2.78%</td><td className="num bear">+3.0bp</td><td className="num">−0.85</td><td className="num">+0.28</td><td className="bear">松 · AT 那 2.78% re-grow 闸</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.506</td><td className="num">—</td><td className="num">—</td><td className="num">—</td><td className="neut">中性</td></tr>
                <tr><td>MOVE 债波</td><td className="num">73.9</td><td className="num bull">−3.08</td><td className="num">—</td><td className="num">—</td><td className="bull">松了</td></tr>
                <tr><td>DXY</td><td className="num">99.88</td><td className="num">−0.17</td><td className="num bear">+1.55</td><td className="num bear">+1.60</td><td className="bear">RISK-OFF 偶发</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.834T</td><td className="num bear">−0.038T</td><td className="num">—</td><td className="num">—</td><td className="bear">本周抽走</td></tr>
                <tr><td>USD/JPY</td><td className="num">160.22</td><td className="num">−0.10</td><td className="num">—</td><td className="num">—</td><td className="neut">平</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">2.02%</td><td className="num bull">−3.0bp</td><td className="num">—</td><td className="num">—</td><td className="neut">紧</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7717</td><td className="num">+0.01</td><td className="num">—</td><td className="num">—</td><td className="neut">松</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">+17.0bp（月度）</td><td className="num">—</td><td className="num">—</td><td className="stale">陈旧 70d · 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、汇总 00:01Z ——
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。
              非对角线均值 <span className="dn-tag">|r| 0.318</span>
              <span className="dn-signal">regime NORMAL</span>（05-10 是
              0.287、硬 +0.031、守在 NORMAL 带）—— 一道宽相关读。BTC 的顶部
              对齐：TSLA <span className="dn-tag">+0.383</span>、SILVER
              <span className="dn-tag">+0.369</span>、COPPER
              <span className="dn-tag">+0.362</span>、NVDA
              <span className="dn-tag">+0.357</span>、MSFT
              <span className="dn-tag">+0.337</span>、SP500
              <span className="dn-tag">+0.332</span>、NQ
              <span className="dn-tag">+0.332</span>、META
              <span className="dn-tag">+0.321</span>、PLAT
              <span className="dn-tag">+0.310</span>、GOLD
              <span className="dn-tag">+0.299</span>、URNM
              <span className="dn-tag">+0.296</span>、AMZN
              <span className="dn-tag">+0.282</span>。
              <span className="dn-signal">关键切换是 BTC 的相对表现</span>：
              7d <span className="dn-tag bear">BTC −2.73%</span> 现在跑赢 NQ
              <span className="dn-tag bear">−6.81%</span> 达 +4.08pt（05-10
              是一根 −2.47pt 落后）—— TradFi 滚得狠、BTC 守得相对硬。其余
              7d 扫：SP500 <span className="dn-tag bear">−3.76%</span>、JP225
              −6.91%、NVDA −7.23%、META −8.34%、AAPL −7.25%、MSFT −7.29%、
              GOOGL −1.15%、AMZN −5.94%、TSLA −10.09%。金属仍被打：SILVER
              <span className="dn-tag bear">−14.79%</span>、PLAT
              <span className="dn-tag bear">−11.43%</span>、URNM
              <span className="dn-tag bear">−17.06%</span>、GOLD −8.84%、PALL
              −7.39%、COPPER −4.12%。能源：CL −4.75%、BRENT −3.58%、NGAS
              −0.54%。FX：EUR −0.61%、JPY +0.36%。
              <span className="dn-em">
                BTC −2.73% vs NQ −6.81% 是一根 +4.08pt 跑赢、是对 05-10
                落后的反转 —— BTC 现在是一根仍 NORMAL 的宽 risk-off 里的
                相对跑赢者、不是内生落后者。TradFi（科技与金属）这周滚得比
                crypto 狠；相关性守在 NORMAL 带、所以这是 BTC 在一场市场
                范围的去险里跑赢、不是从里面脱钩。
              </span>{' '}
              JGB 月度 2.52% 陈旧 70d —— 不依赖。
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · 200W 周期地板盯位（主、仍在下方）· 均值回归多 scout —— funding 腿现 LIVE、flip 腿把关的留守 · 宏观尾 re-grow 两腿都 ON 边界 + 利率筛 re-cleared · 挤压周期敌对-2 观察名单 · 台面 flat</span>
            </h2>

            <p>
              <span className="dn-signal">
                台面 flat；交易本子仍以 200W 地板为中心、底下一簇均值回归
                在建
              </span>
              。05-10 备忘没带 live 仓；这一刀没开仓。地板盯位作为主框架
              继续 —— 现货 −0.59% 在 $62,019 下方、06-10 日收 $61,484 在
              下方、06-15 周收是那个二元。结构仍偏空：dealer 本子加深到
              −69.0M 空 γ、在 $63,480 flip 下方、SM 连压第三天空、头顶一根
              MA 都没让。但底下、均值回归盘点起来了：funding 决然转负（24h
              均值 −2.41% ann、快照空付费 LIVE）、TD9-BUY 簇 broadened、BTC
              反转成相对跑赢、利率筛 re-clear。<em>不在 $60,827 触及的低位
              加新空、那会和 dealer 一起卖进 −38.65M 的 $60k put 磁铁；不
              开新多、直到 200W 在周收口径重夺、或 scout 几条腿干净填满 ——
              flip-reclaim 腿是把关的留守。</em>等 06-15 周收和 11JUN 结算
              先把地板解决、再投规模。
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 主 · 200W 周期地板盯位 · 仍在下方：现货 −0.59%、06-10 日收 $61,484 在下方、未收盘 06-15 周 bar $61,596 在下方</span>
              <div className="dn-trade-name">
                200W 周期地板盯位 —— 开着：现货 −0.59% 在 $62,019 下方、06-10 日收 $61,484 在下方、未收盘 06-15 周 bar $61,596 在下方
              </div>
              <div className="dn-thesis">
                06-08 周收 $63,058（在 200W $62,019 上方 +1.68%）把这盯位
                解成多；06-09 盘全还回去、06-10 收确认在下方。现货 −0.38%
                到 $61,651 走了一根宽来回（24h 低 $60,827、在地板下；24h 高
                $62,813、在上方）、又 ~平回到线下、06-10 日收 $61,484 收在
                它下方、未收盘 06-15 W-MON 周 bar 印 $61,596 = −0.68% /
                −$423 在下方。全历史 200 周 SMA 是 $62,019（200 根收盘 bar、
                止于 06-08）；周收 below-own-200W 频率是 8 / 154 = 5.19% ——
                一个低基率位。唯一解决事件是 06-15 周收：一根收回 $62,019
                上方重夺地板、一根收在下方确认 post-06-08 谱系里首根 sustained
                weekly-200W 破。状态：<em>盯位开着、无仓</em>。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W 地板（全历史 W-MON）</span><span className="dn-lvl-v">$62,019 · 200 根收盘 bar 止于 06-08 · live 现货 −0.59% / −$368 在下方</span></div>
                <div><span className="dn-lvl-k">未收盘周（06-15）</span><span className="dn-lvl-v bear">1m-close $61,596 = −0.68% / −$423 在 200W 下方 —— 06-15 W-MON 收前为临时</span></div>
                <div><span className="dn-lvl-k">重夺条件（多）</span><span className="dn-lvl-v bull">06-15 周收 &gt; $62,019 —— 重夺地板、post-06-08 谱系的一根一周 dip-and-reclaim</span></div>
                <div><span className="dn-lvl-k">破位确认（空）</span><span className="dn-lvl-v bear">06-15 周收 &lt; $62,019 —— 当前 post-06-08 floor-watch 谱系里首根周收破 200W（上一根全历史 below-own-200W 周收是 2023-10-09）；升级周期-regime 读</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>200W 是一条周收线、不是盘中水位 —— 一根插针
                破 $62,019（$60,827 低已经印过一根）不解决它；只有 06-15
                W-MON 收解决。三根连续日收（06-09 $61,695、06-10 $61,484、
                06-11 未收盘 $61,596）坐在地板下；把下一根周收当二元、把
                11JUN 08:00Z 结算和日收谱系当中途 tell。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout · 非可执行 · funding leg-2 现 LIVE · flip leg-3 把关的留守</span>
              <div className="dn-trade-name">
                均值回归多 scout —— 几条腿在收敛、不是对齐：TD9 簇 BROADENED（3d-active + 1h/1M pending）、funding 空付费 leg-2 现 LIVE（14h08m 连段、快照时为负）、flip leg-3 仍在头顶 −2.88%
              </div>
              <div className="dn-thesis">
                scout 是一个三腿闸：(1) 一根 TD9-BUY 簇、(2) 一根 funding
                空付费 ≥4h 连续连段、(3) 一根 1h 收在 0-γ flip 上方。这一刀
                两条腿推进。leg 1 BROADENED —— 3d 带一根 active ⚡ TD9 BUY、
                配 1h（Buy 8 → 9?）与 1M（Buy 8 → 9?）pending、比 05-10 更宽
                的簇。leg 2 现 <em>LIVE</em>：一根 850 采样行 / 14h08m 墙钟
                负付费连段（UTC 00:17→14:25 06-10）清掉 ≥4h 闸 AND 快照时
                funding 为负（−0.48% ann）—— 一根 live 空付费条件、不是
                05-10 那根 stale 早窗 re-clear。leg 3 是把关的留守：flip
                走下到 $63,480、但现货在下方 −2.88%、所以 1h-收-在-flip-上方
                的闸未清、是三条里最宽的。净：几条腿在收敛、但 flip-reclaim
                腿把关这笔、且 flip 下方的 dealer 本子是空 γ —— 在这里做多
                仍跟对冲流对打。状态：<em>非可执行、flip 腿是留守</em>。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">leg 1 · TD9 簇</span><span className="dn-lvl-v">3d ⚡ TD9 BUY active · 1h / 1M Buy 8 → 9? pending —— BROADENED、尚未确认多框</span></div>
                <div><span className="dn-lvl-k">leg 2 · funding 空付费 ≥4h</span><span className="dn-lvl-v bull">LIVE —— 14h08m 负连段 AND funding 进快照为负（−0.48%）；闸已清</span></div>
                <div><span className="dn-lvl-k">leg 3 · 1h 收 &gt; flip</span><span className="dn-lvl-v bear">flip $63,480、现货在下方 −2.88% —— 未清、把关的留守</span></div>
                <div><span className="dn-lvl-k">触发（三条全干净）</span><span className="dn-lvl-v bull">确认多框 TD9 BUY AND live funding 空付费 ≥4h（已清）AND 1h 收 &gt; $63,480 —— 然后 scout long 0.2R</span></div>
                <div><span className="dn-lvl-k">止损 / size</span><span className="dn-lvl-v bear">1h 收 &lt; $59,154（06-06 投降低）· size 0.2R · 在周期锚 D-SMA100 $72,783 平半</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R 草图（示例、非 live 单）：</b>一个触发近 flip $63,480
                对 $59,154 止损是 ~$4,326 风险；首目标在周期锚 $72,783 是
                ~$9,303 ≈ 2.15:1 —— 抽象上有吸引力、但把关的 flip 腿在现货
                上方 +2.88%、所以即便 funding 腿现 live、今天也没入场可定价。
                <b>硬规则：</b>不在 flip 下方、对着一个空 γ dealer 本子和一根
                −38.65M $60k put 磁铁、预先建多 —— scout 是确认交易、不是
                预判交易。funding 腿翻 live 是第一条干净推进的腿；盯 1h 收
                对 $63,480 作触发。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 宏观尾 · put-spread re-grow 闸 —— 两条腿都 ON 各自边界</span>
              <div className="dn-trade-name">
                宏观尾 put-spread —— 已平；re-grow 闸：10Y &gt; 4.53% 松到正好 4.53%（un-fired）、HY OAS &gt; 2.78% 硬到正好 2.78% 闸；reclaim-long 利率筛（10Y &lt; 4.55%）RE-CLEARED
              </div>
              <div className="dn-thesis">
                宏观尾 put-spread 已平、无残余。re-grow 闸移到刀刃：10Y 松
                −3bp 到正好 4.53%（这腿在 05-10 于 4.56% fired、但水位退回
                边界、现 un-fired）、HY OAS 硬 +3bp 到正好 2.78%（现 AT
                re-grow 闸、05-10 距 3bp）。两条 re-grow 腿都坐在各自边界上、
                两条都没干净在上方。reclaim-long 利率筛（10Y &lt; 4.55%）现
                RE-CLEARED 在 4.53%（05-10 在 4.56% BROKEN）—— scout-long 论
                一个试探性正面。今天不 re-grow：两条腿都坐在各自边界上、
                任何 re-grow 都要 HY OAS 干净收 &gt; 2.78% AND 10Y 干净收
                &gt; 4.53%（两条腿）—— 都还没干净在上方。宏观背景与 200W
                盯位并行、平衡在边缘上。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">已平 · 无残余 · 暂不滚</span></div>
                <div><span className="dn-lvl-k">re-grow 腿 A（ON 边界）</span><span className="dn-lvl-v">10Y &gt; 4.53% 收 —— AT 4.53%、松回边界、un-fired</span></div>
                <div><span className="dn-lvl-k">re-grow 腿 B（ON 闸）</span><span className="dn-lvl-v">HY OAS &gt; 2.78% 收 —— AT 2.78%、硬到正好闸上</span></div>
                <div><span className="dn-lvl-k">reclaim-long 利率筛</span><span className="dn-lvl-v bull">10Y &lt; 4.55% 收 —— RE-CLEARED 在 4.53%</span></div>
              </div>
              <div className="dn-gating">
                <b>注意：</b>re-grow 闸是随水位下漂调低的酌情盯位、不是回测
                断点、两条现都正好坐在各自边界上 —— 一根刀刃、两条都没干净
                在上方。一根 re-grow —— 闸在两条腿都干净收上方（HY OAS &gt;
                2.78% AND 10Y &gt; 4.53%）—— 会把 put-spread 滚到 19JUN 或
                26JUN 前向 expiry、滚进一个<em>已经</em>空 γ 的本子
                （aggregate −69.0M）、所以一根新尾会带 dealer 放大器顺风。
                等两条腿都干净收在闸上方；不在边界触碰上预 re-grow。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 挤压周期敌对-2 观察名单 · 无日历先验 · 第三天加空把签名重武装、幅度在 easing</span>
              <div className="dn-trade-name">
                挤压周期敌对-2 —— 观察名单：06-10 的加空让 re-stack 签名保持武装、但幅度在 easing；无时间锚、把每根新 Δnet 印当信号
              </div>
              <div className="dn-thesis">
                挤压周期框架以观察名单跑、无日历先验（节奏在五月末被证伪）。
                06-10 本子保持 re-stack 签名武装：SM 加空（+1,454）配一根
                边际加多（+115）进来回、short 峰 58,719 @ UTC 13:26 06-10
                印在 24h 现货低之后约 4h —— 一根压进反弹形。最大离散单分钟
                SM 步是 −2,578 @ UTC 06:01 06-10（Δlong −127、Δshort +2,451）
                —— 一根敌对-2 签名、但低于 −3k 单分钟信号阈、所以无 cycle-3
                点火；其余是渐进压、被反弹到 $62k 期间的 cover 步部分抵消
                （+453 @ BJ 23:06、+408 @ BJ 01:46）。把任何新 Δnet ≤ −3k
                单分钟步（Δshort &gt; 0 + Δlong &lt; 0 同一分钟）当作 re-stack
                敌对-2 信号本身、任何 Δnet ≥ +3k cover 步当它的反面。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">框架状态</span><span className="dn-lvl-v">观察名单 · 无日历先验 · 06-10 本子保持加空 + 边际加多签名、幅度在 easing</span></div>
                <div><span className="dn-lvl-k">24h SM 形状</span><span className="dn-lvl-v bear">short Δ +1,454、long Δ +115、net −1,338 更空（对 05-10 备忘、各自独立取整）· 最大离散步 −2,578 @ UTC 06:01（低于 −3k 信号）· short 峰 58,719 @ UTC 13:26（24h 低后约 4h）</span></div>
                <div><span className="dn-lvl-k">前向 gating</span><span className="dn-lvl-v">新 Δnet ≤ −3k 单分钟 = re-stack 敌对-2 信号；Δnet ≥ +3k = cover 信号 —— 两向都无时间先验</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>节奏已死（五月末证伪）、所以读盘、不读钟。
                06-10 的压是一根渐进加空进反弹、最大步（−2,578）仍低于 −3k
                信号 —— 作破位确认有意义、但本身不信号 cycle-3 点火。easing
                的幅度（05-10 −2,740 → 今天 −1,338）和 live funding 翻负都
                在说加空在掉动量。一根新的离散 Δnet ≤ −3k 在 200W 下方会是
                要盯的信号。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 200W 地板仍在下方、06-15 周收是二元 · 底下一簇均值回归在点火（funding live、TD9 broadened、BTC 反转、利率筛 re-cleared）对偏空结构（dealer −69.0M、SM 第三天空）· flip-reclaim 腿把关 scout</span>
            </h2>

            <p>
              05-10 那批条件里：200W 周期地板 STAYED 在下方（06-10 日收
              $61,484、未收盘 06-15 周 bar $61,596 在下方）；dealer-flip 重夺
              DID NOT 守住（flip $63,480、现货 −2.88% 在下方）；均值回归 scout
              的 funding 腿 FLIPPED LIVE（14h08m 连段、快照时为负）、但 flip
              腿仍是留守；宏观 re-grow 两条腿都移到各自边界 ON（10Y 松到
              4.53%、HY OAS 硬到 2.78%）、reclaim-long 筛 RE-CLEARED（10Y
              4.53% &lt; 4.55%）。<em>唯一的结构读法是：一簇均值回归在一个仍
              偏空的结构底下点火 —— funding 决然转负、TD9 簇 broadened、BTC
              反转成相对跑赢、利率筛 re-clear；但 dealer 本子加深空 γ、SM
              连压第三天空、每一根 MA 都在头顶。</em>今天的条件重新围绕这三
              件事摆开：开着的地板盯位、收敛但未对齐的 scout、以及一根平衡
              在两条边界上的宏观尾：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>200W 周收重夺（多）</td><td className="bull">06-15 W-MON 收 &gt; $62,019</td><td>重夺地板 —— post-06-08 谱系的一根一周 dip-and-reclaim；在确认转向上重开 scout-long 论</td></tr>
                <tr><td>200W 周收破位（空）</td><td className="bear">06-15 W-MON 收 &lt; $62,019</td><td>当前 post-06-08 floor-watch 谱系里首根周收破 200W（上一根全历史 below-own-200W 周收是 2023-10-09）—— 升级周期-regime 读</td></tr>
                <tr><td>11JUN expiry 结算（今天 08:00Z、~8h 前方）</td><td>−14.07M 前段清掉；ex-11JUN aggregate ≈ −54.93M 仍净负</td><td>把结算读成中途 tell、不是 regime 换 —— 它后面的 strip（12JUN −19.39M、26JUN −25.08M）让本子保持空 γ</td></tr>
                <tr><td>均值回归多 scout —— flip 腿（把关的留守）</td><td className="bear">1h 收 &gt; $63,480 flip —— 现货 −2.88% 在下方、未清</td><td>funding leg-2 现 LIVE（14h08m 连段、快照时为负）、TD9 簇 broadened —— flip-reclaim 腿是唯一把关闸；一根干净 1h 收上方 $63,480 配簇确认、scout long 0.2R、止损 $59,154、$72,783 平半</td></tr>
                <tr><td>$60k 崩盘-put 磁铁</td><td className="bear">$60k −38.65M（LIGHTENED +9.21M、两次 re-load 后首松）；24h 低 $60,827 守在执行价上方</td><td>不跟 dealer 一起对着磁铁加空；这根松是崩盘-put bid 停止 re-load 的第一个迹象 —— 盯它是否续松</td></tr>
                <tr><td>宏观尾 re-grow（两条腿都 ON 边界）</td><td className="bear">HY OAS &gt; 2.78%（AT 闸）；10Y &gt; 4.53%（AT 边界、松回 un-fired）</td><td>今天不 re-grow；任何 put-spread re-grow 滚进 19JUN / 26JUN 前向之前、要 HY OAS 干净收 &gt; 2.78% AND 10Y 干净收 &gt; 4.53%（两条腿）—— 滚进一个已经空 γ 的本子；不在边界触碰上预 re-grow</td></tr>
                <tr><td>挤压周期敌对-2（无日历先验）</td><td className="stale">把每一根新 Δnet ≤ −3k 单分钟步当信号本身</td><td>一根 200W 下方的离散 re-stack 敌对-2 会确认 cycle-3 点火；06-10 最大步（−2,578）低于 −3k 信号 —— 是确认、不是点火</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>这一篇</em>的唯一一行是{' '}
              <span className="dn-signal">
                06-15 周收对 200W $62,019、配 flip-reclaim 腿（$63,480）作收敛
                scout 的近端触发：一根周收回到 200W 上方重夺地板、一根 1h 收
                上方 flip 在 funding 腿（现 live）与 TD9 簇接上后武装 scout-long；
                一根周收在下方确认当前 post-06-08 floor-watch 谱系里首根
                sustained weekly-200W 破（上一根全历史 below-own-200W 周收是
                2023-10-09）
              </span>
              。在那之前这篇照写运行：台面 flat、200W 盯位是主框架、均值回归
              多 scout 在收敛（funding 腿 LIVE）但卡在把关的 flip 腿上不可执行、
              宏观尾坐在两条 re-grow 边界上且利率筛 re-cleared、挤压周期敌对-2
              是无日历先验的观察名单。dealer 本子在 $63,480 flip 下方加深空 γ、
              虽然 $60k 磁铁松了一口；SM 以放缓的节奏连压第三天空；funding 决然
              转负；BTC 在仍 NORMAL 的广义 risk-off 里反转成相对跑赢。下一个
              24h 的对法是{' '}
              <em>耐心 + 空仓 —— 让 06-15 周收和 11JUN 结算把地板解决、盯 1h
              收对 $63,480 作 scout 触发</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计追踪 · v2（已过 codex 敌对式审计）
            </span>
            <b>状态：</b>v2 建在 2026-06-11 00:07Z 原子快照上、<b>已过 codex
            敌对但公允审计</b>（裁定 PASS-WITH-NOTES —— 0 CRITICAL + 1 MAJOR
            + 3 MINOR；见 <code>audits/2026-06-11-desk-note.md</code>）。每条
            发现都就地应用、并在 FULL 文件上做 grep-closure 验证（搜错误主张
            模式、修前 vs 修后 stale 命中），不只在审计引用的行。{' '}
            <b>DN-001（MAJOR · 宏观尾动作范围）：</b>模式{' '}
            <code>&quot;would arm&quot;</code>、{' '}
            <code>&quot;arm a put-spread re-grow&quot;</code>、{' '}
            <code>&quot;HY OAS 上方就武装&quot;</code> —— 决策表行与两处正文
            在单凭 HY OAS 就武装 re-grow、而框架要求两条腿；改写成一根不动作
            的盯位、要 HY OAS 干净 &gt; 2.78% AND 10Y 干净 &gt; 4.53%（两条腿）。
            修前 3 → 修后 0。<b>RESOLVED。</b>{' '}
            <b>DN-002（MINOR · funding 连段单位）：</b>模式{' '}
            <code>&quot;14.17h&quot;</code>、<code>&quot;850 min&quot;</code>{' '}
            —— 采样行数被当成墙钟时长；850 是采样行、墙钟 UTC 00:17→14:25
            06-10 是 14h08m（tape 里一根重复的 06-10 14:40 行是 850 行跨
            14h08m 的原因）。每处都重述成「850 采样行 / 14h08m 墙钟」/
            「14h08m」。修前 9 → 修后 0。<b>RESOLVED。</b>{' '}
            <b>DN-003（MINOR · SM 分量 delta）：</b>模式{' '}
            <code>&quot;+1,460&quot;</code>、<code>&quot;+110&quot;</code> ——
            分量不能重构出净额；改成精确取整的 long +115 / short +1,454、端点
            long 13,665 → 13,781、short 55,063 → 56,517、并加一条独立取整说明
            （精确 long 13,665.270 → 13,780.700、short 55,063.368 →
            56,516.884、net −1,338.086 —— 不要去差取整后的端点）。net −1,338
            与砍仓比 3.23% 不变。修前 6 → 修后 0。<b>RESOLVED。</b>{' '}
            <b>DN-004（MINOR · 谱系限定词）：</b>模式{' '}
            <code>&quot;谱系破&quot;</code> / <code>&quot;post-06-08 谱系&quot;</code>{' '}
            —— 一句收尾掉了限定词；两处都补回「当前 post-06-08 floor-watch
            谱系」（带上一根全历史 below-own-200W 周收 2023-10-09 的括注）。
            修前 2 → 修后 0。<b>RESOLVED。</b>四条全部 RESOLVED、修后命中 = 0；{' '}
            <b>已过 codex 敌对式审计</b>。复核源钉：funding × 1095（snap −0.48%
            ann、24h 均值 −2.41% ann、cap 0 / 1441、负分钟 81.96%、最长负连段
            14h08m 墙钟 LIVE 清掉 ≥4h leg-2 闸、快照时 funding 为负）；GEX
            双参考符号（flip $63,480、spot −2.88% / idx −2.730%、aggregate
            −69.0M、$60k −38.65M 松 +9.21M）；200W 全历史 W-MON SMA $62,019
            对 live 现货 −0.59% 与未收盘 06-15 bar $61,596 −0.68%、8 / 154 =
            5.19% 频率、<code>weekly_200sma.json</code> ABSENT（200W 直接由
            parquet 算、JSON percentile / last-event 不可用）；SM 砍仓比 3.23%
            （long +115 / short +1,454 各自独立取整、net −1,338、幅度 easing
            −2,740 → −1,338）；日收谱系（06-07 $63,298、06-08 $63,058、06-09
            $61,695、06-10 $61,484 FINAL、06-11 未收盘 $61,596）；30D RV
            39.59%（40.23% alt）；cross-asset |r| 0.318 NORMAL、BTC −2.73% 对
            NQ −6.81%（+4.08pt 跑赢、从 06-10 −2.47pt 落后反转）；macro Tier-1
            （10Y 4.53% 筛 RE-CLEARED、HY OAS 2.78% AT 闸、TIPS 2.20%、DXY
            99.88、Fed 净流动性 $5.834T）；fut_cvd reset 调整（UTC 06:40 06-10
            rebase 到 0、reset 调整后 24h 期货 CVD = taker-net = +404）。归档：{' '}
            <code>/opt/desk-note/snapshots/2026-06-11-0007/</code>（btc_gex.html、
            cross_asset_correlation_summary.md、macro_dashboard.html、
            mtf_div_latest.html）。<b>Build note（INFO）：</b>本机跑 Node
            18.19.1；Next 16.2.6 在 Node &lt; 20.9.0 于{' '}
            <code>node_modules/next/dist/bin/next:24-28</code> 硬退出、所以完整{' '}
            <code>next build</code> 被环境挡（谱系沿用）；{' '}
            <code>npx --no-install tsc --noEmit</code> 作 build 代理。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是 Hysteresis Research 内部台面文档、为 principals 之间讨论
            而备、<em>非投资建议、非招揽、非要约</em>、也未针对任何接收方的
            具体情况个性化。数字反映单一原子快照（2026-06-11 00:07Z）、
            section 级出处见上方 manifest 带；宏观 Tier-1 面板 render 时间为
            2026-06-10 22:15Z（快照前约 1h52m）、部分输入明确 stale 或 pending
            并已如此标注。这是一篇 v2 备忘、已过 STAGE B codex 敌对式审计 ——
            每条发现都就地应用且 grep-closure 验证。水位、size、条件均为台面
            流程的示意、非长期建议。过去的相关性、gamma 与仓位结构不约束未来
            盘口。衍生品有全损风险、带杠杆处亏损可超出存入保证金。{' '}
            <em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                200W 地板仍在下方、06-15 周收是那根二元、但底下一簇均值回归
                点了火 —— funding 决然转负且 live、TD9 簇 broadened、BTC 反转
                成相对跑赢。flip-reclaim 腿把关 scout。空仓、有耐心。
              </div>
              <div className="dn-sign-name">Desk · BTC 衍生品</div>
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
            v2 · 2026-06-11 00:07Z 快照 · 已过 codex 敌对式审计 · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
