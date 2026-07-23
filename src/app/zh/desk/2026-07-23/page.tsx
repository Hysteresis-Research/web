import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-07-23 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-07-23',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-07-23' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260723() {
  await requireViewer('/zh/desk/2026-07-23');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-07-23 · v2</span>
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
              <span className="dn-big">$65,634</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.81%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-07-23 05:18Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-07-23 05:18Z（snapshot pin · 行 t=&ldquo;07-23 13:18&rdquo; BJ）</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · 审计时文件 tail = pin · `t` 字段是
                    BJ 本地（UTC+8）；05:18Z 锚是 BJ 13:18 07-23 · 实时盘面
                    一直在脚下追加、所以所有窗口都冻结到这根 pin 行 · 24h 窗口口径：
                    头条 24h Δ 用行计窗口（基线行 89210 t=&ldquo;07-22 13:19&rdquo;
                    到 pin 行 90650 t=&ldquo;07-23 13:18&rdquo;、共 1,441 行 ——
                    多一根、因为 07-22 14:33 印了一根重复的 CVD-reset 行）、
                    给出现货 −0.81% 与 OI −1.40% / −1,454.5 BTC · 严格同分钟对比
                    （行 89209 t=&ldquo;07-22 13:18&rdquo; → pin）会读现货 −0.83%
                    与 OI −1.42% / −1,475.7 BTC —— 约一分钟基线差、已披露
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · Beijing-header scan（未收盘 bar）</td>
                  <td className="dn-flag">
                    滚动 latest 文件人造物 · 逐字存档于
                    /opt/desk-note/snapshots/2026-07-23-0518/ · 扫描现货 $65,608、
                    24h −0.95%、H/L $66,364 / $65,505、qVol $7.94B（K 线口径、
                    独立于实时盘面的另一路源）· 所有收盘临时
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-23 05:00Z 快照</td>
                  <td className="dn-flag">
                    存档于 2026-07-23-0518 快照目录 · 较 05:18Z 锚滞后约 18 分钟 ·
                    842 合约 · Deribit idx $65,824 对 live 现货 $65,634（高 $190）·
                    23JUL 0.1DTE +4.17M 今日 08:00Z 结算（快照后约 2.7h）·
                    aggregate 取自 HTML 头条 total（+261.9M / 1% move）·
                    注意 非自洽面板：逐 expiry 汇总合计 +283.46M（= gex_summary.json
                    net_gex）、比头条高约 +21.56M —— 已披露、非解决 ·
                    从 07-22 的 +294.6M 退了一档 γ、但仍是本轮谱系最深的
                    净多 γ 带
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-23 05:00Z
                  </td>
                  <td className="dn-flag">存档于 2026-07-23-0518 · 7d 1h bar · 22 资产 · 167 rows</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-22 22:15Z 渲染</td>
                  <td className="dn-flag">
                    存档于 2026-07-23-0518 · 较 05:18Z 锚渲染滞后约 7h
                    （比 07-22 备忘的 23h 新）· FRED Tier-1：10Y
                    nominal 4.63%（+3bp）、TIPS 2.37% EXTREME、HY OAS 2.69%（0bp）、DXY
                    101.19、MOVE 76.3（+5.43）、Fed 净流动性 $5.987T · Tier-3 CPI 行
                    月度/陈旧
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-07-23 04:07Z</td>
                  <td className="dn-flag">
                    较快照锚滞后约 1.2h（close $65,604.60）· 偏移按 live 现货重算 ·
                    矩阵刻意从 btcusdt_1m_&#123;2024,2025,2026&#125;.parquet 子集算
                    （1,345,208 min / 935 日 / 134 周 bar）、与完整 2019–2026
                    通配历史不同 · 所以 W-SMA150 / W-SMA200 不可计算（盘上 134
                    根周 bar）；200W 周期地板是来自 ma200w_trap_watch_state.json 的
                    另一条谱系、不是这张矩阵
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W 周期地板（周 200-SMA）</td>
                  <td className="dn-v-cell">ma200w_trap_watch_state.json · 重算 2026-07-20 00:11Z</td>
                  <td className="dn-flag">
                    runbook 的 weekly_200sma.json 本次运行缺席 · 地板读自维护中的
                    trap-watch state = $63,078.14（最后走完的周 2026-07-19 收
                    $64,694.70、连续 3 根周收盘在上方、streak 起 07-05）·
                    ratio_pctile / last-event 不可得（那些住在 weekly_200sma.json）——
                    非编造 · 慢周度水位（滞后几小时的读没关系）
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
              <span className="dn-v bear">−0.77%</span>
              <span className="dn-src">live · 原始 −0.000699 × 1095 = −0.77% ann（空付多）· 24h 均值 +1.92% · 封顶占用 0 / 1441 采样行 = 0.0%（没有一行接近 +10.95% Binance 封顶；24h 最大 +5.98%）· 368 根负行（07-22 是 0、07-19 是 41）—— funding 在 24h 后半段又转空付多（自 07-19 以来首段负、非谱系首次）、并守进快照</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">翻负 · 区间 −2.08% / +5.98%</span>
              <span className="dn-src">+10.95% 封顶自 07-19 起一直空 · funding @ 2026-07-22 23:11Z 转负、空付多守到 pin · 24h 均值 +1.92% · 杠杆本子在回落上洗多、不是在拥挤它们</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−1.40%（−1,454.5 BTC）</span>
              <span className="dn-src">live · 103,956.6 → 102,502.0 BTC · 连续第二根缩（07-22 是 −2.16%）—— 一根去杠杆回撤（SM 回补 −1,395.8 空、perp 买进平仓）、不是新需求抬 OI</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bear">55.79 / 44.21</span>
              <span className="dn-src">live_db `mkt_long_pct` · 从 51.36 → 55.79（+4.43pt）跨 24h · 24h 区间 51.01 / 55.81 —— 近 24h 高（离 55.81 高两个 bp）、retail 在回落里继续追重夺、而 funding 现在在付这批拥挤多、不是在税它</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bull">+6.53k（净 LONG）</span>
              <span className="dn-src">live · long 14.99k − short 8.47k · SM 自 2026-07-21 06:36Z（BJ 14:36）翻多以来连续净多 · 对 07-22 备忘的 +6,655 是 Δ −127（基本不动）—— 登记买家撑过第二根下印仍净多</span>
            </div>
            <div>
              <span className="dn-k">SM Δ · 24h</span>
              <span className="dn-v bull">+3,480.9 → +6,528.2（Δnet +3,047.4、build 87.5%）</span>
              <span className="dn-src">|Δ|/prior_net = 3,047.4 / 3,480.9 = 87.5% · Δlong +1,651.6 / Δshort −1,395.8 —— 多加 AND 空补、一根从 24h 开盘谷起的双侧净多堆 · bull 重堆 @ 2026-07-22 06:01Z（Δnet +2,273.6）与 10:51Z（Δnet +1,256.4）</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">42.9% / 31.50%</span>
              <span className="dn-src">GEX IV 中位数 · 842 合约 · P/C 0.44（put/call OI 134,062 / 304,617）· 跨 N 合约的链中位数、不是可交易价差 · 30D close-to-close RV 31.50%（logret.std×√365×100、30 returns、parquet 最末 bar 04:07Z）</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+6.19%（在上方）</span>
              <span className="dn-src">flip $61,808 · 对 live 现货 $65,634.18（+6.19%；65,634.18/61,808 − 1 = 6.190%）/ GEX 文件 Deribit idx $65,824（+6.50%；65,824/61,808 − 1 = 6.497%）—— 两参考都正 · aggregate +261.9M 净多 γ（从 07-22 的 +294.6M 退一档、仍是本轮谱系最深的带）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                第二根回落、登记买家撑住了—— smart money 又扛过一根下印、仍净多
              </span>。SM net 是{' '}
              <span className="dn-tag bull">+6,528</span>（long 14,994 − short
              8,466）、对 07-22 备忘的 +6,655 基本平（Δ −127）、自{' '}
              <span className="dn-tag">2026-07-21 06:36Z（BJ 14:36）</span>翻多以来
              连续净多；跨 pin 的 24h 里它堆了{' '}
              <span className="dn-tag bull">+3,047 净（Δlong +1,652 / Δshort −1,396、build 87.5%）</span>
              、从 24h 开盘谷起、伴两根 bull 重堆（BJ 14:01 Δnet +2,274、BJ 18:51 Δnet +1,256）。{' '}
              <span className="dn-signal">
                但 scout 要的那根确认印仍没来
              </span>：24h 是一根 <span className="dn-tag bear">−0.81%</span>{' '}
              下收（连续第二根）、OI{' '}
              <span className="dn-tag bear">缩了 −1.40%（−1,455 BTC）</span>
              连续第二天、没扩张、而且 —— 对 07-22 是新的 —— funding{' '}
              <span className="dn-tag bear">又转空付多</span>（live −0.77% ann、
              368 根负行、对 07-22 的 0 但 07-19 的 41、所以是重转空付多、非谱系首次、
              从 BJ 07:11 进快照）。reclaim-long 利率筛仍{' '}
              <span className="dn-tag bear">FALSE</span> —— 10Y 刷到{' '}
              <span className="dn-tag bear">4.63%</span>（从 07-22 的 4.60%）、
              在 4.55% 闸上方。价格仍守住入场验证 cap、但缓冲变薄：现货{' '}
              <span className="dn-tag bull">$65,634 在 D-EMA50 $65,130 上方 +0.77%</span>
              （07-22 是 +1.28%）、有三根走完的日收在其上（07-20 $65,225、07-21 $66,522、
              07-22 $66,082）加未收盘的 07-23 bar（$65,605）。{' '}
              <span className="dn-signal">
                所以 scout 保持 ARMED 上膛、但连续第二根印仍不上live
              </span>：那条硬腿（SM 作登记买家）到位并守住、但交易台仍需要一根守住
              D-EMA50 且 OI 企稳的确认上收 —— 而一根 OI 泄、funding 转空付多的第二根
              下收正是它的反面。对追单来说：dealer 本子退一档 γ 到{' '}
              <span className="dn-tag bull">+261.9M</span>、但仍深度净多 γ、expiry
              strip 现在{' '}
              <span className="dn-tag bull">全正</span>（26JUL 翻到 +0.28M）、
              重 call 墙在{' '}
              <span className="dn-tag">$70k +85.3M / $72k +57.5M</span>
              压头顶。本篇标定的是守住地板之上的一次杠杆重置：funding 空付多、
              OI 泄、正在洗掉那批拥挤多、而 SM 扛着仓 —— 上收若跟上就是建设性的
              清库、若 D-EMA50 先让位则是一记警告。
            </p>

            <p>
              BTC 报 <span className="dn-tag">$65,634</span> live、{' '}
              <span className="dn-tag bear">−0.81%</span> 在 24h —— 谱系里第二根
              回落日（现货比 07-22 备忘的 $65,930{' '}
              <span className="dn-tag bear">低 −0.45%</span>）、在一条{' '}
              <span className="dn-tag">$66,358 / $65,567</span> 区间里
              （高 @ BJ 00:40 07-23 / UTC 16:40 07-22、低 @ BJ 21:25 07-22 /
              UTC 13:25 07-22）。盘面早段见顶、退到 $65,567 低、然后横盘进快照。{' '}
              <span className="dn-signal">周期地板在收盘口径上已定并守住</span>：
              trap-watch W-SMA200 地板是{' '}
              <span className="dn-tag bull">$63,078</span>、最后走完的周收
              （2026-07-19 $64,694.70）是连续第三根在其上方的周收（streak 起 07-05）、
              现货坐在{' '}
              <span className="dn-tag bull">地板上方 +4.05%</span>。MA
              矩阵守着 <span className="dn-em">四根正日线</span>{' '}
              —— D-EMA50 $65,130（+0.77%）、D-EMA20 $64,357（+1.98%）、
              D-SMA20 $64,195（+2.24%）、D-SMA50 $63,138（+3.95%）—— 其中
              D-SMA50 阶梯几乎正坐在地板上（$63,138 对 $63,078、约 $60 的支撑带）。
              头顶第一根是{' '}
              <span className="dn-tag bear">D-EMA100 $67,988（−3.46%）</span>、
              工作首目标。{' '}
              <span className="dn-em">
                直读：没破、也没确认。价格仍守住 cap 与定住的地板、smart money
                仍是登记买家、但 D-EMA50 缓冲在第二根下收上腰斩、杠杆本子在泄气
                （funding 空付多、OI −1.40%）。scout 仍缺它那一根干净确认印 ——
                一根 OI 掉头向上的上收。
              </span>
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · SM 扛过第二根下印仍净多（登记买家撑住）· funding 翻负（空付多）· OI 连续第二天缩 · retail 近 24h 高重拥挤 · perp 回补、现货进快照被给出</span>
            </h2>

            <p>
              <span className="dn-signal">
                登记买家撑住了—— smart money 扛着净多穿过第二根回落、没翻回空
              </span>。SM net 是 <span className="dn-tag bull">+6,528</span>
              （long 14,994 − short 8,466）对 07-22 备忘的 +6,655 —— Δ −127、
              一根取整平的守、不是褪。这根净多自{' '}
              <span className="dn-tag">2026-07-21 06:36Z（BJ 14:36）</span>翻多以来
              连续（载入窗内没有一行印过净空）。跨 pin 的 24h 窗：Δnet{' '}
              <span className="dn-tag bull">+3,047.4</span> 在 Δlong{' '}
              <span className="dn-tag bull">+1,651.6</span> 与 Δshort{' '}
              <span className="dn-tag bull">−1,395.8</span> 上 —— 多加 AND 空补、
              一根双侧净多堆（build 分数 87.5% = 3,047.4 / 3,480.9、按 24h 开盘谷
              +3,480.9 算、不是按昨篇备忘 pin）。两根离散签名都是{' '}
              <span className="dn-tag bull">bull 重堆</span>：2026-07-22 06:01Z
              （BJ 14:01）Δnet +2,273.6（Δlong +723.2、Δshort −1,550.4 同分钟、
              就是 07-22 备忘标过的那根）在现货 $66,016、和 2026-07-22 10:51Z
              （BJ 18:51）Δnet +1,256.4（Δlong +1,151.7、Δshort −104.7、近乎纯
              多加）在现货 $66,088。SM net 24h 高{' '}
              <span className="dn-tag bull">+6,997.5 @ 2026-07-23 01:45Z（BJ 09:45）</span>
              、低 +3,208.6 @ 2026-07-22 05:36Z（BJ 13:36）；short_btc 泄到 24h 低{' '}
              <span className="dn-tag bull">8,121.8 @ 2026-07-22 06:26Z（BJ 14:26）</span>
              、再回踏到 8,466 进快照。仓位本子是那一条持续确认的腿 —— SM 是多、
              并守住。
            </p>

            <p>
              杠杆侧是这根印转向的地方。{' '}
              <span className="dn-signal">
                funding 又转空付多 —— 自 07-19 印以来首段持续负 funding
                （07-19 备忘记了 41 根负行；07-22 印了 0）、不是谱系首次
              </span>：live <span className="dn-tag bear">−0.77% ann</span>
              （原始 −0.000699 × 1095）、24h 区间{' '}
              <span className="dn-tag">−2.08% / +5.98%</span>、24h 均值{' '}
              <span className="dn-tag">+1.92%</span>、封顶占用{' '}
              <span className="dn-tag bull">0 / 1441 采样行（0.0%）</span> 但{' '}
              <span className="dn-tag bear">368 根负行</span>（07-22 是 0、07-19 是
              41）—— funding @ 2026-07-22 23:11Z（BJ 07:11）跨过空付多、负到 pin。
              空头现在在回落上付多头：两周前在封顶被税的那批拥挤多、这里被{' '}
              <em>补贴</em>了、一根杠杆本子的洗、不是拥挤。OI Δ{' '}
              <span className="dn-tag bear">−1,454.5 BTC（−1.40%）</span>跨 24h ——{' '}
              <span className="dn-em">OI 连续第二天缩</span>
              （103,957 → 102,502；07-22 是 −2.16%）、去杠杆、不是派发：
              SM 回补 −1,396 空、perp 本子买进平仓（见窗口流）。retail{' '}
              <span className="dn-tag bear">mkt_long_pct 55.79%</span>
              从 51.36% 重拥挤上来（+4.43pt、24h 区间 51.01 / 55.81）——
              近 24h 高（离 55.81 高两个 bp）、retail 在回撤里继续追重夺。perp
              在快照对现货交易一道{' '}
              <span className="dn-tag bear">−$49.17 折价</span>
              （24h 均 −$36.0、区间 −$100.5 / +$38.3 —— basis 只短暂沾过升水）。
              1 分钟 aggressor skew 快照{' '}
              <span className="dn-tag">+12.1</span>（1h 均 −0.8、区间 −22.0 /
              +20.9）—— 平衡、无单向压。{' '}
              <span className="dn-em">
                funding 空付多 + OI 连续第二天缩 + retail 近 24h 高拥挤：杠杆本子
                在泄多、而 retail 在加、SM 在守 —— 干净的信号仍是 OI 在上收上
                掉头向上、这条 scout 已经等了两根印的亚腿。
              </span>
            </p>

            <p>
              窗口流是<em>第二根空头回补回落、现货现在进快照被给出</em>。24h：
              价格 <span className="dn-tag bear">−0.81%</span>、OI{' '}
              <span className="dn-tag bear">−1,455 BTC</span>、现货 CVD{' '}
              <span className="dn-tag">Δ +2.9</span>{' '}
              <span className="dn-em">（跨 2026-07-22 06:33Z / BJ 14:33 cb_cvd
              reset 调整：pre-reset 段基线 19,638.1 → 19,385.5 = −252.6、
              post-reset 段 −0.2 → 255.3 = +255.5、合 +2.9；post-reset 基线是
              被丢弃的部分 reset 行值 45.0 之后的下一根整行、与数据来源里的
              重复行处理一致）</span> —— 现货平 —— 期货 CVD{' '}
              <span className="dn-tag bull">Δ +1,852</span>、大单{' '}
              <span className="dn-tag bull">+1,017 BTC / 921 笔</span>、
              taker-net <span className="dn-tag bull">+1,112</span> ——{' '}
              <span className="dn-em">
                perp/taker 侧在 24h 里买、而 OI 落、现货保持平：那是空头回补
                （买进平仓、OI 掉）、与 SM 回补 −1,396 空一致、不是新现货需求抬价
              </span>。4h（进快照）：价格{' '}
              <span className="dn-tag bear">−0.44%</span>、OI{' '}
              <span className="dn-tag bear">−461 BTC</span>、现货 CVD{' '}
              <span className="dn-tag bear">Δ −424</span>、期货 CVD{' '}
              <span className="dn-tag">Δ +32</span>、大单{' '}
              <span className="dn-tag bear">−406 BTC / 111 笔</span>、
              taker-net <span className="dn-tag">+32</span> —— 现货被给出、
              大单偏卖。1h：价格{' '}
              <span className="dn-tag bear">−0.03%</span>、OI{' '}
              <span className="dn-tag bear">−41 BTC</span>、现货 CVD{' '}
              <span className="dn-tag bear">Δ −151</span>、期货 CVD{' '}
              <span className="dn-tag bear">Δ −101</span>、大单{' '}
              <span className="dn-tag bear">−119 BTC / 19 笔</span>、
              taker-net <span className="dn-tag bear">−101</span> ——{' '}
              <em>现货进快照被给出（−151 现货 CVD）、OI 仍在缩</em>。
              这是 07-22 末小时的镜像、那根转买（+530 现货 CVD）；今天末小时
              现货侧偏重 —— scout 要的那根需求 step-in 没在这根印重复。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · 中周期守金叉（8h/12h 云上）· 12h ⚡TD9 SELL 清到 Buy 1 · 3d/1w 底背离簇 + 30m/1M ⚡TD9 BUY 对快周期死叉 · 快周期在回落里更深冷（15m/30m/1h RSI ~39–40）</span>
            </h2>

            <p>
              <span className="dn-signal">
                中周期守住云上金叉、更高 TF 底背离簇仍在、而 12h 的枯竭已解
              </span>。8h 带一根{' '}
              <span className="dn-tag bull">水上金叉 12b</span>（RSI 55.5、
              云上 42b）、12h 一根{' '}
              <span className="dn-tag bull">水上金叉 8b</span>（RSI 58.4、
              云上 18b）—— 而 12h{' '}
              <span className="dn-tag bull">07-22 的 ⚡ TD9 SELL 已清到一根 TD
              Buy 1</span>、近周期枯竭信号在回落里解开。更高 TF{' '}
              <span className="dn-tag bull">底背离簇（3d / 1w BULL reg）</span>
              完整、3d 与 1w 都带水下金叉（3d 4b、1w 刚印）、且 TD9 BUY 计数长了：
              本次扫描{' '}
              <span className="dn-tag bull">30m 与 1M 都印 ⚡ TD9 BUY</span>
              （30m 新、伴持续的 1M）。对此、快周期在回撤里更进冷 —— 15m RSI 39.2、
              30m 39.8、1h 40.4（低于 07-22 的 47–49、远低于 07-19 的 79 枯竭）——
              带 15m（16b）、30m（7b）、1h（4b）、4h（4b）的水上/水下死叉、
              15m/30m 云下、1h 云内。扫描净读：{' '}
              <span className="dn-em">5/9 cycle-reversal regime（JT&lt;0）、
              均值回归 / 偏反弹</span>、整体跨 10 个 TF 是 2 long / 2 short / 6
              neutral。{' '}
              <span className="dn-em">
                引擎与中周期仍确认反弹、12h 枯竭已清；慢周期仍在其重 MA 下方
                （3d / 1w 云下）；快周期死叉与 sub-40 RSI 说这根回落还有空间。
                建设性但在消化、比 07-22 深一档。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">65,608</td><td className="num">39.2</td><td className="neut">死叉（水上）16b</td><td className="bear">云下 ↑65.9k 16b</td><td>Buy 4</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">65,608</td><td className="num">39.8</td><td className="bear">死叉（水下）7b</td><td className="bear">云下 ↑65.9k 9b</td><td>⚡ TD9 BUY</td><td>BEAR hid · BEAR reg · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">65,608</td><td className="num">40.4</td><td className="bear">死叉（水下）4b</td><td className="neut">云内 65.3–66.2k 11b</td><td>Buy 5</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>4h</td><td className="num">65,608</td><td className="num">51.9</td><td className="neut">死叉（水上）4b</td><td className="bull">云上 ↓63.9k 34b</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>8h</td><td className="num">65,608</td><td className="num bull">55.5</td><td className="bull">金叉（水上）12b</td><td className="bull">云上 ↓63.3k 42b</td><td>Buy 3</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">65,608</td><td className="num bull">58.4</td><td className="bull">金叉（水上）8b</td><td className="bull">云上 ↓62.5k 18b</td><td>Buy 1</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>1d</td><td className="num">65,608</td><td className="num bull">56.6</td><td className="neut">—</td><td className="neut">云内 63.3–70.2k 3b</td><td>Sell 4</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>3d</td><td className="num">65,608</td><td className="num">47.3</td><td className="bull">金叉（水下）4b</td><td className="bear">云下 ↑74.6k 17b</td><td>Sell 7</td><td>BULL reg</td></tr>
                <tr><td>1w</td><td className="num">65,608</td><td className="num">41.0</td><td className="bull">金叉（水下）刚印</td><td className="bear">云下 ↑97.1k 25b</td><td>Sell 2</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">65,608</td><td className="num">44.6</td><td className="neut">—</td><td className="bull">云上 ↓47.0k 29b</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html Beijing-header scan（滚动 latest
                    文件；逐字存档于
                    /opt/desk-note/snapshots/2026-07-23-0518/）。头部告警：{' '}
                    <em>更高 TF 底背离簇（3d/1w）</em>、{' '}
                    <em>⚡ TD9 BUY 30m · ⚡ TD9 BUY 1M</em>、整体跨 10 个 TF 是
                    2 long / 2 short / 6 neutral、净读 5/9 cycle-reversal regime
                    （JT&lt;0）—— 均值回归 / 偏反弹。扫描现货 $65,608、
                    24h −0.95%、H/L $66,364 / $65,505、qVol $7.94B（K 线口径；
                    05:18Z 的实时盘面读现货 $65,634、24h −0.81%、H/L $66,358 /
                    $65,567 —— 另一路独立源、非冲突）。收盘为未收盘 bar；
                    每根 TF 收盘前把每个值按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵确认 cap 仍守住、只是缓冲更薄。现货 $65,634 守着{' '}
              <span className="dn-em">四根正日线</span>、按远近排序：{' '}
              <span className="dn-tag bull">D-EMA50 $65,130（+0.77%）</span> ——
              重夺的入场验证 cap、现在最近支撑、只在现货下方 +0.77% 缓冲
              （07-22 是 +1.28%）——{' '}
              <span className="dn-tag bull">D-EMA20 $64,357（+1.98%）</span>、{' '}
              <span className="dn-tag bull">D-SMA20 $64,195（+2.24%）</span>、和{' '}
              <span className="dn-tag bull">D-SMA50 $63,138（+3.95%）</span>、
              后者几乎正坐在{' '}
              <span className="dn-tag bull">W-SMA200 地板 $63,078（+4.05%）</span>
              上 —— 一道近 $63,100 的约 $60 支撑阶梯。头顶按顺序：{' '}
              <span className="dn-tag bear">D-EMA100 $67,988（−3.46%）</span>
              （工作首目标）、<span className="dn-tag bear">D-SMA150 $69,823
              （−6.00%）</span>、<span className="dn-tag bear">W-SMA20 $69,850
              （−6.04%）</span>、<span className="dn-tag bear">D-SMA100 $70,009
              （−6.25%）</span>、<span className="dn-tag bear">W-EMA20 $70,058
              （−6.31%）</span>、<span className="dn-tag bear">D-EMA150 $70,944
              （−7.48%）</span>、<span className="dn-tag bear">D-SMA200 $72,566
              （−9.55%）</span>、<span className="dn-tag bear">W-EMA200 $72,933
              （−10.01%；种子）</span>、<span className="dn-tag bear">D-EMA200 $73,784
              （−11.05%）</span>。更高更远、已弃用：W-EMA150 $76,759（−14.49%；
              种子）、W-EMA50 $79,016（−16.94%）、W-EMA100 $80,337（−18.30%）、
              W-SMA50 $85,411（−23.15%）、W-SMA100 $88,501（−25.84%）。{' '}
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-07-23 04:07Z（close $65,604.60）；
                偏移按 live 现货 $65,634.18 重算。显示的 MA 水位按 $ 取整、偏移
                用精确序列值算。矩阵刻意从
                btcusdt_1m_&#123;2024,2025,2026&#125;.parquet 子集算
                （1,345,208 分钟 / 935 日 / 134 周 bar）、与页脚 glob 本会暗示的
                完整 2019–2026 通配历史不同；200W 周期地板是来自
                ma200w_trap_watch_state.json 的另一条谱系。W-SMA150 / W-SMA200
                不可计算 —— 此子集有 134 根周 bar、不够这两个窗；W-EMA150 与
                W-EMA200 从可用历史 seed、并按种子值披露。日线收盘：07-19
                $64,694.70、07-20 $65,224.80、07-21 $66,522.40、07-22
                $66,082.00、07-23（未收盘）$65,604.60 —— 三根走完的收
                （07-20、07-21、07-22）加未收盘的 07-23 bar 都在 D-EMA50
                cap $65,130 上方、但后两根（07-22、07-23）是下收。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子退一档 γ 到 +261.9M 净多 γ（从 +294.6M、仍是本轮谱系最深带）· flip $61,808、现货在上方 +6.19% · $70k/$72k call 墙压头顶 · expiry strip 现在全正（26JUL 翻 +0.28M）· 31JUL +158.35M 主导</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子从最富 γ 松了一档、但仍深度净多
              </span>。aggregate GEX 是{' '}
              <span className="dn-tag bull">+261.9M / 1% move</span>（GEX 面板的
              头条 total；从 07-22 的 +294.6M —— 一根 −$32.7M 退 γ、随现货往墙
              泄、仍深度净多 γ、阻尼 —— dealer 买回落、卖冲高）{' '}
              <span className="dn-em">
                —— 来源注意：面板的逐 expiry 汇总合计 +283.46M、比这头条高约
                +21.56M（见下方 strip）、一根非自洽的来源面板；aggregate 按 HTML
                头条 +261.9M 报
              </span>。0-γ flip 是{' '}
              <span className="dn-tag">$61,808</span>、现货 $65,634 坐在{' '}
              <span className="dn-tag bull">flip 上方 +6.19%</span> 现货口径
              （65,634.18 / 61,808 − 1 = +6.190%）；GEX 文件的 Deribit-index
              参考 $65,824（比 live 现货高 $190）读{' '}
              <span className="dn-tag bull">flip 上方 +6.50%</span>
              （65,824 / 61,808 − 1 = +6.497%）—— 两参考都正、现货深在正 γ 场里。
              顶部 γ 墙：{' '}
              <span className="dn-tag bull">$70k +85.30M</span>（最重、头顶
              磁石/cap；38,707 call OI）、{' '}
              <span className="dn-tag bull">$72k +57.50M</span>、{' '}
              <span className="dn-tag bull">$66k +37.98M</span>（刚在头顶）、{' '}
              <span className="dn-tag bull">$68k +25.11M</span>、{' '}
              <span className="dn-tag bull">$67k +24.94M</span>、{' '}
              <span className="dn-tag bull">$65k +16.66M</span>（刚在现货下）、{' '}
              <span className="dn-tag bear">$60k −14.25M</span>（唯一负墙 ——
              崩盘 put 残余、18,024 put OI）、{' '}
              <span className="dn-tag bull">$80k +10.91M</span>、{' '}
              <span className="dn-tag bull">$69k +10.63M</span>、{' '}
              <span className="dn-tag bull">$71k +8.95M</span>。{' '}
              <span className="dn-em">
                现货被下方 $65k 支撑墙与上方 $66k–$68k 正带夹住、$70k/$72k call
                是重头顶 cap；唯一负 γ 是 $60k 崩盘 put 残余、远在下方。这是一本
                双向阻尼的本子 —— 它会淡化追进 $70k call 墙、并在往 $65k / flip
                回落时接盘
              </span>。expiry strip 现在{' '}
              <span className="dn-em">全正</span>（07-22 那根 26JUL −$0.18M 可忽略
              的负翻到 +0.28M）：23JUL 0.1DTE +4.17M（今日 08:00Z 结算）、
              24JUL 1.1 +48.99M、25JUL 2.1 +1.84M、26JUL 3.1 +0.28M、31JUL 8.1{' '}
              <span className="dn-tag bull">+158.35M</span>（主导）、7AUG 15.1
              +32.82M、28AUG 36.1 +23.21M、25SEP 64.1 +6.72M、25DEC 155.1 +5.31M、
              26MAR27 246.1 +1.21M、25JUN27 337.1 +0.56M —— strip 上任何位置都没
              近端负放大器。没有放大器给一根新空提供燃料。{' '}
              <span className="dn-em">
                来源面板注意：这些逐 expiry 桶合计 +283.46M（对上 gex_summary.json
                net_gex $283,463,077）、比本篇报的 GEX 面板 +261.9M 头条 aggregate
                高约 +21.56M / +8.2%。头条 total 与逐 expiry 汇总在来源面板里
                不自洽 —— 这道背离已披露、非在上游解决；本篇用 HTML 头条 +261.9M
                作 aggregate、不把 strip 组成当作对它的自洽核算。两个数字都深度
                净多 γ；符号与阻尼读法不因这道缺口改变。
              </span>
            </p>

            <p>
              IV 中位数横跨 842 合约是{' '}
              <span className="dn-tag">42.9%</span> 对 30D close-to-close RV{' '}
              <span className="dn-tag">31.50%</span> —— 链级溢价{' '}
              <span className="dn-tag">~+11.4pt</span>、put/call OI 比{' '}
              <span className="dn-tag">0.44</span>（134,062 / 304,617 —— call 偏重）。
              是 N 合约的链中位数、<span className="dn-em">不是</span>可交易价差；
              expiry- / strike-level vega、skew、期限结构仍未载入；vol 读法保持
              framework only。今日 842 合约（对 07-22 不变）。RV 方法：30D
              close-to-close、logret.std × √365 × 100、用最末 30 根日 log return
              （= 连续 31 根日收）、锚自 parquet 最末 bar 2026-07-23 04:07Z；
              31-return 读 31.87%、30-return 页面值 31.50%。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · 利率/美元紧（10Y 4.63%、TIPS 2.37% EXTREME、DXY 101.19）对信用/流动性松（HY OAS 2.69% RISK-ON、Fed 净流动性 $5.987T EXTREME）· reclaim-long 利率筛 FALSE（10Y &gt; 4.55%、紧到 4.63%）· MOVE +5.43 到 76.3 · 跨资产 IDIOSYNCRATIC |r| 0.202 · BTC 领跑股票/megacap 簇（+1.02% 7d 对 NQ −1.87%、+2.89pt）但能源/金属跑赢它（CL +11.61%、BRENT +9.99%、SILVER +4.29%）</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观面保持分裂 —— 利率与美元紧、信用与流动性松 —— 利率腿再紧
                3bp 对着 scout、债波跳
              </span>。面板渲染 2026-07-22 22:15Z、比快照早约 7h（比 07-22 备忘
              的 23h 滞后新）。US 10Y nominal{' '}
              <span className="dn-tag bear">4.63%（+3.0bp）</span>、regime z{' '}
              <span className="dn-tag bear">+2.25</span>、偶发 z{' '}
              <span className="dn-tag">+1.80</span> —— EXTREME RISK-OFF、{' '}
              <span className="dn-em">在 4.55% reclaim-long 闸上方</span>
              （07-22 是 4.60% —— 再紧 3bp）。10Y TIPS real{' '}
              <span className="dn-tag bear">2.37%（+2.0bp）</span>、z{' '}
              <span className="dn-tag bear">+2.80</span> —— EXTREME RISK-OFF。
              5Y5Y BE 通胀 <span className="dn-tag">2.26%（+2.0bp）</span>。HY OAS{' '}
              <span className="dn-tag bull">2.69%（0.0bp）</span>、regime z{' '}
              <span className="dn-tag bull">−1.20</span>、偶发 z{' '}
              <span className="dn-tag bull">−0.58</span> —— RISK-ON、当日平、
              仍<span className="dn-em">差 9bp</span> 到其 2.78% put-spread
              re-grow 闸。MOVE 债波{' '}
              <span className="dn-tag bear">76.3（+5.43）</span> —— 跳了、但仍在
              中性带。DXY{' '}
              <span className="dn-tag bear">101.19（+0.20）</span>、regime z{' '}
              <span className="dn-tag bear">+2.14</span> —— EXTREME RISK-OFF。
              Fed 净流动性{' '}
              <span className="dn-tag bull">$5.987T（+0.025T）</span>、regime z{' '}
              <span className="dn-tag bull">+2.34</span> —— EXTREME RISK-ON。
              USD/JPY <span className="dn-tag">163.19（+0.70）</span>；US-JP 10Y
              利差 <span className="dn-tag">1.96%（+3.0bp）</span> —— 紧。NFCI
              −0.552（RISK-ON、更新的周度印）。{' '}
              <span className="dn-em">
                净：reclaim-long 利率筛（10Y &lt; 4.55%）在 4.63% FALSE、再紧
                3bp —— 一记 live 的 scout 逆风、但 SM 仍是登记买家、交易台读法
                成立：利率筛是一条要求小仓的 caveat、不是硬阻。put-spread re-grow
                闸是两腿、BOTH 必到 —— 10Y 腿触发（4.63% &gt; 4.53%）但 HY OAS
                2.69% 差 9bp 到 2.78%、所以单一利率腿不是对冲触发。利率/美元紧、
                信用/流动性松：框住整轮谱系的宏观交叉流。
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
                <tr><td>US 10Y nominal</td><td className="num">4.63%</td><td className="num bear">+3.0bp</td><td className="num bear">+2.25</td><td className="num">+1.80</td><td className="bear">紧 · EXTREME RISK-OFF</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.37%</td><td className="num bear">+2.0bp</td><td className="num bear">+2.80</td><td className="num">+1.67</td><td className="bear">紧 · EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.26%</td><td className="num">+2.0bp</td><td className="num">+0.49</td><td className="num">+2.33</td><td className="neut">无标</td></tr>
                <tr><td>HY OAS</td><td className="num">2.69%</td><td className="num">0.0bp</td><td className="num bull">−1.20</td><td className="num bull">−0.58</td><td className="bull">松 · RISK-ON · 距闸 9bp</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.552</td><td className="num">−0.01</td><td className="num bull">−1.51</td><td className="num bull">−1.71</td><td className="bull">松 · RISK-ON</td></tr>
                <tr><td>MOVE 债波</td><td className="num">76.3</td><td className="num bear">+5.43</td><td className="num">+0.24</td><td className="num">+1.63</td><td className="neut">中性 · 跳了</td></tr>
                <tr><td>DXY</td><td className="num">101.19</td><td className="num bear">+0.20</td><td className="num bear">+2.14</td><td className="num">+0.74</td><td className="bear">硬 · EXTREME RISK-OFF</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.987T</td><td className="num bull">+0.025T</td><td className="num bull">+2.34</td><td className="num bull">+2.42</td><td className="bull">EXTREME RISK-ON</td></tr>
                <tr><td>USD/JPY</td><td className="num">163.19</td><td className="num">+0.70</td><td className="num bear">+1.65</td><td className="num">+1.74</td><td className="neut">日元更软</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">1.96%</td><td className="num bear">+3.0bp</td><td className="num">−0.53</td><td className="num">+1.80</td><td className="bear">紧</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp（月度）</td><td className="num bear">+2.42</td><td className="num">+1.09</td><td className="stale">月度 · 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、汇总 05:00Z ——{' '}
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。
              非对角线均值 <span className="dn-tag">|r| 0.202</span>{' '}
              （较 07-22 的 0.200 基本不动 —— 仍深在{' '}
              <span className="dn-em">IDIOSYNCRATIC</span> 区段、在 0.25 阈值
              下方）。BTC 列出的对齐：NQ{' '}
              <span className="dn-tag">+0.521</span>（顶）、SP500{' '}
              <span className="dn-tag">+0.437</span>、SILVER{' '}
              <span className="dn-tag">+0.379</span>、COPPER{' '}
              <span className="dn-tag">+0.363</span>、PLAT{' '}
              <span className="dn-tag">+0.357</span>、NVDA{' '}
              <span className="dn-tag">+0.324</span>、GOLD{' '}
              <span className="dn-tag">+0.324</span>、TSLA{' '}
              <span className="dn-tag">+0.321</span>、JP225{' '}
              <span className="dn-tag">+0.300</span>。7d 表现又是那条最响的线、
              但排名比一句无限定的「RS 领头」更窄：{' '}
              <span className="dn-tag bull">BTC +1.02%</span> 领跑{' '}
              <span className="dn-em">股票 / megacap 风险簇</span> —— NQ{' '}
              <span className="dn-tag bear">−1.87%</span>、SP500{' '}
              <span className="dn-tag bear">−1.09%</span>、JP225{' '}
              <span className="dn-tag bear">−0.29%</span>、且 megacap 硬跌
              （GOOGL <span className="dn-tag bear">−10.87%</span>、TSLA{' '}
              <span className="dn-tag bear">−9.49%</span>、META{' '}
              <span className="dn-tag bear">−8.81%</span>、AMZN{' '}
              <span className="dn-tag bear">−5.48%</span>、MSFT{' '}
              <span className="dn-tag bear">−2.13%</span>、AAPL{' '}
              <span className="dn-tag bear">−0.59%</span>）、NVDA{' '}
              <span className="dn-tag bull">+0.34%</span> 是唯一绿的大科技 ——{' '}
              <span className="dn-em">
                但它不是 22 资产 strip 的顶
              </span>：能源与多数金属在 7d 上跑赢 BTC（CL{' '}
              <span className="dn-tag bull">+11.61%</span>、BRENT{' '}
              <span className="dn-tag bull">+9.99%</span>、SILVER{' '}
              <span className="dn-tag bull">+4.29%</span>、GOLD{' '}
              <span className="dn-tag bull">+2.28%</span>、NGAS{' '}
              <span className="dn-tag bull">+2.25%</span>、COPPER{' '}
              <span className="dn-tag bull">+1.98%</span>、URNM{' '}
              <span className="dn-tag bull">+1.35%</span>）、PLAT{' '}
              <span className="dn-tag bear">−0.56%</span> 是唯一红的金属。{' '}
              <span className="dn-em">
                所以可辩护的主张很窄：BTC 领跑股票/megacap 风险簇、对 NQ +2.89pt
                （+1.02% 对 −1.87%）、对着一个广泛在抛的 TradFi 股票复合体 ——
                驱动这轮谱系的「内生于 crypto」读法对股票仍在 —— 但 BTC 不是
                整条跨资产 strip 的相对强度领头；能源与金属复合体跑赢了它。这是
                一记对股票相对的 tell、不是无限定的 RS 输入、也不作独立交易本子
                理由用。相关性坐在 idiosyncratic、所以宏观交叉流对价格的咬合
                小于对交易框架利率闸的咬合
              </span>。JGB 月度 2.67% 带 EXTREME RISK-OFF 月度标 —— 不依赖。
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · scout 保持 ARMED（SM 扛住净多、cap 仍守、但第二根下印上确认上收仍缺）· 空 STOOD DOWN（最深正 γ、全正 strip、无放大器）· put-spread 不重长（单一 10Y 腿）· 本子为确认上收 FLAT</span>
            </h2>

            <p>
              <span className="dn-signal">
                07-22 备忘在 smart money 加入买盘时给 scout 上膛、说多头
                「在确认收盘上触发、不在回落上」—— 那根确认收盘仍没来
              </span>。smart money 扛住净多（+6,528 对 +6,655）、价格仍守 D-EMA50
              cap、地板在周收上已定、dealer 本子深度正 γ 带全正 strip。scout 保持{' '}
              <span className="dn-em">ARMED</span>。但触发在<em>这</em>根印也不发火：
              24h 是第二根 −0.81% 下收、OI 连续第二天缩 −1.40%、funding 翻负
              （空付多）、reclaim-long 利率筛 FALSE（10Y 4.63%）。交易台不追一根
              第二回落进 $70k/$72k call 墙 cap、在确认亚腿（OI 掉头向上、一根上收）
              仍未到时 —— 而且现在 D-EMA50 缓冲腰斩到 +0.77%。今天本子是：无空、
              scout ARMED 但不上 live、无新对冲 —— 在第一根守住 D-EMA50 $65,130
              且 OI 企稳（Δ24h OI ≥ 0）的确认上收上做多 0.2R、止损定住的地板 $63,078。
            </p>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout · ARMED · SM 确认腿仍 TRUE · 等确认上收（第二根印仍缺）</span>
              <div className="dn-trade-name">
                重夺多 scout —— 保持上膛：SM 扛住净多（+6,528）、价格仍守 D-EMA50 cap、但一根 OI 缩、funding 转空付多的第二根下收正是触发要的那根确认印的反面
              </div>
              <div className="dn-thesis">
                scout 挂在两条硬腿加一根确认印上：(1) 价格在收盘口径上守住 D-EMA50
                入场验证 cap、(2) SM 确认作登记买家、理想是净多 —— 两条都 TRUE
                并守住 —— 上 live 闸是一根让 OI 企稳的确认 UP-收、而 10Y 利率筛是
                逆风不是阻。腿 1 到位但在变薄 —— 三根走完的日收在 D-EMA50 上方
                （07-20 $65,225、07-21 $66,522、07-22 $66,082）但后两根是下收、
                现货现在只在 cap 上方 +0.77%（07-22 是 +1.28%）。腿 2 到位并守住
                —— SM 保持净多（+6,528、对 07-22 备忘 Δ −127）、没褪。仍缺的、
                连续第二根印、是确认收盘：24h 是一根 −0.81% 回落、OI 缩 −1.40%、
                funding 空付多、末小时转现货被给出（−151 现货 CVD）、所以「OI 在
                上收上扩张」这条亚腿现在已两次没印。scout 因此 ARMED、不上 live
                —— 交易台在第一根重夺回落且 OI 企稳的上收上做多、小仓进一本深度
                正 γ、在 $70k call 墙 cap 住上方的本子。funding 洗与 OI 泄是建设性
                清库、<em>如果</em>上收跟上；新的盯位是 D-EMA50 本身。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">触发（上 live）</span><span className="dn-lvl-v bull">下一根日收 &gt; D-EMA50 $65,130 且是一根 UP-收（24h ≥ 0）AND OI 企稳（Δ24h OI ≥ 0）—— SM 确认腿与 cap 重夺腿已 TRUE；剩下的闸是一根确认印、不是新结构条件</span></div>
                <div><span className="dn-lvl-k">解除盯位（新）</span><span className="dn-lvl-v bear">第三根日收在 D-EMA50 $65,130 下方会破 cap 重夺腿、把 scout 推回 DEFERRED —— 缓冲已在两根下收上腰斩到 +0.77%</span></div>
                <div><span className="dn-lvl-k">scout 入场</span><span className="dn-lvl-v bull">触发印出时、scout long 0.2R · SM 净多、地板已定、dealer 本子往 flip 阻尼下方</span></div>
                <div><span className="dn-lvl-k">止损</span><span className="dn-lvl-v bear">1h 收 &lt; $63,078（W-SMA200 定住的周期地板 / D-SMA50 $63,138 阶梯 —— 一根收在其下结束重夺读法）</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">$67,988（D-EMA100、首目标）然后 $69,823 / $70,009（D-SMA150 / D-SMA100）进 $70k +85.3M call 墙</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R · 在 D-EMA100 平半；$70k call 墙是 runner 的结构性 cap</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R：</b>触发 ~$65,130（D-EMA50）、止损 $63,078（地板）=
                ~$2,052 风险；首目标 $67,988 = ~$2,858 回报 ≈ 1.39:1 —— 与
                07-22 scout 的 1.45:1 一致（略低、因 D-EMA50 抬向现货）。
                <b>硬规则：</b>不要在这根第二回落印上 live —— SM 腿守住是 scout
                保持上膛的理由、但框架要 OI 停止缩、要一根上收确认需求在 step 回来、
                而不只是空头回补（24h 是 perp 在落 OI 上买进平仓、现货 CVD 平、
                末小时被给出）。利率筛在 4.63% 是一记标注的逆风、支持更小的 0.2R
                仓；新的风险是变薄的 D-EMA50 缓冲、不是地板。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">空 · STOOD DOWN · 本轮谱系最深正 γ 带（+261.9M）· 全正 strip · BTC 领跑股票簇 · SM 净多</span>
              <div className="dn-trade-name">
                追空 —— 保持站下：往一本 +261.9M 正 γ 本子、SM 净多、expiry strip 全正上做空、是在打每一根结构性线（BTC 也领跑股票/megacap 簇、虽然能源/金属跑赢它）
              </div>
              <div className="dn-thesis">
                追空整轮谱系都站下、现在也不比之前更顺。dealer 本子松一档到
                +261.9M（从 +294.6M）但仍是本轮谱系最深净多 γ 带、flip 坐在现货
                下方 $3,826、expiry strip 现在全正（07-22 那根 26JUL −$0.18M 翻到
                +0.28M）、没近端负放大器 —— 下腿的燃料 —— SM 连续第二根印净多、
                且 BTC 领跑股票/megacap 簇（+1.02% 7d 对 NQ −1.87%、虽然能源/金属
                跑赢它）。这里做空打 dealer 阻尼与 SM 多；BTC 对股票相对的强度
                是次级 tell、不是核心理由。唯一的重武装是一根结构性破、不是淡化
                一根 funding-洗回落。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">站下 · 无仓 · 正 γ 本子 + SM 多 + 全正 strip 都反对淡化</span></div>
                <div><span className="dn-lvl-k">重武装触发（未激活）</span><span className="dn-lvl-v bear">1d 收 &lt; $63,078（W-SMA200 地板）AND strip 上出现一根新近端负 γ 块 —— 两者都不在（strip 全正、由 31JUL +158.4M 主导）</span></div>
                <div><span className="dn-lvl-k">不要</span><span className="dn-lvl-v bear">不在本轮谱系最深正 γ 带里、SM 净多且 BTC 领跑其股票风险簇（一记对股票相对的 tell、非整条 strip RS）时做空</span></div>
              </div>
              <div className="dn-gating">
                <b>Gating：</b>下腿的空头有效、是因为一根近端负 γ 大块把动作
                放大进到期。这条 strip 上没这种块 —— 它全正。重武装空要求周期
                地板彻底破（$63,078 一根日收）AND 一根新负放大器出现 —— 一根
                结构性 regime 变化、不是在正 γ 场里淡化一根回落。funding 转空付多
                是一根杠杆洗、不是一根空信号。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 宏观尾 · put-spread re-grow 闸 —— 单一腿触发（10Y）、无新对冲</span>
              <div className="dn-trade-name">
                下行 put-spread —— 不重长：10Y 腿触发（4.63% &gt; 4.53%）但 HY OAS 2.69% 差 9bp 到其 2.78% 闸；单一腿触发不是一根新对冲要的两腿确认
              </div>
              <div className="dn-thesis">
                put-spread re-grow 闸是两腿、BOTH 必到：HY OAS &gt; 2.78% AND
                10Y &gt; 4.53%。本次渲染只触发 10Y 腿（4.63%、比 07-22 的 4.60%
                再紧 3bp）—— 但 HY OAS 腿差 9bp 坐在 2.69%（RISK-ON、当日平）、
                不比 07-22 更近闸。信用没在确认利率压力。交易台不付权利金去往一本
                +261.9M 正 γ 本子、SM 净多、BTC 领跑股票/megacap 簇里重长一根下行
                尾 —— 一根新 put-spread 会打 dealer 阻尼（BTC 对股票相对的强度
                这里是次级 tell、不是驱动）。reclaim-long 利率筛在 4.63% FALSE
                在上面标为 scout 逆风、不作这里的对冲触发。无新对冲。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">无仓 · 不重长 · 单一 10Y 腿触发、HY OAS 腿差 9bp</span></div>
                <div><span className="dn-lvl-k">重长触发（两腿必到）</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% 收（当前 2.69%、距触发 9bp）去加入已触发的 10Y &gt; 4.53%（4.63%）—— 一根两腿确认、不是单一利率腿</span></div>
                <div><span className="dn-lvl-k">reclaim-long 利率筛</span><span className="dn-lvl-v bear">10Y &lt; 4.55% 收 —— 在 4.63% FALSE（比 4.60% 再紧 3bp）；一记 scout 多逆风、SM 守着买盘时非硬阻</span></div>
              </div>
              <div className="dn-gating">
                <b>注意：</b>re-grow 闸是随水位漂移设的酌情盯位、不是回测断点。
                单一利率腿上的新对冲会是滚到 24JUL 1.1 DTE 或 31JUL 8.1 DTE 的
                put-spread —— 但两条 strip 都净多 γ、所以一根新尾不带放大器顺风、
                会打这轮谱系而不是搭它。交易台等 HY OAS 腿加入再重长、或等周期
                地板彻底破。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · SM 守住买盘（scout 的硬腿仍 TRUE）· 价格仍守 D-EMA50 cap 但缓冲腰斩 · funding 翻空付多、OI 连续第二天缩 · 本子为确认上收 FLAT · 地板已定、dealer 本子深度正 γ、利率筛是唯一硬逆风</span>
            </h2>

            <p>
              07-22 决策条件里：重夺 scout 的 SM 确认腿{' '}
              <span className="dn-em">保持 TRUE</span> —— SM 守住净多（+6,528、
              Δ −127）、登记买家没褪；D-EMA50 cap 重夺腿{' '}
              <span className="dn-em">保持 TRUE 但变薄</span>
              （三根走完的收在 $65,130 上方、缓冲在两根下收上腰斩到 +0.77%）；
              「OI 在上收上掉头向上」确认{' '}
              <span className="dn-em">没发火</span>、连续第二根印（OI −1.40%、
              funding 空付多）；reclaim-long 利率筛保持{' '}
              <span className="dn-em">FALSE</span>（10Y 4.63%、再紧 3bp）；宏观
              re-grow 闸仍触发一腿（10Y）、HY OAS 差 9bp；追空重武装{' '}
              <span className="dn-em">没发火</span>（无地板破、无负放大器 ——
              strip 转全正）。{' '}
              <em>这轮谱系等的那条硬腿 —— smart money 作登记买家 —— 仍到位
              并守住、所以 scout 保持上膛；剩下的闸仍是一根 OI 企稳的确认上收、
              而一根 funding 泄气本子的第二根下收正是它的反面。</em>{' '}
              今天条件围绕一个上膛的 scout、一道变薄的 cap 缓冲、一根定住的地板、
              一本深度正 γ 的 dealer 本子、一个泄气的杠杆本子、和一记唯一的利率筛
              逆风重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>重夺多 scout（多）—— ARMED、SM 腿守住</td><td className="bull">下一根 UP-收 &gt; D-EMA50 $65,130（24h ≥ 0）AND OI 企稳（Δ24h OI ≥ 0）—— SM 净多 +6,528 且 cap 重夺已 TRUE</td><td>scout long 0.2R、目标 $67,988（D-EMA100）然后 $69,823 / $70,009；止损 $63,078</td></tr>
                <tr><td>OI 掉头向上确认（那条缺失亚腿、第二根印）</td><td className="bear">Δ24h OI ≥ 0 伴一根上收 —— 当前 OI −1.40% 在第二根回落、funding 空付多</td><td>这是触发剩下的闸；一根纯回补回落（perp 在落 OI 上买进平仓、funding 负）不是 scout 要的新需求确认</td></tr>
                <tr><td>D-EMA50 cap 重夺（变薄 —— 新解除盯位）</td><td className="bear">第三根日收 &lt; D-EMA50 $65,130（缓冲在两根下收上腰斩到 +0.77%）</td><td>破 cap 重夺腿、把 scout 推回 DEFERRED —— 地板之上的新风险</td></tr>
                <tr><td>reclaim-long 利率筛</td><td className="bear">10Y &lt; 4.55% 收 —— 在 4.63% FALSE（比 4.60% 再紧 3bp）</td><td>scout 逆风、SM 守着买盘时非硬阻；支持更小的 0.2R 仓</td></tr>
                <tr><td>周期地板丢（重夺读法结束）</td><td className="bear">1d 收 &lt; $63,078（W-SMA200 / D-SMA50 $63,138 阶梯）</td><td>结束重夺论；另起评估 —— 定住的周收地板破</td></tr>
                <tr><td>追空重武装（未激活）</td><td className="bear">1d 收 &lt; $63,078 AND strip 上一根新近端负 γ 块 —— 两者都不在</td><td>strip 全正（31JUL +158.4M 主导）；不在一本 +261.9M 正 γ 本子、SM 多时淡化</td></tr>
                <tr><td>宏观尾重长（单一腿触发）</td><td className="bear">HY OAS &gt; 2.78%（距触发 9bp）去加入 10Y &gt; 4.53%（4.63%、已触发）</td><td>只在两腿确认上重长；一根单利率腿进正 γ strip 不是对冲触发</td></tr>
                <tr><td>dealer 本子保持正 γ</td><td className="bull">aggregate GEX 保持正（23JUL/24JUL/31JUL strip 内无新近端负块加入）</td><td>下方往 flip $61,808 保持阻尼；$70k/$72k call 墙 cap 住追单 —— 偏小 scout 而非 runner</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是{' '}
              <span className="dn-signal">
                第二根回落是否解成一根守住 D-EMA50 $65,130 且 OI 掉头向上的确认
                上收 —— 那会触发本轮谱系首根 live 多 —— 还是第三根下印收在 D-EMA50
                下方、把 scout 推回递延、或收在定住的地板 $63,078 下方、结束重夺
                读法。smart money 已扛过两根下收守住买盘、地板已定、dealer 本子
                阻尼下方；缺的仍是一根干净确认印、不是另一根结构条件
              </span>。在那之前本篇按写好的跑：scout 是 ARMED（SM 腿守住、cap
              仍守）但连续第二根印不上 live、追空站进本轮谱系最深正 γ 带、
              put-spread 不在单一利率腿触发上重长。宏观面保持分裂（利率/美元紧、
              信用/流动性松）、BTC 在 7d 上领跑股票/megacap 簇 +2.89pt（对 NQ、
              虽然能源/金属跑赢它）、中周期守住云上金叉、12h 枯竭已清。下一根印
              的对读是<em>上膛而耐心 —— 登记买家仍在守；多头在确认收盘上触发、
              新盯位是 funding 洗正在测的 D-EMA50</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计追踪 · v2 · 已过 codex 敌对式审计
            </span>
            <b>状态：</b>v2 EN、在 STAGE B codex 敌对但公允的跨模型审计后从 v1
            晋级（判决 BLOCK-CRITICAL：2 CRITICAL + 1 MAJOR + 4 MINOR + 1 NIT）。
            findings 按 STAGE C 折入；审计记录于 audits/2026-07-23-desk-note.md。
            每条 finding 都用对整份 EN 文件跑一遍错误主张模式与全部语义变体的
            grep 扫描来关闭 —— 搜索模式 · hits-before · hits-after（带修前含义）·
            处置：{' '}
            <b>DN-001（CRITICAL、RS-leader 过度主张）：</b>模式「RS leader /
            relative-strength leader / leads a red TradFi tape / outrunning the
            macro tape / own RS」—— hits-before 8（roman、cross-asset prose ×3、
            short chip/name/thesis、put-spread thesis、decision prose）—— hits-after
            0（每处收窄为「BTC 领跑股票/megacap 簇 +2.89pt 对 NQ、但能源/金属 ——
            CL +11.61%、BRENT +9.99%、SILVER +4.29% —— 跑赢它；非整条 strip RS、
            非独立交易输入」；cross-asset em-block 里唯一残留匹配是修正后的否定
            主张「非整条 strip 的相对强度领头」）—— RESOLVED。{' '}
            <b>DN-002（CRITICAL、funding「首次」为假）：</b>模式「first time of
            the recovery lineage / flipped negative for the first / first-ever」——
            hits-before 1 最高级（+ 3 处普通「flipped negative」框架）——
            hits-after 0 陈旧（重框为「自 07-19 以来首段持续负 funding」、
            引 07-19 备忘的 41 根负行对 07-22 的 0；所有余下提及都带「非谱系首次」）
            —— RESOLVED。{' '}
            <b>DN-003（MAJOR、GEX aggregate 对 strip 非自洽）：</b>模式
            「+261.9M / strip self-contained」—— 面板头条 +261.9M 与逐 expiry
            汇总 +283.46M（= gex_summary.json net_gex $283,463,077、约 +21.56M /
            +8.2% 差）现在在三处都带明确的非自洽来源 caveat（数据来源 GEX 行、
            盘口本子 aggregate 陈述、strip 段）；strip 不再被称作自洽核算 ——
            hits-after 0 无 caveat —— RESOLVED。{' '}
            <b>DN-004（MINOR、陈旧宏观 z 单元）：</b>模式「TIPS episodic +1.53 /
            5Y5Y episodic +2.00 / US-JP −0.62 / +1.47」—— 修正为渲染值 TIPS +1.67、
            5Y5Y +2.33、US-JP −0.53 / +1.80；所有其它宏观 z 单元对
            macro_dashboard.html 重核并吻合 —— hits-after 0 —— RESOLVED。{' '}
            <b>DN-005（MINOR、retail delta 残留 / 24h 高夸大）：</b>模式
            「+4.27 / sitting at the 24h high / re-crowded to a 24h high」——
            +4.27 残留删除（delta 是 +4.43pt）、每处「at the 24h high」跨 meta、
            prose、roman 与 em-block 改为「near the 24h high（离 55.81 高两个 bp）」
            —— hits-after 0 —— RESOLVED。{' '}
            <b>DN-006（MINOR、未披露的 24h 窗口口径）：</b>数据来源 live-tape 行
            现在陈述行计基线（行 89210 → pin 90650、1,441 行、重复的 07-22 14:33
            reset 行）给 −0.81% / −1.40%、以及严格同分钟读（−0.83% / −1.42%）——
            RESOLVED。{' '}
            <b>DN-007（MINOR、spot-CVD reset 算术）：</b>reset 调整后的 spot CVD
            现在显示明确的分段公式（pre-reset 19,638.1 → 19,385.5 = −252.6；
            post-reset −0.2 → 255.3 = +255.5；合 +2.9）、post-reset 基线 = 被丢弃的
            部分 reset 行 45.0 之后的下一根整行；显示值修正 +2.7 → +2.9 ——
            RESOLVED。{' '}
            <b>DN-008（NIT、对一根现货下方线用「overhead」）：</b>D-EMA50
            「+0.77% overhead」改为「+0.77% 现货下方缓冲」—— RESOLVED。{' '}
            <b>ask-deepseek 二审已裁定（未自动应用、按 runbook）：</b>{' '}
            SM Δnet +3,047.4 与 build 分数 87.5% 从精确 tape 值重算正确
            （3,047.374 / 3,480.853 = 0.87547 → 一位小数 87.5%；deepseek 的
            87.55% / 3,047.3 用了取整中间值）、D-SMA50 +3.95% 吻合精确序列
            （$63,138 水位为 $ 取整）、SM-net / OI 交叉块数字（+6.53k 对 +6,528、
            −1,454.5 对 −1,455）是同一批 codex 核过值的取整粒度显示（long
            14,994.5、short 8,466.3、net 6,528.2、OI Δ −1,454.5）—— 无需改动。
            整体：<b>已过 codex 敌对式审计</b> —— 每条 CRITICAL、MAJOR 与 MINOR
            finding grep 核过 hits-after = 0；<code>tsc --noEmit</code> 退出 0。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体
            情况个性化。数字反映单一原子快照（2026-07-23 05:18Z）、
            provenance 在上方数据来源条带中按节披露；宏观 Tier-1 面板渲染
            2026-07-22 22:15Z（比快照早约 7h）、部分输入明确陈旧或待定
            并已标注。水位、规模与条件是交易台流程的示例、不是长期推荐。
            过去的相关性、γ 与仓位模式不绑定未来盘面。衍生品有全损风险、
            加杠杆下损失可超过保证金。
            <em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                第二根回落、smart money 守住了买盘 —— 但确认上收仍没来、funding
                翻空付多、cap 缓冲腰斩。scout 保持上膛。耐心。
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
            v2 · 2026-07-23 05:55Z · 05:18Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_&#123;2024,2025,2026&#125;.parquet
            （MA 矩阵子集）· FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
