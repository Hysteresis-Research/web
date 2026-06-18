import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-06-18 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-06-18',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-06-18' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260618() {
  await requireViewer('/zh/desk/2026-06-18');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-06-18 · v2</span>
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
              <span className="dn-big">$64,558</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−1.71%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-06-18 00:06Z ·{' '}
              <span className="dn-em">
                实时盘面中断 —— OKX 监控 17.4h 前停写；价格 / MTF / GEX / 宏观 /
                跨资产是新鲜的，衍生品盘面冻住了
              </span>
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 最末行 2026-06-17 06:43Z（t = &ldquo;06-17 14:43&rdquo; BJ）</td>
                  <td className="dn-flag">
                    <b>冻结</b> · live_db.json 自 2026-06-17 06:43Z 起没再写过新行
                    （文件 mtime 证实）；进程状态本次没存档、没核实 —— 较 00:06Z
                    快照锚 <b>滞后 17.4h</b>。funding / OI / CVD / basis / retail /
                    taker-flow 都是 06-17 06:43Z 的 LAST-KNOWN、不是当前值。SM 子馈源
                    （long_btc / short_btc / net_btc）冻得更久 —— 自 2026-06-12
                    01:36Z 起一字不动（~142h / ~5.9 天，正是 06-16 备忘在 ~94.5h
                    标过的那根死馈源）；SM net 与 SM cut-fraction 本次
                    <b>不可计算</b>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-18 00:01Z scan</td>
                  <td className="dn-flag">
                    新鲜（快照前约 5 分钟）· 滚动 latest 文件、逐字存档于
                    /opt/desk-note/snapshots/2026-06-18-0006/ · 含未收盘 K 线 ·
                    扫描现货 $64,506、24h −1.78%、qVol $13.00B
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-18 00:01Z 快照</td>
                  <td className="dn-flag">
                    新鲜 · Deribit idx $64,673（比 parquet 现货 $64,558 高 $115）·
                    934 合约 · net GEX −47.8M（净 SHORT γ）· flip $65,315
                    （现货在下方）· 18JUN26 0.3DTE −5.32M 在今日 08:00Z 结算
                    （≈ 快照后 8h、尚未清）；最重一块是 26JUN26 月度 −41.45M、8.3 DTE
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-18 00:00Z
                  </td>
                  <td className="dn-flag">新鲜 · 7d 1h bar · 22 资产 · 167 rows · regime NORMAL（均值 |r| 0.393）</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-17 22:15Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.9h · FRED Tier-1 当日多数转松（10Y −4bp 到 4.43%、
                    TIPS −1bp 到 2.14%、10Y BE −3bp 到 2.29%、DXY −0.08 到 99.67）·
                    HY OAS +5bp 到 2.71% · MOVE +1.30 到 70.7 · Fed 净流动性 +0.062T
                    到 $5.897T（新鲜周度印）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-06-18 00:06Z（close $64,558）</td>
                  <td className="dn-flag">
                    新鲜 K 线（交易所 OHLC，独立于冻结的实时盘面）· 偏移按 parquet
                    最末 bar close 重算，是实时盘面冻结期间最新鲜的现货 · 显示的 MA
                    阶梯用 2023→ 三年子集（所以没有 W-SMA200 行），但 W-SMA200 直接从
                    全历史 glob 重算 —— 355 根周 W-MON bar（2019→至今）—— =
                    <b>$62,230</b>，与 06-16 备忘钉的地板重合、确认了它；
                    weekly_200sma.json 本次缺，但不挡 parquet 重算
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
                  <td className="dn-flag">相关主张明确为 framework only</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dn-meta">
            <div>
              <span className="dn-k">funding · 8h 年化</span>
              <span className="dn-v bear">−7.24%（STALE · 06-17 06:43Z）</span>
              <span className="dn-src">live_db 原始 funding −0.006608 × 1095 = −7.24% ann（不是 ×100）· 06-17 06:43Z 冻结点的 LAST-KNOWN、滞后 17.4h、不是当前读 · 末根 24h+1m 含端采样窗（截到冻结，1,442 行）：均值 +0.20% ann、区间 −7.24% / +7.21%、819 / 1,442 行为负 —— 盘面死的那一刻是一本平衡的双向账</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 对 06-16</span>
              <span className="dn-v">盘面冻结 —— 不可计算</span>
              <span className="dn-src">实时盘面 17.4h 前停写，没有当前 funding 去对 06-16 备忘做差 · 冻结点末印是 −7.24% ann（空付多）；杠杆门本次无法评估</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−468 BTC（−0.45%）· STALE 窗</span>
              <span className="dn-src">live_db oi_btc 在 06-17 06:43Z 冻结点 102,945、对一根 24h+1m 含端采样窗（1,442 行）起点 · 窗口截在冻结、不是进 00:06Z 快照 —— 它描述的是到 06-17 06:43Z 的盘面、滞后 17.4h</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bear">59.47 / 40.53 · STALE</span>
              <span className="dn-src">live_db `mkt_long_pct` 在 06-17 06:43Z 冻结点（24h+1m 含端采样窗起点是 58.29% —— 一根 +1.18pt 的加多、撞进 roll-over）· LAST-KNOWN、滞后 17.4h</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">−37.29k · 馈源死 ~142h</span>
              <span className="dn-src">long 13.53k − short 50.83k · 这三元组自 2026-06-12 01:36Z 起一字不动（~142h / ~5.9 天）—— 是一个冻结值、不是当前仓位读；只为标这根死馈源而带</span>
            </div>
            <div>
              <span className="dn-k">SM Δ / cut fraction</span>
              <span className="dn-v">NON-COMPUTABLE</span>
              <span className="dn-src">SM 馈源冻 ~5.9 天 · |Δ| / prior_net 算不出 —— 没有当前 SM net 去做差 · 挤压周期 / 重堆框架本次是瞎的，是 06-16 ON-HOLD 的延续</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">43.6% / 42.67%</span>
              <span className="dn-src">GEX 934 合约 IV 中位数（00:01Z、新鲜）对 30D close-to-close RV 42.67%（自 parquet）—— 链级 richness 只 ~+0.93pt，一档薄 vol 溢价（RV 较 05-31 的 24.91% 急扩；vol 对已实现已不便宜）</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bear">−1.16%（下方）</span>
              <span className="dn-src">flip $65,315 · 对 parquet 现货 $64,558（64,558 / 65,315 − 1 = −1.159%）/ GEX 文件 Deribit idx $64,673（64,673 / 65,315 − 1 = −0.983%）—— 两参考都在 flip 下方，tile 取现货侧 −1.16% · net GEX −47.8M（净 SHORT γ、放大）· 26JUN26 月度 −41.45M 是最重一块</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                06-15 的重夺回滚进放大下行的结构里，而本台是隔着一根坏掉的
                盘面在读它
              </span>
              。BTC 从 06-15 周线重夺高
              <span className="dn-tag">$66,286</span> 滑到
              <span className="dn-tag bear">$64,558</span>（parquet 最末 bar
              00:06Z），丢了 D-SMA20
              <span className="dn-tag bear">$65,162（−0.93%）</span>、并
              <span className="dn-tag bear">在 0-γ flip $65,315 下方 −1.16%</span>
              、回到一本 <span className="dn-tag bear">净空 γ −47.8M</span> 的
              dealer 账里、最重一块是
              <span className="dn-tag bear">26JUN26 月度 −41.45M（8.3 DTE）</span>
              —— 正是推动过往下腿的那种放大下行形。现货在收盘口径上仍
              <span className="dn-tag bull">高出 06-16 备忘钉的 200W 地板 $62,230 约
              +3.7%</span>（06-18 未收盘 close $64,558、06-16 / 06-17 两根红日收
              离高），但坐在 MA 矩阵其余每一根显示线下方。MTF 翻到
              <span className="dn-tag bear">多周期空头共振（7 空 / 1 多 / 2 中性、
              &ldquo;sell rallies&rdquo;）</span>、带一根新鲜
              <span className="dn-tag bear">8h 水上死叉（刚印）</span>。{' '}
              <span className="dn-em">
                当日的操作事实压过盘面读：OKX 监控 17.4h 前停写（最末行
                2026-06-17 06:43Z），所以 funding、OI、CVD、basis、retail 都是
                LAST-KNOWN 且陈旧，SM 仓位账已死 ~5.9 天 —— SM net 与 cut-fraction
                不可计算。本台是仓位瞎的。
              </span>{' '}
              定调因此被封顶：交易账保持空仓、防守，scout 继续站着不动（没有一根
              活的仓位盘面，连评估都做不了），唯一要紧的决定是价格是丢掉 200W
              地板、撞进 26JUN 放大器，还是重夺 flip —— 在实时盘面恢复前、只凭价格
              与 gamma 判。
            </p>

            <p>
              BTC 在 parquet 最末 bar（00:06Z）报
              <span className="dn-tag">$64,558</span>、24h
              <span className="dn-tag bear">−1.71%</span>（对一天前 $65,683）、在一条
              <span className="dn-tag">$66,419 / $63,881</span> 的 24h 区间里
              （高 @ 2026-06-17 16:28Z、低 @ 2026-06-17 22:03Z）。Deribit idx 在
              00:01Z 读 $64,673、06-18 未收盘那一节很静 —— 开 $64,473、区间
              $64,612 / $64,455 —— 所以最新鲜的现货被两个独立的新鲜源
              （parquet K 线与 GEX Deribit idx）交叉印证，尽管平时供它的 live_db
              盘面冻在 $65,616（06-17 06:43Z、滞后 17.4h）。
              <span className="dn-signal">结构性读是从重夺往回滚、不是破地板</span>
              ：06-15 周线收 $66,286 把 06-16 备忘领头的那根 200W 重夺解了，但此后两根
              已收盘的日收 —— 06-16 $65,645、06-17 $64,473 —— 把突破还了回去，价格
              重新进了 flip 下方那条重负 gamma 带。周期地板 $62,230
              （本次重算为全历史 W-SMA200 —— 自 2019→ parquet glob 的 355 根周
              W-MON bar —— 落在 06-16 钉的同一根 $62,230、确认了它）在现货下方
              约 +3.7%、还没被回测。{' '}
              <span className="dn-em">
                这是一根重夺、在一本净空 γ 账里被还了回去 —— dealer 图现在是放大、
                而非阻尼一根朝地板的续跌。它会不会转成一次地板测试，取决于本台此刻
                看不到的流向。
              </span>
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面冻结 17.4h · SM 账死 ~5.9 天 · funding/OI/flow LAST-KNOWN 陈旧 · 本台本次仓位瞎</span>
            </h2>

            <p>
              <span className="dn-signal">
                这篇备忘最重要的那个源 —— 实时衍生品盘面 —— 是宕的
              </span>
              。OKX 监控自
              <span className="dn-tag bear">2026-06-17 06:43Z</span>（t =
              &ldquo;06-17 14:43&rdquo; BJ）起没再往 live_db.json 追加过任何行
              （文件 mtime 证实写在那里停了；进程状态本次没存档、没核实，所以本篇
              主张的是缺失的盘面、不是一个活着 / 挂死的进程）。那是
              <span className="dn-tag bear">17.4h 的缺失盘面</span>、对 00:06Z 快照锚。
              实时盘面带的一切 —— funding、open interest、现货 / 期货 CVD、perp
              basis、retail 多%、taker-net、大单流、aggressor skew —— 因此都是
              <span className="dn-em">06-17 06:43Z 的 LAST-KNOWN、不是当前</span>。更糟、
              smart-money 仓位三元组（long_btc / short_btc / net_btc）一字不动 ——
              <span className="dn-tag">13,532.4 / 50,825.7 / −37,293.3</span> ——
              自 <span className="dn-tag bear">2026-06-12 01:36Z</span> 起、~142h
              （~5.9 天）。06-16 备忘已经在 ~94.5h 标过这根死馈源、把挤压周期框架
              放 ON HOLD；今天它又陈旧了 ~48h、还是死的。{' '}
              <span className="dn-em">
                SM net 作为一个当前读是不可计算的、SM cut fraction（|Δ| / prior_net）
                也组不出 —— 没有当前 SM net 去做差。本篇任何仓位主张都明确是历史的、
                不是活的。
              </span>
            </p>

            <p>
              为完整起见，<em>末根可得</em>的盘面读 —— 全部钉在 06-17 06:43Z 冻结点、
              滞后 17.4h —— 是：funding <span className="dn-tag bear">−7.24% ann</span>
              （原始 −0.006608 × 1095；冻结点空付多），末根可得路径在 24h+1m 含端
              采样窗（1,442 行）里是平衡双向（均值
              <span className="dn-tag">+0.20% ann</span>、区间
              <span className="dn-tag">−7.24% / +7.21%</span>、819 / 1,442 行为负）；
              OI <span className="dn-tag bear">102,945 BTC、末根 24h+1m 窗内 −468
              （−0.45%）</span>；retail
              <span className="dn-tag">mkt_long_pct 59.47%</span>（同一窗内 +1.18pt
              的加多）；perp basis
              <span className="dn-tag bear">−$57.43 折价</span>对现货
              （窗均值 −$58.62、区间 −$146.17 / +$67.04 —— basis 在窗内确实碰过一档小
              升水）。末根流向窗、同样截在冻结、不进快照（24h+1m 含端采样跨度）：24h 价
              <span className="dn-tag bear">−1.24%</span>、OI
              <span className="dn-tag bear">−468 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +771</span>、期货 CVD
              <span className="dn-tag bull">Δ +276</span>、大单
              <span className="dn-tag bull">+1,360 BTC</span>、taker-net
              <span className="dn-tag bull">+306</span>；末根活的 61m（1h+1m 含端、
              进 06-17 06:43Z）转重 —— 价
              <span className="dn-tag bear">−0.42%</span>、现货 CVD
              <span className="dn-tag bear">Δ −1,071</span>、期货 CVD
              <span className="dn-tag bear">Δ −380</span>。{' '}
              <span className="dn-em">
                把这些读成一张 18 小时旧的指纹、不是信号：一本双向的 funding 账、
                OI 在泄、retail 往弱里加多、现货在馈源死前最后一小时给货。没有一根
                能往 00:06Z 快照上接，本台把仓位这一维当未知处理。
              </span>
            </p>

            <h2 className="dn-sec">
              结构 <span className="dn-roman">II · 价格/MTF 新鲜 · 多周期空头共振、sell rallies · 8h 水上死叉刚印 · 现货在每根显示 MA 下方、D-SMA20 是唯一近线 · 200W 地板 = 全历史 W-SMA200 $62,230</span>
            </h2>

            <p>
              <span className="dn-signal">
                MTF 图是新鲜的、全面读空
              </span>
              —— 这是本台今天还能信的、与 dealer 图并列的那一维。00:01Z 扫描标
              <span className="dn-tag bear">1 多 / 7 空 / 2 中性、跨 10 个周期</span>、
              净读 <em>多周期空头共振、sell rallies</em>、在一个 5/9 周期反转 regime
              里（JT&lt;0、偏均值回归 / 弹、趋势跟随被警示）。引擎印出一根新鲜
              <span className="dn-tag bear">8h 水上死叉（刚印）</span>在 00:00Z 收、
              3d 带一根 <span className="dn-tag bear">水上死叉 7b</span>。短周期全在
              云下且空（15m / 30m / 1h 死叉叠、RSI 47.7 / 42.4 / 39.8）、4h 在云上、
              Buy-3、带一根新鲜顶背离、唯一的建设性记号是深周期底背离簇（15m / 30m /
              1h BULL hidden/regular）与 1M 仍在云上（Buy 8 → 9?）。{' '}
              <span className="dn-em">
                直读：带起 06-11..06-15 重夺的那根弹，在引擎和中周期上翻了过去、慢
                周期从没确认过它（1d / 1w / 3d 全在云下、深偏移），唯一的反向信号是
                短周期底背离 —— 一个空头共振里的纾困弹设置、不是转向。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">64,506</td><td className="num">47.7</td><td className="bull">金叉（水下）4b</td><td className="bear">云下 ↑65.5k 19b</td><td>Sell 8 → 9?</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">64,506</td><td className="num">42.4</td><td className="bear">死叉（水下）10b</td><td className="bear">云下 ↑65.2k 12b</td><td>Sell 3</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">64,506</td><td className="num bear">39.8</td><td className="bear">死叉（水下）5b</td><td className="bear">云下 ↑65.5k 5b</td><td>Sell 2</td><td>BEAR hid · BULL hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">64,506</td><td className="num">45.1</td><td className="bear">死叉（水上）8b</td><td className="bull">云上 ↓63.1k 19b</td><td>Buy 3</td><td>BEAR reg</td></tr>
                <tr><td>8h</td><td className="num">64,506</td><td className="num">47.4</td><td className="bear">死叉（水上）刚印</td><td className="neut">云内 10b</td><td>Buy 5</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">64,506</td><td className="num">45.1</td><td className="bull">金叉（水下）19b</td><td className="bear">云下 ↑68.6k 53b</td><td>Buy 4</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">64,510</td><td className="num bear">38.9</td><td className="bull">金叉（水下）5b</td><td className="bear">云下 ↑74.3k 17b</td><td>Buy 1</td><td>BEAR hid</td></tr>
                <tr><td>3d</td><td className="num">64,510</td><td className="num bear">38.4</td><td className="bear">死叉（水上）7b</td><td className="bear">云下 ↑74.7k 5b</td><td>Sell 2</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">64,510</td><td className="num bear">36.4</td><td className="neut">—</td><td className="bear">云下 ↑100.3k 20b</td><td>Buy 5</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">64,510</td><td className="num">43.1</td><td className="neut">—</td><td className="bull">云上 ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>BULL reg · BEAR reg · BULL hid · BEAR hid</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 00:01Z scan（滚动 latest 文件；逐字
                    存档于 /opt/desk-note/snapshots/2026-06-18-0006/）。头部告警：
                    <em>8h 水上死叉（刚印）</em>。扫描现货 $64,506、24h −1.78%、
                    24h H/L $66,419 / $63,881、qVol $13.00B。收盘为未收盘 K 线；
                    每个值在各周期收盘前都按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵是这根 roll-over 的惨淡图：现货 $64,558 坐在
              <span className="dn-em">阶梯上每一根显示线下方</span>、没有一处正偏移
              —— 现货下方唯一的一根 MA 是全历史 W-SMA200 的 200W 地板 $62,230
              （约 3.7% 之下）。唯一的近线是
              <span className="dn-tag bear">D-SMA20 $65,162（−0.93%）</span> ——
              06-16 / 06-17 两根收丢掉、现在是头顶第一根重夺腿 —— 之后是
              <span className="dn-tag bear">D-EMA20 $66,234（−2.53%）</span> 与周期代理
              <span className="dn-tag bear">W-EMA200 $67,383（−4.19%）</span>。中阶梯是
              一堵深墙：
              <span className="dn-tag bear">D-EMA50 $70,033（−7.82%）</span>、
              <span className="dn-tag bear">W-SMA20 $70,972（−9.04%）</span>、
              <span className="dn-tag bear">D-SMA100 $72,519（−10.98%）</span>、
              <span className="dn-tag bear">D-SMA150 $72,746（−11.26%）</span>、
              <span className="dn-tag bear">D-EMA100 $72,805（−11.33%）</span>、
              <span className="dn-tag bear">D-SMA50 $72,996（−11.56%）</span>、
              <span className="dn-tag bear">W-EMA150 $74,002（−12.76%）</span>、
              <span className="dn-tag bear">W-EMA20 $74,307（−13.12%）</span>、
              <span className="dn-tag bear">W-SMA150 $75,161（−14.11%）</span>、
              <span className="dn-tag bear">D-EMA150 $75,585（−14.59%）</span>、
              <span className="dn-tag bear">D-SMA200 $77,134（−16.30%）</span>、
              <span className="dn-tag bear">D-EMA200 $78,263（−17.51%）</span>。
              更高更远、已弃用：W-EMA100 $80,744（−20.05%）、W-EMA50 $82,412
              （−21.66%）、W-SMA100 $88,418（−26.99%）、W-SMA50 $90,873（−28.96%）。
              结构性近线集合现在窄而单向：一簇重夺线 D-SMA20 / D-EMA20 / W-EMA200
              从 −0.93% 到 −4.19% 在头顶，全历史 200W 地板 $62,230 在下方约 +3.7%
              —— 一道 <span className="dn-tag">~$2.9k</span> 的带、夹在地板与第一根
              重夺线（D-SMA20 $65,162）之间。{' '}
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-06-18 00:06Z（close $64,558）；偏移按
                同一根 close 算，是实时盘面冻结期间最新鲜的现货。显示的 MA 水位按 $
                取整、偏移用精确序列值算。显示阶梯用 2023→ 三年子集（182 根周 bar），
                所以 W-SMA200 不是矩阵的一行；但 200W 地板从全历史 glob 是可算的 ——
                355 根周 W-MON bar（2019→至今）给 W-SMA200 $62,230、与 06-16 钉的同一
                水位，所以地板是直接重算确认的、不是仅仅带过来的。percentile 与
                last-event 仍无源（weekly_200sma.json 缺）、不是杜撰。日线收盘：06-11
                $63,598、06-12 $63,547、06-13 $64,418、06-14 $65,702、06-15 $66,286、
                06-16 $65,645、06-17 $64,473、06-18（未收盘）$64,558 —— 06-15 那根高、
                然后两根红收把突破还了回去。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 账净空 γ −47.8M · 现货在 flip $65,315 下方 · 26JUN26 月度 −41.45M 是最重放大器（8.3 DTE）· 重 put 墙 $60k–$65k 在现货下方</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 账是净空 γ、现货坐在一条重负墙带里 —— 一张放大下行的图
              </span>
              。aggregate GEX 是 <span className="dn-tag bear">−47.8M / 1%</span>、
              0-γ flip 是 <span className="dn-tag">$65,315</span>、现货在
              <span className="dn-tag bear">下方 −1.16%</span>、按现货口径
              （64,558 / 65,315 − 1 = −1.159%）；GEX 文件自己的 &ldquo;dist to
              flip&rdquo; 对它的 Deribit idx $64,673 读
              <span className="dn-tag bear">−0.98%</span>（64,673 / 65,315 − 1 =
              −0.983%）—— <span className="dn-em">两参考都在 flip 下方</span>、账从
              这里起是放大、不是阻尼。墙图在现货下方很重：
              <span className="dn-tag bear">$60k −24.83M</span>（最重墙、一根 put 墙、
              Put OI 20,730）、
              <span className="dn-tag bear">$62k −20.15M</span>（正在那根 200W 地板上）、
              <span className="dn-tag bear">$64k −16.97M</span>、
              <span className="dn-tag bear">$65k −12.97M</span>、
              <span className="dn-tag bear">$63k −12.07M</span> —— 一条连续的
              $60k–$65k 负带、现货现在就坐在里面 —— 对着头顶第一批正墙
              <span className="dn-tag bull">$66k +5.81M</span>、
              <span className="dn-tag bull">$67k +14.39M</span>（最重正、Call OI
              5,053）与更高的
              <span className="dn-tag bull">$70k +7.81M</span> /
              <span className="dn-tag bull">$80k +11.52M</span>；
              <span className="dn-tag bear">$55k −6.06M</span> 是更低的崩盘 put 残余。{' '}
              <span className="dn-em">
                现货在负带里、最重的墙在下方（$60k / $62k），意味着一根续跌是跌进
                越来越深的空 gamma —— dealer 卖弱买强、把一根朝地板的移动放大。第一道
                阻尼支撑只在头顶 $66k–$67k 正墙、也就是在 flip 上方、不在现货下方。
              </span>
            </p>

            <p>
              expiry 串里扛着放大器。最重的单块是
              <span className="dn-tag bear">26JUN26 月度 −41.45M（8.3 DTE、Call OI
              87,233 / Put OI 76,341）</span> —— 差不多整根 aggregate 的体量、是近端
              负块喂进去的那场月度 opex。近串清一色负：
              <span className="dn-tag bear">18JUN26 0.3 −5.32M</span>（今日 0DTE、
              08:00Z 结算 ≈ 快照后 8h、尚未清）、
              <span className="dn-tag bear">19JUN26 1.3 −4.36M</span>、
              <span className="dn-tag bear">20JUN26 2.3 −7.42M</span>、
              <span className="dn-tag bear">21JUN26 3.3 −7.77M</span>、然后
              <span className="dn-tag">3JUL26 15.3 −0.05M</span> 平。正偏移全是远端：
              <span className="dn-tag bull">31JUL26 43.3 +16.90M</span>、
              <span className="dn-tag bull">25DEC26 190.3 +4.21M</span>、
              <span className="dn-tag bull">28AUG26 71.3 +3.38M</span>、
              <span className="dn-tag bull">25SEP26 99.3 +2.31M</span>、
              <span className="dn-tag bull">26MAR27 281.3 +0.87M</span>。列出的串净到
              约 −38.7M、对 −47.8M 的 headline aggregate，但这道差是口径不同、不是漏
              expiry 的余额：headline 是 surface-grid GEX 在最近的现货/当前-IV 网格点
              上读的、而 by-expiry 串是精确现货 profile 按 expiry 分组，所以两者除非
              在同一口径上重算否则不代数相等；无论如何{' '}
              <span className="dn-em">
                到 26JUN 的近日历全是空 gamma、26JUN 月度是放大器、opex 前没有一根
                近端正块去阻尼一根移动 —— 正是下腿放大器窗的结构性类比、现在指向 26JUN
                月度。
              </span>{' '}
              IV 中位数横跨 934 合约是 <span className="dn-tag">43.6%</span>、对 30D
              close-to-close RV <span className="dn-tag">42.67%</span> —— 链级
              richness 只 <span className="dn-tag">~+0.93pt</span>、一档薄溢价；是 N
              合约的链中位数、<span className="dn-em">不是</span>可交易价差，expiry-/
              strike-level vega、skew、期限结构未载入 —— vol 读法保持 framework only。
              RV 方法：30D close-to-close、logret.std × √365 × 100、用最末 30 根日 log
              return（= 连续 31 根日 close）、锚自 parquet 最末 bar 2026-06-18 00:06Z；
              29-return 读是 43.07%。RV 较 05-31 的 24.91% 急扩 —— vol 对已实现已不
              便宜、这也是为什么 43.6% 的 IV 中位数几乎不带溢价。
            </p>

            <h2 className="dn-sec">
              宏观 <span className="dn-roman">IV · Tier-1 多数转松（10Y 4.43%、TIPS 2.14%、10Y BE 2.29%、DXY 99.67）· HY OAS +5bp 到 2.71% · re-grow 闸未触发 · BTC 对 TradFi 再耦合（|r| 0.393 NORMAL）、7d 对 NQ 落后只 −0.85pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观面当日在利率、实际利率、breakeven 与美元上全面转松、信用略宽、
                债波略硬
              </span>
              。面板渲染 2026-06-17 22:15Z、比快照早约 1.9h。US 10Y nominal
              <span className="dn-tag bull">4.43%（−4.0bp）</span>、regime z
              <span className="dn-tag bear">+1.24</span> —— 紧 regime、当日转松。10Y
              TIPS real <span className="dn-tag bull">2.14%（−1.0bp）</span>、regime z
              <span className="dn-tag bear">+1.95</span> —— 仍是面板上最紧的一根。5Y5Y
              BE 通胀 <span className="dn-tag">2.22%（−2.0bp）</span>、10Y breakeven
              <span className="dn-tag bull">2.29%（−3.0bp）</span> —— 通胀预期在软。HY
              OAS <span className="dn-tag bear">2.71%（+5.0bp）</span>、regime z
              <span className="dn-tag bull">−1.27</span> —— 信用当日略宽、但仍是一个
              松、risk-on 的 regime。MOVE 债波
              <span className="dn-tag">70.7（+1.30）</span> —— 仍松。美元当日小幅转软
              但仍偏高：DXY <span className="dn-tag">99.67（−0.08 当日）</span>、regime z
              <span className="dn-tag">+1.26</span>。Fed 净流动性印一根新鲜周度加到
              <span className="dn-tag bull">$5.897T（+0.062T）</span>、偶发 z
              <span className="dn-tag bull">+2.47</span> —— 一道建设性的流动性脉冲。US-JP
              10Y 利差 <span className="dn-tag">1.78%（−4.0bp）</span>；USD/JPY
              <span className="dn-tag">160.36（+0.13）</span>。{' '}
              <span className="dn-em">
                净：06-16 备忘设的 re-grow 闸保持未触发 —— HY OAS 闸 2.78%（在 2.71%、
                距闸 7bp）、10Y 闸 4.53%（在 4.43%、距闸 10bp）—— reclaim-long 利率筛
                （10Y &lt; 4.55%）在 4.43% 仍真。宏观背景在对 BTC 要紧的那几根线上净
                risk-on / 转松；这根 roll-over 是内生于 crypto、不是宏观驱动。
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
                <tr><td>US 10Y nominal</td><td className="num">4.43%</td><td className="num bull">−4.0bp</td><td className="num bear">+1.24</td><td className="bear">紧 · 已松</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.14%</td><td className="num bull">−1.0bp</td><td className="num bear">+1.95</td><td className="bear">最紧线 · 已松</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.22%</td><td className="num bull">−2.0bp</td><td className="num">−0.17</td><td className="neut">在软</td></tr>
                <tr><td>10Y breakeven</td><td className="num">2.29%</td><td className="num bull">−3.0bp</td><td className="num">−0.75</td><td className="neut">在软</td></tr>
                <tr><td>HY OAS</td><td className="num">2.71%</td><td className="num bear">+5.0bp</td><td className="num bull">−1.27</td><td className="bull">松 · risk-on、当日略宽</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.505</td><td className="num">0.00</td><td className="num">+0.24</td><td className="stale">周度</td></tr>
                <tr><td>MOVE 债波</td><td className="num">70.7</td><td className="num bear">+1.30</td><td className="num bull">−0.48</td><td className="bull">松 · 略硬</td></tr>
                <tr><td>DXY</td><td className="num">99.67</td><td className="num bull">−0.08</td><td className="num">+1.26</td><td className="bear">偏高 · 小幅转软</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.897T</td><td className="num bull">+0.062T</td><td className="num">+0.82</td><td className="bull">新鲜周度加</td></tr>
                <tr><td>USD/JPY</td><td className="num">160.36</td><td className="num">+0.13</td><td className="num bear">+1.32</td><td className="neut">日元软</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">1.78%</td><td className="num bull">−4.0bp</td><td className="num bull">−1.20</td><td className="bull">收窄</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7565</td><td className="num bull">−0.01</td><td className="num bull">−1.80</td><td className="bull">松</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">+13.5bp（月度）</td><td className="num bear">+2.56</td><td className="stale">月度 · 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、汇总 00:00Z ——
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。非对角线均值
              <span className="dn-tag">|r| 0.393</span> —— regime 回到 NORMAL 带
              （对 05-31 的 0.237 IDIOSYNCRATIC）、<span className="dn-signal">BTC 已对
              TradFi 风险复合体再耦合</span>。BTC 现在最强的对齐是股票 / 贵金属簇：SP500
              <span className="dn-tag">+0.692</span>、NQ
              <span className="dn-tag">+0.662</span>、NVDA
              <span className="dn-tag">+0.621</span>、SILVER
              <span className="dn-tag">+0.605</span>、EUR
              <span className="dn-tag">+0.552</span>、GOLD
              <span className="dn-tag">+0.548</span>、JP225
              <span className="dn-tag">+0.499</span>、COPPER
              <span className="dn-tag">+0.490</span>、TSLA
              <span className="dn-tag">+0.470</span>，能源复合体反向（CL
              <span className="dn-tag">−0.421</span>、BRENT
              <span className="dn-tag">−0.424</span>）、JPY
              <span className="dn-tag">−0.299</span>。7d 相对表现广泛 risk-on：
              <span className="dn-tag bull">BTC +4.34%</span>、NQ
              <span className="dn-tag bull">+5.19%</span>、SP500
              <span className="dn-tag bull">+2.79%</span>、JP225
              <span className="dn-tag bull">+10.60%</span>、TSLA
              <span className="dn-tag bull">+3.99%</span>、MSFT
              <span className="dn-tag bear">−3.89%</span>；金属强（GOLD
              <span className="dn-tag bull">+4.92%</span>、SILVER
              <span className="dn-tag bull">+7.65%</span>、PALL
              <span className="dn-tag bull">+7.64%</span>、URNM
              <span className="dn-tag bull">+12.16%</span>）；能源崩（CL
              <span className="dn-tag bear">−16.94%</span>、BRENT
              <span className="dn-tag bear">−15.85%</span>）。{' '}
              <span className="dn-em">
                BTC 7d 回报 +4.34% 对 NQ +5.19% 是只 −0.85pt 的落后（对 05-31 的
                −5.84pt）—— BTC 一周里跟着风险复合体上、现在在前端把它还回去，是一根
                仍 risk-on 宏观面里内生于 crypto 的 roll-over、不是一次广泛 risk-off。
                内生于 crypto 的读法守住：下行压力来自 dealer-gamma / 重夺被还回去的
                结构、不是宏观脉搏。
              </span>{' '}
              JGB 月度 2.65% 带 EXTREME RISK-OFF 月度标 —— 不依赖。
            </p>

            <h2 className="dn-sec">
              交易本子 <span className="dn-roman">V · 账空仓 · scout 站着不动且无法评估（仓位盘面瞎）· 200W 地板盯位为主 · 宏观尾闸未触发 · 挤压周期 ON HOLD（SM 死 ~5.9 天）</span>
            </h2>

            <p>
              <span className="dn-signal">
                账是空的、保持空 —— 今天的约束是数据完整性、不是定调
              </span>
              。06-16 那根 scout 已经站着不动（TD9 簇翻成 sell / 顶背离读）；今天 MTF
              更空（7 空共振、8h 死叉），而且 —— 决定性地 —— 任何 scout 触发的仓位腿
              （SM 空头泄、funding、flow）都没法评估，因为实时盘面冻 17.4h、SM 馈源死
              ~5.9 天。在一根仓位瞎的盘面上、撞进一本 flip 下方的净空 γ 账，scout long
              进不去。也不开新空：往现货下方的重负墙带、朝那根地板、踩着陈旧的 flow
              做空，不是一个干净入场 —— gamma 图已经在干这活、本台也无法确认拥挤。今天
              交易账是：无空仓、无 scout、无新对冲 —— 等实时盘面恢复 AND 一根价格判定
              （地板丢掉、或 flip 重夺）再重新武装。
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 主仓 · 200W 周期地板盯位 · 重夺正被还回去 —— 现货高出带过来的 $62,230 地板约 +3.7%、在净空 γ 里朝它滚</span>
              <div className="dn-trade-name">
                200W 周期地板盯位 —— 06-15 周线重夺正被还回；地板 $62,230 = 全历史 W-SMA200（355 根周 bar、确认 06-16 水位）、现货 $64,558 高出约 +3.7%
              </div>
              <div className="dn-thesis">
                06-16 备忘以 200W 重夺领头 —— 06-15 周线收 $66,286 在 $62,230 地板上方
                收下、带五根已收盘日收在上方。此后两根红日收（06-16 $65,645、06-17
                $64,473）把突破还了回去、价格重新进了 flip 下方那条负 gamma 带。地板
                本身没被测试 —— 现货 $64,558 高出带过来的 $62,230 约 +3.7% —— 但 dealer
                图现在放大一根朝它的续跌：最重 put 墙在 $60k（−24.83M）与 $62k
                （−20.15M）、正坐在地板上和地板下，26JUN26 月度 −41.45M 放大器还有 8 天。
                <span className="dn-em">这是一根盯位、不是一个仓位</span>：本台无法确认那根
                能把受控回测和破位区分开的 flow，因为实时盘面是宕的。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W 地板</span><span className="dn-lvl-v">$62,230 = 全历史 W-SMA200、本次从 2019→ parquet glob 重算（355 根周 W-MON bar）；与 06-16 钉的地板重合、确认了它 · weekly_200sma.json 缺，所以 percentile/last-event 仍无源、不是杜撰</span></div>
                <div><span className="dn-lvl-k">现货对地板</span><span className="dn-lvl-v bull">$64,558 高出约 +3.7% · 06-18 未收盘在日口径上收在上方</span></div>
                <div><span className="dn-lvl-k">升级</span><span className="dn-lvl-v bear">一根持续的周线收 &lt; $62,230 才破 200W 地板（W-SMA200 是周线收口径框架）—— 日线收在下方是预警、不是破位本身 —— 另起评估，重夺论已死</span></div>
              </div>
              <div className="dn-gating">
                <b>框架、不是交易。</b>地板盯位是唯一承重的水位、其余要么陈旧（实时盘面）
                要么 framework only。dealer 图是这根盯位要紧的原因：现货在 $60k–$65k 负墙带
                里、续跌是跌进越来越深的空 gamma，26JUN 月度是那根移动会喂进去的放大器。盯位上
                不开仓 —— 它只设升级水位。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout · 站着不动且无法评估 · MTF 比 06-16 更空 + 仓位盘面瞎</span>
              <div className="dn-trade-name">
                回补反弹 scout —— 站着不动（MTF 空头共振、8h 死叉）且无法评估（SM / funding / flow 腿在冻结盘面上瞎）
              </div>
              <div className="dn-thesis">
                06-16 scout 站着不动、因为 TD9-BUY 簇翻成了 sell / 顶背离簇、尽管 flip 与
                funding 腿当时还在。今天技术面更差、不是更好：引擎与中周期翻了过去（8h 水上
                死叉刚印、1h/30m 云下死叉、3d 死叉）、净 MTF 读是空头共振 / sell rallies、
                价格丢了 D-SMA20 与 flip。唯一建设性记号是短周期底背离簇 —— 一个纾困弹设置、
                不是转向。另外、scout 连<em>评估</em>都做不了：它的仓位触发（SM 空头泄、
                funding 姿态、回补流确认）全要一根活的盘面、而没有。<span className="dn-em">在一根
                仓位瞎的盘面上、撞进一本 flip 下方的净空 γ 账、顶着一根空头共振的 MTF、scout
                long 不是一笔交易。</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v bear">站着不动 · 无入场 · 只在实时盘面恢复后再评估</span></div>
                <div><span className="dn-lvl-k">技术前置</span><span className="dn-lvl-v">1h 收 &gt; flip $65,315 / 重夺 D-SMA20 $65,162 AND MTF 共振翻离空头 —— 一条都不真</span></div>
                <div><span className="dn-lvl-k">数据前置</span><span className="dn-lvl-v bear">实时盘面恢复（当前冻 17.4h）AND SM 馈源活（当前死 ~5.9 天）—— 两者都得成立、任何仓位腿才能读</span></div>
              </div>
              <div className="dn-gating">
                <b>硬规则：</b>没有一根活的仓位盘面、不开 scout。哪怕价格上一根干净的 flip
                重夺、只要 SM / funding / flow 腿还瞎、也不触发 scout —— 本台不会在一根看不见
                被回补的回补反弹里下仓。scout 双重锁死：技术上（空头 MTF、flip 下方）与操作上
                （盘面宕）。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 宏观尾 · put-spread re-grow 闸 —— 两腿都未触发（10Y 4.43% 在 4.53% 闸下、HY OAS 2.71% 在 2.78% 闸下）</span>
              <div className="dn-trade-name">
                下行 put-spread —— re-grow 闸两腿都未触发；无新对冲（宏观仍净 risk-on / 转松）
              </div>
              <div className="dn-thesis">
                谱系带的宏观 re-grow 闸 —— HY OAS &gt; 2.78% OR 10Y &gt; 4.53% 作为重长一根
                下行尾的条件 —— 在这次渲染上两腿都未触发：HY OAS 2.71%（距触发 7bp、当日往闸
                走 +5bp 但没到）、10Y 4.43%（距 10bp）。reclaim-long 利率筛（10Y &lt; 4.55%）
                在 4.43% 仍真。宏观面在利率 / 实际利率 / breakeven 上转松、还加了新鲜 Fed 净
                流动性 —— 净 risk-on、没有给对冲的宏观触发。这根 roll-over 是内生的；宏观尾不是
                对它合适的工具。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">无仓位 · 闸两腿都未触发</span></div>
                <div><span className="dn-lvl-k">re-grow 触发（下一根 Tier-1 印）</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% 收（当前 2.71%、距闸 7bp）OR 10Y &gt; 4.53% 收（当前 4.43%、距闸 10bp）</span></div>
                <div><span className="dn-lvl-k">reclaim-long 利率筛</span><span className="dn-lvl-v bull">10Y &lt; 4.55% 收 —— 在 4.43% 仍真；等一根 BTC 内部转向才能转化</span></div>
              </div>
              <div className="dn-gating">
                <b>注意：</b>re-grow 闸是随水位下漂调的酌情盯位、不是回测断点。如果它们最终触发、
                一根下行尾会在另起的未来备忘里重新评估 —— 并注意 dealer strip 进 26JUN 已经是
                净空 γ，所以任何这样的尾会叠加到既有的 dealer 放大上、而不是一根干净独立的对冲。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 挤压周期敌对-2 观察名单 · 无日历先验 · ON HOLD —— SM 馈源死 ~5.9 天、框架无法用自己的数据评估</span>
              <div className="dn-trade-name">
                挤压周期敌对-2 —— ON HOLD（06-16 的延续）：SM 馈源冻 ~142h、重堆签名本次读不出
              </div>
              <div className="dn-thesis">
                挤压周期 / 重堆-敌对-2 框架把离散 SM 步（Δshort &gt; 0 + Δlong &lt; 0 同一分钟）
                读成续跌签名；它的日历先验（BJ 13–15 节奏）在 05-31 被证伪、此后作为无先验观察
                名单跑。今天无法评估、理由最简单：SM 馈源死了。long_btc / short_btc / net_btc 自
                2026-06-12 01:36Z 起一字不动（~142h），所以没有 SM delta 可读。06-16 备忘在 ~94.5h
                的冻结上把它放 ON HOLD；在 ~142h 上它仍 ON HOLD。<span className="dn-em">一根冻结的
                馈源印不出签名；在 SM 数据恢复前、框架是暗的。</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">框架状态</span><span className="dn-lvl-v bear">ON HOLD · SM 馈源冻 ~142h（自 2026-06-12 01:36Z）· 无 SM delta 可算</span></div>
                <div><span className="dn-lvl-k">冻结值（不是读）</span><span className="dn-lvl-v">long 13,532.4 / short 50,825.7 / net −37,293.3 —— 一字不动、只为标这根死馈源而带</span></div>
                <div><span className="dn-lvl-k">恢复条件</span><span className="dn-lvl-v">SM 馈源恢复写新鲜 long_btc/short_btc → 从首批新鲜 delta 起重评重堆签名</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>一根死馈源不是一根安静的馈源。本台不从一个冻结三元组推断
                &ldquo;无重堆&rdquo; —— 它什么都不推断。挤压周期读法是悬置、不是负，馈源恢复后的
                首批新鲜 SM delta 是重新武装点。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件 <span className="dn-roman">VI · 实时盘面中断是操作上的主导条件 · 200W 地板对 26JUN 放大器是价格判定 · scout 双重锁死 · 宏观闸未触发</span>
            </h2>

            <p>
              06-16 那些条件里：备忘确认过的 200W 重夺已在 06-16 / 06-17 收上
              <em>被还回去</em>（不是破地板 —— 现货仍高出 $62,230 约 +3.7% —— 但突破没了）；
              scout 保持站着不动、现在还无法评估；宏观 re-grow 闸两腿保持未触发；挤压周期在
              一根现在更死的 SM 馈源上保持 ON HOLD。主导的新条件是操作性的：<em>实时盘面 17.4h
              前宕了、本台仓位瞎</em>。今天的条件围绕数据中断、围绕带过来的地板与 26JUN 放大器之间
              的价格判定、以及那根双重锁死的 scout 重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>实时盘面恢复（主导操作条件）</td><td className="bull">live_db.json 恢复写超过 2026-06-17 06:43Z 的新鲜行 AND SM 三元组从 06-12 01:36Z 冻结更新</td><td>完整重读 funding / OI / flow / SM；只有那之后 scout 或挤压周期才能评估 —— 在那之前仓位这一维是未知</td></tr>
                <tr><td>200W 地板丢（周期 regime 升级）</td><td className="bear">一根持续的周线收 &lt; $62,230（W-SMA200 地板）；一根日线收在下方是预警、不是破位</td><td>破 200W 地板 —— 另起评估；06-15 重夺论被证伪、下腿在 dealer 图放大下续行</td></tr>
                <tr><td>flip / D-SMA20 重夺（scout 的价格前置）</td><td className="bull">1h 收 &gt; flip $65,315 AND &gt; D-SMA20 $65,162、且 MTF 共振离空头</td><td>本身不是 scout 触发 —— 只在实时盘面也恢复时才重开 scout 评估；瞎盘面上、一根 flip 重夺是被盯、不是被交易</td></tr>
                <tr><td>26JUN26 月度放大器（8.3 DTE）</td><td className="bear">−41.45M 最重块；近串 18JUN/19JUN/20JUN/21JUN 全负；现货在 $60k–$65k put 墙带内</td><td>下行是跌进越来越深的空 gamma、朝 opex —— 只盯、本篇不给做空指令（任何未来设置在那篇备忘里定自己的触发 / 失效 / R）</td></tr>
                <tr><td>宏观尾 re-grow（闸未触发）</td><td className="bear">HY OAS &gt; 2.78%（距闸 7bp、当日 +5bp）OR 10Y &gt; 4.53%（距闸 10bp）</td><td>本篇不给对冲指令 —— 一根闸触发会在另起的未来备忘里重评（触发 / 失效 / R 在那里定）；注意任何这样的尾会叠加到既有 dealer 空 gamma</td></tr>
                <tr><td>reclaim-long 利率筛</td><td className="bull">10Y &lt; 4.55% 收 —— 在 4.43% 仍真</td><td>独立筛已真；需要一根 BTC 内部转向 AND 一根活的盘面才能转成 scout long</td></tr>
                <tr><td>挤压周期敌对-2（ON HOLD）</td><td className="stale">SM 馈源死 ~142h；无 delta 可算</td><td>悬置、不是负 —— 馈源恢复后首批新鲜 SM delta 上重新武装</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是
              <span className="dn-signal">
                实时盘面会不会在价格逼出判定之前回来 —— 因为如果 BTC 在本台仍仓位瞎时
                丢掉 $62,230 地板、撞进净空 γ 账与 26JUN −41.45M 放大器，下腿会在没有确认
                可用的情况下续行；而如果价格反过来在一根瞎盘面上重夺 flip $65,315，本台仍然
                没法 scout 那根弹
              </span>
              。在盘面恢复前、本篇按写好的跑：账空仓、scout 双重锁死（空头 MTF + 瞎盘面）、
              宏观尾闸未触发、挤压周期悬置、200W 地板盯位是唯一活的水位。价格与 MTF 从 06-15
              重夺翻了过去；dealer 账在 flip 下方净空 γ、26JUN 月度放大器在下方；宏观面保持净
              risk-on、BTC 已对一个仍在升的 TradFi 复合体再耦合、同时在前端把它还回去。下一个
              24h 的对读是<em>防守且有耐心 —— 修盘面、然后读仓位；其间尊重地板与放大器</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2 —— 已过 codex 敌对式审计 · 见 audits/2026-06-18-desk-note.md
            </span>
            <b>判决：</b>codex 敌对但公允返回 PASS-WITH-NOTES（无 CRITICAL；4 MAJOR
            + 3 MINOR），外加一根 ask-deepseek 补充算式 pass 标出一根 MAJOR 的带宽错误。
            v2 在 EN+ZH 应用每一条 finding；每条都在全文做了 grep 闭合（搜关键的错误主张
            模式、在它仍带旧义的每处修掉、再 grep 到零）。处理日志（模式 · 修前命中 → 修后
            命中）：{' '}
            <b>DN-001</b>（MAJOR · W-SMA200 被错称不可计算、&ldquo;低于每根线&rdquo;过宽）——
            &ldquo;W-SMA200 non-computable&rdquo; 6→0、&ldquo;below every line/MA&rdquo;
            3→0：W-SMA200 从全历史 glob 重算（355 根周 W-MON bar、2019→至今）= $62,230、与
            06-16 地板重合并确认；显示阶梯用 2023→ 子集，所以现货在每根<em>显示</em> MA
            下方、但在全历史 200W 地板上方。<b>已解决</b>。{' '}
            <b>DN-002</b>（MAJOR · 日线收触发把地板破位说过头）——
            &ldquo;first 200W floor break&rdquo; / &ldquo;daily close = break&rdquo; 2→0：
            地板破位现在是一根<em>持续的周线收</em> &lt; $62,230（W-SMA200 是周线收口径
            框架）；日线收在下方是预警、且去掉了无支撑的&ldquo;周期首次&rdquo;措辞。
            <b>已解决</b>。{' '}
            <b>DN-003</b>（MAJOR · 未证的 PID/进程存活主张）—— &ldquo;PID 3037845&rdquo; /
            &ldquo;进程存活/驻留&rdquo; 2→0：本篇现在只主张 live_db.json 自 06-17 06:43Z
            起没再写过（文件 mtime）；进程状态本次明确没存档 / 没核实。<b>已解决</b>。{' '}
            <b>DN-004</b>（MAJOR · 可执行的未来做空/滚动超出空仓框架）—— &ldquo;size any
            future short&rdquo; / &ldquo;roll a downside tail&rdquo; 2→0（外加 gating 格
            软化）：决策格现在是盯 / 重评语言 —— 本篇不给做空或对冲指令；任何未来设置在那
            篇备忘里定自己的触发 / 失效 / R。<b>已解决</b>。{' '}
            <b>DS-band</b>（MAJOR · ask-deepseek）—— &ldquo;~$2.3k 带 … 第一根重夺线&rdquo;
            1→0：地板→D-SMA20 距离是 $65,162 − $62,230 = $2,932、所以带宽改述为 ~$2.9k。
            <b>已解决</b>。{' '}
            <b>DN-005</b>（MINOR · 24h/1h 窗宽了一分钟）—— live_db 末根流向窗重标为 24h+1m
            / 61m 含端采样跨度（1,442 行），让标签与数据一致。<b>已解决</b>。{' '}
            <b>DN-006</b>（MINOR · GEX 串对账）—— &ldquo;余额 … 未单独列出&rdquo; 1→0：
            −38.7M 串对 −47.8M headline 的差披露为口径不同（surface-grid 总量 vs 精确现货
            by-expiry profile）、不是漏 expiry。<b>已解决</b>。{' '}
            <b>DN-007</b>（MINOR · DXY 措辞）—— &ldquo;小幅走强&rdquo; 1→0：改为&ldquo;小幅
            转软 … 仍偏高&rdquo;、与 −0.08 印及表读一致。<b>已解决</b>。{' '}
            <b>codex 已清（未改）：</b>requireViewer gating 是默认导出首语句、路径
            /zh/desk/2026-06-18；headline 现货 $64,558（parquet 00:06Z）由 GEX Deribit
            idx $64,673 交叉印证；funding −7.24% ann（原始 −0.006608 × 1095、不是 ×100）；
            GEX 双参考 flip $65,315 两参考都在下方；SM cut-fraction 声明不可计算（冻结馈源、
            无 |Δ|/prior_net）；RV 42.67%（30 returns / 31 closes；43.07% 29-return 另读）
            对 IV 43.6% 横跨 934 合约（链中位数、不是可交易价差）；NTT / max-pain /
            strike-IV / BTC-NQ framework only；JGB 月度不依赖。EN/ZH 数值平价（零漂）。{' '}
            <b>Build note（INFO）：</b>本服务器跑 Node 18.19.1；完整
            <code>next build</code> 在 Node 版本闸上被环境阻塞（谱系），所以
            <code>npx --no-install tsc --noEmit</code> 是 build proxy —— STAGE E 负责
            最终 build 验证。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体情况个性化。
            数字反映单一原子快照（2026-06-18 00:06Z）、provenance 在上方数据来源条带中按节
            披露；<em>关键是，快照时实时衍生品盘面已冻 17.4h（最末行 2026-06-17 06:43Z）、
            smart-money 仓位馈源已死 ~5.9 天</em>，所以一切 funding、OI、flow 与仓位数字都
            明确是 LAST-KNOWN / 陈旧或不可计算、并已标注；宏观面板渲染 2026-06-17 22:15Z
            （比快照早约 1.9h）。价格、MTF、GEX 与跨资产是新鲜的。水位、规模与条件是交易台
            流程的示例、不是长期推荐。过去的相关性、γ 与仓位模式不绑定未来盘面。衍生品有
            全损风险、加杠杆下损失可超过保证金。<em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                重夺被还进一本空 γ 账里、盘面也黑了。守地板、盯 26JUN 放大器、读仓位前先修
                馈源。防守。耐心。
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
            v2 · 2026-06-18 00:06Z 快照 · 已过 codex 敌对式审计 · sources: live_db.json
            （冻结 06-17 06:43Z）· mtf_div_latest.html · btc_gex.html ·
            macro_dashboard.html · cross_asset_correlation_summary.md ·
            btcusdt_1m_*.parquet · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
