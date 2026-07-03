import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-07-03 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-07-03',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-07-03' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260703() {
  await requireViewer('/zh/desk/2026-07-03');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-07-03 · v2</span>
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
              <span className="dn-big">$61,433</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+2.58%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-07-03 00:07Z ·{' '}
              <span className="dn-em">
                反弹延伸了——谱系里第一次、这根建设性 flip 到 00:07Z 截点为止
                还没被交还进下一根 session（07-03 未收盘 bar $61,433 仍贴着
                07-02 收盘、只低 $107.50；07-03 的日收还不存在）。07-02 日线
                收阳 +$1,541.00 到 $61,540.60、是连续第二根上收、也是这一轮
                最强的一根、把现货压到 $62,643 200W 地板下 −1.76%、正落进
                D-EMA20 $62,056（−1.00%）/ D-SMA20 $62,252（−1.32%）/ 地板
                $62,643（−1.93%）那簇紧的重夺区（未收盘 07-03 bar $61,433）。
                dealer 本子加深到 +60.7M 净多 γ（07-02 是 +12.0M——阻尼更狠）、
                前三个到期都是正的、没有实质的近端下行放大器留着（前端 3JUL26
                0.3 DTE +19.55M——就是 07-02 那根 −7.75M 下行放大器、滚到前端
                后翻正了）；6JUL26 3.3 DTE 是一根小的 −0.34M 负、最重的负在远端
                25SEP26 −3.03M、现货坐在 flip $60,286 上方 +1.90%（07-02 是
                +0.15%）。但 MTF 引擎往另一边切：它翻回 5/9 周期反转 regime
                （JT&lt;0、从 07-02 的趋势延续）、并在 $61,491 印出一根新鲜的
                ⚡4h TD9 SELL（超买反转提示、就在高位）、15m / 30m / 1h 带顶
                （看空反转）背离——反弹进去的早期做顶签名、即便标题计数改善一档
                到 3 多 / 6 空 / 1 中。200W 破位仍<b>确认</b>（06-29 周收
                $60,224.70 &lt; $62,643）、06-15 重夺论仍<b>被证伪</b>；地板不动
                $62,643（现货 −1.93% 在下、已进射程）。跨资产进一步<b>松</b>到
                特异（mean |r| 0.192、远在 0.25 线下）、BTC 7d 回报 +3.28% 现在
                <b>领先</b> NQ +0.14% 达 +3.14pt（07-02 还落后 −1.60pt——落后读
                彻底解除）。宏观在信用边际松了（HY OAS 2.74% &lt; 2.78% re-grow
                闸、闸<b>仍未点</b>）、利率往它的闸靠（10Y 4.48%、+4bp、距 4.53%
                只 5bp）、美元走软但仍<b>极端</b>（DXY 100.85）。全部透过一条死的
                衍生品盘面读——已进第十七个日历日——OKX 监控冻结 377.4h、SM feed
                死 ~20.94 天。交易台把这根延伸的反弹读成 gamma/价格图上一次真的
                改善、但在一条瞎的盘面上仍无法确认成需求——而引擎现在在高位闪超买
                反转、所以这第二根上收买的是尊重、不是追。
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
                    核验——现<b>陈旧 377.4h</b>（07-02 备忘是 353.4h、07-01 是
                    329.4h——断线自上一篇又跑了约 24h、进第十七个日历日）。funding /
                    OI / CVD / basis / retail / taker-flow 都是 06-17 06:43Z 的
                    <b>last-known</b>、不是当前值。SM 子 feed（long_btc / short_btc /
                    net_btc）冻得更久——自 2026-06-12 01:36Z 起恒定（~502.5h /
                    ~20.94 天）；SM net 与 SM cut-fraction 本次<b>不可计算</b>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-07-03 00:01Z scan</td>
                  <td className="dn-flag">
                    最新（较锚早约 6 分钟）· 滚动 latest 文件、逐字存档于
                    /opt/desk-note/snapshots/2026-07-03-0007/ · 含未收盘 K 线 ·
                    扫描现货 $61,489、24h +2.54%、24h H/L $62,180 / $59,555、
                    qVol $14.41B
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-03 00:00Z 快照</td>
                  <td className="dn-flag">
                    最新（较锚早约 7 分钟）· Deribit idx $61,781（比 parquet 现货
                    $61,433 高 $348）· 926 合约 · net GEX <b>+60.7M</b>（净多 γ、
                    从 07-02 的 +12.0M <b>加深</b>；06-30 是 +5.6M）· flip $60,286
                    （现货 +1.90% 在<b>上方</b>、从 07-02 的 +0.15%）· 前端是
                    3JUL26 0.3 DTE <b>+19.55M</b>（正、约今日 08:00Z 结算——就是
                    07-02 那根 −7.75M 近端下行放大器、滚到前端后翻正）、且<b>没有
                    实质的近端下行放大器留着</b>（6JUL26 3.3 DTE 一根小 −0.34M 负）
                    ——最重的负到期是远端 <b>25SEP26 84.3 DTE −3.03M</b> · 现货
                    $61,433 坐在 $62k +14.48M / $63k +16.90M 正天花板（重夺区括弧）
                    下、在 $60k −11.81M 看跌墙上方
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-03 00:00Z
                  </td>
                  <td className="dn-flag">最新 · 7d 1h bar · 22 资产 · 167 rows · regime 特异（mean |r| 0.192、从 07-02 的 0.239 进一步<b>松</b>——BTC 现在稳在 0.25 特异阈下、且它 7d 回报 +3.28% 不再只是离最差、而是<b>领先</b> NQ +0.14% 达 +3.14pt；前谱系那根落后读彻底解除）</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-02 22:15Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.85h · 10Y <b>4.48%</b>（+4.0bp、距 4.53% 闸 5bp）、
                    TIPS <b>2.25%</b>（+5.0bp、极端 RISK-OFF）、HY OAS
                    <b>2.74%</b>（−1.0bp——仍在 2.78% re-grow 闸<b>下</b>、闸仍不点）·
                    MOVE 债波 <b>68.6</b>（源 1d Δ +1.77、松）· FX 腿：<b>DXY
                    100.85</b>（−0.54 日、走软但仍极端）与 <b>USD/JPY 162.54</b>
                    （−0.09 日）· Fed 净流动性 $5.843T（+0.053T、新鲜周度印）·
                    NFCI 中性（现陈旧 ~13d）· WTI $71.9（+1.6 日）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-07-03 00:06Z（close $61,433）</td>
                  <td className="dn-flag">
                    新鲜 K 线（交易所 OHLC、独立于冻结的 live 盘面）· 偏移按
                    parquet 最末 bar close 重算、是 live 盘面冻结下能拿到的最新
                    现货 · 显示的周线阶梯用 2023→ 子集（184 根周 bar）、所以无
                    W-SMA200 行（W-EMA200 $67,449 从可用历史 seed）；200W 地板
                    从全历史 glob 直接重算——<b>356 根收盘周 W-MON bar</b>
                    （2019→今、含已结算的 06-29 周、不含未收盘的 07-06 周）——
                    = <b>$62,643</b>、较 07-02 <b>不变</b>（06-29 周三个 cut 前
                    已结算、无台阶）。<b>现货 −1.93% 在地板下、矩阵上每一根 MA
                    仍在头顶——无正偏移、谱系第九个这样的 cut——但反弹把最近那簇
                    收紧到 −1.00% / −1.32% / −1.93%</b> · weekly_200sma.json 本次
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
              <span className="dn-v bear">−7.24%（陈旧 · 06-17 06:43Z · 377.4h）</span>
              <span className="dn-src">live_db 原始 funding −0.006608 × 1095 = −7.24% ann（不 ×100）· 06-17 06:43Z 冻结点的 last-known、现陈旧 377.4h、非当前读 · 与 06-19 → 07-02 备忘逐字同一根冻结行；冻结前 24h+1m 含端采样窗（1,442 行）的 last-available ann 均值 +0.20%、区间 −7.24% / +7.21%、819 / 1,442 行负——盘面死时是一本平衡的双向本子</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 对 07-02</span>
              <span className="dn-v">盘面冻结——不可计算</span>
              <span className="dn-src">live 盘面自 06-17 06:43Z 起没再写、所以仍没有当前 funding 去对 07-02 备忘作差 · 冻结点 last-known 印是 −7.24% ann（空付多）；杠杆门连续第十七天不可评估</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−468 BTC（−0.45%）· 陈旧窗</span>
              <span className="dn-src">live_db oi_btc 102,945 在 06-17 06:43Z 冻结点 对一根 24h+1m 含端采样窗（1,442 行）起点 · 窗<b>止于</b>冻结、不是进 00:07Z 快照——它描述的是到 06-17 06:43Z 的盘面、陈旧 377.4h</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bear">59.47 / 40.53 · 陈旧</span>
              <span className="dn-src">live_db `mkt_long_pct` 在 06-17 06:43Z 冻结点（24h+1m 含端采样窗起点是 58.29%——滚动进去 +1.18pt 加多）· last-known、陈旧 377.4h</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">−37.29k · FEED 死 ~502.5h</span>
              <span className="dn-src">long 13,532.4 − short 50,825.7 · 这一组三元自 2026-06-12 01:36Z 起逐字恒定（~502.5h / ~20.94 天）——是一根<b>冻结值</b>、不是当前仓位读；只为标记死 feed 而带</span>
            </div>
            <div>
              <span className="dn-k">SM Δ / cut fraction</span>
              <span className="dn-v">不可计算</span>
              <span className="dn-src">SM feed 冻结 ~20.94 天 · |Δ| / prior_net 无法算——没有当前 SM net 去作差 · 挤压周期 / 重堆框架本次瞎、是 06-16 → 07-02 ON-HOLD 的延续</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">42.8% / 37.55%</span>
              <span className="dn-src">GEX 926 合约 IV 中位数（00:00Z、最新）对 parquet 30D 收对收 RV 37.55%——链层丰度较已实现 ~+5.25pt（07-02 是 ~+5.92pt——第二根上收上 IV 与 RV 双松、丰度收窄）；RV 松（07-02 是 38.58%、05-31 是 24.91%）· IV 是 926 合约链中位数、不是可交易价差</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+1.90%（在上方 · 延伸）</span>
              <span className="dn-src">flip $60,286（前 $59,811 · +$475）· 对 parquet 现货 $61,433（61,433.10 / 60,286 − 1 = +1.903%）/ GEX 文件 Deribit idx $61,781（61,781 / 60,286 − 1 = +2.479%、文件读 +2.5%）——两参考都在 flip 上方、从 07-02 的 +0.15% <b>延伸</b> · net GEX +60.7M（净多 γ、从 +12.0M 加深）· 没有实质近端下行放大器留着（前端 3JUL26 +19.55M；6JUL26 一根小 −0.34M 负）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                反弹延伸了——而这一次到 00:07Z 截点为止它<em>没</em>被交还
                （07-03 未收盘 bar $61,433 仍贴着 07-02 收盘、只低 $107.50；
                07-03 的日收还不存在）。07-02 日线收阳 +$1,541.00 到
                $61,540.60、是连续第二根上收、也是这一轮最强的一根、把现货
                压到 $62,643 地板下 −1.76%、进那簇紧的 D-EMA20 / D-SMA20 /
                地板重夺区；整张图跟着加深建设性：dealer 本子加深到 +60.7M
                净多 γ（阻尼更狠）、前三个到期翻正、没有实质近端下行放大器
                留着（前端 3JUL26 +19.55M；6JUL26 一根小 −0.34M 负）、现货
                推到 flip 上方 +1.90%、标题 MTF 改善一档到 3/6/1。但引擎翻回
                5/9 周期反转 regime、并在高位印一根新鲜 4h TD9 SELL、15m /
                30m / 1h 带顶背离——反弹进去的早期做顶签名。全部透过一条死的
                衍生品盘面读、进第十七个日历日
              </span>
              。现货报{' '}
              <span className="dn-tag bull">$61,433、24h +2.58%</span> 在 00:06Z
              parquet bar（MTF 扫描按它自己窗读 +2.54%）、从 07-02 备忘现货
              $59,901 抬上来——谱系把反弹延伸回它 06-24 丢掉的那条地板。200W
              破位仍{' '}
              <span className="dn-tag bear">在 06-29 周收 $60,224.70 确认、地板
              $62,643 下 −3.86%</span>、06-15 重夺论仍被证伪、地板本次不变
              （$62,643、06-29 周三个 cut 前已结算）。连续九根日收
              （06-24 $61,051 −2.54%、06-25 $59,772 −4.58%、06-26 $60,072
              −4.10%、06-27 $60,000 −4.22%、06-28 $59,550 −4.94%、06-29
              $60,224.70 −3.86%、06-30 $58,605.40 −6.45%、07-01 $59,999.60
              −4.22%、{' '}
              <span className="dn-tag bull">07-02 $61,540.60 −1.76%、一根上收
              +$1,541.00、这一轮最强</span>）现都坐在地板下、最后两根都是上收、
              把现货抬回线附近。现货连续第九个 cut 脚下无 MA——D-EMA20 $62,056
              （−1.00%）、D-SMA20 $62,252（−1.32%）、200W 地板 $62,643
              （−1.93%）是最近的、都在头顶但被反弹收得很紧。dealer 本子{' '}
              <span className="dn-tag bull">加深到 +60.7M 净多 γ</span>、前三个
              到期是正的、没有实质近端下行放大器留着（6JUL26 一根小 −0.34M
              负）；现货坐在 $62k +14.48M / $63k +16.90M 正天花板下、$60k
              −11.81M 看跌墙上。MTF 标题改善一档到{' '}
              <span className="dn-tag bear">3 多 / 6 空 / 1 中</span>（从 2/6/2
              ——30m 重夺回云上）——但 regime 分类器{' '}
              <span className="dn-tag bear">翻回 5/9 周期反转（JT&lt;0）</span>、
              从趋势延续、并印一根新鲜{' '}
              <span className="dn-tag bear">⚡4h TD9 SELL 在 $61,491（超买反转
              提示、就在高位）</span>、15m / 30m / 1h 带顶背离。宏观在利率上收
              紧、信用上放松：10Y +4bp 到 4.48%（距闸 5bp）、HY OAS −1bp 到
              2.74%（仍在 2.78% re-grow 闸<b>下</b>——闸不点）、DXY 软到 100.85
              但守极端。{' '}
              <span className="dn-em">
                作业事实不变、仍具约束：OKX 监控现已冻结 377.4h（末行 2026-06-17
                06:43Z）、funding / OI / CVD / basis / retail 都是 last-known 且
                陈旧、SM 仓位本子死 ~20.94 天——SM net 与 cut-fraction 不可计算。
                第二根上收是这一轮里第一根到 00:07Z 截点为止还没被交还进下一根
                session 的（07-03 未收盘 bar 仍贴着它、只低 $107.50；07-03 日收
                还不存在）、gamma/价格图是谱系带过的最建设性的一张——但那条会
                告诉你这是需求还是薄回补的盘面仍然是死的、引擎现在在高位闪超买
                反转。读法只落在价格、gamma 和 MTF 上。
              </span>{' '}
              本子保持 flat：破位已确认、重夺论已死、把现货压进重夺区的这根
              延伸反弹——尽管一切都在改善——在一条瞎的盘面上无法确认、且现在被
              高位一根超买反转印迎头撞上。scout 的价格前置条件保持<b>真</b>
              （现货 flip 上方 +1.90%）、重夺区在射程内、但 scout 保持按兵。
              无空、无 scout、无新对冲。
            </p>
            <p>
              BTC 报 <span className="dn-tag">$61,433</span> 在 parquet 最末 bar
              （00:06Z）、{' '}
              <span className="dn-tag bull">+2.58%</span> 在 24h（对精确 24h 前
              的 $59,890.60 bar——07-02 00:06Z parquet bar；MTF 扫描按它自己
              00:01Z 窗读 +2.54%——这道差是参考窗、不是数据冲突）、在一条{' '}
              <span className="dn-tag">$62,180 / $59,555</span> 的 24h 区间里
              （按 MTF 扫描 H/L）。Deribit index 00:00Z 读 $61,781、MTF 扫描
              现货是 $61,489——所以最新现货在三个独立新鲜源上互证得很好
              （parquet K 线 $61,433、GEX Deribit index $61,781、MTF 扫描
              $61,489）、即便平时供它的 live_db 盘面冻在 06-17 06:43Z、陈旧
              377.4h。{' '}
              <span className="dn-signal">结构读法从一根确认破位 + 第二根反弹
              在印（07-02 备忘）、走到同一根确认破位、反弹<b>延伸</b>到第三根
              session——07-02 日收 $61,540.60 是这一轮里第一根到 00:07Z 截点为止
              还没被交还进下一根 session 的上收（07-03 未收盘 bar $61,433 仍贴着
              它；07-03 日收还不存在）、把现货压到地板下 −1.76%、正进重夺区</span>
              ：22JUN 周收 $63,990 是最后一根周线守、日收沿线走下（06-22 →
              06-28）、06-29 周线 bar 收 $60,224.70 在地板下确认破位、06-29 日线
              bar 反弹、06-30 bar 把它反掉、07-01 → 07-02 连着弹两根。按框架
              破位在周收口径确认、06-15 重夺论被证伪；本次没有任何东西撤销这点
              ——延伸反弹是确认破位内的一根反弹、直到一根周收重夺地板。{' '}
              <span className="dn-em">
                谱系唯一那根结构正在周收口径破了、重夺论已死；现货脚下无 MA、但
                延伸反弹现已把它压到地板 −1.93% 之内、本子深净多 γ——谱系带过的
                最建设性 gamma/价格图。交易台把它读成一次它还无法在瞎盘面上确认
                成需求的真改善、而现在引擎在高位闪超买反转。
              </span>
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · LIVE 盘面冻结 377.4h（第十七天）· SM 本子死 ~20.94 天 · funding/OI/flow last-known 陈旧 · 07-02 的上收把反弹延伸到第三根 session、到 00:07Z 截点为止没被交还进下一根 session（07-03 日收还不存在）、但交易台仍看不见这是需求在消化破位、还是薄回补——仓位盘面是黑的</span>
            </h2>

            <p>
              <span className="dn-signal">
                本篇最重要的那个源——live 衍生品盘面——仍然是死的、连续
                第十七个日历日
              </span>
              。OKX 监控自{' '}
              <span className="dn-tag bear">2026-06-17 06:43Z</span>（t = &ldquo;06-17
              14:43&rdquo; BJ；文件 mtime 06-17 06:43:08Z 佐证写入停在那；进程
              状态本次未存档或核验、所以本篇断言的是缺失的盘面、不是一个
              live/挂起的进程）起没再往 live_db.json 追加过行。那现在是{' '}
              <span className="dn-tag bear">377.4h 的缺失盘面</span>、对 00:07Z
              快照锚——06-20 备忘在 65.4h 标它、06-27 在 233.4h、06-30 在
              305.4h、07-02 在 353.4h、断线又跑了约 24h 没写。live 盘面带的一切
              ——funding、持仓、现货/期货 CVD、perp basis、retail 多%、taker-net、
              大单 flow、攻击方偏斜——因此都是{' '}
              <span className="dn-em">06-17 06:43Z 的 last-known、非当前</span>。
              聪明钱仓位三元（long_btc / short_btc / net_btc）逐字恒定——{' '}
              <span className="dn-tag">13,532.4 / 50,825.7 / −37,293.3</span>——自{' '}
              <span className="dn-tag bear">2026-06-12 01:36Z</span>、~502.5h
              （~20.94 天）。06-16 备忘在 ~94.5h 标了这根死 feed、把挤压周期
              ON HOLD；07-02 备忘带它到 ~478.5h；今天是 ~502.5h、仍死。{' '}
              <span className="dn-em">
                SM net 作为当前读不可计算、SM cut fraction（|Δ| / prior_net）
                无法构成——没有当前 SM net 去作差。本篇任何仓位主张都明确是
                历史的、不是 live 的。
              </span>
            </p>

            <p>
              为完整起见、<em>last-available</em> 的盘面读数——全部钉在 06-17
              06:43Z 冻结点、现陈旧 377.4h、且与 06-19 → 07-02 备忘逐字同一批
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
                OI 在泄、retail 在第一程弱势里加多。没有一项能带进 00:07Z 快照
                ——它早于整个 06-18 → 06-22 地板守序列、06-23 → 06-28 收破地板
                那程、06-29 周收确认、06-30 反掉、以及 07-01 → 07-02 两根
                session 的反弹、所以它对延伸反弹是空头回补耗尽还是需求消化破位
                什么都没说。交易台把仓位维度当未知、把延伸反弹当仓位未确认。
              </span>
            </p>
            <h2 className="dn-sec">
              结构 <span className="dn-roman">II · 价格/MTF 最新 · 多 TF 共振 3 多 / 6 空 / 1 中（从 2/6/2 改善一档——30m 重夺回云上）· 净读高 TF 偏空 · 短周期震荡 · 4h/8h/12h/1d 金叉（水下）守住、但 15m/30m/1h 在高位滚成死叉（水上）、一根新鲜 ⚡4h TD9 SELL 印出（超买反转提示）、15m/30m/1h 带顶背离 · 1M TD9 buy 仍印 · regime 翻回 5/9 周期反转（JT&lt;0）· 现货在每一根 MA 下、整条阶梯头顶、200W 地板 $62,643 确认破、现货第九根收在下 −1.93% 但被反弹收紧</span>
            </h2>

            <p>
              <span className="dn-signal">
                MTF 图最新、标题改善一档（3 多 / 6 空 / 1 中、30m 重夺回云上）、
                中段框架（4h/8h/12h/1d）守住水下金叉——但快框架在高位滚成死叉、
                regime 分类器翻回周期反转、一根新鲜 4h TD9 SELL 印出超买反转提示
              </span>
              ——这一维、与 dealer 图一起、是交易台今天仍能信的一维、本次它读成
              反弹进去的做顶张力。00:01Z 扫描标{' '}
              <span className="dn-tag">3 多 / 6 空 / 1 中、跨 10 框架</span>、
              净读 <em>高时间框偏空 · 短周期震荡</em>——从 07-02 扫描的 2/6/2
              改善、因 30m 重夺回云上。regime 行读{' '}
              <span className="dn-tag bear">5/9 周期反转 / 均值回归 regime（JT&lt;0）</span>
              （07-02 是 5/9 趋势延续）、所以分类器从趋势延续翻回均值回归——
              引擎现在带一根新鲜超买反转印去对抗、不是一个建设性触发。源偏向的
              多框架是{' '}
              <span className="dn-tag">15m / 30m / 1M</span>、其中{' '}
              <span className="dn-tag">1h 云上但源计数里中性</span>、以及{' '}
              <span className="dn-tag">1M 云上（$61,489 印 TD9 buy）</span>——1M
              TD9 buy 是带进来的那根新鲜超卖反转提示。本次那根印是做顶签名：{' '}
              <span className="dn-tag bear">一根新鲜 ⚡4h TD9 SELL 在 $61,491
              （超买反转提示、就在高位）</span>、带{' '}
              <span className="dn-tag bear">15m / 30m / 1h 顶（看空反转）背离</span>
              、快框架滚成{' '}
              <span className="dn-tag bear">水上死叉（15m 38 bar / 30m 16 bar /
              1h 4 bar）</span>——动量从高位翻下。中段框架仍守建设性侧：{' '}
              <span className="dn-tag">4h / 8h / 12h / 1d 水下金叉（9 / 5 / 3 / 2
              bar）</span>——全是未确认的水下试探——而高框架（8h → 1w）仍云下、{' '}
              <span className="dn-tag bear">1w 带一根水下死叉（1 bar）</span>。
              云：30m / 1h / 1M 云上、15m / 4h 云内、8h → 1w 云下。那薄的建设性
              集合是{' '}
              <span className="dn-tag">4h / 8h / 12h / 1d 水下金叉、一根 1M TD9
              buy、1h / 8h 底（看多反转）背离</span>——对着高位那根新鲜 4h TD9
              SELL 与 15m/30m/1h 顶背离摆着。{' '}
              <span className="dn-em">
                直读：框架栈改善一档、中段（4h/8h/12h/1d）守水下金叉、但快框架
                （15m/30m/1h）滚成水上死叉、regime 翻回均值回归、一根新鲜 4h TD9
                SELL 配 15m/30m/1h 顶背离读成反弹进去的早期做顶签名——就在高位、
                200W 地板确认破、现货第九根收在下 −1.93%。引擎的建设性印（中段
                金叉、1M TD9 buy、1h/8h 底背离）现被一根超买反转印抵消、所以没有
                一个干净的多框架转向去做多这根破位——也是一个不信任这些位置延伸
                的理由。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">61,492</td><td className="num neut">49.5</td><td className="bear">死叉（水上）38b</td><td className="neut">云内 61.1k–61.6k 8b</td><td>Sell 2</td><td>BEAR hid · BEAR reg（顶）· BULL hid</td></tr>
                <tr><td>30m</td><td className="num">61,486</td><td className="num">52.8</td><td className="bear">死叉（水上）16b</td><td className="bull">云上 ↓60.6k 69b</td><td>Buy 4</td><td>BEAR hid · BEAR reg（顶）· BULL hid</td></tr>
                <tr><td>1h</td><td className="num">61,490</td><td className="num">59.1</td><td className="bear">死叉（水上）4b</td><td className="bull">云上 ↓59.9k 33b</td><td>Buy 1</td><td>BEAR hid · BEAR reg（顶）· BULL hid · BULL reg（底）</td></tr>
                <tr><td>4h</td><td className="num">61,491</td><td className="num">60.3</td><td className="bull">金叉（水下）9b</td><td className="neut">云内 60.3k–61.8k 4b</td><td className="bear">⚡TD9 SELL</td><td>BEAR hid</td></tr>
                <tr><td>8h</td><td className="num">61,486</td><td className="num neut">55.9</td><td className="bull">金叉（水下）5b</td><td className="bear">云下 ↑63.3k 29b</td><td>Sell 6</td><td>BEAR hid · BULL reg（底）</td></tr>
                <tr><td>12h</td><td className="num">61,486</td><td className="num neut">51.5</td><td className="bull">金叉（水下）3b</td><td className="bear">云下 ↑64.3k 83b</td><td>Sell 3</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">61,489</td><td className="num bear">43.7</td><td className="bull">金叉（水下）2b</td><td className="bear">云下 ↑68.6k 32b</td><td>Sell 2</td><td>BEAR hid</td></tr>
                <tr><td>3d</td><td className="num">61,489</td><td className="num bear">38.4</td><td className="neut">—</td><td className="bear">云下 ↑72.5k 10b</td><td>Buy 4</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">61,485</td><td className="num bear">35.5</td><td className="bear">死叉（水下）1b</td><td className="bear">云下 ↑99.5k 22b</td><td>Buy 7</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">61,489</td><td className="num bear">42.4</td><td className="neut">—（DIF 水下）</td><td className="bull">云上 ↓47.0k 29b</td><td>TD9 BUY</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 00:01Z scan（08:01 北京；滚动 latest
                    文件、逐字存档于 /opt/desk-note/snapshots/2026-07-03-0007/）。
                    净读 <em>高时间框偏空 · 短周期震荡（3 多 / 6 空 / 1 中）</em>；
                    regime <em>5/9 周期反转 / 均值回归 regime（JT&lt;0）</em>；活跃
                    背离 <em>反转：顶背离 15m / 30m / 1h、底背离 1h / 8h；隐藏
                    （延续）：BEAR hid 15m / 30m / 1h / 4h / 8h / 1d、BULL hid
                    15m / 30m / 1h</em>。头部告警：<em>⚡4h TD9 SELL 印在 $61,491
                    ——超买反转提示（就在高位）</em>、<em>⚡1M TD9 BUY 印在 $61,489
                    ——超卖反转提示</em>、<em>1w 水下死叉（1 bar 前、DIF −5,878.7）</em>、
                    <em>1d 水下金叉（2 bar 前、DIF −2,270.4）</em>、<em>8h 水下
                    金叉（5 bar 前）</em>、<em>12h 水下金叉（3 bar 前）</em>。扫描
                    现货 $61,489、24h +2.54%、24h H/L $62,180 / $59,555、qVol
                    $14.41B。收盘为未收盘 K 线；每个值在各周期收盘前都按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵与 07-02 同一道深头顶墙、但第二根上收把现货压正进重夺区、
              所以最近那几根收得很紧、而每一根仍在头顶——谱系第九个 cut{' '}
              <span className="dn-tag bear">矩阵上每一根都在头顶——无正偏移、
              现货脚下无 MA</span>。$61,433 坐在{' '}
              <span className="dn-tag bear">D-EMA20 $62,056 下 −1.00%</span>——
              最近的一根、仍在头顶——然后{' '}
              <span className="dn-tag bear">D-SMA20 $62,252 下 −1.32%</span> 与{' '}
              <span className="dn-tag bear">全历史 W-SMA200 200W 地板 $62,643 下
              −1.93%</span>（本次不变）——三根最紧、都在现货 2% 之内。之上、周期
              代理{' '}
              <span className="dn-tag bear">D-EMA50 $65,984（−6.90%）</span>、然后{' '}
              <span className="dn-tag bear">D-SMA50 $67,379（−8.82%）</span>、然后{' '}
              <span className="dn-tag bear">W-EMA200 $67,449（−8.92%、种子）</span>、
              然后一道密的头顶带：{' '}
              <span className="dn-tag bear">D-EMA100 $69,781（−11.96%）</span>、{' '}
              <span className="dn-tag bear">D-SMA150 $70,347（−12.67%）</span>、{' '}
              <span className="dn-tag bear">W-SMA20 $70,639（−13.03%）</span>、{' '}
              <span className="dn-tag bear">D-SMA100 $71,051（−13.54%）</span>、{' '}
              <span className="dn-tag bear">W-EMA20 $72,040（−14.72%）</span>、{' '}
              <span className="dn-tag bear">D-EMA150 $72,971（−15.81%）</span>、{' '}
              <span className="dn-tag bear">W-EMA150 $73,862（−16.83%）</span>、{' '}
              <span className="dn-tag bear">D-SMA200 $74,954（−18.04%）</span>、{' '}
              <span className="dn-tag bear">D-EMA200 $75,883（−19.04%）</span>、{' '}
              <span className="dn-tag bear">W-SMA150 $75,894（−19.05%）</span>。更高
              更远、已弃用：W-EMA100 $80,179（−23.38%）、W-EMA50 $80,983
              （−24.14%）、W-SMA100 $88,535（−30.61%）、W-SMA50 $88,679
              （−30.72%）。{' '}
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-07-03 00:06Z（close $61,433.10）；
                偏移按那同一根最末 bar close 重算、是 live 盘面冻结下能拿到的
                最新现货。显示的 MA 水位按 $ 取整、偏移用精确序列值算。显示的
                周线阶梯用 2023→ 子集（184 根周 bar）、所以 W-SMA200 那里不可
                计算、W-EMA200 $67,449 从可用历史 seed；200W 地板 $62,643 从
                全历史 glob 另算（356 根收盘周 W-MON bar、含已结算的 06-29 周、
                不含未收盘的 07-06 周——较 07-02 不变）。日线收盘：06-22 $63,990
                （= 22JUN 周收）、06-23 $62,697、06-24 $61,051（首根收破地板）、
                06-25 $59,772、06-26 $60,072、06-27 $60,000、06-28 $59,550、
                06-29 $60,224.70（确认破位的周收）、06-30 $58,605.40（这一轮
                最深、−6.45%）、07-01 $59,999.60（上收 +$1,394.20）、07-02
                $61,540.60（第九根收在下、一根上收 +$1,541.00——这一轮最强、且
                到 00:07Z 截点为止没被交还进下一根 session）、07-03（未收盘、
                5 分钟 bar）$61,433——地板破位仍确认、延伸反弹把现货压进重夺区。
              </span>
            </p>
            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子加深到净多 γ aggregate +60.7M（07-02 是 +12.0M、06-30 是 +5.6M）——本子把下一步阻尼得更狠 · 前三个到期是正的（前端 3JUL26 0.3 DTE +19.55M、约今日 08:00Z 结算）、没有实质近端下行放大器留着——07-02 那根 −7.75M 放大器的 3JUL26 滚到前端后翻正；6JUL26 3.3 DTE 一根小 −0.34M 负、最重的负是远端 25SEP26 −3.03M · flip 台阶 $59,811 → $60,286、现货推上方 +1.90% · IV 42.8%</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子加深了它的净多 γ 姿态：aggregate γ 从 +12.0M 升到
                +60.7M 净多 γ、所以本子把下一步阻尼得更狠、flip 重夺随现货推得
                更高而走阔——谱系带过的最建设性 gamma 背景
              </span>
              。aggregate GEX 是{' '}
              <span className="dn-tag bull">+60.7M / 1%</span>（07-02 是 +12.0M、
              07-01 是 −31.5M、06-30 是 +5.6M）；本子近几篇里空 → 多 → 空 → 多 →
              更深多 地来回甩、现在坐深净多 γ。0-γ flip 台阶{' '}
              <span className="dn-tag">$59,811 → $60,286（+$475）</span>、现货
              $61,433 推得更上、所以现货坐{' '}
              <span className="dn-tag bull">flip 上方 +1.90%</span>
              （现货口径 61,433.10 / 60,286 − 1 = +1.903%）；GEX 文件自己的
              &ldquo;dist to flip&rdquo; 对它的 Deribit-index $61,781（比 parquet
              现货高 $348）读 +2.5%、即{' '}
              <span className="dn-tag bull">+2.48%</span>
              （61,781 / 60,286 − 1 = +2.479%）——两参考都在 flip 上方、从 07-02
              的 +0.15% <b>延伸</b>。墙图是现货上方一道正天花板、下方单独一根
              看跌墙：最重的是{' '}
              <span className="dn-tag bull">$63k +16.90M</span>（最重墙、现货
              上方一道正天花板）、{' '}
              <span className="dn-tag bull">$62k +14.48M</span> 就在上、{' '}
              <span className="dn-tag bull">$64k +12.29M</span>、{' '}
              <span className="dn-tag bear">$60k −11.81M</span>（现货正下方那根
              看跌墙）、{' '}
              <span className="dn-tag bull">$66k +10.23M</span>、{' '}
              <span className="dn-tag bear">$56k −9.09M</span>、{' '}
              <span className="dn-tag bull">$65k +8.51M</span>、{' '}
              <span className="dn-tag bear">$55k −7.26M</span>、{' '}
              <span className="dn-tag bull">$80k +7.08M</span>、{' '}
              <span className="dn-tag bear">$50k −6.35M</span>。{' '}
              <span className="dn-em">
                关键是 aggregate 深净多 γ、所以本子把下一步阻尼得更狠、而不是
                放大它——07-02 那本 +12.0M 的加深、谱系带过的最建设性 gamma
                背景。现货 $61,433 坐在 $62k +14.48M / $63k +16.90M 正天花板下
                （它们括住 D-SMA20 $62,252 / 地板 $62,643 重夺区）、$60k −11.81M
                看跌墙上；正天花板把反弹就在重夺区头顶封住、下方单独那根看跌墙
                是近的架子。一本深多 γ、flip 上方、无实质近端下行放大器的本子
                是这一轮最建设性的 gamma 结构——但那条会说它下面这段价格动作是不是
                需求的盘面仍是死的、MTF 引擎在高位闪超买反转。
              </span>{' '}
              按到期、近端集中是正的、只除一根小的 6JUL26 负：前端是那根正的
              3JUL26{' '}
              <span className="dn-tag bull">0.3 DTE +19.55M（约今日 08:00Z 结算
              ——就是 07-02 那根 −7.75M 近端下行放大器、滚到前端后翻正）</span>、
              然后 4JUL26 1.3{' '}
              <span className="dn-tag bull">+5.25M</span>、5JUL26 2.3 +1.89M、
              6JUL26 3.3 −0.34M、10JUL26 7.3{' '}
              <span className="dn-tag bull">+13.88M</span>、17JUL26 14.3{' '}
              <span className="dn-tag bull">+15.15M</span>、24JUL26 21.3 +1.30M、
              31JUL26 28.3{' '}
              <span className="dn-tag bull">+10.71M</span>、28AUG26 56.3 +3.01M、
              25SEP26 84.3{' '}
              <span className="dn-tag bear">−3.03M</span>、25DEC26 175.3 +0.65M、
              26MAR27 266.3 +0.43M、25JUN27 357.3 +0.51M。2JUL26 前端约昨日
              08:00Z 结算；07-01 备忘看到那根近端下行放大器炸到 −21.15M、07-02
              备忘带在 3JUL26 −7.75M 的、现已随 3JUL26 滚到前端而翻正（+19.55M）
              ——集中的短端下行没了、唯一有量的负到期是远端 25SEP26 −3.03M。
              （现货参考的 aggregate +60.7M 是现货处的 net GEX；按到期的行是一个
              独立分解、不必加总到它。）
            </p>

            <p>
              926 合约的 IV 中位数是{' '}
              <span className="dn-tag">42.8%</span>（从 07-02 的 44.5% / 878
              合约松）对 30D 收对收 RV{' '}
              <span className="dn-tag">37.55%</span>——链层丰度较已实现{' '}
              <span className="dn-tag">~+5.25pt</span>（07-02 是 ~+5.92pt——第二
              根上收上 IV 与 RV 双松、丰度收窄）、RV 进一步离它近期高（今天
              37.55% 对 07-02 的 38.58% 与 05-31 的 24.91%——仍偏高、但两根上收
              把 30D 已实现拉下）。一个 926 合约的链中位数、<span className="dn-em">
              不是</span>一个可交易价差；到期/strike 层 vega、skew 与期限结构仍
              未载入、vol 读法保持 framework only。RV 方法：30D 收对收、
              logret.std × √365 × 100 于最后 30 根日线对数回报（= 31 根连续日收）
              锚自 parquet 最末 bar 2026-07-03 00:06Z。P/C 比 0.57、Call OI
              234,322 / Put OI 133,532 BTC。
            </p>
            <h2 className="dn-sec">
              宏观 <span className="dn-roman">IV · ~1.85h 渲染——10Y +4bp 到 4.48%（距闸 5bp）、TIPS 2.25% 极端 RISK-OFF、HY OAS 2.74% −1.0bp 仍在 2.78% re-grow 闸下（闸仍不点）、MOVE 68.6（松）· FX 腿走软但硬：DXY 100.85（仍极端）与 USD/JPY 162.54 · regime 进一步松到特异（mean |r| 0.192）、BTC +3.28% 现领先 NQ 达 +3.14pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观面板渲染滞后约 1.85h、读法混：利率往它的闸收紧 +4bp（10Y
                4.48%、距 5bp）、而信用价差再收 −1bp 到 2.74%、仍在它的 2.78%
                re-grow 闸<b>下</b>——闸仍不点——美元走软但守 100.85 极端
              </span>
              。面板渲染是 2026-07-02 22:15Z、较快照早约 1.85h。US 10Y 名义{' '}
              <span className="dn-tag">4.48%（+4.0bp）</span>、regime z{' '}
              <span className="dn-tag bear">+1.51</span>——紧 regime、RISK-OFF、
              距 4.53% 闸 5bp（现在更近的一腿）。10Y TIPS 实际{' '}
              <span className="dn-tag">2.25%（+5.0bp）</span>、regime z{' '}
              <span className="dn-tag bear">+2.56</span>——极端 RISK-OFF、面板上
              最紧的线之一。5Y5Y BE 通胀{' '}
              <span className="dn-tag">2.20%（−2.0bp）</span>、10Y 盈亏平衡{' '}
              <span className="dn-tag">2.23%（−1.0bp）</span>——通胀预期软。HY
              OAS{' '}
              <span className="dn-tag bull">2.74%（−1.0bp）</span>、regime z{' '}
              <span className="dn-tag bull">−0.99</span>——z-regime 上信用松；
              价差再收 −1bp、仍在它的 2.78% re-grow 闸<b>下</b>（06-30 在 2.83%
              点、07-01 在 2.80%、然后 07-02 掉到 2.75% 下、本次守在 2.74% 下、
              所以信用 re-grow 闸<b>仍不点</b>）。MOVE 债波是{' '}
              <span className="dn-tag">68.6</span>——源按它自己 1d delta 标 +1.77、
              仍&ldquo;松&rdquo;（较 07-02 不变）。美元走软但守极端：DXY{' '}
              <span className="dn-tag bear">100.85（−0.54 日）</span>、regime z{' '}
              <span className="dn-tag bear">+2.12</span>、离日高但仍极端。Fed 净
              流动性{' '}
              <span className="dn-tag bull">$5.843T（+0.053T）</span>、regime z{' '}
              <span className="dn-tag">−0.60</span>——一根新鲜周度印、净流动性
              加。USD/JPY{' '}
              <span className="dn-tag">162.54（−0.09 日）</span>、regime z +1.68；
              US-JP 10Y 利差{' '}
              <span className="dn-tag">1.83%（+4.0bp）</span> 窄；USD/CNY{' '}
              <span className="dn-tag">6.7881</span>；WTI{' '}
              <span className="dn-tag">$71.9（+1.6 日）</span>。{' '}
              <span className="dn-em">
                净：宏观背景在 z-面板上仍 risk-off（利率紧且在收、TIPS 极端、
                美元极端）、但信用边际守松——信用腿再收 −1bp 到 2.74%、仍在
                2.78% re-grow 闸下、所以那根在 06-28 → 07-01 备忘上点过的信用闸
                连续第二个 cut 不点；利率腿收 +4bp 到 4.48%、现只距它的 4.53%
                闸 5bp、是更近的一腿。reclaim-long 利率筛（10Y &lt; 4.55%）在
                4.48% 仍<b>真</b>、余量更少。宏观读法仍是强化而非反驳这根确认
                破位——一张宽的 risk-off z-面板——但新鲜的动作是双向的：信用闸
                不点、相关 regime 进一步松、BTC 领先 NQ（见下方跨资产）、而
                利率往它的闸收。
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
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.20%</td><td className="num bull">−2.0bp</td><td className="num">−0.39</td><td className="neut">软</td></tr>
                <tr><td>10Y 盈亏平衡</td><td className="num">2.23%</td><td className="num bull">−1.0bp</td><td className="num">−1.56</td><td className="neut">软</td></tr>
                <tr><td>HY OAS</td><td className="num">2.74%</td><td className="num bull">−1.0bp</td><td className="num bull">−0.99</td><td className="bull">仍在 2.78% re-grow 闸下——闸仍不点</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.504</td><td className="num">−0.00</td><td className="num">+0.40</td><td className="stale">周度 · 中性 · 现陈旧 ~13d</td></tr>
                <tr><td>MOVE 债波</td><td className="num">68.6</td><td className="num bear">+1.77</td><td className="num bull">−0.62</td><td className="bull">松</td></tr>
                <tr><td>DXY</td><td className="num">100.85</td><td className="num bull">−0.54</td><td className="num bear">+2.12</td><td className="bear">极端 RISK-OFF · 走软但硬</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.843T</td><td className="num bull">+0.053T</td><td className="num">−0.60</td><td className="neut">加 · 新鲜周度印</td></tr>
                <tr><td>USD/JPY</td><td className="num">162.54</td><td className="num bull">−0.09</td><td className="num bear">+1.68</td><td className="bear">硬</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">1.83%</td><td className="num">+4.0bp</td><td className="num bull">−1.00</td><td className="neut">窄</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7881</td><td className="num">−0.01</td><td className="num bull">−1.39</td><td className="neut">松</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">+13.5bp（月度）</td><td className="num bear">+2.56</td><td className="stale">月度 · 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、summary 00:00Z——{' '}
              <span className="dn-em">一根 7 日滚动读、不是今天</span>）。均值
              非对角 <span className="dn-tag">|r| 0.192</span>——从 07-02 的
              0.239 进一步松到坐{' '}
              <span className="dn-tag">远在 0.25 特异阈下</span>、所以 regime 行
              保持{' '}
              <span className="dn-signal">特异——BTC 现按相关性与广义跨资产复合
              明显脱钩</span>、它的头部关联是一条紧的股/金属簇带、都在 +0.40
              附近：PALL{' '}
              <span className="dn-tag">+0.407</span>、NQ{' '}
              <span className="dn-tag">+0.406</span>、NVDA{' '}
              <span className="dn-tag">+0.405</span>、PLAT{' '}
              <span className="dn-tag">+0.400</span>、URNM{' '}
              <span className="dn-tag">+0.394</span>、SP500{' '}
              <span className="dn-tag">+0.392</span>、SILVER{' '}
              <span className="dn-tag">+0.349</span>、GOLD{' '}
              <span className="dn-tag">+0.320</span>、TSLA{' '}
              <span className="dn-tag">+0.248</span>、COPPER{' '}
              <span className="dn-tag">+0.246</span>、JP225{' '}
              <span className="dn-tag">+0.210</span>、其中 JPY{' '}
              <span className="dn-tag">−0.149</span> 反向、CL{' '}
              <span className="dn-tag">+0.019</span> / BRENT{' '}
              <span className="dn-tag">+0.026</span> 近零。而 7d 表现翻转了
              BTC-对-NQ 的框架：BTC 现领先 NQ/SP500、不再是落后者——{' '}
              <span className="dn-tag bull">BTC +3.28%</span> 在 NQ{' '}
              <span className="dn-tag bull">+0.14%</span> 前 +3.14pt（07-02 还
              落后 −1.60pt、07-01 落后 −9.29pt）、也在 SP500 +1.75% 前、尽管几根
              大盘股与金属坐得更前——领头是大盘股 AAPL{' '}
              <span className="dn-tag bull">+11.25%</span>、MSFT{' '}
              <span className="dn-tag bull">+9.92%</span>、META{' '}
              <span className="dn-tag bull">+7.33%</span>、AMZN{' '}
              <span className="dn-tag bull">+6.99%</span> 与金属 PALL{' '}
              <span className="dn-tag bull">+6.22%</span>、SILVER{' '}
              <span className="dn-tag bull">+6.00%</span>、还有 TSLA{' '}
              <span className="dn-tag bull">+5.91%</span>、GOOGL{' '}
              <span className="dn-tag bull">+4.83%</span>、GOLD{' '}
              <span className="dn-tag bull">+2.65%</span>、BTC{' '}
              <span className="dn-tag bull">+3.28%</span>、SP500{' '}
              <span className="dn-tag bull">+1.75%</span>、PLAT{' '}
              <span className="dn-tag bull">+1.73%</span>、COPPER{' '}
              <span className="dn-tag bull">+1.23%</span> 全绿；红的是能源与日本
              ——BRENT{' '}
              <span className="dn-tag bear">−5.19%</span>、CL{' '}
              <span className="dn-tag bear">−4.82%</span>、JP225{' '}
              <span className="dn-tag bear">−2.78%</span>、NGAS{' '}
              <span className="dn-tag bear">−2.15%</span>、URNM{' '}
              <span className="dn-tag bear">−1.01%</span>、NVDA{' '}
              <span className="dn-tag bear">−0.01%</span> 平。{' '}
              <span className="dn-em">
                BTC 7d 回报 +3.28% 对 NQ +0.14% 是 +3.14pt 的领先（07-02 落后
                −1.60pt、07-01 −9.29pt）——对 NQ 的差跨三根 session 从深落后翻成
                明确领先、本次它定了框架：BTC 不再是落后者、现领先 NQ/SP500
                （尽管几根大盘股与金属更前）、相关 regime 进一步松到 0.25 线下
                的特异。所以前谱系带的那根尖锐 risk-off / 最差表现读彻底解除
                ——BTC 本次既非在阈上统计耦合、也非落后者。宏观 z-面板仍读
                risk-off（利率紧且在收、DXY 极端）、但跨资产 regime 松了、BTC
                领先 NQ、所以这两个跨市场读与紧的宏观 z-面板背离。
              </span>{' '}
              JGB 月度 2.65% 带一个极端 RISK-OFF 月度标——别依赖它。
            </p>
            <h2 className="dn-sec">
              交易本子 <span className="dn-roman">V · 本子 FLAT · 200W 地板——破位在 06-29 周收确认（$60,224.70 &lt; $62,643、−3.86%）、06-15 重夺论被证伪；07-02 的上收把反弹延伸到第三根 session（到 00:07Z 截点为止没被交还进下一根 session；07-03 日收还不存在）、把现货压到地板下 −1.93% 进重夺区 · scout 价格前置条件保持真（现货 flip 上方 +1.90%）——scout 仍按兵（盘面瞎 ~20.94 天、无确认引擎触发——引擎现在闪一根 4h TD9 SELL 在高位——且现货脚下无 MA）· 宏观尾信用闸仍不点（OAS 2.74% &lt; 2.78%）· 挤压周期 ON HOLD（SM 死 ~20.94 天）</span>
            </h2>

            <p>
              <span className="dn-signal">
                本子 flat、且保持 flat——谱系的结构正被裁定<b>对着它</b>（200W
                破位在周收确认、重夺论被证伪）、07-02 的上收把建设性 gamma/价格
                图延伸到第三根 session、约束仍是数据完整性——加一层新鲜的警惕、
                因引擎在高位翻成超买反转
              </span>
              。06-29 周收结算 $60,224.70、地板 $62,643 下 −3.86%——破位<b>确认</b>、
              06-15 重夺论<b>被证伪</b>、本次没有任何东西撤销这点。07-02 备忘
              记的是第二根反弹（06-30 首根反弹在 07-01 被交还）；本次那根反弹
              <b>延伸</b>——07-02 日收 $61,540.60 是一根上收 +$1,541.00、这一轮
              最强、且到 00:07Z 截点为止没被交还进下一根 session（07-03 未收盘
              bar 仍贴着它、只低 $107.50；07-03 日收还不存在）、把现货压到地板下
              −1.76% 进重夺区。dealer 本子加深到 +60.7M 净多 γ、前三个到期翻正、
              没有实质近端下行放大器留着（6JUL26 一根小 −0.34M 负）、现货推到
              flip 上方 +1.90%。scout 的价格前置条件保持<b>真</b>——现货稳在
              flip 上方、重夺区在 −1.93% 内——所以价格腿开着、在改善。但交易台
              仍不出 scout：那条会确认需求的盘面是瞎的、现货脚下无 MA、引擎现已
              翻成周期反转 regime、带一根新鲜 4h TD9 SELL（超买反转）与
              15m/30m/1h 顶背离、就在高位——在这里追延伸、进一条瞎盘面上一根
              超买反转印、是个差入场。也无新空：本子深多 γ、flip 已重夺 +1.90%、
              现货只在地板下 −1.93%、一根 1M TD9 buy 仍印——是个差的压空位置。
              今天的交易本子是：无空、无 scout、无新对冲——先修盘面、再读延伸
              反弹是空头回补还是需求。
            </p>
            <div className="dn-trade">
              <span className="dn-side framework">framework · PRIMARY · 200W 周期地板盯盘——破位已确认：06-29 周收 $60,224.70 结算在 $62,643 地板下 −3.86%（周收升级已点）、06-15 重夺论被证伪；07-02 的上收把反弹延伸到第三根 session、把现货压到地板下 −1.93% 进重夺区；连续九根日收在下（06-24 → 07-02）</span>
              <div className="dn-trade-name">
                200W 周期地板盯盘——破位在 06-29 周收确认、反弹延伸进重夺区：地板 $62,643 = 全历史 W-SMA200（356 根收盘周 bar、本次不变）、06-29 周收 $60,224.70（下 −3.86%）确认破位、07-02 日收 $61,540.60（一根上收 +$1,541.00、这一轮最强）把现货压到地板下 −1.76%、06-15 重夺论被证伪
              </div>
              <div className="dn-thesis">
                07-02 备忘记的是破位在 06-29 周收确认、第二根反弹在印。本次那根
                反弹延伸：07-02 日线 bar 收{' '}
                <span className="dn-tag bull">$61,540.60、地板 $62,643 下 −1.76%</span>
                、一根上收 +$1,541.00、这一轮最强、且到 00:07Z 截点为止没被交还
                进下一根 session（07-03 未收盘 bar 仍贴着它；07-03 日收还不存在）、
                把现货压进 D-EMA20 / D-SMA20 / 地板重夺区。按框架、一根盘中 wick
                不是破位、一根日收在下是早警、一根持续的周收在下是那个破地板、
                证伪 06-15 重夺论的升级——那根周收印在 06-29、所以破位保持<b>确认</b>、
                重夺论保持<b>被证伪</b>。22JUN 周收 $63,990 是最后一根周线守；它
                仍被取代。{' '}
                <span className="dn-em">谱系那根结构正保持在周收口径被裁定对着
                它；现货脚下无 MA、地板——不变在 $62,643——是确认阻力、现在在
                −1.93% 内、延伸反弹是确认破位内的一根反弹、直到一根周收重夺
                地板。</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W 地板（不变）</span><span className="dn-lvl-v">$62,643 = 全历史 W-SMA200、本次从 2019→ parquet glob 重算（356 根收盘周 W-MON bar、含已结算的 06-29 周、不含未收盘的 07-06 周）；较 07-02 不变、06-29 周三个 cut 前已结算 · weekly_200sma.json 缺、所以比值分位 / last-event 留作未溯源、不杜撰</span></div>
                <div><span className="dn-lvl-k">破位——已确认、反弹延伸</span><span className="dn-lvl-v bear">06-29 周收 $60,224.70 结算在地板下 −3.86%——破位确认；连续九根日收在下（06-24 $61,051 −2.54%、06-25 $59,772 −4.58%、06-26 $60,072 −4.10%、06-27 $60,000 −4.22%、06-28 $59,550 −4.94%、06-29 $60,224.70 −3.86%、06-30 $58,605.40 −6.45% 最深、07-01 $59,999.60 −4.22%、07-02 $61,540.60 −1.76% 最强上收）；最后两根是上收、07-02 到 00:07Z 截点为止没被交还进下一根 session（07-03 日收还不存在）、但都守在地板下</span></div>
                <div><span className="dn-lvl-k">重夺论——被证伪</span><span className="dn-lvl-v bear">06-15 重夺论要求地板在周收口径守住；06-29 周收在地板下证伪它——先前 22JUN 周线守（$63,990）被取代</span></div>
                <div><span className="dn-lvl-k">重夺阶梯（现在是恢复路径）</span><span className="dn-lvl-v bear">现货在 flip $60,286 上方 +1.90%（延伸）、D-EMA20 $62,056 下 −1.00%、D-SMA20 $62,252 下 −1.32%、地板 $62,643 下 −1.93%——现货脚下无 MA、但簇收紧到 2% 内；结构性恢复是一根持续的周收重回地板 $62,643 上方（破位必须撤销的那个水位）、D-EMA20 $62,056 与 D-SMA20 $62,252 作途站——不是瞎盘面上的一个 scout 触发（见 scout）</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework、不是一笔交易。</b>地板盯盘是唯一那根承重的 live
                水位、其余都陈旧或 framework only。破位在周收确认、重夺论被证伪、
                反弹延伸进重夺区——盯盘上不取任何仓位：它标定确认破位（06-29 周收
                $60,224.70 &lt; $62,643）、恢复条件（一根持续的周收重回地板
                $62,643 上方）、与重夺途站（flip $60,286 → D-EMA20 $62,056 →
                D-SMA20 $62,252 → 地板 $62,643）、交易台不会在引擎于高位闪超买
                反转时把一根延伸反弹追多进一条瞎盘面、也不会在一根确认破位只在
                地板下 −1.93%、进一本深多 γ 本子、flip 已重夺、一根 1M TD9 buy
                已印的情况下压空。
              </div>
            </div>
            <div className="dn-trade">
              <span className="dn-side long">long · scout · 仍按兵 · 价格前置条件保持真（现货 flip 上方 +1.90%、从 07-02 的 +0.15% 延伸）、本子加深净多 γ——这一轮最建设性的价格/gamma 图；但盘面瞎 ~20.94 天 + 无确认引擎触发（引擎现在闪一根 4h TD9 SELL 在高位）+ 现货脚下无 MA 仍约束</span>
              <div className="dn-trade-name">
                回补反弹 scout——flip 重夺保持真（现货 +1.90% 在上）、本子加深净多 γ、价格腿开着在改善；scout 在瞎盘面上保持按兵、引擎现在在高位闪超买反转、现货脚下无 MA
              </div>
              <div className="dn-thesis">
                06-30 备忘看到 scout 价格前置条件翻真、07-01 备忘看到它随首根
                反弹失败翻回假、07-02 备忘看到它在第二根反弹上翻回真。本次它保持
                真、且延伸：现货{' '}
                <em>flip $60,286 上方 +1.90%</em>（flip 台阶 +$475）、已压进
                重夺区、dealer 本子加深到 +60.7M 净多 γ、无实质近端下行放大器
                留着。所以价格与 gamma 两腿是这一轮最建设性的。但 scout 保持
                按兵、且本次为一个新鲜理由：确认腿仍缺、<b>且</b>引擎转向反对这个
                入场。（1）仓位腿（SM 空头泄、funding 姿态、回补 flow）全需要一
                条 live 盘面、而没有——交易台看不见延伸反弹是空头回补耗尽还是
                需求消化。（2）引擎不带确认建设性触发——regime 翻回周期反转、一根
                新鲜 4h TD9 SELL（超买反转提示）印在 $61,491、带 15m/30m/1h 顶
                背离、就在高位、抵消了中段金叉与 1M TD9 buy。（3）现货脚下仍无
                MA——现货在 flip 上但在 D-EMA20、D-SMA20 与地板下。{' '}
                <span className="dn-em">在一条仓位瞎的盘面上、无确认引擎印、现在
                还带高位一个超买反转签名做多 scout、不是一笔交易——价格腿开着
                在改善、但把一根延伸反弹追进一根 4h TD9 SELL、在一条瞎盘面上、
                正是交易台按兵的那个入场。1M TD9 buy 是一根值得记的真超卖提示、
                但在这些位置被 4h TD9 SELL 抵消。</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v bear">按兵 · 无入场 · 价格前置条件保持真（现货 flip 上方 +1.90%、从 07-02 的 +0.15% 延伸）、本子深净多 γ、但现货脚下无 MA、盘面瞎、引擎现在闪超买反转（4h TD9 SELL）；只在 live 盘面恢复 AND 一根确认引擎印后再评估</span></div>
                <div><span className="dn-lvl-k">技术前置条件</span><span className="dn-lvl-v bear">flip $60,286 重夺（真——现货 +1.90% 在上）BUT D-EMA20 $62,056 / D-SMA20 $62,252 / 地板 $62,643 重夺假（现货全在下、脚下无 MA）AND 一根确认引擎印（不真——3 多 / 6 空 / 1 中、中段水下金叉与一根 1M TD9 buy 被一根新鲜 4h TD9 SELL 与 15m/30m/1h 顶背离抵消；regime 是周期反转）</span></div>
                <div><span className="dn-lvl-k">数据前置条件</span><span className="dn-lvl-v bear">live 盘面恢复（现冻结 377.4h）AND SM feed live（现死 ~20.94 天）——两者都要成立、任何仓位腿才能读；这是承重的那个 block</span></div>
              </div>
              <div className="dn-gating">
                <b>硬规则：</b>没有 live 仓位盘面、不入 scout。1M TD9 buy、中段
                水下金叉、底背离与重夺的 flip、在 SM / funding / flow 腿瞎、现货
                在 D-EMA20 / 地板 / D-SMA20 下且脚下无 MA、引擎现带一根超买反转印
                （4h TD9 SELL）在高位时、都不触发 scout——交易台不会把一根它看不见
                被回补的回补反弹加仓、尤其是一根现被反转签名迎头撞上的延伸反弹。
                06-30 抬起、07-01 重关、07-02 重开的那个价格 block 保持开着在
                改善；作业 block（盘面死）与引擎 block（无确认触发、现在一根超买
                反转）仍约束。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · 宏观尾 · put-spread re-grow 闸——信用腿仍不点：HY OAS 2.74% &lt; 2.78% 闸（本次再收 −1.0bp、仍在下）、10Y 腿距 5bp（4.48% 对 4.53% 闸）；信用腿守在它的触发下、利率腿收得更近</span>
              <div className="dn-trade-name">
                下行 put-spread——re-grow 信用闸仍不点（OAS 2.74% &lt; 2.78%）、利率腿距 5bp；不加对冲（dealer 本子加深净多 γ、无实质近端放大器留着、所以内生下行结构进一步缓和、即便利率腿往它的闸收）
              </div>
              <div className="dn-thesis">
                谱系带的宏观 re-grow 闸——HY OAS &gt; 2.78% OR 10Y &gt; 4.53%
                作为重长下行尾的条件——在信用腿上仍<b>不点</b>：HY OAS{' '}
                <em>2.74%</em>、本次 −1bp、守在闸下（它在 06-30 于 2.83% 点、
                07-01 于 2.80% 点、然后 07-02 掉到 2.75% 下、本次守在 2.74% 下）、
                而 10Y 收 +4bp 到 4.48%、坐距 5bp——现在更近的一腿。所以两腿都
                离它们的触发、但利率腿在收。reclaim-long 利率筛（10Y &lt; 4.55%）
                在 4.48% 仍<b>真</b>、余量更少。宏观盘面在 z-面板上仍是一记
                risk-off 冲量（利率紧且在收、TIPS 极端、美元极端）、但一根宏观尾
                不是一根内生兼特异地板破位的对的工具、且 dealer 本子已加深到
                净多 γ、无实质近端放大器留着、所以内生下行结构本次进一步缓和
                ——这、连同不点的信用闸、是把尾按下的理由、不是加它的理由。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v bull">无仓 · 信用闸在收盘口径仍不点 · HY OAS 2.74% &lt; 2.78%（−1.0bp、仍在下）、10Y 腿距 5bp</span></div>
                <div><span className="dn-lvl-k">re-grow 触发（不点）</span><span className="dn-lvl-v bull">HY OAS &gt; 2.78% 收——仍<b>不点</b>于 2.74%（再收 −1.0bp 在闸下）· OR 10Y &gt; 4.53% 收（现 4.48%、距 5bp 点——更近的一腿、在收、但仍离）</span></div>
                <div><span className="dn-lvl-k">reclaim-long 利率筛</span><span className="dn-lvl-v bull">10Y &lt; 4.55% 收——在 4.48% 真；等一根 BTC 内部转向 AND 一条 live 盘面去转译</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats：</b>re-grow 闸是随水位漂移设的自由裁量盯盘、不是
                回测断点。信用腿守在闸下（OAS 2.74% &lt; 2.78%）、利率腿坐距
                5bp 且在收；两腿都不点、本次没有尾可长；注意 dealer 本子已加深到
                净多 γ、无实质近端放大器留着、所以内生下行结构进一步缓和、即便
                利率腿往它的闸收——尾按下。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · 挤压周期 hostile-2 watchlist · 无日历先验 · ON HOLD——SM feed 死 ~20.94 天、重堆签名本次读不了</span>
              <div className="dn-trade-name">
                挤压周期 hostile-2——ON HOLD（06-16 → 07-02 的延续）：SM feed 冻结 ~502.5h、重堆签名本次读不了
              </div>
              <div className="dn-thesis">
                挤压周期 / re-stack-hostile-2 框架把离散 SM 步（Δshort &gt; 0 +
                Δlong &lt; 0 同一分钟）读成延续签名；它的日历先验（BJ 13–15 节奏）
                在 05-31 被证伪、此后作为无先验 watchlist 跑。它今天无法评估、
                为最简单的理由：SM feed 死了。long_btc / short_btc / net_btc 自
                2026-06-12 01:36Z 起恒定（~502.5h）、所以没有 SM deltas 可读。
                06-16 备忘在 ~94.5h 把这个 ON HOLD、07-01 在 ~454.5h、07-02 在
                ~478.5h；它在 ~502.5h 仍 ON HOLD。{' '}
                <span className="dn-em">一根冻结的 feed 印不出签名；框架在 SM
                数据恢复前是黑的。</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">框架状态</span><span className="dn-lvl-v bear">ON HOLD · SM feed 冻结 ~502.5h（自 2026-06-12 01:36Z）· 无 SM deltas 可算</span></div>
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
              决策条件 <span className="dn-roman">VI · LIVE 盘面断线仍是那个操作性条件（第十七天）· 200W 地板破位在 06-29 周收确认（$60,224.70 &lt; $62,643、−3.86%）、06-15 重夺论被证伪、07-02 的上收把反弹延伸到第三根 session · flip 延伸（现货 +1.90% 在上）、本子加深到 +60.7M 净多 γ、无实质近端放大器留着 · scout 价格前置条件保持真、但引擎翻成周期反转、一根 4h TD9 SELL 在高位 · 宏观信用闸仍不点（OAS 2.74%）、regime 进一步松到特异、BTC 领先 NQ 达 +3.14pt</span>
            </h2>

            <p>
              07-02 那些条件里：live 盘面<em>没</em>回来——它更死了约 24h、现
              冻结 377.4h、SM feed 在 ~20.94 天；200W 地板破位保持在 06-29 周收
              <b>确认</b>（$60,224.70、地板 $62,643 下 −3.86%）、06-15 重夺论保持
              <b>被证伪</b>；地板本次不变（$62,643、06-29 周三个 cut 前已结算）；
              07-02 备忘记的第二根反弹<b>延伸</b>——07-02 日收 $61,540.60 是一根
              上收 +$1,541.00、这一轮最强、且到 00:07Z 截点为止没被交还进下一根
              session（07-03 日收还不存在）；flip <b>延伸</b>（现货 +1.90% 在上
              对 07-02 的 +0.15%）、flip 台阶到 $60,286；dealer 本子从 +12.0M
              <b>加深</b>到 +60.7M 净多 γ——把下一步阻尼得更狠、无实质近端下行
              放大器留着（前端 3JUL26 +19.55M；6JUL26 一根小 −0.34M 负）；scout
              价格前置条件保持真、但引擎翻回周期反转、带一根新鲜 4h TD9 SELL
              （超买反转）在高位；宏观 re-grow 闸在信用腿仍不点（OAS 2.74% &lt;
              2.78%）、而利率腿收到 4.48%（距 5bp）；相关 regime 进一步松到特异、
              BTC 7d 回报<b>领先</b> NQ 达 +3.14pt；挤压周期在更死的 feed 上保持
              ON HOLD。主导条件不变：<em>交易台仓位瞎、进一根在周收确认的 200W
              地板破位、一根把现货压进重夺区的延伸反弹、和一本加深到净多 γ 的
              本子——它一样都无法对盘面确认、现在还被高位一根超买反转印迎头
              撞上</em>。今天条件围绕持续断线、确认的周收破位、延伸反弹、与加深
              的净多 γ 本子重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>Live 盘面恢复（PRIMARY 操作性）</td><td className="bull">live_db.json 恢复写 2026-06-17 06:43Z 之外的新鲜行 AND SM 三元离开它 06-12 01:36Z 冻结更新</td><td>全量重读 funding / OI / flow / SM；只有那时 scout 或挤压周期才能评估——也只有那时延伸反弹才能被确认成空头回补耗尽还是需求消化；仓位维度现已连续十五篇瞎</td></tr>
                <tr><td>200W 地板——破位已确认、反弹延伸</td><td className="bear">06-29 周收 $60,224.70 结算在地板 $62,643 下 −3.86%——破位确认；连续九根日收在下（06-24 → 07-02）、06-30 收 $58,605.40 最深（−6.45%）、07-02 收 $61,540.60 最强上收（−1.76%）且到 00:07Z 截点为止没被交还进下一根 session（07-03 日收还不存在）；未收盘 07-03 bar $61,433、下 −1.93%</td><td>地板破位在周收口径确认、反弹延伸进重夺区——地板（$62,643）是确认阻力、现在在 −1.93% 内；不取仓位</td></tr>
                <tr><td>200W 重夺论——被证伪</td><td className="bear">06-15 重夺论要求地板的一根周收守；06-29 周收在下证伪它——先前 22JUN 周线守（$63,990）被取代</td><td>重夺论已死；结构性恢复现需要一根持续的周收重回地板 $62,643 上方；盯那根周收</td></tr>
                <tr><td>Flip 重夺（scout 价格前置条件）——延伸</td><td className="bull">现货 $61,433 flip $60,286 上方 +1.90%、但 D-EMA20 $62,056 下 −1.00%、地板 $62,643 下 −1.93%；现货脚下无 MA；flip 坐在地板下</td><td>价格前置条件保持真且在改善；但 scout 仍需 live 盘面恢复 AND 一根确认引擎印——而引擎现在在高位闪一根 4h TD9 SELL（超买反转）；在一条瞎盘面、脚下无 MA 上、延伸被记录、不被交易</td></tr>
                <tr><td>Dealer 本子——加深净多 γ</td><td className="bull">aggregate GEX +60.7M（07-02 是 +12.0M、06-30 是 +5.6M）；前端是 3JUL26 0.3 DTE +19.55M（约今日 08:00Z 结算）；无近端下行放大器留着（最重的负远端 25SEP26 −3.03M）；现货坐在 $62k +14.48M / $63k +16.90M 正天花板下、$60k −11.81M 看跌墙上</td><td>dealer 本子现把下一步阻尼得更狠——近端集中下行风险没了；只盯、无指令（本子是这一轮最建设性、但盘面瞎、引擎在高位标一根超买反转）</td></tr>
                <tr><td>宏观尾 re-grow（信用腿不点）</td><td className="bull">HY OAS 2.74% &lt; 2.78%（仍不点、再收 −1.0bp）OR 10Y &gt; 4.53%（距 5bp 点、收到 4.48%）——FX 腿走软但硬（DXY 100.85、USD/JPY 162.54）</td><td>本篇无对冲指令——两腿都不点、没有尾可长；注意本子已加深净多 γ、无实质近端放大器、所以内生下行结构进一步缓和、即便利率腿往它的闸收</td></tr>
                <tr><td>reclaim-long 利率筛</td><td className="bull">10Y &lt; 4.55% 收——在 4.48% 真</td><td>独立筛真、余量更少；需要一根 BTC 内部转向 AND 一条 live 盘面去转成 scout long</td></tr>
                <tr><td>挤压周期 hostile-2（ON HOLD）</td><td className="stale">SM feed 死 ~502.5h；无 deltas 可算</td><td>暂停、不是转负——feed 恢复后第一批新鲜 SM deltas 重新武装</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是{' '}
              <span className="dn-signal">
                延伸反弹——它在 07-02 收阳 +$1,541.00、到 00:07Z 截点为止没被
                交还进下一根 session（07-03 日收还不存在）、把本子加深到 +60.7M
                净多 γ、把现货压到 flip 上方 +1.90% 与地板下 −1.93%、200W 破位已
                确认——是空头回补还是需求、只有一条恢复的盘面能说；结构侧、恢复
                仍需要一根持续的周收重回地板 $62,643 上方、D-EMA20 $62,056 与
                D-SMA20 $62,252 作途站
              </span>
              。那本加深到 +60.7M 净多 γ、无近端放大器留着（现货 flip 上方
              +1.90%）的 dealer 本子现把下一步阻尼得更狠；结构正——200W 地板——
              保持在周收确认破、06-15 重夺论保持已死、反弹延伸进重夺区、交易台
              仍读不了那条会说它是空头回补还是需求的盘面——而引擎现在在高位闪
              一根超买反转。在盘面恢复前本篇按写好的跑：本子 flat、scout 价格
              block 保持真且在改善但引擎转成一根 4h TD9 SELL、宏观尾信用闸保持
              不点在它的线下（OAS 2.74%）、挤压周期暂停、200W 地板盯盘是唯一那根
              live 水位——一根在周收确认破、反弹延伸进重夺区的地板、恢复条件是
              一根周收重回 $62,643 上方。价格压进重夺区、flip 延伸、本子加深多 γ、
              无实质近端放大器、相关 regime 进一步松、BTC 领先 NQ——所以前谱系那根
              risk-off / 最差落后读彻底解除；但 MTF 引擎翻回周期反转、带一根 4h
              TD9 SELL 在高位、宏观在 z-面板上仍 risk-off（利率紧且在收、美元
              极端）。下一个 24h 的对读是{' '}
              <em>破位-在周收确认、反弹-延伸进重夺区——尊重确认破位、把加深的
              多 γ 图当成一次瞎盘面无法确认成需求的真改善、权衡高位那根新鲜超买
              反转印、盯现货能不能筑一根周收重回地板上方、并在读延伸反弹是空头
              回补还是需求之前先修盘面</em>。
            </p>
          </div>
          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2（已过 codex 敌对式审计）
            </span>
            <b>状态：</b>这是 <b>v2</b> 篇——<b>已过 codex 敌对式审计</b>。它过了
            记于 <code>audits/2026-07-03-desk-note.md</code> 的跨模型敌对审计
            （codex 主审 + 持有发布门；ask-deepseek 数值二审、经裁定、非自动
            应用）。判决是 BLOCK-CRITICAL（1 CRITICAL + 2 MAJOR + 1 MINOR、外加
            2 条 deepseek MINOR）。所有 findings 都在该不变式出现的<b>每一处</b>
            应用（不只在被引的行）、然后 grep 关闭到零残留后再升级。{' '}
            <b>DN-001（CRITICAL、超时的谱系主张）：</b>搜索的模式——{' '}
            <code>handed back the next/following session</code>、{' '}
            <code>handed back the next day</code>、{' '}
            <code>NOT reversed the following session / next day</code>、{' '}
            <code>first NOT handed back</code>；grep 命中 前 = 14 处残留载体
            （manifest em、lead signal + em、prose signal、仓位头、MA 矩阵日收
            em、交易本子头、trade prose、trade thesis、break-lvl、决策段、
            决策表 200W 行、签名、收尾 signal）；命中 后 = 0——<b>已解决</b>。每一
            处已完成的&ldquo;活过下一根 session&rdquo;措辞都被换成时间戳绑定的
            语言（&ldquo;到 00:07Z 截点为止没被交还进下一根 session；07-03
            未收盘 bar $61,433 仍贴着 07-02 收盘、只低 $107.50；07-03 日收还不
            存在&rdquo;）。真正已完成的过去事实（06-30 反掉 06-29 反弹；06-30
            首根反弹在 07-01 被交还）保留原样。{' '}
            <b>DN-002（MAJOR、&ldquo;整条近端 strip 正&rdquo;）：</b>搜索的模式
            ——<code>entire/ENTIRE near strip (is/flipped) positive</code>、{' '}
            <code>near-dated concentration is entirely positive</code>、{' '}
            <code>NO near-dated (downside) amplifier</code>；grep 命中 前 = 6 处
            &ldquo;整条近端 strip / 完全正&rdquo;载体 + ~12 处强调&ldquo;NO
            amplifier&rdquo;；命中 后 = 0（就错误主张而言）——<b>已解决</b>。
            重构为&ldquo;前三个到期是正的、没有实质近端下行放大器留着；6JUL26
            3.3 DTE 是一根小 −0.34M 负、而最重的负是远端 25SEP26 −3.03M&rdquo;、
            并把每一处&ldquo;NO amplifier&rdquo;软化为&ldquo;无实质近端放大器
            &rdquo;。{' '}
            <b>DN-003（MAJOR、BTC 领导地位过度主张）：</b>搜索的模式——{' '}
            <code>LEADS/LED the complex</code>、
            <code>out-front of the equity complex</code>、{' '}
            <code>bounced hardest</code>、裸的 <code>BTC led/LED</code>；grep 命中
            前 = 5 处过度主张短语 + 2 处裸&ldquo;BTC led&rdquo;；命中 后 = 0
            ——<b>已解决</b>。收窄为&ldquo;BTC 领先 NQ/SP500、不再是落后者（几根
            大盘股与金属坐得更前）&rdquo;；正确的 BTC-对-NQ 领先（+3.14pt）
            保留。{' '}
            <b>DN-004（MINOR、MTF 多框架构成）：</b>搜索的模式——{' '}
            <code>bull frames are the 30m / 1h (above cloud)</code>；grep 命中
            前 = 1；命中 后 = 0——<b>已解决</b>。更正为&ldquo;源偏向的多框架是
            15m / 30m / 1M、其中 1h 云上但源计数里中性&rdquo;。{' '}
            <b>deepseek MINOR ×2（经裁定、后应用）：</b>搜索的模式——日收列表里
            裸的 <code>$60,225</code> 与裸的 <code>$58,605</code>；对周收与 07-01
            上收推导（+$1,394.20 = 59,999.60 − 58,605.40）重算、确认全精度值；
            grep 命中 前 = 3 个列表各；命中 后 = 0——<b>已解决</b>、标准化为{' '}
            <code>$60,224.70</code> 与 <code>$58,605.40</code>。{' '}
            <b>Build note（INFO）：</b>本服务器跑 Node 18.19.1；完整{' '}
            <code>next build</code> 在 Node 版本门上被环境阻塞（谱系）、所以{' '}
            <code>npx --no-install tsc --noEmit</code> 是 build proxy——STAGE E
            持有最终 build 核验。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体情况
            个性化。数字反映单一原子快照（2026-07-03 00:07Z）、provenance 在
            上方数据来源条带中按节披露；<em>关键地、快照时 live 衍生品盘面已
            冻结 377.4h（末行 2026-06-17 06:43Z）、聪明钱仓位 feed 死 ~20.94 天
            </em>、所以所有 funding、OI、flow 与仓位数字都明确是 last-known /
            陈旧或不可计算、并已如此标注；宏观面板渲染是 2026-07-02 22:15Z
            （较快照早约 1.85h）。价格、MTF、GEX 与跨资产是最新的。这是 v2 篇、
            过 codex 敌对式审计后升级；审计 findings 已裁定并应用（见上方审计
            痕迹）。水位、规模与条件是交易台流程的示例、不是长期推荐。过去的
            相关性、γ 与仓位模式不绑定未来盘面。衍生品有全损风险、加杠杆下损失
            可超过保证金。<em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                反弹延伸了：07-02 的上收（$61,540.60、+$1,541.00）到 00:07Z
                截点为止没被交还进下一根 session（07-03 未收盘 bar $61,433 仍
                贴着它；07-03 日收还不存在）、dealer 本子加深到 +60.7M 净多 γ、
                无实质近端放大器留着、现货推到 flip 上方 +1.90% 进重夺区、地板下
                −1.93%——这一轮最建设性的 gamma/价格图、全部透过一条死盘面读、
                第十七天、现被高位一根 4h TD9 SELL 迎头撞上。破位确认。反弹延伸。
                本子多 γ。引擎标反转。瞎。
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
            v2 · 2026-07-03 00:07Z 快照 · 已过 codex 敌对式审计 ·
            2026-07-03T01:05:00Z · sources: live_db.json（冻结 377.4h）·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
