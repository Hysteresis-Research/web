import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享的链接预览只显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-06-09 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-06-09',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-06-09' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260609() {
  await requireViewer('/zh/desk/2026-06-09');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-06-09 · v2</span>
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
              <span className="dn-big">$63,042</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.31%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-06-09 00:05Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-06-09 00:05Z（snapshot pin row · BJ 08:05 06-09 按 live_db <code>t</code> BJ-local 约定）</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · pin row = <code>t == &ldquo;06-09 08:05&rdquo;</code>{' '}
                    （BJ-local、对应 UTC 00:05Z、按 runbook §2 LIVE-TAPE landmine）·
                    daily-update.timer 00:00Z 与 reports-refresh.timer ~:01
                    都刚跑过、服务器制品约 4 分钟新鲜 · 自 06-07 备忘起两日
                    缝（06-08 备忘缺写）、标&ldquo;对 06-07&rdquo;的差跨 ~48h ·
                    7JUN26 +3.87M 前段块在 08:00Z 06-07 干净结清、8JUN26
                    −2.29M 前段块在 08:00Z 06-08 结清（两次都落在 inter-note
                    窗内）；今天的 9JUN26 +2.26M 块下一根结算在 08:00Z（约
                    8h 之后）—— <em>是 8JUN 那根负向块之后的下一根正向前
                    段块、08:00Z 结算待定（本快照锚上尚未结算）</em>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-09 00:01Z 扫描（BJ 08:01、已归档到 snapshots/2026-06-09-0008/）</td>
                  <td className="dn-flag">
                    滚动 latest 文件 · 读前先按 runbook §1 归档到
                    snapshots/2026-06-09-0008/ · 较快照锚滞后 4 分钟 ·
                    含未收 K · 多 TF ⚡ TD9 BUY 收窄到<em>一个</em>并发框
                    （仅 3d、06-07 是 12h / 1d / 3d 三框并发 —— 12h 与 1d
                    已经走过 TD9、在反弹形里推进到 Sell 5 / Sell 1）·
                    1M 仍 TD8 → 9? 待一根收 · 表头警报：12h water-down
                    黄金叉刚印（1 bar）、3d ⚡ TD9 BUY 在 $63,043 ——
                    引擎框已经把 TD9 超卖计数签名重塑过去、周期框正在追
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-09 00:01Z 快照（已归档）</td>
                  <td className="dn-flag">
                    归档到 snapshots/2026-06-09-0008/ · 较快照锚滞后 4
                    分钟 · Deribit idx $63,264 对 live $63,042（$222 在
                    上方 —— 落在正常 idx-vs-live 追踪带内）· 946 合约
                    （06-07 是 1,008 —— 净 −62、因为 7JUN 与 8JUN 链都在
                    各自的 08:00Z 结清、新挂上的 11JUN / 12JUN 近期链比
                    清掉的两块都小）· 9JUN26 0.3 DTE +2.26M 正向是下一根
                    结算（08:00Z 06-09、约 8h 后）；这是<em>对 06-07 起头
                    的正向前段块序列的<u>继续</u>但中间被 8JUN −2.29M
                    一根负向插过</em> —— 不能说&ldquo;连续两根正向结算&rdquo;、
                    要看 08:00Z 结算后才知道印出来是什么 · 对照 7JUN
                    +3.87M / 8JUN −2.29M（这两根框起 inter-note 窗）以及
                    6JUN −8.40M / 5JUN −9.61M（这两根都带放大器）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-09 00:01Z（已归档）
                  </td>
                  <td className="dn-flag">滞后约 4 分钟 · 7d 1h bar · 22 资产 · 167 rows · regime 仍标 IDIOSYNCRATIC（mean |r| 0.232、对 06-07 的 0.233 基本不动 —— 朝 0.25 NORMAL 收的方向<em>停在门槛上</em>）· BTC 顶配仍 SILVER +0.300（06-07 是 +0.261、firm +0.039）· BTC↔NQ <em>再</em>firm 到 +0.227（06-07 是 +0.188 —— 再 firm +0.039、连续两篇 co-firm 因为 BTC 与 NQ 都在滚动 7d 窗内部分回收）</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-08 22:17Z 渲染（已归档）</td>
                  <td className="dn-flag">
                    渲染滞后约 1h 48m · Monday-evening UTC 渲染（按
                    DN-010 audit 校正、原 v1 草稿误写&ldquo;Sunday-evening&rdquo;）·
                    周五 06-05 FRED 日印自 06-07 06:06 渲染基线之后终于
                    滚入 · US 10Y nominal 4.47% → <em>4.55%（+8.0bp Δ ——
                    rates re-grow 门 4.53% 在周五收盘<em>触发</em>）</em>、
                    10Y TIPS 2.19%（+8.0bp、EXTREME RISK-OFF episodic
                    再深）、5Y5Y BE 2.23%（−1.0bp）、HY OAS 2.76%
                    （+2.0bp、门 2.78% 现在<em>距触 2bp</em>对 06-07 的
                    4bp）、NFCI −0.494（陈旧 10d、06-07 是 8d）、MOVE 77.0
                    （+1.78 —— 在 06-06 谱系跳之后再 firm）、DXY 100.15
                    （+0.08）、Fed 净流动性 $5.834T（无新周印 · 源面板
                    Δ −0.038T 按 DN-008 audit 校正、不是 0.000T）、US-JP
                    利差 2.03%（+8.0bp —— 美侧动了、JGB 陈旧 68d 没回
                    应）、USD/JPY 160.30（+0.31）、USD/CNY 6.7650（−0.01）·
                    06-07 那道&ldquo;周末 FRED 冻结&rdquo;caveat 部分解封、
                    周五的印落地把 rates 与 credit 门同时朝触发推
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet anchor row 2026-06-09 00:05Z（anchor-limited · 物理最末行是 00:06Z、按 DN-005 audit 用&ldquo;anchor row&rdquo;而不是&ldquo;last bar&rdquo; · btcusdt_1m_2024..2026 子集按桌面政策 + 全史参考）</td>
                  <td className="dn-flag">
                    parquet anchor row 00:05Z 正好对齐快照锚（没有
                    anchor-vs-parquet 漂移）· anchor 行收 $63,022.00、live
                    现货 $63,042.00（$20.00 缝、谱系最紧）；物理最末行
                    00:06Z 收 $63,069.30 ——「anchor row」与「last bar」
                    的区分按 DN-005 audit 在本篇明文标出。MA 源样本是
                    2024-2026 子集（按 06-02 audit DN-005 桌面政策延续；
                    本子集 129 根周 bar、+1 较 06-07 的 128 —— 仍 short
                    两个窗）；W-SMA150 / W-SMA200 不可算、W-EMA150 /
                    W-EMA200 能印但按<em>seeded truncated</em> 报。
                    全史（2019-09-09 → 2026-06-09、354 根周 bar、包含未
                    收的 2026-06-15 周 bar @ 1m 收 $63,022.00）给 200W
                    参考另算：全史 W-SMA200 = $62,019（200 根已收周 bar
                    截至 06-08；06-07 是 $62,008 —— 抬 $11、滚动窗丢掉
                    旧低头一根、补上 06-08 收 $63,058）。live 现货
                    $63,042 坐全史 200W <em>上方 +1.65%</em>（06-07 是
                    下方 −1.73% —— +3.38pt 翻面）。偏移按 06-03 audit
                    DN-006 继承的 live 现货 $63,042.00 重算
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W watch（weekly_200sma.json）</td>
                  <td className="dn-v-cell">未写出（审计时文件不在服务器、连续第四篇 lineage 延续）</td>
                  <td className="dn-flag">
                    200W watch JSON 不可用（连续第四篇）；按 runbook §2
                    do-not-fabricate、退回到全史 parquet 计算。全史
                    W-SMA200 = $62,019（200 根已收周 bar 截至 06-08）·
                    <em>live 现货 $63,042 坐 +1.65% / +$1,023 上方；06-08
                    周收 $63,058 印在 level <em>上方</em> +$1,039 / +1.68%
                    —— 自 06-01 破位以来首次周收高于全史 200W、是 06-07
                    那张 watch 在多头一侧的结构性落地</em>。按 runbook
                    do-not-fabricate 的频率脉络：本桌面全史序列下、周收
                    低于自身 200W 历来发生在 <em>8 / 154 个有效 200W
                    观测里（~5.19%）</em>、集中在深周期投降；本周这根
                    周 bar 没有这样的收口、缺 JSON 不主张
                    percentile / break-event、只露出 level + 06-08 周
                    收对 200W 的缝
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED 月度 · IRLTLT01JPM156N</td>
                  <td className="dn-flag">陈旧 68d · 月度 · 不作实时（陈旧计数较 06-07 +2d）</td>
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
              <span className="dn-v bear">−1.81%（snap ≈ 今日 24h 谷 −1.82%；比 06-07 那根 snap-minute 谷 −3.16% 浅）</span>
              <span className="dn-src">live · 24h 均值 ann <em>+1.46%</em>（06-07 是 −0.13% · +1.59pt FLIP 回正 —— 后插针窗第一根正向 24h 均值）· 封顶占用 0 / 1441 采样行（连续第五篇空封顶 · 谱系封顶 regime 结构性退役）· 负向 funding 分钟 405 / 1,441 = <em>28.11%</em>（06-07 是 72.80% —— 退 −44.69pt、谱系单篇最大份额变动）· 24h funding 谷 −1.821% ann 在 BJ 07:34 06-09 / UTC 23:34 06-08（早晨 Asia / 深夜 UTC 谷、不是 snap-minute 像 06-07）· snap 分钟 −1.806%、对 24h 谷 0.015pt 浅（按 DN-007 audit 校正、不是 $0.015）· 24h 最大 +4.244% ann @ BJ 14:12 06-08 / UTC 06:12 06-08 —— 反弹段里的 mid-Asia 正向峰</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bull">−3.16% → −1.81%（+1.35pt 浅、均值 +1.59pt 回正）</span>
              <span className="dn-src">区间 −1.82% / +4.24% · 最长连续负向 streak 145 min / 2.42h 从 BJ 02:13 06-09 / UTC 18:13 06-08 → BJ 04:37 06-09 / UTC 20:37 06-08 —— 对 06-07 的 7.72h、今天短 −5.30h（regime 显著缓）、在单根连续上<em>不过</em>≥4h 累计 short-pay 门 · 最长连续正向 streak 731 min / 12.18h 从 BJ 08:05 06-08 / UTC 00:05 06-08 → BJ 20:15 06-08 / UTC 12:15 06-08 —— 正向带现在主导 24h 盘面 · 杠杆门在 funding 一侧<em>关</em>、mean-revert scout 的 leg-2 升级条件不再过</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bull">−0.36%（−355 BTC）</span>
              <span className="dn-src">live · 后插针窗首次 24h OI 缩（06-05 +0.6%、06-06 +2.31%、06-07 +0.53% 都扩）—— 98,871 → 98,516（08:04 BJ 基线按 DN-003 audit 标出 · t == &ldquo;06-08 08:04&rdquo; / UTC 00:04 06-08、比 08:05 锚早 1 分钟）· 24h 峰 99,435 @ BJ 12:34 06-08 / UTC 04:34 06-08（mid-day Asia of 06-08）、24h 谷 97,539 @ BJ 21:21 06-08 / UTC 13:21 06-08（early-EU bleed of 06-08）· 对 06-07 pin OI 101,830、本子缩了 ~−3,314 BTC / −3.25% 跨 ~48h —— 建在插针里的杠杆本子在这一侧的回收中实质性放出 · SM long_btc Δ +648、short_btc Δ −2,320 —— 24h 本子形再次<em>翻面</em>到 short-cover + long-add、和 06-07 的 long-trim + short-add 完全反向</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bear">64.71 / 35.29</span>
              <span className="dn-src">live_db <code>mkt_long_pct</code> · 自 06-07 的 66.43 退 −1.72pt（自 06-05 起首根净退、retail 拥挤在反弹里漏出来）· 24h 区间 63.18 / 67.51；峰 67.51 @ BJ 08:05 06-08 / UTC 00:05 06-08（24h-ago 锚 pin row —— retail 守到反弹引线、然后整天泄）；谷 63.18 @ BJ 01:06 06-09 / UTC 17:06 06-08（早晨 BJ 06-09 / 下午 UTC 06-08 谷、按 DN-006 audit 校正、不是 BJ 17:51 06-08）· 仍在 05-31 前一段下行谱系底 60.35% 上方 4pt、退拥挤是二阶 cool、但方向转了</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−38.7k（净 SHORT；24h 本子<em>再次</em>翻面到 long-add + short-trim、和 06-07 完全反向）</span>
              <span className="dn-src">live · long 14.44k − short 53.10k · short_btc 24h 峰 55,422 @ BJ 08:05 06-08 / UTC 00:05 06-08（实际就是 24h-ago 锚 pin row —— 空侧整 24h 都在 trim）；short_btc 24h 谷 52,232 @ BJ 19:41 06-08 / UTC 11:41 06-08（后插针窗内最低空读数）；long_btc 24h 峰 15,517 @ BJ 14:46 06-08 / UTC 06:46 06-08；long_btc 24h 谷 13,344 @ BJ 09:51 06-08 / UTC 01:51 06-08（early-Asia of 06-08）；SM net 谷（最空）−41,676 @ BJ 12:31 06-08 / UTC 04:31 06-08；SM net 峰（最不空）−37,475 @ BJ 19:31 06-08 / UTC 11:31 06-08 —— 本子在 mid-day Asia 06-08 推到最空、然后稳定泄到 evening 06-08 最不空、最后回稳到 −38.7k 进 snap</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 06-07 备忘</span>
              <span className="dn-v bull">−42.6k → −38.7k（+3,898 不那么空；long +829、short −3,070；缝 ~48h）</span>
              <span className="dn-src">|Δ|/prior_net = 9.16%（3,898/42,556）· 跨 ~48h inter-note 缝、本子朝<em>不那么空</em>方向走、用 short-trim + long-add —— 与 06-07 的 long-trim + short-add 完全反向、和 06-08 反弹段一致。谱系签名再次<em>翻面</em>：06-01/02/03/04 短堆叠、05-31/06-05 双侧收缩、06-06 long 探底、06-07 short 堆 reversion、今天 short-cover + long-add 进回收盘。本子在跟价、不在领价 · 06-07 那根 snap short_btc 峰 56,172（在 06-07 锚）也是后插针 lineage 短头高；自那以来 short_btc 跨 48h 泄掉 −3,070 BTC</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v bear">47.6% / 39.30%</span>
              <span className="dn-src">GEX IV 中位数 · 946 合约（06-07 是 1,008 · 净 −62、7JUN 与 8JUN 链分别在 08:00Z 06-07 / 06-08 清出、新 11JUN / 12JUN 近期链挂上但比清的两块都小）· IV 实质性 cool −5.9pt（06-07 是 53.5% —— 链在两根前段块清完之后、平静回收盘里 vol mark 跟着降）· 30D RV firm 37.03% → 39.30%（滚动 30D 窗现在<em>同时</em>盖住 06-07 +3.74% 收对收以及 06-06 插针）· IV/RV 缝<em>收窄</em>到 ~+8.30pt（06-07 是 +16.47pt —— 一根 −8.17pt 的塌方、IV cool + RV firm 同向 · 链不再像 06-07 周末标那样把前看实现波动定得高）</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bear">−2.03%（在下方；按 live 现货）</span>
              <span className="dn-src">flip $64,351（06-07 是 $63,538 · 跟着反弹<em>向上走</em> +$813 —— dealer 本子把 inflection 朝同一方向定价、走的幅度和现货回收差不多）· 对 live 现货 $63,042（−2.03%；63,042.00 / 64,351 − 1 = −2.034%）· 对 GEX 文件 Deribit idx $63,264（−1.69%；63,264 / 64,351 − 1 = −1.690%、对上文件自己的 dist-to-flip tile −1.7%）—— 两参考都负、live 现货侧从 06-07 的 −4.10% 收窄到 −2.03%（+2.07pt 收、因为 flip 走 +$813 + 现货走 +$2,109）。aggregate GEX 边际改善到 −36.7M（06-07 是 −38.7M、+$2.0M 修复 —— 较 06-07 谱系最大 +$14.8M 小、本子仍然结实净空 γ）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                06-07 那张 watch 在多头一侧落地：未收周 bar（W-MON 锚到
                06-08）收 $63,058 —— 那是<em>+$1,039 / +1.68% 高于</em>
                全史 W-SMA200 $62,019、是自 06-01 破位以来首根周收
                <em>高于</em>周期地板、也是 06-07 备忘里那张 open watch
                在多头一侧的结构性落地
              </span>。aggregate GEX 从{' '}
              <span className="dn-tag bear">−38.7M</span> 走到{' '}
              <span className="dn-tag bear">−36.7M</span>（+$2.0M
              修复 —— 较 06-07 谱系最大 +$14.8M 小、本子仍结实净空
              γ）。但 0-γ flip <em>跟着反弹向上走 +$813</em>：{' '}
              <span className="dn-tag">$63,538 → $64,351</span>、现货{' '}
              <span className="dn-tag bear">$63,042 在 flip 下方 −2.03%</span>
              （live 现货口径、自 06-07 的 −4.10% 收窄 +2.07pt）；GEX
              文件自身 Deribit-idx 参考是{' '}
              <span className="dn-tag bear">−1.69%</span>（对 idx $63,264、
              对上文件 tile −1.7%）。06-07 的预测是&ldquo;未收周 bar
              （W-MON 锚到 06-08）需要回到 $62,008 或之上收盘才能避免
              周度口径上首次跌穿全史 200W&rdquo;—— 那张测试以 +$1,039
              过了。dealer 一侧 7JUN +3.87M 在 08:00Z 06-07 干净结清、
              8JUN −2.29M 在 08:00Z 06-08 结清（中间这根插过来）、
              今天 9JUN +2.26M 是 8JUN 那根负向之后的下一根正向前段块、
              08:00Z 06-09 结算<em>仍在 8h 之前、本快照锚上尚未结算</em>；
              墙图里{' '}
              <span className="dn-tag bear">$60k 崩跌 put 再深到 −34.00M</span>
              （06-07 是 −26.19M —— −$7.81M 再装是后插针窗内最大单 strike
              负 γ 再加、dealer 本子在现货最近坐过又离开的 strike 上画
              出一个新的去稳器）；宏观一侧周五 06-05 FRED 日印终于在
              06-08 22:17Z 渲染里落地、{' '}
              <span className="dn-tag bear">US 10Y nominal 4.55%
              （+8.0bp Δ —— rates re-grow 门 4.53% 在带过去的周五收盘
              <em>触发</em>、06-07 基线是 4.47%）</span>、HY OAS 2.76%
              （+2.0bp、门 2.78% 现在<em>距触 2bp</em>对 06-07 的
              4bp）、reclaim-long rates filter（10Y &lt; 4.55%）现在<em>
              正好在边界</em>。日收口径{' '}
              <span className="dn-tag">06-07 $63,298 / 06-08 $63,058</span>
              （06-07 日收来在 06-07 备忘 parquet anchor 行 $60,846 之上
              +$2,452 —— 那天在 00:05Z 锚之后强势反弹）、06-09 未收日收
              在 parquet anchor row（00:05Z 收{' '}
              <span className="dn-tag">$63,022</span>）是{' '}
              <span className="dn-tag">06-08 日收下 $36</span>。下行段
              在周期地板口径上结构性修复、但 dealer flip 跟着反弹走、
              宏观一侧在本谱系上首次<em>反向</em>对 reclaim-long 站位。
            </p>

            <p>
              BTC 印 <span className="dn-tag">$63,042</span> live、{' '}
              <span className="dn-tag bear">−0.31%</span> 24h（24h 头
              量按 08:04 BJ 基线、t == &ldquo;06-08 08:04&rdquo; / UTC
              00:04 06-08 ——按 DN-003 audit 比 08:05 锚早 1 分钟；funding
              分母用 08:05 锚精确行）—— 是后插针窗最小 24h 现货变动、
              也是 06-07 反弹段（$60,933 → $63,298 收对收 +3.88%）让
              位给 06-08 整合盘面之后的第二个连续 sub-1% 24h。24h 区间
              是 <span className="dn-tag">$64,190 / $62,430</span>
              （高 @ BJ 07:15 06-09 / UTC 23:15 06-08、低 @ BJ 21:42
              06-08 / UTC 13:42 06-08 —— 高印在 BJ 06-09 黎明前、
              06-08 累计反弹延展进今天锚引线、然后泄 −$1,148 / −1.79%
              到 00:05Z 印）。24h 低 <span className="dn-tag">$62,430</span>{' '}
              是 <span className="dn-em">+$3,277 高于</span> 06-06 后插针
              地板 $59,154、也是 <span className="dn-em">+$411 高于</span>
              全史 W-SMA200 $62,019 —— 周期地板在本 24h 盘面的每一分钟
              都守住、06-07 watch 的破位距离根本没有接触。现货<em>重夺</em>
              全史 200W 在现货印口径上：{' '}
              <span className="dn-signal">
                live 现货 $63,042 坐全史 200W $62,019 上方 +1.65%；06-08
                周收 $63,058 上方 +$1,039；06-07 日收 $63,298 上方
                +$1,279；06-09 未收 $63,022 上方 +$1,003 —— 四个 watch
                后读数都在周期地板上方、本下行段谱系首次
              </span>。周期锚仍是{' '}
              <span className="dn-tag bear">D-SMA100 $72,937（−13.57%）</span>
              头顶 —— 约 $9.9k 远（06-07 是 ~$12.0k、近 $2.1k 因为现货回
              +$2,109、滚动 100D 锚边际下移）。现在头顶最近的 MA 是{' '}
              <span className="dn-tag bear">D-EMA20 $68,725（−8.27%）</span>、
              约 $5.7k 头顶 —— 20D EMA 比 SMA 序列更快吃到底部印。
              W-SMA20 簇较 06-07 移：W-SMA20 $72,076 / D-SMA100 $72,937 /
              D-EMA50 $72,483 现在打成更宽 $861 带、约 $9.4k–$9.9k 头顶。
              <span className="dn-em">
                周期地板读数在现货平面 AND 周收平面都翻多；dealer 一侧
                边际改善（γ +$2.0M）但 flip 跟着反弹走 +$813；仓位本子
                再次反过来 —— 这次是跨 48h 的 short-cover + long-add（long
                +829、short −3,070）、和 06-07 完全反向；宏观一侧在 rates
                +8bp 到门边界 + HY OAS 距触 2bp 上<em>反向</em>对 reclaim-long
                站位。周期地板读数是本快照结构性奖品、但 dealer flip 与
                宏观盘面都在朝上往下一根入场拉远的方向走。
              </span>
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面 · 24h 本子翻回 short-trim + long-add（和 06-07 long-trim + short-add 完全反向）· OI 后插针窗首次缩 −0.36% · funding 24h 均值翻回 +1.46% 自 06-07 的 −0.13%、负向分钟份额塌方到 28.11%（06-07 是 72.80%）、最长连续负向 streak −5.30h 缩到 2.42h —— mean-revert scout 的 leg-2 short-pay 门不再过 · 周期延伸节奏仍 CLOSED-VINDICATED（今天没有新单分钟敌对-2）</span>
            </h2>

            <p>
              <span className="dn-signal">
                仓位本子把 06-07 的 short-add 吐回去：short_btc trim、
                long_btc add 都跨 inter-note 窗发生、和 06-07 完全反向签名
              </span>。SM net 是{' '}
              <span className="dn-tag">−38,658</span>、对 06-07 备忘的
              −42,556 —— <span className="dn-em">跨 ~48h 缝<em>少空</em>
              9.16%</span>（|−38,658 − (−42,556)| / 42,556 = 9.16%）。
              成分单侧朝 06-07 反方向走：long_btc{' '}
              <span className="dn-tag bull">13.62k → 14.44k（+0.83k）</span>
              、short_btc{' '}
              <span className="dn-tag bull">56.17k → 53.10k（−3.07k）</span>。
              空侧切的幅度大约是多侧加的 3.7×、干净的 short-trim +
              long-add 形 —— 和 06-07 的 long-trim + short-add 完全反向
              （那次是 −1.82k long、+1.31k short）。跨 24h 窗（从 t ==
              &ldquo;06-08 08:04&rdquo; BJ-local / UTC 00:04 06-08 起、08:04
              基线按 DN-003 audit 与 08:05 锚相差 1 分钟）：long_btc Δ{' '}
              <span className="dn-tag bull">+648</span>、short_btc Δ{' '}
              <span className="dn-tag bull">−2,320</span>、net Δ{' '}
              <span className="dn-tag bull">+2,968</span>（648 − (−2,320)
              = 2,968 在 24h 窗本身少空）。24h 内部本子跑 peak-then-unwind 形：
              SM net 谷（最空）{' '}
              <span className="dn-tag bear">−41,676 @ BJ 12:31 06-08 /
              UTC 04:31 06-08</span> —— 在 mid-day Asia 06-08（<em>不</em>
              是同一分钟跑到 24h 现货低 $62,430、那个低印在更晚的
              UTC 13:42 06-08）—— 然后稳定泄到{' '}
              <span className="dn-tag bull">−37,475 @ BJ 19:31 06-08 /
              UTC 11:31 06-08</span>（24h 最不空）、然后回稳到 −38.7k
              进 snap。long_btc 峰{' '}
              <span className="dn-tag bull">15,517 @ BJ 14:46 06-08 /
              UTC 06:46 06-08</span> —— 06-06 long 探底峰 17,254 之后
              最高 long 读数；short_btc 触底{' '}
              <span className="dn-tag bull">52,232 @ BJ 19:41 06-08 /
              UTC 11:41 06-08</span> —— 后插针窗最低空读数。{' '}
              <span className="dn-em">
                谱系签名<em>再次</em>翻面：06-01/02/03/04 单侧短堆叠、
                05-31/06-05 双侧缩、06-06 单侧 long 探底、06-07 单侧
                long-trim + short-add reversion、今天 short-cover + long-add
                进回收盘。本子跟着价、不领着价 —— 06-07 的短堆叠在现货
                跨 inter-note 窗回收 $2,109 的过程中被打回去、06-06 long
                探底的余量也部分重装。
              </span>
            </p>

            <p>
              <span className="dn-signal">
                周期延伸框架在本日历上没有新东西要测 —— 框架在 06-06 第六
                印失败时正式退役、本快照仍 CLOSED-VINDICATED
              </span>。24h 盘面没有印出任何单分钟 Δnet ≤ −3k；最接近的重
              堆形是 BJ 12:31 06-08 / UTC 04:31 06-08 SM net 谷 −41,676
              （10 分钟窗对 BJ 19:31 06-08 / UTC 11:31 06-08 峰 −37,475
              = +4,201 少空 —— 但跨 60 分钟、不是单分钟敌对-2 签名）。
              没有新的 BJ 13–15 节奏测试该到（calendar prior 死了）。{' '}
              <span className="dn-em">
                重堆敌对-2 签名（Δshort &gt; 0 + Δlong &lt; 0 同一分钟
                |Δnet| ≥ 3k）仍是有意义的盘面读、印的时候算、但今天的
                盘面两根都没印出来。
              </span>
            </p>

            <p>
              杠杆一侧是本篇最响的二阶读。{' '}
              <span className="dn-signal">
                funding 24h 均值<em>翻回</em>到 +1.46%、自 06-07 的
                −0.13% —— 后插针窗首根正向 24h 均值、+1.59pt 摆
              </span>：live{' '}
              <span className="dn-tag">−1.81% ann</span> 在 snap、
              24h 区间 <span className="dn-tag">−1.82% / +4.24%</span>
              、谷 <span className="dn-tag bull">−1.821% ann 在 BJ 07:34
              06-09 / UTC 23:34 06-08</span> —— 谷是今天 BJ 早晨 / UTC
              06-08 深夜、不是 snap 分钟像 06-07（snap 分钟读 −1.806%、
              对 24h 谷 0.015pt 浅 —— 按 DN-007 audit 校正、不是 $0.015）。
              24h 均值 ann{' '}
              <span className="dn-tag">+1.46%</span>（对 06-07 的 −0.13%
              —— +1.59pt 翻回正、后插针窗首根正向 24h 均值）。24h 最大
              ann <span className="dn-tag">+4.24% @ BJ 14:12 06-08 /
              UTC 06:12 06-08</span> —— 反弹段里 mid-Asia 正向峰。
              封顶占用{' '}
              <span className="dn-tag bull">0 / 1441 采样行（0.0%）</span>
              （连续第五篇空封顶；谱系封顶 regime 结构性退役）；最长
              连续负向 streak 跑{' '}
              <span className="dn-tag bull">145 min / 2.42h</span> 从
              BJ 02:13 06-09 / UTC 18:13 06-08 → BJ 04:37 06-09 / UTC
              20:37 06-08 —— 对 06-07 的 7.72h、今天短 −5.30h、<em>且
              在单根连续上不过 ≥4h 累计 short-pay 门</em>。最长连续正向
              streak 跑 <span className="dn-tag">731 min / 12.18h</span>
              从 BJ 08:05 06-08 / UTC 00:05 06-08 → BJ 20:15 06-08 /
              UTC 12:15 06-08 —— 正向带现在主导 24h 盘面。分钟 delta
              （正负 funding 读数）跑{' '}
              <span className="dn-tag">1,034 正 / 405 负</span>（在 1,441
              行窗上 —— 28.11% 负、06-07 是 72.80% —— 份额塌方 −44.69pt、
              谱系单篇最大份额变动）。OI Δ{' '}
              <span className="dn-tag bull">−355 BTC（−0.36%）</span>
              跨 24h —— 自 06-04 下行段起首次 24h OI 缩（06-05 +0.6%、
              06-06 +2.31%、06-07 +0.53% 都扩）；24h 峰{' '}
              <span className="dn-tag">99,435 @ BJ 12:34 06-08 / UTC
              04:34 06-08</span> —— 06-08 mid-day Asia 杠杆推 —— 然后
              泄到 24h 谷{' '}
              <span className="dn-tag bull">97,539 @ BJ 21:21 06-08 /
              UTC 13:21 06-08</span> —— 建进反弹的杠杆稳定泄到 snap、
              对 06-07 pin OI 101,830 本子跨 48h 缩 ~−3,314 BTC / −3.25%。
              retail{' '}
              <span className="dn-tag">mkt_long_pct 64.71%</span> 从 24h
              窗的 67.51% 退 −2.80pt vs 24h-ago、对 06-07 备忘退
              −1.72pt（66.43% → 64.71%）—— 自 06-05 起首根净 cool、
              拥挤多侧漏进反弹。仍在 05-31 前一段下行谷 60.35% 上方 4pt；
              退拥挤是二阶 cool、但方向转了。perp 在 snap 上对现货{' '}
              <span className="dn-tag bear">−$41.39 折价</span>
              （1h 均值 −$24.35、4h 均值 −$19.59；24h 均值 −$37.31、
              区间 −$208.19 / +$98.86 —— basis 在 24h 窗内短暂转<em>正</em>
              进 06-08 late-Asia 推、然后又回负；24h 最大 +$98.86 是连续
              第二篇 24h 窗内带正基差印）。1-min aggressor 偏 snap{' '}
              <span className="dn-tag bear">−16.5</span>（1h 均值 −2.97、
              区间 −31.60 / +23.30）—— snap 分钟温和卖侧但 1h 大致
              平衡。{' '}
              <span className="dn-em">
                funding 均值翻回正 + 负分钟份额塌方 −44.69pt + 最长连续
                负向 streak<em>不过</em>4h 门 + OI 后插针窗首次缩 + 48h
                SM short_btc 泄 −3,070 + retail 拥挤泄 −1.72pt vs 06-07：
                杠杆本子在反弹里实质性放气。mean-revert 长 scout 的 leg-2
                short-pay regime 不再过 4h 门 —— 这条升级腿在多头一侧
                <em>关</em>；只剩 leg 1（TD9 簇）与 leg 3（flip 重夺）
                往前走。杠杆一侧整体已经站好。
              </span>
            </p>

            <p>
              窗化流（24h 头量按 08:04 BJ 基线 t == &ldquo;06-08 08:04&rdquo;
              / UTC 00:04 06-08 ——按 DN-003 audit 比 08:05 锚早 1 分钟；
              funding 分母用 08:05 锚精确行）显示{' '}
              <em>24h <em>bid</em> 在 spot CVD 但<em>net-sold</em> 在
              futures CVD 与 taker-net、4h 与 1h 子窗也都 bid 在 spot
              CVD —— 反弹在消化建仓、不在延伸</em>。24h（08:04 BJ 基线）：
              价 <span className="dn-tag bear">−0.31%</span>、OI{' '}
              <span className="dn-tag bull">−355 BTC</span>、spot CVD{' '}
              <span className="dn-tag bull">Δ +2,601</span>（不需要 reset
              调整 —— 24h 窗内没有检测到 cb_cvd reset）、futures CVD{' '}
              <span className="dn-tag bear">Δ −806</span>、big-print{' '}
              <span className="dn-tag bull">+3 BTC / 372 prints</span>、
              taker-net <span className="dn-tag bear">−810</span> ——{' '}
              <em>spot CVD 实质性 bid 跨 24h、但 futures 一侧流仍净卖、
              big-print 与 taker-net 大致两侧；06-07 反弹段之后的整合
              盘面</em>。4h（进快照）：价{' '}
              <span className="dn-tag bear">−0.53%</span>、OI{' '}
              <span className="dn-tag bull">+405 BTC</span>、spot CVD{' '}
              <span className="dn-tag bull">Δ +374</span>、futures CVD{' '}
              <span className="dn-tag bull">Δ +8</span>、big-print{' '}
              <span className="dn-tag bull">+158 BTC / 99 prints</span>、
              taker-net <span className="dn-tag bear">−4</span> ——{' '}
              <em>4h 窗在 spot CVD 与 big-print 上买、futures 一侧平、
              较 06-07 干净合格 cover-shape 是更软形、且价码是 −0.53%
              下行、所以买是在消化下落、不是确认反弹</em>。1h：价{' '}
              <span className="dn-tag bear">−0.60%</span>、OI{' '}
              <span className="dn-tag bull">−153 BTC</span>、spot CVD{' '}
              <span className="dn-tag bull">Δ +89</span>、futures CVD{' '}
              <span className="dn-tag bear">Δ −153</span>、big-print{' '}
              <span className="dn-tag bear">−50 BTC / 13 prints</span>、
              taker-net <span className="dn-tag bear">−151</span> ——{' '}
              <em>1h 在所有 futures 一侧字段都滑、spot CVD 只是温和正、
              snap-minute bid 看起来在多小时推之后是休模式</em>。06-07
              那个干净 cover-shape 在本快照<em>软化</em>了 —— futures
              一侧流现在读平 / 混、不是净买；整合盘面没在延伸 06-07
              cover 信号、但也没在反向。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 图 · ⚡ TD9 BUY 簇收窄到<em>一个</em>并发框（仅 3d；06-07 是 12h / 1d / 3d 三框）· 12h water-down 黄金叉刚印（引擎跟反弹晚一框）· 周期框 RSI 进一步离 lineage 极端（8h 36.4、12h 30.6、1d 26.2、3d 34.1）· 周期锚远在头顶（现在 ~$9.9k vs 06-07 的 ~$12.0k）· 200W 周期地板<em>在周收与现货上都重夺</em>（live 现货 +1.65% · 06-08 周收 +1.68% · 结构性测试在多头一侧落地）</span>
            </h2>

            <p>
              <span className="dn-signal">
                MTF 图走过了多 TF 超卖计数簇 —— 只剩 3d 框还标 active
                ⚡ TD9 BUY（12h 与 1d 在反弹形里推进到 Sell 5 / Sell 1）、
                12h MACD 在 00:00Z 06-09 收口印出一根新的 water-down
                黄金叉 —— 引擎比 06-07 4h 黄金叉晚一框跟反弹
              </span>。06-09 00:01Z 扫描标 ⚡ TD9 BUY 仅在 3d、1M 仍
              TD8 → 9? 待一根收 —— 含待定的两框超卖计数簇、较 06-07 的
              三框堆叠（12h / 1d / 3d active + 1M 待定）少一框。12h 推进到{' '}
              <span className="dn-tag bear">Sell 5</span>、并印新的
              water-down 黄金叉 1 bar（post-TD9 跟进、扫描表头标）；
              1d 推进到 <span className="dn-tag bear">Sell 1</span>
              （新计数开始）。慢框 cross / cloud 仍熊：{' '}
              <span className="dn-tag bear">3d water-up 死叉在 4 bars</span>
              （较 06-07 不变）、8h{' '}
              <span className="dn-tag bear">water-down 黄金叉 5b</span>
              （较 06-07 不变 —— 同一根引擎信号、无再延伸）、4h{' '}
              <span className="dn-tag bear">water-down 黄金叉 17b</span>
              （06-07 是刚印 5b —— 多过去 12 bar、黄金叉守住）、1d{' '}
              <span className="dn-tag bear">云下 8b ↑ $73.9k</span>
              （06-07 是 6b）。RSI 在周期框上进一步离 lineage 极端
              但仍在超卖区：8h{' '}
              <span className="dn-tag bull">36.4</span>（06-07 是 16.3
              —— +20.1pt 离、周期框 RSI 单篇最大抬）、1d{' '}
              <span className="dn-tag bull">26.2</span>（06-07 是 15.5
              —— +10.7pt 离、也大）、12h{' '}
              <span className="dn-tag bull">30.6</span>（06-07 是 16.4
              —— +14.2pt 离）、4h <span className="dn-tag bull">48.7</span>
              （06-07 是 29.9 —— +18.8pt 抬、现在在中性区）、3d{' '}
              <span className="dn-tag bull">34.1</span>（06-07 是 29.6
              —— +4.5pt 离、终于过 30）、1w 34.1（06-07 是 32.7）。
              三根周期框现在 RSI &gt; 30（8h 36.4、12h 30.6、3d 34.1）、
              1d 是唯一 sub-30 的留守（26.2）—— 引擎框 RSI 满中性：1h
              48.3（06-07 是 48.7 —— 大致平）、30m 42.8（06-07 是 53.7
              —— 泄）、15m 40.2（06-07 是 56.8 —— 实质性泄）。15m
              翻回 <span className="dn-tag bear">云下 3b</span>（06-07
              是云上 4b）。{' '}
              <span className="dn-em">
                直读：⚡ TD9 BUY 簇从三并发收窄到一并发、12h 用自己的
                黄金叉跟反弹、周期框 RSI 整体离 lineage 极端、引擎框 RSI
                在 06-08 反弹段定价中退回中性或轻熊。设置丢掉多框超卖
                计数簇作为 mean-revert scout 的一腿 —— leg 1 从三并发
                降级到一并发 + 一待定、这条升级腿在引擎走过 TD9 序列
                而不是围着它聚集的过程里<em>接近失败</em>。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">63,043</td><td className="num">40.2</td><td className="bear">death (water-dn) 7b</td><td className="bear">below ↑63.3k 3b</td><td>Buy 4</td><td>BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">63,043</td><td className="num">42.8</td><td className="neut">death (water-up) 15b</td><td className="neut">in cloud 62.7k–63.2k 1b</td><td>Buy 4</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">63,052</td><td className="num">48.3</td><td className="neut">death (water-up) 7b</td><td className="bull">above ↓62.5k 28b</td><td>Buy 3</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>4h</td><td className="num">63,043</td><td className="num">48.7</td><td className="bull">golden (water-dn) 17b</td><td className="bear">below ↑66.1k 85b</td><td>Buy 2</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>8h</td><td className="num">63,043</td><td className="num bull">36.4</td><td className="bull">golden (water-dn) 5b</td><td className="bear">below ↑74.3k 72b</td><td>Buy 1</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">63,043</td><td className="num bull">30.6</td><td className="bull">golden (water-dn) 1b just printed</td><td className="bear">below ↑77.1k 35b</td><td>Sell 5</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">63,052</td><td className="num bull">26.2</td><td className="neut">—</td><td className="bear">below ↑73.9k 8b</td><td>Sell 1</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>3d</td><td className="num">63,043</td><td className="num bull">34.1</td><td className="neut">death (water-up) 4b</td><td className="bear">below ↑74.2k 2b</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">63,043</td><td className="num">34.1</td><td className="neut">—</td><td className="bear">below ↑100.3k 19b</td><td>Buy 4</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">63,052</td><td className="num">42.5</td><td className="neut">—</td><td className="bull">above ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    源：mtf_div_latest.html 2026-06-09 00:01Z 扫描
                    （滚动 latest 文件已按 runbook §1 归档到
                    snapshots/2026-06-09-0008/mtf_div_latest.html）。
                    扫描较 00:05Z 快照锚滞后 4 分钟。表头警报：
                    <em>12h water-down 黄金叉 1 bar 刚印</em>、
                    <em>3d ⚡ TD9 BUY 在 $63,043</em>、
                    <em>1M TD8 → 9? 待一根收</em>。扫描现货 $63,050、
                    24h −0.28%、H/L $64,180 / $62,377、24h qVol $11.68B
                    （较 06-07 $10.58B 温和抬；仍是平静整合盘面、远低于
                    06-06 的 $28.56B 投降印）。收都是 in-progress bar、
                    每个值在 TF 收口之前都按 provisional 处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵确认周期锚消化仍 ~$9.9k 头顶、簇 pack ~$9.4k–$9.9k
              头顶。现货 $63,042 坐{' '}
              <span className="dn-tag bear">D-SMA100 $72,937 下方 −13.57%</span>
              —— 周期锚、日梯最小距线、~$9.9k 远（06-07 是 ~$12.0k、近
              $2.1k 因为现货回 +$2,109、滚动 100D 锚从 $72,978 边际下移）。
              头顶最近 MA 现在是 D-EMA20{' '}
              <span className="dn-tag bear">$68,725（−8.27%）</span>
              —— 20D EMA 最快吃到下行印（06-07 是 $69,751、今天近 $1,026）。
              W-SMA20 / D-SMA100 / D-EMA50 簇打成 $861 带 ~$9.4k–$9.9k
              头顶：W-SMA20{' '}
              <span className="dn-tag bear">$72,076（−12.53%）</span>、
              D-SMA100 <span className="dn-tag bear">$72,937（−13.57%）</span>、
              D-EMA50{' '}
              <span className="dn-tag bear">$72,483（−13.03%）</span>。
              其余按 level 顺：D-SMA20{' '}
              <span className="dn-tag bear">$70,316（−10.34%）</span>、
              D-EMA100{' '}
              <span className="dn-tag bear">$74,478（−15.35%）</span>、
              D-SMA150{' '}
              <span className="dn-tag bear">$74,536（−15.42%）</span>、
              D-SMA50{' '}
              <span className="dn-tag bear">$75,340（−16.32%）</span>、
              W-EMA20{' '}
              <span className="dn-tag bear">$75,315（−16.30%；seed）</span>、
              D-EMA150{' '}
              <span className="dn-tag bear">$77,023（−18.15%）</span>、
              D-SMA200{' '}
              <span className="dn-tag bear">$78,246（−19.43%）</span>、
              D-EMA200{' '}
              <span className="dn-tag bear">$79,580（−20.78%）</span>。
              在 2024-2026 子集上远在上方且不用：W-EMA150 seed $78,090
              （−19.27%）、W-EMA100 seed $82,680（−23.75%）、W-EMA50 seed
              $83,379（−24.39%）、W-SMA100 $88,529（−28.79%）、W-SMA50
              $91,807（−31.33%）；W-EMA200 seed 读 $73,762（−14.53%）
              但在 129 周子集下是 truncated seed、只为完整度露出。{' '}
              <span className="dn-signal">
                200W watch JSON 仍不在服务器（连续第四篇）；按 runbook §2
                退回到全史 parquet 计算、全史 W-SMA200（200 根已收周 bar
                截至 06-08）= $62,019（06-07 是 $62,008 —— 抬 $11、
                滚动窗丢掉旧低头一根、补上 06-08 收 $63,058）。live 现货
                $63,042 坐周期地板上方 +1.65% 在<em>现货</em>印上 —— 而
                06-08 周收 $63,058 坐 level 上方 +1.68% / +$1,039 在
                <em>周收</em>印上、是自 06-01 破位以来首次周收高于全史
                200W、是 06-07 那张 watch 在多头一侧的结构性落地
              </span>。在全史 parquet 序列（W-MON、closed=&lsquo;right&rsquo;、
              154 个有效 200W 观测、<em>8 / 154 个周收在 level 下方</em>）
              上、周收低于 200W 历来发生在 ~5.19% 的周（自 06-07 的 5.84%
              用新已收计数与 06-08 上方印滚入精炼而来）；按 runbook
              do-not-fabricate、没有 JSON 就不主张 percentile / break-event、
              只露出 level + 06-08 周收对 200W 的缝。W-SMA200 对 06-07
              抬 $11 是因为滚动 200 周窗丢掉旧低头一根、补上 06-08 收
              $63,058（这次加上的值靠近被丢掉那头的均值）；谱系 W-SMA200
              抬向 ~$200/week、今天 +$11 异常小、因为丢掉那头的值正好
              落在 $63k 附近。{' '}
              <span className="dn-em">
                MA 锚到 parquet anchor row 2026-06-09 00:05Z（收 $63,022.00；
                物理最末行 00:06Z 收 $63,069.30 —— 按 DN-005 audit 把
                &ldquo;anchor row&rdquo;与&ldquo;last bar&rdquo;明文分开）；偏移按 live
                现货 $63,042.00 直接（按 06-03 audit DN-006 处理：live-pin
                分母延续；parquet 相邻收 $63,022.00 比 live pin 低 $20.00、
                是谱系最紧 parquet-vs-live 缝）。日收：06-02 $66,730、
                06-03 $64,118、06-04 $63,853、06-05 $61,022、06-06 $60,850
                （谱系最低收）、06-07 $63,298（+$2,448 / +4.02% 回收日、
                后插针窗内最大单日收对收抬）、06-08 $63,058（−$241 /
                −0.38% 小幅整合回吐）、06-09 未收 $63,022 —— 连续八根日
                收在周期锚下方、连续三根日收在全史 200W 周期地板上方。
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer 图 <span className="dn-roman">III · 本子边际改善到净空 γ aggregate −36.7M（06-07 是 −38.7M、+$2.0M 修复 —— 较 06-07 +$14.8M 谱系最大小；仍结实净空 γ、没有翻面）· flip 跟着反弹<em>向上走</em> +$813 到 $64,351（06-07 leg-3 触发 $63,538 在 06-08 多小时触发、最大 1h close $63,936.50 在 2026-06-08 15:00Z、但 dealer 本子把 flip 朝上重定 —— inflection 实质性跟着走）· 9JUN26 0.3 DTE +2.26M 正向是下一根结算 08:00Z 06-09（8JUN −2.29M 之后的下一根正向前段块、本快照锚上尚未结算）· $60k 崩跌 put 墙再深到 −34.00M（06-07 是 −26.19M —— −$7.81M 再装是后插针窗内最大单 strike 负 γ 再加、dealer 本子在现货最近坐过又离开的 strike 上画出一个新的去稳器）· 26JUN −22.60M 月度仍是承重的前向负</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子在 aggregate 上边际改善（+$2.0M 到 −36.7M、
                较 06-07 谱系最大 +$14.8M 小）但 0-γ flip 跟着现货反弹
                <em>向上走</em> +$813 —— inflection 实质性追着价走、
                不是守住前价
              </span>。aggregate GEX 是{' '}
              <span className="dn-tag bear">−36.7M / 1%</span>（06-07 是
              −38.7M、+$2.0M 结构性修复、但本子仍结实净空 γ；没有翻面）。
              0-γ flip 走{' '}
              <span className="dn-tag">$63,538 → $64,351（+$813）</span>
              —— flip 跟着反弹<em>向上走</em>、与下行段 flip 跟着现货下落
              的结构性不同形；这次两者都向上跑。两个 dist-to-flip 参考
              （按 06-02 audit DN-007 延续）：live 现货参考{' '}
              <span className="dn-tag bear">−2.03%</span>
              （63,042.00 / 64,351 − 1 = −2.034%）；GEX 文件 Deribit-idx
              参考 <span className="dn-tag bear">−1.69%</span>
              （63,264 / 64,351 − 1 = −1.690%、对上文件自身 dist-to-flip
              tile −1.7%）。live 现货参考较 Deribit-idx 参考宽 −0.34pt、
              因为 Deribit idx 比 live 现货高 $222 —— 在正常 idx-vs-live
              追踪带内。两参考都负；live 现货参考从 06-07 的 −4.10%
              收窄到 −2.03%（+2.07pt 收、因为 flip 走 +$813 + 现货走
              +$2,109 —— flip 大约吃了现货上动 39%）。
            </p>

            <p>
              墙图在现货最近坐过又离开的 strike 上<em>再深</em>：{' '}
              <span className="dn-tag bear">$60k −34.00M</span>（06-07 是
              −26.19M、墙再深 −$7.81M、因为现货跨 inter-note 窗在 strike
              上方守住 —— dealer 本子在现货已经离开 $60k strike 的状况
              下画出一个新的去稳器、墙不再被现货-近-strike 活动消耗）、{' '}
              <span className="dn-tag bear">$62k −9.10M</span>（06-07 是
              −5.84M、再深 −$3.26M —— $62k strike 在现货穿过它的过程中
              成为新的近-现货负）、{' '}
              <span className="dn-tag bear">$55k −8.10M</span>（06-07 是
              −10.69M —— strike 离现货远了、温和缓）、{' '}
              <span className="dn-tag bull">$80k +10.66M</span>（头顶最重
              正、对 06-07 的 +8.97M firm +$1.69M —— 温和厚上方阻尼柱）、{' '}
              <span className="dn-tag bear">$50k −5.81M</span>（06-07 是
              −6.80M —— 温和缓）、{' '}
              <span className="dn-tag bear">$58k −4.46M</span>（06-07 是
              −6.47M —— 缓）、{' '}
              <span className="dn-tag bear">$61k −3.83M</span>（top-10
              里<em>新</em>、刚在反弹收下方的新现货下方负）、{' '}
              <span className="dn-tag bull">$82k +3.80M</span>（06-07 是
              +3.30M —— firm）、{' '}
              <span className="dn-tag bear">$63k −3.30M</span>（top-10
              <em>新</em>条目、现货正坐着的 strike；dealer 本子在现货
              正上方画了一个小负）、{' '}
              <span className="dn-tag bear">$63.5k −2.86M</span>（top-10
              <em>新</em>条目、紧靠现货上方）。$50k–$65k 负簇（在所列
              top-10）现在堆到大约{' '}
              <span className="dn-em">−71.46M 的 dealer 放大</span>
              （列出的带内墙加总：−34.00 − 9.10 − 8.10 − 5.81 − 4.46 −
              3.83 − 3.30 − 2.86 = −71.46M；对 06-07 可比 top-10 簇
              −63.25M —— 走廊在 top-10 口径上再装 ~$8.2M 重、dealer 一侧
              下行放大<em>深化</em>即使 aggregate γ 边际改善）。本篇承重
              读是{' '}
              <span className="dn-signal">
                $60k 崩跌 put 跟着现货回收再深 −$7.81M —— dealer 本子在
                现货最近坐过又离开的 strike 上画出一个新的去稳器、会放大
                任何回穿 level 的测试。aggregate 小幅正向是误导：本子在
                aggregate 上修复 $2.0M、但现货正下方和现货上方紧邻 strike
                （$60k −7.81M、$62k 再深 −3.26M、加上现货坐处与紧上方的
                <em>新</em>$63k / $63.5k 小负）<em>再装</em>负 γ。06-07
                那种最干净前段衰减结构没有继续过前段块
              </span>。前向到期：10JUN 1.3 −3.51M（小负、明天的结算）、
              11JUN 2.3 −6.48M（近期带上<em>新</em>显著负）、12JUN 3.3
              −8.24M（06-07 是 −8.91M、基本平）、19JUN 10.3 −4.90M
              （06-07 是 −6.26M、缓 −$1.36M）、26JUN 17.3 −22.60M
              （06-07 是 −24.94M、缓 −$2.34M —— 承重前向负、仍是单到期
              最重）、31JUL 52.3 +4.36M（06-07 是 +1.61M —— firm +$2.75M、
              前向最大 firm）、28AUG 80.3 +1.51M、25SEP 108.3 +1.34M
              （06-07 是 −0.69M、<em>翻正</em>）、25DEC 199.3 +3.52M
              （06-07 是 +1.64M —— firm +$1.88M）、26MAR27 290.3 +0.65M。
              9JUN +2.26M 前段块在 08:00Z 06-09 结算（本快照 ~8h 前）；
              因为它是<em>正向</em>、结算窗这一次预计不带放大器 —— 但
              结算在本锚上<em>尚未印</em>、块仍待定。除 9JUN 后 aggregate
              大约{' '}
              <span className="dn-tag">−36.7M − (+2.26M) = −38.96M</span>
              （在前向残差口径上轻微更差、因为清出的是<em>正向</em>块、
              留下负向尾巴）、但前段衰减形本身是 06-07 正向前段模式的
              结构性延续、待 8h 后结算确认。
            </p>

            <p>
              IV 中位数跨 946 合约是{' '}
              <span className="dn-tag bull">47.6%</span>（自 06-07 的
              53.5% / 1,008 合约 cool −5.9pt —— 链在两根前段块清完之后
              在平静回收盘里 vol mark 实质性 cool；62 根少的合约反映了
              7JUN 与 8JUN 链在 08:00Z 06-07 / 06-08 各自清出净抵消新挂
              11JUN / 12JUN 近期挂盘）对 30D 收对收 RV{' '}
              <span className="dn-tag bear">39.30%</span>（06-07 是
              37.03%、+2.27pt —— 滚动 30D 窗现在同时盖住 06-07 +3.74%
              收对收抬和 06-06 插针印、RV firm）。链丰度{' '}
              <span className="dn-tag bull">~+8.30pt</span>（06-07 是
              ~+16.47pt —— 一根 −8.17pt 的塌方、IV cool + RV firm 同向；
              链不再像 06-07 周末标那样把前看实现波动定得高、反弹被证不
              延伸之后已经部分均值回归）。是 N 合约跨链中位数、<em>不是</em>
              可交易价差；到期 / strike level vega、skew 与期限结构仍未
              载入；vol 读仍 framework-only。RV 方法：30D 收对收、logret
              std × √365 × 100 在最后 30 根日 logret 上（= 31 根连续日收）、
              锚到 parquet anchor row 2026-06-09 00:05Z；本 31-close 窗
              现在跨 $60,849.70 – $82,177.70。主 30-return / 31-close 值
              39.30% 是源支持；v1 草稿里那个 29-return 旁注（39.50%）在
              audit 复算里没复现、按 DN-009 audit 已删除。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · 周末 FRED 冻结<em>部分</em>解封 —— 周五 06-05 印终于在 06-08 22:17Z 渲染里滚入（US 10Y 4.55% +8.0bp Δ —— rates re-grow 门 4.53% 在带过去的周五收盘<em>触发</em>；06-07 基线是 4.47%）· 10Y TIPS 2.19%（+8.0bp、EXTREME RISK-OFF episodic 再深）· HY OAS 2.76%（+2.0bp、门 2.78% 现在距触 2bp 对 06-07 的 4bp）· MOVE 77.0（+1.78 —— 在 06-06 谱系跳之后再 firm）· DXY 100.15（+0.08）· reclaim-long rates filter（10Y &lt; 4.55%）现在<em>正好在边界</em> 4.55% · BTC-vs-TradFi 7d 缝<em>收窄</em>到 −8.53pt（06-07 是 −13.26pt）因为 BTC 回收进滚动 7d 窗、06-06 插针部分在前端滚出</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观盘面那道&ldquo;周末 FRED 冻结&rdquo;在 06-08 22:17Z 渲染上
                <em>部分解封</em>、因为周五 06-05 FRED 日印终于落地 ——
                而 rates 一侧在本谱系上<em>首次</em>反向对 reclaim-long
                站位
              </span>。dashboard 渲染是 2026-06-08 22:17Z（Monday-evening
              UTC、按 DN-010 audit 校正、不是 v1 草稿里的 Sunday-evening）、
              比快照早 ~1h 48m。周五收 10Y nominal{' '}
              <span className="dn-tag bear">4.55%（+8.0bp Δ —— rates
              re-grow 门 4.53% 在带过去的周五收盘<em>触发</em>、06-07
              基线是 4.47%）</span>、regime z{' '}
              <span className="dn-tag bear">+2.09</span>、episodic z{' '}
              <span className="dn-tag bear">+1.01</span> —— EXTREME
              RISK-OFF 标、episodic z 现在 &gt; +1.0。10Y TIPS real{' '}
              <span className="dn-tag bear">2.19%（+8.0bp）</span>、
              regime z <span className="dn-tag bear">+2.42</span>、
              episodic z <span className="dn-tag bear">+1.68</span> ——
              EXTREME RISK-OFF episodic 再深。5Y5Y BE inflation{' '}
              <span className="dn-tag">2.23%（−1.0bp）</span> —— 温和
              cool。HY OAS{' '}
              <span className="dn-tag bull">2.76%（+2.0bp）</span>、
              regime z <span className="dn-tag bull">−1.00</span>、
              episodic z <span className="dn-tag">−0.31</span> —— 松标、
              <em>但门 2.78% 现在只距触 2bp（06-07 是 4bp）</em>。NFCI{' '}
              <span className="dn-tag">−0.494（+0.01）</span> —— 陈旧
              10d（自 06-07 的 8d +2d）。Fed 净流动性{' '}
              <span className="dn-tag bear">$5.834T</span> —— 无新周印
              （源面板 Δ −0.038T、按 DN-008 audit 校正不是 0.000T）。
              MOVE 债 vol{' '}
              <span className="dn-tag bear">77.0（+1.78）</span> —— 在
              06-06 谱系跳之后再 firm、现在 regime z 中性（+0.07）。DXY{' '}
              <span className="dn-tag bear">100.15（+0.08）</span>、
              regime z <span className="dn-tag bear">+1.86</span>、
              episodic z <span className="dn-tag bear">+2.18</span> ——
              RISK-OFF EPISODIC 带过（episodic z 自 06-07 的 +2.33 退
              −0.15、因为滚动 30-obs 窗现在把周五印吸入了）；USD/JPY{' '}
              <span className="dn-tag bear">160.30（+0.31）</span>；US-JP
              10Y 利差 <span className="dn-tag bear">2.03%（+8.0bp）</span>
              —— 在美侧动上锐扩（06-07 是 1.95% —— 美利率涨而 JGB 没
              回应、JGB 陈旧在 2.52% +68d）；USD/CNY{' '}
              <span className="dn-tag bull">6.7650（−0.01）</span>。JGB
              10Y 陈旧 68d 在 2.52%（陈旧计数自 06-07 +2d）。{' '}
              <span className="dn-em">
                净读：周五收 10Y 4.55% 正好<em>在</em>reclaim-long rates
                filter 边界 —— filter 没触发（filter 是严格 10Y &lt; 4.55%、
                现在 4.55% 是 tied）、现在读&ldquo;在边界&rdquo;而不是&ldquo;true、
                还有 6bp 余地&rdquo;。credit 门距触 2bp、对 06-07 的 4bp。
                DXY episodic 仍 EXTREME RISK-OFF。宏观一侧自 06-07 基线
                实质性反向对 reclaim-long 站位；周末 FRED 冻结部分解封
                揭示了一个敌对的 rates / credit re-grow 环境、本谱系上
                首次宏观对 BTC 的贡献在<em>新鲜数据</em>口径上结实负
                （不是带过去的周五收 caveat）。BTC-vs-TradFi 脱钩在本印
                <em>收窄</em>到 −8.53pt（BTC −11.54% vs NQ −3.01%）自
                06-07 的 −13.26pt —— 但这次是因为 BTC 回收进滚动 7d
                窗（BTC 从 −17.75% 走到 −11.54%、因为 06-06 插针在 7d
                窗前端部分滚出）、同时 NQ 也部分回收（NQ −4.49% → −3.01%、
                +1.48pt 又一轮 TradFi 解压）
              </span>。
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>宏观指标</th>
                  <th>level</th>
                  <th>Δ</th>
                  <th>regime z</th>
                  <th>episodic z</th>
                  <th>读</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>US 10Y nominal</td><td className="num bear">4.55%</td><td className="num bear">+8.0bp</td><td className="num bear">+2.09</td><td className="num bear">+1.01</td><td className="bear">紧 · 周五印落地 · 门 4.53% <em>触发</em> · reclaim filter 在边界</td></tr>
                <tr><td>10Y TIPS real</td><td className="num bear">2.19%</td><td className="num bear">+8.0bp</td><td className="num bear">+2.42</td><td className="num bear">+1.68</td><td className="bear">EXTREME RISK-OFF episodic 再深</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.23%</td><td className="num bull">−1.0bp</td><td className="num">−0.04</td><td className="num bull">−1.34</td><td className="neut">无标</td></tr>
                <tr><td>HY OAS</td><td className="num">2.76%</td><td className="num bear">+2.0bp</td><td className="num bull">−1.00</td><td className="num">−0.31</td><td className="bull">松 · 门 2.78% 距触 2bp（06-07 是 4bp）</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.494</td><td className="num">+0.01</td><td className="num">+0.72</td><td className="num">−0.01</td><td className="neut">紧 · 陈旧 10d（+2d）</td></tr>
                <tr><td>MOVE 债 vol</td><td className="num bear">77.0</td><td className="num bear">+1.78</td><td className="num">+0.07</td><td className="num">+0.60</td><td className="bear">06-06 谱系跳之后再 firm</td></tr>
                <tr><td>DXY</td><td className="num bear">100.15</td><td className="num bear">+0.08</td><td className="num bear">+1.86</td><td className="num bear">+2.18</td><td className="bear">RISK-OFF EPISODIC · episodic z 自 06-07 −0.15、新数据吸入</td></tr>
                <tr><td>Fed 净流动性</td><td className="num bear">$5.834T</td><td className="num bear">−0.038T</td><td className="num">−0.12</td><td className="num bear">−2.29</td><td className="bear">源面板 Δ −0.038T（按 DN-008 audit 校正）· 无新周印</td></tr>
                <tr><td>USD/JPY</td><td className="num bear">160.30</td><td className="num bear">+0.31</td><td className="num bear">+1.36</td><td className="num bear">+1.44</td><td className="bear">日元更弱 · episodic z &gt; +1.0</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num bear">2.03%</td><td className="num bear">+8.0bp</td><td className="num">−0.63</td><td className="num bear">+1.01</td><td className="bear">在美侧动上锐扩（06-07 是 1.95%）</td></tr>
                <tr><td>USD/CNY</td><td className="num bull">6.7650</td><td className="num bull">−0.01</td><td className="num bull">−1.84</td><td className="num bull">−1.46</td><td className="bull">无标 · 松</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">+17.0bp（月度 · 陈旧 68d）</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">月度 · 不依赖 · 陈旧自 06-07 +2d</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、00:01Z 汇总 ——{' '}
              <span className="dn-em">是 7d 滚动读、不是今天</span>）。
              非对角均值 <span className="dn-tag">|r| 0.232</span>（对
              06-07 的 0.233 基本平 —— 朝 0.25 NORMAL 缓的方向停在门槛上；
              regime 仍以宽差距 IDIOSYNCRATIC）。BTC 顶配仍是 SILVER：
              {' '}<span className="dn-tag">SILVER +0.300</span>
              （06-07 是 +0.261 —— firm +0.039）、其次是 TSLA{' '}
              <span className="dn-tag">+0.272</span>（06-07 是 +0.220
              —— firm +0.052）、COPPER{' '}
              <span className="dn-tag">+0.258</span>（06-07 是 +0.178
              —— 锐 firm +0.080）、MSFT{' '}
              <span className="dn-tag">+0.253</span>（06-07 是 +0.189
              —— firm +0.064）、SP500{' '}
              <span className="dn-tag">+0.247</span>（06-07 是 +0.220
              —— firm +0.027）、GOLD{' '}
              <span className="dn-tag">+0.243</span>（06-07 是 +0.194）、
              META <span className="dn-tag">+0.243</span>（06-07 是 +0.166
              —— firm +0.077）、NVDA{' '}
              <span className="dn-tag">+0.231</span>、NQ{' '}
              <span className="dn-tag">+0.227</span>{' '}
              <span className="dn-em">（06-07 是 +0.188 —— 再 firm
              +0.039、BTC↔NQ 配在连续两篇上 firm、因为滚动 7d 窗吸入
              06-07 / 06-08 共同回收印）</span>、URNM{' '}
              <span className="dn-tag">+0.206</span>、PLAT{' '}
              <span className="dn-tag">+0.193</span>、AMZN{' '}
              <span className="dn-tag">+0.168</span>、PALL{' '}
              <span className="dn-tag">+0.144</span>、NGAS{' '}
              <span className="dn-tag">+0.143</span>、JP225{' '}
              <span className="dn-tag">+0.123</span>。7d 表现：{' '}
              <span className="dn-tag bear">BTC −11.54%</span>{' '}
              <span className="dn-em">（自 06-07 的 −17.75% 锐回收
              +6.21pt —— 06-06 插针在 7d 窗前端部分滚出、06-07 / 06-08
              回收印滚入）</span>、NQ{' '}
              <span className="dn-tag bear">−3.01%</span>（06-07 是
              −4.49% —— 回收 +1.48pt）、SP500{' '}
              <span className="dn-tag bear">−2.18%</span>（06-07 是
              −2.33% —— 平）、JP225{' '}
              <span className="dn-tag bear">−1.68%</span>（06-07 是
              −3.98% —— 锐回收 +2.30pt）、NVDA{' '}
              <span className="dn-tag bear">−6.19%</span>、META{' '}
              <span className="dn-tag bear">−2.36%</span>（06-07 是
              −6.61% —— 回收 +4.25pt）、AAPL{' '}
              <span className="dn-tag bear">−1.54%</span>、MSFT{' '}
              <span className="dn-tag bear">−8.90%</span>（06-07 是
              −8.85% —— 基本平）、AMZN{' '}
              <span className="dn-tag bear">−5.72%</span>（06-07 是
              −9.38% —— 回收 +3.66pt）、TSLA{' '}
              <span className="dn-tag bear">−0.75%</span>（06-07 是
              −9.60% —— 锐回收 +8.85pt）。金属普跌但部分回收：GOLD{' '}
              <span className="dn-tag bear">−3.72%</span>（06-07 是
              −4.90% —— 缓）、SILVER{' '}
              <span className="dn-tag bear">−9.52%</span>（06-07 是
              −9.99% —— 平）、PLAT{' '}
              <span className="dn-tag bear">−9.18%</span>、PALL{' '}
              <span className="dn-tag bear">−10.49%</span>、COPPER{' '}
              <span className="dn-tag bear">−3.06%</span>（06-07 是
              −4.21% —— 回收）、URNM{' '}
              <span className="dn-tag bear">−7.67%</span>（06-07 是
              −10.74% —— 回收）。能源混：CL{' '}
              <span className="dn-tag bear">−2.03%</span>（06-07 是
              +4.09% —— 锐翻负）、BRENT{' '}
              <span className="dn-tag bear">−1.90%</span>（06-07 是
              +2.62% —— 翻面）、NGAS{' '}
              <span className="dn-tag bear">−0.85%</span>（06-07 是
              −0.49% —— 基本平）。{' '}
              <span className="dn-em">
                BTC 7d 滞后对 TradFi 引擎<em>收窄</em>到 ~−8.53pt
                （BTC −11.54% vs NQ −3.01%）自 06-07 的 −13.26pt ——
                这次是两侧都回收（BTC +6.21pt、NQ +1.48pt）、7d 共同
                回收印滚入、跨资产 firm 在 BTC 顶配（SILVER +0.039、
                COPPER +0.080、MSFT +0.064、META +0.077、NQ +0.039）
                直接反映共同回收。轮动从 06-07 的 BTC-延展进-平 TradFi
                形<em>翻面</em>到 BTC-回收进-回收 TradFi 形 —— 但滞后
                仍读 ~−8.5pt、因为 BTC 在下行段里跌得比 TradFi 更深。
                mean |r| 在 0.232（基本平在门槛上）、BTC 盘面在交易
                处方上仍结构性 IDIOSYNCRATIC
              </span>。JGB 月度 2.52% 带 EXTREME RISK-OFF 月度标 —— 不
              依赖。
            </p>

            <h2 className="dn-sec">
              交易簿{' '}
              <span className="dn-roman">V · runner / 看跌价差尾仓 / 周期延伸框架状态不变 · cover-bounce scout 两条支撑腿（dealer 修复 + cover-shape）<em>对 06-07</em>都退（γ +$2.0M vs 06-07 +$14.8M、4h cover-shape 软化成混）；leg 1（锚重夺）仍 ~$9.9k 头顶（06-07 是 ~$12.0k）· mean-revert 长 scout：leg-3 触发跟着反弹走到 $64,351、06-07 $63,538 触发<em>在 06-08 多小时触发</em>（最大 1h close $63,936.50）但 dealer flip 跟着走 —— 重定 R/R 退到 1.65:1（06-07 是 2.15:1、仍过 1.5:1 门）· leg 2（short-pay regime ≥ 4h）杠杆放气之后<em>不再过</em>、leg 3 没进入 · 200W 周期地板 watch 在多头一侧落地（未收 06-08 周收 $63,058 印在新 $62,019 W-SMA200 上方 +$1,039、watch 转到&ldquo;首根收上方守住、本处无新交易触发&rdquo;）· 本快照无新交易</span>
            </h2>

            <p>
              <span className="dn-signal">
                06-07 那张 watch 在多头一侧落地：未收周 bar（W-MON 锚到
                06-08）收 $63,058、+$1,039 / +1.68% 高于全史 W-SMA200
                $62,019 —— 自 06-01 破位以来首根周收高于周期地板。但
                mean-revert 长 scout 升级腿在同一 ~48h 窗里退：leg 1
                （多 TF TD9 BUY 簇）从三并发收窄到一并发 + 一待定；
                leg 2（累计 short-pay ≥ 4h）<em>不再过</em>门、杠杆本子
                在反弹里放气；leg 3（1h close &gt; flip）跟着反弹重定
                到 $64,351、新 level 上触发<em>没</em>印 —— 即使 06-07
                触发 $63,538 在 06-08 盘面里<em>确实</em>触发了多小时
                （最大 1h close $63,936.50 在 2026-06-08 15:00Z）
              </span>。05-31 的 cover-bounce scout 在价平面上仍 DROPPED
              —— 周期锚仍 ~$9.9k 头顶（06-07 是 ~$12.0k、近 $2.1k 因为
              现货回 $2,109）。dealer 修复腿对 06-07 退（γ +$2.0M vs
              06-07 谱系最大 +$14.8M —— 小修复、仍净空）；cover-shape
              腿软化（06-07 干净合格 4h cover-shape 衰减了：4h futures
              CVD 现在平 ~+8 vs 06-07 的 +306、4h taker-net 温和负 −4
              vs +306、4h 价 −0.53% 不是 06-07 的 +0.60%）。runner 与
              29MAY 看跌价差尾仓仍 closed 不变。周期延伸框架仍
              CLOSED-VINDICATED、今天的 24h 盘面无新单分钟敌对-2 签名。
              200W 周期地板 watch 从 active 转到{' '}
              <em>首根收上方守住、本处无新交易触发</em>：结构性落地印
              在 06-08 周收上、本笔交易簿不带新入场、因为路径走过锚重夺
              仍需要 legs that 杠杆放气刚让更难过。{' '}
              <span className="dn-signal">
                重定 mean-revert 长 scout R/R 在触发 $64,351 / stop
                $59,154（06-06 投降低）/ 第一目标 $72,937（周期锚）读
                $5,197 风险 / $8,586 回报 = 1.65:1、从 06-07 的 2.15:1
                温和退、但仍在桌面 1.5:1 门上方。现货 $63,042 坐重定
                触发下方 $1,309（较 06-07 的 $2,605 缝近 $1,296）——
                但 leg 2 现在不过 4h 门、scout 需要 legs 1（TD9 簇）
                与 3（flip 重夺）<em>同时</em>都过、且 leg 1 已经收窄
                到一并发框
              </span>。今天交易簿在 live 规模上不变（无）；桌面在周期
              地板结构性落地印在多头一侧、mean-revert scout 升级腿不
              均匀退、宏观盘面在带过去的周五收落地之后反向对 reclaim-long
              站位、dealer 本子把 flip 跟着反弹重定而不是守住前 inflection
              的过程里保持纪律。
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">closed · 主 · runner ladder 完 · 在 29MAY 08:00Z 到期结算上 closed（状态不变、自 06-07 带过）</span>
              <div className="dn-trade-name">
                Flip-extend 短 —— 在 29MAY 08:00Z 到期结算上 closed
                （较 06-07 不变）
              </div>
              <div className="dn-thesis">
                状态不变。回看读继续印证关闭：06-06 谱系最低 $59,154
                （live 盘面）在 06-06 mid-window 印出且守住；06-07 反弹
                +$2,448 收对收到 $63,298（后插针窗内最大单日收对收抬）；
                06-08 整合 −$241 到 $63,058；今日 06-09 未收 $63,022
                在 06-08 下 $36。下行段已经解决进后插针回收 + 整合盘面；
                06-08 周收 $63,058 印在全史 200W $62,019 上方 +$1,039、
                06-07 的结构性测试在多头一侧落地。再入场路径仍是新结构
                设置、不是 roll。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">closed 05-29 08:00Z（放大器结算）· 无残仓 · 较 06-07 不变</span></div>
                <div><span className="dn-lvl-k">不能</span><span className="dn-lvl-v">不要在已落地的 200W 周期地板周收重夺上追再入场短；后插针回弹形已经守住连续三根日收在地板上方、结构性测试在多头一侧落地 —— 这里再入场短需要新设置、不是 leftover</span></div>
              </div>
              <div className="dn-gating">
                <b>交易已 closed。</b>audit-cycle 纪律守住。06-08 周收
                高于全史 200W 把 06-07 的 watch 在多头一侧落地；这种
                落地本身不是长入场、但它在结构性上<em>关掉</em>下行段
                里最激进的熊读。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">DROPPED · scout · 周期锚仍 ~$9.9k 头顶（06-07 是 ~$12.0k）· dealer-book 修复腿今天<em>对 06-07</em>退（+$2.0M 到 −36.7M；06-07 是 +$14.8M）· cover-shape 腿<em>对 06-07</em>软化（4h 流混 vs 06-07 在 00:05Z 锚的干净合格窗）</span>
              <div className="dn-trade-name">
                Cover-bounce scout —— DROPPED 带过；两条支撑腿（dealer 修复 + cover-shape）对 06-07 决定性印都退、锚重夺腿在 ~$9.9k 头顶不动
              </div>
              <div className="dn-thesis">
                cover-bounce 路径三条腿：（1）锚重夺（1d close &gt; D-SMA100
                $72,937）、（2）dealer 修复（aggregate GEX 翻回 &gt; 0）、
                （3）cover-shape 流印（OI 缩 + spot CVD bid + SM short_btc
                泄）。今天：leg 1 不动在 ~$9.9k 头顶（周期锚仍是承重缺
                门、但近 $2.1k 因为现货回收）、leg 2 边际改善（+$2.0M
                到 −36.7M —— 较 06-07 谱系最大 +$14.8M 小；仍净空 γ、
                没翻面）、leg 3 在 4h 窗软化（4h：spot CVD +374、futures
                CVD +8、big-print +158 BTC / 99 prints、taker-net −4、
                OI +405 BTC —— spot 一侧 bid 但 futures 一侧平、taker-net
                温和负、较 06-07 在每根流字段上的决定性印更软形、且 OI
                在扩）。1h 在所有 futures 一侧字段都滑、只 spot CVD 温和
                正。周期锚不论引擎框 cover-shape 多干净仍是结构性门；
                leg 2 与 3 都<em>对 06-07</em>退后。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">scout 状态</span><span className="dn-lvl-v">在价平面上 DROPPED（周期锚仍是承重缺腿、~$9.9k 头顶）；leg 2 与 3 对 06-07 退</span></div>
                <div><span className="dn-lvl-k">再入场门槛（带过）</span><span className="dn-lvl-v bull">1d close &gt; D-SMA100 $72,937 AND aggregate GEX 翻回 &gt; 0（现在 −36.7M、今天 +$2.0M 好 —— 小修复）AND 1h cover-shape 印（4h cover-shape 今天软化：spot CVD bid、futures 一侧平、taker-net 温和负；06-07 决定性印没守住）</span></div>
                <div><span className="dn-lvl-k">本处无长入场</span><span className="dn-lvl-v bear">不要把 200W 周期地板重夺当 cover-bounce 触发买进 —— 这次落地是结构性地板支撑、不是 cover-bounce 触发；cover-bounce 路径门控在锚重夺、那道门仍 ~$9.9k 头顶</span></div>
              </div>
              <div className="dn-gating">
                <b>交易在价平面上 dropped。</b>下文 mean-revert 长 scout
                是单独的设置、键在超卖计数耗竭 + flip 重夺；cover-bounce
                路径门控在锚重夺。200W 周期地板周收落地高于 $62,019 是
                结构性地板支撑信号、不是 cover-bounce 触发 —— 它<em>关掉</em>
                熊侧尾巴而不是触发长。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">CLOSED-VINDICATED · 短 scout · 框架 watch · 今天 24h 盘面无新单分钟敌对-2 签名（最接近是 60 分钟 peak-to-peak unwind：BJ 12:31 06-08 / UTC 04:31 06-08 SM net 谷 −41,676 到 BJ 19:31 06-08 / UTC 11:31 06-08 SM net 峰 −37,475 = +4,201 少空跨 60 min、但无单分钟 Δnet ≤ −3k）· calendar 节奏正式退役</span>
              <div className="dn-trade-name">
                Anchor-break 短 scout —— CLOSED-VINDICATED（closure 自 06-07 带过；今天的 24h 盘面无单分钟敌对-2 签名、只 60 分钟 peak-to-peak unwind 形；calendar 节奏正式退役）
              </div>
              <div className="dn-thesis">
                状态较 06-07 不变。周期延伸框架在 06-06 第六印失败时
                正式退役；今天没有可评估的 calendar 候选分钟。框架继续
                作为<em>无 calendar</em>的 watchlist 监视新重堆敌对-2
                签名（Δshort &gt; 0 + Δlong &lt; 0 同一分钟 |Δnet| ≥ 3k）；
                今天的 24h 盘面没有单分钟 Δnet 印过 ≥ 3k 杆。最接近
                的形是 BJ 12:31 06-08 / UTC 04:31 06-08 SM net 谷
                −41,676 → BJ 19:31 06-08 / UTC 11:31 06-08 SM net 峰
                −37,475（+4,201 少空跨 60 min）—— 但那是敌对-2 签名的
                反方向（本子 covered、不是重堆）、跨 60 分钟、不是单
                分钟。谷 −41,676 比 06-04 lineage 极端 −46,686 浅
                +5,010 BTC；空侧自 06-04 起没重测过 lineage 极端。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">今天无新敌对-2</span><span className="dn-lvl-v">24h 盘面无单分钟 Δnet ≤ −3k 印；最接近形是 BJ 12:31 06-08 / UTC 04:31 06-08 SM net 谷 −41,676 → BJ 19:31 06-08 / UTC 11:31 06-08 SM net 峰 −37,475（60-min cover 形、敌对-2 方向反向）</span></div>
                <div><span className="dn-lvl-k">五印链（closed）</span><span className="dn-lvl-v">05-30 06:01Z Δnet −5,569 → 06-01 06:16Z −3,137 → 06-02 06:46Z −6,621 → 06-03 07:41Z −7,177（lineage 极端）→ 06-04 07:41Z −5,591 → 06-05 第六印测试 FAILED · 框架 closed</span></div>
                <div><span className="dn-lvl-k">处置</span><span className="dn-lvl-v">CLOSED-VINDICATED 带过 · 桌面不会在 200W 周期地板周收重夺、7JUN 前段放大器干净出与 9JUN 正向块待定（08:00Z 06-09）、引擎 RSI 整体离 lineage 极端、48h SM 本子 cover 短 −3,070 BTC 的盘面上追再入场短</span></div>
                <div><span className="dn-lvl-k">框架下一步</span><span className="dn-lvl-v">未来重堆敌对-2 签名（Δshort &gt; 0 + Δlong &lt; 0 同一分钟、|Δnet| ≥ 3k）仍是有意义的盘面读、印的时候算、但只在无 calendar 口径上</span></div>
              </div>
              <div className="dn-gating">
                <b>状态：</b>CLOSED-VINDICATED 带过。{' '}
                <b>硬规则：</b>不在周期延伸节奏干净失败、200W 周期地板
                周收落地多头一侧、7JUN 前段放大器干净出 / 9JUN 正向块
                08:00Z 待定（中间 8JUN 负向）、杠杆本子实质性放气、
                48h SM 本子 cover 短 −3,070 BTC 的盘面上再入场短。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">closed · 宏观尾仓 · 在 29MAY 08:00Z 结算上 closed（状态带过；宏观一侧反向对 reclaim-long 站位 —— 周五 06-05 FRED 印在 06-08 22:17Z 渲染落地、10Y +8bp 到 4.55% / 门<em>触发</em>、HY OAS +2bp / 门距触 2bp、reclaim-long rates filter <em>在边界</em>）</span>
              <div className="dn-trade-name">
                看跌价差 —— 在 29MAY 08:00Z 结算上 closed；无 roll（周五 FRED 印落地、宏观反向对 reclaim-long、但 BTC 内部结构性读没有理由现在 roll 新对冲）
              </div>
              <div className="dn-thesis">
                仓位状态不变。宏观盘面那道&ldquo;周末 FRED 冻结&rdquo;在 06-08
                22:17Z 渲染上<em>部分解封</em>、因为周五 06-05 日印
                落地：rates 一侧锐反向对 reclaim-long 站位、10Y nominal
                +8bp 到 4.55%（门 4.53% 在带过去的周五收<em>触发</em>、
                06-07 基线是 4.47%）、TIPS real +8bp 到 2.19%（EXTREME
                RISK-OFF episodic 再深）。credit 门朝触移 +2bp（HY OAS
                2.74% → 2.76%、门 2.78% 现在距触 2bp 对 06-07 的 4bp）。
                reclaim-long rates filter（10Y &lt; 4.55%）现在<em>正好</em>
                在边界 4.55%。今天<em>无</em>新对冲 roll、因为（a）BTC
                内部 200W 周期地板周收已重夺、（b）9JUN 正向前段块定
                价在 8h 之前但本锚上尚未结算、（c）48h SM 本子 cover
                短 −3,070 BTC + funding 均值翻回正、（d）单 rates 门
                触发但 credit 门没触发仍不是完整 credit-led re-grow 信号、
                rates 动也和非-credit 驱动的供给 / term-premium 动一致。
                宏观对 BTC 的贡献现在在<em>新鲜数据</em>口径上结实负
                （不是带过去的周五收 caveat）—— 本谱系第一次这种形。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">closed 05-29 08:00Z（Deribit 29MAY 结算）· 无残仓 · 无 roll · 较 06-07 不变</span></div>
                <div><span className="dn-lvl-k">re-grow 触发（周五印落地）</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% close（现在 2.76%、距触 2bp —— 周五收、06-07 是 4bp）OR 10Y &gt; 4.53% close（现在 4.55%、门<em>触发</em> —— 高于 4.53% 杆的收落地；06-07 是 4.47%）</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v">10Y &lt; 4.55% close —— <em>在</em>边界 4.55%（filter 是严格 &lt;、现在 4.55% 读&ldquo;在边界&rdquo; —— 没触发长侧 disqualifier 但不再像 06-07 那样有 6bp 余地）</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats：</b>rates re-grow 门在周五印上<em>触发</em>、
                但单门触发而 credit 门没触发（HY OAS 仍距触 2bp）还不
                构成完整 credit-led re-grow 信号 —— rates 动也与非-credit
                驱动的供给 / term-premium 动一致。reclaim-long rates
                filter<em>正好</em>在边界 4.55% 读&ldquo;在边界&rdquo;；下一根新
                印再扩 1bp 就在结构上 disqualify 长侧 rates filter。今天
                无 roll、因为 BTC 内部结构性读（200W 周收重夺、9JUN
                正向前段块 8h 待定、杠杆本子放气）不为新对冲撑腰 ——
                但宏观一侧现在需要密切监测下一根 Tier-1 印、本谱系
                第一次。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">长 · scout · 框架 watch · NON-ACTIONABLE · 重定 leg-3 触发跟着反弹走到 $64,351；06-07 触发 $63,538 在 06-08 多小时触发（最大 1h close $63,936.50 在 2026-06-08 15:00Z）但 dealer flip 跟着走；重定 R/R = 1.65:1（自 06-07 的 2.15:1 退、仍过 1.5:1 门）；leg 2（funding short-pay ≥ 4h）杠杆放气之后<em>不再过</em>；leg 1（TD9 簇）从三并发收窄到一并发 + 一待定</span>
              <div className="dn-trade-name">
                Mean-revert 长 scout —— 框架 watch；leg 1（多 TF ⚡ TD9 BUY）收窄到一并发框（3d）+ 1M 待定（06-07 是三并发）；leg 2（funding 累计 short-pay ≥ 4h）<em>不再过</em> —— 最长连续负向 streak 落到 2.42h（vs 4h 门、06-07 的 7.72h）、杠杆本子放气；leg 3 inflection 跟着反弹走到 flip $64,351 —— 06-07 $63,538 触发在 06-08 多小时印但 dealer flip 跟着现货回收向上走；重定 R/R 在 1.65:1 上过门（自 06-07 的 2.15:1 退）
              </div>
              <div className="dn-thesis">
                mean-revert 长 scout 三条升级腿：（1）多 TF TD9 BUY 在
                周期框上确认 —— 今天收窄到一并发框（3d）+ 1M 仍
                TD8 → 9? 待定；12h 与 1d 已走过 TD9 印到 Sell 5 / Sell 1
                在反弹形里、8h 重置到 Buy 1；（2）funding 累计 short-pay
                regime ≥ 4h —— 今天<em>不再过</em>在 2.42h 单根连续负
                streak（vs 4h 门、06-07 的 7.72h）、24h 均值翻回 +1.46%
                自 −0.13%、负分钟份额塌方 −44.69pt 到 28.11%、杠杆本子
                在反弹里实质性放气 —— 这条升级腿在多头一侧<em>关</em>、
                支撑 mean-revert 前提的&ldquo;funding 付给空&rdquo;regime 不再
                成立；（3）1h 重夺结构性 inflection。06-07 leg-3 触发
                在 flip $63,538 上<em>确实</em>在 06-08 盘面里触发了
                （最大 1h close $63,936.50 在 2026-06-08 15:00Z、整天
                多小时印高于 $63,538 杆、八根 1h close 在 level 上方）。
                但 dealer 本子把 flip 重定到 $64,351、跟着反弹走 —— 触发
                跟着现货上动 +$813 走、inflection 追着价走而不是守住前
                价。重定 R/R 在触发 $64,351 / stop $59,154（06-06 投降低）
                / 第一目标 $72,937（周期锚）读 $5,197 风险 / $8,586 回报
                = 1.65:1、自 06-07 的 2.15:1 温和退、但仍在桌面 1.5:1
                门上方。现货 $63,042 坐重定触发下方 $1,309（较 06-07
                的 $2,605 缝近 $1,296）。scout 仍 NON-ACTIONABLE、因为
                （a）leg 2 在杠杆放气 funding regime 上<em>失败</em>、
                （b）leg 1 收窄到一并发 + 一待定、（c）leg 3 离开前触发、
                新 level 上没有新印。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">升级门（3 中 1 过、1 FAILED、1 走开+待定）</span><span className="dn-lvl-v bull">leg 1 多 TF TD9 BUY —— 收窄到一并发框（仅 3d）+ 1M 仍待定；簇从 06-07 三并发塌方因为 12h 走过 TD9 到 Sell 5、1d 到 Sell 1 · leg 2 funding 累计 short-pay ≥ 4h —— <em>FAILED</em> 在 2.42h 最长连续负 streak（vs 4h 门）；24h 均值翻回 +1.46% 自 06-07 −0.13%、负分钟份额 28.11%（06-07 72.80%）、杠杆本子实质性放气、这条腿在多头一侧不再过 · leg 3 1h close &gt; flip $64,351（自 06-07 的 $63,538 向上走 —— 06-07 触发在 06-08 多小时印、最大 1h close $63,936.50 在 2026-06-08 15:00Z、但 dealer flip 跟着现货回收向上走差不多同幅度）—— 在新 level 上 UNCLEARED、现货 $63,042 坐触发下方 $1,309</span></div>
                <div><span className="dn-lvl-k">$64,351 flip（走过 inflection、不是入场直到印）</span><span className="dn-lvl-v bull">1h close &gt; $64,351 与 OI 仍建（或缩）标新 level 上结构性 inflection；重算 R/R 在触发 $64,351 / stop $59,154 / 第一目标 $72,937 读 $5,197 风险 / $8,586 回报 = 1.65:1、自 06-07 的 2.15:1 退但仍在桌面 1.5:1 门上方。<em>watch / inflection 线直到印；入场只在确认 1h close 高于 flip 且 leg 2（funding）re-clearing OR leg 1（TD9）重堆</em></span></div>
                <div><span className="dn-lvl-k">leg 2 重激活条件</span><span className="dn-lvl-v bear">要再过 leg 2（funding short-pay ≥ 4h）、funding 盘面需要印一根新的连续负 streak ≥ 4h 或 24h 均值低于 ~−0.5% —— 现在 2.42h 最长 streak 与 +1.46% 均值、两者都远在门外</span></div>
                <div><span className="dn-lvl-k">stop（如果入场）</span><span className="dn-lvl-v bear">1h close &lt; $59,154（06-06 投降低 —— 今天 24h 低 $62,430 高于那 +$3,277、lineage 投降低仍是 stop 参考；新投降印让超卖计数读失效）</span></div>
                <div><span className="dn-lvl-k">规模</span><span className="dn-lvl-v">0.2R only · 半在周期锚重夺 $72,937 取、runner 到 D-SMA50 簇 ~$75k 区</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R 框架（按走开 inflection 重算）：</b>{' '}
                触发 $64,351 / stop $59,154 = $5,197 风险；第一目标
                $72,937 = $8,586 回报 = 1.65:1（在桌面 1.5:1 门上方
                但自 06-07 的 2.15:1 温和退）。<b>入场允许在确认 1h
                close 高于新 flip $64,351</b> AND 只在 leg 2 已 re-clear
                （新连续负 streak ≥ 4h 在 funding OR 24h 均值 &lt; ~−0.5%）
                OR leg 1 已重堆（新 TD9 BUY 在第二根周期框）。06-07
                触发 $63,538 在 06-08 确实印多小时但 dealer flip 跟着
                反弹向上走 —— 桌面在日 00:05Z 自动化节奏下没有实时
                执行窗在那个印上、inflection 已经在快照读上离开前
                level。scout NON-ACTIONABLE 因为 leg 2 失败 + leg 1
                收窄；触发在现货上方 $1,309 但周围升级门退了。{' '}
                <b>硬规则：</b>无 TD9-only 入场不带 leg-3 flip 在新 level
                重夺；不在一框 ⚡ TD9 BUY 簇上加（vs 06-07 的三框簇是
                原始升级）；leg 3 单独印也不入场除非 leg 2 re-clear OR
                leg 1 重堆。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 200W 周期地板 watch 在多头一侧<em>落地</em>（06-08 周收 $63,058 印在全史 W-SMA200 $62,019 上方 +$1,039 / +1.68%）· watch 从 active 转到&ldquo;首根收上方守住&rdquo; —— 本处无新交易触发、但更广周期的结构性支撑读保留为参考</span>
              <div className="dn-trade-name">
                200W 周期地板 watch —— 在多头一侧<em>落地</em>；06-08 周收 $63,058 印在全史 200W $62,019 上方 +$1,039 / +1.68%、06-07 watch 结构性测试过
              </div>
              <div className="dn-thesis">
                runbook §2 200W 支撑读把全史 W-SMA200 标作周期地板 ——
                一根周收在 ~5.19% 的周下面（8 / 154 个有效 200W 观测
                在本桌面全史 parquet 序列上、W-MON / closed=&lsquo;right&rsquo;）、
                集中在深周期投降。06-07 watch 问的是未收周 bar（W-MON
                锚到 06-08）能不能回到 $62,008 或上方收盘以避免周度
                口径上首次 200W 地板破。今天的答案：<em>能</em>。06-08
                周收印在 $63,058、+$1,039 / +1.68% <em>高于</em>新全史
                W-SMA200 $62,019（level 本身抬 +$11、因为滚动 200 周
                窗丢掉旧低头一根、补上未收 06-08 周 bar 在接近值）。
                这是自 06-01 破位以来首根周收高于全史 200W、周期 thesis
                的结构性测试（intact mid-cycle 回调 vs cycle-top 回调）
                在多头一侧落地。watch 从 active 转到<em>首根收上方守住</em>；
                历史频率脉络仍是参考性 —— 单一周收高于 level 本身不是
                长侧入场（连续簇才是有意义模式）、但熊侧尾巴 thesis 在
                这次落地中结构性弱化。weekly_200sma.json 文件仍不在
                服务器（连续第四篇）；按 runbook 退回、全史计算继续是
                数据源。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W watch 源</span><span className="dn-lvl-v">weekly_200sma.json 不在（连续第四篇；谱系延续）· 按 runbook §2 退回：自 2019-09-09 起全史 parquet 计算、200 根已收周 bar 截至 06-08、W-SMA200 = $62,019（自 06-07 的 $62,008 抬 $11 —— 滚动窗丢掉旧低头一根、补上 06-08 收 $63,058）</span></div>
                <div><span className="dn-lvl-k">06-08 周收 vs 200W（落地）</span><span className="dn-lvl-v bull">$63,058 对 $62,019 = +$1,039 / +1.68% 上方 —— 自 06-01 破位以来首根周收高于全史 200W；06-07 watch 在多头一侧落地</span></div>
                <div><span className="dn-lvl-k">现货 vs 200W（本快照）</span><span className="dn-lvl-v bull">现货 $63,042 − 200W $62,019 = +$1,023 / +1.65% 上方（缝从 06-07 的 −1.73% 翻 +3.38pt、因为现货回收 +$2,109 且 200W 只抬 $11）</span></div>
                <div><span className="dn-lvl-k">06-07 日收 vs 200W</span><span className="dn-lvl-v bull">$63,298 对 $62,019 = +$1,279 上方（那天回收 +$2,448 收对收、后插针窗最大单日抬）</span></div>
                <div><span className="dn-lvl-k">06-09 未收日收 vs 200W</span><span className="dn-lvl-v bull">parquet anchor row 00:05Z 收 $63,022 对 $62,019 = +$1,003 上方</span></div>
                <div><span className="dn-lvl-k">历史脉络（参考）</span><span className="dn-lvl-v">8 / 154 个有效 200W 观测显示周收在 level 下方 —— ~5.19% 的周、集中在深周期投降 · 按 runbook do-not-fabricate、单独落地不主张 percentile / break-event、只露出 level + 06-08 周收对 200W 缝</span></div>
                <div><span className="dn-lvl-k">watch 处置</span><span className="dn-lvl-v">在多头一侧<em>落地</em> —— watch 从 active 转到&ldquo;首根收上方守住&rdquo;；本处无新交易触发。更广周期的结构性支撑读跨后续备忘保留为参考；新一根周收印在下方再开熊侧 watch</span></div>
              </div>
              <div className="dn-gating">
                <b>watch 落地。</b>06-08 周收高于全史 200W 是结构性
                地板支撑信号、关掉下行段最激进的熊读；但按 runbook
                纪律、单一周收高于 level 本身不是长侧触发。上文
                mean-revert 长 scout 是可操作的卡片如果它的腿重堆
                （现在 3 中 1 过）；200W 重夺是单独的更广周期信号、
                现在在多头一侧落地。如果未来一根周收印在 $62,019 下方、
                watch 在熊侧重开、06-07 框架的周期 thesis 重评估重适用；
                没有这种重测、落地继续带过。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 200W 周期地板在周收上<em>重夺</em>（06-08 $63,058 对 $62,019 = +$1,039 上方）—— 06-07 watch 在多头一侧落地 · 现货自 06-07 回收 $2,109 到 $63,042（+3.46%、窗内 06-08 高 $64,190）· 7JUN +3.87M 与 8JUN −2.29M 前段块都在 inter-note 窗内结清、今天的 9JUN +2.26M 是 8JUN 负向之后的下一根正向前段块、08:00Z 结算仍待定（8h 前、本锚上尚未结算）· mean-revert 长 scout：leg 3 在 06-08 多小时触发但 dealer flip 跟着反弹走到 $64,351；重定 R/R = 1.65:1；leg 2（short-pay regime）杠杆放气之后 FAILED；leg 1（TD9 簇）从三收窄到一 + 一待定 · 宏观周五印落地：10Y +8bp 到 4.55% 门<em>触发</em>、HY OAS +2bp 门距触 2bp、reclaim-long rates filter 在边界 · $60k 崩跌 put 墙再深到 −34.00M（06-07 是 −26.19M）</span>
            </h2>

            <p>
              06-07 决策条件里：7JUN26 到期结算<em>干净触发</em>
              （+3.87M 在 08:00Z 06-07 结清）AND 8JUN26 结算<em>干净
              触发</em>（−2.29M 在 08:00Z 06-08 结清、两次都在 inter-note
              窗内）；dealer 本子边际修复（+$2.0M 到 −36.7M、较 06-07
              谱系最大 +$14.8M 小、仍净空）；现货延伸尾巴<em>没触发</em>
              （24h 低 $62,430 高于 06-06 lineage 低 $59,154 +$3,277、
              后插针地板在 inter-note 两天里都守住）；周末-周收尾巴
              <em>在多头一侧落地</em>（06-08 周收 $63,058 印在全史
              W-SMA200 $62,019 上方 +$1,039、自 06-01 起首根周收高于）；
              mean-revert 长 scout leg-3 触发 $63,538 在 06-08 多小时
              触发（最大 1h close $63,936.50 在 2026-06-08 15:00Z）但
              dealer flip 跟着反弹走 +$813 到 $64,351 —— inflection
              追着价走、scout leg 2（funding short-pay ≥ 4h）在杠杆放气
              regime 上现在 FAILED；周期延伸 watch 仍 CLOSED-VINDICATED
              今天的盘面无新单分钟敌对-2 签名；宏观周五 FRED 印在 06-08
              22:17Z 渲染落地、rates re-grow 门 4.53% 在带过去的周五收
              <em>触发</em>（10Y +8bp 到 4.55%）、HY OAS 门朝触移到距
              2bp（+2bp 到 2.76%）、reclaim-long rates filter（10Y &lt;
              4.55%）现在<em>在</em>边界。今天的条件重设围绕结构性<em>
              重夺</em>的 200W 周期地板在周收上、一段 7JUN-干净 / 8JUN-
              负向 / 9JUN-待定的前段块序列（下行段第一根正向前段块
              清出、然后插过一根负向、然后今天的正向块在 8h 之前的
              结算上仍待定）、一根走开的 dealer flip 在 $64,351、一个
              退后的 mean-revert 长 scout（leg 2 失败、leg 1 收窄）、
              以及刚反向对 reclaim-long 站位的宏观盘面：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>level</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>9JUN26 到期结算（今天 08:00Z、~8h 前）</td><td className="bull">+2.26M 正向前段块在 08:00Z 结算；8JUN −2.29M 负向之后的下一根正向前段块（<em>本锚上尚未结算</em> —— 待 8h 前的印；7JUN +3.87M / 8JUN −2.29M 都在 inter-note 窗内结清）；除 9JUN 后 aggregate ≈ −38.96M（在前向残差口径上轻微更差、因为清出的是正向块、留下负向尾巴；但前段衰减形本身延续 06-07 正向前段模式）</td><td>watch 结算印；如果结算干净印没有动作必要 —— 如果印出 vol 事件、重评估 cover-bounce scout 的 dealer 修复腿与 leg-3 走开 flip 动态</td></tr>
                <tr><td>200W 周期地板重夺（落地多头；06-08 周收 $63,058 对 $62,019 = +$1,039 上方）</td><td className="bull">落地 · 06-07 watch 转：首根收上方守住 · 结构性地板支撑印在多头一侧</td><td>本处无新交易触发；落地继续带过作为参考性结构支撑脉络 · 未来一根周收在 $62,019 下方再开熊侧 watch</td></tr>
                <tr><td>Mean-revert 长 scout（leg 3 走到 $64,351；R/R 1.65:1 重定）</td><td className="bull">1h close &gt; flip $64,351 与 OI 仍建 / 不塌 · 触发在现货上方 $1,309 · 重算 R/R 1.65:1 在触发 $64,351 / stop $59,154 / 第一目标 $72,937 —— 过 1.5:1 门（自 06-07 的 2.15:1 退、因为 flip 跟着反弹向上走）</td><td><em>scout 长 0.2R ONLY 在确认 1h close 高于新 flip $64,351 AND 只在 leg 2 已 re-clear（新 ≥4h 连续负 streak OR 24h 均值 &lt; ~−0.5%）OR leg 1 已重堆（新 TD9 BUY 在第二根周期框）</em>带入场-bar cover-shape 检查；半在周期锚 $72,937 取、runner 到 D-SMA50 簇 ~$75k</td></tr>
                <tr><td>Mean-revert leg 2 FAILED（funding short-pay ≥ 4h）</td><td className="bear">最长连续负 streak 2.42h（vs 4h 门）；24h 均值 +1.46%（自 06-07 −0.13% 翻正）；负分钟份额 28.11%（06-07 72.80%）；杠杆本子实质性放气</td><td>这条升级腿不再过；支撑 mean-revert 前提的&ldquo;funding 付给空&rdquo;regime 不再成立 · 重激活需要新 ≥4h 连续负 streak OR 24h 均值 &lt; ~−0.5% 在新印上</td></tr>
                <tr><td>Mean-revert leg 1 收窄（TD9 BUY 簇）</td><td className="bear">一并发框（3d）+ 1M 待定（06-07 是三并发：12h / 1d / 3d）；12h 与 1d 走过 TD9 到 Sell 5 / Sell 1 在反弹形里、8h 重置到 Buy 1</td><td>这条升级腿薄化；重激活需要新 TD9 BUY 在第二根周期框（最可能再印候选是 8h 或 12h 在一根新的下行段超卖计数上）</td></tr>
                <tr><td>Cover-bounce scout（长）—— DROPPED 带过；legs 2 + 3 今天退</td><td className="bull">需要 1d close &gt; $72,937 AND aggregate GEX 翻回 &gt; 0 AND 1h cover-shape 印 —— leg 2（dealer 修复）走 +$2.0M 到 −36.7M（较 06-07 的 +$14.8M 小；仍净空）；leg 3（cover-shape 流）在 4h 窗软化（futures 一侧平、taker-net 温和负 —— 06-07 是每根字段净买）；leg 1（锚重夺、结构性门）不动在 ~$9.9k 头顶但近 $2.1k 因为现货回收</td><td>无入场 · 路径今天在 legs 2 + 3 退、仍门控在 leg 1（锚重夺）；200W 在周收上的重夺是结构性地板支撑、不是 cover-bounce 触发 —— cover-bounce 路径仍锚门</td></tr>
                <tr><td>周期延伸节奏（CLOSED-VINDICATED 带过；今天无新敌对-2）</td><td className="stale">24h 盘面无单分钟 Δnet ≤ −3k 印；最接近形是 BJ 12:31 06-08 / UTC 04:31 06-08 SM net 谷 −41,676 → BJ 19:31 06-08 / UTC 11:31 06-08 SM net 峰 −37,475（60-min cover-shape、敌对-2 方向反向）</td><td>每根新 Δnet ≤ −3k 或 Δnet ≥ +3k 印作为信号本身读 —— 无时间先验 · 重堆敌对-2 签名仍是有意义的盘面读、印的时候算、只在无 calendar 口径上</td></tr>
                <tr><td>HY OAS 宏观 re-grow 门（周五印落地）</td><td className="bear">2.76%（距触 2bp —— 06-07 是 4bp；周五收朝 2.78% 门移 +2bp）</td><td>在带过去的周五收上距触 2bp、门有实质性接近 · 监测下一根 Tier-1 日印 first fire</td></tr>
                <tr><td>10Y rates re-grow 门<em>触发</em>（周五印落地）</td><td className="bear">4.55%（门 4.53% <em>触发</em> —— 06-07 是 4.47%；周五收过门 +8bp）</td><td>rates re-grow 门在周五收上触发；单门触发而 credit 门没触发仍不是完整 credit-led re-grow 信号 —— rates 动也与非-credit 驱动的供给 / term-premium 动一致 · 监测下一根印 credit 确认</td></tr>
                <tr><td>Reclaim-long rates filter 在边界</td><td className="bear">10Y &lt; 4.55% close —— <em>在</em>边界 4.55%（filter 是严格 &lt;、现在 4.55% 读&ldquo;在边界&rdquo; —— 没触发长侧 disqualifier 但不再像 06-07 那样有 6bp 余地）</td><td>下一根印再扩 1bp 就在结构上 disqualify 长侧 rates filter；宏观一侧已经实质性反向对 reclaim-long 站位</td></tr>
                <tr><td>$60k 崩跌 put 墙<em>再深</em>（dealer 本子画了新的去稳器）</td><td className="bear">−34.00M（06-07 是 −26.19M、−$7.81M 重 —— 后插针窗内最大单 strike 负 γ 再加；现货 $63,042 在 strike 上方 +$3,042、墙翻角色成下行去稳器如果现货重测 level）</td><td>墙本身不触发入场但标 $60k 重测的 dealer 一侧不对称性 · 与 mean-revert scout 的 leg-1 / leg-3 联动监测</td></tr>
                <tr><td>BTC↔NQ 跨资产轮动（regime IDIOSYNCRATIC、BTC↔NQ 配连续两篇 firm）</td><td className="stale">|r| 0.232（对 06-07 的 0.233 基本平）；BTC↔NQ +0.227（自 +0.188 抬 —— 再 firm +0.039 连续两篇、滚动 7d 窗吸入 06-07 / 06-08 共同回收印）；BTC −11.54% vs NQ −3.01% 缝 −8.53pt（自 −13.26pt 收窄因为两侧都回收）</td><td>BTC 盘面现在回收进部分回收的 TradFi 盘面（NQ 较 06-07 读周对周 +1.48pt）—— 轮动从 06-07 的 BTC-单独延展形翻面到 BTC-回收-进-回收 TradFi 形 · 跨资产在交易处方上仍 IDIOSYNCRATIC</td></tr>
              </tbody>
            </table>

            <p>
              重写<em>本</em>篇的单一句线是{' '}
              <span className="dn-signal">
                mean-revert 长 scout 重定 leg-3 触发在走开 flip $64,351
                上能不能印出一根确认 1h close、与此同时 leg 1（TD9 簇
                在第二根周期框上重堆）或 leg 2（funding short-pay regime
                重过 4h 门）至少有一条回到 cleared 名单、又或者周一美开
                新一根宏观 Tier-1 印把 10Y 推过 4.55% reclaim-long filter
                / 把 HY OAS 推过 2.78% credit re-grow 门 —— 各自分别
                disqualify 长侧 rates filter 或触发完整 credit-led re-grow。
                200W 周期地板在周收上结构性重夺；下行段低在 inter-note
                两天里都守住；dealer 本子边际修复、7JUN 前段放大器干净
                清出。但 dealer flip 跟着反弹走 +$813、宏观周五印反向
                对 reclaim-long 站位、mean-revert scout 的 leg 2 在杠杆
                放气 regime 上失败、$60k 崩跌 put 墙再深 −$7.81M、因为
                dealer 本子在现货最近坐过又离开的 strike 上画了新的
                去稳器。问题现在是结构性地板支撑落地能不能通过走开 leg-3
                触发与一条重过升级腿转化为干净周期 thesis 回收、还是
                宏观 rates 动与 dealer $60k 再装把现货推回测试 06-08
                周收刚印上方的周期地板
              </span>。直到那时本篇按写的跑：runner 与看跌价差尾仓都
              closed、cover-bounce scout 在价平面上 dropped 且 legs 2 + 3
              对 06-07 退、短框架 watch CLOSED-VINDICATED 无新敌对-2、
              mean-revert 长 scout 在 leg 2 FAILED + leg 1 NARROWED + leg 3
              走到 $64,351 的状态下 NON-ACTIONABLE、200W 周期地板 watch
              转到&ldquo;首根收上方守住&rdquo;。BTC-vs-TradFi 脱钩收窄到 −8.53pt
              因为两侧都回收进滚动 7d 窗；引擎 MTF 框走过 TD9 簇 12h
              黄金叉刚印；dealer 本子在 aggregate 上边际改善但在现货和
              现货下方再装负 γ；杠杆本子实质性放气 funding 翻回正、
              后插针窗第一次。下一根 24h 的对读是{' '}
              <em>耐心 —— watch 9JUN 结算解、周一美开宏观 Tier-1 印
              credit 确认或 rates 抬、以及新 flip $64,351 上方的一根
              1h close —— 这三根外部印重写呼叫</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2（已过 codex 敌对式审计 · findings 记于 audits/2026-06-09-desk-note.md）
            </span>
            <b>状态：</b>本篇是 STAGE C 在 btc-fetcher 服务器日常运行
            里、在 STAGE B 跑过 codex 敌对式审计之后发出的 v2 EN
            promotion。完整 audit 记录在{' '}
            <code>audits/2026-06-09-desk-note.md</code>、是 v1 → v2 修
            通的权威；STAGE C 没有重跑 audit、也没有改 audit 文件。{' '}
            <b>STAGE B 判决：</b>BLOCK-CRITICAL —— 1 CRITICAL、
            4 MAJOR、5 MINOR；build proxy{' '}
            <code>npx --no-install tsc --noEmit</code> 退 0；完整{' '}
            <code>next build</code> 仍被环境阻塞（Node 18.19.1 vs
            Next.js <code>&gt;=20.9.0</code>）。{' '}
            <b>STAGE C 修通：</b>10 条 findings 全部就地修。{' '}
            <em>DN-001（CRITICAL）</em>：&ldquo;连续两根正向前段块结算&rdquo;
            叙事和&ldquo;干净衰减&rdquo;框架在 manifest、lead、dealer 图章节 +
            段落、短 scout 块、决策条件章节 + 表 + 段落、签名行上全部
            重框成&ldquo;8JUN 负向之后的下一根正向前段块、08:00Z 结算待定
            （本快照锚上尚未结算）&rdquo;。<em>DN-002（MAJOR）</em>：每根
            live_db.<code>t</code> 值都按 BJ-local 转换、UTC 计算为
            BJ − 8h、显示形规范化为{' '}
            <code>BJ HH:MM MM-DD / UTC HH:MM MM-DD</code>、覆盖
            funding 谷 / 最大、负 / 正 streak 端点、OI 峰 / 谷、SM
            long_btc 与 short_btc 峰 / 谷、SM net 谷 / 峰、在 manifest /
            meta 带 / 段落里。<em>DN-003（MAJOR）</em>：头量 24h 价 / OI
            / spot CVD / futures CVD 的 08:04 BJ 基线在现货段、OI manifest
            cell、窗化流段里明文标作&ldquo;t == &lsquo;06-08 08:04&rsquo;
            BJ-local / UTC 00:04 06-08、比 08:05 锚早 1 分钟&rdquo;、
            funding 分母仍用 08:05 锚精确行。<em>DN-004（MAJOR）</em>：
            窗化流引言句从&ldquo;在 spot CVD 上净卖&rdquo;改写为&ldquo;在 spot CVD 上
            bid 但在 futures CVD 与 taker-net 上净卖&rdquo;、与正 spot CVD
            Δ +2,601 对齐。<em>DN-005（MAJOR）</em>：每个&ldquo;parquet 最末
            bar 2026-06-09 00:05Z&rdquo;都改成&ldquo;parquet anchor row
            2026-06-09 00:05Z&rdquo;、明文标出物理最末行是 00:06Z
            （$63,069.30）；改动覆盖 manifest、lead、MA 段、IV/RV 段、
            200W watch 交易块。<em>DN-006（MINOR）</em>：retail long-pct
            谷时间戳从 BJ 17:51 06-08 改正成 BJ 01:06 06-09 / UTC
            17:06 06-08。<em>DN-007（MINOR）</em>：funding 谷-对-snap 缝
            从 <code>$0.015 浅</code>改成{' '}
            <code>0.015pt 浅</code>、覆盖 meta 带与 funding 段。{' '}
            <em>DN-008（MINOR）</em>：宏观表 Fed 净流动性 Δ 列从{' '}
            <code>0.000T</code> 改成 <code>−0.038T</code>、标为源面板
            WoW。<em>DN-009（MINOR）</em>：v1 草稿里那个 RV 旁注&ldquo;最后
            29 returns / 30 closes 读 39.50%&rdquo;在 audit 复算里没复现、
            已删除；主 30-return / 31-close 39.30% 值是源支持保留。{' '}
            <em>DN-010（MINOR）</em>：宏观渲染日描述从&ldquo;Sunday-evening
            UTC 渲染&rdquo;改成&ldquo;Monday-evening UTC 渲染&rdquo;、对应
            2026-06-08 22:17Z 时间戳。{' '}
            <b>STAGE A 纪律继承：</b>滚动源归档政策按 runbook §1
            （snapshots/2026-06-09-0008/ 容纳 mtf_div_latest.html /
            btc_gex.html / macro_dashboard.html /
            cross_asset_correlation_summary.md 在读前归档）、BJ-local{' '}
            <code>t</code> 约定按 runbook §2（pin row{' '}
            <code>t == &ldquo;06-09 08:05&rdquo;</code> BJ-local / UTC
            00:05Z、转换现按 DN-002 修一致应用）、完整 MA 矩阵（日 AND
            周、SMA AND EMA、n ∈ {`{20, 50, 100, 150, 200}`}）在
            2024-2026 子集下按 06-02 audit DN-005 桌面政策延续、带全史
            参考给 200W watch、funding × 1095 年化（不是 ×1095×100）、
            SM cut fraction 算成 |Δ|/prior_net 对 06-07 pin（无 06-08
            备忘 —— 上一根 pin ~48h 前）、claims ≤ data 按 runbook §3
            （NTT / max-pain / strike-IV / BTC-NQ 比率明文 framework
            only）、requireViewer 门控按 runbook §4 作为默认 export
            首语句。{' '}
            <b>v2 audit 参考：audits/2026-06-09-desk-note.md（判决
            BLOCK-CRITICAL · 1 CRITICAL / 4 MAJOR / 5 MINOR · 10 条
            findings 在本 v2 修通里全部就地修）。</b>
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体
            情况个性化。数字反映单一原子快照（2026-06-09 00:05Z、BJ
            08:05 06-09）、provenance 在数据来源条带中按节披露；宏观
            Tier-1 面板渲染 2026-06-08 22:17Z（比快照早 ~1h 48m）、
            周五 06-05 FRED 日印现已落地（06-07 那道周末 FRED 冻结
            部分解封）。滚动 MTF / GEX / 跨资产制品在读前归档到
            snapshots/2026-06-09-0008/。水位、规模与条件是交易台流程
            的示例、不是长期推荐。过去的相关性、γ 与仓位模式不绑定
            未来盘面。衍生品有全损风险、加杠杆下损失可超过保证金。
            <em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                200W 周期地板在 06-08 周收上重夺 —— 06-07 watch 在多头
                一侧落地。7JUN 前段放大器干净清出（中间 8JUN 一根负向
                插过）、今天 9JUN +2.26M 正向块在 08:00Z 8h 之前的结算
                上仍待定、杠杆本子放气、现货在每一分钟都守住地板上方。
                但 dealer flip 跟着反弹向上走 +$813、宏观周五印反向
                对 reclaim-long 站位 rates、mean-revert scout leg 2 在
                funding 翻面上 failed、leg 1 收窄到一并发框。耐心 ——
                watch 9JUN 结算、周一宏观 Tier-1 印、以及走开 flip
                $64,351 上方一根 1h close。
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
            v2 · 2026-06-09 00:05Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
