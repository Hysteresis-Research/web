import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-08-22 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-08-22',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-08-22' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260822() {
  await requireViewer('/zh/desk/2026-08-22');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-08-22 · v2</span>
          <span>内部 · 仅供讨论 · v2 · 已过 codex 敌对式审计</span>
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
              BTC · 现货
              <span className="dn-big">$77,982</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+5.79%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              数据清单 · 原子快照 2026-08-22 00:39Z（tape 锚 00:39Z；session
              约 00:38Z）· 滚动源存档于 /opt/desk-note/snapshots/2026-08-22-0038/
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape（现货 / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-08-22 00:39Z tape 锚</td>
                  <td className="dn-flag">
                    新鲜 · 1 分钟 · 锚行 <code>t = &ldquo;08-22 08:39&rdquo;</code>
                    （<code>t</code> 字段是 BJ-local UTC+8、所以 BJ 08:39 = 00:39Z
                    锚）· 与 00:38Z session 起点对得上 ·{' '}
                    <b>窗口按解析时间戳选、闭区间 [锚 − 时长, 锚]</b> —— 1h / 4h /
                    24h 各 61 / 241 / 1,441 行、72h 4,321 行、分别正好跨
                    60m / 4h / 24h00m / 72h00m（v1 草稿用的位置切片各多一行、
                    所以它标的&ldquo;24h&rdquo;其实是 24h01m、&ldquo;72h&rdquo;
                    是 72h02m；下面每一个传导数字都按精确时间戳窗重算过）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-08-22 00:31Z 扫描（BJ 08:31）</td>
                  <td className="dn-flag">
                    比 tape 锚约陈旧 8 分钟 · 每根 TF 都是未收盘 bar ·
                    文件自己的现货 $77,975 vs tape $77,981.99（−0.01%）·
                    存档于 snapshots/2026-08-22-0038/
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-08-22 00:00Z 快照 · 1,070 合约</td>
                  <td className="dn-flag">
                    比 tape 锚约陈旧 39 分钟 · 文件的 Deribit idx 参照 $78,578
                    vs live 现货 $77,981.99（live 比文件自己的参照 −0.76%
                    LOW —— 下面每处两个参照都披露）·{' '}
                    <b>Total-GEX 砖读 +247.5M、与它自己的 by-expiry strip
                    （结到 +249.91M）内部不自洽；备忘用那根结账基、记作
                    ≈+249.90M</b> · <b>provenance caveat：</b>
                    <code>gex_summary.json</code>{' '}
                    <b>没有拷进快照目录</b> —— 它的 <code>net_gex</code> 是
                    00:00:48Z live 读（+249,898,548、与存档 strip 对到四舍五入
                    的 0.01M）、到 01:00Z 已经滚到 +250,357,214、所以
                    <b>那个精确 JSON 数字和它的 <code>top_neg</code> 都是
                    NON-PINNED、从本次存档不可复现</b>；只有存档 HTML 的
                    by-expiry strip 是钉住的、下面每一个 GEX 数字都坐在它上面 ·
                    22AUG26 0.3DTE +7.68M 今日 08:00Z 结算、比本快照晚约 7.4h ·
                    btc_gex.html 存档于 snapshots/2026-08-22-0038/
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-08-22 00:00Z
                  </td>
                  <td className="dn-flag">
                    约 39 分钟滞后 · 7d 1h bar · 22 资产 · 167 行 —— 167 行的
                    相关是小样本、当 regime 质感读、不是带置信区间的估计
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-08-21 22:15Z 渲染</td>
                  <td className="dn-flag">
                    约 2.4h 渲染滞后 · 一根 FRESH 读（周五 08-21 的美国日频印
                    已经出来）· <b>MOVE 回来了</b> —— 73.4、上一段谱系连续多日
                    抓取失败之后 · NFCI 周频 −0.559 · Tier-3 月频行陈旧 81d ·
                    存档于 snapshots/2026-08-22-0038/
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日线 / 周线 MA 矩阵 + RV</td>
                  <td className="dn-v-cell">parquet 最后 bar 2026-08-22 00:06Z · 收 $77,950.10</td>
                  <td className="dn-flag">
                    比 tape 锚约陈旧 33 分钟 · 8 个年度文件全载（2019–2026、
                    364 根周 bar）、所以含 W-SMA150 / W-SMA200 的完整周阶梯本
                    session 可算 · offset 对 live 现货 $77,981.99 重算
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W 周期地板盯位</td>
                  <td className="dn-v-cell">
                    <b>weekly_200sma.json ABSENT</b> · 退路：
                    ma200w_trap_watch_state.json（recomputed 2026-08-17 00:11Z）
                    + 交易台自 parquet 重算
                  </td>
                  <td className="dn-flag">
                    runbook 的 200W-watch JSON 本 session 不在盘上 —— 不从它
                    引用任何 <code>ratio_pctile</code> / <code>last_event</code>{' '}
                    字段。trap-watch state 文件供完成周事实（08-16 收
                    $62,876.00、sma200 $63,978.83、<code>consecutive_above: 0</code>、
                    <code>reclaim_failed_week: 2026-08-16</code>）—— 但{' '}
                    <b>它同样没有拷进快照目录、因此 NON-PINNED</b>；起草后重读
                    过一次、payload 未变（<code>recomputed_at</code>{' '}
                    2026-08-17T00:11:08Z、md5 <code>1c3b2a02…</code>）、所以引用
                    的字段是稳的、但按 live 读而非存档披露。下面的下-地板频率是
                    交易台自 parquet 周序列的重算、跨{' '}
                    <b>164 根有非 NaN W-SMA200 的完成周收</b>（第 165 根非 NaN
                    观测是还没收的 08-23 bar、单独摆开）、按此标注、不是从文件读
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED 月频 · IRLTLT01JPM156N · 2.67%</td>
                  <td className="dn-flag">陈旧 · 月频 · 陈旧 81d · 勿倚</td>
                </tr>
                <tr>
                  <td className="dn-s">
                    NTT pivots、max-pain、strike 级 IV 面、BTC/NQ ratio
                  </td>
                  <td className="dn-v-cell">本切片 NOT LOADED</td>
                  <td className="dn-flag">
                    btc_ntt_analysis.html 是 JS 渲染、抽不出来；BTC/NQ ratio
                    人造物这里同样没解析 —— 触及这些的每一句都仅框架。下面
                    BTC-vs-NQ 的读只用相关文件印的两个 7d 百分比、不是 ratio 序列
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dn-meta">
            <div>
              <span className="dn-k">funding · 8h 年化</span>
              <span className="dn-v bear">+10.95%（PINNED AT CAP）</span>
              <span className="dn-src">live · raw 0.01 ×1095 = +10.95% 年化 —— RE-PINNED 回 Binance 封顶、进快照已经在上面挂了 <b>952 根连续分钟</b>（上次断在 08-21 08:47Z / BJ 16:47、+10.77%）· 1h 前 +10.95%、4h 前 +10.95%、24h 前 +6.20% · 24h 均值 +9.88%、范围 +4.70% / +10.95% · 0 / 1,441 采样行转负、952 / 1,441（66.1%）在封顶 · 72h 均值 +8.34%、2,181 / 4,321 在封顶 · 全部按精确时间戳窗（24h = 1,441 行跨 24h00m；72h = 4,321 行跨 72h00m）</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">+6.20% → +10.95%（+4.75pt、回到封顶上）</span>
              <span className="dn-src">08-19 备忘的镜像 —— 那篇记的是 funding COOLING 到 +1.71% · 套息三根 session 从被抽干走到封顶（08-19 +1.71% → 08-20 +10.57% → 08-21 +5.44% → 现在 +10.95%）· 在一根其余都在去杠杆的 tape 上、这是唯一一条毫不含糊发泡的线</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bull">−2.01%（−2,164.8 BTC）</span>
              <span className="dn-src">live · 105,715.6 BTC · OI 穿过一根 +5.79% 的阳日 CONTRACTED —— 且距 3d 峰 111,717.6 @ 08-19 15:14Z（BJ 23:14）已 −6,002.0 BTC（−5.37%）· 整条 $64.7k → $78.0k 腿是在一个 SHRINKING 的持仓基上建的：一记逼空 / 现货领的重定价、不是加杠杆的多头堆</span>
            </div>
            <div>
              <span className="dn-k">retail（mkt）多/空</span>
              <span className="dn-v bull">50.88 / 49.12</span>
              <span className="dn-src">live_db <code>mkt_long_pct</code> · 24h 均值 50.72%、范围 48.71 / 53.20 · 72h 高 61.52% · retail 在<b>上一篇的参照点 BJ 08:00 08-16 / UTC 2026-08-16 00:00Z、现货 $63,086 时是 66.87% 多</b> —— <b>那是谱系参照、NOT 那根精确低点</b>；本轮真正的 tape 低是 UTC 2026-08-16 22:41Z（BJ 06:41 08-17）的 $62,716、那里 retail 读 <b>68.64% 多</b> · 两种读法给的形状一样：人群在底部约 67–69% 多、在 $77,982 是 50.88% —— 这波 retail 是卖出去的、不是追进来的、这个口径下多头一侧在这个价位 NOT 拥挤</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">+15.99k 表观 · <b>NOT CERTIFIABLE</b></span>
              <span className="dn-src">live · long 25.67k − short 9.67k · <b>从净空翻净多的整根符号翻转是一分钟</b>：08-20 07:06Z（BJ 15:06）净从 −22,527.1 跳到 +16,825.8、Δnet +39,352.9 = 前净的 174.7%、同一分钟里 <code>long_traders</code> 587 → 1,388、<code>short_traders</code> 978 → 687 —— 一根被跟踪 cohort 的 ROSTER 重同步、不是一笔交易 · 第二根名册扩张印在 08-21 06:21Z（BJ 14:21、Δnet +10,671.2 = 前净 119.5%、<code>long_traders</code> 1,336 → 2,497）</span>
            </div>
            <div>
              <span className="dn-k">SM · 干净窗 Δ</span>
              <span className="dn-v bear">−2,116.1 BTC（−11.68%）—— 朝强势 TRIMMING</span>
              <span className="dn-src">唯一无伪影的窗：08-21 08:00Z → 08-22 00:39Z（16h39m、1,000 行、最大单分钟 |Δnet| = 808.4 @ 08-21 14:26Z —— 无名册跳）· 净 +18,109.9 → +15,993.8、同期现货从 $76,284.46 跑到 $77,981.99（+2.23%）· 表观 24h Δnet +3,293.2（前净 12,700.59 的 25.93%）跨了 08-21 那根名册扩张、NOT 一个干净读 · 本子：long_entry $71,901.46（现货 +8.46%）、short_entry $74,636.55（现货 +4.48%、空方水下）</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">49.1% / 43.25%</span>
              <span className="dn-src">GEX 跨 1,070 合约的链级中位 IV —— <b>一个链上中位数、NOT 一个可交易价差</b> · IV 比 30D close-to-close RV 43.25% 高 +5.85pt、但比 7D RV 63.54% 低 −14.44pt（90D RV 40.53%）· 链已经把 vol 从 $63k regime 的约 41% 印重定价上来、但仍低于过去一周实际交出来的</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+23.22%（上方）</span>
              <span className="dn-src">flip $63,288 · 现货在它<b>上方</b> +23.22%（77,981.99 / 63,287.51 − 1 = 23.219%）/ 按 GEX 文件自己的 Deribit idx $78,578 是上方 +24.16%（78,578 / 63,287.51 − 1 = 24.161%；文件砖印&ldquo;+24.2%&rdquo;）—— <b>两个参照都正、同号、砖是把现货一侧四舍五入</b> · <b>做空真正要看的是它的倒数：flip 坐在现货下方 18.84%（63,287.51 / 77,981.99 − 1 = −18.843%）、所以要够到它的是一记 18.84% 的跌、不是 23%</b> · aggregate GEX 结账基 +249.90M（08-19 是 +128.92M —— 夹钳大致 DOUBLED）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                08-16 那记 200W 周期地板的周破位<b>在轨道上</b>要成为一记
                一周假破 —— 它还不是 —— 而整段反转交易台是平的
              </span>。08-16 W-SUN bar 结算{' '}
              <span className="dn-tag bear">$62,876.00</span>、对 W-SMA200{' '}
              <span className="dn-tag">$63,978.83</span> 低 1.72%、结束了
              07-05 到 08-09 那段六周上-地板连收。五根 session 之后现货印{' '}
              <span className="dn-tag bull">$77,981.99</span>、未收盘周 bar
              （08-23 23:59Z 结算、仍 OPEN）走在{' '}
              <span className="dn-tag bull">$64,270.78 200W 上方 +21.28%</span>{' '}
              —— <span className="dn-em">一根没结算的 bar、所以假破读是
              in-progress、条件在 08-23 那根收盘要守在 W-SMA200 上方、不是
              已成事实</span>。日阶梯是{' '}
              <span className="dn-tag">08-17 +2.59% · 08-18 +0.29% · 08-19 +7.14% ·
              08-20 +5.32% · 08-21 +7.27%</span>、五天把 tape 从 $62,876 带到{' '}
              <span className="dn-tag bull">$79,555.50</span> 高。08-19 备忘按
              一根两腿触发把本子按在 FLAT：第一腿（顶重夺）火了、第二腿
              （一根可认证的 smart-money 多）没有。那第二腿{' '}
              <span className="dn-em">到现在还没认证</span> —— 而价格没等它就走了。{' '}
              <span className="dn-signal">
                本篇先记这一记错过、再做分析
              </span>：那根递延的 0.2R scout 挂 ~$64,632、止损 $63,301
              （风险 $1,331）、现在会是{' '}
              <span className="dn-tag bull">+$13,349.99 = 10.03R 毛、按标称 0.2R
              规模 ≈2.01R</span>；它的两个目标 $66,343 和 $66,391 都在
              2026-08-19 15:05Z 被点到、大约是那篇发出后十四个半小时。把交易台
              挡在 $63k 磨盘外面的那条认证规则、也是把它挡在这记 +20.66% 外面的
              同一条规则 —— 这条规则的账现在付清了。
            </p>

            <p>
              锚上的 tape 长这样：BTC live{' '}
              <span className="dn-tag">$77,981.99</span>、24h{' '}
              <span className="dn-tag bull">+5.79%</span>、在一根{' '}
              <span className="dn-tag">$79,303.00 / $73,554.01</span> 的 24h
              区间内（高 @ 08-21 09:00Z / BJ 17:00、低 @ 08-21 00:42Z /
              BJ 08:42）。08-21 那根日 bar 是大的 —— O $72,998.80、H{' '}
              <span className="dn-tag bull">$79,555.50</span>、L $72,992.40、C{' '}
              <span className="dn-tag bull">$78,309.10</span>、+7.27% —— 未收盘的
              08-22 bar 是一根{' '}
              <span className="dn-tag">−0.46%</span> 的内包日（O $78,309.10、
              H $78,486.60、L $77,868.30、parquet 末 bar 00:06Z 收 $77,950.10）。{' '}
              <span className="dn-signal">
                现货现在坐在整条日 MA 阶梯上方、十根全在下面
              </span>、08-19 那张 D-EMA50 还在当顶、从下方被试的矩阵被完整翻转。
              周阶梯上 tape 刚清掉{' '}
              <span className="dn-tag bull">W-SMA150 $77,447.76（+0.69%）</span> 和{' '}
              <span className="dn-tag bull">W-EMA50 $77,257.48（+0.94%）</span>、
              紧贴着卡在{' '}
              <span className="dn-tag bear">W-EMA100 $78,451.51（−0.60%）</span> 和{' '}
              <span className="dn-tag bear">D-EMA400 $78,235.27（−0.32%）</span>{' '}
              下面 —— 一道 0.6% 之内的双层头顶盖。{' '}
              <span className="dn-em">
                重夺在结构上巨大、在战术上恰好停在它遇到的第一道真阻力前。
              </span>
            </p>

            <h2 className="dn-sec">
              仓位{' '}
              <span className="dn-roman">I · live tape · OI 穿过一根 +5.79% 阳日 CONTRACTED −2,164.8 BTC（−2.01%）、距 3d 峰 −5.37% —— 整条 $64.7k → $78.0k 腿建在 SHRINKING 基上 · funding RE-PINNED 到 +10.95% 封顶、挂了 952 根连续分钟（24h 均值 +9.88%、0/1,441 负、952/1,441 在封顶）· retail 50.88%、NOT 拥挤（上一篇 08-16 00:00Z 参照 66.87%、真低点 08-16 22:41Z 68.64%）· SM 表观 +15.99k 净多、但符号翻转是一根重同步分钟（08-20 07:06Z、Δnet +39,352.9 = 前净 174.7%、名册 587→1,388 多）—— NOT 可认证；唯一干净的 16h39m 窗里 SM 朝一记 +2.23% 的推 TRIMMED −2,116.1（−11.68%）</span>
            </h2>

            <p>
              <span className="dn-signal">
                这张 tape 上最重要的数字是那个往下走的
              </span>。持仓量{' '}
              <span className="dn-tag">105,715.6 BTC</span>、24h 掉{' '}
              <span className="dn-tag bull">−2,164.8 BTC（−2.01%）</span>、
              同窗价格涨 5.79%；距 08-19 15:14Z（BJ 23:14）——
              也就是突破启动那一小时 —— 的 3d 峰 111,717.6 已经{' '}
              <span className="dn-tag bull">−6,002.0 BTC（−5.37%）</span>。
              这种量级的移动跑在一个收缩的 OI 基上、是逼空加现货重定价、
              不是加杠杆的多头堆 —— 给这波行情出钱的仓位是被平掉的、不是被开出来的。
              这是这张 tape 能产出的最高品质版本的上涨、也是本篇里最强的一条多头论据。
              它同时给同一个机制还剩多少燃料设了上限：一本空头本子只能被逼一次。
            </p>

            <p>
              对着这一条、套息整个走反了。{' '}
              <span className="dn-signal">
                funding 重新钉回 Binance 封顶并且待在那里
              </span>：live{' '}
              <span className="dn-tag bear">+10.95% 年化</span>（raw 0.01 × 1095）、
              进快照已经在封顶上挂了{' '}
              <span className="dn-tag bear">952 根连续分钟</span>、上次断在
              08-21 08:47Z（BJ 16:47）的 +10.77%。整个 24h 窗均值{' '}
              <span className="dn-tag bear">+9.88% 年化</span>、范围{' '}
              <span className="dn-tag">+4.70% / +10.95%</span>、{' '}
              <span className="dn-tag">0 / 1,441</span> 采样行转负、{' '}
              <span className="dn-tag bear">952 / 1,441（66.1%）</span> 坐在封顶上；
              72h 均值 +8.34%、2,181 / 4,321 行在封顶。把这个摆在 08-19 备忘旁边
              —— 那篇记的是 funding{' '}
              <span className="dn-em">冷到 +1.71%</span>、封顶行为零 —— 三根
              session 的路径就是{' '}
              <span className="dn-tag">+1.71% → +10.57% → +5.44% → +10.95%</span>。
              perp 本子在按场子允许的最大值付钱做多。{' '}
              <span className="dn-em">
                OI 在收缩、同时 funding 钉在封顶、是一个很具体的形状：仓位更少、
                但剩下的这些是一边倒的、而且很贵。在一张其余都干净的 tape 上、
                这是最发泡的一条线。
              </span>
            </p>

            <p>
              retail 没追。{' '}
              <span className="dn-tag">mkt_long_pct 50.88%</span> 在锚上
              （24h 均值 50.72%、范围 48.71 / 53.20；72h 高 61.52%）—— 谱系带着的
              参照点是 retail 在{' '}
              <span className="dn-tag bear">BJ 08:00 08-16 / UTC 2026-08-16 00:00Z、
              现货 $63,086 时 66.87% 多</span>。{' '}
              <span className="dn-em">
                那是上一篇的参照行、不是那根精确低点
              </span>{' '}
              —— 本轮真正的 tape 低来得更晚、在{' '}
              <span className="dn-tag bear">2026-08-16 22:41Z（BJ 06:41 08-17）的
              $62,716、那里 retail 读 68.64% 多</span>。这处更正把数字往对论据
              有利的方向挪：人群在底部是最多的、在高 24% 的地方大致中性。别的先
              不论、这个口径下多头一侧在这些价位不拥挤、而那个经典的派发信号
              —— retail 往高位挤 —— 是缺席的。开窗流一致：big-print 净{' '}
              <span className="dn-tag bull">+1,513.5 BTC</span> 24h 跨 615 印
              （72h +5,571.3）、taker 净{' '}
              <span className="dn-tag bull">+825.8</span>。流里唯一一处恶化是
              场子之间的劈叉：{' '}
              <span className="dn-signal">
                现货 CVD 已经转负、而期货 CVD 还在买
              </span>{' '}
              —— 72h 现货 CVD 是{' '}
              <span className="dn-tag bull">+5,581.3</span>、期货 CVD{' '}
              <span className="dn-tag bull">+6,242.3</span>、但最近 24h 现货 CVD 是{' '}
              <span className="dn-tag bear">−117.2</span>、对期货 CVD{' '}
              <span className="dn-tag">+814.1</span>。推动这条腿前三分之二的
              现货买盘停了；最近一天把 tape 撑住的是期货。这是一个更低品质的
              配比、而且正是 funding 已经在喊的那记轮动。锚上 1 分钟 aggressor
              skew 是 <span className="dn-tag">−0.3</span>（24h 均值 +1.87、范围
              −54.9 / +46.8）、perp 对现货交易一记小{' '}
              <span className="dn-tag">−$16.58</span> 贴水（24h 均值 −$25.28）
              —— 两个方向都没有 basis 压力。
            </p>

            <p>
              <span className="dn-signal">
                smart-money tape 读净多、而交易台没法认证它
              </span>。按印的、SM 净是{' '}
              <span className="dn-tag">+15,993.77 BTC</span>（long 25,668.68、
              short 9,674.91）、对二十四小时前的 12,700.59 —— 一个 Δnet{' '}
              <span className="dn-tag">+3,293.2</span>、按交易台自己的公式是{' '}
              <span className="dn-tag">|Δ| / prior_net = 3,293.2 / 12,700.59 =
              25.93%</span>。两个数都过不了谱系自己的伪影测试。从深度净空穿到
              净多不是靠几小时的回补发生的；它发生在{' '}
              <span className="dn-tag bear">08-20 07:06Z（BJ 15:06）的一分钟</span>、
              净从{' '}
              <span className="dn-tag">−22,527.1 跳到 +16,825.8</span> —— 一个{' '}
              <span className="dn-tag bear">+39,352.9 的 Δnet、前净的 174.7%</span>{' '}
              —— 同一根印里 <code>long_traders</code> 走 587 → 1,388（+801）、{' '}
              <code>short_traders</code> 走 978 → 687（−291）、{' '}
              <code>long_entry</code> 从 $69,688.71 跳到 $67,364.93、{' '}
              <code>short_entry</code> 从 $65,873.62 跳到 $69,165.50。
              交易者计数不会因为有人下了单就翻倍、平均入场价也不会不连续地
              重新落基；那是一根{' '}
              <span className="dn-em">被跟踪 cohort 的名册重同步</span>。第二根
              印在{' '}
              <span className="dn-tag bear">08-21 06:21Z（BJ 14:21）</span>：净
              +8,927.5 → +19,598.8、Δnet +10,671.2 = 前净 119.5%、{' '}
              <code>long_traders</code> 1,336 → 2,497。后果精确而且限死：{' '}
              <span className="dn-em">你不能跨这道不连续做差。</span>
              那 +15,994 的净多量的是一个跟之前那 −23,000 不同的被跟踪宇宙、
              所以符号翻转和那记 25.93% 的 24h 加仓、都不是任何一笔交易能倚的证据。
            </p>

            <p>
              SM feed <em>能</em>支撑的是那个无伪影的窗。从{' '}
              <span className="dn-tag">08-21 08:00Z（BJ 16:00）到 00:39Z 锚</span>{' '}
              —— 16h39m、1,000 行、最大单分钟 |Δnet| 才 808.4 在 08-21 14:26Z、
              无名册跳 —— SM 净走{' '}
              <span className="dn-tag bear">+18,109.9 → +15,993.8、一记
              −2,116.1 BTC（−11.68%）的减仓</span>、同期现货从{' '}
              <span className="dn-tag">$76,284.46 跑到 $77,981.99（+2.23%）</span>。{' '}
              <span className="dn-em">
                在唯一一个干净的读上、被跟踪的本子是在朝强势派发、不是在吸筹。
              </span>{' '}
              成分也跟一个赚得很顺、正在落一点袋的 cohort 对得上：{' '}
              <code>long_entry</code>{' '}
              <span className="dn-tag">$71,901.46</span>、现货在它上方 +8.46%；{' '}
              <code>short_entry</code>{' '}
              <span className="dn-tag">$74,636.55</span>、现货在它上方 +4.48%
              （空方水下而且还在那里 —— 878 个空交易者对 2,311 个多、
              <code>long_pct</code> 86.06 / <code>short_pct</code> 16.51）。
              一本在 $78k 仍有人、仍水下的空头本子是还没烧掉的逼空燃料；
              一本净多在新高上减 11.68% 不是一个确认信号。两个都成立、
              而且指的方向相反。
            </p>

            <h2 className="dn-sec">
              盘面{' '}
              <span className="dn-roman">II · MTF 翻成 8 长 / 0 空 / 2 中（08-16 备忘读的是 1 长 / 7 空 / 2 中；08-19 备忘 4 / 1 / 5）—— 每一条 short 归类都清了、但 1d 和 1w 只清到 NEUTRAL、不是长 · 净读多周期共振 / trend-follow · BUT 中段 frame 在逼空极值 —— RSI 4h 89.8 / 8h 89.5 / 12h 87.9 / 1d 84.3 —— 且 4h、8h、12h 同时挂 ⚡TD9 SELL · 反转 regime FLIPPED 回 5/9 JT&lt;0（均值回归受青睐、trend-follow 需谨慎）· 15m（2 bar）和 30m（1 bar）新鲜水上死叉 · 3d 才刚进云、1w 仍在云下、阻力 $85.9k</span>
            </h2>

            <p>
              <span className="dn-signal">
                每一条 short 归类都清了 —— 但不是每一条都清成了长
              </span>。00:31Z 扫描读{' '}
              <span className="dn-tag bull">8 长 / 0 空 / 2 中</span>、跨十个
              周期、净读是多周期共振偏多、顺势 —— 对着 08-16 备忘记的{' '}
              <span className="dn-tag bear">1 长 / 7 空 / 2 中</span> 和 08-19
              备忘记的 4 / 1 / 5。逐 frame 的账比总数更重要：08-16 扫描里那
              七条空、五条（1h、4h、8h、12h、3d）现在读长、{' '}
              <span className="dn-tag">两条 —— 1d 和 1w —— 读的是 NEUTRAL、
              不是长</span>；当时那两条中（15m、30m）现在是长、1M 从头到尾是长。{' '}
              <span className="dn-em">
                所以正确的说法是盘上已经没有任何一条读空、而不是每一条空都
                变成了多。
              </span>{' '}
              短（15m–4h）、中（8h–1d）、长（3d–1M）三组都读偏多。慢 frame
              最后转、而且正在转：水下金叉印在 8h（15 根 bar 前）、12h（9 根）、
              1d（4 根）和 1w（4 根）。现货在 15m、30m、1h、4h、8h、12h、1d
              和 1M 的 Ichimoku 云上方。
            </p>

            <p>
              caveat 落在一个五天 24% 移动该落的地方。{' '}
              <span className="dn-signal">
                中段 frame 在逼空极值、同时挂着三根 TD9 SELL
              </span>：RSI(14) 读{' '}
              <span className="dn-tag bear">4h 89.8 · 8h 89.5 · 12h 87.9 · 1d
              84.3</span>、且{' '}
              <span className="dn-tag bear">⚡TD9 SELL</span> setup 在 4h、8h、
              12h 于 $77,985 / $77,966 / $77,966 完成（扫描标了末根 bar 可能
              未收）。反转 regime 翻回{' '}
              <span className="dn-tag bear">5/9 周期反转体制（JT&lt;0）——
              均值回归 / 弹升偏强、顺势需谨慎</span>、正是 08-16 备忘带进那记
              破位的 JT≥0 顺势续势体制的反面。快 frame 已经滚了：一根{' '}
              <span className="dn-tag bear">15m 水上死叉、2 根 bar 前（08-22
              00:00、DIF +259.5）</span> 和一根{' '}
              <span className="dn-tag bear">30m 水上死叉、1 根 bar 前（DIF
              +462.5）</span>、1h 是 10 根 bar 前下穿的；15m RSI 已经在价格还
              撑着的时候流回 51.8、30m 到 57.6。背离结构混杂而且薄：1h 一根
              顶背离、15m / 8h / 1w 三根底背离。
            </p>

            <p>
              结构 frame 是对超买那一侧诚实的配重。{' '}
              <span className="dn-em">
                最慢的几个周期什么都还没确认
              </span>：3d 才刚进它的云（kumo $70.8k–$78.5k、&ldquo;刚穿&rdquo;）、{' '}
              <span className="dn-tag bear">1w 仍在云下第 29 根 bar、云底阻力
              $85.9k</span>。所以一张在日线上看着垂直的 tape、在周线上仍在
              十月见顶以来一直压着它的头顶供给里面 —— 现货距{' '}
              <span className="dn-tag bear">$126,208.50 ATH（2025-10-06）
              −38.21%</span>、即便已经从 2026 年低点{' '}
              <span className="dn-tag bull">$57,758.60（2026-07-01）跑了
              +35.01%</span>。1M frame 读长、在云上第 30 根 bar、RSI 50.8 ——
              这个视野上无压力也无信息。
            </p>

            <p>
              MA 矩阵、对 live 现货 $77,981.99 重算、parquet 锚在 00:06Z bar
              （收 $77,950.10）、在水位上讲同一件事。{' '}
              <span className="dn-signal">日线上每一级都在 tape 下面</span>{' '}
              —— D-SMA20{' '}
              <span className="dn-tag bull">$66,116.10（+17.95%）</span>、D-SMA50{' '}
              <span className="dn-tag bull">$64,900.94（+20.16%）</span>、D-SMA100{' '}
              <span className="dn-tag bull">$66,151.39（+17.88%）</span>、D-SMA150{' '}
              <span className="dn-tag bull">$69,008.79（+13.00%）</span>、D-SMA200{' '}
              <span className="dn-tag bull">$68,990.89（+13.03%）</span>、D-EMA20{' '}
              <span className="dn-tag bull">$67,582.74（+15.39%）</span>、D-EMA50{' '}
              <span className="dn-tag bull">$65,891.78（+18.35%）</span>、D-EMA100{' '}
              <span className="dn-tag bull">$66,987.06（+16.41%）</span>、D-EMA150{' '}
              <span className="dn-tag bull">$69,192.49（+12.70%）</span>、D-EMA200{' '}
              <span className="dn-tag bull">$71,652.59（+8.83%）</span>。08-19
              备忘当顶带着的那根 D-EMA50 $64,346 已经随 tape 抬上来了：
              今天重算的 D-EMA50 是{' '}
              <span className="dn-tag bull">$65,891.78</span>、现货在这条水位
              上方 18.35%（对旧的那个 $64,346 印现货是上方 21.19% —— 两条不同
              的水位、隔一周、备忘把它们分开摆）。{' '}
              <span className="dn-signal">活还在周线上</span> —— W-SMA200{' '}
              <span className="dn-tag bull">$64,270.78（+21.33%）</span>、W-EMA200{' '}
              <span className="dn-tag bull">$68,611.93（+13.66%）</span>、W-SMA20{' '}
              <span className="dn-tag bull">$69,521.12（+12.17%）</span>、W-EMA20{' '}
              <span className="dn-tag bull">$69,312.15（+12.51%）</span>、W-EMA150{' '}
              <span className="dn-tag bull">$73,887.57（+5.54%）</span>、W-EMA50{' '}
              <span className="dn-tag bull">$77,257.48（+0.94%）</span>、W-SMA150{' '}
              <span className="dn-tag bull">$77,447.76（+0.69%）</span> ——
              全部收复 —— 但{' '}
              <span className="dn-tag bear">W-EMA100 $78,451.51（−0.60%）</span>、{' '}
              <span className="dn-tag bear">W-SMA50 $81,789.33（−4.66%）</span> 和{' '}
              <span className="dn-tag bear">W-SMA100 $88,843.52（−12.23%）</span>{' '}
              没有。{' '}
              <span className="dn-em">
                现货楔在一条约 1.5% 宽的带里：下面是它刚清掉的 W-SMA150 /
                W-EMA50 台、上面是它没清掉的 W-EMA100 / D-EMA400 盖 ——
                $77,257–$77,448 在下、$78,235–$78,452 在上。交易台真正盯的是
                这条带、不是任何一个整数关口。
              </span>{' '}
              30D close-to-close 已实现波动是{' '}
              <span className="dn-tag">43.25%</span>、7D{' '}
              <span className="dn-tag bear">63.54%</span>、90D 40.53%。
            </p>

            <h2 className="dn-sec">
              盘口本子{' '}
              <span className="dn-roman">III · aggregate γ 按结账基大致 DOUBLED 到 +249.90M（08-19 是 +128.92M）—— 是 POST-08-16 谱系里最深的正 γ 夹钳、但 NOT 谱系最大值：同一结账基下 07-22 记 +294.6M、07-23 +283.46M、07-24 +262.1M · flip 现在 $63,288、现货在它上方 +23.22%（按文件 Deribit idx $78,578 是上方 +24.16%；flip 在现货下方 18.84%）· 前十道墙全是正的、$80,000 +41.20M 领头、$78,000 +31.41M 基本就贴在现货上 · 唯一像样的负 strike 是 $60,000 −6.36M、在 tape 下方约 23%、且大幅缓和 · 28AUG26 6.3DTE +82.92M 是单一到期里最重的 · 中位 IV 49.1% / 1,070 合约</span>
            </h2>

            <p>
              <span className="dn-signal">
                盘口本子现在是一根钉子、而 tape 一头撞进了它的正中间
              </span>。aggregate GEX 结到{' '}
              <span className="dn-tag bull">+249.90M</span> —— 存档文件的
              by-expiry strip 加总到 +249.91M、而 dashboard 的 Total-GEX 砖印
              +247.5M、跟它内部不自洽；备忘用存档的结账基、跟谱系一贯做法一致。
              （没存档的 <code>gex_summary.json</code> <code>net_gex</code> 在
              00:00:48Z live 读 +249,898,548、跟 strip 互相印证、但{' '}
              <b>它 NOT 钉在本 session 的快照里、而且到 01:00Z 已经滚到
              +250,357,214</b> —— 它只作为披露过的旁证、下面没有任何东西坐在它
              上面。）这大致是 08-19 备忘记的 +128.92M 的两倍、并且是{' '}
              <span className="dn-signal">
                08-16 地板破位以来最深的一次正 γ 读
              </span>{' '}
              —— post-08-16 序列跑 +41.82M（08-16）→ +28.06M（08-17）→
              +128.86M（08-18）→ +128.92M（08-19）→ 今天 +249.90M。{' '}
              <span className="dn-em">
                它明确不是谱系最大值：同一结账基下 07-22 带的是 +294.6M、
                07-23 +283.46M、07-24 +262.1M、都在今天之上。这道夹钳深、是按
                这一段 regime 的标准、不是按历史纪录的标准。
              </span>{' '}
              一本这么长 γ 的书按构造压已实现波动：dealer 卖强买弱来保持平。
            </p>

            <p>
              strike 图的一边倒程度是交易台在整个 $63k regime 里没见过的。{' '}
              <span className="dn-signal">
                前十道墙全是正的
              </span>：{' '}
              <span className="dn-tag bull">$80,000 +41.20M</span>（最重、
              按备忘的现货/水位约定 −2.52% —— 也就是在印上方 2.59%）、{' '}
              <span className="dn-tag bull">$78,000 +31.41M</span>（基本就在
              现货上）、{' '}
              <span className="dn-tag bull">$82,000 +20.78M</span>、{' '}
              <span className="dn-tag bull">$70,000 +18.75M</span>、{' '}
              <span className="dn-tag bull">$75,000 +13.33M</span>、{' '}
              <span className="dn-tag bull">$76,000 +12.91M</span>、{' '}
              <span className="dn-tag bull">$72,000 +11.99M</span>、{' '}
              <span className="dn-tag bull">$85,000 +11.03M</span>、{' '}
              <span className="dn-tag bull">$90,000 +10.82M</span>、{' '}
              <span className="dn-tag bull">$84,000 +10.71M</span>。整个面上最大
              的负 strike 是{' '}
              <span className="dn-tag">$60,000 −6.36M</span>、在 tape 下方约
              23%、比 08-19 备忘带的 −17.79M 和 08-16 的 −22.00M 大幅缓和。
              以前坐在市场下面那道 put 台既缩水了、也被远远甩在了后面。{' '}
              <span className="dn-em">
                机械读法是磨：$78,000 和 $80,000 在一条 2.6% 宽的带里一起带着
                +72.61M 的正 γ、所以阻力最小的路径是在两者之间被钉住、
                而不是干净地穿过 $80k 续涨。
              </span>{' '}
              Call OI 249,990 对 put OI 148,508 给出 0.59 的 put/call ——
              一条偏 call 的链、一本书在逼空之后变得这么长 γ 正是这么来的。
            </p>

            <p>
              到期阶梯把这道夹钳集中在近端。{' '}
              <span className="dn-tag">28AUG26 在 6.3 DTE 带 +82.92M</span>、
              是板上最重的单一到期、后面是{' '}
              <span className="dn-tag">25SEP26 在 34.3 DTE +77.02M</span> 和{' '}
              <span className="dn-tag">25DEC26 +33.00M</span>；前一周很小
              （22AUG26 0.3DTE +7.68M 今日 08:00Z 结算、比本快照晚约 7.4h、
              23AUG +5.72M、24AUG +2.66M、25AUG +1.25M）、然后 4SEP +16.18M、
              11SEP +4.78M、30OCT +10.14M、26MAR27 +6.89M、25JUN27 +1.67M ——
              所以 28AUG26 是<b>今天 +249.90M 的 33.18%</b>、压在六天后的一个
              日子上。{' '}
              <span className="dn-em">
                这句要说得小心、因为它是一个快照、不是一张时刻表。+82.92M 是
                28AUG26 在 2026-08-22 00:00Z 文件里、按当前 IV 量出来的贡献；
                它不是一笔保证在到期前一刻还挂在书上的量 —— 现货、IV、持仓和
                其他到期都可能先动、而且从现在到那天这道夹钳也没有义务停在
                +249.90M。能说的是有条件、有日子的那句：在没有对冲性的
                书 / 现货 / IV 变化的前提下、28AUG 结算会把当前约三分之一的
                压制拿走、让同一张 tape 在两个方向上都明显更自由。那是一个要
                盯的、有日期的结构风险、不是预测、也不是确定性。
              </span>{' '}
              说到 flip：在 $63,288、现货在它{' '}
              <span className="dn-tag bull">上方 +23.22%</span>、按文件自己的
              Deribit index 参照 $78,578 是{' '}
              <span className="dn-tag bull">上方 +24.16%</span>（文件砖印
              &ldquo;+24.2%&rdquo;）；反过来读、flip 坐在现货{' '}
              <span className="dn-tag bear">下方 18.84%</span>、这才是真正要
              够到它的跌幅。两个参照同号、它们之间的差就是文件 index 和 live
              tape 之间那 0.76% 的缝。链级中位 IV 是{' '}
              <span className="dn-tag">49.1%、跨 1,070 合约</span>、从 $63k
              regime 的约 41% 大幅上来；对 30D RV 43.25% 是 +5.85pt 溢价、
              但对过去一周实际交出来的 63.54% 是 −14.44pt 折价。{' '}
              <span className="dn-em">
                这是一个链上中位数、不是可交易价差 —— 它说的是链已经把 vol
                往上重定价了、但还没把它定到刚刚发生过的那个水平。
              </span>
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · 一根 FRESH 读（渲染 2026-08-21 22:15Z 周五；周五的美国日频印已出）· 利率 RISK-OFF 而且更 OFF 了 —— 10Y 4.69%（+4.0bp、z +1.98）、TIPS 实际 2.35%（z +1.82）· Fed 净流动性 $5.792T 在抽（z −1.22、episodic −2.45）· 信用 LOOSE（HY OAS 2.75%、z −0.74）、NFCI RISK-ON（−0.559、z −1.46）· MOVE 回来了、73.4（z +0.02、中性）· regime IDIOSYNCRATIC（mean |r| 0.219）、BTC 7d +24.34% 对 NQ −2.29% —— 一记 +26.63pt 的 LEAD、且 BTC 的头部相关是金属、不是股</span>
            </h2>

            <p>
              <span className="dn-signal">
                BTC 在一周里跑了 24%、而这一周宏观面板是变差的、不是变好的
              </span>。Tier-1 核心印 10Y 名义{' '}
              <span className="dn-tag bear">4.69%（+4.0bp、regime z +1.98、
              RISK-OFF）</span>、10Y TIPS 实际{' '}
              <span className="dn-tag bear">2.35%（0.0bp、z +1.82、RISK-OFF）</span>{' '}
              —— 实际利率在它 252 日分布的高端 —— 配 Fed 净流动性{' '}
              <span className="dn-tag bear">$5.792T、−0.004T（z −1.22、RISK-OFF、
              episodic z −2.45）</span>仍在抽。对冲的是信用和金融条件：HY OAS{' '}
              <span className="dn-tag bull">2.75%（+2.0bp、z −0.74、松）</span> 和
              芝加哥联储 NFCI{' '}
              <span className="dn-tag bull">−0.559（z −1.46、RISK-ON）</span>。
              债波回到板上、而且不出奇 ——{' '}
              <span className="dn-tag">MOVE 73.4（+0.22、z +0.02、中性）</span>、
              在上一段谱系把它当成不可用带了一周多之后、这本身就是新闻。DXY{' '}
              <span className="dn-tag">98.84（z −0.13、中性）</span>、episodic z
              −1.93；USD/CNY{' '}
              <span className="dn-tag">6.7118</span>、episodic z −2.57 ——
              美元边际松了、这是一记温和的顺风、也是唯一一条跟 tape 指同一个
              方向的宏观线。Tier-2 的 JGB 10Y 印 2.67%、regime z +2.42、会读
              EXTREME RISK-OFF、但它是{' '}
              <span className="dn-em">FRED 月频、陈旧 81 天 —— 别倚</span>。
              Tier-3 是一块没有综合分的驱动面板：黏性核心 CPI 3.48%、中位 CPI
              3.11%、10Y 盈亏平衡 2.34%（episodic z +2.38）、密歇根 1Y 4.6%
              （陈旧 81d）、WTI $86.5。
            </p>

            <p>
              跨资产文件才是本 session 宏观读真正住的地方。7d 1h regime 是{' '}
              <span className="dn-tag">IDIOSYNCRATIC、mean |r| 0.219</span>、
              跨 22 资产 167 行、而且{' '}
              <span className="dn-signal">
                BTC 从孤单的落后者变成了孤单的领先者
              </span>：BTC 周内{' '}
              <span className="dn-tag bull">+24.34%</span>、对 NQ{' '}
              <span className="dn-tag bear">−2.29%</span>、SP500 −1.18%、JP225
              −4.25%、NVDA −4.24%、META −6.29%、MSFT −2.40% —— 对 NQ 一记{' '}
              <span className="dn-tag bull">+26.63pt</span> 的领先、而 08-16
              备忘记的是 −3.85pt 的落后。股票 beta 不是解释；BTC 对 NQ 的相关是{' '}
              <span className="dn-tag">+0.046</span>、对 SP500{' '}
              <span className="dn-tag">+0.008</span>、统计上什么都不是。{' '}
              <span className="dn-em">
                在这个文件上、BTC 相关的是硬资产那一簇
              </span>：按 |r| 的前五是 PLAT{' '}
              <span className="dn-tag">+0.310</span>、SILVER{' '}
              <span className="dn-tag">+0.239</span>、MSFT{' '}
              <span className="dn-tag">+0.237</span>、META +0.182、GOLD{' '}
              <span className="dn-tag">+0.180</span>、后面是 PALL +0.179、EUR
              +0.166、COPPER +0.160 —— 前六里四个金属。而那些市场确实在动：GOLD{' '}
              <span className="dn-tag bull">+5.27%</span>、SILVER{' '}
              <span className="dn-tag bull">+6.29%</span>、PLAT{' '}
              <span className="dn-tag bull">+7.54%</span>、PALL +2.07%、URNM
              +6.77%、CL{' '}
              <span className="dn-tag bull">+6.26%</span>、BRENT{' '}
              <span className="dn-tag bull">+6.35%</span> —— 在一张软的股票
              tape 和一个走软的美元之上、对实物资产的一记广泛出价、而 BTC 是
              它 beta 最高的表达。
            </p>

            <p>
              <span className="dn-em">
                那个读法只作为 regime 质感提供、不多于此。
              </span>{' '}
              mean |r| 0.219 按文件自己的门槛就是一个{' '}
              <em>idiosyncratic</em> regime、167 根小时行上的 +0.310 相关是一个
              弱估计、而&ldquo;BTC 跟金属一起走&rdquo;是一个这张快照与之相容的
              假说、不是交易台已经确立的关系。BTC/NQ ratio 序列本切片{' '}
              <span className="dn-tag">NOT LOADED</span>、所以上面那条 BTC-vs-NQ
              只由相关文件印的两个 7d 百分比搭起来 —— 无 ratio、无百分位、
              对那一对不做 regime 判定。NTT pivots、max-pain 和 strike 级 IV 面
              同理：仅框架、已列在清单里。{' '}
              <span className="dn-signal">
                交易台真正会照着做的那条宏观线更窄
              </span>：10Y 在 4.69% 而且在升、实际利率在 z +1.82、Fed 净流动性
              在抽、这波行情完全没有利率顺风。它是逆着宏观面板在跑的、这让它的
              持续性变成一个流和仓位的函数 —— 逼空、金属出价、美元走软 ——
              而不是贴现率的函数。逆宏观跑的流驱动行情能走很远、也能毫无预警
              地停、因为底下什么都没变过。
            </p>

            <h2 className="dn-sec">
              本子{' '}
              <span className="dn-roman">V · 本子 FLAT、而且这次让交易台付了钱 —— 那根递延的 0.2R scout 会是 +10.03R 毛 / 按标称规模 ≈2.01R、它的两个目标都在 08-19 15:05Z 被点到 · scout 重入现记为 EXPIRED UNFILLED（这套设置是死于价格、不是死于失效）、且 NOT 往上 20% 重画去追 · 一套回撤重入框架定在 $75k–$76k 墙带、NOT ARMED · chase-short STOOD DOWN、它的价格腿在谱系最远处（现货在 flip 上方 +23.22%；要够到需一记 18.84% 的跌）、而它的 γ 腿只是在 post-08-16 极值（+249.90M 正、低于谱系自己 07-22 / 07-23 / 07-24 的 +294.6M / +283.46M / +262.1M 印）</span>
            </h2>

            <p>
              <span className="dn-signal">
                先把话说白：交易台在一记它自己已经框好的 +20.66% 移动里是平的
              </span>。08-19 备忘带着一套 cover-bounce scout、第一腿（1d 收在
              D-EMA50 顶 $64,346 上方）火了且守住、第二腿（一根可认证的 SM 净多
              &gt; +1k）没满足、于是按第二腿把这笔交易按下。第二腿从来没认证 ——
              而且如 §I 所述、它<em>到现在</em>还没有、因为唯一一次穿进净多
              领地的是一根名册重同步分钟。但价格没等数据质量变好。那笔交易的
              两个目标、{' '}
              <span className="dn-tag">$66,343（D-EMA100）</span> 和{' '}
              <span className="dn-tag">$66,391（D-SMA100）</span>、都在{' '}
              <span className="dn-tag">2026-08-19 15:05Z</span> 被点到、大约是
              那篇发出后十四个半小时、而 tape 继续走：标称入场 ~$64,632 对标称
              止损 $63,301 是{' '}
              <span className="dn-tag bull">$1,331 的风险对 $13,349.99 的移动
              = 10.03R 毛、按标称 0.2R 规模 ≈2.01R</span>。谱系的纪律在构造上
              没有错 —— 同一条认证规则把本子挡在六周 $63k 磨盘之外 —— 但这根
              session 它产出了一笔量出来的 10.03R 毛机会成本、备忘把这个当事实
              记、而不是当 caveat。{' '}
              <span className="dn-em">
                备忘不把它拿去跟以往的错过排名次：谱系里没有一份口径一致、
                记录递延设置及其最大有利偏移的账本、所以&ldquo;谱系之最&rdquo;
                是这个文件拿不出来源、因此也不说的一句话。把那份账本建起来
                作为未结项带走。
              </span>
            </p>

            <p>
              <span className="dn-signal">
                这也正是交易台不会在这里追的原因
              </span>。错过一个 24% 的周之后、诱惑是把触发重画到 $78,000、
              然后说自己是填得晚了。看看那个入场实际会是什么：一笔在框好水位
              上方 20.66% 发起的多、直接进{' '}
              <span className="dn-tag bear">$78,000 +31.41M 墙</span>、
              且在板上最重的{' '}
              <span className="dn-tag bear">$80,000 +41.20M</span> 之下、
              压在一道 0.6% 之内的{' '}
              <span className="dn-tag bear">W-EMA100 $78,451.51 / D-EMA400
              $78,235.27 盖</span>下面、带着{' '}
              <span className="dn-tag bear">4h / 8h / 12h 上 RSI 89.8 / 89.5 /
              87.9</span> 和{' '}
              <span className="dn-tag bear">三根上面都有的 ⚡TD9 SELL</span>、
              funding 钉在封顶 952 分钟、24h 现货 CVD 转负到 −117.2、SM 在唯一
              干净窗上减 −11.68%。除了趋势本身、每一个输入都在说这是这波行情
              提供过的最差几何。{' '}
              <span className="dn-em">
                对一笔错过的交易、正确的回应是下一笔更好的交易、而不是同一笔
                交易的更差价格。scout 记为到期未成交并结清；重入从零开始、
                在一个交易台真正想要的水位上重新框。
              </span>
            </p>

            <div className="dn-trade">
              <span className="dn-side long">多 · cover-bounce scout 重入（08-19 谱系）· <b>EXPIRED UNFILLED</b> —— 这套设置死于价格、不是死于失效；第二腿从未认证、tape 没带它就走了</span>
              <div className="dn-trade-name">
                08-19 的 scout 按到期结清、不是被打止损、也不是被填：第一腿（1d 收 &gt; D-EMA50 顶 $64,346）火了且守住、第二腿（可认证 SM 净 &gt; +1k）从未认证且到现在仍没有、价格从框好的入场往上跑了 +20.66%、两个目标都在 08-19 15:05Z 被点到
              </div>
              <div className="dn-thesis">
                状态记账、说白。入场框在 ~$64,632、止损 $63,301（当时重定价的
                0γ flip）—— $1,331 的风险 —— 目标 $66,343 / $66,391。两个目标
                都在 <b>2026-08-19 15:05Z</b> 被点到、约在 08-19 备忘发出后
                14.6h。现货现在 $77,981.99：<b>按框好的几何 +$13,349.99 =
                10.03R 毛、按标称 0.2R 规模 ≈2.01R</b>、并且比两个目标分别高出
                +17.54% / +17.46%。这笔从来没进过、因为第二腿要一根可认证的
                SM 净多、而 SM feed 唯一一次穿进净多领地是 08-20 07:06Z 的
                名册重同步（Δnet +39,352.9 = 前净 174.7%、long_traders
                587 → 1,388）—— 它过不了谱系自己写下的那条伪影测试。
                <b>规则按规格工作、并且让交易台付掉了这波行情。</b>
                两句都成立、备忘一句都不打算软化。交易台<em>不</em>做的是
                回头把伪影认证掉来把这笔交易算成自己的、或者把触发往上重画
                20% 假装接住了。状态：{' '}
                <em>到期未成交 / 无仓位 / 记录 10.03R 毛机会成本</em>。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">第一腿（顶重夺）</span><span className="dn-lvl-v bull">FIRED、守住、而且早就无关了 —— 08-19 的 D-EMA50&ldquo;顶&rdquo;是 $64,346、现货现在在它上方 21.19%；今天重算的 D-EMA50 是另一条水位 $65,891.78、现货在它上方 18.35%</span></div>
                <div><span className="dn-lvl-k">第二腿（可认证 SM 多）</span><span className="dn-lvl-v bear">从未认证、至今未认证 —— 表观 +15,993.77 的净多整根追溯到 08-20 07:06Z 名册重同步；序列里不存在一次干净的穿越</span></div>
                <div><span className="dn-lvl-k">目标、事后看</span><span className="dn-lvl-v">$66,343 和 $66,391 都在 2026-08-19 15:05Z 被点到；现货比它们高 +17.54% / +17.46%</span></div>
                <div><span className="dn-lvl-k">机会成本</span><span className="dn-lvl-v bear">按框好的 $64,632 / $63,301 几何 10.03R 毛；按标称 0.2R 规模 ≈2.01R · <b>不与以往错过排名次 —— 谱系里没有可供排名的 MFE 账本</b></span></div>
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">EXPIRED UNFILLED · 已结清 · NOT 在更高价重画</span></div>
              </div>
              <div className="dn-gating">
                <b>这件事改变了规则的什么：</b>伪影测试不会在行情中途被放松 ——
                那会变成一个由交易台没做的一笔交易的盈亏来做的决定、是改规则
                最坏的理由。但成本现在量出来了、而诚实的观察是：一个架在交易台
                无法审计的 feed 上的二元闸门、会一直产出这个结果。
                <b>结构性修法留待后续 session 指定、且 NOT 在这里回溯应用：
                做一个不依赖单一不可审计字段的触发</b> —— 例如价格结构加 OI
                加 funding、把 SM 降为佐证而不是闸门。本篇标出这个设计缺陷；
                它不在暴露缺陷的这波行情中途改写本子。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">多 · 回撤重入框架 · <b>NOT ARMED</b> —— 需要 08-23 周结算在 200W 上方 AND 一记守住的回撤进 $75k–$76k 墙带；不在 $78k 追</span>
              <div className="dn-trade-name">
                从零重框：一笔两条件的回撤多、打进 $75,000 +13.33M / $76,000 +12.91M 墙带、由 08-23 W-SUN 结算在 W-SMA200 $64,270.78 上方来确认 —— 快照上两个条件都不成立、而且这笔交易明确不是追 $78k 那个印
              </div>
              <div className="dn-thesis">
                多头结构是真的、值得在对的价格上持有：08-16 的 200W 破位在
                轨道上要被抹掉 —— 未收盘周 bar 走在地板上方 +21.28%、但它
                还没结算 —— 现货在整条日阶梯上方、MTF 读 8 长 / 0 空 / 2 中、
                盘口本子是一道 +249.90M 的正 γ 夹钳、最重的墙在 $80,000、
                OI 穿过整条腿距 3d 峰收缩 −5.37%（逼空、不是杠杆）、retail 在
                50.88% 不拥挤（08-16 00:00Z 参照 66.87%、真低点 08-16 22:41Z
                68.64%）、且一本水下的空头本子（short_entry $74,636.55、878 个
                交易者）仍摆在那里当没烧掉的燃料。不对的只有入场价。现货楔在
                W-SMA150 / W-EMA50 台（$77,448 / $77,257）和 W-EMA100 /
                D-EMA400 盖（$78,452 / $78,235）之间、带着三根同时的 TD9 SELL
                和中段 frame 的 RSI 89.8 / 89.5 / 87.9、而 +249.90M 的夹钳论证
                的是在 $78k 和 $80k 两道墙之间被钉、而不是干净续涨。
                <b>所以交易台等这根钉子把 γ 结构隐含的那记回撤交出来</b> ——
                一次打进 $75k–$76k 墙带并且在日收上 HOLD 住 —— 以 08-23 周结算
                作为地板破位真被逆转的结构确认。状态：<em>未武装 / 无仓位</em>。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">武装触发（两个条件）</span><span className="dn-lvl-v bull">条件 1 —— 08-23 W-SUN bar 结算在 W-SMA200 $64,270.78 上方、那才是把 08-16 确认成一周假破的东西（未收盘 bar 在上方 +21.28% 但 UNSETTLED；PENDING、08-23 23:59Z 结算）· 条件 2 —— 价格打到 $75,000–$76,000 墙带、然后印一根 ≥ $75,000 的 1d 收（UNMET；现货在带上方 2.6%）</span></div>
                <div><span className="dn-lvl-k">入场</span><span className="dn-lvl-v bull">~$76,000、在守住带的那根收盘上 · 单一 0.2R starter、无 add-leg、任何情况下不在 $78,000 上方追</span></div>
                <div><span className="dn-lvl-k">止损</span><span className="dn-lvl-v bear">1d 收 &lt; $72,992.40 —— 08-21 日低、也是突破腿之前最后一个 pivot、就坐在 $72,000 +11.99M 墙上方；一根收穿它意味着这不是回撤、是反转</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">$80,000（+41.20M 最重的墙）、然后 $81,789（W-SMA50）—— 头顶最前两个结构水位</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R starter（单一、无扩张）· 在 $80,000 平半</span></div>
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v bear">NOT ARMED —— 条件 1 PENDING（周结算 08-23 23:59Z）、条件 2 UNMET（没有发生过回撤）</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R（示意）：</b>入场 ~$76,000、止损 $72,992.40 = 约 $3,008
                风险；第一目标 $80,000 = 约 $4,000 回报 ≈ 1.33:1；第二目标
                $81,789 = 约 $5,789 ≈ 1.92:1。{' '}
                <b>硬规则：</b>这套框架存在是为了给交易台一个明确的买点、
                NOT 一张因为错过上一笔就提前进场的许可证。如果 tape 就这么从
                $78k 一路续涨、从来没打到 $76k、<em>那这笔交易就不发生、
                而且那是一个可以接受的结果</em> —— 连续第二次错过、比在 $80k
                墙上追进一记三重 TD9 SELL 便宜。同样、打到带里但没有产出
                ≥ $75,000 的收盘也不是入场；这条带必须在收盘上守住。另外注意
                §III 里那个有日期的风险、按条件说：28AUG26 当前贡献
                +82.92M、占 +249.90M 的 33.18%、是 00:00Z 快照上量出来的、
                6.3 天后结算。那个贡献不是固定的 —— 现货、IV 和书的其余部分
                都可能先重定价 —— 所以诚实的说法是、<em>在没有对冲性变化的
                前提下</em>、28AUG 结算会让让这套回撤论点变得机械的那道夹钳
                明显更薄。这套框架不假设夹钳撑到那天、也不假设恰好 +82.92M
                会离开。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · chase-short · <b>STOOD DOWN</b> —— 它的价格腿在谱系任何时点里离武装最远（flip 坐在现货下方 18.84%；现货在它上方 +23.22%）、而它的 γ 腿只是在 post-08-16 极值、不是谱系极值（+249.90M 正、大致是 08-19 的两倍、但低于 07-22 的 +294.6M）</span>
              <div className="dn-trade-name">
                chase-short 维持按下：两根硬触发都决定性地更远了 —— 0γ flip 重定价到 $63,288、现货在它上方 +23.22%（一记 18.84% 的跌之外）、aggregate γ 大致翻倍到 +249.90M 正、是 08-16 破位以来最深的正夹钳、虽然不是整段谱系之最
              </div>
              <div className="dn-thesis">
                这一压要两样东西：价格在日收上失去 flip、AND aggregate γ 翻负。
                两样都远得离谱。flip 坐 $63,288 —— 一个现货自 08-19 以来没见过
                的水位 —— 把价格放在 <b>vs live 现货它上方 +23.22%、vs GEX
                文件自己的 Deribit index $78,578 它上方 +24.16%</b>、两个参照
                都正、同号；按真正需要的那个移动表达、<b>flip 在现货下方
                18.84%</b>。γ 是 <b>结账基 +249.90M</b>、自 08-19 的 +128.92M
                上来、前十道墙全正、整个面上最大的负 strike 才 $60,000 −6.36M、
                在 tape 下方约 23%、且从 −17.79M 缓和下来。{' '}
                <span className="dn-em">
                  要说清是哪一条腿在极值。价格腿在它谱系的最远处。γ 腿不是：
                  +249.90M 是 08-16 地板破位以来最深的正夹钳、但同一结账基
                  在 07-22 记过 +294.6M、07-23 +283.46M、07-24 +262.1M ——
                  都比今天深。
                </span>{' '}
                无论怎么算、这本书都是一台很重的 vol 压制器、是 chase-short
                需要的那台负 γ 放大器的结构性反面。状态：{' '}
                <em>stood down / 无仓位 / 价格腿在谱系最远处、γ 腿在
                post-08-16 极值</em>。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">武装条件（不变）</span><span className="dn-lvl-v">1d 收 &lt; $63,288（重定价 0γ flip）AND aggregate GEX 翻负 —— 当前 +249.90M 正</span></div>
                <div><span className="dn-lvl-k">距第一腿</span><span className="dn-lvl-v bear">现货在 flip 上方 +23.22%（08-19 是 +2.10%）—— 但要走的移动是它的倒数：<b>一记 18.84% 的跌</b>（63,287.51 / 77,981.99 − 1）价格腿才开始咬 · 这一腿是谱系最远</span></div>
                <div><span className="dn-lvl-k">距第二腿</span><span className="dn-lvl-v bear">γ +249.90M 正、自 08-19 的 +128.92M 大致 DOUBLED；唯一像样的负 strike 是 $60,000 −6.36M、自身也从 −17.79M 缓和 · 08-16 以来最深、但 NOT 谱系极值（07-22 +294.6M、07-23 +283.46M、07-24 +262.1M 更深）</span></div>
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">STOOD DOWN —— 价格腿在谱系里离武装最远、γ 腿是 08-16 以来最远；本快照不考虑任何空</span></div>
              </div>
              <div className="dn-gating">
                <b>纪律：</b>本 session 的诱惑是去砸一张明显走过头的 tape ——
                三根同时的 TD9 SELL、RSI 89.8 / 89.5 / 87.9、funding 封顶 952
                分钟、新鲜的 15m 和 30m 死叉、24h 现货 CVD 转负、SM 在干净窗
                上减 −11.68%、加一记翻到 5/9 JT&lt;0 的反转 regime。那确实是
                一组在恶化的内部指标、而它 <b>NOT 是触发</b>。交易台交易的是
                flip 收盘和 γ 符号、而它们分别在一记 18.84% 的跌和一次 250M
                的符号翻转之外。往地板破位以来最深的正 γ 本子里做空、在一道
                +41.20M 起磁铁作用的墙下面做空、正是谱系在整个 $63k regime
                里拒绝过的那个错误 —— 而当时拒绝它、正是交易台现在只是欠一笔
                机会成本、而不是一笔已实现亏损的原因。超买的内部指标是一个
                不去追多的理由、不是一个武装空头的理由。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · regime 移到&ldquo;200W 破位正在被逆转、并且过冲进一道正 γ 钉、确认的周结算仍 PENDING&rdquo; · 08-16 地板破位在轨道上要被抹掉 —— 未收盘 bar 在地板上方 +21.28%、但它没结算；交易台持有的是结构、不是价格</span>
              <div className="dn-trade-name">
                regime 读 —— 08-16 那记 200W 周期地板的周破位在轨道上要被记成一记一周假破：未收盘 bar 走 $77,950.10 对 W-SMA200 $64,270.78（+21.28%）进 08-23 23:59Z 结算、而 tape 已经过冲进一道 +249.90M 的 γ 夹钳、它最重的墙就坐在头顶 2.59%
              </div>
              <div className="dn-thesis">
                08-16 备忘把周期地板结算点名为 chase-short 的待定宏观催化；
                它火了、而市场做了相反的事。08-16 W-SUN bar 结算 $62,876.00、
                对 W-SMA200 $63,978.83 低 1.72%、结束自 07-05 起的六周上-地板
                连收 —— trap-watch state 文件记下{' '}
                <code>consecutive_above: 0</code> 和{' '}
                <code>reclaim_failed_week: 2026-08-16</code>。五根日收之后、
                未收盘周 bar 坐在地板上方 +21.28%。按交易台自 parquet 周序列的
                重算、只有{' '}
                <b>164 根完成周收里的 10 根（6.1%）曾经收在 200W 下方</b> ——
                还没收的 08-23 bar 是第 165 根非 NaN 观测、被刻意排除在这个
                分母之外 —— 这正是当初 08-16 那记破位值得标出来的原因。{' '}
                <b>一周假破是一个推测、不是一条记录。</b>如果 08-23 W-SUN bar
                结算在 W-SMA200 上方、它就会是恰好持续了一周、并且是这段谱系
                记下过最锋利的一记诱空签名；在那根 23:59Z 收盘印出来之前、
                正确的时态是条件式。<b>08-23 W-SUN 收盘才是把&ldquo;破位正在
                被逆转&rdquo;从进行中转成历史的那一印 —— 而一根收回地板下方
                会让破位维持成立、不是变成假破。</b>过冲是这个读法的另一半 ——
                重夺没有停在地板上、它冲过去 21% 进了 $78k / $80k 那对墙、
                这正是交易台持有结构性结论、而不持有当前价格的原因。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">正在被逆转（多、UNSETTLED）</span><span className="dn-lvl-v bull">08-16 收 $62,876.00 破 W-SMA200 $63,978.83（−1.72%）；未收盘 08-23 bar $77,950.10 对 W-SMA200 $64,270.78 = +21.28% —— <b>OPEN、08-23 23:59Z 结算</b> · 现货在全部十根日 MA 上方 · MTF 8 长 / 0 空 / 2 中（1d 和 1w 是中、不是长）· γ +249.90M、现货在 flip 上方 23.22% / flip 在现货下方 18.84% · OI 距 3d 峰 −5.37%（逼空、不是杠杆）· retail 不拥挤 50.88%（08-16 00:00Z 参照 66.87%、真低点 08-16 22:41Z 68.64%）· 水下空头本子仍在（short_entry $74,636.55、878 个交易者）</span></div>
                <div><span className="dn-lvl-k">过冲（谨慎）</span><span className="dn-lvl-v bear">RSI 4h 89.8 / 8h 89.5 / 12h 87.9 / 1d 84.3、三根中段 frame 全挂 ⚡TD9 SELL · 反转 regime 翻到 5/9 JT&lt;0 · 新鲜 15m（2 bar）和 30m（1 bar）水上死叉 · funding 封顶 952 根连续分钟 · 24h 现货 CVD −117.2（现货买盘停了、还转了向）对期货 CVD +814.1 · SM 在干净窗上减 −11.68% · IV 49.1% 仍比 7D RV 63.54% 低 −14.44pt</span></div>
                <div><span className="dn-lvl-k">头顶未解决</span><span className="dn-lvl-v">W-EMA100 $78,451.51（−0.60%）和 D-EMA400 $78,235.27（−0.32%）就在眼前；然后 $80,000 +41.20M 墙（−2.59%）、W-SMA50 $81,789.33（−4.66%）、1w 云底 $85.9k、W-SMA100 $88,843.52（−12.23%）· 现货距 $126,208.50 ATH 仍 −38.21%</span></div>
                <div><span className="dn-lvl-k">下方真空（结构风险）</span><span className="dn-lvl-v bear">08-19/08-20 的 2,880 分钟里只有 437 分钟（15.2%）在 $65,000–$69,000 带内成交 —— $70,000 +18.75M 墙下面几乎没有被接受的结构、直到 $69,312 / $69,521 的 W-EMA20 / W-SMA20 台 —— 比印低 11.1% / 10.9%（现货/水位 +12.51% / +12.17%）</span></div>
                <div><span className="dn-lvl-k">有日期的催化</span><span className="dn-lvl-v">08-23 23:59Z W-SUN 结算（确认或抹掉假破读）· 22AUG26 0.3DTE +7.68M 今日 08:00Z 结算 · 28AUG26 到期在 6.3 天后、按 00:00Z 快照量出来当前贡献 +82.92M = 夹钳的 33.18% —— <b>是当前贡献、不是保证会滚掉的量；现货 / IV / OI 可能先把它重定价</b></span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>regime 读从&ldquo;顶与地板已重夺、底未确认&rdquo;
                移到{' '}
                <b>&ldquo;200W 破位正在被逆转、并过冲进一道正 γ 钉、结算
                待定&rdquo;</b>、而备忘直白地写出交易台没有参与。有两件事随之
                而来、且绝不能被揉成一件。第一、结构性结论在证据上是多头的 ——
                一次对只有 164 根完成周收里 10 根（6.1%）曾经跌破过的水位的
                进行中重夺、在收缩的 OI 上跑到它上方 21%、retail 不拥挤 ——
                大约是这套数据能产出的最强诱空签名、<b>而它只有在 08-23 那根
                bar 结算在地板上方时、才成为一记一周假破</b>。第二、战术性
                结论是交易台在 $77,982 没有 edge：它在一道双层周线盖下方
                0.6%、在板上最重的墙下方 2.6%、带着三根 TD9 SELL 和一股停掉的
                现货买盘。<b>多头结构加糟糕入场等于等、不是买。</b>本子维持
                FLAT、回撤框架定在 $75k–$76k 带、08-23 结算作为那一记确认印。
              </div>
            </div>

            <h2 className="dn-sec">
              读{' '}
              <span className="dn-roman">VI · 08-16 那记 200W 破位在轨道上要被记成一周假破 —— 未收盘周 bar 在地板上方 +21.28%、在 08-23 23:59Z 之前 UNSETTLED —— 而交易台全程 FLAT · 递延的 scout 以 10.03R 毛的机会成本记为 EXPIRED UNFILLED · 结构在证据上是多头的、$77,982 这个入场是这波行情提供过最差的 · 本子 FLAT · 回撤框架在 $75k–$76k <b>已定义但 NOT ARMED</b>、chase-short stood down</span>
            </h2>

            <p>
              <span className="dn-signal">
                两个结论、而纪律在于把它们分开
              </span>。第一个是结构性的、在证据上是多头的：一根收在 200W 周期
              地板下方的周收 —— 交易台重算里只有{' '}
              <span className="dn-tag">164 根完成周收里的 10 根（6.1%）</span>{' '}
              做到过 —— 在 08-16 印在{' '}
              <span className="dn-tag bear">$62,876.00</span>、对{' '}
              <span className="dn-tag">$63,978.83</span>、然后被一记{' '}
              <span className="dn-tag bull">+24% 的五天重夺</span>回答、让未收盘
              bar 走在{' '}
              <span className="dn-tag bull">地板上方 +21.28%</span>、进 08-23
              23:59Z 结算 —— <span className="dn-em">那根 bar 还开着、所以重夺
              是进行中、&ldquo;一周&rdquo;是一个要结算来批准的推测</span>。它
              来自{' '}
              <span className="dn-tag bull">收缩的持仓量（距 3d 峰 −5.37%）</span>、
              配上{' '}
              <span className="dn-tag bull">不拥挤的 retail 50.88%</span>（在
              08-16 00:00Z 参照行上曾 66.87% 多、真低点 22:41Z 是 68.64%）、
              并且把现货带到了日阶梯的每一级上方、MTF 在{' '}
              <span className="dn-tag bull">8 长 / 0 空 / 2 中</span> ——
              每条 short 归类都清了、只是 1d 和 1w 只清到中。这是这套数据能
              描述的最高品质的诱空、交易台照此记录 —— 一周在下、然后看着是
              没了、以那一印为准。
            </p>

            <p>
              第二个结论是战术性的、而且一点都不多头。{' '}
              <span className="dn-signal">
                在 $77,982 交易台没有 edge、而且对为什么很诚实
              </span>：现货在{' '}
              <span className="dn-tag bear">W-EMA100 $78,451.51 下方 −0.60%、
              D-EMA400 $78,235.27 下方 −0.32%</span>、一道 0.6% 之内的双层周线盖；
              它在{' '}
              <span className="dn-tag bear">$80,000 +41.20M 下方 −2.52%</span>{' '}
              —— 板上最重的墙 —— 且在一道{' '}
              <span className="dn-tag">+249.90M</span> 的正 γ 夹钳里面、
              那道夹钳机械地论证钉而不是续涨；中段 frame 挂着{' '}
              <span className="dn-tag bear">RSI 89.8 / 89.5 / 87.9、4h / 8h /
              12h 上有 ⚡TD9 SELL</span>；funding{' '}
              <span className="dn-tag bear">已经在 +10.95% 封顶上挂了 952 根
              连续分钟</span>；{' '}
              <span className="dn-tag bear">24h 现货 CVD 已经转负（−117.2）</span>{' '}
              而期货 CVD 还在买（+814.1）；并且在唯一无伪影的窗上被跟踪的本子{' '}
              <span className="dn-tag bear">朝一记 +2.23% 的推减了
              −11.68%</span>。下方结构是薄的 ——{' '}
              <span className="dn-tag bear">08-19/08-20 的分钟里只有 15.2%
              在 $65k–$69k 带内成交</span> —— 所以一次穿过 $70,000 墙的解仓
              到 $69.3k–$69.5k 之前几乎没有东西接得住。
            </p>

            <p>
              还有第三件、它不是结论、是一笔账。{' '}
              <span className="dn-signal">
                那条护了本子六周的规则、这次让它付掉了这波行情、而备忘不为
                这条规则辩护
              </span>。第二腿要一根可认证的 SM 净多；SM feed 把它的净多整根
              产在单一一根{' '}
              <span className="dn-tag bear">08-20 07:06Z 的名册重同步（Δnet
              +39,352.9 = 前净 174.7%）</span>里、那不是认证、于是交易递延着、
              而价格从它旁边跑掉了{' '}
              <span className="dn-tag bull">+20.66%</span> ——{' '}
              <span className="dn-tag bull">10.03R 毛、按标称规模 ≈2.01R</span>。
              对的回应既不是回头给伪影背书、也不是在 $78k 追；而是记下一个架在
              不可审计字段上的二元闸门会一直产出这个结果、把设计缺陷标给后续
              session、并把入场重框在一个交易台真正想要的价格上。{' '}
              <span className="dn-em">
                本子 FLAT。回撤多在 $75,000–$76,000 墙带上<b>已定义但
                NOT ARMED</b>、止损按 $72,992.40 收盘基、要武装需要 08-23 周
                结算在 200W 上方加一根守住带的收盘 —— 两个现在都不存在。
                chase-short 按下、它的价格腿在谱系里离武装最远、γ 腿在
                post-08-16 极值。tape 转在两个有日期的印上：08-23 23:59Z 的
                W-SUN 结算 —— 它会把假破读从进行中转成历史、或者、若收回地板
                下方、让那记破位维持成立 —— 以及六天后的 28AUG26 到期、
                它当前带着 +249.90M 夹钳里的 +82.92M（33.18%）、并且会在没有
                对冲性的书 / 现货 / IV 变化的前提下、把那份压制从板上拿走。
              </span>
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2 · 已过 codex 敌对式审计
            </span>
            <b>状态：</b>这是 v2 EN 备忘的 ZH companion、在 STAGE B（codex
            敌对但公允）返回{' '}
            <b>BLOCK-CRITICAL —— 4 CRITICAL + 2 MAJOR + 8 MINOR</b>
            （录于 <code>audits/2026-08-22-desk-note.md</code>）之后从 v1 草稿
            升级。STAGE C 把全部十四根 finding 就地应用到 EN 文件、并且把每一根
            都当成一句要在<em>全文</em>纠正的错误主张来处理、而不只是审计引用
            的那几行；每根都跑了 grep-closure（搜索 pattern → hits-before →
            hits-after）直到零残留。<b>全部 finding RESOLVED、hits-after = 0。</b>{' '}
            <b>DN-001（CRITICAL）</b>—— γ 最高级不成立：+249.90M 现在写成
            <em>post-08-16 谱系</em>里最深的正夹钳、并明确写出它 NOT 是谱系
            最大值、附上有来源的反账（07-22 +294.6M、07-23 +283.46M、07-24
            +262.1M）；chase-short 改成价格腿在谱系最远、γ 腿只在 post-08-16
            极值。搜 <code>deepest positive</code> / <code>of the lineage</code> /{' '}
            <code>furthest</code> / <code>both triggers</code> —— after 0。{' '}
            <b>DN-002（CRITICAL）</b>—— 未结算周 bar 被写成完成事实：lead、
            regime 卡、§VI、结语和签名全部改成条件式 / 进行中（&ldquo;在轨道上
            要成为&hellip;它还不是&rdquo;、&ldquo;正在被逆转&rdquo;、
            &ldquo;一个推测、不是一条记录&rdquo;、并写明一根收回地板下方会让
            破位维持成立）。搜 <code>one-week false break</code> /{' '}
            <code>lasted exactly one week</code> / <code>reversed</code> ——
            带旧义的 after 0。<b>DN-003（CRITICAL）</b>—— §VI 的{' '}
            <code>armed</code> 与交易卡的 <code>NOT ARMED</code> 打架：§VI 改成
            <b>已定义但 NOT ARMED</b>、全文六处状态词现在只有一个状态。
            搜 <code>ARMED</code> / <code>armed</code> —— 非否定态 after 0。{' '}
            <b>DN-004（CRITICAL）</b>—— 08-16 MTF 历史引错：按存档
            （<code>snapshots/2026-08-16-0007/mtf_div_latest.html</code> 读
            <code>1 多 / 7 空 / 2 中</code>）改成 <b>1 长 / 7 空 / 2 中</b>、
            并把&ldquo;每一条空都变成了多&rdquo;换成逐 frame 事实：七条空里
            五条转长、<b>1d 和 1w 只转到中</b>。搜 <code>1 long / 8 short</code> /{' '}
            <code>Every frame that was short</code> —— after 0。{' '}
            <b>DN-005（MAJOR）</b>—— 两个 JSON 不可复现：两者都不在
            <code>snapshots/2026-08-22-0038/</code>、且 GEX 值已滚走、所以采取
            披露而非事后补钉一个不同状态。全部 GEX 数字改坐在<b>存档 HTML
            by-expiry strip（+249.91M、记作 ≈+249.90M）</b>上；JSON{' '}
            <code>net_gex</code> 降为披露过的非钉住旁证、并写出 01:00Z 滚到
            +250,357,214；trap-watch 文件标为 NON-PINNED 并附重读 payload 与
            md5。<b>DN-006（MAJOR）</b>—— 快照 GEX 被当成前向确定性：
            &ldquo;夹钳撑到 28AUG&rdquo;和&ldquo;移除 +82.92M&rdquo;删除、
            五处提及全部改成<em>当前 IV 下的当前贡献</em>（00:00Z 快照上
            +249.90M 的 33.18%）、效果只在<em>没有对冲性的书 / 现货 / IV
            变化</em>的前提下陈述。<b>DN-007（MINOR）</b>—— 24h 窗其实是
            24h01m：窗口改按解析时间戳闭区间选、交易台在 132132–133572 上重算
            得回报 <b>+5.79%</b>、低 <b>$73,554.01 @ 00:42Z / BJ 08:42</b>、
            OI <b>−2,164.8 BTC / −2.01%</b>、funding 起点 <b>+6.20%</b>、均值{' '}
            <b>+9.88%</b>、<b>0 / 1,441</b> 负、<b>952 / 1,441（66.1%）</b>
            封顶、taker 净 <b>+825.8</b>、现货 CVD <b>−117.2</b>、期货 CVD{' '}
            <b>+814.1</b>、skew 均值 <b>+1.87</b>、perp 均值 <b>−$25.28</b>；
            72h CVD 重结到 <b>+5,581.3</b> / <b>+6,242.3</b>。{' '}
            <b>DN-008（MINOR）</b>—— 72h funding 汇总算不回来：按精确
            4,321 行 / 72h00m 窗重算得均值 <b>+8.34%</b>、<b>2,181 / 4,321</b>
            封顶。<b>DN-009（MINOR）</b>—— 3d 峰 OI 差错 2.6 BTC：端点
            111,717.553 与 105,715.551 相减是 <b>−6,002.0 BTC（−5.37%）</b>、
            两处都换。<b>DN-010（MINOR）</b>—— retail 参照时区标错、也不是
            精确低点：改标 <b>BJ 08:00 08-16 / UTC 2026-08-16 00:00Z</b>、
            称为上一篇参照、并在全部六处补上真低点{' '}
            <b>$62,716 @ 2026-08-16 22:41Z（BJ 06:41 08-17）、retail 68.64% 多</b>。{' '}
            <b>DN-011（MINOR）</b>—— flip 距离被倒着换算：现货在 flip
            <b>上方 +23.22%</b>、flip 在现货<b>下方 18.84%</b>、所以够到第一腿
            要的是一记 <b>18.84%</b> 的跌、不是 23%。<b>DN-012（MINOR）</b>——
            未收周被当成一根收：改成 <b>164 根完成周收里的 10 根 = 6.0976%
            → 6.1%</b>、第 165 根非 NaN 观测（还开着的 08-23 bar）单独摆开。{' '}
            <b>DN-013（MINOR）</b>—— 一条水位被写成两个价：08-19 的顶 $64,346
            （现货上方 21.19%）与今天重算的 D-EMA50 $65,891.78（现货上方
            18.35%）分开摆。<b>DN-014（MINOR）</b>—— 无证据的错过最高级：删除、
            改为记下量出来的 10.03R 毛、并直说谱系里没有可供排名的 MFE 账本、
            把建账本作为未结项带走。{' '}
            <b>未采纳：</b>审计对 DN-005 给的&ldquo;把两个 JSON 拷进带时间戳
            的快照&rdquo;这一补救<em>没有</em>执行 —— 两个文件都已经滚过起草
            时的状态（<code>gex_summary.json</code> 在 01:00Z、
            <code>ma200w_trap_watch_state.json</code> 在 01:11Z 重打戳）、
            现在归档等于钉住一个备忘从未读过的状态。改取披露、并把&ldquo;起草
            前先拷贝&rdquo;这一步连同 DN-001 / DN-014 都想要的那份谱系账本
            （MTF 计数、结账 GEX 极值、flip 距离、设置状态、错过交易 MFE）
            一起作为 runbook 修法带到下一 session。{' '}
            <b>第二意见：</b>runbook §5 的 ask-deepseek 算术复算没有跑起来 ——
            <code>curl</code> 对 DeepSeek 端点 300s 超时（已录在审计文件里）。
            codex 仍是主审计并持有发布闸门；上面每一处数字更正都由交易台先从{' '}
            <code>/opt/btc-monitor/live_db.json</code> 与 parquet 序列独立重算过
            才应用、不是照审计的话抄。<b>EN/ZH 数值平价：</b>本 ZH companion
            与 v2 EN 带同一组数字与 caveat（零漂移）、句法由中文生成、
            非翻译。<b>Build note（INFO）：</b>本服务器跑 Node 18.19.1；
            Next 16.2.6 在 Node &lt; 20.9.0 上硬退出、所以完整{' '}
            <code>next build</code> 被环境阻塞（谱系）；{' '}
            <code>npx --no-install tsc --noEmit</code> 是 build proxy、
            在本 v2 文件上退出 0。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体情况
            个性化。数字反映单一原子快照（2026-08-22 00:39Z、tape 锚 00:39Z；
            session 约 00:38Z）、provenance 在数据清单条带中按节披露；宏观
            Tier-1 面板渲染 2026-08-21 22:15Z（比快照早约 2.4h）且是一根 FRESH
            读（周五 08-21 的美国日频印已出）、部分输入明确陈旧、缺失或不可用
            （<code>weekly_200sma.json</code> 缺失 —— 跨 164 根完成周收的
            下-地板频率是交易台自 parquet 的重算；<code>gex_summary.json</code>{' '}
            与 <code>ma200w_trap_watch_state.json</code> 按 live 读、NOT 钉在
            本 session 的快照存档里、所以出自它们的数字按非钉住披露、备忘里没有
            任何东西坐在它们上面；08-23 周 bar 还 OPEN、所以每一句假破陈述都
            条件于它 23:59Z 的结算；JGB 月频陈旧 81d；Tier-3 月频行陈旧 81d；
            NTT pivots、max-pain、strike 级 IV 与 BTC/NQ ratio NOT LOADED）
            并已标注。水位、规模与条件是交易台流程的示例、不是长期推荐。
            到期 scout 上的机会成本数字是对一笔<em>从未进过</em>的交易做的
            算术、为流程问责而记、不是业绩主张。过去的相关性、γ 与仓位模式
            不绑定未来盘面。衍生品有全损风险、加杠杆下损失可超过保证金。
            <em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                08-16 那记 200W 地板破位在轨道上要成为恰好一周 —— 08-23 那根
                bar 得先结算在地板上方、这才算数。价格用五天 +24% 回答了它、
                未收盘周 bar 走在地板上方 +21.28% 进那根结算、而交易台全程是
                平的 —— scout 以 10.03R 毛到期未成交、因为一个交易台无法审计的
                feed 从来没认证过。结构是多头的、$77,982 这个入场是这波行情
                提供过最差的。平、手上有一个 $75k–$76k 的买点、没有任何追的
                打算。
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
            v2 · 2026-08-22 00:39Z 快照 · 已过 codex 敌对式审计 · sources:
            live_db.json · mtf_div_latest.html · btc_gex.html ·
            macro_dashboard.html · cross_asset_correlation_summary.md ·
            btcusdt_1m_*.parquet · gex_summary.json + ma200w_trap_watch_state.json
            （live 读、NOT 钉住）· FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
