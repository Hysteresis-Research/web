import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-06-14 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-06-14',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-06-14' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260614() {
  await requireViewer('/zh/desk/2026-06-14');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-06-14 · v2</span>
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
              <span className="dn-big">$64,453</span>
              n2n&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+1.38%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-06-14 00:06Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-06-14 00:06Z（snapshot pin）</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · 所有派生值都钉在 00:06Z 锚行 · live `t`
                    字段是 BJ 本地（UTC+8）、所以 00:06Z 锚行是
                    <code>06-14 08:06</code> · 此快照落在 13JUN 08:00Z 期权
                    结算后约 16h06m、14JUN 08:00Z 结算前约 7h54m ·
                    <b>窗口口径：</b>下面每一根 live-tape 比较都是
                    <b>NOTE-TO-NOTE（n2n）</b>—— 从上一篇 06-13 00:06Z 快照量
                    到本篇 00:06Z 快照、本次两根快照正好相隔 24h、即日窗 1441
                    采样行 ≈ 24h00m、241 行 ≈ 4h00m、61 行 ≈ 1h00m —— 所以
                    日 / 4h / 1h 的 Δ 都标 <code>n2n</code>；任何残留的
                    &ldquo;24h&rdquo; 标都是 MTF 扫描引擎自己的窗或前瞻措辞 ·
                    <b>SM 块 FROZEN：</b>Hyperliquid smart-money feed 自
                    2026-06-12 01:36Z 起未再前进（此快照上已陈旧约 46.5h）——
                    SM 多/空/净读 STALE、按 framework-only 处理、不作实时仓位
                    （见 meta tile + 仓位节）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-14 00:01Z scan</td>
                  <td className="dn-flag">
                    滚动 latest 文件（约每 15 分钟重写）· 较 00:06Z 快照锚
                    滞后约 5 分钟 · 含未收盘 K 线 · 作者时逐字存档于
                    <code>/opt/desk-note/snapshots/2026-06-14-0006/</code>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-14 00:00Z 快照</td>
                  <td className="dn-flag">
                    pre-settle · 较快照锚滞后约 6 分钟 · Deribit idx $64,593
                    对 live $64,452.78（高 $140）· 946 合约（06-13 是 952、
                    −6）· 14JUN 0.3DTE +17.10M 在今日 08:00Z 结算（约 8h
                    后）· 除 14JUN 后 aggregate ≈ +46.3M 仍净正（清掉正的
                    前端块会<em>压低</em> aggregate；dashboard 合计 +63.4M
                    权威、显示行非可加 —— 见盘口本子节）· 存档于
                    <code>/opt/desk-note/snapshots/2026-06-14-0006/</code>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-14 00:00Z
                  </td>
                  <td className="dn-flag">滞后约 6 分钟 · 7d 1h bar · 22 资产 · 162 rows · regime NORMAL（均值 |r| 0.407）· 存档于 <code>/opt/desk-note/snapshots/2026-06-14-0006/</code></td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-13 22:16Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1h50m · <b>周末</b> —— FRED Tier-1 日度序列
                    冻在周五 06-12 收（10Y 4.45%、TIPS 2.16%、HY OAS 2.78% 全
                    沿用；不要把 Δ 读成新鲜周末移动）· DXY 99.75（当日 1d Δ
                    −0.11；对 06-13 的 100.08 为 −0.33 note-to-note）· Fed 净
                    流动性 $5.897T · 存档于
                    <code>/opt/desk-note/snapshots/2026-06-14-0006/</code>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵 + 200W 地板</td>
                  <td className="dn-v-cell">btcusdt_1m parquet · 全历史 + 2024–2026 子集</td>
                  <td className="dn-flag">
                    偏移按 live 现货重算 · 子集 MA 阶梯取 2024–2026 窗、按
                    交易台政策 · 200W 地板读自全历史 parquet（W-MON 重采样）·
                    <code>weekly_200sma.json</code> 缺失、所以 200W 直接从
                    parquet 算、JSON 的百分位 / last-event 字段不可用（未
                    捏造）· 子集 W-SMA150 / W-SMA200 不可计算（129 根子集
                    周 bar）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED 月度 · IRLTLT01JPM156N</td>
                  <td className="dn-flag">陈旧 · 月度（~73d）· 不作实时</td>
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
              <span className="dn-v bear">−5.03%</span>
              <span className="dn-src">live · 快照 −5.03% ann（原始 −0.004589 × 1095；快照上空付多 live —— funding 翻成付空）· n2n 均值 ann +0.29%（06-13 是 +2.18%、−1.89pt）· 封顶占用 1 / 1441 采样行在 +6.73% 最大值、2 / 1441 在 −5.71% 最小值 · neg-minute 占比 41.64%（600 / 1441、06-13 是 7.84%、+33.80pt）· n2n 峰 +6.73% ann · n2n 谷 −5.71% ann</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · n2n</span>
              <span className="dn-v bear">均值 +2.18% → +0.29%（−1.89pt）· 快照 +5.95% → −5.03%（−10.98pt）</span>
              <span className="dn-src">区间 −5.71% / +6.73% ann · funding 翻成一根持续空付腿 —— 路径穿负、且收在快照前的尾随连续负 streak 是 456 采样行 / ~7h36m 墙钟、快照上 funding 为负 · 那是一根 ≥4h 连续空付腿、快照上 funding 为负 —— scout funding leg-2 闸 REVIVED（LIVE）、从 06-13 的 DEAD 读反转 · 本窗最长负 streak = 同样 456 行</span>
            </div>
            <div>
              <span className="dn-k">OI · n2n</span>
              <span className="dn-v bull">+2.42%（+2,365 BTC）</span>
              <span className="dn-src">live · 100,155（从 06-13 快照 97,790 升、+2,365）· OI 扩张到 post-06-08 序列里最大的一根 n2n build（之前 post-06-08 的 build 都更小：06-10 +739、06-11 +212）—— 一根上涨日里泄变成了 build · n2n 峰 100,697 @ UTC 19:59 06-13、谷 97,790 @ UTC 00:06 06-13（= 窗开盘 / 06-13 快照）</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v">59.29 / 40.71</span>
              <span className="dn-src">live_db `mkt_long_pct` · 较 06-13 的 60.98 再泄 −1.69pt（价格涨但 de-crowding 继续 —— 散户没追这根上涨腿）· n2n 区间 58.45 / 61.43 · 峰 61.43 / 谷 58.45</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v stale">−37.3k · FEED 冻 ~46.5h（未载入）</span>
              <span className="dn-src">live_db SM 块自 2026-06-12 01:36Z 起未再前进 —— long 13,532.412 / short 50,825.664 / net −37,293.252 是冻住的最后写入值、与 06-13 备忘逐字相同（冻结早于上一篇）。此快照上陈旧约 46.5h。按 STALE / 未载入处理 —— 本次无实时 SM 仓位读</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 06-13 备忘</span>
              <span className="dn-v stale">不可计算 —— feed 冻住</span>
              <span className="dn-src">SM 端点与 06-13 逐字相同、因为 feed 在 2026-06-12 01:36Z 冻住；本次不捏造就算不出任何 SM Δ、cut 分数、或挤压周期步 · 唯一的实时仓位读是 retail mkt_long_pct 和 perp-tape 代理（OI + funding + basis）</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">43.6% / 41.13%</span>
              <span className="dn-src">GEX IV 中位数横跨 946 合约（06-13 是 43.8% / 952、−0.2pt、~平）· IV/RV 价差 +2.47pt · 30D close-to-close RV 41.13%（30 returns / 31 closes；29-return 另一口径 41.81%）</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+1.73%（现货）/ +1.95%（idx）—— 两个都在上方</span>
              <span className="dn-src">flip $63,359（前 $63,282、走 <em>上</em> +$77）· 对 live 现货 $64,452.78（64,452.78 / 63,359 − 1 = +1.726%）/ GEX 文件 idx $64,593（64,593 / 63,359 − 1 = +1.948%）—— 两参考都干净在 flip 上方、缺口随现货比 flip 走得更快而拉宽 · aggregate GEX +63.4M（前 +20.7M、长了 +$42.7M 净多 γ）· $60k 崩盘 put −21.07M（从 −23.34M 减轻）· P/C ~0.60</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                06-13 那根平消化让位给一根真正的上涨腿 —— 现货
                延伸 <span className="dn-tag bull">+1.38% 到 $64,453</span>、
                除了本次最要紧的那一根读以外、结构在每一根读上都硬起来：
                smart-money feed 走黑了
              </span>
              。在一条 <span className="dn-tag">$64,687 / $63,462</span> 区间里
              （高 @ BJ 05:42 06-14 / UTC 21:42 06-13、低 @ BJ 11:28 06-13 /
              UTC 03:28 06-13）反弹变成一根单方向磨。200W 地板重夺<em>再加强</em>
              —— 06-13 日线收最终定在 <span className="dn-tag bull">$64,418</span>、
              所以现在有 <span className="dn-tag bull">三根最终日线收在 $62,019
              地板上方</span>（06-11 $63,598、06-12 $63,547、06-13 $64,418）、
              外加未收盘的 06-15 周 bar $64,388 也在上方。dealer 本子把净多 γ
              急剧加深到 <span className="dn-tag bull">+63.4M</span>（前 +20.7M）、
              0-γ flip 只走上到 <span className="dn-tag">$63,359</span>（前
              $63,282）、所以现货现在坐在
              <span className="dn-tag bull">flip 上方 +1.73% 干净</span> ——
              缺口随现货比 flip 走得更快而拉宽。盘口也转活：funding 翻成一根
              持续空付腿（<span className="dn-tag bear">快照 −5.03% ann</span>、
              进快照前约 7h36m 连续负）、OI 扩张
              <span className="dn-tag bull">+2,365 BTC</span> —— post-06-08
              序列里最大的一根 build、读法是空头压进反弹。
              <em>但有两件事切掉了这份干净：Hyperliquid SM feed 冻住了
              （自 06-12 01:36Z 起陈旧约 46.5h）、所以 smart-money 那侧无法
              确认、按未载入处理；而 MTF 图在闪疲态 —— 快周期重夺了云、1d
              印了一根新鲜水下金叉、但 15m / 30m / 1h / 4h 上都坐着顶背离、
              一根新 ⚡ 8h TD9 SELL 点了。</em>每一根 MA 仍在头顶。均值回归
              scout 仍然<em>无法</em>触发 —— 它的 funding 腿复活、flip 腿守、
              但它的 TD9-BUY 簇死了并翻空（3d 翻 Sell、8h ⚡ TD9 SELL）。这是
              一根在改善的结构上延伸、进了一个开始闪短线疲态的盘面、而仓位
              本子不可读 —— 交易台守 FLAT、06-15 周收仍是那道二元、现在硬倾
              向重夺。
            </p>

            <p>
              BTC 报 <span className="dn-tag">$64,453</span> live、
              <span className="dn-tag bull">+1.38%</span> note-to-note ——
              06-13 那根 doji 之后一根干净上涨日、1h
              <span className="dn-tag bull">+0.02%</span>、4h
              <span className="dn-tag bull">+0.30%</span>、进快照的磨稳而不
              冲。<span className="dn-signal">周期地板重夺是那根再加强的读</span>：
              06-13 收最终定在 $64,418（06-13 备忘当时带的是未收盘 $63,553）、
              给出三根连续<em>最终</em>日线收在 200W $62,019 上方 —— 06-11
              $63,598、06-12 $63,547、06-13 $64,418 —— 加未收盘的 06-14 bar
              $64,388 也在上方。这是对 06-13 谱系（两根最终收）的一次严格升级。
              MA 矩阵头顶没改善、但最近一根来到一波正常 swing 之内 ——
              <span className="dn-tag bull">D-EMA20 $66,637（−3.28%）</span> 是
              最近、也是唯一一根容易够到的；周期锚
              <span className="dn-tag bear">D-SMA100 $72,611（−11.24%）</span> 深
              坐在日线栈下方；早 6 月破掉的 W-SMA20 周地板仍是
              <span className="dn-tag bear">$72,145（−10.66%）</span> 在头顶。
              <span className="dn-em">日线与周线阶梯上每一根 MA 都在现货上方；
              整个盘上唯一一根正结构偏移就是 200W 地板自己（+3.92%）。这仍是
              一根在收盘口径上重夺了周期地板、其它什么都没夺回的盘面 —— 但
              重夺现在三根收深、反弹在延伸。</span>均值回归 scout 的三腿门又
              以另一种别扭方式衰减：本次它的 funding 腿<em>复活</em>（一根
              新鲜 ≥4h 空付 streak）、flip 腿仍守、但它的 TD9-BUY 簇<em>死了
              并翻空</em>（3d 滚成 Sell 1 / 水上死叉、8h 印 ⚡ TD9 SELL）——
              所以门离干净触发没更近、只是又断在另一条腿上。scout 站下。
            </p>
            <h2 className="dn-sec">
              仓位{' '}
              <span className="dn-roman">I · 实时盘面 · SM feed 冻 ~46.5h（未载入 —— 无 smart-money 读）· funding 翻成持续空付腿（快照 −5.03%、进快照约 7h36m 负 —— scout leg-2 复活）· OI 扩张（+2,365）post-06-08 序列里最大的一根 build · retail 再泄 −1.69pt、没追</span>
            </h2>

            <p>
              <span className="dn-signal">
                本次最重要的一条仓位事实是一个缺席：Hyperliquid smart-money
                feed 冻住了、而且已经冻了约 46.5 小时
              </span>
              。live_db 里的 SM 块自 <span className="dn-tag stale">2026-06-12
              01:36Z</span> 起未再前进 —— long_btc
              <span className="dn-tag">13,532.412</span>、short_btc
              <span className="dn-tag">50,825.664</span>、net
              <span className="dn-tag">−37,293.252</span> 是最后写入值、且
              <span className="dn-em">与 06-13 备忘带的数字逐字相同</span>、
              这意味着冻结早于上一篇、06-13 备忘当时引的 SM 移动已经是在读
              一个冻住的 feed。<span className="dn-em">本次不捏造数字就算不出
              任何 SM Δ、cut 分数、挤压周期单分钟步 —— 整个 smart-money 侧
              按 STALE / 未载入处理。</span>诚实的后果：挤压周期 hostile-2
              框架本次无法用自己的数据评估、剩下唯一的实时仓位读是 retail
              mkt_long_pct 和 perp-tape 代理（OI + funding + basis）。这根
              代理在上涨日上的话是明确的、即便 SM 侧走黑。
            </p>

            <p>
              <span className="dn-signal">
                杠杆侧硬翻了 —— funding 穿到一根持续空付腿、那正是<em>复活</em>
                scout funding 腿的东西
              </span>
              。funding 在快照是 <span className="dn-tag bear">−5.03% ann</span>
              （原始 −0.004589 × 1095）、n2n 均值
              <span className="dn-tag">+0.29%</span>（对 06-13 的 +2.18%）、区间
              <span className="dn-tag">−5.71% / +6.73%</span>。路径穿负并守住到
              快照 —— 收在快照前的尾随连续负 streak 是
              <span className="dn-tag bear">456 采样行 / ~7h36m</span>、远过
              ≥4h leg-2 闸、且快照上 funding 牢牢为负。
              <span className="dn-em">06-13 那根读 —— leg-2 在完全正常化的正
              funding 上 DEAD —— 已彻底反转：funding 又在一根 ≥4h 连续腿上
              付空、均值回归 scout 的 funding 空付腿现在 LIVE、不只是更弱。</span>
              neg-minute 占比 7.84% → 41.64%（600 / 1441）跳起、封顶占用是
              <span className="dn-tag">1 / 1441 在 +6.73% 最大值、2 / 1441 在
              −5.71% 最小值</span>、OI
              <span className="dn-tag bull">+2,365 BTC（+2.42%）</span> 扩张到
              post-06-08 序列里最大的一根 build（100,155、从 06-13 快照 97,790
              升；06-10 +739 / 06-11 +212 的 build 都更小）、retail
              <span className="dn-tag">mkt_long_pct 59.29%</span> 在价格涨时
              再泄 −1.69pt —— 散户没追上涨腿。perp 在快照对现货交一道
              <span className="dn-tag bear">−$17.97 折价</span>（1h 均值
              −$26.60、4h 均值 −$29.43；n2n 日均值 −$37.04、区间 −$134.37 /
              +$24.73 —— basis 盘中短暂转升水、但快照上坐折价）。1 分钟
              aggressor skew 快照 <span className="dn-tag bull">+9.0</span>
              （1h 均值 −0.18）—— 进快照一道淡淡的买方倾斜。
              <span className="dn-em">
                funding 翻空付、OI 扩张、perp 折价、散户在涨势里 de-crowd：
                perp-tape 代理读的是空头压进反弹 —— 上涨日里加了新鲜空 OI、
                还付费持着 —— 这正是在 SM feed 活着时会成为挤压周期 re-stack
                的 tell 的配置。SM feed 走黑、正是它停在代理读、不是确认读的
                原因。
              </span>
            </p>

            <p>
              窗口流是<em>一道单边的现货领头买进、期货与大单滞后 —— 一根
              真上涨日、但买在现货、快照上没在杠杆上追</em>。n2n 日：价格
              <span className="dn-tag bull">+1.38%</span>、OI
              <span className="dn-tag bull">+2,365 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +3,440</span>
              <span className="dn-em">（窗内无 cb_cvd reset）</span>、期货 CVD
              <span className="dn-tag bear">Δ −677</span>、大单
              <span className="dn-tag bear">−137 BTC</span>、taker-net
              <span className="dn-tag bear">−677</span> ——
              <span className="dn-em">现货决定性地买了上涨日、而期货 aggressor
              与块流净卖进去；OI 仍扩张、所以期货的卖是空头开仓、不是多头
              平仓 —— 空头压进一根现货领头的涨势</span>。4h（进快照）：价格
              <span className="dn-tag bull">+0.30%</span>、OI
              <span className="dn-tag bear">−540 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +318</span>、期货 CVD
              <span className="dn-tag bear">Δ −22</span>、大单
              <span className="dn-tag bull">+99 BTC</span>、taker-net
              <span className="dn-tag bear">−22</span> ——<em>现货仍买、OI 进
              快照里随一些空头回补在落、一根温和的磨高</em>。1h：价格
              <span className="dn-tag bull">+0.02%</span>、OI
              <span className="dn-tag bull">+67 BTC</span>、现货 CVD
              <span className="dn-tag bear">Δ −66</span>、期货 CVD
              <span className="dn-tag bull">Δ +115</span>、大单
              <span className="dn-tag bear">−12 BTC</span>、taker-net
              <span className="dn-tag bull">+115</span> ——<em>最后一小时走平且
              两侧、OI 加了一点 —— 进快照的一个停顿、不是延续</em>。n2n 日的
              形状是最干净的读：一根现货领头的上涨日、空头开仓压进去（OI 在
              build、期货 aggressor 在卖、funding 翻成付空）—— 一根 perp 本子
              在搏的反弹、若空头错了它对延续是建设性的、若空头被挤它就是燃料。
            </p>
            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 图 · 快周期重夺了云（15m / 30m / 1h 都在上方）、1d 印了一根新鲜水下金叉 · 但顶背离坐在 15m / 30m / 1h / 4h、一根新 ⚡ 8h TD9 SELL 点了 —— 反弹在闪短线疲态 · 每一根 MA 都在头顶</span>
            </h2>

            <p>
              <span className="dn-signal">
                MTF 图重夺了快周期、却在整盘点亮了疲态告警：扫描读 net 3 bull
                / 5 bear / 2 neutral、头部标 &ldquo;高级别偏空 · 短线反弹&rdquo;、
                regime 5/9 反转（JT &lt; 0、偏均值回归）
              </span>
              。快周期现在都在云<em>上</em> —— 15m、30m、1h 都在上涨腿上清了
              自己的云、1h 带盘上最高 RSI（<span className="dn-tag bull">62.2</span>）
              带水上金叉 14b。但这些快周期每一根也都带一根<em>顶</em>背离：
              15m、30m、1h、4h 全标 BEAR regular / BEAR hidden 背离读 ——
              <span className="dn-em">反弹在四根快/中周期上都升进顶背离、经典
              的延伸进疲态签名</span>。4h 持一根水下金叉 21b 但坐在云<em>内</em>
              （62.1k–66.4k）、Sell 6。肯定的多在日线：
              <span className="dn-tag bull">1d 水下金叉 1b、新鲜</span> —— 日线
              MACD 刚向上交叉、是这波里的第一次、不过 1d 仍在云下且超卖
              （RSI 36.4）、Sell 6。慢周期全在云下且杂色：8h 印了一根新
              <span className="dn-tag bear">⚡ TD9 SELL</span>（头条疲态告警）、
              12h 水下金叉 11b 但 Sell 7、3d 滚成水上死叉 6b 在 Sell 1
              （撑了 06-11→06-13 谱系的那根 3d ⚡ TD9 BUY 没了）、1w 无交叉云下
              Buy 4、1M 持待定 Buy 8 → 9? 在云上。
              <span className="dn-em">
                直读：反弹重夺了快周期（15m / 30m / 1h 云上、1d 新鲜金叉）——
                一根真正的短线上涨腿 —— 但它是在每一根快/中周期的顶背离与一根
                新 ⚡ 8h TD9 SELL 里这么做的、而做了三个 session 唯一周期-框架
                多的那根 3d TD9 BUY 已翻成死叉。这张图是一根攒够动能清了快
                周期云、却同时在闪那些先于停滞的疲态信号的反弹。高周期结构仍
                偏空（慢周期云下）；短线反转 regime 偏向反弹；背离警告它在
                成熟。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">64,365</td><td className="num bull">54.8</td><td className="bear">死叉（水上）1b</td><td className="bull">云上 ↓64.1k 53b</td><td>Buy 1</td><td>BEAR hid · BEAR reg · BULL hid · 顶背离</td></tr>
                <tr><td>30m</td><td className="num">64,356</td><td className="num bull">59.6</td><td className="bull">金叉（水上）5b</td><td className="bull">云上 ↓63.7k 36b</td><td>Buy 2</td><td>BEAR reg · BULL hid · 顶背离</td></tr>
                <tr><td>1h</td><td className="num">64,356</td><td className="num bull">62.2</td><td className="bull">金叉（水上）14b</td><td className="bull">云上 ↓63.7k 69b</td><td>Sell 5</td><td>BEAR hid · BEAR reg · BULL hid · 顶背离</td></tr>
                <tr><td>4h</td><td className="num">64,356</td><td className="num bull">61.3</td><td className="bull">金叉（水下）21b</td><td className="neut">云内 62.1–66.4k 17b</td><td>Sell 6</td><td>BEAR reg · BULL hid · 顶背离</td></tr>
                <tr><td>8h</td><td className="num">64,356</td><td className="num">53.0</td><td className="bull">金叉（水下）20b</td><td className="bear">云下 ↑65.7k 87b</td><td className="bear">⚡ TD9 SELL</td><td>BEAR hid</td></tr>
                <tr><td>12h</td><td className="num">64,356</td><td className="num">45.6</td><td className="bull">金叉（水下）11b</td><td className="bear">云下 ↑74.3k 45b</td><td>Sell 7</td><td>BEAR hid</td></tr>
                <tr><td>1d</td><td className="num">64,339</td><td className="num bull">36.4</td><td className="bull">金叉（水下）1b · 新鲜</td><td className="bear">云下 ↑73.9k 13b</td><td>Sell 6</td><td>BEAR hid</td></tr>
                <tr><td>3d</td><td className="num">64,348</td><td className="num bull">36.9</td><td className="bear">death（水上）6b</td><td className="bear">云下 ↑74.7k 4b</td><td>Sell 1</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">64,339</td><td className="num bull">35.6</td><td className="neut">无交叉</td><td className="bear">云下 ↑100.3k 19b</td><td>Buy 4</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">64,348</td><td className="num">43.0</td><td className="bull">DIF 水上（无交叉）</td><td className="bull">云上 ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 00:01Z scan（滚动 latest
                    文件；逐字存档于
                    <code>/opt/desk-note/snapshots/2026-06-14-0006/</code>）。
                    头部告警：<em>net 3 bull / 5 bear / 2 neutral · 高级别偏空
                    · 短线反弹</em>、<em>regime 5/9 反转（JT &lt; 0）</em>、
                    <em>顶背离在 15m / 30m / 1h / 4h</em>、<em>⚡ 8h TD9 SELL</em>。
                    扫描现货 $64,356、24h +1.27%（00:01Z MTF 扫描；live-tape
                    头部 00:06Z 在快照窗读 +1.38% n2n —— 5 分钟时间差与不同窗
                    导致偏差）、24h H/L $64,738 / $63,360、qVol $4.88B。
                    收盘为未收盘 K 线；每个值在各周期收盘前都按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵确认反弹仍整个发生在结构下方、但最近一根现在在一波
              正常 swing 之内。现货 $64,453 坐在盘上每一根日线与周线下方；
              任何地方唯一一根正偏移就是 200W 地板自己（+3.92%）。最近头顶是
              <span className="dn-tag bull">D-EMA20 $66,637（−3.28%）</span>
              —— 唯一一根容易够到的重夺目标 —— 然后
              <span className="dn-tag bear">D-SMA20 $66,915（−3.68%）</span>、
              <span className="dn-tag bear">D-EMA50 $70,819（−8.99%）</span>、
              <span className="dn-tag bear">W-SMA20 $72,145（−10.66%）</span>
              （破掉的周地板）、
              <span className="dn-tag bear">D-SMA100 $72,611（−11.24%；
              周期锚）</span>、
              <span className="dn-tag bear">D-EMA100 $73,410（−12.20%）</span>、
              <span className="dn-tag bear">D-SMA150 $73,510（−12.32%）</span>、
              <span className="dn-tag bear">W-EMA200 $73,776（−12.64%；
              种子）</span>、
              <span className="dn-tag bear">D-SMA50 $73,910（−12.80%）</span>、
              <span className="dn-tag bear">W-EMA20 $75,445（−14.57%）</span>、
              <span className="dn-tag bear">D-EMA150 $76,135（−15.34%）</span>、
              <span className="dn-tag bear">D-SMA200 $77,639（−16.98%）</span>、
              <span className="dn-tag bear">W-EMA150 $78,108（−17.48%；
              种子）</span>、
              <span className="dn-tag bear">D-EMA200 $78,783（−18.19%）</span>。
              更高更远、已弃用：W-EMA100 $82,707（−22.07%）、W-EMA50
              $83,433（−22.75%）、W-SMA100 $88,542（−27.21%）、W-SMA50
              $91,835（−29.82%）。
              <span className="dn-em">
                MA 锚自 parquet 2026-06-14 00:05Z close $64,387.60；偏移
                按 live 现货 $64,452.78 重算。显示的 MA 水位按 $ 取整、
                偏移用精确序列值算。子集 MA 阶梯取 2024–2026 窗、按交易台
                政策；W-SMA150 / W-SMA200 不可计算（129 根子集周 bar）、
                W-EMA150（−17.48%）与 W-EMA200（−12.64%）从可用历史 seed、
                按种子披露。200W $62,019 是全历史 W-MON 线（200 根收盘 bar、
                止于 06-08）。日线收盘：06-08 $63,058（上方）、06-09 $61,695
                （下方）、06-10 $61,484 最终（下方）、06-11 $63,598 最终
                （上方）、06-12 $63,547 最终（上方）、06-13 $64,418 最终
                （上方）、06-14（未收盘）$64,388（上方）—— 三根最终收在
                200W 地板上方、加未收盘 bar 在上方。
              </span>
            </p>
            <h2 className="dn-sec">
              盘口本子{' '}
              <span className="dn-roman">III · 本子急剧加深到 +63.4M 净多 γ（前 +20.7M）· 0-γ flip 只走上到 $63,359、所以现货坐在 +1.73% 干净上方（缺口拉宽）· 14JUN +17.10M 今日 08:00Z 结算、清掉它会压低 aggregate 到 ≈ +46.3M</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子在上涨日里把净多 γ 翻了三倍、而 flip 几乎没动、
                所以现货干净地从它上方拉开
              </span>
              。aggregate GEX 是 <span className="dn-tag bull">+63.4M / 1%</span>
              （06-13 是 +20.7M —— 一根 +$42.7M 正向长）；本子现在牢牢净多 γ
              （阻尼）、比反弹起点时强得多。0-γ flip 只移动
              <span className="dn-tag">$63,282 → $63,359（+$77）</span>、现货
              $64,453 现在坐在 <span className="dn-tag bull">flip 上方 +1.73%</span>、
              现货口径（64,452.78 / 63,359 − 1 = +1.726%）；GEX 文件自己的
              Deribit idx 参考 $64,593 读 <span className="dn-tag bull">上方
              +1.95%</span>（64,593 / 63,359 − 1 = +1.948%）。
              <span className="dn-em">两参考都干净在 flip 上方、缺口对 06-13
              拉宽（+0.47% / +0.76%）—— 现货比 flip 走得快、所以 dealer 本子
              现在是从强势位置阻尼、不是骑墙。</span>墙图是一道厚正头顶带对
              一根减轻的深崩盘 put：最重正墙
              <span className="dn-tag bull">$64.5k +19.20M</span>（就在现货上）、
              <span className="dn-tag bull">$65k +13.95M</span>、
              <span className="dn-tag bull">$80k +11.71M</span>、
              <span className="dn-tag bull">$67k +9.94M</span>、
              <span className="dn-tag bull">$70k +8.48M</span>、
              <span className="dn-tag bull">$66k +6.14M</span>、
              <span className="dn-tag bull">$75k +5.35M</span>；负的是
              <span className="dn-tag bear">$60k −21.07M</span>（那根持久崩盘
              put、从 06-13 的 −23.34M 减轻）、
              <span className="dn-tag bear">$62k −8.41M</span>（就在现货下方）、
              <span className="dn-tag bear">$55k −6.41M</span>。
              <span className="dn-em">
                近头顶 $64.5k–$67k 带是一道厚正撑架（四根 strike 合计 ~+49M）、
                就在现货上被 $64.5k +19.20M 墙封顶 —— 一根对推穿 $64.5k 结构性
                offered、对回落往现货下方 $62k −8.41M 撑架 bid 的 dealer 本子。
                $60k 崩盘 put 磁铁本次减轻了（−$2.27M）、但在现货下方 −6.9%、
                不是近现货锚。
              </span>
            </p>

            <p>
              expiry strip 前端整根为正、但显示行对 dashboard 合计是
              <span className="dn-em">非可加</span>。各 expiry：14JUN 0.3DTE
              <span className="dn-tag bull">+17.10M</span>（今日 08:00Z 结算）、
              15JUN 1.3 <span className="dn-tag bull">+22.71M</span>（最重的近端
              正、结算 06-15 周）、16JUN 2.3 +1.65M、17JUN 3.3 +1.88M、19JUN
              5.3 +6.20M、<span className="dn-tag bear">26JUN 12.3 −16.80M</span>
              （月度、盘上最重负块、从 06-13 的 −22.05M 减轻）、3JUL +0.80M、
              31JUL +14.24M、28AUG +2.85M、25SEP +2.60M、25DEC +4.30M、
              26MAR27 +0.65M。
              <span className="dn-em">显示行合计 ≈ +58.18M、这<em>不是</em>
              dashboard aggregate +63.4M —— 各 strike / 各 expiry 分解对头部
              合计非可加；dashboard +63.4M 权威。</span>14JUN 0.3DTE 在今日
              08:00Z 结算（约 8h 后）：因为它是一根正的 +17.10M 块、清掉它会
              <em>压低</em> aggregate —— 除 14JUN 后读约 +46.3M、仍牢牢净正、
              但结算后是一本更小的正本子。
              <span className="dn-em">
                15JUN +22.71M 块（06-15 周结算）是最重的近端正、且正坐在二元
                日上；配上 26JUN 月度 −16.80M 这根结构性负的仍远在时间上、
                curve 前端是一道在接下来两次结算后各变薄、但仍净多 γ 的正撑架。
              </span>
            </p>

            <p>
              IV 中位数横跨 946 合约是 <span className="dn-tag">43.6%</span>
              （从 06-13 的 43.8% / 952 合约 ~平下来 —— 一根 −0.2pt 轻推、−6
              合约是先前 0DTE 块到期）对 30D close-to-close RV
              <span className="dn-tag">41.13%</span> —— 链级 richness
              <span className="dn-tag">~+2.47pt</span>、IV/RV 价差在已实现守高
              时近平。
              <span className="dn-em">是 946 合约的链中位数、
              <span className="dn-em">不是</span>可交易价差；expiry- /
              strike-level vega、skew、期限结构仍未载入、vol 读法保持
              framework only。</span>
              RV 方法：30D close-to-close、logret.std × √365 × 100、用最末
              30 根日 log return（= 连续 31 根日 close）、锚自 parquet
              2026-06-14 00:05Z；底层 31-close 窗区间 05-15 → 06-14。（参考：
              最末 29 returns / 30 closes 读 41.81%；页面值 41.13% 来自 30
              returns。）P/C 比 ~0.60 在 GEX 文件上。
            </p>
            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · 周末 —— FRED Tier-1 日度序列冻在周五 06-12 收（10Y 4.45%、TIPS 2.16%、HY OAS 2.78% 沿用）· re-grow 两腿仍 UN-FIRED、reclaim-long 筛守 · DXY 软到 99.75 · 跨资产 NORMAL |r| 0.407、BTC 7d 领全盘（+6.01%）仅次于 COPPER</span>
            </h2>

            <p>
              <span className="dn-signal">
                这是个周末、所以宏观面大半冻住 —— FRED Tier-1 日度序列带着
                周五 06-12 收、不该读成新鲜移动
              </span>
              。面板渲染 2026-06-13 22:16Z、比快照早约 1h50m。US 10Y nominal
              <span className="dn-tag bull">4.45%</span>、regime z
              <span className="dn-tag bear">+1.38</span>、偶发 z
              <span className="dn-tag bull">−0.50</span> —— 冻在周五水平、
              <span className="dn-em">守住 reclaim-long 利率筛（10Y &lt; 4.55%）
              为真、并让 re-grow leg-A 闸（10Y &gt; 4.53%）UN-FIRED</span>。
              10Y TIPS real <span className="dn-tag bull">2.16%</span>、regime z
              <span className="dn-tag bear">+2.12</span>、偶发 z
              <span className="dn-tag bear">+0.94</span> —— 冻住；regime z 是
              面板上唯一一根 EXTREME risk-off 标。5Y5Y BE 通胀
              <span className="dn-tag">2.23%</span>。HY OAS
              <span className="dn-tag">2.78%</span>、regime z
              <span className="dn-tag bull">−0.84</span>、偶发 z
              <span className="dn-tag">+0.31</span> —— 冻在 2.78% re-grow 闸
              <em>上</em>、所以 re-grow leg-B 仍 UN-FIRED（不在它上方）。MOVE
              债波 <span className="dn-tag">69.4</span> —— 松、平。美元软了：
              DXY <span className="dn-tag bull">99.75（当日 1d Δ −0.11）</span>、
              regime z <span className="dn-tag bear">+1.36</span>、偶发 z
              <span className="dn-tag bear">+1.09</span> —— z 标上仍 RISK-OFF、
              但落破 100、对 06-13 的 100.08 为 −0.33 note-to-note
              （dashboard 自己的 1d Δ 是 −0.11）；Fed 净流动性
              <span className="dn-tag bull">$5.897T</span> 松；NFCI −0.506 中性
              （陈旧 ~8d）；US-JP 10Y 利差 <span className="dn-tag">1.94%</span>；
              USD/JPY <span className="dn-tag">160.18（+0.05）</span>；USD/CNY
              6.7621。
              <span className="dn-em">
                净：周末什么都没触发、因为日度序列冻住 —— 06-12 触发、06-13
                un-fired 的 re-grow 闸仍 un-fired（10Y 4.45% 在 4.53% leg-A
                闸下；HY OAS 2.78% 在闸上、不在上方）、reclaim-long 筛（10Y
                &lt; 4.55%）守。唯一动的是美元落破 100、一根边际 risk-on 跳。
                宏观面与 BTC 转<em>对齐</em>、不再相搏；DXY 硬与 TIPS-real
                EXTREME 是两根抵消的 risk-off 线、但对 BTC 要紧的利率路径安静
                且在闸下。周一 FRED 日度打印恢复时再读。
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
                <tr><td>US 10Y nominal</td><td className="num">4.45%</td><td className="num stale">冻（周五 06-12）</td><td className="num bear">+1.38</td><td className="num bull">−0.50</td><td className="bear">紧 regime · re-grow leg-A UN-FIRED、筛守（周末冻）</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.16%</td><td className="num stale">冻（周五 06-12）</td><td className="num bear">+2.12</td><td className="num bear">+0.94</td><td className="bear">EXTREME RISK-OFF regime · 冻</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.23%</td><td className="num stale">冻（周五 06-12）</td><td className="num">−0.03</td><td className="num bull">−0.89</td><td className="neut">无标</td></tr>
                <tr><td>HY OAS</td><td className="num">2.78%</td><td className="num stale">冻（周五 06-12）</td><td className="num bull">−0.84</td><td className="num">+0.31</td><td className="bull">松 · 在 2.78% 闸上、leg-B UN-FIRED</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.506</td><td className="num stale">陈旧 ~8d</td><td className="num">+0.19</td><td className="num bull">−0.73</td><td className="neut">中性</td></tr>
                <tr><td>MOVE 债波</td><td className="num">69.4</td><td className="num bull">−0.09</td><td className="num bull">−0.61</td><td className="num bull">−1.02</td><td className="bull">松 · 平</td></tr>
                <tr><td>DXY</td><td className="num">99.75</td><td className="num bull">−0.11</td><td className="num bear">+1.36</td><td className="num bear">+1.09</td><td className="bear">RISK-OFF z 标 · 落破 100、对 100.08 为 −0.33 n2n（表 Δ 是 dashboard 当日 1d −0.11）</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.897T</td><td className="num bull">+0.062T</td><td className="num bull">+0.82</td><td className="num bull">+2.47</td><td className="bull">松</td></tr>
                <tr><td>USD/JPY</td><td className="num">160.18</td><td className="num bear">+0.05</td><td className="num bear">+1.29</td><td className="num bear">+1.07</td><td className="neut">日元软</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">1.94%</td><td className="num stale">冻</td><td className="num bull">−0.88</td><td className="num bull">−0.50</td><td className="bull">收窄</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7621</td><td className="num bull">−0.01</td><td className="num bull">−1.77</td><td className="num bull">−1.34</td><td className="bull">无标 · 松</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">月度（~73d）</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">月度 · 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、162 rows、汇总 00:00Z ——
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。
              非对角线均值 <span className="dn-tag">|r| 0.407</span>（较 06-13
              的 0.391 硬起来、刚进 NORMAL 带上半、不是系统性）。BTC 列出的
              对齐是 TradFi-tech 领头并略收紧：NQ
              <span className="dn-tag">+0.577</span>、SP500
              <span className="dn-tag">+0.562</span>、TSLA
              <span className="dn-tag">+0.521</span>、NVDA
              <span className="dn-tag">+0.516</span>、COPPER
              <span className="dn-tag">+0.493</span>、SILVER
              <span className="dn-tag">+0.489</span>、META
              <span className="dn-tag">+0.485</span>、GOOGL
              <span className="dn-tag">+0.479</span>、MSFT
              <span className="dn-tag">+0.472</span>、GOLD
              <span className="dn-tag">+0.441</span>、JP225
              <span className="dn-tag">+0.428</span>。7d 相对表现：
              <span className="dn-tag bull">BTC +6.01%</span>（现在领全盘仅
              一例 —— 只有 COPPER 跑得更高）、COPPER
              <span className="dn-tag bull">+7.07%</span>、PALL
              <span className="dn-tag bull">+4.99%</span>、JP225
              <span className="dn-tag bull">+3.69%</span>、TSLA
              <span className="dn-tag bull">+3.55%</span>、NQ
              <span className="dn-tag bull">+2.31%</span>、SP500
              <span className="dn-tag bull">+0.67%</span>；mega-cap 科技盘重 ——
              MSFT <span className="dn-tag bear">−6.18%</span>、AAPL
              <span className="dn-tag bear">−5.22%</span>、META
              <span className="dn-tag bear">−3.62%</span>、AMZN
              <span className="dn-tag bear">−2.88%</span>；金属杂色（GOLD
              <span className="dn-tag bear">−1.89%</span>、PLAT
              <span className="dn-tag bear">−3.50%</span>、SILVER +0.46%）；
              能源继续崩 —— CL <span className="dn-tag bear">−11.72%</span>、
              BRENT <span className="dn-tag bear">−11.41%</span>。
              <span className="dn-em">
                BTC +6.01% 现在领全 22 资产盘、只输 COPPER +7.07% —— 对 06-13
                的一次严格升级、那时 BTC 领 US 科技指数对但 JP225 与 PALL
                跑得更高。它对 NQ +2.31% 的领先拉宽到 +3.70pt（06-13 是
                +1.49pt）—— 这次缺口拉宽是因为 BTC 跑自己的上涨腿、不是 NQ
                翻倒。宽 regime 守 NORMAL、BTC 现在是盘上最硬的内生风险资产、
                只输一根工业金属；能源崩（CL/BRENT −11%）与 mega-cap 科技
                回撤是宏观横流、但本次都不是 BTC 承重读
              </span>
              。JGB 月度 2.52% 带 EXTREME RISK-OFF 月度标 —— 不依赖。
            </p>
            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · 200W 地板盯位 PRIMARY（重夺加强到三根最终收在上方、06-15 收硬倾向重夺）· 均值回归 scout 仍无法触发（funding 腿复活 + flip 腿守、但 TD9 簇死了/翻空）· 宏观尾 re-grow UN-FIRED · 挤压周期 hostile-2 ON HOLD（SM feed 冻住）· 交易台 flat</span>
            </h2>

            <p>
              <span className="dn-signal">
                一根在改善的结构上延伸进闪疲态盘面、仓位本子又走黑的上涨日、
                不改变一本平本子 —— 它加强盯位、让 scout 仍站着
              </span>
              。交易台带着无仓位进快照、什么也没开；06-12 起的那根反弹现在
              是一根真上涨腿、交易台按设计无入场地看着它延伸。诚实的记分卡：
              200W 重夺加强到三根最终日线收在地板上方（一根严格升级）、dealer
              本子把净多 γ 翻三倍到 +63.4M、现货拉到 flip 上方 +1.73%、盘口
              转建设性（空头压进现货领头涨势）、BTC 7d 领跨资产盘仅次于
              COPPER —— 每一根方向读都硬了。<em>但均值回归 scout 仍无法触发：
              它的 funding 腿复活、flip 腿守、可它的 TD9-BUY 簇死了并翻空
              （3d 翻死叉、8h 翻 ⚡ TD9 SELL）、所以它离干净触发没更近 —— 每天
              断一条不同的腿；每一根 MA 都在头顶；快周期重夺了云但进了四根
              快/中周期的顶背离；SM feed 冻 ~46.5h 所以挤压读无法确认。</em>
              不追。scout 是一根确认交易、它需要的确认（一道干净三腿门 AND
              06-15 周重夺）仍不完整 —— 等 06-15 周收和一道重新武装的门、不
              要把入场硬塞进一根延伸但疲态的盘面。
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · PRIMARY · 200W 周期地板盯位 · 重夺加强：现在三根最终日线收在上方（06-11 $63,598、06-12 $63,547、06-13 $64,418）+ 未收盘 06-15 周 bar $64,388 在上方</span>
              <div className="dn-trade-name">
                200W 周期地板盯位 —— 重夺加强：三根最终日线收在 $62,019 上方（06-11 $63,598、06-12 $63,547、06-13 $64,418）加未收盘 06-15 周 bar $64,388 在上方；06-15 周收仍是那道二元、现在硬倾向重夺
              </div>
              <div className="dn-thesis">
                06-09 / 06-10 破位放了两根日线收在地板下；06-11 盘面拿回来、
                06-12 / 06-13 守住并延伸。本次 06-13 日线收最终定在 $64,418
                —— 一根连续第三根<em>最终</em>日线收在 200W $62,019 上方、叠在
                06-11 的 $63,598 与 06-12 的 $63,547 上、也是三根里最高的一根。
                这是对 06-13 读（两根最终收）的严格升级。现货 $64,453 坐在地板
                上方 +3.92%、未收盘的 06-15 W-MON 周 bar 印 $64,388 = 上方
                +3.82%。全历史 200 周 SMA 是 $62,019（200 根收盘 bar、止于
                06-08）；周收破自己 200W 的频率是 8 / 154 = 5.19% —— 一个低
                基率位置、盘面现在已坐回上方三根最终日线收。唯一解的事件仍是
                06-15 周收：一根收在 $62,019 上方确认重夺（06-08 后谱系的一周
                回踩并重夺）、一根收在下方仍会确认首次持续的周-200W 破 ——
                但三根最终日线收在上方加 +3.82% 周内缓冲、让重夺以宽得多的
                边际成为更高概率结果。状态：<em>盯位开、重夺在加强、无仓位</em>。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W 地板（全历史 W-MON）</span><span className="dn-lvl-v">$62,019 · 200 根收盘 bar 止于 06-08 · live 现货 +3.92% / +$2,434 在上方</span></div>
                <div><span className="dn-lvl-k">未收盘周（06-15）</span><span className="dn-lvl-v bull">1m-close $64,388 = +3.82% / +$2,369 在 200W 上方 —— 在 06-15 W-MON 收前临时</span></div>
                <div><span className="dn-lvl-k">最终日线收谱系</span><span className="dn-lvl-v bull">06-11 $63,598 最终 · 06-12 $63,547 最终 · 06-13 $64,418 最终（都在上方）· 06-14 未收盘 $64,388（上方）—— 三根最终收在地板上方</span></div>
                <div><span className="dn-lvl-k">重夺确认（多）</span><span className="dn-lvl-v bull">06-15 周收 &gt; $62,019 —— 确认地板重夺；在确认转向上重开 scout-long 论</span></div>
                <div><span className="dn-lvl-k">破位确认（空）</span><span className="dn-lvl-v bear">06-15 周收 &lt; $62,019 —— 06-08 后谱系首次持续周收破 200W（上一根全历史破自己 200W 的收是 2023-10-09）；在 +3.82% 缓冲下现在是低概率路径</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>200W 是一根周收线、不是盘中水位 —— 现货
                +3.92% 在上方、未收盘 bar +3.82% 在上方都不解它；只有 06-15
                W-MON 收解。三根最终日线收（06-11 $63,598、06-12 $63,547、06-13
                $64,418）加 06-14 未收盘 bar 在上方；把下一根周收当二元、把
                14JUN 08:00Z 结算与日线收谱系当中间 tell。加强的周内守把赔率
                拉向重夺、它不平掉这单。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout · 仍无法触发 · funding leg-2 复活 + flip 腿守、但 TD9-BUY 簇死了 / 翻空 · 站下</span>
              <div className="dn-trade-name">
                均值回归多 scout —— 仍无法触发：funding 空付 leg-2 复活（快照 −5.03%、进快照约 7h36m 负）、flip 腿守（现货在 $63,359 上方 +1.73%）、但 TD9-BUY 簇死了并翻空（3d 翻 Sell 1 / 水上死叉、8h ⚡ TD9 SELL）—— 门又断在了另一条腿上
              </div>
              <div className="dn-thesis">
                scout 是一道三腿门：(1) 一根 TD9-BUY 簇、(2) 一根 funding 空付
                ≥4h 连续 streak、(3) 一根 1h 收在 0-γ flip 上方。06-13 时 leg 1
                是唯一 live 成员（3d ⚡ TD9 BUY）、leg 2 DEAD（funding 正常化
                回正）、leg 3 刚清。本次各腿又以另一轴衰减：<em>Leg 2 复活</em>
                —— funding 翻成一根持续空付腿（快照 −5.03%、n2n 均值 +0.29%、
                一根 456 行 / ~7h36m 连续负 streak 进快照、快照上 funding 为
                负）、自 06-13 dead read 以来首根 live ≥4h 空付腿（06-11 已有
                一根 live ≥4h 空付腿、所以这是复活、不是谱系首根）。<em>Leg 3
                守</em> —— flip 只走上到 $63,359、现货坐在上方 +1.73%（idx
                +1.95%）。但<em>Leg 1 死了并翻空</em> —— 撑了这波的 3d ⚡ TD9
                BUY 滚成水上死叉在 Sell 1、8h 印了一根新鲜 ⚡ TD9 SELL；TD 簇
                现在是一根 SELL 簇、配 15m / 30m / 1h / 4h 的顶背离加固疲态
                读。净：scout 无法触发 —— 一根均值回归多挂在一根不只是失效、
                而是反转了的 TD9-BUY 簇上、而它设计要抓的那波已经跑了。门
                断在比 06-13 不同的腿上、不是离干净触发更近。状态：<em>站下、
                无入场</em>。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">leg 1 · TD9 簇</span><span className="dn-lvl-v bear">死了 / 翻空 —— 3d 滚成 Sell 1 / 水上死叉（⚡ TD9 BUY 没了）、8h 印 ⚡ TD9 SELL；顶背离在 15m / 30m / 1h / 4h —— 簇反转成一根 SELL 读</span></div>
                <div><span className="dn-lvl-k">leg 2 · funding 空付 ≥4h</span><span className="dn-lvl-v bull">复活 / LIVE —— funding 翻空付（快照 −5.03%）、尾随负 streak 456 行 / ~7h36m 进快照、快照上 funding 为负 —— 一根干净 ≥4h 腿</span></div>
                <div><span className="dn-lvl-k">leg 3 · 1h 收 &gt; flip</span><span className="dn-lvl-v bull">守 —— flip $63,359、现货在上方 +1.73%（idx +1.95%）—— 干净上-flip、但 leg 1 反转后它是学术的</span></div>
                <div><span className="dn-lvl-k">触发（3 腿都干净）</span><span className="dn-lvl-v bull">确认 TD9 BUY 簇 AND 一根 live funding 空付 ≥4h AND 1h 收 &gt; flip —— 然后 scout long 0.2R；leg 2 与 3 live 但 leg 1 反转、所以不同时干净</span></div>
                <div><span className="dn-lvl-k">止损 / size</span><span className="dn-lvl-v bear">1h 收 &lt; $61,484（06-10 日线收 / 200W 带）· size 0.2R · 在周期锚 D-SMA100 $72,611 平半</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R 草图（示例、非 live 单）：</b>若门重新武装、一根在
                flip $63,359 上方的干净 1h 收触发、对一根 $61,484 止损是
                ~$1,875 风险；首目标在周期锚 $72,611 是 ~$9,252 ≈ 4.9:1 ——
                纸面吸引、但 TD 簇反转成 SELL 读时门无法触发。<b>硬规则：</b>不
                要从那两条 live 的腿合成入场 —— 一根均值回归多需要一根 TD9-BUY
                簇、而簇已翻成 TD9 SELL 带快周期顶背离；在 8h-TD9-SELL 疲态、
                每一根 MA 都在头顶时买一根延伸盘、正是框架禁止的抢跑。诚实的读：
                scout 现在已连续第三次断在不同的腿上无法触发（06-13 flip-then-
                funding、本次 TD 簇）—— 等一根确认 TD9-BUY 簇重新成型 AND 06-15
                周重夺、不要硬塞。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 宏观尾 · put-spread re-grow 闸 —— 两腿仍 UN-FIRED（周末冻在 06-13 的 un-fired 态）</span>
              <div className="dn-trade-name">
                宏观尾 put-spread —— 已平；re-grow 闸两腿仍 UN-FIRED：周末冻的 10Y 4.45%（在 4.53% leg-A 闸下）AND HY OAS 2.78%（在、不在 leg-B 闸上方）；reclaim-long 利率筛（10Y &lt; 4.55%）守为真
              </div>
              <div className="dn-thesis">
                宏观尾 put-spread 已平、无残余。两根 re-grow 腿都在 06-12 触发、
                都在 06-13 un-fired；本次 FRED 日度序列周末冻在周五 06-12 收、
                所以什么也没重触发：10Y 守 4.45%（在 4.53% 闸下且在 reclaim-long
                筛 10Y &lt; 4.55% 内）、HY OAS 守 2.78%（在、不在它闸上方）。
                <span className="dn-em">没有新鲜的周末宏观信号 —— 闸靠冻在它们
                下方保持 un-fired、唯一的实时宏观跳是 DXY 落破 100（一根边际
                risk-on 读）。宏观面与 BTC 转对齐、不再相搏。</span>一根 re-grow
                会逆着反弹；闸保持 un-fired 把连酌情张力都挪下了桌。交易台不持
                尾、对这本净多 γ、200W 重夺的盘面无门可触发。周一 FRED 日度
                打印恢复时再读。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">已平 · 无残余 · re-grow 闸两腿都 UN-FIRED（周末冻）—— 无张力可管</span></div>
                <div><span className="dn-lvl-k">re-grow leg A（UN-FIRED）</span><span className="dn-lvl-v bull">10Y &gt; 4.53% 收 —— 在 4.45% UN-FIRED（周末冻在闸下）</span></div>
                <div><span className="dn-lvl-k">re-grow leg B（UN-FIRED）</span><span className="dn-lvl-v bull">HY OAS &gt; 2.78% 收 —— 在 2.78% UN-FIRED（周末冻在闸上、不在上方）</span></div>
                <div><span className="dn-lvl-k">reclaim-long 利率筛</span><span className="dn-lvl-v bull">10Y &lt; 4.55% 收 —— 在 4.45% 守为真</span></div>
              </div>
              <div className="dn-gating">
                <b>注意：</b>re-grow 闸是随水位漂动设的酌情盯位、不是回测断点、
                本次它们只是冻住 —— 周一第一根新鲜 FRED 日度打印时再读。一根
                新尾只有在 BTC 内部结构翻回去（本子在一根重新失败的 flip 下
                重新加深空 γ AND 06-15 周失败）WITH 宏观腿重新触发时才有意义
                —— 现在这些都不成立。只在两根宏观腿对一根 BTC 内部破位干净
                重触发上重新武装盯位；缺这个、就没尾可长。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 挤压周期 hostile-2 观察名单 · 无日历先验 · ON HOLD —— SM feed 冻 ~46.5h、框架本次无法用自己的数据评估</span>
              <div className="dn-trade-name">
                挤压周期 hostile-2 —— ON HOLD：Hyperliquid SM feed 在 2026-06-12 01:36Z 冻住（陈旧约 46.5h）、所以算不出 SM Δnet 步；perp-tape 代理（OI +2,365 上涨日、funding 翻空付、perp 折价）暗示空头压进反弹、但不可确认
              </div>
              <div className="dn-thesis">
                挤压周期框架以无日历先验的观察名单跑（节奏在 5 月底被证伪）、
                本次它 ON HOLD、因为它的主输入走黑：live_db 里的 SM 块自
                2026-06-12 01:36Z 起未再前进、所以 SM 多/空/净冻住、不捏造就
                算不出任何离散 Δnet ≥ +3k 回补步或 ≤ −3k 重堆。<span className="dn-em">本次的挤压读因此完全靠 perp-tape 代理、它有暗示但不确认：OI 在
                上涨日扩张 +2,365、funding 翻成付空（进快照约 7h36m 空付）、
                期货 aggressor 净卖进一根现货领头涨势、perp 交折价 —— 空头压
                进反弹的配置、若 SM feed 印证它就是 re-stack 的 tell。</span>
                feed 解冻后、把任何新鲜 Δnet ≤ −3k 单分钟步（Δshort &gt; 0 +
                Δlong &lt; 0 同一分钟）读作一根重堆 hostile-2 信号、任何 Δnet
                ≥ +3k 回补步读作它的反面 —— 但 feed 冻着两个都读不了。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">框架状态</span><span className="dn-lvl-v stale">ON HOLD · SM feed 冻 ~46.5h（自 2026-06-12 01:36Z）· 本次无 SM Δnet 步可算</span></div>
                <div><span className="dn-lvl-k">perp-tape 代理（live）</span><span className="dn-lvl-v">OI +2,365（+2.42%）在上涨日 · funding 翻空付（快照 −5.03%、~7h36m）· 期货 CVD −677 进现货领头涨势 · perp −$17.97 折价 —— 空头压进反弹、对 SM 不可确认</span></div>
                <div><span className="dn-lvl-k">前向 gating</span><span className="dn-lvl-v">SM feed 解冻后：新鲜 Δnet ≤ −3k 单分钟 = 重堆 hostile-2 信号；Δnet ≥ +3k = 回补点火 —— 两个方向都无时间先验；在那之前代理是唯一读</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>节奏已死（5 月底被证伪）、且 SM feed 冻住、
                所以本次没有 SM 数据可读 —— 把框架当 ON HOLD、不是一本安静的
                本子。不要把冻住的 −37.3k 净往前带、当它是一根实时读、或把它
                对一个未来解冻值作单步求差（那道缺口会是多日累积、不是一根
                分钟步）。perp-tape 代理指向空头开仓压进反弹、那是一根 re-stack
                会印的配置、但缺 SM feed 它停在代理。feed 一前进就恢复框架；
                读第一根新鲜 Δnet 步、看本子往哪个方向承诺。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 200W 重夺加强（三根最终日线收在上方；06-15 收硬倾向重夺）· scout 在 TD 簇反转时仍无法触发 · dealer 本子三倍净多 γ · 盘口转建设性但 SM feed 冻住 · 交易台 flat</span>
            </h2>

            <p>
              06-13 那些条件里：200W 周期地板重夺<em>加强</em>（06-13 日线收
              最终定在 $64,418、一根第三根最终收在地板上方、现货 +3.92% 在
              上方、未收盘 06-15 bar +3.82% 在上方）；dealer 本子把净多 γ
              <em>翻三倍</em>到 +63.4M、现货拉到 flip 上方 +1.73%；均值回归
              scout 仍<em>无法触发</em> —— 它的 funding 腿复活、flip 腿守、但
              它的 TD9-BUY 簇反转成一根 SELL 读、所以它又断在另一条腿上；宏观
              re-grow 腿仍 UN-FIRED（周末冻在 10Y 4.45%、HY OAS 2.78%）、
              reclaim-long 筛守；SM feed 冻 ~46.5h 所以挤压周期框架 ON HOLD、
              perp-tape 代理是唯一仓位读。<em>单一结构读是一根延伸成真上涨腿
              的反弹、在改善的结构上 —— 200W 重夺加强到三根收、γ 翻三倍、盘口
              转建设性（空头压进现货领头涨势）、BTC 领跨资产盘仅次于 COPPER
              —— 但它是在每一根快/中周期的顶背离与一根新鲜 ⚡ 8h TD9 SELL 里
              这么做的、每一根 MA 都在头顶、smart-money 侧不可读。</em>今天的
              条件围绕加强的地板重夺、仍站着的 scout（现在断在 TD 腿上）、一根
              两闸都 un-fired 的宏观尾、和一根 on hold 的挤压框架重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>200W 周收重夺（多）</td><td className="bull">06-15 W-MON 收 &gt; $62,019 —— 三根最终日线收在上方 + 未收盘 bar +3.82% 在上方</td><td>确认地板重夺、06-08 后谱系的一周回踩并重夺；在确认转向上重开 scout-long 论 —— 现在以宽得多的边际是更高概率路径</td></tr>
                <tr><td>200W 周收破（空）</td><td className="bear">06-15 W-MON 收 &lt; $62,019</td><td>06-08 后谱系首次持续周收破 200W（上一根全历史破自己 200W 的收是 2023-10-09）—— 三根最终日线收在上方加 +3.82% 缓冲后现在是低概率路径；若印则升级周期-regime 读</td></tr>
                <tr><td>14JUN 到期结算（今日 08:00Z、约 8h 后）</td><td>+17.10M 正前端块清掉；除 14JUN 后 aggregate ≈ +46.3M（结算后一本更小的正本子）</td><td>把结算当中间 tell —— 清掉一根正块 trim 净多 γ 缓冲；本子守牢牢净正、不是 regime 变化</td></tr>
                <tr><td>均值回归多 scout —— TD9 腿（反转）</td><td className="bear">TD9-BUY 簇 —— 死了 / 翻空（3d Sell 1 水上死叉、8h ⚡ TD9 SELL、顶背离在 15m/30m/1h/4h）</td><td>TD 簇反转成 SELL 读时 scout 无法触发、即便 funding 腿复活、flip 腿守；站下 —— 只在一根确认 TD9-BUY 簇重新成型 AND 一根 live funding 空付 ≥4h AND 06-15 周重夺上重新武装、不要从那两条 live 的腿合成</td></tr>
                <tr><td>0-γ flip（守低、现货远在上方）</td><td className="bull">flip $63,359（+$77）；现货 +1.73% / idx +1.95% —— 都在上方、缺口拉宽</td><td>现货随 γ 翻三倍从 flip 上方拉开；一根阻尼的、支撑性的 dealer 位置、本身不是触发</td></tr>
                <tr><td>宏观尾 re-grow（两腿都 UN-FIRED、冻）</td><td className="bull">10Y &lt; 4.53%（在 4.45% UN-FIRED、周末冻）；HY OAS 在 2.78%（UN-FIRED、不在上方）</td><td>周末冻在两闸下方/上；无尾可长、无张力可管 —— 宏观与 BTC 转对齐；周一第一根新鲜 FRED 日度打印时再读、只在两腿对一根 BTC 内部破位干净重触发上重新武装</td></tr>
                <tr><td>挤压周期 hostile-2（SM feed 冻 ~46.5h）</td><td className="stale">ON HOLD —— 无 SM Δnet 步可算；perp-tape 代理指向空头压进反弹</td><td>feed 冻着框架无法用自己的数据评估；一解冻就恢复、读第一根新鲜 Δnet ≤ −3k（重堆）或 ≥ +3k（回补）单分钟步；不要把冻住的净对一个未来解冻值作单步求差</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是
              <span className="dn-signal">
                06-15 周收对 200W $62,019（现在硬倾向重夺、三根最终日线收在
                上方、未收盘 bar +3.82% 在上方）：一根周收回到 200W 上方确认
                地板重夺、并在一根 TD9-BUY 簇重新成型后重开 scout-long 论；一根
                周收在下方仍会确认 06-08 后谱系首次持续的周-200W 破（上一根
                全历史破自己 200W 的收是 2023-10-09）、现在是低概率路径
              </span>
              。在那之前、本篇按写好的跑：交易台 flat、200W 盯位是主框架、
              它的重夺加强到三根最终日线收在上方、均值回归多 scout 仍无法
              触发（funding 与 flip 腿守的同时 TD 簇翻成 SELL —— 不追）、宏观
              尾 re-grow 仍 un-fired（周末冻）、宏观面与 BTC 转对齐、挤压周期
              hostile-2 框架在 SM feed 冻 ~46.5h 下 ON HOLD。dealer 本子翻三倍
              到 +63.4M 净多 γ、现货拉到 flip 上方 +1.73%；funding 翻成付空；
              OI 扩张到 post-06-08 序列里最大的一根 build、空头压进现货领头
              涨势；BTC 7d 领跨资产盘仅次于 COPPER、在一个仍 NORMAL 的宽
              regime 里。下一个 24h 的对读是<em>耐心而 flat —— 让 06-15 周收
              确认加强的地板重夺、让一根 TD9-BUY 簇重新成型、scout 在那之前
              只是站着；结构硬了、反弹延伸了、但它在延伸进顶背离疲态、仓位
              本子不可读、而一根延伸但疲态的上涨腿不是交易</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2 · post codex hostile audit —— PASS-WITH-NOTES
            </span>
            <b>状态：</b>这是建在 2026-06-14 00:06Z 原子快照上的 <b>v2</b>
            cut。STAGE B codex 敌对式跨模型审计<b>已跑</b> —— 判决
            <b>PASS-WITH-NOTES</b>、无 CRITICAL、2 MAJOR —— 外加一轮
            ask-deepseek 算术二审（1 CRITICAL 数值标）。每一条 finding 在
            promotion 前都已应用并对完整 EN 文件 grep 核验到零陈旧命中
            （按 06-08 / 06-09 根因纪律 —— 在每一处修不变式、不只在引用行）。
            判决与 findings：<code>audits/2026-06-14-desk-note.md</code>。
            <b>Grep-closure（post codex hostile audit）：</b>{' '}
            <b>DN-001（MAJOR）RESOLVED</b> —— 主张
            &ldquo;OI 扩张是 post-06-08 谱系的首根 build&rdquo; 为<b>假</b>
            （post-06-08 序列已有 OI build：06-10 +739 BTC、06-11 +212 BTC）。
            搜索的 pattern：<code>first build</code>、
            <code>first time of the</code>、<code>first expansion</code>、
            <code>build of the lineage</code>、<code>首根 build</code>、
            <code>首次扩张</code>。命中前 6 根带 OI（manifest tile、lead、
            §I roman 头、§I funding 段、§VI 收、审计痕迹 pin）、命中后
            <b>0</b>（重构为 &ldquo;post-06-08 序列里最大的一根 build&rdquo;）。
            +2,365 BTC / +2.42% 算术不变（codex 确认）。{' '}
            <b>DN-002（MAJOR）RESOLVED</b> —— 主张
            &ldquo;funding 是谱系首根 live ≥4h 空付腿&rdquo; 为<b>假</b>
            （06-11 已跑过一根 live ≥4h 空付腿、850 行负 streak、快照仍负）。
            搜索的 pattern：<code>short-pay leg of the lineage</code>、
            <code>first live</code>、<code>谱系首根</code>、
            <code>首根 ... 空付</code>。命中前 1（scout leg-2 thesis）、命中后
            <b>0</b>（重构为 &ldquo;自 06-13 dead read 以来首根 live ≥4h
            空付腿&rdquo;；meta tile 与 §I prose 已用正确的 REVIVED / 从 06-13
            反转 措辞）。streak 算术（456 行 / ~7h36m、快照 −5.03% ann）不变
            （codex 确认）。{' '}
            <b>ask-deepseek CRITICAL（DXY Δ）RESOLVED</b> —— 对载入的宏观
            dashboard 裁定：dashboard 自己的 1d Δ 字段<em>是</em> −0.11
            （忠于源）、但把 &ldquo;99.75（−0.11）&rdquo; 紧挨
            &ldquo;对 06-13 的 100.08&rdquo; 摆、会暗示 −0.11 是 note-to-note
            移动、而 99.75 − 100.08 = −0.33。搜索的 pattern：<code>−0.11</code>、
            <code>100.08</code>、<code>99.75</code>。命中前 4 处混淆点
            （manifest、§IV prose、宏观表、审计痕迹 pin）、命中后 <b>0</b> ——
            每处现在都把 −0.11 标为 dashboard 当日 1d Δ、并明确写出 −0.33
            note-to-note。总判决：promoted v1 → v2 <b>post codex hostile
            audit</b>。Source pins（事实数据、对服务器 parquet / JSON 源核过）：
            funding × 1095（快照 −5.03% ann 自原始 −0.004589、n2n 均值 +0.29%
            ann、区间 −5.71% / +6.73%、封顶 1 / 1441 在 +6.73% 最大值、
            2 / 1441 在 −5.71% 最小值、neg-minute 占比 41.64% = 600 / 1441、
            收在快照前的尾随负 streak 456 采样行 / ~7h36m、快照上 funding 为负
            —— 一根 ≥4h 空付腿、scout funding leg-2 REVIVED / LIVE）；GEX 双
            参考符号（flip $63,359、现货 +1.73% = 64,452.78 / 63,359 − 1 / idx
            +1.95% = 64,593 / 63,359 − 1 —— 都在上方、缺口对 06-13 拉宽；
            aggregate +63.4M 从 +20.7M 长；$60k −21.07M 减轻；显示 expiry 行
            合计 ≈ +58.18M 非可加对 dashboard +63.4M、dashboard 权威；14JUN
            0.3DTE +17.10M 在 08:00Z 结算、除 14JUN 后 ≈ +46.3M、清掉一根正
            块压低 aggregate）；200W 全历史 W-MON SMA $62,019（200 根收盘 bar
            止于 06-08）对 live 现货 +3.92% 在上方、未收盘 06-15 bar $64,388
            +3.82% 在上方、8 / 154 = 5.19% 频率、
            <code>weekly_200sma.json</code> 缺失（200W 直接从 parquet 算、JSON
            百分位 / last-event 不可用、未捏造）；<b>SM FEED 冻住</b> ——
            Hyperliquid SM 块自 2026-06-12 01:36Z 起未再前进（陈旧约 46.5h）、
            long 13,532.412 / short 50,825.664 / net −37,293.252 是冻住的最后
            写入值（与 06-13 备忘逐字相同、冻结早于它）、所以本次不算任何
            SM Δ / cut 分数 / 挤压周期步（未捏造）；日线收谱系（06-08 $63,058、
            06-09 $61,695、06-10 $61,484 最终、06-11 $63,598 最终、06-12
            $63,547 最终、06-13 $64,418 最终、06-14 未收盘 $64,388 —— 三根
            最终收在地板上方）；OI n2n +2,365 BTC（+2.42%、快照 100,155、
            post-06-08 序列里最大的一根 build —— 06-10 +739 / 06-11 +212 的
            build 都更小、所以不是谱系首根 build）；30D RV 41.13%（30 returns /
            31 closes；41.81% 另一口径在 29 returns；窗 05-15 → 06-14）；跨资产
            |r| 0.407 NORMAL、BTC +6.01% 领全盘仅次于 COPPER +7.07%（+3.70pt
            对 NQ +2.31%、06-13 是 +1.49pt）；宏观 Tier-1 周末冻在周五 06-12 收
            （10Y 4.45% —— re-grow leg-A UN-FIRED、reclaim-long 筛 10Y &lt;
            4.55% 守；HY OAS 2.78% 在闸上、leg-B UN-FIRED；TIPS 2.16% regime-z
            EXTREME；DXY 99.75 已落破 100（dashboard 当日 1d Δ −0.11；对 06-13
            的 100.08 为 −0.33 note-to-note）；MOVE 69.4；Fed 净流动性 $5.897T）；
            n2n 窗内无 cb_cvd reset；完整 MA 矩阵对 live 现货 $64,452.78、
            parquet 2026-06-14 00:05Z close $64,387.60（D-SMA100 $72,611 周期锚
            −11.24%、每一根 MA 都在头顶、最近 D-EMA20 −3.28%、W-SMA150/200 在
            129 根子集周 bar 下不可计算、W-EMA150/200 种子披露）；MTF 交叉标对
            存档扫描核过（15m / 30m / 1h 云上、1d 新鲜水下金叉 1b、顶背离在
            15m / 30m / 1h / 4h、⚡ 8h TD9 SELL、3d 滚成水上死叉）；
            claims-vs-loaded-data（NTT / max-pain / strike-IV / BTC-NQ
            framework only；JGB 月度不依赖；IV 946 合约链中位数、不是可交易
            价差）。存档：
            <code>/opt/desk-note/snapshots/2026-06-14-0006/</code>
            （btc_gex.html、cross_asset_correlation_summary.md、
            macro_dashboard.html、mtf_div_latest.html）。
            <b>Build note（INFO）：</b>本服务器跑 Node 18.19.1；Next 16.2.6
            在 <code>node_modules/next/dist/bin/next:24-28</code> 处对 Node
            &lt; 20.9.0 硬退出、所以完整 <code>next build</code> 被环境阻塞
            （谱系延续）；<code>npx --no-install tsc --noEmit</code> 是 build
            proxy。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体
            情况个性化。数字反映单一原子快照（2026-06-14 00:06Z）、
            provenance 在上方数据来源条带中按节披露；宏观 Tier-1 面板渲染
            2026-06-13 22:16Z（比快照早约 1h50m）且周末冻结、Hyperliquid
            SM feed 冻 ~46.5h —— 这些输入明确陈旧并已标注。这是 <b>v2</b>
            后审计 cut —— STAGE B codex 敌对式审计已跑（PASS-WITH-NOTES、
            无 CRITICAL）、其两根 MAJOR 谱系-新颖性 findings 与 ask-deepseek
            DXY-Δ 标已应用并 grep 核验；判决记于上方审计痕迹与
            <code>audits/2026-06-14-desk-note.md</code>。水位、规模与条件是
            交易台流程的示例、不是长期推荐。过去的相关性、γ 与仓位模式不绑定
            未来盘面。衍生品有全损风险、加杠杆下损失可超过保证金。
            <em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                一根在改善的结构上的真上涨腿 —— 200W 重夺加强到三根最终收在
                上方、dealer 本子三倍净多 γ、现货拉到 flip 上方 +1.73%、
                funding 翻成付空而 OI 扩张、BTC 领全盘仅次于 COPPER。但它在
                每一根快周期的顶背离与一根新鲜 ⚡ 8h TD9 SELL 里延伸、每一根
                MA 都在头顶、SM feed 冻 ~46.5h 所以仓位本子不可读。Flat 而
                耐心 —— 06-15 周收是那道二元、硬倾向重夺。
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
            v2 · 2026-06-14 00:06Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
