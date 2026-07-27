import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-07-27 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-07-27',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-07-27' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260727() {
  await requireViewer('/zh/desk/2026-07-27');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-07-27 · v2</span>
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
              <span className="dn-big">$65,251</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+1.33%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-07-27 00:06Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-07-27 00:06Z（snapshot pin，t == &ldquo;07-27 08:06&rdquo; BJ）</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · 锚钉在 00:06Z 那行（BJ 08:06）作复现 ·
                    文件 tail 在脚下滚动 · 24h 窗口约定：头部 delta 用同一
                    时钟前一日基线 t == &ldquo;07-26 08:06&rdquo; BJ（端点减
                    24h-ago 行）· funding / flow 行统计跨 1,441 行窗口 · 溢价
                    均值排除 null 行
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-07-27 08:01 BJ scan（00:01Z）</td>
                  <td className="dn-flag">
                    滚动 latest 文件 · 逐字存档于
                    /opt/desk-note/snapshots/2026-07-27-0006/ · 较快照锚滞后
                    约 5 分钟 · 含未收盘 K 线 · 扫描现货 $65,347、24h +1.58%
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-27 00:00Z 快照</td>
                  <td className="dn-flag">
                    滞后约 6 分钟 · Deribit idx $65,571 对 live $65,251 · IV
                    中位数 42.5% · 头部 aggregate +191.1M 对 by-expiry rollup
                    +211.84M（= gex_summary.json net_gex $211,840,285）——
                    一根 ~+20.74M 不对账的 source-panel 缺口、按 DN-003
                    谱系披露（rollup 又坐在头部上方、与 07-25/07-26 缺口同号）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-27 00:00Z
                  </td>
                  <td className="dn-flag">滞后约 6 分钟 · 7d 1h bar · 22 资产 · 167 rows · 已存档</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-26 22:16Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.85h · FRED Tier-1 日度利率在周末 FROZEN
                    （07-25 六 / 07-26 日）—— 10Y 4.71%、TIPS 2.43%、HY OAS
                    2.77% 都带着与 07-26 备忘同一水位（面板 Δ 列反映的是上
                    一根走完的 FRED 动、不是周末重印）· 只有连续报价的 FX
                    动了（DXY −0.24 到 101.24、USD/JPY 163.6）· MOVE 抓取
                    失败 · Fed 净流动性 $5.917T（无新周度印）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-07-27 00:05Z（close $65,254.70）</td>
                  <td className="dn-flag">
                    同分钟锚 · 偏移按 live 现货 $65,251.07 重算 · W-SMA200
                    在 2023–2026 MA 子集（187 根周 bar）下不可计算；W-SMA150
                    可算但远在头顶 / 弃用 $76,683 —— 200W 周期地板本身从全
                    历史 / trap-watch 状态可得，见下一行
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W 支撑盯位</td>
                  <td className="dn-v-cell">ma200w_trap_watch_state.json · 重算 2026-07-27 00:11Z</td>
                  <td className="dn-flag">
                    200W 周期地板可得且维护中 —— 上一根走完的周 2026-07-26
                    收 $65,375.10、W-SMA200 $63,311.02、consecutive_above 4
                    （streak 自 2026-07-05）；完整 btcusdt_1m_*.parquet glob
                    （360 根周 bar、2019–2026）独立重算走完周 W-SMA200 到
                    $63,311.02。已定地板 $63,311（现货 +3.06% 上方）；MA 子集
                    里最近的一根可算线在其上方是 D-SMA50 $63,328.24（+3.04%）
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
                  <td className="dn-flag">相关主张明确为 framework only（btc_ntt_analysis.html JS 渲染、不可抽取）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dn-meta">
            <div>
              <span className="dn-k">funding · 8h 年化</span>
              <span className="dn-v">+6.72%</span>
              <span className="dn-src">live · 24h 均值 +6.24%（07-26 是 +4.24% —— 再热）· max +10.24% ann（0.009348 字段、1 / 1441 行 @ 07-26 20:35 BJ / 12:35Z）· min +3.65% · 0 / 1441 负行 · funding × 1095（原始 0.006134）</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">从 07-26 冷却里再热</span>
              <span className="dn-src">区间 +3.65% / +10.24% · 均值 +4.24% → +6.24% ann · 仍 0 / 1441 负 —— 多头在重夺里又付更多费，杠杆在多侧重新拥挤，即使 SM 在减、retail 在走</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bull">−2.86%（−3,075.5 BTC）</span>
              <span className="dn-src">live · 107,503.6 → 104,428.2 · 下腿的三扩张分布在上印上 REVERSED 成一根收缩 —— 空头回补 / 去杠杆，不是 scout 被武装去买的那种需求驱动 OI 扩张</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bull">60.92 / 39.08</span>
              <span className="dn-src">live_db `mkt_long_pct` · 泄拥挤 64.23 → 60.92（24h 高 64.51 @ 07-26 09:11 BJ / 01:11Z、基线 64.23、低 60.92 @ 快照）—— 本轮恢复里最不拥挤的一读，离 07-24 高 65.93</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bull">+2,743（净 LONG、第 3 天减）</span>
              <span className="dn-src">live · long 13,029.90 − short 10,286.74 = +2,743.16 · 自 07-21 06:36Z 交叉起连续净多 · net 峰 +5,618 @ 07-26 14:36 BJ（06:36Z）此后泄到 +2,684 谷 @ 07-27 07:46 BJ（23:46Z 07-26）近快照 —— 本轮恢复最薄的一根净多</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 24h-ago</span>
              <span className="dn-v bear">+5,093 → +2,743（−2,350、−46.14%）</span>
              <span className="dn-src">|Δ|/prior_net = 2,349.72 / 5,092.88 = 46.14% · Δlong −446.2 / Δshort +1,903.5 —— 记录在案的买家几乎没砍多、却在重夺里 ADD 了 +1,904 空：仍净多、但在建一条空腿，正是 re-arm 门要的「SM 加」的反面</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">42.5% / 30.12%</span>
              <span className="dn-src">GEX IV 中位数 · N 合约链中位数、不是可交易价差 · 30D close-to-close RV = logret.std × √365 × 100、30 根日 return（parquet 最末 bar 00:05Z）· ~+12.4pt 链级溢价 · 29-return 另一口径 30.42%</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+4.18%（在上方）</span>
              <span className="dn-src">flip $62,632 · 对 live 现货 $65,251（+4.18%；65,251.07/62,632 − 1 = 4.181%）/ GEX 文件 Deribit idx $65,571（+4.69%；65,571/62,632 − 1 = 4.692%）—— 两参考都正、tile 取现货侧 · aggregate +191.1M 头部 / +211.84M rollup · 从 07-26 的 +131.5M / +151.83M 再 gamma 更深</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                整条恢复挂了闸的那根 D-EMA50 cap 终于在一根走完的上收上被
                重夺 —— 但它印在错的燃料上、而记录在案的买家还在减
              </span>
              。07-26 收
              <span className="dn-tag bull"> $65,375.10</span>（比 07-25 的
              $64,338.10 高 +$1,037.00）—— 第二根连续上收、也是第一根重新
              收回 <span className="dn-tag bull">D-EMA50 $65,062 cap</span>
              上方（该 cap 在 07-23 丢测试后翻成头顶阻力）—— 现货报
              <span className="dn-tag bull"> $65,251（+1.33% 在 24h）</span>、
              <span className="dn-tag bull">在 cap 上方 +0.29%</span>。这是 scout
              re-arm 门的价格腿、终于落了。但重夺来在门明确排除的内部上。
              OI <span className="dn-tag bull">收缩 −2.86%（−3,075.5 BTC）</span>
              —— 下腿的三扩张分布翻成一根空头回补 / 去杠杆收缩、不是 scout
              要的需求驱动 OI-up。smart money —— 仍是记录在案的买家、净多
              <span className="dn-tag bull"> +2,743</span>、自 07-21 06:36Z 交叉
              起连续 —— <span className="dn-em">连续第三天减、砍净 −2,350
              （−46.14%），做法是几乎不碰多（−446）却 ADD 空（+1,904）</span>：
              它用重夺去建一条空腿、正是门要的「SM 加」的反面。而
              reclaim-long 利率筛<span className="dn-tag bear">连续第四天
              FALSE</span>（10Y 周末冻在 4.71%、在 4.55% 闸上方）。所以门现在
              从中间劈开 ——
              <span className="dn-em">价格腿 TRUE（D-EMA50 重夺 + 上收），
              流 / 利率腿 FALSE（OI 收缩不是需求扩张、SM 减且做空不是加、
              利率 FALSE）</span>。funding 再热（24h 均值 +4.24% → +6.24% ann）、
              retail 泄拥挤泄得狠（64.23 → 60.92、本轮恢复最不拥挤），一读
              混色的杠杆：retail 多更少、但剩下的在付更多费。本篇保持 scout
              <span className="dn-em"> 递延、本子 FLAT</span>：不在一根记录
              在案的买家在退、利率 FALSE 的空头回补重夺上做 scout 多；也不
              向本轮恢复最深的正 γ dealer 本子里追空，现货正爬进 $66k–$72k
              call-wall cap。价格终于做了 scout 等的事 —— 仓位本子没有确认它。
            </p>

            <p>
              BTC 报 <span className="dn-tag">$65,251</span> live、
              <span className="dn-tag bull">+1.33%</span> 在 24h —— 第二根
              连续 24h 上印、也是两根里更大的一根 —— 在一条
              <span className="dn-tag">$65,530 / $64,294</span> 区间里（高 @
              07-27 07:10 BJ / 07-26 23:10Z、低 @ 07-26 14:25 BJ / 07-26
              06:25Z）。<span className="dn-signal">四段下腿现在已经翻了两
              根上收、重夺了它的 cap</span>：07-21 $66,522.40 → 07-22
              $66,082.00 → 07-23 $65,069.60 → 07-24 $64,116.50 → 07-25
              $64,338.10 → 07-26 <span className="dn-tag bull">$65,375.10
              （+$1,037.00）</span>、未收盘的 07-27 在 parquet 最末 bar
              <span className="dn-tag"> $65,254.70</span> 守在 cap 上方。MA
              矩阵读成一道修复到 cap 的阶梯：现货坐在重夺的
              <span className="dn-tag bull"> D-SMA20 $64,418（+1.29%）</span> /
              <span className="dn-tag bull"> D-EMA20 $64,478（+1.20%）</span>
              对上方、在 <span className="dn-tag bull">D-SMA50 $63,328
              （+3.04%）</span>上方、现在
              <span className="dn-tag bull">在 D-EMA50 $65,062 上方 +0.29%</span>
              —— 那根在 07-23/07-26 是丢掉的 cap、现在是 pivot。头顶下一根
              阻力是 <span className="dn-tag bear">D-EMA100 $67,731（−3.66%）</span>、
              但 dealer $66k–$72k call-wall 带夹在中间。
              <span className="dn-em">
                200W 周期地板本次可得且维护中：trap-watch 状态
                （ma200w_trap_watch_state.json、重算 2026-07-27 00:11Z）带着
                上一根走完的周 2026-07-26 在 W-SMA200
                <span className="dn-tag bull"> $63,311.02</span>、四根连续周
                收在其上方，完整 btcusdt_1m_*.parquet glob（360 根周 bar、
                2019–2026）独立重算同一根 $63,311。所以 $63,311 是已定地板
                （现货 +3.06% 上方）、可算的 D-SMA50 $63,328（+3.04%）就在
                其上一点作 MA 子集里最近的支撑。
              </span>{' '}
              scout 在 07-22 因 SM 记录在案买家腿被 ARMED、在 07-24 D-EMA50
              重夺丢掉时转 DEFERRED、07-25/07-26 续延；今天价格 re-arm 腿
              终于点火、但确认的流腿（OI 在买家上扩张、SM 加多）与利率筛
              没有。本子保持 flat。
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面 · 重夺在 OI 收缩上（−2.86%）—— 空头回补、不是需求 · SM 仍是记录在案买家但减 −46.14% 且连续第 3 天 ADD 空 · retail 泄拥挤到 60.92（本轮最不拥挤）· funding 再热 · perp 仍折价</span>
            </h2>

            <p>
              <span className="dn-signal">
                重夺是一根现货领头的空头回补 markup、不是 scout 被武装去买
                的需求驱动扩张
              </span>
              。OI <span className="dn-tag bull">收缩 −3,075.5 BTC
              （−2.86%）</span>跨 24h —— 107,503.6 → 104,428.2 —— 逆转了
              下腿的三根连续扩张。上印上、现货 CVD 跑
              <span className="dn-tag bull"> +7,178</span>（本窗无 cb_cvd
              reset）、期货 CVD 跑
              <span className="dn-tag bear"> −996.5</span>、taker-net
              <span className="dn-tag bear"> −992.4</span>、大单
              <span className="dn-tag bear"> −496.5</span> —— 一根持续的现货
              买盘、期货卖比 07-26 轻得多（那天跑期货 −3,619 / taker −3,646
              / 大单 −3,534）。OI 下 + 现货买盘赢 + 期货轻回补是一根
              <span className="dn-em">空头回补 / 去杠杆形</span>：价格爬是因为
              空头回补、多头变薄，不是因为新需求把 OI 堆起来。perp 在快照
              仍对现货报 <span className="dn-tag bear">−$38.72 折价</span>
              （1h 均 −$59.46、4h 均 −$60.28、24h 均 −$59.08、区间 −$231.87 /
              −$15.46 —— basis 跨 24h 从未翻升水），与一根现金 / 现货领头的
              买盘一致、不是期货领头的杠杆追。1 分钟 aggressor skew 快照
              <span className="dn-tag bear"> −9.8</span>（1h 均 −3.06、区间
              −42.9 / +23.7）—— 一档温和卖攻倾斜进快照。
              <span className="dn-em">价格上 + OI 下 + 现货买盘 + 期货轻回补
              是比 07-26 分布更干净的一根上印 —— 但它是空头回补重夺、不是
              需求领头，而 OI 收缩正是 scout「买家在 OI 后面」那条腿的反面。</span>
            </p>

            <p>
              smart money 又是最抢眼的一根、又抢在读法的偏空侧。
              <span className="dn-signal">
                记录在案的买家连续第三天减净多、做法是加空
              </span>
              。SM net 是 <span className="dn-tag bull">+2,743</span>（long
              13,029.90 − short 10,286.74 = +2,743.16）对 24h-ago 的
              <span className="dn-tag"> +5,093</span> —— 一根
              <span className="dn-tag bear"> Δnet −2,350（−46.14%）</span>
              （|+2,743.16 − (+5,092.88)| / 5,092.88 = 46.14%）。分解对重夺
              是敌对的：<span className="dn-tag bear">Δlong −446.2</span>
              （多几乎没碰）但 <span className="dn-tag bear">Δshort
              +1,903.5</span>（空实质加）。SM 没把多卖进反弹 —— 它
              <em>叠了一条空</em>。net 峰
              <span className="dn-tag"> +5,618 @ 07-26 14:36 BJ（06:36Z）</span>
              一路泄到 <span className="dn-tag bear">+2,684 谷 @ 07-27 07:46
              BJ（23:46Z 07-26）</span>近快照 —— 自 07-21 06:36Z 交叉起最薄
              的一根净多、但仍连续为正（记录在案买家腿没翻、只变薄）。
              <span className="dn-em">恢复建立的那条唯一硬腿现在用了首根上收
              （07-25、砍 −30.25%）和 cap 重夺上收（07-26、砍 −46.14% 靠加空）
              两根来降信念。smart-money 买家在淡化的重夺是要尊重的重夺、不是
              要追的重夺。</span>
            </p>

            <p>
              杠杆与拥挤两读劈开。
              <span className="dn-signal">
                funding 再热、而 retail 泄到本轮恢复最不拥挤的一读
              </span>
              ：live funding <span className="dn-tag">+6.72% ann</span>
              （原始 0.006134 × 1095）、24h 均值
              <span className="dn-tag bear"> +4.24% → +6.24% ann</span>
              （从 07-26 冷却里再热）、max
              <span className="dn-tag bear"> +10.24% ann（0.009348 字段、
              1 / 1441 行 @ 07-26 20:35 BJ / 12:35Z）</span>、min +3.65%、
              <span className="dn-tag"> 0 / 1441 负行</span> —— 多头跨整根
              窗口仍在付空头、且付得比昨天多。但 retail
              <span className="dn-tag bull"> mkt_long_pct 泄拥挤 64.23 →
              60.92</span>（24h 高 64.51 @ 07-26 09:11 BJ / 01:11Z、基线
              64.23、低 60.92 @ 快照）—— 离 07-24 恢复高 65.93、整条腿最薄
              的一根 retail 多。
              <span className="dn-em">funding 升而 retail 多计数落是一根混色
              杠杆信号：人群在变薄、但剩下的多在付更多费。合上 SM 加空、
              留在多侧的杠杆既不是 retail-broad、也不是 smart-money-backed
              —— 它是一根更窄、更高杠杆、在一根 cap 重夺里付 carry 的多。</span>
            </p>

            <p>
              窗口流向确认现货领头、空头回补的形。24h：价格
              <span className="dn-tag bull"> +1.33%</span>、OI
              <span className="dn-tag bull"> −3,075.5 BTC</span>、现货 CVD
              <span className="dn-tag bull"> Δ +7,178</span>、期货 CVD
              <span className="dn-tag bear"> Δ −996.5</span>、大单
              <span className="dn-tag bear"> −496.5 BTC</span>、taker-net
              <span className="dn-tag bear"> −992.4</span> ——
              <span className="dn-em">现货在一根上印里买得狠、OI 在缩；
              +1.33% 印在回补 + 现金买盘上、不是新多堆</span>。4h（进快照）：
              价格 <span className="dn-tag bull">+0.85%</span>、OI
              <span className="dn-tag bull"> −2,476.2 BTC</span>、现货 CVD
              <span className="dn-tag"> Δ +236.7</span>、期货 CVD
              <span className="dn-tag bear"> Δ −320.0</span>、大单
              <span className="dn-tag bull"> +90.4 BTC</span>、taker-net
              <span className="dn-tag bear"> −314.4</span> —— OI 掉的大头
              来在最后 4h、价格推向 24h 高。1h：价格
              <span className="dn-tag bear"> −0.36%</span>、OI
              <span className="dn-tag bull"> −706.8 BTC</span>、现货 CVD
              <span className="dn-tag bear"> Δ −477.9</span>、期货 CVD
              <span className="dn-tag bear"> Δ −445.3</span>、taker-net
              <span className="dn-tag bear"> −466.2</span> ——
              <em>现货和期货在快照都在给盘、价格从 $65,530 高回落；最后一
              小时是一段回踩、OI 仍在泄</em>。24h 是谱系里最干净的回补 +
              现金买盘形、但 1h 显示反弹从高位回踩、OI 仍在收缩 —— 一根空头
              回补推力丢掉第一口气。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 软化到 4 多 / 3 空 / 3 中性 —— HTF 偏空、短线反弹 · 快周期 OVERBOUGHT（RSI 71–77、顶背离簇、4h ⚡TD9 SELL）· 新鲜 1w 水下金叉 + 1M ⚡TD9 BUY + 3d/1w 底背离簇 · cap 重夺但头顶仍封</span>
            </h2>

            <p>
              <span className="dn-signal">
                引擎周期确认反弹但被拉伸、慢周期在一根仍偏空的结构下建一根
                更高周期的筑底签名
              </span>
              。00:01Z 扫描读
              <span className="dn-tag"> 4 多 / 3 空 / 3 中性</span>跨 10 个 TF、
              净读「HTF 偏空 · 短线反弹」、3d/1w 上标了一根底背离簇 —— 较
              07-26 的 1 多 / 4 空 / 5 中性软化。快周期确认且现在 overbought：
              15m RSI <span className="dn-tag bull">71.6</span>（水上金叉 10b、
              云上）、30m RSI <span className="dn-tag bull">76.9</span>（金叉
              5b、云上）、1h RSI <span className="dn-tag bull">76.6</span>
              （水下金叉 46b、云上 3b）—— 三根 overbought 快周期喂着顶背离簇
              （15m/30m/1h/1d）。4h 印一根新鲜
              <span className="dn-tag bear"> ⚡ TD9 SELL @ $65,347</span>
              （超买反转提示）、RSI 59.5、在云内 64.7k–65.8k。中周期翻另一
              边：<span className="dn-tag bear">8h 水上死叉 11b</span>
              （RSI 55.6）、<span className="dn-tag bear">12h 水上死叉 6b</span>
              （RSI 56.3）—— 引擎反弹没带动 8h/12h。慢周期是有意思的告示：
              一根新鲜的 <span className="dn-tag bull">1w 水下金叉（1 bar 前）</span>、
              一根 <span className="dn-tag bull">3d 水下金叉 5b</span>、一根
              <span className="dn-tag bull"> 1M ⚡ TD9 BUY @ $65,346</span>
              （超卖反转提示）、和 3d/1w 底背离簇 —— 但 3d 和 1w 都仍在云下
              （3d ↑75.3k 18b、1w ↑93.8k 26b）、3d 是 TD Sell 8 → 9?（离一根
              新鲜 TD9 sell 一根）。regime 标读
              <span className="dn-tag"> 5/9 cycle-reversal（JT&lt;0）——
              均值回归 / 偏反弹、trend-following 被告诫</span>。
              <span className="dn-em">
                直读：反弹是真的、引擎上确认，但它在快周期上超买（RSI 76 +
                4h TD9 SELL）、被中周期不确认（8h/12h 死叉）、而慢周期筑底
                背离（3d/1w）在一根仍在云下的结构下建。这是一根被拉伸的缓和
                反弹、带一根 HTF 筑底告示 —— 还不是一根结构性转向。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">65,346</td><td className="num bull">71.6</td><td className="bull">金叉（水上）10b</td><td className="bull">云上 ↓64.7k 43b</td><td>Buy 3</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">65,347</td><td className="num bull">76.9</td><td className="bull">金叉（水上）5b</td><td className="bull">云上 ↓64.4k 48b</td><td>Sell 7</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>1h</td><td className="num">65,339</td><td className="num bull">76.6</td><td className="bull">金叉（水下）46b</td><td className="bull">云上 ↓64.7k 3b</td><td>Sell 4</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">65,347</td><td className="num">59.5</td><td className="bull">金叉（水下）4b</td><td className="neut">云内 64.7k–65.8k 4b</td><td>⚡ TD9 SELL</td><td>—</td></tr>
                <tr><td>8h</td><td className="num">65,346</td><td className="num">55.6</td><td className="bear">死叉（水上）11b</td><td className="bull">云上 ↓63.8k 54b</td><td>Sell 5</td><td>BULL hid</td></tr>
                <tr><td>12h</td><td className="num">65,339</td><td className="num">56.3</td><td className="bear">死叉（水上）6b</td><td className="bull">云上 ↓62.4k 26b</td><td>Sell 2</td><td>BULL hid</td></tr>
                <tr><td>1d</td><td className="num">65,339</td><td className="num">54.9</td><td className="neut">—</td><td className="neut">云内 61.8k–70.1k 7b</td><td>Sell 1</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>3d</td><td className="num">65,346</td><td className="num">47.3</td><td className="bull">金叉（水下）5b</td><td className="bear">云下 ↑75.3k 18b</td><td>Sell 8 → 9?</td><td>BULL reg</td></tr>
                <tr><td>1w</td><td className="num">65,346</td><td className="num">40.6</td><td className="bull">金叉（水下）1b</td><td className="bear">云下 ↑93.8k 26b</td><td>Sell 3</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">65,346</td><td className="num">44.5</td><td className="neut">—</td><td className="bull">云上</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 08:01 BJ scan（00:01Z；滚动
                    latest 文件、逐字存档于
                    /opt/desk-note/snapshots/2026-07-27-0006/）。头部告警：
                    <em>1w 水下金叉（1 bar 前）</em>、
                    <em>4h ⚡ TD9 SELL 印在 $65,347（超买反转提示）</em>、
                    <em>1M ⚡ TD9 BUY 印在 $65,346（超卖反转提示）</em>、
                    <em>3d TD8 Sell —— 离 TD9 一根</em>。扫描现货 $65,347、
                    24h +1.58%（00:01Z MTF 扫描；live-tape 锚在 00:06Z 在同一
                    24h 窗读 +1.33% —— 5 分钟差与从 $65,530 高的回落解释这
                    0.25pt 偏差）、24h H/L $65,555 / $64,256（MTF 扫描自己的
                    00:01Z 窗；上文散文里的 live-tape 00:06Z 区间是 $65,530 /
                    $64,294 —— ~$25 / ~$38 偏差是 5 分钟 source 差、以 live
                    tape 为准）、qVol $4.27B。收盘为未收盘 K 线；每个值在各
                    周期收盘前都按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵确认 cap 重夺与头顶封。现货 $65,251 坐在
              <span className="dn-tag bull"> D-EMA50 $65,062 上方 +0.29%</span>
              —— 丢掉的 cap 现在重夺作 pivot —— 在重夺的
              <span className="dn-tag bull"> D-SMA20 $64,418（+1.29%）</span>、
              <span className="dn-tag bull"> D-EMA20 $64,478（+1.20%）</span>
              对上方、和 <span className="dn-tag bull">D-SMA50 $63,328
              （+3.04%）</span>上方，那根就在已定地板上一点作最近的可算支撑。
              头顶按顺序：<span className="dn-tag bear">D-EMA100 $67,731
              （−3.66%）</span> —— 工作首目标、但 dealer $66k–$72k call-wall
              带夹在中间 ——
              <span className="dn-tag bear"> D-SMA100 $69,569（−6.21%）</span>、
              <span className="dn-tag bear"> D-SMA150 $69,778（−6.49%）</span>、
              <span className="dn-tag bear"> W-EMA20 $70,231（−7.09%）</span>、
              <span className="dn-tag bear"> W-SMA20 $70,317（−7.20%）</span>、
              <span className="dn-tag bear"> D-EMA150 $70,617（−7.60%）</span>、
              <span className="dn-tag bear"> D-SMA200 $72,009（−9.38%）</span>、
              <span className="dn-tag bear"> D-EMA200 $73,425（−11.13%）</span>、
              <span className="dn-tag bear"> W-EMA150 $73,519（−11.25%；种子）</span>。
              仍在头顶（种子）：<span className="dn-tag bear">W-EMA200 $67,380
              （−3.16%；种子）</span>从 200W 带 seed、但印在现货上方，所以在
              这里是阻力、不是支撑。现货下方：已定 200W 地板
              <span className="dn-tag bull"> $63,311（+3.06%）</span>锚住下侧。
              更高更远、已弃用：W-SMA150 $76,683（−14.91%）、W-EMA50 $79,187
              （−17.60%）、W-EMA100 $79,301（−17.72%）、W-SMA50 $85,552
              （−23.73%）、W-SMA100 $88,674（−26.41%）。
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-07-27 00:05Z（close
                $65,254.70）；偏移按 live 现货 $65,251.07 重算。显示的 MA
                水位按 $ 取整、偏移用精确序列值算。W-SMA200 在 2023–2026 MA
                子集（187 根周 bar）下不可计算、而 W-SMA150 $76,683 可算但
                远在头顶且弃用；W-EMA150 $73,519 与 W-EMA200 $67,380 从可用
                历史 seed、并按种子披露；200W 周期地板 $63,311 来自全历史
                glob / trap-watch 状态（见数据来源）。日线收盘：07-21
                $66,522.40、07-22 $66,082.00、07-23 $65,069.60、07-24
                $64,116.50、07-25 $64,338.10、07-26 $65,375.10、07-27
                （未收盘）$65,254.70 —— 两根连续上收、第二根收回 D-EMA50 cap
                上方。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子再 gamma 更深正 · +191.1M 头部 / +211.84M rollup（07-26 是 +131.5M / +151.83M）· flip $62,632（现货 +4.18% 上方）· $66k–$72k call-wall 带封头顶 · 31JUL +122.79M 主导、strip 全正</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子在重夺里拿到更深的净多 γ —— 本轮恢复最深
              </span>
              。头部 aggregate GEX 是
              <span className="dn-tag bull"> +191.1M / 1%</span>（07-26 是
              +131.5M），by-expiry rollup 在
              <span className="dn-tag bull"> +211.84M</span>（=
              gex_summary.json net_gex $211,840,285、07-26 是 +151.83M）——
              一根 ~+20.74M 的头部-对-rollup 不对账缺口、按 DN-003 谱系披露
              （rollup 又坐在头部上方、与 07-25/07-26 缺口同号）。0-γ flip
              移动 <span className="dn-tag">$62,205 → $62,632（+$427）</span>、
              现货 $65,251 坐在 <span className="dn-tag bull">flip 上方
              +4.18%</span>（现货口径 65,251.07 / 62,632 − 1 = +4.181%）；
              GEX 文件自己的「dist to flip」读
              <span className="dn-tag bull"> +4.7% 对它的 Deribit idx
              $65,571</span>（比 live 现货高 $320），算 +4.69%（65,571 /
              62,632 − 1 = +4.692%）—— 两参考都正、现货在 flip 上方两读都是。
              墙图是一带头顶的正 γ call 阻力：
              <span className="dn-tag bull"> $70k +68.44M</span>（最重墙）、
              <span className="dn-tag bull"> $72k +37.87M</span>、
              <span className="dn-tag bull"> $68k +26.44M</span>、
              <span className="dn-tag bull"> $66k +19.05M</span>、
              <span className="dn-tag bull"> $67k +16.17M</span>、
              <span className="dn-tag bull"> $69k +11.80M</span>、
              <span className="dn-tag bull"> $80k +9.78M</span>、现货坐在一个
              正撑口袋里、在 <span className="dn-tag bull">$65k +9.07M</span>
              和 <span className="dn-tag bull">$65.5k +8.19M</span>之间、下方
              唯一值得注意的负在 <span className="dn-tag bear">$60k
              −15.60M</span>（崩盘 put 残余）。
              <span className="dn-em">
                $66k–$72k 带合约约 +180M 的正 γ call 阻力就在头顶 ——
                dealer 本子结构性买进回落、在挤压里大量卖出，所以一根追涨
                直撞进 dealer 卖 γ。重夺清掉了 $65k 口袋、但真的 cap 是
                call-wall 带、不是 D-EMA50。
              </span>{' '}
              按 expiry、strip 全正、无近端放大器：27JUL 0.3DTE
              <span className="dn-tag bull"> +10.98M</span>在今日 08:00Z 结算
              （快照后约 8h、正、无 vol 事件），然后 28JUL 1.3 +2.97M、29JUL
              2.3 +1.49M、30JUL 3.3 +1.32M、和
              <span className="dn-tag bull"> 31JUL 4.3 +122.79M</span> 主导块、
              再 7AUG 11.3 +34.06M、14AUG 18.3 +2.84M、28AUG 32.3 +23.01M、
              25SEP 60.3 +6.06M（列出的前段 strip 到 25SEP 合计 +205.52M；
              三根后段 expiry 25DEC +4.61M / 26MAR27 +1.17M / 25JUN27 +0.54M
              加 +6.32M 凑成 +211.84M rollup）。没有一根 expiry 带负放大器；
              阻尼 regime 完好且在加深。
            </p>

            <p>
              IV 中位数横跨期权链是
              <span className="dn-tag"> 42.5%</span>（07-26 是 42.0%）对 30D
              close-to-close RV <span className="dn-tag">30.12%</span> ——
              链级溢价 <span className="dn-tag">~+12.4pt</span>。是 N 合约的链
              中位数、<span className="dn-em">不是</span>可交易价差；expiry- /
              strike-level vega、skew 与期限结构仍未载入；vol 读法保持
              framework only。RV 方法：30D close-to-close、logret.std × √365 ×
              100、用最末 30 根日 log return（= 31 根连续日 close）、锚自
              parquet 最末 bar 2026-07-27 00:05Z；29-return 另一口径读 30.42%。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · Tier-1 日度利率在周末 FROZEN（10Y 4.71%、TIPS 2.43%、HY OAS 2.77%）· 利率 / 美元 EXTREME RISK-OFF 对信用 / 流动性松 · DXY 走软 −0.24 到 101.24 · reclaim-long 利率筛仍 FALSE（10Y &gt; 4.55%）</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观盘面冻在周末水位 —— 利率与美元守住 EXTREME RISK-OFF
                regime 读、信用与流动性仍松、reclaim-long 利率筛连续第四天
                FALSE
              </span>
              。面板渲染 2026-07-26 22:16Z、比快照早约 1.85h；FRED 日度序列
              在 07-25 六 / 07-26 日没有重印。US 10Y nominal
              <span className="dn-tag bear"> 4.71%</span>、regime z
              <span className="dn-tag bear"> +2.66</span>、偶发 z
              <span className="dn-tag bear"> +2.34</span> —— EXTREME
              RISK-OFF、对 07-26 备忘不变。10Y TIPS real
              <span className="dn-tag bear"> 2.43%</span>、regime z
              <span className="dn-tag bear"> +3.05</span>、偶发 z
              <span className="dn-tag bear"> +2.06</span> —— EXTREME
              RISK-OFF。5Y5Y BE 通胀
              <span className="dn-tag"> 2.28%</span>、10Y breakeven
              <span className="dn-tag"> 2.26%</span>。HY OAS
              <span className="dn-tag bull"> 2.77%</span>、regime z
              <span className="dn-tag bull"> −0.69</span>、偶发 z +1.23 ——
              仍「松」、但 risk-on 组里最不松的一根。MOVE 债波
              <span className="dn-tag stale"> 抓取失败（不可用）</span>。两根
              抵消：DXY <span className="dn-tag bull">101.24（−0.24 当日）</span>、
              regime z +2.07 —— EXTREME RISK-OFF regime 但当日走软；Fed 净
              流动性 <span className="dn-tag bull">$5.917T</span>（无新周度印）、
              偶发 z −2.47 —— 松。US-JP 10Y 利差
              <span className="dn-tag"> 2.04%</span>；USD/JPY
              <span className="dn-tag"> 163.6</span>（日元 7d 略软）。NFCI
              <span className="dn-tag bull"> −0.552</span>、RISK-ON（陈旧 9d）。
              <span className="dn-em">
                净：reclaim-long 利率筛（10Y &lt; 4.55%）在 4.71% 仍 FALSE
                —— 与 07-26 同一根周末冻结水位、离触发 16bp。宏观劈开不变：
                利率与美元坐 EXTREME RISK-OFF（紧），而信用（HY OAS 松）与
                流动性（净流动性松、NFCI RISK-ON）仍松。这根周末渲染里没有
                东西动 scout 的利率门，周一的 FRED 重印是下一件能动它的事。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>宏观指标</th>
                  <th>水位</th>
                  <th>Δ（上一根 FRED 动）</th>
                  <th>regime z</th>
                  <th>偶发 z</th>
                  <th>读</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>US 10Y nominal</td><td className="num">4.71%</td><td className="num bear">+4.0bp</td><td className="num bear">+2.66</td><td className="num bear">+2.34</td><td className="bear">EXTREME RISK-OFF · 周末冻</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.43%</td><td className="num bear">+4.0bp</td><td className="num bear">+3.05</td><td className="num bear">+2.06</td><td className="bear">EXTREME RISK-OFF · 冻</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.28%</td><td className="num">+1.0bp</td><td className="num">+0.77</td><td className="num bear">+2.51</td><td className="neut">偶发标</td></tr>
                <tr><td>10Y breakeven</td><td className="num">2.26%</td><td className="num bull">−2.0bp</td><td className="num">−0.98</td><td className="num">+0.42</td><td className="neut">无标</td></tr>
                <tr><td>HY OAS</td><td className="num">2.77%</td><td className="num bear">+9.0bp</td><td className="num bull">−0.69</td><td className="num">+1.23</td><td className="bull">松 · 组里最不松</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.552</td><td className="num">−0.01</td><td className="num bull">−1.51</td><td className="num bull">−1.71</td><td className="stale">RISK-ON · 陈旧 9d</td></tr>
                <tr><td>MOVE 债波</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">抓取失败 · 不可用</td></tr>
                <tr><td>DXY</td><td className="num">101.24</td><td className="num bull">−0.24</td><td className="num bear">+2.07</td><td className="num">+0.57</td><td className="bear">EXTREME RISK-OFF · 当日更软</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.917T</td><td className="num">−0.069T</td><td className="num">+0.56</td><td className="num bull">−2.47</td><td className="bull">松 · 无新周度印</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">2.04%</td><td className="num bear">+4.0bp</td><td className="num">−0.26</td><td className="num bear">+2.34</td><td className="neut">中性</td></tr>
                <tr><td>USD/JPY</td><td className="num">163.6</td><td className="num">+0.78%（7d）</td><td className="num">—</td><td className="num">—</td><td className="neut">日元 7d 更软</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">（月度）</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">月度 · 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、汇总 00:00Z ——
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。非
              对角线均值 <span className="dn-tag">|r| 0.241</span> ——
              IDIOSYNCRATIC 区段（在 0.25 阈值下方）。BTC 的最强对齐是
              <span className="dn-tag"> NQ +0.510</span>（重回 0.5 上方）、
              然后 PLAT <span className="dn-tag">+0.434</span>、SP500
              <span className="dn-tag"> +0.434</span>、SILVER
              <span className="dn-tag"> +0.414</span>、TSLA
              <span className="dn-tag"> +0.388</span>、JP225
              <span className="dn-tag"> +0.388</span>、COPPER
              <span className="dn-tag"> +0.371</span>、GOLD
              <span className="dn-tag"> +0.363</span>、CL
              <span className="dn-tag"> −0.317</span>、BRENT
              <span className="dn-tag"> −0.299</span>。7d 相对表现是告示：
              <span className="dn-tag bull"> BTC +1.28%</span> 领先引擎股与
              megacap 群、后者翻得狠 —— NQ
              <span className="dn-tag bear"> −0.38%</span>、SP500
              <span className="dn-tag bull"> +0.17%</span>、TSLA
              <span className="dn-tag bear"> −17.16%</span>、GOOGL
              <span className="dn-tag bear"> −7.36%</span>、META
              <span className="dn-tag bear"> −6.36%</span>、AMZN
              <span className="dn-tag bear"> −5.64%</span>、MSFT
              <span className="dn-tag bear"> −2.45%</span> —— 而 NVDA
              <span className="dn-tag bull"> +2.99%</span> 与 JP225
              <span className="dn-tag bull"> +0.70%</span> 守住。金属与铀跑过
              BTC：SILVER <span className="dn-tag bull">+5.52%</span>、URNM
              <span className="dn-tag bull"> +3.82%</span>、GOLD
              <span className="dn-tag bull"> +2.24%</span>、COPPER
              <span className="dn-tag bull"> +1.42%</span>、PALL
              <span className="dn-tag bull"> +1.41%</span>、PLAT
              <span className="dn-tag bull"> +1.09%</span>；能源混色（CL
              +1.16%、BRENT −0.79%）。
              <span className="dn-em">
                BTC 现在清楚领先股 / megacap 群 7d（+1.28% vs NQ −0.38% =
                +1.66pt、整个 megacap 复合深红），但金属 / 铀跑过它 —— 所以
                按 DN-001 谱系这是一根 stocks-relative RS 告示、不是全 strip
                领导。宏观脉搏仍劈开（利率 / 美元紧、信用 / 流动性松），BTC
                的相对买盘来自股票侧翻倒、不是一根广泛的 risk-on 脉冲
              </span>
              。JGB 月度 2.67% 带月度标 —— 不依赖。
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · 回补反弹 scout 递延（第 4 天）—— 价格 re-arm 腿 FIRED（D-EMA50 重夺在上收）但流 / 利率腿 FALSE（OI 收缩、SM 减 + 做空、利率 FALSE）· chase-short 站稳向本轮恢复最深正 γ 本子 · 本子 FLAT</span>
            </h2>

            <p>
              <span className="dn-signal">
                scout 等了五段的那一根价格条件终于点火 —— 而仓位本子当天
                没确认它
              </span>
              。07-26 备忘的 re-arm 门是「一根 D-EMA50 重夺在上收上、买家在
              OI 后面且 smart money 加」。今天
              <em>重夺-在-上收</em>腿第一次 TRUE（07-26 收 $65,375.10 在
              D-EMA50 $65,062 cap 上方；现货守 +0.29% 上方）。但
              <em>买家-在-OI-后面</em>腿 FALSE（OI 在空头回补上收缩 −2.86%、
              不是需求）、<em>smart-money-加</em>腿 FALSE（SM 减 −46.14% 且
              加空 +1,904）、reclaim-long 利率筛 FALSE（10Y 4.71% &gt; 4.55%）。
              门的两条腿在价格上点火；两条流腿与利率腿没有。有纪律的读是
              把 scout 保持递延、等重夺印出而没带的那根确认流：今天交易本子
              是无 scout 入场、无 chase-short、无新对冲 —— 等 D-EMA50 守被
              SM 重新加到净多 AND OI 在需求上扩张（或一根利率印 &lt; 4.55%）
              JOIN 后再 scout 多，也不向一根已定地板上方的再 gamma 正本子
              追空。
            </p>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout · 递延 · 价格腿 FIRED、流 / 利率腿 FALSE · 等确认流</span>
              <div className="dn-trade-name">
                回补反弹 scout —— D-EMA50 cap 首次在上收上被重夺、但在 OI 收缩上、记录在案买家在减且加空、利率 FALSE
              </div>
              <div className="dn-thesis">
                re-arm 门终于满足了它的价格腿：07-26 收 $65,375.10 在 07-23/
                07-26 丢重夺水位的 D-EMA50 $65,062 cap 上方、现货守 $65,251
                （+0.29% 上方）。这是 scout 被武装去买的那根收回 cap 上方的
                上收。但门的 AND 条件没满足。(1) OI <em>收缩</em> −2.86%
                （−3,075.5 BTC）—— 重夺是空头回补 / 去杠杆、正是「买家在 OI
                后面」腿要的需求驱动 OI-up 的反面。(2) smart money —— 仍是
                记录在案的买家、净 +2,743 —— 减 −46.14% 且做法是<em>加空
                +1,904</em>而不是砍多；SM-加腿不只没满足、还反了。(3)
                reclaim-long 利率筛在 10Y 4.71% 仍 FALSE（周末冻、离触发
                16bp）。结构性背景在价格上改善（两根上收、cap 重夺、retail
                泄拥挤、MTF 软化成一根反弹）但仓位本子在淡化它。有纪律的入场
                继续递延、直到流确认价格。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">re-arm 门（价格腿现在 TRUE）</span><span className="dn-lvl-v bull">D-EMA50 $65,062 在 07-26 上收 $65,375.10 上重夺 · 现货 +0.29% 上方 · 本轮恢复第一次 TRUE</span></div>
                <div><span className="dn-lvl-k">re-arm 门（流 / 利率腿仍 FALSE）</span><span className="dn-lvl-v bear">OI 在买家上扩张（FALSE —— 收缩 −2.86%）AND SM 加到净多（FALSE —— 减 −46.14%、加空 +1,904）AND 10Y &lt; 4.55%（FALSE —— 4.71% 冻）</span></div>
                <div><span className="dn-lvl-k">scout 入场</span><span className="dn-lvl-v bull">D-EMA50 守被 SM 重新加净多 AND OI 在需求上扩张 JOIN 时（或一根利率印 &lt; 4.55%）：scout long 0.2R</span></div>
                <div><span className="dn-lvl-k">止损</span><span className="dn-lvl-v bear">日收 &lt; $63,311（已定 200W 地板 —— 一根收在下方结束恢复读法）</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">$66k–$72k call-wall 带是实际 cap；工作 MA 目标 D-EMA100 $67,731、在 $66k / $67k 墙平半</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R 在确认流上 · 不在价格重夺单独上</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R：</b>在确认 re-arm 上入场 ~$65,062（D-EMA50 守）、止损
                $63,311（已定地板）= ~$1,751 风险；工作目标 D-EMA100 $67,731
                = ~$2,669 回报 ≈ 1.52:1 —— 但 $66k–$72k call-wall 带封住路径、
                所以现实首目标是 $66k / $67k 墙、到那的 R/R 更薄。
                <b>硬规则：</b>scout 不在价格重夺单独上入场。重夺印在空头
                回补上、记录在案买家在加空 —— 一根 smart money 在淡化的重夺。
                确认腿是 SM 重新加净多、在与价格一起扩张的 OI 上，不是一根
                smart-money 空头在靠着的挤压。一根 D-EMA50 守而 SM 仍在减是
                一个淡化候选、不是一个多。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">空 · chase · 站稳 · 本轮恢复最深正 γ 本子 · 现货进 call-wall cap</span>
              <div className="dn-trade-name">
                chase-short —— 比 07-26 站得更稳：dealer 本子再 gamma 更深正（+191.1M / +211.84M），现货正爬进 $66k–$72k call-wall 带
              </div>
              <div className="dn-thesis">
                偏空盘面读（SM 加空、期货 / taker 卖、快周期超买带一根 4h
                TD9 SELL、中周期死叉）诱一根向重夺追空 —— 但 dealer 结构把它
                站稳。aggregate GEX 再 gamma 到 +191.1M 头部 / +211.84M
                rollup（从 07-26 的 +131.5M / +151.83M），本轮恢复最深的净多
                γ、flip 在 $62,632（现货 +4.18% 上方）、strip 全正（31JUL
                +122.79M 主导、无近端负放大器）。现货正推进 $66k–$72k
                call-wall 带（+180M 的正 γ call 阻力）、dealer 在那卖 γ 并
                阻尼 —— 一本淡化挤压但也缓冲回落的本子。向一根已定地板上方
                加深的正 γ 本子追空没有结构性顺风。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">为何站稳</span><span className="dn-lvl-v bear">dealer 本子本轮恢复最深正 γ（+191.1M / +211.84M）· flip $62,632（现货 +4.18% 上方）· $66k–$72k call-wall cap · strip 全正、无近端放大器</span></div>
                <div><span className="dn-lvl-k">什么会重武装一根空</span><span className="dn-lvl-v bear">一根新鲜近端负 γ 块加进 28JUL–31JUL 窗内 AND 现货在收盘上拒 D-EMA50 回落到 $65,062 下方、且 SM 把空延伸过净平</span></div>
                <div><span className="dn-lvl-k">不要</span><span className="dn-lvl-v">不在一根正 γ 本子、已定地板上方的 call-wall 带里追空</span></div>
              </div>
              <div className="dn-gating">
                <b>纪律：</b>SM 加空和超买快周期是真的盘面告示、但它们是一个
                正 γ regime 里的逆势信号、不是单独成立的空头设置。chase-short
                只在 dealer 本子把一根近端块翻负或现货在收盘上丢掉重夺的
                D-EMA50 时才说得通 —— 在那之前正 γ 本子是主导结构、追空是
                在与它对打。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 重夺-在-错燃料上 · 价格事件点火、确认流没有 —— 整篇备忘转在下一根哪个赢</span>
              <div className="dn-trade-name">
                重夺质量 —— D-EMA50 cap 在空头回补上被重夺、记录在案买家在淡化它；告示是 SM 是否在守上重新加、还是空头回补耗尽并滚回 cap 下方
              </div>
              <div className="dn-thesis">
                恢复谱系挂在 D-EMA50 重夺上五段了；今天它印了、但在错的内部
                上。一根 cap 重夺在 OI 收缩上、smart-money 买家在加空、是一根
                空头回补 markup、不是需求突破 —— 两者解得不同。如果 SM 在
                D-EMA50 守上重新加到净多、OI 在需求上转升，重夺转成一条真腿、
                scout 武装为 live。如果空头回补耗尽 —— funding 已经再热、快
                周期超买、4h 印一根 TD9 SELL、SM 在靠空 —— 重夺滚回 D-EMA50
                下方、cap 第四次翻成阻力。框架盯 SM 净多轨迹和 D-EMA50 守上的
                OI 形作决定性告示、不是价格水位单独。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">多头解</span><span className="dn-lvl-v bull">SM 净多从 +2,684 谷重新扩张 AND OI 在 D-EMA50 守上转升 —— 重夺转正、scout 武装 live</span></div>
                <div><span className="dn-lvl-k">空头解</span><span className="dn-lvl-v bear">空头回补耗尽（funding 再热、快周期超买、4h TD9 SELL、SM 靠空）且现货在收盘上丢 D-EMA50 $65,062 —— cap 第四次翻阻力</span></div>
                <div><span className="dn-lvl-k">决定性告示</span><span className="dn-lvl-v">SM 净多轨迹（重新加 vs 续减 / 做空）与 OI 形（需求-升 vs 回补驱动-降）在 D-EMA50 守上 —— 不是价格水位</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>一根 smart money 在淡化的重夺是比它在买的重夺
                更低质量的重夺、即使在同一价格。谱系的 edge 一直是让仓位本子
                确认价格、不是买那个水位。今天水位印了、本子没有 —— 所以框架
                把 scout 保持递延、把下一批 SM/OI 印读作解、不是下一根 K 线。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · D-EMA50 cap 在上收上被重夺（re-arm 门价格腿 FIRED）· OI 收缩、SM 减且做空、利率 FALSE（流 / 利率腿 FALSE）· scout 递延等确认流 · chase-short 站稳 · 本子 FLAT</span>
            </h2>

            <p>
              07-26 那张决策条件里：re-arm 门的
              <em> D-EMA50 重夺在上收</em>腿干净 FIRED（07-26 收 $65,375.10
              在 $65,062 cap 上方、现货 +0.29% 上方）；<em>买家在 OI 后面</em>
              腿没点火（OI 在空头回补上收缩 −2.86%）；<em>smart money 加</em>
              腿没点火（SM 减 −46.14% 且加空 +1,904）；<em>reclaim-long
              利率筛</em>保持 FALSE（10Y 4.71% &gt; 4.55%、周末冻）；已定地板
              止损没触发（无收在 $63,311 下方 —— 现货 +3.06% 上方）；chase-short
              保持站稳（本子再 gamma 更深正）。<em>恢复挂着的那一根价格条件
              终于点火、两条流条件与利率条件没有、scout 保持递延等确认流。</em>
              今天条件围绕一根重夺但未确认的 cap、一个在减的记录在案买家、
              一本更深的正 γ 本子、和一根已定地板重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>D-EMA50 重夺在上收（re-arm 价格腿）</td><td className="bull">FIRED —— 07-26 收 $65,375.10 &gt; D-EMA50 $65,062；现货 +0.29% 上方</td><td>门的价格腿第一次满足；scout 入场前等流腿</td></tr>
                <tr><td>买家在 OI 后面（re-arm 流腿）</td><td className="bear">FALSE —— OI 在空头回补上收缩 −2.86%（−3,075.5 BTC）、不是需求</td><td>不 scout 多：重夺是回补 markup、不是需求突破</td></tr>
                <tr><td>smart money 加到净多（re-arm 流腿）</td><td className="bear">FALSE —— SM 减 −46.14% 到 +2,743、加空 +1,904（Δlong −446）</td><td>不 scout 多：记录在案买家在淡化重夺、不是在撑它</td></tr>
                <tr><td>reclaim-long 利率筛</td><td className="bear">FALSE —— 10Y 4.71% &gt; 4.55%（周末冻、离触发 16bp）</td><td>独立筛为假；周一 FRED 重印是下一件能动它的事</td></tr>
                <tr><td>回补反弹 scout（多）</td><td className="bull">D-EMA50 守被 SM 重新加净多 AND OI 在需求上扩张 JOIN（或 10Y &lt; 4.55%）</td><td>scout long 0.2R、止损 $63,311、工作目标 D-EMA100 $67,731（被 $66k–$72k call 墙封）</td></tr>
                <tr><td>重夺滚回（空头解）</td><td className="bear">日收 &lt; D-EMA50 $65,062、空头回补耗尽且 SM 靠空</td><td>cap 第四次翻阻力；scout 保持递延、重评估下腿</td></tr>
                <tr><td>已定地板止损</td><td className="bear">日收 &lt; $63,311（200W W-SMA200 地板）</td><td>结束恢复读法；另起评估</td></tr>
                <tr><td>chase-short re-arm</td><td className="bear">一根新鲜近端负 γ 块（28JUL–31JUL）AND 现货在收盘上丢 D-EMA50</td><td>那时才一根 chase-short；不向当前深正 γ 本子</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是
              <span className="dn-signal">
                D-EMA50 cap 的空头回补重夺是否转成一条需求领头的腿 —— SM 在
                守上重新加到净多、OI 在买家上扩张 —— 还是它耗进再热的
                funding、超买的快周期和 smart-money 空头靠盘、把现货滚回
                $65,062 下方、cap 第四次翻阻力
              </span>
              。价格终于做了恢复挂着的事；仓位本子当天没确认它。在它确认前、
              本篇按写好的跑：scout 递延、价格腿满足但流与利率腿 FALSE，
              chase-short 向本轮恢复最深的正 γ 本子站稳，put-spread 不在
              一根冻结的 10Y 单腿上重长，本子在一根已定地板上方保持 FLAT。
              BTC 7d 领先股 / megacap 群、MTF 软化成一根被拉伸的反弹带一根
              HTF 筑底告示、dealer 本子加深它的阻尼 —— 但记录在案的买家在
              淡化重夺、那是交易台读的下一根告示。下一个 24h 的对读是
              <em>耐心 —— 重夺是真的、确认不是，一根 smart money 在淡化的
              重夺是要尊重的、不是要追的</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2（已过 codex 敌对式审计 · findings 记于 audits/2026-07-27-desk-note.md）
            </span>
            <b>状态：</b>v2 EN/ZH、由 STAGE C 在 STAGE B codex 敌对式审计后
            从 v1 提升（判决 BLOCK-CRITICAL —— 1 CRITICAL + 2 MAJOR + 3
            MINOR；记录在 audits/2026-07-27-desk-note.md）。每一条 finding
            都就地修正并在整份 EN 文件上 grep-closed 后再提升；EN v2 与本篇
            ZH 携带同一批数字与同一批 caveat（零漂移）。逐条 finding：
            <b> DN-001</b>（CRITICAL —— 陈旧 200W 地板传进 stop/risk/R/R）：
            地板换成 2026-07-26 走完周 W-SMA200 $63,311.02、consecutive_above
            4、现货 +3.06% 上方；R/R 入场 $65,062 / 止损 $63,311 / 目标
            $67,731 = ~$1,751 风险 : ~$2,669 回报 = 1.52:1（旧 v1 误用
            2026-07-19 周的 $63,078.14 / consecutive 3 / +3.44% / 1.35:1、
            全部改掉）—— RESOLVED。<b>DN-002</b>（MAJOR —— OI 扩张计数）：
            07-24 +2,221.6 / 07-25 +1,590.5 / 07-26 +1,425.6 是一根三扩张
            streak、被 07-27 −3,075.5 收缩逆转；「四扩张」措辞全改成「三
            扩张」（「四段下腿」是一根独立的价格段计数、保留）—— RESOLVED。
            <b> DN-003</b>（MAJOR —— W-SMA150 可计算性）：只有 W-SMA200 在
            187 根周 bar 下不可计算；W-SMA150 $76,683 可算但远在头顶 / 弃用、
            措辞全改 —— RESOLVED。<b>DN-004</b>（MINOR —— by-expiry rollup）：
            补上后段重构（前段 strip 到 25SEP +205.52M；25DEC +4.61M /
            26MAR27 +1.17M / 25JUN27 +0.54M = +6.32M → +211.84M rollup）——
            RESOLVED。<b>DN-005</b>（MINOR —— retail 24h 高时间戳）：高 64.51
            在 07-26 09:11 BJ / 01:11Z、基线 64.23、不是「在基线」——
            RESOLVED。<b>DN-006</b>（MINOR —— W-EMA200 被误标「现货下方」且
            带 bull class）：移到头顶 / 种子集、按 bear 标、框成 −3.16% 的
            阻力 —— RESOLVED。补充的 ask-deepseek 重算作了裁定、不自动应用：
            其 CRITICAL 与 DN-004 重复（expiry 和、已重构）；其 MAJOR（两根
            24h H/L 区间）就地对账为一根披露的 5 分钟 source 差（MTF 扫描
            $65,555 / $64,256 @ 00:01Z 对 live-tape $65,530 / $64,294 @
            00:06Z、以 live tape 为准）。快照锚 2026-07-27 00:06Z（live tape
            t == &ldquo;07-27 08:06&rdquo; BJ）；滚动源存档于
            /opt/desk-note/snapshots/2026-07-27-0006/ 供对同一字节 re-audit。
            下游审计应重算的自足数字：funding × 1095（live +6.72% ann 自原始
            0.006134、24h 均值 +6.24%、max +10.24% ann 自 0.009348、0 / 1441
            负 —— 无 ×100 重现）；GEX 双参考符号（flip $62,632、现货 +4.18% /
            idx +4.69%、两参考都正、tile 取现货侧）；头部-对-rollup 缺口
            （+191.1M 头部 对 +211.84M rollup = ~+20.74M、DN-003 谱系）；
            SM cut fraction（|+2,743.16 − (+5,092.88)| / 5,092.88 = 46.14%、
            Δlong −446.2 / Δshort +1,903.5）；完整 MA 矩阵对 live 现货
            $65,251.07、parquet 2026-07-27 00:05Z close $65,254.70（D-EMA50
            $65,062 +0.29% 重夺 cap、已定 200W 地板 $63,311 +3.06%、W-SMA200
            在 187 根周 bar 下不可计算而 W-SMA150 $76,683 可算但弃用）；30D
            RV 30.12%（30 returns / 31 closes；29-return 另一口径 30.42%）；
            R/R（入场 $65,062、止损 $63,311、目标 $67,731 → 1.52:1）；跨资产
            （|r| 0.241、BTC +1.28% vs NQ −0.38% = +1.66pt）与宏观 Tier-1
            （10Y 4.71%、HY OAS 2.77%、DXY 101.24、Fed 净流动性 $5.917T）
            对源；claims-vs-loaded-data（NTT / max-pain / strike-IV / BTC-NQ
            framework only；JGB 月度不依赖；IV 链中位数、不是可交易价差；
            MOVE 抓取失败）；requireViewer gating 模式（路径 /zh/desk/
            2026-07-27、首语句）。已过 codex 敌对式审计。EN/ZH 数值平价维持。
            <b> Build note（INFO）：</b>本服务器跑 Node 18.19.1；Next 16.2.6
            在 <code>node_modules/next/dist/bin/next:24-28</code> 处对 Node
            &lt; 20.9.0 硬退出、所以完整 <code>next build</code> 被环境阻塞。
            <code>npx --no-install tsc --noEmit</code> 是 build proxy；本次
            在 v2 修正后再跑了一次。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体
            情况个性化。数字反映单一原子快照（2026-07-27 00:06Z）、
            provenance 在数据来源条带中按节披露；宏观 Tier-1 面板渲染
            2026-07-26 22:16Z（比快照早约 1.85h）、FRED 日度利率在周末冻结、
            部分输入明确陈旧、不可用或待定并已标注。水位、规模与条件是交易台
            流程的示例、不是长期推荐。过去的相关性、γ 与仓位模式不绑定未来
            盘面。衍生品有全损风险、加杠杆下损失可超过保证金。
            <em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                cap 终于被重夺 —— 但在空头回补上、记录在案买家在加空、利率
                仍 FALSE。价格点火；本子没确认。一根 smart money 在淡化的重夺
                是要尊重的、不是要追的。耐心。
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
            v2 · 2026-07-27 00:06Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            ma200w_trap_watch_state.json · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
