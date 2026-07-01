import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-07-01 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-07-01',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-07-01' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260701() {
  await requireViewer('/zh/desk/2026-07-01');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-07-01 · v2</span>
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
              <span className="dn-big">$58,701</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−2.50%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-07-01 00:06Z ·{' '}
              <span className="dn-em">
                反弹失败、盘面把它交还了回去。06-29 那根重夺 $60k 与 0γ flip 的
                上收，在 06-30 日收 $58,605.40（−$1,619.30、本轮最低收、连续第七根
                收在如今 $62,643 的 200W 地板下方）上被整根反转；06-30 备忘带的那
                整套建设性画面也跟着翻回去：dealer 本子翻回 −31.5M 净空 γ（曾
                +5.6M 净多——重新<em>放大</em>）、近端 3JUL26 下行放大器炸开到
                −21.15M（自 −4.86M）、现货丢掉 flip（−1.84% 下方、曾 +0.12% 上方）、
                MTF 恶化 1/6/3 → 1/9/0、现货跌到确认地板下 −6.29%。唯一一根新鲜的
                建设性印是 1M TD9 BUY 印出了（06-30 差一根收）——一根孤立的超卖反转
                提示。200W 破位仍 CONFIRMED（06-29 周收 $60,224.70 &lt; $62,643）、
                06-15 reclaim 论仍 FALSIFIED。跨资产翻了：BTC −6.84% 现在是全复合体
                7d 最差、而股指转绿（NQ +2.45%、SP500 +1.33%）——破位看起来更
                idiosyncratic。全部透过一根死掉的衍生品盘面读、如今是第十五个
                日历日——OKX 监控已冻 329.4h、SM 源死了 ~18.94 天。
              </span>
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 末行 2026-06-17 06:43Z（t = &ldquo;06-17 14:43&rdquo; BJ）</td>
                  <td className="dn-flag">
                    <b>FROZEN</b> · live_db.json 自 2026-06-17 06:43Z 起没写过新行
                    （文件 mtime 06-17 06:43:08Z 确认）；进程状态本次未存档 / 未核实——
                    现<b>329.4h 陈旧</b>对 00:06Z 快照锚（06-30 备忘是 305.4h、06-29
                    是 281.4h——停摆自上一篇又跑了 ~24h、进入第十五个日历日）。
                    funding / OI / CVD / basis / retail / taker-flow 全是 06-17 06:43Z
                    的 LAST-KNOWN、不是当前值。SM 子源（long_btc / short_btc / net_btc）
                    冻得更久——自 2026-06-12 01:36Z 起常量（~454.5h / ~18.94 天）；SM net
                    与 SM cut-fraction 本次<b>不可计算</b>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-07-01 00:01Z scan</td>
                  <td className="dn-flag">
                    最新（锚前约 5 分钟）· 滚动 latest 文件、逐字存档于
                    /opt/desk-note/snapshots/2026-07-01-0006/ · 含未收盘 K 线 ·
                    扫描现货 $58,662、24h −2.54%、24h H/L $60,250 / $58,160、qVol $11.30B
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-01 00:01Z 快照</td>
                  <td className="dn-flag">
                    最新（锚前约 5 分钟）· Deribit idx $58,862（比 parquet 现货
                    $58,701 高 $161）· 874 合约 · net GEX{' '}
                    <b>−31.5M</b>（净空 γ、<b>翻回负</b>、自 06-30 的 +5.6M；06-29 是
                    −20.1M）· flip $59,804（现货 −1.84% 下方、自 06-30 的 +0.12% 上方
                    丢失）· 前端是 1JUL26 0.3 DTE 在 <b>−3.65M</b>（今日 ~08:00Z 结算）、
                    最重负 expiry 现在是近端 <b>3JUL26 2.3 DTE 在 −21.15M</b>（自 06-30
                    的 −4.86M 炸开——重新浮现的集中下行放大器）· 现货 $58,701 坐在
                    $58k −18.63M 墙（最重、就在下方）与 $59k −9.23M 墙（就在上方）之间、
                    第一根正天花板是 $60.5k +6.73M 墙
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-01 00:01Z
                  </td>
                  <td className="dn-flag">最新 · 7d 1h bar · 22 资产 · 167 rows · regime NORMAL（均值 |r| 0.250、自 06-30 的 0.258 松到正好<b>踩在</b> 0.25 idiosyncratic 阈值上——BTC 仍按相关性耦合、但其 7d 回报 −6.84% 现在是全复合体最差、而股指转绿）</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-30 22:17Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.82h · 10Y <b>4.38%</b>（0.0bp、距 4.53% 闸 15bp）、
                    TIPS <b>2.16%</b>（−2.0bp、RISK-OFF）、HY OAS{' '}
                    <b>2.80%</b>（−3.0bp——收窄但仍在 2.78% re-grow 闸上方）· MOVE 债波{' '}
                    <b>68.1</b>（源 1d Δ +1.35、松）· FX 腿：<b>DXY 101.17</b>
                    （+0.06 当日、松了但仍 EXTREME）与 <b>USD/JPY 161.93</b>
                    （+0.15 当日）、都硬 · Fed 净流动性 $5.812T（−0.037T、无新周度印）·
                    NFCI 中性（现陈旧 11d）· WTI $78.9 现陈旧 8d
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-07-01 00:05Z（close $58,701）</td>
                  <td className="dn-flag">
                    最新 K 线（交易所 OHLC、独立于冻结的实时盘面）· 偏移按
                    parquet 最末 bar close 重算、是实时盘面冻结期间可得的最新现货 ·
                    显示的周阶梯用 2023→ 子集（184 根周 bar）、所以无 W-SMA200 行；
                    200W 地板直接从全历史 glob 重算——<b>356 根完成的周 W-MON bar</b>
                    （2019→至今、含已定的 06-29 周、不含进行中的 07-06 周）——={' '}
                    <b>$62,643</b>、对 06-30 备忘<b>不变</b>（06-29 周上一篇已定、本次
                    无台阶）。<b>现货在地板下方 −6.29%、矩阵上每根 MA 仍在头顶——无
                    正偏移、谱系第七根这样的 cut</b> · weekly_200sma.json 本次缺、
                    所以比率百分位 / last-event 留未溯源、非杜撰
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
              <span className="dn-v bear">−7.24%（陈旧 · 06-17 06:43Z · 329.4h）</span>
              <span className="dn-src">live_db 原始 funding −0.006608 × 1095 = −7.24% ann（非 ×100）· 冻结点 06-17 06:43Z 的 LAST-KNOWN、现 329.4h 陈旧、非当前读 · 与 06-19 → 06-30 备忘逐字同一根冻结行；到冻结为止 24h+1m 含首行采样窗（1,442 行）的 last-available ann 均值 +0.20%、区间 −7.24% / +7.21%、819 / 1,442 行为负——盘面死时是一本平衡的双向本子</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 对 06-30</span>
              <span className="dn-v">盘面冻结——不可计算</span>
              <span className="dn-src">实时盘面自 06-17 06:43Z 起没写过、所以仍无当前 funding 去对 06-30 备忘作差 · 冻结点 last-known 印是 −7.24% ann（空付多）；杠杆门连续第十五天不可评估</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−468 BTC（−0.45%）· 陈旧窗</span>
              <span className="dn-src">live_db oi_btc 102,945 在 06-17 06:43Z 冻结点 vs 一个 24h+1m 含首行采样窗（1,442 行）起点 · 该窗<b>止于</b>冻结、不是进到 00:06Z 快照——它描述的是到 06-17 06:43Z 为止的盘面、已 329.4h 过期</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bear">59.47 / 40.53 · 陈旧</span>
              <span className="dn-src">live_db `mkt_long_pct` 在 06-17 06:43Z 冻结点（24h+1m 含首行采样窗起点是 58.29%——进滚动是一根 +1.18pt 加多）· last-known、329.4h 陈旧</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">−37.29k · 源死 ~454.5h</span>
              <span className="dn-src">long 13,532.4 − short 50,825.7 · 这个三元组自 2026-06-12 01:36Z 起逐字常量（~454.5h / ~18.94 天）——它是一个 FROZEN 值、不是当前仓位读；仅为标记死源而带</span>
            </div>
            <div>
              <span className="dn-k">SM Δ / cut fraction</span>
              <span className="dn-v">不可计算</span>
              <span className="dn-src">SM 源冻结 ~18.94 天 · |Δ| / prior_net 不可计算——没有当前 SM net 去作差 · 挤压周期 / re-stack 框架本次盲、06-16 → 06-30 ON-HOLD 的延续</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">44.8% / 43.37%</span>
              <span className="dn-src">GEX 874 合约 IV 中位数（00:01Z、最新）vs 30D close-to-close RV 43.37% 自 parquet——链 richness ~+1.43pt 对已实现（06-30 是 ~+0.32pt——本子翻回空 γ、下行重启、链<em>重新变贵</em>）；RV 仍高（06-30 是 43.58%、05-31 是 24.91%）· IV 是 874 合约链中位数、<b>不是</b>可交易价差</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bear">−1.84%（下方 · 丢失）</span>
              <span className="dn-src">flip $59,804（前 $60,135 · 落 −$331）· 对 parquet 现货 $58,701（58,701.30 / 59,804 − 1 = −1.844%）/ GEX 文件 Deribit idx $58,862（58,862 / 59,804 − 1 = −1.575%、文件读 −1.6%）——两参考都在 flip 下方、自 06-30 的 +0.12% 上方丢失 · net GEX −31.5M（净空 γ、翻回负、自 +5.6M）· 近端 3JUL26 放大器炸开到 −21.15M（自 −4.86M）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                反弹失败、盘面把它交还了回去。06-29 那根重夺 $60k 与 0γ flip 的
                上收，在 06-30 日收 $58,605.40（−$1,619.30、本轮最低收、连续第七根
                收在如今 $62,643 地板下方）上被整根反转、06-30 备忘带的每一根
                建设性读都跟着翻回去：dealer 本子翻回 −31.5M 净空 γ（又放大了）、
                近端 3JUL26 放大器炸开到 −21.15M、现货丢掉 flip（−1.84% 下方）、
                MTF 恶化回 1/9/0、8h 和 1d 翻回水下死叉、现货跌到确认地板下 −6.29%
              </span>
              。唯一一根新鲜的建设性印是 1M TD9 buy 印出了。全部透过一根死掉的
              衍生品盘面读、连续第十五个日历日。现货报{' '}
              <span className="dn-tag bear">$58,701、24h −2.50%</span>（00:05Z parquet
              bar；MTF 扫描在自己窗口读 −2.54%）、自 06-30 备忘现货 $60,208 落下——
              谱系把刚重夺的 $60k pin 交还了回去。200W 破位仍{' '}
              <span className="dn-tag bear">CONFIRMED 于 06-29 周收 $60,224.70、
              地板 $62,643 下方 −3.86%</span>、06-15 reclaim 论仍 FALSIFIED、地板本次
              不变（$62,643、06-29 周上一篇已定）。连续七根日收（06-24 $61,051 −2.54%、
              06-25 $59,772 −4.58%、06-26 $60,072 −4.10%、06-27 $60,000 −4.22%、
              06-28 $59,550 −4.94%、06-29 $60,225 −3.86% 一根上收、{' '}
              <span className="dn-tag bear">06-30 $58,605 −6.45% 一根下收 −$1,619.30</span>）
              现在都坐在地板下方、06-30 那根是本轮最深。现货连续第七根 cut 头顶无
              MA 可撑——D-EMA20 $62,059（−5.41%）、D-SMA20 $62,436（−5.98%）、200W 地板
              $62,643（−6.29%）是最近的、全在头顶。dealer 本子{' '}
              <span className="dn-tag bear">翻回 −31.5M 净空 γ</span>、近端 3JUL26
              放大器炸开到 −21.15M；现货坐在 $58k −18.63M 墙（就在下方）与 $59k
              −9.23M 墙（就在上方）之间。MTF 恶化三档到{' '}
              <span className="dn-tag bear">1 多 / 9 空 / 0 中性</span>（曾 1/6/3）——
              30m/1h 跌回云下、15m 滑回云内、而 8h 和 1d 翻回水下死叉（12h 是一根 15
              根旧死叉、与 06-30 刚印的 12h 金叉冲突、按谱系标注、非本次新翻）——同时
              regime 分类器收紧到{' '}
              <span className="dn-tag">6/9 reversal（均值回归）</span>、自 5/9。宏观
              边际转松：10Y 平在 4.38%、HY OAS 收窄 −3bp 到 2.80%（仍在 2.78% 闸上方）、
              DXY 松到 101.17 但仍 EXTREME。{' '}
              <span className="dn-em">
                操作事实不变、仍绑定：OKX 监控现已冻 329.4h（末行 2026-06-17 06:43Z）、
                funding / OI / CVD / basis / retail 都是 last-known 陈旧、SM 仓位本子
                死了 ~18.94 天——SM net 与 cut-fraction 不可计算。06-30 备忘问那根上收
                是需求吸收破位、还是一根薄短空回补跳；本次价格答案偏向短空回补——它
                被直接交还了回去——但能确认它的盘面仍是死的。读只在价格、γ 和 MTF 上。
              </span>{' '}
              本子保持平：破位确认、reclaim 论已死、那根短暂闪出建设性的反弹没了——
              scout 的价格前置条件翻回 FALSE（现货 −1.84% 在 flip 下方）、所以连
              06-30 转 TRUE 的那一条腿也重新关上了。无空、无 scout、无新对冲。
            </p>

            <p>
              BTC 报 <span className="dn-tag">$58,701</span> 在 parquet 最末 bar
              （00:05Z）、{' '}
              <span className="dn-tag bear">−2.50%</span> 在 24h（对正好 24h 前的
              $60,207.60 bar——06-30 00:05Z parquet bar；MTF 扫描在自己 00:01Z 窗读
              −2.54%——差是参考窗、不是数据冲突）、在一根{' '}
              <span className="dn-tag">$60,250 / $58,160</span> 的 24h 区间内（按 MTF
              扫描 H/L）。Deribit idx 读 $58,862 在 00:01Z、MTF 扫描现货 $58,662——
              所以最新现货在三根独立最新源上互相印证得很好（parquet K 线 $58,701、
              GEX Deribit idx $58,862、MTF 扫描 $58,662）、尽管平常供它的 live_db 盘面
              冻在 06-17 06:43Z、329.4h 陈旧。{' '}
              <span className="dn-signal">结构读已从「破位 CONFIRMED 于周收、盘面
              弹进去（06-30 备忘）」走到「同一根确认破位、反弹现在整根 REVERSED」——
              06-30 日收 $58,605.40 交还了整根 06-29 上收、印出本轮最低收</span>：
              22JUN 周收 $63,990 是最后一根周守、日收沿线走下（06-22 → 06-28）、06-29
              周 bar 收 $60,224.70 在地板下确认破位、06-29 日 bar 弹（+$674.50）、
              06-30 日 bar 直接反转（−$1,619.30）。按框架破位在周收口径确认、06-15
              reclaim 论证伪；本次没有一根 un-do 那一点——随确认而来的反弹只是失败了。{' '}
              <span className="dn-em">
                谱系唯一一根结构性正在周收口径上破了、reclaim 论已死；现货头顶无 MA
                可撑、06-30 无法确认为需求的那根反弹被交还了回去——把读偏向短空回补、
                尽管盲盘面仍无法证明它。
              </span>
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面冻 329.4h（第十五天）· SM 本子死 ~18.94 天 · funding/OI/flow last-known 陈旧 · 06-30 的反弹在 06-30 下收上被交还、但交易台仍看不清那是短空回补耗尽还是需求失守——仓位盘面是暗的</span>
            </h2>

            <p>
              <span className="dn-signal">
                本篇最重要的单一来源——实时衍生品盘面——仍是死的、连续第十五个日历日
              </span>
              。OKX 监控自{' '}
              <span className="dn-tag bear">2026-06-17 06:43Z</span> 起没往 live_db.json
              追过任何行（t = &ldquo;06-17 14:43&rdquo; BJ；文件 mtime 06-17 06:43:08Z
              确认写入停在那里；进程状态本次未存档或核实、所以备忘断言缺失的盘面、
              不是一个 live/hung 进程）。那现在是{' '}
              <span className="dn-tag bear">329.4h 缺失盘面</span>对 00:06Z 快照锚——
              06-20 备忘在 65.4h 标它、06-27 在 233.4h、06-28 在 257.4h、06-29 在
              281.4h、06-30 在 305.4h、停摆又跑了 ~24h 没写。实时盘面带的一切——
              funding、持仓、现货/期货 CVD、perp basis、retail 多%、taker-net、
              大单流、aggressor skew——因此全是{' '}
              <span className="dn-em">06-17 06:43Z 的 last-known、非当前</span>。SM
              仓位三元组（long_btc / short_btc / net_btc）逐字常量——{' '}
              <span className="dn-tag">13,532.4 / 50,825.7 / −37,293.3</span>——自{' '}
              <span className="dn-tag bear">2026-06-12 01:36Z</span> 起、~454.5h
              （~18.94 天）。06-16 备忘在 ~94.5h 标这根死源、把挤压周期 ON HOLD；
              06-29 备忘在 ~406.5h 带它、06-30 在 ~430.5h；今天是 ~454.5h、仍死。{' '}
              <span className="dn-em">
                SM net 作为当前读不可计算、SM cut fraction（|Δ| / prior_net）无法成形——
                没有当前 SM net 去作差。本篇任何仓位主张都明确是历史的、非实时。
              </span>
            </p>

            <p>
              为完整起见、<em>last-available</em> 盘面读——全钉在 06-17 06:43Z 冻结、
              现 329.4h 过期、与 06-19 → 06-30 备忘逐字同读因为是同一根冻结行——是：
              funding <span className="dn-tag bear">−7.24% ann</span>（原始 −0.006608 ×
              1095；冻结点空付多）、last-available 路径在 24h+1m 含首行采样窗上平衡双向
              （1,442 行：均值 <span className="dn-tag">+0.20% ann</span>、区间{' '}
              <span className="dn-tag">−7.24% / +7.21%</span>、819 / 1,442 行为负）；OI{' '}
              <span className="dn-tag bear">102,945 BTC、trailing 24h+1m 窗内 −468
              （−0.45%）</span>；retail{' '}
              <span className="dn-tag">mkt_long_pct 59.47%</span>（同窗内一根 +1.18pt
              加多）；perp basis{' '}
              <span className="dn-tag bear">−$57.43 折价</span>对现货。{' '}
              <span className="dn-em">
                把这当一根近十九天旧的指纹、不是信号：一本双向 funding、OI 在泄、
                retail 在第一段弱势里加多。没有一项能带到 00:06Z 快照——而且它早于
                整段 06-18 → 06-22 地板守序列、06-23 → 06-28 那段收在地板下的腿、
                06-29 周收确认与上收反弹、以及 06-30 那根把反弹交还的下收、所以它对
                仓位如何吸收确认破位、或失败反弹是短空回补耗尽还是需求失守、什么都
                说不了。交易台把仓位维度当未知、把 06-30 反转当仓位未确认。
              </span>
            </p>

            <h2 className="dn-sec">
              结构 <span className="dn-roman">II · 价格/MTF 最新 · multi-TF 共振空 1 多 / 9 空 / 0 中性（自 1/6/3 恶化三档——30m/1h 跌回云下、15m 滑回云内）· 8h 和 1d 翻回水下死叉（06-30 是金叉）、1w 也带水下死叉、而 12h 是一根 15 根死叉、与 06-30 刚印的 12h 金叉冲突、按谱系标注、非本次新翻 · 15m/30m/1h 都带水下金叉 · 1M TD9 buy 印出了（曾差一根收）· regime 收紧到 6/9 reversal（均值回归、JT&lt;0）· 现货在每根 MA 下方、整根阶梯头顶、200W 地板 $62,643 CONFIRMED 破、现货第七根收下方 −6.29%</span>
            </h2>

            <p>
              <span className="dn-signal">
                MTF 图最新、在标头恶化三档（1 多 / 9 空 / 0 中性、30m/1h 跌回云下、
                15m 滑回云内）、而 8h 和 1d 从水下金叉翻回水下死叉（12h 是一根 15 根
                旧死叉、与 06-30 的 12h 金叉冲突、按谱系标注）、regime 分类器收紧到 6/9
                均值回归
              </span>——这是配 dealer 图、交易台今天还能信的那一维。00:01Z 扫描标{' '}
              <span className="dn-tag bear">1 多 / 9 空 / 0 中性、横跨 10 帧</span>、
              净读 <em>multi-TF 共振空 · 卖反弹</em>——自 06-30 扫描的 1/6/3 恶化、
              因 30m/1h 跌回云下、15m 滑回云内、掉了其云上重夺。regime 行读{' '}
              <span className="dn-tag">6/9 reversal / 均值回归 regime（JT&lt;0）——
              偏反弹</span>（06-30 是 5/9）、所以分类器把偏反弹的倾斜收紧一档——但引擎
              仍没有确认的建设性触发去据此行动。唯一一根多帧是{' '}
              <span className="dn-tag">1M（云上、TD9 buy 印于 $58,662）</span>——本次唯一
              一根新鲜建设性印、月线上一根超卖反转提示（06-30 是 TD8、差一根收）。
              近端交叉是{' '}
              <span className="dn-tag">15m / 1h 水下金叉（1 根 / 2 根）与一根 30m 水下
              金叉（12 根）</span>——全是未确认的水下探针、不是 TD buy——而下行侧握着高
              帧：{' '}
              <span className="dn-tag bear">8h / 12h / 1d / 1w 带水下死叉（2 根 / 15 根 /
              1 根 / 1 根——只有 8h 和 1d 自 06-30 金叉翻过来；12h 死叉是 15 根旧、与
              06-30 备忘刚印的 12h 金叉冲突、按谱系标注、非本次新翻）</span>。云：15m
              回到云内（刚穿）、30m/1h/4h→1w 云下、1M 云上。这根薄的建设性集合是{' '}
              <span className="dn-tag">15m / 1h / 30m 水下金叉、一根 1M TD9 buy 印出、
              以及 15m / 30m / 1h 的底（多头反转）背离</span>。{' '}
              <span className="dn-em">
                直读：帧堆恶化三档、8h 和 1d 从水下金叉翻回死叉（12h 是一根 15 根旧
                死叉、按谱系标注）、加深了空头趋势帧——30m→1w 云下、15m 云内、无 MA 撑、
                200W 地板确认破、现货第七根收下方 −6.29%。引擎唯一的建设性印是快帧上
                未确认的水下金叉、一根回到云内的 15m、和一根现已印出的 1M TD9 buy。没
                有确认的引擎印能拿来做多这根破位；1M TD9 buy 是一根真的超卖提示、但只是
                一根月线单印、进到一本空 γ 放大本子、现货头顶无 MA。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">58,672</td><td className="num">53.6</td><td className="bull">金叉（水下）1b</td><td className="neut">云内 刚穿 · 58.6k–58.9k</td><td>Sell 3</td><td>BEAR hid · BULL reg（底）</td></tr>
                <tr><td>30m</td><td className="num">58,672</td><td className="num bear">46.9</td><td className="bull">金叉（水下）12b</td><td className="bear">云下 ↑59.6k 41b</td><td>Sell 1</td><td>BEAR hid · BULL hid · BULL reg（底）</td></tr>
                <tr><td>1h</td><td className="num">58,672</td><td className="num bear">41.2</td><td className="bull">金叉（水下）2b</td><td className="bear">云下 ↑59.8k 18b</td><td>Buy 3</td><td>BEAR hid · BEAR reg（顶）· BULL hid · BULL reg（底）</td></tr>
                <tr><td>4h</td><td className="num">58,673</td><td className="num bear">37.7</td><td className="bear">死叉（水下）3b</td><td className="bear">云下 ↑60.9k 47b</td><td>Buy 7</td><td>BEAR hid</td></tr>
                <tr><td>8h</td><td className="num">58,673</td><td className="num bear">36.2</td><td className="bear">死叉（水下）2b</td><td className="bear">云下 ↑63.2k 23b</td><td>Buy 4</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">58,673</td><td className="num bear">32.9</td><td className="bear">死叉（水下）15b</td><td className="bear">云下 ↑64.3k 79b</td><td>Buy 3</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">58,662</td><td className="num bear">30.6</td><td className="bear">死叉（水下）1b</td><td className="bear">云下 ↑68.8k 30b</td><td>Buy 2</td><td>BEAR hid</td></tr>
                <tr><td>3d</td><td className="num">58,662</td><td className="num bear">32.1</td><td className="neut">—</td><td className="bear">云下 ↑72.5k 10b</td><td>Buy 4</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">58,662</td><td className="num bear">32.3</td><td className="bear">死叉（水下）1b</td><td className="bear">云下 ↑99.5k 22b</td><td>Buy 7</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">58,662</td><td className="num bear">40.8</td><td className="neut">—（DIF 水下）</td><td className="bull">云上 ↓47.0k 29b</td><td>TD9 BUY</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 00:01Z scan（08:01 北京；滚动 latest
                    文件、逐字存档于 /opt/desk-note/snapshots/2026-07-01-0006/）。净读{' '}
                    <em>multi-TF 共振空 · 卖反弹（1 多 / 9 空 / 0 中性）</em>；regime{' '}
                    <em>6/9 reversal / 均值回归 regime（JT&lt;0、偏反弹）</em>；活跃背离{' '}
                    <em>reversal：顶背离 1h、底背离 15m / 30m / 1h；hidden（延续）：
                    BEAR hid 15m / 30m / 1h / 4h / 1d、BULL hid 30m / 1h</em>。头部告警：{' '}
                    <em>8h 水下死叉（2 根前、DIF −939.2——自 06-30 金叉翻过来）</em>、{' '}
                    <em>1d 水下死叉（1 根前、DIF −2,360.4——自 06-30 金叉翻过来）</em>、{' '}
                    <em>1w 水下死叉（1 根前、DIF −5,878.7）</em>、{' '}
                    <em>15m 水下金叉（1 根前、DIF −13.8）</em>、{' '}
                    <em>1h 水下金叉（2 根前、DIF −319.9）</em>、{' '}
                    <em>1M TD9 BUY 印于 $58,662——超卖反转提示</em>。扫描现货 $58,662、
                    24h −2.54%、24h H/L $60,250 / $58,160、qVol $11.30B。收盘为未收盘
                    K 线；每个值在各 TF 收盘前都按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵是与 06-30 一样深的头顶墙、现货在反转上又从地板落远了、所以
              谱系第七根 cut{' '}
              <span className="dn-tag bear">矩阵上每根线都在头顶——无正偏移、现货
              头顶无 MA</span>。$58,701 坐在{' '}
              <span className="dn-tag bear">D-EMA20 $62,059 下方 −5.41%</span>——最近
              一根、仍在头顶——然后{' '}
              <span className="dn-tag bear">D-SMA20 $62,436 下方 −5.98%</span> 与{' '}
              <span className="dn-tag bear">全历史 W-SMA200 200W 地板 $62,643 下方
              −6.29%</span>（本次不变）。之上、周期代理{' '}
              <span className="dn-tag bear">D-EMA50 $66,307（−11.47%）</span>、再{' '}
              <span className="dn-tag bear">W-EMA200 $67,422（−12.93%、种子）</span>、再{' '}
              <span className="dn-tag bear">D-SMA50 $68,100（−13.80%）</span>、再一道
              密集头顶带：{' '}
              <span className="dn-tag bear">D-EMA100 $70,094（−16.25%）</span>、{' '}
              <span className="dn-tag bear">W-SMA20 $70,502（−16.74%）</span>、{' '}
              <span className="dn-tag bear">D-SMA150 $70,548（−16.79%）</span>、{' '}
              <span className="dn-tag bear">D-SMA100 $71,227（−17.59%）</span>、{' '}
              <span className="dn-tag bear">W-EMA20 $71,780（−18.22%）</span>、{' '}
              <span className="dn-tag bear">D-EMA150 $73,265（−19.88%）</span>、{' '}
              <span className="dn-tag bear">W-EMA150 $73,825（−20.49%）</span>、{' '}
              <span className="dn-tag bear">D-SMA200 $75,205（−21.95%）</span>、{' '}
              <span className="dn-tag bear">W-SMA150 $75,876（−22.64%）</span>、{' '}
              <span className="dn-tag bear">D-EMA200 $76,161（−22.93%）</span>。更高更
              远、已弃用：W-EMA100 $80,125（−26.74%）、W-EMA50 $80,876（−27.42%）、
              W-SMA100 $88,508（−33.68%）、W-SMA50 $88,624（−33.76%）。{' '}
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-07-01 00:05Z（close $58,701.30）；偏移
                按同一根最末 bar close 重算、是实时盘面冻结期间可得的最新现货。显示的
                MA 水位按 $ 取整、偏移用精确序列值算。显示的周阶梯用 2023→ 子集
                （184 根周 bar）、所以 W-SMA200 在那里不可计算、W-EMA200 $67,422 从可用
                历史 seed；200W 地板 $62,643 从全历史 glob 单独重算（356 根完成的周
                W-MON bar、含已定的 06-29 周、不含进行中的 07-06 周——对 06-30 不变、
                06-29 周上一篇已定）。日收：06-22 $63,990（= 22JUN 周收）、06-23
                $62,697、06-24 $61,051（首根收在地板下）、06-25 $59,772、06-26 $60,072、
                06-27 $60,000、06-28 $59,550、06-29 $60,225（一根上收 +$674.50、AND 那
                根确认破位的周收）、06-30 $58,605（第七根收下方、一根下收 −$1,619.30、
                本轮最低——06-29 上收被交还）、07-01（进行中、5 分钟 bar）$58,701——
                地板破位仍确认、反弹被反转。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子翻回净空 γ aggregate −31.5M（06-30 是 +5.6M、06-29 是 −20.1M）——本子现在又<em>放大</em>下一步 · 近端 3JUL26 2.3 DTE 放大器炸开到 −21.15M（自 06-30 的 −4.86M）、现在是最重负 expiry、前端是 1JUL26 0.3 DTE −3.65M（今日 ~08:00Z 结算）· flip 从 $60,135 落到 $59,804、现货丢掉它、现货现在下方 −1.84%（曾 +0.12% 上方）· IV 44.8%</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子反转了 06-30 的多 γ 翻面、又敌对地穿了回去：aggregate γ
                从 +5.6M 净多翻到 −31.5M 净空 γ、所以本子又放大而非阻尼下一步、flip
                重夺随现货跌破 flip 而翻回负
              </span>
              。aggregate GEX 是{' '}
              <span className="dn-tag bear">−31.5M / 1%</span>（06-30 是 +5.6M、06-29 是
              −20.1M、06-28 是 +5.9M）；本子在过去三篇里空 → 多 → 空来回甩、现在坐在
              四篇里最深的净空 γ。0-γ flip 落{' '}
              <span className="dn-tag">$60,135 → $59,804（−$331）</span>、现货 $58,701
              跌破它、所以现货坐在 <span className="dn-tag bear">flip 下方 −1.84%</span>
              （现货口径 58,701.30 / 59,804 − 1 = −1.844%）；GEX 文件自己的
              &ldquo;dist to flip&rdquo; 对它的 Deribit idx $58,862（比 parquet 现货高
              $161）读 −1.6%、算{' '}
              <span className="dn-tag bear">−1.58%</span>
              （58,862 / 59,804 − 1 = −1.575%）——两参考都在 flip 下方、自 06-30 的
              +0.12% 上方丢失。墙图是一道跨现货的 put-重架子：最重是{' '}
              <span className="dn-tag bear">$58k −18.63M</span>（最重墙、现在就在现货
              下方、最近的支撑测试）、{' '}
              <span className="dn-tag bear">$59k −9.23M</span> 就在现货上方、{' '}
              <span className="dn-tag bear">$60k −14.12M</span>、{' '}
              <span className="dn-tag bear">$56k −13.52M</span>、{' '}
              <span className="dn-tag bear">$55k −12.40M</span>、{' '}
              <span className="dn-tag bear">$50k −8.13M</span>、{' '}
              <span className="dn-tag bull">$60.5k +6.73M</span>（第一根正天花板）、{' '}
              <span className="dn-tag bear">$58.5k −6.09M</span>、{' '}
              <span className="dn-tag bull">$80k +5.65M</span>、{' '}
              <span className="dn-tag bull">$63k +5.36M</span>。{' '}
              <span className="dn-em">
                关键地、aggregate 又是净空 γ、所以本子放大而非阻尼下一步——是对 06-30
                那本 +5.6M 多 γ 本子的反转、也是最近四篇里最负。现货 $58,701 坐在 $58k
                −18.63M 墙（就在下方、现在是最近的支撑测试）与 $59k −9.23M 墙（就在上方）
                之间；整根近架子（$60k、$56k、$55k、$50k）都是负、没有一根是被证实的
                地板、第一根正墙要到 $60.5k +6.73M、在头顶。一本在 flip 下方、带一根
                炸开的近端放大器的空 γ 本子、是谱系自 06-26 那本 −87.5M 以来带过的最
                敌对 γ 背景。
              </span>{' '}
              按 expiry 近端集中<em>重新浮现</em>并炸开：前端是负的 1JUL26{' '}
              <span className="dn-tag bear">0.3 DTE 在 −3.65M（今日 ~08:00Z 结算）</span>、
              然后 2JUL26 1.3{' '}
              <span className="dn-tag bull">+2.04M</span>、3JUL26 2.3{' '}
              <span className="dn-tag bear">−21.15M</span>（近端下行放大器、自 06-30 的
              −4.86M 炸开——现在是最重负 expiry）、4JUL26 3.3 +0.34M、10JUL26 9.3{' '}
              <span className="dn-tag bear">−7.11M</span>、17JUL26 16.3{' '}
              <span className="dn-tag bull">+2.37M</span>、31JUL26 30.3{' '}
              <span className="dn-tag bear">−4.08M</span>、28AUG26 58.3 +0.14M、25SEP26
              86.3 <span className="dn-tag bear">−6.66M</span>、25DEC26 177.3 −1.66M、
              26MAR27 268.3 −0.05M、25JUN27 359.3 +0.45M。30JUN26 前端昨日 ~08:00Z
              结算；06-30 备忘看到缩到 −4.86M 的近端下行放大器已炸开到 3JUL26 −21.15M
              在 2.3 DTE——集中的短端下行回来了、而且更大。（现货参考的 aggregate
              −31.5M 是现货处的 net GEX；by-expiry 行是一根独立分解、不必对它求和。）
            </p>

            <p>
              IV 中位数横跨 874 合约是{' '}
              <span className="dn-tag">44.8%</span>（自 06-30 的 43.9% / 874 合约上来、
              链数不变）对 30D close-to-close RV{' '}
              <span className="dn-tag">43.37%</span>——链级 richness{' '}
              <span className="dn-tag">~+1.43pt</span> 对已实现（06-30 是 ~+0.32pt——
              本子翻回空 γ、下行重启、链<em>重新变贵</em>）、RV 保持高（今天 43.37%
              vs 06-30 的 43.58% 与 05-31 的 24.91%——06-08 → 06-18 下行腿开启的高波
              regime 持续）。是 874 合约的链中位数、<span className="dn-em">不是</span>
              {' '}可交易价差；expiry-/strike-level vega、skew 与期限结构仍未载入、vol
              读法保持 framework only。RV 方法：30D close-to-close、logret.std × √365
              × 100、用最末 30 根日 log return（= 连续 31 根日 close）、锚自 parquet
              最末 bar 2026-07-01 00:05Z；底层 close 窗区间 $58,605 – $71,392。P/C 比
              0.57、Call OI 223,034 / Put OI 128,197 BTC。
            </p>

            <h2 className="dn-sec">
              宏观 <span className="dn-roman">IV · ~1.82h 渲染——10Y 平在 4.38%（距闸 15bp）、TIPS 2.16% RISK-OFF、HY OAS 2.80% 收窄 −3.0bp 但仍在 2.78% re-grow 闸上方、MOVE 68.1（松）· FX 腿硬：DXY 松到 101.17（仍 EXTREME）与 USD/JPY 161.93 · regime 仍 NORMAL 但松到阈值（均值 |r| 0.250）、BTC 现在是 7d 最差、股指转绿</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观面板渲染滞后 ~1.82h、读边际转松：利率平（10Y 4.38%）、信用价差
                收窄 −3bp 到 2.80% 但仍在 2.78% re-grow 闸上方、美元松到 101.17 但仍
                EXTREME
              </span>
              。面板渲染 2026-06-30 22:17Z、比快照早约 1.82h。US 10Y nominal{' '}
              <span className="dn-tag">4.38%（0.0bp）</span>、regime z{' '}
              <span className="dn-tag bear">+0.88</span>——紧 regime、RISK-OFF、距 4.53%
              闸 15bp。10Y TIPS real{' '}
              <span className="dn-tag">2.16%（−2.0bp）</span>、regime z{' '}
              <span className="dn-tag bear">+1.93</span>——仍 RISK-OFF、面板上最紧的行
              之一。5Y5Y BE 通胀{' '}
              <span className="dn-tag">2.20%（+1.0bp）</span>、10Y breakeven{' '}
              <span className="dn-tag">2.22%（+2.0bp）</span>——通胀预期软。HY OAS{' '}
              <span className="dn-tag bear">2.80%（−3.0bp）</span>、regime z{' '}
              <span className="dn-tag bull">−0.62</span>——信用在 z-regime 上仍松；价差
              收窄 −3bp 但仍在 2.78% re-grow 闸上方印（06-30 在 2.83% 触发、本次守在线
              上方）。MOVE 债波是{' '}
              <span className="dn-tag">68.1</span>——源在自己 1d delta 上标 +1.35、仍
              &ldquo;松&rdquo;。美元松了但仍 EXTREME、FX 腿本次保持硬：DXY{' '}
              <span className="dn-tag bear">101.17（+0.06 当日）</span>、regime z{' '}
              <span className="dn-tag bear">+2.50</span>、自 06-30 的 101.37 松了但仍
              extreme。Fed 净流动性{' '}
              <span className="dn-tag bear">$5.812T（−0.037T）</span>、regime z{' '}
              <span className="dn-tag bear">−1.16</span>——本次无新周度印。USD/JPY{' '}
              <span className="dn-tag">161.93（+0.15 当日）</span>、regime z +1.57；
              US-JP 10Y 利差{' '}
              <span className="dn-tag">1.73%（0.0bp）</span> 窄；USD/CNY{' '}
              <span className="dn-tag">6.7783</span>；WTI{' '}
              <span className="dn-tag stale">$78.9（现陈旧 8d）</span>。{' '}
              <span className="dn-em">
                净：宏观背景保持 risk-off 但边际转松——信用腿收窄 −3bp 到 2.80%（仍
                在 2.78% re-grow 闸上方）、利率腿平在 4.38%（距 4.53% 闸 15bp）、美元松
                到 101.17 但仍 EXTREME。reclaim-long 利率筛（10Y &lt; 4.55%）在 4.38%
                仍 TRUE、有余量。宏观读仍加强而非驳斥 200W 地板的确认破位——一道宽
                risk-off 背景、信用闸仍触发——但本次新鲜的信号是跨资产翻转、不是宏观
                面板：股指在 7d 窗上转绿而 BTC 跌得最狠、这让这段破位看起来比
                risk-off 驱动更 idiosyncratic（见下方跨资产）。
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
                <tr><td>US 10Y nominal</td><td className="num">4.38%</td><td className="num">0.0bp</td><td className="num bear">+0.88</td><td className="bear">紧 · RISK-OFF · 距闸 15bp</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.16%</td><td className="num bull">−2.0bp</td><td className="num bear">+1.93</td><td className="bear">RISK-OFF</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.20%</td><td className="num">+1.0bp</td><td className="num">−0.40</td><td className="neut">软</td></tr>
                <tr><td>10Y breakeven</td><td className="num">2.22%</td><td className="num">+2.0bp</td><td className="num">−1.73</td><td className="neut">软</td></tr>
                <tr><td>HY OAS</td><td className="num">2.80%</td><td className="num bull">−3.0bp</td><td className="num bull">−0.62</td><td className="bear">收窄但仍在 2.78% re-grow 闸上方</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.516</td><td className="num">−0.00</td><td className="num">−0.07</td><td className="stale">周度 · 中性 · 现陈旧 11d</td></tr>
                <tr><td>MOVE 债波</td><td className="num">68.1</td><td className="num bear">+1.35</td><td className="num bull">−0.66</td><td className="bull">松</td></tr>
                <tr><td>DXY</td><td className="num">101.17</td><td className="num bear">+0.06</td><td className="num bear">+2.50</td><td className="bear">EXTREME RISK-OFF · 松了但硬</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.812T</td><td className="num bear">−0.037T</td><td className="num bear">−1.16</td><td className="bear">泄 · 无新周度印</td></tr>
                <tr><td>USD/JPY</td><td className="num">161.93</td><td className="num bear">+0.15</td><td className="num bear">+1.57</td><td className="bear">硬</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">1.73%</td><td className="num">0.0bp</td><td className="num bull">−1.29</td><td className="neut">窄</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7783</td><td className="num">−0.02</td><td className="num bull">−1.49</td><td className="neut">松</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">+13.5bp（月度）</td><td className="num bear">+2.56</td><td className="stale">月度 · 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、汇总 00:01Z——{' '}
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。非对角线
              均值 <span className="dn-tag">|r| 0.250</span>——自 06-30 的 0.258 松到
              正好{' '}
              <span className="dn-tag">踩在 0.25 idiosyncratic 阈值上</span>、所以
              regime 行守在{' '}
              <span className="dn-signal">NORMAL——BTC 仍按相关性耦合到宽跨资产
              复合体</span>、其顶部对齐仍是股票 / 工业金属簇：NQ{' '}
              <span className="dn-tag">+0.738</span>、NVDA{' '}
              <span className="dn-tag">+0.719</span>、SP500{' '}
              <span className="dn-tag">+0.663</span>、URNM{' '}
              <span className="dn-tag">+0.542</span>、JP225{' '}
              <span className="dn-tag">+0.530</span>、TSLA{' '}
              <span className="dn-tag">+0.496</span>、COPPER{' '}
              <span className="dn-tag">+0.475</span>、PALL{' '}
              <span className="dn-tag">+0.403</span>、PLAT{' '}
              <span className="dn-tag">+0.348</span>、AAPL{' '}
              <span className="dn-tag">+0.345</span>、META{' '}
              <span className="dn-tag">+0.336</span>、SILVER{' '}
              <span className="dn-tag">+0.328</span>、而 CL{' '}
              <span className="dn-tag">−0.036</span> / BRENT{' '}
              <span className="dn-tag">−0.043</span> 反向、GOLD 弱正{' '}
              <span className="dn-tag">+0.232</span>。但 7d 表现决定性翻转：宽风险
              复合体转绿而 BTC 跌得最狠——{' '}
              <span className="dn-tag bear">BTC −6.84%</span> 现在是复合体最差表现、
              低于 URNM{' '}
              <span className="dn-tag bear">−6.07%</span> 与 PLAT{' '}
              <span className="dn-tag bear">−5.86%</span>、而股指涨：NQ{' '}
              <span className="dn-tag bull">+2.45%</span>、SP500{' '}
              <span className="dn-tag bull">+1.33%</span>、JP225{' '}
              <span className="dn-tag bull">+2.66%</span>、GOOGL{' '}
              <span className="dn-tag bull">+2.72%</span>、AMZN{' '}
              <span className="dn-tag bull">+2.67%</span>、TSLA{' '}
              <span className="dn-tag bull">+8.25%</span>、MSFT{' '}
              <span className="dn-tag bull">+0.48%</span>、而 NVDA{' '}
              <span className="dn-tag bear">−1.00%</span>、AAPL{' '}
              <span className="dn-tag bear">−1.40%</span>、META{' '}
              <span className="dn-tag bear">−0.20%</span> 是唯一的红巨头；金属混
              （GOLD{' '}
              <span className="dn-tag bear">−2.21%</span>、SILVER{' '}
              <span className="dn-tag bear">−5.14%</span>、PLAT{' '}
              <span className="dn-tag bear">−5.86%</span>、PALL{' '}
              <span className="dn-tag bear">−1.81%</span>、COPPER{' '}
              <span className="dn-tag bull">+0.67%</span>）；原油跌（CL{' '}
              <span className="dn-tag bear">−3.76%</span>、BRENT{' '}
              <span className="dn-tag bear">−3.96%</span>、NGAS{' '}
              <span className="dn-tag bull">+1.98%</span>）。{' '}
              <span className="dn-em">
                BTC 的 7d 回报 −6.84% vs NQ +2.45% 是一根 −9.29pt 的落后（06-30 是
                −4.33pt）——对 NQ 的缺口<em>急剧</em>扩大、本次它翻转了框架：BTC 现在
                是整根复合体最深的落后者、而股票盘面在 BTC 破位时涨。相关 regime 守
                NORMAL（均值 |r| 正好在 0.25 阈值、顶部对齐仍是股票/金属）、所以 BTC
                还没统计脱钩——但回报离散说这根确认破位看起来<em>更</em> BTC-specific、
                而非 risk-off 驱动、是自 06-24 → 06-30 备忘（BTC 在一片宽红复合体里跌）
                的一根转变。宏观 z-面板仍读 risk-off（利率紧、信用闸触发、DXY
                EXTREME）、但同侪 7d 实际印的盘面是绿——所以 risk-off-盘面 框架本次
                变弱、没翻成一根干净的 idiosyncratic 读。
              </span>{' '}
              JGB 月度 2.65% 带一根 EXTREME RISK-OFF 月度标——不依赖。
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · 本子 FLAT · 200W 地板——06-29 周收破位已确认（$60,224.70 &lt; $62,643、−3.86%）、06-15 重夺论已证伪；随后那根反弹失败了（06-30 收 $58,605.40 全数吐回）· scout 价格前提翻回 FALSE（现货低于 flip −1.84%）——scout 仍站开（盘面盲 ~18.94 天、无确认引擎触发、现货下方无 MA）· 宏观尾信用闸仍触发（OAS 2.80% &gt; 2.78%）· 挤压周期 ON HOLD（SM 死 ~18.94 天）</span>
            </h2>

            <p>
              <span className="dn-signal">
                本子平、继续平——谱系的结构性正面在周收层面被<em>反向</em>解掉
                （200W 破位在周收上确认、重夺论证伪）、06-30 那根把 gamma / flip /
                MTF 一度转建设性的反弹已经失败、而绑定的约束仍是数据完整性
              </span>
              。06-29 周收结算在 $60,224.70、低于 $62,643 地板 −3.86%——破位已
              <em>确认</em>、06-15 重夺论已<em>证伪</em>、本次没有任何东西撤销这点。
              06-30 那张备忘记录了一根打进确认里的反弹（上收、$60k 与 flip 重夺、
              本子多 γ、MTF 改善到 1/6/3）；本次那根反弹<em>失败</em>了——06-30 日
              收 $58,605.40 把整根 06-29 上收全数吐回、dealer 本子翻回 −31.5M 净空
              γ、近端放大器炸开到 −21.15M、现货丢了 flip（低 −1.84%）、MTF 回坏到
              1/9/0。scout 那条 06-30 翻 TRUE 的价格前提又翻回 FALSE——现货再次
              在 flip 下方——所以连那一条腿也重新关上了。也不做新空：追一根已经跌
              到地板下 −6.29% 的确认破位、进一个空 γ 放大的本子、还带一根印出的 1M
              TD9 买入与快框底背离、在盲盘面上——事后是一个很差的入场。今天的交易
              本子是：无空、无 scout、无新对冲——先修盘面、再读这根失败的反弹是空
              头回补耗尽、还是需求断了。
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · PRIMARY · 200W 周期地板盯盘——破位已确认：06-29 周收 $60,224.70 结算在 $62,643 地板下 −3.86%（周收升级已触发）、06-15 重夺论已证伪；随后那根反弹失败（06-30 收 $58,605.40 吐回）；连续七根日收在地板下（06-24 → 06-30）</span>
              <div className="dn-trade-name">
                200W 周期地板盯盘——破位在 06-29 周收上已确认、反弹已失败：地板 $62,643 = 全历史 W-SMA200（356 根完成周 bar、本次不变）、06-29 周收 $60,224.70（低 −3.86%）确认了破位、06-30 日收 $58,605.40 吐回 06-29 上收（第七根日收在下方、也是这波最深）、06-15 重夺论证伪
              </div>
              <div className="dn-thesis">
                06-30 那张记录了破位在 06-29 周收上确认、盘面打进它里面反弹。本次
                反弹失败：06-30 日 bar 收在{' '}
                <span className="dn-tag bear">$58,605.40、低于 $62,643 地板 −6.45%</span>、
                一根下收 −$1,619.30、把整根 06-29 上收全数吐回、并印出这波最低的收盘。
                按框架：盘中插针不是破位、一根日收在下方是早警、一根持续的周收在下方
                才是破地板、证伪 06-15 重夺论的升级——那根周收已在 06-29 印出、所以
                破位维持<em>确认</em>、重夺论维持<em>证伪</em>。22JUN 周收 $63,990 是
                最后一根周持；它仍被取代。{' '}
                <span className="dn-em">谱系的结构性正面在周收层面维持被反向解掉；
                现货下方无 MA 托、地板——不变、$62,643——是确认的阻力、而那根一度闪出
                建设性的反弹已被吐回。</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W 地板（不变）</span><span className="dn-lvl-v">$62,643 = 全历史 W-SMA200、本次自 2019→ parquet glob 重算（356 根完成周 W-MON bar、含已解掉的 06-29 周、排除进行中的 07-06 周）；较 06-30 不变、06-29 周上次已解 · weekly_200sma.json 缺、所以比率百分位 / 上次事件留空未溯源、非杜撰</span></div>
                <div><span className="dn-lvl-k">破位——已确认、反弹失败</span><span className="dn-lvl-v bear">06-29 周收 $60,224.70 结算在地板下 −3.86%——破位确认；连续七根日收在下方（06-24 $61,051 −2.54%、06-25 $59,772 −4.58%、06-26 $60,072 −4.10%、06-27 $60,000 −4.22%、06-28 $59,550 −4.94%、06-29 $60,225 −3.86% 一根上收、06-30 $58,605 −6.45% 一根下收、最深）；06-29 上收在 06-30 被吐回</span></div>
                <div><span className="dn-lvl-k">重夺论——已证伪</span><span className="dn-lvl-v bear">06-15 重夺论要求地板在周收基础上守住；06-29 周收在地板下证伪它——先前 22JUN 周持（$63,990）被取代</span></div>
                <div><span className="dn-lvl-k">重夺阶梯（现在是恢复路径）</span><span className="dn-lvl-v bear">现货低于 flip $59,804（丢了）−1.84%、低于 D-EMA20 $62,059 −5.41%、低于地板 $62,643 −6.29%、低于 D-SMA20 $62,436 −5.98%——现货下方无 MA；一根结构性恢复是持续的周收重回地板 $62,643 上方（破位必须撤销的水位）、以 flip $59,804、D-EMA20 $62,059、D-SMA20 $62,436 作中继站——不是盲盘面上的 scout 触发（见 scout）</span></div>
              </div>
              <div className="dn-gating">
                <b>是框架、不是交易。</b>地板盯盘是唯一承重的 live 水位、其余全部
                陈旧或仅框架。破位在周收上确认、重夺论证伪、反弹失败——盯盘上不
                取仓位：它设定确认破位（06-29 周收 $60,224.70 &lt; $62,643）、恢复
                条件（持续周收重回地板 $62,643 上方）、与重夺中继站（flip $59,804 →
                D-EMA20 $62,059 → D-SMA20 $62,436 → 地板 $62,643）、交易台不会在
                地板下 −6.29% 追一根确认破位空、进一根印出的 1M TD9 买入与盲盘面
                底背离、也不会做多一根它无法确认的恢复。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout · 仍站开 · 价格前提翻回 FALSE（现货低于 flip −1.84%、自 06-30 的 +0.12% 上方丢失）且本子翻回净空 γ——06-30 转 TRUE 的那一条腿又关上了；盘面盲 ~18.94 天 + 无确认引擎触发 + 现货下方无 MA 仍绑定</span>
              <div className="dn-trade-name">
                回补反弹 scout——flip 重夺翻回 FALSE（现货低 −1.84%）且本子翻回净空 γ、连价格腿也重新关上；scout 在盲盘面、无确认引擎触发、现货下方无 MA 下维持站开
              </div>
              <div className="dn-thesis">
                06-22 那张看到 scout 价格前提短暂印出、06-30 那张看到它翻 TRUE 并
                守住（现货高于 flip +0.12%）。本次它翻回 FALSE：现货{' '}
                <em>低于 flip $59,804 −1.84%</em>（flip 滑了 −$331）、丢了 $60k 与
                $59k、dealer 本子翻回 −31.5M 净空 γ。所以 06-30 一起转建设性的价格
                腿与 gamma 腿都重新关上——scout 各条件再次全被挡。（1）仓位腿（SM
                空头泄、funding 姿态、回补流）全需 live 盘面、而没有——交易台看不到
                这根失败反弹是空头回补耗尽、还是需求断了。（2）引擎不带确认的建设性
                触发——只有未确认的水下金叉（15m / 1h / 30m）、一根回到云内的 15m、
                与一根刚印的 1M TD9 买入；无确认多框转向。（3）现货下方仍无 MA——现货
                在 flip、D-EMA20、D-SMA20 与地板下方。{' '}
                <span className="dn-em">在仓位盲的盘面上做 scout 多、无确认引擎印、
                净空 γ 放大本子、现货下方无 MA——不是交易——而本次连那根 06-30 闪
                TRUE 的价格前提也重新关上了。1M TD9 买入是一根值得记录的真超卖提示、
                但单根月度印不足以对一根失败反弹加码进 scout。</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v bear">站开 · 无入场 · 价格前提翻回 FALSE（现货低于 flip −1.84%、自 06-30 的 +0.12% 上方丢失）且本子净空 γ；现货下方无 MA、盘面盲、引擎未确认；仅在 live 盘面恢复 AND 一根确认引擎印后重评</span></div>
                <div><span className="dn-lvl-k">技术前提</span><span className="dn-lvl-v bear">flip $59,804 重夺（FALSE——现货低 −1.84%）AND D-EMA20 $62,059 / 地板 $62,643 / D-SMA20 $62,436 重夺假（现货全在下方、下方无 MA）AND 一根确认引擎印（非真——1 多 / 9 空 / 0 中、只有快框未确认水下金叉与一根 1M TD9 买入；regime 守均值回归）</span></div>
                <div><span className="dn-lvl-k">数据前提</span><span className="dn-lvl-v bear">live 盘面恢复（现冻 329.4h）AND SM 馈活（现死 ~18.94 天）——两者都须先立、任何仓位腿才可读；这是绑定的阻塞</span></div>
              </div>
              <div className="dn-gating">
                <b>硬规则：</b>无 live 仓位盘面则不入 scout。1M TD9 买入、水下金叉、
                底背离与偏反弹的 regime——都不在 SM / funding / 流腿盲、现货在 flip /
                D-EMA20 / 地板 / D-SMA20 下方且下方无 MA、本子净空 γ 无确认引擎触发时
                触发 scout——交易台不对一根它看不到被回补的回补反弹加码。06-22 抬起、
                06-30 再抬起的价格阻塞本次重新关上；操作阻塞（盘面断）与引擎阻塞（无
                确认触发）仍绑定。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 宏观尾 · put-spread re-grow 闸——信用腿仍触发：HY OAS 2.80% &gt; 2.78% 闸（本次收窄 −3.0bp 但守在上方）、10Y 腿差 15bp（4.38% vs 4.53% 闸）；信用腿在收盘基础上仍在触发上方</span>
              <div className="dn-trade-name">
                下行 put-spread——re-grow 信用闸仍触发（OAS 2.80% &gt; 2.78%）、利率腿差 15bp；无加对冲（dealer 本子净空 γ 带炸开的近端放大器、所以内生下行风险<em>再增长</em>、即便宏观信用闸向其线收窄）
              </div>
              <div className="dn-thesis">
                谱系带的宏观 re-grow 闸——HY OAS &gt; 2.78% OR 10Y &gt; 4.53% 作为
                re-grow 一根下行尾的条件——在信用腿上维持触发：HY OAS{' '}
                <em>2.80%</em>、本次 −3bp 但仍在闸上方（06-30 在 2.83% 触发、守在线
                上方一点）、而 10Y 平在 4.38%、差 15bp。所以信用腿维持在触发上方、
                利率腿离得远。reclaim-long 利率筛（10Y &lt; 4.55%）在 4.38% 维持
                TRUE、有空间。宏观盘面在 z-面板上仍是一根真 risk-off 冲量（利率紧、
                信用闸触发、美元 EXTREME）、但宏观尾不是对一根内生兼特质地板破位的
                合适工具、而 dealer 本子已翻回净空 γ、近端放大器炸开到 −21.15M、所以
                内生下行结构本次自己重新增长了——这是盯尾的理由、不是在 −6.29% 破位
                后追它的理由。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v bear">无仓 · 信用闸在收盘基础上仍触发 · HY OAS 2.80% &gt; 2.78%（−3.0bp 但守在上方）、10Y 腿差 15bp</span></div>
                <div><span className="dn-lvl-k">re-grow 触发（信用上已触发）</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% 收——在 2.80% 已触发（收窄 −3.0bp 但守在上方）· OR 10Y &gt; 4.53% 收（现 4.38%、距触发 15bp——差得最远的一腿）</span></div>
                <div><span className="dn-lvl-k">reclaim-long 利率筛</span><span className="dn-lvl-v bull">10Y &lt; 4.55% 收——在 4.38% 真；等一根 BTC 内部转向 AND 一根 live 盘面才能转化</span></div>
              </div>
              <div className="dn-gating">
                <b>注意：</b>re-grow 闸是随水位漂移设的裁量盯盘、不是回测断点。信用腿
                在闸上守一根收盘（OAS 2.80% &gt; 2.78%）、利率腿差 15bp；一根从触发
                信用闸起的下行尾会在另一篇未来备忘里重评（触发 / 失效 / R 在那里定义）；
                注意 dealer 本子已翻回净空 γ、近端放大器炸开、所以内生下行结构本次与
                宏观信用闸同步重新增长——但行情已跑到地板下 −6.29%、所以在这里追一根
                尾会是迟的。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 挤压周期 hostile-2 观察名单 · 无日历先验 · ON HOLD——SM 馈死 ~18.94 天、重堆签名本次不可读</span>
              <div className="dn-trade-name">
                挤压周期 hostile-2——ON HOLD（06-16 → 06-30 的延续）：SM 馈冻 ~454.5h、重堆签名本次不可读
              </div>
              <div className="dn-thesis">
                挤压周期 / 重堆-hostile-2 框架把离散 SM 步（Δshort &gt; 0 + Δlong
                &lt; 0 同一分钟）读作延续签名；其日历先验（BJ 13–15 节奏）在 05-31
                被证伪、此后作为无先验观察名单跑。今天无法评估、理由最简单：SM 馈
                死了。long_btc / short_btc / net_btc 自 2026-06-12 01:36Z 恒定
                （~454.5h）、所以无 SM delta 可读。06-16 那张在 ~94.5h 把它 ON
                HOLD、06-29 那张在 ~406.5h、06-30 那张在 ~430.5h；它在 ~454.5h 维持
                ON HOLD。{' '}
                <span className="dn-em">冻结的馈印不出签名；框架在 SM 数据恢复前
                是黑的。</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">框架状态</span><span className="dn-lvl-v bear">ON HOLD · SM 馈冻 ~454.5h（自 2026-06-12 01:36Z）· 无 SM delta 可计</span></div>
                <div><span className="dn-lvl-k">冻结值（不是读数）</span><span className="dn-lvl-v">long 13,532.4 / short 50,825.7 / net −37,293.3——逐字节恒定、仅用来标记死馈</span></div>
                <div><span className="dn-lvl-k">恢复条件</span><span className="dn-lvl-v">SM 馈恢复写入新鲜 long_btc/short_btc → 从首批新鲜 delta 重评重堆签名</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>一根死的馈不是一根安静的馈。交易台不从一个冻结三元组
                推断「无重堆」——它什么都不推断。挤压周期读数是被暂停、不是转负、而馈
                恢复后首批新鲜 SM delta 是重武装点。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · LIVE 盘面中断仍是运行条件（第十五天）· 200W 地板破位在 06-29 周收上已确认（$60,224.70 &lt; $62,643、−3.86%）、06-15 重夺论证伪、反弹失败（06-30 收 $58,605.40）· flip 丢失（现货低 −1.84%）、本子翻回 −31.5M 净空 γ、近端放大器炸开（3JUL26 −21.15M）· scout 价格前提翻回 FALSE · 宏观信用闸仍触发（OAS 2.80%）、regime NORMAL 但 BTC 现在是 7d 最差表现</span>
            </h2>

            <p>
              06-30 那些条件里：live 盘面<em>没</em>回来——它又死了约 24h、现在冻
              329.4h、SM 馈在 ~18.94 天；200W 地板破位维持在 06-29 周收上确认
              （$60,224.70、低于 $62,643 地板 −3.86%）、06-15 重夺论维持证伪；地板
              本次不变（$62,643、06-29 周上次已解）；06-30 那张带的反弹<em>失败</em>
              ——06-30 日收 $58,605.40 吐回 06-29 上收、印出这波最低收盘；flip 被
              <em>丢失</em>（现货低 −1.84% vs 06-30 高 +0.12%）、flip 滑到 $59,804；
              dealer 本子逆转其 06-30 多 γ 翻转、从 +5.6M 翻<em>回</em> −31.5M 净空
              γ——它现在又放大下一根行情、近端下行放大器炸开到 3JUL26 −21.15M；
              scout 价格前提翻回 FALSE、引擎只带未确认水下金叉与一根印出的 1M TD9
              买入；宏观 re-grow 闸在信用腿上维持触发（OAS 2.80% &gt; 2.78%）、利率
              腿平在 4.38%（差 15bp）；相关 regime 守 NORMAL 但 BTC 的 7d 回报随股指
              转绿而成复合体<em>最差</em>、所以破位看起来更特质；挤压周期在更死的馈上
              维持 ON HOLD。主导条件不变：<em>交易台仓位盲、进一根在周收上确认的
              200W 地板破位、一根现已失败的反弹、与一根翻回净空 γ 的本子——全都是它
              无法对盘面确认的</em>。今天条件围绕持续的中断、确认的周收破位、失败的
              反弹、与净空 γ 翻回重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>LIVE 盘面恢复（PRIMARY 操作）</td><td className="bull">live_db.json 恢复写入 2026-06-17 06:43Z 之后的新鲜行 AND SM 三元组从其 06-12 01:36Z 冻结更新</td><td>完整重读 funding / OI / 流 / SM；只有那时 scout 或挤压周期才可评估——也只有那时那根失败的 06-30 反弹才能被确认为空头回补耗尽 vs 需求断了；仓位维度现已连续十三张备忘盲读</td></tr>
                <tr><td>200W 地板——破位已确认、反弹失败</td><td className="bear">06-29 周收 $60,224.70 结算在 $62,643 地板下 −3.86%——破位确认；连续七根日收在下方（06-24 → 06-30）、06-30 收 $58,605.40 最深（−6.45%）、吐回 06-29 上收；进行中 07-01 bar $58,701、低 −6.29%</td><td>地板破位在周收层面确认、反弹失败——地板（$62,643）是确认阻力；不取仓位</td></tr>
                <tr><td>200W 重夺论——已证伪</td><td className="bear">06-15 重夺论要求地板一根周收守住；06-29 周收在下方证伪它——先前 22JUN 周持（$63,990）被取代</td><td>重夺论已死；一根结构性恢复现在要求持续周收重回地板 $62,643 上方；盯那根周收</td></tr>
                <tr><td>Flip 重夺（scout 价格前提）——丢失</td><td className="bear">现货 $58,701 低于 flip $59,804 −1.84%、低于 D-EMA20 $62,059 −5.41%、低于地板 $62,643 −6.29%；现货下方无 MA；flip 坐在地板下方</td><td>价格前提翻回 FALSE——06-30 重夺被吐回；scout 仍需 live 盘面恢复 AND 一根确认引擎印；在盲盘面、现货下方无 MA、丢失被记录、不被交易</td></tr>
                <tr><td>Dealer 本子——翻回净空 γ</td><td className="bear">aggregate GEX −31.5M（06-30 为 +5.6M、06-29 为 −20.1M）；前端 1JUL26 0.3 DTE 在 −3.65M（今日 ~08:00Z 结算）；近端 3JUL26 放大器炸开到 −21.15M；现货坐在 $58k −18.63M 墙下方与 $59k −9.23M 墙上方之间；头上第一堵正墙是 $60.5k +6.73M</td><td>dealer 本子现在又放大下一根行情——近端集中下行风险重新增长；仅盯、无指令（本子敌对但盘面盲）</td></tr>
                <tr><td>宏观尾 re-grow（信用腿已触发）</td><td className="bear">HY OAS 2.80% &gt; 2.78%（已触发、收窄 −3.0bp 但守在上方）OR 10Y &gt; 4.53%（距触发 15bp、平在 4.38%）——FX 腿硬（DXY 101.17、USD/JPY 161.93）</td><td>本篇无对冲指令——触发的信用闸会在另一篇未来备忘重评；注意本子已翻回净空 γ、近端放大器炸开、内生下行结构与宏观闸同步重新增长——但行情已跑到地板下 −6.29%</td></tr>
                <tr><td>reclaim-long 利率筛</td><td className="bull">10Y &lt; 4.55% 收——在 4.38% 真</td><td>独立筛真、有空间；需要一根 BTC 内部转向 AND 一根 live 盘面才能转 scout long</td></tr>
                <tr><td>挤压周期 hostile-2（ON HOLD）</td><td className="stale">SM 馈死 ~454.5h；无 delta 可计</td><td>暂停、不是转负——馈恢复后首批新鲜 SM delta 上重武装</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是{' '}
              <span className="dn-signal">
                那根失败的 06-30 反弹——它在 06-29 重夺了 $60k 与 flip、然后在 06-30
                下收里全数吐回、进一个翻回空 γ 的本子、近端放大器炸开、200W 破位已
                确认——是空头回补耗尽、还是需求断了、只有一根恢复的盘面能说；结构侧、
                恢复仍要求持续周收重回地板 $62,643 上方、以 flip $59,804、D-EMA20
                $62,059、D-SMA20 $62,436 作中继站
              </span>
              。06-30 翻多的 dealer 本子已逆转、翻回彻底（aggregate +5.6M → −31.5M
              净空 γ、近端放大器炸开到 3JUL26 −21.15M、现货从高于 flip +0.12% 到低
              −1.84%）、所以本子现在又放大下一根行情；结构性正面——200W 地板——维持
              在周收上确认破位、06-15 重夺论维持死、反弹失败、而交易台仍读不了那根会
              说这根失败反弹是空头回补还是需求的盘面。在盘面恢复前本篇按写好的跑：
              本子平、scout 价格阻塞翻回 FALSE 且引擎在未确认水下金叉与一根印出的
              1M TD9 买入上、宏观尾信用闸守在线上方（OAS 2.80%）、挤压周期暂停、200W
              地板盯盘是唯一 live 水位——一根在周收上确认破位、反弹被吐回的地板、恢复
              条件是一根周收重回 $62,643 上方。价格吐回 $60k pin 与 flip、MTF 坏了三、
              本子转空 γ、regime 收紧到均值回归带一根印出的 1M TD9 买入；宏观在 z-面板
              上维持 risk-off（利率紧、信用闸触发、美元 EXTREME）、但相关 regime 松到
              阈值、复合体转绿而 BTC 是 7d 最差——所以破位现在看起来更 BTC-特质、而非
              risk-off 驱动——且 dealer 结构又转放大。下一个 24h 的对读是{' '}
              <em>破位-在-周收上-确认、反弹-失败——尊重确认破位、盯现货能否建一根周收
              重回地板上方、先修盘面再读这根失败反弹是空头回补还是需求、并且不在盲
              盘面上 scout 一根引擎无法确认的丢失 flip</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2（已过 codex 敌对式审计 · findings 记于 audits/2026-07-01-desk-note.md）
            </span>
            <b>状态：</b>这是 <b>v2</b> 篇——<b>已过 codex 敌对式审计</b>。跨模型
            敌对审计（codex 主审 + 持发布闸；ask-deepseek 数值二审、经裁定而非
            自动应用）对锁定的 2026-07-01 00:06Z 快照跑、返回{' '}
            <b>PASS-WITH-NOTES——0 CRITICAL、1 MAJOR、1 MINOR</b>（见{' '}
            <code>audits/2026-07-01-desk-note.md</code>）。每条 finding 都经裁定、
            就地应用、并在 v2 promotion 前 grep-close 到零残留。{' '}
            <b>DN-2026-07-01-001（MAJOR——MTF 重叉过度陈述）：</b>搜索的模式{' '}
            <code>8h/12h/1d</code>（重叉 / 翻转分组）、<code>15m/30m/1h …
            below cloud</code>、<code>only 15m/1h … golden</code>、<code>re-took/
            re-crossed the high frames</code>——修正前跨 manifest em、lead、
            Structure II roman + signal + prose + em 有 6+ 命中；<b>修正后 0 残留
            命中</b>。头条 / prose 现在陈述：只有 8h 与 1d 从 06-30 金叉翻回水下
            死叉、12h 是一根与 06-30 刚印的 12h 金叉冲突的 15-bar 死叉且被谱系
            标记（不是新鲜重叉）、30m/1h 跌破云而 15m 滑回云内、15m/30m/1h 全带
            水下金叉——与本页自己的表一致（15m 云内 / 金叉 1b、30m 金叉 12b、
            12h 死叉 15b）。RESOLVED（修正后命中 = 0）。{' '}
            <b>DN-2026-07-01-002（MINOR——陈旧 MSFT 7d 回报）：</b>搜索的模式{' '}
            <code>MSFT +0.29%</code>——修正前 1 命中、<b>修正后 0</b>；按{' '}
            <code>cross_asset_correlation_summary.md:74</code> 修正为{' '}
            <b>+0.48%</b>。RESOLVED（修正后命中 = 0）。{' '}
            <b>ask-deepseek 数值二审（MINOR——0γ 双参考 %）：</b>已裁定并{' '}
            <b>驳回</b>——重算得 58,862 / 59,804 − 1 = −1.575145%、所以草稿的{' '}
            <b>−1.575%</b>（与其 −1.58% 取整）算术正确；DeepSeek 声称的 −1.5734%
            才是误算。未应用改动（GLM / ask-deepseek 是二审辅助、不是审计员）。
            全部 findings <b>已过 codex 敌对式审计</b>。{' '}
            <b>Build note（INFO）：</b>本服务器跑 Node 18.19.1；完整{' '}
            <code>next build</code> 在 Node 版本闸上被环境阻塞（谱系）、所以{' '}
            <code>npx --no-install tsc --noEmit</code> 是 build proxy——STAGE E
            持最终 build 验证。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体情况
            个性化。数字反映单一原子快照（2026-07-01 00:06Z）、provenance 在
            上方 manifest 条带中按节披露；<em>关键地、live 衍生品盘面在快照时
            已冻 329.4h（末行 2026-06-17 06:43Z）、smart-money 仓位馈已死
            ~18.94 天</em>、所以所有 funding、OI、流与仓位数字明确是最后已知 /
            陈旧或不可计、并如此标注；宏观面板渲染 2026-06-30 22:17Z（比快照早
            约 1.82h）。价格、MTF、GEX 与跨资产是新鲜的。这是 v2 篇、在 codex
            敌对审计后 promotion；审计 findings 已裁定并应用。水位、规模与条件
            是交易台流程的示例、不是长期推荐。过去的相关性、γ 与仓位模式不绑定
            未来盘面。衍生品有全损风险、加杠杆下损失可超过保证金。
            <em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                反弹失败、盘面把它吐回：06-29 上收在 06-30 下收里被逆转
                （$58,605.40、这波最低）、dealer 本子翻<em>回</em> −31.5M 净空 γ、
                近端放大器炸开到 −21.15M、现货丢了 flip——全部透过一根第十五天的
                死盘面读。破位确认。反弹失败。本子空 γ。Flip 丢失。盲。
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
            v2 · 2026-07-01 00:06Z snapshot · 已过 codex 敌对式审计 ·
            2026-07-01T01:05:00Z · sources: live_db.json（FROZEN 329.4h）·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED · Yahoo ·
            Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}

