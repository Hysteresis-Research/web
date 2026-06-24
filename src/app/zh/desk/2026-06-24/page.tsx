import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-06-24 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-06-24',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-06-24' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260624() {
  await requireViewer('/zh/desk/2026-06-24');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-06-24 · v2</span>
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
              <span className="dn-big">$62,768</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−1.84%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-06-24 00:08Z ·{' '}
              <span className="dn-em">
                实时盘面停摆进入第八天——OKX 监控现已冻结 161.4h；
                价格 / MTF / GEX / 跨资产都新鲜、衍生品盘面仍是黑的、
                SM 子馈源已死约 11.94 天
              </span>
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 末行 2026-06-17 06:43Z（t = &ldquo;06-17 14:43&rdquo; BJ）</td>
                  <td className="dn-flag">
                    <b>冻结</b> · live_db.json 自 2026-06-17 06:43Z 起未写任何新行
                    （文件 mtime 06-17 06:43:08Z 确认）；进程状态本次未存档 / 未核实
                    —— 现 <b>161.4h 陈旧</b> 对 00:08Z 快照锚（06-23 备忘是 137.4h、
                    06-22 是 130.6h、06-20 是 65.4h —— 停摆自上篇又跑了约 24h）。
                    funding / OI / CVD / basis / retail / taker-flow 都是 06-17 06:43Z
                    的 <b>最后已知</b>、不是当前。SM 子馈源（long_btc / short_btc /
                    net_btc）冻得更久 —— 自 2026-06-12 01:36Z 起不变（约 286.5h /
                    约 11.94 天）；SM net 与 SM cut-fraction 本次 <b>不可计算</b>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-24 00:01Z scan</td>
                  <td className="dn-flag">
                    新鲜（约锚前 7 分钟）· 滚动 latest 文件、逐字存档于
                    /opt/desk-note/snapshots/2026-06-24-0006/ · 含未收盘 K 线 ·
                    扫描现货 $62,768、24h −1.90%、24h H/L $64,247 / $61,870、qVol $10.85B
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-24 00:01Z 快照</td>
                  <td className="dn-flag">
                    新鲜（约锚前 7 分钟）· Deribit idx $62,857（比 parquet 现货
                    $62,768 高 $89）· 892 合约（对 06-22/06-23 +2）· net GEX{' '}
                    <b>−64.4M</b>（净空 γ、自 06-23 的 −35.1M、06-22 的 −0.6M flat{' '}
                    <b>加深</b>）· flip $64,163（现货 −2.18% 在下方、连续第二夜）· 主块
                    是 26JUN26 月度 <b>−61.89M</b>、2.3 DTE（自 06-23 的 −41.99M{' '}
                    <b>加深</b>）、现货已更深滚进 $58k–$64k 负 γ 簇、坐在 $62k −22.33M
                    strike 上
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-24 00:01Z
                  </td>
                  <td className="dn-flag">新鲜 · 7d 1h bar · 22 资产 · 167 rows · regime NORMAL（均值 |r| 0.298、较 06-23 的 0.286 略紧）</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-23 22:15Z 渲染</td>
                  <td className="dn-flag">
                    约 1.9h 渲染滞后 · FRED Tier-1 日度序列印出新鲜 Δ、本次{' '}
                    <b>无陈旧标</b>（06-23 是陈旧-4d）：10Y 4.46% → <b>4.51%</b>
                    （+5.0bp、回硬向闸）、TIPS 2.21% → <b>2.28%</b>（+7.0bp、EXTREME
                    RISK-OFF）、HY OAS <b>2.65%</b>（−1.0bp、RISK-ON）、DXY{' '}
                    <b>101.39</b>（+0.37 当日、EXTREME RISK-OFF、在 100 上方更硬）·
                    MOVE 债波 <b>70.0</b>（+4.62 当日、仍松）· Fed 净流动性 $5.849T ·
                    USD/JPY 161.56 · NFCI 陈旧 11d · WTI $84.7 陈旧 8d
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-06-24 00:07Z（close $62,768）</td>
                  <td className="dn-flag">
                    新鲜 K 线（交易所 OHLC、独立于冻结的实时盘面）· 偏移按 parquet
                    最末 bar close 重算、是实时盘面冻结时能拿到的最新现货 · 显示的周
                    阶梯用 2023→ 子集（183 根周 bar）、无 W-SMA200 行；200W 地板直接
                    从全历史 glob 重算 —— 355 根敲定的周 W-MON bar（2019→现在、剔除
                    未收盘的 06-29 周）= <b>$62,443</b>、与 06-23 备忘钉的 $62,443 持平
                    （一条慢周 SMA、约 $250/周）· 本次 weekly_200sma.json 缺、所以
                    ratio 百分位 / last-event 保持无源、非杜撰
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
              <span className="dn-v bear">−7.24%（陈旧 · 06-17 06:43Z · 161.4h）</span>
              <span className="dn-src">live_db raw funding −0.006608 × 1095 = −7.24% ann（非 ×100）· 06-17 06:43Z 冻结处的最后已知、现 161.4h 陈旧、不是当前读 · 到冻结为止的 24h+1m 含端采样窗（1,442 行）：均值 +0.20%、区间 −7.24% / +7.21%、819 / 1,442 行为负 —— 盘面死时是一本平衡的双向本子 · 与 06-19 / 06-20 / 06-22 / 06-23 备忘逐字带的是同一根冻结行</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 对 06-23</span>
              <span className="dn-v">盘面冻结 —— 不可计算</span>
              <span className="dn-src">实时盘面自 06-17 06:43Z 起未写、所以仍没有当前 funding 去对 06-23 备忘作差 · 冻结处最后已知印是 −7.24% ann（空付多）；杠杆门第八天仍无法评估</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−468 BTC（−0.45%）· 陈旧窗</span>
              <span className="dn-src">live_db oi_btc 06-17 06:43Z 冻结处 102,945 对 24h+1m 含端采样窗（1,442 行）起点 · 窗 <b>结束</b>在冻结处、<b>不</b>延到 00:08Z 快照 —— 它描述的是到 06-17 06:43Z 为止的盘面、已 161.4h 过期</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bear">59.47 / 40.53 · 陈旧</span>
              <span className="dn-src">live_db `mkt_long_pct` 06-17 06:43Z 冻结处（24h+1m 含端采样窗起点是 58.29% —— 翻仓内 +1.18pt 加多）· 最后已知、161.4h 陈旧</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">−37.29k · 馈源死约 286.5h</span>
              <span className="dn-src">long 13,532.4 − short 50,825.7 · 这一三元组自 2026-06-12 01:36Z 起逐字不变（约 286.5h / 约 11.94 天）—— 是一根冻结值、不是当前仓位读；仅带来标记死馈源</span>
            </div>
            <div>
              <span className="dn-k">SM Δ / cut fraction</span>
              <span className="dn-v">不可计算</span>
              <span className="dn-src">SM 馈源冻结约 11.94 天 · |Δ| / prior_net 算不出 —— 没有当前 SM net 去作差 · 挤压周期 / 重堆框架本次失明、延续 06-16 / 06-18 / 06-19 / 06-20 / 06-22 / 06-23 的 ON-HOLD</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">44.5% / 42.76%</span>
              <span className="dn-src">GEX 892 合约 IV 中位数（00:01Z、新鲜）对 30D close-to-close RV 42.76%（自 parquet）—— 链级 richness 只 ~+1.74pt、基本贴着实现波；RV 仍高（06-23 是 42.58%、05-31 是 24.91%）· IV 是 892 合约的链中位数、<b>不是</b>可交易价差</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bear">−2.18%（在下方）</span>
              <span className="dn-src">flip $64,163（前 $64,580 · 滑 −$417）· 对 parquet 现货 $62,768（62,767.90 / 64,163 − 1 = −2.175%）/ GEX 文件 Deribit idx $62,857（62,857 / 64,163 − 1 = −2.036%、文件读 −2.0%）—— 两参考连续第二夜都在 flip 下方、tile 取现货侧 −2.18%、距 flip 的缺口自 06-23 的 −0.96% 约翻倍 · net GEX −64.4M（净空 γ、自 −35.1M 加深）· 26JUN26 月度 −61.89M 加深、2.3 DTE</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                06-23 备忘标的那程下杀延续了 —— 现货丢掉最后一根正的日 MA、再次
                跌破 $62,443 200W 地板（盘中、此前 06-18 与 06-19 已有盘中插破、每次
                日收都守在上方）、dealer 本子把净空 γ 加深进一根 2.3-DTE 的 26JUN
                opex、全部仍透过一条死了第八天的衍生品盘面读
              </span>
              。现货在 00:07Z parquet bar 报{' '}
              <span className="dn-tag bear">$62,768、24h −1.84%</span>（MTF 扫描在自己的
              窗读 −1.90%）、自 06-23 的 $63,961 下来、结构在每一根新鲜维度上都恶化。
              谱系带的那一根结构正面守住了定义、但现在正被直接攻击：200W 地板过了它的
              22JUN 周收测试（$63,990、在 $62,443 上方 +2.48%）、那根守住仍然成立、但
              未收盘的 06-29 周现在只报{' '}
              <span className="dn-tag bear">$62,768、在地板上方 +0.52%</span>（06-23 是
              +2.43%）、06-23 日收敲定在{' '}
              <span className="dn-tag bear">$62,697（上方 +0.41%）</span>、且 24h 低{' '}
              <span className="dn-tag bear">插到 $61,870–$61,975 —— 在地板下方</span>{' '}
              盘中、之后才收回。现货还丢了{' '}
              <span className="dn-tag bear">D-SMA20 $63,426（−1.04%）</span>、那是 06-23
              备忘歇着的唯一一根正的日 MA 偏移、所以日阶梯现在整条都在头顶、200W 地板是
              现货之下唯一的线。dealer 本子{' '}
              <span className="dn-tag bear">从 −35.1M 加深到 −64.4M 净空 γ</span>、26JUN26
              月度增厚{' '}
              <span className="dn-tag bear">−41.99M → −61.89M（2.3 DTE）</span>、现货更深
              跌进簇、落到 $62k −22.33M strike 上。MTF 退化到{' '}
              <span className="dn-tag bear">1 多 / 8 空 / 1 中</span>（前 1/7/2）：06-23
              带金叉的引擎框架滚成水下死叉（4h / 8h / 12h）、一根新鲜 1w 水下死叉刚印、
              06-23 那根建设性 1h ⚡TD9 BUY 没了 —— 换成一根{' '}
              <span className="dn-tag bear">30m ⚡TD9 SELL（超买反转提示）</span>、反弹读
              成耗尽。宏观对 BTC 回硬：10Y +5bp 到 4.51%（现距 re-grow 闸 2bp）、TIPS
              +7bp、DXY +0.37 到 101.39。{' '}
              <span className="dn-em">
                那条操作事实没变、仍然约束：OKX 监控现已冻结 161.4h（末行 2026-06-17
                06:43Z）、funding / OI / CVD / basis / retail 都是最后已知且陈旧、SM
                仓位本子已死约 11.94 天 —— SM net 与 cut-fraction 不可计算。交易台看不见
                这程下杀是派发还是稀薄漂移。读法只在价格、γ 与 MTF 上。
              </span>{' '}
              本子保持平：地板仍守住它的周收、但其余每一根读都更差、本子现在被压在 200W
              线上、带一个 2.3 DTE 加深的空 γ 放大器、在一条仓位失明的盘面上 —— 这里
              没有 scout、也没有 short 能定量。
            </p>

            <p>
              BTC 在 parquet 最末 bar（00:07Z）报 <span className="dn-tag">$62,768</span>、
              24h <span className="dn-tag bear">−1.84%</span>（对一日前 $63,946；MTF 扫描
              在自己的 00:01Z 窗读 −1.90% —— 差是参考窗不同、不是数据冲突）、在一条{' '}
              <span className="dn-tag">$64,228 / $61,975</span> 的 parquet 24h 收盘区间内
              （MTF 扫描的 OHLC 24h H/L 是 $64,247 / $61,870）。Deribit idx 在 00:01Z 读
              $62,857、MTF 扫描现货 $62,768 —— 所以最新现货被三个独立新鲜源互证（parquet
              K 线 $62,768、GEX Deribit idx $62,857、MTF 扫描 $62,768）、即便通常供它的
              live_db 盘面冻在 $65,616（06-17 06:43Z、161.4h 陈旧）。{' '}
              <span className="dn-signal">结构读法已从一根坐在失败重夺之下的守住周收
              地板、走到一根被直接盘中攻击的守住周收地板</span>：22JUN 周收 $63,990
              （在地板上方 +2.48%）仍是那根已结的守住、06-15 200W 重夺论在周收口径上仍
              确认 —— 但日收已走下到这根线（06-20 $64,270、06-21 $63,287、06-22 $63,990、
              06-23 $62,697）、06-23 收只在地板上方 +0.41%、且今晚 24h 低盘中插穿了它。
              按框架、一根盘中 wick 不是破、一根日收在下方才是早警 —— 两者都没触发、06-23
              收与未收盘的 06-24 bar 都守在上方 —— 但上方的余量在单根 session 里从 +2.43%
              压到 +0.52%。{' '}
              <span className="dn-em">
                周收守住完好、仍是唯一一根结构正面、但地板上方的缓冲几乎没了、最后一根
                正的日 MA 丢了、dealer 放大器加深进一根 2.3-DTE 的 opex、而交易台仍读不到
                那条会告诉它这根线是被防守还是被派发的盘面。
              </span>
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面冻结 161.4h（第八天）· SM 本子死约 11.94 天 · funding/OI/flow 最后已知陈旧 · 交易台看不见落到 200W 地板上的这一程是怎么被消化的</span>
            </h2>

            <p>
              <span className="dn-signal">
                这篇最重要的单一源 —— 实时衍生品盘面 —— 仍然趴着、第八天
              </span>
              。OKX 监控自 <span className="dn-tag bear">2026-06-17 06:43Z</span> 起
              （t = &ldquo;06-17 14:43&rdquo; BJ；文件 mtime 06-17 06:43:08Z 确认写在那
              停了；进程状态本次未存档或核实、所以备忘断言的是缺失的盘面、不是一个
              活着 / 挂起的进程）未向 live_db.json 追加任何行。那现在是对 00:08Z 快照锚{' '}
              <span className="dn-tag bear">161.4h 的缺失盘面</span> —— 06-20 备忘在 65.4h
              标过它、06-22 备忘在 130.6h、06-23 备忘在 137.4h、停摆又跑了约 24h 没写。
              实时盘面带的一切 —— funding、未平仓、现 / 期 CVD、perp basis、retail 多%、
              taker-net、大单流、攻击方偏 —— 因此都是{' '}
              <span className="dn-em">06-17 06:43Z 的最后已知、不是当前</span>。聪明钱
              仓位三元组（long_btc / short_btc / net_btc）逐字不变 ——{' '}
              <span className="dn-tag">13,532.4 / 50,825.7 / −37,293.3</span> —— 自{' '}
              <span className="dn-tag bear">2026-06-12 01:36Z</span> 起、约 286.5h
              （约 11.94 天）。06-16 备忘在约 94.5h 标了这死馈源、把挤压周期 ON HOLD；
              06-22 备忘在约 255.7h 带它、06-23 备忘在约 262.5h；今天是约 286.5h、仍然
              死。{' '}
              <span className="dn-em">
                SM net 作为当前读不可计算、SM cut fraction（|Δ| / prior_net）也成不了
                形 —— 没有当前 SM net 去作差。这篇里任何仓位主张都明确是历史的、不是
                当前的。
              </span>
            </p>

            <p>
              为完整起见，<em>最后可得</em>的盘面读数 —— 全部钉在 06-17 06:43Z 冻结、
              现已 161.4h 过期、且与 06-19 → 06-23 备忘逐字相同因为是同一根冻结行
              —— 是：funding <span className="dn-tag bear">−7.24% ann</span>（raw −0.006608
              × 1095；冻结处空付多）、最后可得路径在 24h+1m 含端采样窗（1,442 行）上双向
              平衡（均值 <span className="dn-tag">+0.20% ann</span>、区间{' '}
              <span className="dn-tag">−7.24% / +7.21%</span>、819 / 1,442 行为负）；OI{' '}
              <span className="dn-tag bear">102,945 BTC、跨末 24h+1m 窗 −468（−0.45%）</span>；
              retail <span className="dn-tag">mkt_long_pct 59.47%</span>（同窗内 +1.18pt
              加多）；perp basis 对现货{' '}
              <span className="dn-tag bear">−$57.43 折价</span>（窗均 −$58.62、区间
              −$146.17 / +$67.04）。{' '}
              <span className="dn-em">
                把这读成一根近八天前的指纹、不是信号：一本双向 funding 本子、OI 在泄、
                retail 在第一程弱势里加多。没有一项能搬到 00:08Z 快照 —— 它早于整段
                06-18 → 06-22 地板守序列、也早于 06-23 → 06-24 落回地板上的这一程、所以
                它对仓位怎么消化地板防守、或今晚向这根线的推进都说不出什么。交易台把仓位
                这一维当作未知、把落到地板上的这一程当作仓位未确认。
              </span>
            </p>

            <h2 className="dn-sec">
              结构 <span className="dn-roman">II · 价格/MTF 新鲜 · 多 TF 共振偏空加深到 1 多 / 8 空 / 1 中 · 引擎框架滚成水下死叉（4h/8h/12h）、1w 死叉新鲜 · 06-23 那根 1h TD9 BUY 换成 30m TD9 SELL（超买、反弹耗尽）· regime 仍 5/9 反转（均值回归）· 现货丢 D-SMA20、日阶梯整条头顶、200W 地板 $62,443 是下方唯一的线（+0.52%、盘中插破）</span>
            </h2>

            <p>
              <span className="dn-signal">
                MTF 图新鲜、再退一档到多 TF 偏空、06-23 提示反弹的引擎框架翻了过来 ——
                建设性反注薄到几乎没有
              </span> —— 这一维、连同 dealer 图、是交易台今天还能信的。00:01Z 扫描标{' '}
              <span className="dn-tag bear">10 框架里 1 多 / 8 空 / 1 中</span>、净读{' '}
              <em>多 TF 共振偏空 · 卖反弹</em> —— 比 06-23 扫描的 1 多 / 7 空 / 2 中差
              一档、这程下杀把中段框架滚进死叉。regime 线仍读{' '}
              <span className="dn-tag">5/9 反转 regime（JT&lt;0）—— 均值回归 / 利于反弹、
              趋势跟随谨慎</span>（06-23 是 6/9）、所以分类器仍偏均值回归 —— 但引擎不再带
              一根可以据此行动的建设性触发。06-23 扫描那根{' '}
              <span className="dn-tag">1h ⚡TD9 BUY</span> 没了；取而代之一根{' '}
              <span className="dn-tag bear">30m ⚡TD9 SELL 印在 $62,762</span>（超买反转
              提示 —— 从低点的反弹读成耗尽、不是在筑）。中段框架翻空：{' '}
              <span className="dn-tag bear">4h、8h、12h 全带新鲜水下死叉</span>
              （分别 5b / 3b / 1b、06-23 时 4h 与 8h 还在金叉）、{' '}
              <span className="dn-tag bear">1w 水下死叉再次新鲜（刚印）</span>、RSI 35.1、
              DIF −5,622（一根弱的水下死叉、偏空延续）、3d 带一根水上死叉 9b。仅存的金叉
              是快 / 残留框架（15m 16b、30m 21b、1h 4b）与 1d 水下金叉 11b。云：12h / 1d /
              3d / 1w 全在下方、只有 1M 守在上方。薄的建设性集合是{' '}
              <span className="dn-tag bull">1M TD8 buy —— 再一根收</span> 与三根底背离
              （15m / 1h / 1w）。{' '}
              <span className="dn-em">
                直读：框架栈加深到偏空、中段框架滚成死叉、引擎来自 06-23 的唯一建设性
                触发（1h TD9 buy）翻成 30m TD9 sell —— 均值回归 regime 在等的那根反弹没
                在筑、它耗尽了。regime 分类器仍说均值回归、但没有引擎印去做多它；主导
                tape 读是 1w 死叉与丢掉的 D-SMA20。这是一根偏空趋势框架、其超卖反弹设置
                刚变弱、不是变强。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">62,762</td><td className="num">60.2</td><td className="bull">金叉（水下）16b</td><td className="neut">云内 62.4k–62.9k 16b</td><td>Sell 4</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">62,762</td><td className="num">55.8</td><td className="bull">金叉（水下）21b</td><td className="bear">云下 ↑62.8k 45b</td><td>⚡ TD9 SELL</td><td>BEAR hid · BULL hid</td></tr>
                <tr><td>1h</td><td className="num">62,764</td><td className="num">46.1</td><td className="bull">金叉（水下）4b</td><td className="bear">云下 ↑64.4k 20b</td><td>Sell 4</td><td>BEAR reg · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">62,764</td><td className="num bear">40.4</td><td className="bear">死叉（水下）5b</td><td className="bear">云下 ↑64.1k 5b</td><td>Sell 1</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>8h</td><td className="num">62,766</td><td className="num">42.4</td><td className="bear">死叉（水下）3b</td><td className="bear">云下 ↑64.6k 2b</td><td>Buy 5</td><td>BULL hid</td></tr>
                <tr><td>12h</td><td className="num">62,766</td><td className="num">41.6</td><td className="bear">死叉（水下）1b</td><td className="bear">云下 ↑64.6k 65b</td><td>Buy 4</td><td>BULL hid</td></tr>
                <tr><td>1d</td><td className="num">62,768</td><td className="num bear">37.7</td><td className="bull">金叉（水下）11b</td><td className="bear">云下 ↑76.5k 23b</td><td>Buy 2</td><td>BEAR hid</td></tr>
                <tr><td>3d</td><td className="num">62,768</td><td className="num bear">36.7</td><td className="bear">死叉（水上）9b</td><td className="bear">云下 ↑73.4k 7b</td><td>Buy 1</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">62,768</td><td className="num bear">35.1</td><td className="bear">死叉（水下）刚印</td><td className="bear">云下 ↑100.3k 21b</td><td>Buy 6</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">62,768</td><td className="num">42.4</td><td className="neut">—</td><td className="bull">云上 ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 00:01Z scan（08:01 北京；滚动 latest
                    文件、逐字存档于 /opt/desk-note/snapshots/2026-06-24-0006/）。
                    净读 <em>多 TF 共振偏空 · 卖反弹（1 多 / 8 空 / 1 中）</em>；regime{' '}
                    <em>5/9 反转 regime（JT&lt;0、均值回归 / 利于反弹、趋势跟随谨慎）</em>；
                    反转背离 <em>顶背离 15m / 1h / 4h、底背离 15m / 1h / 1w</em>。头部告警：{' '}
                    <em>1w 水下死叉（刚印）</em>、<em>12h 水下死叉（1 bar 前）</em>、
                    <em>30m ⚡TD9 SELL 在 $62,762（超买反转提示）</em>、<em>1M TD8 Buy ——
                    再一根收</em>。扫描现货 $62,768、24h −1.90%、24h H/L $64,247 / $61,870、
                    qVol $10.85B。收盘为未收盘 K 线；每个值在各周期收盘前都按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵跟 06-23 是同一堵深头顶墙、但现货现在也滑到 D-SMA20 下方、所以整条
              日阶梯都在头顶、200W 地板是现货之下唯一的线。$62,768 坐在{' '}
              <span className="dn-tag bull">全历史 W-SMA200 200W 地板 $62,443 上方
              +0.52%</span> —— 矩阵上唯一一根正偏移 —— 与{' '}
              <span className="dn-tag bear">D-SMA20 $63,426 下方 −1.04%</span>、那是 06-23
              备忘歇着的线（当时 +0.66%）、现在丢了。D-SMA20 之上第一根头顶线是{' '}
              <span className="dn-tag bear">D-EMA20 $64,849（−3.21%）</span>、之后是周期
              代理{' '}
              <span className="dn-tag bear">W-EMA200 $67,535（−7.06%）</span>、再是一条
              密集头顶带：<span className="dn-tag bear">D-EMA50 $68,566（−8.46%）</span>、
              <span className="dn-tag bear">D-SMA50 $71,126（−11.75%）</span>、
              <span className="dn-tag bear">W-SMA20 $71,137（−11.77%）</span>、
              <span className="dn-tag bear">D-EMA100 $71,714（−12.47%）</span>、
              <span className="dn-tag bear">D-SMA150 $71,721（−12.48%）</span>、
              <span className="dn-tag bear">D-SMA100 $72,005（−12.83%）</span>、
              <span className="dn-tag bear">W-EMA20 $73,399（−14.48%）</span>、
              <span className="dn-tag bear">W-EMA150 $74,062（−15.25%）</span>、
              <span className="dn-tag bear">D-EMA150 $74,629（−15.89%）</span>、
              <span className="dn-tag bear">W-SMA150 $75,676（−17.06%）</span>、
              <span className="dn-tag bear">D-SMA200 $76,321（−17.76%）</span>、
              <span className="dn-tag bear">D-EMA200 $77,383（−18.89%）</span>。更高更远、
              已弃用：W-EMA100 $80,608（−22.13%）、W-EMA50 $81,881（−23.34%）、W-SMA100
              $88,487（−29.07%）、W-SMA50 $89,847（−30.14%）。{' '}
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-06-24 00:07Z（close $62,767.90）；偏移按
                同一根最末 bar close 重算、那是实时盘面冻结时能拿到的最新现货。显示的
                MA 水位按 $ 取整、偏移用精确序列值算。显示的周阶梯用 2023→ 子集（183 根
                周 bar）、所以那里 W-SMA200 不可计算、W-EMA200 $67,535 从可用历史 seed；
                200W 地板 $62,443 单独从全历史 glob 重算（355 根敲定的周 W-MON bar、剔除
                未收盘的 06-29 周）。日线收盘：06-18 $62,924、06-19 $63,513、06-20
                $64,270、06-21 $63,287、06-22 $63,990（= 22JUN 周收）、06-23 $62,697、
                06-24（未收盘、5 分钟 bar）$62,768 —— 06-23 收守在地板上方 +0.41%、
                未收盘 06-24 bar +0.52%、24h 低 $61,975（MTF $61,870）盘中插破它、但没有
                一根日收在下方。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子加深净空 γ aggregate −64.4M（06-23 是 −35.1M、06-22 是 −0.6M flat）· 26JUN26 月度加深到 −61.89M（2.3 DTE）· 现货更深跌破 flip $64,163（−2.18%）、落到 $58k–$64k 簇内的 $62k −22.33M strike 上 · 06-23 的重放大延续第二夜</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子的重放大延续了：aggregate γ 从 −35.1M 加深到 −64.4M 净空 γ、
                opex 收到 2.3 DTE、现货更深跌进 put 重的 strike
              </span>。aggregate GEX 是{' '}
              <span className="dn-tag bear">−64.4M / 1%</span>（06-23 是 −35.1M、06-22
              是 −0.6M flat、06-19 是 −111.1M）；本子比 06-19 低点以来任何时点都更净空 γ。
              0-γ flip 滑{' '}
              <span className="dn-tag">$64,580 → $64,163（−$417）</span>、现货 $62,768 坐在{' '}
              <span className="dn-tag bear">flip 下方 −2.18%</span>（现货口径 62,767.90 /
              64,163 − 1 = −2.175%）；GEX 文件自己的&ldquo;dist to flip&rdquo;对它的
              Deribit idx $62,857（比 parquet 现货高 $89）读 −2.0%、即{' '}
              <span className="dn-tag bear">−2.04%</span>（62,857 / 64,163 − 1 = −2.036%）
              —— 两参考连续第二夜都在 flip 下方、距 flip 的缺口自 06-23 的 −0.96% 约翻倍。
              墙图在现货之下与之上都偏 put 重：{' '}
              <span className="dn-tag bear">$60k −27.70M</span>（最重墙、簇底）、{' '}
              <span className="dn-tag bear">$62k −22.33M</span>（正在现货上）、{' '}
              <span className="dn-tag bear">$63k −11.90M</span>、{' '}
              <span className="dn-tag bear">$64k −11.65M</span>、{' '}
              <span className="dn-tag bear">$61k −10.17M</span>、{' '}
              <span className="dn-tag bull">$80k +8.48M</span>、{' '}
              <span className="dn-tag bear">$58k −7.76M</span>、{' '}
              <span className="dn-tag bear">$55k −7.11M</span>、{' '}
              <span className="dn-tag bull">$67k +6.41M</span>、{' '}
              <span className="dn-tag bear">$50k −5.31M</span>。{' '}
              <span className="dn-em">
                $58k–$64k 列出的主力墙合计约 −91M、直接夹住现货 —— 现货 $62,768 坐在
                簇内、在 $62k −22.33M 这根 strike 上、那正是加深背后的结构机制：一个在
                现货正上短 γ 的 dealer 本子会放大下一步、无论方向、而不是阻尼它、且簇底
                $60k −27.70M 就坐在 200W 线下方。正墙（$67k、$80k）全坐在头顶、现货之下
                没有支撑。
              </span>{' '}
              按 expiry 集中在 26JUN26 月度{' '}
              <span className="dn-tag bear">−61.89M（2.3 DTE）</span> —— 自 06-23 的
              −41.99M、06-22 的 −28.36M 加深、月度放大器随 opex 逼近回厚过了它 06-20 的
              权重（−49.31M）。近端 strip 为负：24JUN26 0.3{' '}
              <span className="dn-tag bear">−7.67M</span>、25JUN26 1.3 −0.38M、27JUN26 3.3
              是第一根正 +2.10M。月度之后前向 strip 小而杂 —— 3JUL26 9.3 仍小幅为负 −4.45M
              —— 之后从 10JUL 起多数转正：10JUL26 16.3 +1.28M、31JUL26 37.3{' '}
              <span className="dn-tag bull">+9.27M</span>、28AUG26 65.3 +2.89M、25SEP26
              93.3 −0.72M、25DEC26 184.3 +2.10M、26MAR27 275.3 +0.53M。没有一根前向 expiry
              带着 26JUN 的权重 —— 整块集中的下行放大风险就是这一根月度块、2.3 DTE、且它
              是加深、不是衰减进 opex。（现货参照的 aggregate −64.4M 是现货处的 net GEX；
              逐 expiry 行是一个独立分解、无需求和等于它。）
            </p>

            <p>
              892 合约 IV 中位数是{' '}
              <span className="dn-tag">44.5%</span>（自 06-23 的 43.6% / 890 合约回硬）对
              30D close-to-close RV{' '}
              <span className="dn-tag">42.76%</span> —— 链级 richness 只{' '}
              <span className="dn-tag">~+1.74pt</span>、基本贴着实现波、RV 仍高
              （今天 42.76% 对 06-23 的 42.58% 与 05-31 的 24.91% —— 自 06-08 → 06-18
              下程开始的高波 regime 仍在）。是 892 合约的链中位数、<span className="dn-em">
              不是</span>可交易价差；expiry- / strike-level vega、skew、期限结构仍未载入；
              vol 读法保持 framework only。RV 方法：30D close-to-close、logret.std × √365
              × 100、用最末 30 根日 log return（= 连续 31 根日 close）、锚自 parquet 最末
              bar 2026-06-24 00:07Z；底层 close 窗区间 $60,850 – $77,282。（参考：最末 29
              returns / 30 closes 读 43.32%；页面值 42.76% 来自 30 returns。）P/C ratio
              0.62、Call OI 276,957 / Put OI 170,367 BTC。
            </p>

            <h2 className="dn-sec">
              宏观 <span className="dn-roman">IV · 渲染新鲜（约 1.9h）、Tier-1 日度本次印出新鲜 Δ 且无陈旧标 —— 10Y 4.51%（+5bp、回硬到距闸 2bp）、TIPS 2.28%（+7bp）EXTREME RISK-OFF、HY OAS 2.65% RISK-ON、DXY 101.39（+0.37）EXTREME RISK-OFF · BTC 在一条整体翻红的 TradFi 盘面里垫底、对 NQ 落后 −2.49pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观面板渲染新鲜（约 1.9h）、Tier-1 日度序列本次印出新鲜 Δ 且无陈旧标、
                读对风险回硬 —— 利率回升向闸、实际利率收紧、美元在 100 上方更硬
              </span>。面板渲染 2026-06-23 22:15Z、比快照早约 1.9h。US 10Y nominal{' '}
              <span className="dn-tag bear">4.51%（+5.0bp）</span>、regime z{' '}
              <span className="dn-tag bear">+1.76</span> —— 紧 regime、RISK-OFF、自 06-23
              的 4.46% 回硬 5bp 到距 4.53% re-grow 闸仅 2bp。10Y TIPS real{' '}
              <span className="dn-tag bear">2.28%（+7.0bp）</span>、regime z{' '}
              <span className="dn-tag bear">+3.03</span> —— EXTREME RISK-OFF、面板上最紧的
              线、显著收紧。5Y5Y BE 通胀{' '}
              <span className="dn-tag bull">2.18%（−5.0bp）</span>、10Y breakeven{' '}
              <span className="dn-tag bull">2.23%（−2.0bp）</span> —— 通胀预期在软、两者
              偶发。HY OAS{' '}
              <span className="dn-tag bull">2.65%（−1.0bp）</span>、regime z{' '}
              <span className="dn-tag bull">−1.61</span> —— 信用仍松、一根 RISK-ON 偶发、
              当日略松。MOVE 债波是{' '}
              <span className="dn-tag">70.0</span> —— 当日 +4.62、仍&ldquo;松&rdquo;。
              美元回硬：DXY <span className="dn-tag bear">101.39（+0.37 当日）</span>、
              regime z <span className="dn-tag bear">+2.98</span>、偶发 z +2.55 ——
              EXTREME RISK-OFF、在 100 上方更硬。Fed 净流动性{' '}
              <span className="dn-tag bear">$5.849T（−0.038T）</span>、regime z{' '}
              <span className="dn-tag">+0.05</span> 但偶发 z{' '}
              <span className="dn-tag bear">−2.42</span> —— 面板标的 |偶发 z| &gt; 1.5 当日
              变化惊讶。USD/JPY{' '}
              <span className="dn-tag">161.56（−0.01 当日）</span>、regime z +1.53、
              偶发 +1.86；US-JP 10Y 利差{' '}
              <span className="dn-tag bear">1.86%（+5.0bp）</span>；USD/CNY{' '}
              <span className="dn-tag">6.7671</span>；WTI{' '}
              <span className="dn-tag">$84.7（陈旧 8d）</span>。{' '}
              <span className="dn-em">
                净：宏观背景本次对 BTC 回硬 —— 美元 / 实际利率 EXTREME RISK-OFF 逆风
                加剧、10Y 回升向闸、TIPS 收紧 7bp。re-grow 闸：10Y 闸 4.53% 现仅距 2bp
                （现 4.51%、谱系里最近）、HY OAS 闸 2.78% 距 13bp（现 2.65%）。
                reclaim-long 利率筛（10Y &lt; 4.55%）在 4.51% 仍真、但余量更少。美元 /
                实际利率回硬是叠在内生读法之上的一根真实且现更硬的宏观逆风；信用与 OAS
                闸没翻动尾论、但 10Y 腿离触发只差一根小印。
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
                <tr><td>US 10Y nominal</td><td className="num">4.51%</td><td className="num bear">+5.0bp</td><td className="num bear">+1.76</td><td className="bear">紧 · RISK-OFF · 距闸 2bp</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.28%</td><td className="num bear">+7.0bp</td><td className="num bear">+3.03</td><td className="bear">最紧线 · EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.18%</td><td className="num bull">−5.0bp</td><td className="num">−0.69</td><td className="neut">软 · 偶发</td></tr>
                <tr><td>10Y breakeven</td><td className="num">2.23%</td><td className="num bull">−2.0bp</td><td className="num">−1.67</td><td className="neut">软 · 偶发</td></tr>
                <tr><td>HY OAS</td><td className="num">2.65%</td><td className="num bull">−1.0bp</td><td className="num bull">−1.61</td><td className="bull">松 · risk-on 偶发</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.505</td><td className="num">0.00</td><td className="num">+0.24</td><td className="stale">周度 · 陈旧 11d</td></tr>
                <tr><td>MOVE 债波</td><td className="num">70.0</td><td className="num bear">+4.62</td><td className="num bull">−0.51</td><td className="bull">松 · 当日回升</td></tr>
                <tr><td>DXY</td><td className="num">101.39</td><td className="num bear">+0.37</td><td className="num bear">+2.98</td><td className="bear">EXTREME RISK-OFF · 在 100 上方更硬</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.849T</td><td className="num bear">−0.038T</td><td className="num">+0.05</td><td className="bear">抽干 · 偶发 −2.42</td></tr>
                <tr><td>USD/JPY</td><td className="num">161.56</td><td className="num">−0.01</td><td className="num bear">+1.53</td><td className="bear">硬 · z +1.53</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">1.86%</td><td className="num bear">+5.0bp</td><td className="num bull">−0.97</td><td className="bear">走阔 · 紧</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7671</td><td className="num">−0.00</td><td className="num bull">−1.64</td><td className="neut">松</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">+13.5bp（月度）</td><td className="num bear">+2.56</td><td className="stale">月度 · 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、汇总 00:01Z ——{' '}
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。非对角线均值{' '}
              <span className="dn-tag">|r| 0.298</span> —— 较 06-23 的 0.286 收紧、但仍在
              NORMAL 区段、且{' '}
              <span className="dn-signal">BTC 仍耦合 TradFi 风险复合体</span>。BTC 的顶级
              联系仍是股票 / 工业金属簇：SP500 <span className="dn-tag">+0.586</span>、NQ{' '}
              <span className="dn-tag">+0.544</span>、NVDA{' '}
              <span className="dn-tag">+0.471</span>、COPPER{' '}
              <span className="dn-tag">+0.412</span>、GOLD{' '}
              <span className="dn-tag">+0.392</span>、URNM{' '}
              <span className="dn-tag">+0.388</span>、SILVER{' '}
              <span className="dn-tag">+0.386</span>、JP225{' '}
              <span className="dn-tag">+0.366</span>、能源复合体反向（CL{' '}
              <span className="dn-tag">−0.203</span>、BRENT{' '}
              <span className="dn-tag">−0.196</span>、NGAS{' '}
              <span className="dn-tag">−0.363</span>）、JPY{' '}
              <span className="dn-tag">−0.177</span>。7d 表现是整个风险复合体深红、BTC
              垫底：<span className="dn-tag bear">BTC −4.49%</span>、NQ{' '}
              <span className="dn-tag bear">−2.00%</span>、SP500{' '}
              <span className="dn-tag bear">−1.92%</span>、JP225{' '}
              <span className="dn-tag bear">−0.06%</span>、NVDA{' '}
              <span className="dn-tag bear">−3.24%</span>、META{' '}
              <span className="dn-tag bear">−5.93%</span>、MSFT{' '}
              <span className="dn-tag bear">−4.77%</span>、GOOGL{' '}
              <span className="dn-tag bear">−6.56%</span>、AMZN{' '}
              <span className="dn-tag bear">−5.02%</span>、TSLA{' '}
              <span className="dn-tag bear">−5.06%</span>；金属被砸（GOLD{' '}
              <span className="dn-tag bear">−5.44%</span>、SILVER{' '}
              <span className="dn-tag bear">−12.17%</span>、PLAT{' '}
              <span className="dn-tag bear">−8.62%</span>、PALL{' '}
              <span className="dn-tag bear">−9.11%</span>）；能源跌（CL{' '}
              <span className="dn-tag bear">−4.18%</span>、BRENT{' '}
              <span className="dn-tag bear">−3.65%</span>、NGAS{' '}
              <span className="dn-tag bear">−2.34%</span>）。{' '}
              <span className="dn-em">
                BTC 的 7d 回报 −4.49% 对 NQ −2.00% 是 −2.49pt 的落后（06-23 是 −2.71pt）
                —— 性质与前两篇一样：BTC 在一条整体翻红的风险盘面里跑输（股票 −2% 到
                −7%、金属 −5% 到 −12%、能源跌）、不是一根 TradFi 涨而 BTC 没跟的脱钩。
                内生于 crypto 的读法对下程结构仍成立（dealer γ 在加深、现货回到 flip
                下方、200W 地板遭盘中攻击）、但美元 / 实际利率回硬与一条深红的股票 / 金属
                盘面仍是叠在其上的真宏观逆风。
              </span>{' '}
              JGB 月度 2.65% 带一根 EXTREME RISK-OFF 月度标 —— 不依赖。
            </p>

            <h2 className="dn-sec">
              交易本子 <span className="dn-roman">V · 本子平 · 200W 地板周收守住完好但遭直接攻击 —— 现货上方 +0.52%（前 +2.43%）、24h 低盘中插破、尚无日收在下方 · scout 仍停摆（现货更深在 flip 下方、盘面失明、本子加深空 γ、反弹耗尽）· 宏观尾 10Y 闸距 2bp（谱系最近）· 挤压周期 ON HOLD（SM 死约 11.94 天）</span>
            </h2>

            <p>
              <span className="dn-signal">
                本子平、保持平 —— 周期地板仍守住它的周收、但上方缓冲几乎没了、其余每一根
                读都更差、约束仍是数据完整性
              </span>。对下程的结构正面完好但在收窄：22JUN 周收 $63,990、在 $62,443 地板
              上方 +2.48%、所以周收测试仍以守住成立、200W 重夺论在周收口径上仍确认。但
              缓冲压得很厉害：未收盘的 06-29 周只在地板上方 +0.52%（06-23 是 +2.43%）、
              06-23 日收落在上方 +0.41%、24h 低插到 $61,870–$61,975、在地板下方、盘中。
              按框架、一根盘中 wick 不是破、没有一根日收在下方触发 —— 但地板现在遭直接
              攻击、不再是从容守住。scout 仍不能上：现货在 flip 下方 −2.18%（比 06-23 的
              −0.96% 更深）、各仓位腿（SM 空头泄、funding 姿态、cover-flow）全要一条活
              盘面、第八天没有、dealer 本子加深到 −64.4M 净空 γ、26JUN 月度 −61.89M 2.3
              DTE、引擎那根唯一建设性触发（06-23 1h TD9 buy）翻成 30m TD9 sell —— 没有印
              可供 scout long。也无新空：地板仍守住它的周收、SM 本子不可读、用陈旧 flow
              与一根 −61.89M 月度已计价的 2.3-DTE opex 去空一根守住的地板是差入场。今天的
              交易本子是：无空、无 scout、无新对冲 —— 先修盘面 AND 看日收对地板与 flip
              重夺、再重新装弹。
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 主仓 · 200W 周期地板盯位 —— 周收守住完好但遭直接攻击：22JUN 周收 $63,990（+2.48%）仍成立、但未收盘周缓冲压到 +0.52%、06-23 收守在上方 +0.41%、24h 低盘中插破地板（尚无日收在下方）</span>
              <div className="dn-trade-name">
                200W 周期地板盯位 —— 周收守住成立、但缓冲几乎没了：地板 $62,443 = 全历史 W-SMA200（355 根敲定周 bar、对 06-23 钉位持平）、未收盘 06-29 周报 $62,768（+0.52%、前 +2.43%）、06-23 收 $62,697（+0.41%）、24h 低 $61,870–$61,975 盘中插破
              </div>
              <div className="dn-thesis">
                06-23 备忘把周收测试结为守住 —— 22JUN 结在{' '}
                <span className="dn-tag bull">$63,990、在 $62,443 地板上方 +2.48%</span>、
                升级（周收 &lt; $62,440）没触发、06-15 200W 重夺论成为一根确认的周收守住。
                那根守住仍然成立。但这根 session 把这条线压得很狠：现货 24h −1.84%、日收
                走下到地板（06-21 $63,287、06-22 $63,990、06-23 $62,697）、06-23 收只在{' '}
                <span className="dn-tag bear">地板上方 +0.41%</span>、24h 低插到{' '}
                <span className="dn-tag bear">$61,870–$61,975、在它下方</span>、之后才收回
                到 $62,768（+0.52%）。{' '}
                <span className="dn-em">一根盘中 wick 不是破、一根日收在下方才是早警
                —— 两者都没触发 —— 但地板上方的缓冲在一根 session 里从 +2.43% 压到
                +0.52%、下一根日收是关键水位。</span>地板是唯一一根承重的活水位、其余全
                陈旧（实时盘面）或 framework only、它现在被直接测试、不再从容守住。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W 地板</span><span className="dn-lvl-v">$62,443 = 全历史 W-SMA200、本次从 2019→ parquet glob 重算（355 根敲定周 W-MON bar、剔除未收盘 06-29 周）；对 06-23 钉位持平（慢周 SMA、约 $250/周）· weekly_200sma.json 缺、所以 ratio 百分位 / last-event 保持无源、非杜撰</span></div>
                <div><span className="dn-lvl-k">周收（守住完好、缓冲压缩）</span><span className="dn-lvl-v bull">22JUN 周收 $63,990、在地板上方 +2.48% 仍成立 —— 200W 重夺论在周收口径上仍确认 · 但未收盘周报 $62,768、在上方 +0.52%（前 +2.43%）、24h 低盘中插破地板</span></div>
                <div><span className="dn-lvl-k">早警（下一根日收）</span><span className="dn-lvl-v bear">一根日收 &lt; $62,443 是缓冲已尽的早警 —— 06-23 收 $62,697 与未收盘 06-24 $62,768 都守在上方；一根盘中 wick（今天的 $61,870–$61,975）<b>不</b>是破</span></div>
                <div><span className="dn-lvl-k">升级（下一根周收）</span><span className="dn-lvl-v bear">一根持续的周收 &lt; $62,443 破 200W 地板 —— 另起评估、重夺论死、下程进 26JUN −61.89M 放大器恢复</span></div>
                <div><span className="dn-lvl-k">重夺侧（更深在下方）</span><span className="dn-lvl-v bear">现货在 flip $64,163 下方 −2.18%、也在 D-SMA20 $63,426 下方；只守 200W 地板；重夺是 1h 收 &gt; D-SMA20 再 flip —— 在失明盘面上不是 scout 触发（见 scout）</span></div>
              </div>
              <div className="dn-gating">
                <b>框架、不是交易。</b>地板盯位是唯一一根承重的活水位、其余全陈旧或
                framework only。周收守住成立、但缓冲压到 +0.52%、这条线现在被直接测试 ——
                盯位上不开仓：它设早警位（下一根日收 &lt; $62,443）、升级位（下一根周收
                在下方）与重夺阶梯（D-SMA20 $63,426 → flip $64,163 → D-EMA20 $64,849）、
                交易台不会在一根无法确认的重夺上预先做多、也不会在一根仍守住周收的地板上
                做空、在一条失明盘面上。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout · 仍停摆 · 价格前置条件更深离场（现货在 flip 下方 −2.18%）+ 盘面失明约 11.94 天 + 本子加深空 γ + 反弹耗尽（30m TD9 sell）</span>
              <div className="dn-trade-name">
                回补反弹 scout —— flip 重夺现在比 06-23 离场远一倍、引擎唯一建设性触发翻成 sell、scout 在失明盘面上、向一个加深的空 γ 本子、保持停摆
              </div>
              <div className="dn-thesis">
                06-22 备忘看到 scout 的价格前置条件短暂印出（现货重夺 flip）、06-23 备忘
                看到它还了回去（现货在 flip 下方、守 D-SMA20）。今晚它进一步恶化：现货从
                $63,961 → $62,768、现在<em>在 flip $64,163 下方 −2.18%</em>、也在 D-SMA20
                下方、只守 200W 地板。所以 scout 被四条挡住。(1) 价格前置条件更离场 ——
                现货在 flip 下方是 06-23 的两倍远。(2) 各仓位腿（SM 空头泄、funding 姿态、
                cover-flow）全要一条活盘面、没有 —— 交易台看不见落到地板上的这一程是派发
                还是稀薄漂移。(3) dealer 本子加深到 −64.4M 净空 γ、现货坐在 $58k–$64k 簇
                内的 $62k −22.33M strike 上、所以本子放大下一步、不是阻尼它。(4) 引擎来自
                06-23 的唯一建设性触发（1h TD9 buy）没了 —— 印出一根 30m TD9 sell（超买
                反转提示）、所以反弹读成耗尽。{' '}
                <span className="dn-em">在一条仓位失明盘面上、更深在 flip 下方、向一个
                加深的空 γ 本子、反弹耗尽、scout long 不是一笔交易 —— 唯一的建设性反注是
                守住的周地板与 regime 的均值回归倾向、两者都不足以在没有盘面与确认引擎印
                的情况下上仓。</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v bear">停摆 · 无入场 · 价格前置条件更深离场（现货在 flip 下方 −2.18%）—— 只在实时盘面恢复 AND 现货重新夺回 D-SMA20 再 flip 之后再评估</span></div>
                <div><span className="dn-lvl-k">技术前置条件</span><span className="dn-lvl-v bear">D-SMA20 $63,426 / flip $64,163 重夺（不真 —— 现货在两者下方、只守 200W 地板）AND 一根确认引擎印（不真 —— 1 多 / 8 空 / 1 中、1w + 12h 死叉新鲜、30m TD9 SELL；06-23 那根 1h TD9 buy 没了）</span></div>
                <div><span className="dn-lvl-k">数据前置条件</span><span className="dn-lvl-v bear">实时盘面恢复（当前冻结 161.4h）AND SM 馈源活（当前死约 11.94 天）—— 两者都要先成立、任何仓位腿才可读；这是约束块</span></div>
              </div>
              <div className="dn-gating">
                <b>硬规则：</b>没有活仓位盘面、不上 scout。守住的周地板与均值回归 regime
                在 SM / funding / flow 腿失明、现货更深在 flip 下方、dealer 本子在现货更
                空 γ、引擎翻成 sell 时不触发 scout —— 交易台不会上一根它看不见正在被回补、
                而 tape 也不再提示的回补反弹。06-22 解开的那道价格块已重新合上并走阔；
                操作块（盘面趴着）与结构块（加深空 γ 进一根 2.3-DTE opex）叠在其上。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 宏观尾 · put-spread re-grow 闸 —— 10Y 腿回硬到距触发 2bp（4.51% 对 4.53% 闸、谱系最近）、HY OAS 腿距 13bp（2.65% 对 2.78%）· Tier-1 印出新鲜 Δ、本次无陈旧标</span>
              <div className="dn-trade-name">
                下行 put-spread —— re-grow 闸未触发、但 10Y 腿回硬到距闸 2bp（谱系最近）；无对冲加（26JUN −61.89M 月度已计价集中下行）
              </div>
              <div className="dn-thesis">
                谱系带的宏观 re-grow 闸 —— HY OAS &gt; 2.78% OR 10Y &gt; 4.53% 作为重长
                一根下行尾的条件 —— 保持未触发、但 10Y 腿回硬<em>向</em>它：从距 7bp
                （06-23、4.46%）到距 2bp（今天、4.51%、谱系最近）；HY OAS 在 2.65%
                （距 13bp）。reclaim-long 利率筛（10Y &lt; 4.55%）在 4.51% 仍真、但余量
                更少。宏观盘面与谱系相同的美元 / 实际利率 EXTREME RISK-OFF 逆风、现更硬、
                10Y 近闸、TIPS +7bp —— 但宏观尾不是一根仍守住周收的地板的对的工具；剩下的
                集中下行风险是 26JUN 月度 −61.89M、dealer γ 已计价、2.3 DTE。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">无仓位 · 两腿闸都未触发 · 10Y 腿回硬到距闸 2bp（谱系最近）</span></div>
                <div><span className="dn-lvl-k">re-grow 触发（下一根 Tier-1 印）</span><span className="dn-lvl-v bear">10Y &gt; 4.53% 收（当前 4.51%、距 2bp、回硬）OR HY OAS &gt; 2.78% 收（当前 2.65%、距 13bp）</span></div>
                <div><span className="dn-lvl-k">reclaim-long 利率筛</span><span className="dn-lvl-v bull">10Y &lt; 4.55% 收 —— 在 4.51% 真、余量更少；等一根 BTC 内部转向 AND 一条活盘面去转译</span></div>
              </div>
              <div className="dn-gating">
                <b>注意：</b>re-grow 闸是随水位漂动设的酌情盯位、不是回测断点。10Y 腿现在
                离触发只差一根小印 —— 如果触发、一根下行尾会在另一篇未来备忘里重评估
                （触发 / 失效 / R 在那里定）—— 且注意 dealer strip 带 26JUN 月度 −61.89M、
                所以任何这样的尾会叠加在既有 dealer 空 γ 之上、不是一根干净的独立对冲。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 挤压周期敌对-2 观察名单 · 无日历先验 · ON HOLD —— SM 馈源死约 11.94 天、重堆签名本次不可读</span>
              <div className="dn-trade-name">
                挤压周期敌对-2 —— ON HOLD（延续 06-16 / 06-18 / 06-19 / 06-20 / 06-22 / 06-23）：SM 馈源冻结约 286.5h、重堆签名本次不可读
              </div>
              <div className="dn-thesis">
                挤压周期 / 重堆-敌对-2 框架把离散 SM 步（Δshort &gt; 0 + Δlong &lt; 0 同
                一分钟）读作延续签名；它的日历先验（BJ 13–15 节奏）在 05-31 被证伪、此后
                作无先验观察名单跑。今天它因最简单的理由不可评估：SM 馈源死了。long_btc /
                short_btc / net_btc 自 2026-06-12 01:36Z 起不变（约 286.5h）、所以没有 SM
                Δ 可读。06-16 备忘在约 94.5h 把这 ON HOLD、06-22 备忘在约 255.7h、06-23
                备忘在约 262.5h；它在约 286.5h 仍 ON HOLD。{' '}
                <span className="dn-em">一根冻结馈源印不出签名；框架在 SM 数据恢复前
                是黑的。</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">框架状态</span><span className="dn-lvl-v bear">ON HOLD · SM 馈源冻结约 286.5h（自 2026-06-12 01:36Z）· 无 SM Δ 可算</span></div>
                <div><span className="dn-lvl-k">冻结值（不是读）</span><span className="dn-lvl-v">long 13,532.4 / short 50,825.7 / net −37,293.3 —— 逐字不变、仅带来标记死馈源</span></div>
                <div><span className="dn-lvl-k">恢复条件</span><span className="dn-lvl-v">SM 馈源恢复写新鲜 long_btc/short_btc → 从第一批新鲜 Δ 重评估重堆签名</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>一根死馈源不是一根安静馈源。交易台不从冻结三元组推断
                &ldquo;无重堆&rdquo; —— 它什么都不推断。挤压周期读法是悬置、不是负、馈源
                恢复后第一批新鲜 SM Δ 是重新装弹点。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件 <span className="dn-roman">VI · 实时盘面停摆仍是操作条件（第八天）· 200W 地板周收守住完好但缓冲压到 +0.52%、24h 低盘中插破 · flip 重夺更深离场（−2.18%）、本子加深 −64.4M、26JUN 月度 −61.89M（2.3 DTE）· scout 停摆（价格块更阔、反弹耗尽）· 宏观 10Y 闸回硬到距 2bp</span>
            </h2>

            <p>
              06-23 那张条件里：实时盘面<em>没</em>回来 —— 它又死了约 24h、现冻结 161.4h、
              SM 馈源约 11.94 天；200W 地板周收守住<em>保持完好</em>（22JUN $63,990、在
              上方 +2.48%）但缓冲压到 +0.52%、24h 低盘中插破地板；flip 重夺更深离场（现货
              在 flip 下方 −2.18% 对 06-23 的 −0.96%）、现货丢了 D-SMA20；dealer 本子从
              −35.1M 加深到 −64.4M 净空 γ、26JUN 月度加深 −41.99M → −61.89M（2.3 DTE）；
              scout 价格块走阔、引擎翻成一根 30m TD9 sell；宏观 re-grow 闸保持未触发、但
              10Y 腿回硬到距 2bp；挤压周期在更深馈源上保持 ON HOLD。主导条件没变：<em>交易
              台仓位失明、现在进一个遭直接盘中攻击的守住周收地板、一根更深离场的重夺、与
              一个它无法确认的加深空 γ 本子</em>。今天的条件围绕持续的停摆、压缩的地板
              缓冲、更深离场的重夺、与加深的 26JUN 放大器重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>实时盘面恢复（主操作）</td><td className="bull">live_db.json 恢复写 2026-06-17 06:43Z 之后的新鲜行 AND SM 三元组离开其 06-12 01:36Z 冻结更新</td><td>完整重读 funding / OI / flow / SM；只有那时才能评估 scout 或挤压周期 —— 也只有那时才能把落到地板上的这一程确认为派发还是漂移；仓位这一维现已失明六篇</td></tr>
                <tr><td>200W 地板 —— 周收守住完好、缓冲压缩</td><td className="bull">22JUN 周收 $63,990、在 $62,443 地板上方 +2.48% 仍成立；但未收盘周报 $62,768、在上方 +0.52%（前 +2.43%）、06-23 收上方 +0.41%、24h 低 $61,870–$61,975 盘中插破</td><td>地板守住仍是唯一一根结构正面、但缓冲几乎没了；不开仓、慢水位是承重活读、现被直接测试</td></tr>
                <tr><td>200W 地板 —— 早警（下一根日收）</td><td className="bear">一根日收 &lt; $62,443（W-SMA200 地板）；06-23 收 $62,697 与未收盘 06-24 $62,768 都守在上方；一根盘中 wick（今天的 $61,870–$61,975）<b>不</b>是破</td><td>一根日收在下方是缓冲已尽的第一根硬警 —— 紧盯下一根敲定日收对 $62,443；它先于周收升级</td></tr>
                <tr><td>200W 地板丢（周期 regime 升级）</td><td className="bear">持续的周收 &lt; $62,443（W-SMA200 地板）</td><td>破 200W 地板 —— 另起评估；06-15 重夺论被证伪、下程进 26JUN26 月度 −61.89M 放大进 opex 恢复</td></tr>
                <tr><td>flip 重夺（scout 价格前置条件）—— 更深离场</td><td className="bear">现货 $62,768 在 flip $64,163 下方 −2.18%、也在 D-SMA20 $63,426 下方；只守 200W 地板；重夺 1h 收 &gt; D-SMA20 再 flip</td><td>价格前置条件更深离场 —— 重新夺回 D-SMA20 再 flip 是重开 scout 评估的第一步、但仅 IF 实时盘面也恢复；在 flip 下方的失明盘面上、重夺是盯、不是交易</td></tr>
                <tr><td>26JUN26 月度放大器（2.3 DTE）—— 加深、净本子加深</td><td className="bear">26JUN −61.89M（06-23 是 −41.99M）、aggregate GEX −64.4M（06-23 是 −35.1M）；近端 strip 24–25JUN 为负；现货坐在 $58k–$64k 簇内的 $62k −22.33M strike 上、簇底 $60k −27.70M 就在 200W 线下方</td><td>dealer 本子在现货加深净空 γ —— 它放大下一步；唯一一块集中下行风险是 26JUN 月度 2.3 DTE；只盯、本篇无做空指令（任何未来设置自定触发 / 失效 / R）</td></tr>
                <tr><td>宏观尾 re-grow（10Y 腿回硬到距 2bp）</td><td className="bear">10Y &gt; 4.53%（距 2bp、谱系最近）OR HY OAS &gt; 2.78%（距 13bp）—— Tier-1 印出新鲜 Δ、本次无陈旧标</td><td>本篇无对冲指令 —— 一根闸触发（10Y 最近、离一根小印只差一步）会在另一篇未来备忘里重评估；注意任何这样的尾会叠加在既有 dealer 空 γ −61.89M 之上</td></tr>
                <tr><td>reclaim-long 利率筛</td><td className="bull">10Y &lt; 4.55% 收 —— 在 4.51% 真</td><td>独立筛已真、余量更少；需要一根 BTC 内部转向 AND 一条活盘面才能转成 scout long</td></tr>
                <tr><td>挤压周期敌对-2（ON HOLD）</td><td className="stale">SM 馈源死约 286.5h；无 Δ 可算</td><td>悬置、不是负 —— 馈源恢复后第一批新鲜 SM Δ 重新装弹</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是{' '}
              <span className="dn-signal">
                下一根日收是否守在 $62,443 200W 地板上方 —— 缓冲已压到 +0.52%、24h 低已
                盘中插破它 —— 还是那根加深的 26JUN26 月度 −61.89M、现 2.3 DTE、唯一一块
                集中块、在 opex 前把一根日收拖到地板下方；另一边、一根重夺 D-SMA20 $63,426
                再 flip $64,163 —— 交易台在失明盘面上仍无法 scout —— 会重开建设性情形
              </span>。早周备忘的去放大在两根 session 里已完全反转（aggregate −0.6M →
              −35.1M → −64.4M、现货从 flip 上方到下方 −2.18% 并进簇）、所以结构风险回厚到
              这一根月度、2.3 DTE；结构正面 —— 200W 地板守住它的 22JUN 周收 —— 完好但缓冲
              几乎没了、这条线遭直接盘中攻击、而交易台仍读不到那条会告诉它它是被防守还是
              被派发的盘面。在盘面恢复之前、本篇按写好的跑：本子平、scout 价格块更阔、引擎
              翻成 sell、宏观尾 10Y 闸回硬到距 2bp、挤压周期悬置、200W 地板盯位是唯一一根
              活水位 —— 现在是一根经测试、遭直接攻击的周收地板。价格与 MTF 加深偏空、dealer
              本子加深空 γ、现货更深跌破 flip；宏观是相同的美元 / 实际利率逆风、现更硬、
              10Y 近闸、BTC 在一条深红的 TradFi 盘面里垫底。下一个 24h 的对读是{' '}
              <em>地板守住但受压 —— 尊重守住的周收、盯下一根日收对地板与 flip 重夺对
              D-SMA20 丢失进 26JUN 放大器、在读仓位前先修盘面、不要 scout 一根已经更深
              离场的重夺</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2（已过 codex 敌对式审计）
            </span>
            <b>状态：</b>这是 <b>v2</b> 备忘、由 STAGE C 在 STAGE B codex 敌对式审计返回{' '}
            <b>BLOCK-CRITICAL（1 CRITICAL + 1 MINOR）</b>、加 ask-deepseek 算术二审
            （1 MAJOR、已裁定并应用）后晋级。每条 finding 都已就地应用、并在晋级前对全
            EN 文件做 grep-closure（pattern → hits-before → hits-after）、按 06-08 / 06-09
            审计痕迹诚实门。Findings：{' '}
            <b>DN-001（CRITICAL —— lead 里关于 200W 地板&ldquo;reclaim 后首次盘中插破&rdquo;
            的假主张）：</b>lead 称现货&ldquo;自 reclaim 后首次&rdquo;盘中插破 $62,443 200W
            地板、但 parquet tape 显示 06-15 后已有盘中插破（06-18 低 $62,232.10、06-19
            $62,237.20、06-23 $61,870.00）。已修：lead 现读&ldquo;再次盘中跌破 200W
            地板&rdquo;、并披露 06-18 / 06-19 的此前插破、每次日收都守在上方。搜的 pattern：
            <code>for the first time</code>、<code>first time since</code>、{' '}
            <code>first since the reclaim</code>、<code>first night below</code>、{' '}
            <code>first intraday breach</code> —— 修前命中 1（line 211）、修后 <b>0</b> ——{' '}
            <b>RESOLVED</b>。{' '}
            <b>DN-002（MINOR —— MOVE Δ 措辞）：</b>MOVE 70.0 被写成&ldquo;unchanged /
            flat print&rdquo;、但宏观源带 +4.62 当日 Δ。已在 manifest、prose 与宏观表修为
            &ldquo;+4.62 当日 / 当日回升、仍松&rdquo;（水位 70.0 与 regime z −0.51 松不变、
            源确认）。搜的 pattern：<code>unchanged print</code>、<code>flat print</code>、
            MOVE 行 <code>unchanged</code> —— 修前命中 3（line 128、574、617）、修后{' '}
            <b>0</b> —— <b>RESOLVED</b>。{' '}
            <b>MAJOR（ask-deepseek 二审 —— 多余的 D-SMA20 值）：</b>重夺侧水位读{' '}
            <code>D-SMA20 $63,544→$63,426</code>、引入一个无解释的 $63,544、与其余每个
            位置用的 $63,426 矛盾（重算确认 62,768 / 63,426 − 1 = −1.04%）。裁定有效并修：
            去掉 <code>$63,544→</code> 箭头；D-SMA20 全篇为 $63,426。搜的 pattern：{' '}
            <code>63,544</code> —— 修前命中 1（line 736）、修后 <b>0</b> —— <b>RESOLVED</b>。
            三条 finding 全 RESOLVED（修后命中 = 0）；v2 晋级。codex 确认干净项（gating、
            JSX 完整性、staleness math、funding / OI / retail 算术、price/parquet math、
            RV 方法、MA 矩阵、MTF 快照、GEX 值、跨资产、claims-vs-loaded 纪律、前瞻交易
            范围）本 pass 不变。完整 finding 列表与证据：{' '}
            <code>audits/2026-06-24-desk-note.md</code>。上方所带数字是 STAGE A 原子快照读
            （parquet 最末 bar 2026-06-24 00:07Z；MTF / GEX / 跨资产 00:01Z；宏观渲染
            2026-06-23 22:15Z；实时盘面冻结于 2026-06-17 06:43Z、161.4h；SM 馈源自
            2026-06-12 01:36Z 起死、约 11.94 天）、存档于{' '}
            <code>/opt/desk-note/snapshots/2026-06-24-0006/</code> 供审计者复核同一批字节。{' '}
            <b>Build note（INFO）：</b>本服务器跑 Node 18.19.1；完整 <code>next build</code>
            在 Node 版本门上被环境阻塞（谱系）、所以 <code>npx --no-install tsc --noEmit</code>
            是 build proxy —— STAGE E 拥有最终 build 验证。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体情况个性化。
            数字反映单一原子快照（2026-06-24 00:08Z）、provenance 在上方数据来源条带中
            按节披露；<em>关键是、实时衍生品盘面在快照时已冻结 161.4h（末行 2026-06-17
            06:43Z）、聪明钱仓位馈源已死约 11.94 天</em>、所以一切 funding、OI、flow 与
            仓位数字都明确是最后已知 / 陈旧或不可计算、并已如此标注；宏观面板渲染
            2026-06-23 22:15Z（比快照早约 1.9h）、其 Tier-1 序列本次印出新鲜 Δ 且无陈旧
            标。价格、MTF、GEX 与跨资产是新鲜的。这是 v2 备忘、在 STAGE B codex 敌对式
            审计后晋级。水位、规模与条件是交易台流程的示例、不是长期推荐。过去的相关性、
            γ 与仓位模式不绑定未来盘面。衍生品有全损风险、加杠杆下损失可超过保证金。
            <em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                下杀延续到线上：现货丢了 D-SMA20、盘中跌破 $62,443 200W 地板、dealer
                本子把空 γ 加深进 2.3-DTE 的 26JUN opex、引擎从 buy 翻到 sell —— 全部
                透过一条死了第八天的盘面读。地板守住。缓冲压缩。盲读。
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
            v2 · 2026-06-24 00:08Z 快照 · 已过 codex 敌对式审计 · sources:
            live_db.json（冻结 161.4h）· mtf_div_latest.html · btc_gex.html ·
            macro_dashboard.html · cross_asset_correlation_summary.md ·
            btcusdt_1m_*.parquet · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
