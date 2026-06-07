import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享的链接预览只显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-06-07 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-06-07',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-06-07' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260607() {
  await requireViewer('/zh/desk/2026-06-07');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-06-07 · v2</span>
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
              <span className="dn-big">$60,933</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.64%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-06-07 00:05Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-06-07 00:05Z（snapshot pin row · BJ 08:05 06-07 按 live_db <code>t</code> BJ-local 约定）</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · pin row = <code>t == &ldquo;06-07 08:05&rdquo;</code>{' '}
                    （按 runbook §2 LIVE-TAPE landmine 取 BJ-local 列、对应
                    UTC 00:05Z）· daily-update.timer 00:00Z 与
                    reports-refresh.timer ~:01 都刚跑过、服务器制品 4–5
                    分钟新鲜 · 6JUN26 −8.40M 那个前段块在 08:00Z 06-06
                    （快照前约 16h）干净结清、7JUN26 0.3 DTE 这次是
                    +3.87M 正向 —— 前段放大器终于让位、没有新负向块顶上来
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-07 00:01Z 扫描（BJ 08:01、已归档到 snapshots/2026-06-07-0008/）</td>
                  <td className="dn-flag">
                    滚动 latest 文件 · 读前先按 runbook §1 归档到
                    snapshots/2026-06-07-0008/ · 较快照锚滞后 4 分钟 ·
                    含未收 K · 多 TF ⚡ TD9 BUY 现在 12h / 1d / 3d 三框
                    并发（06-06 是 15m / 8h / 12h / 1d 四框 —— 15m 翻
                    Sell 5、8h reset 到 Buy 1、3d 从 Buy 8 → 9? 转成
                    确认 TD9 BUY、1M 仍 TD8 → 9? 待一根收）—— 超卖计数
                    簇从快框轮到慢框、引擎也加入反弹形（15m 翻云上）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-07 00:01Z 快照（已归档）</td>
                  <td className="dn-flag">
                    归档到 snapshots/2026-06-07-0008/ · 较快照锚滞后 4
                    分钟（比 06-06 的 28 分钟更紧）· Deribit idx
                    $61,098 对 live $60,933（高 $165 —— 较 06-06 那道
                    $1,160 的 idx-vs-live 异常缝重新回到正常追踪带内）·
                    1,008 合约（06-06 是 1,044 —— 净 −36、6JUN 链在
                    08:00Z 06-06 清出、新的 9JUN/10JUN 近期链挂上但比
                    清掉的那块小）· 7JUN26 0.3 DTE +3.87M 是下一个结算
                    （08:00Z 06-07、约 8h 后）；7JUN 这块是正向、前段
                    结算窗这一次<em>没</em>带放大器 —— 对照 6JUN
                    −8.40M 与 5JUN −9.61M、那两次都带
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-07 00:01Z（已归档）
                  </td>
                  <td className="dn-flag">滞后约 4 分钟 · 7d 1h bar · 22 资产 · 166 rows · regime 仍标 IDIOSYNCRATIC（mean |r| 0.233、较 06-06 的 0.238 退了 0.005 —— 从向 0.25 NORMAL 收的趋势 <em>停转</em>了、反而又退离了一点）· BTC 顶配仍是 SILVER +0.261（前 +0.254）、BTC↔NQ 大幅收紧到 +0.188（前 +0.129 —— 一根 +0.059 的收紧、因为 7d 窗把 BTC 06-06 那根 −5.41% 插针和 NQ 同周的下台阶都吃了进去）</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-06 22:15Z 渲染（已归档）</td>
                  <td className="dn-flag">
                    渲染滞后约 1h 50m · 周末 FRED 冻结（06-07 是 UTC
                    星期日）—— 每一根 Tier-1 行都和 06-06 备忘的周五
                    收盘值一致：US 10Y nominal 4.47%（Δ 列 −2bp 从周五
                    带过来）、10Y TIPS 2.11%（平）、5Y5Y BE 2.24%（平）、
                    HY OAS 2.74%（−1bp 带过）、NFCI −0.494（陈旧 8d）、
                    MOVE 75.2（+4.04 带过 —— 谱系最大债 vol 跳现在是
                    固定的周末基线、不是新印）、DXY 100.07（+0.66 带过）、
                    Fed 净流动性 $5.834T（没有新周印）、US-JP 利差
                    1.95%、USD/CNY 6.7650 —— 整条宏观盘面到周一美开
                    之前结构性冻住
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-06-07 00:05Z（btcusdt_1m_2024..2026 子集按桌面政策 + 全史参考）</td>
                  <td className="dn-flag">
                    parquet 最末 bar 00:05Z 正好对齐快照锚（本篇没有
                    anchor-vs-parquet 漂移、对比 06-06 那道 28 分钟的
                    parquet 陈旧）· parquet 最末 bar 收 $60,845.70、live
                    现货 $60,933.28（一道 $87.58 的缝、1 分钟 parquet
                    锚正好落在 1 分钟 live tape 窗内）。MA 源样本仍是
                    2024-2026 子集（现在 128 根周 bar、+1 较 06-06 的
                    127）—— 按 06-02 audit DN-005 桌面政策延续；这个
                    子集下 W-SMA150 / W-SMA200 不可算（两个窗口都不
                    够长）、W-EMA150 / W-EMA200 能印但要按<em>seeded
                    truncated</em>报。全史（2019-2026、353 根周 bar、
                    包含未收的 2026-06-08 周 bar @ 1m 收 $60,845.70）
                    给 200W 参考另算：W-SMA200 = $62,008（06-06 是
                    $61,794 —— 抬 $214、滚动 200 周窗丢掉旧头一根、补
                    上未收新周 bar）。live 现货 $60,933 坐在全史 200W
                    下方 −1.73%（06-06 是 −3.48% —— 缝收窄 +1.75pt、
                    现货守住而 200W 抬）。偏移按 06-03 audit DN-006
                    继承的 live 现货 $60,933.28 重算
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W watch（weekly_200sma.json）</td>
                  <td className="dn-v-cell">未写出（审计时文件不在服务器、按 06-05 / 06-06 lineage 继承）</td>
                  <td className="dn-flag">
                    200W watch JSON 不可用（连续第三篇）；按 runbook §2
                    do-not-fabricate、退回到全史 parquet 计算。W-SMA200
                    = $62,008（353 根周 bar 从 2019-09-09 起）；live 现货
                    $60,933 坐 −$1,075 / −1.73% 下方<em>在 SPOT 印上</em>。
                    周期地板是周收口径、不是现货 —— 06-06 日收 $60,850
                    下方 −$1,158、06-07 未收日收 $60,846 下方 −$1,162。
                    本周新开的周 bar（W-MON 锚到 06-08）要回到 $62,008
                    或之上收盘、才能避免周度口径上首次跌穿全史 200W。
                    按 runbook do-not-fabricate、没有 JSON 就不主张
                    percentile / break-event、只露出 level + 未收日收
                    缝
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED 月度 · IRLTLT01JPM156N</td>
                  <td className="dn-flag">陈旧 66d · 月度 · 不作实时（陈旧计数较 06-06 不变）</td>
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
              <span className="dn-v bear">−3.16%（snap = 24h 谷、今日 24h 窗内最深、06-06 谱系更深谷 −3.92% mid-window 仍是谱系更深印）</span>
              <span className="dn-src">live · 24h 均值 ann <em>−0.13%</em>（06-06 是 −1.36% · 朝零回 +1.23pt）· 封顶占用 0 / 1441 采样行（连续第四篇空封顶 · 谱系封顶 regime 结构性退役）· 负向 funding 分钟 1,049 / 1,441 = <em>72.80%</em>（06-06 是 82.57% — 退 −9.77pt、但仍偏空付）· 24h funding 谷 −3.158% ann 在快照分钟 2026-06-07 00:05Z（BJ 08:05 06-07）—— 今日 24h 窗内最深单分钟负向印（06-06 谱系更深谷 −3.92% 印在 mid-window；那根仍是谱系更深印、今天的谷正好<em>是</em>快照、路径还在朝印上加深）· 24h 最大 +4.460% ann @ 2026-06-06 09:35Z（BJ 17:35 06-06）—— 今日 24h 正向最大、印在 7JUN 结算窗之前 basis 回弹</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">−1.27% → −3.16%（−1.89pt、snap 即 24h 谷）</span>
              <span className="dn-src">区间 −3.16% / +4.46% · 最长单根空付带 463 分钟 / 7.72h 从 2026-06-06 20:14Z（BJ 04:14 06-07）→ 2026-06-07 03:56Z（BJ 11:56 06-07）—— 较 06-06 的 10.55h、今天短 −2.83h（regime 退）但 ≥4h 累计空付门只这一根连续就过了约 1.9× · 杠杆门继续开</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">+0.53%（+533 BTC）</span>
              <span className="dn-src">live · 连续第二根 24h OI 扩张（06-06 是 +2.31% / +2,307；今日 +0.53% 小得多、抄底杠杆减速但没翻向）—— 101,298 → 101,830、24h 峰 103,149 @ 2026-06-06 10:09Z（BJ 18:09 06-06、进 EU 早段盘整）、24h 谷 101,027 @ 2026-06-06 12:00Z（BJ 20:00 06-06、峰后 ~2h）· SM long_btc Δ −1,706、short_btc Δ +813 —— 24h 本子<em>翻面</em>：从 06-06 的单边长建转回长削+空加、反签名</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bull">66.43 / 33.57</span>
              <span className="dn-src">live_db <code>mkt_long_pct</code> · 对 06-06 的 66.37 基本平（+0.06pt 噪声）· 24h 区间 64.53 / 67.22、峰 67.22 @ BJ 08:06 06-06（UTC 00:06 06-06、UTC 日界、06-06 插针前的 lead-in）、谷 64.53 @ BJ 18:12 06-06（UTC 10:12 06-06、插针后反弹途中 —— retail 在反弹<em>路上</em>流血最重、白天又重新挤回去）；仍在前次下腿底位 60.35%（05-31）上方 6pt、de-crowding 仍是二阶冷却</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−42.6k（净 SHORT、24h 本子从 06-06 的长建<em>翻回</em>空加+长削）</span>
              <span className="dn-src">live · long 13.62k − short 56.17k · short_btc 24h 峰 56,606 @ 2026-06-06 05:51Z（BJ 13:51 06-06 —— 仍在 06-03 谱系高 60,729 之下、也在 06-06 窗内峰 59,175 之下）；long_btc 24h 峰 15,841 @ 2026-06-06 05:51Z（BJ 13:51 06-06 —— 与空头峰<em>同一分钟</em>、两侧短暂同时放大）此后泄 −2,226 进入快照；SM net 谷 −43,475 @ 2026-06-06 06:01Z（BJ 14:01 06-06）—— 双侧峰后 10 分钟、对照 06-04 谱系谷 −46,686（今日谷较浅 +3,211、空侧没重测谱系极端）</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 06-06 备忘</span>
              <span className="dn-v bear">−39.4k → −42.6k（−3,130 更空；long −1,825、short +1,312）</span>
              <span className="dn-src">|Δ|/prior_net = 7.94%（3,130/39,426）· 本子转<em>更空</em>是经由长削+空加 —— 06-06 单边长建（−5,036 less-short、long +4,181 / short −855）的反签名。06-06 那根 long-bottom-fish（long_btc 17,254 峰 @ BJ 04:16 06-06）在接下来 20h 里被打回、long_btc 从峰泄 −3,639 到 snap。谱系签名又翻了一遍：06-01/02/03/04 单边空堆、05-31/06-05 双侧缩、06-06 单边抄底、今天空堆反弹。本子在找脚、没站队</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v bear">53.5% / 37.03%</span>
              <span className="dn-src">GEX IV 中位数 · 1,008 合约（06-06 是 1,044、净 −36、6JUN 链在 08:00Z 06-06 清出、新挂 9JUN/10JUN 比清掉的小）· IV 走稳 +1.0pt、链把 06-06 的 vol 标在周末上抓（06-06 是 52.5%）· 30D RV 基本平 37.03%（06-06 是 37.05%、−0.02pt —— 滚动 30D 窗已经把 06-02 / 06-05 / 06-06 的深印全戳完、再滚也加不出新 vol）· IV/RV 缝<em>张</em>到 ~+16.47pt（06-06 是 +15.45pt → +1.02pt 张开、IV 爬而 RV 停、链在把前段已清的周末上的远期实现重新报高一档</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bear">−4.10%（在下方、live 现货侧）</span>
              <span className="dn-src">flip $63,538（06-06 是 $63,778 · 落 −$240 —— 谱系下腿最小单篇 flip 下台阶、06-06 是 −$2,731）· 对 live 现货 $60,933（−4.10%；60,933.28 / 63,538 − 1 = −4.099%）· 对 GEX 文件 Deribit idx $61,098（−3.84%；61,098 / 63,538 − 1 = −3.840%、与文件 tile 的 −3.8% 一致）—— 两参考都负、live 现货缝从 06-06 的谱系极端 −6.48% 收窄到 −4.10%（+2.38pt、flip 守住而现货回搭）。Aggregate GEX 改善到 −38.7M（06-06 是 −53.5M、+$14.8M 结构性修复、6JUN −8.40M 干净结清且 7JUN 前段 +3.87M 正向 —— 谱系最干净一根前段衰减）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                6JUN 前段放大器干净结清、7JUN 那块挂正向
                （+3.87M）——dealer 本子终于拿到了 06-05 备忘
                预报、06-06 没拿到的那道干净前段衰减；现货没把插针
                延伸（24h −0.64% 对 06-06 的 −5.41%、24h 低
                $59,558 高于 06-06 谱系低 $59,154）、但 SM 本子
                在 24h 内翻回空堆、200W 周期地板在现货上只是收窄、
                没被重夺
              </span>。Aggregate GEX 从{' '}
              <span className="dn-tag bear">−53.5M</span> 走到{' '}
              <span className="dn-tag bear">−38.7M</span>
              （+$14.8M 结构性修复、谱系下腿单篇最大一根 γ 修复 ——
              但本子仍坚守净空 γ、没翻号）。0-γ flip 从{' '}
              <span className="dn-tag">$63,778 → $63,538（−$240）</span>{' '}
              （下腿最小单篇 flip 下台阶）、现货{' '}
              <span className="dn-tag bear">$60,933 在 flip 下 −4.10%</span>
              （live 现货算）、从 06-06 谱系极端 −6.48% 收窄 +2.38pt；GEX
              文件自带的 Deribit idx 参考报{' '}
              <span className="dn-tag bear">−3.84%</span>（对 $61,098、与
              文件 tile 的 −3.8% 一致）。06-06 那道预报是
              「6JUN 08:00Z 结算会解新前段放大器（除 6JUN 后残留 ~−45.1M）、
              但结算窗里 vol 事件仍是尾」 —— 实际结果是 6JUN −8.40M
              块的确在 08:00Z 06-06 干净结清（从 strip 走掉）、新挂的
              7JUN 前段那块在 0.3 DTE 落到{' '}
              <span className="dn-tag bull">+3.87M 正向</span>、12JUN
              守住 −8.91M（06-06 是 −8.82M、基本平）、19JUN 略松到
              −6.26M（06-06 是 −6.49M）、26JUN 月度守住 −24.94M
              （06-06 是 −25.23M）、$60k 砸盘 put 墙松到{' '}
              <span className="dn-tag bear">−26.19M（06-06 是 −27.31M、轻
              $1.12M —— 现货在 strike 附近守而不是穿过）</span>。日收
              {' '}<span className="dn-tag bear">06-05 $61,022 / 06-06
              $60,850</span>（06-06 日收较 06-06 备忘那道 parquet 最末
              $60,490 高 $359 —— 当天在 04:06Z 锚之后{' '}<em>回</em>到 UTC 收、
              −5.41% 插针没钉到收盘）、06-07 未收日收（parquet 最末
              00:05Z 收 <span className="dn-tag">$60,846</span>）{' '}
              对 06-06 <span className="dn-tag">基本平</span>（收对收
              −$4、后插针 state 连续第二根日收稳定）。200W 周期地板
              watch 从 06-06 演进：全史 W-SMA200 走到{' '}
              <span className="dn-tag">$62,008</span>（06-06 是
              $61,794 —— 抬 $214、滚动窗丢一根低端周、加上未收的 06-08
              周 bar 后插针收）；live 现货 $60,933 在下方 −1.73%（06-06
              是 −3.48% —— 缝收 +1.75pt）、但 06-06 日收 $60,850 仍在下
              −$1,158、06-07 未收日收 $60,846 在下 −$1,162。今天新开的
              周 bar 要在周末前回到 $62,008 或之上才能避免本周期内首次
              全史 200W 之下的周度口径收盘印。
            </p>

            <p>
              BTC 报 <span className="dn-tag">$60,933</span> live、{' '}
              <span className="dn-tag bear">−0.64%</span> 在 24h ——
              下腿谱系自 06-04 −0.41% 收盘以来 24h 现货变动最小的
              一根、也是 06-06 −5.41% 插针后第一根安静的 24h。24h 区间{' '}
              <span className="dn-tag">$61,500 / $59,558</span>（高 @
              BJ 08:17 06-06 / UTC 00:17 06-06、低 @ BJ 12:35 06-06 /
              UTC 04:35 06-06 —— 低印在 06-06 后亚 / EU 前段
              mid-window、之后 tape 稳步回搭进 06-07 锚）。24h 低{' '}
              <span className="dn-tag bear">$59,557.64</span>{' '}
              <span className="dn-em">在</span> 06-06 谱系低 $59,153.51
              <em>上方</em> +$404 —— 下腿低没被新测、后插针地板守住
              第一段。现货也<em>收窄</em>了对全史 200W 的缝：{' '}
              <span className="dn-signal">
                全史 W-SMA200 在 $62,008、live 现货 $60,933 在下方
                −1.73%（06-06 是 −3.48%）、06-06 日收 $60,850 在下
                −$1,158、未收的 06-07 日收 $60,846 在下 −$1,162 ——
                缝收窄、level 没被两根日收里任何一根重夺；周末周收
                决定本周期内首次全史 200W 之下的周度口径收盘印是否落
              </span>。周期锚本身在{' '}
              <span className="dn-tag bear">D-SMA100 $72,978
              （−16.51%）</span>头顶 —— 约 $12.0k 之外（06-06 是
              ~$13.4k、近了 $1.4k、滚动 100D 锚跟着下腿印在退）。最近
              一根 MA 在头顶现在是{' '}
              <span className="dn-tag bear">D-EMA20 $69,751（−12.64%）</span>
              、~$8.8k 之外 —— 滚动 20D EMA 把 06-04 / 06-05 / 06-06
              的深印吃得最快。W-SMA20 簇（$73,230 / D-SMA100 $72,978 /
              D-EMA50 $73,173）挤在 $250 的带里、但簇本身仍 ~$12.0k–$12.3k
              头顶。{' '}
              <span className="dn-em">
                结构背景在 dealer 侧<em>修</em>（γ +$14.8M、flip −$240、
                $60k 墙松 −$1.12M、7JUN 前段块正向）、在价格面<em>守</em>
                （24h 收平、谱系低没被测）、但在仓位侧<em>恶化</em>
                （SM net 多空头 −3,130、long_btc 削 −1,825、short_btc
                加 +1,312 —— 06-06 长建的反签名）。06-06 那道
                long-bottom-fish（long_btc 17,254 峰 @ BJ 04:16 06-06）
                从峰泄 −3,639 到 snap。本子<em>没在站队</em>—— dealer
                侧更好、仓位侧更坏、价格面在等。
              </span>
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面 · 24h 本子翻回空加+长削（06-06 单边长建的反签名）· OI 扩张减速到 +0.53%（06-06 是 +2.31%）· funding 均值朝零回到 −0.13%、但快照分钟正好是 24h 谷 −3.16%（今日 24h 窗内最深；06-06 谱系更深谷 −3.92% mid-window 仍是谱系更深印）· 周期延续节奏 CLOSED-VINDICATED（今日没新印可考虑）</span>
            </h2>

            <p>
              <span className="dn-signal">
                仓位本子把昨天那道单边长建吐了回去 —— long_btc 削、
                short_btc 加跨 24h、06-06 的反签名
              </span>。SM net 是{' '}
              <span className="dn-tag">−42,556</span>、对 06-06 备忘
              的 −39,426 —— 也就是{' '}
              <span className="dn-em">+7.94% 更空</span>{' '}
              （|−42,556 − (−39,426)| / 39,426 = 7.94%）。两侧分量
              单边在 06-06 的反方向上动：long_btc{' '}
              <span className="dn-tag bear">15.44k → 13.62k（−1.82k）</span>{' '}
              、short_btc{' '}
              <span className="dn-tag bear">54.86k → 56.17k（+1.31k）</span>
              。多侧切的幅度大约是空侧加的 1.4 倍、是一根干净的长削
              +空加形 —— 06-06 长建+空削（long +4.18k、short −0.86k）
              的反签名。24h 窗内（从 t == &ldquo;06-06 08:04&rdquo;
              BJ-local / UTC 00:04 06-06 起算）：long_btc Δ{' '}
              <span className="dn-tag bear">−1,706</span>、short_btc Δ
              {' '}<span className="dn-tag bear">+813</span>、net Δ{' '}
              <span className="dn-tag bear">−2,520</span>（−1,706 − 813
              = −2,519、含舍入）。24h 窗内本子跑了一根双峰然后长泄：
              short_btc 24h 峰{' '}
              <span className="dn-tag bear">56,606 @ 2026-06-06 05:51Z
              （BJ 13:51 06-06）</span> —— 仍在 06-03 谱系高 60,729 之
              下、也在 06-06 窗内峰（59,175 @ BJ 14:31 06-05）之下、
              空侧 24h 没重测谱系极端；long_btc 24h 峰{' '}
              <span className="dn-tag bear">15,841 @ 2026-06-06 05:51Z
              （BJ 13:51 06-06）</span> —— 与空头峰<em>同一分钟</em>、
              两侧短暂同时放大。SM net 谷{' '}
              <span className="dn-tag bear">−43,475 @ 2026-06-06 06:01Z
              （BJ 14:01 06-06）</span> —— 双侧峰后 10 分钟、对照 06-04
              谱系谷 −46,686（今日谷较浅 +3,211、空侧没重测谱系极端）。
              {' '}<span className="dn-em">
                谱系签名又翻了一遍：06-01/02/03/04 单边空堆、05-31/06-05
                双侧缩、06-06 单边长抄底、今天长削+空加反弹。本子
                <em>在找脚、没站队</em>。06-06 那根长抄底见峰早（BJ
                04:16 06-06、long_btc 17,254）、从峰到 snap 泄 −3,639
                BTC；插针途中加的长侧被打回、在接下来 20h 里被削回去。
              </span>
            </p>

            <p>
              <span className="dn-signal">
                周期延续框架在本日历上没有新的可测点 —— 框架在 06-06
                第六根失败上已经正式退役
              </span>。06-05 / 06-06 的 BJ 15:41 fallback pin 在 06-06
              失败（小回补 +315 Δnet、BJ 15:00–16:00 窗内 max |Δnet|
              333）；今天没有可考虑的日历分钟、日历先验已死。框架继续
              以「无日历」的方式监控新一根重堆敌对-2 签名（Δshort &gt;
              0 + Δlong &lt; 0 同一分钟、|Δnet| ≥ 3k）；但今日 24h
              tape 上没有任何单分钟 Δnet 印过 ≥ 3k 的门。{' '}
              <span className="dn-em">
                最近的一根接近形是 BJ 13:51 06-06 的双侧峰（long、short
                同分钟双升）、再 10 分钟后 BJ 14:01 06-06 SM net 谷
                −43,475 —— 一根 10 分钟窗的重堆形、但不是单分钟敌对-2
                签名。周期延续框架继续 CLOSED-VINDICATED。
              </span>
            </p>

            <p>
              杠杆侧是这一根快照里最响的二阶读数。{' '}
              <span className="dn-signal">
                funding 均值朝零回到 24h 的 −0.13%（06-06 是 −1.36%）
                —— 但快照分钟<em>正好是</em>24h 谷 −3.16% ann（今日
                24h 窗内最深单分钟负向印）
              </span>：live{' '}
              <span className="dn-tag">−3.16% ann</span> 在快照
              （06-06 快照分钟是 −0.32% —— 今天的快照分钟正好<em>是</em>24h
              窗的谷、路径还在朝印上加深）、24h 区间{' '}
              <span className="dn-tag">−3.16% / +4.46%</span>、谷{' '}
              <span className="dn-tag bull">−3.158% ann 在快照分钟
              2026-06-07 00:05Z（BJ 08:05 06-07）</span> —— 今日 24h 窗
              内最深单分钟负向印（对照 06-06 那根谷 −3.92%、印在
              mid-window 的 BJ 18:40 06-05 之后 reset —— 那根 06-06
              谱系印仍是谱系更深印、比今天 snap 更深）。24h 均值 ann{' '}
              <span className="dn-tag">−0.13%</span>（06-06 是 −1.36%
              —— 朝零回 +1.23pt、是下腿里均值首次回退一档）。24h 正向
              最大 +4.46% ann @ 2026-06-06 09:35Z（BJ 17:35 06-06）——
              今日 24h 正向最大、印在 7JUN 结算窗前 basis 短暂回弹。
              封顶占用{' '}
              <span className="dn-tag bull">0 / 1441 采样行（0.0%）</span>
              （连续第四篇空封顶；谱系封顶 regime 继续退役）；最长一根
              空付带{' '}
              <span className="dn-tag bull">463 min / 7.72h</span> 从
              2026-06-06 20:14Z（BJ 04:14 06-07）→ 2026-06-07 03:56Z
              （BJ 11:56 06-07）—— 较 06-06 的 10.55h 今天短 −2.83h、
              但 ≥4h 累计空付门只这一根连续就过了约 1.9×。分钟 Δ（正
              对负 funding 印）{' '}
              <span className="dn-tag">392 上 / 1,049 下</span>（跨
              1,441 行窗 —— 72.80% 负、从 06-06 的 82.57% 退）。OI Δ{' '}
              <span className="dn-tag bear">+533 BTC（+0.53%）</span>
              跨 24h —— 连续第二根 24h OI 扩张、但比 06-06 的 +2,307
              BTC 小得多。OI 在盘整里温和加：24h 峰{' '}
              <span className="dn-tag bear">103,149 @ 2026-06-06 10:09Z
              （BJ 18:09 06-06）</span> —— 06-06 谱系低 $59,154 @ BJ
              03:18 06-06 之后很久、本轮 OI 加在<em>后亚 / EU 前段</em>
              盘整时段集中、不是冲新插针。24h 低 OI{' '}
              <span className="dn-tag bull">101,027 @ 2026-06-06 12:00Z
              （BJ 20:00 06-06）</span>在峰后 ~2h 印、之后稳步回加进
              24h 收。Retail <span className="dn-tag">mkt_long_pct
              66.43%</span>从 66.90% —— 对 24h 前泄 −0.47pt、对 06-06
              备忘基本平（66.37% → 66.43%、+0.06pt 噪声）；仍在前次下腿
              底 60.35%（05-31）上方 6pt、de-crowding 仍是二阶冷却。Perp
              对现货{' '}
              <span className="dn-tag bear">−$36.08 折价</span>在快照
              （1h 均 −$34.10、4h 均 −$32.69；24h 均 −$32.89、区间
              −$197.70 / +$132.38 —— basis 在 06-06 后亚反弹途中以及
              06-07 锚 lead-in 里两次短暂正、又 snap 回负；24h 最大
              +$132.38 是下腿谱系里最深的正向 basis 印、差距很宽）。
              1 分钟 aggressor skew 快照{' '}
              <span className="dn-tag bull">+6.8</span>（1h 均 +0.57、
              区间 −44.50 / +29.30）—— 一档温和买攻倾斜、1h 上基本
              平。{' '}
              <span className="dn-em">
                funding 均值朝零回 + 封顶继续退役 + 负分钟份额退 −9.77pt
                + 最长带短 −2.83h + basis 在两个非交叠的窗内短暂转正 +
                OI 扩张减速到 +0.53%（06-06 是 +2.31%）：杠杆本子在
                二阶上<em>稳</em>；但快照分钟正好是 24h 谷、SM 本子
                又翻回空加 —— 不是稳定的标志。杠杆侧整体是<em>混调好转
                </em>、不是<em>站定好转</em>。
              </span>
            </p>

            <p>
              窗口流向是<em>一根干净的两段形：24h 仍在每一根字段上
              净卖、但 4h 和 1h 都在每一根字段上翻成净买 —— 引擎
              时框上一根<strong>合格的回补形 4h 印</strong>在 00:05Z
              锚（不是谱系第一根的主张；按滚动 tape 的前缀和扫描、
              更早的合格 4h 窗回到 05-31）</em>。24h：价格{' '}
              <span className="dn-tag bear">−0.64%</span>、OI{' '}
              <span className="dn-tag bear">+533 BTC</span>、现货 CVD{' '}
              <span className="dn-tag bear">Δ −1,533</span>{' '}
              （24h 窗内无 cb_cvd reset 检出、无需调整）、期货 CVD{' '}
              <span className="dn-tag bear">Δ −275</span>、大单{' '}
              <span className="dn-tag bear">−315 BTC / 261 笔</span>、
              taker-net <span className="dn-tag bear">−275</span> ——{' '}
              <em>现货 AND 期货 在 24h 上净卖、OI 在温和加；−0.64% 是
              印在长削+空加上 —— 06-06 长建+卖盘的反签名形、但仍在
              整窗上净卖</em>。4h（进快照）：价格{' '}
              <span className="dn-tag bull">+0.60%</span>、OI{' '}
              <span className="dn-tag bull">+65 BTC</span>、现货 CVD{' '}
              <span className="dn-tag bull">Δ +382</span>、期货 CVD{' '}
              <span className="dn-tag bull">Δ +306</span>、大单{' '}
              <span className="dn-tag bull">+397 BTC / 44 笔</span>、
              taker-net <span className="dn-tag bull">+306</span> ——{' '}
              <span className="dn-em">
                4h 窗在每一根字段上翻成净买：现货 CVD 买、期货 CVD 买、
                大单净买 +397 跨 44 笔、taker-net 买、OI 在温和扩。这
                是 00:05Z 锚上一根<em>合格的回补形 4h 印</em>、每一根
                窗口流向字段净买并 OI 仍在扩 —— 在这根锚上是
                结构性干净的回补形签名（不是下腿<em>谱系第一根</em>
                的主张：按滚动 tape 的前缀和扫描、更早的合格 4h 窗
                回到 05-31 —— 例如 BJ 09:17 05-31 / UTC 01:17 05-31
                那一根）
              </span>。1h：价格{' '}
              <span className="dn-tag bull">+0.41%</span>、OI{' '}
              <span className="dn-tag bull">+275 BTC</span>、现货 CVD{' '}
              <span className="dn-tag bear">Δ −125</span>、期货 CVD{' '}
              <span className="dn-tag bull">Δ +2</span>、大单{' '}
              <span className="dn-tag bull">+136 BTC / 11 笔</span>、
              taker-net <span className="dn-tag bull">+2</span> ——{' '}
              <em>1h 在大单和 OI 上继续 4h 形（大单净买 +136 跨 11 笔、
              OI 加 +275 BTC、taker-net 略正）、但现货 CVD 在快照分钟
              小时里滑 −125 —— 入锚一档温和退</em>。4h 那道回补形是
              这根快照里最清楚的二阶信号：现货 AND 期货在大单确认上
              同步买、OI 在温和扩 —— 是 06-06 那根 24h 整窗净卖形的
              反签名。1h 在现货 CVD 上的滑是 1h 窗里的一分钟、对一根
              干净 4h 而言 —— 但它的确说快照分钟的买盘没在完美地
              延伸。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 图 · ⚡ TD9 BUY 簇<em>轮</em>到慢框 —— 12h / 1d / 3d 三框并发（06-06 是 15m / 8h / 12h / 1d 四框；3d 从待印转成确认、15m / 8h 退）· 周期框 RSI 离谱系极端有所退、但三框仍单位数边缘（8h 16.3、12h 16.4、1d 15.5）· 周期锚仍丢（~$12.0k 头顶）· 200W 周期地板缝在现货上收窄到 −1.73%</span>
            </h2>

            <p>
              <span className="dn-signal">
                MTF 图<em>轮</em>了、没翻 —— ⚡ TD9 BUY 簇从四框
                （15m / 8h / 12h / 1d）轮到三框（12h / 1d / 3d）、
                3d 从待印的 Buy 8 → 9? 转成确认 TD9 BUY、15m / 8h
                因计数 reset 从 TD9 list 退
              </span>。06-07 00:01Z 扫描标 ⚡ TD9 BUY 在 12h / 1d / 3d
              同步（三根周期到多周期框）、1M 仍 TD8 → 9? 待一根收 ——
              一根四框超卖计数簇（含待印）、比 06-06 的五框堆少一根
              （那时是 15m + 8h + 12h + 1d 活 + 3d + 1M 待印）。15m
              翻 <span className="dn-tag bear">Sell 5</span>、引擎加入
              后插针反弹形；8h reset 到{' '}
              <span className="dn-tag bull">Buy 1</span>（前一根 TD9
              BUY 计数终止、新的 BUY 计数重起）。慢框仍偏空（叉/云）：{' '}
              <span className="dn-tag bear">3d 水上死叉 4 bar</span>
              （06-06 是 3b）、12h{' '}
              <span className="dn-tag bear">本扫无新 MACD 叉标</span>
              （06-06 是死叉 19b）、8h{' '}
              <span className="dn-tag bear">水下死叉 17b</span>{' '}（06-06
              是 14b —— 同向、再过 3 bar）、4h{' '}
              <span className="dn-tag bull">水下金叉 5b 刚印</span>
              （06-06 是死叉 29b —— 一根新的 4h 金叉、是这根快照里第二
              个二阶信号、和 4h 回补形并列）、1d{' '}
              <span className="dn-tag bear">云下 6b ↑ $73.9k</span>{' '}
              （较 06-06 未动）。RSI 在周期框上离谱系极端退一档、但仍
              深超卖：8h{' '}
              <span className="dn-tag bull">16.3</span>（06-06 是 14.3
              —— 离谱系极端 +2.0pt）、1d{' '}
              <span className="dn-tag bull">15.5</span>（06-06 是 14.6
              —— 离极端 +0.9pt）、12h{' '}
              <span className="dn-tag bull">16.4</span>（06-06 是 14.9
              —— +1.5pt）、4h <span className="dn-tag bull">29.9</span>{' '}
              （06-06 是 23.8 —— +6.1pt 离极端、本根快照里周期框最大
              的 RSI 抬）、3d{' '}
              <span className="dn-tag bull">29.6</span>（06-06 是 28.8
              —— +0.8pt、连续第二篇 30 下方）、1w 32.7（06-06 是 32.2）。
              每一根周期框 RSI &lt; 35、三根仍在 17 下 —— 但退向已经
              在整堆上一致。引擎加入反弹形：1h RSI 48.7（06-06 是 37.0
              —— +11.7pt 上抬、谱系引擎框最大一根 RSI 抬）、30m 53.7
              （06-06 是 35.3 —— +18.4pt、更大）、15m 56.8（06-06 是
              28.5 —— +28.3pt、引擎已重建到中位）。15m 翻在云上{' '}
              <span className="dn-tag bull">云上 4b</span>{' '}（06-06 还
              在云下）。{' '}
              <span className="dn-em">
                直读：⚡ TD9 BUY 簇轮到更慢、4h 金叉刚印、引擎框 RSI
                重建到中位 / 15m 翻回云上、周期框 RSI 离谱系极端退约
                1–6 点。本根快照在慢侧带四框超卖计数簇、在引擎侧带二阶
                反弹信号 —— 但周期锚仍 ~$12.0k 头顶、200W 周期地板仍
                坐在现货上方、没有第三道回补腿（1h 重夺新 $63,538 flip）
                的 TD9 锚定入场仍是追。06-03 那根 mean-revert 长 scout
                仍被第三腿门在重 framing 的 inflection 上夹住。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 叉</th><th>云（Ichimoku）</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">60,839</td><td className="num bull">56.8</td><td className="bull">金叉（水下）3b</td><td className="bull">云上 ↓60.7k 4b</td><td>Sell 5</td><td>BEAR hid · BULL hid</td></tr>
                <tr><td>30m</td><td className="num">60,852</td><td className="num bull">53.7</td><td className="bull">金叉（水下）2b</td><td className="neut">云中 60.8k–61.1k 1b</td><td>Sell 2</td><td>BEAR hid · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">60,852</td><td className="num">48.7</td><td className="bull">金叉（水下）27b</td><td className="bear">云下 ↑61.0k 139b</td><td>Sell 2</td><td>BEAR hid · BULL hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">60,852</td><td className="num bull">29.9</td><td className="bull">金叉（水下）5b 刚印</td><td className="bear">云下 ↑70.0k 73b</td><td>Sell 1</td><td>BULL reg</td></tr>
                <tr><td>8h</td><td className="num">60,839</td><td className="num bull">16.3</td><td className="bear">死叉（水下）17b</td><td className="bear">云下 ↑74.9k 66b</td><td>Buy 1</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">60,852</td><td className="num bull">16.4</td><td className="neut">—</td><td className="bear">云下 ↑77.1k 31b</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">60,852</td><td className="num bull">15.5</td><td className="neut">—</td><td className="bear">云下 ↑73.9k 6b</td><td>⚡ TD9 BUY</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>3d</td><td className="num">60,839</td><td className="num bull">29.6</td><td className="neut">死叉（水上）4b</td><td className="bear">云下 ↑74.2k 2b</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">60,852</td><td className="num">32.7</td><td className="bull">金叉（水下）7b</td><td className="bear">云下 ↑100.3k 18b</td><td>Buy 3</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">60,852</td><td className="num">41.6</td><td className="neut">—</td><td className="bull">云上 ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    源：mtf_div_latest.html 2026-06-07 00:01Z 扫描
                    （滚动 latest 文件、读前先按 runbook §1 归档到
                    snapshots/2026-06-07-0008/mtf_div_latest.html）。扫描
                    较 00:05Z 快照锚滞后 4 分钟。Header alerts：{' '}
                    <em>多 TF ⚡ TD9 BUY 跨 12h / 1d / 3d 同步</em>、{' '}
                    <em>1M TD8 → 9? 待一根收</em>、{' '}
                    <em>30m 水下金叉 2b 刚印</em>、{' '}
                    <em>4h 水下金叉 5b 刚印</em>。扫描现货 $60,852、
                    24h −0.51%、H/L $61,500 / $59,451、24h qVol
                    $10.58B（从 06-06 的 $28.56B 退 —— 投降式流走
                    了、今天按 qVol 是一根安静的盘整 tape）。Close
                    都是未收 K；每个数都视为暂定、直到该 TF 真收。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵确认周期锚之下的消化、簇仍在头顶约 $12k。现货
              $60,933 坐在{' '}
              <span className="dn-tag bear">D-SMA100 $72,978 下方 −16.51%</span>{' '}
              —— 周期锚、日梯里距离最小的一根、约 $12.0k 之外（06-06 是
              ~$13.4k、近 $1.4k —— 滚动 100D 锚跟着 06-04 / 06-05 / 06-06
              深印退）。最近头顶 MA 现在是 D-EMA20{' '}
              <span className="dn-tag bear">$69,751（−12.64%）</span>{' '}
              —— 滚动 20D EMA 把下腿印吃得最快（06-06 是 $70,655、近
              $904）。W-SMA20 / D-SMA100 / D-EMA50 簇挤在 $250 的带、
              但簇本身仍 ~$12.0k–$12.3k 头顶：W-SMA20{' '}
              <span className="dn-tag bear">$73,230（−16.79%）</span>、
              D-SMA100 <span className="dn-tag bear">$72,978
              （−16.51%）</span>、D-EMA50{' '}
              <span className="dn-tag bear">$73,173（−16.73%）</span>。
              其余按位级排序：D-SMA20{' '}
              <span className="dn-tag bear">$71,605（−14.90%）</span>、
              D-EMA100 <span className="dn-tag bear">$74,896（−18.64%）</span>
              、D-SMA150{' '}
              <span className="dn-tag bear">$74,887（−18.63%）</span>、
              D-SMA50 <span className="dn-tag bear">$75,761（−19.57%）</span>
              、W-EMA20{' '}
              <span className="dn-tag bear">$76,399（−20.24%）</span>、
              D-EMA150{' '}
              <span className="dn-tag bear">$77,369（−21.24%）</span>、
              D-SMA200{' '}
              <span className="dn-tag bear">$78,461（−22.34%）</span>、
              D-EMA200{' '}
              <span className="dn-tag bear">$79,889（−23.73%）</span>。在
              2024-2026 子集上更远且废：W-EMA100 seed $83,034（−26.62%）、
              W-EMA50 seed $84,123（−27.57%）、W-SMA100 $88,523
              （−31.17%）、W-SMA50 $92,644（−34.23%）；W-EMA200 seed 报
              $73,848（−17.49%）、W-EMA150 seed 报 $78,262（−22.14%）但
              两个都是 128 周子集上的 EMA 截断 seed、只列做完整性。{' '}
              <span className="dn-signal">
                200W watch JSON 仍在服务器上不在（连续第三篇）；按
                runbook §2 退回到全史 parquet 计算、全史 W-SMA200 落在
                $62,008（353 根周 bar 从 2019-09-09、含未收的 2026-06-08
                周 bar @ 1m 收 $60,845.70）。live 现货 $60,933 在周期
                地板下方 −1.73%<em>在 SPOT 印上</em>
              </span>。06-06 日收 $60,850 在下方 −$1,158、未收的 06-07
              日收 $60,846（parquet 最末 bar 00:05Z）在下方 −$1,162。周期
              地板是周收口径、不是现货 —— 今天新开的周 bar 要在周末前
              回到 $62,008 或之上才能避免周度口径首次跌穿全史 200W 的
              印。在全史 parquet 序列上（W-MON、closed=&lsquo;right&rsquo;、
              154 个有效 200W 观测、其中 9 根周收落在 200W 下方）、周收
              落在 200W 下方在历史上发生在约 ~5.8% 的周（9 / 154）、群集
              在深周期投降；按 runbook do-not-fabricate、没有 JSON 就不
              主张 percentile / break-event、只露出 level + 未收日收
              缝。W-SMA200 从 06-06 的 $61,794 抬 $214、是因为滚动 200
              周窗丢一根低端周并补上未收的 06-08 周 bar；谱系 W-SMA200
              滚动方向（按 200W-watch 政策）每周约 ~$200/周、今日 +$214
              在带内。{' '}
              <span className="dn-em">
                MA 锚到 parquet 最末 bar 2026-06-07 00:05Z（close
                $60,845.70）；偏移按 live 现货 $60,933.28 直接算（按
                06-03 audit DN-006 处置：live pin 分母继续滚；parquet
                邻近 close $60,845.70 比 live pin 低 $87.58、本篇
                parquet-vs-live 缝很紧 —— parquet 最末 bar 与快照锚
                分钟<em>正好对齐</em>、没有 anchor-vs-parquet 漂移）。
                日收：05-31 $73,653、06-01 $71,392、06-02 $66,730、
                06-03 $64,118、06-04 $63,853、06-05 $61,022、06-06
                $60,850（较 06-06 备忘 parquet 最末读 $60,490 收
                +$359 高 —— 当天在 UTC 收时<em>回</em>了）、06-07 未
                收 $60,846 —— 连续七根日收在周期锚下方、06-06 收对
                05-05 稳定（−$172、下腿谱系第二小一根收对收、仅次于
                06-04 的 −$265）。
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer 图 <span className="dn-roman">III · 本子改善到净空 γ aggregate −38.7M（06-06 是 −53.5M、+$14.8M 结构性修复 —— 下腿谱系单篇最大一根 γ 修复；仍坚守净空 γ、没翻号）· flip 只落 −$240 到 $63,538（06-06 是 −$2,731 —— 下腿单篇最小 flip 下台阶）· 7JUN26 0.3 DTE +3.87M 正向（06-06 是 6JUN −8.40M；下腿谱系首根正向前段块）· $60k 砸盘 put 墙松到 −26.19M（06-06 是 −27.31M、−$1.12M、现货在 strike 附近守而不是穿过）· 12JUN / 19JUN / 26JUN 远段块都守或微松</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子拿到了 06-05 备忘预报、06-06 没拿到的那道
                干净前段衰减：6JUN −8.40M 块在 08:00Z 06-06 干净结清、
                7JUN 0.3 DTE 块挂正向 +3.87M（下腿谱系首根正向前段块）、
                aggregate γ 改善 +$14.8M —— 但本子仍坚守净空 γ、flip
                守在 06-06 的 $240 之内
              </span>。Aggregate GEX 是{' '}
              <span className="dn-tag bear">−38.7M / 1%</span>（06-06 是
              −53.5M —— +$14.8M 结构性修复、下腿谱系单篇最大一根 γ
              修复、但本子仍守净空 γ、没翻号）。0-γ flip 从{' '}
              <span className="dn-tag">$63,778 → $63,538（−$240）</span>{' '}
              —— 下腿单篇最小一根 flip 下台阶（06-06 是 −$2,731）。两个
              dist-to-flip 参考（按 06-02 audit DN-007 继承）：live
              现货参考{' '}
              <span className="dn-tag bear">−4.10%</span>{' '}（60,933.28 /
              63,538 − 1 = −4.099%）；GEX 文件 Deribit idx 参考{' '}
              <span className="dn-tag bear">−3.84%</span>（61,098 /
              63,538 − 1 = −3.840%、与文件 tile 的 −3.8% 一致）。本篇
              live 现货参考比 Deribit idx 参考宽 −0.26pt、因为 Deribit
              idx 只高 $165 —— 从 06-06 那道 $1,160 的 idx-vs-live
              异常缝回到正常追踪带内。两参考都负；live 现货参考从 06-06
              谱系极端 −6.48% 收窄到 −4.10%（+2.38pt、flip 守住而现货
              回搭）。
            </p>

            <p>
              墙图在现货守住附近的下方 strike 上松、并在现货正上方挂出
              一根新的小正向印：{' '}
              <span className="dn-tag bear">$60k −26.19M</span>（06-06 是
              −27.31M、−$1.12M 轻 —— 现货在 $60k strike <em>附近</em>守
              而不是<em>穿过</em>、所以墙松一档；现货 $60,933 现在在
              strike 上方 $933、墙翻回成现货下方的支撑磁石、两篇里第
              一次）、{' '}
              <span className="dn-tag bear">$55k −10.69M</span>（06-06 是
              −10.74M、基本平）、{' '}
              <span className="dn-tag bull">$80k +8.97M</span>（头顶最重
              的正向、较 06-06 的 +8.50M 厚 +$0.47M、温和加厚上行减
              振杆）、{' '}
              <span className="dn-tag bear">$50k −6.80M</span>（06-06 是
              −6.91M、基本平）、{' '}
              <span className="dn-tag bear">$58k −6.47M</span>（06-06 是
              −6.89M、温和松）、{' '}
              <span className="dn-tag bear">$62k −5.84M</span>（06-06 是
              −7.21M、松 —— strike 在现货两篇下方有时间泄）、{' '}
              <span className="dn-tag bull">$61.5k +3.87M</span>（新挂、
              现货正上方的小正向墙、自下腿破位以来 $58k–$64k 带里第
              一根正向墙）、{' '}
              <span className="dn-tag bear">$65k −3.84M</span>（06-06 是
              −3.88M、基本平）、{' '}
              <span className="dn-tag bear">$64k −3.42M</span>（06-06 是
              −3.41M、基本平）、{' '}
              <span className="dn-tag bull">$82k +3.30M</span>。$50k–$65k
              负向簇现在（top-10 名单上）堆出约{' '}
              <span className="dn-em">−63.25M 的 dealer 放大</span>{' '}
              （带内列出墙之和：−6.80 − 10.69 − 6.47 − 26.19 − 5.84
              − 3.42 − 3.84 = −63.25M；06-06 top-10 名单里出现的 $59k
              与 $61k 墙今天不在 top-10 strip 上、从这根簇求和里掉出去；
              对照 06-06 可比列出簇 −74.81M —— 走廊在 top-10 口径上松
              ~$11.6M 轻、dealer 侧下方压力实质放松）。本篇承重的一根
              读数是{' '}
              <span className="dn-signal">
                7JUN 0.3 DTE +3.87M 正向前段块 —— 下腿谱系首根正向前段
                块、替换 6JUN −8.40M 与 5JUN −9.61M 前段放大器形、是一
                根小而干净的正向印。dealer 本子终于让前段放大器干净
                衰减。叠加 $60k 墙松 −$1.12M 与新挂的 +$3.87M $61.5k
                墙、现货上下两根 strike 已经从单边放大形朝更双边的减
                振形挪 —— 即便 26JUN −24.94M 月度仍是远段承重负向块
              </span>。远段到期：8JUN 1.3 −2.29M（小负、明天的结算）、
              9JUN 2.3 +0.35M、10JUN 3.3 +0.42M、12JUN 5.3 −8.91M（06-06
              是 −8.82M、基本平）、19JUN 12.3 −6.26M（06-06 是 −6.49M、
              松）、26JUN 19.3 −24.94M（06-06 是 −25.23M、基本平 —— 远段
              承重负向）、31JUL 54.3 +1.61M（06-06 是 +1.06M、稳）、
              28AUG 82.3 +0.92M、25SEP 110.3 −0.69M（06-06 是 −1.27M、
              改善）、25DEC 201.3 +1.64M、26MAR27 292.3 +0.17M。7JUN
              +3.87M 前段块在 08:00Z 06-07 结算（本快照 ~8h 后）；因为
              是正向、本次结算窗<em>不</em>带放大器 —— 对照 6JUN
              −8.40M 与 5JUN −9.61M、那两次都带。结算后除 7JUN
              aggregate 约{' '}
              <span className="dn-tag">−38.7M − (+3.87M) = −42.6M</span>{' '}
              （在前向残值口径上稍差、因为清掉的是正向块、留下负向尾）、
              但前段衰减形本身相对 06-06 那道滚动负向前段替换是结构性
              改善。
            </p>

            <p>
              IV 中位数跨 1,008 合约是{' '}
              <span className="dn-tag bear">53.5%</span>（较 06-06 的
              52.5% / 1,044 合约走稳 +1.0pt —— 一档温和的周末 vol 标、
              链在更安静的现货 tape 上抓住 06-06 那道读数；少 36 合约
              是因为 6JUN 链在 08:00Z 06-06 清出、净抵 9JUN / 10JUN
              近期链挂上）对 30D close-to-close RV{' '}
              <span className="dn-tag bear">37.03%</span>（06-06 是
              37.05% —— 基本平 −0.02pt、滚动 30D 窗现在已经把
              06-02 / 06-05 / 06-06 的深印全戳完、再滚也加不出新 vol）。
              链 richness{' '}
              <span className="dn-tag bear">~+16.47pt</span>（06-06 是
              ~+15.45pt —— 张 +1.02pt、IV 爬而 RV 停；链在平 spot 周末
              上把远期实现报高一档、可能为周一美开的 vol 事件 pricing）。
              一根跨 N 合约的链中位数、<span className="dn-em">不是</span>
              一根可交易 spread；到期级 / strike 级 vega、skew、term
              structure 仍未载入；vol 读法只作 framework。RV 方法：30D
              close-to-close、logret.std × √365 × 100、最后 30 根日
              log 收益率（= 31 根连续日收）锚到 parquet 最末 bar
              2026-06-07 00:05Z；底层 31-close 窗现在覆盖 $60,845.70 –
              $82,177.70。作参考、最近 29 收益 / 30 收读 37.28%；37.03%
              页面值来自 30 收益。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · 周末 FRED 冻结 —— 每一根 Tier-1 / Tier-2 行都和 06-06 备忘的周五收一致（10Y 4.47% / TIPS 2.11% / HY OAS 2.74% / NFCI −0.494 / MOVE 75.2 / DXY 100.07 / Fed liq $5.834T / USD-JPY 160.29 / US-JP 1.95% / USD-CNY 6.7650）· 周一美开前不可能有新宏观印 ·「今日变了什么」episodic 列（DXY +2.33、Fed liq −2.29、Median CPI +1.82、10Y BE −1.74）和 06-06 一致 · 宏观对 BTC 下腿的贡献结构性冻在一根周五收基线上 · BTC-vs-TradFi 7d 缝<em>张</em>到 −13.26pt（06-06 是 −11.82pt）—— 因为 BTC 在滚动 7d 窗里延伸更深</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观盘面在周末 FRED 冻结上结构性冻住：2026-06-06
                22:15Z 渲染（周五傍晚 UTC、自此周末 FRED 冻结开始）
                带的是和 06-06 备忘一致的周五收入、同样的 Δ 列、
                同样的 episodic-z 列
              </span>。Dashboard 渲染是 2026-06-06 22:15Z、较快照
              ~1h 50m。每一根 Tier-1 行都和 06-06 面板读得一致、因为
              周一美开前 FRED 日频不可能有新印：US 10Y nominal{' '}
              <span className="dn-tag bull">4.47%（−2.0bp Δ 列从周五带过）</span>
              、regime z{' '}
              <span className="dn-tag bear">+1.56</span>、episodic z{' '}
              <span className="dn-tag">+0.14</span> —— RISK-OFF tag、门
              在周五收上仍距触发 6bp。10Y TIPS real{' '}
              <span className="dn-tag bear">2.11%（平）</span>、regime z{' '}
              <span className="dn-tag bear">+1.75</span>、episodic z{' '}
              <span className="dn-tag">+0.95</span> —— RISK-OFF 带过。
              5Y5Y BE 通胀{' '}
              <span className="dn-tag">2.24%（平）</span> —— 带过。HY
              OAS <span className="dn-tag bull">2.74%（−1.0bp Δ 列带过）</span>
              、regime z{' '}
              <span className="dn-tag bull">−1.14</span>、episodic z{' '}
              <span className="dn-tag bull">−0.80</span> —— RISK-ON tag
              仍在、门在周五收上仍距触发 4bp（06-05 那道扩没延伸进周五、
              周末也不会延伸）。NFCI{' '}
              <span className="dn-tag">−0.494（+0.01）</span> —— 带过、
              陈旧 8d。Fed 净流动性{' '}
              <span className="dn-tag bear">$5.834T（−0.038T）</span> —— 带过。
              MOVE 债 vol{' '}
              <span className="dn-tag bear">75.2（+4.04）</span> ——
              06-06 谱系最大一根日 debt vol 跳现在是固定周末基线、不
              是新印。DXY <span className="dn-tag bear">100.07（+0.66 带过
              Δ；对 06-06 备忘 100.07 一样）</span>、regime z{' '}
              <span className="dn-tag bear">+1.78</span>、episodic z{' '}
              <span className="dn-tag bear">+2.33</span> —— RISK-OFF
              EPISODIC 在带过的谱系极端；USD/JPY{' '}
              <span className="dn-tag bear">160.29（+0.30 带过 Δ；对 06-06
              备忘一样）</span>；US-JP 10Y 利差{' '}
              <span className="dn-tag bull">1.95%（−2.0bp 带过）</span>；
              USD/CNY{' '}
              <span className="dn-tag bull">6.7650（带过）</span>。JGB
              10Y 陈旧 66d 在 2.52%（陈旧计数较 06-06 不变）。{' '}
              <span className="dn-em">
                净：宏观贡献是一根冻住的周五收基线、「今日变了什么」
                episodic 列（DXY +2.33、Fed liq −2.29、Median CPI
                +1.82、10Y BE −1.74）和 06-06 一致 —— 因为 FRED 行在
                周末不更新。信用门在带过的周五收上仍距触发 4bp（周一前
                不可能有新扩）；rates 门仍距触发 6bp。重夺多 rates
                filter（10Y &lt; 4.55%）在带过的周五收 4.47% 上验为
                TRUE。BTC-vs-TradFi 解耦<em>张</em>到 −13.26pt（BTC
                −17.75% 对 NQ −4.49%）、从 06-06 的 −11.82pt 张 ——
                但这次<em>是因为</em>BTC 在 7d 窗里延伸更深（06-06 那
                −5.41% 插针滚进来）而 NQ 部分回（NQ 从 −5.35% 走到
                −4.49%、+0.86pt 的 TradFi 回暖）。轮动现在是 BTC-单独-
                延伸-进-平 TradFi regime、不是 06-06 那道双卖形
              </span>。
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>宏观指标</th>
                  <th>值</th>
                  <th>Δ</th>
                  <th>regime z</th>
                  <th>episodic z</th>
                  <th>读法</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>US 10Y nominal</td><td className="num">4.47%</td><td className="num bull">−2.0bp（带过）</td><td className="num bear">+1.56</td><td className="num">+0.14</td><td className="bear">紧 · 周五收带过 · 门距触发 6bp</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.11%</td><td className="num">0.0bp</td><td className="num bear">+1.75</td><td className="num">+0.95</td><td className="bear">紧 · 仍 RISK-OFF · 带过</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.24%</td><td className="num">0.0bp</td><td className="num">+0.09</td><td className="num bull">−0.88</td><td className="neut">无 tag · 带过</td></tr>
                <tr><td>HY OAS</td><td className="num bull">2.74%</td><td className="num bull">−1.0bp（带过）</td><td className="num bull">−1.14</td><td className="num bull">−0.80</td><td className="bull">松 · risk-on · 门在带过周五收上距触发 4bp</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.494</td><td className="num">+0.01</td><td className="num">+0.72</td><td className="num">−0.01</td><td className="neut">紧 · 陈旧 8d · 带过</td></tr>
                <tr><td>MOVE 债 vol</td><td className="num bear">75.2</td><td className="num bear">+4.04（带过）</td><td className="num">−0.10</td><td className="num">+0.30</td><td className="bear">z 上中性 · 06-06 谱系跳现在是固定周末基线</td></tr>
                <tr><td>DXY</td><td className="num bear">100.07</td><td className="num bear">+0.66 带过 Δ · 0 对 06-06 备忘</td><td className="num bear">+1.78</td><td className="num bear">+2.33</td><td className="bear">RISK-OFF EPISODIC · episodic z 带过、在谱系极端 · 100.00 重夺</td></tr>
                <tr><td>Fed 净流动性</td><td className="num bear">$5.834T</td><td className="num bear">−0.038T</td><td className="num">−0.12</td><td className="num bear">−2.29</td><td className="bear">带过 · 周一前不可能有新周印</td></tr>
                <tr><td>USD/JPY</td><td className="num bear">160.29</td><td className="num bear">+0.30 带过 Δ · 0 对 06-06 备忘</td><td className="num bear">+1.36</td><td className="num bear">+1.43</td><td className="bear">日元弱 · episodic z 带过、在 +1.0 上方</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num bull">1.95%</td><td className="num bull">−2.0bp（带过）</td><td className="num bull">−0.85</td><td className="num">+0.14</td><td className="bull">收紧 · 带过</td></tr>
                <tr><td>USD/CNY</td><td className="num bull">6.7650</td><td className="num bull">−0.01（带过）</td><td className="num bull">−1.84</td><td className="num bull">−1.46</td><td className="bull">无 tag · 松 · 带过</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">+17.0bp（月度 · 陈旧 66d）</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">月度 · 不靠 · 陈旧计数较 06-06 不变</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、166 rows、summary 00:01Z ——{' '}
              <span className="dn-em">7 天滚动读、不是今天</span>）。平均
              off-diagonal{' '}
              <span className="dn-tag">|r| 0.233</span>（较 06-06 的
              0.238 退 0.005 —— 朝 0.25 NORMAL 收的趋势<em>停转</em>了、
              regime tag 仍 IDIOSYNCRATIC 而且缝更宽）。BTC 顶配仍是
              SILVER：{' '}
              <span className="dn-tag">SILVER +0.261</span>（06-06 是
              +0.254 —— 收 +0.007）、SP500{' '}
              <span className="dn-tag">+0.220</span>（06-06 是 +0.185 ——
              收 +0.035）、TSLA{' '}
              <span className="dn-tag">+0.220</span>（06-06 是 +0.195 ——
              收 +0.025）、GOLD{' '}
              <span className="dn-tag">+0.194</span>（06-06 是 +0.182）、
              MSFT{' '}
              <span className="dn-tag">+0.189</span>（06-06 是 +0.151 ——
              收 +0.038）、NQ{' '}
              <span className="dn-tag">+0.188</span>{' '}
              <span className="dn-em">（06-06 是 +0.129 —— 收 +0.059、
              谱系里 BTC 到 TradFi 最大一根收紧、因为 BTC 与 NQ 的价格
              在这 7d 窗里同步走）</span>、NVDA{' '}
              <span className="dn-tag">+0.185</span>（06-06 是 +0.158）、
              URNM <span className="dn-tag">+0.182</span>（06-06 是
              +0.150）、COPPER <span className="dn-tag">+0.178</span>
              （06-06 是 +0.184）、PLAT{' '}
              <span className="dn-tag">+0.171</span>（06-06 是 +0.163）、
              META <span className="dn-tag">+0.166</span>（06-06 是
              +0.142）、NGAS <span className="dn-tag">+0.147</span>
              （06-06 是 +0.152）、JP225{' '}
              <span className="dn-tag">+0.125</span>（06-06 是 +0.118 ——
              从 top-10 末位收到中段）。7d 表现：{' '}
              <span className="dn-tag bear">BTC −17.75%</span>（从 06-06
              的 −17.17% 延 −0.58pt —— 7d 窗现在含 06-06 收 $60,850 与
              06-07 未收 $60,846、−5.41% 插针完整落入窗内）、NQ{' '}
              <span className="dn-tag bear">−4.49%</span>{' '}
              <span className="dn-em">（06-06 是 −5.35% —— NQ 部分回
              +0.86pt、滚动 7d 窗向前一根、06-06 那道 NQ 延伸没进入
              今天滚到的窗）</span>、SP500{' '}
              <span className="dn-tag bear">−2.33%</span>（06-06 是
              −2.74% —— 回 +0.41pt）、JP225{' '}
              <span className="dn-tag bear">−3.98%</span>（06-06 是
              −2.43% —— 延 −1.55pt、TradFi 解耦的亚段在反方向上做）、
              NVDA <span className="dn-tag bear">−4.65%</span>（06-06 是
              −5.29% —— 回）、META{' '}
              <span className="dn-tag bear">−6.61%</span>（06-06 是
              −7.21% —— 回）、AAPL{' '}
              <span className="dn-tag bear">−1.38%</span>、MSFT{' '}
              <span className="dn-tag bear">−8.85%</span>（06-06 是
              −9.24% —— 略回）、AMZN{' '}
              <span className="dn-tag bear">−9.38%</span>（06-06 是
              −9.63% —— 略回）、TSLA{' '}
              <span className="dn-tag bear">−9.60%</span>（06-06 是
              −10.51% —— 回）。金属普弱但松：GOLD{' '}
              <span className="dn-tag bear">−4.90%</span>（06-06 是
              −4.83% —— 平）、SILVER{' '}
              <span className="dn-tag bear">−9.99%</span>（06-06 是
              −10.16% —— 松）、PLAT{' '}
              <span className="dn-tag bear">−7.61%</span>（06-06 是
              −8.14% —— 松）、PALL{' '}
              <span className="dn-tag bear">−10.23%</span>（06-06 是
              −11.39% —— 松）、COPPER{' '}
              <span className="dn-tag bear">−4.21%</span>（06-06 是
              −3.19% —— 略延）、URNM{' '}
              <span className="dn-tag bear">−10.74%</span>（06-06 是
              −10.11% —— 略延）。能源仍正：CL{' '}
              <span className="dn-tag bull">+4.09%</span>（06-06 是
              +4.08% —— 平）、BRENT{' '}
              <span className="dn-tag bull">+2.62%</span>（06-06 是
              +3.34% —— 凉）、NGAS{' '}
              <span className="dn-tag bear">−0.49%</span>（06-06 是
              −1.40% —— 回、几乎平）。{' '}
              <span className="dn-em">
                BTC 的 7d 落后 TradFi 引擎<em>张</em>到约 −13.26pt（BTC
                −17.75% 对 NQ −4.49%）、从 06-06 的 −11.82pt —— 但这次
                是<em>因为</em>BTC<em>延</em>更深而 TradFi <em>部分回</em>
                （NQ +0.86pt、SP500 +0.41pt、MSFT +0.39pt、TSLA +0.91pt
                对 06-06 那一周一周地比）。形现在是 BTC-单独-延-进-平
                TradFi regime、<em>不</em>是 06-06 那道双卖形。BTC 顶配
                跨资产收紧（NQ +0.059、MSFT +0.038、SP500 +0.035、TSLA
                +0.025）反映插针印和 TradFi 上周卖盘对得上时刻 —— 但
                TradFi 段在今天滚动窗里回了、BTC 单独延。mean |r| 在
                0.233（从 NORMAL 退）、BTC 盘面在交易处方上仍结构性
                IDIOSYNCRATIC
              </span>。JGB 月度 2.52% 带 EXTREME RISK-OFF 月度 tag ——
              不要靠它。
            </p>

            <h2 className="dn-sec">
              交易本{' '}
              <span className="dn-roman">V · runner / put-spread 尾 / 回补反弹 scout / 周期延续框架状态未变 · mean-revert 长 scout leg-3 inflection 重 framing 到 flip $63,538（06-06 是 $63,778）—— R/R 重算 = 2.15:1、在 trigger $63,538 / stop $59,154 / 首目标 $72,978、过 1.5:1 门、trigger 未印；<em>仍 NON-ACTIONABLE</em> · 200W 周期地板 watch 继续；现货上缝收窄到 −1.73% 但日收仍下方 · 本快照无新交易</span>
            </h2>

            <p>
              <span className="dn-signal">
                06-06 框架监控干净地印出：6JUN 结算在 08:00Z 06-06
                <em>干净</em>解、且 7JUN 替换块挂<em>正向</em>
                （+3.87M）—— dealer 本子修复腿自下腿启动以来第一次
                决定性地朝回补反弹 scout 倾向、但现货没重夺 flip
                $63,538、所以 leg 3 仍未印
              </span>。05-31 那根回补反弹 scout 在价格面上仍 DROPPED ——
              周期锚仍 ~$12.0k 头顶（06-06 是 ~$13.4k）、还要三条腿
              （锚重夺 AND dealer 本子修 AND 回补形）。dealer 本子修
              腿今天<em>实质好转</em>（γ +$14.8M 到 −38.7M、7JUN 前段
              块正向 +3.87M、$60k 墙松 −$1.12M）；回补形腿今天在 4h 窗
              上<em>实质好转</em>（每一根流向字段净买、OI 在扩、是 00:05Z
              锚上一根合格的 4h 回补形印）；但锚重夺腿在 ~$12.0k 头顶
              未动。runner 与 29MAY put-spread 尾仍按未变关闭。周期
              延续框架仍 CLOSED-VINDICATED、今日没新可测。06-03 那根
              mean-revert 长 scout 仍清掉两道升级门、把 leg 3 重 framing
              到新 flip：{' '}
              <span className="dn-signal">
                1h 收 &gt; flip $63,538 而 OI 仍在加、是今日 tape 上正确
                的结构 inflection；R/R 在 trigger $63,538 / stop $59,154
                （06-06 投降低 —— 今天 24h 低 $59,558 在它上方、所以
                谱系投降低仍是 stop 参考）/ 首目标 $72,978（周期锚）上
                重算给出 $4,384 风险 / $9,440 报酬 = 2.15:1、较 06-06
                的 2.00:1 温和改善、稳稳过桌面的 1.5:1 门
              </span>。scout 仍 NON-ACTIONABLE、因为 leg 3 未印 —— 现货
              $60,933 在重 framing trigger 下方 $2,605（对照 06-06 的
              $4,132、近 $1,527、flip 守住而现货回搭）—— 但 R/R 读得更
              好、trigger 比 06-06 更近。200W 周期地板 watch 仍信息性；
              现货缝收窄到 −1.73%（06-06 是 −3.48%）但 06-06 日收
              $60,850 与 06-07 未收日收 $60,846 仍在全史 W-SMA200
              $62,008 下方 ~$1,160；本周新开的周 bar 在周末前要回到
              $62,008 或之上才能避免本周期内首次全史 200W 下方周收的印。
              本日交易本在 live size 上仍未变（无）；桌面在 dealer 侧修、
              4h 流翻回补形、SM 本子在未完成反弹引擎上反空堆的过程里、
              守纪律。
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">关闭 · 主仓 · runner 梯走完 · 29MAY 08:00Z 到期结算关闭（状态未变、从 06-06 继承）</span>
              <div className="dn-trade-name">
                Flip-extend 短 —— 29MAY 08:00Z 到期结算关闭（较 06-06 未变）
              </div>
              <div className="dn-thesis">
                状态未变。回看仍肯定关闭：05-30 / 05-31 日收
                （$73,857 / $73,653）标了放大器后两日反弹、06-01
                破（$71,392）、06-02 砸（−6.53%）、06-03 延（−3.91%）、
                06-04 近平（−0.41%）、06-05 延（−4.43% 收对收
                $61,022）、06-06 稳（−$172 收对收 $60,850 —— 04:06Z
                parquet 读 $60,490 之后到 UTC 收时回了）、今天未收的
                06-07 收 $60,846 对 06-06 基本平。下腿在收口径上似乎
                停了延伸；再入路是新一根结构性 setup、不是 roll。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">关闭 05-29 08:00Z（放大器结算）· 无残仓 · 较 06-06 未变</span></div>
                <div><span className="dn-lvl-k">不做</span><span className="dn-lvl-v">不要在三框 ⚡ TD9 BUY 簇、00:05Z 锚上的合格 4h 回补形印、前段放大器已清的 dealer 状态（γ +$14.8M、7JUN +3.87M 正向）、与日对日基本平收上追再入空 —— 空侧在这一腿上结构性耗尽、即便 SM 本子今日反空加</span></div>
              </div>
              <div className="dn-gating">
                <b>交易已关闭。</b>审计周期纪律守住：不 roll、不平均、
                不晚梯加 —— 即便 SM 本子今日反回空堆、引擎框回补形与
                前段放大器已清的 dealer 状态在二阶上不支持加空。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">DROPPED · scout · 周期锚丢四层以上 · ~$12.0k 头顶（06-06 是 ~$13.4k）· dealer 本子修复腿今日<em>决定性好转</em>（+$14.8M 到 −38.7M；7JUN 前段块正向）· 回补形腿在 00:05Z 锚 4h 窗上印干净（合格回补形、不是谱系第一根）</span>
              <div className="dn-side"></div>
              <div className="dn-trade-name">
                回补反弹 scout —— DROPPED 仍在锚重夺腿上未变、但两道腿今天决定性好转（dealer 本子修腿 +$14.8M、4h 回补形腿在 00:05Z 锚上跨每一根流向字段干净）
              </div>
              <div className="dn-thesis">
                回补反弹路径有三条腿：(1) 锚重夺（1d 收 &gt;
                D-SMA100 $72,978）、(2) dealer 本子修（aggregate GEX
                翻回 &gt; 0）、(3) 回补形流向印（OI 缩 + 现货 CVD
                买 + SM short_btc 泄）。今日：腿 1 在 ~$12.0k 头顶
                未动（周期锚仍是承重的缺位门）；腿 2 <em>实质改善
                </em>（+$14.8M 到 −38.7M —— 下腿单篇最大一根修、仍净
                空但朝正确方向、7JUN 前段块正向 +3.87M 是下腿首根正向
                前段块）；腿 3 在 00:05Z 锚的 4h 窗上印<em>干净</em>
                （4h：现货 CVD +382、期货 CVD +306、大单净买 +397 跨
                44 笔、taker-net +306、OI +65 BTC —— 每一根流向字段
                净买、OI 在扩 —— 这是 00:05Z 锚上一根合格回补形印、
                不是谱系第一根的主张）。1h 在大单和 OI 上继续 4h 形、
                但现货 CVD 在快照分钟小时里滑 −125。三道腿里两道今
                日决定性好转 —— 但腿 1（锚重夺）是结构门、仍未动在
                ~$12.0k 头顶；scout 在价格面仍 DROPPED。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">scout 状态</span><span className="dn-lvl-v">在价格面 DROPPED（周期锚仍是承重的缺位腿、~$12.0k 头顶）；腿 2 与 3 今天都更好</span></div>
                <div><span className="dn-lvl-k">再入门（继承）</span><span className="dn-lvl-v bull">1d 收 &gt; D-SMA100 $72,978 AND aggregate GEX 翻回 &gt; 0（现在 −38.7M、今天好 +$14.8M）AND 1h 回补形印（4h 回补形今天在 00:05Z 锚上印干净、1h 在快照分钟小时里现货 CVD 滑）</span></div>
                <div><span className="dn-lvl-k">这里不入多</span><span className="dn-lvl-v bear">不要把三并发 TD9 BUY 簇当回补反弹买 —— 这是下面那根 mean-revert scout setup、不是回补反弹 setup；回补反弹路径由锚重夺把门、不管引擎框回补形多干净</span></div>
              </div>
              <div className="dn-gating">
                <b>交易在价格面 dropped。</b>下面 mean-revert 长 scout
                是另一根 setup、锚在超卖计数耗尽；回补反弹路径由锚
                重夺把门。4h 回补形在 00:05Z 锚上印干净是一根有意义的
                二阶信号、支持 mean-revert scout 的 leg-3 flip 重夺
                trigger 如果它印 —— 但<em>不</em>自动解锁回补反弹路径、
                锚仍是结构门。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">CLOSED-VINDICATED · 空 scout · 框架监控 · 今日 24h tape 上无新单分钟敌对-2 签名（最近是 BJ 13:51 → BJ 14:01 06-06 一根 10 分钟重堆形、但无单分钟 |Δnet| ≥ 3k）· 日历节奏正式退役</span>
              <div className="dn-trade-name">
                Anchor-break 空 scout —— CLOSED-VINDICATED（关闭从 06-06 继承；今日 24h tape 没印单分钟敌对-2 签名、只有一根更宽 10 分钟的重堆形；日历节奏正式退役）
              </div>
              <div className="dn-thesis">
                状态较 06-06 未变。周期延续框架在 06-06 第六根印失败
                上正式退役在 BJ 15:41 fallback pin；今天没有可考虑的
                日历分钟。框架继续作无日历的监控、看新一根重堆敌对-2
                签名（Δshort &gt; 0 + Δlong &lt; 0 同一分钟、|Δnet| ≥
                3k）；今日 24h tape 没单分钟 Δnet 印过 ≥ 3k 门。最近
                的一根接近形是 BJ 13:51 06-06 双侧峰（long_btc 15,841
                与 short_btc 56,606 同分钟）、再 10 分钟后 BJ 14:01
                06-06 SM net 谷 −43,475 —— 一根 10 分钟窗的重堆形、
                但不是单分钟敌对-2 签名、且谷比 06-04 谱系极端
                −46,686 浅 +3,211 BTC。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">今日无新敌对-2</span><span className="dn-lvl-v">24h tape 无单分钟 Δnet ≤ −3k 印；最近形是 BJ 13:51 06-06 双侧峰 + BJ 14:01 06-06 SM net 谷 −43,475（10 分钟窗重堆但不是单分钟签名）</span></div>
                <div><span className="dn-lvl-k">五印链（关闭）</span><span className="dn-lvl-v">05-30 06:01Z Δnet −5,569 → 06-01 06:16Z −3,137 → 06-02 06:46Z −6,621 → 06-03 07:41Z −7,177（谱系极端）→ 06-04 07:41Z −5,591 → 06-05 第六印失败 · 框架关闭</span></div>
                <div><span className="dn-lvl-k">处置</span><span className="dn-lvl-v">CLOSED-VINDICATED 继承 · 桌面不会在三并发 TD9 BUY 簇、00:05Z 锚上的合格 4h 回补形印、+$14.8M γ 修、下腿首根正向前段块（+3.87M 7JUN）、与对收基本平的盘面上追再入空 —— 即便 SM 本子今日反空堆</span></div>
                <div><span className="dn-lvl-k">框架下一步</span><span className="dn-lvl-v">未来重堆敌对-2 签名（Δshort &gt; 0 + Δlong &lt; 0 同一分钟、|Δnet| ≥ 3k）印出时仍是有意义的 tape 读数、但只在无日历基础上</span></div>
              </div>
              <div className="dn-gating">
                <b>状态：</b>CLOSED-VINDICATED 继承。{' '}
                <b>硬规：</b>不在周期延续节奏已经干净失败、dealer 侧
                决定性修复（+$14.8M 今日）、4h 回补形流向印干净、引擎
                把 RSI 重建到中位、前段放大器无新负向替换地清出、且
                下腿收两根稳定的 tape 上再入空。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">关闭 · 宏观尾 · 29MAY 08:00Z 结算关闭（状态未变、从 06-06 继承；周末 FRED 冻结 —— 信用与利率两侧门都在周五收上距触发 4bp / 6bp 带过）</span>
              <div className="dn-trade-name">
                下行 put-spread —— 29MAY 08:00Z 结算关闭、不 roll（周末 FRED 冻结 —— 周一美开前不可能有新宏观印）
              </div>
              <div className="dn-thesis">
                仓位状态未变。宏观盘面在周末 FRED 冻结上结构性冻住：
                每一根 Tier-1 行都带着和 06-06 备忘一致的周五收、
                所以信用门仍距触发 4bp（HY OAS 2.74%）、利率侧门仍距
                触发 6bp（10Y nominal 4.47%）—— 周一美开前不可能有新印、
                周末不可能测出新分歧。重夺多 rates filter（10Y &lt;
                4.55%）在带过的周五收 4.47% 上仍验为 TRUE。今天不开
                新对冲、因为 (a) 周末没有可驱动 re-grow trigger 的
                宏观印、(b) BTC 内的 dealer 侧<em>决定性修</em>（+$14.8M
                今日）、(c) 前段放大器在无新负向替换下首次干净清出、
                (d) 四框超卖计数簇 + 00:05Z 锚上合格 4h 回补形印 ——
                这一切支持多侧反向监控、不是新一根下行对冲。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">关闭 05-29 08:00Z（Deribit 29MAY 结算）· 无残仓 · 不 roll · 较 06-06 未变</span></div>
                <div><span className="dn-lvl-k">re-grow trigger（下一根 Tier-1 印）</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% 收（现在 2.74%、距触发 4bp —— 周五收带过、门在周末不会动）OR 10Y &gt; 4.53% 收（现在 4.47%、距触发 6bp —— 周五收带过）</span></div>
                <div><span className="dn-lvl-k">重夺多 rates filter</span><span className="dn-lvl-v bull">10Y &lt; 4.55% 收 —— 在带过的周五收 4.47% 上验 TRUE；filter 守过周末</span></div>
              </div>
              <div className="dn-gating">
                <b>注：</b>宏观盘面在周末冻结上、门近度在两侧带的都是
                周五收。下一根干净宏观渲染是周一美开的下一根可看印。
                今日不 roll、因为 BTC 内结构读（前段放大器无替换清出、
                dealer 侧 +$14.8M 修、4h 回补形干净、三框 ⚡ TD9 BUY
                簇、mean-revert scout R/R 2.15:1）支持多侧反向监控。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout · 框架监控 · NON-ACTIONABLE · 三道升级腿过两道、第三道<em>重 framing</em>到 flip $63,538 —— R/R 重算 = 2.15:1（较 06-06 的 2.00:1 改善）、trigger 未印；<em>仍 NON-ACTIONABLE</em> 待印</span>
              <div className="dn-trade-name">
                Mean-revert 长 scout —— 框架监控；腿 1（多 TF ⚡ TD9 BUY）从四并发<em>轮</em>到三并发（12h / 1d / 3d）+ 1M 仍待印；腿 2（funding 累积空付 ≥ 4h）在单根连续口径上<em>更深</em>（7.72h、仍 &gt;1.9× 门）但 24h 均值从 −1.36% 退到 −0.13%；腿 3 inflection 重 framing 到 flip $63,538 —— R/R 重算过门、读 2.15:1；印未在
              </div>
              <div className="dn-thesis">
                mean-revert 长 scout 三道升级门是：(1) 多 TF TD9 BUY
                在周期框上确认 —— 今天<em>轮</em>到三并发（12h / 1d /
                3d）+ 1M 仍 TD8 → 9? 待印；3d 从待印的 Buy 8 → 9?
                转成确认 TD9 BUY、同时 15m 翻 Sell 5、8h reset 到 Buy
                1（活跃框少一根、但平均 TF 更慢、簇集中到多周期框）；
                (2) funding 累积空付 ≥ 4h —— 今天在 7.72h 单根连续负
                带上<em>过</em>（06-06 是 10.55h —— 退 −2.83h、但仍是
                4h 门的 1.9×）、24h 均值从 −1.36% 退到 −0.13%（均值
                <em>实质</em>变浅、但仍负）、且快照分钟正好是 24h 谷
                −3.16% ann（今日 24h 窗内最深单分钟负向印；06-06 谱系
                更深谷 −3.92% mid-window 仍是谱系更深印）；(3) 1h
                重夺结构 inflection。06-06 备忘把腿 3 从 ~$68k 重
                framing 到 flip $63,778；今天 flip 只落 $240 到 $63,538、
                所以腿 3 带着温和的重 pricing 继续。重 framing inflection
                上的 R/R 重算：trigger $63,538 / stop $59,154（06-06
                投降低；今天 24h 低 $59,558 在它上方、所以谱系投降低
                仍是 stop 参考）/ 首目标 $72,978（周期锚）给出风险
                $4,384 / 报酬 $9,440 = 2.15:1、较 06-06 的 2.00:1 温和
                改善、稳稳过桌面 1.5:1 门。scout 仍 NON-ACTIONABLE、因
                为 leg 3 未印 —— 现货 $60,933 在重 framing inflection
                下方 $2,605（对照 06-06 的 $4,132 —— 近 $1,527、flip
                守住而现货回搭）—— 但 R/R 现在读得更好、trigger 更近。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">升级门（3 道过 2 道、第三道重 framing 待印）</span><span className="dn-lvl-v bull">腿 1 多 TF TD9 BUY —— 过、在三并发周期框（12h / 1d / 3d）+ 1M 待印；簇较 06-06 四框堆<em>更慢</em>（15m / 8h 退、3d 从待印转）· 腿 2 funding 累积空付 ≥ 4h —— 过、在 7.72h 单根连续带上、24h 72.80% 负、24h 均值退到 −0.13%（06-06 是 −1.36%）· 腿 3 1h 收 &gt; flip $63,538（重 framing 从 06-06 的 $63,778 —— flip 只落 $240）—— 未过、现货 $60,933 在重 framing trigger 下方 $2,605</span></div>
                <div><span className="dn-lvl-k">$63,538 flip（重 framing inflection、印前<em>不是</em>入场）</span><span className="dn-lvl-v bull">1h 收 &gt; $63,538 而 OI 仍在加（或缩）标出把监控升级的结构 inflection；新 R/R 在 trigger $63,538 / stop $59,154 / 首目标 $72,978 给出 $4,384 风险 / $9,440 报酬 = 2.15:1、较 06-06 的 2.00:1 温和改善、稳稳过桌面 1.5:1 门。<em>监控 / inflection 线、印前不入场；入场仅在 1h 收过 flip 确认</em></span></div>
                <div><span className="dn-lvl-k">stop（若入）</span><span className="dn-lvl-v bear">1h 收 &lt; $59,154（06-06 投降低 —— 今天 24h 低 $59,558 在它上方、谱系投降低仍是 stop 参考；新一根投降印作废超卖计数读法）</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R 仅 · 周期锚重夺时取半、runner 到 D-SMA50 簇 ~$76k 区</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R 框架（按 06-05 audit DN-006 继承）：</b>{' '}
                trigger $63,538 / stop $59,154 = $4,384 风险；首目标
                $72,978 = $9,440 报酬 = 2.15:1（过桌面 1.5:1 门）。
                <b>入场许可：1h 收过 flip $63,538 确认</b>—— 且 OI
                仍在加（或至少不在崩）、大单 / 现货 CVD 在 trigger
                bar 上显示回补形印。4h 回补形窗在 00:05Z 锚上今天已
                经印干净（每一根流向字段净买、OI 在扩）；1h 在快照
                分钟小时里现货 CVD 滑 −125、所以 leg 3 印时的快照分钟
                trigger-bar 检查会因此收紧。scout 仍 NON-ACTIONABLE、
                因为 leg 3 未印；trigger 在现货上方 $2,605。{' '}
                <b>硬规：</b>无 leg 3 flip 重夺的 TD9 仅入场不许；三
                并发 TD9 簇在未被 flip 上方价格行动确认时不许加；不入
                场如果 R/R 门未过（今日重 framing 数过门；若 inflection
                走远则要重核）。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 200W 周期地板 watch（从 06-06 继承）· 缝<em>收窄</em>到现货上 −1.73%（前 −3.48%）—— 但 06-06 日收 $60,850 与 06-07 未收日收 $60,846 仍在全史 W-SMA200 $62,008 下方 −$1,158 / −$1,162；周末周收决定本周期内首次全史 200W 下方周收的印</span>
              <div className="dn-trade-name">
                200W 周期地板 watch —— 从 06-06 继承；缝收窄但 level 没被两根日收里任何一根重夺；周末周收印出结构破或重夺
              </div>
              <div className="dn-thesis">
                runbook §2 200W-support 读法把全史 W-SMA200 标作周期
                地板 —— 在全史 parquet 序列上（W-MON、closed=&lsquo;right&rsquo;、
                154 个有效 200W 观测、其中 9 根周收落在 200W 下方）周收
                落在 200W 下方在历史上是 ~5.8% 的周（9 / 154）、群集在
                深周期投降。weekly_200sma.json 文件仍在服务器上不在
                （连续第三篇；自桌面政策加入这条 watch 起文件未生成）；
                按 runbook 退回到全史（2019-09-09 → 2026-06-07、353 根
                周 bar）W-SMA200、直接从 parquet 算到 $62,008。live
                现货 $60,933 坐在这条 level 下方 −1.73%<em>在 SPOT 印上</em>
                （06-06 是 −3.48% —— 缝<em>收</em>窄 +1.75pt、现货守住
                平、200W 抬 $214）；06-06 日收 $60,850 在 level 下方
                −$1,158、06-07 未收日收（parquet 最末 bar 00:05Z）
                $60,846 在下方 −$1,162。周期地板是周收口径、不是现货
                —— 今天新开的周 bar（W-MON 锚到 06-08）要在周末前回到
                $62,008 或之上才能避免本周期内首次全史 200W 下方周收
                的印。如果周收印在 level 下方、是本周期内首次全史 200W
                下方周收 —— 一根宏观结构事件、历史上对应投降而不是
                入场。本篇 watch 是信息性的；runbook do-not-fabricate
                纪律屏蔽对一根缺失 JSON 主张 percentile / break-event、
                只露出 level + 未收日收缝。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W watch 源</span><span className="dn-lvl-v">weekly_200sma.json 不在（连续第三篇 · lineage 继承）· 按 runbook §2 退回：全史 parquet 计算从 2019-09-09、353 根周 bar、W-SMA200 = $62,008（较 06-06 的 $61,794 抬 $214 —— 滚动窗丢一根低端周并加上未收的 06-08 bar @ $60,845.70）</span></div>
                <div><span className="dn-lvl-k">现货对 200W（本快照）</span><span className="dn-lvl-v bear">现货 $60,933 − 200W $62,008 = −$1,075 / −1.73%（live 现货在周期地板下方；缝较 06-06 的 −3.48% <em>收</em>窄 +1.75pt、现货守住而 200W 抬）</span></div>
                <div><span className="dn-lvl-k">06-06 日收对 200W</span><span className="dn-lvl-v bear">$60,850 对 $62,008 = 下方 −$1,158 —— 06-06 收较 06-06 备忘 parquet 最末读 $60,490 高 $359（当天在 04:06Z 锚之后在 UTC 收时<em>回</em>了）、但仍在 200W 下方</span></div>
                <div><span className="dn-lvl-k">06-07 未收日收对 200W</span><span className="dn-lvl-v bear">parquet 最末 bar 00:05Z 收 $60,846 对 $62,008 = 下方 −$1,162（与 06-06 收基本同缝）</span></div>
                <div><span className="dn-lvl-k">周收 watch（周末）</span><span className="dn-lvl-v">本周新开的周 bar（W-MON 锚到 06-08）要在周末前回到 $62,008 或之上才能避免周度口径上首次全史 200W 下方周收；一根周收落在 level 下方是本周期内首次（宏观结构事件）</span></div>
                <div><span className="dn-lvl-k">runbook 纪律</span><span className="dn-lvl-v">按 runbook do-not-fabricate、不对一根缺失 JSON 主张 percentile / break-event；只露出全史 level 与未收日收缝。再跑这道 watch 要么靠 weekly_200sma.json 在服务器生成、要么靠下一篇继续全史 parquet 计算</span></div>
              </div>
              <div className="dn-gating">
                <b>仅监控。</b>一根周收落在 $62,008 下方是本周期内首次、
                是一根宏观结构性支撑事件；但按 runbook 这条 watch 是
                信息性的、不是 trade trigger。上面的 mean-revert 长
                scout 才是 leg 3（flip 重夺）印时的可执行卡；200W watch
                是会改变桌面对更宽周期位的读法的另一根宏观级信号、不是
                单交易入 / 出。如果周收印在 $62,008 下方、下一篇必须
                重评更宽周期论题（中周期下行 vs 周期顶部回撤）是否被
                证伪。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 6JUN 结算干净解 AND 7JUN 替换块正向（下腿首根正向前段块）· 现货<em>没</em>延伸插针（24h 低 $59,558 在 06-06 谱系低 $59,154 上方）· 06-06 日收 $60,850 稳、06-07 未收日收 $60,846 基本平 · 200W 周期地板缝收窄到现货上 −1.73% 但日收仍下方 · mean-revert 长 scout R/R 改善到 2.15:1 在重 framing flip、trigger 未在 · 宏观盘面在周末 FRED 冻结上冻住</span>
            </h2>

            <p>
              06-06 决策条件中：6JUN26 到期结算干净<em>触发</em>（−8.40M
              块在 08:00Z 06-06 清出）AND 新 7JUN 替换块挂<em>正向</em>
              +3.87M（下腿首根正向前段块 —— 06-05 备忘预报、06-06 没
              拿到的那道干净前段衰减）；dealer 本子修<em>实质触发</em>
              （+$14.8M 到 −38.7M、下腿单篇最大一根 γ 修、仍净空 γ 但
              朝正确方向）；现货延伸尾<em>未触发</em>（24h 低 $59,558 在
              06-06 谱系低 $59,154 上方 +$404 —— 后插针地板守住第一段）；
              周末周收尾<em>仍待</em>（未收 06-07 收 $60,846 在全史
              W-SMA200 $62,008 下方 −$1,162；周末收决定本周期内首次
              全史 200W 破或重夺）；mean-revert 长 scout leg-3 inflection
              朝 $63,538 近了 $240、R/R 温和改善到 2.15:1；trigger 未印
              （现货下方 $2,605）；周期延续 watch 仍 CLOSED-VINDICATED
              —— 今日 tape 上无新单分钟敌对-2 签名；宏观 re-grow 门在
              周末 FRED 冻结上冻住（HY OAS 距触发 4bp、10Y 距触发 6bp、
              两侧都带过周五收）；重夺多 rates filter 仍 TRUE 在带过周五
              收 4.47%。今日条件在前段放大器干净衰减（下腿首根正向前段
              块）、守住的谱系低（后插针地板守住第一段）、收窄但未重夺
              的 200W 缝、24h 内反空堆的 SM 本子、与 R/R 改善但 trigger
              未印的 mean-revert 长 scout 上 re-set：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>7JUN26 到期结算（今天 08:00Z、~8h 后）</td><td className="bull">+3.87M 正向前段块在 08:00Z 结算；结算后除 7JUN aggregate ≈ −42.6M（前向残值口径上略差、因清掉的是正向块、留下负向尾；但前段衰减<em>形</em>本身是下腿谱系首根正向前段块结算、结构性干净）</td><td>看结算印；结算印干净则无需动作 —— 若印 vol 事件、重评回补反弹 scout 的 dealer 本子修腿</td></tr>
                <tr><td>Mean-revert 长 scout（leg 3 inflection 重 framing；R/R 2.15:1）</td><td className="bull">1h 收 &gt; flip $63,538 而 OI 仍加 / 不崩 · trigger 在现货上方 $2,605 · 重算 R/R 2.15:1 在 trigger $63,538 / stop $59,154 / 首目标 $72,978 —— 过 1.5:1 门、较 06-06 的 2.00:1 改善</td><td><em>scout 多 0.2R、1h 收过 flip 确认入场</em>、入场 bar 回补形检查（大单净正 + 现货 CVD 买在 trigger bar 上 —— 4h 窗今日印干净、1h 在快照分钟小时里现货 CVD 滑、所以 trigger-bar 检查相应收紧）；半仓在周期锚 $72,978 取、runner 到 D-SMA50 簇 ~$76k</td></tr>
                <tr><td>回补反弹 scout（多）—— 价格面 DROPPED；腿 2 + 3 今日决定性好转</td><td className="bull">要 1d 收 &gt; $72,978 AND aggregate GEX 翻 &gt; 0 AND 1h 回补形印 —— 腿 2（dealer 本子修）今日动 +$14.8M 到 −38.7M（仍净空、翻号仍待）；腿 3（回补形流向）在 00:05Z 锚 4h 窗上印<em>干净</em>；腿 1（锚重夺、结构门）未动 ~$12.0k 头顶</td><td>不入 · 路径在腿 2 + 3 上今日好转但仍由腿 1（锚重夺）把门；4h 回补形印干净是支持 mean-revert scout leg-3 trigger 印（若印）的有意义二阶信号</td></tr>
                <tr><td>200W 周期地板 watch（继承；缝收窄到现货 −1.73% 但日收仍下方）</td><td className="bear">全史 W-SMA200 $62,008；现货 $60,933 在下方 −1.73%；未收 06-07 收 $60,846 在下方 −$1,162；本周新开周 bar 要在周末前回到 $62,008 或之上才能避免周度口径首次全史 200W 破</td><td>看周末周收 · 信息性、不是 trade trigger；一根确认的下方周收是本周期内首次、是要求下一篇重评周期论题的宏观结构事件</td></tr>
                <tr><td>周期延续节奏（CLOSED-VINDICATED 继承；今日无新敌对-2）</td><td className="stale">24h tape 无单分钟 Δnet ≤ −3k 印；最近形是 BJ 13:51 06-06 双侧峰 + BJ 14:01 06-06 SM net 谷 −43,475（10 分钟重堆但不是单分钟签名）—— 节奏正式退役</td><td>读每一根新 Δnet ≤ −3k 或 Δnet ≥ +3k 印作信号本身 —— 无时刻先验 · 重堆敌对-2 签名印出时仍是有意义的 tape 读、只在无日历基础上</td></tr>
                <tr><td>HY OAS 宏观 re-grow 门（周末冻结）</td><td className="bull">2.74%（距触发 4bp、带过周五收 —— 门在周末不可移、下一根可看印在周一美开）</td><td>距触发 4bp 在冻结周末上、门机械式钉住到周一 · 今日不 roll</td></tr>
                <tr><td>重夺多 rates filter（周末冻结）</td><td className="bull">10Y &lt; 4.55% 收 —— 在带过周五收 4.47% 上验 TRUE；门距触发 6bp、周末上钉住</td><td>单独 filter 守 TRUE；需要 mean-revert leg-3 trigger 把它翻译成 scout 多</td></tr>
                <tr><td>DXY / MOVE 风险关-off 脉冲（周末冻结）</td><td className="bear">DXY 100.07（带过周五收 —— episodic z +2.33、在带过基线上的谱系极端）；MOVE 75.2（带过 —— 06-06 谱系跳现在是固定周末基线、不是新印）</td><td>宏观风险关-off 脉冲结构性冻在一根周五收基线上；如果 BTC leg-3 在周一美开前印、入场 bar 回补形检查负责（周末没有可测的新宏观分歧）</td></tr>
                <tr><td>周期锚重夺监控（价格面四层以上下方、较 06-06 近 ~$12.0k）</td><td className="bull">1d 收 &gt; D-SMA100 $72,978 —— 现在 ~$12.0k 头顶（06-06 是 ~$13.4k、近 $1.4k —— 滚动 100D 锚跟着下腿印退）</td><td>回补反弹 scout 三道腿里最远的一根；1d 收过锚重启回补反弹 scout 并触发新结构重评</td></tr>
                <tr><td>BTC↔NQ 跨资产轮动（regime IDIOSYNCRATIC 从 NORMAL 退回）</td><td className="stale">|r| 0.233（从 06-06 的 0.238 退、收紧趋势停转）；BTC↔NQ +0.188（从 +0.129 抬 —— 收 +0.059、谱系里 BTC 到 NQ 最大一根收紧）；BTC −17.75% 对 NQ −4.49% 缝 −13.26pt（从 −11.82pt <em>张</em>、BTC 延更深且 NQ 回）</td><td>BTC 盘面正在延进部分回的 TradFi 盘（NQ +0.86pt 周对周对 06-06 读）—— 轮动从 06-06 双卖 regime 翻到 BTC-单独-延 regime · 跨资产仍 IDIOSYNCRATIC 作交易处方</td></tr>
              </tbody>
            </table>

            <p>
              本篇会被<em>重写</em>的那条单线是{' '}
              <span className="dn-signal">
                本周新开的周 bar 能不能在周末前回到全史 200W $62,008
                之上（避免本周期内首次全史 200W 下方周度口径收盘印）、
                以及 mean-revert 长 scout 的 leg-3 inflection 在 flip
                $63,538 上能不能在周一美开释放新宏观状态之前印出一根
                确认的 1h 收。dealer 本子终于让前段放大器干净衰减；下腿
                收稳了两根连续；4h 回补形窗在 00:05Z 锚上印干净；周期
                锚重夺腿仍 ~$12.0k 头顶、SM 本子在 24h 内反回空堆。问
                题现在是：dealer 侧二阶修与引擎框回补形会不会解到 1h
                flip 重夺、把 mean-revert 长 scout 升级到首根 scout
                入场；还是周末周收印出本周期内首次全史 200W 破、且
                dealer 本子残余负向尾（结算后除 7JUN ~−42.6M、26JUN
                −24.94M 月度在远段承重）把现货拖到 $59,154 下方一根新
                投降印
              </span>。在那之前本篇按写读：runner 与 put-spread 尾关闭、
              回补反弹 scout 在价格面 DROPPED 但腿 2 + 3 今日决定性
              好转、空框架监控 CLOSED-VINDICATED 今日无新敌对-2、
              mean-revert 长 scout NON-ACTIONABLE 待 leg-3 flip 重夺
              印但 R/R 现读 2.15:1、trigger 较 06-06 近 $1,527、200W
              周期地板 watch 带<em>缝收窄但未重夺</em>的读。BTC-vs-TradFi
              解耦张到 −13.26pt、BTC 在部分回的 TradFi 盘里单独延；引擎
              MTF 框 RSI 重建到中位、15m 翻回云上；dealer 本子修了下腿
              单篇最大一根 γ 动作；杠杆本子印出一根退一档的空付 regime
              但快照分钟正是 24h 谷 −3.16% ann。下 24h 的正确读法是
              <em>耐心 —— 看 7JUN 结算结果、周末周收对 $62,008、与
              1h 收过 flip $63,538 —— 三根改写下一篇的外部印</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计追踪 · v2（已过 codex 敌对式审计）
            </span>
            <b>状态：</b>本篇是 STAGE C 在 btc-fetcher 服务器上、在
            STAGE B codex 敌对但公平审计返回{' '}
            <b>BLOCK-CRITICAL</b> 裁定（<b>2 CRITICAL + 2 MAJOR + 3
            MINOR</b>、完整审计文件：{' '}
            <code>audits/2026-06-07-desk-note.md</code>）之后、把 v1
            EN 草稿就地升级为 v2 的 ZH 对照版本。七条 findings 全部
            就地应用到 EN 与本 ZH 上。{' '}
            <b>CRITICAL 修复：</b>{' '}
            <em>DN-001</em> —— 在 −3.16% 快照分钟 funding 谷上每一句
            「fresh single-minute deepest neg of the lineage / 谱系单
            分钟最深负向」框架被重写为「今日 24h 窗内最深」、并明确
            保留 06-06 谱系更深谷 −3.92% 作为<em>仍是更深</em>的印
            （tiles、section headings、杠杆段、与 mean-revert scout
            的腿 2 论述都重写）；{' '}
            <em>DN-002</em> —— 每一句「下腿谱系首根 4h 窗 / cleanest
            cover-shape of the down-leg」被替换为更窄、可辩护的「在
            00:05Z 锚上一根合格 4h 回补形印」（谱系最级主张在滚动 tape
            的前缀和扫描上不成立：codex 在回到 05-31 的扫描里找出 275
            个更早的合格 4h 窗、例如 <code>2026-05-31 01:17Z</code>
            （<code>BJ 09:17 05-31</code>）与 <code>2026-06-05 20:36Z</code>
            （<code>BJ 04:36 06-06</code>）；回补反弹 scout 卡、周期
            延续卡、决策表行、闭幕签名都重写）。{' '}
            <b>MAJOR 修复：</b>{' '}
            <em>DN-003</em> —— SM 段与下游框架文里每一对 BJ-to-UTC
            都差 8h：24h 现货低修正到 <code>BJ 12:35 06-06</code> /
            <code> UTC 04:35 06-06</code>、SM 双侧多/空峰修正到{' '}
            <code>2026-06-06 05:51Z（BJ 13:51 06-06）</code>、SM net
            谷修正到 <code>2026-06-06 06:01Z（BJ 14:01 06-06）</code>、
            框架与决策表里所有重复的会话描述现在读一致；{' '}
            <em>DN-004</em> —— 宏观面板渲染日期从未来的{' '}
            <code>06-07 22:15Z</code> 改回真实的{' '}
            <code>2026-06-06 22:15Z</code>（周五傍晚 UTC、自此周末 FRED
            冻结开始）。{' '}
            <b>MINOR 修复：</b>{' '}
            <em>DN-005</em> —— 200W 历史频率从 <code>~9%</code> 修正
            到 <code>~5.8%</code>（桌面全史 parquet 序列上 9 / 154
            个有效 200W 观测、W-MON / closed=&lsquo;right&rsquo;）、
            structure 段与 200W watch 卡两处都改；{' '}
            <em>DN-006</em> —— manifest 段里散落的{' '}
            <code>live spot $59,933 →</code> 错字被删除（锚 live tape
            行是 <code>$60,933.28</code>）；{' '}
            <em>DN-007</em> —— funding tile 源串里把前次 IV/RV spread
            日期从 <code>06-05</code> 修正到 <code>06-06</code>。{' '}
            <b>Codex 确认干净（继承、未修）：</b>requireViewer 把门、
            JSX 结构完整、build proxy 通过、live tape pin 值、窗口
            流向值、GEX 文件值与算术、MTF 表值、宏观源值、跨资产值、
            MA/RV 水位、与 NTT / max-pain / strike-level IV / BTC-NQ
            比率的 claims-vs-loaded-data 纪律都在审计上过。codex 标
            的两条 open issue（「current cycle」周期边界措辞、与
            200W watch 的「current cycle」框架）按透明性继承、未升级
            为严重度 finding。{' '}
            <b>STAGE A 纪律应用（继承）：</b>runbook §1 滚动源归档
            政策、runbook §2 BJ-local <code>t</code> 约定、完整 MA
            矩阵（日 AND 周、SMA AND EMA、n ∈ {`{20,50,100,150,200}`}）
            在 2024-2026 子集上 + 全史参考用于 200W watch、funding ×
            1095 年化、SM 切分作 |Δ|/prior_net、claims ≤ data 按
            runbook §3、requireViewer 把门按 runbook §4。MA 矩阵样本
            仍是 2024-2026 子集、按 06-02 audit DN-005 桌面政策继承。{' '}
            <b>构建说明（INFO）：</b>Node 18.19.1 对 Next 16.2.6
            要 ≥ 20.9.0；完整 <code>next build</code> 仍受环境屏蔽。
            <code>npx --no-install tsc --noEmit</code> 是构建代理、
            STAGE C 在审计驱动的修改后跑过、验证零 TS 回归。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本篇是 Hysteresis Research 内部交易台备忘、仅供主体内部
            讨论使用、{' '}
            <em>不是投资建议、不是要约、不是劝诱</em>、也不是针对任何
            接收人具体情况作出的安排。数字反映一根原子快照（2026-06-07
            00:05Z、BJ 08:05 06-07）、节级出处在上方数据来源带里披露；
            宏观 Tier-1 面板渲染是 2026-06-06 22:15Z（较快照 ~1h 50m）、
            按周末 FRED 冻结结构性冻住（周一美开前不可能有新日频宏观
            印）。滚动 MTF / GEX / 跨资产制品在读前归档到
            snapshots/2026-06-07-0008/。水位、size、条件是桌面流程的
            示意、不是常设建议。过去的相关性、γ、与仓位形不约束未来
            盘面。衍生品有全损风险、含杠杆时损失可超过入金。{' '}
            <em>请自行核查。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                前段放大器干净衰减 —— 6JUN 结清、7JUN 挂正向。插针没
                延伸。4h 回补形在 00:05Z 锚上印干净。但 SM 本子反回
                空堆、200W 周期地板仍坐在两根连续日收上方、mean-revert
                scout 的 leg-3 印未在。耐心 —— 看 7JUN 结算、周末周
                收对 $62,008、与 1h 收过 flip $63,538。
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
            v2 · 2026-06-07 00:05Z 快照 · 源：live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
