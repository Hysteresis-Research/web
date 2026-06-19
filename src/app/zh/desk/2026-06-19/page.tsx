import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-06-19 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-06-19',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-06-19' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260619() {
  await requireViewer('/zh/desk/2026-06-19');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-06-19 · v2</span>
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
              <span className="dn-big">$62,924</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−2.59%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-06-19 00:06Z ·{' '}
              <span className="dn-em">
                实时盘面停摆继续——OKX 监控已冻结 41.4h；价格 / MTF / GEX /
                宏观 / 跨资产都新鲜、衍生品盘面仍黑
              </span>
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 最末行 2026-06-17 06:43Z（t =「06-17 14:43」BJ）</td>
                  <td className="dn-flag">
                    <b>冻结</b> · live_db.json 自 2026-06-17 06:43Z 起没再写新行
                    （文件 mtime 确认）；进程状态本次未存档 / 未核实 —— 较
                    00:06Z 快照锚现已 <b>41.4h 陈旧</b>（06-18 备忘时是 17.4h
                    —— 停摆又跑满一整天）。funding / OI / CVD / basis / retail /
                    taker-flow 都是 06-17 06:43Z 的<b>最后已知值</b>、不是当前
                    读。SM 子盘面（long_btc / short_btc / net_btc）冻得更久——
                    自 2026-06-12 01:36Z 起恒定（~166.5h / ~6.9 天）；SM net
                    与 SM cut-fraction 本次 <b>不可计算</b>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-19 00:01Z scan</td>
                  <td className="dn-flag">
                    新鲜（锚前约 5 分钟）· 滚动 latest 文件、逐字存档于
                    /opt/desk-note/snapshots/2026-06-19-0006/ · 含未收盘 K 线 ·
                    扫描现货 $62,890、24h −2.49%、24h H/L $64,780 / $62,232、
                    qVol $11.91B
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-19 00:00Z 快照</td>
                  <td className="dn-flag">
                    新鲜 · Deribit idx $63,071（比 parquet 现货 $62,924 高
                    $147）· 976 合约 · net GEX −111.1M（净空 γ —— 约为 06-18
                    备忘 −47.8M 的 2.3 倍）· flip $64,641（现货在下方）· 今日
                    19JUN26 0.3DTE −42.35M 块在 08:00Z 结算（≈ 本快照后 8h、
                    尚未清）；主导块是 26JUN26 月度 −55.30M、7.3 DTE（从 06-18
                    的 −41.45M 长上来）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-19 00:00Z
                  </td>
                  <td className="dn-flag">新鲜 · 7d 1h bar · 22 资产 · 167 rows · regime NORMAL（均值 |r| 0.325、从 06-18 的 0.393 松下来）</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-18 22:15Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.85h · FRED Tier-1 在利率 / 美元侧转硬（10Y
                    +6bp 到 4.49%、TIPS +9bp 到 2.23%、DXY +0.72 到 100.81 ——
                    EXTREME RISK-OFF）、信用松（HY OAS −8bp 到 2.63%、RISK-ON
                    偶发）· Fed 净流动性抽干 −0.038T 到 $5.849T
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-06-19 00:05Z（close $62,924）</td>
                  <td className="dn-flag">
                    新鲜 K 线（交易所 OHLC、独立于冻结的实时盘面）· 偏移按
                    parquet 最末 bar close 重算、那是实时盘面冻结时能拿到的最
                    新现货 · 显示阶梯用 2023→ 子集（182 根周 bar）、所以没
                    W-SMA200 行；200W 地板直接从全历史 glob 重算 —— 355 根周
                    W-MON bar（2019→ 至今）—— = <b>$62,438</b>、比 06-16 /
                    06-18 备忘钉的 $62,230 爬高了 ~$208（一根慢周 SMA、~$250/
                    周）· weekly_200sma.json 本次缺、但不阻塞 parquet 重算
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
              <span className="dn-v bear">−7.24%（陈旧 · 06-17 06:43Z · 41.4h）</span>
              <span className="dn-src">live_db 原始 funding −0.006608 × 1095 = −7.24% ann（不是 ×100）· 06-17 06:43Z 冻结时的最后已知值、现已 41.4h 陈旧、不是当前读 · 截到冻结的 24h+1m 含端采样窗（1,442 行）：均值 +0.20%、区间 −7.24% / +7.21%、819 / 1,442 行为负 —— 盘面死掉那一刻是一本平衡的双向本子</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 对 06-18</span>
              <span className="dn-v">盘面冻结 —— 不可计算</span>
              <span className="dn-src">实时盘面自 06-17 06:43Z 起没再写、所以仍没有当前 funding 去对 06-18 备忘作差 · 冻结时最后已知印是 −7.24% ann（空付多）；杠杆门连续第二天无法评估</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−468 BTC（−0.45%）· 陈旧窗</span>
              <span className="dn-src">live_db oi_btc 06-17 06:43Z 冻结时 102,945、对一根 24h+1m 含端采样窗（1,442 行）起点 · 该窗<b>截到冻结</b>、不是进 00:06Z 快照 —— 它描述的是截到 06-17 06:43Z 的盘面、已 41.4h 过期</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bear">59.47 / 40.53 · 陈旧</span>
              <span className="dn-src">live_db `mkt_long_pct` 06-17 06:43Z 冻结时值（24h+1m 含端采样窗起点是 58.29% —— 翻仓里 +1.18pt 加多）· 最后已知、41.4h 陈旧</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">−37.29k · 盘面死 ~166.5h</span>
              <span className="dn-src">long 13.53k − short 50.83k · 这一组三元自 2026-06-12 01:36Z 起逐字节恒定（~166.5h / ~6.9 天）—— 是一个<b>冻结值</b>、不是当前仓位读；只为标记死盘面而带着</span>
            </div>
            <div>
              <span className="dn-k">SM Δ / cut fraction</span>
              <span className="dn-v">不可计算</span>
              <span className="dn-src">SM 盘面冻 ~6.9 天 · |Δ| / prior_net 算不出 —— 没有当前 SM net 去作差 · squeeze-cycle / 重堆框架本次失明、是 06-16 / 06-18 ON-HOLD 的延续</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">44.9% / 42.76%</span>
              <span className="dn-src">GEX 中位 IV 横跨 976 合约（00:00Z、新鲜）对 30D close-to-close RV 42.76%（自 parquet）—— 链级 richness 只 ~+2.14pt、一道薄 vol 溢价；RV 仍高（06-18 是 42.67%、05-31 是 24.91%）—— vol 对已实现不便宜</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bear">−2.66%（在下方）</span>
              <span className="dn-src">flip $64,641 · 对 parquet 现货 $62,924（62,924 / 64,641 − 1 = −2.657%）/ GEX 文件 Deribit idx $63,071（63,071 / 64,641 − 1 = −2.429%）—— 两参考都在 flip 下方、tile 取现货侧 −2.66% · net GEX −111.1M（净空 γ、放大）· 26JUN26 月度 −55.30M 是主导块、今日 19JUN 0DTE −42.35M 在 08:00Z 结算</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                06-18 交回的那次重夺已经延伸成一场地板测试、而交易台还在透过
                一根死盘面读它
              </span>
              。BTC 在 <span className="dn-tag bear">06-18 日收又丢 −$1,549</span>
              （$64,473 → $62,924）—— 自 06-15 高点 $66,286 起连续第三根红收 ——
              24h 低 <span className="dn-tag bear">$62,232 @ 2026-06-18 15:57Z</span>
              <span className="dn-em">插针穿过</span>了刚重算的 200W 地板才收回来。
              现货 $62,924（parquet 最末 bar 00:05Z）现在只
              <span className="dn-tag bull">在全历史 W-SMA200 地板 $62,438 上方
              +0.78%</span> —— 现货下方唯一一根 MA、比 06-18 备忘的 +3.7% 缓冲
              紧得多。dealer 本子对它加深：aggregate GEX
              <span className="dn-tag bear">−47.8M → −111.1M</span>、现货
              <span className="dn-tag bear">在 0-γ flip $64,641 下方 −2.66%</span>、
              最重的几堵 γ 墙 —— $63k −40.18M、$62k −35.18M、$60k −28.33M、全是
              put —— 正坐在现货处与下方、连同
              <span className="dn-tag bear">26JUN26 月度放大器长到 −55.30M
              （7.3 DTE）</span>、今日
              <span className="dn-tag bear">19JUN 0DTE −42.35M</span> 在 08:00Z
              结算（≈ 本快照后 8h）。MTF 维持
              <span className="dn-tag bear">多周期空头共振（1 多 / 8 空 / 1
              中性、卖反弹）</span>、配一根新鲜的 1h 水下金叉与一根 4h ⚡ TD9
              BUY 当作里面仅有的缓和音。
              <span className="dn-em">
                当日的操作事实没变、仍绑死全篇：OKX 监控已冻结 41.4h（最末行
                2026-06-17 06:43Z）、所以 funding、OI、CVD、basis、retail 都是
                最后已知且陈旧、SM 仓位本子已死 ~6.9 天 —— SM net 与 cut-
                fraction 不可计算。交易台带着一场地板测试、却仓位失明。
              </span>{' '}
              信念维持封顶：交易本子空仓且防守、scout 双重封锁（空头 MTF +
              失明盘面）、唯一的活决策是一根周收是否在 26JUN 放大器前丢掉
              $62,438 地板 —— 在实时盘面恢复前、只凭价格与 γ 判。
            </p>

            <p>
              BTC 在 parquet 最末 bar（00:05Z）报
              <span className="dn-tag">$62,924</span>、24h
              <span className="dn-tag bear">−2.59%</span>（对一天前的 $64,596；
              MTF 扫描在它自己 00:01Z 窗读 −2.49%、日对日收是 −2.40% —— 差是
              参考窗、不是数据冲突）、在一条
              <span className="dn-tag">$64,780 / $62,232</span> 24h 区间里（高
              @ 2026-06-18 01:12Z、低 @ 2026-06-18 15:57Z）。Deribit index 在
              00:00Z 读 $63,071、06-19 进行中的盘口一直平 —— 开 $62,924、区间
              $62,959 / $62,866 —— 所以最新现货被两个独立新鲜源（parquet K 线
              与 GEX Deribit index）很好地互证、即便平时供它的 live_db 盘面冻在
              $65,616（06-17 06:43Z、41.4h 陈旧）。
              <span className="dn-signal">结构读已经从翻仓走到地板测试</span>：
              06-15 周收 $66,286 兑现了 06-16 备忘领头的那次 200W 重夺、但此后
              三根红日收 —— 06-16 $65,645、06-17 $64,473、06-18 $62,924 —— 把
              突破整根交回、把价格落到地板上。周期地板 $62,438（本次重算为全
              历史 W-SMA200 —— 自 2019→ parquet glob 的 355 根周 W-MON bar ——
              对 06-16 / 06-18 备忘钉的 $62,230；该水位随更老的低 bar 滚出
              200 周窗已爬高 ~$208）现在只在现货下方 ~+0.78%、而 06-18 低
              $62,232 盘中已经在它下方 ~0.33% 插过针才收回来。
              <span className="dn-em">
                这是地板在被实时测试、在一本最重的墙都坐在它处与下方的净空 γ
                本子里。测试是否转成一根持续的周收破、取决于交易台当前看不见
                的流向。
              </span>
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面冻结 41.4h · SM 本子死 ~6.9 天 · funding/OI/flow 最后已知陈旧 · 交易台带着一场地板测试仓位失明</span>
            </h2>

            <p>
              <span className="dn-signal">
                本篇最重要的单一来源 —— 实时衍生品盘面 —— 仍然宕着、连续第
                二天
              </span>
              。OKX 监控自 <span className="dn-tag bear">2026-06-17 06:43Z</span>
              （t =「06-17 14:43」BJ；文件 mtime 确认写入停在那里；进程状态本
              次未存档或核实、所以本篇断言的是缺失的盘面、不是一根 live/挂死
              的进程）起没再给 live_db.json 续行。那现在是
              <span className="dn-tag bear">41.4h 的缺失盘面</span>、对 00:06Z
              快照锚 —— 06-18 备忘标在 17.4h、停摆又跑满一整天没写。实时盘面
              带的一切 —— funding、未平仓、现货/期货 CVD、perp basis、retail
              多%、taker-net、大单流、aggressor skew —— 因此都是
              <span className="dn-em">06-17 06:43Z 的最后已知、不是当前</span>。
              smart-money 仓位三元（long_btc / short_btc / net_btc）逐字节恒定
              —— <span className="dn-tag">13,532.4 / 50,825.7 / −37,293.3</span>
              —— 自 <span className="dn-tag bear">2026-06-12 01:36Z</span> 起、
              ~166.5h（~6.9 天）。06-16 备忘把这根死盘面标在 ~94.5h、把 squeeze-
              cycle 放 ON HOLD；06-18 备忘带在 ~142h；今天是 ~166.5h、仍死。
              <span className="dn-em">
                SM net 作为当前读不可计算、SM cut fraction（|Δ| / prior_net）
                也组不出来 —— 没有当前 SM net 去作差。本篇里任何仓位主张都明确
                是历史的、不是 live。
              </span>
            </p>

            <p>
              为完整起见、<em>最后可得</em>的盘面读 —— 全部钉在 06-17 06:43Z
              冻结、现已 41.4h 过期 —— 是：funding
              <span className="dn-tag bear">−7.24% ann</span>（原始 −0.006608 ×
              1095；冻结时空付多）、最后可得路径在 24h+1m 含端采样窗内双向
              平衡（1,442 行：均值 <span className="dn-tag">+0.20% ann</span>、
              区间 <span className="dn-tag">−7.24% / +7.21%</span>、819 / 1,442
              行为负）；OI <span className="dn-tag bear">102,945 BTC、跨尾部
              24h+1m 窗 −468（−0.45%）</span>；retail
              <span className="dn-tag">mkt_long_pct 59.47%</span>（同窗内
              +1.18pt 加多）；perp basis
              <span className="dn-tag bear">−$57.43 折价</span>对现货（窗均
              −$58.62、区间 −$146.17 / +$67.04 —— basis 在窗内确实触过一小段
              升水）。
              <span className="dn-em">
                把这读成一枚近两天前的指纹、不是信号：一本双向 funding 本子、
                OI 在泄、retail 在弱势第一腿里加多。没有一条能搬到 00:06Z 快照
                —— 而关键是它早于整段把价格推上地板的 06-18 抛售、所以它对
                仓位如何吸收那次移动什么都没说。交易台把仓位维度当作未知。
              </span>
            </p>

            <h2 className="dn-sec">
              结构 <span className="dn-roman">II · 价格/MTF 新鲜 · 多周期空头共振、卖反弹 · 现货在每一根显示 MA 下方、D-SMA20 是唯一近线 · 200W 地板 $62,438 盘中被插针、收盘守住</span>
            </h2>

            <p>
              <span className="dn-signal">
                MTF 图新鲜、全盘读空
              </span>
              —— 连同 dealer 图、这是交易台今天还能信的一维。00:01Z 扫描标
              <span className="dn-tag bear">10 帧里 1 多 / 8 空 / 1 中性</span>、
              净读 <em>多周期空头共振、卖反弹</em>、在一个 6/9 周期反转 regime
              里（JT&lt;0、偏均值回归 / 反弹、趋势跟随被告诫）。短中帧是一道
              空头堆 —— 15m / 30m / 1h / 4h / 8h / 12h / 1d / 3d 都偏空 ——
              仅有的反向信号是该 regime 偏好的缓和簇：一根新鲜的
              <span className="dn-tag bull">1h 水下金叉（刚印、DIF −486.9、一根
              水下早叉）</span>、一根
              <span className="dn-tag bull">4h ⚡ TD9 BUY 在 $62,887（超卖反转
              暗示）</span>、以及 15m / 30m / 1h 上的底背离簇。1M 是唯一一根多
              帧（云上、Buy 8 → 9?）、1w 区间震荡。
              <span className="dn-em">
                直读：带起 06-11..06-15 重夺的那波反弹已经整根翻倒、慢帧从没
                确认过它（1d / 3d / 1w 都在云下、深度偏离）、唯一的建设性音是
                反转 regime 标出的短帧缓和信号 —— 一个在地板处空头共振里的超卖
                反弹形、不是转向。4h TD9 BUY 与 1h 水下金叉正是那种能在地板上
                点出一根插针-收回反弹、却不改变结构下读的缓和印。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">62,892</td><td className="num">47.8</td><td className="bull">金叉（水下）23b</td><td className="bear">云下 ↑63.1k 42b</td><td>Sell 4</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">62,892</td><td className="num bear">41.2</td><td className="bull">金叉（水下）8b</td><td className="bear">云下 ↑64.2k 60b</td><td>Sell 1</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">62,892</td><td className="num bear">37.6</td><td className="bull">金叉（水下）刚印</td><td className="bear">云下 ↑65.2k 29b</td><td>Buy 2</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">62,887</td><td className="num bear">37.5</td><td className="bear">死叉（水上）14b</td><td className="neut">云内 62.1k–63.5k 3b</td><td>⚡ TD9 BUY</td><td>BEAR reg</td></tr>
                <tr><td>8h</td><td className="num">62,887</td><td className="num">40.1</td><td className="bear">死叉（水上）3b</td><td className="bear">云下 ↑63.9k 2b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">62,887</td><td className="num bear">37.1</td><td className="neut">—</td><td className="bear">云下 ↑66.9k 55b</td><td>Buy 6</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">62,890</td><td className="num bear">34.8</td><td className="bull">金叉（水下）6b</td><td className="bear">云下 ↑74.5k 18b</td><td>Buy 2</td><td>BEAR hid</td></tr>
                <tr><td>3d</td><td className="num">62,890</td><td className="num bear">36.6</td><td className="bear">死叉（水上）8b</td><td className="bear">云下 ↑74.1k 6b</td><td>Sell 3</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">62,890</td><td className="num bear">35.2</td><td className="neut">—</td><td className="bear">云下 ↑100.3k 20b</td><td>Buy 5</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">62,890</td><td className="num">42.4</td><td className="neut">—</td><td className="bull">云上 ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 00:01Z scan（滚动 latest 文件；
                    逐字存档于 /opt/desk-note/snapshots/2026-06-19-0006/）。
                    头部告警：<em>1h 水下金叉（刚印、DIF −486.9）</em>、
                    <em>4h ⚡ TD9 BUY 在 $62,887（超卖反转暗示）</em>。扫描现货
                    $62,890、24h −2.49%、24h H/L $64,780 / $62,232、qVol
                    $11.91B。收盘为未收盘 K 线；每个值在各周期收盘前都按临时
                    处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵是和 06-18 同一张单向图、现在地板几乎到了现货下面：
              $62,924 <span className="dn-em">坐在阶梯上每一根显示线下方</span>、
              任何显示 MA 上都没有正偏移 —— 现货下方唯一一根 MA 是全历史
              W-SMA200 的 200W 地板 $62,438（~+0.78% 在它上方）。头顶唯一近线是
              <span className="dn-tag bear">D-SMA20 $64,533（−2.49%）</span> ——
              接着是 <span className="dn-tag bear">D-EMA20 $65,778（−4.34%）</span>
              与周期代理 <span className="dn-tag bear">W-EMA200 $67,572
              （−6.88%）</span>。中段阶梯是一道深墙：
              <span className="dn-tag bear">D-EMA50 $69,693（−9.71%）</span>、
              <span className="dn-tag bear">W-SMA20 $71,451（−11.93%）</span>、
              <span className="dn-tag bear">D-SMA100 $72,431（−13.12%）</span>、
              <span className="dn-tag bear">D-SMA150 $72,566（−13.29%）</span>、
              <span className="dn-tag bear">D-EMA100 $72,578（−13.30%）</span>、
              <span className="dn-tag bear">D-SMA50 $72,695（−13.44%）</span>、
              <span className="dn-tag bear">W-EMA150 $74,200（−15.20%）</span>、
              <span className="dn-tag bear">W-EMA20 $74,416（−15.44%）</span>、
              <span className="dn-tag bear">D-EMA150 $75,396（−16.54%）</span>、
              <span className="dn-tag bear">W-SMA150 $75,446（−16.60%）</span>、
              <span className="dn-tag bear">D-SMA200 $77,009（−18.29%）</span>、
              <span className="dn-tag bear">D-EMA200 $78,094（−19.43%）</span>。
              更高更远、已弃用：W-EMA100 $80,947（−22.27%）、W-EMA50 $82,619
              （−23.84%）、W-SMA100 $88,516（−28.91%）、W-SMA50 $90,967
              （−30.83%）。结构性近线集合窄而单向：D-SMA20 / D-EMA20 / W-EMA200
              在头顶、从 −2.49% 到 −6.88%、全历史 200W 地板 $62,438 仅在下方
              ~+0.78% —— 地板到首根重夺线（D-SMA20 $64,533）之间是一道
              <span className="dn-tag">~$2.1k</span> 带、从 06-18 的 ~$2.9k 随
              价格滑进地板而收窄。
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-06-19 00:05Z（close $62,924.20）；
                偏移按那同一根 close 算、那是实时盘面冻结时能拿到的最新现货。
                显示的 MA 水位按 $ 取整、偏移用精确序列值算。显示阶梯用 2023→
                子集（182 根周 bar）、所以 W-SMA200 不是矩阵行；但 200W 地板
                从全历史 glob 可计算 —— 355 根周 W-MON bar（2019→ 至今）给出
                W-SMA200 $62,438。那比 06-16 / 06-18 备忘钉的 $62,230 高 ~$208：
                地板是一根慢周 SMA（~$250/周）、随更老的低 bar 滚出 200 周窗
                而爬高、所以重算是一次诚实的重钉、不是冲突。percentile 与
                last-event 仍无源（weekly_200sma.json 缺）、不编造。日线收盘：
                06-13 $64,418、06-14 $65,702、06-15 $66,286、06-16 $65,645、
                06-17 $64,473、06-18 $62,924、06-19（进行中）$62,924 —— 06-15
                高点、然后三根红收把突破整根交回到地板上。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子净空 γ −111.1M（≈ 06-18 的 2.3 倍）· 现货在 flip $64,641 下方 · 26JUN26 月度 −55.30M 是主导放大器（7.3 DTE）· 19JUN 0DTE −42.35M 在 08:00Z 结算 · 最重 put 墙 $60k–$63k 在现货处与下方</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子深度净空 γ、现货正坐在它最重的墙上 —— 一张最大化
                放大下行的图
              </span>
              。aggregate GEX 是 <span className="dn-tag bear">−111.1M / 1%</span>
              （06-18 是 −47.8M —— 空 γ 约深 2.3 倍、下跌把现货拉进负带）、
              0-γ flip 是 <span className="dn-tag">$64,641</span>、现货在
              <span className="dn-tag bear">下方 −2.66%</span>（现货口径 62,924 /
              64,641 − 1 = −2.657%）；GEX 文件自己的「dist to flip」对它的
              Deribit idx $63,071 读 <span className="dn-tag bear">−2.43%</span>
              （63,071 / 64,641 − 1 = −2.429%）—— <span className="dn-em">两参考
              都在 flip 下方</span>、本子从这里往下放大、不阻尼。墙图在现货处
              与下方很重：
              <span className="dn-tag bear">$63k −40.18M</span>（最重墙、现货正
              坐着的 put 墙、Put OI 4,799）、
              <span className="dn-tag bear">$62k −35.18M</span>（正在 $62,438
              地板处、Put OI 9,079）、
              <span className="dn-tag bear">$60k −28.33M</span>（盘上最重 put
              OI、19,955）、
              <span className="dn-tag bear">$64k −11.45M</span>、
              <span className="dn-tag bear">$61k −7.05M</span>、
              <span className="dn-tag bear">$58k −7.92M</span>、
              <span className="dn-tag bear">$55k −8.22M</span> 与
              <span className="dn-tag bear">$50k −5.65M</span> 更低的崩盘 put
              残余 —— 对头顶仅有的首批正墙
              <span className="dn-tag bull">$67k +8.00M</span>（Call OI 5,687）
              与远上的 <span className="dn-tag bull">$80k +9.75M</span>（最重正、
              Call OI 26,329）。
              <span className="dn-em">
                现货钉在 $63k put 墙上、$62k / $60k 紧叠在下、意味着继续下泄是
                进正在加深的空 γ、正好在地板所在处 —— dealer 卖弱买强、把一根
                穿过地板的下行放大。首道阻尼支撑在头顶 $67k 正墙、即在 flip
                上方、不在现货下方；现货与地板之间没有正墙。
              </span>
            </p>

            <p>
              expiry strip 带着放大器和一根同日 0DTE。主导单块是
              <span className="dn-tag bear">26JUN26 月度 −55.30M（7.3 DTE、Call
              OI 88,256 / Put OI 75,494）</span> —— 又是 aggregate 的一半、从
              06-18 备忘带的 −41.45M 长上来、近端负数喂进的月度 opex。近 strip
              一律为负且前置：
              <span className="dn-tag bear">19JUN26 0.3 −42.35M</span>（今日
              0DTE、在 08:00Z 结算 ≈ 本快照后 8h —— 尚未清、本身几乎是整个
              06-18 aggregate 的大小）、
              <span className="dn-tag bear">20JUN26 1.3 −5.46M</span>、
              <span className="dn-tag bear">21JUN26 2.3 −15.91M</span>、
              <span className="dn-tag bear">22JUN26 3.3 −2.63M</span>、再到
              <span className="dn-tag">3JUL26 14.3 −2.76M</span>、
              <span className="dn-tag">10JUL26 21.3 −0.84M</span>。正偏移全部
              远期：
              <span className="dn-tag bull">31JUL26 42.3 +14.70M</span>、
              <span className="dn-tag bull">25DEC26 189.3 +2.76M</span>、
              <span className="dn-tag bull">28AUG26 70.3 +2.67M</span>、
              <span className="dn-tag bull">25SEP26 98.3 +0.25M</span>、
              <span className="dn-tag bull">26MAR27 280.3 +0.61M</span>。列出的
              strip 对 −111.1M 头部 aggregate 净到约 −104.3M；那 ~−6.8M 缺口
              是 basis 差、不是缺失 expiry 的余项 —— 头部是在最近现货/当前-IV
              网格点读的 surface-grid GEX、而 by-expiry strip 是按 expiry 分组
              的 exact-spot profile、所以两者除非在同一 basis 重算否则不代数
              相等。无论哪样、
              <span className="dn-em">
                26JUN 前的近日历全是负 γ、今日 19JUN 0DTE 本身就是一根八小时
                内了结的 −42.35M 块、26JUN 月度是放大器、opex 前没有近日正块
                去阻尼一根移动 —— 就是下腿放大器窗的结构类比、现在指向 26JUN
                月度、而现货已经在地板上。
              </span>{' '}
              IV 中位数横跨 976 合约是
              <span className="dn-tag">44.9%</span>、对 30D close-to-close RV
              <span className="dn-tag">42.76%</span> —— 链级 richness 只
              <span className="dn-tag">~+2.14pt</span>、一道薄溢价；是 N 合约的
              链中位数、<span className="dn-em">不是</span>可交易价差、且 expiry-
              / strike-level vega、skew、期限结构未载入 —— vol 读法保持
              framework only。RV 方法：30D close-to-close、logret.std × √365 ×
              100、用最末 30 根日 log return（= 连续 31 根日 close）、锚自
              parquet 最末 bar 2026-06-19 00:05Z；29-return 读是 43.42%。RV 对
              06-18 的 42.67% 基本持平、仍远高于 05-31 的 24.91% —— vol 对已
              实现不便宜、这也是为什么 44.9% 的 IV 中位数几乎不带溢价。
            </p>

            <h2 className="dn-sec">
              宏观 <span className="dn-roman">IV · 利率/美元转硬（10Y +6bp 到 4.49%、TIPS +9bp 到 2.23%、DXY +0.72 到 100.81 EXTREME RISK-OFF）· 信用松（HY OAS −8bp 到 2.63%）· Fed 净流动性抽干 −0.038T · BTC 对 NQ 落后扩到 −3.88pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观面当日在利率和美元侧转硬、信用是抵消
              </span>
              。面板渲染 2026-06-18 22:15Z、比快照早约 1.85h。US 10Y nominal
              <span className="dn-tag bear">4.49%（+6.0bp）</span>、regime z
              <span className="dn-tag bear">+1.63</span> —— 紧 regime、又顶回去
              （对 06-18 的 4.43%）。10Y TIPS real
              <span className="dn-tag bear">2.23%（+9.0bp）</span>、regime z
              <span className="dn-tag bear">+2.68</span> —— EXTREME RISK-OFF、
              面板上最紧的一根、还在涨。5Y5Y BE 通胀
              <span className="dn-tag">2.23%（+2.0bp）</span>、10Y 盈亏平衡
              <span className="dn-tag bull">2.25%（−1.0bp）</span> —— 通胀预期
              大致平。HY OAS
              <span className="dn-tag bull">2.63%（−8.0bp）</span>、regime z
              <span className="dn-tag bull">−1.78</span> —— 信用在利差上收紧
              （在条件上松了）、一道 RISK-ON 偶发、当日唯一的宽松线。MOVE 债波
              <span className="dn-tag">70.7（+1.30）</span> —— 仍松。美元硬顶：
              DXY <span className="dn-tag bear">100.81（+0.72 当日）</span>、
              regime z <span className="dn-tag bear">+2.47</span> —— EXTREME
              RISK-OFF、重回 100 上方。Fed 净流动性在一根新鲜周度印上抽干到
              <span className="dn-tag bear">$5.849T（−0.038T）</span>、regime z
              <span className="dn-tag">+0.05</span>（一根平的水位站位）但偶发 z
              <span className="dn-tag bear">−2.42</span> —— 是面板标出的 |偶发
              z| &gt; 1.5 的当日变动突发、和表里那根中性 regime 读是两个不同
              的指标 —— 06-18 加注后的一道流动性逆风。US-JP 10Y 利差
              <span className="dn-tag bear">1.84%（+6.0bp）</span>；USD/JPY
              <span className="dn-tag">160.36（+0.13）</span>；USD/CNY
              <span className="dn-tag">6.7681（+0.01）</span>。
              <span className="dn-em">
                净：宏观背景比 06-18 略转不利 —— 实际利率与美元硬到 EXTREME
                RISK-OFF、Fed 流动性抽干、是一道叠在内生翻仓上的逆风。re-grow
                闸：HY OAS 闸 2.78% 又往远走（在 2.63%、15bp 下方、信用松）、
                但 10Y 闸 4.53% 现在只差 4bp 触发（在 4.49%、从 06-18 的 10bp
                到火）。reclaim-long 利率筛（10Y &lt; 4.55%）在 4.49% 仍真。
                美元/实际利率转硬是这一印真的宏观逆风、不过信用与各闸还没翻
                掉尾部论点。
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
                <tr><td>US 10Y nominal</td><td className="num">4.49%</td><td className="num bear">+6.0bp</td><td className="num bear">+1.63</td><td className="bear">紧 · 顶回去</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.23%</td><td className="num bear">+9.0bp</td><td className="num bear">+2.68</td><td className="bear">最紧线 · EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.23%</td><td className="num">+2.0bp</td><td className="num">−0.03</td><td className="neut">平</td></tr>
                <tr><td>10Y 盈亏平衡</td><td className="num">2.25%</td><td className="num bull">−1.0bp</td><td className="num">−1.37</td><td className="neut">平 / 软</td></tr>
                <tr><td>HY OAS</td><td className="num">2.63%</td><td className="num bull">−8.0bp</td><td className="num bull">−1.78</td><td className="bull">松 · risk-on、利差收紧</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.505</td><td className="num">0.00</td><td className="num">+0.24</td><td className="stale">周度</td></tr>
                <tr><td>MOVE 债波</td><td className="num">70.7</td><td className="num bear">+1.30</td><td className="num bull">−0.48</td><td className="bull">松 · 略硬一点</td></tr>
                <tr><td>DXY</td><td className="num">100.81</td><td className="num bear">+0.72</td><td className="num bear">+2.47</td><td className="bear">EXTREME RISK-OFF · 硬到 100 上方</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.849T</td><td className="num bear">−0.038T</td><td className="num">+0.05</td><td className="bear">周内抽干（偶发 z −2.42）</td></tr>
                <tr><td>USD/JPY</td><td className="num">160.36</td><td className="num">+0.13</td><td className="num bear">+1.32</td><td className="neut">日元软</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">1.84%</td><td className="num bear">+6.0bp</td><td className="num bull">−1.03</td><td className="bear">走阔</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7681</td><td className="num">+0.01</td><td className="num bull">−1.66</td><td className="neut">松</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">+13.5bp（月度）</td><td className="num bear">+2.56</td><td className="stale">月度 · 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、汇总 00:00Z ——
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。非对角
              均值 <span className="dn-tag">|r| 0.325</span> —— 从 06-18 的
              0.393 松下来、但仍在 NORMAL 带、而且
              <span className="dn-signal">BTC 仍与 TradFi 风险复合体耦合</span>。
              BTC 的头部对齐仍是股票 / 贵金属簇：SP500
              <span className="dn-tag">+0.606</span>、NQ
              <span className="dn-tag">+0.552</span>、NVDA
              <span className="dn-tag">+0.549</span>、GOLD
              <span className="dn-tag">+0.486</span>、SILVER
              <span className="dn-tag">+0.474</span>、EUR
              <span className="dn-tag">+0.445</span>、COPPER
              <span className="dn-tag">+0.394</span>、MSFT
              <span className="dn-tag">+0.380</span>、JP225
              <span className="dn-tag">+0.364</span>、能源复合体反向（CL
              <span className="dn-tag">−0.279</span>、BRENT
              <span className="dn-tag">−0.286</span>）、JPY
              <span className="dn-tag">−0.330</span>。7d 相对表现是 BTC 落后一
              个仍硬的风险复合体：
              <span className="dn-tag bear">BTC −1.10%</span>、NQ
              <span className="dn-tag bull">+2.78%</span>、SP500
              <span className="dn-tag bull">+1.23%</span>、JP225
              <span className="dn-tag bull">+8.09%</span>、NVDA
              <span className="dn-tag bull">+1.91%</span>、MSFT
              <span className="dn-tag bear">−3.51%</span>、TSLA
              <span className="dn-tag bear">−0.95%</span>；金属混（GOLD
              <span className="dn-tag bear">−0.45%</span>、SILVER
              <span className="dn-tag bear">−2.97%</span>、PLAT
              <span className="dn-tag bear">−2.42%</span>、URNM
              <span className="dn-tag bull">+5.24%</span>）；能源又崩（CL
              <span className="dn-tag bear">−11.67%</span>、BRENT
              <span className="dn-tag bear">−10.55%</span>、NGAS
              <span className="dn-tag bull">+4.21%</span>）。
              <span className="dn-em">
                BTC 的 7d 回报 −1.10% 对 NQ +2.78% 是一道 −3.88pt 的落后（对
                06-18 的 −0.85pt）—— BTC 从跟随风险复合体又回到跑输它、是一根
                仍 risk-on 股票盘面里前端的特异翻仓。内生于 crypto 的读法成立：
                下行压力是 dealer-γ / 重夺交回 / 地板测试结构、不是宏观脉搏 ——
                不过这一印美元与实际利率的转硬是叠在上面的一道真宏观逆风。
              </span>{' '}
              JGB 月度 2.65% 带 EXTREME RISK-OFF 月度标 —— 不依赖。
            </p>

            <h2 className="dn-sec">
              交易本子 <span className="dn-roman">V · 本子空仓 · 200W 地板观察现为主仓且 live（现货 +0.78%、盘中被插针）· scout 站下且无法评估（仓位盘面失明）· 宏观尾闸未触（10Y 差 4bp）· squeeze-cycle ON HOLD（SM 死 ~6.9 天）</span>
            </h2>

            <p>
              <span className="dn-signal">
                本子空仓、维持空仓 —— 绑死的约束仍是数据完整性、进一场现在
                正被测试的地板
              </span>
              。06-18 的 scout 已经站下且无法评估；今天 MTF 是同一根空头共振、
              地板缓冲从 +3.7% 塌到 +0.78%、任何 scout 触发的仓位腿（SM 空头
              泄、funding、flow）仍无法评估、因为实时盘面冻结 41.4h、SM 盘面死
              ~6.9 天。一根 scout long 不能在一根仓位失明的盘面上、进一本 flip
              下方更深的净空 γ 本子 —— 即便有 4h TD9 BUY 与 1h 水下金叉在地板
              上闪缓和。也不开新空：在最重 put 墙（$63k）处做空、地板 $62,438
              就在紧下方、还是凭陈旧流向、是一个差入场 —— γ 图已经替你做工、
              地板就在那、交易台也无法确认拥挤。今天交易本子是：无空、无 scout、
              无新对冲 —— 修盘面 AND 拿到一根价格决策（地板在周收上丢、或 flip
              重夺）再重新上膛。
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">framework · 主仓 · 200W 周期地板观察 —— 现为 LIVE：现货 $62,924 只在重算的 $62,438 地板上方 +0.78%、06-18 低 $62,232 盘中插针穿过、收盘收回</span>
              <div className="dn-trade-name">
                200W 周期地板观察 —— 06-18 备忘标的那场地板测试到了；地板 $62,438 = 全历史 W-SMA200（355 根周 bar、比 06-16 钉爬高 ~$208）、现货 +0.78% 上方、盘中插针已在下方
              </div>
              <div className="dn-thesis">
                06-18 备忘把地板带作一根观察、现货 ~+3.7% 上方。三根红收和一根
                −$1,549 的 06-18 日印把那道缓冲塌掉了：现货 $62,924 现在只在重算
                的 $62,438 地板上方 +0.78%、而 06-18 低 $62,232 盘中已经在它下方
                ~0.33% 插过针才收回来。dealer 图坐在测试下面 —— 现货正坐的 $63k
                put 墙（−40.18M）、地板处的 $62k（−35.18M）、紧下方的 $60k
                （−28.33M、最重 put OI）、以及 7 天外的 26JUN26 月度 −55.30M
                放大器。<span className="dn-em">这是进行中的地板测试、不是一根
                遥远的观察</span>：一根下方插针已经印出；现在要紧的是周收。交易台
                无法确认那道能区分受控插针-收回与破位的流向、因为实时盘面宕着。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W 地板</span><span className="dn-lvl-v">$62,438 = 全历史 W-SMA200、本次自 2019→ parquet glob 重算（355 根周 W-MON bar）；比 06-16 / 06-18 备忘钉的 $62,230 高 ~$208（慢周 SMA 爬上来）· weekly_200sma.json 缺、所以 percentile / last-event 仍无源、不编造</span></div>
                <div><span className="dn-lvl-k">现货对地板</span><span className="dn-lvl-v bull">$62,924 在收盘口径上 +0.78% 上方 · 但 06-18 低 $62,232 盘中在下方 ~0.33% 插针 —— 地板正在被测试</span></div>
                <div><span className="dn-lvl-k">升级</span><span className="dn-lvl-v bear">一根持续的周收 &lt; $62,438 破 200W 地板（W-SMA200 是周收框架）—— 一根日收在下方是早警、一根盘中插针（已印）不是破位 —— 另起重评、重夺论点已死、下腿进 26JUN 放大器恢复</span></div>
              </div>
              <div className="dn-gating">
                <b>框架、不是交易。</b>地板观察现在是唯一承重的 live 水位、其余
                一切要么陈旧（实时盘面）要么 framework only。dealer 图是它要紧的
                原因：现货在 $63k put 墙上、$62k / $60k 叠在下、意味着继续下泄是
                进正在加深的空 γ、正好在地板所在处、而 26JUN 月度是这根移动会喂
                进的放大器。观察上不开仓 —— 它只设升级水位、交易台不会在一根
                失明盘面上对着地板预先做空。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout · 站下且无法评估 · 空头 MTF 共振 + 仓位盘面失明、尽管地板有缓和信号</span>
              <div className="dn-trade-name">
                回补反弹 scout —— 站下（MTF 空头共振）AND 无法评估（SM / funding / flow 腿在冻结盘面上失明）、即便 4h TD9 BUY + 1h 水下金叉在地板上闪
              </div>
              <div className="dn-thesis">
                06-18 scout 在一根空头 MTF 和一根失明盘面上站下。今天有一根真的
                缓和信号 —— 4h ⚡ TD9 BUY 在 $62,887 与 1h 水下金叉（刚印）、正是
                6/9 反转 regime 偏好的那种短帧超卖簇、就坐在地板上。但 scout 仍
                不能入：净 MTF 读是空头共振 / 卖反弹、价格在 flip 下方且在每一根
                显示 MA 下方、而且 —— 决定性地 —— 仓位腿（SM 空头泄、funding 姿态、
                回补流确认）全都需要一根 live 盘面、而没有。
                <span className="dn-em">一根 scout long 在一根仓位失明的盘面上、
                进一本 flip 下方更深的净空 γ 本子、对着一根空头 MTF 共振、不是
                交易 —— 地板上的一根缓和印正是一个仓位失明的交易台会被碾过的地方、
                如果地板破。</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v bear">站下 · 无入场 · 仅在实时盘面恢复后重评</span></div>
                <div><span className="dn-lvl-k">技术前提</span><span className="dn-lvl-v">1h 收 &gt; flip $64,641 / 重夺 D-SMA20 $64,533 AND MTF 共振翻离空头 —— 一条都不真（4h TD9 BUY / 1h 金叉是空头共振里的缓和、不是共振翻面）</span></div>
                <div><span className="dn-lvl-k">数据前提</span><span className="dn-lvl-v bear">实时盘面恢复（当前冻 41.4h）AND SM 盘面 live（当前死 ~6.9 天）—— 两者都须成立、任何仓位腿才能读</span></div>
              </div>
              <div className="dn-gating">
                <b>硬规则：</b>没有一根 live 仓位盘面、不入 scout。即便 4h TD9
                BUY 缓和印、也不在 SM / funding / flow 腿失明且现货在空 γ 下坐在
                地板上时触发 scout —— 交易台不对一根它看不见正被回补的回补反弹
                加仓。scout 双重封锁：技术上（空头 MTF、flip 下方、在地板上）与
                操作上（盘面宕）。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · 宏观尾 · put-spread re-grow 闸 —— 10Y 腿现在只差 4bp 触发（4.49% vs 4.53% 闸）、HY OAS 腿往远走（2.63% vs 2.78%）</span>
              <div className="dn-trade-name">
                下行 put-spread —— re-grow 闸未触、但 10Y 腿爬到 4bp 内；无新对冲（宏观混：利率/美元转硬、信用松）
              </div>
              <div className="dn-thesis">
                谱系带的宏观 re-grow 闸 —— HY OAS &gt; 2.78% OR 10Y &gt; 4.53%
                作为重建下行尾的条件 —— 维持 UN-FIRED、但两腿这一印分叉：10Y
                硬 +6bp 到 4.49%（现在只差闸 4bp、对 06-18 的 10bp）、而 HY OAS
                松 −8bp 到 2.63%（距它的闸 15bp、在往远走）。reclaim-long 利率筛
                （10Y &lt; 4.55%）在 4.49% 仍真。宏观面在美元 / 实际利率侧转硬
                （DXY EXTREME RISK-OFF、TIPS +9bp）、抽干 Fed 流动性、是一道逆风
                —— 但闸不是翻仓的触发、翻仓是内生的；一根宏观尾不是 dealer γ
                已经放大的一场地板测试的对的工具。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">无仓位 · 闸两腿都未触</span></div>
                <div><span className="dn-lvl-k">re-grow 触发（下一根 Tier-1 印）</span><span className="dn-lvl-v bear">10Y &gt; 4.53% 收（当前 4.49%、4bp 到火、当日硬 +6bp）OR HY OAS &gt; 2.78% 收（当前 2.63%、15bp 到火、松 −8bp）</span></div>
                <div><span className="dn-lvl-k">reclaim-long 利率筛</span><span className="dn-lvl-v bull">10Y &lt; 4.55% 收 —— 在 4.49% 为真；等一根 BTC 内部 pivot 去转化</span></div>
              </div>
              <div className="dn-gating">
                <b>注意：</b>re-grow 闸是随水位漂移而设的酌情观察、不是回测的
                断点。如果 10Y 腿触发（它最近）、一根下行尾会在另一篇未来备忘里
                重评（触发 / 失效 / R 在那定义）—— 并注意 dealer strip 已经净空 γ
                −111.1M 进 26JUN、所以任何这样的尾会叠在现有 dealer 放大上、而不是
                一根干净的独立对冲。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · squeeze-cycle hostile-2 观察单 · 无日历先验 · ON HOLD —— SM 盘面死 ~6.9 天、框架无法在自己的数据上评估</span>
              <div className="dn-trade-name">
                squeeze-cycle hostile-2 —— ON HOLD（06-16 / 06-18 的延续）：SM 盘面冻 ~166.5h、本次重堆签名读不出
              </div>
              <div className="dn-thesis">
                squeeze-cycle / 重堆-hostile-2 框架把离散 SM 步（Δshort &gt; 0 +
                Δlong &lt; 0 同一分钟）读作延续签名；它的日历先验（BJ 13–15 节奏）
                在 05-31 被证伪、此后作为无先验观察单跑。今天它无法评估、原因最
                简单：SM 盘面死了。long_btc / short_btc / net_btc 自 2026-06-12
                01:36Z（~166.5h）起恒定、所以没有 SM delta 可读。06-16 备忘把它
                放 ON HOLD 在 ~94.5h、06-18 备忘在 ~142h；它在 ~166.5h 仍 ON
                HOLD。<span className="dn-em">没有签名能从一根冻结盘面印出；框架
                直到 SM 数据恢复前都黑。</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">框架状态</span><span className="dn-lvl-v bear">ON HOLD · SM 盘面冻 ~166.5h（自 2026-06-12 01:36Z）· 无 SM delta 可算</span></div>
                <div><span className="dn-lvl-k">冻结值（不是读）</span><span className="dn-lvl-v">long 13,532.4 / short 50,825.7 / net −37,293.3 —— 逐字节恒定、只为标记死盘面而带着</span></div>
                <div><span className="dn-lvl-k">恢复条件</span><span className="dn-lvl-v">SM 盘面恢复写新鲜 long_btc/short_btc → 从首批新鲜 delta 重评重堆签名</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>一根死盘面不是一根安静盘面。交易台不从一组冻结
                三元推断「没有重堆」—— 它什么都不推断。squeeze-cycle 读被悬置、
                不是负、SM 盘面恢复后的首批新鲜 delta 是重新上膛点。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件 <span className="dn-roman">VI · 实时盘面停摆仍是操作条件 · 地板测试到了（现货 +0.78%、盘中插针）对 26JUN 放大器 · scout 双重封锁 · 宏观 10Y 闸差 4bp</span>
            </h2>

            <p>
              06-18 条件里：实时盘面<em>没</em>回来 —— 它又死了 24h、现在冻
              41.4h、SM 盘面 ~6.9 天；200W 地板观察从 +3.7% 缓冲走到一场 live
              测试（+0.78%、盘中插针穿过）；scout 维持站下且无法评估；宏观
              re-grow 闸维持未触、但 10Y 腿爬到 4bp 内；squeeze-cycle 维持 ON
              HOLD、盘面更死。主导条件没变且现在更锐：
              <em>交易台带着一场地板测试、在一本加深的净空 γ 本子里、仓位失明</em>。
              今天的条件围绕持续的停摆、地板与 26JUN 放大器之间的价格决策、以及
              双重封锁的 scout 重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>实时盘面恢复（主操作）</td><td className="bull">live_db.json 恢复写超过 2026-06-17 06:43Z 的新行 AND SM 三元离开它 06-12 01:36Z 冻结更新</td><td>完整重读 funding / OI / flow / SM；只有那时 scout 或 squeeze-cycle 才能评估 —— 在那之前仓位维度未知、且已连续两篇失明</td></tr>
                <tr><td>200W 地板丢（周期-regime 升级）</td><td className="bear">持续周收 &lt; $62,438（W-SMA200 地板）；一根日收在下方是早警、06-18 盘中插针到 $62,232 不是破位</td><td>破 200W 地板 —— 另起重评；06-15 重夺论点证伪、下腿恢复、dealer 图（−111.1M、26JUN −55.30M）放大进 opex</td></tr>
                <tr><td>地板守住 / 缓和反弹（scout 价格前提）</td><td className="bull">1h 收 &gt; flip $64,641 AND &gt; D-SMA20 $64,533、MTF 共振翻离空头 —— 4h TD9 BUY / 1h 金叉是空头读里的缓和、不是重夺</td><td>本身不是 scout 触发 —— 只在实时盘面也恢复时才重开 scout 评估；失明盘面上、地板上的一根缓和反弹是观察、不是交易</td></tr>
                <tr><td>26JUN26 月度放大器（7.3 DTE）+ 今日 19JUN 0DTE</td><td className="bear">−55.30M 主导块；今日 19JUN 0DTE −42.35M 在 08:00Z 结算 ≈ 本快照后 8h；近 strip 20JUN/21JUN/22JUN 全负；现货在 $63k put 墙上</td><td>下行是进 opex 前正在加深的空 γ、没有近日正阻尼；只观察、本篇无做空指令（任何未来设置自定触发 / 失效 / R）</td></tr>
                <tr><td>宏观尾 re-grow（10Y 腿差 4bp）</td><td className="bear">10Y &gt; 4.53%（4bp 到火、当日硬 +6bp）OR HY OAS &gt; 2.78%（15bp 到火、松 −8bp）</td><td>本篇无对冲指令 —— 一根闸触（10Y 最近）会在另一篇未来备忘重评；注意任何这样的尾会叠在现有 dealer 空 γ −111.1M 上</td></tr>
                <tr><td>reclaim-long 利率筛</td><td className="bull">10Y &lt; 4.55% 收 —— 在 4.49% 为真</td><td>独立筛为真；需一根 BTC 内部 pivot AND 一根 live 盘面才能转成 scout long</td></tr>
                <tr><td>squeeze-cycle hostile-2（ON HOLD）</td><td className="stale">SM 盘面死 ~166.5h；无 delta 可算</td><td>悬置、不是负 —— SM 盘面恢复后首批新鲜 delta 上重新上膛</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是
              <span className="dn-signal">
                $62,438 地板在周收口径上是否守住、而交易台仍仓位失明 —— 因为
                现货已经在它上面、06-18 低插过它、dealer 本子是 −111.1M 净空、
                最重的墙在地板处与下方、26JUN −55.30M 放大器加今日 19JUN 0DTE
                −42.35M 就在前头；如果周收丢掉 $62,438、下腿在没有仓位确认可用
                的情况下进放大器、而如果地板反而守住、价格在失明盘面上重夺
                flip、交易台还是没法 scout 那波反弹
              </span>
              。在盘面恢复前本篇按写好的跑：本子空仓、scout 双重封锁（空头
              MTF + 失明盘面）、宏观尾闸未触、10Y 腿差 4bp、squeeze-cycle 悬置、
              200W 地板观察是唯一 live 水位 —— 现在是一场 live 测试、不是一根
              遥远标记。价格与 MTF 从 06-15 重夺整根翻倒；dealer 本子在 flip
              下方加深到净空 γ、带 26JUN 月度放大器与一根同日 0DTE 在下；宏观在
              美元 / 实际利率侧转硬、而 BTC 落后一个仍在升的 TradFi 复合体。下
              一个 24h 的对读是<em>防守且耐心 —— 尊重地板与放大器、读仓位前先
              修盘面、不要预先做进一场你看不见正被守的地板测试</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2（已过 codex 敌对式审计 · findings 记于{' '}
              <code>audits/2026-06-19-desk-note.md</code>）
            </span>
            <b>状态：</b>本篇是 <b>v2</b> 修订、在 STAGE B codex 敌对式审计后
            promote。codex 判决（primary、握发布闸）是
            <b>PASS-WITH-NOTES —— v1 草稿无 CRITICAL / MAJOR / MINOR / NIT 阻断
            发布的 finding</b>；其 notes 仅环境 / provenance（完整
            <code>next build</code> 被 Node 阻塞；存档的 00:06Z 快照人造物须保持
            为 pin）。补充的 ask-deepseek 数值重算（按 runbook §5；codex 仍
            primary、GLM 不是审计员）确认了每一项自包含算式、并提一条
            <b>MINOR</b> 跨块项、STAGE C 对源裁定并解决。逐 finding 的 grep-
            closure（搜索的 pattern · 修前命中 → 修后命中）：
            <b>MINOR（deepseek）—— Fed 净流动性 z-score 调和：</b>prose 写
            「episodic z −2.42」、而宏观表「regime z」列显示「+0.05」、无调和。
            对 /opt/desk-note/snapshots/2026-06-19-0006/macro_dashboard.html 裁定：
            NETLIQ 行同时带两个值（regime z +0.05、episodic z −2.42、标
            「neutral episodic 突发」）—— 它们是两个不同指标（方向调整的 regime
            站位 vs |episodic z| &gt; 1.5 的当日变动突发筛）、所以两个数都对源
            准确、正确的修法是澄清、不是改数（改数会引入对源的漂移）。在全 EN
            文件上搜索的 pattern：<code>episodic z</code>、<code>regime z</code>、
            <code>−2.42</code>、<code>+0.05</code>、<code>5.849</code>。未调和的
            孤立「episodic z −2.42」prose 主张：修前命中 1 → 修后命中 0（prose
            现在把 regime z +0.05 与 episodic z −2.42 并列、并指明是两个不同指标、
            与表一致）。其余 −2.42 / +0.05 命中确认无关（GEX dist-to-flip
            −2.43/−2.66；PLAT 7d 回报 −2.42%）。<b>已解决。</b>无 CRITICAL 或
            MAJOR finding、故无需进一步 grep-closure 循环。
            <span className="dn-em">已过 codex 敌对式审计</span> —— codex /
            ask-deepseek 重攻并清除的自包含算式：funding −0.006608 × 1095 =
            −7.24% ann（不是 ×100）；GEX 双参考 flip $64,641、现货 −2.66%
            （62,924 / 64,641 − 1）与 idx −2.43%（63,071 / 64,641 − 1）、都在
            下方；net GEX −111.1M、by-expiry strip ≈ −104.3M（basis 差 ~−6.8M、
            surface-grid vs exact-spot、不是缺 expiry）；SM cut fraction 声明
            不可计算（冻结盘面、不断言 |Δ|/prior_net）；完整 MA 矩阵对 parquet
            最末 bar close $62,924.20（2026-06-19 00:05Z）、全历史 W-SMA200 地板
            $62,438（355 根周 W-MON bar）重算并披露为比 06-16/06-18 钉的 $62,230
            高 ~$208；30D RV 42.76%（30 returns / 31 closes；43.42% 29-return
            另口径）对 IV 44.9% 横跨 976 合约（链中位数、不是可交易价差）；跨资产
            BTC 7d −1.10% vs NQ +2.78% = −3.88pt 落后；宏观 Tier-1（10Y 4.49%、
            TIPS 2.23%、HY OAS 2.63%、DXY 100.81、Fed 净流动性 $5.849T）；
            claims-vs-loaded-data（NTT / max-pain / strike-IV / BTC-NQ framework
            only；JGB 月度不依赖）；requireViewer gating 模式（首语句、路径
            /zh/desk/2026-06-19）；EN/ZH 数值平价（ZH 本篇在 STAGE C 前向撰写、
            对此 v2 零漂移）。完整 finding 记录：
            <code>audits/2026-06-19-desk-note.md</code>。
            <b>Build note（INFO）：</b>本服务器跑 Node 18.19.1；完整
            <code>next build</code> 在 Node 版本闸上被环境阻塞（谱系）、所以
            <code>npx --no-install tsc --noEmit</code> 是 build proxy ——
            STAGE E 握最终 build 验证。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体情况
            个性化。数字反映单一原子快照（2026-06-19 00:06Z）、provenance 在
            数据来源条带中按节披露；<em>关键是：快照时实时衍生品盘面已冻结
            41.4h（最末行 2026-06-17 06:43Z）、smart-money 仓位盘面已死 ~6.9
            天</em>、所以所有 funding、OI、flow 与仓位数字都明确是最后已知 /
            陈旧或不可计算并已标注；宏观面板渲染 2026-06-18 22:15Z（比快照早约
            1.85h）。价格、MTF、GEX 与跨资产新鲜。本篇是 v2 修订、已过 codex
            敌对式审计（PASS-WITH-NOTES；一条 deepseek MINOR 已裁定并解决）。
            水位、规模与条件是交易台流程的示例、不是长期推荐。过去的相关性、γ
            与仓位模式不绑定未来盘面。衍生品有全损风险、加杠杆下损失可超过
            保证金。<em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                重夺整根交回、价格在地板上、本子更空、盘面仍黑。在周收上守住
                $62,438 这条线、盯 26JUN 放大器、读仓位前先修盘面。防守。耐心。
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
            v2 · 2026-06-19T00:33Z · 2026-06-19 00:06Z 快照 · 已过 codex 敌对式
            审计 · sources: live_db.json（冻结 06-17 06:43Z）·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
