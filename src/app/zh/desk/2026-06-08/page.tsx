import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav、不在 sitemap、noindex/nofollow。
// 描述故意中性化——任何后续外部分享的链接预览只显示中性文本、
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-06-08 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-06-08',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-06-08' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260608() {
  await requireViewer('/zh/desk/2026-06-08');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-06-08 · v2</span>
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
              <span className="dn-big">$63,290</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+3.87%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-06-08 00:05Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-06-08 00:05Z（snapshot pin row · BJ 08:05 06-08 按 live_db <code>t</code> BJ-local 约定）</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · pin row = <code>t == &ldquo;06-08 08:05&rdquo;</code>{' '}
                    （按 runbook §2 LIVE-TAPE landmine 取 BJ-local 列、对应
                    UTC 00:05Z）· daily-update.timer 00:00Z 与
                    reports-refresh.timer ~:01 都刚跑过、服务器制品约 2
                    分钟新鲜 · 7JUN26 那个 +3.87M 正向前段块在 08:00Z
                    06-07（快照前约 16h）干净结清 —— 连第二根前段块干净
                    结算；今天的 8JUN26 0.3 DTE 是 +6.40M 正向、在
                    08:00Z 06-08 结算（快照后约 8h）—— 第三根连续正向前
                    段块、前段放大器结构性缺席
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-08 00:01Z 扫描（BJ 08:01、已归档到 snapshots/2026-06-08-0007/）</td>
                  <td className="dn-flag">
                    滚动 latest 文件 · 读前先按 runbook §1 归档到
                    snapshots/2026-06-08-0007/ · 较快照锚滞后 4 分钟 ·
                    含未收 K · 多 TF ⚡ TD9 BUY 簇<em>缩</em>到两框并发
                    （1d / 3d）—— 06-07 是三框（12h / 1d / 3d）；12h 从
                    确认 TD9 BUY 进到一根新鲜下数 Sell 3、1d 与 3d 守
                    住 TD9 BUY、1M 仍 TD8 → 9? 待一根收。1h 在快照前一
                    根 K 印出新鲜 <em>水上金叉</em>（DIF 在零轴上方与
                    DEA 形成金叉）—— 谱系上最强的引擎确认印
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-08 00:01Z 快照（已归档）</td>
                  <td className="dn-flag">
                    已归档到 snapshots/2026-06-08-0007/ · 较快照锚滞后 4
                    分钟 · Deribit idx $63,459 对 live $63,290（idx 比
                    live 高 $169 —— 在 idx-vs-live 正常跟踪带内）· 990
                    合约（06-07 是 1,008 —— 净 −18、7JUN 链在 08:00Z
                    06-07 清掉、10JUN / 11JUN 近端列表净增）· 8JUN26
                    0.3 DTE +6.40M 正向是下一根结算（08:00Z 06-08、约
                    8h ahead）—— 第三根连续正向前段块、推动下腿的前段
                    放大器形结构性缺席 · 26JUN26 18.3 DTE −20.05M 月度
                    块是承重的远端负向（从 06-07 的 −24.94M 缓和
                    +$4.89M）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-08 00:01Z（已归档）
                  </td>
                  <td className="dn-flag">
                    滞后约 4 分钟 · 7d 1h bar · 22 资产 · 167 rows ·
                    regime 标仍 IDIOSYNCRATIC（均值 |r| 0.236、较 06-07
                    的 0.233 硬 +0.003 —— 边际向 0.25 NORMAL 阈值靠
                    回）· BTC 第一对齐仍是 SILVER +0.281（较 06-07 的
                    +0.261 硬 +0.020）、TSLA 升到 #2 +0.259（前 #4
                    +0.220）、GOLD #3 +0.233；BTC↔NQ 对齐<em>原封不
                    动</em>停在 +0.188 对 06-07 的 +0.188（零漂移——上周
                    一根 sharp 上行之后 BTC↔NQ 硬化停在原地）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-07 22:15Z 渲染（已归档）</td>
                  <td className="dn-flag">
                    渲染滞后约 1h 50m · 周末 FRED 冻结（周日 UTC →
                    周一 US 开盘还在前面）—— Tier-1 全部日度 FRED 行
                    沿用 06-07 看到的 Friday-close 值：US 10Y nominal
                    4.47%（−2bp 沿用）、10Y TIPS 2.11%（平）、5Y5Y
                    BE 2.24%（平）、HY OAS 2.74%（−1bp 沿用）、NFCI
                    −0.494（陈旧 9d）、MOVE 75.2（+4.04 沿用 Friday
                    印）、Fed 净流动性 $5.834T（−0.038T 沿用）。
                    Yahoo daily DXY 印出新鲜 100.15（+0.08 当日 ·
                    比 06-07 沿用的 100.07 又硬一档）；USD/JPY 160.30
                    （+0.31 当日对 06-07 沿用的 160.29）。除此之外宏
                    观结构性冻到周一 US 开盘
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-06-08 00:05Z（按交易台政策取 btcusdt_1m_2024..2026 子集 + full-history 引用）</td>
                  <td className="dn-flag">
                    parquet 最末 bar 00:05Z 与快照锚完全对齐（无
                    anchor-vs-parquet 漂移、与 06-07 对齐一致）· parquet
                    最末 bar close $63,169.10 对 live spot $63,290.00
                    （$120.90 缺口、1 分钟 parquet 锚坐在 1 分钟 live
                    tape 窗内）。MA 源宇宙是 2024-2026 子集（128 根周
                    bar、与 06-07 不变；新的 W-SUN 2026-06-07 bar 是
                    最近的已收周）、按 06-02 审计 DN-005 交易台政策沿
                    用；在该子集下 W-SMA150 / W-SMA200 不可计算（两个
                    窗都不够）；W-EMA150 / W-EMA200 能印但按 <em>种子</em>
                    截断线披露。Full-history（2019-09-08 → 2026-06-14、
                    354 根周 bar 含未收的新周 bar 在 $63,169.10 1m
                    close）补加为 200W 引用：W-SMA200 = $62,002（对 06-07
                    的 $62,008 几乎平 —— 只下 $6）。live spot $63,290
                    现在坐在 full-history 200W 上方 <em>+2.08%</em>
                    （06-07 是 −1.73% 在下方 —— 符号翻了 +3.81pt、因
                    spot 在 24h 跑 +3.87%）。偏移按 live spot $63,290.00
                    重算、按 06-03 审计 DN-006 谱系沿用
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W 观察（weekly_200sma.json）</td>
                  <td className="dn-v-cell">未写入（审计时文件在服务器上缺、谱系自 06-05 / 06-06 / 06-07 沿用）</td>
                  <td className="dn-flag">
                    200W 观察 JSON 不可用（第四篇连续）；按 runbook §2
                    do-not-fabricate 回落到 full-history parquet 计算。
                    W-SMA200 = $62,002（354 根周 bar 自 2019-09-08）；
                    live spot $63,290 坐在 <em>+$1,288 / +2.08% 上方</em>
                    现货口径 —— 周期地板在现货上重夺。周期地板是周收
                    口径、不是现货 —— 而 06-07 W-SUN 周 bar 收在
                    <em>$63,298.50</em>、是 <em>+$1,296 / +2.09% 上方</em>
                    地板；正式周收上穿 200W 是下腿谱系<em>首根</em>、解
                    决了 06-07 的周末周收破或重夺观察、在重夺方向。新的
                    未收周 bar（W-SUN 锚到 2026-06-14、开盘 06-08
                    00:00Z）在 parquet 最末 bar $63,169.10 = +$1,167 /
                    +1.88% 上方；未收 bar 才进一分钟、所以沿用观察转到
                    下一根周收（06-14 W-SUN）。按 runbook do-not-fabricate
                    不做缺 JSON 的百分位 / 破事件主张、只浮出 full-history
                    水位 + 已解决的周收重夺
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED 月度 · IRLTLT01JPM156N</td>
                  <td className="dn-flag">陈旧 67d · 月度 · 不作实时（陈旧度对 06-07 +1d）</td>
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
              <span className="dn-v">+3.76%</span>
              <span className="dn-src">live · 24h 均值 +0.87% ann（对 06-07 的 24h 均值 −0.13%、+1.00pt 回到正 funding regime —— 反弹把多侧穿过空付多窗）；24h 区间 −4.02% / +4.71% ann；封顶占用 0 / 1441 采样行（0.00% —— 第三根连续零封顶）；谷点 −4.02% ann @ BJ 09:02 06-07（UTC 01:02Z 06-07）、峰 +4.71% ann @ BJ 06:48 06-08（UTC 22:48Z 06-07、与 24h 价高同期）</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bull">−4.02% / +4.71% ann 路径 · 24h 均值 −0.13% → +0.87%（+1.00pt 位移）</span>
              <span className="dn-src">区间放宽（−4.02 / +4.71 对 06-07 的 −3.92 / +0.55 mean-zone）—— 反弹与 SM 空回补付多头 into the spike；542 / 1441 采样行仍负（37.6%）—— 杠杆本子在 24h 内两边都付、不是一面压</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bull">−2.90%（−2,954 BTC）</span>
              <span className="dn-src">live · 下腿谱系第三根连续 OI 缩 —— 也是本腿最深的单篇缩 · SM long_btc +181（基本平）、short_btc −750（小幅泄）—— −2,954 BTC 中绝大多数来自非 SM 账户（散户 / 中层空头回补）；反弹由空回补驱动、不是多头新建</span>
            </div>
            <div>
              <span className="dn-k">retail（mkt）多/空</span>
              <span className="dn-v bull">67.51 / 32.49</span>
              <span className="dn-src">live_db <code>mkt_long_pct</code> · 从 06-07 的 66.43% 硬 +1.08pt —— 散户在反弹印里<em>再拥挤</em>多侧（24h 区间 65.94 / 67.99）· 67.99% 的峰是下腿谱系最高的散户多偏 —— 一根逆向式的晚段拥挤信号</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−41.6k（仍深度净 SHORT）</span>
              <span className="dn-src">live · long 13.80k − short 55.42k · short_btc 24h 谷 54,462 @ BJ 06:21 06-08（UTC 22:21Z 06-07、与 spike 同期）—— 从 24h 峰 57,445 泄 −2.0k、但进快照前又重建 +0.96k；long_btc 24h 峰 15,399 @ BJ 14:50 06-07（UTC 06:50Z）然后落到谷 13,104 @ BJ 06:21 06-08 —— SM 本子在 spike 上<em>切</em>了空、然后又对着反弹引擎部分<em>再加</em>空</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 06-07 备忘</span>
              <span className="dn-v">−42,556 → −41,626（+930 更少空、short −750 / long +181）</span>
              <span className="dn-src">|Δ|/prior_net = 930.2 / 42,556 = <em>2.19%</em> —— 一根很小的结构性切、反弹<em>没</em>带来有意义的 SM 空修复 · SM net 谷 −43,158 @ BJ 00:11 06-08（UTC 16:11Z 06-07）印在 spike <em>之前</em>而不是之后；进快照的<em>真</em>新增空头加仓是 +960 BTC（BJ 06:21 → 08:05 同窗、同时 +692 BTC 新增多头加仓），net 是<em>少空</em> +1,532 BTC 对 BJ 00:11 max-short net 谷 —— sign 约定是 net = long − short、所以从更负的谷向上 +1,532 是 net 更少空、<em>不是</em>新增空头加仓</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">54.3% / 40.40%</span>
              <span className="dn-src">GEX IV 中位数对 06-07 的 53.5% 硬 +0.8pt（990 合约 vs 1,008 —— 7JUN 链在 08:00Z 06-07 清掉、净 10JUN / 11JUN 列表）· 30D RV 从 37.03% 跳 +3.37pt（+3.87% 的 06-08 日回报进滚动 30D 窗）；链溢价约 +13.9pt（06-07 是 +16.47pt —— 缩了、RV 追上 IV）</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bear">−0.87%（在下方）</span>
              <span className="dn-src">flip $63,848（前 $63,538 —— <em>上行 $310</em>、下腿谱系上 flip 首次上移）· 对 live spot $63,290（−0.87%；63,290 / 63,848 − 1 = −0.8740%）/ 对 GEX 文件 Deribit idx $63,459（−0.61%；63,459 / 63,848 − 1 = −0.6093%、文件自己的 tile 读 −0.6%）—— 两参考都负、spot 仍在 flip 下方、本篇 live-spot 参考比 Deribit-idx 参考宽 0.27pt · aggregate GEX −11.0M（前 −38.7M —— 修复 <em>+$27.7M</em>、下腿谱系上最大单篇修复；仍净空 γ、还没翻号）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                06-07 W-SUN 周 bar 收在 $63,298.50、是 full-history 200W
                周期地板 $62,002 上方 +$1,296 / +2.09% —— 06-07 整个周末
                等着观察的<em>正式周收 200W 地板破</em>没发生、在<em>重
                夺</em>方向解决
              </span>。spot 在 24h 跑 <span className="dn-tag bull">+3.87%</span>
              从 <span className="dn-tag">$60,933 → $63,290</span>、下腿谱
              系最大单根上日、并且在 24h 窗印出一根教科书级回补形：OI
              <span className="dn-tag bull">−2,954 BTC（−2.90%）</span>、
              现货 CVD <span className="dn-tag bull">Δ +4,212</span>、期货
              CVD <span className="dn-tag bull">Δ +1,851</span>、大单
              <span className="dn-tag bull">+425 BTC / 365 笔</span>、
              taker-net <span className="dn-tag bull">+1,823</span> —— 价
              格急涨、OI 急缩、双 CVD 净买、大单出价。dealer 本子修复
              <span className="dn-tag bull">+$27.7M</span> 到
              <span className="dn-tag bear">−11.0M aggregate</span>（前
              −38.7M —— 下腿谱系上最大单篇 γ 修复、但本子仍净空 γ、还
              没翻号）、0γ flip <span className="dn-tag bull">上行 $310
              到 $63,848</span>、谱系首次。Mean-revert long scout 的第 3
              腿触发<em>上移</em>到新的 flip $63,848：快照分钟 06-07
              23:00Z 的 1h close $63,298.50 在 06-07 旧的 leg-3 触发
              $63,538 <em>下方 $240</em>、在今天<em>上移后</em>的 $63,848
              <em>下方 $550</em>、所以触发<span className="dn-em">没正式
              印出</span>；scout 仍 NON-ACTIONABLE、第五篇；但 spot 现在
              只在 reframed 拐点下方 $558（对 06-07 的 $2,605 下方 —— 一
              篇内拉近 $2,047）。24h 低 <span className="dn-tag">$60,746
              @ BJ 08:47 06-07（UTC 00:47Z 06-07）</span>守住、在 06-06
              谱系投降低 $59,154 <span className="dn-tag bull">上方
              +$1,592</span> —— 后插针地板守住第二篇、谱系封顶低仍是承
              重止损参考。SM 本子<em>没</em>实质修复：SM net
              <span className="dn-tag bear">−41,626</span> 对 06-07 的
              −42,556 —— +930 BTC 的切、切幅
              <span className="dn-em">|930.2| / 42,556 = 2.19%</span>
              （long +181、short −750）—— 反弹由空回补驱动（OI 缩自散
              户 / 中层）、不是 SM 重建多。散户面实质硬化：
              <span className="dn-tag bear">mkt_long_pct 67.51%</span>
              （硬 +1.08pt 到谱系高）、峰 67.99% —— 散户在反弹里<em>再
              拥挤</em>。本篇标定周收口径正式 200W 重夺、第三根连续正向
              前段块 / 前段放大器缺席的周期、leg-3 触发就差一根 wick ——
              下一个 24h 的问题是 1h close 能否清掉 reframed $63,848 且
              回补形仍在印、还是 SM 再加 + 散户再拥挤推动一腿回到
              $59,154 下方<em>之前</em>触发先印。
            </p>

            <p>
              BTC 报 <span className="dn-tag">$63,290</span> live、
              <span className="dn-tag bull">+3.87%</span> 在 24h —— 下腿
              谱系最大单根上日、自 06-01 破谱以来第一根实质重夺印。24h
              区间是 <span className="dn-tag">$63,635 / $60,746</span>
              （高 @ BJ 06:15 06-08 / UTC 22:15Z 06-07、低 @ BJ 08:47
              06-07 / UTC 00:47Z 06-07）—— 从 sub-$61k 的低干净跑到比快
              照高 $1.6k 的高。<span className="dn-signal">06-07 W-SUN
              周 bar 收在 $63,298.50 —— 下腿谱系上<em>首根</em>正式周收
              在 full-history 200W $62,002 上方</span>；06-07 备忘里框
              的周末周收破或重夺观察在重夺方向干净解决、+$1,296 /
              +2.09%。前段日收簇：06-02 $66,730、06-03 $64,118、06-04
              $63,853、06-05 $61,022、06-06 $60,850（下腿最深收）、
              06-07 $63,298（重夺）、06-08 未收 parquet 最末 bar $63,169
              （新 UTC 日只进一分钟）。周期锚 D-SMA100 仍是承重结构
              性闸 <span className="dn-tag bear">$72,965（−13.26%）</span>
              —— 仍在头顶约 $9.7k、但比 06-07 离 spot 近 $2.3k（06-07
              读 $72,978 / 约 $12.0k 头顶、因 spot 朝它跑了 +$2,357）。
              <span className="dn-em">
                直读：200W 周期地板在收盘上重夺了、dealer 本子急修
                复、引擎在每一个字段上印出回补形、leg-3 拐点跟我们
                上移（flip +$310）、谱系投降低守住第二篇、周期锚现
                在是 $9.7k 头顶不是 $12.0k。但 SM 空仓仍深堆（切幅
                只 2.19%）、散户在谱系最高偏度上再拥挤多侧、新 flip
                比 spot 跑得更远、leg-3 触发在 1h 收盘口径上还没正
                式印。结构性转向比下腿谱系任何时点都更近、仍未确认。
              </span>
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面 · spot 跑 +3.87% 在一根教科书 24h 回补形上 · OI −2,954 BTC 是谱系最大缩 · SM 本子仍深度空、切幅只 2.19% · 散户再拥挤多到谱系高 · 谱系投降低 $59,154 在 24h 低 $60,746 上守住第二篇</span>
            </h2>

            <p>
              <span className="dn-signal">
                仓位本子印出一根 OI 缩 + 双 CVD 净买的 +3.87% 上日 ——
                下腿谱系上最干净的回补形日、按幅度计 —— 但 SM 空仓几
                乎没修
              </span>。SM net 是 <span className="dn-tag bear">−41,626</span>
              对 06-07 备忘的 −42,556 —— 也就是 <span className="dn-em">
              +930 BTC 更少空、切幅 |930.2| / 42,556 = 2.19%</span>。分
              量：long_btc <span className="dn-tag bull">13,615 → 13,796
              （+181、基本平）</span>、short_btc
              <span className="dn-tag bull">56,172 → 55,422（−750、小幅
              泄）</span>。24h 形状：short_btc 24h 峰
              <span className="dn-tag bear">57,445 @ BJ 22:45 06-07（UTC
              14:45Z 06-07）</span> —— 在反弹起点把空头加进 06-07 锚位
              （56,172）之上 +1,273；然后 short_btc 谷
              <span className="dn-tag bull">54,462 @ BJ 06:21 06-08（UTC
              22:21Z 06-07）</span> —— 与 24h 价高同期、SM 本子终于在
              spike 上切空 −2,983 BTC；然后 short_btc 回建到 55,422 进
              快照（一根 +960 BTC 后 spike 再加、SM 本子在快照前 1h
              44min 开始对着反弹再装空）。long_btc 24h 峰
              <span className="dn-tag bull">15,399 @ BJ 14:50 06-07（UTC
              06:50Z）</span> 然后落到谷
              <span className="dn-tag bear">13,104 @ BJ 06:21 06-08（UTC
              22:21Z 06-07）</span>（与 short_btc 谷同期 —— 两侧都在
              spike 上切）。SM net 谷
              <span className="dn-tag bear">−43,158 @ BJ 00:11 06-08
              （UTC 16:11Z 06-07）</span> —— 最大空头印在价高<em>之前</em>
              约 6h、本子在 spike 上切空（net 在印高时同步顶）、然后
              进快照 +960 BTC 真新空头加仓（同窗 +692 BTC 真新多头加
              仓）；净从 BJ 00:11 max-short 谷 −43,158 到快照 −41,626
              是 <em>少空 +1,532 BTC</em>（sign 约定：net = long − short、
              从更负的谷向上是更少空、<em>不是</em>新增空头加仓）。形
              状是 <span className="dn-em">回补-切-再建</span> —— SM 本
              子在 spike 上付出了切的代价、并已经开始对着反弹引擎建一
              根新空头堆。
            </p>

            <p>
              杠杆与流向侧是 24h 帧上明确的回补形。
              <span className="dn-signal">
                funding 缓回中性、24h 均值 +1.00pt 位移到小正
              </span>：live <span className="dn-tag">+3.76% ann</span>、
              24h 区间 <span className="dn-tag">−4.02% / +4.71%</span>、
              谷点 <span className="dn-tag bull">−4.02% ann @ BJ 09:02
              06-07（UTC 01:02Z 06-07、24h 价低之后 4 分钟）</span>、
              峰 <span className="dn-tag bear">+4.71% ann @ BJ 06:48
              06-08（UTC 22:48Z 06-07、24h 价高之后 33 分钟）</span> ——
              funding 在 24h 内两边都跟价格走。24h 均值 ann
              <span className="dn-tag">+0.87%</span>（对 06-07 的 −0.13%
              —— funding regime 位移 +1.00pt 回到小净多付费、反弹把窗
              末段的印拖正）。封顶占用
              <span className="dn-tag bull">0 / 1441 采样行（0.00%）</span>
              —— 第三根连续零封顶、杠杆闸大开、没单边压可放大。542 /
              1441 采样行（37.6%）在路径上是负的、所以反弹把 funding
              翻回正之前、多头被空头付了超过三分之一的 24h 窗。OI Δ
              <span className="dn-tag bull">−2,954 BTC（−2.90%）</span>
              跨 24h —— <span className="dn-em">下腿谱系最大单篇 OI 缩
              </span>；SM long +181 与 short −750 只占切的约 570 BTC、
              所以剩下的（约 2,384 BTC）是散户 / 中层空头回补、是本篇
              承重的流向。散户
              <span className="dn-tag bear">mkt_long_pct 67.51%</span>
              从 06-07 的 66.43% —— +1.08pt 再拥挤、24h 区间 65.94 /
              67.99、67.99% 的峰是下腿谱系最高的散户多偏。perp 对现货
              <span className="dn-tag bear">−$39.74 折价</span> 在快照
              （1h 均 −$31.33、区间 −$86.86 / +$43.89；4h 均 −$32.38、
              区间 −$617.10 / +$199.17；24h 均 −$30.52、区间 −$617.10 /
              +$199.17 —— basis 在 24h 高时短暂触 +$199 升水、然后回
              到负；−$617 那根单分钟折价是去低路上早段的空气坑、不是
              持续压）。1 分钟 aggressor skew 快照
              <span className="dn-tag bull">+13.6</span>（1h 均 +7.34、
              区间 −31.0 / +40.6）—— 一档温和买攻倾斜、1h 整体净买。
              <span className="dn-em">
                funding 翻回小正 + OI 缩谱系最大 + 第三根连续零封顶：杠
                杆本子付了 spike 上的空回补、放气继续；但散户在谱系高
                偏度再拥挤多、SM 本子对着反弹再建一根新空 —— 杠杆本子
                没压不出来、但仓位本子仍堆空。
              </span>
            </p>

            <p>
              窗口流向是<em>24h 教科书回补形、4h 到 1h 后 spike 再建
              的部分褪</em>。24h：价格
              <span className="dn-tag bull">+3.87%</span>、OI
              <span className="dn-tag bull">−2,954 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +4,212</span>（24h 内无
              cb_cvd reset —— 干净读）、期货 CVD
              <span className="dn-tag bull">Δ +1,851</span>、大单
              <span className="dn-tag bull">+425 BTC / 365 笔</span>、
              taker-net <span className="dn-tag bull">+1,823</span> ——
              <span className="dn-em">
                每一个流向字段净买、OI 急缩、下腿谱系最干净的回补形印
                按幅度计（前一根最好是 06-07 4h 窗的现货 CVD +382 /
                OI +65；今天 24h 在现货 CVD 上是它的 11×、且 OI 是缩
                而不是扩）
              </span>。4h（进快照）：价格
              <span className="dn-tag bull">+2.92%</span>、OI
              <span className="dn-tag bull">−1,867 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +1,538</span>、期货 CVD
              <span className="dn-tag bull">Δ +277</span>、大单
              <span className="dn-tag bull">+217 BTC / 36 笔</span>、
              taker-net <span className="dn-tag bull">+289</span> ——
              <em>4h 窗装着 spike 本身；OI 缩 + spot 急涨 = 4h 上也是
              回补形</em>。1h：价格
              <span className="dn-tag bull">+0.69%</span>、OI
              <span className="dn-tag bear">+561 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +223</span>、期货 CVD
              <span className="dn-tag bull">Δ +295</span>、大单
              <span className="dn-tag bull">+205 BTC / 10 笔</span>、
              taker-net <span className="dn-tag bull">+296</span> ——
              <em>最近 1h 是再建阶段：OI 回到扩张（+561）、spot 比期
              货略慢、大单与 taker 仍买。这不是快照分钟那一根小时的
              回补形 —— 这是二阶 long-add / 新堆形、在回补-切耗尽
              <em>之后</em>建</em>。合起来读、24h 与 4h 带回补-切形、
              1h 是后回补-切的再建 —— 正好是<em>进入</em> leg-3 触发
              印或失败之前的形。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 图 · 簇 ⚡ TD9 BUY 从 06-07 的三框缩到两框并发（1d / 3d）—— 12h 进到新鲜下数 Sell 3 · 1h 水上金叉<em>刚在快照前一根 K 印</em>（谱系最强的引擎确认）· 周期锚仍约 $9.7k 头顶但比 06-07 近 $2.3k · 200W 周期地板在 06-07 W-SUN 周收上<em>重夺</em>$63,298 对 $62,002</span>
            </h2>

            <p>
              <span className="dn-signal">
                引擎确认了反弹 —— 1h 水上金叉在快照前一根 K 印出 ——
                下腿谱系上最强的单帧 MACD 印、在一根 +0.69% 1h 上 bar
                上、双 CVD 正、大单买
              </span>。多 TF ⚡ TD9 BUY 簇从 06-07 的三框并发（12h /
              1d / 3d）缩到今天的两框（1d / 3d）—— 12h 从确认 TD9
              BUY 进到一根新鲜下数 Sell 3、因反弹把价格穿过下数收
              阈值。1d 与 3d 守住 TD9 BUY、1M 仍 TD8 → 9? 待一根
              收。RSI 跨引擎抬：1h <span className="dn-tag bull">64.5
              </span>（从 06-07 的更深读、现在稳在 50 中位线上）、4h
              <span className="dn-tag">50.5</span>（正在中位）、15m
              <span className="dn-tag bull">63.0</span>、30m
              <span className="dn-tag bull">66.6</span>。深帧仍超卖：
              8h 36.0、12h <span className="dn-tag bear">30.7</span>
              （谱系低）、1d <span className="dn-tag bear">26.4</span>、
              3d 34.4 —— 周期帧超卖读<em>还没</em>清；反弹引擎本篇
              是引擎-only、不是一根周期帧转向。Ichimoku 在快帧翻：
              15m / 30m / 1h 现在都<em>云上</em>（15m 8b、30m 4b、
              1h 4b）；4h 仍 79b 云下、上沿 $68.7k；8h 69b 云下、
              上沿 $74.6k；12h 33b 云下、上沿 $77.1k；1d 7b 云下、
              上沿 $73.9k。1M 仍 28b 云上、下撑 $46.9k；1w 19b 在
              $100.3k 上沿之下。本扫描无新 ⚡ TD9 信号在引擎上；簇
              停在两框、待 1M 收 9 数。
              <span className="dn-em">
                直读：引擎确认了反弹（1h 水上 MACD 金叉 + 30m 水上
                4b、RSI 跨 15m / 30m / 1h 重夺、15m / 30m / 1h 翻云
                上）、周期帧仍超卖（1d RSI 26.4 谱系低、12h 30.7、
                3d 34.4）、中帧簇（4h / 8h / 12h）仍云下且深负 MA
                偏移。引擎拿了反弹；周期帧没加入。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">63,229</td><td className="num bull">63.0</td><td className="neut">水下金叉 12b</td><td className="bull">云上 ↓62.2k 8b</td><td>Sell 4</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>30m</td><td className="num">63,229</td><td className="num bull">66.6</td><td className="bull">水上金叉 4b</td><td className="bull">云上 ↓62.1k 4b</td><td>Sell 7</td><td>BEAR hid · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">63,229</td><td className="num bull">64.5</td><td className="bull">水上金叉 1b（刚印）</td><td className="bull">云上 ↓61.6k 4b</td><td>Sell 3</td><td>BEAR hid · BULL hid · BEAR reg · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">63,229</td><td className="num">50.5</td><td className="neut">水下金叉 11b</td><td className="bear">云下 ↑68.7k 79b</td><td>Sell 2</td><td>BULL reg</td></tr>
                <tr><td>8h</td><td className="num">63,238</td><td className="num bear">36.0</td><td className="neut">水下金叉 2b</td><td className="bear">云下 ↑74.6k 69b</td><td>Sell 5</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">63,229</td><td className="num bear">30.7</td><td className="bear">水下死叉（在）</td><td className="bear">云下 ↑77.1k 33b</td><td>Sell 3</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">63,229</td><td className="num bear">26.4</td><td className="bear">水下死叉（在）</td><td className="bear">云下 ↑73.9k 7b</td><td>⚡ TD9 BUY</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>3d</td><td className="num">63,229</td><td className="num">34.4</td><td className="bear">水上死叉 4b</td><td className="bear">云下 ↑74.2k 2b</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">63,229</td><td className="num">34.2</td><td className="bear">水下死叉（在）</td><td className="bear">云下 ↑100.3k 19b</td><td>Buy 4</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">63,238</td><td className="num">42.6</td><td className="bull">水上（DIF 在零轴上方）</td><td className="bull">云上 ↓46.9k 28b</td><td>Buy 8 → 9? 待</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 2026-06-08 00:01Z 扫描
                    （滚动 latest 文件；读前先按 runbook §1 归档到
                    snapshots/2026-06-08-0007/）。头部告警：
                    <em>1h 水上金叉（刚印）</em>、
                    <em>8h 水下金叉 2b</em>、
                    <em>1d / 3d ⚡ TD9 BUY（最后一根 K 可能未收）</em>、
                    <em>1M TD8 → 9? 待</em>。扫描现货 $63,229、24h
                    +3.90%（00:01Z MTF 扫描；live-tape 头部 00:05Z 在
                    同一 24h 窗读 +3.87% —— 4 分钟时差导致 0.03pt 偏
                    差）、24h H/L $64,250 / $60,708、qVol $13.52B。
                    收盘为未收 K；每个值在各 TF 收前按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵确认锚仍头顶、但缺口实质收窄。spot $63,290 坐在
              <span className="dn-tag bear">D-SMA100 $72,965 下方
              −13.26%</span> —— 周期锚、日阶梯上最近一根、约 $9.7k 头
              顶（前 06-07 是约 $12.0k；近 $2.3k 因 spot 朝它跑了
              +$2,357、滚动 100D 锚因 06-04 / 06-05 / 06-06 深印滚到
              前方下来 $13）。最近的头顶 MA 现在是 D-EMA20
              <span className="dn-tag bear">$69,336（−8.72%）</span>
              （前 06-07 是 $69,751、低 $415 因滚动 20D EMA 吸收下腿
              印比反弹抬得快；比 06-07 近 spot $2,772）。W-SMA20 /
              D-SMA100 / D-EMA50 簇：W-SMA20
              <span className="dn-tag bear">$71,464（−11.44%）</span>
              （前 06-07 是 $73,230 —— 因深周收滚入而下泄）、D-SMA100
              <span className="dn-tag bear">$72,965（−13.26%）</span>、
              D-EMA50 <span className="dn-tag bear">$72,874（−13.15%）
              </span>。其余按水位顺序：D-SMA20
              <span className="dn-tag bear">$71,046（−10.92%）</span>、
              D-SMA150 <span className="dn-tag bear">$74,720（−15.30%）
              </span>、D-EMA100
              <span className="dn-tag bear">$74,711（−15.29%）</span>、
              D-SMA50 <span className="dn-tag bear">$75,598（−16.28%）
              </span>、D-EMA150
              <span className="dn-tag bear">$77,213（−18.03%）</span>、
              D-SMA200 <span className="dn-tag bear">$78,357（−19.23%）
              </span>、W-EMA20
              <span className="dn-tag bear">$75,092（−15.72%）</span>、
              D-EMA200 <span className="dn-tag bear">$79,747（−20.64%）
              </span>。更高更远、在 2024-2026 子集上弃用：W-EMA100 种子
              $82,438（−23.23%）、W-EMA50 $83,124（−23.86%）、W-SMA100
              $88,428（−28.43%）、W-SMA50 $91,715（−30.99%）；W-EMA200
              种子读 $73,494（−13.88%）、W-EMA150 种子读 $77,834
              （−18.69%）—— 在 128 周子集上都是 EMA 种子截断、只为完
              整披露浮出。
              <span className="dn-signal">
                200W 观察 JSON 在服务器上仍缺（第四篇连续）；按 runbook
                §2 回落到 full-history parquet 计算、full-history
                W-SMA200 在 $62,002（354 根周 bar 自 2019-09-08、含刚
                开的未收新周 bar 在 $63,169.10 1m close）。live spot
                $63,290 坐在周期地板上方 +2.08%、现货口径
              </span>。06-07 W-SUN 周收 $63,298.50 是 +$1,296 / +2.09%
              对 200W —— 下腿谱系上首根正式周收在周期地板上方。新的
              未收周（W-SUN 锚到 2026-06-14、开 06-08 00:00Z）在
              parquet 最末 bar $63,169.10 = +$1,167 / +1.88% 上方；
              新周才进一分钟、所以沿用观察转到 06-14 W-SUN 收。200W
              观察政策读约 $200/周漂；水位对 06-07 的 $62,008 下了
              $6、因滚动 200 周窗丢一周、加新未收周在可比水位 —— 远
              在漂带内。按 runbook do-not-fabricate 不做缺 JSON 的百
              分位 / 破事件主张、只浮出水位 + 正式周收重夺。
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-06-08 00:05Z（close
                $63,169.10）；偏移按 live spot $63,290.00 重算（按
                06-03 审计 DN-006 处置：live-pin 分母沿用；parquet-
                adjacent close $63,169.10 在 live pin 下方 $120.90、
                所以 parquet-vs-live 缺口本篇紧 —— parquet 最末 bar
                与快照锚分钟完全对齐、无 anchor-vs-parquet 漂移）。日
                收：06-02 $66,730、06-03 $64,118、06-04 $63,853、
                06-05 $61,022、06-06 $60,850、06-07 $63,298（下腿谱系
                首根周收重夺 200W、+$1,296 在 $62,002 上方）、06-08
                未收 $63,169 —— 下腿日收稳定第三篇、06-07 标定正式
                重夺。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子修复 +$27.7M 到 aggregate −11.0M（前 −38.7M、下腿谱系上最大单篇 γ 修复；仍净空 γ、还没翻号）· flip 上行 $310 到 $63,848、谱系首次 · 8JUN26 0.3 DTE +6.40M 正向（第三根连续正向前段块；7JUN +3.87M 在 08:00Z 06-07 干净结清）· $60k crash-put 墙缓和到 −21.65M（前 −26.19M、−$4.54M 因 spot 跑过该 strike 上方 $3.29k）· 26JUN26 18.3 DTE −20.05M 月度仍是承重远端负向（从 −24.94M 缓 +$4.89M）</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子在每一根读上都急修复：aggregate γ 改善
                +$27.7M、0γ flip 上行 $310 谱系首次、推动下腿的前段
                放大器形结构性缺席第三根连续到期周期 —— 但本子仍净
                空 γ、还没翻号
              </span>。Aggregate GEX 是
              <span className="dn-tag bear">−11.0M / 1%</span>（前
              −38.7M —— +$27.7M 结构性改善、下腿谱系上最大单篇 γ 修
              复、但本子仍净空 γ；翻号现在只差约 $11M 新鲜正 γ）。
              0-γ flip 移动 <span className="dn-tag bull">$63,538 →
              $63,848（+$310）</span> —— 下腿谱系上 flip 首次上移
              （对 06-07 的 −$240 下移和此前一串下移）。两个距 flip
              参考（按 06-02 审计 DN-007 沿用）：live-spot 参考
              <span className="dn-tag bear">−0.87%</span>
              （63,290 / 63,848 − 1 = −0.8740%）；GEX 文件 Deribit-
              index 参考 <span className="dn-tag bear">−0.61%</span>
              （63,459 / 63,848 − 1 = −0.6093%、与文件自己的 dist-to-
              flip tile −0.6% 一致）。live-spot 参考比 Deribit-idx 参
              考宽 −0.27pt、因 Deribit idx 只比 live spot 高 $169 ——
              在 idx-vs-live 正常跟踪带内。两参考都负；live-spot 参考
              <em>缩</em>到 −0.87% 从 06-07 的 −4.10%（+3.23pt 缺口
              收窄、spot 跑同时 flip 跟我们上移 $310 —— 两侧都贡献）。
            </p>

            <p>
              墙图跟反弹移：下行 crash-put 实质缓、近头顶负向变厚、
              最重 call 墙硬化：
              <span className="dn-tag bear">$60k −21.65M</span>（前
              −26.19M 06-07、−$4.54M 缓 —— spot 跑过 strike 上方
              $3.29k、墙从撑-磁铁明确翻成只有回测时的下拉-磁铁、仍
              是链上最重单根负向墙）、
              <span className="dn-tag bull">$80k +11.50M</span>（最重
              正向头顶、对 06-07 的 +8.97M +$2.53M 实质变厚 —— 上行
              阻尼极变厚）、
              <span className="dn-tag bear">$55k −8.55M</span>（前
              −10.69M —— 缓 $2.14M）、
              <span className="dn-tag bear">$62k −7.85M</span>（前
              −5.84M 06-07 —— 因 spot 跨过 strike 上方<em>再变厚</em>
              $2.01M、墙现在是回拉 strike 的活跃下拉）、
              <span className="dn-tag bear">$50k −5.92M</span>（前
              −6.80M —— 缓）、
              <span className="dn-tag bear">$58k −4.80M</span>（前
              −6.47M —— 缓）、
              <span className="dn-tag bull">$82k +4.43M</span>（前
              +3.30M —— 硬化）、
              <span className="dn-tag bull">$78k +3.22M</span>（新进
              top-10 正向、替换 06-07 的 $61.5k +3.87M 正向墙、它已
              清掉、在 spike 里完成了它的功能）、
              <span className="dn-tag bull">$90k +3.01M</span>、
              <span className="dn-tag bull">$70k +2.50M</span>（新进
              top-10 正向 —— 上头顶带一根新鲜小正向建）。负簇
              $50k–$65k 现在堆（在列出的 top-10 里）约
              <span className="dn-em">−48.77M dealer 放大</span>（带内
              墙之和：−5.92 − 8.55 − 4.80 − 21.65 − 7.85 = −48.77M；
              06-07 的 $59k / $61k / $64k / $65k 墙今天掉出 top-10
              带、簇巩固到更少更大的 strike；对 06-07 可比列出簇
              −63.25M —— 走廊在 top-10 基础上缓约 $14.5M、dealer 侧
              下行压实质放松）。本篇承重读是
              <span className="dn-signal">
                前段放大器形在第三根连续到期周期上结构性缺席（8JUN
                +6.40M、7JUN +3.87M、6JUN 在 08:00Z 06-06 清掉）加上
                0γ flip 谱系首次上行 $310。dealer 本子终于拿到修复
                的两半：前段干净衰减<em>并且</em> flip 跟我们移。结
                合 $60k 墙缓 $4.54M 与 $80k 墙硬 $2.53M、紧贴 spot
                上下方的 strike 现在在近头顶带显示一根双侧阻尼形、即
                使 26JUN −20.05M 月度仍是承重远端块
              </span>。前向 expiry：8JUN 0.3 +6.40M（今天结算、约 8h
              ahead）、9JUN 1.3 +2.29M（对 06-07 的 8JUN 1.3 −2.29M；
              前段块现在在整条短前向带上都正）、10JUN 2.3 +1.02M（前
              9JUN 2.3 +0.35M）、11JUN 3.3 +0.36M（前 10JUN 3.3
              +0.42M）、12JUN 4.3 −4.44M（前 12JUN 5.3 −8.91M 06-07
              —— 缓 +$4.47M、下一根负向块实质权重显著降）、19JUN 11.3
              −4.65M（前 19JUN 12.3 −6.26M —— 缓 +$1.61M）、26JUN
              18.3 −20.05M（前 26JUN 19.3 −24.94M —— 缓 +$4.89M、仍
              是承重远端负向）、31JUL 53.3 +4.61M（前 +1.61M —— 硬
              +$3.00M）、28AUG 81.3 +1.41M、25SEP 109.3 +1.92M（前
              −0.69M —— 翻正）、25DEC 200.3 +3.72M（前 +1.64M —— 实
              质硬化）、26MAR27 291.3 +0.62M。8JUN +6.40M 前段块在
              08:00Z 06-08（快照前约 8h）结算；因正向、结算窗<em>不</em>
              带放大器 —— 第三根连续到期结算无新鲜负向前段块。除
              8JUN 后 aggregate 约
              <span className="dn-tag">−11.0M − (+6.40M) = −17.4M</span>
              （在前向残余基础上略差、因正向前段块清掉、留下负向尾在
              后面）、但前段衰减形本身是一根结构性改善、跨第三根连续
              到期周期复合。
            </p>

            <p>
              IV 中位数横跨 990 合约是
              <span className="dn-tag bear">54.3%</span>（从 06-07 的
              53.5% / 1,008 合约硬 +0.8pt —— vol 在 spike 里硬化；18
              根合约更少反映 7JUN 链在 08:00Z 06-07 清掉、净 10JUN /
              11JUN 近端列表）对 30D close-to-close RV
              <span className="dn-tag bear">40.40%</span>（前 37.03%
              —— +3.37pt 因 +3.87% 的 06-08 日回报滚入 30D 窗）。链溢
              价 <span className="dn-tag bear">约 +13.9pt</span>（前
              约 +16.47pt 06-07 —— 缩 −2.57pt、RV 追上 IV）。链中位
              数横跨 N 合约、<span className="dn-em">不是</span>可交
              易价差；expiry- / strike-level vega、skew、期限结构仍
              未载入、vol 读法保持 framework only。RV 方法：30D
              close-to-close、logret.std × √365 × 100、用最末 30 根
              日 log return（= 31 根连续日 close）、锚自 parquet 最末
              bar 2026-06-08 00:05Z；底层 31-close 窗现在跨度
              $60,849.70 – $82,177.70（06-06 低收进窗、可比月前低端
              印滚出）。参考：最末 29 returns / 30 closes 读 39.89%；
              页面值 40.40% 来自 30 returns。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · 周末 FRED 冻结第二天 —— 每根 Tier-1 FRED 行沿用与 06-07 / 06-06 相同的 Friday-close 值（10Y 4.47% / TIPS 2.11% / HY OAS 2.74% / NFCI −0.494 陈旧 9d / MOVE 75.2 / Fed 流动性 $5.834T / US-JP 1.95% / USD-CNY 6.7650）· Yahoo daily DXY 印出<em>一根</em>新鲜 tick 到 100.15（+0.08 当日 · 06-07 沿用 100.07）、USD/JPY 到 160.30（+0.31 当日 · 06-07 沿用 160.29）· 信用闸仍 4bp 距触发 Friday close（HY OAS 2.74%）；利率闸仍 6bp 距触发（10Y 4.47%）· BTC-vs-TradFi 7d 缺口收窄到 −9.63pt（前 −13.26pt 06-07）—— BTC 把 06-01 深印滚出 7d 窗</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观面在第二天周末 FRED 冻结上结构性冻、只有一根日度
                Yahoo DXY tick 新鲜：每根 Tier-1 FRED 日度行沿用与
                06-06 / 06-07 相同的 Friday-close 值、因下一根可观察
                FRED 日度印是周一 US 开盘（仍在本 00:05Z 06-08 快照
                之前）
              </span>。面板渲染 2026-06-07 22:15Z、比快照早约 1h 50m
              —— 与 06-07 同样的渲染滞后形。US 10Y nominal
              <span className="dn-tag bull">4.47%（−2.0bp Δ-column
              沿用）</span>、regime z
              <span className="dn-tag bear">+1.56</span>、偶发 z
              <span className="dn-tag">+0.14</span> —— RISK-OFF 标沿
              用、闸仍 6bp 距 Friday close 触发。10Y TIPS real
              <span className="dn-tag bear">2.11%（平）</span>、regime
              z <span className="dn-tag bear">+1.75</span>、偶发 z
              <span className="dn-tag">+0.95</span> —— RISK-OFF 沿用。
              5Y5Y BE 通胀 <span className="dn-tag">2.24%（平）</span>
              —— 沿用。HY OAS
              <span className="dn-tag bull">2.74%（−1.0bp Δ-column
              沿用）</span>、regime z
              <span className="dn-tag bull">−1.14</span>、偶发 z
              <span className="dn-tag bull">−0.80</span> —— RISK-ON
              标仍、闸仍 4bp 距 Friday close 触发。NFCI
              <span className="dn-tag">−0.494（+0.01）</span> —— 沿
              用、陈旧 9d（+1d 对 06-07）。Fed 净流动性
              <span className="dn-tag bear">$5.834T（−0.038T）</span>
              —— 沿用。MOVE 债波
              <span className="dn-tag bear">75.2（+4.04 沿用）</span>
              —— 谱系上 Friday 的债波跳作为固定周末基线继续、不是新
              鲜印。DXY
              <span className="dn-tag bear">100.15（+0.08 当日 · 比
              06-07 沿用的 100.07 又硬一根 Yahoo tick）</span>、
              regime z <span className="dn-tag bear">+1.86</span>、偶
              发 z <span className="dn-tag bear">+2.18</span> ——
              RISK-OFF EPISODIC 沿用在谱系极端附近、在一根略硬印
              上；USD/JPY
              <span className="dn-tag bear">160.30（+0.31 当日对 06-07
              沿用的 160.29）</span> —— 日元再弱一档；US-JP 10Y 利差
              <span className="dn-tag bull">1.95%（−2.0bp 沿用）
              </span>；USD/CNY
              <span className="dn-tag bull">6.7650（沿用）</span>。
              JGB 10Y 陈旧 67d 在 2.52%（陈旧度 +1d 对 06-07）。
              <span className="dn-em">
                净：宏观贡献仍是冻结 Friday-close 基线 + 一根 DXY /
                一根 JPY 边际硬化 tick。信用闸仍 4bp 距 Friday close
                触发；利率闸仍 6bp 距触发。reclaim-long 利率筛
                （10Y &lt; 4.55%）在 4.47% Friday close 仍真。
                BTC-vs-TradFi 脱钩收窄到 −9.63pt（BTC −14.36% vs NQ
                −4.73%）从 06-07 的 −13.26pt —— 但这次<em>是因为</em>
                06-01 / 06-02 深 BTC 印滚<em>出</em> 7d 窗而 TradFi
                保持可比；轮动读法现在是 BTC 正常化-回到 TradFi 盘
                面、不是 BTC 单独延伸
              </span>。
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
                <tr><td>US 10Y nominal</td><td className="num">4.47%</td><td className="num bull">−2.0bp（沿用）</td><td className="num bear">+1.56</td><td className="num">+0.14</td><td className="bear">紧 · Friday close 沿用 · 闸 6bp 距触发</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.11%</td><td className="num">0.0bp</td><td className="num bear">+1.75</td><td className="num">+0.95</td><td className="bear">紧 · 仍 RISK-OFF · 沿用</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.24%</td><td className="num">0.0bp</td><td className="num">+0.09</td><td className="num bull">−0.88</td><td className="neut">无标 · 沿用</td></tr>
                <tr><td>HY OAS</td><td className="num bull">2.74%</td><td className="num bull">−1.0bp（沿用）</td><td className="num bull">−1.14</td><td className="num bull">−0.80</td><td className="bull">松 · risk-on · 闸 4bp 距 Friday close 触发</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.494</td><td className="num">+0.01</td><td className="num">+0.72</td><td className="num">−0.01</td><td className="neut">紧 · 陈旧 9d · 沿用</td></tr>
                <tr><td>MOVE 债波</td><td className="num bear">75.2</td><td className="num bear">+4.04（沿用）</td><td className="num">−0.10</td><td className="num">+0.30</td><td className="bear">z 中性 · 06-06 谱系跳仍是固定周末基线</td></tr>
                <tr><td>DXY</td><td className="num bear">100.15</td><td className="num bear">+0.08 当日 · +0.08 对 06-07 100.07</td><td className="num bear">+1.86</td><td className="num bear">+2.18</td><td className="bear">RISK-OFF EPISODIC · 又硬一根 Yahoo tick</td></tr>
                <tr><td>Fed 净流动性</td><td className="num bear">$5.834T</td><td className="num bear">−0.038T</td><td className="num">−0.12</td><td className="num bear">−2.29</td><td className="bear">沿用 · 周一前无新鲜周度印</td></tr>
                <tr><td>USD/JPY</td><td className="num bear">160.30</td><td className="num bear">+0.31 当日 · +0.01 对 06-07 160.29</td><td className="num bear">+1.36</td><td className="num bear">+1.44</td><td className="bear">日元再弱一档</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num bull">1.95%</td><td className="num bull">−2.0bp（沿用）</td><td className="num bull">−0.85</td><td className="num">+0.14</td><td className="bull">收窄 · 沿用</td></tr>
                <tr><td>USD/CNY</td><td className="num bull">6.7650</td><td className="num bull">−0.01（沿用）</td><td className="num bull">−1.84</td><td className="num bull">−1.46</td><td className="bull">无标 · 松 · 沿用</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">+17.0bp（月度 · 陈旧 67d）</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">月度 · 不依赖 · 陈旧度 +1d 对 06-07</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、汇总 00:01Z ——
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。
              非对角线均值 <span className="dn-tag">|r| 0.236</span>
              （较 06-07 的 0.233 硬 +0.003 —— 边际向 0.25 NORMAL 阈值
              靠回；regime 标仍 IDIOSYNCRATIC）。BTC 第一对齐仍是
              SILVER：<span className="dn-tag">SILVER +0.281</span>
              （前 +0.261 06-07 —— 硬 +0.020）、TSLA 升 #2
              <span className="dn-tag">+0.259</span>（前 +0.220 —— 硬
              +0.039）、GOLD
              <span className="dn-tag">+0.233</span>（前 +0.194）、MSFT
              <span className="dn-tag">+0.218</span>（前 +0.189 —— 硬
              +0.029）、SP500
              <span className="dn-tag">+0.214</span>（前 +0.220 —— 软
              −0.006）、COPPER
              <span className="dn-tag">+0.208</span>（前 +0.178）、
              NVDA <span className="dn-tag">+0.198</span>（前 +0.185）、
              META <span className="dn-tag">+0.195</span>（前 +0.166）、
              NQ <span className="dn-tag">+0.188</span>
              <span className="dn-em">（对 06-07 的 +0.188 完全不变 ——
              零漂移；06-06 → 06-07 那一根 +0.059 BTC↔NQ 硬化彻底停
              在原地）</span>、URNM
              <span className="dn-tag">+0.187</span>。7d 表现：
              <span className="dn-tag bear">BTC −14.36%</span>（从 06-07
              的 −17.75% 缓 +3.39pt、因 06-01 / 06-02 深印滚出滚动 7d
              窗）、NQ <span className="dn-tag bear">−4.73%</span>（前
              −4.49% —— 边际延伸）、SP500
              <span className="dn-tag bear">−2.75%</span>（前 −2.33%
              —— 略延伸）、JP225
              <span className="dn-tag bear">−4.97%</span>（前 −3.98%
              —— 延伸）、NVDA
              <span className="dn-tag bear">−4.18%</span>（前 −4.65%
              —— 缓）、META
              <span className="dn-tag bear">−7.03%</span>（前 −6.61%）、
              AAPL <span className="dn-tag bear">−0.99%</span>（前
              −1.38% —— 缓）、MSFT
              <span className="dn-tag bear">−9.51%</span>（前 −8.85%
              —— 延伸）、AMZN
              <span className="dn-tag bear">−9.03%</span>（前 −9.38%）、
              TSLA <span className="dn-tag bear">−9.21%</span>（前
              −9.60% —— 缓）。金属软：GOLD
              <span className="dn-tag bear">−4.29%</span>（前 −4.90%
              —— 缓）、SILVER
              <span className="dn-tag bear">−9.76%</span>（前 −9.99%）、
              PLAT <span className="dn-tag bear">−7.77%</span>（前
              −7.61%）、PALL
              <span className="dn-tag bear">−9.78%</span>（前 −10.23%
              —— 缓）、COPPER
              <span className="dn-tag bear">−2.37%</span>（前 −4.21%
              —— 缓）、URNM
              <span className="dn-tag bear">−10.37%</span>（前
              −10.74%）。能源仍正但更软：CL
              <span className="dn-tag bull">+3.12%</span>（前 +4.09%
              —— 冷）、BRENT
              <span className="dn-tag bull">+2.07%</span>（前 +2.62%
              —— 冷）。
              <span className="dn-em">
                BTC 对 TradFi 引擎的 7d 落后收窄到约 −9.63pt（BTC
                −14.36% vs NQ −4.73%）从 06-07 的 −13.26pt —— 但这次
                <em>是因为</em> BTC 缓回到一根边际延伸的 TradFi 窗
                （NQ 周比周 −0.24pt、SP500 −0.42pt、JP225 −0.99pt）、
                不是因为 BTC 单独继续延伸。轮动读法现在是 BTC 正常
                化-回到 TradFi 盘面、不是 BTC 单独延伸 —— 06-07 读法
                的反面。均值 |r| 在 0.236（硬 +0.003）下、盘面结构上
                仍 IDIOSYNCRATIC 用于交易处方、但有一根边际向 NORMAL
                靠回的硬化
              </span>。JGB 月度 2.52% 带 EXTREME RISK-OFF 月度标 ——
              不依赖。
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · runner / put-spread 尾仓 / 空头框架状态不变 · 200W 周期地板观察在 06-07 W-SUN 周收上<em>解决</em>（$63,298 对 $62,002、重夺方向）· mean-revert long scout leg-3 触发<em>上移</em>到 flip $63,848（前 $63,538 —— 上行 $310、谱系首次 flip 上移）；重算 R/R 1.94:1 在触发 $63,848 / 止损 $59,154 / 首目标 $72,965 仍过 1.5:1 闸；触发没正式印（快照分钟 1h close $63,298.50 比旧 $63,538 触发低 $240、比 reframed $63,848 低 $550）；仍 NON-ACTIONABLE · 本次快照无新交易</span>
            </h2>

            <p>
              <span className="dn-signal">
                06-07 框架观察都干净印出：7JUN +3.87M 前段块在 08:00Z
                06-07 干净结清（第二根连续干净前段块结算）、8JUN 替
                换块以 +6.40M 正向上架（第三根连续正向前段块）、
                06-07 W-SUN 周收 $63,298 清掉 full-history 200W
                $62,002 +$1,296 / +2.09%（下腿谱系上首根正式周收重夺
                周期地板）、spot-延伸尾<em>没</em>触发（24h 低
                $60,746 在谱系投降低 $59,154 上方 +$1,592 —— 后插针
                地板守住第二篇）、dealer 本子急修复（+$27.7M 到
                aggregate −11.0M、flip 谱系首次上行 $310）。但
                mean-revert long scout 的 leg-3 触发<em>上移</em>到新
                的 flip $63,848（前 $63,538）、快照分钟 1h close
                $63,298.50 在旧触发下方 $240、在 reframed 下方 $550
                —— 触发<em>没</em>正式印、scout 仍 NON-ACTIONABLE 第
                五篇
              </span>。05-31 那根 cover-bounce scout 在价格面上仍
              DROPPED —— 周期锚仍约 $9.7k 头顶（前 06-07 约 $12.0k；
              近 $2.3k 因 spot 朝它跑了 +$2,357）、仍需要三腿（锚
              重夺 AND dealer 本子修复 AND 回补形）。dealer 本子修复
              腿今天实质动（γ +$27.7M 到 −11.0M、本子下腿启动后最接
              近翻号 —— 离翻号只差约 $11M 新鲜正 γ）；回补形腿在 24h
              与 4h 窗都干净印（每流向字段净买、OI 急缩、下腿谱系上
              按幅度最干净的回补形日）；但锚重夺腿在约 $9.7k 头顶不
              动。runner 与 29MAY put-spread 尾仓状态不变、仍平。周
              期延续框架仍 CLOSED-VINDICATED、今天没新东西测（24h 内
              无单分钟 Δnet ≤ −3k 印；最接近的形是后 spike 短头加仓
              +960 BTC 跨 BJ 06:21 → BJ 08:05 06-08、一根 ~1h 44min
              窗的再装形、但不是单分钟敌对-2 签名；分开看、net 是
              +1,532 BTC 更少空对 BJ 00:11 max-short 谷、不是新增空
              头加仓）。06-03 那根 mean-revert long scout 仍保持三条
              升级腿中两条清掉、第三条 reframed 到新 flip：
              <span className="dn-signal">
                1h close &gt; flip $63,848 且 OI 仍在建是今天盘面上
                正确的结构性拐点；重算 R/R 在触发 $63,848 / 止损
                $59,154（06-06 投降低；今天 24h 低 $60,746 在上方
                +$1,592、所以谱系封顶低仍是止损参考）/ 首目标 $72,965
                （今天的 D-SMA100 周期锚）读 $4,694 风险 / $9,117 回
                报 = 1.94:1、比 06-07 的 2.15:1 略软、因触发上移比
                止损或目标都多（flip 跟我们 +$310、周期锚下 $13）；
                仍舒适在交易台 1.5:1 闸上方
              </span>。scout 仍 NON-ACTIONABLE 因 leg 3 没印 —— spot
              $63,290 坐在 reframed 触发下方 $558（对 06-07 的 $2,605
              下方 —— 一篇内近 $2,047）—— 但 R/R 读法略软、触发现在
              更近。200W 周期地板观察在 06-07 W-SUN 周收上重夺方向
              解决；沿用观察转到 06-14 W-SUN 收。交易本子今天在 live
              size 上不变（无）；交易台保持纪律 —— dealer 侧急修复、
              回补形在 24h 与 4h 干净印、引擎确认一根新鲜 1h 水上
              MACD 金叉、SM 本子开始对着反弹建一根新空头堆。
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">已平 · 主仓 · runner 阶梯完成 · 在 29MAY 08:00Z 到期结算上平（自 06-07 沿用状态不变）</span>
              <div className="dn-trade-name">
                Flip-延伸空 —— 在 29MAY 08:00Z 到期结算上平（自 06-07 不变）
              </div>
              <div className="dn-thesis">
                状态不变。回溯读继续为平仓辩护：05-30 / 05-31 日收
                （$73,857 / $73,653）标定双日后放大器反弹、然后 06-01
                破（$71,392）、06-02 dump（−6.53%）、06-03 延伸
                （−3.91%）、06-04 几乎平（−0.41%）、06-05 延伸
                （−4.43% 收对收在 $61,022）、06-06 稳（−$172 收对收
                在 $60,850）、06-07 在收盘上重夺 200W 周期地板
                $63,298（+$2,448 收对收、谱系最大上日）、今天未收
                06-08 close $63,169 对 06-07 基本平（新 UTC 日只进一
                分钟）。下腿两篇前停止延伸、在周收上重夺 200W。重入
                路径仍是一根全新结构性设置、不是滚续。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">在 05-29 08:00Z 平（放大器结算）· 无残余仓位 · 自 06-07 不变</span></div>
                <div><span className="dn-lvl-k">不要</span><span className="dn-lvl-v">不在两框 ⚡ TD9 BUY 簇（1d / 3d）、新鲜 1h 水上 MACD 金叉、+$27.7M 单篇 γ 修复、06-07 周收上 200W 周期地板重夺、三根连续正向前段块（6JUN 清掉、7JUN +3.87M、8JUN +6.40M 今天待）、教科书 24h 回补形的盘面上追入重入空头 —— 即使 SM 本子在 spike 后 +960 BTC 真新空头加仓（net 仍少空 +1,532 BTC 对 BJ 00:11 max-short 谷）、空侧在本腿上结构性已耗</span></div>
              </div>
              <div className="dn-gating">
                <b>交易已平。</b>审计周期纪律守住：不滚、不均、不晚
                层加 —— 即使 SM 本子开始对着反弹建一根新空头进快
                照、引擎帧回补形、dealer 本子 +$27.7M 修复、收盘上
                200W 重夺、第三根连续正向前段块都在二阶上反对加空。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">DROPPED · scout · 周期锚仍头顶约 $9.7k（前 06-07 约 $12.0k —— 近 $2.3k 因 spot 朝它跑）· dealer 本子修复腿实质动（+$27.7M 到 −11.0M、离翻号约 $11M）· 回补形腿在 24h 与 4h 都<em>干净</em>印（下腿谱系按幅度最干净）</span>
              <div className="dn-trade-name">
                回补反弹 scout —— 在锚重夺腿上 DROPPED 不变、但 3 腿中 2 腿今天决定性更近（dealer 本子修复腿 +$27.7M 到约 $11M 离翻号、回补形腿在 24h 与 4h 都干净、谱系上按幅度最干净）
              </div>
              <div className="dn-thesis">
                回补反弹路径有三条腿：(1) 锚重夺（1d close &gt;
                D-SMA100 $72,965）、(2) dealer 本子修复（aggregate
                GEX 翻回 &gt; 0）、(3) 回补形流向印（OI 缩 + 现货
                CVD 买 + SM short_btc 泄）。今天：腿 1 结构上不动但
                实质更近、在约 $9.7k 头顶（周期锚仍是承重缺席闸）、
                腿 2 <em>实质改善</em>（+$27.7M 到 −11.0M —— 下腿谱
                系上最大单篇修复、本子现在离翻号只差约 $11M 新鲜正
                γ）、腿 3 在 24h 与 4h 窗都<em>干净印</em>在 00:05Z
                锚（24h：现货 CVD +4,212、期货 CVD +1,851、大单净
                买 +425 跨 365 笔、taker-net +1,823、OI −2,954 BTC
                —— 每流向字段净买、OI 急缩；4h：现货 CVD +1,538、
                期货 CVD +277、大单 +217 跨 36 笔、taker-net +289、
                OI −1,867 BTC）。3 腿中 2 腿今天决定性动；腿 1 仍
                闸。scout 在价格面上仍 DROPPED —— 周期锚是结构性闸、
                即使在 +3.87% 上日仍头顶约 $9.7k。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">scout 状态</span><span className="dn-lvl-v">在价格面上 DROPPED（周期锚仍承重缺席腿在约 $9.7k 头顶；近 $2.3k 对 06-07）；腿 2 与 3 都决定性更近触发</span></div>
                <div><span className="dn-lvl-k">重入阈值（沿用）</span><span className="dn-lvl-v bull">1d close &gt; D-SMA100 $72,965 AND aggregate GEX 翻回 &gt; 0（当前 −11.0M、今天 +$27.7M 修复后离翻号约 $11M）AND 1h 回补形印（24h 与 4h 回补形今天都干净；快照分钟 1h 显示 long-rebuild 不是回补形、所以 1h 检查在 leg-3 触发 bar 上收紧）</span></div>
                <div><span className="dn-lvl-k">这里不进多</span><span className="dn-lvl-v bear">不要把两框并发 TD9 BUY 簇（1d / 3d）加新鲜 1h MACD 金叉买成一根回补反弹 —— 这是下面 mean-revert scout 的设置、不是回补反弹设置；回补反弹路径无论引擎帧回补形多干净都仍被锚重夺闸</span></div>
              </div>
              <div className="dn-gating">
                <b>交易在价格面上 DROPPED。</b>下面那根 mean-revert
                long scout 是另一根设置、键到超卖-下数耗尽；回补反
                弹路径被锚重夺闸。24h 与 4h 回补形窗干净印加 dealer
                本子距翻号约 $11M 是支持 mean-revert scout 的 leg-3
                flip-重夺触发<em>如果</em>触发印 —— 但它们本身<em>不
                </em>解锁回补反弹路径；锚仍是结构性闸。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">CLOSED-VINDICATED · 空头 scout · 框架观察 · 今天 24h 盘面无新鲜单分钟敌对-2 签名（最接近是后 spike 短头加仓 +960 BTC 跨 BJ 06:21 → BJ 08:05 06-08、~1h 44min 窗；net 仍少空 +1,532 BTC 对 BJ 00:11 max-short 谷）· 日历节奏正式退役</span>
              <div className="dn-trade-name">
                锚破空头 scout —— CLOSED-VINDICATED（自 06-06 / 06-07 沿用平仓状态；今天 24h 盘面给出更宽 ~1h 44min 再建形但无单分钟敌对-2 签名；日历节奏正式退役）
              </div>
              <div className="dn-thesis">
                自 06-07 状态不变。周期延续框架在 06-06 第六印失败
                的 BJ 15:41 fallback pin 上正式退役；今天没候选日历
                分钟可评估。框架继续作为无日历观察名单、等新鲜再建
                敌对-2 签名（Δshort &gt; 0 + Δlong &lt; 0 同一分钟
                带 |Δnet| ≥ 3k）；今天 24h 盘面没单分钟 Δnet 印清掉
                ≥ 3k 槽。最接近的形是 spike 后再建：SM short_btc
                从谷 54,462 @ BJ 06:21 06-08 重建到 55,422 进快照
                BJ 08:05 06-08（一根 +960 BTC 真新空头加仓）、同期
                long_btc 从谷 13,104 重建到 13,796（一根 +692 BTC
                真新多头加仓）、跨同一根 ~1h 44min 窗 —— 一根更宽
                窗的再建形、不是单分钟签名。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">今天无新鲜敌对-2</span><span className="dn-lvl-v">24h 内无单分钟 Δnet ≤ −3k 印；最接近形是后 spike 短头加仓 +960 BTC（同窗 +692 多头加仓）跨 BJ 06:21 → BJ 08:05 06-08、一根 ~1h 44min 窗形但不是单分钟签名。分开看、net 在快照是<em>少空</em> +1,532 BTC 对 BJ 00:11 max-short 谷、<em>不是</em>新增空头加仓</span></div>
                <div><span className="dn-lvl-k">五印链（已闭）</span><span className="dn-lvl-v">05-30 06:01Z Δnet −5,569 → 06-01 06:16Z −3,137 → 06-02 06:46Z −6,621 → 06-03 07:41Z −7,177（谱系极端）→ 06-04 07:41Z −5,591 → 06-05 第六印测试失败 · 框架闭</span></div>
                <div><span className="dn-lvl-k">处置</span><span className="dn-lvl-v">CLOSED-VINDICATED 沿用 · 交易台不会在周期延续节奏干净失败、dealer 侧决定性修复（今天 +$27.7M 到约 $11M 离翻号）、三根连续正向前段块结算 / 待、200W 在收盘上重夺、24h 回补形跨每流向字段干净印的盘面上追入重入空头</span></div>
                <div><span className="dn-lvl-k">框架下一步</span><span className="dn-lvl-v">未来再建敌对-2 签名（Δshort &gt; 0 + Δlong &lt; 0 同一分钟、|Δnet| ≥ 3k）印出时仍是有意义的盘面读、仅在无日历基础上；今天的后 spike 再建<em>不</em>清掉单分钟槽</span></div>
              </div>
              <div className="dn-gating">
                <b>状态：</b>CLOSED-VINDICATED 沿用。<b>硬规则：</b>
                不在周期延续节奏干净失败、dealer 侧决定性修复（今
                天 +$27.7M、约 $11M 离翻号）、200W 周收重夺、引擎印
                出新鲜 1h 水上 MACD 金叉、三根连续正向前段块、教科
                书 24h 跨每流向字段回补形的盘面上重入空头。SM 后
                spike 再建是信息性、不是单分钟基础上的交易触发。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">已平 · 宏观尾 · 在 29MAY 08:00Z 结算上平（自 06-07 沿用状态不变；周末 FRED 冻结第二天 —— 信用闸仍 4bp / 利率闸仍 6bp 距 Friday close 触发）</span>
              <div className="dn-trade-name">
                下行 put-spread —— 在 29MAY 08:00Z 结算上平；不滚（周末 FRED 冻结第二天 —— 周一 US 开盘前无新鲜宏观印）
              </div>
              <div className="dn-thesis">
                仓位状态不变。宏观面在第二天周末 FRED 冻结上结构性
                冻：每根 Tier-1 FRED 日度行沿用与 06-06 / 06-07 相同
                的 Friday-close 值、所以信用闸仍 4bp 距触发（HY OAS
                2.74%）、利率侧闸仍 6bp 距触发（10Y nominal 4.47%）
                —— 周一 US 开盘前无新鲜印可能、无周末分歧可量。
                Yahoo daily DXY 印出一根新鲜 tick 到 100.15（+0.08
                当日）、USD/JPY 到 160.30（+0.31 当日）、所以美元
                侧有一发新鲜数据；FRED 侧其他全部仍是冻结 Friday-
                close。reclaim-long 利率筛（10Y &lt; 4.55%）在 4.47%
                Friday close 仍真。今天无新对冲、因 (a) 周末没 FRED
                侧宏观印可驱动 re-grow 触发、(b) BTC 内部 dealer 侧
                决定性<em>修复</em>（今天 +$27.7M 到约 $11M 离翻
                号）、(c) 第三根连续前段块今天正向结算（8JUN
                +6.40M、约 8h ahead）、(d) 两框 TD9 BUY 簇 + 新鲜
                1h MACD 金叉 + 收盘上 200W 重夺都为多侧逆向观察辩
                护。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">在 05-29 08:00Z 平（Deribit 29MAY 结算）· 无残余仓位 · 不滚 · 自 06-07 不变</span></div>
                <div><span className="dn-lvl-k">re-grow 触发（下一根 Tier-1 印）</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% 收（当前 2.74%、距闸 4bp —— 沿用 Friday close、闸周末不能动、周一 US 开盘是下一根可观察印）OR 10Y &gt; 4.53% 收（当前 4.47%、距闸 6bp —— 沿用 Friday close）</span></div>
                <div><span className="dn-lvl-k">reclaim-long 利率筛</span><span className="dn-lvl-v bull">10Y &lt; 4.55% 收 —— 在 4.47% Friday close 验证真；筛守到周一 US 开盘</span></div>
              </div>
              <div className="dn-gating">
                <b>注意：</b>宏观面在第二天周末 FRED 冻结上冻；闸近
                度两侧都沿用 Friday close。周一 US 开盘下一根干净宏
                观渲染是下一根可观察印。今天不滚、因 BTC 内部结构性
                读（dealer 侧 +$27.7M 修复、第三根连续正向前段块、
                收盘上 200W 重夺、两框 TD9 BUY 簇、新鲜 1h MACD 金
                叉、mean-revert scout R/R 1.94:1 仍在闸上）为多侧逆
                向观察辩护。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout · 框架观察 · NON-ACTIONABLE · 3 升级腿中 2 腿清掉、第三<em>上移</em>到 flip $63,848（前 $63,538 —— 上行 $310 对我们）；重算 R/R = 1.94:1（比 06-07 的 2.15:1 略软、仍在 1.5:1 闸上）、触发没印；仍 NON-ACTIONABLE 等印 —— 但 spot 坐在 reframed 拐点下方 $558 对 06-07 的 $2,605 下方</span>
              <div className="dn-trade-name">
                Mean-revert long scout —— 框架观察；leg 1（多 TF ⚡ TD9 BUY）从三框<em>缩</em>到两框并发（1d / 3d）、12h 转成新鲜 Sell 3；leg 2（funding 累空付多 ≥ 4h）24h 均值缓回（回到 +0.87% 正、从 −0.13%）但 24h 仍守 542 / 1441 负 rows（37.6%）；leg 3 拐点<em>上移</em>到 flip $63,848 —— 重算 R/R 过闸在 1.94:1；印未到
              </div>
              <div className="dn-thesis">
                mean-revert long scout 的三条升级腿是：(1) 多 TF
                TD9 BUY 在一根周期帧确认 —— 今天<em>缩</em>到两框
                并发（1d / 3d）带 1M 仍 TD8 → 9? 待；12h 从确认 TD9
                BUY 转成新鲜 Sell 3 因反弹把 bar 拉过下数收阈值（比
                06-07 的三根少一根活跃周期帧；簇收窄但守在多周期帧
                上）；(2) funding 累空付多 regime ≥ 4h —— 24h 守
                542 / 1441 负 rows（37.6%、按连续连胜口径仍在 4h 闸
                上方、但 24h 均值翻回 +0.87% 正 ann 从 06-07 的
                −0.13%、所以 funding regime 读现在混合：闸条件按连
                续连胜仍清、但 regime 读不再单边空付多）；(3) 1h 在
                一根结构性拐点上重夺。06-07 备忘把 leg 3 框在 flip
                $63,538；今天 flip 上行 $310 到 $63,848（谱系上 flip
                首次上移）、所以 leg 3 <em>上移</em>、距 spot 跑得更
                远那个差额减去 spot 反弹 —— 净缺口从 $2,605 下方收
                到 $558 下方。在 reframed 拐点上重算 R/R：触发
                $63,848 / 止损 $59,154（06-06 投降低；今天 24h 低
                $60,746 在上方 +$1,592、所以谱系投降低仍是止损参考）
                / 首目标 $72,965（今天的 D-SMA100 周期锚）给风险
                $4,694 / 回报 $9,117 = 1.94:1、比 06-07 的 2.15:1
                略软、因触发上移比止损或目标都多（flip 跟我们 +$310
                而周期锚只下 $13 —— 净风险侧扩 $323、回报侧减 $13）；
                仍舒适在交易台 1.5:1 闸上方。scout 仍 NON-ACTIONABLE
                因 leg 3 没印 —— spot $63,290 坐在 reframed 拐点下
                方 $558（对 06-07 的 $2,605 下方 —— 一篇近 $2,047）
                —— 但 R/R 读法略软、触发现在显著更近。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">升级闸（3 中 2 清、第三 reframed 待）</span><span className="dn-lvl-v bull">leg 1 多 TF TD9 BUY —— CLEARED 在两根周期帧并发（1d / 3d）+ 1M 待；簇比 06-07 的三框堆窄（12h 转成新鲜 Sell 3）但仍多周期 · leg 2 funding 累空付多 ≥ 4h —— 按连续连胜口径闸仍清（37.6% 的 24h 负）但 24h 均值翻回 +0.87% 正 ann 从 06-07 的 −0.13%、所以 regime 读现在混合 · leg 3 1h close &gt; flip $63,848（从 $63,538 06-07 <em>上移</em> —— flip 上行 $310 对我们）—— UNCLEARED、spot $63,290 坐在 reframed 触发下方 $558（谱系最近）</span></div>
                <div><span className="dn-lvl-k">$63,848 flip（reframed 拐点、印前<em>不是</em>入场）</span><span className="dn-lvl-v bull">1h close &gt; $63,848 且 OI 仍在建（或缩）标定升级观察的结构性拐点；新 R/R 数学在触发 $63,848 / 止损 $59,154 / 首目标 $72,965 读 $4,694 风险 / $9,117 回报 = 1.94:1、比 06-07 的 2.15:1 略软且舒适在 1.5:1 闸上方。<em>印之前是观察 / 拐点线；入场只在确认 1h close 在 flip 上方</em></span></div>
                <div><span className="dn-lvl-k">止损（如入场）</span><span className="dn-lvl-v bear">1h close &lt; $59,154（06-06 投降低 —— 今天 24h 低 $60,746 在上方 +$1,592、所以谱系投降低仍是止损参考；一根新鲜投降印作废超卖-下数读）</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R only · 在周期锚重夺 $72,965 平半、runner 到 D-SMA50 簇 $75,598 / $76k 带</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R 框架（按 06-05 审计 DN-006 沿用）：</b>触发
                $63,848 / 止损 $59,154 = $4,694 风险；首目标
                $72,965 = $9,117 回报 = 1.94:1（在交易台 1.5:1 闸上
                方、比 06-07 的 2.15:1 略软）。<b>入场许可在确认 1h
                close 在 flip $63,848 上方</b> —— 仅当 OI 仍在建
                （或至少不在崩）AND 大单 / 现货 CVD 在触发 bar 上显
                示回补形印。24h 与 4h 回补形窗今天都干净印（每流向
                字段净买、OI 急缩）；快照分钟 1h 显示 long-rebuild
                不是回补形（OI +561 BTC）、所以触发-bar 检查在 leg-3
                印上收紧：触发 bar 想要要么一根新鲜回补形回归（OI
                缩在一根新鲜上 bar 上）要么一根干净 long-rebuild bar
                （OI 建带所有 CVD 正）—— 不要在快照分钟那一根小时
                印出的混合形。scout 仍 NON-ACTIONABLE 因 leg 3 没
                印；触发在 spot 上方 $558。<b>硬规则：</b>不在 leg-3
                flip 重夺之外做 TD9-only 入场；不在两框并发 TD9 簇
                + 新鲜 1h MACD 金叉上加、直到价格清掉 flip；不在没
                过 R/R 闸的情况下入场（今天的 reframed 数学过在
                1.94:1；如果拐点跑得更远、数学要重检）。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 200W 周期地板观察在 06-07 W-SUN 周收上<em>解决</em>（$63,298 对 $62,002、重夺方向、下腿谱系上首根正式周收在周期地板上方）· 沿用观察转到 06-14 W-SUN 收（未收新周一分钟在 $63,169）</span>
              <div className="dn-trade-name">
                200W 周期地板观察 —— 在 06-07 W-SUN 周收上重夺方向<em>解决</em>（$63,298 对 $62,002、+$1,296 / +2.09% 上方）；沿用观察转到刚开的未收新周 bar 上的 06-14 W-SUN 收
              </div>
              <div className="dn-thesis">
                runbook §2 200W-撑读把 full-history W-SMA200 标为周
                期地板 —— 一根周收在下方约 5.16% 的水位（8 / 155 valid
                200W 观察、在交易台的 full-history parquet 序列上、
                354 根周 bar 按 W-SUN / closed=&lsquo;right&rsquo;
                沿用政策 —— 与本地 weekly_200sma_monitor.py 的 W-SUN
                resample 基底一致）、簇在深周期投降。weekly_200sma
                .json 文件在服务器上仍缺（第四篇连续；该文件自交易
                台政策加观察以来未生成）；按 runbook 回落直接从
                full-history parquet（2019-09-08 → 2026-06-14、354
                根周 bar 含未收新周 bar）算 W-SMA200 在 $62,002 ——
                对 06-07 的 $62,008 下 $6、因滚动 200 周窗丢一周、加
                未收新周在 $63,169（一根可比水位、所以漂远在沿用政
                策约 $200/周带内）。本篇承重读是 W-SUN 2026-06-07
                bar 的正式周收：<em>$63,298.50</em>（= 06-07 日 UTC
                收、相同因 W-SUN 收周日 23:59:59 UTC）、坐在
                W-SMA200 <em>上方 +$1,296.50 / +2.09%</em> —— 下腿谱
                系上<em>首根</em>正式周收在周期地板上方。06-07 备忘
                明确把这根观察框作&ldquo;破或重夺&rdquo;在周末周收
                上；观察在<em>重夺</em>方向解决。沿用观察现在转到下
                一根周收（06-14 W-SUN）；未收新周 bar（开 06-08
                00:00Z）一分钟在 $63,169.10 = +$1,167 / +1.88% 上方
                水位。按 runbook do-not-fabricate、不做缺 JSON 的百
                分位 / 破事件主张、只浮出水位与已解决周收。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W 观察源</span><span className="dn-lvl-v">weekly_200sma.json 缺（第四篇连续；谱系沿用）· 按 runbook §2 回落：full-history parquet 计算自 2019-09-08、354 根周 bar、W-SMA200 = $62,002（对 06-07 的 $62,008 下 $6、滚动窗丢一周、加未收新周在 $63,169）</span></div>
                <div><span className="dn-lvl-k">06-07 W-SUN 周收（正式重夺）</span><span className="dn-lvl-v bull">$63,298.50 对 $62,002 = +$1,296.50 / +2.09% 上方 —— 下腿谱系上首根正式周收在周期地板上方；06-07 周末破或重夺观察在重夺方向解决</span></div>
                <div><span className="dn-lvl-k">spot 对 200W（本快照）</span><span className="dn-lvl-v bull">spot $63,290 − 200W $62,002 = +$1,288 / +2.08% 上方（符号从 06-07 的 −1.73% 翻、spot 在 24h 跑 +3.87%；周期地板在现货上重夺）</span></div>
                <div><span className="dn-lvl-k">06-08 未收新周 bar</span><span className="dn-lvl-v">W-SUN 锚到 2026-06-14、开 06-08 00:00Z；一分钟 close $63,169.10 = +$1,167 / +1.88% 上方水位；沿用观察是 06-14 W-SUN 周收</span></div>
                <div><span className="dn-lvl-k">runbook 纪律</span><span className="dn-lvl-v">按 runbook do-not-fabricate、不做缺 JSON 的百分位 / 破事件主张；只浮出 full-history 水位与已解决周收重夺。重跑该观察需要 weekly_200sma.json 在服务器侧生成或下一篇连续 full-history parquet 计算</span></div>
              </div>
              <div className="dn-gating">
                <b>观察在 06-07 周收上解决。</b>200W 周期地板的正式
                重夺是一根结构性宏观-撑事件、在多向上 —— 但按 runbook
                该观察是信息性、不是交易触发。上面那根 mean-revert
                long scout 是可执行卡、如果 leg 3（flip 重夺）触发；
                200W 观察是一根分开的宏观水位信号、现在把交易台对更
                广周期位置的读法从&ldquo;周收破待&rdquo;移到&ldquo;周
                收重夺印、下周观察进行中。&rdquo;如果 06-14 W-SUN
                周收印回到 $62,002 下方、下一篇要重评估重夺是一次性
                还是粘的；第二根连续周收在上方会加强完整中周期回撤
                读法。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 7JUN 结算干净解决 AND 8JUN 替换块正向（第三根连续正向前段块）· 200W 周期地板在 06-07 W-SUN 周收上<em>重夺</em>（$63,298 对 $62,002、+$1,296 / +2.09%）· spot <em>没</em>延伸 wick（24h 低 $60,746 在 06-06 谱系封顶低 $59,154 上方 +$1,592 —— 第二根连续后插针地板守住）· dealer 本子修复 +$27.7M 到约 $11M 离翻号 · mean-revert long scout leg-3 触发<em>上移</em>到 flip $63,848（前 $63,538 —— flip 上行 $310、谱系首次）；重算 R/R 1.94:1 仍在 1.5:1 闸上；触发没正式印（快照分钟 1h close 比 reframed 低 $550）· 宏观面在第二天周末 FRED 冻结上冻</span>
            </h2>

            <p>
              06-07 决策条件里：7JUN26 到期结算<em>干净触发</em>
              （+3.87M 块在 08:00Z 06-07 清掉）AND 新 8JUN 替换块
              <em>正向</em>上架在 +6.40M（下腿谱系第三根连续正向前
              段块）；mean-revert long scout 触发（$63,538）
              <em>没正式触发</em> —— 06-07 23:00Z 1h close $63,298.50
              在触发下方 $240；周期锚重夺腿<em>没触发</em>（仍约
              $9.7k 头顶但近 $2.3k）；200W 周末周收破或重夺观察在
              <em>重夺</em>方向解决（06-07 W-SUN close $63,298.50
              清掉周期地板 $62,002 +$1,296 / +2.09%）；dealer 本子修
              复<em>实质触发</em>（+$27.7M 到 −11.0M aggregate、下腿
              谱系最大单篇 γ 修复、约 $11M 离翻号；flip 谱系首次上
              行 $310）；spot-延伸尾<em>没触发</em>（24h 低 $60,746
              在 06-06 谱系封顶 $59,154 上方 +$1,592 —— 后插针地板
              守住第二篇）；周期延续观察仍 CLOSED-VINDICATED、今天
              无新鲜单分钟敌对-2 签名（最接近形是一根 ~1h 44min
              后 spike 再建）；宏观 re-grow 闸在第二天周末 FRED 冻
              结上冻（HY OAS 距 4bp 触发、10Y 距 6bp 触发、两侧都沿
              用 Friday close）；reclaim-long 利率筛在 4.47% Friday
              close 仍真。今天条件围绕一根干净衰减的第三根连续正
              向前段块、下腿谱系上首根正式 200W 周收重夺、一根 dealer
              本子约 $11M 离翻号、第二篇守住后插针地板、一根开始建
              一根新空头进快照的 SM 本子、和一根 leg 3 <em>上移</em>
              $310 到触发在 spot 上方 $558 的 mean-revert long
              scout 重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>8JUN26 到期结算（今天 08:00Z、约 8h ahead）</td><td className="bull">+6.40M 正向前段块在 08:00Z 结算；除 8JUN 后 aggregate ≈ −17.4M（在残余基础上略差、因正向块清掉、留下负向尾；但前段衰减形本身是下腿谱系第三根连续正向前段块结算）</td><td>盯结算印；如结算印干净则无需动作 —— 如出 vol 事件、重评估回补反弹 scout 的 dealer 本子修复腿</td></tr>
                <tr><td>Mean-revert long scout（leg 3 拐点<em>上移</em>；R/R 1.94:1）</td><td className="bull">1h close &gt; flip $63,848 且 OI 仍在建 / 不在崩 · 触发在 spot 上方 $558（谱系最近）· 重算 R/R 1.94:1 在触发 $63,848 / 止损 $59,154 / 首目标 $72,965 —— 过 1.5:1 闸、比 06-07 的 2.15:1 略软、因触发上移比止损或目标都多</td><td><em>scout long 0.2R 在确认 1h close 在 flip 上方</em>带入场-bar 回补形检查（大单净正 + 现货 CVD 买在触发 bar —— 24h 与 4h 窗今天都干净、1h 显示 long-rebuild 不是回补形、所以触发-bar 检查相应收紧）；周期锚 $72,965 平半、runner 到 D-SMA50 簇约 $76k</td></tr>
                <tr><td>回补反弹 scout（多）—— 价格面上 DROPPED；腿 2 + 3 决定性更近触发</td><td className="bull">需要 1d close &gt; $72,965 AND aggregate GEX 翻 &gt; 0 AND 1h 回补形印 —— 腿 2（dealer 本子修复）+$27.7M 到 −11.0M（仍净空；今天修复后约 $11M 离翻号）；腿 3（回补形流向）在 24h 与 4h 窗都<em>干净印</em>在 00:05Z 锚（下腿谱系按幅度最干净）；腿 1（锚重夺、结构性闸）不动在约 $9.7k 头顶但近 $2.3k</td><td>不入场 · 路径在腿 2 + 3 上今天决定性更近但仍被腿 1（锚重夺）闸；24h 与 4h 回补形窗干净印加 dealer 本子约 $11M 离翻号是支持 mean-revert scout 的 leg-3 触发<em>如果</em>触发印的有意义二阶信号</td></tr>
                <tr><td>200W 周期地板观察（在 06-07 W-SUN 周收上<em>解决</em>—— 重夺方向）</td><td className="bull">full-history W-SMA200 $62,002；06-07 W-SUN 周收 $63,298 = +$1,296 / +2.09% 上方（下腿谱系上首根正式周收在周期地板上方）；spot $63,290 坐 +2.08% 上方；未收新周 bar（W-SUN 2026-06-14）开在 $63,169 = +$1,167 / +1.88% 上方</td><td>盯下一根周收（06-14 W-SUN）· 信息性、不是交易触发；第二根连续周收在上方会加强完整中周期回撤读；印回 $62,002 下方会重开破观察</td></tr>
                <tr><td>周期延续节奏（CLOSED-VINDICATED 沿用；今天无新鲜敌对-2）</td><td className="stale">24h 内无单分钟 Δnet ≤ −3k 印；最接近形是后 spike 短头加仓 +960 BTC 跨 BJ 06:21 → BJ 08:05 06-08（~1h 44min 窗、非单分钟；net 仍少空 +1,532 BTC 对 BJ 00:11 max-short 谷）—— 节奏正式退役</td><td>把每根新鲜 Δnet ≤ −3k 或 Δnet ≥ +3k 印当信号本身 —— 无时间先验 · 再建敌对-2 签名印出时仍是有意义的盘面读、仅在无日历基础上</td></tr>
                <tr><td>HY OAS 宏观 re-grow 闸（第二天周末上冻）</td><td className="bull">2.74%（距闸 4bp、Friday close 沿用 —— 闸周末不能动、下一根可观察印在周一 US 开盘）</td><td>在距触发 4bp 的冻结周末、闸机械钉到周一 · 今天不滚</td></tr>
                <tr><td>reclaim-long 利率筛（第二天周末上冻）</td><td className="bull">10Y &lt; 4.55% 收 —— 在 4.47% Friday close 验证真；闸距 6bp 触发、周末钉</td><td>独立筛仍真；需要 mean-revert leg-3 触发翻译成 scout long</td></tr>
                <tr><td>DXY / MOVE risk-off 脉冲（DXY / JPY 一根新鲜 Yahoo tick；FRED 仍冻）</td><td className="bear">DXY 100.15（+0.08 当日 · 比 06-07 的 100.07 硬一根 Yahoo tick —— 偶发 z +2.18 在谱系极端附近）；USD/JPY 160.30（+0.31 当日 · 硬一档）；MOVE 75.2（沿用 —— Friday 印仍是固定周末基线）</td><td>宏观 risk-off 脉冲在美元侧边际硬、仍 RISK-OFF EPISODIC；如果 BTC leg-3 在周一 US 开盘前触发、入场-bar 回补形检查承担责任（无新鲜周末 FRED 侧宏观分歧可量）</td></tr>
                <tr><td>周期锚重夺观察（价格面四+ 阶下、约 $9.7k 头顶、$2.3k 近 06-07）</td><td className="bull">1d close &gt; D-SMA100 $72,965 —— 当前约 $9.7k 头顶（前 06-07 约 $12.0k、近 $2.3k 因 spot 朝它跑 +$2,357）</td><td>回补反弹 scout 三腿里最远的一根；一根 1d close 在锚上方会重武装回补反弹 scout、触发新鲜结构性重评</td></tr>
                <tr><td>BTC↔NQ 跨资产轮动（regime IDIOSYNCRATIC 边际向 NORMAL 硬化）</td><td className="stale">|r| 0.236（较 06-07 的 0.233 硬 +0.003）；BTC↔NQ +0.188（对 06-07 的 +0.188 完全不变 —— 硬化停在原地）；BTC −14.36% vs NQ −4.73% 缺口 −9.63pt（从 −13.26pt 收窄、BTC 把 06-01 / 06-02 深印滚出 7d 窗）</td><td>BTC 盘面现在正常化-回到 TradFi 盘面（BTC 缓、NQ 边际延伸）—— 轮动从 06-07 的 BTC-单独延伸 regime 翻到 BTC-正常化-回到 regime · 跨资产仍 IDIOSYNCRATIC 用于交易处方、有边际向 NORMAL 硬化</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是
              <span className="dn-signal">
                1h close 是否清掉 reframed leg-3 触发 flip $63,848 且
                回补形仍在印（升级 mean-revert long scout 到首根
                scout 入场在 1.94:1 R/R）、还是 SM 本子的新鲜后
                spike 短头加仓（+960 BTC 跨 BJ 06:21 → 08:05；net 仍
                少空 +1,532 BTC 对 BJ 00:11 max-short 谷）加散户谱系
                高多侧拥挤（67.99% 峰）加 26JUN −20.05M 月度承重远端
                块推动一腿回到谱系投降低 $59,154 下方<em>之前</em>触
                发先印。dealer 本子终于让前段放大器干净衰减第三根连
                续周期、flip 谱系首次跟我们上移、200W 周期地板在正
                式周收上重夺、回补形跨每流向字段在 24h 与 4h 干净
                印、引擎确认一根新鲜 1h 水上 MACD 金叉。但 SM 本子
                仍深堆空（切幅只 2.19%）、后 spike 再建开始对着反弹
                引擎建一根新空头、散户在谱系高偏度再拥挤多、leg-3
                触发坐在 spot 上方 $558 —— 近但不干净。问题现在是
                dealer 侧二阶修复与引擎帧回补形是否解决进一根 1h
                flip 重夺、把 mean-revert long scout 升级到首根 scout
                入场、还是仓位本子再建与深帧超卖读（1d RSI 26.4 谱
                系低、12h 30.7、3d 34.4）在触发先印之前买另一根
                lower 腿
              </span>。在那之前本篇按写好的跑：runner 与 put-spread
              尾仓平、回补反弹 scout 在价格面上 dropped 但腿 2 + 3
              今天决定性更近触发、空头框架观察 CLOSED-VINDICATED
              今天无新鲜敌对-2、mean-revert long scout 在 leg-3
              flip-重夺印前 NON-ACTIONABLE 但 R/R 现在读 1.94:1 且
              触发比 06-07 近 spot $2,047、200W 周期地板观察在 06-07
              W-SUN 周收上重夺方向解决。BTC-vs-TradFi 脱钩收窄到
              −9.63pt 因 BTC 缓且 TradFi 边际延伸；引擎 MTF 帧确认
              反弹；1h 印出新鲜水上 MACD 金叉；dealer 本子修复谱系
              上最大单篇结构性改善。下一个 24h 的对读是<em>耐心 ——
              等 $63,848 上方正式 1h close 带一根干净触发 bar 之前
              升级 scout；不要单凭引擎帧反弹追入</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2（已过 codex 敌对式审计 · v1 判 BLOCK-CRITICAL、v2 全部修正 · findings 记于 audits/2026-06-08-desk-note.md）
            </span>
            本 v2 页面是 2026-06-08 00:05Z 快照 v1 经 STAGE B codex
            敌对审计后的 STAGE C 调和（审计记录在
            <code>audits/2026-06-08-desk-note.md</code>）。v1 的 codex
            判决是 <b>BLOCK-CRITICAL —— 1 CRITICAL、2 MAJOR、1 MINOR</b>；
            v2 应用了全部 findings。已应用修正：<b>DN-001（CRITICAL）
            </b> —— v1 引述称这是&ldquo;首根正向前段放大器周期&rdquo;
            是文件其余地方的一根可见谱系矛盾（其余地方一致地说前段放
            大器在<em>第三</em>根连续周期缺席）；v2 把引述短语改成
            &ldquo;第三根连续正向前段块 / 前段放大器缺席周期。&rdquo;
            <b>DN-002（MAJOR）</b> —— v1 在七处把 +1,532 BTC 数字标错
            为新增空头加仓 / 后 spike 短头再建（数据来源元、结构散
            文、dealer do-not、空头框架标题 + lvls、决策表节奏行、收
            尾散文）；按 live tape、+1,532 BTC 是对 BJ 00:11 max-short
            net 谷的净变化（少空、不是新增空头加仓）、而真正的后
            spike 新增空头加仓从 BJ 06:21 short_btc 谷到 08:05 快照
            是 +960 BTC（配对同窗 +692 BTC 新增多头加仓）。v2 在 BJ
            06:21 → 08:05 窗保留 +960 / +692 框架、并在 +1,532 数字出
            现的每一处明确标记为&ldquo;少空对 BJ 00:11 max-short net
            谷。&rdquo;<b>DN-003（MAJOR）</b> —— v1 的 200W 历史下方
            频率披露称&ldquo;~5.8%（9 / 154 valid 200W 观察、W-MON /
            closed=&lsquo;right&rsquo;）&rdquo;在交易台的 parquet 序
            列上不可重现；可重现基底（与本地
            <code> weekly_200sma_monitor.py</code> 的 W-SUN resample
            一致）是 W-SUN / 354 根周 bar / 155 valid 200W 观察 / 8
            根在下方 = 5.16%。v2 把披露改写到可重现 W-SUN 基底。
            <b>DN-004（MINOR）</b> —— v1 决策表周期锚重夺观察行标读
            &ldquo;~$9.7k closer than 06-07&rdquo;（与行自己的算式
            矛盾、算式是 $2.3k 近）；v2 把标读改为&ldquo;~$9.7k 头
            顶、$2.3k 近 06-07。&rdquo;codex 审计也确认干净的部分：
            requireViewer 闸、JSX 骨架、24h 流向算式、4h / 1h 流向
            窗、GEX / MTF / 宏观 / 跨资产制品对账、MA 矩阵与 30D
            RV、claims-vs-loaded-data 纪律、BJ↔UTC 时间戳转换、build
            proxy（<code>tsc --noEmit</code> 退出 0；完整
            <code> next build</code> 在 Node 18.19.1 对 Next 16.2.6
            要 Node ≥20.9.0 的环境上被阻塞）。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具
            体情况个性化。数字反映单一原子快照（2026-06-08 00:05Z）、
            provenance 在数据来源条带中按节披露；宏观 Tier-1 面板渲染
            2026-06-07 22:15Z（比快照早约 1h 50m）、结构性冻在第二
            天周末 FRED 冻结上、加一根新鲜 Yahoo daily DXY / JPY tick。
            水位、规模与条件是交易台流程的示例、不是长期推荐。过去的
            相关性、γ 与仓位模式不绑定未来盘面。衍生品有全损风险、加
            杠杆下损失可超过保证金。<em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                前段放大器第三个周期让位。200W 在收盘上重夺。flip 谱
                系首次跟我们上移。leg-3 触发坐在上方 $558。SM 本子开
                始对着反弹再建一根新空头进快照。耐心。
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
            v2 · 2026-06-08 00:05Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
