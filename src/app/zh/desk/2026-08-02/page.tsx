import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-08-02 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-08-02',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-08-02' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260802() {
  await requireViewer('/zh/desk/2026-08-02');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-08-02 · v2</span>
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
              <span className="dn-big">$62,900</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.06%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-08-02 00:07Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-08-02 00:07Z（snapshot pin、t == &ldquo;08-02 08:07&rdquo; BJ）</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · 锚钉在 00:07Z（BJ 08:07）文件 tail 以便复现 ·
                    24h 窗约定：头部 delta 用同钟前日基线 t == &ldquo;08-01 08:07&rdquo; BJ
                    （端点减 24h 前那行、回退 1,440 根分钟间隔 / 1,441 行含入）。4h / 1h 流向块用
                    前一行含入基线（08-02 04:07 / 07:07 BJ 到 08:07 pin）；本次序列跨子窗连续、故
                    复现同钟端点——无基线差。本窗 24h 内 NO CVD reset signature——端点 CVD delta
                    与其区间和对账（fut_cvd 2,213.7 → 1,065.5、24h Δ −1,148.2 与求和 taker-net
                    −1,148.2 相符；cb_cvd 5,239.4 → 17,569.2），故 CVD delta 是裸端点差——不需
                    Method A · funding / 流向行统计跨 1,441 行窗；premium 均值排除 null 行 ·{' '}
                    <b>数据质量标记：</b>SM net 序列在 08-01 14:36 BJ / 06:36Z 走了一根 −22,911 BTC
                    的单分钟台阶（60 秒里 +17,907 空加、−5,004 多减）、把 SM 从净多翻成净空——与前一篇
                    标记的 07-31 14:46 那根 +6,369 分钟同一根 ~BJ-14:00 feed re-sync 签名、故本次 SM 24h
                    delta 与那根&ldquo;roll-off&rdquo;读 DATA-IMPAIRED
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-08-02 08:01 BJ scan（00:01Z）</td>
                  <td className="dn-flag">
                    滚动 latest 文件 · 逐字存档于
                    /opt/desk-note/snapshots/2026-08-02-0007/ · 较快照锚约滞后 6 分钟 ·
                    含未收盘 K 线 · 扫描现货 $62,813
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-08-02 00:00Z 快照</td>
                  <td className="dn-flag">
                    约滞后 7 分钟 · Deribit idx $63,182 对 live $62,900 · IV 中位数 40.4% · 868
                    合约（08-01 是 870）· 头部 Total GEX +6.3M 对 by-expiry rollup
                    +20.25M（= gex_summary.json net_gex $20,245,577.06）—— 一道约 14M 不对账的
                    source-panel 缺口、按 DN-003 谱系披露、rollup 再次坐在头部之上（与 08-01 / 07-31 /
                    07-30 同一关系）；两块现在都净多 γ（头部从 08-01 的 −5.8M 翻回 +6.3M、rollup 从
                    +10.25M 到 +20.25M）—— 本子略 re-gamma 转正、0DTE 前端翻回正（2AUG +5.20M 对
                    08-01 的 1AUG −5.20M）、但现货下方一道重的负 γ 架仍在（$62k −11.27M、$60k −24.91M）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-08-02 00:00Z
                  </td>
                  <td className="dn-flag">滞后约 7 分钟 · 7d 1h bar · 22 资产 · 167 rows · 已存档</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-08-01 22:17Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.85h · 10Y 守 4.68%（上次 FRED move +1bp、第七个 session 站在递延的
                    4.55% 闸上/上方——回补多 rates 滤镜仍 FALSE、现距 13bp）、TIPS 平 2.41%、5Y5Y 平
                    2.30%、10Y 盈亏平衡 2.28%、HY OAS 2.84%（−3.0bp、收回）· MOVE 连续第二次渲染抓取
                    失败（不可用）· Tier-2 FX 本渲染拿到一根新印——DXY −0.21 到 99.80、USD/JPY −2.78
                    到 157.40（日元偏硬）；Fed 净流动性 $5.825T 带过（周度、无新印）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-08-02 00:06Z（未收盘 close $62,879.80）</td>
                  <td className="dn-flag">
                    锚滞后约 1 分钟 · 偏移按 live 现货 $62,900.00 重算 · 全
                    btcusdt_1m_*.parquet glob（361 根周 bar、2019–2026）—— 每根日线 AND 周线 MA
                    偏移都是负（现货在整条矩阵下方、与 08-01 同）· 上一根走完日线收 08-01 $62,792.30
                    （一根第二根走完日收在 $63,311 settled 地板下方）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W 支撑观察</td>
                  <td className="dn-v-cell">ma200w_trap_watch_state.json · 上次重算 2026-07-27 00:11Z（今日未再跑）+ 本次全 glob 重算</td>
                  <td className="dn-flag">
                    trap-watch state 文件仍带上一根走完周 2026-07-26 收 $65,375.10、
                    W-SMA200 $63,311.02、consecutive_above 4（自 2026-07-05 的连）。今日一次独立
                    全 glob 重算（361 根周 bar）复现同一走完周 W-SMA200 $63,311.02、并把 IN-PROGRESS
                    周（截止周日 2026-08-02）的 W-SMA200 放在 $63,530.17、未收盘周 close $62,879.80
                    坐在两者下方。今日就是那根关键周日、但快照落在它的 START（00:07Z）—— 周线 bar 还有
                    约 24h 才结算（周日 08-02 末 / 08-03 00:00Z）。故 DAILY 地板破位已充分确认（07-31
                    $62,859.90 与 08-01 $62,792.30 都收在 $63,311 下方、加上 08-02 未收盘 $62,879.80、
                    现货 −0.65%）、而 WEEKLY 破位 IN ITS FINAL DAY 但仍未结算——一根周日末的收盘会
                    结束那 4 周站上地板的连
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
                  <td className="dn-flag">相关主张明确为 framework only（btc_ntt_analysis.html 是 JS 渲染、不可抽取）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dn-meta">
            <div>
              <span className="dn-k">funding · 8h 年化</span>
              <span className="dn-v">+5.08%</span>
              <span className="dn-src">live · 裸 0.004641 字段 × 1095 · 完全离顶了——24h 最大也只 +6.44% ann（本窗无 Binance +10.95% 封顶钉、对 08-01 的 466/1442 封顶行）· 24h 均值 +4.16% ann（从 08-01 的 +7.77% 冷却）· 最小 +2.03% ann（0.001856 字段 @ 08-01 20:00 BJ / 12:00Z）· 0 / 1441 负行——第四个连续日为零：拥挤多的 carry 继续冷、但没随地板破位冲掉</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v">离顶 · +4.16% 均 · 0 负</span>
              <span className="dn-src">区间 +2.03% / +6.44% ann · 均值 +7.77% → +4.16% ann · 本窗无封顶占用（最大 +6.44% 在 +10.95% 封顶下方）· funding 继续冷但仍正、零负——多杠杆还在、水下、尚未冲掉</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bull">−0.82%（−901.7 BTC）</span>
              <span className="dn-src">live · 109,505.0 → 108,603.4 · 一根小 CONTRACTION（对 08-01 的 +2.67% 扩张）进一根平 −0.06% 的 24h 价格 · 24h 流向 spot-bid / futures-offered 分裂（spotCVD +12,329.8 对 futCVD −1,148.2 / taker −1,148.2 / big −144.2）—— 重的现货吸筹被期货分发吸收、价格钉在地板下方平盘</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bear">68.76 / 31.24</span>
              <span className="dn-src">live_db `mkt_long_pct` · 24h 高 69.18（08-01 13:18 BJ / 05:18Z）低 66.85（08-02 02:06 BJ / 08-01 18:06Z）—— 仍拥挤多、与 08-01 的 68.76 实质不变：散户多群没在第二个地板下方日里 de-crowd</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−15,511（净 SHORT——但在一根可疑分钟上）</span>
              <span className="dn-src">live · long 9,927.13 − short 25,438.28 = −15,511.15 · 盘面显示 SM 翻净空、BUT 整根翻转是一根 −22,911 单分钟台阶 @ 08-01 14:36 BJ / 06:36Z（60 秒里空 +17,907、多 −5,004——一根重现的 ~BJ-14:00 feed re-sync、与前一篇标记的 07-31 14:46 分钟同形）、故 DATA-IMPAIRED · 峰 +8,487 @ 08-01 14:11 BJ（翻转前）、谷 −15,729 @ 08-02 05:41 BJ、台阶后水位守 ~−15,000 约 17h</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 24h 前</span>
              <span className="dn-v bear">+8,299 → −15,511（−23,811、一根 2.9× 摆动）</span>
              <span className="dn-src">|Δnet|/prior_net = 23,810.5 / 8,299.4 = 287% · Δlong −5,413.7（多减）AND Δshort +18,396.8（空堆）—— 追空需要的 roll-off-to-short、BUT ~97% 的 Δshort 印在那根可疑的 14:36 单分钟里（17,906.9 / 18,396.8 = 97.3%——几乎全部）、故交易台 NOT 认证一次干净的 SM roll-off · 可靠的是：台阶后 17h SM 守净空 ~−15,000</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">40.4% / 29.13%</span>
              <span className="dn-src">GEX IV 中位数 · 跨 868 合约的链中位数（08-01 是 870）、不是可交易价差 · 30D close-to-close RV = logret.std × √365 × 100 于 30 根日收益（parquet 最末 bar 00:06Z）· 约 +11.3pt 链层富度 · 29-return alt 29.48%</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v">−0.02%（AT flip）</span>
              <span className="dn-src">flip $62,912（从 08-01 的 $63,127 下移 $215）· 对 live 现货 $62,900.00（−0.02%；62,900.00/62,912.07 − 1 = −0.019%）/ GEX 文件 Deribit idx $63,182（+0.43%；63,182/62,912.07 − 1 = +0.429%、文件印 +0.4%）—— 两参考跨 flip、现货实质坐在其上 · 头部 +6.3M / rollup +20.25M —— 从 08-01 的 −5.8M / +10.25M 略 RE-GAMMA 转正、但一道负 γ 架仍在现货下方（$62k −11.27M 进 $60k −24.91M）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                进关键周线收盘的最后一天、价格平盘坐在破掉的地板下方——而那根会给追空上膛的 tell
                在盘上印了、但在一根交易台无法认证的可疑单分钟里
              </span>。整条 08-01 谱系都押在&ldquo;周日 08-02 周线收盘&rdquo;。今日就是那根周日——
              但快照落在它的最起点（00:07Z）、故周线 bar 还有约 24h 才结算（周日 08-02 末 / 08-03
              00:00Z）。未收盘周 close{' '}
              <span className="dn-tag bear">$62,879.80</span> 坐在{' '}
              <span className="dn-tag bear">$63,311 settled 200W 地板下方 $431</span>、这一天还没跑完；
              一根周日末的收盘会结束那四周站上地板的连。现货报{' '}
              <span className="dn-tag">$62,900</span> live、{' '}
              <span className="dn-tag bear">−0.06%</span> 在 24h——{' '}
              <span className="dn-em">实质平盘、第二个整 session 停在地板下方</span>——一根第三根未收盘
              日收在 $63,311 下方、跟在两根走完的后面（07-31 $62,859.90、08-01 $62,792.30），且{' '}
              <span className="dn-em">每根日线 AND 周线 MA 偏移仍全负</span>。08-01 以来动了两件事、
              两件都切干净熊向 resolution。第一、buyer of record：{' '}
              <span className="dn-signal">
                SM 盘面从 08-01 那根接刀多 +8,299 翻成净空 −15,511——正是追空在等的那根 roll-off——
                但整根翻转是一根 −22,911 单分钟台阶、在 08-01 14:36 BJ
              </span>{' '}
              （60 秒里空 +17,907 加、多 −5,004 减），与前一篇标记的那根 +6,369 分钟同一根重现的
              ~BJ-14:00 feed re-sync。故 SM 24h delta DATA-IMPAIRED——水位已守 ~−15,000 约 17h、但
              交易台不会在一根可疑分钟上认证一次干净的 SM roll-off。第二、dealer 本子：{' '}
              <span className="dn-tag bull">略 re-gamma 转正</span>——头部{' '}
              <span className="dn-tag">−5.8M → +6.3M</span>、rollup{' '}
              <span className="dn-tag">+10.25M → +20.25M</span>——且{' '}
              <span className="dn-tag bull">0DTE 前端翻回正</span>（2AUG +5.20M、曾是 1AUG −5.20M），
              故昨天给 γ 腿上膛的那根近日负 GONE、即便现货下方的崩盘 put 架（$62k −11.27M 进 $60k
              −24.91M）仍在、还略重了些。再加：OI CONTRACTED{' '}
              <span className="dn-tag">−902 BTC（−0.82%）</span>、funding 继续冷但仍正、{' '}
              <span className="dn-tag">0 负</span>（第四个连续日——多 carry 水下、未冲）、散户仍拥挤{' '}
              <span className="dn-tag bear">68.76</span>、MTF 不变在{' '}
              <span className="dn-tag bear">1 多 / 9 空</span>、在&ldquo;卖反弹&rdquo;regime 里、低位
              带同一叠超卖-反转簇。本子保持 FLAT：追空的 SM tell data-impaired、它的前端 γ 放大器刚
              翻回正、且周线收盘还有一天才结算；scout 死着。这篇转在：周日周线收盘是否在 $63,311
              下方封上、带一次 CLEAN（非人工制品）SM roll-off 与一次 funding 冲——还是 SM 的（可疑）
              空与那道未散的现货 bid 标一个底、价格重夺 $62,912–$63,530 flip/地板带。
            </p>

            <p>
              BTC 报 <span className="dn-tag">$62,900</span> live、{' '}
              <span className="dn-tag bear">−0.06%</span> 在 24h（实质平盘）、在一条{' '}
              <span className="dn-tag">$63,150.00 / $62,324.57</span> 区间里（高 @ 08-01 16:59 BJ /
              08:59Z、低 @ 08-02 02:46 BJ / 08-01 18:46Z）、带一根{' '}
              <span className="dn-tag bull">+0.54%</span> 的抬进快照、跨 04:07 → 08:07 子窗（在一根从
              02:46 $62,325 低的 +0.92% 回弹之后）。{' '}
              <span className="dn-signal">地板破位在第二根走完日收上守住、且在周线测试的最后一天</span>：
              07-26 $65,375.10 → 07-27 $63,720.80 → 07-28 $63,903.60 → 07-29 $63,958.90 → 07-30
              $64,750.00 →{' '}
              <span className="dn-tag bear">07-31 $62,859.90</span> →{' '}
              <span className="dn-tag bear">08-01 $62,792.30</span>、未收盘 08-02 bar（parquet 最末
              bar 00:06Z）在 <span className="dn-tag bear">$62,879.80</span>——两根走完日收在 $63,311
              settled 地板下方、加一根第三根在跑。{' '}
              <span className="dn-em">
                MA 矩阵保持整根翻转：现货 $62,900 坐在全部十根日线偏移与所有十根周线偏移下方。最近
                头顶是那些破掉的支撑线、现在翻成阻力、一道紧的 $62.9k–$63.5k 盖子带：{' '}
                <span className="dn-tag bear">0-γ flip $62,912（−0.02%、现货 AT）</span>、{' '}
                <span className="dn-tag bear">settled 200W 地板 $63,311（−0.65%）</span>、{' '}
                <span className="dn-tag bear">D-SMA50 $63,364（−0.73%）</span>、与未收盘周{' '}
                <span className="dn-tag bear">W-SMA200 $63,530（−0.99%）</span>——然后是那对重夺-再丢
                的近线 D-EMA20 $63,927（−1.61%）/ D-SMA20 $64,427（−2.37%）、与 D-EMA50 盖子 $64,679
                （−2.75%；从 08-01 的 $64,757 下移 $78、下日把 EMA 拉低了）。
              </span>{' '}
              200W 周期地板本次可算且已确认：trap-watch state（上次重算 2026-07-27、今日未再跑）带走完
              周 2026-07-26 的 W-SMA200 $63,311.02、四根连续周收在其上方；今日一次全 glob 重算（361
              根周 bar）复现走完周 $63,311.02、并把未收盘周（截止周日 2026-08-02）的 W-SMA200 放在
              $63,530.17、未收盘周 close $62,879.80 在两者下方。故 $63,311 在 DAILY 收盘上破了（两根
              走完、一根在跑）、WEEKLY 破位现在 IN ITS FINAL DAY——到周日末才结算。scout 在 07-22
              上膛、07-24 转 DEFERRED、07-31 地板破时 STOPPED——recovery 读结束了、今日就是周线收盘
              要么封上要么否掉它的那一天。
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面 · SM 盘面翻净 SHORT −15,511 但整根翻转是一根可疑的 −22,911 单分钟（DATA-IMPAIRED、与 07-31 标记的同一根 ~BJ-14:00 feed re-sync）—— 交易台 down-weight 这根 SM roll-off · OI CONTRACTED −0.82% 进一根平价 · funding 离顶冷却、0 负第四日（多 carry 未冲）· 散户仍 68.76 · 24h 流向 spot-bid / futures-offered 分裂</span>
            </h2>

            <p>
              <span className="dn-signal">
                当天最响的单一盘面事件是一根数据人工制品、不是一笔交易——直读它就是本节全部的纪律
              </span>。SM net 序列显示一根 −22,911 BTC 单分钟台阶 @{' '}
              <span className="dn-tag bear">08-01 14:36 BJ / 06:36Z</span>（net +8,428 → −14,483：
              short_btc +17,907 与 long_btc −5,004 在 60 秒里）、把 SM 从净多翻成净空。一分钟里堆
              17,907 BTC 空不是一笔成交——它是那根重现的 ~BJ-14:00 feed re-sync / batch 对账、与前一篇
              标记的 07-31 14:46 那根 +6,369 分钟同形、现在连续第二天几乎在同一钟点印。{' '}
              <span className="dn-em">
                故 SM 24h delta（+8,299 → −15,511、一根 −23,811 摆动、|Δ|/prior_net = 287%）
                DATA-IMPAIRED：交易台 NOT 把它读成一次干净的 smart-money roll-off 到空。可靠的是台阶
                之后的水位——SM 已守净空 ~−15,000 约 17h（谷 −15,729 @ 08-02 05:41 BJ、快照 −15,511）、
                稳、不在堆。把当前净空态当成盘面的读、带一个星号；把 24h 转变当成不可用——一根靠一根
                可疑分钟的仓位 tell 不是你敢去追空的 tell。
              </span>
            </p>

            <p>
              仓位本子其余部分是清楚的、它读的是地板下方的整固、不是投降。{' '}
              <span className="dn-signal">
                OI 缩、价格走平——一次小的双侧去杠杆、正是 08-01 那根扩张进跌的反面
              </span>。现货在 24h <span className="dn-tag bear">−0.06%</span>（平）、OI{' '}
              <span className="dn-tag">−901.7 BTC（−0.82%）</span>——109,505.0 → 108,603.4、对 08-01
              的 +2,852 BTC 扩张一次不大的缩。24h 攻方盘 SPLIT：现货 CVD{' '}
              <span className="dn-tag bull">+12,329.8</span>（重的现货吸筹、cb_cvd 5,239.4 → 17,569.2、
              无 reset signature——端点 delta 与区间和对账）对期货 CVD{' '}
              <span className="dn-tag bear">−1,148.2</span>、taker-net{' '}
              <span className="dn-tag bear">−1,148.2</span> 与大单{' '}
              <span className="dn-tag bear">−144.2 BTC（490 笔）</span>——{' '}
              <span className="dn-em">现货买、期货卖、价格钉平</span>。perp 在快照对现货交易一道{' '}
              <span className="dn-tag bear">−$66.68 折价</span>（24h 均 −$61.80、区间 −$113.92 /
              −$6.12）—— 穿过地板下方两天的一道持续 perp 折价。1 分钟攻方 skew 快照{' '}
              <span className="dn-tag bear">−7.8</span>（24h 均 −1.18、区间 −53.3 / +38.7）。{' '}
              <span className="dn-em">
                OI 缩进一根平价、现货 bid、期货 offered、是低位一场低信念的对峙：现货买方一直吸、
                期货卖方一直分发、谁都没逼动水位。这就是一根地板破位在它等周线收盘那天的样子——无
                扩张、无冲、只一根平钉。
              </span>
            </p>

            <p>
              杠杆与拥挤读确认破位下方那本多重的本子仍完整、未冲。{' '}
              <span className="dn-signal">
                funding 从顶上继续冷但从没转负、散户仍拥挤多——第四个连续日、carry 水下、未冲
              </span>：live funding <span className="dn-tag">+5.08% ann</span>（裸 0.004641 字段 ×
              1095、离顶）、24h 均值{' '}
              <span className="dn-tag">+4.16% ann</span>（从 08-01 的 +7.77% 再冷）、最大{' '}
              <span className="dn-tag">+6.44% ann</span>（在 +10.95% Binance 封顶下方——本窗无封顶钉、
              对 08-01 的 466/1442 封顶行）、最小{' '}
              <span className="dn-tag">+2.03% ann（0.001856 字段 @ 08-01 20:00 BJ / 12:00Z）</span>、
              且 <span className="dn-tag">0 / 1441 负行</span>——第四个连续日为零。散户{' '}
              <span className="dn-tag bear">mkt_long_pct 68.76</span>（24h 高 69.18 @ 08-01 13:18
              BJ / 05:18Z、低 66.85 @ 08-02 02:06 BJ / 08-01 18:06Z）—— 与 08-01 实质不变、多群没在
              第二个地板下方日里 de-crowd。{' '}
              <span className="dn-em">读法与 08-01 相同、这正是重点：funding 即便价格两度收在地板下方
              也从没转负——多杠杆没冲、它只是冷了、留着。一大池水下多（散户 68.76、funding 仍正）在
              破位守住且有东西逼出冲时是级联燃料、但那根冲——唯一能告诉你破位是真投降的那本——四天
              下来仍缺席。</span>
            </p>

            <p>
              窗口流向是一根平的 24h、带一根小的 last-4h 抬进快照。24h：价格{' '}
              <span className="dn-tag bear">−0.06%</span>、OI{' '}
              <span className="dn-tag bear">−901.7 BTC</span>、现货 CVD{' '}
              <span className="dn-tag bull">Δ +12,329.8</span>、期货 CVD{' '}
              <span className="dn-tag bear">Δ −1,148.2</span>、大单{' '}
              <span className="dn-tag bear">−144.2 BTC / 490 笔</span>、taker-net{' '}
              <span className="dn-tag bear">−1,148.2</span>——{' '}
              <span className="dn-em">现货 bid / 期货 offered、价格平：一场现货吸筹对期货分发的对峙</span>。
              4h（进快照）：价格{' '}
              <span className="dn-tag bull">+0.54%</span>、OI{' '}
              <span className="dn-tag bull">+237.3 BTC</span>、现货 CVD{' '}
              <span className="dn-tag bull">Δ +1,794.2</span>、期货 CVD{' '}
              <span className="dn-tag bull">Δ +358.5</span>、大单{' '}
              <span className="dn-tag bull">+61.0 BTC / 93 笔</span>、taker-net{' '}
              <span className="dn-tag bull">+358.4</span>——一根需求形的抬跨 04:07 → 08:07 子窗（在一根
              从 02:46 $62,325 低的 +0.92% 回弹之后）、全读正、OI 扩。1h：价格{' '}
              <span className="dn-tag bull">+0.11%</span>、OI{' '}
              <span className="dn-tag bull">+125.4 BTC</span>、现货 CVD{' '}
              <span className="dn-tag bull">Δ +191.6</span>、期货 CVD{' '}
              <span className="dn-tag bull">Δ +321.4</span>、大单{' '}
              <span className="dn-tag bull">+167.3 BTC / 33 笔</span>、taker-net{' '}
              <span className="dn-tag bull">+321.3</span>——{' '}
              <em>一根小 bid 进快照、期货领这最后一小时的抬</em>。{' '}
              <span className="dn-em">
                基线约定：24h 块用同钟前日行（08-01 08:07 BJ、回退 1,440 根分钟间隔 / 1,441 行含入）；
                4h 与 1h 子窗块用前一行含入基线（08-02 04:07 / 07:07 BJ 到 08:07 pin）。本次序列跨这些
                窗连续、故复现同钟端点——无基线差、且 24h 窗内 NO CVD reset signature（端点 CVD delta
                与其区间和对账）、故 CVD delta 是裸端点差。
              </span>
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 不变在 1 多 / 9 空 / 0 中 · regime 仍 6/9 cycle-reversal（JT&lt;0）mean-reversion（&ldquo;卖反弹&rdquo;）· 一根新鲜 1h 水下金叉 2b（空-到-多试探）进同一叠底部簇——HTF 底背离（8h/1w）、⚡TD9 BUY 1d/1M · MA 矩阵整根翻转、未收盘周 close $62,879.80 在 $63,311 地板下方、进最后一天</span>
            </h2>

            <p>
              <span className="dn-signal">
                MTF 面板几乎是 08-01 的碳复印——深熊计、mean-reversion regime、低位同一叠超卖-反转簇
                在打
              </span>。00:01Z 扫描读{' '}
              <span className="dn-tag bear">1 多 / 9 空 / 0 中</span> 跨 10 个 TF（只 1M 多；15m /
              30m / 1h / 4h / 8h / 12h / 1d / 3d / 1w 全空）、与 08-01 不变。regime tag 守在{' '}
              <span className="dn-tag bear">6/9 cycle-reversal（JT&lt;0）—— mean-reversion / 偏反弹、
              慎追趋势</span>。快周期把熊叉走老了（4h 水下死叉 3b → 9b、8h 死 2b → 5b）、RSI 仍洗在
              38–44 段（1h RSI <span className="dn-tag bear">43.8</span>、4h 39.2、8h 38.7、15m 55.6
              ——一根快周期离低的反射）。唯一新鲜一 tick 是一根{' '}
              <span className="dn-tag bull">1h 水下金叉 2 bar 前</span>（一根早的空-到-多试探、DIF 仍
              水下）、对上 4h 盘中反弹。12h 与 1d 守住云（12h 云内 61.7k–63.7k、1d 云内 61.9k–68.2k
              ——现货在两者内）、1M 仍云上（↓47.4k）。{' '}
              <span className="dn-em">
                低位那道多的对冲是 08-01 同一叠、且持续：HTF 底背离簇（8h/1w）、1d 与 1M 上的 ⚡TD9
                BUY（超卖-反转提示）、1h 水下金叉 2b、3d 水下金叉 7b 与 1w 水下金叉 1b。故这又是一根
                深超卖、熊计的结构、带底部 tell 在打——&ldquo;卖反弹&rdquo;regime 钉在一叠超卖-反转
                上、正是一根带完整现货 bid 的地板破位产出的那种含糊读。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">62,813</td><td className="num bull">55.6</td><td className="bull">金叉（水下）14b</td><td className="bear">云下 ↑62.9k 32b</td><td>Sell 1</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>30m</td><td className="num">62,814</td><td className="num">49.6</td><td className="bull">金叉（水下）5b</td><td className="bear">云下 ↑63.0k 15b</td><td>Buy 1</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>1h</td><td className="num">62,825</td><td className="num">43.8</td><td className="bull">金叉（水下）2b</td><td className="bear">云下 ↑63.4k 35b</td><td>Sell 4</td><td>BEAR hid · BEAR reg · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">62,825</td><td className="num">39.2</td><td className="bear">死叉（水下）9b</td><td className="bear">云下 ↑64.2k 12b</td><td>Buy 3</td><td>BEAR reg · BULL reg</td></tr>
                <tr><td>8h</td><td className="num">62,814</td><td className="num">38.7</td><td className="bear">死叉（水下）5b</td><td className="bear">云下 ↑64.2k 6b</td><td>Buy 1</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>12h</td><td className="num">62,813</td><td className="num">40.2</td><td className="neut">死叉（水上）18b</td><td className="neut">云内 61.7k–63.7k 3b</td><td>Buy 5</td><td>BEAR hid · BULL hid</td></tr>
                <tr><td>1d</td><td className="num">62,814</td><td className="num">44.0</td><td className="neut">死叉（水上）6b</td><td className="neut">云内 61.9k–68.2k 13b</td><td>⚡ TD9 BUY</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>3d</td><td className="num">62,825</td><td className="num">42.5</td><td className="bull">金叉（水下）7b</td><td className="bear">云下 ↑75.6k 20b</td><td>Buy 3</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">62,825</td><td className="num">38.2</td><td className="bull">金叉（水下）1b</td><td className="bear">云下 ↑93.8k 26b</td><td>Buy 1</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">62,825</td><td className="num">43.2</td><td className="neut">—</td><td className="bull">云上 ↓47.4k 30b</td><td>⚡ TD9 BUY</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 08:01 BJ scan（00:01Z；滚动 latest 文件、逐字存档于
                    /opt/desk-note/snapshots/2026-08-02-0007/）。头部告警：{' '}
                    <em>⚡ TD9 BUY 1d/1M（超卖反转提示）</em>、{' '}
                    <em>top-div 5：15m/30m/1h/4h/1d · bottom-div 4：1h/4h/8h/1w</em>、{' '}
                    <em>HTF 底背离簇 8h/1w</em>、{' '}
                    <em>regime 6/9 cycle-reversal（JT&lt;0）—— mean-reversion</em>、近期方向{' '}
                    <em>15m–4h 空、8h–1d 空、3d–1M 空（1M lean 多）</em>、{' '}
                    <em>1h 水下金叉 2b（早、DIF 水下）</em>。扫描现货 $62,813、24h −0.07%、24h
                    H/L $63,127 / $62,229、qVol $3.44B（live-tape 锚在 00:07Z 读现货
                    $62,900.00——约 $87 差是 6 分钟 source 滞后加 现货-vs-OHLCV/perp basis）。收盘
                    为未收盘 K 线；每个值在各 TF 收盘前都按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵是与 08-01 同一根整根翻转的读：现货在整条阶梯下方。现货 $62,900 坐在全部十根日线
              偏移与所有十根周线偏移下方——近线是那些破掉的支撑簇、现在翻成头顶阻力、一道紧的
              $62.9k–$63.5k 带：{' '}
              <span className="dn-tag bear">0-γ flip $62,912（−0.02%、现货 AT）</span>、{' '}
              <span className="dn-tag bear">settled 200W 地板 $63,311（−0.65%）</span>、{' '}
              <span className="dn-tag bear">D-SMA50 $63,364（−0.73%）</span>、与未收盘周{' '}
              <span className="dn-tag bear">W-SMA200 $63,530（−0.99%）</span>——这道带现在压住每根反弹。
              之上：{' '}
              <span className="dn-tag bear">D-EMA20 $63,927（−1.61%）</span>、{' '}
              <span className="dn-tag bear">D-SMA20 $64,427（−2.37%）</span>、{' '}
              <span className="dn-tag bear">D-EMA50 盖子 $64,679（−2.75%）</span>（从 08-01 的 $64,757
              下移 $78、下日把 EMA 拉低了）、{' '}
              <span className="dn-tag bear">D-EMA100 $67,227（−6.44%）</span>、{' '}
              <span className="dn-tag bear">D-SMA100 $68,769（−8.53%）</span>、{' '}
              <span className="dn-tag bear">W-SMA20 $69,343（−9.29%）</span>、{' '}
              <span className="dn-tag bear">W-EMA20 $69,354（−9.31%）</span>、{' '}
              <span className="dn-tag bear">D-SMA150 $69,554（−9.57%）</span>、{' '}
              <span className="dn-tag bear">D-EMA150 $70,052（−10.21%）</span>、{' '}
              <span className="dn-tag bear">D-SMA200 $71,129（−11.57%）</span>、{' '}
              <span className="dn-tag bear">D-EMA200 $72,833（−13.64%）</span>、{' '}
              <span className="dn-tag bear">W-EMA150 $74,094（−15.11%；种子）</span>。更高更远、
              已弃用：W-SMA150 $76,619（−17.91%）、W-EMA50 $78,317（−19.69%）、W-EMA100 $79,044
              （−20.42%）、W-SMA50 $84,317（−25.40%）、W-SMA100 $88,555（−28.97%）；W-EMA200
              $68,605（−8.32%；种子）也印在现货上方。现货下方没有重夺的支撑剩下——下一根结构性位是
              那道负 γ 架（$62k dealer 墙、然后 $60k）。{' '}
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-08-02 00:06Z（未收盘 close $62,879.80）；偏移按 live
                现货 $62,900.00 重算。显示的 MA 水位按 $ 取整、偏移用精确序列值算。全 glob 重算
                （361 根周 bar）使每根周线 MA 可计算——W-SMA200 $63,530.17（未收盘周）/ $63,311.02
                （上一根走完周——settled 地板）；W-EMA150 $74,094 与 W-EMA200 $68,605 从可用历史 seed、
                印在现货上方（阻力）。日线收盘：07-26 $65,375.10、07-27 $63,720.80、07-28 $63,903.60、
                07-29 $63,958.90、07-30 $64,750.00、07-31 $62,859.90、08-01 $62,792.30（一根第二根走完
                收在地板下方）、08-02（未收盘）$62,879.80——两根结算日收在 $63,311 地板下方、加一根第三
                根在跑、进周线测试的最后一天。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子略 RE-GAMMA 转正——头部 +6.3M（曾 −5.8M）/ rollup +20.25M（曾 +10.25M）· 0DTE 前端 HEALED 转正（2AUG +5.20M、曾 1AUG −5.20M）—— 近日负放大器 GONE · 但现货下方负 γ 架 INTACT 且更重（$62k −11.27M 进 $60k −24.91M、下方 −50.5M 负墙）· flip $62,912（现货 AT、下移 $215）· $70k +12.24M 最重正墙、头顶</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子拆掉了昨天追空 setup 的一半：它略 re-gamma 转正、0DTE 前端 healed、故前端
                放大器没了——但现货下方那道结构性崩盘 put 架仍在、还略重了些
              </span>。头部 Total GEX / 1% move 是{' '}
              <span className="dn-tag bull">+6.3M</span>（08-01 是 −5.8M）、by-expiry rollup 在{' '}
              <span className="dn-tag bull">+20.25M</span>（= gex_summary.json net_gex
              $20,245,577.06、08-01 是 +10.25M）—— 一道约 14M 不对账的头部-vs-rollup 缺口、按 DN-003
              谱系披露、rollup 再次在头部 ABOVE。两块本快照现在都读净多 γ（阻尼）——本子 08-01 de-gamma
              到净平、现在翻回正。{' '}
              <span className="dn-em">故 dealer 在这里又轻轻阻尼一根 move、正是追空要的放大器的反面。</span>{' '}
              0-γ flip 移动{' '}
              <span className="dn-tag">$63,127 → $62,912（−$215）</span>、现货 $62,900 坐在{' '}
              <span className="dn-tag bear">flip 下方 −0.02%</span>（现货口径 62,900.00 / 62,912.07
              − 1 = −0.019%）；GEX 文件自己的&ldquo;dist to flip&rdquo;读{' '}
              <span className="dn-tag bull">+0.43% 对它的 Deribit-idx $63,182</span>（63,182 /
              62,912.07 − 1 = +0.429%、文件印 +0.4%）—— 两参考跨 flip（live 现货刚在下方、文件 idx
              在上方），故现货实质 ON flip。墙图现货正下方仍一道负 γ 架、正墙在头顶：{' '}
              <span className="dn-tag bear">$60k −24.91M</span>（最重墙、崩盘 put、比 08-01 的 −24.43M
              更重）、{' '}
              <span className="dn-tag bull">$70k +12.24M</span>（最重正、头顶）、{' '}
              <span className="dn-tag bear">$62k −11.27M</span>（现货正下方、比 08-01 的 −10.76M 更重）、{' '}
              <span className="dn-tag bull">$72k +8.89M</span>、{' '}
              <span className="dn-tag bear">$58k −8.13M</span>、{' '}
              <span className="dn-tag bull">$67k +8.12M</span>、{' '}
              <span className="dn-tag bull">$68k +7.77M</span>、{' '}
              <span className="dn-tag bull">$66k +7.67M</span>、{' '}
              <span className="dn-tag bull">$80k +7.27M</span>、{' '}
              <span className="dn-tag bear">$55k −6.22M</span>。{' '}
              <span className="dn-em">
                现货 BELOW 的负簇合计约 −50.5M（$62k −11.27M + $60k −24.91M + $58k −8.13M + $55k
                −6.22M）—— 一道真放大架、比 08-01 的 −49.2M 略重：现货在 flip、一根破 $62k 墙就加速
                进 $60k −24.91M 崩盘 put、那里 dealer 对冲卖进跌里。现货上方正墙（$66k–$72k、$80k）压
                一根反弹。故下方那道结构性陷门 INTACT、即便 FRONT 放大器 healed——正是那根让追空
                primed 但未上膛的两面读。
              </span>{' '}
              按到期近日负 HEALED：{' '}
              <span className="dn-tag bull">2AUG26 0.3DTE +5.20M</span>（0DTE 前端翻回正、08-01 带
              1AUG −5.20M）、3AUG 1.3 +0.58M、4AUG 2.3 −1.10M、5AUG 3.3 −0.07M、{' '}
              <span className="dn-tag bull">7AUG 5.3 +3.52M</span>、14AUG 12.3 −3.71M、21AUG 19.3
              +2.70M、<span className="dn-tag bull">28AUG 26.3 +11.05M</span>（最重正块）、25SEP
              54.3 −0.47M、30OCT 89.3 +0.06M、25DEC 145.3 +1.28M、26MAR27 236.3 +0.59M、25JUN27
              327.3 +0.60M——strip 合计{' '}
              <span className="dn-tag bull">+20.25M</span>（net_gex $20,245,577.06；+$0.02M 对手算
              是逐到期 $ 取整）。0.3–3.3DTE 前端簇（2AUG +5.20M + 3AUG +0.58M + 4AUG −1.10M + 5AUG
              −0.07M）净{' '}
              <span className="dn-tag bull">+4.61M</span>——昨天追空所倚的那根放大负 γ 前端 GONE、
              只剩现货下方更深的 strike 架。
            </p>

            <p>
              期权链 IV 中位数是{' '}
              <span className="dn-tag">40.4%</span>（08-01 是 40.5%）对 30D close-to-close RV 的{' '}
              <span className="dn-tag">29.13%</span>——链层富度{' '}
              <span className="dn-tag">约 +11.3pt</span>。一根跨 N 合约的链中位数（今天 868、从 870 降），{' '}
              <span className="dn-em">不是</span>可交易价差；到期-/strike-层 vega、skew 与期限结构仍
              未载入；vol 读保持 framework-only。RV 方法：30D close-to-close、logret.std × √365 × 100
              于最后 30 根日 log 收益（= 31 根连续日收）锚自 parquet 最末 bar 2026-08-02 00:06Z；
              29-return alt 读 29.48%。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · 10Y 守 4.68%（回补多 rates 滤镜仍 FALSE、距 13bp、随 recovery 读死而 MOOT）· HY OAS 2.84%（−3.0bp、收回）、TIPS/5Y5Y 平 · MOVE 连续第二次渲染抓取失败 · Tier-2 FX 拿到新印——DXY −0.21 到 99.80、USD/JPY −2.78 到 157.40（日元偏硬）· rates 是承重的 tightening、FX/信用/流动性 loose-到-neutral、地板破位是 BTC-内部</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观盘在承重的 rates 线上近静、在拿到新印的 FX 面板上放松——这里没有东西驱动 BTC 的
                地板破位
              </span>。面板渲染是 2026-08-01 22:17Z、快照前约 1.85h。US 10Y 名义{' '}
              <span className="dn-tag bear">4.68%（+1.0bp）</span>、regime z{' '}
              <span className="dn-tag bear">+2.34</span>、episodic z{' '}
              <span className="dn-tag">+1.40</span>——EXTREME RISK-OFF、第七个 session 站在 4.55%
              回补闸上/上方。10Y TIPS 实际{' '}
              <span className="dn-tag bear">2.41%（0.0bp）</span>、regime z{' '}
              <span className="dn-tag bear">+2.65</span>——EXTREME RISK-OFF、平。5Y5Y BE 通胀{' '}
              <span className="dn-tag">2.30%（0.0bp）</span>、10Y 盈亏平衡{' '}
              <span className="dn-tag">2.28%（+1.0bp）</span>——平。HY OAS{' '}
              <span className="dn-tag">2.84%（−3.0bp）</span>、regime z{' '}
              <span className="dn-tag">−0.25</span>——中性、收回。MOVE 债 vol{' '}
              <span className="dn-tag stale">不可用（连续第二次渲染抓取失败）</span>。Tier-2 FX 面板
              拿到一根新印并放松：DXY{' '}
              <span className="dn-tag bull">99.80（−0.21）</span>、regime z +0.76；USD/JPY{' '}
              <span className="dn-tag bull">157.40（−2.78、日元偏硬）</span>；Fed 净流动性{' '}
              <span className="dn-tag bear">$5.825T（−0.092T、周度、带过）</span>、episodic z −1.09。
              US-JP 10Y 利差 <span className="dn-tag">2.01%（+1.0bp）</span>。NFCI{' '}
              <span className="dn-tag bull">−0.554</span>、RISK-ON（周度）。USD/CNY 松。{' '}
              <span className="dn-em">
                净读：回补多 rates 滤镜（10Y &lt; 4.55%）在 4.68% 仍 FALSE（距 firing 13bp）——但它
                本篇 MOOT：滤镜喂的那套 recovery 读死了、scout 在地板收盘上 stop 出、故 rates 腿今天
                不承任何东西。信用中性-平、通胀补偿平、FX 面板放松（美元偏软、日元偏硬）、MOVE 暗。
                宏观盘里没有东西驱动 BTC 的地板破位——那是一根 BTC-内部的分发 / 整固、不是宏观-risk-off
                事件；相关读（下面）确认 BTC 也没在任一方向领跑宏观复合体。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>宏观指标</th>
                  <th>水位</th>
                  <th>Δ（上次 FRED move）</th>
                  <th>regime z</th>
                  <th>episodic z</th>
                  <th>读</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>US 10Y 名义</td><td className="num">4.68%</td><td className="num bear">+1.0bp</td><td className="num bear">+2.34</td><td className="num">+1.40</td><td className="bear">EXTREME RISK-OFF · 守</td></tr>
                <tr><td>10Y TIPS 实际</td><td className="num">2.41%</td><td className="num">0.0bp</td><td className="num bear">+2.65</td><td className="num">+1.24</td><td className="bear">EXTREME RISK-OFF · 平</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.30%</td><td className="num">0.0bp</td><td className="num">+1.13</td><td className="num">+2.18</td><td className="neut">episodic · 平</td></tr>
                <tr><td>10Y 盈亏平衡</td><td className="num">2.28%</td><td className="num bear">+1.0bp</td><td className="num">−0.64</td><td className="num">+1.63</td><td className="neut">无 tag · 平</td></tr>
                <tr><td>HY OAS</td><td className="num">2.84%</td><td className="num bull">−3.0bp</td><td className="num">−0.25</td><td className="num">+1.72</td><td className="neut">中性 · 收回</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.554</td><td className="num">−0.01</td><td className="num bull">−1.56</td><td className="num bull">−1.53</td><td className="bull">RISK-ON · 周度</td></tr>
                <tr><td>MOVE 债 vol</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">不可用 · 抓取失败（第二次渲染）</td></tr>
                <tr><td>DXY</td><td className="num">99.80</td><td className="num bull">−0.21</td><td className="num bear">+0.76</td><td className="num bull">−3.01</td><td className="bull">偏软 · 新印</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.825T</td><td className="num bear">−0.092T</td><td className="num">−1.09</td><td className="num bull">−2.47</td><td className="stale">周度 · 带过、无新印</td></tr>
                <tr><td>USD/JPY</td><td className="num">157.40</td><td className="num bull">−2.78</td><td className="num">+0.30</td><td className="num bull">−3.93</td><td className="bull">日元偏硬 · 新印</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">2.01%</td><td className="num bear">+1.0bp</td><td className="num">−0.32</td><td className="num">+1.40</td><td className="neut">中性</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7448</td><td className="num bull">—</td><td className="num bull">−1.48</td><td className="num bull">−2.49</td><td className="bull">无 tag · 松</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp（月度）</td><td className="num stale">+2.42</td><td className="num stale">+1.09</td><td className="stale">月度 · 不倚</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、summary 00:00Z——{' '}
              <span className="dn-em">一根 7 日滚动读、不是今天</span>）。off-diagonal 均值{' '}
              <span className="dn-tag">|r| 0.317</span>——NORMAL 带、与 08-01 不变、仍一起动。BTC
              头号联系是{' '}
              <span className="dn-tag">NQ +0.569</span>、然后 SP500{' '}
              <span className="dn-tag">+0.553</span>、SILVER{' '}
              <span className="dn-tag">+0.476</span>、TSLA{' '}
              <span className="dn-tag">+0.458</span>、JP225{' '}
              <span className="dn-tag">+0.455</span>、PALL{' '}
              <span className="dn-tag">+0.432</span>、GOLD{' '}
              <span className="dn-tag">+0.429</span>、URNM{' '}
              <span className="dn-tag">+0.396</span>、PLAT{' '}
              <span className="dn-tag">+0.394</span>、NVDA{' '}
              <span className="dn-tag">+0.387</span>、COPPER{' '}
              <span className="dn-tag">+0.376</span>。7d 表现把 BTC 放在一根分裂盘的 mid-pack：{' '}
              <span className="dn-tag bear">BTC −2.62%</span> 大致与 JP225{' '}
              <span className="dn-tag bear">−2.73%</span> 打平、落后指数（NQ{' '}
              <span className="dn-tag bear">−0.63%</span>、SP500{' '}
              <span className="dn-tag bull">+0.33%</span>）、远落后绿的软件 megacap（MSFT{' '}
              <span className="dn-tag bull">+19.94%</span>、AMZN{' '}
              <span className="dn-tag bull">+15.81%</span>、GOOGL{' '}
              <span className="dn-tag bull">+9.79%</span>）、但领先红的 AI-megacap 板块（NVDA{' '}
              <span className="dn-tag bear">−4.36%</span>、META{' '}
              <span className="dn-tag bear">−7.79%</span>、AAPL{' '}
              <span className="dn-tag bear">−7.85%</span>）与 gas（NGAS{' '}
              <span className="dn-tag bear">−4.60%</span>）。金属偏硬：GOLD{' '}
              <span className="dn-tag bear">−0.09%</span>、SILVER{' '}
              <span className="dn-tag bear">−1.01%</span>、PLAT{' '}
              <span className="dn-tag bull">+3.39%</span>、PALL{' '}
              <span className="dn-tag bull">+3.56%</span>、COPPER{' '}
              <span className="dn-tag bull">+2.70%</span>；URNM{' '}
              <span className="dn-tag bear">−2.19%</span>；TSLA −1.40%；CL −0.03%、BRENT +0.46%；EUR
              +1.37%、JPY（日元）偏硬。{' '}
              <span className="dn-em">
                相关 regime 是 NORMAL（0.317）、BTC 与一根两色风险盘 WITH 动——7d 上略负、大致与
                JP225 打平、落后指数与绿的软件领头、领先红的 AI-megacap / gas 板块。故 BTC 既非 RS
                领头也非最差——它是分裂复合体里的 mid-pack、地板破位是一根 BTC-内部事件、不是宏观
                驱动的 risk-off。按 DN-001 谱系这是一根 NORMAL、杂色跨资产读——无 rotation 判断。
              </span>{' '}
              JGB 月度 2.67% 带月度 tag——不倚。
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · 回补反弹 scout STOPPED / 死（recovery 读 07-31 证伪、只在一次完整地板+盖子重夺上 re-arm）· 追空 PRIMED 但 STOOD DOWN——地板破位腿守住（2 根日收 + 未收盘在 $63,311 下方、周线在最后一天）但它的 SM-仓位 tell DATA-IMPAIRED（净空翻转是一根可疑分钟）、且它的 FRONT γ 放大器 HEALED 转正（0DTE 2AUG +5.20M）· 本子 FLAT</span>
            </h2>

            <p>
              <span className="dn-signal">
                谱系在姿态上不变、在阻挡上更锐——交易台进周线收盘的最后一天 FLAT、两个 setup 都无法
                在今日盘面上上膛
              </span>。07-31 备忘在地板收盘上 stop 了 scout、并在三条腿里两条上给追空 primed；08-01
              守住那个。今天追空那两条支撑腿都 WEAKENED——它需要的 SM roll-off 印了但作为一根数据人工
              制品、且前端 γ 放大器 healed 回正——而地板破位腿守住、周线测试现在在最后一天。故本子保持
              FLAT：无 scout（它的 recovery 读死了）、无追空入场（SM tell 不可认证、前端放大器没了）、
              无新对冲——等周日周线收盘与一次干净的 SM 确认。
            </p>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout · STOPPED / 死 · recovery 读 07-31 证伪——只在一次对地板 AND 盖子的完整重夺上 re-arm</span>
              <div className="dn-trade-name">
                回补反弹 scout —— STOPPED 且死：它递延所对的 D-EMA50 盖子在 07-31 印上被拒、价格收在
                $63,311 地板下方（它自己的止损）、证伪 recovery 读；它从没上膛、不在旧条件上 re-arm
              </div>
              <div className="dn-thesis">
                scout 递延了八个 session 等一根 D-EMA50 日收在盖子上方、带 SM re-cross 与需求主导 OI
                在手。那从没来；相反 07-31 K 线盘中冲到盖子上方、反转收 $62,859.90、在 $63,311 settled
                地板下方——scout 明确的止损。它 fired。两根走完日收现在在地板下方（07-31 $62,859.90、
                08-01 $62,792.30）、加一根第三根在跑。scout 从没进仓、故没什么可 stop out——但它建立所
                依据的读（地板上方消化、等一根盖子重夺）被证伪、且死着。现在 re-arm 要求价格先在一根
                日收上重夺 $62,912–$63,530 flip/地板带 AND 然后在需求主导流向上收在 D-EMA50 盖子上方——
                一根从地板下方的完整 recovery、不是旧递延的延续。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v bear">STOPPED / 死 · 从没上膛、从没进仓 · recovery 读结束（07-31 证伪、08-01 与 08-02 守住）</span></div>
                <div><span className="dn-lvl-k">re-arm（新条件）</span><span className="dn-lvl-v bull">一根日收重回 $62,912–$63,530 flip/地板带 AND 然后在需求主导流向、带一次 CLEAN SM 读、收在 D-EMA50 盖子 $64,679 上方——一根从地板下方的完整 recovery、不是旧递延</span></div>
                <div><span className="dn-lvl-k">不要</span><span className="dn-lvl-v">这里不做 scout 多——不要在一根破掉的地板下方、进一根未结算周线收盘里买反弹；交易台等一根收盘上的重夺、不是一次盘中试探</span></div>
              </div>
              <div className="dn-gating">
                <b>纪律：</b>scout 的 edge 是一次已确认的重夺、不是对一次重夺的预测——它等了八个
                session 一根盖子收盘、得到的是一次盖子被拒加一次地板破位、正是&ldquo;等收盘&rdquo;的
                正确结果。1h 水下金叉 2b 与 +0.54% 的 04:07 → 08:07 抬是盘中试探、不是一次对地板的
                重夺；scout 只在一次对 flip/地板带然后盖子的完整日线重夺、在需求主导流向上 re-arm。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">空 · 追 · PRIMED 但 STOOD DOWN · 地板破位腿守住但 SM tell DATA-IMPAIRED、FRONT γ 放大器 HEALED 转正</span>
              <div className="dn-trade-name">
                追空 —— 地板破位腿守住（两根日收 + 未收盘在 $63,311 下方、周线在最后一天）但今天把它
                firm 起来的两条腿没了：它需要的 SM roll-off 是一根可疑分钟（DATA-IMPAIRED）、0DTE 前端
                γ healed 转正——空 stand down
              </div>
              <div className="dn-thesis">
                追空的 edge 是一次地板破位、下方放大负 γ、AND smart money 已 roll off 到空。地板破位腿
                守住且强化了（一根第二根走完日收在 $63,311 下方、周线测试在最后一天）。但另两条都弱了。
                SM-仓位 tell APPEAR to fire——盘面从净多 +8,299 翻成净空 −15,511——但整根翻转是一根
                −22,911 单分钟台阶 @ 08-01 14:36 BJ（60 秒里空 +17,907）、与 07-31 标记的同一根重现
                ~BJ-14:00 feed re-sync、故交易台无法在一根可疑分钟上认证一次干净的 roll-off。且 γ
                放大器部分 healed：本子 re-gamma 转正（头部 −5.8M → +6.3M、rollup +10.25M → +20.25M）、
                0DTE 前端翻回正（2AUG +5.20M、曾 1AUG −5.20M）——空所倚的前端负没了、尽管更深的 $62k/$60k
                strike 架（−50.5M）仍在。故空有一次已确认日线破位、但无可认证 SM tell、无前端放大器——
                它 stand down、等周线收盘封上 AND 一次干净（非人工制品）SM 确认。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">re-arm 腿（1 守、1 受损、1 healed）</span><span className="dn-lvl-v bear">地板收破（守住/更强——07-31 $62,859.90 + 08-01 $62,792.30 + 08-02 未收盘 $62,879.80 全 &lt; $63,311；WEEKLY 在最后一天、约 24h 后结算）· SM 定位空（DATA-IMPAIRED——盘面显示净空 −15,511 但翻转是一根可疑分钟）· 放大负 γ（WEAKENED——前端 0DTE healed +5.20M、头部 re-gamma +6.3M；只剩更深的 $62k/$60k 架）</span></div>
                <div><span className="dn-lvl-k">什么会给这根空上膛</span><span className="dn-lvl-v bear">一根周日 08-02 周线收在 $63,311 下方（封破位）AND 一次不靠单根 feed-resync 分钟的 CLEAN SM 净空读 AND funding carry 最终冲负——缺的 tell 是一次结算周线破位与一次可认证的 SM roll-off</span></div>
                <div><span className="dn-lvl-k">若上膛的结构图</span><span className="dn-lvl-v bear">现货在 flip $62,912 → 破 $62k −11.27M 墙 → 加速进 $60k −24.91M 崩盘 put；未冲的多 carry（funding +4.16% 均、0 负、散户 68.76）是级联燃料</span></div>
                <div><span className="dn-lvl-k">不要</span><span className="dn-lvl-v">不要在一根靠可疑分钟的仓位 tell 上、进一本刚 re-gamma 转正的本子、在周线收盘未结算时追空——等收盘封上与一次干净 SM 确认</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R（框架、非 live）：</b>一次干净 SM roll-off + 一次结算周线破位上的 live 入场会在约
                $62,900 做空、对着 flip/地板带上方约 $63,530 的止损（约 $630 风险）、朝 $60k 崩盘 put 架
                （约 $2,900 回报）≈ 4.6:1 —— 一根有吸引力的放大器 setup IF tell 对齐。今天不对齐。{' '}
                <b>纪律：</b>追空只在 SM 与你一起、可验证地在一次封上的破位里做空、且 γ 放大时才付；
                今天 SM 读是一根数据人工制品、前端放大器 healed、周线未结算——三个 stand down 的理由。
                让周日收盘结算、SM feed 印一次干净读之后再上膛。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 地板下方整固进周线收盘——破位守了第二根日收、但现货 bid 吸、多 carry 未冲：一根低信念的钉、不是一根级联</span>
              <div className="dn-trade-name">
                地板下方整固进周线收盘 —— resolution 是一根 $63,311 下方的平钉、带一道重的现货 bid 吸
                期货分发、一根未冲的多 carry、等周日收盘封上或否掉破位
              </div>
              <div className="dn-thesis">
                两个 session 在破掉的地板下方、盘面既没级联也没重夺——它钉平了。价格在 24h −0.06%、OI
                缩 −0.82%、24h 流向 spot-bid（+12,330 CVD）/ futures-offered（−1,148）分裂、funding
                继续冷但仍正、0 负第四日、散户守 68.76。唯一那根响的 SM 事件是一根 feed 人工制品。故读
                是整固、不是 resolution：一道重的现货 bid 一直在 flip 吸期货分发、水下多 carry 没冲、
                周线收盘——整条谱系指向的最后一张骨牌——在今天末结算。若收盘在 $63,311 下方封上、带一次
                干净 SM roll-off 与 funding 最终冲、那些未冲的多（散户 68.76、SM 净空若真、封顶-funding
                carry 冷却）是进 $62k/$60k 负 γ 架的级联燃料（追空上膛）。若现货 bid 标一个底、价格重夺
                $62,912–$63,530 flip/地板带、scout 在一根完整 recovery 上 re-arm。tie-breaker 正坐在
                settled 地板上：这篇转在周日周线收盘、与 SM feed 是否印一次干净读。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">熊向 resolution（破位封上）</span><span className="dn-lvl-v bear">一根周日 08-02 周线收在 $63,311 下方、带一次 CLEAN SM 净空读与一次 funding 冲 → 未冲的多 carry 级联进 $62k −11.27M / $60k −24.91M 负 γ 架；追空上膛</span></div>
                <div><span className="dn-lvl-k">多向 resolution（底守住）</span><span className="dn-lvl-v bull">现货 bid 标一个底、价格在一根日收上重夺 $62,912–$63,530 flip/地板带 → scout 在一根重回地板然后盖子、需求主导流向的完整 recovery 上 re-arm</span></div>
                <div><span className="dn-lvl-k">决定性 tell</span><span className="dn-lvl-v">周日 08-02 周线收 vs $63,311、SM feed 是否印一次干净（非人工制品）读、以及 funding carry 最终冲负（投降）还是守正（未解）——不是盘中 tick</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>edge 是拒绝把一根平钉的任一侧过读——破位守了第二根日收但现货 bid 吸、
                carry 没冲、故这是地板下方整固、不是一根已确认级联或一个已确认底。谱系不会在一根数据
                人工制品 SM 翻转上、进一本 re-gamma 的本子、在一根未结算周线收盘里追空、也不会在破掉
                的地板下方 scout 多一次盘中反弹。它保持 flat、读三个 tell：周线收盘、SM feed 的干净读、
                与 funding 冲。哪个先 resolve 写下一篇。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 地板破位守了第二根日收、周线测试在 FINAL DAY（约 24h 后结算）· 追空的地板破位腿守住但它的 SM tell DATA-IMPAIRED、它的前端 γ 放大器 HEALED 转正 · scout 死着 · 本子 FLAT</span>
            </h2>

            <p>
              08-01 决策条件里：{' '}
              <em>scout 的 settled-地板止损</em> 保持 FIRED（07-31 $62,859.90 与 08-01 $62,792.30 都
              收在 $63,311 下方、加 08-02 未收盘 $62,879.80）——recovery 读死了、且死着；{' '}
              <em>追空地板收破腿</em> HELD 且强化（一根第二根走完日收在地板下方、周线现在在最后一天）；{' '}
              <em>追空 SM-仓位腿</em> 从 INVERTED（SM 多）翻到一根盘面读的净空——但在一根可疑的 feed-resync
              单分钟上、故 DATA-IMPAIRED、不是干净 MET；<em>追空负 γ 腿</em> WEAKENED——本子 re-gamma
              转正（头部 +6.3M、rollup +20.25M）、0DTE 前端 healed 转正（2AUG +5.20M）、只剩更深的
              $62k/$60k strike 架；且 <em>回补多 rates 滤镜</em> 保持 FALSE 且 moot（10Y 4.68%）。{' '}
              <em>破位守了第二根日收进周线测试的最后一天、但 08-01 把追空 firm 起来的两条腿——SM
              roll-off 与前端负 γ——今天是一根数据人工制品与一本 healed-转正的本子、故空在地板破位单腿
              上 primed 且 stand down。</em>{' '}
              今天条件围绕一根守住的日线地板（周线在最后一天）、一根 data-impaired SM 净空读、一本
              re-gamma 且现货下方仍带更深负架的 dealer 本子、一根拥挤的散户、与一根未冲的多 carry 重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>Weekly 200W 收盘（最后一张骨牌）</td><td className="bear">IN ITS FINAL DAY —— 未收盘周 close $62,879.80 &lt; $63,311 settled 地板 / $63,530 未收盘 W-SMA200；周日末结算（约 24h 后）、守住则结束那 4 周站上地板的连</td><td>本篇关键读——一根结算收在下方封上周线破位；等它、不要预先布仓</td></tr>
                <tr><td>Scout settled-地板止损</td><td className="bear">保持 FIRED —— 07-31 $62,859.90 + 08-01 $62,792.30 + 08-02 未收盘 $62,879.80 全 &lt; $63,311</td><td>scout STOPPED / 死——recovery 读结束、本子对多 stand down</td></tr>
                <tr><td>追空地板收破（腿）</td><td className="bear">HELD / 更强 —— 两根走完日收在 $63,311 下方、周线在最后一天</td><td>腿日线守住；空仍等周日周线收盘封破位</td></tr>
                <tr><td>追空 SM 仓位（腿）</td><td className="stale">DATA-IMPAIRED —— 盘面显示净空 −15,511 但翻转是一根 −22,911 可疑分钟（08-01 14:36 BJ feed re-sync）；水位守 ~−15,000 约 17h</td><td>不在一根不可认证 SM tell 上追空；等一根稳定 feed 的干净（非人工制品）净空读</td></tr>
                <tr><td>追空放大负 γ（腿）</td><td className="bull">WEAKENED —— 本子 re-gamma 到 +6.3M 头部 / +20.25M rollup、0DTE 前端 healed +5.20M；只剩更深的 $62k −11.27M / $60k −24.91M 架</td><td>前端放大器没了；现货下方结构性架仍在、但不是空要的那根 firing 放大器</td></tr>
                <tr><td>回补反弹 scout re-arm（新条件）</td><td className="bull">一根日收重回 $62,912–$63,530 flip/地板带 AND 然后在需求主导流向、带一次干净 SM 读、收在 D-EMA50 盖子 $64,679 上方</td><td>scout 只在一根从地板下方的完整 recovery 上 re-arm——不是旧递延</td></tr>
                <tr><td>回补多 rates 滤镜</td><td className="bear">FALSE 且 moot —— 10Y 4.68% &gt; 4.55%（距 13bp）；它喂的 recovery 读死了</td><td>独立滤镜 false；本篇不承任何东西</td></tr>
              </tbody>
            </table>

            <p>
              重写<em>这</em>篇的一行是{' '}
              <span className="dn-signal">
                周日 08-02 周线收盘是否在 $63,311 下方封上、带一次 CLEAN smart-money roll-off 与一次
                funding 冲——那把追空上膛进 $62k/$60k 负 γ 架、以未冲的多 carry 作燃料——还是那道重的
                现货 bid 标一个底、价格重夺 $62,912–$63,530 flip/地板带、在一根完整 recovery 上重开
                scout；中间的一切是交易台现在读的那根地板下方整固
              </span>。今天是整条谱系指向的周线测试的最后一天、但快照落在它的起点、故收盘还有约 24h
              才结算。破位守了第二根日收、但 08-01 把追空 firm 起来的两条腿都滑了：它需要的 SM roll-off
              作为一根数据人工制品印了（一根可疑 ~BJ-14:00 分钟）、前端 γ 放大器 healed 回正、故空在
              地板破位单腿上 primed、被一根不可认证的仓位 tell 挡住。同时 scout 死着、put-spread 不在
              一根 moot 的 rates 腿上重长、OI 缩、funding 继续冷但没冲（0 负、第四日）、散户守 68.76、
              MTF 是 08-01 的近复印——1/9、带 mean-reversion regime 与低位一叠底部簇。BTC 在一根 NORMAL、
              分裂的跨资产盘里保持 mid-pack——一根 BTC-内部整固、不是宏观事件。接下来 24–48h 的对读是{' '}
              <em>耐心——读周日周线收盘、等 SM feed 印一次干净读、看 funding 冲；不要在一根数据人工制品
              翻转上追空、也不要在破掉的地板下方买反弹</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计追踪 · v2（已过 codex 敌对式审计）
            </span>
            <b>状态：</b>v2 中文备忘 —— <b>已过 codex 敌对式审计</b>。本稿在 STAGE A 直接从原子快照
            （2026-08-02 00:07Z、live tape t == &ldquo;08-02 08:07&rdquo; BJ）与存档于
            /opt/desk-note/snapshots/2026-08-02-0007/ 的滚动源生成、随后过了 STAGE B codex
            hostile-but-fair 审计（记录于 audits/2026-08-02-desk-note.md）。裁定：PASS-WITH-NOTES ——
            0 CRITICAL、3 MAJOR、3 MINOR、0 NIT。STAGE C 应用了每个 finding（CRITICAL + MAJOR + MINOR）、
            并在 v1 → v2 promotion 前跑了强制 grep-closure loop（关键错误主张 pattern + 语义变体跨全
            文件搜索、修到零陈旧命中）。逐 finding grep-closure：{' '}
            <b>DN-001</b>（MAJOR —— 可疑分钟占 24h Δshort 的份额被低说成 ~78%）—— 搜 &ldquo;78%&rdquo;；
            before 1、after 0 —— 改为 ~97%（17,906.9 / 18,396.8 = 97.3%、几乎全部 Δshort）—— RESOLVED。{' '}
            <b>DN-002</b>（MAJOR —— CVD 连续性过度主张：cb_cvd 非单调、存在 &gt; |100| 的单分钟台阶）——
            搜 &ldquo;monotone&rdquo; / &ldquo;单调&rdquo; / &ldquo;no single step&rdquo;；before 4、
            after 0 —— 改述为 &ldquo;no reset signature —— 端点 CVD delta 与区间和对账&rdquo;（fut_cvd
            24h Δ −1,148.2 = 求和 taker-net −1,148.2）—— RESOLVED。{' '}
            <b>DN-003</b>（MAJOR —— 陈旧/手填宏观值对 22:17Z 源）—— 搜 HY OAS &ldquo;flat&rdquo; /
            &ldquo;0.0bp&rdquo;、DXY-ep &ldquo;−2.78&rdquo;、USD/JPY-ep、&ldquo;6.7438&rdquo; /
            &ldquo;−1.49&rdquo; / &ldquo;−2.69&rdquo;；before 8、after 0 —— HY OAS delta → −3.0bp/收回、
            DXY episodic z → −3.01、USD/JPY episodic z → −3.93、USD/CNY → 6.7448 / regime z −1.48 /
            episodic z −2.49；余下的 &ldquo;0.0bp&rdquo;（TIPS、5Y5Y）与 &ldquo;−2.78&rdquo;（USD/JPY
            水位 delta）是源确认正确、非残留 —— RESOLVED。{' '}
            <b>DN-004</b>（MINOR —— +0.54% 4h 收益被误归给 02:46 低）—— 搜 &ldquo;bounce off&rdquo; /
            &ldquo;off the $62,325&rdquo;；before 3、after 0 —— 重述为 +0.54% 跨 04:07 → 08:07 子窗、
            在一根从 02:46 $62,325 低的 +0.92% 回弹之后 —— RESOLVED。{' '}
            <b>DN-005</b>（MINOR —— &ldquo;美元与日元都偏软&rdquo;与日元偏硬矛盾）—— 搜
            &ldquo;both softer&rdquo; / &ldquo;都偏软&rdquo;；before 1、after 0 —— 改为 &ldquo;美元偏软、
            日元偏硬&rdquo; —— RESOLVED。{' '}
            <b>DN-006</b>（MINOR —— &ldquo;回退 1,441 行&rdquo;分母 off-by-one）—— 搜 &ldquo;1,441 行&rdquo;
            / &ldquo;1,441 rows back&rdquo;；before 2、after 0 —— 设为 &ldquo;回退 1,440 根分钟间隔 /
            1,441 行含入&rdquo;（行统计的 &ldquo;1,441 行窗&rdquo;跨度是正确的含入计数、保留）—— RESOLVED。
            六个 finding 全 RESOLVED（每个 pattern 的 hits-after = 0）。codex 确认干净且未改：requireViewer
            gating（path /desk/2026-08-02、default export 首句）；JSX/markup 完整；live-tape 头部算术；
            MA/RV 块；GEX 块；MTF 块；跨资产块；claims-vs-loaded-data 闸；前瞻交易判断 scope；谱系连续。
            完整 <em>next build</em> 在本机仍未验（Node 18.19.1 &lt; Next.js 20.9.0 gate）；tsc --noEmit
            是 build proxy、通过。<b>已过 codex 敌对式审计</b> —— 参 audits/2026-08-02-desk-note.md。
            EN/ZH 数值零漂移。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部 principal 之间讨论准备的交易台工件、{' '}
            <em>非投资建议、非要约、非邀约</em>、也未针对任何接收方的具体情况个性化。数字反映单一
            原子快照（2026-08-02 00:07Z）、section 级 provenance 在上方 manifest 带披露；宏观 Tier-1
            面板渲染是 2026-08-01 22:17Z（快照前约 1.85h）、带 MOVE 不可用与 Fed 净流动性行周度带过、
            部分输入明确陈旧、不可用或待定并已如此标注——包括 SM net 序列、其 24h delta 被一根
            manifest 里披露的单分钟 feed re-sync data-impaired。水位、size 与条件是对交易台流程的示意、
            非 standing 建议。过去的相关、γ 与仓位模式不约束未来盘。衍生品带全额损失风险、在杠杆处损失
            可超已缴保证金。<em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                进周线收盘的最后一天、价格平盘坐在破掉的地板下方。空需要的 SM roll-off 印了——但在
                一根可疑分钟上、且前端 γ 放大器 healed 转正。读周日收盘、等一次干净 SM 读与 funding 冲。
                平、耐心。
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
            v2 · 2026-08-02 00:07Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            ma200w_trap_watch_state.json · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
