import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-07-26 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-07-26',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-07-26' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260726() {
  await requireViewer('/zh/desk/2026-07-26');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-07-26 · v2</span>
          <span>内部 · 仅供讨论 · v2 · 已过 codex 敌对式审计</span>
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
              <span className="dn-big">$64,392</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.35%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-07-26 00:06Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-07-26 00:06Z（snapshot pin，t == &ldquo;07-26 08:06&rdquo; BJ）</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · 锚钉在 00:06Z 那根（BJ 08:06）以求可复现 ·
                    文件 tail 在脚下继续走（末读 00:08Z）· 24h 窗口口径：头条
                    Δ 用同时钟的前一日基线 t == &ldquo;07-25 08:06&rdquo; BJ
                    （端点减 24h 前那根）；funding / flow 的逐行统计横跨 1,441
                    行窗口、溢价均值剔除 null 行
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-07-26 08:01 BJ scan（00:01Z）</td>
                  <td className="dn-flag">
                    滚动 latest 文件 · 逐字存档于
                    /opt/desk-note/snapshots/2026-07-26-0007/ · 较快照锚约
                    滞后 5 分钟 · 含未收盘 K 线
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-26 00:00Z 快照</td>
                  <td className="dn-flag">
                    约滞后 6 分钟 · Deribit idx $64,538 对 live $64,392 · 870
                    合约 · 头条 aggregate +131.5M 对 by-expiry rollup +151.83M
                    （= gex_summary.json net_gex $151,825,038）—— 一根 ~+20.33M
                    的不对账 source-panel 缺口、按 DN-003 谱系披露（本次 rollup
                    再次坐在头条<em>上方</em>、与 07-25 缺口同号）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-26 00:00Z
                  </td>
                  <td className="dn-flag">约滞后 6 分钟 · 7d 1h bar · 22 资产 · 165 rows · 已存档</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-25 22:16Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.85h · FRED Tier-1 日度利率周末 FROZEN
                    （07-25 周六 / 07-26 周日）—— 10Y 平 4.71%、TIPS 平 2.43%、
                    HY OAS 平 2.77% 对 07-25 备忘；只有连续报价的 FX 动了
                    （DXY +0.04 到 101.47、USD/JPY −0.04 到 163.79）· Fed 净
                    流动性 $5.917T（无新周度印）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-07-26 00:06Z（close $64,383.70）</td>
                  <td className="dn-flag">
                    同分钟锚 · 最末 bar 00:06Z、文件 mtime 00:06:xxZ · 偏移按
                    live 现货 $64,392.49 重算 · W-SMA150 / W-SMA200 在 2024–2026
                    MA 子集（134 根周 bar）上不可计算 —— 200W 周期地板本身可从
                    完整历史 / trap-watch 状态取得、见下一行
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W 支撑盯位</td>
                  <td className="dn-v-cell">ma200w_trap_watch_state.json · 重算于 2026-07-20 00:11Z</td>
                  <td className="dn-flag">
                    200W 周期地板可用并维护 —— 最末走完周 2026-07-19 收
                    $64,694.70、W-SMA200 $63,078.14、consecutive_above 3
                    （streak 自 2026-07-05）；完整 btcusdt_1m_*.parquet glob
                    （360 根周 bar、2019–2026）独立把走完周 W-SMA200 重算到
                    $63,078.14。134 根周 bar 的不可计算只是 2024–2026 MA 子集、
                    不是周期地板。守住的地板 $63,078（现货在上方 +2.08%）；
                    MA 子集里在它上方最近的可计算线是 D-SMA50 $63,269.28
                    （+1.78%）
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
                  <td className="dn-flag">相关主张明确为 framework only（btc_ntt_analysis.html JS 渲染、不可抽取）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dn-meta">
            <div>
              <span className="dn-k">funding · 8h 年化</span>
              <span className="dn-v">+4.30%</span>
              <span className="dn-src">live · 24h 均值 +4.24%（07-25 是 +7.25%）· max +9.14% ann（0.008345 字段、2 / 1441 行）· min +0.73% · 0 负行 · funding × 1095（原始 0.003929）</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bull">从再热里冷却下来</span>
              <span className="dn-src">区间 +0.73% / +9.14% · 均值 +7.25% → +4.24% ann · 仍 0 / 1441 负行 —— 多头还在付、但压力进上印时松了</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">+1.34%（+1,425.6 BTC）</span>
              <span className="dn-src">live · 106,078.0 → 107,503.6 · 下腿第四次扩张、形状仍不对 —— 现货 CVD +13,052 买、但期货 CVD −3,619 / taker −3,646 / big −3,534 在一根 +0.35% 上印上卖</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bull">64.23 / 35.77</span>
              <span className="dn-src">live_db `mkt_long_pct` · 24h 内从 65.12 → 64.23 去拥挤（24h 高 65.12 在基线、低 64.23 在快照）—— 拥挤多终于从谱系高 65.93（07-24）松下来</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bull">+5,093（净 LONG、但已 trim）</span>
              <span className="dn-src">live · long 13,476.12 − short 8,383.24 = +5,092.88（round +5,093）· 自 07-21 06:36Z 交叉起连续净多 · net 峰 +7,839 @ 07-25 06:36Z、然后一根线 de-gross −3,090、泄到 +4,314 谷 @ 15:21Z</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 24h 前</span>
              <span className="dn-v bear">+7,302 → +5,093（−2,209、−30.25%）</span>
              <span className="dn-src">|Δ|/prior_net = 2,208.99 / 7,301.87 = 30.25% · Δlong −1,724.3 / Δshort +484.7 —— buyer of record 进这根反弹时 TRIM 了：砍多 AND 加空、削弱净多信念</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">42.0% / 29.74%</span>
              <span className="dn-src">GEX IV 中位数 · 870 合约 · 30D close-to-close RV = logret.std × √365 × 100、用 30 根日 return（parquet 最末 bar 00:06Z）</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+3.52%（在上方）</span>
              <span className="dn-src">flip $62,205 · 对 live 现货 $64,392（+3.52%；64,392.49/62,205 − 1 = 3.517%）/ GEX 文件 Deribit idx $64,538（+3.75%；64,538/62,205 − 1 = 3.751%）—— 两参考都正、tile 取现货侧 · aggregate +131.5M 头条 / +151.83M rollup · 从 07-25 的 +99.9M 再充 γ</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                下腿印出了它第一根上收、背景在边缘上修复 —— 但 buyer of
                record 进反弹时 trim 了、D-EMA50 cap 仍未重夺
              </span>
              。07-25 收 <span className="dn-tag bull">$64,338.10</span>
              （+$221.60 对 07-24 的 $64,116.50）—— 07-21 顶起四根下腿里第一根
              走完的上收 —— 现货报
              <span className="dn-tag bull">$64,392（+0.35% 在 24h）</span>、
              重回上周丢掉的
              <span className="dn-tag bull">D-SMA20 $64,272（+0.19%）</span> /
              <span className="dn-tag bull">D-EMA20 $64,302（+0.14%）</span>对。
              但它仍坐在
              <span className="dn-tag bear">D-EMA50 $65,015 cap 下方 −0.96%</span>
              —— 那条在 07-23 重夺失败时翻成头顶阻力的线 —— 所以这根上收是
              企稳、不是重夺。OI 第四次扩张
              <span className="dn-tag bear">+1,425.6 BTC（+1.34%）</span>、形状
              没变：现货 CVD <span className="dn-tag bull">+13,052</span> 买、对
              期货 CVD <span className="dn-tag bear">−3,619</span>、taker-net
              <span className="dn-tag bear">−3,646</span>、big-net
              <span className="dn-tag bear">−3,534</span> 全在卖。retail 去拥挤
              <span className="dn-tag bull">65.12 → 64.23</span>、funding 从再热
              冷却（24h 均值 <span className="dn-tag bull">+7.25% → +4.24% ann</span>、
              仍 0 负行）。dealer 本子再充 γ
              <span className="dn-tag bull">+99.9M → +131.5M 头条</span>
              （rollup +151.83M）。但真正的看点是 smart money：仍是 buyer of
              record —— 净多 <span className="dn-tag bull">+5,093</span>、自
              07-21 06:36Z 交叉起连续 —— 却
              <span className="dn-em">进上印时 trim −2,209（−30.25%）、砍多
              −1,724、加空 +485</span>、07-25 06:41Z 一根线 de-gross −3,090。
              整条 recovery 立起来的那一根硬腿、用第一根上收去减、不是去加。
              本篇继续把 scout 保持在<span className="dn-em">递延、本子 FLAT
              </span>：不在一根没重夺 cap 的上收、一根期货主导的 distribution
              OI、一道 rates-FALSE 筛、和一个在 trim 的 buyer of record 上做
              scout long；也不在一个守住地板上方、再充 γ 的正本子上追空。
              重开这根多仍是结构性的 —— 一根 D-EMA50 重夺、在买方撑起 OI、
              smart money 在加不在 trim 的上收上。
            </p>

            <p>
              BTC 报 <span className="dn-tag">$64,392</span> live、
              <span className="dn-tag bull">+0.35%</span> 在 24h、在一条窄区间
              <span className="dn-tag">$64,447 / $63,810</span> 里（高 @ 07-25
              18:53Z / BJ 02:53 07-26、低 @ 07-25 08:53Z / BJ 16:53）。
              <span className="dn-signal">07-21 顶起的四根下腿转出了它第一根
              走完的上收</span>：07-21 $66,522.40 → 07-22 $66,082.00 → 07-23
              $65,069.60 → 07-24 $64,116.50 → 07-25
              <span className="dn-tag bull">$64,338.10（+$221.60）</span>、
              未收盘的 07-26 在 parquet 最末 bar
              <span className="dn-tag">$64,383.70</span>、边际上守在它上方。
              MA 矩阵读成一个修复但被封的三明治：现货重夺了
              <span className="dn-tag bull">D-SMA20 $64,272（+0.19%）</span> 与
              <span className="dn-tag bull">D-EMA20 $64,302（+0.14%）</span>对、
              <span className="dn-tag bull">D-SMA50 $63,269.28（+1.78%）</span>
              坐在下方、是周期地板上方最近的可计算线、头顶第一道真阻力是
              <span className="dn-tag bear">D-EMA50 $65,015（−0.96%）</span>
              失败 cap。
              <span className="dn-em">
                200W 周期地板本次可用并维护：trap-watch 状态
                （ma200w_trap_watch_state.json、重算于 2026-07-20 00:11Z）带着
                最末走完周 2026-07-19 在 W-SMA200
                <span className="dn-tag bull">$63,078.14</span>、连续三根周收在它
                上方、完整 btcusdt_1m_*.parquet glob（360 根周 bar、2019–2026）
                独立把它重算到同一根 $63,078 —— 134 根周 bar 的不可计算只是
                2024–2026 MA 子集、不是周期地板。所以 $63,078 是守住的地板
                （现货在它上方 +2.08%）、可计算的 D-SMA50 $63,269.28（+1.78%）
                正好坐在它上方、是 MA 子集里最近的支撑。
              </span>{' '}
              recovery 的 scout 曾在 SM buyer-of-record 腿上 ARMED、07-24 在
              D-EMA50 重夺失败时转 DEFERRED、07-25 继续递延；今天不重开它 ——
              重开门（一根 D-EMA50 重夺、在 OI 扩在买方、SM 加多、AND
              reclaim-long 利率筛真）一条腿都没填、SM 腿还弱了。本子保持 flat。
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面 · OI +1.34% 但仍 distribution 形（现货买对期货卖）· retail 去拥挤 65.12 → 64.23 · SM 仍是 buyer of record 但进反弹时 TRIM −30.25% · funding 从再热冷却</span>
            </h2>

            <p>
              <span className="dn-signal">
                仓位本子还在 distribute、即便价格企稳了
              </span>
              。OI 扩张 <span className="dn-tag bear">+1,425.6 BTC（+1.34%）</span>
              跨 24h —— 106,078.0 → 107,503.6 —— 下腿第四次扩张、分量还是同样
              分裂：现货 CVD 跑 <span className="dn-tag bull">+13,052</span>
              （跨 07-25 07:00Z cb_cvd reset 调整后）、而期货 CVD 跑
              <span className="dn-tag bear">−3,619</span>（跨同分钟 fut_cvd
              reset 调整后）、taker-net <span className="dn-tag bear">−3,646</span>、
              big-net <span className="dn-tag bear">−3,534</span> —— 期货激进卖
              进一个持续的现货买。与 07-25 的差别是这次现货买赢了盘面：印是
              <span className="dn-tag bull">+0.35%</span> 上、不是 −1.33% 下。
              retail 去拥挤
              <span className="dn-tag bull">mkt_long_pct 65.12 → 64.23</span>
              （24h 高 65.12 在基线、低 64.23 在快照）—— 拥挤多终于从它 07-24
              印的谱系高 65.93 松下来。
              <span className="dn-em">价格上 + OI 上 + 现货买赢 + retail 去
              拥挤、是比 07-25 那根下印更健康的组合 —— 但期货/taker/big 的卖
              和现货买上 OI-up 的形状仍是 distribution、不是 scout 被 arm 去
              买的那种需求驱动 OI-up。</span>
            </p>

            <p>
              smart money 仍是 buyer of record、但降了信念 —— 这根印的看点。
              <span className="dn-signal">
                SM 进第一根上收时 trim 了它的净多
              </span>
              。SM net 是 <span className="dn-tag bull">+5,093</span>（long
              13,476.12 − short 8,383.24 = +5,092.88）对 24h 前的
              <span className="dn-tag">+7,302</span> —— 一根
              <span className="dn-tag bear">Δnet −2,209（−30.25%）</span>
              （|+5,092.88 − (+7,301.87)| / 7,301.87 = 30.25%）。分解对
              recovery 读法是敌对的：
              <span className="dn-em">Δlong −1,724.3、Δshort +484.7</span> ——
              buyer of record 砍了它的多 AND 加了空、把净多信念削掉近三分之一。
              这一动很集中：SM net 峰
              <span className="dn-tag bull">+7,839 @ 2026-07-25 06:36Z（BJ
              14:36）</span>、然后一根线的 de-gross 印在
              <span className="dn-tag bear">2026-07-25 06:41Z（BJ 14:41）——
              Δnet −3,090.2、Δlong −4,200.3、Δshort −1,110.0 在现货 $64,019</span>
              （多的冲洗大过空的收）、net 泄到
              <span className="dn-tag">+4,314 谷 @ 2026-07-25 15:21Z（BJ
              23:21）</span>、再回到快照的 +5,093。所以 buyer-of-record 腿仍
              <em>TRUE</em>（净多、自 07-21 交叉起连续）、但它明显眨了眼 ——
              它用第一根上收去 trim、不是去加。
              <span className="dn-em">一个进第一根反弹就 trim 30% 的 buyer of
              record、加上 OI 仍期货主导、cap 未重夺、不是 scout 需要的那个在
              重夺后头加仓的买方。</span>
            </p>

            <p>
              杠杆侧进上印时从它 07-25 的再热冷却下来 —— 建设性、但 funding
              仍正。
              <span className="dn-signal">
                funding 松了但没转负
              </span>
              ：live <span className="dn-tag">+4.30% ann</span>（原始 0.003929
              × 1095）、24h 均值 <span className="dn-tag bull">+4.24%</span>
              （从 07-25 的 +7.25% 下来）、区间
              <span className="dn-tag">+0.73% / +9.14%</span>（max 0.008345
              字段、2 / 1441 行 —— 差 +10.95% Binance 封顶一截）、
              <span className="dn-tag">0 / 1441 负行</span> —— 多头还在付费持有、
              但压力松了。OI 上、funding 正但冷、retail 去拥挤、价格上：
              <span className="dn-em">杠杆本子进反弹时放了点气、而不是把多侧
              压得更狠 —— 比 07-25 温和的组合、但不是一个洗净的组合。</span>
              perp 在快照对现货
              <span className="dn-tag bear">−$60.42 折价</span>（1h 均 −$56.49、
              区间 −$68.47 / −$45.43；4h 均 −$59.72；24h 均 −$62.55、区间
              −$127.31 / −$17.83 —— 一根持续折价、跨 24h 从未升水）。1 分钟
              aggregate skew 快照 <span className="dn-tag bear">−22.1</span>
              （1h 均 −15.42、区间 −39.4 / +22.1）—— 进快照一档卖攻倾斜。
            </p>

            <p>
              窗口流向读成<em>一根被持续现货买抬起、对期货卖的上印、最后一小时
              平</em>。24h：价格 <span className="dn-tag bull">+0.35%</span>、
              OI <span className="dn-tag bear">+1,425.6 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +13,052</span>
              <span className="dn-em">（跨 07-25 07:00Z cb_cvd reset 调整后）</span>、
              期货 CVD <span className="dn-tag bear">Δ −3,619</span>
              <span className="dn-em">（跨同分钟 fut_cvd reset 调整后）</span>、
              大单 <span className="dn-tag bear">−3,534 BTC / 494 笔</span>、
              taker-net <span className="dn-tag bear">−3,646</span> ——
              <span className="dn-em">现货重买、期货卖、OI 在卖侧扩；+0.35%
              是在一根现货买压过期货主导 distribution 上印出</span>。4h（进快照）：
              价格 <span className="dn-tag bull">+0.06%</span>、OI
              <span className="dn-tag bull">+112.2 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +1,751.2</span>、期货 CVD
              <span className="dn-tag bear">Δ −19.3</span>、大单
              <span className="dn-tag bull">+30.4 BTC</span>、taker-net
              <span className="dn-tag bear">−19.3</span> —— <em>平到上、现货买
              仍是驱动、期货大致平衡</em>。1h：价格
              <span className="dn-tag bear">−0.06%</span>、OI
              <span className="dn-tag bull">+13.5 BTC</span>、现货 CVD
              <span className="dn-tag bear">Δ −28.9</span>、期货 CVD
              <span className="dn-tag bull">Δ +17.4</span>、大单
              <span className="dn-tag bull">+16.2 BTC / 10 笔</span>、taker-net
              <span className="dn-tag bull">+17.4</span> —— <em>进快照平、两本
              都静</em>。持续的现货 CVD 买是整条 recovery 唯一那根建设性读 ——
              今天它终于把期货卖压出一根绿印 —— 但它仍在买进一个期货主导的
              distribution、且没重夺 cap。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 共振松到 1 多 / 4 空 / 5 中（从 1/6/3）· regime 6/9 动量趋势延续（JT≥0）· 30m 水上死叉刚印 对 1w 水下金叉刚印 · 1M ⚡TD9 BUY + 底背离 1h/3d/1w</span>
            </h2>

            <p>
              <span className="dn-signal">
                MTF 引擎进上印时软化了它的偏空、但净仍读卖反弹
              </span>
              。共振是 <span className="dn-tag bear">1 多 / 4 空 / 5 中</span>
              横跨 10 周期（对 07-25 的 1 多 / 6 空 / 3 中 —— 两根空周期化到
              中性）。短端带混合而非一致偏空（15m 中、30m 空、1h 中、4h 空）；
              中端带着趋势伤 —— <span className="dn-tag bear">12h 水上死叉 4
              bar</span>、8h 水上死叉 8 bar。新鲜交叉两向都切：一根
              <span className="dn-tag bear">30m 水上死叉刚印</span> 对一根
              <span className="dn-tag bull">1w 水下金叉刚印</span>。反转集合仍
              活：<span className="dn-tag bull">1M ⚡TD9 BUY</span>、
              <span className="dn-tag bull">1h / 3d / 1w</span> 上一簇底背离、
              3d 水下金叉 5 bar 前；对着它是 15m / 30m / 1d 上一簇顶背离。
              regime 引擎读 <span className="dn-tag">6/9 动量趋势延续（JT≥0）</span>
              （从 07-25 的 5/9 周期反转翻过来）。RSI 全线中位（1h 53.7、4h
              42.4、8h 46.4、1w 39.1）、没有一根周期超买或深超卖。
              <span className="dn-em">
                直读：引擎在价格企稳时松开它最偏空的读、刚印的 1w 水下金叉和
                1M TD9 BUY 是建设性的、但中端死叉和顶背离簇让净读保持卖反弹、
                直到一根上收重夺 D-EMA50 cap。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">64,329</td><td className="num">52.8</td><td className="bear">死叉（水上）15b</td><td className="bull">云上 ↓64.2k 42b</td><td>Buy 3</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>30m</td><td className="num">64,329</td><td className="num">58.4</td><td className="bear">死叉（水上）刚印</td><td className="neut">云内 63.9–64.4k 19b</td><td>Buy 1</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>1h</td><td className="num">64,329</td><td className="num">53.7</td><td className="bull">金叉（水下）22b</td><td className="bear">云下 ↑64.4k 60b</td><td>Sell 1</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">64,329</td><td className="num">42.4</td><td className="bear">死叉（水上）21b</td><td className="bear">云下 ↑64.4k 1b</td><td>Sell 4</td><td>—</td></tr>
                <tr><td>8h</td><td className="num">64,329</td><td className="num">46.4</td><td className="bear">死叉（水上）8b</td><td className="bull">云上 ↓63.8k 51b</td><td>Sell 2</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">64,329</td><td className="num">48.3</td><td className="bear">死叉（水上）4b</td><td className="bull">云上 ↓62.2k 24b</td><td>Buy 7</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">64,329</td><td className="num">50.6</td><td className="neut">—</td><td className="neut">云内 62.2k–70.2k 6b</td><td>Buy 3</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>3d</td><td className="num">64,329</td><td className="num">45.0</td><td className="bull">金叉（水下）5b</td><td className="bear">云下 ↑75.3k 18b</td><td>Buy 1</td><td>BULL reg</td></tr>
                <tr><td>1w</td><td className="num">64,329</td><td className="num">39.1</td><td className="bull">金叉（水下）刚印</td><td className="bear">云下 ↑97.1k 25b</td><td>Sell 2</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">64,329</td><td className="num">44.0</td><td className="neut">—</td><td className="bull">云上 ↓47.0k 29b</td><td>⚡ TD9 BUY</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 08:01 BJ scan（00:01Z；滚动 latest
                    文件、逐字存档于
                    /opt/desk-note/snapshots/2026-07-26-0007/）。头部告警：
                    <em>1w 水下金叉（刚印）</em>、<em>30m 水上死叉（刚印）</em>、
                    <em>1M ⚡TD9 BUY</em>。净读：多周期共振偏空 · 反弹偏卖、
                    高周期底背离簇 3d/1w。扫描现货 $64,329、24h +0.35%、24h H/L
                    $64,417 / $63,760、qVol $2.96B（00:06Z 实时盘面头部读
                    $64,392 / +0.35% 在同一窗 —— 5 分钟差解释水位差异）。收盘
                    为未收盘 K 线；每个值在各周期收盘前都按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵确认修复但被封的读。现货 $64,392.49 坐在
              <span className="dn-tag bull">D-SMA50 $63,269.28 上方 +1.78%</span>
              —— 守住的 $63,078 W-SMA200 周期地板上方最近的可计算 MA 子集线
              （现货在地板上方 +2.08%）—— 并已重夺
              <span className="dn-tag bull">D-SMA20 $64,272.13（+0.19%）</span> /
              <span className="dn-tag bull">D-EMA20 $64,301.61（+0.14%）</span>对、
              但仍在一叠头顶线下方、按顺序：
              <span className="dn-tag bear">D-EMA50 $65,015.40（−0.96%）</span>
              （失败 cap / entry-validation 线）、
              <span className="dn-tag bear">D-EMA100 $67,761.73（−4.97%）</span>
              （任何重夺上的 working 首目标）、
              <span className="dn-tag bear">D-SMA100 $69,663.01（−7.57%）</span>、
              <span className="dn-tag bear">D-SMA150 $69,775.28（−7.71%）</span>、
              <span className="dn-tag bear">W-SMA20 $69,788.62（−7.73%）</span>、
              <span className="dn-tag bear">W-EMA20 $69,941.30（−7.93%）</span>、
              <span className="dn-tag bear">D-EMA150 $70,676.04（−8.89%）</span>、
              <span className="dn-tag bear">D-SMA200 $72,133.37（−10.73%）</span>、
              <span className="dn-tag bear">W-EMA200 $72,920.50（−11.69%；种子）</span>、
              <span className="dn-tag bear">D-EMA200 $73,497.71（−12.39%）</span>。
              更高更远、已弃用：W-EMA150 $76,742.70（−16.09%；种子）、W-EMA50
              $78,968.48（−18.46%）、W-EMA100 $80,312.42（−19.82%）、W-SMA50
              $85,386.31（−24.59%）、W-SMA100 $88,488.84（−27.23%）。
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-07-26 00:06Z（close $64,383.70）；
                偏移按 live 现货 $64,392.49 重算。显示的 MA 水位按 $ 取整、
                偏移用精确序列值算。W-SMA150 / W-SMA200 在这个 2024–2026 MA
                子集（134 根周 bar）上不可计算 —— 200W 周期地板 $63,078 另从
                trap-watch 状态与完整历史 glob 取得；W-EMA150 $76,742 与
                W-EMA200 $72,920 能显示是因为 EMA 从可用历史 seed、并按种子
                值报出。日线收盘：07-20 $65,224.80、07-21 $66,522.40、07-22
                $66,082.00、07-23 $65,069.60、07-24 $64,116.50、07-25 $64,338.10
                （下腿第一根走完的上收、+$221.60、但仍在 D-EMA50 cap 下方）、
                07-26（未收盘）$64,383.70。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子再充 γ +99.9M → +131.5M 头条 / +151.83M rollup · flip $62,205（现货 +3.52% 上方）· strip 更正 —— 07-25 的 $64k 负墙没了、$64.5k 现在 +13.38 · 31JUL +87.21M 主导 · $70k/$72k call cap 头顶</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子在 07-25 的去 γ 后再充回正
              </span>
              。aggregate GEX 是 <span className="dn-tag bull">+131.5M / 1%</span>
              在 HTML 头条、by-expiry rollup 汇总
              <span className="dn-tag">+151.83M</span>（= gex_summary.json
              net_gex $151,825,038）—— 一根
              <span className="dn-em">~+20.33M 不对账 source-panel 缺口、按
              DN-003 谱系披露；本次 rollup 再次坐在头条上方、与 07-25 缺口
              同号</span>。两口径都是本子从 07-25 的 +99.9M 恢复 —— 去 γ 部分
              逆转、本子重新更深净多 γ。0-γ flip 是
              <span className="dn-tag">$62,205</span>、现货 $64,392 坐在
              <span className="dn-tag bull">+3.52% 上方</span>
              （64,392.49 / 62,205 − 1 = +3.517%）；GEX 文件自己的「dist to
              flip」对它的 Deribit idx $64,538（比 live 现货高 $146）读 +3.8%、
              也就是 <span className="dn-tag bull">+3.75%</span>（64,538 /
              62,205 − 1 = +3.751%）—— 两参考都正、现货在两个上都在 flip 上方、
              缓冲对 07-25 的 +3.49% 大致平。
              <span className="dn-em">
                strip 本次更正：07-25 坐在现货的 $64,000 −10.23M 负口袋没了
                （$64,500 墙现在 +13.38M 正撑）、唯一的近端负是小的 —— 27JUL
                −3.14M 与 29JUL −0.04M —— 对着一根 26JUL 0.3DTE +14.52M 正、
                今日 08:00Z 结算（快照后约 8h）。唯一实质负是 $60,000 −17.48M
                崩盘 put 残余、远在现货下方。
              </span>{' '}
              主导磁铁是 <span className="dn-tag bull">31JUL 5.3DTE +87.21M</span>
              （五天外）、其后 7AUG +24.75M 与 28AUG +18.28M。最重的墙是头顶
              call cap：<span className="dn-tag bull">$70k +49.35M</span>、
              <span className="dn-tag bull">$72k +31.06M</span>、
              <span className="dn-tag bull">$68k +18.71M</span>、
              <span className="dn-tag bull">$64.5k +13.38M</span>、
              <span className="dn-tag bull">$67k +11.88M</span>、
              <span className="dn-tag bull">$65k +11.49M</span>、
              <span className="dn-tag bull">$66k +11.30M</span>、
              <span className="dn-tag bull">$80k +8.96M</span>、
              <span className="dn-tag bull">$69k +8.31M</span>、对着下方的
              <span className="dn-tag bear">$60k −17.48M</span> 崩盘 put。
              <span className="dn-em">
                净：本子比 07-25 更深阻尼、现货在 flip 上方 +3.52%、现货处的
                近端负口袋已清、一堵正 γ call cap 坐在 $65k–$72k 头顶 ——
                所以不追空的纪律本次重新强回来、同一堵封了整条 recovery 的
                call-wall cap 结构（$65k–$72k）在头顶完好。
              </span>
            </p>

            <p>
              IV 中位数横跨 870 合约是 <span className="dn-tag">42.0%</span>
              对 30D close-to-close RV <span className="dn-tag">29.74%</span>
              —— 链级 richness <span className="dn-tag">~+12.3pt</span>。是 N
              合约的链中位数、<span className="dn-em">不是</span>可交易价差；
              expiry- / strike-level vega、skew、期限结构仍未载入；vol 读法
              保持 framework only。Put/Call OI 比 0.43（call OI 305,438 /
              put OI 131,141）—— 一本 call 重的本子、与头顶 call-wall cap
              结构一致。RV 方法：30D close-to-close、logret.std × √365 × 100、
              用最末 30 根日 log return、锚自 parquet 最末 bar 2026-07-26
              00:06Z。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · Tier-1 周末 FROZEN —— 10Y 平 4.71%、TIPS 平 2.43%、HY OAS 平 2.77%（距闸 1bp）、DXY 101.47 EXTREME RISK-OFF · reclaim-long 利率筛仍 FALSE · put-spread 两腿必到、HY OAS 仍差 1bp</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观盘面周末冻住、分裂维持
              </span>
              。面板渲染 2026-07-25 22:16Z、比快照早约 1.85h、但 FRED Tier-1
              日度利率自周五起没印新值 —— 07-25 周六、07-26 周日 —— 所以核心
              对 07-25 备忘不变。US 10Y nominal
              <span className="dn-tag bear">4.71%（平）</span>、regime z
              <span className="dn-tag bear">+2.66</span>、偶发 z
              <span className="dn-tag bear">+2.34</span> —— EXTREME RISK-OFF。
              10Y TIPS real <span className="dn-tag bear">2.43%（平）</span>、
              regime z <span className="dn-tag bear">+3.05</span> —— EXTREME
              RISK-OFF。5Y5Y BE 通胀
              <span className="dn-tag">2.28%（平）</span>。HY OAS
              <span className="dn-tag">2.77%（平）</span>、regime z
              <span className="dn-tag bull">−0.69</span> —— 仍「松」、且仍只差
              <span className="dn-em">1bp 到 2.78% put-spread re-grow 闸</span>。
              MOVE 债波 <span className="dn-tag">76.8（平）</span> —— 中性标。
              DXY <span className="dn-tag bear">101.47（+0.04）</span>、regime z
              <span className="dn-tag bear">+2.30</span> —— EXTREME RISK-OFF、
              美元在连续报价盘面上略硬。NFCI
              <span className="dn-tag bull">−0.552（平、陈旧 8d）</span> ——
              RISK-ON。Fed 净流动性
              <span className="dn-tag bear">$5.917T（平）</span>、偶发 z
              <span className="dn-tag bear">−2.47</span> —— 无新周度印。
              USD/JPY <span className="dn-tag">163.79（−0.04）</span>；US-JP
              10Y 利差 <span className="dn-tag">2.04%（平）</span>。
              <span className="dn-em">
                净：reclaim-long 利率筛（10Y &lt; 4.55%）在 4.71% 仍 FALSE ——
                scout long 的宏观闸紧紧关着。put-spread re-grow 闸是两腿必到
                （HY OAS &gt; 2.78% AND 10Y &gt; 4.53%）：10Y 腿在 4.71% 真、
                HY OAS 腿在 2.77% 仍差 1bp 触发 —— 周末不变、单腿触发不是对冲
                触发。利率/美元核心紧、信用/流动性侧松；分裂持续。
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
                <tr><td>US 10Y nominal</td><td className="num">4.71%</td><td className="num">平（周末）</td><td className="num bear">+2.66</td><td className="num bear">+2.34</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.43%</td><td className="num">平（周末）</td><td className="num bear">+3.05</td><td className="num bear">+2.06</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.28%</td><td className="num">平（周末）</td><td className="num">+0.77</td><td className="num bear">+2.51</td><td className="neut">无标 · 偶发</td></tr>
                <tr><td>HY OAS</td><td className="num">2.77%</td><td className="num">平（周末）</td><td className="num bull">−0.69</td><td className="num">+1.23</td><td className="bull">松 · 距 re-grow 闸 1bp</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.552</td><td className="num">平</td><td className="num bull">−1.51</td><td className="num bull">−1.71</td><td className="bull">RISK-ON · 陈旧 8d</td></tr>
                <tr><td>MOVE 债波</td><td className="num">76.8</td><td className="num">平（周末）</td><td className="num">+0.30</td><td className="num">+1.75</td><td className="neut">中性</td></tr>
                <tr><td>DXY</td><td className="num">101.47</td><td className="num bear">+0.04</td><td className="num bear">+2.30</td><td className="num">+1.04</td><td className="bear">EXTREME RISK-OFF · 更硬</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.917T</td><td className="num">平</td><td className="num">+0.56</td><td className="num bear">−2.47</td><td className="bull">松 · 无新印</td></tr>
                <tr><td>USD/JPY</td><td className="num">163.79</td><td className="num bull">−0.04</td><td className="num bear">+1.74</td><td className="num">+2.05</td><td className="neut">无标 · 偶发</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">2.04%</td><td className="num">平（周末）</td><td className="num">−0.26</td><td className="num">+2.34</td><td className="neut">中性</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp（月度）</td><td className="num bear">+2.42</td><td className="num">+1.09</td><td className="stale">月度 · 不依赖</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7714</td><td className="num">−0.00</td><td className="num bull">−1.34</td><td className="num">−0.62</td><td className="neut">无标</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、165 rows、汇总 00:00Z ——
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。regime
              IDIOSYNCRATIC、非对角线均值
              <span className="dn-tag">|r| 0.234</span>（在 0.25 阈值下方）。
              BTC 列出的对齐、按 |r| 排：NQ
              <span className="dn-tag">+0.509</span>、SP500
              <span className="dn-tag">+0.422</span>、COPPER
              <span className="dn-tag">+0.414</span>、TSLA
              <span className="dn-tag">+0.388</span>、SILVER
              <span className="dn-tag">+0.372</span>、PLAT
              <span className="dn-tag">+0.364</span>、JP225
              <span className="dn-tag">+0.353</span>、GOLD
              <span className="dn-tag">+0.310</span>、URNM
              <span className="dn-tag">+0.285</span>、NVDA
              <span className="dn-tag">+0.269</span>、CL
              <span className="dn-tag">−0.262</span>、BRENT
              <span className="dn-tag">−0.246</span>。7d 相对表现：
              <span className="dn-tag bear">BTC −0.63%</span>、NQ
              <span className="dn-tag bear">−0.79%</span>、SP500
              <span className="dn-tag bear">−0.15%</span>、JP225
              <span className="dn-tag bear">−2.03%</span>、NVDA
              <span className="dn-tag bull">+2.86%</span>、META
              <span className="dn-tag bear">−6.36%</span>、MSFT
              <span className="dn-tag bear">−3.37%</span>、GOOGL
              <span className="dn-tag bear">−7.45%</span>、AMZN
              <span className="dn-tag bear">−6.17%</span>、TSLA
              <span className="dn-tag bear">−18.04%</span>。商品领头：SILVER
              <span className="dn-tag bull">+4.36%</span>、CL
              <span className="dn-tag bull">+3.65%</span>、URNM
              <span className="dn-tag bull">+2.21%</span>、COPPER
              <span className="dn-tag bull">+1.56%</span>、BRENT
              <span className="dn-tag bull">+1.30%</span>、GOLD
              <span className="dn-tag bull">+1.02%</span>。
              <span className="dn-em">
                BTC（−0.63% 7d）领先 equity/megacap 簇的一部分 —— 对 NQ
                （−0.79%）一根薄 +0.16pt 边、且清出一根 −18.04% 的 TSLA、一根
                −7.45% 的 GOOGL 和一根 −6.36% 的 META —— 但它同时落后 SP500
                （−0.15%）和 NVDA（+2.86%）、而能源、白银、铀、铜、黄金都跑赢
                它。所以这仍是一根对股票相对的 tell、不是全 strip RS 领导
                （DN-001 谱系）、对 NQ 的边从 07-25 的 +1.81pt 收窄到 +0.16pt。
              </span>{' '}
              JGB 月度 2.67% 带 EXTREME RISK-OFF 月度标 —— 不依赖。
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · 本子 FLAT · scout 递延（重开结构性、无腿填、SM 腿弱了）· 追空站下（re-gamma 让威慑重强）· put-spread 不在单 10Y 腿上 re-grow</span>
            </h2>

            <p>
              <span className="dn-signal">
                本子保持 flat、scout 递延第三天
              </span>
              。上一篇（07-25）把 reclaim scout 保持 DEFERRED、带一道结构性
              重开门。今天没有一条重开条件填、且 buyer-of-record 腿弱了：(1)
              desk 需要一根 D-EMA50 重夺、在一根<em>上收</em>上 —— 07-25 是一根
              上收但收 $64,338.10、仍在 $65,015 cap 下方、所以 cap 未重夺；(2)
              它需要 OI 扩在<em>买方</em>、而今天的 OI 扩仍是期货主导
              distribution（现货买对期货 / taker / big 卖）；(3) 它需要
              reclaim-long 利率筛真（10Y &lt; 4.55%）、而 10Y 冻在 FALSE
              4.71%；(4) SM buyer-of-record 腿进反弹时<em>trim −30.25%</em>
              （Δlong −1,724、Δshort +485）、与 reclaim 需要的 SM 加仓相反。
              对着追空、dealer 本子再充 γ（+99.9M → +131.5M、rollup
              +151.83M）、现货处的 $64k 负口袋清了、现货在 flip 上方 +3.52%、
              地板守住、1M ⚡TD9 BUY 加 1h/3d/1w 底背离警告反弹风险 —— 所以一根
              硬追空比 07-25 更站下、不是更少。今天的本子是：无 scout 入场、
              无空、无新对冲。
            </p>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout · 递延 · 重开结构性 · 无腿填 · SM 腿弱了 · 等一根确认的上收重夺、在买方上</span>
              <div className="dn-trade-name">
                Reclaim scout —— 递延第三天；第一根上收来了但停在 D-EMA50 cap 下方、OI 仍 distribution 形、利率筛冻在 FALSE、buyer of record 进反弹时 trim −30%
              </div>
              <div className="dn-thesis">
                scout 曾在 SM buyer-of-record 腿上 arm（自 07-21 06:36Z 交叉
                起净多）、门在一根真的 D-EMA50 cap 重夺上 —— 那条验证了
                recovery 入场、然后在 07-23 收 $65,069.60 破下它时翻成头顶
                阻力的线（cap 此后滑到 $65,015）。今天下腿印出它第一根上收
                （07-25 $64,338.10、+$221.60）、现货重夺了 D-SMA20 / D-EMA20
                对、但停在 D-EMA50 cap 下方 −0.96%；OI 第四次扩（+1,425.6 BTC）
                但在期货主导 distribution、现货买是唯一的正；funding 冷却但
                仍正（0 负行）；且 —— 新发展 —— buyer of record trim 了它的
                净多 −2,209（−30.25%）、砍多加空、用第一根反弹去减不是去加。
                reclaim 需要一根<em>上收</em>重夺 D-EMA50 $65,015、OI 扩在
                买方、SM 加多、利率筛（10Y &lt; 4.55%）真 —— 一条都不成立。
                状态：<em>递延</em>、重开是结构性的、SM 腿现在需要重新变硬。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">重开触发（全部必到）</span><span className="dn-lvl-v bull">1d 收 &gt; D-EMA50 $65,015（一根上收重夺、不是一根印）AND OI 扩在买方（现货+期货 CVD 都上、SM 加多不是补/trim）AND 10Y &lt; 4.55% 收</span></div>
                <div><span className="dn-lvl-k">scout 入场</span><span className="dn-lvl-v bull">在确认的上收重夺上、scout long 0.2R</span></div>
                <div><span className="dn-lvl-k">止损</span><span className="dn-lvl-v bear">守住的地板 —— W-SMA200 $63,078（在 trap-watch 状态里维护、三根周收在上方）/ 可计算的 D-SMA50 $63,269；一根日收破它下方结束「地板上方消化」读</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">D-EMA100 $67,762（working 首目标）然后 D-SMA100 $69,663 / W-SMA20 $69,789 簇</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R · 在 D-EMA100 平半</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R：</b>重开入场 ~D-EMA50 $65,015、止损地板 $63,078 =
                ~$1,937 风险；首目标 D-EMA100 $67,762 = ~$2,747 回报 ≈
                <b>1.42:1</b>（2,747 / 1,937 = 1.418）。<b>硬规则：</b>入场是在
                确认的上收、买方撑起 OI AND smart money 加仓上决定、不是在一根
                进 cap 的反弹、也不是在 buyer of record 还在 trim 时。一根停在
                cap 下方的上收、一根期货主导 OI 扩、一道冻 FALSE 的利率筛、
                和一根 −30% SM trim 是企稳、不是重夺；不要抢在上收前面。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 追空 · 站下 · re-gamma 让威慑重强</span>
              <div className="dn-trade-name">
                追空 —— 站下；本子再充 γ +99.9M → +131.5M、现货处 $64k 负墙清了、地板守住、超卖反弹暗示让它偏晚
              </div>
              <div className="dn-thesis">
                整条 recovery 谱系一直拒绝追空、理由是 dealer 本子净多 γ ——
                一本阻尼、惩罚动量空的本子。那道威慑在 07-25 本子去 γ &gt;50%
                时减弱；今天它重强：aggregate GEX 从 +99.9M 恢复到 +131.5M
                （rollup +151.83M）、07-25 坐在现货的 $64,000 −10.23M 负口袋
                清了（$64,500 墙现在 +13.38M 正）、现货在 flip 上方 +3.52%、
                地板守住（现货在可计算 D-SMA50 上方 +1.78%、三根走完周收在
                $63,078 谱系地板上方）、1M ⚡TD9 BUY 加 1h/3d/1w 底背离簇警告
                盘面已经拉伸到够、那根宽慰反弹现在已经开始。状态：
                <em>站下</em>、盯。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">would-arm 触发</span><span className="dn-lvl-v bear">一根 1d 收 &lt; 地板（D-SMA50 $63,269 / $63,078 谱系）且 aggregate GEX 转净负（加进一块新的近端负）—— 一根穿地板进负 γ 本子</span></div>
                <div><span className="dn-lvl-k">不要</span><span className="dn-lvl-v bear">不在一个再充 γ 净正、在 flip 上方、地板守住、1M TD9 BUY + 底背离簇仍活的本子上追空</span></div>
              </div>
              <div className="dn-gating">
                <b>纪律：</b>空是被一根穿进负 γ 本子的地板破 arm 的、不是被
                任何正本子的去 γ arm —— 而本次本子是再充 γ 不是去 γ。直到
                地板在一根收上让出、本子翻负、追空保持一道观察。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 宏观尾 · put-spread 不 re-grow · 两腿必到闸未满（HY OAS 差 1bp、周末冻）</span>
              <div className="dn-trade-name">
                下行 put-spread —— 不 re-grow；re-grow 闸两腿必到、只有 10Y 腿真（HY OAS 2.77% 仍差 1bp 触发、周末不变）
              </div>
              <div className="dn-thesis">
                put-spread re-grow 闸按谱系设计是两腿必到：HY OAS &gt; 2.78%
                收 AND 10Y &gt; 4.53% 收。10Y 腿在 4.71% 稳稳真、HY OAS 腿在
                2.77% 仍差 1bp 触发 —— 周末冻、对冲触发迄今最近但没触发。单腿
                触发不是对冲触发；两腿规则正是为了让一根孤立的利率动作、不
                在一个仍松的信用盘面上（NFCI RISK-ON、HY OAS regime z −0.69）
                re-grow 一根尾。不滚、无新腿。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">re-grow 触发（两腿）</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% 收（当前 2.77%、距 1bp）AND 10Y &gt; 4.53% 收（当前 4.71%、真）</span></div>
                <div><span className="dn-lvl-k">reclaim-long 利率筛</span><span className="dn-lvl-v bear">10Y &lt; 4.55% 收 —— 在 4.71% FALSE、周末冻；scout long 的宏观闸关着</span></div>
              </div>
              <div className="dn-gating">
                <b>注意：</b>re-grow 闸是随水位漂设的酌情盯位、不是回测断点。
                如果两腿终于一起触发、届时重新评估对冲 —— 本篇不带任何常设
                滚续指令、也不设前向 expiry；dealer strip 是净多 γ、一根新尾
                在这里不会带放大器顺风。HY OAS 单腿收盘接近值得标出、但不作
                行动、且周末冻意味着下一根 FRED 印（周一）是它最早能动的时点。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 第一根上收但封在 D-EMA50 下方 · OI 仍 distribution 形 · buyer of record trim −30% · 本子再充 γ、地板守住 · scout 递延、本子 flat</span>
            </h2>

            <p>
              07-25 那张条件里：D-EMA50 重夺没触发 —— 07-25 收 $64,338.10、
              一根上收但仍在 $65,015 cap 下方、现货现在在它下方 −0.96%；
              OI-up-on-buyers 条件没触发 —— OI 扩了但在期货主导 distribution
              （现货买对期货 / taker / big 卖）；reclaim-long 利率筛在 4.71%
              停在 FALSE（周末冻）；地板守住（现货在可计算 D-SMA50 $63,269
              上方 +1.78%、三根走完周收在 $63,078 谱系地板上方）；
              buyer-of-record 腿停在 TRUE（SM 净多 +5,093、自 07-21 交叉起
              连续）但进反弹时<em>trim −30.25%</em>；dealer 本子再充 γ
              （+99.9M → +131.5M）而不是继续去 γ。<em>没有一条条件触发去 arm
              一笔交易；失败-cap-test 读延伸成一根企稳、在边缘上改善了背景、
              但门未满、SM 腿更弱。</em>条件围绕一根第一根上收但被封的盘面、
              一根 distribution 形 OI、一个再充 γ 的 dealer 本子、一个在 trim
              的 buyer of record、和一根守住的地板重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>Reclaim scout（多）—— 重开门</td><td className="bull">1d 收 &gt; D-EMA50 $65,015（上收）AND OI 扩在买方 AND SM 加多 AND 10Y &lt; 4.55% 收</td><td>scout long 0.2R、止损地板 $63,078 / $63,269、目标 D-EMA100 $67,762 · R/R ≈ 1.42:1</td></tr>
                <tr><td>Cap 重夺确认（上腿开始）</td><td className="bull">1d 收 &gt; $65,015、SM 加多、OI 在买方</td><td>把 scout 重开为 live；地板上方消化读转成一根朝 D-EMA100 的 recovery 腿</td></tr>
                <tr><td>Cap-test 失败重续（下腿延续）</td><td className="bear">一根新的 1d 收更低、丢掉 D-SMA50 $63,269 / $63,078 地板</td><td>地板上方消化读结束；重新评估 —— escalation 是地板破、不是被封的上收</td></tr>
                <tr><td>追空（would-arm）</td><td className="bear">1d 收 &lt; 地板 且 aggregate GEX 转净负（新近端负块）</td><td>一根穿地板进负 γ 本子会 arm 一根空、止损回到地板上方；再充 γ 的本子不 arm 它</td></tr>
                <tr><td>宏观尾 re-grow（两腿）</td><td className="bear">HY OAS &gt; 2.78%（距 1bp、冻）AND 10Y &gt; 4.53%（在 4.71% 真）</td><td>重新评估下行 put-spread 对冲；单腿触发不是触发（本篇不设常设滚续或前向 expiry）</td></tr>
                <tr><td>reclaim-long 利率筛</td><td className="bear">10Y &lt; 4.55% 收 —— 在 4.71% FALSE、周末冻</td><td>scout long 的宏观闸关着；一根没有筛真的重夺印不转成一笔 live 多</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是
              <span className="dn-signal">
                这根企稳是否转成一根真的上收重夺 D-EMA50 $65,015、买方撑起
                OI（现货 AND 期货 CVD 都上、smart money 加多不 trim、10Y 回
                4.55% 下方）、还是 buyer of record 的 −30% trim 标记了这根
                反弹的顶、一根新的更低收滚回去测 D-SMA50 / $63,078 地板 ——
                在那里只有一根穿进净负 dealer 本子的破、才 arm 整条 recovery
                一直站下的追空
              </span>
              。在那之前本篇按写好跑：reclaim scout 递延第三天、带一道结构性
              重开门和一根弱了的 SM 腿、追空站下（它的威慑被 re-gamma 重强）、
              put-spread 不在单 10Y 腿上 re-grow。下腿转出它第一根上收、背景
              在边缘上修复 —— D-SMA20/EMA20 重夺、retail 去拥挤、funding 冷却、
              本子再充 γ、MTF 软化 —— 但 D-EMA50 cap 未重夺、OI 仍期货主导、
              buyer of record 进反弹时 trim 了。本子保持 FLAT。下一个 24h 的
              对读是<em>耐心 —— reclaim 是在 smart money 加仓的上收上决定、
              不是在第一根 trim 了它的反弹上</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2（已过 codex 敌对式审计 · findings 记于 audits/2026-07-26-desk-note.md · 每条 grep 收敛到零残留）
            </span>
            <b>状态：</b>本篇是 v2 EN 的 ZH companion、在 STAGE C 前向以 CN
            原生交易台声写成（非从 EN 翻译）、对 v2 EN 同数字同 caveat（零
            漂移）。STAGE B codex 敌对但公允审计判 PASS-WITH-NOTES（0
            CRITICAL、1 MAJOR、2 MINOR）；补充的 ask-deepseek 算术二审按项
            逐条裁定（重算、非自动应用 —— deepseek 不是 auditor）。findings
            折进 audits/2026-07-26-desk-note.md 并在下方以 grep 收敛记录解决。
            <b>Findings（codex）：</b><b>DN-001（MAJOR —— 条件式 put-spread
            带日期动作超出 scout/递延框架）：</b>搜索 <code>28AUG / 25SEP</code>、
            <code>would roll to</code>、<code>roll a downside put-spread to</code>
            —— 修前 2 处残留（dn-gating caveat + 决策表动作行）、修后 0；两处
            都改写成框架盯位（「届时重新评估对冲；不带常设滚续指令、不设前向
            expiry」）、单独的 <code>28AUG +18.28M</code> GEX 磁铁提及作为数据
            保留、非指令 —— RESOLVED。<b>DN-002（MINOR —— 1h 大单流不符）：</b>
            搜索 <code>10.5 BTC</code> —— 修前 1 处、修后 0；1h big-net 改正为
            +16.2 BTC / 10 笔（直接 07:06→08:06 BJ 区间汇总 +16.17 跨 10 根
            非零印）—— RESOLVED。<b>DN-003（MINOR —— 跨资产 RS 因漏 NVDA 高估
            领导）：</b>搜索 <code>leads only</code> / <code>equity/megacap</code>
            —— 修前 1 处、修后 0；改写成「领先 equity/megacap 簇的一部分…但
            同时落后 SP500（−0.15%）和 NVDA（+2.86%）」—— RESOLVED。
            <b>裁定（ask-deepseek 补充、已重算）：</b>其 R/R 记正确 —— 目标 −
            入场 = 67,762 − 65,015 = <b>2,747</b>（v1 带 2,746）；在 R/R 行与
            此处修正、比 2,747 / 1,937 = 1.4182 → 1.42:1 不变。其 D-SMA150
            偏移主张驳回 —— 64,392.49 / 69,775.28 − 1 = −7.7145% 取整为
            <b>−7.71%</b> 如印、不是 −7.70%（deepseek 算术滑）。其 24h 高/低
            「不一致」作为误报驳回 —— prose $64,447 / $63,810 是 codex 清过的
            实时盘面 24h H/L、MTF 表 $64,417 / $63,760 是 08:01 BJ MTF 扫描
            自己的 H/L、一块内联披露的约 5 分钟滞后独立 source panel。其 SM
            Δshort 取整记是一根 NIT —— +484.7（一位小数）与 +485（整数）是
            上下文一致的取整、无漂移、按写留下。<b>为审计携带的自含算术：</b>
            funding × 1095（live +4.30% 自原始 0.003929、24h 均值 +4.24%、max
            +9.14% ann 在 0.008345 字段 2/1441 行、0 负行）；GEX 双参考
            （flip $62,205、现货 +3.52% / idx +3.75%、都正）与头条-vs-rollup
            缺口（+131.5M 头条 vs +151.83M by-expiry rollup = gex_summary.json
            net_gex $151,825,038、~+20.33M、DN-003 谱系不对账面板）；SM cut
            fraction（|+5,092.88 − (+7,301.87)| / 7,301.87 = 30.25%、Δlong
            −1,724.3 / Δshort +484.7）；MA 矩阵对 live 现货 $64,392.49、parquet
            2026-07-26 00:06Z close $64,383.70（D-EMA50 $65,015.40 cap −0.96%、
            D-SMA50 $63,269.28 +1.78%、D-SMA150 $69,775.28 −7.71%、守住的
            W-SMA200 $63,078.14 周期地板 +2.08%、134 根周 bar 2024–2026 子集
            下 W-SMA150/200 不可计算但在完整 360 根周 bar 2019–2026 glob 上
            重算 $63,078.14）；R/R（入场 ~$65,015、止损 $63,078、目标 $67,762
            → 2,747 / 1,937 = 1.42:1）；24h CVD 跨 07-25 07:00Z cb_cvd 与
            fut_cvd reset 调整（现货 CVD +13,052、期货 CVD −3,619）；30D RV
            29.74%（30 returns）；跨资产（|r| 0.234、BTC −0.63% vs NQ −0.79%
            = +0.16pt、落后 SP500 −0.15% 与 NVDA +2.86%）；宏观 Tier-1 周末冻
            （10Y 4.71%、HY OAS 2.77% 距闸 1bp、DXY 101.47、Fed 净流动性
            $5.917T）。claims-vs-loaded-data 纪律：NTT / max-pain / strike-IV /
            BTC-NQ framework only；JGB 月度不依赖；IV 870 合约链中位数、不是
            可交易价差。requireViewer gating 模式（首语句、路径
            /zh/desk/2026-07-26）就位。EN/ZH 数值平价成立（ZH companion 在
            STAGE C 对同一 v2 数字写就）。<b>已过 codex 敌对式审计。</b>
            <b>Build note（INFO）：</b>本服务器跑 Node 18.19.1；Next 对 Node
            &lt; 20.9.0 硬退出、所以完整 <code>next build</code> 被环境阻塞
            （谱系）；<code>npx --no-install tsc --noEmit</code> 是 build proxy。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体
            情况个性化。数字反映单一原子快照（2026-07-26 00:06Z）、
            provenance 在数据来源条带中按节披露；宏观 Tier-1 面板渲染
            2026-07-25 22:16Z（比快照早约 1.85h）、其 FRED 日度利率周末冻
            并已标注。水位、规模与条件是交易台流程的示例、不是长期推荐。
            过去的相关性、γ 与仓位模式不绑定未来盘面。衍生品有全损风险、
            加杠杆下损失可超过保证金。
            <em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                下腿转出它第一根上收、背景在边缘上修复 —— 但它停在 D-EMA50
                cap 下方、OI 仍期货主导、buyer of record 用反弹去 trim 30%。
                本子再充 γ、地板守住。reclaim 是在 smart money 加仓的上收上
                决定、不是第一根反弹。耐心。
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
            v2 · 2026-07-26 00:06Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
