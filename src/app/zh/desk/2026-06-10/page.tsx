import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-06-10 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-06-10',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-06-10' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260610() {
  await requireViewer('/zh/desk/2026-06-10');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-06-10 · v2</span>
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
              <span className="dn-big">$61,840</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−1.97%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-06-10 00:05Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-06-10 00:05Z（snapshot pin）</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · 审计时文件 tail = pin · live `t`
                    字段是 BJ-local（UTC+8）、所以 00:05Z 锚行是
                    `06-10 08:05`；此快照落在 09JUN 08:00Z 期权结算后
                    16h05m、距 10JUN 08:00Z 结算前约 7h55m
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-10 00:01Z scan</td>
                  <td className="dn-flag">
                    滚动 latest 文件（约每 15 分钟重写）· 较快照锚滞后约 4
                    分钟 · 含未收盘 K 线 · <em>未存档：精确的 00:01Z 扫描态
                    不可复原（滚动源在审计期间已推进到 00:31Z）、所引数值
                    只对最近的滚动态核对</em>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-10 00:02Z 快照</td>
                  <td className="dn-flag">
                    pre-settle · 较快照锚滞后约 3 分钟 · Deribit idx $61,928
                    对 live $61,840 · 958 合约（06-09 是 946、+12）· 10JUN
                    0.3DTE −11.53M 今日 08:00Z 结算（约 8h 后）· 除 10JUN 后
                    aggregate ≈ −47.07M 仍净负（取 dashboard 总额的捷径；
                    分项行不可加 —— 见盘口本子节）· btc_gex.html 保留在
                    00:02Z mtime、<em>不是带时间戳的存档</em>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-10 00:01Z
                  </td>
                  <td className="dn-flag">滞后约 4 分钟 · 7d 1h bar · 22 资产 · 167 rows · regime 翻 IDIOSYNCRATIC → NORMAL</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-09 22:16Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1h49m · FRED Tier-1 长端走硬（10Y +1bp 到
                    4.56%、TIPS +2bp 到 2.21%、两根都 EXTREME RISK-OFF
                    regime z）· HY OAS −1bp 到 2.75%（距 2.78% 闸 3bp）·
                    DXY 走软 −0.17 到 99.88 · Fed 净流动性 −0.038T 到 $5.834T
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵 + 200W 地板</td>
                  <td className="dn-v-cell">btcusdt_1m parquet · 全历史 + 2024–2026 子集</td>
                  <td className="dn-flag">
                    偏移按 live 现货重算 · 子集 MA 阶梯取自 2024–2026 窗
                    （台规）· 200W 地板读自全历史 parquet（W-MON resample、
                    354 根周 bar）· 子集 W-SMA150 / W-SMA200 不可计算（129
                    根子集周 bar）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED 月度 · IRLTLT01JPM156N</td>
                  <td className="dn-flag">陈旧 69d · 月度 · 不作实时</td>
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
              <span className="dn-v">+0.35%</span>
              <span className="dn-src">live · 快照 +0.352% ann（正 / 近平）· 24h 均值 ann +0.93%（06-09 是 +1.46%、松 −0.53pt 但仍正）· 封顶占用 0 / 1441 采样行（连续第 6 根封顶空快照）· 负分钟占比 35.53%（512 / 1441、较 06-09 的 28.11% 硬 +7.42pt）· 24h 谷 −4.730% ann @ BJ 12:33 06-09 / UTC 04:33 06-09 · 24h 峰 +5.712% ann @ BJ 03:05 06-10 / UTC 19:05 06-09</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v">快照 −1.81% → +0.35%（+2.16pt）· 均值 +1.46% → +0.93%（−0.53pt）</span>
              <span className="dn-src">区间 −4.73% / +5.71% ann · 最长负付链 371 min / 6.18h（BJ 08:05→14:15 06-09 / UTC 00:05→06:15 06-09）—— 数值上 RE-CLEAR 了 ≥4h 空付 leg-2 闸、但这条链落在早窗、且 funding 进快照已翻正（+0.35%）· 最长正付链 554 min / 9.23h（BJ 22:52 06-09 → 08:05 06-10）跑进快照</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">+0.76%（+745 BTC）</span>
              <span className="dn-src">live · OI 扩张（06-09 是 −0.36% 缩的反面）—— 本子在抛压里重新上杠杆 · base 98,510（08:04 基线）→ 99,255 · 24h 峰 100,391 @ UTC 17:06 06-09、谷 97,245 @ UTC 04:43 06-09 · SM long Δ −779、short Δ +1,961</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bear">67.36 / 32.64</span>
              <span className="dn-src">live_db `mkt_long_pct` · 较 06-09 的 64.71 再拥挤 +2.65pt（破位里抄底）· 24h 区间 64.61 / 69.04 · 峰 69.04 @ UTC 17:22 06-09、谷 64.61 @ UTC 00:27 06-09</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−41.4k（净 SHORT · 空加 + 多减、06-09 的反面）</span>
              <span className="dn-src">live · long 13.67k − short 55.06k · short 峰 55,589 @ UTC 16:51 06-09（24h 现货低后 10 分钟）、short 谷 50,698 @ UTC 11:16 06-09 · long 峰 14,460 @ UTC 06:56 06-09、long 谷 12,171 @ UTC 12:45 06-09 · net 谷（最空）−41,801 @ UTC 16:51 06-09、net 峰（最不空）−37,016 @ UTC 11:16 06-09</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 06-09 备忘</span>
              <span className="dn-v bear">−38.7k → −41.4k（−2,740 更空）</span>
              <span className="dn-src">long −779、short +1,961 · |Δ| / prior_net = 7.09%（2,740 / 38,658）· 本子精确翻回 06-09 的反面形：上一篇一日回补之后又加空、减多</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">48.2% / 39.60%</span>
              <span className="dn-src">GEX IV 中位数横跨 958 合约（06-09 是 946、+12）· IV/RV 价差 +8.60pt · 30D close-to-close RV 39.60%（30 returns / 31 closes；29-return 替代读 40.24%）</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bear">−2.76%（在下方）</span>
              <span className="dn-src">flip $63,592（前 $64,351、随抛压走 DOWN −$759）· 对 live 现货 $61,839.99（61,839.99 / 63,592 − 1 = −2.7551%）/ GEX 文件 idx $61,928（−2.62%；61,928 / 63,592 − 1 = −2.6167%）—— 两参考都负、现货在 flip 下方 · aggregate GEX −58.6M（前 −36.7M、加深 −$21.9M 负 γ）· 文件自报 dist-to-flip −2.6%</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                06-09 那根看多的 200W 重夺、一天之内就还回去了——看守窗
                重开
              </span>
              。现货印
              <span className="dn-tag bear">−1.97% 到 $61,840</span>、插针到
              24h 低 <span className="dn-tag bear">$60,755</span> 跌穿 200
              周地板、06-09 日收
              <span className="dn-tag bear">$61,695</span> 坐在它下方。全历史
              W-MON 200 周 SMA 是
              <span className="dn-tag">$62,019</span>（截至 06-08 的 200 根
              收盘 bar）；live 现货
              <span className="dn-tag bear">−0.29% / −$179 在下方</span>、
              未收盘的周 bar（截至 06-15）印
              <span className="dn-tag bear">$61,820 = −0.32% / −$199 在 200W
              下方</span>。昨日备忘在 06-08 周收 $63,058（+1.68% 上方）把
              地板判成看多；那个判定现在被推翻。dealer 本子顺着这一动加深：
              aggregate GEX <span className="dn-tag bear">−36.7M → −58.6M</span>
              （一根 $21.9M 的负 γ 重堆）、0-γ flip 走
              <span className="dn-tag bear">$64,351 → $63,592（−$759）</span>、
              现货在它下方 −2.76%、$60k 崩盘 put 墙加深
              <span className="dn-tag bear">−34.00M → −47.86M（−$13.86M、
              连续第 2 次重装）</span>。近端 strip 全负：10JUN −11.53M 今日
              08:00Z 结算、11JUN −15.23M、12JUN −17.94M。仓位本子翻回 06-09
              的反面形 —— SM
              <span className="dn-tag bear">加空、减多</span>（−2,740 更空、
              |Δ|/prior 7.09%）、OI
              <span className="dn-tag bear">扩张 +745 BTC</span> 进破位、
              retail 再拥挤到
              <span className="dn-tag bear">67.36% 多（+2.65pt、抄底）</span>。
              跨资产翻 IDIOSYNCRATIC → NORMAL（均值 |r| 0.232 → 0.287）、
              一道广谱相关的 risk-off —— BTC 7d −7.77%、
              <span className="dn-tag bear">几乎全线下行</span>（白银 −13.74%、
              铀 −16.41%、铂 −11.52%；小例外 GOOGL +0.04%、JPY +0.29%）。
              本篇标定 200W 再破位：交易本子从 06-09 的回补读法、转回重开的
              地板看守、mean-revert 多 scout 仍不可动作、宏观尾的 re-grow
              闸往远走了 1bp、距第二根触发腿 3bp。
            </p>

            <p>
              现货报 <span className="dn-tag">$61,840</span> live、
              <span className="dn-tag bear">−1.97%</span> 在 24h、落在一条
              <span className="dn-tag">$63,499.9 / $60,755.0</span> 区间里
              （高 @ BJ 13:35 / UTC 05:35 06-09、低 @ BJ 00:41 / UTC 16:41
              06-09 —— 24h 前现货在 08:04 基线是 $63,084）。
              <span className="dn-signal">改写上一篇的那一个事实就是 200W
              地板</span>：W-MON 全历史 200 周 SMA 是
              <span className="dn-tag">$62,019</span>、live 现货
              <span className="dn-tag bear">−0.29% 在下方（$61,840）</span>、
              06-09 日收 $61,695 收在它下方、未收盘的 06-15 周 bar 印
              $61,820 —— 也在下方。把看守判成看多的 06-08 周收 $63,058
              现在成了历史、在 +1.68% 上方。按收盘频率读：只有
              <span className="dn-tag">8 / 154 根周收（5.19%）</span> 曾收在
              自己当期的 200W 下方 —— 一个低基率位置、盘面又在测试它。
              <span className="dn-em">
                200W 是本篇的承重线：一根 06-15 周收重回 $62,019 上方、就
                在唯一对周期读法要紧的那条时间框上守住地板；一根收在下方、
                就确认当前 post-06-08 地板看守谱系里首根收在 200W 下方的
                周线（上一根全历史自破 200W 周收是 2023-10-09）。
              </span>{' '}
              日收谱系直接讲出这次回吐：06-07 $63,298、06-08 $63,058、06-09
              $61,695、06-10 未收盘 $61,820 —— 06-08 重夺之后连两根日收
              丢掉地板。
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面 · 本子翻回空加 + 多减（06-09 反面）· OI 进破位扩张 · retail 再拥挤 · funding leg-2 数值重过但陈旧</span>
            </h2>

            <p>
              <span className="dn-signal">
                仓位本子翻回 06-09 回补的精确反面
              </span>
              。SM net 是
              <span className="dn-tag bear">−41,398</span>、对 06-09 备忘的
              −38,658 —— 也就是
              <span className="dn-em">−2,740 更空</span>
              （|−41,398 − (−38,658)| / 38,658 = 7.09%）。分量：long_btc
              <span className="dn-tag bear">14.45k → 13.67k（−779）</span>、
              short_btc <span className="dn-tag bear">53.10k → 55.06k
              （+1,961）</span> —— 一根加空伴随减多、是 06-09 那根「加多、
              切空」印的镜像。Short_btc 在 24h 现货低后 10 分钟见峰：
              <span className="dn-tag bear">55,589 @ 2026-06-09 16:51Z</span>
              —— $60,755 那根 wick 之后 10 分钟 —— 此后边际泄进快照。SM net
              谷（最空）
              <span className="dn-tag bear">−41,801 @ 2026-06-09 16:51Z</span>
              与那根 short 峰重合；net 峰（最不空）−37,016 @ UTC 11:16 06-09。
              long_btc 谷
              <span className="dn-tag bear">12,171 @ 2026-06-09 12:45Z</span>、
              long 峰 14,460 @ UTC 06:56 06-09。本子卖了破位：smart money
              把空头压进低点、没把它补回去。
            </p>

            <p>
              <span className="dn-signal">
                OI 进抛压扩张 —— 本子重上杠杆、不是去 gross
              </span>
              。OI Δ
              <span className="dn-tag bear">+745 BTC / +0.76%</span> 跨 24h
              （base 98,510 在 08:04 基线 → 99,255）、是 06-09 那根 −0.36%
              缩的反面；24h 峰 100,391 @ UTC 17:06 06-09、谷 97,245 @ UTC
              04:43 06-09。retail
              <span className="dn-tag bear">mkt_long_pct 67.36%</span> 从
              64.71% —— 一根 +2.65pt 的进破位再拥挤（24h 区间 64.61 / 69.04、
              峰 69.04 @ UTC 17:22 06-09）。杠杆读法是
              <span className="dn-em">新空对抗抄底多</span>：OI 上、SM 加空、
              retail 进破位加多 —— 拥挤的多侧正是接专业空头那一边。funding
              是唯一缓和的印：快照
              <span className="dn-tag">+0.35% ann</span>（正 / 近平）、24h
              均值 ann <span className="dn-tag">+0.93%</span>（对 06-09 的
              +1.46%、−0.53pt）、封顶占用
              <span className="dn-tag">0 / 1441（连续第 6 根封顶空）</span>、
              负分钟占比 <span className="dn-tag">35.53%（512 / 1441）</span>
              硬 +7.42pt。最长负付链是
              <span className="dn-tag">371 min / 6.18h（BJ 08:05→14:15
              06-09 / UTC 00:05→06:15 06-09）</span>、数值上 RE-CLEAR 了
              mean-revert scout 的 ≥4h 空付 leg-2 闸 ——
              <span className="dn-em">但这条链落在早窗、且 funding 进快照已
              翻正（+0.35%）、所以这次重过是陈旧、弱的、不是一个 live 的空
              付条件</span>。最长正付链（554 min / 9.23h、BJ 22:52 06-09 →
              08:05 06-10）才是跑进快照的那一根。
            </p>

            <p>
              窗口流向<em>在 24h 上偏重、期货领着卖、进最后一小时摊平</em>。
              24h：价格
              <span className="dn-tag bear">−1.97%</span>、OI
              <span className="dn-tag bear">+745 BTC</span>、现货 CVD
              <span className="dn-tag bear">Δ −218</span>、期货 CVD
              <span className="dn-tag bear">Δ −2,243</span>、大单
              <span className="dn-tag bear">−1,342 BTC / 502 笔</span>、
              taker-net <span className="dn-tag bear">−2,243</span>
              <span className="dn-em">（futCVD 与 taker-net 按构造恒等 ——
              futCVD 是累计 taker-net —— 所以这是一个读、不是两个）</span>；
              24h 内无 cb_cvd reset。
              <span className="dn-em">
                价格下 + OI 上 + 期货 CVD 领负、是新空签名 —— 这根下行是被
                卖出来的、不是被补出来的。
              </span>{' '}
              4h（进快照）：价格
              <span className="dn-tag bear">−0.26%</span>、OI
              <span className="dn-tag bull">−410 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +299</span>、期货 CVD
              <span className="dn-tag bear">Δ −971</span>、大单
              <span className="dn-tag bear">−24 BTC / 69 笔</span>、
              taker-net <span className="dn-tag bear">−971</span> ——
              <em>现货买、对着仍在卖的期货盘、OI 开始下来、一道试探性的
              basis 领的企稳</em>。1h：价格
              <span className="dn-tag bull">+0.09%</span>、OI
              <span className="dn-tag">+34 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +55</span>、期货 CVD
              <span className="dn-tag bear">Δ −69</span>、大单
              <span className="dn-tag bull">+39 BTC / 11 笔</span>、
              taker-net <span className="dn-tag bear">−69</span> ——
              <em>安静最后一小时、平到略上</em>。perp 在快照对现货
              <span className="dn-tag bear">−$52.96 折价</span>（1h 均
              −$45.44、4h 均 −$47.00、24h 均 −$40.88、区间 −$132.68 /
              +$96.09 —— basis 在 24h 内短暂翻升水）。1 分钟 aggressor skew
              快照 <span className="dn-tag bull">+17.6</span>（1h 均 +3.58、
              区间 −34.90 / +26.90）—— 一档温和买攻倾斜进快照、是现货反射
              买盘对抗期货领卖的第一丝。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 图 · RSI 重新翻下（12h 27.2、1d 24.2 最深）· 3d ⚡ TD9 BUY active、4h/1M pending · 慢周期全在云下 · 净读卖反弹</span>
            </h2>

            <p>
              <span className="dn-signal">
                回吐印出时、RSI 横跨慢周期重新翻下
              </span>
              。12h 重回 30 下方
              <span className="dn-tag bear">27.2</span>、1d 是最深超卖
              <span className="dn-tag bear">24.2</span>、8h 在 34.0、3d 在
              31.4 —— 随现货丢地板、全部较 06-09 流低。引擎周期不好转：4h
              RSI 42.4、1h 39.4（回到中位线下方）。Ichimoku 图一致沉重：从
              30m 起每一根都
              <span className="dn-tag bear">在云下</span> —— 30m 云下
              ↑63.0k、1h 云下 ↑62.3k、4h 云下 ↑63.8k、8h 云下 ↑73.6k、1d
              云下 ↑73.9k —— 只有 15m 还
              <span className="dn-tag">在云内 61.6k–62.1k</span> 抠着、1M 在
              周期框上仍 <span className="dn-tag bull">在 ↓46.9k 上方</span>。
              TD 在慢端是混合-建设性：
              <span className="dn-tag bull">3d 带 active ⚡ TD9 BUY</span>、
              4h（Buy 8 → 9?）与 1M（Buy 8 → 9?）等一根 9 计 —— 一个 TD9-BUY
              簇正在周期框上成形、哪怕动量在流。
              <span className="dn-em">
                {' '}直读：慢周期超卖、3d TD9 BUY live、但每一根盘中框都在
                云下、净背离读是卖反弹。这是一个超卖盘面、落在一个已确认的
                破位里 —— TD 簇是 mean-revert scout 的看守、不是结构性转向。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">61,696</td><td className="num">45.2</td><td className="bear">死叉（水下）7b</td><td className="neut">云内 61.6–62.1k 6b</td><td>Buy 1</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">61,696</td><td className="num">41.7</td><td className="bull">金叉（水下）11b</td><td className="bear">云下 ↑63.0k 26b</td><td>Buy 7</td><td>BEAR hid · BULL hid</td></tr>
                <tr><td>1h</td><td className="num">61,696</td><td className="num">39.4</td><td className="bear">死叉（水上）31b</td><td className="bear">云下 ↑62.3k 10b</td><td>Buy 3</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>4h</td><td className="num">61,703</td><td className="num">42.4</td><td className="bull">金叉（水下）23b</td><td className="bear">云下 ↑63.8k 91b</td><td>Buy 8 → 9?</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>8h</td><td className="num">61,703</td><td className="num bull">34.0</td><td className="bull">金叉（水下）8b</td><td className="bear">云下 ↑73.6k 75b</td><td>Buy 4</td><td>BEAR hid</td></tr>
                <tr><td>12h</td><td className="num">61,703</td><td className="num bull">27.2</td><td className="bull">金叉（水下）3b</td><td className="bear">云下 ↑76.0k 37b</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">61,696</td><td className="num bull">24.2</td><td className="neut">—</td><td className="bear">云下 ↑73.9k 9b</td><td>Sell 2</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>3d</td><td className="num">61,696</td><td className="num bull">31.4</td><td className="neut">死叉（水上）5b</td><td className="bear">云下 ↑74.2k 3b</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">61,696</td><td className="num bull">33.2</td><td className="neut">—</td><td className="bear">云下 ↑100.3k 19b</td><td>Buy 4</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">61,696</td><td className="num">42.0</td><td className="neut">—（DIF 在水上）</td><td className="bull">云上 ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 00:01Z scan（滚动 latest
                    文件；精确的 00:01Z 扫描<em>未存档 / 不可复原</em> ——
                    源在扫描后已推进、只对最近的滚动态核对）。头部告警：
                    <em>3d ⚡ TD9 BUY active</em>、<em>4h / 1M TD Buy 8 → 9?
                    pending</em>、净背离读 <em>卖反弹</em>。扫描现货 $61,696、
                    24h −2.15%（00:01Z 扫描；live-tape 头部 00:05Z 在同一
                    24h 窗读 −1.97% —— 4 分钟时间差导致 0.18pt 偏差）、24h
                    H/L $63,500 / $60,755、qVol $13.75B。收盘为未收盘 K 线；
                    每个值在各周期收盘前都按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵在日线阶梯上一致头顶 —— 日线上一根正偏移都不剩。现货
              $61,840 坐在每一根日线 MA 下方：最近头顶是
              <span className="dn-tag bear">D-EMA20 $67,953（−9.00%）</span>、
              再 <span className="dn-tag bear">D-SMA20 $69,461（−10.97%）</span>、
              <span className="dn-tag bear">D-EMA50 $72,015（−14.13%）</span>、
              <span className="dn-tag bear">D-SMA100 $72,854（−15.12%、
              周期锚）</span>、
              <span className="dn-tag bear">D-EMA100 $74,201（−16.66%）</span>、
              <span className="dn-tag bear">D-SMA150 $74,333（−16.81%）</span>、
              <span className="dn-tag bear">D-EMA150 $76,805（−19.48%）</span>、
              <span className="dn-tag bear">D-SMA50 $75,024（−17.57%）</span>、
              <span className="dn-tag bear">D-SMA200 $78,125（−20.84%）</span>、
              <span className="dn-tag bear">D-EMA200 $79,390（−22.11%）</span>。
              周期锚 D-SMA100 现在头顶 −15.12% —— 五月底那种「锚上方消化」
              早没了。子集周阶梯一样头顶：W-SMA20 $72,016（−14.13%）、
              W-EMA20 $75,201（−17.77%）、W-EMA100 $82,657（−25.18%）、
              W-EMA50 $83,332（−25.79%）、W-SMA100 $88,517（−30.14%）、
              W-SMA50 $91,783（−32.62%）；子集 W-EMA150 $78,074（−20.79%
              种子）、W-EMA200 $73,750（−16.15% 种子）；子集 W-SMA150 /
              W-SMA200 在 129 根子集周 bar 上不可计算。
              <span className="dn-signal">
                本篇的结构线是全历史 200W 地板
              </span>
              ：全历史 W-MON 200 周 SMA
              <span className="dn-tag">$62,019</span>（截至 06-08 的 200 根
              收盘 bar）、live 现货
              <span className="dn-tag bear">−0.29% / −$179 在下方</span>、
              未收盘的 06-15 周 bar 1 分钟收
              <span className="dn-tag bear">$61,820（−0.32% / −$199 在下方）</span>、
              上一根收盘周（06-08）$63,058 现在成历史、在 +1.68% 上方。
              周收-收于自身 200W 下方频率 8 / 154 = 5.19%。
              <span className="dn-em">
                MA 锚自 btcusdt_1m parquet（子集阶梯取 2024–2026 窗、台规；
                200W 取全历史 W-MON resample、354 根周 bar）；偏移按 live
                现货 $61,839.99 重算（parquet 锚行 ≤00:05Z 收 $61,819.90、
                差 $20.09）。日收：06-07 $63,298、06-08 $63,058、06-09
                $61,695、06-10（未收盘）$61,820 —— 06-08 重夺之后连两根收在
                200W 下方。30D RV 39.60%。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子加深净空 γ aggregate −58.6M · flip 走 DOWN 到 $63,592（现货 −2.76% 下方）· $60k 崩盘 put 重深到 −47.86M · 10JUN −11.53M 约 8h 后结算</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子把空 γ 加深进破位、不是退出破位
              </span>
              。aggregate GEX 是
              <span className="dn-tag bear">−58.6M</span>（06-09 是 −36.7M
              —— 一根 $21.9M 的负 γ 重堆）；本子更失稳、不是更稳。0-γ flip
              走
              <span className="dn-tag bear">$64,351 → $63,592（−$759）</span>、
              现货 $61,840 在现货口径上坐在
              <span className="dn-tag bear">flip 下方 −2.76%</span>
              （61,839.99 / 63,592 − 1 = −2.7551%）；GEX 文件自己的
              「dist to flip」给 −2.6%、对它的 Deribit idx $61,928（比 live
              现货高 $88）算
              <span className="dn-tag bear">−2.62%</span>（61,928 / 63,592 −
              1 = −2.6167%）—— 两参考都负、现货在 flip 下方、
              <span className="dn-em">落在 dealer 空 γ 区里、对冲放大下行</span>。
              墙图被 $60k 崩盘 put 主导：
              <span className="dn-tag bear">$60k −47.86M</span>（从 −34.00M
              加深、连续第 2 次重装 −$13.86M）、
              <span className="dn-tag bear">$62k −10.04M</span>、
              <span className="dn-tag bull">$80k +9.15M</span>（top 10 里唯一
              正墙）、
              <span className="dn-tag bear">$55k −9.12M</span>、
              <span className="dn-tag bear">$61k −8.74M</span>、
              <span className="dn-tag bear">$61.5k −6.57M</span>、
              <span className="dn-tag bear">$50k −6.38M</span>、
              <span className="dn-tag bear">$58k −5.60M</span>、
              <span className="dn-tag bear">$60.5k −4.97M</span>、
              <span className="dn-tag bear">$64k −4.30M</span>。
              <span className="dn-em">
                $60k strike 现在是结构性磁铁：一根 −47.86M 的 put 墙、在
                现货下方三个 handle、意味着 dealer 对冲会加速向 $60k 的移动、
                24h 低 $60,755 已经蹭到它的边。
              </span>{' '}
              按 expiry、近端 strip 一致负：
              <span className="dn-tag bear">10JUN 0.3 −11.53M</span> 今日
              08:00Z 结算（约 8h 后）、
              <span className="dn-tag bear">11JUN 1.3 −15.23M</span>、
              <span className="dn-tag bear">12JUN 2.3 −17.94M</span>、13JUN
              3.3 +1.09M、19JUN 9.3 −5.99M、
              <span className="dn-tag bear">26JUN 16.3 −25.49M</span>（月度、
              最重）、31JUL 51.3 +4.02M、28AUG 79.3 +1.07M、25SEP 107.3
              −0.13M、25DEC 198.3 +2.39M、26MAR27 289.3 +0.33M。10JUN 结算后、
              除 10JUN 的 aggregate 大约是 −58.6M − (−11.53M) = −47.07M、
              仍深度净负。
              <span className="dn-em">
                注意：这个 aggregate 捷径取的是 dashboard 总额（−58.6M）；
                上面显示的分项 expiry 行加总是 −67.41M（除 10JUN 是
                −55.88M），所以分项清单与 dashboard 总额内部不可加、差约
                8.81M —— 以 −58.6M 这个 dashboard 总额为准、不要从分项行
                清单去重构 aggregate。
              </span>{' '}
              <span className="dn-em">
                10JUN −11.53M 这块今日 08:00Z 结算是第一个日历事件：它清掉
                一块负、但它后面的 strip（11JUN、12JUN、26JUN）让本子继续
                空 γ —— 放大器不随这次结算下来。
              </span>
            </p>

            <p>
              IV 中位数横跨 958 合约是
              <span className="dn-tag">48.2%</span>（06-09 是 946、+12 合约）
              对 30D close-to-close RV
              <span className="dn-tag">39.60%</span> —— 链级 richness
              <span className="dn-tag">+8.60pt</span>。是 N 合约的链中位数、
              <span className="dn-em">不是</span>可交易价差；expiry- /
              strike-level vega、skew、期限结构仍未载入、vol 读法保持
              framework only。RV 方法：30D close-to-close、logret.std × √365
              × 100、用最末 30 根日 log return（= 连续 31 根日收）、锚自
              parquet 最末 bar；最末 29-returns / 30-closes 替代读 40.24%、
              页面值 39.60% 来自 30 returns。IV 48.2% 对 realized 39.60% 是
              一道温和溢价 —— vol 被买、但不在恐慌、与一个受控破位一致、
              不是清算。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · Tier-1 长端走硬（10Y 4.56%、TIPS 2.21%、两根 EXTREME RISK-OFF）· reclaim-long 利率筛（10Y &lt; 4.55%）现 BROKEN · HY OAS 2.75% 距 re-grow 闸 3bp · 跨资产翻 NORMAL on 广谱 risk-off</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观面在 BTC 破位里长端走硬 —— 利率与实际利率都对着风险动
              </span>
              。面板渲染 2026-06-09 22:16Z、比快照早约 1h49m。US 10Y nominal
              <span className="dn-tag bear">4.56%（+1.0bp）</span>、regime z
              <span className="dn-tag bear">+2.14</span>、偶发 z
              <span className="dn-tag bear">+1.07</span> —— EXTREME RISK-OFF、
              且 reclaim-long 利率筛（10Y &lt; 4.55%）现在
              <span className="dn-tag bear">在 4.56% BROKEN</span>（06-09 是
              在边界上）。10Y TIPS real
              <span className="dn-tag bear">2.21%（+2.0bp）</span>、regime z
              <span className="dn-tag bear">+2.56</span>、偶发 z
              <span className="dn-tag bear">+1.75</span> —— EXTREME RISK-OFF。
              5Y5Y BE 通胀 <span className="dn-tag">2.23%（−1.0bp）</span>、z
              −0.04 / −1.34。HY OAS
              <span className="dn-tag bull">2.75%（−1.0bp）</span>、regime z
              <span className="dn-tag bull">−1.06</span>、偶发 z
              <span className="dn-tag bull">−0.48</span> —— 仍 risk-on、但现在
              <span className="dn-em">距 2.78% re-grow 闸 3bp</span>（06-09 是
              2bp —— 缺口反而 WIDEN 了 1bp：HY OAS 收 −1bp、从闸边退开了、
              所以只有 10Y 腿朝触发走）。MOVE 债波
              <span className="dn-tag">77.0（+1.78）</span> —— 中性、略硬。
              抵消侧：DXY
              <span className="dn-tag bull">99.88（−0.17）</span>、regime z
              +1.55、偶发 z +1.60 —— 较 06-09 的 100.15 软 −0.27；Fed 净
              流动性 <span className="dn-tag bear">$5.834T（−0.038T）</span>、
              偶发 z −2.29。USD/JPY
              <span className="dn-tag">160.22（−0.10）</span>、z +1.34 /
              +1.31；US-JP 10Y 利差
              <span className="dn-tag">2.04%（+1.0bp）</span>、z −0.60 /
              +1.07、紧；USD/CNY 6.7717（+0.01）、z −1.77 / −1.09；10Y
              breakeven 2.35%（−1.0bp）、z +0.20 / −1.81。
              <span className="dn-em">
                净：长端在 BTC 破位里走硬、reclaim-long 利率筛破了（10Y
                4.56% &gt; 4.55%）、HY OAS re-grow 闸距触发 3bp —— 宏观背景
                对着风险收紧了、但 put-spread re-grow 的第二腿仍需要一根
                HY OAS 印 &gt; 2.78%（差 3bp、本次还退开了 1bp）。DXY 走软
                是唯一抵消线、它还没转成 BTC 的买盘。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>宏观指标</th>
                  <th>水位</th>
                  <th>Δ</th>
                  <th>regime z</th>
                  <th>偶发 z</th>
                  <th>读</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>US 10Y nominal</td><td className="num">4.56%</td><td className="num bear">+1.0bp</td><td className="num bear">+2.14</td><td className="num bear">+1.07</td><td className="bear">EXTREME RISK-OFF · 筛 BROKEN</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.21%</td><td className="num bear">+2.0bp</td><td className="num bear">+2.56</td><td className="num bear">+1.75</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.23%</td><td className="num bull">−1.0bp</td><td className="num">−0.04</td><td className="num">−1.34</td><td className="neut">无标</td></tr>
                <tr><td>HY OAS</td><td className="num">2.75%</td><td className="num bull">−1.0bp</td><td className="num bull">−1.06</td><td className="num bull">−0.48</td><td className="bull">risk-on · 距 2.78% 闸 3bp（退开 1bp）</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.494</td><td className="num">+0.01</td><td className="num">—</td><td className="num">—</td><td className="stale">陈旧 11d</td></tr>
                <tr><td>MOVE 债波</td><td className="num">77.0</td><td className="num bear">+1.78</td><td className="num">—</td><td className="num">—</td><td className="neut">中性 · 略硬</td></tr>
                <tr><td>DXY</td><td className="num">99.88</td><td className="num bull">−0.17</td><td className="num bear">+1.55</td><td className="num bear">+1.60</td><td className="bull">更软 −0.27 · RISK-OFF 偶发</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.834T</td><td className="num bear">−0.038T</td><td className="num">−0.12</td><td className="num bear">−2.29</td><td className="bear">本周抽干</td></tr>
                <tr><td>USD/JPY</td><td className="num">160.22</td><td className="num bull">−0.10</td><td className="num bear">+1.34</td><td className="num">+1.31</td><td className="neut">日元边际更硬</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">2.04%</td><td className="num bear">+1.0bp</td><td className="num">−0.60</td><td className="num">+1.07</td><td className="neut">紧</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7717</td><td className="num">+0.01</td><td className="num bull">−1.77</td><td className="num bull">−1.09</td><td className="bull">无标 · 松</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">+17.0bp（月度）</td><td className="num">—</td><td className="num">—</td><td className="stale">陈旧 69d · 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、汇总 00:01Z ——
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。
              非对角线均值 <span className="dn-tag">|r| 0.287</span>
              <span className="dn-signal">翻 IDIOSYNCRATIC → NORMAL</span>
              （06-09 是 0.232、重新越过 0.25 阈值、+0.055）—— 一道广谱
              相关的 risk-off、是昨天那种「只在 crypto 内生」读法的反面。
              BTC 的头部对齐走硬、重排：TSLA
              <span className="dn-tag">+0.344</span>（新头部、原是 SILVER）、
              SILVER <span className="dn-tag">+0.331</span>、COPPER
              <span className="dn-tag">+0.306</span>、URNM
              <span className="dn-tag">+0.305</span>、SP500
              <span className="dn-tag">+0.293</span>、NVDA
              <span className="dn-tag">+0.285</span>、MSFT
              <span className="dn-tag">+0.283</span>、NQ
              <span className="dn-tag">+0.278</span>、GOLD
              <span className="dn-tag">+0.265</span>、META / PLAT
              <span className="dn-tag">+0.251</span>、AMZN
              <span className="dn-tag">+0.246</span>。7d 相对表现是一道
              risk-off 横扫：
              <span className="dn-tag bear">BTC −7.77%</span>、NQ
              <span className="dn-tag bear">−5.30%</span>、SP500
              <span className="dn-tag bear">−3.19%</span>、JP225 −5.60%、
              NVDA −6.60%、META −2.23%、AAPL −7.50%、MSFT −7.25%、GOOGL
              +0.04%、AMZN −5.03%、TSLA −5.83%。金属被打得最狠：SILVER
              <span className="dn-tag bear">−13.74%</span>、PLAT
              <span className="dn-tag bear">−11.52%</span>、PALL
              <span className="dn-tag bear">−11.15%</span>、URNM
              <span className="dn-tag bear">−16.41%</span>、GOLD −5.91%、
              COPPER −4.75%。能源：CL −6.54%、BRENT −5.29%、NGAS −0.14%。
              <span className="dn-em">
                BTC −7.77% vs NQ −5.30% 是 −2.47pt 的落后、但两根都负、且
                相关性硬回 NORMAL 区段 —— 这是 BTC 参与一道广谱相关的
                risk-off、不是一个 crypto 内生事件。06-09 那种内生于 crypto
                的读法让位：200W 破位印在一个全市场去风险里、利率走硬、
                金属崩。
              </span>{' '}
              JGB 月度 2.52% 陈旧 69d —— 不依赖。
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · 200W 周期地板看守 RE-OPEN（主）· mean-revert 多 scout 不可动作（leg-2 重过但陈旧、leg-3 更远）· 宏观尾 re-grow 闸距第二腿 3bp · 挤压周期 hostile-2 看守名单 · 台子空仓、无新入场</span>
            </h2>

            <p>
              <span className="dn-signal">
                台子空仓、交易本子重新围着 200W 再破位
              </span>
              。06-09 备忘没带 live 仓（flip-extend 空已平、cover-bounce
              scout 已撤）；进这根快照没开任何仓。06-08 那个看多的 200W
              判定一天就反转、所以地板看守重开为主框架。dealer 本子在
              $63,592 flip 下方空 γ、带一根 −47.86M 的 $60k 崩盘 put 磁铁、
              OI 在新空上扩张、宏观面对着风险走硬 —— 结构性背景是看空-放大、
              不是企稳。但慢周期超卖（12h RSI 27.2、1d 24.2）、3d ⚡ TD9 BUY
              live、funding 近平偏正 —— 一个被拉伸、不在投降的盘面。
              <em>不在 $60,755 蹭过的低位、对着一根 −47.86M 的 put 磁铁、
              在台子会与 dealer 一起卖的地方加新空；在 200W 以周收口径重夺、
              或 scout 各腿干净填满之前、不加新多。</em>等 06-15 周收和
              10JUN 结算把地板解出来、再上规模。
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 主仓 · 200W 周期地板看守 RE-OPEN · 06-08 的看多判定一天反转</span>
              <div className="dn-trade-name">
                200W 周期地板看守 —— 重开：现货 −0.29% 在 $62,019 下方、06-09 日收 $61,695 在下方、未收盘 06-15 周 bar $61,820 在下方
              </div>
              <div className="dn-thesis">
                06-08 周收 $63,058（在 200W $62,019 上方 +1.68%）把这根看守
                判成看多；06-09 的盘面全数还回去。现货 −1.97% 到 $61,840、
                插针到 24h 低 $60,755（地板下方）、06-09 日收 $61,695 收在
                下方、未收盘的 06-15 W-MON 周 bar 印 $61,820 = −0.32% /
                −$199 在下方。全历史 200 周 SMA 是 $62,019（截至 06-08 的
                200 根收盘 bar）；周收-收于自身 200W 下方频率是 8 / 154 =
                5.19% —— 一个低基率位置。唯一解出的事件是 06-15 周收：一根
                重回 $62,019 上方守住地板（一周下穿即重夺）、一根收在下方
                确认当前 post-06-08 地板看守谱系里首根收在 200W 下方的周线
                （上一根全历史自破 200W 周收是 2023-10-09）。状态：
                <em>看守重开、无仓</em>。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W 地板（全历史 W-MON）</span><span className="dn-lvl-v">$62,019 · 截至 06-08 的 200 根收盘 bar · live 现货 −0.29% / −$179 在下方</span></div>
                <div><span className="dn-lvl-k">未收盘周（06-15）</span><span className="dn-lvl-v bear">1m 收 $61,820 = −0.32% / −$199 在 200W 下方 —— 06-15 W-MON 收盘前为临时</span></div>
                <div><span className="dn-lvl-k">重夺条件（看多）</span><span className="dn-lvl-v bull">06-15 周收 &gt; $62,019 —— 守住地板、一周下穿再夺</span></div>
                <div><span className="dn-lvl-k">破位确认（看空）</span><span className="dn-lvl-v bear">06-15 周收 &lt; $62,019 —— 当前 post-06-08 地板看守谱系首根 200W 下方周收（上一根自破 2023-10-09）；升级周期-regime 读</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>200W 是一条周收线、不是盘中位 —— 一根 wick
                穿 $62,019（$60,755 那根低已经印了一根）不解它；只有 06-15
                W-MON 收盘解。06-08 重夺与 06-09 回吐显示地板正被 handle
                对 handle 地争夺；把下一根周收当作那个二元、把 10JUN 08:00Z
                结算与日收谱系（06-09 $61,695、06-10 未收盘 $61,820）读作
                中途的 tell。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout · 不可动作 · leg-2 重过但陈旧 · leg-3 更远</span>
              <div className="dn-trade-name">
                mean-revert 多 scout —— 仍不可动作：TD9 腿收窄到 3d-active + 4h/1M pending、funding leg-2 在一条陈旧早窗链上重过、flip leg-3 头顶更远
              </div>
              <div className="dn-thesis">
                06-09 scout 是一道三腿闸：(1) 一个 TD9-BUY 簇、(2) 一条
                ≥4h 连续的 funding 空付链、(3) 一根 1h 收在 0-γ flip 上方。
                这根快照上：leg 1 部分 live —— 3d 带 active ⚡ TD9 BUY、4h
                （Buy 8 → 9?）与 1M（Buy 8 → 9?）pending、一个成形的簇、
                但不是确认的多框印。leg 2 数值上 RE-CLEAR、靠一条 371-min /
                6.18h 的负付链（BJ 08:05→14:15 06-09）、但那条链落在早窗、
                且 funding 进快照已翻正（+0.35% ann）—— 一次陈旧、弱的重过、
                不是 live 的空付条件。leg 3 <em>更远</em>了：flip 走低到
                $63,592、但现货掉得更快到 $61,840、所以 1h-收-在-flip-上方
                的闸现在在 −2.76% 下方、比 06-09 更宽。净：各腿不对齐、且
                flip 下方的 dealer 本子是空 γ —— 在这里做多是在跟对冲流对打。
                状态：<em>不可动作</em>。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">leg 1 · TD9 簇</span><span className="dn-lvl-v">3d ⚡ TD9 BUY active · 4h / 1M Buy 8 → 9? pending —— 成形、未确认</span></div>
                <div><span className="dn-lvl-k">leg 2 · funding 空付 ≥4h</span><span className="dn-lvl-v">数值 RE-CLEAR（6.18h 链）但 STALE —— 早窗、funding +0.35% 正进快照</span></div>
                <div><span className="dn-lvl-k">leg 3 · 1h 收 &gt; flip</span><span className="dn-lvl-v bear">flip $63,592、现货 −2.76% 下方 —— 比 06-09 更远、未过</span></div>
                <div><span className="dn-lvl-k">触发（3 腿全干净）</span><span className="dn-lvl-v bull">确认的多框 TD9 BUY AND live funding 空付 ≥4h AND 1h 收 &gt; $63,592 —— 然后 scout 多 0.2R</span></div>
                <div><span className="dn-lvl-k">止损 / 规模</span><span className="dn-lvl-v bear">1h 收 &lt; $59,154（06-06 投降低）· 规模 0.2R · 在周期锚 D-SMA100 $72,854 减半</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R 草图（示意、不是 live 单）：</b>一个在 flip $63,592
                附近的触发、对 $59,154 止损是约 $4,438 风险；第一目标在周期
                锚 $72,854 是约 $9,262 ≈ 2.09:1 —— 抽象上有吸引力、但三腿
                必须全印、且触发本身坐在现货上方 +2.76%、所以今天没有可定
                价的入场。<b>硬规则：</b>不在 flip 下方、对着一个空 γ 的
                dealer 本子和一根 −47.86M 的 $60k put 磁铁、预先建多 ——
                这根 scout 是确认交易、不是预判交易。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 宏观尾 · put-spread re-grow 闸距第二根触发腿 3bp</span>
              <div className="dn-trade-name">
                宏观尾 put-spread —— 已平；re-grow 闸：10Y &gt; 4.53% 已 FIRED（4.56%）、HY OAS &gt; 2.78% 现 3bp（退开 1bp）；reclaim-long 利率筛（10Y &lt; 4.55%）BROKEN
              </div>
              <div className="dn-thesis">
                宏观尾 put-spread 已平、无残余。re-grow 闸是混合的：10Y &gt;
                4.53% 腿 FIRED（10Y 在 4.56%）、但 HY OAS &gt; 2.78% 腿退开
                到 3bp（HY OAS 2.75%、从 06-09 的 2bp 收 −1bp —— 朝远离触发
                走、不是朝触发走）。reclaim-long 利率筛（10Y &lt; 4.55%）现在
                在 4.56% BROKEN（06-09 是在边界上）。两根 re-grow 腿里一根
                已触发；一根单独的 HY OAS 印 &gt; 2.78% 就把一道完整的两腿
                re-grow 武装进下一根前向 expiry。宏观背景与 200W 破位同步
                对着风险收紧 —— 这条尾比它平掉以来任何时点都更近重新武装。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">已平 · 无残余 · 尚无滚续</span></div>
                <div><span className="dn-lvl-k">re-grow 腿 A（FIRED）</span><span className="dn-lvl-v bear">10Y &gt; 4.53% 收 —— 在 4.56% FIRED</span></div>
                <div><span className="dn-lvl-k">re-grow 腿 B（3bp、退开 1bp）</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% 收 —— 2.75%、距触发 3bp</span></div>
                <div><span className="dn-lvl-k">reclaim-long 利率筛</span><span className="dn-lvl-v bear">10Y &lt; 4.55% 收 —— 在 4.56% BROKEN</span></div>
              </div>
              <div className="dn-gating">
                <b>caveat：</b>re-grow 闸是酌情看守、水位会漂、不是回测的
                断点。HY OAS 印上的一次 re-grow 会把一道 put-spread 滚进
                19JUN 或 26JUN 前向 expiry —— 且不像五月底那几条尾、这一根
                会 re-grow 进一个<em>已经</em>空 γ 的本子（aggregate
                −58.6M）、所以一根新尾带着五月那几条尾没有的 dealer-放大器
                顺风。等 HY OAS 印；不在 10Y 腿单独上预先 grow。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 挤压周期 hostile-2 看守名单 · 无日历先验 · OI 扩张 + 加空重新武装了签名</span>
              <div className="dn-trade-name">
                挤压周期 hostile-2 —— 看守名单：06-09 的加空 + 减多重新武装了重堆签名；无时间钉、把每一根新鲜 Δnet 印读作信号
              </div>
              <div className="dn-thesis">
                挤压周期框架在 06-09 被「平仓-证实」（5 印链结束、无日历
                先验存活）。06-10 本子重新武装了重堆签名：SM 加空（+1,961）、
                减多（−779）进破位、short 峰 55,589 @ UTC 16:51 06-09 印在
                24h 现货低后 10 分钟 —— 一种压进弱势的形、不是一根离散的
                单分钟 hostile-2 步。框架按一份看守名单跑、无 time-of-day
                基率：把任何新鲜 Δnet ≤ −3k 的单分钟步（Δshort &gt; 0 +
                Δlong &lt; 0 同一分钟）本身读作一个重堆 hostile-2 信号、把
                任何 Δnet ≥ +3k 的回补步读作它的反面。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">框架状态</span><span className="dn-lvl-v">看守名单 · 无日历先验 · 06-09 本子重新武装加空 + 减多</span></div>
                <div><span className="dn-lvl-k">24h SM 形</span><span className="dn-lvl-v bear">short Δ +1,961、long Δ −779、net −2,740 更空 · short 峰 55,589 @ UTC 16:51（24h 低后 10 分钟）</span></div>
                <div><span className="dn-lvl-k">前向 gating</span><span className="dn-lvl-v">新鲜 Δnet ≤ −3k 单分钟 = 重堆 hostile-2 信号；Δnet ≥ +3k = 回补信号 —— 两向都无时间先验</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>节奏死了（五月底被证伪）、所以看盘面、不看
                钟。06-09 那次压是一段渐进的空头建进低点、不是离散步 ——
                作为破位确认有意义、但它本身不信号一次 cycle-3 点火。一根
                在 200W 下方的新鲜离散 Δnet ≤ −3k 才是要看的信号。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 200W 重夺一天还回 · dealer 本子加深空 γ · 宏观对风险走硬 · 06-15 周收是那个二元</span>
            </h2>

            <p>
              06-09 那几条条件里：200W 周期地板（06-08 判看多）反转 ——
              现货在收盘和盘中都丢了地板；dealer-flip 重夺没守住（flip 走低
              到 $63,592、现货 −2.76% 下方）；mean-revert scout 仍不可动作
              （各腿从未对齐）；宏观 re-grow 的 10Y 腿 FIRED（4.56% &gt;
              4.53%）、reclaim-long 筛破了（10Y &gt; 4.55%）。<em>唯一的
              结构性事件是 200W 再破位、印在一道广谱相关的 risk-off 里、
              带着 dealer 本子加深空 γ、宏观长端对着风险走硬。</em>今天的
              条件重新围着重开的地板看守、一个空 γ 的 dealer 本子、和一根
              距第二根 re-grow 腿一印之遥的宏观尾来摆：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>200W 周收重夺（看多）</td><td className="bull">06-15 W-MON 收 &gt; $62,019</td><td>地板完好 —— 一周下穿再夺；让周期读法保持建设性、在确认的转向上重开 scout-多的 case</td></tr>
                <tr><td>200W 周收破位（看空）</td><td className="bear">06-15 W-MON 收 &lt; $62,019</td><td>当前 post-06-08 地板看守谱系首根 200W 下方周收（上一根自破 2023-10-09）—— 升级周期-regime 读；消化论被完全证伪</td></tr>
                <tr><td>10JUN expiry 结算（今日 08:00Z、约 8h 后）</td><td>−11.53M 前块清；除 10JUN aggregate ≈ −47.07M 仍净负</td><td>把结算读作中途 tell、不是 regime 变化 —— 它后面的 strip（11JUN −15.23M、12JUN −17.94M、26JUN −25.49M）让本子继续空 γ</td></tr>
                <tr><td>$60k 崩盘 put 磁铁</td><td className="bear">$60k −47.86M（连续第 2 天加深）；24h 低 $60,755 已蹭到它的边</td><td>不与 dealer 一起向磁铁里加空；一根干净跌破并守在 $60k 下方、OI 仍在扩张、会是单独一次升级</td></tr>
                <tr><td>mean-revert 多 scout（3 腿全到）</td><td className="bull">确认多框 TD9 BUY AND live funding 空付 ≥4h AND 1h 收 &gt; $63,592 flip</td><td>scout 多 0.2R、止损 $59,154、在周期锚 $72,854 减半 —— 今天不可动作（腿不对齐）</td></tr>
                <tr><td>宏观尾 re-grow（第二腿）</td><td className="bear">HY OAS &gt; 2.78% 收（距触发 3bp、退开 1bp）；10Y &gt; 4.53% 腿已在 4.56% FIRED</td><td>在 HY OAS 印上把一道 put-spread re-grow 武装进 19JUN / 26JUN 前向 —— re-grow 进一个已经空 γ 的本子</td></tr>
                <tr><td>挤压周期 hostile-2（无日历先验）</td><td className="stale">把每一根新鲜 Δnet ≤ −3k 单分钟步本身读作信号</td><td>一根 200W 下方的离散重堆 hostile-2 会确认 cycle-3 点火；06-09 那段渐进空头建仓是确认、不是点火</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>这</em>一篇的那一条线是
              <span className="dn-signal">
                06-15 周收对 200W $62,019：一根重回上方守住地板、并在确认
                的转向上重开 scout-多的 case；一根收在下方确认当前 post-06-08
                地板看守谱系首根 200W 下方周收、并升级周期-regime 读
              </span>
              。在那之前本篇按写的跑：台子空仓、200W 看守重开为主框架、
              mean-revert 多 scout 因各腿不对齐而不可动作、宏观尾距第二根
              re-grow 腿 3bp、挤压周期 hostile-2 框架是一份无日历先验的看守
              名单。dealer 本子在 $63,592 flip 下方加深空 γ、带一根 −47.86M
              的 $60k 磁铁；OI 在新空上扩张；宏观长端对着风险走硬；跨资产
              翻 NORMAL on 一道广谱相关的 risk-off。下一个 24h 的正确读法是
              <em>耐心、空仓 —— 让 06-15 周收和 10JUN 结算把地板解出来、
              再上规模</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计轨迹 · v2（已过 codex 敌对式审计）
            </span>
            <b>状态：</b>v2 从 v1 草稿（2026-06-10 00:05Z 原子快照）在 STAGE
            B codex 敌对但公允审计后晋级
            （<code>audits/2026-06-10-desk-note.md</code>、裁决
            BLOCK-CRITICAL：1 CRITICAL + 3 MAJOR + 3 MINOR）。每条 finding
            就地修复、再用全文 grep-closure 核验 —— 把修前的错误主张模式
            反复搜到零陈旧匹配为止；修前 / 修后命中数记录如下。
            <b> DN-001（CRITICAL · 结算时差）：</b>搜
            <code>"5 min after the 09JUN 08:00Z"</code> /{' '}
            <code>"~8h before the 10JUN"</code> —— 修前 1、修后 0；改成
            <code>16h05m after 09JUN 08:00Z settle</code> /{' '}
            <code>~7h55m before 10JUN 08:00Z settle</code>（UTC/BJ 混淆；
            00:05Z 行是 BJ 08:05）。RESOLVED。
            <b> DN-002（MAJOR · 幽灵存档）：</b>搜
            <code>"snapshots/2026-06-10-0005"</code> /{' '}
            <code>"archived verbatim"</code> /{' '}
            <code>"archived in snapshots"</code> —— 修前 4（manifest MTF、
            manifest GEX、MTF 表注、审计轨迹）、修后 0；目录不存在、所以每
            处存档主张都删除并换成明确的不可复原 / 未存档披露（滚动 MTF 在
            审计期间从 00:01Z 推进到 00:31Z；数值只对最近滚动态核对）。
            RESOLVED。
            <b> DN-003（MAJOR · HY OAS 闸方向）：</b>搜
            <code>"widening toward"</code>、<code>"moved toward fire"</code>、
            <code>"wrong side"</code>、<code>"one bp from a second"</code>、
            <code>"one print away"</code> —— 修前 4（lead、宏观正文、宏观尾
            thesis、宏观净 em）、就 HY 方向义修后 0。HY OAS 收 −1bp（2.76%
            → 2.75%）、缺口从 2bp WIDEN 到 3bp —— 它从 2.78% 闸边退开了；
            重述为混合（只有 10Y 腿朝触发走）。宏观正文残留的一处
            <code>"moved toward fire"</code> 现在正确描述 10Y 腿、不是 HY。
            RESOLVED。
            <b> DN-004（MAJOR · 「全线下行」）：</b>搜
            <code>"everything down"</code> / <code>"all down"</code> ——
            修前 1（lead）、就绝对主张修后 0；源显示 GOOGL +0.04% 与 JPY
            +0.29%、所以改成 <code>"nearly everything down"</code> 并点名小
            例外、保留 NORMAL / risk-off 结论。RESOLVED。
            <b> DN-005（MINOR · expiry 分项不可加）：</b>分项 expiry 行加总
            −67.41M（除 10JUN −55.88M）、不能重构 −58.6M 的 dashboard 总额
            （不可加、差约 8.81M）；在盘口本子节与 manifest 加了内联 caveat、
            点明 dashboard 总额为准。RESOLVED。
            <b> DN-006（MINOR · short 峰措辞）：</b>搜
            <code>"at the 24h spot low"</code> / <code>"peaked at"</code> ——
            修前 1、修后 0；short 峰（55,589 @ 16:51Z）印在 $60,755 低
            （BJ 00:41 / UTC 16:41 06-09）后 10 分钟、所以把「peaked at」改
            成「peaked 10 minutes after」。RESOLVED。
            <b> DN-007（MINOR · 谱系限定）：</b>搜
            <code>"first sustained weekly-200W break of the lineage"</code>
            —— 修前 5（lead em、trade-book thesis + level、决策表、收尾 em
            —— 其中一段跨行计两次）、修后 0；改成
            <code>"当前 post-06-08 地板看守谱系里首根 200W 下方周收（上一根
            全历史自破是 2023-10-09）"</code>、因为历史上已有 8 / 154 根周收
            收在自身 200W 下方。RESOLVED。
            <b> 总体：</b>7 条 finding 全 RESOLVED（每条 CRITICAL + MAJOR +
            MINOR 模式 hits-after = 0）；v1 → v2 晋级、已过 codex 敌对式审计。
            关键数字不变、对源复核：funding × 1095（快照 +0.35%、24h 均值
            +0.93%、封顶 0 / 1441、负分钟 35.53%、最长负付链 6.18h 陈旧重过
            ≥4h leg-2 闸）；GEX 双参考符号（flip $63,592、现货 −2.76% / idx
            −2.62%、aggregate −58.6M、$60k −47.86M）；200W 全历史 W-MON SMA
            $62,019 对 live 现货 −0.29% 与未收盘 06-15 bar $61,820 −0.32%、
            8 / 154 = 5.19%；SM 切幅 7.09%（long −779 / short +1,961）；日收
            谱系（06-07 $63,298、06-08 $63,058、06-09 $61,695、06-10 未收盘
            $61,820）；30D RV 39.60%（40.24% 替代）；跨资产 |r| 0.287
            NORMAL、BTC −7.77% vs NQ −5.30%；宏观 Tier-1（10Y 4.56% 筛
            BROKEN、HY OAS 2.75% 距闸 3bp 且退开 1bp、TIPS 2.21%、DXY 99.88、
            Fed 净流动性 $5.834T）。<b>构建说明（INFO）：</b>本服务器跑 Node
            18.19.1；Next 16.2.6 在 Node &lt; 20.9.0 于{' '}
            <code>node_modules/next/dist/bin/next:24-28</code> 硬退出、所以
            完整 <code>next build</code> 受环境阻断（谱系沿用）；
            <code>npx --no-install tsc --noEmit</code> 是构建代理。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是 Hysteresis Research 各 principal 之间供讨论的内部交易台
            文档、<em>不是投资建议、不是招揽、不是要约</em>、也未针对任何
            接收者的具体情况定制。数字反映单一原子快照（2026-06-10 00:05Z）、
            section 级出处在上方 manifest 带披露；宏观 Tier-1 面板渲染是
            2026-06-09 22:16Z（快照前约 1h49m）、部分输入明确陈旧或 pending
            并已如此标注。水位、规模与条件是台子流程的示意、不是常设建议。
            过去的相关性、gamma 与仓位模式不约束未来盘面。衍生品有全损风险、
            在杠杆下损失可能超过缴存保证金。
            <em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                200W 重夺一天就还回去。本子加深空 γ、宏观对着风险走硬、
                地板看守重开。06-15 周收是那个二元。空仓、耐心。
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
            v2 · 2026-06-10 00:05Z 快照 · 已过 codex 敌对式审计 · 来源：
            live_db.json · mtf_div_latest.html · btc_gex.html ·
            macro_dashboard.html · cross_asset_correlation_summary.md ·
            btcusdt_1m_*.parquet · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
