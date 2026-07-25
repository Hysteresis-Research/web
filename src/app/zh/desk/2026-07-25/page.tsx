import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-07-25 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-07-25',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-07-25' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260725() {
  await requireViewer('/zh/desk/2026-07-25');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-07-25 · v2</span>
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
              <span className="dn-big">$64,167</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−1.33%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-07-25 00:06Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-07-25 00:06Z（snapshot pin，t == &ldquo;07-25 08:06&rdquo; BJ）</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · 锚钉在 00:06Z 那行（BJ 08:06）以便复现 ·
                    文件 tail 在脚下继续滚 · 24h 窗口口径：表头各项 Δ 用
                    <em>前一行</em> t == &ldquo;07-24 08:05&rdquo; BJ 作基线
                    （端点减前一行）；funding / flow 的逐行统计
                    <em>不含</em>该基线、premium 均值<em>含</em>它。若改用同刻
                    t == &ldquo;07-24 08:06&rdquo; BJ 基线则读作 spot −1.22%、OI
                    +1,590.5 BTC / +1.52%、retail 60.30 → 65.12、SM net +1,603.9 /
                    +28.1%——这点小差是基线口径本身，已披露，并非数据冲突
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-07-25 08:01 BJ scan（00:01Z）</td>
                  <td className="dn-flag">
                    滚动 latest 文件 · 已逐字存档于
                    /opt/desk-note/snapshots/2026-07-25-0006/ · 较快照锚滞后约
                    5 分钟 · 含未收盘 K 线
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-25 00:02Z 快照</td>
                  <td className="dn-flag">
                    较锚滞后约 4 分钟 · Deribit idx $64,344 对 live $64,167 ·
                    872 合约 · 表头 aggregate +99.9M 对 by-expiry rollup
                    +125.03M（= gex_summary.json net_gex）——约 +25.1M 不对账的
                    源面板差、按 DN-003 谱系披露（本次 rollup 在表头之
                    <em>上</em>方、与 07-23 那次差的符号相反）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-25 00:02Z
                  </td>
                  <td className="dn-flag">滞后约 4 分钟 · 7d 1h bar · 22 资产 · 166 rows · 已存档</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-24 22:16Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.85h · FRED Tier-1 利率再紧（10Y +4bp 到
                    4.71%、TIPS +4bp 到 2.43%、HY OAS +9bp 到 2.77%、MOVE +5.94
                    到 76.8）· DXY +0.30 到 101.44 · Fed 净流动性 −$69B 到
                    $5.917T · Tier-3 通胀行多为月度 / 陈旧
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-07-25 00:06Z（收 $64,139.9）</td>
                  <td className="dn-flag">
                    同分钟锚 · 最末 bar 00:06Z、文件 mtime 00:06:08Z · 偏移按
                    live 现货 $64,167.16 重算 · W-SMA150 / W-SMA200 在这套
                    2024–2026 MA 子集（134 根周 bar）上不可计算——但 200W
                    周期底本身可从全历史 / trap-watch 状态取得，见下一行
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W 支撑监视</td>
                  <td className="dn-v-cell">ma200w_trap_watch_state.json · 2026-07-25 00:11Z</td>
                  <td className="dn-flag">
                    200W 周期底<em>可用且在维护</em>——最末完成周 2026-07-19
                    收 $64,694.70、W-SMA200 $63,078.14、consecutive_above 3
                    （连涨起于 2026-07-05）；完整 btcusdt_1m_*.parquet glob
                    （360 根周 bar）独立重算完成周 W-SMA200 = $63,078.14。那
                    134 根周 bar 的不可计算只是 2024–2026 MA 子集、并非周期底。
                    结算底 $63,078（现货 +1.73% 在上方）；其上最近的可计算
                    MA 子集线是 D-SMA50 $63,194.64（+1.54%）
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
                  <td className="dn-flag">相关主张明确为 framework only（btc_ntt_analysis.html 为 JS 渲染、不可提取）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dn-meta">
            <div>
              <span className="dn-k">funding · 8h 年化</span>
              <span className="dn-v">+6.68%</span>
              <span className="dn-src">live · 24h 均值 +7.25% · max +10.49% ann（0.009579 字段、2 / 1441 行——并非 +10.95% Binance 封顶）· min +4.73% · 0 负行 · funding × 1095（raw 0.006104）</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">重新升温、全程转正</span>
              <span className="dn-src">区间 +4.73% / +10.49% · 这 24h 0 / 1441 负行、对 07-23 的 466 短付行——谱系里那段负 short-pay 已清空、多头在跌价里又付费扛单</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">+1.48%（+1,551.6 BTC）</span>
              <span className="dn-src">live · 下腿第三次扩张、却是错的那种——收阴、futCVD −1,372.8 / taker-net −1,372.8 / big-net −925.6 在<em>卖</em>，同时 retail 挤到 65.12% 多</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bear">65.12 / 34.88</span>
              <span className="dn-src">live_db `mkt_long_pct` · 挤高 60.37 → 65.12（快照值），仍在 24h / 谱系高点 65.93（BJ 02:03 印出）之下 · 24h 区间 59.33 / 65.93——retail 在买跌</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bull">+7,302（净 LONG、靠回补长大）</span>
              <span className="dn-src">live · long 15,200.45 − short 7,898.59 = +7,301.87（进位 +7,302）· 自 07-21 06:36Z 交叉起连续净多 · net 峰 +10,651 @ 07-24 15:35 后回落</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 24h 前</span>
              <span className="dn-v">+5,650 → +7,302（+1,652，+29.2%）</span>
              <span className="dn-src">|Δ|/prior_net = 1,652.25 / 5,649.62 = 29.2% · 但 Δshort −1,724.8 / Δlong −72.5——净的长大几乎全来自空头回补、不是新多需求</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">41.8% / 29.75%</span>
              <span className="dn-src">GEX IV 中位数 · 872 合约 · 30D close-to-close RV = logret.std × √365 × 100（30 根日收益、parquet 最末 bar 00:06Z）</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+3.49%（在上方）</span>
              <span className="dn-src">flip $62,005 · 对 live 现货 $64,167（+3.49%；64,167.16/62,005 − 1 = 3.487%）/ GEX 文件 Deribit idx $64,344（+3.77%；64,344/62,005 − 1 = 3.771%）——两参考都正、tile 取现货侧 · aggregate +99.9M 表头 / +125.03M rollup · 自 07-24 的 +262.1M 大幅泄 γ</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                第二根完成日收盘落在失败的 D-EMA50 cap 之下，而第三次扩张
                的 OI 依旧是错的那种
              </span>
              。07-24 收{' '}
              <span className="dn-tag bear">$64,116.50</span>（在 07-23 的
              $65,069.60 之后），这是第二根连续完成收盘落在
              <span className="dn-tag bear">当时的 D-EMA50 cap</span> 之下——
              07-23 收在其成交当时 D-EMA50 所处的 ~$65,109 之下，07-24 收在
              cap 随 EMA 跟着跌价滑落到的 ~$65,033 之下——就是那条在 07-23
              reclaim 失败时从入场校验支撑翻成头顶阻力的线。现货报{' '}
              <span className="dn-tag bear">$64,167（24h −1.33%）</span>，如今
              比当前 D-EMA50 $65,033 cap 低 1.33%（对 07-24 的 −0.13%）——
              cap 测试的失败在加深、没有修复。OI 又扩{' '}
              <span className="dn-tag bear">+1,551.6 BTC（+1.48%）</span>，但落
              在阴收上、futures CVD{' '}
              <span className="dn-tag bear">−1,372.8</span>、taker-net{' '}
              <span className="dn-tag bear">−1,372.8</span>、big-net{' '}
              <span className="dn-tag bear">−925.6</span> 全在卖，同时 retail
              挤到 <span className="dn-tag bear">65.12% 多</span>（从 60.37%，
              24h / 谱系高点 65.93% 在 BJ 02:03 印出），funding 也重新升温到{' '}
              <span className="dn-tag bear">全程转正（0 / 1441 负行、均值
              +7.25% ann）</span>，07-23 那 466 短付行之后。SM 仍是 record
              买家——净多 <span className="dn-tag bull">+7,302</span>、自 07-21
              06:36Z 交叉起连续，且这 24h 还<em>长大</em>了 +1,652——但增量是{' '}
              <span className="dn-em">空头回补（Δshort −1,725、Δlong −73）</span>、
              不是 scout 要的新多需求。dealer 本子泄了一半有余——{' '}
              <span className="dn-tag">+262.1M → +99.9M 表头</span>（rollup
              +125.03M）——所以那句&ldquo;谱系里最深的正 γ 本子&rdquo;这个
              追空威慑在减弱，但它仍净正、底也还在守。本备忘把 scout 维持在{' '}
              <span className="dn-em">DEFERRED、本子 FLAT</span>：不追多进第二根
              阴收 / 拥挤多的派发型 OI / rates-FALSE 的印，也不追空进一个仍净正、
              底之上的本子。重新武装那笔多依旧是结构性的——一根 D-EMA50 在
              <em>阳收</em>上的 reclaim、且 OI 背后是买家。
            </p>

            <p>
              BTC live 报 <span className="dn-tag">$64,167</span>、24h{' '}
              <span className="dn-tag bear">−1.33%</span>，落在{' '}
              <span className="dn-tag">$65,790 / $63,744</span> 区间内（高 @
              07-24 07:17Z / BJ 15:17、低 @ 07-24 14:48Z / BJ 22:48）。{' '}
              <span className="dn-signal">从 07-21 峰起的下腿已深到三根完成
              的更低收盘</span>：07-21 $66,522.40 → 07-22 $66,082.00 → 07-23
              $65,069.60 → 07-24 $64,116.50，未收的 07-25 停在 parquet 最末
              bar <span className="dn-tag">$64,139.90</span>——比 07-24 高出微薄
              +$23，是想稳、不是对任何东西的 reclaim。MA 矩阵读作绕现货的一个
              紧三明治：<span className="dn-tag bear">D-SMA20 $64,244（−0.12%）</span>
              和 <span className="dn-tag bear">D-EMA20 $64,274（−0.17%）</span>
              就压在头顶，<span className="dn-tag bear">D-EMA50 $65,033
              （−1.33%）</span> cap 是第一道真阻力，可计算梯上唯一的正线是下方
              的 <span className="dn-tag bull">D-SMA50 $63,194.64（+1.54%）</span>。{' '}
              <span className="dn-em">
                200W 周期底本次可用且在维护：trap-watch 状态
                （ma200w_trap_watch_state.json、00:11Z）带着最末完成周 2026-07-19
                的 W-SMA200 <span className="dn-tag bull">$63,078.14</span>、连续
                三根周收在其上，完整 btcusdt_1m_*.parquet glob（360 根周 bar）
                独立重算出同一 $63,078——那 134 根周 bar 的不可计算只是
                2024–2026 MA 子集、不是周期底。所以 $63,078 是结算底
                （现货 +1.73% 在上方），可计算的 D-SMA50 $63,194.64（+1.54%）
                就贴在它上面、是最近的 MA 子集支撑。
              </span>{' '}
              这轮谱系的 scout 曾在 SM record-买家腿上 ARMED、07-24 D-EMA50
              reclaim 失败时转 DEFERRED；今日不重新武装——重新武装门（一根
              D-EMA50 在阳收上的 reclaim、OI 靠买家扩，且 reclaim-long 利率
              滤网为真）一条腿都没满。本子维持 flat。
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘 · OI +1.48% 但派发型 · retail 快照挤到 65.12%（24h / 谱系高 65.93% @ BJ 02:03）· SM 靠空头回补长大净多 · funding 重新升温全程转正</span>
            </h2>

            <p>
              <span className="dn-signal">
                仓位本子在派发、不是在吸筹
              </span>
              。OI 这 24h 扩 <span className="dn-tag bear">+1,551.6 BTC
              （+1.48%）</span>——104,526.4 → 106,078.0——下腿第三次扩张，但
              成分是敌意的：spot CVD 跑 <span className="dn-tag bull">+3,555
              </span>（现货接），而 futures CVD 跑{' '}
              <span className="dn-tag bear">−1,372.8</span>、taker-net{' '}
              <span className="dn-tag bear">−1,372.8</span>、big-net{' '}
              <span className="dn-tag bear">−925.6</span>——期货在往现货接盘里
              猛卖，落在一根 <span className="dn-tag bear">−1.33% 阴收</span> 上。
              retail 挤 <span className="dn-tag bear">mkt_long_pct 60.37% →
              65.12%</span>（24h 区间 59.33 / 65.93）——快照仍挤在 24h / 谱系
              高点 65.93%（BJ 02:03 印出）之下，retail 在跌价里买入。{' '}
              <span className="dn-em">价跌 + OI 升 + retail 加多 + 期货猛卖，
              是一个派发的签名、不是 scout 武装要买的那种需求驱动 OI 升。</span>
            </p>

            <p>
              SM 仍是 record 买家、其净也长大了，但长在错的那条腿。SM net 是{' '}
              <span className="dn-tag bull">+7,302</span>（long 15,200.45 −
              short 7,898.59 = +7,301.87）对 24h 前的{' '}
              <span className="dn-tag">+5,650</span>——一记{' '}
              <span className="dn-tag bull">Δnet +1,652（+29.2%）</span>
              （|+7,301.87 − (+5,649.62)| / 5,649.62 = 29.2%）。但分解是{' '}
              <span className="dn-em">Δshort −1,724.8、Δlong −72.5</span>：多侧
              几乎没动、整个净增来自回补空头。SM net 峰{' '}
              <span className="dn-tag bull">+10,651 @ 2026-07-24 15:35 BJ
              （07:35Z 07-24）</span> 后回落 −3,349 进快照；24h 内 SM net 谷是{' '}
              <span className="dn-tag">+5,661 @ 2026-07-24 09:56 BJ（01:56Z
              07-24）</span>。所以 record-买家腿仍<em>为真</em>、甚至延伸，但
              其质地是回补、不是新需求——和 OI 带的同一个缺陷。{' '}
              <span className="dn-em">一个靠空头回补喂出来、在失败 cap 之上的
              净多延伸，配 retail 把多侧挤进这根印，正是不确认 scout 多的那种
              局面。</span>
            </p>

            <p>
              杠杆侧在跌价里往多侧重新升温——这根印最响的告示。{' '}
              <span className="dn-signal">
                funding 全程往返转正
              </span>
              ：live <span className="dn-tag">+6.68% ann</span>（raw
              0.006104 × 1095）、24h 均值{' '}
              <span className="dn-tag bear">+7.25%</span>、区间{' '}
              <span className="dn-tag">+4.73% / +10.49%</span>（max 0.009579
              字段、2 / 1441 行——差 +10.95% Binance 封顶），以及{' '}
              <span className="dn-tag bear">0 / 1441 负行</span>——07-23 那 466
              短付行已完全排空；多头又在往跌势里付费扛单。OI 升、funding 正且
              再升温、retail 挤多、价跌：<span className="dn-em">杠杆本子在把
              多侧往弱势里压，和一个洗净的局面正相反。</span> perp 在快照贴{' '}
              <span className="dn-tag bear">−$57.09 折价</span> 对现货（1h 均值
              −$61.51、区间 −$105.00 / −$37.00；4h 均值 −$63.14；24h 均值
              −$56.33、区间 −$171.10 / +$17.92——基差在这 24h 只短暂升水过一次、
              其余持续折价）。1 分钟 aggregate skew 快照{' '}
              <span className="dn-tag bear">−13.4</span>——进快照的轻卖压倾斜。
            </p>

            <p>
              分窗 flow 读作 <em>一根期货卖出的阴收、现货接盘仍在，末一小时走
              平</em>。24h：价 <span className="dn-tag bear">−1.33%</span>、OI{' '}
              <span className="dn-tag bear">+1,551.6 BTC</span>、spot CVD{' '}
              <span className="dn-tag bull">Δ +3,555</span>、futures CVD{' '}
              <span className="dn-tag bear">Δ −1,372.8</span>、big-print{' '}
              <span className="dn-tag bear">−925.6 BTC</span>、taker-net{' '}
              <span className="dn-tag bear">−1,372.8</span>——{' '}
              <span className="dn-em">现货被买、期货被卖、OI 往卖侧扩——派发、
              不是吸筹</span>。4h（进快照）：价{' '}
              <span className="dn-tag bear">−0.12%</span>、OI{' '}
              <span className="dn-tag bull">−103.2 BTC</span>、spot CVD{' '}
              <span className="dn-tag bull">Δ +2,938.8</span>、futures CVD{' '}
              <span className="dn-tag bear">Δ −804.9</span>、big-print{' '}
              <span className="dn-tag bear">−228.7 BTC</span>、taker-net{' '}
              <span className="dn-tag bear">−805.0</span>——<em>OI 轻泄、期货卖
              现货买、同一个分裂在更高频上</em>。1h：价{' '}
              <span className="dn-tag bull">+0.01%</span>、OI{' '}
              <span className="dn-tag bull">−209.0 BTC</span>、spot CVD{' '}
              <span className="dn-tag bull">Δ +1,427.5</span>、futures CVD{' '}
              <span className="dn-tag bear">Δ −104.9</span>、big-print{' '}
              <span className="dn-tag bull">+10.5 BTC</span>、taker-net{' '}
              <span className="dn-tag bear">−105.0</span>——<em>价平、OI 仍泄、
              现货接是唯一的正</em>。三个窗里持续的 spot CVD 接是唯一的建设性
              读——但它在买进一个期货主导的派发，且它没能止住这三根收盘的下腿。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 共振偏空 1 多 / 6 空 / 3 中 · 12h water-up 死叉 2b · 1w water-down 金叉刚印 · 8h/1M ⚡TD9 BUY + 3d/1w 底背离（逆势的反弹提示）</span>
            </h2>

            <p>
              <span className="dn-signal">
                MTF 引擎更偏空、同时闪出超卖反弹的反转提示
              </span>——一个 sell-the-bounce 读。净是{' '}
              <span className="dn-tag bear">1 多 / 6 空 / 3 中</span>（10 帧、
              对 07-24 的 1 多 / 3 空 / 6 中——那簇中性向空解算）。短端 15m–4h
              一致偏空；中段带着新伤——{' '}
              <span className="dn-tag bear">12h water-up 死叉 2 根前印</span>、
              8h 是 water-up 死叉 5 根前。对着这个，反转组是真的：{' '}
              <span className="dn-tag bull">8h 和 1M ⚡TD9 BUY</span>（超卖反转
              提示）、一记 <span className="dn-tag bull">1w water-down 金叉刚
              印</span>、一记 <span className="dn-tag bull">3d water-down 金叉 5
              根前</span>，以及 <span className="dn-tag bull">3d / 1w</span> 上的
              底背离簇。regime 引擎读 5/9 cycle-reversal（JT&lt;0）——均值回归 /
              利于反弹、趋势跟随被告诫。RSI 全线中到超卖（1h 34.2、4h 36.9、
              30m 38.1、1w 39.1）、无一帧超买。{' '}
              <span className="dn-em">
                直读：趋势帧翻空、反弹反转帧在底下点火——盘被拉得够紧、够做一次
                解压反弹，但结构没转，一次冲进 D-EMA50 cap 的反弹在阳收 reclaim
                它之前都是卖。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">64,106</td><td className="num">42.7</td><td className="bull">金叉 (water-dn) 32b</td><td className="bear">below ↑64.2k 47b</td><td>Buy 3</td><td>BEAR hid</td></tr>
                <tr><td>30m</td><td className="num">64,106</td><td className="num">38.1</td><td className="bull">金叉 (water-dn) 11b</td><td className="bear">below ↑65.2k 28b</td><td>Buy 1</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>1h</td><td className="num">64,104</td><td className="num">34.2</td><td className="bear">死叉 (water-dn) 12b</td><td className="bear">below ↑65.2k 36b</td><td>Buy 4</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">64,104</td><td className="num">36.9</td><td className="bear">死叉 (water-up) 15b</td><td className="neut">in cloud 63.8–64.5k 1b</td><td>Buy 4</td><td>—</td></tr>
                <tr><td>8h</td><td className="num">64,106</td><td className="num">44.0</td><td className="bear">死叉 (water-up) 5b</td><td className="bull">above ↓63.6k 48b</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">64,104</td><td className="num">46.2</td><td className="bear">死叉 (water-up) 2b</td><td className="bull">above ↓62.3k 22b</td><td>Buy 5</td><td>BEAR reg</td></tr>
                <tr><td>1d</td><td className="num">64,106</td><td className="num">49.5</td><td className="neut">—</td><td className="neut">in cloud 62.2k–70.2k 5b</td><td>Buy 2</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>3d</td><td className="num">64,104</td><td className="num">44.5</td><td className="bull">金叉 (water-dn) 5b</td><td className="bear">below ↑75.3k 18b</td><td>Buy 1</td><td>BULL reg</td></tr>
                <tr><td>1w</td><td className="num">64,106</td><td className="num">39.1</td><td className="bull">金叉 (water-dn) 刚印</td><td className="bear">below ↑97.1k 25b</td><td>Sell 2</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">64,104</td><td className="num">43.8</td><td className="neut">—</td><td className="bull">above ↓47.0k 29b</td><td>⚡ TD9 BUY</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    源：mtf_div_latest.html 08:01 BJ scan（00:01Z；滚动 latest
                    文件、逐字存档于 /opt/desk-note/snapshots/2026-07-25-0006/）。
                    表头告警：<em>1w water-down 金叉（刚印）</em>、{' '}
                    <em>12h water-up 死叉 2b</em>、<em>8h ⚡TD9 BUY</em>、{' '}
                    <em>1M ⚡TD9 BUY</em>。扫描现货 $64,106、24h −1.47%、24h H/L
                    $65,780 / $63,666、qVol $9.53B（00:06Z 的实时盘表头显示
                    $64,167 / −1.33%、同一窗口——5 分钟差和不同 24h 参考造成这个
                    差别）。收盘为未收 K 线；每帧收盘前把每个值当临时值。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵确认了这个三明治。现货 $64,167.16 站在{' '}
              <span className="dn-tag bull">D-SMA50 $63,194.64 上方 +1.54%</span>
              ——它是结算 $63,078 W-SMA200 周期底之上最近的可计算 MA 子集线
              （现货 +1.73% 在周期底之上）——底下压着一摞头顶线，按序：{' '}
              <span className="dn-tag bear">D-SMA20 $64,244（−0.12%）</span>、{' '}
              <span className="dn-tag bear">D-EMA20 $64,274（−0.17%）</span>、{' '}
              <span className="dn-tag bear">D-EMA50 $65,033（−1.33%）</span>
              （失败的 cap / 入场校验线）、{' '}
              <span className="dn-tag bear">D-EMA100 $67,826（−5.39%）</span>
              （任何 reclaim 上的工作首目标）、{' '}
              <span className="dn-tag bear">W-SMA20 $69,776（−8.04%）</span>、{' '}
              <span className="dn-tag bear">D-SMA100 $69,788（−8.05%）</span>、{' '}
              <span className="dn-tag bear">D-SMA150 $69,794（−8.06%）</span>、{' '}
              <span className="dn-tag bear">W-EMA20 $69,918（−8.23%）</span>、{' '}
              <span className="dn-tag bear">D-EMA150 $70,758（−9.31%）</span>、{' '}
              <span className="dn-tag bear">D-SMA200 $72,267（−11.21%）</span>、{' '}
              <span className="dn-tag bear">W-EMA200 $72,918（−12.00%；seed）</span>、{' '}
              <span className="dn-tag bear">D-EMA200 $73,587（−12.80%）</span>。
              更高、弃用：W-EMA150 $76,739（−16.38%；seed）、W-EMA50 $78,959
              （−18.73%）、W-EMA100 $80,308（−20.10%）、W-SMA50 $85,381
              （−24.85%）、W-SMA100 $88,486（−27.48%）。{' '}
              <span className="dn-em">
                MA 锚在 parquet 最末 bar 2026-07-25 00:06Z（收 $64,139.90）；
                偏移按 live 现货 $64,167.16 重算。显示 MA 值 $-取整；偏移由精确
                序列值算。W-SMA150 / W-SMA200 在这套 2024–2026 MA 子集（134 根
                周 bar）上不可计算——200W 周期底 $63,078 另可从 trap-watch 状态
                和全历史 glob 取得；W-EMA150 $76,739、W-EMA200 $72,918 会显示是
                因为 EMA 从可用历史 seed、并如实标注。日收：07-20 $65,224.80、
                07-21 $66,522.40、07-22 $66,082.00、07-23 $65,069.60、07-24
                $64,116.50、07-25（未收）$64,139.90——两根连续完成收盘各落在其
                当时的 D-EMA50 cap 之下（07-23 在 ~$65,109 as-of 位之下、07-24
                在 cap 此后滑到的 $65,033 之下）。
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer 图 <span className="dn-roman">III · 本子泄 γ &gt;50% 到 +99.9M 表头 / +125.03M rollup · flip $62,005（现货 +3.49% 在上方）· 条带并非全正——25JUL 0.3DTE −10.13M + 一堵 $64k −10.23M 墙就在现货 · 31JUL +87.14M 主导</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子仍净多 γ、但泄了一半有余
              </span>
              。aggregate GEX 在 HTML 表头是 <span className="dn-tag bull">+99.9M
              / 1%</span>，by-expiry rollup 加总{' '}
              <span className="dn-tag">+125.03M</span>（= gex_summary.json
              net_gex $125,030,116）——一记{' '}
              <span className="dn-em">约 +25.1M 不对账的源面板差、按 DN-003
              谱系披露；本次 rollup 在表头之上、与 07-23 那次差的符号相反</span>。
              两读法都指向本子已从 07-24 的 +262.1M 坍塌——谱系里最深的正 γ 带
              没了。0-γ flip 在 <span className="dn-tag">$62,005</span>、现货
              $64,167 站在其 <span className="dn-tag bull">上方 +3.49%</span>
              （64,167.16 / 62,005 − 1 = +3.487%）；GEX 文件自己的&ldquo;dist to
              flip&rdquo;读 +3.8%、算自其 Deribit-index $64,344（比 live 现货高
              $177），即 <span className="dn-tag bull">+3.77%</span>（64,344 /
              62,005 − 1 = +3.771%）——两参考都正、现货两边都在 flip 之上，但
              +3.49% 的垫从 07-24 的 +5.11% 压缩了、因为 flip 升、现货落。{' '}
              <span className="dn-em">
                本次条带并非全正：近月 25JUL 0.3DTE 是 −10.13M（今日 08:00Z
                结算、约快照后 8h）、27JUL 是 −5.07M，墙图还带着一个 $64,000
                −10.23M 的负口袋就在现货、外加一个 $60,000 −17.77M 的崩盘看跌
                残留。
              </span>{' '}
              主导磁铁是 <span className="dn-tag bull">31JUL 6.3DTE +87.14M</span>
              （六天外），其后 7AUG +23.59M、28AUG +17.66M。最重的墙是头顶的
              call cap：<span className="dn-tag bull">$70k +49.31M</span>、{' '}
              <span className="dn-tag bull">$72k +31.67M</span>、{' '}
              <span className="dn-tag bull">$68k +17.73M</span>、{' '}
              <span className="dn-tag bull">$67k +11.56M</span>、{' '}
              <span className="dn-tag bull">$66k +10.77M</span>、{' '}
              <span className="dn-tag bull">$80k +8.89M</span>、{' '}
              <span className="dn-tag bull">$65k +8.34M</span>、{' '}
              <span className="dn-tag bull">$69k +8.03M</span>，对着下方的{' '}
              <span className="dn-tag bear">$64k −10.23M</span> 和{' '}
              <span className="dn-tag bear">$60k −17.77M</span> 负。{' '}
              <span className="dn-em">
                净：本子聚合上仍在阻尼、现货在 flip 之上，所以硬追空仍晚——但
                那道守了整轮谱系的威慑（最深正 γ 带）已减半、一堵局部负墙如今
                正压在现货，这削弱、但没有反转不追空的纪律。
              </span>
            </p>

            <p>
              872 合约的 IV 中位数是 <span className="dn-tag">41.8%</span> 对
              30D close-to-close RV 的 <span className="dn-tag">29.75%</span>
              ——链级富价 <span className="dn-tag">~+12.1pt</span>。是 N 合约上的
              一个链中位数、<span className="dn-em">不是</span>一个可交易价差；
              expiry-/strike-级 vega、skew、期限结构仍未载入；vol 读维持
              framework only。Put/Call OI 比 0.43（call OI 305,922 / put OI
              131,214）——一个 call 偏重的本子、和头顶 call-wall cap 结构一致。
              RV 方法：30D close-to-close、logret.std × √365 × 100、取末 30 根
              日 log 收益、锚在 parquet 最末 bar 2026-07-25 00:06Z。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · Tier-1 利率再紧一档（10Y 4.71% +4bp、TIPS 2.43% +4bp、DXY 101.44 EXTREME RISK-OFF）对信用/流动性松（HY OAS 2.77%、NFCI −0.552 RISK-ON）· reclaim-long 利率滤网 FALSE 且更远 · put-spread 的 HY OAS 腿现只差 1bp 触发</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观分裂在守、利率/美元侧又紧了一档
              </span>
              。面板渲染 2026-07-24 22:16Z、比快照早约 1.85h。US 10Y 名义{' '}
              <span className="dn-tag bear">4.71%（+4.0bp）</span>、regime z{' '}
              <span className="dn-tag bear">+2.66</span>、episodic z{' '}
              <span className="dn-tag bear">+2.34</span>——EXTREME RISK-OFF，比
              07-24 的 4.67% 高 4bp。10Y TIPS 实{' '}
              <span className="dn-tag bear">2.43%（+4.0bp）</span>、regime z{' '}
              <span className="dn-tag bear">+3.05</span>——EXTREME RISK-OFF。5Y5Y
              BE 通胀 <span className="dn-tag">2.28%（+1.0bp）</span>。HY OAS{' '}
              <span className="dn-tag">2.77%（+9.0bp）</span>、regime z{' '}
              <span className="dn-tag bull">−0.69</span>——仍&ldquo;松&rdquo;但
              当日走宽 9bp、现只差{' '}
              <span className="dn-em">1bp 触及 2.78% put-spread 重生门</span>。
              MOVE 债波 <span className="dn-tag">76.8（+5.94）</span>——明显走硬、
              中性标。DXY <span className="dn-tag bear">101.44（+0.30）</span>、
              regime z <span className="dn-tag bear">+2.30</span>——EXTREME
              RISK-OFF、美元更硬。NFCI <span className="dn-tag bull">−0.552
              （−0.01）</span>——RISK-ON。Fed 净流动性{' '}
              <span className="dn-tag bear">$5.917T（−0.069T）</span>、episodic z{' '}
              <span className="dn-tag bear">−2.47</span>——一周抽 $69B。USD/JPY{' '}
              <span className="dn-tag">163.83（+0.75）</span>；US-JP 10Y 利差{' '}
              <span className="dn-tag">2.04%（+4.0bp）</span>。{' '}
              <span className="dn-em">
                净：reclaim-long 利率滤网（10Y &lt; 4.55%）维持 FALSE、又紧
                4bp 到 4.71%——scout 多的宏观门如今紧闭。put-spread 重生门是
                两腿都要（HY OAS &gt; 2.78% 且 10Y &gt; 4.53%）：10Y 腿在 4.71%
                为 TRUE、HY OAS 腿在 2.77% 差 1bp 触发——是这个对冲触发离得最近
                的一次，但单腿点火不是对冲触发。利率/美元核心紧、信用/流动性
                侧松；分裂延续。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>宏观指标</th>
                  <th>level</th>
                  <th>Δ</th>
                  <th>regime z</th>
                  <th>episodic z</th>
                  <th>read</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>US 10Y 名义</td><td className="num">4.71%</td><td className="num bear">+4.0bp</td><td className="num bear">+2.66</td><td className="num bear">+2.34</td><td className="bear">EXTREME RISK-OFF · 收紧</td></tr>
                <tr><td>10Y TIPS 实</td><td className="num">2.43%</td><td className="num bear">+4.0bp</td><td className="num bear">+3.05</td><td className="num bear">+2.06</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.28%</td><td className="num bear">+1.0bp</td><td className="num">+0.77</td><td className="num bear">+2.51</td><td className="neut">无标 · episodic</td></tr>
                <tr><td>HY OAS</td><td className="num">2.77%</td><td className="num bear">+9.0bp</td><td className="num bull">−0.69</td><td className="num">+1.23</td><td className="bull">松 · 差 1bp 触重生门</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.552</td><td className="num">−0.01</td><td className="num bull">−1.51</td><td className="num bull">−1.71</td><td className="bull">RISK-ON</td></tr>
                <tr><td>MOVE 债波</td><td className="num">76.8</td><td className="num bear">+5.94</td><td className="num">+0.30</td><td className="num">+1.75</td><td className="neut">中性 · 走硬</td></tr>
                <tr><td>DXY</td><td className="num">101.44</td><td className="num bear">+0.30</td><td className="num bear">+2.30</td><td className="num">+1.04</td><td className="bear">EXTREME RISK-OFF · 更硬</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.917T</td><td className="num bear">−0.069T</td><td className="num">+0.56</td><td className="num bear">−2.47</td><td className="bull">松 · 抽 $69B</td></tr>
                <tr><td>USD/JPY</td><td className="num">163.83</td><td className="num bear">+0.75</td><td className="num bear">+1.76</td><td className="num">+2.21</td><td className="neut">无标 · episodic</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">2.04%</td><td className="num">+4.0bp</td><td className="num">−0.26</td><td className="num">+2.34</td><td className="neut">中性</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp（月度）</td><td className="num bear">+2.42</td><td className="num">+1.09</td><td className="stale">月度 · 不作依据</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7714</td><td className="num">−0.00</td><td className="num bull">−1.34</td><td className="num">−0.62</td><td className="neut">无标</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、166 rows、summary 00:02Z——{' '}
              <span className="dn-em">一个 7 天滚动读、不是今天</span>）。regime
              IDIOSYNCRATIC、mean off-diagonal{' '}
              <span className="dn-tag">|r| 0.229</span>（在 0.25 阈值之下）。
              BTC 列出的联系、按 |r| 排序：NQ{' '}
              <span className="dn-tag">+0.505</span>、SP500{' '}
              <span className="dn-tag">+0.416</span>、COPPER{' '}
              <span className="dn-tag">+0.400</span>、TSLA{' '}
              <span className="dn-tag">+0.391</span>、SILVER{' '}
              <span className="dn-tag">+0.368</span>、PLAT{' '}
              <span className="dn-tag">+0.355</span>、JP225{' '}
              <span className="dn-tag">+0.331</span>、GOLD{' '}
              <span className="dn-tag">+0.308</span>、URNM{' '}
              <span className="dn-tag">+0.283</span>、NVDA{' '}
              <span className="dn-tag">+0.267</span>、CL{' '}
              <span className="dn-tag">−0.255</span>、BRENT{' '}
              <span className="dn-tag">−0.241</span>。7d 表现：{' '}
              <span className="dn-tag bull">BTC +0.38%</span>、NQ{' '}
              <span className="dn-tag bear">−1.43%</span>、SP500{' '}
              <span className="dn-tag bear">−0.50%</span>、JP225{' '}
              <span className="dn-tag bear">−1.55%</span>、NVDA{' '}
              <span className="dn-tag bull">+1.96%</span>、META{' '}
              <span className="dn-tag bear">−6.77%</span>、TSLA{' '}
              <span className="dn-tag bear">−18.31%</span>、MSFT{' '}
              <span className="dn-tag bear">−3.18%</span>、GOOGL{' '}
              <span className="dn-tag bear">−7.87%</span>、AMZN{' '}
              <span className="dn-tag bear">−6.19%</span>。商品领跑：CL{' '}
              <span className="dn-tag bull">+9.82%</span>、BRENT{' '}
              <span className="dn-tag bull">+6.57%</span>、SILVER{' '}
              <span className="dn-tag bull">+4.13%</span>、URNM{' '}
              <span className="dn-tag bull">+2.66%</span>、GOLD{' '}
              <span className="dn-tag bull">+1.15%</span>、COPPER{' '}
              <span className="dn-tag bull">+1.01%</span>。{' '}
              <span className="dn-em">
                BTC（+0.38% 7d）只领着股票/大盘簇——对 NQ（−1.43%）+1.81pt 的
                边、清楚地甩开 −18.31% 的 TSLA 和 −6.77% 的 META——而能源、白银、
                铀、黄金、铜都跑赢它。所以这维持一个相对股票的告示、不是全条带
                的 RS 领导（DN-001 谱系）：BTC 只是比大盘复合体跌得少、不是跑赢
                整个跨资产条带。
              </span>{' '}
              JGB 月度 2.67% 带一个 EXTREME RISK-OFF 月度标——不作依据。
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · 本子 FLAT · scout DEFERRED（重新武装结构性、无腿满）· 尽管泄 γ 仍不追空 · put-spread 不在单条 10Y 腿上重生</span>
            </h2>

            <p>
              <span className="dn-signal">
                本子维持 flat、scout 维持 deferred
              </span>
              。上一份备忘（07-24）在 07-23 完成收盘 D-EMA50 reclaim 失败、且
              OI 扩张证明是派发型时，把 reclaim scout 从 ARMED → DEFERRED。今日
              重新武装的条件一条都没满——实际上三条都离触发更远：（1）desk 需要
              一根 D-EMA50 在<em>阳收</em>上的 reclaim，而今日是 cap 之下的第二根
              阴收、现货现比它低 1.33%；（2）它需要 OI 靠<em>买家</em>扩，而今日
              的 OI 扩张是 retail 拥挤的派发、期货在卖、SM 靠回补长大；（3）它
              需要 reclaim-long 利率滤网为真（10Y &lt; 4.55%），而 10Y 又紧
              4bp 到 4.71%。对着追空，dealer 本子泄了一半有余（+262.1M →
              +99.9M）、一堵 $64k −10.23M 墙如今压在现货——所以那句&ldquo;最深
              正 γ 本子&rdquo;威慑减弱了——但本子仍净正、现货在 flip 上方 +3.49%、
              底还守着、且 8h/1M ⚡TD9 BUY + 3d/1w 底背离警示反弹风险，所以硬追空
              仍晚。今日的本子是：不入 scout、不做空、不加新对冲。
            </p>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout · DEFERRED · 重新武装结构性 · 无腿满 · 等一根确认的阳收 reclaim、靠买家</span>
              <div className="dn-trade-name">
                Reclaim scout——延后第二天；cap 测试失败加深（两根阴收落在 D-EMA50 之下）、OI 维持派发型、利率滤网进一步转 FALSE
              </div>
              <div className="dn-thesis">
                scout 曾在 SM record-买家腿上武装（自 07-21 06:36Z 交叉起净多）、
                门在一次对 D-EMA50 cap 的真 reclaim——那条校验了本轮入场、又在
                07-23 收 $65,069.60 落在当时的 D-EMA50 之下（~$65,109 as-of 那根
                收盘；cap 此后滑到 $65,033）时翻成头顶阻力的线。今日 record-买家
                腿仍为真、甚至长大了（+1,652 净、+29.2%），但增量是空头回补
                （Δshort −1,725、Δlong −73）、不是 reclaim 要的新多需求；OI 第
                三次扩（+1,551.6 BTC）却落在阴收上、futures/taker/big-net 全在
                卖、retail 挤到 65.12% 多——派发、不是吸筹；funding 也重新升温
                全程转正（0 负行）。reclaim 要一根<em>阳收</em>对 D-EMA50 $65,033
                的 reclaim、OI 靠买家扩、且利率滤网（10Y &lt; 4.55%）为真——一条
                都不成立。状态：<em>deferred</em>、重新武装结构性。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">重新武装触发（三条都要）</span><span className="dn-lvl-v bull">1d 收 &gt; D-EMA50 $65,033（阳收 reclaim、不是插针）且 OI 靠买家扩（spot+futures CVD 都升、SM 加多不回补）且 10Y &lt; 4.55% 收</span></div>
                <div><span className="dn-lvl-k">scout 入场</span><span className="dn-lvl-v bull">在确认的阳收 reclaim 上、scout 多 0.2R</span></div>
                <div><span className="dn-lvl-k">止损</span><span className="dn-lvl-v bear">结算底——W-SMA200 $63,078（trap-watch 状态维护中、三根周收在其上）/ 可计算 D-SMA50 $63,194.64；一根日收落在其下结束底之上消化的读</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">D-EMA100 $67,826（工作首目标）再到 W-SMA20 $69,776 / D-SMA100 $69,788 簇</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R · 到 D-EMA100 减半</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R：</b> 重新武装入场 ~D-EMA50 $65,033、止损底 $63,078 =
                ~$1,955 风险；首目标 D-EMA100 $67,826 = ~$2,793 回报 ≈{' '}
                <b>1.43:1</b>（2,793 / 1,955 = 1.428）。<b>硬规则：</b> 入场由
                确认的阳收、OI 背后有买家来决定，不是一次冲进 cap 的反弹、也不是
                一次空头回补喂出来的净多延伸。两根连续阴收各落在其当时的 cap 之下
                + 再升温的 funding + 拥挤多 retail + FALSE 利率滤网是一根派发的印、
                不是 reclaim；不要抢在阳收之前。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · 追空 · 站开 · 威慑被泄 γ 削弱、但没移除</span>
              <div className="dn-trade-name">
                追空——站开；本子泄 γ &gt;50%、一堵 $64k 负墙印在现货，但净正 γ + 守住的底 + 超卖反弹提示让它仍晚
              </div>
              <div className="dn-thesis">
                整轮谱系拒绝追空、理由是 dealer 本子是谱系里最深的正 γ 带——一个
                惩罚动量空的阻尼本子。那道威慑今日明显减弱：aggregate GEX 从
                +262.1M 减半到 +99.9M（rollup +125.03M）、+3.49% flip 垫从 +5.11%
                压缩、一堵 $64,000 −10.23M 负墙如今正压在现货、旁边还有近月
                25JUL 0.3DTE −10.13M 和 27JUL −5.07M。但本子仍净正、现货仍在 flip
                之上、底还守（现货 +1.54% 在可计算 D-SMA50 上方、三根完成周收在
                $63,078 谱系底之上），且 8h/1M ⚡TD9 BUY 加 3d/1w 底背离簇警示盘被
                拉得够紧、够做一次解压反弹。状态：<em>站开</em>、监视。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">会武装触发</span><span className="dn-lvl-v bear">一根 1d 收 &lt; 底（D-SMA50 $63,194 / $63,078 谱系）且 aggregate GEX 转净负（加一块新的负近月、不只是 $64k 口袋）——一次穿底进负 γ 本子的破位</span></div>
                <div><span className="dn-lvl-k">不做</span><span className="dn-lvl-v bear">不追空进一个仍净正、flip 之上、底守着、且 8h/1M TD9 BUY 活跃的本子</span></div>
              </div>
              <div className="dn-gating">
                <b>纪律：</b> 泄 γ 是对威慑的真实改变、不是绿灯。空由一次穿底
                <em>进入</em>负 γ 本子来武装、不是由一个正 γ 本子的单纯缩小。在底
                于一根收盘上让出、本子翻负之前，追空维持一个监视。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · 宏观尾部 · put-spread 不重生 · 两腿都要的门未满（HY OAS 差 1bp）</span>
              <div className="dn-trade-name">
                下行 put-spread——不重生；重生门两腿都要、只 10Y 腿为真（HY OAS 2.77% 差 1bp 触发）
              </div>
              <div className="dn-thesis">
                put-spread 重生门按谱系设计是两腿都要：HY OAS &gt; 2.78% 收 且
                10Y &gt; 4.53% 收。10Y 腿在 4.71% 稳为 TRUE（且在收紧），HY OAS
                腿现只差 1bp 触发、在 2.77%（当日 +9bp）——是这个对冲触发离得最近
                的一次。但单腿点火不是对冲触发；两腿规则的存在恰恰是为了让一次
                孤立的利率动作、不在一个仍松的信用盘（NFCI RISK-ON、HY OAS
                regime z −0.69）里重生一条尾部。不滚、不加新腿。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">重生触发（两腿）</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% 收（现 2.77%、差 1bp）且 10Y &gt; 4.53% 收（现 4.71%、TRUE）</span></div>
                <div><span className="dn-lvl-k">reclaim-long 利率滤网</span><span className="dn-lvl-v bear">10Y &lt; 4.55% 收——在 4.71% 为 FALSE、又紧 4bp；scout 多的宏观门紧闭</span></div>
              </div>
              <div className="dn-gating">
                <b>提醒：</b> 重生门是随水平漂移设的酌情监视、不是回测断点。若两腿
                真同时点火、一条新对冲腿会滚到 28AUG / 25SEP 远月；dealer 条带仍
                净多 γ、这里一条新尾部不会带放大器顺风。HY OAS 单腿收盘的贴近值得
                标注、但不据以行动。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 失败 cap 测试加深到两根阴收 · OI 维持派发型 · SM 靠回补长大 · 本子泄 γ 但底守着 · scout 延后、本子 flat</span>
            </h2>

            <p>
              07-24 那些条件里：D-EMA50 reclaim 未触发——07-24 收 $64,116.50、
              cap 之下的第二根收盘、现货现比它低 1.33%；OI-靠买家-升 条件未触发
              ——OI 扩但落在派发（retail 65.12% 多、futures/taker/big-net 卖、
              SM 靠回补长大）；reclaim-long 利率滤网维持 FALSE 且收紧（10Y
              4.71% &gt; 4.55%）；底守（现货 +1.54% 在可计算 D-SMA50 $63,194
              上方、三根完成周收在 $63,078 谱系底之上）；record-买家腿维持 TRUE
              （SM 净多 +7,302、自 07-21 交叉起连续）但靠回补、不是需求；dealer
              本子泄 γ &gt;50%（+262.1M → +99.9M）却仍净正。{' '}
              <em>没有条件触发去武装一笔交易；07-24 的失败-cap-测试读延了一天、
              本子维持 flat。</em> 条件绕着一个加深的 cap 测试失败、一个派发型
              OI、一个更浅但仍正的 dealer 本子、和一个守住的底重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Reclaim scout（多）——重新武装门</td><td className="bull">1d 收 &gt; D-EMA50 $65,033（阳收）且 OI 靠买家扩 且 10Y &lt; 4.55% 收</td><td>scout 多 0.2R、止损底 $63,078 / $63,194、目标 D-EMA100 $67,826 · R/R ≈ 1.43:1</td></tr>
                <tr><td>cap 测试失败加深（下腿延续）</td><td className="bear">第三根连续 1d 更低收、丢掉 D-SMA50 $63,194 / $63,078 底</td><td>底之上消化的读结束；重评——破底是升级、不是单单 cap 失败</td></tr>
                <tr><td>底守 + 本子仍正</td><td className="bull">1d 收守 &gt; $63,078 / $63,194 且 aggregate GEX 仍净正</td><td>底之上消化的读维持；scout 维持结构性武装、等阳收 reclaim</td></tr>
                <tr><td>追空（会武装）</td><td className="bear">1d 收 &lt; 底 且 aggregate GEX 转净负（加新负近月块）</td><td>一次穿底进负 γ 本子会武装一笔空、止损回到底上方；单泄 γ 不武装它</td></tr>
                <tr><td>宏观尾部重生（两腿）</td><td className="bear">HY OAS &gt; 2.78%（差 1bp）且 10Y &gt; 4.53%（在 4.71% TRUE）</td><td>滚一条下行 put-spread 到 28AUG / 25SEP；单腿点火不是触发</td></tr>
                <tr><td>reclaim-long 利率滤网</td><td className="bear">10Y &lt; 4.55% 收——在 4.71% FALSE、又紧 +4bp</td><td>scout 多的宏观门紧闭；没有滤网为真的 reclaim 印不转成活多</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>这份</em>备忘的那一行是{' '}
              <span className="dn-signal">
                下腿到底找不找得到一根对 D-EMA50 $65,033 的真阳收 reclaim、
                OI 背后有买家（spot 和 futures CVD 都升、SM 加多不回补、且 10Y
                回到 4.55% 之下），还是第三根更低收丢掉 D-SMA50 / $63,078 底、
                并——只有当 dealer 本子在破位上翻净负时——武装那笔谱系整轮站开的
                追空
              </span>
              。在那之前本备忘照写运行：reclaim scout 延后第二天、带一个结构性
              重新武装门，追空站开（威慑被 &gt;50% 泄 γ 削弱、但底守着时没移除），
              put-spread 不在单条 10Y 腿上重生。record 买家仍在接、却靠回补长大；
              retail 是谱系里最挤的多、买进一根跌价；funding 已重新升温全程转正；
              本子维持 FLAT。下个 24h 的正确读是{' '}
              <em>耐心——reclaim 由阳收决定、不是由会诱你的那根反弹</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计轨迹 · v2 · 已过 codex 敌对式审计
            </span>
            <b>状态：</b> v2 中文版，由 STAGE C 在 STAGE B codex 敌对式审计后从
            v1 提升（裁决 BLOCK-CRITICAL：1 CRITICAL + 3 MAJOR + 1 MINOR，另有
            一份 ask-deepseek 算术二审、由 STAGE C 逐项裁定）。审计记录见
            audits/2026-07-25-desk-note.md。各 finding 皆以对全 EN 文件的错误主张
            模式与语义变体 grep 扫描关闭；本中文版与 v2 EN 数字与 caveat 一致
            （零漂移）、句式按中文重生成（非翻译）。要点：{' '}
            <b>DN-001（CRITICAL，as-of D-EMA50 cap 冲突）</b>——07-23 $65,069.60
            与当前 $65,033 cap 并列造成不可能的&ldquo;cap 之下&rdquo;主张；已把
            每处收盘-对-cap 拆成 as-of 层：07-23 收在其当时 D-EMA50 ~$65,109 之下、
            07-24 收在 cap 此后滑到的 ~$65,033 之下、现货比当前 $65,033 cap 低
            1.33%——$65,069.60 &gt; $65,033 的冲突已清（grep hits-after 0）。{' '}
            <b>DN-002（MAJOR，200W 底出处倒退）</b>——底被错称不可用/陈旧/不可
            重算；已把源恢复为 ma200w_trap_watch_state.json（00:11Z、最末完成周
            2026-07-19 收 $64,694.70、W-SMA200 $63,078.14、consecutive_above 3），
            并注 360 根周 bar 的全历史 glob 独立重算出同一 $63,078、那 134 根周
            bar 的不可计算只是 2024–2026 MA 子集；$63,078 是可用的结算周期底、
            D-SMA50 $63,194.64 是其上最近的可计算 MA 子集线（grep hits-after 0）。{' '}
            <b>DN-003（MAJOR，retail 最高级自我否定）</b>——65.12% 被称谱系最挤多、
            同窗却印 65.93%；已把 65.12% 定为快照挤但在 24h / 谱系高 65.93%
            （BJ 02:03）之下、最高级只系在 65.93、绝不系在 65.12 pin（grep
            hits-after 0）。{' '}
            <b>DN-004（MAJOR，24h 窗口口径未披露）</b>——表头 Δ 用前一行
            t=07-24 08:05 基线、非同刻 08:06；已在实时盘来源行披露前一行基线口径
            （端点减前一行；funding/flow 逐行统计不含基线、premium 均值含它）、
            并列出同刻 08:06 的替代读（spot −1.22%、OI +1,590.5/+1.52%、retail
            60.30→65.12、SM net +1,603.9/+28.1%）作为口径差、非数据冲突。{' '}
            <b>DN-005（MINOR，MA 陈旧陈述与时间戳矛盾）</b>——parquet 最末 bar 在
            00:06Z 锚、非 ~4 分钟陈旧；已改为&ldquo;同分钟锚 · 最末 bar 00:06Z、
            文件 mtime 00:06:08Z&rdquo;（GEX/跨资产 00:02Z 对 00:06Z 的 ~4 分钟
            滞后合理、保留）。{' '}
            <b>ask-deepseek 二审（裁定、非自动套用）：</b> SM-net 分量自相矛盾
            （净 +7,302 对 long 15,200 − short 7,899 = 7,301）为真、已改为精确
            分量 long 15,200.45 − short 7,898.59 = +7,301.87（进位 +7,302）；SM
            切割分数 1,652.25 / 5,649.62 = 29.2453% 一位小数为 29.2% 正确
            （deepseek 的 29.3% 是二次进位、不改），其余各项 PASS。整体：已过
            codex 敌对式审计、CRITICAL + MAJOR + MINOR 全部 grep 关闭到
            hits-after 0。
            <b> Build 备注（INFO）：</b> 本机 Node 18.19.1；Next 在 Node &lt;
            20.9.0 硬退出，故完整 <code>next build</code> 被环境阻断（谱系）；{' '}
            <code>npx --no-install tsc --noEmit</code> 作为 build proxy。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘为 Hysteresis Research 内部交易台工件、仅供本所同仁讨论，{' '}
            <em>非投资建议、非要约、非招揽</em>，且未针对任何接收方的具体情况。
            数字反映单一原子快照（2026-07-25 00:06Z）、来源级出处已在上方来源带
            披露；宏观 Tier-1 面板渲染为 2026-07-24 22:16Z（快照前约 1.85h）、
            部分输入明确陈旧或待定并如实标注。水平、size、条件是本台流程的示意、
            非持仓建议。过去的相关性、gamma、仓位模式不约束未来盘面。衍生品有
            全额亏损风险、且在杠杆下亏损可超出所存保证金。{' '}
            <em>务必自行研究。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                两根阴收落在各自当时的 cap 之下、OI 仍是错的那种——retail 挤多、
                funding 重新升温、SM 靠回补长大。本子泄了 γ 但底守着。reclaim 由
                阳收决定、不是那根反弹。耐心。
              </div>
              <div className="dn-sign-name">Desk · BTC 衍生品</div>
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
            v2 · 2026-07-25 00:06Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
