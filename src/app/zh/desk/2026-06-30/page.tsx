import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-06-30 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-06-30',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-06-30' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260630() {
  await requireViewer('/zh/desk/2026-06-30');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-06-30 · v2</span>
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
              <span className="dn-big">$60,208</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+1.46%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-06-30 00:06Z ·{' '}
              <span className="dn-em">
                破位在周收上确认、而盘面正反弹进这根确认。06-29 周收<em>结算</em>在
                $60,224.70——在现在 $62,643 的地板下方（−3.86%）——所以 06-29 备忘说
                「今天结算」的那根周收升级<em>点火</em>了：200W 地板破位<em>确认</em>、
                06-15 重夺论<em>证伪</em>（本篇主导的结构性负）。地板本身随 06-29 周 bar
                走完而<em>抬</em>了 $62,443 → $62,643（现在 356 根走完 bar、一根 2022 年
                约 $20k 的老 bar 滚出 200 窗）。但盘面同时反弹进这根确认：06-29 日 bar 是
                一根<em>上</em>收 +$674.50、现货报 $60,208（+1.46%）、已<em>重夺</em>$60k
                与 0γ flip（在上方 +0.12%）、dealer 本子<em>翻回</em>+5.6M 净多 γ（阻尼
                恢复）、3JUL 放大器<em>缩</em>到 −9.63M → −4.86M、MTF 改善 1/9/0 → 1/6/3
                （8h/12h/1d 翻成水下金叉）、宏观信用 re-grow 闸<em>点火</em>（HY OAS 2.83%
                &gt; 2.78%）。全部透过一条死掉的衍生品盘面读、现在进第十四个日历天——OKX
                监控已冻 305.4h、SM feed 死了约 17.94 天。
              </span>
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 最末行 2026-06-17 06:43Z（t = &ldquo;06-17 14:43&rdquo; BJ）</td>
                  <td className="dn-flag">
                    <b>冻结</b> · live_db.json 自 2026-06-17 06:43Z 起没写过新行
                    （文件 mtime 06-17 06:43:08Z 确认）；进程状态本次未存档 / 未核实
                    ——现在对 00:06Z 快照锚已 <b>305.4h 陈旧</b>（06-29 备忘是 281.4h、
                    06-28 是 257.4h——停摆自上一篇又跑了约 24h、进它的第十四个日历天）。
                    funding / OI / CVD / basis / retail / taker-flow 都是 06-17 06:43Z
                    的<em>最后已知</em>、不是当前。SM 子feed（long_btc / short_btc /
                    net_btc）冻得更久——自 2026-06-12 01:36Z 起常数（约 430.5h / 约
                    17.94 天）；SM net 与 SM cut-fraction 本次 <b>不可计算</b>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-30 00:01Z scan</td>
                  <td className="dn-flag">
                    最新（约快照前 5 分钟）· 滚动 latest 文件、逐字存档于
                    /opt/desk-note/snapshots/2026-06-30-0006/ · 含未收盘 K 线 ·
                    扫描现货 $60,195、24h +1.24%、24h H/L $60,758 / $58,850、
                    qVol $13.63B
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-30 00:02Z 快照</td>
                  <td className="dn-flag">
                    最新（约快照前 4 分钟）· Deribit idx $60,422（比 parquet 现货
                    $60,208 高 $214）· 874 合约（对 06-29 −42）· net GEX{' '}
                    <b>+5.6M</b>（净 LONG γ、<b>翻回正</b>、从 06-29 的 −20.1M；06-28 是
                    +5.9M）· flip $60,135（现货在上方 +0.12%、从 06-29 的下方 −1.42%
                    <em>重夺</em>）· 前端现在是 30JUN26 0.3 DTE 在 <b>+8.51M</b>（正、
                    今日约 08:00Z 结算），最重的负 expiry 是 25SEP26 87.3 在 <b>−5.41M</b>，
                    而近端 3JUL26 3.3 放大器<em>缩</em>到 <b>−4.86M</b>（从 06-29 的
                    −9.63M）· 现货 $60,208 just 坐在 $60k −14.28M 墙（最重、现在 just 在
                    现货<em>下方</em>作支撑测试）上方，$60.5k +11.07M 正墙 just 头顶
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-30 00:02Z
                  </td>
                  <td className="dn-flag">最新 · 7d 1h bar · 22 资产 · 167 rows · regime NORMAL（均值 |r| 0.258、从 06-29 的 0.283 松向 0.25 idiosyncratic 阈值但仍在上方——BTC 仍耦合在广义风险复合体上）</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-29 22:16Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.85h · 10Y <b>4.38%</b>（−2.0bp、距 4.53% 闸 15bp）、
                    TIPS <b>2.18%</b>（−1.0bp、仍 EXTREME RISK-OFF）、HY OAS{' '}
                    <b>2.83%</b>（+5.0bp——<b>点火、上穿 2.78% re-grow 闸</b>）· MOVE
                    债波 <b>68.1</b>（来源 1d Δ +1.35、松）· FX 腿：<b>DXY 101.37</b>
                    （+0.01 当日）与 <b>USD/JPY 161.93</b>（+0.15 当日）、都仍硬 ·
                    Fed 净流动性 $5.812T（−0.037T、无新周度印）· NFCI neutral（现陈旧
                    10d）· WTI $78.9 现陈旧 7d
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-06-30 00:05Z（close $60,208）</td>
                  <td className="dn-flag">
                    最新 kline（交易所 OHLC、独立于冻结的实时盘面）· 偏移按 parquet
                    最末 bar close 重算——实时盘面冻结期内可得的最新现货 · 显示的周线
                    阶梯用 2023→ 子集（184 根周 bar），所以无 W-SMA200 行；200W 地板
                    直接从全历史 glob 重算——<b>356 根走完的周 W-MON bar</b>
                    （2019→present、<em>含</em>现已结算的 06-29 周、排除未收盘的 07-06
                    周）= <b>$62,643</b>、从 06-25 → 06-29 备忘钉的 $62,443 <b>抬了约
                    $200</b>，因 06-29 bar 走完、一根 2022 年约 $20k 的老 bar 滚出 200 窗。
                    <b>现货在地板下方 −3.89%、矩阵上每一根 MA 仍在头顶——无正偏移、谱系
                    第六根这样的切</b> · weekly_200sma.json 本次缺、所以比率百分位 /
                    last-event 留未溯源、不杜撰
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
              <span className="dn-v bear">−7.24%（STALE · 06-17 06:43Z · 305.4h）</span>
              <span className="dn-src">live_db 原始 funding −0.006608 × 1095 = −7.24% ann（非 ×100）· 06-17 06:43Z 冻结时的<em>最后已知</em>、现 305.4h 陈旧、不是当前读 · 与 06-19 → 06-29 备忘逐字节相同的同一根冻结行；到冻结为止可得的 24h+1m 含端采样窗（1,442 行）ann 均值 +0.20%、区间 −7.24% / +7.21%、负行 819 / 1,442——盘面死时是一本平衡的双向本子</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 对 06-29</span>
              <span className="dn-v">盘面冻结——不可计算</span>
              <span className="dn-src">实时盘面自 06-17 06:43Z 没写过，所以仍没有当前 funding 去对 06-29 备忘差分 · 冻结时最后已知印是 −7.24% ann（空付多）；杠杆门连续第十四天不可评估</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−468 BTC（−0.45%）· STALE 窗</span>
              <span className="dn-src">live_db oi_btc 102,945 在 06-17 06:43Z 冻结、对一根 24h+1m 含端采样窗（1,442 行）的起点 · 该窗<em>结束</em>在冻结、<em>不</em>延到 00:06Z 快照——它描述到 06-17 06:43Z 为止的盘面、已 305.4h 过期</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bear">59.47 / 40.53 · STALE</span>
              <span className="dn-src">live_db `mkt_long_pct` 在 06-17 06:43Z 冻结（24h+1m 含端采样窗起点是 58.29%——roll-over 里 +1.18pt 加多）· 最后已知、305.4h 陈旧</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">−37.29k · FEED 死约 430.5h</span>
              <span className="dn-src">long 13,532.4 − short 50,825.7 · 这根三元组自 2026-06-12 01:36Z 起逐字节常数（约 430.5h / 约 17.94 天）——是一根<em>冻结值</em>、不是当前仓位读；只为标死 feed 而带</span>
            </div>
            <div>
              <span className="dn-k">SM Δ / cut fraction</span>
              <span className="dn-v">不可计算</span>
              <span className="dn-src">SM feed 冻约 17.94 天 · |Δ| / prior_net 无法算——没有当前 SM net 可差分 · 挤压周期 / 重堆框架本次失明、是 06-16 → 06-29 ON-HOLD 的延续</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">43.9% / 43.58%</span>
              <span className="dn-src">GEX IV 中位数横跨 874 合约（00:02Z、新）对 30D close-to-close RV 43.58%（自 parquet）——链级 richness <em>坍</em>到约 +0.32pt、对已实现（06-29 是约 +4.93pt——本子翻回多 γ、下行 move 停滞时链显著变便宜）；RV 仍高（06-29 是 43.07%、05-31 是 24.91%）· IV 是 874 合约的链中位数、<em>不是</em>可交易价差</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+0.12%（在上方 · 已重夺）</span>
              <span className="dn-src">flip $60,135（前 $60,119 · 硬 +$16）· 对 parquet 现货 $60,208（60,207.60 / 60,135 − 1 = +0.121%）/ GEX 文件 Deribit idx $60,422（60,422 / 60,135 − 1 = +0.477%、文件读 +0.5%）——两参考都在 flip 上方、从 06-29 的下方 −1.42% <em>重夺</em> · net GEX +5.6M（净 LONG γ、从 −20.1M 翻回正）· 3JUL26 放大器缩到 −4.86M（从 −9.63M）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                破位在周收上确认、而盘面正反弹进这根确认。06-29 周收<em>结算</em>在
                $60,224.70——在现在 $62,643 的地板下方（−3.86%）——所以 06-29 备忘说
                今天结算的那根周收升级<em>点火</em>：200W 地板破位<em>确认</em>、06-15
                重夺论<em>证伪</em>，本篇主导的结构性负。但盘面同时反弹进这根确认——06-29
                日 bar 是一根<em>上</em>收（+$674.50）、现货重夺 $60k 与 0γ flip、dealer
                本子翻回 +5.6M 净多 γ、近端放大器缩了、MTF 改善到 1/6/3、宏观信用闸
                <em>点火</em>——全部透过一条死掉的衍生品盘面读、连续第十四个日历天
              </span>。现货报{' '}
              <span className="dn-tag bull">$60,208、24h +1.46%</span>、在 00:05Z parquet
              bar（MTF 扫描按它自己的窗读 +1.24%），从 06-29 备忘现货 $59,267 上来——谱系
              重夺了它 06-29 丢掉的 $60k 钉。谱系一直带的那根结构性正——200W 周收口径的
              守——现在<em>对它结算</em>：06-29 周收{' '}
              <span className="dn-tag bear">$60,224.70 结算在 $62,643 地板下方 −3.86%</span>，
              所以 22JUN 周收守（$63,990、前一根已决印）被取代、地板破位在升级层确认、
              06-15 重夺论已死。六根连续日收（06-24 $61,051 −2.54%、06-25 $59,772 −4.58%、
              06-26 $60,072 −4.10%、06-27 $60,000 −4.22%、06-28 $59,550 −4.94%、{' '}
              <span className="dn-tag bull">06-29 $60,225 −3.86%、一根上收 +$674.50</span>）
              现在都坐在地板下方、周收确认。现货连续第六根切下脚下没一根 MA——D-EMA20
              $62,565（−3.77%）、200W 地板 $62,643（−3.89%）、D-SMA20 $62,761（−4.07%）
              都在头顶、是最近的几根。dealer 本子{' '}
              <span className="dn-tag bull">翻回 +5.6M 净多 γ</span>、近端 3JUL26 放大器
              缩到 −4.86M（从 −9.63M）；现货 just 坐在 $60k −14.28M 墙上方、$60.5k
              +11.07M 正墙 just 头顶。MTF 改善三档到{' '}
              <span className="dn-tag">1 多 / 6 空 / 3 中性</span>（前 1/9/0）——15m/30m/1h
              框踏成中性、8h/12h/1d 翻成水下金叉——regime 分类器松到{' '}
              <span className="dn-tag bull">5/9 反转（均值回归）</span>、从 6/9。宏观本次
              混合：10Y 松到 4.38%（距闸 15bp），但 HY OAS 扩 +5bp 到 2.83%、点火上穿它
              2.78% 的 re-grow 闸，DXY 守 EXTREME 在 101.37。{' '}
              <span className="dn-em">
                操作事实没变、仍然约束：OKX 监控现在已冻 305.4h（最末行 2026-06-17
                06:43Z），funding / OI / CVD / basis / retail 都是最后已知且陈旧，SM 仓位
                本子死了约 17.94 天——SM net 与 cut-fraction 不可计算。交易台看不出 06-29
                的上收是真需求在吸收破位、还是本子翻回多 γ 时的一根薄空头回补反弹。读法
                落在价格、γ 与 MTF 这三样上。
              </span>{' '}
              本子保持 flat：破位确认、重夺论已死，但那条能说出反弹真假的盘面还是死的——
              scout 的价格前条件<em>又</em>翻 TRUE——自 06-22 那根短暂印以来第一次（现货
              重夺 flip），一个有意义的收窄，但它仍 stood down、压在约束块上（死盘面 → SM
              空头泄 / funding / 回补流读不出；无确认引擎 TD9；脚下没 MA）。无空、无 scout、
              无新对冲。
            </p>
            <p>
              BTC 报 <span className="dn-tag">$60,208</span> 在 parquet 最末 bar
              （00:05Z），24h{' '}
              <span className="dn-tag bull">+1.46%</span>（对正好 24h 前的 $59,338.60 bar
              ——06-29 00:05Z parquet bar；MTF 扫描按它自己的 00:01Z 窗读 +1.24%——这段差
              是参考窗、不是数据冲突），在一条{' '}
              <span className="dn-tag">$60,758 / $58,850</span> 的 24h 区间里（按 MTF 扫描
              H/L）。Deribit idx 在 00:02Z 读 $60,422、MTF 扫描现货 $60,195——所以最新现货
              在三个独立的新源上互相印证（parquet kline $60,208、GEX Deribit idx $60,422、
              MTF 扫描 $60,195），即便平常供它的 live_db 盘面冻在 06-17 06:43Z、305.4h
              陈旧。{' '}
              <span className="dn-signal">结构读已经从「地板在五根日收上破、周收升级待定」
              走到「地板破位在 06-29 周收上<em>确认</em>（$60,224.70、在现在 $62,643 地板
              下方 −3.86%）——06-15 重夺论<em>证伪</em>」、而盘面反弹进这根确认（06-29 上收
              +$674.50、现货重夺 $60k 与 flip）</span>：22JUN 周收 $63,990 是最后一根周守、
              日收一路走下穿过这条线（06-22 $63,990、06-23 $62,697、06-24 $61,051、06-25
              $59,772、06-26 $60,072、06-27 $60,000、06-28 $59,550），而 06-29 周 bar 收
              $60,224.70——在地板下方。按框架，一根日收在下方是预警、一根持续周收在下方
              才是破地板并证伪 06-15 重夺论的升级；06-29 周收交付了正是这个，所以升级不再
              待定——它<em>点火</em>了。{' '}
              <span className="dn-em">
                谱系唯一一根结构性正现在在周收层破、不只是日收层——06-15 重夺论已死；
                现货脚下没 MA，但盘面在确认上反弹了（06-29 上收、$60k 与 flip 重夺、本子
                翻回多 γ），交易台仍读不到那条能说出这根反弹是需求在吸收破位、还是一根薄
                空头回补 pop 的盘面。
              </span>
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面冻 305.4h（第十四天）· SM 本子死约 17.94 天 · funding/OI/flow 最后已知陈旧 · 交易台看不出 06-29 的上收是需求在吸收破位、还是本子翻回净多 γ 时的一根薄空头回补反弹</span>
            </h2>

            <p>
              <span className="dn-signal">
                这篇备忘最重要的单一来源——实时衍生品盘面——还是停着、连续第十四个日历天
              </span>。OKX 监控自{' '}
              <span className="dn-tag bear">2026-06-17 06:43Z</span> 起（t = &ldquo;06-17
              14:43&rdquo; BJ；文件 mtime 06-17 06:43:08Z 确认写停在那；进程状态本次未
              存档或核实，所以备忘断言的是缺失的盘面、不是一个活/挂的进程）没向
              live_db.json 追加过任何行。那现在是对 00:06Z 快照锚{' '}
              <span className="dn-tag bear">305.4h 的缺失盘面</span>——06-20 备忘标在
              65.4h、06-26 在 209.4h、06-27 在 233.4h、06-28 在 257.4h、06-29 在 281.4h，
              停摆又跑了约 24h 没写。实时盘面带的一切——funding、持仓、现货/期货 CVD、
              perp basis、retail 多%、taker-net、大单流、aggressor skew——因此都是{' '}
              <span className="dn-em">06-17 06:43Z 的最后已知、不是当前</span>。smart-money
              仓位三元组（long_btc / short_btc / net_btc）逐字节常数——{' '}
              <span className="dn-tag">13,532.4 / 50,825.7 / −37,293.3</span>——自{' '}
              <span className="dn-tag bear">2026-06-12 01:36Z</span>，约 430.5h（约 17.94
              天）。06-16 备忘把这根死 feed 标在约 94.5h、把挤压周期 ON HOLD；06-28 备忘
              带在约 382.5h、06-29 在约 406.5h；今天约 430.5h、仍死。{' '}
              <span className="dn-em">
                SM net 作为当前读不可计算，SM cut fraction（|Δ| / prior_net）也无法成形
                ——没有当前 SM net 可差分。本篇里任何仓位主张都明确是历史、不是实时。
              </span>
            </p>

            <p>
              为完整起见，<em>最后可得</em>的盘面读——全部钉在 06-17 06:43Z 冻结、现
              305.4h 过期，且与 06-19 → 06-29 备忘逐字节相同因为是同一根冻结行——是：
              funding <span className="dn-tag bear">−7.24% ann</span>（原始 −0.006608 ×
              1095；冻结时空付多），路径在 24h+1m 含端采样窗（1,442 行）上平衡双向（ann
              均值 <span className="dn-tag">+0.20%</span>、区间{' '}
              <span className="dn-tag">−7.24% / +7.21%</span>、负行 819 / 1,442）；OI{' '}
              <span className="dn-tag bear">102,945 BTC、跨这根 24h+1m 窗 −468（−0.45%）</span>；
              retail <span className="dn-tag">mkt_long_pct 59.47%</span>（同窗内 +1.18pt
              加多）；perp basis{' '}
              <span className="dn-tag bear">对现货 −$57.43 折价</span>。{' '}
              <span className="dn-em">
                把这个读成一根近十八天的旧指纹、不是信号：一本双向 funding 本子、OI 在泄、
                retail 在弱势第一腿里加多。没有一项能搬到 00:06Z 快照——而且它早于整段
                06-18 → 06-22 守地板序列、06-23 → 06-28 那段收破地板并跌穿 $60k 的腿、
                以及 06-29 周收确认与 06-29 上收反弹，所以它对仓位怎么吸收这根确认破位、
                或者最新这根上收是需求还是空头回补，什么都说不出。交易台把仓位维度当作
                未知、把这根 06-29 上收当作仓位未确认。
              </span>
            </p>

            <h2 className="dn-sec">
              结构 <span className="dn-roman">II · 价格/MTF 新 · 多周期共振偏空 1 多 / 6 空 / 3 中性（从 1/9/0 改善三档——15m/30m/1h 踏成中性）· 高框软化——8h/12h/1d <em>翻成</em>水下金叉（06-29 是死叉），只剩 1w 带一根水下死叉（1 bar、DIF −5,878.7）· 15m/30m/1h 重夺云上 · 1M TD8 buy 再一根收 · regime 松到 5/9 反转（均值回归、JT&lt;0）· 现货在每一根 MA 下方、整条阶梯头顶，200W 地板抬到 $62,643 并在 06-29 周收上确认破位、现货下方 −3.89%</span>
            </h2>

            <p>
              <span className="dn-signal">
                MTF 图是新的、头条改善三档（1 多 / 6 空 / 3 中性、15m/30m/1h 框重夺云上
                踏成中性）而高框软化——8h/12h/1d 从死叉翻成水下金叉、只剩 1w 在一根水下
                死叉上——regime 分类器守住均值回归在 5/9
              </span>——这是连同盘口本子、交易台今天还能信的一维。00:01Z 扫描标{' '}
              <span className="dn-tag bear">1 多 / 6 空 / 3 中性、横跨 10 框</span>，净读{' '}
              <em>多周期共振偏空 · 卖反弹</em>——从 06-28 扫描的 1/9/0 改善、因 15m/30m/1h
              框踏成中性。regime 行读{' '}
              <span className="dn-tag bull">5/9 反转 / 均值回归 regime（JT&lt;0）——倾向
              反弹</span>（06-29 是 6/9），所以分类器守住倾向反弹的偏向、松了一档——而引擎
              仍没有确认的建设性触发可据以行动。唯一一根多框是{' '}
              <span className="dn-tag">1M（云上、TD8 buy 再一根收）</span>；建设性交叉是{' '}
              <span className="dn-tag">8h / 12h / 1d 水下金叉（3 bar / 刚印 / 1 bar——1d
              从 06-29 的死叉<em>翻</em>过来）</span> 加一根{' '}
              <span className="dn-tag">1h 水下金叉 8 bar</span>（都是未确认的水下试探、不是
              TD buy），没有活的 TD9 buy。下行侧松了：只剩{' '}
              <span className="dn-tag bear">1w 带一根水下死叉（1 bar、DIF −5,878.7）</span>，
              而 15m/30m 带水<em>上</em>死叉（13 bar / 1 bar）。云：15m/30m/1h <em>重夺</em>
              云上、4h→1w 云下、1M 云上。薄的建设性集合是{' '}
              <span className="dn-tag bull">8h / 12h / 1d 水下金叉、15m/30m/1h 云上重夺、
              一根 1M TD8 buy 再一根收，和 15m / 30m / 1h 的 bottom（看涨反转）背离</span>。{' '}
              <span className="dn-em">
                直读：框栈改善三档、高框从死叉软化成水下金叉，但结构仍是一根偏空趋势框
                ——4h→1w 云下、无 MA 支撑、200W 地板在周收上确认破位。引擎仅有的建设性印
                是未确认的水下金叉、快框的云上重夺、和一根再一根收的 1M TD8 buy。没有确认
                的引擎印去做多这根反弹；改善是真的但未确认、对着已确认的周收破位被软化。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">60,175</td><td className="num bear">45.7</td><td className="bear">死叉（水上）13b</td><td className="bull">云上 ↓60.0k 28b</td><td>Buy 7</td><td>BEAR hid · BEAR reg（top）· BULL hid · BULL reg（bottom）</td></tr>
                <tr><td>30m</td><td className="num">60,188</td><td className="num">51.2</td><td className="bear">死叉（水上）1b</td><td className="bull">云上 ↓59.8k 15b</td><td>Buy 3</td><td>BEAR hid · BEAR reg（top）· BULL hid · BULL reg（bottom）</td></tr>
                <tr><td>1h</td><td className="num">60,188</td><td className="num">53.3</td><td className="bull">金叉（水下）8b</td><td className="bull">云上 ↓59.9k 7b</td><td>Buy 2</td><td>BEAR hid · BEAR reg（top）· BULL hid · BULL reg（bottom）</td></tr>
                <tr><td>4h</td><td className="num">60,175</td><td className="num bear">47.8</td><td className="bull">金叉（水下）19b</td><td className="bear">云下 ↑61.2k 41b</td><td>Sell 6</td><td>BEAR hid</td></tr>
                <tr><td>8h</td><td className="num">60,180</td><td className="num bear">42.7</td><td className="bull">金叉（水下）3b</td><td className="bear">云下 ↑63.2k 20b</td><td>Sell 2</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">60,180</td><td className="num bear">39.0</td><td className="bull">金叉（水下）刚印</td><td className="bear">云下 ↑64.2k 77b</td><td>Buy 1</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">60,180</td><td className="num bear">34.2</td><td className="bull">金叉（水下）1b</td><td className="bear">云下 ↑70.3k 29b</td><td>Sell 2</td><td>BEAR hid</td></tr>
                <tr><td>3d</td><td className="num">60,195</td><td className="num bear">34.0</td><td className="neut">—</td><td className="bear">云下 ↑72.5k 9b</td><td>Buy 3</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">60,198</td><td className="num bear">33.8</td><td className="bear">死叉（水下）1b</td><td className="bear">云下 ↑99.5k 22b</td><td>Buy 7</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">60,195</td><td className="num">41.4</td><td className="neut">—（DIF 水上）</td><td className="bull">云上 ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 00:01Z scan（08:01 Beijing；滚动 latest
                    文件、逐字存档于 /opt/desk-note/snapshots/2026-06-30-0006/）。净读{' '}
                    <em>多周期共振偏空 · 卖反弹（1 多 / 6 空 / 3 中性）</em>；regime{' '}
                    <em>5/9 反转 / 均值回归 regime（JT&lt;0、倾向反弹）</em>；活跃背离{' '}
                    <em>反转：top div 15m / 30m / 1h、bottom div 15m / 30m / 1h；隐藏
                    （延续）：BEAR hid 15m / 30m / 1h / 4h / 1d、BULL hid 15m / 30m /
                    1h</em>。头部告警：<em>1w 水下死叉（1 bar 前、DIF −5,878.7）</em>、{' '}
                    <em>1d 水下金叉（1 bar 前、DIF −2,299.0——从 06-29 的死叉翻过来）</em>、{' '}
                    <em>12h 水下金叉（刚印、DIF −1,140.5）</em>、{' '}
                    <em>30m 水上死叉（1 bar 前、DIF +112.0）</em>、{' '}
                    <em>1M TD8 Buy——再一根收</em>。扫描现货 $60,195、24h +1.24%、24h H/L
                    $60,758 / $58,850、qVol $13.63B。收盘为未收盘 K 线；每个值在各周期
                    收盘前都按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵是和 06-29 一样的深头顶墙、现货在反弹上往地板爬回了一截，所以谱系
              第六根切{' '}
              <span className="dn-tag bear">矩阵上每一根线都在头顶——没有正偏移、脚下
              没 MA</span>。$60,208 坐在{' '}
              <span className="dn-tag bear">D-EMA20 $62,565 下方 −3.77%</span>——最近的线、
              仍头顶——然后{' '}
              <span className="dn-tag bear">全历史 W-SMA200 200W 地板 $62,643 下方 −3.89%</span>
              （随 06-29 周 bar 走完从 $62,443 <em>抬</em>上来）与{' '}
              <span className="dn-tag bear">D-SMA20 $62,761 下方 −4.07%</span>、再上一根。
              其上，周期 proxy{' '}
              <span className="dn-tag bear">D-EMA50 $66,681（−9.71%）</span>、然后{' '}
              <span className="dn-tag bear">W-EMA200 $67,437（−10.72%、种子）</span>、然后{' '}
              <span className="dn-tag bear">D-SMA50 $68,568（−12.19%）</span>、然后一条
              密集头顶带：<span className="dn-tag bear">D-EMA100 $70,356（−14.42%）</span>、{' '}
              <span className="dn-tag bear">W-SMA20 $70,578（−14.69%）</span>、{' '}
              <span className="dn-tag bear">D-SMA150 $70,680（−14.82%）</span>、{' '}
              <span className="dn-tag bear">D-SMA100 $71,365（−15.63%）</span>、{' '}
              <span className="dn-tag bear">W-EMA20 $71,923（−16.29%）</span>、{' '}
              <span className="dn-tag bear">D-EMA150 $73,481（−18.06%）</span>、{' '}
              <span className="dn-tag bear">W-EMA150 $73,845（−18.47%）</span>、{' '}
              <span className="dn-tag bear">D-SMA200 $75,371（−20.12%）</span>、{' '}
              <span className="dn-tag bear">W-SMA150 $75,886（−20.66%）</span>、{' '}
              <span className="dn-tag bear">D-EMA200 $76,353（−21.15%）</span>。更高更远、
              已弃用：W-EMA100 $80,155（−24.89%）、W-EMA50 $80,935（−25.61%）、W-SMA100
              $88,523（−31.99%）、W-SMA50 $88,654（−32.09%）。{' '}
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-06-30 00:05Z（close $60,207.60）；偏移按
                同一根 last-bar close 重算、那是实时盘面冻结期内可得的最新现货。显示的 MA
                水位按 $ 取整、偏移用精确序列值算。显示的周线阶梯用 2023→ 子集（184 根周
                bar），所以那里 W-SMA200 不可计算、W-EMA200 $67,437 从可用历史 seed；200W
                地板 $62,643 单独从全历史 glob 重算（356 根走完的周 W-MON bar、含现已结算
                的 06-29 周、排除未收盘的 07-06 周——随 06-29 bar 走完、一根 2022 年约 $20k
                的老 bar 滚出而从 $62,443 抬了约 $200）。日收：06-22 $63,990（= 22JUN
                周收）、06-23 $62,697、06-24 $61,051（首根收破地板）、06-25 $59,772、06-26
                $60,072、06-27 $60,000、06-28 $59,550、06-29 $60,225（第六根收破、一根上收
                +$674.50、AND 确认破位的那根周收）、06-30（未收盘、5 分钟 bar）$60,208——
                地板破位现在在周收层确认。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子<em>翻回</em>净多 γ aggregate +5.6M（06-29 是 −20.1M、06-28 是 +5.9M）——本子现在又<em>阻尼</em>下一根移动 · 近端 3JUL26 3.3 DTE 放大器<em>缩</em>到 −4.86M（从 06-29 的 −9.63M），最重的负现在是远期 25SEP26 87.3 DTE −5.41M，前端是 30JUN26 0.3 DTE +8.51M（正、今日约 08:00Z 结算）· flip 硬到 $60,119 → $60,135、现货重夺它，所以现货现在在它上方 +0.12%（前 −1.42% 下方）· IV 坍到 43.9%</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子逆转了它 06-29 的再翻空、并越回建设性那侧：aggregate γ 从
                −20.1M 净空翻回 +5.6M 净多 γ，所以本子又阻尼而非放大下一根移动，flip 重夺
                随现货推回硬上来的 flip 上方而翻正
              </span>。aggregate GEX 是{' '}
              <span className="dn-tag bull">+5.6M / 1%</span>（06-29 是 −20.1M、06-28 是
              +5.9M、06-26 是 −87.5M）；06-29 那根净空 γ 再翻只持续了一篇——本子已越回
              净多 γ。0-γ flip 硬{' '}
              <span className="dn-tag">$60,119 → $60,135（+$16）</span>，而现货 $60,208
              升过它，所以现货坐在{' '}
              <span className="dn-tag bull">flip 上方 +0.12%</span>、现货口径（60,207.60 /
              60,135 − 1 = +0.121%）；GEX 文件自己的 &ldquo;dist to flip&rdquo; 按它的
              Deribit idx $60,422（比 parquet 现货高 $214）读 +0.5%、即{' '}
              <span className="dn-tag bull">+0.48%</span>（60,422 / 60,135 − 1 = +0.477%）
              ——两参考都在 flip 上方、从 06-29 的下方 −1.42% <em>重夺</em>。墙图跨现货：
              最重是{' '}
              <span className="dn-tag bear">$60k −14.28M</span>（最重墙、现在 just 在现货
              <em>下方</em>作支撑测试），{' '}
              <span className="dn-tag bull">$60.5k +11.07M</span> just 在现货上方（第一道
              正天花板），{' '}
              <span className="dn-tag bear">$58k −13.41M</span>、{' '}
              <span className="dn-tag bear">$56k −10.30M</span>、{' '}
              <span className="dn-tag bear">$59k −8.90M</span>（just 在现货下方）、{' '}
              <span className="dn-tag bear">$55k −8.84M</span>、{' '}
              <span className="dn-tag bull">$64k +8.22M</span>、{' '}
              <span className="dn-tag bull">$63k +7.63M</span>、{' '}
              <span className="dn-tag bear">$50k −6.90M</span>、{' '}
              <span className="dn-tag bull">$80k +6.48M</span>。{' '}
              <span className="dn-em">
                关键地，aggregate 现在又是净多 γ，所以本子阻尼下一根移动而非放大它——对
                06-29 的 −20.1M 空 γ 本子是个逆转。现货在 $60,208 坐在 just 在下的 $60k
                −14.28M 墙（现在是支撑测试而非头顶天花板）与 just 在上的 $60.5k +11.07M
                正墙之间；$60k 墙下面是一块 below-spot put 墙架——$59k −8.90M、$58k
                −13.41M、$56k −10.30M、$55k −8.84M、$50k −6.90M——没有一个是证明过的地板，
                而正墙（$60.5k、$63k、$64k、$80k）在上面作第一道阻力架。阻尼本子加重夺
                的 flip 是谱系自 06-28 去放大以来带过的最建设性 γ 背景。
              </span>{' '}
              按 expiry 近端集中度<em>松了</em>：前端是正的 30JUN26{' '}
              <span className="dn-tag bull">0.3 DTE 在 +8.51M（今日约 08:00Z 结算）</span>，
              然后 1JUL26 1.3{' '}
              <span className="dn-tag bull">+3.96M</span>、2JUL26 2.3{' '}
              <span className="dn-tag bull">+6.28M</span>、3JUL26 3.3{' '}
              <span className="dn-tag bear">−4.86M</span>（近端下行放大器、从 06-29 的
              −9.63M <em>缩</em>了）、10JUL26 10.3 +0.12M、17JUL26 17.3{' '}
              <span className="dn-tag bull">+3.90M</span>、31JUL26 31.3 +1.01M、28AUG26
              59.3 +0.65M、25SEP26 87.3{' '}
              <span className="dn-tag bear">−5.41M</span>（现在最重的负 expiry、一根远期
              块）、25DEC26 178.3 −0.12M、26MAR27 269.3 +0.35M、25JUN27 360.3 +0.35M。
              29JUN26 −1.29M 前端昨天约 08:00Z 结算；06-29 备忘标在 3JUL26 −9.63M 的那根
              集中近端下行放大器已缩到 −4.86M，最重的负现在坐到远端 25SEP26 −5.41M。
              （现货参考的 aggregate +5.6M 是现货处的 net GEX；by-expiry 行是独立分解、
              不必加总到它。）
            </p>

            <p>
              IV 中位数横跨 874 合约是{' '}
              <span className="dn-tag">43.9%</span>（从 06-29 的 48.0% / 916 合约坍下、
              链又薄了 42 张）对 30D close-to-close RV{' '}
              <span className="dn-tag">43.58%</span>——链级 richness{' '}
              <span className="dn-tag">约 +0.32pt</span>、对已实现（06-29 是约 +4.93pt——
              本子翻回多 γ、下行 move 停滞时链显著变便宜），RV 仍高（今天 43.58% vs 06-29
              的 43.07% 与 05-31 的 24.91%——06-08 → 06-18 下腿启动的高 vol regime 续）。
              是 874 合约的链中位数、<span className="dn-em">不是</span>可交易价差；
              expiry-/strike-level vega、skew 与期限结构仍未载入；vol 读法保持 framework
              only。RV 方法：30D close-to-close、logret.std × √365 × 100、用最末 30 根日
              log return（= 连续 31 根日 close）、锚自 parquet 最末 bar 2026-06-30 00:05Z；
              底层 close 窗区间 $59,550 – $73,653。P/C 比率 0.58、Call OI 218,193 / Put OI
              126,616 BTC。
            </p>

            <h2 className="dn-sec">
              宏观 <span className="dn-roman">IV · 约 1.85h 渲染——10Y 松到 4.38%（距闸 15bp）、TIPS 2.18% EXTREME RISK-OFF、HY OAS 2.83% <em>点火</em>上穿它 2.78% 的 re-grow 闸（+5.0bp）、MOVE 68.1（松）· FX 腿硬：DXY 101.37（+0.01）EXTREME 与 USD/JPY 161.93（+0.15）· regime 仍 NORMAL 但松了（均值 |r| 0.258），对 NQ 的落后扩到 −4.33pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观面板渲染约 1.85h 滞后、读法混合：利率松了一点（10Y −2bp 到 4.38%），
                但信用 re-grow 闸<em>点火</em>——HY OAS 扩 +5bp 到 2.83%、上穿它 2.78% 的
                触发——而美元守 EXTREME、FX 腿硬
              </span>。面板渲染 2026-06-29 22:16Z、比快照早约 1.85h。US 10Y nominal{' '}
              <span className="dn-tag">4.38%（−2.0bp）</span>、regime z{' '}
              <span className="dn-tag bear">+0.88</span>——紧 regime、RISK-OFF、距 4.53%
              闸 15bp。10Y TIPS real{' '}
              <span className="dn-tag">2.18%（−1.0bp）</span>、regime z{' '}
              <span className="dn-tag bear">+2.10</span>——仍 EXTREME RISK-OFF、面板上最紧
              的几根之一。5Y5Y BE 通胀{' '}
              <span className="dn-tag">2.20%（+1.0bp）</span>、10Y breakeven{' '}
              <span className="dn-tag">2.22%（+2.0bp）</span>——通胀预期软。HY OAS{' '}
              <span className="dn-tag bear">2.83%（+5.0bp）</span>、regime z{' '}
              <span className="dn-tag bull">−0.43</span>——信用在 z-regime 上仍松，但价差
              扩 +5bp、<em>点火</em>上穿它 2.78% 的 re-grow 闸（06-29 它正好坐在线上；本切
              它印在上方）。MOVE 债波是{' '}
              <span className="dn-tag">68.1</span>——来源标 +1.35 在它自己的 1d delta、仍
              &ldquo;松。&rdquo;美元守它的 EXTREME 水位、FX 腿本切硬：DXY{' '}
              <span className="dn-tag bear">101.37（+0.01 当日）</span>、regime z{' '}
              <span className="dn-tag bear">+2.73</span>、基本不变。Fed 净流动性{' '}
              <span className="dn-tag bear">$5.812T（−0.037T）</span>、regime z{' '}
              <span className="dn-tag bear">−1.16</span>——本次无新周度印。USD/JPY{' '}
              <span className="dn-tag">161.93（+0.15 当日）</span>、regime z +1.57——比
              06-28 硬；US-JP 10Y 利差{' '}
              <span className="dn-tag">1.73%（−2.0bp）</span> 窄；USD/CNY{' '}
              <span className="dn-tag">6.7975</span>；WTI{' '}
              <span className="dn-tag stale">$78.9（现陈旧 7d）</span>。{' '}
              <span className="dn-em">
                净：宏观背景仍 risk-off 但信用腿越过了它的触发——HY OAS 2.83% 现在在
                2.78% re-grow 闸<em>上方</em>（闸点火），而利率腿松到 4.38%、坐在 4.53% 闸
                15bp 外。reclaim-long 利率筛（10Y &lt; 4.55%）在 4.38% 仍 TRUE、有余地。
                宏观读法仍是强化而非反驳 200W 地板破位——一个广义 risk-off 背景、信用闸
                现已点火——虽然利率松了一点、美元守住；信用闸点火是本切唯一一根新宏观升级。
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
                <tr><td>US 10Y nominal</td><td className="num">4.38%</td><td className="num bull">−2.0bp</td><td className="num bear">+0.88</td><td className="bear">紧 · RISK-OFF · 距闸 15bp</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.18%</td><td className="num">−1.0bp</td><td className="num bear">+2.10</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.20%</td><td className="num">+1.0bp</td><td className="num">−0.40</td><td className="neut">软</td></tr>
                <tr><td>10Y breakeven</td><td className="num">2.22%</td><td className="num">+2.0bp</td><td className="num">−1.73</td><td className="neut">软</td></tr>
                <tr><td>HY OAS</td><td className="num">2.83%</td><td className="num bear">+5.0bp</td><td className="num bull">−0.43</td><td className="bear">点火、上穿 2.78% re-grow 闸</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.516</td><td className="num">−0.00</td><td className="num">−0.07</td><td className="stale">周度 · neutral · 现陈旧 10d</td></tr>
                <tr><td>MOVE 债波</td><td className="num">68.1</td><td className="num bear">+1.35</td><td className="num bull">−0.66</td><td className="bull">松</td></tr>
                <tr><td>DXY</td><td className="num">101.37</td><td className="num bear">+0.01</td><td className="num bear">+2.73</td><td className="bear">EXTREME RISK-OFF · FX 硬</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.812T</td><td className="num bear">−0.037T</td><td className="num bear">−1.16</td><td className="bear">排空 · 无新周度印</td></tr>
                <tr><td>USD/JPY</td><td className="num">161.93</td><td className="num bear">+0.15</td><td className="num bear">+1.57</td><td className="bear">硬 · 比 06-28 硬</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">1.73%</td><td className="num">−2.0bp</td><td className="num bull">−1.30</td><td className="neut">窄</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7975</td><td className="num">+0.01</td><td className="num bull">−1.37</td><td className="neut">松</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">+13.5bp（月度）</td><td className="num bear">+2.56</td><td className="stale">月度 · 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、汇总 00:02Z——{' '}
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。非对角线均值{' '}
              <span className="dn-tag">|r| 0.258</span>——从 06-29 的 0.283 松向阈值但仍{' '}
              <span className="dn-tag">在 0.25 idiosyncratic 阈值上方</span>，所以 regime
              行守在{' '}
              <span className="dn-signal">NORMAL——BTC 仍耦合在广义跨资产复合体上</span>，
              其顶部对齐是股票 / 工业金属簇：NQ{' '}
              <span className="dn-tag">+0.750</span>、NVDA{' '}
              <span className="dn-tag">+0.723</span>、SP500{' '}
              <span className="dn-tag">+0.666</span>、JP225{' '}
              <span className="dn-tag">+0.549</span>、COPPER{' '}
              <span className="dn-tag">+0.515</span>、URNM{' '}
              <span className="dn-tag">+0.491</span>、TSLA{' '}
              <span className="dn-tag">+0.481</span>、PALL{' '}
              <span className="dn-tag">+0.390</span>、AAPL{' '}
              <span className="dn-tag">+0.341</span>、SILVER{' '}
              <span className="dn-tag">+0.338</span>，CL{' '}
              <span className="dn-tag">−0.053</span> / BRENT{' '}
              <span className="dn-tag">−0.064</span> 反向、GOLD 一根弱{' '}
              <span className="dn-tag">+0.237</span>。7d 表现仍是广义风险复合体红涨夹杂、
              BTC 对 NQ 的落后比 06-29 更宽、但<em>不是</em>复合体里最差的：{' '}
              <span className="dn-tag bear">BTC −6.16%</span>、NQ{' '}
              <span className="dn-tag bear">−1.83%</span>、SP500{' '}
              <span className="dn-tag bear">−0.56%</span>、JP225{' '}
              <span className="dn-tag bear">−2.20%</span>、NVDA{' '}
              <span className="dn-tag bear">−6.30%</span>、META{' '}
              <span className="dn-tag bear">−0.11%</span>、AAPL{' '}
              <span className="dn-tag bear">−5.44%</span>、MSFT{' '}
              <span className="dn-tag bull">+0.29%</span>、GOOGL{' '}
              <span className="dn-tag bull">+1.67%</span>、AMZN{' '}
              <span className="dn-tag bull">+3.24%</span>、TSLA{' '}
              <span className="dn-tag bull">+1.45%</span>；金属更低（GOLD{' '}
              <span className="dn-tag bear">−4.28%</span>、SILVER{' '}
              <span className="dn-tag bear">−10.21%</span>、PLAT{' '}
              <span className="dn-tag bear">−5.63%</span>、PALL{' '}
              <span className="dn-tag bear">−3.49%</span>、COPPER{' '}
              <span className="dn-tag bear">−3.89%</span>）；原油下、NGAS 较软（CL{' '}
              <span className="dn-tag bear">−5.41%</span>、BRENT{' '}
              <span className="dn-tag bear">−5.60%</span>、NGAS{' '}
              <span className="dn-tag bear">−2.54%</span>）。{' '}
              <span className="dn-em">
                BTC 的 7d 回报 −6.16% vs NQ −1.83% 是 −4.33pt 的落后（06-29 是 −3.53pt）
                ——对 NQ 的缺口又扩宽、因为 BTC 跑输了股票。但 BTC <em>不是</em>复合体里
                最深的落后者：SILVER −10.21% 与 NVDA −6.30% 7d 都跌得更多。风险复合体 7d
                是涨跌夹杂（股票分化——NQ / SP500 / META 微红，MSFT / GOOGL / AMZN / TSLA
                绿；金属下、原油下），所以 BTC 的下跌仍嵌在一个广义 move 里、而不是作为
                idiosyncratic 突出——这正是即便均值 |r| 松向 0.25 仍让相关性 regime 守在
                NORMAL 的东西。已确认的 200W 地板破位仍与一个 risk-off 宏观盘面同时（10Y
                紧、信用闸点火、DXY EXTREME），所以破位仍既是 risk-off-盘面事件、也是 BTC
                自有事件——BTC 落后 NQ、但 SILVER 与 NVDA 跌得更狠。
              </span>{' '}
              JGB 月度 2.65% 带一个 EXTREME RISK-OFF 月度标——不依赖。
            </p>

            <h2 className="dn-sec">
              交易本子 <span className="dn-roman">V · 本子 FLAT · 200W 地板——破位在 06-29 周收上<em>确认</em>（$60,224.70 &lt; $62,643、−3.86%），06-15 重夺论<em>证伪</em>；地板抬到 $62,643 · scout 价格前条件翻 TRUE（现货在 flip 上方 +0.12%）但 scout 仍 stood down（盘面失明约 17.94 天、无确认引擎触发、脚下没 MA）· 宏观尾信用闸<em>点火</em>（OAS 2.83% &gt; 2.78%）· 挤压周期 ON HOLD（SM 死约 17.94 天）</span>
            </h2>

            <p>
              <span className="dn-signal">
                本子 flat、并保持 flat——谱系的结构性正现在<em>对它</em>结算（200W 破位
                在周收上确认、重夺论证伪），即便盘面反弹进这根确认、γ 背景转建设性；约束
                仍是数据完整性
              </span>。06-29 周收结算 $60,224.70、在现在 $62,643 地板下方 −3.86%——06-29
              备忘说今天结算的升级<em>点火</em>，所以 200W 地板破位在周收层<em>确认</em>、
              06-15 重夺论<em>证伪</em>。但盘面在确认上反弹了：06-29 日 bar 是一根上收
              （+$674.50）、现货重夺 $60k 与 0γ flip（上方 +0.12%）、dealer 本子翻回 +5.6M
              净多 γ（阻尼）、近端放大器缩了、MTF 改善到 1/6/3、高框软化成水下金叉。scout
              的价格前条件<em>又</em>翻 TRUE——自 06-22 那根短暂印以来第一次、现货在 flip
              上方——但 scout 仍不能取：仓位腿（SM 空头泄、funding 姿态、回补流）都需要一条
              实时盘面、而连续第十四天没有，引擎没确认的建设性触发（只有未确认水下金叉、
              快框云上重夺、和一根再一根收的 1M TD8 buy），脚下仍没 MA。也没有新空：在一条
              失明盘面上、追一根确认破位、进一本多 γ 阻尼本子、一根重夺的 flip、和一根带
              bottom 背离倾向反弹的 regime，是糟糕的入场。今天的交易本子是：无空、无 scout、
              无新对冲——修盘面，再读 06-29 上收是需求在吸收破位还是一根空头回补 pop。
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 主仓 · 200W 周期地板盯位——破位<em>确认</em>：06-29 周收 $60,224.70 结算在现在 $62,643 地板下方 −3.86%（周收升级<em>点火</em>），06-15 重夺论<em>证伪</em>；地板随 06-29 周 bar 走完抬了 $62,443 → $62,643；六根连续日收在下方（06-24 → 06-29）</span>
              <div className="dn-trade-name">
                200W 周期地板盯位——破位在 06-29 周收上<em>确认</em>：地板 $62,643 = 全历史 W-SMA200（356 根走完周 bar、随 06-29 bar 走完抬了约 $200）、06-29 周收 $60,224.70（下方 −3.86%）确认升级、六根日收在下方（06-24 $61,051、06-25 $59,772、06-26 $60,072、06-27 $60,000、06-28 $59,550、06-29 $60,225）、06-15 重夺论<em>证伪</em>
              </div>
              <div className="dn-thesis">
                06-29 备忘记下五根连续日收破地板、周收升级当天结算。它结算了：06-29 周
                bar 收{' '}
                <span className="dn-tag bear">$60,224.70、在 $62,643 地板下方 −3.86%</span>。
                按框架一根盘中插针不是破位、一根日收在下方是预警、一根持续周收在下方才是
                破地板并证伪 06-15 重夺论的升级——那根周收现在已印，所以破位<em>确认</em>、
                重夺论<em>证伪</em>。22JUN 周收 $63,990（在抬后的地板上方 +2.15%）是最后
                一根周守；它现在被 06-29 在下方的收取代。{' '}
                <span className="dn-em">谱系的结构性正在周收层对它结算、不只是日收层；
                现货脚下没 MA，地板——抬到 $62,643——现在是确认阻力、不是守住的支撑。</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W 地板（抬了）</span><span className="dn-lvl-v">$62,643 = 全历史 W-SMA200、本切从 2019→ parquet glob 重算（356 根走完周 W-MON bar、含现已结算的 06-29 周、排除未收盘 07-06 周）；随 06-29 bar 走完、一根 2022 年约 $20k 的老 bar 滚出而从 06-25 → 06-29 钉的 $62,443 抬了约 $200 · weekly_200sma.json 缺、所以比率百分位 / last-event 留未溯源、不杜撰</span></div>
                <div><span className="dn-lvl-k">破位——在周收上确认</span><span className="dn-lvl-v bear">06-29 周收 $60,224.70 结算在地板下方 −3.86%——升级<em>点火</em>、破位确认；日收也走了六根连续 settle 在下方（06-24 $61,051 −2.54%、06-25 $59,772 −4.58%、06-26 $60,072 −4.10%、06-27 $60,000 −4.22%、06-28 $59,550 −4.94%、06-29 $60,225 −3.86% 一根上收）</span></div>
                <div><span className="dn-lvl-k">重夺论——证伪</span><span className="dn-lvl-v bear">06-15 重夺论要求地板在周收口径上守住；06-29 周收在地板下方证伪它——前一根 22JUN 周守（$63,990）被取代</span></div>
                <div><span className="dn-lvl-k">重夺阶梯（现在是恢复路径）</span><span className="dn-lvl-v bear">现货在 flip $60,135 上方 +0.12%（已重夺）但在 D-EMA20 $62,565 下方 −3.77%、地板 $62,643 下方 −3.89%、D-SMA20 $62,761 下方 −4.07%——脚下没 MA；一根结构性恢复是一根持续周收回到地板 $62,643 上方（破位须解掉的那根水位）、以 D-EMA20 $62,565 与 D-SMA20 $62,761 作日级中途站——失明盘面上不是 scout 触发（见 scout）</span></div>
              </div>
              <div className="dn-gating">
                <b>框架、不是一笔交易。</b>地板盯位是唯一一根承重的实时水位、其他都陈旧或
                framework only。破位现在在周收上确认、重夺论证伪——这根盯位不取任何仓位：
                它设确认的破位（06-29 周收 $60,224.70 &lt; $62,643）、恢复条件（一根持续
                周收回到抬后的地板 $62,643 上方）、和重夺中途站（flip $60,135、已重夺 →
                D-EMA20 $62,565 → 地板 $62,643 → D-SMA20 $62,761），交易台不会预先 position
                空进一根引擎在它上面带 bottom 背离、本子多 γ 阻尼的确认破位，也不会做多一根
                它在失明盘面上无法确认的恢复。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout · 仍 STOOD DOWN · 价格前条件翻 TRUE（现货在 flip 上方 +0.12%、从 06-29 的下方 −1.42% 重夺）、本子<em>翻回</em>净多 γ——但盘面失明约 17.94 天 + 无确认引擎触发 + 脚下没 MA 仍约束</span>
              <div className="dn-trade-name">
                回补反弹 scout——flip 重夺翻 TRUE（现货在上方 +0.12%）、本子翻回净多 γ，但 scout 在失明盘面上、无确认引擎触发、脚下没 MA 的情况下保持 stood down
              </div>
              <div className="dn-thesis">
                06-22 备忘看到 scout 价格前条件短暂印出（现货重夺 flip），06-23 → 06-29
                备忘看到它被交还并扩到 flip 下方 −1.42%。今晚它<em>又</em>翻 TRUE 并守住：
                现货现在{' '}
                <em>在 flip 上方 +0.12%</em> $60,135（它硬了 +$16）、已重夺 $60k，dealer
                本子翻回 +5.6M 净多 γ。所以 scout 的价格腿与 γ 腿、是谱系里第一次、都建设性。
                但 scout 仍被三点封住。(1) 仓位腿（SM 空头泄、funding 姿态、回补流）都需要
                一条实时盘面、而没有——交易台看不出 06-29 的上收是需求在吸收破位、还是本子
                翻回多 γ 时的一根薄空头回补 pop。(2) 引擎没确认的建设性触发——只有未确认
                水下金叉（8h / 12h / 1d）、15m/30m/1h 云上重夺、和一根再一根收的 1M TD8 buy；
                没有活的 TD9。(3) 脚下仍没 MA——现货在 D-EMA20、地板与 D-SMA20 下方。{' '}
                <span className="dn-em">一根 scout long、在一条仓位失明的盘面上、无确认引擎
                印、脚下没 MA，不是一笔交易——即便价格前条件已翻 TRUE、本子是多 γ。这个收窄
                是真的、值得记下（价格与 γ 第一次都建设性），但它不足以在没有盘面与确认引擎
                触发时 size 进去。</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v bear">stood down · 无入场 · 价格前条件翻 TRUE（现货在 flip 上方 +0.12%、从 06-29 的下方 −1.42% 重夺）、本子是净多 γ——但脚下没 MA、盘面失明、引擎未确认；只在实时盘面恢复 AND 一根确认引擎印后才重评估</span></div>
                <div><span className="dn-lvl-k">技术前条件</span><span className="dn-lvl-v bear">flip $60,135 重夺（TRUE——现货在上方 +0.12%）BUT D-EMA20 $62,565 / 地板 $62,643 / D-SMA20 $62,761 重夺仍 false（现货在三者下方、脚下没 MA）AND 一根确认引擎印（不真——1 多 / 6 空 / 3 中性、只有未确认水下金叉、快框云上重夺和一根再一根收的 1M TD8 buy；regime 守住均值回归）</span></div>
                <div><span className="dn-lvl-k">数据前条件</span><span className="dn-lvl-v bear">实时盘面恢复（当前 305.4h 冻）AND SM feed 活（当前死约 17.94 天）——两者都须先成立任何仓位腿才能读；这是约束块</span></div>
              </div>
              <div className="dn-gating">
                <b>硬规则：</b>没有一条活的仓位盘面就不 scout 入场。flip 重夺、多 γ 本子、
                bottom 背离、倾向反弹的 regime、未确认的水下金叉和 1M TD8 buy 在 SM /
                funding / flow 腿失明、现货仍在 D-EMA20 / 地板 / D-SMA20 下方脚下没 MA、
                引擎无确认触发时、都不触发 scout——交易台不会 size 进一根它看不见被回补的
                回补反弹。06-22 抬起、06-23 → 06-29 重关的价格块现在<em>又</em>翻 TRUE 并守住；
                操作块（盘面下）和引擎块（无确认触发）仍约束。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 宏观尾 · put-spread re-grow 闸——信用腿<em>点火</em>：HY OAS 2.83% &gt; 2.78% 闸（本切 +5.0bp、首根上方印），10Y 腿 15bp 外（4.38% vs 4.53% 闸）；信用腿现在在收盘口径上越过了它的触发</span>
              <div className="dn-trade-name">
                下行 put-spread——re-grow 信用闸<em>点火</em>（OAS 2.83% &gt; 2.78%）、利率腿 15bp 外；无对冲加（dealer 本子现在是净多 γ、近端放大器缩了，所以内生下行风险松了、即便宏观闸点火）
              </div>
              <div className="dn-thesis">
                谱系带的宏观 re-grow 闸——HY OAS &gt; 2.78% OR 10Y &gt; 4.53% 作重新长出
                一根下行尾的条件——现在在信用腿上<em>点火</em>：HY OAS{' '}
                <em>2.83%</em>、本切 +5bp、在闸上方（首根上方印、收盘口径），而 10Y 松到
                4.38%、坐在 15bp 外。所以信用腿越过了它的触发、利率腿离得远。reclaim-long
                利率筛（10Y &lt; 4.55%）在 4.38% 仍 TRUE、有余地。宏观盘面仍是一股真的
                risk-off 冲量（利率紧、信用闸点火、美元 EXTREME），但一根宏观尾不是内生兼
                risk-off 地板破位的对的工具，且 dealer 本子已翻回净多 γ、近端放大器缩了，
                所以内生下行风险松了、即便宏观闸点火——一根宏观尾现在会是拿一根点火的信用闸
                去交易一个在松的内生结构。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v bear">无仓位 · 信用闸在收盘口径<em>点火</em> · HY OAS 2.83% &gt; 2.78%（+5.0bp、首根上方印）、10Y 腿 15bp 外</span></div>
                <div><span className="dn-lvl-k">re-grow 触发（现在信用上点火）</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% 收——在 2.83% <em>点火</em>（+5.0bp）· OR 10Y &gt; 4.53% 收（当前 4.38%、15bp 触发——远得多的那根）</span></div>
                <div><span className="dn-lvl-k">reclaim-long 利率筛</span><span className="dn-lvl-v bull">10Y &lt; 4.55% 收——在 4.38% TRUE；等一根 BTC 内部转向 AND 一条实时盘面才能转换</span></div>
              </div>
              <div className="dn-gating">
                <b>注意：</b>re-grow 闸是随水位下漂设的酌情盯位、不是回测断点。信用腿现在
                印了一根收盘在上方（OAS 2.83% &gt; 2.78%）、利率腿坐在 15bp 外；一根off
                点火信用闸的下行尾会在另起的未来备忘里重评估（触发 / 失效 / R 在那里定）；
                注意 dealer 本子已翻回净多 γ、近端放大器缩了，所以内生下行结构本切松了、
                即便宏观信用闸点火——两个信号指反方向，这本身就是一个不在这里追尾的理由。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 挤压周期 hostile-2 观察名单 · 无日历先验 · ON HOLD——SM feed 死约 17.94 天、重堆签名本次读不出</span>
              <div className="dn-trade-name">
                挤压周期 hostile-2——ON HOLD（06-16 → 06-29 的延续）：SM feed 冻约 430.5h、重堆签名本次读不出
              </div>
              <div className="dn-thesis">
                挤压周期 / 重堆-hostile-2 框架把离散 SM 步（Δshort &gt; 0 + Δlong &lt; 0
                同一分钟）读成延续签名；它的日历先验（BJ 13–15 节奏）在 05-31 被证伪、此后
                作无先验观察名单跑。今天因最简单的理由无法评估：SM feed 死了。long_btc /
                short_btc / net_btc 自 2026-06-12 01:36Z 起常数（约 430.5h），所以没有 SM
                deltas 可读。06-16 备忘把这根 ON HOLD 标在约 94.5h、06-28 在约 382.5h、
                06-29 在约 406.5h；它在约 430.5h 仍 ON HOLD。{' '}
                <span className="dn-em">一根冻结的 feed 印不出签名；框架在 SM 数据恢复前
                是黑的。</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">框架状态</span><span className="dn-lvl-v bear">ON HOLD · SM feed 冻约 430.5h（自 2026-06-12 01:36Z）· 无 SM deltas 可计算</span></div>
                <div><span className="dn-lvl-k">冻结值（不是读）</span><span className="dn-lvl-v">long 13,532.4 / short 50,825.7 / net −37,293.3——逐字节常数、只为标死 feed 而带</span></div>
                <div><span className="dn-lvl-k">恢复条件</span><span className="dn-lvl-v">SM feed 恢复写新 long_btc/short_btc → 从首批新 deltas 重评估重堆签名</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>一根死 feed 不是一根安静 feed。交易台不从一根冻结三元组
                推断&ldquo;无重堆&rdquo;——它什么都不推断。挤压周期读法被暂停、不是转负，
                feed 恢复后首批新 SM deltas 是重新武装点。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件 <span className="dn-roman">VI · 实时盘面停摆仍是操作条件（第十四天）· 200W 地板破位在 06-29 周收上<em>确认</em>（$60,224.70 &lt; $62,643、−3.86%），06-15 重夺论<em>证伪</em>，地板抬到 $62,643 · flip <em>重夺</em>（现货在上方 +0.12%）、本子<em>翻回</em>+5.6M 净多 γ、近端放大器缩了（3JUL26 −4.86M）· scout 价格前条件 TRUE 但 stood down（无 MA 支撑、无确认引擎触发）· 宏观信用闸<em>点火</em>（OAS 2.83%）、regime 仍 NORMAL</span>
            </h2>

            <p>
              06-29 那些条件里：实时盘面<em>没</em>回来——又死了约 24h、现在 305.4h 冻、SM
              feed 在约 17.94 天；200W 地板破位在 06-29 周收上<em>确认</em>（$60,224.70、在
              现在 $62,643 地板下方 −3.86%）——升级<em>点火</em>、06-15 重夺论<em>证伪</em>；
              地板随 06-29 周 bar 走完抬了 $62,443 → $62,643；flip <em>重夺</em>（现货在
              flip 上方 +0.12% vs 06-29 的下方 −1.42%）因 flip 硬到 $60,135；dealer 本子
              逆转它 06-29 的再翻、从 −20.1M <em>翻回</em>+5.6M 净多 γ——它现在又阻尼下一根
              移动，近端下行放大器缩到 3JUL26 −4.86M；scout 的价格前条件翻 TRUE，但引擎只带
              未确认水下金叉、一根云上重夺和一根再一根收的 1M TD8 buy；宏观 re-grow 闸在信用
              腿上<em>点火</em>（OAS 2.83% &gt; 2.78%），而利率腿松到 4.38%（15bp 外）；相关性
              regime 守 NORMAL 因复合体仍涨跌夹杂、BTC 对 NQ 的落后扩到 −4.33pt，虽然 BTC
              不是最差的（SILVER/NVDA 跌得更多）；挤压周期在一根更死的 feed 上保持 ON HOLD。
              主导条件没变：<em>交易台仓位失明、现在进入一根在 06-29 周收上确认破位的 200W
              地板、一根已重夺的 flip、和一本已翻回净多 γ 的本子——全部它无法对盘面确认</em>。
              今天的条件围绕持续的停摆、确认的周收破位、证伪的重夺论、和净多 γ 翻回重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>实时盘面恢复（主操作）</td><td className="bull">live_db.json 恢复写 2026-06-17 06:43Z 之外的新行 AND SM 三元组从 06-12 01:36Z 冻结上更新</td><td>完整重读 funding / OI / flow / SM；只有那时 scout 或挤压周期才能评估——也只有那时 06-29 上收才能确认是需求还是空头回补；仓位维度现在已连续十二篇失明</td></tr>
                <tr><td>200W 地板——破位确认（周收）</td><td className="bear">06-29 周收 $60,224.70 结算在 $62,643 地板下方 −3.86%——升级<em>点火</em>；六根连续日收在下方（06-24 $61,051、06-25 $59,772、06-26 $60,072、06-27 $60,000、06-28 $59,550、06-29 $60,225）；未收盘 06-30 bar $60,208、下方 −3.89%</td><td>地板破位在周收层确认——地板（抬到 $62,643）现在是确认阻力；不取仓位</td></tr>
                <tr><td>200W 重夺论——证伪</td><td className="bear">06-15 重夺论要求地板一根周收守住；06-29 周收在下方证伪它——前一根 22JUN 周守（$63,990）被取代</td><td>重夺论已死；一根结构性恢复现在要求一根持续周收回到抬后的地板 $62,643 上方；盯那根周收</td></tr>
                <tr><td>flip 重夺（scout 价格前条件）——已重夺</td><td className="bull">现货 $60,208 在 flip $60,135 上方 +0.12%，但在 D-EMA20 $62,565 下方 −3.77%、地板 $62,643 下方 −3.89%；脚下没 MA；flip 落在地板下方</td><td>价格前条件<em>又</em>翻 TRUE——自 06-22 那根短暂印以来第一次——但一根 scout 仍需实时盘面恢复 AND 一根确认引擎印；失明盘面上、脚下没 MA、这根重夺是记下、不是交易</td></tr>
                <tr><td>dealer 本子——翻回净多 γ</td><td className="bull">aggregate GEX +5.6M（前 06-29 −20.1M、06-28 +5.9M）；前端是 30JUN26 0.3 DTE 在 +8.51M（正、今日约 08:00Z 结算）；近端 3JUL26 放大器缩到 −4.86M；最重负现在是远期 25SEP26 −5.41M；现货坐在 $60k −14.28M 墙上方、$60.5k +11.07M 正墙 just 头顶</td><td>dealer 本子现在又<em>阻尼</em>下一根移动——近端集中下行风险松了；只盯、无指令（本子建设性但盘面失明）</td></tr>
                <tr><td>宏观尾 re-grow（信用腿点火）</td><td className="bear">HY OAS 2.83% &gt; 2.78%（<em>点火</em>、+5.0bp、首根上方印）OR 10Y &gt; 4.53%（15bp 触发、松到 4.38%）——FX 腿硬（DXY 101.37、USD/JPY 161.93）</td><td>本篇无对冲指令——点火的信用闸会在另起的未来备忘里重评估；注意本子已翻回净多 γ、近端放大器缩了，所以内生下行结构松了、即便宏观信用闸点火</td></tr>
                <tr><td>reclaim-long 利率筛</td><td className="bull">10Y &lt; 4.55% 收——在 4.38% TRUE</td><td>独立筛真、有余地；需一根 BTC 内部转向 AND 一条实时盘面才能转成 scout long</td></tr>
                <tr><td>挤压周期 hostile-2（ON HOLD）</td><td className="stale">SM feed 死约 430.5h；无 deltas 可计算</td><td>暂停、不是转负——feed 恢复后首批新 SM deltas 重新武装</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是{' '}
              <span className="dn-signal">
                06-29 上收反弹——它把 $60k 与 0γ flip 重夺进一本多 γ 阻尼本子、宏观信用闸
                已点火、200W 破位已确认——是真需求在吸收这根确认破位、还是一根薄空头回补
                pop，只有一条恢复的盘面能说；结构一侧，恢复现在要求一根持续周收回到抬后的
                地板 $62,643 上方、以 D-EMA20 $62,565 与 D-SMA20 $62,761 作日级中途站
              </span>。06-29 再翻空的 dealer 本子已逆转并彻底翻回（aggregate −20.1M → +5.6M
              净多 γ、近端放大器缩到 3JUL26 −4.86M，现货从 flip 下方 −1.42% 到上方 +0.12%），
              所以本子现在又阻尼下一根移动；结构性正——200W 地板——现在在周收上确认破位、
              06-15 重夺论已死，交易台仍读不到那条能说出上收是需求还是空头回补的盘面。在
              盘面恢复前本篇按写好的跑：本子 flat、scout 的价格块翻 TRUE 但引擎只带未确认
              水下金叉和一根再一根收的 1M TD8 buy、宏观尾信用闸已点火（OAS 2.83%）、挤压
              周期暂停、200W 地板盯位是唯一一根活水位——现在是一根在周收上确认破位、恢复
              条件为一根周收回到 $62,643 上方的地板。价格重夺了 $60k 钉与 flip、MTF 改善
              三档，本子转多 γ、regime 守住均值回归带 bottom 背离；宏观仍 risk-off（利率紧、
              信用闸点火、美元 EXTREME）、相关性 regime 守 NORMAL 因复合体仍涨跌夹杂、BTC
              落后 NQ 但不是最差（SILVER/NVDA 跌得更多），所以破位仍既是 risk-off-盘面事件、
              也是 BTC 自有事件——而 dealer 结构又转阻尼。下一个 24h 的对读是{' '}
              <em>破位-在周收上确认、论点-证伪——尊重确认的破位，盯现货能否筑一根周收回到
              抬后的地板上方，读上收反弹是需求还是空头回补前先修盘面，且不要在失明盘面上
              scout 一根引擎无法确认的 flip 重夺</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2（已过 codex 敌对式审计 · findings 记于 audits/2026-06-30-desk-note.md）
            </span>
            <b>状态：</b>这是 <b>v2</b> 篇——<b>已过 codex 敌对式审计</b>。跨模型敌对式审计
            （codex 主审 + 拥有发布闸；ask-deepseek 数值二审、经裁定而非自动应用）对钉好的
            2026-06-30 00:06Z 快照跑；判决 <b>BLOCK-CRITICAL——1 CRITICAL、0 MAJOR、3
            MINOR</b>（见 <code>audits/2026-06-30-desk-note.md</code>）。STAGE C 对每条 finding
            用重算裁定、并在升 v1 → v2 前跑 grep-closure；每条 finding 记下搜的关键 pattern、
            修前 grep 命中、修后 grep 命中。{' '}
            <b>DN-2026-06-30-001（CRITICAL——价格前条件&ldquo;谱系第一次&rdquo;措辞）：</b>
            搜的 pattern <code>first time in the lineage</code> 与 <code>first time</code>
            横跨全 EN 文件；修前命中 = 3 条纯价格主张（lead、交易本子、决策格）+ 2 条明确
            价格-AND-γ 主张；修后那 3 条纯价格主张现读&ldquo;flipped TRUE again — first since
            the 06-22 brief print&rdquo;、修后纯价格陈旧命中 = 0。保留的 2 条是审计建议与
            价格前条件分开保留的明确&ldquo;价格与 γ 第一次都建设性&rdquo;措辞——RESOLVED。{' '}
            <b>DN-2026-06-30-002（MINOR——跨资产行数）：</b>pattern <code>168</code>；修前
            命中 = 2（manifest + prose），都改成 167 rows，修后 = 0——RESOLVED。{' '}
            <b>DN-2026-06-30-003（MINOR——BEAR 隐藏脚注里的 8h）：</b>pattern{' '}
            <code>8h / 1d</code> / <code>BEAR hid … 8h</code>；修前命中 = 1（脚注）；去掉 8h
            后 BEAR-隐藏列表读 15m / 30m / 1h / 4h / 1d（忠于源），修后 = 0——RESOLVED。{' '}
            <b>DN-2026-06-30-004（MINOR——陈旧宏观 z/episodic/delta 单元）：</b>patterns{' '}
            <code>−0.54</code>、<code>−2.04</code>、<code>−0.79</code>、<code>+1.53</code>、{' '}
            <code>−1.25</code>、<code>· episodic</code>、<code>+0.00</code>（USD/CNY Δ）；修前
            命中 = 宏观表 + prose 里的陈旧单元；按 2026-06-29 22:16Z 渲染同步（5Y5Y z −0.40
            软、10Y BE z −1.73 软——&ldquo;both episodic&rdquo; 去掉、MOVE z −0.66、USD/JPY z
            +1.57、US-JP 利差 z −1.30、USD/CNY Δ +0.01），修后陈旧宏观命中 = 0——RESOLVED。{' '}
            <b>ask-deepseek 二审（MAJOR、经裁定 REJECTED）：</b>deepseek 把 06-29 上收
            +$674.50 标成与取整日收不一致（$60,225 − $59,550 = $675.00）。重算：显示的收是
            $ 取整；精确 06-29 收 $60,224.70 减精确 06-28 收 $59,550.20 = +$674.50，且 codex
            独立对 parquet OHLC 核实了 +674.50。deepseek 的差用了取整输入——假阳性、无改动。{' '}
            <b>总体：</b>所有 CRITICAL + MINOR findings RESOLVED（每条 grep 修后 = 0），{' '}
            <b>已过 codex 敌对式审计</b>，升 v1 → v2。{' '}
            <b>Build note（INFO）：</b>本服务器跑 Node 18.19.1；完整{' '}
            <code>next build</code> 在 Node 版本闸上被环境阻塞（谱系），所以{' '}
            <code>npx --no-install tsc --noEmit</code> 是 build proxy——STAGE E 拥有最终
            build 验证。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体情况个性化。数字
            反映单一原子快照（2026-06-30 00:06Z）、provenance 在上方数据来源条带中按节披露；
            <em>关键地、快照时实时衍生品盘面已冻 305.4h（最末行 2026-06-17 06:43Z）、
            smart-money 仓位 feed 死了约 17.94 天</em>，所以所有 funding、OI、flow 与仓位
            数字都明确是最后已知 / 陈旧或不可计算并已标注；宏观面板渲染 2026-06-29 22:16Z
            （比快照早约 1.85h）。价格、MTF、GEX 与跨资产是新的。本篇是 v2、已过 codex
            敌对式审计——findings 已裁定并应用。水位、规模与条件是交易台流程的示例、不是
            长期推荐。过去的相关性、γ 与仓位模式不绑定未来盘面。衍生品有全损风险、加杠杆下
            损失可超过保证金。<em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                破位在周收上确认（06-29 $60,224.70 &lt; $62,643）、06-15 重夺论死了——但
                盘面反弹进它：06-29 上收重夺了 $60k 与 0γ flip，dealer 本子翻回 +5.6M 净多
                γ，近端放大器缩了——全部透过一条死掉的盘面读、第十四天。地板在周收上破。
                论点证伪。本子多 γ。flip 重夺。失明。
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
            v2 · 2026-06-30 00:06Z 快照 · 已过 codex 敌对式审计 ·
            sources: live_db.json（FROZEN 305.4h）· mtf_div_latest.html · btc_gex.html ·
            macro_dashboard.html · cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
