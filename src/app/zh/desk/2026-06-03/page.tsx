import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-06-03 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-06-03',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-06-03' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260603() {
  await requireViewer('/zh/desk/2026-06-03');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-06-03 · v2</span>
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
              <span className="dn-big">$66,752</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−6.41%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-06-03 00:05Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-06-03 00:05Z（snapshot pin）</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · 快照 pin 行 = 00:05Z；审计时 live 文件已
                    前进过 pin · 3JUN26 0.3DTE −4.30M 在今日 08:00Z 结算
                    （快照后约 8h）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-03 00:16Z 扫描（按 audit DN-002 修正）</td>
                  <td className="dn-flag">
                    滚动 latest 文件（约每 15 分钟重写）· 比快照锚晚约 11
                    分钟 · 含未收盘 K 线 · v1 引用的 00:01Z 扫描没单独存档，
                    audit DN-002 改用 00:16Z 这份审计时可回溯文件，逐字
                    存档于 audits/2026-06-03-desk-note.md
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-03 00:01Z 快照</td>
                  <td className="dn-flag">
                    较快照锚滞后约 4 分钟 · Deribit idx $67,006 对 live
                    $66,752（高 $254）· 998 合约（06-02 是 904；2JUN 0.3DTE
                    −9.08M 在 06-02 08:00Z 已结算，一批近端新链挂上来）·
                    3JUN26 0.3DTE −4.30M 是下一根结算（今日 08:00Z、快照
                    后约 8h）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-03 00:01Z
                  </td>
                  <td className="dn-flag">滞后约 4 分钟 · 7d 1h bar · 22 资产 · 167 rows</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-02 22:15Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.8h · FRED Tier-1 基本平（10Y +2bp 到
                    4.47%、TIPS 不动 2.07%、5Y5Y BE +2bp 到 2.26%、HY OAS
                    −2bp 到 2.72% —— 回到 05-31 水位、MOVE 73.3 当日不动）·
                    DXY +0.02 到 99.22 当日（自 06-01 22:15Z 印 +0.22，按
                    audit DN-006 把 manifest 99.21 校到 99.22 与源对齐）·
                    Fed 净流动性 $5.872T（水位对前一篇不变；源端周度 Δ
                    −0.058T 按 audit DN-006 明示）· Tier-3 通胀行仍抓取
                    失败
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-06-03 00:06Z（按桌面政策只用 btcusdt_1m_2024..2026 子集）</td>
                  <td className="dn-flag">
                    较快照锚领先约 1 分钟 · MA 源域是 2024-2026 parquet
                    子集（127 根周 bar），不是完整 btcusdt_1m_* glob ——
                    这是 06-02 audit DN-005 延续下来的桌面政策 · 子集下
                    W-SMA150 / W-SMA200 不可计算；W-EMA150 / W-EMA200 能
                    显示是因为 EMA 从可用历史 seed、按种子口径披露 ·
                    偏移按 live 现货 $66,751.51 算（回到 06-02 之前的口径，
                    跟 06-02 那篇的 parquet 邻近分母不同；codex 审计 open
                    issue 留作后续 lineage 决定）
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
              <span className="dn-v">+7.65%（脱顶）</span>
              <span className="dn-src">live · 当前脱顶段 113 采样行 / 1.88h，自 2026-06-02 22:13Z（BJ 06:13 06-03）起算 · 这道 24h 窗里有 TWO 段脱顶 —— 较早 06-02 06:27Z–16:49Z（622 分钟 / 约 10.4h，在 dump 中段里）和当前 22:13Z 起的这段 —— 合计 ~734 分钟 / ~12.2h 累积脱顶 · 24h 均 +9.33%（06-02 是 +8.90%，当日均更硬是因为两段脱顶之间封顶段长）· 封顶占用 705 / 1441 采样行 = 48.92%（06-02 是 52.60%）· 24h funding 谷 +5.68% @ 06-02 09:07Z（BJ 17:07 06-02），落在较早那段脱顶里</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v">+10.95% → +7.65%（−3.30pt、脱顶）</span>
              <span className="dn-src">区间 +5.68% / +10.95% · 杠杆门在 24h 内开过两次（合计 ~12.2h），中间又压回封顶、谷 +5.68% 仍正（没短付多印、对照 05-31 −0.21% 那种 regime 没回来）—— 压在消、但没翻面</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">+1.62%（+1,702 BTC）</span>
              <span className="dn-src">live · 扩张（06-02 是 +469 BTC / +0.44% · 这 24h 扩了约 3.6 倍）· SM long_btc +3,928（多侧从上一根谱系谷里重建）、short_btc +7,681 —— 空侧在多加上一侧又两倍地叠上去</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bear">69.35 / 30.65</span>
              <span className="dn-src">live_db `mkt_long_pct` · 从 67.66 重堆到 69.35（+1.69pt、越过 06-02 那根 67.66 的谱系峰、再立新峰）· 24h 区间 66.53 / 69.36 —— 一根 −6.41% 的 24h 里 retail 反而 HARDER 挤进多头，典型陷阱形再拉宽一档</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−40.8k（比 06-02 更深净 SHORT、两侧都更大）</span>
              <span className="dn-src">live · long 12.65k − short 53.47k · short 在 56.04k @ 2026-06-02 19:26Z（BJ 03:26 06-03）见谱系新峰，到 pin 已落 −2.56k；long_btc 谷 8.40k @ 2026-06-02 08:36Z（BJ 16:36 06-02）；SM net 谷 −44.44k @ 2026-06-02 14:01Z（BJ 22:01 06-02）—— 谱系最深，比 06-02 那根 −37.78k 再深 −6.65k</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 06-02 备忘</span>
              <span className="dn-v bear">−37.0k → −40.8k（−3,786 净；多 +3,813、空 +7,600）</span>
              <span className="dn-src">|Δ|/prior_net = 10.22%（3,786 / 37,036）· 本子两侧都长、空堆得比多重建更狠 · 24h 内 gross book +11k BTC、net 更空 10%</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v bear">47.6% / 34.03%</span>
              <span className="dn-src">GEX IV 中位数 · 998 合约（06-02 是 904；2JUN 0.3DTE 在 06-02 08:00Z 结算之后挂了一批新近端链）· 价格破 $70k 同时 vol bid 又抬 +6.2pt（06-02 是 41.4%）· 30D RV 抬到 34.03%（06-02 是 26.72%、+7.31pt）—— 谱系单日最大一根 RV 扩张，落在 06-02 −6.53% 那根日 close 上</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bear">−3.73%（下方；live 现货参考）</span>
              <span className="dn-src">flip $69,335（前 $72,086、落 −$2,751）· 对 live 现货 $66,751.51（−3.73%；66,751.51 / 69,335 − 1 = −3.728%）/ GEX 文件 Deribit idx $67,006（−3.36%；67,006 / 69,335 − 1 = −3.359%、与文件自家 tile −3.4% 对齐）—— 两参考都负、现货深陷 flip 下方、谱系最宽下穿读；aggregate GEX 深到 −38.8M（06-02 是 −23.3M、再放大 −$15.5M）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                周期阶梯破位再下一层、dealer 本子深陷净空 γ、$70k 那道
                墙被穿干净、SM 本子单侧重堆空头到谱系峰、retail 在
                −6.41% 的 24h 里挤得更深 —— 不过杠杆门已经在 24h 内
                开过两次、合计 ~12.2h 累积脱顶
              </span>
              。aggregate GEX 从
              <span className="dn-tag bear">−23.3M</span> 走到
              <span className="dn-tag bear">−38.8M</span>（再加深 −$15.5M
              放大）、0-γ flip
              <span className="dn-tag">$72,086 → $69,335（−$2,751）</span>、
              现货
              <span className="dn-tag bear">$66,752 坐在 flip 下方 −3.73%</span>
              （live 参考；GEX 文件 Deribit idx 侧 tile 给 −3.4%，两参考
              都负 —— 谱系里最宽下穿）。日 close 走
              <span className="dn-tag bear">06-01 $71,392 / 06-02
              $66,730</span>（连续两根落在 D-SMA100 周期锚 $73,191 下方、
              06-02 那根 −$4,662 是谱系单日最大一根落）、未收盘 06-03 印
              <span className="dn-tag bear">$66,701（再低 06-02 close
              $29）</span>。06-02 那篇下的 shape B 框架监控
              （<span className="dn-em">1h close &lt; $70,718 AND 一根
              fresh Δnet ≤ −3k 重堆敌对-2</span>）在下一根 BJ 13–15 窗
              内印干净：
              <span className="dn-tag bear">2026-06-02 06:46Z（BJ 14:46
              06-02）</span> Δnet
              <span className="dn-tag bear">−6,621</span>
              （Δlong −742、Δshort +5,879 同分钟、SM net 跨
              <span className="dn-tag">−39,581 → −46,202</span>、现货
              <span className="dn-tag">$70,298</span>）—— 谱系
              <span className="dn-em">单分钟最大一根 Δnet</span>、压过 05-30
              22:01 那根 −5,569、是连续第三根 BJ 13–15 窗内印。框架纪律
              来自 06-02 audit DN-001：shape B 是框架监控、不是 live 入场
              —— 结构预言对、但桌面没 size 跟上。funding 这边在 24h 内
              两次脱开 Binance 封顶：较早一段
              <span className="dn-tag bull">06-02 06:27Z–16:49Z（622 分钟
              / 约 10.4h、落在 dump 中段里）</span>，然后当前一段从
              <span className="dn-tag bull">06-02 22:13Z（BJ 06:13 06-03）
              </span>起算的 113 分钟 / 1.88h，到快照
              <span className="dn-tag">+7.65% ann</span> —— 累积 ~12.2h
              脱顶、把 06-02 框架那根 <em>≥ 4h 累积</em> 长头第一腿
              CLEARED ~3 倍以上。retail
              <span className="dn-tag bear">67.66% → 69.35%（+1.69pt 越过
              前一根谱系峰）</span>在一根 −6.41% 的 24h 里堆得更深、
              long-trap 形是谱系最宽。OI 扩
              <span className="dn-tag bear">+1,702 BTC</span> 跨 24h
              （~3.6 倍 06-02 的 +469 BTC）；short_btc 新谱系峰
              <span className="dn-tag bear">56,036 @ BJ 03:26 06-03</span>；
              SM net 新谱系谷
              <span className="dn-tag bear">−44,438 @ BJ 22:01 06-02</span>。
              4h TD9 BUY 再印在 $66,835（06-02 是 $71,226、−$4,391 更低）、
              8h / 1d / 1M 全部
              <span className="dn-tag bull">TD8 Buy → 9?</span> 离印一根
              —— 多周期超卖在堆。今天的盘是确认了的周期阶梯破位、dealer
              本子更深净空 γ、仓位本子单侧空头、加上
              <em>杠杆门里第一根真正可以读的累积脱顶信号</em>
              （≥ 4h 累积长头门 CLEARED）。
            </p>

            <p>
              BTC 报 <span className="dn-tag">$66,752</span> live、24h
              <span className="dn-tag bear">−6.41%</span>，在一根宽
              <span className="dn-tag">$71,370 / $66,229</span> 的区间里
              （高 @ 2026-06-02 01:15Z / BJ 09:15 06-02、低 @ 2026-06-02
              23:04Z / BJ 07:04 06-03 —— 这根低印在快照前 61 分钟、
              <em>是低印之后桌面第一根快照</em>、live tape 自己在低位行和
              pin 之间还垫了 60 行 1 分钟印，按 audit DN-005 改）。06-02
              那篇标的 active 闸
              <span className="dn-em">「1d close &lt; W-EMA200 种子 $73,678
              AND 1d close &lt; 周期锚 $73,216 —— 两条腿在未收盘上已真」</span>
              在
              <span className="dn-tag bear">2026-06-02 UTC close $66,730</span>
              上确认、并向下延伸 $6,461 离开周期锚（今日按 parquet 最末
              bar 重算 D-SMA100 $73,191；昨天那篇的 $73,216 落了 $25 因为
              06-02 dump 那根把 rolling 窗压下来）。未收盘的 06-03 daily
              <span className="dn-tag bear">$66,701</span> 又在那根 close
              下 $29 —— 暂时没有反弹蜡烛在路上、只是在低位横向消化。
              <span className="dn-signal">头顶 MA 现在每一根都深负</span>：
              从最近一根 W-SMA20
              <span className="dn-tag bear">$72,807（−8.32%）</span>，到
              周期锚 D-SMA100
              <span className="dn-tag bear">$73,191（−8.80%）</span>、
              W-EMA200 种子
              <span className="dn-tag bear">$73,632（−9.34%）</span>、
              D-EMA20 <span className="dn-tag bear">$74,044（−9.85%）</span>、
              D-SMA20 <span className="dn-tag bear">$74,984（−10.98%）</span>、
              D-EMA50 <span className="dn-tag bear">$75,284（−11.33%）</span>、
              D-SMA150 <span className="dn-tag bear">$75,726（−11.85%）</span>、
              D-EMA100 <span className="dn-tag bear">$76,053（−12.23%）</span>、
              W-EMA20 <span className="dn-tag bear">$76,671（−12.94%）</span>、
              D-SMA50 <span className="dn-tag bear">$76,932（−13.23%）</span>、
              W-EMA150 种子
              <span className="dn-tag bear">$78,076（−14.50%）</span>、
              D-EMA150 <span className="dn-tag bear">$78,265（−14.71%）</span>、
              D-SMA200 <span className="dn-tag bear">$79,096（−15.61%）</span>、
              D-EMA200 <span className="dn-tag bear">$80,660（−17.24%）</span>。
              06-02 的「零正偏移、~$2.4k 头顶带」拉成
              <span className="dn-em">~$6.5k 离锚、~$13k 离深 MA 簇</span>
              的头顶带 —— 重夺阶梯按顺序还在，但每一根现在离现货都有
              一根整日均幅蜡烛的距离、不是一根快速重夺的距离。
              <span className="dn-em">
                结构性背景是确认了的周期阶梯破位再下一层：锚上方消化 →
                第一根破锚 close → 连续两根远离锚 close、dealer 本子更深
                净空 γ、仓位本子单侧重堆空头到 short_btc 新谱系峰 56,036
                @ BJ 03:26 06-03（到 pin 已落到 53,474）、long_btc 12,653
                在 pin 上仍在前几根谱系长侧峰下方（05-29 17:21Z 15,358、
                06-02 19:46Z 12,852），所以两侧并不是同时坐在谱系峰 ——
                单侧空堆 + 多侧仍在前峰下（按 audit DN-004 改）。
              </span>
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面 · 24h 本子 gross 两侧都长 · 净更深空 · BJ 13–15 节奏 FIRED 一根谱系单分钟最大 Δnet · funding 累积 ~12.2h 脱顶（两段）—— ≥ 4h 累积长头门 CLEARED</span>
            </h2>

            <p>
              <span className="dn-signal">
                仓位本子在 dump 蜡烛里两侧都加 gross、净跨深一档空 ——
                空堆得比多重建更狠
              </span>
              。SM net 是
              <span className="dn-tag bear">−40,822</span>，对 06-02 备忘
              的 −37,036 ——
              <span className="dn-em">+10.22% 更空</span>
              （|−40,822 − (−37,036)| / 37,036 = 10.22%）。分量：long_btc
              <span className="dn-tag bull">8.84k → 12.65k（+3.81k）</span>、
              short_btc
              <span className="dn-tag bear">45.87k → 53.47k（+7.60k）</span>
              —— 多侧从前一根谱系谷里重建 ~43%、空侧在多侧之上再两倍叠
              上去。gross book 跨 24h +11k BTC、净更空 10%。
              <span className="dn-em">
                这是空侧单边重堆 + 多侧重建、不是多侧投降。
              </span>
              24h 窗内：long_btc Δ
              <span className="dn-tag bull">+3,928</span>、short_btc Δ
              <span className="dn-tag bear">+7,681</span>、net Δ
              <span className="dn-tag bear">−3,754</span>（+3,928 − 7,681
              = −3,753 ≈ −3,754 取整）—— gross +11.6k BTC、net −3.75k BTC。
              short_btc 见峰
              <span className="dn-tag bear">56,036 @ 2026-06-02 19:26Z
              （BJ 03:26 06-03）</span> —— 谱系新峰（06-02 那根 snap 是
              45,874），到 pin 落 −2.56k 仍高位。long_btc 在 24h 窗里见谷
              <span className="dn-tag">8,395 @ 2026-06-02 08:36Z（BJ 16:36
              06-02）</span> 然后重建到 pin 12.65k；
              <em>更广谱系里 long_btc 仍以 06-02 那篇 7,354 @ 06-01 22:16Z
              为谷</em>。SM net 谷
              <span className="dn-tag bear">−44,438 @ 2026-06-02 14:01Z
              （BJ 22:01 06-02）</span>、谱系最深、比 06-02 那根 −37,783
              深 −6.65k。本子两侧都更大、net 更空 —— 这道压还没把仓位
              堆压破。
            </p>

            <p>
              <span className="dn-signal">
                框架的 BJ 13–15 节奏在第三根连续印上出谱系单分钟最大一根
                Δnet
              </span>
              。24h 内单分钟最大一步印在
              <span className="dn-tag bear">2026-06-02 06:46Z（BJ 14:46
              06-02）</span>、现货
              <span className="dn-tag">$70,298</span>：long_btc 一根线
              <span className="dn-tag">9,306 → 8,565</span>（−742 BTC）、
              short_btc 同分钟
              <span className="dn-tag">46,642 → 52,521</span>（+5,879 BTC
              在<em>一分钟</em>里；52,521 − 46,642 = 5,879）、SM net 一根
              <span className="dn-tag">−37,335 → −43,956</span>（Δnet
              −6,621 —— 谱系单分钟最大 Δ、压过 05-30 22:01 那根 −5,569）。
              这一步是重堆敌对-2 签名（Δshort &gt; 0 + Δlong &lt; 0 同
              一分钟）<span className="dn-em">落在 BJ 13–15 窗内</span> ——
              06-02 那篇在 06-01 BJ 14:16 −3,137 印后重新装弹的节奏、
              现在第三根连续观察上确认（06-01 −3,137 → 06-02 −6,621）。
              06-02 完整 BJ 13–15 窗在 SM net −36,194 开、−44,002 收 ——
              一道 2h 窗 Δ −7,809、被那根 14:46 单步主导。06-02 的 BJ 22
              次级窗（UTC 14:00 06-02）只印一根小回补
              （max |Δnet| = +813 @ 14:16Z、Δlong +693、Δshort −120）——
              次级窗今天没印；只主窗确认。价格后续：14:46 BJ 步在 $70,298
              领出后续 dump 到 24h 低
              <span className="dn-tag bear">$66,229 @ BJ 07:04 06-03
              （步后 8h 18m）</span> —— −$4,069 / −5.79% 跟随。
              <span className="dn-em">
                节奏现在不只是基率、是活的周期-3 step 2 确认 + 谱系最深
                单分钟签名 + 干净的价格跟随。周期-3 step 3 下一道闸是
                06-03 BJ 13–15 窗（UTC 05:00–07:00 06-03、快照后 ~5h）。
              </span>
            </p>

            <p>
              杠杆侧给出 down-leg 第一根真正可读的累积脱顶信号。
              <span className="dn-signal">
                funding 在 24h 窗里两次脱开 Binance 封顶 —— 较早一段
                06-02 06:27Z–16:49Z（622 分钟 / ~10.4h、落在 dump 中段
                里）、然后当前一段从 06-02 22:13Z 起算的 113 分钟 / 1.88h
                进 snap
              </span>
              ：live <span className="dn-tag">+7.65% ann</span>（封顶 +10.95%
              的状态最近一根印在 06-02 22:12Z / BJ 06:12 06-03）、24h
              区间
              <span className="dn-tag">+5.68% / +10.95%</span>、谷
              <span className="dn-tag">+5.68% ann @ 2026-06-02 09:07Z
              （BJ 17:07 06-02）</span>—— 这根谷落在较早那段 622 分钟脱顶
              段里、比 06-02 那根 +4.16% 更深、但仍正（没短付多印、对照
              05-31 −0.21% regime 没回来）。24h 均 ann
              <span className="dn-tag bear">+9.33%</span>（06-02 是 +8.90%
              —— +0.43pt 当日更硬，被两段脱顶之间的封顶段拉高）。封顶
              占用
              <span className="dn-tag">705 / 1441 采样行（48.92%）</span>
              —— 比 06-02 的 52.60% 低；其余 ~734 分钟（~12.2h 累积）
              在两段里脱顶。累积脱顶时间在 24h 窗里
              <span className="dn-em">已经按 06-02 框架的 ≥ 4h 累积长头
              第一腿 CLEARED ~3 倍以上</span>、≥ 30 分钟连续的 watch 在
              两段上都满足 ——
              <span className="dn-em">
                按累积口径，mean-revert 长头 scout 的「funding 第一腿」
                CLEARED
              </span>
              （促升 trigger 仍在框架监控里，详见下面交易本子）。OI Δ
              <span className="dn-tag bear">+1,702 BTC（+1.62%）</span>
              跨 24h —— ~3.6 倍 06-02 那根 +469 BTC（dump 在 24h 里大幅
              扩 gross、然后进 snap 的 4h 窗实质缩 —— 见下面窗口流向）。
              retail
              <span className="dn-tag bear">mkt_long_pct 69.35%</span>
              从 67.66% —— +1.69pt 越过前一根 67.66% 的谱系峰，是谱系
              最挤的 retail 多头读（24h 峰 69.36% 进 snap）。perp 对现货
              在 snap
              <span className="dn-tag bear">折价 −$111.42</span>
              （1h 均 −$105.69、区间 −$238.13 / −$14.83 —— −$238 那根
              印落在 06-02 23:04Z 低分钟的 snap-hour 里；4h 均 −$109.08；
              24h 均 −$113.18、区间
              <span className="dn-tag bear">−$238.13 / +$158.08</span>
              —— basis 24h 内一度 +$158、05-31 那种 above-flip regime
              之后第一根 cross-positive 印，但很快回吐回去）。1 分钟
              aggressor skew snap
              <span className="dn-tag">+12.2</span>（1h 均 +5.55、区间
              −34.2 / +39.1）—— 这一小时一档温和买攻倾斜，跟 23:04Z 低位
              之后的反射 bid 一致。
              <span className="dn-em">
                funding 累积 ~12.2h 脱顶（两段）+ retail 比前峰更挤 + SM
                两侧都加 gross + 24h OI 扩张叠加 4h OI 缩：杠杆本子已经
                在 24h 窗里印出真实的累积脱顶门信号，不再只是「边缘」；
                但 retail 与 SM 空仍堆得很重。06-02 的「杠杆本子在压、
                没泄气」读法只在 pin-time 平均上撑住 —— 累积脱顶门按
                cumulative 口径已经 CLEARED。
              </span>
            </p>

            <p>
              窗口流向：一根重空 24h、一根抵消的 4h 去 gross、一根混合
              1h 带<em>现货在低位 bid、期货还在卖</em>。24h：价
              <span className="dn-tag bear">−6.41%</span>、OI
              <span className="dn-tag bear">+1,702 BTC</span>、现货 CVD
              <span className="dn-tag bear">Δ −2,552</span>
              （干净 Δ、窗内无 reset）、期货 CVD raw
              <span className="dn-tag bear">Δ −1,323</span>
              <em>但 fut_cvd 在 24h 窗内有两次技术 reset（16:37Z 与
              23:32Z），累积 Δ 不是干净读 —— reset 调整后 Δ ≈ +1,366
              （即期货侧整体回补 bid）</em>、大单
              <span className="dn-tag bear">−1,966 BTC / 1,064 笔</span>、
              taker-net <span className="dn-tag bear">−1,323</span> ——
              <span className="dn-em">
                现货在下腿里被狠卖（−2.55k 干净 cb_cvd）、期货形被 reset
                artifact 模糊（raw Δ 偏空、reset 调整后 Δ 偏多）、大单
                净卖方、OI 在下印里扩：这道 24h 是一根现货牵头的方向性
                dump、期货整体在 reset 调整后偏多但读不干净；现货 CVD
                是最干净的 24h 流向读
              </span>
              。4h（精确端点窗 2026-06-02 20:05Z → 2026-06-03 00:05Z）：
              价 <span className="dn-tag bear">−0.87%</span>、OI
              <span className="dn-tag bull">−1,341 BTC</span>
              （<em>去 gross！</em>—— 周期破位以来第一根实质 4h OI 缩）、
              现货 CVD <span className="dn-tag bull">Δ +208</span>
              （温和现货 bid）、期货 CVD raw
              <span className="dn-tag">Δ +75</span>
              （窗内有 1 次 reset 在 23:32Z；reset 调整后 Δ ≈ +1,081）、
              大单
              <span className="dn-tag bear">−495 BTC / 195 笔</span>、
              taker-net <span className="dn-tag">+75</span> —— 形状混合：
              偏空大单读对冲 cvd 那道温和 bid；OI 缩示意空头在 4h dump
              段里 cover、即使大单印净卖方。1h（精确端点窗 2026-06-02
              23:05Z → 2026-06-03 00:05Z）：价
              <span className="dn-tag bull">+0.61%</span>、OI
              <span className="dn-tag bear">+395 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +455</span>、期货 CVD raw
              <span className="dn-tag bear">Δ −798</span>
              （1h 窗内无 reset；干净 Δ）、大单
              <span className="dn-tag bear">−856 BTC / 77 笔</span>、
              taker-net <span className="dn-tag bear">−798</span> ——
              snap-hour 读一根 23:04Z $66,229 低位之后的反射 bid（价
              +0.61%）、现货 bid 牵头（+455 cb_cvd）、期货仍在卖
              （−798 fut_cvd 干净、−856 大单）；现货 vs 期货背离形跟一
              根战术 bounce 试探一致、还没把期货拉过来。
              <em>fut_cvd 在 24h 窗内两次 reset（文件自己里的双重技术
              信号）限制了三段时间框里期货聚合 Δ 的读法干净度；现货 CVD
              是承重的流向读。</em>
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 图（00:16Z 扫描，按 audit DN-002 修正）· 4h ⚡ TD9 BUY 在 $66,835（比 06-02 印的 $71,226 低 −$4,391）· 8h / 1d / 1M Buy 8 → 9? 离印一根 · RSI 横跨 4h–12h 谱系最深超卖（13.4 / 15.5 / 14.6）</span>
            </h2>

            <p>
              <span className="dn-signal">
                结构扫描确认全栈空 regime、并叠了第一根实质 oversold-
                reversal hint
              </span>
              。8h 水下死叉从 06-02 那根新鲜 2-bar 印老到
              <span className="dn-tag bear">5 bar</span> —— 引擎周期完全
              确认空、06-02 那根「刚死叉印」已经有时间延伸。慢周期都
              加入：<span className="dn-tag bear">3d 水上死叉在 2 bar
              （仍确认）</span>、1d
              <span className="dn-tag bear">云下 2 bar</span>
              （06-02 那根 1-bar 破云今天确认并老化）、3d
              <span className="dn-tag bear">云下 刚穿（今日确认）</span>
              —— 06-02 那根「刚破」完全解算。RSI 塌进
              <span className="dn-em">谱系最深超卖</span> 横跨引擎与中
              周期：1h <span className="dn-tag bear">25.0</span>
              （06-02 是 32.8 —— 更深、洗盘区）、4h
              <span className="dn-tag bear">13.4</span>（06-02 是 26.9 ——
              耗尽区、谱系最深 4h RSI）、8h
              <span className="dn-tag bear">15.5</span>（06-02 是 26.1 ——
              谱系最深 8h RSI）、12h
              <span className="dn-tag bear">14.6</span>（06-02 是 23.3、
              谱系最深 12h RSI）、1d
              <span className="dn-tag bear">22.2</span>（06-02 是 30.0 ——
              塌中）。单周期反向信号栈在长：
              <span className="dn-tag">⚡ 4h TD9 BUY 印在 $66,835</span>
              —— down-leg 里第二根连续 4h TD9 BUY（06-02 那根扫描是
              $71,226、今日 −$4,391 更低），加
              <span className="dn-tag bull">8h Buy 8 → 9?</span>
              离印一根、加
              <span className="dn-tag bull">1d Buy 8 → 9?</span> 离印一根、
              加 <span className="dn-tag bull">1M Buy 8 → 9?</span> 离印一根。
              如果 8h 与 1d 在下根 bar close 上都印出确认 TD9 BUY，
              超卖反转信号的 TF-stack 会是谱系最深。
              <span className="dn-em">
                直读：引擎与慢周期完全确认空（8h 死叉 5b + 3d 死叉 2b
                + 1d 云下 2b + 3d 云下刚穿）、RSI 在 4 个周期上是谱系最深
                超卖、oversold-reversal 反向栈是谱系最重 —— 4h TD9 BUY
                已经印、8h / 1d / 1M 离一根 bar。06-02 那篇「引擎重新
                确认空、慢周期加入、4h TD9 BUY 反向信号」的读法在今天
                是同一形状、双轴都拉得更远：空确认更深、反向 oversold
                栈更重。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">66,824</td><td className="num">42.9</td><td className="bear">死叉（水下）5b</td><td className="bear">云下 ↑67.9k 97b</td><td>Sell 2</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">66,824</td><td className="num">37.9</td><td className="neut">金叉（水下）7b</td><td className="bear">云下 ↑70.1k 89b</td><td>Buy 4</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">66,824</td><td className="num bear">25.0</td><td className="bear">死叉（水下）47b</td><td className="bear">云下 ↑71.8k 43b</td><td>Buy 3</td><td>BULL reg</td></tr>
                <tr><td>4h</td><td className="num">66,835</td><td className="num bear">13.4</td><td className="bear">死叉（水下）10b</td><td className="bear">云下 ↑74.3k 49b</td><td>⚡ TD9 BUY</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>8h</td><td className="num">66,824</td><td className="num bear">15.5</td><td className="bear">死叉（水下）5b</td><td className="bear">云下 ↑76.2k 54b</td><td>Buy 8 → 9?</td><td>BULL reg</td></tr>
                <tr><td>12h</td><td className="num">66,824</td><td className="num bear">14.6</td><td className="bear">死叉（水下）13b</td><td className="bear">云下 ↑78.3k 23b</td><td>Buy 5</td><td>BEAR hid</td></tr>
                <tr><td>1d</td><td className="num">66,824</td><td className="num bear">22.2</td><td className="neut">—</td><td className="bear">云下 ↑73.9k 2b</td><td>Buy 8 → 9?</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>3d</td><td className="num">66,824</td><td className="num">35.4</td><td className="bear">死叉（水上）2b</td><td className="bear">云下 ↑74.0k 刚穿</td><td>Buy 7</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">66,824</td><td className="num">36.7</td><td className="neut">金叉（水下）7b</td><td className="bear">云下 ↑100.3k 18b</td><td>Buy 3</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">66,824</td><td className="num">44.1</td><td className="neut">—</td><td className="bull">云上 ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 00:16Z 滚动扫描（v1 草稿
                    引用的 00:01Z 扫描没单独存档、audit DN-002 后改用
                    00:16Z 这份审计时可回溯文件、逐字存档于
                    audits/2026-06-03-desk-note.md）。头部告警：
                    <em>3d 水上死叉 2b（仍确认）</em>、
                    <em>4h ⚡ TD9 BUY 在 $66,835</em>、
                    <em>8h TD8 Buy → 9?（再 1 根 close）</em>、
                    <em>1d TD8 Buy → 9?（再 1 根 close）</em>、
                    <em>1M TD8 Buy → 9?（再 1 根 close）</em>。扫描现货
                    $66,824、24h −6.21%（00:16Z MTF 扫描；live-tape 头部
                    00:05Z 在同一 24h 窗读 −6.41% —— 11 分钟差对应
                    0.20pt 偏差，1h 反射 bid 落进 MTF 扫描窗里）、24h
                    H/L $71,371 / $66,151、qVol $24.03B。收盘为未收盘
                    K 线；每个值在各周期收盘前都按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵确认头顶全负的结构性读、并已拉长。现货 $66,752 坐在
              <span className="dn-tag bear">W-SMA20 $72,807 下方
              −8.32%</span>（最近一根头顶线、06-02 是 −2.34% —— 头顶带
              拉宽 ~6pt），以及
              <span className="dn-tag bear">D-SMA100 $73,191 下方
              −8.80%</span>（失守的周期锚 —— 06-02 UTC close $66,730 干净
              下穿 $6,461；未收盘 06-03 $66,701 又下 $29、离锚 ~$6,490）。
              之后按序：
              <span className="dn-tag bear">W-EMA200 $73,632（−9.34%；
              种子）</span>、
              <span className="dn-tag bear">D-EMA20 $74,044（−9.85%）</span>、
              <span className="dn-tag bear">D-SMA20 $74,984（−10.98%）</span>、
              <span className="dn-tag bear">D-EMA50 $75,284（−11.33%）</span>、
              <span className="dn-tag bear">D-SMA150 $75,726（−11.85%）</span>、
              <span className="dn-tag bear">D-EMA100 $76,053（−12.23%）</span>、
              <span className="dn-tag bear">W-EMA20 $76,671（−12.94%）</span>、
              <span className="dn-tag bear">D-SMA50 $76,932（−13.23%）</span>、
              <span className="dn-tag bear">W-EMA150 $78,076（−14.50%；
              种子）</span>、
              <span className="dn-tag bear">D-EMA150 $78,265（−14.71%）</span>、
              <span className="dn-tag bear">D-SMA200 $79,096（−15.61%）</span>、
              <span className="dn-tag bear">D-EMA200 $80,660（−17.24%）</span>。
              更高更远、已弃用：W-EMA100 $82,895（−19.47%）、W-EMA50
              $84,072（−20.60%）、W-SMA100 $88,438（−24.52%）、W-SMA50
              $92,685（−27.98%）。
              <span className="dn-signal">矩阵在 live 现货上零正偏移</span>
              —— 日 / 周阶梯上每一根 MA 都在头顶，跟 06-02 同一读法但
              最近一根 W-SMA20 已经离现货 ~4 倍远（−8.32% vs −2.34%）。
              结构性近线集合是：W-SMA20 头顶（−8.32%）、周期锚 D-SMA100
              头顶（−8.80%）、W-EMA200 种子头顶（−9.34%）—— 一道 ~$0.8k
              宽的重夺带坐在现货 ~$6–7k 头顶。
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-06-03 00:06Z（close
                $66,701.00）。MA 源域按桌面政策只用 2024-2026 parquet
                子集（127 根周 bar），延续自 06-02 audit DN-005 决定 ——
                完整 btcusdt_1m_* glob 会给 353 根周 bar、会出 W-SMA150 /
                W-SMA200 印，子集保留是为口径一致、完整 glob 备选已在
                06-02 备忘里披露。子集下 W-SMA150 / W-SMA200 仍不可
                计算；W-EMA150 $78,076（−14.50%）与 W-EMA200 $73,632
                （−9.34%）能显示是因为 EMA 从可用历史 seed、按种子口径
                披露。上面偏移按 live 现货 $66,751.51 直接算（回到 06-02
                之前的口径，跟 06-02 那篇的 parquet 邻近分母不同 ——
                按 parquet 邻近 close $66,701.00 算每一根再深 ~0.08pt，
                例如 W-SMA20 −8.39%、D-SMA100 −8.87%、W-EMA200 −9.41%、
                D-EMA20 −9.92%；codex 审计 open issue 留作后续 lineage
                决定）。显示的 MA 水位按 $ 取整、偏移按精确序列值算。
                日 close：05-28 $73,591、05-29 $73,428、05-30 $73,857、
                05-31 $73,653、06-01 $71,392（谱系首根破周期锚 close）、
                06-02 $66,730（谱系单日最大 close-to-close 落 −$4,662 /
                −6.53%）、06-03 未收盘 $66,701 —— 连续两根远离锚 close。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子更深净空 γ aggregate −38.8M · flip 落到 $69,335（现货 −3.73% 在下方、谱系最宽下穿）· 06-02 那根 $70k −28.64M 墙被穿干净 · 新最重墙 $65k −15.48M 在现货下方 ~$1.7k · 5JUN −14.89M（2.3 DTE）是 strip 上的放大器 —— 比 06-02 −25.58M 减一半</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子跨 2JUN 结算清算后再深一档进净空 γ —— 墙图
                整个轮过 $70k 那根 strike
              </span>
              。aggregate GEX 是
              <span className="dn-tag bear">−38.8M / 1%</span>（06-02 是
              −23.3M —— 再放大 −$15.5M）；本子现在更深净空 γ（放大 vol）。
              0-γ flip 移动
              <span className="dn-tag">$72,086 → $69,335（−$2,751）</span>。
              dist 给两个参考（按 06-02 audit DN-007 延续）：live 现货
              参考 <span className="dn-tag bear">−3.73%</span>（66,751.51
              / 69,335 − 1 = −3.728%）；GEX 文件 Deribit idx 参考
              <span className="dn-tag bear">−3.36%</span>（67,006 / 69,335
              − 1 = −3.359%、与文件 tile −3.4% 对齐）。两参考都负、现货
              深陷 flip 下方 —— 谱系最宽下穿。墙图实质轮动：06-02 那根
              $70k −28.64M 墙（当时最重、刚在现货头顶）现在
              <span className="dn-tag bear">$70k −7.39M</span> —— 一根
              −$21.25M 负幅度坍缩，因为压把价格穿过 strike、γ 解算完。
              新最重墙是
              <span className="dn-tag bear">$65k −15.48M</span>（现货下
              ~$1.7k —— 新结构性磁石）、
              <span className="dn-tag bear">$60k −15.12M</span>（06-02
              是 −10.80M）、
              <span className="dn-tag bull">$80k +14.64M</span>（最重正
              墙、06-02 是 +22.31M —— 因为远离 the money 而压回）、
              <span className="dn-tag bear">$68k −10.98M</span>、
              <span className="dn-tag bear">$66k −7.87M</span>、
              <span className="dn-tag bear">$70k −7.39M</span>（被解算的
              前墙）、
              <span className="dn-tag bear">$64k −6.34M</span>、
              <span className="dn-tag bear">$62k −5.57M</span>、
              <span className="dn-tag bull">$82k +5.12M</span>、
              <span className="dn-tag bear">$55k −4.52M</span>。负簇
              $55k–$70k 合计 ~
              <span className="dn-em">−73.3M dealer 放大</span> 从现货
              一直往下到崩盘 put 残余区（列出的墙加起来：−4.52 − 15.12
              − 5.57 − 6.34 − 15.48 − 7.87 − 10.98 − 7.39 = −73.27M）；
              头顶正向 $80k–$82k 合计 ~+19.76M、离现货远了
              （06-02 那根 $80k +22.31M 墙现在 +14.64M、因为远离 the money
              而压回）。
              <span className="dn-em">
                dealer 本子现在的结构是：跌下来就给 fade（$65k 墙基本在
                我们脚下，$60k 与 $68k 夹着）、bid squeeze 要冲回头顶
                $80k 才有 —— 一根 ~$13k 的爬升。放大 regime 比 06-02 更
                深、近端负簇的结构底已经轮到 $65k 区。
              </span>
              3JUN26 0.3DTE
              <span className="dn-tag bear">−4.30M</span> 在今日 08:00Z
              印结算（快照后约 8h）；除 3JUN 后 aggregate 大约 −38.8M
              − (−4.30M) = −34.5M、仍净负。前向 expiry：
              <span className="dn-tag bull">4JUN 1.3 +0.01M</span>
              （几乎平）、
              <span className="dn-tag bear">5JUN 2.3 −14.89M</span>
              <span className="dn-em">（strip 上的放大器 —— 比 06-02 那根
              −25.58M 少 −$10.69M、因为 dump 里块已经解掉一半，但仍是
              一个数量级的近端最重负权重）</span>、
              <span className="dn-tag bear">6JUN 3.3 −0.58M</span>、
              <span className="dn-tag bear">12JUN 9.3 −9.11M</span>、
              <span className="dn-tag bear">19JUN 16.3 −4.10M</span>、
              <span className="dn-tag bear">26JUN 23.3 −16.65M</span>
              （月度 expiry、按总权重最重的一根前向）、
              <span className="dn-tag bull">31JUL 58.3 +4.53M</span>
              （06-02 是 +10.03M —— 正支撑在压）、
              <span className="dn-tag bull">28AUG 86.3 +0.71M</span>、
              <span className="dn-tag bull">25SEP 114.3 +2.86M</span>
              （06-02 是 +8.35M）、
              <span className="dn-tag bull">25DEC 205.3 +5.03M</span>
              （06-02 是 +9.37M）、
              <span className="dn-tag bull">26MAR27 296.3 +0.56M</span>。
              5JUN −14.89M 仍是近端最重负权重，但 dump 已经把它的规模
              压成将近一半；除 5JUN 后的前向 aggregate（在 3JUN 结算后）
              ≈ −34.5M − (−14.89M) = −19.6M、仍净负 —— 5JUN 之后的阶梯
              <em>没有</em>新放大器。26JUN 月度在 23.3 DTE 上带结构性
              权重、但没有 0DTE 式的结算窗。
            </p>

            <p>
              998 合约的 IV 中位数是
              <span className="dn-tag bear">47.6%</span>（06-02 是 41.4%
              / 904 合约 —— +6.2pt vol bid、价格穿 $70k 同时印谱系新低）
              对 30D close-to-close RV
              <span className="dn-tag">34.03%</span> —— 链级溢价
              <span className="dn-tag">~+13.6pt</span>（06-02 是 ~+14.7pt
              —— 基本不动，IV 与 RV 一起抬、IV +6.2pt、RV +7.3pt，价差
              微缩）。这是 N 合约的链中位数、
              <span className="dn-em">不是</span>可交易价差；expiry- /
              strike-level vega、skew、期限结构仍未载入、vol 读法保持
              framework only。998 合约对 06-02 是 904 —— +94 包括 2JUN
              0.3DTE −9.08M 在 08:00Z 06-02 清掉之后挂上来的近端新链、
              加 dump 周围挂上来的额外远端列表。RV 方法：30D close-to-
              close、logret.std × √365 × 100、用最末 30 根日 log return
              （= 连续 31 根日 close）、锚自 parquet 最末 bar 2026-06-03
              00:06Z；底层 31-close 窗现在包括 06-02 那根 −6.53% dump
              蜡烛、把 30D RV 从 26.72%（06-02 备忘）抬到 34.03%
              （+7.31pt vol 扩张 —— 谱系单日最大一根 RV 扩张）。参考：
              最末 29 returns / 30 closes 读 33.93%；页面值 34.03% 来自
              30 returns。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · Tier-1 基本平（10Y +2bp 到 4.47%、HY OAS −2bp 到 2.72% 回到 05-31 水位、MOVE 73.3 当日不动）· DXY +0.02 到 99.22（自 06-01 印 +0.22）· BTC 对 TradFi 脱钩再拉宽到 −14.18pt（前 −9.18pt）</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观盘几乎没动而 BTC 自己再 −6.41% —— 脱钩拉宽是因为
                BTC 落、不是 TradFi 翻倒
              </span>
              。面板渲染 2026-06-02 22:15Z、比快照早约 1.8h。US 10Y
              nominal
              <span className="dn-tag bear">4.47%（+2.0bp）</span>、regime z
              <span className="dn-tag bear">+1.57</span>、偶发 z
              <span className="dn-tag">+0.30</span> —— RISK-OFF 标、当日
              略硬。10Y TIPS real
              <span className="dn-tag">2.07%（0.0bp）</span>、regime z
              <span className="dn-tag bear">+1.41</span>、偶发 z
              <span className="dn-tag">+0.70</span> —— 仍 RISK-OFF、平。
              5Y5Y BE 通胀
              <span className="dn-tag bear">2.26%（+2.0bp）</span>
              —— 小幅抬一档。HY OAS
              <span className="dn-tag bull">2.72%（−2.0bp）</span>、
              regime z <span className="dn-tag bull">−1.30</span>、偶发 z
              <span className="dn-tag bull">−1.42</span> —— 回到 05-31
              水位（2.72%）、06-02 那根 2.74% 抬掉了，仍是深 risk-on
              偶发；re-grow 闸往远开了 2bp。MOVE 债波
              <span className="dn-tag">73.3（+3.11）</span> —— 跟 06-02
              同水位同 Δ，当日按不动处理（Yahoo 日印在两次渲染之间没
              刷新）。两根抵消继续飘：DXY
              <span className="dn-tag bear">99.22（+0.02 当日 · +0.22 自
              06-01 22:15Z 印）</span>、偶发 z
              <span className="dn-tag bear">+1.15</span> —— 又硬一档、
              偶发现在越过 +1.0 阈值；Fed 净流动性
              <span className="dn-tag bear">$5.872T（水位对前一篇不变；
              源端周度 Δ −0.058T）</span>、偶发 z
              <span className="dn-tag bear">−2.28</span>。US-JP 10Y 利差
              <span className="dn-tag bear">1.95%（+2.0bp）</span>；
              USD/JPY <span className="dn-tag">159.62（0.0 当日 · +0.36
              自 05-31）</span>（日元当日平、之前一段在软）。NFCI −0.510
              （陈旧 11d）。
              <span className="dn-em">
                净：re-grow 闸在信用侧又往远走（HY OAS 闸 2.78% —— 在
                2.72%、6bp 触发，06-02 是 4bp —— 闸又开 2bp），在利率侧
                往近一点（10Y 闸 4.53% —— 在 4.47%、6bp 触发，06-02 是
                8bp）、reclaim-long 利率筛（10Y &lt; 4.55%）在 4.47%
                仍真、宏观盘在 BTC 要紧的几根上仍净 risk-on —— 但 BTC
                自己 −6.41% 跑、不是宏观触发。BTC 对 TradFi 脱钩在本印
                上拉宽到 −14.18pt（BTC −12.17% vs NQ +2.01%）、从 06-02
                的 −9.18pt（按 06-02 备忘：BTC −7.00% vs NQ +2.18%）——
                缺口拉宽是因为 BTC 自己 dump、NQ +0.18pt 实际上 −0.17pt
                7d 窗日变化平（+2.18% → +2.01%）、BTC −5.17pt 把 BTC
                内部催化主导拉长一档
              </span>
              。
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
                <tr><td>US 10Y nominal</td><td className="num">4.47%</td><td className="num bear">+2.0bp</td><td className="num bear">+1.57</td><td className="num">+0.30</td><td className="bear">紧 · 略硬</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.07%</td><td className="num">0.0bp</td><td className="num bear">+1.41</td><td className="num">+0.70</td><td className="bear">紧 · 仍 RISK-OFF</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.26%</td><td className="num bear">+2.0bp</td><td className="num">+0.35</td><td className="num">+0.24</td><td className="neut">无标 · 小幅抬</td></tr>
                <tr><td>HY OAS</td><td className="num">2.72%</td><td className="num bull">−2.0bp</td><td className="num bull">−1.30</td><td className="num bull">−1.42</td><td className="bull">松 · risk-on 偶发 · 距 re-grow 闸 6bp（开了 2bp）</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.510</td><td className="num">0.00</td><td className="num">+0.10</td><td className="num bull">−0.81</td><td className="stale">陈旧 11d</td></tr>
                <tr><td>MOVE 债波</td><td className="num">73.3</td><td className="num">+3.11（前次印 Δ；当日按不动）</td><td className="num">−0.29</td><td className="num">+0.04</td><td className="neut">松 · 日印自 06-01 渲染以来不动</td></tr>
                <tr><td>DXY</td><td className="num">99.22</td><td className="num bear">+0.02</td><td className="num">+0.83</td><td className="num bear">+1.15</td><td className="bear">更硬 · 自 06-01 印 +0.22</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.872T</td><td className="num bear">−0.058T（源端周度 Δ；水位对前一篇不变）</td><td className="num">+0.22</td><td className="num bear">−2.28</td><td className="neut">松 · 源端周度 Δ −0.058T；水位对前一篇不变</td></tr>
                <tr><td>USD/JPY</td><td className="num">159.62</td><td className="num">+0.27（前次印 Δ；当日按不动）</td><td className="num bear">+1.26</td><td className="num">+0.97</td><td className="neut">日元当日平</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">1.95%</td><td className="num bear">+2.0bp</td><td className="num bull">−0.87</td><td className="num">+0.30</td><td className="bear">比 06-02 的 1.94% 拉宽 1bp（按 audit DN-006 改：1.95 对 1.94 是 +1bp 拉宽、不是收窄）</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7617</td><td className="num bull">−0.0040</td><td className="num bull">−1.92</td><td className="num bull">−1.91</td><td className="bull">无标 · 松 · 自 06-02 −0.0040</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">+17.0bp（月度）</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">月度 · 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、汇总 00:01Z ——
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。
              非对角线均值 <span className="dn-tag">|r| 0.258</span>
              （从 06-02 的 0.267 松了一点、仍在 0.25 IDIOSYNCRATIC 阈
              上方、仍 NORMAL 区段）。BTC 列出的对齐按 |r| 排：CL
              <span className="dn-tag">−0.314</span>、BRENT
              <span className="dn-tag">−0.302</span>、NQ
              <span className="dn-tag">+0.220</span>（前 +0.293 —— 实质
              松、BTC ↔ NQ 关系因 BTC 脱钩而松）、GOLD
              <span className="dn-tag">+0.193</span>、EUR
              <span className="dn-tag">+0.179</span>、SP500
              <span className="dn-tag">+0.173</span>、SILVER
              <span className="dn-tag">+0.166</span>、JP225
              <span className="dn-tag">+0.165</span>、PLAT
              <span className="dn-tag">+0.163</span>、META
              <span className="dn-tag">+0.135</span>、AAPL
              <span className="dn-tag">−0.129</span>、TSLA
              <span className="dn-tag">+0.128</span>、NVDA
              <span className="dn-tag">+0.121</span>。7d 相对表现：
              <span className="dn-tag bear">BTC −12.17%</span>（从 06-02
              的 −7.00% 拉宽 —— 7d 窗现在包含 06-02 −6.53% 那根 dump 蜡烛）、
              NQ <span className="dn-tag bull">+2.01%</span>（对 +2.18%
              —— 基本平）、SP500
              <span className="dn-tag bull">+1.05%</span>（对 +0.74%）、
              JP225 <span className="dn-tag bull">+2.83%</span>、MSFT
              <span className="dn-tag bull">+5.69%</span>（仍 TradFi 领头、
              从 +7.79% 松）、META
              <span className="dn-tag bear">−1.68%</span>（前 −2.01%、
              恢复一档）、TSLA
              <span className="dn-tag bear">−3.02%</span>（前 −3.60%）、
              AAPL <span className="dn-tag bull">+2.20%</span>（从 −1.38%
              翻面）、NVDA
              <span className="dn-tag bull">+3.76%</span>（从 +2.96%
              延伸）。金属软：GOLD
              <span className="dn-tag bear">−0.85%</span>、SILVER
              <span className="dn-tag bear">−2.93%</span>、PLAT
              <span className="dn-tag bear">−1.24%</span>、PALL
              <span className="dn-tag bear">−1.67%</span>。能源转硬：CL
              <span className="dn-tag bull">+1.54%</span>（对 +0.47%）、
              BRENT <span className="dn-tag bull">+0.71%</span>（对 −0.26%）、
              NGAS <span className="dn-tag bull">+5.15%</span>。
              <span className="dn-em">
                BTC 对 TradFi 引擎的 7d 落后拉宽到 ~−14.18pt（BTC
                −12.17% vs NQ +2.01%）、从 06-02 的 −9.18pt —— 缺口拉宽
                −5.0pt 是因为 BTC 自己又落一档。脱钩读法仍是「内生于
                crypto」：BTC 在自己的催化上跑（周期阶梯破位 + dealer
                本子放大 + 仓位本子堆压）而 TradFi 横着。|r| 均值滑回
                IDIOSYNCRATIC 反映的是 BTC 在脱离共同盘形（BTC 落而
                TradFi 平 / 上）
              </span>
              。JGB 月度 2.52% 带 EXTREME RISK-OFF 月度标 —— 不依赖。
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · 回补反弹 scout DROPPED 不变（锚仍失守）· runner / put-spread 尾仓仍平 · 递延空 scout —— shape B 在 06-02 BJ 13–15 窗内印干净（Δnet −6,621 / 谱系最大）但按 06-02 audit DN-001 不可交易；参考阶梯 $65k 墙是新结构性磁石 · NEW：mean-revert 长 scout（框架监控、不可交易）—— 4h TD9 BUY + 8h / 1d / 1M TD9 BUY 离印 + funding 累积 ~12.2h 脱顶（≥ 4h 累积长头门 CLEARED）· 本次快照无新交易</span>
            </h2>

            <p>
              <span className="dn-signal">
                06-02 那篇空侧框架监控印出预期形状 —— 按那篇 audit DN-001
                降级，scout 不可交易，没 live 仓位跟上信号
              </span>
              。06-02 shape B 条件（<em>「1h close &lt; $70,718 AND fresh
              Δnet ≤ −3k 重堆敌对-2」</em>）在下一根 BJ 13–15 窗内印
              干净：06-02 14:46 BJ 步 Δnet −6,621（谱系单分钟最大 Δ、
              压过 05-30 22:01 那根 −5,569）、现货 $70,298 步入场领出
              跟随到 24h 低 $66,229 —— −$4,069 / −5.79% 跟随。框架对了；
              纪律（audit DN-001 降级）让桌面没在它上面 size。05-31 那根
              cover-bounce scout 仍 DROPPED —— 06-01 那根止损触发、锚重夺
              门槛（$73,191 D-SMA100 + dealer 本子修复 + 回补形）在 ~$6.5k
              头顶。runner 与 29MAY put-spread 尾仓仍平不变。今天 NEW：
              mean-revert 长 scout 被认作框架监控 ONLY —— 不可交易 ——
              对 4h TD9 BUY 印 + 8h / 1d / 1M TD9 BUY 离一根 + funding
              累积脱顶门 CLEARED 在长。今日交易本子 live size 不变
              （无）—— 桌面在一根确认了的周期阶梯破位 + 谱系单分钟最大
              SM 重堆上守住纪律。
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">已平 · 主仓 · runner 阶梯完成 · 在 29MAY 08:00Z 到期结算上平（状态从 06-02 延续）</span>
              <div className="dn-trade-name">
                破位延伸空 —— 在 29MAY 08:00Z 到期结算上平（自 06-02 不变）
              </div>
              <div className="dn-thesis">
                状态自 06-02 备忘不变：在 29MAY 放大器结算上平、无残余、
                阶梯完成。事后读延续：在 29MAY 结算上平、不是穿过 post-
                放大器反弹守住，事后看是对的 —— 那根反弹只撑了正好
                两根日 close（05-30 $73,857 / 05-31 $73,653）就到 06-01
                破位与 06-02 −6.53% 延伸。在 06-02 → 06-03 这根 down-leg
                上重开需要一根全新的结构性 setup、不是这一根的滚续。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">在 05-29 08:00Z 平（放大器结算）· 无残余仓位 · 自 06-02 不变</span></div>
                <div><span className="dn-lvl-k">最终阶梯</span><span className="dn-lvl-v">目标 #1 W-SMA20 $74,151（05-28 取）· 目标 #2 W-EMA200 种子 $73,710（在 05-28 14:01 重堆上取）· 目标 #3 D-SMA100 $72,958（24h 低 $72,614 插针穿过）</span></div>
                <div><span className="dn-lvl-k">不要</span><span className="dn-lvl-v">不要把这单按「滚到 06-02 −6.53% 延伸」追入场 —— 下面框架监控空 scout 按它自己的结构性 setup 走、不是这单的滚续 · 不要在拉长的 cover-rally 回到锚上加</span></div>
              </div>
              <div className="dn-gating">
                <b>交易已平。</b>谱系纪律仍在：不滚、不补、不在末段加。
                框架监控空 scout 在 06-02 BJ 13–15 窗内印出预期信号
                带谱系单分钟最大 Δnet —— 印证了平 runner 的纪律；如果
                再 arm 一根 runner 就会比 scout ceiling 允许的更大。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">DROPPED · scout · 周期锚在 06-01 close 上失守、06-02 close 又延伸（自 06-02 dropped 状态延续）</span>
              <div className="dn-trade-name">
                回补反弹 scout —— DROPPED（自 06-02 不变）：在 06-02 −6.53% close 之后锚仍失守 ~$6.5k
              </div>
              <div className="dn-thesis">
                状态自 06-02 备忘不变：05-31 scout 挂在一根真 cover-bounce
                上、bottom-of-stack 止损（1d close &lt; D-SMA100）在
                06-01 UTC close 上触发。06-02 UTC close $66,730 又把破位
                延伸 −$4,662 / −6.53%、把现货推到重算周期锚 $73,191 下
                $6,461。多头重开要等一根全新的结构性 setup：锚重夺 AND
                dealer 本子修复 AND 回补形流向 —— 三腿，全要、没一根在
                推进。下面那根 mean-revert 长 scout 处理的是不一样的
                setup（超卖反转回弹、不是锚重夺延续）、独立挂。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">scout 状态</span><span className="dn-lvl-v">DROPPED（不变）· 周期锚在 06-01 close $71,392 上失守、在 06-02 close $66,730 上延伸 · 现货现在 ~$6,461 在重算 D-SMA100 $73,191 下</span></div>
                <div><span className="dn-lvl-k">重开门槛（从 06-02 延续；没推进）</span><span className="dn-lvl-v bull">1d close &gt; D-SMA100 $73,191 AND aggregate GEX 翻 &gt; 0 AND 1h 回补形印（OI 缩 + 现货 CVD bid + SM short_btc 泄）—— 三腿全要；没一根在推进</span></div>
                <div><span className="dn-lvl-k">这里没多头入场</span><span className="dn-lvl-v bear">不要在 06-02 dump 之后的 1h 反射 bid 上买 —— 这是跟 cover-bounce scout 不一样的 setup，下面 mean-revert 长 scout 自己也只是框架监控</span></div>
              </div>
              <div className="dn-gating">
                <b>交易 dropped（不变）。</b>06-02 纪律延续：锚重夺要
                三腿、不是一腿。下面 mean-revert 长 scout 是钉在超卖
                反转耗尽上的独立 setup、不是钉在锚重夺延续上。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · 空 scout · 不可交易 · 06-02 audit DN-001 降级延续 · 06-02 框架监控 shape B 在 06-02 BJ 13–15 窗内印干净（Δnet −6,621 / 谱系最大）—— 结构性印证、但不可交易</span>
              <div className="dn-trade-name">
                Anchor-break 空 scout —— 框架监控、结构性印证但不可交易（shape B 印干净）
              </div>
              <div className="dn-thesis">
                06-02 那篇框架监控 shape B 条件
                （<em>「1h close &lt; $70,718 AND fresh Δnet ≤ −3k 重堆
                敌对-2」</em>）在下一根 BJ 13–15 窗内印干净：
                <span className="dn-em">2026-06-02 14:46 BJ（06:46 UTC）、
                Δnet −6,621（Δlong −742、Δshort +5,879 同分钟、SM net
                跨 −37,335 → −43,956 在现货 $70,298）</span> —— 谱系
                单分钟最大 Δnet、压过 05-30 22:01 那根 −5,569 步 19%。
                价格后续：从 $70,298 步入场掉到 24h 低 $66,229 @ BJ
                07:04 06-03（−$4,069 / −5.79% 跨 8h 18m 的跟随）。按
                06-02 audit DN-001 降级，这个 scout
                <em>不可交易</em>：框架监控、没 live 入场、没 live size、
                没 live 止损、没 live 阶梯。结构性印证带读法向前：框架
                预测在下一根节奏窗内印一根 $70k 墙的压、压在窗内印出
                谱系单分钟最大签名、跟随把价格推到新最重墙区
                （$65k −15.48M、现货下 ~$1.7k）。向前看，结构性 setup
                实质性耗尽：5JUN 放大器从 −25.58M 解到 −14.89M
                （−$10.69M 缩）、$70k 墙从 −28.64M 滚到 −7.39M（−$21.25M
                解）、funding 累积 ~12.2h 脱顶（≥ 4h 累积长头门 CLEARED）、
                多 TF TD9 BUY 栈在堆。下一篇审计过的备忘可能把这张牌
                按 CLOSED-VINDICATED 而非继续作框架监控。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">06-02 shape B 触发（FIRED）</span><span className="dn-lvl-v bear">1h close &lt; $70,718 AND fresh Δnet ≤ −3k 重堆 —— 两腿在 06-02 06:46Z（BJ 14:46）步上 FIRED、Δnet −6,621 在现货 $70,298；BJ 14:00 06-02 之后的 1h close 全部 sub-$70,718</span></div>
                <div><span className="dn-lvl-k">06-02 shape A 触发（NOT FIRED · STALE）</span><span className="dn-lvl-v">拉到 $73,035–$73,216 头顶带 —— 现货从未接近；STALE on the down-extension</span></div>
                <div><span className="dn-lvl-k">结构性阶梯进度（06-02 参考水位）</span><span className="dn-lvl-v">$70k 墙穿干净（06-02 参考：$70k −28.64M；今日：$70k −7.39M —— 压解掉）· $68k 簇 ENGAGED（仍 −10.98M 对 06-02 −7.89M）· $65k EMERGED 作新最重近墙在 −15.48M（现货下 ~$1.7k）· $60k 墙参考鞋现在现货下 $5.1k（$60k −15.12M 今日对 06-02 −10.80M · 加深 +$4.32M、因为更多崩盘 put 残余集中在该 strike）· 原 06-02 阶梯鞋 $70k → $68k → $60k 部分完成</span></div>
                <div><span className="dn-lvl-k">递延状态延续</span><span className="dn-lvl-v">不可交易延续（audit DN-001 延续）· 无 live 入场、无 live size、无 live 止损、无 live 阶梯 · codex 审计可在下一遍上把这张牌处置成 CLOSED-VINDICATED</span></div>
                <div><span className="dn-lvl-k">放大器窗状态</span><span className="dn-lvl-v">5JUN26 08:00Z 结算（今日 2.3 DTE）· −14.89M 今日 vs 06-02 是 −25.58M（−$10.69M 缩）· 压已经把块的 γ 拿掉一半；剩下的更分散、不如原 setup 放大</span></div>
              </div>
              <div className="dn-gating">
                <b>状态：</b>不可交易（框架监控延续）。结构性预测准确、
                压在框架命名的窗内印出 —— 但桌面没 size，并且 chase-add
                进 post-press 盘面（在 −$4k 跟随之后、funding 脱顶、多
                TF TD9 BUY 印）下一遍审计上不会过。<b>硬规则：</b>不在
                压已完成盘面上入场；不在最后 24h 的解算窗里入放大器-fade
                （5JUN 2.3 DTE 今日在那个窗里）。框架监控语气延续直到
                codex 审计明示把这张牌关掉。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">已平 · 宏观尾 · 在 29MAY 08:00Z 结算上平（自 06-02 状态延续；re-grow 闸今日信用侧又开了一点、利率侧又靠了一点）</span>
              <div className="dn-trade-name">
                下行 put-spread —— 在 29MAY 08:00Z 结算上平；不滚（re-grow 闸距 fire 两侧都是 6bp）
              </div>
              <div className="dn-thesis">
                状态自 06-02 备忘不变：在 29MAY Deribit 结算上平。宏观
                re-grow 闸今日信用侧又开（HY OAS 2.78% 闸 —— 在 2.72%、
                6bp 触发，06-02 是 4bp —— 又开 2bp），利率侧又靠
                （10Y 闸 4.53% —— 在 4.47%、6bp 触发，06-02 是 8bp ——
                靠 2bp）。reclaim-long 利率筛（10Y &lt; 4.55%）在 4.47%
                仍真；这是独立筛、当前筛的是多头侧。还没新对冲：BTC
                内部 down-leg 已经在结构上做得比宏观尾在当前闸距下能做
                的更多；在 12JUN −9.11M 或 26JUN −16.65M 规模上滚一根
                新尾不会带 29MAY 那种放大器顺风。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">在 05-29 08:00Z 平（Deribit 29MAY 结算）· 无残余仓位 · 不滚 · re-grow 闸两侧距 fire 都 6bp</span></div>
                <div><span className="dn-lvl-k">re-grow 触发（fire 滚到 12JUN / 26JUN）</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% close（当前 2.72%、距 6bp —— 比 06-02 又开 2bp）OR 10Y &gt; 4.53% close（当前 4.47%、距 6bp —— 比 06-02 又靠 2bp）</span></div>
                <div><span className="dn-lvl-k">reclaim-long 利率筛</span><span className="dn-lvl-v bull">10Y &lt; 4.55% close —— 在 4.47% 仍真；等 BTC 内部转向（当前筛的是多头侧、本篇 setup 上没 live 入场）</span></div>
              </div>
              <div className="dn-gating">
                <b>注意：</b>re-grow 闸仍是酌情盯位、不是回测断点。BTC
                内部 down-leg 在没有宏观触发的情况下已经解掉 5JUN 放大器
                的大半 —— 今天新尾会是 post-bid（IV +6.2pt 到 47.6%）+
                post-press 进入，宏观尾应该只在宏观侧再 fire 上重新打开、
                不是在 BTC 内部耗尽上。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">NEW · framework · mean-revert 长 scout · 不可交易（框架监控；本篇不升 live）· 钉在 4h TD9 BUY 印 + 8h / 1d / 1M TD9 BUY 离印 + funding 累积脱顶门 CLEARED + 多 TF 谱系最深 RSI（4h / 8h / 12h 13.4 / 15.5 / 14.6）</span>
              <div className="dn-trade-name">
                Mean-revert 长 scout —— NEW 框架监控、不可交易：超卖反转
                签名栈在堆但本篇无 live 入场
              </div>
              <div className="dn-thesis">
                一根新 setup 在长侧出现，跟 cover-bounce scout（需要锚
                重夺 —— 三腿）不一样：一根 mean-revert 长 scout 对深
                多 TF 超卖 AND 一根在堆的 TD9 BUY 栈 AND 一根杠杆门
                relief 签名（funding 累积脱顶门 CLEARED）。条件堆：
                (1) 4h ⚡ TD9 BUY 印在 $66,835 —— down-leg 里第二根
                连续 4h TD9 BUY（06-02 那根扫描是 $71,226、今日 −$4,391
                更低；上一根 $71,226 那根 TD9 BUY 没印出确认 bounce、
                反而 down-leg 穿了它继续走）。(2) 8h Buy 8 → 9? —— 引擎
                慢周期上离印 TD9 BUY 一根 close。(3) 1d Buy 8 → 9? ——
                周期周期上离印 TD9 BUY 一根 close。(4) 1M Buy 8 → 9?
                —— 宏观周期上离印 TD9 BUY 一根 close。(5) Funding 累积
                ~12.2h 脱顶横跨 24h 窗的两段（较早 06-02 06:27Z–16:49Z
                10.4h + 当前 06-02 22:13Z 起的 1.88h）；06-02 那篇明示
                <em>「funding 离顶 ≥ 30 分钟连续」</em>第一腿长头重开
                条件在两段上都满足、框架更深的 ≥ 4h 累积门 CLEARED
                ~3 倍以上。(6) 1h 反射 bid 离开 06-02 23:04Z $66,229 低
                —— 价 +0.61%、现货 CVD bid（+455）进 snap-hour、即使
                期货仍在卖（−798 fut_cvd、−856 大单）。
                <span className="dn-em">
                  按 06-02 延续的 audit DN-001 纪律，本篇不可交易。无
                  live 入场、无 live size、无 live 止损、无 live 阶梯。
                  下一篇审计过的备忘可以把这个升到 0.2R scout 的桌面
                  scout 上限，IF 累积触发 fire
                </span>
                ：8h OR 1d TD9 BUY 在下根 bar close 上确认 AND funding
                累积 ≥ 4h 脱顶（在本快照的 24h 窗里已经 CLEARED 于 ~12.2h
                累积、横跨两段）AND 一根 1h close 印在之前 1h 死叉失效
                水位上（intrabar TBD；框架参考是 D-EMA20 $74,044 阶梯
                鞋，预备 1h 重夺 $68k 区作前缘）。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">结构性 setup（不是 live 入场）</span><span className="dn-lvl-v">多 TF TD9 BUY 栈（4h 印、8h / 1d / 1M 离一根）+ RSI 在 4 周期上谱系最深超卖（4h 13.4 / 8h 15.5 / 12h 14.6）+ funding 累积 ~12.2h 脱顶横跨 24h 窗的两段（当前段 1.88h）+ 1h 反射 bid 离开 24h 低 —— setup 在每一根指标上都是谱系最耗尽的超卖印</span></div>
                <div><span className="dn-lvl-k">假设升 trigger（本篇不可交易）</span><span className="dn-lvl-v bull">一篇下一根审计过的备忘可升 IF：8h OR 1d TD9 BUY 在下根 bar close 上确认（即 8h 或 1d Buy 9 close 印出）AND funding 累积 ≥ 4h 脱顶（CLEARED —— 本快照 24h 窗里 ~12.2h 累积、横跨两段）AND 一根 1h close 印在前缘重夺水位上（预备 $68k 区；框架参考重夺鞋 D-EMA20 $74,044）—— funding 第一腿 CLEARED、8h / 1d TD9 BUY 确认腿与 1h 重夺腿仍未到</span></div>
                <div><span className="dn-lvl-k">结构性参考阶梯鞋（不是下单目标）</span><span className="dn-lvl-v">第一根 bounce 目标 $68k–$68.5k（$68k −10.98M 簇填充区）· 第二根 bounce 目标 W-SMA20 $72,807 / D-SMA100 $73,191 / W-EMA200 $73,632（~$0.8k 重夺带、距现货 +9–10%）· 失效：1h close &lt; $66,000 AND 一根 fresh Δnet ≤ −3k 重堆敌对-2 在 06-03 BJ 13–15 窗内</span></div>
                <div><span className="dn-lvl-k">如果升、size 上限</span><span className="dn-lvl-v">0.2R 总（scout 上限）在累积 trigger 上 · 不在 4h TD9 BUY 单印上堆（上一根在 $71,226 上失效、down-leg 穿过去；单一根 4h TD9 BUY 不是升级 trigger）</span></div>
                <div><span className="dn-lvl-k">放大器窗风险</span><span className="dn-lvl-v">5JUN26 08:00Z 结算（今日 2.3 DTE）· −14.89M 今日 · 剩下的块仍可能在 48h 结算前印出一根压腿；一根 fresh 重堆敌对-2 在 06-03 BJ 13–15 窗内会失效 mean-revert 读</span></div>
              </div>
              <div className="dn-gating">
                <b>状态：</b>不可交易（框架监控、NEW）。setup 在结构上
                是谱系最耗尽，但桌面纪律说：down-leg 里单一根 4h TD9
                BUY 不是升级 trigger（上一根在 $71,226 上失效）；累积
                trigger 要慢周期确认 AND 杠杆门持续 relief（funding 累积
                门 CLEARED 已是第一步）AND 一根 1h 重夺腿。<b>硬规则：
                </b>不在 5JUN 放大器的 0DTE 结算窗内
                （即 2026-06-05 08:00Z 接近区里）无慢周期 TD9 BUY 确认
                时入场；5JUN 块即使在 −14.89M 缩水规模上仍可能印一根
                压腿。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · 周期节奏 CONFIRMED 在第三根连续印上、谱系单分钟最大 Δnet · 06-02 BJ 13–15 印干净（Δnet −6,621 在窗内）· BJ 22 次级今日 NOT FIRED（窗 max +813 cover）</span>
              <div className="dn-trade-name">
                Squeeze-cycle —— 节奏 CONFIRMED：06-02 14:46 BJ 窗步（Δnet −6,621）是谱系单分钟最大 Δ 和连续第三根主窗印
              </div>
              <div className="dn-thesis">
                05-31 那篇在三根安静窗之后判 BJ 13–15 节奏失效；06-02
                那篇在 06-01 BJ 14:16 印（Δnet −3,137）上重装弹；今天
                节奏在 06-02 BJ 14:46 印（Δnet −6,621）上又印 —— 连续
                三根主窗印、第三根印谱系单分钟最大 Δ。节奏不再是要守
                的基率；是活的周期-3 step 2 确认。06-02 BJ 22 次级窗
                （UTC 14:00 06-02）只印一根小 cover（窗 max +813、Δlong
                +693、Δshort −120）—— 次级今天没印；只主 BJ 13–15 窗
                确认。框架把主窗当作下一根离散步的最高基率预测。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">框架状态</span><span className="dn-lvl-v">节奏 CONFIRMED 在三根连续主窗印上：06-01 BJ 14:16（Δnet −3,137）→ 06-02 BJ 14:46（Δnet −6,621 —— 谱系最大）；次级 BJ 22 今天 NOT FIRED（窗 max +813）；主窗是活的预测窗</span></div>
                <div><span className="dn-lvl-k">主延伸事件（06-02）</span><span className="dn-lvl-v">重堆敌对-2 @ 2026-06-02 06:46Z（BJ 14:46 06-02）· 现货 $70,298 · Δlong −742、Δshort +5,879（52,521 − 46,642）、Δnet −6,621（谱系单分钟最大 Δ）</span></div>
                <div><span className="dn-lvl-k">次级 BJ 22（06-02）—— NOT FIRED</span><span className="dn-lvl-v">窗 max |Δnet| = +813 @ 2026-06-02 14:16Z（BJ 22:16 06-02）· Δlong +693、Δshort −120 —— 一根小 cover、不是延伸；次级窗今天没确认</span></div>
                <div><span className="dn-lvl-k">SM 谷（最空）窗内 24h</span><span className="dn-lvl-v">−44,438 BTC @ 2026-06-02 14:01Z（BJ 22:01 06-02）· 谱系最深净空；谷印在 BJ 14:46 步后 ~7h 15m（延伸谷滞后步 ~7h、比 05-30 cycle 小但跟谱系步后形一致）</span></div>
                <div><span className="dn-lvl-k">步后价格路径</span><span className="dn-lvl-v">主步 $70,298 → 24h 低 $66,229 @ BJ 07:04 06-03（步入场后 −$4,069 / −5.79% 跨 ~8h 18m）→ 快照 $66,752（+$523 / +0.79% 反射 bid 进 snap、低后 1h）</span></div>
                <div><span className="dn-lvl-k">前向 gating</span><span className="dn-lvl-v">盯 06-03 BJ 13–15 窗（UTC 05:00–07:00 06-03、快照后 ~5h）等周期-3 step 3；窗内一根 fresh Δnet ≤ −3k 确认节奏在第四根连续印上 AND 让 mean-revert 长 scout 的 setup 失效；一根 sub-threshold 印弱化节奏但不证伪（节奏现在已经演示了 4-day 延迟内的重新涌现、单一根安静窗不再是 falsification 信号）</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>三根连续主窗印、最后一根是谱系单分钟
                最大 Δnet、有干净的价格跟随，确认节奏活、调好。06-03
                BJ 13–15 窗是下一道 gating 事件 —— pre-snap、~5h 在
                前。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 周期锚失守并延伸（06-02 close −$4,662 = 谱系单日最大落）· γ 更深净空（−38.8M）· funding 在 24h 窗里两次脱顶（累积 ~12.2h、≥ 4h 累积长头门 CLEARED）· 多 TF TD9 BUY 栈在堆 · 空 scout 不可交易但 shape B 结构性印证 · NEW mean-revert 长 scout（框架监控、不可交易）· 节奏 CONFIRMED 在第三根连续主窗印上、谱系单分钟最大 Δnet</span>
            </h2>

            <p>
              对照 06-02 决策条件：周期阶梯破位确认 FIRED 干净并延伸
              （06-01 close $71,392、06-02 close $66,730 —— 谱系单日最大
              落 −$4,662 / −6.53%；两根 daily-close 腿都已真上又被延伸
              得狠）；cover-rally shape A trigger DID NOT FIRE（现货从未
              接近 $73,035–$73,216 头顶带；STALE on the down-extension）；
              breakdown shape B trigger 在下一根 BJ 13–15 窗内 FIRED 干净
              （Δnet −6,621 在 06-02 06:46Z 步上、现货 $70,298 —— 谱系
              单分钟最大 Δnet）；funding 封顶门信号 FIRED 两次今日
              （较早 06-02 06:27Z–16:49Z 脱顶 622 分钟 / ~10.4h、然后
              当前 06-02 22:13Z 起的 113 分钟 / ~1.88h —— 累积 ~12.2h
              脱顶横跨 24h 窗、≥ 4h 累积门 CLEARED ~3 倍以上）；锚重夺
              重开门槛 DID NOT PROGRESS（现货现在 $6,461 离锚）；周期-3
              step 2 节奏 CONFIRMED（06-02 BJ 13–15 印是连续第三根主窗
              印和谱系单分钟最大 Δnet）；宏观 re-grow 闸在信用侧又开
              （HY OAS 闸 +2bp 开），在利率侧又靠（10Y 闸 −2bp 靠）；
              reclaim-long 利率筛在 4.47% 仍真；2JUN26 expiry 干净结算
              （−9.08M 在 06-02 08:00Z 清掉、没出 vol 事件 —— dump 来自
              06-02 06:46Z 节奏步、在结算前 1h 14m，按 audit DN-003 改）。
              <em>四条结构性条件 fire（周期破延伸、shape B 印证、funding
              累积门 CLEARED、节奏确认）、两条守（利率筛、锚重夺仍未
              推进）、长侧 scout 各自带状态：cover-bounce DROPPED 不变、
              mean-revert NEW 框架监控（不可交易）。</em>
              今日条件围绕一根延伸了的周期阶梯破位、一根更深的负 γ
              dealer 本子、新 $65k 结构性墙、funding 累积门 CLEARED、
              多 TF TD9 BUY 栈在堆、以及 06-03 BJ 13–15 窗（~5h 在前）
              上等周期-3 step 3 的活节奏重新落点：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>3JUN26 到期今日结算（08:00Z、快照后 ~8h）</td><td>−4.30M 负向块清；除 3JUN 后 aggregate ≈ −34.5M 仍净负 —— 当日内放大减一档</td><td>监控 —— 干净结算（不出 vol 事件）会把下一个 gating 事件放到 5JUN −14.89M 块上（2.3 DTE）；如果 08:00Z 印出 vol 事件、会让 dump 再延伸</td></tr>
                <tr><td>5JUN26 放大器窗（今日 2.3 DTE、08:00Z 5JUN）</td><td className="bear">最重单 expiry 负权重 −14.89M（06-02 是 −25.58M、−$10.69M 缩）· 规模 ~16% 29MAY 放大器 · 预计在那个窗里主导 dealer 本子、但比原本幅度小</td><td>监控 —— 这是框架监控空 scout 钉的结构性参考窗；没 live 仓位带过去，但一根 fresh Δnet ≤ −3k 重堆在 06-03 BJ 13–15 窗内仍会标继续压在 5JUN 结算前的延伸</td></tr>
                <tr><td>周期-3 step 3 节奏（06-03 BJ 13–15、~5h 在前）</td><td className="bear">下一根 BJ 13–15 窗 = 2026-06-03 05:00–07:00 UTC（~5h 后）；窗内一根 fresh Δnet ≤ −3k 确认节奏在第四根连续印上 AND 让 mean-revert 长 scout 的 setup 失效；一根 sub-threshold 印弱化节奏但不证伪（重新涌现模式允许）</td><td>盯作下 24h 内最重 pre-snap 框架事件；如果节奏 fire、mean-revert 长 scout 再多一篇不可交易；如果节奏 NOT FIRE、mean-revert 长 scout 的结构性 setup 推进</td></tr>
                <tr><td>锚重夺（长头重开门槛、cover-bounce 路径）</td><td className="bull">1d close &gt; D-SMA100 $73,191 AND aggregate GEX 翻 &gt; 0 AND 1h 回补形印（OI 缩 + 现货 CVD bid + SM short_btc 泄）—— 三腿全要；现货头顶 ~$6.5k，没一根推进</td><td>无动作 —— cover-bounce scout 仍 DROPPED 不变；这是结构性重开路径、不是 mean-revert 路径</td></tr>
                <tr><td>Mean-revert 长 scout 升 trigger（NEW 路径、本篇不可交易）</td><td className="bull">8h OR 1d TD9 BUY 在下根 bar close 上确认 AND funding 累积 ≥ 4h 脱顶（CLEARED —— 本快照 24h 窗里 ~12.2h 累积横跨两段）AND 一根 1h close 印在前缘重夺水位上（预备 $68k 区；框架参考重夺鞋 D-EMA20 $74,044）—— 三腿全要；funding 第一腿 CLEARED、8h / 1d TD9 BUY 确认腿与 1h 重夺腿仍未到</td><td>监控 —— 一篇下一根审计过的备忘可以升到 0.2R scout 如果三腿全 fire；本篇单 snapshot 读不可交易；单一根 4h TD9 BUY 不是升级 trigger（上一根在 $71,226 上失效）</td></tr>
                <tr><td>Funding 封顶 relief（杠杆门信号 —— FIRED 两次）</td><td className="bull">24h 窗内累积脱顶 ~12.2h 横跨两段（较早 06-02 06:27Z–16:49Z 622 分钟 / 10.4h + 当前 06-02 22:13Z 起的 113 分钟 / 1.88h）；≥ 30 分钟连续 watch 在两段上都满足、≥ 4h 累积门 CLEARED ~3 倍以上；mean-revert 长 scout 累积 trigger 第一腿 CLEARED</td><td>监控 —— 把当前 1.88h 当前段穿过 06-03 BJ 13–15 窗维持或延伸会让腿继续 CLEARED；窗内一根 fresh 重 pin 回封顶仍会重 arm 空框架监控（累积计数已经 CLEARED、但 trade-state 读会换）</td></tr>
                <tr><td>周期延续（基率低但仍活）</td><td className="bear">fresh 重堆 SM Δ ≤ −3k 推 SM &lt; −45k AND 1h close &lt; $66,000 在 06-03 BJ 13–15 窗内 —— 周期-3 step 3 延伸签名；如果 fire、阶梯鞋 $65k −15.48M（新最重墙）是下一根价格目标，再 $60k −15.12M 崩盘 put 残余</td><td>无 live 空仓；节奏框架把这个当作最高基率延续预测 · 如果 fire、mean-revert 长 scout 的 setup 至少再一轮失效</td></tr>
                <tr><td>宏观尾 re-grow（信用侧又开、利率侧又靠）</td><td className="bear">HY OAS &gt; 2.78%（距 6bp、06-02 是 4bp —— 又开 2bp）OR 10Y &gt; 4.53%（距 6bp、06-02 是 8bp —— 又靠 2bp）</td><td>滚 hedge 到 12JUN / 26JUN 前向只在宏观侧 fire；BTC 内部 mean-revert 长 scout 在 BTC-only fire 上占先</td></tr>
                <tr><td>Reclaim-long 利率筛</td><td className="bull">10Y &lt; 4.55% close —— 在 4.47% 仍真；等 BTC 内部转向（筛的是长头侧；mean-revert 长 scout 的 setup 跟筛对齐、但 scout 自己不可交易）</td><td>独立筛真；两条长头路径都没 live 入场</td></tr>
              </tbody>
            </table>

            <p>
              重写<em>本篇</em>的唯一一句是
              <span className="dn-signal">
                06-03 BJ 13–15 窗究竟印出第四根连续重堆敌对-2 在节奏内
                （Δnet ≤ −3k 推 SM net 穿过 −45k 同 1h close &lt; $66k
                —— 周期-3 step 3 延续向 $65k 墙与 $60k 崩盘 put 残余），
                还是窗 passes sub-threshold 而 mean-revert 长 scout 的
                setup 推进一腿（funding 当前段维持脱顶、8h / 1d TD9 BUY
                确认、1h 重夺前缘）。今日结构性背景是谱系最深超卖 +
                谱系最深负 γ + 谱系单分钟最大 SM 重堆 —— 每一根指标都
                拉得很远。下 24h 的问题是节奏是否在第四根上断（延续
                压向新 $65k 结构性墙），还是仓位本子耗尽而多 TF TD9 BUY
                栈确认（mean-revert 反弹向 $68k 簇填充区）
              </span>
              。在那之前本篇按写的跑：runner 与 put-spread 尾仓仍平、
              cover-bounce scout DROPPED 不变（没锚重夺推进）、框架监控
              空 scout 结构性印证但不可交易（按 audit DN-001 延续）、
              NEW mean-revert 长 scout 框架监控 ONLY（不可交易；三腿里
              funding 第一腿 CLEARED）、周期节奏框架 CONFIRMED 在第三根
              连续主窗印上、谱系单分钟最大 Δnet，宏观 re-grow 闸在信用
              又开、利率又靠但没 fire。BTC 对 TradFi 脱钩在 BTC 自己又
              落一档时拉宽到 −14.18pt；引擎 MTF 周期塌进谱系最深超卖；
              多 TF TD9 BUY 栈在三个周期上离印一根。下 24h 的对法是
              <em>盯 06-03 BJ 13–15 窗 —— 是下一道 gating 事件，告诉
              我们两个结构性 setup（延续还是 mean-revert）哪个推进</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计追踪 · v2 · 已过 codex 敌对式审计 · 在 v1 上 BLOCK-CRITICAL 裁定 · 6 条 findings（1 CRITICAL + 3 MAJOR + 2 MINOR）· 全部应用 · 记录：
              <code>audits/2026-06-03-desk-note.md</code>
            </span>
            本页按 v1 从 2026-06-03 00:05Z 原子快照写出、然后提交到 STAGE
            B 做 codex 敌对但公正式审计（xhigh 力度、算术按
            <code>/opt/btc-monitor/live_db.json</code> +
            <code>/opt/btc-data/data/btcusdt_1m_*.parquet</code> 通过
            <code>/opt/btc-data/.venv/bin/python3</code> 重算）。
            <b>Codex 在 v1 上的裁定：</b><em>BLOCK-CRITICAL</em> ——
            funding 脱顶 chronology 与 trigger state 实质错；三条其它
            主要问题（MTF 扫描 timestamp / 数值、一根 expiry-cadence
            算术错、一根没有数据支持的双侧谱系峰主张）、两条 minor
            （低位时序口径、宏观 DXY / Fed 流动性 / US-JP spread 方向
            的源端 copy drift）也被标出。Codex 在 v1 上 confirmed
            clean 的：requireViewer gating（两路径、首句）、JSX 结构 /
            <code>tsc --noEmit</code>、24h 头部算式（spot −6.41%、OI
            +1,702 BTC、funding 封顶占用 705 / 1441、均 +9.33%、谷
            +5.68% @ 06-02 09:07Z）、精确 4h / 1h 流向窗、GEX 墙图 +
            0γ flip、MA 矩阵 + 30D RV 对 2024-2026 parquet 子集、跨
            资产 / BTC-NQ 脱钩算式、NTT / max-pain / strike-IV /
            BTC-NQ 比率的 framework-only 处理。
            <b>v2 应用全部 6 条 findings：</b>
            <em>DN-001（CRITICAL）：</em>funding chronology 重写 —— 24h
            窗内含两段脱顶（较早 06-02 06:27Z–16:49Z 622 分钟 / ~10.4h、
            加当前 06-02 22:13Z 起 113 分钟 / ~1.88h）合计 ~12.2h 累积
            脱顶；保留累积 trigger 框架、≥ 4h 累积门在 manifest / 正文
            / scout 卡 / 决策表里都标 CLEARED —— mean-revert 长 scout
            的 funding 腿现在 CLEARED（按累积口径仍不可交易；升级仍
            要 8h / 1d TD9 BUY 确认腿与 1h 重夺腿）；
            <em>DN-002（MAJOR）：</em>MTF 扫描 timestamp 从 00:01Z 改为
            00:16Z（实际载入文件 mtime；rolling 文件、比 00:05Z 快照
            锚晚 11 分钟）；MTF 扫描数值改到 00:16Z 源（spot $66,824、
            24h −6.21%、qVol $24.03B、4h TD9 BUY 在 $66,835 —— 对
            06-02 $71,226 印 −$4,391），表里未收盘 TF close 列对齐
            00:16Z 现货 $66,824 除 4h 那格用审计锚定的 $66,835 TD9 BUY
            水位；
            <em>DN-003（MAJOR）：</em>节奏-到-2JUN-结算 delta 从
            <em>7h 14m</em> 修正到 <em>1h 14m</em>（2026-06-02T08:00Z
            − 2026-06-02T06:46Z = 1h 14m、不是 7h 14m）；
            <em>DN-004（MAJOR）：</em>「仓位本子两侧都在谱系峰」改成
            单侧空堆读 —— short_btc 56,036 @ 06-02 19:26Z 是新谱系峰
            （到 pin 落到 53,474），而 long_btc 12,653 在 pin 仍在前
            几根谱系长侧峰下方（05-29 17:21Z 15,358、06-02 19:46Z
            12,852），所以两侧并不是同时在峰；
            <em>DN-005（MINOR）：</em>「低位之后第一根 sample」改成
            「低印在快照前 61 分钟；这是低印之后桌面第一根快照、live
            tape 自己在低位行和 pin 之间还垫了 60 行 1 分钟印」；
            <em>DN-006（MINOR）：</em>宏观源端 copy 对齐 —— DXY
            manifest 水位从 99.21 校到 99.22 与正文 + 源对齐、「自
            06-01 22:15Z 印 +0.21」更新成 <em>+0.22</em> 在 manifest
            与 macro h2 上；Fed 净流动性 Δ 在 manifest、正文与表格上
            relabel —— 水位 $5.872T 对前一篇不变、但源端周度 Δ
            −0.058T 明示披露（表格现在显示 −0.058T、分母 labeled）；
            US-JP 10Y 利差方向更正 —— 「比 06-02 的 1.94% 收窄 1bp」
            → 「比 06-02 的 1.94% 拉宽 1bp」（1.95% 对 1.94% 是 +1bp
            拉宽、不是收窄）。
            <b>Build 注（INFO）：</b>本服务器跑 Node 18.19.1；Next
            16.2.6 在 <code>node_modules/next/dist/bin/next:24-28</code>
            处对 Node &lt; 20.9.0 硬退出、所以完整
            <code>next build</code> 在本机环境阻塞（谱系自 05-21 延续
            到 05-29）。<code>npx --no-install tsc --noEmit</code> 是
            build proxy；STAGE C 在 v2 修正后再跑了一次。审计 Open
            Issues —— MTF 存档约定（rolling latest 文件、无每次扫描
            immutable 路径）、funding trigger-definition 约定（累积 vs
            连续；本篇延续累积）、宏观 delta-分母约定（源端 vs 前一篇）
            —— 留作后续 lineage 决定，逐字记于
            <code>audits/2026-06-03-desk-note.md</code>。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是 Hysteresis Research 主理人之间内部讨论用的桌面
            artifact，<em>不是投资建议、不是要约、不是邀约</em>，也
            不针对任何收信人的个人情况定制。数字反映单一原子快照
            （2026-06-03 00:05Z），section 级 provenance 在上方 manifest
            带里披露；宏观 Tier-1 面板渲染时间是 2026-06-02 22:15Z
            （快照前约 1.8h），部分输入显式陈旧或 pending、按 such
            标注。水位、size、条件是桌面流程的演示、不是长期推荐。
            过往的相关性、γ、仓位形状不约束未来盘。衍生品携带 total
            loss 风险、带杠杆时损失可能超过保证金存入额。<em>请自行
            研究。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                破位再下一层、节奏印出谱系单分钟最大 Δ。$70k 墙穿干净
                到新 $65k 结构性磁石。funding 累积 ~12.2h 脱顶横跨两段、
                ≥ 4h 累积长头门 CLEARED；多 TF TD9 BUY 栈在三个周期上
                离印一根。两条框架监控活：延续（周期-3 step 3 在 06-03
                BJ 13–15 窗）和 mean-revert（长 scout、funding 第一腿
                CLEARED）。两条都不可交易。盯下一根节奏窗。
              </div>
              <div className="dn-sign-name">Desk · BTC derivatives</div>
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
            v2 · 2026-06-03 00:05Z 快照 · 已过 codex 敌对式审计 ·
            来源：live_db.json · mtf_div_latest.html（00:16Z 可回溯）·
            btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md ·
            btcusdt_1m_*.parquet（2024-2026 子集）· FRED · Yahoo ·
            Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
