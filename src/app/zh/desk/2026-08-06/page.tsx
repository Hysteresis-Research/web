import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-08-06 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-08-06',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-08-06' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260806() {
  await requireViewer('/zh/desk/2026-08-06');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-08-06 · v2</span>
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
              <span className="dn-big">$64,620</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.85%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-08-06 00:05Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-08-06 00:05Z（行 t=&ldquo;08-06 08:05&rdquo; BJ、即 00:05Z 日锚）</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · pin 在 00:05Z 锚行以求可复现（读时文件
                    tail 已到 00:08Z）· live-tape 的 <code>t</code> 是
                    BJ-local（UTC+8）：00:05Z pin = t &ldquo;08-06 08:05&rdquo;、下游
                    所有 BJ 时间戳在正文里都转成 UTC
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-08-06 08:01 BJ（00:01Z）scan</td>
                  <td className="dn-flag">
                    滚动 latest 文件（可盘中前移）· /opt/desk-note/snapshots/2026-08-06-0005/
                    的存档副本才是 pin 源 · 较快照锚约 4 分钟旧 · 含未收盘
                    K 线 · 扫描现货 $64,627、24h +0.87%
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-08-06 00:01Z 快照</td>
                  <td className="dn-flag">
                    较锚约 4 分钟旧 · Deribit idx $64,938 对 live $64,620
                    （比 live 高 $318）· 6AUG26 0.3DTE +19.55M 仍在本子上
                    （今日 08:00Z 结算、比此快照晚约 8h）· 存档于
                    /opt/desk-note/snapshots/2026-08-06-0005/
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-08-06 00:01Z
                  </td>
                  <td className="dn-flag">滞后约 4 分钟 · 7d 1h bar · 22 资产 · 167 rows · 存档于快照目录</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-08-05 22:17Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.8h · FRED Tier-1：10Y −7bp 到 4.63%、TIPS
                    −3bp 到 2.40%、HY OAS −5bp 到 2.73%、DXY −0.08 到 99.88、
                    Fed 净流动性 −0.092T 到 $5.825T · MOVE 抓取失败（暗、第
                    二次渲染）· NFCI 陈旧 · 存档于快照目录
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-08-06 00:05Z</td>
                  <td className="dn-flag">
                    close $64,599.80（未收盘 08-06 bar）· 偏移按 live 现货
                    $64,620.23 重算 · 周 ladder 按完整 2019–2026 wildcard
                    （362 根周 bar）· W-SMA200 $63,759.37 未收盘 / $63,533.52
                    已结（trap-watch 地板）· W-EMA 全历史
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W 周期地板盯位</td>
                  <td className="dn-v-cell">ma200w_trap_watch_state.json · 重算 2026-08-03 00:11Z</td>
                  <td className="dn-flag">
                    周收 200-SMA $63,533.52、上一根走完的周 2026-08-02 收
                    $63,550.00、状态 ABOVE、连续 5 根周收在地板上方（自
                    2026-07-05 起算）· 慢级别（约 $250/周）、按小时旧无妨 ·
                    专用 weekly_200sma.json runbook 路径缺失、用 trap-watch
                    状态作 live 替代
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED 月度 · IRLTLT01JPM156N</td>
                  <td className="dn-flag">陈旧 · 月度（65d）· 不作实时</td>
                </tr>
                <tr>
                  <td className="dn-s">
                    NTT pivot、max-pain、strike-level IV、BTC/NQ 比率
                  </td>
                  <td className="dn-v-cell">本次未载入</td>
                  <td className="dn-flag">相关主张明确为 framework only（btc_ntt_analysis.html 是 JS 渲染、不可抽取）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dn-meta">
            <div>
              <span className="dn-k">funding · 8h 年化</span>
              <span className="dn-v">+7.11%</span>
              <span className="dn-src">live · funding 字段 0.006493/8h × 1095 = +7.11% ann · 24h 均值 +3.06%（08-05 是 +6.00% —— 冷了 −2.94pt）· 58 / 1442 采样行转负（08-05 是 0 / 1441 —— 负数回来了）· 最大 +7.31% ann @ 08-06 07:51 BJ（23:51Z 08-05）、最小 −0.83% @ 08-06 04:19 BJ（20:19Z 08-05）</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h 均值</span>
              <span className="dn-v bull">+6.00% → +3.06%（冷 −2.94pt）</span>
              <span className="dn-src">08-05 的再热 <em>反转</em> —— 58 根负行回来了（08-05 是 0）、多头 carry 泄掉近一半；这正是 cover-bounce scout 挂着的那根泄杠杆、终于和 SM 回补一起出现了</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−1.03%（−1,112.5 BTC）</span>
              <span className="dn-src">live · 第三根连续缩、也是最大一根（08-04 −628.7、08-05 −326.9、现在 −1,112.5）· 现在 107,138 BTC 对 24h 前 108,250 · 仓位穿过破盖收盘一路在泄 —— 一根回补 grind、突破后面没堆新多</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bull">53.42 / 46.58</span>
              <span className="dn-src">live_db `mkt_long_pct` · 从 56.11（24h 前）泄到 53.42（−2.69pt de-crowd）· 24h 区间 53.20 / 56.73 —— retail 多侧一直在泄、现在是这波回补里最不拥挤的</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−9.04k（净 SHORT、但在 COVER）</span>
              <span className="dn-src">live · long 13.08k − short 22.11k · net 谷（最空）−11.81k @ 08-05 20:11 BJ（12:11Z 08-05）；net 峰（最不空）−8.99k @ 08-06 07:26 BJ（23:26Z 08-05）—— SM 把空本子穿上涨一路滚下来、收在窗内接近最不空</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对同时钟 24h 基</span>
              <span className="dn-v bull">−10,007 → −9,038（+969 COVER）</span>
              <span className="dn-src">|Δnet|/prior_net = 969.3 / 10,007.4 = 9.69% · 本次 CLEAN —— 没有 BJ-14:36 re-sync 假象（14:36 分钟 Δ −4.7；最大单分钟步是一根正常的 +1,227 @ 08-06 04:26 BJ / 20:26Z 08-05、一根 cover 步）· Δlong −1,407、Δshort −2,377 —— 空侧比多侧切得更狠、所以是净回补</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">40.6% / 29.11%</span>
              <span className="dn-src">GEX IV 中位数对 30D close-to-close RV（30 returns / 31 closes、logret.std × √365 × 100）· 链级溢价 ~+11.5pt · IV 中位数是横跨合约的链中位、<em>不是</em>可交易价差 · P/C OI 0.527（call 224,009 / put 118,040）</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+2.26%（在上方）</span>
              <span className="dn-src">flip $63,191（08-05 是 $63,124、升了）· 对 live 现货 $64,620.23（+2.26%；64,620.23/63,191.38 − 1 = 2.261%）/ GEX 文件 Deribit idx $64,938.37（+2.76%；64,938.37/63,191.38 − 1 = 2.764%）—— 两参考都正 · headline GEX +108.0M、by-expiry rollup +121.04M（08-05 是 +106.0M / +93.78M —— 第四根连续正向堆）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                价格/仓位背离往多头方向了结 —— 盘面拖动了本子。08-05 日线
                收在 08-05 备忘要的 D-EMA50 盖上方、AND smart money 终于回补、
                所以按那篇自己写的触发、cover-bounce scout 开一根 starter
              </span>
              。现货
              <span className="dn-tag bull">$64,620、24h +0.85%</span>；08-05
              日线收 <span className="dn-tag bull">$64,633.90</span> ——
              把 08-05 备忘点名的
              <span className="dn-tag bull">D-EMA50 盖 $64,612</span> 清过
              $22、正是开 scout 的那条多头腿。第二条腿也印了：SM 干净回补
              <span className="dn-tag bull">+969（−10,007 → −9,038）</span>
              —— 空侧比多侧跑得更狠（Δshort −2,377 对 Δlong −1,407）、本次
              无 BJ-14:36 假象 —— 而 funding
              <span className="dn-tag bull">冷得狠（24h 均值 +6.00% → +3.06%、
              58 根负行从 0 回来）</span>、正是 scout 挂着的那根泄杠杆。但
              这根确认是一吻、不是一穿、caveat 叠着：
              <span className="dn-tag bear">现货 −0.02% 正贴着升上来的 D-EMA50
              盖 $64,634</span>（盖升上来贴到收盘 —— 08-05 bar 收在同日
              D-EMA50 下方 $1.19）、net −9,038 只比 −9,000 回补闸过一点、OI
              第三根连续缩
              <span className="dn-tag bear">−1.03%（−1,112.5 BTC）</span>
              所以突破骑在一根回补 grind 上、后面没新多、而 dealer 本子
              re-gamma 到全谱系最重的正向
              <span className="dn-tag bear">（+108.0M headline / +121.04M
              rollup、$65k 墙 +26.35M 正坐在现货上）</span> —— 一道压住
              $64.5k–$68k 路径的重阻尼。本子从 FLAT 移到一根
              <span className="dn-tag bull">scout long starter、0.2R</span>
              —— 两条点名腿一起印了 —— 但按最小 size 进、进到「决定性突破 /
              gamma 盖」的 caveat 里、chase-short STOOD DOWN（地板守住、
              gamma 更正、现货 +2.26% 在 flip 上方）。
            </p>

            <p>
              BTC 报 <span className="dn-tag">$64,620</span> live、
              <span className="dn-tag bull">+0.85%</span> 在 24h（live-tape
              窗；08:01 BJ 的 MTF 扫描在它自己的 24h 基上读 +0.87% —— 约 4
              分钟偏移加不同的窗口开盘解释这道小差），在一条
              <span className="dn-tag">$65,021 / $63,914</span> 区间里（24h
              高 @ 04:21 BJ 08-06 / 20:21Z 08-05、低 @ 21:36 BJ 08-05 /
              13:36Z 08-05）。<span className="dn-signal">回补延伸、盖被清
              过</span>：08-03 收 $63,497.20、08-04 收 $64,075.50、08-05 收
              <span className="dn-tag bull">$64,633.90</span> —— 一根 $558
              上日、终于收在过去两篇点的 D-EMA50 盖 $64,612 <em>上方</em>。
              现在三根日线偏移坐在现货下方：
              <span className="dn-tag bull">D-SMA50 $63,271.87（+2.13%）</span>、
              <span className="dn-tag bull">D-EMA20 $64,076.05（+0.85%）</span>、
              <span className="dn-tag bull">D-SMA20 $64,428.59（+0.30%）</span>
              —— 比 08-05 的两根多、矩阵在继续去反转。但头顶就在这里、
              承重：<span className="dn-tag bear">D-EMA50 盖 $64,633.70
              （−0.02%）</span> 升上来几乎正贴现货 —— 08-05 收清过旧的
              $64,612 印、但盖本身升到 $64,634、所以现货是被钉在移动的盖
              <em>上</em>、不是决定性穿过它 —— 然后一道跳空到
              <span className="dn-tag bear">D-EMA100 $67,007.04（−3.56%）</span>。
              <span className="dn-em">
                08-05 备忘要的那一根收盘 —— D-EMA50 盖收在 $64,612 上方 +
                SM 在回补 —— 两条腿都印了（收 $64,633.90、SM +969 cover）。
                按那篇自己的规则、这开了 scout。caveat 是现货没从盖上拉开：
                它 −0.02% 贴着一根正升到收盘底下的 D-EMA50、所以这是一吻并
                守住、不是一根冲穿。
              </span>{' '}
              08-05 的分叉往多头方向了结了：盘面拖动了本子 —— 价格清过盖、
              SM 回补进去 —— 而不是本子把盘面拖回 flip 下方。
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面 · SM 干净回补进破盖收盘（无假象）· 空侧比多侧跑得更狠、funding 冷、负数回来 · 但 OI 第三天缩 —— 突破骑在回补 grind 上、不是新需求</span>
            </h2>

            <p>
              <span className="dn-signal">
                Smart money 回补了这轮回补 —— 第二条 scout 腿、而且干净
              </span>
              。SM net 是 <span className="dn-tag bull">−9,038</span> 对
              同时钟 24h 基 −10,007 —— 也就是
              <span className="dn-em">9.69% 更不空</span>
              （|−9,038 − (−10,007)| / 10,007 = 969.3 / 10,007.4 = 9.69%）、
              一根进 +0.85% 上日的回补。分量：long_btc
              <span className="dn-tag bear">14,483 → 13,076（−1,407）</span>、
              short_btc <span className="dn-tag bull">24,490 → 22,114
              （−2,377）</span> —— 空侧比多侧切得更狠、是一根真净回补
              （对比 08-05、那天是多侧被甩、net 走更空）。
              <span className="dn-em">本次没有 BJ-14:36 re-sync 假象</span>
              —— 那根曾在 08-02 和 08-04 污染信号的复发单分钟 feed 步这次
              缺席（14:36 分钟 Δnet −4.7）；最大单分钟步是一根正常大小的
              +1,227 @ 08-06 04:26 BJ（20:26Z 08-05）、一根 cover 步、所以
              这读是 CERTIFIED、不是 data-impaired。SM net 谷（最空）
              <span className="dn-tag bear">−11,805 @ 08-05 20:11 BJ（12:11Z
              08-05）</span>；net 峰（最不空）
              <span className="dn-tag bull">−8,985 @ 08-06 07:26 BJ（23:26Z
              08-05）</span> —— SM 把空本子穿上涨一路滚下来、收在窗内接近
              最不空、正是 scout 挂着的那根回补。
            </p>

            <p>
              杠杆侧是泄气、不是重新拥挤 —— 08-05 的镜像。
              <span className="dn-signal">
                funding 冷得狠、负数回来了
              </span>
              ：live <span className="dn-tag">+7.11% ann</span>（字段
              0.006493/8h × 1095）、但 24h 均值
              <span className="dn-tag bull">+3.06% ann</span>（对 08-05 的
              +6.00% —— 一根 −2.94pt 冷却）、窗内带
              <span className="dn-tag bull">58 / 1442 负行</span> —— 08-05
              消失的负数（0 / 1441）回来了、多头 carry 泄掉近一半。区间
              <span className="dn-tag">−0.83% / +7.31% ann</span>（最大 @
              08-06 07:51 BJ / 23:51Z 08-05、最小 @ 08-06 04:19 BJ / 20:19Z
              08-05）；未钉封顶。OI Δ
              <span className="dn-tag bear">−1,112.5 BTC（−1.03%）</span>
              跨 24h —— 第三根连续缩、也是最大（08-04 −628.7、08-05 −326.9、
              现在 −1,112.5；108,250 → 107,138）、所以仓位穿破盖收盘一路在泄。
              <span className="dn-em">这是多头读法里的张力</span>：回补和
              funding 泄是 scout 要的泄杠杆、但 OI 缩说这根突破是回补 grind、
              不是新多需求堆在价格后面。retail
              <span className="dn-tag bull">mkt_long_pct 53.42%</span> 从
              56.11% —— 一根 −2.69pt de-crowd（24h 区间 53.20 / 56.73）、
              现在是这波回补里最不拥挤的。perp 对现货
              <span className="dn-tag bear">−$60.67 折价</span> 在快照
              （1h 均 −$63.83；4h 均 −$61.15；24h 均 −$57.00、区间
              −$159.78 / +$50.94 —— 24h 内 basis 短暂翻过一次升水、但坐在
              持续折价上）。1 分钟 aggressor skew 快照
              <span className="dn-tag bear">−13.1</span>（1h 均 +0.95、区间
              −21.3 / +29.0）—— 快照上一档温和卖倾斜、在一根双向小时里。
              <span className="dn-em">
                funding 冷 + 负数回来 + SM 回补 + retail 泄：scout 的泄杠杆
                腿都到手了。没到的那一条是 OI —— 第三根缩意味着回补仍是
                grind、所以 scout 以最小 size starter 上、不是一根信念多。
              </span>
            </p>

            <p>
              窗口流向说这根上印骑在一根回补 grind 上、后来转双向、最后
              一小时终于绿。<span className="dn-em">24h 读法对一根正价格
              是杂色的</span>：24h 价格
              <span className="dn-tag bull">+0.85%</span>、OI
              <span className="dn-tag bear">−1,112.5 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +957.2</span>、期货 CVD
              <span className="dn-tag bear">Δ −660.8</span>、大单
              <span className="dn-tag bull">+123.1 BTC / 975 笔</span>、
              taker-net <span className="dn-tag bear">−644.0</span> ——
              <span className="dn-em">
                现货 aggressor 买（+957）而期货 aggressor 与 taker 卖、OI
                缩：一根现货主导的回补抬、不是堆着的期货需求（cb_cvd 和
                fut_cvd 都在 06:20Z 08-05 / 14:20 BJ reset；24h delta 跨那
                根断口 reset 调整）
              </span>
              。~4h（行窗 04:04 → 08:05 BJ、比精确时钟长一行）：价格
              <span className="dn-tag bear">−0.33%</span>、OI
              <span className="dn-tag bear">−1,455.6 BTC</span>、现货 CVD
              <span className="dn-tag bear">Δ −397.1</span>、期货 CVD
              <span className="dn-tag bear">Δ −11.7</span>、大单
              <span className="dn-tag bull">+198.2 BTC / 108 笔</span>、
              taker-net <span className="dn-tag bear">−11.8</span> ——
              <em>区间顶部褪去、现货侧被卖、OI 大幅泄</em>。~1h（行窗
              07:04 → 08:05 BJ、比精确时钟长一行）：价格
              <span className="dn-tag">−0.01%</span>、OI
              <span className="dn-tag bear">−204.7 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +432.7</span>、期货 CVD
              <span className="dn-tag bull">Δ +268.9</span>、大单
              <span className="dn-tag bull">+128.6 BTC / 17 笔</span>、
              taker-net <span className="dn-tag bull">+268.8</span> ——
              <em>最新一小时流向全绿、OI 仍在缩 —— 一根回补买盘把现货撑在
              盖上</em>。24h 那根突破印在一根现货主导的回补进正 gamma 盖、
              4h 褪了高点、1h 显示一根回补买盘在守盖、仓位仍在下来。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 图 · regime 翻到 5/9 趋势延续（JT≥0）· 5 帧水下金叉簇 + 7 帧底背离说慢本子在翻上 · 但一根新鲜 8h ⚡TD9 SELL 和刚穿的 1h 死叉警告快周期在盖上超买</span>
            </h2>

            <p>
              <span className="dn-signal">
                regime 翻到趋势延续、慢本子继续翻上 —— 但快帧在盖上闪超买、
                和 08-05 一样
              </span>
              。regime 标现在是
              <span className="dn-tag bull">5/9 周期动量体制（JT≥0）——
              偏趋势延续</span>（从 08-05 的 5/9 cycle-reversal JT&lt;0 翻）、
              动量本子跟着价格翻。水下金叉簇横跨
              <span className="dn-tag bull">4h（15b）/ 8h（8b）/ 12h（3b）/
              3d（9b）/ 1w（2b）</span> —— 五帧、早期多头转换 tell 守在
              中-慢本子上 —— 底背离簇长到
              <span className="dn-tag bull">七帧（15m/30m/1h/4h/8h/12h/1w）</span>
              、从 08-05 的五帧。引擎帧持多头倾斜：15m/30m/1h 都印在云上、
              1h RSI 59.6（偏多）。但警告和它们一起印：
              <span className="dn-tag bear">一根新鲜 8h ⚡TD9 SELL</span>
              （超买反转提示、云刚上穿）、一根
              <span className="dn-tag bear">1h 水上死叉刚印</span>（快帧上
              早期多转空探）、顶背离簇横跨 15m/30m/1h/1d（4 帧）。1M 带一根
              <span className="dn-tag bull">⚡TD9 BUY</span>。
              <span className="dn-em">
                直读：慢结构在翻上（regime 翻趋势延续、五帧金叉、七帧
                底背离）、支持仓位本子刚开的 scout。但快帧说眼下这根反弹
                拉伸了 —— 一根新 8h TD9 sell 和一根新鲜 1h 死叉正在 D-EMA50
                盖上。慢翻和快耗竭在同一水位开火、正是一根「贴盖」要么守
                要么盘中褪的设置。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>读</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">64,627</td><td className="num">46.7</td><td className="neut">死叉（水上）13b</td><td className="bull">云上 41b</td><td>Buy 1</td><td>偏多 · 底背离</td></tr>
                <tr><td>30m</td><td className="num">64,627</td><td className="num">52.2</td><td className="neut">死叉（水上）4b</td><td className="bull">云上 21b</td><td>Buy 2</td><td>谨慎 · 底背离</td></tr>
                <tr><td>1h</td><td className="num">64,627</td><td className="num bull">59.6</td><td className="bear">死叉（水上）刚印</td><td className="bull">云上 59b</td><td>Buy 4</td><td>偏多 · 顶背离</td></tr>
                <tr><td>4h</td><td className="num">64,627</td><td className="num bull">61.7</td><td className="bull">金叉（水下）15b</td><td className="bull">云上 3b</td><td>Sell 4</td><td>谨慎 · 底背离</td></tr>
                <tr><td>8h</td><td className="num">64,627</td><td className="num bull">57.8</td><td className="bull">金叉（水下）8b</td><td className="neut">云上 刚穿</td><td>⚡ TD9 SELL</td><td>谨慎 · 底背离 · TD9 卖</td></tr>
                <tr><td>12h</td><td className="num">64,627</td><td className="num bull">55.3</td><td className="bull">金叉（水下）3b</td><td className="neut">云内 62.3–64.8k</td><td>Sell 6</td><td>谨慎 · 底背离</td></tr>
                <tr><td>1d</td><td className="num">64,627</td><td className="num">53.2</td><td className="neut">死叉（水上）10b</td><td className="neut">云内 62.7–68.0k</td><td>Sell 3</td><td>偏空 · 顶背离</td></tr>
                <tr><td>3d</td><td className="num">64,627</td><td className="num">46.5</td><td className="bull">金叉（水下）9b</td><td className="bear">云下 ↑76.4k</td><td>Sell 2</td><td>偏空 · 趋势</td></tr>
                <tr><td>1w</td><td className="num">64,627</td><td className="num">40.5</td><td className="bull">金叉（水下）2b</td><td className="bear">云下 ↑85.9k</td><td>Sell 1</td><td>谨慎 · 底背离 · SMA200 +1.35%</td></tr>
                <tr><td>1M</td><td className="num">64,627</td><td className="num">44.2</td><td className="neut">—</td><td className="bull">云上 ↓47.4k</td><td>⚡ TD9 BUY</td><td>偏多 · 趋势</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 08:01 BJ（00:01Z）scan（滚动
                    latest 文件；逐字存档于
                    /opt/desk-note/snapshots/2026-08-06-0005/）。头部告警：
                    <em>8h ⚡TD9 SELL、1h 水上死叉（刚印）、1M ⚡TD9 BUY</em>；
                    5 帧水下金叉簇 4h/8h/12h/3d/1w。顶背离 4：15m/30m/1h/1d ·
                    底背离 7：15m/30m/1h/4h/8h/12h/1w。regime 5/9 趋势延续
                    （JT≥0）。扫描现货 $64,627、24h +0.87%、H/L $65,022 /
                    $63,847、qVol $9.34B、净计 4 多 / 3 空 / 3 中性。收盘为
                    未收盘 K 线；每个值在各 TF 收盘前按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵读的是一根回补摸到它的盖、不是穿清它。现货 $64,620 坐在
              <span className="dn-tag bull">D-SMA50 $63,271.87 上方 +2.13%</span>、
              <span className="dn-tag bull">D-EMA20 $64,076.05 上方 +0.85%</span>、
              <span className="dn-tag bull">D-SMA20 $64,428.59 上方 +0.30%</span>
              —— 三根正日线偏移（比 08-05 的两根多）—— 未收盘的
              <span className="dn-tag bull">W-SMA200 $63,759.37（+1.35%）</span>
              和已结的 200W 周期地板
              <span className="dn-tag bull">$63,533.52（+1.71%）</span> 在下方。
              头顶、就在眼前：
              <span className="dn-tag bear">D-EMA50 $64,633.70（−0.02%）</span>
              —— 那根盖、升到正贴现货 —— 然后一道跳空到
              <span className="dn-tag bear">D-EMA100 $67,007.04（−3.56%）</span>、
              <span className="dn-tag bear">D-SMA100 $68,245.64（−5.31%）</span>、
              <span className="dn-tag bear">W-SMA20 $69,215.20（−6.64%）</span>、
              <span className="dn-tag bear">D-SMA150 $69,472.43（−6.98%）</span>、
              <span className="dn-tag bear">D-EMA150 $69,757.04（−7.36%）</span>、
              <span className="dn-tag bear">D-SMA200 $70,517.91（−8.36%）</span>、
              <span className="dn-tag bear">D-EMA200 $72,501.25（−10.87%）</span>、
              <span className="dn-tag bear">W-EMA150 $73,976.57（−12.65%）</span>。
              更高更远、已弃用：W-SMA150 $76,880（−15.95%）、W-EMA50 $77,805
              （−16.95%）、W-EMA100 $78,771（−17.96%）、W-SMA50 $83,353
              （−22.47%）、W-SMA100 $88,659（−27.11%）。W-EMA200 坐在
              <span className="dn-tag bear">$68,572.12（−5.76%）</span>。
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-08-06 00:05Z（close
                $64,599.80）；偏移按 live 现货 $64,620.23 重算。显示的 MA
                水位按 $ 取整、偏移用精确序列值算。周 ladder 按完整
                2019–2026 wildcard（362 根右标周 bar）算、所以 W-SMA200 可
                计算：$63,759.37 未收盘（+1.35%）与 $63,533.52 已结 —— 已结
                值是 trap-watch 周收 200-SMA（重算 08-03 00:11Z、全篇收盘用
                的那条地板）。W-EMA200 $68,572.12（−5.76%）与 W-EMA150
                $73,976.57（−12.65%）是全历史 EMA。日线收盘：08-01
                $62,792.30、08-02 $63,550.00、08-03 $63,497.20、08-04
                $64,075.50、08-05 $64,633.90、08-06（未收盘）$64,599.80 ——
                08-05 收清过备忘的 $64,612 D-EMA50 盖 $22、但同日 D-EMA50
                升到 $64,635.09、所以收盘落在升起来的盖下方 $1.19：在旧
                水位上是破盖收盘、在移动的那根上是一吻。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子 re-gamma 到全谱系最重正向 · headline +108.0M / rollup +121.04M（08-05 是 +106.0M / +93.78M）· flip 升到 $63,191、现货 +2.26% 上方 · $65k 墙 +26.35M 正坐在现货上 —— 一道压 $64.5k–$68k 带的重双向盖</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子第四根连续加正 gamma —— 阻尼现在是整波回补里最
                重的、正夹在现货上
              </span>
              。headline GEX 是
              <span className="dn-tag bull">+108.0M / 1%</span>（08-05 是
              +106.0M）、by-expiry rollup 是
              <span className="dn-tag bull">+121.04M</span>（08-05 是
              +93.78M；by-expiry strip 合到 gex_summary net_gex $121.04M）。
              0-γ flip 升
              <span className="dn-tag">$63,124 → $63,191（+$67）</span>、现货
              $64,620 坐在 <span className="dn-tag bull">flip 上方 +2.26%</span>
              （现货口径 64,620.23 / 63,191.38 − 1 = +2.261%）；GEX 文件自己的
              Deribit idx $64,938.37（比 live 现货高 $318）读
              <span className="dn-tag bull">+2.76%</span>（64,938.37 /
              63,191.38 − 1 = +2.764%）—— 两参考都正、现货在 flip 上方两侧
              都成立。墙图是一道重正向带夹在现货上：
              <span className="dn-tag bull">$65k +26.35M</span>（最重墙、正贴
              现货）、
              <span className="dn-tag bull">$70k +20.52M</span>、
              <span className="dn-tag bull">$66k +19.23M</span>、
              <span className="dn-tag bull">$67k +18.62M</span>、
              <span className="dn-tag bull">$68k +18.39M</span>、
              <span className="dn-tag bull">$72k +10.30M</span>、
              <span className="dn-tag bull">$80k +8.74M</span>、
              <span className="dn-tag bull">$64.5k +5.23M</span>、负侧是下面的
              崩盘 put 架：
              <span className="dn-tag bear">$60k −17.88M</span>（最重负、崩盘
              put、从 08-05 的 −19.59M 松）、
              <span className="dn-tag bear">$58k −5.49M</span>、
              <span className="dn-tag bear">$62k −4.43M</span>。
              <span className="dn-em">
                +$64.5k–$68k 带的五根大 strike 合计 +87.82M（+26.35M /
                +5.23M / +19.23M / +18.62M / +18.39M 叠）；再加较小的 $65.5k
                +3.21M 和 $66.5k +0.02M 填上 profile 缺口、full-band 是
                +91.04M、其中 $65k 墙单独是全谱系最重单 strike、正坐在现货
                上 —— 这是 scout 交易进去的天花板。dealer 在褪势里买、在挤压
                里卖、横跨整个回补区；本子在结构性阻尼这根突破、所以 scout
                的目标是一根 grind、不是一根冲
              </span>
              。近端：6AUG26 0.3DTE
              <span className="dn-tag bull">+19.55M</span> 仍在本子上（今日
              08:00Z 结算、比此快照晚约 8h）—— 一根正的前端、没有近端负
              放大器。前向 strip：7AUG 1.3 +31.60M、8AUG 2.3 +2.98M、9AUG
              3.3 +1.56M、14AUG 8.3 +11.16M、21AUG 15.3 +13.80M、28AUG 22.3
              +21.49M、25SEP 50.3 +11.10M、30OCT 85.3 +1.31M、25DEC 141.3
              +4.59M、26MAR27 232.3 +1.21M、25JUN27 323.3 +0.70M —— 整条前向
              strip 都正；没有一根负 gamma 块能把本子翻空。
            </p>

            <p>
              IV 中位数横跨链是
              <span className="dn-tag">40.6%</span> 对 30D close-to-close RV
              <span className="dn-tag">29.11%</span> —— 链级溢价
              <span className="dn-tag">~+11.5pt</span>。
              <span className="dn-em">
                是横跨合约的链中位、<em>不是</em>可交易价差；合约计本次没
                surface、expiry- / strike-level vega、skew、期限结构仍未
                载入、vol 读法保持 framework only。
              </span>{' '}
              Put/Call OI 比 0.527（call OI 224,009 对 put OI 118,040 ——
              一本 call 重的本子、与正 gamma 阻尼一致）。RV 方法：30D
              close-to-close、logret.std × √365 × 100、用最末 30 根日 log
              return（= 连续 31 根日 close）、锚自 parquet 最末 bar
              2026-08-06 00:05Z；底层 31-close 窗区间 $62,255 – $66,522。
              （参考：最末 29 returns / 30 closes 读 28.89%；页面值 29.11%
              来自 30 returns。）
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · Tier-1 又松（10Y −7bp 到 4.63%、TIPS −3bp 到 2.40%、HY OAS −5bp 到 2.73%）· 利率筛仍 FALSE 但收窄到 8bp（08-05 是 15bp）· MOVE 暗 · 跨资产 regime 掉到 IDIOSYNCRATIC · BTC 仍落后一条强风险盘</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观面在利率、实际利率与信用上又松了第二天 —— reclaim-long
                利率筛收窄到 8bp、但仍 FALSE
              </span>
              。面板渲染 2026-08-05 22:17Z、比快照早约 1.8h。US 10Y nominal
              <span className="dn-tag bull">4.63%（−7.0bp）</span>、regime z
              <span className="dn-tag bear">+1.97</span> —— RISK-OFF 标、比
              08-05 的 4.70% 松 7bp。10Y TIPS real
              <span className="dn-tag bull">2.40%（−3.0bp）</span>、regime z
              <span className="dn-tag bear">+2.46</span> —— 仍 EXTREME
              RISK-OFF、已松。5Y5Y BE 通胀
              <span className="dn-tag">2.26%（−1.0bp）</span>。HY OAS
              <span className="dn-tag bull">2.73%（−5.0bp）</span>、regime z
              <span className="dn-tag bull">−0.92</span> —— 松、已松。MOVE 债波
              <span className="dn-tag stale">不可用（抓取失败）</span> ——
              暗第二次渲染。DXY
              <span className="dn-tag bull">99.88（−0.08）</span> —— 软。
              Fed 净流动性
              <span className="dn-tag bear">$5.825T（−0.092T）</span>、
              RISK-OFF 偶发。US-JP 10Y 利差
              <span className="dn-tag">1.96%（−7.0bp）</span>；USD/JPY
              <span className="dn-tag">157.70（+0.00）</span>。NFCI −0.529
              （松、陈旧）。
              <span className="dn-em">
                净：reclaim-long 利率筛（10Y &lt; 4.55%）在 4.63% 仍 FALSE、
                但缺口从 08-05 的 15bp（4.70%）和 08-04 的 20bp（4.75%）收窄
                到 8bp —— 三天在松、往闸靠。10Y 和 TIPS 仍带 RISK-OFF /
                EXTREME RISK-OFF regime z（+1.97 / +2.46）；松的一天不改
                regime 读。MOVE 暗第二次渲染、所以债波确认不可用。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>宏观指标</th>
                  <th>水位</th>
                  <th>Δ</th>
                  <th>regime z</th>
                  <th>读</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>US 10Y nominal</td><td className="num">4.63%</td><td className="num bull">−7.0bp</td><td className="num bear">+1.97</td><td className="bear">紧 · 已松第三天</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.40%</td><td className="num bull">−3.0bp</td><td className="num bear">+2.46</td><td className="bear">EXTREME 紧 · 已松</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.26%</td><td className="num bull">−1.0bp</td><td className="num">—</td><td className="neut">在松</td></tr>
                <tr><td>HY OAS</td><td className="num">2.73%</td><td className="num bull">−5.0bp</td><td className="num bull">−0.92</td><td className="bull">松 · 已松</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.529</td><td className="num">—</td><td className="num bull">—</td><td className="stale">松 · 陈旧</td></tr>
                <tr><td>MOVE 债波</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">不可用 · 抓取失败（第二次渲染）</td></tr>
                <tr><td>DXY</td><td className="num">99.88</td><td className="num bull">−0.08</td><td className="num">—</td><td className="bull">更软</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.825T</td><td className="num bear">−0.092T</td><td className="num">—</td><td className="bear">当周被抽</td></tr>
                <tr><td>USD/JPY</td><td className="num">157.70</td><td className="num">+0.00</td><td className="num">—</td><td className="neut">平</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">1.96%</td><td className="num bull">−7.0bp</td><td className="num">—</td><td className="neut">在收窄</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7402</td><td className="num bull">−0.01</td><td className="num">—</td><td className="bull">松</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">（月度、65d）</td><td className="num bear">—</td><td className="stale">月度 · 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、汇总 00:01Z ——
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。
              非对角线均值 <span className="dn-tag">|r| 0.214</span>
              （从 08-05 的 0.289 跌破 0.25 NORMAL 底 ——
              <span className="dn-tag">IDIOSYNCRATIC 区段</span>、资产按各自
              驱动在动）。BTC 对风险复合体的对齐松了：TSLA
              <span className="dn-tag">+0.464</span>（顶）、NQ
              <span className="dn-tag">+0.458</span>、SP500
              <span className="dn-tag">+0.386</span>、NVDA
              <span className="dn-tag">+0.357</span>、COPPER +0.286、JP225
              +0.280、SILVER +0.248、URNM +0.247、GOLD +0.221。7d 相对表现
              又是最大声那行：
              <span className="dn-tag bull">BTC +1.43%</span> —— 参与了一点、
              但仍落后风险盘：NQ
              <span className="dn-tag bull">+7.41%</span>、SP500
              <span className="dn-tag bull">+5.29%</span>、JP225
              <span className="dn-tag bull">+5.36%</span>、而大市值跑得狠 ——
              AMZN <span className="dn-tag bull">+18.55%</span>、MSFT
              <span className="dn-tag bull">+16.13%</span>、NVDA
              <span className="dn-tag bull">+15.30%</span>、GOOGL
              <span className="dn-tag bull">+8.55%</span>、META
              <span className="dn-tag bull">+8.16%</span>、TSLA
              <span className="dn-tag bull">+7.78%</span>。金属硬：URNM
              +10.29%、PALL +8.35%、PLAT +8.03%、SILVER +7.16%、COPPER
              +6.27%、GOLD +4.78%。能源仍软：CL
              <span className="dn-tag bear">−11.34%</span>、BRENT
              <span className="dn-tag bear">−9.93%</span>；AAPL
              <span className="dn-tag bear">−7.94%</span> 是唯一一根红的
              大市值。
              <span className="dn-em">
                BTC 对 TradFi 引擎的 7d 落后收窄到约 −5.98pt（BTC +1.43%
                对 NQ +7.41%、从 08-05 的 −6.44pt）—— BTC 开始参与、但仍
                落后一根宽的 risk-on 周。regime 掉到 IDIOSYNCRATIC
                （|r| 0.214）、所以本周盘面两个方向都没在驱动 BTC；回补是
                BTC 内生的、scout 站在自己的仓位腿上、不是宏观顺风
              </span>
              。JGB 月度 2.67% 陈旧 —— 不依赖。
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · 本子移到 SCOUT LONG STARTER 0.2R · 08-05 分叉往多头了结 —— D-EMA50 盖收 + SM 回补都印 · 按贴盖 / 重 gamma caveat 进最小 size · chase-short STOOD DOWN</span>
            </h2>

            <p>
              <span className="dn-signal">
                08-05 备忘把一根 scout long 挂在两条腿上 —— D-EMA50 盖收在
                $64,612 上方 AND SM 回补 —— 这一轮两条都印了、所以本子从
                flat 移到一根最小 size starter
              </span>
              。08-05 日线收 $64,633.90（清过 $64,612 盖）、SM 干净回补
              （+969、空侧比多侧跑得更狠、net −9,038）。按那篇自己的规则、
              这开了 scout。三条 caveat 把它 size 到最小：(1) 收盘清过
              <em>旧</em>盖、但 D-EMA50 升到 $64,635、所以现货 −0.02% 贴着
              移动的盖 —— 一吻、不是一穿；(2) net −9,038 只比 −9,000 回补闸
              过一点；(3) OI 第三根连续缩（−1,112.5 BTC）、所以突破骑在
              回补 grind 上、后面没新多、进全谱系最重的正 gamma 盖（+108.0M
              headline、$65k 墙 +26.35M 正贴现货）。chase-short STOOD DOWN
              —— 地板守住、本子 re-gamma 更正、现货 +2.26% 在 flip 上方。
              本子：<span className="dn-em">scout long 0.2R</span>、下面定义。
            </p>

            <div className="dn-trade">
              <span className="dn-side bull">scout · LONG · ARMED（starter 0.2R）· 08-05 两条腿都印 —— D-EMA50 盖收 + SM 回补</span>
              <div className="dn-trade-name">
                回补反弹 scout —— 已开：08-05 日线清过 D-EMA50 盖、SM 干净回补进去
              </div>
              <div className="dn-thesis">
                08-05 备忘把这根 scout 挂在同一 session 内 D-EMA50 盖收在
                $64,612 上方 AND SM 回补。两条都印了：08-05 日线收
                $64,633.90、SM 回补 +969（−10,007 → −9,038、空侧 −2,377 对
                多侧 −1,407、一根干净读、无 BJ-14:36 假象）。支撑本子确认了
                泄杠杆腿：funding 冷得狠（24h 均值 +6.00% → +3.06%、58 根
                负数回来）、retail de-crowd 到 53.42、regime 翻到 5/9 趋势
                延续、慢结构在翻上（5 帧水下金叉簇、7 帧底背离）。抵消的
                caveat 把 size 压最小：现货 −0.02% 贴着升起来的 D-EMA50 盖
                （一吻、不是一穿）、OI 第三根连续缩（−1,112.5 BTC —— 突破是
                回补 grind、不是新需求）、dealer 本子是全谱系最重正 gamma
                盖（+108.0M、$65k 墙 +26.35M 贴现货）在阻尼路径。starter
                0.2R、只在决定性穿清盖时加。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">入场（已开）</span><span className="dn-lvl-v bull">scout long 0.2R 市价 ~$64,620 —— 两条点名腿（盖收 $64,633.90 + SM 回补 +969）本 session 都印</span></div>
                <div><span className="dn-lvl-k">加仓触发</span><span className="dn-lvl-v bull">一根 1d 收决定性穿清 D-EMA50 盖（&gt; ~$64,900、在升起来的盖上方、不只是旧的 $64,612）AND SM net 守 &gt; −9,000 —— 加 0.2R</span></div>
                <div><span className="dn-lvl-k">止损</span><span className="dn-lvl-v bear">1d 收 &lt; $63,533（200W 周期地板）—— 一根收回地板下方结束回补读；更紧工作止损 1d 收 &lt; $63,191 flip</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">$67,007（D-EMA100）然后 $68,246（D-SMA100）—— 进 +$64.5k–$68k / +91.04M 正 gamma 带；当 grind 处理、不是一根冲</span></div>
                <div><span className="dn-lvl-k">R/R</span><span className="dn-lvl-v">入场 ~$64,620、止损 $63,533 = ~$1,087 风险；首目标 $67,007 = ~$2,387 ≈ 2.20:1 —— 但 +91.04M 正 gamma 带阻尼路径、所以实现 R 大概低于几何 R</span></div>
              </div>
              <div className="dn-gating">
                <b>硬规则：</b>starter size 只到现货决定性穿清 D-EMA50 盖。
                贴盖（现货 −0.02% 在 $64,634）加第三天 OI 缩意味着突破还没
                被需求确认 —— 它是一根摸到盖的回补 grind。不要只在价格腿上
                加；加仓要一根收清升起来的盖 AND SM 仍在回补。如果 SM 翻
                回空或 08-06 日线收回 flip 下方、砍 starter —— 开仓条件是
                一根单 session 印、不是一根站住的基。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">flat · chase-short · STOOD DOWN · 地板守住、gamma 更重正、现货 +2.26% 在 flip 上方</span>
              <div className="dn-trade-name">
                Chase-short —— 停手：回补清过盖、dealer 本子 re-gamma 到最重正向
              </div>
              <div className="dn-thesis">
                chase-short 挂在一根 flip / 旧地板破（$63,191 flip / $63,311
                旧地板）AND SM 空 AND gamma 翻负上。三条都指向错的方向：
                现货 +2.26% 在 flip 上方（走更远、不是穿过）、dealer 本子
                re-gamma 到 +108.0M headline / +121.04M rollup —— 整波回补
                最重的正阻尼、正是空头要的负 gamma 放大器的反面 —— 而 SM
                回补了（+969）、所以连 SM-空腿现在都在松。每条腿都对着它、
                空头停手；$60k 的崩盘 put 架也松到 −17.88M（从 −19.59M）、
                留更少级联目标。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">re-arm 触发</span><span className="dn-lvl-v bear">1d 收 &lt; $63,191 flip / $63,311 旧地板 AND aggregate GEX 翻负（一根新负 gamma 块加进前段 expiry 内）</span></div>
                <div><span className="dn-lvl-k">SM 腿（现在在松）</span><span className="dn-lvl-v bear">SM net −9,038、仍空但在 COVER（+969）—— 空腿在变弱、不是变强</span></div>
                <div><span className="dn-lvl-k">re-arm 上的目标</span><span className="dn-lvl-v">$62k（−4.43M）然后 $60k（−17.88M 崩盘 put 架）—— 两者都对 08-05 松了</span></div>
                <div><span className="dn-lvl-k">不要</span><span className="dn-lvl-v">不要空进一本 +108.0M 正 gamma 的本子、200W 地板守住、价格 +2.26% 在 flip 上方、SM 在回补</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveat：</b>整条前向 GEX strip 都正（到 25JUN27 无负 gamma
                块）；一根 gamma 翻要求一根新负块建起来、不只是现货往下漂。
                $60k −17.88M 崩盘 put 是结构性目标、但去那里的路穿过
                +$64.5k–$68k / $62k−$63k 正带、这带两个方向都阻尼。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 背离已了结 · 盘面拖动了本子 · 盯需求确认或褪回盖</span>
              <div className="dn-trade-name">
                背离盯位 —— 往多头 RESOLVED：价格清过盖、SM 回补进去、但 OI 仍在缩
              </div>
              <div className="dn-thesis">
                08-05 备忘框了一根干净的价格/仓位背离、说它会往两个方向之一
                了结 —— 盘面拖本子（SM 回补进一根 D-EMA50 盖收、开 scout）或
                本子拖盘面（回补跌破 flip、re-arm chase-short）。它往
                <em>第一</em>个方向了结：08-05 日线清过盖、SM 干净回补 +969。
                泄杠杆腿确认了（funding 冷、负数回来、retail de-crowd）、慢
                MTF 本子翻上（regime 到趋势延续、5 帧金叉簇、7 帧底背离）。
                悬着的问题是需求：OI 第三根连续缩、所以突破骑在回补上、不是
                新多 —— 下一个盯位是 OI 是否开始在价格后面堆（确认 scout、开
                加仓）、还是快帧耗竭（8h TD9 卖、1h 死叉）把现货褪回盖及
                下方。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">多头确认</span><span className="dn-lvl-v bull">1d 收清过升起来的 D-EMA50 盖、OI 在堆（缩反转）、SM net 守 &gt; −9,000 —— 加 scout</span></div>
                <div><span className="dn-lvl-k">空头风险</span><span className="dn-lvl-v bear">1d 收 &lt; $63,191 flip、SM 翻回空 —— 了结失败、砍 scout、盯 chase-short re-arm</span></div>
                <div><span className="dn-lvl-k">快帧 tell</span><span className="dn-lvl-v bear">8h ⚡TD9 SELL + 1h 水上死叉（刚印）—— 近端风险是从盖褪回带内</span></div>
                <div><span className="dn-lvl-k">慢帧 tell</span><span className="dn-lvl-v bull">regime 翻到 5/9 趋势延续 + 5 帧水下金叉簇 + 7 帧底背离 —— 慢翻支持已开的 scout</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>背离在仓位上往多头了结、所以本子开了一根
                starter —— 但一根在仓位上了结、进一个未确认的需求基（OI 仍
                在缩）和一道重正 gamma 盖、是一根 starter、不是一根整仓。在
                需求确认上加（OI 堆 + 决定性破盖）、不在开仓印上加。如果快帧
                褪赢、现货收回 flip 下方、这次了结是假突破 —— 砍、重评。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 背离往多头了结 —— 盘面拖动了本子 · scout 开了一根 0.2R starter · 本篇转在需求是否确认（OI 堆、盖穿清）或快帧褪把现货拉回 flip 下方</span>
            </h2>

            <p>
              08-05 那张决策条件里：cover-bounce-scout-arms 路径
              <em>触发</em> —— 08-05 日线收 $64,633.90（在 $64,612 D-EMA50 盖
              上方）AND SM 回补 +969、两条腿在同一 session；chase-short
              re-arm <em>没触发</em> —— 现货坐在升起来的 $63,191 flip 上方
              +2.26%、gamma 走更正（+108.0M）；200W-周期-地板-丢条件
              <em>没触发</em> —— 地板守住、现货 +1.71% 在上方；回补-守-gamma-
              正条件 <em>守住</em> —— 收盘守在地板上方、GEX 保持正。
              <em>08-05 备忘标的那根背离往多头了结了：盘面拖动了本子。</em>
              今天条件围绕一根开了但还没被需求确认的 scout 重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>回补反弹 scout（多）—— ARMED、加仓触发</td><td className="bull">1d 收决定性穿清升起来的 D-EMA50 盖（&gt; ~$64,900）AND OI 在堆（缩反转）AND SM net &gt; −9,000</td><td>持 0.2R starter；在需求确认的突破上加 0.2R、目标 $67,007（D-EMA100）然后 $68,246（D-SMA100）</td></tr>
                <tr><td>Scout 止损 / 砍</td><td className="bear">1d 收 &lt; $63,191 flip（工作）或 &lt; $63,533 200W 地板（硬）—— 或 SM 翻回净空</td><td>砍 starter —— 开仓条件是一根单 session 印、不是站住的基</td></tr>
                <tr><td>Chase-short（空）—— re-arm</td><td className="bear">1d 收 &lt; $63,191 flip / $63,311 旧地板 AND aggregate GEX 翻负</td><td>只在一根全新审计触发后重评 chase-short —— 无站立 size；框架目标 $62k（−4.43M）然后 $60k（−17.88M 崩盘 put）</td></tr>
                <tr><td>200W 周期地板丢</td><td className="bear">周收 &lt; $63,533.52（200W）—— 会结束 5 周在地板上方的 streak</td><td>周期支撑破 —— 另起评估；回补读法结束</td></tr>
                <tr><td>快帧褪（近端）</td><td className="bear">8h ⚡TD9 SELL + 1h 水上死叉（刚印）了结成一根 1d 收 &lt; $63,191 flip</td><td>回补从盖褪；砍 scout、盯 chase-short 的 flip-丢 re-arm</td></tr>
                <tr><td>reclaim-long 利率筛</td><td className="bear">10Y &lt; 4.55% 收 —— 在 4.63% FALSE（距 8bp 触发、从 08-05 的 15bp 收窄）</td><td>独立筛 FALSE 但在靠闸；一根 BTC 内生的回补反弹在没有利率顺风下跑、但三天在松、往那走</td></tr>
                <tr><td>BTC 对 TradFi 落后</td><td className="bear">BTC +1.43% 对 NQ +7.41% 7d = −5.98pt 落后 · |r| 0.214 IDIOSYNCRATIC</td><td>盯 BTC 追赶参与；regime 掉破 NORMAL、所以盘面两向都没在驱动 BTC —— 回补是 BTC 内生的</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是
              <span className="dn-signal">
                需求是否确认这根已开的 scout —— 一根决定性收清升起来的
                D-EMA50 盖、OI 终于在价格后面堆（加 scout、目标 $67k–$68.5k
                簇）—— 还是快帧耗竭赢、现货褪回 $63,191 flip 下方（砍
                starter、如果 gamma 翻负、盯 chase-short re-arm 往 $60k
                −17.88M 崩盘 put、不过松掉的 carry 和那道重 +91.04M 正 gamma
                带留一条被阻尼的路）
              </span>
              。在那之一印出前、本篇按写好的跑：价格/仓位背离往多头了结 ——
              08-05 日线清过 D-EMA50 盖、SM 干净回补、funding 冷负数回来、
              retail de-crowd、慢 MTF 本子翻上到趋势延续 —— 所以本子带一根
              最小 size scout long 0.2R。但突破是一根贴盖、骑在第三天 OI 缩
              上、进全谱系最重的正 gamma 盖、所以 size 保持最小、加仓等需求。
              下一个 24h 的对读是<em>持 starter、只在一根需求确认的收清盖
              上加 —— 不追这一吻</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2（已过 codex 敌对式审计 · findings 记于 audits/2026-08-06-desk-note.md）
            </span>
            <b>状态：</b>已过 codex 敌对式审计（STAGE B、hostile-but-fair、
            xhigh 力度）。判决 PASS-WITH-NOTES —— 0 CRITICAL / 0 MAJOR /
            2 MINOR / 0 NIT；v1 EN 无发布性事实或结构断裂。两条 MINOR
            finding 已在 v2 应用；全文 grep-closure 每条 finding 都跑过
            （pattern / 修前命中 / 修后命中）、无残留。
            <b>DN-001</b>（MINOR —— +$64.5k–$68k / +91.04M gamma 带括号不
            合脚：列的五根大 strike 合 +87.82M、不是 +91.04M）：搜
            <code> &quot;sums to +91.04M&quot;</code> 与加数串 —— 修前 1、
            修后 0。在 :532 修 —— 说五根大 strike 合 +87.82M、再加漏掉的
            $65.5k +3.21M 和 $66.5k +0.02M 填 profile 缺口到 full-band
            +91.04M；:726/:727/:853 独立的 +91.04M full-band 引用作为
            profile 带总和是对的、保留。RESOLVED（修后命中 = 0）。
            <b>DN-002</b>（MINOR —— 4h/1h 窗口流向标用了比时钟标长一行的
            切片、未披露）：搜 <code>&quot;4h (into snapshot)&quot;</code> 与
            <code> &quot;1h: price&quot;</code> —— 各修前 1、修后 0。在 :355
            与 :363 修 —— 披露行偏移窗（~4h 行窗 04:04 → 08:05 BJ、~1h 行窗
            07:04 → 08:05 BJ、各比精确时钟长一行）；打印的 delta 不变、只是
            标注诚实。RESOLVED（修后命中 = 0）。整体：post codex hostile
            audit；全部 finding RESOLVED、已 v1 → v2。
            <b>Build note（INFO）：</b>本服务器跑 Node 18.19.1；Next 16.2.6
            对 Node &lt; 20.9.0 硬退出、所以完整 <code>next build</code> 被
            环境阻塞；<code>npx --no-install tsc --noEmit</code> 是 build proxy。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体
            情况个性化。数字反映单一原子快照（2026-08-06 00:05Z）、
            provenance 在数据来源条带中按节披露；宏观 Tier-1 面板渲染
            2026-08-05 22:17Z（比快照早约 1.8h）、部分输入明确陈旧、暗或
            待定并已标注。水位、规模与条件是交易台流程的示例、不是长期
            推荐。过去的相关性、γ 与仓位模式不绑定未来盘面。衍生品有全损
            风险、加杠杆下损失可超过保证金。
            <em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                背离往多头了结 —— 价格清过盖、smart money 回补进去。但这是
                一根贴盖、骑在回补 grind 上、进整波回补最重的正 gamma 盖。
                scout long、最小 size。在需求上加、不在这一吻上加。
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
            v2 · 2026-08-06 00:05Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            ma200w_trap_watch_state.json · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
