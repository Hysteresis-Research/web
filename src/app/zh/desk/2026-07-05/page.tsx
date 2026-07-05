import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-07-05 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-07-05',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-07-05' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260705() {
  await requireViewer('/zh/desk/2026-07-05');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-07-05 · v2</span>
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
              <span className="dn-big">$63,048.50</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.69%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-07-05 00:05Z ·{' '}
              <span className="dn-em">
                反弹在日收口径重夺了地板——07-04 日线收阳 +$549.30 到 $63,114.80、
                是连续第四根上收、并做成了这一轮之前没一根做到的事：它是<b>第一根</b>
                重新收在 $62,643 200W 地板<b>上方</b>的日收（+0.75%）、终结了连续
                十根收在地板下的记录（06-24 → 07-03）。未收盘的 07-05 bar $63,048.50
                坐在地板上方 +0.65%、而谱系里第一次有<b>三根 MA</b>压在现货脚下——
                D-SMA20 $62,017（+1.66%）、D-EMA20 $62,330（+1.15%）与 200W 地板 /
                W-SMA200 $62,643（+0.65%）本身——所以地板从头顶阻力翻成了现货脚下的
                支撑。dealer 本子再加深到 +110.2M 净多 γ（07-04 是 +88.1M——这一轮
                最深、阻尼更狠）、近端 7JUL26 下行放大器<b>缓和</b>到 −5.12M
                （07-04 是 −8.22M）、$60k 看跌墙也缓和到 −16.69M（07-04 是
                −21.49M）、前端是 5JUL26 0.3 DTE +23.93M（约今日 08:00Z 结算）。
                现货坐在 flip $61,405 上方 +2.68%（07-04 是 $61,296 上方 +2.20%）。
                但 MTF 引擎<b>翻回</b>5/9 周期反转 regime（JT&lt;0、从 07-04 的趋势
                延续）、标题弱化到 4 多 / 3 空 / 3 中、快框架 30m / 1h 从金叉<b>滚成
                死叉</b>（1h 一根水上死叉刚印）、而引擎<b>仍</b>带<b>两根</b>⚡TD9
                SELL（4h 加 8h）就在高位、带 15m / 1h 顶背离——一个进重夺的持续
                做顶签名——被一根 1M ⚡TD9 BUY 与一簇底背离（8h / 12h / 1d）抵消。
                200W 破位仍<b>确认</b>（06-29 周收 $60,224.70 &lt; $62,643）、06-15
                重夺论仍<b>被证伪</b>、但一次结构性恢复——一根持续的周收重回 $62,643
                上方——现在离它<b>第一次</b>真结算测试只约 1 天（未收盘的周结 07-06
                bar 读在地板上方、周一 07-06 收盘）。跨资产仍<b>特异</b>
                （mean |r| 0.193、~不变）、BTC 7d 回报 +5.01% <b>领先</b> NQ +2.21%
                达 +2.80pt、领先 SP500 +2.30% 达 +2.71pt、BTC 现在是复合里第 6
                （07-04 是第 9）。宏观守住：HY OAS 2.75% 仍在 2.78% re-grow 闸
                <b>下</b>（未点、距 3bp）、10Y 守 4.48%（距 4.53% 5bp）、DXY 守
                <b>极端</b>100.86（MOVE 本次不可用）。全部透过一条死的衍生品盘面读
                ——现已进第十九个日历日——OKX 监控冻结 425.4h、SM feed 死 ~22.94 天。
                交易台把日收重夺地板与第三根 MA 压到脚下读成谱系带过最建设性的一次
                转向——但在一条瞎盘面上它仍无法确认成需求、引擎翻回周期反转、快
                框架滚翻、两根 TD9 SELL 仍在高位闪、且这次恢复是一根仍确认的周破位
                内的一次日收重夺、直到一根周收印在地板上方。
              </span>
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 末行 2026-06-17 06:43Z（t = &ldquo;06-17 14:43&rdquo; BJ）</td>
                  <td className="dn-flag">
                    <b>冻结</b> · live_db.json 自 2026-06-17 06:43Z 起没再写过新行
                    （文件 mtime 06-17 06:43:08Z 佐证）；进程状态在本次未存档 / 未
                    核验——现<b>陈旧 425.4h</b>（07-04 备忘是 401.4h、07-03 是
                    377.4h——断线自上一篇又跑了约 24h、进第十九个日历日）。funding /
                    OI / CVD / basis / retail / taker-flow 都是 06-17 06:43Z 的
                    <b>last-known</b>、不是当前值。SM 子 feed（long_btc / short_btc /
                    net_btc）冻得更久——自 2026-06-12 01:36Z 起恒定（~550.5h /
                    ~22.94 天）；SM net 与 SM cut-fraction 本次<b>不可计算</b>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-07-05 00:01Z scan</td>
                  <td className="dn-flag">
                    最新（较锚早约 4 分钟）· 滚动 latest 文件、逐字存档于
                    /opt/desk-note/snapshots/2026-07-05-0008/ · 含未收盘 K 线 ·
                    扫描现货 $63,057、24h +0.76%、24h H/L $63,450 / $62,303、
                    qVol $5.01B
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-05 00:00 UTC 面板（mtime 00:00:39Z）</td>
                  <td className="dn-flag">
                    最新（较锚早约 5 分钟）· Deribit idx $63,354（比 parquet 现货
                    $63,048.50 高 $305）· 918 合约 · net GEX <b>+110.2M</b>（净多 γ、
                    从 07-04 的 +88.1M <b>加深</b>——这一轮最深）· flip $61,405
                    （现货 +2.68% 在<b>上方</b>、从 07-04 的 +2.20%）· 前端是
                    5JUL26 0.3 DTE <b>+23.93M</b>（正、约今日 08:00Z 结算）、而一根
                    近端下行放大器<b>缓和</b>到{' '}
                    <b>7JUL26 2.3 DTE −5.12M</b>（07-04 是 −8.22M）——最重的正天花板
                    是 <b>$63.5k +20.98M</b>、看跌墙缓和到 <b>$60k −16.69M</b>
                    （07-04 是 −21.49M）· 现货 $63,048.50 坐在 200W 地板 $62,643
                    上方、在 $63k +19.59M 与 $63.5k +20.98M 天花板之间 · IV 中位
                    41.9% · P/C 0.57（Call OI 229,614 / Put OI 129,788）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-05 00:00Z
                  </td>
                  <td className="dn-flag">最新 · 7d 1h bar · 22 资产 · 167 rows · regime 特异（mean |r| 0.193、较 07-04 的 0.192 <b>~不变</b>——BTC 稳在 0.25 特异阈下、且它 7d 回报 +5.01% <b>领先</b> NQ +2.21% 达 +2.80pt、领先 SP500 +2.30% 达 +2.71pt；BTC 已从第 9 爬到复合里第 6）</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-04 22:16Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.82h（周末——较 07-04 几乎没变）· 10Y <b>4.48%</b>
                    （+4.0bp、距 4.53% 闸 5bp）、TIPS <b>2.25%</b>（+5.0bp、极端
                    RISK-OFF）、HY OAS <b>2.75%</b>（+1.0bp——仍在 2.78% re-grow 闸
                    <b>下</b>、闸仍不点、距 3bp）· MOVE 债波 <b>本次不可用</b>
                    （抓取失败）· FX 腿：<b>DXY 100.86</b>（−0.00 日、仍极端）与
                    <b>USD/JPY 161.34</b>（−0.11 日）· Fed 净流动性 $5.843T
                    （源面板 delta +0.053T、源标紧 / episodic）· NFCI 中性
                    （陈旧 8d）· WTI $71.9（陈旧 ~5d）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-07-05 00:05Z（close $63,048.50）</td>
                  <td className="dn-flag">
                    新鲜 K 线（交易所 OHLC、独立于冻结的 live 盘面）· 偏移按
                    parquet 最末 bar close 重算、是 live 盘面冻结下能拿到的最新
                    现货 · 显示的周线阶梯用 2023→ 子集（183 根周 bar）、所以无
                    W-SMA200 行（W-EMA200 $67,509 从可用历史 seed）；200W 地板
                    从全历史 glob 直接重算——<b>356 根收盘周 W-MON bar</b>
                    （2019→今、含已结算的 06-29 周、不含未收盘的 07-06 周）——
                    = <b>$62,643</b>、较 07-04 <b>不变</b>。<b>谱系里第一次有三根
                    MA 压在现货脚下——D-SMA20 $62,017（+1.66%）、D-EMA20 $62,330
                    （+1.15%）与 200W 地板 / W-SMA200 $62,643（+0.65%）——地板从
                    头顶阻力翻成现货脚下的支撑</b> · weekly_200sma.json 本次
                    缺、所以比值分位 / last-event 留作未溯源、不杜撰
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
              <span className="dn-v bear">−7.24%（陈旧 · 06-17 06:43Z · 425.4h）</span>
              <span className="dn-src">live_db 原始 funding −0.006608 × 1095 = −7.24% ann（不 ×100）· 06-17 06:43Z 冻结点的 last-known、现陈旧 425.4h、非当前读 · 与 06-19 → 07-04 备忘逐字同一根冻结行；冻结前 24h+1m 含端采样窗（1,442 行）的 last-available ann 均值 +0.20%、区间 −7.24% / +7.21%、819 / 1,442 行负——盘面死时是一本平衡的双向本子</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 对 07-04</span>
              <span className="dn-v">盘面冻结——不可计算</span>
              <span className="dn-src">live 盘面自 06-17 06:43Z 起没再写、所以仍没有当前 funding 去对 07-04 备忘作差 · 冻结点 last-known 印是 −7.24% ann（空付多）；杠杆门连续第十九天不可评估</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−468 BTC（−0.45%）· 陈旧窗</span>
              <span className="dn-src">live_db oi_btc 102,945 在 06-17 06:43Z 冻结点 对一根 24h+1m 含端采样窗（1,442 行）起点 · 窗<b>止于</b>冻结、不是进 00:05Z 快照——它描述的是到 06-17 06:43Z 的盘面、陈旧 425.4h</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bear">59.47 / 40.53 · 陈旧</span>
              <span className="dn-src">live_db `mkt_long_pct` 在 06-17 06:43Z 冻结点（24h+1m 含端采样窗起点是 58.29%——滚动进去 +1.18pt 加多）· last-known、陈旧 425.4h</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">−37.29k · FEED 死 ~550.5h</span>
              <span className="dn-src">long 13,532.4 − short 50,825.7 · 这一组三元自 2026-06-12 01:36Z 起逐字恒定（~550.5h / ~22.94 天）——是一根<b>冻结值</b>、不是当前仓位读；只为标记死 feed 而带</span>
            </div>
            <div>
              <span className="dn-k">SM Δ / cut fraction</span>
              <span className="dn-v">不可计算</span>
              <span className="dn-src">SM feed 冻结 ~22.94 天 · |Δ| / prior_net 无法算——没有当前 SM net 去作差 · 挤压周期 / 重堆框架本次瞎、是 06-16 → 07-04 ON-HOLD 的延续</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">41.9% / 34.58%</span>
              <span className="dn-src">GEX 918 合约 IV 中位数（00:00Z、最新）对 parquet 30D 收对收 RV 34.58%——链层丰度较已实现 ~+7.32pt（07-04 是 ~+4.05pt——RV 比 IV 跌得更快、丰度走阔）；RV 走弱（07-04 是 38.05%、替代 29-return 窗读 35.16%）· IV 是 918 合约链中位数、不是可交易价差</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+2.68%（在上方 · 延伸）</span>
              <span className="dn-src">flip $61,405（前 $61,296 · +$109）· 对 parquet 现货 $63,048.50（63,048.50 / 61,405 − 1 = +2.676%）/ GEX 文件 Deribit idx $63,354（63,354 / 61,405 − 1 = +3.174%、文件读 +3.2%）——两参考都在 flip 上方、从 07-04 的 +2.20% <b>延伸</b> · net GEX +110.2M（净多 γ、从 +88.1M <b>加深</b>——这一轮最深）· 一根近端下行放大器<b>缓和</b>（7JUL26 2.3 DTE −5.12M、07-04 是 −8.22M）、前端 5JUL26 读 +23.93M</span>
            </div>
          </div>
          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                反弹在日收口径重夺了地板——07-04 日线收阳 +$549.30 到 $63,114.80、
                是连续第四根上收、也是<b>第一根</b>重新收在 $62,643 地板上方的日收
                （+0.75%）、终结了连续十根收在下的记录、而未收盘的 07-05 bar
                $63,048.50 坐在地板上方 +0.65%、脚下第一次有<b>三根 MA</b>
                （D-SMA20 / D-EMA20 / 200W 地板本身）。dealer 本子再加深到 +110.2M
                净多 γ——这一轮最深——近端 7JUL26 放大器缓和到 −5.12M、$60k 看跌墙
                缓和到 −16.69M；现货推到 flip 上方 +2.68%。但 MTF 引擎<b>翻回</b>
                5/9 周期反转 regime、标题弱化到 4/3/3、快框架 30m / 1h 从金叉滚成
                死叉、而它<b>仍</b>印出<b>两根</b>⚡TD9 SELL（4h 加 8h）就在高位、
                带 15m / 1h 顶背离——一个进重夺的持续做顶签名。全部透过一条死的
                衍生品盘面读、进第十九个日历日
              </span>
              。现货报{' '}
              <span className="dn-tag bull">$63,048.50、24h +0.69%</span> 在 00:05Z
              parquet bar（MTF 扫描按它自己窗读 +0.76%）、从 07-04 备忘现货
              $62,646.80 抬上来——谱系把反弹从试地板带到收在它上方。200W
              破位仍{' '}
              <span className="dn-tag bear">在 06-29 周收 $60,224.70 确认、地板
              $62,643 下 −3.86%</span>、06-15 重夺论仍被证伪、地板本次不变
              （$62,643、06-29 周五个 cut 前已结算）。连续十根收在地板下
              （06-24 $61,051 −2.54% 到 07-03 $62,565.50 −0.12%）现让位给{' '}
              <span className="dn-tag bull">07-04 $63,114.80 +0.75%、一根上收
              +$549.30、连续第四根、也是第一根重回地板上方</span>——四根上收把
              现货抬过了线。谱系里第一次现货脚下有<b>三根 MA</b>——{' '}
              <span className="dn-tag bull">D-SMA20 $62,017（+1.66%）、D-EMA20
              $62,330（+1.15%）与 200W 地板 $62,643（+0.65%）</span>现在是支撑。
              dealer 本子{' '}
              <span className="dn-tag bull">加深到 +110.2M 净多 γ</span>、前端 5JUL26
              是 +23.93M、而{' '}
              <span className="dn-tag bull">近端 7JUL26 放大器缓和到 −5.12M</span>{' '}
              （07-04 是 −8.22M）；现货坐在 $63k +19.59M 与 $63.5k +20.98M 天花板
              之间、在缓和后的 $60k −16.69M 看跌墙上。MTF 标题弱化到{' '}
              <span className="dn-tag">4 多 / 3 空 / 3 中</span>（从 4/5/1）、regime
              分类器{' '}
              <span className="dn-tag bear">翻回 5/9 周期反转（JT&lt;0）</span> 从趋势
              延续——快框架 30m / 1h 从金叉滚成死叉、而引擎仍带{' '}
              <span className="dn-tag bear">两根 ⚡TD9 SELL（4h 加 8h）在高位</span>、
              带 15m / 1h 顶背离、一个持续的超买签名。宏观在利率上守、信用上松：
              10Y 守 4.48%（距闸 5bp）、HY OAS +1bp 到 2.75%（仍在 2.78% re-grow
              闸<b>下</b>——闸不点、距 3bp）、DXY 守 100.86 极端。{' '}
              <span className="dn-em">
                作业事实不变、仍具约束：OKX 监控现已冻结 425.4h（末行 2026-06-17
                06:43Z）、funding / OI / CVD / basis / retail 都是 last-known 且
                陈旧、SM 仓位本子死 ~22.94 天——SM net 与 cut-fraction 不可计算。
                第四根上收在日收口径重夺地板、并谱系里第一次把第三根 MA 摆到脚下、
                gamma/价格图是谱系带过最建设性的——但那条会告诉你这是需求还是薄
                回补的盘面仍然是死的、引擎翻回周期反转、快框架滚翻、两根 TD9 SELL
                仍在高位闪。读法只落在价格、gamma 和 MTF 上。
              </span>{' '}
              本子保持 flat：破位已在周收口径确认、重夺论已死、把地板日收重夺的
              这根反弹——尽管一切都在改善——在一条瞎盘面上无法确认、且现在被高位
              两根超买反转印迎头撞上、regime 翻回均值回归。scout 的价格前置条件
              保持<b>真</b>并<b>加强</b>（现货 flip 上方 +2.68%、三根 MA 在脚下、
              在地板上方）、但 scout 保持按兵。无空、无 scout、无新对冲。
            </p>
            <p>
              BTC 报 <span className="dn-tag">$63,048.50</span> 在 parquet 最末 bar
              （00:05Z）、{' '}
              <span className="dn-tag bull">+0.69%</span> 在 24h（对约 24h 前的
              $62,617 bar；MTF 扫描按它自己 00:01Z 窗读 +0.76%——这道差是参考窗、
              不是数据冲突）、在一条{' '}
              <span className="dn-tag">$63,450 / $62,303</span> 的 24h 区间里
              （按 MTF 扫描 H/L）。Deribit index 00:00Z 读 $63,354、MTF 扫描
              现货是 $63,057——所以最新现货在三个独立新鲜源上互证得很好
              （parquet K 线 $63,048.50、GEX Deribit index $63,354、MTF 扫描
              $63,057）、即便平时供它的 live_db 盘面冻在 06-17 06:43Z、陈旧
              425.4h。{' '}
              <span className="dn-signal">结构读法从一根确认破位 + 反弹<b>带到
              地板</b>（07-04 备忘）、走到同一根确认破位、反弹现<b>在日收口径
              重夺地板</b>——07-04 日收 $63,114.80 是连续第四根上收（+$549.30）、
              也是这一轮第一根重新收在 $62,643 地板上方的、而未收盘 07-05 bar
              $63,048.50 守在它上方 +0.65%、脚下现有第三根 MA</span>
              ：22JUN 周收 $63,990 是最后一根周线守、日收沿线走下（06-22 →
              06-28）、06-29 周线 bar 收 $60,224.70 在地板下确认破位、06-30 →
              07-04 弹了五根（06-30 bar 最深、−6.45%）、最后四根上收把现货抬回
              线上。按框架破位在周收口径确认、06-15 重夺论被证伪；本次没有任何
              东西撤销这点——一根日收重夺不是那次恢复、恢复要一根周收重回地板
              上方。{' '}
              <span className="dn-em">
                谱系唯一那根结构正在周收口径破了、重夺论已死；但现货现在脚下有
                三根 MA、并在日收口径收回地板上方、本子深净多 γ——谱系带过最建设性
                的 gamma/价格图、也是第一次一次结构性恢复（一根周收重回 $62,643
                上方）离它第一次真结算测试只约 1 天（未收盘的周结 07-06 bar 读在
                地板上方、周一 07-06 收盘）。交易台把它读成一次它还无法在瞎盘面上
                确认成需求的真改善、而引擎已翻回周期反转、两根超买反转印仍在高位闪。
              </span>
            </p>
            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · LIVE 盘面冻结 425.4h（第十九天）· SM 本子死 ~22.94 天 · funding/OI/flow last-known 陈旧 · 07-04 的上收在日收口径重夺地板、并把第三根 MA 摆到脚下、但交易台仍看不见这是需求在消化破位、还是薄回补——仓位盘面是黑的</span>
            </h2>

            <p>
              <span className="dn-signal">
                本篇最重要的那个源——live 衍生品盘面——仍然是死的、连续
                第十九个日历日
              </span>
              。OKX 监控自{' '}
              <span className="dn-tag bear">2026-06-17 06:43Z</span>（t = &ldquo;06-17
              14:43&rdquo; BJ；文件 mtime 06-17 06:43:08Z 佐证写入停在那；进程
              状态本次未存档或核验、所以本篇断言的是缺失的盘面、不是一个
              live/挂起的进程）起没再往 live_db.json 追加过行。那现在是{' '}
              <span className="dn-tag bear">425.4h 的缺失盘面</span>、对 00:05Z
              快照锚——06-20 备忘在 65.4h 标它、06-27 在 233.4h、06-30 在
              305.4h、07-04 在 401.4h、断线又跑了约 24h 没写。live 盘面带的一切
              ——funding、持仓、现货/期货 CVD、perp basis、retail 多%、taker-net、
              大单 flow、攻击方偏斜——因此都是{' '}
              <span className="dn-em">06-17 06:43Z 的 last-known、非当前</span>。
              聪明钱仓位三元（long_btc / short_btc / net_btc）逐字恒定——{' '}
              <span className="dn-tag">13,532.4 / 50,825.7 / −37,293.3</span>——自{' '}
              <span className="dn-tag bear">2026-06-12 01:36Z</span>、~550.5h
              （~22.94 天）。06-16 备忘在 ~94.5h 标了这根死 feed、把挤压周期
              ON HOLD；07-04 备忘带它到 ~526.5h；今天是 ~550.5h、仍死。{' '}
              <span className="dn-em">
                SM net 作为当前读不可计算、SM cut fraction（|Δ| / prior_net）
                无法构成——没有当前 SM net 去作差。本篇任何仓位主张都明确是
                历史的、不是 live 的。
              </span>
            </p>

            <p>
              为完整起见、<em>last-available</em> 的盘面读数——全部钉在 06-17
              06:43Z 冻结点、现陈旧 425.4h、且与 06-19 → 07-04 备忘逐字同一批
              读数（因为是同一根冻结行）——是：funding{' '}
              <span className="dn-tag bear">−7.24% ann</span>（原始 −0.006608 ×
              1095；冻结点空付多）、last-available 路径在 24h+1m 含端采样窗上
              平衡双向（1,442 行：均值{' '}
              <span className="dn-tag">+0.20% ann</span>、区间{' '}
              <span className="dn-tag">−7.24% / +7.21%</span>、819 / 1,442 行
              负）；OI{' '}
              <span className="dn-tag bear">102,945 BTC、尾随 24h+1m 窗 −468
              （−0.45%）</span>；retail{' '}
              <span className="dn-tag">mkt_long_pct 59.47%</span>（同窗 +1.18pt
              加多）；perp basis{' '}
              <span className="dn-tag bear">−$57.43 折价</span>对现货。{' '}
              <span className="dn-em">
                把它读成一枚近三周旧的指纹、不是信号：一本双向 funding 本子、
                OI 在泄、retail 在第一程弱势里加多。没有一项能带进 00:05Z 快照
                ——它早于整个 06-18 → 06-22 地板守序列、06-23 → 06-28 收破地板
                那程、06-29 周收确认、06-30 反掉、以及 07-01 → 07-04 四根 session
                在日收口径重夺地板的反弹、所以它对这根重夺地板的反弹是空头回补
                耗尽还是需求消化破位什么都没说。交易台把仓位维度当未知、把这根
                日收重夺当仓位未确认。
              </span>
            </p>
            <h2 className="dn-sec">
              结构 <span className="dn-roman">II · 价格/MTF 最新 · 多 TF 共振混合 4 多 / 3 空 / 3 中（从 4/5/1 <b>弱化</b>两档——快框架 30m/1h 从金叉滚成死叉）· 净读高 TF 混合 · 短周期反弹<b>转弱</b> · 快框架 15m/30m/1h 死叉（1h 水上刚印）、中段 4h/8h 水下金叉但带两根 ⚡TD9 SELL 在高位、配 15m/1h 顶背离 · 1M TD9 buy 仍印 · regime <b>翻回</b> 5/9 周期反转（JT&lt;0）· 谱系里第一次<b>三根</b> MA 压在现货脚下（D-SMA20 / D-EMA20 / 200W 地板）、现货在日收口径收回 $62,643 地板上方、破位仍在周收确认但恢复离第一次结算测试约 1 天</span>
            </h2>

            <p>
              <span className="dn-signal">
                MTF 图最新、标题弱化两档（4 多 / 3 空 / 3 中、快框架 30m/1h 从
                金叉滚成死叉）、中段框架（4h/8h）仍守水下金叉、regime 分类器翻回
                周期反转——而引擎<b>仍</b>印出两根 ⚡TD9 SELL（4h 加 8h）就在高位、
                带 15m / 1h 顶背离、一个持续的超买反转签名
              </span>
              ——这一维、与 dealer 图一起、是交易台今天仍能信的一维、本次它读成
              进重夺的做顶张力、即便现货守在地板上方。00:01Z 扫描标{' '}
              <span className="dn-tag">4 多 / 3 空 / 3 中、跨 10 框架</span>、
              净读 <em>高时间框混合 · 短周期反弹转弱</em>——从 07-04 扫描的 4/5/1
              弱化、因快栈滚翻。regime 行读{' '}
              <span className="dn-tag bear">5/9 周期反转 / 均值回归 regime（JT&lt;0）</span>
              （07-04 是 5/9 趋势延续）、所以分类器从趋势延续翻回均值回归——引擎
              现在靠向对抗这次延伸。建设性框架是{' '}
              <span className="dn-tag">4h / 8h / 1M</span>——4h 与 8h 云上、带水下
              金叉（8h 从云内重夺回云上）、1M 云上（印 TD9 buy）——而 12h → 1w 仍
              云下偏空。本次那根印是做顶签名：{' '}
              <span className="dn-tag bear">快框架 30m / 1h 从金叉滚成死叉（1h
              一根水上死叉刚印）</span>、以及{' '}
              <span className="dn-tag bear">两根 ⚡TD9 SELL 持续在 4h 加 8h（超买
              反转提示、就在高位）</span>、带{' '}
              <span className="dn-tag bear">15m / 1h 顶（看空反转）背离</span>——
              动量从高位翻下、在快框架上、而中段守着。建设性侧：{' '}
              <span className="dn-tag">4h / 8h 水下金叉（21 / 11 bar）、12h / 1d
              仍水下金叉（7 / 4 bar）</span>——全是未确认的水下试探——而高框架
              （12h → 1w）仍云下、{' '}
              <span className="dn-tag bear">1w 带一根水下死叉（1 bar）</span>。
              云：15m / 30m / 1h / 4h / 8h / 1M 云上、12h → 1w 云下。那建设性
              集合是{' '}
              <span className="dn-tag">中段水下金叉、一根 1M TD9 buy、以及 8h /
              12h / 1d 底（看多反转）背离（一簇高 TF 底背离）</span>——对着快框架
              死叉、两根持续 TD9 SELL 与高位 15m / 1h 顶背离摆着。{' '}
              <span className="dn-em">
                直读：框架栈弱化两档、regime 翻回周期反转、快框架从金叉滚成死叉
                ——所以短周期反弹在快框架上转弱、即便现货守在地板上方。在高位、
                200W 地板在周收确认破但现货现在收回它上方（+0.65%）、三根 MA 在
                脚下、引擎的建设性印（中段金叉、1M TD9 buy、底背离簇）被两根持续
                超买反转印与一次快框架滚翻抵消——所以没有一个干净的多框架转向去
                做多这次重夺、也是一个不信任这些位置延伸的理由、趋势框架让位给
                均值回归。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">63,062</td><td className="num neut">47.1</td><td className="bear">死叉（水上）15b</td><td className="bull">云上 ↓62.9k 45b</td><td>Sell 1</td><td>BEAR hid · BEAR reg（顶）· BULL hid</td></tr>
                <tr><td>30m</td><td className="num">63,058</td><td className="num">53.1</td><td className="bear">死叉（水上）3b</td><td className="bull">云上 ↓62.6k 165b</td><td>Buy 4</td><td>BULL hid</td></tr>
                <tr><td>1h</td><td className="num">63,058</td><td className="num">60.5</td><td className="bear">死叉（水上）刚印</td><td className="bull">云上 ↓62.2k 81b</td><td>Buy 2</td><td>BEAR reg（顶）· BULL hid</td></tr>
                <tr><td>4h</td><td className="num">63,058</td><td className="num">67.5</td><td className="bull">金叉（水下）21b</td><td className="bull">云上 ↓61.8k 10b</td><td className="bear">⚡TD9 SELL</td><td>—</td></tr>
                <tr><td>8h</td><td className="num">63,058</td><td className="num neut">64.7</td><td className="bull">金叉（水下）11b</td><td className="bull">云上 ↓62.6k 2b</td><td className="bear">⚡TD9 SELL</td><td>BEAR hid · BULL reg（底）</td></tr>
                <tr><td>12h</td><td className="num">63,058</td><td className="num neut">59.5</td><td className="bull">金叉（水下）7b</td><td className="bear">云下 ↑63.7k 87b</td><td>Sell 7</td><td>BULL reg（底）</td></tr>
                <tr><td>1d</td><td className="num">63,058</td><td className="num neut">49.6</td><td className="bull">金叉（水下）4b</td><td className="bear">云下 ↑68.5k 34b</td><td>Sell 4</td><td>BULL reg（底）</td></tr>
                <tr><td>3d</td><td className="num">63,057</td><td className="num bear">41.4</td><td className="neut">—</td><td className="bear">云下 ↑70.6k 11b</td><td>Sell 1</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">63,058</td><td className="num bear">37.5</td><td className="bear">死叉（水下）1b</td><td className="bear">云下 ↑99.5k 22b</td><td>Buy 7</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">63,050</td><td className="num bear">43.3</td><td className="neut">—（DIF 水上）</td><td className="bull">云上 ↓47.0k 29b</td><td>TD9 BUY</td><td>BULL reg（底）</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 00:01Z scan（08:01 北京；滚动 latest
                    文件、逐字存档于 /opt/desk-note/snapshots/2026-07-05-0008/）。
                    净读 <em>高时间框混合 · 短周期反弹转弱（4 多 / 3 空 / 3 中）</em>；
                    regime <em>5/9 周期反转 / 均值回归 regime（JT&lt;0）</em>；活跃
                    背离 <em>反转：顶背离 15m / 1h、底背离 8h / 12h / 1d；隐藏
                    （延续）：BEAR hid 15m / 8h、BULL hid 15m / 30m / 1h</em>。
                    头部告警：<em>⚡4h TD9 SELL @$63,058 与 ⚡8h TD9 SELL @$63,058
                    双双持续——超买反转提示（就在高位）</em>、<em>⚡1M TD9 BUY
                    @$63,050——超卖反转提示</em>、<em>1w 水下死叉（1 bar 前、DIF
                    −5,878.7）</em>、<em>1h 水上死叉刚印（DIF +246.9）</em>。扫描
                    现货 $63,057、24h +0.76%、24h H/L $63,450 / $62,303、qVol
                    $5.01B。收盘为未收盘 K 线；每个值在各周期收盘前都按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              MA 矩阵走出谱系第二次结构性转向：第四根上收把现货推上 200W 地板
              本身、所以这一轮第一次{' '}
              <span className="dn-tag bull">三根 MA 压在现货脚下——D-SMA20 $62,017
              （+1.66%）、D-EMA20 $62,330（+1.15%）与 200W 地板 / W-SMA200 $62,643
              （+0.65%）现在是支撑</span>、地板从头顶阻力翻成现货脚下的支撑。然后
              墙往上退回头顶——周期代理{' '}
              <span className="dn-tag bear">D-EMA50 $65,801（−4.18%）</span>、然后{' '}
              <span className="dn-tag bear">D-SMA50 $66,782（−5.59%）</span>、然后{' '}
              <span className="dn-tag bear">W-EMA200 $67,509（−6.61%、种子）</span>、
              然后一道密的头顶带：{' '}
              <span className="dn-tag bear">D-EMA100 $69,540（−9.34%）</span>、{' '}
              <span className="dn-tag bear">D-SMA150 $70,289（−10.30%）</span>、{' '}
              <span className="dn-tag bear">D-SMA100 $70,973（−11.17%）</span>、{' '}
              <span className="dn-tag bear">W-SMA20 $71,010（−11.21%）</span>、{' '}
              <span className="dn-tag bear">D-EMA150 $72,726（−13.31%）</span>、{' '}
              <span className="dn-tag bear">W-EMA20 $73,157（−13.82%）</span>、{' '}
              <span className="dn-tag bear">W-EMA150 $74,028（−14.83%）</span>、{' '}
              <span className="dn-tag bear">D-SMA200 $74,720（−15.62%）</span>、{' '}
              <span className="dn-tag bear">D-EMA200 $75,641（−16.65%）</span>、{' '}
              <span className="dn-tag bear">W-SMA150 $75,659（−16.67%）</span>。更高
              更远、已弃用：W-EMA100 $80,558（−21.73%）、W-EMA50 $81,781
              （−22.91%）、W-SMA100 $88,461（−28.73%）、W-SMA50 $89,797
              （−29.79%）。{' '}
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-07-05 00:05Z（close $63,048.50）；
                偏移按那同一根最末 bar close 重算、是 live 盘面冻结下能拿到的
                最新现货。显示的 MA 水位按 $ 取整、偏移用精确序列值算。显示的
                周线阶梯用 2023→ 子集（183 根周 bar）、所以 W-SMA200 那里不可
                计算、W-EMA200 $67,509 从可用历史 seed；200W 地板 $62,643 从
                全历史 glob 另算（356 根收盘周 W-MON bar、含已结算的 06-29 周、
                不含未收盘的 07-06 周——较 07-04 不变）。日线收盘：06-22 $63,990
                （= 22JUN 周收）、06-23 $62,697、06-24 $61,051（首根收破地板）、
                06-25 $59,772、06-26 $60,072、06-27 $60,000、06-28 $59,550、
                06-29 $60,224.70（确认破位的周收）、06-30 $58,605.40（这一轮
                最深、−6.45%）、07-01 $59,999.60（上收 +$1,394.20）、07-02
                $61,540.60（上收 +$1,541.00）、07-03 $62,565.50（第十根收在下、
                −0.12%）、07-04 $63,114.80（一根上收 +$549.30——连续第四根、也是
                第一根重回地板上方、+0.75%）、07-05（未收盘、5 分钟 bar）
                $63,048.50（地板上方 +0.65%）——地板破位仍在周收确认、反弹已在
                日收口径重夺地板、脚下现有三根 MA。
              </span>
            </p>
            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子再加深到净多 γ aggregate +110.2M（07-04 是 +88.1M、07-03 是 +60.7M）——这一轮最深、本子把下一步阻尼得更狠 · 前端是 5JUL26 0.3 DTE +23.93M（约今日 08:00Z 结算）、而近端下行放大器<b>缓和</b>到 7JUL26 2.3 DTE −5.12M（07-04 是 −8.22M）· flip 台阶 $61,296 → $61,405、现货推上方 +2.68% · 最重天花板 $63.5k +20.98M（就在头顶）、看跌墙缓和 $60k −16.69M（07-04 是 −21.49M）· IV 41.9% · P/C 0.57</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子再加深它的净多 γ 姿态到这一轮最深：aggregate γ 从
                +88.1M 升到 +110.2M 净多 γ、所以本子把下一步阻尼得更狠、flip 重夺
                随现货推得更高而走阔、近端 7JUL26 放大器<b>缓和</b>、看跌墙也
                <b>缓和</b>——谱系带过最建设性的 gamma 背景
              </span>
              。aggregate GEX 是{' '}
              <span className="dn-tag bull">+110.2M / 1%</span>（07-04 是 +88.1M、
              07-03 是 +60.7M、07-02 是 +12.0M）；本子近几篇里空 → 多 → 更深多 →
              更深、现在坐这一轮最深的净多 γ。0-γ flip 台阶{' '}
              <span className="dn-tag">$61,296 → $61,405（+$109）</span>、现货
              $63,048.50 推得更上、所以现货坐{' '}
              <span className="dn-tag bull">flip 上方 +2.68%</span>
              （现货口径 63,048.50 / 61,405 − 1 = +2.676%）；GEX 文件自己的
              &ldquo;dist to flip&rdquo; 对它的 Deribit-index $63,354（比 parquet
              现货高 $305）读 +3.2%、即{' '}
              <span className="dn-tag bull">+3.17%</span>
              （63,354 / 61,405 − 1 = +3.174%）——两参考都在 flip 上方、从 07-04
              的 +2.20% <b>延伸</b>。墙图是一叠括住现货的正天花板、下方一根缓和后
              的看跌墙：最重的是{' '}
              <span className="dn-tag bull">$63.5k +20.98M</span>（最重墙、正天花板、
              就在头顶）、{' '}
              <span className="dn-tag bull">$63k +19.59M</span> 与{' '}
              <span className="dn-tag bull">$64k +19.51M</span> 括住现货、然后{' '}
              <span className="dn-tag bull">$70k +15.64M</span>、{' '}
              <span className="dn-tag bull">$65k +15.20M</span>、{' '}
              <span className="dn-tag bull">$66k +14.93M</span>、{' '}
              <span className="dn-tag bull">$68k +12.95M</span>、{' '}
              <span className="dn-tag bull">$67k +8.99M</span>、{' '}
              <span className="dn-tag bull">$80k +8.26M</span> 在头顶、下方深看跌墙{' '}
              <span className="dn-tag bear">$60k −16.69M</span>（从 07-04 的
              −21.49M 缓和）。{' '}
              <span className="dn-em">
                关键是 aggregate 深净多 γ、在这一轮最深、所以本子把下一步阻尼得
                更狠、而不是放大它——07-04 那本 +88.1M 的加深、谱系带过最建设性的
                gamma 背景。现货 $63,048.50 坐在 $63k +19.59M 与 $63.5k +20.98M
                正天花板之间（它们括住地板 $62,643 上方）、在缓和后的 $60k
                −16.69M 看跌墙上；正天花板把反弹就在头顶封住、下方那根缓和后的
                看跌墙是近的架子。而近端下行放大器本次<b>缓和</b>：7JUL26 2.3 DTE
                −5.12M（07-04 是 −8.22M）——短端下行口袋缩了。但那条会说它下面这段
                价格动作是不是需求的盘面仍是死的、MTF 引擎翻回周期反转、仍在高位
                闪两根 TD9 SELL。
              </span>{' '}
              按到期、近端集中在最前端是正的、带缓和后的 7JUL26 负：前端是那根正的
              5JUL26{' '}
              <span className="dn-tag bull">0.3 DTE +23.93M（约今日 08:00Z 结算）</span>、
              然后 6JUL26 1.3 +6.51M、7JUL26 2.3{' '}
              <span className="dn-tag bear">−5.12M（缓和后的近端下行放大器）</span>、
              8JUL26 3.3 +0.66M、10JUL26 5.3{' '}
              <span className="dn-tag bull">+25.31M</span>、17JUL26 12.3{' '}
              <span className="dn-tag bull">+23.41M</span>、24JUL26 19.3 +4.23M、
              31JUL26 26.3{' '}
              <span className="dn-tag bull">+33.92M</span>、28AUG26 54.3 +5.24M、
              25SEP26 82.3{' '}
              <span className="dn-tag bear">−0.82M</span>、25DEC26 173.3 +1.76M、
              26MAR27 264.3 +0.68M、25JUN27 355.3 +0.53M。4JUL26 前端约昨日
              08:00Z 结算；07-04 备忘在 7JUL26 −8.22M 看到的下行放大器、随它滚近
              一个 session 已<b>缓和</b>到 −5.12M——集中的短端下行缩了。（现货
              参考的 aggregate +110.2M 是现货处的 net GEX；按到期的行是一个独立
              分解、不必加总到它。）
            </p>

            <p>
              918 合约的 IV 中位数是{' '}
              <span className="dn-tag">41.9%</span>（从 07-04 的 42.1% / 914
              合约松）对 30D 收对收 RV{' '}
              <span className="dn-tag">34.58%</span>——链层丰度较已实现{' '}
              <span className="dn-tag">~+7.32pt</span>（07-04 是 ~+4.05pt——RV 比
              IV 跌得更快、丰度走阔）、RV 从它近期路径走弱（今天 34.58% 对 07-04
              的 38.05%——替代 29-return 窗读 35.16%）。一个 918 合约的链中位数、
              <span className="dn-em">不是</span>一个可交易价差；到期/strike 层
              vega、skew 与期限结构仍未载入、vol 读法保持 framework only。RV
              方法：30D 收对收、logret.std × √365 × 100 于最后 30 根日线对数回报
              （= 31 根连续日收）锚自 parquet 最末 bar 2026-07-05 00:05Z。P/C 比{' '}
              <span className="dn-tag">0.57</span>（Call OI 229,614 / Put OI
              129,788）——一条偏 call 的链。
            </p>
            <h2 className="dn-sec">
              宏观 <span className="dn-roman">IV · ~1.82h 渲染（周末——较 07-04 几乎没变）——10Y 守 4.48%（距闸 5bp）、TIPS 2.25% 极端 RISK-OFF、HY OAS 2.75% +1.0bp 仍在 2.78% re-grow 闸下（闸仍不点、距 3bp）、MOVE 本次不可用 · FX 腿守：DXY 100.86（仍极端）与 USD/JPY 161.34 · regime 仍特异（mean |r| 0.193、~不变）、BTC +5.01% 领先 NQ 达 +2.80pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观面板渲染在周末滞后约 1.82h、读法几乎没变：利率守在 4.48%
                （距它的闸 5bp）、而信用价差守在 2.75% 并仍在它的 2.78% re-grow 闸
                <b>下</b>——闸仍不点、距 3bp——美元守 100.86 极端
              </span>
              。面板渲染是 2026-07-04 22:16Z、较快照早约 1.82h。US 10Y 名义{' '}
              <span className="dn-tag">4.48%（+4.0bp）</span>、regime z{' '}
              <span className="dn-tag bear">+1.51</span>——紧 regime、RISK-OFF、
              距 4.53% 闸 5bp（更近的一腿）。10Y TIPS 实际{' '}
              <span className="dn-tag">2.25%（+5.0bp）</span>、regime z{' '}
              <span className="dn-tag bear">+2.56</span>——极端 RISK-OFF、面板上
              最紧的线之一。5Y5Y BE 通胀{' '}
              <span className="dn-tag">2.22%（+2.0bp）</span>、10Y 盈亏平衡{' '}
              <span className="dn-tag">2.23%（0.0bp）</span>——通胀预期平。HY
              OAS{' '}
              <span className="dn-tag bull">2.75%（+1.0bp）</span>、regime z{' '}
              <span className="dn-tag bull">−0.92</span>——z-regime 上信用松；
              价差 +1bp 但仍在它的 2.78% re-grow 闸<b>下</b>（06-30 在 2.83% 点、
              07-01 在 2.80% 点、然后 07-02 掉到 2.75% 下、07-03 在 2.74% 下、
              07-04 在 2.75% 下、本次守在 2.75% 下、所以信用 re-grow 闸<b>仍不点</b>、
              距 3bp）。MOVE 债波{' '}
              <span className="dn-tag stale">本次不可用</span>——源抓取失败；
              vol 腿未刷新。美元守极端：DXY{' '}
              <span className="dn-tag bear">100.86（−0.00 日）</span>、regime z{' '}
              <span className="dn-tag bear">+2.11</span>、仍极端。Fed 净流动性{' '}
              <span className="dn-tag">$5.843T</span>、regime z{' '}
              <span className="dn-tag">−0.60</span>——较 07-04 不变；源面板 delta
              列读 +0.053T、标紧 / episodic。USD/JPY{' '}
              <span className="dn-tag">161.34（−0.11 日）</span>、regime z +1.39；
              US-JP 10Y 利差{' '}
              <span className="dn-tag">1.83%（+4.0bp）</span> 窄；USD/CNY{' '}
              <span className="dn-tag">6.7702</span>；WTI{' '}
              <span className="dn-tag stale">$71.9（陈旧 ~5d）</span>。{' '}
              <span className="dn-em">
                净：宏观背景在 z-面板上仍 risk-off（利率紧、TIPS 极端、美元极端）、
                但信用边际守松——信用腿守在 2.75%、仍在 2.78% re-grow 闸下、所以
                那根在 06-28 → 07-01 备忘上点过的信用闸连续第四个 cut 不点
                （距 3bp）；利率腿守在 4.48%、坐距它的 4.53% 闸 5bp、是更近的一腿。
                reclaim-long 利率筛（10Y &lt; 4.55%）在 4.48% 仍<b>真</b>。宏观
                读法仍是强化而非反驳这根确认破位——一张宽的 risk-off z-面板——但
                周末新鲜动作很小：信用闸不点、相关 regime 守特异、BTC 领先 NQ
                （见下方跨资产）、美元守极端。
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
                <tr><td>US 10Y 名义</td><td className="num">4.48%</td><td className="num bear">+4.0bp</td><td className="num bear">+1.51</td><td className="bear">紧 · RISK-OFF · 距闸 5bp</td></tr>
                <tr><td>10Y TIPS 实际</td><td className="num">2.25%</td><td className="num bear">+5.0bp</td><td className="num bear">+2.56</td><td className="bear">极端 RISK-OFF</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.22%</td><td className="num bear">+2.0bp</td><td className="num">−0.12</td><td className="neut">平</td></tr>
                <tr><td>10Y 盈亏平衡</td><td className="num">2.23%</td><td className="num">0.0bp</td><td className="num">−1.55</td><td className="neut">平</td></tr>
                <tr><td>HY OAS</td><td className="num">2.75%</td><td className="num bear">+1.0bp</td><td className="num bull">−0.92</td><td className="bull">仍在 2.78% re-grow 闸下——闸仍不点（距 3bp）</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.504</td><td className="num">−0.00</td><td className="num">+0.40</td><td className="stale">周度 · 中性 · 陈旧 8d</td></tr>
                <tr><td>MOVE 债波</td><td className="num stale">n/a</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">本次不可用 · 抓取失败</td></tr>
                <tr><td>DXY</td><td className="num">100.86</td><td className="num">−0.00</td><td className="num bear">+2.11</td><td className="bear">极端 RISK-OFF · 守住</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.843T</td><td className="num">+0.053T</td><td className="num">−0.60</td><td className="bear">紧 · episodic · 源面板 delta +0.053T · 较 07-04 不变</td></tr>
                <tr><td>USD/JPY</td><td className="num">161.34</td><td className="num bull">−0.11</td><td className="num bear">+1.39</td><td className="bear">硬</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">1.83%</td><td className="num">+4.0bp</td><td className="num bull">−1.00</td><td className="neut">窄</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7702</td><td className="num">−0.02</td><td className="num">−1.51</td><td className="neut">—</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">月度（64d）</td><td className="num bear">+2.56</td><td className="stale">月度 · 不依赖</td></tr>
              </tbody>
            </table>
            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、summary 00:00Z——{' '}
              <span className="dn-em">一根 7 日滚动读、不是今天</span>）。均值
              非对角 <span className="dn-tag">|r| 0.193</span>——较 07-04 的
              0.192 <b>~不变</b>、坐{' '}
              <span className="dn-tag">远在 0.25 特异阈下</span>、所以 regime 行
              保持{' '}
              <span className="dn-signal">特异——BTC 按相关性与广义跨资产复合
              明显脱钩</span>、它的头部关联是一条股/金属簇带、都在 +0.30–0.40
              附近：PLAT{' '}
              <span className="dn-tag">+0.404</span>、PALL{' '}
              <span className="dn-tag">+0.370</span>、SILVER{' '}
              <span className="dn-tag">+0.331</span>、URNM{' '}
              <span className="dn-tag">+0.318</span>、SP500{' '}
              <span className="dn-tag">+0.311</span>、GOLD{' '}
              <span className="dn-tag">+0.294</span>、NVDA{' '}
              <span className="dn-tag">+0.289</span>、NQ{' '}
              <span className="dn-tag">+0.287</span>、COPPER{' '}
              <span className="dn-tag">+0.266</span>、JP225{' '}
              <span className="dn-tag">+0.196</span>、TSLA{' '}
              <span className="dn-tag">+0.137</span>、MSFT{' '}
              <span className="dn-tag">+0.114</span>、其中 AMZN{' '}
              <span className="dn-tag">−0.149</span> 与 JPY{' '}
              <span className="dn-tag">−0.122</span> 反向、AAPL{' '}
              <span className="dn-tag">+0.088</span> 近零。而 7d 表现保持 BTC-对-NQ
              框架建设性、并抬升 BTC 排名：BTC 领先 NQ/SP500、不是落后者——{' '}
              <span className="dn-tag bull">BTC +5.01%</span> 在 NQ{' '}
              <span className="dn-tag bull">+2.21%</span> 前 +2.80pt（07-04 是
              +2.69pt 领先）、也在 SP500 +2.30% 前 +2.71pt、且 BTC 已从第 9 爬到
              复合里第 6——领头是大盘股 AAPL{' '}
              <span className="dn-tag bull">+9.61%</span>、META{' '}
              <span className="dn-tag bull">+6.76%</span> 与金属 SILVER{' '}
              <span className="dn-tag bull">+6.55%</span>、然后 GOOGL{' '}
              <span className="dn-tag bull">+5.59%</span>、TSLA{' '}
              <span className="dn-tag bull">+5.55%</span>、BTC{' '}
              <span className="dn-tag bull">+5.01%</span>、PALL{' '}
              <span className="dn-tag bull">+4.96%</span>、AMZN{' '}
              <span className="dn-tag bull">+4.94%</span>、MSFT{' '}
              <span className="dn-tag bull">+4.29%</span>、SP500{' '}
              <span className="dn-tag bull">+2.30%</span>、GOLD{' '}
              <span className="dn-tag bull">+2.28%</span>、NQ{' '}
              <span className="dn-tag bull">+2.21%</span>、NVDA{' '}
              <span className="dn-tag bull">+2.01%</span>、PLAT{' '}
              <span className="dn-tag bull">+1.00%</span>、JP225{' '}
              <span className="dn-tag bull">+0.90%</span>、URNM{' '}
              <span className="dn-tag bull">+0.72%</span>、COPPER{' '}
              <span className="dn-tag bull">+0.45%</span>、EUR{' '}
              <span className="dn-tag bull">+0.36%</span> 全绿；红的是能源与日元
              ——CL{' '}
              <span className="dn-tag bear">−4.69%</span>、BRENT{' '}
              <span className="dn-tag bear">−4.43%</span>、NGAS{' '}
              <span className="dn-tag bear">−1.35%</span>、JPY{' '}
              <span className="dn-tag bear">−0.15%</span>。{' '}
              <span className="dn-em">
                BTC 7d 回报 +5.01% 对 NQ +2.21% 是 +2.80pt 的领先（07-04 是
                +2.69pt）——对 NQ 的差跨第四根上收又扩了一点、BTC 已从第 9 爬到
                复合里第 6、不再是落后者。相关 regime 守 0.25 线下的特异。所以前
                谱系带的那根尖锐 risk-off / 最差表现读彻底解除——BTC 本次既非在
                阈上统计耦合、也非落后者、且爬升了表现榜。宏观 z-面板仍读 risk-off
                （利率紧、DXY 极端）、但跨资产 regime 守松、BTC 续领 NQ、所以这两个
                跨市场读仍与紧的宏观 z-面板背离。
              </span>{' '}
              JGB 月度 2.65% 带一个极端 RISK-OFF 月度标——别依赖它。
            </p>
            <h2 className="dn-sec">
              交易本子 <span className="dn-roman">V · 本子 FLAT · 200W 地板——破位在 06-29 周收确认（$60,224.70 &lt; $62,643、−3.86%）、06-15 重夺论被证伪；07-04 的上收在<b>日收口径重夺</b>地板（连续第四根上收、+0.75% 在上方）、脚下现有三根 MA、一次结构性恢复（周收重回 $62,643 上方）离它第一次结算测试约 1 天 · scout 价格前置条件保持真并<b>加强</b>（现货 flip 上方 +2.68%、三根 MA 在脚下）——scout 仍<b>按兵</b>（盘面瞎 ~22.94 天、regime 翻回周期反转、引擎闪两根 4h/8h TD9 SELL 在高位）· 宏观尾信用闸仍不点（OAS 2.75% &lt; 2.78%）· 挤压周期 ON HOLD（SM 死 ~22.94 天）</span>
            </h2>

            <p>
              <span className="dn-signal">
                本子 flat、且保持 flat——谱系的结构正被裁定<b>对着它</b>（200W
                破位在周收确认、重夺论被证伪）、但 07-04 的上收在日收口径重夺了
                地板、并谱系里第一次把第三根 MA 摆到现货脚下、约束仍是数据完整性
                ——加上引擎现在翻回周期反转、仍在高位闪两根 TD9 SELL
              </span>
              。06-29 周收结算 $60,224.70、地板 $62,643 下 −3.86%——破位<b>确认</b>、
              06-15 重夺论<b>被证伪</b>、本次没有任何东西撤销这点。07-04 备忘记的
              是反弹带到地板；本次它<b>在日收口径重夺</b>——07-04 日收 $63,114.80
              是一根上收 +$549.30、连续第四根、第一根重回地板上方（+0.75%）、而
              未收盘 07-05 bar $63,048.50 守在它上方 +0.65%、脚下现有三根 MA。
              dealer 本子加深到 +110.2M 净多 γ（这一轮最深）、近端 7JUL26 放大器
              缓和到 −5.12M、看跌墙也缓和、现货推到 flip 上方 +2.68%。scout 的
              价格前置条件保持<b>真</b>并<b>加强</b>——现货远在 flip 上、三根 MA
              在脚下、且已收回地板上方——所以价格腿开着、在改善。但交易台仍不出
              scout：那条会确认需求的盘面是瞎的、引擎已<b>翻回</b>周期反转 regime、
              快框架 30m / 1h 滚成死叉、带两根持续 TD9 SELL（4h 加 8h）与 15m /
              1h 顶背离、就在高位——在这里追重夺、进一次快框架滚翻与两根超买反转印、
              进一条瞎盘面、是个差入场。也无新空：本子深多 γ、flip 已重夺 +2.68%、
              现货收回地板上方、脚下三根 MA、一根 1M TD9 buy 仍印——是个差的压空
              位置。今天的交易本子是：无空、无 scout、无新对冲——先修盘面、再读
              这根重夺地板的反弹是空头回补还是需求。
            </p>
            <div className="dn-trade">
              <span className="dn-side framework">framework · PRIMARY · 200W 周期地板盯盘——破位已确认：06-29 周收 $60,224.70 结算在 $62,643 地板下 −3.86%（周收升级已点）、06-15 重夺论被证伪；07-04 的上收在<b>日收口径重夺</b>地板（现货 +0.65% 在 $62,643 上方）、把第三根 MA 摆到脚下；恢复离它第一次周收结算测试约 1 天</span>
              <div className="dn-trade-name">
                200W 周期地板盯盘——破位在 06-29 周收确认、反弹已在日收口径重夺地板：地板 $62,643 = 全历史 W-SMA200（356 根收盘周 bar、本次不变）、06-29 周收 $60,224.70（下 −3.86%）确认破位、07-04 日收 $63,114.80（一根上收 +$549.30、连续第四根）是第一根重回地板上方的日收（+0.75%）、未收盘 07-05 bar $63,048.50 在地板上方 +0.65%、06-15 重夺论被证伪
              </div>
              <div className="dn-thesis">
                07-04 备忘记的是破位在 06-29 周收确认、反弹带到地板。本次那根
                反弹在日收口径重夺地板：07-04 日线 bar 收{' '}
                <span className="dn-tag bull">$63,114.80、地板 $62,643 上 +0.75%</span>
                、一根上收 +$549.30、连续第四根、第一根重回地板上方、终结连续
                十根收在下的记录、而未收盘 07-05 bar $63,048.50 守在地板上方
                +0.65%、脚下现有第三根 MA。按框架、一根盘中 wick 不是破位、一根
                日收在下是早警、一根持续的周收在下是那个破地板、证伪 06-15 重夺论
                的升级——那根周收印在 06-29、所以破位保持<b>确认</b>、重夺论保持
                <b>被证伪</b>。22JUN 周收 $63,990 是最后一根周线守；它仍被取代。{' '}
                <span className="dn-em">谱系那根结构正保持在周收口径被裁定对着
                它；但现货现在脚下有三根 MA、并在日收口径收回地板上方——地板、
                不变在 $62,643、已翻成现货脚下的支撑、而这一轮第一次一次结构性
                恢复（一根持续的周收重回 $62,643 上方）离它第一次真结算测试只约
                1 天（未收盘的周结 07-06 bar 读在地板上方、周一 07-06 收盘）。
                反弹是确认破位内的一次日收重夺、直到那根周收印在地板上方。</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W 地板（不变）</span><span className="dn-lvl-v">$62,643 = 全历史 W-SMA200、本次从 2019→ parquet glob 重算（356 根收盘周 W-MON bar、含已结算的 06-29 周、不含未收盘的 07-06 周）；较 07-04 不变、06-29 周五个 cut 前已结算 · weekly_200sma.json 缺、所以比值分位 / last-event 留作未溯源、不杜撰</span></div>
                <div><span className="dn-lvl-k">破位——已确认、地板在日收口径重夺</span><span className="dn-lvl-v bear">06-29 周收 $60,224.70 结算在地板下 −3.86%——破位确认；连续十根日收在下（06-24 $61,051 −2.54% 到 07-03 $62,565.50 −0.12%）、06-30 收 $58,605.40 最深（−6.45%）；然后 07-04 $63,114.80 +0.75% 收回地板<b>上方</b>（连续第四根上收、第一根在线上）；未收盘 07-05 bar $63,048.50 在地板上方 +0.65%</span></div>
                <div><span className="dn-lvl-k">重夺论——被证伪</span><span className="dn-lvl-v bear">06-15 重夺论要求地板在周收口径守住；06-29 周收在地板下证伪它——先前 22JUN 周线守（$63,990）被取代</span></div>
                <div><span className="dn-lvl-k">恢复路径（第一次结算测试约 1 天外）</span><span className="dn-lvl-v bull">现货在 flip $61,405 上方 +2.68%、D-SMA20 $62,017 上方 +1.66%、D-EMA20 $62,330 上方 +1.15%、地板 $62,643 上方 +0.65%（这一轮第一次三根 MA 在现货脚下）——一次结构性恢复是一根持续的周收重回地板 $62,643 上方（破位必须撤销的那个水位）；未收盘的周结 07-06 bar 读在地板上方、周一 07-06 收盘、所以恢复第一次进真射程——但一根周收不是瞎盘面上的一个 scout 触发（见 scout）</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework、不是一笔交易。</b>地板盯盘是唯一那根承重的 live
                水位、其余都陈旧或 framework only。破位在周收确认、重夺论被证伪、
                反弹在日收口径重夺地板、脚下三根 MA——盯盘上不取任何仓位：它标定
                确认破位（06-29 周收 $60,224.70 &lt; $62,643）、恢复条件（一根
                持续的周收重回地板 $62,643 上方、第一次测试约 1 天外）、与恢复
                途站（flip $61,405 → D-SMA20 $62,017 → D-EMA20 $62,330 → 地板
                $62,643、现都在现货脚下）、交易台不会在引擎翻回周期反转、于高位
                闪两根 TD9 SELL 时把一根反弹追多进一条瞎盘面、也不会在一根确认
                破位、现货收回地板上方、进一本这一轮最深多 γ 本子、flip 已重夺、
                一根 1M TD9 buy 已印的情况下压空。
              </div>
            </div>
            <div className="dn-trade">
              <span className="dn-side long">long · scout · 仍按兵 · 价格前置条件保持真并<b>加强</b>（现货 flip 上方 +2.68%、三根 MA 在脚下、在地板上方）、本子加深到这一轮最深净多 γ；但盘面瞎 ~22.94 天 + 无确认引擎触发（regime 翻回周期反转、快框架滚成死叉、引擎闪两根 4h/8h TD9 SELL 在高位）仍约束</span>
              <div className="dn-trade-name">
                回补反弹 scout——flip 重夺保持真（现货 +2.68% 在上）、三根 MA 现在现货脚下、本子加深到这一轮最深净多 γ、价格腿开着在改善；scout 在瞎盘面上保持按兵、引擎翻回周期反转、两根持续超买反转印（4h 加 8h TD9 SELL）在高位
              </div>
              <div className="dn-thesis">
                06-30 备忘看到 scout 价格前置条件翻真、07-01 备忘看到它随首根
                反弹失败翻回假、07-02 → 07-04 备忘看到它翻回真并延伸。本次它保持
                真、且进一步加强：现货{' '}
                <em>flip $61,405 上方 +2.68%</em>（flip 台阶 +$109）、已收回地板
                上方、且现在脚下有三根 MA（D-SMA20 $62,017 / D-EMA20 $62,330 /
                地板 $62,643）、而 dealer 本子加深到 +110.2M 净多 γ——这一轮最深。
                所以价格与 gamma 两腿是这一轮最建设性的。但 scout 保持按兵、且
                本次理由仍成立：（1）仓位腿（SM 空头泄、funding 姿态、回补 flow）
                全需要一条 live 盘面、而没有——交易台看不见这根重夺地板的反弹是
                空头回补耗尽还是需求消化。（2）引擎不带确认建设性触发——regime
                <b>翻回</b>周期反转、快框架 30m / 1h 从金叉滚成死叉、两根 TD9
                SELL（4h 加 8h、超买反转提示）持续印在高位、带 15m / 1h 顶背离、
                抵消了中段金叉与 1M TD9 buy。（3）一根近端下行口袋虽缓和仍在
                （7JUL26 −5.12M）。{' '}
                <span className="dn-em">在一条仓位瞎的盘面上、无确认引擎印、还带
                高位两根超买反转印、进一次快框架滚翻做多 scout、不是一笔交易——
                价格腿开着在改善、但把一根重夺地板的反弹追进两根 4h/8h TD9 SELL
                与一次 regime 翻回均值回归、在一条瞎盘面上、正是交易台按兵的那个
                入场。1M TD9 buy 与那簇高 TF 底背离是值得记的真超卖提示、但在这些
                位置被 4h 加 8h TD9 SELL 与快框架死叉抵消。</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v bear">按兵 · 无入场 · 价格前置条件保持真并加强（现货 flip 上方 +2.68%、三根 MA 在脚下、在地板上方）、本子是这一轮最深净多 γ、但盘面瞎、regime 翻回周期反转、引擎闪两根持续超买反转（4h 加 8h TD9 SELL）；只在 live 盘面恢复 AND 一根确认引擎印后再评估</span></div>
                <div><span className="dn-lvl-k">技术前置条件</span><span className="dn-lvl-v bear">flip $61,405 重夺（真——现货 +2.68% 在上）AND D-SMA20 $62,017 / D-EMA20 $62,330 重夺（真——两根日 MA 现在现货脚下）AND 地板 $62,643 日收重夺（真——现货 +0.65% 在上、但还无周收）AND 一根确认引擎印（不真——4 多 / 3 空 / 3 中、中段金叉与一根 1M TD9 buy 被快框架死叉、两根持续 4h/8h TD9 SELL 与 15m/1h 顶背离抵消；regime 翻回周期反转）</span></div>
                <div><span className="dn-lvl-k">数据前置条件</span><span className="dn-lvl-v bear">live 盘面恢复（现冻结 425.4h）AND SM feed live（现死 ~22.94 天）——两者都要成立、任何仓位腿才能读；这是承重的那个 block</span></div>
              </div>
              <div className="dn-gating">
                <b>硬规则：</b>没有 live 仓位盘面、不入 scout。1M TD9 buy、中段
                金叉、那簇高 TF 底背离与重夺的 flip 加 MA 对加地板、在 SM /
                funding / flow 腿瞎、引擎翻回周期反转、现带两根超买反转印（4h 加
                8h TD9 SELL）在高位、快框架滚翻时、都不触发 scout——交易台不会把
                一根它看不见被回补的回补反弹加仓、尤其是一根已重夺地板、现被两个
                反转签名与一次 regime 翻回迎头撞上的反弹。06-30 抬起、07-01 重关、
                07-02 → 07-04 重开的那个价格 block 保持开着在改善；作业 block
                （盘面死）与引擎 block（无确认触发、现在两根持续超买反转、regime
                翻回）仍约束。
              </div>
            </div>
            <div className="dn-trade">
              <span className="dn-side framework">framework · 宏观尾 · put-spread re-grow 闸——信用腿仍不点：HY OAS 2.75% &lt; 2.78% 闸（本次守 +1.0bp、仍在下、距 3bp）、10Y 腿距 5bp（4.48% 对 4.53% 闸）；两腿都守在它们的触发下</span>
              <div className="dn-trade-name">
                下行 put-spread——re-grow 信用闸仍不点（OAS 2.75% &lt; 2.78%）、利率腿距 5bp；不加对冲（dealer 本子加深到这一轮最深净多 γ、近端放大器缓和、所以内生下行结构进一步缓和）
              </div>
              <div className="dn-thesis">
                谱系带的宏观 re-grow 闸——HY OAS &gt; 2.78% OR 10Y &gt; 4.53%
                作为重长下行尾的条件——在信用腿上仍<b>不点</b>：HY OAS{' '}
                <em>2.75%</em>、本次 +1bp 守在闸下（它在 06-30 于 2.83% 点、07-01
                于 2.80% 点、然后 07-02 掉到 2.75% 下、07-03 到 2.74% 下、07-04
                在 2.75% 下、本次守在 2.75% 下、距 3bp 点）、而 10Y 守 4.48%、坐距
                5bp——更近的一腿。所以两腿都离它们的触发。reclaim-long 利率筛
                （10Y &lt; 4.55%）在 4.48% 仍<b>真</b>。宏观盘面在 z-面板上仍是
                一记 risk-off 冲量（利率紧、TIPS 极端、美元极端）、但一根宏观尾
                不是一根内生兼特异地板破位的对的工具、且 dealer 本子已加深到这一轮
                最深净多 γ、近端放大器缓和（7JUL26 −5.12M）、所以 aggregate 内生
                下行结构本次进一步缓和——这、连同不点的信用闸、是把尾按下的理由、
                不是加它的理由。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v bull">无仓 · 信用闸在收盘口径仍不点 · HY OAS 2.75% &lt; 2.78%（+1.0bp、仍在下、距 3bp）、10Y 腿距 5bp</span></div>
                <div><span className="dn-lvl-k">re-grow 触发（不点）</span><span className="dn-lvl-v bull">HY OAS &gt; 2.78% 收——仍<b>不点</b>于 2.75%（在闸下 3bp）· OR 10Y &gt; 4.53% 收（现 4.48%、距 5bp 点——更近的一腿、但仍离）</span></div>
                <div><span className="dn-lvl-k">reclaim-long 利率筛</span><span className="dn-lvl-v bull">10Y &lt; 4.55% 收——在 4.48% 真；等一根 BTC 内部转向 AND 一条 live 盘面去转译</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats：</b>re-grow 闸是随水位漂移设的自由裁量盯盘、不是
                回测断点。信用腿守在闸下（OAS 2.75% &lt; 2.78%）、利率腿坐距
                5bp；两腿都不点、本次没有尾可长；注意 dealer 本子已加深到这一轮
                最深净多 γ、近端放大器缓和、所以 aggregate 内生下行结构进一步
                缓和——尾按下。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · 挤压周期 hostile-2 watchlist · 无日历先验 · ON HOLD——SM feed 死 ~22.94 天、重堆签名本次读不了</span>
              <div className="dn-trade-name">
                挤压周期 hostile-2——ON HOLD（06-16 → 07-04 的延续）：SM feed 冻结 ~550.5h、重堆签名本次读不了
              </div>
              <div className="dn-thesis">
                挤压周期 / re-stack-hostile-2 框架把离散 SM 步（Δshort &gt; 0 +
                Δlong &lt; 0 同一分钟）读成延续签名；它的日历先验（BJ 13–15 节奏）
                在 05-31 被证伪、此后作为无先验 watchlist 跑。它今天无法评估、
                为最简单的理由：SM feed 死了。long_btc / short_btc / net_btc 自
                2026-06-12 01:36Z 起恒定（~550.5h）、所以没有 SM deltas 可读。
                06-16 备忘在 ~94.5h 把这个 ON HOLD、07-03 在 ~502.5h、07-04 在
                ~526.5h；它在 ~550.5h 仍 ON HOLD。{' '}
                <span className="dn-em">一根冻结的 feed 印不出签名；框架在 SM
                数据恢复前是黑的。</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">框架状态</span><span className="dn-lvl-v bear">ON HOLD · SM feed 冻结 ~550.5h（自 2026-06-12 01:36Z）· 无 SM deltas 可算</span></div>
                <div><span className="dn-lvl-k">冻结值（不是一个读）</span><span className="dn-lvl-v">long 13,532.4 / short 50,825.7 / net −37,293.3——逐字恒定、只为标记死 feed 而带</span></div>
                <div><span className="dn-lvl-k">恢复条件</span><span className="dn-lvl-v">SM feed 恢复写新鲜 long_btc/short_btc → 从第一批新鲜 deltas 重评估重堆签名</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>一根死的 feed 不是一根安静的 feed。交易台不从
                一组冻结三元推断&ldquo;无重堆&rdquo;——它什么都不推断。挤压周期
                读法是暂停、不是转负、feed 恢复后第一批新鲜 SM deltas 是重新
                武装点。
              </div>
            </div>
            <h2 className="dn-sec">
              决策条件 <span className="dn-roman">VI · LIVE 盘面断线仍是那个操作性条件（第十九天）· 200W 地板破位在 06-29 周收确认（$60,224.70 &lt; $62,643、−3.86%）、06-15 重夺论被证伪、07-04 的上收在日收口径重夺地板 · flip 延伸（现货 +2.68% 在上）、本子加深到 +110.2M 净多 γ（这一轮最深）、近端放大器缓和（7JUL26 −5.12M）· scout 价格前置条件保持真并加强（三根 MA 在脚下、在地板上方）但引擎翻回周期反转、快框架滚成死叉、带两根 4h/8h TD9 SELL 在高位 · 宏观信用闸仍不点（OAS 2.75%）、regime 守特异、BTC 领先 NQ 达 +2.80pt</span>
            </h2>

            <p>
              07-04 那些条件里：live 盘面<em>没</em>回来——它更死了约 24h、现
              冻结 425.4h、SM feed 在 ~22.94 天；200W 地板破位保持在 06-29 周收
              <b>确认</b>（$60,224.70、地板 $62,643 下 −3.86%）、06-15 重夺论保持
              <b>被证伪</b>；地板本次不变（$62,643、06-29 周五个 cut 前已结算）；
              07-04 备忘记在地板处的反弹<b>在日收口径重夺</b>了它——07-04 日收
              $63,114.80 是一根上收 +$549.30、连续第四根、第一根重回地板上方
              （+0.75%）、而未收盘 07-05 bar $63,048.50 在地板上方 +0.65%、脚下
              现有第三根 MA；flip <b>延伸</b>（现货 +2.68% 在上对 07-04 的 +2.20%）、
              flip 台阶到 $61,405；dealer 本子从 +88.1M <b>加深</b>到 +110.2M 净多 γ
              ——这一轮最深、把下一步阻尼得更狠——近端下行放大器<b>缓和</b>
              （7JUL26 2.3 DTE −5.12M、07-04 是 −8.22M）；scout 价格前置条件保持
              真并加强（三根 MA 在现货脚下）但引擎翻回周期反转、快框架 30m / 1h
              滚成死叉、带两根持续 4h/8h TD9 SELL 在高位；宏观 re-grow 闸在信用腿
              仍不点（OAS 2.75% &lt; 2.78%）、而利率腿守 4.48%（距 5bp）；相关
              regime 守特异、BTC 7d 回报<b>领先</b> NQ 达 +2.80pt；挤压周期在更死
              的 feed 上保持 ON HOLD。主导条件不变：<em>交易台仓位瞎、进一根在
              周收确认的 200W 地板破位、一根在日收口径重夺地板、脚下有三根 MA 的
              反弹、和一本加深到这一轮最深净多 γ 的本子——它一样都无法对盘面
              确认、现在还被一次 regime 翻回周期反转与高位两根超买反转印迎头
              撞上</em>。今天条件围绕持续断线、确认的周收破位、日收重夺地板、与
              加深的净多 γ 本子重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>Live 盘面恢复（PRIMARY 操作性）</td><td className="bull">live_db.json 恢复写 2026-06-17 06:43Z 之外的新鲜行 AND SM 三元离开它 06-12 01:36Z 冻结更新</td><td>全量重读 funding / OI / flow / SM；只有那时 scout 或挤压周期才能评估——也只有那时这根重夺地板的反弹才能被确认成空头回补耗尽还是需求消化；仓位维度现已连续十七篇瞎</td></tr>
                <tr><td>200W 地板——破位已确认、地板在日收口径重夺</td><td className="bear">06-29 周收 $60,224.70 结算在地板 $62,643 下 −3.86%——破位确认；连续十根日收在下（06-24 → 07-03）、06-30 收 $58,605.40 最深（−6.45%）；然后 07-04 $63,114.80 +0.75% 收回地板<b>上方</b>（连续第四根上收、第一根在线上）；未收盘 07-05 bar $63,048.50、地板上方 +0.65%</td><td>地板破位在周收口径确认、反弹在日收口径重夺地板——地板（$62,643）已翻成现货脚下的支撑；不取仓位</td></tr>
                <tr><td>200W 重夺论——被证伪</td><td className="bear">06-15 重夺论要求地板的一根周收守；06-29 周收在下证伪它——先前 22JUN 周线守（$63,990）被取代</td><td>重夺论已死；结构性恢复现需要一根持续的周收重回地板 $62,643 上方（离第一次结算测试约 1 天——未收盘的周结 07-06 bar 读在地板上方、周一 07-06 收盘）；盯那根周收</td></tr>
                <tr><td>Flip 重夺（scout 价格前置条件）——加强</td><td className="bull">现货 $63,048.50 flip $61,405 上方 +2.68%、D-SMA20 $62,017 上方 +1.66%、D-EMA20 $62,330 上方 +1.15%（两根日 MA 在现货脚下）、地板 $62,643 上方 +0.65%（这一轮第一次三根 MA 在现货脚下）</td><td>价格前置条件保持真并加强；但 scout 仍需 live 盘面恢复 AND 一根确认引擎印——而引擎翻回周期反转、快框架滚成死叉、带两根 4h/8h TD9 SELL（超买反转）在高位；在一条瞎盘面上、这根重夺地板的反弹被记录、不被交易</td></tr>
                <tr><td>Dealer 本子——加深净多 γ（这一轮最深）、近端放大器缓和</td><td className="bull">aggregate GEX +110.2M（07-04 是 +88.1M、07-03 是 +60.7M）；前端是 5JUL26 0.3 DTE +23.93M（约今日 08:00Z 结算）；近端下行放大器缓和到 7JUL26 2.3 DTE −5.12M（07-04 是 −8.22M）；现货坐在 $63k +19.59M 与 $63.5k +20.98M 正天花板之间、在缓和后的 $60k −16.69M 看跌墙上</td><td>dealer 本子现 aggregate 把下一步阻尼得更狠、内生下行结构进一步缓和；只盯、无指令（aggregate 是这一轮最建设性、但盘面瞎、引擎翻回周期反转、在高位标两根反转）</td></tr>
                <tr><td>宏观尾 re-grow（信用腿不点）</td><td className="bull">HY OAS 2.75% &lt; 2.78%（仍不点、+1.0bp、距 3bp）OR 10Y &gt; 4.53%（距 5bp 点、守 4.48%）——FX 腿守（DXY 100.86、USD/JPY 161.34）、MOVE 本次不可用</td><td>本篇无对冲指令——两腿都不点、没有尾可长；注意本子 aggregate 已加深到这一轮最深净多 γ、近端放大器缓和、所以内生下行结构进一步缓和</td></tr>
                <tr><td>reclaim-long 利率筛</td><td className="bull">10Y &lt; 4.55% 收——在 4.48% 真</td><td>独立筛真；需要一根 BTC 内部转向 AND 一条 live 盘面去转成 scout long</td></tr>
                <tr><td>挤压周期 hostile-2（ON HOLD）</td><td className="stale">SM feed 死 ~550.5h；无 deltas 可算</td><td>暂停、不是转负——feed 恢复后第一批新鲜 SM deltas 重新武装</td></tr>
              </tbody>
            </table>
            <p>
              改写<em>本</em>篇的那一根线是{' '}
              <span className="dn-signal">
                这根重夺地板的反弹——它在 07-04 收阳 +$549.30（连续第四根上收）、
                第一次收回 $62,643 地板上方、把本子加深到 +110.2M 净多 γ、把现货
                压到 flip 上方 +2.68% 与地板上方 +0.65%、200W 破位已确认——是空头
                回补还是需求、只有一条恢复的盘面能说；结构侧、恢复现需要一根持续
                的周收重回地板 $62,643 上方、它第一次真结算测试约 1 天外（未收盘的
                周结 07-06 bar 读在地板上方）
              </span>
              。那本加深到 +110.2M 净多 γ（现货 flip 上方 +2.68%）的 dealer 本子
              现 aggregate 把下一步阻尼得更狠——而近端放大器缓和到 7JUL26 −5.12M；
              结构正——200W 地板——保持在周收确认破、06-15 重夺论保持已死、但反弹
              在日收口径重夺地板、脚下三根 MA、交易台仍读不了那条会说它是空头回补
              还是需求的盘面——而引擎现在翻回周期反转、两根超买反转印仍在高位。在
              盘面恢复前本篇按写好的跑：本子 flat、scout 价格 block 保持真并加强
              但引擎转回周期反转、带两根 4h/8h TD9 SELL 与快框架死叉、宏观尾信用
              闸保持不点在它的线下（OAS 2.75%）、挤压周期暂停、200W 地板盯盘是
              唯一那根 live 水位——一根在周收确认破、现已在日收重夺并翻成现货脚下
              支撑的地板、恢复条件是一根周收重回 $62,643 上方、它第一次测试约 1 天
              外。价格重夺地板、flip 延伸、本子 aggregate 加深多 γ 到这一轮最深、
              相关 regime 守特异、BTC 领先 NQ——所以前谱系那根 risk-off / 最差
              落后读彻底解除；但 MTF 引擎翻回周期反转、带两根 4h/8h TD9 SELL 在
              高位、快框架滚翻、宏观在 z-面板上仍 risk-off（利率紧、美元极端）。
              下一个 24h 的对读是{' '}
              <em>破位-在周收确认、地板-在日收重夺——尊重确认破位、把这一轮最深的
              多 γ 图与第三根 MA 压在脚下当成一次瞎盘面无法确认成需求的真改善、
              权衡高位那两根持续超买反转印与 regime 翻回周期反转、盯现货能不能在
              约 1 天外筑第一根周收重回地板上方、并在读这根重夺地板的反弹是空头
              回补还是需求之前先修盘面</em>。
            </p>
          </div>
          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2（已过 codex 敌对式审计）
            </span>
            <b>状态：</b>这是 <b>v2</b> 稿 —— <b>已过 codex 敌对式审计</b>。v1 初稿经跨模型
            敌对式审计（codex 为主、掌发布闸门；ask-deepseek 做数值二审）复核，记录在{' '}
            <code>audits/2026-07-05-desk-note.md</code>；codex 返回{' '}
            <b>PASS-WITH-NOTES</b> —— 无 CRITICAL，1 MAJOR + 3 MINOR + 1 NIT —— 且
            ask-deepseek 未发现数值错误。每条发现均已裁定（对源重算）并落实，随后在整份中文文件上
            逐条 grep 收口（搜错误声明模式及全部语义变体、修掉每一处残留、重复至归零），
            使修正落在声明出现的每一处、而非仅在被引的行：
            <ul>
              <li>
                <b>DN-001 · MAJOR</b> —— MTF 表把各周期收盘压平成统一的{' '}
                <code>$63,057</code> 并错标了活跃背离格。搜索模式：把{' '}
                <code>63,057</code> 当各周期收盘（改前：10 行各周期统一；改后：0 处残留 ——
                仅存的 5 处是 3d 收 $63,057 与扫描现价 $63,057）；{' '}
                <code>BEAR hid 4h / 8h / 1d</code> 隐性背离摘要（改前 1；改后 0）；{' '}
                <code>BEAR hid</code> 落在 4h 与 1d 格（改前 2；改后 0）。已改各周期收盘
                （15m $63,062；30m/1h/4h/8h/12h/1d/1w $63,058；3d $63,057；1M $63,050），
                15m 背离置为 <code>BEAR hid · BEAR reg · BULL hid</code>、4h 置{' '}
                <code>—</code>、8h 置 <code>BEAR hid · BULL reg</code>、1d 置{' '}
                <code>BULL reg</code>，隐性背离摘要重写为 <code>BEAR hid 15m / 8h、BULL hid
                15m / 30m / 1h</code>。<b>已解决</b>（命中后 = 0）。
              </li>
              <li>
                <b>DN-002 · MINOR</b> —— 宏观渲染滞后按错锚点计算。搜索模式：{' '}
                <code>1.87h</code>（改前 5；改后 0）。22:16 UTC 面板对 00:05Z 锚点是
                1h49m = <code>1.82h</code>；五处引用现均读约 1.82h。<b>已解决</b>（命中后 = 0）。
              </li>
              <li>
                <b>DN-003 · MINOR</b> —— 宏观行元数据陈旧。搜索模式：NFCI{' '}
                <code>~15d</code>（改前 2；改后 0 → <code>stale 8d</code>）；USD/CNY{' '}
                <code>−1.39</code> / 变动 <code>−0.01</code> / 读 <code>loose</code>
                （改前各在；改后 0 → z <code>−1.51</code>、变动 <code>−0.02</code>、无 regime
                标；存活的 <code>+1.39</code> 是 USD/JPY 的 regime z、源正确）；Fed 净流动性{' '}
                <code>neut</code> 读（改前 1；改后 0 → 按源 <code>tight · episodic</code>）。{' '}
                <b>已解决</b>（命中后 = 0）。
              </li>
              <li>
                <b>DN-004 · MINOR</b> —— 跨资产表现扫描漏了一个满仓收绿的资产。搜索模式：
                表现列中的 <code>COPPER</code>（改前 0；改后 1）。已在 URNM +0.72% 与
                EUR +0.36% 之间补入 <code>COPPER +0.45%</code>。<b>已解决</b>（命中后 = 1，
                系新增预期命中）。
              </li>
              <li>
                <b>DN-005 · NIT</b> —— GEX 时间戳相对源面板取整跑偏。搜索模式：GEX 来源引用上的{' '}
                <code>00:01Z</code>（改前 3；改后 0 —— 存活的 00:01Z 全是 MTF 扫描，源标题
                08:01 BJ = 00:01 UTC）。GEX 面板现引为 <code>2026-07-05 00:00 UTC</code>
                （mtime 00:00:39Z），其新鲜度为 00:05Z 锚点前约 5 分钟。<b>已解决</b>（命中后 = 0）。
              </li>
            </ul>
            总体：<b>已过 codex 敌对式审计</b>，全部发现已解决、零陈旧残留，构建代理{' '}
            <code>tsc --noEmit</code> 退出 0。实时衍生品盘口仍冻结（425.4h）、SM 输入仍死
            （约 22.94 天）；这些维度按最后已知 / 不可计算披露，未被审计成存在。完整{' '}
            <code>next build</code> 仍受环境阻断（Node v18.19.1 &lt; Next 要求的 &gt;=20.9.0）；{' '}
            <code>tsc --noEmit</code> 为构建代理。完整裁定见{' '}
            <code>audits/2026-07-05-desk-note.md</code>。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘为迟滞研究内部交易台文档，供机构本人之间讨论之用，{' '}
            <em>非投资建议、非招揽、非要约</em>，亦不针对任何接收者的具体情况定制。数字反映
            单一原子快照（2026-07-05 00:05Z），分区级来源见上方清单带；{' '}
            <em>关键地，实时衍生品盘口在快照时点已冻结 425.4h（末行 2026-06-17 06:43Z）、
            聪明钱仓位输入已死约 22.94 天</em>，故所有资金费、OI、流向与仓位数字均明确为
            最后已知 / 陈旧或不可计算并如此标注；宏观面板渲染为 2026-07-04 22:16Z（快照前约
            1.82h）。价格、MTF、GEX 与跨资产为新鲜。此为 v2 稿、已过 codex 敌对式审计；其数字
            已裁定、每条发现已落实（见上方审计痕迹块）。所列点位、仓量与条件是本台流程的示意，
            非常设建议。过往的相关性、γ 与仓位形态不约束未来盘口。衍生品有全额亏损风险，若带
            杠杆则亏损可超出已缴保证金。<em>请自行研判。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                反弹在日收上重夺了地板：07-04 的上收（$63,114.80，+$549.30，连续第四根）收回
                $62,643 地板上方——这一轮头一回——脚下现有三根 MA（D-SMA20 / D-EMA20 / 地板），
                进行中的 07-05 K 线 $63,048.50 稳在其上方 +0.65%；庄家账本加深至 +110.2M
                净多 γ（本轮最深），近月放大器缓和（7JUL26 −5.12M），现货被推到 flip 上方
                +2.68%，全程读在一条死了第十九天的盘口之上，如今又撞上 regime 翻回周期反转与
                高位两根 4h/8h TD9 SELL。破位已确认。地板在日收重夺。账本多 γ。引擎旗反转。瞎。
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
            v2 · 2026-07-05 00:05Z 快照 · 已过 codex 敌对式审计 ·
            2026-07-05T00:58:11Z · sources: live_db.json（冻结 425.4h）·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
