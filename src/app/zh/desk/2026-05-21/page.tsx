import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-05-21 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-05-21',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-05-21' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260521() {
  await requireViewer('/zh/desk/2026-05-21');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HR · BTC · 交易台备忘 · 2026-05-21 · v2</span>
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
              <span className="dn-big">$77,588</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+1.1%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-05-21 00:08Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-05-21 00:08Z</td>
                  <td className="dn-flag">最新 · 1 分钟</td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 00:01Z scan</td>
                  <td className="dn-flag">最新 · 含未收盘 K 线</td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 00:01Z 快照</td>
                  <td className="dn-flag">最新 · Deribit idx $77,584 对现货 $77,588</td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 00:01Z
                  </td>
                  <td className="dn-flag">滞后约 7 分钟 · 1h bar · 22 资产</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-05-20 22:15Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 2h · FRED Tier-1 数值新鲜 · 今天承重
                    （比 05-20 更差）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-05-21 00:05Z</td>
                  <td className="dn-flag">
                    陈旧约 3 分钟 · 偏移已对现货重算
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
              <span className="dn-v bull">+2.0%</span>
              <span className="dn-src">live · 00:08Z · 24h 均值 +7.1% · 现 = 24h 低</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bull">+3.8% → +2.0%</span>
              <span className="dn-src">压缩 · 区间 +2.0/+10.0%（现 = 低）</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−2.27% (−2,352 BTC)</span>
              <span className="dn-src">live · 在反弹里去杠杆</span>
            </div>
            <div>
              <span className="dn-k">Binance mkt long/short</span>
              <span className="dn-v">56.8 / 43.2</span>
              <span className="dn-src">live_db `mkt_long_pct` · 反弹里降温 59.7 → 56.8</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−6.7k（净 SHORT）</span>
              <span className="dn-src">live · long 16.74k − short 23.44k</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 05-20 备忘</span>
              <span className="dn-v bear">+2.6k → −6.7k（−9.3k 摆动）</span>
              <span className="dn-src">已翻空 · 05-20 的失效线已触发</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">43.0% / 25.5%</span>
              <span className="dn-src">GEX IV 中位数 · RV 基本持平</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v">−2.4%</span>
              <span className="dn-src">flip $75,693 对现货 · 源文件 +2.5% 对 idx</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              05-20 那篇写了一条明确的失效线：
              <em>
                「聪明钱重新翻净空、价格仍钉在防线上，会改写整份备忘。」
              </em>
              <span className="dn-signal">
                它触发了。SM 摆动 +2.6k → −6.7k BTC（9.3k 摆幅、约前
                净多的 3.6 倍），funding 从 +7.6% 压到 +2.0% 年化，OI
                泄 −2,352 BTC，宏观又差一档（10Y +6bp 到 4.67%，HY OAS
                regime 标签从「loose」翻「neutral」）——而价格 <em>反</em>
                上 +1.1%
              </span>
              ，一动收回了 D-EMA50、D-EMA100、D-SMA150。这不矛盾——这就是
              交易本身。这波反弹是现货推（session cb_cvd +4,290）、
              不带杠杆（funding 24h 低、OI 在泄）、被会上量的那一拨人
              （SM）卖出去，而宏观比 05-20 又紧两档。05-20 §VI 写下的
              SM-preempt-short 标准委托（0.3R、止损 1h 收盘 &gt; $77,100）
              大约 18 小时前在 $77.2k 触发、在这波反弹里被止损——这笔
              亏损是今天账本的一部分，不是对昨天计划的回改。
            </p>

            <p>
              BTC 现报 <span className="dn-tag">$77,588</span>
              （<span className="dn-tag bull">+1.1% 24h</span>），24h 区间
              <span className="dn-tag">$76,485–$77,826</span>（perp）。
              收回得很整齐：现货已重新站上
              <span className="dn-tag stale">D-EMA50 $76.8k (+1.07%)</span>、
              <span className="dn-tag stale">D-EMA100 $76.9k (+0.95%)</span>、
              <span className="dn-tag stale">D-SMA150 $77.0k (+0.75%)</span>
              ——05-20 标的「刚跌穿防线」的三条 MA，今天都回头站上去了。
              头顶接着是
              <span className="dn-tag bear">W-EMA20 $78.2k (−0.78%)</span>
              到 <span className="dn-tag bear">D-EMA20 $78.4k (−1.02%)</span>，
              再到 24h 高 $77.8k 紧贴下方。下方是
              <span className="dn-tag bull">D-SMA50 $76.2k (+1.85%)</span>，
              再到 GEX flip <span className="dn-tag">$75,693 (−2.4%)</span>。
              水位讲反弹；仓位、funding、宏观讲反弹被卖。这两个不需要
              调和——
              <span className="dn-signal">
                需要把它们当成一对一起做
              </span>
              。
            </p>

            <h2 className="dn-sec">
              仓位结构 <span className="dn-roman">I · 实时盘面</span>
            </h2>

            <p>
              自 05-17 SM 大砍以来最大的一次仓位摆动（−23.8k BTC 仍是
              本系列纪录，今天 9.3k 的量级更小，但方向反转更干净）。
              <span className="dn-signal">
                SM net 从 +2.6k BTC 翻到 −6.7k BTC（long 16.74k − short
                23.44k）
              </span>
              ——9.3k 的摆幅、约前净多的 3.6 倍。SM net 在 05-20 13:56Z
              首次跨过零（前一根 +3.4k → −2.6k），到 15:56Z 已扩到 −6.9k；
              long book 从 20.4k 泄到 16.5k，short book 从 17.9k 加到
              23.6k，约 3 小时内完成。
              <span className="dn-em">
                05-20 §VI 写的是「SM net BTC &lt; 0 持续 &gt; 2h」、
                0.3R 规模、止损 1h 收盘 &gt; $77,100、目标 $75,000。
                跨过净空线已持续约 18 小时；隔夜反弹里 1h 收盘 &gt; $77,100
                的止损被触发——今天记成一笔已触发-已止损的交易，不是
                把昨天的计划改掉。
              </span>
              对面散户随反弹降温：
              <span className="dn-tag">56.8% 多</span>，从 59.7 退下来
              ——本系列第一个 session，散户从顶满-多回撤。
            </p>

            <p>
              杠杆侧也指同一方向。funding
              <span className="dn-tag bull">实时塌到 +2.0% 年化</span>
              （24h 均值 +7.1%、区间 +2.0/+10.0%——现 = 24h
              <em>低</em>），从 05-20 的实时 +7.6% 大幅回落——多头
              <span className="dn-em">没</span>在为收回这条线加 carry；
              更像是旧多在让仓位随 carry 自己耗。OI 24h 再
              <span className="dn-tag bear">−2.27%（−2,352 BTC）</span>
              <span className="dn-em">、价格在涨</span>——典型的 rally
              里去杠杆：开仓比平仓少。perp 维持
              <span className="dn-tag bear">−$62 贴水</span>对现货——
              与 05-20 同号，spot 强 / perp 弱。
            </p>

            <p>
              窗口 flow 是现货 bid、futures 走平。4h：价格
              <span className="dn-tag">−0.02%</span>（之前那段已经涨完）、
              OI <span className="dn-tag bear">−579 BTC</span>、spot CVD
              <span className="dn-tag bull">Δ +2,182</span>、futures CVD
              <span className="dn-tag">Δ +535</span>、大单净
              <span className="dn-tag bull">109 笔 +334 BTC</span>。
              1h 同向但小：spot CVD
              <span className="dn-tag bull">Δ +1,088</span>、futures CVD
              <span className="dn-tag">Δ +105</span>、大单
              <span className="dn-tag">36 笔 +70</span>。session 累计
              （UTC 日）spot CVD
              <span className="dn-tag bull">+4,290 BTC</span>、futures CVD
              <span className="dn-tag">+536 BTC</span>、OI
              <span className="dn-tag bear">−871 BTC</span>。
              <span className="dn-em">
                与 05-20 性质完全反过来：昨天是平价上 perp-led 派发；
                今天是涨价上 spot-led 接，下面是 SM 死死压着的净空。
                现货需求能把盘面拉起来，但拉不动仓位结构。
              </span>
            </p>

            <h2 className="dn-sec">
              结构 <span className="dn-roman">II · MTF 图 · 标陈旧</span>
            </h2>

            <p>
              结构战术上改善、序列上翻面。12h
              <span className="dn-signal">回到云带里</span>
              （云 76.6k–79.7k，05-20 还在「云下」）。1d
              <span className="dn-em">没</span>印出 05-20 那个差 1 根
              的 TD9 BUY——Buy 8→9? 没走完就衰竭，日线 TD 现在读
              <span className="dn-tag bear">Sell 1</span>，是一段新的
              顶侧逆势序列的起点。短周期 RSI 升到 40s 高位/50s 低位；
              8h 印出新鲜
              <span className="dn-tag bull">水下金叉 1bar 前</span>
              （DIF 仍水下——早期）；1h 印出
              <span className="dn-tag bear">水上死叉 1bar 前</span>
              （DIF 仍水上——早期看空）。4h 仍带
              <span className="dn-tag bull">BULL reg 背离</span>活跃。
              <span className="dn-em">
                对 05-20 的两处位移：12h 回云带；1d TD9 BUY 衰竭 → Sell 1
                （逆势底部信号没印就反过来，日线开始数顶侧）。两者
                未收盘前都按 provisional。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">77,500</td><td className="num">51.4</td><td className="bear">死叉（水上）9b</td><td className="bull">云上 2b ↓77.3k</td><td>Sell 3</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>30m</td><td className="num">77,500</td><td className="num">52.9</td><td className="bear">死叉（水上）5b</td><td className="bull">云上 40b ↓77.2k</td><td>Sell 2</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>1h</td><td className="num">77,500</td><td className="num">55.3</td><td className="bear">死叉（水上）1b</td><td className="bull">云上 10b ↓77.2k</td><td>Buy 2</td><td>BEAR reg</td></tr>
                <tr><td>4h</td><td className="num">77,504</td><td className="num">48.9</td><td className="bull">金叉（水下）11b</td><td className="bear">云下 33b ↑79.5k</td><td className="bear">Sell 7</td><td className="bull">BULL reg</td></tr>
                <tr><td>8h</td><td className="num">77,500</td><td className="num">43.5</td><td className="bull">金叉（水下）1b</td><td className="bear">云下 15b ↑78.8k</td><td>Sell 5</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">77,500</td><td className="num">42.3</td><td className="neut">—</td><td className="neut">云内 76.6–79.7k</td><td>Sell 3</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">77,500</td><td className="num">47.5</td><td className="bear">死叉（水上）9b</td><td className="bull">云上 35b ↓74.6k</td><td className="hot">Sell 1（TD9 BUY 未印）</td><td>BEAR reg</td></tr>
                <tr><td>3d</td><td className="num">77,504</td><td className="num">52.2</td><td className="neut">—</td><td className="neut">云内 73.5–93.0k</td><td>Buy 3</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">77,504</td><td className="num">46.4</td><td className="bull">金叉（水下）5b</td><td className="bear">云下 16b ↑100.3k</td><td>Buy 1</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">77,500</td><td className="num">49.2</td><td className="neut">—</td><td className="bull">云上 27b ↓46.9k</td><td>Buy 7</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    对 05-20 的位移：12h「云下」→「云内」；1d TD9 BUY
                    （05-20 的 Buy 8→9?）没印出来，日线现读 Sell 1；
                    8h 新印水下金叉 1 根（反弹里的早期看多 flicker）。
                    短周期（15m/30m/1h）都在 1–9 根内印出水上死叉
                    ——反弹顶部回压。1d 云底略上移到 ↓74.6k（05-20 是
                    ↓74.5k）。未收盘前 provisional。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵是今天最具体的改善。现货
              <span className="dn-signal">
                收回了 05-20 失/临界的五条近 MA 里三条
              </span>
              ：
              <span className="dn-tag stale">D-EMA50 $76.8k (+1.07%)</span>
              ——从 −0.03% 翻到 +1.07%（穿了约 $821 上方，落得很实）；
              <span className="dn-tag stale">D-EMA100 $76.9k (+0.95%)</span>
              ——从 −0.19% 翻到 +0.95%；
              <span className="dn-tag stale">D-SMA150 $77.0k (+0.75%)</span>
              ——从 −0.52% 翻到 +0.75%（05-20 那「头顶第一道 reclaim
              测试」今天收回了）。头顶接着：
              <span className="dn-tag bear">W-EMA20 $78.2k (−0.78%)</span>
              到 <span className="dn-tag bear">D-EMA20 $78.4k (−1.02%)</span>
              到 <span className="dn-tag bear">D-SMA20 $79.4k (−2.29%)</span>，
              再到 <span className="dn-tag bear">
                D-SMA200/EMA200 $80.9–81.7k (−4.1 至 −5.0%)
              </span>
              。周期底：
              <span className="dn-tag bull">D-SMA50 $76.2k (+1.85%)</span>
              缓冲，再到
              <span className="dn-tag bull">D-SMA100 $72.4k (+7.14%)</span>
              周期之锚。周线：站上
              <span className="dn-tag bull">W-SMA20 $75.0k (+3.39%)</span>，
              紧贴 <span className="dn-tag bear">W-EMA20 $78.2k
              (−0.78%)</span> 下方；低于 W-EMA50 $85.3k (−9.0%) 与
              W-SMA50 $94.0k (−17.5%)。
              <span className="dn-em">
                所有 MA 锚定 parquet 最末 bar 2026-05-21 00:05Z
                （close $77,588——基本等于现货，anchor 约 3 分钟旧）；
                偏移按现货 $77,588 计算。显示的 MA 水位为 $ 取整；
                偏移按精确序列值计算。
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · GEX + IV</span>
            </h2>

            <p>
              dealer gamma
              <span className="dn-signal">从昨天那个变薄状态重建到压波 regime</span>
              。aggregate GEX
              <span className="dn-tag bull">+87.9M/1%</span>——05-20 +37.4M
              的 2.4 倍，远高于 05-18 +15.9M 的脆弱低点。0-gamma flip
              基本同位
              <span className="dn-tag">$75,693</span>（前 $75,731），
              所以上行的约 $900 全部转化为缓冲：现货 $77,588 现在
              <span className="dn-tag bull">在 flip 上方 +2.5%</span>
              （源文件「Dist to Flip +2.5%」对其 00:01Z Deribit idx
              $77,584 算——两个参考今天到小数第一位完全相同，因为现货 ≈
              idx）。现货下方的负 gamma 台阶都
              <em>变轻</em>：top 负是
              <span className="dn-tag bear">$75k −20.1M</span>（前 −24.5M）、
              <span className="dn-tag bear">$74k −9.4M</span>（前 −13.5M）、
              <span className="dn-tag bear">$76k −8.8M</span>（前 −10.6M）。
              正天花板更重、阶梯式：
              <span className="dn-tag bull">$80k +46.2M</span>（前 +38M，
              现在是承重天花板）、
              <span className="dn-tag bull">$82k +20.1M</span>、
              <span className="dn-tag bull">$78k +17.2M</span>、
              <span className="dn-tag bull">$85k +10.5M</span>。
              <span className="dn-em">
                近月 gamma 与 05-20 反向：21MAY 0DTE 印 +18.9M
                （正——今天压波）、22MAY 2DTE −7.4M（05-20 22MAY 2DTE
                −15.7M，约一半）。今天近月在压波、不在放波。
              </span>
            </p>

            <p>
              直白读：dealer 这一侧
              <span className="dn-signal">
                半反转回 05-19 那种「带缓冲的盘整」regime
              </span>
              。缓冲对 flip +2.5%、负 pocket 都变轻、$80k 墙是接下来
              头顶第一道正阻力、近月正 gamma——单看 dealer，这盘想
              区间内回归。下方负 pocket（−20.1M @75k 仍是真加速器）
              若 flip 失守仍会咬合，但缓冲比近三个 session 任何时候
              都更厚。880 个合约的 IV 中位数 43.0% 对 30D close-to-close
              RV <span className="dn-tag">25.5%</span>——链层面 richness
              约 <span className="dn-tag">+17pt</span>，与 05-20 +18pt
              基本持平；<span className="dn-em">不是</span>可交易的
              spread，IV 是 N 个合约的链中位数。strike/到期 vega、skew
              未载入；vol 读法 framework only。
            </p>

            <h2 className="dn-sec">
              宏观 <span className="dn-roman">IV · 比 05-20 更差 · 承重</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观与价格反向走。
              </span>
              Tier-1 利率三条核心 lane 都进一步推入 EXTREME RISK-OFF。
              US 10Y nominal
              <span className="dn-tag bear">4.67%（对 05-20 +6bp，regime
              +2.96，事件 +2.75）</span>——从 4.61% 上来；10Y TIPS real
              <span className="dn-tag bear">2.18%（+5bp，regime +2.28，
              事件 +3.28）</span>——从 2.13% 上来；5Y5Y BE
              <span className="dn-tag bear">2.32%（+5bp，事件 +1.58）</span>
              ——事件 filter 上新挂。MOVE 债波微回到
              <span className="dn-tag">85.3（−0.75，事件 +2.51）</span>
              ，仍偏高。DXY 不变
              <span className="dn-tag">99.05（事件 +1.53）</span>。
              第三条宏观 lane——credit——出现今天的第一次 regime 标签
              位移：HY OAS
              <span className="dn-tag bear">2.86%（+3bp，regime −0.47，
              事件 +0.47）→ 标签从「loose」翻「neutral」</span>
              ——我们跟踪的 credit holdout 出现第一道裂痕。
              <span className="dn-em">
                05-20 的升级门（HY OAS &gt; 3.0% 收盘 → 尾部转主仓）
                现在大约 14bp 之外，不再是昨天的约 17bp；regime 标签
                往那个方向先走一档、水位没到。Net liquidity 不变
                loose（$5.886T，事件 +2.47）——剩下唯一抵消的宏观 lane。
              </span>
            </p>

            <p>
              跨资产（7d 1h 窗口，summary 00:01Z——不是「今天」一个
              点的读数）。平均 off-diag
              <span className="dn-tag">|r| 0.365</span>（对 05-20 0.339
              上来——相关性 regime 在收紧，仍属 NORMAL 带）。BTC 系
              NVDA <span className="dn-tag">+0.66</span>、NQ
              <span className="dn-tag">+0.60</span>、SP500
              <span className="dn-tag">+0.55</span>、TSLA
              <span className="dn-tag">+0.55</span>。7d 相对表现：BTC
              <span className="dn-tag bear">−2.53%</span>、NQ
              <span className="dn-tag bear">−1.63%</span>、SP500
              <span className="dn-tag bear">−0.93%</span>、NVDA
              <span className="dn-tag bear">−3.33%</span>、TSLA
              <span className="dn-tag bear">−7.57%</span>；金属一侧
              更弱——GOLD <span className="dn-tag bear">−3.40%</span>、
              SILVER <span className="dn-tag bear">−13.97%</span>、PLAT
              <span className="dn-tag bear">−9.44%</span>、PALL
              <span className="dn-tag bear">−8.41%</span>、URNM
              <span className="dn-tag bear">−11.48%</span>。05-20 的
              读数是 BTC −5.21% 对 NQ −0.81%；今天 7d 窗口往前滚 24h，
              BTC 对 NQ 的差距收到 −2.53% 对 −1.63%——是真实的压缩，
              不是 regime 翻转。JGB 月度 2.52%（EXTREME RISK-OFF 月度
              标签——不作依据）。USD/JPY 158.93 不变。
              <span className="dn-em">
                读法：在 7d 滚动窗口内，BTC、股票科技子集、金属一片
                都是下行——BTC 的跌幅小于金属（−2.5% 对 −3.4 至 −14%），
                与跌得更深的股票名（NVDA −3.3%、TSLA −7.6%）大体同档。
                方向锚是已载入 peer set 里的广泛 risk-off；BTC 在这个
                窗口里没有 idiosyncratically 带头或殿后。
              </span>
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · 只写证据撑得住的规模</span>
            </h2>

            <div className="dn-trade">
              <span className="dn-side framework">已记录 · 未执行</span>
              <div className="dn-trade-name">
                SM-preempt-short（05-20 §VI 标准委托）——已合格、从未开仓
              </div>
              <div className="dn-thesis">
                05-20 §VI 条件「SM net BTC &lt; 0 持续 &gt; 2h」定义了
                0.3R 空、止损 1h 收盘 &gt; $77,100、目标 $75,000。SM 在
                05-20 13:56Z 跨过净空（前一根 +3,369 → −2,591）；
                「&gt; 2h 持续」时钟因此约在 05-20 15:56Z 到期，彼时
                SM 为 −6,858、现货约 $77,297。<em>但是</em>止损条件
                （1h 收盘 &gt; $77,100）在合格那一刻就已经成立：14:00
                的 1h 收盘是 $77,361（≥ 77,100），其后到 23:59Z 的每根
                1h 收盘都没跌回 $77,100 之下（$77,250 / 77,430 / 77,457 /
                77,485 / 77,371 / 77,584 / 77,138 / 77,433 / 77,412）。
                标准纪律：止损在入场时已为真，入场不触发。今天明确
                记成「合格但未开仓」、P/L 为 0，既不从账本里抹掉，
                也不当亏损入账。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">合格</span><span className="dn-lvl-v">约 05-20 15:56Z（SM 跨净空持续 &gt; 2h；现货约 $77,297）</span></div>
                <div><span className="dn-lvl-k">止损状态</span><span className="dn-lvl-v bull">合格时已为真（14:00 1h 收盘 $77,361 &gt; $77,100）</span></div>
                <div><span className="dn-lvl-k">处置</span><span className="dn-lvl-v">未开仓（入场即止损-true 的纪律）</span></div>
                <div><span className="dn-lvl-k">P/L</span><span className="dn-lvl-v">0R（未执行）</span></div>
              </div>
              <div className="dn-gating">
                <b>为何披露：</b>合格但没执行的标准委托和已执行的一样
                要披露——沉默就是让作者装作触发从未发生。失效线读对
                了仓位（SM 确实翻空）；触发几何把止损放在入场窗口的
                里面，一旦价格先收回 $77,100，止损就已经成立。教训在
                触发设计（preempt 把止损放在价格前是脆弱的，会被现货
                推的反弹打掉）——见 §VI 的结构确认重武装版本。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">stand-aside · 主仓</span>
              <div className="dn-trade-name">
                区间内空仓——等结构跟仓位对齐再做
              </div>
              <div className="dn-thesis">
                preempt 已触发-已止损之后最干净的立场是：要求结构确认
                再 re-engage。仓位 + 宏观偏空；价格盘面 + dealer 缓冲
                偏多；解法是即时边界两侧的第一根 1h 收盘
                （下方 D-EMA50 $76.8k、上方 $78.2k W-EMA20）。break
                本身就是 entry。funding 压缩、OI 在泄说明两侧都还没堆
                ——解法应该会比较干净。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">立场</span><span className="dn-lvl-v">方向性空仓 · 区间内不加风险</span></div>
                <div><span className="dn-lvl-k">解出带</span><span className="dn-lvl-v">$76.8k (D-EMA50) ↔ $78.2k (W-EMA20)</span></div>
                <div><span className="dn-lvl-k">向下解</span><span className="dn-lvl-v bear">1h 收盘 &lt; $76,750（D-EMA50 重失守）</span></div>
                <div><span className="dn-lvl-k">向上解</span><span className="dn-lvl-v bull">1h 收盘 &gt; $78,200（W-EMA20 出清）</span></div>
              </div>
              <div className="dn-gating">
                <b>为何区间内不做：</b>dealer 缓冲已重建（+87.9M，flip
                上方 +2.5%）；$80k 墙（+46.2M）是头顶下一道；SM 死锁
                空；宏观 fresh 偏空。即时边界对称、再往外走不对称
                （下到 $75.7k flip 约 $1.9k；上到 $80k 墙约 $2.4k）。
                等收盘。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">short · 重武装</span>
              <div className="dn-trade-name">
                D-EMA50 重失守空——结构确认、非 preempt
              </div>
              <div className="dn-thesis">
                替代被止损的 preempt 的结构确认版本。触发要 1h 收盘
                重新跌穿 D-EMA50 $76,750（即重新作废今天这次收回），
                <em>同时</em>SM 仍净空——两个条件覆盖「仓位读对了、
                结构跟上了」这一解。规模比 05-20 的盘整破位短小
                （0.4R 对 0.6R），因为入场不再是带交易在面前的水位
                突破；它是结构重失守、反弹仍在附近可 fade。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">触发</span><span className="dn-lvl-v bear">1h 收盘 &lt; $76,750 + SM net &lt; 0</span></div>
                <div><span className="dn-lvl-k">止损</span><span className="dn-lvl-v bull">1h 收盘 &gt; $78,000（回到 24h-hi 防线上）</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">$76,200 (D-SMA50) / $75,700 (flip) / $75,000 (负 pocket)</span></div>
                <div><span className="dn-lvl-k">规模</span><span className="dn-lvl-v">触发 0.4R；$75,700 下 +0.3R；≤ 0.9R</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R：</b>触发 $76,750，止损 $78,000 = 约 $1,250 风险；
                $76,200 = 约 $550，$75,700 = 约 $1,050，$75,000 = 约
                $1,750 → 到首目标 0.4–1.4:1，偏弱。
                <b>Gating：</b>触发时 SM 必须仍净空（否则仓位侧 thesis
                没了——重评）；若触发前 HY OAS &gt; 3.0% 收盘印出，
                §VI credit 裂开那一行接管、规模放大。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · 今日被作废</span>
              <div className="dn-trade-name">
                Reclaim 多——过滤条件失败、推迟
              </div>
              <div className="dn-thesis">
                05-20 reclaim 多要「1h 收盘 &gt; $77,100 + SM net &gt; 0
                + 宏观停顿」。价格条件满足（已在 $77,100 上方）。SM
                条件硬失败（深度净空 −6.7k）。宏观条件失败（利率
                fresh 更差、HY 往 credit 裂开走了一档）。三条里两条
                倒，交易明确
                <span className="dn-signal">推迟、不是「待条件 pending」</span>
                ——在这里 fade 反弹比追反弹结构上更说得通。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">推迟 · 3 条 filter 倒 2 条</span></div>
                <div><span className="dn-lvl-k">re-eligibility</span><span className="dn-lvl-v bull">SM net &gt; 0 持续 &gt; 4h 且 10Y 回落 &lt; 4.55%</span></div>
                <div><span className="dn-lvl-k">合格时规模</span><span className="dn-lvl-v">0.15R（小于 05-20 的 0.2R；多侧的 stack 更差了）</span></div>
              </div>
              <div className="dn-gating">
                <b>为何推迟不是杀掉：</b>SM 重新翻多 + 利率反向是两个
                可观察的条件，凑齐了会重新打开。今天不能只看价格入场。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">macro tail · 实时对冲</span>
              <div className="dn-trade-name">
                downside put-spread——grow-trigger 维持，HY 走了一档
              </div>
              <div className="dn-thesis">
                05-20 grow-trigger（10Y &gt; 4.55% fresh）仍触发
                （今天 4.67% 持续）。HY OAS 这条腿走了一个 regime
                档位：2.83% → 2.86%（+3bp），regime 标签 loose →
                neutral。3.0% 收盘门约 14bp 之外。结构不变：$74k /
                $70k put、29-MAY-26、示意 0.25R。规模维持——HY 没收盘
                &gt; 3.0%（转主仓）或 10Y 没 &gt; 4.75%（继续加）
                之前不再加。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">结构</span><span className="dn-lvl-v">long $74k / short $70k put</span></div>
                <div><span className="dn-lvl-k">到期</span><span className="dn-lvl-v">29-MAY-26（8d）— 正 GEX 到期（+29.6M）</span></div>
                <div><span className="dn-lvl-k">grow-trigger（维持）</span><span className="dn-lvl-v bear">10Y &gt; 4.55% fresh ✓（今天 4.67%）</span></div>
                <div><span className="dn-lvl-k">HY OAS 状态</span><span className="dn-lvl-v bear">2.86% · regime「neutral」（前「loose」）· 距门 14bp</span></div>
                <div><span className="dn-lvl-k">规模（维持）</span><span className="dn-lvl-v">0.25R · 与 05-20 同 · 加仓条件见下</span></div>
                <div><span className="dn-lvl-k">下一档</span><span className="dn-lvl-v bear">HY OAS &gt; 3.0% 收盘 → 主仓；或 10Y &gt; 4.75% 收盘 → +0.1R</span></div>
              </div>
              <div className="dn-gating">
                <b>说明：</b>strike/premium/Greeks 未载入——结构示意，
                规模待 Deribit 29-MAY chain 拉取。HY regime 标签一档
                位移是真但小的升级；没有水位或 10Y 继续走的配合，
                不要因单档标签位移就加 size。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 结构必须跟上</span>
            </h2>

            <p>
              今天的计分板 2-2 分裂：仓位 + 宏观说空、结构 + dealer
              说接。价格盘面跟着第二对走；仓位交易等第一对兑现。
              book 是<em>有条件</em>偏空——条件是结构跟上、不再
              preempt：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>结构跟上仓位（主向下解）</td><td className="bear">1h 收盘 &lt; $76,750（D-EMA50 重失守）+ SM 仍净空</td><td>D-EMA50 重失守空 0.4R，$75,700 下 +0.3R</td></tr>
                <tr><td>盘面出清头顶（仓位必须让）</td><td className="bull">1h 收盘 &gt; $78,200（W-EMA20 清）</td><td>砍所有偏空 setup；reclaim 多在 SM 与利率过滤通过前继续推迟</td></tr>
                <tr><td>SM 重新翻净多（仓位 piece 没了）</td><td className="bull">SM net BTC &gt; 0 持续 &gt; 4h</td><td>退掉 D-EMA50 重失守空，按 SM + 利率两条重评 reclaim 多</td></tr>
                <tr><td>credit 裂开（尾部 → 主仓）</td><td className="bear">HY OAS &gt; 3.0% 收盘</td><td>尾部升级为主仓 0.5R；0.4R 重武装空触发时翻倍到 0.8R</td></tr>
                <tr><td>利率继续走（尾部加 size）</td><td className="bear">10Y &gt; 4.75% 收盘</td><td>尾部 +0.1R 到 0.35R；不立即在股票侧动作</td></tr>
                <tr><td>周期中段破（升级）</td><td className="bear">1d 收盘跌破云 $74.6k</td><td>持空 runner，砍所有多，尾部最大</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>这</em>份备忘的一行是：
              <span className="dn-signal">
                SM net 在 &gt; 4h 持续窗口内重新翻正
              </span>
              且价格守住今天的反弹——那把仓位 piece 抽走、让结构-bid
              做主、重新打开被推迟的 reclaim 多。反方向：结构在 $76,750
              跟上仓位、SM 仍锁空，book 不需要先靠宏观尾部触发就保持
              偏空。被止损的 preempt 是那条教训：失效线读对了仓位；
              区间内入场没付——因为现货推的盘面把空 carry 过去之前，
              结构还没来得及确认。重武装版本等结构。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计追踪 · v2（已过 codex 敌对式审计 · 修复 3 处 blocker）
            </span>
            <b>Codex CLI 0.132.0（gpt-5.5、xhigh reasoning）今天敌对式
            审计跑通——05-20 的 stdin/TTY 环境阻已解（empty-stdin
            管道）。</b>3 处 HIGH、0 CRITICAL，中英双版均已修：
            (a) <b>HIGH</b> ——SM-preempt-short 交易块的时间不一致
            （入场写「~14Z」实际触发约 15:56Z），「隔夜止损」P/L
            叙述无据（从 14:00Z 起每根 1h 收盘都已 &gt; $77,100 止损，
            合格时止损已为真）；改写为<em>合格但未开仓</em>
            （按 stop-true-at-entry 纪律）、P/L 0R，并把 1h 收盘
            序列原文引出。(b) <b>HIGH</b> ——lead 写「本系列最大的
            一次仓位摆动」错（05-17 已记录 SM 24h Δ −23.8k BTC，
            大于今天的 9.3k）；改为「自 05-17 以来最大」并加幅度
            qualifier（今天更小、但方向反转更干净）。(c) <b>HIGH</b>
            ——跨资产段把 7d 窗口数据当「今天」讲，且说 BTC 在
            「带股票向上 / 带金属跑输」，两条都无 loaded 数据支撑；
            改写为只写 7d 窗口的相对表现，呈现 BTC + 股票科技 + 金属
            一致 risk-off，BTC 跌幅小于金属、与跌得更深的股票名
            同档。(d) <b>LOW</b> ——存档页 <code>src/app/desk/page.tsx</code>
            写「仅英文发布」，与本次同时新增 ZH 镜像矛盾；改为引用
            /zh/desk 的<em>中文镜像</em>（中文存档对称引用 /desk）。
            审计放行：funding × 1095、SM net 算术、GEX flip 双参考、
            MA 矩阵对现货偏移、requireViewer gating（两条路径首句）、
            metadata/robots、index <code>&lt;li&gt;</code> 新增、
            中英定量平价。<b>Build 说明（INFO）：</b>本服务器跑 Node
            18.19.1；Next 16.2.6 在 Node &lt; 20.9.0 硬退出，完整
            <code>next build</code> 因环境受阻。<code>npx --no-install tsc
            --noEmit</code>退出 0（TypeScript 干净），作为可用的 build
            替代证据。原始审计记录：audits/2026-05-21-desk-note.md。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是 Hysteresis Research 内部交易台讨论材料，
            <em>非投资建议、非要约、非任何形式招揽</em>
            ，未对任何收件方个人情况定制。所有数字反映同一原子快照
            （2026-05-21 00:08Z），各节出处见上方数据来源区；宏观今日
            已刷新、承重、且比 05-20 更差。水位、规模与条件用于说明
            本台流程，不构成持续建议。过往的相关性、gamma 与仓位
            模式不约束未来盘口。衍生品有全损风险；杠杆条件下损失可能
            超过保证金。<em>请自行做研究。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                失效线读对了、入场早了——交易在结构开始说和仓位
                十八小时一样的话时重新武装。
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
            v2 · 2026-05-21 00:08Z · 数据源：live_db.json · mtf_div_latest.html ·
            btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
