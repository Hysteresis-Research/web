import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-06-20 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-06-20',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-06-20' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260620() {
  await requireViewer('/zh/desk/2026-06-20');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-06-20 · v2</span>
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
              <span className="dn-big">$63,482</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.96%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-06-20 00:06Z ·{' '}
              <span className="dn-em">
                实时盘面停摆进第三天——OKX 监控现已冻结 65.4h；价格 / MTF /
                GEX / 宏观 / 跨资产都新鲜、衍生品盘面仍黑
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
                    00:06Z 快照锚现已 <b>65.4h 陈旧</b>（06-19 备忘时是 41.4h、
                    06-18 是 17.4h —— 停摆又跑满一整天）。funding / OI / CVD /
                    basis / retail / taker-flow 都是 06-17 06:43Z 的<b>最后已知
                    值</b>、不是当前读。SM 子盘面（long_btc / short_btc /
                    net_btc）冻得更久—— 自 2026-06-12 01:36Z 起恒定（~190.5h /
                    ~7.9 天）；SM net 与 SM cut-fraction 本次 <b>不可计算</b>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-20 00:01Z scan</td>
                  <td className="dn-flag">
                    新鲜（锚前约 5 分钟）· 滚动 latest 文件、逐字存档于
                    /opt/desk-note/snapshots/2026-06-20-0006/ · 含未收盘 K 线 ·
                    扫描现货 $63,558、24h +1.04%、24h H/L $63,645 / $62,237、
                    qVol $7.07B
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-20 00:00Z 快照</td>
                  <td className="dn-flag">
                    新鲜 · Deribit idx $63,730（比 parquet 现货 $63,482 高
                    $248）· 948 合约 · net GEX −48.6M（净空 γ、但约为 06-19
                    备忘 −111.1M 的一半、近端负数已平掉）· flip $64,396
                    （现货在下方）· 今日 20JUN26 0.3DTE 块 +7.78M 为正、在
                    08:00Z 结算（≈ 本快照后 8h、尚未清）；主导块是 26JUN26
                    月度 −49.31M、6.3 DTE（从 06-19 的 −55.30M 缓下来、但现在
                    ≈101% 整本 aggregate）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-20 00:00Z
                  </td>
                  <td className="dn-flag">新鲜 · 7d 1h bar · 22 资产 · 167 rows · regime NORMAL（均值 |r| 0.304、从 06-19 的 0.325 松下来）</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-19 22:15Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.85h · 渲染新鲜、但 FRED Tier-1 日度序列对 06-19
                    备忘<b>未变</b>（无新交易日印 —— 06-20 是周六）：10Y 4.49%、
                    TIPS 2.23%（EXTREME RISK-OFF）、HY OAS 2.63%（RISK-ON 偶发）、
                    DXY 100.81（EXTREME RISK-OFF）、Fed 净流动性 $5.849T ·
                    MOVE 债波本渲染抓取失败 / 不可用（曾是 70.7）· Yahoo FX 确实
                    动了：USD/JPY 161.28（面板 1d delta −0.01；对 06-19 备忘的
                    160.36 是 +0.92、即对前一篇日元转软）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-06-20 00:06Z（close $63,482）</td>
                  <td className="dn-flag">
                    新鲜 K 线（交易所 OHLC、独立于冻结的实时盘面）· 偏移按
                    parquet 最末 bar close 重算、那是实时盘面冻结时能拿到的最新
                    现货 · 显示阶梯用 2023→ 子集（182 根周 bar）、所以没
                    W-SMA200 行；200W 地板直接从全历史 glob 重算 —— 355 根周
                    W-MON bar（2019→ 至今）—— = <b>$62,440</b>、比 06-19 备忘钉的
                    $62,438 高 ~$2、比 06-16 / 06-18 备忘钉的 $62,230 高 ~$210
                    （一根慢周 SMA、~$250/周）· weekly_200sma.json 本次缺、但不
                    阻塞 parquet 重算
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
              <span className="dn-v bear">−7.24%（陈旧 · 06-17 06:43Z · 65.4h）</span>
              <span className="dn-src">live_db 原始 funding −0.006608 × 1095 = −7.24% ann（不是 ×100）· 06-17 06:43Z 冻结时的最后已知值、现已 65.4h 陈旧、不是当前读 · 截到冻结的 24h+1m 含端采样窗（1,442 行）：均值 +0.20%、区间 −7.24% / +7.21%、819 / 1,442 行为负 —— 盘面死掉那一刻是一本平衡的双向本子 · 对 06-19 备忘未变：是同一根冻结行</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 对 06-19</span>
              <span className="dn-v">盘面冻结 —— 不可计算</span>
              <span className="dn-src">实时盘面自 06-17 06:43Z 起没再写、所以仍没有当前 funding 去对 06-19 备忘作差 · 冻结时最后已知印是 −7.24% ann（空付多）；杠杆门连续第三天无法评估</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−468 BTC（−0.45%）· 陈旧窗</span>
              <span className="dn-src">live_db oi_btc 06-17 06:43Z 冻结时 102,945、对一根 24h+1m 含端采样窗（1,442 行）起点 · 该窗<b>截到冻结</b>、不是进 00:06Z 快照 —— 它描述的是截到 06-17 06:43Z 的盘面、已 65.4h 过期</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bear">59.47 / 40.53 · 陈旧</span>
              <span className="dn-src">live_db `mkt_long_pct` 06-17 06:43Z 冻结时值（24h+1m 含端采样窗起点是 58.29% —— 翻仓里 +1.18pt 加多）· 最后已知、65.4h 陈旧</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">−37.29k · 盘面死 ~190.5h</span>
              <span className="dn-src">long 13.53k − short 50.83k · 这一组三元自 2026-06-12 01:36Z 起逐字节恒定（~190.5h / ~7.9 天）—— 是一个<b>冻结值</b>、不是当前仓位读；只为标记死盘面而带着</span>
            </div>
            <div>
              <span className="dn-k">SM Δ / cut fraction</span>
              <span className="dn-v">不可计算</span>
              <span className="dn-src">SM 盘面冻 ~7.9 天 · |Δ| / prior_net 算不出 —— 没有当前 SM net 去作差 · squeeze-cycle / 重堆框架本次失明、是 06-16 / 06-18 / 06-19 ON-HOLD 的延续</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">43.1% / 43.04%</span>
              <span className="dn-src">GEX 中位 IV 横跨 948 合约（00:00Z、新鲜）对 30D close-to-close RV 43.04%（自 parquet）—— 链级 richness 只 ~+0.06pt、几乎没溢价；RV 仍高（06-19 是 42.76%、05-31 是 24.91%）—— vol 几乎贴着已实现定价</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bear">−1.42%（在下方）</span>
              <span className="dn-src">flip $64,396（曾 $64,641 · 落 −$245）· 对 parquet 现货 $63,482（63,482 / 64,396 − 1 = −1.420%）/ GEX 文件 Deribit idx $63,730（63,730 / 64,396 − 1 = −1.034%）—— 两参考都在 flip 下方、tile 取现货侧 −1.42% · net GEX −48.6M（净空 γ、但从 −111.1M 砍半）· 26JUN26 月度 −49.31M 现 ≈101% aggregate、今日 20JUN 0DTE +7.78M 在 08:00Z 结算</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                地板在收盘口径上守住、dealer 本子去放大 —— 但交易台还在透过
                一根死盘面读它、连续第三天
              </span>
              。24h 前价格还坐在上面的 $62,440 周期地板（全历史 W-SMA200、从
              06-19 钉爬了 ~$2）守住了：06-18 收 $62,924 与
              <span className="dn-tag bull">06-19 收 $63,513（一根 +$589 的绿
              日）</span> 都印在它上方、现货现在
              <span className="dn-tag bull">$63,482（parquet 最末 bar 00:06Z）、
              在地板上方 +1.67%</span> —— 比 06-19 备忘的 +0.78% 宽、不过 06-19
              低 <span className="dn-tag bear">$62,237 @ 03:15Z</span> 连续第二天
              盘中在它下方 ~0.33% 插过针才收回来。dealer 本子随它从地板退开：
              aggregate GEX 走 <span className="dn-tag bull">−111.1M → −48.6M</span>
              （空 γ 大致砍半、回到 06-18 的 −47.8M 附近）、近端负数已平 ——
              今日 <span className="dn-tag bull">20JUN 0DTE +7.78M 为正</span>
              （对昨日 −42.35M 的 19JUN 块）、现货曾被钉的 $63k put 墙塌出前十、
              而 <span className="dn-tag bear">26JUN26 月度 −49.31M（6.3 DTE）</span>
              现 ≈101% 整本 aggregate —— 空 γ 已经集中进这唯一一根月度放大器。
              现货坐在 <span className="dn-tag bear">0-γ flip $64,396 下方 −1.42%</span>
              （06-19 是 −2.66% —— 更近了、因现货升、flip 落 $245）。MTF 维持
              <span className="dn-tag bear">多周期空头共振（1 多 / 6 空 / 3 中性、
              卖反弹）</span> —— 从 06-19 的 8 空堆软下来、短帧抬到中性、但 regime
              翻到 <span className="dn-tag bear">5/9 动量 / 趋势延续、把这波反弹读
              成一根要卖的反弹</span>。
              <span className="dn-em">
                当日的操作事实没变、仍绑死全篇：OKX 监控现已冻结 65.4h（最末行
                2026-06-17 06:43Z）、所以 funding、OI、CVD、basis、retail 都是最后
                已知且陈旧、SM 仓位本子已死 ~7.9 天 —— SM net 与 cut-fraction 不
                可计算。关键是交易台看不见地板守住的这波反弹是怎么被吸收的：是空
                头回补、是 SM net 在泄、还是买盘新鲜或只是轮动。这波反弹读法只凭
                价格与 γ。
              </span>{' '}
              信念维持封顶：交易本子空仓且防守、scout 双重封锁（空头 MTF + 失明
              盘面）、唯一的活决策是地板守住是否转成一根交易台仍无法在失明盘面上
              scout 的 flip / D-SMA20 重夺、还是 26JUN 放大器在 opex 前拖出一次
              新的地板测试 —— 在实时盘面恢复前、只凭价格与 γ 判。
            </p>

            <p>
              BTC 在 parquet 最末 bar（00:06Z）报
              <span className="dn-tag">$63,482</span>、24h
              <span className="dn-tag bull">+0.96%</span>（对一天前的 $62,875；
              MTF 扫描在它自己 00:01Z 窗读 +1.04% —— 差是参考窗、不是数据冲突）、
              在一条 <span className="dn-tag">$63,645 / $62,237</span> 24h 区间里
              （高 @ 2026-06-19 23:56Z、低 @ 2026-06-19 03:15Z）。Deribit index
              在 00:00Z 读 $63,730、06-20 进行中的盘口一直平 —— 所以最新现货被
              三个独立新鲜源（parquet K 线 $63,482、GEX Deribit index $63,730、
              MTF 扫描 $63,558）很好地互证、即便平时供它的 live_db 盘面冻在
              $65,616（06-17 06:43Z、65.4h 陈旧）。
              <span className="dn-signal">结构读已经从地板测试走到地板守住-反弹
              </span>：06-15 周收 $66,286 兑现了 06-16 备忘领头的那次 200W 重夺、
              三根红日收（06-16 $65,645、06-17 $64,473、06-18 $62,924）把突破整根
              交回到地板上、而现在两根收盘守在它上方 —— 06-18 $62,924、06-19
              $63,513、06-20 进行中 $63,482、全在重算的 $62,440 地板上方。06-18
              低 $62,232 与 06-19 低 $62,237 都在盘中插穿地板、两根收盘都收回来。
              <span className="dn-em">
                这是地板在收盘口径上连续两天被守住、在一本已经从地板退开的净空 γ
                本子里、近端放大器随之平掉。守住是转成一次持续重夺、还是失守进
                26JUN 月度、取决于交易台当前看不见的流向。
              </span>
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面冻结 65.4h（第三天）· SM 本子死 ~7.9 天 · funding/OI/flow 最后已知陈旧 · 交易台看不见地板守住的这波反弹是怎么被吸收的</span>
            </h2>

            <p>
              <span className="dn-signal">
                本篇最重要的单一来源 —— 实时衍生品盘面 —— 仍然宕着、连续第三天
              </span>
              。OKX 监控自 <span className="dn-tag bear">2026-06-17 06:43Z</span>
              （t =「06-17 14:43」BJ；文件 mtime 确认写入停在那里；进程状态本次未
              存档或核实、所以本篇断言的是缺失的盘面、不是一根 live/挂死的进程）起
              没再给 live_db.json 续行。那现在是
              <span className="dn-tag bear">65.4h 的缺失盘面</span>、对 00:06Z 快照
              锚 —— 06-18 备忘标在 17.4h、06-19 备忘标在 41.4h、停摆又跑满一整天
              没写。实时盘面带的一切 —— funding、未平仓、现货/期货 CVD、perp
              basis、retail 多%、taker-net、大单流、aggressor skew —— 因此都是
              <span className="dn-em">06-17 06:43Z 的最后已知、不是当前</span>。
              smart-money 仓位三元（long_btc / short_btc / net_btc）逐字节恒定 ——
              <span className="dn-tag">13,532.4 / 50,825.7 / −37,293.3</span> ——
              自 <span className="dn-tag bear">2026-06-12 01:36Z</span> 起、~190.5h
              （~7.9 天）。06-16 备忘把这根死盘面标在 ~94.5h、把 squeeze-cycle 放
              ON HOLD；06-18 备忘带在 ~142h、06-19 备忘在 ~166.5h；今天是 ~190.5h、
              仍死。
              <span className="dn-em">
                SM net 作为当前读不可计算、SM cut fraction（|Δ| / prior_net）也组
                不出来 —— 没有当前 SM net 去作差。本篇里任何仓位主张都明确是历史
                的、不是 live。
              </span>
            </p>

            <p>
              为完整起见、<em>最后可得</em>的盘面读 —— 全部钉在 06-17 06:43Z 冻结、
              现已 65.4h 过期、且与 06-19 备忘逐字节相同因为是同一根冻结行 ——
              是：funding <span className="dn-tag bear">−7.24% ann</span>（原始
              −0.006608 × 1095；冻结时空付多）、最后可得路径在 24h+1m 含端采样窗内
              双向平衡（1,442 行：均值 <span className="dn-tag">+0.20% ann</span>、
              区间 <span className="dn-tag">−7.24% / +7.21%</span>、819 / 1,442 行
              为负）；OI <span className="dn-tag bear">102,945 BTC、跨尾部 24h+1m 窗
              −468（−0.45%）</span>；retail
              <span className="dn-tag">mkt_long_pct 59.47%</span>（同窗内 +1.18pt
              加多）；perp basis <span className="dn-tag bear">−$57.43 折价</span>
              对现货（窗均 −$58.62、区间 −$146.17 / +$67.04）。
              <span className="dn-em">
                把这读成一枚近三天前的指纹、不是信号：一本双向 funding 本子、OI
                在泄、retail 在弱势第一腿里加多。没有一条能搬到 00:06Z 快照 —— 而
                关键是它早于<em>整段</em>把价格推上地板的 06-18 抛售、也早于守住它
                的 06-19 反弹、所以它对仓位如何吸收任一次移动什么都没说。交易台把
                仓位维度当作未知、把地板守住的这波反弹当作仓位未确认。
              </span>
            </p>

            <h2 className="dn-sec">
              结构 <span className="dn-roman">II · 价格/MTF 新鲜 · 多周期空头共振软到 1 多 / 6 空 / 3 中性 · regime 翻到 5/9 动量（卖反弹）· 现货在每一根显示 MA 下方、200W 地板 $62,440 收盘守住两次（+1.67%）</span>
            </h2>

            <p>
              <span className="dn-signal">
                MTF 图新鲜、仍读空、但短帧在这波反弹上抬起来了
              </span>
              —— 连同 dealer 图、这是交易台今天还能信的一维。00:01Z 扫描标
              <span className="dn-tag bear">10 帧里 1 多 / 6 空 / 3 中性</span>、净读
              <em>多周期空头共振、卖反弹</em> —— 从 06-19 扫描的 1 多 / 8 空 / 1
              中性软下来、但在一个已经从 6/9 周期反转（偏反弹）翻成
              <span className="dn-tag bear">5/9 动量 regime（JT≥0、偏趋势延续）</span>
              的盘里 —— 即 regime 现在把这波反弹读成一根要卖的逆势反弹、不是要 fade
              的反转。短帧从地板上硬抬：15m 与 30m 都翻到
              <span className="dn-tag">中性、云上、RSI 71.5 / 65.7</span>（15m TD8
              Sell 8 → 9?）、1h 仍偏空但 RSI 回到 58.9、一根水下金叉 24b。仅有的
              建设性音是缓和簇：一对
              <span className="dn-tag bull">30m / 1h 上的底背离</span> 与一根 1d 水下
              金叉 7b。但中长帧是一道齐整的空头堆、全在云下 —— 4h / 8h / 12h / 1d /
              3d 都偏空、4h RSI 46.5 一根水上死叉 20b、8h MACDh −218 在水下、1d RSI
              37.6 云下 19b。
              <span className="dn-em">
                直读：地板上的反弹把短帧从超卖推到过热（15m RSI 71.5）、却没碰到
                空头的中长结构、它从 4h 到 3d 每一帧仍在云下。regime 翻成趋势延续是
                关键告警 —— 一根过热的短帧反弹进一道空头中长堆、正是「卖反弹」的形、
                不是一次确认的转向。1M 是唯一一根多帧；1w 区间震荡。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">63,555</td><td className="num bear">71.5</td><td className="bull">金叉（水上）7b</td><td className="bull">云上 ↓63.0k 45b</td><td>Sell 8 → 9?</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>30m</td><td className="num">63,553</td><td className="num">65.7</td><td className="bull">金叉（水下）26b</td><td className="bull">云上 ↓63.3k 1b</td><td>Sell 8 → 9?</td><td>BEAR hid · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">63,553</td><td className="num">58.9</td><td className="bull">金叉（水下）24b</td><td className="neut">云内 63.4k–64.3k 1b</td><td>Sell 3</td><td>BEAR hid · BULL hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">63,565</td><td className="num bear">46.5</td><td className="bear">死叉（水上）20b</td><td className="bear">云下 ↑64.0k 2b</td><td>Sell 4</td><td>BEAR reg</td></tr>
                <tr><td>8h</td><td className="num">63,561</td><td className="num bear">45.5</td><td className="bear">死叉（水上）6b</td><td className="neut">云内 62.8k–68.6k 1b</td><td>Sell 2</td><td>BULL hid</td></tr>
                <tr><td>12h</td><td className="num">63,558</td><td className="num bear">42.7</td><td className="neut">—</td><td className="bear">云下 ↑65.9k 57b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">63,543</td><td className="num bear">37.6</td><td className="bull">金叉（水下）7b</td><td className="bear">云下 ↑74.7k 19b</td><td>Buy 3</td><td>BEAR hid</td></tr>
                <tr><td>3d</td><td className="num">63,543</td><td className="num bear">37.8</td><td className="bear">死叉（水上）8b</td><td className="bear">云下 ↑74.1k 6b</td><td>Sell 3</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">63,543</td><td className="num bear">35.7</td><td className="neut">—</td><td className="bear">云下 ↑100.3k 20b</td><td>Buy 5</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">63,535</td><td className="num">42.7</td><td className="neut">—</td><td className="bull">云上 ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 00:01Z scan（滚动 latest 文件；逐字
                    存档于 /opt/desk-note/snapshots/2026-06-20-0006/）。净读
                    <em>多周期空头共振、卖反弹（1 多 / 6 空 / 3 中性）</em>；regime
                    <em>5/9 动量（JT≥0、偏趋势延续）</em>；反转背离
                    <em>顶背离 15m / 4h、底背离 30m / 1h</em>。扫描现货 $63,558、
                    24h +1.04%、24h H/L $63,645 / $62,237、qVol $7.07B。收盘为未
                    收盘 K 线；每个值在各周期收盘前都按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵是和 06-19 同一张单向图、现在反弹后地板稍微落到现货更下面：
              $63,482 <span className="dn-em">坐在阶梯上每一根显示线下方</span>、任何
              显示 MA 上都没有正偏移 —— 现货下方唯一一根 MA 是全历史 W-SMA200 的
              200W 地板 $62,440（~+1.67% 在它上方、从 06-19 的 +0.78% 上来）。头顶
              唯一近线是 <span className="dn-tag bear">D-SMA20 $64,054（−0.89%）</span>
              —— 反弹把缺口收到 1% 内 —— 接着是
              <span className="dn-tag bear">D-EMA20 $65,610（−3.24%）</span> 与周期
              代理 <span className="dn-tag bear">W-EMA200 $67,578（−6.06%）</span>。
              中段阶梯是一道深墙：
              <span className="dn-tag bear">D-EMA50 $69,472（−8.62%）</span>、
              <span className="dn-tag bear">W-SMA20 $71,479（−11.19%）</span>、
              <span className="dn-tag bear">D-SMA100 $72,367（−12.28%）</span>、
              <span className="dn-tag bear">D-SMA150 $72,397（−12.31%）</span>、
              <span className="dn-tag bear">D-EMA100 $72,409（−12.33%）</span>、
              <span className="dn-tag bear">D-SMA50 $72,413（−12.33%）</span>、
              <span className="dn-tag bear">W-EMA150 $74,207（−14.45%）</span>、
              <span className="dn-tag bear">W-EMA20 $74,470（−14.75%）</span>、
              <span className="dn-tag bear">D-EMA150 $75,246（−15.63%）</span>、
              <span className="dn-tag bear">W-SMA150 $75,450（−15.86%）</span>、
              <span className="dn-tag bear">D-SMA200 $76,873（−17.42%）</span>、
              <span className="dn-tag bear">D-EMA200 $77,954（−18.57%）</span>。更高
              更远、已弃用：W-EMA100 $80,958（−21.59%）、W-EMA50 $82,641
              （−23.18%）、W-SMA100 $88,521（−28.29%）、W-SMA50 $90,978
              （−30.22%）。结构性近线集合窄而单向：D-SMA20 / D-EMA20 / W-EMA200
              在头顶、从 −0.89% 到 −6.06%、全历史 200W 地板 $62,440 仅在下方
              ~+1.67% —— 地板到首根重夺线（D-SMA20 $64,054）之间是一道
              <span className="dn-tag">~$1.6k</span> 带、现货反弹后离首线只 −0.89%。
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-06-20 00:06Z（close $63,481.80）；偏移
                按那同一根 close 算、那是实时盘面冻结时能拿到的最新现货。显示的 MA
                水位按 $ 取整、偏移用精确序列值算。显示阶梯用 2023→ 子集（182 根周
                bar）、所以 W-SMA200 不是矩阵行；但 200W 地板从全历史 glob 可计算 ——
                355 根周 W-MON bar（2019→ 至今）给出 W-SMA200 $62,440。那比 06-19
                备忘钉的 $62,438 高 ~$2、比 06-16 / 06-18 备忘钉的 $62,230 高 ~$210：
                地板是一根慢周 SMA（~$250/周）、随更老的低 bar 滚出 200 周窗而爬高、
                所以重算是一次诚实的重钉、不是冲突。percentile 与 last-event 仍无源
                （weekly_200sma.json 缺）、不编造。日线收盘：06-13 $64,418、06-14
                $65,702、06-15 $66,286、06-16 $65,645、06-17 $64,473、06-18 $62,924、
                06-19 $63,513、06-20（进行中）$63,482 —— 06-15 高点、三根红收到地板、
                然后两根收盘守在它上方。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子去放大到净空 γ −48.6M（≈ 06-19 的一半）· 现货在 flip $64,396 下方 −1.42% · 近端负数已平（20JUN 0DTE +7.78M 为正、$63k 墙塌掉）· 26JUN26 月度 −49.31M 现 ≈101% aggregate（6.3 DTE）· 最重 put 墙下移到 $60k</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子仍净空 γ、但空 γ 砍半、从地板退开、集中进唯一一根
                26JUN 月度放大器
              </span>
              。aggregate GEX 是 <span className="dn-tag bear">−48.6M / 1%</span>
              （06-19 是 −111.1M —— 空 γ 大致砍半、回到 06-18 的 −47.8M 附近、随
              下跌的近端放大器平掉）、0-γ flip 是
              <span className="dn-tag">$64,396</span>（从 $64,641 落 −$245）、现货在
              <span className="dn-tag bear">下方 −1.42%</span>（现货口径 63,482 /
              64,396 − 1 = −1.420%）；GEX 文件自己对它 Deribit idx $63,730 的「dist
              to flip」读 <span className="dn-tag bear">−1.03%</span>（63,730 /
              64,396 − 1 = −1.034%）—— <span className="dn-em">两参考都在 flip 下方
              </span>、本子从这里仍往下放大、但距离随现货升、flip 落而砍半。墙图在
              现货周围明显变薄、重心下移：
              <span className="dn-tag bear">$60k −27.43M</span>（现在最重墙、盘上最
              重 put OI 19,939、整整在现货下方 $3.5k）、
              <span className="dn-tag bear">$62k −18.11M</span>（正在 $62,440 地板处、
              Put OI 7,578）、
              <span className="dn-tag bull">$80k +9.90M</span>（最重正、Call OI
              24,648）、
              <span className="dn-tag bear">$61k −9.40M</span>、
              <span className="dn-tag bull">$67k +8.68M</span>（Call OI 4,077）、
              <span className="dn-tag bear">$55k −7.13M</span>、
              <span className="dn-tag bear">$58k −6.69M</span>、
              <span className="dn-tag bear">$64k −6.08M</span>（头顶近墙、就在 flip
              下）、
              <span className="dn-tag bull">$70k +5.83M</span>、
              <span className="dn-tag bear">$50k −4.99M</span> 更低的崩盘 put 残余。
              <span className="dn-em">
                昨日现货被钉的 $63k put 墙（06-19 −40.18M、盘上最重）整根塌出前十
                —— 是这张图最大的单一变化。现货 $63,482 现在坐在变薄的 $62k
                （−18.11M）上方与轻的 $64k（−6.08M）下方之间、最重的负 γ 被推到
                $60k 与更下（崩盘 put 残余区）。这张图在现货所在处远不如 06-19 本子
                那样放大下行；集中的空 γ 现在是 26JUN 月度与深 $60k 墙、不是现货正
                交易的水位。
              </span>
            </p>

            <p>
              expiry strip 是去放大显得最干净的地方。主导单块是
              <span className="dn-tag bear">26JUN26 月度 −49.31M（6.3 DTE、Call OI
              88,938 / Put OI 75,152）</span> —— 从 06-19 备忘带的 −55.30M 缓下来、
              但现在 <span className="dn-em">≈101% 整本 −48.6M aggregate</span>：本子
              其余大致净到平、所以空 γ 已经几乎全部集中进这唯一一根月度 opex。近
              strip 在前端翻成建设性：
              <span className="dn-tag bull">20JUN26 0.3 +7.78M</span>（今日 0DTE、在
              本快照后 08:00Z 结算 ≈8h、且为正、对昨日已了结的 −42.35M 19JUN 块）、
              再到 <span className="dn-tag bear">21JUN26 1.3 −6.29M</span>、
              <span className="dn-tag bear">22JUN26 2.3 −3.53M</span>、
              <span className="dn-tag bear">23JUN26 3.3 −2.80M</span>、
              <span className="dn-tag bear">3JUL26 13.3 −2.15M</span>、
              <span className="dn-tag bear">10JUL26 20.3 −0.72M</span>。正偏移全部
              远期：
              <span className="dn-tag bull">31JUL26 41.3 +15.01M</span>、
              <span className="dn-tag bull">25DEC26 188.3 +3.27M</span>、
              <span className="dn-tag bull">28AUG26 69.3 +2.70M</span>、
              <span className="dn-tag bull">25SEP26 97.3 +0.84M</span>、
              <span className="dn-tag bull">26MAR27 279.3 +0.73M</span>。列出的 strip
              对 −48.6M 头部 aggregate 净到约 −34.5M；那 ~−14.1M 缺口是 basis 差、
              不是缺失 expiry 的余项 —— 头部是在最近现货/当前-IV 网格点读的
              surface-grid GEX、而 by-expiry strip 是按 expiry 分组的 exact-spot
              profile、所以两者除非在同一 basis 重算否则不代数相等。无论哪样、
              <span className="dn-em">
                近日历 20JUN–23JUN 现在前端是正（今日 0DTE +7.78M）再转轻微负、
                26JUN 月度是仅剩的一根集中放大器、而且没有近日负块像昨日 19JUN 喂
                本子那样喂它 —— 下腿的近端放大器窗已经用尽、唯一剩下的结构风险是六
                天外的 26JUN 月度。
              </span>{' '}
              IV 中位数横跨 948 合约是
              <span className="dn-tag">43.1%</span>、对 30D close-to-close RV
              <span className="dn-tag">43.04%</span> —— 链级 richness 只
              <span className="dn-tag">~+0.06pt</span>、几乎零溢价；是 N 合约的链中
              位数、<span className="dn-em">不是</span>可交易价差、且 expiry- /
              strike-level vega、skew、期限结构未载入 —— vol 读法保持 framework
              only。RV 方法：30D close-to-close、logret.std × √365 × 100、用最末 30
              根日 log return（= 连续 31 根日 close）、锚自 parquet 最末 bar
              2026-06-20 00:06Z；29-return 读是 43.16%。RV 对 06-19 的 42.76% 基本
              持平、仍远高于 05-31 的 24.91% —— vol 几乎贴着已实现定价、43.1% 的 IV
              中位数不带有意义的溢价。
            </p>

            <h2 className="dn-sec">
              宏观 <span className="dn-roman">IV · Tier-1 对 06-19 未变（周末、无新交易日 FRED 印）—— 10Y 4.49%、TIPS 2.23% EXTREME RISK-OFF、HY OAS 2.63% RISK-ON、DXY 100.81 EXTREME RISK-OFF · MOVE 本渲染抓取失败 · USD/JPY 转软到 161.28 · BTC 对 NQ 落后收窄到 −2.73pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观面板渲染新鲜、但 Tier-1 FRED 日度序列对 06-19 备忘未变 ——
                06-20 是周六、没有新交易日印落地
              </span>
              。面板渲染 2026-06-19 22:15Z、比快照早约 1.85h、但每一根 Tier-1 日度
              水位与日变动都对 06-19 读一致、所以宏观盘面是结转、不是重动。US 10Y
              nominal <span className="dn-tag bear">4.49%（+6.0bp）</span>、regime z
              <span className="dn-tag bear">+1.63</span> —— 紧 regime、RISK-OFF。10Y
              TIPS real <span className="dn-tag bear">2.23%（+9.0bp）</span>、regime z
              <span className="dn-tag bear">+2.68</span> —— EXTREME RISK-OFF、面板上
              最紧的一根。5Y5Y BE 通胀
              <span className="dn-tag">2.23%（+2.0bp）</span>、10Y 盈亏平衡
              <span className="dn-tag bull">2.25%（−1.0bp）</span> —— 通胀预期平。
              HY OAS <span className="dn-tag bull">2.63%（−8.0bp）</span>、regime z
              <span className="dn-tag bull">−1.78</span> —— 信用松、一道 RISK-ON
              偶发、面板唯一的宽松线。MOVE 债波
              <span className="dn-tag stale">抓取失败 / 不可用</span> 本渲染（06-19
              是 70.7 —— 是来源缺口、不是移动）。美元硬顶：DXY
              <span className="dn-tag bear">100.81（+0.72 当日）</span>、regime z
              <span className="dn-tag bear">+2.47</span> —— EXTREME RISK-OFF、在 100
              上方。Fed 净流动性
              <span className="dn-tag bear">$5.849T（−0.038T）</span>、regime z
              <span className="dn-tag">+0.05</span>（一根平的水位站位）但偶发 z
              <span className="dn-tag bear">−2.42</span> —— 面板标出的 |偶发 z|
              &gt; 1.5 当日变动突发、和表里那根中性 regime 读是两个不同的指标。
              Yahoo FX 当日确实更新：USD/JPY
              <span className="dn-tag bear">161.28</span>（面板 1d delta −0.01；对
              06-19 备忘的 160.36 是 +0.92、即对前一篇日元转软）、regime z +1.48、
              偶发 z +1.78；US-JP 10Y 利差
              <span className="dn-tag bear">1.84%（+6.0bp）</span>；USD/CNY
              <span className="dn-tag">6.7681</span>。
              <span className="dn-em">
                净：宏观背景与 06-19 实质同样是逆风 —— 实际利率与美元在 EXTREME
                RISK-OFF、Fed 流动性抽干、信用是唯一抵消 —— 读作结转、不是重新确认、
                因为没有新交易日印存在。re-grow 闸：HY OAS 闸 2.78% 差 15bp（在
                2.63%、信用松）、但 10Y 闸 4.53% 只差 4bp 到火（在 4.49%）。
                reclaim-long 利率筛（10Y &lt; 4.55%）在 4.49% 仍真。美元 / 实际利率
                转硬仍是叠在内生读上的一道真宏观逆风、不过信用与各闸还没翻掉尾部论点。
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
                <tr><td>US 10Y nominal</td><td className="num">4.49%</td><td className="num bear">+6.0bp</td><td className="num bear">+1.63</td><td className="bear">紧 · RISK-OFF</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.23%</td><td className="num bear">+9.0bp</td><td className="num bear">+2.68</td><td className="bear">最紧线 · EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.23%</td><td className="num">+2.0bp</td><td className="num">−0.03</td><td className="neut">平</td></tr>
                <tr><td>10Y 盈亏平衡</td><td className="num">2.25%</td><td className="num bull">−1.0bp</td><td className="num">−1.37</td><td className="neut">平 / 软</td></tr>
                <tr><td>HY OAS</td><td className="num">2.63%</td><td className="num bull">−8.0bp</td><td className="num bull">−1.78</td><td className="bull">松 · risk-on、利差收紧</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.505</td><td className="num">0.00</td><td className="num">+0.24</td><td className="stale">周度</td></tr>
                <tr><td>MOVE 债波</td><td className="num stale">不可用</td><td className="num stale">抓取失败</td><td className="num stale">—</td><td className="stale">本渲染来源缺口（曾 70.7）</td></tr>
                <tr><td>DXY</td><td className="num">100.81</td><td className="num bear">+0.72</td><td className="num bear">+2.47</td><td className="bear">EXTREME RISK-OFF · 100 上方</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.849T</td><td className="num bear">−0.038T</td><td className="num">+0.05</td><td className="bear">周内抽干</td></tr>
                <tr><td>USD/JPY</td><td className="num">161.28</td><td className="num bear">−0.01</td><td className="num bear">+1.48</td><td className="bear">对 06-19 备忘日元转软（+0.92 对 160.36）；1d delta −0.01</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">1.84%</td><td className="num bear">+6.0bp</td><td className="num bull">−1.03</td><td className="bear">走阔</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7681</td><td className="num">+0.01</td><td className="num bull">−1.66</td><td className="neut">松</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">+13.5bp（月度）</td><td className="num bear">+2.56</td><td className="stale">月度 · 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、汇总 00:00Z ——
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。非对角均值
              <span className="dn-tag">|r| 0.304</span> —— 从 06-19 的 0.325 松下来、
              但仍在 NORMAL 带、而且
              <span className="dn-signal">BTC 仍与 TradFi 风险复合体耦合</span>。
              BTC 的头部对齐仍是股票 / 贵金属簇：SP500
              <span className="dn-tag">+0.550</span>、NQ
              <span className="dn-tag">+0.491</span>、NVDA
              <span className="dn-tag">+0.459</span>、GOLD
              <span className="dn-tag">+0.448</span>、SILVER
              <span className="dn-tag">+0.425</span>、EUR
              <span className="dn-tag">+0.411</span>、COPPER
              <span className="dn-tag">+0.387</span>、MSFT
              <span className="dn-tag">+0.346</span>、URNM
              <span className="dn-tag">+0.319</span>、能源复合体反向（CL
              <span className="dn-tag">−0.219</span>、BRENT
              <span className="dn-tag">−0.236</span>、NGAS
              <span className="dn-tag">−0.308</span>）、JPY
              <span className="dn-tag">−0.296</span>。7d 相对表现是 BTC 对一个仍硬的
              风险复合体大致走平：
              <span className="dn-tag bear">BTC −0.08%</span>、NQ
              <span className="dn-tag bull">+2.65%</span>、SP500
              <span className="dn-tag bull">+0.85%</span>、JP225
              <span className="dn-tag bull">+6.85%</span>、NVDA
              <span className="dn-tag bull">+1.80%</span>、MSFT
              <span className="dn-tag bear">−2.23%</span>、TSLA
              <span className="dn-tag bear">−1.05%</span>；金属软（GOLD
              <span className="dn-tag bear">−1.41%</span>、SILVER
              <span className="dn-tag bear">−4.85%</span>、PLAT
              <span className="dn-tag bear">−2.29%</span>、URNM
              <span className="dn-tag bull">+7.31%</span>）；能源又崩（CL
              <span className="dn-tag bear">−6.35%</span>、BRENT
              <span className="dn-tag bear">−5.24%</span>、NGAS
              <span className="dn-tag bull">+2.12%</span>）。
              <span className="dn-em">
                BTC 的 7d 回报 −0.08% 对 NQ +2.65% 是一道 −2.73pt 的落后（对 06-19
                的 −3.88pt）—— 落后收窄不是因为 BTC 跑赢、而是因为 BTC 停跌（地板
                守住的反弹把 7d 回报压平）、而 NQ 继续升。内生于 crypto 的读法成立：
                下行压力是 dealer-γ / 重夺交回 / 地板测试结构、现在随本子去放大而部
                分缓解 —— 不过美元与实际利率的转硬仍是叠在上面的一道真宏观逆风。
              </span>{' '}
              JGB 月度 2.65% 带 EXTREME RISK-OFF 月度标 —— 不依赖。
            </p>

            <h2 className="dn-sec">
              交易本子 <span className="dn-roman">V · 本子空仓 · 200W 地板收盘守住两次（现货 +1.67%、盘中又插针）· scout 仍双重封锁（空头 MTF + 失明盘面）、即便有地板守住 + 去放大本子 · 宏观尾闸未触（10Y 差 4bp）· squeeze-cycle ON HOLD（SM 死 ~7.9 天）</span>
            </h2>

            <p>
              <span className="dn-signal">
                本子空仓、维持空仓 —— 地板守住、dealer 本子去放大、但绑死的约束仍
                是数据完整性、而这波反弹仓位未确认
              </span>
              。06-19 的 scout 已经站下且无法评估；今天地板在收盘口径上守住两次、
              dealer 本子从地板砍半了空 γ、MTF 短帧抬起来 —— 每一条都建设性。但
              scout 仍不能入：净 MTF 读仍是空头共振 / 卖反弹（而 regime 现在把反弹
              读成要卖的反弹）、价格仍在 flip 下方且在每一根显示 MA 下方、而且 ——
              决定性地 —— 仓位腿（SM 空头泄、funding 姿态、回补流确认）全都需要一根
              live 盘面、而连续第三天没有。一根 scout long 在一根仓位失明的盘面上、
              进一本仍净空 γ 且在 flip 下方的本子、对着一波交易台无法确认是回补驱动
              的反弹、不是交易。也不开新空：dealer 本子刚去放大、今日 0DTE 为正、最
              重的墙落到 $60k 与更下、在一根陈旧流向且盘面失明上做空一波地板守住的
              反弹是个差入场。今天交易本子是：无空、无 scout、无新对冲 —— 修盘面
              AND 拿到一根价格决策（flip 重夺、或地板在周收上丢进 26JUN 月度）再重新
              上膛。
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">framework · 主仓 · 200W 周期地板观察 —— 收盘守住两次：现货 $63,482 现在在重算的 $62,440 地板上方 +1.67%、06-18 与 06-19 低都盘中插穿、两根收盘都收回</span>
              <div className="dn-trade-name">
                200W 周期地板观察 —— 06-19 备忘标的那场地板测试在收盘口径上守住两次；地板 $62,440 = 全历史 W-SMA200（355 根周 bar、比 06-19 钉高 ~$2）、现货 +1.67% 上方、06-18 与 06-19 盘中都在下方插针
              </div>
              <div className="dn-thesis">
                06-19 备忘把地板带作一根 live 测试、现货只 +0.78% 上方、一根盘中插
                针已经穿过。此后两根日收守住它：06-18 $62,924、06-19 $63,513（一根
                +$589 的绿日）、06-20 进行中 $63,482 —— 全在 $62,440 地板上方、现货
                现在 +1.67% 上方。06-18 低 $62,232 与 06-19 低 $62,237 都在盘中 ~0.3%
                / ~0.33% 插穿地板、两根收盘都收回 —— 地板在收盘口径上被守、不是丢。
                dealer 图随它退开：现货曾被钉的 $63k put 墙塌出前十、aggregate 空 γ
                砍半到 −48.6M、最重的负 γ 推到 $60k。<span className="dn-em">这是地板
                在守、不是在破</span> —— 但定调的是周收（W-SMA200 是周收框架、本周
                22JUN 收）、而交易台无法确认那道能区分受守地板与一根 lower-high 停顿
                的流向、因为实时盘面宕着。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W 地板</span><span className="dn-lvl-v">$62,440 = 全历史 W-SMA200、本次自 2019→ parquet glob 重算（355 根周 W-MON bar）；比 06-19 钉的 $62,438 高 ~$2、比 06-16 / 06-18 钉的 $62,230 高 ~$210（慢周 SMA 爬上来）· weekly_200sma.json 缺、所以 percentile / last-event 仍无源、不编造</span></div>
                <div><span className="dn-lvl-k">现货对地板</span><span className="dn-lvl-v bull">$63,482 在收盘口径上 +1.67% 上方（06-19 是 +0.78%）· 06-18 低 $62,232 与 06-19 低 $62,237 都盘中插穿 —— 两根收盘都守住</span></div>
                <div><span className="dn-lvl-k">升级</span><span className="dn-lvl-v bear">一根持续的周收 &lt; $62,440 破 200W 地板（本周 22JUN 收）—— 一根日收在下方是早警、一根盘中插针（已印两次）不是破位 —— 另起重评、重夺论点已死、下腿进 26JUN 放大器恢复</span></div>
                <div><span className="dn-lvl-k">重夺侧</span><span className="dn-lvl-v bull">一根 1h/日收重夺 D-SMA20 $64,054 再 flip $64,396 会从结构上确认地板守住的反弹 —— 但在失明盘面上不是 scout 触发（见 scout）</span></div>
              </div>
              <div className="dn-gating">
                <b>框架、不是交易。</b>地板观察是唯一承重的 live 水位、其余一切要么
                陈旧（实时盘面）要么 framework only。它已经从一场 live 测试（06-19）
                翻成一次两收守住、dealer 图随之退开 —— 都建设性、只凭价格与 γ。观察
                上不开仓：它设升级水位（周收 &lt; $62,440）与重夺水位（flip $64,396）、
                交易台不会在一波它无法确认的反弹上预先做多、也不会对着一根在守的地板
                在失明盘面上做空。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout · 仍双重封锁 · 空头 MTF 共振（regime 现卖反弹）+ 仓位盘面失明、尽管地板守住 + 去放大本子</span>
              <div className="dn-trade-name">
                回补反弹 scout —— 仍站下（MTF 空头共振、regime 翻成卖反弹）AND 无法评估（SM / funding / flow 腿在冻结盘面上失明）、即便地板守住两次且 dealer 本子去放大
              </div>
              <div className="dn-thesis">
                06-19 scout 在一根空头 MTF 和一根失明盘面上站下。今天建设性更强 ——
                地板在收盘口径上守住两次、dealer 本子从地板砍半空 γ、今日 0DTE 为正、
                短 MTF 帧抬到中性配 30m / 1h 底背离。但 scout 仍不能入、三条理由。
                (1) 净 MTF 读仍是空头共振 / 卖反弹、regime 从周期反转（偏反弹）翻到
                5/9 动量（趋势延续）—— 把过热短帧反弹（15m RSI 71.5）读成要卖的逆势
                反弹、不是要买的反转。(2) 价格仍在 flip $64,396 下方 −1.42%、且在每
                一根显示 MA 下方、包括头顶只 −0.89% 的 D-SMA20 $64,054 —— 重夺没印。
                (3) 决定性地、仓位腿（SM 空头泄、funding 姿态、回补流确认）全都需要
                一根 live 盘面、而没有 —— 交易台看不见地板守住的反弹是空头回补还是
                薄漂移。
                <span className="dn-em">一根 scout long 在一根仓位失明的盘面上、进一
                本仍净空 γ 且在 flip 下方的本子、对着一波交易台无法确认是回补的反弹、
                对着一个卖反弹 regime、不是交易 —— 地板上的一根缓和印正是一个仓位失明
                的交易台会被碾过的地方、如果反弹失败。</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v bear">站下 · 无入场 · 仅在实时盘面恢复后重评</span></div>
                <div><span className="dn-lvl-k">技术前提</span><span className="dn-lvl-v">1h 收 &gt; flip $64,396 / 重夺 D-SMA20 $64,054 AND MTF 共振翻离空头 —— 一条都不真（地板守住 + 去放大本子是建设性、但 regime 把反弹读成卖反弹、不是反转）</span></div>
                <div><span className="dn-lvl-k">数据前提</span><span className="dn-lvl-v bear">实时盘面恢复（当前冻 65.4h）AND SM 盘面 live（当前死 ~7.9 天）—— 两者都须成立、任何仓位腿才能读</span></div>
              </div>
              <div className="dn-gating">
                <b>硬规则：</b>没有一根 live 仓位盘面、不入 scout。即便地板守住与去
                放大的 dealer 本子、也不在 SM / funding / flow 腿失明且现货在卖反弹
                regime 下坐在 flip 下方时触发 scout —— 交易台不对一波它看不见正被回补
                的回补反弹加仓。scout 双重封锁：技术上（空头 MTF 共振、flip 下方、卖
                反弹 regime）与操作上（盘面宕）。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · 宏观尾 · put-spread re-grow 闸 —— 10Y 腿仍只差 4bp 触发（4.49% vs 4.53% 闸）、HY OAS 腿差 15bp（2.63% vs 2.78%）· 宏观在周末未变</span>
              <div className="dn-trade-name">
                下行 put-spread —— re-grow 闸未触、10Y 腿差闸 4bp；无新对冲（宏观在周六结转未变：利率/美元硬、信用松）
              </div>
              <div className="dn-thesis">
                谱系带的宏观 re-grow 闸 —— HY OAS &gt; 2.78% OR 10Y &gt; 4.53% 作为
                重建下行尾的条件 —— 维持 UN-FIRED、两腿对 06-19 未变因为没有新交易日
                FRED 印落地（06-20 是周六）：10Y 在 4.49%（差闸 4bp）、HY OAS 在 2.63%
                （差 15bp、在松）。reclaim-long 利率筛（10Y &lt; 4.55%）在 4.49% 仍真。
                宏观盘面是和 06-19 同一道美元 / 实际利率 EXTREME RISK-OFF 逆风 ——
                但一根宏观尾不是一根在守的地板与一本刚去放大的 dealer 本子的对的工具；
                剩下的下行风险是 26JUN 月度、dealer γ 已经在定价它。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">无仓位 · 闸两腿都未触 · 周末未变</span></div>
                <div><span className="dn-lvl-k">re-grow 触发（下一根 Tier-1 印）</span><span className="dn-lvl-v bear">10Y &gt; 4.53% 收（当前 4.49%、4bp 到火）OR HY OAS &gt; 2.78% 收（当前 2.63%、15bp 到火、松）</span></div>
                <div><span className="dn-lvl-k">reclaim-long 利率筛</span><span className="dn-lvl-v bull">10Y &lt; 4.55% 收 —— 在 4.49% 为真；等一根 BTC 内部 pivot 去转化</span></div>
              </div>
              <div className="dn-gating">
                <b>注意：</b>re-grow 闸是随水位漂移而设的酌情观察、不是回测的断点。
                如果 10Y 腿触发（它最近）、一根下行尾会在另一篇未来备忘里重评（触发 /
                失效 / R 在那定义）—— 并注意 dealer strip 仍净空 γ −48.6M 进 26JUN、
                所以任何这样的尾会叠在现有 dealer 放大上、而不是一根干净的独立对冲。
                无论如何今天没有新交易日宏观印可动。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · squeeze-cycle hostile-2 观察单 · 无日历先验 · ON HOLD —— SM 盘面死 ~7.9 天、框架无法在自己的数据上评估</span>
              <div className="dn-trade-name">
                squeeze-cycle hostile-2 —— ON HOLD（06-16 / 06-18 / 06-19 的延续）：SM 盘面冻 ~190.5h、本次重堆签名读不出
              </div>
              <div className="dn-thesis">
                squeeze-cycle / 重堆-hostile-2 框架把离散 SM 步（Δshort &gt; 0 +
                Δlong &lt; 0 同一分钟）读作延续签名；它的日历先验（BJ 13–15 节奏）在
                05-31 被证伪、此后作为无先验观察单跑。今天它无法评估、原因最简单：SM
                盘面死了。long_btc / short_btc / net_btc 自 2026-06-12 01:36Z
                （~190.5h）起恒定、所以没有 SM delta 可读。06-16 备忘把它放 ON HOLD
                在 ~94.5h、06-18 备忘在 ~142h、06-19 备忘在 ~166.5h；它在 ~190.5h 仍
                ON HOLD。<span className="dn-em">没有签名能从一根冻结盘面印出；框架
                直到 SM 数据恢复前都黑。</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">框架状态</span><span className="dn-lvl-v bear">ON HOLD · SM 盘面冻 ~190.5h（自 2026-06-12 01:36Z）· 无 SM delta 可算</span></div>
                <div><span className="dn-lvl-k">冻结值（不是读）</span><span className="dn-lvl-v">long 13,532.4 / short 50,825.7 / net −37,293.3 —— 逐字节恒定、只为标记死盘面而带着</span></div>
                <div><span className="dn-lvl-k">恢复条件</span><span className="dn-lvl-v">SM 盘面恢复写新鲜 long_btc/short_btc → 从首批新鲜 delta 重评重堆签名</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>一根死盘面不是一根安静盘面。交易台不从一组冻结三元
                推断「没有重堆」—— 它什么都不推断。squeeze-cycle 读被悬置、不是负、
                SM 盘面恢复后的首批新鲜 delta 是重新上膛点。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件 <span className="dn-roman">VI · 实时盘面停摆仍是操作条件（第三天）· 地板收盘守住两次（现货 +1.67%）且 dealer 本子去放大 · scout 仍双重封锁 · 26JUN 月度现是仅剩的放大器 · 宏观 10Y 闸差 4bp</span>
            </h2>

            <p>
              06-19 条件里：实时盘面<em>没</em>回来 —— 它又死了 24h、现在冻 65.4h、
              SM 盘面 ~7.9 天；曾是 live 测试的 200W 地板在收盘口径上守住第二天（现货
              +1.67%、06-18 与 06-19 低都盘中插穿）；dealer 本子随近端负数平掉从
              −111.1M 去放大到 −48.6M；scout 维持双重封锁；宏观 re-grow 闸维持未触、
              10Y 腿仍差 4bp（周末未变）；squeeze-cycle 维持 ON HOLD、盘面更死。主导
              条件没变：<em>交易台仓位失明、现在进的是一波它无法确认的地板守住反弹、
              而不是一场它看不见正被守的地板测试</em>。今天的条件围绕持续的停摆、flip
              重夺与 26JUN 放大器之间的价格决策、以及仍双重封锁的 scout 重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>实时盘面恢复（主操作）</td><td className="bull">live_db.json 恢复写超过 2026-06-17 06:43Z 的新行 AND SM 三元离开它 06-12 01:36Z 冻结更新</td><td>完整重读 funding / OI / flow / SM；只有那时 scout 或 squeeze-cycle 才能评估 —— 也只有那时地板守住的反弹才能确认是回补还是漂移；仓位维度已连续三篇失明</td></tr>
                <tr><td>200W 地板收盘守住（曾是 live 测试）</td><td className="bull">06-18 $62,924、06-19 $63,513、06-20 进行中 $63,482 全 &gt; $62,440 地板；现货 +1.67% 上方；06-18 / 06-19 低都盘中插穿后收回</td><td>地板在收盘口径上守住两次 —— 价格上建设性、但周收（22JUN）才定调；不开仓</td></tr>
                <tr><td>200W 地板丢（周期-regime 升级）</td><td className="bear">持续周收 &lt; $62,440（W-SMA200 地板）；一根日收在下方是早警、盘中插针不是破位</td><td>破 200W 地板 —— 另起重评；06-15 重夺论点证伪、下腿恢复、26JUN26 月度 −49.31M 放大进 opex</td></tr>
                <tr><td>flip 重夺（scout 价格前提）</td><td className="bull">1h 收 &gt; D-SMA20 $64,054 再 flip $64,396、MTF 共振翻离空头 / regime 离卖反弹</td><td>本身不是 scout 触发 —— 只在实时盘面也恢复时才重开 scout 评估；失明盘面上一根重夺是观察、不是交易</td></tr>
                <tr><td>26JUN26 月度放大器（6.3 DTE）—— 现是仅剩的放大器</td><td className="bear">−49.31M、≈101% 的 −48.6M aggregate；今日 20JUN 0DTE +7.78M 为正、在本快照后 08:00Z 结算（结算结果本次未观察到）；近 strip 21–23JUN 轻微负</td><td>近端放大器窗已用尽 —— 唯一集中的下行风险是 26JUN 月度；只观察、本篇无做空指令（任何未来设置自定触发 / 失效 / R）</td></tr>
                <tr><td>宏观尾 re-grow（10Y 腿差 4bp）</td><td className="bear">10Y &gt; 4.53%（4bp 到火）OR HY OAS &gt; 2.78%（15bp 到火）—— 周末未变</td><td>本篇无对冲指令 —— 一根闸触（10Y 最近）会在另一篇未来备忘重评；注意任何这样的尾会叠在现有 dealer 空 γ −48.6M 上</td></tr>
                <tr><td>reclaim-long 利率筛</td><td className="bull">10Y &lt; 4.55% 收 —— 在 4.49% 为真</td><td>独立筛为真；需一根 BTC 内部 pivot AND 一根 live 盘面才能转成 scout long</td></tr>
                <tr><td>squeeze-cycle hostile-2（ON HOLD）</td><td className="stale">SM 盘面死 ~190.5h；无 delta 可算</td><td>悬置、不是负 —— SM 盘面恢复后首批新鲜 delta 上重新上膛</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是
              <span className="dn-signal">
                地板守住的这波反弹是转成一根交易台仍无法在失明盘面上 scout 的 flip
                重夺（$64,396）、还是 26JUN26 月度放大器 —— 现 ≈101% 整本空 γ —— 在
                22JUN 周收与 26JUN opex 前拖出一次对 $62,440 地板的新测试；带动下腿的
                近端放大器已经用尽（今日 0DTE 为正、近 strip 轻、$63k put 墙塌掉）、
                所以结构风险收窄到六天外的这一根月度、而结构性缓解 —— 地板守住、本子
                去放大 —— 在价格与 γ 上是真的、但仓位未确认
              </span>
              。在盘面恢复前本篇按写好的跑：本子空仓、scout 双重封锁（空头 MTF 共振
              + 失明盘面）、宏观尾闸未触、10Y 腿差 4bp、squeeze-cycle 悬置、200W 地板
              观察是唯一 live 水位 —— 现在是一次两收守住、不是一场 live 测试。价格与
              MTF 守住了地板、短帧抬起；dealer 本子去放大到半数空 γ、把最重的墙推到
              $60k；宏观是同一道美元 / 实际利率逆风、在周末结转、而 BTC 对一个仍在升
              的 TradFi 复合体把落后压平。下一个 24h 的对读是<em>建设性但未确认 ——
              尊重地板守住与去放大的本子、盯 26JUN 放大器与 22JUN 周收、读仓位前先修
              盘面、不要 scout 一波你看不见正被回补的反弹</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2（已过 codex 敌对式审计 · findings 记于{' '}
              <code>audits/2026-06-20-desk-note.md</code>）
            </span>
            <b>状态：</b>本篇是 <b>v2</b> 修订、在 STAGE B codex 敌对式审计后
            promote。codex 判决（primary、握发布闸）是
            <b>BLOCK-CRITICAL</b> —— v1 草稿有一条 CRITICAL 未来结算矛盾 + 一条
            MAJOR 24h 区间/低点错 gating 发布、外加两条 MINOR。补充的 ask-deepseek
            数值重算（按 runbook §5；codex 仍 primary、GLM 不是审计员）确认了每一项
            自包含算式、并独立提出同一条 24h H/L 跨块不一致。STAGE C 逐 finding 就源
            裁定、就地应用、并跑 grep-closure（搜索的 pattern · 修前命中 → 修后命中）：
            <b>DN-001（CRITICAL · 未来结算断裂）</b> —— v1 触发表称今日 20JUN 0DTE
            「settled benign 08:00Z」、但快照锚是 00:06Z、08:00Z 在它后约 8h。搜索
            pattern <code>settled benign 08:00Z</code>、<code>amplifier era is spent
            </code>、<code>amplifiers … are spent</code>：修前命中 1 / 1 / 1、修后
            0 / 0 / 0。0DTE 现在全篇都是 pre-settle（「+7.78M 为正、在本快照后 08:00Z
            结算、结算结果本次未观察到」）、「era is spent」的终局措辞改成「近端负数
            放大器 pre-settle 已平」；唯一剩下的 <code>settled benign</code> 命中是合
            法过去时的 19JUN 块。<b>已解决。</b>
            <b>DN-002（MAJOR · 24h 区间 / 06-19 低点）</b> —— v1 prose 带一条
            <code>$63,620 / $62,297</code> 区间、09:12Z 低点与 ~0.23% 插针、与本篇自
            己的 manifest/MTF <code>$63,645 / $62,237</code> 以及 parquet 重算（低
            $62,237.2 @ 2026-06-19 03:15Z、在 $62,440 地板下 ~0.33%）冲突。搜索
            pattern <code>$63,620</code>、<code>$62,297</code>、<code>09:12Z</code>、
            <code>~0.23%</code>：修前命中 1 / 5 / 2 / 2、修后 0 / 0 / 0 / 0、横跨
            prose、表脚注与地板观察块。<b>已解决。</b>
            <b>DN-003（MINOR · footer 双快照标签）</b> —— v1 footer 把 00:12Z 与
            00:06Z 都标「snapshot」。pattern <code>00:12Z snapshot</code>：修前 1、
            修后 0；footer 现为「emitted 2026-06-20T00:12Z · snapshot 2026-06-20
            00:06Z」。<b>已解决。</b>
            <b>DN-004（MINOR · USD/JPY 混基准）</b> —— v1 在一条 −0.01 面板 1d delta
            旁写「yen softer vs 160.36 on 06-19」。pattern <code>160.36 on 06-19
            </code> / <code>yen softer vs 160.36</code>：修前 3、修后 0、横跨
            manifest、prose 与宏观表；基准已拆（「面板 1d delta −0.01；对 06-19 备忘
            的 160.36 是 +0.92」）。<b>已解决。</b>
            codex-confirmed-clean 项（requireViewer gating、markup 完整性、funding
            ×1095、GEX 双参考符号、SM cut-fraction 不可计算、MA 偏移、expiry-strip
            −34.5M 求和、IV/RV、跨资产、宏观算术）保持原样。四条 finding 全部已解决
            （grep 修后命中 = 0）、无 UNRESOLVED 残留、故 promote 到 v2。EN/ZH 数值
            平价：ZH 本篇在 STAGE C 前向撰写、对此 v2 零漂移。完整 finding 记录：
            <code>audits/2026-06-20-desk-note.md</code>。
            <b>Build note（INFO）：</b>本服务器跑 Node 18.19.1；完整
            <code>next build</code> 在 Node 版本闸上被环境阻塞（谱系）、所以
            <code>npx --no-install tsc --noEmit</code> 是 build proxy ——
            STAGE E 握最终 build 验证。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体情况
            个性化。数字反映单一原子快照（2026-06-20 00:06Z）、provenance 在数据
            来源条带中按节披露；<em>关键是：快照时实时衍生品盘面已冻结 65.4h（最末
            行 2026-06-17 06:43Z）、smart-money 仓位盘面已死 ~7.9 天</em>、所以所有
            funding、OI、flow 与仓位数字都明确是最后已知 / 陈旧或不可计算并已标注；
            宏观面板渲染 2026-06-19 22:15Z（比快照早约 1.85h）、其 Tier-1 序列对
            06-19 备忘未变（周末）。价格、MTF、GEX 与跨资产新鲜。本篇是 v2 修订、
            已过 codex 敌对式审计（v1 判 BLOCK-CRITICAL、findings 已应用）。水位、
            规模与条件是交易台流程的示例、不是长期推荐。过去的相关性、γ 与仓位模式
            不绑定未来盘面。衍生品有全损风险、加杠杆下损失可超过保证金。
            <em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                地板在收盘上守住、dealer 本子去放大、但盘面仍黑、反弹未确认。在
                22JUN 周收上守住 $62,440 这条线、盯现在扛着整本空 γ 的 26JUN 放大器、
                读仓位前先修盘面。建设性。未确认。
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
            v2 · emitted 2026-06-20T00:12Z · snapshot 2026-06-20 00:06Z · 已过
            codex 敌对式审计 · sources: live_db.json（冻结 06-17 06:43Z）·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
