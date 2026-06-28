import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-06-28 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-06-28',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-06-28' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260628() {
  await requireViewer('/zh/desk/2026-06-28');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-06-28 · v2</span>
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
              <span className="dn-big">$60,011</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.10%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-06-28 00:06Z ·{' '}
              <span className="dn-em">
                实时盘面停摆进第十二天——OKX 监控已经冻了 257.4h；价格 / MTF /
                GEX / 跨资产是新的，衍生品盘面仍然黑，SM 本子死了约 15.94 天。
                本次的结构性事件：06-27 日 bar 收<em>下</em>到 $60,000.30（对
                06-26 $60,072 −$72，是连续第四根收在 $62,443 地板下方——06-26
                那根上抬被交还了）；dealer 本子继续去放大、aggregate GEX
                <em>翻成</em>净多 γ +5.9M（阻尼）、从 06-27 的 −20.9M；flip 从
                $60,432 → $60,272、现货现在只在它下方 −0.43%（前 −0.60%）；逼近的
                事件是 06-29 周收、<em>明天</em>（周一）结算——未收盘的 06-29 周读
                地板下方 −3.90%。
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
                    核实——现在对 00:06Z 快照锚已 <b>257.4h 陈旧</b>（06-27 备忘
                    是 233.4h、06-26 是 209.4h——停摆自上一篇又跑了约 24h）。
                    funding / OI / CVD / basis / retail / taker-flow 都是 06-17
                    06:43Z 的<em>最后已知</em>、不是当前。SM 子feed（long_btc /
                    short_btc / net_btc）冻得更久——自 2026-06-12 01:36Z 起常数
                    （约 382.5h / 约 15.94 天）；SM net 与 SM cut-fraction 本次
                    <b>不可计算</b>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-28 00:01Z scan</td>
                  <td className="dn-flag">
                    最新（约快照前 5 分钟）· 滚动 latest 文件、逐字存档于
                    /opt/desk-note/snapshots/2026-06-28-0006/ · 含未收盘 K 线 ·
                    扫描现货 $60,048、24h −0.08%、24h H/L $60,925 / $59,820、
                    qVol $4.91B
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-28 00:00Z 快照</td>
                  <td className="dn-flag">
                    最新（约快照前 6 分钟）· Deribit idx $60,203（比 parquet 现货
                    $60,011 高 $192）· 930 合约（对 06-27 −18）· net GEX{' '}
                    <b>+5.9M</b>（净 LONG γ，<b>翻正</b>、从 06-27 的 −20.9M、
                    06-26 的 −87.5M）· flip $60,272（现货在下方 −0.43%、缺口从
                    −0.60% 收窄）· 前端现在是 28JUN26 0.3 DTE 在{' '}
                    <b>+4.33M</b>（正、今日约 08:00Z 结算），最重的负 expiry 是
                    3JUL26 5.3 在 −6.08M · 现货 $60,011 just 坐在 $60k −15.49M 墙
                    （仍最重、现在<em>头顶</em>）下方，下面是 $59k −10.29M 与 $58k
                    −12.47M 墙
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-28 00:00Z
                  </td>
                  <td className="dn-flag">最新 · 7d 1h bar · 22 资产 · 167 rows · regime NORMAL（均值 |r| 0.285、对 06-27 的 0.288 基本不动——仍在 0.25 idiosyncratic 阈值上方、BTC 耦合在广义风险复合体上）</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-27 22:16Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.83h · 一根周末渲染——多数 FRED Tier-1 日频系列对
                    06-27 渲染逐字节相同：10Y <b>4.40%</b>（−1.0bp、距闸 13bp）、
                    TIPS <b>2.19%</b>（−4.0bp、仍 EXTREME RISK-OFF）、HY OAS{' '}
                    <b>2.78%</b>（+2.0bp、仍 AT 2.78% re-grow 闸——0bp 触发）·
                    MOVE 债波 <b>66.8</b>（来源 1d Δ +1.40、松）· 本次唯一的新刷
                    是 FX 腿：<b>DXY 101.36</b>（−0.08 当日、前 101.44）与
                    <b>USD/JPY 161.68</b>（−0.11 当日、前 161.79）各动一档 · Fed
                    净流动性 $5.812T（无新周度印）· NFCI neutral（现陈旧 8d）·
                    WTI $78.9 现陈旧 5d
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-06-28 00:05Z（close $60,011）</td>
                  <td className="dn-flag">
                    最新 kline（交易所 OHLC、独立于冻结的实时盘面）· 偏移按
                    parquet 最末 bar close 重算——实时盘面冻结期内可得的最新现货 ·
                    显示的周线阶梯用 2023→ 子集（183 根周 bar），所以无 W-SMA200
                    行；200W 地板直接从全历史 glob 重算——355 根走完的周 W-MON bar
                    （2019→present、排除未收盘的 06-29 周）= <b>$62,443</b>、对
                    06-25 → 06-27 备忘钉的 $62,443 不变（一根慢周 SMA、约 $250/周）。
                    <b>现货现在在地板下方 −3.90%（从 −3.80% 滑下）、矩阵上每一根
                    MA 仍在头顶——无正偏移、谱系第四根这样的切</b> · weekly_200sma.json
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
              <span className="dn-v bear">−7.24%（STALE · 06-17 06:43Z · 257.4h）</span>
              <span className="dn-src">live_db 原始 funding −0.006608 × 1095 = −7.24% ann（非 ×100）· 06-17 06:43Z 冻结时的<em>最后已知</em>、现 257.4h 陈旧、不是当前读 · 与 06-19 → 06-27 备忘逐字节相同的同一根冻结行；到冻结为止可得的 24h+1m 含端采样窗（1,442 行）ann 均值 +0.20%、区间 −7.24% / +7.21%、负行 819 / 1,442——盘面死时是一本平衡的双向本子</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 对 06-27</span>
              <span className="dn-v">盘面冻结——不可计算</span>
              <span className="dn-src">实时盘面自 06-17 06:43Z 没写过，所以仍没有当前 funding 去对 06-27 备忘差分 · 冻结时最后已知印是 −7.24% ann（空付多）；杠杆门连续第十二天不可评估</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−468 BTC（−0.45%）· STALE 窗</span>
              <span className="dn-src">live_db oi_btc 102,945 在 06-17 06:43Z 冻结、对一根 24h+1m 含端采样窗（1,442 行）的起点 · 该窗<em>结束</em>在冻结、<em>不</em>延到 00:06Z 快照——它描述到 06-17 06:43Z 为止的盘面、已 257.4h 过期</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bear">59.47 / 40.53 · STALE</span>
              <span className="dn-src">live_db `mkt_long_pct` 在 06-17 06:43Z 冻结（24h+1m 含端采样窗起点是 58.29%——roll-over 里 +1.18pt 加多）· 最后已知、257.4h 陈旧</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">−37.29k · FEED 死约 382.5h</span>
              <span className="dn-src">long 13,532.4 − short 50,825.7 · 这根三元组自 2026-06-12 01:36Z 起逐字节常数（约 382.5h / 约 15.94 天）——是一根<em>冻结值</em>、不是当前仓位读；只为标死 feed 而带</span>
            </div>
            <div>
              <span className="dn-k">SM Δ / cut fraction</span>
              <span className="dn-v">不可计算</span>
              <span className="dn-src">SM feed 冻约 15.94 天 · |Δ| / prior_net 无法算——没有当前 SM net 可差分 · 挤压周期 / 重堆框架本次失明、是 06-16 → 06-27 ON-HOLD 的延续</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">44.3% / 43.37%</span>
              <span className="dn-src">GEX IV 中位数横跨 930 合约（00:00Z、新）对 30D close-to-close RV 43.37%（自 parquet）——链级 richness 只约 +0.93pt、对已实现已薄（06-27 是约 +0.95pt、链贴着已实现）；RV 仍高（06-27 是 43.35%、05-31 是 24.91%）· IV 是 930 合约的链中位数、<em>不是</em>可交易价差</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bear">−0.43%（在下方）</span>
              <span className="dn-src">flip $60,272（前 $60,432 · 落 −$160）· 对 parquet 现货 $60,011（60,010.90 / 60,272 − 1 = −0.433%）/ GEX 文件 Deribit idx $60,203（60,203 / 60,272 − 1 = −0.114%、文件读 −0.1%）——两参考都在 flip 下方、但缺口从 06-27 的 −0.60% 收窄 · net GEX +5.9M（净 LONG γ、从 −20.9M 翻正）· strip 里已无集中下行放大器</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                上抬被交还了、但本子继续去放大——还翻成正。06-27 日 bar 收
                <em>下</em>到 $60,000.30（对 06-26 $60,072 −$72）、是连续第四根
                收在 $62,443 地板下方、把 06-26 那根上抬还了回去；但 dealer 本子
                延续它 06-27 起的去放大、aggregate GEX 从 −20.9M 净空 γ
                <em>翻成</em> +5.9M 净多 γ（现在阻尼）、flip 从 $60,432 → $60,272、
                现货现在只在它下方 −0.43%（前 −0.60%）、MTF regime 分类器翻
                <em>回</em> 5/9 反转 / 均值回归——全部仍透过一条死掉的衍生品盘面
                读、连续第十二天
              </span>。现货报{' '}
              <span className="dn-tag bear">$60,011、24h −0.10%</span>、在 00:05Z
              parquet bar（MTF 扫描按它自己的窗读 −0.08%），对 06-27 备忘现货
              $60,072 基本走平——谱系首根上收被交还、现货钉在 $60k 上。谱系带着的
              那根结构性正——200W 周收口径守住——仍在决策点、而决策现在<em>逼近</em>：
              22JUN 周收 $63,990（地板上方 +2.48%）仍是最后一根已决周印，但日收
              已经连走四根 settle 在它下方（06-24 $61,051 −2.23%、06-25 $59,772
              −4.28%、06-26 $60,072 −3.80%、<span className="dn-tag bear">06-27
              $60,000 −3.91%</span>），未收盘的 06-29 周读{' '}
              <span className="dn-tag bear">$60,011、地板下方 −3.90%</span>——而
              06-29 是周一、<em>明天</em>，所以解掉 06-15 重夺论的周收升级在下一个
              约 24–48h 内 settle。现货连续第四根切下没有一根 MA 在脚下——D-SMA20
              $62,922（−4.63%）与 200W 地板 $62,443（−3.90%）都在头顶、是矩阵上
              最近的线。dealer 本子{' '}
              <span className="dn-tag bull">进一步去放大、翻成 +5.9M 净多 γ</span>，
              strip 清掉了集中下行；现货 just 坐在 $60k −15.49M 墙下方、现在头顶。
              MTF 恶化一档到{' '}
              <span className="dn-tag bear">1 多 / 8 空 / 1 中性</span>（前 1/7/2）
              ——30m 框踏出中性、12h TD9 超卖提示老化成 sell——但 regime 分类器翻成
              建设性那侧，从 6/9 趋势延续翻到{' '}
              <span className="dn-tag bull">5/9 反转（均值回归）</span>。宏观本次仍
              risk-off、一根周末渲染：10Y 守 4.40%、HY OAS 守 2.78% 仍 AT 它的
              re-grow 闸（0bp 触发）、DXY 守 EXTREME 但动一档到 101.36（本次一根新
              FX 刷、非陈旧 carry）。{' '}
              <span className="dn-em">
                操作事实没变、仍然约束：OKX 监控现在已冻 257.4h（最末行 2026-06-17
                06:43Z），funding / OI / CVD / basis / retail 都是最后已知且陈旧，
                SM 仓位本子死了约 15.94 天——SM net 与 cut-fraction 不可计算。交易台
                看不出 06-27 的下收是真派发、还是本子翻多 γ 时的薄双向 churn。
                读法落在价格、γ 与 MTF 这三样上。
              </span>{' '}
              本子保持 flat：本子去放大到净多 γ、flip 重夺收窄到 −0.43% 内，regime
              翻回均值回归，宏观盘面不再恶化——但地板破位延到第四根日收、06-26 上抬
              被交还，脚下没 MA，引擎没确认的多触发，盘面还是死的——这里不能 size
              任何 scout、也不能 size 任何空，而那一根解掉一切的事件（06-29 周收）
              现在只剩一天。
            </p>

            <p>
              BTC 报 <span className="dn-tag">$60,011</span> 在 parquet 最末 bar
              （00:05Z），24h{' '}
              <span className="dn-tag bear">−0.10%</span>（对正好 24h 前的
              $60,072.10 bar——06-27 00:05Z parquet bar；MTF 扫描按它自己的 00:01Z
              窗读 −0.08%——这段差是参考窗、不是数据冲突），在一条{' '}
              <span className="dn-tag">$60,925 / $59,820</span> 的 24h 区间里（按 MTF
              扫描 H/L）。Deribit idx 在 00:00Z 读 $60,203、MTF 扫描现货 $60,048——
              所以最新现货在三个独立的新源上互相印证（parquet kline $60,011、GEX
              Deribit idx $60,203、MTF 扫描 $60,048），即便平常供它的 live_db 盘面
              冻在 06-17 06:43Z、257.4h 陈旧。{' '}
              <span className="dn-signal">结构读已经从「地板在第三根日收上仍破、
              但在稳（06-26 上收）」走到「地板在第四根连续日收上破、那根上抬被交还
              ——但 dealer 本子继续去放大、翻成净多 γ，flip 重夺收窄到 −0.43%」</span>：
              22JUN 周收 $63,990（上方 +2.48%）仍是最后一根已决周守，日收走下穿过
              这条线（06-22 $63,990、06-23 $62,697、06-24 $61,051、06-25 $59,772、
              06-26 $60,072）、06-27 收 $60,000 又回收<em>下</em>（−$72）但仍在线下。
              按框架，一根日收在下方是预警、一根持续的周收在下方才是破地板、并证伪
              06-15 重夺论的升级；未收盘的 06-29 周读 $60,011（下方 −3.90%）、而
              06-29 是周一——<em>明天</em>——所以升级不再是遥远的待定、在约 24–48h
              内 settle。{' '}
              <span className="dn-em">
                谱系唯一一根结构性正在日收口径上、连续四根收破，并离解掉它的周收
                升级只剩一天；现货脚下没 MA，但压破位的 dealer 本子不只去放大——它已
                翻成净多 γ——交易台仍读不到那条能说出下收是派发还是 churn 的盘面。
              </span>
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面冻 257.4h（第十二天）· SM 本子死约 15.94 天 · funding/OI/flow 最后已知陈旧 · 交易台看不出 06-27 的下收是派发还是本子翻净多 γ 时的薄双向 churn</span>
            </h2>

            <p>
              <span className="dn-signal">
                这篇备忘最重要的单一来源——实时衍生品盘面——还是停着、连续第十二天
              </span>。OKX 监控自{' '}
              <span className="dn-tag bear">2026-06-17 06:43Z</span> 起（t = &ldquo;06-17
              14:43&rdquo; BJ；文件 mtime 06-17 06:43:08Z 确认写停在那；进程状态
              本次未存档或核实，所以备忘断言的是缺失的盘面、不是一个活/挂的进程）
              没向 live_db.json 追加过任何行。那现在是对 00:06Z 快照锚{' '}
              <span className="dn-tag bear">257.4h 的缺失盘面</span>——06-20 备忘标在
              65.4h、06-24 在 161.4h、06-26 在 209.4h、06-27 在 233.4h，停摆又跑了
              约 24h 没写。实时盘面带的一切——funding、持仓、现货/期货 CVD、perp
              basis、retail 多%、taker-net、大单流、aggressor skew——因此都是{' '}
              <span className="dn-em">06-17 06:43Z 的最后已知、不是当前</span>。
              smart-money 仓位三元组（long_btc / short_btc / net_btc）逐字节常数——{' '}
              <span className="dn-tag">13,532.4 / 50,825.7 / −37,293.3</span>——自{' '}
              <span className="dn-tag bear">2026-06-12 01:36Z</span>，约 382.5h
              （约 15.94 天）。06-16 备忘把这根死 feed 标在约 94.5h、把挤压周期
              ON HOLD；06-26 备忘带在约 334.5h、06-27 在约 358.5h；今天约 382.5h、
              仍死。{' '}
              <span className="dn-em">
                SM net 作为当前读不可计算，SM cut fraction（|Δ| / prior_net）也
                无法成形——没有当前 SM net 可差分。本篇里任何仓位主张都明确是历史、
                不是实时。
              </span>
            </p>

            <p>
              为完整起见，<em>最后可得</em>的盘面读——全部钉在 06-17 06:43Z 冻结、
              现 257.4h 过期，且与 06-19 → 06-27 备忘逐字节相同因为是同一根冻结
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
                把这个读成一根近十六天的旧指纹、不是信号：一本双向 funding 本子、
                OI 在泄、retail 在弱势第一腿里加多。没有一项能搬到 00:06Z 快照——
                而且它早于整段 06-18 → 06-22 守地板序列、06-23 → 06-25 那段两次
                收破地板并加速跌穿 $60k 的腿、06-26 的上收、以及 06-27 的下收，所以
                它对仓位怎么吸收破位、或者最新这根下收是派发还是 churn，什么都说不
                出。交易台把仓位维度当作未知、把这根 06-27 下收当作仓位未确认。
              </span>
            </p>

            <h2 className="dn-sec">
              结构 <span className="dn-roman">II · 价格/MTF 新 · 多周期共振偏空 1 多 / 8 空 / 1 中性（从 1/7/2 恶化一档——30m 踏出中性）· 1d &amp; 1w 水下死叉双立、12h TD9 超卖提示老化成 Sell 2 · 薄的建设性集合是一根 4h 水下金叉现 7 bar（仍水下）加 1h/1M TD8 buy（再一根收）· regime 翻回 5/9 反转（均值回归、JT&lt;0）· 现货在每一根 MA 下方、整条阶梯头顶，200W 地板 $62,443 在第四根日收（06-27 $60,000）上破、现货下方 −3.90%</span>
            </h2>

            <p>
              <span className="dn-signal">
                MTF 图是新的、头条恶化一档（1 多 / 8 空 / 1 中性、30m 踏出中性、
                12h TD9 提示老化成 sell）但 regime 分类器翻<em>回</em>建设性那侧、
                到反转 / 均值回归——唯一的建设性引擎印是一根现 7 bar 的 4h 水下金叉
                和 1h / 1M 各一根再一根收的 TD8 buy
              </span>——这是连同盘口本子、交易台今天还能信的一维。00:01Z 扫描标{' '}
              <span className="dn-tag bear">1 多 / 8 空 / 1 中性、横跨 10 框</span>，
              净读 <em>多周期共振偏空 · 卖反弹</em>——从 06-27 扫描的 1/7/2 恶化、因
              30m 框退回空计数、12h 翻成 sell。regime 行读{' '}
              <span className="dn-tag bull">5/9 反转 / 均值回归 regime（JT&lt;0）——
              倾向反弹</span>（06-27 是 6/9 趋势延续），所以分类器从向下趋势延续倾斜
              翻回倾向反弹、即便框计数恶化了——而引擎仍没有确认的建设性触发可据以
              行动。唯一一根多框是{' '}
              <span className="dn-tag">1M（云上）</span>；建设性交叉是一根{' '}
              <span className="dn-tag">4h 水下金叉 7 bar 前（从 06-27 的 1 bar 推进、
              但仍是未确认的水下试探、不是 TD buy）</span>、没有活的 TD9 buy——{' '}
              <span className="dn-tag bear">06-27 的 12h TD9 超卖提示没等到反弹就
              老化、那框现在读 Sell 2</span>。下行侧仍重：{' '}
              <span className="dn-tag bear">8h、12h、1d 和 1w 带水下死叉</span>，其中{' '}
              <span className="dn-tag bear">1d 水下死叉现 1 bar（DIF −2,317.0）</span>
              压在{' '}
              <span className="dn-tag bear">1w 水下死叉（刚印、DIF −5,839.0）</span>
              下面，而低框（15m / 30m / 1h）已滚成{' '}
              <span className="dn-tag bear">水上死叉</span>（零线上方的死叉——从它们
              06-27 带的金叉新滚下）。云：4h→1w 全在云下、30m 云内、15m 云下、1h
              云上、1M 云上；只有 1M 守一根多框。薄的建设性集合是{' '}
              <span className="dn-tag bull">4h 水下金叉（7 bar）、加 1h TD8 与 1M TD8
              buy——各再一根收、和一根 15m bottom（看涨反转）背离</span>。{' '}
              <span className="dn-em">
                直读：框栈恶化一档、低框滚成死叉，但 regime 分类器翻回均值回归。
                高框全在死叉、一根 1 bar 的 1d 死叉压在 1w 下面，那根本可能领反弹的
                12h 超卖提示老化成了 sell。引擎仅有的建设性印是一根未确认的 4h 水下
                金叉和两根再一根收的 TD8 buy。没有确认的引擎印去做多这根反弹；主导
                盘面读是那对 1d/1w 死叉、缺席的 MA 支撑、和第四根收破 200W 地板——
                只被翻多 γ 与倾向反弹的 regime 软化。这是一根偏空的趋势框、其均值
                回归设置没有确认触发。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">60,027</td><td className="num bear">38.3</td><td className="bear">死叉（水上）28b</td><td className="bear">云下 ↑60.5k 10b</td><td>Sell 1</td><td>BULL reg（bottom）</td></tr>
                <tr><td>30m</td><td className="num">60,027</td><td className="num bear">40.5</td><td className="bear">死叉（水上）13b</td><td className="neut">云内 59.5k–60.3k 5b</td><td>Buy 5</td><td>BEAR reg（top）</td></tr>
                <tr><td>1h</td><td className="num">60,029</td><td className="num bear">44.0</td><td className="bear">死叉（水上）5b</td><td className="bull">云上 ↓60.0k 9b</td><td>Buy 8 → 9?</td><td>BEAR reg（top）</td></tr>
                <tr><td>4h</td><td className="num">60,035</td><td className="num bear">43.2</td><td className="bull">金叉（水下）7b</td><td className="bear">云下 ↑63.7k 29b</td><td>Buy 3</td><td>—</td></tr>
                <tr><td>8h</td><td className="num">60,035</td><td className="num bear">39.0</td><td className="bear">死叉（水下）15b</td><td className="bear">云下 ↑64.3k 14b</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">60,035</td><td className="num bear">35.3</td><td className="bear">死叉（水下）9b</td><td className="bear">云下 ↑64.1k 73b</td><td>Sell 2</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">60,041</td><td className="num bear">32.0</td><td className="bear">死叉（水下）1b</td><td className="bear">云下 ↑73.2k 27b</td><td>Buy 6</td><td>—</td></tr>
                <tr><td>3d</td><td className="num">60,048</td><td className="num bear">33.6</td><td className="neut">—</td><td className="bear">云下 ↑72.5k 9b</td><td>Buy 3</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">60,048</td><td className="num bear">33.2</td><td className="bear">死叉（水下）刚印</td><td className="bear">云下 ↑100.3k 21b</td><td>Buy 6</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">60,048</td><td className="num">41.3</td><td className="neut">—</td><td className="bull">云上 ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 00:01Z scan（08:01 Beijing；滚动 latest
                    文件、逐字存档于 /opt/desk-note/snapshots/2026-06-28-0006/）。净读{' '}
                    <em>多周期共振偏空 · 卖反弹（1 多 / 8 空 / 1 中性）</em>；regime{' '}
                    <em>5/9 反转 / 均值回归 regime（JT&lt;0、倾向反弹）</em>；反转背离{' '}
                    <em>top div 30m &amp; 1h、bottom div 15m</em>。头部告警：{' '}
                    <em>1d 水下死叉（1 bar 前、DIF −2,317.0）</em>、{' '}
                    <em>1w 水下死叉（刚印、DIF −5,839.0）</em>、{' '}
                    <em>1h TD8 Buy——再一根收</em>、{' '}
                    <em>1M TD8 Buy——再一根收</em>。扫描现货 $60,048、24h −0.08%、
                    24h H/L $60,925 / $59,820、qVol $4.91B。收盘为未收盘 K 线；
                    每个值在各周期收盘前都按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵是和 06-27 一样的深头顶墙、现货从 200W 地板又滑下一点，所以
              谱系第四根切{' '}
              <span className="dn-tag bear">矩阵上每一根线都在头顶——没有正偏移、
              脚下没 MA</span>。$60,011 坐在{' '}
              <span className="dn-tag bear">全历史 W-SMA200 200W 地板 $62,443 下方
              −3.90%</span>——最近的线、仍头顶（06-27 是 −3.80%）——并{' '}
              <span className="dn-tag bear">在 D-SMA20 $62,922 下方 −4.63%</span>、
              再上一根。其上，周期 proxy{' '}
              <span className="dn-tag bear">D-EMA20 $63,130（−4.94%）</span>、然后{' '}
              <span className="dn-tag bear">D-EMA50 $67,237（−10.75%）</span>、然后{' '}
              <span className="dn-tag bear">W-EMA200 $67,507（−11.10%、种子）</span>、
              然后一条密集头顶带：<span className="dn-tag bear">D-SMA50 $69,446（−13.59%）</span>、{' '}
              <span className="dn-tag bear">D-EMA100 $70,779（−15.21%）</span>、{' '}
              <span className="dn-tag bear">D-SMA150 $70,966（−15.44%）</span>、{' '}
              <span className="dn-tag bear">W-SMA20 $71,000（−15.48%）</span>、{' '}
              <span className="dn-tag bear">D-SMA100 $71,532（−16.11%）</span>、{' '}
              <span className="dn-tag bear">W-EMA20 $73,136（−17.95%）</span>、{' '}
              <span className="dn-tag bear">D-EMA150 $73,846（−18.74%）</span>、{' '}
              <span className="dn-tag bear">W-EMA150 $74,026（−18.93%）</span>、{' '}
              <span className="dn-tag bear">W-SMA150 $75,657（−20.68%）</span>、{' '}
              <span className="dn-tag bear">D-SMA200 $75,684（−20.71%）</span>、{' '}
              <span className="dn-tag bear">D-EMA200 $76,683（−21.74%）</span>。更高
              更远、已弃用：W-EMA100 $80,553（−25.50%）、W-EMA50 $81,773（−26.61%）、
              W-SMA100 $88,459（−32.16%）、W-SMA50 $89,792（−33.17%）。{' '}
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-06-28 00:05Z（close $60,010.90）；偏移
                按同一根 last-bar close 重算、那是实时盘面冻结期内可得的最新现货。
                显示的 MA 水位按 $ 取整、偏移用精确序列值算。显示的周线阶梯用 2023→
                子集（183 根周 bar），所以那里 W-SMA200 不可计算、W-EMA200 $67,507
                从可用历史 seed；200W 地板 $62,443 单独从全历史 glob 重算（355 根
                走完的周 W-MON bar、排除未收盘的 06-29 周）。日收：06-19 $63,513、
                06-20 $64,270、06-21 $63,287、06-22 $63,990（= 22JUN 周收）、06-23
                $62,697、06-24 $61,051（首根收破地板）、06-25 $59,772（第二根收破、
                −4.28%）、06-26 $60,072（第三根收破、首根上收、下方 −3.80%）、06-27
                $60,000（第四根收破、一根下收 −$72、下方 −3.91%——06-26 上抬被交还）、
                06-28（未收盘、5 分钟 bar）$60,011——地板破位已延到第四根连续日收，
                且最近 24h 1 分钟收里全部 1,441 根印在地板下方、1,333 根守在 $60k
                或以上（108 根在下方）。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子翻成净多 γ aggregate +5.9M（06-27 是 −20.9M、06-26 是 −87.5M）——本子现在<em>阻尼</em>下一根移动 · strip 里已无集中下行放大器，前端是 28JUN26 0.3 DTE 在 +4.33M（正、今日约 08:00Z 结算），最重负 expiry 是 3JUL26 5.3 在 −6.08M · flip 从 $60,432 → $60,272、现货现在只在它下方 −0.43% · IV 守 44.3%</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子完成了它 06-27 起的去放大、并越过了那条线：aggregate γ
                从 −20.9M 净空翻成 +5.9M 净多 γ，所以本子现在阻尼而非放大下一根
                移动，flip 收窄到现货 −0.43% 内
              </span>。aggregate GEX 是{' '}
              <span className="dn-tag bull">+5.9M / 1%</span>（06-27 是 −20.9M、
              06-26 是 −87.5M、06-25 是 −73.9M）；本子在近段里第一次从净空 γ 越到
              净多 γ——06-23 → 06-26 那四晚的再放大先在 06-27 逆转、现在彻底翻正。
              0-γ flip 落{' '}
              <span className="dn-tag">$60,432 → $60,272（−$160）</span>，现货
              $60,011 坐在 <span className="dn-tag bear">flip 下方 −0.43%</span>、
              现货口径（60,010.90 / 60,272 − 1 = −0.433%）；GEX 文件自己的
              &ldquo;dist to flip&rdquo; 按它的 Deribit idx $60,203（比 parquet
              现货高 $192）读 −0.1%、即 <span className="dn-tag bear">−0.11%</span>
              （60,203 / 60,272 − 1 = −0.114%）——两参考都在 flip 下方、但到 flip
              的缺口从 06-27 的 −0.60% 进一步收窄。墙图在现货附近 put-heavy、但比
              周初本子浅：{' '}
              <span className="dn-tag bear">$60k −15.49M</span>（最重墙、比 06-27 的
              −24.18M 浅得多、本子去放大、现在 just 在现货<em>上方</em>作簇顶）、{' '}
              <span className="dn-tag bear">$58k −12.47M</span>、{' '}
              <span className="dn-tag bear">$59k −10.29M</span>（都 just 在现货下方）、{' '}
              <span className="dn-tag bear">$56k −9.54M</span>、{' '}
              <span className="dn-tag bear">$55k −9.25M</span>、{' '}
              <span className="dn-tag bear">$50k −6.81M</span>、{' '}
              <span className="dn-tag bull">$64k +7.74M</span>、{' '}
              <span className="dn-tag bull">$63k +6.62M</span>、{' '}
              <span className="dn-tag bull">$80k +6.31M</span>、{' '}
              <span className="dn-tag bull">$65k +5.78M</span>。{' '}
              <span className="dn-em">
                列出的 $55k–$60k 主墙合计 −57.04M、坐在现货处及下方——现货 $60,011
                just 在 $60k −15.49M 墙下方、那墙现在是簇顶，下面是 $59k −10.29M
                与 $58k −12.47M 墙。关键地，aggregate 现在是净多 γ，所以本子阻尼
                下一根移动而非放大它——对 06-26 的 −87.5M 空 γ 本子是个实质不同的
                regime；正墙（$63k、$64k、$65k、$80k）坐在头顶作 flip 上方第一道真
                阻力架、对现货下方不提供支撑；现货下方是一块 below-spot put 墙架——
                $59k −10.29M 与 $58k −12.47M 直接在下，$56k −9.54M / $55k −9.25M /
                $50k −6.81M 作更低磁铁——没有一个是证明过的地板。
              </span>{' '}
              按 expiry 没有集中度：前端是小的 28JUN26{' '}
              <span className="dn-tag bull">0.3 DTE 在 +4.33M（正、今日约 08:00Z
              结算）</span>，然后 29JUN26 1.3 −0.22M、30JUN26 2.3 −1.83M、1JUL26 3.3{' '}
              <span className="dn-tag bull">+1.37M</span>、3JUL26 5.3{' '}
              <span className="dn-tag bear">−6.08M</span>（最重的负 expiry）、10JUL26
              12.3 −0.82M、17JUL26 19.3{' '}
              <span className="dn-tag bull">+3.74M</span>、31JUL26 33.3 −0.32M、
              28AUG26 61.3 +0.53M、25SEP26 89.3 −5.38M、25DEC26 180.3 −0.33M、
              26MAR27 271.3 +0.36M、25JUN27 362.3 +0.41M。27JUN26 −6.03M 前端昨天
              约 08:00Z 结算、没有一根前向 expiry 带 26JUN 量级的块——定义了 06-23
              → 06-26 腿的集中下行放大器风险已彻底清掉、前端 expiry 现在是正的。
              （现货参考的 aggregate +5.9M 是现货处的 net GEX；by-expiry 行是独立
              分解、不必加总到它。）
            </p>

            <p>
              IV 中位数横跨 930 合约是{' '}
              <span className="dn-tag">44.3%</span>（对 06-27 的 44.3% / 948 合约守平、
              链又薄了 18 张）对 30D close-to-close RV{' '}
              <span className="dn-tag">43.37%</span>——链级 richness{' '}
              <span className="dn-tag">约 +0.93pt</span>、对已实现仍薄（06-27 是约
              +0.95pt），RV 仍高（今天 43.37% vs 06-27 的 43.35% 与 05-31 的
              24.91%——06-08 → 06-18 下腿启动的高 vol regime 续）。是 930 合约的
              链中位数、<span className="dn-em">不是</span>可交易价差；expiry-/
              strike-level vega、skew 与期限结构仍未载入；vol 读法保持 framework
              only。RV 方法：30D close-to-close、logret.std × √365 × 100、用最末
              30 根日 log return（= 连续 31 根日 close）、锚自 parquet 最末 bar
              2026-06-28 00:05Z；底层 close 窗区间 $59,772 – $73,857。（参考：最末
              29 returns / 30 closes 读 43.90%；页面值 43.37% 来自 30 returns。）
              P/C 比率 0.58、Call OI 213,356 / Put OI 123,038 BTC。
            </p>

            <h2 className="dn-sec">
              宏观 <span className="dn-roman">IV · 周末渲染（约 1.83h）、多数 Tier-1 日频对 06-27 逐字节相同——10Y 4.40%（距闸 13bp）、TIPS 2.19% EXTREME RISK-OFF、HY OAS 2.78%（仍 AT 它的 2.78% 闸——0bp 触发）、MOVE 66.8（松）· 唯一刷的是 FX 腿：DXY 101.36（−0.08）与 USD/JPY 161.68（−0.11）各动一档、都仍硬 · regime 仍 NORMAL、对 NQ 的落后扩到 −2.57pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观面板渲染是一根周末渲染（约 1.83h 滞后）、多数 Tier-1 日频系列
                对 06-27 逐字节相同，读法仍 risk-off——利率守、信用仍正好坐在它的
                re-grow 闸上、美元守 EXTREME 而 FX 腿是本次唯一的新刷、各动一档
                偏低
              </span>。面板渲染 2026-06-27 22:16Z、比快照早约 1.83h。US 10Y nominal{' '}
              <span className="dn-tag">4.40%（−1.0bp 带入）</span>、regime z{' '}
              <span className="dn-tag bear">+1.02</span>——紧 regime、RISK-OFF、距
              4.53% 闸 13bp。10Y TIPS real{' '}
              <span className="dn-tag">2.19%（−4.0bp 带入）</span>、regime z{' '}
              <span className="dn-tag bear">+2.20</span>——仍 EXTREME RISK-OFF、面板上
              最紧的几根之一。5Y5Y BE 通胀{' '}
              <span className="dn-tag">2.19%（0.0bp）</span>、10Y breakeven{' '}
              <span className="dn-tag">2.20%（−1.0bp 带入）</span>——通胀预期软、都
              偶发。HY OAS{' '}
              <span className="dn-tag bear">2.78%（+2.0bp 带入）</span>、regime z{' '}
              <span className="dn-tag bull">−0.75</span>——信用仍松（z-regime 上
              RISK-ON）但价差正好坐在它的 2.78% re-grow 闸上（0bp 触发、需一根上方
              印才点火）。MOVE 债波是{' '}
              <span className="dn-tag">66.8</span>——来源标 +1.40 在它自己的 1d
              delta、仍&ldquo;松。&rdquo;美元守它的 EXTREME 水位、但 FX 腿是本次
              唯一的新刷：DXY{' '}
              <span className="dn-tag bear">101.36（−0.08 当日）</span>、regime z{' '}
              <span className="dn-tag bear">+2.77</span>、从 06-27 的 101.44 动低
              （一根新刷、非陈旧 carry）。Fed 净流动性{' '}
              <span className="dn-tag bear">$5.812T（−0.037T）</span>、regime z{' '}
              <span className="dn-tag bear">−1.16</span>——本次无新周度印。USD/JPY{' '}
              <span className="dn-tag">161.68（−0.11 当日）</span>、regime z +1.53
              ——也一根新刷、从 161.79 松；US-JP 10Y 利差{' '}
              <span className="dn-tag">1.75%（−1.0bp 带入）</span> 窄；USD/CNY{' '}
              <span className="dn-tag">6.7897（−0.00）</span>；WTI{' '}
              <span className="dn-tag stale">$78.9（现陈旧 5d）</span>。{' '}
              <span className="dn-em">
                净：宏观背景仍 risk-off 且在一根周末渲染上基本不动——利率与信用腿
                从 06-27 逐字节带入（10Y 4.40%、TIPS 2.19%、OAS 2.78%），只 FX 腿
                刷低一档。两根 re-grow 腿不变：信用腿仍 ON 2.78% 闸（0bp）而利率腿
                坐在 13bp 外——信用闸是活的那根。reclaim-long 利率筛（10Y &lt; 4.55%）
                在 4.40% 仍 TRUE、有余地。宏观读法仍是强化而非反驳 200W 地板破位——
                一个广义 risk-off 背景、信用闸在线上——且本次既不恶化也不缓和。
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
                <tr><td>US 10Y nominal</td><td className="num">4.40%</td><td className="num">−1.0bp</td><td className="num bear">+1.02</td><td className="bear">紧 · RISK-OFF · 距闸 13bp</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.19%</td><td className="num">−4.0bp</td><td className="num bear">+2.20</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.19%</td><td className="num">0.0bp</td><td className="num">−0.54</td><td className="neut">软 · 偶发</td></tr>
                <tr><td>10Y breakeven</td><td className="num">2.20%</td><td className="num">−1.0bp</td><td className="num">−2.04</td><td className="neut">软 · 偶发</td></tr>
                <tr><td>HY OAS</td><td className="num">2.78%</td><td className="num bear">+2.0bp</td><td className="num bull">−0.75</td><td className="bull">松 · 仍 AT 2.78% 闸（0bp 触发）</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.516</td><td className="num">−0.00</td><td className="num">−0.07</td><td className="stale">周度 · neutral · 现陈旧 8d</td></tr>
                <tr><td>MOVE 债波</td><td className="num">66.8</td><td className="num bear">+1.40</td><td className="num bull">−0.81</td><td className="bull">松</td></tr>
                <tr><td>DXY</td><td className="num">101.36</td><td className="num bull">−0.08</td><td className="num bear">+2.77</td><td className="bear">EXTREME RISK-OFF · 新 FX 刷（前 101.44）</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.812T</td><td className="num bear">−0.037T</td><td className="num bear">−1.16</td><td className="bear">排空 · 无新周度印</td></tr>
                <tr><td>USD/JPY</td><td className="num">161.68</td><td className="num bull">−0.11</td><td className="num bear">+1.53</td><td className="bear">硬 · 新 FX 刷（前 161.79）</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">1.75%</td><td className="num">−1.0bp</td><td className="num bull">−1.25</td><td className="neut">窄</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7897</td><td className="num">−0.00</td><td className="num bull">−1.43</td><td className="neut">松</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">+13.5bp（月度）</td><td className="num bear">+2.56</td><td className="stale">月度 · 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、汇总 00:00Z——{' '}
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。非对角线
              均值 <span className="dn-tag">|r| 0.285</span>——对 06-27 的 0.288
              基本不动、仍 <span className="dn-tag">在 0.25 idiosyncratic 阈值
              上方</span>，所以 regime 行守在{' '}
              <span className="dn-signal">NORMAL——BTC 仍耦合在广义跨资产复合体上</span>，
              其顶部对齐是股票 / 工业金属簇：NQ{' '}
              <span className="dn-tag">+0.772</span>、NVDA{' '}
              <span className="dn-tag">+0.749</span>、SP500{' '}
              <span className="dn-tag">+0.687</span>、JP225{' '}
              <span className="dn-tag">+0.559</span>、TSLA{' '}
              <span className="dn-tag">+0.528</span>、COPPER{' '}
              <span className="dn-tag">+0.503</span>、URNM{' '}
              <span className="dn-tag">+0.468</span>、META{' '}
              <span className="dn-tag">+0.372</span>、AAPL{' '}
              <span className="dn-tag">+0.356</span>、PALL{' '}
              <span className="dn-tag">+0.355</span>，CL{' '}
              <span className="dn-tag">−0.125</span> / BRENT{' '}
              <span className="dn-tag">−0.128</span> 反向、GOLD 一根弱{' '}
              <span className="dn-tag">+0.244</span>。7d 表现仍是广义风险复合体红、
              BTC 对 NQ 的落后比 06-27 更宽、但<em>不是</em>复合体里最差的：{' '}
              <span className="dn-tag bear">BTC −6.65%</span>、NQ{' '}
              <span className="dn-tag bear">−4.08%</span>、SP500{' '}
              <span className="dn-tag bear">−1.97%</span>、JP225{' '}
              <span className="dn-tag bear">−3.67%</span>、NVDA{' '}
              <span className="dn-tag bear">−7.52%</span>、META{' '}
              <span className="dn-tag bear">−3.77%</span>、AAPL{' '}
              <span className="dn-tag bear">−4.88%</span>、MSFT{' '}
              <span className="dn-tag bear">−1.52%</span>、GOOGL{' '}
              <span className="dn-tag bear">−6.74%</span>、AMZN{' '}
              <span className="dn-tag bear">−4.13%</span>、TSLA{' '}
              <span className="dn-tag bear">−5.50%</span>；金属更低（GOLD{' '}
              <span className="dn-tag bear">−1.88%</span>、SILVER{' '}
              <span className="dn-tag bear">−9.40%</span>、PLAT{' '}
              <span className="dn-tag bear">−2.80%</span>、PALL{' '}
              <span className="dn-tag bear">−3.54%</span>、COPPER{' '}
              <span className="dn-tag bear">−3.25%</span>）；原油下、NGAS 正（CL{' '}
              <span className="dn-tag bear">−8.32%</span>、BRENT{' '}
              <span className="dn-tag bear">−8.24%</span>、NGAS{' '}
              <span className="dn-tag bull">+0.48%</span>）。{' '}
              <span className="dn-em">
                BTC 的 7d 回报 −6.65% vs NQ −4.08% 是 −2.57pt 的落后（06-27 是
                −1.27pt）——对 NQ 的缺口又扩宽、因为 BTC 跑输了股票那段反弹。但 BTC
                <em>不是</em>复合体里最深的落后者：URNM −9.91%、SILVER −9.40%、CL
                −8.32%、BRENT −8.24% 与 NVDA −7.52% 7d 都跌得更多。整个风险复合体
                7d 仍红（NQ −4.08%、NVDA −7.52%、Mag7 多在 −4% 到 −7%、金属下、原油
                深下、NGAS 是唯一绿），所以 BTC 的下跌仍嵌在一个广义 risk-off 移动
                里、而不是作为 idiosyncratic 突出——这正是让相关性 regime 守在
                NORMAL 的东西。第四根收破 200W 地板仍与一个 risk-off 宏观盘面同时
                （10Y 紧、信用在它的闸上、DXY EXTREME），所以破位仍既是 risk-off-
                盘面事件、也是 BTC 自有事件——BTC 落后 NQ、但有几个名字（URNM、
                SILVER、CL、BRENT、NVDA）跌得更狠。
              </span>{' '}
              JGB 月度 2.65% 带一个 EXTREME RISK-OFF 月度标——不依赖。
            </p>

            <h2 className="dn-sec">
              交易本子 <span className="dn-roman">V · 本子 FLAT · 200W 地板——日收破位延到第四根连续收（06-27 $60,000 &lt; $62,443、一根把 06-26 上抬交还的下收），周收升级逼近（06-29 明天结算；未收盘读 −3.90% 下方）· scout 仍 stood down（价格块收窄到 flip 下方 −0.43%、本子翻净多 γ，但盘面失明、无 MA 支撑、无确认引擎触发）· 宏观尾信用闸在线上（OAS 2.78%、0bp）· 挤压周期 ON HOLD（SM 死约 15.94 天）</span>
            </h2>

            <p>
              <span className="dn-signal">
                本子 flat、并保持 flat——dealer 本子翻成净多 γ、flip 重夺收窄到
                −0.43%，regime 翻回均值回归，但地板破位延到第四根日收、把 06-26
                上抬交还，约束仍是数据完整性——而那一根解掉一切的周收现在只剩一天
              </span>。谱系的结构性正本次在日收口径上仍破、且性质硬回向下：06-27
              日 bar 收 $60,000.30、在 $62,443 地板下方 −3.91%、是连续第四根收在
              线下、一根下收（对 06-26 $60,072 −$72）、把 06-26 上抬还了回去。按
              框架那是四根收上确认的预警、还不是完整破位——破位是一根持续的周收在
              下方，未收盘的 06-29 周读 $60,011（下方 −3.90%）、06-29 落在周一，
              所以升级不再是遥远的待定：它<em>明天</em> settle。22JUN 周收 $63,990
              （上方 +2.48%）仍是最后一根已决周守，所以 200W 重夺论还没被证伪——但
              它离解只剩约 24–48h。scout 仍不能取、即便它的价格块进一步收窄、本子
              转友善：现货现在只在 flip 下方 −0.43%（06-27 是 −0.60%）、dealer 本子
              翻成 +5.9M 净多 γ，但现货仍在 flip 下方、脚下没 MA，仓位腿（SM 空头
              泄、funding 姿态、回补流）都需要一条实时盘面、而连续第十二天没有，
              引擎也没确认的建设性触发——只有一根未确认的 4h 水下金叉和两根再一根收
              的 TD8 buy、对着 1d/1w 双死叉。也没有新空：集中下行放大器已彻底清掉、
              本子翻成净多 γ，所以会压一根空的那个结构没了，且在放大器已清、本子
              翻多 γ 后、于一条失明盘面上追第四根收破地板，是糟糕的入场。今天的
              交易本子是：无空、无 scout、无新对冲——修盘面 AND 盯明天结算的 06-29
              周收对地板，再重新武装。
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 主仓 · 200W 周期地板盯位——日收破位延到第四根收、06-26 上抬被交还：06-27 日收 $60,000.30 settle 在 $62,443 地板下方 −3.91%（连续第四根收破、一根下收 −$72、对 06-26 $60,072）；周收升级逼近（06-29 明天结算；未收盘读 $60,011、下方 −3.90%）；22JUN 周收 $63,990 上方 +2.48% 仍作最后一根已决周守</span>
              <div className="dn-trade-name">
                200W 周期地板盯位——日收破位延到第四根连续收（一根把 06-26 上抬交还的下收），周收升级现在逼近：地板 $62,443 = 全历史 W-SMA200（355 根走完周 bar、对 06-25 → 06-27 钉不变）、06-24 日收 $61,051（下方 −2.23%）、06-25 $59,772（下方 −4.28%）、06-26 $60,072（下方 −3.80%、首根上收）、06-27 $60,000（下方 −3.91%、下收）、未收盘 06-29 周 $60,011（下方 −3.90%）、最近 24h 全部 1,441 根 1 分钟收在地板下方
              </div>
              <div className="dn-thesis">
                06-27 备忘记下第三根连续日收破地板、在首根上收上稳住。那根稳住没
                守住——它逆转了：06-27 日 bar 收{' '}
                <span className="dn-tag bear">$60,000.30、在 $62,443 地板下方 −3.91%</span>、
                连续第四根收在线下、一根下收（对 06-26 $60,072 −$72）、把 06-26 那根
                上抬直接还了回去。按框架一根盘中插针不是破位、一根日收在下方是预警
                ——现在连续四根收确认——一根持续周收在下方才是破地板并证伪 06-15
                重夺论的升级。22JUN 周收{' '}
                <span className="dn-tag bull">$63,990、上方 +2.48%</span> 仍作最后
                一根已决周守，所以论点还没死，但未收盘的 06-29 周读{' '}
                <span className="dn-tag bear">$60,011、下方 −3.90%</span>、而 06-29
                是周一——所以解掉论点的升级<em>明天</em> settle。{' '}
                <span className="dn-em">谱系的结构性正在日收口径上连续四根破；现货
                脚下没 MA，06-29 周收——只剩一天——是解掉论点的唯一一根水位。</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W 地板</span><span className="dn-lvl-v">$62,443 = 全历史 W-SMA200、本次从 2019→ parquet glob 重算（355 根走完周 W-MON bar、排除未收盘 06-29 周）；对 06-25 → 06-27 钉不变（慢周 SMA、约 $250/周）· weekly_200sma.json 缺、所以比率百分位 / last-event 留未溯源、不杜撰</span></div>
                <div><span className="dn-lvl-k">日收破位——延到第四根收、上抬被交还</span><span className="dn-lvl-v bear">06-24 日收 $61,051（下方 −2.23%）、06-25 $59,772（下方 −4.28%）、06-26 $60,072（下方 −3.80%、首根上收）与 06-27 $60,000（下方 −3.91%、一根把上抬还回的下收）——连续四根收在线下；最近 24h 全部 1,441 根 1 分钟收印在地板下方但 1,333 根守在 $60k 或以上（108 根在下方）、未收盘 06-28 bar 守在下方 −3.90%</span></div>
                <div><span className="dn-lvl-k">最后一根已决周守（仍站）</span><span className="dn-lvl-v bull">22JUN 周收 $63,990 上方 +2.48% 仍站——200W 重夺论还没被证伪、但离死只剩一根周收（明天）</span></div>
                <div><span className="dn-lvl-k">升级（下一根周收）——逼近（明天结算）</span><span className="dn-lvl-v bear">一根持续周收 &lt; $62,443 破 200W 地板并证伪 06-15 重夺论——未收盘 06-29 周读 $60,011（下方 −3.90%）、06-29 是周一；这是 06-29 settle 上解掉论点的那根水位、现在约 24–48h 外</span></div>
                <div><span className="dn-lvl-k">重夺侧（现在近）</span><span className="dn-lvl-v bear">现货在 flip $60,272 下方 −0.43%、在 200W 地板 $62,443 下方 −3.90%、在 D-SMA20 $62,922 下方 −4.63%——脚下没 MA；flip 坐在地板下方，所以一根重夺是日收回到 flip $60,272 上方再地板 $62,443 再 D-SMA20 $62,922——失明盘面上不是 scout 触发（见 scout）</span></div>
              </div>
              <div className="dn-gating">
                <b>框架、不是一笔交易。</b>地板盯位是唯一一根承重的实时水位、其他
                都陈旧或 framework only。日收破位延到第四根连续收、周收升级明天
                结算——这根盯位不取任何仓位：它设确认的预警水位（四根日收在下方）、
                逼近的升级（06-29 周收 &lt; $62,443、明天）、和重夺阶梯（flip
                $60,272 → 地板 $62,443 → D-SMA20 $62,922——注意 flip 坐在地板下方、
                所以第一步重夺是 flip 再地板再 D-SMA20），交易台不会预先 position
                空进一根本子已翻多 γ 出去的破位、也不会做多一根它在失明盘面上无法
                确认的重夺。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout · 仍 STOOD DOWN · 价格前条件进一步收窄（现货只在 flip 下方 −0.43%、vs 06-27 −0.60%）、本子翻净多 γ，但现货仍在 flip 下方、脚下没 MA + 盘面失明约 15.94 天 + 无确认引擎触发</span>
              <div className="dn-trade-name">
                回补反弹 scout——flip 重夺进一步收窄到 −0.43% 内、本子翻净多 γ，但 scout 在失明盘面上、脚下没 MA、无确认引擎触发的情况下保持 stood down
              </div>
              <div className="dn-thesis">
                06-22 备忘看到 scout 价格前条件短暂印出（现货重夺 flip），06-23 →
                06-26 备忘看到它被交还并扩大，06-27 备忘看到它急收窄到 −0.60%。今晚
                它进一步收窄：现货现在{' '}
                <em>只在 flip 下方 −0.43%</em> $60,272（它本子去放大时又落 $160），
                仍在 200W 地板下方 −3.90%、在 D-SMA20 下方、钉在 $60k 上——但脚下
                根本还没有任何 MA。所以 scout 被四点封住。(1) 价格前条件进一步收窄
                但还没真——现货仍在 flip 下方、且在地板与 D-SMA20 下方。(2) 仓位腿
                （SM 空头泄、funding 姿态、回补流）都需要一条实时盘面、而没有——
                交易台看不出 06-27 的下收是派发还是本子翻多 γ 时的薄双向 churn。(3)
                dealer 本子翻成 +5.9M 净多 γ、放大器已清，这对稳定建设性但拿走了一根
                回补反弹会骑的挤压燃料。(4) 引擎没确认的建设性触发——只有一根未确认
                的 4h 水下金叉（现 7 bar、水下）和两根再一根收的 TD8 buy（1h、1M）、
                对着一对 1d/1w 死叉；06-27 的 12h TD9 超卖提示老化成 Sell 2。{' '}
                <span className="dn-em">一根 scout long、在一条仓位失明的盘面上、
                在 flip 与地板下方、脚下没 MA、无确认引擎印，不是一笔交易——唯一的
                建设性反面是收窄的 flip 缺口、净多 γ 翻转、倾向反弹的 regime、未确认
                的 4h 金叉、TD8 buy、和仍站的最后周守，没有一样足以在没有盘面与确认
                引擎触发时 size 进去。</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v bear">stood down · 无入场 · 价格前条件进一步收窄（现货在 flip 下方 −0.43%、vs 06-27 −0.60%）但仍在它下方、且在地板下方、脚下没 MA——只在实时盘面恢复 AND 现货重夺 flip 再地板再 D-SMA20 后才重评估</span></div>
                <div><span className="dn-lvl-k">技术前条件</span><span className="dn-lvl-v bear">flip $60,272 / 地板 $62,443 / D-SMA20 $62,922 重夺（不真——现货在三者下方、脚下没 MA、虽然 flip 现在在 −0.43% 内）AND 一根确认引擎印（不真——1 多 / 8 空 / 1 中性、1d/1w 双死叉、只有一根未确认 4h 水下金叉和 1h/1M 再一根收的 TD8 buy；regime 翻回均值回归）</span></div>
                <div><span className="dn-lvl-k">数据前条件</span><span className="dn-lvl-v bear">实时盘面恢复（当前 257.4h 冻）AND SM feed 活（当前死约 15.94 天）——两者都须先成立任何仓位腿才能读；这是约束块</span></div>
              </div>
              <div className="dn-gating">
                <b>硬规则：</b>没有一条活的仓位盘面就不 scout 入场。收窄的 flip
                缺口、净多 γ 翻转、倾向反弹的 regime、未确认的 4h 金叉、TD8 buy 和
                仍站的最后周守、在 SM / funding / flow 腿失明、现货仍在 flip 与地板
                下方脚下没 MA、引擎无确认触发时、都不触发 scout——交易台不会 size
                进一根它看不见被回补的回补反弹。06-22 抬起、06-23 → 06-26 重关的
                价格块本次进一步收窄但还没开；操作块（盘面下）和引擎块（无确认触发）
                仍约束。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 宏观尾 · put-spread re-grow 闸——信用腿仍在线上：HY OAS 2.78% = 2.78% 闸（0bp 触发）、10Y 腿 13bp 外（4.40% vs 4.53% 闸）；两腿都没在收盘上触发但信用腿正好在触发位 · 周末渲染、Tier-1 逐字节带入</span>
              <div className="dn-trade-name">
                下行 put-spread——re-grow 闸未触发但信用腿仍在线上（OAS 2.78% = 闸、0bp）、利率腿 13bp 外；无对冲加（本子已翻净多 γ、没有 dealer 放大的下行可对冲）
              </div>
              <div className="dn-thesis">
                谱系带的宏观 re-grow 闸——HY OAS &gt; 2.78% OR 10Y &gt; 4.53% 作
                重新长出一根下行尾的条件——在收盘口径上保持未触发，本次信用腿仍正好
                在线上：HY OAS <em>2.78%</em>、等于闸（0bp 触发、需一根上方印才点火），
                而 10Y 守 4.40%、坐在 13bp 外。所以信用腿在触发位、利率腿又退远。
                reclaim-long 利率筛（10Y &lt; 4.55%）在 4.40% 仍 TRUE、有余地。宏观
                盘面仍是一股真的 risk-off 冲量（利率紧、信用在它的闸上、美元 EXTREME）
                但一根周末渲染、利率 / 信用腿没新 deltas；一根宏观尾不是内生兼
                risk-off 地板破位的对的工具，且 dealer γ 定价的集中下行风险已清、
                本子翻成净多 γ，所以没有 dealer 放大的下行可对冲。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">无仓位 · 闸在收盘口径未触发 · HY OAS 腿仍在线上（2.78% = 闸、0bp）、10Y 腿 13bp 外</span></div>
                <div><span className="dn-lvl-k">re-grow 触发（下一根 Tier-1 印）</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% 收（当前 2.78%、在线上——需一根上方印）OR 10Y &gt; 4.53% 收（当前 4.40%、13bp 触发——远的那根）</span></div>
                <div><span className="dn-lvl-k">reclaim-long 利率筛</span><span className="dn-lvl-v bull">10Y &lt; 4.55% 收——在 4.40% TRUE；等一根 BTC 内部转向 AND 一条实时盘面才能转换</span></div>
              </div>
              <div className="dn-gating">
                <b>注意：</b>re-grow 闸是随水位下漂设的酌情盯位、不是回测断点。两腿
                都没在收盘上触发——信用腿正好在线上（0bp、需一根上方印）、利率腿退远
                （13bp）——若任一触发、一根下行尾会在另起的未来备忘里重评估（触发 /
                失效 / R 在那里定）；注意 dealer strip 已不带集中下行放大器、本子翻成
                净多 γ，所以任何这种尾会是更干净的独立对冲、而非叠加到 dealer 空 γ 上。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 挤压周期 hostile-2 观察名单 · 无日历先验 · ON HOLD——SM feed 死约 15.94 天、重堆签名本次读不出</span>
              <div className="dn-trade-name">
                挤压周期 hostile-2——ON HOLD（06-16 → 06-27 的延续）：SM feed 冻约 382.5h、重堆签名本次读不出
              </div>
              <div className="dn-thesis">
                挤压周期 / 重堆-hostile-2 框架把离散 SM 步（Δshort &gt; 0 + Δlong
                &lt; 0 同一分钟）读成延续签名；它的日历先验（BJ 13–15 节奏）在 05-31
                被证伪、此后作无先验观察名单跑。今天因最简单的理由无法评估：SM feed
                死了。long_btc / short_btc / net_btc 自 2026-06-12 01:36Z 起常数
                （约 382.5h），所以没有 SM deltas 可读。06-16 备忘把这根 ON HOLD 标
                在约 94.5h、06-26 在约 334.5h、06-27 在约 358.5h；它在约 382.5h 仍
                ON HOLD。{' '}
                <span className="dn-em">一根冻结的 feed 印不出签名；框架在 SM 数据
                恢复前是黑的。</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">框架状态</span><span className="dn-lvl-v bear">ON HOLD · SM feed 冻约 382.5h（自 2026-06-12 01:36Z）· 无 SM deltas 可计算</span></div>
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
              决策条件 <span className="dn-roman">VI · 实时盘面停摆仍是操作条件（第十二天）· 200W 地板日收破位延到第四根收、06-26 上抬被交还（06-27 $60,000、一根下收）、周收升级逼近（06-29 明天结算；读 −3.90% 下方）· flip 重夺收窄到 −0.43%、本子翻成 +5.9M 净多 γ · scout stood down（无 MA 支撑、无确认引擎触发）· 宏观信用闸在线上（OAS 2.78%）、regime 仍 NORMAL</span>
            </h2>

            <p>
              06-27 那些条件里：实时盘面<em>没</em>回来——又死了约 24h、现在 257.4h
              冻、SM feed 在约 15.94 天；200W 地板日收破位<em>延</em>到第四根连续收
              （06-27 $60,000、下方 −3.91%）、06-26 上抬在一根下收上<em>被交还</em>，
              周收升级现在逼近（06-29 明天结算；未收盘读 −3.90% 下方）；flip 重夺
              进一步收窄（现货在 flip 下方 −0.43% vs 06-27 −0.60%）因 flip 落到
              $60,272；dealer 本子完成去放大、从 −20.9M 翻成 +5.9M 净多 γ——它现在
              阻尼下一根移动；scout 的价格块进一步收窄但引擎只带一根未确认的 4h
              水下金叉和再一根收的 TD8 buy；宏观 re-grow 闸保持未触发但信用腿仍正好
              在线上（OAS 2.78%）、利率腿坐在 13bp 外；相关性 regime 守 NORMAL 因
              整个风险复合体仍红、BTC 对 NQ 的落后扩到 −2.57pt、虽然 BTC 不是最差的
              （URNM/SILVER/CL/BRENT/NVDA 跌得更多）；挤压周期在一根更死的 feed 上
              保持 ON HOLD。主导条件没变：<em>交易台仓位失明、现在进入一根在连续四根
              日收上破的 200W 地板、一根收窄到 −0.43% 内但脚下没 MA 支撑的重夺、和
              一根已翻净多 γ 的本子——全部它无法确认</em>。今天的条件围绕持续的停摆、
              延伸的日收破位、逼近的周收升级、和净多 γ 翻转重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>实时盘面恢复（主操作）</td><td className="bull">live_db.json 恢复写 2026-06-17 06:43Z 之外的新行 AND SM 三元组从 06-12 01:36Z 冻结上更新</td><td>完整重读 funding / OI / flow / SM；只有那时 scout 或挤压周期才能评估——也只有那时 06-27 下收才能确认是派发还是 churn；仓位维度现在已连续十篇失明</td></tr>
                <tr><td>200W 地板——日收破位延伸、上抬被交还</td><td className="bear">06-24 $61,051（−2.23%）、06-25 $59,772（−4.28%）、06-26 $60,072（−3.80%、首根上收）与 06-27 $60,000（−3.91%、一根下收）——连续四根收在 $62,443 地板下方；最近 24h 1 分钟收 1,333 根守在 $60k 或以上；未收盘 06-28 bar $60,011、下方 −3.90%</td><td>日收破位延到第四根连续收、上抬被交还——地板仍头顶、慢水位仍阻力；不取仓位</td></tr>
                <tr><td>200W 地板——升级（下一根周收）逼近</td><td className="bear">一根持续周收 &lt; $62,443（W-SMA200 地板）破地板；22JUN 周收 $63,990 上方 +2.48% 仍站、未收盘 06-29 周读 $60,011 下方 −3.90%、06-29 是周一</td><td>06-29 周收是解掉 06-15 重夺论的唯一一根水位——一根收在下方升级破位并证伪论点；它<em>明天</em> settle；密切盯 06-29 settle</td></tr>
                <tr><td>flip 重夺（scout 价格前条件）——收窄到 −0.43%</td><td className="bear">现货 $60,011 在 flip $60,272 下方 −0.43%、在地板 $62,443 下方 −3.90%、在 D-SMA20 $62,922 下方 −4.63%；脚下没 MA；flip 落到地板下方，所以重夺是日收回到 flip 再地板再 D-SMA20</td><td>价格前条件进一步收窄、现货守在 $60k 邻近——重夺 flip 再地板再 D-SMA20 是重开 scout 评估的第一步，但只在实时盘面也恢复时；失明盘面上、flip 下方、这根重夺是盯、不是交易</td></tr>
                <tr><td>dealer 本子——翻成净多 γ</td><td className="bull">aggregate GEX +5.9M（前 06-27 −20.9M、06-26 −87.5M）；前端是 28JUN26 0.3 DTE 在 +4.33M（正、今日约 08:00Z 结算）；最重负 expiry 是 3JUL26 5.3 在 −6.08M；现货坐在 $60k −15.49M 墙下方、下面是 $59k −10.29M 与 $58k −12.47M 墙</td><td>dealer 本子现在<em>阻尼</em>下一根移动——集中下行风险已彻底清、没有前向块替代；只盯、无空指令（会压一根空的放大器已清、本子是多 γ）</td></tr>
                <tr><td>宏观尾 re-grow（信用腿在线上）</td><td className="bear">HY OAS &gt; 2.78%（当前 2.78%、在线上、0bp——需一根上方印）OR 10Y &gt; 4.53%（13bp 触发）——周末渲染、利率/信用逐字节带入；只 FX 腿刷（DXY 101.36、USD/JPY 161.68）</td><td>本篇无对冲指令——一根闸触发（OAS 在线上）会在另起的未来备忘里重评估；注意本子已翻净多 γ，所以任何这种尾会是更干净的独立对冲</td></tr>
                <tr><td>reclaim-long 利率筛</td><td className="bull">10Y &lt; 4.55% 收——在 4.40% TRUE</td><td>独立筛真、有余地；需一根 BTC 内部转向 AND 一条实时盘面才能转成 scout long</td></tr>
                <tr><td>挤压周期 hostile-2（ON HOLD）</td><td className="stale">SM feed 死约 382.5h；无 deltas 可计算</td><td>暂停、不是转负——feed 恢复后首批新 SM deltas 重新武装</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是{' '}
              <span className="dn-signal">
                06-29 周收——<em>明天</em> settle——是否通过 settle 在 $62,443 200W
                地板下方确认破位（日收破位现在已延到四根连续收：06-24 $61,051、
                06-25 $59,772、06-26 $60,072、06-27 $60,000，未收盘 06-29 周读
                −3.90% 下方），还是现货能在 06-29 settle 前抢一根日收回到地板上方、
                让 06-15 重夺论活着；建设性一侧，一根日收回到 flip $60,272（现在只
                −0.43% 远）再地板 $62,443 再 D-SMA20 $62,922——交易台在失明盘面上仍
                无法 scout——会重开这个 case
              </span>。压周初破位的 dealer 本子不只去放大、还彻底翻转（aggregate
              −20.9M → +5.9M 净多 γ、strip 清掉集中下行，现货从 flip 下方 −0.60% 到
              −0.43%），所以本子现在阻尼下一根移动；结构性正——200W 地板——在日收
              口径上连续四根收破、离解掉它的周收升级只剩一天，交易台仍读不到那条能
              说出下收是派发还是 churn 的盘面。在盘面恢复前本篇按写好的跑：本子 flat、
              scout 的价格块进一步收窄但引擎只带一根未确认的 4h 金叉和再一根收的
              TD8 buy、宏观尾信用闸在线上（OAS 2.78%）、挤压周期暂停、200W 地板盯位
              是唯一一根活水位——现在是一根在四根日收上破、周收升级明天结算的地板。
              价格钉在 $60k、MTF 头条恶化一档，但 dealer 本子翻净多 γ、flip 重夺
              收窄到 −0.43%、regime 翻回均值回归；宏观仍 risk-off（利率紧、信用在
              它的闸上、美元 EXTREME）、一根周末渲染、相关性 regime 守 NORMAL 因整个
              复合体仍红、BTC 落后 NQ 但不是最差（URNM/SILVER/CL/BRENT/NVDA 跌得
              更多），所以破位仍既是 risk-off-盘面事件、也是 BTC 自有事件——但净多 γ
              翻转是 dealer 结构转阻尼的首个迹象。下一个 24h 的对读是{' '}
              <em>地板-在四根日收上破、升级明天结算——尊重延伸的破位，现在它只剩
              一天、本子已翻多 γ 时盯 06-29 周收对地板，读仓位前先修盘面，且不要在
              失明盘面上 scout 一根收窄到 −0.43% 但还没清掉 flip 的重夺</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2（已过 codex 敌对式审计 · findings 记于 audits/2026-06-28-desk-note.md）
            </span>
            <b>状态：</b>这是 <b>v2</b> 篇——<b>已过 codex 敌对式审计</b>。STAGE B 跑了
            一根 codex 敌对式跨模型审计（判决 BLOCK-CRITICAL——1 CRITICAL、1 MAJOR、
            1 MINOR），并带一根补充的 ask-deepseek 数值二审；完整记录在{' '}
            <code>audits/2026-06-28-desk-note.md</code>。STAGE C 对每条 finding 用重算
            对钉好的快照（<code>/opt/desk-note/snapshots/2026-06-28-0006/</code>）裁定，
            然后全文应用修正、跑 grep-closure 到零残留，再升 v1 → v2。{' '}
            <b>Findings（ID — 搜的 pattern — grep 修前 → 修后 — 状态）：</b>{' '}
            <b>DN-001</b>（CRITICAL、BTC 被错称&ldquo;最深落后者&rdquo;）——搜{' '}
            <code>laggard</code> / <code>deepest</code> / &ldquo;BTC the laggard&rdquo;
            ——修前 4 处残留（跨资产段、跨资产 dn-em 摘要、和两行决策摘要）——修后 0
            处残留（唯一剩的 <code>laggard</code> 是改对的否定&ldquo;BTC is NOT the
            deepest laggard&rdquo;）。来源 <code>cross_asset_correlation_summary.md</code>
            确认 BTC −6.65% 落后 NQ −4.08% 共 −2.57pt、但<em>不是</em>最差的 7d 表现：
            URNM −9.91%、SILVER −9.40%、CL −8.32%、BRENT −8.24% 与 NVDA −7.52% 都
            跌得更多。<b>RESOLVED。</b>{' '}
            <b>DN-002</b>（MAJOR、盘口本子在列出数面 below-spot 墙后却称&ldquo;下面
            唯一的结构是 $58k put 墙&rdquo;）——搜&ldquo;only structure below&rdquo; /
            &ldquo;$58k put 墙&rdquo;排他性——修前 1 处残留——修后 0；改写成一块
            below-spot put 墙架（$59k −10.29M / $58k −12.47M 直接在下，$56k −9.54M /
            $55k −9.25M / $50k −6.81M 作更低磁铁、没有一个是证明过的地板）。
            <b>RESOLVED。</b>{' '}
            <b>DN-003</b>（MINOR、MTF 表把扫描现货 $60,048 当成每个周期收）——搜表的
            close 列 <code>60,048</code>——修前 10 行（7 行残留：15m 到 1d）——修后 3
            （只 3d/1w/1M、来源确认是 $60,048）；从钉好的 MTF 表填入逐 TF 收
            （15m/30m $60,027、1h $60,029、4h/8h/12h $60,035、1d $60,041）。
            <b>RESOLVED。</b>{' '}
            <b>ask-deepseek 二审（用重算裁定）：</b>DXY 与 USD/JPY 当日 delta 改成
            对齐显示的逐篇水位——DXY 101.36 vs 101.44 = −0.08（前 −0.07、4 处 → 0），
            USD/JPY 161.68 vs 161.79 = −0.11（前 −0.12、4 处 → 0）。标的 expiry-strip-
            sum &ldquo;CRITICAL&rdquo;（by-expiry 行加总 −4.24M vs net GEX +5.9M）裁定
            REJECTED：+5.9M 是 GEX 来源文件自己陈述的总值（codex 确认 clean）、且页面
            已披露现货参考的 aggregate 与 by-expiry 分解测的是不同东西、不必加总——
            无改动。06-27 收 $60,000.30 vs $60,000 标裁定 REJECTED：$60,000 是
            $60,000.30 一致的整美元取整（精确值在 −$72 delta 要紧的散文处显示）。
            总体：<b>已过 codex 敌对式审计</b>、全部 CRITICAL + MAJOR + MINOR findings
            RESOLVED、grep-closure 核实零残留。上面带的数字是 STAGE A 原子快照读
            （parquet 最末 bar 2026-06-28 00:05Z、close $60,010.90；MTF / GEX / 跨资产
            00:00–00:01Z；宏观渲染 2026-06-27 22:16Z；实时盘面冻在 2026-06-17 06:43Z、
            257.4h；SM feed 自 2026-06-12 01:36Z 死、约 15.94 天），存档于{' '}
            <code>/opt/desk-note/snapshots/2026-06-28-0006/</code> 供审计者复核同一批
            字节。<b>Build note（INFO）：</b>本服务器跑 Node 18.19.1；完整{' '}
            <code>next build</code> 在 Node 版本闸上被环境阻塞（谱系），所以{' '}
            <code>npx --no-install tsc --noEmit</code> 是 build proxy——STAGE E 拥有
            最终 build 验证。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体情况
            个性化。数字反映单一原子快照（2026-06-28 00:06Z）、provenance 在
            上方数据来源条带中按节披露；<em>关键地、快照时实时衍生品盘面已冻
            257.4h（最末行 2026-06-17 06:43Z）、smart-money 仓位 feed 死了约
            15.94 天</em>，所以所有 funding、OI、flow 与仓位数字都明确是最后已知 /
            陈旧或不可计算并已标注；宏观面板渲染 2026-06-27 22:16Z（比快照早约
            1.83h）、一根周末渲染、其利率 / 信用 Tier-1 系列对 06-27 逐字节相同、
            只 FX 腿刷新。价格、MTF、GEX 与跨资产是新的。本篇是 v2、已过 STAGE B
            codex 敌对式审计——findings 已裁定并应用。水位、规模与条件是交易台流程
            的示例、不是长期推荐。过去的相关性、γ 与仓位模式不绑定未来盘面。
            衍生品有全损风险、加杠杆下损失可超过保证金。
            <em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                上抬被交还：200W 地板在第四根日收（06-27 $60,000、一根把 06-26 上抬
                还回的下收）上仍破，但 dealer 本子翻成 +5.9M 净多 γ、flip 重夺收窄到
                −0.43%——全部透过一条死掉的盘面读、第十二天。地板破四次。本子翻多 γ。
                周收明天结算。失明。
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
            v2 · 2026-06-28 00:06Z 快照 · 已过 codex 敌对式审计 ·
            sources: live_db.json（FROZEN 257.4h）· mtf_div_latest.html · btc_gex.html ·
            macro_dashboard.html · cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
