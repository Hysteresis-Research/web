import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav、不在 sitemap、noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-08-25 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-08-25',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-08-25' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260825() {
  await requireViewer('/zh/desk/2026-08-25');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-08-25 · v2</span>
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
              <span className="dn-big">$78,933</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+1.82%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-08-25 00:07Z · 滚动来源全部存档到{' '}
              /opt/desk-note/snapshots/2026-08-25-0005/
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">
                    live_db.json · 锚行 <code>t = &ldquo;08-25 08:07&rdquo;</code>
                    （BJ）= 2026-08-25 00:07Z
                  </td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · <b>文件在 00:07Z 冻进存档</b>、此后只读冻结
                    副本 · <code>t</code> 字段是 <b>BJ 本地时（UTC+8）、不是
                    UTC</b> —— 锚是 BJ 08:07、不是 00:07 · 本篇每一个 24h 数字
                    都走精确的 1,441 行闭区间窗 08-24 00:07Z → 08-25 00:07Z
                    （1,441 行 = 1,440 根分钟间隔）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-08-25 08:01 北京 = 00:01Z scan</td>
                  <td className="dn-flag">
                    存档副本 · <b>比盘面锚早约 6 分钟</b>（内部扫描钟 00:01Z 对
                    锚 00:07Z —— 是更旧、不是更新）· 表头印北京时 · 每一个周期
                    都是未收盘 K 线（1d TD9 那行文件自己写了）· 它自己的现货读数
                    $78,913 / +1.54% 与盘面锚 $78,932.80 / +1.82% 不同 ——
                    采样分钟不同、24h 基准也不同，两边都印、不做调和
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-08-25 00:01 UTC · 944 合约</td>
                  <td className="dn-flag">
                    存档副本 · <b>比盘面锚早约 6 分钟</b>（更旧、不是更新）·
                    Deribit idx $79,287 对 live 现货 $78,932.80（idx 高 $354.20
                    / +0.45%）—— 每一个距离数字两侧都印 ·{' '}
                    <b>三个口径全部披露</b>：headline +255.6M、按到期脚算{' '}
                    +256.84M、47 点 by-strike profile +249.87M ·{' '}
                    <b>脚算</b>是本谱系口径、全篇通用
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">cross_asset_correlation_summary.md · 2026-08-25T00:00+00:00</td>
                  <td className="dn-flag">
                    存档副本 · 7d 1h bar · 22 资产 · 167 根行 · 这个窗里七天中
                    有两天是周末日、没有股票印
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-08-24 22:16Z 渲染</td>
                  <td className="dn-flag">
                    存档副本 · 比锚早约 1.9h ·{' '}
                    <b>新鲜的工作日印——三篇里的头一次</b>：10Y +5.0bp 到
                    4.74%、TIPS real +5.0bp 到 2.40%、HY OAS −5.0bp 到 2.70%、
                    5Y5Y BE −2.0bp、MOVE +0.58 到 74.0、NETLIQ −0.004T、JGB
                    +2.0bp · 08-23 与 08-24 两篇都跑在周末重渲染上、这一篇不是
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">btcusdt_1m_*.parquet · 最末 bar 2026-08-25 00:04Z 收 $78,906.10</td>
                  <td className="dn-flag">
                    八个年度文件全载（2019–2026）—— runbook 那句「最近约 3 个
                    文件」只给得出 192 根周线、W-SMA200 直接是 NaN · 在档 365
                    根周线、364 根已结算 · 偏移按 live 现货 $78,932.80 重算
                    （parquet 收比它低 $26.70）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W 周期地板 watch</td>
                  <td className="dn-v-cell"><b>weekly_200sma.json 不存在 —— 200W watch 不可用</b></td>
                  <td className="dn-flag">
                    runbook 点名的那个可 pin 文件在这台机器上不存在 · 按 fallback
                    规则本篇用<b>矩阵</b>值（parquet 在 364 根已结算周收上算的
                    W-SMA200 $64,269.62）、并且<b>不引用任何 JSON{' '}
                    <code>ratio_pctile</code>、<code>last_event</code> 或{' '}
                    <code>state</code> 字段</b> · 下面的分位与破地板计数同样是
                    交易台自己在这条 parquet 序列上算的、并如此标注
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED 月度 · IRLTLT01JPM156N · 2.67%</td>
                  <td className="dn-flag">陈旧 · 月度 · 面板标 84 天 · 不要压在它上面</td>
                </tr>
                <tr>
                  <td className="dn-s">SM feed 上游成因</td>
                  <td className="dn-v-cell">未载入</td>
                  <td className="dn-flag">
                    交易者计数的跳档在盘面里看得见；roster 名册、调度器、账户
                    连续性与 ingestion 证据一律未载入 · 本篇任何地方都不点名
                    机制
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">NTT pivot、max-pain、strike-level IV、BTC/NQ 比率</td>
                  <td className="dn-v-cell">本次未载入</td>
                  <td className="dn-flag">
                    btc_ntt_analysis.html 是 JS 渲染、抽不出来 · 相关主张明确为
                    framework only
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dn-meta">
            <div>
              <span className="dn-k">funding · 8h 年化</span>
              <span className="dn-v bull">+6.31%</span>
              <span className="dn-src">live · 原始 0.005762 × 1095 = +6.3094% · <b>下封顶</b>、在连续 4,953 根钉顶行之后 · 最后一根钉顶行 08-24 19:20Z、<b>第一根脱顶行 08-24 19:21Z</b> · 到 00:07Z 为 <b>287 行 / 286 分钟经过 = 4h46m</b> · 24h 均值 +10.3032%、钉顶占用 1,154 / 1,441 = 80.1%</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bull">+10.95% → +6.31%（离顶 −4.64pt）</span>
              <span className="dn-src">区间 +6.3028% / +10.9500% · 连续段 08-21 08:48Z → 08-24 19:20Z 闭区间（4,953 行 / 4,952 分钟）、脱顶第一行 19:21Z · 24h 仍 <b>0 / 1,441 为负</b>、7d <b>0 / 10,081 为负</b> —— 最后一根负值印在 08-16 05:36Z、12,631 行以前</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">+1.58%（+1,670.2 BTC）</span>
              <span className="dn-src">live · 105,539.451 → 107,209.607 · 底仓在这根上涨日里<b>扩张</b> · 24h 峰 108,928.304 @ 08-24 15:28Z（比价格高点早 4 分钟）、现在离峰 −1,718.7 / −1.58% · gross 开平与账户级换手在这条 feed 里不可观测</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bull">48.58 / 51.42</span>
              <span className="dn-src">live_db <code>mkt_long_pct</code> · 24h 内 −3.11pt、把 08-24 那次回挤整个抹掉 · 24h 区间 48.12%（@ 08-24 16:47Z、同时是 <b>7d 最低</b>）/ 51.89% · 7d 峰 61.52% @ 08-19 11:41Z</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">+32.4k（净多 · long 40,660.7 − short 8,276.8）</span>
              <span className="dn-src">live · long_traders 4,906 / short_traders 1,227 · <b>不可采信</b> —— 24h Δnet 的 93.28% 落在一根分钟里（08-24 06:26Z）</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 08-24 备忘</span>
              <span className="dn-v">+19,905.9 → +32,383.9（Δnet +12,478.0）</span>
              <span className="dn-src">切口比 |Δ| / prior_net = 12,478.0 / 19,905.9 = <b>62.69%</b> · 其中 +11,639.9（93.28%）是 08-24 06:26Z 单独一根跳档 · 干净的 17h41m 窗上 SM <b>在加</b> +1,146.6 / +3.67%、对应价格 +2.01%</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">46.6% / 43.20%</span>
              <span className="dn-src">GEX 链上中位数、跨 944 合约 —— <b>不是可交易价差</b> · richness <b>收窄到 +3.40pt</b>（08-24 是 +6.65pt）、<b>压倒性地因为链中位 IV 掉了 3.20pt</b>（49.8% → 46.6%）、而 RV 只抬了 0.05pt（43.1467% → 43.1981%）—— IV 这条腿贡献了 3.2513pt 收窄里的 98.4% · RV60 37.06% / RV90 40.42%</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+23.33%（在上方）</span>
              <span className="dn-src">flip $64,001（前 $63,552）· 对 live 现货 $78,932.80：现货在上方 +23.33%、也就是要<b>跌 18.92%</b> 才够到它 · 对文件自己的 Deribit idx $79,287 是 +23.88%（文件印 +23.9%）—— 两个参考都是正、tile 与正文同号 · 脚算 aggregate +256.84M</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                交易台自己写下的处置规则点着了，于是今天必须写的这一篇，是八天里
                第二个从没成交过的框架
              </span>
              。08-24 那篇白纸黑字预先承诺过：{' '}
              <em>
                「若 1d 收印在 $78,000 / $78,228.40 / $78,446.94 这层盖子之上、
                此框架按太低退役、不是继续扛。」
              </em>{' '}
              08-24 的日线收印在{' '}
              <span className="dn-tag bull">$78,953.00</span>、比三条里最高的那条
              高出 <span className="dn-tag">$506.06（+0.65%）</span>、按前一天
              自己采纳的交易所 bar 口径三条全过。规则点着了。{' '}
              <b>$75,000–$76,000 的回撤多头，退役、未成交</b> —— 不上移、不扛、
              不再辩。这样八天里就有两个框架在从未进场的情况下被处置掉：08-19
              的补涨 scout 在 08-22 到期未成交，回撤多头今天退役。本子在一轮{' '}
              <span className="dn-tag bear">+22.72% 的七日行情里全程空仓</span>
              。两个框架方向都对、两个都从没在交易台写下的价格上出现过；而且
              差价已经不再是四舍五入的量级：08-23 差{' '}
              <span className="dn-tag">$20.30</span> 没碰到武装带、08-24 差{' '}
              <span className="dn-tag">$9.00</span> 没够到第一目标 —— 24h 高
              $79,991.00 对着 $80,000 这个目标，而它现在是全盘最重的一堵墙、{' '}
              <span className="dn-tag">+44.28M</span>。
              <br /><br />
              同时，交易台说想要的条件里有三个真的来了：{' '}
              <span className="dn-tag bull">funding 脱顶</span>（在连续 4,953
              根钉顶行之后、现在 +6.31% 年化）、{' '}
              <span className="dn-tag bull">retail 去拥挤 −3.11pt 到 48.58%</span>
              （7d 最低）、盖子被清掉。两个没来：{' '}
              <span className="dn-tag bear">OI 反而扩张 +1.58%</span>、正对着
              脱顶条件里那句「最好伴随 OI 下降」；以及{' '}
              <span className="dn-tag bear">昨天还差一根的 1d TD9 SELL 今天印
              出来了</span>。{' '}
              <span className="dn-em">
                难受的总结是：这个交易台连着三篇提的那条进场质量异议，今天算是
                解决了一半 —— 而交易台空着仓、站在更高的价格上、自己写的框架被
                自己的规则退役，而不是被盘面证伪。
              </span>
            </p>

            <h2 className="dn-sec">
              仓位{' '}
              <span className="dn-roman">I · 盘面 · funding 在 4,953 行之后脱顶 · 底仓扩张 +1.58% · retail 落到 7d 地板 · SM 连续第五个 session 不可采信</span>
            </h2>

            <p>
              <span className="dn-signal">
                连着四个 session 全本子最难看的那一行终于断了 —— 但它是在底仓
                变大的情况下断的，这是交易台要的那件事的弱化版
              </span>
              。funding 从 08-21 08:48Z 到 08-24 19:20Z 焊在{' '}
              <span className="dn-tag bear">+10.95% 封顶</span>上{' '}
              <span className="dn-tag">连续 4,953 根采样行（4,952 分钟、
              82h32m）</span>、闭区间 —— 19:20Z 是<b>最后一根钉顶行</b>、{' '}
              <b>第一根脱顶行是 19:21Z</b>。从 19:21Z 到 00:07Z 的锚，它已经
              在封顶之下印了{' '}
              <span className="dn-tag bull">287 根连续行 / 286 分钟经过 =
              4h46m</span>、在小时采样上单调衰减：+10.950% → +8.336% → +7.651%
              → +7.381% → +6.718% → <b>+6.309%</b>（原始 0.005762 × 1095）。
              24h 均值仍是 <span className="dn-tag">+10.3032%</span>、钉顶占用{' '}
              <span className="dn-tag">1,154 / 1,441 = 80.1%</span>，因为窗里
              大部分时间还钉着。
            </p>

            <p>
              有两条注脚拦住它成为一次干净的胜利。第一，<b>4h46m 还很嫩</b> ——
              08-24 那个条件要的是「一段持续的时间」、却没定义什么叫持续，这正是
              交易台昨天在另一笔交易上记录为设计缺陷的同一个规格空洞；按已载入
              的证据，这是一个<em>已点着但还嫩</em>的信号、不是一次已成型的
              regime 切换。第二、也更糟：条件原话是{' '}
              <em>「最好伴随 OI 下降」</em>，而 OI 干了反的 ——{' '}
              <span className="dn-tag bear">+1,670.2 BTC / +1.58%</span>、
              105,539.451 → 107,209.607。同一个窗里，carry 变便宜、底仓变大。
              那是杠杆在更好的价格上被<em>加</em>，不是杠杆在清。
            </p>

            <p>
              这根 OI 印的盘中形状才是更有用的读数。24h OI 峰{' '}
              <span className="dn-tag">108,928.304 @ 08-24 15:28Z</span> 落在
              24h 价格高{' '}
              <span className="dn-tag">$79,991.00 @ 15:32Z</span> 的<b>前四
              分钟</b>，现在 OI 离峰{' '}
              <span className="dn-tag">−1,718.7 / −1.58%</span>、而价格只离高
              −1.32%。所以顺序是：杠杆随着这波推到 $80,000 堆起来，价格{' '}
              <b>差 $9.00 停在 $80,000 之下</b>掉头，然后大约 1,719 BTC 的堆积
              又退了出去。{' '}
              <b>
                这里没有载入 15:32Z 高点当刻的任何盘中 GEX 观测。夹住它的两份
                日频面板 —— 08-24 00:00Z 与 08-25 00:01Z、分别在高点之前约
                15.5h 与之后约 8.5h —— 都把 $80,000 列为最大的被点名墙
                （+40.17M 与 +44.28M），这与该行权价存在阻力相符，但<em>不</em>
                构成 γ 造成掉头的证明，也没有任何一份面板能确定高点印出那一刻
                的墙有多厚。
              </b>{' '}
              净 +1.58% 是一整轮堆积—冲洗之后剩下的东西。一如既往，{' '}
              <b>gross 开平与账户级换手在这条 feed 里不可观测</b> —— 去杠杆被
              替换杠杆抵消掉，印出来的净值一模一样，所以「1,719 BTC 退出去了」
              是关于总量水位的陈述、不是关于可辨认仓位的陈述。
            </p>

            <p>
              retail 往交易台这边走，而且走得狠。{' '}
              <span className="dn-tag bull"><code>mkt_long_pct</code> 48.58%</span>
              、<b>24h 内 −3.11pt</b>，一个 session 就把 08-24 备忘记录的那次
              不利的 +1.51pt 回挤反了回来。精确 00:0xZ 日端点现在是{' '}
              <span className="dn-tag">59.77%（08-18）→ 57.97% → 52.02% →
              48.95% → 51.00% → 50.18% → 51.69% → 48.58%</span>，而 24h 谷{' '}
              <span className="dn-tag">48.12% @ 08-24 16:47Z</span> 同时是{' '}
              <b>7d 最低</b>，对着 7d 峰 61.52% @ 08-19 11:41Z。值得点名的背离
              是：retail 坐在自己的七日地板上，而价格坐在 24h 区间的 68.02%、
              离整波最高印只差 1.33%。抬这波的不是散户。这条三篇之前就是多头
              论据里最干净的一条腿，它扛过了两个 session 的摇摆，现在比最初
              写下时更强。
            </p>

            <p>
              <span className="dn-signal">
                SM 盘面连续第五个 session 不可采信，而这个模式已经硬化到交易台
                该把它直说的程度
              </span>
              。24h Δnet 是 <span className="dn-tag">+12,478.0</span>
              （19,905.9 → 32,383.9）、切口比{' '}
              <b>|Δ| / prior_net = 12,478.0 / 19,905.9 = 62.69%</b>。其中{' '}
              <span className="dn-tag bear">+11,639.9 —— 93.28% —— 是单独一根
              分钟</span>：08-24 06:26Z，<code>long_traders</code> 一分钟内
              4,631 → 4,951、净额从 19,597.4 跳到 31,237.3。把整个 7d 窗扫一遍
              一分钟 |Δnet| &gt; 1,500 的行，得到{' '}
              <span className="dn-tag">11 次跳档</span>，其中{' '}
              <b>七次是一天一次、并且七次全部落在 06:21Z–07:06Z 这条带里</b>：
              08-18 06:21Z（+16,380.9）、08-19 06:46Z（−5,610.0）、08-20
              07:06Z（+39,352.8）、08-21 06:21Z（+10,671.2）、08-22
              06:41Z（+16,071.5）、08-23 07:06Z（−10,279.5）、08-24
              06:26Z（+11,639.9）。一条 45 分钟宽的窗，连着七天、两个方向都被
              打中。{' '}
              <b>
                交易台把这个时间规律作为观测记录下来、不点名任何成因。这一刀里
                没有 roster、没有调度器、没有账户连续性、也没有 ingestion 证据，
                所以任何机制都会是未经验证的推断，本篇一个都不主张。
              </b>{' '}
              设计结论不需要机制：任何写在 <code>net_btc</code> 水位或增量上的
              闸门，在这条序列上都是不成立的。本篇唯一愿意压的 SM 陈述是那段
              没有跳档的窗 —— 从 08-24 06:26Z 到锚、{' '}
              <span className="dn-tag">17h41m 干净</span>、SM{' '}
              <b>加了 +1,146.6 / +3.67%</b>、对应价格 +2.01%。这是本谱系里第一
              段 SM 在走强中加仓而不是减仓的干净窗；前三篇记录的是 −11.68%、
              −1.94%、−8.32% 的减。它是描述性的、不是决定性的，一段干净窗不
              能让这条序列变得可信。
            </p>

            <p>
              流与基差，补齐。锚上的 perp 溢价是{' '}
              <span className="dn-tag">−$20.96</span>、24h 均值 −$10.16、区间
              −$186.82 / +$233.55 —— 现货主导，但很轻，没有持续的 perp 买盘。
              锚上聚合 skew −1.80（24h 均值 −2.79、区间 −64.20 / +52.30）。
              24h 窗上现货 CVD <span className="dn-tag bull">+327.4</span>、
              期货 CVD <span className="dn-tag bull">+940.1</span>、big-net{' '}
              <span className="dn-tag bull">+1,063.2</span>、taker-net{' '}
              <span className="dn-tag bull">+940.1</span>（期货 CVD 与 taker-net
              在这个窗上精确重合、1h 与 4h 窗上同样重合 —— 只作为观测陈述、
              不主张这两个字段在上游是什么关系）—— 一个 +1.82% 的日子里四条
              全在买方，这是一致、不是背离。转折在 4h 窗：价格 +0.34% 但{' '}
              <span className="dn-tag bear">OI −638.5 BTC</span>、现货 CVD
              +149.3、期货 CVD +400.1。价格磨上去而 OI 掉下来，是两种形状里更
              健康的那种，而且它是更近的那一段。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 9 多 / 0 空 / 1 中性 · 1d TD9 SELL 已点着 · 矩阵改善到 18/20 · 盖子变成了地板、下一层是全盘最重的墙</span>
            </h2>

            <p>
              <span className="dn-signal">
                结构在交易台跟踪的每一条轴上都变好，同时昨天点名的那个带日期的
                风险也在同一刻落地
              </span>
              。MTF 扫描（2026-08-25 08:01 北京 = 00:01Z）在文件自己的聚合行上
              读{' '}
              <span className="dn-tag bull">9 多 / 0 空 / 1 中性</span>、按逐
              周期 偏向 列求和则是{' '}
              <span className="dn-tag">6 多 / 3 警示 / 1 震荡</span> —— 两个
              计数都印，而且<b>两个口径都产不出哪怕一个空头分类</b>，连续第四个
              session。这比 08-24 那篇的 8 / 0 / 2 聚合与 5 / 3 / 2 行求和都好。
              三个警示周期是 15m、12h、1d；1w 是唯一的震荡周期、并且仍然{' '}
              <b>在自己的周线云之下</b>（30 根、头顶阻力约 $85.9k）、DIF 在水下
              —— 最慢的那个周期没有跟上，本篇也不假装它跟上了。
            </p>

            <p>
              <span className="dn-tag bear">1d TD9 SELL 印出来了。</span>08-24
              那篇把它叫作「只剩一根」，它在这次扫描上于 $78,932 点着，文件自己
              打的标签是{' '}
              <em>「overbought reversal hint（last bar may be in-progress）」</em>
              —— 未收盘这条注脚是文件自己的，这里照带、不压掉。它不是做空触发、
              本篇也不当它是；它是「在这里追价比看上去更糟」这句话最有力的那条
              论据。RSI 在快周期降温、在慢周期还烫：15m 53.5、30m 54.8、1h
              58.6、<span className="dn-tag">4h 71.0</span>（08-24 那篇把它从
              89.8 跟到 72.2，现在 71.0）、8h 78.4、{' '}
              <span className="dn-tag bear">12h 85.0</span>、{' '}
              <span className="dn-tag bear">1d 82.2</span>、3d 70.7、1w 57.7、
              1M 51.2。多头计数底下的 MACD 其实是混的：{' '}
              <span className="dn-tag bull">15m 水上金叉 1 根前</span>，但 30m
              （13 根）、<b>1h（1 根 —— 新鲜）</b>与 4h（14 根）都是水上死叉，
              对着 12h（15 根）、1d（7 根）与 1w（5 根）的水下金叉。直读：引擎
              周期在一个完好的慢周期上升趋势内部翻头。背离：两个顶背离（15m、
              30m）、一个底背离（30m）。动能 regime 9 个周期里 6 个 JT ≥ 0 ——
              偏顺势。
            </p>

            <p>
              MA 矩阵是全篇最干净的读数。{' '}
              <span className="dn-tag bull">现货 $78,932.80 在全部十条日线 MA
              之上、十条周线里过了八条 —— 20 格里 18 格</span>，比 08-24 的
              17/20 好，而且翻过去的那一格正是要紧的那一格：{' '}
              <b>W-EMA100 $78,446.94、昨天那层盖子的顶，现在在现货下方
              0.62%</b>。剩下的两个负值只有{' '}
              <span className="dn-tag bear">W-SMA50 $81,784.71（−3.49%）</span>
              与 <span className="dn-tag bear">W-SMA100 $88,841.21（−11.15%）</span>
              。完整矩阵，偏移按 现货/MA − 1 对 live 现货 $78,932.80 算、
              parquet 最末 bar 是 2026-08-25 00:04Z 收 $78,906.10：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>n</th><th>D-SMA</th><th>对现货</th><th>D-EMA</th><th>对现货</th><th>W-SMA</th><th>对现货</th><th>W-EMA</th><th>对现货</th></tr>
              </thead>
              <tbody>
                <tr><td>20</td><td className="num">68,241.39</td><td className="num bull">+15.67%</td><td className="num">70,370.10</td><td className="num bull">+12.17%</td><td className="num">69,509.57</td><td className="num bull">+13.56%</td><td className="num">69,290.15</td><td className="num bull">+13.92%</td></tr>
                <tr><td>50</td><td className="num">65,780.08</td><td className="num bull">+19.99%</td><td className="num">67,292.31</td><td className="num bull">+17.30%</td><td className="num">81,784.71</td><td className="num bear">−3.49%</td><td className="num">77,248.42</td><td className="num bull">+2.18%</td></tr>
                <tr><td>100</td><td className="num">66,152.43</td><td className="num bull">+19.32%</td><td className="num">67,643.38</td><td className="num bull">+16.69%</td><td className="num">88,841.21</td><td className="num bear">−11.15%</td><td className="num">78,446.94</td><td className="num bull">+0.62%</td></tr>
                <tr><td>150</td><td className="num">69,230.30</td><td className="num bull">+14.01%</td><td className="num">69,547.66</td><td className="num bull">+13.49%</td><td className="num">77,446.22</td><td className="num bull">+1.92%</td><td className="num">73,884.51</td><td className="num bull">+6.83%</td></tr>
                <tr><td>200</td><td className="num">69,131.71</td><td className="num bull">+14.18%</td><td className="num">71,847.49</td><td className="num bull">+9.86%</td><td className="num">64,269.62</td><td className="num bull">+22.82%</td><td className="num">68,609.64</td><td className="num bull">+15.05%</td></tr>
              </tbody>
            </table>

            <p>
              周期地板这边：<b>200W watch JSON 在这台机器上不存在</b>，所以按
              fallback 规则本篇用矩阵值、不引用任何 JSON <code>state</code>、{' '}
              <code>ratio_pctile</code> 或 <code>last_event</code> 字段。在同一
              条 parquet 序列上算出来的是：W-SMA200{' '}
              <span className="dn-tag">$64,269.62</span>、08-23 已结算周收{' '}
              <span className="dn-tag bull">$77,719.10</span> = 比率 1.2093
              （+20.93%）、live 现货在上方 +22.82%。在 165 个可比周观测上，{' '}
              <b>严格更低的有 37 个 / 165 = 22.4%</b>，而{' '}
              <b>含并列的经验排名是 38 / 165 = 23.0 分位</b> —— 口径要点名，
              因为两者差 0.6pt，而本篇之前只印了严格更低那一个。另外单独说：
              历史上只有 <span className="dn-tag">165 根里的 10 根（6.1%）</span>
              周收曾经结算在这条水位之下。08-16 的破位与 08-23 的重夺在已结算
              序列里都看得见（下方 62,876.00、上方 77,719.10），这就是 08-24
              备忘记录在案的那次为期一周的假破；开着的 08-24→08-30 周 bar 走{' '}
              <span className="dn-tag">O 77,719.00 / H 79,974.80 / L 76,649.00
              / C 78,906.10</span>、在地板上方 +22.77%、并且{' '}
              <b>到 08-30 23:59Z 之前未结算</b>。有一条交叉核对值得披露：MTF
              文件自己的 1w 行对它的 200SMA 读 +22.26%，与矩阵数字差 0.56pt ——
              365 根序列上的 bar 锚定方式不同，不做调和，两个都印。
            </p>

            <p>
              价格实际坐在什么里面：24h 区间{' '}
              <span className="dn-tag">$76,681.99 – $79,991.00</span>（盘面
              口径；交易所 bar 是 $76,649.00 – $79,974.80）、现货在{' '}
              <b>区间的 68.02%</b>。老盖子现在是地板 ——{' '}
              <span className="dn-tag">$78,000 墙（−1.18%）</span>、{' '}
              <span className="dn-tag">D-EMA400 $78,235.38（−0.88%）</span>、{' '}
              <span className="dn-tag">W-EMA100 $78,446.94（−0.62%）</span>，
              一层 $446.94 宽的台阶从头顶挪到了脚下。再往下是 W-SMA150
              $77,446.22（−1.88%）与 W-EMA50 $77,248.42（−2.13%），这层台阶
              已经连续第三个 session 站住。上方：{' '}
              <span className="dn-tag bear">$80,000（+1.35%），全盘最重的墙、
              +44.28M，比 24h 高点停住的位置高 $9.00</span>，再上是 W-SMA50
              $81,784.71（+3.61%）。{' '}
              <span className="dn-em">
                结构图景是：一个市场清掉了三层天花板、把它转成支撑、一路走到
                本子里最大的那团 γ 集中、然后差九块钱停住 —— 这是水位与价格的
                巧合，只有日频面板夹着，不是被观测到的盘中机制。
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer 图{' '}
              <span className="dn-roman">III · 夹子再深 +9.15M 到 +256.84M 脚算 —— 已核对的 post-08-16 谱系里最深（08-21 无存档）、比 08-20 +254.15M 只多 +2.69M、不是整条谱系最大 · 被点名的实质墙随价格上移 · flip $64,001、在现货下方 18.92%</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子更深了，被点名的实质墙随着价格往上挪
              </span>
              。在本谱系走的脚算口径上，aggregate GEX 是{' '}
              <span className="dn-tag bull">+256.84M</span>（headline +255.6M；
              47 点 by-strike profile 脚算 +249.87M —— 三个口径全披露、全篇用
              按到期脚算那一个）。这比{' '}
              <b>08-24 的 +247.69M 深 +9.15M</b>、并且是{' '}
              <b>已核对的 post-08-16 谱系里最深的一次正夹子</b>，但它清掉的
              真正的前高是 <span className="dn-tag">08-20 +254.15M</span>、
              只多出 <b>+2.69M</b>。它<b>不是整条谱系的最大值</b>：同一个脚算
              口径下 <span className="dn-tag">07-22 +313.63M</span> 与{' '}
              <span className="dn-tag">07-23 +283.46M</span> 都更深。已核对的
              完整 post-08-16 台账，印出来以便核对而不是被采信：{' '}
              <span className="dn-tag">08-17 +28.06M · 08-18 +128.85M · 08-19
              +128.94M · 08-20 +254.15M · 08-21 无存档 · 08-22 +249.91M ·
              08-23 +242.37M · 08-24 +247.69M · 08-25 +256.84M</span>，更早的
              谱系上还有 07-24 +235.95M。{' '}
              <b>
                这份台账并不完整：这台机器上不存在 2026-08-21 的 GEX 存档，
                所以这个序数是「在可得的已核对日频面板里最深」、不是一个被认证
                的日频最大值。
              </b>
            </p>

            <p>
              前十堵墙全是正、合计{' '}
              <span className="dn-tag">+188.67M = 脚算条带的 73.46%</span>：
              $80,000 +44.28M · $82,000 +33.64M · $78,000 +27.16M · $90,000
              +13.73M · $84,000 +13.40M · $85,000 +12.72M · $81,000 +11.95M ·
              $70,000 +11.77M · $79,000 +11.05M · $100,000 +8.97M。对着 08-24
              备忘印过的数字看，这次迁移异常干净，而且值得作为一个<em>有范围
              的</em>主张、而不是一个全称主张来陈述。{' '}
              <b>被点名的、在 $79,000 及以上的行权价全部变重</b>：$80,000
              +40.17M → <span className="dn-tag bull">+44.28M</span>、$82,000
              +22.00M → <span className="dn-tag bull">+33.64M</span>（全盘最大
              的单点变动）、$84,000 +11.65M → +13.40M、$85,000 +9.91M →
              +12.72M、$90,000 +11.20M → +13.73M，另有 $81,000、$79,000 与
              $100,000 进入前十。{' '}
              <b>被点名的、在 $78,000 及以下的行权价全部变轻</b>：$78,000
              +32.48M → <span className="dn-tag bear">+27.16M</span>、$76,000
              +11.21M → +8.90M、$75,000 +13.08M → +8.65M、$74,000 +11.59M →
              +8.16M、$72,000 +11.57M → +8.55M、$70,000 +18.57M → +11.77M ——
              而且 $72,000 / $74,000 / $75,000 / $76,000 这四个行权价整体掉出
              了前十。{' '}
              <span className="dn-em">
                被退役的回撤框架所依赖的那层货架，已经连续第二个 session 变薄，
                这是「退役它是对的」这句话的独立结构证据，而不只是照规则办事。
              </span>{' '}
              <b>
                这个主张限定在被点名的实质墙上，不能推广到完整 profile。
              </b>{' '}
              在 08-24 与 08-25 两份 by-strike profile 共有的 45 个行权价上，
              28 个变重、17 个变轻，而且例外两头都有：远端上方的{' '}
              <span className="dn-tag">$87,000 +0.01162M → +0.00893M</span> 与{' '}
              <span className="dn-tag">$89,000 +0.01412M → +0.00750M</span>
              明明在价格上方却变轻，而{' '}
              <span className="dn-tag">$65,000 −0.35650M → −0.80998M</span> 与{' '}
              <span className="dn-tag">$66,000 −0.60615M → −0.64958M</span>
              在价格下方变得更负。08-24 有七个行权价在今天的 47 点 profile 里
              根本不存在、今天新增两个，所以两份 profile 也不是逐行可比的。
              47 个 profile 点里有 13 个为负、合计 −12.75M，对着 +262.62M 的
              正值，并且每一个负值都坐在 $77,500 或更低。
            </p>

            <p>
              0-γ flip 在 <span className="dn-tag">$64,001</span>、从 08-24 的
              $63,552 上移。双参考、两边都带：对 live 现货 $78,932.80，flip
              坐在<b>下方 18.92%</b> —— 要跌 18.92% 才够得到，等价地说现货在它
              上方 <b>+23.33%</b>；对 GEX 文件自己的 Deribit idx $79,287 距离
              是 <b>+23.88%</b>、也就是文件印的 +23.9%。两个参考都是正、meta
              tile 与这一段同号。注意 flip 抬了 $449 而现货抬了约 $1,300，所以
              百分比口径上这个缺口是走阔的。Call OI 255,650 BTC 对 put OI
              154,650，{' '}
              <span className="dn-tag">put/call 比率 0.60</span>。
            </p>

            <p>
              按到期看，集中度形状没变、程度略降。{' '}
              <span className="dn-tag">28AUG26</span> 承载{' '}
              <b>+80.34M = 脚算条带的 31.28%</b>、3.3 DTE，从 08-24 的 33.71%
              与 08-23 的 36.17% 一路缓下来 —— 在整条条带自身变大的同时，份额
              连续第三个 session 下降。{' '}
              <span className="dn-tag">25SEP26</span> 承载 +76.11M / 29.63%，
              所以两条线仍握着夹子的 <b>60.91%</b>。最近的前三条到期只脚算到
              +13.48M（25AUG26 +9.37M、0.3 DTE、今天 08:00Z 结清；26AUG26
              +1.67M；27AUG26 +2.44M）、并且三条全为正 —— 本 session 没有负的
              前端线。对照要说准：08-24 备忘自己的前端线{' '}
              <span className="dn-tag">24AUG26 印的是 +9.67M</span>、它是在{' '}
              <b>08-23</b> 才印 −1.21M 的；那份 08-24 快照上的负值是{' '}
              <span className="dn-tag">26AUG26 与 27AUG26、各 −0.03M</span>，
              这两条今天都是正的、+1.67M 与 +2.44M。{' '}
              <b>
                28AUG26 的份额是当前 IV 下的一个快照贡献、不是一次保证发生的
                roll-off
              </b>{' '}
              —— 条带在连续重新定价，而它的份额连着三个 session 下降、同时总量
              在涨，这件事本身就是这条注脚的直接证据。
            </p>

            <p>
              波动率这边：跨 944 合约的链上中位 IV 是{' '}
              <span className="dn-tag">46.6%</span>，对 30D close-to-close RV{' '}
              <span className="dn-tag">43.20%</span>、richness{' '}
              <b>+3.40pt</b>、从 08-24 的 +6.65pt <b>收窄</b>。不主张任何序数、
              也没有载入按轮长的台账。比水位更要紧的是分解，而且它是量出来的、
              不是断言出来的：缺口收窄了 <b>3.2513pt</b>（+6.6533pt →
              +3.4019pt），其中<b>链中位 IV 下跌 3.2000pt</b>（49.8% →
              46.6%）贡献了 <b>98.4%</b>；已实现波动率只贡献了{' '}
              <b>+0.0513pt</b>（30D RV 43.1467% → 43.1981%）。两条腿都在收窄
              缺口，但这次是 <b>implied 变便宜</b>、不是 realized 追上来。IV
              这个数字是<b>跨 944 合约的链中位、不是可交易价差</b> —— 按印出来
              的样子既提不起来也卖不出去。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · 三篇里第一个新鲜工作日印 · 10Y +5.0bp 到 4.74%（z +2.19、新转 episodic）· TIPS real +5.0bp 到 2.40% · 两条都是 EXTREME RISK-OFF · 跨资产仍 IDIOSYNCRATIC、0.205</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观面板终于带上了新数据，而它带来的东西不友好
              </span>
              。08-23 与 08-24 两篇都跑在周五 08-21 那份 FRED 印的周末重渲染
              上；这份 2026-08-24 22:16Z 渲染是一次{' '}
              <b>真正的工作日更新</b> —— 动了多行，而且到底算几行取决于怎么数，
              所以三个数字全给、不给一个圆整的：{' '}
              <b>7 行底层水位变了</b>、把四个陈旧计数器算进来则{' '}
              <b>11 行的印刷文本有任何变化</b>、面板自己的「what changed」过滤器
              点名 <b>6 行</b>。美 10Y 名义{' '}
              <span className="dn-tag bear">4.74%（+5.0bp）</span>、regime z{' '}
              <span className="dn-tag bear">+2.19</span>（从 +1.98）、episodic
              z <span className="dn-tag bear">+1.52</span> —— 新被标成
              episodic、并打 EXTREME RISK-OFF。那个 +2.19 是{' '}
              <b>板上最高的新鲜日频 Tier-1 regime z</b>；板上绝对最高的是 JGB
              10Y 的 +2.42，而那一行是{' '}
              <b>FRED 月度、标陈旧 84 天 —— 不要压在它上面</b>。10Y TIPS real{' '}
              <span className="dn-tag bear">2.40%（+5.0bp）</span>、regime z{' '}
              <span className="dn-tag bear">+2.03</span>、episodic +0.10 ——
              同样 EXTREME RISK-OFF。真实利率与名义利率在一个 session 里同时
              回硬 5bp，是 BTC 在本谱系里遇到的最干净的宏观逆风，而它发生在
              BTC 印出高点的那一天。
            </p>

            <p>
              对冲项是混的、不是确认的。HY 信用利差{' '}
              <span className="dn-tag bull">2.70%（−5.0bp）</span>、regime z
              −1.04、episodic −0.73 —— 标 RISK-ON 并在收窄，是 Tier-1 里唯一
              最友好的一行。芝加哥联储 NFCI{' '}
              <span className="dn-tag bull">−0.559</span>、z −1.46、RISK-ON、
              但 <b>陈旧 10 天</b>。MOVE 债券波动{' '}
              <span className="dn-tag">74.0（+0.58）</span>、z +0.09 —— 中性、
              没什么可说。DXY <span className="dn-tag">98.85（+0.05）</span>、
              regime z −0.12 但 episodic{' '}
              <span className="dn-tag bull">−1.61</span> —— 30 日视角上的软
              美元、被标 episodic。联储净流动性{' '}
              <span className="dn-tag bear">$5.792T（−0.004T）</span>、regime z
              −1.22、episodic <span className="dn-tag bear">−2.45</span> ——
              仍在抽、仍是 Tier-1 面板上最深的 episodic、仍是 RISK-OFF。
              Tier 2：USD/JPY 158.91（+0.03）、z +0.55；美日 10Y 利差
              2.07%（+5.0bp）、episodic +1.52；USD/CNY 6.7118（−0.01）、
              episodic <span className="dn-tag">−2.57</span> —— 全板绝对值最大
              的 episodic。Tier 3 按设计是驱动面板、不出合成分：粘性核心 CPI
              3.48%、中位 CPI 3.11%、10Y 盈亏平衡 2.32%（episodic +1.62）、
              密歇根 1Y 4.6%（陈旧 84 天）、WTI $86.5（陈旧 6 天）。面板自己的
              「what changed」过滤器命中六行：10Y +1.52、DXY −1.61、净流动性
              −2.45、美日利差 +1.52、USD/CNY −2.57、10Y 盈亏平衡 +1.62。
            </p>

            <p>
              跨资产仍是 <span className="dn-tag">IDIOSYNCRATIC</span>、非对角
              平均 |r| <b>0.205</b>（阈值 &lt;0.25），从 08-24 的 0.217 再降
              —— BTC 在跑自己的盘、整个复合体松散耦合。7d 1h 样本上 BTC{' '}
              <span className="dn-tag bull">+22.72%</span>，对 NQ{' '}
              <span className="dn-tag bear">−3.35%</span>、价差{' '}
              <b>26.07pt</b>，SP500 −1.20%、JP225 −5.48%、NVDA −7.22%。BTC 的
              最高相关都是金属 —— PLAT +0.346、SILVER +0.286、PALL +0.243 ——
              但主张停在<b>共动</b>：它既不指认驱动、也不指认对冲；而且它明确{' '}
              <b>不是</b>一句「股票垫底」的排序，因为 MSFT +0.236 直接高过
              GOLD +0.211、META +0.210 与它在 0.001 以内齐平。NQ 在 21 个里排
              第 12、+0.123，SP500 第 17、+0.094。这个窗里七天中有两天是周末日、
              没有股票印，这机械地压低了表里每一个 BTC 对股票的系数。{' '}
              <span className="dn-em">
                净读数：利率三篇以来第一次在新鲜数据上真正转向不友好，而 BTC
                无视了它 —— 这件事说明的是当前 regime，而不是下一个 5bp 也会被
                无视的理由。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>宏观指标</th><th>水位</th><th>Δ</th><th>regime z</th><th>episodic z</th><th>读数</th></tr>
              </thead>
              <tbody>
                <tr><td>美 10Y 名义</td><td className="num">4.74%</td><td className="num bear">+5.0bp</td><td className="num bear">+2.19</td><td className="num bear">+1.52</td><td className="bear">EXTREME RISK-OFF · 新鲜日频 · Tier-1 最高新鲜日频 z · 新转 episodic</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.40%</td><td className="num bear">+5.0bp</td><td className="num bear">+2.03</td><td className="num">+0.10</td><td className="bear">EXTREME RISK-OFF · 真实利率回硬</td></tr>
                <tr><td>5Y5Y 通胀 BE</td><td className="num">2.32%</td><td className="num bull">−2.0bp</td><td className="num">+1.46</td><td className="num">+1.03</td><td>按设计不打 regime 标（非对称触发）</td></tr>
                <tr><td>HY 信用利差（OAS）</td><td className="num">2.70%</td><td className="num bull">−5.0bp</td><td className="num bull">−1.04</td><td className="num bull">−0.73</td><td className="bull">RISK-ON · Tier-1 最友好的一行、在收窄</td></tr>
                <tr><td>芝加哥联储 NFCI</td><td className="num">−0.559</td><td className="num">−0.00</td><td className="num bull">−1.46</td><td className="num bull">−1.29</td><td className="bull">RISK-ON · <b>陈旧 10 天</b> · 周度序列</td></tr>
                <tr><td>MOVE 债券波动</td><td className="num">74.0</td><td className="num">+0.58</td><td className="num">+0.09</td><td className="num">−0.17</td><td>中性 · 无信号</td></tr>
                <tr><td>美元指数（DXY）</td><td className="num">98.85</td><td className="num">+0.05</td><td className="num">−0.12</td><td className="num bull">−1.61</td><td>regime 中性、30 观测 episodic 偏软</td></tr>
                <tr><td>联储净流动性</td><td className="num">$5.792T</td><td className="num bear">−0.004T</td><td className="num bear">−1.22</td><td className="num bear">−2.45</td><td className="bear">RISK-OFF · Tier-1 最深 episodic · 在抽</td></tr>
                <tr><td>USD/JPY</td><td className="num">158.91</td><td className="num">+0.03</td><td className="num">+0.55</td><td className="num">−0.73</td><td>按设计不打 regime 标</td></tr>
                <tr><td>美日 10Y 利差</td><td className="num">2.07%</td><td className="num">+5.0bp</td><td className="num">+0.03</td><td className="num">+1.52</td><td>regime 中性 · episodic 被标</td></tr>
                <tr><td>JGB 10Y</td><td className="num">2.67%</td><td className="num">+2.0bp</td><td className="num bear">+2.42</td><td className="num">+1.09</td><td className="stale">FRED <b>月度 · 陈旧 84 天 · 不要压</b> —— 全板最高 z、也是最不可用的一个</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7118</td><td className="num">−0.01</td><td className="num">−1.56</td><td className="num">−2.57</td><td>全板绝对值最大 episodic · 按设计不打 regime 标</td></tr>
              </tbody>
            </table>

            <h2 className="dn-sec">
              交易本{' '}
              <span className="dn-roman">V · 回撤多头按自己的规则退役（未成交）· 追空连续第四个 session 站下 · 一个回踩站住框架 已定义、未武装 · 本子空仓</span>
            </h2>

            <p>
              <span className="dn-signal">
                本子是空的、整波行情里它都是空的，而诚实的记账要排在新框架前面
              </span>
              。08-24 那篇写下了一条处置规则，盘面在 24 小时内把它点着。这一句
              里既是好消息也是坏消息：交易台在一个明确的、可核对的条件上预先
              承诺过要杀掉自己的想法，而这个条件恰恰在一个「如果当初进过场就会
              赚钱」的价格上点着。八天里现在有两个框架被处置掉 —— 08-19 的
              补涨 scout 在 08-22 到期未成交、机会成本 10.03R 毛 / 按写明的
              0.2R 规模约 2.01R；回撤多头今天退役、未成交，在连着两个 session
              里分别差 $20.30 没碰到武装印、差 $9.00 没够到第一目标。{' '}
              <b>两个都没看错方向。两个都看错了「拿不拿得到」。</b>这现在是一个
              有两个观测的模式，如实记录、不做解释性开脱。{' '}
              <b>谱系 MFE 台账仍然不存在</b>，所以两次差价都没有对着历史的失手
              做排名；这个台账从 08-22 那次审计起就是未结项。{' '}
              <b>它的行单位在这里定义清楚，好让深度可核对：一行 = 一次带日期的
              差价或处置事件。</b>按这个定义它应当有 <b>三行</b> ——（1）08-19
              scout、到期未成交、记录于 08-22；（2）08-23 那次差 $20.30 的武装
              差价；（3）今天的退役，并把 08-24 那次差 $9.00 的第一目标差价作为
              同一个框架的终局观测带在同一行里。今天补上的是第三行。
            </p>

            <div className="dn-trade">
              <span className="dn-side long">多 · 回撤再进场框架 · <b>退役 —— 未成交</b> · 被 08-24 备忘自己预先承诺的处置规则杀掉，不是被漂移、也不是被盘面证伪</span>
              <div className="dn-trade-name">
                $75,000–$76,000 墙带里的回撤多头 —— 在它被写下的水位上退役、
                从未进场、并且明确不向上重画
              </div>
              <div className="dn-thesis">
                08-24 那篇发表的原话是：{' '}
                <em>
                  「若 1d 收印在 $78,000 / $78,228.40 / $78,446.94 这层盖子
                  之上、此框架按太低退役、不是继续扛 —— 和 08-19 scout 拿到的
                  是同一种处置，主动做、而不是被漂移做。」
                </em>{' '}
                <b>08-24 的日线收印在 $78,953.00。</b>它比 $78,000 墙高
                $953.00、比该篇引用的 D-EMA400 $78,228.40 高 $724.60（按今天
                重算的 $78,235.38 是高 $717.62 —— 两个值上都点着）、比三条里
                最高的 W-EMA100 $78,446.94 高 <b>$506.06、也就是 +0.65%</b>。
                口径是交易所日 bar，也就是本子在 08-24 那次 $91.90 价格口径
                分歧之后采纳的那一个，所以规则是在写明的口径上点着的、不是在
                一个顺手的口径上。<b>框架退役。</b>腿 1（08-23 W-SUN 结算
                $77,719.10、在 W-SMA200 $64,269.62 上方 +20.93%）本已被永久
                满足；腿 2 从未点着，最近的一次是一根收在带顶上方 $20.30 的
                1h。独立的结构证据与规则一致：这次进场所依赖的整片 $70k–$76k
                墙货架本 session 又变轻了 —— $75,000 +13.08M → +8.65M、
                $76,000 +11.21M → +8.90M、$74,000 +11.59M → +8.16M、$72,000
                +11.57M → +8.55M、$70,000 +18.57M → +11.77M，而且 $72k–$76k
                这四个行权价全部掉出前十。交易台想买的那条带，已经不再是一条
                有结构防守的带。{' '}
                <b>
                  它不被重画到更高的价格。一个被挪上去迎合盘面的框架就不叫
                  框架，而事先写下处置规则的全部意义，就是让今天这个决定变得
                  无聊。
                </b>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v"><b>退役 · 未成交</b> · 处置规则在 08-24 日线收 $78,953.00 对盖子顶 $78,446.94（+$506.06 / +0.65%）上点着</span></div>
                <div><span className="dn-lvl-k">两条腿的终局</span><span className="dn-lvl-v">腿 1 <b>已点着且永久</b>（08-23 W-SUN $77,719.10 = 对 W-SMA200 $64,269.62 +20.93%）· 腿 2 <b>从未点着</b> —— 最近一次是交易所 1h 收 $76,020.30、在带顶上方 $20.30，1m 低 $75,588.00 进带 $412.00、但没有任何一个小时站住</span></div>
                <div><span className="dn-lvl-k">机会成本</span><span className="dn-lvl-v">不按 R 计 —— 与 08-19 scout 不同，这个框架在任何一个候选口径上都没武装过，所以没有成交价可以量起。可量的事实是两次差价：08-23 武装印差 $20.30、08-24 第一目标 $80,000 差 $9.00（24h 高 $79,991.00）</span></div>
                <div><span className="dn-lvl-k">不带走的东西</span><span className="dn-lvl-v bear">$76,000 进场、$72,992.40 止损、$80,000 / $81,784.71 目标梯与 1.33:1 的 R/R 全部随框架退役 · 没有一样被移植进下面那个新框架，那是另一个 setup、有自己的水位</span></div>
                <div><span className="dn-lvl-k">带走的东西</span><span className="dn-lvl-v">两个未结的设计缺陷：<code>net_btc</code> 闸门不成立；以及任何带式闸门必须在发表之前同时点名它的价格口径<em>和</em>它的时长</span></div>
              </div>
              <div className="dn-gating">
                <b>流程注：</b>这是交易台连续第二个按写下的规则处置、而不是任由
                其漂移的框架，也是连续第二个从未进场的框架。这两句都是真的，
                而且指向相反。处置纪律完全按设计在起作用。<em>进场</em>纪律则
                在一轮 +22.72% 的七日行情里产出了两次正确的方向判断和零个仓位，
                这是交易台公开背着的成本，不是一件用来自我表扬的流程。正确的
                结论不是「把闸门放松」—— 失手之后放松的闸门是被懊悔设定的闸门。
                结论是：闸门被摆在了盘面早已离开的水位上，下一个框架应当锚在
                盘面真正在交易的结构上。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">多 · 回踩站住框架 · <b>已定义 · 未武装</b> · 一个有自己水位的新对象，不是旧框架的迁移</span>
              <div className="dn-trade-name">
                在被重夺的 $78,000 / D-EMA400 / W-EMA100 台阶上的回踩站住多头 ——
                口径与时长都点名，并且在这个快照上刻意不武装
              </div>
              <div className="dn-thesis">
                在退役一个更低的框架的第二天就定义一个更高的框架，正是 08-24
                那篇警告过的漂移，所以护栏先说：{' '}
                <b>这是另一个 setup，不是旧的那个被挪上去</b>。被退役的框架是
                「在一条有防守的墙带里买深回撤」。这一个是「买一条已经被清掉
                并且收在其上的天花板的回踩」，这是一个到 08-24 才存在、更早
                根本写不出来的 setup。它锚在三条盘面已经交易穿过、并在交易所
                口径上收在其上的水位上：{' '}
                <b>$78,000 墙（+27.16M）、D-EMA400 $78,235.38、W-EMA100
                $78,446.94</b> —— 一层 $446.94 宽、坐在现货下方 0.62%–1.18%
                的台阶。支持它的：MA 矩阵 18/20、日线梯子 10/10、MTF 9 多 /
                0 空 / 1 中性且两个口径都零空头、+256.84M 脚算夹子且前十堵墙
                全正、funding 脱顶、retail 在 7d 地板、以及一根在周期地板上方
                20.93% 的已结算周收。不在<em>今天</em>武装的理由，也就是它为什么
                没武装：<b>1d TD9 SELL 已印</b>、12h RSI 85.0 与 1d RSI 82.2
                还在 80 区、1h MACD 一根前刚出水上死叉、<b>OI 扩张 +1.58%</b>
                而不是收缩、现货坐在全盘最重那堵墙（$80,000 的 +44.28M）下方
                1.35%、而 24h 高点就停在离它 $9.00 的地方（按夹住的日频面板看
                与阻力相符、不是被证明的掉头原因），加上新鲜的宏观印真正转向
                不友好、10Y 与 TIPS real 各 +5.0bp。{' '}
                <b>没发生的回踩不是进场。</b>现在把框架写下来，是为了如果回踩
                真的来了，交易台不必在行情里现编规则。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v"><b>已定义 · 未武装</b> · 零腿点着 · 无仓、无单、无部分</span></div>
                <div><span className="dn-lvl-k">武装条件（口径与时长都点名）</span><span className="dn-lvl-v bull"><b>交易所 bar 口径上连续两根 1h 收</b>站在 <b>$78,000</b> 或之上，且此前 12h 内出现过触及或跌破 <b>$78,000</b> 的印 · 口径是交易所 1h bar、不是 live tape 采样；时长是两根 bar、不是「站住」二字 · 这条规格在动笔的时点上就把 08-24 那个设计缺陷关掉，而不是事后再补</span></div>
                <div><span className="dn-lvl-k">进场</span><span className="dn-lvl-v bull">第二根确认收上约 $78,200 · 0.2R · <b>不追</b> —— 一段直接跑到 $82k、从不回踩 $78,000 的盘面，是这个交易台不做的交易，这个结果被事先明确接受</span></div>
                <div><span className="dn-lvl-k">止损</span><span className="dn-lvl-v bear">1d 收 &lt; $77,248.42（W-EMA50、那层已连站三个 session 的台阶下沿）—— <b>在现货下方 2.13%</b>；要跌 2.13% 才够到它，等价地说现货在它上方 +2.18%</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">$80,000（+44.28M 最重的墙 · 离现货 +1.35%）、然后 W-SMA50 $81,784.71（+3.61%）· $80,000 之所以是目标，<em>正因为</em>它是最重的墙 —— 那是行情最可能停住的地方、不是最可能突破的地方</span></div>
                <div><span className="dn-lvl-k">处置规则（照旧，事先写下）</span><span className="dn-lvl-v bear">若在武装条件从未点着的情况下出现 1d 收 &lt; <b>$77,248.42</b>，此框架按未成交退役、多头结构从零重估 —— 那说明台阶站住这个论点就是错的。若在回踩从未到来的情况下出现 1d 收 &gt; <b>$81,784.71</b>（W-SMA50），它按<b>太低</b>退役，逻辑与今天退役它的前任完全相同</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R（示例）：</b>进场约 $78,200、止损 $77,248.42 = $951.58
                风险；第一目标 $80,000 = $1,800 回报 = <b>1.89:1</b>
                （1,800 / 951.58 = 1.8916）。这比被退役框架的 1.33:1 好，而
                交易台应当正因为这一点起疑 —— 一个挂在已连站三个 session 的
                台阶下方的更紧止损之所以给出好看的比率，恰恰是因为这层台阶
                还没有被从上方测试过。比率是选定水位上的算术、不是证据。{' '}
                <b>硬规则，重申：</b>上面的水位不会因为价格差一点没到就挪动，
                而这个框架会拿到它前任拿到的同一种处置、按同一套写下的条件、
                不再辩。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 追空 · <b>站下</b> —— 连续第四个 session · 价格腿离武装 18.92%（比 08-24 的 18.13% 更远）· γ 腿再深 +9.15M 到 +256.84M 脚算，已核对的 post-08-16 谱系里最深（08-21 无存档）</span>
              <div className="dn-trade-name">
                追空 —— 再次站下；两条腿都走得更远，而均值回归的证据比以往任何
                时候都强，这依然不构成一个空头
              </div>
              <div className="dn-thesis">
                能把一个空头摆上桌的两个条件是价格腿（现货够得到 0-γ flip、
                在那里 dealer 本子从抑制转成放大）与 γ 腿（正夹子在解开）。
                两条腿连续第四个 session 都在往<em>远</em>走。flip 坐在{' '}
                <b>$64,001、现货下方 18.92%</b> —— 要跌 18.92% 才够到，对着
                08-24 的 18.13%；这条腿走远是因为 flip 抬了 $449 而现货抬了
                约 $1,300。夹子加深 <b>+9.15M 到 +256.84M 脚算</b>、是{' '}
                <b>已核对的 post-08-16 谱系里最深的一次正印</b>，它清掉的真正
                前高是 <b>08-20 +254.15M、只多 +2.69M</b>（08-22 的 +249.91M
                是第三深、不是对照项）—— 而且依然{' '}
                <b>不是整条谱系的最大值</b>，同一脚算口径下 07-22 +313.63M 与
                07-23 +283.46M 更深，并且<b>在档没有 08-21 的存档</b>，所以
                这个序数是对可得面板而言、不是对每一天而言。本 session 的
                均值回归证据确实是历来最强的：{' '}
                <b>1d TD9 SELL 已点着</b>而不再是差一根、12h RSI 85.0 与 1d
                RSI 82.2、15m/30m 两个顶背离、一根新鲜的 1h 水上死叉、一次
                差 $9.00 停在 $80,000 之下（夹住的面板在那里放着一堵 +44.28M
                的墙，与阻力相符、不构成因果证明）、以及一份 10Y 与 TIPS real
                各 +5.0bp 的新鲜宏观印。<em>
                  所有这些依然是均值回归证据、而它们身处一张 9 多 / 0 空 /
                  1 中性的 MTF 图、一条 10/10 全正的日线梯子、一个 18/20 的
                  完整矩阵、以及一根在周期地板上方 20.93% 的已结算周收里面。
                  在一个 +256.84M 的正 γ 本子、在 flip 上方 23% 的地方做空，
                  是一笔没有结构支撑的交易，而一堆超买震荡指标不是结构支撑的
                  替代品。
                </em>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">站下 —— 这个快照上不考虑任何空头</span></div>
                <div><span className="dn-lvl-k">价格腿（未满足 · 更远）</span><span className="dn-lvl-v bear">现货够得到 0-γ flip $64,001 —— 现在它在现货下方 18.92%；现货在它上方 +23.33%（对文件 Deribit idx $79,287 是 +23.88%）</span></div>
                <div><span className="dn-lvl-k">γ 腿（未满足 · 更远）</span><span className="dn-lvl-v bear">脚算 aggregate GEX 转负或向零塌 —— 现在 +256.84M（headline +255.6M）、比 08-24 深 +9.15M · 3.3 DTE 的 28AUG26 +80.34M / 31.28% 是能动这条腿的、最近的一个带日期的结构性催化</span></div>
                <div><span className="dn-lvl-k">不要</span><span className="dn-lvl-v">不要把已点着的 1d TD9 SELL、12h/1d 的 80 区 RSI、15m/30m 顶背离、新鲜的 1h 死叉，或者高点差 $9.00 停在 $80,000 之下这件事，读成做空触发 —— 它们是不要<em>追多</em>的理由，而那和做空是两条不同的指令</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>γ 腿有一个带日期的候选、价格腿没有。28AUG26
                在当前 IV 下贡献 +80.34M —— 脚算条带的 31.28% —— 于
                2026-08-28 08:00Z 结清，25SEP26 另有 +76.11M / 29.63%，两条线
                共握 60.91%。在没有抵消性的本子、现货或 IV 变化的前提下，
                28AUG26 的贡献会在那次结清上掉出来、实质性地把夹子变薄。那仍然
                是一个 <em>watch</em>、不是预测，而本 session 恰好给出这条注脚
                的证据：它的份额已经连着三个 session 下降（36.17% → 33.71% →
                31.28%），<em>而同期整条条带在涨</em>、涨了 +14.47M。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">已了结 · 08-19 补涨 scout · 到期未成交 —— 记录于 08-22、未变、不再辩</span>
              <div className="dn-trade-name">
                08-19 scout —— 在本子里只作为它暴露出的那些未结设计缺陷被带着，
                其中一个今天在动笔的时点上被关掉
              </div>
              <div className="dn-thesis">
                08-19 的 scout（进场约 $64,632、止损 $63,301、目标 $66,343 /
                $66,391）在 08-22 被记录为 <b>到期未成交</b>，机会成本 10.03R
                毛 / 按写明的 0.2R 规模约 2.01R，两个目标都在 2026-08-19
                15:05Z 被打到。本 session 不改动这条记录。仍然活着的是那个缺陷：
                这笔交易之所以从未武装，是因为它的腿 2 要求一个可采信的 SM
                净多，而 SM feed 是在一分钟级的交易者计数断点里生产出它的净多的。
                今天这方面的证据比以往任何时候都强 ——{' '}
                <b>
                  七天里七次一天一次的跳档，每一次都落在 06:21Z–07:06Z 这条带
                  里，两个方向都有
                </b>
                。机制仍然<b>未载入、也不主张</b>；时间规律是关于盘面的观测，
                交易台不把它转换成关于自己看不见的上游系统的主张。设计结论不
                需要机制，而且没变：本子里没有任何闸门写在{' '}
                <code>net_btc</code> 上。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">到期未成交 · 08-22 结清 · 不重画 · 本 session 不追加任何记账</span></div>
                <div><span className="dn-lvl-k">未结设计项 1 · SM 闸门（已加强）</span><span className="dn-lvl-v bear">一分钟 <code>net_btc</code> 跳档：08-18 06:21Z、08-19 06:46Z、08-20 07:06Z、08-21 06:21Z、08-22 06:41Z、08-23 07:06Z、08-24 06:26Z —— 连续七天落在一条 45 分钟宽的带里、两个方向 · 本篇 24h Δnet 的 93.28% 是 08-24 那一跳 · 成因未载入 · 不论机制如何，写在 <code>net_btc</code> 上的二元决策闸门在这条序列上都不成立</span></div>
                <div><span className="dn-lvl-k">未结设计项 2 · 价格口径（动笔时点已关闭）</span><span className="dn-lvl-v bull">08-24 备忘记录过：「一根收在带里并站住的 1h」既没点名口径也没点名时长。上面那个回踩站住框架<b>两个都点名了</b> —— 交易所 1h bar 口径、连续两根收 —— 而且是在发表之前，不是在一根有争议的印之后。这个缺陷作为一条规格规则被关闭；它站不站得住，要看下一个用到它的框架</span></div>
                <div><span className="dn-lvl-k">未结设计项 3 · MFE 台账（仍未结）</span><span className="dn-lvl-v bear">谱系 MFE 台账不存在，所以 08-19 的到期与今天的退役都没有对着历史失手排名 · 自 08-22 审计起未结 · 行单位定义为<b>一行 = 一次带日期的差价或处置事件</b>，按此台账应为 <b>三行</b>：08-19 scout 到期（记录于 08-22）、08-23 差 $20.30 的武装差价、以及今天的退役并带上 08-24 差 $9.00 的第一目标差价</span></div>
              </div>
              <div className="dn-gating">
                <b>记账注：</b>10.03R / 约 2.01R 这两个数字是一笔从未进场的
                交易上的算术，为流程问责而记录，不是业绩主张。本篇每一个差价
                数字同理：$20.30、$9.00 与 $506.06 是盘面相对写下水位跑到哪里
                的度量，不是盈亏。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 处置规则已点着、框架退役 · funding 脱顶已点着但 OI 在涨 · 1d TD9 SELL 已点着 · retail 去拥挤再点着 · 本子空仓、一个新框架已定义未武装</span>
            </h2>

            <p>
              08-24 那些条件里：<b>盖子测试已点着</b> —— 08-24 日线收 $78,953.00
              在最高一侧把 $78,000 / $78,228.40 / $78,446.94 这条带清出
              $506.06，按该篇自己写下的规则，回撤框架<b>按太低退役</b>；{' '}
              <b>1d TD9 SELL 已点着</b>，恰好在被标为「只剩一根」之后一根；{' '}
              <b>funding 脱顶已点着</b>，在连续 4,953 根钉顶行之后，但{' '}
              <em>只点着了一半</em> —— 条件里那句「最好伴随 OI 下降」失败了、
              OI 扩张 +1,670.2 BTC / +1.58%，而 4h46m 对着一个没有定义的
              「持续」来说是一段很嫩的时间；<b>retail 回挤 watch 反转</b> ——
              51.69% → 48.58%、−3.11pt，24h 谷 48.12% 同时是 7d 最低，所以
              08-24 备忘记录的那个不利读数在一个 session 里自己撤销了；{' '}
              <b>台阶站住</b>连续第三个 session（W-EMA50 $77,248.42 /
              W-SMA150 $77,446.22、现货在上方 +2.18% / +1.92%），所以「掉水位」
              这个触发没有点着；<b>回撤武装腿 2 未点着</b>并且现在已成为无意义
              的问题 —— 24h 低 $76,649.00 停在带顶上方 $649.00；{' '}
              <b>追空继续站下</b>、两条腿都更远；<b>28AUG26 夹子没有 roll-off</b>
              、它的份额第三次缓到 31.28%；<b>SM feed 缺陷复发</b>，连续第五个
              session；以及<b>宏观面板终于刷新</b>、在两次重渲染之后拿到工作日
              数据。{' '}
              <em>
                一个 session 里点着了五个条件 —— 其中四个是交易台说它想要的、
                一个是它说它怕的 —— 而本子对它们全都是空仓。200W watch JSON
                在这台机器上不存在、周期地板读数走的是 parquet 矩阵 fallback，
                这件事是披露出来的、不是糊过去的。
              </em>
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td><b>盖子测试</b>（已点着 —— 处置规则）</td><td className="bull">08-24 日线收 $78,953.00 对 $78,000 墙 / D-EMA400 $78,228.40 / W-EMA100 $78,446.94 这条带 · 在采纳的交易所 bar 口径上把最高一侧清出 $506.06（+0.65%）</td><td><b>已执行</b>：回撤多头按太低退役、未成交、停在它原来的水位上。不重画、不扛、不再辩。三条盖子水位翻转为支撑、成为新的回踩站住框架的锚</td></tr>
                <tr><td><b>1d TD9 SELL</b>（已点着）</td><td className="bear">在 00:01Z 扫描上于 $78,932 印出 · 文件把最后一根标为可能未收盘</td><td>不是做空触发、也不被当成触发。它是新框架「已定义、未武装」的首要理由，也是在一堵 +44.28M 的墙下方 1.35% 处不开多的首要理由</td></tr>
                <tr><td><b>funding 脱顶</b>（已点着 —— 部分）</td><td className="bull">钉顶连续段 08-21 08:48Z → 08-24 19:20Z 闭区间（4,953 行 / 4,952 分钟）并断开；脱顶第一行 19:21Z · 287 行 / 286 分钟 = 4h46m 在封顶之下 · 现在 +6.31% 年化、从 +10.95%（−4.64pt）· 24h 均值 +10.3032%、占用 80.1%</td><td>四个 session 里全本子最难看的那一行被缓解。<b>但条件里那句「最好伴随 OI 下降」失败了</b> —— OI 涨了 +1.58%。当作「已点着但嫩」处理：更大底仓上的更便宜 carry，不等于杠杆在清</td></tr>
                <tr><td><b>retail 回挤</b>（已反转）</td><td className="bull"><code>mkt_long_pct</code> 48.58%、24h 内 −3.11pt · 24h 谷 48.12% @ 08-24 16:47Z 同时是 7d 最低 · 端点 51.69% → 48.58%</td><td>08-24 那个不利读数在一个 session 里自己撤销。约 55% 的回挤阈值离得很远，多头论据里「散户不在这里面」这条腿比最初写下时更强。仍然是一条注、不是信号</td></tr>
                <tr><td><b>回踩站住武装</b>（新 · 未点着 · 口径与时长已点名）</td><td className="bull">交易所 bar 口径上连续两根 1h 收站在 <b>$78,000</b> 或之上，且此前 12h 内出现过触及或跌破 $78,000 的印 · 现货目前在 $78,000 上方 +1.20%，所以回踩尚未发生</td><td>scout 多头 0.2R、约 $78,200 进场，止损 1d 收 &lt; $77,248.42，目标 $80,000 然后 W-SMA50 $81,784.71 · R/R 1.89:1 · 回踩不来就<b>不追</b></td></tr>
                <tr><td><b>回踩站住处置</b>（新 · 事先写下）</td><td className="bear">武装条件从未点着的情况下 1d 收 &lt; $77,248.42 → 按未成交退役、多头结构从零重估 · 或回踩从未到来的情况下 1d 收 &gt; $81,784.71 → 按太低退役</td><td>与今天退役它前任的处置完全相同，在框架被写下的同一天预先承诺，而不是事后补上</td></tr>
                <tr><td><b>$80,000 墙</b>（新的带日期头顶）</td><td className="bear">+44.28M、全盘最重的单一行权价，从 +40.17M 加强 · 24h 高 $79,991.00 停在离它 $9.00 的地方 · 现货在下方 1.35% · <b>没有任何盘中 GEX 面板夹住 15:32Z 的高点；这堵墙是日频面板的推断、与阻力相符，不是被观测到的成因</b></td><td>一个目标，不是一个可以在其前面买入的水位。1d 收在 $80,000 之上，会是本子里最大那团 γ 集中正在被吸收、而不是在顶住的第一个证据</td></tr>
                <tr><td>结构性证伪（重新锚定）</td><td className="bear">1d 收 &lt; $77,248.42（W-EMA50）· 在现货下方 2.13% —— 要跌 2.13% 才够到（现货在上方 +2.18%）· 老的 $72,992.40 随它所属的框架一起退役</td><td>台阶站住的论点被证伪、整个多头结构从零重估。注意这个证伪位比被退役框架那个离 8.14% 的止损紧得多，这是每笔交易脆弱度的真实上升，如实陈述</td></tr>
                <tr><td>台阶站住（带过来 · 第三次连站）</td><td className="bull">1d 收持续站在 W-EMA50 $77,248.42 / W-SMA150 $77,446.22 之上 —— 现为 +2.18% / +1.92%</td><td>又站住了；08-24 那篇「一周内第三次丢掉就退役这个说法」的触发没有点着。这一对现在是在做结构上的活 —— 当新的止损、而不是当叙事货架</td></tr>
                <tr><td>28AUG26 γ roll-off</td><td className="bear">+80.34M = 脚算 +256.84M 条带的 31.28%、3.3 DTE、2026-08-28 08:00Z 结清 · 加上 25SEP26 +76.11M / 29.63%，两条线握 60.91%</td><td>当前 IV 下的快照贡献、<b>不是保证发生的 roll-off</b> —— 它的份额已连着三个 session 缓下（36.17% → 33.71% → 31.28%）而条带涨了 +14.47M，这条注脚在自证</td></tr>
                <tr><td>SM feed（设计缺陷 · 不是交易条件）</td><td className="stale">七次一天一次的跳档、08-18 至 08-24、每一次都在 06:21Z–07:06Z 之内、两个方向 · 本篇 24h Δnet 的 93.28% 是 08-24 06:26Z 那一跳 · 跳档是观测到的；上游成因<b>未载入、也不主张</b></td><td>没有任何闸门写在 <code>net_btc</code> 上。唯一带走的 SM 陈述是那段 17h41m 的无跳档窗（Δnet +1,146.6、+3.67%），它是描述性的、不是决定性的</td></tr>
                <tr><td>200W 周期地板 watch（来源缺失）</td><td className="stale">weekly_200sma.json <b>在这台机器上不存在</b> · 用矩阵 fallback：364 根已结算周收上的 W-SMA200 $64,269.62、08-23 收 $77,719.10 = +20.93%、现货 +22.82% · 排名口径点名：<b>37/165 严格更低 = 22.4%</b>、含并列经验排名 <b>38/165 = 23.0 分位</b>；破地板计数 10/165（6.1%）—— 三个都是交易台在 parquet 上算的，不是从 watch 文件读的</td><td>本篇任何地方都不引用 JSON <code>state</code>、<code>ratio_pctile</code> 或 <code>last_event</code>。恢复 watch 文件是基础设施项、不是交易条件</td></tr>
                <tr><td>宏观再生长 / 利率过滤（新鲜数据）</td><td className="bear">三篇里第一个工作日印：10Y 4.74%（+5.0bp、z +2.19、新转 episodic +1.52）、TIPS real 2.40%（+5.0bp、z +2.03），两条都是 EXTREME RISK-OFF · 对冲项混：HY OAS 2.70%（−5.0bp、RISK-ON）、DXY 98.85 episodic −1.61、联储净流动性 $5.792T episodic −2.45 在抽</td><td>一个被 BTC 当天无视掉的利率回硬，给不出任何宏观动作。读数是资讯性的：面板在新鲜数据上转向不友好而盘面不在乎，这描述的是当前 regime、不为下一个印背书</td></tr>
                <tr><td>MFE 台账（设计缺陷 · 仍未结）</td><td className="stale">谱系 MFE 台账不存在 · 自 08-22 审计起未结 · 行单位 = 一次带日期的差价或处置事件，据此为<b>三行</b>：08-19 scout 到期（记录于 08-22）· 08-23 差 $20.30 的武装差价 · 08-25 的退役并带上 08-24 差 $9.00 的第一目标差价</td><td>在下一个框架被处置之前把它建起来，让「闸门被摆在盘面不去的地方」从两个观测的印象变成一个可度量的主张</td></tr>
              </tbody>
            </table>

            <p>
              会改写<em>这一篇</em>的那条线是{' '}
              <span className="dn-signal">
                盘面到底会不会回来回踩它刚刚从天花板转成地板的 $78,000 台阶 ——
                让交易台终于能按一条写下的规则买到东西 —— 还是直接清掉 $80,000
                与它那堵 +44.28M 的墙、头也不回，然后交易台第三次退役一个未成交
                的框架
              </span>
              。其余都是背景。结构是本谱系里最好的一次，而且是在证据上更好：
              完整 MA 矩阵 18/20、日线梯子 10/10、MTF 9 多 / 0 空且两个口径都
              零空头、+256.84M 脚算夹子且前十堵墙全正、被点名的实质墙随价格
              上移、funding 在 4,953 行之后脱顶、retail 在七日地板、以及一根
              在周期地板上方 20.93% 的已结算周收。而盘面同时仍然没有给出一个
              好进场：1d TD9 SELL 已点着、12h 与 1d RSI 都在 80 区、OI 在上涨日
              里扩张、新鲜的宏观印把 10Y 与 TIPS real 各推高 5bp，而现货坐在
              全盘最重那堵墙下方 1.35%、并在离它 $9.00 的地方停住 —— 那是一次
              日频面板夹得住、却证明不了的水位巧合。{' '}
              <em>
                这两个读数已经连着四篇不冲突了，而今天交易台不再只是描述这份
                张力、而是按它行动：低的那个框架退役，一个新的写在盘面真正在
                交易的水位上，口径、时长与处置规则全部事先点名。本子维持
                空仓。这个 session 不一样的地方在于：空仓现在是一个附带写下
                条件的仓位，而不是一个默认下来的仓位。
              </em>
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2 · 已过 codex 敌对式审计
            </span>
            <b>
              状态：STAGE B 对 v1 草稿在 xhigh 强度上跑了 codex 敌对但公允的
              跨模型审计、裁定{' '}
              <span className="dn-tag bear">BLOCK-CRITICAL —— 2 CRITICAL +
              2 MAJOR + 6 MINOR</span>。记录在{' '}
              <code>audits/2026-08-25-desk-note.md</code>、本阶段未改动它。
              十条 findings 全部就地修正，并且每一条都是靠<em>整个</em>文件的
              grep 收口关掉的，不是只改审计引用的那几行。
            </b>{' '}
            这个区分正是 2026-06-08 / 06-09 两次 pipeline 失败被记录在案的
            根因：审计引用的行是「一条被打破的不变量的主要示例」、不是它的
            穷举。收口方法：每一条 finding 都把错误主张的字符串与它的语义变体
            在整个 EN 文件上做修前 / 修后 grep，只有修后命中为 0 才标 RESOLVED。
            逐条 —— <b>DN-001（CRITICAL · IV/RV richness 因果）</b>：修前 2
            处（meta tile 与 §III）、<b>修后 0</b>，两处现在都印可度量的分解
            （缺口收窄 3.2513pt、链中位 IV −3.2000pt 贡献 98.4%、RV
            +0.0513pt）—— <b>RESOLVED</b>。{' '}
            <b>DN-002（CRITICAL · 台账漏掉 08-20 的脚算）</b>：pattern{' '}
            <code>+6.93M</code>、<code>complete ledger</code>、
            「以 08-22 为 post-08-16 前高」、「post-08-16 谱系最深」等，修前 4
            处（§III 罗马、§III 正文、追空侧栏与 thesis）、<b>修后 0</b>；对照
            项改为 08-20 +254.15M、清出幅度 +2.69M，序数限定到<em>已核对</em>
            谱系，08-21 存档缺口在四处全部披露，完整台账印出 —— <b>RESOLVED</b>。{' '}
            <b>DN-003（MAJOR · 完整 profile 全称主张）</b>：pattern
            「每一个变动的行权价都朝价格方向变动」修前 1 处、<b>修后 0</b>；
            全称句删除、主张限定到被点名的实质墙，并印出四个实测反例
            （$87,000 与 $89,000 在上方却变轻、$65,000 与 $66,000 在下方更负）
            与 45 个共有行权价上 28 重 / 17 轻的分布 —— <b>RESOLVED</b>。{' '}
            <b>DN-004（MAJOR · $80k 墙的因果）</b>：pattern{' '}
            <code>reject</code>（不分大小写、所有词形）修前 6 处、
            <b>修后 0</b>；所有位置改为「价格差 $9.00 停在 $80,000 之下」，
            并点名夹住高点的两份日频面板（08-24 00:00Z +40.17M、08-25 00:01Z
            +44.28M，分别在 15:32Z 高点前约 15.5h 与后约 8.5h）与阻力相符、
            明确不是因果证明 —— <b>RESOLVED</b>。{' '}
            <b>DN-005（MINOR · 前端到期归属）</b>：修前 1 处、<b>修后 0</b>；
            24AUG26 现在写成 08-23 为 −1.21M、08-24 为 +9.67M，08-24 真正的
            负值 26AUG26 / 27AUG26 各 −0.03M 一并印出 —— <b>RESOLVED</b>。{' '}
            <b>DN-006（MINOR · 脱顶分钟与时长）</b>：pattern <code>4h47m</code>
            修前 5 处、<b>修后 0</b>；所有位置改为最后钉顶行 19:20Z、第一根
            脱顶行 19:21Z、287 行 / 286 分钟经过 = 4h46m —— <b>RESOLVED</b>。{' '}
            <b>DN-007（MINOR · 陈旧方向）</b>：pattern「比锚早/晚」的方向词
            修前 3 处（MTF 行、GEX 行、NFA）、<b>修后 0</b>；三处都改为比锚{' '}
            <em>早</em>约 6 分钟 —— <b>RESOLVED</b>。{' '}
            <b>DN-008（MINOR · 分位口径）</b>：修前 2 处只印 22.4、
            <b>修后 0</b>；两处现在同时印 37/165 严格更低 = 22.4% 与含并列
            经验排名 38/165 = 23.0 分位 —— <b>RESOLVED</b>。{' '}
            <b>DN-009（MINOR · 宏观动了几行）</b>：pattern「动了十行」修前
            1 处、<b>修后 0</b>；改为三个站得住的计数（7 行底层水位、11 行
            任何文本、面板自己点名 6 行）—— <b>RESOLVED</b>。{' '}
            <b>DN-010（MINOR · MFE 台账深度）</b>：修前 3 处、<b>修后 0</b>；
            行单位定义一次（一行 = 一次带日期的差价或处置事件），三处枚举
            完全相同的三行 —— <b>RESOLVED</b>。
            <br /><br />
            <b>收口小结：十条全部 RESOLVED、所有被搜索的 pattern 上带修前
            语义的命中数为零。</b>没有任何一条是仅凭审计引用行就通过的。
            08-20 的 +254.15M 与全部十一份到期表脚算、两份 by-strike profile
            的逐行对比、IV 49.8% → 46.6%、RV 43.1467% → 43.1981%，都在动笔
            之前对着存档人造物独立重算过。本中文版与 EN v2 数值零漂移、承载
            同一套口径与同一套警告。
            <br /><br />
            <b>审计记录、但本篇不收口的未结事项：</b>2026-08-21 的 GEX 存档
            不存在，所以谱系序数只对可得面板成立；没有任何盘中 GEX 面板夹住
            15:32Z 的高点；正典的 <code>weekly_200sma.json</code> 缺失、周期
            地板读数是披露过的 parquet fallback、不引用任何 JSON 状态字段；
            谱系 MFE 台账不存在；SM 上游成因未载入、不点名机制；NTT、
            max-pain、strike-level IV 与 BTC/NQ 比率仍为 framework only；
            ingestion writer 仍在物理行 65,799 处写出只含 NUL 的记录（在本篇
            用到的每一个窗之外）。Build proxy：{' '}
            <code>npx --no-install tsc --noEmit</code> 退出 0；完整{' '}
            <code>next build</code> 仍被环境阻塞 —— Node 18.19.1 对 Next
            16.2.6。补充的 <code>ask-deepseek</code> 二次审计返回 HTTP 402
            （余额不足）、对裁定没有任何贡献。审计的{' '}
            <b>Codex-confirmed clean</b> 一节 —— 门与路由、JSX 完整性、
            pin / live 同一性、盘面区间与 OI、funding 算术、retail / SM / 流、
            MA / RV / 200W 矩阵、当期 GEX 算术、MTF、宏观与跨资产数字、交易
            算术与范围 —— 原样带走。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体情况
            个性化。数字反映单一原子快照（2026-08-25 00:07Z，锚行的{' '}
            <code>t</code> 字段是 BJ 本地时 08-25 08:07），provenance 在上方
            数据来源条带中按节披露：{' '}
            <b>
              这是 v2、在 codex 敌对式审计之后晋级 —— 裁定记录在{' '}
              <code>audits/2026-08-25-desk-note.md</code>，2 CRITICAL +
              2 MAJOR + 6 MINOR 十条 findings 全部就地修正并用全文件 grep
              收口，逐条的修前 / 修后命中记录在上方审计痕迹里
            </b>
            。宏观 Tier-1 面板渲染于 2026-08-24 22:16Z（比锚早约 1.9h）；
            MTF 与 GEX 人造物都是 00:01Z、<b>比盘面锚早约 6 分钟</b>——是相对
            它更旧、不是更新；200W 周期地板 watch 文件<em>不存在</em>、它的
            读数是披露过的 parquet fallback，分位按两个口径印
            （37/165 严格更低 = 22.4%、含并列 38/165 = 23.0 分位）；GEX 文件
            的 Deribit 指数比 live 现货高 $354.20，所以每一个距离数字都按两个
            参考印；aggregate GEX 的三个口径全部披露、全篇走按到期脚算；
            post-08-16 的脚算台账缺 2026-08-21 一天的存档，所以「最深」这个
            序数只对可得的已核对面板成立；15:32Z 高点当刻没有盘中 GEX 观测、
            $80,000 那堵墙是日频面板的推断而非被观测到的成因；JGB 是 FRED
            月度、陈旧 84 天；IV 是跨 944 合约的链中位、不是可交易价差；
            NTT pivot、max-pain、strike-level IV 与 BTC/NQ 比率均未载入。
            水位、规模与条件是交易台流程的示例、不是长期推荐。机会成本与差价
            数字描述的是盘面相对写下水位跑到哪里，不是已实现业绩的陈述。
            过去的相关性、γ 与仓位模式不绑定未来盘面。衍生品有全损风险、
            加杠杆下损失可超过保证金。<em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                我们写的规则点着了，所以我们写的交易退役 —— 未成交、停在它被
                写下的水位上，八天里第二次。funding 下了封顶、散户走了、盖子
                成了地板。本子还是空的。新框架在写下进场之前，先写下它的口径、
                它的时长和它自己的处置规则。
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
            v2 · 2026-08-25 00:07Z 快照 · 已过 codex 敌对式审计
            （audits/2026-08-25-desk-note.md —— 2 CRITICAL + 2 MAJOR + 6 MINOR、
            全部 RESOLVED 并已 grep 收口）· 源：live_db.json（已冻结）·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Deribit
          </span>
        </footer>
      </article>
    </main>
  );
}
