import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-07-24 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-07-24',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-07-24' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260724() {
  await requireViewer('/zh/desk/2026-07-24');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-07-24 · v2</span>
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
              <span className="dn-big">$65,015</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−1.78%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-07-24 00:07Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-07-24 00:07Z（snapshot pin · 行 t=&ldquo;07-24 08:07&rdquo; BJ）</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · 审计时文件 tail = pin · `t` 字段是
                    BJ 本地（UTC+8）；00:07Z 锚是 BJ 08:07 07-24 · 实时盘面
                    一直在脚下追加、所以所有窗口都冻结到这根 pin 行 · 24h Δ 用
                    1,440 根一分钟间隔 / 1,441 采样行含端点的窗口
                    （基线 t=&ldquo;07-23 08:07&rdquo; 到 pin t=&ldquo;07-24 08:07&rdquo;）、
                    给出现货 −1.78% 与 OI +2.20% / +2,244.3 BTC · 24h 窗内
                    没有 cb_cvd / fut_cvd reset 印、所以端点原始 CVD Δ 按读即有效
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · header scan 2026-07-24 08:01 BJ / 00:01Z（较 00:07Z 锚约 6 分钟陈旧 · 未收盘 bar）</td>
                  <td className="dn-flag">
                    滚动 latest 文件人造物 · 逐字存档于
                    /opt/desk-note/snapshots/2026-07-24-0007/ · 扫描现货 $65,060、
                    24h −1.55%、H/L $66,284 / $64,636、qVol $8.14B（K 线口径、
                    独立于实时盘面的另一路源）· 所有收盘临时
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-24 00:00Z 快照</td>
                  <td className="dn-flag">
                    存档于 2026-07-24-0007 快照目录 · 较 00:07Z 锚滞后约 7 分钟 ·
                    872 合约 · Deribit idx $65,296 对 live 现货 $65,015（高 $281）·
                    24JUL 0.3DTE +31.67M 今日 08:00Z 结算（快照后约 8h）·
                    aggregate 取自 HTML 头条 total（+262.1M / 1% move）·
                    注意 非自洽面板：逐 expiry 汇总合计 +235.94M（= gex_summary.json
                    net_gex $235,937,990）、比头条低约 +26.16M —— 头条本次是较高的
                    那个数（与 07-23 缺口方向相反、那次是汇总更高）—— 已披露、
                    非解决 · 对 07-23 的 +261.9M 基本平、仍深度净多 γ
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-24 00:00Z
                  </td>
                  <td className="dn-flag">存档于 2026-07-24-0007 · 7d 1h bar · 22 资产 · 167 rows</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-23 22:16Z 渲染</td>
                  <td className="dn-flag">
                    存档于 2026-07-24-0007 · 较 00:07Z 锚渲染滞后约 1.9h
                    （本轮谱系最新的宏观读）· FRED Tier-1：10Y
                    nominal 4.67%（+4bp）、TIPS 2.39% EXTREME、HY OAS 2.68%（−1bp）、DXY
                    101.44、MOVE 76.3（+5.43）、Fed 净流动性 $5.917T（抽走 $69B）· Tier-3 CPI 行
                    月度/陈旧
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-07-24 00:06Z</td>
                  <td className="dn-flag">
                    较快照锚滞后约 1 分钟（close $64,955.60）· 偏移按 live 现货重算 ·
                    矩阵刻意从 btcusdt_1m_&#123;2024,2025,2026&#125;.parquet 子集算
                    （936 日 bar 含未收盘的 07-24 bar / 935 走完的日 · 134 周 bar）、
                    与完整 2019–2026 通配历史不同 · 所以 W-SMA150 / W-SMA200
                    不可计算（盘上 134 根周 bar）；200W 周期地板是来自
                    ma200w_trap_watch_state.json 的另一条谱系、不是这张矩阵
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
                    非编造 · 慢周度水位（滞后几天的重算对周度地板没关系）
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
              <span className="dn-v bull">+8.11%</span>
              <span className="dn-src">live · 原始 0.007407 × 1095 = +8.11% ann（多付空）· 24h 均值 +3.98% · 375 根钉在 +10.95% Binance 封顶（窗口 16:38Z–22:52Z 07-23）AND 466 根负行（首根 00:07Z 到末根 12:41Z 07-23 之间、离散块、07-23 备忘记的那段空付多冲洗）—— 24h 走了一整趟往返：空付多冲洗 → 多头拥挤封顶 → 进快照 +8.11%</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">往返 · 区间 −2.08% / +10.95%</span>
              <span className="dn-src">funding 开在空付多（07-23 冲洗）、窗口中段翻正、后半段 375 根钉 +10.95% 封顶、再松到 +8.11% · 24h 均值 +3.98% · 杠杆本子先洗掉拥挤多、又把它重新拥挤回封顶 —— 一根多头拥挤扩张、不是一次清库</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">+2.20%（+2,244.3 BTC）</span>
              <span className="dn-src">live · 102,251.2 → 104,495.5 BTC · 两根缩之后首次扩（07-22 −2.16%、07-23 −1.40%）—— 但这根是 −1.78% 的 24h 下印、taker/大单净卖、SM 加空、retail 拥挤多 · 这是派发 / 拥挤多扩张、不是新需求抬 OI</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bear">60.30 / 39.70</span>
              <span className="dn-src">live_db `mkt_long_pct` · 从 54.64 → 60.30（+5.66pt）跨 24h · 24h 区间 54.25 / 61.15 —— retail 现在是本轮谱系最拥挤多、在第三根回落印里追重夺、而 funding 在封顶付这批多 · 拥挤的那侧是多</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bull">+5.70k（净 LONG）</span>
              <span className="dn-src">live · long 15.28k − short 9.58k · SM 自 2026-07-21 06:36Z（BJ 14:36）翻多以来连续净多 · 对 07-23 备忘的 +6,528 是 −830 —— 登记买家撑过第三根回落印仍净多、但削了仓并加了空</span>
            </div>
            <div>
              <span className="dn-k">SM Δ · 24h</span>
              <span className="dn-v bear">+6,626.6 → +5,698.0（Δnet −928.6、削 14.0%）</span>
              <span className="dn-src">|Δ|/prior_net = 928.6 / 6,626.6 = 14.0% · Δlong +263.8 / Δshort +1,192.4 —— 多几乎没加而空长了近 5 倍、一根从多侧的净削 · 窗内没有一根离散步 |Δnet| &gt; 700 BTC（一根渐进泄、不是翻转）· SM net 24h 高 +7,582 @ BJ 19:56、低 +5,255 @ BJ 23:11</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">42.8% / 30.32%</span>
              <span className="dn-src">GEX IV 中位数 · 872 合约 · P/C 0.44（put/call OI 136,396 / 309,600）· 跨 N 合约的链中位数、不是可交易价差 · 30D close-to-close RV 30.32%（logret.std×√365×100、30 returns、parquet 最末 bar 00:06Z）</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+5.11%（在上方）</span>
              <span className="dn-src">flip $61,853 · 对 live 现货 $65,015.45（+5.11%；65,015.45/61,853.45 − 1 = 5.113%）/ GEX 文件 Deribit idx $65,295.9（+5.57%；65,295.9/61,853.45 − 1 = 5.566%）—— 两参考都正 · aggregate +262.1M 净多 γ（对 07-23 的 +261.9M 基本平、仍是本轮谱系最深的带）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                重夺的第一次真测失败 —— 07-23 收在 D-EMA50 cap 下方、cap 从支撑翻成头顶阻力
              </span>。BTC 报 <span className="dn-tag bear">$65,015</span> live、{' '}
              <span className="dn-tag bear">−1.78%</span> 在 24h —— 连续第三根负的 24h 印
              （07-24 未收盘）—— 而走完的 07-23 日收{' '}
              <span className="dn-tag bear">$65,069.60 印在 D-EMA50 $65,103 下方</span>、
              重夺开始以来第一根收在入场验证 cap 之下的日收、破了 scout 上膛所依的
              leg-1 cap 守。现货现在坐在{' '}
              <span className="dn-tag bear">D-EMA50 $65,103 下方 −0.13%</span> ——
              07-23 还有 +0.77% 支撑缓冲的那条水位、现在是头顶阻力。{' '}
              <span className="dn-signal">
                而且 OI 扩的是错的那种
              </span>：OI <span className="dn-tag bear">扩了 +2.20%（+2,244 BTC）</span>
              —— 两根缩之后首次扩 —— 但在一根下印上、taker/大单{' '}
              <span className="dn-tag bear">净卖</span>（24h taker-net −1,979、
              大单-net −2,200）、SM <span className="dn-tag bear">加了 +1,192 空</span>、
              retail 拥挤到 <span className="dn-tag bear">60.30% 多</span>
              （本轮谱系最拥挤）。那是派发 / 拥挤多扩张、不是 scout 要的需求推 OI。
              杠杆本子走了一趟<span className="dn-em">完整往返</span> —— funding 先冲洗
              空付多（466 根负行）、再钉 +10.95% Binance 封顶 375 根、再松到{' '}
              <span className="dn-tag bull">+8.11%</span> 进快照。{' '}
              <span className="dn-signal">
                所以 scout 在 cap 丢失上 ARMED → DEFERRED
              </span>。smart money 仍净多（<span className="dn-tag bull">+5,698</span>、
              自 07-21 翻多以来连续）—— 登记买家那条腿仍 TRUE —— 但它在破口里{' '}
              削了仓（Δnet −928.6、削 14.0%、加 +1,192 空）。地板守住：W-SMA200{' '}
              <span className="dn-tag bull">$63,078</span>、现货上方 +3.07%、三根周收在
              其上。dealer 本子仍深度正 γ（<span className="dn-tag bull">+262.1M</span>、
              flip $61,853、现货上方 +5.11%）、所以追空保持{' '}
              <span className="dn-em">站下</span>。本篇标定的是重夺的第一次失败测：
              gated 住多头的 cap 丢了、OI 长在派发不是需求、登记买家在削仓 ——
              上膛的耐心变成递延的耐心、但没有一样东西破了地板。
            </p>

            <p>
              BTC 报 <span className="dn-tag">$65,015</span> live、{' '}
              <span className="dn-tag bear">−1.78%</span> 在 24h —— 连续第三根回落印
              （现货比 07-23 备忘的 $65,634{' '}
              <span className="dn-tag bear">低 −0.94%</span>）、在一条{' '}
              <span className="dn-tag">$66,299 / $64,684</span> 区间里
              （高 @ BJ 08:27 07-23 / UTC 00:27 07-23 —— 实际是上一段的顶 —— 低
              @ BJ 02:00 07-24 / UTC 18:00 07-23）。盘面从 $66,299 高稳步泄低、
              往 $64,684 低、然后在其上方一点横盘进快照。{' '}
              <span className="dn-signal">周期地板在收盘口径上已定、仍守在该数的
              周收上</span>：trap-watch W-SMA200 地板是{' '}
              <span className="dn-tag bull">$63,078</span>、最后走完的周收
              （2026-07-19 $64,694.70）是连续第三根在其上方的周收（streak 起 07-05）、
              现货坐在{' '}
              <span className="dn-tag bull">地板上方 +3.07%</span>。但 MA
              矩阵现在只守着 <span className="dn-em">三根正日线</span>
              —— D-EMA50 翻到头顶：D-EMA20 $64,368（+1.01%）、
              D-SMA20 $64,260（+1.18%）、D-SMA50 $63,149（+2.96%）、
              D-SMA50 阶梯又几乎正坐在地板上（$63,149 对 $63,078、约 $70 支撑带）。
              头顶第一根现在是丢掉的 cap 本身 ——{' '}
              <span className="dn-tag bear">D-EMA50 $65,103（−0.13%）</span> ——
              然后{' '}
              <span className="dn-tag bear">D-EMA100 $67,917（−4.27%）</span>、
              任何重上膛上的工作首目标。{' '}
              <span className="dn-em">
                直读：地板守住、cap 没有。价格在走完的收上首次丢了 D-EMA50、
                OI 长在派发而非需求、而 smart money —— 仍净多 —— 在下腿里削仓。
                scout 的硬 SM 腿完整、但它的 cap 守腿现在 FALSE；交易台把 scout
                退回递延、等 cap 在一根上收上被重夺。
              </span>
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · SM 仍净多但在第三根回落印里削了仓（削 14.0%、加 +1,192 空）· funding 往返 空付多 → +10.95% 封顶 → +8.11% · OI 扩了但在派发上（taker/大单净卖、retail 拥挤 60.30% 多）· perp/现货 24h 都被给出</span>
            </h2>

            <p>
              <span className="dn-signal">
                登记买家仍净多但退了一步 —— smart money 在第三根回落里削了仓、
                加了空、而不是去守它
              </span>。SM net 是 <span className="dn-tag bull">+5,698</span>
              （long 15,277 − short 9,579）对 07-22 备忘 —— 对 07-23 备忘的 +6,528
              是逐篇 −830。跨 pin 的 24h 窗 Δnet 是{' '}
              <span className="dn-tag bear">−928.6</span>、在 Δlong{' '}
              <span className="dn-tag">+263.8</span> 与 Δshort{' '}
              <span className="dn-tag bear">+1,192.4</span> 上 —— 多几乎没加而空长了
              近五倍、一根从空侧驱动的净削（削分数 14.0% = 928.6 / 6,626.6、
              按 24h 开盘净 +6,626.6 算）。窗内{' '}
              <span className="dn-em">没有一根离散步 |Δnet| &gt; 700 BTC</span> ——
              这是一根渐进泄、不是翻转：SM net 24h 高{' '}
              <span className="dn-tag bull">+7,582 @ BJ 19:56 07-23 /
              UTC 11:56 07-23</span>、低 +5,255 @ BJ 23:11 07-23 / UTC 15:11 07-23、
              而 short_btc 堆到 24h 高{' '}
              <span className="dn-tag bear">9,819.8 @ BJ 06:46 07-24 /
              UTC 22:46 07-23</span>、从低 7,668.4 @ BJ 19:56、松到 9,579 进快照。
              这根净多自 <span className="dn-tag">2026-07-21 06:36Z（BJ 14:36）</span>
              翻多以来连续（此后没有一行净空）、所以登记买家腿仍 TRUE ——
              但它是一个削仓的买家、不是一个防守的买家。
            </p>

            <p>
              杠杆侧走了一趟往返、又把多头重新拥挤回去。{' '}
              <span className="dn-signal">
                funding 在 24h 里走了一整趟往返 —— 空付多冲洗、然后一根多头钉在
                +10.95% Binance 封顶、然后松到 +8.11%
              </span>：live <span className="dn-tag bull">+8.11% ann</span>（原始
              0.007407 × 1095）、24h 区间{' '}
              <span className="dn-tag">−2.08% / +10.95%</span>、24h 均值{' '}
              <span className="dn-tag">+3.98%</span>、带{' '}
              <span className="dn-tag bear">466 根负行</span>（07-23 那段空付多
              冲洗、离散块、首根 00:07Z 到末根 12:41Z 07-23 之间）AND{' '}
              <span className="dn-tag bear">375 根钉在 +10.95% 封顶</span>
              {' '}（窗口 16:38Z–22:52Z 07-23）。本子先洗掉 07-23 备忘标过的那批
              拥挤多、又把它重新拥挤回封顶 —— funding 现在又在税这批多、不是
              补贴它、和昨天的读法相反。OI Δ{' '}
              <span className="dn-tag bear">+2,244.3 BTC（+2.20%）</span>跨 24h ——{' '}
              <span className="dn-em">OI 三天来首次扩</span>
              （102,251 → 104,495；07-22 −2.16%、07-23 −1.40%）—— 但这次扩是派发、
              不是需求：它印在一根 −1.78% 的 24h 下印上、taker/大单净卖、SM 加
              +1,192 空、retail 拥挤到 60.30% 多（见窗口流）。retail{' '}
              <span className="dn-tag bear">mkt_long_pct 60.30%</span>
              从 54.64% 重拥挤上来（+5.66pt、24h 区间 54.25 / 61.15）——
              本轮谱系最拥挤多、在第三根回落印里追重夺。perp
              在快照对现货交易一道{' '}
              <span className="dn-tag bear">−$49.56 折价</span>
              （1h 均 −$50.09、4h −$50.92、24h −$44.05、区间 −$122.21 / +$33.23 ——
              深且持续被给出、只短暂沾过升水）。1 分钟 aggressor skew 快照{' '}
              <span className="dn-tag bear">−10.6</span>（1h 均 −9.98、24h −2.75、
              区间 −49.60 / +41.60）—— 进快照偏卖。{' '}
              <span className="dn-em">
                OI 扩 + funding 重拥挤回封顶 + retail 60.30% 多 + SM 加空：
                这是一根拥挤多派发、正好是 scout 要的新需求 OI-up 的反面。
                scout 仍需要的干净信号是一根重夺 D-EMA50 的上收、OI 扩在买家上、
                不是一批拥挤多被派发进去。
              </span>
            </p>

            <p>
              窗口流是<em>一根派发日 —— OI 长而 aggressor 与大单侧在卖、
              现货只在最后几小时勉强横平</em>。24h：价格{' '}
              <span className="dn-tag bear">−1.78%</span>、OI{' '}
              <span className="dn-tag bear">+2,244 BTC</span>、现货 CVD{' '}
              <span className="dn-tag">Δ −20.4</span>（现货大致平）、期货 CVD{' '}
              <span className="dn-tag bear">Δ −1,979</span>、大单{' '}
              <span className="dn-tag bear">−2,200 BTC / 879 笔</span>、taker-net{' '}
              <span className="dn-tag bear">−1,979</span> ——{' '}
              <span className="dn-em">
                perp/taker 与大单侧在 24h 里硬卖、而 OI 升、现货落：升 OI 在净
                aggressor 卖上、进一根下印、是新空供给 / 派发、与 SM 加 +1,192 空
                一致、不是需求
              </span>。4h（进快照）：价格{' '}
              <span className="dn-tag">−0.01%</span>、OI{' '}
              <span className="dn-tag bull">−557 BTC</span>、现货 CVD{' '}
              <span className="dn-tag bull">Δ +454</span>、期货 CVD{' '}
              <span className="dn-tag bull">Δ +106</span>、大单{' '}
              <span className="dn-tag bull">+340 BTC / 138 笔</span>、taker-net{' '}
              <span className="dn-tag bull">+106</span> —— 一根晚到的 bid 把现货稳平、
              OI 落下（往底部有些回补）。1h：价格{' '}
              <span className="dn-tag bear">−0.30%</span>、OI{' '}
              <span className="dn-tag bull">−177 BTC</span>、现货 CVD{' '}
              <span className="dn-tag bear">Δ −579</span>、期货 CVD{' '}
              <span className="dn-tag bear">Δ −195</span>、大单{' '}
              <span className="dn-tag bull">+58 BTC / 35 笔</span>、taker-net{' '}
              <span className="dn-tag bear">−195</span> ——{' '}
              <em>现货进快照又被给出（−579 现货 CVD）、OI 仍在落</em>。
              4h 底显了 bid、但末小时转现货偏重 —— scout 要的那根确认需求 step-in
              没在这根收里印、而当日主流是一根长了 OI 的 24h aggressor-卖派发。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · 中周期翻了 —— 8h 与 12h 金叉 → 死叉（都在云上、12h 刚印）· 净读 多周期共振偏空 / 反弹偏卖（1 long / 3 short / 6 neutral）· 3d/1w 底背离簇 + 1M ⚡TD9 BUY 是仅剩的多头偏移 · 快周期 sub-47 RSI（30m 46.9、1h 42.7）</span>
            </h2>

            <p>
              <span className="dn-signal">
                中周期翻了 —— 07-23 扫描带的 8h 与 12h 金叉这次都翻成死叉、
                引擎的净读转成反弹偏卖
              </span>。8h <span className="dn-tag bear">金叉 → 死叉
              （水上死叉 2b）</span>、虽仍在云上（RSI 51.0、云上 45b）、而 12h{' '}
              <span className="dn-tag bear">金叉 → 死叉（水上死叉刚印）</span>、
              也仍在云上（RSI 53.7、云上 20b）—— 近周期趋势引擎翻了、即便价格
              仍守在中周期云上。净读现在是{' '}
              <span className="dn-tag bear">多周期共振偏空 · 反弹偏卖</span>、
              整体 <span className="dn-tag bear">1 long / 3 short / 6 neutral</span>
              跨 10 个 TF（对 07-23 的 2 long / 2 short / 6 neutral）。仍在的多头
              偏移是更高 TF{' '}
              <span className="dn-tag bull">底背离簇（3d / 1w BULL reg）</span>
              —— 3d 水下金叉 4b、1w 水下金叉刚印 —— 与持续的{' '}
              <span className="dn-tag bull">1M ⚡ TD9 BUY</span>（07-23 那根 30m TD9
              BUY 已滚掉；1M 现在是仅剩的 TD9 BUY）。快周期比 07-23 冷了 ——
              15m RSI 50.6、30m 46.9、1h 42.7 —— 带 15m/30m/1h 仍守水下金叉
              （一根中周期翻空下的快周期反弹结构）。扫描净 regime：{' '}
              <span className="dn-em">5/9 cycle-reversal（JT&lt;0）、
              极慢周期偏均值回归 / 偏反弹、但中周期趋势翻空</span>。{' '}
              <span className="dn-em">
                帮确认过重夺的那些中周期金叉没了；3d/1w 底背离与 1M TD9 BUY 是
                仅剩的结构多头 tell、而头部判决是反弹偏卖。比 07-23 明确深一档 ——
                结构现在与失败的 cap 测一致。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">65,060</td><td className="num">50.6</td><td className="bull">金叉（水下）27b</td><td className="neut">云内 65.0–65.2k 7b</td><td>Buy 3</td><td>BEAR hid · BEAR reg · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">65,050</td><td className="num">46.9</td><td className="bull">金叉（水下）10b</td><td className="bear">云下 ↑65.7k 47b</td><td>Buy 2</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>1h</td><td className="num">65,060</td><td className="num">42.7</td><td className="bull">金叉（水下）3b</td><td className="bear">云下 ↑66.0k 12b</td><td>Buy 1</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">65,060</td><td className="num">45.7</td><td className="bear">死叉（水上）9b</td><td className="bull">云上 ↓64.2k 39b</td><td>Buy 7</td><td>—</td></tr>
                <tr><td>8h</td><td className="num">65,060</td><td className="num bull">51.0</td><td className="bear">死叉（水上）2b</td><td className="bull">云上 ↓63.6k 45b</td><td>Buy 6</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">65,050</td><td className="num bull">53.7</td><td className="bear">死叉（水上）刚印</td><td className="bull">云上 ↓62.5k 20b</td><td>Buy 3</td><td>BEAR reg</td></tr>
                <tr><td>1d</td><td className="num">65,040</td><td className="num bull">53.8</td><td className="neut">—</td><td className="neut">云内 62.3–70.2k 4b</td><td>Buy 1</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>3d</td><td className="num">65,040</td><td className="num">46.2</td><td className="bull">金叉（水下）4b</td><td className="bear">云下 ↑74.6k 17b</td><td>Sell 7</td><td>BULL reg</td></tr>
                <tr><td>1w</td><td className="num">65,040</td><td className="num">40.2</td><td className="bull">金叉（水下）刚印</td><td className="bear">云下 ↑97.1k 25b</td><td>Sell 2</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">65,040</td><td className="num">44.3</td><td className="neut">—</td><td className="bull">云上 ↓47.0k 29b</td><td>⚡ TD9 BUY</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html header scan 2026-07-24 08:01 BJ /
                    00:01Z（较 00:07Z 锚约 6 分钟陈旧；滚动 latest 文件；
                    逐字存档于 /opt/desk-note/snapshots/2026-07-24-0007/）。
                    头部告警：{' '}
                    <em>更高 TF 底背离簇（3d/1w）</em>、{' '}
                    <em>⚡ TD9 BUY 1M</em>、整体跨 10 个 TF 是 1 long / 3 short /
                    6 neutral、净读 多周期共振偏空 · 反弹偏卖、5/9 cycle-reversal
                    regime（JT&lt;0）。对 07-23 的关键转变：8h 与 12h 都翻了
                    金叉 → 死叉（12h 刚印）。扫描现货 $65,060、24h −1.55%、
                    H/L $66,284 / $64,636、qVol $8.14B（K 线口径；00:07Z 的实时
                    盘面读现货 $65,015、24h −1.78%、H/L $66,299 / $64,684 ——
                    另一路独立源、非冲突）。收盘为未收盘 bar；每根 TF 收盘前
                    把每个值按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵确认 cap 现在丢了、翻到头顶。现货 $65,015 只守着{' '}
              <span className="dn-em">三根正日线</span>、按远近排序：{' '}
              <span className="dn-tag bull">D-EMA20 $64,368（+1.01%）</span> ——
              现在最近支撑 ——{' '}
              <span className="dn-tag bull">D-SMA20 $64,260（+1.18%）</span>、和{' '}
              <span className="dn-tag bull">D-SMA50 $63,149（+2.96%）</span>、
              后者几乎正坐在{' '}
              <span className="dn-tag bull">W-SMA200 地板 $63,078（+3.07%）</span>
              上 —— 一道近 $63,100 的约 $70 支撑阶梯。头顶第一根现在是丢掉的 cap：{' '}
              <span className="dn-tag bear">D-EMA50 $65,103（−0.13%）</span> ——
              07-23 还在现货下方 +0.77% 缓冲的入场验证水位、现在是头顶阻力、
              现货在其下 −0.13%。然后按顺序：{' '}
              <span className="dn-tag bear">D-EMA100 $67,917（−4.27%）</span>
              （任何重上膛上的工作首目标）、{' '}
              <span className="dn-tag bear">W-SMA20 $69,817（−6.88%）</span>、{' '}
              <span className="dn-tag bear">D-SMA150 $69,825（−6.89%）</span>、{' '}
              <span className="dn-tag bear">D-SMA100 $69,906（−7.00%）</span>、{' '}
              <span className="dn-tag bear">W-EMA20 $69,996（−7.12%）</span>、{' '}
              <span className="dn-tag bear">D-EMA150 $70,858（−8.25%）</span>、{' '}
              <span className="dn-tag bear">D-SMA200 $72,419（−10.22%）</span>、{' '}
              <span className="dn-tag bear">W-EMA200 $72,926（−10.85%；种子）</span>、{' '}
              <span className="dn-tag bear">D-EMA200 $73,691（−11.77%）</span>。
              更高更远、已弃用：W-EMA150 $76,750（−15.29%；种子）、
              W-EMA50 $78,991（−17.69%）、W-EMA100 $80,324（−19.06%）、
              W-SMA50 $85,398（−23.87%）、W-SMA100 $88,495（−26.53%）。{' '}
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-07-24 00:06Z（close $64,955.60）；
                偏移按 live 现货 $65,015.45 重算。显示的 MA 水位按 $ 取整、偏移
                用精确序列值算。矩阵刻意从
                btcusdt_1m_&#123;2024,2025,2026&#125;.parquet 子集算
                （936 日 bar 含未收盘的 07-24 bar / 935 走完的日 · 134 周 bar）、
                与页脚 glob 本会暗示的完整 2019–2026 通配历史不同；200W 周期地板
                是来自 ma200w_trap_watch_state.json 的另一条谱系。W-SMA150 /
                W-SMA200 不可计算 —— 此子集有 134 根周 bar、不够这两个窗；
                W-EMA150 与 W-EMA200 从可用历史 seed、并按种子值披露。日线收盘：
                07-19 $64,694.70、07-20 $65,224.80、07-21 $66,522.40、07-22
                $66,082.00、07-23 $65,069.60（第一根收在 D-EMA50 cap 下方）、
                07-24（未收盘）$64,955.60 —— gated 住 scout 的 cap 守现在在一根
                走完的收上破了。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子基本 FLAT 在 +262.1M 净多 γ（对 +261.9M、仍是本轮谱系最深带）· flip $61,853、现货在上方 +5.11% · $70k/$72k call 墙压头顶 · strip 非全正（27JUL −1.43M + $60k 墙）但无近端负放大器 · 31JUL +135.74M 主导</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子几乎没动、仍深度净多 —— 失败的 cap 测没改变 γ regime
              </span>。aggregate GEX 是{' '}
              <span className="dn-tag bull">+262.1M / 1% move</span>（GEX 面板的
              头条 total；对 07-23 的 +261.9M 基本平 —— 一根 +$0.2M 漂移、仍是
              本轮谱系最深净多 γ 带、阻尼 —— dealer 买回落、卖冲高）{' '}
              <span className="dn-em">
                —— 来源注意：面板的逐 expiry 汇总合计 +235.94M
                （= gex_summary.json net_gex $235,937,990）、比这头条低约 +26.16M
                （见下方 strip）、一根非自洽的来源面板；注意缺口符号对 07-23 翻了
                （那次汇总比头条高约 +21.56M、这里低约 +26.16M）—— aggregate
                按 HTML 头条 +262.1M 报
              </span>。0-γ flip 是{' '}
              <span className="dn-tag">$61,853</span>、现货 $65,015 坐在{' '}
              <span className="dn-tag bull">flip 上方 +5.11%</span> 现货口径
              （65,015.45 / 61,853.45 − 1 = +5.113%）；GEX 文件的 Deribit-index
              参考 $65,296（比 live 现货高 $281）读{' '}
              <span className="dn-tag bull">flip 上方 +5.57%</span>
              （65,295.9 / 61,853.45 − 1 = +5.566%）—— 两参考都正、现货深在正 γ
              场里（到 flip 的缓冲从 07-23 的 +6.19% 随现货泄收窄、但仍深）。
              顶部 γ 墙：{' '}
              <span className="dn-tag bull">$70k +73.71M</span>（最重、头顶
              磁石/cap；39,477 call OI）、{' '}
              <span className="dn-tag bull">$72k +48.95M</span>、{' '}
              <span className="dn-tag bull">$66k +33.47M</span>（刚在头顶）、{' '}
              <span className="dn-tag bull">$68k +20.02M</span>、{' '}
              <span className="dn-tag bull">$67k +18.69M</span>、{' '}
              <span className="dn-tag bull">$65k +18.35M</span>（正在现货处）、{' '}
              <span className="dn-tag bear">$60k −14.70M</span>（唯一负墙 ——
              崩盘 put 残余、18,210 put OI）、{' '}
              <span className="dn-tag bull">$80k +10.42M</span>、{' '}
              <span className="dn-tag bull">$69k +10.09M</span>、{' '}
              <span className="dn-tag bull">$71k +7.75M</span>。{' '}
              <span className="dn-em">
                现货钉在 $65k 支撑墙、上方 $66k–$68k 正带、$70k/$72k call 是重
                头顶 cap；唯一负 γ 是 $60k 崩盘 put 残余、远在下方。一本双向阻尼
                的本子 —— 它会淡化追进 $70k call 墙、并在往 $65k / flip 回落时接盘
              </span>。expiry strip 本次<span className="dn-em">不</span>全正 ——
              有一根小 27JUL −1.43M 与 $60k 墙 —— 但<span className="dn-em">没有
              近端负放大器</span>：24JUL 0.3DTE +31.67M（今日 08:00Z 结算、
              快照后约 8h）、25JUL 1.3 +1.82M、26JUL 2.3 +2.43M、27JUL 3.3{' '}
              <span className="dn-tag bear">−1.43M</span>（小负、非放大器）、
              31JUL 7.3 <span className="dn-tag bull">+135.74M</span>（主导）、
              7AUG 14.3 +30.57M、14AUG 21.3 +1.47M、28AUG 35.3 +21.82M、
              25SEP 63.3 +5.62M、25DEC 154.3 +4.62M、26MAR27 245.3 +1.09M、
              25JUN27 336.3 +0.53M —— 那根小 27JUL 负远不够大到给一根下腿供燃料。
              没有放大器存在去喂一根新空。{' '}
              <span className="dn-em">
                来源面板注意：这些逐 expiry 桶合计 +235.94M（对上 gex_summary.json
                net_gex $235,937,990）、比本篇报的 GEX 面板 +262.1M 头条 aggregate
                低约 +26.16M / −10.0%。头条 total 与逐 expiry 汇总在来源面板里
                不自洽 —— 这道背离已披露、非在上游解决（且缺口符号对 07-23 翻了）；
                本篇用 HTML 头条 +262.1M 作 aggregate、不把 strip 组成当作对它的
                自洽核算。两个数字都深度净多 γ；符号与阻尼读法不因这道缺口改变。
              </span>
            </p>

            <p>
              IV 中位数横跨 872 合约是{' '}
              <span className="dn-tag">42.8%</span> 对 30D close-to-close RV{' '}
              <span className="dn-tag">30.32%</span> —— 链级溢价{' '}
              <span className="dn-tag">~+12.5pt</span>、put/call OI 比{' '}
              <span className="dn-tag">0.44</span>（136,396 / 309,600 —— call 偏重）。
              是 N 合约的链中位数、<span className="dn-em">不是</span>可交易价差；
              expiry- / strike-level vega、skew、期限结构仍未载入；vol 读法保持
              framework only。今日 872 合约（从 07-23 的 842 升）。RV 方法：30D
              close-to-close、logret.std × √365 × 100、用最末 30 根日 log return
              （= 连续 31 根日收）、锚自 parquet 最末 bar 2026-07-24 00:06Z；
              31-return 读 31.39%、30-return 页面值 30.32%。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · 利率/美元更紧（10Y 4.67% +4bp、TIPS 2.39% EXTREME、DXY 101.44）对信用/流动性松（HY OAS 2.68% RISK-ON、Fed 净流动性 $5.917T 松 —— 抽走 $69B）· reclaim-long 利率筛 FALSE（10Y &gt; 4.55%、紧到 4.67%）· MOVE +5.43 到 76.3 · 跨资产 IDIOSYNCRATIC |r| 0.216 · BTC 领跑股票/megacap 簇（+1.89% 7d 对 NQ −1.17%、+3.06pt）但能源/金属跑赢它（CL +16.40%、BRENT +12.13%、URNM +5.05%、SILVER +3.18%）</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观面保持分裂 —— 利率与美元更紧、信用与流动性松 —— 利率腿再紧
                4bp 对着 scout、Fed 流动性抽走 $69B
              </span>。面板渲染 2026-07-23 22:16Z、比快照早约 1.9h（本轮谱系最新的
              宏观读）。US 10Y nominal{' '}
              <span className="dn-tag bear">4.67%（+4.0bp）</span>、regime z{' '}
              <span className="dn-tag bear">+2.46</span>、偶发 z{' '}
              <span className="dn-tag">+2.15</span> —— EXTREME RISK-OFF、{' '}
              <span className="dn-em">在 4.55% reclaim-long 闸上方</span>
              （07-23 是 4.63% —— 再紧 4bp）。10Y TIPS real{' '}
              <span className="dn-tag bear">2.39%（+2.0bp）</span>、z{' '}
              <span className="dn-tag bear">+2.87</span> —— EXTREME RISK-OFF。
              5Y5Y BE 通胀 <span className="dn-tag">2.26%（+2.0bp）</span>。HY OAS{' '}
              <span className="dn-tag bull">2.68%（−1.0bp）</span>、regime z{' '}
              <span className="dn-tag bull">−1.26</span>、偶发 z{' '}
              <span className="dn-tag bull">−0.74</span> —— RISK-ON、当日更紧、
              仍<span className="dn-em">差 10bp</span> 到其 2.78% put-spread
              re-grow 闸（离闸再远一个 bp）。MOVE 债波{' '}
              <span className="dn-tag bear">76.3（+5.43）</span> —— 跳了、仍在
              中性带。DXY{' '}
              <span className="dn-tag bear">101.44（+0.30）</span>、regime z{' '}
              <span className="dn-tag bear">+2.30</span> —— EXTREME RISK-OFF。
              Fed 净流动性{' '}
              <span className="dn-tag bear">$5.917T（−0.069T）</span>、regime z{' '}
              <span className="dn-tag">+0.56</span> —— 抽走 $69B、标从
              EXTREME RISK-ON 降到松。USD/JPY{' '}
              <span className="dn-tag">163.83（+0.75）</span>；US-JP 10Y
              利差 <span className="dn-tag">2.00%（+4.0bp）</span> —— 中性。NFCI
              −0.552（−0.01、RISK-ON）。{' '}
              <span className="dn-em">
                净：reclaim-long 利率筛（10Y &lt; 4.55%）在 4.67% FALSE、再紧
                4bp —— 一记 live 的 scout 逆风、现在叠加 cap 丢失与 Fed 流动性抽走。
                put-spread re-grow 闸是两腿、BOTH 必到 —— 10Y 腿触发（4.67% &gt;
                4.53%）但 HY OAS 2.68% 差 10bp 到 2.78%、所以单一利率腿不是对冲
                触发。利率/美元紧、信用/流动性松：框住整轮谱系的宏观交叉流、
                现在偏向风险-off 一档（利率升、流动性抽走）。
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
                <tr><td>US 10Y nominal</td><td className="num">4.67%</td><td className="num bear">+4.0bp</td><td className="num bear">+2.46</td><td className="num">+2.15</td><td className="bear">紧 · EXTREME RISK-OFF</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.39%</td><td className="num bear">+2.0bp</td><td className="num bear">+2.87</td><td className="num">+1.77</td><td className="bear">紧 · EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.26%</td><td className="num">+2.0bp</td><td className="num">+0.49</td><td className="num">+2.33</td><td className="neut">无标</td></tr>
                <tr><td>HY OAS</td><td className="num">2.68%</td><td className="num bull">−1.0bp</td><td className="num bull">−1.26</td><td className="num bull">−0.74</td><td className="bull">松 · RISK-ON · 距闸 10bp</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.552</td><td className="num">−0.01</td><td className="num bull">−1.51</td><td className="num bull">−1.71</td><td className="bull">松 · RISK-ON</td></tr>
                <tr><td>MOVE 债波</td><td className="num">76.3</td><td className="num bear">+5.43</td><td className="num">+0.24</td><td className="num">+1.63</td><td className="neut">中性 · 跳了</td></tr>
                <tr><td>DXY</td><td className="num">101.44</td><td className="num bear">+0.30</td><td className="num bear">+2.30</td><td className="num">+1.04</td><td className="bear">硬 · EXTREME RISK-OFF</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.917T</td><td className="num bear">−0.069T</td><td className="num">+0.56</td><td className="num bear">−2.47</td><td className="neut">松 · 抽走 $69B · 标降级</td></tr>
                <tr><td>USD/JPY</td><td className="num">163.83</td><td className="num">+0.75</td><td className="num bear">+1.76</td><td className="num">+2.21</td><td className="neut">日元更软</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">2.00%</td><td className="num bear">+4.0bp</td><td className="num">−0.39</td><td className="num">+2.15</td><td className="neut">中性</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp（月度）</td><td className="num bear">+2.42</td><td className="num">+1.09</td><td className="stale">月度 · 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、汇总 00:00Z ——{' '}
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。
              非对角线均值 <span className="dn-tag">|r| 0.216</span>{' '}
              （较 07-23 的 0.202 升、但仍在{' '}
              <span className="dn-em">IDIOSYNCRATIC</span> 区段、在 0.25 阈值
              下方）。BTC 列出的对齐：NQ{' '}
              <span className="dn-tag">+0.532</span>（顶）、SP500{' '}
              <span className="dn-tag">+0.449</span>、COPPER{' '}
              <span className="dn-tag">+0.388</span>、SILVER{' '}
              <span className="dn-tag">+0.382</span>、PLAT{' '}
              <span className="dn-tag">+0.356</span>、GOLD{' '}
              <span className="dn-tag">+0.355</span>、TSLA{' '}
              <span className="dn-tag">+0.351</span>、NVDA{' '}
              <span className="dn-tag">+0.317</span>、JP225{' '}
              <span className="dn-tag">+0.303</span>。7d 表现又是那条最响的线、
              但排名比一句无限定的「RS 领头」更窄：{' '}
              <span className="dn-tag bull">BTC +1.89%</span> 领跑{' '}
              <span className="dn-em">股票 / megacap 风险簇</span> —— NQ{' '}
              <span className="dn-tag bear">−1.17%</span>、SP500{' '}
              <span className="dn-tag bear">−1.27%</span>、JP225{' '}
              <span className="dn-tag bull">+1.09%</span>、且 megacap 硬跌
              （TSLA <span className="dn-tag bear">−16.49%</span>、GOOGL{' '}
              <span className="dn-tag bear">−10.12%</span>、META{' '}
              <span className="dn-tag bear">−8.56%</span>、AMZN{' '}
              <span className="dn-tag bear">−6.46%</span>、MSFT{' '}
              <span className="dn-tag bear">−4.39%</span>、AAPL{' '}
              <span className="dn-tag bear">−3.95%</span>）、NVDA{' '}
              <span className="dn-tag bull">+1.09%</span> 是唯一绿的大科技 ——{' '}
              <span className="dn-em">
                但它不是 22 资产 strip 的顶
              </span>：能源与多数金属在 7d 上跑赢 BTC（CL{' '}
              <span className="dn-tag bull">+16.40%</span>、BRENT{' '}
              <span className="dn-tag bull">+12.13%</span>、URNM{' '}
              <span className="dn-tag bull">+5.05%</span>、SILVER{' '}
              <span className="dn-tag bull">+3.18%</span>、NGAS{' '}
              <span className="dn-tag bull">+1.88%</span>、GOLD{' '}
              <span className="dn-tag bull">+1.36%</span>、COPPER{' '}
              <span className="dn-tag bull">+0.63%</span>）、PLAT{' '}
              <span className="dn-tag bear">−1.39%</span> 与 PALL{' '}
              <span className="dn-tag bear">−0.37%</span> 是红的金属。{' '}
              <span className="dn-em">
                所以可辩护的主张很窄：BTC 领跑股票/megacap 风险簇、对 NQ +3.06pt
                （+1.89% 对 −1.17%）、对着一个广泛在抛的 TradFi 股票复合体 ——
                驱动这轮谱系的「内生于 crypto」读法对股票仍在 —— 但 BTC 不是
                整条跨资产 strip 的相对强度领头；能源与金属复合体跑赢了它。这是
                一记对股票相对的 tell、不是无限定的 RS 输入、也不作独立交易本子
                理由用。相关性坐在 idiosyncratic、所以宏观交叉流对价格的咬合
                小于对交易框架利率闸的咬合
              </span>。JGB 月度 2.67% 带 EXTREME RISK-OFF 月度标 —— 不依赖。
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · scout 移 ARMED → DEFERRED（cap 在走完的收上丢、OI 长在派发、SM 削仓）· 空 STOOD DOWN（最深正 γ、无近端负放大器）· put-spread 不重长（单一 10Y 腿）· 本子为一根 D-EMA50 重夺上收 FLAT</span>
            </h2>

            <p>
              <span className="dn-signal">
                07-23 备忘在 smart money 守住买盘时给 scout 上膛、说上 live 闸是
                一根守住 D-EMA50 且 OI 企稳的确认上收 —— 并设了一个解除盯位：
                下一根回落收在 D-EMA50 下方会把 scout 推回递延。那个解除发火了
              </span>。07-23 日收 $65,069.60 印在 D-EMA50 cap $65,103 下方 ——
              重夺里第一根收在 cap 之下的走完日收 —— 破了 scout 上膛所依的 cap
              重夺腿、而 07-24 盘面是第三根回落印、现货现在在 cap 下方 −0.13%。
              登记买家腿仍 TRUE —— SM 守住净多（+5,698）—— 但它削了 14.0%、
              在破口里加了 +1,192 空、所以连活着的那条腿也弱了。scout 移{' '}
              <span className="dn-em">ARMED → DEFERRED</span>。触发发不了火：
              cap 丢了、OI 扩在派发（taker/大单净卖、retail 60.30% 多）而非需求、
              funding 往返回到 +10.95% 封顶、reclaim-long 利率筛 FALSE（10Y 4.67%）。
              今天本子是：无空、scout DEFERRED（重上膛要 D-EMA50 在一根上收上被
              重夺、OI 在买家上掉头向上）、无新对冲 —— FLAT。地板守住（$63,078
              上方 +3.07%）、dealer 本子仍深度正 γ、所以这是一次定住地板之上的
              失败 cap 测、不是破。
            </p>

            <div className="dn-trade">
              <span className="dn-side short">多 · scout · DEFERRED · cap 重夺腿现在 FALSE（07-23 收在 D-EMA50 下方）· SM 腿仍 TRUE 但在削仓 · 重上膛要一根 D-EMA50 重夺上收</span>
              <div className="dn-trade-name">
                重夺多 scout —— 退回递延：重夺对 D-EMA50 cap 的第一次真测在一根走完的收上失败、OI 长在派发不是需求、登记买家在削仓
              </div>
              <div className="dn-thesis">
                scout 挂在两条硬腿加一根确认印上：(1) 价格在收盘口径上守住
                D-EMA50 入场验证 cap、(2) SM 确认作登记买家、理想是净多。腿 1
                现在 <em>FALSE</em> —— 07-23 收 $65,069.60、在 D-EMA50 $65,103
                下方、重夺里第一根收在 cap 之下的走完收、而 07-24 盘面延成第三根
                回落印、现货在其下 −0.13%。腿 2 仍 TRUE 但弱了 —— SM 守住净多
                （+5,698）却削了 14.0%（Δnet −928.6）、在破口里加了 +1,192 空。
                确认印从没来：整段上膛期 OI 从没在需求上扩 —— 这根它终于扩了
                （+2.20%）、但在派发上（24h taker-net −1,979、大单-net −2,200、
                retail 拥挤到 60.30% 多、funding 往返回到 +10.95% 封顶）、正是
                scout 要的买家 step-in 信号的反面。cap 丢了、scout 不能再挂在一道
                守住的 cap 上；它退回 DEFERRED。重上膛是结构性的、不是一根确认印：
                D-EMA50 $65,103 必须在一根 UP-收上被重夺、OI 扩在买家上（不是一批
                拥挤多）。地板守住、dealer 本子阻尼下方、所以这是一次定住地板之上
                的递延 —— 耐心、不是防守。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v bear">DEFERRED · cap 重夺腿在 07-23 收在 D-EMA50 下方上破了 · 无仓、无 live 触发</span></div>
                <div><span className="dn-lvl-k">重上膛触发</span><span className="dn-lvl-v bull">一根日收回到 &gt; D-EMA50 $65,103 且是 UP-收（24h ≥ 0）AND OI 扩在买家上（Δ24h OI ≥ 0 伴 taker/大单净买、不是拥挤多派发）—— 重建腿 1；SM 须保持净多以守腿 2</span></div>
                <div><span className="dn-lvl-k">上 live（重上膛后）</span><span className="dn-lvl-v">重上膛印出时、scout long 0.2R · 目标 $67,917（D-EMA100）、止损 $63,078</span></div>
                <div><span className="dn-lvl-k">止损（参考）</span><span className="dn-lvl-v bear">1h 收 &lt; $63,078（W-SMA200 定住的周期地板 / D-SMA50 $63,149 阶梯 —— 一根收在其下彻底结束重夺读法）</span></div>
                <div><span className="dn-lvl-k">目标（重上膛上）</span><span className="dn-lvl-v">$67,917（D-EMA100、首目标）然后 $69,817 / $69,825（W-SMA20 / D-SMA150）进 $70k +73.7M call 墙</span></div>
                <div><span className="dn-lvl-k">size（重上膛上）</span><span className="dn-lvl-v">0.2R · 在 D-EMA100 平半；$70k call 墙是 runner 的结构性 cap</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R（参考、重上膛上）：</b>触发 ~$65,103（D-EMA50）、止损
                $63,078（地板）= ~$2,025 风险；首目标 $67,917 = ~$2,814 回报 ≈
                1.39:1 —— 与 07-23 scout 的 R/R 不变。<b>硬规则：</b>不要在一根
                下收上、在一根由 aggressor 卖 / 拥挤多派发驱动的 OI 扩上、或在
                D-EMA50 下方重上膛或上 live —— cap 须在一根上收上被重夺、买家在
                OI 背后、不是一批拥挤多。利率筛在 4.67%（再紧 4bp）与 Fed 流动性
                抽走 $69B 是标注的逆风；下方的新风险是地板 $63,078、破它彻底结束
                重夺论。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">空 · STOOD DOWN · 本轮谱系最深正 γ 带（+262.1M）· 无近端负放大器 · SM 仍净多 · 地板守住</span>
              <div className="dn-trade-name">
                追空 —— 保持站下：往一本 +262.1M 正 γ 本子、SM 仍净多、无近端负放大器、地板守住上做空、即便在一次失败 cap 测上、也是在打 dealer 阻尼
              </div>
              <div className="dn-thesis">
                追空整轮谱系都站下、即便在一次失败 cap 测上也仍偏一边。dealer
                本子基本平在 +262.1M（对 +261.9M）、本轮谱系最深净多 γ 带、flip
                坐在现货下方 $3,162（+5.11%）、而虽然 strip 不全正（一根小
                27JUL −1.43M 与 $60k 崩盘 put 墙）、也没有近端负放大器 —— 下腿的
                燃料。SM 仍净多、W-SMA200 地板在下方 +3.07% 守住、且 BTC 在 7d 上
                仍领跑股票/megacap 簇（虽然能源/金属跑赢它）。这里做空打 dealer
                阻尼、会要地板破 AND 一根新负放大器出现 —— 两者都不在。失败的
                cap 测是递延多头的理由、不是往一本正 γ 本子里追空的理由。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">站下 · 无仓 · 正 γ 本子 + SM 多 + 地板守住 + 无负放大器都反对淡化</span></div>
                <div><span className="dn-lvl-k">重武装触发（未激活）</span><span className="dn-lvl-v bear">1d 收 &lt; $63,078（W-SMA200 地板）AND strip 上出现一根新近端负 γ 块 —— 两者都不在（strip 由 31JUL +135.7M 主导；只有一根小 27JUL −1.43M）</span></div>
                <div><span className="dn-lvl-k">不要</span><span className="dn-lvl-v bear">不在本轮谱系最深正 γ 带里、SM 净多且地板守住时做空 —— 一道守住地板之上丢掉的 cap 不是空信号</span></div>
              </div>
              <div className="dn-gating">
                <b>Gating：</b>下腿的空头有效、是因为一根近端负 γ 大块把动作
                放大进到期。这条 strip 上没这种块 —— 唯一近端负是一根小
                27JUL −1.43M、小一个数量级、放大不了。重武装空要求周期地板彻底
                破（$63,078 一根日收）AND 一根新负放大器出现 —— 一根结构性 regime
                变化、不是在正 γ 场里淡化一次失败 cap 测。OI 扩在派发是对多头的
                一记警告、不是对空头的绿灯。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 宏观尾 · put-spread re-grow 闸 —— 单一腿触发（10Y）、无新对冲</span>
              <div className="dn-trade-name">
                下行 put-spread —— 不重长：10Y 腿触发（4.67% &gt; 4.53%）但 HY OAS 2.68% 差 10bp 到其 2.78% 闸；单一腿触发不是一根新对冲要的两腿确认
              </div>
              <div className="dn-thesis">
                put-spread re-grow 闸是两腿、BOTH 必到：HY OAS &gt; 2.78% AND
                10Y &gt; 4.53%。本次渲染只触发 10Y 腿（4.67%、比 07-23 的 4.63%
                再紧 4bp）—— 但 HY OAS 腿差 10bp 坐在 2.68%（RISK-ON、当日更紧一
                个 bp）、比 07-23 离闸再远一个 bp。信用没在确认利率压力。交易台
                不付权利金去往一本 +262.1M 正 γ 本子、SM 仍净多、地板守住里重长
                一根下行尾 —— 一根新 put-spread 会打 dealer 阻尼、没近端负放大器
                可搭。reclaim-long 利率筛在 4.67% FALSE 在上面标为 scout 逆风、
                不作这里的对冲触发。无新对冲。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">无仓 · 不重长 · 单一 10Y 腿触发、HY OAS 腿差 10bp</span></div>
                <div><span className="dn-lvl-k">重长触发（两腿必到）</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% 收（当前 2.68%、距触发 10bp）去加入已触发的 10Y &gt; 4.53%（4.67%）—— 一根两腿确认、不是单一利率腿</span></div>
                <div><span className="dn-lvl-k">reclaim-long 利率筛</span><span className="dn-lvl-v bear">10Y &lt; 4.55% 收 —— 在 4.67% FALSE（比 4.63% 再紧 4bp）；一记 scout 多逆风、叠加丢掉的 cap</span></div>
              </div>
              <div className="dn-gating">
                <b>注意：</b>re-grow 闸是随水位漂移设的酌情盯位、不是回测断点。
                单一利率腿上的新对冲会是滚到 24JUL 0.3 DTE 或 31JUL 7.3 DTE 的
                put-spread —— 但两条 strip 都净多 γ、所以一根新尾不带放大器顺风、
                会打这轮谱系而不是搭它。交易台等 HY OAS 腿加入再重长、或等周期
                地板彻底破。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · cap 输了第一次真测（07-23 收在 D-EMA50 下方、scout DEFERRED）· SM 仍净多但在削仓 · OI 扩在派发不是需求 · funding 往返回封顶 · 地板已定、上方 +3.07% · dealer 本子深度正 γ · 利率筛 FALSE 且更紧 · 本子为一根 D-EMA50 重夺 FLAT</span>
            </h2>

            <p>
              07-23 决策条件里：重夺 scout 的 D-EMA50 cap 重夺腿{' '}
              <span className="dn-em">转 FALSE</span> —— 07-23 收 $65,069.60 印在
              cap $65,103 下方 —— 重夺里第一根收在 D-EMA50 cap 之下的走完日收、
              07-23 备忘解除盯位标过的那根回落收；SM 确认腿{' '}
              <span className="dn-em">保持 TRUE 但弱了</span> —— SM 守住净多
              （+5,698）却削了 14.0% 并加了空；「OI 在上收上掉头向上」确认{' '}
              <span className="dn-em">反转了</span> —— OI 终于扩（+2.20%）但在一根
              由 aggressor 卖与拥挤多派发驱动的下印上、不是需求；reclaim-long
              利率筛保持 <span className="dn-em">FALSE</span> 并更紧（10Y 4.67%、
              +4bp）；宏观 re-grow 闸仍触发一腿（10Y）、HY OAS 差 10bp；追空重武装{' '}
              <span className="dn-em">没发火</span>（无地板破、无近端负放大器）。{' '}
              <em>这轮谱系等的那条硬腿 —— smart money 作登记买家 —— 仍净多但在
              削仓、而 gated 住多头的 cap 现在在一根走完的收上丢了、所以 scout
              从上膛退回递延；重上膛是一根 D-EMA50 重夺上收、买家在 OI 背后、
              而地板仍在这一切之下守住。</em>{' '}
              今天条件围绕一个递延的 scout、一道丢掉的 cap、一根定住的地板、
              一本深度正 γ 的 dealer 本子、一个重拥挤的杠杆本子、和一记更紧的
              利率筛逆风重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>重夺多 scout（多）—— DEFERRED、cap 重夺腿 FALSE</td><td className="bear">重上膛要一根日收回到 &gt; D-EMA50 $65,103 且是 UP-收（24h ≥ 0）、OI 扩在买家上 —— 当前现货在 cap 下方 −0.13%、07-23 收在其下</td><td>无仓 · 在一根 D-EMA50 重夺上重上膛；上 live 时 scout long 0.2R、目标 $67,917（D-EMA100）、止损 $63,078</td></tr>
                <tr><td>OI 扩质量（反转的那条亚腿）</td><td className="bear">Δ24h OI +2.20% 但在一根下印上、taker/大单净卖、retail 60.30% 多 —— 派发、不是需求</td><td>重上膛要 OI 扩在买家 step-in、不是一批拥挤多被派发进去；这根印是错的那种 OI-up</td></tr>
                <tr><td>D-EMA50 cap（丢了 —— 失败的测）</td><td className="bear">07-23 收 $65,069.60 &lt; D-EMA50 $65,103；现货在 cap 下方 −0.13%</td><td>gated 住多头的 cap 翻成头顶阻力 —— 在一根上收上重夺它以重上膛 scout</td></tr>
                <tr><td>reclaim-long 利率筛</td><td className="bear">10Y &lt; 4.55% 收 —— 在 4.67% FALSE（比 4.63% 再紧 4bp）</td><td>scout 逆风、现在叠加丢掉的 cap 与 $69B 的 Fed 流动性抽走；支持任何重上膛上更小的 0.2R 仓</td></tr>
                <tr><td>周期地板守住（重夺读法仍活）</td><td className="bull">最后周收 07-19 $64,694.70 &gt; W-SMA200 $63,078（连续 3 根周收在上）；现货上方 +3.07%</td><td>地板是让重夺论活着的那条线；一根 1d 收 &lt; $63,078 结束它、另起评估</td></tr>
                <tr><td>追空重武装（未激活）</td><td className="bear">1d 收 &lt; $63,078 AND strip 上一根新近端负 γ 块 —— 两者都不在</td><td>唯一近端负是一根小 27JUL −1.43M；不在一本 +262.1M 正 γ 本子、SM 多且地板守住时淡化</td></tr>
                <tr><td>宏观尾重长（单一腿触发）</td><td className="bear">HY OAS &gt; 2.78%（距触发 10bp）去加入 10Y &gt; 4.53%（4.67%、已触发）</td><td>只在两腿确认上重长；一根单利率腿进正 γ strip 不是对冲触发</td></tr>
                <tr><td>dealer 本子保持正 γ</td><td className="bull">aggregate GEX 保持正（+262.1M；24JUL/31JUL strip 内无新近端负块加入）</td><td>下方往 flip $61,853 保持阻尼；$70k/$72k call 墙 cap 住追单 —— 支持递延而非追多或淡化空</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是{' '}
              <span className="dn-signal">
                盘面是否重夺 D-EMA50 $65,103、在一根 OI 扩在买家上的上收上 ——
                那会把 scout 重上膛往本轮谱系首根 live 多 —— 还是它继续收在 cap
                下方、往定住的地板 $63,078 磨、破它彻底结束重夺读法。smart money
                仍净多但在削仓、地板在下方 +3.07% 守住、dealer 本子阻尼下方；
                改变的是 gated 住多头的 cap 输了第一次真测、而 OI 终于长了 ——
                但在派发、不是需求
              </span>。在那之前本篇按写好的跑：scout 是 DEFERRED（cap 丢、SM 腿
              完整但在弱）、追空站进本轮谱系最深正 γ 带、put-spread 不在单一利率
              腿触发上重长。宏观面保持分裂（利率/美元紧且更紧、信用/流动性松但
              Fed 流动性抽走）、BTC 在 7d 上领跑股票/megacap 簇 +3.06pt（对 NQ、
              虽然能源/金属跑赢它）、中周期翻了 —— 8h/12h 金叉翻成死叉、引擎读
              反弹偏卖。下一根印的对读是<em>递延而耐心 —— 登记买家仍在守但在
              削仓；多头在一根 D-EMA50 重夺上重上膛、而地板是让整个重夺论活着的
              那条线</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计追踪 · v2 · 已过 codex 敌对式审计
            </span>
            <b>状态：</b>v2 EN、在 STAGE B codex 敌对但公允的跨模型审计后从 v1
            晋级（判决 PASS-WITH-NOTES：0 CRITICAL + 2 MAJOR + 5 MINOR + 1 条
            ask-deepseek MINOR）。findings 按 STAGE C 折入；审计记录于
            audits/2026-07-24-desk-note.md。每条 finding 都用对整份 EN 文件跑一遍
            错误主张模式与全部语义变体的 grep 扫描来关闭 —— 搜索模式 ·
            hits-before（带修前含义）· hits-after · 处置：{' '}
            <b>DN-001（MAJOR、极值时间戳 BJ↔UTC 八小时偏移）：</b>模式
            「BJ 00:27 / UTC 16:27 / BJ 18:00 07-23 / UTC 10:00 07-23 / BJ 11:56 /
            UTC 03:56 / BJ 15:11 / UTC 07:11 / BJ 22:46 / UTC 06:46」——
            hits-before 9（区间高/低 prose、SM-Δ meta 高/低、SM net 高/低 prose、
            short-btc 高/低 prose）—— hits-after 0（全部从 live_db.json.t 按
            BJ 本地读、再一次 −8h 重算：区间高 BJ 08:27 07-23 / UTC 00:27 07-23、
            低 BJ 02:00 07-24 / UTC 18:00 07-23；SM net 高 BJ 19:56 07-23 /
            UTC 11:56 07-23、低 BJ 23:11 07-23 / UTC 15:11 07-23；short 高
            BJ 06:46 07-24 / UTC 22:46 07-23；meta 高/低 BJ 芯片修到 19:56 /
            23:11）—— RESOLVED。{' '}
            <b>DN-002（MAJOR、走完收谱系过度陈述 / 混淆）：</b>模式
            「third down-close / third down-day / third down-print / third close
            below the D-EMA50」—— hits-before 8（lead、meta ×2、roman、OI prose
            ×2、交易本子 prose ×2、决策 prose）—— hits-after 0 陈旧（每处对
            07-24 未收盘印的提及重框为「第三根回落印 / 连续第三根负的 24h 印
            （07-24 未收盘）」、两处解除盯位提及都改写成 07-23 陈述为第一根收在
            D-EMA50 cap 之下的走完日收 —— 混淆的「a third close below the
            D-EMA50」解除框架已去；唯一残留的「down-close」是前瞻硬规则「不要在
            一根下收上重上膛或上 live」、正确指向一根未来的重上膛日收）——
            RESOLVED。{' '}
            <b>DN-003（MINOR、1,440-row 对 1,441-含端点窗口）：</b>模式
            「1,440-row window」—— hits-before 1 —— hits-after 0（数据来源重述为
            「1,440 根一分钟间隔 / 1,441 采样行含端点的窗口、基线 t=07-23 08:07
            到 pin t=07-24 08:07」）—— RESOLVED。{' '}
            <b>DN-004（MINOR、funding 封顶行计数 380 对精确 375）：</b>模式
            「380 rows / window 16:36Z–22:55Z」—— hits-before 4（funding meta ×2、
            Δ-funding meta、OI prose）加 2 处窗口串 —— hits-after 0（全部改为精确
            封顶集 375 行、窗口 16:38Z–22:52Z 07-23）—— RESOLVED。{' '}
            <b>DN-005（MINOR、935 对 936 日 bar 计数）：</b>模式「935 daily /
            134 weekly bars」—— hits-before 2（数据来源 MA 行、MA em-block）——
            hits-after 0（两处重述为「936 日 bar 含未收盘的 07-24 bar / 935 走完
            的日 · 134 周 bar」）—— RESOLVED。{' '}
            <b>DN-006（MINOR、MTF 头部陈旧度披露不足）：</b>模式「Beijing-header
            scan」无头部时间 —— hits-before 2（数据来源 MTF 行、表源注）——
            hits-after 0（两处现在都陈述「header scan 2026-07-24 08:01 BJ /
            00:01Z、较 00:07Z 锚约 6 分钟陈旧」）—— RESOLVED。{' '}
            <b>DN-007（MINOR、负行窗口压成一整块）：</b>模式「window
            00:07Z–12:41Z」—— hits-before 2（funding meta、OI prose）——
            hits-after 0（两处重述为「466 根负行、首根 00:07Z 到末根 12:41Z 07-23
            之间、离散块」）—— RESOLVED。{' '}
            <b>ask-deepseek 二审已裁定（未自动应用、按 runbook）：</b>{' '}
            被标的 SM-net 交叉块「+5.70k / 15.28k / 9.58k」对细节
            「+5,698 / 15,277 / 9,579」是同一批 codex 核过 tape 值的正确 k-取整
            （15.277k→15.28k、9.579k→9.58k、5.698k→5.70k；且 15.28 − 9.58 = 5.70
            内部自洽）、不是二审从把 k-数取整回去读出的 +2/+3/+1 差异 —— 无需
            改动。整体：<b>已过 codex 敌对式审计</b> —— 每条 MAJOR 与 MINOR
            finding grep 核过 hits-after = 0；<code>tsc --noEmit</code> 退出 0。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体
            情况个性化。数字反映单一原子快照（2026-07-24 00:07Z）、
            provenance 在上方数据来源条带中按节披露；宏观 Tier-1 面板渲染
            2026-07-23 22:16Z（比快照早约 1.9h）、部分输入明确陈旧或待定
            并已标注。水位、规模与条件是交易台流程的示例、不是长期推荐。
            过去的相关性、γ 与仓位模式不绑定未来盘面。衍生品有全损风险、
            加杠杆下损失可超过保证金。
            <em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                重夺的第一次真测失败 —— 07-23 收在 D-EMA50 cap 下方、OI 长在派发
                不是需求、smart money 在削仓。scout 退回递延。地板守住。耐心。
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
            v2 · 2026-07-24 00:07Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_&#123;2024,2025,2026&#125;.parquet
            （MA 矩阵子集）· FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
