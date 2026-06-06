import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-06-06 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-06-06',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-06-06' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260606() {
  await requireViewer('/zh/desk/2026-06-06');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-06-06 · v2</span>
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
              <span className="dn-big">$59,646</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−5.41%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-06-06 04:34Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-06-06 04:34Z（snapshot pin 行、按 live_db `t` BJ-local 约定 = BJ 12:34 06-06）</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · pin 行 = `t == &ldquo;06-06 12:34&rdquo;`
                    （BJ-local、UTC 04:34Z）；审计时 live 文件已超过 pin ·
                    5JUN26 −9.61M 放大器在 08:00Z 06-05 干净结算掉、但同一
                    24h 内 6JUN26 −8.40M 一根全新的前段块替进来（今天
                    0.2 DTE、08:00Z 06-06 结算、距快照约 3h 26m）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-06 04:31Z scan（BJ 12:31、存档于 snapshots/2026-06-06-0434/）</td>
                  <td className="dn-flag">
                    滚动 latest 文件 · 读前已按 runbook §1 存档规则存档于
                    snapshots/2026-06-06-0434/（v2-NF-002 修复）· 较快照锚
                    滞后 3 分钟 · 含未收盘 K 线 · 多周期 ⚡ TD9 BUY 现在
                    四根并发跨 15m / 8h / 12h / 1d（06-05 是三根 ——
                    新加了 15m）+ 3d / 1M TD8 → 9? 再一根 close 即印 ——
                    六根周期框架 TD 印或待印对这一根超卖、是谱系上最
                    密的、比 06-05 多一根
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-06 04:06Z 快照（已存档）</td>
                  <td className="dn-flag">
                    存档于 snapshots/2026-06-06-0434/（v2-NF-002 修复）·
                    较快照锚陈旧 28 分钟 · Deribit idx $60,806 对
                    live $59,646（高 live $1,160 —— 谱系最大的 idx-vs-live
                    缺口、反映 28 分钟的文件滞后与一根活的盘面）· 1,044
                    合约（06-05 是 1,034；+10 净、5JUN 链清掉而 9JUN 近端
                    链上架）· 6JUN26 0.2 DTE −8.40M 是下一根结算（08:00Z
                    06-06、距快照约 3h 26m）；6JUN 这一根块是一根
                    <em>全新</em>的前段放大器、替进了同一 24h 内已解的
                    5JUN −9.61M 块 —— 所以 dealer 本子没拿到 06-05 备忘
                    曾经预想的「干净的前段衰减」
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-06 04:01Z（已存档）
                  </td>
                  <td className="dn-flag">滞后约 33 分钟 · 7d 1h bar · 22 资产 · 166 行 · regime 标仍 IDIOSYNCRATIC（均值 |r| 0.238、从 06-05 的 0.215 抬起 —— 往 0.25 NORMAL 阈值靠回、但还没跨）· BTC 头号对齐<em>轮动</em>到 SILVER +0.254（06-05 是 JP225 +0.162）、BTC↔NQ 对齐缩紧到 +0.129（前 +0.090）—— 但 7d 窗现在包含一段更广的 TradFi 抛售（NQ −5.35%、SP500 −2.74%、MSFT −9.24%）、所以这一档缩紧是共抛、不是共买</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-06 00:30Z 渲染（已存档）</td>
                  <td className="dn-flag">
                    渲染滞后约 4h 4m · <em>Tier-1 回线</em>在连续两次抓取
                    失败之后：US 10Y nominal 4.47%（−2bp）、10Y TIPS 2.11%
                    （平）、5Y5Y BE 2.24%（平）、NFCI −0.494（陈旧 8d）、Fed
                    净流动性 $5.834T（−0.038T —— 紧了）、US-JP 利差 1.95%
                    （−2bp）、USD/CNY 6.7650（对 06-05 备忘 −0.0080 ——
                    CNY 更硬）全部新印 · MOVE 当日 +4.04 到 75.2 · DXY 当日
                    +0.66 到 100.07（对 06-05 备忘 +0.64；偶发 z +2.33 ——
                    RISK-OFF 偶发）· HY OAS 收紧 −1bp 到 2.74%（闸现在
                    离触发 4bp、06-05 是 3bp —— 信用闸离触发<em>远了</em>
                    一步、06-05 的扩张没延续）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-06-06 04:06Z（btcusdt_1m_2024..2026 子集按 desk 政策 + 全历史参考）</td>
                  <td className="dn-flag">
                    较快照锚新 28 分钟 —— <em>等一下</em>：parquet 最末 bar
                    04:06Z 在 04:34Z 锚之前 28 分钟、所以对 live pin 是<em>
                    陈旧</em>28 分钟 · MA 源宇宙是 2024-2026 子集（127 根
                    周 bar）、按 06-02 审计 DN-005 desk 政策决议沿用 · 在
                    这个子集上 W-SMA150 / W-SMA200 不可计算（窗短于两个
                    窗口）；W-EMA150 / W-EMA200 能印、但按<em>seed</em>截断
                    线披露 · 全历史（2019-2026、353 根周 bar）加入做 200W
                    参考：W-SMA200 $61,794（按全历史口径、现在<em>高于</em>
                    现货 $2,148 / +3.60%、意味快照现货印在 200W 周期地板
                    下方 $2,148）· 偏移按 live 现货 $59,645.73 重算 · 06-03
                    审计 DN-006 把 live-pin 分母作为谱系沿用
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W watch（weekly_200sma.json）</td>
                  <td className="dn-v-cell">未写入（审计时服务器上文件缺失、自 06-05 沿用）</td>
                  <td className="dn-flag">
                    200W watch JSON 不可用 · 按 runbook §2 回落到全历史
                    parquet 计算：W-SMA200 = $61,794（全历史 353 周序列、
                    起 2019-09-08）；live 现货 $59,646 在 200W 下方 −3.48%
                    、按 SPOT 印 —— 但周期地板是周收盘、不是 spot、且当根
                    周 bar 还没收（06-05 日收 $61,022 在 200W 下方 $772、
                    06-06 在建中收 $60,490 在下方 $1,304）。如果这周末
                    一根 1w 收盘落在 $61,794 下方、那会是一次结构性 200W
                    地板破（历史上 1w 收盘 &lt; 200W 在约 9% 的周内出现、
                    集中在周期投降处）；按 runbook do-not-fabricate、缺
                    JSON 时不抛分位 / 破事件主张、只表面全历史 W-SMA200
                    水位 + 在建日收盘的差距
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED 月度 · IRLTLT01JPM156N</td>
                  <td className="dn-flag">陈旧 66d · 月度 · 不作实时</td>
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
              <span className="dn-v bull">−0.32%（快照接近平；24h 均值 −1.36% 深负）</span>
              <span className="dn-src">live · 24h 均值 ann <em>−1.36%</em>（06-05 是 +0.67% —— 一根 −2.03pt 的塌、转成谱系<em>首根负的 24h 均值</em>）· 封顶占用 0 / 1440 采样行（连续第三根封顶空的备忘 · 谱系封顶 regime 已结构性退役）· 负 funding 分钟 1,189 / 1,440 = <em>82.57%</em> 跨 24h 窗 —— 谱系最深的空付多 regime、是前一根（06-05 35.67%）的 2.3 倍 · 24h funding 谷 −3.92% ann @ 2026-06-05 10:40Z（BJ 18:40 06-05）· 峰 +1.67% ann @ 2026-06-05 05:32Z（BJ 13:32 06-05）；95.90% 的 24h 落在 +1% ann 下方、100% 落在 +2% ann 下方</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bull">+1.47% → −0.32%（−1.79pt、均值转负）</span>
              <span className="dn-src">区间 −3.92% / +1.67% · 最长一根连续空付多 streak 跑了 633 min / 10.55h、从 2026-06-05 06:18Z（BJ 14:18 06-05） → 2026-06-05 16:50Z（BJ 00:50 06-06）—— 杠杆门开宽到底、多头被空头连续付了 10 个小时多、谱系新极 · ≥4h 累计空付多闸单根连续 run 就已经超过约 2.6 倍</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">+2.31%（+2,307 BTC）</span>
              <span className="dn-src">live · OI <em>建</em>进现货下跌（自 05-30 以来谱系首根 24h OI 扩张）—— 99,708 → 102,015、24h 峰 105,668 @ 2026-06-05 16:11Z（BJ 00:11 06-06、扎进早亚投降插针的窗内）、24h 低 97,563 @ 2026-06-05 12:20Z（BJ 20:20 06-05）· SM long_btc +3,049、short_btc −797 —— 一边倒的多侧 BUILD 撞进 −5.41% 现货、全交易所 OI 建约 +2.3k 而非 SM 本子几乎没卸；这是抄底杠杆在插针里加</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bull">66.37 / 33.63</span>
              <span className="dn-src">live_db `mkt_long_pct` · 对 06-05 印泄 −1.99pt（是 66.62 → 68.36 在 24h 前；窗内峰 68.63 @ BJ 14:51 06-05；24h 区间 65.81 / 68.63 —— retail 拥挤多在插针上略松、但多侧仍在 05-31 下腿前谷 60.35 上方 5pt；这是二阶冷却、不是真清仓）</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−39.4k（净 SHORT；多侧同时 visible 与 structural BUILT）</span>
              <span className="dn-src">live · long 15.44k − short 54.86k · short_btc 窗内峰 59,175 @ 2026-06-05 06:31Z（BJ 14:31 06-05）—— 仍在 06-03 谱系高 60,729 下方、随后泄 −4,628 进快照；long_btc 窗内峰 <em>17,254 @ 2026-06-05 20:16Z（BJ 04:16 06-06）—— 一根全新谱系多侧高</em>（06-03 谱系高 18,293 在头上、今天 17,254 在下方；但 06-05 周期锚谷的谱系高是 13,090、今天 17,254 是下腿启动以来的最高 long_btc、从周期锚谷加了 +4,164 BTC 的多 build）；SM net 谷 −46,033 @ 2026-06-05 06:41Z（BJ 14:41 06-05）—— 接近但没到 06-04 谱系谷 −46,686</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 06-05 备忘</span>
              <span className="dn-v bull">−44.5k → −39.4k（+5,036 少空；long +4,181、short −855）</span>
              <span className="dn-src">|Δ|/prior_net = 11.33%（5,036/44,462）· 本子明确转向少空、靠多侧 BUILD —— 在这条 06-05 → 06-06 链上、下腿谱系上首根干净的一边倒多堆（06-01 / 06-02 / 06-03 / 06-04 是一边倒空堆；05-31 / 06-05 是两侧 shrink；今天是 06-01 周期锚破以来的首根一边倒多堆）· 谱系签名从延空转向了多侧抄底、但现货在这个形上跌了 −5.41% —— 多侧在加的时候被惩罚</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v bear">52.5% / 37.05%</span>
              <span className="dn-src">GEX IV 中位数 · 1,044 合约（06-05 是 1,034 · +10 净、5JUN 链清而 9JUN 近端链上架）· IV 在插针上 <em>JUMP</em> +5.6pt（06-05 是 46.9%）· 30D RV 扩 +2.12pt 到 37.05%（前 34.93%）随 06-05 −2.83% 收盘把一根比均值更深的日 ret 印进 30 日窗 · IV/RV 缝<em>扩</em>到约 +15.45pt（前 +11.97pt 在 06-05 —— +3.48pt 扩、IV 跑过 RV 抬升、链在结构性重定向前 RV 更高</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bear">−6.48%（在下方；live 现货参考）</span>
              <span className="dn-src">flip $63,778（06-05 是 $66,509 · 落 −$2,731 —— 谱系上单根备忘最大 flip 落）· 对 live 现货 $59,645.73（−6.48%；59,645.73 / 63,778 − 1 = −6.479%）· 对 GEX 文件 Deribit idx $60,806（−4.75%；60,806 / 63,778 − 1 = −4.659%、对得上文件自己 dist-to-flip tile −4.7%）—— 两参考都负、live-现货缝<em>扩</em>到谱系新极（前 06-05 是 −4.17%；前 06-04 是 −5.08% 谱系前极）、Deribit-idx 缝因 28 分钟文件滞后在活的盘面里比文件自己的 tile 略宽 · aggregate GEX 深化到 −53.5M（06-05 是 −39.5M、一根 −$14.0M 结构性恶化 —— 谱系新极、超过 06-04 −52.9M 前极 −$0.6M）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                5JUN 结算没干净解 —— dealer 本子在同一 24h 内加了一根
                全新的 6JUN 前段放大器、现货在印上丢了 200W 周期地板、
                杠杆本子印出谱系最深的空付多 regime、是前一根的 2.3 倍、
                而多头在插针里抄底
              </span>
              。aggregate GEX 走{' '}
              <span className="dn-tag bear">−39.5M</span> →{' '}
              <span className="dn-tag bear">−53.5M</span>（一根 −$14.0M
              的结构性恶化到谱系新极）、0-γ flip 落{' '}
              <span className="dn-tag">$66,509 → $63,778（−$2,731）</span>
              （单根备忘最大 flip 落）、现货{' '}
              <span className="dn-tag bear">$59,646 在 flip 下方
              −6.48%</span>、按 live 现货口径（06-05 是 −4.17%、06-04 前
              谱系极 −5.08% —— 谱系新极）；GEX 文件自己的 Deribit idx
              参考读{' '}
              <span className="dn-tag bear">−4.75%</span>、对它的 $60,806
              idx、文件自己 tile 给 −4.7%。06-05 那一篇预想 5JUN −9.61M
              块会结算掉、解后 aggregate 落在约 −29.9M；实际发生的是
              5JUN 块在 08:00Z 06-05 干净结清（块从 strip 上清掉）、
              但一根全新的{' '}
              <span className="dn-tag bear">6JUN26 0.2 DTE −8.40M</span>
              {' '}块在前段冒出来（08:00Z 06-06 结算、距快照约 3h 26m）、
              12JUN 块深化到{' '}
              <span className="dn-tag bear">−8.82M（前 −7.37M）</span>、
              19JUN 深化到{' '}
              <span className="dn-tag bear">−6.49M（前 −5.43M）</span>、
              26JUN 月度深化到{' '}
              <span className="dn-tag bear">−25.23M（前 −22.92M）</span>、
              $60k 崩盘 put 墙加厚到{' '}
              <span className="dn-tag bear">−27.31M（前 −20.86M、+$6.45M
              更重、随价格撞进 strike）</span>。日线收盘{' '}
              <span className="dn-tag bear">06-04 $63,853 / 06-05
              $61,022</span>（06-05 收 06-04 下方 $2,831 —— 下腿在 06-04
              一根静的回调后、06-05 重新延伸）、在建 06-06 印在 parquet
              最末 bar（04:06Z 收{' '}
              <span className="dn-tag bear">$60,490</span>）、live 现货{' '}
              <span className="dn-tag bear">$59,646</span> —— 连续六根
              日收落在周期锚下方、06-05 收在 06-06 在建收下方 $1,304
              （仍在掉）。06-05 框架对第六根周期延续印的 watch{' '}
              <span className="dn-em">没触发</span>：BJ 15:41 06-05
              （UTC 07:41 06-05）候选分钟只有一道小回补（Δnet +315、
              15:00–16:00 窗最大单分钟 |Δnet| 333）、BJ 13:00–16:30
              窗漂 −673 净总、无一根单根离散步 ≥ ±2k。周期延续框架{' '}
              <span className="dn-em">已 CLOSED-VINDICATED 五根印
              加第六根 test 干净失败</span> —— 日历节奏正式退役；未来
              Shape-B 印只作信息性 watch 留下。
            </p>

            <p>
              BTC 报 <span className="dn-tag">$59,646</span> live、
              <span className="dn-tag bear">−5.41%</span> 24h —— 自 06-02
              的 −6.53% 收盘以来最大的 24h 现货落、三天 06-03/04/05
              整理之后的首根实质延伸。24h 区间{' '}
              <span className="dn-tag">$63,622 / $59,154</span>（高 @ BJ
              13:00 06-05 / UTC 05:00 06-05、低 @ BJ 03:18 06-06 / UTC
              19:18 06-05 —— 高印在窗的第一分钟、低印在窗中段的晚 NY
              时段、是一种稳渗形、不是 06-04 / 06-05 那种早亚插针）。
              24h 低 <span className="dn-tag bear">$59,153.51</span> 是
              谱系低、领先很大（前低是 06-04 $61,461；这根印深 −$2,308
              / −3.75%）。现货也在印上 <em>丢</em>了 200W 周期地板：{' '}
              <span className="dn-signal">
                全历史 W-SMA200 是 $61,794（自 2019 的 353 周序列）；
                live 现货 $59,646 在 200W 下方 −3.48%、按 SPOT 印、
                06-05 日收 $61,022 在下方 $772、在建 06-06 收 parquet
                最末 bar $60,490 在下方 $1,304 —— 如果一根 1w 收落在
                $61,794 下方、200W 地板这周末就结构性破
              </span>
              。周期锚本身现在头顶约 $13.4k：D-SMA100 $73,025
              （−18.32%）、最近的四根 MA（W-SMA20 $72,496 / D-SMA20
              $72,393 / D-SMA100 $73,025 / D-EMA50 $73,662）压成头顶
              $1.3k 紧簇 —— 但这一簇本身离现货 ~$12.7k–$14.0k。整张
              日线与周线阶梯都在头顶、比 06-05 又下踏三层 +。{' '}
              <span className="dn-em">
                结构性背景在每一根杠杆 AND dealer 侧的读上都深化：OI
                建 +2,307 BTC（下腿启动以来首根 24h 扩张）、funding 均值
                转负到 −1.36%（谱系首根负的 24h 均值）、funding 在 82.57%
                的窗内为负（前 06-05 35.67% —— 深 2.3 倍）、最长一根单
                负 streak 跑 10.55h（前 06-05 7.47h）、gamma 深化 −$14.0M
                到谱系新极、IV 跳 +5.6pt 随链向更高 forward RV 重定价、
                多头加 +3,049 BTC 撞进一根 −5.41% 的印。这是 06-05 那
                篇留作尾部风险的「去杠杆-再压缩」形 —— dealer 本子
                剩余 −$29.9M 的投影没扛过 6JUN 块的加入、$60k 崩盘 put
                区从 −20.86M 深化到 −27.31M、随价格碰到它。
              </span>
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面 · 本子印出这条 06-05 → 06-06 链上下腿谱系首根干净的一边倒多堆 · OI 自 05-30 以来首根扩张 · funding 均值首根转负 · 第六根印节奏 test 在 BJ 15:41 06-05 失败（周期延续框架正式退役）</span>
            </h2>

            <p>
              <span className="dn-signal">
                仓位本子在 −5.41% 插针里多侧 RE-LEVERAGED —— 这条
                06-05 → 06-06 链上下腿谱系首根一边倒多堆
              </span>
              。SM net 是 <span className="dn-tag">−39,426</span>、对
              06-05 备忘的 −44,462 —— 也就是{' '}
              <span className="dn-em">+11.33% 少空</span>{' '}
              （|−39,426 − (−44,462)| / 44,462 = 11.33%）、按 cut-fraction
              口径是单根备忘最大的 SM net 移动。分量一边倒：long_btc{' '}
              <span className="dn-tag bull">11.26k → 15.44k（+4.18k）</span>
              、short_btc{' '}
              <span className="dn-tag">55.73k → 54.86k（−0.86k）</span>。
              多侧建的强度是空侧 cover 的 4 倍、一根干净的一边倒多堆形。
              24h 窗内：long_btc Δ <span className="dn-tag bull">+3,049</span>
              、short_btc Δ <span className="dn-tag bull">−797</span>、
              net Δ <span className="dn-tag bull">+3,845</span>（+3,049 −
              (−797) = +3,846、对 −39,426 − (−43,271) = +3,845 直接 net
              diff 有舍入噪声）。窗内本子跑出非对称极端：short_btc 峰{' '}
              <span className="dn-tag bear">59,175 @ 2026-06-05 06:31Z
              （BJ 14:31 06-05）</span> —— 仍在 06-03 谱系高 60,729 下方、
              此后泄 −4,628 进快照；long_btc 峰{' '}
              <span className="dn-tag bull">17,254 @ 2026-06-05 20:16Z
              （BJ 04:16 06-06）</span> —— 在 06-03 谱系高 18,293 下方、
              但是 06-01 周期锚破以来最高的 long_btc 读、从下腿谷加了
              +4,164 BTC 的多 build。SM net 谷{' '}
              <span className="dn-tag bear">−46,033 @ 2026-06-05 06:41Z
              （BJ 14:41 06-05）</span> —— 接近但没到 06-04 谱系谷
              −46,686。{' '}
              <span className="dn-em">
                谱系签名从延空（06-01 / 06-02 / 06-03 / 06-04）翻面到
                多侧抄底（今天）—— 但现货在这个形上跌了 −5.41%：多侧
                在加的时候被惩罚、正是均值回归 long scout 要的 cover
                反弹形的反面。
              </span>
            </p>

            <p>
              <span className="dn-signal">
                周期延续框架的第六根印节奏 test 在 BJ 15:41 06-05 候选
                分钟干净失败 —— 日历节奏正式退役
              </span>
              。06-05 备忘点出一根更紧的日历钉、UTC 07:41 / BJ 15:41
              （从节奏灰烬里冒出的、06-03 / 06-04 同一分钟连续两根印）。
              今天的 BJ 15:41 06-05 候选分钟印出{' '}
              <span className="dn-tag bull">Δnet +315</span>（long Δ −144、
              short Δ −459 —— 一道小回补、不是 Δshort &gt; 0 + Δlong
              &lt; 0 的敌对-2 签名）、BJ 15:00–16:00 窗总 Δnet +1,305、
              最大单分钟 |Δnet| 333（BJ 15:46 06-05 印）、更宽 BJ
              13:00–16:30 窗漂{' '}
              <span className="dn-tag">Δnet −673</span> 总、无一根单分钟
              |Δnet| ≥ 2k。五根印链停在 06-04 07:41Z；今天的同分钟候选
              干净没触发。{' '}
              <span className="dn-em">
                周期延续框架是 CLOSED-VINDICATED 在五根印加第六根 test
                干净失败。原本的 BJ 13–15 节奏在 05-31 已经被证伪；
                今天 BJ 15:41 备用钉的失败把日历节奏整个退役。未来重堆
                敌对-2 签名印出来时仍然是有意义的盘面读 —— 但只在
                no-calendar 基础上、正好是 05-31 框架重述设立的形。
              </span>
            </p>

            <p>
              杠杆侧是这一根备忘上 regime 延续最大声的信号。{' '}
              <span className="dn-signal">
                funding 均值在 24h 上谱系首次转负 —— −1.36% ann、其中
                82.57% 的窗负
              </span>
              ：live <span className="dn-tag">−0.32% ann</span> 在快照
              （前面跑深了一整天后接近平）、24h 区间{' '}
              <span className="dn-tag">−3.92% / +1.67%</span>、谷点{' '}
              <span className="dn-tag bull">−3.92% ann @ 2026-06-05
              10:40Z（BJ 18:40 06-05）</span> —— 谱系新谷（06-05 谷是
              −3.14%、今天 −3.92% 是谱系上最深的空付多幅度记录）。
              24h 均值 ann <span className="dn-tag">−1.36%</span>
              （对 06-05 的 +0.67% —— 一根 −2.03pt 的塌、谱系首根负的
              24h 均值）。封顶占用{' '}
              <span className="dn-tag bull">0 / 1440 采样行（0.0%）</span>
              （06-05 是 0/1441 —— 封顶连续第三根备忘空、谱系封顶
              regime 已结构性退役）；最长一根连续空付多 streak 跑了{' '}
              <span className="dn-tag bull">633 min / 10.55h</span> 从
              2026-06-05 06:18Z（BJ 14:18 06-05） → 2026-06-05 16:50Z
              （BJ 00:50 06-06）—— 对 06-05 streak 7.47h、今天 +3.08h
              更长、所以 ≥4h 累计空付多闸单根连续 run 就清出约 2.6 倍。
              分钟 Δ <span className="dn-tag">482 上 / 487 下 / 470 平</span>
              （跨 1,440 根 1440-row 窗的分钟到分钟间隔）。OI Δ{' '}
              <span className="dn-tag bear">+2,307 BTC（+2.31%）</span>
              跨 24h —— <span className="dn-em">下腿启动以来首根 24h OI
              扩张</span>（谱系是 06-01 到 06-05 连续 shrink、累计
              ~−9k BTC）。OI 建进插针：24h 峰{' '}
              <span className="dn-tag bear">105,668 @ 2026-06-05 16:11Z
              （BJ 00:11 06-06）</span> —— 24h 低现货是 28 分钟后
              （$59,154 @ BJ 03:18 06-06、现货低对应 OI 峰附近）、
              所以 OI 加 <em>集中</em>进早亚插针窗。24h 低 OI{' '}
              <span className="dn-tag bull">97,563 @ 2026-06-05 12:20Z
              （BJ 20:20 06-05）</span> 印在 06-05 晚整理段、插针之前。
              retail <span className="dn-tag">mkt_long_pct 66.37%</span>
              从 68.36% —— 对 24h 前泄 −1.99pt、对 06-05 备忘 (66.62%)
              泄 −0.25pt、但仍在前下腿谷 60.35%（05-31）上方 5pt；
              这是二阶冷却、不是真清仓。perp 对现货{' '}
              <span className="dn-tag bear">−$4.24 折价</span>在快照
              （1h 均 −$30.92、4h 均 −$26.18；24h 均 −$46.96、区间
              −$361.54 / +$149.99 —— 06-05 晚那一根插针后的缓和反弹里
              basis 短暂转正、随后再回负）。1 分钟 aggressor skew 快照{' '}
              <span className="dn-tag bull">+6.90</span>（1h 均 −4.28、
              区间 −30.30 / +20.70）—— 快照分钟一道温和买攻、但 1h
              是均衡的。
              <span className="dn-em">
                OI 建进插针 + funding 均值负 + 多头一边倒加 + 现货跌
                −5.41% + 谱系封顶 regime 保持退役：这是<em>多侧再压缩</em>
                + 下跌盘面、是 05-31 后那种 cover 形的反面。杠杆本子
                在跌之前抄底加仓、不是在跌之前 unwinding。
              </span>
            </p>

            <p>
              窗口流向是<em>三窗口现货 CVD 持续净卖、期货 CVD 混色、
              整 24h 大单净卖加快照分钟一小时一道温和买盘反射</em>。
              24h：价格 <span className="dn-tag bear">−5.41%</span>、OI{' '}
              <span className="dn-tag bear">+2,307 BTC</span>、现货 CVD{' '}
              <span className="dn-tag bear">Δ −2,482</span>（24h 窗内
              没检测到 cb_cvd reset、不需校正）、期货 CVD{' '}
              <span className="dn-tag bear">Δ −2,046</span>、大单{' '}
              <span className="dn-tag bear">−1,697 BTC / 346 笔</span>、
              taker-net <span className="dn-tag bear">−2,046</span> ——{' '}
              <span className="dn-em">
                现货 AND 期货在 24h 上都净卖、OI 同时在 BUILD；−5.41% 是
                在净卖撞进多侧 OI 加上印出、正是抄底形被惩罚的样子 ——
                多头加进跌势、现货一直在掉、大单保持净卖
              </span>
              。4h（进快照）：价格 <span className="dn-tag bear">−2.82%</span>
              、OI <span className="dn-tag bear">+389 BTC</span>、现货 CVD{' '}
              <span className="dn-tag bear">Δ −1,896</span>、期货 CVD{' '}
              <span className="dn-tag bear">Δ −597</span>、大单{' '}
              <span className="dn-tag bear">−102 BTC / 34 笔</span>、
              taker-net <span className="dn-tag bear">−597</span> ——{' '}
              <em>4h 延续了 24h 形 —— 全字段净卖、OI 仍轻扩 —— 快照窗内
              没反射买盘</em>。1h：价格 <span className="dn-tag bear">
              −1.51%</span>、OI <span className="dn-tag bear">+339 BTC</span>
              、现货 CVD <span className="dn-tag bear">Δ −903</span>、
              期货 CVD <span className="dn-tag bull">Δ +68</span>、大单{' '}
              <span className="dn-tag bull">+57 BTC / 12 笔</span>、
              taker-net <span className="dn-tag bull">+68</span> ——{' '}
              <em>1h 在快照分钟级别给出小一道期货与大单买盘反射
              （+57 BTC 大单净跨 12 笔、轻期货买盘）、但现货仍被压
              （−903 cb_cvd）、OI 仍在扩 —— 没干净的 cover 形、快照
              分钟反射是一根印的信号、对三窗口持续卖盘</em>。24h 形
              不含糊：−5.41% 是在整窗净卖跨现货 + 多侧 OI 建 + 大单
              净卖上印出、是下腿谱系上最干净的一根定向投降流。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 图 · 多周期 ⚡ TD9 BUY 现在四根并发跨 15m / 8h / 12h / 1d（比 06-05 三根更密一根）+ 3d / 1M TD8 → 9? 待印 · 周期框架 RSI 在单位数边缘的极端（8h 14.3、1d 14.6、12h 14.9）· 周期锚丢 · 200W 周期地板在 spot 上丢</span>
            </h2>

            <p>
              <span className="dn-signal">
                MTF 图<em>深化</em>到四根并发 ⚡ TD9 BUY —— 15m 加入
                8h / 12h / 1d 那一堆 —— 周期框架 RSI 在单位数边缘
                的极端、谱系上无对照
              </span>
              。06-05 那一根扫描点出 ⚡ TD9 BUY 在 8h / 12h / 1d 同时
              （三根周期框架）；今天 04:31Z 的扫描三根全留下、再加
              15m 作第四根并发印、3d / 1M 都仍 TD8 → 9? 再一根 close
              即印 —— 六根周期框架 TD 印或待印对这一根超卖、是谱系上
              最密的、比 06-05 多一根。慢周期仍空头：{' '}
              <span className="dn-tag bear">3d 水上死叉走到 3 bar</span>
              、12h{' '}
              <span className="dn-tag bear">水下死叉 19b</span>、8h{' '}
              <span className="dn-tag bear">水下死叉 14b</span>、4h{' '}
              <span className="dn-tag bear">水下死叉 29b</span>、1d{' '}
              <em>云下 5b</em>（↑ $73.9k 头顶）。RSI 在周期框架上深超卖：
              8h <span className="dn-tag bull">14.3</span>（前 06-05 15.5
              —— 谱系新极单位数边缘）、1d{' '}
              <span className="dn-tag bull">14.6</span>（前 18.3 —— 新极）
              、12h <span className="dn-tag bull">14.9</span>（前 19.7 ——
              新极）、4h <span className="dn-tag bull">23.8</span>
              （前 28.4）、3d <span className="dn-tag bull">28.8</span>
              （前 32.3 —— 谱系首根落 30 下方）、1w 32.2（前 34.5 ——
              深化）—— 每一根周期框架都 RSI &lt; 35、三根{' '}
              <em>跌破 15</em>。引擎框架混色：1h RSI 37.0（云下、卖侧）、
              30m 35.3、15m 28.5 —— 引擎在 15m 上加入超卖读（这根帧
              快照新谱系低）。{' '}
              <span className="dn-em">
                直读：这是谱系上最密的超卖反弹簇、比 06-05 多一根 ——
                四根并发 ⚡ TD9 BUY 跨引擎到周期堆（15m、8h、12h、1d）
                + 两根再一根 close 待印（3d、1M）、三根周期框架 RSI 印
                跌破 15。设置在结构上是缓和反弹的教科书、但周期锚仍在
                头顶 ~$13.4k、200W 周期地板在印上丢 —— 没有第三条
                cover 反弹腿（1h 重夺新 $63,778 flip 区上方）的 TD9-only
                入场是 chase、06-03 的均值回归 long scout 仍按第三条
                腿在重定向的拐点线上闸着。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">59,812</td><td className="num bull">28.5</td><td className="neut">死叉（水上）20b</td><td className="bear">云下 ↑60.7k 2b</td><td>⚡ TD9 BUY</td><td>BULL reg</td></tr>
                <tr><td>30m</td><td className="num">59,851</td><td className="num bull">35.3</td><td className="bear">死叉（水下）1b</td><td className="bear">云下 ↑61.5k 46b</td><td>Buy 6</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">59,812</td><td className="num">37.0</td><td className="bull">金叉（水下）7b</td><td className="bear">云下 ↑63.2k 119b</td><td>Buy 5</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">59,839</td><td className="num bull">23.8</td><td className="bear">死叉（水下）29b</td><td className="bear">云下 ↑72.4k 68b</td><td>Buy 7</td><td>—</td></tr>
                <tr><td>8h</td><td className="num">59,844</td><td className="num bull">14.3</td><td className="bear">死叉（水下）14b</td><td className="bear">云下 ↑75.3k 63b</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">59,839</td><td className="num bull">14.9</td><td className="bear">死叉（水下）19b</td><td className="bear">云下 ↑77.2k 29b</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">59,851</td><td className="num bull">14.6</td><td className="neut">—</td><td className="bear">云下 ↑73.9k 5b</td><td>⚡ TD9 BUY</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>3d</td><td className="num">59,851</td><td className="num bull">28.8</td><td className="neut">死叉（水上）3b</td><td className="bear">云下 ↑74.0k 1b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">59,851</td><td className="num">32.2</td><td className="bull">金叉（水下）7b</td><td className="bear">云下 ↑100.3k 18b</td><td>Buy 3</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">59,839</td><td className="num">41.2</td><td className="neut">—</td><td className="bull">云上 ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 2026-06-06 04:31Z scan
                    （滚动 latest 文件、读前已按 runbook §1 存档规则
                    存档于 snapshots/2026-06-06-0434/mtf_div_latest.html
                    —— v2-NF-002 修复）。scan 较 04:34Z 快照锚陈旧 3 分钟。
                    头部告警：<em>多周期 ⚡ TD9 BUY 跨 15m / 8h / 12h / 1d
                    同时</em>、<em>3d / 1M TD8 → 9? 一根 close 待印</em>、
                    <em>30m 水下死叉 1b（刚印）</em>。scan 现货 $59,868、
                    24h −5.29%、H/L $63,675 / $59,080、24h qVol $28.56B
                    （谱系第二重 qVol、仅次于 06-05 的 $27.27B、确认延续
                    的投降流）。收盘为未收盘 K 线；每个值在各周期收盘前
                    都按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵确认同一根头顶读、整张阶梯比 06-05 又下踏三层 +。
              现货 $59,646 坐{' '}
              <span className="dn-tag bear">D-SMA100 $73,025 下方
              −18.32%</span> —— 周期锚、日线阶梯上距离最低的一根、但
              现在重夺要走 ~$13.4k（06-05 是 ~$9.4k）。最近的四根头顶
              MA 压成 $1.3k 紧簇、但这一簇本身坐在现货上方
              ~$12.7k–$14.0k：D-SMA20{' '}
              <span className="dn-tag bear">$72,393（−17.61%）</span>、
              W-SMA20 <span className="dn-tag bear">$72,496（−17.73%）</span>
              、D-SMA100 <span className="dn-tag bear">$73,025（−18.32%）</span>
              、D-EMA50 <span className="dn-tag bear">$73,662（−19.03%）</span>
              。剩下的按水位顺序：D-EMA20{' '}
              <span className="dn-tag bear">$70,655（−15.58%）</span>{' '}
              （坐在 W-SMA20 簇下方 —— 滚动 20-day EMA 把 06-05 收盘
              picked up 快）、{' '}
              <span className="dn-tag bear">D-SMA150 $75,086（−20.56%）</span>、
              <span className="dn-tag bear">D-EMA100 $75,173（−20.66%）</span>、
              <span className="dn-tag bear">D-SMA50 $76,050（−21.57%）</span>、
              <span className="dn-tag bear">W-EMA20 $76,079（−21.60%）</span>、
              <span className="dn-tag bear">D-EMA150 $77,586（−23.12%）</span>、
              <span className="dn-tag bear">D-SMA200 $78,613（−24.13%）</span>、
              <span className="dn-tag bear">D-EMA200 $80,077（−25.51%）</span>。
              更高更远、按 2024-2026 子集不用：W-EMA100 种子 $82,772
              （−27.94%）、W-EMA50 种子 $83,828（−28.85%）、W-SMA100
              $88,376（−32.51%）、W-SMA50 $92,561（−35.56%）。{' '}
              <span className="dn-signal">
                200W watch JSON 本快照不在服务器上（runbook
                `weekly_200sma.json` 仍缺失 —— 谱系沿用）；按 runbook §2
                回落到全历史 parquet 计算、表面出这根备忘的结构性读：
                全历史 W-SMA200（自 2019-09-08 的 353 根周 bar）是
                $61,794、所以 live 现货 $59,646 在 200W 周期地板下方
                −3.48%、按 SPOT 印
              </span>
              。06-05 日收 $61,022 已经在下方 $772、在建 06-06 收 parquet
              最末 bar $60,490 在下方 $1,304。周期地板是周收盘、不是
              spot —— 但在建周 bar 这周末需要在 $61,794 或上收、才能
              避免一根正式的 200W 地板破。历史上一根 1w 收 &lt; 200W
              在约 9% 的周内出现、集中在深周期投降处；按 runbook
              do-not-fabricate、缺 JSON 时不抛分位 / 破事件主张、只
              表面全历史 W-SMA200 水位 + 在建日收盘的差距。{' '}
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-06-06 04:06Z（close
                $60,489.70）；偏移按 live 现货 $59,645.73 直算（按 06-03
                审计 DN-006 决议：live-pin 分母按谱系沿用；parquet-邻
                收 $60,489.70 在 live pin 上方 $844、所以这根备忘的
                parquet-vs-live 缺口比典型更宽 —— parquet 最末 bar 在
                活的盘面里落锚 28 分钟、所以对 parquet 平面做偏移会
                读浅约 1.4pt；live-pin 偏移是谱系沿用约定）。日线收盘：
                05-30 $73,857、05-31 $73,653、06-01 $71,392、06-02
                $66,730、06-03 $64,118、06-04 $63,853、06-05 $61,022、
                06-06 在建 $60,490 —— 连续六根深周期锚下方、06-05 收
                是全历史 200W $61,794 下方的首根。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子 DEEPENED 到净空 γ aggregate −53.5M（前 −39.5M、谱系新极、超过 06-04 前极 −52.9M −$0.6M）· flip 落 −$2,731 到 $63,778（现货在下方 −6.48% —— 谱系新极）· $60k 崩盘 put 墙加厚到 −27.31M（前 −20.86M、+$6.45M 更重、随价格碰到 strike）· 6JUN26 0.2 DTE −8.40M 是一根 24h 内全新的前段放大器（替进了 5JUN −9.61M 块、那根干净结清）· 26JUN 月度深化到 −25.23M（前 −22.92M）· 12JUN 深化到 −8.82M（前 −7.37M）</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子恶化到谱系新极、flip 落出谱系单根备忘最大
                的步、$60k 崩盘 put 墙在价格碰到 strike 上急剧加厚 ——
                5JUN 后的预想没扛过前段一根全新的 6JUN 放大器加入
              </span>
              。aggregate GEX 是{' '}
              <span className="dn-tag bear">−53.5M / 1%</span>（前 06-05
              −39.5M —— 一根 −$14.0M 的结构性恶化、谱系新极、超过 06-04
              −52.9M −$0.6M）；本子结实地净空 γ（放大）、06-05 +$13.4M
              的改善被完全反转还多。0-γ flip 移动{' '}
              <span className="dn-tag">$66,509 → $63,778（−$2,731）</span>
              {' '}—— 谱系单根备忘最大 flip 落（对 06-05 −$1,288 步）。
              两个 dist-to-flip 参考（按 06-02 审计 DN-007 沿用）：
              live-现货参考{' '}
              <span className="dn-tag bear">−6.48%</span>（59,645.73 /
              63,778 − 1 = −6.479%）；GEX 文件 Deribit-idx 参考{' '}
              <span className="dn-tag bear">−4.75%</span>（60,806 / 63,778
              − 1 = −4.659%、对得上文件自己 dist-to-flip tile −4.7%）。
              live-现货参考比 Deribit-idx 参考宽 −1.73pt、是因 GEX 文件
              较 live 锚陈旧 28 分钟、Deribit idx 在 live 现货上方
              $1,160 —— 谱系最大的 idx-vs-live 缺口、反映一根活的盘面
              穿过文件的滞后。两参考都负；live-现货参考是谱系新极
              （对 06-04 −5.08% —— 谱系前极、对 06-05 −4.17%）。
            </p>

            <p>
              墙图随 strip 在插针上重定价、明确下移：$60k 崩盘 put 区
              加厚到{' '}
              <span className="dn-tag bear">$60k −27.31M</span>（前
              06-05 −20.86M、+$6.45M 更重 —— 现在在现货 $59,646 上方
              $1,354、所以现货已经 wick<em>穿过</em>$60k strike、墙
              现在是头顶向下的、不是头顶向上的）。其余头部墙：{' '}
              <span className="dn-tag bear">$55k −10.74M</span>（前
              −6.99M —— 深化 −$3.75M、崩盘 put 走廊延伸下移）、{' '}
              <span className="dn-tag bull">$80k +8.50M</span>（最重正
              头顶墙、但比 06-05 +11.66M 小 —— 上行阻尼极冷却明显）、
              <span className="dn-tag bear">$62k −7.21M</span>（前 06-05
              −10.40M —— 松了、随价格穿过 strike）、
              <span className="dn-tag bear">$50k −6.91M</span>（前
              −5.25M —— 深化、崩盘 put 走廊向下延伸）、
              <span className="dn-tag bear">$58k −6.89M</span>（前
              −4.51M —— DEEPENED、一根全新负墙在现货下方）、
              <span className="dn-tag bear">$59k −4.27M</span>（一根新
              负墙正在现货 $59,646 处）、
              <span className="dn-tag bear">$61k −4.19M</span>（前大致平）、
              <span className="dn-tag bear">$65k −3.88M</span>（前 06-05
              −13.09M —— 松了 −$9.21M、strike 在价格落到下方后完全解掉）、
              <span className="dn-tag bear">$64k −3.41M</span>（前
              −6.92M —— 松了、随价格穿过）。$50k–$65k 负簇现在合计
              约 <span className="dn-em">−74.81M 的 dealer 放大</span>
              （列出墙合计：−6.91 − 10.74 − 6.89 − 4.27 − 27.31 − 4.19
              − 7.21 − 3.41 − 3.88 = −74.81M；对 06-05 −73.9M 同区段
              簇 —— 基本平、但权重<em>轮动</em>：06-05 是 $65k 墙是第二
              重；今天 $60k 墙是单根主导块、$65k 已经松到小读）。本根
              备忘的载重读是{' '}
              <span className="dn-signal">
                $60k 墙加厚 $6.45M 随价格碰到 strike —— dealer 本子在
                strike 上加 gamma、而不是让它漏掉；现在现货在 strike
                下方 $1,354、墙仍 −27.31M、$60k 从现货下方的支撑磁石
                翻面到任何缓和反弹的头顶向下阻力位
              </span>
              。6JUN26 0.2 DTE{' '}
              <span className="dn-tag bear">−8.40M</span> 在今天 08:00Z
              印结算（距快照约 3h 26m）；解后 ex-6JUN aggregate 约
              −53.5M − (−8.40M) = −45.1M、仍结实净空 γ、但比 −53.5M
              谱系极有意义地走开。5JUN26 −9.61M 块<em>是</em>在 08:00Z
              06-05 干净结清（块从 strip 上清掉、不再列出）、但 6JUN
              块是一根<em>全新</em>的前段放大器、在同一 24h 内冒出
              —— 所以 dealer 本子没拿到 06-05 备忘预想的「干净的前段
              衰减」、06-05 投影的解后 aggregate ≈ −29.9M 现在对实际
              −53.5M 差 −$23.6M 宽。{' '}
              <span className="dn-em">
                放大器没走：5JUN 清掉而 6JUN 同窗替进、12JUN 深化到
                −8.82M（前 −7.37M）、19JUN 深化到 −6.49M（前 −5.43M）、
                26JUN 月度 DEEPENING 到 −25.23M（前 −22.92M）、25SEP
                翻负到 −1.27M（前 +0.79M）、31JUL 从 +3.31M 弱到 +1.06M。
                前向 strip 在几乎每一根有日期的块上都恶化；长尾段（28AUG
                / 25DEC / 26MAR27）维持边际正、但每一根都弱。
              </span>
            </p>

            <p>
              IV 中位数跨 1,044 合约是{' '}
              <span className="dn-tag bear">52.5%</span>（从 06-05 的
              46.9% / 1,034 合约抬起 —— 一根 +5.6pt vol 跳、随插针印
              + 链向更高 forward RV 重定价）对 30D close-to-close RV{' '}
              <span className="dn-tag bear">37.05%</span>（前 34.93%、
              扩 +2.12pt、随 06-05 −2.83% 收把一根比均值更深的日 ret
              印进 30 日窗）—— 链级 richness{' '}
              <span className="dn-tag bear">~+15.45pt</span>（对 06-05
              ~+11.97pt —— 一根有意义的 +3.48pt 扩、IV 跑过 RV 抬升；
              链在结构性重定向 forward RV 更高、是谱系最强的 IV-RV
              扩信号）。是 N 合约的链中位数、<span className="dn-em">
              不是</span>可交易价差；expiry- / strike-level vega、skew、
              期限结构仍未载入、vol 读法保持 framework only。1,044 合约
              今天对 06-05 的 1,034 —— 基本平的链宽度；5JUN 0.3DTE
              −9.61M 在 08:00Z 06-05 清掉、一根全新的 9JUN 近端链上架、
              +10 净合约。RV 方法：30D close-to-close、logret.std × √365
              × 100、用最末 30 根日 log return（= 连续 31 根日 close）、
              锚自 parquet 最末 bar 2026-06-06 04:06Z；底层 31-close
              窗现在跨 $60,490 – $82,178。参考：最末 29 returns / 30
              closes 读 37.46%；页面值 37.05% 来自 30 returns。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · Tier-1 回线在连续两次抓取失败之后 —— 10Y 4.47%（闸距触发 6bp、新印）、TIPS 2.11% RISK-OFF、NFCI −0.494、Fed 流动性 $5.834T（−0.038T 紧了）全部新印 · HY OAS 收紧 −1bp 到 2.74%（闸往触发远 4bp、对 06-05 3bp —— 06-05 扩张没延续）· DXY 当日 +0.66 到 100.07（偶发 z +2.33 —— RISK-OFF 偶发）· MOVE +4.04 到 75.2（债波跳）· BTC-vs-TradFi 脱钩收窄到 −11.82pt（前 −13.44pt）—— 因 TradFi 卖（NQ −5.35%）比 BTC 停延伸更多</span>
            </h2>

            <p>
              <span className="dn-signal">
                Tier-1 在连续两次抓取失败之后回线、宏观读是一道混色但
                主要 risk-off 的脉搏：HY OAS 收紧 −1bp（闸往触发远、
                06-05 扩张没延续）、10Y 当日略低到 4.47%、但 DXY 当日
                +0.66 到 100.07（偶发 z +2.33 —— RISK-OFF 偶发）、MOVE
                债波 +4.04 跳到 75.2、Fed 净流动性紧了 −0.038T 到
                $5.834T
              </span>
              。面板渲染 2026-06-06 00:30Z、比快照早 4h 4m。在连续两次
              抓取失败后 Tier-1 面板印出全部新：US 10Y nominal{' '}
              <span className="dn-tag bull">4.47%（−2.0bp）</span>、
              regime z <span className="dn-tag bear">+1.56</span>、偶发 z{' '}
              <span className="dn-tag">+0.14</span> —— RISK-OFF 标、闸现在
              距触发 6bp（对 06-05 沿用 4.47% / 6bp）；利率侧闸距离自
              06-03 last-clean 不变。10Y TIPS real{' '}
              <span className="dn-tag bear">2.11%（平）</span>、regime z{' '}
              <span className="dn-tag bear">+1.75</span>、偶发 z{' '}
              <span className="dn-tag">+0.95</span> —— RISK-OFF、实际利率
              水位比 06-03 沿用更硬（2.07% → 2.11%）。5Y5Y BE 通胀{' '}
              <span className="dn-tag">2.24%（平）</span> —— 自 06-03
              沿用松了（2.26%）。HY OAS{' '}
              <span className="dn-tag bull">2.74%（−1.0bp）</span>、
              regime z <span className="dn-tag bull">−1.14</span>、偶发 z{' '}
              <span className="dn-tag bull">−0.80</span> —— RISK-ON 标
              仍在、信用通道当日 TIGHTENED −1bp、所以闸往触发远（现在
              距 2.78% 阈值 4bp、对 06-05 3bp；06-05 的 +4bp 扩没延续、
              信用通道守住）。NFCI{' '}
              <span className="dn-tag">−0.494（+0.01）</span> —— 抓取失败
              后的新印、陈旧 8d、基本对 06-03 last-clean 平。Fed 净
              流动性 <span className="dn-tag bear">$5.834T（−0.038T）</span>
              {' '}—— 新印、对 06-03 沿用 $5.872T 紧了 −$0.038T（三次
              渲染里的首根新流动性印、它紧了一点）。MOVE 债波{' '}
              <span className="dn-tag bear">75.2（+4.04）</span> —— 当日{' '}
              <em>JUMP</em> +4.04（对 06-05 73.6 → +1.6pt 步）、仍 regime
              「neutral」按 z、但这一步是谱系单日最大债波跳。DXY{' '}
              <span className="dn-tag bear">100.07（+0.66 daily；+0.64
              对 06-05 备忘 99.43）</span>、regime z{' '}
              <span className="dn-tag bear">+1.78</span>、偶发 z{' '}
              <span className="dn-tag bear">+2.33</span> —— RISK-OFF 偶发
              （在 +1.5 偶发阈值上方、谱系最强 DXY 硬）、100.00 重夺；
              USD/JPY <span className="dn-tag bear">160.29（+0.30 daily；
              +0.25 对 06-05 备忘 160.04）</span>；US-JP 10Y 利差{' '}
              <span className="dn-tag bull">1.95%（−2.0bp）</span> —— 紧
              了、抓取失败后的新印；USD/CNY{' '}
              <span className="dn-tag bull">6.7650（对 06-05 备忘
              6.7730 −0.0080、CNY 更硬）</span>。JGB 10Y 陈旧 66d 在
              2.52%（陈旧计数从 06-05 的 64d → 今天 66d 长、无新月度印）。{' '}
              <span className="dn-em">
                净：信用通道守住（HY OAS 闸往触发远）、利率闸守住 06-03
                距离（6bp）、但 DXY/MOVE 这一对今天印出一道有意义的
                risk-off 脉搏 —— DXY 偶发 z +2.33 是美元侧谱系新极、
                MOVE +4.04 是谱系单日最大债波跳。今天宏观对 BTC 下腿
                的贡献是通过美元 + 利率 vol 通道（DXY 硬 + MOVE 跳）、
                <em>不</em>是信用（信用略紧）。reclaim-long 利率筛
                （10Y &lt; 4.55%）在 4.47% 仍新验证 TRUE。BTC-vs-TradFi
                脱钩这根印收窄到 −11.82pt（BTC −17.17% vs NQ −5.35%）、
                从 06-05 的 −13.44pt —— +1.62pt 缩缝、这次是因 TradFi
                卖得更狠、不是因 BTC 停延伸；轮动是共抛 regime、不是
                共买
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
                <tr><td>US 10Y nominal</td><td className="num">4.47%</td><td className="num bull">−2.0bp</td><td className="num bear">+1.56</td><td className="num">+0.14</td><td className="bear">紧、当日松 · 抓取失败 2 次后新印 · 闸距触发 6bp</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.11%</td><td className="num">0.0bp</td><td className="num bear">+1.75</td><td className="num">+0.95</td><td className="bear">紧 · 仍 RISK-OFF · 抓取失败后新印</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.24%</td><td className="num">0.0bp</td><td className="num">+0.09</td><td className="num bull">−0.88</td><td className="neut">无标 · 抓取失败后新印</td></tr>
                <tr><td>HY OAS</td><td className="num bull">2.74%</td><td className="num bull">−1.0bp</td><td className="num bull">−1.14</td><td className="num bull">−0.80</td><td className="bull">松 · risk-on · 闸往触发远 4bp（前 06-05 3bp）；06-05 扩没延续</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.494</td><td className="num">+0.01</td><td className="num">+0.72</td><td className="num">−0.01</td><td className="neut">紧 · 陈旧 8d · 抓取失败后新印</td></tr>
                <tr><td>MOVE 债波</td><td className="num bear">75.2</td><td className="num bear">+4.04</td><td className="num">−0.10</td><td className="num">+0.30</td><td className="bear">按 z 中性 · 谱系单日最大跳</td></tr>
                <tr><td>DXY</td><td className="num bear">100.07</td><td className="num bear">+0.66 daily（+0.64 对 06-05 备忘）</td><td className="num bear">+1.78</td><td className="num bear">+2.33</td><td className="bear">RISK-OFF 偶发 · 偶发 z 在 +1.5 上方 · 100.00 重夺 · 谱系新 DXY 硬</td></tr>
                <tr><td>Fed 净流动性</td><td className="num bear">$5.834T</td><td className="num bear">−0.038T</td><td className="num">−0.12</td><td className="num bear">−2.29</td><td className="bear">紧了一点 · 三次渲染里首根新流动性印</td></tr>
                <tr><td>USD/JPY</td><td className="num bear">160.29</td><td className="num bear">+0.30 daily（+0.25 对 06-05 备忘）</td><td className="num bear">+1.36</td><td className="num bear">+1.43</td><td className="bear">日元更弱 · 偶发 z 在 +1.0 上方</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num bull">1.95%</td><td className="num bull">−2.0bp</td><td className="num bull">−0.85</td><td className="num">+0.14</td><td className="bull">紧了 · 抓取失败后新印</td></tr>
                <tr><td>USD/CNY</td><td className="num bull">6.7650</td><td className="num bull">−0.01 daily（−0.0080 对 06-05 备忘）</td><td className="num bull">−1.84</td><td className="num bull">−1.46</td><td className="bull">无标 · 松 · CNY 比前备忘更硬</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">+17.0bp（月度 · 陈旧 66d）</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">月度 · 不依赖 · 陈旧计数长（前 06-05 64d → 今天 66d）</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、166 行、汇总 04:01Z ——{' '}
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。
              非对角线均值 <span className="dn-tag">|r| 0.238</span>
              （较 06-05 的 0.215 抬起、往 0.25 NORMAL 阈值靠回、但仍在
              IDIOSYNCRATIC 段 —— regime 标没翻、|r| 要跨 0.25 才能重
              标 NORMAL）。BTC 列出的对齐跨宏观 leads 都广泛紧、头号
              对齐再轮动：SILVER <span className="dn-tag">+0.254</span>
              （现在 BTC 最强列出对齐、06-05 是 JP225 +0.162 —— 又是
              一根金属/风险资产轮动）、TSLA{' '}
              <span className="dn-tag">+0.195</span>、SP500{' '}
              <span className="dn-tag">+0.185</span>（前 +0.117 —— 紧了）、
              COPPER <span className="dn-tag">+0.184</span>、GOLD{' '}
              <span className="dn-tag">+0.182</span>（在 05-31 是 +0.300、
              06-05 落到较低 rank、现在回来）、PLAT{' '}
              <span className="dn-tag">+0.163</span>、NVDA{' '}
              <span className="dn-tag">+0.158</span>、NGAS{' '}
              <span className="dn-tag">+0.152</span>、MSFT{' '}
              <span className="dn-tag">+0.151</span>、URNM{' '}
              <span className="dn-tag">+0.150</span>、META{' '}
              <span className="dn-tag">+0.142</span>、NQ{' '}
              <span className="dn-tag">+0.129</span>{' '}
              <span className="dn-em">（前 +0.090 —— 紧了到第 12 rank、
              从 12、但绝对值升了约 +0.04、因 BTC 和 NQ 这周都一起卖）</span>
              、JP225 <span className="dn-tag">+0.118</span>（前 +0.162
              —— 从头位落出来）。7d 表现：{' '}
              <span className="dn-tag bear">BTC −17.17%</span>（自 06-05
              的 −13.42% 延伸 −3.75pt —— 7d 窗现在包含 06-05 −2.83% 收
              和 06-06 在建 −5.41% 插针）、NQ{' '}
              <span className="dn-tag bear">−5.35%</span>{' '}
              <span className="dn-em">（前 06-05 +0.02% —— NQ 在一根
              备忘里 rolled −5.37pt、是一道实质 TradFi 卖）</span>、
              SP500 <span className="dn-tag bear">−2.74%</span>（前
              −0.02% —— rolled）、JP225{' '}
              <span className="dn-tag bear">−2.43%</span>（前 +2.05% ——
              rolled 狠）、NVDA <span className="dn-tag bear">−5.29%</span>
              （前 +1.15% —— 翻负）、META{' '}
              <span className="dn-tag bear">−7.21%</span>、MSFT{' '}
              <span className="dn-tag bear">−9.24%</span>（前 +0.09%
              —— 延伸明显）、AMZN <span className="dn-tag bear">−9.63%</span>
              （前 −7.09%）、TSLA <span className="dn-tag bear">−10.51%</span>
              （前 −5.27% —— 延伸）。金属广泛软：GOLD{' '}
              <span className="dn-tag bear">−4.83%</span>、SILVER{' '}
              <span className="dn-tag bear">−10.16%</span>、PLAT{' '}
              <span className="dn-tag bear">−8.14%</span>、PALL{' '}
              <span className="dn-tag bear">−11.39%</span>、COPPER{' '}
              <span className="dn-tag bear">−3.19%</span>、URNM{' '}
              <span className="dn-tag bear">−10.11%</span>。能源是
              <em>唯一</em>正资产类：CL{' '}
              <span className="dn-tag bull">+4.08%</span>（前 +5.06% ——
              冷却但仍上）、BRENT{' '}
              <span className="dn-tag bull">+3.34%</span>、NGAS{' '}
              <span className="dn-tag bear">−1.40%</span>（翻负）。{' '}
              <span className="dn-em">
                BTC 对 TradFi 引擎的 7d 落后收窄到约 −11.82pt（BTC
                −17.17% vs NQ −5.35%）、从 06-05 的 −13.44pt —— +1.62pt
                缩缝、但这次<em>因为</em> TradFi 卖了（NQ −5.37pt、SP500
                −2.72pt、MSFT −9.33pt 周对周、对 06-05 读法）、不是
                因为 BTC 停延伸（BTC 在 7d 窗里又深 −3.75pt）。轮动是
                CO-SELLING regime、不是共买；脱钩读保持 endogenous-to-crypto
                在方向上、但宏观盘面加入了下行。均值 |r| 在 0.238（往
                NORMAL 靠）、BTC 列出的对 TradFi leaders 的对齐仍全部
                在 +0.20 下方 —— 跨资产信号在 BTC 盘面上结构性仍
                idiosyncratic、但缺口在收因为大家一起在卖
              </span>
              。JGB 月度 2.52% 带 EXTREME RISK-OFF 月度标 —— 不依赖。
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · runner / put-spread 尾 / cover 反弹 scout / 周期延续框架状态不变 · 均值回归 long scout REFRAMED（leg-3 拐点从 $68k 到 $63,778 flip —— 重算 R/R 过了 1.5:1 闸、但触发还没印；仍 NON-ACTIONABLE）· 本快照无新交易</span>
            </h2>

            <p>
              <span className="dn-signal">
                06-05 框架 watch 干净印出：5JUN 结算如期解（块从 strip
                上清掉）、第六根周期延续印在 BJ 15:41 候选分钟没触发
                （节奏正式 dead）、谱系上最密的 TD9 BUY 簇又深化一根
                （15m 加入 8h / 12h / 1d 那一堆）—— 但现货在这个背景下
                跌了 −5.41%、dealer 本子恶化到谱系新极、所以即便结构
                设置在位、本快照无 scout 入场
              </span>
              。05-31 来的 cover 反弹 scout 保持 DROPPED —— 周期锚现在
              头顶 ~$13.4k（前 06-05 ~$9.4k）、三条腿仍要（锚重夺 AND
              dealer-book 修复 AND cover 形）、dealer-book 修复腿今天
              结构性<em>反转</em>（gamma 深化 −$14.0M 回谱系极）。
              runner 和 29MAY put-spread 尾保持已平不变。空头框架 watch
              保持前一根 CLOSED-VINDICATED —— 而今天 BJ 15:41 候选分钟
              第六根印干净失败、把闭合干净 vindicates（日历钉上无活
              加入）。06-03 来的均值回归 long scout 仍两条 promotion 腿
              清出（多周期 TD9 BUY 堆 DEEPENED 到四根并发 + 3d/1M 待印、
              funding 累计空付多 regime DEEPENED 到 10.55h 单根连续 +
              82.57% 的 24h 负 + 谱系首根负的 24h 均值）、但第三条腿
              （1h 重夺结构性拐点上方）随 flip 落到 $63,778 移位：06-05
              备忘的 ~$68k leg-3 线现在头顶 ~$8.4k、但新 0γ flip 在{' '}
              <span className="dn-tag bull">$63,778</span> 是今天盘面
              上更近的结构性拐点线、如果触发能给一道可交易 R/R。{' '}
              <span className="dn-signal">
                Reframing leg-3：一根 1h close &gt; flip $63,778 + OI
                仍在建是今天盘面上正确的结构性拐点；重算的 R/R 在
                $63,778 触发 / $59,154 止损（24h 投降低）/ $73,025 首
                目标（周期锚）读 $4,624 风险 / $9,247 回报 = 2.00:1、
                明显在 desk 1.5:1 闸上方
              </span>
              。Scout 保持 NON-ACTIONABLE 因为 leg 3 没印 —— 但如果
              印的话 R/R 现在能算、是对 06-05 在更旧的 $68k 拐点线上
              0.78:1 读法的一根有意义改变。本根备忘的交易本子在 live
              size 上不变（无）；desk 在一根四根印 TD9 BUY 簇、谱系
              最深空付多 regime、一根全新一边倒多 build、与一个恶化
              到谱系极的 dealer 本子上保持纪律。
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">已平 · 主仓 · runner 阶梯完成 · 在 29MAY 08:00Z 到期结算上平（自 06-05 沿用状态不变）</span>
              <div className="dn-trade-name">
                破位延伸空 —— 在 29MAY 08:00Z 到期结算上平（对 06-05 不变）
              </div>
              <div className="dn-thesis">
                状态不变。回顾读法继续 vindicate 闭合：05-30 / 05-31
                日收（$73,857 / $73,653）标记两天的放大器后回弹、然后
                06-01 破（$71,392）、06-02 dumped（−6.53%）、06-03 延伸
                （−3.91%）、06-04 几乎平（−0.41%）、06-05 又延伸
                （−4.43% 收对收到 $61,022）、今天在建 06-06 收 $60,490
                又在 06-05 下方 $532 —— 下腿在 06-03/04 静段后 06-05
                重新延伸、今天还在掉。重入路径仍是一根全新结构性设置、
                不是滚续。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">在 05-29 08:00Z 平（放大器结算）· 无残余仓位 · 对 06-05 不变</span></div>
                <div><span className="dn-lvl-k">不要</span><span className="dn-lvl-v">在谱系最深空付多 regime、谱系上最密 TD9 BUY 簇、一根全新一边倒多 build、200W 周期地板在 spot 上破、三根周期框架 RSI 印跌破 15 上、不要 chase 重入空 —— 空侧在这一根腿上结构性 exhausted、即便 dealer 本子更差</span></div>
              </div>
              <div className="dn-gating">
                <b>交易已平。</b>审计周期纪律守住：不滚、不平均、不晚
                层加 —— 即便 dealer 本子恶化、仓位侧与技术侧的读现在
                在谱系极、反对加新空。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">DROPPED · scout · 周期锚丢四 + 层下 · 头顶 ~$13.4k、所有腿无进展 · dealer-book 修复腿今天结构性反转</span>
              <div className="dn-trade-name">
                Cover 反弹 scout —— DROPPED 不变（周期锚现在收盘上头顶 ~$13.4k；dealer-book 修复腿反转 −$14.0M 到谱系极）
              </div>
              <div className="dn-thesis">
                自 06-05 状态不变。周期锚仍丢、头顶带在收盘上 ~$13.4k
                （D-SMA100 $73,025 vs 在建 06-06 收 $60,490）；cover
                反弹路径的三条腿（锚重夺 AND dealer-book 修复 AND cover
                形流）在价格平面上都无进展。dealer-book 修复腿结构性
                <em>退化</em> —— gamma 深化到 −53.5M（谱系新极、06-05
                是 −39.5M）、flip 落 −$2,731（谱系单根备忘最大 flip
                落）、$60k 崩盘 put 墙加厚到 −27.31M（前 −20.86M、
                +$6.45M 更重、随价格碰到 strike）。cover 形流腿也没印
                —— 24h 现货 CVD −2,482、大单 −1,697、OI 在 BUILD；这是
                scout 要的 cover 形的反面。Cover 反弹路径上的多重入
                要求价格平面上一道结构性拐点、本根备忘看不到；下方的
                均值回归 long scout 是另一根设置、key 在超卖反转簇上。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">scout 状态</span><span className="dn-lvl-v">DROPPED（不变）· 周期锚丢四 + 层下 · 现货现在比重算 D-SMA100 $73,025 低 ~$13.4k</span></div>
                <div><span className="dn-lvl-k">重入闸（沿用；价格平面退化）</span><span className="dn-lvl-v bull">1d 收 &gt; D-SMA100 $73,025 AND aggregate GEX 翻 &gt; 0 AND 1h cover 形印（OI 缩 + 现货 CVD 买 + SM short_btc 泄）—— 三条腿、价格上没一条在进展；dealer-book 修复腿今天结构性<em>反转</em>（gamma −$14.0M 到谱系极）</span></div>
                <div><span className="dn-lvl-k">这里不入多</span><span className="dn-lvl-v bear">不要把四根并发 TD9 BUY 簇当 cover 反弹买 —— 这是下方均值回归 scout 设置、不是 cover 反弹设置；cover 反弹路径无论超卖反转簇多密、都按锚重夺闸着</span></div>
              </div>
              <div className="dn-gating">
                <b>交易已 drop（不变）。</b>下方的均值回归 long scout
                是另一根 key 在超卖反转 exhausted 上的设置；cover 反弹
                路径按锚重夺闸着。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">CLOSED-VINDICATED · 空 scout · 框架 watch · 第六根印节奏 test 在 BJ 15:41 06-05 失败（小 cover +315、窗内最大 |Δnet| 333）· 日历节奏正式退役</span>
              <div className="dn-trade-name">
                破锚空 scout —— CLOSED-VINDICATED（闭合确认：第六根印节奏 test 在 BJ 15:41 06-05 候选分钟干净失败 —— 日历节奏正式 dead）
              </div>
              <div className="dn-thesis">
                06-05 v1 叙事把这一根 watch 升到 CLOSED-VINDICATED 在
                五根印；今天盘面干净确认闭合。BJ 15:41 06-05 候选分钟
                （06-03 和 06-04 同一根印的同分钟）印出{' '}
                <span className="dn-tag bull">Δnet +315</span>（long Δ
                −144、short Δ −459 同分钟 —— 一道小 cover、不是 Δshort
                &gt; 0 + Δlong &lt; 0 敌对-2 签名）；BJ 15:00–16:00 窗
                总 Δnet +1,305、最大单分钟 |Δnet| 333（BJ 15:46 06-05）；
                更宽 BJ 13:00–16:30 窗漂 Δnet −673、无一根单分钟 |Δnet|
                ≥ 2k。五根印链停在 06-04 07:41Z。周期延续框架现在
                完全退役于日历 —— 未来 Shape-B 签名仅作信息性、
                no-calendar 盘面读留下。Desk 在五根印中任一根都未 size、
                按审计 DN-001 沿用。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">第六根印节奏 test（今天失败）</span><span className="dn-lvl-v bull">BJ 15:41 06-05 候选分钟印 Δnet +315（小 cover、无敌对-2 签名）；BJ 15:00–16:00 窗总 Δnet +1,305；窗内最大 |Δnet| 333 在 BJ 15:46；BJ 13:00–16:30 更宽窗漂 −673、无一根单分钟 ≥ 2k 步 —— BJ 15:41 备用钉 dead</span></div>
                <div><span className="dn-lvl-k">五根印链（已闭）</span><span className="dn-lvl-v">05-30 06:01Z Δnet −5,569 → 06-01 06:16Z −3,137 → 06-02 06:46Z −6,621 → 06-03 07:41Z −7,177（谱系极）→ 06-04 07:41Z −5,591 → 06-05 第六根 test 失败</span></div>
                <div><span className="dn-lvl-k">处置</span><span className="dn-lvl-v">CLOSED-VINDICATED 由今天第六根印节奏 test 的干净失败确认 · 框架 call 按自己的条款完整 · desk 不会在四根并发 TD9 BUY 簇、最深空付多 regime、首根负 24h funding 均值、200W 周期地板丢在 spot 上、三根周期框架 RSI 印跌破 15、与一根全新一边倒多 build 上 chase 重入空</span></div>
                <div><span className="dn-lvl-k">框架下一步</span><span className="dn-lvl-v">未来重堆敌对-2 签名（Δshort &gt; 0 + Δlong &lt; 0 同分钟）印出来时仍是有意义的盘面读、但只在 no-calendar 基础上 —— 正是 05-31 框架重述设立的形</span></div>
              </div>
              <div className="dn-gating">
                <b>状态：</b>CLOSED-VINDICATED 确认。{' '}
                <b>硬规则：</b>不在一根周期延续日历节奏干净失败、技术
                侧读在谱系极、多侧仓位本子在插针里抄底的盘面上重入空；
                未来任何重武装要求一根全新设置起点（不是这张卡片的滚续）。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">已平 · 宏观尾 · 在 29MAY 08:00Z 结算上平（自 06-05 沿用状态不变；信用闸往触发远 4bp、06-05 spike 没延续；利率侧闸 4.47% / 距触发 6bp 新验证）</span>
              <div className="dn-trade-name">
                下行 put-spread —— 在 29MAY 08:00Z 结算上平；不滚（信用闸往触发远、06-05 扩张没延续；10Y 闸新印在 4.47% / 距触发 6bp）
              </div>
              <div className="dn-thesis">
                仓位状态不变、但闸距离移位了。宏观 re-grow 闸在信用
                上动了（HY OAS 2.74%、闸现在距触发 4bp —— 当日 TIGHTENED
                −1bp、06-05 +4bp 扩没延续、信用通道守住）、在利率上
                印新（10Y nominal 4.47% 在连续两次抓取失败后、闸仍
                距触发 6bp —— 对得上 06-03 last-clean 沿用水位）。
                reclaim-long 利率筛（10Y &lt; 4.55%）在 4.47% 仍新验证
                TRUE。信用闸往触发远 1bp（3bp → 4bp）—— 06-05 用语
                「一根强势 session 远」在方向上对、但闸守住；今天闸
                又往远走一根 session。本快照无新对冲、因 BTC 内部周期
                阶梯破已经做了结构工作、前段合约 gamma 随 6JUN 放大器
                加入<em>再生</em>、四根并发 TD9 BUY 簇 + 谱系首根负
                24h funding 均值倾向多侧反弹 watch、不是一根新的下行
                对冲。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">在 05-29 08:00Z 平（Deribit 29MAY 结算）· 无残余仓位 · 不滚 · 对 06-05 仓位不变</span></div>
                <div><span className="dn-lvl-k">re-grow 触发（下一根 Tier-1 印）</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% 收（当前 2.74%、距触发 4bp —— 当日往触发远 1bp、06-05 是 3bp；信用通道守住 06-05 扩张）OR 10Y &gt; 4.53% 收（当前 4.47%、距触发 6bp —— 今天新印）</span></div>
                <div><span className="dn-lvl-k">reclaim-long 利率筛</span><span className="dn-lvl-v bull">10Y &lt; 4.55% 收 —— 在 4.47% 今天新验证 TRUE（连续两次抓取失败后）；筛守住</span></div>
              </div>
              <div className="dn-gating">
                <b>注意：</b>HY OAS 闸当日往触发远 1bp、所以 06-05
                「一根强势 session 远」的提法在形上对、但信用通道这
                根 session 守住。距触发 4bp 时、闸又是一根强势 session
                以上远；下根干净宏观渲染仍应被盯。本快照无滚、因 BTC
                内部结构性读（前段合约 gamma 随 6JUN 加入再生 + 周期
                延续 CLOSED-VINDICATED + 四根并发 TD9 BUY 簇 + 谱系
                首根负 24h funding 均值 + 200W 周期地板在 spot 上丢）
                切向多侧反弹 watch、不是一根新的下行对冲。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout · 框架 watch · NON-ACTIONABLE · 三条 promotion 腿中两条 DEEPENED · leg-3 拐点 REFRAMED 从 $68k 到 flip $63,778 —— 重算 R/R = 2.00:1、过 1.5:1 闸；触发没印；仍 NON-ACTIONABLE 直到印</span>
              <div className="dn-trade-name">
                均值回归 long scout —— 框架 watch；leg 1+2 DEEPENED（四根并发 TD9 + 82.57% 空付多 24h 加 10.55h streak）；leg-3 拐点 reframed 到 $63,778 flip —— 重算 R/R 过闸；印没在
              </div>
              <div className="dn-thesis">
                均值回归 long scout 的三条 promotion 腿是：（1）多周期
                TD9 BUY 确认在一根周期框架上 —— 今天 DEEPENED 到四根
                并发框架（15m + 8h / 12h / 1d）、3d / 1M 仍 TD8 → 9?
                待印、是谱系上最密超卖簇、比 06-05 多一根；（2）funding
                累计空付多 regime ≥ 4h —— 今天 DEEPENED 到 82.57% 的
                24h 负、10.55h 单根连续负 streak、24h 均值负 −1.36%
                （谱系首根负的 24h funding 均值）、谷在 −3.92% ann
                （谱系新空付多极）；（3）1h 重夺结构性拐点上方。06-05
                备忘把 leg-3 设在 ~$68k 区（cover 反弹路径拐点所在）；
                今天 flip 落到 $63,778、$68k 现在头顶 ~$8.4k（比 06-05
                ~$4.3k 更差）。但新 0γ flip $63,778 在今天是一根更近
                + 结构上更相关的拐点线 —— 一根 1h close 在 flip 上方
                + OI 仍在建（或缩）是一根更紧 cover 形 test。重算
                R/R 在 reframed 拐点：触发 $63,778 / 止损 $59,154（24h
                投降低 —— 一根全新投降印使超卖反转读无效）/ 首目标
                $73,025（周期锚）给风险 $4,624 / 回报 $9,247 = 2.00:1、
                明显在 desk 1.5:1 闸上方。Scout 保持 NON-ACTIONABLE
                因为 leg 3 没印 —— 现货 $59,646 在 reframed 拐点下方
                $4,132 —— 但如果 leg 3 触发的话 R/R 现在能算 scout
                入场、对 06-05 在更旧 $68k 线上 0.78:1 读法的一根有
                意义改变。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">promotion 闸（2/3 清且 DEEPENED；第三 reframed 待印）</span><span className="dn-lvl-v bull">leg 1 多周期 TD9 BUY —— CLEARED + DEEPENED 在四根并发周期框架（15m + 8h / 12h / 1d）+ 两根待印（3d / 1M）；谱系最密簇 · leg 2 funding 累计空付多 ≥ 4h —— CLEARED + DEEPENED 在 10.55h 单根连续 streak、82.57% 的 24h 负、谱系首根负 24h 均值 −1.36% ann · leg 3 1h close &gt; flip $63,778（REFRAMED 自前 $68k 区 —— 新 0γ flip 是今天盘面上的结构性拐点）—— UNCLEARED、现货 $59,646 在 reframed 触发下方 $4,132</span></div>
                <div><span className="dn-lvl-k">$63,778 flip（reframed 拐点、印之前不是入场）</span><span className="dn-lvl-v bull">一根 1h close &gt; $63,778 + OI 仍在建（或缩）标记结构性拐点、把 watch 升上去；新 R/R 数学在触发 $63,778 / 止损 $59,154 / 首目标 $73,025 读 $4,624 风险 / $9,247 回报 = 2.00:1、明显在 desk 1.5:1 闸上方。<em>印之前是 Watch / 拐点线；入场仅在 1h close 在 flip 上方确认时</em></span></div>
                <div><span className="dn-lvl-k">止损（如入场）</span><span className="dn-lvl-v bear">1h close &lt; $59,154（24h 投降低 —— 一根全新投降印使超卖反转读无效）</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">仅 0.2R · 在周期锚重夺平半、runner 到 D-SMA50 簇 ~$76k 区</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R 框架（按审计 DN-006 自 06-05 沿用）：</b>触发
                $63,778 / 止损 $59,154 = $4,624 风险；首目标 $73,025
                = $9,247 回报 = 2.00:1（在 desk 1.5:1 闸上方）。
                <b>入场许可在 flip $63,778 上方确认 1h close</b> —— 且
                仅当 OI 仍在建（或至少没崩）且大单/现货 CVD 在触发
                bar 上显示 cover 形印。Scout 仍 NON-ACTIONABLE 因为
                leg 3 没印；触发在现货上方 $4,132。<b>硬规则：</b>
                没有 leg-3 flip 重夺、不做 TD9-only 入场；不在没被
                价格在 flip 上方动作确认的四根并发 TD9 簇上加；不
                做没过 R/R 闸的入场（今天的 reframed 数学过；如果
                拐点再远走、数学要重检）。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 200W 周期地板 watch · LOST 在 SPOT 上（live $59,646 在全历史 W-SMA200 $61,794 下方 −3.48%）· 这根备忘的 NEW WATCH · 在建周收盘 $60,490 vs $61,794 = 下方 $1,304；周 bar 这周末要在 $61,794 或上收才能避免一根正式 200W 地板破</span>
              <div className="dn-trade-name">
                200W 周期地板 watch —— NEW WATCH 框架：现货在印上丢了全历史 W-SMA200 $61,794、在建周收盘在下方 $1,304；周末收印结构性破或重夺
              </div>
              <div className="dn-thesis">
                runbook §2 200W-support 读把全历史 W-SMA200 当周期地板
                —— 一根 1w 收 &lt; 该水位在约 9% 的周内出现、集中在
                深周期投降处。weekly_200sma.json 在服务器上缺失（谱系
                沿用；自 desk 政策加上 watch 以来文件没生成）；按
                runbook 回落、全历史（2019-09-08 → 2026-06-06、353
                根周 bar）W-SMA200 直接从 parquet 算出 $61,794。live
                现货 $59,646 在该水位下方 −3.48%、按 SPOT 印；06-05
                日收 $61,022 已经在线下方 $772、在建 06-06 收 parquet
                最末 bar（04:06Z）$60,490 在下方 $1,304。周期地板是
                周收盘、不是 spot —— 但在建周 bar 需要恢复 + 在 $61,794
                或上收周末、才能避免一根正式 200W 破。如果周收盘印在
                水位下方、那会是当前整个周期里首根 1w 收 &lt; 200W
                —— 一根历史上对应投降、不是入场的宏观结构性事件。
                本根备忘 watch 是信息性；runbook do-not-fabricate
                纪律阻拦任何分位 / 破事件主张离开缺 JSON、只表面
                水位 + 在建日收盘的差距。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W watch 源</span><span className="dn-lvl-v">weekly_200sma.json 缺失（谱系沿用；文件没生成）· 按 runbook §2 回落：全历史 parquet 计算从 2019-09-08、353 周 bar、W-SMA200 = $61,793.92</span></div>
                <div><span className="dn-lvl-k">现货 vs 200W（本快照）</span><span className="dn-lvl-v bear">现货 $59,646 − 200W $61,794 = −$2,148 / −3.48%（live 现货在周期地板下方）</span></div>
                <div><span className="dn-lvl-k">06-05 日收 vs 200W</span><span className="dn-lvl-v bear">$61,022 vs $61,794 = 下方 $772 —— 当前周期里首根日收落 &lt; 全历史 200W（谱系沿用：05-31 收 $73,653 在上方 $11,859）</span></div>
                <div><span className="dn-lvl-k">06-06 在建收 vs 200W</span><span className="dn-lvl-v bear">parquet 最末 bar 04:06Z 收 $60,490 vs $61,794 = 下方 $1,304</span></div>
                <div><span className="dn-lvl-k">周收盘 watch（周末）</span><span className="dn-lvl-v">在建周 bar 需要恢复 + 在 $61,794 或上收周末、才能避免一根正式 200W 地板破；一根周收 &lt; 水位是当前周期首根（结构性宏观事件）</span></div>
                <div><span className="dn-lvl-k">runbook 纪律</span><span className="dn-lvl-v">按 runbook do-not-fabricate、缺 JSON 时不抛分位 / 破事件主张；只表面全历史水位 + 在建日收盘差距。下根备忘重跑这一 watch 要求要么服务器上生成 weekly_200sma.json、要么继续全历史 parquet 计算</span></div>
              </div>
              <div className="dn-gating">
                <b>仅 watch。</b>一根周收盘 &lt; $61,794 是当前周期
                首根、一根结构性宏观支撑事件；但按 runbook 这根 watch
                是信息性、不是交易触发。上方的均值回归 long scout 是
                如果 leg 3（flip 重夺）触发就可以入场的卡；200W watch
                是一根另外的宏观水位信号、改变 desk 对更广周期位置
                的读法、不是一根逐单入场/退出。如果一根周收落在
                $61,794 下方、下根备忘必须重评更广周期论点（intact
                mid-cycle drawdown vs cycle-top retrace）是否被证伪。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 5JUN 结算解但 6JUN 替进（dealer 本子恶化到新极）· 现货在印上丢 200W 周期地板 · 周期延续节奏正式退役（第六根印 test 失败）· 四根并发 TD9 BUY 簇 + 谱系首根负 24h funding 均值 · 均值回归 long scout reframed leg-3 拐点过 R/R 闸但触发没在</span>
            </h2>

            <p>
              06-05 决策条件中：5JUN26 到期结算{' '}
              <em>FIRED 干净</em>（−9.61M 块在 08:00Z 06-05 清掉）—— 但
              一根全新 6JUN26 −8.40M 块在同一 24h 内替进、所以解后
              aggregate 预想 ≈ −29.9M 差了 $23.6M（实际 −53.5M、谱系
              新极）；第六根印周期延续 watch 在 BJ 15:41 06-05 候选
              分钟 <em>没触发</em>（小 cover +315、窗内最大 |Δnet| 333
              —— 日历节奏正式退役）；周期锚重夺条件 <em>没触发</em>
              （现在头顶 ~$13.4k）；宏观 re-grow 闸在信用上动了
              （HY OAS 紧 −1bp、闸往触发远 4bp；06-05 扩没延续）和在
              利率上（10Y 当日新印 4.47%、闸守住距触发 6bp）；reclaim-long
              利率筛 4.47% 新验证 TRUE；多周期 TD9 BUY 簇 DEEPENED 到
              四根并发框架（15m 加入 8h / 12h / 1d 那一堆）；均值
              回归 long scout leg-3 拐点 REFRAMED 从 $68k 到 flip
              $63,778、重算 R/R 在 2.00:1 过 1.5:1 闸 —— 但触发没印。
              本根备忘的条件围绕一根 6JUN 前段放大器（在同一 24h 内
              替进了已解的 5JUN 的全新块）、200W 周期地板在 spot 上破
              （印上丢；在建日收在水位下方 $1,304）、一根多侧一边倒
              仓位 build（这条 06-05 → 06-06 链上下腿谱系首根）、与
              一根有可交易 R/R、按 flip 重夺闸着的均值回归 long scout
              重置：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>6JUN26 到期结算（今天 08:00Z、距快照约 3h 26m）</td><td>−8.40M 全新前段块在 08:00Z 结算；解后 ex-6JUN aggregate ≈ −45.1M（仍结实净空 γ、但比 −53.5M 极走开 ~$8M）；盯结算窗的 vol 事件 —— 5JUN 之前结算解干净但同一 24h 内替进一根全新块</td><td>盯结算印；如结算干净印则不必动作 —— 如果结算窗印出 vol 事件、重评 cover 反弹 scout 的 dealer-book 修复腿、考虑均值回归 long scout 的 leg 3 拐点是否应该在结算后 bar 上触发</td></tr>
                <tr><td>均值回归 long scout（leg 3 拐点 REFRAMED —— R/R 现在过闸）</td><td className="bull">1h close &gt; flip $63,778 + OI 仍在建 / 不崩 · 触发在现货上方 $4,132 · 重算 R/R 2.00:1 在触发 $63,778 / 止损 $59,154 / 首目标 $73,025 —— 过 1.5:1 闸</td><td><em>触发印（flip 上方确认 1h close）+ 入场 bar cover 形印检验（大单净正 + 现货 CVD 买在触发 bar）—— scout long 0.2R</em>；R/R 现在能算、触发没印 · 在周期锚 $73,025 平半、runner 到 D-SMA50 簇 ~$76k</td></tr>
                <tr><td>Cover 反弹 scout（多）—— DROPPED（不变；dealer-book 修复腿退化）</td><td className="bear">要求 1d 收 &gt; $73,025 AND aggregate GEX 翻 &gt; 0 AND 1h cover 形印 —— 三条腿、dealer-book 修复腿今天反转（gamma −$14.0M 到谱系极）</td><td>无入场 · 周期锚重夺路径这根备忘更难</td></tr>
                <tr><td>200W 周期地板 watch（NEW；在 spot 上 LOST）</td><td className="bear">全历史 W-SMA200 $61,794；现货 $59,646 在下方 −3.48%；在建 06-06 收 $60,490 在下方 $1,304；周 bar 周末要恢复 + 在 $61,794 或上收才能避免正式 200W 地板破</td><td>盯周末周收 · 信息性、不是交易触发；一根确认的周收 &lt; 水位是当前周期首根、一根宏观结构性事件、要求下根备忘重评周期论点</td></tr>
                <tr><td>周期延续节奏（正式退役）</td><td className="stale">BJ 15:41 06-05 候选分钟印 Δnet +315（小 cover、无敌对-2 签名）；节奏日历 dead —— BJ 13–15 窗与 BJ 15:41 备用钉都失败</td><td>把每根新 Δnet ≤ −3k 或 Δnet ≥ +3k 印当信号本身读 —— 无时间先 · 未来重堆敌对-2 签名印出来时仍是有意义的盘面读、仅在 no-calendar 基础</td></tr>
                <tr><td>HY OAS 宏观 re-grow 闸</td><td className="bull">2.74%（距触发 4bp —— 当日往触发远 1bp；06-05 +4bp 扩没延续、信用通道这 session 守住）</td><td>距触发 4bp、闸又是一根强势 session 以上远 · 本快照无滚、因 BTC 内部结构性读切向相反、信用通道守住</td></tr>
                <tr><td>reclaim-long 利率筛</td><td className="bull">10Y &lt; 4.55% 收 —— 今天 4.47% 新验证 TRUE（连续两次抓取失败后）；距触发 6bp</td><td>独立筛新 TRUE；需要均值回归 leg-3 触发才能转成 scout long</td></tr>
                <tr><td>DXY / MOVE risk-off 脉搏</td><td className="bear">DXY 100.07（对 06-05 备忘 +0.64；偶发 z +2.33 —— RISK-OFF 偶发）；MOVE 75.2（当日 +4.04、谱系单日最大跳）</td><td>今天宏观脉搏通过美元 + 利率 vol 通道转 risk-off（<em>不</em>是信用）；BTC 下腿在 DXY 硬 + 债波跳上有一根新宏观贡献者 · 轮动倾向于一根全新 long scout 入场即便 leg 3 触发也要审慎 —— 入场 bar cover 形印检验要把 DXY/MOVE 印纳入 cover 形读</td></tr>
                <tr><td>周期锚重夺 watch（价格平面四 + 层下）</td><td className="bull">1d 收 &gt; D-SMA100 $73,025 —— 现在头顶 ~$13.4k；滚动 100 日锚本身随 06-05 收滚进窗里 bled −$98 更低</td><td>cover 反弹 scout 三条腿中最远的；一根 1d 收在锚上方会重武装 cover 反弹 scout、触发全新结构性重评 · 锚仍是载重缺失腿</td></tr>
                <tr><td>BTC↔NQ 跨资产轮动（regime IDIOSYNCRATIC 往 NORMAL 移）</td><td className="stale">|r| 0.238（前 06-05 0.215；往 0.25 NORMAL 阈值靠回、未跨）；BTC↔NQ +0.129（前 +0.090）；BTC −17.17% vs NQ −5.35% 缺口 −11.82pt（前 −13.44pt）</td><td>BTC 盘面与 TradFi 共抛（NQ −5.35% 周对周、MSFT −9.24%）、不是向上分歧；脱钩缺口在收因为大家一起在卖 —— 轮动在 BTC 交易方面不作为跨资产 cover 反弹信号传过</td></tr>
              </tbody>
            </table>

            <p>
              重写<em>本</em>备忘的一根单线是{' '}
              <span className="dn-signal">
                6JUN 08:00Z 结算是否干净解新前段放大器（解后 aggregate
                ≈ −45.1M、仍结实净空 γ 但比谱系极走开 ~$8M）、或结算
                窗内印出 vol 事件加深放大；其次、在建周 bar 能否在
                周末恢复到全历史 200W $61,794 上方（或印出当前周期
                首根正式 1w 收 &lt; 200W）；第三、均值回归 long scout
                reframed leg-3 拐点 $63,778 是否印出一根 1h close +
                入场 bar cover 形检验。周期延续框架在日历上正式退役；
                问题现在是四根并发 TD9 BUY 簇 + 谱系首根负 24h funding
                均值 + 10.55h 空付多 streak 是否解到一根 1h flip 重夺、
                把均值回归 long scout 升到一根首根 scout 入场、或
                200W 周期地板在一根周收上破、加 dealer 本子 6JUN 解后
                剩余 ~−45M 加深化的 $60k / $55k / $50k 崩盘 put 走廊
                把现货拉下到 $59,154 下方一根全新投降印
              </span>
              。在此之前本备忘按已写跑：runner 与 put-spread 尾已平、
              cover 反弹 scout 已 drop、空框架 watch CLOSED-VINDICATED
              加第六根印 test 干净失败、均值回归 long scout 在 leg-3
              flip-重夺印之前 NON-ACTIONABLE 但 R/R 现在能算到 2.00:1、
              200W 周期地板 watch 是一根 NEW 信息性 watch。BTC-vs-TradFi
              脱钩随 TradFi 加入卖盘收窄到 −11.82pt；引擎 MTF 帧深超卖、
              周期帧在单位数边缘 RSI 极端；dealer 本子恶化到谱系新极；
              杠杆本子印谱系最深空付多 regime。下 24h 正确的读是{' '}
              <em>耐心 —— 盯 6JUN 结算解、盯周末周收 vs $61,794、盯
              flip $63,778 上方一根 1h close —— 三根外部印重写 call</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计跟踪 · v2（已过 codex 敌对式审计）
            </span>
            <b>重要 caveat（仅限本篇）：</b>{' '}STAGE B / STAGE D 的 codex 敌对审计<b>未</b>在 04:34Z 这份稿上跑过。run.sh 的 resume 检测看到 main 上从提交 <code>2d1fa17</code>（早上那版 audit 产品）保留着 <code>audits/2026-06-06-desk-note.md</code>，于是跳过了两个 stage。下面的 findings 描述的是早上那篇错锥在 <code>2026-06-05 16:05Z</code>（误标为 00:05Z，原 DN-001 bug）的 v1，不是今天这篇锥在 04:34Z 的 v2。STAGE A 独立应用了 BJ-local <code>t</code> 规则（合 runbook §2 LIVE-TAPE landmine，<code>2db202c</code>），STAGE C 走了 <code>tsc</code> 门；本页所有数字都能从 <code>/opt/btc-monitor/live_db.json</code> 的 <code>t == &ldquo;06-06 12:34&rdquo;</code>（BJ 本地 = UTC 04:34Z）那一行重新推导出来。这篇拿不到平时那个跨模型 hostile-audit 门的保证。run.sh resume 逻辑是根源，下一步另打。{' '}<b>v2 状态（原自动追迹保留）：</b>v1 中文初稿与 EN v2 在 STAGE C 同时写出
            （非翻译、按 runbook §3 中文母语生成）、原子快照
            2026-06-06 04:34Z（BJ 12:34 06-06、按 live_db{' '}
            <code>t</code> BJ-local 约定 —— runbook §2 LIVE-TAPE
            `t` LANDMINE 应用、2026-06-06 首根 run 失败的恰好就是
            这一检验）。STAGE B codex 敌对式审计在 v1 原稿上返回{' '}
            <b>BLOCK-CRITICAL</b>（1 CRITICAL + 6 MAJOR、ID
            DN-001..DN-007）加一次 v2 re-gate 发现 4 根新（v2-NF-001
            自 DN-001 沿用 / v2-NF-002 滚动源 / v2-NF-003 parquet
            漂移 / v2-NF-004 宏观行漂移）；完整审计报告保存于{' '}
            <code>audits/2026-06-06-desk-note.md</code>。STAGE C 在
            v2 升级里应用了每一条建议修复：（DN-001 / v2-NF-001
            CRITICAL）live 快照锚移到真实 UTC 04:34Z 行 `t == &ldquo;
            06-06 12:34&rdquo;`（BJ-local）、prose 里每一对 BJ/UTC
            事件按 BJ-local 约定重新推导（funding 谷 / 峰、最长负
            streak、24h H/L、OI 峰 / 低、SM net 谷、short_btc 与
            long_btc 峰、mkt_long_pct 峰）；（DN-002 MAJOR）四根
            并发 ⚡ TD9 BUY 跨 15m / 8h / 12h / 1d 的主张保留、因
            当前滚动 <code>mtf_div_latest.html</code> 重扫仍确认它、
            而 04:31Z scan 读前已按 runbook §1 存档规则存档于
            snapshots/2026-06-06-0434/、滞后用语合并为一根窗口；
            （DN-003 MAJOR）GEX 04:06Z 文件在同一存档目录存档、
            prose 中 GEX 数值（idx $60,806 / IV 52.5% / 总 −53.5M
            / flip $63,778 / 6JUN −8.40M）与存档 strip 完全对得上；
            （DN-004 MAJOR）宏观面板更新到真实 00:30Z 渲染 ——
            Tier-1 回线、US 10Y 4.47%、TIPS 2.11%、NFCI −0.494、
            Fed 净流动性 $5.834T、US-JP 利差 1.95%、USD/CNY 6.7650
            —— 陈旧抓取失败主张已收回；（DN-005 MAJOR）2024-2026
            周 EMA 线（W-EMA100 / W-EMA50）标记为截断 seeded、v1
            前 W-EMA200 = $73,578 主张收回；全历史（353 周、
            2019-09-08 → 2026-06-06）W-SMA200 直接从 parquet 算出
            $61,793.92、作为结构性 200W watch 水位表面；（DN-006
            MAJOR）SM Δ 带现在把「对 06-05 备忘」（long 11.26k →
            15.44k、short 55.73k → 54.86k、net −44,462 → −39,426 =
            +5,036）与 24h 窗（long Δ +3,049、short Δ −797、net Δ
            +3,845）分开；（DN-007 MAJOR）超化级被软化为「这条
            06-05 → 06-06 链上下腿谱系首根干净的一边倒多堆」、加上
            06-01 / 06-02 / 06-03 / 06-04 一边倒空堆与 05-31 / 06-05
            两侧 shrink 的谱系结构在 prose 内引用、不是一张完整
            谱系表；（v2-NF-002 MAJOR）MTF / GEX / 宏观 / 跨资产
            滚动产物全部读前已存档于{' '}
            <code>/opt/desk-note/snapshots/2026-06-06-0434/</code>
            按 runbook §1、消除滚动产物可审计性缺口；（v2-NF-003
            MINOR）parquet 最末 bar 移到 04:06Z 收 $60,489.70、RV30
            37.05% 重算、29-return 参考 37.46% 在 prose 内提到；
            （v2-NF-004 MINOR）JGB 陈旧计数从 06-05 备忘的 64d 更新
            到 66d。滚动源存档政策现在按 runbook §1 作为谱系沿用
            （v2-NF-002 修复）。MA 矩阵宇宙保持 2024-2026 子集按
            06-02 审计 DN-005 desk 政策沿用；全历史 W-SMA200 /
            W-EMA200 参考分别加在数据来源与 200W watch 交易卡上。
            <b>构建说明（INFO）：</b>此服务器 Node 18.19.1；Next
            16.2.6 在 Node &lt; 20.9.0 时硬退出于{' '}
            <code>node_modules/next/dist/bin/next:24-28</code>、所以
            一次完整 <code>next build</code> 受环境阻断（自 05-21 到
            06-05 沿用）。<code>npx --no-install tsc --noEmit</code>
            {' '}是构建代理、在 STAGE B 退出 0（记录于
            audits/2026-06-06-desk-note.md）、在本 STAGE C 升级 run
            也退出 0。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 不构成投资建议</span>
            本备忘是 Hysteresis Research 主理人之间内部讨论用的交易台
            产物、<em>不是投资建议、不是招揽、不是要约</em>、对任何
            接收方的具体情况未做个人化。数字反映单一原子快照
            （2026-06-06 04:34Z、BJ 12:34 06-06）、按节级 provenance
            在上方数据来源带披露；宏观 Tier-1 面板渲染为 2026-06-06
            00:30Z（比快照早约 4h 4m）、滚动 MTF / GEX / 跨资产产物
            读前已存档于 snapshots/2026-06-06-0434/。水位、size 与
            条件是 desk 流程的示意、不是常设建议。过往相关性、gamma
            与仓位模式不约束未来盘面。衍生品带全损风险、且在杠杆上
            带超过保证金的损失。<em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                5JUN 结算解、6JUN 在同一 24h 内替进。现货在印上丢
                200W 周期地板。多头在 −5.41% 插针里抄底。周期延续
                节奏正式退役。均值回归 scout 的 R/R 现在能算到
                reframed flip 线 —— 但印没在。耐心 —— 盯 6JUN 结算、
                盯周末周收 vs $61,794、盯 flip $63,778 上方一根 1h
                close。
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
            v2 · 2026-06-06 04:34Z 快照 · 来源：live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
