import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-05-20 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-05-20',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-05-20' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260520() {
  await requireViewer('/zh/desk/2026-05-20');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HR · BTC · 交易台备忘 · 2026-05-20 · v2</span>
          <span>内部 · 仅供讨论 · 部分审计（codex 环境受阻）</span>
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
              <span className="dn-big">$76,682</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.1%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-05-20 02:34Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-05-20 02:34Z</td>
                  <td className="dn-flag">最新 · 1 分钟</td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 02:31Z scan</td>
                  <td className="dn-flag">最新 · 含未收盘 K 线</td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 02:34Z 快照</td>
                  <td className="dn-flag">最新 · Deribit idx $76,744 对现货 $76,682</td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 02:01Z
                  </td>
                  <td className="dn-flag">滞后约 33 分钟 · 1h bar · 22 资产</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-05-19 22:17Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 4h · FRED Tier-1 已刷新（无 stale-4d）·
                    今天承重
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-05-20 00:06Z</td>
                  <td className="dn-flag">
                    陈旧约 2.5h · 偏移已对现货重算
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
              <span className="dn-v bear">+7.6%</span>
              <span className="dn-src">live · 02:34Z · 24h 均值 +5.5%</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">+6.1% → +7.6%</span>
              <span className="dn-src">攀升 · 区间 +2.8/+7.6%（现 = 高）</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−1.49% (−1,560 BTC)</span>
              <span className="dn-src">live · 去杠杆持续</span>
            </div>
            <div>
              <span className="dn-k">Binance mkt long/short</span>
              <span className="dn-v bear">59.7 / 40.3</span>
              <span className="dn-src">live_db `mkt_long_pct` · 序列 54.8→56.4→58.1→59.7</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">+2.6k（净多）</span>
              <span className="dn-src">live · long 20.45k − short 17.84k</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 05-19 备忘</span>
              <span className="dn-v">+2.9k → +2.6k</span>
              <span className="dn-src">基本不变 · 无 regime flip</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">43.4% / 25.4%</span>
              <span className="dn-src">GEX IV 中位数 · RV 压缩 27→25.4</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bear">−1.2%</span>
              <span className="dn-src">flip $75,731 对现货 · 源文件 +1.3% 对 idx</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              05-19 那篇把利率上行标在一份陈旧 4 日的渲染上，作为
              <em>watch、不是 lean</em>。FRED Tier-1 series 现在已刷新，
              那个 spike 是真的<span className="dn-em">——</span>
              <span className="dn-signal">
                US 10Y 印 4.61% fresh，事件 z = +2.67（EXTREME RISK-OFF）
              </span>
              ，TIPS real 2.13% 事件 +3.38，MOVE 债波 86.1 仍偏高。我们
              写进 05-19 尾部对冲的 grow-trigger（10Y &gt; 4.55% confirmed）
              已实时触发。盘整第 3 天守住水位、但倾斜进一步定型：funding
              24h 内攀升 +50%、OI 再泄 1.5k BTC、4h 大单
              <span className="dn-tag bear">−2,894 BTC</span> 的 futures 派发、
              retail 拥挤到 59.7% 多——加上宏观从场外加入做空一边，
              positioning + structure + dealer + macro 四股力全压在同一侧，
              聪明钱是唯一还没翻的那一侧。
            </p>

            <p>
              BTC 现报 <span className="dn-tag">$76,682</span>，盘整第 3 天
              （<span className="dn-tag">−0.1% 24h</span>），24h 区间收窄
              到 <span className="dn-tag">$76.1k–$77.3k</span>，比 05-19 的
              $76.0k–$77.8k 又紧了。现货
              <span className="dn-signal">已滑到防线下方一点</span>：
              <span className="dn-tag stale">D-EMA50 $76.7k (−0.03%)</span>
              与 <span className="dn-tag stale">D-EMA100 $76.8k (−0.19%)</span>
              ——05-19 还压在上方的两条 EMA，今天都贴在头顶之上，是盘整
              里第一个方向性 tell。上方接着是
              <span className="dn-tag stale">D-SMA150 $77.1k (−0.52%)</span>
              的 reclaim 测试；下方是
              <span className="dn-tag bull">D-SMA50 $76.0k (+0.93%)</span>
              再到挪了位的
              <span className="dn-tag bear">GEX-flip $75,731 (−1.2%)</span>
              ，进入 <span className="dn-tag bear">$75k −24.5M GEX</span>
              pocket。问题与 05-19 一致<span className="dn-em">——</span>
              <span className="dn-signal">
                盘整往哪个方向解
              </span>
              ——但向下一侧的证据厚度今天明显加重了。
            </p>

            <h2 className="dn-sec">
              仓位结构 <span className="dn-roman">I · 实时盘面</span>
            </h2>

            <p>
              方向性空之所以还没就位，唯一的结构性理由是
              <span className="dn-signal">聪明钱仍未重新翻净空</span>。
              top-trader net 是 <span className="dn-tag">+2.6k BTC</span>
              （long 20.45k − short 17.84k），与 05-19 备忘的 +2.9k 基本
              不变。
              <span className="dn-em">
                24h 前截点字面读数是 −1.3k（long 19.26k − short 20.57k），
                所以光看「24h-Δ SM」会显示 +3.9k 的摆动——但那个 24h-ago
                时间戳刚好落在 05-19 早上一段日内净空 dip 上，几小时内
                就完全恢复了。对照 05-19 备忘快照本身，SM 是平的。读法
                是「保持小幅净多、无 regime change」，不是新的多头加码
                conviction。
              </span>
              对面，散户加到 <span className="dn-tag bear">59.7% 多</span>
              ——连续第四个 session 更拥挤（54.8 → 56.4 → 58.1 → 59.7）。
            </p>

            <p>
              盘口其余一切偏下。funding 落在 24h 区间的上沿：实时
              <span className="dn-tag bear">+7.6% 年化</span>
              （24h 均值 +5.5%，区间 +2.8% 到 +7.6%——<em>现 = 高</em>），
              <span className="dn-tag bear">比 05-19 的 +5.1% 高 +50%</span>
              ——拥挤多在为一个三个 session 哪都没去的仓位多付不少 carry。
              OI 24h <span className="dn-tag bear">−1.49%（−1,560 BTC）</span>
              <span className="dn-em">——平价上去杠杆继续；有人扛 funding
              留场，有人在认输出场</span>。perp 维持
              <span className="dn-tag bear">−$72 贴水</span>对现货——与
              05-19 同量，spot 强 / perp 弱的稳定结构。
            </p>

            <p>
              窗口 flow 才是今天的真新闻。4h 价格
              <span className="dn-tag">−0.12%</span>（走平）、OI
              <span className="dn-tag bear">−856 BTC</span>（多在平）、
              spot CVD <span className="dn-tag">Δ −192</span>（安静），
              但 futures CVD
              <span className="dn-tag bear">Δ −2,806</span>、大单净
              <span className="dn-tag bear">116 笔 −2,894 BTC</span>
              <span className="dn-em">——平价上重 futures 派发</span>。
              1h 一样：futures CVD
              <span className="dn-tag bear">Δ −1,633</span>、大单
              <span className="dn-tag bear">35 笔 −1,604</span>。本 session
              累计 perp CVD <span className="dn-tag bear">−3,742 BTC</span>，
              cb_cvd 约平。
              <span className="dn-em">
                卖压性质从 05-18 的 spot-led 转成今天的 perp-led——
                另一批带杠杆的卖方现在在场，且在向盘整里压。
              </span>
            </p>

            <h2 className="dn-sec">
              结构 <span className="dn-roman">II · MTF 图 · 标陈旧</span>
            </h2>

            <p>
              结构往下挪了一档，没破。12h
              <span className="dn-signal">刚跌穿云带</span>
              （「刚穿」→ 76.6k 头顶）——又一个周期翻空；1d 还差 1 根就
              <span className="dn-tag bull">TD9 BUY（Buy 8→9?）</span>，
              一个逆势反转提示马上要在日线印出，反对在洗盘里加仓做空。
              RSI 在 4h/8h/12h 守 30s/40s、引擎日内 40s——没有投降、
              没有推力。多个水下金叉（1h/4h/1w）是早期看多 flicker；
              多个 BULL regular 背离（1h/4h）支持筑底——同时慢周期标深度
              下行（1d BEAR reg、12h TD9 BUY 活跃）。
              <span className="dn-em">
                与 05-19 同一幅画，两处具体位移：12h 掉出云带；1d TD9 BUY
                只差 1 根——下根日线收盘就会喊「衰竭」。在收盘之前
                都按 provisional。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">76,619</td><td className="num">44.9</td><td className="bear">死叉（水下）刚印</td><td className="bear">云下 ↑76.7k（刚穿）</td><td>Sell 2</td><td>BEAR hid · BEAR reg · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">76,620</td><td className="num">45.7</td><td className="bear">死叉（水下）5b</td><td className="bear">云下 ↑76.8k</td><td>Buy 1</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>1h</td><td className="num">76,633</td><td className="num">45.2</td><td className="bull">金叉（水下）9b</td><td className="bear">云下 ↑76.9k</td><td>Buy 3</td><td className="bull">BEAR hid · BEAR reg · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">76,633</td><td className="num">38.2</td><td className="bull">金叉（水下）5b</td><td className="bear">云下 ↑80.3k</td><td>Buy 2</td><td className="bull">BULL reg</td></tr>
                <tr><td>8h</td><td className="num">76,619</td><td className="num">36.1</td><td className="neut">—</td><td className="bear">云下 ↑78.8k</td><td>Buy 1</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">76,619</td><td className="num">35.8</td><td className="bear">死叉（水上）18b</td><td className="bear">云下 ↑76.6k（刚穿）</td><td className="hot">⚡ TD9 BUY</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">76,619</td><td className="num">43.9</td><td className="bear">死叉（水上）8b</td><td className="bull">云上 ↓74.5k</td><td className="hot">Buy 8→9?</td><td>BEAR reg</td></tr>
                <tr><td>3d</td><td className="num">76,619</td><td className="num">50.6</td><td className="neut">—</td><td className="neut">云内 73.5–93.0k</td><td>Buy 3</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">76,619</td><td className="num">45.5</td><td className="bull">金叉（水下）5b</td><td className="bear">云下 ↑100.3k</td><td>Buy 1</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">76,619</td><td className="num">48.8</td><td className="neut">—</td><td className="bull">云上 ↓46.9k</td><td>Buy 7</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    对 05-19 的位移：12h 掉出云带；1d TD9 BUY 差 1 根。
                    1d 仍云上（↓74.5k，05-19 是 ↓74.3k）；周期中段完整
                    但在松。多周期 TD9 BUY 堆叠（8h carry、12h 活跃、
                    1d 待印）= 逆势压力在累，未收盘前 provisional。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵精确标定方向性 tell。现货
              <span className="dn-signal">已滑到周期 EMA 防线之下</span>：
              <span className="dn-tag stale">D-EMA50 $76.7k (−0.03%)</span>
              ——从 05-19 的 +0.14% 翻到今天的 −0.03%（价格穿了约 $20）；
              <span className="dn-tag stale">D-EMA100 $76.8k (−0.19%)</span>
              ——从 −0.02% 走到 −0.19%（现在低约 $148，昨天是 $15）。
              防线还没有<span className="dn-em">决定性</span>失守
              ——这都是分数级偏移、任一 4h 收盘都可能 reclaim——但盘整内部
              的偏向已经倾下来。上方已丢：
              <span className="dn-tag bear">D-SMA20 $79.4k (−3.42%)</span>、
              <span className="dn-tag bear">D-EMA20 $78.4k (−2.18%)</span>；
              头顶第一道 reclaim 测试是
              <span className="dn-tag stale">D-SMA150 $77.1k (−0.52%)</span>。
              SMA 周期梯队仍为正但在侵蚀：
              <span className="dn-tag bull">D-SMA50 $76.0k (+0.93%)</span>
              ——现货下方的缓冲——与
              <span className="dn-tag bull">D-SMA100 $72.3k (+6.03%)</span>
              这个周期之锚正主。远阻
              <span className="dn-tag stale">
                D-SMA200/EMA200 $81.1–81.7k (−5.4% 至 −6.1%)
              </span>
              。周线：站上
              <span className="dn-tag bull">W-SMA20 $75.0k (+2.24%)</span>，
              低于 W-EMA20 $78.1k / W-EMA50 $85.2k / W-SMA50 $94.0k。
              <span className="dn-em">
                所有 MA 锚定 parquet 最末 bar 2026-05-20 00:06Z
                （收盘 $76,729）；偏移已对现货 $76,682 重算。
                显示的 MA 水位为 $ 取整；偏移按精确序列值计算。
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · GEX + IV</span>
            </h2>

            <p>
              dealer gamma <span className="dn-signal">已往 05-18 的放波
              regime 方向倒退</span>。aggregate GEX
              <span className="dn-tag">+37.4M/1%</span>——比 05-19 的 +65.7M
              收缩，刚好略高于 05-18 的 +15.9M；盘整中段建起来的缓冲已
              被侵蚀。0-gamma flip 上移到
              <span className="dn-tag bear">$75,731</span>；现货 $76,682
              在它<span className="dn-tag bear">上方约 1.2%</span>
              （GEX 源文件「+1.3% dist to flip」是对其 02:34Z Deribit-index
              $76,744 算的——两者一致：现货在 flip 上方约 1.2–1.3%，
              比 05-19 的约 1.9% 缓冲更薄，接近 05-18 的 0.9% 脆弱区间）。
              一个新的负 gamma 台阶贴到现货上：
              <span className="dn-tag bear">$76k −10.6M</span>
              （05-19 不在前 10），下方是重 pocket
              <span className="dn-tag bear">$75k −24.5M</span> 与
              <span className="dn-tag bear">$74k −13.5M</span>，压在
              正天花板下（<span className="dn-tag bull">$80k +38M</span>、
              <span className="dn-tag bull">$82k +21.7M</span>、
              <span className="dn-tag bull">$81k +7.9M</span>）。
              <span className="dn-em">
                22MAY 2DTE 印 −15.7M（一个可观的近月负值回到板上），
                0DTE 20MAY −3.6M。近月又是 short gamma 状态——周中往下
                走会被放大。
              </span>
            </p>

            <p>
              直白读：05-19 还在论证「盘整带缓冲」的 dealer 降级，今天
              已经半反转。缓冲 +1.2%、现货处负 gamma 台阶、近月 short
              gamma——不如 05-18 那么脆，但也不再是昨天那种压波结构。
              <span className="dn-signal">跌穿 $75.7k flip，重新咬合
              −24.5M @75k 加速器，且 dealer 阻力比 05-19 暗示的弱</span>。
              878 个合约的 IV 中位数
              <span className="dn-tag">43.4%</span> 对 30D close-to-close
              RV <span className="dn-tag">25.4%</span>（从 27.0% 进一步
              压缩）——链层面 richness 扩大到
              <span className="dn-tag">约 +18pt</span>，
              <span className="dn-em">不是</span>会往重新短 gamma 的近月里
              卖的 spread。按 strike/到期的 IV、vega、skew 未载入；
              vol 读法 framework only。
            </p>

            <h2 className="dn-sec">
              宏观 <span className="dn-roman">IV · 已刷新 · 承重</span>
            </h2>

            <p>
              <span className="dn-signal">
                05-19 的宏观尾部 watch 已实时触发。
              </span>{' '}
              FRED Tier-1 series 已刷新（日级行上不再有 stale-4d 标记；
              渲染本身约 4h 旧，但数值不旧）。US 10Y 现印
              <span className="dn-tag bear">4.61%（+2bp，regime +2.59，
              事件 +2.67）→ EXTREME RISK-OFF</span>；10Y TIPS real
              <span className="dn-tag bear">2.13%（+3bp，事件 +3.38）→
              RISK-OFF</span>；MOVE 债波
              <span className="dn-tag">86.1（事件 +2.77）</span>仍偏高。
              我们写进 05-19 宏观尾部的 grow-trigger（「fresh 10Y &gt;
              4.55% confirmed」）已达成——尾部从带陈旧数据 caveat 的
              结构性保险，升级为带宏观确认的对冲。
              <span className="dn-em">
                剩下唯一的 holdout：HY OAS 印 2.83%（比 05-19 的 2.80%
                走阔 +3bp，regime −0.67，事件 −0.20）——仍挂「loose」，
                但开始走阔。credit 是利率驱动的 risk-off 和 cascade 之间
                唯一站着的东西；今天看到 HY 第一个 3bp 走阔。3.0–3.2%
                的收盘触发线，比 05-19「未佐证」的读数距离已显著缩短。
              </span>
            </p>

            <p>
              跨资产佐证 BTC idiosyncratic 弱。相关性 regime NORMAL，
              平均 |r| <span className="dn-tag">0.339</span>（对 05-19
              的 0.331 基本平）；BTC 系 NVDA
              <span className="dn-tag">+0.60</span>、NQ
              <span className="dn-tag">+0.58</span>、SP500
              <span className="dn-tag">+0.52</span>。7d 内 BTC 印
              <span className="dn-tag bear">−5.21%</span> 对 NQ
              <span className="dn-tag">−0.81%</span>——BTC 仍是一个
              微跌为主的 TradFi peer set 里唯一的高 β 下行落后者。
              JGB 月度 2.52%（EXTREME RISK-OFF 月度标签——不作依据）。
              USD/JPY 158.93（regime +1.20）、DXY 99.05（事件 +1.53
              tight）。Net liquidity 不变 $5.886T（loose，事件 +2.47）
              <span className="dn-em">
                ——收紧的实际利率与宽松的净流动性之间的对峙，今天向
                收紧侧倾斜。
              </span>
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · 只写证据撑得住的规模</span>
            </h2>

            <div className="dn-trade">
              <span className="dn-side framework">stand-aside · 主仓</span>
              <div className="dn-trade-name">
                盘整里空仓——conviction 上升，区间内无 edge
              </div>
              <div className="dn-thesis">
                延续 05-19 立场：等盘整以收盘解。变化的是向下解的
                conviction——宏观 fresh 且偏空、funding +50%、OI 泄、
                4h 重 futures 派发、dealer 缓冲倒退、retail 近 60% 多、
                12h 掉出云带。唯一没预先押空的结构性理由是 SM 还没
                重新翻净空。一旦它翻——或一旦收盘印——其它整桌都已在
                这一侧。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">立场</span><span className="dn-lvl-v">方向性空仓 · 区间内不加风险</span></div>
                <div><span className="dn-lvl-k">盘整带</span><span className="dn-lvl-v">$75.7k (flip) ↔ $77.1k (D-SMA150)</span></div>
                <div><span className="dn-lvl-k">向下解</span><span className="dn-lvl-v bear">1h 收盘 &lt; $75,700</span></div>
                <div><span className="dn-lvl-k">向上解</span><span className="dn-lvl-v bull">1h 收盘 &gt; $77,100 + SM 仍净多</span></div>
              </div>
              <div className="dn-gating">
                <b>为何区间内仍「什么都不做」：</b>dealer 缓冲变薄但仍
                为正（+37M），且短周期 TD9 BUY 在堆（8h carry、12h 活、
                1d 待印），反对在压缩里追空。break 本身就是 entry。
                证据厚度奖励等待，不奖励预先押。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">short · 主触发</span>
              <div className="dn-trade-name">
                盘整破位空——flip + D-SMA50 / 现宏观确认
              </div>
              <div className="dn-thesis">
                触发几何与 05-19 一致，差别是宏观这一侧今天加进来了。
                收盘跌穿 $75,700，一动同时破 flip + D-SMA50，咬合
                −24.5M @75k pocket（dealer 翻 short gamma），又骑在一段
                fresh 偏空的利率盘上。conviction 比 05-19 在同一水位
                明显更高。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">触发</span><span className="dn-lvl-v bear">1h 收盘 &lt; $75,700（flip + D-SMA50）</span></div>
                <div><span className="dn-lvl-k">止损</span><span className="dn-lvl-v bull">1h 收盘 &gt; $76,900（回到防线上）</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">$75,000 / $74,000 / $72.3k D-SMA100 watch</span></div>
                <div><span className="dn-lvl-k">规模</span><span className="dn-lvl-v">触发 0.6R（较 05-19 +0.1R）；$74k 下 +0.4R；≤ 1.0R</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R：</b>触发 $75,700，止损 $76,900 = 约 $1,200 风险；
                $75,000 = 约 $700，$74,000 = 约 $1,700 ≈ 到首目标 0.6–1.4:1
                ——偏弱，所以规模封顶、延伸是 $72.3k 周期梯队破开的情形。
                宏观确认值这 +0.1R 的加码。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · 条件式 · 小</span>
              <div className="dn-trade-name">
                Reclaim 多——D-SMA150 + SM 多 + 宏观停顿三条都要
              </div>
              <div className="dn-thesis">
                宏观 fresh 且偏空，reclaim 多更难做了。它仍存在，
                但需要价格 reclaim <em>加上</em>宏观停顿信号
                （例如 HY OAS 停止走阔、或 10Y 回落）。没有它，
                这就不是方向性多、而是 fade-the-bounce setup。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">触发</span><span className="dn-lvl-v bull">1h 收盘 &gt; $77,100 + SM net &gt; 0 + 宏观停顿</span></div>
                <div><span className="dn-lvl-k">止损</span><span className="dn-lvl-v bear">1h 收盘 &lt; $76,400</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">$78,100 (W-EMA20) / $78,400 (D-EMA20)</span></div>
                <div><span className="dn-lvl-k">规模</span><span className="dn-lvl-v">0.2R（05-19 是 0.3R）· $78,100 减半</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R：</b>触发 $77,100，止损 $76,400 = 约 $700 风险，
                目标 $78,100–78,400 = 约 $1,000–1,300 ≈ 1.4–1.9:1。
                <b>Gating：</b>与盘整破位空互斥；需要 SM net 仍为正
                <em>且</em>新的宏观停顿信号——任一缺失即跳过；
                任何不带这些的反弹按可 fade 处理。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">macro tail · 实时对冲</span>
              <div className="dn-trade-name">
                downside put-spread——grow-trigger 已触发
              </div>
              <div className="dn-thesis">
                05-19 的 grow-trigger（「fresh 10Y &gt; 4.55% confirmed」）
                已触发：10Y 4.61% fresh，EXTREME RISK-OFF。宏观尾部从
                结构性保险升级为带确认的实时对冲。HY OAS 那条腿仍待
                （2.83%，+3bp，但仍「loose」）；一旦 HY 收盘上穿约 3.0%，
                这就不再是尾部——而是主仓。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">结构</span><span className="dn-lvl-v">long $74k / short $70k put</span></div>
                <div><span className="dn-lvl-k">到期</span><span className="dn-lvl-v">29-MAY-26（9d）— 正 GEX 到期</span></div>
                <div><span className="dn-lvl-k">grow-trigger（已触发）</span><span className="dn-lvl-v bear">10Y &gt; 4.55% fresh ✓（4.61% confirmed）</span></div>
                <div><span className="dn-lvl-k">规模（示意）</span><span className="dn-lvl-v">0.25R · 从 0.15R 增加（+67%）· 最终待 chain</span></div>
                <div><span className="dn-lvl-k">下一档</span><span className="dn-lvl-v bear">HY OAS &gt; 3.0% 收盘 → 升级为主仓</span></div>
              </div>
              <div className="dn-gating">
                <b>说明：</b>strike/premium/Greeks 未载入——结构示意，
                规模待 Deribit 29-MAY chain 拉取。0.15R → 0.25R 反映
                grow-trigger 触发；HY-OAS 升级门是下一道要盯的阈值。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 盘整解出</span>
            </h2>

            <p>
              四股压力（positioning · structure · dealer · macro）全部
              偏下；只剩 SM 未过界。水位不变，conviction 上升：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>盘整向下破（倾斜，现宏观确认）</td><td className="bear">1h 收盘 &lt; $75,700</td><td>盘整破位空 0.6R，$74k 下加仓</td></tr>
                <tr><td>盘整向上破 + SM 多 + 宏观停顿</td><td className="bull">1h 收盘 &gt; $77,100，SM &gt; 0，HY/10Y 回落</td><td>reclaim 多 0.2R，$78.1k 减半</td></tr>
                <tr><td>SM 重新翻净空（不必等 break）</td><td className="bear">SM net BTC &lt; 0 持续 &gt; 2h</td><td>开 0.3R 空 · 止损 1h 收盘 &gt; $77,100 · 目标 $75,000</td></tr>
                <tr><td>credit 裂开（尾部 → 主仓）</td><td className="bear">HY OAS &gt; 3.0% 收盘</td><td>尾部升级为主仓，不管区间内价格</td></tr>
                <tr><td>周期中段破（升级）</td><td className="bear">1d 收盘跌破云 $74.5k</td><td>持空 runner，砍多，尾部最大</td></tr>
              </tbody>
            </table>

            <p>
              能改写整份备忘的那一行是：
              <span className="dn-signal">
                聪明钱重新翻净空
              </span>
              且价格仍钉在防线上——四股压力全部对齐，无需等 $75.7k 破，
              空的入场往上挪约 $1k。反方向：SM 维持多 + 宏观盘面松开，
              会重新打开 reclaim 多。在那之前，book 偏空、区间内空仓，
              宏观尾部已是实时对冲、随 HY 确认升级。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计追踪 · v2（部分 · codex 环境受阻 2026-05-20）
            </span>
            <b>仅部分审计——非标准的跨模型门。</b>
            codex CLI 0.125.0 这次进入了交互式 stdin（非 TTY 环境），
            退出码 144，未产出任何发现；这是环境问题，不是模型问题。
            作为 fallback，运行了一次单模型自查（claude-sonnet-4-6，
            对照标准敌对式 attack list），抓到 3 项，中英双版均已修：
            (a) <b>MED</b> ——trade-book 宏观尾部写「从 0.15R 加倍」
            实际是 0.15→0.25R（+67%，不是真正翻倍）；改为
            「从 0.15R 增加（+67%）」。(b) <b>MED</b> ——§VI 开头写
            「四股压力中的三股」与 lead 的「全部四股压上来」矛盾
            （今日 thesis：宏观加入），改为「四股全部偏下」。
            (c) <b>LOW</b> ——§VI 的「SM preempt-short」条件未显式
            止损 / 目标，已补（止损 1h 收盘 &gt; $77,100，目标 $75,000）。
            审计放行（仅单模型，<b>非</b>跨模型）：funding × 1095、
            SM 算术与 day-over-day-vs-24h-Δ 调和、GEX flip 双参考、
            MA 偏移、宏观陈旧 → 承重的翻转、§VI/trade-book 一致性、
            中英平价、requireViewer gating、build。
            <b>已知缺口：</b>desk-note 惯例要求跨模型审计，今日 ship
            是单模型。等 codex CLI stdin/TTY 不再受阻后，重跑同一
            prompt、调和任何新发现，再升级为真正的 v2。原始审计
            记录：audits/2026-05-20-desk-note.md。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是 Hysteresis Research 内部交易台讨论材料，
            <em>非投资建议、非要约、非任何形式招揽</em>
            ，未对任何收件方个人情况定制。所有数字反映同一原子快照
            （2026-05-20 02:34Z），各节出处见上方数据来源区；宏观今日
            已刷新、承重（带渲染滞后 caveat）。水位、规模与条件用于
            说明本台流程，不构成持续建议。过往的相关性、gamma 与仓位
            模式不约束未来盘口。衍生品有全损风险；杠杆条件下损失可能
            超过保证金。<em>请自行做研究。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                三股力在压、一股力在守——交易是看那最后一股做什么，
                不是看已经压上来的三股。
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
            v2 · 2026-05-20 02:34Z · 数据源：live_db.json · mtf_div_latest.html ·
            btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
