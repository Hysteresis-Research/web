import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-08-10 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-08-10',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-08-10' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260810() {
  await requireViewer('/zh/desk/2026-08-10');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-08-10 · v2</span>
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
              <span className="dn-big">$64,896</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.10%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-08-10 00:07Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-08-10 00:05Z tape 锚</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · 锚行 t==&ldquo;08-10 08:05&rdquo;（BJ、
                    UTC+8）= 00:05Z 日 pin；00:07Z 会话开始时读取 · 地雷已清
                    （00:05Z pin 不是 t==&ldquo;08-10 00:05&rdquo;、那会是
                    16:05Z 的 08-09 行）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-08-10 00:01Z scan（BJ 08:01）</td>
                  <td className="dn-flag">
                    滚动 latest 文件 artifact · 较 00:07Z 读滞后约 6 分钟 ·
                    含未收盘 K 线 · 逐字存档于
                    /opt/desk-note/snapshots/2026-08-10-0007
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-08-10 00:01Z 快照</td>
                  <td className="dn-flag">
                    较快照锚滞后约 6 分钟 · Deribit idx $65,186 对 live
                    $64,896（比 live 高 $290）· 828 合约 · IV 中位数 40.6%
                    · 10AUG26 0.3DTE +15.35M 今日 08:00Z 结算（在此 00:05Z
                    快照后约 8h —— 仍 live、未做结算调整）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-08-10 00:01Z
                  </td>
                  <td className="dn-flag">滞后约 6 分钟 · 7d 1h bar · 22 资产 · 166 rows</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-08-09 22:15Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.9h · FRED Tier-1：10Y +6bp 到 4.69%
                    （EXTREME RISK-OFF）、TIPS +2bp 到 2.43%、HY OAS −4bp
                    到 2.71%（RISK-ON）、DXY 99.62（+0.02）、Fed 净流动性
                    $5.840T · MOVE 债波本次渲染 UNAVAILABLE
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-08-10 00:05Z（close $64,868.00）</td>
                  <td className="dn-flag">
                    偏移按 live 现货 $64,896 重算 · W-SMA200 不可计算
                    （盘上 190 根周 bar、需要 200）· W-SMA150 在 190 根上
                    可算 · W-EMA150/200 种子披露
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W 周期地板盯位</td>
                  <td className="dn-v-cell">ma200w_trap_watch_state.json · sma200 $63,760.71</td>
                  <td className="dn-flag">
                    recomputed_at 2026-08-10 00:11:24Z —— 在 00:07 快照锚
                    <em>之后</em> 4 分钟刷新（post-anchor、已披露）· JSON：
                    sma200 $63,760.71、consecutive_above 6、贯穿 08-09 周
                    settle $64,867.80 · 慢水位（~$250/wk）· 上一篇的 08-03
                    settled 值 $63,533.52 未存进原子快照、不可复现、故本篇
                    锚在当前文件
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
              <span className="dn-v bear">+8.12%</span>
              <span className="dn-src">live · 原始 0.007419 ×1095 = +8.12% ann · 24h 均值 +7.36%（08-09 是 +5.92%）· 区间 +3.79% / +10.88% · 0 / 1442 采样行转负 —— 整根 24h funding 从未翻空付</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">+5.92% → +8.12%（24h 均值 +7.36%）</span>
              <span className="dn-src">carry 在 24h 均值上再热 +1.44pt · 杠杆门牢牢多付、窗内无一根负印 —— 这根 stall 不是 funding flush</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v">−0.16%（−167.8 BTC）</span>
              <span className="dn-src">live · 24h 看平、但最近 4h 甩掉 −902.2 BTC、最近 1h −630.3 BTC、在 $65,435 高点回落上 —— 进快照是去杠杆、不是在堆</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bear">53.78 / 46.22</span>
              <span className="dn-src">live_db `mkt_long_pct` · 从 24h 前 53.40（+0.38pt 更拥挤）· 24h 区间 52.45 / 54.78 —— retail 在 stall 里往多侧再拥挤</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−3,405（净 SHORT、翻回空）</span>
              <span className="dn-src">live · long 10.77k − short 14.18k · 从 08-09 备忘 certified 的 +155 日锚翻回净空 —— 深空部分复原</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 08-09 备忘</span>
              <span className="dn-v bear">+155 → −3,405（Δnet −3,560）</span>
              <span className="dn-src">long −2,410、short +1,150 · 翻空是当前稳定态（17h）但它跨过了那根反复出现的 BJ 15:01（07:01Z 08-09）单分钟 feed artifact 重同步 —— 方向 certifiable、幅度 artifact-crossed · |Δ|/prior_net 无意义（prior net ≈ 0）</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">40.6% / 27.66%</span>
              <span className="dn-src">GEX IV 中位数 · 828 合约 · 30D close-to-close RV（logret.std ×√365 ×100、30 returns）· 链级溢价 ~+12.9pt</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+1.97%（在上方）</span>
              <span className="dn-src">flip $63,641 · 对 live 现货 $64,896（+1.97%；64,896/63,641 − 1 = 1.972%）/ GEX 文件 Deribit idx $65,186（+2.43%；65,186/63,641 − 1 = 2.428%、文件取 +2.4%）—— 两参考都正、tile 取现货侧 +1.97% · aggregate GEX +111.3M（深正 gamma）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                08-09 备忘那条明写的砍仓条件触发了：smart money 翻回净空
              </span>
              。那篇在 D-EMA50 封顶重夺上带着一根 0.4R scout long、只挂一条
              硬规则——&ldquo;certified 的 SM 翻空砍掉整仓&rdquo;。SM net 从
              <span className="dn-tag bull">+155</span>（08-09 certified 的日锚）
              走到 <span className="dn-tag bear">−3,405</span>（long 10.77k −
              short 14.18k）、一根稳了 17 小时的读数、对上一根锚去多 −2,410、
              再加空 +1,150。
              <span className="dn-em">
                方向不含糊——SM 砍多、重加空——但这根转换跑过了那根反复出现的
                BJ 15:01（07:01Z 08-09）单分钟 feed artifact、所以幅度是
                artifact-crossed、精确的 −3,405 该读成&ldquo;深空部分复原&rdquo;、
                不是一个精确水位。
              </span>{' '}
              同一时刻、重夺想要的那根延伸
              <span className="dn-tag bear">失败</span>了：现货冲了根 24h 高
              <span className="dn-tag">$65,435 @ BJ 14:15 08-10（06:15Z）</span>
              然后 <span className="dn-tag bear">4h 内回落 −0.42%</span> 回到
              $64,896、这 4h 甩掉
              <span className="dn-tag bear">−902 BTC 的 OI</span>（最后 1h
              −630）—— 一段干净的去杠杆回落、不是 funding flush（24h 均值
              funding 再热到 <span className="dn-tag bear">+7.36% ann</span>、
              0 / 1442 行转负）、retail
              <span className="dn-tag bear">往多侧再拥挤 +0.38pt 到 53.78%</span>、
              快周期翻倒（<span className="dn-tag bear">1h 水上死叉 1 根前刚印</span>、
              15m/30m 云下、top-div 15m/1h/4h）。还守住的是结构：D-EMA50 封顶
              重夺 <span className="dn-tag bull">守住三根收在 $64,661 上方的
              完整日收盘、08-10 未收盘仍在上方</span>、dealer 本子带
              <span className="dn-tag bull">+111.3M 正 gamma</span>、现货在
              $63,641 flip 上方 +1.97%、200W 周期地板守住
              <span className="dn-tag bull">第 6 根在地板上方的周收盘</span>
              （08-09 settle $64,868 对 sma200 $63,761、+1.74%）、慢 MTF 本子
              仍偏建设性（8h/12h/1d/1w 金叉、HTF bottom-div 12h/1w、1M ⚡TD9
              BUY）。读法：地板守住、但延伸 stall、仓位本子翻回空——所以本子
              按上一篇自己的规则<span className="dn-em">把 scout 砍到平</span>、
              退场观望、chase-short 不武装（gamma 深正、现货在 flip 上方、
              地板完好）。
            </p>

            <p>
              现货报 <span className="dn-tag">$64,896</span> live、
              <span className="dn-tag bear">−0.10%</span> 在 24h（现货 64,896
              对 08-09 08:04 BJ 那根 24h 前行的 64,961）—— 一条几乎持平的盘面
              盖住了一段两相的 24h：一道重现货买盘先把价推到
              <span className="dn-tag">$65,435 @ BJ 14:15 08-10</span>（24h
              高）、然后一段陡去杠杆回落把它带回 $65k 下方进快照。24h 低
              <span className="dn-tag">$64,730 @ BJ 11:17 08-09（03:17Z）</span>。
              D-EMA50 封顶重夺是承重的结构读：日收盘
              <span className="dn-tag">08-07 $64,885.40</span>、
              <span className="dn-tag bull">08-08 $64,928.50</span>（这轮最高
              收）、<span className="dn-tag">08-09 $64,867.80</span>、加 08-10
              未收盘 $64,868.00 全部坐在上抬的 D-EMA50
              （<span className="dn-tag bull">$64,661、现货 +0.36%</span>）
              上方 —— 三根完整收盘在封顶上方（08-07/08-08/08-09）、08-10 未
              收盘仍在其上方。{' '}
              <span className="dn-em">
                但封顶上方的这些收盘只买到一根 stall、不是延伸：这轮在 08-08
                收盘见顶、其后两根收盘都低约 $61、今天的 $65,435 试探被卖。
              </span>{' '}
              下一根真头顶是 D-EMA100
              <span className="dn-tag bear">$66,839（−2.91%）</span> / W-EMA200
              <span className="dn-tag bear">$67,096（−3.28%）</span> 汇合 ——
              这根 grind 还没测到它。现货坐在紧的 D-EMA20 / D-SMA20 / D-EMA50 /
              D-SMA50 簇（$63.4k–$64.7k）上方、在 D-EMA100 往上一切之下。
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面 · SM 翻回净空 −3,405（跨 BJ 15:01 artifact）· 延伸在 $65,435 失败、回落上 OI 甩 −902/4h · funding 再热、无负印</span>
            </h2>

            <p>
              <span className="dn-signal">
                仓位本子翻回净空、上一篇的砍仓条件触发
              </span>
              。SM net 是 <span className="dn-tag bear">−3,405</span>（long
              10,771 − short 14,176）、对 08-09 备忘 certified 的
              <span className="dn-tag bull">+155</span> 日锚（long 13,181 −
              short 13,026）。两侧分量都往空动、且持住了：long_btc
              <span className="dn-tag bear">13.18k → 10.77k（−2,410）</span>、
              short_btc <span className="dn-tag bear">13.03k → 14.18k
              （+1,150）</span>、Δnet <span className="dn-tag bear">−3,560</span>。{' '}
              <span className="dn-em">
                诚实的 caveat：那根单分钟步是 BJ 15:00 → 15:01（2026-08-09、
                07:00Z → 07:01Z 08-09）、走了 +138 → −3,945 —— long 落
                13,228 → 10,213（−3,015）、short 跳 13,090 → 14,158（+1,068）
                一根线内。（+155 是上一根日锚、不是步前那一行；对那根锚、
                到 00:05Z 快照状态动了 +155 → −3,405。）
              </span>{' '}
              这就是谱系反复标过的 BJ ~14:00–15:00 feed 重同步（08-09 备忘
              的 +155 本身也在反方向上跨过同一窗）。所以 SM 序列在这根日重
              同步上震荡 ±~4k、今天的 −3,405 坐在它的空侧。自 15:01 那根步
              以来读数稳了约 17 小时（−3.9k 渗到 −3.4k）、这让它成为当前的
              <em>certifiable</em> 态 —— 一根真的翻空、按上一篇 certify 它
              +155 用的同一标准。<span className="dn-em">|Δ|/prior_net 在这里
              不是有意义的砍仓比例（prior net ≈ 0）；读法是方向性的 —— SM
              去多、重加空、深空部分复原。</span>retail 往同一方向动：
              mkt_long_pct <span className="dn-tag bear">53.78%</span> 从 24h
              前 53.40%（+0.38pt）、24h 区间 52.45 / 54.78 —— 人群在 stall 里
              往多侧再靠、而 SM 靠空。
            </p>

            <p>
              杠杆侧<em>没</em>冷却 —— 它再热了。
              <span className="dn-signal">
                funding 整根 24h 牢牢多付
              </span>
              ：live <span className="dn-tag bear">+8.12% ann</span>（原始
              0.007419 × 1095）、24h 均值
              <span className="dn-tag bear">+7.36%</span>（从 08-09 备忘的
              +5.92% —— 一根 +1.44pt 再热）、区间
              <span className="dn-tag">+3.79% / +10.88%</span>、
              <span className="dn-tag bear">0 / 1442 采样行转负</span> —— 窗内
              每一分钟多头都在付空头。OI Δ
              <span className="dn-tag">−167.8 BTC（−0.16%）</span> 跨 24h 看
              平、但形状才是故事：最后 4h 甩掉
              <span className="dn-tag bear">−902.2 BTC</span>、最后 1h
              <span className="dn-tag bear">−630.3 BTC</span>、在现货从 $65,435
              高点回落上 —— 24h 看平的 OI 是早段的堆（进推）在回落上全数
              吐回。perp 在快照对现货
              <span className="dn-tag bear">−$53.81 折价</span>（1h 均 −$47.30、
              24h 均 −$50.71、区间 −$79.49 / −$5.71 —— 24h basis 从未翻升水；
              折价从 08-09 备忘的 −$42 24h 均值走宽）。1 分钟 aggressor skew
              快照 <span className="dn-tag bear">−4.9</span>（1h 均 −0.58）——
              一档温和卖倾斜、快照上没超卖反射买盘。{' '}
              <span className="dn-em">
                funding 再热 + retail 往多侧再拥挤 + SM 翻空 + 回落上 OI 甩：
                杠杆本子在往一根 stall 里压多、而 SM 卖它、盘面卖它。这正是
                上一篇警告会&ldquo;把 stall 解到封顶下方&rdquo;的那种进封顶
                去杠杆形。
              </span>
            </p>

            <p>
              窗口流向确认了<em>早段一道被吸收的重现货买盘、然后一段干净的
              双侧去杠杆回落进快照</em>。24h：价格
              <span className="dn-tag bear">−0.10%</span>、OI
              <span className="dn-tag bear">−167.8 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +18,336</span>（窗内无 cb_cvd
              reset —— 已核）、期货 CVD
              <span className="dn-tag bear">Δ −99</span>、大单
              <span className="dn-tag bull">+43 BTC</span>、taker-net
              <span className="dn-tag bear">−99</span>{' '}
              <span className="dn-em">（taker-net 求和按构造等于期货 CVD Δ ——
              fut_cvd 是 taker_net 的滚动 cumsum）</span> ——{' '}
              <span className="dn-em">
                一道 +18.3k BTC 的净现货买盘被全数吸收换来 −0.10% 价格、期货
                持平偏卖；这是 08-09 备忘记录的同一道被吸收买盘签名、又一天
                没转成价格的重现货需求
              </span>
              。4h（进快照）：价格
              <span className="dn-tag bear">−0.42%</span>、OI
              <span className="dn-tag bear">−902.2 BTC</span>、现货 CVD
              <span className="dn-tag bear">Δ −247</span>、期货 CVD
              <span className="dn-tag bear">Δ −616</span>、大单
              <span className="dn-tag bear">−250 BTC</span>、taker-net
              <span className="dn-tag bear">−616</span> ——{' '}
              <em>高点后的回落：现货 AND 期货 都在卖、大单净卖、OI 甩得狠</em>。
              1h：价格 <span className="dn-tag bear">−0.28%</span>、OI
              <span className="dn-tag bear">−630.3 BTC</span>、现货 CVD
              <span className="dn-tag bear">Δ −207</span>、期货 CVD
              <span className="dn-tag bear">Δ −249</span>、大单
              <span className="dn-tag bear">−37 BTC</span>、taker-net
              <span className="dn-tag bear">−249</span> ——{' '}
              <em>回落仍在跑进快照、还没反射买盘</em>。24h 那道被吸收的现货
              买盘让需求故事在表面下还活着、但最后 4h 明白无疑是一段去杠杆
              卖 —— 延伸被拒、本子在放气。{' '}
              <span className="dn-em">
                （4h 与 1h 两块是从前一根边界行起算的累积 Δ —— BJ 04:04 →
                08:05 与 07:04 → 08:05 —— 这些序列的 running-cumsum 惯例、
                不是精确的 04:05/07:05 同点开盘；精确同点窗在 OI 和 CVD 上差
                几个 BTC。）
              </span>
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 分裂 —— 慢本子建设性（8h/12h/1d/1w 金叉、HTF bottom-div、1M ⚡TD9 BUY）但快周期翻倒（1h 死叉刚印、15m/30m 云下、top-div 15m/1h/4h）· D-EMA50 封顶守住三根完整收盘（08-10 未收盘仍在上方）、被 D-EMA100 / W-EMA200 汇合封住</span>
            </h2>

            <p>
              <span className="dn-signal">
                MTF 图是一根干净的分裂：慢本子偏上、快周期翻倒
              </span>
              。慢侧建设性 —— 8h 水下金叉 20b（RSI 55.5、云上）、12h 水下
              金叉 11b（RSI 55.7、云上、BULL reg div）、1d 新鲜
              <span className="dn-tag bull">水上金叉 3b</span>（RSI 54.0、云内
              62.6k–67.9k）、1w 水下金叉 3b、加一根
              <span className="dn-tag bull">HTF bottom-div 簇在 12h/1w</span>
              加一根 <span className="dn-tag bull">1M ⚡TD9 BUY（印在
              $64,846）</span>。快侧翻倒 —— 一根
              <span className="dn-tag bear">1h 水上死叉 1 根前刚印</span>
              （RSI 38.6、云内）、15m 水上死叉 6b（RSI 34.3、云下）、30m 水上
              死叉 9b（RSI 33.5、云下刚穿）、4h 水上死叉 7b（RSI 53.2、仍云
              上）、和一根 <span className="dn-tag bear">top-div 簇在
              15m/1h/4h</span>。头部净读是<em>&ldquo;higher-TF bearish ·
              short-term bounce、HTF bottom-div 簇（12h/1w）&rdquo;</em>、
              regime 标 <span className="dn-tag">5/9 trend-continuation
              （JT≥0）</span>。{' '}
              <span className="dn-em">
                直读：慢本子没破 —— 8h/12h/1d/1w 金叉加一根 bottom-div 簇说
                多日路径仍偏上 —— 但快周期确认盘中 stall、有一根刚印的 1h
                死叉、15m/30m 已经翻回云下。这是一根守住地板、但在封顶丢掉
                近端动能的重夺的结构指纹。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">64,840</td><td className="num">34.3</td><td className="bear">死叉（水上）6b</td><td className="bear">云下 ↑65.0k 4b</td><td>Buy 7</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>30m</td><td className="num">64,840</td><td className="num">33.5</td><td className="bear">死叉（水上）9b</td><td className="bear">云下 ↑64.8k（刚穿）</td><td>Buy 4</td><td>—</td></tr>
                <tr><td>1h</td><td className="num">64,840</td><td className="num">38.6</td><td className="bear">死叉（水上）1b（刚印）</td><td className="neut">云内 64.7k–65.0k 1b</td><td>Buy 8 → 9?</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>4h</td><td className="num">64,840</td><td className="num">53.2</td><td className="bear">死叉（水上）7b</td><td className="bull">云上 ↓63.9k 27b</td><td>Buy 1</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>8h</td><td className="num">64,840</td><td className="num bull">55.5</td><td className="bull">金叉（水下）20b</td><td className="bull">云上 ↓64.7k 8b</td><td>Buy 2</td><td>BEAR hid</td></tr>
                <tr><td>12h</td><td className="num">64,840</td><td className="num bull">55.7</td><td className="bull">金叉（水下）11b</td><td className="bull">云上 ↓64.6k 6b</td><td>Buy 3</td><td>BULL reg</td></tr>
                <tr><td>1d</td><td className="num">64,840</td><td className="num bull">54.0</td><td className="bull">金叉（水上）3b</td><td className="neut">云内 62.6k–67.9k 21b</td><td>Sell 7</td><td>BULL hid</td></tr>
                <tr><td>3d</td><td className="num">64,840</td><td className="num">47.1</td><td className="neut">—</td><td className="bear">云下 ↑76.2k 23b</td><td>Sell 3</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">64,840</td><td className="num">40.9</td><td className="bull">金叉（水下）3b</td><td className="bear">云下 ↑85.9k 28b</td><td>Sell 2</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">64,846</td><td className="num">44.3</td><td className="neut">—</td><td className="bull">云上 ↓47.4k 30b</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 00:01Z scan（BJ 08:01；滚动
                    latest 文件；逐字存档于
                    /opt/desk-note/snapshots/2026-08-10-0007）。头部告警：
                    <em>1h 水上死叉（1 根前）、DIF +40.1 —— 早死叉（DIF 在
                    水上）</em>；<em>1M ⚡TD9 BUY 印在 $64,846</em>；<em>1h TD8
                    Buy —— 再 1 根收盘</em>。扫描现货 $64,840、24h −0.14%、
                    24h H/L $65,483 / $64,700、qVol $3.12B（00:01Z MTF 扫描；
                    live-tape 锚 00:05Z 在同一窗读现货 $64,896、24h −0.10% ——
                    约 4 分钟差解释这个偏差）。收盘为未收盘 K 线；每个值在
                    各 TF 收盘前都按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵确认封顶守住的消化。现货 $64,896 坐在一根紧的日线簇上方
              —— <span className="dn-tag bull">D-SMA50 $63,377（+2.40%）</span>、
              <span className="dn-tag bull">D-SMA20 $64,329（+0.88%）</span>、
              <span className="dn-tag bull">D-EMA20 $64,324（+0.89%）</span>、
              和承重的 <span className="dn-tag bull">D-EMA50 封顶 $64,661
              （+0.36%）</span> —— 在 D-EMA100 往上一切之下：
              <span className="dn-tag bear">D-EMA100 $66,839（−2.91%）</span>、
              <span className="dn-tag bear">W-EMA200 $67,096（−3.28%）</span>
              （最近头顶汇合、一道 ~$66.8k–$67.1k 封顶带）、
              <span className="dn-tag bear">D-SMA100 $67,749（−4.21%）</span>、
              <span className="dn-tag bear">W-EMA20 $68,593（−5.39%）</span>、
              <span className="dn-tag bear">W-SMA20 $69,173（−6.18%）</span>、
              <span className="dn-tag bear">D-SMA150 $69,325（−6.39%）</span>、
              <span className="dn-tag bear">D-EMA150 $69,500（−6.62%）</span>、
              <span className="dn-tag bear">D-SMA200 $70,015（−7.31%）</span>、
              <span className="dn-tag bear">D-EMA200 $72,200（−10.12%）</span>、
              <span className="dn-tag bear">W-EMA150 $72,956（−11.05%；种子）</span>、
              <span className="dn-tag bear">W-SMA150 $77,127（−15.86%）</span>、
              <span className="dn-tag bear">W-EMA50 $77,303（−16.05%）</span>、
              <span className="dn-tag bear">W-EMA100 $78,223（−17.04%）</span>、
              <span className="dn-tag bear">W-SMA50 $82,492（−21.33%）</span>、
              <span className="dn-tag bear">W-SMA100 $88,720（−26.85%）</span>。{' '}
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-08-10 00:05Z（close $64,868.00）；
                偏移按 live 现货 $64,896 重算。显示的 MA 水位按 $ 取整、偏移
                用精确序列值算。W-SMA200 不可计算（盘上 190 根周 bar、需要
                200）；W-EMA150 $72,956（−11.05%）与 W-EMA200 $67,096
                （−3.28%）能显示是因为 EMA 从可用历史 seed、并按种子值披露。
                日线收盘：08-05 $64,633.90、08-06 $64,300.00、08-07
                $64,885.40、08-08 $64,928.50、08-09 $64,867.80、08-10（未收盘）
                $64,868.00 —— 三根连续完整收盘在 D-EMA50 封顶上方
                （08-07/08-08/08-09）、08-10 未收盘仍在其上方。另外、200W
                周期地板（sma200 $63,760.71、来自 2026-08-10 00:11:24Z 刷新、
                快照锚后 4 分钟的 trap-watch JSON）守住第 6 根在地板上方的
                周收盘：08-09 settle $64,867.80、+$1,107（+1.74%）净空间。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 深正 gamma +111.3M · flip $63,641（现货在上方 +1.97%）· 重 $65k–$72k 正带封住 grind · $60k −16.04M 崩盘 put 残余 · 任一前向 expiry 都无负放大器</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子带深正 gamma、无下腿放大器
              </span>
              。aggregate GEX 是 <span className="dn-tag bull">+111.3M / 1%</span>
              （净多 gamma、阻尼）。0-γ flip 坐在
              <span className="dn-tag">$63,641</span>、现货 $64,896
              <span className="dn-tag bull">在 flip 上方 +1.97%</span>（现货口
              径 64,896 / 63,641 − 1 = +1.972%）；GEX 文件自己的&ldquo;dist to
              flip&rdquo;读 +2.4%、对它的 Deribit idx $65,186（比 live 现货高
              $290）算 <span className="dn-tag bull">+2.43%</span>（65,186 /
              63,641 − 1 = +2.428%）—— 两参考都正、现货在 flip 上方、两侧都是。
              墙图是一道重的双侧夹：头顶
              <span className="dn-tag bull">$68k +20.63M</span>（最重墙）、
              <span className="dn-tag bull">$70k +20.37M</span>、
              <span className="dn-tag bull">$67k +16.75M</span>、
              <span className="dn-tag bull">$66k +16.74M</span>、
              <span className="dn-tag bull">$65k +14.08M</span>（正好在现货）、
              <span className="dn-tag bull">$72k +10.11M</span>、
              <span className="dn-tag bull">$65.5k +8.99M</span>、
              <span className="dn-tag bull">$80k +8.80M</span>；下方、
              <span className="dn-tag bear">$60k −16.04M</span> 崩盘 put 残余
              和 <span className="dn-tag bear">$62k −7.76M</span>。{' '}
              <span className="dn-em">
                $65k–$72k 正带合计约 +108M 的阻尼供给 —— 它封住挤压和缓冲
                回落一样多、正是那道 stall 住 grind 的头顶。唯一像样的负
                gamma 是现货下方的 $60k / $62k 架（合计 −23.80M）、一根地板
                垫、不是头顶陷阱。
              </span>{' '}
              10AUG26 0.3DTE 是 <span className="dn-tag bull">+15.35M</span>、
              今日 08:00Z 结算 —— 在此 00:05Z 快照后约 8h、所以它在本子里仍
              live（未做结算调整）。前向 expiry 一律正：14AUG 4.3 +16.21M、
              21AUG 11.3 +15.62M、28AUG 18.3 +24.46M（最重）、25SEP 46.3
              +12.91M、30OCT 81.3 +1.46M、25DEC 137.3 +5.24M、26MAR27 228.3
              +1.47M、25JUN27 319.3 +0.73M。<span className="dn-em">没有一根
              前向 expiry 带负放大器 —— dealer strip 沿曲线结构性多 gamma、
              与下腿 regime 相反。一根回落找到 dealer bid；一根挤压找到
              dealer offer。</span>
            </p>

            <p>
              IV 中位数横跨 828 合约是
              <span className="dn-tag">40.6%</span> 对 30D close-to-close RV
              的 <span className="dn-tag">27.66%</span> —— 链级溢价
              <span className="dn-tag">~+12.9pt</span>。是 N 合约的链中位数、
              <span className="dn-em">不是</span>可交易价差；expiry- /
              strike-level vega、skew、期限结构仍未载入、vol 读法保持
              framework only。RV 方法：30D close-to-close、logret.std × √365 ×
              100、用最末 30 根日 log return、锚自 parquet 最末 bar
              2026-08-10 00:05Z。Put/Call 比率 0.57、put OI 118,153 BTC ——
              一本 call-heavy 的本子、与正 gamma 读一致。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · 利率 FIRMED（10Y +6bp 到 4.69% EXTREME RISK-OFF、TIPS +2bp 到 2.43%）· 信用松（HY OAS −4bp 到 2.71% RISK-ON）· DXY 平 99.62 · reclaim-long 利率筛在 14bp 处 FALSE · BTC 对 TradFi 落后收窄到 −1.92pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                利率硬了、信用松了 —— 一根混合宏观盘面、在对 BTC 要紧的那几
                根线上净仍容忍风险
              </span>
              。面板渲染 2026-08-09 22:15Z、比快照早约 1.9h。US 10Y nominal
              <span className="dn-tag bear">4.69%（+6.0bp）</span>、regime z
              <span className="dn-tag bear">+2.24</span>、偶发 z
              <span className="dn-tag">+1.08</span> —— EXTREME RISK-OFF、硬了。
              10Y TIPS real <span className="dn-tag bear">2.43%（+2.0bp）</span>、
              regime z <span className="dn-tag bear">+2.53</span> —— EXTREME
              RISK-OFF、硬了。5Y5Y BE 通胀
              <span className="dn-tag">2.28%（−1.0bp）</span>。HY OAS
              <span className="dn-tag bull">2.71%（−4.0bp）</span>、regime z
              <span className="dn-tag bull">−1.03</span>、偶发 z
              <span className="dn-tag bull">−0.67</span> —— RISK-ON、当日信用
              更平静。MOVE 债波
              <span className="dn-tag stale">UNAVAILABLE</span> 本次渲染（无
              读）。DXY <span className="dn-tag">99.62（+0.02）</span>、偶发 z
              <span className="dn-tag bull">−1.82</span> —— 基本持平。Fed 净
              流动性 <span className="dn-tag">$5.840T（+0.014T）</span>、偶发
              z <span className="dn-tag">+2.47</span>。US-JP 10Y 利差
              <span className="dn-tag bear">2.02%（+6.0bp）</span>；USD/JPY
              <span className="dn-tag bull">157.84（−0.57）</span>（日元更硬）。
              NFCI −0.529（松、周度）。{' '}
              <span className="dn-em">
                净：reclaim-long 利率筛（10Y &lt; 4.55%）在 4.69% 处 FALSE ——
                差 14bp 在错的一侧、对上 08-09 备忘的&ldquo;14bp 处 FALSE&rdquo;
                态没变。利率是逆风（10Y 和 TIPS 都 EXTREME RISK-OFF 且在硬）、
                但信用平静（HY OAS RISK-ON）、美元平、所以宏观盘面不是逼出
                stall 的那根东西 —— stall 是仓位驱动的。BTC 对 TradFi 脱钩
                本印收窄到 −1.92pt（BTC +2.44% vs NQ +4.36% 在 7d）、从 08-09
                的 −2.24pt —— BTC 仍落后风险引擎、缺口在收只因 BTC 站住而盘面
                继续跑。
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
                <tr><td>US 10Y nominal</td><td className="num">4.69%</td><td className="num bear">+6.0bp</td><td className="num bear">+2.24</td><td className="num">+1.08</td><td className="bear">EXTREME RISK-OFF · 硬了</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.43%</td><td className="num bear">+2.0bp</td><td className="num bear">+2.53</td><td className="num">+1.05</td><td className="bear">EXTREME RISK-OFF · 硬了</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.28%</td><td className="num bull">−1.0bp</td><td className="num">+0.86</td><td className="num">+1.12</td><td className="neut">无标</td></tr>
                <tr><td>HY OAS</td><td className="num">2.71%</td><td className="num bull">−4.0bp</td><td className="num bull">−1.03</td><td className="num bull">−0.67</td><td className="bull">RISK-ON · 信用平静</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.529</td><td className="num">+0.00</td><td className="num">−0.65</td><td className="num bull">−1.00</td><td className="bull">松（周度）</td></tr>
                <tr><td>MOVE 债波</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">本次渲染待定</td></tr>
                <tr><td>DXY</td><td className="num">99.62</td><td className="num">+0.02</td><td className="num">+0.58</td><td className="num bull">−1.82</td><td className="neut">平 · 紧 regime</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.840T</td><td className="num bull">+0.014T</td><td className="num">−0.70</td><td className="num bear">+2.47</td><td className="neut">小周度堆</td></tr>
                <tr><td>USD/JPY</td><td className="num">157.84</td><td className="num bull">−0.57</td><td className="num">+0.36</td><td className="num bull">−1.80</td><td className="bull">日元更硬</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">2.02%</td><td className="num bear">+6.0bp</td><td className="num">−0.25</td><td className="num">+1.08</td><td className="neut">中性</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7467</td><td className="num">−0.00</td><td className="num bull">−1.41</td><td className="num bull">−1.63</td><td className="neut">无标 · 松</td></tr>
                <tr><td>10Y breakeven</td><td className="num">2.25%</td><td className="num bull">−1.0bp</td><td className="num bull">−1.04</td><td className="num">+0.28</td><td className="neut">无标</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp（月度）</td><td className="num bear">+2.42</td><td className="num">+1.09</td><td className="stale">月度 · 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、166 rows、汇总 00:01Z ——
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。
              非对角线均值 <span className="dn-tag">|r| 0.207</span>
              （IDIOSYNCRATIC 区段、&lt; 0.25 —— 对上 08-09 备忘的 0.205 基本
              持平）。BTC 列出的对齐：NQ
              <span className="dn-tag">+0.449</span>（居首）、TSLA
              <span className="dn-tag">+0.433</span>、SP500
              <span className="dn-tag">+0.349</span>、NVDA
              <span className="dn-tag">+0.348</span>、COPPER
              <span className="dn-tag">+0.260</span>、JP225
              <span className="dn-tag">+0.218</span>、GOLD
              <span className="dn-tag">+0.218</span>、PLAT
              <span className="dn-tag">+0.194</span>、AMZN
              <span className="dn-tag">+0.192</span>、META
              <span className="dn-tag">+0.189</span>。7d 相对表现：
              <span className="dn-tag bull">BTC +2.44%</span>、NQ
              <span className="dn-tag bull">+4.36%</span>、SP500
              <span className="dn-tag bull">+2.95%</span>、JP225
              <span className="dn-tag bull">+4.86%</span>、NVDA
              <span className="dn-tag bull">+11.40%</span>、MSFT
              <span className="dn-tag bull">+6.66%</span>、TSLA
              <span className="dn-tag bull">+5.13%</span>、META
              <span className="dn-tag bull">+5.20%</span>、URNM
              <span className="dn-tag bull">+13.90%</span>（领头）。金属强：
              GOLD <span className="dn-tag bull">+6.78%</span>、SILVER
              <span className="dn-tag bull">+9.67%</span>、PLAT
              <span className="dn-tag bull">+5.69%</span>、PALL
              <span className="dn-tag bull">+6.20%</span>。能源软：CL
              <span className="dn-tag bear">−2.74%</span>、BRENT
              <span className="dn-tag bear">−0.22%</span>、NGAS
              <span className="dn-tag bear">−1.13%</span>。{' '}
              <span className="dn-em">
                BTC 对 TradFi 引擎的 7d 落后收窄到约 −1.92pt（BTC +2.44% vs
                NQ +4.36%）、从 08-09 的 −2.24pt —— 缺口在收因为 BTC 站住而
                风险继续爬、不是因为它领。内生于 crypto 仍是承重读：在 |r|
                0.207、盘面不在推 BTC、仓位在推。
              </span>{' '}
              JGB 月度 2.67% 带 EXTREME RISK-OFF 月度标 —— 不依赖。
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · 回补反弹 scout 砍到平（0.4R → 0）在 certified SM 翻空上 · chase-short 退场（gamma +111.3M、现货在 flip 上方、地板守住）· 本次快照无新交易</span>
            </h2>

            <p>
              <span className="dn-signal">
                08-09 那根 scout 按它自己的 kill 规则砍到平
              </span>
              。那篇带着一根 0.4R scout long（一根 0.2R starter ~$64,620 + 一根
              0.2R add ~$64,900、均价 ~$64,760）、挂了一叠退场条件：
              &ldquo;一根 failed test 把 add 减回 0.2R starter；一根 1d 收
              &lt; $63,676 flip / $63,533 floor OR 一根 certified SM 翻空砍掉
              整仓。&rdquo;只有一条触发了。需求再加速<em>没触发</em> —— $65,435
              试探被卖、OI 4h 甩 −902 —— 但那是一根软质量 miss、不是那根
              failed-test 减仓；08-09 备忘把减仓门设在一根 1d 收翻回 D-EMA50
              封顶下方且 OI 翻回、而收盘仍守住封顶、所以减仓没触发。触发的是
              那根硬 kill：SM <em>翻回净空</em>（+155 → −3,405、稳 17h）、这
              砍掉整仓。floor/flip 砍仓<em>没</em>触发（1d 收盘守在 $63,641
              flip 和 $63,761 200W floor 上方）、所以这不是一根破位的止损 ——
              是一根对翻了向的仓位本子的纪律砍仓、在一根 stall 掉的重夺下。{' '}
              <span className="dn-em">
                本子归平。chase-short 明确<em>不</em>武装：dealer strip 是
                +111.3M 正 gamma、现货坐在 flip 上方 +1.97%、周期地板守住第 6
                根周收盘、$60k 崩盘 put 松到 −16.04M —— 空侧条件一条都不在位。
              </span>{' '}
              砍仓上唯一诚实的对冲：翻空是跨 BJ 15:01 feed artifact 重同步
              的、所以如果下一根 BJ ~14:00–15:00 窗把 SM 翻回接近平、价格还
              守住 D-EMA50、scout starter 就重武装 —— 砍仓照写好的上一篇规则、
              但 artifact 给快速重入留着门。
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">已平 · scout long · 在 certified SM 翻空上砍到平（上一篇 kill 条件）</span>
              <div className="dn-trade-name">
                回补反弹 scout —— 按 08-09 备忘要求在 certified SM 翻空上砍 0.4R → 0；需求再加速也在 $65,435 试探上没触发
              </div>
              <div className="dn-thesis">
                08-09 scout 在 0.4R 上被带着（0.2R starter ~$64,620 + 0.2R add
                ~$64,900、均价 ~$64,760）进入一根需求-vs-stall 决策。需求腿
                失败：24h 高 $65,435（BJ 14:15 08-10）被卖、现货 4h 内 −0.42%
                回落、OI 甩 −902 BTC、快 MTF 周期翻倒（1h 死叉刚印）。仓位腿
                彻底翻向：SM net 从 +155 → −3,405（long −2,410、short +1,150）、
                一根稳 17h 的翻空。上一篇对那个事件的规则明写 —— <em>砍掉
                整仓</em>。状态：<em>已平 / 平</em>。无残余、无翻。表现：均价
                ~$64,760 入场对 $64,896 快照大致持平（~+0.2%）；砍仓是一根对
                被证伪论点的纪律退场、不是打到目标。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">已平 / 平 · 在 certified SM 翻空 + 失败的封顶试探上砍 · 无残余、无翻空</span></div>
                <div><span className="dn-lvl-k">触发的 kill 条件</span><span className="dn-lvl-v bear">SM net +155 → −3,405（certified 翻空、稳 17h）—— 整仓 kill；需求再加速也没触发（$65,435 被卖、OI −902/4h）、一根软质量 miss、不是丢封顶的 failed-test 减仓</span></div>
                <div><span className="dn-lvl-k">重武装（scout starter）</span><span className="dn-lvl-v bull">SM 重回接近平 ≥ −1k（下一根 BJ 14:00–15:00 重同步或一根真回补）AND 现货在 1d 收盘上守 &gt; D-EMA50 $64,661 → 0.2R starter 重上</span></div>
                <div><span className="dn-lvl-k">artifact caveat</span><span className="dn-lvl-v">翻空跨过 BJ 15:01（07:01Z 08-09）单分钟 feed 步重同步；幅度 artifact-crossed、方向 certifiable</span></div>
              </div>
              <div className="dn-gating">
                <b>砍仓在规则内。</b>08-09 备忘预授权了这根精确退场；纪律是
                接受它、不是把 scout 守进一根翻了向的本子里。重开多头要求
                仓位本子重回接近平 AND 价格守住封顶 —— 不是一条腿。重开空头
                要求一根独立结构设置（gamma 翻负 + 一根 1d 收 &lt; $63,641
                flip）、一条都不在位。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · chase-short · 退场 —— 正 gamma、现货在 flip 上方、地板守住</span>
              <div className="dn-trade-name">
                chase-short —— 不武装；下行条件缺席（gamma +111.3M、现货在 flip 上方 +1.97%、第 6 根周收盘在 200W 地板上方）
              </div>
              <div className="dn-thesis">
                一根空侧压需要 dealer 本子翻到负 gamma、且价格丢掉 flip /
                floor。两者都不近：aggregate GEX 是 +111.3M（深正、阻尼）、
                flip 坐在 $63,641、现货在上方 +1.97%、$60k 崩盘 put 松到
                −16.04M、200W 周期地板（$63,761）守住第 6 根在地板上方的周
                收盘（$64,868、+1.74%）。SM 翻空是一根仓位信号、不是一根结构
                破位 —— 它证成砍一根多头、不是往一本会 bid 回落的多 gamma 本
                子里开空。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">武装条件</span><span className="dn-lvl-v bear">aggregate GEX 翻负（一根近端 expiry 上的新负块）AND 1d 收 &lt; $63,641 flip → 然后盯 $60k −16.04M 崩盘 put 架</span></div>
                <div><span className="dn-lvl-k">地板盯位</span><span className="dn-lvl-v bull">200W sma200 $63,761（JSON 08-10 00:11Z 刷新、post-anchor）—— 一根周收盘在其下方结束周期地板读；当前 +1.74% 净空间</span></div>
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">退场 · 不在封顶往一本 +111.3M 正 gamma 且现货在 flip 上方的本子里开空</span></div>
              </div>
              <div className="dn-gating">
                <b>纪律：</b>深正 gamma strip 意味着一根回落找到 dealer bid、
                一根挤压找到 dealer offer —— 一道均值回归的夹、不是趋势加速。
                在那道夹里、flip 在 2% 下方、周期地板守着、去空一根 stall 是
                一根低质量压；等结构破、不是仓位本子靠一下。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout 重入 · 递延 · 本子平、等 SM 重回平 + 封顶守住</span>
              <div className="dn-trade-name">
                回补反弹 scout 重入 —— 递延到仓位本子重回平且价格守住 D-EMA50 封顶；artifact 让一根快速重入还活着
              </div>
              <div className="dn-thesis">
                多头结构论没死 —— D-EMA50 封顶守住三根完整收盘（08-10 未收盘
                仍在上方）、dealer 本子多 gamma、慢 MTF 周期（8h/12h/1d/1w
                金叉、HTF bottom-div、1M ⚡TD9 BUY）偏上、200W 地板守住、24h
                现货买盘（+18.3k CVD）显示需求还在盘面下。缺的是仓位本子：
                SM 翻空、retail 往多侧再拥挤、是持久反弹的错配置。重入等 SM
                重回接近平（往 ≥ −1k）且价格还守住封顶 —— 而因翻空跨过 BJ
                15:01 feed artifact 重同步、那根重回平可能就在下一根 BJ
                ~14:00–15:00 窗印出、所以递延是短引信的、不是无期限。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">重武装触发（两腿）</span><span className="dn-lvl-v bull">SM net 重回平 ≥ −1k（BJ 14:00–15:00 重同步或真回补）AND 1d 收盘守 &gt; D-EMA50 $64,661</span></div>
                <div><span className="dn-lvl-k">scout 入场</span><span className="dn-lvl-v bull">两腿印出时、scout long 0.2R starter · 只在一根 1d 收延伸 &gt; stall 掉的 $65,435 高、且 OI 重堆时才加 0.2R</span></div>
                <div><span className="dn-lvl-k">止损</span><span className="dn-lvl-v bear">1d 收 &lt; $63,641（0γ flip）/ $63,761（200W 地板）—— 一根收在下方结束封顶上方消化读</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">$66,839（D-EMA100）/ $67,096（W-EMA200）汇合、然后 $67,749（D-SMA100）</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R starter · 0.4R max · 在 $66.8k–$67.1k 汇合平半</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R（示例）：</b>重武装入场 ~$64,661（D-EMA50 守）、止损
                $63,641（flip）= ~$1,020 风险；首目标 $66,839（D-EMA100）=
                ~$2,178 回报 ≈ 2.1:1。<b>硬规则：</b>不在单靠价格上重入 ——
                一根封顶守住而 SM 仍净空是刚被砍掉的同一根失败配置。仓位本子
                必须先重回平；一根现货重夺 $65,435 而 SM 仍 &lt; −3k 是假
                起步（它能在空头挤压上短暂尖刺、在本子真的转向之前）。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 地板守住但延伸 stall、SM 翻回空 · scout 在规则内砍到平 · chase-short 退场 · 本篇取决于仓位本子是否重回平、还是 stall 解成 flip/floor 破</span>
            </h2>

            <p>
              08-09 那张决策条件里：需求再加速<em>没触发</em>（$65,435 试探
              被卖、OI 甩 −902/4h、快周期翻倒）；certified SM 翻空<em>触发</em>
              （+155 → −3,405、稳 17h、跨 BJ 15:01 artifact）；1d-收-破-flip /
              floor 砍仓<em>没触发</em>（收盘守在 $63,641 flip 和 $63,761 200W
              floor 上方）；funding 再热继续（24h 均值 +5.92% → +7.36%、
              0/1442 转负）；D-EMA50 封顶重夺<em>守住</em>（三根完整收盘在
              上方、08-10 未收盘仍在上方）；chase-short 重武装<em>没触发</em>
              （gamma 保持深正 +111.3M、现货在 flip 上方、地板守住）。<em>一根
              kill 条件干净触发（SM 翻空）、一根软条件走弱（需求再加速没触发
              —— 一根软质量 miss、不是丢封顶的收盘）、更硬的破位砍仓没触发、
              结构背景 —— 封顶、gamma、地板 —— 完好。</em>按上一篇自己的规则
              scout 砍到平；条件围绕一个平的本子、一根守住的封顶、一根翻了
              空的仓位本子、和一根递延的重入重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>Certified SM 翻空（触发）</td><td className="bear">SM net +155 → −3,405（long −2,410、short +1,150）、稳 17h · 跨 BJ 15:01（07:01Z 08-09）feed artifact 重同步</td><td>把 0.4R scout 砍到平 —— 按上一篇明写的规则；不翻空</td></tr>
                <tr><td>scout 重入（多）—— 递延</td><td className="bull">SM net 重回平 ≥ −1k AND 1d 收盘守 &gt; D-EMA50 $64,661</td><td>scout long 0.2R starter；只在一根 1d 收 &gt; $65,435 且 OI 重堆时加 0.2R；目标 $66,839 / $67,096</td></tr>
                <tr><td>封顶上方消化守住</td><td className="bull">1d 收盘守 &gt; D-EMA50 $64,661 AND aggregate GEX 保持正</td><td>封顶守住读继续；仓位本子一确认、scout 就重武装</td></tr>
                <tr><td>封顶丢（结构升级）</td><td className="bear">1d 收 &lt; D-EMA50 $64,661、然后 &lt; $63,641 flip / $63,761 200W floor</td><td>封顶上方消化论被证伪；一根收在 flip/floor 下方是首根结构破、重开 chase-short 问题</td></tr>
                <tr><td>chase-short 重武装（当前基率低）</td><td className="bear">aggregate GEX 翻负 AND 1d 收 &lt; $63,641 flip</td><td>武装空头往 $60k −16.04M 崩盘 put 架；基率低 —— gamma 是 +111.3M 且地板守着</td></tr>
                <tr><td>funding 再热 / retail 再拥挤（盯位）</td><td className="bear">24h 均值 funding +7.36% ann、0/1442 转负；mkt_long 53.78%（+0.38pt）</td><td>无动作 —— 一根 leverage-off flush（funding 负印 + retail 去拥挤）若与 SM 重回平同来、会强化 scout 重入论</td></tr>
                <tr><td>reclaim-long 利率筛</td><td className="bear">10Y &lt; 4.55% 收 —— 在 4.69% 处 FALSE（14bp 在错的一侧）</td><td>独立筛为假；scout 的宏观顺风需要 10Y 回到 4.55% 下方</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是
              <span className="dn-signal">
                仓位本子是否在 D-EMA50 封顶上重回平（SM 在下一根 BJ 14:00–15:00
                重同步或一根真回补上回到接近平、且 24h 现货买盘终于转成价格
                往 $66.8k–$67.1k 汇合）、还是 stall 往下解 —— 一根 1d 收丢掉
                封顶、然后 $63,641 flip / $63,761 floor
              </span>
              。scout 在规则内砍到平；chase-short 退场；重入递延但在 SM 重回
              平上短引信。结构背景完好 —— D-EMA50 封顶守住三根完整收盘、
              dealer 本子 +111.3M 多 gamma、200W 地板守住第 6 根周收盘、慢 MTF
              周期偏上、一道重的 24h 现货买盘仍在盘面下被吸收 —— 但仓位本子
              （SM 空、retail 拥挤多）和快周期（1h 死叉刚印）说近端动能在封顶
              stall 了。下一个 24h 的对读是<em>平、耐心 —— 让本子先重回平再
              重入、不在一道多 gamma 夹里去空一根 stall</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2（已过 codex 敌对式审计 ——{' '}
              <code>audits/2026-08-10-desk-note.md</code>、BLOCK-CRITICAL：1
              CRITICAL + 3 MAJOR + 3 MINOR）
            </span>
            <b>状态：</b>STAGE B codex 敌对审计返回 BLOCK-CRITICAL；STAGE C
            应用了每一条 finding、并在把 v1 → v2 之前跑了强制的 grep-closure
            闭环（pattern → hits-before → hits-after）。<code>ask-deepseek</code>
            数值二审超时（curl 28、300s）、没产出额外条目；codex 仍是主把关。
            逐条 finding 处置：{' '}
            <b>DN-001（CRITICAL）</b> —— 未收盘的 08-10 bar 被当成一根完整的
            &ldquo;第 4 根连续日收盘&rdquo;计入；搜 <code>4th</code> /{' '}
            <code>four consecutive</code> / <code>four closes</code> /{' '}
            <code>fourth</code>（改前 8 命中、改后 0）—— 在 lead、MA 段、roman
            头、交易本子、决策条件和本痕迹处重述为三根完整收盘
            （08-07/08-08/08-09）加 08-10 未收盘仍在封顶上方 —— <b>已解</b>。{' '}
            <b>DN-002（MAJOR）</b> —— 24h 低时间戳差了 8h；搜
            <code>19:17</code> / <code>11:17Z</code>（改前 1 命中、改后 0）——
            改正为 $64,730 @ BJ 11:17 08-09（03:17Z）—— <b>已解</b>。{' '}
            <b>DN-003（MAJOR）</b> —— 备忘夸大了 failed-test 减仓已触发；搜
            <code>Two of those fired</code> /{' '}
            <code>which alone would trim the add</code> /{' '}
            <code>demand test failed</code>（作 kill 条件）（改前 3 命中、改后
            0）—— 重述为一根软质量 miss（需求再加速没触发）、把归平砍仓单独
            落在 certified SM 翻空上；failed-test 减仓需要一根 1d 收翻回封顶
            下方、那没发生 —— <b>已解</b>。{' '}
            <b>DN-004（MAJOR）</b> —— 陈旧的 08-03 200W 地板（$63,533.52）无法
            从原子快照复现、且当前源与之矛盾；把当前地板主张搜
            <code>63,533</code> / <code>+2.10%</code> / <code>$1,334</code> /{' '}
            <code>7 days stale</code>（改前：全部落在 08-03 值上的当前地板
            引用；改后：0）—— 更新到 live trap-watch JSON（recomputed_at
            2026-08-10 00:11:24Z、快照锚后 4 分钟、已披露）：sma200 $63,760.71、
            consecutive_above 6、距离 +1.74%（+$1,107）对 08-09 settle
            $64,867.80。两处 <code>63,533</code> 字串按设计保留、不带改前语义：
            数据来源条把 $63,533.52 标为上一篇未存档/不可复现的值、交易本子
            对 08-09 kill 规则的引用（&ldquo;$63,676 flip / $63,533 floor&rdquo;）
            是逐字历史引用、不是当前地板主张 —— <b>已解</b>。{' '}
            <b>DN-005（MINOR）</b> —— $65k–$72k 带不加总到所述 ~+99M；搜
            <code>roughly +99M</code>（改前 1 命中、改后 0）—— 改正为 ~+108M
            （20.63 + 20.37 + 16.75 + 16.74 + 14.08 + 10.11 + 8.99 = 107.67M）
            —— <b>已解</b>。{' '}
            <b>DN-006（MINOR）</b> —— 单分钟 SM 步基线被取整到日锚；搜
            <code>+155 → −3,945 step printed in a single minute</code>（改前 1
            命中、改后 0）—— 改正为真正的步前行：BJ 15:00 → 15:01 走 +138 →
            −3,945、+155 → −3,405 的移动对上一根日锚陈述 —— <b>已解</b>。{' '}
            <b>DN-007（MINOR）</b> —— 4h/1h 流向窗用了未披露的边界惯例；加了
            一句 inline 说明 4h/1h 两块是从前一根边界行起算的累积 Δ（BJ 04:04
            → 08:05、07:04 → 08:05）、不是精确同点开盘（改后 0 处未披露窗）——
            <b>已解</b>。七条全部已解（每条 hits-after = 0）；<b>post codex
            hostile audit</b>。EN/ZH 数值平价：本 ZH 篇带与 v2 EN 相同的数字
            与相同的 caveat（零漂移）、句式来自中文。<b>Build note（INFO）：</b>
            谱系在 STAGE E 跑 <code>npx --no-install next build</code> 作发布
            门；STAGE C 用 <code>npx --no-install tsc --noEmit</code> 验证
            （exit 0）。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体
            情况个性化。数字反映单一原子快照（2026-08-10 00:07Z、tape 锚
            00:05Z）、provenance 在数据来源条带中按节披露；宏观 Tier-1 面板
            渲染 2026-08-09 22:15Z（比快照早约 1.9h）、部分输入明确陈旧或
            待定（MOVE）并已标注。水位、规模与条件是交易台流程的示例、不是
            长期推荐。过去的相关性、gamma 与仓位模式不绑定未来盘面。衍生品
            有全损风险、加杠杆下损失可超过保证金。
            <em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                封顶守住了地板、但延伸 stall、仓位本子翻回空。scout 按它自己
                的规则砍到平。不往多 gamma 夹里去空。平、耐心。
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
            v2 · 2026-08-10 00:07Z 快照 · 已过 codex 敌对式审计
            （2026-08-10T00:30Z）· sources: live_db.json · mtf_div_latest.html ·
            btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            ma200w_trap_watch_state.json · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
