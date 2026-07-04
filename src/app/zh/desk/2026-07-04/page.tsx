import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-07-04 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-07-04',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-07-04' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260704() {
  await requireViewer('/zh/desk/2026-07-04');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-07-04 · v2</span>
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
              <span className="dn-big">$62,646.80</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+1.98%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-07-04 00:05Z ·{' '}
              <span className="dn-em">
                反弹一路弹到地板了——07-03 日线收阳 +$1,024.90 到 $62,565.50、
                是连续第三根上收、也是第十根收在 $62,643 200W 地板下（−0.12%）、
                并做成了这一轮之前没一根做到的事：它重夺回 D-EMA20 $62,210 /
                D-SMA20 $62,156 那一对、所以谱系里第一次有<b>两根 MA</b>压在现货
                脚下（连续九根&ldquo;脚下无 MA&rdquo;的记录终结）、而未收盘的
                07-04 bar $62,646.80 坐在 200W 地板 $62,643 上方 +0.01%、正从下方
                试它（07-04 的日收还不存在）。dealer 本子再加深到 +88.1M 净多 γ
                （07-03 是 +60.7M——阻尼更狠）、但一根近端下行放大器<b>又冒出来</b>：
                7JUL26 3.3 DTE 现在带 −8.22M（前端 4JUL26 0.3 DTE +19.61M、约今日
                08:00Z 结算）、所以这本建设性的本子在三个 session 外揣着一个新鲜的
                短端下行口袋。现货坐在 flip $61,296 上方 +2.20%（07-03 是 $60,286
                上方 +1.90%）。MTF 引擎<b>翻回</b>5/9 趋势延续 regime（JT≥0、从
                07-03 的周期反转）、标题改善到 4 多 / 5 空 / 1 中、但它现在印出
                <b>两根</b>⚡TD9 SELL（4h 加 8h）就在高位、带 15m / 1h 顶（看空反转）
                背离——一个<b>加强了</b>的超买反转签名——被一簇高 TF 底背离
                （30m / 8h / 12h / 1d）与一根 1M ⚡TD9 BUY 抵消。200W 破位仍
                <b>确认</b>（06-29 周收 $60,224.70 &lt; $62,643）、06-15 重夺论仍
                <b>被证伪</b>、但现货现在<b>贴着</b>地板、而一次结构性恢复——一根
                持续的周收重回 $62,643 上方——这一轮里第一次进了真的射程（未收盘的
                07-06 周 bar 读 $62,647）。跨资产仍<b>特异</b>（mean |r| 0.192、
                不变）、BTC 7d 回报 +4.27% <b>领先</b> NQ +1.58% 达 +2.69pt、领先
                SP500 +1.88% 达 +2.39pt、尽管几根大盘股与金属坐得更前（BTC 是复合
                里第 9）。宏观在信用上松了（HY OAS 2.75% &lt; 2.78% re-grow 闸、闸
                <b>仍未点</b>、距 3bp）、利率守在它的闸旁（10Y 4.48%、距 4.53% 5bp）、
                美元守<b>极端</b>（DXY 100.85；MOVE 本次不可用）。全部透过一条死的
                衍生品盘面读——已进第十八个日历日——OKX 监控冻结 401.4h、SM feed
                死 ~21.94 天。交易台把重夺 MA 对与从下方试地板读成谱系带过最建设性
                的一次转向——但在一条瞎的盘面上它仍无法确认成需求、且引擎在高位闪
                <b>两根</b> TD9 SELL、所以这第三根上收与这次贴地板买的是尊重、不是追。
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
                    核验——现<b>陈旧 401.4h</b>（07-03 备忘是 377.4h、07-02 是
                    353.4h——断线自上一篇又跑了约 24h、进第十八个日历日）。funding /
                    OI / CVD / basis / retail / taker-flow 都是 06-17 06:43Z 的
                    <b>last-known</b>、不是当前值。SM 子 feed（long_btc / short_btc /
                    net_btc）冻得更久——自 2026-06-12 01:36Z 起恒定（~526.5h /
                    ~21.94 天）；SM net 与 SM cut-fraction 本次<b>不可计算</b>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-07-04 00:01Z scan</td>
                  <td className="dn-flag">
                    最新（较锚早约 4 分钟）· 滚动 latest 文件、逐字存档于
                    /opt/desk-note/snapshots/2026-07-04-0005/ · 含未收盘 K 线 ·
                    扫描现货 $62,583、24h +1.71%、24h H/L $62,957 / $61,229、
                    qVol $8.22B
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-04 00:01Z 快照</td>
                  <td className="dn-flag">
                    最新（较锚早约 4 分钟）· Deribit idx $62,823（比 parquet 现货
                    $62,646.80 高 $176）· 914 合约 · net GEX <b>+88.1M</b>（净多 γ、
                    从 07-03 的 +60.7M <b>加深</b>；07-02 是 +12.0M）· flip $61,296
                    （现货 +2.20% 在<b>上方</b>、从 07-03 的 +1.90%）· 前端是
                    4JUL26 0.3 DTE <b>+19.61M</b>（正、约今日 08:00Z 结算）、但一根
                    近端下行放大器<b>又冒出来</b>了、在{' '}
                    <b>7JUL26 3.3 DTE −8.22M</b>（三个 session 外一个新鲜的集中短端
                    下行口袋）——最重的正天花板是 <b>$63k +31.62M</b>、看跌墙是
                    <b>$60k −21.49M</b> · 现货 $62,646.80 坐在 200W 地板 $62,643 上、
                    就在 $63k 天花板下
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-04 00:01Z
                  </td>
                  <td className="dn-flag">最新 · 7d 1h bar · 22 资产 · 167 rows · regime 特异（mean |r| 0.192、较 07-03 <b>不变</b>——BTC 稳在 0.25 特异阈下、且它 7d 回报 +4.27% <b>领先</b> NQ +1.58% 达 +2.69pt、领先 SP500 +1.88% 达 +2.39pt、尽管几根大盘股与金属坐得更前——BTC 是复合里第 9）</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-03 22:16Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.82h · 10Y <b>4.48%</b>（+4.0bp、距 4.53% 闸 5bp）、
                    TIPS <b>2.25%</b>（+5.0bp、极端 RISK-OFF）、HY OAS
                    <b>2.75%</b>（+1.0bp——仍在 2.78% re-grow 闸<b>下</b>、闸仍不点、
                    距 3bp）· MOVE 债波 <b>本次不可用</b>（抓取失败；07-03 是 68.6）·
                    FX 腿：<b>DXY 100.85</b>（−0.54 日、走软但仍极端）与 <b>USD/JPY
                    161.34</b>（−0.11 日、日元从 162.54 走强）· Fed 净流动性 $5.843T
                    （源面板 delta +0.053T、较 07-03 不变）· NFCI 中性（现陈旧 ~14d）·
                    WTI $71.9（陈旧 ~4d）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-07-04 00:06Z（close $62,646.80）</td>
                  <td className="dn-flag">
                    新鲜 K 线（交易所 OHLC、独立于冻结的 live 盘面）· 偏移按
                    parquet 最末 bar close 重算、是 live 盘面冻结下能拿到的最新
                    现货 · 显示的周线阶梯用 2023→ 子集（184 根周 bar）、所以无
                    W-SMA200 行（W-EMA200 $67,461 从可用历史 seed）；200W 地板
                    从全历史 glob 直接重算——<b>356 根收盘周 W-MON bar</b>
                    （2019→今、含已结算的 06-29 周、不含未收盘的 07-06 周）——
                    = <b>$62,643</b>、较 07-03 <b>不变</b>（06-29 周四个 cut 前
                    已结算、无台阶）。<b>谱系里第一次有两根 MA 压在现货脚下——
                    D-SMA20 $62,156（+0.79%）与 D-EMA20 $62,210（+0.70%）——连续
                    九根&ldquo;脚下无 MA&rdquo;的记录终结、而现货 +0.01% 贴着
                    200W 地板 $62,643、从下方试它</b> · weekly_200sma.json 本次
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
              <span className="dn-v bear">−7.24%（陈旧 · 06-17 06:43Z · 401.4h）</span>
              <span className="dn-src">live_db 原始 funding −0.006608 × 1095 = −7.24% ann（不 ×100）· 06-17 06:43Z 冻结点的 last-known、现陈旧 401.4h、非当前读 · 与 06-19 → 07-03 备忘逐字同一根冻结行；冻结前 24h+1m 含端采样窗（1,442 行）的 last-available ann 均值 +0.20%、区间 −7.24% / +7.21%、819 / 1,442 行负——盘面死时是一本平衡的双向本子</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 对 07-03</span>
              <span className="dn-v">盘面冻结——不可计算</span>
              <span className="dn-src">live 盘面自 06-17 06:43Z 起没再写、所以仍没有当前 funding 去对 07-03 备忘作差 · 冻结点 last-known 印是 −7.24% ann（空付多）；杠杆门连续第十八天不可评估</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−468 BTC（−0.45%）· 陈旧窗</span>
              <span className="dn-src">live_db oi_btc 102,945 在 06-17 06:43Z 冻结点 对一根 24h+1m 含端采样窗（1,442 行）起点 · 窗<b>止于</b>冻结、不是进 00:05Z 快照——它描述的是到 06-17 06:43Z 的盘面、陈旧 401.4h</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bear">59.47 / 40.53 · 陈旧</span>
              <span className="dn-src">live_db `mkt_long_pct` 在 06-17 06:43Z 冻结点（24h+1m 含端采样窗起点是 58.29%——滚动进去 +1.18pt 加多）· last-known、陈旧 401.4h</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">−37.29k · FEED 死 ~526.5h</span>
              <span className="dn-src">long 13,532.4 − short 50,825.7 · 这一组三元自 2026-06-12 01:36Z 起逐字恒定（~526.5h / ~21.94 天）——是一根<b>冻结值</b>、不是当前仓位读；只为标记死 feed 而带</span>
            </div>
            <div>
              <span className="dn-k">SM Δ / cut fraction</span>
              <span className="dn-v">不可计算</span>
              <span className="dn-src">SM feed 冻结 ~21.94 天 · |Δ| / prior_net 无法算——没有当前 SM net 去作差 · 挤压周期 / 重堆框架本次瞎、是 06-16 → 07-03 ON-HOLD 的延续</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">42.1% / 38.05%</span>
              <span className="dn-src">GEX 914 合约 IV 中位数（00:01Z、最新）对 parquet 30D 收对收 RV 38.05%——链层丰度较已实现 ~+4.05pt（07-03 是 ~+5.25pt——第三根上收上 IV 松而 RV 走强、丰度收窄）；RV 走强（07-03 是 37.55%、替代 29-return 窗读 35.07%）· IV 是 914 合约链中位数、不是可交易价差</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+2.20%（在上方 · 延伸）</span>
              <span className="dn-src">flip $61,296（前 $60,286 · +$1,010）· 对 parquet 现货 $62,646.80（62,646.80 / 61,296 − 1 = +2.204%）/ GEX 文件 Deribit idx $62,823（62,823 / 61,296 − 1 = +2.491%、文件读 +2.5%）——两参考都在 flip 上方、从 07-03 的 +1.90% <b>延伸</b> · net GEX +88.1M（净多 γ、从 +60.7M 加深）· 一根近端下行放大器又冒出来（7JUL26 3.3 DTE −8.22M）、即便前端 4JUL26 读 +19.61M</span>
            </div>
          </div>
          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                反弹一路弹到地板了——07-03 日线收阳 +$1,024.90 到 $62,565.50、
                是连续第三根上收、也是第十根收在 $62,643 地板下（−0.12%）、并做成
                了这一轮之前没一根做到的事：它重夺回 D-EMA20 / D-SMA20 那一对、
                所以谱系里第一次有两根 MA 压在现货脚下、而未收盘的 07-04 bar
                $62,646.80 坐在 200W 地板上方 +0.01%、正从下方试它（07-04 的日收
                还不存在）。dealer 本子再加深到 +88.1M 净多 γ、但一根近端下行放大器
                <b>又冒出来</b>（7JUL26 3.3 DTE −8.22M）；现货推到 flip 上方 +2.20%；
                MTF 引擎<b>翻回</b>5/9 趋势延续 regime、标题改善到 4/5/1——但它现在
                印出<b>两根</b>⚡TD9 SELL（4h 加 8h）就在高位、带 15m / 1h 顶背离、
                一个加强了的超买反转签名。全部透过一条死的衍生品盘面读、进第十八个
                日历日
              </span>
              。现货报{' '}
              <span className="dn-tag bull">$62,646.80、24h +1.98%</span> 在 00:06Z
              parquet bar（MTF 扫描按它自己窗读 +1.71%）、从 07-03 备忘现货
              $61,433 抬上来——谱系把反弹一路弹回它 06-24 丢掉的那条地板。200W
              破位仍{' '}
              <span className="dn-tag bear">在 06-29 周收 $60,224.70 确认、地板
              $62,643 下 −3.86%</span>、06-15 重夺论仍被证伪、地板本次不变
              （$62,643、06-29 周四个 cut 前已结算）。连续十根日收
              （06-24 $61,051 −2.54%、06-25 $59,772 −4.58%、06-26 $60,072
              −4.10%、06-27 $60,000 −4.22%、06-28 $59,550 −4.94%、06-29
              $60,224.70 −3.86%、06-30 $58,605.40 −6.45%、07-01 $59,999.60
              −4.22%、07-02 $61,540.60 −1.76%、{' '}
              <span className="dn-tag bull">07-03 $62,565.50 −0.12%、一根上收
              +$1,024.90、连续第三根、也是这一轮离地板最近</span>）现都坐在地板下、
              最后三根都是上收、把现货抬回线上。谱系里第一次现货脚下有 MA——{' '}
              <span className="dn-tag bull">D-SMA20 $62,156（+0.79%）与 D-EMA20
              $62,210（+0.70%）</span>现在是支撑、而 200W 地板 $62,643（+0.01%）
              就贴在现货处。dealer 本子{' '}
              <span className="dn-tag bull">加深到 +88.1M 净多 γ</span>、前端 4JUL26
              是 +19.61M、但一根{' '}
              <span className="dn-tag bear">近端下行放大器又冒出来（7JUL26
              −8.22M）</span>；现货坐在 $63k +31.62M 正天花板处、在 $60k −21.49M
              看跌墙上。MTF 标题改善到{' '}
              <span className="dn-tag">4 多 / 5 空 / 1 中</span>（从 3/6/1）、regime
              分类器{' '}
              <span className="dn-tag bull">翻回 5/9 趋势延续（JT≥0）</span> 从周期
              反转——但引擎现在带{' '}
              <span className="dn-tag bear">两根 ⚡TD9 SELL（4h 加 8h）在高位</span>、
              带 15m / 1h 顶背离、一个加强了的超买签名。宏观在利率上守、信用上松：
              10Y 守 4.48%（距闸 5bp）、HY OAS +1bp 到 2.75%（仍在 2.78% re-grow
              闸<b>下</b>——闸不点、距 3bp）、DXY 守 100.85 极端。{' '}
              <span className="dn-em">
                作业事实不变、仍具约束：OKX 监控现已冻结 401.4h（末行 2026-06-17
                06:43Z）、funding / OI / CVD / basis / retail 都是 last-known 且
                陈旧、SM 仓位本子死 ~21.94 天——SM net 与 cut-fraction 不可计算。
                第三根上收把现货带到地板、并谱系里第一次把两根 MA 摆到脚下、
                gamma/价格图是谱系带过最建设性的一张——但那条会告诉你这是需求还是
                薄回补的盘面仍然是死的、引擎现在在高位闪两根 TD9 SELL。读法只落在
                价格、gamma 和 MTF 上。
              </span>{' '}
              本子保持 flat：破位已确认、重夺论已死、把现货带到地板的这根反弹——
              尽管一切都在改善——在一条瞎的盘面上无法确认、且现在被高位两根超买
              反转印迎头撞上。scout 的价格前置条件保持<b>真</b>并<b>加强</b>
              （现货 flip 上方 +2.20%、两根 MA 在脚下、贴着地板）、但 scout 保持
              按兵。无空、无 scout、无新对冲。
            </p>
            <p>
              BTC 报 <span className="dn-tag">$62,646.80</span> 在 parquet 最末 bar
              （00:06Z）、{' '}
              <span className="dn-tag bull">+1.98%</span> 在 24h（对精确 24h 前
              的 $61,433 bar——07-03 00:06Z parquet bar；MTF 扫描按它自己 00:01Z
              窗读 +1.71%——这道差是参考窗、不是数据冲突）、在一条{' '}
              <span className="dn-tag">$62,957 / $61,229</span> 的 24h 区间里
              （按 MTF 扫描 H/L）。Deribit index 00:01Z 读 $62,823、MTF 扫描
              现货是 $62,583——所以最新现货在三个独立新鲜源上互证得很好
              （parquet K 线 $62,646.80、GEX Deribit index $62,823、MTF 扫描
              $62,583）、即便平时供它的 live_db 盘面冻在 06-17 06:43Z、陈旧
              401.4h。{' '}
              <span className="dn-signal">结构读法从一根确认破位 + 反弹延伸到第三根
              session（07-03 备忘）、走到同一根确认破位、反弹现已<b>一路弹到地板</b>
              ——07-03 日收 $62,565.50 是连续第三根上收（+$1,024.90）、也是这一轮
              第一根重夺回 D-EMA20 / D-SMA20 对的、而未收盘 07-04 bar $62,646.80
              从下方试 200W 地板 $62,643（+0.01%；07-04 日收还不存在）</span>
              ：22JUN 周收 $63,990 是最后一根周线守、日收沿线走下（06-22 →
              06-28）、06-29 周线 bar 收 $60,224.70 在地板下确认破位、06-29 日线
              bar 反弹、06-30 bar 把它反掉、07-01 → 07-03 连着弹三根回到地板。按
              框架破位在周收口径确认、06-15 重夺论被证伪；本次没有任何东西撤销这点
              ——反弹是确认破位内的一根反弹、直到一根周收重夺地板。{' '}
              <span className="dn-em">
                谱系唯一那根结构正在周收口径破了、重夺论已死；但现货现在脚下有两根
                MA、贴着地板、本子深净多 γ——谱系带过最建设性的 gamma/价格图、也是
                第一根结构性恢复（一根周收重回 $62,643 上方）进真射程的 cut。交易台
                把它读成一次它还无法在瞎盘面上确认成需求的真改善、而现在引擎在高位
                闪两根超买反转印。
              </span>
            </p>
            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · LIVE 盘面冻结 401.4h（第十八天）· SM 本子死 ~21.94 天 · funding/OI/flow last-known 陈旧 · 07-03 的上收把反弹带到地板、并重夺回 D-EMA20/D-SMA20 对、但交易台仍看不见这是需求在消化破位、还是薄回补——仓位盘面是黑的</span>
            </h2>

            <p>
              <span className="dn-signal">
                本篇最重要的那个源——live 衍生品盘面——仍然是死的、连续
                第十八个日历日
              </span>
              。OKX 监控自{' '}
              <span className="dn-tag bear">2026-06-17 06:43Z</span>（t = &ldquo;06-17
              14:43&rdquo; BJ；文件 mtime 06-17 06:43:08Z 佐证写入停在那；进程
              状态本次未存档或核验、所以本篇断言的是缺失的盘面、不是一个
              live/挂起的进程）起没再往 live_db.json 追加过行。那现在是{' '}
              <span className="dn-tag bear">401.4h 的缺失盘面</span>、对 00:05Z
              快照锚——06-20 备忘在 65.4h 标它、06-27 在 233.4h、06-30 在
              305.4h、07-03 在 377.4h、断线又跑了约 24h 没写。live 盘面带的一切
              ——funding、持仓、现货/期货 CVD、perp basis、retail 多%、taker-net、
              大单 flow、攻击方偏斜——因此都是{' '}
              <span className="dn-em">06-17 06:43Z 的 last-known、非当前</span>。
              聪明钱仓位三元（long_btc / short_btc / net_btc）逐字恒定——{' '}
              <span className="dn-tag">13,532.4 / 50,825.7 / −37,293.3</span>——自{' '}
              <span className="dn-tag bear">2026-06-12 01:36Z</span>、~526.5h
              （~21.94 天）。06-16 备忘在 ~94.5h 标了这根死 feed、把挤压周期
              ON HOLD；07-03 备忘带它到 ~502.5h；今天是 ~526.5h、仍死。{' '}
              <span className="dn-em">
                SM net 作为当前读不可计算、SM cut fraction（|Δ| / prior_net）
                无法构成——没有当前 SM net 去作差。本篇任何仓位主张都明确是
                历史的、不是 live 的。
              </span>
            </p>

            <p>
              为完整起见、<em>last-available</em> 的盘面读数——全部钉在 06-17
              06:43Z 冻结点、现陈旧 401.4h、且与 06-19 → 07-03 备忘逐字同一批
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
                那程、06-29 周收确认、06-30 反掉、以及 07-01 → 07-03 三根 session
                弹回地板的反弹、所以它对这根弹到地板的反弹是空头回补耗尽还是需求
                消化破位什么都没说。交易台把仓位维度当未知、把这根到地板的反弹当
                仓位未确认。
              </span>
            </p>
            <h2 className="dn-sec">
              结构 <span className="dn-roman">II · 价格/MTF 最新 · 多 TF 共振混合 4 多 / 5 空 / 1 中（从 3/6/1 改善一档——1h 重夺回一根水上金叉）· 净读高 TF 偏空 · 短周期反弹 · 快框架 30m/1h 金叉、中段 4h/8h/12h/1d 水下金叉、但两根 ⚡TD9 SELL（4h 加 8h）印在高位、带 15m/1h 顶背离 · 1M TD9 buy 仍印 · regime 翻回 5/9 趋势延续（JT≥0）· 谱系里第一次两根 MA 压在现货脚下（D-SMA20 / D-EMA20）、现货 +0.01% 贴着 200W 地板 $62,643、破位仍确认但恢复在射程</span>
            </h2>

            <p>
              <span className="dn-signal">
                MTF 图最新、标题改善一档（4 多 / 5 空 / 1 中、1h 重夺回一根水上
                金叉）、中段框架（4h/8h/12h/1d）守住水下金叉、regime 分类器翻回
                趋势延续——但引擎现在印出两根 ⚡TD9 SELL（4h 加 8h）就在高位、带
                15m / 1h 顶背离、一个加强了的超买反转签名
              </span>
              ——这一维、与 dealer 图一起、是交易台今天仍能信的一维、本次它读成
              反弹进去的做顶张力、即便趋势框架转建设性。00:01Z 扫描标{' '}
              <span className="dn-tag">4 多 / 5 空 / 1 中、跨 10 框架</span>、
              净读 <em>高时间框偏空 · 短周期反弹</em>——从 07-03 扫描的 3/6/1
              改善、因 1h 重夺回一根水上金叉。regime 行读{' '}
              <span className="dn-tag bull">5/9 趋势延续 / 周期动量 regime（JT≥0）</span>
              （07-03 是 5/9 周期反转）、所以分类器从均值回归翻回趋势延续——但
              引擎现在带两根新鲜超买反转印去对抗、不是一个干净的建设性触发。源
              偏向的多框架是{' '}
              <span className="dn-tag">15m / 30m / 1h / 1M</span>——快栈（15m /
              30m / 1h）云上、1M 云上（印 TD9 buy）、4h 也云上（支撑 ↓61.8k）——
              而 8h 云内、12h → 1w 仍云下偏空。本次那根印是做顶签名：{' '}
              <span className="dn-tag bear">两根新鲜 ⚡TD9 SELL 在 4h 加 8h（超买
              反转提示、就在高位）</span>、带{' '}
              <span className="dn-tag bear">15m / 1h 顶（看空反转）背离</span>、
              15m 滚成一根{' '}
              <span className="dn-tag bear">水上死叉（5 bar）</span>——动量从高位
              翻下、在快框架上。中段框架仍守建设性侧：{' '}
              <span className="dn-tag">4h / 8h / 12h / 1d 水下金叉（15 / 8 / 5 / 3
              bar）</span>——全是未确认的水下试探——而高框架（12h → 1w）仍云下
              （8h 云内）、{' '}
              <span className="dn-tag bear">1w 带一根水下死叉（1 bar）</span>。
              云：15m / 30m / 1h / 4h / 1M 云上、8h 云内、12h → 1w 云下。那建设性
              集合是{' '}
              <span className="dn-tag">快框架金叉、中段水下金叉、一根 1M TD9 buy、
              以及 30m / 8h / 12h / 1d 底（看多反转）背离（一簇高 TF 底背离）</span>
              ——对着高位那两根新鲜 TD9 SELL 与 15m / 1h 顶背离摆着。{' '}
              <span className="dn-em">
                直读：框架栈改善一档、regime 翻成趋势延续、快框架加一簇高 TF
                底背离读建设性——但引擎印出两根 TD9 SELL（4h 加 8h）配 15m / 1h
                顶背离、就在高位、所以超买反转签名本次加强了。在高位、200W 地板
                确认破但现货现在贴着它（+0.01%）、两根 MA 在脚下、引擎的建设性印
                （快/中段金叉、1M TD9 buy、底背离簇）被两根超买反转印抵消——所以
                没有一个干净的多框架转向去做多这根破位、也是一个不信任这些位置
                延伸的理由、即便趋势框架在转。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">62,583</td><td className="num">57.9</td><td className="bear">死叉（水上）5b</td><td className="bull">云上 ↓61.9k 57b</td><td>Sell 3</td><td>BEAR reg（顶）· BULL hid</td></tr>
                <tr><td>30m</td><td className="num">62,583</td><td className="num">63.4</td><td className="bull">金叉（水上）14b</td><td className="bull">云上 ↓60.9k 117b</td><td>Buy 4</td><td>BULL hid · BULL reg（底）</td></tr>
                <tr><td>1h</td><td className="num">62,583</td><td className="num">66.9</td><td className="bull">金叉（水上）4b</td><td className="bull">云上 ↓60.3k 57b</td><td>Buy 1</td><td>BEAR reg（顶）· BULL hid</td></tr>
                <tr><td>4h</td><td className="num">62,583</td><td className="num">67.0</td><td className="bull">金叉（水下）15b</td><td className="bull">云上 ↓61.8k 4b</td><td className="bear">⚡TD9 SELL</td><td>BEAR hid</td></tr>
                <tr><td>8h</td><td className="num">62,583</td><td className="num neut">62.4</td><td className="bull">金叉（水下）8b</td><td className="neut">云内 61.8k–62.6k 1b</td><td className="bear">⚡TD9 SELL</td><td>BEAR hid · BULL reg（底）</td></tr>
                <tr><td>12h</td><td className="num">62,583</td><td className="num neut">57.3</td><td className="bull">金叉（水下）5b</td><td className="bear">云下 ↑64.1k 85b</td><td>Sell 5</td><td>BULL reg（底）</td></tr>
                <tr><td>1d</td><td className="num">62,583</td><td className="num neut">47.9</td><td className="bull">金叉（水下）3b</td><td className="bear">云下 ↑68.6k 33b</td><td>Sell 3</td><td>BEAR hid · BULL reg（底）</td></tr>
                <tr><td>3d</td><td className="num">62,583</td><td className="num bear">40.5</td><td className="neut">—</td><td className="bear">云下 ↑70.6k 11b</td><td>Sell 1</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">62,583</td><td className="num bear">37.0</td><td className="bear">死叉（水下）1b</td><td className="bear">云下 ↑99.5k 22b</td><td>Buy 7</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">62,583</td><td className="num bear">43.0</td><td className="neut">—（DIF 水下）</td><td className="bull">云上 ↓47.0k 29b</td><td>TD9 BUY</td><td>BULL reg（底）</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 00:01Z scan（08:01 北京；滚动 latest
                    文件、逐字存档于 /opt/desk-note/snapshots/2026-07-04-0005/）。
                    净读 <em>高时间框偏空 · 短周期反弹（4 多 / 5 空 / 1 中）</em>；
                    regime <em>5/9 趋势延续 / 周期动量 regime（JT≥0）</em>；活跃
                    背离 <em>反转：顶背离 15m / 1h、底背离 30m / 8h / 12h / 1d；
                    隐藏（延续）：BEAR hid 4h / 8h / 1d、BULL hid 15m / 30m / 1h</em>。
                    头部告警：<em>⚡4h TD9 SELL 与 ⚡8h TD9 SELL 双双印出——超买反转
                    提示（就在高位）</em>、<em>⚡1M TD9 BUY 印出——超卖反转提示</em>、
                    <em>1w 水下死叉（1 bar 前、DIF −5,878.7）</em>、<em>1d 水下
                    金叉（3 bar 前）</em>、<em>8h 水下金叉（8 bar 前）</em>、
                    <em>12h 水下金叉（5 bar 前）</em>。扫描现货 $62,583、24h +1.71%、
                    24h H/L $62,957 / $61,229、qVol $8.22B。收盘为未收盘 K 线；每个值
                    在各周期收盘前都按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              MA 矩阵走出谱系第一次结构性转向：第三根上收把现货推上 D-SMA20 /
              D-EMA20 对、所以这一轮第一次{' '}
              <span className="dn-tag bull">两根 MA 压在现货脚下——D-SMA20 $62,156
              （+0.79%）与 D-EMA20 $62,210（+0.70%）现在是支撑</span>、终结连续
              九根&ldquo;脚下无 MA&rdquo;的记录。它们之上、200W 地板就贴在现货处：{' '}
              <span className="dn-tag bull">现货 $62,646.80 是 +0.01% 贴着全历史
              W-SMA200 200W 地板 $62,643</span>（本次不变）、从下方试它。然后墙
              往上退回头顶——周期代理{' '}
              <span className="dn-tag bear">D-EMA50 $65,895（−4.93%）</span>、然后{' '}
              <span className="dn-tag bear">D-SMA50 $67,073（−6.60%）</span>、然后{' '}
              <span className="dn-tag bear">W-EMA200 $67,461（−7.14%、种子）</span>、
              然后一道密的头顶带：{' '}
              <span className="dn-tag bear">D-EMA100 $69,662（−10.07%）</span>、{' '}
              <span className="dn-tag bear">D-SMA150 $70,284（−10.87%）</span>、{' '}
              <span className="dn-tag bear">W-SMA20 $70,699（−11.39%）</span>、{' '}
              <span className="dn-tag bear">D-SMA100 $71,001（−11.77%）</span>、{' '}
              <span className="dn-tag bear">W-EMA20 $72,156（−13.18%）</span>、{' '}
              <span className="dn-tag bear">D-EMA150 $72,850（−14.01%）</span>、{' '}
              <span className="dn-tag bear">W-EMA150 $73,878（−15.20%）</span>、{' '}
              <span className="dn-tag bear">D-SMA200 $74,834（−16.29%）</span>、{' '}
              <span className="dn-tag bear">W-SMA150 $75,902（−17.46%）</span>、{' '}
              <span className="dn-tag bear">D-EMA200 $75,763（−17.31%）</span>。更高
              更远、已弃用：W-EMA100 $80,203（−21.89%）、W-EMA50 $81,031
              （−22.69%）、W-SMA100 $88,548（−29.25%）、W-SMA50 $88,703
              （−29.37%）。{' '}
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-07-04 00:06Z（close $62,646.80）；
                偏移按那同一根最末 bar close 重算、是 live 盘面冻结下能拿到的
                最新现货。显示的 MA 水位按 $ 取整、偏移用精确序列值算。显示的
                周线阶梯用 2023→ 子集（184 根周 bar）、所以 W-SMA200 那里不可
                计算、W-EMA200 $67,461 从可用历史 seed；200W 地板 $62,643 从
                全历史 glob 另算（356 根收盘周 W-MON bar、含已结算的 06-29 周、
                不含未收盘的 07-06 周——较 07-03 不变）。日线收盘：06-22 $63,990
                （= 22JUN 周收）、06-23 $62,697、06-24 $61,051（首根收破地板）、
                06-25 $59,772、06-26 $60,072、06-27 $60,000、06-28 $59,550、
                06-29 $60,224.70（确认破位的周收）、06-30 $58,605.40（这一轮
                最深、−6.45%）、07-01 $59,999.60（上收 +$1,394.20）、07-02
                $61,540.60（上收 +$1,541.00）、07-03 $62,565.50（第十根收在下、
                一根上收 +$1,024.90——连续第三根、也离地板最近、−0.12%）、07-04
                （未收盘、5 分钟 bar）$62,646.80（+0.01% 贴着地板）——地板破位仍
                确认、反弹把现货带回线上、脚下现有两根 MA。
              </span>
            </p>
            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子再加深到净多 γ aggregate +88.1M（07-03 是 +60.7M、07-02 是 +12.0M）——本子把下一步阻尼得更狠 · 前端是 4JUL26 0.3 DTE +19.61M（约今日 08:00Z 结算）、但一根近端下行放大器又冒出来、在 7JUL26 3.3 DTE −8.22M——三个 session 外一个新鲜的集中短端下行口袋 · flip 台阶 $60,286 → $61,296、现货推上方 +2.20% · 最重天花板 $63k +31.62M（贴现货）、看跌墙 $60k −21.49M · IV 42.1%</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子再加深它的净多 γ 姿态：aggregate γ 从 +60.7M 升到
                +88.1M 净多 γ、所以本子把下一步阻尼得更狠、flip 重夺随现货推得
                更高而走阔——谱系带过最建设性的 gamma 背景；但一根近端下行放大器
                <b>又冒出来</b>、在 7JUL26 −8.22M、一个 07-03 本子没带的新鲜短端
                口袋
              </span>
              。aggregate GEX 是{' '}
              <span className="dn-tag bull">+88.1M / 1%</span>（07-03 是 +60.7M、
              07-02 是 +12.0M、07-01 是 −31.5M）；本子近几篇里空 → 多 → 更深多 →
              更深地甩、现在坐这一轮最深的净多 γ。0-γ flip 台阶{' '}
              <span className="dn-tag">$60,286 → $61,296（+$1,010）</span>、现货
              $62,646.80 推得更上、所以现货坐{' '}
              <span className="dn-tag bull">flip 上方 +2.20%</span>
              （现货口径 62,646.80 / 61,296 − 1 = +2.204%）；GEX 文件自己的
              &ldquo;dist to flip&rdquo; 对它的 Deribit-index $62,823（比 parquet
              现货高 $176）读 +2.5%、即{' '}
              <span className="dn-tag bull">+2.49%</span>
              （62,823 / 61,296 − 1 = +2.491%）——两参考都在 flip 上方、从 07-03
              的 +1.90% <b>延伸</b>。墙图是现货处一道正天花板、下方单独一根深
              看跌墙：最重的是{' '}
              <span className="dn-tag bull">$63k +31.62M</span>（最重墙、正天花板、
              就贴现货 / 地板处）、下方深看跌墙{' '}
              <span className="dn-tag bear">$60k −21.49M</span>、然后头顶一叠正
              天花板{' '}
              <span className="dn-tag bull">$64k +16.64M</span>、{' '}
              <span className="dn-tag bull">$66k +13.79M</span>、{' '}
              <span className="dn-tag bull">$65k +13.03M</span>、{' '}
              <span className="dn-tag bull">$70k +12.99M</span>、{' '}
              <span className="dn-tag bull">$68k +10.60M</span>、{' '}
              <span className="dn-tag bull">$62.5k +8.11M</span>、{' '}
              <span className="dn-tag bull">$80k +8.02M</span>、以及下方{' '}
              <span className="dn-tag bear">$56k −7.73M</span>。{' '}
              <span className="dn-em">
                关键是 aggregate 深净多 γ、所以本子把下一步阻尼得更狠、而不是
                放大它——07-03 那本 +60.7M 的加深、谱系带过最建设性的 gamma
                背景。现货 $62,646.80 坐在 $63k +31.62M 正天花板处（它括住地板
                $62,643 / D-SMA20 $62,156 区）、在 $60k −21.49M 看跌墙上；正天花板
                把反弹就在地板处封住、下方那根深看跌墙是近的架子。但这本深多 γ
                读法本次带一个警：一根近端下行放大器又冒出来、在 7JUL26 3.3 DTE
                −8.22M——三个 session 外一个新鲜的集中短端下行口袋、07-03 本子没带、
                所以建设性的 aggregate 在前端不干净。而那条会说它下面这段价格动作
                是不是需求的盘面仍是死的、MTF 引擎在高位闪两根 TD9 SELL。
              </span>{' '}
              按到期、近端集中在最前端是正的、但揣着又冒出来的 7JUL26 负：前端是
              那根正的 4JUL26{' '}
              <span className="dn-tag bull">0.3 DTE +19.61M（约今日 08:00Z 结算）</span>、
              然后 5JUL26 1.3 +6.11M、6JUL26 2.3 +2.62M、7JUL26 3.3{' '}
              <span className="dn-tag bear">−8.22M（又冒出来的近端下行放大器）</span>、
              10JUL26 6.3{' '}
              <span className="dn-tag bull">+21.65M</span>、17JUL26 13.3{' '}
              <span className="dn-tag bull">+20.37M</span>、24JUL26 20.3 +2.70M、
              31JUL26 27.3{' '}
              <span className="dn-tag bull">+29.21M</span>、28AUG26 55.3 +4.51M、
              25SEP26 83.3{' '}
              <span className="dn-tag bear">−1.25M</span>、25DEC26 174.3 +1.40M、
              26MAR27 265.3 +0.57M、25JUN27 356.3 +0.52M。3JUL26 前端约昨日
              08:00Z 结算；07-02 备忘在 3JUL26 −7.75M 看到的下行放大器、07-03
              备忘看它随 3JUL26 滚到前端而翻正的、现已<b>又冒出来</b>、在 7JUL26
              −8.22M——集中的短端下行回来了、三个 session 外。（现货参考的
              aggregate +88.1M 是现货处的 net GEX；按到期的行是一个独立分解、
              不必加总到它。）
            </p>

            <p>
              914 合约的 IV 中位数是{' '}
              <span className="dn-tag">42.1%</span>（从 07-03 的 42.8% / 926
              合约松）对 30D 收对收 RV{' '}
              <span className="dn-tag">38.05%</span>——链层丰度较已实现{' '}
              <span className="dn-tag">~+4.05pt</span>（07-03 是 ~+5.25pt——第三
              根上收上 IV 松而 RV 走强、丰度收窄）、RV 从它近期路径走强（今天
              38.05% 对 07-03 的 37.55% 与 05-31 的 24.91%——替代 29-return 窗读
              35.07%）。一个 914 合约的链中位数、<span className="dn-em">不是</span>
              一个可交易价差；到期/strike 层 vega、skew 与期限结构仍未载入、vol
              读法保持 framework only。RV 方法：30D 收对收、logret.std × √365 ×
              100 于最后 30 根日线对数回报（= 31 根连续日收）锚自 parquet 最末 bar
              2026-07-04 00:06Z。P/C 比与 Call/Put OI 拆分本次未再制表。
            </p>
            <h2 className="dn-sec">
              宏观 <span className="dn-roman">IV · ~1.82h 渲染——10Y 守 4.48%（距闸 5bp）、TIPS 2.25% 极端 RISK-OFF、HY OAS 2.75% +1.0bp 仍在 2.78% re-grow 闸下（闸仍不点、距 3bp）、MOVE 本次不可用 · FX 腿守/走强：DXY 100.85（仍极端）与 USD/JPY 161.34（日元走强）· regime 仍特异（mean |r| 0.192、不变）、BTC +4.27% 领先 NQ 达 +2.69pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观面板渲染滞后约 1.82h、读法几乎没变：利率守在 4.48%（距它的闸
                5bp）、而信用价差走阔一点 +1bp 到 2.75%、仍在它的 2.78% re-grow 闸
                <b>下</b>——闸仍不点、距 3bp——美元守 100.85 极端
              </span>
              。面板渲染是 2026-07-03 22:16Z、较快照早约 1.82h。US 10Y 名义{' '}
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
              价差走阔一点 +1bp、仍在它的 2.78% re-grow 闸<b>下</b>（06-30 在
              2.83% 点、07-01 在 2.80% 点、然后 07-02 掉到 2.75% 下、07-03 在
              2.74% 下、本次守在 2.75% 下、所以信用 re-grow 闸<b>仍不点</b>、
              距 3bp）。MOVE 债波{' '}
              <span className="dn-tag stale">本次不可用</span>——源抓取失败
              （07-03 读 68.6）；vol 腿未刷新。美元守极端：DXY{' '}
              <span className="dn-tag bear">100.85（−0.54 日）</span>、regime z{' '}
              <span className="dn-tag bear">+2.12</span>、仍极端。Fed 净流动性{' '}
              <span className="dn-tag">$5.843T</span>、regime z{' '}
              <span className="dn-tag">−0.60</span>——较 07-03 不变；源面板 delta
              列读 +0.053T。USD/JPY{' '}
              <span className="dn-tag">161.34（−0.11 日）</span>、regime z +1.39、
              日元从 162.54 走强；US-JP 10Y 利差{' '}
              <span className="dn-tag">1.83%（+4.0bp）</span> 窄；USD/CNY{' '}
              <span className="dn-tag">6.7881（−0.01）</span>；WTI{' '}
              <span className="dn-tag stale">$71.9（陈旧 ~4d）</span>。{' '}
              <span className="dn-em">
                净：宏观背景在 z-面板上仍 risk-off（利率紧、TIPS 极端、美元极端）、
                但信用边际守松——信用腿走阔一点 +1bp 到 2.75%、仍在 2.78% re-grow
                闸下、所以那根在 06-28 → 07-01 备忘上点过的信用闸连续第三个 cut
                不点（距 3bp）；利率腿守在 4.48%、坐距它的 4.53% 闸 5bp、是更近的
                一腿。reclaim-long 利率筛（10Y &lt; 4.55%）在 4.48% 仍<b>真</b>。
                宏观读法仍是强化而非反驳这根确认破位——一张宽的 risk-off z-面板
                ——但新鲜动作很小：信用闸不点、相关 regime 守特异、BTC 领先 NQ
                （见下方跨资产）、日元走强而美元守极端。
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
                <tr><td>10Y 盈亏平衡</td><td className="num">2.23%</td><td className="num">0.0bp</td><td className="num">−1.56</td><td className="neut">平</td></tr>
                <tr><td>HY OAS</td><td className="num">2.75%</td><td className="num bear">+1.0bp</td><td className="num bull">−0.92</td><td className="bull">仍在 2.78% re-grow 闸下——闸仍不点（距 3bp）</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.504</td><td className="num">−0.00</td><td className="num">+0.40</td><td className="stale">周度 · 中性 · 现陈旧 ~14d</td></tr>
                <tr><td>MOVE 债波</td><td className="num stale">n/a</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">本次不可用 · 抓取失败（07-03 是 68.6）</td></tr>
                <tr><td>DXY</td><td className="num">100.85</td><td className="num bull">−0.54</td><td className="num bear">+2.12</td><td className="bear">极端 RISK-OFF · 守住</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.843T</td><td className="num">+0.053T</td><td className="num">−0.60</td><td className="neut">源面板 delta +0.053T · 较 07-03 不变</td></tr>
                <tr><td>USD/JPY</td><td className="num">161.34</td><td className="num bull">−0.11</td><td className="num bear">+1.39</td><td className="bear">硬 · 日元从 162.54 走强</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">1.83%</td><td className="num">+4.0bp</td><td className="num bull">−1.00</td><td className="neut">窄</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7881</td><td className="num">−0.01</td><td className="num bull">−1.39</td><td className="neut">松</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">月度（63d）</td><td className="num bear">+2.56</td><td className="stale">月度 · 不依赖</td></tr>
              </tbody>
            </table>
            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、summary 00:01Z——{' '}
              <span className="dn-em">一根 7 日滚动读、不是今天</span>）。均值
              非对角 <span className="dn-tag">|r| 0.192</span>——较 07-03 的
              0.192 <b>不变</b>、坐{' '}
              <span className="dn-tag">远在 0.25 特异阈下</span>、所以 regime 行
              保持{' '}
              <span className="dn-signal">特异——BTC 按相关性与广义跨资产复合
              明显脱钩</span>、它的头部关联是一条股/金属簇带、都在 +0.30–0.40
              附近：PLAT{' '}
              <span className="dn-tag">+0.394</span>、PALL{' '}
              <span className="dn-tag">+0.373</span>、SILVER{' '}
              <span className="dn-tag">+0.332</span>、URNM{' '}
              <span className="dn-tag">+0.316</span>、SP500{' '}
              <span className="dn-tag">+0.310</span>、NQ{' '}
              <span className="dn-tag">+0.307</span>、GOLD{' '}
              <span className="dn-tag">+0.303</span>、NVDA{' '}
              <span className="dn-tag">+0.303</span>、COPPER{' '}
              <span className="dn-tag">+0.284</span>、JP225{' '}
              <span className="dn-tag">+0.186</span>、TSLA{' '}
              <span className="dn-tag">+0.148</span>、其中 AMZN{' '}
              <span className="dn-tag">−0.147</span> 与 JPY{' '}
              <span className="dn-tag">−0.115</span> 反向、AAPL{' '}
              <span className="dn-tag">+0.082</span> 近零。而 7d 表现保持 BTC-对-NQ
              框架建设性：BTC 领先 NQ/SP500、不是落后者——{' '}
              <span className="dn-tag bull">BTC +4.27%</span> 在 NQ{' '}
              <span className="dn-tag bull">+1.58%</span> 前 +2.69pt（07-03 是
              +3.14pt 领先）、也在 SP500 +1.88% 前 +2.39pt、尽管几根大盘股与金属
              坐得更前——领头是大盘股 AAPL{' '}
              <span className="dn-tag bull">+9.16%</span>、META{' '}
              <span className="dn-tag bull">+6.42%</span>、GOOGL{' '}
              <span className="dn-tag bull">+6.04%</span> 与金属 SILVER{' '}
              <span className="dn-tag bull">+5.58%</span>、PALL{' '}
              <span className="dn-tag bull">+5.35%</span>、还有 TSLA{' '}
              <span className="dn-tag bull">+5.04%</span>、AMZN{' '}
              <span className="dn-tag bull">+4.69%</span>、MSFT{' '}
              <span className="dn-tag bull">+4.46%</span>、BTC{' '}
              <span className="dn-tag bull">+4.27%</span>、GOLD{' '}
              <span className="dn-tag bull">+2.22%</span>、SP500{' '}
              <span className="dn-tag bull">+1.88%</span>、NVDA{' '}
              <span className="dn-tag bull">+1.65%</span>、NQ{' '}
              <span className="dn-tag bull">+1.58%</span>、URNM{' '}
              <span className="dn-tag bull">+1.08%</span>、PLAT{' '}
              <span className="dn-tag bull">+0.61%</span> 全绿；红的是能源与日本
              ——BRENT{' '}
              <span className="dn-tag bear">−2.54%</span>、CL{' '}
              <span className="dn-tag bear">−2.50%</span>、NGAS{' '}
              <span className="dn-tag bear">−1.85%</span>、JP225{' '}
              <span className="dn-tag bear">−0.71%</span>、JPY{' '}
              <span className="dn-tag bear">−0.25%</span>、COPPER{' '}
              <span className="dn-tag bear">−0.15%</span> 近平。{' '}
              <span className="dn-em">
                BTC 7d 回报 +4.27% 对 NQ +1.58% 是 +2.69pt 的领先（07-03 是
                +3.14pt）——对 NQ 的差跨三根 session 保持明确领先、BTC 不再是落后者、
                尽管几根大盘股与金属更前（BTC 是复合里第 9）。相关 regime 守 0.25
                线下的特异。所以前谱系带的那根尖锐 risk-off / 最差表现读彻底解除
                ——BTC 本次既非在阈上统计耦合、也非落后者。宏观 z-面板仍读 risk-off
                （利率紧、DXY 极端）、但跨资产 regime 守松、BTC 续领 NQ、所以这两个
                跨市场读仍与紧的宏观 z-面板背离。
              </span>{' '}
              JGB 月度 2.65% 带一个极端 RISK-OFF 月度标——别依赖它。
            </p>
            <h2 className="dn-sec">
              交易本子 <span className="dn-roman">V · 本子 FLAT · 200W 地板——破位在 06-29 周收确认（$60,224.70 &lt; $62,643、−3.86%）、06-15 重夺论被证伪；07-03 的上收把反弹<b>带到地板</b>（连续第三根上收、重夺回 D-EMA20/D-SMA20 对）、现货 +0.01% 贴着地板、一次结构性恢复（周收重回 $62,643 上方）现进真射程 · scout 价格前置条件保持真并<b>加强</b>（现货 flip 上方 +2.20%、两根 MA 在脚下）——scout 仍按兵（盘面瞎 ~21.94 天、无确认引擎触发——引擎闪两根 4h/8h TD9 SELL 在高位）· 宏观尾信用闸仍不点（OAS 2.75% &lt; 2.78%）· 挤压周期 ON HOLD（SM 死 ~21.94 天）</span>
            </h2>

            <p>
              <span className="dn-signal">
                本子 flat、且保持 flat——谱系的结构正被裁定<b>对着它</b>（200W
                破位在周收确认、重夺论被证伪）、但 07-03 的上收把建设性 gamma/价格
                图带到地板、并谱系里第一次把两根 MA 摆到现货脚下、约束仍是数据
                完整性——加上引擎现在在高位闪两根 TD9 SELL
              </span>
              。06-29 周收结算 $60,224.70、地板 $62,643 下 −3.86%——破位<b>确认</b>、
              06-15 重夺论<b>被证伪</b>、本次没有任何东西撤销这点。07-03 备忘记的
              是反弹延伸到第三根 session；本次它<b>带到地板</b>——07-03 日收
              $62,565.50 是一根上收 +$1,024.90、连续第三根、重夺回 D-EMA20 /
              D-SMA20 对（两根 MA 现在压在现货脚下）、而未收盘 07-04 bar
              $62,646.80 坐 +0.01% 贴着地板。dealer 本子加深到 +88.1M 净多 γ、但
              一根近端下行放大器又冒出来（7JUL26 −8.22M）、现货推到 flip 上方
              +2.20%。scout 的价格前置条件保持<b>真</b>并<b>加强</b>——现货远在
              flip 上、两根 MA 在脚下、且贴着地板——所以价格腿开着、在改善。但交易台
              仍不出 scout：那条会确认需求的盘面是瞎的、引擎已翻成趋势延续 regime
              但带两根新鲜 TD9 SELL（4h 加 8h）与 15m / 1h 顶背离、就在高位——在
              这里追反弹、进两根超买反转印、进一条瞎盘面、是个差入场。也无新空：
              本子深多 γ、flip 已重夺 +2.20%、现货贴着地板、脚下两根 MA、一根 1M
              TD9 buy 仍印——是个差的压空位置。今天的交易本子是：无空、无 scout、
              无新对冲——先修盘面、再读这根到地板的反弹是空头回补还是需求。
            </p>
            <div className="dn-trade">
              <span className="dn-side framework">framework · PRIMARY · 200W 周期地板盯盘——破位已确认：06-29 周收 $60,224.70 结算在 $62,643 地板下 −3.86%（周收升级已点）、06-15 重夺论被证伪；07-03 的上收把反弹<b>带到地板</b>（现货 +0.01% 贴着 $62,643）、重夺回 D-EMA20/D-SMA20 对；连续十根日收在下（06-24 → 07-03）</span>
              <div className="dn-trade-name">
                200W 周期地板盯盘——破位在 06-29 周收确认、反弹已带到地板：地板 $62,643 = 全历史 W-SMA200（356 根收盘周 bar、本次不变）、06-29 周收 $60,224.70（下 −3.86%）确认破位、07-03 日收 $62,565.50（一根上收 +$1,024.90、连续第三根）把现货压到地板下 −0.12%、未收盘 07-04 bar $62,646.80 是 +0.01% 贴着地板、06-15 重夺论被证伪
              </div>
              <div className="dn-thesis">
                07-03 备忘记的是破位在 06-29 周收确认、反弹延伸到第三根 session。
                本次那根反弹带到地板：07-03 日线 bar 收{' '}
                <span className="dn-tag bull">$62,565.50、地板 $62,643 下 −0.12%</span>
                、一根上收 +$1,024.90、连续第三根、重夺回 D-EMA20 / D-SMA20 对、
                而未收盘 07-04 bar $62,646.80 是 +0.01% 贴着地板、从下方试它。按
                框架、一根盘中 wick 不是破位、一根日收在下是早警、一根持续的周收
                在下是那个破地板、证伪 06-15 重夺论的升级——那根周收印在 06-29、
                所以破位保持<b>确认</b>、重夺论保持<b>被证伪</b>。22JUN 周收
                $63,990 是最后一根周线守；它仍被取代。{' '}
                <span className="dn-em">谱系那根结构正保持在周收口径被裁定对着
                它；但现货现在脚下有两根 MA、贴着地板——地板、不变在 $62,643、
                正被从下方试、而这一轮第一次一次结构性恢复（一根持续的周收重回
                $62,643 上方）进了真射程（未收盘的 07-06 周 bar 读 $62,647）。
                反弹是确认破位内的一根反弹、直到那根周收印出。</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W 地板（不变）</span><span className="dn-lvl-v">$62,643 = 全历史 W-SMA200、本次从 2019→ parquet glob 重算（356 根收盘周 W-MON bar、含已结算的 06-29 周、不含未收盘的 07-06 周）；较 07-03 不变、06-29 周四个 cut 前已结算 · weekly_200sma.json 缺、所以比值分位 / last-event 留作未溯源、不杜撰</span></div>
                <div><span className="dn-lvl-k">破位——已确认、反弹贴地板</span><span className="dn-lvl-v bear">06-29 周收 $60,224.70 结算在地板下 −3.86%——破位确认；连续十根日收在下（06-24 $61,051 −2.54%、06-25 $59,772 −4.58%、06-26 $60,072 −4.10%、06-27 $60,000 −4.22%、06-28 $59,550 −4.94%、06-29 $60,224.70 −3.86%、06-30 $58,605.40 −6.45% 最深、07-01 $59,999.60 −4.22%、07-02 $61,540.60 −1.76%、07-03 $62,565.50 −0.12% 最近）；最后三根是上收；未收盘 07-04 bar $62,646.80 是 +0.01% 贴着地板（07-04 日收还不存在）</span></div>
                <div><span className="dn-lvl-k">重夺论——被证伪</span><span className="dn-lvl-v bear">06-15 重夺论要求地板在周收口径守住；06-29 周收在地板下证伪它——先前 22JUN 周线守（$63,990）被取代</span></div>
                <div><span className="dn-lvl-k">恢复路径（现进射程）</span><span className="dn-lvl-v bull">现货在 flip $61,296 上方 +2.20%、D-SMA20 $62,156 上方 +0.79%、D-EMA20 $62,210 上方 +0.70%（这一轮第一次两根 MA 在现货脚下）、+0.01% 贴着地板 $62,643——一次结构性恢复是一根持续的周收重回地板 $62,643 上方（破位必须撤销的那个水位）；未收盘 07-06 周 bar 读 $62,647、所以恢复第一次进真射程——但一根周收不是瞎盘面上的一个 scout 触发（见 scout）</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework、不是一笔交易。</b>地板盯盘是唯一那根承重的 live
                水位、其余都陈旧或 framework only。破位在周收确认、重夺论被证伪、
                反弹把现货带到地板、脚下两根 MA——盯盘上不取任何仓位：它标定确认
                破位（06-29 周收 $60,224.70 &lt; $62,643）、恢复条件（一根持续的
                周收重回地板 $62,643 上方）、与恢复途站（flip $61,296 → D-EMA20
                $62,210 → D-SMA20 $62,156 → 地板 $62,643、现都在现货脚下或贴着）、
                交易台不会在引擎于高位闪两根 TD9 SELL 时把一根反弹追多进一条瞎
                盘面、也不会在一根确认破位、现货贴着地板、进一本深多 γ 本子、flip
                已重夺、一根 1M TD9 buy 已印的情况下压空。
              </div>
            </div>
            <div className="dn-trade">
              <span className="dn-side long">long · scout · 仍按兵 · 价格前置条件保持真并<b>加强</b>（现货 flip 上方 +2.20%、两根 MA 在脚下、贴着地板）、本子加深净多 γ——这一轮最建设性的价格/gamma 图；但盘面瞎 ~21.94 天 + 无确认引擎触发（引擎闪两根 4h/8h TD9 SELL 在高位）仍约束</span>
              <div className="dn-trade-name">
                回补反弹 scout——flip 重夺保持真（现货 +2.20% 在上）、两根 MA 现在现货脚下、本子加深净多 γ、价格腿开着在改善；scout 在瞎盘面上保持按兵、引擎现在在高位闪两根超买反转印（4h 加 8h TD9 SELL）
              </div>
              <div className="dn-thesis">
                06-30 备忘看到 scout 价格前置条件翻真、07-01 备忘看到它随首根
                反弹失败翻回假、07-02 → 07-03 备忘看到它翻回真并延伸。本次它保持
                真、且进一步加强：现货{' '}
                <em>flip $61,296 上方 +2.20%</em>（flip 台阶 +$1,010）、贴着地板、
                且现在脚下有两根 MA（D-SMA20 $62,156 / D-EMA20 $62,210）、而
                dealer 本子加深到 +88.1M 净多 γ。所以价格与 gamma 两腿是这一轮
                最建设性的。但 scout 保持按兵、且本次理由仍成立：（1）仓位腿
                （SM 空头泄、funding 姿态、回补 flow）全需要一条 live 盘面、而
                没有——交易台看不见这根到地板的反弹是空头回补耗尽还是需求消化。
                （2）引擎不带确认建设性触发——regime 翻成趋势延续、但两根新鲜 TD9
                SELL（4h 加 8h、超买反转提示）印在高位、带 15m / 1h 顶背离、抵消
                了快/中段金叉与 1M TD9 buy。（3）一根近端下行放大器又冒出来
                （7JUL26 −8.22M）、建设性 aggregate 下的一个新鲜短端口袋。{' '}
                <span className="dn-em">在一条仓位瞎的盘面上、无确认引擎印、现在
                还带高位两根超买反转印做多 scout、不是一笔交易——价格腿开着在改善、
                但把一根到地板的反弹追进两根 4h/8h TD9 SELL、在一条瞎盘面上、正是
                交易台按兵的那个入场。1M TD9 buy 与那簇高 TF 底背离是值得记的真
                超卖提示、但在这些位置被 4h 加 8h TD9 SELL 抵消。</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v bear">按兵 · 无入场 · 价格前置条件保持真并加强（现货 flip 上方 +2.20%、两根 MA 在脚下、贴着地板）、本子深净多 γ、但盘面瞎、引擎现在闪两根超买反转（4h 加 8h TD9 SELL）；只在 live 盘面恢复 AND 一根确认引擎印后再评估</span></div>
                <div><span className="dn-lvl-k">技术前置条件</span><span className="dn-lvl-v bear">flip $61,296 重夺（真——现货 +2.20% 在上）AND D-SMA20 $62,156 / D-EMA20 $62,210 重夺（真——两根 MA 现在现货脚下）BUT 地板 $62,643 重夺只在线上（现货 +0.01%、还无周收）AND 一根确认引擎印（不真——4 多 / 5 空 / 1 中、快/中段金叉与一根 1M TD9 buy 被两根新鲜 4h/8h TD9 SELL 与 15m/1h 顶背离抵消；regime 是趋势延续但在高位超买）</span></div>
                <div><span className="dn-lvl-k">数据前置条件</span><span className="dn-lvl-v bear">live 盘面恢复（现冻结 401.4h）AND SM feed live（现死 ~21.94 天）——两者都要成立、任何仓位腿才能读；这是承重的那个 block</span></div>
              </div>
              <div className="dn-gating">
                <b>硬规则：</b>没有 live 仓位盘面、不入 scout。1M TD9 buy、快/中段
                金叉、那簇高 TF 底背离与重夺的 flip 加 MA 对、在 SM / funding /
                flow 腿瞎、引擎现带两根超买反转印（4h 加 8h TD9 SELL）在高位时、
                都不触发 scout——交易台不会把一根它看不见被回补的回补反弹加仓、
                尤其是一根已带到地板、现被两个反转签名迎头撞上的反弹。06-30 抬起、
                07-01 重关、07-02 → 07-03 重开的那个价格 block 保持开着在改善；
                作业 block（盘面死）与引擎 block（无确认触发、现在两根超买反转）
                仍约束。
              </div>
            </div>
            <div className="dn-trade">
              <span className="dn-side framework">framework · 宏观尾 · put-spread re-grow 闸——信用腿仍不点：HY OAS 2.75% &lt; 2.78% 闸（本次走阔 +1.0bp、仍在下、距 3bp）、10Y 腿距 5bp（4.48% 对 4.53% 闸）；两腿都守在它们的触发下</span>
              <div className="dn-trade-name">
                下行 put-spread——re-grow 信用闸仍不点（OAS 2.75% &lt; 2.78%）、利率腿距 5bp；不加对冲（dealer 本子加深净多 γ、所以内生下行结构缓和、即便一根近端放大器在 7JUL26 又冒出来）
              </div>
              <div className="dn-thesis">
                谱系带的宏观 re-grow 闸——HY OAS &gt; 2.78% OR 10Y &gt; 4.53%
                作为重长下行尾的条件——在信用腿上仍<b>不点</b>：HY OAS{' '}
                <em>2.75%</em>、本次 +1bp、守在闸下（它在 06-30 于 2.83% 点、
                07-01 于 2.80% 点、然后 07-02 掉到 2.75% 下、07-03 到 2.74% 下、
                本次守在 2.75% 下、距 3bp 点）、而 10Y 守 4.48%、坐距 5bp——更近
                的一腿。所以两腿都离它们的触发。reclaim-long 利率筛（10Y &lt;
                4.55%）在 4.48% 仍<b>真</b>。宏观盘面在 z-面板上仍是一记 risk-off
                冲量（利率紧、TIPS 极端、美元极端）、但一根宏观尾不是一根内生兼
                特异地板破位的对的工具、且 dealer 本子已加深到净多 γ（即便 7JUL26
                −8.22M 近端口袋又冒出来）、所以 aggregate 内生下行结构本次缓和
                ——这、连同不点的信用闸、是把尾按下的理由、不是加它的理由。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v bull">无仓 · 信用闸在收盘口径仍不点 · HY OAS 2.75% &lt; 2.78%（+1.0bp、仍在下、距 3bp）、10Y 腿距 5bp</span></div>
                <div><span className="dn-lvl-k">re-grow 触发（不点）</span><span className="dn-lvl-v bull">HY OAS &gt; 2.78% 收——仍<b>不点</b>于 2.75%（在闸下 3bp）· OR 10Y &gt; 4.53% 收（现 4.48%、距 5bp 点——更近的一腿、但仍离）</span></div>
                <div><span className="dn-lvl-k">reclaim-long 利率筛</span><span className="dn-lvl-v bull">10Y &lt; 4.55% 收——在 4.48% 真；等一根 BTC 内部转向 AND 一条 live 盘面去转译</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats：</b>re-grow 闸是随水位漂移设的自由裁量盯盘、不是
                回测断点。信用腿守在闸下（OAS 2.75% &lt; 2.78%）、利率腿坐距
                5bp；两腿都不点、本次没有尾可长；注意 dealer 本子已加深到净多 γ、
                所以 aggregate 内生下行结构缓和、即便一根近端放大器在 7JUL26 又
                冒出来——尾按下。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · 挤压周期 hostile-2 watchlist · 无日历先验 · ON HOLD——SM feed 死 ~21.94 天、重堆签名本次读不了</span>
              <div className="dn-trade-name">
                挤压周期 hostile-2——ON HOLD（06-16 → 07-03 的延续）：SM feed 冻结 ~526.5h、重堆签名本次读不了
              </div>
              <div className="dn-thesis">
                挤压周期 / re-stack-hostile-2 框架把离散 SM 步（Δshort &gt; 0 +
                Δlong &lt; 0 同一分钟）读成延续签名；它的日历先验（BJ 13–15 节奏）
                在 05-31 被证伪、此后作为无先验 watchlist 跑。它今天无法评估、
                为最简单的理由：SM feed 死了。long_btc / short_btc / net_btc 自
                2026-06-12 01:36Z 起恒定（~526.5h）、所以没有 SM deltas 可读。
                06-16 备忘在 ~94.5h 把这个 ON HOLD、07-02 在 ~478.5h、07-03 在
                ~502.5h；它在 ~526.5h 仍 ON HOLD。{' '}
                <span className="dn-em">一根冻结的 feed 印不出签名；框架在 SM
                数据恢复前是黑的。</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">框架状态</span><span className="dn-lvl-v bear">ON HOLD · SM feed 冻结 ~526.5h（自 2026-06-12 01:36Z）· 无 SM deltas 可算</span></div>
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
              决策条件 <span className="dn-roman">VI · LIVE 盘面断线仍是那个操作性条件（第十八天）· 200W 地板破位在 06-29 周收确认（$60,224.70 &lt; $62,643、−3.86%）、06-15 重夺论被证伪、07-03 的上收把反弹带到地板 · flip 延伸（现货 +2.20% 在上）、本子加深到 +88.1M 净多 γ BUT 一根近端放大器又冒出来（7JUL26 −8.22M）· scout 价格前置条件保持真并加强（两根 MA 在脚下、贴着地板）但引擎翻成趋势延续、带两根 4h/8h TD9 SELL 在高位 · 宏观信用闸仍不点（OAS 2.75%）、regime 守特异、BTC 领先 NQ 达 +2.69pt</span>
            </h2>

            <p>
              07-03 那些条件里：live 盘面<em>没</em>回来——它更死了约 24h、现
              冻结 401.4h、SM feed 在 ~21.94 天；200W 地板破位保持在 06-29 周收
              <b>确认</b>（$60,224.70、地板 $62,643 下 −3.86%）、06-15 重夺论保持
              <b>被证伪</b>；地板本次不变（$62,643、06-29 周四个 cut 前已结算）；
              07-03 备忘记的第三根反弹<b>带到地板</b>——07-03 日收 $62,565.50 是
              一根上收 +$1,024.90、连续第三根、重夺回 D-EMA20 / D-SMA20 对、而
              未收盘 07-04 bar $62,646.80 是 +0.01% 贴着地板（07-04 日收还不存在）；
              flip <b>延伸</b>（现货 +2.20% 在上对 07-03 的 +1.90%）、flip 台阶到
              $61,296；dealer 本子从 +60.7M <b>加深</b>到 +88.1M 净多 γ——把下一步
              阻尼得更狠——BUT 一根近端下行放大器<b>又冒出来</b>（7JUL26 3.3 DTE
              −8.22M）；scout 价格前置条件保持真并加强（两根 MA 在现货脚下）但
              引擎翻成趋势延续、带两根新鲜 4h/8h TD9 SELL 在高位；宏观 re-grow 闸
              在信用腿仍不点（OAS 2.75% &lt; 2.78%）、而利率腿守 4.48%（距 5bp）；
              相关 regime 守特异、BTC 7d 回报<b>领先</b> NQ 达 +2.69pt；挤压周期
              在更死的 feed 上保持 ON HOLD。主导条件不变：<em>交易台仓位瞎、进一根
              在周收确认的 200W 地板破位、一根把现货带到地板、脚下有两根 MA 的
              反弹、和一本加深到净多 γ 的本子——它一样都无法对盘面确认、现在还被
              高位两根超买反转印迎头撞上</em>。今天条件围绕持续断线、确认的周收
              破位、到地板的反弹、与加深的净多 γ 本子重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>Live 盘面恢复（PRIMARY 操作性）</td><td className="bull">live_db.json 恢复写 2026-06-17 06:43Z 之外的新鲜行 AND SM 三元离开它 06-12 01:36Z 冻结更新</td><td>全量重读 funding / OI / flow / SM；只有那时 scout 或挤压周期才能评估——也只有那时这根到地板的反弹才能被确认成空头回补耗尽还是需求消化；仓位维度现已连续十六篇瞎</td></tr>
                <tr><td>200W 地板——破位已确认、反弹贴地板</td><td className="bear">06-29 周收 $60,224.70 结算在地板 $62,643 下 −3.86%——破位确认；连续十根日收在下（06-24 → 07-03）、06-30 收 $58,605.40 最深（−6.45%）、07-03 收 $62,565.50 最近（−0.12%、一根上收、连续第三根）；未收盘 07-04 bar $62,646.80、+0.01% 贴着地板</td><td>地板破位在周收口径确认、反弹带到地板——地板（$62,643）正被从下方试；不取仓位</td></tr>
                <tr><td>200W 重夺论——被证伪</td><td className="bear">06-15 重夺论要求地板的一根周收守；06-29 周收在下证伪它——先前 22JUN 周线守（$63,990）被取代</td><td>重夺论已死；结构性恢复现需要一根持续的周收重回地板 $62,643 上方（进射程——未收盘 07-06 周 bar 读 $62,647）；盯那根周收</td></tr>
                <tr><td>Flip 重夺（scout 价格前置条件）——加强</td><td className="bull">现货 $62,646.80 flip $61,296 上方 +2.20%、D-SMA20 $62,156 上方 +0.79%、D-EMA20 $62,210 上方 +0.70%（这一轮第一次两根 MA 在现货脚下）、+0.01% 贴着地板 $62,643</td><td>价格前置条件保持真并加强；但 scout 仍需 live 盘面恢复 AND 一根确认引擎印——而引擎现在在高位闪两根 4h/8h TD9 SELL（超买反转）；在一条瞎盘面上、这根到地板的反弹被记录、不被交易</td></tr>
                <tr><td>Dealer 本子——加深净多 γ、但一根近端放大器又冒出来</td><td className="bull">aggregate GEX +88.1M（07-03 是 +60.7M、07-02 是 +12.0M）；前端是 4JUL26 0.3 DTE +19.61M（约今日 08:00Z 结算）；BUT 一根近端下行放大器又冒出来、在 7JUL26 3.3 DTE −8.22M；现货坐在 $63k +31.62M 正天花板处、在 $60k −21.49M 看跌墙上</td><td>dealer 本子现 aggregate 把下一步阻尼得更狠、但又冒出来的 7JUL26 −8.22M 是一个新鲜短端下行口袋；只盯、无指令（aggregate 是这一轮最建设性、但盘面瞎、引擎在高位标两根反转、前端不干净）</td></tr>
                <tr><td>宏观尾 re-grow（信用腿不点）</td><td className="bull">HY OAS 2.75% &lt; 2.78%（仍不点、+1.0bp、距 3bp）OR 10Y &gt; 4.53%（距 5bp 点、守 4.48%）——FX 腿守/走强（DXY 100.85、USD/JPY 161.34）、MOVE 本次不可用</td><td>本篇无对冲指令——两腿都不点、没有尾可长；注意本子 aggregate 已加深净多 γ、即便一根近端放大器又冒出来、所以内生下行结构净上缓和</td></tr>
                <tr><td>reclaim-long 利率筛</td><td className="bull">10Y &lt; 4.55% 收——在 4.48% 真</td><td>独立筛真；需要一根 BTC 内部转向 AND 一条 live 盘面去转成 scout long</td></tr>
                <tr><td>挤压周期 hostile-2（ON HOLD）</td><td className="stale">SM feed 死 ~526.5h；无 deltas 可算</td><td>暂停、不是转负——feed 恢复后第一批新鲜 SM deltas 重新武装</td></tr>
              </tbody>
            </table>
            <p>
              改写<em>本</em>篇的那一根线是{' '}
              <span className="dn-signal">
                这根到地板的反弹——它在 07-03 收阳 +$1,024.90（连续第三根上收）、
                重夺回 D-EMA20 / D-SMA20 对、把本子加深到 +88.1M 净多 γ、把现货
                压到 flip 上方 +2.20% 与地板处 +0.01%、200W 破位已确认——是空头
                回补还是需求、只有一条恢复的盘面能说；结构侧、恢复现需要一根持续
                的周收重回地板 $62,643 上方、这一轮第一次进真射程（未收盘的 07-06
                周 bar 读 $62,647）
              </span>
              。那本加深到 +88.1M 净多 γ（现货 flip 上方 +2.20%）的 dealer 本子
              现 aggregate 把下一步阻尼得更狠——尽管一根近端放大器在 7JUL26
              −8.22M 又冒出来；结构正——200W 地板——保持在周收确认破、06-15 重夺论
              保持已死、但反弹把现货带到地板、脚下两根 MA、交易台仍读不了那条会说
              它是空头回补还是需求的盘面——而引擎现在在高位闪两根超买反转印。在
              盘面恢复前本篇按写好的跑：本子 flat、scout 价格 block 保持真并加强
              但引擎转成两根 4h/8h TD9 SELL、宏观尾信用闸保持不点在它的线下
              （OAS 2.75%）、挤压周期暂停、200W 地板盯盘是唯一那根 live 水位——
              一根在周收确认破、反弹现从下方试它的地板、恢复条件是一根周收重回
              $62,643 上方。价格带到地板、flip 延伸、本子 aggregate 加深多 γ、
              相关 regime 守特异、BTC 领先 NQ——所以前谱系那根 risk-off / 最差
              落后读彻底解除；但 MTF 引擎翻成趋势延续、带两根 4h/8h TD9 SELL 在
              高位、宏观在 z-面板上仍 risk-off（利率紧、美元极端）。下一个 24h 的
              对读是{' '}
              <em>破位-在周收确认、反弹-带到地板——尊重确认破位、把加深的多 γ 图
              与重夺的 MA 对当成一次瞎盘面无法确认成需求的真改善、权衡高位那两根
              新鲜超买反转印与又冒出来的近端放大器、盯现货能不能筑一根周收重回
              地板上方、并在读这根到地板的反弹是空头回补还是需求之前先修盘面</em>。
            </p>
          </div>
          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2（已过 codex 敌对式审计）
            </span>
            <b>状态：</b>这是 <b>v2</b> 篇——<b>已过 codex 敌对式审计</b>。v1 稿过了
            记于 <code>audits/2026-07-04-desk-note.md</code> 的跨模型敌对审计
            （codex 主审 + 持有发布门；ask-deepseek 数值二审）、判决 BLOCK-CRITICAL
            （1 CRITICAL + 1 MAJOR + 2 MINOR/NIT）。每条 finding 都经裁定（就着存档
            快照重算后再动手）并应用、然后 grep 关闭到全 EN 文件零残留。Findings：{' '}
            <b>DN-001（CRITICAL——GEX 墙 + 到期 strip 陈旧/离源）：</b>两条 strip 都从
            存档的 <code>btc_gex.html</code>（00:01Z 声明）替换。搜索的模式：墙字面{' '}
            <code>14.90 / 13.44 / 9.80 / 8.40 / 7.90 / 6.90 / 6.60 / 5.80</code> 与
            杜撰的 strike <code>$55k / $50k</code>；到期字面 <code>+2.10 / −0.40 /
            +14.10 / +15.40 / +10.90(31JUL) / +3.10 / −3.10 / +0.70(25DEC) /
            +0.45</code>。命中 前 = 墙 strip 与到期 strip 各一处；命中 后 = 0（残留
            <code>+0.70</code> 是 D-EMA20 偏移、<code>+0.40</code> 是 NFCI z——非 GEX）。
            墙现在 $63k +31.62 / $60k −21.49 / $64k +16.64 / $66k +13.79 / $65k
            +13.03 / $70k +12.99 / $68k +10.60 / $62.5k +8.11 / $80k +8.02 / $56k
            −7.73；到期 5JUL +6.11 / 6JUL +2.62 / 7JUL −8.22 / 10JUL +21.65 / 17JUL
            +20.37 / 24JUL +2.70 / 31JUL +29.21 / 28AUG +4.51 / 25SEP −1.25 / 25DEC
            +1.40 / 26MAR +0.57 / 25JUN +0.52。Aggregate +88.1M、flip $61,296、前端
            4JUL +19.61M 与 7JUL −8.22M 保留（确认干净）。<b>已解决。</b>{' '}
            <b>DN-002（MAJOR——MTF 4h Kumo 态错）：</b>存档的{' '}
            <code>mtf_div_latest.html</code> 是 4h 云上（↓61.8k、4b）、8h 云内
            （61.8k–62.6k、1b）。搜索的模式：<code>云内 61.4k</code>（4h 表格 cell）、
            <code>4h / 8h 云内</code>（云汇总）、<code>4h 云内（中性）</code> 与
            <code>8h → 1w ... 云下</code>（prose）。命中 前 = 1 / 1 / 1 / 1；命中 后
            = 0。4h cell 现在云上 ↓61.8k 4b；云汇总现在 15m/30m/1h/4h/1M 云上、8h
            云内、12h→1w 云下；标题 4 多 / 5 空 / 1 中 保留。<b>已解决。</b>{' '}
            <b>DN-003（MINOR——Fed 净流动性 delta 分母）：</b>宏观面板 delta 列读
            +0.053T；篇对篇陈述是另一个量。搜索的模式：<code>0.000T</code>、
            <code>无新鲜印</code>。命中 前 = 1 / 3（manifest、prose、table）；命中 后
            = 0。全部现在把源面板 delta +0.053T 标为较 07-03 不变。<b>已解决。</b>{' '}
            <b>DN-004（NIT——footer/审前 provenance 时间戳）：</b>审前 footer 嵌了一个
            未来的 <code>2026-07-04T01:05:00Z</code>。搜索的模式：<code>01:05:00Z</code>。
            命中 前 = 1；命中 后 = 0——footer 现在带 v2 审后发布时间
            2026-07-04T00:55:00Z。<b>已解决。</b>{' '}
            <b>ask-deepseek MINOR（现货跨块不一致）：</b>头部现货印{' '}
            <code>$62,647</code> 而价格段用精确 <code>$62,646.80</code>。搜索的模式：
            作为现货的 <code>$62,647</code>。命中 前 = 2（头部戳、价格标）；命中 后
            = 0（两处现货现在都 $62,646.80）；残留 <code>$62,647</code> 命中是未收盘
            07-06 <em>周 bar</em>、一个不同的量、留原样。<b>已解决。</b>{' '}
            <b>Build note（INFO）：</b>本服务器跑 Node 18.19.1；完整{' '}
            <code>next build</code> 在 Node 版本门上被环境阻塞（谱系）、所以{' '}
            <code>npx --no-install tsc --noEmit</code> 是 build proxy——STAGE E
            持有最终 build 核验。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体情况
            个性化。数字反映单一原子快照（2026-07-04 00:05Z）、provenance 在
            上方数据来源条带中按节披露；<em>关键地、快照时 live 衍生品盘面已
            冻结 401.4h（末行 2026-06-17 06:43Z）、聪明钱仓位 feed 死 ~21.94 天
            </em>、所以所有 funding、OI、flow 与仓位数字都明确是 last-known /
            陈旧或不可计算、并已如此标注；宏观面板渲染是 2026-07-03 22:16Z
            （较快照早约 1.82h）。价格、MTF、GEX 与跨资产是最新的。这是 v2 篇、
            过 codex 敌对式审计后升级；审计 findings 已裁定并应用（见上方审计
            痕迹）。水位、规模与条件是交易台流程的示例、不是长期推荐。过去的
            相关性、γ 与仓位模式不绑定未来盘面。衍生品有全损风险、加杠杆下损失
            可超过保证金。<em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                反弹一路弹到地板：07-03 的上收（$62,565.50、+$1,024.90、连续第三根）
                重夺回 D-EMA20 / D-SMA20 对——这一轮第一次两根 MA 在现货脚下——而
                未收盘 07-04 bar $62,646.80 从下方试 200W 地板 $62,643（+0.01%）；
                dealer 本子加深到 +88.1M 净多 γ 但一根近端放大器又冒出来（7JUL26
                −8.22M）、现货推到 flip 上方 +2.20%、全部透过一条死盘面读、第十八天、
                现被高位两根 4h/8h TD9 SELL 迎头撞上。破位确认。反弹贴地板。本子
                多 γ。引擎标反转。瞎。
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
            v2 · 2026-07-04 00:05Z 快照 · 已过 codex 敌对式审计 ·
            2026-07-04T00:55:00Z · sources: live_db.json（冻结 401.4h）·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
