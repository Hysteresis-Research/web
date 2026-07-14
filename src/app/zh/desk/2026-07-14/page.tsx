import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-07-14 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-07-14',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-07-14' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260714() {
  await requireViewer('/zh/desk/2026-07-14');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-07-14 · v2</span>
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
              <span className="dn-big">$62,318</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−2.44%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-07-14 00:05Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-07-14 00:05Z（snapshot pin，tape 行 t=&ldquo;07-14 08:05&rdquo; BJ）</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · 审计时文件 tail = pin · tape `t` 是 BJ
                    （UTC+8）；00:05Z = t &ldquo;07-14 08:05&rdquo; · 此快照落在
                    周一 07-13 00:00Z 周结算后 24h · 14JUL 0.3DTE 期权在 08:00Z
                    结算（快照前约 8h）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-07-14 00:01Z scan（BJ 08:01）</td>
                  <td className="dn-flag">
                    滚动 latest 文件（每小时重写）· 存档于
                    snapshots/2026-07-14-0005/ · 较快照锚滞后约 4 分钟 · 含未收盘
                    K 线
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-14 00:01Z 快照</td>
                  <td className="dn-flag">
                    存档于 snapshots/2026-07-14-0005/ · 838 合约 · Deribit idx
                    $62,560 对 live $62,318（高 $242）· 14JUL 0.3DTE −4.40M 今日
                    08:00Z 结算（快照前约 8h）· IV 中位数 42.4% 是 pre-14JUL-settle、
                    来自此 00:01Z 文件
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-14 00:01Z
                  </td>
                  <td className="dn-flag">存档于 snapshots/2026-07-14-0005/ · 7d 1h bar · 22 资产 · 167 rows</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-13 22:16Z 渲染</td>
                  <td className="dn-flag">
                    存档于 snapshots/2026-07-14-0005/ · 渲染滞后约 1.8h · FRED
                    Tier-1：10Y 4.56%（+2bp、在 4.55% 筛上方）、TIPS 2.32%、HY OAS
                    2.69%、MOVE 77.8（+8.22）、DXY 101.28、Fed 净流动性 $5.958T
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-07-14 00:06Z</td>
                  <td className="dn-flag">
                    较快照锚晚约 1 分钟的 post-anchor 刷新（parquet 00:06Z bar
                    在 00:05Z live pin 之后一分钟、有意取作最新 MA/RV 口径、不是
                    锚前陈旧）· 偏移按现货重算 · 周线用 Binance W-MON 约定（周
                    收盘结算于周一 00:00Z）· 完整矩阵可算（359 根周 bar 跨 8 个
                    年度 parquet 2019–2026）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W-watch JSON</td>
                  <td className="dn-v-cell">weekly_200sma.json · 本次未生成</td>
                  <td className="dn-flag">
                    200W watch 不可用 —— 文件缺失；回落到矩阵 W-SMA200 $63,066
                    （不编造分位 / 上次事件）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED 月度 · IRLTLT01JPM156N</td>
                  <td className="dn-flag">陈旧 · 月度（73d）· 不作实时</td>
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
              <span className="dn-v">+8.86%</span>
              <span className="dn-src">live · 原始 0.008092 × 1095 = +8.86% · 重新点火冲顶 · 24h 均值 +8.01% · 封顶占用 535 / 1441 采样行 = 37.1%（一段连续区间钉在 +10.95% 封顶、从 2026-07-13 14:04Z / BJ 22:04 到 2026-07-13 22:58Z / BJ 07-14 06:58、约 8.9h）· 零负行 · 谷点 +1.68% ann @ 2026-07-13 00:10Z/00:11Z / BJ 08:10</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">+1.71% → +8.86%（+7.15pt、重新贴顶）</span>
              <span className="dn-src">24h 区间 +1.68% / +10.95% · funding 在前一快照接近其谷点（前一快照 +1.71%；精确 24h 谷是 +1.68% ann @ 2026-07-13 00:10Z/00:11Z）、随后冲到 +10.95% 封顶、坐在那里约 8.9h、期间 retail 堆多、价格下破 —— 是被套的多头付封顶、不是需求驱动的买盘</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">+6.49%（+6,531 BTC）</span>
              <span className="dn-src">live · 107,207 BTC（对前值 100,676 BTC +6,531，峰 107,755）· OI 跨窗口在扩 —— 是新鲜的 gross 空头仓、与 07-13 的 −693 去 gross 相反；SM 堆空、OI 随之扩张</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bear">64.84 / 35.16</span>
              <span className="dn-src">live_db `mkt_long_pct` · 从 57.56%（24h 前）再拥挤 +7.28pt —— retail 在价格穿破地板时堆进多头、正是 SM 把空头翻三倍的镜像；谱系里最拥挤的 retail 多</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−13,426（净 SHORT、把空头翻了三倍）</span>
              <span className="dn-src">live · long 11,119 − short 24,545 · short 加 +9,941、long +915 跨 24h —— 07-13 的新鲜空头堆加速成一根空头猛砸、整条谱系最深净空</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 07-13 备忘</span>
              <span className="dn-v bear">−4,426 → −13,426（−9,000 净、前值的 203.3%）</span>
              <span className="dn-src">|Δ|/prior_net = |−13,426 − (−4,426)| / 4,426 = 203.3% · 净大致翻三倍空（−4,426 → −13,426 ≈ 3.03×）· 一根离散重堆步 @ 2026-07-13 07:36Z / BJ 15:36（Δnet −5,850、同一分钟 Δlong +613 / Δshort +6,463）</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">42.4% / 30.02%</span>
              <span className="dn-src">GEX IV 中位数 · 838 合约（pre-14JUL-settle、来自 00:01Z 文件）· 是 N 合约链中位数、不是可交易价差 · 溢价 ~+12.4pt · RV 30D close-to-close 收益</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+1.29%（在上方）</span>
              <span className="dn-src">flip $61,527（前 $61,687 · 落 −$160）· 对 live 现货 $62,318.23（+1.29%；62,318.23/61,527 − 1 = 1.286%）/ GEX 文件 Deribit idx $62,560（+1.68%；62,560/61,527 − 1 = 1.679%、文件取整 +1.7%）—— 两参考都正、但缓冲从 +3.79% 崩到 +1.29% · aggregate GEX +37.7M 净多 γ（前 +96.6M —— 一根 −58.9M 去 γ）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                重新做空赢了：地板在盘面被交还、就在它结算确认后的一天
              </span>
              。07-13 备忘点出那一根会改写它的线 —— 现货需求压过新鲜的 SM 空、
              还是重新做空在周线确认的次日 fade 掉这根重夺？盘面为空头一边给了
              决定性回答。SM 没守 −4,426；它猛砸到
              <span className="dn-tag bear">−13,426（short +9,941、long +915、
              ≈3.03× 前值净）、在一根离散重堆步 @ 2026-07-13 07:36Z / BJ 15:36
              （单分钟 Δnet −5,850）</span>、OI 随空头堆积在扩
              <span className="dn-tag bear">+6,531 BTC（+6.49%）</span>、retail
              反向堆进 <span className="dn-tag bear">57.56% → 64.84%（+7.28pt）</span>、
              funding 重新点火到
              <span className="dn-tag bear">+10.95% 封顶</span>（占用 37.1%、
              被套多头付费）。价格在盘面破掉
              <span className="dn-tag bear">$63,066 W-SMA200 地板</span> ——
              现货 $62,318 在其下方 −1.19%、07-13 日收
              $62,307.00 是自 07-08 以来首根收在地板下方的日收、低点插到
              <span className="dn-tag bear">$61,850 @ 2026-07-13 18:20Z</span>。
              dealer 本子硬去 γ
              <span className="dn-tag bear">+96.6M → +37.7M</span>（连续第四根去
              γ）、flip 缓冲从 +3.79% 崩到
              <span className="dn-tag bull">+1.29%</span>、strip 上终于出现一根
              有意义的近端负放大器
              <span className="dn-tag bear">（14JUL 0.3DTE −4.40M、今日 08:00Z
              结算）</span>。MTF 引擎读
              <span className="dn-tag">5/9 周期反转「sell the bounce」</span>、
              总计 1 多 / 8 空 / 1 中性。回补反弹 scout 已死：它整条谱系为真的
              价格前置条件 FAILED —— 现货丢掉 D-EMA20 $62,836 和地板。最近 4h
              在 $61,850 上以现货买盘反弹、但那是破位水平上的反射、砸进一本
              极度做空的 SM 本子、不是需求基。本子保持 FLAT —— scout 作废、而
              追空又晚了：进一本 −13,426 SM 空、dealer flip 只在现货下方
              +1.29%；现在的问题是挤压穿回地板 vs 一根周一 07-20 周收重新确认
              破位。
            </p>

            <p>
              BTC 报 <span className="dn-tag">$62,318</span> live、
              <span className="dn-tag bear">−2.44%</span> 在 24h —— 一根把整条
              恢复缓冲交还回去的决定性下日 —— 在一条
              <span className="dn-tag">$64,318 / $61,850</span> 区间里（高 @
              2026-07-13 00:23Z / BJ 08:23、低 @ 2026-07-13 18:20Z / BJ 07-14
              02:20）。<span className="dn-signal">重夺在盘面被交还</span>：现货
              $62,318 坐在 $63,066 W-SMA200 地板下方 −1.19%、在结算口径
              W-SMA200 $62,852 下方 −0.85%、07-13 日收
              <span className="dn-tag bear">$62,307.00</span> 是自 07-08 以来首
              根收在地板下方的日收、未收盘的 07-14 在 parquet 最末 bar
              <span className="dn-tag bear">$62,241.00</span> 更低。未收盘的
              07-13→07-20 周线在标
              <span className="dn-tag bear">$62,241.00、地板下方 −1.31%</span>
              —— 重新确认破位触发器盘中再次 armed、但直到周一 07-20 前它不是
              一根结算的周事件；最后一根完成的周线仍是 07-06 那根
              $63,750.00、它在周一 07-13 确认了重夺 —— 所以这是一根刚确认的
              地板在同一周内的交还、还不是一根结算的重新破位。日收读
              07-10 <span className="dn-tag bull">$64,129.50</span>（恢复高）、
              07-11 $63,783.00、07-12 $63,750.00（结算周收）、07-13
              <span className="dn-tag bear">$62,307.00</span>（回到地板下方）、
              07-14 未收盘 <span className="dn-tag bear">$62,241.00</span>。MA
              矩阵丢了三根正线里的两根：现货守
              <span className="dn-tag bull">D-SMA20 $61,904 上方 +0.67%</span>
              与下方的 flip、但已落到
              <span className="dn-tag bear">D-EMA20 $62,836 下方 −0.82%</span>
              和 <span className="dn-tag bear">W-SMA200 地板 $63,066 下方
              −1.19%</span>、头顶的
              <span className="dn-tag bear">D-SMA50 $64,317（−3.11%）</span> /
              <span className="dn-tag bear">D-EMA50 $65,029（−4.17%）</span> 帽
              重新拉宽。
              <span className="dn-em">
                整条恢复挂着的结构性问题解到了空头一边：地板没守住 follow-
                through。重夺在周一的周收上确认、又在周二的日线上被交还。这不
                再是地板上方的消化了；是一根新鲜的下破、由一根翻了三倍的 SM 空
                驱动、而 retail 拥挤了被套的多。
              </span>{' '}
              回补反弹 scout 的价格前置条件（现货同时在 flip AND D-EMA20 AND
              D-SMA20 AND 地板 上方）—— 整条恢复四条腿全真 —— 已 FAILED：现货
              现在在 D-EMA20 下方、在地板下方、4 条腿破 2 条、所以 scout 是
              作废、不是递延。
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面 · 新鲜 SM 空加速成空头猛砸（净大致翻三倍、在一根离散重堆步上）· OI 扩 +6.49% · retail 堆多 · funding 重新点火冲顶 · 现货卖 / 期货猛卖进一本在建的本子</span>
            </h2>

            <p>
              <span className="dn-signal">
                重新做空印出的次日、SM 把它翻了三倍
              </span>
              。SM net 是 <span className="dn-tag">−13,426</span>、对 07-13 备忘
              的 −4,426 —— 也就是一根
              <span className="dn-em">−9,000 空头堆、前值净的 203.3%</span>
              （|−13,426 − (−4,426)| / 4,426 = 203.3%；净大致翻三倍空、−4,426 →
              −13,426 ≈ 3.03×）。分量：long_btc
              <span className="dn-tag bear">10,204 → 11,119（+915）</span>、
              short_btc <span className="dn-tag bear">14,604 → 24,545
              （+9,941）</span> —— 空侧几乎翻倍、多侧几乎没动、是一根单侧空头
              猛砸、不是双侧再 gross。
              <span className="dn-em">
                （多空腿按整 BTC 取整；live sm_net 字段是分数 −4,400.3（24h 前）
                → −13,426.1（现在）、所以整 BTC 的 long−short 把净重构到 ±1 BTC
                以内 —— −4,426 / −13,426 净是权威 tape 值、−4,426 是上一篇的 pin。）
              </span> 这根堆印出一根
              <span className="dn-signal">离散重堆步</span>：在
              <span className="dn-tag bear">2026-07-13 07:36Z（BJ 07-13 15:36）</span>
              SM net 单分钟跳 −5,850（Δlong +613、Δshort +6,463、现货 $63,056）——
              整条恢复单分钟最大步、一根空头猛砸签名（short_btc 14,155 → 20,619
              单分钟）、把 SM net 从 −3,858 推到 −9,708、然后一路磨到快照。SM
              net 从峰（最少空）
              <span className="dn-tag">−3,374 @ 2026-07-13 03:41Z（BJ 11:41）</span>
              —— 走完回补的最后一口气 —— 直下到谷
              <span className="dn-tag bear">−13,426 @ 2026-07-14 00:01Z（BJ 08:01）</span>、
              基本就是快照本身。
              <span className="dn-em">
                签名要紧：一根把净翻三倍、由空侧扛整根移动的新鲜空头堆、是谱系
                里最激进的 smart-money 空。SM 没有安静地 fade 重夺 —— 它在周线
                确认的那一刻猛砸空头、并把它压进一根地板破位。
              </span>
            </p>

            <p>
              杠杆侧是一根被套多印、不是需求压。
              <span className="dn-signal">
                funding 重新点火冲顶
              </span>
              ：live <span className="dn-tag">+8.86% ann</span>（原始 0.008092 ×
              1095）、24h 均值
              <span className="dn-tag">+8.01%</span> —— 但形状是那根 tell：
              funding 坐在其 24h 谷
              <span className="dn-tag">+1.68% @ 2026-07-13 00:10Z（BJ 08:10）</span>、
              随后冲到 <span className="dn-tag">+10.95% 封顶</span>、钉在那里约
              8.9h（一段连续区间、从 2026-07-13 14:04Z / BJ 22:04 到 2026-07-13
              22:58Z / BJ 07-14 06:58）、期间价格下破、只在进快照时缓到 +8.86%。
              封顶占用
              <span className="dn-tag bear">535 / 1441 采样行（37.1%）</span>、
              零负行（仍无空付多印）。这不是需求买盘付费 —— 是 retail 多头被套
              在一根正在破的地板上方、付封顶给对面的 smart-money 空。OI Δ
              <span className="dn-tag bear">+6,531 BTC（+6.49%）</span> 跨 24h
              （从 100,676 到 107,207 BTC、峰 107,755）—— OI 随空头猛砸在扩、
              与 07-13 的 −693 去 gross 相反；这是新鲜 gross 仓、不是本子在
              解开。retail
              <span className="dn-tag bear">mkt_long_pct 64.84%</span> 再拥挤
              +7.28pt 从 57.56% —— 谱系里最拥挤的 retail 多、正是 SM 把空头翻
              三倍的镜像。perp 对现货在快照
              <span className="dn-tag bear">−$83.14 折价</span>（1h 均 −$78.24；
              4h 均 −$69.09；24h 均 −$61.46、区间 −$184.49 / +$69.22 —— basis
              几乎整窗坐在折价、期货在卖）。1 分钟 aggressor skew 快照
              <span className="dn-tag bull">+3.3</span>（1h 均 +1.25 —— 快照处
              近平衡的本子、与 4h 反射买盘一致）。
              <span className="dn-em">
                funding 贴顶 + OI 扩 + SM 翻三倍空 + retail 最大多：这是谱系里
                最干净的派发形。唯一拥挤的多是 retail、付封顶进一根正在破的地板、
                而专业本子带着 size 在对面做空。
              </span>
            </p>

            <p>
              窗口流向是<em>现货卖、期货猛卖进一本在建的本子 24h、伴一根 4h 低
              位反射买</em>。24h：价格
              <span className="dn-tag bear">−2.44%</span>、OI
              <span className="dn-tag bear">+6,531 BTC</span>、现货 CVD
              <span className="dn-tag bear">Δ −1,322</span>
              <span className="dn-em">（窗内无 cb_cvd reset）</span>、期货 CVD
              <span className="dn-tag bear">Δ −3,496</span>、大单
              <span className="dn-tag bear">−2,444 BTC / 994 笔</span>、
              taker-net <span className="dn-tag bear">−3,496</span> ——
              <span className="dn-em">
                现货卖、期货猛卖、大单净卖、全砸进一根 +6.49% 的 OI 扩；−2.44%
                这根是一根在被堆的激进空、不是被动去杠杆 —— 07-13「现货买 /
                期货卖 / 缩本子」形的镜像
              </span>
              。4h（进快照）：价格
              <span className="dn-tag bull">+0.03%</span>、OI
              <span className="dn-tag">+123 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +1,654</span>、期货 CVD
              <span className="dn-tag bull">Δ +105</span>、大单
              <span className="dn-tag bull">+99 BTC / 137 笔</span>、taker-net
              <span className="dn-tag bull">+105</span> ——
              <em>一根 $61,850 低位反射买、现货领、OI 近平</em>。1h：价格
              <span className="dn-tag bull">+0.57%</span>、OI
              <span className="dn-tag">−49 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +951</span>、期货 CVD
              <span className="dn-tag bull">Δ +677</span>、大单
              <span className="dn-tag bull">+319 BTC / 45 笔</span>、taker-net
              <span className="dn-tag bull">+677</span> ——
              <em>反射续进快照、现货与期货都买、OI 平</em>。
              <span className="dn-em">
                4h 与 1h 窗用与 24h 窗相同的含端点采样行约定（起始分钟 = 前一
                采样锚行、含端点）、不是精确 240/60 分钟间隔；一根精确分钟窗会
                把每个 CVD/OI 数字挪几十 BTC、但不改「卖 24h / 反射买 4h」的形。
              </span>{' '}
              24h 流向是明确派发 —— 现货 AND 期货 AND 大单 全净卖进一本在建的
              空头本子。4h/1h 在 $61,850 上的反射买是破位水平上的反弹、不是需求
              基：它是买进一本极度做空的 SM 本子、地板在头顶、是挤压或更低高点
              的 setup、由 SM 覆盖还是继续压来决定。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 图 · 引擎 5/9 周期反转（sell the bounce）但总计 1 多 / 8 空 / 1 中性 · 高周期底背离簇 1d/3d/1w + 1M ⚡TD9 BUY vs 一组六根近端顶背离 · 新鲜 1h + 3d 水下金叉 · 12h 水上死叉 · 地板在日收上丢</span>
            </h2>

            <p>
              <span className="dn-signal">
                MTF 引擎守住 5/9 周期反转 regime（JT&lt;0 · 均值回归 / 偏反弹）、
                但净标是「多 TF 共振偏空 · sell the bounce」
              </span>{' '}
              —— 总计硬滚到 1 多 / 8 空 / 1 中性（07-13 是 1 / 2 / 7）。背离计数
              仍双侧：顶背离 6（30m/1h/4h/8h/12h/1d）对底背离 6
              （15m/30m/1h/1d/3d/1w）、引擎仍旗标一根
              <span className="dn-tag bull">高周期底背离簇（1d/3d/1w）</span> 和
              一根持续的
              <span className="dn-tag bull">1M ⚡TD9 BUY $62,328</span>。交叉按
              速度分裂：快帧在反射买上翻出新鲜水下金叉 ——
              <span className="dn-tag bull">1h 水下金叉（刚印、1b）</span> 与
              <span className="dn-tag bull">3d 水下金叉（刚印、1b）</span> 加入
              在场的
              <span className="dn-tag bull">15m 18b / 30m 8b / 1d 13b 金叉</span>
              —— 而中帧翻空：
              <span className="dn-tag bear">12h 水上死叉（2b、刚印）</span>、
              <span className="dn-tag bear">8h 水上死叉（4b）</span> 与
              <span className="dn-tag bear">4h 水上死叉（11b）</span> 续在、
              <span className="dn-tag bear">1w 水下死叉（3b）</span> 立着。RSI
              全面偏软 —— 快帧 15m 57 / 30m 49 / 1h 43、中帧 4h 36（最深）/
              8h 43 / 12h 46 / 1d 46、3d 41 / 1w 37 / 1M 43 —— 一本广泛偏超卖
              的盘面、4h TD「Buy 8 → 9?」离 TD9 BUY setup 只一根 bar。
              <span className="dn-em">
                直读：引擎的周期反转 / 偏反弹标仍靠高周期底背离簇（1d/3d/1w）+
                1M TD9 BUY + 反射买上的新鲜 1h/3d 金叉 —— 结构性反弹案在地板破
                位后存活。但总本子是 8/10 空、中帧翻死叉、地板在日收上丢。反弹
                案是一根高周期均值回归读；SM 空头猛砸、地板丢、中帧死叉是近端
                的反制。一根地板上方的现货基会复活反弹；一根在周一 07-20 周收
                上守住的地板丢会杀掉它。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">62,328</td><td className="num">57.2</td><td className="bull">金叉（水下）18b</td><td className="bear">云下 ↑62.4k 92b</td><td>Sell 4</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">62,328</td><td className="num bull">49.2</td><td className="bull">金叉（水下）8b</td><td className="bear">云下 ↑63.2k 46b</td><td>Sell 3</td><td>BEAR hid · BEAR reg · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">62,328</td><td className="num bull">43.0</td><td className="bull">金叉（水下）刚印 1b</td><td className="bear">云下 ↑64.0k 23b</td><td>Sell 2</td><td>BEAR reg · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">62,328</td><td className="num bull">36.3</td><td className="bear">死叉（水上）11b</td><td className="neut">云内 61.5k–62.7k 4b</td><td>Buy 8 → 9?</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>8h</td><td className="num">62,328</td><td className="num bull">42.9</td><td className="bear">死叉（水上）4b</td><td className="bull">云上 ↓61.7k 15b</td><td>Buy 5</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>12h</td><td className="num">62,328</td><td className="num bull">46.3</td><td className="bear">死叉（水上）刚印 2b</td><td className="neut">云内 60.5k–62.5k 1b</td><td>Buy 5</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>1d</td><td className="num">62,330</td><td className="num bull">45.9</td><td className="bull">金叉（水下）13b</td><td className="bear">云下 ↑66.3k 43b</td><td>Buy 2</td><td>BEAR hid · BEAR reg · BULL reg</td></tr>
                <tr><td>3d</td><td className="num">62,328</td><td className="num">40.9</td><td className="bull">金叉（水下）刚印 1b</td><td className="bear">云下 ↑71.7k 14b</td><td>Buy 1</td><td>BULL reg</td></tr>
                <tr><td>1w</td><td className="num">62,328</td><td className="num bull">37.2</td><td className="bear">死叉（水下）3b</td><td className="bear">云下 ↑96.3k 24b</td><td>Buy 2</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">62,328</td><td className="num">42.9</td><td className="neut">MACDh 水上 − · ⚡TD9 BUY</td><td className="bull">云上 ↓47.0k 29b</td><td>⚡TD9 BUY</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 00:01Z scan（BJ 08:01；滚动 latest
                    文件、逐字存档于 snapshots/2026-07-14-0005/）。头部 regime：
                    <em>5/9 周期反转（JT&lt;0）—— 均值回归 / 偏反弹、趋势跟随
                    审慎</em>；总计 1 多 / 8 空 / 1 中性；告警：
                    <em>高周期底背离簇（1d/3d/1w）</em>、
                    <em>1M ⚡TD9 BUY $62,328</em>、<em>1h 水下金叉（刚印）</em>、
                    <em>3d 水下金叉（刚印）</em>、<em>12h 水上死叉（2b）</em>、
                    <em>4h TD8 Buy —— 离收盘还 1 根 bar</em>。扫描现货 $62,328、
                    24h −2.15%（00:01Z MTF 扫描；live-tape 头部 00:05Z 在同一 24h
                    窗读 −2.44% —— 4 分钟差与不同的 24h 参考共同造成差异）、
                    24h H/L $64,412 / $61,806（MTF feed 自己的 24h 窗 —— 与
                    live-tape 正文区间 $64,318 / $61,850 是不同 feed、不同参考、
                    不是矛盾）、qVol $12.30B。收盘为未收盘 K 线；每个值在各周期
                    收盘前都按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵在破位上丢了三根正线里的两根。现货 $62,318 守
              <span className="dn-tag bull">D-SMA20 $61,904 上方 +0.67%</span>
              与下方的 flip、但已落到
              <span className="dn-tag bear">D-EMA20 $62,836 下方 −0.82%</span>
              和 <span className="dn-tag bear">W-SMA200 地板 $63,066 下方
              −1.19%</span>（07-13 分别是 +3.38% / +1.53% / +1.50% —— 整条恢复
              缓冲没了）。头顶第一道阻力重新拉宽到
              <span className="dn-tag bear">D-SMA50 $64,317（−3.11%）</span> /
              <span className="dn-tag bear">D-EMA50 $65,029（−4.17%）</span> 对
              （07-13 还在现货 $629 内、现在帽在头顶 $2.0k–$2.7k、地板也成了
              头顶阻力）。之上按顺序：
              <span className="dn-tag bear">D-EMA100 $68,507（−9.03%）</span>、
              <span className="dn-tag bear">W-EMA200 $68,672（−9.25%）</span>、
              <span className="dn-tag bear">W-SMA20 $69,743（−10.65%）</span>、
              <span className="dn-tag bear">D-SMA150 $69,946（−10.91%）</span>、
              <span className="dn-tag bear">W-EMA20 $70,293（−11.34%）</span>、
              <span className="dn-tag bear">D-SMA100 $70,614（−11.75%）</span>、
              <span className="dn-tag bear">D-EMA150 $71,657（−13.03%）</span>、
              <span className="dn-tag bear">D-SMA200 $73,625（−15.36%）</span>、
              <span className="dn-tag bear">W-EMA150 $74,331（−16.16%）</span>、
              <span className="dn-tag bear">D-EMA200 $74,577（−16.44%）</span>、
              <span className="dn-tag bear">W-SMA150 $76,097（−18.11%）</span>。
              更高更远、已弃用：W-EMA50 $79,405（−21.52%）、W-EMA100 $79,605
              （−21.72%）、W-SMA50 $86,435（−27.90%）、W-SMA100 $88,462
              （−29.55%）。
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-07-14 00:06Z（close $62,241.00）
                —— 一根较快照锚晚约 1 分钟的 post-anchor 刷新、在 00:05Z live
                pin 之后一分钟、不是锚前陈旧口径；偏移按 live 现货 $62,318.23
                重算。显示的 MA 水位按 $ 取整、偏移用精确序列值算。周线 MA 用
                Binance W-MON 约定（周收盘结算于周一 00:00Z）、与谱系的地板和
                07-06 / 06-29 周收参考一致；完整矩阵可算（359 根周 bar 跨 8 个
                年度 parquet 2019–2026）。200W-watch JSON 本次缺失、所以地板是
                矩阵 W-SMA200 $63,066（含未收盘、对现货 −1.19%；到 07-06 周 bar
                的结算口径 W-SMA200 是 $62,852、对现货 −0.85% —— 现货在两者
                下方）。日收：07-07 $63,335.40、07-08 $62,255.30、07-09
                $63,197.00、07-10 $64,129.50、07-11 $63,783.00、07-12 $63,750.00
                （结算周收）、07-13 $62,307.00（回到地板下方 —— 自 07-08 以来
                首根收在其下）、07-14（未收盘）$62,241.00。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子硬去 γ 到 +37.7M（从 +96.6M）但仍净多 γ · flip $61,527（现货上方 +1.29%、缓冲从 +3.79% 崩）· 出现一根有意义的近端负放大器（14JUL −4.40M）· $63k–$70k 正带盖顶、$55k–$60k 负簇在下方托</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子在破位上硬去 γ、但仍保持净多 γ
              </span>
              。aggregate GEX 是
              <span className="dn-tag bull">+37.7M / 1%</span>（07-13 是 +96.6M
              —— 浅了一根 −58.9M 步、连续第四根去 γ、从 +131.8M → +101.6M →
              +96.6M → +37.7M、但仍净正）；本子仍多 γ、只是浅得多。0-γ flip 移动
              <span className="dn-tag">$61,687 → $61,527（−$160）</span>、现货
              $62,318 坐在
              <span className="dn-tag bull">flip 上方 +1.29%</span>（现货口径
              62,318.23 / 61,527 − 1 = +1.286%）；GEX 文件自己的「dist to flip」
              对它的 Deribit idx $62,560（idx 比现货高 $242）读 +1.7%、算
              <span className="dn-tag bull">+1.68%</span>（62,560 / 61,527 − 1 =
              +1.679%）—— 两参考都正、现货在 flip 上方、但缓冲从 07-13 的
              +3.79% 崩到今日 +1.29%、所以阻尼区现在就坐在现货正下方。墙图保持
              一根正带盖顶、并在现货下方长出负簇：
              <span className="dn-tag bear">$60k −16.71M</span>（现在两符号里
              最重的墙、托一根向低点的 fade）、
              <span className="dn-tag bull">$65k +14.82M</span>、
              <span className="dn-tag bull">$66k +13.39M</span>、
              <span className="dn-tag bull">$64k +13.00M</span>、
              <span className="dn-tag bull">$70k +11.19M</span>、
              <span className="dn-tag bull">$68k +10.21M</span>、
              <span className="dn-tag bull">$63k +8.29M</span>（就在丢掉的地板
              上的一根正墙）、
              <span className="dn-tag bull">$80k +7.21M</span>、
              <span className="dn-tag bear">$58k −6.84M</span>、
              <span className="dn-tag bear">$55k −6.37M</span>。
              <span className="dn-em">
                $63k–$70k 正带（$63k +8.29M、$64k +13.00M、$65k +14.82M、$66k
                +13.39M、$68k +10.21M、$70k +11.19M）合约约 +71M 头顶支撑转帽；
                但下方负簇长到 $60k −16.71M / $58k −6.84M / $55k −6.37M ≈
                −29.9M、所以在 flip 下方本子翻成放大 —— 一根向 $60k 的 fade 是
                dealer 托的阻力转磁铁、一根丢掉 $61,527 flip 会把现货送进负 γ
                区、dealer 在那里卖弱。SM 空正把现货压向那根 flip
              </span>
              。expiry strip 终于带一根有意义的近端负：14JUL 0.3DTE
              <span className="dn-tag bear">−4.40M</span>（今日 08:00Z 结算、
              快照前约 8h）、15JUL 1.3 −0.43M、16JUL 2.3 −1.05M（近端负合约
              ~−5.9M）、然后前向块
              <span className="dn-tag bull">17JUL 3.3 +20.69M</span>、
              <span className="dn-tag bull">24JUL 10.3 +4.64M</span> 与
              <span className="dn-tag bull">31JUL 17.3 +24.41M</span>（全正）、
              28AUG 45.3 +5.74M、
              <span className="dn-tag bear">25SEP 73.3 −3.06M</span>、25DEC
              164.3 +0.67M、26MAR27 255.3 +0.63M、25JUN27 346.3 +0.53M。
              <span className="dn-em">
                14JUL −4.40M 是这条恢复里首根有意义的近端负放大器（07-09 只
                带一根可忽略的 −0.44M 近端负）、但它小、今日 08:00Z 就清；大的
                前向块（17JUL +20.69M、31JUL +24.41M）保持正、所以 strip 没有
                一根大的近端负去把阻尼 regime 翻掉。去 γ 到 +37.7M 与崩掉的
                flip 缓冲才是真变化 —— 本子比恢复里任何时点都更靠近翻面、但还
                没翻。
              </span>
            </p>

            <p>
              IV 中位数横跨 838 合约是
              <span className="dn-tag">42.4%</span> 对 30D close-to-close RV
              <span className="dn-tag">30.02%</span> —— 链级溢价
              <span className="dn-tag">~+12.4pt</span>。
              <span className="dn-em">
                披露：838 合约与 42.4% IV 中位数都是 pre-14JUL-settle 值、读自
                00:01Z GEX 文件；14JUL 0.3DTE −4.40M 块今日 08:00Z 清（快照前约
                8h）、结算后的合约计与 IV 中位数本篇没重算 —— 近端 strip 两边
                都带一根小负、所以结算是轻推、不是翻掉 γ regime。
              </span>{' '}
              是 N 合约的链中位数、<span className="dn-em">不是</span>可交易价差；
              expiry- / strike-level vega、skew、期限结构仍未载入、vol 读法保持
              framework only。Put/Call OI 比 0.55（128,232 put OI / 233,939 call
              OI）。RV 方法：30D close-to-close、logret.std × √365 × 100、用最末
              30 根日 log return、锚自 parquet 最末 bar 2026-07-14 00:06Z（一根
              较快照锚晚约 1 分钟的 post-anchor 刷新、在 00:05Z live pin 之后
              一分钟；29-return 另一口径读 30.30%；页面值 30.02% 用 30 returns）。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · 分裂的利率/美元 risk-off（10Y 4.56% 现在在 4.55% 筛上方、TIPS 2.32% EXTREME、DXY 101.28 EXTREME）vs 信用/流动性 risk-on（HY OAS 2.69%、Fed 净流动性 $5.958T EXTREME）· MOVE 跳 +8.22 到 77.8 · reclaim-long 利率筛翻 FALSE 在 4.56%</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观盘面守住分裂形、但 10Y 挑上 reclaim-long 筛线、债波跳
              </span>
              。面板渲染 2026-07-13 22:16Z、比快照早约 1.8h。US 10Y nominal
              <span className="dn-tag bear">4.56%（+2.0bp）</span>、regime z
              <span className="dn-tag bear">+1.94</span>、偶发 z
              <span className="dn-tag">+1.49</span> —— RISK-OFF、现在
              <span className="dn-em">在 4.55% reclaim-long 筛线上方</span>
              （4.56% 时 FALSE、07-13 在 4.54% 时 TRUE）、并越过 4.53% put-spread
              re-grow 腿（FIRED、多 3bp）。10Y TIPS real
              <span className="dn-tag bear">2.32%（+1.0bp）</span>、regime z
              <span className="dn-tag bear">+2.80</span>、偶发 z
              <span className="dn-tag">+1.62</span> —— EXTREME RISK-OFF。5Y5Y BE
              通胀 <span className="dn-tag">2.21%（+1.0bp）</span>。HY OAS
              <span className="dn-tag">2.69%（−1.0bp）</span>、regime z
              <span className="dn-tag bull">−1.26</span>、偶发 z
              <span className="dn-tag bull">−0.75</span> —— RISK-ON、在 2.78%
              re-grow 闸下方 9bp。MOVE 债波
              <span className="dn-tag bear">77.8（+8.22）</span> —— 一根急跳
              （偶发 z +2.12）、面板上从松转硬的那根、也是唯一实质移动的宏观读。
              DXY <span className="dn-tag bear">101.28（+0.31）</span>、regime z
              <span className="dn-tag bear">+2.37</span> —— EXTREME RISK-OFF。
              Fed 净流动性
              <span className="dn-tag bull">$5.958T（+0.118T）</span>、偶发 z
              <span className="dn-tag bull">+2.47</span> —— EXTREME RISK-ON、
              +0.118T 周度跳保持。US-JP 10Y 利差
              <span className="dn-tag">1.91%（+2.0bp）</span>；USD/JPY
              <span className="dn-tag">161.97（−0.40）</span>。NFCI −0.515
              （陈旧 10d）。
              <span className="dn-em">
                净：reclaim-long 利率筛（10Y &lt; 4.55%）在 4.56% 翻 FALSE ——
                那根一直是 scout long 唯一亮绿的独立宏观筛、现在灭了。put-spread
                re-grow 闸的 10Y 腿（&gt; 4.53%）在 4.56% FIRED、多 3bp、但 HY
                OAS 腿（&gt; 2.78%）仍在 2.69% 差 9bp —— 一根单腿 OR 盯位触发、
                不是双腿滚动确认。MOVE 的 +8.22 跳到 77.8 是一根转硬的债波读、
                argues against 新风险。JGB 月度 2.65% 带 EXTREME RISK-OFF 月度标
                （陈旧 73d）—— 不依赖。
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
                <tr><td>US 10Y nominal</td><td className="num">4.56%</td><td className="num bear">+2.0bp</td><td className="num bear">+1.94</td><td className="num">+1.49</td><td className="bear">紧 · RISK-OFF（在 4.55% 筛上方）</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.32%</td><td className="num bear">+1.0bp</td><td className="num bear">+2.80</td><td className="num">+1.62</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.21%</td><td className="num bear">+1.0bp</td><td className="num">−0.23</td><td className="num">−0.18</td><td className="neut">无标</td></tr>
                <tr><td>HY OAS</td><td className="num">2.69%</td><td className="num bull">−1.0bp</td><td className="num bull">−1.26</td><td className="num bull">−0.75</td><td className="bull">松 · RISK-ON（距闸 9bp）</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.515</td><td className="num">−0.01</td><td className="num">−0.06</td><td className="num bull">−2.13</td><td className="stale">陈旧 10d</td></tr>
                <tr><td>MOVE 债波</td><td className="num">77.8</td><td className="num bear">+8.22</td><td className="num">+0.36</td><td className="num bear">+2.12</td><td className="bear">转硬 · +8.22 跳</td></tr>
                <tr><td>DXY</td><td className="num">101.28</td><td className="num bear">+0.31</td><td className="num bear">+2.37</td><td className="num">+1.01</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.958T</td><td className="num bull">+0.118T</td><td className="num bull">+2.42</td><td className="num bull">+2.47</td><td className="bull">EXTREME RISK-ON</td></tr>
                <tr><td>USD/JPY</td><td className="num">161.97</td><td className="num bull">−0.40</td><td className="num bear">+1.47</td><td className="num">+0.85</td><td className="neut">日元当日更硬</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">1.91%</td><td className="num bear">+2.0bp</td><td className="num bull">−0.73</td><td className="num">+1.49</td><td className="bull">紧</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7761</td><td className="num bull">−0.02</td><td className="num bull">−1.42</td><td className="num">−0.18</td><td className="bull">无标 · 松</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">+13.5bp（月度）</td><td className="num bear">+2.56</td><td className="num">+1.43</td><td className="stale">月度（73d）· 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、汇总 00:01Z ——
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。非对角线
              均值 <span className="dn-tag">|r| 0.318</span>（较 07-13 的 0.315
              基本平、守在 NORMAL 段）。BTC 最紧的对齐重新收紧到宽风险复合：
              <span className="dn-tag">NQ +0.552</span>（从 +0.457 转硬）、
              <span className="dn-tag">SP500 +0.479</span>、
              <span className="dn-tag">SILVER +0.459</span>、然后能源反向
              <span className="dn-tag">CL −0.419</span>、
              <span className="dn-tag">TSLA +0.407</span>、
              <span className="dn-tag">BRENT −0.406</span>、
              <span className="dn-tag">COPPER +0.376</span>、
              <span className="dn-tag">JP225 +0.366</span>、
              <span className="dn-tag">GOLD +0.356</span>、
              <span className="dn-tag">PLAT +0.346</span>、
              <span className="dn-tag">NVDA +0.345</span>。7d 相对表现：
              <span className="dn-tag bear">BTC −2.90%</span> 现在落后
              <span className="dn-tag bear">NQ −1.14%</span> −1.76pt（BTC 在下
              移里重新落后 TradFi 引擎、07-13 还是平-平）、
              <span className="dn-tag bear">SP500 −0.34%</span>、
              <span className="dn-tag bear">JP225 −3.34%</span>、
              <span className="dn-tag bull">META +9.37%</span>（7d 复合领头）、
              <span className="dn-tag bull">NVDA +4.65%</span>、
              <span className="dn-tag bear">TSLA −5.29%</span>、
              <span className="dn-tag bull">AAPL +1.45%</span>、
              <span className="dn-tag bull">MSFT +0.64%</span>、
              <span className="dn-tag bear">GOOGL −3.64%</span>。金属软：
              <span className="dn-tag bear">GOLD −3.44%</span>、
              <span className="dn-tag bear">SILVER −6.30%</span>、
              <span className="dn-tag bear">PLAT −1.10%</span>。能源猛拉：
              <span className="dn-tag bull">CL +14.01%</span>、
              <span className="dn-tag bull">BRENT +15.05%</span>、
              <span className="dn-tag bear">NGAS −12.24%</span>。
              <span className="dn-em">
                BTC 的 7d 线从 07-13 对 NQ 的平-平滚到一根 −1.76pt 落后（BTC
                −2.90% vs NQ −1.14%）—— 下日把 BTC 在下行里重新耦合到风险复合、
                NQ 相关性转硬到 +0.552。相关性段守 NORMAL、所以 BTC 既没脱钩也
                没系统性钉死；−2.44% 这根主要是 BTC 内生（SM 空头猛砸）、带一根
                温和的 TradFi risk-off 顺风。
              </span>
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · 本子 FLAT · 重夺在盘面被交还 · 回补反弹 scout 作废（价格前置条件 failed）· 不追空进一本 −13,426 SM 空、flip 只在下方 +1.29% · 不在单腿利率触发上加新对冲</span>
            </h2>

            <p>
              <span className="dn-signal">
                07-13 备忘那一根线 —— 现货需求压过重新做空、还是重新做空在结算
                次日 fade 掉重夺 —— 硬解到了重新做空一边
              </span>
              。现货需求从没出现；SM 把空头翻三倍（−4,426 → −13,426）在一根离散
              重堆步上、OI 扩 +6.49%、retail 堆多到 64.84%、funding 重新点火
              冲顶、价格在 07-13 日收 $62,307.00 破掉 $63,066 地板。回补反弹
              scout 现在是 VOID、不是递延：它整条恢复为真的价格前置条件 failed
              —— 现货丢掉 D-EMA20 $62,836 和地板、4 条腿破 2 条。没有 scout long
              可跑。但镜像交易 —— 追空 —— 也灭了：SM 已经 −13,426（谱系最深）、
              dealer 本子仍净多 γ +37.7M、flip 只在现货下方 +1.29%、funding 在
              封顶（若 SM 覆盖是一根挤压风险）、最近 4h 已经在 $61,850 上反弹。
              今天的交易本子是 FLAT：不 scout long 进一根 void 前置条件、不追空
              进一本极度做空的 SM 本子（在一根正 γ flip 上方）、不在一根单腿
              1bp 转 3bp 的利率触发上加新对冲 —— 等周一 07-20 周收结算重新破位、
              OR 等 SM 开始覆盖（净回向平）伴现货重夺地板、哪个先来算哪个。
            </p>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout · VOID · 价格前置条件 FAILED（现货丢掉 D-EMA20 和地板）</span>
              <div className="dn-trade-name">
                回补反弹 scout —— 作废：整条恢复把它把关的价格前置条件破了、需求块又从没出现；没有东西可跑
              </div>
              <div className="dn-thesis">
                scout 带一根价格前置条件（现货同时在 flip AND D-EMA20 AND
                D-SMA20 AND 地板 上方）加一根需求触发（现货 CVD 把 OI 拉上 +
                SM 覆盖 + 一根 D-SMA50/D-EMA50 重夺）。价格前置条件整条恢复为真、
                从来不是触发；需求触发从没点火、并在 07-13 反转成一根 SM 空头堆。
                今天价格前置条件本身破了：现货 $62,318 在 D-EMA20 $62,836 下方、
                在 W-SMA200 地板 $63,066 下方（只有 D-SMA20 $61,904 和 flip
                $61,527 在下方守着）。地板丢、需求块比以往任何时候更糟（SM 翻
                三倍空、OI 扩、retail 最大多）、reclaim-long 利率筛在 4.56% 翻
                FALSE、scout 没有入场路径。它作废、不是递延 —— 一根新鲜多需要
                地板重夺 AND SM 覆盖、也就是从零重建前置条件、不是在一根在场的
                前置条件上加需求确认。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">价格前置条件（FAILED、2/4）</span><span className="dn-lvl-v bear">现货 $62,318 &gt; flip $61,527 AND &gt; D-SMA20 $61,904、但 &lt; D-EMA20 $62,836 AND &lt; W-SMA200 地板 $63,066 —— 四腿门破了</span></div>
                <div><span className="dn-lvl-k">复活条件（从零重建）</span><span className="dn-lvl-v bear">一根 1d 收回到 $63,066 地板上方 AND SM 覆盖（净回向平）AND 现货 CVD 把 OI 拉上 —— 整根前置条件重建、不是在一根在场的上加需求</span></div>
                <div><span className="dn-lvl-k">scout 入场</span><span className="dn-lvl-v">无 —— scout 作废；地板重夺且空头覆盖前不做多</span></div>
                <div><span className="dn-lvl-k">不要</span><span className="dn-lvl-v bear">不 scout long 进一根破掉的地板、一本 −13,426 SM 空、和一根 FALSE 利率筛</span></div>
              </div>
              <div className="dn-gating">
                <b>纪律：</b>scout 一直把关在需求基上、从不在价格前置条件上 ——
                而纪律给了回报：它在整条恢复里站着不动、当时买家先是覆盖燃料、
                然后是专业空、现在地板在它触发前就破了。一根满足的价格前置条件
                被正确当作必要-非充分；今天连必要腿都没了。地板在日收上重夺且
                smart money 在覆盖、不是在加、之前不做重进尝试。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · dealer 本子去 γ 到 +37.7M 但仍净多 γ · flip 在现货下方 +1.29% · 不追空进一本极度做空的 SM 本子</span>
              <div className="dn-trade-name">
                破地板不追空 —— SM 已经 −13,426（谱系最深）进一本仍正 γ 的本子、flip 只在 +1.29% 外
              </div>
              <div className="dn-thesis">
                地板破了、07-13 的空头 re-arm 部分点火 —— 一根 1d 收在地板下方
                （07-13 $62,307.00）AND 一根新鲜近端负放大器（14JUL −4.40M）都
                印了。但本子不追：aggregate GEX 仍 +37.7M 净多 γ、flip $61,527
                只在现货下方 +1.29%、所以阻尼区就坐在价格正下方、负 γ 放大只在
                flip 下方才开始。SM 已经 −13,426（大致翻三倍、恢复最深空）、
                retail 最大多、funding 在封顶 —— 一个若 SM 开始覆盖就带真挤压
                风险的仓位形、而 4h/1h 已经在 $61,850 上反弹。在这里追空是卖进
                一根拥挤的专业空、在一根正 γ flip 上方、晚了。空只在丢掉 $61,527
                flip 进负 γ 区（dealer 在那里卖弱）OR 一根周一 07-20 周收结算
                重新破位、伴近端 strip 转负、才成一笔交易 —— 不在单单的日线地板
                丢上。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">无仓 · 不追空进正 γ、flip 在 +1.29% 外</span></div>
                <div><span className="dn-lvl-k">空触发（两腿）</span><span className="dn-lvl-v bear">一根 1h 收 &lt; $61,527 flip（进负 γ 区）OR 一根周一 07-20 周收 &lt; $63,066 结算重新破位、伴近端 strip 带一根负放大器 —— 不是单单的日线地板丢</span></div>
                <div><span className="dn-lvl-k">挤压风险（反向交易）</span><span className="dn-lvl-v bull">SM 覆盖净回向平 + funding 离顶解开 + 一根地板重夺 —— 一本 −13,426 SM 空伴 retail 最大多、若现货翻是挤压燃料</span></div>
                <div><span className="dn-lvl-k">不要</span><span className="dn-lvl-v">不追空进一本极度做空的 SM 本子（在 +37.7M 正 γ flip 上方）；不在单单日线地板丢上做空</span></div>
              </div>
              <div className="dn-gating">
                <b>框架：</b>阻尼 regime 恢复期每天都守、在破位上去了 γ 但没翻
                —— GEX 停在 +37.7M 正、flip 停在现货下方。空是一笔催化交易；催化
                （flip 丢进负 γ、或一根结算的周线重新破位伴负 strip）没印。而一本
                −13,426 SM 空进 retail 最大多、funding 封顶、既是挤压 setup 也
                是续跌 —— 本子保持 flat、直到一边解出。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 宏观尾 · reclaim-long 利率筛翻 FALSE（10Y 4.56% &gt; 4.55%）· put-spread re-grow 10Y 腿 FIRED 多 3bp · HY OAS 腿差 9bp · 不滚</span>
              <div className="dn-trade-name">
                下行 put-spread —— 不滚：利率筛翻假、10Y re-grow 腿多 3bp fired、但 HY OAS 腿仍差 9bp —— 一根单腿 OR 盯位触发、不是双腿滚动确认
              </div>
              <div className="dn-thesis">
                put-spread re-grow 闸是两腿的 OR 盯位（HY OAS &gt; 2.78% OR 10Y
                &gt; 4.53%）—— 任一腿点亮盯位、但一根滚动是酌情的双腿确认、不是
                机械 OR 触发。10Y 腿在 4.56% FIRED、多 3bp（比 07-13 的 1bp 硬）、
                同一根 4.56% 印把 reclaim-long 利率筛（10Y &lt; 4.55%）翻 FALSE
                —— 所以 scout long 唯一亮绿的宏观线现在灭了。但 HY OAS 腿仍在
                2.69% 差 9bp（RISK-ON）、所以 OR 盯位亮在一条腿上 —— 一根单腿 OR
                盯位触发、不是新对冲需要的双腿滚动确认。MOVE 的 +8.22 跳到 77.8
                转硬债波背景、但不是一根 γ 放大信号。不在单腿触发上加新对冲、
                进一本仍净多 γ、strip 上只有一根小近端负放大器（14JUL −4.40M）
                的 dealer 本子。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">无仓 · 不在单腿触发上滚</span></div>
                <div><span className="dn-lvl-k">re-grow 触发（双腿确认）</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% 收（当前 2.69%、距闸 9bp）确认 10Y &gt; 4.53% 腿（当前 4.56%、多 3bp fired）</span></div>
                <div><span className="dn-lvl-k">reclaim-long 利率筛</span><span className="dn-lvl-v bear">10Y &lt; 4.55% 收 —— 在 4.56% 翻 FALSE；独立多筛现在灭了</span></div>
              </div>
              <div className="dn-gating">
                <b>注意：</b>re-grow 闸是随水位下漂调的酌情盯位、不是回测断点。
                一根对冲腿会是滚到 17JUL26 3.3DTE 或 24JUL26 10.3DTE —— 但两者
                都带大正 γ（+20.69M / +4.64M）、所以一根新尾不会拿到放大器顺风；
                只有小的 14JUL −4.40M / 25SEP −3.06M 是负。把 10Y 4.56% 触发当
                一根转硬盯位、不是一根滚动、直到 HY OAS 腿确认。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 挤压周期 · 新鲜空头堆加速成空头猛砸、在一根离散重堆步上 · 当独立信号读、无日历先验</span>
              <div className="dn-trade-name">
                挤压周期 —— 重新做空猛砸：SM 从 −4,426 翻到 −13,426、在一根离散空头堆步 @ 2026-07-13 07:36Z（BJ 15:36）上、恢复最深净空且单分钟最大步
              </div>
              <div className="dn-thesis">
                07-13 的重新做空（净 −1,103 → −4,426）没有停 —— 它加速了。一根
                离散步在
                <span className="dn-tag bear">2026-07-13 07:36Z（BJ 07-13 15:36）</span>
                —— 单分钟 Δnet −5,850（Δlong +613、Δshort +6,463、现货 $63,056）、
                恢复单分钟最大步、一根纯空头猛砸（short_btc 14,155 → 20,619 单
                分钟）—— 把 SM net 从 −3,858 推到 −9,708、然后一路磨到谷 −13,426
                @ 2026-07-14 00:01Z / BJ 08:01。这是谱系里最干净的一根 smart-
                money 空续跌：覆盖了挤压、看着地板确认、重新做空、然后把它猛砸
                进一根地板破位。签名是信息、不是我们的交易 —— dealer 本子仍净多
                γ、flip 在现货下方 +1.29%、所以 SM 空已经跑在它的结构性燃料前面、
                而一本 −13,426 空进 retail 最大多、funding 封顶、既是挤压 setup
                也是续跌。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">框架状态</span><span className="dn-lvl-v">重新做空猛砸 · SM −7,908（07-09）→ −1,103（07-12）→ −4,426（07-13）→ −13,426（今日）· 离散空头堆步 @ 2026-07-13 07:36Z（BJ 15:36）Δnet −5,850</span></div>
                <div><span className="dn-lvl-k">SM 24h 带</span><span className="dn-lvl-v">峰（最少空）−3,374 @ 2026-07-13 03:41Z（BJ 11:41）· 谷 −13,426 @ 2026-07-14 00:01Z（BJ 08:01）· 一根离散空头猛砸步、然后一路磨到快照处的谷</span></div>
                <div><span className="dn-lvl-k">前向 gating</span><span className="dn-lvl-v">SM 覆盖回向平 + funding 离顶 + 一根地板重夺是挤压-多读；一根进一步 Δnet ≤ −3k 伴 flip 丢是空头续跌读 —— −13,426 空是 void scout 的反信号、不是追空触发</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>一根把净翻三倍、猛砸一根离散步进地板破位的重新
                做空、是恢复里最激进的 smart-money 空 —— retail 最大多 / SM 空头
                猛砸 / OI 扩 / funding 封顶、一根教科书派发形。但一本极度做空的
                本子进一根正 γ dealer flip、正是若现货翻挤压点火的地方；签名是
                一个保持 FLAT 看哪边破的理由、不是去追空。当独立信号读、无日历
                先验。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 重夺在盘面被交还 · SM 把空翻三倍进地板破位 · scout VOID · dealer 本子去了 γ 但仍正 · 本子 FLAT、盯挤压 vs 结算重新破位</span>
            </h2>

            <p>
              07-13 那张决策条件里：地板丢条件
              <em>FIRED</em>（07-13 日收 $62,307.00 &lt; $63,066 地板、自 07-08
              以来首根收在其下 —— 重夺在盘面被交还、但直到周一 07-20 周收前不
              结算）；回补反弹 scout 的需求触发
              <em>没触发</em>、且其价格前置条件<em>破了</em>（现货丢掉 D-EMA20
              和地板 —— scout 现在作废）；新鲜重堆空头 re-arm
              <em>作为信号 FIRED</em>（Δnet −5,850 @ 2026-07-13 07:36Z / BJ
              15:36、空头猛砸）、但不是追空进正 γ；阻尼 regime <em>守</em> 但硬去
              γ（GEX +96.6M → +37.7M、flip 缓冲 +3.79% → +1.29%、一根小 14JUL
              −4.40M 近端负出现）；利率筛<em>翻 FALSE</em>（10Y 4.56% &gt;
              4.55%）。<em>谱系的中心结构性问题 —— 重夺在周收确认后是否守住
              follow-through —— 解到 NO：地板周一确认、周二破、在一根翻三倍的
              smart-money 空上、而 retail 拥挤了被套的多。</em>今天的条件围绕
              一根破掉的地板、一根 void scout、一本极度做空的 SM 本子、和一本去
              了 γ 但没翻的 dealer 本子重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>地板在盘面丢（07-13 日收）—— FIRED</td><td className="bear">07-13 收 $62,307.00、在 $63,066 W-SMA200 地板下方 −1.20%（在结算口径 $62,852 下方 −0.87%）；自 07-08 以来首根收在地板下方的日收</td><td>重夺在盘面被交还；地板上方消化读法盘中被证伪 —— 但直到周一 07-20 周收前不结算</td></tr>
                <tr><td>结算重新破位（周一 07-20）—— PENDING</td><td className="bear">一根周一 07-20 00:00Z 周收 &lt; $63,066 结算重新确认破位；未收盘的 07-13→07-20 周在标 $62,241.00（下方 −1.31%）</td><td>若结算在下方、重夺是一根确认的失败、空侧盯位升级 —— 伴负近端 strip、一笔空头交易；在那之前最后一根完成的周线仍是 07-06 确认</td></tr>
                <tr><td>回补反弹 scout（多）—— VOID</td><td className="bear">价格前置条件 FAILED（现货在 D-EMA20 $62,836 和地板 $63,066 下方）；需求触发从没点火；利率筛 FALSE</td><td>不 scout long —— scout 作废、不是递延；只在地板重夺 AND SM 覆盖时复活、也就是从零重建前置条件</td></tr>
                <tr><td>阻尼 regime —— 去了 γ、仍正</td><td className="bull">GEX +37.7M 净多 γ（从 +96.6M）、flip $61,527 在现货下方 +1.29%；近端 strip 带一根小 14JUL −4.40M 负、但大的 17JUL/31JUL 块保持正</td><td>不追空进正 γ；一根 flip 丢破 $61,527 把现货送进负 γ 区（dealer 卖弱）—— 空催化、尚未印</td></tr>
                <tr><td>新鲜重堆（空头猛砸）—— 作为信号 FIRED</td><td className="bear">Δnet −5,850 空头堆步 @ 2026-07-13 07:36Z / BJ 15:36（同一分钟 Δshort +6,463）把 SM 推到 −13,426</td><td>空头盯位作为信息 armed、不是追空 —— 一本 −13,426 SM 空进 retail 最大多、funding 封顶、既是挤压 setup 也是续跌；当独立信号读、无日历先验</td></tr>
                <tr><td>挤压风险（反向交易）—— LIVE</td><td className="bull">SM −13,426（谱系最深）+ retail 64.84% 最大多 + funding 在 +10.95% 封顶；4h/1h 已经在 $61,850 上反弹</td><td>若 SM 开始覆盖、funding 离顶解开、伴地板重夺、拥挤的空是挤压燃料 —— 多是挤压、不是 void scout</td></tr>
                <tr><td>宏观尾 re-grow（单腿触发）+ 利率筛 FALSE</td><td className="bear">10Y &gt; 4.53% 在 4.56% FIRED 多 3bp；HY OAS &gt; 2.78% 仍差 9bp 在 2.69%；reclaim-long 筛（10Y &lt; 4.55%）翻 FALSE</td><td>不在单腿触发上滚；scout long 的利率筛现在灭了 —— 一根双重理由这里不持多</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是
              <span className="dn-signal">
                极度做空的 SM 本子（−13,426、retail 最大多、funding 封顶）解成
                一根挤压 —— SM 覆盖、funding 解开、现货重夺 $63,066 地板 ——
                还是解成一根续跌、一根丢掉 $61,527 flip 进负 γ 区、和一根周一
                07-20 周收结算重新破位。地板周一确认、周二破；问题现在是拥挤的
                空是挤压回穿地板、还是把现货压穿 flip 进下方的放大区
              </span>
              。在那之前本篇按写好的跑：本子 FLAT —— 回补反弹 scout 作废（价格
              前置条件破）、追空晚进一本 −13,426 SM 空（正 γ flip 上方）、无新
              对冲在单腿利率读上触发。重夺在盘面被交还、需求基从没出现、smart
              money 把空翻三倍进破位、dealer 本子去了 γ 但没翻。下一个 24h 的
              对读是<em>耐心 —— 地板破了、但空是拥挤的、flip 仍在下方守着；等
              挤压或结算的重新破位、不追已经跑掉的那根移动</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2（已过 codex 敌对式审计 · findings 记于 audits/2026-07-14-desk-note.md）
            </span>
            <b>状态：</b>v2 · 2026-07-14 00:05Z 快照 · <b>已过 codex 敌对式
            审计。</b>STAGE B codex 跨模型审计判决 PASS-WITH-NOTES —— 0 CRITICAL、
            2 MAJOR、3 MINOR —— 附一根 ask-deepseek 补充数值二审；findings 记于
            audits/2026-07-14-desk-note.md。STAGE C 应用了每一条 finding 并做了
            grep 闭合验证（在全 EN 文件上搜模式、每条 hits-after = 0）、之后才把
            v1 → v2：
            <br />
            <b>DN-001（MAJOR、MA/RV parquet 00:06Z 在一根 00:05Z 原子快照内被
            误标「陈旧」）：</b>模式 <em>&ldquo;1-min stale&rdquo;</em> —— 修前
            命中 1（数据来源条带；MTF 那根 00:01Z 是真锚前陈旧、不动）、修后 0。
            把 parquet 口径在数据来源、MA 披露与 RV 披露里改标为一根 ~1 分钟的
            <em>post-anchor</em> 刷新。RESOLVED。
            <br />
            <b>DN-002（MAJOR、宏观尾闸把一根已 fired 的 OR 腿称作「不是 OR 闸
            确认」）：</b>模式 <em>&ldquo;OR-gate confirmation&rdquo;</em>、
            <em>&ldquo;both-leg confirmation&rdquo;</em>、
            <em>&ldquo;not the both-leg conviction&rdquo;</em> —— 修前命中 3、
            修后 0。改框成一根 OR <em>盯位</em>（任一腿点亮盯位）vs 一根酌情的
            双腿<em>滚动确认</em>；单单 fired 的 10Y 腿现在是一根单腿 OR 盯位
            触发、不是新对冲需要的双腿滚动确认。RESOLVED。
            <br />
            <b>DN-003（MINOR、funding 封顶区间 + 24h 谷措辞）：</b>模式
            <em>&ldquo;22:05&rdquo;</em> / <em>&ldquo;06:05&rdquo;</em> /
            <em>&ldquo;14:05Z&rdquo;</em> 与
            <em>&ldquo;at its 24h low (+1.71%)&rdquo;</em> /
            <em>&ldquo;~8h&rdquo;</em> —— 修前命中 3、修后 0。把封顶区间改成
            2026-07-13 14:04Z / BJ 22:04 到 2026-07-13 22:58Z / BJ 07-14 06:58
            （~8.9h）、把谷措辞改成「接近前一快照谷（+1.71%）；精确 24h 谷
            +1.68% ann @ 00:10Z/00:11Z」。RESOLVED。
            <br />
            <b>DN-004（MINOR、把现货偏移套到 07-13 日收上）：</b>模式
            <em>&ldquo;07-13 closed $62,307.00, −1.19%&rdquo;</em> —— 修前命中
            1、修后 0。决策表那一行现在用日收口径偏移 −1.20%（在 $63,066 地板
            下方）/ −0.87%（在结算口径 $62,852 下方）；保留的 −1.19% / −0.85%
            是现货偏移、仍系在现货上。RESOLVED。
            <br />
            <b>DN-005（MINOR、「恢复里首根近端负放大器」过宽）：</b>模式
            <em>&ldquo;first near-dated negative amplifier&rdquo;</em>、
            <em>&ldquo;finally appeared&rdquo;</em>、
            <em>&ldquo;finally carries a small&rdquo;</em> —— 修前命中 3、修后
            0。三处都限定成首根<em>有意义的</em>近端负、注明 07-09 只带一根可
            忽略的 −0.44M。RESOLVED。
            <br />
            <b>ask-deepseek 二审裁定：</b>MINOR funding-谷项与 DN-003 是同一
            缺陷、由它修掉。MAJOR「跨块 H/L 不一致」（正文 $64,318 / $61,850 对
            MTF 表 $64,412 / $61,806）裁定为<em>非</em>错误 —— codex 已按各自
            来源核过（live tape vs 00:01Z MTF feed）；在 MTF 表注里加了一行披露
            把两 feed 的区分讲明、而非改任何数字。
            <br />
            全部 findings RESOLVED（grep hits-after = 0）。codex 核过并清除：
            requireViewer gating、JSX/markup 完整性（tsc exit 0）、live-tape 核心
            算式、funding × 1095、SM 谱系/极值（最深 −13,426、单分钟最大步
            −5,850）、flow 窗、MTF artifact、GEX/IV 面板、MA/RV 算式、宏观与跨
            资产。快照 provenance 与存档路径（snapshots/2026-07-14-0005/）记于
            上方数据来源条带。
            <b>Build note（INFO）：</b>本服务器跑 Node 18.19.1；Next 16.2.6 对
            Node &lt; 20.9.0 硬退出、所以完整 <code>next build</code> 被环境
            阻塞。<code>npx --no-install tsc --noEmit</code> 是 build proxy、
            在 v2 修正后再跑了一次。
            <b> v2 · 已过 codex 敌对式审计。</b>
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体情况
            个性化。数字反映单一原子快照（2026-07-14 00:05Z、live tape 行
            pin t=&ldquo;07-14 08:05&rdquo; BJ）、provenance 在数据来源条带中
            按节披露；宏观 Tier-1 面板渲染 2026-07-13 22:16Z（比快照早约 1.8h）、
            部分输入明确陈旧或待定并已标注。水位、规模与条件是交易台流程的
            示例、不是长期推荐。过去的相关性、γ 与仓位模式不绑定未来盘面。
            衍生品有全损风险、加杠杆下损失可超过保证金。
            <em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                地板周一确认、周二破 —— 重新做空赢了。smart money 把空翻三倍
                进破位；retail 被套在封顶做多。scout 作废；空又晚又拥挤。耐心
                —— 等挤压或结算的重新破位。
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
            v2 · 2026-07-14 00:05Z 快照 · 已过 codex 敌对式审计 · sources:
            live_db.json · mtf_div_latest.html · btc_gex.html ·
            macro_dashboard.html · cross_asset_correlation_summary.md ·
            btcusdt_1m_*.parquet · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
