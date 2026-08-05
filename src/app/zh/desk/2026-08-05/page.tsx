import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-08-05 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-08-05',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-08-05' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260805() {
  await requireViewer('/zh/desk/2026-08-05');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-08-05 · v2</span>
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
              <span className="dn-big">$64,076</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.77%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-08-05 00:05Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-08-05 00:05Z（行 t=&ldquo;08-05 08:05&rdquo; BJ、即 00:05Z 日锚）</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · 钉在 00:05Z 锚行以求可复现（读取时文件
                    tail 是 00:08Z）· live-tape <code>t</code> 是 BJ 本地
                    （UTC+8）：00:05Z pin = t &ldquo;08-05 08:05&rdquo;、正文里
                    所有下游 BJ 时戳都换算成 UTC
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-08-05 08:01 BJ（00:01Z）scan</td>
                  <td className="dn-flag">
                    滚动 latest 文件（会盘中推进；读取时实时文件已跳到
                    08:16 BJ / 00:16Z）· 存档 00:07Z 副本
                    /opt/desk-note/snapshots/2026-08-05-0007/ 才是钉住的源 ·
                    较快照锚滞后约 4 分钟 · 含未收盘 K 线 · 扫描现货 $64,076、
                    24h +0.96%
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-08-05 00:01Z 快照</td>
                  <td className="dn-flag">
                    较锚滞后约 4 分钟 · Deribit idx $64,439 对 live $64,076
                    （比 live 高 $363）· 830 合约 · 5AUG26 0.3DTE +20.65M
                    仍在盘上（今日 08:00Z 结算、约在此快照后 8h）· 存档于
                    /opt/desk-note/snapshots/2026-08-05-0007/
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-08-05 00:01Z
                  </td>
                  <td className="dn-flag">滞后约 4 分钟 · 7d 1h bar · 22 资产 · 167 rows · 存档于快照目录</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-08-04 22:15Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.8h · FRED Tier-1：10Y −5bp 到 4.70%、TIPS
                    −4bp 到 2.43%、HY OAS −7bp 到 2.78%、DXY −0.08 到 99.88、
                    Fed 净流动性 −0.092T 到 $5.825T · MOVE 抓取失败（暗）·
                    NFCI 陈旧 11d · 存档于快照目录
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-08-05 00:05Z</td>
                  <td className="dn-flag">
                    close $64,046.80（未收盘 08-05 bar）· 偏移按 live 现货
                    $64,075.79 重算 · 周线阶梯用完整 2019–2026 wildcard
                    （362 根周 bar）· W-SMA200 $63,756.61 在算中 / $63,533.52
                    已结算（即 trap-watch 地板）；W-EMA 全历史
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W 周期地板监视</td>
                  <td className="dn-v-cell">ma200w_trap_watch_state.json · 2026-08-03 00:11Z 重算</td>
                  <td className="dn-flag">
                    周收盘 200-SMA $63,533.52、最末走完周 2026-08-02 收
                    $63,550.00、状态 ABOVE、连续 5 根周收在地板上方
                    （自 2026-07-05 起）· 慢水位（约 $250/周）、小时级陈旧
                    无碍 · 专用 weekly_200sma.json runbook 路径缺席、用
                    trap-watch 状态作实时替代
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED 月度 · IRLTLT01JPM156N</td>
                  <td className="dn-flag">陈旧 · 月度（64d）· 不作实时</td>
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
              <span className="dn-v">+1.88%</span>
              <span className="dn-src">live · funding 字段 0.001718/8h × 1095 = +1.88% ann · 24h 均值 +6.00%（08-04 是 +4.93%、被冲掉过）· 0 / 1441 采样行转负（08-04 是 194 / 1441 —— 负值全没了）· 最大 +10.57% ann @ 08-04 19:03 BJ（11:03Z 08-04）、最小 +0.07% @ 08-05 04:52 BJ（20:52Z 08-04）</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h 均值</span>
              <span className="dn-v bear">+4.93% → +6.00%（回热 +1.07pt）</span>
              <span className="dn-src">08-04 那次冲洗（194 根负行、6 天来首批负值）又<em>填回来了</em> —— 本窗 0 根负、多头 carry 重新拥挤、不是牛方要的去杠杆</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−0.30%（−326.9 BTC）</span>
              <span className="dn-src">live · 连续第二根缩（08-04 是 −0.58% / −628.7 BTC）· 现在 108,250 BTC 对 24h 前 108,577 · 仓位在上印里往外撤 —— 反弹背后没有新多堆</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bull">56.11 / 43.89</span>
              <span className="dn-src">live_db `mkt_long_pct` · 从 59.97（24h 前）松到 56.11（−3.86pt 去拥挤）· 24h 区间 55.90 / 60.44 —— 价抬着、retail 却一直在放多侧</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−10.01k（净 SHORT、更深）</span>
              <span className="dn-src">live · long 14.48k − short 24.49k · net 谷（最空）−10.89k @ 08-05 04:06 BJ（20:06Z 08-04）；net 峰（最不空）−8.55k @ 08-04 09:01 BJ（01:01Z 08-04）—— SM 在整根上行里都坐着空</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对同时钟 24h 基线</span>
              <span className="dn-v bear">−9,028 → −10,007（−980 净、更深空）</span>
              <span className="dn-src">|Δnet|/prior_net = 979.5 / 9,027.9 = 10.85% · 本轮 CLEAN —— 无 BJ-14:36 re-sync 伪影（24h 最大单步是 −1,032 @ 08-05 04:06、正常量级）· Δlong −1,048（多被砍）、Δshort −69（平）—— SM 靠砍多来卖这根反弹</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">40.3% / 29.23%</span>
              <span className="dn-src">GEX 横跨 830 合约的 IV 中位数对 30D close-to-close RV（30 returns / 31 closes、logret.std × √365 × 100）· 链级溢价 ~+11.1pt · IV 中位数是横跨 N 合约的链中位数、<em>不是</em>可交易价差</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+1.51%（在上方）</span>
              <span className="dn-src">flip $63,124（08-04 是 $62,907、升上来）· 对 live 现货 $64,075.79（+1.51%；64,075.79/63,124 − 1 = 1.507%）/ GEX 文件 Deribit idx $64,439（+2.08%；64,439/63,124 − 1 = 2.082%、文件取整 +2.1%）—— 两参考都正 · headline GEX +106.0M、by-expiry rollup +93.78M（都从 08-04 的 +68.6M / +56.49M 硬涨上来）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                盘整往上破了地板、印出一根强 08-04 上收 —— 但 smart money
                卖了这根重夺、dealer 本子又往更重的正 γ 阻尼里加、所以这根
                反弹在每一根内部读上都是未确认
              </span>
              。现货报
              <span className="dn-tag bull">$64,076、24h +0.77%</span>、从
              08-04 钉在 $63,533.52 周期地板上的那个 pin 弹起约 +0.85%；08-04
              日收 <span className="dn-tag bull">$64,075.50</span> —— 比 08-03
              上 $578、是 07-30 以来最好的日收 —— 重夺回 200W 地板与 D-SMA50
              上方、但停在
              <span className="dn-tag bear">D-EMA50 cap $64,612 下 −$536
              （−0.83%）</span>、正是 08-04 备忘要的那条牛腿。上印底下盘面
              不确认：SM 干净地滚到更深净空
              <span className="dn-tag bear">−9,028 → −10,007</span>（本轮无
              伪影；Δlong −1,048、Δshort −69 —— 靠砍多卖这根重夺）、dealer
              本子 γ
              <span className="dn-tag bull">更正（headline +106.0M / rollup
              +93.78M、原是 +68.6M / +56.49M）</span>成一道更重的双侧阻尼、
              flip 升到 $63,124、funding
              <span className="dn-tag bear">回热（24h 均值 +4.93% → +6.00%、
              08-04 的负值全没了 —— 0 / 1441 行）</span>多头 carry 重新拥挤、
              OI 连续第二天缩
              <span className="dn-tag bear">−0.30%（−326.9 BTC）</span>、
              每一根 24h 流向读都净卖（spotCVD −1,420、futCVD −859、taker
              −850、big −581）、最近 4h 与 1h 已在褪（−0.12% / −0.27%）。
              两个触发都没武装：回补反弹 scout 要一根 SM COVER 加一根
              D-EMA50 cap 收（两个都没拿到 —— SM 走更深空、价被封）；追空
              要一根地板破 + γ 翻负（两个都没拿到 —— 盘整往上破、γ 更正）。
              本子保持 FLAT；这是一根低确信的挤压、撞进一个 SM 正倚着的
              正 γ cap。
            </p>

            <p>
              BTC 报 <span className="dn-tag">$64,076</span> live、
              <span className="dn-tag bull">+0.77%</span> 在 24h（live-tape
              窗；08:01 BJ 的 MTF 扫描在它自己的 24h 基上读 +0.96% —— 约
              4 分钟时间差加不同窗开盘解释了这 0.19pt 缺口）、在一条
              <span className="dn-tag">$64,494 / $63,327</span> 区间里
              （24h 高 @ 07:16 BJ 08-05 / 23:16Z 08-04、低 @ 08:56 BJ 08-04
              / 00:56Z 08-04）。
              <span className="dn-signal">地板守住、重夺延伸</span>：08-02
              收 $63,550.00、08-03 收 $63,497.20、08-04 收
              <span className="dn-tag bull">$64,075.50</span> —— 一根 $578
              上日、在 08-03 回落到地板下方之后重回 200W 地板
              <span className="dn-tag bull">$63,533.52（+0.85%）</span>与
              D-SMA50 <span className="dn-tag bull">$63,257.59（+1.29%）</span>
              上方（08-02 早已收在两者上方 $63,550.00；08-03 又跌破地板 $36
              到 $63,497.20 —— 所以这是破位以来第二根收在两者上方、不是首根）。
              这根重夺也把
              <span className="dn-tag bull">D-EMA20 $63,965.00（+0.17%）</span>
              拉回正 —— 现在有两根日偏移在现货上方（08-04 只有一根），矩阵
              略微不那么倒挂。但头顶就压在这里：
              <span className="dn-tag bear">D-SMA20 $64,364.74（−0.45%）</span>
              和承重的
              <span className="dn-tag bear">D-EMA50 cap $64,612.06
              （−0.83%）</span>、再往上是到
              <span className="dn-tag bear">D-EMA100 $67,044.05（−4.43%）</span>
              的空档。
              <span className="dn-em">
                现货被钉在约 $1.35k 的窄带里 —— D-EMA20 撑（+0.17%）/
                D-SMA20（−0.45%）/ D-EMA50 cap（−0.83%）—— 底下是 200W 地板
                （+0.85%）与 D-SMA50（+1.29%）。重夺在价格上、在两根日线上
                是真的、但武装牛方的那一根收 —— 一根 D-EMA50 cap 上收
                $64,612 以上 —— 还没印。
              </span>{' '}
              08-04 备忘的两条岔路 —— 一根干净 SM cover + D-EMA50 cap 收
              （把 scout 武装进 $67k–$68.5k 簇）、或一根 flip/旧地板破在
              干净 SM 空上加 γ 翻负（把追空重武装向 $60k 崩盘 put）——
              都还没点火：价往牛方走、仓位与 γ 却往熊方走、所以什么都没解开。
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面 · SM 干净滚到更深空进上日（无伪影）· 多被砍、funding 回热、OI 连缩两天 · 重夺背后没有仓位支撑</span>
            </h2>

            <p>
              <span className="dn-signal">
                smart money 卖了这根重夺 —— 而且三轮里首次这根 tell 是干净的
              </span>
              。SM net 是
              <span className="dn-tag bear">−10,007</span>、对同时钟 24h 基线
              −9,028 —— 也就是
              <span className="dn-em">更空 10.85%</span>
              （|−10,007 − (−9,028)| / 9,028 = 979.5 / 9,027.9 = 10.85%）、
              一根 +0.77% 上日里更深的空。分量：long_btc
              <span className="dn-tag bear">15,531 → 14,483（−1,048）</span>、
              short_btc <span className="dn-tag">24,559 → 24,490（−69、平）</span>。
              整根动作是多在往外撤、空守着 —— SM 没在反弹里补空本子、他们
              砍的是多本子、这让净空更深。<span className="dn-em">关键是本轮
              没有 BJ-14:36 re-sync 伪影</span> —— 那根反复出现、把 08-02
              和 08-04 的 tell 都弄坏的单分钟 feed 步这次缺席；24h 最大单步
              是一根正常量级的 −1,032 @ 08-05 04:06 BJ（20:06Z 08-04）、所以
              这根更深空读是 CERTIFIED、不是被数据弄坏。SM net 谷（最空）
              <span className="dn-tag bear">−10,887 @ 08-05 04:06 BJ（20:06Z
              08-04）</span>；net 峰（最不空）
              <span className="dn-tag">−8,548 @ 08-04 09:01 BJ（01:01Z
              08-04）</span>—— SM 在整根上行里坐着空、还越坐越深。
            </p>

            <p>
              杠杆侧是重新拥挤、不是冲洗。
              <span className="dn-signal">
                funding 在 08-04 冲洗后回热
              </span>
              ：live <span className="dn-tag">+1.88% ann</span>（字段
              0.001718/8h × 1095）、但 24h 均值是
              <span className="dn-tag bear">+6.00% ann</span>（对 08-04 的
              +4.93% —— 一根 +1.07pt 回热）、窗内带
              <span className="dn-tag bear">0 / 1441 负行</span> —— 08-04
              备忘标的那 194 根负行（6 天来首批负）已经全填回来了。区间
              <span className="dn-tag">+0.07% / +10.57% ann</span>（最大 @
              08-04 19:03 BJ / 11:03Z 08-04、最小 @ 08-05 04:52 BJ / 20:52Z
              08-04）；+10.57% 峰只触到 3 / 1441 行、所以 carry 单向偏多、
              但没钉住封顶。OI Δ
              <span className="dn-tag bear">−326.9 BTC（−0.30%）</span>跨 24h
              —— 连续第二根缩（108,577 → 108,250）、接 08-04 的 −628.7 /
              −0.58%、所以仓位一直在往外泄、不是在重夺背后堆。retail
              <span className="dn-tag bull">mkt_long_pct 56.11%</span>从
              59.97% —— 一根 −3.86pt 去拥挤（24h 区间 55.90 / 60.44）、价抬着
              多侧还一直在清。perp 对现货
              <span className="dn-tag bear">−$53.40 折价</span>在快照
              （1h 均 −$51.10、区间 −$127.83 / −$23.65；4h 均 −$48.75；24h
              均 −$59.64、区间 −$245.49 / +$106.13 —— basis 24h 内短暂升水
              过一次、但坐在持续折价上）。1 分钟 aggressor skew 快照
              <span className="dn-tag bull">+7.3</span>（1h 均 −1.85、区间
              −48.4 / +35.7）—— 快照上一档边际买倾斜、在一根双向小时里。
              <span className="dn-em">
                funding 回热 + OI 缩 + retail 在放 + SM 更深空 + perp 折价：
                重夺是一根现货带的磨、仓位本子倚在另一边。这不是牛 scout
                挂门要的那种去杠杆、SM 补空的底。
              </span>
            </p>

            <p>
              窗口流向说这根上印骑的是回补磨、不是新需求、而且最近几小时
              在褪。<span className="dn-em">每一根 24h 流向读都对着一根正
              价格净卖</span>：24h 价
              <span className="dn-tag bull">+0.77%</span>、OI
              <span className="dn-tag bear">−326.9 BTC</span>、现货 CVD
              <span className="dn-tag bear">Δ −1,420</span>、期货 CVD
              <span className="dn-tag bear">Δ −859</span>、大单
              <span className="dn-tag bear">−581 BTC / 925 笔</span>、
              taker-net <span className="dn-tag bear">−850</span> ——
              <span className="dn-em">
                价上 +0.77%、而现货 AND 期货 aggressor 流都在卖、OI 还缩：
                一根空头回补 / 薄本子抬、不是堆多买（窗内无 cb_cvd / fut_cvd
                reset、deltas 干净）
              </span>
              。4h（进快照）：价
              <span className="dn-tag bear">−0.12%</span>、OI
              <span className="dn-tag bear">−237.3 BTC</span>、现货 CVD
              <span className="dn-tag bear">Δ −227</span>、期货 CVD
              <span className="dn-tag bear">Δ −399</span>、大单
              <span className="dn-tag bear">−333 BTC / 177 笔</span>、
              taker-net <span className="dn-tag bear">−369</span> ——
              <em>重夺已经在翻头、每一根读上都被卖</em>。1h：价
              <span className="dn-tag bear">−0.27%</span>、OI
              <span className="dn-tag bear">−257.6 BTC</span>、现货 CVD
              <span className="dn-tag bear">Δ −55</span>、期货 CVD
              <span className="dn-tag bear">Δ −106</span>、大单
              <span className="dn-tag bull">+53 BTC / 63 笔</span>、
              taker-net <span className="dn-tag bear">−68</span> ——
              <em>OI 还在缩、现货/期货被卖、唯一的绿是一小口大单买</em>。
              24h 上行印在回补上、撞进一个正 γ cap；4h/1h 显示它在褪、仓位
              还在往外撤 —— 这根反弹背后没有燃料。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 图 · 引擎周期抬上云（偏多）· 新鲜 12h + 1w 水下金叉 · 但一根新 4h ⚡TD9 SELL 加一根刚印的 1h 水上死叉警告反弹超买 · regime 5/9 cycle-reversal</span>
            </h2>

            <p>
              <span className="dn-signal">
                引擎周期确认了反弹、又两根慢周期印出水下金叉 —— 但快周期
                已经在闪超买
              </span>
              。regime 标是
              <span className="dn-tag">5/9 cycle-reversal（JT&lt;0）——
              均值回归 / 偏反弹、趋势跟随谨慎</span>。本次扫描新鲜：
              <span className="dn-tag bull">12h 水下金叉（1 bar 前）</span>
              和 <span className="dn-tag bull">1w 水下金叉（2 bar 前）</span>
              加入 4h（9b）、8h（5b）、3d（8b）的金叉 —— 一个五周期水下金叉
              簇（4h/8h/12h/3d/1w）、早牛转的 tell 在中慢本子上叠。引擎
              周期抬上云、守一道偏多：15m/30m/1h 全印
              <span className="dn-tag bull">价在 EMA400 上方、云上</span>、
              1h RSI 55.2（偏多·顺势）。但警告和它们一起印：
              <span className="dn-tag bear">一根新 4h ⚡TD9 SELL</span>
              （超买反转提示 @ $64,076）、一根
              <span className="dn-tag bear">1h 水上死叉刚印</span>
              （快周期上的早牛转熊探）、顶背离簇仍横跨 15m/30m/1h/1d
              （4 帧）。底背离簇横跨 15m/4h/8h/12h/1w（5 帧）、1M 带一根
              ⚡TD9 BUY。
              <span className="dn-em">
                直读：中/慢结构在往上转（金叉扩到 12h 和 1w、底背离五帧）、
                引擎确认了抬、但快周期说眼下这根反弹被拉伸了 —— 一根新
                4h TD9 卖加一根新鲜 1h 死叉正好压在 D-EMA50 cap 上。慢转
                和快耗竭在同一水位同时开火。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>读</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">64,076</td><td className="num">46.0</td><td className="neut">死叉（水上）16b</td><td className="bull">云上 ↓63.9k 40b</td><td>Buy 4</td><td>偏多 · 顺势</td></tr>
                <tr><td>30m</td><td className="num">64,076</td><td className="num">51.0</td><td className="neut">死叉（水上）3b</td><td className="bull">云上 ↓63.7k 27b</td><td>Buy 4</td><td>多结构 · 高位卖</td></tr>
                <tr><td>1h</td><td className="num">64,076</td><td className="num bull">55.2</td><td className="bear">死叉（水上）刚印</td><td className="bull">云上 ↓63.4k 35b</td><td>Buy 3</td><td>偏多 · 顺势</td></tr>
                <tr><td>4h</td><td className="num">64,076</td><td className="num bull">56.7</td><td className="bull">金叉（水下）9b</td><td className="neut">云内 64.0–64.1k 1b</td><td>⚡ TD9 SELL</td><td>空结构 · 底背离 · TD9 卖</td></tr>
                <tr><td>8h</td><td className="num">64,076</td><td className="num bull">53.0</td><td className="bull">金叉（水下）5b</td><td className="bear">云下 ↑64.4k 15b</td><td>Sell 6</td><td>空结构 · 底背离</td></tr>
                <tr><td>12h</td><td className="num">64,076</td><td className="num bull">51.5</td><td className="bull">金叉（水下）1b（新）</td><td className="neut">云内 62.3–64.8k 9b</td><td>Sell 4</td><td>空结构 · 底背离</td></tr>
                <tr><td>1d</td><td className="num">64,076</td><td className="num">50.5</td><td className="neut">死叉（水上）9b</td><td className="neut">云内 62.3k–68.0k 16b</td><td>Sell 2</td><td>偏空 · 顺势 · 顶背离</td></tr>
                <tr><td>3d</td><td className="num">64,076</td><td className="num">45.2</td><td className="bull">金叉（水下）8b</td><td className="bear">云下 ↑76.4k 21b</td><td>Buy 4</td><td>偏空 · 顺势</td></tr>
                <tr><td>1w</td><td className="num">64,076</td><td className="num">39.7</td><td className="bull">金叉（水下）2b（新）</td><td className="bear">云下 ↑85.9k 27b</td><td>Sell 1</td><td>区间多 · 底背离 · SMA200 +0.5%</td></tr>
                <tr><td>1M</td><td className="num">64,076</td><td className="num">43.9</td><td className="neut">—</td><td className="bull">云上 ↓47.4k 30b</td><td>⚡ TD9 BUY</td><td>偏多 · 顺势</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 08:01 BJ（00:01Z）scan（滚动
                    latest 文件；逐字存档于
                    /opt/desk-note/snapshots/2026-08-05-0007/）。头部告警：
                    <em>12h 水下金叉（1b）、1w 水下金叉（2b）、1h 水上死叉
                    （刚印）、4h ⚡TD9 SELL、1M ⚡TD9 BUY</em>。顶背离 4：
                    15m/30m/1h/1d · 底背离 5：15m/4h/8h/12h/1w。扫描现货
                    $64,076、24h +0.96%、H/L $64,513 / $63,290、qVol $8.31B。
                    收盘为未收盘 K 线；每个值在各周期收盘前都按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵读一根部分重夺、不是转向。现货 $64,076 坐在
              <span className="dn-tag bull">D-SMA50 $63,257.59 上方 +1.29%</span>
              和 <span className="dn-tag bull">D-EMA20 $63,965.00 上方
              +0.17%</span> —— 两根正日偏移（08-04 只有一根）—— 底下是在算中
              的 <span className="dn-tag bull">W-SMA200 $63,756.61（+0.50%）</span>
              和已结算的 200W 周期地板
              <span className="dn-tag bull">$63,533.52（+0.85%）</span>。头顶
              按顺序：
              <span className="dn-tag bear">D-SMA20 $64,364.74（−0.45%）</span>、
              <span className="dn-tag bear">D-EMA50 $64,612.06（−0.83%）</span>
              —— cap —— 再往上是空档到
              <span className="dn-tag bear">D-EMA100 $67,044.05（−4.43%）</span>、
              <span className="dn-tag bear">D-SMA100 $68,356.75（−6.26%）</span>、
              <span className="dn-tag bear">W-SMA20 $69,187.55（−7.39%）</span>、
              <span className="dn-tag bear">D-SMA150 $69,493.82（−7.80%）</span>、
              <span className="dn-tag bear">D-EMA150 $69,818.49（−8.23%）</span>、
              <span className="dn-tag bear">D-SMA200 $70,660.04（−9.32%）</span>、
              <span className="dn-tag bear">D-EMA200 $72,574.81（−11.71%）</span>、
              <span className="dn-tag bear">W-EMA150 $73,969.24（−13.38%）</span>。
              更高更远、已弃用：W-SMA150 $76,876（−16.65%）、W-EMA50 $77,783
              （−17.62%）、W-EMA100 $78,760（−18.64%）、W-SMA50 $83,342
              （−23.12%）、W-SMA100 $88,654（−27.72%）。W-EMA200 坐在
              <span className="dn-tag bear">$68,566.62（−6.55%）</span>。
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-08-05 00:05Z（close
                $64,046.80）；偏移按 live 现货 $64,075.79 重算。显示的 MA
                水位按 $ 取整、偏移用精确序列值算。周线阶梯用完整 2019–2026
                wildcard 算（3,632,048 分钟行 / 362 根右标周 bar）、所以
                W-SMA200 <em>可</em>计算：$63,756.61 在算中（+0.50%）与
                $63,533.52 已结算 —— 已结算值就是 trap-watch 周收盘 200-SMA
                （2026-08-03 00:11Z 重算、全篇收盘口径用的 $63,533.52 地板）。
                W-EMA200 $68,566.62（−6.55%）与 W-EMA150 $73,969.24
                （−13.38%）是全历史 EMA。日线收盘：07-31 $62,859.90、08-01
                $62,792.30、08-02 $63,550.00、08-03 $63,497.20、08-04
                $64,075.50、08-05（未收盘）$64,046.80 —— 08-04 那根收在
                08-03 跌破地板之后重回 200W 地板与 D-SMA50 上方（08-02 也
                收在两者上方；08-03 跌破了 200W 地板）、即破位以来第二根
                收在两者上方、不是首根。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子 γ 再往正加一轮 · headline +106.0M / rollup +93.78M（原 +68.6M / +56.49M）· flip 升到 $63,124、现货 +1.51% 在上方 · 一道更重的双侧阻尼封住 $64.5k–$68k 带</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子连续第三轮加正 γ —— 阻尼现在在现货两侧都很重
              </span>
              。headline GEX 是
              <span className="dn-tag bull">+106.0M / 1%</span>（08-04 是
              +68.6M）、by-expiry rollup 是
              <span className="dn-tag bull">+93.78M</span>（原 +56.49M；
              by-expiry 条带合到 +93.78M、与 gex_summary net_gex $93.78M 对上）。
              0-γ flip 升
              <span className="dn-tag">$62,907 → $63,124（+$217）</span>、
              现货 $64,076 坐在
              <span className="dn-tag bull">flip 上方 +1.51%</span>（现货口径
              64,075.79 / 63,124 − 1 = +1.507%）；GEX 文件自己的「dist to
              flip」读 +2.1%、对它的 Deribit idx $64,439（比 live 现货高
              $363）算
              <span className="dn-tag bull">+2.08%</span>（64,439 / 63,124
              − 1 = +2.082%）—— 两参考都正、现货在两个口径上都上 flip。墙图
              是一道正带直压现货：
              <span className="dn-tag bull">$70k +18.34M</span>（最重墙）、
              <span className="dn-tag bull">$64.5k +15.81M</span>、
              <span className="dn-tag bull">$68k +15.68M</span>、
              <span className="dn-tag bull">$67k +15.43M</span>、
              <span className="dn-tag bull">$65k +14.25M</span>、
              <span className="dn-tag bull">$66k +13.14M</span>、
              <span className="dn-tag bull">$72k +9.34M</span>、
              <span className="dn-tag bull">$80k +8.23M</span>、负侧是底下的
              崩盘 put 架：
              <span className="dn-tag bear">$60k −19.59M</span>（最重负、
              崩盘 put）与
              <span className="dn-tag bear">$62k −6.85M</span>。
              <span className="dn-em">
                $64.5k–$68k 正带（+$15.8M / +$15.7M / +$15.4M / +$14.3M /
                +$13.1M 叠）正是价格在测的那道天花板 —— dealer 买回落、卖
                反弹、贯穿整个重夺区。dealer 本子在结构性阻尼这根反弹、不是
                在给它加油
              </span>
              。近端：5AUG26 0.3DTE
              <span className="dn-tag bull">+20.65M</span> 仍在盘上（今日
              08:00Z 结算、约在此快照后 8h）—— 一根正前段、无近端负放大器。
              前向条带：6AUG 1.3 +1.54M、7AUG 2.3 +20.56M、8AUG 3.3 +0.81M、
              14AUG 9.3 +6.92M、21AUG 16.3 +11.80M、28AUG 23.3 +16.78M、
              25SEP 51.3 +8.83M、30OCT 86.3 +0.95M、25DEC 142.3 +3.39M、
              26MAR27 233.3 +0.89M、25JUN27 324.3 +0.66M —— 整条前向条带都
              正；没有一根负 γ 块能把本子翻熊。
            </p>

            <p>
              IV 中位数横跨 830 合约是
              <span className="dn-tag">40.3%</span>对 30D close-to-close RV
              的 <span className="dn-tag">29.23%</span> —— 链级溢价
              <span className="dn-tag">~+11.1pt</span>。
              <span className="dn-em">
                是横跨 N 合约的链中位数、不是可交易价差；expiry- /
                strike-level vega、skew、期限结构仍未载入；vol 读法保持
                framework only。
              </span>{' '}
              Put/Call OI 比 0.52（call OI 221,708 对 put OI 115,342 —— 一本
              call 偏重、与正 γ 阻尼一致）。RV 方法：30D close-to-close、
              logret.std × √365 × 100、用最末 30 根日 log return（= 连续
              31 根日 close）、锚自 parquet 最末 bar 2026-08-05 00:05Z；底层
              31-close 窗区间 $62,255 – $66,522。（参考：最末 29 returns /
              30 closes 读 29.48%；页面值 29.23% 来自 30 returns。）
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · Tier-1 松回来（10Y −5bp 到 4.70%、TIPS −4bp 到 2.43%、HY OAS −7bp 到 2.78%）· 利率筛仍 FALSE 但收窄到 15bp（08-04 是 20bp）· MOVE 暗 · BTC 深度落后一根轰鸣的风险盘</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观面在利率、实际利率与信用上松回来、接 08-04 那根跳 ——
                但 reclaim-long 利率筛仍 FALSE
              </span>
              。面板渲染 2026-08-04 22:15Z、比快照早约 1.8h。US 10Y nominal
              <span className="dn-tag bull">4.70%（−5.0bp）</span>、regime z
              <span className="dn-tag bear">+2.38</span>、偶发 z
              <span className="dn-tag">+1.33</span> —— EXTREME RISK-OFF 标、
              比 08-04 的 4.75% 松了 5bp。10Y TIPS real
              <span className="dn-tag bull">2.43%（−4.0bp）</span>、regime z
              <span className="dn-tag bear">+2.66</span> —— 仍 EXTREME
              RISK-OFF、已松。5Y5Y BE 通胀
              <span className="dn-tag">2.31%（+1.0bp）</span>、偶发 z +2.17。
              HY OAS <span className="dn-tag bull">2.78%（−7.0bp）</span>、
              regime z <span className="dn-tag bull">−0.62</span> —— 松、已松。
              MOVE 债波 <span className="dn-tag stale">不可用（抓取失败）</span>
              —— 本次渲染暗。DXY
              <span className="dn-tag bull">99.88（−0.08）</span>、偶发 z
              −2.18 —— 软。Fed 净流动性
              <span className="dn-tag bear">$5.825T（−0.092T）</span>、
              RISK-OFF 偶发。US-JP 10Y 利差
              <span className="dn-tag">2.03%（−5.0bp）</span>；USD/JPY
              <span className="dn-tag bull">157.41（−0.17）</span>（日元更硬）。
              NFCI −0.554（陈旧 11d）。
              <span className="dn-em">
                净：reclaim-long 利率筛（10Y &lt; 4.55%）在 4.70% 仍 FALSE、
                但缺口从 08-04 的 20bp（4.75%）收窄到 15bp —— 往门那边移、
                但没穿过。10Y 与 TIPS 都带 EXTREME RISK-OFF regime z
                （+2.38 / +2.66）；松的这一天不改 regime 读。MOVE 暗、所以
                本轮债波确认不可用。
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
                <tr><td>US 10Y nominal</td><td className="num">4.70%</td><td className="num bull">−5.0bp</td><td className="num bear">+2.38</td><td className="num">+1.33</td><td className="bear">EXTREME risk-off · 已松</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.43%</td><td className="num bull">−4.0bp</td><td className="num bear">+2.66</td><td className="num">+1.24</td><td className="bear">EXTREME risk-off · 已松</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.31%</td><td className="num bear">+1.0bp</td><td className="num">+1.28</td><td className="num bear">+2.17</td><td className="neut">偶发跳</td></tr>
                <tr><td>HY OAS</td><td className="num">2.78%</td><td className="num bull">−7.0bp</td><td className="num bull">−0.62</td><td className="num">+0.52</td><td className="bull">松 · 已松</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.554</td><td className="num">−0.01</td><td className="num bull">−1.56</td><td className="num bull">−1.53</td><td className="stale">risk-on · 陈旧 11d</td></tr>
                <tr><td>MOVE 债波</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">不可用 · 抓取失败</td></tr>
                <tr><td>DXY</td><td className="num">99.88</td><td className="num bull">−0.08</td><td className="num">+0.83</td><td className="num bull">−2.18</td><td className="bull">更软</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.825T</td><td className="num bear">−0.092T</td><td className="num bull">−1.09</td><td className="num bear">−2.47</td><td className="bear">周内被抽</td></tr>
                <tr><td>USD/JPY</td><td className="num">157.41</td><td className="num bull">−0.17</td><td className="num">+0.30</td><td className="num bear">−3.15</td><td className="bull">日元更硬</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">2.03%</td><td className="num bull">−5.0bp</td><td className="num">−0.24</td><td className="num">+1.33</td><td className="neut">中性</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7464</td><td className="num bull">−0.00</td><td className="num bull">−1.46</td><td className="num bull">−2.20</td><td className="bull">松</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp（月度）</td><td className="num bear">+2.42</td><td className="num">+1.09</td><td className="stale">月度 · 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、汇总 00:01Z ——
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。
              非对角线均值 <span className="dn-tag">|r| 0.289</span>
              （较 08-04 的 0.315 松、但仍在 NORMAL 带、0.25–0.5）。BTC 的
              绑定又收紧回风险复合体：NQ
              <span className="dn-tag">+0.565</span>（首）、TSLA
              <span className="dn-tag">+0.554</span>、SP500
              <span className="dn-tag">+0.542</span>、NVDA
              <span className="dn-tag">+0.479</span>、JP225
              <span className="dn-tag">+0.431</span>、COPPER +0.393、SILVER
              +0.383、GOLD +0.341。7d 表现是那根最响的线：
              <span className="dn-tag bear">BTC +0.20%</span> —— 基本平、而
              风险盘在撕：NQ
              <span className="dn-tag bull">+6.64%</span>、SP500
              <span className="dn-tag bull">+3.99%</span>、JP225
              <span className="dn-tag bull">+4.77%</span>、软件大票跑得凶 ——
              MSFT <span className="dn-tag bull">+24.46%</span>、AMZN
              <span className="dn-tag bull">+19.89%</span>、GOOGL
              <span className="dn-tag bull">+13.36%</span>、NVDA
              <span className="dn-tag bull">+9.76%</span>、TSLA
              <span className="dn-tag bull">+6.04%</span>。金属硬：PLAT
              +7.85%、URNM +7.28%、PALL +6.16%、COPPER +4.49%、SILVER
              +4.01%、GOLD +1.23%。能源崩：CL
              <span className="dn-tag bear">−8.87%</span>、BRENT
              <span className="dn-tag bear">−7.25%</span>；AAPL
              <span className="dn-tag bear">−8.79%</span> 与 META −1.37% 是
              仅有的两根红大票。
              <span className="dn-em">
                BTC 的 7d 落后对 TradFi 引擎约 −6.44pt（BTC +0.20% vs NQ
                +6.64%）—— BTC 缺席了一根抬起股票、金属与软件复合体的宽
                risk-on 周。相关性 NORMAL（|r| 0.289）、但这个回报缺口是
                BTC 内生弱：风险盘不是问题、是 BTC 没参与
              </span>
              。JGB 月度 2.67% 带 EXTREME RISK-OFF 月度标 —— 不依赖。
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · 本子 FLAT · 回补反弹 scout STOOD DOWN（SM 卖了重夺、无 D-EMA50 cap 收）· 追空 STOOD DOWN（盘整往上破、γ 更正）· 无新交易</span>
            </h2>

            <p>
              <span className="dn-signal">
                08-04 岔路两侧都 stood down —— 价与仓位指向相反、所以什么
                都没武装
              </span>
              。回补反弹 scout 挂在两条腿上：一根干净 SM cover AND 一根
              D-EMA50 cap 上收 $64,612 以上。两条都没火 —— SM 滚到更深空
              （−9,028 → −10,007、多被砍）、08-04 日收 $64,075.50、在 cap
              下 $536。追空挂在一根 flip/旧地板破加 SM 空 AND γ 翻负上 ——
              反过来盘整往上破了 200W 地板、dealer 本子 γ 更正（+106.0M
              headline）、所以它的 γ 腿倒了、价格腿走错了方向。今天的本子
              是：不 scout 多进一根 SM 正在卖、且无 D-EMA50 cap 收的重夺；
              不追空进一个更重的正 γ 本子、地板守着、价在 flip 上方。本子
              保持 <span className="dn-em">FLAT</span>。武装 scout 的那一根线
              是一根 D-EMA50 cap 上收 $64,612 以上 <em>加</em> SM 补空
              （short_btc 往下滚 和/或 net &gt; −9k）；武装追空的那一根线
              是一根 1d 收回到 $63,124 flip / $63,311 旧地板带以下、加 γ 翻负。
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">flat · scout · STOOD DOWN · 两腿都未满 · SM 卖了重夺、无 D-EMA50 cap 收</span>
              <div className="dn-trade-name">
                回补反弹 scout —— stood down：价重夺了、但 SM 滚到更深空、D-EMA50 cap 守住
              </div>
              <div className="dn-thesis">
                scout 要这根重夺是一根真的回补反弹：一根 SM cover（空本子
                往下滚 / net 从低位往上爬）AND 一根 D-EMA50 cap 上收 $64,612
                以上、来确认头顶重夺。本轮在仓位上给的是反面：SM 砍多、把
                净空做深到 −10,007（一根干净读、无 BJ-14:36 伪影）、而 08-04
                日收 $64,075.50 —— 差 cap $536。结构性背景是杂色：两根日偏移
                翻正（D-SMA50 +1.29%、D-EMA20 +0.17%）、新鲜 12h 和 1w 水下
                金叉印出、200W 地板收盘上守住 —— 但 funding 回热（均值
                +6.00%、0 负）、OI 连缩两天、每一根 24h 流向读都净卖。重夺
                是一根撞进正 γ cap 的回补磨、不是一个需求带的底。递延、直到
                仓位本子确认。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">武装触发（两腿）</span><span className="dn-lvl-v bull">1d 收 &gt; $64,612（D-EMA50 cap 重夺）AND SM 补空（short_btc 往下滚 和/或 net &gt; −9,000）在同一 session 内</span></div>
                <div><span className="dn-lvl-k">scout 入场</span><span className="dn-lvl-v bull">触发印出时、scout long 0.2R —— 中/慢结构（金叉扩到 12h/1w、底背离五帧）在仓位确认后支持它</span></div>
                <div><span className="dn-lvl-k">止损</span><span className="dn-lvl-v bear">1d 收 &lt; $63,533（200W 周期地板）—— 一根收回地板下结束重夺读</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">$67,044（D-EMA100）然后 $68,357（D-SMA100）—— 进 $64.5k–$68k 正 γ 带</span></div>
                <div><span className="dn-lvl-k">R/R</span><span className="dn-lvl-v">触发 ~$64,612、止损 $63,533 = ~$1,079 风险；首目标 $67,044 = ~$2,432 ≈ 2.25:1 —— 但正 γ 带阻尼这条路、把目标当磨、不当脉冲</span></div>
              </div>
              <div className="dn-gating">
                <b>硬规则：</b>不要只凭价格腿 scout 多。08-04 备忘的纪律成立
                —— 一根 SM 正在卖、OI 在泄的重夺是一根回补挤压、不是底。
                scout 只在 D-EMA50 cap 收与一根 SM cover 一起印时武装；任一
                单独都是假信号。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">flat · 追空 · STOOD DOWN · 盘整往上破、γ 更正</span>
              <div className="dn-trade-name">
                追空 —— stood down：盘整往上从地板解开、dealer 本子 γ 加得更重正
              </div>
              <div className="dn-thesis">
                追空挂在一根 flip/旧地板破（$63,124 flip / $63,311 旧地板）
                加 SM 空 AND γ 翻负上。三条里两条倒了：盘整往上从 200W 地板
                破（08-04 收 $64,075.50、现货 +1.51% 在 flip 上方）、dealer
                本子 γ 到 +106.0M headline / +93.78M rollup —— 一道更重的正
                阻尼、正是空头要的负 γ 放大器的反面。只有 SM 空腿完好（net
                −10,007、且干净）。价格腿与 γ 腿都对着它、空 stand down；
                08-04 标的被冲掉的 carry 也让即便地板真破、级联燃料更少。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">重武装触发</span><span className="dn-lvl-v bear">1d 收 &lt; $63,124 flip / $63,311 旧地板 AND aggregate GEX 翻负（前段 expiry 内加进一根新负 γ 块）</span></div>
                <div><span className="dn-lvl-k">SM 腿（完好）</span><span className="dn-lvl-v bear">SM net −10,007、更深空、干净 tell —— 已在手的那一条腿</span></div>
                <div><span className="dn-lvl-k">重武装后目标</span><span className="dn-lvl-v">$62k（−6.85M）然后 $60k（−19.59M 崩盘 put 架）—— 最重负墙</span></div>
                <div><span className="dn-lvl-k">不要</span><span className="dn-lvl-v">不在一个 +106.0M 正 γ 本子、地板守着、价在 flip 上方时做空</span></div>
              </div>
              <div className="dn-gating">
                <b>注意：</b>整条前向 GEX 条带都正（到 25JUN27 没有一根负
                γ 块）；一根 γ 翻要一根新负块建起来、不是价格漂下去就行。
                $60k −19.59M 崩盘 put 是结构性目标、但去那的路穿过
                $64.5k–$68k / $62k−$63k 正带、双向都被阻尼。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 重夺 vs 仓位背离 · 盘面与本子指向相反</span>
              <div className="dn-trade-name">
                背离监视 —— 价从地板重夺、而 SM、funding、OI 与流向全倚在另一边
              </div>
              <div className="dn-thesis">
                这根快照的定义特征是一根干净背离：价上 +0.77%、一根 $578
                的 08-04 上收重夺 200W 地板与 D-SMA50、对着 SM 滚到更深空
                （−980、多被砍）、funding 回热（0 负）、OI 连缩两天、每一根
                24h aggressor 流向读都净卖。背离两解其一 —— 盘面拖本子
                （SM 补空进一根 D-EMA50 cap 收、武装 scout）或本子拖盘面
                （重夺失败回到 flip 下方、重武装追空）。4h ⚡TD9 SELL 与刚印
                的 1h 水上死叉说眼下快周期风险是第二条路；新鲜 12h/1w 金叉
                与五帧底背离说慢结构偏第一条。这根监视在 cap 收 + SM cover、
                或 flip 失守 + γ 翻负印出时解开。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">牛解</span><span className="dn-lvl-v bull">D-EMA50 cap 收 &gt; $64,612 加 SM 补空 —— 盘面拖本子、scout 武装</span></div>
                <div><span className="dn-lvl-k">熊解</span><span className="dn-lvl-v bear">1d 收 &lt; $63,124 flip 加 γ 翻负 —— 本子拖盘面、追空武装</span></div>
                <div><span className="dn-lvl-k">快周期 tell</span><span className="dn-lvl-v bear">4h ⚡TD9 SELL + 1h 水上死叉（刚印）—— 近端风险是褪回带内</span></div>
                <div><span className="dn-lvl-k">慢周期 tell</span><span className="dn-lvl-v bull">新鲜 12h（1b）+ 1w（2b）水下金叉 + 底背离 15m/4h/8h/12h/1w —— 慢转偏重夺</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>一根价/仓位背离是「等」信号、不是交易。不为
                任一解预置仓位 —— FLAT 本子的整个意义就是那根确认印（cap 收
                + cover、或 flip 失守 + γ 翻）告诉你背离往哪破。交易那个解、
                不交易背离本身。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 盘整往上从地板破、但 SM 卖了它、γ 封了它 · 两个触发都 stood down · 本篇转在盘面拖本子还是本子拖盘面上</span>
            </h2>

            <p>
              08-04 决策条件里：盘整往上破在干净 SM cover 上这条路
              <em>没有干净触发</em> —— 价往上破了、但 SM 卖了它（更深空、无
              cover）、且没有 D-EMA50 cap 收；盘整往下破那条路<em>没触发</em>
              —— 地板守住、价收在它上方；flip/旧地板破<em>没触发</em> ——
              现货在升上来的 $63,124 flip 上方 +1.51%；γ 翻负这条件<em>倒了</em>
              —— 本子 γ 到 +106.0M headline。<em>唯一往单一方向解开的 08-04
              条件是 SM 仓位、它干净地做深了空（无伪影）—— 但那一条腿单独
              武装不了任何一边。</em>今天的条件围绕一根仓位本子正在打的重夺
              重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>回补反弹 scout（多）—— 两腿</td><td className="bull">1d 收 &gt; $64,612（D-EMA50 cap）AND SM 补空（short_btc 往下滚 / net &gt; −9,000）</td><td>scout long 0.2R、目标 $67,044（D-EMA100）然后 $68,357（D-SMA100）</td></tr>
                <tr><td>追空（空）—— 重武装</td><td className="bear">1d 收 &lt; $63,124 flip / $63,311 旧地板 AND aggregate GEX 翻负</td><td>只在一根全新审计过的触发后再评估追空 —— 本篇不给任何持仓 size；框架目标 $62k（−6.85M）然后 $60k（−19.59M 崩盘 put）</td></tr>
                <tr><td>200W 周期地板丢</td><td className="bear">周收 &lt; $63,533.52（200W）—— 会结束连续 5 周地板上方的 streak</td><td>周期支撑破 —— 另起评估；「重夺回地板上方」读法结束</td></tr>
                <tr><td>重夺守住 + γ 保持正</td><td className="bull">1d 收守 &gt; $63,533（200W）AND aggregate GEX 保持正</td><td>重夺-在-地板-上方读法守住；scout 非对称只在 SM 开始补空时改善</td></tr>
                <tr><td>快周期褪（近端）</td><td className="bear">4h ⚡TD9 SELL + 1h 水上死叉（刚印）解成一根 4h 收 &lt; $63,533</td><td>重夺褪回带内；盯 flip 失守重武装追空</td></tr>
                <tr><td>reclaim-long 利率筛</td><td className="bear">10Y &lt; 4.55% 收 —— 在 4.70% FALSE（差 15bp 触发、从 08-04 的 20bp 收窄）</td><td>独立筛 FALSE；即便一根 BTC 内生回补反弹也没有利率顺风</td></tr>
                <tr><td>BTC-vs-TradFi 落后</td><td className="bear">BTC +0.20% vs NQ +6.64% 7d = −6.44pt 落后 · |r| 0.289 NORMAL</td><td>盯 BTC 追上参与或持续内生跑输；本身不是交易</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是
              <span className="dn-signal">
                重夺是否把仓位本子一起拖上去 —— 一根 D-EMA50 cap 上收
                $64,612 以上加 SM 终于补空（把 scout 武装进 $67k–$68.5k 簇）
                —— 还是仓位本子把盘面拖回去 —— 一根 1d 收在 $63,124 flip /
                $63,311 旧地板带以下加 γ 翻负（把追空重武装向 $60k −19.59M
                崩盘 put、不过回热但没钉住封顶的 carry 加上那道深正 γ 带留下
                一条被阻尼的路）
              </span>
              。在其中一根印出之前、本篇按写好的跑：盘整往上从周期地板破进
              一根强 08-04 收、但这根反弹在 SM（更深空、干净）、funding
              （回热、0 负）、OI（缩）、流向（净卖）上都未确认、且被一个
              更重的正 γ 本子封在 $64.5k–$68k 带。本子保持 FLAT：不 scout
              多进一根 SM 正在卖的重夺、不追空进一个 +106.0M 正本子、地板
              守着。下一个 24h 的对读是<em>等背离解开 —— 交易那根确认印、
              不交易重夺</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2 · 已过 codex 敌对式审计
            </span>
            <b>状态：</b>STAGE B codex 敌对但公允审计判 BLOCK-CRITICAL ——
            1 CRITICAL + 2 MAJOR + 2 MINOR（audits/2026-08-05-desk-note.md）。
            STAGE C 应用了每一条 finding、并对整份 EN 文件跑了一遍 grep
            闭合（关键错误主张 pattern + 语义变体、修-再-grep 到零残留）、
            然后把 v1 → v2。逐条：
            <b>DN-001（CRITICAL）</b> ——「破位以来首根收在 200W 地板与
            D-SMA50 上方」的主张被自我反驳（08-02 $63,550.00 早已收在两者
            上方）。搜索 pattern：&ldquo;first daily close back above&rdquo;、
            &ldquo;first back above&rdquo;；修前 2 处（正文 + MA 脚注）、修后
            0 —— 改写成破位以来第二根收在两者上方、在 08-03 跌破地板之后重回。
            已解决。<b>DN-002（MAJOR）</b> —— W-SMA200 被称不可计算、只因
            周线阶梯悄悄用了 2023+ 子集（189 bar）。改用完整 2019–2026
            wildcard 重算周线阶梯（3,632,048 分钟行 / 362 根右标周 bar、
            与 08-04 谱系一致）：W-SMA200 $63,756.61 在算中 / $63,533.52
            已结算（= trap-watch 地板）、W-EMA150 $73,969.24、W-EMA200
            $68,566.62。搜索 pattern：&ldquo;non-computable&rdquo; /
            &ldquo;not computable&rdquo;、&ldquo;189 weekly bars&rdquo;、子集
            EMA 值 &ldquo;67,110&rdquo; / &ldquo;73,053&rdquo;、
            &ldquo;W-EMA seed&rdquo;；修前 8 处（数据来源、正文阶梯、脚注、
            审计头）、修后 0。已解决。<b>DN-003（MAJOR）</b> —— 决策表带了
            一根 flat/scout 框架外的定 size「chase-short 0.25R」。搜索
            pattern：&ldquo;0.25R&rdquo;；修前 1 处、修后 0 —— 该行现在是一
            条框架/观察条件（只在一根全新审计触发后再评估、不给持仓 size）。
            已解决。<b>DN-004（MINOR）</b> —— SM Δ 基线被误标「vs 08-04
            备忘」、而 −9,028 这个数其实是同时钟 24h 基线（物理行 107617）；
            08-04 备忘本身显示 −8,995。搜索 pattern：&ldquo;vs 08-04
            note&rdquo; / &ldquo;the 08-04 note&rsquo;s −9,028&rdquo;；修前
            2 处（meta 标签 + 仓位正文）、修后 0 —— 重标为「同时钟 24h
            基线」、算式（979.5 / 9,027.9 = 10.85%）不变、已确认正确。已解决。
            <b>DN-005（MINOR）</b> —— MTF 节奏说滚动 latest 文件「每小时
            重生」、而实时文件已盘中推进（读取时 08:16 BJ / 00:16Z）。搜索
            pattern：&ldquo;regenerates hourly&rdquo; /
            &ldquo;regenerates&rdquo;；修前 1 处、修后 0 —— 改写成一根会盘中
            推进的滚动 latest 文件、以存档 00:07Z 副本为钉住的源。已解决。
            所有 finding 已解决（修后命中 = 0）；本篇升到 v2。codex 确认
            干净的集合（funding × 1095、GEX 双参考符号、by-expiry rollup
            +93.78M、日线 MA 矩阵、30D RV 29.23%、宏观 Tier-1、跨资产 |r|
            0.289、claims-vs-loaded-data 纪律、requireViewer gate）保持不动。
            <b>Build note（INFO）：</b>本服务器跑 Node 18.19.1；Next 16.2.6
            在 Node &lt; 20.9.0 硬退出、所以完整 <code>next build</code> 被
            环境阻塞；<code>npx --no-install tsc --noEmit</code> 是 build
            proxy、返回 exit 0。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体
            情况个性化。数字反映单一原子快照（2026-08-05 00:05Z）、
            provenance 在数据来源条带中按节披露；宏观 Tier-1 面板渲染
            2026-08-04 22:15Z（比快照早约 1.8h）、部分输入明确陈旧、暗或
            待定并已标注。水位、规模与条件是交易台流程的示例、不是长期
            推荐。过去的相关性、γ 与仓位模式不绑定未来盘面。衍生品有全损
            风险、加杠杆下损失可超过保证金。
            <em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                盘整往上从地板破了、但 smart money 卖了这根重夺、dealer 本子
                封了它。价与仓位指向相反。等背离解开。Flat。
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
            v2 · 2026-08-05 00:05Z 快照 · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            ma200w_trap_watch_state.json · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
