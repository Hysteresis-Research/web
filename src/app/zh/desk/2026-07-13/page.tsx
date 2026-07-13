import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-07-13 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-07-13',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-07-13' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260713() {
  await requireViewer('/zh/desk/2026-07-13');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-07-13 · v2</span>
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
              <span className="dn-big">$64,023</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.29%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-07-13 00:07Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-07-13 00:07Z（snapshot pin · 盘面行 t=&ldquo;07-13 08:07&rdquo; BJ）</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · 审计时文件 tail = pin · 盘面 `t` 字段是 BJ
                    （UTC+8）；00:07Z = t &ldquo;07-13 08:07&rdquo; · 此快照落在
                    周一 07-13 00:00Z 周线结算后 7 分钟 · 13JUL 0.3DTE 期权在
                    今日 08:00Z 结算（此快照约 8h 之后）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-07-13 00:01Z scan（BJ 08:01）</td>
                  <td className="dn-flag">
                    滚动 latest 文件（每小时重写）· 存档于
                    snapshots/2026-07-13-0007/ · 较快照锚滞后约 6 分钟 ·
                    含未收盘 K 线
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-13 00:01Z 快照</td>
                  <td className="dn-flag">
                    存档于 snapshots/2026-07-13-0007/ · 870 合约 · Deribit idx
                    $63,994 对 live $64,023（低 $29）· 13JUL 0.3DTE +2.69M 在
                    今日 08:00Z 结算（此快照约 8h 之后）· IV 中位数 41.7% 是
                    此 00:01Z 文件的 pre-13JUL-settle 值
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-13 00:01Z
                  </td>
                  <td className="dn-flag">存档于 snapshots/2026-07-13-0007/ · 7d 1h bar · 22 资产 · 167 rows</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-12 22:16Z 渲染</td>
                  <td className="dn-flag">
                    存档于 snapshots/2026-07-13-0007/ · 渲染滞后约 1.85h ·
                    FRED Tier-1：10Y 4.54%（−2bp）、TIPS 2.31%、HY OAS 2.70%、
                    MOVE 69.6（+0.66）、DXY 100.97、Fed 净流动性 $5.958T（+0.118T）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-07-13 00:05Z</td>
                  <td className="dn-flag">
                    较快照锚滞后约 2 分钟 · 偏移按现货重算 · 周线走 Binance
                    W-MON 口径（周线在周一 00:00Z 结算）· 完整矩阵可算
                    （盘上 359 根周 bar）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W-watch JSON</td>
                  <td className="dn-v-cell">weekly_200sma.json · 本次不存在</td>
                  <td className="dn-flag">
                    200W watch 不可用 —— 文件缺失；回退到矩阵 W-SMA200 $63,075
                    （不捏造 percentile / last-event）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED 月度 · IRLTLT01JPM156N</td>
                  <td className="dn-flag">陈旧 · 月度（72d）· 不作实时</td>
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
              <span className="dn-v">+1.71%</span>
              <span className="dn-src">live · 原始 0.001564 × 1095 = +1.71% · 向零泄 · 24h 均值 +6.51%（窗内仍带着 07-12 傍晚那根 +8.78% 的顶）· 封顶占用 0 / 1442 采样行 = 0.0% · 零负行 · 谷 +1.58% ann @ 2026-07-13 00:01Z / BJ 08:01（最新一根印 —— funding 在 24h 低、还在落）</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">+5.18% → +1.71%（−3.47pt 离前锚）</span>
              <span className="dn-src">24h 区间 +1.58% / +8.78% · funding 在价格跑 24h 高时弹到 +8.78% @ 2026-07-12 13:47Z（BJ 21:47）、随后随 SM 回头加空、价格回落泄到 +1.71% —— 杠杆压没了、funding 坐在零上方一点</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−0.68%（−693 BTC）</span>
              <span className="dn-src">live · 100,652 BTC（较前 101,345 BTC −0.68%）· OI 跨每个窗都泄（4h −406、1h −22）—— 多被洗把本子拖下来、即便 SM 在加空；净去杠杆、不是新建仓</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bear">57.60 / 42.40</span>
              <span className="dn-src">live_db `mkt_long_pct` · 从 55.70（24h 前）/ 55.70（07-12 备忘）再拥挤 +1.90pt —— 价格守住、retail 又靠回多侧、正是 SM 加空的镜像</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−4,426（净 SHORT、回头加空）</span>
              <span className="dn-src">live · long 10,188 − short 14,614 · long 被洗 −2,430、short 加 +895 跨 24h —— 07-12 那根走完的回补 REVERSE 成一根新空建仓、自 07-10 以来最深净空</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 07-12 备忘</span>
              <span className="dn-v bear">−1,103 → −4,426（−3,323 净、回空为前值 301.3%）</span>
              <span className="dn-src">|Δ|/prior_net = |−4,426 − (−1,103)| / 1,103 = 301.3% · 净几乎翻了四倍空（−1,103 → −4,426 ≈ 4.0×）· 一根离散重堆步 @ 2026-07-12 07:06Z / BJ 15:06（Δnet −2,820、Δlong −1,747 / Δshort +1,073 同一分钟）</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">41.7% / 29.97%</span>
              <span className="dn-src">GEX IV 中位数 · 870 合约（pre-13JUL-settle、来自 00:01Z 文件）· 是横跨合约的链中位数、NOT 可交易价差 · 溢价 ~+11.7pt · RV 30D close-to-close</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+3.79%（在上方）</span>
              <span className="dn-src">flip $61,687（前 $61,644 · +$43）· 对 live 现货 $64,022.87（+3.79%；64,022.87/61,687 − 1 = 3.787%）/ GEX 文件 Deribit idx $63,994（+3.74%；63,994/61,687 − 1 = 3.740%、文件取整 +3.7%）—— 两参考都正 · aggregate GEX +96.6M 净多 γ（前 +101.6M —— 又浅一档）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                地板在收盘周线上确认了 —— smart money 却回头往确认里加空
              </span>
              。周一 07-13 00:00Z 那根周线结算、整条谱系一直在等的那个决定
              性事件、落到「reclaim 守住」：07-06 周 bar 收
              <span className="dn-tag bull">$63,750.00、在 W-SMA200 地板 $63,075
              上方 +1.07%</span>、新起的未收盘 07-13 周最末标
              <span className="dn-tag bull">$64,007.80 @ 00:05Z（地板上方
              +1.48%）</span>—— 所以再确认破位触发现在既 dis-arm 又在一根走完
              的周线上 settle 了。但迎接这根确认的盘面、是自 07-09 以来最空的
              仓位形：smart money 回头加空、净
              <span className="dn-tag bear">−1,103 → −4,426（一根多被洗 −2,430
              + 空加 +895、印在一根离散重堆步 @ 2026-07-12 07:06Z / BJ
              15:06）</span>、retail 再拥挤多
              <span className="dn-tag bear">55.70% → 57.60%（+1.90pt）</span>、
              funding 向零泄
              <span className="dn-tag bear">+5.18% → +1.71% ann</span>（24h 低、
              还在落）、OI 泄
              <span className="dn-tag bear">−693 BTC（−0.68%）</span>。现货在
              CVD 上买 <span className="dn-tag bull">+5,639</span>、但 perp 本子
              <span className="dn-tag bear">在卖它（futCVD −216、taker −216）</span>
              进一根缩的 OI、同时 SM 靠空 —— 在一根平的
              <span className="dn-tag bull">+0.29%</span> 印上、一道现货买 /
              perp 卖 / SM 空的形。dealer 本子仍净多 γ
              （<span className="dn-tag bull">+96.6M</span>、从
              +131.8M→+101.6M→+96.6M 一路变浅）、flip $61,687 在现货下方
              +3.79%、近端没负放大器；MTF 引擎滚深一档到
              <span className="dn-tag">6/9 周期反转「偏反弹」</span>读、靠一簇
              高周期底背离（1d/3d/1w）+ 一根持续的 1M ⚡TD9 BUY、被一簇六个
              近端顶背离和一根新鲜 8h 水上死叉抵消。回补反弹 scout 的价格
              前置条件四条腿全 TRUE —— 但记录在案的买方现在是在 SELL、不是
              在回补、所以 scout 再次 stand down、本子保持 FLAT：不追 SM
              加空的多、不在深净多 γ 本子里加空、不在单腿利率火上加新对冲。
              耐心 —— 地板确认了、但需求底从没出现、smart money 在靠着
              reclaim；多是在现货需求压过回空时才决定、不是在价格前置条件
              继续亮着时。
            </p>

            <p>
              现货报 <span className="dn-tag">$64,023</span> live、
              <span className="dn-tag bull">+0.29%</span> 在 24h —— 一根收回
              07-12 回撤的平印 —— 在一条
              <span className="dn-tag">$64,254 / $63,661</span> 区间里（高 @
              2026-07-12 15:07Z / BJ 23:07、低 @ 2026-07-12 06:30Z / BJ
              14:30）。<span className="dn-signal">reclaim 现在是一根 settle
              了的周线事件、不是一根盘中插针</span>：截至周一 07-13 00:00Z 的
              那一周收 <span className="dn-tag bull">$63,750.00</span> —— 在
              $63,075 地板上方 +1.07%、在 settled-basis W-SMA200 $62,852 上方
              +1.43% —— 是 06-29 破位之后 FIRST 一根确认 reclaim 的走完周线
              收盘、而未收盘的 07-13 周已经在地板上方
              <span className="dn-tag bull">$64,007.80（+1.48%）</span>。日线
              收盘读：07-10 <span className="dn-tag bull">$64,129.50</span>
              （恢复高）、07-11 <span className="dn-tag">$63,783.00</span>、
              07-12 <span className="dn-tag">$63,750.00</span>（settle 的周线
              收盘）、07-13 未收盘在 parquet 最末 bar
              <span className="dn-tag bull">$64,007.80</span> —— 最末四根
              （07-09 到 07-12）全在地板上方、07-08 $62,255.30 是唯一一根收
              在下面。MA 矩阵带三根正线和一道收紧的头顶盖：现货
              <span className="dn-tag bull">在 D-SMA20 $61,930 上方 +3.38%</span>、
              <span className="dn-tag bull">在 D-EMA20 $63,060 上方 +1.53%</span>、
              <span className="dn-tag bull">在 W-SMA200 地板 $63,075 上方
              +1.50%</span>、
              <span className="dn-tag bear">D-SMA50 $64,652（−0.97%）</span>
              /
              <span className="dn-tag bear">D-EMA50 $65,209（−1.82%）</span>
              是第一道头顶阻力 —— D-SMA50 已落到离现货 $629、是整轮恢复里盖
              压得最紧的一次。
              <span className="dn-em">
                结构问题落到建设性一侧 —— 地板在算数的那根收盘上守住 ——
                但迎接确认的仓位翻空了。这不再是挤压后的消化；是一根新的
                SM 空建仓、坐在一根刚确认的地板上方、retail 挤在另一侧。
                地板守住了；买方没出现。
              </span>{' '}
              回补反弹 scout 的价格前置条件（现货在 flip AND D-EMA20 AND
              D-SMA20 AND 地板之上）四条腿全 TRUE —— 但需求块不只是没确认、
              它 inverted：smart money 现在在加空、所以 scout 继续递延。
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面 · 走完的回补 REVERSE 成新 SM 空建仓（多被洗 + 空加、印在一根离散重堆步）· retail 再拥挤多 · funding 向零泄 · 现货买 / perp 卖 / SM 空</span>
            </h2>

            <p>
              <span className="dn-signal">
                回补走完的第二天、smart money 回头加空
              </span>
              。SM net 是 <span className="dn-tag">−4,426</span> 对 07-12 备忘的
              −1,103 —— 也就是
              <span className="dn-em">一根 −3,323 回空、前净的 301.3%</span>
              （|−4,426 − (−1,103)| / 1,103 = 301.3%；净几乎翻四倍空、
              −1,103 → −4,426 ≈ 4.0×）。分量：long_btc
              <span className="dn-tag bear">12,617 → 10,188（−2,430）</span>、
              short_btc <span className="dn-tag bear">13,720 → 14,614
              （+895）</span> —— 多被洗与空加并发、正是 07-10 → 07-12 那两段
              回补的反面。
              <span className="dn-em">
                （多空腿按整 BTC 取整；live sm_net 字段是小数
                −1,102.3 → −4,426.3、所以整 BTC 的 long−short 把净重建到 ±1
                BTC 内 —— −1,103 / −4,426 这两根净是权威盘面值。）
              </span>
              与 07-12 那种慢磨不同、这根动作印出一根
              <span className="dn-signal">离散重堆步</span>：在
              <span className="dn-tag bear">2026-07-12 07:06Z（BJ 07-12
              15:06）</span> SM net 一根线跳 −2,820（Δlong −1,747、Δshort
              +1,073、现货 $63,801）—— 一根重堆敌对-2 签名（Δshort &gt; 0 +
              Δlong &lt; 0 同一分钟）、刚好在 −3k 阈值下、但是窗内最锐的一根
              单分钟事件。SM net 从峰（最不空）
              <span className="dn-tag bull">−541 @ 2026-07-12 05:31Z（BJ
              13:31）</span> —— 几乎平、是走完回补的尾 —— 走到谷
              <span className="dn-tag bear">−4,446 @ 2026-07-12 18:01Z（BJ
              07-13 02:01）</span>、进快照守在 ~−4,426。
              <span className="dn-em">
                签名要紧：走完的回补 REVERSE 成一根新空建仓、印在一根离散
                重堆步上、是一个仓位声明、不是漂移。smart money 补掉了那根
                夺回地板的挤压、看着地板在周线上确认、然后回头往里加空 ——
                靠着 reclaim、而不是加入它。
              </span>
            </p>

            <p>
              杠杆侧确认了多的去杠杆。
              <span className="dn-signal">
                funding 向零泄
              </span>
              ：live <span className="dn-tag">+1.71% ann</span>（原始
              0.001564 × 1095）、24h 均值
              <span className="dn-tag">+6.51%</span> —— 但均值是回看的、仍
              带着 07-12 傍晚那根
              <span className="dn-tag">+8.78% @ 2026-07-12 13:47Z（BJ
              21:47）</span> 的顶（funding 在价格跑 24h 高时弹、随后随 SM 加空、
              价格回落而崩）。谷印是最新一根 ——
              <span className="dn-tag">+1.58% ann @ 2026-07-13 00:01Z（BJ
              08:01）</span> —— 所以 funding 在 24h 低、还在落。封顶占用
              <span className="dn-tag bull">0 / 1442 采样行（0.0%）</span>
              （+10.95% 封顶整根空）、零负行（仍没空付多印）。OI Δ
              <span className="dn-tag bear">−693 BTC（−0.68%）</span> 跨 24h
              （较前 101,345 BTC −0.68%；live OI 100,652）—— OI 跨每个窗都泄
              （4h −406、1h −22）、多被洗把本子拖下来、即便 SM 在堆空、所以
              gross 在落、不是在扩。retail
              <span className="dn-tag bear">mkt_long_pct 57.60%</span> 从
              55.70%（24h 前和 07-12 备忘）再拥挤 +1.90pt —— 价格守住、retail
              又靠回多侧、正是 smart money 加空的镜像。perp 对现货
              <span className="dn-tag bear">−$64.86 折价</span>在快照（1h 均
              −$37.67；4h 均 −$38.00；24h 均 −$41.62、区间 −$88.85 / +$31.79
              —— basis 盘中短暂点过升水、但进快照坐在折价）。1 分钟 aggressor
              skew 快照 <span className="dn-tag bull">+29.3</span>（1h 均 −0.72
              —— 一本平衡的本子、快照正好一档小买攻）。
              <span className="dn-em">
                funding 刚在零上 + OI 缩 + SM 回空 + retail 再拥挤多：杠杆读
                法是一根多去杠杆撞上一根新 smart-money 空。这里没有一样在压
                多侧；唯一拥挤的多是 retail、而专业本子在 fade 它。
              </span>
            </p>

            <p>
              窗口流向是<em>现货买进一根 perp 卖的、缩的本子</em> —— 与 07-12
              同一道去杠杆形、但这次 SM 在下面加空。24h：价格
              <span className="dn-tag bull">+0.29%</span>、OI
              <span className="dn-tag bear">−693 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +5,639</span>
              <span className="dn-em">（窗内无 cb_cvd reset —— 一根真的现货
              买累积）</span>、期货 CVD
              <span className="dn-tag bear">Δ −216</span>、大单
              <span className="dn-tag bull">+22 BTC / 390 笔</span>、
              taker-net <span className="dn-tag bear">−216</span> ——
              <span className="dn-em">
                现货稳买、perp 净卖进一根 −0.68% OI 解杠杆；+0.29% 那根平印
                是杠杆本子在离场、现货吸收流向、不是新 perp 多在堆
              </span>
              。4h（进快照）：价格
              <span className="dn-tag bear">−0.29%</span>、OI
              <span className="dn-tag bear">−406 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +251</span>、期货 CVD
              <span className="dn-tag bear">Δ −116</span>、大单
              <span className="dn-tag bear">−70 BTC / 77 笔</span>、
              taker-net <span className="dn-tag bear">−116</span> ——
              <em>同一道形：现货买、perp 卖、大单净卖、近几小时把 OI 拖
              下来</em>。1h：价格
              <span className="dn-tag bull">+0.31%</span>、OI
              <span className="dn-tag bear">−22 BTC</span>、现货 CVD
              <span className="dn-tag bear">Δ −98</span>、期货 CVD
              <span className="dn-tag bull">Δ +58</span>、大单
              <span className="dn-tag bear">−31 BTC / 32 笔</span>、
              taker-net <span className="dn-tag bull">+58</span> ——
              <em>一根杂色的收尾小时、现货略offer、perp 点买、OI 近平</em>。
              <span className="dn-em">
                4h 和 1h 流向窗用与 24h 窗同一套 inclusive 采样行口径（起始
                分钟 = 上一根采样锚行、含端点）、不是精确的 240 / 60 分钟间隔；
                一根精确分钟窗会把每个 CVD/OI 数字挪 tens of BTC（如 4h
                Coinbase CVD +251 → +293、1h −98 → −144）、但不改现货买 /
                perp 卖的形。
              </span>{' '}
              现货 CVD 累积（+5,639 跨 24h）是它与 07-12 共享的那一根建设性
              线索 —— 但它现在泄进一根缩的 OI、<em>同时 SM 在加空</em>、所以
              是现货在吸收一根 perp 去杠杆和一根 smart-money 空、不是一个
              需求底在建。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 图 · 引擎滚深一档到 6/9 周期反转（偏反弹）· 高周期底背离簇 1d/3d/1w · 近端顶背离簇六个 · 新鲜 8h 水上死叉 · 3d 水下金叉刚印 · 1M ⚡TD9 BUY 持续</span>
            </h2>

            <p>
              <span className="dn-signal">
                MTF 引擎读一根 6/9 周期反转 regime（JT&lt;0 · 均值回归 /
                偏反弹）
              </span>
              —— 比 07-12 的 5/9 深一档、净标仍是「高周期偏空 / 短周期
              震荡」。背离计双侧、两端都长了：顶背离 6（15m/30m/1h/4h/12h/1d）
              对底背离 5（30m/1h/1d/3d/1w）、引擎旗一根
              <span className="dn-tag bull">高周期底背离簇（1d/3d/1w）</span>
              和一根持续的
              <span className="dn-tag bull">1M ⚡TD9 BUY $63,728</span>。交叉
              按速度分、中周期滚得更空一点：快周期带水上死叉
              （<span className="dn-tag bear">15m 11b</span>、
              <span className="dn-tag bear">30m 5b</span>、
              <span className="dn-tag bear">4h 5b</span>）、
              <span className="dn-tag bear">1h 水下死叉 2b</span>
              和站着的
              <span className="dn-tag bear">1w 水下死叉 3b</span>
              持续、一根新鲜
              <span className="dn-tag bear">8h 水上死叉（刚印）</span>
              把 8h 从 07-12 的金叉翻掉 —— 而中到高周期守金叉：
              <span className="dn-tag bull">1d 水下金叉 12b</span> 和一根
              <span className="dn-tag bull">3d 水下金叉（刚印、1b）</span>。
              RSI 在快周期软到超卖（15m 34、30m 34、1h 39）、中带在上（4h 51、
              8h 55、12h 56、1d 52）、在 3d/1w/1M 冷到 43/38/44。
              <span className="dn-em">
                直读：引擎的周期反转 / 偏反弹标靠的是高周期底背离簇
                （1d/3d/1w）+ 1M TD9 BUY + 新鲜 3d 金叉 —— 与整轮恢复一直带
                的那根结构反弹案同。但近端滚错了方向：一簇从 15m 到 1d 的
                六个顶背离、加 8h 从金叉翻成水上死叉、说眼前的路是震荡到
                下。反弹案是一根高周期结构读；SM 回空和顶背离簇是近端的
                反向砝码。一个现货底会确认反弹；一根地板丢会杀掉它 ——
                现在一根持续的 SM 空建仓是第三样能拖住它的东西。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">63,744</td><td className="num bull">34.4</td><td className="bear">死叉（水上）11b</td><td className="bear">云下 ↑63.9k 9b</td><td>Buy 2</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>30m</td><td className="num">63,731</td><td className="num bull">34.0</td><td className="bear">死叉（水上）5b</td><td className="bear">云下 ↑63.9k 5b</td><td>Buy 7</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">63,731</td><td className="num">38.7</td><td className="bear">死叉（水下）2b</td><td className="bear">云下 ↑63.8k 1b</td><td>Buy 4</td><td>BEAR hid · BEAR reg · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">63,744</td><td className="num">50.6</td><td className="bear">死叉（水上）5b</td><td className="bull">云上 ↓62.9k 58b</td><td>Buy 2</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>8h</td><td className="num">63,731</td><td className="num">55.3</td><td className="bear">死叉（水上）刚印</td><td className="bull">云上 ↓62.1k 12b</td><td>Buy 2</td><td>BULL hid</td></tr>
                <tr><td>12h</td><td className="num">63,744</td><td className="num">56.0</td><td className="neut">MACDh 水上 +（无新叉）</td><td className="bull">云上 ↓62.6k 4b</td><td>Buy 3</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>1d</td><td className="num">63,731</td><td className="num">51.9</td><td className="bull">金叉（水下）12b</td><td className="bear">云下 ↑66.3k 42b</td><td>Sell 4</td><td>BEAR hid · BEAR reg · BULL reg</td></tr>
                <tr><td>3d</td><td className="num">63,728</td><td className="num">43.1</td><td className="bull">金叉（水下）刚印</td><td className="bear">云下 ↑71.7k 14b</td><td>Sell 4</td><td>BULL reg</td></tr>
                <tr><td>1w</td><td className="num">63,731</td><td className="num">38.4</td><td className="bear">死叉（水下）3b</td><td className="bear">云下 ↑96.3k 24b</td><td>Sell 1</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">63,728</td><td className="num">43.6</td><td className="neut">MACDh 水上 − · ⚡TD9 BUY</td><td className="bull">云上 ↓47.0k 29b</td><td>⚡TD9 BUY</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 00:01Z scan（BJ 08:01；滚动
                    latest 文件、逐字存档于 snapshots/2026-07-13-0007/）。
                    头部 regime：<em>6/9 周期反转（JT&lt;0）—— 均值回归 /
                    偏反弹、趋势跟随警惕</em>；总体 1 long / 2 short / 7
                    neutral；告警：<em>高周期底背离簇（1d/3d/1w）</em>、
                    <em>1M ⚡TD9 BUY $63,728</em>、<em>3d 水下金叉（刚印）</em>、
                    <em>8h 水上死叉（刚印）</em>、<em>1h 水下死叉（2b）</em>。
                    扫描现货 $63,740、24h −0.15%（00:01Z MTF 扫描；live-tape
                    头部 00:07Z 在同一 24h 窗读 +0.29% —— 6 分钟时间差和不同
                    的 24h 参考造成差异）、24h H/L $64,272 / $63,603、qVol
                    $3.84B。收盘为未收盘 K 线；每个值在各周期收盘前都按临时
                    处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵确认三根正线坐在一根确认的地板上方、头顶盖在收紧。现货
              $64,023 坐在
              <span className="dn-tag bull">D-SMA20 $61,930 上方 +3.38%</span>、
              <span className="dn-tag bull">D-EMA20 $63,060 上方 +1.53%</span>、
              <span className="dn-tag bull">W-SMA200 地板 $63,075 上方
              +1.50%</span> —— 三根正线、对 07-12 备忘基本平（D-SMA20 +3.28%、
              D-EMA20 +1.47%、地板 +1.31%）、价格守住。第一道头顶阻力是
              <span className="dn-tag bear">D-SMA50 $64,652（−0.97%）</span>
              /
              <span className="dn-tag bear">D-EMA50 $65,209（−1.82%）</span>
              对 —— D-SMA50 已落到离现货 $629（07-12 是 $64,914 / −1.57%）、
              是整轮恢复里盖压得最紧的一次、也是一个现货底需要重夺的水位。
              其上按顺序：
              <span className="dn-tag bear">D-EMA100 $68,667（−6.76%）</span>、
              <span className="dn-tag bear">W-EMA200 $68,689（−6.79%）</span>、
              <span className="dn-tag bear">D-SMA150 $70,008（−8.55%）</span>、
              <span className="dn-tag bear">D-SMA100 $70,699（−9.44%）</span>、
              <span className="dn-tag bear">W-SMA20 $69,832（−8.32%）</span>、
              <span className="dn-tag bear">W-EMA20 $70,461（−9.14%）</span>、
              <span className="dn-tag bear">D-EMA150 $71,806（−10.84%）</span>、
              <span className="dn-tag bear">D-SMA200 $73,759（−13.20%）</span>、
              <span className="dn-tag bear">W-EMA150 $74,354（−13.89%）</span>、
              <span className="dn-tag bear">D-EMA200 $74,718（−14.31%）</span>、
              <span className="dn-tag bear">W-SMA150 $76,109（−15.88%）</span>。
              更高更远、已弃用：W-EMA50 $79,474（−19.44%）、W-EMA100 $79,640
              （−19.61%）、W-SMA50 $86,470（−25.96%）、W-SMA100 $88,480
              （−27.64%）。
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-07-13 00:05Z（close
                $64,007.80）；偏移按 live 现货 $64,022.87 重算。显示的 MA
                水位按 $ 取整、偏移用精确序列值算。周线 MA 走 Binance W-MON
                口径（周线在周一 00:00Z 结算）、与谱系的地板和 07-06 / 06-29
                周线收盘参考对齐；完整矩阵可算（盘上 359 根周 bar）。200W-watch
                JSON 本次缺失、所以地板取矩阵 W-SMA200 $63,075（含未收盘、
                在现货下方 +1.50%；截至 07-06 周 bar 的 settled-basis W-SMA200
                是 $62,852）。日线收盘：07-06 $64,023.60、07-07 $63,335.40、
                07-08 $62,255.30、07-09 $63,197.00、07-10 $64,129.50、07-11
                $63,783.00、07-12 $63,750.00（settle 的周线收盘）、07-13
                （未收盘）$64,007.80 —— 最末四根（07-09 到 07-12）在 $63,075
                地板上方、07-08 $62,255.30 是唯一一根收在下面。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子仍净多 γ +96.6M（从 +101.6M 变浅）· flip $61,687（现货上方 +3.79%）· 近端 strip 无负放大器 · $64k–$68k 正墙带盖压</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子仍深净多 γ、随近端 expiry 变薄又去 γ 一档
              </span>
              。aggregate GEX 是
              <span className="dn-tag bull">+96.6M / 1%</span>（07-12 是
              +101.6M —— 一根 −5.0M 更浅的台阶、是从 +131.8M → +101.6M →
              +96.6M 的第三根连续去 γ、仍牢牢阻尼）；本子保持多 γ。0-γ flip
              移动 <span className="dn-tag">$61,644 → $61,687（+$43）</span>、
              现货 $64,023 坐在
              <span className="dn-tag bull">flip 上方 +3.79%</span>
              （现货口径 64,022.87 / 61,687 − 1 = +3.787%）；GEX 文件自己的
              「dist to flip」读 +3.7%、对它的 Deribit idx $63,994（比 live
              现货低 $29）算
              <span className="dn-tag bull">+3.74%</span>（63,994 / 61,687 − 1
              = +3.740%）—— 两参考都正、现货在 flip 上方。墙图保持一道正带
              盖头顶、一根孤负 bid fade：
              <span className="dn-tag bull">$66k +20.88M</span>（最重）、
              <span className="dn-tag bull">$65k +20.20M</span>、
              <span className="dn-tag bull">$64k +19.45M</span>（撑刚在 live
              现货下面）、
              <span className="dn-tag bull">$70k +17.44M</span>、
              <span className="dn-tag bull">$68k +16.01M</span>、
              <span className="dn-tag bear">$60k −13.17M</span>（top-10 里
              唯一一根负、bid 一根往地板的 fade）、
              <span className="dn-tag bull">$80k +8.42M</span>、
              <span className="dn-tag bull">$67k +7.85M</span>、
              <span className="dn-tag bull">$72k +6.81M</span>、
              <span className="dn-tag bear">$55k −5.72M</span>。
              <span className="dn-em">
                $64k–$68k 正带（$64k +19.45M、$65k +20.20M、$66k +20.88M、
                $67k +7.85M、$68k +16.01M）合约约 +84M 的头顶「撑转盖」；唯一
                有分量的负 γ 是现货下方的 $60k −13.17M / $55k −5.72M、所以
                本子结构性 bid 一根往地板的 fade、offer 一根往 $66k 的挤压。
                SM 回空正撞进那道正带的顶
              </span>
              。expiry strip 被正值主导、无近端放大器：13JUL 0.3DTE +2.69M
              （今日 08:00Z 结算、此快照约 8h 之后）、14JUL 1.3 +1.45M、15JUL
              2.3 −0.15M、16JUL 3.3 −0.06M（两根近负可忽略）、然后前向块
              <span className="dn-tag bull">17JUL 4.3 +38.87M</span>、
              <span className="dn-tag bull">24JUL 11.3 +11.43M</span> 和
              <span className="dn-tag bull">31JUL 18.3 +41.46M</span>（全正）、
              28AUG 46.3 +8.17M、25SEP 74.3 +0.01M、25DEC 165.3 +2.23M、
              26MAR27 256.3 +0.94M、25JUN27 347.3 +0.55M。整条 strip 上没有
              一根 expiry 带负放大器权重 —— 阻尼背景近端没有日历催化去翻它、
              这正是 SM 回空对我们不是一根空交易的原因。
            </p>

            <p>
              IV 中位数横跨 870 合约是
              <span className="dn-tag">41.7%</span> 对 30D close-to-close
              RV <span className="dn-tag">29.97%</span> —— 链级溢价
              <span className="dn-tag">~+11.7pt</span>。
              <span className="dn-em">
                披露：870 合约与 41.7% IV 中位数是 pre-13JUL-settle 值、读自
                00:01Z GEX 文件；13JUL 0.3DTE +2.69M 块在今日 08:00Z 清（此
                快照约 8h 之后）、结算后的合约计与 IV 中位数没在这里重算 ——
                strip 无论如何都没负放大器、所以这根结算对 γ regime 是非事件。
              </span>{' '}
              是 N 合约的链中位数、<span className="dn-em">不是</span>可交易
              价差；expiry- / strike-level vega、skew、期限结构仍未载入、
              vol 读法保持 framework only。Put/Call OI 比率 0.55（126,973
              put OI / 232,618 call OI）。RV 方法：30D close-to-close、
              logret.std × √365 × 100、用最末 30 根日 log return、锚自
              parquet 最末 bar 2026-07-13 00:05Z（29-return 另一口径读
              29.61%；页面值 29.97% 用 30 returns）。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · 利率/美元分裂 risk-off（10Y 4.54%、TIPS 2.31% EXTREME、DXY 100.97 EXTREME）对信用/流动性 risk-on（HY OAS 2.70%、Fed 净流动性 $5.958T EXTREME）· 面板基本不动 · reclaim-long 利率筛在 4.54% 仍真</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观盘面守住它分裂的形、几乎没动 —— 利率和美元 risk-off、
                信用和 Fed 流动性 risk-on
              </span>
              。面板渲染 2026-07-12 22:16Z、比快照早约 1.85h。US 10Y nominal
              <span className="dn-tag bull">4.54%（−2.0bp）</span>、regime z
              <span className="dn-tag bear">+1.82</span>、偶发 z
              <span className="dn-tag">+1.21</span> —— RISK-OFF 标、但
              <span className="dn-em">在 4.55% reclaim-long 筛线下方</span>
              （4.54% 真）、刚在 4.53% put-spread re-grow 腿上方（差 1bp
              FIRED）。10Y TIPS real
              <span className="dn-tag bear">2.31%（0.0bp）</span>、regime z
              <span className="dn-tag bear">+2.77</span>、偶发 z
              <span className="dn-tag">+1.62</span> —— EXTREME RISK-OFF、平。
              5Y5Y BE 通胀
              <span className="dn-tag">2.20%（+2.0bp）</span>。HY OAS
              <span className="dn-tag">2.70%（0.0bp）</span>、regime z
              <span className="dn-tag bull">−1.21</span>、偶发 z
              <span className="dn-tag bull">−0.59</span> —— RISK-ON、在 2.78%
              re-grow 闸下方 8bp、平。MOVE 债波
              <span className="dn-tag">69.6（+0.66）</span> —— 仍「松」、
              一档更硬。DXY
              <span className="dn-tag bear">100.97（+0.03）</span>、regime z
              <span className="dn-tag bear">+2.11</span> —— EXTREME RISK-OFF、
              平。Fed 净流动性
              <span className="dn-tag bull">$5.958T（+0.118T）</span>、偶发 z
              <span className="dn-tag bull">+2.47</span> —— EXTREME RISK-ON、
              那根 +0.118T 周度跳守着。US-JP 10Y 利差
              <span className="dn-tag">1.89%（−2.0bp）</span>；USD/JPY
              <span className="dn-tag">161.97（−0.40）</span>。NFCI −0.515
              （陈旧 9d）。
              <span className="dn-em">
                净：reclaim-long 利率筛（10Y &lt; 4.55%）在 4.54% 仍真；
                put-spread re-grow 闸的 10Y 腿（&gt; 4.53%）差一个基点 FIRED
                —— 一根单腿盯位事件、不是自动 roll、HY OAS 腿（&gt; 2.78%）
                在 2.70% 还差 8bp 触发。面板对 07-12 基本不动 —— 利率和美元
                在极值上硬 risk-off、信用和 Fed 流动性决定性 risk-on、没有
                一样动得够改 BTC 读法。JGB 月度 2.65% 带 EXTREME RISK-OFF
                月度标（陈旧 72d）—— 不依赖。
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
                <tr><td>US 10Y nominal</td><td className="num">4.54%</td><td className="num bull">−2.0bp</td><td className="num bear">+1.82</td><td className="num">+1.21</td><td className="bear">紧 · RISK-OFF（在 4.55% 筛下方）</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.31%</td><td className="num">0.0bp</td><td className="num bear">+2.77</td><td className="num">+1.62</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.20%</td><td className="num bear">+2.0bp</td><td className="num">−0.37</td><td className="num">−0.61</td><td className="neut">无标</td></tr>
                <tr><td>HY OAS</td><td className="num">2.70%</td><td className="num">0.0bp</td><td className="num bull">−1.21</td><td className="num bull">−0.59</td><td className="bull">松 · RISK-ON（距闸 8bp）</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.515</td><td className="num">−0.01</td><td className="num">−0.06</td><td className="num bull">−2.13</td><td className="stale">陈旧 9d</td></tr>
                <tr><td>MOVE 债波</td><td className="num">69.6</td><td className="num bear">+0.66</td><td className="num bull">−0.47</td><td className="num">−0.24</td><td className="bull">松 · 当日更硬</td></tr>
                <tr><td>DXY</td><td className="num">100.97</td><td className="num bear">+0.03</td><td className="num bear">+2.11</td><td className="num">+0.70</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.958T</td><td className="num bull">+0.118T</td><td className="num bull">+2.42</td><td className="num bull">+2.47</td><td className="bull">EXTREME RISK-ON</td></tr>
                <tr><td>USD/JPY</td><td className="num">161.97</td><td className="num bull">−0.40</td><td className="num bear">+1.47</td><td className="num">+0.85</td><td className="neut">日元当日更硬</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">1.89%</td><td className="num">−2.0bp</td><td className="num bull">−0.79</td><td className="num">+1.21</td><td className="bull">紧</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7761</td><td className="num bull">−0.02</td><td className="num bull">−1.42</td><td className="num">−0.18</td><td className="bull">无标 · 松</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">+13.5bp（月度）</td><td className="num bear">+2.56</td><td className="num">+1.43</td><td className="stale">月度（72d）· 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、汇总 00:01Z ——
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。
              非对角线均值 <span className="dn-tag">|r| 0.315</span>
              （较 07-12 的 0.314 基本平、守在 NORMAL 带）。BTC 最紧的对齐是
              宽 risk 复合体：
              <span className="dn-tag">NQ +0.457</span>、
              <span className="dn-tag">SP500 +0.453</span>、
              <span className="dn-tag">TSLA +0.448</span>、
              <span className="dn-tag">COPPER +0.424</span>、
              <span className="dn-tag">GOLD +0.413</span>、
              <span className="dn-tag">SILVER +0.408</span>、
              <span className="dn-tag">PLAT +0.387</span>、然后能源反向
              <span className="dn-tag">CL −0.355</span> /
              <span className="dn-tag">BRENT −0.341</span>、加
              <span className="dn-tag">NVDA +0.315</span>。7d 相对表现：
              <span className="dn-tag">BTC +0.00%</span> 现在平对
              <span className="dn-tag bear">NQ −0.01%</span> —— 一根只
              <span className="dn-tag">+0.01pt</span> 的领先（从 07-12 的
              +0.79pt 收崩、随 06-30 低完全滚出 7d 窗）、
              <span className="dn-tag bull">SP500 +0.51%</span>、
              <span className="dn-tag bear">JP225 −2.06%</span>、
              <span className="dn-tag bull">META +12.90%</span>（7d 复合体
              领头）、<span className="dn-tag bull">NVDA +7.07%</span>、
              <span className="dn-tag bull">TSLA +1.88%</span>、
              <span className="dn-tag bull">AAPL +2.47%</span>、
              <span className="dn-tag bear">MSFT −2.07%</span>。金属软：
              <span className="dn-tag bear">GOLD −2.32%</span>、
              <span className="dn-tag bear">SILVER −6.05%</span>、
              <span className="dn-tag bear">PLAT −2.43%</span>。能源猛：
              <span className="dn-tag bull">CL +7.87%</span>、
              <span className="dn-tag bull">BRENT +9.58%</span>、
              <span className="dn-tag bear">NGAS −9.32%</span>。
              <span className="dn-em">
                BTC 对 TradFi 引擎的 7d 领先收到 +0.01pt（BTC +0.00% vs NQ
                −0.01%）、从 07-12 的 +0.79pt —— 那根跑赢随 06-30 低滚出窗
                完全 aged out；BTC 和 NQ 现在 7d 平对平、谁都不领。相关带守
                NORMAL、所以 BTC 既没脱钩也没被系统性钉在 risk 复合体上。
              </span>
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · 本子 FLAT · 地板在周线收盘上确认、但 SM 回头往里加空 · 回补反弹 scout 价格前置 TRUE、需求块 INVERTED 成一根 SM 空建仓 · 不在正 γ 里加空 · 不在单腿利率火上加新对冲</span>
            </h2>

            <p>
              <span className="dn-signal">
                07-12 备忘的判断 —— 地板在周一周线收盘上决定、多在现货需求
                替掉回补燃料时决定 —— 两条腿都印对了
              </span>
              。周线收盘 settle 了地板：07-06 周收 $63,750.00、在 $63,075
              地板上方 +1.07%、所以 reclaim 在决定性事件上守住 —— 再确认破位
              触发现在 dis-arm 且 settle 了。但第二条腿落到比 07-12 更空的
              一侧：现货需求没替掉回补燃料 —— 反而 smart money 回头加空、净
              −1,103 → −4,426 印在一根离散重堆步上、同时 retail 再拥挤多、
              funding 向零泄。scout 的价格前置条件四条腿全 TRUE —— 现货
              $64,023 在 flip $61,687 上、在 D-EMA20 $63,060 上、在 D-SMA20
              $61,930 上、在地板 $63,075 上 —— 但需求块不只是没确认、它
              inverted：记录在案的买方现在是一根专业空、不是一根回补 perp
              或一个现货底。今天交易本子是：不追 SM 加空的多、不在一根没
              放大器的深净多 γ 本子里加空、不在一根单腿 1bp 利率火上加新
              对冲 —— 等一个现货需求底（现货 CVD 把 OI 拉 UP、不是泄进一根
              缩的本子、同时 SM 加空）配上一根 D-SMA50 $64,652 / D-EMA50
              $65,209 盖的重夺、再 scout long。
            </p>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout · 递延 · 价格前置 TRUE（4/4 腿）· 需求块 INVERTED 成一根 SM 空建仓</span>
              <div className="dn-trade-name">
                回补反弹 scout —— 价格腿全 TRUE、但记录在案的买方从一根回补空 inverted 成一根新 SM 空；stand down
              </div>
              <div className="dn-thesis">
                scout 的价格前置条件四条腿全满足（现货在 flip、D-EMA20、
                D-SMA20 和 W-SMA200 地板之上）、而且整轮恢复一直如此 —— 但
                一根满足的价格前置从来不是触发。触发是一个确认的现货需求底、
                而需求读比 07-12 更差：07-12 备忘把买方标为一根回补 perp 空
                进一根走完的回补；今天那根回补 REVERSE 成一根新 SM 空建仓
                （净 −1,103 → −4,426、一根多被洗 −2,430 + 空加 +895 印在一根
                离散重堆步 @ 2026-07-12 07:06Z / BJ 15:06）、retail 再拥挤多
                +1.90pt 到 57.60%、funding 泄到 +1.71% ann、OI 泄 −693。现货
                CVD 确实买（+5,639 跨 24h、无 reset）—— 唯一一根建设性线索 ——
                但它泄进一根 −0.68% OI 解杠杆、同时 perp 净卖（futCVD −216、
                taker −216）、smart money 加空、这是现货在吸收一根 perp 去
                杠杆 AND 一根 SM 空、不是一个底在建。在这里入多是买进一根专业
                空的靠、坐在一根刚确认的地板上方、不是需求的起点。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">价格前置条件（TRUE、4/4）</span><span className="dn-lvl-v bull">现货 $64,023 &gt; flip $61,687 AND &gt; D-EMA20 $63,060 AND &gt; D-SMA20 $61,930 AND &gt; W-SMA200 地板 $63,075</span></div>
                <div><span className="dn-lvl-k">需求触发（真正的闸 —— 未到、现在 INVERTED）</span><span className="dn-lvl-v bear">现货 CVD 把 OI 拉 UP（不是泄进一根缩的本子）AND SM 回补（不是加空）AND 一根 1h/4h 收重夺 D-SMA50 $64,652 / D-EMA50 $65,209 且 OI 在建 —— 一个现货底、不是一根专业空的靠</span></div>
                <div><span className="dn-lvl-k">scout 入场</span><span className="dn-lvl-v bull">需求触发印出时、scout long 0.2R</span></div>
                <div><span className="dn-lvl-k">止损</span><span className="dn-lvl-v bear">1h 收 &lt; $63,075（W-SMA200 地板 —— 一根收在下面即便在周线确认之后也重新 arm 再确认破位、结束消化读法）</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">$68,667（D-EMA100）是工作首目标 —— D-SMA50 $64,652 / D-EMA50 $65,209 盖是入场验证（需求触发入场坐在重夺处）、不是止盈</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R · 首目标 $68,667</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R：</b>一根需求触发入场在 D-EMA50 重夺附近 ~$65,209、
                止损在地板 $63,075 = ~$2,134 风险；首目标回到 $64,652 在入场
                下方、所以工作首目标是 $68,667（D-EMA100）= ~$3,458 回报 ≈
                1.6:1 —— 可接受、但条件是底在盖上方成型 AND smart money 回补、
                不是价格前置。<b>硬规则：</b>一根满足的价格前置本身 NOT 一个
                入场信号 —— 它整轮恢复都 TRUE、而买方先是回补燃料、然后是一根
                专业空。入场是现货底（CVD 把 OI 拉上 + SM 回补 + D-EMA50 盖
                重夺）、按这个顺序。不追 SM 加空的多。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 阻尼 regime 完好 · strip 上无近端负放大器 · SM 回空对我们不是一根空交易</span>
              <div className="dn-trade-name">
                不在地板往一根 +96.6M 净多 γ 本子里加空 —— dealer strip 近端没有催化去翻阻尼
              </div>
              <div className="dn-thesis">
                aggregate GEX +96.6M（从 +131.8M → +101.6M → +96.6M 第三根
                连续去 γ、但牢牢净多 γ）、flip $61,687 现货上方 +3.79%、
                $64k–$68k 正带盖压、孤根 $60k −13.17M 负 bid 一根往地板的
                fade。整条 expiry strip 正值主导 —— 13JUL / 17JUL / 24JUL /
                31JUL 哪里都没负放大器（近的 15JUL −0.15M / 16JUL −0.06M 可
                忽略）—— 所以在这里压空是在跟一根没有日历催化去转它的阻尼
                本子对着干、即便 smart money 在回空。13JUL 0.3DTE +2.69M
                今日 08:00Z 结算（此快照约 8h 之后）、对 γ regime 是非事件。
                重开空需要一根新鲜近端负 γ 放大器上 strip AND 一根 1d 收在
                $63,075 地板下方 —— SM 回空是需求底更远的警告、不是加入空
                的绿灯。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">无仓位 · 不在正 γ 里加空</span></div>
                <div><span className="dn-lvl-k">重 arm 空触发</span><span className="dn-lvl-v bear">一根新鲜近端负 γ expiry 上 strip AND 一根 1d 收 &lt; $63,075（地板丢、即便在周线确认后也重 arm 再确认破位）</span></div>
                <div><span className="dn-lvl-k">不要</span><span className="dn-lvl-v">不在地板往一根 +96.6M 净多 γ 本子、正值主导 expiry strip 里加空 —— SM 空的靠不是负 γ 放大器的替代</span></div>
              </div>
              <div className="dn-gating">
                <b>框架：</b>阻尼 regime 整轮恢复和回撤每天都守住、回撤和
                回空没威胁到它 —— GEX 保持深正、flip 保持远在现货下方、近
                strip 没印负放大器。空是一根催化交易、而没有催化；SM 回空进
                一根正 γ 本子是关于需求底的信息、不是给我们的交易信号。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 宏观尾 · 单腿利率火（10Y &gt; 4.53% 差 1bp）· HY OAS 腿差 8bp · 不 roll</span>
              <div className="dn-trade-name">
                下行 put-spread —— 不 roll：put-spread re-grow 闸是一根单腿 1bp 火、不是 OR 闸的两腿确认
              </div>
              <div className="dn-thesis">
                put-spread re-grow 闸是两腿 OR（HY OAS &gt; 2.78% OR 10Y &gt;
                4.53%）。10Y 腿在 4.54% FIRED、但差一个基点 —— 一根盯位事件、
                不是信念火 —— 而 HY OAS 腿在 2.70% 差 8bp（RISK-ON）。
                reclaim-long 利率筛（10Y &lt; 4.55%）在 4.54% 仍真、所以同一根
                4.54% 印同时在 reclaim 筛下方和 re-grow 腿上方 —— 一根刀刃、
                论证两侧都不动作。不在一根单腿 1bp 火上加新对冲、进一根阻尼
                dealer 本子、无近端负放大器。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">无仓位 · 不在单腿 1bp 火上 roll</span></div>
                <div><span className="dn-lvl-k">re-grow 触发（两腿信念）</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% 收（当前 2.70%、距闸 8bp）确认 10Y &gt; 4.53% 腿（当前 4.54%、差 1bp 火）</span></div>
                <div><span className="dn-lvl-k">reclaim-long 利率筛</span><span className="dn-lvl-v bull">10Y &lt; 4.55% 收 —— 在 4.54% 仍真（差 1bp）；等一根 BTC 内部现货需求转向</span></div>
              </div>
              <div className="dn-gating">
                <b>注意：</b>re-grow 闸是随水位下漂调整的酌情盯位、不是回测
                断点。一根对冲腿会是滚到 17JUL26 4.3DTE 或 24JUL26 11.3DTE ——
                但两根都带正 γ（+38.87M / +11.43M）、所以一根新尾拿不到放大器
                顺风。10Y 在 4.54% 的单腿火在 reclaim-long 筛的 1bp 内；在
                HY OAS 腿确认前当噪音处理。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 挤压周期 · 走完的回补 REVERSE 成一根新空建仓、印在一根离散重堆步 · 作独立信号读、无日历先验</span>
              <div className="dn-trade-name">
                挤压周期 —— 两段回补反转：SM 回空 −1,103 → −4,426 印在一根离散重堆敌对-2 步 @ 2026-07-12 07:06Z（BJ 07-12 15:06）、自 07-10 以来最深净空
              </div>
              <div className="dn-thesis">
                喂了 reclaim 的那根挤压在 07-12 作一根慢回补走完（SM −7,908 →
                −2,057 → −1,103）、而下一根离散 SM 事件不是再回补而是一根
                REVERSAL：一根重堆敌对-2 步 @
                <span className="dn-tag bear">2026-07-12 07:06Z（BJ 07-12
                15:06）</span> —— Δnet −2,820 一根线（Δlong −1,747、Δshort
                +1,073、现货 $63,801）、刚在 −3k 阈值下、但是窗内最锐的一根
                单分钟步 —— 把 SM net 从几乎平（−541 @ 2026-07-12 05:31Z /
                BJ 13:31）推到谷 −4,446 @ 2026-07-12 18:01Z / BJ 07-13
                02:01。这是一根新空建仓、不是一根回补反弹的点火：smart money
                看着地板在周线上确认、然后回头往里加空。签名把空侧盯位作
                信息重 arm、但对我们 NOT 一根空交易 —— dealer 本子正 γ、
                无放大器、所以 SM 空的靠没有结构性燃料去延伸它。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">框架状态</span><span className="dn-lvl-v">回补反转成一根新空建仓 · SM −7,908（07-09）→ −1,103（07-12）→ −4,426（今天）· 离散重堆步 @ 2026-07-12 07:06Z（BJ 07-12 15:06）Δnet −2,820</span></div>
                <div><span className="dn-lvl-k">SM 24h 带</span><span className="dn-lvl-v">峰（最不空）−541 @ 2026-07-12 05:31Z（BJ 13:31）· 谷 −4,446 @ 2026-07-12 18:01Z（BJ 07-13 02:01）· 一根离散重堆步、然后守在谷附近</span></div>
                <div><span className="dn-lvl-k">前向 gating</span><span className="dn-lvl-v">一根新 Δnet ≤ −3k 重堆延伸空盯；SM 回补往平 + 现货 CVD 把 OI 拉上是肯定的多读 —— 回空是 scout 的反信号、不是一根交易</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>一根走完的回补反转成一根新空建仓是整轮恢复
                里最干净的一根看空仓位声明 —— retail 多 / SM 空 / OI 泄、
                这道形上次见于 07-09。但一道看空仓位形进一根正 γ dealer 本子、
                配一根刚确认的地板、是一个 STAY FLAT 的理由、不是去做空：
                回空是需求底更远的信息、作独立信号读、无日历先验。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 地板在 settle 的周线收盘上 CONFIRMED · SM 往确认里回空 · 需求块 inverted · scout 递延在需求触发上 · 本子 FLAT</span>
            </h2>

            <p>
              07-12 那张决策条件里：周线收盘 settle 地板条件
              <em>触发</em>并落到 CONSTRUCTIVE（07-06 周收 $63,750.00、在
              $63,075 地板上方 +1.07% —— reclaim 在决定性周线收盘上守住、
              再确认破位 dis-arm 且 settle）；回补反弹 scout
              <em>没触发</em>（价格前置仍 TRUE、但需求触发未到、现在
              inverted）；地板丢条件<em>没触发</em>（无日线收在地板下方）；
              阻尼 regime <em>守住</em>（GEX +96.6M、无近端负放大器）；新
              重堆空重 arm 条件<em>作信号触发</em>（Δnet −2,820 @ 2026-07-12
              07:06Z / BJ 15:06、SM 回空）、但 NOT 一根往正 γ 的空交易；
              利率筛<em>仍真</em>（10Y 4.54% &lt; 4.55%）。<em>谱系的中心
              结构问题 —— reclaim 是否在一根走完周线收盘上守住 —— 落到
              YES；但地板确认的同一天、smart money 往里回空、retail 挤在
              另一侧。</em>今天的条件围绕一根确认的地板、一根 inverted 的
              需求块、一根新 SM 空建仓、和一根闸在需求触发上的 scout 重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>周线收盘 settle 地板（周一 07-13）—— RESOLVED</td><td className="bull">07-06 周收 $63,750.00、在 $63,075 W-SMA200 地板上方 +1.07%（在 settled-basis $62,852 上方 +1.43%）；reclaim 在决定性周线收盘上守住</td><td>再确认破位触发 dis-arm 且 settle；消化-在-地板上方读法在一根走完周线上确认 —— 结构问题落到建设性</td></tr>
                <tr><td>回补反弹 scout（多）—— 需求触发</td><td className="bull">现货 CVD 把 OI 拉 UP AND SM 回补（不是加空）AND 一根 1h/4h 重夺 D-SMA50 $64,652 / D-EMA50 $65,209 且 OI 在建</td><td>scout long 0.2R、目标 $68,667（D-EMA100）；价格前置已经 TRUE、NOT 触发 —— 需求块 inverted 成一根 SM 空建仓</td></tr>
                <tr><td>地板丢（即便周线确认后也重 arm）</td><td className="bear">1d 收 &lt; $63,075（W-SMA200）；随后一根周线收在下面再确认破位</td><td>reclaim 被交回；消化-在-地板上方读法结束、空侧盯位重 arm —— 但只在一根新鲜近端负 γ 放大器下</td></tr>
                <tr><td>阻尼 regime 完好</td><td className="bull">GEX 保持净多 γ AND 近 strip 无近端负放大器印（13JUL/17JUL/24JUL/31JUL 全正；15JUL/16JUL 可忽略）</td><td>不在地板往正 γ 里加空；往地板的 fade 是 dealer-bid（$60k −13.17M）、往 $66k 的挤压是 dealer-offered —— SM 回空没有 γ 燃料</td></tr>
                <tr><td>新重堆（空重 arm）—— 作信号 FIRED</td><td className="bear">Δnet −2,820 重堆敌对-2 @ 2026-07-12 07:06Z / BJ 15:06（Δshort &gt; 0 + Δlong &lt; 0 同一分钟）把 SM 推到 −4,426</td><td>空盯位作信息 arm、NOT 一根交易 —— 一道看空仓位形进正 γ、配一根确认的地板是一个保持平的理由；作独立信号读、无日历先验</td></tr>
                <tr><td>宏观尾 re-grow（单腿火）</td><td className="bear">10Y &gt; 4.53% 在 4.54% 差 1bp FIRED；HY OAS &gt; 2.78% 在 2.70% 仍差 8bp</td><td>不在单腿 1bp 火上 roll；等 HY OAS 腿确认再动对冲 roll</td></tr>
                <tr><td>reclaim-long 利率筛</td><td className="bull">10Y &lt; 4.55% 收 —— 在 4.54% 真（差 1bp）；等一根 BTC 内部现货需求转向</td><td>独立筛真；需要需求触发才能转成 scout long</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是
              <span className="dn-signal">
                新 SM 空建仓（−1,103 → −4,426）是否压一根 1d 收在 $63,075
                地板下方、把刚确认的 reclaim 交回、还是现货 CVD 累积
                （+5,639 跨 24h、泄进一根缩的 OI、同时 SM 加空）终于停止泄、
                把 OI 拉上、逼 smart money 回补往平 —— 一个真的现货底重夺
                D-SMA50 $64,652 / D-EMA50 $65,209 盖。地板在周线收盘上确认了；
                问题现在是现货需求能不能压过一根专业空的靠、还是回空在 settle
                的第二天 fade 掉 reclaim
              </span>
              。在那之前本篇按写好的跑：本子 FLAT —— 不追 SM 加空的多、不在
              一根没放大器的深净多 γ 本子里加空、不在一根单腿 1bp 利率火上
              加新对冲。地板在算数的那根收盘上守住、需求块 inverted、smart
              money 回空、dealer 本子保持阻尼。下一个 24h 的对读是
              <em>耐心 —— 地板确认了、但记录在案的买方现在在卖；多是在现货
              需求压过回空时决定、不是在价格前置继续亮着时</em>。
            </p>

          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2（已过 codex 敌对式审计）
            </span>
            <b>状态：</b>v2 · 2026-07-13 00:07Z 快照 · 已过 codex 敌对式审计
            （v1 判决 BLOCK-CRITICAL）。STAGE B codex 跨模型审计 + ask-deepseek
            补充数值二审记于 audits/2026-07-13-desk-note.md；STAGE C 把每一条
            CRITICAL / MAJOR / MINOR / NIT finding 应用到<em>整份</em> EN 文件
            （不只被引的行）、并对每条跑了一遍 grep-closure（搜的 pattern、
            修前命中、修后命中）。<b>codex findings：</b>{' '}
            <b>DN-001（CRITICAL）：</b>BJ 口径的实时盘面事件时间戳被误标成
            UTC/Z 或错误再转换。搜的 pattern：<code>15:06Z</code>、
            <code>23:07Z</code>、<code>14:30Z</code>、<code>13:31Z</code>、
            <code>02:01Z</code>、<code>21:47Z</code>、<code>08:01Z</code>
            （盘面引用）、<code>BJ 23:06</code>、加短式
            <code>@ 07-13 08:01</code> funding 谷行 —— 修前 ~22 处陈旧命中
            跨 17 行；现在每根实时盘面 <code>t</code> 字段都印真 UTC-Z + BJ
            转换（重堆 2026-07-12 07:06Z / BJ 15:06、高 15:07Z / BJ 23:07、
            低 06:30Z / BJ 14:30、SM 峰 05:31Z / BJ 13:31、谷 07-12 18:01Z /
            BJ 07-13 02:01、funding 峰 13:47Z / BJ 21:47、funding 谷 07-13
            00:01Z / BJ 08:01）。修后命中：0 —— RESOLVED。
            <b>DN-002（MAJOR）：</b>周线谱系「opened $64,007.80」把 parquet
            最末 bar 收盘当成周线开盘。Pattern <code>opened $64,007.80</code>
            / <code>opened</code>：修前 1 处、改写为「last marked $64,007.80
            at 00:05Z」；其他 $64,007.80 引用已标为未收盘 parquet 最末 bar。
            修后命中：0 —— RESOLVED。<b>DN-003（MAJOR）：</b>「stayed
            triple-digit positive」高估了 GEX（+96.6M、sub-triple-digit
            millions）。Pattern <code>triple-digit</code>：修前 1 处、改为
            「stayed deeply positive」。修后命中：0 —— RESOLVED。
            <b>DN-004（MINOR）：</b>Put/Call OI 括注分子分母写反。Pattern
            <code>232,618 call OI / 126,973 put OI</code>：修前 1 处、修为
            「126,973 put OI / 232,618 call OI」。修后命中：0 —— RESOLVED。
            <b>DN-005（MINOR）：</b>精确窗 caveat 把效应低估为「a few BTC」。
            Pattern <code>a few BTC</code>：修前 1 处、量化为「tens of BTC
            （4h CVD +251 → +293、1h −98 → −144）」。修后命中：0 ——
            RESOLVED。<b>DN-006（NIT）：</b>$64k 墙被称「support just
            overhead」、而 live 现货 $64,022.87 在 $64k 上方。Pattern
            <code>support just overhead</code>：修前 1 处、改为「support just
            below live spot」。修后命中：0 —— RESOLVED。
            <b>ask-deepseek 裁定：</b><b>#3（CRITICAL）：</b>SM cut fraction
            —— 重算 |−4,426 − (−1,103)| = 3,323（不是 3,324）、3,323 / 1,103
            = 301.3%（不是 301.6%）。Pattern <code>301.6%</code> /
            <code>3,324</code>：修前 4 处、全部修为 301.3% / −3,323；「≈ 4.0×
            / nearly quadrupled」表述保留（4,426 / 1,103 = 4.01×、水位比、
            与 301.3% 变化一致）。修后命中：0 —— RESOLVED。
            <b>#7（MAJOR）：</b>OI 24h 变化 —— 101,345 − 100,652 = 693、不是
            692。Pattern <code>692</code>：修前 5 处、全部修为 −693（−0.68%
            取整不变）。修后命中：0 —— RESOLVED。<b>#5（CRITICAL、裁定为
            NOT-A-DEFECT）：</b>by-expiry GEX strip 合计 ~+107.59M 对 +96.6M
            aggregate。codex（主审、拥有发布闸）在它的 Open Issues 里检视了
            同一处差异、没对草稿标记、因为源 GEX 面板本身非可加、且本篇不
            主张 strip 重建 aggregate；未应用编辑、按 ask-deepseek 是补充
            重算、不是审计员的规则。Grep-closure 在 promote 前对每个 CRITICAL
            和 MAJOR pattern 都完成、ZERO 陈旧命中。快照 provenance 与存档
            路径（snapshots/2026-07-13-0007/）记于上方数据来源条带。
            <b>已过 codex 敌对式审计。</b>
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体
            情况个性化。数字反映单一原子快照（2026-07-13 00:07Z、盘面行
            pin t=&ldquo;07-13 08:07&rdquo; BJ）、provenance 在数据来源条带中
            按节披露；宏观 Tier-1 面板渲染 2026-07-12 22:16Z（比快照早约
            1.85h）、部分输入明确陈旧或待定并已标注。水位、规模与条件是
            交易台流程的示例、不是长期推荐。过去的相关性、γ 与仓位模式不
            绑定未来盘面。衍生品有全损风险、加杠杆下损失可超过保证金。
            <em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                地板在收盘周线上确认了 —— smart money 却回头加空。level 守住、
                买方没出现。scout 的闸是需求底、不是价格前置条件。耐心。
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
            v2 · 2026-07-13 00:07Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
