import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-08-26 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-08-26',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-08-26' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260826() {
  await requireViewer('/zh/desk/2026-08-26');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-08-26 · v2</span>
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
              <span className="dn-big">$78,612</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.42%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-08-26 00:07Z · 盘面锚行 00:05Z ·
              滚动源已归档到 /opt/desk-note/snapshots/2026-08-26-0007/
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">
                    live_db.json · 锚行 <code>t = &ldquo;08-26 08:05&rdquo;</code>（BJ）
                    = 2026-08-26 00:05Z
                  </td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · 所有窗口都端点在钉住的 00:05Z 行上 ·
                    24h 窗 = 正好 1,441 行（08-25 00:05Z → 08-26 00:05Z）·{' '}
                    <b>
                      <code>t</code> 字段是北京时、不是 UTC；本篇每一个 UTC
                      时戳都是换算出来的，从不直接读字段
                    </b>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">
                    mtf_div_latest.html · scan 头 2026-08-26 08:01 北京 = 00:01Z
                  </td>
                  <td className="dn-flag">
                    小时级滚动人造物 · 比盘面锚早约 4 分钟 · 从日期归档读、
                    不走 live 路径 · 每个周期的最末 bar 都未收盘
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-08-26 00:01Z bake</td>
                  <td className="dn-flag">
                    966 合约 · Deribit 指数 $78,713 对 live 现货 $78,612.26
                    （高 $100.74）· 下面两个 aggregate 口径都披露、且{' '}
                    <b>不混用</b>：行权价剖面求和 +245.88M（= 卡片的 +245.9M）
                    对 到期条求和 +252.35M（= gex_summary.json 的{' '}
                    <code>net_gex</code>），差 $6.46M
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 生成于 2026-08-26T00:01Z
                  </td>
                  <td className="dn-flag">
                    7d 1h bar · 22 个资产 · 168 行 · 七天里有两天是周末、
                    不带任何股票印子
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-08-25 22:17Z 渲染</td>
                  <td className="dn-flag">
                    比锚早约 1.8h · <b>新鲜的工作日 FRED 印子</b> —— 连续第二根；
                    08-25 那根 10Y 与 TIPS real 同时 +5.0bp，这一根分别是
                    −4.0bp 与 −2.0bp · NFCI 陈旧 11d、JGB 陈旧 85d、
                    Michigan 陈旧 85d、WTI 陈旧 7d
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日线 / 周线 MA 矩阵 + 30D RV</td>
                  <td className="dn-v-cell">
                    btcusdt_1m_*.parquet · 最末 bar 2026-08-26 00:05Z 收 $78,432.40
                  </td>
                  <td className="dn-flag">
                    八个年度文件全载入（2019-09-08 → 锚）= 2,545 根日 bar /
                    365 根周 bar，所以 <b>20 格全部可算</b> · 偏移按 live 现货
                    $78,612.26 重算 · 最新的日 bar 与周 bar <b>都未收盘</b>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W 周期地板 watch</td>
                  <td className="dn-v-cell">
                    weekly_200sma.json <b>不存在</b> · 走 parquet fallback
                  </td>
                  <td className="dn-flag">
                    连续第二个 session 没有 watch 文件 · 分位与破位频率都从
                    parquet 重算、并明确限定在 166 个可算 200W 的周观测上、
                    <b>不是 BTC 的完整历史</b> · 不从盘上没有的文件里引任何{' '}
                    <code>last_event</code> 或 <code>ratio_pctile</code>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED 月度 · IRLTLT01JPM156N</td>
                  <td className="dn-flag">陈旧 · 月度 · 85d · 不作实时方向</td>
                </tr>
                <tr>
                  <td className="dn-s">
                    NTT pivot、max-pain、strike-level IV、BTC/NQ 比率
                  </td>
                  <td className="dn-v-cell">本次未载入</td>
                  <td className="dn-flag">
                    btc_ntt_analysis.html 是 JS 渲染、抓不出来 · 四条主张全部
                    framework only
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">期货 CVD 对 taker-net</td>
                  <td className="dn-v-cell">
                    live_db <code>fut_cvd</code> / <code>taker_net</code>
                  </td>
                  <td className="dn-flag">
                    <b>不独立</b> —— 下面三个窗口里 Δ<code>fut_cvd</code>
                    都在 0.1 BTC 内复现 <code>taker_net</code> 的求和，所以它们
                    是一条序列、绝不当两个确认来数
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dn-meta">
            <div>
              <span className="dn-k">funding · 8h 年化</span>
              <span className="dn-v">+8.31%</span>
              <span className="dn-src">live · raw 0.007587 × 1095 = +8.3078% ann · 24h 均值 +10.3746% · 24h 区间 +5.8780%（@08-25 00:34Z）/ +10.9500%（封顶）· 封顶占用 1,025 / 1,441 采样行 = 71.13% · 7d 均值 +9.6283%、10,081 行里 0 行为负</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">08-24 那次「放开」被收回、又重新给了一次</span>
              <span className="dn-src">08-25 备忘飞行中报的那段离顶跑，收在 435 行 / 434 分钟 = 7h14m（08-24 19:21Z → 08-25 02:35Z）· 重钉 08-25 02:36Z–16:54Z（859 行 / 858 分）、19 行在顶下、再钉 17:14Z–19:59Z（166 行 / 165 分）· 自 08-25 20:00Z 又离顶 = 246 行 / 245 分 = 4h05m、段内均值 +9.7291% · <b>行是采样、不是间隔：N 行的一段跨 N−1 分钟</b></span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−0.46%（−495.4 BTC）</span>
              <span className="dn-src">匹配的 00:05Z 端点 107,219.3 → 106,723.9 · 单独另印：峰 109,073.1 @08-25 07:48Z → 谷 106,422.8 @08-25 23:38Z = −2,650.3 BTC / −2.43%，这是以峰为基的数字、它的基准坐在 24h 窗开口之后 7h43m</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bear">50.02 / 49.98</span>
              <span className="dn-src">从 48.58% 重新拥挤 +1.44pt · 24h 谷 45.96% @08-25 04:11Z 是新的 7d 低（低于 08-25 的 48.12%）· 24h 峰 50.43% @08-25 21:02Z 印在 $77,808.10 那根低点前六分钟 —— 散户买了低点、不是卖了它</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bull">+35,156（净 LONG）</span>
              <span className="dn-src">live · long 40,362.0 − short 5,206.3 · short_btc 是本谱系窗内最小的一次（24h 谷 5,049.0 @08-25 21:41Z）· long_traders 4,738 / short_traders 1,169</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 08-25 备忘</span>
              <span className="dn-v">+32,364.7 → +35,155.7（+2,791.0）</span>
              <span className="dn-src">|Δ| / prior_net = 2,791.0 / 32,364.7 = 8.62% · <b>不可采信</b> —— 其中 72.50% 落在 08-25 02:26Z 单一分钟里（short_btc 8,388.6 → 6,025.3、short_traders 1,285 → 1,260）· 连续第五个 session · 上游成因未载入、这里不点任何机制</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">47.6% / 41.89%</span>
              <span className="dn-src">GEX 跨 966 合约的链中位（不是可交易价差）· RV = 30 根收对收对数收益 / 31 根日收、锚在 parquet 最末 bar 00:05Z · 富裕度 +5.71pt、比 08-25 印的 +3.40pt 更宽</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+22.40%（在上方，现货口径）</span>
              <span className="dn-src">flip $64,225.19（前 $64,001、+$224）· 对 live 现货 $78,612.26 = +22.4013% · 对文件自己的 Deribit 指数 $78,713 = +22.5590%（卡片印 +22.6%）—— 两个参考同号皆正、都不混用 · 真正够到它的是一根 18.30% 的下跌</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                框架点着了。成交没来，差 $151.00
              </span>
              。08-25 备忘写下一笔回踩持稳多，口径和时长都提前点了名 ——
              交易所 1h bar 口径上，在 12h 内出现过 ≤{' '}
              <span className="dn-tag">$78,000</span> 的印子之后，连续两根
              收在 <span className="dn-tag">$78,000</span> 之上 —— 而盘面在
              24 小时内就正好交出了这个。08-25{' '}
              <span className="dn-tag">21:07Z 到 21:10Z</span> 四根分钟 bar
              压在线下、最低{' '}
              <span className="dn-tag bear">$77,808.10</span>；
              <span className="dn-tag">21:00 标签</span>的交易所 bar 收{' '}
              <span className="dn-tag bull">$78,535.80</span>、
              <span className="dn-tag">22:00 标签</span>那根收{' '}
              <span className="dn-tag bull">$78,850.10</span>。
              <span className="dn-em">
                触发条件在 08-25 22:00 标签的 1h 收盘上点着 —— 而交易所小时
                bar 是左标签，所以这根收盘实际敲在 23:00Z，那才是真正的决策
                时刻。
              </span>{' '}
              进场没点着。框架写的是{' '}
              <span className="dn-tag">≈$78,200、0.2R、不追</span>，而点着之后
              最低只到{' '}
              <span className="dn-tag bear">$78,351.00 @ 08-25 23:52Z</span>{' '}
              —— <span className="dn-signal">在限价上方 $151.00</span>。
              按更严的读法（两根确认收盘必须都排在含触发印子的那根 bar 之后），
              点着推迟一根、落在 23:00 标签的收盘 $78,505.40（敲在 08-26
              00:00Z）、差价是 $210.30。两种读法都点着，两种都没成交。本子
              连续第五个 session 保持{' '}
              <span className="dn-tag bear">空仓</span> —— 这是交易台的陈述，
              本次没有载入任何订单状态或持仓源 —— 台账记下第{' '}
              <span className="dn-tag">四个事件、也是第三次差一点</span>
              （第 3 行是处置、不是差一点）。这一天还杀掉了一条交易台正靠着的
              主张：funding 从封顶上放开，08-25 备忘数进「已到达的三个想要的
              条件」里的那一条，跑了{' '}
              <span className="dn-tag">435 行 / 434 分钟（7h14m）</span>就重新
              钉回去、并在随后的{' '}
              <span className="dn-tag bear">1,441 行里钉住 1,025 行</span>；
              今晚它又离顶，246 行 / 245 分钟，而那不是证据。盘面底下，
              这段窗口在{' '}
              <span className="dn-tag">08-25 02:17Z</span> 交到{' '}
              <span className="dn-tag bull">$81,270.50</span> —— 穿过框架自己
              的第一目标、并且{' '}
              <span className="dn-tag">高出今天重算的 W-SMA50 $81,049.16
              达 $221.34</span> —— 然后一路吐回 $3,462.40 到低点。这段远征
              发生在 23:00Z 那根点火收盘{' '}
              <span className="dn-em">之前 20h43m</span>，所以它不算目标触达；
              它是回踩之所以存在的原因。
            </p>

            <p>
              现货报 <span className="dn-tag">$78,612.26</span> live、
              在正好 1,441 行的窗上{' '}
              <span className="dn-tag bear">−0.42%</span>
              （$78,945.07 → $78,612.26 = −$332.81）—— 这是一个有日期、可复现
              的事实，不是什么「首次」：08-23 已经印过一根 −0.89% 的 24h
              负值，本篇也不主张任何「连跑」的边界 —— 区间是{' '}
              <span className="dn-tag">$81,181.70 / $77,962.61</span>
              （bar 口径 <span className="dn-tag">$81,270.50 / $77,808.10</span>），
              把现货放在{' '}
              <span className="dn-tag">现货区间的 20.18%</span>、bar 区间的
              23.23%。交易所日收读{' '}
              <span className="dn-tag">08-23 $77,719.10 · 08-24 $78,953.00 ·
              08-25 $78,505.40</span>，08-26 未收盘、停在 $78,432.40 ——
              所以 08-25 是一根{' '}
              <span className="dn-tag bear">−$447.60（−0.57%）的下日</span>，
              但它盘中有一段站在自己收盘之上 $2,765.10。现货仍然站在回踩框架
              所锚的那三条线整体之上 ——{' '}
              <span className="dn-tag bull">$78,000 墙（+0.79%）</span>、
              <span className="dn-tag bull">D-EMA400 $78,234.37（+0.48%）</span>、
              <span className="dn-tag bull">W-EMA100 $78,446.65（+0.21%）</span>{' '}
              —— 但最顶那条只多 21 个基点，落在一根小时的噪声里。
              <span className="dn-em">
                结构画面没变、而且强：20 格里 18 格为正、日线梯子 10-of-10、
                MTF 7 多 / 0 空 / 3 中且两种数法都零空、一个 +252.35M
                的脚算 dealer 夹持、一根已收盘的周收在周期地板上方 20.39%。
                变的是交易台为这些要付的价格。而这个 session 真正变坏的那一件
                事，正好压在进场底下：在两张面板共有的 47 个行权价上，现货
                下方的 γ 台阶薄了 $13.99M，而现货上方的 22 个共有行权价合计
                加了 $9.48M —— 其中 16 个上、6 个下（$79,500、$80,000、
                $80,500、$81,000、$88,000、$92,000），所以上方那笔是个合计数、
                不是一个全称。
              </span>
            </p>

            <h2 className="dn-sec">
              仓位{' '}
              <span className="dn-roman">I · funding 的放开在一个 session 内被收回又重给 · 散户买了低点 · SM 第五次不可采信、而且 06:21Z–07:06Z 的时间带断了</span>
            </h2>

            <p>
              <span className="dn-signal">
                先说这个 session 证伪掉的那条，因为 08-25 备忘正靠着它
              </span>
              。那篇把 funding 离开 +10.95% 封顶数进「已到达的三个想要的条件」，
              是在飞行中按 287 行量的。这段跑最终收在{' '}
              <span className="dn-tag">435 行 / 434 分钟 = 7h14m（08-24 19:21Z
              → 08-25 02:35Z）</span>，然后封顶直接回来：钉住{' '}
              <span className="dn-tag bear">08-25 02:36Z → 16:54Z（859 行 /
              858 分）</span>、十九行在顶下、再钉{' '}
              <span className="dn-tag bear">17:14Z → 19:59Z（166 行 / 165 分）</span>。
              24h 窗上的封顶占用是{' '}
              <span className="dn-tag bear">1,025 / 1,441 行 = 71.13%</span>、
              24h 均值 <span className="dn-tag">+10.3746% ann</span> ——
              比上一篇在它自己窗上印的 +10.3032% 还高。锚上 funding 又在顶外、
              <span className="dn-tag">+8.3078% ann</span>（raw 0.007587 ×
              1095），入段 246 行 / 245 分钟、段内均值 +9.7291%。
              <span className="dn-em">
                计数口径，只说一次、全篇照办：N 个采样行的一段跨 N−1 个一分钟
                间隔，所以本篇任何地方都不把行和分钟混着用。一段 245 分钟的
                放开不是证据 —— 因为它前面那段 434 分钟的放开已经回吐了。
                诚实的说法是：杠杆闸在天花板上来回震了一天、此刻是开的；要把
                「去拥挤」读成证据，需要一段活得比已经失败的那段更久的跑，
                而这个 feed 到现在没给出来。7d 尺度上地板纹丝不动：10,081 行
                里 0 行为负、7,207 / 10,081（71.5%）钉在顶上。
              </span>
            </p>

            <p>
              <span className="dn-signal">
                SM 盘面连续第五个 session 不可采信，而这次连时间钉也断了
              </span>
              。SM net 从{' '}
              <span className="dn-tag">+32,364.7 走到 +35,155.7（+2,791.0）</span>、
              切口比例{' '}
              <span className="dn-tag">2,791.0 / 32,364.7 = 8.62%</span> ——
              但<span className="dn-tag bear">其中 72.50% 是一分钟</span>。
              在 <span className="dn-tag">08-25 02:26Z</span>，short_btc 从{' '}
              <span className="dn-tag">8,388.6 掉到 6,025.3（−2,363.3 BTC）</span>、
              long_btc 从 40,934.8 掉到 40,595.0（−339.8），Δnet +2,023.5；
              同一分钟 short_traders 1,285 → 1,260（−25）、long_traders
              4,875 → 4,834（−41）。空侧本子一分钟动 −2,363.3 BTC、对面只有
              −25 个账户，这就是交易台已经连记五个 session 的那种名册断层
              特征；上游成因 <b>未载入</b>、这里不点任何机制。
              <span className="dn-em">
                新的地方是 08-25 备忘那条时间带主张不成立了。此前连续八个
                日频台阶全部印在 06:21Z–07:06Z 里（08-17 06:46Z −6,170.6 ·
                08-18 06:21Z +16,380.9 · 08-19 06:46Z −5,610.0 · 08-20
                07:06Z +39,352.8 · 08-21 06:21Z +10,671.2 · 08-22 06:41Z
                +16,071.5 · 08-23 07:06Z −10,279.5 · 08-24 06:26Z +11,639.9）。
                今天这个台阶印在 02:26Z —— 比最早那条边还早 3h55m —— 而且
                幅度对 08-24 那阶塌了 82.6%。「反复出现」这条主张活着；
                「按日历」那条死了。对本子的结论两边都一样：任何直接读{' '}
                <code>net_btc</code> 的闸都不成立，而这张本子上的实时条件
                没有一条读它。
              </span>
            </p>

            <p>
              在唯一一段没有台阶的窗口 —— 从 02:26Z 那阶到锚的{' '}
              <span className="dn-tag">1,299 分钟（21h39m）</span> —— SM 净加{' '}
              <span className="dn-tag bull">+586.0 BTC / +1.69%</span>，
              同期现货从{' '}
              <span className="dn-tag bear">$80,875.81 落到 $78,612.26
              （−2.80%）</span>。构成比符号更要紧：long_btc{' '}
              <span className="dn-tag">−233.0</span>、short_btc{' '}
              <span className="dn-tag bull">−819.0</span>，所以这段净多漂移是
              <em>在弱势里回补空头</em>、不是加多。散户做了反面的事、而且做得
              更响：<span className="dn-tag">mkt_long_pct 48.58% → 50.02%
              （+1.44pt）</span>，是按正好 00:05Z 的日频锚数、五个 session 里
              第三个重新拥挤的端点（48.86 → 50.95 → 50.18 → 51.69 → 48.58
              → 50.02），期间 24h 谷{' '}
              <span className="dn-tag bull">45.96% @08-25 04:11Z</span>{' '}
              刷出低于 08-25 备忘 48.12% 的新 7d 低 —— 而 24h{' '}
              <em>峰</em>{' '}
              <span className="dn-tag bear">50.43% @08-25 21:02Z</span>{' '}
              印在 $77,808.10 那根低点前六分钟。
              <span className="dn-em">
                散户买了那根点火印子。交易台等着看见离场的那群人，正好出现在
                交易台想买的那个水位上 —— 对框架来说这是个难受的事实，
                本篇把它记下来，不去解释掉。
              </span>
            </p>

            <p>
              持仓量把这波涨势的失败讲得很干净。匹配的 00:05Z 端点给出{' '}
              <span className="dn-tag bear">−495.4 BTC / −0.46%</span>{' '}
              （107,219.3 → 106,723.9）—— 一次温和收缩，也是 08-25 备忘记下
              +1.58% 扩张、逆着它自己的解钉条件之后的头一回。单独另印、因为
              它的基准不是窗开口：OI 峰{' '}
              <span className="dn-tag">109,073.1 @08-25 07:48Z</span>、谷{' '}
              <span className="dn-tag">106,422.8 @08-25 23:38Z</span>，
              一段{' '}
              <span className="dn-tag bear">−2,650.3 BTC / −2.43%</span>{' '}
              的泄杠杆，其峰坐在窗开口之后 7h43m。
              <span className="dn-em">
                毛开仓、毛平仓与账户级换手在这个 feed 里都不可观测，所以
                「堆完再冲」和同等规模的「换手」在净口径上印出来一模一样。
              </span>{' '}
              分窗资金流，带上数据来源那条 caveat（Δ<code>fut_cvd</code> 与{' '}
              <code>taker_net</code> 求和是一条序列、不是两条）：<b>24h</b>{' '}
              价格 <span className="dn-tag bear">−0.42%</span>、OI{' '}
              <span className="dn-tag bear">−495.4</span>、现货 CVD{' '}
              <span className="dn-tag">−31.3</span>（基本平、窗内没有重置）、
              期货 CVD <span className="dn-tag bull">+809.7</span>、大单{' '}
              <span className="dn-tag bear">−315.3 BTC / 785 笔</span>、
              taker-net <span className="dn-tag bull">+809.7</span>。
              <b>4h</b>：价格 <span className="dn-tag bear">−0.22%</span>、OI{' '}
              <span className="dn-tag bear">−450.8</span>、现货 CVD{' '}
              <span className="dn-tag bear">−552.7</span>、期货 CVD{' '}
              <span className="dn-tag bull">+688.8</span>、大单{' '}
              <span className="dn-tag bull">+335.1 / 134</span>、taker-net{' '}
              <span className="dn-tag bull">+688.9</span>。<b>1h</b>：价格{' '}
              <span className="dn-tag bear">−0.44%</span>、OI{' '}
              <span className="dn-tag bull">+237.4</span>、现货 CVD{' '}
              <span className="dn-tag bear">−357.9</span>、期货 CVD{' '}
              <span className="dn-tag bull">+435.9</span>、大单{' '}
              <span className="dn-tag bull">+431.0 / 40</span>、taker-net{' '}
              <span className="dn-tag bull">+435.9</span>。
              <span className="dn-em">
                直读：现货在卖、期货在买，全天 OI 在缩、最后一小时 OI 重新扩。
                大单在 24h 上净卖、在最近四小时净买。这个形态{' '}
                <b>与「换手」一致，而这个 feed 排除不了「清算」</b>：要把两者
                分开，需要毛开仓与毛平仓、账户级生命周期数据、或者一条强平
                成交流 —— 三样本次一样都没载入。这里能拿到的合计序列 ——
                净 OI、CVD、taker-net、funding、基差、多空敞口 ——
                在两种机制下会返回同样的数值，所以这个分类是被搁置、
                不是被断言。
              </span>{' '}
              永续基差：快照{' '}
              <span className="dn-tag bear">−$50.86</span>、24h 均值 −$13.27、
              1,441 行里 1,024 行（71.1%）在贴水。24h 最小值{' '}
              <span className="dn-tag">−$759.07 @08-25 02:18Z</span> 是一个{' '}
              <b>单分钟人造物</b> —— 那一分钟现货从 $79,868.01 跳到
              $80,712.79、永续没跟上，下一行就读 −$6.96 —— 所以剔掉这个异常点
              后、剩下 1,440 行的均值是 −$12.75、区间 −$175.71 / +$129.52。
              主动成交偏斜快照 +4.7、24h 均值 +0.28（区间 −47.9 / +70.7）、
              4h 均值 +1.94：平衡，没有反射。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · W-SMA50 盖子被戳到又被拒 · 18-of-20 矩阵完好 · 快周期滚到 40 区而 12h/1d RSI 还在 80 区 · 新鲜的 8h 水上死叉</span>
            </h2>

            <p>
              <span className="dn-signal">
                盘面撞上了它头顶第一条周线均线，然后从错的那一侧弹了回来
              </span>
              。整张 20 格矩阵上唯一贴身的盖子是{' '}
              <span className="dn-tag bear">W-SMA50 $81,049.16（−3.01%）</span>；
              08-25 的高点 <span className="dn-tag">$81,270.50</span> 印在它
              上方 <span className="dn-tag">$221.34</span>，而当日收盘落在它
              下方 $2,543.76。
              <span className="dn-em">
                这句话带着一条交易台已经学会写在前面的口径 caveat：W-SMA50
                是在一条最新 bar 未收盘的周线序列上算出来的移动水位。08-25
                备忘把它引在 $81,784.71；今天重算读 $81,049.16、低了 $735.55，
                因为未收盘的那根周收在它底下变了。08-25 那个高点正好夹在两个
                版本之间，所以盖子到底有没有被「触到」，完全取决于你用哪个
                版本 —— 这是同一个设计缺陷家族（写下来之后还会动的水位）的
                第四个实例，也正是为什么这个框架的止损是一个固定数字、
                不是一条 MA。
              </span>{' '}
              矩阵上其余全部是支撑。日线梯子 10-of-10 为正：D-SMA20
              $68,927.98（+14.05%）、D-SMA50 $66,074.01（+18.98%）、D-SMA100
              $66,163.11（+18.82%）、D-SMA150 $69,310.65（+13.42%）、D-SMA200
              $69,175.60（+13.64%）、D-EMA20 $71,103.41（+10.56%）、D-EMA50
              $67,714.08（+16.09%）、D-EMA100 $67,849.25（+15.86%）、D-EMA150
              $69,660.10（+12.85%）、D-EMA200 $71,909.07（+9.32%）。周线
              10 格里 8 格为正：{' '}
              <span className="dn-tag bull">W-EMA100 $78,446.65（+0.21%）</span>、
              <span className="dn-tag bull">W-SMA150 $77,788.18（+1.06%）</span>、
              <span className="dn-tag bull">W-EMA50 $77,294.85（+1.70%）</span>、
              <span className="dn-tag bull">W-EMA150 $73,944.75（+6.31%）</span>、
              <span className="dn-tag bull">W-SMA20 $69,895.63（+12.47%）</span>、
              <span className="dn-tag bull">W-EMA20 $70,160.84（+12.05%）</span>、
              <span className="dn-tag bull">W-EMA200 $68,707.37（+14.42%）</span>、
              <span className="dn-tag bull">W-SMA200 $64,558.71（+21.77%）</span>；
              为负的是{' '}
              <span className="dn-tag bear">W-SMA50 $81,049.16（−3.01%）</span>{' '}
              与{' '}
              <span className="dn-tag bear">W-SMA100 $88,969.86（−11.64%）</span>。
              <b>20 格可算里 18 正 / 2 负</b> —— 和 08-25 备忘报的是同一个
              数，在一根 −0.42% 的日子里守住了。D-EMA400、也就是 MTF 文件
              自己的参考，读 $78,234.37（+0.48%），而 MTF 面板独立地把 1d
              周期印在它自己 EMA400 上方 +0.31%、按收盘 $78,470 算 ——
              两边在两个基点内一致。
            </p>

            <p>
              <span className="dn-em">
                MA 锚与披露：全部数值来自完整 parquet 集（2019-09-08 17:57Z →
                2026-08-26 00:05Z、2,545 根日 bar / 365 根周 bar、最末 bar 收
                $78,432.40）；偏移按 live 现货 $78,612.26 重算；显示水位四舍
                到分、偏移按序列精确值算。最新的日 bar 与最新的周 bar
                （周止 08-30）都<b>未收盘</b>、都会动。这段历史上 20 格全部
                可算 —— 没有任何一格是补的、也没有任何一格被省略。交易所
                日收作为背景：08-20 $72,998.70、08-21 $78,309.10、08-22
                $77,084.50、08-23 $77,719.10、08-24 $78,953.00、08-25
                $78,505.40、08-26 未收 $78,432.40。
              </span>
            </p>

            <p>
              <span className="dn-signal">
                MTF 图在快周期上凉得很硬，却一根空头都没交出来
              </span>
              。00:01Z 那次扫描在文件的 aggregate 行上读{' '}
              <span className="dn-tag bull">7 多 / 0 空 / 3 中</span>；把
              per-TF 的 <em>偏向</em> 列加总则是{' '}
              <span className="dn-tag">5 多 / 3 警示 / 2 震荡</span> ——{' '}
              <b>两种口径下都是零空</b>，这是两个数法在「没有空头」这件事上
              一致的第五个 session。动能 regime{' '}
              <span className="dn-tag">9 个周期里 7 个 JT ≥ 0</span>。降温是
              真的、而且集中在 4h 以下：15m RSI{' '}
              <span className="dn-tag bear">42.2</span>、30m{' '}
              <span className="dn-tag bear">41.5</span>、1h{' '}
              <span className="dn-tag bear">44.1</span>、4h 58.8 —— 对 08-25
              备忘那根 4h 的 72.2 —— 而慢周期还在热着：8h{' '}
              <span className="dn-tag">71.3</span>、12h{' '}
              <span className="dn-tag bear">80.6</span>、1d{' '}
              <span className="dn-tag bear">80.0</span>、3d 70.2、1w 57.3、
              1M 51.0。一根{' '}
              <span className="dn-tag bear">新鲜的 8h 水上死叉印在 1 根 bar
              前（08-25 16:00Z）</span>，加入 1h（16b）与 4h（20b）的水上死叉；
              08-24 点着的那根{' '}
              <span className="dn-tag bear">1d ⚡ TD9 SELL</span> 仍是 1d
              周期上的活信号。背离：30m / 1h / 4h 三个顶背离，对 15m / 30m
              两个底背离。云的位置把图切开 —— 15m 与 30m 在云下（↑79.0k /
              ↑79.3k）、1h 在一片 1 根 bar 新、横跨现货的 $77.8k–$78.8k 云{' '}
              <em>里面</em>、4h / 8h / 12h / 1d / 1M 在云上、3d 在
              $70.7k–$78.5k 云里、1w 在云下（↑85.9k）。
              <span className="dn-em">
                从内部看，一次健康回调就长这样：快周期已经做完它们的卸货、
                慢周期还没开始。它同样也正是一段行情见顶前一次扫描的样子。
                这张图不区分这两者，本篇也不装作它能区分。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>周期</th><th>收</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">78,476</td><td className="num bear">42.2</td><td className="neut">金叉（水下）8b</td><td className="bear">云下 ↑79.0k 59b</td><td>Buy 3</td><td>BEAR 隐 · BULL 常规</td></tr>
                <tr><td>30m</td><td className="num">78,476</td><td className="num bear">41.5</td><td className="bear">死叉（水下）9b</td><td className="bear">云下 ↑79.3k 10b</td><td>Buy 2</td><td>BEAR 常规 · BULL 隐 · BULL 常规</td></tr>
                <tr><td>1h</td><td className="num">78,470</td><td className="num bear">44.1</td><td className="bear">死叉（水上）16b</td><td className="neut">云中 77.8k–78.8k 1b</td><td>Sell 1</td><td>BEAR 常规 · BULL 隐</td></tr>
                <tr><td>4h</td><td className="num">78,476</td><td className="num">58.8</td><td className="bear">死叉（水上）20b</td><td className="bull">云上 ↓73.1k 49b</td><td>Buy 3</td><td>BEAR 常规 · BULL 隐</td></tr>
                <tr><td>8h</td><td className="num">78,470</td><td className="num">71.3</td><td className="bear">死叉（水上）1b —— 新鲜</td><td className="bull">云上 ↓63.9k 20b</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">78,465</td><td className="num bear">80.6</td><td className="bull">金叉（水下）17b</td><td className="bull">云上 ↓64.6k 15b</td><td>Sell 5</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">78,470</td><td className="num bear">80.0</td><td className="bull">金叉（水下）8b</td><td className="bull">云上 ↓64.2k 8b</td><td className="bear">⚡ TD9 SELL</td><td>BULL 隐</td></tr>
                <tr><td>3d</td><td className="num">78,470</td><td className="num">70.2</td><td className="neut">—</td><td className="neut">云中 70.7k–78.5k 1b</td><td>Sell 3</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">78,476</td><td className="num">57.3</td><td className="bull">金叉（水下）5b</td><td className="bear">云下 ↑85.9k 30b</td><td>Sell 2</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">78,475</td><td className="num">51.0</td><td className="neut">—</td><td className="bull">云上 ↓47.4k 30b</td><td>Sell 1</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    源：mtf_div_latest.html，scan 头{' '}
                    <em>2026-08-26 08:01 北京 = 00:01Z</em>，从
                    /opt/desk-note/snapshots/2026-08-26-0007/ 读。头行：{' '}
                    <em>7 多 / 0 空 / 3 中 · 共 10 周期</em>；per-TF 偏向列
                    加总 5 长 / 3 警示 / 2 震荡。头部告警：<em>8h 水上死叉
                    （1 根 bar 前）</em> 与 <em>1d ⚡ TD9 SELL 印在 $78,470</em>。
                    扫描现货 $78,455、24h −0.60%、24h 高/低 $81,270 / $77,808、
                    qVol $19.05B —— 扫描的 −0.60% 与实时盘面的 −0.42% 不同，
                    是因为扫描早 4 分钟端点、且走永续收盘口径，不是哪一个错了。
                    每一根收都是未收盘 bar。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              <span className="dn-signal">
                周期地板这一读连续第二个 session 是披露过的 parquet fallback
              </span>
              。<code>weekly_200sma.json</code> 不在盘上，所以不引任何{' '}
              <code>state</code>、<code>last_event</code> 或文件里的{' '}
              <code>ratio_pctile</code>。从同一套 parquet 重算：W-SMA200 ={' '}
              <span className="dn-tag">$64,558.71</span>、现货在它上方{' '}
              <span className="dn-tag bull">+21.77%</span>，最后一根{' '}
              <em>已收盘</em>的周收（08-23 W-SUN $77,719.10）在它上方{' '}
              <span className="dn-tag bull">+20.39%</span>。
              <span className="dn-em">
                下面这个分位明确点名它的分子，因为两个候选口径不一致。
              </span>{' '}
              按 <b>未收盘的 parquet 周收 $78,432.40</b> 比已收盘的 W-SMA200
              $64,558.707，比值是{' '}
              <span className="dn-tag">1.214900</span>，166 个可算 200W 的
              周观测里{' '}
              <span className="dn-tag">39 个</span>严格更低（23.5%）、
              含并列名次 40 / 166 = 24.1 分位。按{' '}
              <b>live 锚现货 $78,612.26</b> ——也就是这一段其它地方用的那个数
              —— 比值是 <span className="dn-tag">1.217686</span>、41 / 166
              严格更低（24.7%）、含并列名次 42 / 166 = 25.3 分位。两个都印、
              哪个都不混。与分子无关的是：{' '}
              <span className="dn-tag">166 里有 10 个（6.0%）</span>周收坐在
              地板下方。
              <span className="dn-em">
                那个 6.0% 限定在一份从 2019-09-08 开始的 Binance 永续 parquet
                的 166 个周观测上 —— 它<b>不是</b> BTC 的完整历史、不该拿去和
                框架引用的那个约 9% 的长期数字比。这条线很慢（约 $250/周）、
                这个 session 关于它什么都没变；它被带着，是因为它是唯一一条
                会把其它所有东西重新定框的线，不是因为它近。
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer 图{' '}
              <span className="dn-roman">III · 夹持松了 −4.49M 到 +252.35M 脚算（已核对的 post-08-16 谱系里第三深、不是极大值）· 现货下方的台阶变薄、上方 22 个共有行权价合计加 $9.48M（16 上 / 6 下）· 前排到期为负、今天结算</span>
            </h2>

            <p>
              <span className="dn-signal">
                夹持松了，而这一次松的地方压在交易底下、不是它头顶
              </span>
              —— 这是在描述变化落在哪里、不是一个「首次」：08-23 夹持同样
              松过（−7.54M 到 +242.37M），而那个 session 变轻的行权价正是当时
              在场的回踩多所锚的 $70k–$76k 带，几何形状是同一个。跨 11 行
              到期条脚算，aggregate 是{' '}
              <span className="dn-tag bull">+252.35M</span>（正好对上{' '}
              <code>gex_summary.json</code> 的 <code>net_gex</code>
              $252,345,490.64），对面是卡片头条{' '}
              <span className="dn-tag">+245.9M</span>、它正好对上 49 点的
              行权价剖面求和 +245.8805M —— 两个口径、差 $6.46M、本篇任何
              地方都不混。按脚算口径，夹持是{' '}
              <span className="dn-tag bear">−4.49M 对 08-25 的 +256.84M</span>。
              序数上它是<b>已核对的 post-08-16 谱系里第三深</b> —— 08-25
              +256.84M 与 08-20 +254.15M 在它上面；08-22 +249.91M、08-24
              +247.69M 与 08-23 +242.37M 在它下面 —— 而且它{' '}
              <b>不是谱系极大值</b>，同一脚算口径上 07-22 +313.63M 与 07-23
              +283.46M 更深。{' '}
              <span className="dn-tag bear">2026-08-21 的存档仍然缺失</span>，
              所以这个序数是对可得面板成立、不是对每一天。0-γ flip 上抬 $224
              到 <span className="dn-tag">$64,225.19</span>；现货在它上方{' '}
              <span className="dn-tag bull">+22.4013%</span>、文件自己的
              Deribit 指数 $78,713 在它上方{' '}
              <span className="dn-tag bull">+22.5590%</span>（卡片印 +22.6%）
              —— 两个参考同号皆正、和 tile 一致。真正够到 flip 的那根下跌是{' '}
              <span className="dn-tag">18.30%</span>、不是 22%。
            </p>

            <p>
              <span className="dn-signal">
                行权价迁移是本节的发现，而它切的是多头这一边
              </span>
              。在<b>两张面板共有的 47 个行权价</b>上，21 个变重、26 个变轻
              —— 但这个分裂在价格上不是随机的。按共有行权价求和，现货{' '}
              <em>上方</em>的剖面从{' '}
              <span className="dn-tag bull">+180.579M → +190.055M
              （+9.476M）</span>，现货 <em>下方</em>的剖面从{' '}
              <span className="dn-tag bear">+69.295M → +55.308M
              （−13.987M）</span>。伤害正好集中在回踩框架住的地方：{' '}
              <span className="dn-tag bear">$77,000 从 +0.800 翻到 −0.967</span>、
              <span className="dn-tag bear">$77,500 从 −0.246 加深到 −2.790</span>、
              <span className="dn-tag bear">$78,500 从 +2.241 翻到 −0.969</span>，
              而锚点行权价自己也松了{' '}
              <span className="dn-tag">$78,000 +27.162 → +24.742（−2.421）</span>。
              现货上方合计走了反方向，而它就只是个合计：<b>22 个共有行权价里
              16 个上、6 个下</b>，净 <span className="dn-tag bull">+$9.476M</span>。
              上的那批扛着它 —— $82,000 +33.637 → +35.755、$85,000 +12.717 →
              +15.842、$90,000 +13.732 → +16.727、$95,000 +5.050 → +7.251、
              $100,000 +8.965 → +11.606 —— 另有两个新行权价出现（$82,500
              +0.503、$91,000 +0.015）、没有任何一个掉出。<b>下的那六个点名、
              不埋起来</b>：{' '}
              <span className="dn-tag bear">$79,500 +2.133 → +0.868</span>、
              <span className="dn-tag bear">$80,000 +44.280 → +40.789（−3.491）</span>、
              <span className="dn-tag bear">$80,500 +1.721 → +0.334</span>、
              <span className="dn-tag bear">$81,000 +11.951 → +11.507</span>、
              <span className="dn-tag bear">$88,000 +7.079 → +6.941</span>、
              <span className="dn-tag bear">$92,000 +2.059 → +1.975</span> ——
              而 $80,000、盘上仍然最重的那堵墙，是整个共有集上单笔跌得最多的
              一个。
              <span className="dn-em">
                直读、也只读到这里：现货下方台阶薄了 $13.99M、伤害集中在
                $77,000–$78,500；现货上方共有行权价按 16 上 / 6 下的分裂合计
                加了 $9.48M，所以{' '}
                <b>「现货上方全都变重了」这句话是错的</b>、本篇不这么写。
                活下来的是关于进场底下那层台阶的方向性陈述：这笔回踩持稳多所
                锚的那个区域，今天在结构上比它被写下来的时候更弱 —— 这不是
                挪水位的理由，而<b>是</b>在成交之前而不是之后把它说出口的理由。
              </span>{' '}
              前十堵墙全部为正、合计{' '}
              <span className="dn-tag bull">+193.13M = 78.55%</span> 的
              +245.88M 剖面：$80,000 +40.79、$82,000 +35.76、$78,000 +24.74、
              $90,000 +16.73、$85,000 +15.84、$84,000 +13.68、$100,000 +11.61、
              $81,000 +11.51、$79,000 +11.39、$70,000 +11.09。整张剖面上最深
              的负值是{' '}
              <span className="dn-tag bear">$60,000 −5.84M</span>、
              在现货下方 23.7%。
            </p>

            <p>
              按到期看：前排那一行{' '}
              <span className="dn-tag bear">26AUG26、0.3 DTE、为负 −2.04M</span>{' '}
              并在今天 08:00Z 结算 —— 这是本窗内第二个为负的前排（08-23 备忘
              记过 24AUG26 的 −1.21M），所以是反复出现、不是首次。{' '}
              <span className="dn-tag">28AUG26 +74.12M</span> 在 2.3 DTE，
              占脚算条的{' '}
              <span className="dn-tag">29.37%</span>、结算于 2026-08-28
              08:00Z；它的占比已经连续四个 session 在落（36.17% → 33.71% →
              31.28% → 29.37%），{' '}
              <em>而同期这条条本身先 +14.47M 再 −4.49M</em>，所以占比下降
              是一个构成事实、不是衰减。{' '}
              <span className="dn-tag">25SEP26 +84.53M（33.50%）</span> 现在
              是单行最大，两行合起来扛着夹持的{' '}
              <span className="dn-tag">62.87%</span>。其余：27AUG26 +3.03M、
              29AUG26 +1.08M、4SEP26 +25.42M、11SEP26 +7.33M、30OCT26
              +13.93M、25DEC26 +35.99M、26MAR27 +6.90M、25JUN27 +2.06M。
              <span className="dn-em">
                28AUG26 的滚落仍然是一个 watch、不是预测：那 +74.12M 是当前
                IV 与当前现货下的一个快照，只有在本子、现货与 IV 没有抵消性
                变化的前提下才会掉下来。
              </span>
            </p>

            <p>
              跨 <span className="dn-tag">966 合约</span>的 IV 中位是{' '}
              <span className="dn-tag">47.6%</span>、比 08-25 的 46.6% 高
              1.00pt，对 30D 收对收 RV 的{' '}
              <span className="dn-tag">41.89%</span> —— 链级富裕度{' '}
              <span className="dn-tag">+5.71pt</span>，对 08-25 备忘印的
              +3.40pt，也就是 <b>宽了 +2.31pt</b>。
              <span className="dn-em">
                分解走 <b>对齐的 as-of 时刻、不带前视</b>：每个 session 的 RV
                都在它自己那次 IV 快照上量，所以不允许任何未来的日 bar 进入
                前一个数。在 08-25 的锚（2026-08-25 00:04Z）上，同口径的 30D
                RV 是 <span className="dn-tag">43.1981%</span>，它把 08-25
                备忘印的 +3.40pt 复现到一个舍入刻度（46.6 − 43.1981 =
                3.4019pt）—— 一旦把前视拿掉，所谓「窗口构造差异」就不存在了。
                今天 00:05Z 的 RV 是{' '}
                <span className="dn-tag">41.8922%</span>、价差是 47.6 −
                41.8922 = 5.7078pt，所以这次走宽是{' '}
                <span className="dn-tag">+2.3059pt</span>，其中 RV 的下落
                （−1.3059pt）贡献 <b>56.6%</b>、IV 的上抬（+1.0000pt）贡献{' '}
                <b>43.4%</b>。备案一句：如果让前一段 RV 窗跑到 2026-08-25
                23:59Z，会得到 43.3362% 与 59.2 / 40.8 的分解 —— 那是前视
                口径、<b>不是</b>本篇发布的数。驱动的大头是已实现波动在落、
                不是隐含波动在被买 —— 与 08-25 那个 session 正好相反，那次
                98.4% 来自 IV。
              </span>{' '}
              这是跨 <span className="dn-tag">966 合约</span>的链中位、
              <em>不是</em>可交易价差，也<em>不是</em> strike-level IV；
              到期级与 strike 级的 vega、skew 与期限结构都{' '}
              <b>未载入</b>，波动这一读保持 framework only。RV 方法：30 根
              收对收对数收益（= 31 根连续日收）× √365 × 100、锚在 parquet
              最末 bar 2026-08-26 00:05Z；31 根收的区间是 $62,792.30 –
              $78,953.00。作为参考，29 收益的变体读 42.61%。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · 10Y 退出 episodic（+1.52 → +0.72）、吐回前一根 +5bp 的 80% · TIPS real 从来不是 episodic（+0.10 → −0.42）、只吐回 40% · Fed 净流动性是仅剩的 Tier-1 episodic 旗 · 跨资产松到 0.198、BTC 前四相关是三个金属加 MSFT</span>
            </h2>

            <p>
              <span className="dn-signal">
                08-25 转敌意的那张宏观盘退了一步 —— 只退了一部分，而且两条线
                退的方式不一样
              </span>
              。面板渲染是 2026-08-25 22:17Z、比锚早约 1.8h ——
              一根货真价实的新鲜工作日印子、连续第二根。面板自己按{' '}
              <b>|z| &gt; 1.5</b> 打 episodic 标，下面两句都是对着这个阈值量
              的。美 10Y 名义{' '}
              <span className="dn-tag bull">4.70%（−4.0bp）</span>、regime z{' '}
              <span className="dn-tag bear">+1.98</span>（前 +2.19）、
              episodic z <span className="dn-tag">+0.72</span>（前 +1.52）——
              仍然挂 RISK-OFF，而且它<b>确实退出了 episodic</b>、因为上一张
              面板上它是被打了 episodic 标的。10Y TIPS real{' '}
              <span className="dn-tag bull">2.38%（−2.0bp）</span>、regime z{' '}
              <span className="dn-tag bear">+1.92</span>（前 +2.03）、
              episodic z <span className="dn-tag bull">−0.42</span> ——
              但它前一根的 episodic z 是{' '}
              <span className="dn-tag">+0.10</span>，所以{' '}
              <b>TIPS 从来就不是 episodic，也就不可能从一面它从未挂过的旗上
              下来</b>。
              <span className="dn-em">
                因此这两条线是分开写、不合并。10Y：退出 episodic，它的 −4.0bp
                吐回前一根 +5.0bp 的 <b>80%</b>。TIPS real：从来不是 episodic，
                它的 −2.0bp 只吐回 +5.0bp 的 <b>40%</b> —— 是少数、不是
                「大部分」。两条确实都把 EXTREME RISK-OFF 降成了 RISK-OFF。
                08-25 备忘把这一对叫作「极端 RISK-OFF」、并把其中一条叫作
                「新转 episodic」；一根印子之后，准确的说法是一次部分的、
                不均匀的反转。两根日频印子在任何方向上都不构成趋势，本篇对
                这次反转的谨慎，就是它当初对那次冲击本该有的谨慎。
              </span>{' '}
              Tier 1 其余都安静：5Y5Y BE{' '}
              <span className="dn-tag">2.32%（−2.0bp）</span>、HY OAS{' '}
              <span className="dn-tag bull">2.69%（−1.0bp）</span> RISK-ON、
              regime z −1.10、NFCI −0.559 RISK-ON（陈旧 11d）、MOVE{' '}
              <span className="dn-tag">74.0（+0.58）</span>中性、DXY{' '}
              <span className="dn-tag">98.90（−0.10）</span>中性。真正带敌意
              的只有一行：{' '}
              <span className="dn-tag bear">Fed 净流动性 $5.792T（−0.004T）、
              episodic z −2.45</span> —— 盘上<em>唯一</em>的 Tier-1 episodic
              旗，也是已经连泄四个 session 的那一条。Tier 2：USD/JPY 159.21
              （+0.07）、美日 10Y 利差 2.03%（−4.0bp）中性、USD/CNY 6.7104
              （−0.01）episodic 在 −2.29，以及{' '}
              <span className="dn-tag stale">JGB 10Y 2.67%（+2.0bp 月度）、
              regime z +2.42、极端 RISK-OFF、陈旧 85d —— 不作实时</span>。
              最后这行关系到序数主张：盘上最高的<b>新鲜日频</b> Tier-1
              regime z 是 10Y 的 +1.98；JGB 那个 +2.42 是月度陈旧读数、
              在交易台会去交易的任何意义上都不是盘面的实时极大值。文件自己的
              「今天变了什么」筛选正好列三行：Fed 净流动性 −2.45、USD/CNY
              −2.29、10Y 盈亏平衡 +1.62。
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>宏观指标</th><th>水位</th><th>Δ</th><th>regime z</th><th>episodic z</th><th>读法</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>美 10Y 名义</td><td className="num">4.70%</td><td className="num bull">−4.0bp</td><td className="num bear">+1.98</td><td className="num">+0.72（前 +1.52）</td><td className="bear">RISK-OFF · 已退出 episodic · −4bp 吐回前 +5bp 的 80%</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.38%</td><td className="num bull">−2.0bp</td><td className="num bear">+1.92</td><td className="num bull">−0.42（前 +0.10）</td><td className="bear">RISK-OFF · 从来不是 episodic · −2bp 只吐回前 +5bp 的 40%</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.32%</td><td className="num bull">−2.0bp</td><td className="num">+1.46</td><td className="num">+1.03</td><td className="neut">无标</td></tr>
                <tr><td>HY OAS</td><td className="num">2.69%</td><td className="num bull">−1.0bp</td><td className="num bull">−1.10</td><td className="num bull">−0.91</td><td className="bull">RISK-ON · 信用平静</td></tr>
                <tr><td>芝加哥联储 NFCI</td><td className="num">−0.559</td><td className="num">−0.00</td><td className="num bull">−1.46</td><td className="num bull">−1.29</td><td className="stale">RISK-ON · 陈旧 11d</td></tr>
                <tr><td>MOVE 债券波动</td><td className="num">74.0</td><td className="num bear">+0.58</td><td className="num">+0.09</td><td className="num">−0.17</td><td className="neut">中性</td></tr>
                <tr><td>DXY</td><td className="num">98.90</td><td className="num bull">−0.10</td><td className="num">−0.09</td><td className="num bull">−1.46</td><td className="neut">中性 · 在软</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.792T</td><td className="num bear">−0.004T</td><td className="num bull">−1.22</td><td className="num bear">−2.45</td><td className="bear">RISK-OFF · episodic · 唯一的 Tier-1 旗</td></tr>
                <tr><td>USD/JPY</td><td className="num">159.21</td><td className="num bear">+0.07</td><td className="num">+0.61</td><td className="num">−0.51</td><td className="neut">无标</td></tr>
                <tr><td>美日 10Y 利差</td><td className="num">2.03%</td><td className="num bear">−4.0bp</td><td className="num">−0.12</td><td className="num">+0.72</td><td className="neut">中性</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7104</td><td className="num bull">−0.01</td><td className="num bull">−1.55</td><td className="num bull">−2.29</td><td className="bull">episodic · 松</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp（月度）</td><td className="num bear">+2.42</td><td className="num">+1.09</td><td className="stale">月度 · 陈旧 85d · 不作实时</td></tr>
                <tr><td>10Y 盈亏平衡（T3）</td><td className="num">2.32%</td><td className="num bull">−2.0bp</td><td className="num">+0.03</td><td className="num bear">+1.62</td><td className="neut">episodic · 仅驱动面板</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 个资产、168 行、生成于 00:01Z ——{' '}
              <span className="dn-em">这是一个滚动七日的读数、不是今天这一
              session</span>）。非对角均值{' '}
              <span className="dn-tag">|r| 0.198</span>、比 08-25 的 0.205
              更松，稳稳落在{' '}
              <span className="dn-tag">IDIOSYNCRATIC</span> 带里
              （&lt; 0.25）。BTC 的排名是一张金属表里夹了一个软件名：PLAT{' '}
              <span className="dn-tag">+0.326</span>、SILVER{' '}
              <span className="dn-tag">+0.267</span>、GOLD{' '}
              <span className="dn-tag">+0.231</span>、MSFT{' '}
              <span className="dn-tag">+0.228</span>、PALL{' '}
              <span className="dn-tag">+0.219</span>、META +0.201、TSLA
              +0.162、COPPER +0.154、AMZN +0.140、JPY −0.133、URNM +0.119、
              EUR +0.113、BRENT +0.098、{' '}
              <span className="dn-tag">NQ +0.091（第 14）</span>、CL +0.089、
              SP500 +0.067、JP225 +0.054、NVDA +0.051、GOOGL +0.041、NGAS
              +0.034、AAPL −0.031。7d 表现：{' '}
              <span className="dn-tag bull">BTC +21.72%</span> 对{' '}
              <span className="dn-tag bear">NQ −1.07%</span>、SP500 −0.28%、
              JP225 −0.53%、NVDA −2.52%、AAPL −0.45%、GOOGL +0.69%、AMZN
              +0.16%、MSFT +1.63%、META +4.05%、TSLA +4.34%；金属在被买 ——
              SILVER <span className="dn-tag bull">+9.04%</span>、PLAT
              +8.18%、GOLD +7.15%、PALL +4.36%、COPPER +3.59%；URNM{' '}
              <span className="dn-tag bull">+13.84%</span> 是样本里最好的
              表现、按 |r| 排第 11；能源软 —— CL −4.39%、BRENT −4.54%、
              NGAS +1.21%；外汇安静 —— EUR +0.85%、JPY −0.09%。
              <span className="dn-em">
                BTC 在这个窗上领先 NQ 22.79pt。那是一个共动统计量、
                仅此而已：它既不识别驱动、也不识别对冲有效性，它不让 BTC
                成为「股票最后一名」（三个金属加 MSFT 全部排在每一个股指
                之前），而且七天里有两天完全不带股票印子。BTC/NQ 比率序列
                本身未载入，任何关于它的主张都保持 framework only。
              </span>
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · 回踩持稳多点着了、而进场价从未被交到 —— 限价作为交易台指令原样带着、并终于拿到它该有的到期 · 从锚起算成交需要 $412.26、不是那个历史上的 $151.00 · 追空第五个 session 按下 · 台账到四个事件 / 三次差一点</span>
            </h2>

            <p>
              <span className="dn-signal">
                一个写下来的框架完全按规格点着、它的触发点火了、而它点名的
                那个进场价从未被交到
              </span>
              。这句话就是整个 session —— 而且它是作为一个有日期的事实说的、
              不是一个「首次」。这条谱系此前记过「已点着但没有仓位」的状态：
              <b>2026-07-22</b> 把一个 scout 从 <em>递延升到 ARMED</em>、并
              明确记为「ARMED 但没上线」、当时本子没有空头也没有多头；
              <b>2026-08-06</b> 在两条点名的腿上点着一个 0.2R 起手仓、
              并按市价进了场。08-26 与这两次的区别更窄，也是这里唯一主张的
              东西：07-22 那次触发明确<em>没有</em>点火，08-06 那次点着与
              成交是在市价上同时发生的；今天是第一个有日期的实例，其中一条
              <em>提前发布的</em>、自带价格口径与时长的点火规则按写的样子
              点着了，<em>而且</em>那个另行点名的限价从未被够到。这条点火
              规则是精确的、它在事件之前就发布了、它点了自己的口径（交易所
              1h bar）和自己的时长（两根 bar）—— 而且它管用了：盘面在 08-25
              21:07–21:10Z 印在 $78,000 之下、然后连着两根收在它之上。08-25
              备忘<em>没有</em>规定的，是点火价与进场价之间的关系。两根收在
              $78,000 之上，可以在 $78,000 之上的任何地方完成；第二根完成在
              $78,850.10、比点名的 ≈$78,200 进场高 $650.10，而框架自己的
              「不追」条款禁止付这个价。于是限价只能等一次点火规则从未要求
              过的回撤，而那次回撤停在{' '}
              <span className="dn-tag bear">差 $151.00</span> ——{' '}
              <b>那是一个历史上的差一点、不是现在要紧的距离</b>：在 00:05Z
              的锚上现货是 $78,612.26、限价坐在它下方{' '}
              <span className="dn-tag">$412.26</span>，这才是从这里真正成交
              所需要的。
              <span className="dn-em">
                这是第三号设计缺陷，和 08-24 的价格口径缺陷、08-25 的时长
                缺陷属于同一个家族：一条内部精确、却与自己的进场不能同时被
                满足的规则。它在下面写下的那一刻被关掉，方式和上一个一样 ——
                点名缺了什么，而不是挪价格。
              </span>{' '}
              这个反事实值得印出来，因为它正是那条让成交泡汤的条款的论据：
              在点火收盘 $78,850.10 进场、对不变的 $77,248.42 止损，是
              $1,601.68 的风险换第一目标的 $1,149.90 ——{' '}
              <span className="dn-tag bear">0.72:1</span>，对框架建立时的
              1.89:1；而且在这个锚上它会是{' '}
              <span className="dn-tag bear">−$237.84（−0.30%）</span>浮亏。
              <b>不追这条规则是对的，而它让交易泡了汤。这两半都真、
              谁也抵消不掉谁。</b>
            </p>

            <div className="dn-trade">
              <span className="dn-side long">多 · 回踩持稳框架 · <b>已点着 · 未成交</b> · 触发在 08-25 22:00 标签的 1h 收盘点火（敲在 23:00Z）· 交易台指令：除非撤销，把 ≈$78,200 限价原样挂着 · 回撤停在差 $151.00；从锚起算成交需要 $412.26 · 不追、不重新定价</span>
              <div className="dn-trade-name">
                回踩持稳多，锚在 $78,000 / D-EMA400 / W-EMA100 那层台阶 ——
                规则准时点着、进场价从未被交到，所以这条指令原样带着、
                并终于拿到一个到期
              </div>
              <div className="dn-thesis">
                触发条件，照 08-25 备忘原文引：{' '}
                <em>
                  「在交易所 bar 口径上、在此前 12h 内出现过成交于或低于
                  $78,000 的印子之后，连续两根 1h 收在或高于 $78,000。」
                </em>{' '}
                <b>它点着了。</b>08-25 21:07Z 到 21:10Z 有四根分钟 bar 成交
                在 $78,000 或以下（低点 $77,844.60 / $77,808.10 / $77,932.40
                / $77,872.10）；08-25 <b>21:00 标签</b>的交易所 bar 收{' '}
                <b>$78,535.80</b>、<b>22:00 标签</b>那根收 <b>$78,850.10</b>。
                <b>标签口径，写在这里是因为它改变时序：</b>交易所小时 bar
                是左标签，所以 22:00 标签那根收盘敲在 <b>23:00Z</b>，
                在基准读法上那才是决策时刻。按更严的读法 —— 两根确认收盘都
                必须排在含触发印子的那根 bar 之后 —— 点着推迟一根、落在
                23:00 标签的收盘 $78,505.40、敲在 <b>08-26 00:00Z</b>，
                而 00:00 标签那根 $78,432.40 同样在线上。<b>两种读法条件都
                满足，交易台不需要选。</b>进场倒是需要选，而且它的解落在
                交易台的反面：框架写的是{' '}
                <em>≈$78,200 · 0.2R · 不追</em>，所以交易台挂限价、不付收盘。
                点着之后的低点：基准读法下 <b>$78,351.00 @08-25 23:52Z</b>
                （在限价上方 <b>$151.00</b>）、严格读法下{' '}
                <b>$78,410.30 @08-26 00:05Z</b>（上方 <b>$210.30</b>）。
                <b>这两个都不是实时距离。</b>锚上现货是 $78,612.26，所以从
                这里成交需要再走 <b>$412.26（−0.52%）</b>才能把限价打到；
                $151.00 与 $210.30 是已经收口的历史差价、不作为条件往前带。
                <b>状态：已点着、未成交、无仓位 —— 这是一条交易台指令、
                不是被核实过的券商状态。</b>本次没有载入任何订单簿、委托号、
                挂单 / 撤单标志或成交回报，所以本篇不断言「挂单在场」；
                被断言的是交易台自己的指令：除非撤销，把 ≈$78,200 的限价挂着。
                空仓同样是交易台的陈述、不是与持仓源对过的账。有两件事记在
                框架的反面、不是正面。第一，08-25 这个 session 交到
                $81,270.50 —— 穿过 $80,000 第一目标、并高出今天重算的
                W-SMA50 $221.34 —— 但那个印子落在 <b>08-25 02:17Z</b>、
                在 23:00Z 那根点火收盘敲下<em>之前 20h43m</em>，所以它不算
                目标触达、也不按目标触达计。第二，这笔交易所锚的 dealer 台阶
                在这个 session 结构性变差：$77,000 翻到 −0.967M、$77,500
                加深到 −2.790M、$78,500 翻到 −0.969M、$78,000 自己松了
                −2.421M，现货下方共有行权价掉了 $13.99M，而上方 22 个共有
                行权价按 16 上 / 6 下的分裂合计加了 $9.48M。论点变弱了。
                <b>水位也不为这个动。</b>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态（交易台指令 · 非券商核实）</span><span className="dn-lvl-v"><b>已点着 · 未成交</b> · 点火腿在 08-25 22:00 标签、敲于 23:00Z 的收盘上点着（严格读法则是 23:00 标签、敲于 08-26 00:00Z 的收盘）· 进场腿从未被交到 · 无仓位、无部分成交 · <b>未载入任何订单状态、订单簿或成交源</b>，所以这一行记的是交易台的指令、不是券商的确认</span></div>
                <div><span className="dn-lvl-k">点火证据</span><span className="dn-lvl-v bull">触发印子 08-25 21:08Z 低 $77,808.10（21:07Z–21:10Z 四根 ≤ $78,000 的分钟 bar）· 确认的交易所 1h 收 $78,535.80（21:00 标签、敲于 22:00Z）与 $78,850.10（22:00 标签、敲于 23:00Z）· 严格读法的两根收 $78,850.10（敲于 23:00Z）与 $78,505.40（23:00 标签、敲于 08-26 00:00Z）</span></div>
                <div><span className="dn-lvl-k">进场（不变、未重新定价）</span><span className="dn-lvl-v bull">限价 ≈$78,200 · 0.2R · <b>不追</b> —— 点火收盘 $78,850.10 在限价上方 $650.10，付它正是这条条款禁止的事 · <b>从 00:05Z 锚起算的实时距离：$412.26（−0.52%）</b>，不是那个历史上的 $151.00</span></div>
                <div><span className="dn-lvl-k">新增 —— 指令时长（在写下的这一刻关掉的缺陷）</span><span className="dn-lvl-v"><b>≈$78,200 的限价挂到 2026-08-27 00:00Z 日收为止，未成交即失效。</b>08-25 那个框架给它的<em>点火</em>规则点了口径也点了时长，却给它的<em>订单</em>两样都没点；一张没有到期的已点着限价，是一个会漂成另一笔交易的长期挂单。一根日 bar，然后它要么被书面重新决定、要么就死掉</span></div>
                <div><span className="dn-lvl-k">止损（不变 · 固定数字、不是 MA）</span><span className="dn-lvl-v bear">1d 收 &lt; <b>$77,248.42</b> · 今天重算的 W-EMA50 读 $77,294.85、高 $46.43 —— 止损是那个被写下来的数字、不是它出身的那条移动线 · 从 $78,200 进场算是 $951.58 风险；从现货 $78,612.26 算在下方 1.74%</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">$80,000 固定（从限价 +2.30%）然后 W-SMA50 —— <b>两个版本都引</b>：08-25 写下时的 $81,784.71、今天重算的 $81,049.16，差 $735.55。用一条移动 MA 当目标是同一个缺陷家族的第四个实例，这里是标出来、而不是悄悄重定基准</span></div>
                <div><span className="dn-lvl-k">处置规则（不变）</span><span className="dn-lvl-v bear">一根 1d 收在 $77,248.42 之下就让它退役、台阶持稳这个论点就是错的 · 一根 1d 收在 <em>写下时的</em> $81,784.71 之上而没有成交，就以「挂太低」退役 · 两个分支都没点着：08-25 收在 $78,505.40</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R（示例、不变）：</b>限价 $78,200、止损 $77,248.42 =
                $951.58 风险；第一目标 $80,000 = $1,800 回报 ={' '}
                <b>1.8916:1</b>。这个比值是在选定水位上的算术、不是证据，
                而且它正被那层这个 session 在现货下方薄了 $13.99M 的 γ 支撑
                <em>美化</em>着 —— 止损坐在一层比这个比值被算出来时可测量地
                更没人防守的台阶底下。<b>硬规则，第三次重申：</b>
                进场不上抬去迎盘面、止损不下移去活下来、差一点也不放松闸门。
                一道在错过之后被放松的闸，是由懊悔设定的闸。这次错过{' '}
                <em>换来</em>的是上面那个到期，因为它暴露的缺陷是真实且结构性
                的、不是运气问题。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 追空 · <b>按下</b> —— 连续第五个 session · 两条腿都朝触发方向挪了一点，这是五个 session 里的第二次（08-23 是第一次），而且两条都仍然离得很远</span>
              <div className="dn-trade-name">
                追空 —— 再次按下；这是五个按下的 session 里第二个证据往对的
                方向动的，动的量什么也改变不了
              </div>
              <div className="dn-thesis">
                两条腿会把一个空头放上桌面：价格腿（现货进入 0-γ flip 的射程、
                dealer 本子在那里从阻尼转为放大）和 γ 腿（正夹持在瓦解）。
                这个 session 两条都朝<em>触发方向</em>动了 —— 而对这次移动的
                诚实丈量，正是这笔交易仍然被按下的理由。
                <b>序列，写在这里是因为它替换掉的草稿把这叫作「首次」：</b>
                在五个按下的 session 上，γ 腿读 08-22 <b>+249.91M</b> →
                08-23 <b>+242.37M（−7.54M）</b> → 08-24{' '}
                <b>+247.69M（+5.32M）</b> → 08-25 <b>+256.84M（+9.15M）</b>
                → 08-26 <b>+252.35M（−4.49M）</b>，而价格腿在 08-22 读
                18.84%、在 08-23 读 17.48%。<b>08-23 就已经把两条腿都朝触发
                方向挪过，而且它的夹持跌幅比今天更大</b>，所以今天是这段序列
                里第二次双腿改善、也是 08-23 之后的第一次，不是任何意义上的
                首次。今天的价格腿：flip 上抬 $224 到{' '}
                <b>$64,225.19</b>、同时现货落 $320.54，所以所需下跌从{' '}
                <b>18.92% 收窄到 18.30%</b> —— 0.62 个百分点，在一条需要
                十八个百分点的腿上。今天的 γ 腿：脚算夹持松了{' '}
                <b>−4.49M 到 +252.35M</b> —— 这段序列的第二次下降，而它出发
                的水位仍然是已核对的 post-08-16 谱系里第三深。和这些并排的
                是：这个 session 供出的均值回归证据比此前任何一个都多 ——
                一根 1 根 bar 新的 8h 水上死叉、仍然活着的 1d TD9 SELL、
                12h RSI 80.6 与 1d 80.0、塌到 40 区的快周期 RSI、三个顶背离、
                一个在现货上方第一条周线 MA 上被拒的高点，以及一根 −0.42%
                的 24h 印子。<em>
                  它仍然不是一个空头。在一本 +252.35M 的正 γ 本子上、在
                  flip 上方 22.40% 的地方、在一张 7 多 / 0 空 的 MTF 图和一个
                  18-of-20 为正的矩阵里做空，是一笔没有结构支撑的交易。
                  一堆超买振荡器加 0.62 个百分点的腿部改善，不是结构支撑的
                  替代品。
                </em>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">按下 —— 这个快照上不考虑任何空头</span></div>
                <div><span className="dn-lvl-k">价格腿（未满足 · 更近）</span><span className="dn-lvl-v bear">现货进入 0-γ flip $64,225.19 的射程 —— 一根 18.30% 的下跌够到它（前 18.92%）；现货在它上方 +22.40%、按文件的 Deribit 指数 $78,713 算是 +22.56%</span></div>
                <div><span className="dn-lvl-k">γ 腿（未满足 · 更近）</span><span className="dn-lvl-v bear">脚算 aggregate 转负或朝零塌 —— 当前 +252.35M（头条卡片 +245.9M）、松了 −4.49M · 26AUG26 今天 08:00Z 以 −2.04M 结算、28AUG26（+74.12M / 29.37%）在 2026-08-28 08:00Z 结算：60 小时内两个有日期的候选</span></div>
                <div><span className="dn-lvl-k">不要做</span><span className="dn-lvl-v">不要把新鲜的 8h 死叉、活着的 1d TD9 SELL、80 区的 12h/1d RSI、三个顶背离或 W-SMA50 的拒绝读成做空触发 —— 它们是不要<em>追多</em>的理由，而那是和做空不同的一条指令，何况交易台本来就没在追多</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>γ 腿现在在 60 小时内有两个有日期的候选、
                此前只有一个，而价格腿一个都没有。这个不对称就是这个框架
                是一个 watch 而不是一张单子的全部理由。另外注意 28AUG26 的
                占比历史真正显示的是什么：四个 session 上 36.17% → 33.71% →
                31.28% → 29.37%，{' '}
                <em>而同期这条条先 +14.47M 再 −4.49M</em> —— 这一行是在对一本
                先长后松的本子失去份额，那是一个关于新 γ 被写在哪里的构成
                事实，不是 28AUG26 的贡献正在衰减的证据。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">台账 · 差一点 / 处置记录 · <b>新增第四个事件 —— 第三次差一点</b> · 行单位 = 一个有日期的差一点或处置事件，照 08-25 的定义</span>
              <div className="dn-trade-name">
                差一点台账 —— 八天里的第四个事件、其中被归类为差一点的第三个，
                也是台账上第一行框架真的点着过的
              </div>
              <div className="dn-thesis">
                08-25 备忘开了这本台账、把它的行单位定义为{' '}
                <em>一个有日期的差一点或处置事件</em>、当时停在三行。今天加上
                第四个<em>事件</em> —— 而因为第 3 行被归类为处置、不是差一点，
                所以它只是<b>第三次差一点</b>。这两个计数在本篇里全程分开：{' '}
                <b>4 个台账事件、3 次差一点、1 次处置。</b>这新的一行在性质上
                也和前三个不同：那三个记的是一个从未点着的框架，这一个记的是
                一个正确点着、却在自己的规则下无法成交的框架。
                <b>保留这本台账的意义就在这个区分上。</b>两个方向正确的判断
                加上在一段 +21.72% 的七日行情里零仓位，本来就是交易台敞着的
                成本；第三个框架准时点着、然后差 $151.00，不改变那个成本的
                符号，但改变它的诊断 —— 问题不再是「闸设在盘面已经离开的
                水位上」，而是「一个点火规则不会把你送到的进场价」。这两者
                里有一个是靠把订单写清楚就能修的。08-19 那个 scout
                （进场 ≈$64,632、止损 $63,301、目标 $66,343 / $66,391）
                维持 <b>到期未成交</b>、毛 10.03R / 按点名的 0.2R 规模约
                2.01R，两个目标都在 2026-08-19 15:05Z 触达，不变、不重新
                翻案。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">第 1 行 · 2026-08-23</span><span className="dn-lvl-v">回踩多第 2 腿 —— 最低的交易所 1h 收 $76,020.30，在 $76,000 带顶上方 <b>$20.30</b>；1m 低 $75,588.00 进到带内 $412.00，但没有一根小时守住</span></div>
                <div><span className="dn-lvl-k">第 2 行 · 2026-08-24</span><span className="dn-lvl-v">回踩多第一目标 $80,000 —— 24h 高 $79,991.00，差 <b>$9.00</b>，而那个框架从未点着</span></div>
                <div><span className="dn-lvl-k">第 3 行 · 2026-08-25</span><span className="dn-lvl-v">回踩多按预先承诺的处置规则 <b>未成交即退役</b>（08-24 日收 $78,953.00 对 $78,446.94 的盖顶、+$506.06 / +0.65%）—— 这是处置、不是差一点；不存在成交价，所以不算任何 R</span></div>
                <div><span className="dn-lvl-k">第 4 行 · 2026-08-26（新 · 第 3 次差一点）</span><span className="dn-lvl-v bear">回踩持稳多在 08-25 22:00 标签、敲于 23:00Z 的收盘上 <b>点着</b>、从未成交 —— 点着后低点 $78,351.00 对 ≈$78,200 限价 = <b>$151.00</b>；严格读法（23:00 标签、敲于 08-26 00:00Z）下低点 $78,410.30 = $210.30。这两个都是已收口的历史距离；00:05Z 锚上的实时缺口是 <b>$412.26</b>。台账上第一行「点着又错过」；不算 R，因为仍然没有成交价</span></div>
                <div><span className="dn-lvl-k">带着的未关设计缺陷</span><span className="dn-lvl-v"><b>(a)</b> 只要 SM feed 还在产生一分钟名册断层，<code>net_btc</code> 闸就不成立 —— 连续五个 session 的证据 · <b>(b)</b> 每一道带状闸在发布前都必须点名它的价格口径<em>和</em>它的时长 —— 08-25 已关 · <b>(c)</b> 新：一条点火规则必须与它自己的进场价可以同时被满足，否则这条指令必须带一个到期 —— 今天靠给 ≈$78,200 限价一个 08-27 00:00Z 的失效关掉 · <b>(d)</b> 新：用移动 MA 引的目标会在框架底下重定基准（一个 session 里 $81,784.71 → $81,049.16）—— 已标出、尚未关 · <b>(e)</b> 新：一条小时 bar 条件必须说明它的标签指的是这根 bar 的开还是它的收 —— 交易所 bar 是左标签，所以 22:00 标签那根点火收盘敲在 23:00Z，而 v1 草稿正是在这个混淆上把那段远征的时距写错了 —— 已标出，且本篇每一处 bar 引用现在都同时带标签与敲下时刻</span></div>
              </div>
              <div className="dn-gating">
                <b>流程注记：</b>这本台账存在的意义，是让纪律的成本被公开地
                背着、而不是事后被辩论。八天四个事件是很多，而正确的回应
                仍然不是把闸放宽。而是去注意：四个事件里有三个追溯到一次
                <em>规格</em>失败、不是一次方向失败 —— 一个缺失的口径、
                一个缺失的时长、一次缺失的可同时满足性检查 —— 而规格失败是
                一张交易台真正能靠写得更仔细来修的唯一一种。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 点火规则点着了、进场从未被交到 · funding 的放开被证明是可逆的 · 交易底下的台阶变薄 · 本子空仓（交易台陈述、未载入持仓源）、带着一条挂着的限价和一个 24 小时的钟</span>
            </h2>

            <p>
              08-25 那批条件的结算：回踩持稳的{' '}
              <b>触发条件点着了</b>、完全按规格（21:07–21:10Z 四根
              sub-$78,000 印子、确认收盘 $78,535.80 与 $78,850.10，第二根按
              左标签口径敲在 23:00Z），而{' '}
              <b>进场从未被交到</b>、回撤在框架自己的不追条款下停在差
              $151.00；两个处置分支都没点着（08-25 收 $78,505.40、在
              $77,248.42 之上、在 $81,784.71 之下）；追空的两条腿{' '}
              <b>都朝触发方向动了 —— 这是五个 session 里的第二次、08-23
              是第一次</b>，两条都仍以很宽的幅度未满足；解钉条件{' '}
              <b>部分满足</b> —— OI 在匹配端点上收缩 −0.46%、此前一个 session
              是扩张 +1.58% —— 而{' '}
              <b>funding 从封顶上的放开在一个 session 内被收回又重给</b>，
              这让它作为一条独立条件退役，直到出现一段活过 434 个流逝分钟
              （435 采样行）的跑；散户 <b>重新拥挤 +1.44pt</b>、买了那根点火
              印子而不是离场；1d TD9 SELL <b>仍然印着</b>、并且多了一根 8h
              水上死叉；而新鲜的宏观印子{' '}
              <b>把 08-25 的敌意部分且不均匀地反转了</b> —— 10Y 退出 episodic
              并吐回它 +5bp 的 80%，而 TIPS real 从来不是 episodic、只吐回
              40%。{' '}
              <em>
                一条干净点着，一条在点着之后按自己的条款失败，两条朝对的方向
                动了但动的量什么也改变不了，还有一条 —— 进场底下的 γ 台阶 ——
                在根本没有任何条件被写来接住它的情况下变坏了。最后这一条是
                本篇留着敞开、而不是糊过去的缺口。
              </em>{' '}
              条件围绕一条挂着的、带钟的限价重置：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>回踩持稳多 —— <b>已点着，限价挂着（交易台指令、非券商核实）</b></td><td className="bull">限价 ≈$78,200、0.2R、不追 · <b>从 00:05Z 锚起算的实时缺口：$412.26（−0.52%）</b> · 点着后低点 $78,351.00 的那个 $151.00 是已收口的历史距离、不是条件</td><td>原样挂着；一个 ≈$78,200 的印子 = 0.2R 多，止损 1d 收 &lt; $77,248.42、第一目标 $80,000</td></tr>
                <tr><td>指令失效（新 —— 关掉缺陷 (c)）</td><td className="bear">到 2026-08-27 00:00Z 日收仍未成交</td><td>撤下限价，框架要么被书面重新决定、要么退役；不许无声地带过去</td></tr>
                <tr><td>回踩持稳止损 / 处置</td><td className="bear">1d 收 &lt; $77,248.42（在现货下方 1.74%）</td><td>框架退役、台阶持稳论点被证伪、看多结构从头重估</td></tr>
                <tr><td>回踩持稳「挂太低」处置</td><td className="bull">1d 收 &gt; $81,784.71（<em>08-25 写下时的</em> W-SMA50）且没有成交</td><td>以挂太低退役，和它的前任一样 · 注意今天重算的 W-SMA50 是 $81,049.16 —— 以写下的数字为准</td></tr>
                <tr><td>funding 去拥挤（已重新规格化）</td><td className="bear">一段超过 <b>434 个流逝分钟（435 采样行）</b>的离顶跑 —— 也就是已经回吐的那一段的长度</td><td>只有到那时「funding 下了封顶」才算证据；当前这段 245 分钟 / 246 行不算</td></tr>
                <tr><td>进场底下的 γ 台阶（新 watch）</td><td className="bear">$77,000 / $77,500 / $78,500 已经为负；$78,000 松到 +24.74M</td><td>如果 $78,000 自己转负，回踩持稳就失去它的结构锚，在触及止损之前就要重估</td></tr>
                <tr><td>追空价格腿</td><td className="bear">现货进入 0-γ flip $64,225.19 的射程 —— 一根 18.30% 的下跌</td><td>不动作；这条腿差着一个数量级</td></tr>
                <tr><td>追空 γ 腿</td><td className="bear">脚算 aggregate 朝零 —— 当前 +252.35M · 26AUG26 今天 08:00Z 结算（−2.04M）、28AUG26（+74.12M / 29.37%）08-28 08:00Z 结算</td><td>盯两次结算；一次实质性的变薄，是第一件会让这个空头成为一场对话的事</td></tr>
                <tr><td>SM 可采信性</td><td className="stale">不可采信、第五个 session · Δnet 的 72.50% 落在一分钟里 · 06:21Z–07:06Z 的台阶时间带被今天的 02:26Z 打断</td><td>这张本子上没有条件读 net_btc；在这个 feed 被搞明白之前，保持这样</td></tr>
                <tr><td>宏观重新转敌意</td><td className="bear">10Y regime z 回到 +2.10 以上 <em>并且</em> 在一根新鲜的日频印子上 episodic z &gt; +1.5</td><td>会重新点亮 08-25 那条宏观 caveat；10Y 当前 +1.98 / +0.72、已退出 episodic（前 +1.52）· TIPS real +1.92 / −0.42 从来不是 episodic（前 +0.10）、不属于这道闸 · Fed 净流动性 −2.45 episodic 是唯一实时的 Tier-1 旗</td></tr>
              </tbody>
            </table>

            <p>
              唯一会改写<em>这一篇</em>的那条线，是{' '}
              <span className="dn-signal">
                盘面会不会在 2026-08-27 00:00Z 之前印出 ≈$78,200 —— 从 00:05Z
                锚上的现货 $78,612.26 起算，这需要再走{' '}
                <b>$412.26 / −0.52%</b>，而不是昨夜盘面已经不肯还回来的那个
                $151.00。那个 $151.00 是一个已经了结的历史差一点、不是向前的
                条件。如果限价真的被打到，交易台就在 ≈$78,200 上有 0.2R 多、
                固定止损 $77,248.42、第一目标 $80,000 —— 一个按自己的规则
                点着、按自己的价格成交、并终于把一个仓位摆在一本 +252.35M
                正 γ 本子和一个 18-of-20 矩阵对面的框架。如果这 $412.26
                没有到来，这条指令就死在本篇刚刚给它的钟上，台账添第五个
                事件，而交易台将会写下三个连续正确的框架、一个都没交易
              </span>
              。两个结局都不会因为今晚挪一条水位而变好。在那之前本篇按写下的
              样子运行：回踩持稳限价挂在 ≈$78,200、带一个 24 小时的失效 ——
              这是一条交易台指令，因为没有载入任何订单状态源来确认一张挂着
              的单子 —— 止损是那个被写下来的数字、不是它出身的那条 MA、
              追空第五个 session 按下、两条腿更近但都无关紧要、SM feed 保持
              不可采信且不被任何闸使用、funding 的放开从证据降级为噪声、
              直到出现一段跑赢 434 个流逝分钟的段，而进场底下那层新变薄的
              γ 台阶在它造成损失之前先拿到属于它自己的 watch 条件。
              未来 24h 的正确读法是{' '}
              <em>这条指令就是那个决定 —— 不要用手再决定一次</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2 · 已过 codex 敌对式审计 ·{' '}
              <code>audits/2026-08-26-desk-note.md</code> · 对 v1 裁定
              BLOCK-CRITICAL（4 CRITICAL · 5 MAJOR · 4 MINOR · 1 NIT）·
              14 条全部应用并已 grep 收口
            </span>
            <b>
              STAGE B 裁定：codex 敌对但公允的 xhigh 审计在四条时序 / 谱系 /
              动作条件失败与五条重大越权失败上拦下了 v1 草稿。
            </b>{' '}
            <b>STAGE C 适用的范围规则：</b>每一条 finding 都被当成一整{' '}
            <em>类</em>需要在全文件范围内改正的错误主张来处理，而不是被当成
            一份行号清单 —— 审计引用的 <code>file:line</code> 只用作主要示例。
            这个区分正是 2026-06-08 / 06-09 两次 pipeline 失败被记录在案的
            根因。随后每一条 CRITICAL 与 MAJOR 都在整个 EN 文件上跑显式 grep
            闭环（搜索的模式 → 修前仍带旧含义的命中 → 修后命中），循环到
            零残留为止。<b>逐条记录：</b>
            <div className="dn-lvls">
              <div><span className="dn-lvl-k">DN-001 · CRITICAL · 「谱系首次点着而无仓位」是假的</span><span className="dn-lvl-v">模式：<code>for the first time</code>、<code>first time in this</code>、<code>first-ever</code>、<code>the first session in</code> · 修前 3 处 · 修后 <b>0</b> · 换成有范围、有日期的主张，并点名两个反例（2026-07-22 <em>递延 → ARMED</em>、「ARMED 但没上线」；2026-08-06 0.2R 起手仓点着并按市价成交），同时给出稳定的区分定义 —— 一条自带口径与时长、提前发布的点火规则按写的样子点着，而另行点名的限价从未被交到 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-002 · CRITICAL · 点火时戳与「八小时」时距写错</span><span className="dn-lvl-v">模式：<code>eight hours</code>、<code>02:xxZ</code>、<code>22:00Z close</code>、<code>FIRED 08-25 22:00Z</code> · 修前 7 处（导语、交易块、状态 / 证据行、台账第 4 行、决策条件）· 修后 <b>0</b> · 交易所 1h bar 是左标签，所以 22:00 标签那根点火收盘敲在 <b>23:00Z</b>、严格读法的 23:00 标签收盘敲在 <b>08-26 00:00Z</b>；本段高点定在 <b>08-25 02:17Z</b>、到点火收盘的时距是 <b>20h43m</b>，从 <code>btcusdt_1m_2026.parquet</code> 重算。本篇每一处 bar 引用现在都同时带标签与敲下时刻，标签缺口记为带着的缺陷 (e) · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-003 · CRITICAL · 把过期的 $151.00 差价当成向前条件</span><span className="dn-lvl-v">模式：<code>gives back</code>、<code>give back</code>、向前语境下的 <code>$151.00</code> · 修前 4 处向前用法（交易论点、决策条件表、收尾段、落款）· 修后向前用法 <b>0</b>（残留的 <code>$151.00</code> 全部被明确标为已收口的历史距离）· 实时条件现在一律写成现货 $78,612.26 − 限价 $78,200 = <b>$412.26 / −0.52%</b> · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-004 · CRITICAL · 「首次双腿改善 / 首次正 GEX 下降」是假的</span><span className="dn-lvl-v">模式：<code>for the first time in five</code>、<code>first session in five</code>、<code>first decline</code>、<code>first time in this framework</code> · 修前 5 处 · 修后 <b>0</b> · 五个 session 的完整 γ 腿序列现已内联印出 —— 08-22 +249.91M → 08-23 +242.37M（−7.54M）→ 08-24 +247.69M（+5.32M）→ 08-25 +256.84M（+9.15M）→ 08-26 +252.35M（−4.49M）—— 并列出价格腿 18.84%（08-22）→ 17.48%（08-23）；08-26 被描述为<b>第二次</b>双腿改善、08-23 之后的第一次，且注明 08-23 的夹持跌幅更大 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-005 · MAJOR · 「现货上方全都变重」这个全称是假的</span><span className="dn-lvl-v">模式：<code>everything above</code>、<code>got heavier</code> · 修前 3 处（导语、第 III 节副标、行权价迁移段）· 修后带原义的命中 <b>0</b>（唯一残留的一处明确写着这个全称<em>是错的</em>）· 从冻结的 08-25 与 08-26 <code>btc_gex.html</code> 行权价数组重算：47 个共有行权价、其中 22 个在现货上方，<b>16 上 6 下</b>、合计 <b>+$9.476M</b>；六个下跌者全部在正文点名 —— $79,500 +2.133 → +0.868、$80,000 +44.280 → +40.789、$80,500 +1.721 → +0.334、$81,000 +11.951 → +11.507、$88,000 +7.079 → +6.941、$92,000 +2.059 → +1.975 · 下方数字改写为 −$13.987M，四舍处一律统一为 $13.99M · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-006 · MAJOR · 资金流分类超出已载入盘面</span><span className="dn-lvl-v">模式：<code>rotation, not a liquidation</code> · 修前 1 处 · 修后 <b>0</b> · 降级为「与换手一致，而这个 feed 排除不了清算」，并明确点名能区分两者的数据（毛开仓与毛平仓、账户级生命周期、强平成交流 —— 均未载入），同时指出可得的合计序列在两种机制下会返回同样的数值 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-007 · MAJOR · 前一段 RV 带前视，使 IV/RV 分解不成因果</span><span className="dn-lvl-v">模式：<code>43.34</code>、<code>59.2%</code>、<code>40.8%</code>、<code>+3.26pt</code>、<code>2.45pt</code> · 修前 6 处 · 修后按发布口径 <b>0</b> · 在完整 parquet 集上重算：截至 <b>2026-08-25 00:04Z</b> 的同口径 30D RV 是 <b>43.1981%</b>（它把 08-25 备忘的 +3.40pt 复现为 46.6 − 43.1981 = 3.4019pt，所以拿掉前视后不存在窗口构造差异），今天 00:05Z 的 RV 是 <b>41.8922%</b>、价差 3.4019 → 5.7078pt = <b>+2.3059pt</b>，其中 RV 贡献 <b>56.6%</b>、IV 贡献 <b>43.4%</b>。前视变体（跑到 2026-08-25 23:59Z 的 43.3362%、59.2 / 40.8）只印一次，并明确标为非发布数字 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-008 · MAJOR · 「两条都下了 episodic / 都吐回大部分」的合并宏观主张</span><span className="dn-lvl-v">模式：<code>both off episodic</code>、<code>given back most</code>、<code>reversed the 08-25</code> · 修前 5 处（第 IV 节副标、宏观正文 ×2、宏观表 ×2、决策条件段）· 修后 <b>0</b> · 按面板自己的 <b>|z| &gt; 1.5</b> 阈值从冻结面板读出并内联写明：10Y episodic <b>+1.52 → +0.72</b> = 退出 episodic、−4.0bp 吐回前 +5.0bp 的 <b>80%</b>；TIPS real episodic <b>+0.10 → −0.42</b> = <b>从来不是 episodic</b>、−2.0bp 只吐回 <b>40%</b>。两条线在副标、正文、表格读法列与宏观重新转敌意闸里全部分开；数据来源那条 flag 也据此改写 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-009 · MAJOR · 在没有订单状态源的情况下断言「挂单在场」</span><span className="dn-lvl-v">模式：<code>order live</code>、<code>limit is live</code>、<code>stays working</code>、<code>working order</code>、<code>work the limit</code>、<code>order stays</code>、<code>order dies</code>、<code>live limit</code> · 修前 9 处 · 修后 <b>0</b> · 每一处都改标为<b>交易台指令</b> ——「除非撤销，把 ≈$78,200 限价挂着」、「已点着 · 未成交」、「指令失效」—— 并明确披露未载入任何订单簿、委托号、挂单 / 撤单标志或成交源；空仓同样在导语、交易块与第 VI 节副标里标为交易台陈述、不是与持仓源对过的账 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-010 · MINOR · 把采样行等同于流逝分钟</span><span className="dn-lvl-v">模式：<code>246 min</code>、<code>435 minutes</code>、<code>of 1,441 minutes</code>、<code>4h06</code> · 修前 8 处 · 修后 <b>0</b> · 口径「N 行的一段跨 N−1 个一分钟间隔」在 funding 段与数据来源条带各写一次，然后全篇照办：当前离顶段 <b>246 行 / 245 流逝分钟 = 4h05m</b>、已回吐的那段 <b>435 行 / 434 流逝分钟 = 7h14m</b>、钉住段 859 行 / 858 分与 166 行 / 165 分、封顶占用 1,025 / 1,441 <em>行</em>、基差贴水 1,024 / 1,441 <em>行</em>。重新规格化的 funding 去拥挤闸现在读「超过 434 个流逝分钟（435 采样行）」 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-011 · MINOR · 周期分位的分子未点名、且与所在段不一致</span><span className="dn-lvl-v">模式：<code>39 of 166</code>、<code>40 / 166</code>、<code>1.2149</code> · 修前 3 处 · 修后未标注者 <b>0</b> · 两个口径都印、都不混：按未收盘的 parquet 周收 $78,432.40 比已收盘 W-SMA200 $64,558.707，比值 <b>1.214900</b>、39 / 166 严格更低、含并列 40 / 166；按 live 锚现货 $78,612.26，比值 <b>1.217686</b>、41 / 166 严格更低、含并列 42 / 166。两者均自 parquet 独立重算 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-012 · MINOR · 「这段连跑里第一根 24h 负值」没有连跑边界</span><span className="dn-lvl-v">模式：<code>first negative 24h</code>、<code>of the run</code> · 修前 1 处 · 修后 <b>0</b> · 换成有日期、可复现的事实（$78,945.07 → $78,612.26 = −$332.81 / −0.42%，正好 1,441 行的窗），并附上 08-23 已印过 −0.89% 这个反例，且不主张任何「连跑」边界 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-013 · MINOR · 「第四次差一点」与台账自己第 3 行的处置标签矛盾</span><span className="dn-lvl-v">模式：<code>fourth near-miss</code>、<code>FOURTH ROW</code>、<code>four rows</code> · 修前 4 处 · 修后 <b>0</b> · 两个计数分开并全程一致 —— <b>4 个台账事件、3 次差一点、1 次处置</b> —— 出现在导语、台账侧标、台账名、论点、第 4 行的键与流程注记里；收尾段现在说台账会添第五个<em>事件</em> · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-014 · NIT · 「跨 N 个合约」留了生产占位符</span><span className="dn-lvl-v">模式：<code>across N instruments</code> · 修前 1 处 · 修后 <b>0</b> · 按冻结 GEX 面板换成 <b>966 合约</b>，并保留「这是链中位、既不是可交易价差也不是 strike-level IV」的警告 · <b>已解决</b></span></div>
            </div>
            <b>收口陈述：</b>14 条全部报告 grep 修后命中为 0，没有任何一条
            被当作未解决带过，因此本篇从 v1 晋级到 v2。四个新发布的更正背后
            的算术都在 STAGE C 发布前独立重算过、不是从审计里抄的：02:17Z
            的高点、20h43m 的时距与 22:00 / 23:00 的左标签行为来自{' '}
            <code>btcusdt_1m_2026.parquet</code>；16 上 / 6 下的上方分裂与
            +$9.476M / −$13.987M 的合计来自两张冻结的{' '}
            <code>btc_gex.html</code> 行权价数组；43.1981% / 41.8922% 这一对
            对齐 RV 与 56.6 / 43.4 的分解来自完整 parquet 集；1.214900 对
            1.217686 的周期比值与它们 39 / 41 的严格名次来自 166 个观测的
            周序列。<b>codex 确认干净、原样带进 v2 的部分：</b>
            <code>requireViewer(&apos;/desk/2026-08-26&apos;)</code> 作为默认
            导出的第一条语句、且与路由完全一致；markup 完整性；锚上精确的
            价格 / OI / CVD / 大单算术；smart-money 02:26Z 台阶算术；
            价格历史极值；完整 20 格 MA 矩阵及其 2,545 日 / 365 周的样本数；
            除 DN-005 之外的全部 GEX 算术；MTF 面板状态与 BJ↔UTC 换算；
            跨资产面板；陈旧度台账；未载入边界（NTT、max pain、strike-level
            IV、BTC/NQ 比率，JGB 不用于方向）；以及交易算术与 0.2R 范围。{' '}
            <b>已承认、但本轮未关掉的开放问题：</b>2026-08-21 的 GEX 存档
            仍然缺失，所以「第三深」这个序数只对可得的日期面板成立、不对一份
            不间断的存档；<code>weekly_200sma.json</code> 仍然不在盘上、周期
            这一读仍是披露过的 parquet fallback、限定在 166 个周观测上；
            <code>live_db.json</code> 在本窗之外的第 65,799 物理行上有一行
            只含 NUL 的无效记录、摄入应当修复；不存在订单状态源，这正是
            DN-009 靠改标签而不是靠证据关掉的原因；SM feed 的上游成因仍然
            未载入，这也正是这张本子上没有条件读 <code>net_btc</code>
            的原因。{' '}
            <b>滚动源归档：</b>mtf_div_latest.html、btc_gex.html、
            macro_dashboard.html 与 cross_asset_correlation_summary.md 在
            Stage A 开始时被拷到{' '}
            <code>/opt/desk-note/snapshots/2026-08-26-0007/</code>，本篇每一个
            数值都从那份归档读，所以 Stage B 审计读到的是完全相同的字节。{' '}
            <b>构建注记（INFO）：</b>这台服务器跑 Node 18.19.1、而 Next 16.2.6
            在低于 Node 20.9.0 时硬退出，所以完整的 <code>next build</code>
            仍被环境挡住；<code>npx --no-install tsc --noEmit</code> 是构建
            代理、在这份 v2 上以 exit 0 通过，针对本文件的 ESLint 同样通过。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体情况
            个性化。数字反映单一原子快照（2026-08-26 00:07Z、盘面锚行
            00:05Z，锚行的 <code>t</code> 字段是北京时 08-26 08:05），
            provenance 在上方数据来源条带中按节披露。{' '}
            <b>
              这是 v2、在 codex 敌对式审计之后晋级 —— 裁定记录在{' '}
              <code>audits/2026-08-26-desk-note.md</code>，对 v1 判
              BLOCK-CRITICAL、4 CRITICAL + 5 MAJOR + 4 MINOR + 1 NIT
              共 14 条 findings 全部就地修正并用全文件 grep 收口，逐条的
              修前 / 修后命中记录在上方审计痕迹里
            </b>
            。宏观面板渲染于 2026-08-25 22:17Z（比锚早约 1.8h）；MTF 与 GEX
            人造物都是 00:01Z、<b>比盘面锚早约 4 分钟</b> —— 是相对它更旧、
            不是更新；200W 周期地板 watch 文件<em>不存在</em>、它的读数是
            披露过的 parquet fallback、分位按两个分子口径印（未收盘周收
            $78,432.40 给 39 / 166 与 40 / 166；live 现货 $78,612.26 给
            41 / 166 与 42 / 166），并且限定在 166 个周观测上、不是 BTC
            的完整历史；GEX 文件的 Deribit 指数比 live 现货高 $100.74、
            所以每一个距离数字都按两个参考印；aggregate GEX 的两个口径
            全部披露、任何地方都不混用；post-08-16 的脚算台账缺 2026-08-21
            一天的存档，所以「第三深」这个序数只对可得的已核对面板成立；
            本次没有载入任何订单状态、订单簿或成交源，所以「已点着 / 未成交 /
            限价挂着」以及空仓都是交易台的指令与陈述、不是券商核实过的状态；
            JGB 是 FRED 月度、陈旧 85 天；IV 是跨 966 合约的链中位、
            不是可交易价差、也不是 strike-level IV；NTT pivot、max-pain、
            strike-level IV 与 BTC/NQ 比率均未载入。水位、规模与条件是交易台
            流程的示例、不是长期推荐。机会成本、差一点与反事实成交的数字
            描述的是盘面相对写下水位跑到哪里，不是已实现业绩的陈述。
            过去的相关性、γ 与仓位模式不绑定未来盘面。衍生品有全损风险、
            加杠杆下损失可超过保证金。<em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                规则准时点着了，而昨夜的回撤停在差 $151.00；从这里起算，
                同一笔成交还要再走 $412.26。我们不会为一笔全部的边就在于
                「不付高价」的交易去付高价。限价留在它被写下的地方，
                今晚它拿到本该昨天就有的到期。
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
            v2 · 2026-08-26 00:07Z 快照 · 已过 codex 敌对式审计
            （audits/2026-08-26-desk-note.md —— 4 CRITICAL + 5 MAJOR +
            4 MINOR + 1 NIT、全部 RESOLVED 并已 grep 收口）· 源：
            live_db.json · mtf_div_latest.html · btc_gex.html ·
            macro_dashboard.html · cross_asset_correlation_summary.md ·
            btcusdt_1m_*.parquet · gex_summary.json · FRED · Yahoo · Deribit
          </span>
        </footer>
      </article>
    </main>
  );
}
