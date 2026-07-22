import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-07-22 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-07-22',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-07-22' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260722() {
  await requireViewer('/zh/desk/2026-07-22');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-07-22 · v2</span>
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
              <span className="dn-big">$65,930</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.70%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-07-22 21:14Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-07-22 21:14Z（snapshot pin · 行 t=&ldquo;07-23 05:14&rdquo; BJ）</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · 审计时文件 tail = pin · OFF-CADENCE 跑
                    —— 这快照落在 21:14Z、不是常规 00:05Z 日锚（本篇在 UTC 日
                    约 21h 处成文）· `t` 字段是 BJ 本地（UTC+8）；21:14Z 锚即
                    BJ 05:14 07-23 · 实时盘面在脚下持续追加、所有窗都冻在这根
                    pin 行
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · BJ 头部扫描（未收盘 K 线）</td>
                  <td className="dn-flag">
                    滚动 latest 文件 · 逐字存档于
                    /opt/desk-note/snapshots/2026-07-22-2114/ · 扫描现货 $65,895、
                    24h −0.65%、H/L $66,711 / $65,505、qVol $7.81B（K 线口径、
                    独立于实时盘面的另一个源）· 每根收盘皆临时
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-22 21:01Z 快照</td>
                  <td className="dn-flag">
                    存档于 2026-07-22-2114 快照目录 · 842 合约 · Deribit idx
                    $66,185 对 live 现货 $65,930（高 $255）· 23JUL 0.5DTE
                    +9.20M 明日 08:00Z 结算（快照后约 11h）· aggregate 读自
                    HTML total（+294.6M / 1%）、本轮谱系最深净多 γ
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-22 21:01Z
                  </td>
                  <td className="dn-flag">存档于 2026-07-22-2114 · 7d 1h bar · 22 资产 · 167 rows</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-21 22:16Z 渲染</td>
                  <td className="dn-flag">
                    存档于 2026-07-22-2114 · 渲染滞后约 23h（对 21:14Z 锚显著
                    陈旧 —— 盘上无更新的 FRED 渲染）· FRED Tier-1：10Y nominal
                    4.60%（+5bp）、TIPS 2.35% EXTREME、HY OAS 2.69%（−4bp）、
                    DXY 101.19、MOVE 72.7、Fed 净流动性 $5.987T · Tier-3 CPI 行
                    月度/陈旧
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-07-22 20:06Z</td>
                  <td className="dn-flag">
                    较快照锚滞后约 1.1h（close $65,790.90）· 偏移按 live 现货
                    重算 · 矩阵有意用
                    btcusdt_1m_&#123;2024,2025,2026&#125;.parquet 子集算
                    （1,344,727 分钟 / 934 日 bar / 134 周 bar）、区别于完整的
                    2019–2026 通配历史 · 所以 W-SMA150 / W-SMA200 不可计算
                    （盘上 134 根周 bar）；200W 周期地板是另一条谱系、读自
                    ma200w_trap_watch_state.json、不是这个矩阵
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W 周期地板（周 200-SMA）</td>
                  <td className="dn-v-cell">ma200w_trap_watch_state.json · recomputed 2026-07-20 00:11Z</td>
                  <td className="dn-flag">
                    runbook 的 weekly_200sma.json 本次 ABSENT · 地板读自维护中
                    的 trap-watch state = $63,078.14（上一根完整周 2026-07-19
                    收 $64,694.70、3 根连续周收在上方、streak 起点 07-05）·
                    ratio_pctile / last-event 不可得（那两个在 weekly_200sma.json
                    里）—— 非捏造 · 慢周度级别（陈旧几小时无妨）
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
              <span className="dn-v">+2.76%</span>
              <span className="dn-src">live · 原始 0.002524 × 1095 = +2.76% ann · 24h 均值 +3.31% · 封顶占用 0 / 1442 采样行 = 0.0%（无一行接近 +10.95% Binance 封顶；24h 最大 +5.98% ann）· 0 行转负 —— funding 整根 24h 都轻正</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bull">离顶 · 区间 +1.24% / +5.98%</span>
              <span className="dn-src">+10.95% 封顶自 07-19 起一直空着 · 24h 均值 +3.31% ann、一根浅、单边但温和的正 · 杠杆门开宽到底、没在付拥挤多的税</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−2.16%（−2,260.8 BTC）</span>
              <span className="dn-src">live · 104,758.5 → 102,497.7 BTC · OI 在 −0.70% 回落上收缩 —— 一根去杠杆抽水（SM short_btc 落 −1,058.5、perp 空买回平仓）、不是新需求抬 OI（对比 07-19 的 +1,262 需求上腿）</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bear">54.72 / 45.28</span>
              <span className="dn-src">live_db `mkt_long_pct` · 从 50.45 → 54.72（+4.27pt）跨 24h · 24h 区间 50.37 / 54.78 —— retail 进重夺里再拥挤多（07-19 是 −1.70pt 泄的反面）</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bull">+6.66k（净多）</span>
              <span className="dn-src">live · long 15.07k − short 8.42k · SM 于 2026-07-21 06:36Z（BJ 14:36）翻净多、并自那扩 —— 一根对 07-19 备忘 −6.66k 空的 ~+13.3k 摆动 · 整轮谱系在等的那根腿：smart money 加入了出价</span>
            </div>
            <div>
              <span className="dn-k">SM Δ · 24h</span>
              <span className="dn-v bull">+4,703.5 → +6,655.1（Δnet +1,951.6、build 41.5%）</span>
              <span className="dn-src">|Δ|/prior_net = 1,951.6 / 4,703.5 = 41.5% · Δlong +893.1 / Δshort −1,058.5 —— 多加 AND 空补、一根两侧的净多建 · 多头堆 @ 2026-07-22 06:01Z（BJ 14:01）：Δnet +2,273.6（Δlong +723.2、Δshort −1,550.4）</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">42.6% / 32.45%</span>
              <span className="dn-src">GEX IV 中位数 · 842 合约 · P/C 0.44（put/call OI 133,816 / 304,057）· 是 N 合约的链中位数、不是可交易价差 · 30D close-to-close RV 32.45%（logret.std×√365×100、30 returns、parquet 最末 bar 20:06Z）</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+6.74%（在上方）</span>
              <span className="dn-src">flip $61,765 · 对 live 现货 $65,930.01（+6.74%；65,930.01/61,765 − 1 = 6.743%）/ GEX 文件 Deribit idx $66,185（+7.16%；66,185/61,765 − 1 = 7.156%）—— 两参考都正 · aggregate +294.6M 净多 γ、本轮谱系最深（07-19 是 +194.2M）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                smart money 加入了出价 —— 整轮重夺谱系在等的那一根腿
              </span>
              。SM net 从 07-19 备忘的
              <span className="dn-tag bear">−6,657 空</span> 翻到
              <span className="dn-tag bull">+6,655 多</span> —— 一根 ~+13.3k
              摆动 —— 于
              <span className="dn-tag">2026-07-21 06:36Z（BJ 14:36）</span>
              越过净多、并自那扩；仅过去 24h SM 就建
              <span className="dn-tag bull">+1,951.6 net（Δlong +893.1 / Δshort
              −1,058.5、build 41.5%）</span>、带一根 BJ 14:01 的多头堆（Δnet
              +2,273.6：补 −1,550.4 空 + 加 +723.2 多）。价格重夺了入场验证
              封盖：现货
              <span className="dn-tag bull">$65,930 坐在 D-EMA50 $65,099 上方
              +1.28%</span>、两根完整日收在上方（07-20 $65,225、07-21
              $66,522）加未收盘的 07-22 bar（$65,791）。
              <span className="dn-signal">
                但这根印是一根回落、scout 的触发在它上不干净
              </span>
              ：24h 是一根 <span className="dn-tag bear">−0.70%</span> 下收、OI
              <span className="dn-tag bear">收缩 −2.16%（−2,261 BTC）</span> 而
              非扩张、reclaim-long 利率筛仍
              <span className="dn-tag bear">FALSE</span> —— 10Y 刷新到
              <span className="dn-tag bear">4.60%</span>（从 07-19 的 4.57%）、
              在 4.55% 闸上方。所以 scout 这根印不上线：它从
              <span className="dn-em">递延</span>（07-19、等 SM）升到
              <span className="dn-em">已上膛（ARMED）</span> —— 那根硬腿
              （SM 加入出价）终于点火、交易台在第一根守 D-EMA50、OI 企稳的
              确认上收上线做多。对空的一侧：dealer 本子是
              <span className="dn-tag bull">本轮谱系最深净多 γ（+294.6M）</span>
              、$70k +95.4M / $72k +63.5M 重 call 墙压头顶、所以一根冲被卖、
              一根回落被买 —— 这里耐心成本很低。本篇标记记录在案买家的转身：
              07-16 的回补空和 07-19 递延的需求、已成一根 smart-money 净多、
              交易本子给本轮首根多上膛、但还没扣扳机。
            </p>

            <p>
              BTC 报 <span className="dn-tag">$65,930</span> live、
              <span className="dn-tag bear">−0.70%</span> 在 24h —— 一根升三日
              弧里的回落（现货
              <span className="dn-tag bull">在 07-19 备忘 $64,839 上方
              +1.68%</span>）、在一条 <span className="dn-tag">$66,723 /
              $65,567</span> 区间里（高 @ BJ 08:22 07-22 / UTC 00:22 07-22、
              低 @ BJ 21:25 07-22 / UTC 13:25 07-22）。这根推早窗顶在
              <span className="dn-tag">$66,723</span>、褪到
              <span className="dn-tag">$65,567</span> 低、再回进快照。
              <span className="dn-signal">周期地板在重要的周收上落定、守住</span>
              ：trap-watch W-SMA200 地板是
              <span className="dn-tag bull">$63,078</span>、上一根完整周收
              （2026-07-19 $64,694.70）是第三根连续周收在上方（streak 起点
              07-05）、现货坐在
              <span className="dn-tag bull">地板上方 +4.52%</span>。MA 矩阵守
              <span className="dn-em">四根正日线</span> —— D-EMA50 $65,099
              （+1.28%）、D-SMA20 $64,028（+2.97%）、D-EMA20 $64,198（+2.70%）、
              D-SMA50 $63,102（+4.48%）—— D-SMA50 台阶几乎正踩在地板上（$63,102
              对 $63,078、一条 ~$24 支撑带）。头顶第一根是
              <span className="dn-tag bear">D-EMA100 $68,030（−3.09%）</span>、
              工作首目标。
              <span className="dn-em">
                直读：价格重夺了封盖、在收盘口径上守住、地板已落定、smart
                money 终于净多 —— 07-19 缺的那块结构到了。触发唯一还缺的是一根
                干净的确认印：一根伴 OI 企稳的上收、不是这根伴 OI 泄的下印回落。
              </span>
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · SM 翻净多（记录在案的买家转身）· retail 再拥挤多 · funding 离顶温和 · OI 在回落上收缩 · perp 补、现货进快照转出价</span>
            </h2>

            <p>
              <span className="dn-signal">
                记录在案的买家转身了 —— smart money 本轮谱系首次净多
              </span>
              。SM net 是 <span className="dn-tag bull">+6,655</span>（long
              15,072 − short 8,417）对 07-19 备忘的 −6,657：日弧走
              <span className="dn-tag">−6,657（07-19）→ −8,592（07-20、进弱势
              的一根更深空）→ −891（07-21、一根 ~7,260 空补）→ +3,998（07-22、
              翻多）→ +6,655（现在）</span>。净多越过印在
              <span className="dn-tag">2026-07-21 06:36Z（BJ 14:36）</span>、
              已守住并扩了一天半。跨这根 pin 的 24h 窗：Δnet
              <span className="dn-tag bull">+1,951.6</span>、Δlong
              <span className="dn-tag bull">+893.1</span>、Δshort
              <span className="dn-tag bull">−1,058.5</span> —— 多加 AND 空补、
              一根两侧的净多建（build fraction 41.5% = 1,951.6 / 4,703.5）。
              离散签名是一根
              <span className="dn-tag bull">堆 @ 2026-07-22 06:01Z（BJ
              14:01）</span>：Δnet +2,273.6（Δlong +723.2、Δshort −1,550.4
              同分钟）在现货 $66,016 —— 一根多头堆（补 + 加）、是那些标记下腿
              的敌对堆的镜像。SM net 24h 高
              <span className="dn-tag bull">+6,762.7 @ 2026-07-22 11:00Z（BJ
              19:00）</span>、低 +3,208.6 @ 2026-07-22 05:36Z（BJ 13:36）；
              short_btc 泄到一根 24h 低
              <span className="dn-tag bull">8,121.8 @ 2026-07-22 06:26Z（BJ
              14:26）</span>。这不是 07-16 那根把 OI 拉下的补、也不是 07-19 那根
              SM 褪的需求腿 —— 是 smart money 扛着一根净多。
            </p>

            <p>
              杠杆侧松且静。
              <span className="dn-signal">funding 坐在温和正、离顶很远</span>
              ：live <span className="dn-tag">+2.76% ann</span>（原始 0.002524
              × 1095）、24h 区间
              <span className="dn-tag">+1.24% / +5.98%</span>、24h 均值
              <span className="dn-tag">+3.31%</span>、封顶占用
              <span className="dn-tag bull">0 / 1442 采样行（0.0%）</span> 且
              <span className="dn-tag">0 行转负</span> —— 一根浅、单边但不收税
              的正、杠杆门开宽到底。但需求质量比 07-19 弱：OI Δ
              <span className="dn-tag bear">−2,260.8 BTC（−2.16%）</span> 跨
              24h —— <span className="dn-em">OI 在回落上收缩</span>（104,758 →
              102,498）、07-19 需求上腿（+1,262 BTC）的反面。这收缩是去杠杆、
              不是派发：SM 补 −1,058 空、perp 本子买回平仓（见窗口流向）。
              retail <span className="dn-tag bear">mkt_long_pct 54.72%</span>
              从 50.45% 再拥挤上来（+4.27pt、24h 区间 50.37 / 54.78）——
              retail 在追重夺、正是 funding 还
              <em>没</em>在收税的那个拥挤多侧。perp 快照对现货交一根
              <span className="dn-tag bear">−$39.66 折价</span>（24h 均 −$38.8、
              区间 −$100.5 / +$38.3 —— basis 只短暂沾升水）。1 分钟侵略者偏斜
              快照 <span className="dn-tag">−1.3</span>（1h 均 +2.0、区间 −21.1 /
              +28.7）—— 平衡、无单向压。
              <span className="dn-em">
                funding 离顶 + OI 收缩 + retail 再拥挤：杠杆本子在回落上放气、
                而 retail 加仓 —— 干净的信号会是 OI 在下一根上收上转回上、这正
                是 scout 还要的那节子腿。
              </span>
            </p>

            <p>
              窗口流向是<em>一根 24h 空补回落、现货进快照转出价</em>。24h：
              价格 <span className="dn-tag bear">−0.70%</span>、OI
              <span className="dn-tag bear">−2,261 BTC</span>、现货 CVD
              <span className="dn-tag">Δ −26</span>
              <span className="dn-em">（跨 2026-07-22 06:33Z cb_cvd reset
              19,385.5 → 45.0 调整后）</span> —— 现货基本平 —— 期货 CVD
              <span className="dn-tag bull">Δ +2,887</span>、大单
              <span className="dn-tag bull">+1,525 BTC / 956 笔</span>、
              taker-net <span className="dn-tag bull">+2,147</span> ——
              <span className="dn-em">
                perp/taker 侧整根 24h 在买、而 OI 落、现货保持平：那是空补
                （买回平仓、OI 下）、与 SM 补 −1,058 并翻多一致、不是新现货需求
              </span>
              。4h（进快照）：价格
              <span className="dn-tag bear">−0.41%</span>、OI
              <span className="dn-tag bear">−595 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +387</span>、期货 CVD
              <span className="dn-tag">Δ −68</span>、大单
              <span className="dn-tag bear">−338 BTC / 107 笔</span>、
              taker-net <span className="dn-tag bear">−68</span> —— 一根安静的
              offer、大单偏卖。1h：价格
              <span className="dn-tag bull">+0.09%</span>、OI
              <span className="dn-tag bear">−36 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +530</span>、期货 CVD
              <span className="dn-tag bull">Δ +28</span>、大单
              <span className="dn-tag bear">−63 BTC / 15 笔</span>、taker-net
              <span className="dn-tag bull">+28</span> ——
              <em>现货进快照转出价（+530 现货 CVD）、OI 还在轻微缩</em>。最近
              一小时是建设性的信号 —— 现货需求在回落底部踏进 —— 但那是一小时、
              不是一节。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · 中周期守金叉（8h/12h 云上）· 3d/1w 底背离簇 + 1M ⚡ TD9 BUY 对一根 12h ⚡ TD9 SELL 和快频死叉 · 快频从 07-19 的 RSI-79 衰竭冷下来</span>
            </h2>

            <p>
              <span className="dn-signal">
                中周期守住它们的云上金叉、高周期底背离簇仍在
              </span>
              。8h 带一根
              <span className="dn-tag bull">水上金叉 11b</span>（RSI 58.3、云上
              41b）、12h 一根
              <span className="dn-tag bull">水上金叉 7b</span>（RSI 61.4、云上
              17b）、1w 刚印一根
              <span className="dn-tag bull">水下金叉（刚印）</span> 伴一根 3d
              水下金叉 4b —— 高周期
              <span className="dn-tag bull">底背离簇（3d / 1w BULL reg）</span>
              完整、1M 守一根持续的
              <span className="dn-tag bull">⚡ TD9 BUY</span>（RSI 44.8、云上
              29b）。对着这个、近端框架闪谨慎：一根新
              <span className="dn-tag bear">12h ⚡ TD9 SELL</span>（但在 RSI
              61.4、离 07-19 的衰竭远得很）、和 15m（11b）、1h（28b）、4h
              （新、2b）上的水上死叉。与 07-19 的重要对比是快频已经
              <span className="dn-em">冷下来</span>：15m RSI 49.1、30m 47.9、1h
              47.6（对 07-19 那根标衰竭的 79.2 / 78.8 印）—— 超买进这根回落
              里完全泄掉、所以快频上的下倾是消化、不是一根 blow-off 翻倒。
              扫描净读：<span className="dn-em">高周期偏空 · 短线反弹 · 底背离簇
              3d/1w</span>、一根 5/9 趋势延续 regime（JT ≥ 0）。
              <span className="dn-em">
                引擎和中周期确认了重夺；慢周期仍在它们的重 MA 下方（3d / 1w
                云下）；12h TD9 SELL 和快频死叉论这根回落在下一根上腿前还有
                空间。建设性、但在消化。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">65,895</td><td className="num">49.1</td><td className="bear">死叉（水上）11b</td><td className="neut">云内 65.8–66.0k 7b</td><td>Buy 2</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">65,895</td><td className="num">47.9</td><td className="bull">金叉（水下）12b</td><td className="bear">云下 ↑66.1k 8b</td><td>Sell 3</td><td>BEAR hid · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">65,895</td><td className="num">47.6</td><td className="bear">死叉（水上）28b</td><td className="neut">云内 65.3–66.2k 3b</td><td>Buy 3</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>4h</td><td className="num">65,898</td><td className="num">57.0</td><td className="bear">死叉（水上）2b</td><td className="bull">云上 ↓63.7k 32b</td><td>Sell 1</td><td>—</td></tr>
                <tr><td>8h</td><td className="num">65,895</td><td className="num bull">58.3</td><td className="bull">金叉（水上）11b</td><td className="bull">云上 ↓63.1k 41b</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">65,895</td><td className="num bull">61.4</td><td className="bull">金叉（水上）7b</td><td className="bull">云上 ↓62.5k 17b</td><td>⚡ TD9 SELL</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>1d</td><td className="num">65,895</td><td className="num bull">58.2</td><td className="neut">—</td><td className="neut">云内 63.9–70.4k 2b</td><td>Sell 3</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>3d</td><td className="num">65,895</td><td className="num">47.9</td><td className="bull">金叉（水下）4b</td><td className="bear">云下 ↑74.6k 17b</td><td>Sell 7</td><td>BULL reg</td></tr>
                <tr><td>1w</td><td className="num">65,895</td><td className="num">41.4</td><td className="bull">金叉（水下）刚印</td><td className="bear">云下 ↑97.1k 25b</td><td>Sell 2</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">65,895</td><td className="num">44.8</td><td className="neut">—</td><td className="bull">云上 ↓47.0k 29b</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html BJ 头部扫描（滚动 latest 文件、
                    逐字存档于 /opt/desk-note/snapshots/2026-07-22-2114/）。头部
                    告警：<em>高周期底背离簇（3d/1w）</em>、
                    <em>⚡ TD9 SELL 12h · ⚡ TD9 BUY 1M</em>、跨 10 个 TF 总体
                    3 多 / 2 空 / 5 中性、净读高周期偏空 · 短线反弹。扫描现货
                    $65,895、24h −0.65%、H/L $66,711 / $65,505、qVol $7.81B
                    （K 线口径；实时盘面在 21:14Z 读现货 $65,930、24h −0.70%、
                    H/L $66,723 / $65,567 —— 另一个源、不是冲突）。收盘为未收盘
                    K 线；每个值在各周期收盘前都按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵确认封盖重夺。现货 $65,930 守
              <span className="dn-em">四根正日线</span>、按远近排：
              <span className="dn-tag bull">D-EMA50 $65,099（+1.28%）</span>
              —— 重夺的入场验证封盖、现在最近支撑 ——
              <span className="dn-tag bull">D-SMA20 $64,028（+2.97%）</span>、
              <span className="dn-tag bull">D-EMA20 $64,198（+2.70%）</span>、
              和 <span className="dn-tag bull">D-SMA50 $63,102（+4.48%）</span>
              —— 后者几乎正踩在
              <span className="dn-tag bull">W-SMA200 地板 $63,078（+4.52%）</span>
              上、一条 ~$24 支撑台阶在 $63,100 附近。头顶按顺序：
              <span className="dn-tag bear">D-EMA100 $68,030（−3.09%）</span>
              （工作首目标）、
              <span className="dn-tag bear">D-SMA150 $69,814（−5.56%）</span>、
              <span className="dn-tag bear">W-SMA20 $69,859（−5.62%）</span>、
              <span className="dn-tag bear">W-EMA20 $70,075（−5.92%）</span>、
              <span className="dn-tag bear">D-SMA100 $70,091（−5.94%）</span>、
              <span className="dn-tag bear">D-EMA150 $71,012（−7.16%）</span>、
              <span className="dn-tag bear">D-SMA200 $72,694（−9.30%）</span>、
              <span className="dn-tag bear">W-EMA200 $72,935（−9.60%、种子）</span>、
              <span className="dn-tag bear">D-EMA200 $73,863（−10.74%）</span>。
              更高更远、已弃用：W-EMA150 $76,761（−14.11%、种子）、W-EMA50
              $79,024（−16.57%）、W-EMA100 $80,340（−17.94%）、W-SMA50
              $85,414（−22.81%）、W-SMA100 $88,503（−25.51%）。
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-07-22 20:06Z（close $65,790.90）；
                偏移按 live 现货 $65,930.01 重算。显示的 MA 水位按 $ 取整、偏移
                用精确序列值算。矩阵有意用
                btcusdt_1m_&#123;2024,2025,2026&#125;.parquet 子集算（1,344,727
                分钟 / 934 日 bar / 134 周 bar）、区别于 footer 的通配符本会暗示
                的完整 2019–2026 历史；200W 周期地板是另一条谱系、读自
                ma200w_trap_watch_state.json。W-SMA150 / W-SMA200 不可计算 ——
                这子集只有 134 根周 bar、不够这两个窗；W-EMA150 与 W-EMA200 从
                可用历史 seed、按种子披露。日线收盘：07-18 $64,806.70、07-19
                $64,694.70、07-20 $65,224.80、07-21 $66,522.40、07-22（未收盘）
                $65,790.90 —— 两根完整收（07-20、07-21）加未收盘的 07-22 bar
                在 D-EMA50 封盖 $65,099 上方。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子加深到 +294.6M 净多 γ（本轮谱系最深）· flip $61,765、现货 +6.74% 在上方 · $70k/$72k call 墙压头顶 · 无近端负放大器 · 31JUL +175.4M 主导一条有效为正的 strip</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子把它的净多 γ 加深到本轮谱系最富
              </span>
              。aggregate GEX 是
              <span className="dn-tag bull">+294.6M / 1%</span>（从 07-19 的
              +194.2M —— 一根 +$100M 加深）；本子深净多 γ（阻尼 —— dealer 买
              回落、卖冲）。0-γ flip 是
              <span className="dn-tag">$61,765</span>、现货 $65,930 坐在
              <span className="dn-tag bull">flip 上方 +6.74%</span> 用现货口径算
              （65,930.01 / 61,765 − 1 = +6.743%）；GEX 文件的 Deribit-index
              参考 $66,185（比 live 现货高 $255）读
              <span className="dn-tag bull">+7.16%</span> 在 flip 上方（66,185
              / 61,765 − 1 = +7.156%）—— 两参考都正、现货深在正 γ 场里。顶 γ
              墙：<span className="dn-tag bull">$70k +95.38M</span>（最重、头顶
              磁铁/封盖；38,892 call OI）、
              <span className="dn-tag bull">$72k +63.47M</span>、
              <span className="dn-tag bull">$66k +34.63M</span>（就在头顶）、
              <span className="dn-tag bull">$67k +30.71M</span>、
              <span className="dn-tag bull">$68k +29.19M</span>、
              <span className="dn-tag bull">$65k +13.97M</span>（就在现货下）、
              <span className="dn-tag bear">$60k −13.76M</span>（唯一负墙 ——
              崩盘 put 残余、18,004 put OI）、
              <span className="dn-tag bull">$69k +11.54M</span>、
              <span className="dn-tag bull">$80k +11.26M</span>。
              <span className="dn-em">
                现货被下方 $65k 支撑墙和上方 $66k–$68k 正带夹住、$70k/$72k call
                是重头顶封盖；唯一的负 γ 是 $60k 崩盘 put 残余、远在下方。这是
                一个两侧都阻尼的本子 —— 它会卖掉一根冲进 $70k call 墙、买一根
                往 $65k / flip 的回落
              </span>
              。expiry strip 带
              <span className="dn-em">无近端负放大器</span>：23JUL 0.5DTE
              +9.20M（明日 08:00Z 结算）、24JUL 1.5 +52.81M、25JUL 2.5
              +2.04M、26JUL 3.5 −0.18M（可忽略）、31JUL 8.5
              <span className="dn-tag bull">+175.44M</span>（主导）、7AUG 15.5
              +35.20M、28AUG 36.5 +23.83M、25SEP 64.5 +7.58M、25DEC 155.5
              +5.86M、26MAR27 246.5 +1.29M、25JUN27 337.5 +0.56M —— 一条有效为
              正的 strip（除一根可忽略的 26JUL −$0.18M 外无实质负桶）、由 31JUL
              主导。没有放大器给一根新空加油。
            </p>

            <p>
              IV 中位数横跨 842 合约是
              <span className="dn-tag">42.6%</span> 对 30D close-to-close RV
              <span className="dn-tag">32.45%</span> —— 链级溢价
              <span className="dn-tag">~+10.1pt</span>、put/call OI 比率
              <span className="dn-tag">0.44</span>（133,816 / 304,057 ——
              call 重）。是 N 合约的链中位数、
              <span className="dn-em">不是</span>可交易价差；expiry- /
              strike-level vega、skew、期限结构仍未载入、vol 读法保持
              framework only。今日 842 合约（07-19 是 874）。RV 方法：30D
              close-to-close、logret.std × √365 × 100、用最末 30 根日 log
              return（= 31 根连续日收）、锚自 parquet 最末 bar 2026-07-22
              20:06Z；31-return 读 32.09%、30-return 页值 32.45%。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · 利率/美元紧（10Y 4.60%、TIPS 2.35% EXTREME、DXY 101.19）对 信用/流动性松（HY OAS 2.69% RISK-ON、Fed 净流动性 $5.987T EXTREME）· reclaim-long 利率筛 FALSE（10Y &gt; 4.55%）· 跨资产 IDIOSYNCRATIC |r| 0.200 · BTC 是 RS 领头（+1.70% 7d 对一根红 TradFi 盘）</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观面保持分裂 —— 利率与美元紧、信用与流动性松 —— 利率腿对
                scout 收紧了一口
              </span>
              。面板渲染 2026-07-21 22:16Z、比快照早约 23h（显著陈旧 —— 盘上无
              更新的 FRED 渲染；慢 FRED 序列、但披露）。US 10Y nominal
              <span className="dn-tag bear">4.60%（+5.0bp）</span>、regime z
              <span className="dn-tag bear">+2.09</span>、偶发 z
              <span className="dn-tag">+1.47</span> —— EXTREME RISK-OFF、
              <span className="dn-em">在 4.55% reclaim-long 闸上方</span>（07-19
              是 4.57% —— 紧 3bp）。10Y TIPS real
              <span className="dn-tag bear">2.35%（+4.0bp）</span>、z
              <span className="dn-tag bear">+2.72</span> —— EXTREME RISK-OFF。
              5Y5Y BE 通胀 <span className="dn-tag">2.22%（+1.0bp）</span>。
              HY OAS <span className="dn-tag bull">2.69%（−4.0bp）</span>、
              regime z <span className="dn-tag bull">−1.21</span>、偶发 z
              <span className="dn-tag bull">−0.63</span> —— RISK-ON、从 07-19
              （2.71%）松 2bp、现距它 2.78% put-spread re-grow 闸
              <span className="dn-em">9bp</span>。MOVE 债波
              <span className="dn-tag">72.7（+1.78）</span> —— 中性。DXY
              <span className="dn-tag bear">101.19（+0.20）</span>、regime z
              <span className="dn-tag bear">+2.14</span> —— EXTREME RISK-OFF、
              硬。Fed 净流动性
              <span className="dn-tag bull">$5.987T（+0.025T）</span>、regime z
              <span className="dn-tag bull">+2.34</span> —— EXTREME RISK-ON。
              USD/JPY <span className="dn-tag">163.19（+0.70）</span>；US-JP 10Y
              利差 <span className="dn-tag">1.93%（+5.0bp）</span> —— 紧。NFCI
              −0.538（陈旧 11d）。
              <span className="dn-em">
                净：reclaim-long 利率筛（10Y &lt; 4.55%）在 4.60% FALSE、紧了
                3bp —— 一根活的 scout 逆风、但交易台 07-19 的读法成立：SM 现在
                确认了、利率筛是一个 caveat、不是那道闸。put-spread re-grow 闸
                是两腿、两腿都必到 —— 10Y 腿点火（4.60% &gt; 4.53%）但 HY OAS
                2.69% 距 2.78% 9bp、所以单一利率腿不是对冲触发。利率/美元紧、
                信用/流动性松：框住整轮重夺的那道宏观暗流。
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
                <tr><td>US 10Y nominal</td><td className="num">4.60%</td><td className="num bear">+5.0bp</td><td className="num bear">+2.09</td><td className="num">+1.47</td><td className="bear">紧 · EXTREME RISK-OFF</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.35%</td><td className="num bear">+4.0bp</td><td className="num bear">+2.72</td><td className="num">+1.53</td><td className="bear">紧 · EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.22%</td><td className="num">+1.0bp</td><td className="num">−0.07</td><td className="num">+0.57</td><td className="neut">无标</td></tr>
                <tr><td>HY OAS</td><td className="num">2.69%</td><td className="num bull">−4.0bp</td><td className="num bull">−1.21</td><td className="num bull">−0.63</td><td className="bull">松 · RISK-ON · 距闸 9bp</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.538</td><td className="num">−0.01</td><td className="num">−1.03</td><td className="num bull">−1.92</td><td className="stale">陈旧 11d</td></tr>
                <tr><td>MOVE 债波</td><td className="num">72.7</td><td className="num bear">+1.78</td><td className="num">−0.13</td><td className="num">+0.67</td><td className="neut">中性</td></tr>
                <tr><td>DXY</td><td className="num">101.19</td><td className="num bear">+0.20</td><td className="num bear">+2.14</td><td className="num">+0.74</td><td className="bear">硬 · EXTREME RISK-OFF</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.987T</td><td className="num bull">+0.025T</td><td className="num bull">+2.34</td><td className="num bull">+2.42</td><td className="bull">EXTREME RISK-ON</td></tr>
                <tr><td>USD/JPY</td><td className="num">163.19</td><td className="num">+0.70</td><td className="num bear">+1.65</td><td className="num">+1.74</td><td className="neut">日元软</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">1.93%</td><td className="num bear">+5.0bp</td><td className="num">−0.62</td><td className="num">+1.47</td><td className="bear">紧</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp（月度）</td><td className="num bear">+2.42</td><td className="num">+1.09</td><td className="stale">月度 · 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、汇总 21:01Z ——
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。非对角线
              均值 <span className="dn-tag">|r| 0.200</span>（从 07-19 的 0.315
              松开 —— 现在深进
              <span className="dn-em">IDIOSYNCRATIC</span> 带、在 0.25 阈值
              下方）。BTC 列出的对齐：NQ
              <span className="dn-tag">+0.531</span>（首）、SP500
              <span className="dn-tag">+0.440</span>、SILVER
              <span className="dn-tag">+0.370</span>、PLAT
              <span className="dn-tag">+0.358</span>、COPPER
              <span className="dn-tag">+0.354</span>、TSLA
              <span className="dn-tag">+0.353</span>、NVDA
              <span className="dn-tag">+0.348</span>、GOLD
              <span className="dn-tag">+0.310</span>、JP225
              <span className="dn-tag">+0.306</span>。7d 表现是那根响线：
              <span className="dn-tag bull">BTC +1.70%</span> 领一根普遍
              <span className="dn-em">红</span>的 TradFi 盘 —— NQ
              <span className="dn-tag bear">−1.56%</span>、SP500
              <span className="dn-tag bear">−0.85%</span>、JP225
              <span className="dn-tag bear">−2.00%</span>、大盘股狠跌（GOOGL
              <span className="dn-tag bear">−10.10%</span>、META
              <span className="dn-tag bear">−8.66%</span>、TSLA
              <span className="dn-tag bear">−7.66%</span>、AMZN
              <span className="dn-tag bear">−4.11%</span>、MSFT
              <span className="dn-tag bear">−1.79%</span>）、NVDA
              <span className="dn-tag bull">+0.64%</span> 是唯一绿的大科技。金属
              混（SILVER <span className="dn-tag bull">+3.20%</span>、GOLD
              <span className="dn-tag bull">+1.62%</span>、COPPER
              <span className="dn-tag bull">+1.38%</span>、PLAT
              <span className="dn-tag bear">−1.84%</span>）；能源强（CL
              <span className="dn-tag bull">+8.77%</span>、BRENT
              <span className="dn-tag bull">+7.28%</span>）。
              <span className="dn-em">
                BTC 是相对强度领头、领得很宽（+1.70% 7d 对 NQ −1.56% = 一根
                +3.26pt 领先）、对着一个普遍抛售的 TradFi 股票复合体 —— 供电
                整轮重夺的那根 crypto 内生读法完整、BTC 现在跑赢宏观盘、不是
                滞后它。相关性松到 idiosyncratic、所以宏观暗流对价格的咬、少于
                对交易框架那些闸的咬
              </span>
              。JGB 月度 2.67% 带一根 EXTREME RISK-OFF 月度标 —— 不依赖。
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · scout 已上膛（从递延升级 —— SM 加入出价、价格重夺 D-EMA50 封盖）· 追空 STOOD DOWN（最深正 γ、无放大器）· put-spread 不 re-grow（单 10Y 腿）· 本子 FLAT 等确认上收</span>
            </h2>

            <p>
              <span className="dn-signal">
                07-19 备忘结在「多在 smart money 加入出价时定、不是在它褪时」
                —— smart money 现在加入了出价
              </span>
              。那是重夺谱系在等的那根腿：SM 净多 +6,655（2026-07-21 06:36Z /
              BJ 14:36 翻）、价格在 D-EMA50 封盖上方、地板在周收上落定、dealer
              本子深正 γ 无放大器。scout 从
              <span className="dn-em">递延</span> 升到
              <span className="dn-em">已上膛</span>。但触发不在<em>这</em>根印
              上点火：24h 是一根 −0.70% 下收、OI 收缩 −2.16% 而非扩张、
              reclaim-long 利率筛 FALSE（10Y 4.60%）。交易台不追一根回落进
              $70k/$72k call-wall 封盖、且确认子腿（OI 转上、一根上收）还没到。
              今天的本子是：无空、scout 已上膛但未上线、无新对冲 —— 在第一根
              守 D-EMA50 $65,099、OI 企稳（Δ24h OI ≥ 0）的确认上收上做多 0.2R、
              止损落定地板 $63,078。
            </p>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout · 已上膛（ARMED）· SM 确认腿点火 · 等一根确认上收</span>
              <div className="dn-trade-name">
                reclaim-long scout —— 终于上膛：SM 翻净多（+6,655）、价格重夺 D-EMA50 封盖；触发只等一根伴 OI 企稳的确认上收
              </div>
              <div className="dn-thesis">
                07-19 scout 挂在两根硬腿加子条件上：(1) 一根 1h/日收在 D-EMA50
                入场验证封盖上方、(2) SM 确认（平-到-回补、最好净多）且 OI 扩张、
                而 10Y 利率筛是逆风不是封。腿 1 到了 —— 两根完整日收在 D-EMA50
                上方（07-20 $65,225、07-21 $66,522）加未收盘的 07-22 bar
                （$65,791）、现货在封盖上方 +1.28%。腿 2 强烈地到了 —— SM 不只
                补、它翻了净多（07-19 −6,657 → 现在 +6,655、2026-07-21 06:36Z /
                BJ 14:36 越过）、跨这根 pin 的 24h 建 +1,952。缺的是那根确认印：
                24h 是一根 −0.70% 回落、OI 收缩 −2.16%、所以「OI 扩张」子腿在
                抽水上反转、10Y 在 4.60% 让利率筛 false。所以 scout 已上膛、
                不是上线 —— 交易台在第一根收回回落、伴 OI 企稳的上收上做多、
                小仓进一个封住 $70k call 墙上方空间的深正 γ 本子。这是重夺最接近
                一根活的多的时候。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">触发（上线）</span><span className="dn-lvl-v bull">下一根日收 &gt; D-EMA50 $65,099 且是一根上收（24h ≥ 0）AND OI 企稳（Δ24h OI ≥ 0）—— SM 确认腿和封盖重夺腿已 TRUE；剩下的门是一根确认印、不是一根新结构条件</span></div>
                <div><span className="dn-lvl-k">scout 入场</span><span className="dn-lvl-v bull">触发印出时、scout long 0.2R · SM 净多、地板落定、dealer 本子把下行阻尼向 flip</span></div>
                <div><span className="dn-lvl-k">止损</span><span className="dn-lvl-v bear">1h 收 &lt; $63,078（W-SMA200 落定周期地板 / D-SMA50 $63,102 台阶 —— 一根收在下方结束重夺读）</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">$68,030（D-EMA100 首目标）然后 $69,814 / $70,091（D-SMA150 / D-SMA100）进 $70k +95.4M call 墙</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R · 在 D-EMA100 平半；$70k call 墙是 runner 的结构性封盖</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R：</b>触发 ~$65,099（D-EMA50）、止损 $63,078（地板）=
                ~$2,021 风险；首目标 $68,030 = ~$2,931 回报 ≈ 1.45:1 —— 与
                07-19 scout 的 1.47:1 一致。<b> 硬规则：</b>不要在这根回落印上
                上线 —— SM 腿点火是决定性的升级、但框架要 OI 停止收缩、要一根
                上收确认需求在踏回、不只是空在补（24h 是 perp 在落 OI 上买回
                平仓、现货 CVD 平）。利率筛在 4.60% 是记录在案的逆风、论更小的
                0.2R size、不是在 SM 加入后站开。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">空 · STOOD DOWN · 本轮谱系最深正 γ（+294.6M）· 无放大器 · BTC 是 RS 领头 · SM 净多</span>
              <div className="dn-trade-name">
                追空 —— 保持站开：在一个 +294.6M 正 γ 本子里做空、SM 净多、BTC 领一根红 TradFi 盘、且无负放大器、是在打每一根结构线
              </div>
              <div className="dn-thesis">
                追空整轮重夺都站开、现在比 07-19 更 offside。dealer 本子加深到
                本轮谱系最富的净多 γ（+294.6M 对 +194.2M）、flip 坐在现货下
                $4,165、expiry strip 有效为正、无近端负放大器（下腿的燃料）、
                SM 本轮谱系首次净多、BTC 是相对强度领头（+1.70% 7d 对一根红股票
                复合体）。一根空在这里打 dealer 阻尼、打 SM 多、打 BTC 自己的
                RS。唯一的重武装是一根结构性破位、不是一根褪。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">站开 · 无仓 · 正 γ 本子 + SM 多 + 无放大器都论不做这根褪</span></div>
                <div><span className="dn-lvl-k">重武装触发（未激活）</span><span className="dn-lvl-v bear">1d 收 &lt; $63,078（W-SMA200 地板）AND strip 上出现一块新近端负 γ —— 两者都不在（strip 有效为正、由 31JUL +175.4M 主导）</span></div>
                <div><span className="dn-lvl-k">不要</span><span className="dn-lvl-v bear">不要在本轮谱系最深正 γ 本子里追空、SM 净多、BTC 领它的风险簇</span></div>
              </div>
              <div className="dn-gating">
                <b>门：</b>下腿的空之所以奏效是因为一块大近端负 γ 把动作放大进
                结算。这条 strip 上没有这样一块。重武装空需要周期地板直接破
                （$63,078 日收）AND 一块新负放大器出现 —— 一根结构性 regime
                变、不是一个正 γ 场里的回落褪。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 宏观尾 · put-spread re-grow 闸 —— 单腿点火（10Y）、无新对冲</span>
              <div className="dn-trade-name">
                下行 put-spread —— 不 re-grow：10Y 腿点火（4.60% &gt; 4.53%）但 HY OAS 2.69% 距它 2.78% 闸 9bp；一根单腿点火不是一根新对冲要的两腿确认
              </div>
              <div className="dn-thesis">
                put-spread re-grow 闸是两腿、两腿都必到：HY OAS &gt; 2.78% AND
                10Y &gt; 4.53%。本次渲染只点火 10Y 腿（4.60%、从 07-19 的 4.57%
                紧 3bp）—— 但 HY OAS 腿距 9bp 在 2.69%（RISK-ON、松 2bp）、比
                07-19 离闸更远。信用没在确认利率的应力。交易台不为在一个
                +294.6M 正 γ 本子、SM 净多、BTC 是 RS 领头时 re-grow 一根下行尾
                付权利金 —— 一根新 put-spread 会打 BTC 自己的相对强度和 dealer
                阻尼。reclaim-long 利率筛在 4.60% FALSE 已在上文记作 scout 逆风、
                不是这里的对冲触发。无新对冲。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">无仓 · 未 re-grow · 单 10Y 腿点火、HY OAS 腿距 9bp</span></div>
                <div><span className="dn-lvl-k">re-grow 触发（两腿必到）</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% 收（当前 2.69%、距闸 9bp）来 JOIN 已点火的 10Y &gt; 4.53%（4.60%）—— 一根两腿确认、不是单一利率腿</span></div>
                <div><span className="dn-lvl-k">reclaim-long 利率筛</span><span className="dn-lvl-v bear">10Y &lt; 4.55% 收 —— 现 FALSE 在 4.60%（从 4.57% 紧 3bp）；一根 scout-long 逆风、不是硬封、现在 SM 已确认</span></div>
              </div>
              <div className="dn-gating">
                <b>注意：</b>re-grow 闸是随水位下漂调低的酌情盯位、不是回测
                断点。对单一利率腿的一根新对冲会是滚到 24JUL 1.5 DTE 或 31JUL
                8.5 DTE 的 put-spread —— 但那两个 strip 都是净多 γ、所以一根新
                尾会没有放大器顺风、还会打重夺、不是骑它。交易台等 HY OAS 腿
                加入再 re-grow、或等周期地板直接破。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · SM 加入了出价（scout 硬腿点火）· 价格重夺 D-EMA50 封盖 · 本子 FLAT 等确认上收 · 地板落定、dealer 本子深正 γ、利率筛是唯一逆风</span>
            </h2>

            <p>
              07-19 那张决策条件里：需求质量/重夺 scout 的 SM 确认腿
              <span className="dn-em">决定性点火</span> —— SM 没只走平-到-回补、
              它翻了净多（+6,655、2026-07-21 06:36Z / BJ 14:36 越过）、那正是
              07-19 备忘说会改写这笔交易的那根线；D-EMA50 封盖重夺腿
              <span className="dn-em">点火</span>（两根完整日收加未收盘的 07-22
              bar 在 $65,099 上方）；「OI 仍扩张」子腿在这根回落上
              <span className="dn-em">没守住</span>（OI −2.16%）；reclaim-long
              利率筛保持 <span className="dn-em">FALSE</span>（10Y 4.60%、紧
              3bp）；宏观 re-grow 闸仍点火一条腿（10Y）、HY OAS 距 9bp；追空
              重武装 <span className="dn-em">没点火</span>（无地板破、无负放大器）。
              <em>重夺在等的那根硬腿 —— smart money 加入出价 —— 终于到了、所以
              scout 从递延升到已上膛；剩下的门是一根伴 OI 企稳的确认上收、不是
              一根新结构条件。</em>今天条件围绕一根上膛的 scout、一根落定的地板、
              一个深正 γ 的 dealer 本子、和一根孤立的利率筛逆风重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>Reclaim-long scout（多）—— 已上膛、SM 腿点火</td><td className="bull">下一根上收 &gt; D-EMA50 $65,099（24h ≥ 0）AND OI 企稳（Δ24h OI ≥ 0）—— SM 净多 +6,655 且封盖重夺已 TRUE</td><td>scout long 0.2R、目标 $68,030（D-EMA100）然后 $69,814 / $70,091；止损 $63,078</td></tr>
                <tr><td>OI 转上确认（缺的那节子腿）</td><td className="bear">Δ24h OI ≥ 0 伴一根上收 —— 当前 OI −2.16% 在回落上</td><td>这是触发剩下的门；一根只是补的回落（perp 在落 OI 上买回平仓）不是 scout 要的新需求确认</td></tr>
                <tr><td>Reclaim-long 利率筛</td><td className="bear">10Y &lt; 4.55% 收 —— 现 FALSE 在 4.60%（从 4.57% 紧 3bp）</td><td>scout 逆风、不是硬封、现在 SM 已确认；论更小的 0.2R size</td></tr>
                <tr><td>周期地板丢（重夺读结束）</td><td className="bear">1d 收 &lt; $63,078（W-SMA200 / D-SMA50 $63,102 台阶）</td><td>结束重夺论；另起评估 —— 落定的周收地板破</td></tr>
                <tr><td>追空重武装（未激活）</td><td className="bear">1d 收 &lt; $63,078 AND strip 上一块新近端负 γ —— 两者都不在</td><td>strip 有效为正（31JUL +175.4M 主导）；不要在 +294.6M 正 γ 本子里、SM 多时做褪</td></tr>
                <tr><td>宏观尾 re-grow（单腿点火）</td><td className="bear">HY OAS &gt; 2.78%（距 9bp）来 JOIN 10Y &gt; 4.53%（4.60%、已点火）</td><td>只在两腿确认上 re-grow；一根单一利率腿进一条正 γ strip 不是对冲触发</td></tr>
                <tr><td>dealer 本子保持正 γ</td><td className="bull">aggregate GEX 保持正（23JUL/24JUL/31JUL strip 里无新近端负块加入）</td><td>下行保持向 flip $61,765 阻尼；$70k/$72k call 墙封一根冲 —— 利小 scout 而非 runner</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是
              <span className="dn-signal">
                这根回落是解成一根守 D-EMA50 $65,099、OI 转回上的确认上收
                （那触发本轮首根活的多）、还是一根新下印把一根日收推到落定地板
                $63,078 下方、结束重夺读。smart money 加入了出价、地板落定、
                dealer 本子阻尼下行；缺的是一根干净的确认印、不是另一根结构条件
              </span>
              。在那之前、本篇按写好的跑：scout 已上膛（SM 腿点火、封盖重夺）
              但未上线、追空在本轮谱系最深正 γ 本子里站开、put-spread 不在一根
              单腿利率点火上 re-grow。宏观面保持分裂（利率/美元紧、信用/流动性
              松）、BTC 领一根红 TradFi 盘 +3.26pt 于 7d、中周期守它们的云上金叉。
              下一根印的对读是<em>上膛且耐心 —— 记录在案的买家转身了；多在确认收
              上触发、不是在回落上</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2（已过 codex 敌对式审计 · findings 记于 audits/2026-07-22-desk-note.md）
            </span>
            <b>判决：</b>codex STAGE B 对 v1 草稿返回 BLOCK-CRITICAL —— 1
            CRITICAL、2 MAJOR、3 MINOR —— 记于{' '}
            <code>audits/2026-07-22-desk-note.md</code>。每一条 finding 都已就地
            修正、并用 grep 核到全文零残留（修前 → 修后命中）：
            <b>DN-001（CRITICAL）：</b>把未收盘的 07-22 bar 冒充成一根完整日收；
            搜 <code>三/3 consecutive 日收/收在上方</code> 及语义变体（4 → 0）、
            全文改写为「两根完整日收（07-20、07-21）加未收盘的 07-22 bar」；
            D-EMA50 封盖重夺腿凭两根完整收仍点火。RESOLVED。<b>DN-002（MAJOR）：
            </b>SM 翻多时间被误标 UTC；搜 <code>14:36Z</code>（裸、3 → 0）、全部
            改成「2026-07-21 06:36Z / BJ 14:36」、与干净的内部引用一致。
            RESOLVED。<b>DN-003（MAJOR）：</b>+35.20M 到期被误标 15AUG；搜
            <code>15AUG</code>（1 → 0）、改正为 7AUG（源 btc_gex.html 列
            7AUG26 15.5DTE +35.20M）。RESOLVED。<b>DN-004（MINOR）：</b>「全正
            strip」与已披露的 26JUL −$0.18M 行矛盾；搜 <code>wholly / 全正</code>
            （5 → 0）、各处改述为「有效为正」并披露那根可忽略的 26JUL −$0.18M。
            RESOLVED。<b>DN-005（MINOR）：</b>MA 矩阵源范围对通配 glob 含糊；搜
            <code>1m_*.parquet</code>（1 → 0）、矩阵现披露为有意的
            btcusdt_1m_&#123;2024,2025,2026&#125;.parquet 子集（1,344,727 分钟 /
            934 日 / 134 周 bar）、在数据来源、正文、footer 三处、并把 200W 地板
            分出为它自己的 trap-watch 谱系。RESOLVED。<b>DN-006（MINOR）：</b>
            short_btc 24h 低缺 UTC 伴时；搜 <code>14:26</code>、现带 06:26Z（BJ
            14:26）。RESOLVED。补充的 ask-deepseek 数值重算（runbook §5、在此裁定
            —— GLM/deepseek 非审计人）逐项核对：其三条 MINOR 偏移标（D-SMA50
            +4.48%、W-EMA20 −5.92%、W-EMA200 −9.60%）按 live 现货 $65,930.01
            重算、页值正确（deepseek 的数字才是误算）；其 strip-sum「CRITICAL」
            （桶合 313.63M ≠ aggregate 294.6M）是源属性 —— 逐 expiry 桶与
            +294.6M 净都逐字来自 btc_gex.html、本篇已披露读的是 HTML total、
            故不改；+6.66k SM 头部是 +6,655.1 的合法取整；+5.0bp / −4.0bp 宏观 Δ
            列是面板自己的日度差、区别于正文引的 3bp / 2bp 篇间移动、两口径都
            保留。codex 已核清且未改：数据来源对正文各 tile、21:14Z 实时盘面
            算术（24h −0.70%、OI −2,260.8/−2.16%、SM +4,703.5→+6,655.1/+41.5%、
            retail 50.45→54.72、funding +2.76% live / +3.31% 24h 均、0/1442
            封顶与负行）、CVD/流向窗、GEX 双参考符号、R/R 1.45:1、requireViewer
            门控、EN/ZH 对齐。<b>Build note（INFO）：</b>本服务器跑 Node
            18.19.1；Next 16.2.6 对 Node &lt; 20.9.0 硬退出、所以完整
            <code>next build</code> 被环境阻塞。<code>npx --no-install tsc
            --noEmit</code> 是 build proxy、在 v2 修正后再跑一次通过。总体：
            已过 codex 敌对式审计 —— 全部 findings RESOLVED（grep 修后命中 = 0）。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体
            情况个性化。数字反映单一原子快照（2026-07-22 21:14Z）、
            provenance 在数据来源条带中按节披露；宏观 Tier-1 面板渲染
            2026-07-21 22:16Z（比快照早约 23h）、部分输入明确陈旧或待定
            并已标注。水位、规模与条件是交易台流程的示例、不是长期推荐。
            过去的相关性、γ 与仓位模式不绑定未来盘面。衍生品有全损风险、
            加杠杆下损失可超过保证金。
            <em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                smart money 加入了出价、价格重夺了封盖 —— 重夺在等的那根腿到了。
                但触发要一根确认上收、不是一根回落。scout 已上膛。耐心。
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
            v2 · 2026-07-22 21:14Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md ·
            btcusdt_1m_&#123;2024,2025,2026&#125;.parquet（MA 矩阵子集）·
            ma200w_trap_watch_state.json · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
