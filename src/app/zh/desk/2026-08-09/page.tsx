import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-08-09 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-08-09',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-08-09' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260809() {
  await requireViewer('/zh/desk/2026-08-09');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-08-09 · v2</span>
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
              <span className="dn-big">$64,964</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.07%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-08-09 00:05Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-08-09 00:05Z（行 t=&ldquo;08-09 08:05&rdquo; BJ、即 00:05Z 日锚）</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · pin 在 00:05Z 锚行以求可复现（读时文件
                    tail 已到 00:07Z）· live-tape 的 <code>t</code> 是
                    BJ-local（UTC+8）：00:05Z pin = t &ldquo;08-09 08:05&rdquo;、下游
                    所有 BJ 时间戳在正文里都转成 UTC · 24h / 4h / 1h 的流向 +
                    funding 窗都从 08:05 / 04:05 / 07:05 BJ 开盘那行起；同时钟的
                    点对比（SM net 对 08-08 08:05 基）用精确时钟
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-08-09 08:01 BJ（00:01Z）scan</td>
                  <td className="dn-flag">
                    滚动 latest 文件（可盘中前移）· /opt/desk-note/snapshots/2026-08-09-0007/
                    的存档副本才是 pin 源 · 较快照锚约 4 分钟旧 · 含未收盘
                    K 线 · 扫描现货 $64,928、24h +0.08%
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-08-09 00:01Z 快照</td>
                  <td className="dn-flag">
                    较锚约 4 分钟旧 · Deribit idx $65,269 对 live $64,964
                    （比 live 高 $305）· 828 合约 · 9AUG26 0.3DTE +22.09M 仍在本子上
                    （今日 08:00Z 结算、比此快照晚约 8h）· 存档于
                    /opt/desk-note/snapshots/2026-08-09-0007/
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-08-09 00:01Z
                  </td>
                  <td className="dn-flag">滞后约 4 分钟 · 7d 1h bar · 22 资产 · 167 rows · 存档于快照目录</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-08-08 22:16Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.8h · WEEKEND carry（周六 08-08、现金/利率市场休市）：
                    Tier-1 利率<em>水位</em>对 08-08 <em>备忘</em>不变 —— 10Y 4.69%、
                    TIPS 2.43%、HY OAS 2.71%、USD/JPY 157.74 逐篇平 · 但源面板自己的
                    Δ 列在自己的基上仍印小 delta（10Y +6.0bp、TIPS +2.0bp、USD/JPY
                    −0.66、US-JP 利差 +6.0bp）—— 披露、现金市场休市不倚重 · DXY −0.37
                    到 99.60、Fed 净流动性 +0.014T 到 $5.840T 直接照抄那条源 Δ 列
                    （source-delta 口径）· MOVE 抓取失败（暗、第五次渲染）· NFCI 陈旧 ·
                    存档于快照目录
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-08-09 00:05Z</td>
                  <td className="dn-flag">
                    close $64,930.40（未收盘 08-09 bar）· 偏移按 live 现货
                    $64,964.00 重算 · 周 ladder 按完整 2019–2026 wildcard
                    （362 根周 bar）· W-SMA200 $63,761.02 未收盘 / $63,533.52
                    已结（周期地板）· W-EMA 全历史
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W 周期地板盯位</td>
                  <td className="dn-v-cell">ma200w_trap_watch_state.json · recomputed_at 2026-08-03 00:11Z（STALE 周状态）</td>
                  <td className="dn-flag">
                    周收 200-SMA $63,533.52、上一根走完的周 2026-08-02 收
                    $63,550.00、状态 ABOVE、连续 5 根周收在地板上方（自
                    2026-07-05 起算）· JSON 自己的 recomputed_at 是 2026-08-03
                    00:11:39Z（6 天旧的周状态；文件 mtime 被 touch 到 2026-08-09
                    00:11Z、但该 JSON <em>不</em>在 pin 的快照目录里、所以 mtime
                    不是重算时间）· 本周（08-03→08-09）今晚 00:00Z 08-10 收、
                    未收盘周 bar 在 $64,930.40 —— 正形成第 6 根地板上方周收、
                    比已结地板清 +$1,397、归因于 PARQUET 重算（最末 bar 00:05Z）、
                    <em>不是</em>一次新的 trap-watch run · 慢级别（约 $250/周）、
                    已结地板值是承重数、周内不变、所以那份 6 天旧的 JSON 作已结
                    地板源无妨 · 专用 weekly_200sma.json runbook 路径缺失、用
                    trap-watch 状态作已结地板的 live 替代 · 下一根周收 08-10（今晚）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED 月度 · IRLTLT01JPM156N</td>
                  <td className="dn-flag">陈旧 · 月度（68d）· 不作实时</td>
                </tr>
                <tr>
                  <td className="dn-s">
                    NTT pivot、max-pain、strike-level IV、BTC/NQ 比率
                  </td>
                  <td className="dn-v-cell">本次未载入</td>
                  <td className="dn-flag">相关主张明确为 framework only（btc_ntt_analysis.html 是 JS 渲染、不可抽取）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dn-meta">
            <div>
              <span className="dn-k">funding · 8h 年化</span>
              <span className="dn-v">+4.77%</span>
              <span className="dn-src">live · funding 字段 0.004357/8h × 1095 = +4.77% ann · 24h 均值 +5.92%（08-08 是 +5.43% —— 再热 +0.49pt、firming carry 有效第三天）· 0 / 1441 采样行转负（仍是零）· 最大 +7.89% ann @ 08-08 20:19Z（04:19 BJ 08-09）、最小 +2.75% ann @ 08-08 04:27Z（12:27 BJ 08-08）· 未钉封顶（远在 +10.95% Binance 封顶下）</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h 均值</span>
              <span className="dn-v bear">+5.43% → +5.92%（再热 +0.49pt）</span>
              <span className="dn-src">carry firming 有效第三天 —— 多侧继续拥挤、没在 flush；仍远在封顶一半下、但 scout 早期倚的那根泄杠杆顺风<em>完全</em>反转成一根 firming carry</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bull">+0.23%（+247.9 BTC）</span>
              <span className="dn-src">live · 连着<em>第二根</em>扩（08-08 是 +1,230.0 后）、但硬减速 —— +248 对 +1,230 · 106,979.5 → 107,227.5 BTC · 仓位仍在价格后面堆、但堆得在快速变薄、而 4h / 1h 在往<em>下</em>滴（−168.2 / −67.5）—— 需求脉冲在盖上褪</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bear">53.40 / 46.60</span>
              <span className="dn-src">live_db `mkt_long_pct` · 从 52.44（24h 前）re-crowd +0.96pt 到 53.40 · 24h 区间 52.44 / 53.40 —— retail 靠<em>回</em>多侧（08-08 de-crowd 的反面）、一根进停滞的温和 re-crowd</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bull">+155（近乎 FLAT、边际偏多 · 深空 GONE）</span>
              <span className="dn-src">live · long 13.18k − short 13.03k = +155 · 谱系<em>第一根</em>在日锚上非负的 SM net（SM 已在 08-08 盘中转非负 —— 见下方 +626 / 假象峰 +1,235 / 干净高 +740 —— 但此前每根 00:05Z 日锚 08-02→08-08 都读负；这根 00:05Z 快照是第一根稳定的零上日锚）· 从 08-08 的 −1,512 过来穿过一根单分钟 long spike @ 08-08 15:11 BJ（Δlong +2,950 到 15,221、下一分钟就回）和一根 15:16 BJ re-sync 把 net 重置 −1,510 → +626 —— 复发的 BJ ~14:00–15:00 feed 假象、所以这一步<em>不是</em>一根可 certify 的单本子回补 · 但当前本子此后干净稳住、正常漂约 17h（15:16 BJ 08-08 → 08:05 BJ 08-09、net +626 → +155）、所以<em>当前</em>状态 net +155 可 certify 近乎 flat</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对同时钟 24h 基</span>
              <span className="dn-v bull">−1,512 → +155 · CERTIFIED 非负（&gt; −9,000）</span>
              <span className="dn-src">RAW 同时钟 ΔNet +1,667 穿过 08-08 15:11/15:16 BJ 假象+re-sync（一根 Δlong +2,950 spike 再一根 −1,510 → +626 重置）、所以 raw 24h delta 不是一根干净单本子移动 · 但<em>当前</em>可 certify 的 SM net +155 大幅清过 scout 的「certified SM &gt; −9,000」腿、现在平-到-略多 —— 深空全没了、chase-short 的 SM-空腿保持未上膛</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">40.3% / 27.74%</span>
              <span className="dn-src">GEX IV 中位数对 30D close-to-close RV（30 returns / 31 closes、logret.std × √365 × 100）· 链级溢价 ~+12.6pt · IV 中位数是横跨合约的链中位、<em>不是</em>可交易价差 · P/C OI 0.58（call 205,377 / put 118,508）· 31-close 区间 $62,307 – $66,522 ·（29 returns 读 28.15%、略高 —— 停滞下 RV 基本平）</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+2.02%（在上方）</span>
              <span className="dn-src">flip $63,676（从 08-08 的 $63,833 掉 −$157）· 对 live 现货 $64,964.00（+2.02%；64,964/63,676 − 1 = 2.023%）/ GEX 文件 Deribit idx $65,269（+2.50%；65,269/63,676 − 1 = 2.502%、文件取整 +2.5%）—— 两参考都正 · headline GEX +100.5M、by-expiry rollup +113.82M（对 08-08 的 +100.3M / +113.76M 基本平 —— 本子守住了深正 gamma）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                重清守住了盖第二根收、但停住了 —— 08-07/08-08 本子要的那根延伸
                只印在价格上（第二根 1d 收在盖上方）、而每条质量腿都来得弱：
                平的 tape、减速的 OI、一记被吃掉却零价涨的重现货 bid、和一根
                有效第三天再热的 carry
              </span>
              。现货 <span className="dn-tag">$64,964、24h +0.07%</span> —— 一根
              平的消化日。08-08 日线收
              <span className="dn-tag bull">$64,928.50</span>（一根 $43 上日、
              第二根收在 D-EMA50 盖上方、谱系最高收）、未收盘 08-09 bar 坐在
              $64,930.40 —— 两者都仍在盖
              <span className="dn-tag bull">D-EMA50 $64,655.13（+0.48%）</span>
              上方、盖第二天守成支撑。唯一一根真多头的位移是 SM tell：
              <span className="dn-tag bull">SM net 翻到 +155</span>
              （long 13.18k − short 13.03k）、谱系第一根非负的<em>日锚</em>读
              （SM 已在 08-08 盘中转非负；这是第一根零上的 00:05Z 日锚）——
              深空全没了（不过从 −1,512 那一步穿过复发的 BJ ~14:00–15:00 feed
              假象、所以可 certify 的是当前稳定状态、不是那次转变）。200W 周期
              地板守住：<span className="dn-tag bull">第 6 根地板上方周收在形成</span>
              今晚在 $64,930 对已结地板 $63,534。但需求脉冲在褪：
              <span className="dn-tag bear">OI 只扩 +247.9 BTC（+0.23%）</span>
              对 08-08 的 +1,230、而 4h/1h OI 已往下滴（−168 / −68）；24h 现货
              CVD 很重（<span className="dn-tag">+11,152</span>）价格却没动 ——
              一记在盖上被完全吃掉的现货 bid —— 而 perp 折价走宽到 24h 均值
              <span className="dn-tag bear">−$42</span>（比 08-08 的 −$30 更深）、
              <span className="dn-tag bear">funding 再热（24h 均值 +5.43% → +5.92%）</span>、
              <span className="dn-tag bear">retail re-crowd +0.96pt</span>。dealer
              本子守住深正 gamma（headline
              <span className="dn-tag bull">+100.5M</span>、rollup
              <span className="dn-tag bull">+113.82M</span>、flip 掉到 $63,676、
              现货 +2.02% 上方）、+$65k–$68k / +90.19M 带是一道正压在现货头上
              的双向夹、既压 grind 也垫褪。MTF 干净地劈开：慢本子仍偏上（1d
              强金叉 2b、8h/12h/1w 金叉、HTF 底背离、08-08 那根 12h ⚡TD9 SELL
              旗 CLEARED）、但快帧翻了（一根新鲜 4h 水上死叉、1h 死叉 6b、RSI
              退凉）—— 与停滞一致。本子：
              <span className="dn-tag">持 0.4R scout 原样 —— 不新加</span>
              （延伸太弱、按不动：价格平、OI 减速、现货 bid 被吃、carry 再热）；
              D-EMA100 $66,880 的减半仍立着、但价格根本没靠近；chase-short 仍
              STOOD DOWN（地板守住、gamma +100.5M、现货 +2.02% 在 flip 上方、
              SM 平-不-空）；本篇转在需求是否在盖上<em>再加速</em>、还是被吃的
              现货 bid + 走宽的 perp 折价 + 再热的 carry 把停滞解回盖下。
            </p>

            <p>
              BTC 报 <span className="dn-tag">$64,964</span> live、
              <span className="dn-tag">+0.07%</span> 在 24h（live-tape 窗；
              08:01 BJ 的 MTF 扫描在它自己的 24h 基上读 +0.08% —— 约 4 分钟
              偏移解释这道取整差），在一条紧的
              <span className="dn-tag">$65,187.43 / $64,828.81</span> 区间里
              （24h 高 @ 14:38Z 08-08 / 22:38 BJ、低 @ 00:20Z 08-08 / 08:20 BJ）
              —— 一道 $359 带、本轮最窄。
              <span className="dn-signal">盖守住了第二根收、但 tape 走平了</span>：
              08-05 收 $64,633.90、08-06 吐回 $64,300.00、08-07 重清到
              $64,885.40（那根决定性的同日重清）、08-08 收
              <span className="dn-tag bull">$64,928.50</span> —— 一根 $43 上日、
              是第二根收在盖上方、也是谱系最高收、但近乎平的一根。四根日线
              偏移坐在现货下方、对 08-08 不变：
              <span className="dn-tag bull">D-SMA50 $63,346.63（+2.55%）</span>、
              <span className="dn-tag bull">D-EMA20 $64,272.82（+1.08%）</span>、
              <span className="dn-tag bull">D-SMA20 $64,414.50（+0.85%）</span>、
              和承重的
              <span className="dn-tag bull">D-EMA50 盖 $64,655.13（+0.48%）</span>
              —— 盖第二天守成支撑 —— 然后一道跳空到
              <span className="dn-tag bear">D-EMA100 $66,879.62（−2.86%）</span>、
              <span className="dn-tag bear">D-SMA100 $67,887.61（−4.31%）</span>。
              <span className="dn-em">
                08-08 备忘把延伸框成「第二根决定性 1d 收在 D-EMA50 盖上方、OI
                继续堆、funding 不往封顶跑」。价格腿开火了 —— 08-08 收 $64,928、
                盖上方 $273 —— 但质量腿没跟上：OI 从 +1,230 减速到 +248、funding
                再热一记 +0.49pt、tape 在一记重现货 bid 于盖上被吃时走平。所以
                延伸在价格上达成、在质量上失败：本子持 scout、但弱的跟进不是
                一根加仓。
              </span>{' '}
              重清守住了盖上方的地盘；它没往 $67k–$68k 簇延伸。
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面 · SM net 翻到 +155（谱系第一根非负日锚 —— 08-08 盘中已转非负 · 深空 GONE）—— 但那次转变穿过复发的 BJ ~14:00–15:00 feed 假象、所以可 certify 的是读平-偏多的当前状态 · OI 扩了薄薄第二天（+248 对 +1,230）、4h/1h 在往下滴 · funding 再热、retail re-crowd —— 杠杆背景 firm 了、不是 flush</span>
            </h2>

            <p>
              <span className="dn-signal">
                SM tell 越过了平 —— 00:05Z 日锚谱系第一次边际偏多（SM 已在
                08-08 盘中转非负）—— 但那次转变骑在复发的 feed 假象上、所以
                干净读是当前稳定状态
              </span>
              。RAW SM net 是 <span className="dn-tag bull">+155</span>
              （long 13.18k − short 13.03k）对同时钟 24h 基 −1,512 —— 一根 raw
              ΔNet <span className="dn-tag">+1,667</span>、读着像一根再往多的回补。
              但
              <span className="dn-em">那根 raw delta 穿过一根单分钟 long spike @
              08-08 15:11 BJ（Δlong +2,950 到 15,221、下一分钟就回）和一根 15:16
              BJ re-sync 把 net 重置 −1,510 → +626 —— 同一根污染过 08-06 和
              08-07 tape 的复发 BJ ~14:00–15:00 re-sync 签名</span>、所以由空
              到多这一步<em>不是</em>一根可 certify 的单本子移动。对的读法是
              <em>当前</em>状态：re-sync 后本子干净稳住、正常漂约 17h（15:16 BJ
              08-08 → 08:05 BJ 08-09、net
              <span className="dn-tag">+626 → +155</span>、long 流掉约 313、
              short 加约 158 进停滞）、所以快照
              <span className="dn-tag bull">net +155 可 certify 近乎 flat</span>。
              无论那根 −1,510 → +626 步是一根真回补还是一根 feed 重置、结论
              一样、都大幅清过 scout 的「certified SM &gt; −9,000」腿：定义
              下行腿的那根深空全没了、SM 现在坐在平-到-略多。SM net 谷（最空）
              <span className="dn-tag bear">−1,580 @ 08-08 02:41Z（10:41 BJ 08-08）</span>
              是 re-sync 前的印；net 峰（最不空）
              <span className="dn-tag bull">+1,235 @ 08-08 07:11Z（15:11 BJ）</span>
              就是那根假象 spike 本身 —— 干净的 re-sync 后高是 +740 @ 08-08
              08:16Z（16:16 BJ）。
            </p>

            <p>
              杠杆侧 firm 了、不是 flush —— 停滞是带着一根拥挤 carry 来的、
              不是一根泄杠杆。
              <span className="dn-signal">
                funding 有效第三天再热、负数保持消失
              </span>
              ：live <span className="dn-tag">+4.77% ann</span>（字段
              0.004357/8h × 1095）、24h 均值
              <span className="dn-tag bear">+5.92% ann</span>（对 08-08 的
              +5.43% —— 一记再热 +0.49pt）、窗内带
              <span className="dn-tag bear">0 / 1441 负行</span>（仍是零）。不是
              一根 cap-press（均值远在 +10.95% 封顶一半下；区间
              <span className="dn-tag">+2.75% / +7.89% ann</span>、最大 @ 08-08
              20:19Z / 04:19 BJ 08-09、最小 @ 08-08 04:27Z / 12:27 BJ）、但多头
              carry 现在有效拥挤了三天 —— scout 早期倚的泄杠杆顺风早没了。OI Δ
              <span className="dn-tag bull">+247.9 BTC（+0.23%）</span> 跨 24h ——
              一根<em>连着第二根扩、但硬减速</em>、从 08-08 的 +1,230（106,979.5
              → 107,227.5）、而 4h/1h 已往下滴（−168.2 / −67.5 BTC）：仓位在
              价格后面堆了第二天、但堆在变薄、在盖上翻转。retail
              <span className="dn-tag bear">mkt_long_pct 53.40%</span> 从
              52.44% —— 一根 +0.96pt RE-crowd（24h 区间 52.44 / 53.40）、进停滞
              靠<em>回</em>多侧（08-08 de-crowd 的反面）。perp 对现货
              <span className="dn-tag bear">−$48.90 折价</span> 在快照（1h 均
              −$54.91、区间 −$63.74 / −$41.78；4h 均 −$51.22；24h 均 −$42.22、
              区间 −$77.08 / −$12.01 —— 一道持续<em>且走宽</em>的折价、比 08-08
              的 −$30 均值更深）。1 分钟 aggressor skew 快照
              <span className="dn-tag bear">−5.2</span>（1h 均 −9.31、区间
              −28.5 / +14.6）—— 快照上一档温和卖-aggressor 倾斜。
              <span className="dn-em">
                OI 减速 + funding 再热 + retail re-crowd + 一道走宽的 perp
                折价：杠杆背景进停滞是 firm 了、不是 flush。唯一一条加分腿是
                SM（平-到-多、深空没了）。图景是一根停在盖上的现货主导 grind
                —— 重现货买被 perp 供给和 dealer gamma 吃掉、杠杆本子把多头
                carry 拥挤回来、不是确认一根干净重清。
              </span>
            </p>

            <p>
              窗口流向是这根停滞的 tell：一记价格不肯跟的重 24h 现货 bid。
              <span className="dn-em">24h 读（行窗 08-08 08:05 → 08-09 08:05 BJ）
              是现货-bid 但价格-平</span>：24h 价格
              <span className="dn-tag">+0.07%</span>、OI
              <span className="dn-tag bull">+247.9 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +11,151.6</span>、期货 CVD
              <span className="dn-tag bull">Δ +558.5</span>、大单
              <span className="dn-tag bear">−50.4 BTC / 244 根有大单的分钟</span>、
              taker-net <span className="dn-tag bull">+558.5</span>（本窗 fut_cvd
              跟 taker cumsum；无 CVD reset、所以 delta 干净）——
              <span className="dn-em">
                一记很重的现货 aggressor bid（+11,152、08-08 的 +2,222 的五倍）
                只把价格抬 +0.07% —— 现货需求在盖上被 perp 供给（折价走宽）
                和 +90M 正 gamma 阻尼完全吃掉。大单净卖 −50、唯一一条非-bid 腿
              </span>
              。~4h（行窗 04:05 → 08:05 BJ）：价格
              <span className="dn-tag bear">−0.17%</span>、OI
              <span className="dn-tag bear">−168.2 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +1,531.9</span>、期货 CVD
              <span className="dn-tag bear">Δ −280.7</span>、大单
              <span className="dn-tag bull">+65.3 BTC / 38 笔</span>、
              taker-net <span className="dn-tag bear">−280.7</span> ——
              <em>现货仍 bid、但期货/taker 卖进一根褪着的价格、OI 在下 ——
              现货领、期货褪顶</em>。~1h（行窗 07:05 → 08:05 BJ）：价格
              <span className="dn-tag">+0.03%</span>、OI
              <span className="dn-tag bear">−67.5 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +834.5</span>、期货 CVD
              <span className="dn-tag bull">Δ +54.5</span>、大单
              <span className="dn-tag bull">+4.4 BTC / 11 笔</span>、
              taker-net <span className="dn-tag bull">+54.5</span> ——
              <em>一根安静、现货-bid 的小时、OI 在滴 —— 高点上一个 pause</em>。
              24h 是重现货-bid 但价格-僵；4h 显示现货领而期货褪、OI 在下；1h
              是一个安静 pause。需求是真的、但只在现货、而它在盖上被吃、不是
              穿过盖。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 图 · regime 守 5/9 周期反转（JT&lt;0）· 慢本子仍偏上 —— 1d 水上强金叉现 2b（DIF&gt;0）、8h/12h/1w 金叉、HTF 底背离（8h/12h/1w）—— 而 08-08 那根 12h ⚡TD9 SELL 旗 CLEARED · 但快帧翻了：一根新鲜 4h 水上死叉（1b）加进 1h 死叉（6b）、RSI 退凉 —— 停滞印在快帧上</span>
            </h2>

            <p>
              <span className="dn-signal">
                慢结构守住偏上、而快帧翻了 —— 超买旗清了、但快帧反弹也清了、
                留一根停滞在一根慢上升趋势里
              </span>
              。regime 标守
              <span className="dn-tag">5/9 周期反转体制（JT&lt;0）——
              cycle-reversal / 均值回归</span>（对 08-08 不变）、头部净读不变
              仍是
              <span className="dn-tag bear">高级别偏空 · 短线反弹（HTF
              lean-short、short-term bounce）</span>、⚠ HTF 底背离簇仍报在
              8h/12h/1w。多头 tell 守住了：
              <span className="dn-tag bull">1d 水上强金叉（2b、DIF +69.2
              在水上）</span> —— 08-08 那根新鲜叉熟了一根 bar 没败 —— 那根
              <span className="dn-tag bull">1w 水下金叉（2b）</span> 守住、
              8h/12h 保持金叉（17b / 9b）。关键地、
              <span className="dn-tag bull">08-08 那根 12h ⚡TD9 SELL 超买旗
              CLEARED —— 重置到 Buy 1</span>、所以 08-08 在盖上闪的那根快帧
              超买警告没了。但快帧随停滞翻了：一根
              <span className="dn-tag bear">新鲜 4h 水上死叉（1b、DIF +268.2）</span>
              —— 08-08 那根 4h 金叉翻回死 —— 那根
              <span className="dn-tag bear">1h 水上死叉进到 6b</span>、快帧 RSI
              退凉（15m 37.8、30m 40.9、1h 48.3、全离 08-08 高点）。金叉簇现
              跨 <span className="dn-tag bull">8h/12h/1d/1w</span>（四帧、快侧
              掉出）、顶背离簇 1h/4h/1d（三帧）、底背离簇 1h/8h/12h/1w（四帧）。
              15m 带一根 <span className="dn-tag bull">⚡TD9 BUY</span>、1M 一根
              新鲜 <span className="dn-tag bull">⚡TD9 BUY</span>（帧栈两端的超卖
              提示）。
              <span className="dn-em">
                直读：慢本子仍偏上（1d 强金叉熟了、8h/12h/1w 金叉、HTF 底背离、
                12h 超买旗清了）、这让 scout 的结构后盾完好。但快帧随平 tape
                翻了（新鲜 4h 死叉、1h 死叉 6b、RSI 退凉）—— 停滞在快帧上可见。
                不再是超买闪卖、只是一根慢上升趋势里的快帧 pause：与持-scout-
                不加一致。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>读</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">64,928</td><td className="num">37.8</td><td className="neut">死叉（水上）23b</td><td className="bear">云下 9b · ↑65.0k</td><td>Sell 2</td><td>震荡 · 顶背离藏</td></tr>
                <tr><td>30m</td><td className="num">64,928</td><td className="num">40.9</td><td className="neut">死叉（水上）12b</td><td className="neut">云内 3b</td><td>Buy 6</td><td>谨慎 · 底背离藏</td></tr>
                <tr><td>1h</td><td className="num">64,928</td><td className="num">48.3</td><td className="bear">死叉（水上）6b</td><td className="bull">云上 40b</td><td>Buy 7</td><td>谨慎 · 顶背离 · 底背离</td></tr>
                <tr><td>4h</td><td className="num">64,928</td><td className="num bull">59.4</td><td className="bear">死叉（水上）刚印 1b</td><td className="bull">云上 21b</td><td>Buy 2</td><td>谨慎 · 顶背离</td></tr>
                <tr><td>8h</td><td className="num">64,928</td><td className="num bull">58.8</td><td className="bull">金叉（水下）17b</td><td className="bull">云上 5b</td><td>Sell 6</td><td>震荡 · 底背离</td></tr>
                <tr><td>12h</td><td className="num">64,928</td><td className="num bull">56.8</td><td className="bull">金叉（水下）9b</td><td className="bull">云上 4b</td><td>Buy 1</td><td>谨慎 · 底背离（TD9 SELL 已清）</td></tr>
                <tr><td>1d</td><td className="num">64,928</td><td className="num">54.6</td><td className="bull">金叉（水上）2b</td><td className="neut">云内 62.4–67.9k 20b</td><td>Sell 6</td><td>偏空 · 顶背离（强金叉）</td></tr>
                <tr><td>3d</td><td className="num">64,928</td><td className="num">47.3</td><td className="neut">—（DIF 水下）</td><td className="bear">云下 23b · ↑76.2k</td><td>Sell 3</td><td>偏空 · 趋势</td></tr>
                <tr><td>1w</td><td className="num">64,928</td><td className="num">41.0</td><td className="bull">金叉（水下）2b</td><td className="bear">云下 27b · ↑85.9k</td><td>Sell 1</td><td>谨慎 · 底背离 · SMA200 +1.83%</td></tr>
                <tr><td>1M</td><td className="num">64,928</td><td className="num">44.4</td><td className="neut">—</td><td className="bull">云上 30b</td><td>⚡ TD9 BUY</td><td>偏多 · 趋势</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 08:01 BJ（00:01Z）scan（滚动
                    latest 文件；逐字存档于
                    /opt/desk-note/snapshots/2026-08-09-0007/）。头部告警：
                    <em>1d 水上强金叉（2b、DIF +69.2）、1w 水下金叉（2b、DIF
                    −5388.6）、4h 水上死叉（刚印、DIF +268.2）；1M ⚡TD9 BUY</em>；
                    金叉簇 8h/12h/1d/1w。顶背离 3：1h/4h/1d · 底背离 4：
                    1h/8h/12h/1w。regime 5/9 周期反转（JT&lt;0）；整体高级别
                    偏空、短线反弹。扫描现货 $64,928、24h +0.08%、H/L $65,163 /
                    $64,784、qVol $1.71B、净计 3 多 / 2 空 / 5 中性。收盘为未
                    收盘 K 线；每个值在各 TF 收盘前按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵读的是一根守住了自己 cap-flip 但没推进的重清。现货
              $64,964 坐在四根日线偏移上方（对 08-08 不变）：
              <span className="dn-tag bull">D-SMA50 $63,346.63（+2.55%）</span>、
              <span className="dn-tag bull">D-EMA20 $64,272.82（+1.08%）</span>、
              <span className="dn-tag bull">D-SMA20 $64,414.50（+0.85%）</span>、
              和承重的
              <span className="dn-tag bull">D-EMA50 盖 $64,655.13（+0.48%）</span>
              —— 盖第二天守成支撑 —— 未收盘的
              <span className="dn-tag bull">W-SMA200 $63,761.02（+1.89%）</span>
              和已结的 200W 周期地板
              <span className="dn-tag bull">$63,533.52（+2.25%）</span> 在下方。
              头顶跳空是同一道盖住本轮的墙：
              <span className="dn-tag bear">D-EMA100 $66,879.62（−2.86%）</span>、
              <span className="dn-tag bear">D-SMA100 $67,887.61（−4.31%）</span>、
              <span className="dn-tag bear">W-EMA200 $68,575.41（−5.27%）</span>、
              <span className="dn-tag bear">W-EMA20 $68,990.63（−5.84%）</span>、
              <span className="dn-tag bear">W-SMA20 $69,231.73（−6.16%）</span>、
              <span className="dn-tag bear">D-SMA150 $69,365.18（−6.34%）</span>、
              <span className="dn-tag bear">D-EMA150 $69,563.36（−6.61%）</span>、
              <span className="dn-tag bear">D-SMA200 $70,138.17（−7.38%）</span>、
              <span className="dn-tag bear">D-EMA200 $72,274.15（−10.11%）</span>、
              <span className="dn-tag bear">W-EMA150 $73,980.95（−12.19%）</span>。
              更高更远、已弃用：W-SMA150 $76,881.89（−15.50%）、W-EMA50
              $77,817.51（−16.52%）、W-EMA100 $78,777.74（−17.54%）、W-SMA50
              $83,359.75（−22.07%）、W-SMA100 $88,662.48（−26.73%）。
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-08-09 00:05Z（close
                $64,930.40）；偏移按 live 现货 $64,964.00 重算。显示的 MA
                水位按 $ 取整、偏移用精确序列值算。周 ladder 按完整
                2019–2026 wildcard（362 根右标周 bar）算、所以 W-SMA200 可
                计算：$63,761.02 未收盘（+1.89%）与 $63,533.52 已结 —— 已结
                值是 trap-watch 周收 200-SMA（全篇收盘用的那条地板）。W-EMA200
                $68,575.41（−5.27%）与 W-EMA150 $73,980.95（−12.19%）是全历史
                EMA。日线收盘：08-05 $64,633.90、08-06 $64,300.00、08-07
                $64,885.40、08-08 $64,928.50 —— 08-08 收比 08-07 收高 $43、比
                D-EMA50 盖 $64,655.13 高 $273：那根盖 —— 08-07 决定性同日重清、
                翻成支撑 —— 守了第二根收、但上日近乎平。08-09 bar 在跑
                $64,930.40；本周 200W-地板收今晚在那水位形成、比已结地板清
                +$1,397 —— 第 6 根地板上方周收。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子守住深正 gamma · headline +100.5M / rollup +113.82M（08-08 是 +100.3M / +113.76M）· flip 掉到 $63,676、现货 +2.02% 上方 · +$65k–$68k 带合计 +90.19M、$68k 墙（+21.06M）现领先在现货的 $65k 墙（+20.46M）—— 一道更重的双向夹、崩盘 put $60k 松到 −15.87M、strip 上任何地方无负 gamma 块</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子进停滞守住深正 gamma —— headline +6.3M → +38.1M →
                +68.6M → +106.0M → +108.0M → +78.7M → +100.3M → +100.5M 跨
                08-02 → 08-09 —— 一道正压在现货头上的双向阻尼
              </span>
              。headline GEX 是
              <span className="dn-tag bull">+100.5M / 1%</span>（08-08 是
              +100.3M —— 基本平）、by-expiry rollup 是
              <span className="dn-tag bull">+113.82M</span>（08-08 是 +113.76M；
              by-expiry strip 合到 gex_summary net_gex）。0-γ flip 掉
              <span className="dn-tag">$63,833 → $63,676（−$157）</span>、现货
              $64,964 坐在 <span className="dn-tag bull">flip 上方 +2.02%</span>
              （现货口径 64,964 / 63,676 − 1 = +2.023%）；GEX 文件自己的
              Deribit idx $65,269（比 live 现货高 $305）读
              <span className="dn-tag bull">+2.50%</span>（65,269 / 63,676 − 1
              = +2.502%、文件取整 +2.5%）—— 两参考都正、现货远在 flip 上方
              两侧都成立。墙图是一道正压在现货头上的重带、下面是崩盘 put 架、
              内部次序小幅重排：
              <span className="dn-tag bull">$68k +21.06M</span>（现最重墙、
              从 +20.61M 升）、
              <span className="dn-tag bull">$70k +20.54M</span>、
              <span className="dn-tag bull">$65k +20.46M</span>（在现货、从
              +23.49M 松 —— $65k 墙让出头名给 $68k）、
              <span className="dn-tag bull">$66k +18.64M</span>、
              <span className="dn-tag bull">$67k +17.33M</span>、
              <span className="dn-tag bull">$65.5k +12.70M</span>、
              <span className="dn-tag bull">$72k +10.25M</span>、
              <span className="dn-tag bull">$80k +8.82M</span>、负侧是下面的
              崩盘 put 架：
              <span className="dn-tag bear">$60k −15.87M</span>（最重负、崩盘
              put、从 −16.15M 松）、
              <span className="dn-tag bear">$62k −7.47M</span>（从 −7.68M 松）。
              <span className="dn-em">
                +$65k–$68k 正向带的五根大 strike 合计 +90.19M（+20.46M /
                +12.70M / +18.64M / +17.33M / +21.06M 叠）—— 比 08-08 的
                +92.56M 略薄、$68k 墙从 $65k 手里接过主导单 strike。dealer 仍在
                褪势里买、在挤压里卖、横跨整个重清区 —— 正是今天吃掉那记重
                现货 bid 却不让价格推进的那道夹。阻尼两向都切：褪时缓冲更厚、
                但 grind 的天花板压力也更重、所以现货需求停在盖上、没推到簇
              </span>
              。近端：9AUG26 0.3DTE
              <span className="dn-tag bull">+22.09M</span> 在本子上（今日
              08:00Z 结算、比此快照晚约 8h）—— 一根正前端、没有近端负放大器。
              前向 strip：10AUG 1.3 +8.92M、11AUG 2.3 +2.41M、12AUG 3.3 +0.78M、
              14AUG 5.3 +17.21M、21AUG 12.3 +15.86M、28AUG 19.3 +24.33M、25SEP
              47.3 +13.30M、30OCT 82.3 +1.46M、25DEC 138.3 +5.29M、26MAR27
              229.3 +1.44M、25JUN27 320.3 +0.73M —— 整条前向 strip 都正；没有
              一根负 gamma 块能把本子翻空。
            </p>

            <p>
              IV 中位数横跨链是
              <span className="dn-tag">40.3%</span> 对 30D close-to-close RV
              <span className="dn-tag">27.74%</span> —— 链级溢价
              <span className="dn-tag">~+12.6pt</span>。
              <span className="dn-em">
                是横跨合约的链中位、<em>不是</em>可交易价差；链上合约计是
                828、但 expiry- / strike-level vega、skew、期限结构仍未载入、
                vol 读法保持 framework only。
              </span>{' '}
              Put/Call OI 比 0.58（call OI 205,377 对 put OI 118,508 —— 一本
              call 重的本子、与正 gamma 阻尼一致）。RV 方法：30D
              close-to-close、logret.std × √365 × 100、用最末 30 根日 log
              return（= 连续 31 根日 close）、锚自 parquet 最末 bar
              2026-08-09 00:05Z；底层 31-close 窗区间 $62,307 – $66,522。
              （参考：最末 29 returns / 30 closes 读 28.15%、比 30-return 的
              27.74% 略高 —— 盘面在簇下停滞、RV 基本平。）
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · WEEKEND carry（周六 08-08 渲染、现金/利率市场休市）—— Tier-1 <em>水位</em>对 08-08 <em>备忘</em>不变：10Y 4.69%、TIPS 2.43%、HY OAS 2.71%、USD/JPY 157.74 逐篇平（源面板 Δ 列在自己的基上仍印 10Y +6.0bp / TIPS +2.0bp / USD-JPY −0.66 / US-JP +6.0bp）· 利率筛 FALSE 在 14bp（不变）· DXY −0.37 到 99.60、Fed 净流动性 +0.014T 照抄源 Δ 列 · MOVE 暗第五次渲染 · 跨资产 IDIOSYNCRATIC（|r| 0.205）、BTC +3.38% 7d、对 NQ 落后收窄到 −2.24pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观是一根 weekend carry —— 面板渲染是周六 08-08 22:16Z、现金
                和利率市场休市、所以 Tier-1 基本是 08-08 的印持平
              </span>
              。Delta 口径、开门先披露：利率/汇率<em>水位</em>逐篇比（对 08-08
              备忘）、现金市场休市读平、而 pin 的源面板自己的 Δ 列在自己的基上
              仍印小 delta —— 两个都摆出来、让分母永不含糊。US 10Y nominal
              <span className="dn-tag bear">4.69%（水位对 08-08 备忘平；源 Δ +6.0bp）</span>、
              regime z <span className="dn-tag bear">+2.24</span> —— EXTREME
              RISK-OFF 标、周末持平。10Y TIPS real
              <span className="dn-tag bear">2.43%（水位对 08-08 备忘平；源 Δ +2.0bp）</span>、
              regime z <span className="dn-tag bear">+2.53</span> —— 仍 EXTREME
              RISK-OFF。5Y5Y BE 通胀
              <span className="dn-tag">2.28%（源 Δ −1.0bp）</span>。HY OAS
              <span className="dn-tag bull">2.71%（源 Δ −4.0bp）</span>、regime z
              <span className="dn-tag bull">−1.03</span> —— 仍松（risk-on）。
              MOVE 债波
              <span className="dn-tag stale">不可用（抓取失败）</span> ——
              暗第五次渲染。DXY
              <span className="dn-tag bull">99.60（源 Δ −0.37）</span> —— 软了、
              唯一一根逐篇动了的 Tier-1 <em>水位</em>。Fed 净流动性
              <span className="dn-tag">$5.840T（源 Δ +0.014T）</span>、一记小的
              新周微调。US-JP 10Y 利差
              <span className="dn-tag bear">2.02%（水位对 08-08 备忘平；源 Δ +6.0bp）</span>；
              USD/JPY
              <span className="dn-tag">157.74（水位对 08-08 备忘平；源 Δ −0.66）</span>。
              NFCI −0.529（松、陈旧）。
              <span className="dn-em">
                净：reclaim-long 利率筛（10Y &lt; 4.55%）在 4.69% 仍 FALSE、离闸
                14bp（周末不变）。10Y 和 TIPS 带 EXTREME RISK-OFF regime z
                （+2.24 / +2.53）；信用侧仍松（HY OAS 2.71%、risk-on）但利率侧
                没往闸挪回。MOVE 暗第五次渲染、所以债波确认不可用。宏观对
                重清仍是逆风、不是顺风 —— scout 站在自己的 BTC 内生腿上、下一根
                真宏观读是周一现金市场重开。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>宏观指标</th>
                  <th>水位</th>
                  <th>Δ</th>
                  <th>regime z</th>
                  <th>读</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>US 10Y nominal</td><td className="num">4.69%</td><td className="num">平/08-08 备忘 · 源 +6.0bp</td><td className="num bear">+2.24</td><td className="bear">EXTREME 紧 · weekend carry</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.43%</td><td className="num">平/08-08 备忘 · 源 +2.0bp</td><td className="num bear">+2.53</td><td className="bear">EXTREME 紧 · weekend carry</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.28%</td><td className="num bull">源 −1.0bp</td><td className="num">+0.86</td><td className="neut">在松</td></tr>
                <tr><td>HY OAS</td><td className="num">2.71%</td><td className="num bull">源 −4.0bp</td><td className="num bull">−1.03</td><td className="bull">松 · risk-on</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.529</td><td className="num">+0.00</td><td className="num bull">−0.65</td><td className="stale">松 · 陈旧 8d</td></tr>
                <tr><td>MOVE 债波</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">不可用 · 抓取失败（第五次渲染）</td></tr>
                <tr><td>DXY</td><td className="num">99.60</td><td className="num bull">源 −0.37</td><td className="num">+0.57</td><td className="bull">软了</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.840T</td><td className="num">源 +0.014T</td><td className="num bear">−0.70</td><td className="neut">一记小新周微调</td></tr>
                <tr><td>USD/JPY</td><td className="num">157.74</td><td className="num">平/08-08 备忘 · 源 −0.66</td><td className="num">+0.34</td><td className="neut">weekend carry</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">2.02%</td><td className="num">平/08-08 备忘 · 源 +6.0bp</td><td className="num">−0.25</td><td className="neut">weekend carry</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7372</td><td className="num bull">−0.01</td><td className="num bull">−1.48</td><td className="bull">松</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp（月度、68d）</td><td className="num bear">+2.42</td><td className="stale">月度 · 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、汇总 00:01Z ——
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。
              非对角线均值 <span className="dn-tag">|r| 0.205</span>
              （在 0.25 NORMAL 底以下、对 08-07 的 0.204 基本平 ——
              <span className="dn-tag">IDIOSYNCRATIC 区段</span>、资产按各自
              驱动在动）。BTC 对风险复合体的对齐：TSLA
              <span className="dn-tag">+0.467</span>（顶）、NQ
              <span className="dn-tag">+0.461</span>、SP500
              <span className="dn-tag">+0.362</span>、NVDA
              <span className="dn-tag">+0.326</span>、JP225 +0.292、COPPER
              +0.275、GOLD +0.249、SILVER +0.234、PLAT +0.223、AMZN +0.213、
              URNM +0.182。7d 相对表现、BTC 守住绿、盘面仍强：
              <span className="dn-tag bull">BTC +3.38%</span>（从 08-08 的
              +3.12% 升）、NQ
              <span className="dn-tag bull">+5.62%</span>、SP500
              <span className="dn-tag bull">+4.01%</span>、JP225
              <span className="dn-tag bull">+4.85%</span>、大市值与金属领头 ——
              URNM <span className="dn-tag bull">+14.93%</span>、NVDA
              <span className="dn-tag bull">+12.90%</span>、SILVER
              <span className="dn-tag bull">+10.33%</span>、MSFT
              <span className="dn-tag bull">+8.44%</span>、PALL
              <span className="dn-tag bull">+7.63%</span>、TSLA
              <span className="dn-tag bull">+7.46%</span>、PLAT
              <span className="dn-tag bull">+7.41%</span>、META
              <span className="dn-tag bull">+7.31%</span>、GOLD
              <span className="dn-tag bull">+7.22%</span>。能源软：CL
              <span className="dn-tag bear">−10.40%</span>、BRENT
              <span className="dn-tag bear">−8.08%</span>、NGAS
              <span className="dn-tag bear">−3.03%</span>；JPY +0.02% 平。
              <span className="dn-em">
                BTC 对 TradFi 引擎的 7d 落后收窄到约 −2.24pt（BTC +3.38% 对
                NQ +5.62%、从 08-08 的 −2.47pt）—— BTC 守住绿、把差距收了
                一点、仍落后一根强周、不是从它分叉。regime 是 IDIOSYNCRATIC
                （|r| 0.205）、所以盘面两向都没在驱动 BTC；这根重清是 BTC 内生的、
                scout 站在自己（现在平-到-多的）仓位腿上、不是宏观顺风
              </span>
              。JGB 月度 2.67% 陈旧 —— 不依赖。
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · 本子 CARRY 0.4R scout 原样 —— 不新加 · 延伸在价格上达成（第二根收在盖上方）但在质量上失败（OI 减速、carry 再热、现货 bid 被吃、tape 平）· chase-short STOOD DOWN · 重清停在盖上、在正 gamma 带里</span>
            </h2>

            <p>
              <span className="dn-signal">
                08-08 备忘在需求确认的重清盖上把 scout 加到框架允许的 0.4R、
                点了延伸触发。价格腿开火了；质量腿没有 —— 所以本子持、不加
              </span>
              。延伸触发是「第二根决定性 1d 收在 D-EMA50 盖上方、OI 继续堆、
              funding 不往封顶跑」。08-08 日线收
              <span className="dn-tag bull">$64,928.50</span> —— 盖上方 $273、
              第二根收在盖上方 —— 所以价格腿开火。但
              <span className="dn-em">质量腿来得弱：OI 从 +1,230 减速到 +248
              （且 4h/1h 往下滴）、funding 再热一记 +0.49pt 到 24h 均值
              +5.92%、retail re-crowd +0.96pt、tape 在一记重 24h 现货 bid
              （+11,152 CVD）于盖上被吃、零价涨时走平（+0.07%）</span>。唯一一根
              加分位移是 SM：net 翻到一根可 certify 近乎 flat
              <span className="dn-tag bull">+155</span>（深空没了）、200W 地板守
              第 6 根周收。所以本子
              <span className="dn-em">持框架允许 size 的 0.4R scout —— 不新加</span>；
              需求太弱、按不动、不再往 +90M 正 gamma 夹里按。chase-short 仍
              STOOD DOWN —— 地板守住、gamma 守 +100.5M、现货 +2.02% 在 flip
              上方、SM 平-不-空。停滞让本子保持有度：持、减半纪律完好、第一根
              certified 止损砍。
            </p>

            <div className="dn-trade">
              <span className="dn-side bull">scout · LONG · CARRY 0.4R 原样（框架允许、最小 size）· 不新加 —— 延伸在价格上达成、在质量上失败 · D-EMA100 减半立着</span>
              <div className="dn-trade-name">
                回补反弹 scout —— 持、不加：重清守住盖第二根收但停住、需求减速、carry 再热、进一道重的正 gamma 夹
              </div>
              <div className="dn-thesis">
                08-06 备忘开了这根 starter、08-07 备忘一触即砍地持住它、08-08
                备忘在需求确认的重清盖上把它加到框架允许的 0.4R。这一轮重清
                守住了 —— 08-08 日线收 $64,928（盖 $64,655 上方 $273、第二根收
                在盖上方）、SM 翻到一根可 certify 近乎 flat +155（深空没了）——
                但它没延伸：OI 从 +1,230 减速到 +248、tape 在一记重现货 bid
                （+11,152 CVD）于盖上被吃时走平（+0.07%）、funding 有效第三天
                再热（24h 均值 +5.92%）、retail re-crowd +0.96pt、perp 折价走宽
                到 −$42。dealer 本子守 +100.5M / +113.82M 正 gamma（flip
                $63,676、现货 +2.02% 上方）、MTF 慢本子仍偏上（1d 强金叉 2b、
                8h/12h/1w 金叉、12h TD9 SELL 旗清了）而快帧翻了（新鲜 4h 死叉、
                1h 死叉 6b、RSI 退凉）。持 0.4R scout 最小 size —— 不新加 ——
                若需求再加速在 D-EMA100 $66,880 减半、第一根 certified 止损
                砍整仓。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">仓位（持、不加）</span><span className="dn-lvl-v bull">框架允许 0.4R 总仓 —— 0.2R starter 自 ~$64,620（08-06 开仓）+ 0.2R 加仓腿 @ ~$64,900（08-08 重清盖）；混合入场 ~$64,760、按最小 size 持；本轮不新加</span></div>
                <div><span className="dn-lvl-k">延伸触发（只价格达成）</span><span className="dn-lvl-v">第二根 1d 收在 D-EMA50 盖上方 FIRED（$64,928 &gt; $64,655）但质量腿失败 —— OI 减速（+248 对 +1,230）、funding 再热（24h 均值 +5.92%）、tape 平（+0.07%）—— 所以不加；要在盖上一记需求再加速才按</span></div>
                <div><span className="dn-lvl-k">止损（一触即砍）</span><span className="dn-lvl-v bear">1d 收 &lt; $63,676 flip（工作、从 $63,833 掉）或 &lt; $63,533 200W 地板（硬）—— 或一根 CERTIFIED SM 滚回空（feed 干净、去假象转净卖）</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">$66,880（D-EMA100）然后 $67,888（D-SMA100）—— 穿 +$65k–$68k / +90.19M 正 gamma 带；当 grind 处理、预期盖区被双向防守（今天它吃掉了一记重现货 bid 没推进）</span></div>
                <div><span className="dn-lvl-k">R/R（持、对混合 ~$64,760）</span><span className="dn-lvl-v">止损 $63,676 = ~$1,084 风险；一目标 $66,880 = ~$2,120 ≈ 1.96:1；二目标 $67,888 = ~$3,128 ≈ 2.89:1 —— 在 D-EMA100 减半</span></div>
              </div>
              <div className="dn-gating">
                <b>硬规则：</b>延伸在价格上达成、在质量上失败、所以本子持 ——
                不加。需求减速、carry 再热、一记重现货 bid 在盖上被吃、进一道
                更重的正 gamma 阻尼。若需求再加速在 D-EMA100 $66,880 减半；
                <em>不要</em>追进簇。第一根 certified 止损砍整仓 —— 一根 1d 收破
                $63,676 flip / $63,533 地板、或一根 certified SM 滚回空。一根
                失败的测试盖（一根 1d 收回 $64,655 下方、OI 滚回来）把加仓修回
                0.2R starter。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">flat · chase-short · STOOD DOWN · 地板守住、gamma 守 +100.5M、现货 +2.02% 在 flip 上方、SM 平-不-空</span>
              <div className="dn-trade-name">
                Chase-short —— 停手：重清守住盖、本子守住深正 gamma、SM 翻平-到-多 —— 每条腿都还指向错的方向
              </div>
              <div className="dn-thesis">
                chase-short 挂在一根 flip/旧地板破（$63,676 flip / $63,311
                旧地板）AND SM 空 AND aggregate GEX 翻负上。三条都指向错的
                方向：现货 +2.02% 在 flip 上方（tape 守住了盖、不是破了 flip）、
                dealer 本子守 +100.5M headline / +113.82M rollup —— 一道正
                阻尼、前向 strip 到 25JUN27 任何地方都没负 gamma 块 —— 而 SM
                翻到一根可 certify 平-到-多（net +155）、不是再空。没有一条腿
                上膛、空头停手；$60k 的崩盘 put 架也松到 −15.87M（从 −16.15M）、
                留下边际更少的级联目标。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">re-arm 触发</span><span className="dn-lvl-v bear">1d 收 &lt; $63,676 flip / $63,311 旧地板 AND aggregate GEX 翻负（前段 expiry 内一根新负 gamma 块）AND 一根 CERTIFIED SM 空（feed 干净）</span></div>
                <div><span className="dn-lvl-k">SM 腿（指向错方向）</span><span className="dn-lvl-v bull">SM 翻到一根可 certify 近乎 flat +155（深空没了）、所以 SM-空腿没上膛 —— 需要一根全新 certified 滚回空</span></div>
                <div><span className="dn-lvl-k">re-arm 上的目标</span><span className="dn-lvl-v">$60k（−15.87M 崩盘 put 架）、$62k（−7.47M）在中间 —— 两者对 08-08 都松</span></div>
                <div><span className="dn-lvl-k">不要</span><span className="dn-lvl-v">不要空进一本 +100.5M 正 gamma 的本子、200W 地板守第 6 根周收、价格 +2.02% 在 flip 上方、SM 平-到-多</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveat：</b>整条前向 GEX strip 都正（到 25JUN27 无负 gamma
                块）；一根 gamma 翻要求一根新负块建起来、不只是现货往下漂。
                本子守住重的正 gamma（+100.3M → +100.5M）、两向都加厚了阻尼 ——
                一根褪会遇到今天吃掉现货 bid 的那道同样缓冲。在一根负块真正
                印出、一根 certified SM 再空出现之前、空头没有腿。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 重清停在盖上 —— 守了第二根收但需求脉冲褪了 · 盯一记再加速或一根失败的测试</span>
              <div className="dn-trade-name">
                重清盯位 —— STALLED：盖守住第二根收（$64,928）但 tape 走平、一记重现货 bid 在盖上、在减速的 OI 上被吃
              </div>
              <div className="dn-thesis">
                08-08 备忘把重启的重清框成一根加仓、点了延伸：第二根决定性收
                在盖上方、OI 继续堆、funding 不往封顶跑。价格腿开火了 —— 08-08
                收 $64,928、盖上方 $273 —— 但重清停住了：OI 从 +1,230 减速到
                +248、tape 在一记重 24h 现货 bid（+11,152 CVD）于盖上被 perp
                供给（折价走宽到 −$42）和 +90M 正 gamma 夹吃掉时走平（+0.07%）、
                funding 有效第三天再热、retail re-crowd。SM tell 转加分
                （平-到-多、深空没了）、200W 地板守第 6 根周收、但需求脉冲在盖上
                褪了。下一个盯位是需求是否在盖上<em>再加速</em>（OI 重建、现货
                bid 终于译成价格往 $67k–$68k 簇）还是停滞在一根失败的测试上
                解回盖下。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">多头再加速</span><span className="dn-lvl-v bull">一记在盖上决定性推往 $66,880（D-EMA100）、OI 重建、重现货 bid 终于译成价格 —— 持 scout、在 D-EMA100 减半</span></div>
                <div><span className="dn-lvl-k">空头了结</span><span className="dn-lvl-v bear">1d 收 &lt; $63,676 flip、一根 certified SM 滚回空 —— 砍 scout、如果 gamma 也翻负盯 chase-short re-arm</span></div>
                <div><span className="dn-lvl-k">失败的测试盖</span><span className="dn-lvl-v bear">一根 1d 收回 $64,655 盖下方、OI 滚回来 —— 把加仓修回 0.2R starter；重清停住、把盖吐回</span></div>
                <div><span className="dn-lvl-k">慢帧 tell</span><span className="dn-lvl-v bull">1d 水上强金叉（2b）+ 8h/12h/1w 金叉 + HTF 底背离（8h/12h/1w）+ 12h TD9 SELL 旗清了 —— 慢本子仍偏上、撑着持仓</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>一根守住盖但在减速需求上停住的重清是一根持、
                不是一根加 —— 价格腿开火而质量腿（OI、carry、价格跟进）没有、
                一记重现货 bid 在盖上被吃进一道更重的正 gamma 阻尼。按最小 size
                持、只在一记再加速上一目标减半、按数据了结：一记在盖上决定性
                推、在重建的 OI 上延伸；一根失败的测试或一根 certified SM 滚回
                空修或砍。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 延伸在价格上开火（第二根收在盖上方）但在质量上失败（OI 减速、carry 再热、现货 bid 被吃、tape 平）、所以本子 CARRY 0.4R scout —— 不新加 · SM 翻平-到-多（深空没了）、200W 地板守第 6 根周收 · 本篇转在需求是否在盖上再加速、还是停滞解回盖下</span>
            </h2>

            <p>
              08-08 那张决策条件里：scout-延伸路径<em>在价格上开火了</em> ——
              08-08 日线收 $64,928、第二根收在 $64,655 盖上方 —— 但<em>在质量上
              失败</em>（OI 减速到 +248、funding 再热到 24h 均值 +5.92%、tape
              在一记重现货 bid 于盖上被吃时走平）、所以本子持、不加；scout-CUT
              路径<em>没开火</em> —— 现货守在 flip 和地板上方很远、SM certify
              的是平-到-多、不是再空；失败第二测试路径<em>没开火</em> —— 盖第二
              根收守成支撑；chase-short re-arm <em>没开火</em> —— 现货坐在
              $63,676 flip 上方 +2.02%、gamma 守 +100.5M；SM feed 又穿过复发的
              BJ ~14:00–15:00 假象、但当前本子可 certify（+155）。<em>重清守住
              盖但停住了；本子按框架 size 持 scout、了结转在需求是再加速还是
              停滞解回下。</em>今天条件围绕一根持着的 0.4R scout（踩在现在
              平-到-多的 SM tell 上）、一根停滞的重清、和一本守住的正 gamma
              本子重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>回补反弹 scout（多）—— 已持、再加速触发</td><td className="bull">一记在 D-EMA50 盖 $64,655 上决定性推往 $66,880、OI 重建、重现货 bid 译成价格</td><td>按框架允许的 0.4R 持 scout（最小 size）；再加速上在 $66,880（D-EMA100）然后 $67,888（D-SMA100）减半 —— 停滞里不新加</td></tr>
                <tr><td>Scout 止损 / 砍（一触即砍）</td><td className="bear">1d 收 &lt; $63,676 flip（工作）或 &lt; $63,533 200W 地板（硬）—— 或 feed 干净后一根 CERTIFIED SM 滚回空</td><td>第一根 certified 止损砍整个 scout 仓位</td></tr>
                <tr><td>失败的测试盖</td><td className="bear">一根 1d 收回 $64,655（D-EMA50）下方、OI 滚回来</td><td>把加仓修回 0.2R starter —— 重清停住、把盖吐回</td></tr>
                <tr><td>Chase-short（空）—— re-arm</td><td className="bear">1d 收 &lt; $63,676 flip / $63,311 旧地板 AND aggregate GEX 翻负 AND 一根 certified SM 空</td><td>只在一根全新审计触发后重评 chase-short —— 无站立 size；框架目标 $60k（−15.87M 崩盘 put）</td></tr>
                <tr><td>200W 周期地板（第 6 根收在形成）</td><td className="bull">本周（08-03→08-09）今晚 00:00Z 08-10 收在 ~$64,930 对 $63,533.52 地板 —— 第 6 根地板上方周收、清 +$1,397</td><td>周期支撑完好且在延伸；一根周收 &lt; $63,533.52 会结束 streak —— 另起评估、但离现货远</td></tr>
                <tr><td>SM feed 假象（复发、当前状态干净）</td><td className="bull">由空到多的转变穿过 08-08 15:11/15:16 BJ 假象+re-sync；当前本子 +155 干净稳住约 17h</td><td>读可 certify 的当前状态（+155、平-到-多）；只在一根新单分钟步出现时重挂旗 —— 不 certify 那次转变本身</td></tr>
                <tr><td>reclaim-long 利率筛</td><td className="bear">10Y &lt; 4.55% 收 —— 在 4.69% FALSE（距 14bp 触发、周末不变）</td><td>独立筛 FALSE；宏观是逆风、重清是 BTC 内生的；下一根真读是周一现金重开</td></tr>
                <tr><td>BTC 对 TradFi 落后</td><td className="bull">BTC +3.38% 对 NQ +5.62% 7d = −2.24pt 落后 · |r| 0.205 IDIOSYNCRATIC</td><td>BTC 守住绿、把差距收了一点；regime 在 NORMAL 以下、所以盘面没在驱动 BTC —— 重清是 BTC 内生的</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是
              <span className="dn-signal">
                需求是否再加速 —— 一记在 D-EMA50 盖 $64,655 上决定性推、OI
                重建、重现货 bid 终于译成价格往 $67k–$68k 簇 —— 还是停滞解回
                下：被吃的现货 bid、走宽的 perp 折价、再热的 carry、和快帧翻转
                （新鲜 4h 死叉、1h 死叉 6b）在一根失败的测试上把现货拉回盖下
                （把加仓修回 starter）、或一根干净止损印（一根 1d 收破 $63,676
                flip / $63,533 地板、或一根 certified SM 滚回空 —— 砍整仓、如果
                gamma 也翻负、盯 chase-short re-arm 往 $60k −15.87M 崩盘 put、
                不过 +113.82M 正 strip 和 200W 地板留一条被阻尼的路）
              </span>
              。在那之一印出前、本篇按写好的跑：持着的 scout 按框架允许的 0.4R
              持 —— 重清守住盖第二根收、SM 翻平-到-多、200W 地板守第 6 根周收、
              但延伸在价格上达成、在质量上失败（OI 减速、carry 再热、一记重
              现货 bid 在盖上被吃、tape 走平）、所以本子持、不加。下一个 24h
              的对读是
              <em>按框架 size 持 scout、停滞里不新加、只在一记再加速上在
              D-EMA100 减半、第一根 certified 止损砍整仓 —— 重清停在盖上、
              它必须再加速才能按</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2（已过 codex 敌对式审计 · findings 记于 audits/2026-08-09-desk-note.md）
            </span>
            <b>状态：</b>已过 codex 敌对式审计（STAGE B、hostile-but-fair）。
            判决 PASS-WITH-NOTES —— 无 CRITICAL 发布闸；2 MAJOR + 2 MINOR 在
            promotion 前处理。STAGE C 把每条 finding 就地应用、再对全 EN 文件
            跑强制 grep-closure（关键错误主张 pattern → 修前命中 → 修后命中）；
            全部四条在 promotion 前都清到零残留。
            <b>DN-001</b>（MAJOR —— SM「谱系第一根非负」过宽 / 自我反驳）：搜
            <code>first NON-NEGATIVE SM net of the lineage</code> /
            <code>first non-negative read of the lineage</code> /
            <code>first non-negative of the lineage</code> /
            <code>marginally LONG for the first time … of the lineage</code>
            —— 修前 4、修后 0 —— RESOLVED。每处主张收窄到<em>日锚</em>口径
            （SM 已在 08-08 盘中经 +626 / 假象峰 +1,235 / 干净高 +740 转非负；
            +155 是谱系第一根非负的 00:05Z 日锚）。
            <b>DN-002</b>（MAJOR —— 200W trap-watch 重算时间戳虚假）：搜
            <code>recomputed 2026-08-08 23:11Z</code> / <code>23:11Z</code> /
            <code>hours-stale is fine</code> —— 修前 2、修后 0 —— RESOLVED。
            数据来源现披露 JSON 自己的 <code>recomputed_at 2026-08-03
            00:11:39Z</code>（6 天旧的周状态；文件 mtime 2026-08-09 00:11Z 是
            一次 touch、不是重算、且该 JSON 不在 pin 的快照里）；正形成的第 6
            根地板上方周收归因于 PARQUET 重算（最末 bar 00:05Z）、不是一次新的
            trap-watch run。
            <b>DN-003</b>（MINOR —— 宏观 delta 口径混用）：搜
            <code>flat (wknd)</code> / <code>(unchanged)</code> /
            <code>the only movers</code> / <code>one Tier-1 mover</code> ——
            那 4 格水位-delta 单元（10Y / TIPS / USD-JPY / US-JP 利差）现带
            明确的双口径（水位对 08-08 <em>备忘</em>平；源面板 Δ +6.0bp /
            +2.0bp / −0.66 / +6.0bp 在自己的基上）、且每格表内 Δ 都前缀
            <code>平/08-08 备忘</code> 或 <code>源</code> —— 唯一残留的
            <code>(unchanged)</code> 是 14bp 利率筛缺口（一根合法的逐篇读、
            不是宏观水位 delta）—— RESOLVED。
            <b>DN-004</b>（MINOR —— 干净 re-sync 后 SM 高差约 5 BTC）：搜
            <code>+735 @ 08-08 08:16Z</code> —— 修前 1、修后 0 —— RESOLVED；
            改正到 <code>+740 @ 08-08 08:16Z</code>（live tape +739.9256 取整
            +740）。全部 4 条 finding RESOLVED（修后命中 = 0）、无 UNRESOLVED
            残留、所以 v1 → v2 促进。公式纪律按 runbook §2：funding 年化 ×
            1095（live +4.77% 自字段 0.004357/8h；24h 均值 +5.92%；0 / 1441
            负行）；live-tape <code>t</code> 读作 BJ-local（UTC+8）、所有 BJ
            时间戳在正文转 UTC；MA 矩阵带完整日 AND 周 × SMA AND EMA ladder
            （n ∈ 20, 50, 100, 150, 200）、偏移对 live 现货 $64,964.00 自
            parquet 最末 bar 2026-08-09 00:05Z（close $64,930.40）；GEX flip
            双参考（现货 +2.02% / Deribit idx +2.50%、都正）；SM 转变读可
            certify 的当前状态（+155）因 raw 同时钟 ΔNet +1,667 穿过复发的
            08-08 15:11/15:16 BJ feed 假象+re-sync；NTT / max-pain /
            strike-level IV / BTC-NQ 比率保持 framework-only（未载入）。快照
            pin 到存档 /opt/desk-note/snapshots/2026-08-09-0007/ 作滚动源。
            <b>Build note（INFO）：</b>本服务器跑 Node 18.19.1；Next 16.2.6 对
            Node &lt; 20.9.0 硬退出、所以完整 <code>next build</code> 被环境
            阻塞；<code>npx --no-install tsc --noEmit</code> 是 build proxy（exit 0）。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体
            情况个性化。数字反映单一原子快照（2026-08-09 00:05Z）、
            provenance 在数据来源条带中按节披露；宏观 Tier-1 面板渲染
            2026-08-08 22:16Z（比快照早约 1.8h）、是一根现金/利率市场休市的
            weekend carry、部分输入明确陈旧、暗或待定并已标注。水位、规模与
            条件是交易台流程的示例、不是长期推荐。过去的相关性、γ 与仓位
            模式不绑定未来盘面。衍生品有全损风险、加杠杆下损失可超过保证金。
            <em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                重清守住盖第二根收但停住了 —— SM 翻平-到-多、200W 地板守第 6
                根周收、但需求减速、carry 再热、一记重现货 bid 在盖上被吃。
                所以本子持框架 scout、停滞里不新加。只在一记再加速上在
                D-EMA100 减半、第一根 certified 止损砍。
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
            v2 · 2026-08-09 00:05Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            ma200w_trap_watch_state.json · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
