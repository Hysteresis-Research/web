import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-06-29 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-06-29',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-06-29' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260629() {
  await requireViewer('/zh/desk/2026-06-29');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-06-29 · v2</span>
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
              <span className="dn-big">$59,267</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−1.30%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-06-29 00:06Z ·{' '}
              <span className="dn-em">
                实时盘面停摆进第十三天——OKX 监控已经冻了 281.4h；价格 / MTF /
                GEX / 跨资产是新的，衍生品盘面仍然黑，SM 本子死了约 16.94 天。
                本次的结构性事件：06-28 日 bar 收<em>下</em>到 $59,550（对 06-27
                $60,000 −$450，是连续第五根收在 $62,443 地板下方）；周收升级
                <em>今天结算</em>（06-29 是周一——未收盘的 06-29 周读 $59,267.30、
                地板下方 −5.09%、在确认破位的路上）；dealer 本子<em>翻回</em>净空
                γ −20.1M（前 06-28 是 +5.9M 净多）、一根集中下行放大器在 3JUL26
                −9.63M <em>重现</em>；flip 缺口<em>扩</em>到 −1.42%（现货在松下的
                flip $60,119 下方）——06-28 那根多 γ 喘息被直接交还。
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
                    核实——现在对 00:06Z 快照锚已 <b>281.4h 陈旧</b>（06-28 备忘
                    是 257.4h、06-27 是 233.4h——停摆自上一篇又跑了约 24h）。
                    funding / OI / CVD / basis / retail / taker-flow 都是 06-17
                    06:43Z 的<em>最后已知</em>、不是当前。SM 子feed（long_btc /
                    short_btc / net_btc）冻得更久——自 2026-06-12 01:36Z 起常数
                    （约 406.5h / 约 16.94 天）；SM net 与 SM cut-fraction 本次
                    <b>不可计算</b>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-29 00:01Z scan</td>
                  <td className="dn-flag">
                    最新（约快照前 5 分钟）· 滚动 latest 文件、逐字存档于
                    /opt/desk-note/snapshots/2026-06-29-0006/ · 含未收盘 K 线 ·
                    扫描现货 $59,465、24h −0.92%、24h H/L $60,543 / $58,888、
                    qVol $6.21B
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-29 00:01Z 快照</td>
                  <td className="dn-flag">
                    最新（约快照前 5 分钟）· Deribit idx $59,677（比 parquet 现货
                    $59,267 高 $410）· 916 合约（对 06-28 −14）· net GEX{' '}
                    <b>−20.1M</b>（净 SHORT γ，<b>翻回负</b>、从 06-28 的 +5.9M；
                    06-27 是 −20.9M）· flip $60,119（现货在下方 −1.42%、缺口从
                    −0.43% <em>扩大</em>）· 前端现在是 29JUN26 0.3 DTE 在{' '}
                    <b>−1.29M</b>（今日约 08:00Z 结算），最重的负 expiry 是
                    3JUL26 4.3 在 <b>−9.63M</b>（一根<em>重现</em>的下行放大器、
                    比 06-28 的 −6.08M 更深）· 现货 $59,267 just 坐在 $60k
                    −13.33M 墙（仍最重、现在<em>头顶</em>）下方，下面是 $59k
                    −9.32M 与 $58k −12.94M 墙
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-29 00:01Z
                  </td>
                  <td className="dn-flag">最新 · 7d 1h bar · 22 资产 · 168 rows · regime NORMAL（均值 |r| 0.283、对 06-28 的 0.285 基本不动——仍在 0.25 idiosyncratic 阈值上方、BTC 耦合在广义风险复合体上）</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-28 22:15Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.85h · 一根周日晚渲染——多数 FRED Tier-1 日频系列对
                    06-28 渲染逐字节相同：10Y <b>4.40%</b>（−1.0bp、距闸 13bp）、
                    TIPS <b>2.19%</b>（−4.0bp、仍 EXTREME RISK-OFF）、HY OAS{' '}
                    <b>2.78%</b>（+2.0bp、仍 AT 2.78% re-grow 闸——0bp 触发）·
                    MOVE 债波 <b>66.8</b>（来源 1d Δ −0.31、松）· FX 腿本次基本
                    走平：<b>DXY 101.37</b>（+0.01 当日、前 101.36）与
                    <b>USD/JPY 161.68</b>（−0.12 当日、不变）· Fed 净流动性
                    $5.812T（无新周度印）· NFCI neutral（现陈旧 9d）· WTI $78.9
                    现陈旧 6d
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-06-29 00:06Z（close $59,267）</td>
                  <td className="dn-flag">
                    最新 kline（交易所 OHLC、独立于冻结的实时盘面）· 偏移按
                    parquet 最末 bar close 重算——实时盘面冻结期内可得的最新现货 ·
                    显示的周线阶梯用 2023→ 子集（182 根周 bar），所以无 W-SMA200
                    行；200W 地板直接从全历史 glob 重算——355 根走完的周 W-MON bar
                    （2019→present、排除未收盘的 06-29 周）= <b>$62,443</b>、对
                    06-25 → 06-28 备忘钉的 $62,443 不变（一根慢周 SMA、约 $250/周）。
                    <b>现货现在在地板下方 −5.09%（从 −3.90% 滑下）、矩阵上每一根
                    MA 仍在头顶——无正偏移、谱系第五根这样的切</b> · weekly_200sma.json
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
              <span className="dn-v bear">−7.24%（STALE · 06-17 06:43Z · 281.4h）</span>
              <span className="dn-src">live_db 原始 funding −0.006608 × 1095 = −7.24% ann（非 ×100）· 06-17 06:43Z 冻结时的<em>最后已知</em>、现 281.4h 陈旧、不是当前读 · 与 06-19 → 06-28 备忘逐字节相同的同一根冻结行；到冻结为止可得的 24h+1m 含端采样窗（1,442 行）ann 均值 +0.20%、区间 −7.24% / +7.21%、负行 819 / 1,442——盘面死时是一本平衡的双向本子</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 对 06-28</span>
              <span className="dn-v">盘面冻结——不可计算</span>
              <span className="dn-src">实时盘面自 06-17 06:43Z 没写过，所以仍没有当前 funding 去对 06-28 备忘差分 · 冻结时最后已知印是 −7.24% ann（空付多）；杠杆门连续第十三天不可评估</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−468 BTC（−0.45%）· STALE 窗</span>
              <span className="dn-src">live_db oi_btc 102,945 在 06-17 06:43Z 冻结、对一根 24h+1m 含端采样窗（1,442 行）的起点 · 该窗<em>结束</em>在冻结、<em>不</em>延到 00:06Z 快照——它描述到 06-17 06:43Z 为止的盘面、已 281.4h 过期</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bear">59.47 / 40.53 · STALE</span>
              <span className="dn-src">live_db `mkt_long_pct` 在 06-17 06:43Z 冻结（24h+1m 含端采样窗起点是 58.29%——roll-over 里 +1.18pt 加多）· 最后已知、281.4h 陈旧</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">−37.29k · FEED 死约 406.5h</span>
              <span className="dn-src">long 13,532.4 − short 50,825.7 · 这根三元组自 2026-06-12 01:36Z 起逐字节常数（约 406.5h / 约 16.94 天）——是一根<em>冻结值</em>、不是当前仓位读；只为标死 feed 而带</span>
            </div>
            <div>
              <span className="dn-k">SM Δ / cut fraction</span>
              <span className="dn-v">不可计算</span>
              <span className="dn-src">SM feed 冻约 16.94 天 · |Δ| / prior_net 无法算——没有当前 SM net 可差分 · 挤压周期 / 重堆框架本次失明、是 06-16 → 06-28 ON-HOLD 的延续</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">48.0% / 43.07%</span>
              <span className="dn-src">GEX IV 中位数横跨 916 合约（00:01Z、新）对 30D close-to-close RV 43.07%（自 parquet）——链级 richness 跳到约 +4.93pt、对已实现（06-28 是约 +0.93pt——本子翻回净空 γ 时链显著变贵）；RV 仍高（06-28 是 43.37%、05-31 是 24.91%）· IV 是 916 合约的链中位数、<em>不是</em>可交易价差</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bear">−1.42%（在下方）</span>
              <span className="dn-src">flip $60,119（前 $60,272 · 松 −$153）· 对 parquet 现货 $59,267（59,267.30 / 60,119 − 1 = −1.416%）/ GEX 文件 Deribit idx $59,677（59,677 / 60,119 − 1 = −0.735%、文件读 −0.7%）——两参考都在 flip 下方、缺口从 06-28 的 −0.43% <em>扩大</em> · net GEX −20.1M（净 SHORT γ、从 +5.9M 翻回负）· 一根集中下行放大器在 3JUL26 −9.63M 重现</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                多 γ 喘息被直接交还、地板破位走到第五根收。06-28 日 bar 收
                <em>下</em>到 $59,550（对 06-27 $60,000 −$450）、是连续第五根收在
                $62,443 地板下方；06-28 那根翻多 γ 的 dealer 本子<em>翻回</em>
                −20.1M 净空 γ（现在又在放大）、一根集中下行放大器在 3JUL26 −9.63M
                重现，flip 从 $60,272 松到 $60,119、但现货跌得更快，所以重夺缺口
                <em>扩</em>到 −1.42%（前 −0.43%），MTF 框栈恶化一档到 1/9/0、即便
                regime 分类器改善到 6/9 反转——全部仍透过一条死掉的衍生品盘面读、
                连续第十三天
              </span>。现货报{' '}
              <span className="dn-tag bear">$59,267、24h −1.30%</span>、在 00:06Z
              parquet bar（MTF 扫描按它自己的窗读 −0.92%），从 06-28 备忘现货
              $60,011 下来——谱系交还了 $60k 钉、现在印在它下方。谱系带的那根结构性
              正——200W 周收口径——在决策点、而决策现在<em>正在结算</em>：22JUN 周收
              $63,990（地板上方 +2.48%）仍是最后一根已决周印，但日收已经连走五根
              settle 在它下方（06-24 $61,051 −2.23%、06-25 $59,772 −4.28%、06-26
              $60,072 −3.80%、06-27 $60,000 −3.91%、<span className="dn-tag bear">06-28
              $59,550 −4.63%</span>），未收盘的 06-29 周读{' '}
              <span className="dn-tag bear">$59,267、地板下方 −5.09%</span>——而 06-29
              是周一、<em>今天</em>，所以解掉 06-15 重夺论的周收升级在今天收盘结算、
              在确认破位的路上。现货连续第五根切下脚下没一根 MA——200W 地板 $62,443
              （−5.09%）与 D-EMA20 $62,722（−5.51%）都在头顶、是矩阵上最近的线。
              dealer 本子{' '}
              <span className="dn-tag bear">翻回 −20.1M 净空 γ</span>、并在 3JUL26
              −9.63M 重新长出一根集中下行放大器；现货 just 坐在 $60k −13.33M 墙
              下方、现在头顶。MTF 恶化一档到{' '}
              <span className="dn-tag bear">1 多 / 9 空 / 0 中性</span>（前 1/8/1）
              ——30m 框踏出中性翻成空计数——但 regime 分类器守在建设性那侧、改善到{' '}
              <span className="dn-tag bull">6/9 反转（均值回归）</span>、从 5/9。宏观
              本次仍 risk-off、一根周日晚渲染：10Y 守 4.40%、HY OAS 守 2.78% 仍 AT
              它的 re-grow 闸（0bp 触发）、DXY 守 EXTREME 且基本走平在 101.37。{' '}
              <span className="dn-em">
                操作事实没变、仍然约束：OKX 监控现在已冻 281.4h（最末行 2026-06-17
                06:43Z），funding / OI / CVD / basis / retail 都是最后已知且陈旧，
                SM 仓位本子死了约 16.94 天——SM net 与 cut-fraction 不可计算。交易台
                看不出 06-28 的下收是真派发、还是本子翻回净空 γ 时的薄双向 churn。
                读法落在价格、γ 与 MTF 这三样上。
              </span>{' '}
              本子保持 flat：regime 改善到均值回归、地板破位离周收解决只剩一根
              settle——但 06-28 那根多 γ 喘息逆转（本子回到 −20.1M 净空 γ、放大器
              重现），地板破位延到第五根日收，flip 重夺扩到 −1.42%，脚下没 MA，引擎
              没确认的多触发，盘面还是死的——这里不能 size 任何 scout、也不能 size
              任何空，而那一根解掉一切的事件（06-29 周收）今天收盘结算。
            </p>

            <p>
              BTC 报 <span className="dn-tag">$59,267</span> 在 parquet 最末 bar
              （00:06Z），24h{' '}
              <span className="dn-tag bear">−1.30%</span>（对正好 24h 前的
              $60,048.50 bar——06-28 00:06Z parquet bar；MTF 扫描按它自己的 00:01Z
              窗读 −0.92%——这段差是参考窗、不是数据冲突），在一条{' '}
              <span className="dn-tag">$60,543 / $58,888</span> 的 24h 区间里（按 MTF
              扫描 H/L）。Deribit idx 在 00:01Z 读 $59,677、MTF 扫描现货 $59,465——
              所以最新现货在三个独立的新源上互相印证（parquet kline $59,267、GEX
              Deribit idx $59,677、MTF 扫描 $59,465），即便平常供它的 live_db 盘面
              冻在 06-17 06:43Z、281.4h 陈旧。{' '}
              <span className="dn-signal">结构读已经从「地板在第四根日收上破、本子
              翻成多 γ」走到「地板在第五根连续日收上破、本子<em>翻回</em>净空 γ、
              一根下行放大器重现——而 flip 重夺扩到 −1.42%」</span>：22JUN 周收
              $63,990（上方 +2.48%）仍是最后一根已决周守，日收走下穿过这条线
              （06-22 $63,990、06-23 $62,697、06-24 $61,051、06-25 $59,772、06-26
              $60,072、06-27 $60,000）、06-28 收 $59,550 又往<em>下</em>一档（−$450）
              且仍在线下。按框架，一根日收在下方是预警、一根持续的周收在下方才是
              破地板、并证伪 06-15 重夺论的升级；未收盘的 06-29 周读 $59,267（下方
              −5.09%）、而 06-29 是周一——<em>今天</em>——所以升级不再待定、在今天
              收盘结算。{' '}
              <span className="dn-em">
                谱系唯一一根结构性正在日收口径上、连续五根收破，并今天结算它的周收
                升级；现货脚下没 MA，而 06-28 短暂去放大的 dealer 本子已翻回净空 γ
                并重新长出一根下行放大器——交易台仍读不到那条能说出下收是派发还是
                churn 的盘面。
              </span>
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面冻 281.4h（第十三天）· SM 本子死约 16.94 天 · funding/OI/flow 最后已知陈旧 · 交易台看不出 06-28 的下收是派发还是本子翻回净空 γ 时的薄双向 churn</span>
            </h2>

            <p>
              <span className="dn-signal">
                这篇备忘最重要的单一来源——实时衍生品盘面——还是停着、连续第十三天
              </span>。OKX 监控自{' '}
              <span className="dn-tag bear">2026-06-17 06:43Z</span> 起（t = &ldquo;06-17
              14:43&rdquo; BJ；文件 mtime 06-17 06:43:08Z 确认写停在那；进程状态
              本次未存档或核实，所以备忘断言的是缺失的盘面、不是一个活/挂的进程）
              没向 live_db.json 追加过任何行。那现在是对 00:06Z 快照锚{' '}
              <span className="dn-tag bear">281.4h 的缺失盘面</span>——06-20 备忘标在
              65.4h、06-24 在 161.4h、06-26 在 209.4h、06-27 在 233.4h、06-28 在
              257.4h，停摆又跑了约 24h 没写。实时盘面带的一切——funding、持仓、现货/
              期货 CVD、perp basis、retail 多%、taker-net、大单流、aggressor skew——
              因此都是{' '}
              <span className="dn-em">06-17 06:43Z 的最后已知、不是当前</span>。
              smart-money 仓位三元组（long_btc / short_btc / net_btc）逐字节常数——{' '}
              <span className="dn-tag">13,532.4 / 50,825.7 / −37,293.3</span>——自{' '}
              <span className="dn-tag bear">2026-06-12 01:36Z</span>，约 406.5h
              （约 16.94 天）。06-16 备忘把这根死 feed 标在约 94.5h、把挤压周期
              ON HOLD；06-27 备忘带在约 358.5h、06-28 在约 382.5h；今天约 406.5h、
              仍死。{' '}
              <span className="dn-em">
                SM net 作为当前读不可计算，SM cut fraction（|Δ| / prior_net）也
                无法成形——没有当前 SM net 可差分。本篇里任何仓位主张都明确是历史、
                不是实时。
              </span>
            </p>

            <p>
              为完整起见，<em>最后可得</em>的盘面读——全部钉在 06-17 06:43Z 冻结、
              现 281.4h 过期，且与 06-19 → 06-28 备忘逐字节相同因为是同一根冻结
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
                把这个读成一根近十七天的旧指纹、不是信号：一本双向 funding 本子、
                OI 在泄、retail 在弱势第一腿里加多。没有一项能搬到 00:06Z 快照——
                而且它早于整段 06-18 → 06-22 守地板序列、06-23 → 06-28 那段五次
                收破地板并跌穿 $60k 的腿、06-26 的上收、以及 06-27 → 06-28 的下收，
                所以它对仓位怎么吸收破位、或者最新这根下收是派发还是 churn，什么都
                说不出。交易台把仓位维度当作未知、把这根 06-28 下收当作仓位未确认。
              </span>
            </p>

            <h2 className="dn-sec">
              结构 <span className="dn-roman">II · 价格/MTF 新 · 多周期共振偏空 1 多 / 9 空 / 0 中性（从 1/8/1 恶化一档——30m 踏出中性）· 1d &amp; 1w 水下死叉双立（1d 2 bar、DIF −2,317.0；1w 1 bar、DIF −5,878.7）· 薄的建设性集合是 15m/30m 水下金叉（2 bar / 刚印）加 4h 水下金叉 13 bar 与 1M TD8 buy 再一根收 · regime 改善到 6/9 反转（均值回归、JT&lt;0）· 现货在每一根 MA 下方、整条阶梯头顶，200W 地板 $62,443 在第五根日收（06-28 $59,550）上破、现货下方 −5.09%</span>
            </h2>

            <p>
              <span className="dn-signal">
                MTF 图是新的、头条恶化一档（1 多 / 9 空 / 0 中性、30m 框踏出中性
                翻成空计数）但 regime 分类器改善到建设性那侧、到 6/9 反转 / 均值
                回归——唯一的建设性引擎印是 15m / 30m 水下金叉、一根 13 bar 的 4h
                水下金叉、和一根再一根收的 1M TD8 buy
              </span>——这是连同盘口本子、交易台今天还能信的一维。00:01Z 扫描标{' '}
              <span className="dn-tag bear">1 多 / 9 空 / 0 中性、横跨 10 框</span>，
              净读 <em>多周期共振偏空 · 卖反弹</em>——从 06-28 扫描的 1/8/1 恶化、因
              30m 框退回空计数。regime 行读{' '}
              <span className="dn-tag bull">6/9 反转 / 均值回归 regime（JT&lt;0）——
              倾向反弹</span>（06-28 是 5/9 反转），所以分类器守住倾向反弹的偏向并
              收紧、即便框计数恶化了——而引擎仍没有确认的建设性触发可据以行动。唯一
              一根多框是{' '}
              <span className="dn-tag">1M（云上）</span>；建设性交叉是{' '}
              <span className="dn-tag">15m / 30m 水下金叉（2 bar / 刚印）</span> 与一根{' '}
              <span className="dn-tag">4h 水下金叉 13 bar</span>（都是未确认的水下
              试探、不是 TD buy），没有活的 TD9 buy。下行侧仍重：{' '}
              <span className="dn-tag bear">8h、12h、1d 和 1w 带水下死叉</span>，其中{' '}
              <span className="dn-tag bear">1d 水下死叉现 2 bar（DIF −2,317.0）</span>
              压在{' '}
              <span className="dn-tag bear">1w 水下死叉（1 bar、DIF −5,878.7）</span>
              下面，而 1h 带一根{' '}
              <span className="dn-tag bear">水下死叉 11 bar</span>。云：15m→1w 全在
              云下、1M 云上；只有 1M 守一根多框。薄的建设性集合是{' '}
              <span className="dn-tag bull">15m / 30m / 4h 水下金叉、加 1M TD8 buy
              再一根收，和 15m / 30m / 1h 的 bottom（看涨反转）背离</span>。{' '}
              <span className="dn-em">
                直读：框栈恶化一档、但 regime 分类器改善到均值回归。高框全在死叉、
                一根 2 bar 的 1d 死叉压在 1 bar 的 1w 死叉下面，引擎仅有的建设性印
                是未确认的水下金叉和一根再一根收的 1M TD8 buy。没有确认的引擎印去做多
                这根反弹；主导盘面读是那对 1d/1w 死叉、缺席的 MA 支撑、和第五根收破
                200W 地板——只被 bottom 背离与倾向反弹的 regime 软化。这是一根偏空的
                趋势框、其均值回归设置没有确认触发。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">59,475</td><td className="num bear">47.7</td><td className="bull">金叉（水下）2b</td><td className="bear">云下 ↑59.8k 37b</td><td>Sell 4</td><td>BEAR hid · BULL reg（bottom）</td></tr>
                <tr><td>30m</td><td className="num">59,476</td><td className="num bear">43.6</td><td className="bull">金叉（水下）刚印</td><td className="bear">云下 ↑60.2k 22b</td><td>Sell 2</td><td>BULL reg（bottom）</td></tr>
                <tr><td>1h</td><td className="num">59,460</td><td className="num bear">41.7</td><td className="bear">死叉（水下）11b</td><td className="bear">云下 ↑59.6k 3b</td><td>Buy 1</td><td>BEAR + BULL reg（top &amp; bottom）· BEAR + BULL hid</td></tr>
                <tr><td>4h</td><td className="num">59,462</td><td className="num bear">39.7</td><td className="bull">金叉（水下）13b</td><td className="bear">云下 ↑61.7k 35b</td><td>Buy 4</td><td>BEAR hid</td></tr>
                <tr><td>8h</td><td className="num">59,462</td><td className="num bear">36.6</td><td className="bear">死叉（水下）18b</td><td className="bear">云下 ↑63.3k 17b</td><td>Buy 3</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">59,462</td><td className="num bear">33.8</td><td className="bear">死叉（水下）11b</td><td className="bear">云下 ↑64.1k 75b</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">59,447</td><td className="num bear">30.5</td><td className="bear">死叉（水下）2b</td><td className="bear">云下 ↑72.2k 28b</td><td>Buy 7</td><td>BEAR hid</td></tr>
                <tr><td>3d</td><td className="num">59,468</td><td className="num bear">32.9</td><td className="neut">—</td><td className="bear">云下 ↑72.5k 9b</td><td>Buy 3</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">59,468</td><td className="num bear">32.8</td><td className="bear">死叉（水下）1b</td><td className="bear">云下 ↑99.5k 22b</td><td>Buy 7</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">59,482</td><td className="num">41.1</td><td className="neut">—（DIF 水上）</td><td className="bull">云上 ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 00:01Z scan（08:01 Beijing；滚动 latest
                    文件、逐字存档于 /opt/desk-note/snapshots/2026-06-29-0006/）。净读{' '}
                    <em>多周期共振偏空 · 卖反弹（1 多 / 9 空 / 0 中性）</em>；regime{' '}
                    <em>6/9 反转 / 均值回归 regime（JT&lt;0、倾向反弹）</em>；活跃背离{' '}
                    <em>反转：top div 1h、bottom div 15m / 30m / 1h；隐藏（延续）：
                    BEAR hid 15m / 1h / 4h / 1d、BULL hid 1h</em>。头部告警：{' '}
                    <em>1d 水下死叉（2 bar 前、DIF −2,317.0）</em>、{' '}
                    <em>1w 水下死叉（1 bar 前、DIF −5,878.7）</em>、{' '}
                    <em>15m 水下金叉（2 bar 前）</em>、{' '}
                    <em>30m 水下金叉（刚印）</em>、{' '}
                    <em>1M TD8 Buy——再一根收</em>。扫描现货 $59,465、24h −0.92%、
                    24h H/L $60,543 / $58,888、qVol $6.21B。收盘为未收盘 K 线；
                    每个值在各周期收盘前都按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵是和 06-28 一样的深头顶墙、现货从 200W 地板又滑下一截，所以
              谱系第五根切{' '}
              <span className="dn-tag bear">矩阵上每一根线都在头顶——没有正偏移、
              脚下没 MA</span>。$59,267 坐在{' '}
              <span className="dn-tag bear">全历史 W-SMA200 200W 地板 $62,443 下方
              −5.09%</span>——最近的线、仍头顶（06-28 是 −3.90%）——并{' '}
              <span className="dn-tag bear">在 D-EMA20 $62,722 下方 −5.51%</span> 与{' '}
              <span className="dn-tag bear">D-SMA20 $62,777 下方 −5.59%</span>、
              再上两根。其上，周期 proxy{' '}
              <span className="dn-tag bear">D-EMA50 $66,907（−11.42%）</span>、然后{' '}
              <span className="dn-tag bear">W-EMA200 $67,583（−12.30%、种子）</span>、
              然后 <span className="dn-tag bear">D-SMA50 $68,978（−14.08%）</span>、
              然后一条密集头顶带：<span className="dn-tag bear">D-EMA100 $70,542（−15.98%）</span>、{' '}
              <span className="dn-tag bear">D-SMA150 $70,797（−16.29%）</span>、{' '}
              <span className="dn-tag bear">D-SMA100 $71,431（−17.03%）</span>、{' '}
              <span className="dn-tag bear">W-SMA20 $71,505（−17.11%）</span>、{' '}
              <span className="dn-tag bear">D-EMA150 $73,647（−19.53%）</span>、{' '}
              <span className="dn-tag bear">W-EMA150 $74,214（−20.14%）</span>、{' '}
              <span className="dn-tag bear">W-EMA20 $74,518（−20.47%）</span>、{' '}
              <span className="dn-tag bear">W-SMA150 $75,453（−21.45%）</span>、{' '}
              <span className="dn-tag bear">D-SMA200 $75,516（−21.52%）</span>、{' '}
              <span className="dn-tag bear">D-EMA200 $76,505（−22.53%）</span>。更高
              更远、已弃用：W-EMA100 $80,968（−26.80%）、W-EMA50 $82,661（−28.30%）、
              W-SMA100 $88,526（−33.05%）、W-SMA50 $90,988（−34.86%）。{' '}
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-06-29 00:06Z（close $59,267.30）；偏移
                按同一根 last-bar close 重算、那是实时盘面冻结期内可得的最新现货。
                显示的 MA 水位按 $ 取整、偏移用精确序列值算。显示的周线阶梯用 2023→
                子集（182 根周 bar），所以那里 W-SMA200 不可计算、W-EMA200 $67,583
                从可用历史 seed；200W 地板 $62,443 单独从全历史 glob 重算（355 根
                走完的周 W-MON bar、排除未收盘的 06-29 周）。日收：06-20 $64,270、
                06-21 $63,287、06-22 $63,990（= 22JUN 周收）、06-23 $62,697、06-24
                $61,051（首根收破地板）、06-25 $59,772（第二根收破、−4.28%）、06-26
                $60,072（第三根收破、首根上收、−3.80%）、06-27 $60,000（第四根收破、
                一根下收、−3.91%）、06-28 $59,550（第五根收破、一根下收 −$450、下方
                −4.63%）、06-29（未收盘、5 分钟 bar）$59,267——地板破位已延到第五根
                连续日收，且最近 24h 1 分钟收里全部 1,441 根印在地板下方。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子翻回净空 γ aggregate −20.1M（06-28 是 +5.9M、06-27 是 −20.9M）——本子现在又<em>放大</em>下一根移动 · 一根集中下行放大器在 3JUL26 4.3 DTE −9.63M <em>重现</em>（比 06-28 的 −6.08M 更深），前端是 29JUN26 0.3 DTE −1.29M（今日约 08:00Z 结算）· flip 从 $60,272 松到 $60,119、但现货跌得更快、现货现在在它下方 −1.42%（前 −0.43%）· IV 跳到 48.0%</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子逆转了它 06-28 的去放大、并越回那条线：aggregate γ 从
                +5.9M 净多翻回 −20.1M 净空 γ，所以本子又放大而非阻尼下一根移动，
                flip 重夺随现货跌穿松下的 flip 扩到 −1.42%
              </span>。aggregate GEX 是{' '}
              <span className="dn-tag bear">−20.1M / 1%</span>（06-28 是 +5.9M、
              06-27 是 −20.9M、06-26 是 −87.5M）；06-28 那根净多 γ 喘息只持续了一篇
              ——本子已翻回净空 γ。0-γ flip 松{' '}
              <span className="dn-tag">$60,272 → $60,119（−$153）</span>，但现货
              $59,267 跌得更快，所以现货坐在{' '}
              <span className="dn-tag bear">flip 下方 −1.42%</span>、现货口径
              （59,267.30 / 60,119 − 1 = −1.416%）；GEX 文件自己的{' '}
              &ldquo;dist to flip&rdquo; 按它的 Deribit idx $59,677（比 parquet
              现货高 $410）读 −0.7%、即 <span className="dn-tag bear">−0.74%</span>
              （59,677 / 60,119 − 1 = −0.735%）——两参考都在 flip 下方、且到 flip
              的缺口从 06-28 的 −0.43% <em>扩大</em>。墙图在现货附近 put-heavy：{' '}
              <span className="dn-tag bear">$60k −13.33M</span>（最重墙、现在 just 在
              现货<em>上方</em>作簇顶）、{' '}
              <span className="dn-tag bear">$58k −12.94M</span>、{' '}
              <span className="dn-tag bear">$56k −10.80M</span>、{' '}
              <span className="dn-tag bear">$55k −10.26M</span>、{' '}
              <span className="dn-tag bear">$59k −9.32M</span>（just 在现货下方）、{' '}
              <span className="dn-tag bear">$50k −7.14M</span>、{' '}
              <span className="dn-tag bull">$64k +6.71M</span>、{' '}
              <span className="dn-tag bull">$80k +6.11M</span>、{' '}
              <span className="dn-tag bull">$63k +5.74M</span>、{' '}
              <span className="dn-tag bull">$65k +5.27M</span>。{' '}
              <span className="dn-em">
                列出的 $55k–$60k 主墙合计 −56.65M、坐在现货处及下方——现货 $59,267
                just 在 $60k −13.33M 墙下方、那墙现在是簇顶，$59k −9.32M 墙直接在下、
                下面是 $58k −12.94M / $56k −10.80M / $55k −10.26M 一架。关键地，
                aggregate 现在又是净空 γ，所以本子放大下一根移动而非阻尼它——对
                06-28 的 +5.9M 多 γ 本子是个逆转；正墙（$63k、$64k、$65k、$80k）坐在
                头顶作 flip 上方第一道真阻力架、对现货下方不提供支撑；现货下方是一块
                below-spot put 墙架——$59k −9.32M 直接在下，$58k −12.94M / $56k
                −10.80M / $55k −10.26M / $50k −7.14M 作更低磁铁——没有一个是证明过的
                地板。
              </span>{' '}
              按 expiry 集中度<em>重现</em>：前端是小的 29JUN26{' '}
              <span className="dn-tag bear">0.3 DTE 在 −1.29M（今日约 08:00Z 结算）</span>，
              然后 30JUN26 1.3 −0.29M、1JUL26 2.3{' '}
              <span className="dn-tag bull">+1.75M</span>、2JUL26 3.3{' '}
              <span className="dn-tag bull">+0.49M</span>、3JUL26 4.3{' '}
              <span className="dn-tag bear">−9.63M</span>（最重的负 expiry、一根比
              06-28 的 −6.08M 更深的<em>重现</em>下行放大器）、10JUL26 11.3{' '}
              <span className="dn-tag bear">−2.49M</span>、17JUL26 18.3{' '}
              <span className="dn-tag bull">+3.05M</span>、31JUL26 32.3 −1.21M、
              28AUG26 60.3 +0.05M、25SEP26 88.3{' '}
              <span className="dn-tag bear">−5.73M</span>、25DEC26 179.3 −0.58M、
              26MAR27 270.3 +0.30M、25JUN27 361.3 +0.40M。28JUN26 +4.33M 前端昨天
              约 08:00Z 结算；3JUL26 −9.63M 那块是最重的前向放大器——06-28 备忘称
              已彻底清掉的集中下行放大器风险回来了。（现货参考的 aggregate −20.1M
              是现货处的 net GEX；by-expiry 行是独立分解、不必加总到它。）
            </p>

            <p>
              IV 中位数横跨 916 合约是{' '}
              <span className="dn-tag">48.0%</span>（从 06-28 的 44.3% / 930 合约跳上、
              链又薄了 14 张）对 30D close-to-close RV{' '}
              <span className="dn-tag">43.07%</span>——链级 richness{' '}
              <span className="dn-tag">约 +4.93pt</span>、对已实现（06-28 是约 +0.93pt
              ——本子翻回净空 γ 时链显著变贵），RV 仍高（今天 43.07% vs 06-28 的
              43.37% 与 05-31 的 24.91%——06-08 → 06-18 下腿启动的高 vol regime 续）。
              是 916 合约的链中位数、<span className="dn-em">不是</span>可交易价差；
              expiry-/strike-level vega、skew 与期限结构仍未载入；vol 读法保持
              framework only。RV 方法：30D close-to-close、logret.std × √365 × 100、
              用最末 30 根日 log return（= 连续 31 根日 close）、锚自 parquet 最末
              bar 2026-06-29 00:06Z；底层 close 窗区间 $59,267 – $73,857。P/C 比率
              0.58、Call OI 213,392 / Put OI 123,450 BTC。
            </p>

            <h2 className="dn-sec">
              宏观 <span className="dn-roman">IV · 周日晚渲染（约 1.85h）、多数 Tier-1 日频对 06-28 逐字节相同——10Y 4.40%（距闸 13bp）、TIPS 2.19% EXTREME RISK-OFF、HY OAS 2.78%（仍 AT 它的 2.78% 闸——0bp 触发）、MOVE 66.8（松）· FX 腿基本走平：DXY 101.37（+0.01）与 USD/JPY 161.68（−0.12）、都仍硬 · regime 仍 NORMAL、对 NQ 的落后扩到 −3.53pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观面板渲染是一根周日晚渲染（约 1.85h 滞后）、多数 Tier-1 日频系列
                对 06-28 逐字节相同，读法仍 risk-off——利率守、信用仍正好坐在它的
                re-grow 闸上、美元守 EXTREME 而 FX 腿本次基本走平
              </span>。面板渲染 2026-06-28 22:15Z、比快照早约 1.85h。US 10Y nominal{' '}
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
              <span className="dn-tag">66.8</span>——来源标 −0.31 在它自己的 1d
              delta、仍&ldquo;松。&rdquo;美元守它的 EXTREME 水位、FX 腿本次基本
              走平：DXY{' '}
              <span className="dn-tag bear">101.37（+0.01 当日）</span>、regime z{' '}
              <span className="dn-tag bear">+2.73</span>、对 06-28 的 101.36 微升。
              Fed 净流动性{' '}
              <span className="dn-tag bear">$5.812T（−0.037T）</span>、regime z{' '}
              <span className="dn-tag bear">−1.16</span>——本次无新周度印。USD/JPY{' '}
              <span className="dn-tag">161.68（−0.12 当日）</span>、regime z +1.53
              ——对 06-28 不变；US-JP 10Y 利差{' '}
              <span className="dn-tag">1.75%（−1.0bp 带入）</span> 窄；USD/CNY{' '}
              <span className="dn-tag">6.7975（+0.01）</span>；WTI{' '}
              <span className="dn-tag stale">$78.9（现陈旧 6d）</span>。{' '}
              <span className="dn-em">
                净：宏观背景仍 risk-off 且在一根周日晚渲染上基本不动——利率与信用腿
                从 06-28 逐字节带入（10Y 4.40%、TIPS 2.19%、OAS 2.78%），FX 腿几乎
                没动。两根 re-grow 腿不变：信用腿仍 ON 2.78% 闸（0bp）而利率腿坐在
                13bp 外——信用闸是活的那根。reclaim-long 利率筛（10Y &lt; 4.55%）在
                4.40% 仍 TRUE、有余地。宏观读法仍是强化而非反驳 200W 地板破位——一个
                广义 risk-off 背景、信用闸在线上——且本次既不恶化也不缓和。
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
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.516</td><td className="num">−0.00</td><td className="num">−0.07</td><td className="stale">周度 · neutral · 现陈旧 9d</td></tr>
                <tr><td>MOVE 债波</td><td className="num">66.8</td><td className="num bull">−0.31</td><td className="num bull">−0.79</td><td className="bull">松</td></tr>
                <tr><td>DXY</td><td className="num">101.37</td><td className="num bear">+0.01</td><td className="num bear">+2.73</td><td className="bear">EXTREME RISK-OFF · FX 走平（前 101.36）</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.812T</td><td className="num bear">−0.037T</td><td className="num bear">−1.16</td><td className="bear">排空 · 无新周度印</td></tr>
                <tr><td>USD/JPY</td><td className="num">161.68</td><td className="num bull">−0.12</td><td className="num bear">+1.53</td><td className="bear">硬 · 对 06-28 不变</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">1.75%</td><td className="num">−1.0bp</td><td className="num bull">−1.25</td><td className="neut">窄</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7975</td><td className="num">+0.01</td><td className="num bull">−1.37</td><td className="neut">松</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">+13.5bp（月度）</td><td className="num bear">+2.56</td><td className="stale">月度 · 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、168 rows、汇总 00:01Z——{' '}
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。非对角线
              均值 <span className="dn-tag">|r| 0.283</span>——对 06-28 的 0.285
              基本不动、仍 <span className="dn-tag">在 0.25 idiosyncratic 阈值
              上方</span>，所以 regime 行守在{' '}
              <span className="dn-signal">NORMAL——BTC 仍耦合在广义跨资产复合体上</span>，
              其顶部对齐是股票 / 工业金属簇：NQ{' '}
              <span className="dn-tag">+0.747</span>、NVDA{' '}
              <span className="dn-tag">+0.742</span>、SP500{' '}
              <span className="dn-tag">+0.659</span>、TSLA{' '}
              <span className="dn-tag">+0.537</span>、JP225{' '}
              <span className="dn-tag">+0.536</span>、COPPER{' '}
              <span className="dn-tag">+0.496</span>、URNM{' '}
              <span className="dn-tag">+0.448</span>、PALL{' '}
              <span className="dn-tag">+0.380</span>、META{' '}
              <span className="dn-tag">+0.362</span>、AAPL{' '}
              <span className="dn-tag">+0.346</span>，CL{' '}
              <span className="dn-tag">−0.114</span> / BRENT{' '}
              <span className="dn-tag">−0.122</span> 反向、GOLD 一根弱{' '}
              <span className="dn-tag">+0.212</span>。7d 表现仍是广义风险复合体红、
              BTC 对 NQ 的落后比 06-28 更宽、但<em>不是</em>复合体里最差的：{' '}
              <span className="dn-tag bear">BTC −6.90%</span>、NQ{' '}
              <span className="dn-tag bear">−3.37%</span>、SP500{' '}
              <span className="dn-tag bear">−1.43%</span>、JP225{' '}
              <span className="dn-tag bear">−3.94%</span>、NVDA{' '}
              <span className="dn-tag bear">−6.75%</span>、META{' '}
              <span className="dn-tag bear">−3.68%</span>、AAPL{' '}
              <span className="dn-tag bear">−3.96%</span>、MSFT{' '}
              <span className="dn-tag bear">−0.32%</span>、GOOGL{' '}
              <span className="dn-tag bear">−5.86%</span>、AMZN{' '}
              <span className="dn-tag bear">−3.47%</span>、TSLA{' '}
              <span className="dn-tag bear">−3.51%</span>；金属更低（GOLD{' '}
              <span className="dn-tag bear">−3.35%</span>、SILVER{' '}
              <span className="dn-tag bear">−11.66%</span>、PLAT{' '}
              <span className="dn-tag bear">−3.97%</span>、PALL{' '}
              <span className="dn-tag bear">−5.62%</span>、COPPER{' '}
              <span className="dn-tag bear">−3.80%</span>）；原油深下、NGAS 较软（CL{' '}
              <span className="dn-tag bear">−9.52%</span>、BRENT{' '}
              <span className="dn-tag bear">−9.30%</span>、NGAS{' '}
              <span className="dn-tag bear">−0.72%</span>）。{' '}
              <span className="dn-em">
                BTC 的 7d 回报 −6.90% vs NQ −3.37% 是 −3.53pt 的落后（06-28 是
                −2.57pt）——对 NQ 的缺口又扩宽、因为 BTC 跑输了股票。但 BTC
                <em>不是</em>复合体里最深的落后者：SILVER −11.66%、CL −9.52%、BRENT
                −9.30% 与 URNM −7.78% 7d 都跌得更多。整个风险复合体 7d 仍红（NQ
                −3.37%、NVDA −6.75%、Mag7 多在 −3% 到 −7%、金属下、原油深下、NGAS
                较软），所以 BTC 的下跌仍嵌在一个广义 risk-off 移动里、而不是作为
                idiosyncratic 突出——这正是让相关性 regime 守在 NORMAL 的东西。第五根
                收破 200W 地板仍与一个 risk-off 宏观盘面同时（10Y 紧、信用在它的闸
                上、DXY EXTREME），所以破位仍既是 risk-off-盘面事件、也是 BTC 自有
                事件——BTC 落后 NQ、但有几个名字（SILVER、CL、BRENT、URNM）跌得更狠。
              </span>{' '}
              JGB 月度 2.65% 带一个 EXTREME RISK-OFF 月度标——不依赖。
            </p>

            <h2 className="dn-sec">
              交易本子 <span className="dn-roman">V · 本子 FLAT · 200W 地板——日收破位延到第五根连续收（06-28 $59,550 &lt; $62,443、一根下收 −$450），周收升级今天结算（06-29 周一；未收盘读 −5.09% 下方）· scout 仍 stood down（价格块扩到 flip 下方 −1.42%、本子翻回净空 γ，盘面失明、无 MA 支撑、无确认引擎触发）· 宏观尾信用闸在线上（OAS 2.78%、0bp）· 挤压周期 ON HOLD（SM 死约 16.94 天）</span>
            </h2>

            <p>
              <span className="dn-signal">
                本子 flat、并保持 flat——dealer 本子翻回净空 γ、flip 重夺扩到
                −1.42%，regime 守住均值回归，但地板破位延到第五根日收、约束仍是数据
                完整性——而那一根解掉一切的周收今天结算
              </span>。谱系的结构性正本次在日收口径上仍破、且性质硬往下走：06-28 日
              bar 收 $59,550、在 $62,443 地板下方 −4.63%、是连续第五根收在线下、一根
              下收（对 06-27 $60,000 −$450）。按框架那是五根收上确认的预警、还不是
              完整破位——破位是一根持续的周收在下方，未收盘的 06-29 周读 $59,267
              （下方 −5.09%）、06-29 落在周一，所以升级不再待定：它<em>今天</em>
              结算。22JUN 周收 $63,990（上方 +2.48%）仍是最后一根已决周守，所以 200W
              重夺论还没被证伪——但它今天收盘解决。scout 仍不能取、且它的价格块恶化：
              现货现在在 flip 下方 −1.42%（06-28 是 −0.43%）、dealer 本子翻回 −20.1M
              净空 γ 且一根下行放大器重现，现货仍在 flip 下方、脚下没 MA，仓位腿（SM
              空头泄、funding 姿态、回补流）都需要一条实时盘面、而连续第十三天没有，
              引擎也没确认的建设性触发——只有未确认的水下金叉和一根再一根收的 1M TD8
              buy、对着 1d/1w 双死叉。也没有新空：在一条失明盘面上、引擎带 bottom
              背离与倾向反弹的 regime、且前端 expiry 今天就结算的情况下，追第五根收破
              地板是糟糕的入场、即便本子翻回了净空 γ。今天的交易本子是：无空、无
              scout、无新对冲——修盘面 AND 盯今天结算的 06-29 周收对地板，再重新武装。
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 主仓 · 200W 周期地板盯位——日收破位延到第五根收：06-28 日收 $59,550 settle 在 $62,443 地板下方 −4.63%（连续第五根收破、一根下收 −$450、对 06-27 $60,000）；周收升级今天结算（06-29 周一；未收盘读 $59,267、下方 −5.09%）；22JUN 周收 $63,990 上方 +2.48% 仍作最后一根已决周守</span>
              <div className="dn-trade-name">
                200W 周期地板盯位——日收破位延到第五根连续收（又一根下收），周收升级今天结算：地板 $62,443 = 全历史 W-SMA200（355 根走完周 bar、对 06-25 → 06-28 钉不变）、06-24 日收 $61,051（下方 −2.23%）、06-25 $59,772（下方 −4.28%）、06-26 $60,072（下方 −3.80%）、06-27 $60,000（下方 −3.91%）、06-28 $59,550（下方 −4.63%、下收）、未收盘 06-29 周 $59,267（下方 −5.09%）、最近 24h 全部 1,441 根 1 分钟收在地板下方
              </div>
              <div className="dn-thesis">
                06-28 备忘记下第四根连续日收破地板、06-26 上抬被交还。这条腿继续
                往下：06-28 日 bar 收{' '}
                <span className="dn-tag bear">$59,550、在 $62,443 地板下方 −4.63%</span>、
                连续第五根收在线下、一根下收（对 06-27 $60,000 −$450）。按框架一根
                盘中插针不是破位、一根日收在下方是预警——现在连续五根收确认——一根
                持续周收在下方才是破地板并证伪 06-15 重夺论的升级。22JUN 周收{' '}
                <span className="dn-tag bull">$63,990、上方 +2.48%</span> 仍作最后
                一根已决周守，所以论点还没死，但未收盘的 06-29 周读{' '}
                <span className="dn-tag bear">$59,267、下方 −5.09%</span>、而 06-29
                是周一——所以解掉论点的升级<em>今天</em>结算。{' '}
                <span className="dn-em">谱系的结构性正在日收口径上连续五根破；现货
                脚下没 MA，06-29 周收——今天结算——是解掉论点的唯一一根水位。</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W 地板</span><span className="dn-lvl-v">$62,443 = 全历史 W-SMA200、本次从 2019→ parquet glob 重算（355 根走完周 W-MON bar、排除未收盘 06-29 周）；对 06-25 → 06-28 钉不变（慢周 SMA、约 $250/周）· weekly_200sma.json 缺、所以比率百分位 / last-event 留未溯源、不杜撰</span></div>
                <div><span className="dn-lvl-k">日收破位——延到第五根收</span><span className="dn-lvl-v bear">06-24 日收 $61,051（下方 −2.23%）、06-25 $59,772（下方 −4.28%）、06-26 $60,072（下方 −3.80%）、06-27 $60,000（下方 −3.91%）与 06-28 $59,550（下方 −4.63%、一根下收 −$450）——连续五根收在线下；最近 24h 全部 1,441 根 1 分钟收印在地板下方、未收盘 06-29 bar 守在下方 −5.09%</span></div>
                <div><span className="dn-lvl-k">最后一根已决周守（仍站）</span><span className="dn-lvl-v bull">22JUN 周收 $63,990 上方 +2.48% 仍站——200W 重夺论还没被证伪、但离死只剩一根周收（今天）</span></div>
                <div><span className="dn-lvl-k">升级（下一根周收）——今天结算</span><span className="dn-lvl-v bear">一根持续周收 &lt; $62,443 破 200W 地板并证伪 06-15 重夺论——未收盘 06-29 周读 $59,267（下方 −5.09%）、06-29 是周一；这是 06-29 settle 上解掉论点的那根水位、在今天收盘</span></div>
                <div><span className="dn-lvl-k">重夺侧（现在更远）</span><span className="dn-lvl-v bear">现货在 flip $60,119 下方 −1.42%、在 200W 地板 $62,443 下方 −5.09%、在 D-EMA20 $62,722 下方 −5.51%——脚下没 MA；flip 坐在地板下方，所以一根重夺是日收回到 flip $60,119 上方再地板 $62,443 再 D-EMA20 $62,722——失明盘面上不是 scout 触发（见 scout）</span></div>
              </div>
              <div className="dn-gating">
                <b>框架、不是一笔交易。</b>地板盯位是唯一一根承重的实时水位、其他
                都陈旧或 framework only。日收破位延到第五根连续收、周收升级今天
                结算——这根盯位不取任何仓位：它设确认的预警水位（五根日收在下方）、
                今天结算的升级（06-29 周收 &lt; $62,443）、和重夺阶梯（flip
                $60,119 → 地板 $62,443 → D-EMA20 $62,722——注意 flip 坐在地板下方、
                所以第一步重夺是 flip 再地板再 D-EMA20），交易台不会预先 position
                空进一根引擎在它上面带 bottom 背离的破位、也不会做多一根它在失明
                盘面上无法确认的重夺。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout · 仍 STOOD DOWN · 价格前条件扩大（现货在 flip 下方 −1.42%、vs 06-28 −0.43%）、本子翻回净空 γ，现货仍在 flip 下方、脚下没 MA + 盘面失明约 16.94 天 + 无确认引擎触发</span>
              <div className="dn-trade-name">
                回补反弹 scout——flip 重夺扩到 −1.42%、本子翻回净空 γ，scout 在失明盘面上、脚下没 MA、无确认引擎触发的情况下保持 stood down
              </div>
              <div className="dn-thesis">
                06-22 备忘看到 scout 价格前条件短暂印出（现货重夺 flip），06-23 →
                06-26 备忘看到它被交还并扩大，06-27 → 06-28 备忘看到它收窄到 −0.43%
                内。今晚它又扩大：现货现在{' '}
                <em>在 flip 下方 −1.42%</em> $60,119（它随现货又松 $153），仍在 200W
                地板下方 −5.09%、在 D-EMA20 下方、印在 $60k 下方——而脚下根本没有任何
                MA。所以 scout 被四点封住。(1) 价格前条件又扩回去——现货更深在 flip
                下方、且在地板与 D-EMA20 下方。(2) 仓位腿（SM 空头泄、funding 姿态、
                回补流）都需要一条实时盘面、而没有——交易台看不出 06-28 的下收是派发
                还是本子翻回净空 γ 时的薄双向 churn。(3) dealer 本子翻回 −20.1M 净空
                γ、一根下行放大器在 3JUL26 −9.63M 重现，拿走了 06-28 多 γ 本子提供的
                稳定。(4) 引擎没确认的建设性触发——只有未确认的水下金叉（15m / 30m /
                4h）和一根再一根收的 1M TD8 buy、对着一对 1d/1w 死叉。{' '}
                <span className="dn-em">一根 scout long、在一条仓位失明的盘面上、
                在 flip 与地板下方、脚下没 MA、无确认引擎印，不是一笔交易——唯一的
                建设性反面是 bottom 背离、倾向反弹的 regime、未确认的水下金叉、1M TD8
                buy、和仍站的最后周守，没有一样足以在没有盘面与确认引擎触发时 size
                进去。</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v bear">stood down · 无入场 · 价格前条件扩大（现货在 flip 下方 −1.42%、vs 06-28 −0.43%）且仍在它下方、且在地板下方、脚下没 MA——只在实时盘面恢复 AND 现货重夺 flip 再地板再 D-EMA20 后才重评估</span></div>
                <div><span className="dn-lvl-k">技术前条件</span><span className="dn-lvl-v bear">flip $60,119 / 地板 $62,443 / D-EMA20 $62,722 重夺（不真——现货在三者下方、脚下没 MA、flip 现在 −1.42% 远）AND 一根确认引擎印（不真——1 多 / 9 空 / 0 中性、1d/1w 双死叉、只有未确认水下金叉和一根再一根收的 1M TD8 buy；regime 守住均值回归）</span></div>
                <div><span className="dn-lvl-k">数据前条件</span><span className="dn-lvl-v bear">实时盘面恢复（当前 281.4h 冻）AND SM feed 活（当前死约 16.94 天）——两者都须先成立任何仓位腿才能读；这是约束块</span></div>
              </div>
              <div className="dn-gating">
                <b>硬规则：</b>没有一条活的仓位盘面就不 scout 入场。bottom 背离、
                倾向反弹的 regime、未确认的水下金叉、1M TD8 buy 和仍站的最后周守、
                在 SM / funding / flow 腿失明、现货仍在 flip 与地板下方脚下没 MA、
                引擎无确认触发时、都不触发 scout——交易台不会 size 进一根它看不见被
                回补的回补反弹。06-22 抬起、06-23 → 06-26 重关的价格块在 06-27 →
                06-28 收窄、本次又扩回去；操作块（盘面下）和引擎块（无确认触发）
                仍约束。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 宏观尾 · put-spread re-grow 闸——信用腿仍在线上：HY OAS 2.78% = 2.78% 闸（0bp 触发）、10Y 腿 13bp 外（4.40% vs 4.53% 闸）；两腿都没在收盘上触发但信用腿正好在触发位 · 周日晚渲染、Tier-1 逐字节带入</span>
              <div className="dn-trade-name">
                下行 put-spread——re-grow 闸未触发但信用腿仍在线上（OAS 2.78% = 闸、0bp）、利率腿 13bp 外；无对冲加（dealer 本子已在 3JUL26 −9.63M 重新长出自己的下行放大器）
              </div>
              <div className="dn-thesis">
                谱系带的宏观 re-grow 闸——HY OAS &gt; 2.78% OR 10Y &gt; 4.53% 作
                重新长出一根下行尾的条件——在收盘口径上保持未触发，本次信用腿仍正好
                在线上：HY OAS <em>2.78%</em>、等于闸（0bp 触发、需一根上方印才点火），
                而 10Y 守 4.40%、坐在 13bp 外。所以信用腿在触发位、利率腿又退远。
                reclaim-long 利率筛（10Y &lt; 4.55%）在 4.40% 仍 TRUE、有余地。宏观
                盘面仍是一股真的 risk-off 冲量（利率紧、信用在它的闸上、美元 EXTREME）
                但一根周日晚渲染、利率 / 信用腿没新 deltas；一根宏观尾不是内生兼
                risk-off 地板破位的对的工具，且 dealer 本子已在 3JUL26 −9.63M 重新
                长出自己的集中下行放大器、并翻回净空 γ，所以一根宏观尾现在会叠加到
                dealer 空 γ 上、而非一根更干净的独立对冲。
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
                失效 / R 在那里定）；注意 dealer strip 已重新长出一根集中下行放大器
                （3JUL26 −9.63M）、本子翻回净空 γ，所以任何这种尾会叠加到 dealer 空 γ
                上、而非一根更干净的独立对冲。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 挤压周期 hostile-2 观察名单 · 无日历先验 · ON HOLD——SM feed 死约 16.94 天、重堆签名本次读不出</span>
              <div className="dn-trade-name">
                挤压周期 hostile-2——ON HOLD（06-16 → 06-28 的延续）：SM feed 冻约 406.5h、重堆签名本次读不出
              </div>
              <div className="dn-thesis">
                挤压周期 / 重堆-hostile-2 框架把离散 SM 步（Δshort &gt; 0 + Δlong
                &lt; 0 同一分钟）读成延续签名；它的日历先验（BJ 13–15 节奏）在 05-31
                被证伪、此后作无先验观察名单跑。今天因最简单的理由无法评估：SM feed
                死了。long_btc / short_btc / net_btc 自 2026-06-12 01:36Z 起常数
                （约 406.5h），所以没有 SM deltas 可读。06-16 备忘把这根 ON HOLD 标
                在约 94.5h、06-27 在约 358.5h、06-28 在约 382.5h；它在约 406.5h 仍
                ON HOLD。{' '}
                <span className="dn-em">一根冻结的 feed 印不出签名；框架在 SM 数据
                恢复前是黑的。</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">框架状态</span><span className="dn-lvl-v bear">ON HOLD · SM feed 冻约 406.5h（自 2026-06-12 01:36Z）· 无 SM deltas 可计算</span></div>
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
              决策条件 <span className="dn-roman">VI · 实时盘面停摆仍是操作条件（第十三天）· 200W 地板日收破位延到第五根收（06-28 $59,550、一根下收）、周收升级今天结算（06-29；读 −5.09% 下方）· flip 重夺扩到 −1.42%、本子翻回 −20.1M 净空 γ、一根下行放大器重现（3JUL26 −9.63M）· scout stood down（无 MA 支撑、无确认引擎触发）· 宏观信用闸在线上（OAS 2.78%）、regime 仍 NORMAL</span>
            </h2>

            <p>
              06-28 那些条件里：实时盘面<em>没</em>回来——又死了约 24h、现在 281.4h
              冻、SM feed 在约 16.94 天；200W 地板日收破位<em>延</em>到第五根连续收
              （06-28 $59,550、下方 −4.63%）、一根下收，周收升级现在结算（06-29 今天
              结算；未收盘读 −5.09% 下方）；flip 重夺<em>扩大</em>（现货在 flip 下方
              −1.42% vs 06-28 −0.43%）因 flip 松到 $60,119；dealer 本子逆转它 06-28
              的去放大、从 +5.9M 翻回 −20.1M 净空 γ——它现在又放大下一根移动，一根
              集中下行放大器在 3JUL26 −9.63M 重现；scout 的价格块扩大、引擎只带未确认
              的水下金叉和一根再一根收的 1M TD8 buy；宏观 re-grow 闸保持未触发但信用腿
              仍正好在线上（OAS 2.78%）、利率腿坐在 13bp 外；相关性 regime 守 NORMAL
              因整个风险复合体仍红、BTC 对 NQ 的落后扩到 −3.53pt、虽然 BTC 不是最差的
              （SILVER/CL/BRENT/URNM 跌得更多）；挤压周期在一根更死的 feed 上保持 ON
              HOLD。主导条件没变：<em>交易台仓位失明、现在进入一根在连续五根日收上破的
              200W 地板、一根扩到 −1.42% 但脚下没 MA 支撑的重夺、和一根已翻回净空 γ 的
              本子——全部它无法确认</em>。今天的条件围绕持续的停摆、延伸的日收破位、
              结算的周收升级、和净空 γ 翻回重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>实时盘面恢复（主操作）</td><td className="bull">live_db.json 恢复写 2026-06-17 06:43Z 之外的新行 AND SM 三元组从 06-12 01:36Z 冻结上更新</td><td>完整重读 funding / OI / flow / SM；只有那时 scout 或挤压周期才能评估——也只有那时 06-28 下收才能确认是派发还是 churn；仓位维度现在已连续十一篇失明</td></tr>
                <tr><td>200W 地板——日收破位延伸（第五根收）</td><td className="bear">06-24 $61,051（−2.23%）、06-25 $59,772（−4.28%）、06-26 $60,072（−3.80%）、06-27 $60,000（−3.91%）与 06-28 $59,550（−4.63%、一根下收 −$450）——连续五根收在 $62,443 地板下方；最近 24h 1 分钟收全部 1,441 根在地板下方；未收盘 06-29 bar $59,267、下方 −5.09%</td><td>日收破位延到第五根连续收、一根下收——地板仍头顶、慢水位仍阻力；不取仓位</td></tr>
                <tr><td>200W 地板——升级（下一根周收）今天结算</td><td className="bear">一根持续周收 &lt; $62,443（W-SMA200 地板）破地板；22JUN 周收 $63,990 上方 +2.48% 仍站、未收盘 06-29 周读 $59,267 下方 −5.09%、06-29 是周一</td><td>06-29 周收是解掉 06-15 重夺论的唯一一根水位——一根收在下方升级破位并证伪论点；它<em>今天</em>结算；密切盯 06-29 settle</td></tr>
                <tr><td>flip 重夺（scout 价格前条件）——扩到 −1.42%</td><td className="bear">现货 $59,267 在 flip $60,119 下方 −1.42%、在地板 $62,443 下方 −5.09%、在 D-EMA20 $62,722 下方 −5.51%；脚下没 MA；flip 落在地板下方，所以重夺是日收回到 flip 再地板再 D-EMA20</td><td>价格前条件又扩回去——重夺 flip 再地板再 D-EMA20 是重开 scout 评估的第一步，但只在实时盘面也恢复时；失明盘面上、flip 下方、这根重夺是盯、不是交易</td></tr>
                <tr><td>dealer 本子——翻回净空 γ</td><td className="bear">aggregate GEX −20.1M（前 06-28 +5.9M、06-27 −20.9M）；前端是 29JUN26 0.3 DTE 在 −1.29M（今日约 08:00Z 结算）；最重负 expiry 是 3JUL26 4.3 在 −9.63M（一根重现的放大器）；现货坐在 $60k −13.33M 墙下方、下面是 $59k −9.32M 与 $58k −12.94M 墙</td><td>dealer 本子现在又<em>放大</em>下一根移动——集中下行风险在 3JUL26 −9.63M 重现；只盯、无空指令（引擎带 bottom 背离、前端 expiry 今天结算）</td></tr>
                <tr><td>宏观尾 re-grow（信用腿在线上）</td><td className="bear">HY OAS &gt; 2.78%（当前 2.78%、在线上、0bp——需一根上方印）OR 10Y &gt; 4.53%（13bp 触发）——周日晚渲染、利率/信用逐字节带入；FX 腿走平（DXY 101.37、USD/JPY 161.68）</td><td>本篇无对冲指令——一根闸触发（OAS 在线上）会在另起的未来备忘里重评估；注意本子已翻回净空 γ、放大器重现，所以任何这种尾会叠加到 dealer 空 γ 上</td></tr>
                <tr><td>reclaim-long 利率筛</td><td className="bull">10Y &lt; 4.55% 收——在 4.40% TRUE</td><td>独立筛真、有余地；需一根 BTC 内部转向 AND 一条实时盘面才能转成 scout long</td></tr>
                <tr><td>挤压周期 hostile-2（ON HOLD）</td><td className="stale">SM feed 死约 406.5h；无 deltas 可计算</td><td>暂停、不是转负——feed 恢复后首批新 SM deltas 重新武装</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是{' '}
              <span className="dn-signal">
                06-29 周收——<em>今天</em>结算——是否通过 settle 在 $62,443 200W
                地板下方确认破位（日收破位现在已延到五根连续收：06-24 $61,051、
                06-25 $59,772、06-26 $60,072、06-27 $60,000、06-28 $59,550，未收盘
                06-29 周读 −5.09% 下方），还是现货能在 06-29 settle 前抢一根日收回到
                地板上方、让 06-15 重夺论活着；建设性一侧，一根日收回到 flip $60,119
                （现在 −1.42% 远）再地板 $62,443 再 D-EMA20 $62,722——交易台在失明
                盘面上仍无法 scout——会重开这个 case
              </span>。06-28 去放大的 dealer 本子已逆转并彻底翻回（aggregate +5.9M →
              −20.1M 净空 γ、一根下行放大器在 3JUL26 −9.63M 重现，现货从 flip 下方
              −0.43% 到 −1.42%），所以本子现在又放大下一根移动；结构性正——200W 地板
              ——在日收口径上连续五根收破、今天结算它的周收升级，交易台仍读不到那条能
              说出下收是派发还是 churn 的盘面。在盘面恢复前本篇按写好的跑：本子 flat、
              scout 的价格块扩大且引擎只带未确认的水下金叉和一根再一根收的 1M TD8 buy、
              宏观尾信用闸在线上（OAS 2.78%）、挤压周期暂停、200W 地板盯位是唯一一根
              活水位——现在是一根在五根日收上破、周收升级今天结算的地板。价格丢了 $60k
              钉、MTF 头条恶化一档，但 regime 守住均值回归、引擎带 bottom 背离；宏观
              仍 risk-off（利率紧、信用在它的闸上、美元 EXTREME）、一根周日晚渲染、
              相关性 regime 守 NORMAL 因整个复合体仍红、BTC 落后 NQ 但不是最差
              （SILVER/CL/BRENT/URNM 跌得更多），所以破位仍既是 risk-off-盘面事件、
              也是 BTC 自有事件——而 dealer 结构又转放大。下一个 24h 的对读是{' '}
              <em>地板-在五根日收上破、升级今天结算——尊重延伸的破位，现在它今天结算、
              本子已翻回空 γ 时盯 06-29 周收对地板，读仓位前先修盘面，且不要在失明
              盘面上 scout 一根已扩到 −1.42% 的重夺</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2（已过 codex 敌对式审计 · findings 记于 audits/2026-06-29-desk-note.md）
            </span>
            <b>状态：</b>这是 <b>v2</b> 篇——<b>已过 codex 敌对式审计</b>。STAGE B 跑了
            一根 codex 敌对式跨模型审计（判决 PASS-WITH-NOTES——0 CRITICAL、0 MAJOR、
            1 MINOR），并带一根补充的 ask-deepseek 数值二审（提了 1 MAJOR、3 MINOR）；
            完整记录在 <code>audits/2026-06-29-desk-note.md</code>。STAGE C 对每条
            finding 用重算对钉好的快照（<code>/opt/desk-note/snapshots/2026-06-29-0006/</code>）
            裁定，然后全文应用修正、跑 grep-closure 到零残留，再升 v1 → v2。{' '}
            <b>DN-2026-06-29-001（MINOR、codex——MTF 活跃背离 badge 漏标）：</b>搜的
            pattern <code>BULL reg (bottom)</code>、<code>BEAR + BULL reg</code>、MTF 行
            badge 对绑定源{' '}
            <code>/opt/desk-note/snapshots/2026-06-29-0006/mtf_div_latest.html</code>
            （15m 行 BEAR hid + BULL reg；1h 行 BEAR hid + BEAR reg + BULL hid + BULL
            reg）。修前 2 行少报（15m、1h）。动作：把全部活跃背离 badge 镜回 15m 与 1h
            行（15m → BEAR hid · BULL reg；1h → BEAR + BULL reg · BEAR + BULL hid）、
            并把表注扩成同时列反转 AND 隐藏背离。修后 0 行少报。<b>RESOLVED。</b>{' '}
            <b>ask-deepseek MAJOR（06-27 收显示成两个值、$60,000 vs $60,000.30）：</b>
            搜的 pattern <code>60,000.30</code>、<code>59,550.20</code>。裁定：本篇主导
            约定是整美元日收；那两根带角分的字符串是仅有的次美元收、也是双值来源。动作：
            06-27 → $60,000、06-28 → $59,550 全文取整；−$450 下收现在精确一致
            （$60,000 − $59,550 = $450）。修前命中：5（60,000.30）+ 5（59,550.20）。
            修后命中：0 / 0。<b>RESOLVED。</b>{' '}
            <b>ask-deepseek MINOR-1（−$450 vs −$450.10）：</b>由同一根整美元取整解掉——
            $60,000 − $59,550 = $450 精确，所以 −$450 成立、不需小数。<b>RESOLVED。</b>{' '}
            <b>ask-deepseek MINOR-2（−5.09% → 称应为 −5.08%）：</b>重算后 REJECTED 为
            假阳性——$59,267.30 / $62,443 − 1 = −5.0858%、四舍五入到 −5.09%（codex 主
            审独立确认 −5.09% 的现货对地板缺口）。无改动；pattern <code>−5.09%</code>
            核实正确。{' '}
            <b>ask-deepseek MINOR-3（D-EMA20 −5.51% / D-SMA20 −5.59% → 称应为 −5.50% /
            −5.60%）：</b>重算后 REJECTED 为假阳性——$59,267.30 / $62,722 − 1 = −5.508%
            → −5.51%、$59,267.30 / $62,777 − 1 = −5.591% → −5.59%（偏移用精确序列值算、
            codex 确认全部 MA 偏移）。无改动。总体：<b>已过 codex 敌对式审计</b>、每条
            可执行 finding RESOLVED 且 grep 修后 = 0；那两根被拒的 MINOR 是 deepseek 的
            算术错误、不是本篇的错。{' '}
            <b>Build note（INFO）：</b>本服务器跑 Node 18.19.1；完整{' '}
            <code>next build</code> 在 Node 版本闸上被环境阻塞（谱系），所以{' '}
            <code>npx --no-install tsc --noEmit</code> 是 build proxy——STAGE E 拥有
            最终 build 验证。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体情况
            个性化。数字反映单一原子快照（2026-06-29 00:06Z）、provenance 在
            上方数据来源条带中按节披露；<em>关键地、快照时实时衍生品盘面已冻
            281.4h（最末行 2026-06-17 06:43Z）、smart-money 仓位 feed 死了约
            16.94 天</em>，所以所有 funding、OI、flow 与仓位数字都明确是最后已知 /
            陈旧或不可计算并已标注；宏观面板渲染 2026-06-28 22:15Z（比快照早约
            1.85h）、一根周日晚渲染、其利率 / 信用 Tier-1 系列对 06-28 逐字节相同、
            FX 腿基本走平。价格、MTF、GEX 与跨资产是新的。本篇是 v2、已过 STAGE B
            codex 敌对式审计——findings 已裁定并应用。水位、规模与条件是交易台流程
            的示例、不是长期推荐。过去的相关性、γ 与仓位模式不绑定未来盘面。
            衍生品有全损风险、加杠杆下损失可超过保证金。
            <em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                喘息被交还：200W 地板在第五根日收（06-28 $59,550、一根下收）上破，
                dealer 本子翻回 −20.1M 净空 γ、一根下行放大器在 3JUL26 −9.63M 重现，
                flip 重夺扩到 −1.42%——全部透过一条死掉的盘面读、第十三天。地板破五次。
                本子翻回空 γ。周收今天结算。失明。
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
            v2 · 2026-06-29 00:06Z 快照 · 已过 codex 敌对式审计 ·
            sources: live_db.json（FROZEN 281.4h）· mtf_div_latest.html · btc_gex.html ·
            macro_dashboard.html · cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
