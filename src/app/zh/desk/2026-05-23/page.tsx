import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap,noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-05-23 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-05-23',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-05-23' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260523() {
  await requireViewer('/zh/desk/2026-05-23');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HR · BTC · 交易台备忘 · 2026-05-23 · v2</span>
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
              <span className="dn-big">$75,543</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−2.58%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-05-23 00:08Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-05-23 00:08Z</td>
                  <td className="dn-flag">最新 · 1 分钟</td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-05-23 00:01Z scan</td>
                  <td className="dn-flag">
                    滚动 latest 文件（约每 15 分钟重写）· 较快照锚滞后约 7
                    分钟（陈旧）· 含未收盘 K 线 · 扫描存档于
                    audits/2026-05-23-desk-note.md
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 00:01Z 快照</td>
                  <td className="dn-flag">最新 · Deribit idx $75,542 对现货 $75,543 · 922 合约</td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 00:01Z
                  </td>
                  <td className="dn-flag">滞后约 7 分钟 · 7d 1h bar · 22 资产</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-05-22 22:16Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 2h · FRED Tier-1 数值新鲜 · 较 05-22 基本未变 ·
                    Tier-3 通胀面板抓取失败（仅 driver · 非承重）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-05-23 00:06Z</td>
                  <td className="dn-flag">
                    陈旧约 2 分钟 · 偏移已对现货重算
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
              <span className="dn-v">+2.2%</span>
              <span className="dn-src">live · 00:08Z · 24h 均值 +2.4% · 窗口中段一度转负</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v">+3.6% → +2.2%</span>
              <span className="dn-src">区间 −1.1% / +5.0% · 多头付得少了，仍在付</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">+4.22%（+4,250 BTC）</span>
              <span className="dn-src">live · 跌盘里长 · 新鲜空头供给</span>
            </div>
            <div>
              <span className="dn-k">Binance mkt long/short</span>
              <span className="dn-v">60.0 / 40.0</span>
              <span className="dn-src">live_db `mkt_long_pct` · 更挤多 55.3 → 60.0</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−14.5k（净 SHORT）</span>
              <span className="dn-src">live · long 11.68k − short 26.20k</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 05-22 备忘</span>
              <span className="dn-v bear">−1.3k → −14.5k</span>
              <span className="dn-src">重新加空 +13.2k BTC（long −6.2k · short +7.0k）</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">41.5% / 25.8%</span>
              <span className="dn-src">GEX IV 中位数 · 922 合约</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bear">−1.0%（在下方）</span>
              <span className="dn-src">flip $76,325 · aggregate GEX −57.1M（前 +67.4M）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              05-22 备忘点出一条改写整篇的线——$76,500–$78,300 箱体外的
              一根 1h 收盘。接下来 24 小时里，
              <span className="dn-signal">
                箱体下边破了，flip 破位空触发
              </span>
              ：2026-05-22 19:00Z 的 1h 收盘 $76,497，落进一个 −17k 的
              深度 SM 净空里，dealer 图早已转入负 gamma regime。价格已经
              带到 <span className="dn-tag bear">$75,543</span>
              （<span className="dn-tag">24h −2.58%</span>）；第一目标
              $75,700 已印，第二目标 $75,000 还差 $540。今天的故事不在
              触发本身——触发是 05-22 摆出来的。故事在触发是怎么被武装的：
              <span className="dn-em">
                05-22 快照之后六个小时，聪明钱把整本空仓重新堆了回去、
                还更多——SM net 在 05-22 的 06:30Z → 06:36Z 这六分钟里
                从 −1.3k 走到 −16.7k，价格大约 $77,400。05-22「仓位没有
                方向」的读法在六个小时里是对的。SM 重回，重回得很重，
                然后箱体在那个空仓堆的重量下面破了。
              </span>{' '}
              Dealer gamma 从 <span className="dn-tag bull">+67.4M</span>
              翻到 <span className="dn-tag bear">−57.1M</span>——约 $125M
              的 regime 翻转，从压波到放大。我们现在在 0-γ flip{' '}
              <span className="dn-tag bear">$76,325</span> 下方，处在负
              gamma 领域，SM 比过去一周任何时点都更短，而现货下方有一道
              厚重的 <span className="dn-tag bear">$75k −53.5M</span> pocket。
            </p>

            <p>
              BTC 现报 <span className="dn-tag">$75,543</span>，在 flip 下方
              $782、在前箱体底下方 $1,011。05-22 的 anchor 簇（D-EMA50
              $76,797 / D-EMA100 $76,873 / D-SMA150 $76,948）作为支撑全部
              失守——三条都被翻到头顶，<span className="dn-tag bear">D-SMA50
              $76,527 (−1.29%)</span> 与 <span className="dn-tag bear">D-EMA50
              $76,671 (−1.47%)</span> 是最近的天花板，再来是{' '}
              <span className="dn-tag bear">D-EMA100 $76,808 (−1.65%)</span>{' '}
              / <span className="dn-tag bear">D-SMA150 $76,854 (−1.71%)</span>
              紧贴。下方：薄一层
              <span className="dn-tag bull">W-SMA20 $74,943 (+0.80%)</span>，
              再到 <span className="dn-tag bull">W-EMA200 $73,687 (+2.52%)</span>，
              再到 <span className="dn-tag bull">D-SMA100 $72,593 (+4.06%)</span>{' '}
              周期之锚。RSI 被拉伸（
              <span className="dn-tag">1h 23.1</span>、
              <span className="dn-tag">30m 21.1</span>、
              <span className="dn-tag">15m 29.7</span>），并且一根 ⚡ 1h TD9
              BUY 在 $75,475 印出——这一波的第一个超卖反转提示。箱体读法
              失效；新的读法是 flip 下方、底下有负 gamma、近期有反弹冲洗
              风险。
            </p>

            <h2 className="dn-sec">
              仓位结构 <span className="dn-roman">I · 实时盘面</span>
            </h2>

            <p>
              05-22 的整套 thesis 是「SM 不再死锁空——它砍了 81%」。
              <span className="dn-signal">
                这个读法恰恰对了六个小时，然后 SM 又把空仓全部摆回来、
                而且更重
              </span>
              。SM net 从 05-22 快照的
              <span className="dn-tag">−1,290 BTC</span> 走到现在的
              <span className="dn-tag bear">−14,517 BTC</span>——一个{' '}
              <span className="dn-tag bear">−13,227 BTC 的摆动</span>，
              分解：long book{' '}
              <span className="dn-tag">17.92k → 11.68k（−6.24k）</span>，
              short book{' '}
              <span className="dn-tag">19.21k → 26.20k（+6.98k）</span>。
              这次重新加仓不是漂移：<span className="dn-em">
                SM net 在 05-22 14:30→14:36 Beijing（06:30Z→06:36Z）
                的六分钟里从 −1.16k 塌到 −16.66k，分两个离散步（14:31 时
                −1.16k → −9.68k，14:36 时 −9.68k → −16.66k），价格约
                $77,400。之后大约 17.5 小时里它在 −14k 到 −17.6k 之间
                来回，现在 −14.5k。它从未再朝零收窄、也从未跨过净多。
              </span>{' '}
              诚实的综合：05-22 说仓位中性；六个小时后仓位是整个一周里
              最空，而箱体就是在那个空仓堆下面破的。05-22 把 flip 破位空
              定到 0.3R，恰恰因为仓位「不再联署」——到触发时（19:00Z）
              仓位很大程度上又在联署、比 05-21 那一版还要重。conditional
              gating 干了它该干的事（触发时 SM 仍 &lt; 0——锁在 −17.4k）；
              规模上限没有。这条放进下版 flip 破位类交易的规模教训里。
            </p>

            <p>
              杠杆侧把堆仓的故事讲得很清楚。funding 实时
              <span className="dn-tag">+2.2% 年化</span>（多头仍付、压得
              很薄），从 05-22 端点 +3.6% 下来——而 24h 区间是
              <span className="dn-tag">−1.1% / +5.0%</span>、均值 +2.4%，
              意思是窗口中段 funding 一度<span className="dn-em">转负</span>
              （空头反过来付多头几十分钟），恰好在 SM 堆空的那个时点。
              OI <span className="dn-tag bear">+4.22%（+4,250 BTC）24h</span>
              ——价格 −2.58% 时 OI 还在长，是新鲜空头供给的签名、不是多头
              缴械；光 SM 那一笔加空就占了 short leg 增长里的约 +7.0k。
              散户（Binance mkt）
              <span className="dn-tag bear">更挤多了，55.3 → 60.0%</span>
              ——还在跌里加多。perp 对现货
              <span className="dn-tag bear">−$99 贴水</span>
              （比 05-22 的 −$70 略深）；1 分钟 aggressor skew 快照
              <span className="dn-tag">+43.7</span>
              （该指标在这个分辨率下噪声很大、分钟之间两方向都印到几十——
              当作 point read，不要当窗口均值）。
              <span className="dn-em">
                四者合起来读：SM 加空 + 价格下跌时 OI 还在长 + 散户更挤多
                + perp 贴水加深 = SM 空仓装载好了、散户是对手盘、futures
                簿在一个净买 aggressor 分钟里仍在贴水——bid 在 offshore
                （spot CVD）、不在 onshore（futures）。
              </span>
            </p>

            <p>
              窗口 flow 把一天分成三幕。24h：价格
              <span className="dn-tag bear">−2.58%</span>、OI
              <span className="dn-tag bear">+4,250 BTC</span>、spot CVD
              <span className="dn-tag bull">Δ +984</span>、futures CVD
              <span className="dn-tag bull">Δ +1,302</span>、大单
              <span className="dn-tag bull">947 笔 +1,043 BTC</span>、
              taker-net <span className="dn-tag bull">+1,300</span>——
              <span className="dn-em">
                整天净 aggressive 买、被新鲜空头供给吃掉
              </span>
              。4h：价格 <span className="dn-tag bear">−0.59%</span>、OI
              <span className="dn-tag">+172 BTC</span>、spot CVD
              <span className="dn-tag bear">Δ −583</span>、futures CVD
              <span className="dn-tag bear">Δ −561</span>、大单
              <span className="dn-tag bear">168 笔 −134 BTC</span>——
              延续卖压。1h（进快照）：价格
              <span className="dn-tag bear">−0.34%</span>、OI
              <span className="dn-tag">+6 BTC</span>、spot CVD
              <span className="dn-tag bull">Δ +292</span>、futures CVD
              <span className="dn-tag">Δ +30</span>、大单
              <span className="dn-tag bull">39 笔 +39 BTC</span>——
              一笔新鲜的现货 bid 进低位，配上印出的 TD9 BUY。把 1h 盘面
              当作反弹冲洗预警、不要当反转——同样的 flow 签名 05-21 在
              $76k 也带过、当时 SM 还没重新加空、之后走势继续。
            </p>

            <h2 className="dn-sec">
              结构 <span className="dn-roman">II · MTF 图 · 超卖拉伸</span>
            </h2>

            <p>
              多周期图从 05-22 的<span className="dn-em">中性、盘整</span>
              翻到 <span className="dn-signal">
                偏空趋势、快 TF 带超卖旗
              </span>
              。快 RSI 塌掉了——1h <span className="dn-tag">23.1</span>、
              30m <span className="dn-tag">21.1</span>、15m
              <span className="dn-tag">29.7</span>——而一根
              <span className="dn-tag bull">⚡ 1h TD9 BUY</span> 在 $75,475
              印出，是这一波的第一个超卖反转提示。中 TF 偏低但没拉伸：
              4h <span className="dn-tag">30.4</span>、8h
              <span className="dn-tag">32.3</span>。慢 TF 只是稍软：1d
              <span className="dn-tag">40.4</span>、3d
              <span className="dn-tag">48.4</span>。交叉形态：4h 印了
              <span className="dn-tag bear">水下死叉 2 根前</span>，8h
              <span className="dn-tag bear">水下死叉 1 根前</span>，30m
              水下死叉 21 根前；15m 与 1w 带
              <span className="dn-tag bull">水下金叉 4–5 根前</span>。
              云带图翻下：15m / 1d / 1M 在云上；30m / 1h / 4h / 8h / 1w
              在云下；12h 云盖刚破（云下 1 根，↑78.0k）；3d 仍在云内
              （73.5k–93.0k）。
              <span className="dn-em">
                直白读：结构向下裂开了。即时读法是快 TF 底侧拉伸——反弹
                风险真——但中、慢 TF 还没印反转形态，1d 还有空间往下跌到
                $74.6k 云盖（TD Buy 2，距 9 还差 6 根）。这是 00:01Z 的
                MTF 扫描——比 00:08Z 快照早 7 分钟，按 F-02 lineage 存档于
                audits/2026-05-23-desk-note.md。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">75,475</td><td className="num hot">29.7</td><td className="bull">金叉（水下）4b</td><td className="bear">云下 ↑76.9k</td><td>Buy 2</td><td>BULL reg</td></tr>
                <tr><td>30m</td><td className="num">75,475</td><td className="num hot">21.1</td><td className="bear">死叉（水下）21b</td><td className="bear">云下 ↑77.4k</td><td>Buy 5</td><td>BEAR hid</td></tr>
                <tr><td>1h</td><td className="num">75,475</td><td className="num hot">23.1</td><td className="bear">死叉（水上）18b</td><td className="bear">云下 ↑77.3k</td><td className="hot">⚡ TD9 BUY</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>4h</td><td className="num">75,499</td><td className="num">30.4</td><td className="bear">死叉（水下）2b</td><td className="bear">云下 ↑78.1k</td><td>Buy 5</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>8h</td><td className="num">75,499</td><td className="num">32.3</td><td className="bear">死叉（水下）1b</td><td className="bear">云下 ↑78.8k</td><td>Buy 4</td><td>BEAR hid</td></tr>
                <tr><td>12h</td><td className="num">75,475</td><td className="num">32.7</td><td className="neut">—</td><td className="bear">云下 ↑78.0k 1b</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">75,475</td><td className="num">40.4</td><td className="bear">死叉（水上）11b</td><td className="bull">云上 ↓74.6k</td><td>Buy 2</td><td>BEAR reg</td></tr>
                <tr><td>3d</td><td className="num">75,475</td><td className="num">48.4</td><td className="neut">—</td><td className="neut">云内 73.5–93.0k</td><td>Buy 4</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">75,478</td><td className="num">44.4</td><td className="bull">金叉（水下）5b</td><td className="bear">云下 ↑100.3k</td><td>Buy 1</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">75,478</td><td className="num">48.2</td><td className="neut">—</td><td className="bull">云上 ↓46.9k</td><td>Buy 7</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 00:01Z 扫描（滚动 latest 文件；
                    原样存档于 audits/2026-05-23-desk-note.md）。活跃 ⚡TD9：
                    1h TD9 BUY 在 $75,475。对 05-22 的位移：快 RSI 裂开
                    （1h 49.6 → 23.1、30m 48.1 → 21.1、15m 45.9 → 29.7）；
                    4h 翻成新鲜的水下死叉（前为 17b 的水下金叉）；8h 同形
                    （前为 4b 的水下金叉）；12h 翻出云带（云内 → 云下 1
                    根）；1d 维持但 setup 反转（TD Sell 2 → Buy 2，说明 bar
                    收得够弱，把计数翻到 buy 侧）。收盘均为未收盘 K 线；未
                    收盘前每个值按 provisional。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵从 05-22 的<span className="dn-em">钉在收回的簇上</span>
              翻到 <span className="dn-signal">
                簇作为支撑失守、日级周期之锚成为下方第一道明确支撑
              </span>
              。05-22 那个簇（D-EMA50 $76,797 / D-EMA100 $76,873 / D-SMA150
              $76,948）现在全部在头顶，三条线挤在 0.4% 带里——
              <span className="dn-tag bear">D-SMA50 $76,527 (−1.29%)</span>
              和 <span className="dn-tag bear">D-EMA50 $76,671 (−1.47%)</span>
              最近，再到 <span className="dn-tag bear">D-EMA100 $76,808 (−1.65%)</span>
              和 <span className="dn-tag bear">D-SMA150 $76,854 (−1.71%)</span>
              叠上去，再到 <span className="dn-tag bear">D-EMA20 $77,866 (−2.98%)</span>
              / <span className="dn-tag bear">W-EMA20 $78,006 (−3.16%)</span>
              / <span className="dn-tag bear">W-EMA150 $78,270 (−3.48%)</span>
              、再到 <span className="dn-tag bear">
                D-SMA200/EMA200 $80.6–81.5k (−6.33 到 −7.35%)
              </span>
              的天花板。现货下方支撑变薄：先是
              <span className="dn-tag bull">W-SMA20 $74,943 (+0.80%)</span>
              ——只有 $600 空间，然后是 $1,250 的气穴到
              <span className="dn-tag bull">W-EMA200 $73,687 (+2.52%)</span>，
              再到 <span className="dn-tag bull">D-SMA100 $72,593 (+4.06%)</span>
              周期之锚。更高处：那些不再活跃的 W-SMA50/100 天花板
              （<span className="dn-tag bear">$94.0k / $88.2k</span>）在
              <span className="dn-tag bear">−19.62 / −14.36%</span>。
              <span className="dn-em">
                W-SMA150 与 W-SMA200 仍未计算——parquet 历史只有 125 根
                周线 bar，不足 150/200 窗口；W-EMA150 $78,270 (−3.48%) 与
                W-EMA200 $73,687 (+2.52%) 因 EMA 从可用历史 seed 而显示。
                所有 MA 锚定 parquet 最末 bar 2026-05-23 00:06Z
                （close $75,539）；偏移按现货 $75,543 重算。显示的 MA 水位
                为 $ 取整；偏移按精确序列值计算。
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · GEX 翻负</span>
            </h2>

            <p>
              dealer gamma <span className="dn-signal">
                从 +67.4M 翻到 −57.1M、转为净负
              </span>
              ——24h 内约 $125M 的摆动，05-22 备忘标过的「flip 一破就会发生」
              的 regime 转向。它发生了。aggregate GEX 现在
              <span className="dn-tag bear">−57.1M/1%</span>，0-γ flip
              上移到 <span className="dn-tag bear">$76,325（较 05-22 +$209）</span>。
              实时现货 $75,543 在 flip
              <span className="dn-tag bear">下方 −1.0%</span>——GEX 源文件
              自己的「dist to flip」对 Deribit-index $75,542 也读
              <span className="dn-em">−1.0%</span>（idx 与现货今天差 $1
              以内，双参考塌成同一个带符号数）。flip 下方 dealer 净空 gamma，
              意思是对冲流<span className="dn-em">放大</span>下一步——
              05-22 那本吸收箱体的 dealer 书，今天是加速器。下方负 pocket
              <span className="dn-em">明显更重</span>：
              <span className="dn-tag bear">$75k 现在 −53.53M</span>
              （前 −26.0M，翻倍），
              <span className="dn-tag bear">$75.5k −38.68M</span> 就在
              现货位置、<span className="dn-tag bear">$76k −15.21M</span>
              紧贴头顶、<span className="dn-tag bear">$74k −13.86M</span>
              与 <span className="dn-tag bear">$73k −11.77M</span> 一路叠下。
              正天花板变薄：<span className="dn-tag bull">$80k +29.06M</span>
              （前 +47.7M——承重的 $80k 墙丢了约 $18M）、
              <span className="dn-tag bull">$82k +13.92M</span>、
              <span className="dn-tag bull">$90k +7.40M</span>。近月 strip
              <span className="dn-em">全负</span>：23MAY 0DTE
              <span className="dn-tag bear">−42.40M</span>、24MAY
              <span className="dn-tag bear">−12.14M</span>、25MAY
              <span className="dn-tag bear">−40.19M</span>、26MAY
              <span className="dn-tag bear">−3.11M</span>、29MAY
              <span className="dn-tag bear">−14.62M</span>——
              一周长的负 gamma 隧道。只有更远端（12JUN 及之后）是正。
            </p>

            <p>
              直白读：<span className="dn-signal">
                支持盘整的 dealer regime 没了，替代它的方向指向 SM 空与
                破掉的结构已经指着的同一边
              </span>
              。负 aggregate GEX 与负的近月 strip 意味着 dealer 对冲现在
              卖跌买涨——和支持 05-22 箱体的均值回归压波正相反。一次回弹
              到 flip $76,325 会让 dealer 穿过 gamma 中性回到上方的
              <span className="dn-em">压波</span>区间；继续向下穿 $75k
              则进入文件在该 strike 持有的 −53.5M pocket——整个表面上
              单 strike 最深的负浓度。922 个合约的 IV 中位数
              <span className="dn-tag">41.5%</span> 对 30D close-to-close RV
              <span className="dn-tag">25.8%</span>——链层面 richness 约
              +15.7pt，比 05-22 的 +17.5pt 略窄，尽管已实现波动出来了；
              chain 还没在定价延续，本身是任何 put 侧对冲的软建设性条件。
              一如既往，那是 N 个合约的链中位数、
              <span className="dn-em">不是</span>可交易的 spread；到期 /
              strike 级别的 vega、skew、term structure 未载入，vol 读法
              保持 framework only。
            </p>

            <h2 className="dn-sec">
              宏观 <span className="dn-roman">IV · 基本未变 · 跨资产</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观较 05-22 基本未变——今天不是它驱动的
              </span>
              ；驱动是仓位与 dealer 书。dashboard 渲染时间 2026-05-22
              22:16Z，比快照早约 2h。day-over-day 增量混杂且小：US 10Y
              nominal <span className="dn-tag">4.57%（0.0bp）</span>——
              停在 05-22 reclaim-long filter 要它跌破 4.55% 的同一水位；
              那条 filter 仍差 2bp，跟 05-22 一样。10Y TIPS real
              <span className="dn-tag bear">2.18%（+5bp）</span>——
              05-22 −5bp 的缓和后又抬上来。HY OAS
              <span className="dn-tag bull">2.78%（−2bp）</span>，regime
              标签仍 loose、episodic z 仍为负。MOVE 债波
              <span className="dn-tag">79.7（−1.81）</span>。几条 daily
              series（DXY、MOVE、Fed liquidity、NFCI）显示与 05-22 相同
              的水位与 Δ——FRED 周五收盘数据被周六重复（下次 FRED 更新
              要到周一）。慢的 regime z-score 仍 extreme——10Y
              <span className="dn-tag bear">+2.24</span>、TIPS
              <span className="dn-tag bear">+2.26</span>、JGB
              <span className="dn-tag bear">+2.55</span>，EXTREME RISK-OFF
              标签维持——但今天变的不是日增量。
              <span className="dn-em">
                05-21 升级的 credit 裂痕观察仍在回撤——HY OAS 2.78% 距
                3.0% 的重新加 tail 门约 22bp；reclaim-long 利率 filter
                （10Y &lt; 4.55%）仍差 2bp。今天宏观是一个平的背景；这波
                来自 BTC 这本书，不是新鲜的宏观脉冲。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>宏观指标</th>
                  <th>水位</th>
                  <th>Δ</th>
                  <th>regime z</th>
                  <th>episodic z</th>
                  <th>读</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>US 10Y nominal</td><td className="num">4.57%</td><td className="num">0.0bp</td><td className="num bear">+2.24</td><td className="num bear">+1.52</td><td className="bear">risk-off · 持平</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.18%</td><td className="num bear">+5.0bp</td><td className="num bear">+2.26</td><td className="num bear">+2.47</td><td className="bear">紧 · 抬升</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.21%</td><td className="num">−8.0bp</td><td className="num">−0.32</td><td className="num">−0.39</td><td className="neut">无标签</td></tr>
                <tr><td>HY OAS</td><td className="num">2.78%</td><td className="num bull">−2.0bp</td><td className="num bull">−0.98</td><td className="num bull">−1.02</td><td className="bull">loose · risk-on</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.523</td><td className="num">−0.01</td><td className="num bull">−0.48</td><td className="num bull">−1.35</td><td className="neut">neutral</td></tr>
                <tr><td>MOVE 债波</td><td className="num">79.7</td><td className="num bull">−1.81</td><td className="num">+0.21</td><td className="num">+1.30</td><td className="neut">波动缓和</td></tr>
                <tr><td>DXY</td><td className="num">99.19</td><td className="num">+0.08</td><td className="num bear">+0.78</td><td className="num bear">+1.71</td><td className="bear">紧</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.907T</td><td className="num bull">+0.030T</td><td className="num bull">+0.77</td><td className="num bull">+2.16</td><td className="bull">loose · 激增</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">2.06%</td><td className="num">0.0bp</td><td className="num bull">−0.65</td><td className="num bear">+1.52</td><td className="bear">紧</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">+17.0bp</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">月度 · 不作依据</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗口，summary 00:01Z——
              <span className="dn-em">是一个 7 天滚动读数、不是「今天」</span>
              ）。平均 off-diagonal <span className="dn-tag">|r| 0.395</span>
              （较 05-22 的 0.413 略松——相关性松了一档，仍属 NORMAL 带）。
              BTC 的列出系数：NQ <span className="dn-tag">+0.65</span>、
              SP500 <span className="dn-tag">+0.63</span>、NVDA
              <span className="dn-tag">+0.58</span>、CL
              <span className="dn-tag">−0.53</span>、BRENT
              <span className="dn-tag">−0.52</span>、TSLA
              <span className="dn-tag">+0.45</span>、GOLD
              <span className="dn-tag">+0.44</span>。7d 相对表现：BTC
              <span className="dn-tag bear">−4.51%</span>、NQ
              <span className="dn-tag bull">+1.34%</span>、SP500
              <span className="dn-tag bull">+1.10%</span>、NVDA
              <span className="dn-tag bear">−4.12%</span>、GOOGL
              <span className="dn-tag bear">−3.05%</span>、TSLA
              <span className="dn-tag bull">+1.19%</span>；金属混杂——
              GOLD <span className="dn-tag bear">−0.87%</span>、SILVER
              <span className="dn-tag bear">−0.77%</span>、PLAT
              <span className="dn-tag bear">−2.47%</span>、PALL
              <span className="dn-tag bear">−5.30%</span>；原油走弱——
              CL <span className="dn-tag bear">−2.30%</span>、BRENT
              <span className="dn-tag bear">−1.65%</span>。
              <span className="dn-em">
                这个 7d 窗口现在显示大盘股指收复（NQ +1.34%、SP500
                +1.10%）而 BTC 把回撤拉宽到 −4.51%——单名明显落后、不是
                风险资产的 beta 回声。窗口构成效应叠加了（滚出的那根 bar
                是 05-16 的高点），但今天 BTC −2.58% 对 NQ/SP500 大致走平
                的盘面，跟 BTC 本身的「仓位 + dealer 局部走法」一致，
                不是宏观风险脉冲。
              </span>{' '}
              JGB 月度 2.52% 带 EXTREME RISK-OFF 月度标签——不作依据。
              USD/JPY 159.00。
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · 触发已印 · runner 管理</span>
            </h2>

            <p>
              <span className="dn-signal">
                05-22 的 flip 破位空已触发、在赚、第一目标已印。
              </span>{' '}
              触发条件是 1h 收盘 &lt; $76,500 且 SM net 仍 &lt; 0；2026-05-22
              19:00Z 1h 收盘 <span className="dn-tag">$76,497</span>，
              SM 为 <span className="dn-tag bear">−16,106 BTC</span>
              （long 10.41k − short 26.52k；SM 这条门远超约 16k BTC 的余量、
              不是擦边）。0.3R 入场；第一目标
              <span className="dn-tag">$75,700</span> 在 2026-05-22 19:31Z
              印出（1h 收盘基础 $75,693；现货首次穿过在 19:43Z）；runner
              朝第二目标 <span className="dn-tag">$75,000</span> 推进
              （距现货 $540 下方）。05-22 的 reclaim 多按每一条 filter 都死了（SM 不是
              净多、10Y 仍在 4.55% 上方 2bp、价格在 $77,300–$78,000 入场
              带下方）。macro tail 维持 0.15R——无新鲜升级。本篇的 book
              动作：第一目标平掉一半，把 trail stop 移到
              <span className="dn-tag">$76,400</span>（flip 上方），保留
              sub-$75,000 的 +0.2R 加仓票据。
            </p>

            <div className="dn-trade">
              <span className="dn-side short">short · 持有 · runner</span>
              <div className="dn-trade-name">
                flip 破位空——05-22 19:00Z 触发，第一目标已印
              </div>
              <div className="dn-thesis">
                05-22 触发条件成立（1h 收盘 $76,497、19:00Z、SM −16.1k
                ——门远超约 16k BTC 的余量）。flip 下方 dealer 翻空 gamma；
                $75k −53.5M pocket——比 05-22 的 −26.0M 翻倍——是加速器。
                SM 现在 −14.5k，比 05-21 的 −6.7k 峰还深。这笔交易在赚；
                管理纪律是让 gamma 图与 SM 仓位继续联署 runner，任一条
                破了就平掉。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v bear">持仓 · 0.15R runner（$75,700 平掉一半，命中于 19:31Z 05-22）</span></div>
                <div><span className="dn-lvl-k">trail 止损</span><span className="dn-lvl-v">$76,400（0γ flip $76,325 上方）</span></div>
                <div><span className="dn-lvl-k">加仓票据</span><span className="dn-lvl-v bear">$75,000 下 +0.2R（1h 收盘）</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">$75,000（−53.5M pocket 上沿）/ $74,000（1d 云盖下方 1.8%）</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R 运行中：</b>入场 $76,497、当前止损 $76,400 =
                <em>锁住</em>入场到止损的约 $97 利润；从现货 $75,543 到
                止损 $76,400 的让回约 $857；$75,000 距入场约 $1,500、
                $74,000 约 $2,500。<b>平仓纪律：</b>若 1h 收盘 &gt; $76,325
                （flip 收回）、SM net &gt; −5k（cover 信号）、或 1h TD9 BUY
                被 4h 水上交叉印证（反转确认）——任一条印出即平。规模教训：
                05-22 的 0.5R 上限假设仓位「不再联署」；到触发时 SM 已经
                重新加空到 −16.1k，很大程度上又在联署。下一笔 flip 破位
                按触发当下观察到的 SM 来定规模，不按先前那篇的 narrative
                ——放进 runbook lineage。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">已取消 · 原「近武装」</span>
              <div className="dn-trade-name">
                reclaim 多——被箱体破位作废
              </div>
              <div className="dn-thesis">
                05-22 reclaim 多有三条 filter 待武装：SM 净多持续、10Y
                &lt; 4.55%、入场 $77,300–78,000。三条里两条更差了（SM
                −14.5k 不是净多、10Y 4.57% 不在 4.55% 下方），第三条已
                价格上不可能（现货 $75,543 对入场底 $77,300，低 $1,757）。
                这笔交易不存在。干净取消票据；不要拿 counter-trend 反弹
                到簇里替代——那是不同的交易、不同的 gating。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">取消 · 无入场 · 无残余</span></div>
                <div><span className="dn-lvl-k">重新武装条件</span><span className="dn-lvl-v">SM net &gt; 0 持续 &gt; 4h 且 10Y 收盘 &lt; 4.55% 且 1h 收盘 &gt; $76,325（flip 收回）——三条都要</span></div>
                <div><span className="dn-lvl-k">最早可能时点</span><span className="dn-lvl-v">下一篇 · 或更晚</span></div>
              </div>
              <div className="dn-gating">
                <b>为何取消而非推迟：</b>入场带没了——「推迟」假设价格
                还在入场附近、filter 在工作；今天价格已经跑到入场下方
                $1,800、filter 反而更差。下一次 reclaim 多上桌时水位
                会不同，所以这笔从头重写、不是延续。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · 反弹观察 · 非交易</span>
              <div className="dn-trade-name">
                超卖反射风险——标记、不是多
              </div>
              <div className="dn-thesis">
                1h TD9 BUY 在 $75,475、RSI 23、加上 1h 现货 CVD +292，
                这是 textbook 的超卖反射弹设定，目标是被破掉的簇（D-SMA50
                $76,527 / flip $76,325）。这是 runner 的真实风险、不是
                交易。本台不在负 gamma regime 加 SM 空仓负载下买超卖反弹
                ——非对称错了（任何反弹上限是 flip；任何延续会跑进
                −53.5M pocket）。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">标记区</span><span className="dn-lvl-v">$76,325（flip）↔ $76,527（D-SMA50）</span></div>
                <div><span className="dn-lvl-k">反弹失败信号</span><span className="dn-lvl-v bear">被拒、1h 收盘回到 $76,000 下方 → runner thesis 完好</span></div>
                <div><span className="dn-lvl-k">反弹站住信号</span><span className="dn-lvl-v bull">1h 收盘 &gt; $76,325 + 4h 水上交叉 → 平 runner</span></div>
              </div>
              <div className="dn-gating">
                <b>为何不是交易：</b>趋势盘里 RSI 极值配 TD9 BUY 经常
                不反转；同一张图最近两个例子（05-15 squeeze、05-18 SM
                转空）TD9 BUY 都被吃掉、趋势在负 gamma 那一侧延续。
                偏向是「用它来管理空、不是用来进场多」。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">macro tail · 对冲 · 维持</span>
              <div className="dn-trade-name">
                downside put-spread——残余 0.15R 维持
              </div>
              <div className="dn-thesis">
                05-22 减到 0.15R 的动机是宏观缓和；今天宏观较那时基本未变
                （10Y 持平 4.57%、HY 边际紧 −2bp、MOVE 持平）。无新鲜
                缓和、无新鲜升级——减仓的 rationale 仍成立、残余对冲对
                regime z 背景（10Y +2.24σ、JGB +2.55σ）的 rationale 也
                仍成立。本篇无规模动作。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">结构</span><span className="dn-lvl-v">long $74k / short $70k put</span></div>
                <div><span className="dn-lvl-k">到期</span><span className="dn-lvl-v">29-MAY-26（6d）—— 持有的到期现在 GEX 为负（−14.62M）</span></div>
                <div><span className="dn-lvl-k">本篇动作</span><span className="dn-lvl-v">维持 0.15R · 不加（regime z 未变）· 不减（重新加仓门两侧都未破）</span></div>
                <div><span className="dn-lvl-k">重新加仓触发</span><span className="dn-lvl-v bear">HY OAS &gt; 3.0% 收盘 → 朝主仓加；10Y &gt; 4.75% 收盘 → +0.1R；1d 收盘跌破 $74.6k 云 → 尾部最大</span></div>
              </div>
              <div className="dn-gating">
                <b>说明：</b>strike/premium/Greeks 未载入——结构示意，
                规模待 Deribit 29-MAY chain 拉取。所持到期的近月 strip GEX
                翻负（29MAY 现 −14.62M、05-22 时 +35.81M）——这不改变
                结构，但意味着任何近月 strip 的 dealer 对冲现在会强化
                延续、不是压制延续，对已有的 put-spread 是支撑、但单凭
                它本身不足以加仓。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · flip 下方 · runner 纪律</span>
            </h2>

            <p>
              05-22 的六条决策线，过去 24h 只有
              <span className="dn-em">「盘整向下破」</span>
              一条印出（1h 收盘 $76,497 &lt; $76,500 + SM −16.1k &lt; 0、
              于 2026-05-22 19:00Z）；第一个 trade-block 目标 $75,700 在
              19:31Z 因此被印出，但那是交易内部的目标步、不是 §VI 的一条。
              另外五条是干净的：没有 1h 收盘 &gt; $78,300（24h 高 $77,740）、
              SM 没翻净多（反而更空）、HY OAS 没收盘 &gt; 3.0%（缓和到
              2.78%）、10Y 没收盘 &gt; 4.75%（持平 4.57%）、1d 没收盘跌破
              $74.6k 云带（1d 未收盘在 $75,475——在 $74,600 上方）。本篇带一笔 0.15R runner 空与一笔
              0.15R macro tail，条件围绕一个更紧的 dealer-aware 网格重置：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>runner 第二目标</td><td className="bear">1h 收盘 &lt; $75,000</td><td>平 runner 一半，留 0.05R</td></tr>
                <tr><td>加仓重新武装</td><td className="bear">1h 收盘 &lt; $75,000 + SM net 仍 &lt; −5k</td><td>+0.2R 加仓（原 sub-$75k 票据）</td></tr>
                <tr><td>平仓（仓位）</td><td className="bull">SM net &gt; −5k（cover 信号）或 SM net &gt; 0</td><td>平 runner、取消加仓票据</td></tr>
                <tr><td>平仓（结构）</td><td className="bull">1h 收盘 &gt; $76,325（flip 收回）</td><td>平 runner、取消加仓票据</td></tr>
                <tr><td>周期中段破（升级）</td><td className="bear">1d 收盘跌破云 $74.6k</td><td>tail 升到主仓（0.4R）、持 runner</td></tr>
                <tr><td>macro tail 重新加</td><td className="bear">HY OAS &gt; 3.0% 或 10Y &gt; 4.75% 收盘</td><td>tail +0.1R 朝主仓</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>这</em>份备忘的一行是：
              <span className="dn-signal">
                要么 1d 收盘跌破 $74.6k（升级——runner 变成主仓、tail
                成长、所有多继续取消），要么 1h 收盘站上 $76,325
                （flip 收回、dealer regime 回到压波、SM 那个堆要是在
                cover 才会让这个印出来）
              </span>
              。第一个是 dealer 图与 SM 仓位已经指着的延续案；第二个是
              1h TD9 BUY + RSI 23 + 现货 CVD bid 在暗示但尚未印证的
              cover-and-fade 案。$74.6k 与 $76,325 之间，本篇按写出来的
              方式跑——runner 对着 trailing stop 与 cover 信号管理、不做
              多、macro tail 维持。诚实对 05-22：「仓位中性」的框定对
              了六个小时、其余时间错了，规模按那个框定来定、没按之后
              实际发生的来定。触发还是工作了，因为 gating 落在 trigger
              当下观察到的 SM、不是先前那篇的 narrative。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计追踪 · v2（已过 codex 敌对式审计 · 0 CRITICAL · 修复 2 HIGH + 2 MED + 3 LOW）
            </span>
            <b>Codex CLI 0.132.0（gpt-5.5、xhigh reasoning）敌对式审计
            跑通——empty-stdin 管道稳定，无 TTY 阻塞。</b>无 CRITICAL；
            2 处 HIGH、2 处 MED、3 处 LOW，中英双版均已修：{' '}
            (a) <b>F-01 · HIGH</b> &mdash; 审计存档缺失 + 新鲜度方向倒置：
            原文称「扫描存档于 audits/2026-05-23-desk-note.md」时该文件
            尚不存在，并把 00:01Z 扫描描述为「比 00:08Z 快照更新鲜」——
            倒了（00:01Z 在快照<em>之前</em> 7 分钟，是约 7 分钟陈旧、
            不是更新鲜）。已修：创建 audits/2026-05-23-desk-note.md 并把
            00:01Z 扫描原样存档；manifest flag 与审计追踪改写为「较快照
            锚滞后约 7 分钟（陈旧）」。{' '}
            (b) <b>F-02 · HIGH</b> &mdash; trade-state 时序错：§V 原文说
            触发时 SM「约 −17.4k」、第一目标命中在「05-23 04:00Z–06:00Z」。
            pinned-row 核验：触发 1h-close 分钟（live_db t == &ldquo;05-23
            03:00&rdquo; = 2026-05-22 19:00Z）SM 为 <b>−16,106 BTC</b>；
            第一个 $75,700 印出于 t == &ldquo;05-23 03:31&rdquo; BJ =
            <b>2026-05-22 19:31Z</b>（c $75,693；现货首次穿过在 19:43Z）
            ——两者都差很多。中英 §V 改为核验数值。{' '}
            (c) <b>F-03 · MED</b> &mdash; 快照锚污染：§I 正文用了
            premium &minus;$114、aggressor skew &minus;4.9——这是
            t == &ldquo;05-23 08:09&rdquo; 的值，不是 00:08Z 锚 t == &ldquo;05-23
            08:08&rdquo; 的（premium &minus;$99、skew_agg +43.7）。
            live_db 文件在写作期间已追加过 pin。改为 00:08Z 锚值；
            skew_agg 标注为 1 分钟 noisy 快照。{' '}
            (d) <b>F-04 · MED</b> &mdash; 05-22 旧 pocket 标签：§V 目标
            行写「$75,000（−26M pocket 上沿）」——那是 05-22 值；当前
            pocket 是 −53.5M（§III 正文同时正确写出）。目标行改为
            「$75,000（−53.5M pocket 上沿）」。{' '}
            (e) <b>F-05 · LOW</b> &mdash; 远端 MA 句的 W-SMA50/100 标签
            互换；重排为水位与标签对位（W-SMA50 $94.0k / W-SMA100 $88.2k）。{' '}
            (f) <b>F-06 · LOW</b> &mdash; §VI 触发计数不精确（「两条印出」
            ——实际只有向下破位那一条；第一目标命中是 trade-block 步、
            不是 §VI 条件）。已重写。{' '}
            (g) <b>F-07 · LOW</b> &mdash; runner R/R 措辞把入场到止损的
            $97 称作「trailing 风险」——那其实是从入场<em>锁住</em>的利润；
            从现货到止损的让回约 $857。已澄清。{' '}
            审计放行：funding × 1095（实时 +2.20% 年化、0.002009；24h
            端点 +3.59%、0.003278；均值 +2.41%；区间 −1.06/+5.02%；无
            ×100 复发 05-15 地雷）、SM cut-fraction 地雷（全文使用
            「重新加空」/ 倍数 framing，不用 05-22 的 |Δ|/prior 表达——
            那个公式在这里会得到 1025.7%）、SM 跳跃时序（重新加空集中
            在 05-22 06:30Z→06:36Z、两个离散 1 分钟步、live_db 索引 27350
            与 27355 处核验）、GEX flip 双参考（源文件 dist −1.0% 对
            Deribit-idx $75,542 ≈ live spot $75,543，双参考干净塌成一个
            带符号数；total GEX −57.1M）、主 MA 矩阵偏移与 W-SMA150/200
            不可计算、30D RV 25.80%、claims-vs-loaded-data 纪律
            （NTT / max-pain / strike-IV / BTC-NQ 仅 framework；IV 链
            中位数；跨资产 7d 窗口框定）、实时盘面 flow（1h / 4h / 24h
            CVD、OI、big_net、taker_net）、修后中英定量平价、requireViewer
            gating（两条路径首句）、index <code>&lt;li&gt;</code> 新增。{' '}
            <b>Build 说明（INFO）：</b>本服务器跑 Node 18.19.1；Next
            16.2.6 在 Node &lt; 20.9.0 硬退出，完整 <code>next build</code>{' '}
            因环境受阻。<code>npx --no-install tsc --noEmit</code> 退出 0
            （TypeScript 干净），作为 build 替代证据。原始审计记录：
            audits/2026-05-23-desk-note.md。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是 Hysteresis Research 内部交易台讨论材料，
            <em>非投资建议、非要约、非任何形式招揽</em>
            ，未对任何收件方个人情况定制。所有数字反映同一原子快照
            （2026-05-23 00:08Z），各节出处见上方数据来源区；宏观今日
            基本未变，regime z-score 仍偏高。水位、规模与条件用于说明
            本台流程，不构成持续建议。过往的相关性、gamma 与仓位模式
            不约束未来盘口。衍生品有全损风险；杠杆条件下损失可能超过
            保证金。<em>请自行做研究。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                触发印出了。让它印出的那个理由——SM 一整本空仓——
                是隔夜重新摆回去的。Dealer 书翻了符号。
              </div>
              <div className="dn-sign-name">Desk · BTC derivatives</div>
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
            v2 · 2026-05-23 00:08Z · 数据源：live_db.json · mtf_div_latest.html ·
            btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
