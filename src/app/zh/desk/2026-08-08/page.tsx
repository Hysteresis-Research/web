import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-08-08 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-08-08',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-08-08' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260808() {
  await requireViewer('/zh/desk/2026-08-08');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-08-08 · v2</span>
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
              <span className="dn-big">$64,920</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.89%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-08-08 00:05Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-08-08 00:05Z（行 t=&ldquo;08-08 08:05&rdquo; BJ、即 00:05Z 日锚）</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · pin 在 00:05Z 锚行以求可复现（读时文件
                    tail 已到 00:07Z）· live-tape 的 <code>t</code> 是
                    BJ-local（UTC+8）：00:05Z pin = t &ldquo;08-08 08:05&rdquo;、下游
                    所有 BJ 时间戳在正文里都转成 UTC · 24h / 4h / 1h 的流向 +
                    funding 窗都从 08:04 / 04:04 / 07:04 BJ 开盘那行起（比精确
                    同时钟窗长一行：24h 是 1,442 行）、是每条累积-delta 窗都带的
                    披露性行偏移；同时钟的点对比（SM net 对 08-07 08:05 基）用
                    精确时钟
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-08-08 08:01 BJ（00:01Z）scan</td>
                  <td className="dn-flag">
                    滚动 latest 文件（可盘中前移）· /opt/desk-note/snapshots/2026-08-08-0007/
                    的存档副本才是 pin 源 · 较快照锚约 4 分钟旧 · 含未收盘
                    K 线 · 扫描现货 $64,874、24h +0.91%
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-08-08 00:00Z 快照</td>
                  <td className="dn-flag">
                    较锚约 5 分钟旧 · Deribit idx $65,227 对 live $64,920
                    （比 live 高 $307）· 830 合约 · 8AUG26 0.3DTE +12.45M 仍在本子上
                    （今日 08:00Z 结算、比此快照晚约 8h）· 存档于
                    /opt/desk-note/snapshots/2026-08-08-0007/
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-08-08 00:00Z
                  </td>
                  <td className="dn-flag">滞后约 5 分钟 · 7d 1h bar · 22 资产 · 167 rows · 存档于快照目录</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-08-07 22:15Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.9h · FRED Tier-1：10Y +6bp 到 4.69%（松<em>反转</em>）、
                    TIPS +2bp 到 2.43%、HY OAS −4bp 到 2.71%、DXY +0.27 到 99.96、
                    Fed 净流动性 平在 $5.840T · MOVE 抓取失败（暗、第四次渲染）·
                    NFCI 陈旧 · 存档于快照目录
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-08-08 00:06Z</td>
                  <td className="dn-flag">
                    close $64,900.00（未收盘 08-08 bar）· 偏移按 live 现货
                    $64,920.42 重算 · 周 ladder 按完整 2019–2026 wildcard
                    （362 根周 bar）· W-SMA200 $63,760.87 未收盘 / $63,533.52
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
                    状态作 live 替代 · 下一根周收 2026-08-09（明天）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED 月度 · IRLTLT01JPM156N</td>
                  <td className="dn-flag">陈旧 · 月度（67d）· 不作实时</td>
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
              <span className="dn-v">+5.86%</span>
              <span className="dn-src">live · funding 字段 0.005351/8h × 1095 = +5.86% ann · 24h 均值 +5.43%（08-07 是 +3.83% —— 再热 +1.60pt）· 0 / 1442 采样行转负（08-07 是 6 / 1442 —— 负数又消失了）· 最大 +7.97% ann @ 08-08 03:47 BJ（08-07 19:47Z）、最小 +0.74% ann @ 08-07 08:22 BJ（00:22Z 08-07）· 未钉封顶（远在 +10.95% Binance 封顶下）</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h 均值</span>
              <span className="dn-v bear">+3.83% → +5.43%（再热 +1.60pt）</span>
              <span className="dn-src">08-07 的再firm 提速了 —— 负数 6 → 0、多头 carry 第二天又拥挤回来；仍远在封顶一半以下、但 scout 挂着的那根泄杠杆顺风现在<em>完全</em>反转成一根 firming carry</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bull">+1.16%（+1,230.0 BTC）</span>
              <span className="dn-src">live · 四根连缩后<em>第一根</em>扩（08-04→08-07 是 −628.7 / −326.9 / −1,112.5 / −1,369.6）· 现在 106,979.5 BTC 对 24h 前 105,749.6 · 仓位终于在价格后面堆 —— scout 一直在等的需求确认</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bull">52.44 / 47.56</span>
              <span className="dn-src">live_db `mkt_long_pct` · 从 54.84（24h 前）de-crowd −2.40pt 到 52.44 · 24h 区间 51.36 / 55.65 —— retail 靠回<em>离</em>多侧进这根涨、正是 scout 要的 de-crowd（08-07 重新拥挤的反面）</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bull">−1.51k（近乎 FLAT · feed 已 re-sync、假象 CLEARED）</span>
              <span className="dn-src">live · long 12.34k − short 13.85k = −1.51k · 复发的 08-06 11:06 BJ +9,765 short 假象被 08-07 14:51 BJ 一次 feed re-sync 清掉（Δshort −16,234、Δlong −3,299）· re-sync 后本子干净稳住约 17h（net 区间 −1,157 / −2,456）、所以<em>当前</em>状态可 certify 近乎 flat · short 13.85k 坐在假象前 ~21.37k（08-06 11:05 BJ）下方 ~7.5k —— 一根真回补、不只是假象解开</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对同时钟 24h 基</span>
              <span className="dn-v bull">−16,438 → −1,512 · CERTIFIED 近乎 flat（&gt; −9,000）</span>
              <span className="dn-src">RAW 同时钟 ΔNet +14,926 穿过 08-07 14:51 BJ 的 feed re-sync（一根 −16,234 short 掉）、所以 raw 24h delta 不是一根干净单本子移动 · 但对 08-07 备忘的去假象估计（≈ −7,129）、干净 ΔNet ≈ +5,617（一根 78.8% 回补）；两个口径下<em>当前</em>可 certify 的 SM net −1,512 都清过 scout 的「certified SM &gt; −9,000」加仓腿 —— 自 08-05 起第一根干净 SM 读</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">40.4% / 28.18%</span>
              <span className="dn-src">GEX IV 中位数对 30D close-to-close RV（30 returns / 31 closes、logret.std × √365 × 100）· 链级溢价 ~+12.2pt · IV 中位数是横跨合约的链中位、<em>不是</em>可交易价差 · P/C OI 0.58（call 206,034 / put 119,056）· 31-close 区间 $62,307 – $66,522 ·（29 returns 读 28.23%、略高 —— RV 在回补下基本平）</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+1.70%（在上方）</span>
              <span className="dn-src">flip $63,833（从 08-07 的 $63,174 升 +$659）· 对 live 现货 $64,920.42（+1.70%；64,920.42/63,833 − 1 = 1.704%）/ GEX 文件 Deribit idx $65,227（+2.18%；65,227/63,833 − 1 = 2.184%、文件取整 +2.2%）—— 两参考都正 · headline GEX +100.3M、by-expiry rollup +113.76M（08-07 是 +78.7M / +88.06M —— 本子<em>再</em> gamma 转正）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                需求确认了、持着的 scout 的加仓腿在框架下开火。08-07 日线在
                五天里第一根 OI 扩上收清 D-EMA50 盖、SM feed re-sync 清掉了
                复发假象到一本可 certify 近乎 flat 的本子、每条 24h 流向读都
                在买 —— 08-07 备忘要加 starter 的三条腿全印了
              </span>
              。现货
              <span className="dn-tag bull">$64,920、24h +0.89%</span>；08-07
              日线收 <span className="dn-tag bull">$64,885.40</span> —— 谱系
              最高收、清过 <span className="dn-tag bull">D-EMA50 盖 $64,642.78
              达 $243</span>（落在备忘点的整数 ~$64,900 下 $14.60、但决定性
              地在盖上方、而未收盘 08-08 bar $64,900.00 与 live 现货 $64,920
              都坐在 $64,900 上）。需求侧终于露头：
              <span className="dn-tag bull">OI 扩 +1.16%（+1,230.0 BTC）</span>、
              四根连缩后第一根堆、24h 流向全面被买（现货 CVD
              <span className="dn-tag bull">+2,221.6</span>、期货 CVD
              <span className="dn-tag bull">+423.9</span>、大单
              <span className="dn-tag bull">+1,018.9</span>、taker
              <span className="dn-tag bull">+437.2</span>）。受损三轮的 SM
              tell 干净了结：
              <span className="dn-tag bull">08-06 11:06 BJ +9,765 short 假象
              被 08-07 14:51 BJ 一次 feed re-sync 清掉</span>、本子稳住约 17h
              在一根可 certify 的
              <span className="dn-tag bull">net −1,512（近乎 flat、&gt;
              −9,000）</span> —— short 13.85k 坐在假象前 ~21.37k 下方 ~7.5k、
              一根真回补。dealer 本子<em>再</em> gamma 转正（headline
              <span className="dn-tag bull">+100.3M</span>、rollup
              <span className="dn-tag bull">+113.76M</span>、flip 升到
              $63,833、现货 +1.70% 上方）、MTF 印一根
              <span className="dn-tag bull">新鲜 1d 水上强金叉</span>、4h
              回金。但这根确认是 grind、不是冲、caveat 叠着：
              <span className="dn-tag bear">funding 第二天再热（24h 均值
              +3.83% → +5.43%、负数 6 → 0）</span>、多头 carry 又拥挤回来、
              <span className="dn-tag bear">宏观的松反转（10Y +6bp 到 4.69%、
              利率筛 FALSE、走宽到 14bp）</span>、一根
              <span className="dn-tag bear">新鲜 12h ⚡TD9 SELL + 1h 水上死叉</span>
              在盖上闪超买、而 +$65k–$68k / +92.56M 正 gamma 带是一道双向阻尼、
              既压上行也垫褪。本子：
              <span className="dn-tag">08-07 备忘预授权的 0.2R 加仓腿在框架下
              开火（0.2R → 0.4R、最小 size）</span> 在需求确认的重清盖上、
              目标 $67k–$68k 簇当 grind；chase-short 仍 STOOD DOWN（地板守住、
              gamma 更正、现货 +1.70% 在 flip 上方）；本篇转在回补是延伸
              （第二根决定性收在盖上、OI 仍在堆）还是超买快帧 + 再热 carry
              把现货拉回盖/flip 下方。
            </p>

            <p>
              BTC 报 <span className="dn-tag">$64,920</span> live、
              <span className="dn-tag bull">+0.89%</span> 在 24h（live-tape
              窗；08:01 BJ 的 MTF 扫描在它自己的 24h 基上读 +0.91% —— 约 4
              分钟偏移加不同的窗口开盘解释这道小差），在一条
              <span className="dn-tag">$65,350 / $64,177.62</span> 区间里（24h
              高 @ 12:55Z 08-07 / 20:55 BJ、低 @ 05:24Z 08-07 / 13:24 BJ）。
              <span className="dn-signal">回补重启、同日盖被决定性重清</span>：
              08-05 收 $64,633.90（第一次收在 08-06 备忘点的 $64,612 旧盖
              上方、但 $1.19 <em>低于</em>当天升起的 D-EMA50 $64,635.09 ——
              清了旧水位、吻了移动的那根）、08-06 又吐回 $64,300.00、08-07
              收 <span className="dn-tag bull">$64,885.40</span> —— 一根 $585
              上日、是那根决定性的同日重清盖、也印了谱系最高收。四根日线
              偏移现坐在现货下方（从 08-07 的两根升上来）：
              <span className="dn-tag bull">D-SMA50 $63,332.85（+2.51%）</span>、
              <span className="dn-tag bull">D-EMA20 $64,200.89（+1.12%）</span>、
              <span className="dn-tag bull">D-SMA20 $64,427.80（+0.76%）</span>、
              和承重的
              <span className="dn-tag bull">D-EMA50 盖 $64,642.78（+0.43%）</span>
              —— 08-06 褪又丢的那根盖回到现货下方、翻成支撑 —— 然后一道跳空到
              <span className="dn-tag bear">D-EMA100 $66,918.43（−2.99%）</span>、
              <span className="dn-tag bear">D-SMA100 $68,019.95（−4.56%）</span>。
              <span className="dn-em">
                08-07 备忘要来 ADD 的那一根收盘 —— 一根决定性 1d 收清过盖、
                OI 在堆、certified SM net &gt; −9,000 —— 三条全印了：08-07 收
                $64,885 在 $64,643 盖上方、OI 扩 +1,230、re-sync 后的 SM 本子
                是一根可 certify 的 −1,512。加仓腿上膛了；问题现在是回补延伸
                往 $67k–$68k 簇、还是超买快帧把它拉回盖上。
              </span>{' '}
              08-06 的分叉往上了结回去：08-06 丢盖的那根褪本身在 08-07 被重清、
              本子现在第一次坐在盖上方、踩在一根在堆的 OI 基上。
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面 · SM feed RE-SYNCED（08-07 14:51 BJ）清掉 08-06 假象 —— 当前本子可 certify 近乎 flat −1,512、一根真回补 · OI 第一天扩（+1,230）—— 需求终于在价格后面 · 但 funding 再热、retail de-crowd —— 一道杂色的杠杆背景</span>
            </h2>

            <p>
              <span className="dn-signal">
                受损三轮的 SM tell 终于清了 —— feed re-sync、当前本子可 certify
                近乎 flat
              </span>
              。RAW SM net 是 <span className="dn-tag bull">−1,512</span>
              （long 12.34k − short 13.85k）对同时钟 24h 基 −16,438 —— 一根
              raw ΔNet <span className="dn-tag">+14,926</span>、看着像一根巨大
              回补。但
              <span className="dn-em">那根 raw delta 穿过 08-07 14:51 BJ 的
              feed re-sync —— 一根单分钟 Δshort −16,234 / Δlong −3,299、把
              short 一分钟从 30.6k 掉到 14.4k —— 正是 08-06 11:06 BJ +9,765
              假象清掉的镜像</span>。所以 raw 24h delta 不是一根干净单本子
              移动。对的读法是<em>当前</em>状态：re-sync 后本子干净稳住约 17h
              （14:51 BJ 08-07 → 08:05 BJ 08-08、net 区间
              <span className="dn-tag">−1,157 / −2,456</span>）、所以快照
              <span className="dn-tag bull">net −1,512 可 certify</span>。而且
              是一根真回补、不只是假象解开：short_btc 13.85k 坐在
              <span className="dn-em">假象前 ~21.37k 水位（08-06 11:05 BJ、
              假象前最后一根干净读）下方 ~7.5k</span>、对 08-07 备忘的去假象
              估计（≈ −7,129）、干净 ΔNet ≈
              <span className="dn-tag bull">+5,617、一根 78.8% 回补</span>。
              任一口径、可 certify 的当前 net −1,512 都清过 scout 的
              「certified SM &gt; −9,000」加仓腿 —— 自 08-05 起第一根干净 SM
              读、读的是一本近乎 flat 的本子、深空没了。SM net 谷（最空）
              <span className="dn-tag bear">−16,675 @ 08-07 09:41 BJ</span> 是
              re-sync 前（仍被假象污染）的印；net 峰（最不空）
              <span className="dn-tag bull">−1,157 @ 08-08 01:36 BJ</span> 就在
              干净的 re-sync 后窗里。
            </p>

            <p>
              杠杆侧是这根盘面里杂色的部分 —— 回补反弹拿到 OI 堆、但没拿到
              泄杠杆背景。
              <span className="dn-signal">
                funding 第二天连着再热、负数消失了
              </span>
              ：live <span className="dn-tag">+5.86% ann</span>（字段
              0.005351/8h × 1095）、24h 均值
              <span className="dn-tag bear">+5.43% ann</span>（对 08-07 的
              +3.83% —— 一根 +1.60pt 再热）、窗内带
              <span className="dn-tag bear">0 / 1442 负行</span>（对 08-07 的
              6 / 1442 —— 负数又没了）。还不是早期谱系那种失控封顶挤（均值远
              在 +10.95% 封顶一半以下；区间
              <span className="dn-tag">+0.74% / +7.97% ann</span>、最大 @
              08-08 03:47 BJ / 08-07 19:47Z、最小 @ 08-07 08:22 BJ / 00:22Z）、
              但多头 carry 连着两天拥挤回来 —— scout 挂着的那根泄杠杆顺风
              完全反转。OI Δ
              <span className="dn-tag bull">+1,230.0 BTC（+1.16%）</span>
              跨 24h —— 四根连缩后<em>第一根</em>扩（08-04→08-07 是 −628.7 /
              −326.9 / −1,112.5 / −1,369.6；105,749.6 → 106,979.5）、所以仓位
              终于在价格后面堆。这是 08-07 备忘要的需求确认、也翻了读法：
              四天里回补是一根回补 / 去杠杆 grind、后面没新堆；今天价格涨、
              OI 涨、流向在买 —— 新需求、不只是回补。retail
              <span className="dn-tag bull">mkt_long_pct 52.44%</span> 从
              54.84% —— 一根 −2.40pt DE-crowd（24h 区间 51.36 / 55.65）、进
              这根涨靠回<em>离</em>多侧（08-07 重新拥挤的反面）。perp 对现货
              <span className="dn-tag bear">−$30.31 折价</span> 在快照
              （1h 均 −$32.18、区间 −$40.61 / −$20.67；4h 均 −$34.47；24h 均
              −$49.57、区间 −$216.09 / +$25.49 —— 一道持续折价、只在高点上
              短暂溢价）。1 分钟 aggressor skew 快照
              <span className="dn-tag bear">−6.0</span>（1h 均 −21.59、区间
              −39.2 / +14.0）—— 快照上一档卖-aggressor 倾斜、尽管在涨。
              <span className="dn-em">
                OI 在堆 + SM 干净回补 + retail de-crowd：三条腿对多头转成加分。
                但 funding 再热、perp 带折价：需求是现货主导、杠杆背景是把多头
                carry 拥挤回来、不是 flush —— 一根 firming carry 上的 grind-up、
                不是一根干净泄杠杆的回补。
              </span>
            </p>

            <p>
              窗口流向说这根 24h 上移是全面被买、最新几小时在高点转平-杂。
              <span className="dn-em">24h 读法（行窗 08-07 08:04 → 08-08 08:05
              BJ、1,442 行 —— 比精确同时钟窗长一行、和 4h/1h 同一披露偏移）
              对一根正价格全是被买</span>：24h 价格
              <span className="dn-tag bull">+0.89%</span>、OI
              <span className="dn-tag bull">+1,230.0 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +2,221.6</span>、期货 CVD
              <span className="dn-tag bull">Δ +423.9</span>、大单
              <span className="dn-tag bull">+1,018.9 BTC / 522 根有大单的分钟</span>、
              taker-net <span className="dn-tag bull">+437.2</span> ——
              <span className="dn-em">
                现货 aggressor、期货 aggressor、大单与 taker 全在买、OI 在堆：
                一根干净的买-并-堆上移、需求在价格后面（本次窗内无 CVD reset、
                所以 24h delta 干净）
              </span>
              。~4h（行窗 04:04 → 08:05 BJ、比精确时钟长一行）：价格
              <span className="dn-tag bear">−0.10%</span>、OI
              <span className="dn-tag bull">+24.1 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +1,092.4</span>、期货 CVD
              <span className="dn-tag bear">Δ −272.3</span>、大单
              <span className="dn-tag bear">−87.6 BTC / 53 笔</span>、
              taker-net <span className="dn-tag bear">−228.5</span> ——
              <em>现货在买、但期货 / taker 卖进一根高点上的平价 —— 现货主导、
              期货在褪顶</em>。~1h（行窗 07:04 → 08:05 BJ、比精确时钟长一行）：
              价格 <span className="dn-tag">+0.06%</span>、OI
              <span className="dn-tag bear">−37.6 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +420.5</span>、期货 CVD
              <span className="dn-tag bull">Δ +48.3</span>、大单
              <span className="dn-tag bull">+22.6 BTC / 8 笔</span>、
              taker-net <span className="dn-tag bull">+43.6</span> ——
              <em>一根安静、微买的小时、OI 在滴 —— 高点上一个 pause</em>。24h
              是干净的买-并-堆；4h 显示现货主导而期货褪顶；1h 是一个安静
              pause。需求是真的、但现货主导、最新几小时在歇不在延伸。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 图 · regime 松到 5/9 周期反转（JT&lt;0）· 一根新鲜 1d 水上强金叉（刚印、DIF&gt;0）加进回金的 4h —— 一道六帧金叉簇 + HTF 底背离（8h/12h/1w）说慢本子偏上 · 但一根新鲜 12h ⚡TD9 SELL + 1h 水上死叉 + 4 帧顶背离在盖上闪超买</span>
            </h2>

            <p>
              <span className="dn-signal">
                慢结构 firm 了 —— 一根新鲜 1d 水上强金叉加回金的 4h 抬起一道
                六帧金叉簇、而快帧在盖上闪超买
              </span>
              。regime 标松到
              <span className="dn-tag">5/9 周期反转体制（JT&lt;0）——
              cycle-reversal / 均值回归</span>（从 08-07 的 6/9 —— 少一根反转帧、
              仍 JT&lt;0）、头部净读不变仍是
              <span className="dn-tag bear">高级别偏空 · 短线反弹（HTF
              lean-short、short-term bounce）</span>、⚠ HTF 底背离簇现在报在
              8h/12h/1w。多头 tell 是新鲜的：
              <span className="dn-tag bull">1d 水上强金叉（刚印、1 bar、DIF
              +69.2 在水上）</span> —— 日线上一根多头延续叉 —— 而 08-07 那根
              新鲜 4h 死叉<em>没了</em>、换成一根
              <span className="dn-tag bull">4h 水上金叉（4b）</span>。水下/上
              金叉簇现跨
              <span className="dn-tag bull">4h（4b）/ 8h（14b）/ 12h（7b）/
              1d（1b）/ 3d（9b）/ 1w（2b）</span> —— 六帧 —— 底背离簇守在
              <span className="dn-tag bull">30m / 1h / 8h / 12h / 1w</span>
              （五帧、HTF 偏重）。对着这些、快帧警告超买：一根
              <span className="dn-tag bear">新鲜 12h ⚡TD9 SELL（刚印）</span>
              —— 那根「盖上超买」旗从 8h 移上来 —— 加一根
              <span className="dn-tag bear">1h 水上死叉（刚印、1 bar、DIF
              +98.8）</span>、顶背离簇跨 15m/1h/4h/1d（四帧）。15m 和 1M 都带
              <span className="dn-tag bull">⚡TD9 BUY</span>（帧栈两端的超卖
              提示）。
              <span className="dn-em">
                直读：慢本子翻上了（新鲜 1d 强金叉、4h 回金、六帧金叉簇、HTF
                底背离）、这正是 scout 加仓要的那根结构确认。但快帧就在盖上
                超买（新鲜 12h TD9 卖、1h 死叉、四帧顶背离）、这就是加仓是一根
                往簇的 grind、不是一根追的原因 —— 预期盖区在清之前会被双向
                防守。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>读</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">64,874</td><td className="num">49.1</td><td className="neut">死叉（水上）6b</td><td className="bull">云上（刚穿）</td><td>Sell 3</td><td>谨慎 · 顶背离藏</td></tr>
                <tr><td>30m</td><td className="num">64,874</td><td className="num">51.9</td><td className="neut">死叉（水上）17b</td><td className="bull">云上 31b</td><td>Buy 6</td><td>偏多 · 底背离</td></tr>
                <tr><td>1h</td><td className="num">64,874</td><td className="num bull">55.9</td><td className="bear">死叉（水上）刚印</td><td className="bull">云上 16b</td><td>Buy 2</td><td>谨慎 · 顶背离 · 底背离</td></tr>
                <tr><td>4h</td><td className="num">64,874</td><td className="num bull">60.7</td><td className="bull">金叉（水上）4b</td><td className="bull">云上 15b</td><td>Buy 1</td><td>震荡 · 顶背离</td></tr>
                <tr><td>8h</td><td className="num">64,874</td><td className="num bull">58.9</td><td className="bull">金叉（水下）14b</td><td className="bull">云上 2b</td><td>Sell 3</td><td>偏上 · 底背离</td></tr>
                <tr><td>12h</td><td className="num">64,874</td><td className="num bull">56.4</td><td className="bull">金叉（水下）7b</td><td className="bull">云上 2b</td><td>⚡ TD9 SELL</td><td>谨慎 · 底背离</td></tr>
                <tr><td>1d</td><td className="num">64,874</td><td className="num">54.3</td><td className="bull">金叉（水上）刚印</td><td className="neut">云内 62.3–67.9k 19b</td><td>Sell 5</td><td>偏空 · 顶背离（新鲜金叉）</td></tr>
                <tr><td>3d</td><td className="num">64,874</td><td className="num">47.2</td><td className="bull">金叉（水下）9b</td><td className="bear">云下 22b</td><td>Sell 2</td><td>偏空 · 趋势</td></tr>
                <tr><td>1w</td><td className="num">64,874</td><td className="num">40.9</td><td className="bull">金叉（水下）2b</td><td className="bear">云下 27b</td><td>Sell 1</td><td>谨慎 · 底背离 · SMA200 +1.75%</td></tr>
                <tr><td>1M</td><td className="num">64,874</td><td className="num">44.3</td><td className="neut">—</td><td className="bull">云上 30b</td><td>⚡ TD9 BUY</td><td>偏多 · 趋势</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 08:01 BJ（00:01Z）scan（滚动
                    latest 文件；逐字存档于
                    /opt/desk-note/snapshots/2026-08-08-0007/）。头部告警：
                    <em>1d 水上强金叉（刚印、DIF +69.2）、1w 水下金叉（2b）、
                    1h 水上死叉（刚印、DIF +98.8）；12h ⚡TD9 SELL 与 1M ⚡TD9
                    BUY（新鲜）</em>；六帧金叉簇 4h/8h/12h/1d/3d/1w。顶背离 4：
                    15m/1h/4h/1d · 底背离 5：30m/1h/8h/12h/1w。regime 5/9
                    周期反转（JT&lt;0）；整体高级别偏空、短线反弹。扫描现货
                    $64,874、24h +0.91%、H/L $65,358 / $64,128、qVol $8.06B、
                    净计 4 多 / 2 空 / 4 中性。收盘为未收盘 K 线；每个值在各
                    TF 收盘前按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵读的是一根重清了自己的盖、把它翻成支撑的回补。现货
              $64,920 坐在四根日线偏移上方（从 08-07 的两根升上来）：
              <span className="dn-tag bull">D-SMA50 $63,332.85（+2.51%）</span>、
              <span className="dn-tag bull">D-EMA20 $64,200.89（+1.12%）</span>、
              <span className="dn-tag bull">D-SMA20 $64,427.80（+0.76%）</span>、
              和承重的
              <span className="dn-tag bull">D-EMA50 盖 $64,642.78（+0.43%）</span>
              —— 08-06 褪又丢的那根盖回到现货下方 —— 未收盘的
              <span className="dn-tag bull">W-SMA200 $63,760.87（+1.82%）</span>
              和已结的 200W 周期地板
              <span className="dn-tag bull">$63,533.52（+2.18%）</span> 在下方。
              头顶跳空开了：
              <span className="dn-tag bear">D-EMA100 $66,918.43（−2.99%）</span>、
              <span className="dn-tag bear">D-SMA100 $68,019.95（−4.56%）</span>、
              <span className="dn-tag bear">W-SMA20 $69,230.21（−6.23%）</span>、
              <span className="dn-tag bear">D-SMA150 $69,401.99（−6.46%）</span>、
              <span className="dn-tag bear">D-EMA150 $69,625.17（−6.76%）</span>、
              <span className="dn-tag bear">W-EMA20 $68,987.73（−5.90%）</span>、
              <span className="dn-tag bear">W-EMA200 $68,575.11（−5.33%）</span>、
              <span className="dn-tag bear">D-SMA200 $70,260.43（−7.60%）</span>、
              <span className="dn-tag bear">D-EMA200 $72,347.66（−10.27%）</span>、
              <span className="dn-tag bear">W-EMA150 $73,980.54（−12.25%）</span>。
              更高更远、已弃用：W-SMA150 $76,881.69（−15.56%）、W-EMA50
              $77,816.31（−16.57%）、W-EMA100 $78,777.14（−17.59%）、W-SMA50
              $83,359.14（−22.12%）、W-SMA100 $88,662.18（−26.78%）。
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-08-08 00:06Z（close
                $64,900.00）；偏移按 live 现货 $64,920.42 重算。显示的 MA
                水位按 $ 取整、偏移用精确序列值算。周 ladder 按完整
                2019–2026 wildcard（362 根右标周 bar）算、所以 W-SMA200 可
                计算：$63,760.87 未收盘（+1.82%）与 $63,533.52 已结 —— 已结
                值是 trap-watch 周收 200-SMA（重算 08-03 00:11Z、全篇收盘用
                的那条地板）。W-EMA200 $68,575.11（−5.33%）与 W-EMA150
                $73,980.54（−12.25%）是全历史 EMA。日线收盘：08-03
                $63,497.20、08-04 $64,075.50、08-05 $64,633.90、08-06
                $64,300.00、08-07 $64,885.40 —— 08-07 收比 08-06 收高 $585、
                比 D-EMA50 盖 $64,642.78 高 $243：那根 D-EMA50 盖 —— 08-05
                只清过 08-06 备忘点的 $64,612 旧水位（08-05 收 $64,633.90、
                低于当天 D-EMA50 $64,635.09 达 $1.19、还不是一根同日清）、
                08-06 又吐回去 —— 现在被决定性地同日重清、翻成支撑、谱系
                最高收。08-08 bar 在跑、$64,900.00。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子再 gamma 转正 · headline +100.3M / rollup +113.76M（08-07 是 +78.7M / +88.06M）· flip 升到 $63,833、现货 +1.70% 上方 · $65k 墙再厚到 +23.49M 在现货、+$65k–$68k 带合计 +92.56M —— 一道更重的双向阻尼、崩盘 put $60k 松到 −16.15M、strip 上任何地方无负 gamma 块</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子在 08-07 的单日下降后再 gamma 转正 —— headline
                +6.3M → +38.1M → +68.6M → +106.0M → +108.0M → +78.7M →
                +100.3M 跨 08-02 → 08-08 —— 把阻尼加深进回补
              </span>
              。headline GEX 是
              <span className="dn-tag bull">+100.3M / 1%</span>（08-07 是
              +78.7M）、by-expiry rollup 是
              <span className="dn-tag bull">+113.76M</span>（08-07 是 +88.06M；
              by-expiry strip 合到 gex_summary net_gex）。0-γ flip 升
              <span className="dn-tag">$63,174 → $63,833（+$659）</span>、现货
              $64,920 坐在 <span className="dn-tag bull">flip 上方 +1.70%</span>
              （现货口径 64,920.42 / 63,833 − 1 = +1.704%）；GEX 文件自己的
              Deribit idx $65,227（比 live 现货高 $307）读
              <span className="dn-tag bull">+2.18%</span>（65,227 / 63,833 − 1
              = +2.184%、文件取整 +2.2%）—— 两参考都正、现货在 flip 上方两侧
              都成立。墙图是一道更重的正向带盖在现货上、下面是崩盘 put 架：
              <span className="dn-tag bull">$65k +23.49M</span>（最重墙、在现货、
              从 08-07 的 +16.47M 再厚）、
              <span className="dn-tag bull">$68k +20.61M</span>、
              <span className="dn-tag bull">$70k +20.03M</span>、
              <span className="dn-tag bull">$66k +19.64M</span>、
              <span className="dn-tag bull">$67k +16.72M</span>、
              <span className="dn-tag bull">$65.5k +12.10M</span>、
              <span className="dn-tag bull">$72k +10.12M</span>、
              <span className="dn-tag bull">$80k +8.82M</span>、负侧是下面的
              崩盘 put 架：
              <span className="dn-tag bear">$60k −16.15M</span>（最重负、崩盘
              put、从 08-07 的 −17.57M 松）、
              <span className="dn-tag bear">$62k −7.68M</span>。
              <span className="dn-em">
                +$65k–$68k 正向带的五根大 strike 合计 +92.56M（+23.49M /
                +12.10M / +19.64M / +16.72M / +20.61M 叠）—— 比 08-07 的
                +65.82M 重、$65k 墙重新接过头名、成在现货的主导单 strike。
                dealer 在褪势里买、在挤压里卖、横跨整个回补区、夹又收紧了 ——
                08-07 变薄的那道阻尼回来了、两个方向都切：褪时缓冲更厚、但
                反弹的天花板压力也更重、所以加仓是一根穿带的 grind、不是一根冲
              </span>
              。近端：8AUG26 0.3DTE
              <span className="dn-tag bull">+12.45M</span> 仍在本子上（今日
              08:00Z 结算、比此快照晚约 8h）—— 一根正的前端、没有近端负放大
              器。前向 strip：9AUG 1.3 +14.91M、10AUG 2.3 +6.87M、11AUG 3.3
              +2.40M、14AUG 6.3 +15.89M、21AUG 13.3 +15.72M、28AUG 20.3
              +23.72M、25SEP 48.3 +13.00M、30OCT 83.3 +1.45M、25DEC 139.3
              +5.21M、26MAR27 230.3 +1.42M、25JUN27 321.3 +0.72M —— 整条前向
              strip 都正；没有一根负 gamma 块能把本子翻空。
            </p>

            <p>
              IV 中位数横跨链是
              <span className="dn-tag">40.4%</span> 对 30D close-to-close RV
              <span className="dn-tag">28.18%</span> —— 链级溢价
              <span className="dn-tag">~+12.2pt</span>。
              <span className="dn-em">
                是横跨合约的链中位、<em>不是</em>可交易价差；链上合约计是
                830、但 expiry- / strike-level vega、skew、期限结构仍未载入、
                vol 读法保持 framework only。
              </span>{' '}
              Put/Call OI 比 0.58（call OI 206,034 对 put OI 119,056 —— 一本
              call 重的本子、与正 gamma 阻尼一致）。RV 方法：30D
              close-to-close、logret.std × √365 × 100、用最末 30 根日 log
              return（= 连续 31 根日 close）、锚自 parquet 最末 bar
              2026-08-08 00:06Z；底层 31-close 窗区间 $62,307 – $66,522。
              （参考：最末 29 returns / 30 closes 读 28.23%、比 30-return 的
              28.18% 略高 —— 盘面在簇下回补、RV 基本平。）
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · Tier-1 松反转（10Y +6bp 到 4.69%、TIPS +2bp 到 2.43%）· 利率筛 FALSE、走宽到 14bp · HY OAS 松 −4bp 到 2.71%（risk-on）· MOVE 暗第四次渲染 · 跨资产 IDIOSYNCRATIC、但 BTC 7d 转绿、对 NQ 落后收窄到 −2.47pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观的松反转了 —— 10Y 跳 +6bp、实际利率也往上一点 —— 所以
                reclaim-long 利率筛保持 FALSE、走宽到 14bp、离闸更远
              </span>
              。面板渲染 2026-08-07 22:15Z、比快照早约 1.9h。US 10Y nominal
              <span className="dn-tag bear">4.69%（+6.0bp）</span>、regime z
              <span className="dn-tag bear">+2.24</span> —— EXTREME RISK-OFF
              标、平了一天 08-07 后升。10Y TIPS real
              <span className="dn-tag bear">2.43%（+2.0bp）</span>、regime z
              <span className="dn-tag bear">+2.53</span> —— 仍 EXTREME
              RISK-OFF、往上一点。5Y5Y BE 通胀
              <span className="dn-tag">2.28%（−1.0bp）</span>。HY OAS
              <span className="dn-tag bull">2.71%（−4.0bp）</span>、regime z
              <span className="dn-tag bull">−1.03</span> —— 仍松、又收回来
              （risk-on）。MOVE 债波
              <span className="dn-tag stale">不可用（抓取失败）</span> ——
              暗第四次渲染。DXY
              <span className="dn-tag bear">99.96（+0.27）</span> —— 更硬、
              对 08-07 平。Fed 净流动性
              <span className="dn-tag">$5.840T（平）</span>、无新周印。US-JP
              10Y 利差
              <span className="dn-tag bear">2.02%（+6.0bp）</span>；USD/JPY
              <span className="dn-tag bull">157.74（−0.66）</span>（日元更硬）。
              NFCI −0.529（松、陈旧）。
              <span className="dn-em">
                净：reclaim-long 利率筛（10Y &lt; 4.55%）在 4.69% 仍 FALSE、
                离闸走宽到 14bp（08-07 是 8bp）—— 三天的松（4.75% → 4.70% →
                4.63%）在 08-07 停后现在反转往上。10Y 和 TIPS 带 EXTREME
                RISK-OFF regime z（+2.24 / +2.53）；信用侧松了（HY OAS −4bp、
                risk-on）但利率侧对回补走错了方向。MOVE 暗第四次渲染、所以
                债波确认不可用。宏观对回补是逆风、不是顺风 —— scout 站在自己
                的 BTC 内生腿上。
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
                <tr><td>US 10Y nominal</td><td className="num">4.69%</td><td className="num bear">+6.0bp</td><td className="num bear">+2.24</td><td className="bear">EXTREME 紧 · 松反转</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.43%</td><td className="num bear">+2.0bp</td><td className="num bear">+2.53</td><td className="bear">EXTREME 紧 · 往上一点</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.28%</td><td className="num bull">−1.0bp</td><td className="num">—</td><td className="neut">在松</td></tr>
                <tr><td>HY OAS</td><td className="num">2.71%</td><td className="num bull">−4.0bp</td><td className="num bull">−1.03</td><td className="bull">松 · 收回来（risk-on）</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.529</td><td className="num">+0.00</td><td className="num bull">—</td><td className="stale">松 · 陈旧</td></tr>
                <tr><td>MOVE 债波</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">不可用 · 抓取失败（第四次渲染）</td></tr>
                <tr><td>DXY</td><td className="num">99.96</td><td className="num bear">+0.27</td><td className="num">+0.89</td><td className="bear">更硬</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.840T</td><td className="num">平</td><td className="num bear">−0.70</td><td className="neut">无新周印</td></tr>
                <tr><td>USD/JPY</td><td className="num">157.74</td><td className="num bull">−0.66</td><td className="num">+0.34</td><td className="bull">日元更硬</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">2.02%</td><td className="num bear">+6.0bp</td><td className="num">−0.25</td><td className="neut">走宽</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7372</td><td className="num bull">−0.01</td><td className="num bull">−1.48</td><td className="bull">松</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp（月度、67d）</td><td className="num bear">+2.42</td><td className="stale">月度 · 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、汇总 00:00Z ——
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。
              非对角线均值 <span className="dn-tag">|r| 0.204</span>
              （在 0.25 NORMAL 底以下、对 08-07 的 0.212 略松 ——
              <span className="dn-tag">IDIOSYNCRATIC 区段</span>、资产按各自
              驱动在动）。BTC 对风险复合体的对齐：TSLA
              <span className="dn-tag">+0.473</span>（顶）、NQ
              <span className="dn-tag">+0.471</span>、SP500
              <span className="dn-tag">+0.378</span>、NVDA
              <span className="dn-tag">+0.327</span>、JP225 +0.283、COPPER
              +0.250、GOLD +0.247、SILVER +0.234、PLAT +0.226、AMZN +0.214、
              URNM +0.183。7d 相对表现是最大声那行、而 BTC 转绿、重新入队：
              <span className="dn-tag bull">BTC +3.12%</span> —— 回到绿里
              （08-07 是 −0.63%、唯一一根红）、而盘面仍强：NQ
              <span className="dn-tag bull">+5.59%</span>、SP500
              <span className="dn-tag bull">+3.78%</span>、JP225
              <span className="dn-tag bull">+4.06%</span>、大市值与金属领头 ——
              NVDA <span className="dn-tag bull">+12.40%</span>、URNM
              <span className="dn-tag bull">+11.36%</span>、SILVER
              <span className="dn-tag bull">+10.58%</span>、MSFT
              <span className="dn-tag bull">+8.29%</span>、PALL
              <span className="dn-tag bull">+8.17%</span>、GOLD
              <span className="dn-tag bull">+7.55%</span>、PLAT
              <span className="dn-tag bull">+6.89%</span>、META
              <span className="dn-tag bull">+6.76%</span>、TSLA
              <span className="dn-tag bull">+6.14%</span>。能源软：CL
              <span className="dn-tag bear">−11.82%</span>、BRENT
              <span className="dn-tag bear">−9.80%</span>、NGAS
              <span className="dn-tag bear">−4.00%</span>；JPY −0.21% 是另一根红。
              <span className="dn-em">
                BTC 对 TradFi 引擎的 7d 落后收窄到约 −2.47pt（BTC +3.12% 对
                NQ +5.59%、从 08-07 的 −4.48pt）—— BTC 转绿、重新参与、把
                差距从一根绿周里的红收成只是落后一根强周。regime 是
                IDIOSYNCRATIC（|r| 0.204）、所以盘面两向都没在驱动 BTC；这根
                回补是 BTC 内生的、scout 站在自己（现在干净的）仓位腿上、
                不是宏观顺风
              </span>
              。JGB 月度 2.67% 陈旧 —— 不依赖。
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · 本子 FIRES 08-07 预授权的 SCOUT LONG 加仓腿（0.2R → 0.4R、最小 size）· 加仓触发开火 —— 盖在 08-07 收上重清、OI 第一天扩、feed re-sync 后 SM certified 近乎 flat · chase-short STOOD DOWN · 回补是一根穿正 gamma 带的 grind、不是一根冲</span>
            </h2>

            <p>
              <span className="dn-signal">
                08-07 备忘持一根 0.2R scout starter、点了一条加仓路 —— 需求
                确认的重清盖、OI 在堆、一根 certified SM 读。三条腿全开火、
                所以本子按框架开加仓腿
              </span>
              。ADD 干净上膛：08-07 日线收
              <span className="dn-tag bull">$64,885.40</span> —— $243 在
              D-EMA50 盖 $64,642.78 上方、谱系最高收（低于备忘点的整数 ~$64,900
              达 $14.60、但决定性在盖上方、而未收盘 08-08 bar 与现货都在
              $64,900 上）—— OI 扩
              <span className="dn-tag bull">+1,230.0 BTC（+1.16%）</span> 五天
              里第一次、而受损三轮的 SM tell 在 08-07 14:51 BJ feed re-sync
              清掉 08-06 假象后了结到一根
              <span className="dn-tag bull">可 certify 近乎 flat −1,512</span>
              —— 清过「certified SM &gt; −9,000」腿。24h 流向全面被买（现货 CVD
              +2,221.6、期货 CVD +423.9、大单 +1,018.9、taker +437.2）、MTF 印
              一根新鲜 1d 水上强金叉、4h 回金。所以本子
              <span className="dn-em">开火 08-07 备忘预授权的 0.2R 加仓腿、
              按框架允许把 scout 带到 0.2R → 0.4R、最小 size</span>、目标
              $67k–$68k 簇当穿 +92.56M 正 gamma 带的 grind。chase-short 仍
              STOOD DOWN —— 地板守住、gamma 再转更正（+100.3M）、现货 +1.70%
              在 flip 上方。caveat 让加仓保持有度、不激进：funding 第二天
              再热、宏观利率筛走宽、快帧在盖上闪超买。
            </p>

            <div className="dn-trade">
              <span className="dn-side bull">scout · LONG · 框架加仓腿 FIRED（0.2R → 0.4R、08-07 预授权路径、最小 size）· 加仓触发达成（盖重清、OI +1,230、SM certified 近乎 flat）· 穿 +92.56M gamma 带的 grind</span>
              <div className="dn-trade-name">
                回补反弹 scout —— 已加：需求确认的重清盖终于印、SM feed 清掉假象到一根可 certify 的回补、OI 本轮第一次在价格后面堆
              </div>
              <div className="dn-thesis">
                08-06 备忘开了这根 starter、08-07 备忘在一根失败的贴盖一吻上
                一触即砍地持住它。这一轮确认了。ADD 触发三条腿全开火：08-07
                日线收 $64,885（清 $64,643 D-EMA50 盖 $243、谱系最高收）、OI
                扩 +1,230（四缩后第一根堆）、SM feed 在 08-07 14:51 BJ re-sync
                —— 清掉复发的 08-06 假象 —— 到一根可 certify 近乎 flat −1,512
                （一根真回补、short 坐在假象前水位下方 ~7.5k）。dealer 本子
                再 gamma 更正（+100.3M / +113.76M rollup、flip 升到 $63,833、
                现货 +1.70% 上方）、24h 流向被买、MTF 翻上（新鲜 1d 强金叉、
                4h 回金、六帧金叉簇、HTF 底背离）。caveat 让它是一根 grind：
                funding 再热（24h 均值 +3.83% → +5.43%、负数 6 → 0）、宏观
                利率筛走宽到 14bp FALSE、快帧在盖上超买（新鲜 12h TD9 SELL、
                1h 死叉、四帧顶背离）。按框架开 0.2R 加仓腿（0.2R → 0.4R）、
                最小 size；目标簇当 grind、不是追。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">仓位（框架加仓腿已开火）</span><span className="dn-lvl-v bull">框架允许的 0.4R 总仓 —— 0.2R starter 自 ~$64,620（08-06 开仓）+ 0.2R 加仓腿 @ ~$64,900（08-08 重清盖、08-07 预授权的加仓路径）；混合入场 ~$64,760、按最小 size 持</span></div>
                <div><span className="dn-lvl-k">加仓触发（已开火）</span><span className="dn-lvl-v bull">一根 1d 收清过 D-EMA50 盖（$64,885 &gt; $64,643、+$243）AND OI 在堆（+1,230、四天缩反转）AND 一根 CERTIFIED SM net &gt; −9,000（−1,512、feed 已 re-sync）—— 三条全达成</span></div>
                <div><span className="dn-lvl-k">止损（一触即砍）</span><span className="dn-lvl-v bear">1d 收 &lt; $63,833 flip（工作、从 $63,174 升）或 &lt; $63,533 200W 地板（硬）—— 或一根 CERTIFIED SM 滚回空（feed 干净、去假象转净卖）</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">$66,918（D-EMA100）然后 $68,020（D-SMA100）—— 穿 +$65k–$68k / +92.56M 正 gamma 带；当 grind 处理、预期盖区被双向防守</span></div>
                <div><span className="dn-lvl-k">R/R（加仓腿）</span><span className="dn-lvl-v">加 ~$64,900、止损 $63,833 flip = ~$1,067 风险；一目标 $66,918 = ~$2,018 ≈ 1.89:1；二目标 $68,020 = ~$3,120 ≈ 2.92:1 —— 在 D-EMA100 减半</span></div>
              </div>
              <div className="dn-gating">
                <b>硬规则：</b>加仓有度、不激进 —— 需求确认了但杠杆背景没有
                （funding 再热、retail 是唯一泄杠杆腿）、而快帧在盖上超买、
                进一道更重的正 gamma 阻尼。在 D-EMA100 $66,918 减半；<em>不要</em>
                追进簇。第一根 certified 止损砍整仓 —— 一根 1d 收破 $63,833
                flip / $63,533 地板、或一根 certified SM 滚回空。第二次失败
                测试盖（一根 1d 收回 $64,643 下方、OI 滚回来）把加仓修回
                starter。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">flat · chase-short · STOOD DOWN · 地板守住、gamma 再转正 +100.3M、现货 +1.70% 在 flip 上方、SM 干净回补</span>
              <div className="dn-trade-name">
                Chase-short —— 停手：回补重清了盖、本子再 gamma 更正、SM feed 清到一根回补 —— 每条腿都指向错的方向
              </div>
              <div className="dn-thesis">
                chase-short 挂在一根 flip/旧地板破（$63,833 flip / $63,311
                旧地板）AND SM 空 AND aggregate GEX 翻负上。三条都指向错的
                方向、且比 08-07 更错：现货 +1.70% 在升起来的 flip 上方（盘面
                重清了盖、不是破了 flip）、dealer 本子再 gamma 到 +100.3M
                headline / +113.76M rollup —— 比 08-07 重、一道正阻尼、前向
                strip 到 25JUN27 任何地方都没负 gamma 块 —— 而 SM feed 清掉
                假象到一根可 certify 回补（net −1,512）、不是再空。没有一条腿
                上膛、空头停手；$60k 的崩盘 put 架也松到 −16.15M（从 −17.57M）、
                留下边际更少的级联目标。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">re-arm 触发</span><span className="dn-lvl-v bear">1d 收 &lt; $63,833 flip / $63,311 旧地板 AND aggregate GEX 翻负（前段 expiry 内一根新负 gamma 块）AND 一根 CERTIFIED SM 空（feed 干净）</span></div>
                <div><span className="dn-lvl-k">SM 腿（现在干净）</span><span className="dn-lvl-v bull">08-06 feed 假象在 08-07 14:51 BJ 已 CLEARED；SM 是一根可 certify 近乎 flat −1,512（一根回补）、所以 SM-空腿没上膛 —— 需要一根全新 certified 滚回空</span></div>
                <div><span className="dn-lvl-k">re-arm 上的目标</span><span className="dn-lvl-v">$60k（−16.15M 崩盘 put 架）、$62k（−7.68M）在中间 —— 两者对 08-06 都松</span></div>
                <div><span className="dn-lvl-k">不要</span><span className="dn-lvl-v">不要空进一本 +100.3M 正 gamma 的本子、200W 地板守住、价格 +1.70% 在升起来的 flip 上方、SM 干净回补</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveat：</b>整条前向 GEX strip 都正（到 25JUN27 无负 gamma
                块）；一根 gamma 翻要求一根新负块建起来、不只是现货往下漂。
                本子再 gamma 更重（+78.7M → +100.3M）、两向都加厚了阻尼 ——
                一根褪会遇到更多缓冲。在一根负块真正印出、一根 certified SM
                再空出现之前、空头没有腿。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 回补 RESUMED、在堆着的 OI 上重清了盖 · 盯延伸或一根失败的第二次测试</span>
              <div className="dn-trade-name">
                回补盯位 —— RESUMED：08-06 丢的盖在 08-07 被重清、这次踩在一根扩着的 OI 基上、SM 干净回补
              </div>
              <div className="dn-thesis">
                08-07 备忘把一根停在受损 SM tell 上的回补框成持而等、转在
                现货是否在堆着的 OI 上重清盖（开加仓）还是一根 certified 止损
                印。它重清了：08-07 日线收 $64,885 在 $64,643 盖上方、OI 扩
                +1,230（四天缩反转）、SM feed re-sync 到一根可 certify 回补、
                24h 流向被买 —— 四天没露的需求确认终于印了。08-07 备忘预授权
                的 0.2R 加仓腿开火、所以 scout 按框架允许持到 0.4R 总仓、最小
                size、不是一根新方向下注。下一个盯位是回补是否延伸（第二根
                决定性收在盖上、OI 仍在堆、往 $67k–$68k 簇）还是快帧超买 +
                再热 carry 把现货拉回盖下、在一根失败的第二次测试上。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">多头延伸</span><span className="dn-lvl-v bull">第二根 1d 收在 D-EMA50 盖 $64,643 上方、OI 继续堆、funding 不往封顶跑 —— 带加仓往 $66,918（D-EMA100）然后 $68,020（D-SMA100）</span></div>
                <div><span className="dn-lvl-k">空头了结</span><span className="dn-lvl-v bear">1d 收 &lt; $63,833 flip、一根 certified SM 滚回空 —— 砍 scout、如果 gamma 也翻负盯 chase-short re-arm</span></div>
                <div><span className="dn-lvl-k">失败的第二次测试</span><span className="dn-lvl-v bear">一根 1d 收回 $64,643 盖下方、OI 滚回来 —— 把加仓修回 0.2R starter；回补第二次停住</span></div>
                <div><span className="dn-lvl-k">慢帧 tell</span><span className="dn-lvl-v bull">新鲜 1d 水上强金叉 + 4h 回金 + 六帧金叉簇（4h/8h/12h/1d/3d/1w）+ HTF 底背离（8h/12h/1w）—— 慢本子翻上、确认回补</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>一根踩在现在干净仓位 tell 上的确认回补是一根
                加仓、但有度的一根 —— 需求确认了、而杠杆背景（再热 funding）
                和宏观（利率筛走宽）没有、快帧在盖上超买进一道更重的正 gamma
                阻尼。按最小 size 加、一目标减半、按数据了结：第二根决定性收
                在盖上延伸；一根失败的第二次测试或一根 certified SM 滚回空
                修或砍。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 加仓触发三条腿全开火（盖重清、OI 堆、SM certified）所以框架加仓腿开火（0.2R → 0.4R、最小 size）· 本篇转在回补是否延伸往 $67k–$68k 簇、还是超买快帧 + 再热 carry 在一根失败的第二次测试上把现货拉回盖下</span>
            </h2>

            <p>
              08-07 那张决策条件里：scout-ADD 路径<em>开火了</em> —— 08-07
              日线收 $64,885（清 $64,643 盖）、OI 扩 +1,230（四天缩反转）、
              SM 现在是一根 certified 近乎 flat −1,512（&gt; −9,000）在 feed
              re-sync 后；scout-CUT 路径<em>没开火</em> —— 现货守在 flip 和
              地板上方很远、SM tell certify 的是一根回补、不是再空；chase-short
              re-arm <em>没开火</em> —— 现货坐在升起来的 $63,833 flip 上方
              +1.70%、gamma 再转更正（+100.3M）；SM feed 假象<em>了结了</em>
              —— 08-06 11:06 BJ 步被 08-07 14:51 BJ re-sync 清掉、当前本子
              可 certify。<em>持着的 scout 的加仓触发干净开火；本子按框架开
              加仓腿、了结转在回补是延伸还是败一次第二测试。</em>今天条件
              围绕一根框架允许的 0.4R scout（08-07 备忘预授权的 0.2R 加仓腿、
              已按最小 size 开火）、踩在一根现在干净的 SM tell 上重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>回补反弹 scout（多）—— 已加、延伸触发</td><td className="bull">第二根 1d 收在 D-EMA50 盖 $64,643 上方 AND OI 继续堆 AND funding 不往封顶跑</td><td>按框架允许的 size 持 scout（0.2R starter + 已开火的 0.2R 加仓腿、最小 size）；往 $66,918（D-EMA100）然后 $68,020（D-SMA100）推、一目标减半</td></tr>
                <tr><td>Scout 止损 / 砍（一触即砍）</td><td className="bear">1d 收 &lt; $63,833 flip（工作）或 &lt; $63,533 200W 地板（硬）—— 或 feed 干净后一根 CERTIFIED SM 滚回空</td><td>第一根 certified 止损砍整个 scout 仓位</td></tr>
                <tr><td>失败的第二次测试盖</td><td className="bear">一根 1d 收回 $64,643（D-EMA50）下方、OI 滚回来</td><td>把加仓修回 0.2R starter —— 回补第二次停住</td></tr>
                <tr><td>Chase-short（空）—— re-arm</td><td className="bear">1d 收 &lt; $63,833 flip / $63,311 旧地板 AND aggregate GEX 翻负 AND 一根 certified SM 空</td><td>只在一根全新审计触发后重评 chase-short —— 无站立 size；框架目标 $60k（−16.15M 崩盘 put）</td></tr>
                <tr><td>200W 周期地板丢</td><td className="bear">周收 &lt; $63,533.52（200W）—— 会结束 5 周在地板上方的 streak（下一根周收 08-09、明天）</td><td>周期支撑破 —— 另起评估；回补读法结束</td></tr>
                <tr><td>SM feed 假象（RESOLVED）</td><td className="bull">08-06 11:06 BJ +9,765 步被 08-07 14:51 BJ re-sync 清掉；此后约 17h 干净稳住</td><td>SM tell 又可 certify —— 按干净读动手（−1,512、一根回补）；只在一根新单分钟步出现时重挂旗</td></tr>
                <tr><td>reclaim-long 利率筛</td><td className="bear">10Y &lt; 4.55% 收 —— 在 4.69% FALSE（距 14bp 触发、从 8bp 走宽 —— 松反转）</td><td>独立筛 FALSE、往错方向动；宏观是逆风、回补是 BTC 内生的</td></tr>
                <tr><td>BTC 对 TradFi 落后</td><td className="bull">BTC +3.12% 对 NQ +5.59% 7d = −2.47pt 落后 · |r| 0.204 IDIOSYNCRATIC</td><td>BTC 转绿、重新参与（曾是唯一一根红）；regime 在 NORMAL 以下、所以盘面没在驱动 BTC —— 回补是 BTC 内生的</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是
              <span className="dn-signal">
                回补是否延伸 —— 第二根决定性 1d 收在 D-EMA50 盖 $64,643 上方、
                OI 继续堆、funding 不往封顶跑、把 scout 带往 $67k–$68k 簇 ——
                还是超买快帧（新鲜 12h TD9 SELL、1h 死叉、四帧顶背离）和再热
                carry 在一根失败的第二次测试上把现货拉回盖下（把加仓修回
                starter）、或一根干净止损印（一根 1d 收破 $63,833 flip /
                $63,533 地板、或一根 certified SM 滚回空 —— 砍整仓、如果 gamma
                也翻负、盯 chase-short re-arm 往 $60k −16.15M 崩盘 put、不过
                +113.76M 正 strip 和 200W 地板留一条被阻尼的路）
              </span>
              。在那之一印出前、本篇按写好的跑：持着的 scout 在需求确认的
              重清盖上开了加仓腿 —— 08-07 日线收在盖上、OI 第一天扩、SM feed
              清掉假象到一根可 certify 回补、MTF 在一根新鲜 1d 强金叉上翻上
              —— 但杠杆背景再热、宏观利率筛走宽、快帧在盖上超买进一道更重的
              正 gamma 阻尼、所以加仓有度、不是一根追。下一个 24h 的对读是
              <em>按框架允许的 size 持 scout、在 D-EMA100 减半、让延伸确认
              一根第二根收在盖上、第一根 certified 止损砍整仓 —— 穿带 grind、
              不追进簇</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2（已过 codex 敌对式审计 · findings 记于 audits/2026-08-08-desk-note.md）
            </span>
            <b>状态：</b>已过 codex 敌对式审计（STAGE B、hostile-but-fair）。
            判决 PASS-WITH-NOTES —— 0 CRITICAL / 2 MAJOR / 3 MINOR；无 CRITICAL
            发布闸。五条 finding 都在 v2 应用；全文 grep-closure 每条都跑过
            （pattern / 修前命中 / 修后命中）、无残留。
            <b>DN-001</b>（MAJOR —— 08-05「第一根破盖收」高估、丢了前一篇的
            nuance）：搜 <code>first cap-clearing</code> / <code>cleared on
            08-05</code> / <code>re-took the clear</code> —— 修前 3、修后 0；
            改成「08-05 只清过 08-06 备忘点的 $64,612 旧盖、但收 $64,633.90、
            低于当天 D-EMA50 $64,635.09 达 $1.19、不是同日清；08-07 才是决定性
            的同日重清」。RESOLVED（修后 = 0）。
            <b>DN-002</b>（MAJOR —— 前瞻语言超过 0.2R scout 审计范围、变成一根
            confirmed 0.4R 站立多）：搜 <code>confirmed 0.4R long</code> /
            <code>hold the 0.4R</code> / <code>Hold 0.4R</code> /
            <code>scout · LONG · ADDED</code> / <code>let it run</code> ——
            修前 9 处命令式站立多、修后 0；按审计选项 (b) 了结 —— 0.2R 加仓腿
            由 08-07 备忘预授权（交易台流程 provenance）、所以剩下每处 0.4R
            都明确标「框架允许 / 08-07 预授权 / 最小 size」、命令式站立多指令
            移除。RESOLVED（修后 = 0）。
            <b>DN-003</b>（MINOR —— 大单计数标签）：搜 <code>522 prints</code>
            —— 修前 1、修后 0；改成 <code>522 根有大单的分钟</code>（源
            sum(big_count) 是 813；522 = 有非零 big_count 的分钟数）。RESOLVED。
            <b>DN-004</b>（MINOR —— re-sync 后 SM net 区间过窄）：搜
            <code>−2,398</code> —— 修前 2、修后 0；改正到
            <code>−1,157 / −2,456</code>（最空 −2,456.231 @ 08-07 15:16 BJ、
            在干净的 re-sync 后窗内）。RESOLVED。
            <b>DN-005</b>（MINOR —— 假象前 short 时间戳/数值不合脚）：搜
            <code>21.4k</code> / <code>10:15</code> —— 修前 3、修后 0；那根
            ~7.5k 差配 08-06 11:05 BJ short ~21.37k（11:06 假象前一分钟）、
            不是 10:15（~21.99k）—— 改正到 <code>~21.37k（08-06 11:05 BJ）</code>。
            RESOLVED。全部 5 条 finding RESOLVED（修后命中 = 0）、无 UNRESOLVED
            残留、所以 v1 → v2 促进。
            <b>Build note（INFO）：</b>本服务器跑 Node 18.19.1；Next 16.2.6 对
            Node &lt; 20.9.0 硬退出、所以完整 <code>next build</code> 被环境
            阻塞；<code>npx --no-install tsc --noEmit</code> 是 build proxy（exit 0）。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体
            情况个性化。数字反映单一原子快照（2026-08-08 00:05Z）、
            provenance 在数据来源条带中按节披露；宏观 Tier-1 面板渲染
            2026-08-07 22:15Z（比快照早约 1.9h）、部分输入明确陈旧、暗或
            待定并已标注。水位、规模与条件是交易台流程的示例、不是长期推荐。
            过去的相关性、γ 与仓位模式不绑定未来盘面。衍生品有全损风险、
            加杠杆下损失可超过保证金。
            <em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                持着的 scout 的加仓腿开火了 —— 08-07 日线在五天里第一根 OI
                堆上重清了盖、SM feed 终于清掉假象到一根可 certify 回补。但
                carry 再热、快帧在盖上超买、所以加仓是一根穿 gamma 带的 grind、
                不是一根追。按框架加仓腿的最小 size 持、在 D-EMA100 减半、
                第一根 certified 止损砍。
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
            v2 · 2026-08-08 00:05Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            ma200w_trap_watch_state.json · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
