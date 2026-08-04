import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-08-04 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-08-04',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-08-04' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260804() {
  await requireViewer('/zh/desk/2026-08-04');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-08-04 · v2</span>
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
              <span className="dn-big">$63,534</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.16%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-08-04 00:07Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-08-04 00:07Z（snapshot pin，t == 「08-04 08:07」BJ）</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · 锚钉在 00:07Z（BJ 08:07）的文件 tail 以便复现 · 24h 窗口
                    口径：headline delta 用同钟点前一日基线 t == 「08-03 08:07」BJ（端点减 24h-ago
                    行，回退 1,440 根分钟间隔 / 含 1,441 行）。4h / 1h 流向块用 prior-row inclusive
                    基线（08-04 04:07 / 07:07 BJ 到 08:07 pin）；本次序列在各子窗内连续、所以那些复现
                    同钟点端点——无基线偏差。24h 窗内无 CVD reset 签名——端点 fut_cvd Δ −2,312.3 精确
                    对上 taker-net 汇总 −2,312.3，cb_cvd（25,747.3 → 30,900.3，十一根 &gt;120 BTC 的
                    分钟步，max +139.9，无 reset-scale 步）——所以 CVD delta 是原始端点差、不需 Method A ·
                    funding / 流向 行统计跨 1,441 行窗；premium 均值排除 null 行 ·{' '}
                    <b>数据质量说明：</b>本次 SM net 序列 <b>DATA-IMPAIRED</b>——一根可疑分钟步
                    +10,205.3 BTC @ 08-03 14:36 BJ（08-03 06:36Z，即 07-31 / 08-02 标注过的复发
                    ~BJ-14:00 feed re-sync artifact）占了表面 +10,052 净空回补的约 100%；剔除 artifact
                    后 24h ΔNet 是 −153.2（基本 FLAT）。这根表面「回补」本次<b>无法</b>被认定为真盘面读——
                    与 08-02 那根 −22,911 分钟同一故障模式、对照 08-03 那根干净读
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-08-04 08:01 BJ scan（00:01Z）</td>
                  <td className="dn-flag">
                    滚动 latest 文件 · 逐字存档于 /opt/desk-note/snapshots/2026-08-04-0007/ · 较快照锚
                    滞后约 6 分钟 · 含未收盘 K 线 · scan 现货 $63,464
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-08-04 00:01Z 快照</td>
                  <td className="dn-flag">
                    滞后约 6 分钟 · Deribit idx $63,829 对 live $63,534 · IV 中位数 40.3% · 826 合约
                    （08-03 是 866）· headline Total GEX +68.6M 对 by-expiry rollup +56.49M
                    （= gex_summary.json net_gex $56,492,041.90）——一道约 12.1M 不对账的源面板缺口、按
                    DN-003 谱系披露，但本次关系<em>翻了</em>：rollup 现在坐在 headline <em>下方</em>
                    （08-03 / 08-02 / 08-01 是上方）；两面板都<em>更进一步</em>净多 γ（headline
                    +38.1M → +68.6M，rollup +48.86M → +56.49M）、0DTE 前段仍正（4AUG +5.75M）——
                    dealer 本子现在是更强的阻尼器 · 权威签名墙（gex_summary.json）top_pos $70k +17.29M /
                    top_neg $60k −22.51M（crash-put）；面板的签名 Top-10 Gamma Walls 表本次已载入并引用——
                    $70k +17.29M、$68k +12.45M、$67k +10.91M、$66k +10.90M、$64k +9.76M、$72k +8.73M、
                    $65k +8.68M、$80k +7.71M（头顶正墙架）对 $62k −9.73M / $60k −22.51M（下方负墙）——
                    只有非 Top-10 的内部余项没抽出、主张 held ≤ data
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-08-04 00:01Z
                  </td>
                  <td className="dn-flag">滞后约 6 分钟 · 7d 1h bar · 22 资产 · 167 rows · 已存档</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-08-03 22:15Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.87h · 10Y 跳 +7.0bp 到 4.75%（利率复合体是今天<em>唯一</em>动的东西——
                    reclaim-long 利率筛仍 FALSE 且现在差 20bp、比 08-03 的 13bp 更远离触发），TIPS +6.0bp
                    到 2.47%，5Y5Y 2.31%（+1bp），10Y breakeven 约 2.27%，HY OAS 2.84%（−3.0bp、陈旧 4d）·
                    MOVE 连续第四次渲染抓取失败（不可用）· DXY 99.62（沿用、−0.18），USD/JPY 157.41
                    （−0.17、日元偏强）；Fed 净流动性 $5.825T 沿用（周度、无新印）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-08-04 00:05Z（未收盘 close $63,543.30）</td>
                  <td className="dn-flag">
                    锚滞后约 2 分钟 · 偏移按 live 现货 $63,534.01 重算 · 完整 btcusdt_1m_*.parquet glob
                    （8 文件、362 根周 bar、2019–2026）——矩阵<em>不再</em>全面倒挂：D-SMA50 $63,279 是
                    唯一一根正日偏移（+0.40%）；已结算 W-SMA200 $63,533 也<em>微正</em>（+0.001%、现货
                    钉在其上），其余每一根日 / 周 MA 都在负侧 · 上一根<em>走完</em>的日收 08-03 $63,497.20
                    （一根下日、比 08-02 $63,550.00 收低 $53、比已结算 W-SMA200 $63,533.52 低 $36，但
                    <em>守</em>在旧 $63,311 地板和 $62,907 flip 上方——<em>不是</em>决定性熊破）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W 支撑盯位</td>
                  <td className="dn-v-cell">本次独立 full-glob parquet 重算（362 根周 bar）· ma200w_trap_watch_state.json 未作锚定源引用（可变 sidecar、未在 00:07 锚存档）</td>
                  <td className="dn-flag">
                    200W 结算是本次的独立 full-glob parquet 重算（362 根周 bar）——ma200w_trap_watch_state.json
                    sidecar 未被存进 00:07 快照、不作锚定源引用。重算带的是与 08-03 <em>相同</em>的结算
                    （下一根周收要到周日 08-09）：上一根走完的周（收于 2026-08-02）收 $63,550.00 对
                    W-SMA200 $63,533.52——高出地板 $16.48、是连续第五根周收在 200W 上方（07-05、07-12、
                    07-19、07-26、08-02）。未收盘的周（收于 2026-08-09）W-SMA200 坐 $63,754.09、08-04
                    未收盘 close $63,543.30 在其下方 $210.79
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
                  <td className="dn-flag">相关主张明确为 framework only（btc_ntt_analysis.html JS 渲染、不可抽取）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dn-meta">
            <div>
              <span className="dn-k">funding · 8h 年化</span>
              <span className="dn-v">+3.54%</span>
              <span className="dn-src">live · 原始 0.003236 字段 × 1095 · 离开封顶（08-03 是钉 +10.95%）· 24h 均值 +4.93% ann · 谷 −1.593% ann（@ 08-04 04:53 BJ / 08-03 20:53Z）· 峰 +10.95%（封顶）· 194 / 1441 负行（首 08-04 02:37 BJ / 08-03 18:37Z、末 08-04 05:50 BJ / 08-03 21:50Z）——拥挤多 carry 本窗 FLUSHED、是从进 08-03 的连续 5 天零负行的一记硬断</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v">re-pin 封顶 → FLUSHED · +4.93% 均值 · 194 负行</span>
              <span className="dn-src">区间 −1.593% / +10.95% ann · 封顶行 379/1441（末封顶 08-03 14:25 BJ——多是 08-03 那根 pin 的早段结转）· 08-03 re-pin 到封顶的多 carry 进本段硬泄：194 根负 funding 行冒出（08-03 是 0），收复加的那点杠杆又退了回来</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−0.58%（−628.7 BTC）</span>
              <span className="dn-src">live · 109,193.7 → 108,565.1 · 一记<em>收缩</em>（对 08-03 的 +590 扩张）进一根平的 +0.16% 价 · 24h 流向又是现货买 / 期货卖劈叉（spotCVD +5,153.0 对 futCVD −2,312.3 / taker −2,312.3 / 大单 +111.3、跨 612 活跃分钟、932 笔大单印）——现货吸筹、期货派发、仓位净<em>退</em>了</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v">59.94 / 40.06</span>
              <span className="dn-src">live_db `mkt_long_pct` · 24h 高 68.85（08-03 18:03 BJ / 08-03 10:03Z）低 59.26（08-04 05:51 BJ / 08-03 21:51Z）——从 08-03 的 65.87 硬穿 60 线 de-crowd：retail 拥挤多终于清了、是这轮收复里首根 sub-60 读</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v stale">−8,995（净 SHORT——DATA-IMPAIRED）</span>
              <span className="dn-src">live · long 15,538.3 − short 24,534.1 = −8,995.8 · DATA-IMPAIRED——一根可疑 +10,205.3 BTC 分钟 @ 08-03 14:36 BJ（复发的 ~BJ-14:00 re-sync）占表面回补的约 100%；剔除 artifact 后盘面基本 FLAT（ΔNet −153.2）。交易台<em>无法</em>把这认定为真 SM 回补 · 24h 区间被污染（max −7,884.7 @ 08-03 21:36 BJ、min −19,162.4 @ 08-03 09:56 BJ——跨了 artifact）；SM tail 最后约 2 分钟冻结</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 24h 前</span>
              <span className="dn-v stale">−19,047 → −8,995（表面 +10,052 · ARTIFACT）</span>
              <span className="dn-src">|Δnet|/prior_net = 10,052.1 / 19,047.9 = 52.8% 表面 · Δlong +4,514.3、Δshort −5,537.8——但一根可疑分钟（+10,205.3 @ 08-03 14:36 BJ）是其约 100%；剔除后 ΔNet = −153.2（FLAT）。scout 多路径要的那记「回补」本次<em>无法认定</em>——是一记数据损伤、不是认定的 roll</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">40.3% / 29.14%</span>
              <span className="dn-src">GEX IV 中位数 · 跨 826 合约的链中位（08-03 是 866）、不是可交易价差 · 30D close-to-close RV = logret.std × √365 × 100 于 30 根日收益（parquet 最末 bar 00:05Z）· 约 +11.16pt 链丰度 · 29-return 另一口径 29.56%</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+1.00%（在上方）</span>
              <span className="dn-src">flip $62,907（较 08-03 的 $63,015 落 $108）· 对 live 现货 $63,534.01（+1.00%；63,534.01/62,907.20 − 1 = +0.996%）/ GEX 文件 Deribit idx $63,829（+1.47%；63,829.46/62,907.20 − 1 = +1.466%）——两参考都在 flip 上方 · headline +68.6M / rollup +56.49M——从 08-03 的 +38.1M / +48.86M <em>更进一步</em>转正：阻尼器加强了</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                争夺中的收复没有解决、而是<em>盘</em>在了地板上——牛的封顶收和熊的地板破都没落、而能武装
                scout 的那一记信号（一记干净的 smart-money 回补）<em>读不出来</em>，因为 ~BJ-14:00
                re-sync artifact 又一次污染了 SM 盘面
              </span>
              。08-03 那篇转在：收复是延伸到一根 D-EMA50 封顶收（$64,657）且 SM <em>回补</em>（武装
              scout），还是买盘失守在抬升的 $63,533 地板下方且 SM 仍空、carry 泄掉（重武装 chase-short）。
              两边都没点火。现货报 <span className="dn-tag">$63,534</span> live、
              <span className="dn-tag bull">+0.16%</span> 于 24h——死平——钉在已结算 200W $63,533.52 一毫之内。
              盘面戳了一根 24h 高 <span className="dn-tag">$64,079.9</span>（不及 $64,614 封顶）随后回撤
              <span className="dn-tag bear">最近 4h −0.53%</span>、并插了一根 24h 低
              <span className="dn-tag">$62,310.01</span>（在 flip/地板带下方）然后收复回来钉住地板。08-03 日 bar
              <span className="dn-tag bear">收 $63,497.20</span>——一根下日、比 08-02 收低 $53、比已结算 W-SMA200
              低 $36，但<em>守</em>在旧 $63,311 地板和 $62,907 flip 上方：一记盘整、不是破位。
              <span className="dn-em">能拍板的那个本子变暗了</span>：{' '}
              <span className="dn-signal">
                SM 盘面显示一记表面 +10,052 回补到净 −8,995、但一根可疑分钟（+10,205 @ 08-03 14:36 BJ、
                复发的 re-sync）是其约 100%——剔除 artifact 后盘面 FLAT（ΔNet −153）
              </span>
              、所以 scout 的确认信号无法认定。绕着那个暗点、堵路的东西都<em>松</em>了：
              <span className="dn-tag bull">funding FLUSHED</span>（194 根负行对连续五天的 0——钉住的多
              carry 终于退了）、<span className="dn-tag bull">retail 穿 60 到 59.94</span>（多群泄了）、
              <span className="dn-tag bull">08-03 警告超买的那根 1h ⚡TD9 SELL 没了</span>。但 dealer 本子
              <em>更进一步</em>转正——headline <span className="dn-tag">+38.1M → +68.6M</span>、rollup{' '}
              <span className="dn-tag">+48.86M → +56.49M</span>、现货在 $62,907 flip 上方 +1.00%——一记更强的
              双向阻尼器，且 <span className="dn-tag bear">OI 收缩 −0.58%</span> 随仓位退出，与此同时
              <span className="dn-tag bear">10Y 跳 +7bp 到 4.75%</span>（利率筛现在 20bp FALSE、更远离触发），
              且 BTC 在一条 7d 跑了 +2.7–3.3% 的风险指数上<em>落后</em>、自己坐平。MTF 净读是
              <span className="dn-tag bear">「卖反弹」</span>、顶背离簇长到五帧，但金叉簇和 HTF 底背离簇
              （8h/12h/1w）保持完整。本子保持 FLAT：chase-short 仍 INVALIDATED（无封口破、γ 是更强的阻尼器）；
              cover-bounce scout 在松掉的堵路上<em>更进一步</em>复活但<em>不</em>武装——封顶未满足、SM 回补无法
              认定、利率更进一步 false。本篇转在：一记<em>干净</em>的 SM 回补是否终于随一根封顶收一起印出——
              还是盘整在一记干净 SM 空 + γ 翻负上破掉 flip/旧地板带。
            </p>
            <p>
              BTC 报 <span className="dn-tag">$63,534</span> live、
              <span className="dn-tag bull">+0.16%</span> 于 24h、在一条
              <span className="dn-tag">$64,079.90 / $62,310.01</span> 区间内（高 @ 08-04 03:35 BJ / 08-03 19:35Z、
              低 @ 08-03 16:34 BJ / 08-03 08:34Z）——一段宽的双向 session、收回了平、钉在已结算 200W 上。
              <span className="dn-signal">收复既没延伸到封顶、也没失守地板——它<em>盘</em>住了</span>：07-27 $63,720.80 →
              07-28 $63,903.60 → 07-29 $63,958.90 → 07-30 $64,750.00 →{' '}
              <span className="dn-tag bear">07-31 $62,859.90</span> →{' '}
              <span className="dn-tag bear">08-01 $62,792.30</span> →{' '}
              <span className="dn-tag bull">08-02 $63,550.00</span>（收复地板的那根上收）→{' '}
              <span className="dn-tag bear">08-03 $63,497.20</span>（一根走完的下收、比 08-02 收低 $53、比已结算
              200W 低 $36、但在旧地板 / flip 上方），未收盘的 08-04 bar（parquet 最末 bar 00:05Z）在
              <span className="dn-tag">$63,543.30</span>——日盘面现在是三根收贴着 $63.5k 地板带
              （$63,550 / $63,497 / $63,543 未收盘），一记平盘整、不是趋势。
              <span className="dn-em">
                MA 矩阵保持<em>不再全面倒挂</em>：D-SMA50 $63,279（+0.40%）是唯一一根正日偏移——首根重回
                现货下方的收复支撑——且已结算 W-SMA200 $63,533（+0.001%）也微正、现货钉在其上，其余每一根日 / 周
                MA 都在头顶。近带是一簇刚收复的支撑和刚在头顶的阻力、现货钉在中间：{' '}
                <span className="dn-tag bull">0-γ flip $62,907（+1.00%、现货在上方）</span>、{' '}
                <span className="dn-tag bull">D-SMA50 $63,279（+0.40%、已收复）</span>、{' '}
                <span className="dn-tag bull">旧地板 $63,311（+0.35%、已收复）</span>、{' '}
                <span className="dn-tag">已结算 200W $63,533（+0.001%、PINNED——现货就在其上）</span>、
                然后头顶{' '}
                <span className="dn-tag bear">未收盘周 W-SMA200 $63,754（−0.35%）</span>、{' '}
                <span className="dn-tag bear">D-EMA20 $63,906（−0.58%）</span>、{' '}
                <span className="dn-tag bear">D-SMA20 $64,326（−1.23%）</span>、和{' '}
                <span className="dn-tag bear">D-EMA50 封顶 $64,614（−1.67%）</span>（scout 的武装线、从 08-03 的
                $64,657 下移了一格）。
              </span>{' '}
              200W 周期地板带的是与 08-03 <em>相同</em>的结算（下一根周收要到周日 08-09）——本次一记独立
              full-glob parquet 重算（362 根周 bar）、不是引用的 state 读：上一根走完的周（收于 08-02）收
              $63,550.00 对 W-SMA200 $63,533.52、高出 $16.48 且是连续第五根在 200W 上方。未收盘的周（收于 08-09）
              W-SMA200 坐 $63,754.09、08-04 未收盘 close $63,543.30 在其下方 $210.79。所以日地板破了
              （07-31/08-01）又收复了（08-02）、周破从未封口、此后价格已在抬升的地板<em>上</em>盘了三根日收。
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面 · SM 读 DATA-IMPAIRED——表面 +10,052 回补到净 −8,995 约 100% 是一根可疑分钟（+10,205 @ 08-03 14:36 BJ、~BJ-14:00 re-sync）；剔除 artifact 后 FLAT（ΔNet −153），scout 的确认回补<em>无法认定</em> · funding FLUSHED（194 根负行对 5 天的 0）——钉住的多 carry 退了 · retail 穿 60 到 59.94 · OI 收缩 −0.58% 进一根平的 +0.16% 价 · 24h 流向现货买 / 期货卖劈叉</span>
            </h2>

            <p>
              <span className="dn-signal">
                今天最重要的一读是一记<em>非读</em>：能确认或否定 scout 回补的那条 SM 盘面变暗了、三段里第二次
                被复发的 ~BJ-14:00 re-sync artifact 污染
              </span>
              。表面动作是一记大回补——净 −19,047.9（24h 前）→ −8,995.8（快照）、ΔNet +10,052.1、
              |Δ|/prior_net 52.8%、Δlong +4,514.3、Δshort −5,537.8。但一根分钟步
              <span className="dn-tag stale">+10,205.3 BTC @ 08-03 14:36 BJ（08-03 06:36Z）</span>——就是造出 08-02
              −22,911 分钟和 07-31 +6,369 分钟的同一 feed re-sync——是整根摆动的约 100%；剔除 artifact 后 24h ΔNet 是
              <span className="dn-tag stale">−153.2（基本 FLAT）</span>。24h 区间被同一步污染（max −7,884.7 @ 08-03
              21:36 BJ、min −19,162.4 @ 08-03 09:56 BJ、跨了 artifact），SM tail 最后约 2 分钟冻结。{' '}
              <span className="dn-em">
                所以交易台本次<em>无法</em>认定一记 SM 回补——盘面既不确认 record 买家转买（scout 的牛信号）、
                也不确认它仍空（chase-short 的信号）。这与掏空 08-02 那读的是同一记数据损伤、且正落在两笔交易都
                挂钩的那条腿上。按剔除 artifact 读、SM 是 FLAT——既不回补也不加仓——这与价格盘整一致、但它是一记
                非信号、不是确认。scout 的回补信号读不出来。
              </span>
            </p>

            <p>
              仓位本子的其余部分读一记盘整、且多 carry 终于在泄——是暗 SM 盘面下的建设性变化。{' '}
              <span className="dn-signal">
                OI 收缩进一根平价、现货被买、期货被卖——仓位是<em>退</em>、不是<em>进</em>
              </span>
              。现货 24h <span className="dn-tag bull">+0.16%</span>（死平）、OI{' '}
              <span className="dn-tag bear">−628.7 BTC（−0.58%）</span>——109,193.7 → 108,565.1、一记收缩
              （对 08-03 的 +590 扩张）。24h aggressor 盘面<em>劈叉</em>：现货 CVD{' '}
              <span className="dn-tag bull">+5,153.0</span>（现货吸筹、cb_cvd 25,747.3 → 30,900.3、无 reset-scale
              步——十一根 &gt;120 BTC 分钟步、max +139.9）对期货 CVD{' '}
              <span className="dn-tag bear">−2,312.3</span>、taker-net{' '}
              <span className="dn-tag bear">−2,312.3</span>（fut_cvd Δ 精确对上 taker-net 汇总）、大单-net{' '}
              <span className="dn-tag bull">+111.3 BTC（612 活跃分钟内 932 笔印）</span>——现货买、期货卖、大单微净买、
              价平。{' '}
              <span className="dn-em">
                大单-net 本次翻正（+111.3 对 08-03 的 −1,935）——即便 CVD 仍在卖侧、期货报价盘还是薄了。perp 在快照
                对现货 −$58.76 折价（24h 均 −$74.34、区间 −$139.90 / +$61.97——两行短暂转升水），一记持续的 perp
                折价穿过盘整守住、所以盘面仍是现货主导。这读是一记收缩 OI 上的盘整、期货报价盘变薄——收复既没被
                推更高、也没被硬平、它在盘、杠杆从两侧退气。
              </span>
            </p>

            <p>
              杠杆与拥挤读是这一记干净的建设性变化：08-03 re-pin 到封顶的多 carry FLUSHED、且 retail 穿 60。{' '}
              <span className="dn-signal">
                funding 离开 +10.95% 封顶、印出 194 根负行——六天来首次负 funding——同时 retail 硬穿 60 线到 59.94
              </span>
              ：live funding <span className="dn-tag">+3.54% ann</span>（原始 0.003236 字段 × 1095、离顶）、24h 均值{' '}
              <span className="dn-tag">+4.93% ann</span>（从 08-03 的 +9.16% 冷却）、谷{' '}
              <span className="dn-tag bull">−1.593% ann（@ 08-04 04:53 BJ / 08-03 20:53Z）</span>、封顶行{' '}
              <span className="dn-tag">379 / 1441</span>（末封顶 08-03 14:25 BJ——多是 08-03 那根 pin 的早段结转）、和{' '}
              <span className="dn-tag bull">194 / 1441 负行</span>（首 08-04 02:37 BJ、末 08-04 05:50 BJ）——钉住的多
              carry 在连续五天零负行后终于退了。retail <span className="dn-tag bull">mkt_long_pct 59.94</span>
              （24h 高 68.85 @ 08-03 18:03 BJ、低 59.26 @ 08-04 05:51 BJ）——从 08-03 的 65.87 穿 60 de-crowd、
              是这轮收复里首根 sub-60 读。{' '}
              <span className="dn-em">这是最能改善 scout 背景的一读：08-03 那篇标为级联燃料的再热多 carry 泄了、
              retail 多群清了——真正的底在杠杆泄、拥挤清时构建、两者都发生了。但一记 flush 是必要条件、不是充分
              条件：它移走一记下行堵路、它本身不武装 scout——scout 仍需要封顶收和一记本次盘面无法供给的、认定的
              SM 回补。</span>
            </p>

            <p>
              窗口流向是一记平的 24h、一段把日内高翻回来的软 4h、和一记进快照的平 1h。24h：价格{' '}
              <span className="dn-tag bull">+0.156%</span>、OI{' '}
              <span className="dn-tag bear">−628.7 BTC</span>、现货 CVD{' '}
              <span className="dn-tag bull">Δ +5,153.0</span>、期货 CVD{' '}
              <span className="dn-tag bear">Δ −2,312.3</span>、大单{' '}
              <span className="dn-tag bull">+111.3 BTC / 612 活跃分钟内 932 笔印</span>、taker-net{' '}
              <span className="dn-tag bear">−2,312.3</span>——{' '}
              <span className="dn-em">现货买 / 期货卖、价平、仓位退</span>。4h（进快照）：价格{' '}
              <span className="dn-tag bear">−0.526%</span>、OI{' '}
              <span className="dn-tag bull">+85.0 BTC</span>、现货 CVD{' '}
              <span className="dn-tag bear">Δ −1,401.8</span>、期货 CVD{' '}
              <span className="dn-tag bear">Δ −1,094.4</span>、大单{' '}
              <span className="dn-tag bear">−169.6 BTC</span>、taker-net{' '}
              <span className="dn-tag bear">−1,094.4</span>——把 $64,079.9 高翻回来的那记回撤、两个本子都在卖侧。1h：
              价格 <span className="dn-tag">−0.002%</span>（平）、OI{' '}
              <span className="dn-tag bull">+44.5 BTC</span>、现货 CVD{' '}
              <span className="dn-tag bull">Δ +74.4</span>、期货 CVD{' '}
              <span className="dn-tag bull">Δ +74.6</span>、大单{' '}
              <span className="dn-tag bull">+105.5 BTC</span>、taker-net{' '}
              <span className="dn-tag bull">+74.6</span>——<em>一记进快照的小双向买、平</em>。{' '}
              <span className="dn-em">
                基线口径：24h 块用同钟点前一日行（08-03 08:07 BJ、回退 1,440 根分钟间隔 / 含 1,441 行）；4h 和 1h
                子窗块用 prior-row inclusive 基线（08-04 04:07 / 07:07 BJ 到 08:07 pin）。本次序列在这些窗内连续、
                所以那些复现同钟点端点——无基线偏差，且 24h 窗内无 CVD reset 签名（fut_cvd 端点 Δ −2,312.3 对上
                taker-net 汇总 −2,312.3），所以 CVD delta 是原始端点差。
              </span>
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 滑到 2 多 / 6 空 / 2 中性 · regime 保持 5/9 周期动量（JT≥0）趋势延续、但净读是 多周期共振偏空·反弹偏卖「卖反弹」· 08-03 那根 1h ⚡TD9 SELL 没了（现 Buy 4）、但顶背离簇长到 5 帧（15m/30m/1h/4h/1d）· 金叉簇（1h/4h/8h/3d/1w）和 HTF 底背离簇（8h/12h/1w）保持完整 · MA 矩阵不再全面倒挂、D-SMA50 是唯一收复支撑、现货钉在 200W 上</span>
            </h2>

            <p>
              <span className="dn-signal">
                MTF 面板滑了一格、净读硬化到「卖反弹」、即便 regime 标签仍是趋势延续——一记盘整、带一记在长的
                顶背离警告和一记完整的金叉 / HTF 底背离反制
              </span>
              。00:01Z scan 读{' '}
              <span className="dn-tag bear">2 多 / 6 空 / 2 中性</span>、跨 10 帧（08-03 是 2/7/1）。regime 标签保持{' '}
              <span className="dn-tag">5/9 周期动量（JT≥0）——趋势延续</span>，但面板净读是{' '}
              <span className="dn-tag bear">多周期共振偏空·反弹偏卖</span>。对 08-03 的建设性变化：{' '}
              <span className="dn-tag bull">警告超买的那根 1h ⚡TD9 SELL 没了</span>（1h reset 到 Buy 4），且金叉簇
              持续——1h 水下金叉 11b、4h 金叉 3b、8h 水下金叉 2b、3d 金叉 8b、1w 水下金叉 2b。HTF 底背离簇{' '}
              <span className="dn-tag bull">8h / 12h / 1w</span> 保持完整，1M 保住其{' '}
              <span className="dn-tag bull">⚡TD9 BUY</span>。但警告在长：{' '}
              <span className="dn-tag bear">顶背离簇扩到五帧（15m/30m/1h/4h/1d）</span>、15m 带一根水上死叉 26b
              （快帧翻了）、30m 一根水上死叉 6b、4h/8h 仍在云下。{' '}
              <span className="dn-em">
                所以结构是一记双向证据的盘整：牛侧是穿 1h–1w 的金叉簇加深帧 TD9 BUY / HTF 底背离、熊侧是一记五帧
                顶背离簇和一记「卖反弹」共振标签、且快帧翻了。摘掉 1h TD9 SELL 松了一记超买旗、但顶背离簇长到五帧
                用一记更广的动能停滞警告替了它。这是一记失去上行冲量、但还没转下的反弹——盘整的结构画面。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">63,464</td><td className="num bear">41</td><td className="bear">死叉（水上）26b</td><td className="neut">云内 63.2k–63.5k 2b</td><td>Buy 3</td><td>TOP+BOT-div</td></tr>
                <tr><td>30m</td><td className="num">63,464</td><td className="num">49</td><td className="bear">死叉（水上）6b</td><td className="bull">云上 ↓63.0k 20b</td><td>Buy 8</td><td>TOP+BOT-div</td></tr>
                <tr><td>1h</td><td className="num">63,464</td><td className="num bull">53</td><td className="bull">金叉（水下）11b</td><td className="bull">云上 ↓63.3k 11b</td><td>Buy 4</td><td>TOP-div</td></tr>
                <tr><td>4h</td><td className="num">63,464</td><td className="num">51</td><td className="bull">金叉（水下）3b</td><td className="bear">云下 ↑64.2k 24b</td><td>Sell 4</td><td>TOP+BOT-div</td></tr>
                <tr><td>8h</td><td className="num">63,464</td><td className="num">48</td><td className="bull">金叉（水下）2b</td><td className="bear">云下 ↑64.4k 12b</td><td>Buy 1</td><td>BOT-div</td></tr>
                <tr><td>12h</td><td className="num">63,464</td><td className="num">47</td><td className="neut">死叉（续）</td><td className="neut">云内 62.3k–64.8k 7b</td><td>Sell 2</td><td>BOT-div</td></tr>
                <tr><td>1d</td><td className="num">63,464</td><td className="num">47</td><td className="bear">死叉（水上）8b</td><td className="neut">云内 61.9k–68.0k 15b</td><td>Sell 1</td><td>TOP-div</td></tr>
                <tr><td>3d</td><td className="num">63,464</td><td className="num">44</td><td className="bull">金叉（水下）8b</td><td className="bear">云下 ↑76.4k 21b</td><td>Buy 4</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">63,464</td><td className="num">39</td><td className="bull">金叉（水下）2b</td><td className="bear">云下 ↑85.9k 27b</td><td>Buy 2</td><td>BOT-div</td></tr>
                <tr><td>1M</td><td className="num">63,464</td><td className="num">43.5</td><td className="neut">—</td><td className="bull">云上 ↓47.4k</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 08:01 BJ scan（00:01Z；滚动 latest 文件、逐字存档于
                    /opt/desk-note/snapshots/2026-08-04-0007/）。表头提醒：{' '}
                    <em>⚡ TD9 BUY 1M（超卖反转提示）；08-03 那根 1h ⚡ TD9 SELL 没了</em>、{' '}
                    <em>顶背离 5：15m/30m/1h/4h/1d · 底背离 6：15m/30m/4h/8h/12h/1w</em>、{' '}
                    <em>8h 水下金叉 2b、1w 水下金叉 2b</em>、{' '}
                    <em>regime 5/9 周期动量（JT≥0）——趋势延续；净读 多周期共振偏空·反弹偏卖「卖反弹」</em>、
                    count <em>2 多 / 6 空 / 2 中性</em>。scan 现货 $63,464、24h −0.14%、24h H/L
                    $64,059 / $62,268、qVol $9.61B（00:07Z 的 live 盘面锚读现货 $63,534.01——约 $70 缺口是 6 分钟
                    源滞后加现货-vs-OHLCV/perp basis）。收盘是未收盘 K 线；每个值在各 TF 收盘前都当临时值。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵保持不再全面倒挂——现货钉在已结算 200W 上、有一根收复日支撑就在其下。现货 $63,534 坐在三根近线
              <em>上方</em>、<em>钉在</em> 200W 上、在其余的下方：{' '}
              <span className="dn-tag bull">0-γ flip $62,907（+1.00%）</span>、{' '}
              <span className="dn-tag bull">D-SMA50 $63,279（+0.40%）</span>——唯一一根正日 MA 偏移、首根收复支撑——和{' '}
              <span className="dn-tag bull">旧地板 $63,311（+0.35%、已收复）</span>，然后{' '}
              <span className="dn-tag">已结算 200W 地板 $63,533（+0.001%、现货 PINNED 在其上）</span>。紧贴头顶是
              封顶盘整的那条带：{' '}
              <span className="dn-tag bear">未收盘周 W-SMA200 $63,754（−0.35%）</span>、{' '}
              <span className="dn-tag bear">D-EMA20 $63,906（−0.58%）</span>、{' '}
              <span className="dn-tag bear">D-SMA20 $64,326（−1.23%）</span>、{' '}
              <span className="dn-tag bear">D-EMA50 封顶 $64,614（−1.67%）</span>——scout 的武装线。再上：{' '}
              <span className="dn-tag bear">D-EMA100 $67,094（−5.31%）</span>、{' '}
              <span className="dn-tag bear">D-SMA100 $68,484（−7.23%）</span>、{' '}
              <span className="dn-tag bear">W-EMA200 $68,562（−7.33%；种子）</span>、{' '}
              <span className="dn-tag bear">W-EMA20 $68,859（−7.73%）</span>、{' '}
              <span className="dn-tag bear">W-SMA20 $69,162（−8.14%）</span>、{' '}
              <span className="dn-tag bear">D-SMA150 $69,503（−8.59%）</span>、{' '}
              <span className="dn-tag bear">D-EMA150 $69,889（−9.09%）</span>、{' '}
              <span className="dn-tag bear">D-SMA200 $70,813（−10.28%）</span>、{' '}
              <span className="dn-tag bear">D-EMA200 $72,655（−12.55%）</span>、{' '}
              <span className="dn-tag bear">W-EMA150 $73,963（−14.10%；种子）</span>。远上方且弃用：
              W-SMA150 $76,873（−17.35%）、W-EMA50 $77,763（−18.30%）、W-EMA100 $78,750（−19.32%）、W-SMA50
              $83,332（−23.76%）、W-SMA100 $88,649（−28.33%）。{' '}
              <span className="dn-em">
                MA 锚在 parquet 最末 bar 2026-08-04 00:05Z（未收盘 close $63,543.30）；偏移按 live 现货 $63,534.01
                重算。显示的 MA 水位按 $ 取整；偏移按精确序列值算。full-glob 重算（8 文件、362 根周 bar）让每一根周
                MA 可算——W-SMA200 $63,754.09（未收盘周）/ $63,533.52（上一根走完的周——现货钉住的抬升结算地板）；
                W-EMA150 $73,963 与 W-EMA200 $68,562 从可得历史种起、印在现货上方。日收：07-27 $63,720.80、
                07-28 $63,903.60、07-29 $63,958.90、07-30 $64,750.00、07-31 $62,859.90、08-01 $62,792.30、
                08-02 $63,550.00（收复地板的那根上收）、08-03 $63,497.20（一根走完的下收、守在旧地板 / flip 上方）、
                08-04（未收盘）$63,543.30——三根收在 $63.5k 地板带上盘。
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer 图 <span className="dn-roman">III · 本子更进一步转正——headline +68.6M（08-03 是 +38.1M）/ rollup +56.49M（是 +48.86M）· 现货更进一步收在 $62,907 flip 上方（+1.00%）、所以 chase-short 的 γ 放大器仍<em>没了</em>、阻尼器<em>加强</em> · 0DTE 前段仍正（4AUG +5.75M）· 权威墙 top_pos $70k +17.29M / top_neg $60k −22.51M（crash-put）；面板的签名 Top-10 墙梯已载入——头顶一架 $64k–$72k 正墙架（加远 $80k）对 $62k −9.73M / $60k −22.51M 下方负墙</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子加强了它在 08-03 搭起的阻尼器——它更进一步转正、现货坐在 flip 上方 +1.00%，所以
                chase-short 穿整个地板破一路依赖的负 γ 放大器仍全没、双向垫子更重了
              </span>
              。headline Total GEX / 1% move 是{' '}
              <span className="dn-tag bull">+68.6M</span>（08-03 是 +38.1M），by-expiry rollup 在{' '}
              <span className="dn-tag bull">+56.49M</span>（= gex_summary.json net_gex $56,492,041.90、08-03 是
              +48.86M）——一道约 12.1M 不对账的 headline-vs-rollup 缺口、按 DN-003 谱系披露，且本次关系<em>翻了</em>：
              rollup 现在坐在 headline <em>下方</em>（08-03 / 08-02 / 08-01 是上方）。两面板都读强净多 γ（阻尼）、
              比 08-03 更强。{' '}
              <span className="dn-em">所以 dealer 在这里更硬地阻尼一记动作——一记正 γ 垫子、封顶挤压上冲也封住向下破、
              正是 chase-short 在地板下方想要的放大器的反面。</span> 0-γ flip 落{' '}
              <span className="dn-tag">$63,015 → $62,907（−$108）</span>，现货 $63,534 坐在{' '}
              <span className="dn-tag bull">flip 上方 +1.00%</span>（现货口径 63,534.01 / 62,907.20 − 1 = +0.996%）；
              GEX 文件的 Deribit-index 参考 $63,829 坐在{' '}
              <span className="dn-tag bull">上方 +1.47%</span>（63,829.46 / 62,907.20 − 1 = +1.466%）——两参考都在
              flip 上方、现货比 08-03 的 +0.67% 更深入正 γ。墙图上、gex_summary.json 的权威极值是{' '}
              <span className="dn-tag bull">$70k +17.29M</span>（最重正墙、头顶）和{' '}
              <span className="dn-tag bear">$60k −22.51M</span>（crash-put、最重负、下方）。{' '}
              <span className="dn-em">
                面板的签名 Top-10 Gamma Walls 表本次已载入、所以内部被<em>映射</em>了、不只是两个极值：头顶一架正墙架
                跑 $64k +9.76M、$65k +8.68M、$66k +10.90M、$67k +10.91M、$68k +12.45M、$70k +17.29M（最重）、
                $72k +8.73M，加一根远 $80k +7.71M；下方负墙是 $62k −9.73M 和 $60k −22.51M（crash-put）。只有非 Top-10
                的内部余项没抽出、所以主张 held ≤ data。方向上对 08-03 不变——头顶 $70k 最重正墙、下方 $60k crash-put、
                现货钉在 flip 上方一个正 γ 口袋里，但近墙现在解得出来：一根 $64k 正墙就在头顶、一根 $62k 负墙就在下方、
                夹住盘整。下方的活板门还在、但门更重了：一记向下破得先推回穿过加强的正垫和 flip、$60k crash-put 才放大；
                一记向上挤撞上 $70k 正墙。本子是一记双向<em>阻尼器</em>、比 08-03 更重、不是 chase-short 要的那记单向
                放大器。
              </span>{' '}
              按到期、前段仍正：{' '}
              <span className="dn-tag bull">4AUG26 0.3DTE +5.75M</span>（0DTE 前段、正）、5AUG 1.3 +4.64M、6AUG 2.3
              +1.53M、{' '}
              <span className="dn-tag bull">7AUG 3.3 +8.28M</span>、14AUG 10.3 +3.09M、{' '}
              <span className="dn-tag bull">21AUG 17.3 +8.28M</span>、{' '}
              <span className="dn-tag bull">28AUG 24.3 +14.12M</span>（最重正块）、25SEP 52.3 +6.48M、30OCT 87.3
              +0.88M、25DEC 143.3 +2.13M、26MAR27 234.3 +0.69M、25JUN27 325.3 +0.63M——显示的 by-expiry 分量汇总到{' '}
              <span className="dn-tag bull">+56.50M</span>（分量取整；精确 net_gex $56,492,041.90 = +56.49M rollup）。
              前段 0.3–3.3DTE 簇（4AUG +5.75M + 5AUG +4.64M + 6AUG +1.53M + 7AUG +8.28M）净{' '}
              <span className="dn-tag bull">+20.20M</span>——一根扎实的正前段、所以近期放大器仍没了、前段也是一记阻尼器、
              比 08-03 的 +10.17M 更重。
            </p>

            <p>
              期权链 IV 中位数是{' '}
              <span className="dn-tag">40.3%</span>（对 08-03 的 40.4% 基本不变）对 30D close-to-close RV 的{' '}
              <span className="dn-tag">29.14%</span>——链级丰度{' '}
              <span className="dn-tag">约 +11.16pt</span>。跨 N 合约的链中位（今天 826、从 866 降）、
              <em>不是</em>可交易价差；到期 / strike 级 vega、skew 与期限结构仍未载入；vol 读仍 framework-only
              （链 call OI 219,972.3 / put OI 114,986.6、仅供参照）。RV 方法：30D close-to-close、logret.std × √365 ×
              100 于最后 30 根日 log 收益（= 31 根连续日收）、锚在 parquet 最末 bar 2026-08-04 00:05Z；29-return 另一
              口径读 29.56%。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · 10Y 跳 +7.0bp 到 4.75%（reclaim-long 利率筛现在 20bp FALSE——比 08-03 的 13bp 更远离触发）· TIPS +6.0bp 到 2.47%、利率复合体是唯一动的东西 · HY OAS 2.84%（陈旧 4d）、NFCI −0.554 RISK-ON（陈旧 10d）· MOVE 连续第四次渲染抓取失败 · DXY 99.62 / 日元强、都沿用 · 利率是承重的收紧、盘整是 BTC 内部</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观盘面上唯一动的是那条承重利率线——且它对 scout 动错了方向：10Y 跳 +7bp、把 reclaim-long 利率筛
                推得更远离触发
              </span>
              。面板渲染 2026-08-03 22:15Z、比快照早约 1.87h。US 10Y 名义{' '}
              <span className="dn-tag bear">4.75%（+7.0bp）</span>、regime z{' '}
              <span className="dn-tag bear">+2.69</span>、episodic z{' '}
              <span className="dn-tag">+1.92</span>——极端 RISK-OFF、且是板上最大单动。10Y TIPS 实际{' '}
              <span className="dn-tag bear">2.47%（+6.0bp）</span>、regime z{' '}
              <span className="dn-tag bear">+2.93</span>——极端 RISK-OFF、随名义上。5Y5Y BE 通胀{' '}
              <span className="dn-tag">2.31%（+1.0bp）</span>、10Y breakeven 约 2.27%——平。HY OAS{' '}
              <span className="dn-tag">2.84%（−3.0bp、陈旧 4d）</span>、regime z{' '}
              <span className="dn-tag">−0.25</span>——中性。MOVE 债券 vol{' '}
              <span className="dn-tag stale">不可用（第四次渲染抓取失败）</span>。DXY{' '}
              <span className="dn-tag">99.62（−0.18、沿用）</span>、regime z +0.61、episodic z −2.84——紧；USD/JPY{' '}
              <span className="dn-tag">157.41（−0.17、日元强）</span>；Fed 净流动性{' '}
              <span className="dn-tag bear">$5.825T（−0.092T、周度、沿用）</span>、regime z −1.09、episodic z −2.47
              （RISK-OFF）。US-JP 10Y 利差{' '}
              <span className="dn-tag">2.08%（+7.0bp）</span>。NFCI{' '}
              <span className="dn-tag bull">−0.554（陈旧 10d）</span>、RISK-ON。USD/CNY 6.7464 松。{' '}
              <span className="dn-em">
                净：reclaim-long 利率筛（10Y &lt; 4.55%）在 4.75% FALSE、现在差 20bp——比 08-03 的 13bp 更远、对 scout
                的利率腿是错方向、该腿读 FALSE 且动反了。利率复合体（10Y / TIPS / US-JP 利差都 +6–7bp）是今天<em>唯一</em>
                动的东西；信用陈旧-中性、NFCI 陈旧-松、美元和日元沿用、Fed 净流动性沿用 RISK-OFF、MOVE 第四次渲染变暗。
                宏观盘面里没有东西驱动 BTC 的盘整——它是一记 BTC 内部盘整，下面的相关性读确认 BTC 在<em>落后</em>宏观风险
                复合体、不是领先。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>宏观指标</th>
                  <th>水位</th>
                  <th>Δ（末次 FRED 动）</th>
                  <th>regime z</th>
                  <th>episodic z</th>
                  <th>读</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>US 10Y 名义</td><td className="num">4.75%</td><td className="num bear">+7.0bp</td><td className="num bear">+2.69</td><td className="num">+1.92</td><td className="bear">极端 RISK-OFF · 跳</td></tr>
                <tr><td>10Y TIPS 实际</td><td className="num">2.47%</td><td className="num bear">+6.0bp</td><td className="num bear">+2.93</td><td className="num">+1.79</td><td className="bear">极端 RISK-OFF · 上</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.31%</td><td className="num">+1.0bp</td><td className="num">+1.28</td><td className="num">+2.17</td><td className="neut">episodic · 平</td></tr>
                <tr><td>10Y breakeven</td><td className="num">2.27%</td><td className="num">−1.0bp</td><td className="num">−0.78</td><td className="num">+1.19</td><td className="neut">无标签 · 平</td></tr>
                <tr><td>HY OAS</td><td className="num">2.84%</td><td className="num bull">−3.0bp</td><td className="num">−0.25</td><td className="num">+1.72</td><td className="stale">中性 · 陈旧 4d</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.554</td><td className="num">−0.01</td><td className="num bull">−1.56</td><td className="num bull">−1.53</td><td className="stale">RISK-ON · 周度陈旧 10d</td></tr>
                <tr><td>MOVE 债券 vol</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">不可用 · 抓取失败（第 4 次渲染）</td></tr>
                <tr><td>DXY</td><td className="num">99.62</td><td className="num">−0.18</td><td className="num">+0.61</td><td className="num bull">−2.84</td><td className="neut">紧 · 沿用</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.825T</td><td className="num bear">−0.092T</td><td className="num">−1.09</td><td className="num bull">−2.47</td><td className="stale">周度 · 沿用、无新印</td></tr>
                <tr><td>USD/JPY</td><td className="num">157.41</td><td className="num">−0.17</td><td className="num">+0.30</td><td className="num bull">−3.15</td><td className="bull">日元强</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">2.08%</td><td className="num bear">+7.0bp</td><td className="num">−0.08</td><td className="num">+1.92</td><td className="neut">中性</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7464</td><td className="num">−0.00</td><td className="num bull">−1.46</td><td className="num bull">−2.20</td><td className="bull">无标签 · 松</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp 月度</td><td className="num stale">+2.42</td><td className="num stale">+1.09</td><td className="stale">月度陈旧 63d · 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、summary 00:01Z——{' '}
              <span className="dn-em">一记 7 日滚动读、不是今天</span>）。off-diagonal 均值{' '}
              <span className="dn-tag">|r| 0.315</span>——NORMAL 带、对 08-03 的 0.318 基本不变、仍在一起动。BTC 的头号
              相关是{' '}
              <span className="dn-tag">NQ +0.618</span>、然后 SP500{' '}
              <span className="dn-tag">+0.598</span>、TSLA{' '}
              <span className="dn-tag">+0.564</span>、NVDA{' '}
              <span className="dn-tag">+0.525</span>、JP225{' '}
              <span className="dn-tag">+0.477</span>、URNM{' '}
              <span className="dn-tag">+0.429</span>、SILVER{' '}
              <span className="dn-tag">+0.428</span>、COPPER{' '}
              <span className="dn-tag">+0.419</span>、PALL{' '}
              <span className="dn-tag">+0.392</span>、GOLD{' '}
              <span className="dn-tag">+0.388</span>、PLAT{' '}
              <span className="dn-tag">+0.361</span>。7d 表现把 BTC 摆在一条没带它就跑了的风险盘面后面：{' '}
              <span className="dn-tag">BTC +0.03%</span>（死平）坐在指数（NQ{' '}
              <span className="dn-tag bull">+3.29%</span>、SP500{' '}
              <span className="dn-tag bull">+2.72%</span>、JP225{' '}
              <span className="dn-tag bull">+2.74%</span>）和绿软件 / 大盘龙头（MSFT{' '}
              <span className="dn-tag bull">+24.30%</span>、AMZN{' '}
              <span className="dn-tag bull">+21.03%</span>、GOOGL{' '}
              <span className="dn-tag bull">+13.71%</span>、NVDA{' '}
              <span className="dn-tag bull">+5.66%</span>、TSLA{' '}
              <span className="dn-tag bull">+5.26%</span>）远后面、与 GOLD{' '}
              <span className="dn-tag bull">+0.08%</span> 大致齐平、只领先落后者（META{' '}
              <span className="dn-tag bear">−0.90%</span>、AAPL{' '}
              <span className="dn-tag bear">−9.84%</span>）和能源（CL{' '}
              <span className="dn-tag bear">−2.08%</span>、BRENT{' '}
              <span className="dn-tag bear">−1.83%</span>）。金属 / 杂项混：SILVER{' '}
              <span className="dn-tag bull">+1.00%</span>、PLAT{' '}
              <span className="dn-tag bull">+1.22%</span>、PALL{' '}
              <span className="dn-tag bear">−1.08%</span>、COPPER{' '}
              <span className="dn-tag bull">+3.03%</span>、URNM{' '}
              <span className="dn-tag bull">+2.22%</span>、NGAS{' '}
              <span className="dn-tag bull">+0.33%</span>；EUR +1.19%、日元更强（USD/JPY −3.76%）。{' '}
              <span className="dn-em">
                相关 regime 是 NORMAL（0.315）、BTC 在滚动基础上与风险复合体<em>一起</em>动，但 7d <em>表现</em>说 BTC
                硬<em>落后</em>了它——指数跑 +2.7–3.3% 而 BTC 坐平，所以 BTC 是本周的跑输者、不是领头。盘整是一记对
                一条没带它就走高的风险盘面的 BTC 内部盘整——不是一记 BTC 在骑的宏观驱动 risk-on、也不是一记在拖它的
                risk-off。按 DN-001 谱系这是一记 NORMAL、混合的跨资产读——无轮动结论、但 RS 落后是值得注意的特征。
              </span>{' '}
              JGB 月度 2.67% 带月度标签——不依赖。
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · chase-short 仍 INVALIDATED——无封口破、dealer 本子更进一步转成 +56.49M 阻尼器；只在一根决定性收破 flip/旧地板带、γ 翻负、加一记干净 SM 空上重武装 · cover-bounce scout 更进一步复活（funding 泄、retail 清、1h TD9 SELL 没了）但<em>不</em>武装——封顶未满足、SM 回补无法认定（artifact）、利率更进一步 false · 本子 FLAT</span>
            </h2>

            <p>
              <span className="dn-signal">
                争夺中的收复盘住了而非解决——两笔都没武装、且能武装 scout 的那一记信号变暗了，所以交易台第二天保持
                FLAT
              </span>
              。08-03 那篇把 chase-short 停下（invalidated）、把 scout 留在复活-但-受阻、等一根封顶收和一记 SM 回补。
              牛的封顶收（$64,614）和熊的地板破都没点火——价格盘在已结算 200W 上。scout 的下行堵路松了（funding 泄、
              retail 穿 60、1h TD9 SELL 没了），但它的上行确认仍缺（现货从未收封顶）、它的决定性信号<em>读不出来</em>
              （SM 回补约 100% 是 artifact）。所以本子保持 FLAT：chase-short invalidated（只在一记决定性破 + 干净 SM 空 +
              负 γ 上重武装）、scout 复活-但-未武装（只在一根封顶收 + 一记认定的 SM 回补上武装）、无新对冲——等一条干净
              SM 盘面和盘整的解决。
            </p>

            <div className="dn-trade">
              <span className="dn-side short">空 · chase · INVALIDATED · 无封口破、dealer 本子更进一步转成 +56.49M 阻尼器——空停下</span>
              <div className="dn-trade-name">
                Chase-short——仍 INVALIDATED：地板从未封口一记破（08-03 收 $63,497.20、守在旧地板 / flip 上方）、dealer 本子更进一步转成 +56.49M / +68.6M 阻尼器、且 SM 盘面本次<em>读不出来</em>——空第二天停下
              </div>
              <div className="dn-thesis">
                chase-short 的 edge 是一记封口的地板破、下方放大的负 γ、AND smart money 可验证地空。三条都不在手。
                地板破腿 INVALIDATED——周结算在 200W 上方（$63,550 &gt; $63,533）、08-03 日收 $63,497.20、一根<em>守</em>在
                旧 $63,311 地板和 $62,907 flip 上方的下收；低 $62,310.01 日内插破带但收复了、无日收封口在下方。γ 腿
                INVALIDATED、且对空比 08-03 更糟——本子更进一步转成 +56.49M rollup / +68.6M headline 阻尼器、现货在 flip
                上方 +1.00%，所以 dealer 更硬地阻尼一记向下破。SM 腿现在<em>读不出来</em>——表面回补约 100% 是 ~BJ-14:00
                artifact 分钟、剔除后 FLAT，所以交易台既不能说 SM 空（空的信号）也不能说在回补。空在其核心论点上被证伪、
                其确认盘面变暗；它停下。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">腿状态（2 证伪、1 读不出）</span><span className="dn-lvl-v bull">地板收破（INVALIDATED——周结算在上方、08-03 收 $63,497 在旧地板 / flip 上方；低 $62,310 插破但无收封口）· 放大的负 γ（INVALIDATED、更糟——本子转成 +56.49M / +68.6M 阻尼器、现货 flip 上方 +1.00%、前段 0DTE +5.75M）· SM 持空（读不出——表面回补约 100% artifact、剔除后 FLAT）</span></div>
                <div><span className="dn-lvl-k">什么会重武装空</span><span className="dn-lvl-v bear">一根<em>决定性</em>日收破 flip / 旧地板带（$62,907 flip / $63,311 旧地板）AND dealer 本子翻回负 γ（现货收回 flip 下方进一架负墙）AND 一记干净、认定的 SM 空（在未污染盘面上）——一记新破、在可读数据上、不是一根收复了的插针</span></div>
                <div><span className="dn-lvl-k">若重武装的结构图</span><span className="dn-lvl-v bear">一根决定性收破 $62,907 → 进负 γ → 向 $60k −22.51M crash-put；但多 carry 已 FLUSHED（194 根负 funding 行、retail sub-60），所以 08-03 那篇标的级联燃料大半用尽了——现在一记破背后困住的杠杆更少</span></div>
                <div><span className="dn-lvl-k">不要</span><span className="dn-lvl-v">这里不 chase-short——破没封口、它盘住了；不要在一记读不出的 SM 盘面上、对一记更强的正 γ 阻尼器空一记守住的地板——等一根决定性破 flip 下方、带干净 SM 数据和 γ 翻负</span></div>
              </div>
              <div className="dn-gating">
                <b>纪律：</b>chase-short 只在 SM 可验证地与你一起空、<em>进</em>一记封口破、且 γ 放大时才付钱。今天破没封口
                ——价格盘在地板上——γ 阻尼器加强、SM 盘面读不出，所以三条腿全 fail（两证伪、一暗）。这套装置不在旧线上重武装、
                而在一记新的、决定性破 flip/旧地板带、带负 γ AND 一记干净 SM 空上重武装。停下。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout · 更进一步复活但<em>不</em>武装 · funding 泄、retail 清、1h TD9 SELL 没了——但封顶未满足、SM 回补无法认定、利率更进一步 false</span>
              <div className="dn-trade-name">
                Cover-bounce scout——更进一步复活：下行堵路松了（funding 泄 194 负行、retail 穿 60、1h ⚡TD9 SELL 没了）——但它<em>不</em>武装，因为现货从未收 D-EMA50 封顶、SM 回补约 100% artifact（无法认定）、且利率筛更进一步 FALSE（10Y +7bp 到 4.75%）
              </div>
              <div className="dn-thesis">
                scout 的收复读继续复活：08-03 那篇标的两记下行堵路——一记 re-pin 的多 carry 和一记仍拥挤的 retail 多——
                本次都清了（funding 泄到 194 负行、retail de-crowd 穿 60 到 59.94），且 1h ⚡TD9 SELL 超买旗没了。金叉簇
                （1h/4h/8h/3d/1w）和 HTF 底背离簇（8h/12h/1w）保持完整、dealer 本子是一记封住下行的更强阻尼器。这是比
                08-03 实质更好的背景。但它的武装线不变——一根日收在 D-EMA50 封顶 $64,614 上方、需求主导流向、加一记<em>干净</em>
                在<em>回补</em>的 SM 读——今天两记确认信号仍缺：现货戳 $64,079.9 但从未收封顶（且最近 4h 回撤 −0.53%）、SM 回补
                <em>无法认定</em>（约 100% artifact、剔除后 FLAT）。利率腿也动错了方向（10Y +7bp 到 4.75%、筛现在 20bp FALSE）。
                所以 scout 比 08-03 更活、但仍卡在那两记要紧信号上——封顶收和一记可读的 SM 回补。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v bull">更进一步复活 · 下行堵路松了（carry 泄、retail 清、1h TD9 SELL 没了）——但<em>不</em>武装、未入场</span></div>
                <div><span className="dn-lvl-k">武装线 + 需要的确认</span><span className="dn-lvl-v bull">一根日收在 D-EMA50 封顶 $64,614 上方、需求主导 OI 扩张、加一记<em>干净</em>、认定在<em>回补</em>的 SM 读（不是 ~BJ-14:00 artifact）——flip/地板收复已完成、carry/拥挤堵路已清、剩的是封顶收和一记可读的 SM 回补</span></div>
                <div><span className="dn-lvl-k">堵路（今天为何停下）</span><span className="dn-lvl-v bear">现货从未收封顶（戳 $64,079.9、4h 回撤 −0.53%、在 $64,614 封顶下方 −1.67%）· SM 回补无法认定（约 100% artifact、剔除后 FLAT）· 利率筛 FALSE 且更糟、10Y 4.75%（差 20bp）· OI 收缩（仓位退、不是需求主导进）</span></div>
                <div><span className="dn-lvl-k">不要</span><span className="dn-lvl-v">这里不 scout long——不要在封顶未满足、SM 回补读不出时、只凭一记泄掉的 carry 就买一记封顶下方的盘整；flush 改善背景、但 scout 在封顶收 + 一记认定的 SM 回补上武装、不在封顶下方松掉的堵路上</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R（框架、非 live）：</b>一记 live 入场在 D-EMA50 封顶收约 $64,614、对一记收回收复地板带下方的止损约
                $63,300（约 $1,314 风险）、向下一簇日阻力 D-EMA100/D-SMA100 $67,094–$68,484（约 $2,480–$3,870 回报）
                ≈ 到下界 1.89:1 / 到上界 2.95:1——一记可接受的收复装置、<em>若</em>确认对齐。今天不对齐。<b>纪律：</b>scout 的
                edge 是一记穿封顶、在新需求上、SM 在可读盘面上转买的确认收复——不是一记封顶下方 carry flush 上的盘整。堵路
                松掉是真的、改善了赔率，但封顶收和一记认定的 SM 回补才是武装它的信号；一记封顶未满足、SM 盘面暗的盘整是比
                08-03 更好的装置、不是扳机。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 争夺中的收复盘在地板上——carry 泄、堵路松（牛）但封顶未满足、SM 盘面暗（无确认）：一记等干净盘面的盘整、不是可买的底或可空的破</span>
              <div className="dn-trade-name">
                争夺中的收复 → 抬升地板上的盘整——现货钉在已结算 200W 上、夹在头顶一记未满足的 D-EMA50 封顶和下方一记守住的 flip/旧地板带之间、多 carry 已泄但 SM 确认信号读不出、等一条干净 SM 盘面破局
              </div>
              <div className="dn-thesis">
                08-03 那道分叉没解决——争夺中的收复盘住了。价格 24h +0.16%（平）、钉在已结算 200W $63,533；它戳 $64,079.9
                （不及 $64,614 封顶）随后 4h 回撤 −0.53%、并插 $62,310.01（在带下方）然后收复。08-03 日收 $63,497.20——一根守在
                旧地板 / flip 上方的下收。牛侧改善了：多 carry FLUSHED（194 根负 funding 行对五天的 0）、retail 穿 60 到 59.94、
                1h TD9 SELL 没了、金叉 / HTF 底背离簇保持完整。熊侧被遏制：无封口破、dealer 本子一记更强的 +56.49M 阻尼器、大单-net
                翻正。但能拍板的本子变<em>暗</em>了——表面 SM 回补约 100% 是 ~BJ-14:00 artifact、剔除后 FLAT——所以 scout 的回补和
                chase-short 的空都无法认定。这读是一记收缩 OI 上的盘整、杠杆从两侧泄、等一条干净盘面。若一记可读的 SM 回补随一根
                D-EMA50 封顶收一起印出、scout 武装进 $67k–$68.5k 簇。若盘整在一记干净 SM 空 + γ 翻负上破掉 flip/旧地板带、chase-short
                向 $60k crash-put 重武装——虽然泄掉的 carry 留下更少级联燃料。破局的是一条干净 SM 盘面。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">牛解（收复确认）</span><span className="dn-lvl-v bull">一根日收在 D-EMA50 封顶 $64,614 上方、需求主导 OI 扩张、加一记<em>干净</em>、认定的 SM 回补 → scout 武装进 D-EMA100/D-SMA100 $67,094–$68,484 阻力簇</span></div>
                <div><span className="dn-lvl-k">熊解（盘整向下破）</span><span className="dn-lvl-v bear">一根<em>决定性</em>日收破 $62,907 flip / $63,311 旧地板带、带一记干净 SM 空和 γ 翻负 → 进负 γ 向 $60k −22.51M crash-put（carry 已泄、级联燃料比 08-03 少）</span></div>
                <div><span className="dn-lvl-k">拍板信号</span><span className="dn-lvl-v">先一条干净、未污染的 SM 盘面（~BJ-14:00 artifact 必须清），再 D-EMA50 封顶收 对 flip/旧地板破——不是本 session 两头都收复的日内插针</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>edge 是拒绝把一记盘整读过头——收复守住了地板、carry 泄了（真牛改善）但封顶未满足、SM 盘面暗
                （无确认），所以这是一记要等出去的盘整、不是可买的底或可空的破。谱系不在封顶下方只凭一记 flush 就 scout-long 一记
                盘整、也不在一记读不出的 SM 盘面上、对一记更强的正 γ 阻尼器 chase-short 一记守住的地板。它保持 flat、等一条干净
                SM 盘面加一根封顶收或一记决定性带破。谁先解决——在可读数据上——谁写下一篇。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 争夺中的收复盘在抬升地板上——封顶收和地板破都没解决 · scout 要的 SM 回补无法认定（约 100% artifact）· chase-short 仍 INVALIDATED（无封口破、更强阻尼器）· scout 更进一步复活（carry 泄、retail 清、1h TD9 SELL 没了）但受阻（封顶未满足、SM 暗、利率更进一步 false）· 本子 FLAT</span>
            </h2>

            <p>
              08-03 那张决策条件里：<em>D-EMA50 封顶收</em>、scout 的武装线、<em>没</em>印（现货戳 $64,079.9、不及 $64,614
              封顶、随后 4h 回撤 −0.53%）；<em>SM 回补-vs-加仓信号</em>、两笔都要的决定性读、变<em>读不出</em>（表面 +10,052 回补
              约 100% 是 ~BJ-14:00 artifact 分钟、剔除后 FLAT）；08-03 那篇标为级联燃料的<em>钉住多 carry</em> FLUSHED（194 根
              负 funding 行对五天的 0、retail 穿 60 到 59.94）；<em>chase-short 地板收破腿</em>仍 INVALIDATED（08-03 收 $63,497.20、
              守在旧地板 / flip 上方——$62,310 低插破但无收封口）；<em>chase-short 负 γ 腿</em>仍 INVALIDATED 且更糟（本子转成一记
              更强的 +56.49M / +68.6M 阻尼器、现货 flip 上方 +1.00%）；<em>reclaim-long 利率筛</em>更进一步 FALSE（10Y +7bp 到
              4.75%、现在离 4.55% 门 20bp）。<em>收复盘住了而非解决——carry 泄了、retail 群清了（scout 的下行堵路松了），但封顶仍
              未满足、SM 回补无法认定、利率动反了，所以 scout 更进一步复活却仍未武装、chase-short 仍 invalidated；本子保持 flat。</em>{' '}
              今天条件围绕一记抬升地板上的盘整、一记泄掉的 carry、一记清了的 retail 群、一记加强的 dealer 阻尼器、和一记卡在武装它的
              两记信号上的 scout——封顶收和一记可读的 SM 回补——重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>D-EMA50 封顶收（scout 武装线）</td><td className="bear">UNMET——现货戳一根 24h 高 $64,079.9（不及 $64,614 封顶）随后最近 4h 回撤 −0.53%；08-04 未收盘 close $63,543.30 在封顶下方 −1.66%</td><td>scout 的上行确认没印；无封顶收它不武装</td></tr>
                <tr><td>SM 回补-vs-加仓（决定性信号）</td><td className="stale">无法认定——表面 +10,052 回补到净 −8,995 约 100% 是一根可疑 +10,205 分钟（08-03 14:36 BJ、~BJ-14:00 re-sync）；剔除后 ΔNet −153.2（FLAT）</td><td>能确认 scout 或 chase-short 的盘面变暗；等一记干净 SM 读</td></tr>
                <tr><td>钉住多 carry（08-03 级联燃料旗）</td><td className="bull">FLUSHED——194 根负 funding 行（六天来首次、之前连续 5 天 0）、funding 离开 +10.95% 封顶到 +4.93% 均值；retail de-crowd 穿 60 到 59.94</td><td>scout 的下行堵路清了——再热的杠杆退了；一记真底条件满足</td></tr>
                <tr><td>Chase-short 地板收破（腿）</td><td className="bull">INVALIDATED——08-03 收 $63,497.20、<em>守</em>在旧 $63,311 地板和 $62,907 flip 上方；$62,310 低插破带但无日收封口</td><td>无破可 chase；只在一根决定性收破 flip/旧地板带上重武装</td></tr>
                <tr><td>Chase-short 放大负 γ（腿）</td><td className="bull">INVALIDATED / 更糟——本子转成 +68.6M headline / +56.49M rollup、现货 $62,907 flip 上方 +1.00%、前段 0DTE +5.75M</td><td>阻尼器加强；空需要 γ 翻负才重武装</td></tr>
                <tr><td>Cover-bounce scout 重武装</td><td className="bull">更进一步复活——carry 泄、retail 清、1h ⚡TD9 SELL 没了、金叉 / HTF 底背离簇完整；在一根 D-EMA50 封顶收 $64,614 + 一记干净 SM 回补上武装</td><td>比 08-03 更活但未武装——等封顶收和一记可读 SM 回补</td></tr>
                <tr><td>Reclaim-long 利率筛</td><td className="bear">FALSE / 更糟——10Y 4.75% &gt; 4.55%（差 20bp、今天 +7bp、比 08-03 的 13bp 更远）</td><td>scout 的确认之一、动错了方向；一道在拉宽的门</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是{' '}
              <span className="dn-signal">
                一记<em>干净</em>、可认定的 SM 回补是否终于随一根 D-EMA50 封顶收（$64,614）一起印出——那武装 scout 进
                $67k–$68.5k 阻力簇——还是盘整在一记干净 SM 空 + γ 翻负上破掉 $62,907 flip / $63,311 旧地板带、那向 $60k
                crash-put 重武装 chase-short；两者之间的一切都是交易台现在读的那记抬升地板上的盘整、带一条读不出的 SM 盘面
              </span>
              。08-03 那篇跟的争夺中收复没有解决——它盘在已结算 200W 上、戳不及封顶、并插破地板带后收复回平。牛侧改善了
              （钉住 carry 泄了、retail 穿 60、1h TD9 SELL 没了、金叉 / HTF 底背离簇守住）、熊侧保持遏制（无封口破、一记更强的
              +56.49M 阻尼器），但能拍板的本子变暗了：scout 要的 SM 回补约 100% 是 ~BJ-14:00 artifact、无法认定。chase-short 仍
              invalidated、停下；scout 在松掉的堵路上更进一步复活但在未满足的封顶和暗 SM 盘面上仍未武装；put-spread 不在一记加强的
              阻尼器里重建。BTC 落后了一条 NORMAL、risk-on 的跨资产盘面（指数 7d +2.7–3.3% 而 BTC 坐平）——一记 BTC 内部盘整、不是
              宏观事件。下一个 24–48h 的对读是{' '}
              <em>耐心——等一条<em>干净</em> SM 盘面（~BJ-14:00 artifact 必须清），再看 D-EMA50 封顶收 对 flip/旧地板破；不要在封顶
              下方只凭一记 flush 就买一记盘整、也不要在一记暗 SM 读上对一记更强的正 γ 阻尼器空一记守住的地板</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2 · 已过 codex 敌对式审计
            </span>
            <b>状态：</b>v2 EN 备忘——<b>已过 codex 敌对式审计</b>（判决 PASS-WITH-NOTES：0 CRITICAL、2 MAJOR、
            1 MINOR；见 audits/2026-08-04-desk-note.md）。STAGE C 应用了每一条 codex finding（MAJOR + MINOR）
            加上裁定过的 ask-deepseek 次级 minor，然后在 v1 → v2 前跑了强制的 grep-closure loop（搜索的模式 ·
            hits-before · hits-after）。<b>Finding 账本：</b>{' '}
            <em>DN-001（MAJOR——GEX 墙梯被低估）：</em>钉住的 btc_gex.html 面板暴露了一张签名 Top-10 Gamma Walls
            表，所以「完整签名逐 strike 墙梯不可干净抽取 / 内部定性描述」那记 caveat 被换成载入的墙梯（$70k +17.29M、
            $68k +12.45M、$67k +10.91M、$66k +10.90M、$64k +9.76M、$72k +8.73M、$65k +8.68M、$80k +7.71M 正；
            $62k −9.73M、$60k −22.51M 负），落在数据来源、§III roman、§III prose dn-em 和这记 caveat。搜索的模式：
            「not cleanly extractable」「described qualitatively」「price×IV density」「full signed per-strike」
            「only the two authoritative」「the interior is described」· hits-before 4 块 · hits-after 0（仅剩的
            「两个极值」命中是修正后的「映射了、不只是两个极值」prose）——<b>RESOLVED</b>。{' '}
            <em>DN-002（MAJOR——宏观行没对 22:15Z 面板）：</em>在表里重对齐 5Y5Y（regime z +1.13 → +1.28、episodic
            +2.18 → +2.17）、10Y breakeven（2.28% → 2.27%、Δ 约 0bp → −1.0bp、regime −0.64 → −0.78、episodic +1.63 →
            +1.19）、US-JP 利差（regime −0.32 → −0.08、episodic +1.40 → +1.92）、USD/CNY（Δ +0.00 → −0.00、regime
            −1.48 → −1.46、episodic −2.49 → −2.20），以及 breakeven prose（数据来源 + §IV）2.28% → 2.27%。搜索的模式：
            「+1.13」「+2.18」「2.28%」「~0bp」「−0.64」「+1.63」「−0.32」「+1.40」「−1.48」「−2.49」· hits-before 6 ·
            hits-after 0——<b>RESOLVED</b>。{' '}
            <em>DN-003（MINOR——MTF 单元格漏填）：</em>按钉住的 mtf_div_latest.html 把 1w TD 单元格设为「Buy 2」、1M RSI
            单元格设为「43.5」。搜索的模式：1w 行 TD「—」、1M 行 RSI「—」· hits-before 2 · hits-after 0——<b>RESOLVED</b>。{' '}
            <b>ask-deepseek 次级 minor（裁定、先重算再动）：</b>APPLIED——SM 对账（long 15,538.2 → 15,538.3 使
            15,538.3 − 24,534.1 = −8,995.8、真净 −8,995.821）；by-expiry strip 对账（显示分量汇总 +56.50M、精确 net_gex
            $56,492,041.90 = +56.49M rollup）；未收盘收偏移 −1.67% → −1.66%（仅在主语是 $63,543.30 收处；spot-vs-cap
            −1.67% 正确、不变）；Deribit-idx 除法 +1.465% → +1.466%（两处）；且 MA cross-block 主张改写、使微正的已结算
            W-SMA200（+0.001%）不再被「其余每一根日 / 周 MA 都负」矛盾（数据来源 + §I prose）。REJECTED——OI Δ −628.7
            保留：真 delta −628.671 取整到 −628.7（codex 确认干净）；端点 mis-foot 是取整噪声、−0.58% 不受影响。{' '}
            <b>作者标注、带进 v2 的数据质量 caveat：</b>{' '}
            <em>(1)</em> 本次 SM net 序列 DATA-IMPAIRED——一根可疑分钟步（+10,205.3 BTC @ 08-03 14:36 BJ、复发的
            ~BJ-14:00 feed re-sync）占表面 +10,052 净空回补的约 100%；剔除 artifact 后 ΔNet −153.2（FLAT），所以 SM 回补
            无法认定、全篇如此标注；{' '}
            <em>(2)</em> GEX 墙图现在从面板的签名 Top-10 Gamma Walls 表载入（按上面 DN-001），与 gex_summary.json 极值
            （$70k +17.29M / $60k −22.51M）一致；只有非 Top-10 内部余项没抽出、所以主张 held ≤ data；{' '}
            <em>(3)</em> GEX headline-vs-rollup 关系翻了（rollup +56.49M 现在<em>低于</em> headline +68.6M、08-03 是上方）
            ——约 12.1M 缺口按 DN-003 谱系披露；{' '}
            <em>(4)</em> ma200w_trap_watch_state.json sidecar 不作锚定源引用（可变、未在 00:07 锚存档）；200W 结算是一记
            独立 full-glob 重算；{' '}
            <em>(5)</em> 宏观渲染是 2026-08-03 22:15Z（比快照早约 1.87h），MOVE 连续第四次渲染不可用、Fed 净流动性 / DXY /
            USD-JPY 沿用。完整 <em>next build</em> 在本 host 未验证（Node 18.19.1 &lt; Next.js 20.9.0 门）；
            <em>tsc --noEmit</em> 是 build proxy。<b>已过 codex 敌对式审计。</b>
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体
            情况个性化。数字反映单一原子快照（2026-08-04 00:07Z）、
            provenance 在上方数据来源条带中按节披露；宏观 Tier-1 面板渲染
            2026-08-03 22:15Z（比快照早约 1.87h）、MOVE 连续第四次渲染不可用、
            Fed 净流动性行按周沿用，部分输入明确陈旧、不可用或待定并已标注。
            本篇是 v2 备忘、已过 codex 敌对式审计。水位、规模与条件是交易台
            流程的示例、不是长期推荐。过去的相关性、γ 与仓位模式不绑定未来
            盘面。衍生品有全损风险、加杠杆下损失可超过保证金。
            <em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                争夺中的收复盘在抬升的地板上——carry 泄了、retail 群清了，但封顶仍未满足、SM 回补在
                ~BJ-14:00 artifact 上变暗。chase-short 仍 invalidated；scout 更进一步复活但仍未武装。
                等一条干净 SM 盘面和盘整的解决。空仓、耐心。
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
            v2 · 2026-08-04 00:07Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet full-glob
            200W recompute（ma200w_trap_watch_state.json 未存档——不引用）·
            FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
