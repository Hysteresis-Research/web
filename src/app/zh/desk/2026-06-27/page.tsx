import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-06-27 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-06-27',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-06-27' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260627() {
  await requireViewer('/zh/desk/2026-06-27');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-06-27 · v2</span>
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
              <span className="dn-big">$60,072</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.39%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-06-27 00:06Z ·{' '}
              <span className="dn-em">
                实时盘面停摆进第十一天——OKX 监控已经冻了 233.4h；价格 / MTF /
                GEX / 跨资产是新的，衍生品盘面仍然黑，SM 本子死了约 14.94 天。
                本次的结构性事件：26JUN26 月期 −74.71M 放大器昨天（约 08:00Z）
                结算了、dealer 本子硬去放大 −87.5M → −20.9M；06-26 日 bar 收
                <em>上</em>到 $60,072（对 06-25 $59,772 +$300，是连续第三根收在
                $62,443 地板下方、但稳回 $60k 上方）；flip 从 $62,074 → $60,432、
                现货现在只在它下方 −0.60%（前 −3.57%）。
              </span>
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 最末行 2026-06-17 06:43Z（t = &ldquo;06-17 14:43&rdquo; BJ）</td>
                  <td className="dn-flag">
                    <b>冻结</b> · live_db.json 自 2026-06-17 06:43Z 起没写过新行
                    （文件 mtime 06-17 06:43:08Z 确认）；进程状态本次未存档 / 未
                    核实——现在对 00:06Z 快照锚已 <b>233.4h 陈旧</b>（06-26 备忘
                    是 209.4h、06-25 是 185.4h——停摆自上一篇又跑了约 24h）。
                    funding / OI / CVD / basis / retail / taker-flow 都是 06-17
                    06:43Z 的<em>最后已知</em>、不是当前。SM 子feed（long_btc /
                    short_btc / net_btc）冻得更久——自 2026-06-12 01:36Z 起常数
                    （约 358.5h / 约 14.94 天）；SM net 与 SM cut-fraction 本次
                    <b>不可计算</b>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-27 00:01Z scan</td>
                  <td className="dn-flag">
                    最新（约快照前 5 分钟）· 滚动 latest 文件、逐字存档于
                    /opt/desk-note/snapshots/2026-06-27-0005/ · 含未收盘 K 线 ·
                    扫描现货 $60,093、24h +0.54%、24h H/L $60,734 / $58,288、
                    qVol $16.83B
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-27 00:01Z 快照</td>
                  <td className="dn-flag">
                    最新（约快照前 5 分钟）· Deribit idx $60,288（比 parquet 现货
                    $60,072 高 $216）· 948 合约（对 06-26 −90）· net GEX{' '}
                    <b>−20.9M</b>（净 SHORT γ，<b>已去放大</b>、从 06-26 的 −87.5M、
                    06-25 的 −73.9M）· flip $60,432（现货在下方 −0.60%、缺口从
                    −3.57% 塌掉）· 主导的 26JUN26 月期 −74.71M 放大器
                    <b>昨天结算了（约 08:00Z、06-26）</b>，集中下行块没了——前端
                    现在是 27JUN26 0.3 DTE、只 −6.03M · 现货 $60,072 just 坐在 $60k
                    −24.18M 墙（仍最重、现在<em>头顶</em>）下方，下面是 $59k
                    −9.82M 与 $58k −12.88M 墙
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-27 00:01Z
                  </td>
                  <td className="dn-flag">最新 · 7d 1h bar · 22 资产 · 166 rows · regime NORMAL（均值 |r| 0.288、对 06-26 的 0.287 基本不动——仍在 0.25 idiosyncratic 阈值上方、BTC 耦合在广义风险复合体上）</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-26 22:16Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.85h · FRED Tier-1 日频本次印了小幅新 deltas：
                    10Y 4.41% → <b>4.40%</b>（−1.0bp、又松一档——现在距闸 13bp）、
                    TIPS 2.23% → <b>2.19%</b>（−4.0bp、仍 EXTREME RISK-OFF）、
                    HY OAS 2.76% → <b>2.78%</b>（+2.0bp、现在 AT 2.78% re-grow 闸
                    ——0bp 触发）· MOVE 债波 <b>66.8</b>（来源 1d Δ +1.40，但对
                    06-26 备忘的 69.1 印是 −2.3、松）· <b>DXY 101.44 与 USD/JPY
                    161.79 对 06-26 渲染逐字节相同</b>（很可能是陈旧周末 carry——
                    已标、未刷新）· Fed 净流动性 $5.812T（无新周度印）· NFCI
                    neutral（周度）· WTI $78.9 现陈旧 4d
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-06-27 00:05Z（close $60,072）</td>
                  <td className="dn-flag">
                    最新 kline（交易所 OHLC、独立于冻结的实时盘面）· 偏移按
                    parquet 最末 bar close 重算——实时盘面冻结期内可得的最新现货 ·
                    显示的周线阶梯用 2023→ 子集（183 根周 bar），所以无 W-SMA200
                    行；200W 地板直接从全历史 glob 重算——355 根走完的周 W-MON bar
                    （2019→present、排除未收盘的 06-29 周）= <b>$62,443</b>、对
                    06-25 / 06-26 备忘钉的 $62,443 不变（一根慢周 SMA、约 $250/周）。
                    <b>现货现在在地板下方 −3.80%（从 −4.14% 收窄）、矩阵上每一根
                    MA 仍在头顶——无正偏移、谱系第三根这样的切</b> · weekly_200sma.json
                    本次缺、所以比率百分位 / last-event 留未溯源、不杜撰
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
              <span className="dn-v bear">−7.24%（STALE · 06-17 06:43Z · 233.4h）</span>
              <span className="dn-src">live_db 原始 funding −0.006608 × 1095 = −7.24% ann（非 ×100）· 06-17 06:43Z 冻结时的<em>最后已知</em>、现 233.4h 陈旧、不是当前读 · 与 06-19 → 06-26 备忘逐字节相同的同一根冻结行；到冻结为止可得的 24h+1m 含端采样窗（1,442 行）ann 均值 +0.20%、区间 −7.24% / +7.21%、负行 819 / 1,442——盘面死时是一本平衡的双向本子</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 对 06-26</span>
              <span className="dn-v">盘面冻结——不可计算</span>
              <span className="dn-src">实时盘面自 06-17 06:43Z 没写过，所以仍没有当前 funding 去对 06-26 备忘差分 · 冻结时最后已知印是 −7.24% ann（空付多）；杠杆门连续第十一天不可评估</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−468 BTC（−0.45%）· STALE 窗</span>
              <span className="dn-src">live_db oi_btc 102,945 在 06-17 06:43Z 冻结、对一根 24h+1m 含端采样窗（1,442 行）的起点 · 该窗<em>结束</em>在冻结、<em>不</em>延到 00:06Z 快照——它描述到 06-17 06:43Z 为止的盘面、已 233.4h 过期</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bear">59.47 / 40.53 · STALE</span>
              <span className="dn-src">live_db `mkt_long_pct` 在 06-17 06:43Z 冻结（24h+1m 含端采样窗起点是 58.29%——roll-over 里 +1.18pt 加多）· 最后已知、233.4h 陈旧</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">−37.29k · FEED 死约 358.5h</span>
              <span className="dn-src">long 13,532.4 − short 50,825.7 · 这根三元组自 2026-06-12 01:36Z 起逐字节常数（约 358.5h / 约 14.94 天）——是一根<em>冻结值</em>、不是当前仓位读；只为标死 feed 而带</span>
            </div>
            <div>
              <span className="dn-k">SM Δ / cut fraction</span>
              <span className="dn-v">不可计算</span>
              <span className="dn-src">SM feed 冻约 14.94 天 · |Δ| / prior_net 无法算——没有当前 SM net 可差分 · 挤压周期 / 重堆框架本次失明、是 06-16 → 06-26 ON-HOLD 的延续</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">44.3% / 43.35%</span>
              <span className="dn-src">GEX IV 中位数横跨 948 合约（00:01Z、新）对 30D close-to-close RV 43.35%（自 parquet）——链级 richness 只约 +0.95pt、对已实现已薄（06-26 是约 +4.2pt、IV 从 47.4% → 44.3% 松）；RV 仍高（06-26 是 43.20%、05-31 是 24.91%）· IV 是 948 合约的链中位数、<em>不是</em>可交易价差</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bear">−0.60%（在下方）</span>
              <span className="dn-src">flip $60,432（前 $62,074 · 26JUN 月期结算时落 −$1,642）· 对 parquet 现货 $60,072（60,072.10 / 60,432 − 1 = −0.596%）/ GEX 文件 Deribit idx $60,288（60,288 / 60,432 − 1 = −0.238%、文件读 −0.2%）——两参考都在 flip 下方、但缺口从 06-26 的 −3.57% 塌掉 · net GEX −20.9M（净 SHORT γ、从 −87.5M 去放大）· 26JUN26 月期 −74.71M 放大器昨天结算、集中下行块没了</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                放大器结算了、本子硬去放大。06-26 备忘标成集中下行风险的那根
                26JUN26 月期 −74.71M 块昨天约 08:00Z 结清，dealer 本子从 −87.5M
                塌到 −20.9M 净空 γ；06-26 日 bar 随后收<em>上</em>到 $60,072
                （对 06-25 $59,772 +$300——连续第三根收在 $62,443 地板下方、但
                稳回 $60k 上方）；flip 从 $62,074 → $60,432、现货现在只在它下方
                −0.60%（前 −3.57%）；MTF 松到 1 多 / 7 空 / 2 中性——全部仍透过
                一条死掉的衍生品盘面读、连续第十一天
              </span>。现货报{' '}
              <span className="dn-tag bull">$60,072、24h +0.39%</span>、在 00:05Z
              parquet bar（MTF 扫描按它自己的窗读 +0.54%），从 06-26 备忘现货
              $59,857 抬上来——地板破位以来谱系首根上收，跌破 $60k 的那段被部分
              抢回。谱系带着的那根结构性正——200W 周收口径守住——仍在决策点：
              22JUN 周收 $63,990（地板上方 +2.48%）仍是最后一根已决周印，但日收
              已经连走三根settle 在它下方（06-24 $61,051 −2.23%、06-25 $59,772
              −4.28%、<span className="dn-tag bear">06-26 $60,072 −3.80%</span>），
              未收盘的 06-29 周读{' '}
              <span className="dn-tag bear">$60,072、地板下方 −3.80%</span>（从
              06-26 的 −4.14% 改善），所以周收升级仍在等 06-29 的 settle、不再
              恶化但也还没逆转。现货连续第三根切下没有一根 MA 在脚下——D-SMA20
              $63,078（−4.76%）与 200W 地板 $62,443（−3.80%）都在头顶、是矩阵上
              最近的线。dealer 本子{' '}
              <span className="dn-tag bull">去放大 −87.5M → −20.9M 净空 γ</span>，
              26JUN26 月期结算、前端滚到{' '}
              <span className="dn-tag">27JUN26 0.3 DTE、只 −6.03M</span>；现货抢回到
              $60k −24.18M 墙附近、现在 just 头顶。MTF 松到{' '}
              <span className="dn-tag bear">1 多 / 7 空 / 2 中性</span>（前 1/9/0）
              ——15m 与 30m 翻中性、印了一根 12h TD9 buy（超卖提示）——但 regime
              分类器翻错了方向，从 5/9 反转（均值回归）翻到{' '}
              <span className="dn-tag bear">6/9 趋势延续</span>（向下）。宏观本次仍
              risk-off：10Y 松一档到 4.40%、HY OAS 扩 2bp 到 2.78% 现在 AT 它的
              re-grow 闸（0bp 触发）、DXY 守 EXTREME 但对 06-26 逐字节相同（很可能
              陈旧周末 carry）。{' '}
              <span className="dn-em">
                操作事实没变、仍然约束：OKX 监控现在已冻 233.4h（最末行 2026-06-17
                06:43Z），funding / OI / CVD / basis / retail 都是最后已知且陈旧，
                SM 仓位本子死了约 14.94 天——SM net 与 cut-fraction 不可计算。交易台
                看不出昨天的上收是真需求、还是月期结算时的薄空头回补。读法落在
                价格、γ 与 MTF 这三样上。
              </span>{' '}
              本子保持 flat：放大器结算、本子去放大，flip 重夺塌到 −0.60% 内，
              现货印了 $60k 上方的首根上收——但地板破位已延到第三根日收，周收升级
              没两边确认，脚下没 MA，regime 翻成向下趋势延续，引擎没确认的多触发，
              盘面还是死的——这里不能 size 任何 scout、也不能 size 任何空。
            </p>

            <p>
              BTC 报 <span className="dn-tag">$60,072</span> 在 parquet 最末 bar
              （00:05Z），24h{' '}
              <span className="dn-tag bull">+0.39%</span>（对正好 24h 前的 $59,839.5
              bar——06-26 00:05Z parquet bar；MTF 扫描按它自己的 00:01Z 窗读 +0.54%
              ——这段差是参考窗、不是数据冲突），在一条{' '}
              <span className="dn-tag">$60,734 / $58,288</span> 的 24h 区间里（按 MTF
              扫描 H/L）。Deribit idx 在 00:01Z 读 $60,288、MTF 扫描现货 $60,093——
              所以最新现货在三个独立的新源上互相印证（parquet kline $60,072、GEX
              Deribit idx $60,288、MTF 扫描 $60,093），即便平常供它的 live_db 盘面
              冻在 06-17 06:43Z、233.4h 陈旧。{' '}
              <span className="dn-signal">结构读已经从「地板在连续两根日收上破、
              加速跌穿 $60k」走到「地板仍在第三根日收上破、但在稳——一根回到 $60k
              上方的上收、放大器结算、flip 重夺在 −0.60% 内」</span>：22JUN 周收
              $63,990（上方 +2.48%）仍是最后一根已决周守，日收走下穿过这条线（06-22
              $63,990、06-23 $62,697、06-24 $61,051、06-25 $59,772），06-26 收
              $60,072 是首根在仍低于线时回弹的。按框架，一根日收在下方是预警、一根
              持续的周收在下方才是破地板、并证伪 06-15 重夺论的升级；未收盘的 06-29
              周读 $60,072（下方 −3.80%），所以升级在等 06-29 settle、已停止恶化、
              还没逆转。{' '}
              <span className="dn-em">
                谱系唯一一根结构性正在日收口径上、连续三根收破，并在周收口径上待
                升级；现货脚下没 MA，但压破位的 dealer 放大器已结算、本子去放大，
                交易台仍读不到那条能说出上收是需求还是薄回补的盘面。
              </span>
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面冻 233.4h（第十一天）· SM 本子死约 14.94 天 · funding/OI/flow 最后已知陈旧 · 交易台看不出 $60k 上方的上收是需求还是月期结算时的薄回补</span>
            </h2>

            <p>
              <span className="dn-signal">
                这篇备忘最重要的单一来源——实时衍生品盘面——还是停着、连续第十一天
              </span>。OKX 监控自{' '}
              <span className="dn-tag bear">2026-06-17 06:43Z</span> 起（t = &ldquo;06-17
              14:43&rdquo; BJ；文件 mtime 06-17 06:43:08Z 确认写停在那；进程状态
              本次未存档或核实，所以备忘断言的是缺失的盘面、不是一个活/挂的进程）
              没向 live_db.json 追加过任何行。那现在是对 00:06Z 快照锚{' '}
              <span className="dn-tag bear">233.4h 的缺失盘面</span>——06-20 备忘标在
              65.4h、06-24 在 161.4h、06-25 在 185.4h、06-26 在 209.4h，停摆又跑了
              约 24h 没写。实时盘面带的一切——funding、持仓、现货/期货 CVD、perp
              basis、retail 多%、taker-net、大单流、aggressor skew——因此都是{' '}
              <span className="dn-em">06-17 06:43Z 的最后已知、不是当前</span>。
              smart-money 仓位三元组（long_btc / short_btc / net_btc）逐字节常数——{' '}
              <span className="dn-tag">13,532.4 / 50,825.7 / −37,293.3</span>——自{' '}
              <span className="dn-tag bear">2026-06-12 01:36Z</span>，约 358.5h
              （约 14.94 天）。06-16 备忘把这根死 feed 标在约 94.5h、把挤压周期
              ON HOLD；06-25 备忘带在约 310.5h、06-26 在约 334.5h；今天约 358.5h、
              仍死。{' '}
              <span className="dn-em">
                SM net 作为当前读不可计算，SM cut fraction（|Δ| / prior_net）也
                无法成形——没有当前 SM net 可差分。本篇里任何仓位主张都明确是历史、
                不是实时。
              </span>
            </p>

            <p>
              为完整起见，<em>最后可得</em>的盘面读——全部钉在 06-17 06:43Z 冻结、
              现 233.4h 过期，且与 06-19 → 06-26 备忘逐字节相同因为是同一根冻结
              行——是：funding <span className="dn-tag bear">−7.24% ann</span>
              （原始 −0.006608 × 1095；冻结时空付多），路径在 24h+1m 含端采样窗
              （1,442 行）上平衡双向（ann 均值{' '}
              <span className="dn-tag">+0.20%</span>、区间{' '}
              <span className="dn-tag">−7.24% / +7.21%</span>、负行 819 / 1,442）；OI{' '}
              <span className="dn-tag bear">102,945 BTC、跨这根 24h+1m 窗 −468
              （−0.45%）</span>；retail{' '}
              <span className="dn-tag">mkt_long_pct 59.47%</span>（同窗内 +1.18pt
              加多）；perp basis{' '}
              <span className="dn-tag bear">对现货 −$57.43 折价</span>。{' '}
              <span className="dn-em">
                把这个读成一根近十五天的旧指纹、不是信号：一本双向 funding 本子、
                OI 在泄、retail 在弱势第一腿里加多。没有一项能搬到 00:06Z 快照——
                而且它早于整段 06-18 → 06-22 守地板序列、06-23 → 06-25 那段两次
                收破地板并加速跌穿 $60k 的腿、以及 06-26 的上收与月期结算，所以它
                对仓位怎么吸收破位、或者昨天的反弹是不是真的，什么都说不出。交易台
                把仓位维度当作未知、把这根上收当作仓位未确认。
              </span>
            </p>

            <h2 className="dn-sec">
              结构 <span className="dn-roman">II · 价格/MTF 新 · 多周期共振偏空 1 多 / 7 空 / 2 中性（从 1/9/0 松——15m 与 30m 翻中性）· 一根新鲜 1d 水下死叉加入 1w、但印了一根 12h TD9 buy（超卖提示）、4h 水下金叉 1 bar 前印 · regime 6/9 趋势延续（JT≥0——从 5/9 反转翻面）· 现货在每一根 MA 下方、整条阶梯头顶，200W 地板 $62,443 仍在第三根日收（06-26 $60,072）上破、现货下方 −3.80%</span>
            </h2>

            <p>
              <span className="dn-signal">
                MTF 图是新的、头条松了（1 多 / 7 空 / 2 中性、15m 与 30m 翻中性、
                印了一根 12h TD9 buy）但 regime 分类器翻成趋势延续——唯一两根
                建设性引擎印是 12h TD9 buy 和一根 1 bar 前的 4h 水下金叉
              </span>——这是连同盘口本子、交易台今天还能信的一维。00:01Z 扫描标{' '}
              <span className="dn-tag bear">1 多 / 7 空 / 2 中性、横跨 10 框</span>，
              净读 <em>多周期共振偏空 · 卖反弹</em>——从 06-26 扫描的 1/9/0 松、因为
              15m 与 30m 框踏到中性。regime 行读{' '}
              <span className="dn-tag bear">6/9 趋势延续 regime（JT≥0）——趋势跟随
              占优</span>（06-26 是 5/9 反转 / 均值回归），所以分类器从偏反弹倾斜
              翻到向下趋势延续倾斜、即便框计数松了——而引擎仍没有确认的建设性触发
              可据以行动。唯一一根多框是{' '}
              <span className="dn-tag">1M（云上）</span>；建设性交叉是一根{' '}
              <span className="dn-tag">4h 水下金叉 1 bar 前（DIF −873.9——一根早期
              水下试探、偏空转偏多但未确认、不是 TD buy）</span> 和一根{' '}
              <span className="dn-tag bull">12h TD9 buy 印 $60,093</span>（超卖反转
              提示、末根可能未收）。下行侧仍重：{' '}
              <span className="dn-tag bear">8h、12h、1d 和 1w 带水下死叉</span>，其中{' '}
              <span className="dn-tag bear">1d 水下死叉新鲜（刚印、DIF −2,309.6）</span>
              加入{' '}
              <span className="dn-tag bear">1w 水下死叉（刚印、DIF −5,835.4）</span>。
              云：4h→1w 全在云下、1h 云内、15m/30m/1M 云上；只有 1M 守一根多框。
              薄的建设性集合是{' '}
              <span className="dn-tag bull">12h TD9 buy（超卖反转提示）、4h 水下金叉、
              加一根 1M TD8 buy——再一根收</span>。{' '}
              <span className="dn-em">
                直读：框架在头条松了（15m/30m 中性）但 regime 分类器翻成向下趋势
                延续，高框全在死叉、一根新鲜 1d 死叉压在 1w 下面。引擎仅有的建设性
                印是一根 12h TD9 buy（一根超卖提示、末根可能未收）和一根未确认的 4h
                水下金叉。没有确认的引擎印去做多这根反弹；主导盘面读是那对 1d/1w
                死叉、缺席的 MA 支撑、和第三根收破 200W 地板——只被上收与去放大的本子
                软化。这是一根偏空的趋势框、其超卖反弹设置没有确认触发。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">60,094</td><td className="num">57.5</td><td className="bull">金叉（水下）9b</td><td className="bull">云上 ↓59.9k 20b</td><td>Sell 6</td><td>BEAR hid · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">60,093</td><td className="num">54.8</td><td className="bull">金叉（水上）3b</td><td className="bull">云上 ↓59.9k 3b</td><td>Sell 6</td><td>BEAR hid · BULL hid</td></tr>
                <tr><td>1h</td><td className="num">60,093</td><td className="num">52.1</td><td className="bull">金叉（水下）21b</td><td className="neut">云内 59.7k–60.6k 2b</td><td>Sell 3</td><td>—</td></tr>
                <tr><td>4h</td><td className="num">60,093</td><td className="num bear">42.5</td><td className="bull">金叉（水下）1b</td><td className="bear">云下 ↑64.2k 23b</td><td>Sell 1</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>8h</td><td className="num">60,093</td><td className="num bear">37.7</td><td className="bear">死叉（水下）12b</td><td className="bear">云下 ↑64.4k 11b</td><td>Sell 2</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">60,093</td><td className="num bear">34.7</td><td className="bear">死叉（水下）7b</td><td className="bear">云下 ↑64.3k 71b</td><td>TD9 BUY</td><td>BULL hid</td></tr>
                <tr><td>1d</td><td className="num">60,093</td><td className="num bear">32.1</td><td className="bear">死叉（水下）刚印</td><td className="bear">云下 ↑75.5k 26b</td><td>Buy 5</td><td>BEAR hid</td></tr>
                <tr><td>3d</td><td className="num">60,093</td><td className="num bear">33.6</td><td className="neut">—</td><td className="bear">云下 ↑73.0k 8b</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">60,093</td><td className="num bear">33.2</td><td className="bear">死叉（水下）刚印</td><td className="bear">云下 ↑100.3k 21b</td><td>Buy 6</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">60,093</td><td className="num">41.3</td><td className="neut">—</td><td className="bull">云上 ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 00:01Z scan（08:01 Beijing；滚动 latest
                    文件、逐字存档于 /opt/desk-note/snapshots/2026-06-27-0005/）。净读{' '}
                    <em>多周期共振偏空 · 卖反弹（1 多 / 7 空 / 2 中性）</em>；regime{' '}
                    <em>6/9 趋势延续 regime（JT≥0、趋势跟随占优）</em>；反转背离{' '}
                    <em>top div 4h、bottom div 15m</em>。头部告警：{' '}
                    <em>1d 水下死叉（刚印、DIF −2,309.6）</em>、{' '}
                    <em>1w 水下死叉（刚印、DIF −5,835.4）</em>、{' '}
                    <em>4h 水下金叉（1 bar 前、DIF −873.9、早期水下试探）</em>、{' '}
                    <em>12h TD9 Buy 印 $60,093（超卖反转提示、末根可能未收）</em>、{' '}
                    <em>1M TD8 Buy——再一根收</em>。扫描现货 $60,093、24h +0.54%、
                    24h H/L $60,734 / $58,288、qVol $16.83B。收盘为未收盘 K 线；
                    每个值在各周期收盘前都按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵是和 06-26 一样的深头顶墙、现货往 200W 地板抢回了一点，所以
              谱系第三根切{' '}
              <span className="dn-tag bear">矩阵上每一根线都在头顶——没有正偏移、
              脚下没 MA</span>。$60,072 坐在{' '}
              <span className="dn-tag bear">全历史 W-SMA200 200W 地板 $62,443 下方
              −3.80%</span>——最近的线、仍头顶（06-26 是 −4.14%）——并{' '}
              <span className="dn-tag bear">在 D-SMA20 $63,078 下方 −4.76%</span>、
              再上一根。其上，周期 proxy{' '}
              <span className="dn-tag bear">D-EMA20 $63,465（−5.35%）</span>、然后{' '}
              <span className="dn-tag bear">W-EMA200 $67,508（−11.01%、种子）</span>、
              然后 <span className="dn-tag bear">D-EMA50 $67,535（−11.05%）</span>、
              然后一条密集头顶带：<span className="dn-tag bear">D-SMA50 $69,860（−14.01%）</span>、{' '}
              <span className="dn-tag bear">D-EMA100 $70,998（−15.39%）</span>、{' '}
              <span className="dn-tag bear">W-SMA20 $71,003（−15.39%）</span>、{' '}
              <span className="dn-tag bear">D-SMA150 $71,131（−15.55%）</span>、{' '}
              <span className="dn-tag bear">D-SMA100 $71,637（−16.14%）</span>、{' '}
              <span className="dn-tag bear">W-EMA20 $73,142（−17.87%）</span>、{' '}
              <span className="dn-tag bear">W-EMA150 $74,026（−18.85%）</span>、{' '}
              <span className="dn-tag bear">D-EMA150 $74,033（−18.86%）</span>、{' '}
              <span className="dn-tag bear">W-SMA150 $75,658（−20.60%）</span>、{' '}
              <span className="dn-tag bear">D-SMA200 $75,844（−20.80%）</span>、{' '}
              <span className="dn-tag bear">D-EMA200 $76,852（−21.83%）</span>。更高
              更远、已弃用：W-EMA100 $80,555（−25.43%）、W-EMA50 $81,775（−26.54%）、
              W-SMA100 $88,460（−32.09%）、W-SMA50 $89,794（−33.10%）。{' '}
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-06-27 00:05Z（close $60,072.10）；偏移
                按同一根 last-bar close 重算、那是实时盘面冻结期内可得的最新现货。
                显示的 MA 水位按 $ 取整、偏移用精确序列值算。显示的周线阶梯用 2023→
                子集（183 根周 bar），所以那里 W-SMA200 不可计算、W-EMA200 $67,508
                从可用历史 seed；200W 地板 $62,443 单独从全历史 glob 重算（355 根
                走完的周 W-MON bar、排除未收盘的 06-29 周）。日收：06-19 $63,513、
                06-20 $64,270、06-21 $63,287、06-22 $63,990（= 22JUN 周收）、06-23
                $62,697、06-24 $61,051（首根收破地板）、06-25 $59,772（第二根收破、
                −4.28%）、06-26 $60,072（第三根收破但首根上收、+$300、回到 $60k
                上方、下方 −3.80%）、06-27（未收盘、5 分钟 bar）$60,072——地板破位
                已延到第三根连续日收但在一根上抬上稳住，且最近 24h 1 分钟收里
                全部 1,441 根印在地板下方、435 根抢回到 $60k 上方（1,006 根在下方）。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子去放大 净空 γ aggregate −20.9M（06-26 是 −87.5M、06-25 是 −73.9M）· 26JUN26 月期 −74.71M 放大器昨天结算（约 08:00Z、06-26）——集中下行块没了、前端现在是 27JUN26 0.3 DTE 只 −6.03M · flip 从 $62,074 → $60,432、现货现在只在它下方 −0.60% · IV 从 47.4% → 44.3% 松</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子四晚的再放大在一个 session 内逆转：26JUN −74.71M 月期
                结算、aggregate γ 从 −87.5M 塌到 −20.9M 净空 γ、flip 落到现货
                −0.60% 内
              </span>。aggregate GEX 是{' '}
              <span className="dn-tag bear">−20.9M / 1%</span>（06-26 是 −87.5M、
              06-25 是 −73.9M、06-24 是 −64.4M）；本子仍净空 γ 但远不如近段任何
              一点——早周备忘丢掉的去放大在月期结算时一把还了回来。0-γ flip 落{' '}
              <span className="dn-tag">$62,074 → $60,432（−$1,642）</span>，现货
              $60,072 坐在 <span className="dn-tag bear">flip 下方 −0.60%</span>、
              现货口径（60,072.10 / 60,432 − 1 = −0.596%）；GEX 文件自己的
              &ldquo;dist to flip&rdquo; 按它的 Deribit idx $60,288（比 parquet
              现货高 $216）读 −0.2%、即 <span className="dn-tag bear">−0.24%</span>
              （60,288 / 60,432 − 1 = −0.238%）——两参考都在 flip 下方、但到 flip
              的缺口从 06-26 的 −3.57% 塌掉。墙图在现货附近 put-heavy：{' '}
              <span className="dn-tag bear">$60k −24.18M</span>（最重墙、比 06-26
              月期结算后的 −60.78M 浅得多、现在 just 在现货<em>上方</em>作簇顶）、{' '}
              <span className="dn-tag bear">$58k −12.88M</span>、{' '}
              <span className="dn-tag bear">$59k −9.82M</span>（都 just 在现货下方）、{' '}
              <span className="dn-tag bear">$56k −9.37M</span>、{' '}
              <span className="dn-tag bear">$55k −9.25M</span>、{' '}
              <span className="dn-tag bear">$50k −6.77M</span>、{' '}
              <span className="dn-tag bull">$64k +7.27M</span>、{' '}
              <span className="dn-tag bull">$63k +7.01M</span>、{' '}
              <span className="dn-tag bull">$80k +6.50M</span>、{' '}
              <span className="dn-tag bull">$65k +6.07M</span>。{' '}
              <span className="dn-em">
                列出的 $55k–$60k 主墙合计 −65.5M、坐在现货处及下方——现货 $60,072
                just 在 $60k −24.18M 墙下方、那墙现在是簇顶，下面是 $59k −9.82M
                与 $58k −12.88M 墙。本子在现货处比 06-26 空 γ 少得多，所以它对下
                一根移动的阻尼比进月期时实质大得多；正墙（$63k、$64k、$65k、$80k）
                坐在头顶作 flip 上方第一道真阻力架、对现货下方不提供支撑；下面唯一
                的结构是 $58k put 墙、一块磁铁、不是地板。
              </span>{' '}
              按 expiry 集中度没了：26JUN26 月期{' '}
              <span className="dn-tag bull">−74.71M 昨天结算（约 08:00Z、06-26）</span>，
              所以前端现在是小的 27JUN26{' '}
              <span className="dn-tag bear">0.3 DTE 在 −6.03M</span>（今日约 08:00Z
              结算），然后 28JUN26 1.3{' '}
              <span className="dn-tag bull">+2.19M</span>、29JUN26 2.3 +0.94M、
              30JUN26 3.3 −1.50M、3JUL26 6.3 −4.59M、10JUL26 13.3 −0.50M、17JUL26
              20.3 <span className="dn-tag bull">+4.02M</span>、31JUL26 34.3 +0.76M、
              28AUG26 62.3 +0.68M、25SEP26 90.3 −5.20M、25DEC26 181.3 −0.29M、
              26MAR27 272.3 +0.36M、25JUN27 363.3 +0.40M。没有一根前向 expiry 带
              26JUN 的权重——定义了 06-23 → 06-26 腿的集中下行放大器风险已结算、
              没有前向块替代。（现货参考的 aggregate −20.9M 是现货处的 net GEX；
              by-expiry 行是独立分解、不必加总到它。）
            </p>

            <p>
              IV 中位数横跨 948 合约是{' '}
              <span className="dn-tag">44.3%</span>（从 06-26 的 47.4% / 1,038
              合约松、因月期结算、链变薄）对 30D close-to-close RV{' '}
              <span className="dn-tag">43.35%</span>——链级 richness{' '}
              <span className="dn-tag">约 +0.95pt</span>、现在对已实现已薄（06-26
              是约 +4.2pt），RV 仍高（今天 43.35% vs 06-26 的 43.20% 与 05-31 的
              24.91%——06-08 → 06-18 下腿启动的高 vol regime 续）。是 948 合约的
              链中位数、<span className="dn-em">不是</span>可交易价差；expiry-/
              strike-level vega、skew 与期限结构仍未载入；vol 读法保持 framework
              only。RV 方法：30D close-to-close、logret.std × √365 × 100、用最末
              30 根日 log return（= 连续 31 根日 close）、锚自 parquet 最末 bar
              2026-06-27 00:05Z；底层 close 窗区间 $59,772 – $73,857。（参考：最末
              29 returns / 30 closes 读 44.09%；页面值 43.35% 来自 30 returns。）
              P/C 比率 0.58、Call OI 214,741 / Put OI 125,560 BTC。
            </p>

            <h2 className="dn-sec">
              宏观 <span className="dn-roman">IV · 渲染新（约 1.85h）、Tier-1 日频印小幅新 deltas——10Y 4.40%（−1bp、松、现在距闸 13bp）、TIPS 2.19%（−4bp）EXTREME RISK-OFF、HY OAS 2.78%（+2bp、现在 AT 它的 2.78% 闸——0bp 触发）、MOVE 66.8（松）· DXY 101.44 与 USD/JPY 161.79 对 06-26 逐字节相同（很可能陈旧周末 carry、已标）· regime 仍 NORMAL、对 NQ 的落后收窄到 −1.27pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观面板渲染是新的（约 1.85h）、Tier-1 日频印了小幅新 deltas、读法
                仍 risk-off——利率松一档、信用扩到正好坐在它的 re-grow 闸上、美元守
                EXTREME 但 FX 腿对 06-26 逐字节相同、很可能陈旧周末 carry
              </span>。面板渲染 2026-06-26 22:16Z、比快照早约 1.85h。US 10Y nominal{' '}
              <span className="dn-tag bull">4.40%（−1.0bp）</span>、regime z{' '}
              <span className="dn-tag bear">+1.02</span>——紧 regime、RISK-OFF、从
              06-26 的 4.41% 松 1bp、现在距 4.53% 闸 13bp。10Y TIPS real{' '}
              <span className="dn-tag bull">2.19%（−4.0bp）</span>、regime z{' '}
              <span className="dn-tag bear">+2.20</span>——松 4bp 但仍 EXTREME
              RISK-OFF、面板上最紧的几根之一。5Y5Y BE 通胀{' '}
              <span className="dn-tag">2.19%（0.0bp）</span>、10Y breakeven{' '}
              <span className="dn-tag bull">2.20%（−1.0bp）</span>——通胀预期软、都
              偶发。HY OAS{' '}
              <span className="dn-tag bear">2.78%（+2.0bp）</span>、regime z{' '}
              <span className="dn-tag bull">−0.75</span>——信用仍松（z-regime 上
              RISK-ON）但当日扩 2bp 正好坐在它的 2.78% re-grow 闸上（0bp 触发、
              闸有史以来最近）。MOVE 债波是{' '}
              <span className="dn-tag">66.8</span>——来源标 +1.40 在它自己的 1d
              delta、但水位对 06-26 备忘的 69.1 印是 −2.3、仍&ldquo;松。&rdquo;
              美元守它的 EXTREME 水位：DXY{' '}
              <span className="dn-tag bear">101.44（−0.17 当日）</span>、regime z{' '}
              <span className="dn-tag bear">+2.90</span>、偶发 z +2.12——但水位、delta
              与 z 对 06-26 渲染逐字节相同，所以交易台把这标成很可能陈旧周末 carry、
              不是新印。Fed 净流动性{' '}
              <span className="dn-tag bear">$5.812T（−0.037T）</span>、regime z{' '}
              <span className="dn-tag bear">−1.16</span>——本次无新周度印（与 06-26
              同）。USD/JPY{' '}
              <span className="dn-tag">161.79（+0.03 当日）</span>、regime z +1.56
              ——也对 06-26 逐字节相同、很可能陈旧 carry；US-JP 10Y 利差{' '}
              <span className="dn-tag bull">1.75%（−1.0bp）</span> 微收窄；USD/CNY{' '}
              <span className="dn-tag">6.7897（−0.00）</span>；WTI{' '}
              <span className="dn-tag stale">$78.9（现陈旧 4d）</span>。{' '}
              <span className="dn-em">
                净：宏观背景仍 risk-off 但边际上静了——10Y 松 1bp、TIPS 松 4bp、
                MOVE 松，而信用爬 2bp 更宽正好坐在它的闸上。两根 re-grow 腿已完全
                交叉：信用腿现在 ON 2.78% 闸（0bp）而利率腿坐在 13bp 外——信用闸
                是活的那根。reclaim-long 利率筛（10Y &lt; 4.55%）在 4.40% 仍 TRUE、
                有余地。DXY / USD/JPY 陈旧 carry 标要紧：FX risk-off 信号本次没新
                确认。宏观读法仍是强化而非反驳 200W 地板破位——一个广义 risk-off
                背景、信用闸在线上——但它不再恶化。
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
                <tr><td>US 10Y nominal</td><td className="num">4.40%</td><td className="num bull">−1.0bp</td><td className="num bear">+1.02</td><td className="bear">紧 · RISK-OFF · 距闸 13bp</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.19%</td><td className="num bull">−4.0bp</td><td className="num bear">+2.20</td><td className="bear">已松 · 仍 EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.19%</td><td className="num">0.0bp</td><td className="num">−0.54</td><td className="neut">软 · 偶发</td></tr>
                <tr><td>10Y breakeven</td><td className="num">2.20%</td><td className="num bull">−1.0bp</td><td className="num">−2.04</td><td className="neut">软 · 偶发</td></tr>
                <tr><td>HY OAS</td><td className="num">2.78%</td><td className="num bear">+2.0bp</td><td className="num bull">−0.75</td><td className="bull">松 · 现在 AT 2.78% 闸（0bp 触发）</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.516</td><td className="num">−0.00</td><td className="num">−0.07</td><td className="stale">周度 · neutral</td></tr>
                <tr><td>MOVE 债波</td><td className="num">66.8</td><td className="num bear">+1.40</td><td className="num bull">−0.81</td><td className="bull">松 · −2.3 对 06-26 备忘（69.1）</td></tr>
                <tr><td>DXY</td><td className="num stale">101.44</td><td className="num stale">−0.17</td><td className="num bear">+2.90</td><td className="stale">EXTREME RISK-OFF · 对 06-26 逐字节相同（很可能陈旧 carry）</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.812T</td><td className="num bear">−0.037T</td><td className="num bear">−1.16</td><td className="bear">排空 · 无新周度印</td></tr>
                <tr><td>USD/JPY</td><td className="num stale">161.79</td><td className="num stale">+0.03</td><td className="num bear">+1.56</td><td className="stale">硬 · 对 06-26 逐字节相同（很可能陈旧 carry）</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">1.75%</td><td className="num bull">−1.0bp</td><td className="num bull">−1.25</td><td className="neut">收窄</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7897</td><td className="num">−0.00</td><td className="num bull">−1.43</td><td className="neut">松</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">+13.5bp（月度）</td><td className="num bear">+2.56</td><td className="stale">月度 · 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、166 rows、汇总 00:01Z——{' '}
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。非对角线
              均值 <span className="dn-tag">|r| 0.288</span>——对 06-26 的 0.287
              基本不动、仍 <span className="dn-tag">在 0.25 idiosyncratic 阈值
              上方</span>，所以 regime 行守在{' '}
              <span className="dn-signal">NORMAL——BTC 仍耦合在广义跨资产复合体上</span>，
              其顶部对齐是股票 / 工业金属簇：NQ{' '}
              <span className="dn-tag">+0.772</span>、NVDA{' '}
              <span className="dn-tag">+0.745</span>、SP500{' '}
              <span className="dn-tag">+0.693</span>、JP225{' '}
              <span className="dn-tag">+0.568</span>、TSLA{' '}
              <span className="dn-tag">+0.523</span>、COPPER{' '}
              <span className="dn-tag">+0.500</span>、URNM{' '}
              <span className="dn-tag">+0.487</span>、META{' '}
              <span className="dn-tag">+0.369</span>、AAPL{' '}
              <span className="dn-tag">+0.360</span>、PALL{' '}
              <span className="dn-tag">+0.352</span>，CL{' '}
              <span className="dn-tag">−0.138</span> / BRENT{' '}
              <span className="dn-tag">−0.140</span> 反向、GOLD 一根弱{' '}
              <span className="dn-tag">+0.244</span>。7d 表现仍是广义风险复合体红、
              BTC 落后、但缺口比 06-26 窄：{' '}
              <span className="dn-tag bear">BTC −5.40%</span>、NQ{' '}
              <span className="dn-tag bear">−4.13%</span>、SP500{' '}
              <span className="dn-tag bear">−2.11%</span>、JP225{' '}
              <span className="dn-tag bear">−2.63%</span>、NVDA{' '}
              <span className="dn-tag bear">−7.72%</span>、META{' '}
              <span className="dn-tag bear">−4.21%</span>、AAPL{' '}
              <span className="dn-tag bear">−4.69%</span>、MSFT{' '}
              <span className="dn-tag bear">−2.20%</span>、GOOGL{' '}
              <span className="dn-tag bear">−7.62%</span>、AMZN{' '}
              <span className="dn-tag bear">−4.38%</span>、TSLA{' '}
              <span className="dn-tag bear">−5.25%</span>；金属更低（GOLD{' '}
              <span className="dn-tag bear">−1.74%</span>、SILVER{' '}
              <span className="dn-tag bear">−8.62%</span>、PLAT{' '}
              <span className="dn-tag bear">−2.96%</span>、PALL{' '}
              <span className="dn-tag bear">−4.59%</span>、COPPER{' '}
              <span className="dn-tag bear">−3.13%</span>）；原油下、NGAS 正（CL{' '}
              <span className="dn-tag bear">−7.96%</span>、BRENT{' '}
              <span className="dn-tag bear">−7.82%</span>、NGAS{' '}
              <span className="dn-tag bull">+1.69%</span>）。{' '}
              <span className="dn-em">
                BTC 的 7d 回报 −5.40% vs NQ −4.13% 是 −1.27pt 的落后（06-26 是
                −2.08pt）——缺口又收窄、因为反弹合上了一些 BTC 的跑输。整个风险
                复合体 7d 仍红（NQ −4.13%、NVDA −7.72%、Mag7 多在 −4% 到 −8%、
                金属下、原油下 NGAS 是唯一绿），所以 BTC 的下跌仍嵌在一个广义
                risk-off 移动里、而不是作为 idiosyncratic 突出——这正是让相关性
                regime 守在 NORMAL 的东西。第三根收破 200W 地板仍与一个 risk-off
                宏观盘面同时（10Y 松但紧、信用在它的闸上、DXY EXTREME 但带陈旧标），
                所以破位仍既是 risk-off-盘面事件、也是 BTC 自有事件——但上收与去
                放大的本子是这根移动在稳的首批迹象。
              </span>{' '}
              JGB 月度 2.65% 带一个 EXTREME RISK-OFF 月度标——不依赖。
            </p>

            <h2 className="dn-sec">
              交易本子 <span className="dn-roman">V · 本子 FLAT · 200W 地板——日收破位延到第三根连续收（06-26 $60,072 &lt; $62,443）但在一根回到 $60k 上方的上收上稳住、周收升级 PENDING（06-29 未收盘读 −3.80% 下方、改善）· scout 仍 stood down（价格块急收窄——现货只在 flip 下方 −0.60%——但盘面失明、无 MA 支撑、无确认引擎触发、regime 翻成趋势延续）· 宏观尾信用闸在线上（OAS 2.78%、0bp）· 挤压周期 ON HOLD（SM 死约 14.94 天）</span>
            </h2>

            <p>
              <span className="dn-signal">
                本子 flat、并保持 flat——dealer 放大器结算、本子去放大，现货印了
                $60k 上方的首根上收、flip 重夺塌到 −0.60% 内，但地板破位延到第三
                根日收、regime 翻成趋势延续，约束仍是数据完整性
              </span>。谱系的结构性正本次在日收口径上仍破、但性质软化：06-26 日 bar
              收 $60,072、在 $62,443 地板下方 −3.80%、是连续第三根收在线下但首根
              <em>上</em>收（对 06-25 $59,772 +$300）、回到 $60k 上方。按框架那是
              重复确认的预警、还不是完整破位——破位是一根持续的周收在下方，未收盘
              的 06-29 周读 $60,072（下方 −3.80%），所以升级在等 06-29 settle、已
              停止恶化。22JUN 周收 $63,990（上方 +2.48%）仍是最后一根已决周守，所以
              200W 重夺论还没被证伪。scout 仍不能取、即便它的价格块急收窄：现货现在
              只在 flip 下方 −0.60%（06-26 是 −3.57%）但仍在它下方、脚下没 MA，仓位
              腿（SM 空头泄、funding 姿态、回补流）都需要一条实时盘面、而连续第十一
              天没有，引擎也没确认的建设性触发——只有一根 12h TD9 超卖提示和一根
              未确认的 4h 水下金叉，对着 1d/1w 双死叉和一根翻成趋势延续（向下）的
              regime。也没有新空：集中下行放大器（26JUN −74.71M）昨天结算、本子去
              放大到 −20.9M，所以会压一根空的那个结构没了，且在放大器已清后、于一
              条失明盘面上追第三根收破地板，是糟糕的入场。今天的交易本子是：无空、
              无 scout、无新对冲——修盘面 AND 在重新武装前盯 06-29 周收对地板。
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 主仓 · 200W 周期地板盯位——日收破位延到第三根收但稳住：06-26 日收 $60,072 settle 在 $62,443 地板下方 −3.80%（连续第三根收破、在 06-24 $61,051 与 06-25 $59,772 之后）但是首根上收、回到 $60k 上方；周收升级 PENDING（06-29 未收盘读 $60,072、下方 −3.80%、从 −4.14% 改善）；22JUN 周收 $63,990 上方 +2.48% 仍作最后一根已决周守</span>
              <div className="dn-trade-name">
                200W 周期地板盯位——日收破位延到第三根连续收但在一根上抬上稳住、周收升级在等：地板 $62,443 = 全历史 W-SMA200（355 根走完周 bar、对 06-25 / 06-26 钉不变）、06-24 日收 $61,051（下方 −2.23%）、06-25 日收 $59,772（下方 −4.28%）、06-26 日收 $60,072（下方 −3.80%、首根上收）、未收盘 06-29 周 $60,072（下方 −3.80%）、最近 24h 全部 1,441 根 1 分钟收在地板下方
              </div>
              <div className="dn-thesis">
                06-26 备忘记下第二根连续日收破地板、预警加深。那根预警没再延伸
                ——它稳住了：06-26 日 bar 收{' '}
                <span className="dn-tag bear">$60,072、在 $62,443 地板下方 −3.80%</span>、
                连续第三根收在线下但首根上抬（对 06-25 $59,772 +$300）、抢回 $60k
                上方。按框架一根盘中插针不是破位、一根日收在下方是预警——现在连续
                三根收确认——一根持续周收在下方才是破地板并证伪 06-15 重夺论的升级。
                22JUN 周收{' '}
                <span className="dn-tag bull">$63,990、上方 +2.48%</span> 仍作最后
                一根已决周守，所以论点还没死，未收盘的 06-29 周读{' '}
                <span className="dn-tag bear">$60,072、下方 −3.80%</span>，所以升级在
                等 06-29 settle、已停止恶化。{' '}
                <span className="dn-em">谱系的结构性正在日收口径上连续三根破但在
                稳住；现货脚下没 MA，06-29 周收仍是解掉论点的唯一一根水位。</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W 地板</span><span className="dn-lvl-v">$62,443 = 全历史 W-SMA200、本次从 2019→ parquet glob 重算（355 根走完周 W-MON bar、排除未收盘 06-29 周）；对 06-25 / 06-26 钉不变（慢周 SMA、约 $250/周）· weekly_200sma.json 缺、所以比率百分位 / last-event 留未溯源、不杜撰</span></div>
                <div><span className="dn-lvl-k">日收破位——延到第三根收、稳住</span><span className="dn-lvl-v bear">06-24 日收 $61,051（下方 −2.23%）、06-25 日收 $59,772（下方 −4.28%）与 06-26 日收 $60,072（下方 −3.80%、首根上收）——连续三根收在线下；最近 24h 全部 1,441 根 1 分钟收印在地板下方但 435 根抢回 $60k 上方、未收盘 06-27 bar 守在下方 −3.80%</span></div>
                <div><span className="dn-lvl-k">最后一根已决周守（仍站）</span><span className="dn-lvl-v bull">22JUN 周收 $63,990 上方 +2.48% 仍站——200W 重夺论还没被证伪、但离死只剩一根周收</span></div>
                <div><span className="dn-lvl-k">升级（下一根周收）——PENDING</span><span className="dn-lvl-v bear">一根持续周收 &lt; $62,443 破 200W 地板并证伪 06-15 重夺论——未收盘 06-29 周读 $60,072（下方 −3.80%、从 −4.14% 改善）；这是 06-29 settle 上解掉论点的那根水位</span></div>
                <div><span className="dn-lvl-k">重夺侧（现在近）</span><span className="dn-lvl-v bear">现货在 flip $60,432 下方 −0.60%、在 200W 地板 $62,443 下方 −3.80%、在 D-SMA20 $63,078 下方 −4.76%——脚下没 MA；flip 落到地板下方，所以一根重夺是日收回到 flip $60,432 上方再地板 $62,443 再 D-SMA20 $63,078——失明盘面上不是 scout 触发（见 scout）</span></div>
              </div>
              <div className="dn-gating">
                <b>框架、不是一笔交易。</b>地板盯位是唯一一根承重的实时水位、其他
                都陈旧或 framework only。日收破位延到第三根连续收但在一根上抬上稳住、
                周收升级在等——这根盯位不取任何仓位：它设确认的预警水位（三根日收
                在下方）、待定的升级（06-29 周收 &lt; $62,443）、和重夺阶梯（flip
                $60,432 → 地板 $62,443 → D-SMA20 $63,078——注意 flip 坐在地板下方、
                所以第一步重夺是 flip 再地板再 D-SMA20），交易台不会预先 position
                空进一根放大器已结算出去的破位、也不会做多一根它在失明盘面上无法
                确认的重夺。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout · 仍 STOOD DOWN · 价格前条件急收窄（现货只在 flip 下方 −0.60%、vs 06-26 −3.57%）但仍在下方、脚下没 MA + 盘面失明约 14.94 天 + 无确认引擎触发 + regime 翻成趋势延续</span>
              <div className="dn-trade-name">
                回补反弹 scout——flip 重夺急收窄到 −0.60% 内因本子去放大，但 scout 在失明盘面上、脚下没 MA、无确认引擎触发的情况下保持 stood down
              </div>
              <div className="dn-thesis">
                06-22 备忘看到 scout 价格前条件短暂印出（现货重夺 flip），06-23 →
                06-26 备忘看到它被交还、扩到 −3.57%。今晚它急收窄：现货从 $59,857
                （06-26 备忘现货）→ $60,072，现在{' '}
                <em>只在 flip 下方 −0.60%</em> $60,432（它自己在 26JUN 月期结算时
                落 $1,642），仍在 200W 地板下方 −3.80%、在 D-SMA20 下方、守在 $60k
                上方——但脚下根本还没有任何 MA。所以 scout 被四点封住。(1) 价格前
                条件急收窄但还没真——现货仍在 flip 下方、且在地板与 D-SMA20 下方。
                (2) 仓位腿（SM 空头泄、funding 姿态、回补流）都需要一条实时盘面、
                而没有——交易台看不出上收是真需求还是月期结算时的薄空头回补。(3)
                dealer 本子去放大到 −20.9M 净空 γ、26JUN 放大器结算，这建设性但拿走
                了一根回补反弹会骑的挤压燃料。(4) 引擎没确认的建设性触发——只有一根
                12h TD9 超卖提示（末根可能未收）和一根未确认的 4h 水下金叉（DIF
                −873.9），对着一对新鲜 1d/1w 死叉和一根翻成趋势延续（向下）的 regime。{' '}
                <span className="dn-em">一根 scout long、在一条仓位失明的盘面上、
                在 flip 与地板下方、脚下没 MA、regime 翻成向下趋势延续、无确认引擎
                印，不是一笔交易——唯一的建设性反面是上收、塌掉的 flip 缺口、去放大
                的本子、12h TD9 提示、和仍站的最后周守，没有一样足以在没有盘面与
                确认引擎触发时 size 进去。</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v bear">stood down · 无入场 · 价格前条件急收窄（现货在 flip 下方 −0.60%、vs 06-26 −3.57%）但仍在它下方、且在地板下方、脚下没 MA——只在实时盘面恢复 AND 现货重夺 flip 再地板再 D-SMA20 后才重评估</span></div>
                <div><span className="dn-lvl-k">技术前条件</span><span className="dn-lvl-v bear">flip $60,432 / 地板 $62,443 / D-SMA20 $63,078 重夺（不真——现货在三者下方、脚下没 MA、虽然 flip 现在在 −0.60% 内）AND 一根确认引擎印（不真——1 多 / 7 空 / 2 中性、regime 翻成趋势延续、1d/1w 双死叉新鲜、只有一根 12h TD9 提示和一根未确认 4h 水下金叉）</span></div>
                <div><span className="dn-lvl-k">数据前条件</span><span className="dn-lvl-v bear">实时盘面恢复（当前 233.4h 冻）AND SM feed 活（当前死约 14.94 天）——两者都须先成立任何仓位腿才能读；这是约束块</span></div>
              </div>
              <div className="dn-gating">
                <b>硬规则：</b>没有一条活的仓位盘面就不 scout 入场。上收、塌掉的
                flip 缺口、去放大的本子、12h TD9 提示和仍站的最后周守、在 SM /
                funding / flow 腿失明、现货仍在 flip 与地板下方脚下没 MA、regime
                翻成趋势延续、引擎无确认触发时、都不触发 scout——交易台不会 size
                进一根它看不见被回补的回补反弹。06-22 抬起、06-23 → 06-26 重关的
                价格块本次急收窄但还没开；操作块（盘面下）和引擎块（无确认触发、
                regime 翻向下）仍约束。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 宏观尾 · put-spread re-grow 闸——信用腿现在在线上：HY OAS 2.78% = 2.78% 闸（0bp 触发）、10Y 腿 13bp 外（4.40% vs 4.53% 闸）；两腿都没在收盘上触发但信用腿正好在触发位 · Tier-1 印小幅新 deltas</span>
              <div className="dn-trade-name">
                下行 put-spread——re-grow 闸未触发但信用腿在线上（OAS 2.78% = 闸、0bp）、利率腿松了（13bp 外）；无对冲加（26JUN 放大器已结算、本子去放大）
              </div>
              <div className="dn-thesis">
                谱系带的宏观 re-grow 闸——HY OAS &gt; 2.78% OR 10Y &gt; 4.53% 作
                重新长出一根下行尾的条件——在收盘口径上保持未触发，但信用腿本次正好
                爬上线：HY OAS 扩 2bp 到 <em>2.78%</em>、等于闸（0bp 触发、需一根
                上方印才点火），而 10Y 松 1bp 到 4.40%、坐在 13bp 外。所以信用腿
                现在 AT 触发位、利率腿又退远。reclaim-long 利率筛（10Y &lt; 4.55%）
                在 4.40% 仍 TRUE、有余地。宏观盘面仍是一股真的 risk-off 冲量（利率紧、
                信用在它的闸上、美元 EXTREME 虽带陈旧标）但边际上静；一根宏观尾不是
                内生兼 risk-off 地板破位的对的工具，且 dealer γ 定价的集中下行风险
                ——26JUN 月期 −74.71M——现在已结算，所以没有 dealer 放大的下行可对冲。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">无仓位 · 闸在收盘口径未触发 · HY OAS 腿现在在线上（2.78% = 闸、0bp）、10Y 腿 13bp 外（已松）</span></div>
                <div><span className="dn-lvl-k">re-grow 触发（下一根 Tier-1 印）</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% 收（当前 2.78%、在线上——需一根上方印）OR 10Y &gt; 4.53% 收（当前 4.40%、13bp 触发、已松——远的那根）</span></div>
                <div><span className="dn-lvl-k">reclaim-long 利率筛</span><span className="dn-lvl-v bull">10Y &lt; 4.55% 收——在 4.40% TRUE；等一根 BTC 内部转向 AND 一条实时盘面才能转换</span></div>
              </div>
              <div className="dn-gating">
                <b>注意：</b>re-grow 闸是随水位下漂设的酌情盯位、不是回测断点。两腿
                都没在收盘上触发——信用腿正好在线上（0bp、需一根上方印）、利率腿又
                退远（13bp）——若任一触发、一根下行尾会在另起的未来备忘里重评估
                （触发 / 失效 / R 在那里定）；注意 dealer strip 已不带集中下行放大器
                （26JUN 月期 −74.71M 已结算），所以任何这种尾会是比进 06-26 本子更
                干净的独立对冲、而非叠加到 dealer 空 γ 上。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 挤压周期 hostile-2 观察名单 · 无日历先验 · ON HOLD——SM feed 死约 14.94 天、重堆签名本次读不出</span>
              <div className="dn-trade-name">
                挤压周期 hostile-2——ON HOLD（06-16 → 06-26 的延续）：SM feed 冻约 358.5h、重堆签名本次读不出
              </div>
              <div className="dn-thesis">
                挤压周期 / 重堆-hostile-2 框架把离散 SM 步（Δshort &gt; 0 + Δlong
                &lt; 0 同一分钟）读成延续签名；它的日历先验（BJ 13–15 节奏）在 05-31
                被证伪、此后作无先验观察名单跑。今天因最简单的理由无法评估：SM feed
                死了。long_btc / short_btc / net_btc 自 2026-06-12 01:36Z 起常数
                （约 358.5h），所以没有 SM deltas 可读。06-16 备忘把这根 ON HOLD 标
                在约 94.5h、06-25 在约 310.5h、06-26 在约 334.5h；它在约 358.5h 仍
                ON HOLD。{' '}
                <span className="dn-em">一根冻结的 feed 印不出签名；框架在 SM 数据
                恢复前是黑的。</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">框架状态</span><span className="dn-lvl-v bear">ON HOLD · SM feed 冻约 358.5h（自 2026-06-12 01:36Z）· 无 SM deltas 可计算</span></div>
                <div><span className="dn-lvl-k">冻结值（不是读）</span><span className="dn-lvl-v">long 13,532.4 / short 50,825.7 / net −37,293.3——逐字节常数、只为标死 feed 而带</span></div>
                <div><span className="dn-lvl-k">恢复条件</span><span className="dn-lvl-v">SM feed 恢复写新 long_btc/short_btc → 从首批新 deltas 重评估重堆签名</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>一根死 feed 不是一根安静 feed。交易台不从一根冻结
                三元组推断&ldquo;无重堆&rdquo;——它什么都不推断。挤压周期读法被暂停、
                不是转负，feed 恢复后首批新 SM deltas 是重新武装点。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件 <span className="dn-roman">VI · 实时盘面停摆仍是操作条件（第十一天）· 200W 地板日收破位延到第三根收但稳住（06-26 $60,072、首根上收）、周收升级 PENDING（06-29 读 −3.80% 下方、改善）· flip 重夺收窄到 −0.60%、本子去放大 −20.9M、26JUN 月期已结算 · scout stood down（无 MA 支撑、无确认引擎触发、regime 翻成趋势延续）· 宏观信用闸在线上（OAS 2.78%）、regime 仍 NORMAL</span>
            </h2>

            <p>
              06-26 那些条件里：实时盘面<em>没</em>回来——又死了约 24h、现在 233.4h
              冻、SM feed 在约 14.94 天；200W 地板日收破位<em>延</em>到第三根连续收
              （06-26 $60,072、下方 −3.80%）但在首根上收上<em>稳住</em>、回到 $60k
              上方，周收升级现在待定且改善（06-29 未收盘读 −3.80% 下方、从 −4.14%
              上来）；flip 重夺急收窄（现货在 flip 下方 −0.60% vs 06-26 −3.57%）因
              flip 自己落到 $60,432；dealer 本子从 −87.5M 去放大到 −20.9M 净空 γ
              因 26JUN 月期 −74.71M 结算出去；scout 的价格块急收窄但引擎只带一根 12h
              TD9 提示、regime 翻成趋势延续；宏观 re-grow 闸保持未触发但信用腿正好
              爬上线（OAS 2.78%）、利率腿松到 13bp；相关性 regime 守 NORMAL 因整个
              风险复合体仍红；挤压周期在一根更死的 feed 上保持 ON HOLD。主导条件没变：
              <em>交易台仓位失明、现在进入一根在连续三根日收上破但在稳的 200W 地板、
              一根收窄到 −0.60% 内但脚下没 MA 支撑的重夺、和一根它无法确认的去放大
              本子</em>。今天的条件围绕持续的停摆、稳住的日收破位、待定的周收升级、
              和已结算的 26JUN 放大器重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>实时盘面恢复（主操作）</td><td className="bull">live_db.json 恢复写 2026-06-17 06:43Z 之外的新行 AND SM 三元组从 06-12 01:36Z 冻结上更新</td><td>完整重读 funding / OI / flow / SM；只有那时 scout 或挤压周期才能评估——也只有那时 06-26 上收才能确认是需求还是薄回补；仓位维度现在已连续九篇失明</td></tr>
                <tr><td>200W 地板——日收破位延伸、稳住</td><td className="bear">06-24 日收 $61,051（下方 −2.23%）、06-25 日收 $59,772（下方 −4.28%）与 06-26 日收 $60,072（下方 −3.80%、首根上收）——连续三根收在 $62,443 地板下方；最近 24h 1 分钟收 435 根抢回 $60k 上方；未收盘 06-27 bar $60,072、下方 −3.80%</td><td>日收破位延到第三根连续收但在一根回到 $60k 上方的上抬上稳住——地板仍头顶、慢水位仍阻力；不取仓位</td></tr>
                <tr><td>200W 地板——升级（下一根周收）PENDING</td><td className="bear">一根持续周收 &lt; $62,443（W-SMA200 地板）破地板；22JUN 周收 $63,990 上方 +2.48% 仍站、未收盘 06-29 周读 $60,072 下方 −3.80%（从 −4.14% 改善）</td><td>06-29 周收是解掉 06-15 重夺论的唯一一根水位——一根收在下方升级破位并证伪论点；本次读已停止恶化；密切盯 06-29 settle</td></tr>
                <tr><td>flip 重夺（scout 价格前条件）——收窄到 −0.60%</td><td className="bear">现货 $60,072 在 flip $60,432 下方 −0.60%、在地板 $62,443 下方 −3.80%、在 D-SMA20 $63,078 下方 −4.76%；脚下没 MA；flip 落到地板下方，所以重夺是日收回到 flip 再地板再 D-SMA20</td><td>价格前条件急收窄、现货守在 $60k 上方——重夺 flip 再地板再 D-SMA20 是重开 scout 评估的第一步，但只在实时盘面也恢复时；失明盘面上、flip 下方、这根重夺是盯、不是交易</td></tr>
                <tr><td>26JUN26 月期放大器——已结算、本子去放大</td><td className="bull">26JUN −74.71M 昨天结算（约 08:00Z、06-26）；aggregate GEX −20.9M（前 −87.5M）；前端现在是 27JUN26 0.3 DTE 在 −6.03M；现货坐在 $60k −24.18M 墙下方、下面是 $59k −9.82M 与 $58k −12.88M 墙</td><td>dealer 本子实质去放大——它对下一根移动的阻尼远大于进月期时；集中下行风险已清、没有前向块替代；只盯、无空指令（会压一根空的放大器已结算）</td></tr>
                <tr><td>宏观尾 re-grow（信用腿在线上）</td><td className="bear">HY OAS &gt; 2.78%（当前 2.78%、在线上、0bp——需一根上方印）OR 10Y &gt; 4.53%（13bp 触发、已松）——Tier-1 印小幅新 deltas；DXY / USD/JPY 对 06-26 逐字节相同（陈旧标）</td><td>本篇无对冲指令——一根闸触发（OAS 现在在线上）会在另起的未来备忘里重评估；注意 26JUN 放大器已结算，所以任何这种尾会是比进 06-26 本子更干净的独立对冲</td></tr>
                <tr><td>reclaim-long 利率筛</td><td className="bull">10Y &lt; 4.55% 收——在 4.40% TRUE</td><td>独立筛真、有余地；需一根 BTC 内部转向 AND 一条实时盘面才能转成 scout long</td></tr>
                <tr><td>挤压周期 hostile-2（ON HOLD）</td><td className="stale">SM feed 死约 358.5h；无 deltas 可计算</td><td>暂停、不是转负——feed 恢复后首批新 SM deltas 重新武装</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是{' '}
              <span className="dn-signal">
                06-29 周收是否通过 settle 在 $62,443 200W 地板下方确认破位——日收
                破位现在已延到三根连续收（06-24 $61,051、06-25 $59,772、06-26
                $60,072）但在首根上收上稳住、未收盘 06-29 周读 −3.80% 下方——还是
                现货能在 06-29 settle 前抢一根日收回到地板上方、让 06-15 重夺论
                活着；建设性一侧，一根日收回到 flip $60,432（现在只 −0.60% 远）再
                地板 $62,443 再 D-SMA20 $63,078——交易台在失明盘面上仍无法 scout
                ——会重开这个 case
              </span>。06-23 → 06-26 备忘那四晚的再放大在一个 session 内完全逆转
              （aggregate −87.5M → −20.9M 因 26JUN −74.71M 月期结算、现货从 flip
              下方 −3.57% 到首根上收回到 $60k 上方时的 −0.60%），所以压破位的集中
              结构性风险已清；结构性正——200W 地板——在日收口径上连续三根收破但在
              稳住、离完整升级只剩一根周收，交易台仍读不到那条能说出上收是需求还是
              薄回补的盘面。在盘面恢复前本篇按写好的跑：本子 flat、scout 的价格块
              急收窄但引擎只带一根 12h TD9 提示、regime 翻成趋势延续、宏观尾信用闸
              在线上（OAS 2.78%）、挤压周期暂停、200W 地板盯位是唯一一根活水位——
              现在是一根在三根日收上破但在稳、待周收升级的地板。价格稳住、MTF 头条
              松、dealer 本子去放大、flip 重夺塌到 −0.60% 内；宏观仍 risk-off（利率
              紧但松、信用在它的闸上、美元 EXTREME 但带陈旧标）、相关性 regime 守
              NORMAL 因整个复合体仍红，所以破位仍既是 risk-off-盘面事件、也是 BTC
              自有事件——但上收与已结算的放大器是这根移动在稳的首批迹象。下一个 24h
              的对读是{' '}
              <em>地板-在三根日收上破但在稳、升级待定——尊重延伸的破位、现在放大器
              已结算盯 06-29 周收对地板、读仓位前先修盘面、且不要在失明盘面上 scout
              一根收窄到 −0.60% 但还没清掉 flip 的重夺</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2（已过 codex 敌对式审计 · findings 记于 audits/2026-06-27-desk-note.md）
            </span>
            <b>状态：</b>这是 <b>v2</b> 篇——<b>已过 codex 敌对式审计</b>。STAGE B 跑了
            一根 codex 敌对式跨模型审计（判决 PASS-WITH-NOTES——0 CRITICAL、0 MAJOR、
            2 MINOR），并带一根补充的 ask-deepseek 数值二审；完整记录在{' '}
            <code>audits/2026-06-27-desk-note.md</code>。STAGE C 对每条 finding 用重算
            对钉好的快照（<code>/opt/desk-note/snapshots/2026-06-27-0005/</code>）与
            parquet 裁定，然后全文应用修正、跑 grep-closure 到零残留，再升 v1 → v2。{' '}
            <b>Findings（ID — 搜的 pattern — grep 修前 → 修后 — 状态）：</b>{' '}
            <b>DN-001</b>（MINOR、MTF 1d 告警 DIF 抄错）——搜 <code>2,307.5</code> /{' '}
            <code>2307.5</code>；钉好的 mtf_div_latest.html 印 1d DIF{' '}
            <code>−2309.6</code>，所以两处页面出现都改成 <code>−2,309.6</code>——
            2 → 0——<b>RESOLVED</b>。{' '}
            <b>DN-002</b>（MINOR、&ldquo;above $60k&rdquo; 对 <code>&gt;=</code> 谓词）
            ——重算含端最近 24h 窗（1,441 行）：closes <code>&gt;= 60000</code> = 435、
            closes <code>&lt; 60000</code> = 1,006，所以 435 / 1,006 的拆分是 at-or-above
            谓词；搜 <code>reclaimed above $60k</code> 把三处计数措辞改成{' '}
            <code>435 reclaimed at/above $60k（1,006 below）</code>——3 → 0——
            <b>RESOLVED</b>。（现货叙述的 &ldquo;above $60k&rdquo; 措辞正确、保留。）{' '}
            <b>DS-MOVE</b>（deepseek 标 CRITICAL、MOVE delta 自相矛盾）——对
            macro_dashboard.html 裁定：来源水位是 66.8、它自己的 1d Δ{' '}
            <code>+1.40</code>（已核实），但水位对 06-26 备忘的 69.1 渲染是 −2.3，所以
            &ldquo;+1.40 day … eased from 69.1&rdquo; 把两个不同参考当成一根日移动；
            搜 <code>eased from 69.1</code> / <code>+1.40 day</code> /{' '}
            <code>+1.40 on the day</code> 把三处出现改成把 +1.40 归给来源 1d delta、
            把 −2.3 归给逐篇变化——3 → 0——<b>RESOLVED</b>。{' '}
            <b>DS-WALL</b>（deepseek 标 MINOR、墙和）——重算列出的 $55k–$60k 墙
            （$55k −9.25M + $56k −9.37M + $58k −12.88M + $59k −9.82M + $60k −24.18M）
            = <code>−65.5M</code>、不是 −62M；搜 <code>62M</code> 把那一处改成{' '}
            <code>−65.5M</code>——1 → 0——<b>RESOLVED</b>。总体：全部 findings
            RESOLVED、<b>已过 codex 敌对式审计</b>；无 UNRESOLVED 残留。上面带的数字
            是 STAGE A 原子快照读（parquet 最末 bar 2026-06-27 00:05Z；MTF / GEX /
            跨资产 00:01Z；宏观渲染 2026-06-26 22:16Z；实时盘面冻在 2026-06-17
            06:43Z、233.4h；SM feed 自 2026-06-12 01:36Z 死、约 14.94 天），存档于{' '}
            <code>/opt/desk-note/snapshots/2026-06-27-0005/</code> 供审计者复核同一批
            字节。<b>Build note（INFO）：</b>本服务器跑 Node 18.19.1；完整{' '}
            <code>next build</code> 在 Node 版本闸上被环境阻塞（谱系），所以{' '}
            <code>npx --no-install tsc --noEmit</code> 是 build proxy——STAGE E 拥有
            最终 build 验证。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体情况
            个性化。数字反映单一原子快照（2026-06-27 00:06Z）、provenance 在
            上方数据来源条带中按节披露；<em>关键地、快照时实时衍生品盘面已冻
            233.4h（最末行 2026-06-17 06:43Z）、smart-money 仓位 feed 死了约
            14.94 天</em>，所以所有 funding、OI、flow 与仓位数字都明确是最后已知 /
            陈旧或不可计算并已标注；宏观面板渲染 2026-06-26 22:16Z（比快照早约
            1.85h）、其 Tier-1 系列本次印了小幅新 deltas、不过 DXY / USD/JPY FX
            腿对 06-26 逐字节相同、标为很可能陈旧周末 carry。价格、MTF、GEX 与
            跨资产是新的。本篇是 v2、已过 STAGE B codex 敌对式审计。水位、规模与
            条件是交易台流程的示例、不是长期推荐。过去的相关性、γ 与仓位模式不
            绑定未来盘面。衍生品有全损风险、加杠杆下损失可超过保证金。
            <em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                破位稳住了：200W 地板在第三根日收（06-26 $60,072）上仍破、但印了
                首根回到 $60k 上方的上收，26JUN −74.71M 月期结算、dealer 本子去
                放大 −87.5M → −20.9M、flip 重夺塌到 −0.60% 内——全部透过一条死掉
                的盘面读、第十一天。地板破三次。放大器结算。升级待定。失明。
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
            v2 · 2026-06-27 00:06Z 快照 · 已过 codex 敌对式审计 ·
            sources: live_db.json（FROZEN 233.4h）· mtf_div_latest.html · btc_gex.html ·
            macro_dashboard.html · cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}






