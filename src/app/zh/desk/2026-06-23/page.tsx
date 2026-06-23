import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-06-23 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-06-23',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-06-23' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260623() {
  await requireViewer('/zh/desk/2026-06-23');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-06-23 · v2</span>
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
              <span className="dn-big">$63,961</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.79%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-06-23 00:08Z ·{' '}
              <span className="dn-em">
                实时盘面停摆进入第七天——OKX 监控现已冻结 137.4h；
                价格 / MTF / GEX / 跨资产都新鲜、衍生品盘面仍是黑的、
                SM 子馈源已死约 10.94 天
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
                    —— 现 <b>137.4h 陈旧</b> 对 00:08Z 快照锚（06-22 备忘是 130.6h、
                    06-20 是 65.4h、06-18 是 17.4h —— 停摆自上篇又跑了约 6.8h）。
                    funding / OI / CVD / basis / retail / taker-flow 都是 06-17 06:43Z
                    的 <b>最后已知</b>、不是当前。SM 子馈源（long_btc / short_btc /
                    net_btc）冻得更久 —— 自 2026-06-12 01:36Z 起不变（约 262.5h /
                    约 10.94 天）；SM net 与 SM cut-fraction 本次 <b>不可计算</b>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-23 00:01Z scan</td>
                  <td className="dn-flag">
                    新鲜（约锚前 7 分钟）· 滚动 latest 文件、逐字存档于
                    /opt/desk-note/snapshots/2026-06-23-0008/ · 含未收盘 K 线 ·
                    扫描现货 $63,975、24h +1.01%、24h H/L $65,597 / $63,328、qVol $10.43B
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-23 00:01Z 快照</td>
                  <td className="dn-flag">
                    新鲜（约锚前 7 分钟）· Deribit idx $64,116（比 parquet 现货
                    $63,961 高 $155）· 890 合约（对 06-22 平）· net GEX{' '}
                    <b>−35.1M</b>（净空 γ、自 06-22 的 −0.6M flat <b>重新放大</b>）·
                    flip $64,580（现货又在下方——06-22 那根 above-flip 重夺隔夜还了
                    回去）· 主块是 26JUN26 月度 <b>−41.99M</b>、3.3 DTE（自 06-22 的
                    −28.36M <b>加深</b>）、近端 0DTE 23JUN26 0.3 翻成 −3.18M；现货已
                    滚进 $58k–$64k 负 γ 簇
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-23 00:01Z
                  </td>
                  <td className="dn-flag">新鲜 · 7d 1h bar · 22 资产 · 167 rows · regime NORMAL（均值 |r| 0.286、较 06-22 的 0.288 略松）</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-22 22:15Z 渲染</td>
                  <td className="dn-flag">
                    约 1.9h 渲染滞后（比 06-22 备忘的约 19h 新）· FRED Tier-1 日度
                    序列仍带 <b>陈旧 4d</b> 标、但水位印出新鲜 Δ：10Y 4.49% →{' '}
                    <b>4.46%</b>（−3.0bp）、TIPS 2.23% → <b>2.21%</b>（EXTREME
                    RISK-OFF）、HY OAS <b>2.66%</b>（0.0bp、RISK-ON）、DXY{' '}
                    <b>100.83</b>（EXTREME RISK-OFF、−0.02 当日）· MOVE 债波回硬到{' '}
                    <b>70.0</b>（+4.62、06-22 是 65.4）· Fed 净流动性 $5.849T ·
                    USD/JPY 161.37（对 06-22 平）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-06-23 00:05Z（close $63,961）</td>
                  <td className="dn-flag">
                    新鲜 K 线（交易所 OHLC、独立于冻结的实时盘面）· 偏移按 parquet
                    最末 bar close 重算、是实时盘面冻结时能拿到的最新现货 · 显示的周
                    阶梯用 2023→ 子集（183 根周 bar）、无 W-SMA200 行；200W 地板直接
                    从全历史 glob 重算 —— 355 根敲定的周 W-MON bar（2019→现在、剔除
                    未收盘的 06-29 周）= <b>$62,443</b>、比 06-22 备忘钉的 $62,447 低
                    约 $4（一条慢周 SMA、约 $250/周）· 本次 weekly_200sma.json 缺、
                    所以 ratio 百分位 / last-event 保持无源、非杜撰
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
              <span className="dn-v bear">−7.24%（陈旧 · 06-17 06:43Z · 137.4h）</span>
              <span className="dn-src">live_db raw funding −0.006608 × 1095 = −7.24% ann（非 ×100）· 06-17 06:43Z 冻结处的最后已知、现 137.4h 陈旧、不是当前读 · 到冻结为止的 24h+1m 含端采样窗（1,442 行）：均值 +0.20%、区间 −7.24% / +7.21%、819 / 1,442 行为负 —— 盘面死时是一本平衡的双向本子 · 与 06-19 / 06-20 / 06-22 备忘逐字带的是同一根冻结行</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 对 06-22</span>
              <span className="dn-v">盘面冻结 —— 不可计算</span>
              <span className="dn-src">实时盘面自 06-17 06:43Z 起未写、所以仍没有当前 funding 去对 06-22 备忘作差 · 冻结处最后已知印是 −7.24% ann（空付多）；杠杆门第七天仍无法评估</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−468 BTC（−0.45%）· 陈旧窗</span>
              <span className="dn-src">live_db oi_btc 06-17 06:43Z 冻结处 102,945 对 24h+1m 含端采样窗（1,442 行）起点 · 窗 <b>结束</b>在冻结处、<b>不</b>延到 00:08Z 快照 —— 它描述的是到 06-17 06:43Z 为止的盘面、已 137.4h 过期</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bear">59.47 / 40.53 · 陈旧</span>
              <span className="dn-src">live_db `mkt_long_pct` 06-17 06:43Z 冻结处（24h+1m 含端采样窗起点是 58.29% —— 翻仓内 +1.18pt 加多）· 最后已知、137.4h 陈旧</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">−37.29k · 馈源死约 262.5h</span>
              <span className="dn-src">long 13,532.4 − short 50,825.7 · 这一三元组自 2026-06-12 01:36Z 起逐字不变（约 262.5h / 约 10.94 天）—— 是一根冻结值、不是当前仓位读；仅带来标记死馈源</span>
            </div>
            <div>
              <span className="dn-k">SM Δ / cut fraction</span>
              <span className="dn-v">不可计算</span>
              <span className="dn-src">SM 馈源冻结约 10.94 天 · |Δ| / prior_net 算不出 —— 没有当前 SM net 去作差 · 挤压周期 / 重堆框架本次失明、延续 06-16 / 06-18 / 06-19 / 06-20 / 06-22 的 ON-HOLD</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">43.6% / 42.58%</span>
              <span className="dn-src">GEX 890 合约 IV 中位数（00:01Z、新鲜）对 30D close-to-close RV 42.58%（自 parquet）—— 链级 richness 只 ~+1.02pt、基本贴着实现波；RV 仍高（06-22 是 43.43%、05-31 是 24.91%）· IV 是 890 合约的链中位数、<b>不是</b>可交易价差</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bear">−0.96%（在下方）</span>
              <span className="dn-src">flip $64,580（前 $64,635 · 滑 −$55）· 对 parquet 现货 $63,961（63,961.20 / 64,580 − 1 = −0.958%）/ GEX 文件 Deribit idx $64,116（64,116 / 64,580 − 1 = −0.718%、文件读 −0.7%）—— 两参考又都在 flip 下方、06-22 那根 above-flip 重夺还了回去、tile 取现货侧 −0.96% · net GEX −35.1M（净空 γ、自 −0.6M flat 重放大）· 26JUN26 月度 −41.99M 加深、3.3 DTE</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                周期地板过了它的周收测试 —— 22JUN 周线收 $63,990、在 $62,443 200W
                地板上方 —— 但隔夜盘面把 06-22 的重夺还了回去、dealer 本子重新装上
                净空 γ 进 26JUN opex、全部仍透过一条死了第七天的衍生品盘面读
              </span>
              。上三篇带的那道未决周收测试现在<em>有了答案</em>：22JUN 周 bar 收在{' '}
              <span className="dn-tag bull">$63,990（在 $62,443 地板上方 +2.48%）</span>、
              上篇的升级条件（周收 &lt; $62,440）<em>没</em>触发、06-15 那根 200W 重夺
              论不再是暂定的 —— 它是一根确认的周收守住。新的未收盘周（至 06-29）当前
              报 <span className="dn-tag bull">$63,961、在地板上方 +2.43%</span>。但 06-22
              备忘在地板之上点出的那层建设性叠加被部分还了回去：现货从{' '}
              <span className="dn-tag bear">$64,710 → $63,961（约 8h 内 −1.16%）</span>
              滚进 00:05Z 的 parquet bar、<span className="dn-tag bear">跌回 0-γ flip
              $64,580 下方（−0.96%）</span>、在 06-22 那唯一一根 above-flip 印之后、
              dealer 本子又{' '}
              <span className="dn-tag bear">从 −0.6M 重放大到 −35.1M 净空 γ</span>、
              26JUN26 月度加深{' '}
              <span className="dn-tag bear">−28.36M → −41.99M（3.3 DTE）</span>、现货
              <em>跌进</em> $58k–$64k 负 γ 簇。MTF 退化到{' '}
              <span className="dn-tag bear">1 多 / 7 空 / 2 中</span>（前 3/5/2）、1w
              印出一根新鲜水下死叉、但引擎周期带超卖反弹提示（1h ⚡TD9 BUY、8h 水下
              金叉 2b）、regime 从卖反弹动量翻到{' '}
              <span className="dn-tag">6/9 反转 regime（JT&lt;0、利于均值回归、
              趋势跟随谨慎）</span>。{' '}
              <span className="dn-em">
                那条操作事实没变、仍然约束：OKX 监控现已冻结 137.4h（末行 2026-06-17
                06:43Z）、funding / OI / CVD / basis / retail 都是最后已知且陈旧、SM
                仓位本子已死约 10.94 天 —— SM net 与 cut-fraction 不可计算。交易台看不见
                隔夜那根下杀是派发还是稀薄漂移。读法只在价格、γ 与 MTF 上。
              </span>{' '}
              本子保持平：地板清了周收、但短线重夺失败、本子为现 3.3 DTE 的 26JUN
              月度重新装弹、在一条仓位失明的盘面上、进一个重放大的 dealer 本子、在
              一根偏空的净 MTF 读下、没有 scout 能上仓。
            </p>

            <p>
              BTC 在 parquet 最末 bar（00:05Z）报 <span className="dn-tag">$63,961</span>、
              24h <span className="dn-tag bull">+0.79%</span>（对一日前 $63,461；MTF 扫描
              在自己的 00:01Z 窗读 +1.01% —— 差是参考窗不同、不是数据冲突）、在一条{' '}
              <span className="dn-tag">$65,548 / $63,433</span> 的 parquet 24h 收盘区间内
              （收盘高 @ 2026-06-22 13:59Z、收盘低 @ 2026-06-22 00:11Z；MTF 扫描的 OHLC
              24h H/L 是 $65,597 / $63,328）。Deribit idx 在 00:01Z 读 $64,116、MTF 扫描
              现货 $63,975 —— 所以最新现货被三个独立新鲜源互证（parquet K 线 $63,961、
              GEX Deribit idx $64,116、MTF 扫描 $63,975）、即便通常供它的 live_db 盘面
              冻在 $65,616（06-17 06:43Z、137.4h 陈旧）。{' '}
              <span className="dn-signal">结构读法已从一道未决地板测试、走到一根坐在
              失败重夺之下的确认周收守住</span>：06-15 周收 $66,286 开了 200W 重夺、
              三根红日收（06-16 $65,645、06-17 $64,473、06-18 $62,924）把突破还回到地板
              上、五根敲定日收随后守在它上方（06-18 $62,924、06-19 $63,513、06-20
              $64,270、06-21 $63,287、06-22 $63,990）、而 06-22 的收<em>就是</em>那根
              22JUN 周收 —— $63,990、地板上方 +2.48% —— 所以上篇在等的那道周收测试以守住
              收结。{' '}
              <span className="dn-em">
                那是今日唯一一根毫不含糊的正面。叠在它之上的一切 —— flip 重夺、去放大的
                本子 —— 都在隔夜被还了回去：未收盘的 06-23 日 bar 是 $63,961、回到 flip
                下方、也在 D-EMA20 下方、在一个把净空 γ 重放大进一根 3.3-DTE 月度的
                dealer 本子里、在一条交易台仍无法读仓位的盘面上。
              </span>
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面冻结 137.4h（第七天）· SM 本子死约 10.94 天 · funding/OI/flow 最后已知陈旧 · 交易台看不见 flip 上那根隔夜下杀是怎么被消化的</span>
            </h2>

            <p>
              <span className="dn-signal">
                这篇最重要的单一源 —— 实时衍生品盘面 —— 仍然趴着、第七天
              </span>
              。OKX 监控自 <span className="dn-tag bear">2026-06-17 06:43Z</span> 起
              （t = &ldquo;06-17 14:43&rdquo; BJ；文件 mtime 06-17 06:43:08Z 确认写在那
              停了；进程状态本次未存档或核实、所以备忘断言的是缺失的盘面、不是一个
              活着 / 挂起的进程）未向 live_db.json 追加任何行。那现在是对 00:08Z 快照锚{' '}
              <span className="dn-tag bear">137.4h 的缺失盘面</span> —— 06-18 备忘在 17.4h
              标过它、06-19 备忘在 41.4h、06-20 备忘在 65.4h、06-22 备忘在 130.6h、停摆
              又跑了约 6.8h 没写。实时盘面带的一切 —— funding、未平仓、现 / 期 CVD、
              perp basis、retail 多%、taker-net、大单流、攻击方偏 —— 因此都是{' '}
              <span className="dn-em">06-17 06:43Z 的最后已知、不是当前</span>。聪明钱
              仓位三元组（long_btc / short_btc / net_btc）逐字不变 ——{' '}
              <span className="dn-tag">13,532.4 / 50,825.7 / −37,293.3</span> —— 自{' '}
              <span className="dn-tag bear">2026-06-12 01:36Z</span> 起、约 262.5h
              （约 10.94 天）。06-16 备忘在约 94.5h 标了这死馈源、把挤压周期 ON HOLD；
              06-20 备忘在约 190.5h 带它、06-22 备忘在约 255.7h；今天是约 262.5h、仍然
              死。{' '}
              <span className="dn-em">
                SM net 作为当前读不可计算、SM cut fraction（|Δ| / prior_net）也成不了
                形 —— 没有当前 SM net 去作差。这篇里任何仓位主张都明确是历史的、不是
                当前的。
              </span>
            </p>

            <p>
              为完整起见，<em>最后可得</em>的盘面读数 —— 全部钉在 06-17 06:43Z 冻结、
              现已 137.4h 过期、且与 06-19 / 06-20 / 06-22 备忘逐字相同因为是同一根冻结行
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
                把这读成一根近七天前的指纹、不是信号：一本双向 funding 本子、OI 在泄、
                retail 在第一程弱势里加多。没有一项能搬到 00:08Z 快照 —— 它早于整段
                06-18 → 06-22 地板守序列、也早于今晚 flip 上的下杀、所以它对仓位怎么消化
                地板防守、那根短暂 flip 重夺、或隔夜回滚都说不出什么。交易台把仓位这一维
                当作未知、把 flip 上的下杀当作仓位未确认。
              </span>
            </p>

            <h2 className="dn-sec">
              结构 <span className="dn-roman">II · 价格/MTF 新鲜 · 多 TF 共振偏空 · 卖反弹（1 多 / 7 空 / 2 中）· regime 翻到 6/9 反转（利于均值回归）· 1w 水下死叉新鲜 · 1h ⚡TD9 BUY + 8h 金叉超卖提示 · 现货回到 flip 与 D-EMA20 下方、守住 D-SMA20（+0.66%）、200W 地板 $62,443 守住 22JUN 周收（未收盘周 +2.43%）</span>
            </h2>

            <p>
              <span className="dn-signal">
                MTF 图新鲜、退回多 TF 偏空、但 regime 分类器翻到反转 / 均值回归、引擎
                周期带超卖反弹提示
              </span> —— 这一维、连同 dealer 图、是交易台今天还能信的。00:01Z 扫描标{' '}
              <span className="dn-tag bear">10 框架里 1 多 / 7 空 / 2 中</span>、净读{' '}
              <em>多 TF 共振偏空 · 卖反弹</em> —— 比 06-22 扫描的 3 多 / 5 空 / 2 中
              差一档、隔夜下杀把短框架滚回云下（15m 云下 16b、30m 云下 1b；只有 1h 守在
              云上 1b）。但 regime 线翻了：{' '}
              <span className="dn-tag">6/9 反转 regime（JT&lt;0）—— 均值回归 / 利于反弹、
              趋势跟随谨慎</span>、06-22 扫描读的是 5/9 动量 / 趋势延续。引擎带着建设性
              反注：一根新鲜{' '}
              <span className="dn-tag bull">1h ⚡TD9 BUY 印在 $63,977</span>
              （超卖反转提示）、一根{' '}
              <span className="dn-tag bull">8h 水下金叉（2 bar 前）</span>、加上一根 1d
              水下金叉 10b 与一根 4h 水下金叉 17b、还有一根{' '}
              <span className="dn-tag bull">1M TD8 buy —— 再一根收</span>。对着这些、长
              结构偏空：12h / 1d / 3d / 1w 全在云下、且{' '}
              <span className="dn-tag bear">1w 印出一根新鲜水下死叉（刚刚）</span>、RSI
              36.4、DIF −5,526（一根弱的水下死叉、偏空延续）。反转背离：顶背离 1h、
              底背离 15m / 1w。{' '}
              <span className="dn-em">
                直读：净框架栈偏空、短框架已滚回云下、但 regime 从卖反弹翻到均值回归、
                1h TD9 buy 与 8h 金叉是超卖反弹提示、价格泊在 D-SMA20 上、就在 200W
                地板之上。这是一根偏空趋势框架下压着一个超卖反弹设置 —— 06-22 的镜像、
                那天是一根建设性反弹坐在卖反弹 regime 里；今天是一根偏空栈坐在均值回归
                regime 里。两边都没赢。1w 死叉是最强的警示、1h TD9 buy 是最强的建设性注。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">63,976</td><td className="num bear">39.1</td><td className="neut">死叉（水上）37b</td><td className="bear">云下 ↑64.8k 16b</td><td>Sell 4</td><td>BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">63,976</td><td className="num bear">38.2</td><td className="neut">死叉（水上）15b</td><td className="bear">云下 ↑64.0k 1b</td><td>Buy 7</td><td>BEAR hid</td></tr>
                <tr><td>1h</td><td className="num">63,977</td><td className="num">43.4</td><td className="neut">死叉（水上）5b</td><td className="bull">云上 ↓64.0k 1b</td><td>⚡ TD9 BUY</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>4h</td><td className="num">63,977</td><td className="num">48.7</td><td className="bull">金叉（水下）17b</td><td className="neut">云内 64.0k–64.5k 5b</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>8h</td><td className="num">63,977</td><td className="num">48.6</td><td className="bull">金叉（水下）2b</td><td className="neut">云内 62.8k–66.7k 10b</td><td>Sell 1</td><td>BULL hid</td></tr>
                <tr><td>12h</td><td className="num">63,977</td><td className="num">46.9</td><td className="neut">—</td><td className="bear">云下 ↑64.3k 63b</td><td>Buy 2</td><td>BULL hid</td></tr>
                <tr><td>1d</td><td className="num">63,976</td><td className="num bear">40.9</td><td className="bull">金叉（水下）10b</td><td className="bear">云下 ↑75.3k 22b</td><td>Sell 2</td><td>BEAR hid</td></tr>
                <tr><td>3d</td><td className="num">63,971</td><td className="num bear">38.7</td><td className="bear">死叉（水上）9b</td><td className="bear">云下 ↑73.4k 7b</td><td>Sell 4</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">63,971</td><td className="num bear">36.4</td><td className="bear">死叉（水下）刚印</td><td className="bear">云下 ↑100.3k 21b</td><td>Buy 6</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">63,971</td><td className="num bear">42.9</td><td className="neut">—</td><td className="bull">云上 ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 00:01Z scan（08:01 北京；滚动 latest
                    文件、逐字存档于 /opt/desk-note/snapshots/2026-06-23-0008/）。
                    净读 <em>多 TF 共振偏空 · 卖反弹（1 多 / 7 空 / 2 中）</em>；regime{' '}
                    <em>6/9 反转 regime（JT&lt;0、均值回归 / 利于反弹、趋势跟随谨慎）</em>；
                    反转背离 <em>顶背离 1h、底背离 15m / 1w</em>。头部告警：{' '}
                    <em>1w 水下死叉（刚印）</em>、<em>8h 水下金叉（2 bar 前）</em>、
                    <em>1h ⚡TD9 BUY 在 $63,977</em>、<em>1M TD8 Buy —— 再一根收</em>。
                    扫描现货 $63,975、24h +1.01%、24h H/L $65,597 / $63,328、qVol $10.43B。
                    收盘为未收盘 K 线；每个值在各周期收盘前都按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵跟 06-22 是同一堵深头顶墙、但现货已滑回 D-EMA20 下方、现在夹在
              紧贴其下的 D-SMA20 与下面的 200W 地板之间。$63,961 坐在{' '}
              <span className="dn-tag bull">D-SMA20 $63,544 上方 +0.66%</span> —— 唯一一根
              正的日 MA 偏移、也是盘面现在歇着的线 —— 与{' '}
              <span className="dn-tag bull">全历史 W-SMA200 200W 地板 $62,443 上方
              +2.43%</span>。第一根头顶线是{' '}
              <span className="dn-tag bear">D-EMA20 $65,188（−1.88%）</span> —— 06-22 盘中
              重夺过（备忘当时读 −1.03%、现货 $64,710）、隔夜还了回去 —— 之后是周期代理{' '}
              <span className="dn-tag bear">W-EMA200 $67,547（−5.31%）</span>、再是一条
              密集头顶带：<span className="dn-tag bear">D-EMA50 $68,852（−7.10%）</span>、
              <span className="dn-tag bear">W-SMA20 $71,197（−10.16%）</span>、
              <span className="dn-tag bear">D-SMA50 $71,513（−10.56%）</span>、
              <span className="dn-tag bear">D-SMA150 $71,889（−11.03%）</span>、
              <span className="dn-tag bear">D-EMA100 $71,920（−11.07%）</span>、
              <span className="dn-tag bear">D-SMA100 $72,138（−11.34%）</span>、
              <span className="dn-tag bear">W-EMA20 $73,513（−12.99%）</span>、
              <span className="dn-tag bear">W-EMA150 $74,078（−13.66%）</span>、
              <span className="dn-tag bear">D-EMA150 $74,805（−14.50%）</span>、
              <span className="dn-tag bear">W-SMA150 $75,684（−15.49%）</span>、
              <span className="dn-tag bear">D-SMA200 $76,460（−16.35%）</span>、
              <span className="dn-tag bear">D-EMA200 $77,542（−17.51%）</span>。更高更远、
              已弃用：W-EMA100 $80,632（−20.67%）、W-EMA50 $81,928（−21.93%）、W-SMA100
              $88,498（−27.73%）、W-SMA50 $89,871（−28.83%）。{' '}
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-06-23 00:05Z（close $63,961.20）；偏移按
                同一根最末 bar close 重算、那是实时盘面冻结时能拿到的最新现货（所以
                D-SMA20 偏移近乎自参照、读作&ldquo;价格在线上&rdquo;、不是可交易缺口）。
                显示的 MA 水位按 $ 取整、偏移用精确序列值算。显示的周阶梯用 2023→ 子集
                （183 根周 bar）、所以那里 W-SMA200 不可计算、W-EMA200 $67,547 从可用
                历史 seed；200W 地板 $62,443 单独从全历史 glob 重算（355 根敲定的周 W-MON
                bar）。日线收盘：06-17 $64,473、06-18 $62,924、06-19 $63,513、06-20
                $64,270、06-21 $63,287、06-22 $63,990（= 22JUN 周收）、06-23（未收盘、
                5 分钟 bar）$63,961 —— 五根敲定收（06-18 → 06-22）在地板上方、且周收守在
                它之上。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子重放大净空 γ aggregate −35.1M（06-22 是 −0.6M flat）· 26JUN26 月度加深到 −41.99M（3.3 DTE）· 现货跌回 flip $64,580 下方、进 $58k–$64k 负 γ 簇 · 上三篇的去放大反转</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子的去放大反转了：aggregate γ 从 flat 回到一根 −35.1M 净空 γ
                姿态、opex 临近、现货跌进 put 重的 strike
              </span>。aggregate GEX 是{' '}
              <span className="dn-tag bear">−35.1M / 1%</span>（06-22 是 −0.6M flat、06-20
              是 −48.6M、06-19 是 −111.1M）；本子重新装上净空 γ（放大）。0-γ flip 滑{' '}
              <span className="dn-tag">$64,635 → $64,580（−$55）</span>、现货 $63,961 坐在{' '}
              <span className="dn-tag bear">flip 下方 −0.96%</span>（现货口径 63,961.20 /
              64,580 − 1 = −0.958%）；GEX 文件自己的&ldquo;dist to flip&rdquo;对它的
              Deribit idx $64,116（比 parquet 现货高 $155）读 −0.7%、即{' '}
              <span className="dn-tag bear">−0.72%</span>（64,116 / 64,580 − 1 = −0.718%）
              —— 两参考都在 flip 下方、06-22 那根 above-flip 重夺在单根隔夜里还了回去。
              墙图现在在现货之下与之上都偏 put 重：{' '}
              <span className="dn-tag bear">$60k −22.73M</span>（最重墙、簇底）、{' '}
              <span className="dn-tag bear">$64k −17.69M</span>（正在现货上）、{' '}
              <span className="dn-tag bear">$62k −16.51M</span>、{' '}
              <span className="dn-tag bull">$67k +9.98M</span>、{' '}
              <span className="dn-tag bull">$80k +9.58M</span>、{' '}
              <span className="dn-tag bear">$63k −9.06M</span>、{' '}
              <span className="dn-tag bull">$70k +7.58M</span>、{' '}
              <span className="dn-tag bear">$55k −6.41M</span>、{' '}
              <span className="dn-tag bear">$61k −6.33M</span>、{' '}
              <span className="dn-tag bear">$58k −6.08M</span>。{' '}
              <span className="dn-em">
                $58k–$64k 列出的主力墙合计约 −78M、直接夹住现货 —— 现货 $63,961 坐在
                簇内、在 $64k −17.69M 这根 strike 上、那正是重放大背后的结构机制：一个
                在现货正上方短 γ 的 dealer 本子会放大下一步、无论方向、而不是阻尼它。
                正墙（$67k、$70k、$80k）全坐在头顶、现货之下没有支撑。
              </span>{' '}
              按 expiry 集中在 26JUN26 月度{' '}
              <span className="dn-tag bear">−41.99M（3.3 DTE）</span> —— 自 06-22 的
              −28.36M、06-20 的 −49.31M 加深、所以月度放大器随 opex 逼近回厚到接近它
              06-20 的权重。近端 strip 现在也转负：23JUN26 0.3{' '}
              <span className="dn-tag bear">−3.18M</span>（06-22 是 +4.89M 正）、24JUN26
              1.3 −1.82M、25JUN26 2.3 −0.22M。月度之后前向 strip 小而杂 —— 3JUL26 10.3
              仍小幅为负 −0.75M —— 之后从 10JUL 起多数转正：10JUL26 17.3 +0.24M、
              31JUL26 38.3 <span className="dn-tag bull">+15.23M</span>、28AUG26 66.3
              +2.86M、25SEP26 94.3 +0.76M、25DEC26 185.3 +3.28M、26MAR27 276.3 +0.77M。
              没有一根前向 expiry 带着 26JUN 的权重 —— 整块集中的下行放大风险就是这一根
              月度块、3.3 DTE、且它是回厚、不是衰减。
            </p>

            <p>
              890 合约 IV 中位数是{' '}
              <span className="dn-tag">43.6%</span>（890 合约计对 06-22 平、IV 43.7% →
              43.6%）对 30D close-to-close RV{' '}
              <span className="dn-tag">42.58%</span> —— 链级 richness 只{' '}
              <span className="dn-tag">~+1.02pt</span>、基本贴着实现波、RV 仍高
              （今天 42.58% 对 06-22 的 43.43% 与 05-31 的 24.91% —— 自 06-08 → 06-18
              下程开始的高波 regime 仍在）。是 890 合约的链中位数、<span className="dn-em">
              不是</span>可交易价差；expiry- / strike-level vega、skew、期限结构仍未载入；
              vol 读法保持 framework only。RV 方法：30D close-to-close、logret.std × √365
              × 100、用最末 30 根日 log return（= 连续 31 根日 close）、锚自 parquet 最末
              bar 2026-06-23 00:05Z；底层 close 窗区间 $60,850 – $77,282。（参考：最末 29
              returns / 30 closes 读 43.20%；页面值 42.58% 来自 30 returns。）P/C ratio
              0.63、Call OI 272,383 / Put OI 171,045 BTC。
            </p>

            <h2 className="dn-sec">
              宏观 <span className="dn-roman">IV · 渲染新鲜（约 1.9h）· Tier-1 陈旧-4d 但水位印出新鲜 Δ —— 10Y 4.46%（−3bp、已松）、TIPS 2.21% EXTREME RISK-OFF、HY OAS 2.66% RISK-ON、DXY 100.83 EXTREME RISK-OFF · MOVE 回硬到 70.0（+4.62）· BTC 重新耦合一个偏软的 TradFi 复合体、对 NQ 落后 −2.71pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观面板渲染新鲜（约 1.9h）、Tier-1 日度序列本次印出新鲜 Δ、尽管仍带
                陈旧-4d 标 —— 利率松了一点、美元守在 EXTREME RISK-OFF、债波回硬
              </span>。面板渲染 2026-06-22 22:15Z、比快照早约 1.9h。US 10Y nominal{' '}
              <span className="dn-tag bull">4.46%（−3.0bp）</span>、regime z{' '}
              <span className="dn-tag bear">+1.44</span> —— 紧 regime、RISK-OFF、自 06-22
              的 4.49% 松了 3bp。10Y TIPS real{' '}
              <span className="dn-tag bull">2.21%（−2.0bp）</span>、regime z{' '}
              <span className="dn-tag bear">+2.50</span> —— EXTREME RISK-OFF、面板上最紧的
              线、略松。5Y5Y BE 通胀{' '}
              <span className="dn-tag bull">2.18%（−5.0bp）</span>、10Y breakeven{' '}
              <span className="dn-tag bull">2.23%（−2.0bp）</span> —— 通胀预期在软、两者
              偶发。HY OAS{' '}
              <span className="dn-tag bear">2.66%（0.0bp）</span>、regime z{' '}
              <span className="dn-tag bull">−1.56</span> —— 信用仍松、一根 RISK-ON 偶发、
              当日基本平。MOVE 债波是{' '}
              <span className="dn-tag bear">70.0（+4.62）</span> —— 在 06-22 的 65.4 之后
              回硬、仍&ldquo;松&rdquo;但当日略紧。美元守住硬：DXY{' '}
              <span className="dn-tag bear">100.83（−0.02 当日）</span>、regime z{' '}
              <span className="dn-tag bear">+2.45</span>、偶发 z +2.09 —— EXTREME RISK-OFF、
              在 100 上方。Fed 净流动性{' '}
              <span className="dn-tag bear">$5.849T（−0.038T）</span>、regime z{' '}
              <span className="dn-tag">+0.05</span> 但偶发 z{' '}
              <span className="dn-tag bear">−2.42</span> —— 面板标的 |偶发 z| &gt; 1.5 当日
              变化惊讶。USD/JPY{' '}
              <span className="dn-tag bear">161.37（+0.08 当日）</span>、regime z +1.50、
              偶发 +1.85（对 06-22 平）；US-JP 10Y 利差{' '}
              <span className="dn-tag bear">1.81%（−3.0bp）</span>；USD/CNY{' '}
              <span className="dn-tag">6.7671</span>；WTI{' '}
              <span className="dn-tag">$84.7（陈旧 7d）</span>。{' '}
              <span className="dn-em">
                净：宏观背景与谱系相同的美元 / 实际利率 EXTREME RISK-OFF 逆风、利率
                略易、债波当日略硬 —— 一根 wash、不是 regime 转向。re-grow 闸：HY OAS 闸
                2.78% 距 12bp（现 2.66%）、10Y 闸 4.53% 距 7bp（现 4.46%、松回）。
                reclaim-long 利率筛（10Y &lt; 4.55%）在 4.46% 仍真。美元 / 实际利率回硬
                仍是叠在内生读法之上的真宏观逆风；信用与闸都没翻动尾论。
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
                <tr><td>US 10Y nominal</td><td className="num">4.46%</td><td className="num bull">−3.0bp</td><td className="num bear">+1.44</td><td className="bear">紧 · RISK-OFF · 陈旧 4d</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.21%</td><td className="num bull">−2.0bp</td><td className="num bear">+2.50</td><td className="bear">最紧线 · EXTREME RISK-OFF · 陈旧 4d</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.18%</td><td className="num bull">−5.0bp</td><td className="num">−0.69</td><td className="neut">软 · 偶发</td></tr>
                <tr><td>10Y breakeven</td><td className="num">2.23%</td><td className="num bull">−2.0bp</td><td className="num">−1.67</td><td className="neut">软 · 偶发</td></tr>
                <tr><td>HY OAS</td><td className="num">2.66%</td><td className="num">0.0bp</td><td className="num bull">−1.56</td><td className="bull">松 · risk-on 偶发</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.505</td><td className="num">0.00</td><td className="num">+0.24</td><td className="stale">周度 · 陈旧 10d</td></tr>
                <tr><td>MOVE 债波</td><td className="num">70.0</td><td className="num bear">+4.62</td><td className="num bull">−0.51</td><td className="bull">松 · 回硬（前 65.4）</td></tr>
                <tr><td>DXY</td><td className="num">100.83</td><td className="num">−0.02</td><td className="num bear">+2.45</td><td className="bear">EXTREME RISK-OFF · 在 100 上方</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.849T</td><td className="num bear">−0.038T</td><td className="num">+0.05</td><td className="bear">抽干 · 偶发 −2.42</td></tr>
                <tr><td>USD/JPY</td><td className="num">161.37</td><td className="num bear">+0.08</td><td className="num bear">+1.50</td><td className="bear">对 06-22 平</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">1.81%</td><td className="num bull">−3.0bp</td><td className="num bull">−1.11</td><td className="bear">RISK-OFF · 陈旧 4d</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7671</td><td className="num">−0.00</td><td className="num bull">−1.64</td><td className="neut">松</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">+13.5bp（月度）</td><td className="num bear">+2.56</td><td className="stale">月度 · 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、汇总 00:01Z ——{' '}
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。非对角线均值{' '}
              <span className="dn-tag">|r| 0.286</span> —— 较 06-22 的 0.288 略松、但仍在
              NORMAL 区段、且{' '}
              <span className="dn-signal">BTC 仍耦合 TradFi 风险复合体</span>。BTC 的顶级
              联系仍是股票 / 贵金属簇：SP500 <span className="dn-tag">+0.561</span>、NQ{' '}
              <span className="dn-tag">+0.511</span>、NVDA{' '}
              <span className="dn-tag">+0.459</span>、URNM{' '}
              <span className="dn-tag">+0.437</span>、GOLD{' '}
              <span className="dn-tag">+0.408</span>、SILVER{' '}
              <span className="dn-tag">+0.401</span>、COPPER{' '}
              <span className="dn-tag">+0.382</span>、MSFT{' '}
              <span className="dn-tag">+0.333</span>、能源复合体反向（CL{' '}
              <span className="dn-tag">−0.214</span>、BRENT{' '}
              <span className="dn-tag">−0.203</span>、NGAS{' '}
              <span className="dn-tag">−0.324</span>）、JPY{' '}
              <span className="dn-tag">−0.202</span>。7d 表现是整个风险复合体偏软、BTC
              垫底：<span className="dn-tag bear">BTC −3.34%</span>、NQ{' '}
              <span className="dn-tag bear">−0.63%</span>、SP500{' '}
              <span className="dn-tag bear">−1.09%</span>、JP225{' '}
              <span className="dn-tag bull">+4.38%</span>、NVDA{' '}
              <span className="dn-tag bear">−1.55%</span>、META{' '}
              <span className="dn-tag bear">−5.13%</span>、MSFT{' '}
              <span className="dn-tag bear">−7.82%</span>、GOOGL{' '}
              <span className="dn-tag bear">−6.23%</span>、AMZN{' '}
              <span className="dn-tag bear">−6.19%</span>、TSLA{' '}
              <span className="dn-tag bull">+0.04%</span>；金属软（GOLD{' '}
              <span className="dn-tag bear">−2.98%</span>、SILVER{' '}
              <span className="dn-tag bear">−7.00%</span>、PLAT{' '}
              <span className="dn-tag bear">−5.23%</span>）；能源崩（CL{' '}
              <span className="dn-tag bear">−7.19%</span>、BRENT{' '}
              <span className="dn-tag bear">−5.93%</span>、NGAS{' '}
              <span className="dn-tag bull">+2.85%</span>）。{' '}
              <span className="dn-em">
                BTC 的 7d 回报 −3.34% 对 NQ −0.63% 是 −2.71pt 的落后（06-22 是 −2.36pt）
                —— 性质与 06-22 一样：BTC 在一条整体翻红的风险盘面里跑输（NQ −0.63%、
                SP500 −1.09%、大盘科技 −5% 到 −8%、金属与能源都跌）、不是一根 TradFi 涨
                而 BTC 没跟的脱钩。内生于 crypto 的读法对下程结构仍成立（dealer γ 在
                重放大、重夺还回去、200W 地板守住周收）、但美元 / 实际利率回硬与一条软化
                的股票盘面仍是叠在其上的真宏观逆风。
              </span>{' '}
              JGB 月度 2.65% 带一根 EXTREME RISK-OFF 月度标 —— 不依赖。
            </p>

            <h2 className="dn-sec">
              交易本子 <span className="dn-roman">V · 本子平 · 200W 地板守住 22JUN 周收（现货未收盘周 +2.43%）—— 上三篇带的未决测试以守住收结 · scout 仍停摆（flip 重夺还回去、盘面失明、本子重放大）· 宏观尾闸未触发（10Y 距 7bp）· 挤压周期 ON HOLD（SM 死约 10.94 天）</span>
            </h2>

            <p>
              <span className="dn-signal">
                本子平、保持平 —— 周期地板过了周收测试、但短线重夺还了回去、dealer
                本子重放大、约束仍是数据完整性
              </span>。对 06-22 唯一一根真升级是实的：22JUN 周线收 $63,990、在 $62,443
              地板上方、所以 06-20 与 06-22 备忘标的周收测试以守住收结、200W 重夺论不再
              暂定。但建设性叠加没了：现货隔夜把 flip 与 D-EMA20 还了回去、dealer 本子
              重放大 −0.6M → −35.1M 净空 γ、26JUN 月度加深到 −41.99M（3.3 DTE）、净 MTF
              读退化到 1 多 / 7 空 / 2 中。scout 仍不能上：现货回到 flip 下方、各仓位腿
              （SM 空头泄、funding 姿态、cover-flow）全要一条活盘面、第七天没有、且在一条
              失明盘面上、向一个重放大的空 γ 本子上 scout long 不是一笔交易。也无新空：
              SM 本子不可读、地板刚守住周收、用陈旧 flow 与一根 γ 已计价的 3.3-DTE 月度
              去空一根守住的地板是差入场。今天的交易本子是：无空、无 scout、无新对冲 ——
              先修盘面 AND 看现货是重新夺回 flip 还是丢 D-SMA20 朝地板去、再重新装弹。
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 主仓 · 200W 周期地板盯位 —— 周收守住：22JUN 周线收 $63,990、在重算的 $62,443 地板上方 +2.48%、升级（周收 &lt; $62,440）没触发；06-20 / 06-22 备忘带的未决测试以守住收结、新的未收盘周当前在上方 +2.43%</span>
              <div className="dn-trade-name">
                200W 周期地板盯位 —— 上篇标的周收测试以守住收结：22JUN 周收 $63,990（+2.48%）在地板 $62,443 上方 = 全历史 W-SMA200（355 根敲定周 bar、比 06-22 钉位低约 $4）、新的未收盘周（06-29）当前报 $63,961（+2.43%）、五根敲定日收在上方
              </div>
              <div className="dn-thesis">
                06-20 备忘把周结（22JUN）设为决定事件、升级条件在周收 &lt; $62,440；06-22
                备忘把它当未决、未收盘测试带着。那根收现在印了：22JUN 结在{' '}
                <span className="dn-tag bull">$63,990、在重算的 $62,443 地板上方
                +2.48%</span> —— 升级<em>没</em>触发、所以 06-15 那根 200W 重夺论不再暂定；
                它是一根确认的周收守住。新的未收盘周（至 06-29）当前报 $63,961、在地板
                上方 +2.43%。五根敲定日收坐在它上方（06-18 $62,924 → 06-22 $63,990）、近期
                低点已停止插它（06-22 24h 收盘低 $63,433 坐得远远在上）、地板现在是一根
                在周收口径上经测试并守住的周期水位。<span className="dn-em">这是这篇里
                最干净的正面 —— 周期地板过了谱系在等的那道测试</span> —— 但它是一根慢
                水位、交易台仍无法确认守住它的 flow、短线盘面已滚回 flip 下方进一个重
                放大的本子。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W 地板</span><span className="dn-lvl-v">$62,443 = 全历史 W-SMA200、本次从 2019→ parquet glob 重算（355 根敲定周 W-MON bar、剔除未收盘 06-29 周）；比 06-22 钉的 $62,447 低约 $4（慢周 SMA）· weekly_200sma.json 缺、所以 ratio 百分位 / last-event 保持无源、非杜撰</span></div>
                <div><span className="dn-lvl-k">周收（测试已结）</span><span className="dn-lvl-v bull">22JUN 周收 $63,990、在地板上方 +2.48% —— 升级（周收 &lt; $62,440）没触发；200W 重夺论在周收口径上确认 · 新的未收盘周 $63,961、在上方 +2.43%</span></div>
                <div><span className="dn-lvl-k">升级（下一根周收）</span><span className="dn-lvl-v bear">一根持续的周收 &lt; $62,443 破 200W 地板 —— 一根日收在下方是早警、一根盘中 wick 不是破 —— 另起评估、重夺论死、下程进 26JUN 放大器恢复</span></div>
                <div><span className="dn-lvl-k">重夺侧（还回去）</span><span className="dn-lvl-v bear">现货隔夜丢 flip $64,580 与 D-EMA20 $65,188；只守 D-SMA20 $63,544（+0.66%）；重夺是 1h 收 &gt; flip 再 D-EMA20 —— 在失明盘面上不是 scout 触发（见 scout）</span></div>
              </div>
              <div className="dn-gating">
                <b>框架、不是交易。</b>地板盯位是唯一一根承重的活水位、其余全陈旧
                （实时盘面）或 framework only。它现在清了周收测试 —— 谱系里它带过最强的
                读 —— 但盯位上不开仓：它设升级位（下一根周收 &lt; $62,443）与重夺阶梯
                （flip $64,580 → D-EMA20 $65,188 → W-EMA200 $67,547）、交易台不会在一根
                无法确认的重夺上预先做多、也不会在一根刚守住周收的地板上做空、在一条
                失明盘面上。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout · 仍停摆 · 价格前置条件还回去（现货又在 flip 下方）+ 盘面失明约 10.94 天 + 本子重放大空 γ</span>
              <div className="dn-trade-name">
                回补反弹 scout —— 06-22 印出的 flip 重夺隔夜还了回去；scout 在失明盘面上、向一个重放大的空 γ 本子、净 MTF 读回到偏空、保持停摆
              </div>
              <div className="dn-thesis">
                06-22 备忘看到 scout 的价格前置条件终于印 —— 现货重夺 0-γ flip $64,635
                与 D-SMA20 —— 但在失明盘面与卖反弹 regime 下保持停摆。今晚价格前置条件
                <em>松开了</em>：现货从 $64,710 → $63,961、回到 flip $64,580 下方
                （−0.96%）、也在 D-EMA20 下方、只守 D-SMA20（+0.66%）。所以 scout 现在
                被三条挡住、不是两条。(1) 价格前置条件不再满足 —— 现货又在 flip 下方。
                (2) 各仓位腿（SM 空头泄、funding 姿态、cover-flow 确认）全要一条活盘面、
                没有 —— 交易台看不见隔夜下杀是派发还是稀薄漂移。(3) dealer 本子重放大到
                −35.1M 净空 γ、现货坐在 $64k −17.69M strike 上、在 $58k–$64k 簇内、所以
                本子现在<em>放大</em>下一步、不是阻尼它。{' '}
                <span className="dn-em">在一条仓位失明盘面上、flip 下方、向一个重放大的
                空 γ 本子、净 MTF 读回到偏空、scout long 不是一笔交易 —— 唯一的建设性
                反注是守住的周地板、1h TD9 buy 与 regime 翻到均值回归、其中没有一项足以
                在没有盘面下上仓。</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v bear">停摆 · 无入场 · 价格前置条件还回去（现货在 flip 下方）—— 只在实时盘面恢复 AND 现货重新夺回 flip 之后再评估</span></div>
                <div><span className="dn-lvl-k">技术前置条件</span><span className="dn-lvl-v bear">flip $64,580 / D-EMA20 $65,188 重夺（不真 —— 现货在两者下方、只守 D-SMA20 $63,544）AND 净 MTF 离开偏空 / 一根确认引擎印（不真 —— 1 多 / 7 空 / 2 中、1w 死叉新鲜、尽管 regime 翻均值回归且 1h TD9 buy 印了）</span></div>
                <div><span className="dn-lvl-k">数据前置条件</span><span className="dn-lvl-v bear">实时盘面恢复（当前冻结 137.4h）AND SM 馈源活（当前死约 10.94 天）—— 两者都要先成立、任何仓位腿才可读；这是约束块</span></div>
              </div>
              <div className="dn-gating">
                <b>硬规则：</b>没有活仓位盘面、不上 scout。守住的周地板、1h TD9 buy 与
                均值回归 regime 在 SM / funding / flow 腿失明、现货在 flip 下方、dealer
                本子在现货短 γ 时不触发 scout —— 交易台不会上一根它看不见正在被回补的
                回补反弹。06-22 解开的那道价格块已重新合上；操作块（盘面趴着）加上现在
                一道结构块（重放大空 γ）叠在一起。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 宏观尾 · put-spread re-grow 闸 —— 10Y 腿松回到距触发 7bp（4.46% 对 4.53% 闸）、HY OAS 腿距 12bp（2.66% 对 2.78%）· Tier-1 印出新鲜 Δ、仍带陈旧-4d 标</span>
              <div className="dn-trade-name">
                下行 put-spread —— re-grow 闸未触发、10Y 腿松回距闸 7bp；无对冲加（利率松一点、美元硬、债波回硬到 70.0）
              </div>
              <div className="dn-thesis">
                谱系带的宏观 re-grow 闸 —— HY OAS &gt; 2.78% OR 10Y &gt; 4.53% 作为重长
                一根下行尾的条件 —— 保持未触发、10Y 腿从距 4bp（06-22、4.49%）松<em>回</em>
                到距 7bp（今天、4.46%）：10Y 在 4.46%、HY OAS 在 2.66%（距 12bp）。
                reclaim-long 利率筛（10Y &lt; 4.55%）在 4.46% 仍真。宏观盘面与谱系相同的
                美元 / 实际利率 EXTREME RISK-OFF 逆风、MOVE 回硬到 70.0 —— 但宏观尾不是
                一根刚守住周收的地板的对的工具；剩下的集中下行风险是 26JUN 月度 −41.99M、
                dealer γ 已计价、3.3 DTE。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">无仓位 · 两腿闸都未触发 · 10Y 腿松回距闸 7bp</span></div>
                <div><span className="dn-lvl-k">re-grow 触发（下一根 Tier-1 印）</span><span className="dn-lvl-v bear">10Y &gt; 4.53% 收（当前 4.46%、距 7bp、松回）OR HY OAS &gt; 2.78% 收（当前 2.66%、距 12bp）</span></div>
                <div><span className="dn-lvl-k">reclaim-long 利率筛</span><span className="dn-lvl-v bull">10Y &lt; 4.55% 收 —— 在 4.46% 真；等一根 BTC 内部转向 AND 一条活盘面去转译</span></div>
              </div>
              <div className="dn-gating">
                <b>注意：</b>re-grow 闸是随水位漂动设的酌情盯位、不是回测断点。如果 10Y
                腿触发（它最近、尽管本次松回）、一根下行尾会在另一篇未来备忘里重评估
                （触发 / 失效 / R 在那里定）—— 且注意 dealer strip 带 26JUN 月度 −41.99M、
                所以任何这样的尾会叠加在既有 dealer 空 γ 之上、不是一根干净的独立对冲。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 挤压周期敌对-2 观察名单 · 无日历先验 · ON HOLD —— SM 馈源死约 10.94 天、重堆签名本次不可读</span>
              <div className="dn-trade-name">
                挤压周期敌对-2 —— ON HOLD（延续 06-16 / 06-18 / 06-19 / 06-20 / 06-22）：SM 馈源冻结约 262.5h、重堆签名本次不可读
              </div>
              <div className="dn-thesis">
                挤压周期 / 重堆-敌对-2 框架把离散 SM 步（Δshort &gt; 0 + Δlong &lt; 0 同
                一分钟）读作延续签名；它的日历先验（BJ 13–15 节奏）在 05-31 被证伪、此后
                作无先验观察名单跑。今天它因最简单的理由不可评估：SM 馈源死了。long_btc /
                short_btc / net_btc 自 2026-06-12 01:36Z 起不变（约 262.5h）、所以没有 SM
                Δ 可读。06-16 备忘在约 94.5h 把这 ON HOLD、06-20 备忘在约 190.5h、06-22
                备忘在约 255.7h；它在约 262.5h 仍 ON HOLD。{' '}
                <span className="dn-em">一根冻结馈源印不出签名；框架在 SM 数据恢复前
                是黑的。</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">框架状态</span><span className="dn-lvl-v bear">ON HOLD · SM 馈源冻结约 262.5h（自 2026-06-12 01:36Z）· 无 SM Δ 可算</span></div>
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
              决策条件 <span className="dn-roman">VI · 实时盘面停摆仍是操作条件（第七天）· 200W 地板守住 22JUN 周收（测试已结）· flip 重夺 + 本子去放大都还了回去 —— 本子重放大 −35.1M、26JUN 月度加深到 −41.99M（3.3 DTE）· scout 停摆（价格块重合）· 宏观 10Y 闸松回到距 7bp</span>
            </h2>

            <p>
              06-22 那张条件里：实时盘面<em>没</em>回来 —— 它又深了约 6.8h、现冻结 137.4h、
              SM 馈源约 10.94 天；200W 地板周收测试<em>以守住收结</em>（22JUN 收 $63,990、
              在地板上方 +2.48%、升级没触发）；作为 scout 价格前置条件的 flip 重夺还了
              回去（现货在 flip 下方 −0.96%）；dealer 本子从 −0.6M flat 重放大到 −35.1M
              净空 γ、26JUN 月度加深 −28.36M → −41.99M（3.3 DTE）；scout 价格块重合上；
              宏观 re-grow 闸保持未触发、10Y 腿松回到距 7bp；挤压周期在更深馈源上保持
              ON HOLD。主导条件没变：<em>交易台仓位失明、现在进一个守住周收的地板、它坐在
              一根失败重夺与一个交易台无法确认的重放大空 γ 本子之下</em>。今天的条件围绕
              持续的停摆、已结的周收地板守住、还回去的重夺、与重新装弹的 26JUN 放大器
              重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>实时盘面恢复（主操作）</td><td className="bull">live_db.json 恢复写 2026-06-17 06:43Z 之后的新鲜行 AND SM 三元组离开其 06-12 01:36Z 冻结更新</td><td>完整重读 funding / OI / flow / SM；只有那时才能评估 scout 或挤压周期 —— 也只有那时才能把隔夜 flip 上的下杀确认为派发还是漂移；仓位这一维现已失明五篇</td></tr>
                <tr><td>200W 地板 —— 周收守住（测试已结）</td><td className="bull">22JUN 周收 $63,990、在 $62,443 地板上方 +2.48%；升级（周收 &lt; $62,440）没触发；新的未收盘周 $63,961、在上方 +2.43%；五根敲定日收在上方</td><td>06-20 / 06-22 备忘带的地板测试以守住收结 —— 06-15 重夺论在周收口径上确认；不开仓、慢水位是承重活读</td></tr>
                <tr><td>200W 地板丢（周期 regime 升级）</td><td className="bear">持续的周收 &lt; $62,443（W-SMA200 地板）；一根日收在下方是早警、一根盘中 wick 不是破</td><td>破 200W 地板 —— 另起评估；06-15 重夺论被证伪、下程进 26JUN26 月度 −41.99M 放大进 opex 恢复</td></tr>
                <tr><td>flip 重夺（scout 价格前置条件）—— 还回去</td><td className="bear">现货 $63,961 在 flip $64,580 下方 −0.96%、也在 D-EMA20 $65,188 下方；只守 D-SMA20 $63,544（+0.66%）；重夺 1h 收 &gt; flip 再 D-EMA20</td><td>06-22 印的价格前置条件松开了 —— 重新夺回 flip 是重开 scout 评估的第一步、但仅 IF 实时盘面也恢复；在 flip 下方的失明盘面上、重夺是盯、不是交易</td></tr>
                <tr><td>26JUN26 月度放大器（3.3 DTE）—— 重加深、净本子重放大</td><td className="bear">26JUN −41.99M（06-22 是 −28.36M）、aggregate GEX −35.1M（06-22 是 −0.6M flat）；近端 strip 23–25JUN 现在转负；现货坐在 $64k −17.69M strike 上、在 $58k–$64k 簇内</td><td>dealer 本子在现货重新装上净空 γ —— 它放大下一步；唯一一块集中下行风险是 26JUN 月度 3.3 DTE；只盯、本篇无做空指令（任何未来设置自定触发 / 失效 / R）</td></tr>
                <tr><td>宏观尾 re-grow（10Y 腿松到距 7bp）</td><td className="bear">10Y &gt; 4.53%（距 7bp、从 4bp 松回）OR HY OAS &gt; 2.78%（距 12bp）—— Tier-1 印出新鲜 Δ、仍带陈旧-4d 标</td><td>本篇无对冲指令 —— 一根闸触发（10Y 最近）会在另一篇未来备忘里重评估；注意任何这样的尾会叠加在既有 dealer 空 γ −41.99M 之上</td></tr>
                <tr><td>reclaim-long 利率筛</td><td className="bull">10Y &lt; 4.55% 收 —— 在 4.46% 真</td><td>独立筛已真；需要一根 BTC 内部转向 AND 一条活盘面才能转成 scout long</td></tr>
                <tr><td>挤压周期敌对-2（ON HOLD）</td><td className="stale">SM 馈源死约 262.5h；无 Δ 可算</td><td>悬置、不是负 —— 馈源恢复后第一批新鲜 SM Δ 重新装弹</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是{' '}
              <span className="dn-signal">
                现货是否重新夺回 flip $64,580 与 D-EMA20 / W-EMA200 阶梯 —— 交易台在
                失明盘面上仍无法 scout —— 还是那根重新装弹的 26JUN26 月度 −41.99M、现
                3.3 DTE、唯一一块集中块、在 opex 前把一根下杀拖穿 D-SMA20 $63,544 回到
                $62,443 地板；上三篇的去放大隔夜反转了（aggregate −0.6M → −35.1M、现货
                回到 flip 下方、进负 γ 簇）、所以结构风险回厚到这一根月度、而结构正面 ——
                200W 地板守住它的 22JUN 周收 —— 已确认但慢、且坐在一根交易台仍无法读
                仓位的失败重夺之下
              </span>。在盘面恢复之前、本篇按写好的跑：本子平、scout 价格块重合上、宏观尾
              闸未触发、10Y 腿松回到距 7bp、挤压周期悬置、200W 地板盯位是唯一一根活水位
              —— 现在是一根经测试并守住的周收地板。价格与 MTF 在周收上守住地板、但把短
              框架滚回云下、dealer 本子重放大空 γ、现货穿回 flip 下方；宏观是相同的美元 /
              实际利率逆风、利率略易、债波略硬、BTC 在一条整体翻红的 TradFi 盘面里垫底。
              下一个 24h 的对读是{' '}
              <em>地板已确认但重夺失败 —— 尊重守住的周地板、盯 flip 重夺对 D-SMA20 丢失
              进 26JUN 放大器、在读仓位前先修盘面、不要 scout 一根已经被还回去的重夺</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2 —— 已过 codex 敌对式审计
            </span>
            <b>状态：</b>这是 <b>v2</b> 备忘、由 STAGE C 在 STAGE B codex 敌对式跨模型
            审计返回 <b>PASS-WITH-NOTES —— 0 CRITICAL + 0 MAJOR + 4 MINOR</b> 后晋级
            （完整记录在 <code>audits/2026-06-23-desk-note.md</code>）。每条 codex
            finding 都已就地应用、并在晋级前对全 EN 文件做了 grep-closure 核验；补充的
            ask-deepseek 数值二审按 runbook §5 裁定（codex 拥有发布门；GLM 不是审计者）。
            Findings &amp; grep-closure：<b>DN-001</b>（MINOR —— 把测试后地板守序列多数成
            &ldquo;六根敲定收&rdquo;）：搜 <code>six</code> / <code>Six finalized</code> /{' '}
            <code>six finalized closes</code>；修前 4 处命中、统一为 <b>五</b>（06-18 →
            06-22、突破后的守住）、修后 0 命中 —— <b>RESOLVED</b>。<b>DN-002</b>（MINOR
            —— 未收盘 06-29 周被写成&ldquo;opens $63,961 / +2.43%&rdquo;、但那是 00:05Z
            parquet 最末 bar 读、不是周开）：搜 <code>opens </code> 与&ldquo;in-progress
            week $63,961&rdquo;水位变体；修前 6 处、改为 <b>currently reads / reads</b>、
            修后 0 命中（只剩无关的&ldquo;re-opens scout&rdquo;/&ldquo;opened the 200W
            reclaim&rdquo;）—— <b>RESOLVED</b>。<b>DN-003</b>（MINOR —— &ldquo;$58k–$64k
            簇合计约 −78M&rdquo;只重构了列出的主力墙、不是全 strike 剖面、后者约 −81M
            到 −85M）：搜 <code>now totals roughly −78M</code>；修前 1 处、限定为
            <b>&ldquo;$58k–$64k 列出的主力墙合计约 −78M&rdquo;</b>、修后 0 命中 ——{' '}
            <b>RESOLVED</b>。<b>DN-004</b>（MINOR —— &ldquo;月度之后 strip 转正&rdquo;却
            紧接着把 3JUL26 列为 −0.75M）：搜 <code>turns positive</code>；修前 1 处、改为
            <b>&ldquo;小而杂 —— 3JUL 仍小幅为负 —— 之后从 10JUL 起多数转正&rdquo;</b>、
            修后 0 命中 —— <b>RESOLVED</b>。从 ask-deepseek 二审裁定并为内部一致性一并
            修的：manifest HY OAS Δ（原是隐含 <code>2.63% → 2.66%</code> +3bp、对表里的
            0.0bp 源日 Δ；<code>2.63</code> 1→0、现 <b>2.66%（0.0bp）</b>）、manifest DXY
            标（原 <code>unchanged</code>、对表里的 −0.02；现 <b>−0.02 当日</b>）、SM-net
            取整分量（原 <code>13.53k − 50.83k</code> 相减得 −37.30k、对显示的 −37.29k；
            现精确 <b>13,532.4 − 50,825.7</b> = −37,293.3 → −37.29k）与停摆步（原
            <code>~7h</code>：130.6 + 7 = 137.6 ≠ 137.4；现 <b>~6.8h</b>、130.6 + 6.8 =
            137.4）。ask-deepseek 的&ldquo;aggregate GEX −35.1M 对 expiry 求和
            −24.82M&rdquo;CRITICAL 经裁定 <b>驳回</b>：codex 已对 <code>btc_gex.html</code>
            核过 −35.1M 现货参照 aggregate 与逐 expiry 行；逐 expiry 分解无需求和等于
            现货参照的 net GEX。总体：<b>已过 codex 敌对式审计</b>、四条 codex MINOR 全
            RESOLVED（grep 修后命中 = 0）、拥有发布门的审计未提任何 CRITICAL 或 MAJOR。{' '}
            <b>Build note（INFO）：</b>本服务器跑 Node 18.19.1；完整 <code>next build</code>
            在 Node 版本门上被环境阻塞（谱系）、所以 <code>npx --no-install tsc --noEmit</code>
            是 build proxy —— STAGE E 拥有最终 build 验证。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体情况个性化。
            数字反映单一原子快照（2026-06-23 00:08Z）、provenance 在上方数据来源条带中
            按节披露；<em>关键是、实时衍生品盘面在快照时已冻结 137.4h（末行 2026-06-17
            06:43Z）、聪明钱仓位馈源已死约 10.94 天</em>、所以一切 funding、OI、flow 与
            仓位数字都明确是最后已知 / 陈旧或不可计算、并已如此标注；宏观面板渲染
            2026-06-22 22:15Z（比快照早约 1.9h）、其 Tier-1 序列带陈旧-4d 标、尽管印出了
            新鲜 Δ。价格、MTF、GEX 与跨资产是新鲜的。这是 v2 备忘、在 STAGE B codex 敌对式
            审计后晋级。水位、规模与条件是交易台流程的示例、不是长期推荐。过去的相关性、
            γ 与仓位模式不绑定未来盘面。衍生品有全损风险、加杠杆下损失可超过保证金。
            <em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                周期地板过了它的周收测试 —— 22JUN 收在 $62,443 上方 —— 但隔夜盘面把
                flip 重夺还了回去、dealer 本子重放大空 γ 进 26JUN opex、全部透过一条死了
                第七天的盘面读。地板已确认。重夺失败。盲读。
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
            v2 · 2026-06-23 00:08Z 快照 · 已过 codex 敌对式审计 · sources:
            live_db.json（冻结 137.4h）· mtf_div_latest.html · btc_gex.html ·
            macro_dashboard.html · cross_asset_correlation_summary.md ·
            btcusdt_1m_*.parquet · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
