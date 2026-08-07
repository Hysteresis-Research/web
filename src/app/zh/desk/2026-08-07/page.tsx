import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-08-07 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-08-07',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-08-07' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260807() {
  await requireViewer('/zh/desk/2026-08-07');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-08-07 · v2</span>
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
              <span className="dn-big">$64,360</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.41%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-08-07 00:05Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-08-07 00:05Z（行 t=&ldquo;08-07 08:05&rdquo; BJ、即 00:05Z 日锚）</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · pin 在 00:05Z 锚行以求可复现（读时文件
                    tail 已到 00:06Z）· live-tape 的 <code>t</code> 是
                    BJ-local（UTC+8）：00:05Z pin = t &ldquo;08-07 08:05&rdquo;、下游
                    所有 BJ 时间戳在正文里都转成 UTC · 解析时跳过一行坏的半写行
                    （1 / 111,938）· 24h / 4h / 1h 的流向 + funding 窗都从
                    08:04 / 04:04 / 07:04 BJ 开盘那行起（比精确同时钟窗长一行：
                    24h 是 1,442 行）、是每条累积-delta 窗都带的披露性行偏移；
                    同时钟的点对比（SM net 对 08-06 08:05 基）用精确时钟
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-08-07 08:01 BJ（00:01Z）scan</td>
                  <td className="dn-flag">
                    滚动 latest 文件（可盘中前移）· /opt/desk-note/snapshots/2026-08-07-0005/
                    的存档副本才是 pin 源 · 较快照锚约 4 分钟旧 · 含未收盘
                    K 线 · 扫描现货 $64,291、24h −0.52%
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-08-07 00:01Z 快照</td>
                  <td className="dn-flag">
                    较锚约 4 分钟旧 · Deribit idx $64,645 对 live $64,360
                    （比 live 高 $285）· 834 合约 · 7AUG26 0.3DTE +22.79M 仍在本子上
                    （今日 08:00Z 结算、比此快照晚约 8h）· 存档于
                    /opt/desk-note/snapshots/2026-08-07-0005/
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-08-07 00:01Z
                  </td>
                  <td className="dn-flag">滞后约 4 分钟 · 7d 1h bar · 22 资产 · 167 rows · 存档于快照目录</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-08-06 22:15Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.8h · FRED Tier-1：10Y 0.0bp 平在 4.63%
                    （松停了）、TIPS +1bp 到 2.41%、HY OAS +2bp 到 2.75%、
                    DXY +0.27 到 99.96、Fed 净流动性 +0.014T 到 $5.840T ·
                    MOVE 抓取失败（暗、第三次渲染）· NFCI 陈旧 · 存档于快照目录
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-08-07 00:06Z</td>
                  <td className="dn-flag">
                    close $64,355.20（未收盘 08-07 bar）· 偏移按 live 现货
                    $64,359.99 重算 · 周 ladder 按完整 2019–2026 wildcard
                    （362 根周 bar）· W-SMA200 $63,758.15 未收盘 / $63,533.52
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
                    状态作 live 替代 · 下一根周收 2026-08-09
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED 月度 · IRLTLT01JPM156N</td>
                  <td className="dn-flag">陈旧 · 月度（66d）· 不作实时</td>
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
              <span className="dn-v">+0.90%</span>
              <span className="dn-src">live · funding 字段 0.000826/8h × 1095 = +0.90% ann · 24h 均值 +3.83%（08-06 是 +3.06% —— 再firm +0.77pt）· 6 / 1442 采样行转负（08-06 是 58 / 1441 —— 负数又薄回去了）· 最大 +8.20% ann @ 08-06 10:21 BJ（02:21Z 08-06）、最小 −0.06% @ 08-06 19:08 BJ（11:08Z 08-06）</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h 均值</span>
              <span className="dn-v bear">+3.06% → +3.83%（再firm +0.77pt）</span>
              <span className="dn-src">08-06 的冷却<em>部分反转</em> —— 58 根负行薄回到 6、多头 carry 从上一根 flush 里再firm 起来；还不是 08-05 那种失控再热（均值远在 +6.00% 封顶的一半以下）、但 scout 挂着的那根泄杠杆顺风停了、还掉头往上</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−1.28%（−1,369.6 BTC）</span>
              <span className="dn-src">live · 第四根连续缩、也是最大一根（08-04 −628.7、08-05 −326.9、08-06 −1,112.5、现在 −1,369.6）· 现在 105,752 BTC 对 24h 前 107,122 · 仓位穿过褪回盖下方一路在泄 —— 四天缩本子、没新需求堆</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bear">54.84 / 45.16</span>
              <span className="dn-src">live_db `mkt_long_pct` · 从 53.42（24h 前）重新拥挤 +1.42pt 到 54.84 · 24h 区间 52.56 / 54.96 —— retail 又靠回多侧进这根褪、正是 scout 要的 de-crowd 的反面</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v stale">−16.44k RAW / ≈ −7.13k 去假象（DATA-IMPAIRED）</span>
              <span className="dn-src">live · RAW long 13.88k − short 30.32k = −16.44k、但一根单分钟步 @ 08-06 11:06 BJ（03:06Z 08-06）—— Δlong +456.7、Δshort +9,765.1 —— 是复发的 BJ re-sync 假象、把 short 从 21.4k 抬到 31.1k · 把 11:06 当作一次完整 feed re-sync（两条腿都去掉）后、去假象 long ≈ 13.42k / short ≈ 20.55k → net ≈ −7.13k · net 谷（最空）−18,990 @ 08-06 11:06 BJ（假象那分钟）；峰（最不空）−9,021 @ 08-06 10:15 BJ —— 这根 raw 再空是一个 feed 步、不是真滚仓</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对同时钟 24h 基</span>
              <span className="dn-v stale">−9,038 → −16,439 RAW（−7,400）/ 去假象 +1,909 COVER —— IMPAIRED</span>
              <span className="dn-src">RAW ΔNet −7,399.6（Δlong +802.0、Δshort +8,201.6）；那根 +9,765.1 单分钟 short 步 @ 08-06 11:06 BJ = −9,308.4 的 ΔNet、约 126% 的 raw 移动 · 去假象 ΔNet +1,908.8（一根 COVER）· RAW 切幅 |−7,400|/9,038 = 81.9%；去假象 +1,909/9,038 = 21.1% cover · 和 08-02 / 08-04 同一失败模式 —— SM 信号本次不可 certify</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">40.5% / 28.47%</span>
              <span className="dn-src">GEX IV 中位数对 30D close-to-close RV（30 returns / 31 closes、logret.std × √365 × 100）· 链级溢价 ~+12.0pt · IV 中位数是横跨合约的链中位、<em>不是</em>可交易价差 · P/C OI 0.53（call 225,906 / put 119,163）· 31-close 区间 $62,255 – $66,522 ·（29 returns 读 28.52%、略高 —— RV 在盖下基本平）</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+1.88%（在上方）</span>
              <span className="dn-src">flip $63,174（08-06 是 $63,191、掉了 −$17）· 对 live 现货 $64,359.99（+1.88%；64,359.99/63,174 − 1 = 1.877%）/ GEX 文件 Deribit idx $64,645（+2.33%；64,645/63,174 − 1 = 2.329%、文件取整 +2.3%）—— 两参考都正 · headline GEX +78.7M、by-expiry rollup +88.06M（08-06 是 +108.0M / +121.04M —— 本子变轻但仍正）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                已开的 scout 在盖上褪了。08-06 日线收回 08-06 备忘要它清过的
                D-EMA50 盖<em>下方</em> —— 那一吻没守住 —— 而本该逼砍的 SM
                再空又是那根复发 feed 假象、所以本子<em>持</em>最小 size
                starter、但不加
              </span>
              。现货
              <span className="dn-tag bear">$64,360、24h −0.41%</span>；08-06
              日线收 <span className="dn-tag bear">$64,300.00</span> —— 一根
              −$334 的下日、落回
              <span className="dn-tag bear">D-EMA50 盖 $64,611 下方</span>、所以
              scout 要加的那根决定性突破<em>没</em>印。需求侧继续缺席：
              <span className="dn-tag bear">OI 第四根连续缩 −1.28%（−1,369.6
              BTC）、本轮最大</span>、每条 24h 流向读都在卖。但硬砍也<em>没</em>
              干净开火 —— 现货
              <span className="dn-tag bull">+1.88% 守在 $63,174 flip 上方</span>、
              +1.30% 守在 $63,533 200W 地板上方、而 SM「滚回空」那条砍腿
              <span className="dn-tag stale">DATA-IMPAIRED</span>：raw 再空
              −9,038 → −16,439 全是一根 +9,765 short 步 @ 08-06 11:06 BJ
              （复发的 BJ re-sync 假象）；去假象 ΔNet
              <span className="dn-tag bull">+1,909、一根 COVER</span>、所以这条
              信号两个方向都不可 certify —— 和 08-02 / 08-04 同一失败模式。
              绕着这块暗斑、杂色信号叠着：
              <span className="dn-tag bear">funding 再firm（24h 均值 +3.06% →
              +3.83%、负数 58 → 6）</span>、retail 重新拥挤（+1.42pt 到 54.84）
              —— 泄杠杆顺风停了还掉头 —— 而 dealer 本子
              <span className="dn-tag bull">变轻到 +78.7M / +88.06M rollup</span>
              （从 +108.0M / +121.04M、仍正、没负块）、MTF regime
              <span className="dn-tag bear">翻回 6/9 周期反转</span>、带一根
              新鲜 4h 死叉。本子：<span className="dn-tag">持 0.2R scout
              starter</span>（无干净止损、SM 砍不可 certify）、不加（需求未确认、
              盖又丢）、一触即砍（一根 certified 1d 收破 flip/地板、或 feed
              干净后一根 certified SM 再空）；chase-short 仍 STOOD DOWN
              （地板守住、gamma +78.7M 正、现货 +1.88% 在 flip 上方）。
            </p>

            <p>
              BTC 报 <span className="dn-tag">$64,360</span> live、
              <span className="dn-tag bear">−0.41%</span> 在 24h（live-tape
              窗；08:01 BJ 的 MTF 扫描在它自己的 24h 基上读 −0.52% —— 约 4
              分钟偏移加不同的窗口开盘解释这道小差），在一条
              <span className="dn-tag">$64,982 / $64,178</span> 区间里（24h
              高 @ 13:09Z 08-06 / 21:09 BJ、低 @ 13:33Z 08-06 / 21:33 BJ）。
              <span className="dn-signal">回补停住、盖又被丢</span>：08-04 收
              $64,075.50、08-05 收 $64,633.90（开 scout 的破盖收）、08-06 收
              <span className="dn-tag bear">$64,300.00</span> —— 一根 $334
              下日、把清过的印吐回去、又收在 D-EMA50 盖下方。两根日线偏移仍
              坐在现货下方：
              <span className="dn-tag bull">D-SMA50 $63,294.50（+1.68%）</span>、
              <span className="dn-tag bull">D-EMA20 $64,076.80（+0.44%）</span>
              —— 但数目从 08-06 的三根掉了、因为
              <span className="dn-tag bear">D-SMA20 $64,391.03（−0.05%）</span>
              随现货滑到它下方而翻到头顶。承重的盖就在上面、未清：
              <span className="dn-tag bear">D-EMA50 $64,611.49（−0.39%）</span>
              —— 08-06 褪后现货坐回它下方 —— 然后一道跳空到
              <span className="dn-tag bear">D-EMA100 $66,948.71（−3.87%）</span>。
              <span className="dn-em">
                08-06 备忘要来 ADD 的那一根收盘 —— 一根决定性 1d 收清过升起来
                的盖（&gt; ~$64,900）、OI 在堆、SM &gt; −9,000 —— 没印。相反
                08-06 日线收 $64,300、收回盖下方、在第四天 OI 缩上。scout 的
                加仓触发没上膛；问题现在是 starter 是活下来还是被砍。
              </span>{' '}
              08-06 的分叉往下了结回去：盘面 08-05 清过的盖、08-06 又吐回去、
              本子停在它下方、进第四天缩着的 OI 基。
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面 · SM 再空又是那根 BJ re-sync 假象（去假象 +1,909、一根 cover）—— 信号 DATA-IMPAIRED · funding 再firm、retail 重新拥挤（泄杠杆顺风反转）· OI 第四天缩 —— 仍无新需求</span>
            </h2>

            <p>
              <span className="dn-signal">
                SM 盘面读到一根大再空 —— 但它是那根复发 feed 假象、所以信号
                不可 certify
              </span>
              。RAW SM net 是 <span className="dn-tag bear">−16,439</span> 对
              同时钟 24h 基 −9,038 —— 一根 raw ΔNet
              <span className="dn-tag bear">−7,400</span>（Δlong +802、Δshort
              +8,202）、看着像一根 81.9% 再空。但
              <span className="dn-em">一根 +9,765.1 单分钟 short 步 @ 08-06
              11:06 BJ（03:06Z 08-06）—— 复发的 BJ re-sync 假象 —— 把 short
              从 21.4k 抬到 31.1k、占了 ΔNet 的 −9,308、约 126% 的 raw
              移动</span>。去假象后 —— 把 11:06 那整根 re-sync 步（+457 long
              和 +9,765 short 两条腿）都去掉 —— long 走 ~13.42k、short ~20.55k、
              net ~−7.13k、ΔNet 是
              <span className="dn-tag bull">+1,909、一根 COVER</span>
              （−9,038 基的 21.1%）、根本不是一根再空。这正是污染 08-02 和
              08-04 信号的那个失败模式：raw 印说一回事、去假象序列说反面、
              所以 SM 仓位读法
              <span className="dn-tag stale">DATA-IMPAIRED</span>、既上不了
              chase-short 的 SM-空腿、也逼不出 scout 的砍。SM net 谷（最空）
              <span className="dn-tag bear">−18,990 @ 08-06 11:06 BJ</span> 就是
              假象那分钟本身；net 峰（最不空）
              <span className="dn-tag bull">−9,021 @ 08-06 10:15 BJ</span> 就坐
              在它前面 —— 这道断口是一根 feed re-sync、不是本子真滚。
            </p>

            <p>
              杠杆侧是再firm、不是继续 flush —— 08-06 冷却的一次反转、也是
              scout 要的 de-crowd 的反面。
              <span className="dn-signal">
                funding 掉头往上、负数薄了出去
              </span>
              ：live <span className="dn-tag">+0.90% ann</span>（字段
              0.000826/8h × 1095）、24h 均值
              <span className="dn-tag bear">+3.83% ann</span>（对 08-06 的
              +3.06% —— 一根 +0.77pt 再firm）、窗内只带
              <span className="dn-tag bear">6 / 1442 负行</span>（对 08-06 的
              58 / 1441 —— 负数又薄回去了）。还不是 08-05 那种失控再热（均值
              远在 +6.00% 封顶的一半以下）、但 carry 停了泄、掉头往上。区间
              <span className="dn-tag">−0.06% / +8.20% ann</span>（最大 @
              08-06 10:21 BJ / 02:21Z 08-06、最小 @ 08-06 19:08 BJ / 11:08Z
              08-06）；未钉封顶。OI Δ
              <span className="dn-tag bear">−1,369.6 BTC（−1.28%）</span>
              跨 24h —— 第四根连续缩、也是本轮最大（08-04 −628.7、08-05
              −326.9、08-06 −1,112.5、现在 −1,369.6；107,122 → 105,752）、
              所以仓位穿这根褪一路在泄。
              <span className="dn-em">这是打断多头读法的那根张力</span>：
              scout 要 OI 开始在价格后面堆来确认需求；结果它第四天缩、所以
              回补仍是一根回补 / 去杠杆 grind、后面没新多堆。retail
              <span className="dn-tag bear">mkt_long_pct 54.84%</span> 从
              53.42% —— 一根 +1.42pt 重新拥挤（24h 区间 52.56 / 54.96）、进
              这根褪又靠回多侧。perp 对现货
              <span className="dn-tag bear">−$58.07 折价</span> 在快照
              （1h 均 −$55.91、区间 −$87.30 / −$36.12；4h 均 −$54.65；24h 均
              −$63.34、区间 −$169.82 / −$14.82 —— 整窗持续折价）。1 分钟
              aggressor skew 快照
              <span className="dn-tag bull">+7.1</span>（1h 均 −4.93、区间
              −29.3 / +19.0）—— 快照上一档边际买倾斜、在一根双向小时里。
              <span className="dn-em">
                funding 再firm + retail 重新拥挤 + OI 第四天缩：scout 挂着的
                泄杠杆腿全反转或没确认。本该定案的 SM cover/再空信号被 feed
                假象污染。所以仓位本子对多头不再是加分 —— 它是中性偏负、
                且不可 certify、这就是 scout 按最小 size 持、什么都不加的原因。
              </span>
            </p>

            <p>
              窗口流向说这根褪是全面被卖、最新一小时分裂。
              <span className="dn-em">24h 读法对一根负价格全是被卖</span>：24h
              价格 <span className="dn-tag bear">−0.41%</span>、OI
              <span className="dn-tag bear">−1,369.6 BTC</span>、现货 CVD
              <span className="dn-tag bear">Δ −1,514.3</span>、期货 CVD
              <span className="dn-tag bear">Δ −333.7</span>、大单
              <span className="dn-tag bear">−718.3 BTC / 729 笔</span>、
              taker-net <span className="dn-tag bear">−333.7</span> ——
              <span className="dn-em">
                现货 aggressor、期货 aggressor、大单与 taker 全在卖、OI 在缩：
                一根干净的被卖褪、整窗没有哪一侧在买（本次窗内无 CVD reset、
                所以 24h delta 干净）
              </span>
              。~4h（行窗 04:04 → 08:05 BJ、比精确时钟长一行）：价格
              <span className="dn-tag bear">−0.24%</span>、OI
              <span className="dn-tag bull">+20.0 BTC</span>、现货 CVD
              <span className="dn-tag bear">Δ −851.6</span>、期货 CVD
              <span className="dn-tag bear">Δ −782.8</span>、大单
              <span className="dn-tag bear">−384.4 BTC / 63 笔</span>、
              taker-net <span className="dn-tag bear">−782.8</span> ——
              <em>现货和期货两侧都被卖、OI 基本平 —— 一根往下 grind、仓位既
              不堆也不级联</em>。~1h（行窗 07:04 → 08:05 BJ、比精确时钟长
              一行）：价格
              <span className="dn-tag">+0.01%</span>、OI
              <span className="dn-tag bull">+207.8 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +188.5</span>、期货 CVD
              <span className="dn-tag bear">Δ −328.3</span>、大单
              <span className="dn-tag bear">−296.2 BTC / 22 笔</span>、
              taker-net <span className="dn-tag bear">−328.3</span> ——
              <em>最新一小时分裂：现货买（+188）而期货 / taker 卖（−328）、
              OI 微升 —— 一根现货主导的在低位企稳、但仍被期货卖压着</em>。24h
              那根褪是干净被卖、4h 两侧往下 grind、1h 显示现货想在持续期货卖
              下探底。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 图 · regime 翻回 6/9 周期反转（JT&lt;0）· 整体高级别偏空 · 短线反弹 · 一根新鲜 4h 水上死叉加进 1h · 但 8h TD9 SELL 没了、4 帧水下金叉簇 + HTF 底背离（8h/12h/1w）仍说慢本子偏上</span>
            </h2>

            <p>
              <span className="dn-signal">
                regime 翻回周期反转、净读硬到高级别偏空 · 短线反弹 —— 快帧在
                盖上翻了、而慢簇仍偏上
              </span>
              。regime 标现在是
              <span className="dn-tag bear">6/9 周期反转体制（JT&lt;0）——
              cycle-reversal / 均值回归</span>（从 08-06 的 5/9 趋势延续 JT≥0
              翻回）、头部净读是
              <span className="dn-tag bear">高级别偏空 · 短线反弹（HTF
              lean-short、short-term bounce）</span>。快帧翻了：一根
              <span className="dn-tag bear">新鲜 4h 水上死叉（刚印）</span> 加进
              <span className="dn-tag bear">1h 水上死叉（15b）</span>、顶背离簇
              横跨 15m/30m/1h/4h/1d（5 帧）。但慢本子仍偏上：水下金叉簇守在
              <span className="dn-tag bull">8h（11b）/ 12h（5b）/ 3d（9b）/
              1w（2b）</span> —— 四帧 —— 底背离簇守在
              <span className="dn-tag bull">1h / 8h / 12h / 1w</span>（四帧、
              HTF 偏重）、而关键是
              <span className="dn-tag bull">08-06 的 8h ⚡TD9 SELL 没了</span>
              （现在 8h Buy 2、水下金叉 11b）—— 那根标出褪的「盖上超买」告警
              已经 reset。15m 和 1M 都带
              <span className="dn-tag bull">⚡TD9 BUY</span>（帧栈的顶和底各
              一根超卖提示）；12h 是 Sell 8（→9?）。
              <span className="dn-em">
                直读：眼下动量翻了（regime 回周期反转、新鲜 4h 死叉加进 1h、
                五根快帧顶背离）、这正是 scout 在硬扛的那根褪。但慢结构仍偏上
                （四帧金叉簇、HTF 底背离在 8h/12h/1w、8h TD9 卖 reset 成买）、
                所以支持 scout 的那根慢翻没断 —— 酸掉的是快帧、不是慢帧。
                这道分裂就是本子持而不砍的原因。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>读</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">64,291</td><td className="num">40.6</td><td className="neut">死叉（水下）7b</td><td className="bear">云下 15b</td><td>⚡ TD9 BUY</td><td>偏空 · TD9 买</td></tr>
                <tr><td>30m</td><td className="num">64,291</td><td className="num">40.5</td><td className="neut">死叉（水下）12b</td><td className="bear">云下 7b</td><td>Buy 6</td><td>偏空 · 底背离藏</td></tr>
                <tr><td>1h</td><td className="num">64,291</td><td className="num">41.6</td><td className="bear">死叉（水上）15b</td><td className="neut">云内 64.2–64.5k</td><td>Buy 7</td><td>偏空 · 顶背离 · 底背离</td></tr>
                <tr><td>4h</td><td className="num">64,291</td><td className="num">53.3</td><td className="bear">死叉（水上）刚印</td><td className="bull">云上 9b</td><td>Buy 5</td><td>谨慎 · 顶背离</td></tr>
                <tr><td>8h</td><td className="num">64,291</td><td className="num bull">53.1</td><td className="bull">金叉（水下）11b</td><td className="bear">云下 1b</td><td>Buy 2</td><td>偏上 · 底背离（TD9 卖没了）</td></tr>
                <tr><td>12h</td><td className="num">64,291</td><td className="num bull">52.4</td><td className="bull">金叉（水下）5b</td><td className="neut">云内 62.3–64.8k</td><td>Sell 8→9?</td><td>谨慎 · 底背离</td></tr>
                <tr><td>1d</td><td className="num">64,291</td><td className="num">51.3</td><td className="bear">死叉（水上）11b</td><td className="neut">云内 62.5–67.9k</td><td>Sell 4</td><td>偏空 · 顶背离</td></tr>
                <tr><td>3d</td><td className="num">64,288</td><td className="num">45.8</td><td className="bull">金叉（水下）9b</td><td className="bear">云下 22b</td><td>Sell 2</td><td>偏空 · 趋势</td></tr>
                <tr><td>1w</td><td className="num">64,288</td><td className="num">40.0</td><td className="bull">金叉（水下）2b</td><td className="bear">云下 27b</td><td>Sell 1</td><td>谨慎 · 底背离 · SMA200 +0.83%</td></tr>
                <tr><td>1M</td><td className="num">64,288</td><td className="num">44.0</td><td className="neut">—</td><td className="bull">云上 30b</td><td>⚡ TD9 BUY</td><td>偏多 · 趋势</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 08:01 BJ（00:01Z）scan（滚动
                    latest 文件；逐字存档于
                    /opt/desk-note/snapshots/2026-08-07-0005/）。头部告警：
                    <em>4h 水上死叉（刚印）、1h 水上死叉（15b）、15m ⚡TD9 BUY、
                    1M ⚡TD9 BUY；08-06 的 8h ⚡TD9 SELL 没了（reset 成 8h
                    Buy 2）</em>；4 帧水下金叉簇 8h/12h/3d/1w。顶背离 5：
                    15m/30m/1h/4h/1d · 底背离 4：1h/8h/12h/1w。regime 6/9
                    周期反转（JT&lt;0）；整体高级别偏空、短线反弹。扫描现货
                    $64,291、24h −0.52%、H/L $64,972 / $64,111、qVol $6.41B、
                    净计 2 多 / 4 空 / 4 中性。收盘为未收盘 K 线；每个值在各
                    TF 收盘前按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵读的是一根摸到盖、停在它下方的回补。现货 $64,360 坐在
              <span className="dn-tag bull">D-SMA50 $63,294.50 上方 +1.68%</span>、
              <span className="dn-tag bull">D-EMA20 $64,076.80 上方 +0.44%</span>
              —— 两根正日线偏移（从 08-06 的三根掉了）—— 未收盘的
              <span className="dn-tag bull">W-SMA200 $63,758.15（+0.94%）</span>
              和已结的 200W 周期地板
              <span className="dn-tag bull">$63,533.52（+1.30%）</span> 在下方。
              头顶、现货滑回它 08-06 还守着的两根下方：
              <span className="dn-tag bear">D-SMA20 $64,391.03（−0.05%）</span>
              （刚翻到头顶）和承重的
              <span className="dn-tag bear">D-EMA50 盖 $64,611.49（−0.39%）</span>
              —— 08-05 收清过、08-06 褪又吐回去的那根盖 —— 然后一道跳空到
              <span className="dn-tag bear">D-EMA100 $66,948.71（−3.87%）</span>、
              <span className="dn-tag bear">D-SMA100 $68,128.70（−5.53%）</span>、
              <span className="dn-tag bear">W-EMA200 $68,569.69（−6.14%）</span>、
              <span className="dn-tag bear">W-SMA20 $69,202.97（−7.00%）</span>、
              <span className="dn-tag bear">D-SMA150 $69,433.46（−7.31%）</span>、
              <span className="dn-tag bear">D-EMA150 $69,681.58（−7.64%）</span>、
              <span className="dn-tag bear">D-SMA200 $70,375.23（−8.55%）</span>、
              <span className="dn-tag bear">D-EMA200 $72,417.24（−11.13%）</span>、
              <span className="dn-tag bear">W-EMA150 $73,973.33（−13.00%）</span>。
              更高更远、已弃用：W-SMA150 $76,878（−16.28%）、W-EMA50 $77,795
              （−17.27%）、W-EMA100 $78,766（−18.29%）、W-SMA50 $83,348
              （−22.78%）、W-SMA100 $88,657（−27.41%）。
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-08-07 00:06Z（close
                $64,355.20）；偏移按 live 现货 $64,359.99 重算。显示的 MA
                水位按 $ 取整、偏移用精确序列值算。周 ladder 按完整
                2019–2026 wildcard（362 根右标周 bar）算、所以 W-SMA200 可
                计算：$63,758.15 未收盘（+0.94%）与 $63,533.52 已结 —— 已结
                值是 trap-watch 周收 200-SMA（重算 08-03 00:11Z、全篇收盘用
                的那条地板）。W-EMA200 $68,569.69（−6.14%）与 W-EMA150
                $73,973.33（−13.00%）是全历史 EMA。日线收盘：08-02
                $63,550.00、08-03 $63,497.20、08-04 $64,075.50、08-05
                $64,633.90、08-06 $64,300.00 —— 08-06 收比 08-05 收低 $334、
                比 D-EMA50 盖 $64,611 低 $311：盘面 08-05 清过的盖 08-06 又
                吐回去了、所以回补是停了、不是延伸。08-07 bar 在跑、$64,355.20。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子变轻但仍正 · headline +78.7M / rollup +88.06M（08-06 是 +108.0M / +121.04M）· flip 松到 $63,174、现货 +1.88% 上方 · $65k 墙松到 +16.47M、崩盘 put $60k 松到 −17.57M —— 一道更轻的双向阻尼、仍无负 gamma 块</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子日内第一次减正 gamma、但仍净正 —— 阻尼变轻、没翻
              </span>
              （headline 谱系 +6.3M → +38.1M → +68.6M → +106.0M → +108.0M →
              +78.7M、跨 08-02 → 08-07、本轮第一根日内下降）。headline GEX 是
              <span className="dn-tag bull">+78.7M / 1%</span>（08-06 是
              +108.0M）、by-expiry rollup 是
              <span className="dn-tag bull">+88.06M</span>（08-06 是 +121.04M；
              by-expiry strip 合到 gex_summary net_gex $88.06M）。0-γ flip 松
              <span className="dn-tag">$63,191 → $63,174（−$17）</span>、现货
              $64,360 坐在 <span className="dn-tag bull">flip 上方 +1.88%</span>
              （现货口径 64,359.99 / 63,174 − 1 = +1.877%）；GEX 文件自己的
              Deribit idx $64,645（比 live 现货高 $285）读
              <span className="dn-tag bull">+2.33%</span>（64,645 / 63,174 − 1
              = +2.329%、文件取整 +2.3%）—— 两参考都正、现货在 flip 上方两侧
              都成立。墙图是一道更轻的正向带盖在现货上、下面是崩盘 put 架：
              <span className="dn-tag bull">$70k +18.24M</span>（现在最重墙）、
              <span className="dn-tag bull">$65k +16.47M</span>（在现货、从
              08-06 的 +26.35M 松）、
              <span className="dn-tag bull">$66k +15.35M</span>、
              <span className="dn-tag bull">$68k +14.94M</span>、
              <span className="dn-tag bull">$67k +12.72M</span>、
              <span className="dn-tag bull">$72k +9.50M</span>、
              <span className="dn-tag bull">$80k +8.43M</span>、
              <span className="dn-tag bull">$64.5k +6.34M</span>、负侧是下面的
              崩盘 put 架：
              <span className="dn-tag bear">$60k −17.57M</span>（最重负、崩盘
              put、从 08-06 的 −17.88M 松）、
              <span className="dn-tag bear">$58k −5.37M</span>。
              <span className="dn-em">
                +$64.5k–$68k 带的五根大 strike 合计 +65.82M（+6.34M /
                +16.47M / +15.35M / +12.72M / +14.94M 叠）—— 比 08-06 的
                +87.82M 轻、$65k 墙不再是主导单 strike（从 +26.35M 松到
                +16.47M、$70k 接过头名）。dealer 仍在褪势里买、在挤压里卖、
                横跨整个回补区、但夹得更松了 —— 压住 08-05 突破的那道阻尼变
                薄、两个方向都切：反弹的天花板压力更小、但褪时的地板缓冲也更薄
              </span>
              。近端：7AUG26 0.3DTE
              <span className="dn-tag bull">+22.79M</span> 仍在本子上（今日
              08:00Z 结算、比此快照晚约 8h）—— 一根正的前端、没有近端负放大
              器。前向 strip：8AUG 1.3 +3.18M、9AUG 2.3 +3.53M、10AUG 3.3
              +0.54M、14AUG 7.3 +9.03M、21AUG 14.3 +12.23M、28AUG 21.3
              +19.17M、25SEP 49.3 +9.99M、30OCT 84.3 +1.16M、25DEC 140.3
              +4.52M、26MAR27 231.3 +1.21M、25JUN27 322.3 +0.71M —— 整条前向
              strip 都正；没有一根负 gamma 块能把本子翻空。
            </p>

            <p>
              IV 中位数横跨链是
              <span className="dn-tag">40.5%</span> 对 30D close-to-close RV
              <span className="dn-tag">28.47%</span> —— 链级溢价
              <span className="dn-tag">~+12.0pt</span>。
              <span className="dn-em">
                是横跨合约的链中位、<em>不是</em>可交易价差；链上合约计是
                834、但 expiry- / strike-level vega、skew、期限结构仍未载入、
                vol 读法保持 framework only。
              </span>{' '}
              Put/Call OI 比 0.53（call OI 225,906 对 put OI 119,163 —— 一本
              call 重的本子、与正 gamma 阻尼一致）。RV 方法：30D
              close-to-close、logret.std × √365 × 100、用最末 30 根日 log
              return（= 连续 31 根日 close）、锚自 parquet 最末 bar
              2026-08-07 00:06Z；底层 31-close 窗区间 $62,255 – $66,522。
              （参考：最末 29 returns / 30 closes 读 28.52%、比 30-return 的
              28.47% 略高 —— 盘面在盖下切、RV 基本平。）
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · Tier-1 松停了（10Y 平在 4.63%、TIPS +1bp 到 2.41%、HY OAS +2bp 到 2.75%）· 利率筛仍 FALSE 在 8bp（不变）· MOVE 暗第三次渲染 · 跨资产 regime IDIOSYNCRATIC · BTC 7d 转红、落后一条仍强的风险盘</span>
            </h2>

            <p>
              <span className="dn-signal">
                三天的宏观松停了 —— 10Y 平、实际利率与信用又往上一点 —— 所以
                reclaim-long 利率筛在 8bp 保持 FALSE、离闸没更近
              </span>
              。面板渲染 2026-08-06 22:15Z、比快照早约 1.8h。US 10Y nominal
              <span className="dn-tag">4.63%（0.0bp）</span>、regime z
              <span className="dn-tag bear">+1.95</span> —— RISK-OFF 标、松了
              三天后平。10Y TIPS real
              <span className="dn-tag bear">2.41%（+1.0bp）</span>、regime z
              <span className="dn-tag bear">+2.47</span> —— 仍 EXTREME
              RISK-OFF、往上一点。5Y5Y BE 通胀
              <span className="dn-tag">2.26%（−1.0bp）</span>。HY OAS
              <span className="dn-tag bear">2.75%（+2.0bp）</span>、regime z
              <span className="dn-tag bull">−0.79</span> —— 仍松、走宽一点。
              MOVE 债波
              <span className="dn-tag stale">不可用（抓取失败）</span> ——
              暗第三次渲染。DXY
              <span className="dn-tag bear">99.96（+0.27）</span> —— 更硬。
              Fed 净流动性
              <span className="dn-tag bull">$5.840T（+0.014T）</span>、当日被
              补一点。US-JP 10Y 利差
              <span className="dn-tag">1.96%（0.0bp）</span>；USD/JPY
              <span className="dn-tag">157.70（+0.00）</span>。NFCI −0.529
              （松、陈旧）。
              <span className="dn-em">
                净：reclaim-long 利率筛（10Y &lt; 4.55%）在 4.63% 仍 FALSE、
                离闸 8bp 但不再收窄 —— 三天的松（4.75% → 4.70% → 4.63%）在
                这里平了、而 TIPS / HY OAS 反而往上一点。10Y 和 TIPS 仍带
                RISK-OFF / EXTREME RISK-OFF regime z（+1.95 / +2.47）；平的
                一天不改 regime 读。MOVE 暗第三次渲染、所以债波确认不可用。
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
                <tr><td>US 10Y nominal</td><td className="num">4.63%</td><td className="num">0.0bp</td><td className="num bear">+1.95</td><td className="bear">紧 · 松停了</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.41%</td><td className="num bear">+1.0bp</td><td className="num bear">+2.47</td><td className="bear">EXTREME 紧 · 往上一点</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.26%</td><td className="num bull">−1.0bp</td><td className="num">—</td><td className="neut">在松</td></tr>
                <tr><td>HY OAS</td><td className="num">2.75%</td><td className="num bear">+2.0bp</td><td className="num bull">−0.79</td><td className="bull">松 · 走宽一点</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.529</td><td className="num">—</td><td className="num bull">—</td><td className="stale">松 · 陈旧</td></tr>
                <tr><td>MOVE 债波</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">不可用 · 抓取失败（第三次渲染）</td></tr>
                <tr><td>DXY</td><td className="num">99.96</td><td className="num bear">+0.27</td><td className="num">—</td><td className="bear">更硬</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.840T</td><td className="num bull">+0.014T</td><td className="num">—</td><td className="neut">当日被补一点</td></tr>
                <tr><td>USD/JPY</td><td className="num">157.70</td><td className="num">+0.00</td><td className="num">—</td><td className="neut">平</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">1.96%</td><td className="num">0.0bp</td><td className="num">—</td><td className="neut">平</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7402</td><td className="num bull">−0.01</td><td className="num">—</td><td className="bull">松</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">（月度、66d）</td><td className="num bear">—</td><td className="stale">月度 · 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、汇总 00:01Z ——
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。
              非对角线均值 <span className="dn-tag">|r| 0.212</span>
              （在 0.25 NORMAL 底以下、对 08-06 的 0.214 基本平 ——
              <span className="dn-tag">IDIOSYNCRATIC 区段</span>、资产按各自
              驱动在动）。BTC 对风险复合体的对齐：NQ
              <span className="dn-tag">+0.456</span>（顶）、TSLA
              <span className="dn-tag">+0.430</span>、URNM
              <span className="dn-tag">+0.339</span>、SP500
              <span className="dn-tag">+0.330</span>、JP225 +0.286、NVDA
              +0.284、SILVER +0.203、COPPER +0.195、GOLD +0.193、PALL
              +0.183、PLAT +0.173。7d 相对表现是最大声那行、而 BTC 转红：
              <span className="dn-tag bear">BTC −0.63%</span> —— 风险复合体里
              唯一一根红（08-06 是 +1.43%）、而盘面仍强：NQ
              <span className="dn-tag bull">+3.85%</span>、SP500
              <span className="dn-tag bull">+3.37%</span>、JP225
              <span className="dn-tag bull">+0.75%</span>、大市值守着买盘 ——
              MSFT <span className="dn-tag bull">+11.68%</span>、NVDA
              <span className="dn-tag bull">+10.88%</span>、META
              <span className="dn-tag bull">+7.87%</span>、URNM
              <span className="dn-tag bull">+7.06%</span>、GOOGL
              <span className="dn-tag bull">+6.16%</span>、AMZN
              <span className="dn-tag bull">+5.92%</span>、TSLA
              <span className="dn-tag bull">+2.84%</span>。金属硬：SILVER
              +4.72%、PALL +4.85%、PLAT +4.66%、COPPER +3.73%、GOLD +3.70%。
              能源软：CL <span className="dn-tag bear">−6.68%</span>、BRENT
              <span className="dn-tag bear">−4.30%</span>、NGAS
              <span className="dn-tag bear">−4.68%</span>；AAPL −0.30% 和 JPY
              −1.31% 是另外的红。
              <span className="dn-em">
                BTC 对 TradFi 引擎的 7d 落后又扩回约 −4.48pt（BTC −0.63% 对
                NQ +3.85%、从 08-06 的 −5.98pt、但现在 BTC 直接转红、不只是
                落后一根绿）—— BTC 把参与吐回去、是一根仍绿的风险周里唯一
                一根红。regime 是 IDIOSYNCRATIC（|r| 0.212）、所以盘面两向都
                没在驱动 BTC；这根褪是 BTC 内生的、scout 站在自己（受损的）
                仓位腿上、不是宏观顺风
              </span>
              。JGB 月度 2.67% 陈旧 —— 不依赖。
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · 本子持 SCOUT LONG STARTER 0.2R · 加没开（盖又丢、OI 第四缩、需求未确认）· 硬砍没干净开火（地板守住、SM 再空是 feed 假象）· chase-short STOOD DOWN</span>
            </h2>

            <p>
              <span className="dn-signal">
                08-06 备忘开了一根 0.2R scout starter、点了两条前路 —— 需求
                确认的破盖上加、收破 flip/地板或 SM 滚回空上砍。都没干净开火、
                所以本子原封持着 starter
              </span>
              。ADD 没上膛：08-06 日线收 $64,300 —— 收回 D-EMA50 盖下方、不是
              决定性清过它 —— OI 第四根连续缩（−1,369.6 BTC）、每条 24h 流向
              读都在卖、所以需求未确认。硬 CUT 也没干净开火：现货 +1.88% 守在
              $63,174 flip 上方、+1.30% 守在 $63,533 200W 地板上方（两个都没
              收破）、而 SM「滚回空」那条砍腿 DATA-IMPAIRED —— raw 再空是那根
              08-06 11:06 BJ feed 假象、去假象 ΔNet +1,909（一根 cover）。所以
              两条触发都没了结、本子把最小 starter 持进一个未确认、不可
              certify 的盘面。chase-short 仍 STOOD DOWN —— 地板守住、gamma
              +78.7M 正、现货 +1.88% 在 flip 上方。本子：
              <span className="dn-em">持 scout long 0.2R、不加、一触即砍</span>、
              下面定义。
            </p>

            <div className="dn-trade">
              <span className="dn-side bull">scout · LONG · 持（starter 0.2R）· 加未上膛（盖又丢、OI 第四缩）· 砍未触发（地板守住、SM 受损）</span>
              <div className="dn-trade-name">
                回补反弹 scout —— 持：盖又被丢、需求继续缺席、但地板守住、SM 砍信号受损、所以 starter 一触即砍地活着
              </div>
              <div className="dn-thesis">
                08-06 备忘在 08-05 日线清过 D-EMA50 盖、SM 回补时开了这根
                starter。这一轮既没确认也没干净证伪。ADD 未上膛：08-06 日线
                收 $64,300（收回 $64,611 盖下方、不是清过它）、OI 第四根连续
                缩（−1,369.6 BTC —— 仍无新需求）、24h 流向全在卖。CUT 未触发：
                现货守在 $63,174 flip 和 $63,533 200W 地板上方（无收破）、而
                本该逼砍的 SM 滚回空是那根复发的 08-06 11:06 BJ feed 假象 ——
                去假象 ΔNet +1,909、一根 cover、所以再空不可 certify。底下杂色：
                funding 再firm（24h 均值 +3.06% → +3.83%、负数 58 → 6）、
                retail 重新拥挤（+1.42pt 到 54.84）—— 泄杠杆顺风反转 —— 而
                dealer 本子变轻到 +78.7M（仍正）、MTF regime 翻回周期反转、
                带一根新鲜 4h 死叉、不过 8h TD9 卖 reset 成买、慢的金叉/底背离
                簇仍偏上。持 0.2R starter；无需求确认的破盖不加；第一根
                certified 止损上砍。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">仓位（已持）</span><span className="dn-lvl-v">scout long 0.2R、~$64,620（08-06 开仓）—— 按最小 size 持、本轮不加</span></div>
                <div><span className="dn-lvl-k">加仓触发</span><span className="dn-lvl-v bull">一根 1d 收决定性清过 D-EMA50 盖（&gt; ~$64,900）AND OI 在堆（四天缩反转）AND 一根 CERTIFIED SM net &gt; −9,000（feed 干净、无假象）—— 加 0.2R</span></div>
                <div><span className="dn-lvl-k">止损（一触即砍）</span><span className="dn-lvl-v bear">1d 收 &lt; $63,174 flip（工作）或 &lt; $63,533 200W 地板（硬）—— 或 feed 干净后一根 CERTIFIED SM 滚回空（去假象转净卖）</span></div>
                <div><span className="dn-lvl-k">目标（仅加仓后）</span><span className="dn-lvl-v">$66,949（D-EMA100）然后 $68,129（D-SMA100）—— 进 +$64.5k–$68k / +65.82M 正 gamma 带；当 grind 处理、不是一根冲</span></div>
                <div><span className="dn-lvl-k">R/R</span><span className="dn-lvl-v">starter ~$64,620、止损 $63,533 = ~$1,087 风险；一根重清盖往 $66,949 = ~$2,329 ≈ 2.14:1 —— 但加仓等需求确认、所以站着的 starter 带着风险、还没确认的上行</span></div>
              </div>
              <div className="dn-gating">
                <b>硬规则：</b>starter 活着<em>只</em>因为没有干净止损开火、且
                SM 砍信号受损 —— 这不是一根信念持。<em>不要</em>加：盖又被丢、
                OI 第四天缩、需求未确认。第一根干净信号立刻砍 —— 一根 1d 收破
                flip/地板、或 feed 清掉假象后一根 certified SM 再空。08-06 的
                贴盖一吻已经失败一次；第二次失败测试或一根 certified 仓位滚仓
                结束这个读法。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">flat · chase-short · STOOD DOWN · 地板守住、gamma +78.7M 正、现货 +1.88% 在 flip 上方</span>
              <div className="dn-trade-name">
                Chase-short —— 停手：褪又丢了盖、但地板守住、本子仍净正 gamma、SM 再空不可 certify
              </div>
              <div className="dn-thesis">
                chase-short 挂在一根 flip/旧地板破（$63,174 flip / $63,311
                旧地板）AND SM 空 AND aggregate GEX 翻负上。三条都指向错的
                方向：现货 +1.88% 在 flip 上方（褪停在它上方很远、不是穿过）、
                dealer 本子 +78.7M headline / +88.06M rollup —— 比 08-06 轻但
                仍是一道正阻尼、前向 strip 上任何地方都没负 gamma 块 —— 而
                SM-空腿 DATA-IMPAIRED（raw 再空是 feed 假象；去假象是一根
                cover）。没有一条腿干净上膛、空头停手；$60k 的崩盘 put 架也
                松到 −17.57M（从 −17.88M）、留下边际更少的级联目标。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">re-arm 触发</span><span className="dn-lvl-v bear">1d 收 &lt; $63,174 flip / $63,311 旧地板 AND aggregate GEX 翻负（前段 expiry 内一根新负 gamma 块）AND 一根 CERTIFIED SM 空（feed 干净）</span></div>
                <div><span className="dn-lvl-k">SM 腿（受损）</span><span className="dn-lvl-v stale">RAW SM net −16,439 看着深空、但它是 08-06 11:06 BJ feed 假象 —— 去假象 ≈ −7,129、ΔNet +1,909（一根 cover）；这条腿不可 certify</span></div>
                <div><span className="dn-lvl-k">re-arm 上的目标</span><span className="dn-lvl-v">$60k（−17.57M 崩盘 put 架）、更远 $58k（−5.37M）—— 两者对 08-06 都松</span></div>
                <div><span className="dn-lvl-k">不要</span><span className="dn-lvl-v">不要空进一本 +78.7M 正 gamma 的本子、200W 地板守住、价格 +1.88% 在 flip 上方、SM 信号受损</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveat：</b>整条前向 GEX strip 都正（到 25JUN27 无负 gamma
                块）；一根 gamma 翻要求一根新负块建起来、不只是现货往下漂。
                本子变轻（+108.0M → +78.7M）、两个方向都薄了阻尼 —— 一根褪会
                遇到更少缓冲 —— 但在一根负块真正印出、SM feed 清掉之前、空头
                没有 certified 的腿。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 回补停在盖上 · 盯需求确认的重清或一根 certified 止损</span>
              <div className="dn-trade-name">
                回补盯位 —— STALLED：08-05 清过的盖 08-06 又吐回去、本子在它下方、进一个缩着的 OI 基里切
              </div>
              <div className="dn-thesis">
                08-06 备忘把背离框成往多头了结、开了一根 scout、转在需求是否
                确认（OI 堆、盖穿清）还是快帧褪把现货拉回 flip 下方。它哪个都
                没干净做到：快帧褪在盖上赢了（08-06 收 $64,300、收回 D-EMA50
                下方；regime 翻回周期反转；新鲜 4h 死叉）、但褪停在 flip 和
                地板上方很远、所以没触发砍。需求从没确认 —— OI 第四根连续缩、
                流向仍被卖。scout 现在是一根持着的 starter、等一个干净了结、
                不是一根确认的多。下一个盯位是现货是否在堆着的 OI 上重清盖
                （开加仓）、还是一根 certified 止损印 —— 一根收破 flip/地板、
                或 feed 假象清掉后一根干净 SM 再空。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">多头再确认</span><span className="dn-lvl-v bull">1d 收清过 D-EMA50 盖（&gt; ~$64,900）、OI 在堆（四天缩反转）、一根 certified SM net &gt; −9,000 —— 加 scout</span></div>
                <div><span className="dn-lvl-k">空头了结</span><span className="dn-lvl-v bear">1d 收 &lt; $63,174 flip、一根 certified SM 滚回空 —— 砍 scout、如果 gamma 也翻负盯 chase-short re-arm</span></div>
                <div><span className="dn-lvl-k">数据 caveat</span><span className="dn-lvl-v stale">SM 信号被 08-06 11:06 BJ feed 假象污染（08-02 / 08-04 之后第三次）—— 不要在 raw 再空上动手；等一根 feed 干净的读</span></div>
                <div><span className="dn-lvl-k">慢帧 tell</span><span className="dn-lvl-v bull">4 帧水下金叉簇（8h/12h/3d/1w）+ HTF 底背离（8h/12h/1w）+ 8h TD9 卖 reset 成买 —— 慢本子在快帧褪下仍偏上</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>一根停住的回补、配一个受损的仓位信号、是一根
                持而等、不是任一方向的新入场。scout 持着因为没有干净止损开火；
                它不加因为没有需求确认。按数据了结：一根 certified SM 读
                （feed 干净）加一根对盖/flip 任一侧的决定性收盘定案。在那之前、
                不追这根切。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 已开的 scout 在盖上褪了、但没止损 · 本篇转在现货是否在堆着的 OI 上重清盖（加）或一根 certified 止损印 —— 一根收破 flip/地板、或 feed 假象清掉后一根干净 SM 再空</span>
            </h2>

            <p>
              08-06 那张决策条件里：scout-ADD 路径<em>没开火</em> —— 08-06
              日线收 $64,300（收回 $64,611 盖下方、不是清过它）、OI 第四天缩、
              SM 不可 certify；scout-CUT 路径<em>没干净开火</em> —— 现货守在
              flip 和地板上方（无收破）、SM 滚回空是 feed 假象；chase-short
              re-arm <em>没开火</em> —— 现货坐在 $63,174 flip 上方 +1.88%、
              gamma 保持正（+78.7M）；200W-周期-地板-丢条件<em>没开火</em> ——
              地板守住、现货 +1.30% 在上方。<em>已开的 scout 在盖上褪了、但没
              止损；了结仍悬着。</em>今天条件围绕一根持着但未确认、坐在受损
              SM 信号上的 starter 重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>回补反弹 scout（多）—— 持、加仓触发</td><td className="bull">1d 收决定性清过 D-EMA50 盖（&gt; ~$64,900）AND OI 在堆（四天缩反转）AND 一根 CERTIFIED SM net &gt; −9,000</td><td>持 0.2R starter；只在需求确认的突破上加 0.2R、目标 $66,949（D-EMA100）然后 $68,129（D-SMA100）</td></tr>
                <tr><td>Scout 止损 / 砍（一触即砍）</td><td className="bear">1d 收 &lt; $63,174 flip（工作）或 &lt; $63,533 200W 地板（硬）—— 或 feed 干净后一根 CERTIFIED SM 滚回空</td><td>第一根干净信号砍 starter —— 贴盖一吻已经在 08-06 失败一次</td></tr>
                <tr><td>Chase-short（空）—— re-arm</td><td className="bear">1d 收 &lt; $63,174 flip / $63,311 旧地板 AND aggregate GEX 翻负 AND 一根 certified SM 空</td><td>只在一根全新审计触发后重评 chase-short —— 无站立 size；框架目标 $60k（−17.57M 崩盘 put）</td></tr>
                <tr><td>200W 周期地板丢</td><td className="bear">周收 &lt; $63,533.52（200W）—— 会结束 5 周在地板上方的 streak（下一根周收 08-09）</td><td>周期支撑破 —— 另起评估；回补读法结束</td></tr>
                <tr><td>SM feed 假象（数据）</td><td className="stale">第三次（08-02 / 08-04 / 08-06 11:06 BJ）—— raw 再空是一根单分钟 +9,765 feed 步；去假象是一根 cover</td><td>不要在 raw SM 印上动手；certify 任何 cover 或再空前要一根 feed 干净的读</td></tr>
                <tr><td>reclaim-long 利率筛</td><td className="bear">10Y &lt; 4.55% 收 —— 在 4.63% FALSE（距 8bp 触发、不再收窄 —— 松停了）</td><td>独立筛 FALSE；三天的松在这里平了、往闸的利率顺风停了</td></tr>
                <tr><td>BTC 对 TradFi 落后</td><td className="bear">BTC −0.63% 对 NQ +3.85% 7d = −4.48pt 落后 · |r| 0.212 IDIOSYNCRATIC</td><td>BTC 在一根绿的风险周里直接转红；regime 在 NORMAL 以下、所以盘面没在驱动 BTC —— 这根褪是 BTC 内生的</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是
              <span className="dn-signal">
                需求是否终于确认这根持着的 scout —— 一根决定性收重清 D-EMA50
                盖、OI 在堆、一根 CERTIFIED SM 读（加 starter、目标 $67k–$68k
                簇）—— 还是一根干净止损印：一根 1d 收破 $63,174 flip / $63,533
                地板、或 feed 假象清掉后一根 certified SM 滚回空（砍 starter、
                如果 gamma 也翻负、盯 chase-short re-arm 往 $60k −17.57M 崩盘
                put、不过正的 strip 和 200W 地板留一条被阻尼的路）
              </span>
              。在那之一印出前、本篇按写好的跑：已开的 scout 在盖上褪了 ——
              08-06 日线吐回清过的印、收 $64,300、OI 第四根连续缩、funding
              再firm、retail 重新拥挤、regime 翻回周期反转 —— 但没有干净止损
              开火、SM 砍信号被 feed 假象污染、所以本子持最小 size scout long
              0.2R、什么都不加。下一个 24h 的对读是<em>一触即砍地持 starter、
              只在一根需求确认的重清盖上加、第一根 certified 止损砍 —— 不追
              盖下这根切</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2（已过 codex 敌对式审计 · findings 记于 audits/2026-08-07-desk-note.md）
            </span>
            <b>状态：</b>已过 codex 敌对式审计（STAGE B、hostile-but-fair）。
            判决 PASS-WITH-NOTES —— 0 CRITICAL / 2 MAJOR / 1 MINOR / 0 NIT；
            无 CRITICAL 发布闸。三条 finding 都在 v2 应用；全文 grep-closure
            每条都跑过（pattern / 修前命中 / 修后命中）、无残留。
            <b>DN-001</b>（MAJOR —— 24h headline 流向/OI/funding 块从 08-06
            08:04 BJ 开盘那行重构、比声明的同时钟 08:05 锚长一行、窗未披露
            偏移）：用「重标 / 披露」方案了结（数字本就是正确的 1,442 行窗值、
            不变）。搜 <code>&quot;24h reads&quot;</code>、<code>&quot;1442&quot;</code>
            与 <code>&quot;same-clock&quot;</code> —— 24h 流向段现在在正文披露
            <code> 08-06 08:04 → 08-07 08:05 BJ</code> 行窗（1,442 行、比精确
            时钟长一行、和 4h/1h 处理一致）、数据来源条带记录偏移约定对同
            时钟点对比；剩下两处 <code>same-clock</code> 命中正确指 SM net 基
            （08-06 08:05）、确是同时钟。未披露偏移的 24h 主张：修前 1、修后
            0。RESOLVED（修后命中 = 0）。
            <b>DN-002</b>（MAJOR —— SM 去假象 net 水位用「只去 short」调整
            （−6.67k）、而 ΔNet/cover 用「整步」调整（+1,909 / 21.1%）、两组
            字段不合脚）：统一到完整 11:06 re-sync 约定（去掉 +456.7 long 和
            +9,765.1 short 两条腿）→ 调整后 long ≈ 13.42k、short ≈ 20.55k、
            去假象 net ≈ −7.13k、ΔNet +1,909、cover 21.1%。搜
            <code> &quot;6.67&quot;</code>、<code>&quot;6,673&quot;</code> 与
            −6,672/−6,673 变体 —— 修前 3、修后 0；改正的 −7.13k / −7,129 net
            现在与 long ~13.42k 一起出现。RESOLVED（修后命中 = 0）。
            <b>DN-003</b>（MINOR —— 「本轮第一次减正 gamma」从页面自己引的
            历史无法重建、页面只引了前一天）：用「内联历史」方案了结 ——
            headline 谱系 +6.3M → +38.1M → +68.6M → +106.0M → +108.0M →
            +78.7M（08-02 → 08-07）现在内联在主张后、短语自证。搜
            <code> &quot;first time in the run&quot;</code> —— 修前 1、修后 1
            （按设计保留、现由内联谱系支撑）。RESOLVED（未支撑含义已消除）。
            整体：post codex hostile audit；全部 finding RESOLVED、已 v1 → v2。
            <b>Build note（INFO）：</b>本服务器跑 Node 18.19.1；Next 16.2.6 对
            Node &lt; 20.9.0 硬退出、所以完整 <code>next build</code> 被环境
            阻塞；<code>npx --no-install tsc --noEmit</code> 是 build proxy。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体
            情况个性化。数字反映单一原子快照（2026-08-07 00:05Z）、
            provenance 在数据来源条带中按节披露；宏观 Tier-1 面板渲染
            2026-08-06 22:15Z（比快照早约 1.8h）、部分输入明确陈旧、暗或
            待定并已标注 —— 尤其 SM 仓位信号、被那根复发 feed 假象污染。
            水位、规模与条件是交易台流程的示例、不是长期推荐。过去的
            相关性、γ 与仓位模式不绑定未来盘面。衍生品有全损风险、加杠杆下
            损失可超过保证金。
            <em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                已开的 scout 在盖上褪了 —— 08-06 日线在第四天 OI 缩上吐回清过
                的印。但地板守住、SM 砍信号被 feed 假象污染、所以 starter 一触
                即砍地活着。持最小 size。在需求上加、第一根干净止损砍 —— 不追
                这根切。
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
            v2 · 2026-08-07 00:05Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            ma200w_trap_watch_state.json · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
