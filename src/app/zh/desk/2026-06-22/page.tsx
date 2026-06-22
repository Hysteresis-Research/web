import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-06-22 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-06-22',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-06-22' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260622() {
  await requireViewer('/zh/desk/2026-06-22');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-06-22 · v2</span>
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
              <span className="dn-big">$64,710</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.86%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-06-22 17:19Z ·{' '}
              <span className="dn-em">
                实时盘面停摆进入第六天——OKX 监控已冻 130.6h；价格 / MTF /
                GEX / 跨资产是新鲜的，衍生品盘面仍黑、SM 本子已死约 10.6 天
              </span>
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 最末行 2026-06-17 06:43Z（t = 「06-17 14:43」BJ）</td>
                  <td className="dn-flag">
                    <b>冻结</b> · live_db.json 自 2026-06-17 06:43Z 起没写新行
                    （文件 mtime 06-17 06:43:08Z 印证）；进程状态本次未存档 /
                    未核实 —— 对 17:19Z 快照锚现在已 <b>130.6h 陈旧</b>（06-20
                    备忘是 65.4h、06-19 是 41.4h、06-18 是 17.4h —— 停摆自上篇
                    又跑了约 65h）。funding / OI / CVD / basis / retail /
                    taker-flow 都是 06-17 06:43Z 的 <b>最后已知</b>、不是当前值。
                    SM 子流（long_btc / short_btc / net_btc）冻得更久 —— 自
                    2026-06-12 01:36Z 起恒定（约 255.7h / 约 10.65 天）；SM net
                    与 SM 切口比例本次 <b>不可计算</b>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-22 17:16Z scan</td>
                  <td className="dn-flag">
                    新鲜（锚前约 3 分钟）· 滚动 latest 文件、逐字存档于
                    /opt/desk-note/snapshots/2026-06-22-1719/ · 含未收盘 K 线 ·
                    扫描现货 $64,640、24h +0.73%、24h H/L $65,597 / $63,220、
                    qVol $10.27B
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-22 17:01Z 快照</td>
                  <td className="dn-flag">
                    新鲜（锚前约 18 分钟）· Deribit idx $64,818（比 parquet 现货
                    $64,710 高 $108）· 890 合约（06-20 是 948）· net GEX{' '}
                    <b>−0.6M</b>（净 SHORT γ 但基本 FLAT —— 自 06-20 的 −48.6M、
                    06-19 的 −111.1M 去放大）· flip $64,635（现货自 06-18→06-20
                    破位以来首次在上方）· 主块是 26JUN26 月度 −28.36M、3.6 DTE
                    （自 06-20 的 −49.31M 缓和）；近端 0DTE 23JUN26 0.6 是
                    +4.89M 正
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-22 17:01Z
                  </td>
                  <td className="dn-flag">新鲜 · 7d 1h bar · 22 资产 · 167 rows · regime NORMAL（均值 |r| 0.288，自 06-20 的 0.304 松）</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-21 22:16Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 19.0h · FRED Tier-1 日度系列带 <b>陈旧 4d</b> 标、
                    与 06-20 备忘不变（周日渲染前没有新营业日印落地）：10Y
                    4.49%、TIPS 2.23%（EXTREME RISK-OFF）、HY OAS 2.63%
                    （RISK-ON 偶发）、DXY 100.83（EXTREME RISK-OFF）、Fed 净
                    流动性 $5.849T · MOVE 债波回到 65.4（06-20 抓取失败、06-19
                    是 70.7 —— 已松）· USD/JPY 161.37（日元比 06-20 的 161.28
                    略软）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-06-22 16:05Z（close $64,710）</td>
                  <td className="dn-flag">
                    新鲜 kline（交易所 OHLC，独立于冻结的实时盘面）· 偏移按
                    parquet 最末 bar close 重算 —— 实时盘面冻结期间这是最新可
                    用现货 · 显示阶梯用 2023→ 子集（182 根周 bar），故无
                    W-SMA200 行；200W 地板从全历史 glob 直接重算 —— 355 根周
                    W-MON bar（2019→present）—— = <b>$62,447</b>，比 06-20 钉的
                    $62,440 高约 $7（慢周 SMA，约 $250/wk）· weekly_200sma.json
                    本次缺，但不挡 parquet 重算
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
              <span className="dn-v bear">−7.24%（陈旧 · 06-17 06:43Z · 130.6h）</span>
              <span className="dn-src">live_db raw funding −0.006608 × 1095 = −7.24% ann（非 ×100）· 06-17 06:43Z 冻结处的最后已知、现 130.6h 陈旧、不是当前读 · 冻结前 24h+1m 含端采样窗（1,442 行）的最后可用：均值 +0.20%、区间 −7.24% / +7.21%、819 / 1,442 行为负 —— 盘面死时是一本平衡的双向本子 · 与 06-19 / 06-20 备忘不变：是同一根冻结行</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 对 06-20</span>
              <span className="dn-v">盘面冻结 —— 不可计算</span>
              <span className="dn-src">实时盘面自 06-17 06:43Z 未写，故仍无当前 funding 去对 06-20 备忘作差 · 冻结处最后已知印是 −7.24% ann（空付多）；杠杆门连续第六天不可评估</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−468 BTC（−0.45%）· 陈旧窗</span>
              <span className="dn-src">live_db oi_btc 在 06-17 06:43Z 冻结处 102,945，对 24h+1m 含端采样窗（1,442 行）起点 · 窗 <b>结束于冻结</b>、不是延到 17:19Z 快照 —— 它描述到 06-17 06:43Z 为止的盘面、已 130.6h 过期</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bear">59.47 / 40.53 · 陈旧</span>
              <span className="dn-src">live_db `mkt_long_pct` 在 06-17 06:43Z 冻结处（24h+1m 含端采样窗起点是 58.29% —— 一根 +1.18pt 的加多进 roll-over）· 最后已知、130.6h 陈旧</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">−37.29k · 流死约 255.7h</span>
              <span className="dn-src">long 13.53k − short 50.83k · 这根三元自 2026-06-12 01:36Z 起逐字节恒定（约 255.7h / 约 10.65 天）—— 是 FROZEN 值、不是当前仓位读；只为标记死流而带</span>
            </div>
            <div>
              <span className="dn-k">SM Δ / 切口比例</span>
              <span className="dn-v">不可计算</span>
              <span className="dn-src">SM 流冻约 10.65 天 · |Δ| / prior_net 不可算 —— 没有当前 SM net 去作差 · 挤压周期 / 重堆框架本次失明，是 06-16 / 06-18 / 06-19 / 06-20 ON-HOLD 的延续</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">43.7% / 43.43%</span>
              <span className="dn-src">GEX 横跨 890 合约的 IV 中位数（17:01Z，新鲜）对 30D close-to-close RV 43.43%（自 parquet）—— 链 richness 仅约 +0.27pt、基本无溢价；RV 仍高（06-20 是 43.04%、05-31 是 24.91%）—— vol 几乎精确按已实现定价</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+0.12%（在上方）</span>
              <span className="dn-src">flip $64,635（前 $64,396 · 升 +$239）· 对 parquet 现货 $64,710（64,710 / 64,635 − 1 = +0.117%）/ GEX 文件 Deribit idx $64,818（64,818 / 64,635 − 1 = +0.283%、文件读 +0.3%）—— 两参考都自 06-18→06-20 破位以来首次在 flip 上方、tile 把现货侧取 +0.12% · net GEX −0.6M（净 SHORT γ 但基本平）· 26JUN26 月度 −28.36M 是唯一集中块、3.6 DTE</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                未收盘的周线 bar 远在地板上方、dealer 本子去放大到平、现货
                重夺了 0-γ flip 与第一根日 MA —— 但周收盘测试要到 22JUN 最终
                收盘才定、整件事还是隔着一根死盘面在读，连续第六天
              </span>
              。06-20 备忘标为活周线测试的那条 $62,447 周期地板（全历史
              W-SMA200、自 06-20 钉位爬了约 $7）正在被测：22JUN 周线 bar 仍
              未收，报{' '}
              <span className="dn-tag bull">$64,710（parquet 最末 bar 16:05Z）、
              在地板上方 +3.62%</span> —— 上篇的升级条件（周收盘 &lt; $62,440）
              在未收盘读上 <em>没</em> 触发，但周收盘测试要到 22JUN 最终收盘
              才决，所以 06-15 的 200W 重夺论在那根收盘前是临时成立。现货一
              口气推穿两条结构线：它坐在{' '}
              <span className="dn-tag bull">0-γ flip $64,635 上方 +0.12%</span>
              （GEX 文件自己的 Deribit-index 读是 +0.28% —— 两参考都在上方、自
              06-18→06-20 破位以来首根上 flip 的快照）、并{' '}
              <span className="dn-tag bull">在 D-SMA20 $63,588 上方 +1.77%</span>，
              是自 06-18→06-20 破位以来第一根正的日 MA 偏移。dealer 本子整步
              退场：aggregate GEX 走{' '}
              <span className="dn-tag bull">−48.6M → −0.6M</span>（基本平的净
              γ、自两篇前的 −111.1M），近端负值不断 unwind；26JUN26 月度放大器
              缓和{' '}
              <span className="dn-tag bull">−49.31M → −28.36M</span>（3.6 DTE）——
              仍是唯一集中块、但只剩进 06-20 那一半的权重。MTF 仍读{' '}
              <span className="dn-tag bear">高 TF 偏空 · 短线反弹（3 bull / 5 bear
              / 2 neutral）</span>、伴一根{' '}
              <span className="dn-tag bull">8h 水下金叉刚印</span>、短周期重回
              云上，但 regime 仍标{' '}
              <span className="dn-tag bear">5/9 动量 / 趋势延续，把反弹读成卖出
              反弹</span>、1w 也刚印一根水下死叉。{' '}
              <span className="dn-em">
                当日的运行事实没变、仍约束全局：OKX 监控现已冻 130.6h（最末行
                2026-06-17 06:43Z），故 funding、OI、CVD、basis、retail 都是最后
                已知且陈旧，SM 仓位本子已死约 10.65 天 —— SM net 与切口比例不可
                计算。本台看不见 flip 重夺是空头回补还是假日薄盘漂上来的。重夺
                的读法只建在价格与 γ 上。
              </span>{' '}
              信心保持封顶：交易本子是平的，回补反弹 scout 的价格前置条件终于
              印出（flip + D-SMA20 重夺），但仍卡在失明盘面与卖出反弹 regime
              上；唯一的活决策是重夺会不会延伸到 D-EMA20 $65,386 / W-EMA200
              $67,590 —— 本台在死盘面上仍无法 scout —— 还是 26JUN 月度在 opex
              前把一次回落拖回 flip，在实时盘面恢复前都只凭价格与 γ 判。
            </p>

            <p>
              BTC 在 parquet 最末 bar（16:05Z）报 <span className="dn-tag">$64,710</span>、
              24h <span className="dn-tag bull">+0.86%</span>（对一日前的 $64,158；
              MTF 扫描在自己的 17:16Z 窗读 +0.73% —— 差是参考窗不同、不是数据
              冲突），在一条{' '}
              <span className="dn-tag">$65,548 / $63,267</span> 的 parquet 24h 收盘
              区间内（收盘高 @ 2026-06-22 13:59Z、收盘低 @ 2026-06-21 23:54Z；真正
              的 OHLC 24h 高/低是 MTF 扫描的 $65,597 / $63,220、在 14:00Z /
              23:47Z）。Deribit index 在 17:01Z 读 $64,818、MTF 扫描现货是
              $64,640 —— 故最新现货在三个独立新鲜源间交叉印证良好（parquet
              kline $64,710、GEX Deribit index $64,818、MTF 扫描 $64,640），尽管
              平常供它的 live_db 盘面冻在 $65,616（06-17 06:43Z、130.6h 陈旧）。{' '}
              <span className="dn-signal">结构读法从地板守住、走到地板守住加
              重夺</span>：06-15 周收盘 $66,286 完成了 200W 重夺，三根红日收
              （06-16 $65,645、06-17 $64,473、06-18 $62,924）把突破交回到地板上，
              此后盘面印出四根已定的日收加上 06-22 未收盘 bar 在其上 —— 06-18
              $62,924、06-19 $63,513、06-20 $64,270、06-21 $63,287 已定、06-22 未
              收盘 $64,710 —— 未收盘的 22JUN 周线 bar（当前 $64,710、周一 06-22
              收盘结）在重算的 $62,447 地板上方 +3.62%。{' '}
              <span className="dn-em">
                这是在上篇等的那根周线结算的未收盘读上守着的周期地板 —— 测试
                是开着的、尚未定 —— 处在一本已去放大到平的 dealer 本子里、一个
                刚重夺 0-γ flip 与 D-SMA20 的价格里。重夺会不会撑进更深的头顶
                墙、还是会落进 26JUN 月度，取决于本台当前看不见的流向。
              </span>
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面冻 130.6h（第六天）· SM 本子死约 10.65 天 · funding/OI/flow 最后已知陈旧 · 本台看不见 flip 重夺反弹是怎么被消化的</span>
            </h2>

            <p>
              <span className="dn-signal">
                这篇备忘最重要的单一来源 —— 实时衍生品盘面 —— 仍然趴着，连续
                第六天
              </span>
              。OKX 监控自{' '}
              <span className="dn-tag bear">2026-06-17 06:43Z</span> 起没向
              live_db.json 追加任何行（t = 「06-17 14:43」BJ；文件 mtime
              06-17 06:43:08Z 印证写入停在那；进程状态本次未存档或核实、故本篇
              断言的是缺失的盘面、不是一个活/挂的进程）。对 17:19Z 快照锚那
              是现在{' '}
              <span className="dn-tag bear">130.6h 的缺失盘面</span> —— 06-18 备忘
              标 17.4h、06-19 标 41.4h、06-20 标 65.4h，停摆又跑了约 65h 没写。
              实时盘面承载的一切 —— funding、未平仓、现货/期货 CVD、perp basis、
              retail 多%、taker-net、大单流、aggressor skew —— 因此都是{' '}
              <span className="dn-em">06-17 06:43Z 的最后已知、不是当前值</span>。
              smart-money 仓位三元（long_btc / short_btc / net_btc）已逐字节恒定
              ——{' '}
              <span className="dn-tag">13,532.4 / 50,825.7 / −37,293.3</span> ——
              自{' '}
              <span className="dn-tag bear">2026-06-12 01:36Z</span> 起，约 255.7h
              （约 10.65 天）。06-16 备忘在约 94.5h 标了这根死流、把挤压周期
              ON HOLD；06-18 备忘带它到约 142h、06-19 到约 166.5h、06-20 到约
              190.5h；今天约 255.7h、仍死。{' '}
              <span className="dn-em">
                SM net 作为当前读不可计算，SM 切口比例（|Δ| / prior_net）也成不
                了 —— 没有当前 SM net 去作差。本篇任何仓位主张都明确是历史的、
                不是实时的。
              </span>
            </p>

            <p>
              为完整起见，<em>最后可用</em>的盘面读数 —— 都钉在 06-17 06:43Z
              冻结处、现 130.6h 过期，且与 06-19 / 06-20 备忘逐字节相同（因为
              是同一根冻结行）—— 是：funding{' '}
              <span className="dn-tag bear">−7.24% ann</span>（raw −0.006608 ×
              1095；冻结处空付多），最后可用路径在 24h+1m 含端采样窗（1,442
              行）上是平衡双向的（均值 <span className="dn-tag">+0.20% ann</span>、
              区间 <span className="dn-tag">−7.24% / +7.21%</span>、819 / 1,442 行
              为负）；OI <span className="dn-tag bear">102,945 BTC、过去 24h+1m
              窗 −468（−0.45%）</span>；retail{' '}
              <span className="dn-tag">mkt_long_pct 59.47%</span>（同窗 +1.18pt
              加多）；perp basis 对现货{' '}
              <span className="dn-tag bear">−$57.43 折价</span>（窗均 −$58.62、
              区间 −$146.17 / +$67.04）。{' '}
              <span className="dn-em">
                把这读成一枚近六天旧的指纹、不是信号：一本双向 funding、OI 在
                泄、retail 在第一段弱势里加多。没一条能延到 17:19Z 快照 —— 关键
                是它早于整段 06-18 → 06-22 的地板守住与重夺序列，所以它对仓位
                如何消化地板防守或 flip 重夺什么都没说。本台把仓位维度当未知、
                把 flip 重夺反弹当仓位未确认。
              </span>
            </p>

            <h2 className="dn-sec">
              结构 <span className="dn-roman">II · 价格/MTF 新鲜 · 高 TF 偏空 · 短线反弹（3 bull / 5 bear / 2 neutral）· regime 5/9 动量（卖反弹）· 8h 水下金叉刚印 · 现货重夺 D-SMA20（+1.77%）与 0-γ flip、200W 地板 $62,447 在未收盘周线 bar 下方（+3.62%、周收盘测试开着）</span>
            </h2>

            <p>
              <span className="dn-signal">
                MTF 图新鲜、仍读高 TF 偏空，但反弹把短周期托上云、印出引擎的
                8h 金叉
              </span>{' '}
              —— 连同 dealer 图，这是本台今天还能信的一维。17:16Z 扫描标{' '}
              <span className="dn-tag bear">10 个框里 3 bull / 5 bear / 2
              neutral</span>，净读 <em>高 TF 偏空 · 短线反弹</em> —— 比 06-20 扫描
              的 1 bull / 6 bear / 3 neutral 再软，但仍在一个标着{' '}
              <span className="dn-tag bear">5/9 动量（JT≥0、趋势延续占优）</span>
              的 regime 里 —— 即 regime 仍把反弹读成逆势卖出反弹、不是确认的
              反转。短周期是建设性的：15m / 30m / 1h 全在云上，{' '}
              <span className="dn-tag bull">1h 水上金叉 12b</span> RSI 54.4，引擎刚
              印一根{' '}
              <span className="dn-tag bull">8h 水下金叉（1 bar 前）</span>，加入一根
              1d 水下金叉 9b 与一根 4h 水下金叉 15b。中周期托进云内而非云下 ——
              4h / 8h / 12h 现都 <em>在云内</em>（比 06-19/06-20 的云下堆叠上一
              台阶）—— 但长周期仍偏空：1d / 3d / 1w 全在云下，且{' '}
              <span className="dn-tag bear">1w 印一根水下死叉（刚刚）</span> RSI
              37.3。反转背离：顶背离 15m / 1h，底背离 30m / 1w。{' '}
              <span className="dn-em">
                直读：反弹把短、中周期从云下推到云上/云内、印出 8h 引擎金叉 ——
                一根真的抬升 —— 但它没碰偏空的长结构（1d/3d/1w 仍云下、新鲜 1w
                死叉），regime 仍读趋势延续。一根短周期反弹冲进卖出反弹 regime
                下的偏空长堆里，正是「卖反弹」的设置；8h 金叉是最强的建设性票、
                1w 死叉是最强的警告。1M 是唯一干净的多框；1w 是警框。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">64,670</td><td className="num">47.4</td><td className="neut">死叉（水上）10b</td><td className="bull">云上 ↓64.1k 25b</td><td>Sell 1</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>30m</td><td className="num">64,666</td><td className="num">52.3</td><td className="neut">死叉（水上）1b</td><td className="bull">云上 ↓64.0k 15b</td><td>Buy 4</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">64,653</td><td className="num bull">54.4</td><td className="bull">金叉（水上）12b</td><td className="bull">云上 ↓64.0k 10b</td><td>Buy 2</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>4h</td><td className="num">64,664</td><td className="num bull">56.6</td><td className="bull">金叉（水下）15b</td><td className="neut">云内 64.0k–65.2k 3b</td><td>Sell 3</td><td>—</td></tr>
                <tr><td>8h</td><td className="num">64,652</td><td className="num">53.2</td><td className="bull">金叉（水下）刚印 1b</td><td className="neut">云内 62.7k–66.8k 9b</td><td>Sell 2</td><td>BULL hid</td></tr>
                <tr><td>12h</td><td className="num">64,653</td><td className="num">50.7</td><td className="neut">—</td><td className="neut">云内 64.2k–70.4k 刚穿</td><td>Sell 2</td><td>BULL hid</td></tr>
                <tr><td>1d</td><td className="num">64,644</td><td className="num bear">43.5</td><td className="bull">金叉（水下）9b</td><td className="bear">云下 ↑75.3k 21b</td><td>Sell 1</td><td>BEAR hid</td></tr>
                <tr><td>3d</td><td className="num">64,640</td><td className="num bear">40.0</td><td className="bear">死叉（水上）9b</td><td className="bear">云下 ↑73.4k 7b</td><td>Sell 4</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">64,640</td><td className="num bear">37.3</td><td className="bear">死叉（水下）刚印</td><td className="bear">云下 ↑100.3k 21b</td><td>Buy 6</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">64,640</td><td className="num bear">43.2</td><td className="neut">—</td><td className="bull">云上 ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 17:16Z scan（滚动 latest 文件；
                    逐字存档于 /opt/desk-note/snapshots/2026-06-22-1719/）。净读{' '}
                    <em>高 TF 偏空 · 短线反弹（3 bull / 5 bear / 2 neutral）</em>；
                    regime <em>5/9 动量（JT≥0、趋势延续占优）</em>；反转背离{' '}
                    <em>顶背离 15m / 1h、底背离 30m / 1w</em>。头部告警：{' '}
                    <em>1w 水下死叉（刚印）</em>、<em>8h 水下金叉（1 bar 前）</em>、
                    <em>30m 水上死叉（1 bar 前）</em>、<em>1M TD8 Buy —— 再一根
                    收盘</em>。扫描现货 $64,640、24h +0.73%、24h H/L $65,597 /
                    $63,220、qVol $10.27B。收盘为未收盘 K 线；每个值在各周期收盘前
                    都按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵是和 06-20 一样的深头顶墙，但地板现在远在下方、现货上穿了
              第一根日线与 flip。$64,710 坐在{' '}
              <span className="dn-tag bull">D-SMA20 $63,588 上方 +1.77%</span> ——
              日线阶梯上唯一的正偏移、也是自 06-18→06-20 破位以来盘面重夺的第
              一根日 MA —— 并{' '}
              <span className="dn-tag bull">在全历史 W-SMA200 200W 地板 $62,447
              上方 +3.62%</span>。下一条头顶线是{' '}
              <span className="dn-tag bear">D-EMA20 $65,386（−1.03%）</span> ——
              在 1% 以内、是会确认持续转向的重夺线 —— 其后是周期代理{' '}
              <span className="dn-tag bear">W-EMA200 $67,590（−4.26%）</span> 与{' '}
              <span className="dn-tag bear">D-EMA50 $69,080（−6.33%）</span>。中段
              阶梯是一道深墙：{' '}
              <span className="dn-tag bear">W-SMA20 $71,541（−9.55%）</span>、{' '}
              <span className="dn-tag bear">D-SMA50 $71,845（−9.93%）</span>、{' '}
              <span className="dn-tag bear">D-SMA150 $72,061（−10.20%）</span>、{' '}
              <span className="dn-tag bear">D-EMA100 $72,095（−10.24%）</span>、{' '}
              <span className="dn-tag bear">D-SMA100 $72,234（−10.42%）</span>、{' '}
              <span className="dn-tag bear">W-EMA150 $74,223（−12.82%）</span>、{' '}
              <span className="dn-tag bear">W-EMA20 $74,587（−13.24%）</span>、{' '}
              <span className="dn-tag bear">D-EMA150 $74,960（−13.67%）</span>、{' '}
              <span className="dn-tag bear">W-SMA150 $75,458（−14.24%）</span>、{' '}
              <span className="dn-tag bear">D-SMA200 $76,590（−15.51%）</span>、{' '}
              <span className="dn-tag bear">D-EMA200 $77,686（−16.70%）</span>。更
              高更远、已弃用：W-EMA100 $80,983（−20.09%）、W-EMA50 $82,689
              （−21.74%）、W-SMA100 $88,534（−26.91%）、W-SMA50 $91,003
              （−28.89%）。结构性近线集合终于在建设性一侧拓宽：200W 地板
              $62,447（+3.62%）与 D-SMA20 $63,588（+1.77%）在现货下方、0-γ flip
              $64,635 刚重夺、D-EMA20 $65,386 仅 −1.03% 头顶 —— 一道{' '}
              <span className="dn-tag">~$2.9k</span> 的带、夹在地板和第一条头顶线
              之间（$65,386 − $62,447 = $2,939），现货现在坐在带内、在地板和
              D-SMA20 上方。{' '}
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-06-22 16:05Z（close $64,710.40）；
                偏移按同一根 close 算 —— 实时盘面冻结期间这是最新可用现货。显示
                MA 水位按 $ 取整、偏移用精确序列值算。显示阶梯用 2023→ 子集
                （182 根周 bar），故 W-SMA200 不是矩阵行；但 200W 地板从全历史
                glob 可算 —— 355 根周 W-MON bar（2019→present）给 W-SMA200
                $62,447。那比 06-20 钉的 $62,440 高约 $7：地板是一根慢周 SMA
                （约 $250/wk），随更老的低 bar 滚出 200 周窗而上爬，故重算是
                诚实的重钉、不是冲突。百分位与上次事件仍无源（weekly_200sma.json
                缺）、未捏造。日收：06-15 $66,286、06-16 $65,645、06-17 $64,473、
                06-18 $62,924、06-19 $63,513、06-20 $64,270、06-21 $63,287、06-22
                （未收盘）$64,710 —— 06-15 高点、三根红收回到地板、然后四根已定
                收加上 06-22 未收盘 bar 在其上；周收 06-08 $63,058、06-15
                $66,286、06-22（未收盘）$64,710。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子去放大到 FLAT net GEX −0.6M（前 −48.6M）· 现货 +0.12% 在 flip $64,635 上方（自 06-18→06-20 破位以来首次）· 26JUN26 月度缓和到 −28.36M（3.6 DTE）、仍是唯一放大器 · 最重 put 墙仍在 $60k · IV 43.7% ≈ RV 43.43%</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子现在基本是平的净 γ、现货已穿到 flip 上方 —— 推动下腿
                的空 γ 已 unwind 到残余，只集中在那一根 26JUN 月度
              </span>
              。aggregate GEX 是 <span className="dn-tag bull">−0.6M / 1%</span>
              （06-20 是 −48.6M、06-19 是 −111.1M —— 空 γ 去放大成一个取整残余），
              0-γ flip 是 <span className="dn-tag">$64,635</span>（自 $64,396 升
              +$239），现货在{' '}
              <span className="dn-tag bull">上方 +0.12%</span> 按现货口径
              （64,710 / 64,635 − 1 = +0.117%）；GEX 文件自己的「dist to flip」
              按它的 Deribit-index $64,818 读{' '}
              <span className="dn-tag bull">+0.28%</span>（64,818 / 64,635 − 1 =
              +0.283%、文件取 +0.3%）——{' '}
              <span className="dn-em">两参考都在 flip 上方</span>、自 06-18→06-20
              破位以来首根上 flip 的快照，本子不再从现货放大。墙图仍把权重压在
              下行，但重负值坐在现货下方：{' '}
              <span className="dn-tag bear">$60k −20.37M</span>（仍是最重墙、Put OI
              19,212、整整在现货下方 $4.7k）、{' '}
              <span className="dn-tag bear">$64k −15.35M</span>（近头顶墙、刚在 flip
              下、Put OI 5,144）、{' '}
              <span className="dn-tag bull">$67k +13.61M</span>（最重正、Call OI
              4,509）、{' '}
              <span className="dn-tag bear">$62k −13.33M</span>（正好在 $62,447 地板、
              Put OI 6,849）、{' '}
              <span className="dn-tag bull">$80k +10.50M</span>（Call OI 24,512）、{' '}
              <span className="dn-tag bull">$70k +8.76M</span>、{' '}
              <span className="dn-tag bear">$63k −6.77M</span>、{' '}
              <span className="dn-tag bull">$66k +6.63M</span>、{' '}
              <span className="dn-tag bull">$65.5k +6.27M</span>、{' '}
              <span className="dn-tag bear">$55k −5.94M</span> 下方崩盘 put 残余。{' '}
              <span className="dn-em">
                图在现货周边翻成建设性：刚头顶的 $65.5k / $66k / $67k strike 全
                是正（+6.27M / +6.63M / +13.61M），故 dealer 在即时上行是 long γ、
                而 $64k −15.35M 是钉住 flip 的那一根负墙。重负 γ 被压下到
                $60k–$64k —— 现货已离开的水位 —— 所以即时头顶本子是阻尼继续
                走高、而不是放大一次回落。集中的下行风险是 26JUN 月度 3.6 DTE、
                不是现货在交易的水位。
              </span>
            </p>

            <p>
              expiry 条带确认去放大。单一主块是{' '}
              <span className="dn-tag bear">26JUN26 月度 −28.36M（3.6 DTE、Call OI
              89,266 / Put OI 73,912）</span> —— 自 06-20 备忘带的 −49.31M 缓和、
              大致砍半，但仍是唯一集中放大器；其余条带小且净正。近端日历前载正：{' '}
              <span className="dn-tag bull">23JUN26 0.6 +4.89M</span>（近 0DTE）、{' '}
              <span className="dn-tag bull">24JUN26 1.6 +0.48M</span>、{' '}
              <span className="dn-tag bull">25JUN26 2.6 +1.17M</span>，然后是 26JUN
              月度，再然后{' '}
              <span className="dn-tag bull">3JUL26 10.6 +1.86M</span>、{' '}
              <span className="dn-tag bull">10JUL26 17.6 +0.65M</span>。正偏移在远端
              且大：{' '}
              <span className="dn-tag bull">31JUL26 38.6 +18.68M</span>、{' '}
              <span className="dn-tag bull">25DEC26 185.6 +3.94M</span>、{' '}
              <span className="dn-tag bull">28AUG26 66.6 +3.38M</span>、{' '}
              <span className="dn-tag bull">25SEP26 94.6 +1.94M</span>、{' '}
              <span className="dn-tag bull">26MAR27 276.6 +0.92M</span>。列出的条带
              净到约 +9.6M、对 −0.6M 的 headline aggregate；约 +10.2M 的缺口是口径
              之差、不是缺失到期的余项 —— headline 是在最近现货/当前-IV 网格点读
              的曲面网格 GEX，而按到期条带是按 expiry 分组的精确现货剖面，故两者
              除非在同一口径重算否则不代数相等。无论哪种，{' '}
              <span className="dn-em">
                近端日历 23–25JUN 是正的、26JUN 月度是唯一集中负块且已砍半、也没
                有一根近端负放大器像一周前 19JUN 那样喂本子 —— 下腿的近端放大器已
                完全 unwind、残余 aggregate 是平的。
              </span>{' '}
              横跨 890 合约的 IV 中位数是{' '}
              <span className="dn-tag">43.7%</span>，对 30D close-to-close RV{' '}
              <span className="dn-tag">43.43%</span> —— 链 richness 仅{' '}
              <span className="dn-tag">~+0.27pt</span>、基本零溢价；是 N 合约的链
              中位数、<span className="dn-em">不是</span>可交易价差、expiry- /
              strike-level vega、skew、期限结构未载入 —— vol 读法保持 framework
              only。RV 方法：30D close-to-close、logret.std × √365 × 100、用最末
              30 根日 log return（= 连续 31 根日 close）、锚自 parquet 最末 bar
              2026-06-22 16:05Z；29-return 读 44.05%，底层 31-close 窗区间
              $60,850 – $77,282。RV 对 06-20 的 43.04% 基本平、仍远高于 05-31 的
              24.91% —— vol 几乎精确按已实现定价、43.7% 的 IV 中位数没有有意义的
              溢价。
            </p>

            <h2 className="dn-sec">
              宏观 <span className="dn-roman">IV · Tier-1 陈旧 4d、与 06-20 不变（周日渲染前无新营业日 FRED 印）—— 10Y 4.49%、TIPS 2.23% EXTREME RISK-OFF、HY OAS 2.63% RISK-ON、DXY 100.83 EXTREME RISK-OFF · MOVE 回到 65.4（自 70.7 松）· USD/JPY 161.37 · BTC 再耦合到一个正在转软的 TradFi 复合体、对 NQ 落后 −2.36pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观面板渲染约 19h 旧、Tier-1 FRED 日度系列带陈旧-4d 标 —— 与
                06-20 备忘不变、周日渲染前没有新营业日印落地
              </span>
              。面板渲染 2026-06-21 22:16Z、比快照早约 19.0h，每一根 Tier-1 日度
              水位都与 06-20 读一致，故宏观盘面是被结转、不是重动。US 10Y
              nominal <span className="dn-tag bear">4.49%（+6.0bp）</span>、regime
              z <span className="dn-tag bear">+1.63</span> —— 紧 regime、RISK-OFF。
              10Y TIPS real <span className="dn-tag bear">2.23%（+9.0bp）</span>、
              regime z <span className="dn-tag bear">+2.68</span> —— EXTREME
              RISK-OFF、面板上最紧的一行。5Y5Y BE 通胀{' '}
              <span className="dn-tag">2.23%（+2.0bp）</span>、10Y breakeven{' '}
              <span className="dn-tag bull">2.25%（−1.0bp）</span> —— 通胀预期平。
              HY OAS <span className="dn-tag bull">2.63%（−8.0bp）</span>、regime z{' '}
              <span className="dn-tag bull">−1.78</span> —— 信用松、一根 RISK-ON
              偶发、面板上唯一在松的一行。MOVE 债波{' '}
              <span className="dn-tag bull">65.4（−5.27）</span> —— 在 06-20 抓取
              失败后回到面板（06-19 是 70.7）、一根松偶发、已松。美元仍硬：DXY{' '}
              <span className="dn-tag bear">100.83（−0.02 当日）</span>、regime z{' '}
              <span className="dn-tag bear">+2.45</span> —— EXTREME RISK-OFF、在
              100 上。Fed 净流动性{' '}
              <span className="dn-tag bear">$5.849T（−0.038T）</span>、regime z{' '}
              <span className="dn-tag">+0.05</span>（一个平的常态水位）但偶发 z{' '}
              <span className="dn-tag bear">−2.42</span> —— |偶发 z| &gt; 1.5 的
              当日变化意外、面板标了。USD/JPY{' '}
              <span className="dn-tag bear">161.37（+0.08 当日）</span>、regime z
              +1.50、偶发 +1.85（日元比 06-20 备忘的 161.28 略软）；US-JP 10Y
              利差 <span className="dn-tag bear">1.84%（+6.0bp）</span>；USD/CNY{' '}
              <span className="dn-tag">6.7647</span>；WTI{' '}
              <span className="dn-tag">$84.7（陈旧 6d）</span>。{' '}
              <span className="dn-em">
                净：宏观背景和 06-20 是同一道逆风 —— 实际利率和美元在 EXTREME
                RISK-OFF、Fed 流动性抽干、信用是唯一抵消、债波已松 —— 读成被
                结转、不是重新确认，因为 Tier-1 日度系列陈旧-4d。再生长门：HY OAS
                门 2.78% 还差 15bp（在 2.63%、信用松），10Y 门 4.53% 只差 4bp 触发
                （在 4.49%）。重夺-多的利率筛（10Y &lt; 4.55%）在 4.49% 仍 TRUE。
                美元 / 实际利率的走硬仍是一道真实的宏观逆风、叠在内生读法上，尽管
                信用和门都还没翻倒尾部论。
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
                <tr><td>US 10Y nominal</td><td className="num">4.49%</td><td className="num bear">+6.0bp</td><td className="num bear">+1.63</td><td className="bear">紧 · RISK-OFF · 陈旧 4d</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.23%</td><td className="num bear">+9.0bp</td><td className="num bear">+2.68</td><td className="bear">最紧行 · EXTREME RISK-OFF · 陈旧 4d</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.23%</td><td className="num">+2.0bp</td><td className="num">−0.03</td><td className="neut">平</td></tr>
                <tr><td>10Y breakeven</td><td className="num">2.25%</td><td className="num bull">−1.0bp</td><td className="num">−1.37</td><td className="neut">平 / 软</td></tr>
                <tr><td>HY OAS</td><td className="num">2.63%</td><td className="num bull">−8.0bp</td><td className="num bull">−1.78</td><td className="bull">松 · risk-on 偶发 · 陈旧 4d</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.505</td><td className="num">0.00</td><td className="num">+0.24</td><td className="stale">周度 · 陈旧 9d</td></tr>
                <tr><td>MOVE 债波</td><td className="num">65.4</td><td className="num bull">−5.27</td><td className="num bull">−0.95</td><td className="bull">松偶发 · 回来（曾抓取失败）</td></tr>
                <tr><td>DXY</td><td className="num">100.83</td><td className="num bull">−0.02</td><td className="num bear">+2.45</td><td className="bear">EXTREME RISK-OFF · 在 100 上</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.849T</td><td className="num bear">−0.038T</td><td className="num">+0.05</td><td className="bear">本周抽干</td></tr>
                <tr><td>USD/JPY</td><td className="num">161.37</td><td className="num bear">+0.08</td><td className="num bear">+1.50</td><td className="bear">日元比 06-20 略软（161.28）</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">1.84%</td><td className="num bear">+6.0bp</td><td className="num bull">−1.03</td><td className="bear">RISK-OFF · 陈旧 4d</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7647</td><td className="num">−0.00</td><td className="num bull">−1.67</td><td className="neut">松</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">+13.5bp（月度）</td><td className="num bear">+2.56</td><td className="stale">月度 · 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、汇总 17:01Z ——{' '}
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。非对角线
              均值 <span className="dn-tag">|r| 0.288</span> —— 自 06-20 的 0.304
              松、但仍在 NORMAL 带，且{' '}
              <span className="dn-signal">BTC 仍耦合在 TradFi 风险复合体上</span>。
              BTC 的头部对齐仍是股票 / 贵金属簇：SP500{' '}
              <span className="dn-tag">+0.553</span>、NQ{' '}
              <span className="dn-tag">+0.500</span>、NVDA{' '}
              <span className="dn-tag">+0.459</span>、URNM{' '}
              <span className="dn-tag">+0.444</span>、GOLD{' '}
              <span className="dn-tag">+0.417</span>、SILVER{' '}
              <span className="dn-tag">+0.408</span>、COPPER{' '}
              <span className="dn-tag">+0.384</span>、MSFT{' '}
              <span className="dn-tag">+0.346</span>，能源复合体反向（CL{' '}
              <span className="dn-tag">−0.213</span>、BRENT{' '}
              <span className="dn-tag">−0.201</span>、NGAS{' '}
              <span className="dn-tag">−0.342</span>）、JPY{' '}
              <span className="dn-tag">−0.215</span>。7d 表现是整个风险复合体偏软、
              BTC 是落后者：{' '}
              <span className="dn-tag bear">BTC −3.18%</span>、NQ{' '}
              <span className="dn-tag bear">−0.82%</span>、SP500{' '}
              <span className="dn-tag bear">−1.13%</span>、JP225{' '}
              <span className="dn-tag bull">+4.73%</span>、NVDA{' '}
              <span className="dn-tag bear">−1.18%</span>、META{' '}
              <span className="dn-tag bear">−5.54%</span>、MSFT{' '}
              <span className="dn-tag bear">−7.62%</span>、GOOGL{' '}
              <span className="dn-tag bear">−6.75%</span>、AMZN{' '}
              <span className="dn-tag bear">−5.25%</span>、TSLA{' '}
              <span className="dn-tag bear">−0.71%</span>；金属软（GOLD{' '}
              <span className="dn-tag bear">−3.06%</span>、SILVER{' '}
              <span className="dn-tag bear">−6.47%</span>、PLAT{' '}
              <span className="dn-tag bear">−5.88%</span>）；能源崩（CL{' '}
              <span className="dn-tag bear">−7.03%</span>、BRENT{' '}
              <span className="dn-tag bear">−5.89%</span>、NGAS{' '}
              <span className="dn-tag bull">+4.83%</span>）。{' '}
              <span className="dn-em">
                BTC 的 7d 回报 −3.18% 对 NQ −0.82% 是一道 −2.36pt 的落后（对
                06-20 的 −2.73pt）—— 但性质变了：06-20 缺口收窄是因为 BTC 停跌而
                NQ 涨；这一窗缺口收窄是因为整个风险复合体翻倒（NQ −0.82%、SP500
                −1.13%、大盘科技 −5% 到 −8%、金属与能源下行），同时 BTC 的地板
                守住压平了自己的下跌。内生于 crypto 的读法对下腿结构仍成立
                （dealer γ / 重夺交回 / 地板测试，现随本子去放大到平而缓解），但
                美元和实际利率的走硬、加上现在一道转软的股票盘面，仍是叠在上面
                的真实宏观逆风。
              </span>{' '}
              JGB 月度 2.65% 带一个 EXTREME RISK-OFF 月度标 —— 不依赖它。
            </p>

            <h2 className="dn-sec">
              交易本子 <span className="dn-roman">V · 本子 FLAT · 200W 地板在未收盘周线 bar 下方（现货 +3.62%、周收盘测试 OPEN）· scout 价格前置条件已印（flip + D-SMA20 重夺）但仍卡在失明盘面 + 卖反弹 regime · 宏观尾门未触（10Y 4bp 之遥）· 挤压周期 ON HOLD（SM 死约 10.65 天）</span>
            </h2>

            <p>
              <span className="dn-signal">
                本子是平的、继续平 —— 未收盘周线 bar 远在地板上方、dealer 本子
                去放大到平，但周收盘测试仍开着、约束的限制仍是数据完整性，重夺
                是仓位未确认的
              </span>
              。06-20 scout 是双重受阻；今天价格前置条件终于印出 —— 现货重夺
              0-γ flip $64,635 与 D-SMA20 $63,588，未收盘的 22JUN 周线 bar 在地板
              上方 +3.62%，dealer 本子是平的净 γ，8h 引擎金叉印出。其中每一条都
              建设性。但 scout 仍不能上：净 MTF 读仍是高 TF 偏空、regime 仍把
              反弹读成卖出反弹，价格仍在 D-EMA20 下且在它之上的每条线下，并 ——
              决定性地 —— 仓位腿（SM 空头泄、funding 姿态、回补流确认）都要一根
              活盘面，而连续第六天没有。一根 scout 多在仓位失明的盘面上、在一次
              本台无法确认是回补驱动的 flip 重夺上、在一个卖反弹 regime 下，不是
              一笔交易。也不新开空：dealer 本子刚转平、近端 0DTE 是正、重负 γ 被
              压到现货下方的 $60k–$64k，在盘面失明时凭陈旧流去空一次地板守住与
              重夺是糟糕的入场。今天交易本子是：无空、无 scout、无新对冲 —— 修好
              盘面 AND 看见重夺延伸（D-EMA20 然后 W-EMA200）或回落（回到 flip 下、
              进 26JUN 月度）再重新武装。
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">framework · 主仓 · 200W 周期地板观察 —— 未收盘周线 bar +3.62% 在地板上方、周收盘测试 OPEN：现货 $64,710 现在地板 $62,447 上方 +3.62%，06-20 备忘在等的 22JUN 周收盘周一收盘结、临时远在地板上方，四根已定日收加上 06-22 未收盘 bar 在其上</span>
              <div className="dn-trade-name">
                200W 周期地板观察 —— 06-20 备忘标的周收盘测试 OPEN、未收盘 bar 在上方；地板 $62,447 = 全历史 W-SMA200（355 根周 bar、比 06-20 钉位高约 $7），22JUN 周线 bar 未收盘 $64,710（+3.62%），四根已定日收加上 06-22 未收盘 bar 在上方
              </div>
              <div className="dn-thesis">
                06-20 备忘把地板带成一根两收盘守住、以周线结算（22JUN）为定夺
                事件、升级条件设在周收盘 &lt; $62,440。那根周收盘仍是未收盘的
                22JUN bar、在 $64,710、重算 $62,447 地板上方 +3.62% —— 升级在
                未收盘读上 <em>没</em> 触发，但周收盘测试要到 22JUN 最终收盘才决，
                所以 06-15 的 200W 重夺论在那根收盘前临时成立。四根已定日收加上
                06-22 未收盘 bar 坐在其上（06-18 $62,924、06-19 $63,513、06-20
                $64,270、06-21 $63,287 已定、06-22 未收盘 $64,710），近期低点停止
                插针地板（06-21 24h 收盘低 $63,267 远在其上），dealer 图整步退场
                —— aggregate γ 平在 −0.6M、最重负 γ 被压到 $60k。<span className="dn-em">这
                是地板在未收盘周线 bar 上方守住、不是破</span> —— 上篇标的测试
                仍开着、尚未定，本台仍无法确认那道能区分被防守的地板和薄盘漂的
                流向，因为实时盘面趴着。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W 地板</span><span className="dn-lvl-v">$62,447 = 全历史 W-SMA200，本次自 2019→ parquet glob 重算（355 根周 W-MON bar）；比 06-20 钉的 $62,440 高约 $7（慢周 SMA 上爬）· weekly_200sma.json 缺、故百分位/上次事件仍无源、未捏造</span></div>
                <div><span className="dn-lvl-k">现货对地板</span><span className="dn-lvl-v bull">$64,710 在未收盘读上 +3.62%（06-20 是 +1.67%）· 22JUN 周线 bar 未收盘 $64,710 临时远在上方、周收盘尚未结；近期低点停止测试地板</span></div>
                <div><span className="dn-lvl-k">升级</span><span className="dn-lvl-v bear">一根持续周收盘 &lt; $62,447 破 200W 地板 —— 日收盘在下是预警、盘中插针不算破 —— 单独重估，重夺论死、下腿进 26JUN 放大器恢复</span></div>
                <div><span className="dn-lvl-k">重夺侧</span><span className="dn-lvl-v bull">现货已重夺 flip $64,635 与 D-SMA20 $63,588；下一确认是 1h/日收重夺 D-EMA20 $65,386 然后 W-EMA200 $67,590 —— 但在失明盘面上不是 scout 触发（见 scout）</span></div>
              </div>
              <div className="dn-gating">
                <b>框架、不是交易。</b>地板观察是唯一承重的活水位、其余都陈旧
                （实时盘面）或 framework-only。它从一根活周线测试（06-20）变成
                仍是活周线测试、未收盘 bar 在地板上方，dealer 图平、现货在 flip
                上方 —— 全在价格与 γ 上建设性。观察上不取仓位：它设升级水位
                （周收盘 &lt; $62,447）和重夺阶梯（D-EMA20 $65,386 → W-EMA200
                $67,590），本台不会预置多进一次无法确认的重夺、也不会去空一根
                周收盘尚未结的地板，在失明盘面上。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout · 价格前置条件已印（flip + D-SMA20 重夺）但仍 BLOCKED · 仓位盘面失明约 10.65 天 + 卖反弹 regime</span>
              <div className="dn-trade-name">
                回补反弹 scout —— 06-20 备忘设为价格前置条件的 flip 重夺终于印出，但 scout 仍停摆：仓位腿在冻结盘面上失明、regime 仍把反弹读成卖出反弹
              </div>
              <div className="dn-thesis">
                06-20 scout 双重受阻 —— 偏空 MTF / 卖反弹 regime AND 失明盘面。
                今天两个阻里有一个在价格侧解除：现货重夺 0-γ flip $64,635 与
                D-SMA20 $63,588，未收盘周线 bar 在地板上方守住，dealer 本子转平，
                8h 引擎金叉印出。但 scout 仍不能上、有两条。(1) 净 MTF 读仍是高
                TF 偏空（3 bull / 5 bear / 2 neutral），regime 仍是 5/9 动量 /
                趋势延续 —— 把短周期反弹读成逆势卖出反弹、不是买入反转 —— 1w 印
                一根新鲜水下死叉、价格仍在 D-EMA20 $65,386（−1.03%）和它之上的
                每条线下。(2) 决定性地，仓位腿（SM 空头泄、funding 姿态、回补流
                确认）都要一根活盘面、而没有 —— 本台看不见 flip 重夺是空头回补
                还是薄盘漂。{' '}
                <span className="dn-em">一根 scout 多在仓位失明的盘面上、在一次
                本台无法确认被回补的重夺上、在卖反弹 regime 下且长周期仍云下，
                不是一笔交易 —— flip 处的一次缓和重夺，正是仓位失明的台子在反弹
                落进 26JUN 月度时被碾过的地方。</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v bear">停摆 · 不入场 · 价格前置已满足、但只在实时盘面恢复后才重估</span></div>
                <div><span className="dn-lvl-k">技术前置</span><span className="dn-lvl-v">flip $64,635 / D-SMA20 $63,588 重夺（现 TRUE）AND MTF 共振脱离偏空 / regime 脱离卖反弹（非真 —— 仍高 TF 偏空、1w 死叉新鲜）AND 一根 1h 收盘 &gt; D-EMA20 $65,386（尚未）</span></div>
                <div><span className="dn-lvl-k">数据前置</span><span className="dn-lvl-v bear">实时盘面恢复（现冻 130.6h）AND SM 流活（现死约 10.65 天）—— 任何仓位腿可读前两者都须成立；这是约束阻塞</span></div>
              </div>
              <div className="dn-gating">
                <b>硬规则：</b>没有活仓位盘面不开 scout。即便地板守住、flip 重夺、
                平的 dealer 本子，也不触发 scout —— 在 SM / funding / flow 腿失明、
                regime 读卖反弹且长周期偏空时，本台不会规模进一次自己看不见被
                回补的回补反弹。价格阻已解除；运行阻（盘面趴）与 regime 阻
                （卖反弹、长周期偏空）没有。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · 宏观尾 · put-spread 再生长门 —— 10Y 腿仍只 4bp 之遥（4.49% 对 4.53% 门）、HY OAS 腿 15bp 之遥（2.63% 对 2.78%）· Tier-1 陈旧 4d、与 06-20 不变</span>
              <div className="dn-trade-name">
                下行 put-spread —— 再生长门未触、10Y 腿 4bp 之遥；不加对冲（宏观结转陈旧-4d：利率/美元硬、信用松、债波回来且更低）
              </div>
              <div className="dn-thesis">
                谱系带的宏观再生长门 —— HY OAS &gt; 2.78% OR 10Y &gt; 4.53% 作为
                重新长出一条下行尾的条件 —— 保持 UN-FIRED，腿与 06-20 不变因为
                Tier-1 日度系列陈旧-4d（周日渲染前无新营业日印）：10Y 在 4.49%
                （4bp 之遥），HY OAS 在 2.63%（15bp 之遥、在松）。重夺-多的利率筛
                （10Y &lt; 4.55%）在 4.49% 仍 TRUE。宏观盘面是和 06-20 同一道
                美元 / 实际利率 EXTREME RISK-OFF 逆风、MOVE 回来且松到 65.4 ——
                但一条宏观尾不是一根在未收盘周线 bar 上方守住的地板、一本去放大
                到平的 dealer 本子的对的工具；剩下的下行风险是 26JUN 月度、dealer
                γ 已经在定价。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">无仓位 · 两腿门未触 · 不变（Tier-1 陈旧 4d）</span></div>
                <div><span className="dn-lvl-k">再生长触发（下一根 Tier-1 印）</span><span className="dn-lvl-v bear">10Y &gt; 4.53% 收盘（现 4.49%、4bp 触发）OR HY OAS &gt; 2.78% 收盘（现 2.63%、15bp 触发、在松）</span></div>
                <div><span className="dn-lvl-k">重夺-多利率筛</span><span className="dn-lvl-v bull">10Y &lt; 4.55% 收盘 —— 在 4.49% 为 TRUE；等一根 BTC 内部 pivot AND 一根活盘面去转化</span></div>
              </div>
              <div className="dn-gating">
                <b>注意：</b>再生长门是随水位漂移设的酌情观察、不是回测的断点。
                若 10Y 腿触发（它最近），一条下行尾会在单独的未来备忘里重估
                （触发 / 失效 / R 在那定义）—— 且注意 dealer 条带仍带 26JUN 月度
                −28.36M，故任何这样的尾会叠加在现有 dealer 放大上、而非一根干净
                的独立对冲。无论如何今天没有新营业日宏观印可据以行动。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · 挤压周期敌对-2 观察单 · 无日历先验 · ON HOLD —— SM 流死约 10.65 天、框架无法在自身数据上评估</span>
              <div className="dn-trade-name">
                挤压周期敌对-2 —— ON HOLD（06-16 / 06-18 / 06-19 / 06-20 的延续）：SM 流冻约 255.7h、重堆签名本次无法读
              </div>
              <div className="dn-thesis">
                挤压周期 / 重堆-敌对-2 框架把离散 SM 步（同一分钟 Δshort &gt; 0 +
                Δlong &lt; 0）读成延续签名；其日历先验（BJ 13–15 节奏）在 05-31
                被证伪、此后作为无先验观察单运行。今天它无法评估、原因最简单：
                SM 流死了。long_btc / short_btc / net_btc 自 2026-06-12 01:36Z
                起恒定（约 255.7h），故没有 SM delta 可读。06-16 备忘在约 94.5h
                把它 ON HOLD、06-18 在约 142h、06-19 在约 166.5h、06-20 在约
                190.5h；约 255.7h 仍 ON HOLD。{' '}
                <span className="dn-em">冻结的流里印不出签名；框架在 SM 数据恢复
                前都黑。</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">框架状态</span><span className="dn-lvl-v bear">ON HOLD · SM 流冻约 255.7h（自 2026-06-12 01:36Z）· 无 SM delta 可算</span></div>
                <div><span className="dn-lvl-k">冻结值（不是读）</span><span className="dn-lvl-v">long 13,532.4 / short 50,825.7 / net −37,293.3 —— 逐字节恒定、只为标记死流而带</span></div>
                <div><span className="dn-lvl-k">恢复条件</span><span className="dn-lvl-v">SM 流恢复写新鲜 long_btc/short_btc → 从第一批新鲜 delta 重评重堆签名</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>死流不是安静的流。本台不会从一根冻结三元推断
                「没有重堆」—— 它什么都不推断。挤压周期读法是被悬置、不是被否定，
                流恢复后第一批新鲜 SM delta 是重新武装点。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件 <span className="dn-roman">VI · 实时盘面停摆仍是运行条件（第六天）· 200W 地板在未收盘周线 bar 下方（现货 +3.62%、周收盘测试 OPEN）、dealer 本子去放大到 FLAT · 现货重夺 flip + D-SMA20 · scout 价格阻解除、盘面 + regime 阻仍在 · 26JUN 月度是唯一放大器（砍半）· 宏观 10Y 门 4bp 之遥</span>
            </h2>

            <p>
              06-20 那些条件里：实时盘面 <em>没</em> 回来 —— 又死了约 65h、现冻
              130.6h、SM 流约 10.65 天；曾是活周线测试的 200W 地板仍是活周线测试、
              未收盘的 22JUN bar 在它上方 +3.62%（升级周收盘 &lt; $62,440 在未收盘
              读上没触发、收盘尚未结）；dealer 本子从 −48.6M 进一步去放大到 −0.6M
              （平），近端负值不断 unwind；曾是 scout 价格前置条件的 flip 重夺
              印出（现货在 flip 上方 +0.12%、在 D-SMA20 上方 +1.77%）；scout 价格
              阻解除、但盘面与 regime 阻仍在；宏观再生长门保持未触、10Y 腿仍
              4bp 之遥（陈旧-4d）；挤压周期在更死的流上仍 ON HOLD。主导条件没变：
              <em>本台仓位失明、现在面对一次自己无法确认的地板守住加 flip 重夺、
              而不是一次自己看不见被防守的地板测试</em>。今天的条件围绕持续的
              停摆、开着的周收盘地板测试、印出的 flip 重夺、和仍受阻的 scout
              重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>实时盘面恢复（主仓运行）</td><td className="bull">live_db.json 恢复写超过 2026-06-17 06:43Z 的新鲜行 AND SM 三元脱离 06-12 01:36Z 冻结更新</td><td>全面重读 funding / OI / flow / SM；只有那时才能评估 scout 或挤压周期 —— 也只有那时才能把 flip 重夺反弹确认成回补还是漂；仓位维度已连续四篇失明</td></tr>
                <tr><td>200W 地板 —— 未收盘周线 bar 在上方（周收盘测试 OPEN）</td><td className="bull">22JUN 周线 bar 未收盘 $64,710 &gt; $62,447 地板（+3.62%）；四根已定日收 06-18→06-21 加上 06-22 未收盘 bar 在上方；近期低点停止测试地板</td><td>06-20 备忘标的地板测试要到 22JUN 最终收盘才决 —— 在价格上临时建设性；不取仓位</td></tr>
                <tr><td>200W 地板丢失（周期-regime 升级）</td><td className="bear">持续周收盘 &lt; $62,447（W-SMA200 地板）；日收盘在下是预警、盘中插针不是破</td><td>破 200W 地板 —— 单独重估；06-15 重夺论被证伪，下腿随 26JUN26 月度 −28.36M 放大进 opex 恢复</td></tr>
                <tr><td>Flip 重夺（scout 价格前置）—— 已印</td><td className="bull">现货 $64,710 在 flip $64,635 上方 +0.12%、在 D-SMA20 $63,588 上方 +1.77%；下一确认 1h 收盘 &gt; D-EMA20 $65,386 然后 W-EMA200 $67,590</td><td>价格前置已满足 —— 但本身不是 scout 触发；只有在实时盘面也恢复 AND regime 脱离卖反弹时才重开 scout 评估；失明盘面上重夺是观察、不是交易</td></tr>
                <tr><td>26JUN26 月度放大器（3.6 DTE）—— 唯一放大器、砍半</td><td className="bear">−28.36M（06-20 是 −49.31M），唯一集中负块；近 0DTE 23JUN +4.89M 正、近端条带 23–25JUN 正、aggregate 平在 −0.6M</td><td>近端负放大器已完全 unwind —— 唯一集中下行风险是 26JUN 月度 3.6 DTE；只观察、本篇无空指令（任何未来设置自定其触发 / 失效 / R）</td></tr>
                <tr><td>宏观尾再生长（10Y 腿 4bp 之遥）</td><td className="bear">10Y &gt; 4.53%（4bp 触发）OR HY OAS &gt; 2.78%（15bp 触发）—— Tier-1 陈旧 4d、不变</td><td>本篇无对冲指令 —— 门触发（10Y 最近）会在单独的未来备忘重估；注意任何这样的尾会叠加在现有 dealer 空 γ −28.36M 上</td></tr>
                <tr><td>重夺-多利率筛</td><td className="bull">10Y &lt; 4.55% 收盘 —— 在 4.49% 为 TRUE</td><td>单独筛为真；需要一根 BTC 内部 pivot AND 一根活盘面去转化成 scout 多</td></tr>
                <tr><td>挤压周期敌对-2（ON HOLD）</td><td className="stale">SM 流死约 255.7h；无 delta 可算</td><td>悬置、不是否定 —— 流恢复后第一批新鲜 SM delta 重新武装</td></tr>
              </tbody>
            </table>

            <p>
              改写 <em>这</em> 篇备忘的单一线是{' '}
              <span className="dn-signal">
                flip 重夺反弹会不会穿过 D-EMA20 $65,386 与 W-EMA200 $67,590 ——
                本台在失明盘面上仍无法 scout —— 还是 26JUN26 月度放大器（现已砍半
                但仍是唯一集中块）把一次回落拖回 flip 下、朝 $62,447 地板、在 opex
                前；推动下腿的近端放大器已完全 unwind（aggregate 平在 −0.6M、近
                0DTE +4.89M 正），故结构风险窄到那一根 3.6 DTE 的月度，而结构性
                缓解 —— 未收盘周线 bar 在临时读上守在地板上方、本子去放大到平、
                flip 与 D-SMA20 重夺 —— 在价格与 γ 上是真的、但仓位未确认
              </span>
              。在盘面恢复前这篇按written 跑：本子是平的，scout 价格阻解除但盘面
              与 regime 阻没有，宏观尾门未触、10Y 腿 4bp 之遥，挤压周期被悬置，
              200W 地板观察是唯一活水位 —— 仍是活周线测试、未收盘 bar 在上方。
              价格与 MTF 在未收盘读上把地板守进周线结算，短中周期托起，8h 引擎
              金叉印出；dealer 本子去放大到平、现货穿到 flip 上方；宏观是同一道
              美元 / 实际利率逆风结转陈旧-4d，BTC 再耦合到一个正在转软的 TradFi
              复合体。未来 24h 的对的读法是{' '}
              <em>建设性但未确认 —— 尊重对周收盘的临时地板守住、平的本子和 flip
              重夺，盯 26JUN 放大器和 D-EMA20 / W-EMA200 重夺阶梯，读仓位前先修
              盘面，别去 scout 一次你看不见被回补的重夺</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计追踪 · v2 —— 已过 codex 敌对式审计
            </span>
            <b>状态：</b>这是 <b>v2</b> 备忘。STAGE B codex 敌对式跨模型审计
            （<code>audits/2026-06-22-desk-note.md</code>）返回{' '}
            <b>BLOCK-CRITICAL —— 1 CRITICAL + 2 MAJOR + 1 MINOR</b>，外加一份
            ask-deepseek 数值重算补充标出 1 MAJOR。STAGE C 在全 EN 文件上应用了
            每一条发现（不只是被引用的行），并在提升 v1 → v2 前跑了 grep-closure
            循环到零陈旧匹配。逐发现 grep 账本（pattern → 修前命中 → 修后命中）：{' '}
            <b>DN-001（CRITICAL、周收盘在 22JUN bar 未定前被解为已守）：</b>搜
            「held on/through the weekly close」「did not fire」「resolved as a
            hold / weekly-close hold」「five (daily/consecutive) closes」含跨行
            「five\ncloses」「survives the test」「just held the weekly close」——
            修前约 22、修后 0；全部重写为临时（未收盘 22JUN bar 在地板上方
            +3.62%、周收盘测试到最终收盘前 OPEN；「四根已定日收加上 06-22 未收盘
            bar」）—— <b>已解决</b>。{' '}
            <b>DN-002（MAJOR、26JUN 月度「six days out」夸大窗口）：</b>搜「six
            days out / days out」—— 修前 3、修后 0；全部换成「3.6 DTE」——{' '}
            <b>已解决</b>。{' '}
            <b>DN-003（MAJOR、未限定的「first of the down-leg lineage」）：</b>搜
            「of the down-leg lineage」「since the down-leg began」「first of the
            down-leg」「reclaimed in the down-leg」—— 修前 7、修后 0；全部限定为
            「自 06-18→06-20 破位以来」—— <b>已解决</b>。{' '}
            <b>DN-004（MINOR、parquet 24h range 用了收盘极值、非 OHLC）：</b>搜
            「parquet 24h range」「24h low $63,267」—— 修前 2、修后 0；重标为
            「24h 收盘区间」/「24h 收盘低」并在旁列出真正 OHLC H/L（$65,597 /
            $63,220）—— <b>已解决</b>。{' '}
            <b>DN-005（ask-deepseek MAJOR、经裁定 ——「~$1.8k band」）：</b>重算
            地板 $62,447 到 D-EMA20 $65,386 = $2,939；搜「1.8k」—— 修前 1、修后
            0；改为「~$2.9k」并内联算式 —— <b>已解决</b>。所有发现修后命中 = 0
            （含跨行 / 多行重扫）。<b>整体：已过 codex 敌对式审计。</b>codex
            确认为干净的算术与一致性抽查（funding ×1095、GEX 双参考符号、SM
            切口比例 NON-COMPUTABLE、MA 偏移对 parquet 最末 bar close、expiry 条带
            和对 headline、IV/RV、跨资产、宏观算术、requireViewer 门、JSX 完整性）
            维持成立。{' '}
            <b>构建说明（INFO）：</b>本服务器跑 Node 18.19.1；完整{' '}
            <code>next build</code> 因 Node 版本门被环境阻断（谱系），故{' '}
            <code>npx --no-install tsc --noEmit</code> 是构建代理 —— STAGE E 拥有
            最终构建验证。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部 principals 讨论而备的内部交易台
            物件，<em>不是投资建议、不是招揽、不是要约</em>，也不针对任何接收人的
            具体情况。数字反映一个原子快照（2026-06-22 17:19Z），分节出处披露在
            上方数据来源带里；<em>关键是快照时实时衍生品盘面已冻 130.6h（最末行
            2026-06-17 06:43Z）、smart-money 仓位流已死约 10.65 天</em>，故所有
            funding、OI、flow 与仓位数字都明确是最后已知 / 陈旧或不可计算、并如此
            标注；宏观面板渲染是 2026-06-21 22:16Z（快照前约 19.0h）、其 Tier-1
            系列陈旧-4d（与 06-20 备忘不变）。价格、MTF、GEX 与跨资产是新鲜的。
            这是 v2 备忘、已在 STAGE B codex 敌对式审计后提升。水位、规模与条件
            是本台流程的示意、不是常设建议。过去的相关性、γ 与仓位形态不约束未来
            盘面。衍生品有全损风险、若带杠杆则损失可超过已存保证金。{' '}
            <em>请自行研究。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                未收盘周线 bar 在地板上方守住、本子去放大到平、现货重夺了 flip
                与 D-SMA20 —— 但周收盘尚未结、盘面仍黑、重夺未确认。盯 D-EMA20 /
                W-EMA200 阶梯和 26JUN 放大器，读仓位前先修流。建设性。未确认。
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
            v2 · 2026-06-22 17:19Z 快照 · 已过 codex 敌对式审计 · 来源：
            live_db.json（冻结 06-17 06:43Z）· mtf_div_latest.html ·
            btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
