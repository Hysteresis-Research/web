import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-08-01 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-08-01',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-08-01' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260801() {
  await requireViewer('/zh/desk/2026-08-01');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-08-01 · v2</span>
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
              <span className="dn-big">$62,961</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−2.89%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-08-01 00:09Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-08-01 00:09Z（snapshot pin、t == &ldquo;08-01 08:09&rdquo; BJ）</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · 锚钉在 00:09Z（BJ 08:09）文件 tail 以便复现 ·
                    24h 窗约定：头部 delta 用同钟前日基线 t == &ldquo;07-31 08:08&rdquo; BJ
                    （端点减 24h 前那行、回退 1,441 行）。4h / 1h 流向块用前一行含入基线
                    （08-01 04:08 / 07:08 BJ 到 08:09 pin）；本次序列跨子窗连续、故复现同钟
                    端点——无基线差。本窗 24h 内 NO CVD reset（cb_cvd 4,630.8 → 5,367.9、
                    fut_cvd 375.2 → 2,230.9 都单调连续）、故 CVD delta 是裸端点差——不需 Method A ·
                    funding / 流向行统计跨 1,442 行窗（1,441 根分钟间隔 + 开盘行）；premium 均值
                    排除 null 行
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-08-01 08:01 BJ scan（00:01Z）</td>
                  <td className="dn-flag">
                    滚动 latest 文件 · 逐字存档于
                    /opt/desk-note/snapshots/2026-08-01-0008/ · 较快照锚约滞后 8 分钟 ·
                    含未收盘 K 线 · 扫描现货 $62,864
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-08-01 00:00Z 快照</td>
                  <td className="dn-flag">
                    约滞后 9 分钟 · Deribit idx $63,243 对 live $62,961 · IV 中位数 40.5% · 870
                    合约（07-31 是 936）· 头部 Total GEX −5.8M 对 by-expiry rollup
                    +10.25M（= gex_summary.json net_gex $10,250,368.85）—— 一道约 16M 不对账的
                    source-panel 缺口、按 DN-003 谱系披露、rollup 再次坐在头部之上（与 07-31 /
                    07-30 同一关系）、by-expiry strip 合计 +10.26M；两块跨零（头部略净空 γ、
                    rollup 略净多 γ）—— 一本 de-gamma、几乎平、正好压在 flip 上的本子
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-08-01 00:00Z
                  </td>
                  <td className="dn-flag">滞后约 9 分钟 · 7d 1h bar · 22 资产 · 167 rows · 已存档</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-31 22:15Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.9h · 周五 FRED 日度再印：10Y +1bp 到 4.68%
                    （第六个 session 站在递延的 4.55% 闸上/上方——回补多 rates 滤镜仍 FALSE、
                    现距 13bp）、TIPS 平 2.41%、5Y5Y 平 2.30%、10Y 盈亏平衡 +1bp 到 2.28%、
                    HY OAS −3bp 到 2.84%（收回）· MOVE 抓取失败（本渲染不可用）· Tier-2 FX /
                    流动性行从 07-31 原样带过（无新的周六印）、按陈旧标注
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-08-01 00:05Z（未收盘 close $62,916.70）</td>
                  <td className="dn-flag">
                    锚滞后约 4 分钟 · 偏移按 live 现货 $62,960.96 重算 · 全
                    btcusdt_1m_*.parquet glob（361 根周 bar、2019–2026）—— W-SMA200 可计算、
                    $63,530（未收盘周）/ $63,311（上一根走完周）· 本快照每根日线 AND 周线 MA
                    偏移都是负（现货在整条矩阵下方）· 上一根走完日线收 07-31 $62,859.90
                    （一根 −$1,890.10 / −2.92% 下日、在 $63,311 settled 地板下方）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W 支撑观察</td>
                  <td className="dn-v-cell">ma200w_trap_watch_state.json · 上次重算 2026-07-27 00:11Z（今日未再跑）+ 本次全 glob 重算</td>
                  <td className="dn-flag">
                    trap-watch state 文件仍带上一根走完周 2026-07-26 收 $65,375.10、
                    W-SMA200 $63,311.02、consecutive_above 4（自 2026-07-05 的连）。今日一次独立
                    全 glob 重算（361 根周 bar）复现同一走完周 W-SMA200 $63,311.02、并显示未收盘周
                    （截止 2026-08-02）W-SMA200 $63,530.36、未收盘周 close $62,916.70 坐在两者
                    下方。故 DAILY 地板破位已确认（07-31 收 $62,859.90 与 08-01 未收盘 $62,916.70
                    都在 $63,311 下方、现货 −0.55%）、而 WEEKLY 破位 IN PROGRESS 但未确认——周日
                    08-02 一根周线收在这里会结束那 4 周站上地板的连
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
              <span className="dn-v">+4.64%</span>
              <span className="dn-src">live · 裸 0.004235 字段 × 1095 · 从封顶下来了（24h 前那行还钉在 +10.95% 封顶）· 24h 均值 +7.77% ann（从 07-31 的 +9.16% 冷却）· 最大 +10.95% ann（封顶、在 07-31 00:08Z 窗开）· 最小 +1.77% ann（0.001612 字段 @ 07-31 20:18 BJ / 12:18Z）· 0 / 1442 负行（第三个连续日为零）—— 拥挤多的 carry 冷了、但没随地板破位冲掉</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">离顶 · +10.95% → +4.64% · 0 负</span>
              <span className="dn-src">区间 +1.77% / +10.95% ann · 均值 +9.16% → +7.77% ann · 封顶占用 466 / 1442 行（约 32%）· 价格跌 funding 从封顶冷却但仍正、零负——多杠杆还在、水下、尚未冲掉</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">+2.67%（+2,852.3 BTC）</span>
              <span className="dn-src">live · 106,641.1 → 109,493.4 · 一根扩张进 −2.89% 价格 DROP、四个流向读全正（spotCVD +737.1 / futCVD +1,855.7 / taker +1,855.7 / big +700.2）—— 主动买被更重被动供给 ABSORB、且 SM 本子缩（long +3,094 / short −4,702 = −1,608 净 OI）故 OI 增长来自 SM 本子 OUTSIDE（散户接刀）：分发进拥挤多、不是需求主导</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bear">68.76 / 31.24</span>
              <span className="dn-src">live_db `mkt_long_pct` · 24h 高 69.97（08-01 01:51 BJ / 07-31 17:51Z）低 55.59（07-31 09:03 BJ / 01:03Z）—— 进 DROP 里 RE-拥挤多且很狠（从 07-31 的 55.72 上来）、散户在价格跌穿地板时买了这把刀</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bull">+8,299（净 LONG、接刀）</span>
              <span className="dn-src">live · long 15,340.81 − short 7,041.44 = +8,299.36 · buyer of record 接了这把刀——进 DROP 里狠堆净多、空 −4,702 覆盖、多 +3,094 再加 · 谷 −74.84 @ 07-31 12:11 BJ（04:11Z）、随后一根 +6,369.0 BTC 的分钟 @ 07-31 14:46 BJ（06:46Z、+35.58 → +6,404.59——窗内最大单分钟 Δnet、大概率 feed re-sync 但在盘录里）、峰 +9,240 @ 08-01 03:16 BJ（07-31 19:16Z）、进快照缓到 +8,299</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 24h 前</span>
              <span className="dn-v bull">+503 → +8,299（+7,796、15.5× 摆动）</span>
              <span className="dn-src">|Δnet|/prior_net = 7,795.9 / 503.4 = 1,549%（一根 15.5× 摆动、离近平的 +503 基）· Δlong +3,094.0（多再加）AND Δshort −4,701.9（空覆盖）—— 一根净多 BUILD 进这场跌、NOT 追空需要的 roll-off-to-short：SM 站在地板破位的 AGAINST 侧、不是 for 侧</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">40.5% / 29.67%</span>
              <span className="dn-src">GEX IV 中位数 · 跨 870 合约的链中位数（07-31 是 936）、不是可交易价差 · 30D close-to-close RV = logret.std × √365 × 100 于 30 根日收益（parquet 最末 bar 00:05Z）· 约 +10.8pt 链层富度 · 29-return alt 29.64%</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bear">−0.26%（在下方）</span>
              <span className="dn-src">flip $63,127 · 对 live 现货 $62,960.96（−0.26%；62,960.96/63,126.74 − 1 = −0.263%）/ GEX 文件 Deribit idx $63,243（+0.18%；63,243/63,126.74 − 1 = +0.184%、文件印 +0.2%）—— 两参考跨 flip：现货刚在 BELOW、idx 刚在 ABOVE、tile 取现货侧 · 头部 aggregate −5.8M / rollup +10.25M —— 从 07-31 的 +143.4M / +151.05M DE-GAMMA 得很狠到几乎平、正阻尼 GONE、现货正下方一道负 γ 架（$62k −10.76M、$60k −24.43M）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                盖子在这根印上被拒、价格穿过地板——而 smart money 接了这把刀。07-31 备忘
                在盖子重夺上偏了淡多；盘面走了熊路、且走得更远、收在周期地板下方
              </span>。07-31 备忘把一切都押在 $64,911 D-EMA50 盖子收盘上、并把熊路说得明白：
              盖子处那根薄拒守住、价格再设一个 lower high、一根新鲜 SM roll-off 重开 $63,311
              地板。今天这根拒不止守住——07-31 K 线冲到{' '}
              <span className="dn-tag">$65,364 盘中</span>（在盖子上方、但从没在收盘上），随后
              整根反转收在{' '}
              <span className="dn-tag bear">$62,859.90（−$1,890.10 / −2.92%）</span>、一根下日{' '}
              <span className="dn-em">在 $63,311 settled 200W 地板下方</span>。那是 scout 的止损条件
              （日收 &lt; $63,311）——它 FIRED。递延了八个 session 等一根盖子收盘的回补反弹
              scout 从没上膛、现在 stood down：它建立所依据的那套 recovery 读被证伪。现货报{' '}
              <span className="dn-tag">$62,961</span> live、{' '}
              <span className="dn-tag bear">−2.89%</span> 在 24h、一根第二根未收盘 close
              （$62,916.70）在地板下方、且{' '}
              <span className="dn-em">现在每根日线 AND 周线 MA 偏移都是负</span>——现货坐在整条
              矩阵下方。但熊向 resolution 并不干净、这才是整篇的重点：{' '}
              <span className="dn-signal">
                buyer of record 做了 roll-off 的反面——它进这场跌里堆了净多 +8,299
              </span>{' '}
              （从 +503、一根 15.5× 摆动、空 −4,702 覆盖、多 +3,094 再加），散户 RE-拥挤多到{' '}
              <span className="dn-tag bear">68.76</span>（从 55.72），OI 扩张{' '}
              <span className="dn-tag bear">+2,852 BTC（+2.67%）</span>、四个流向读全正、funding
              从封顶冷却但仍正、{' '}
              <span className="dn-tag">0 负</span>——多 carry 水下但未冲。这是分发进拥挤多、
              在一根破掉的地板下方：主动买被更重被动供给吸收、散户接刀。同时 dealer 本子
              DE-GAMMA 从 <span className="dn-tag bull">+143.4M / +151.05M</span> 到{' '}
              <span className="dn-tag bear">−5.8M 头部 / +10.25M rollup</span>——几乎平、正阻尼
              没了——现货正下方一道负 γ 架（$62k −10.76M、$60k −24.43M）、0DTE 前端翻回负
              （1AUG −5.20M、曾是 +67.37M）。故追空的 γ 与地板破位腿现在 MET、但它的 SM 仓位腿
              INVERTED（SM 多、不是空）、且 WEEKLY 地板破位未确认（周日 08-02 一根收在这里结束
              那 4 周连）。本子保持 FLAT：recovery 读死了、但交易台不会在 buyer of record 一根
              新鲜接刀 + 一根未确认周线破位里去追空。这篇转在：SM 是对的、价格重夺
              $63,127–$63,530 flip/地板带、还是破位守住、多重的本子级联进下方那道负 γ 陷门。
            </p>

            <p>
              BTC 报 <span className="dn-tag">$62,961</span> live、{' '}
              <span className="dn-tag bear">−2.89%</span> 在 24h、在一条{' '}
              <span className="dn-tag">$65,364.00 / $62,491.01</span> 区间里（高 @ 07-31 09:11 BJ /
              01:11Z 窗前段、低 @ 07-31 23:27 BJ / 15:27Z）。{' '}
              <span className="dn-signal">盖子在上方被测、被拒、随后价格收穿地板</span>：07-25
              $64,338.10 → 07-26 $65,375.10 → 07-27 $63,720.80 → 07-28 $63,903.60 → 07-29
              $63,958.90 → 07-30 $64,750.00 →{' '}
              <span className="dn-tag bear">07-31 $62,859.90（−$1,890.10）</span>、未收盘 08-01 bar
              （parquet 最末 bar 00:05Z）在{' '}
              <span className="dn-tag bear">$62,916.70</span>——一根 −$1,890 下日、一天里抹掉三根
              session 的上行、收在 $63,311 settled 地板下方、随后一根第二根（未收盘）close 比
              07-31 收高 $57 但仍在地板下 $394。{' '}
              <span className="dn-em">
                MA 矩阵整根翻回：07-30 反弹重夺的每根线又丢了。现货 $62,961 坐在全部十根日线偏移
                与所有周线偏移下方——最近头顶是那些破掉的支撑线、现在翻成阻力：{' '}
                <span className="dn-tag bear">settled 200W 地板 $63,311（−0.55%）</span>、{' '}
                <span className="dn-tag bear">D-SMA50 $63,398（−0.69%）</span>、0-γ flip $63,127、
                与未收盘周 W-SMA200 $63,530——一道紧的 $63.1k–$63.5k 带压住现货——然后是那对
                重夺-再丢的近线 D-EMA20 $64,049（−1.70%）/ D-SMA20 $64,405（−2.24%）、与 D-EMA50
                盖子 $64,757（−2.77%；从 07-31 的 $64,911 下移 $153、下日把 EMA 拉低了）。
              </span>{' '}
              200W 周期地板本次可算且已确认：trap-watch state（上次重算 2026-07-27、今日未再跑）
              带走完周 2026-07-26 的 W-SMA200 $63,311.02、四根连续周收在其上方；今日一次全 glob
              重算（361 根周 bar）复现走完周 $63,311.02、并把未收盘周（截止 2026-08-02）的
              W-SMA200 放在 $63,530.36、未收盘周 close $62,916.70 在两者下方。故 $63,311 在
              DAILY 收盘上破了（两根在跑）但 WEEKLY 破位到周日才确认。scout 在 07-22 上膛、07-24
              转 DEFERRED、递延穿过整场 recovery、今日 STOPPED——recovery 读结束了。
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面 · smart money 接了刀——进跌里堆净 LONG +8,299（从 +503、一根 15.5× 摆动）、空 −4,702 覆盖、多 +3,094 再加 · OI 扩张 +2.67% 进 −2.89% 跌、全流向读正——分发进拥挤多 · 散户 RE-拥挤到 68.76 · funding 从封顶冷却（+7.77% 均）但仍正、0 负——多 carry 水下未冲</span>
            </h2>

            <p>
              <span className="dn-signal">
                仓位本子与价格指相反方向——smart money、散户与 OI 全在一根 −2.89% 跌里堆多、
                被更重被动供给吸收
              </span>。现货在 24h 跌 −2.89%、OI{' '}
              <span className="dn-tag bear">扩张 +2,852.3 BTC（+2.67%）</span>——
              106,641.1 → 109,493.4。攻方盘每个读都在买——现货 CVD{' '}
              <span className="dn-tag bull">+737.1</span>、期货 CVD{' '}
              <span className="dn-tag bull">+1,855.7</span>、taker-net{' '}
              <span className="dn-tag bull">+1,855.7</span>、大单{' '}
              <span className="dn-tag bull">+700.2 BTC（1,017 笔）</span>——价格却跌、正是主动买被
              一个更大被动卖方吸收的签名。{' '}
              <span className="dn-em">SM 本子自身缩了（long +3,094、short −4,702 = −1,608 净 OI），
              故那 +2,852 OI 增长来自 SM 本子 OUTSIDE——散户/散拥多加是把 OI 撑进跌里的东西。</span>{' '}
              perp 在快照对现货交易{' '}
              <span className="dn-tag bear">−$56.03 折价</span>（24h 均 −$69.44、区间 −$236.17 /
              +$47.71）—— 穿过跌的一道持续 perp 折价。1 分钟攻方 skew 快照{' '}
              <span className="dn-tag bear">−11.3</span>（24h 均 −4.50、区间 −47.1 / +44.7）。{' '}
              <span className="dn-em">
                OI 扩进价格跌、SM 本子缩、散户加多——这是分发形：供给被分发进一本拥挤、杠杆的
                多、这本多买了刀。07-31 那根需求主导扩张翻了：同一根正 CVD 盘、相反的价格结果、
                因为被动供给压过了它。
              </span>
            </p>

            <p>
              smart money 是最显眼的一项、读法两面。{' '}
              <span className="dn-signal">
                buyer of record 接了刀——它进跌里堆净多 +8,299、正是追空需要的 roll-off-to-short
                的反面
              </span>。SM net 是 <span className="dn-tag bull">+8,299</span>（long 15,340.81 −
              short 7,041.44 = +8,299.36）对 24h 前的{' '}
              <span className="dn-tag">+503</span>——一根{' '}
              <span className="dn-tag bull">Δnet +7,796（一根 15.5× 摆动）</span>（|+8,299.36 −
              503.44| / 503.44 = 1,549%、离近平基的一根摆动）。分解是一根双侧 build：{' '}
              <span className="dn-tag bull">Δshort −4,701.9</span>（空覆盖）AND{' '}
              <span className="dn-tag bull">Δlong +3,094.0</span>（多再加）。SM net 谷{' '}
              <span className="dn-tag">−74.84 @ 07-31 12:11 BJ / 04:11Z</span>（短暂近平），随后
              一根{' '}
              <span className="dn-tag bull">+6,369.0 BTC 的分钟 @ 07-31 14:46 BJ / 06:46Z</span>{' '}
              里狠抬一台阶（+35.58 → +6,404.59——窗内最大单分钟 Δnet；{' '}
              <span className="dn-em">一分钟里这么大一步、更可能是 feed re-sync / batch 对账、
              不是单笔真交易、但它在录下的盘里</span>），峰{' '}
              <span className="dn-tag bull">+9,240 @ 08-01 03:16 BJ / 07-31 19:16Z</span> 后缓到
              +8,299 进快照。{' '}
              <span className="dn-em">
                直读：这是一次接刀。SM 现在在一根破掉的地板下方重多——要么它对、标一个 bear-trap
                低、要么它是一把落刀、若破位守住就往清算级联里添燃料。不论哪个、它 NOT 追空所建
                的那根 SM-short：buyer of record 站在破位的对立面、故这根空没有仓位 tell 可倚。
              </span>
            </p>

            <p>
              杠杆与拥挤读确认这本破位下方的多重本子。{' '}
              <span className="dn-signal">
                funding 从封顶冷却但仍正、零负、而散户 RE-拥挤多——carry 水下、未冲
              </span>：live funding <span className="dn-tag">+4.64% ann</span>（裸 0.004235 字段 ×
              1095、离顶），24h 均值{' '}
              <span className="dn-tag">+7.77% ann</span>（从 07-31 的 +9.16% 冷却），最大{' '}
              <span className="dn-tag">+10.95% ann</span>（封顶、在 07-31 00:08Z 窗开），最小{' '}
              <span className="dn-tag">+1.77% ann（0.001612 字段 @ 07-31 20:18 BJ / 12:18Z）</span>、
              且 <span className="dn-tag">0 / 1442 负行</span>——第三个连续日零负、封顶占用 466 /
              1442 行（约 32%）。散户{' '}
              <span className="dn-tag bear">mkt_long_pct 68.76</span>（24h 高 69.97 @ 08-01 01:51
              BJ / 07-31 17:51Z、低 55.59 @ 07-31 09:03 BJ / 01:03Z）—— 从 07-31 的 55.72 狠
              RE-拥挤、散户多比进跌里在抬。{' '}
              <span className="dn-em">读法：funding 即便价格跌 −2.89% 穿过地板也从没转负——多杠杆
              没冲、它冷了、留着。那是熊风险（一大池水下多、散户拥挤到 68.76 且 SM 接刀、是级联
              的燃料若破位守住），但也是为什么破位还不是已确认的投降：冲还没发生。唯一能告诉你
              破位是真的那本——funding 冲负 + 多侧清算——缺席。</span>
            </p>

            <p>
              窗口流向在整个 24h 是正、但进快照在翻。24h：价格{' '}
              <span className="dn-tag bear">−2.89%</span>、OI{' '}
              <span className="dn-tag bear">+2,852.3 BTC</span>、现货 CVD{' '}
              <span className="dn-tag bull">Δ +737.1</span>、期货 CVD{' '}
              <span className="dn-tag bull">Δ +1,855.7</span>、大单{' '}
              <span className="dn-tag bull">+700.2 BTC / 1,017 笔</span>、taker-net{' '}
              <span className="dn-tag bull">+1,855.7</span>——{' '}
              <span className="dn-em">每个流向读进 −2.89% 跌都正：主动买被更重供给吸收、分发进
              散户</span>。4h（进快照）：价格 <span className="dn-tag">0.00%</span>、OI{' '}
              <span className="dn-tag bear">−530.6 BTC</span>、现货 CVD{' '}
              <span className="dn-tag bull">Δ +685.3</span>、期货 CVD{' '}
              <span className="dn-tag bear">Δ −84.4</span>、大单{' '}
              <span className="dn-tag bull">+54.7 BTC / 119 笔</span>、taker-net{' '}
              <span className="dn-tag bear">−84.4</span>——平价、OI 缩、现货买但期货卖：低位一段
              stall。1h：价格{' '}
              <span className="dn-tag bear">−0.05%</span>、OI{' '}
              <span className="dn-tag bear">−144.8 BTC</span>、现货 CVD{' '}
              <span className="dn-tag bear">Δ −255.5</span>、期货 CVD{' '}
              <span className="dn-tag bear">Δ −273.6</span>、大单{' '}
              <span className="dn-tag bear">−127.1 BTC / 31 笔</span>、taker-net{' '}
              <span className="dn-tag bear">−273.6</span>——{' '}
              <em>每个读进快照都在卖、OI 仍缩——接刀的买盘在低位累了</em>。{' '}
              <span className="dn-em">
                基线约定：24h 块用同钟前日行（07-31 08:08 BJ、回退 1,441 行）；4h 与 1h 子窗块
                用前一行含入基线（08-01 04:08 / 07:08 BJ 到 08:09 pin）。本次序列跨这些窗连续、
                故复现同钟端点——无基线差、且 24h 窗内 NO CVD reset（cb_cvd 与 fut_cvd 都单调
                连续）、故 CVD delta 是裸端点差。
              </span>
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 塌到 1 多 / 9 空 / 0 中（曾 4/4/2）、快周期翻回去 · regime 翻回 6/9 cycle-reversal（JT&lt;0）mean-reversion（&ldquo;卖反弹&rdquo;）、从 07-31 的 5/9 trend-continuation · 新鲜 4h &amp; 8h 水下死叉 · 除 12h/1d（云内）与 1M（云上）每根都在云下 · 低位一道多的对冲——HTF 底背离（8h/1w）、⚡TD9 BUY 30m/1d/1M、1w 水下金叉 1b</span>
            </h2>

            <p>
              <span className="dn-signal">
                帧计塌了、regime 翻回 mean-reversion——昨天读&ldquo;近期趋势向上&rdquo;那面板
                今天读&ldquo;卖反弹&rdquo;、但在低位带一叠超卖-反转 tell
              </span>。00:01Z 扫描读{' '}
              <span className="dn-tag bear">1 多 / 9 空 / 0 中</span> 跨 10 个 TF（只 1M 多；15m /
              30m / 1h / 4h / 8h / 12h / 1d / 3d / 1w 全空）、从 07-31 的 4 多 / 4 空 / 2 中一根
              急反转、快周期翻回去了。regime tag 从{' '}
              <span className="dn-tag">5/9 cycle-momentum（JT≥0）trend-continuation</span> 在 07-31
              翻到{' '}
              <span className="dn-tag bear">6/9 cycle-reversal（JT&lt;0）—— mean-reversion / 偏反弹、
              慎追趋势</span> 今天。快周期印新鲜熊叉：4h 一根{' '}
              <span className="dn-tag bear">水下死叉 3b</span>、8h 一根{' '}
              <span className="dn-tag bear">水下死叉 2b</span>（两根在 07-31 都是金叉）、15m/30m/1h/4h/8h
              全云下、RSI 洗到低-到-中 30 段（1h RSI <span className="dn-tag bear">32.5</span>、4h
              36.3、30m 37.7、15m 39.2、8h 38.5）。只 12h 与 1d 守住云（12h 云内 61.7k–63.7k、1d
              云内 61.9k–68.5k——现货在两者内）、1M 仍云上（↓47.4k）。{' '}
              <span className="dn-em">
                但低位那道多的对冲是真的、且成叠：HTF 底背离簇（8h/1w）、三根新鲜 ⚡TD9 BUY
                （30m / 1d / 1M 超卖-反转提示）、一根 1w 水下金叉 1 bar 前（RSI 40.1 段云下）与一根
                持续的 3d 水下金叉 7b。故这是一根深超卖、熊计的结构、带底部 tell 在打——
                &ldquo;卖反弹&rdquo;regime 钉在一叠超卖-反转上、正是接刀产出的那种含糊读。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">62,864</td><td className="num">39.2</td><td className="bull">金叉（水下）30b</td><td className="bear">云下 ↑63.0k 2b</td><td>Buy 2</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">62,864</td><td className="num">37.7</td><td className="bull">金叉（水下）13b</td><td className="bear">云下 ↑64.2k 34b</td><td>⚡ TD9 BUY</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">62,864</td><td className="num bear">32.5</td><td className="neut">死叉（水上）25b</td><td className="bear">云下 ↑64.2k 11b</td><td>Buy 4</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>4h</td><td className="num">62,864</td><td className="num">36.3</td><td className="bear">死叉（水下）3b</td><td className="bear">云下 ↑64.9k 6b</td><td>Buy 7</td><td>BEAR hid · BEAR reg · BULL reg</td></tr>
                <tr><td>8h</td><td className="num">62,864</td><td className="num">38.5</td><td className="bear">死叉（水下）2b</td><td className="bear">云下 ↑64.1k 3b</td><td>Buy 4</td><td>BULL reg</td></tr>
                <tr><td>12h</td><td className="num">62,864</td><td className="num">40.0</td><td className="neut">死叉（水上）16b</td><td className="neut">云内 61.7k–63.7k 1b</td><td>Buy 3</td><td>BULL hid</td></tr>
                <tr><td>1d</td><td className="num">62,864</td><td className="num">44.2</td><td className="neut">死叉（水上）5b</td><td className="neut">云内 61.9k–68.5k 12b</td><td>⚡ TD9 BUY</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>3d</td><td className="num">62,864</td><td className="num">42.6</td><td className="bull">金叉（水下）7b</td><td className="bear">云下 ↑75.6k 20b</td><td>Buy 3</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">62,864</td><td className="num">38.2</td><td className="bull">金叉（水下）1b</td><td className="bear">云下 ↑93.8k 26b</td><td>Buy 1</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">62,864</td><td className="num">43.2</td><td className="neut">—</td><td className="bull">云上 ↓47.4k 30b</td><td>⚡ TD9 BUY</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 08:01 BJ scan（00:01Z；滚动 latest 文件、逐字存档于
                    /opt/desk-note/snapshots/2026-08-01-0008/）。头部告警：{' '}
                    <em>⚡ TD9 BUY 30m/1d/1M（超卖反转提示）</em>、{' '}
                    <em>top-div 4：30m/1h/4h/1d · bottom-div 5：15m/30m/4h/8h/1w</em>、{' '}
                    <em>HTF 底背离簇 8h/1w</em>、{' '}
                    <em>regime 6/9 cycle-reversal（JT&lt;0）—— mean-reversion（从 07-31 的 5/9
                    cycle-momentum 翻回）</em>、近期方向{' '}
                    <em>15m–4h 空、8h–1d 空、3d–1M 空（1M lean 多）</em>、{' '}
                    <em>8h 水下死叉 2b · 1w 水下金叉 1b</em>。扫描现货 $62,864、24h −2.99%、24h
                    H/L $65,391 / $62,410、qVol $11.12B（live-tape 锚在 00:09Z 读现货
                    $62,960.96——约 $97 差是 8 分钟 source 滞后加 现货-vs-OHLCV/perp basis）。收盘
                    为未收盘 K 线；每个值在各 TF 收盘前都按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵是这场 recovery 最干净的熊读：现货在整条阶梯下方。现货 $62,961 坐在全部十根
              日线偏移与所有周线偏移下方——近线是那些破掉的支撑簇、现在翻成头顶阻力：{' '}
              <span className="dn-tag bear">settled 200W 地板 $63,311（−0.55%）</span>、{' '}
              <span className="dn-tag bear">D-SMA50 $63,398（−0.69%）</span>、与未收盘周 W-SMA200
              $63,530（−0.90%）、0-γ flip $63,127 穿在其间——一道紧的 $63.1k–$63.5k 带、现在压住
              每根反弹。之上：{' '}
              <span className="dn-tag bear">D-EMA20 $64,049（−1.70%）</span>、{' '}
              <span className="dn-tag bear">D-SMA20 $64,405（−2.24%）</span>、{' '}
              <span className="dn-tag bear">D-EMA50 盖子 $64,757（−2.77%）</span>（从 07-31 的
              $64,911 下移 $153、下日把 EMA 拉低了）、{' '}
              <span className="dn-tag bear">D-EMA100 $67,317（−6.47%）</span>、{' '}
              <span className="dn-tag bear">D-SMA100 $68,916（−8.64%）</span>、{' '}
              <span className="dn-tag bear">W-SMA20 $69,345（−9.21%）</span>、{' '}
              <span className="dn-tag bear">W-EMA20 $69,358（−9.22%）</span>、{' '}
              <span className="dn-tag bear">D-SMA150 $69,608（−9.55%）</span>、{' '}
              <span className="dn-tag bear">D-EMA150 $70,150（−10.25%）</span>、{' '}
              <span className="dn-tag bear">D-SMA200 $71,300（−11.70%）</span>、{' '}
              <span className="dn-tag bear">D-EMA200 $72,934（−13.67%）</span>、{' '}
              <span className="dn-tag bear">W-EMA150 $74,094（−15.03%；种子）</span>。更高更远、
              已弃用：W-SMA150 $76,620（−17.83%）、W-EMA50 $78,319（−19.61%）、W-EMA100 $79,045
              （−20.35%）、W-SMA50 $84,317（−25.33%）、W-SMA100 $88,555（−28.90%）；W-EMA200
              $68,606（−8.23%；种子）也印在现货上方。现货下方没有重夺的支撑剩下——下一根结构性
              位是那道负 γ 架（$62k dealer 墙、然后 $60k）。{' '}
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-08-01 00:05Z（未收盘 close $62,916.70）；偏移按 live
                现货 $62,960.96 重算。显示的 MA 水位按 $ 取整、偏移用精确序列值算。全 glob 重算
                （361 根周 bar）使 W-SMA200 可计算、$63,530.36（未收盘周）/ $63,311.02（上一根
                走完周——settled 地板）；W-EMA150 $74,094 与 W-EMA200 $68,606 从可用历史 seed、
                印在现货上方（阻力）。日线收盘：07-25 $64,338.10、07-26 $65,375.10、07-27
                $63,720.80、07-28 $63,903.60、07-29 $63,958.90、07-30 $64,750.00、07-31 $62,859.90
                （一根 −$1,890.10 下日、在地板下方）、08-01（未收盘）$62,916.70——谱系首根日收在
                $63,311 settled 地板下方、且一根第二根未收盘 close 仍在其下 $394。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子 DE-GAMMA 得很狠到 −5.8M 头部 / +10.25M rollup（07-31 是 +143.4M / +151.05M）—— 几乎平、正阻尼 GONE · flip $63,127（现货 −0.26% BELOW、idx +0.18% ABOVE——两参考跨它）· 现货正下方一道负 γ 架（$62k −10.76M、$60k −24.43M）· 0DTE 前端翻回 NEGATIVE（1AUG −5.20M、曾 +67.37M）· $70k +13.27M 最重正墙、头顶</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子从强正 de-gamma 到几乎平、近日负重现、现货压在 flip 上、正下方一道负 γ
                陷门——追空的 γ 燃料回来了
              </span>。头部 Total GEX / 1% move 是{' '}
              <span className="dn-tag bear">−5.8M</span>（07-31 是 +143.4M），by-expiry rollup 在{' '}
              <span className="dn-tag bull">+10.25M</span>（= gex_summary.json net_gex
              $10,250,368.85、07-31 是 +151.05M）—— 一道约 16M 不对账的头部-vs-rollup 缺口、按
              DN-003 谱系披露、rollup 再次在头部 ABOVE（与 07-31 / 07-30 同一关系）。两块本快照
              跨零：头部略净空 γ、rollup 略净多 γ——{' '}
              <span className="dn-em">不论哪个、本子已从一根 +151M 阻尼 de-gamma 到近平、故 dealer
              在这里不再阻尼一根 move</span>。0-γ flip 移动{' '}
              <span className="dn-tag">$63,057 → $63,127（+$70）</span>、现货 $62,961 坐在{' '}
              <span className="dn-tag bear">flip 下方 −0.26%</span>（现货口径 62,960.96 / 63,126.74
              − 1 = −0.263%）；GEX 文件自己的&ldquo;dist to flip&rdquo;读{' '}
              <span className="dn-tag bull">+0.18% 对它的 Deribit-idx $63,243</span>（63,243 /
              63,126.74 − 1 = +0.184%、文件印 +0.2%）—— 两参考跨 flip（live 现货刚在下方、文件
              idx 刚在上方），故现货实质 AT flip。墙图现货正下方一道负 γ 架、正墙在头顶：{' '}
              <span className="dn-tag bear">$60k −24.43M</span>（最重墙、崩盘 put）、{' '}
              <span className="dn-tag bull">$70k +13.27M</span>（最重正、头顶）、{' '}
              <span className="dn-tag bear">$62k −10.76M</span>（现货正下方）、{' '}
              <span className="dn-tag bull">$72k +9.45M</span>、{' '}
              <span className="dn-tag bull">$67k +8.44M</span>、{' '}
              <span className="dn-tag bear">$58k −7.87M</span>、{' '}
              <span className="dn-tag bull">$68k +7.77M</span>、{' '}
              <span className="dn-tag bull">$80k +7.37M</span>、{' '}
              <span className="dn-tag bull">$66k +7.34M</span>、{' '}
              <span className="dn-tag bear">$55k −6.14M</span>。{' '}
              <span className="dn-em">
                现货 BELOW 的负簇合计约 −49.2M（$62k −10.76M + $60k −24.43M + $58k −7.87M + $55k
                −6.14M）—— 一道真放大架：现货在 flip、一根破 $62k 墙就加速进 $60k −24.43M 崩盘 put、
                那里 dealer 对冲卖进跌里。现货上方正墙（$66k–$72k、$80k）压一根反弹。故结构是现货
                钉在 $63.1k–$63.5k 阻力/flip 带下、正下方一道负 γ 陷门——追空要的放大器、recovery
                以来首次在场。
              </span>{' '}
              按到期近日负 RE-APPEAR：{' '}
              <span className="dn-tag bear">1AUG26 0.3DTE −5.20M</span>（0DTE 前端翻负、07-31 带
              +67.37M）、2AUG 1.3 −3.40M、3AUG 2.3 +0.71M、4AUG 3.3 −1.45M、{' '}
              <span className="dn-tag bull">7AUG 6.3 +5.96M</span>、14AUG 13.3 −3.15M、21AUG 20.3
              +2.21M、<span className="dn-tag bull">28AUG 27.3 +11.83M</span>（最重正块）、25SEP
              55.3 −0.06M、30OCT 90.3 +0.06M、25DEC 146.3 +1.52M、26MAR27 237.3 +0.63M、25JUN27
              328.3 +0.60M——strip 合计{' '}
              <span className="dn-tag bull">+10.26M</span>（net_gex $10,250,368.85 取整到 +10.25M；
              +$0.01M 是逐到期 $ 取整）。0.3–3.3DTE 前端簇里的负行（1AUG −5.20M + 2AUG −3.40M +
              4AUG −1.45M、排除唯一正的 3AUG 2.3DTE +0.71M）合计 −10.05M、而全前端 0.3–3.3DTE 净
              （含 3AUG）是 −9.34M——不论哪个都是追空要的放大负 γ 前端、再次在场。
            </p>

            <p>
              期权链 IV 中位数是{' '}
              <span className="dn-tag">40.5%</span>（07-31 是 41.5%）对 30D close-to-close RV 的{' '}
              <span className="dn-tag">29.67%</span>——链层富度{' '}
              <span className="dn-tag">约 +10.8pt</span>。一根跨 N 合约的链中位数（今天 870、从 936
              降——31JUL 0DTE 那块结清滚掉了），{' '}
              <span className="dn-em">不是</span>可交易价差；到期-/strike-层 vega、skew 与期限结构
              仍未载入；vol 读保持 framework-only。RV 方法：30D close-to-close、logret.std × √365 ×
              100 于最后 30 根日 log 收益（= 31 根连续日收）锚自 parquet 最末 bar 2026-08-01
              00:05Z；29-return alt 读 29.64%。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · 周五 FRED 再印——10Y +1bp 到 4.68%（回补多 rates 滤镜仍 FALSE、现距 13bp 且第六个 session 走错方向）、HY OAS −3bp 到 2.84%（收回）、TIPS/5Y5Y 平 · MOVE 本渲染抓取失败 · Tier-2 FX / 流动性行从 07-31 原样带过（无新的周六印）· rates 是承重的 tightening、FX/信用/流动性 loose-到-neutral</span>
            </h2>

            <p>
              <span className="dn-signal">
                周五 FRED 再印让 10Y 继续往上爬（+1bp 到 4.68%）、回补多 rates 滤镜 FALSE 且第六个
                session 走错方向、同时信用收回、FX / 流动性面板原样带过
              </span>。面板渲染是 2026-07-31 22:15Z、快照前约 1.9h、周五 FRED 日度序列已再印。US 10Y
              名义{' '}
              <span className="dn-tag bear">4.68%（+1.0bp）</span>、regime z{' '}
              <span className="dn-tag bear">+2.34</span>、episodic z{' '}
              <span className="dn-tag">+1.40</span>——EXTREME RISK-OFF、第六个 session 站在 4.55%
              回补闸上/上方。10Y TIPS 实际{' '}
              <span className="dn-tag bear">2.41%（0.0bp）</span>、regime z{' '}
              <span className="dn-tag bear">+2.65</span>——EXTREME RISK-OFF、平。5Y5Y BE 通胀{' '}
              <span className="dn-tag">2.30%（0.0bp）</span>、10Y 盈亏平衡{' '}
              <span className="dn-tag">2.28%（+1.0bp）</span>——平-到-偏硬。HY OAS{' '}
              <span className="dn-tag bull">2.84%（−3.0bp）</span>、regime z{' '}
              <span className="dn-tag">−0.25</span>——中性、收回。MOVE 债 vol{' '}
              <span className="dn-tag">不可用（本渲染抓取失败）</span>。Tier-2 FX / 流动性行从 07-31
              原样带过（无新的周六印）：DXY{' '}
              <span className="dn-tag">99.97（−0.83、陈旧）</span>、regime z +0.91；USD/JPY{' '}
              <span className="dn-tag">159.65（−3.65、陈旧）</span>；Fed 净流动性{' '}
              <span className="dn-tag bear">$5.825T（−0.092T、陈旧）</span>、episodic z −2.47。US-JP
              10Y 利差 <span className="dn-tag">2.01%（+1.0bp）</span>。NFCI{' '}
              <span className="dn-tag bull">−0.554</span>、RISK-ON（周度）。USD/CNY{' '}
              <span className="dn-tag bull">6.7438（−0.02）</span>。{' '}
              <span className="dn-em">
                净读：回补多 rates 滤镜（10Y &lt; 4.55%）在 4.68% 仍 FALSE、又走错方向（+1bp、距
                firing 13bp）——但它本篇 MOOT：滤镜喂的那套 recovery 读死了、scout 在地板收盘上
                stop 出、故 rates 腿今天不承任何东西。信用收回（HY OAS −3bp）、通胀补偿平、FX /
                流动性面板陈旧带过、MOVE 不可用。宏观盘里没有东西驱动 BTC 的地板破位——那是一根
                BTC-内部的分发 / 接刀、不是宏观-risk-off 事件；相关读（下面）确认 BTC 也没在任一
                方向领跑宏观复合体。
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
                <tr><td>US 10Y 名义</td><td className="num">4.68%</td><td className="num bear">+1.0bp</td><td className="num bear">+2.34</td><td className="num">+1.40</td><td className="bear">EXTREME RISK-OFF · 爬上</td></tr>
                <tr><td>10Y TIPS 实际</td><td className="num">2.41%</td><td className="num">0.0bp</td><td className="num bear">+2.65</td><td className="num">+1.24</td><td className="bear">EXTREME RISK-OFF · 平</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.30%</td><td className="num">0.0bp</td><td className="num">+1.13</td><td className="num">+2.18</td><td className="neut">episodic · 平</td></tr>
                <tr><td>10Y 盈亏平衡</td><td className="num">2.28%</td><td className="num bear">+1.0bp</td><td className="num">−0.64</td><td className="num">+1.63</td><td className="neut">无 tag · 偏硬</td></tr>
                <tr><td>HY OAS</td><td className="num">2.84%</td><td className="num bull">−3.0bp</td><td className="num">−0.25</td><td className="num">+1.72</td><td className="neut">中性 · 收回</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.554</td><td className="num">−0.01</td><td className="num bull">−1.56</td><td className="num bull">−1.53</td><td className="bull">RISK-ON · 周度</td></tr>
                <tr><td>MOVE 债 vol</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">不可用 · 抓取失败</td></tr>
                <tr><td>DXY</td><td className="num">99.97</td><td className="num">−0.83（陈旧）</td><td className="num bear">+0.91</td><td className="num bull">−2.78</td><td className="stale">从 07-31 带过 · 无新印</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.825T</td><td className="num bear">−0.092T（陈旧）</td><td className="num">−1.09</td><td className="num bull">−2.47</td><td className="stale">从 07-31 带过 · 无新印</td></tr>
                <tr><td>USD/JPY</td><td className="num">159.65</td><td className="num">−3.65（陈旧）</td><td className="num">+0.80</td><td className="num bull">−3.00</td><td className="stale">从 07-31 带过 · 无新印</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">2.01%</td><td className="num bear">+1.0bp</td><td className="num">−0.32</td><td className="num">+1.40</td><td className="neut">中性</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7438</td><td className="num bull">−0.02</td><td className="num bull">−1.49</td><td className="num bull">−2.69</td><td className="bull">无 tag · 松</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp（月度）</td><td className="num stale">+2.42</td><td className="num stale">+1.09</td><td className="stale">月度 · 不倚</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、summary 00:00Z——{' '}
              <span className="dn-em">一根 7 日滚动读、不是今天</span>）。off-diagonal 均值{' '}
              <span className="dn-tag">|r| 0.317</span>——NORMAL 带、从 07-31 的 0.343 略松、但仍
              一起动。BTC 头号联系是{' '}
              <span className="dn-tag">NQ +0.563</span>、然后 SP500{' '}
              <span className="dn-tag">+0.550</span>、SILVER{' '}
              <span className="dn-tag">+0.479</span>、JP225{' '}
              <span className="dn-tag">+0.465</span>、TSLA{' '}
              <span className="dn-tag">+0.451</span>、PALL{' '}
              <span className="dn-tag">+0.436</span>、GOLD{' '}
              <span className="dn-tag">+0.432</span>、URNM{' '}
              <span className="dn-tag">+0.404</span>、PLAT{' '}
              <span className="dn-tag">+0.396</span>、COPPER{' '}
              <span className="dn-tag">+0.395</span>、NVDA{' '}
              <span className="dn-tag">+0.386</span>。7d 表现把 BTC 放在一根分裂盘的 mid-pack：{' '}
              <span className="dn-tag bear">BTC −1.85%</span> 大致与 JP225{' '}
              <span className="dn-tag bear">−1.82%</span> 打平、落后指数（NQ{' '}
              <span className="dn-tag bull">+0.02%</span>、SP500{' '}
              <span className="dn-tag bull">+0.68%</span>）、远落后绿的软件 megacap（MSFT{' '}
              <span className="dn-tag bull">+21.18%</span>、AMZN{' '}
              <span className="dn-tag bull">+16.79%</span>、GOOGL{' '}
              <span className="dn-tag bull">+11.19%</span>）、但领先红的 AI-megacap 板块（NVDA{' '}
              <span className="dn-tag bear">−3.67%</span>、META{' '}
              <span className="dn-tag bear">−6.78%</span>、AAPL{' '}
              <span className="dn-tag bear">−7.50%</span>）与能源（CL{' '}
              <span className="dn-tag bear">−3.04%</span>、BRENT{' '}
              <span className="dn-tag bear">−1.66%</span>、NGAS{' '}
              <span className="dn-tag bear">−4.30%</span>）。金属杂色：GOLD{' '}
              <span className="dn-tag bear">−0.19%</span>、SILVER{' '}
              <span className="dn-tag bear">−0.96%</span>、PLAT{' '}
              <span className="dn-tag bull">+3.34%</span>、PALL{' '}
              <span className="dn-tag bull">+2.99%</span>、COPPER{' '}
              <span className="dn-tag bull">+2.61%</span>；URNM{' '}
              <span className="dn-tag bear">−2.11%</span>；TSLA −0.47%；EUR +1.28%、JPY（日元）偏硬。{' '}
              <span className="dn-em">
                相关 regime 是 NORMAL（0.317）、BTC 与一根两色风险盘 WITH 动——7d 上略负、大致与
                JP225 打平、落后指数与绿的软件领头、领先红的 AI-megacap / 能源板块。故 BTC 既非 RS
                领头也非最差——它是分裂复合体里的 mid-pack、地板破位是一根 BTC-内部事件、不是宏观
                驱动的 risk-off。按 DN-001 谱系这是一根 NORMAL、杂色跨资产读——无 rotation 判断。
              </span>{' '}
              JGB 月度 2.67% 带月度 tag——不倚。
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · 回补反弹 scout STOPPED——recovery 读被证伪（盖子在印上被拒、07-31 收 $62,859.90 在 $63,311 地板止损下方、一根第二根未收盘 close 在其下）· 追空 PRIMED 但 STOOD DOWN——γ + 地板破位腿现在 MET（近日负回来、本子 de-gamma 到 −5.8M/+10.25M、现货下方一道负架、日线地板破了）但 SM-仓位腿 INVERTED（SM 接刀净多 +8,299）、且 WEEKLY 破位未确认 · 本子 FLAT</span>
            </h2>

            <p>
              <span className="dn-signal">
                07-31 那道 fork 在熊侧 resolve 且走过了头——盖子在印上被拒、价格收穿地板——但
                smart money 接了刀、故干净的追空被站在破位下方的 buyer of record 挡住
              </span>。07-31 备忘在盖子重夺上偏了淡多、并把熊路说得准：薄拒守住、再一个 lower high、
              一根新鲜 SM roll-off 重开地板。盘面走了熊路——然后收在地板下方、这是淡多倾斜没定价的
              一步。说白了：多倾斜错了；备忘作为备选点名的那条熊路是印出来的、且它走得更远。故今天
              交易本子无 scout（它的 recovery 读死了）、无追空入场（buyer of record 在破位下方持多、
              周线破位未确认）、无新对冲——本子保持 FLAT、两个指相反方向的 setup 都在等确认。
            </p>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout · STOPPED / 证伪 · recovery 读结束——盖子在印上被拒、07-31 收在 $63,311 地板止损下方</span>
              <div className="dn-trade-name">
                回补反弹 scout —— STOPPED：它递延所对的 D-EMA50 盖子在印上被拒（07-31 冲到 $65,364
                盘中、收 $62,859.90），且 07-31 收在 $63,311 settled 地板下方是 scout 自己的止损
                条件——recovery 读被证伪、scout 从没上膛、现在 stand down
              </div>
              <div className="dn-thesis">
                scout 递延了八个 session 等一件事：一根 D-EMA50 日收在 $64,911 上方、带 SM re-cross
                与需求主导 OI 在手。它没来。07-31 价格冲到 $65,364 盘中（在盖子上方、但从没在收盘），
                随后整根反转收 $62,859.90——一根 −$1,890.10 下日、抹掉三根 session 上行、收在
                $63,311 settled 200W 地板下方。那是 scout 明确的止损（日收 &lt; $63,311、一根收在
                下方结束 recovery 读）。它 fired。scout 从没进仓、故没什么可 stop out——但它建立所
                依据的读（地板上方消化、等一根盖子重夺）被证伪。它不会在同一条件上 re-arm：现在
                re-arm 要求价格先重夺 $63.1k–$63.5k flip/地板带 AND 然后在需求主导流向上收在 D-EMA50
                盖子上方——一根从地板下方的完整 recovery、不是旧递延的延续。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">已 fire 的</span><span className="dn-lvl-v bear">盖子在印上被拒（07-31 盘中 $65,364 在盖子上方、收 $62,859.90 远在下方）AND 止损 fired（07-31 收 $62,859.90 &lt; $63,311 settled 地板；08-01 未收盘 $62,916.70 一根第二根收在下方）</span></div>
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">STOPPED / 证伪 · 从没上膛、从没进仓 · recovery 读结束</span></div>
                <div><span className="dn-lvl-k">re-arm（新条件）</span><span className="dn-lvl-v bull">价格在一根日收上重夺 $63,127–$63,530 flip/地板带 AND 然后在需求主导流向上收在 D-EMA50 盖子 $64,757 上方、SM 保持净多——一根从地板下方的完整 recovery、不是旧递延</span></div>
                <div><span className="dn-lvl-k">不要</span><span className="dn-lvl-v">这里不做 scout 多——不要只因为 SM 做了就在破掉的地板下方买一次接刀；交易台等一根重夺、不是一次落刀买盘</span></div>
              </div>
              <div className="dn-gating">
                <b>纪律：</b>scout 的 edge 是一次已确认的重夺、不是对一次重夺的预测。它等了八个
                session 一根盖子收盘、得到的是一次盖子被拒加一次地板破位——正是&ldquo;等收盘、不要
                买价格还没收上去的盖子&rdquo;的正确结果。谱系不会因为 SM 接了刀就现在翻成买破位；
                buyer of record 的一次接刀是一个数据点、不是入场。scout 只在一次对地板与盖子的完整
                重夺、在需求主导流向上 re-arm。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">空 · 追 · PRIMED 但 STOOD DOWN · γ + 地板破位腿现在 MET、但 SM-仓位腿 INVERTED（SM 接刀净多）、且 WEEKLY 破位未确认</span>
              <div className="dn-trade-name">
                追空 —— recovery 里在 γ 与地板破位上最接近上膛的一次（近日负回来、本子 de-gamma 到
                净平、现货下方一道负架、07-31 收在地板下方），但 buyer of record 接了刀而非 roll off、
                故仓位 tell 反转、空 stand down
              </div>
              <div className="dn-thesis">
                追空的 edge 是一次地板破位、下方放大负 γ、AND smart money 已为它定位。三条里现在两条
                recovery 以来首次在场：DAILY 地板破了（07-31 收 $62,859.90 &lt; $63,311）、且 γ
                放大器回来了——本子从 +151.05M de-gamma 到 −5.8M 头部 / +10.25M rollup（几乎平、
                阻尼没了）、0DTE 前端翻负（1AUG −5.20M、曾 +67.37M）、现货正下方一道负 γ 架（$62k
                −10.76M 进 $60k −24.43M、下方 −49.2M 负墙）。但第三条腿 INVERTED：smart money 没有
                roll off 到空——它接了刀、进跌里堆净多 +8,299（从 +503、空 −4,702 覆盖、多 +3,094
                再加）。故这根空没有仓位 tell 可倚——buyer of record 站在破位下方、若它标一个
                bear-trap 低就能把追空剧烈挤出。且 WEEKLY 地板破位未确认：未收盘周（截止 08-02）坐在
                W-SMA200 下方但到周日才收。这里做空是在一根已确认日线破位里、对着一大堆 SM 多 bid、
                周线破位还没封——交易台把它 stand down、等确认。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">re-arm 腿（3 中 2 met、1 inverted）</span><span className="dn-lvl-v bear">地板收破（MET —— 07-31 收 $62,859.90 &lt; $63,311、日线）· 放大负 γ（MET —— 本子 −5.8M 头部、0DTE 前端 −5.20M、现货下方 $62k/$60k 负架）· SM 定位空（INVERTED —— SM 接刀净多 +8,299、站在破位 UNDER）</span></div>
                <div><span className="dn-lvl-k">什么会给这根空上膛</span><span className="dn-lvl-v bear">一根新鲜 SM 从接刀 roll-off 回净空 AND 一根已确认的守在地板下方（一根周日 08-02 周线收在 $63,311 下方 且/或 一根第二-三根日收）、负 γ 架仍在下方——SM 在多侧投降是缺的那个 tell</span></div>
                <div><span className="dn-lvl-k">若上膛的结构图</span><span className="dn-lvl-v bear">现货在 flip $63,127 → 破 $62k −10.76M 墙 → 加速进 $60k −24.43M 崩盘 put；未冲的多 carry（funding 仍 +7.77% 均、0 负、散户 68.76）是级联燃料</span></div>
                <div><span className="dn-lvl-k">不要</span><span className="dn-lvl-v">不要在一根未确认周线破位里、对着 buyer of record 一次新鲜接刀去追空——SM 多 bid 是挤风险；等 SM roll off 且破位封上</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R（框架、非 live）：</b>一次 SM roll-off + 一次已确认破位上的 live 入场会在约
                $62,900 做空、对着 flip/地板带上方约 $63,530 的止损（约 $630 风险）、朝 $60k 崩盘 put
                架（约 $2,900 回报）≈ 4.6:1 —— 一根有吸引力的放大器 setup IF 仓位 tell 对齐。今天不
                对齐。<b>纪律：</b>追空只在 SM 与你一起在破位里做空时才付；今天 SM 对着你做多、故 γ
                与地板破位腿是必要但不充分。stand down、让 buyer of record 亮牌——握住刀（bear trap、
                空从不上膛）或松开（roll-off、空上膛进架里）。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 多 fork 失败——盖子在印上被拒、价格收穿地板、但 smart money 接了刀：分发进拥挤多、在一根破掉的地板下方</span>
              <div className="dn-trade-name">
                分发进拥挤多 —— 07-31 淡多倾斜错了；熊路印出且穿过地板、但 buyer of record 与散户
                买了破位、故 resolution 是一本破位下方的多重本子、而非一根干净级联
              </div>
              <div className="dn-thesis">
                第九个 session、recovery 读结束——盖子在印上被拒（07-31 盘中 $65,364、收
                $62,859.90）、价格收在 $63,311 地板下方、就是 07-31 备忘作为基准情形备选点名的那条
                熊路。但 resolution 不是一根干净熊级联：价格跌 −2.89%、OI 扩 +2,852 BTC 的同时、
                主动买买了每个流向读（现货/期货/taker/大单全正）、smart money 接刀净多 +8,299、散户
                RE-拥挤到 68.76——供给被分发进一本拥挤、杠杆的多、这本多接了刀。funding 从封顶冷却但
                从没转负（0 负、均 +7.77%）：多 carry 水下、未冲。故破位下方那本是多重且未投降——
                两面都切。若 SM 对、接刀标一个 bear-trap 低、价格重夺 $63.1k–$63.5k 带（scout 在一根
                完整 recovery 上 re-arm）。若破位守住、那些未冲的多（散户 68.76 + SM +8,299 + 封顶
                funding carry）是级联进 $62k/$60k 负 γ 架的燃料（追空在 SM roll-off 上上膛）。
                tie-breaker 从 $64,911 盖子 DOWN 移到 $63,311 地板：这篇现在转在地板破位是否在周线
                收盘上守住、以及 SM 握住还是松开刀。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">熊向 resolution（破位守住）</span><span className="dn-lvl-v bear">一根周日 08-02 周线收在 $63,311 下方 且/或 SM 从接刀 roll off → 未冲的多 carry 级联进 $62k −10.76M / $60k −24.43M 负 γ 架；追空在 roll-off 上上膛</span></div>
                <div><span className="dn-lvl-k">多向 resolution（bear trap）</span><span className="dn-lvl-v bull">SM 对、接刀守住、价格在一根日收上重夺 $63,127–$63,530 flip/地板带 → scout 在一根重回地板然后盖子上方、需求主导流向的完整 recovery 上 re-arm</span></div>
                <div><span className="dn-lvl-k">决定性 tell</span><span className="dn-lvl-v">周日 08-02 周线收 vs $63,311、SM 握住 +8,299 接刀还是 roll off、以及 funding carry 最终冲负（投降）还是守正（未解）——不是盘中 tick</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>edge 是认到 recovery 读结束了（盖子被拒、地板在收盘上破了）而不把
                破位过读成一根干净级联——smart money 与散户接了刀、故本子在地板下方多重且未投降。
                谱系不会在一根未确认周线破位里追空一次新鲜 SM 多 bid、也不会在破掉的地板下方 scout
                多一次接刀。它保持 flat、读三个 tell：周线收盘、SM 握-vs-roll-off、与 funding 冲。
                哪个先 resolve 写下一篇。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 多 fork 失败——D-EMA50 盖子在印上被拒（07-31 盘中 $65,364、收 $62,859.90）、价格收在 $63,311 settled 地板下方（scout 止损 FIRED、recovery 读证伪）· 追空的 γ + 地板破位腿 FIRED 但 SM-仓位腿 INVERTED（SM 接刀净多 +8,299）· WEEKLY 破位未确认 · 本子 FLAT</span>
            </h2>

            <p>
              07-31 决策条件里：{' '}
              <em>D-EMA50 盖子在一根收盘上重夺</em> 没 fire——盖子直接被拒（07-31 冲到 $65,364
              盘中、从没收上、随后反转收 $62,859.90）；{' '}
              <em>scout 的 settled-地板止损</em> FIRED（07-31 收 $62,859.90 &lt; $63,311、recovery
              读证伪、一根第二根未收盘 close $62,916.70 在下方）；{' '}
              <em>scout 流向腿</em>（07-31 是 TRUE 的 SM re-cross、需求主导 OI）INVERTED——SM 进
              一场跌里堆更多净多、这让 OI 扩张成分发、不是需求；{' '}
              <em>追空的 γ 与地板破位腿</em> recovery 以来首次 FIRED（近日负回到 1AUG −5.20M、本子
              de-gamma 到 −5.8M 头部 / +10.25M rollup、现货下方负架、日线地板破了）但它的{' '}
              <em>SM-仓位腿</em> INVERTED（SM 接刀净多 +8,299、站在破位下方）；且{' '}
              <em>回补多 rates 滤镜</em> 保持 FALSE 且走开（10Y +1bp 到 4.68%、现随 recovery 读死
              而 moot）。{' '}
              <em>盖子被拒、价格收穿地板——07-31 备忘点名的那条熊路——但 smart money 接了刀而非
              roll off、故 scout 死了、追空 primed-but-blocked。</em>{' '}
              今天条件围绕一根破掉的日线地板（周线未确认）、一根接刀的 smart-money 多、一根 re-拥挤
              的散户、一本 de-gamma 且下方带负架的 dealer 本子、与一根未冲的多 carry 重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>D-EMA50 盖子在收盘上重夺（scout 价格腿）</td><td className="bear">FAILED / REJECTED —— 07-31 冲到 $65,364 盘中（在盖子上方）但收 $62,859.90 远在下方；盖子下移到 $64,757</td><td>scout 触发死了——一次盖子重夺现在要求先从地板下方完整 recovery</td></tr>
                <tr><td>Scout settled-地板止损</td><td className="bear">FIRED —— 07-31 收 $62,859.90 &lt; $63,311 settled 地板；08-01 未收盘 $62,916.70 一根第二根收在下方（现货 −0.55%）</td><td>scout STOPPED / 证伪——recovery 读结束、本子对多 stand down</td></tr>
                <tr><td>追空地板收破（腿）</td><td className="bear">MET（日线）—— 07-31 收 $62,859.90 在 $63,311 下方；WEEKLY 未确认（未收盘周截止 08-02 在 W-SMA200 下方但还没收）</td><td>腿日线 met；空等周日周线收封破位</td></tr>
                <tr><td>追空放大负 γ（腿）</td><td className="bear">MET —— 本子 de-gamma 到 −5.8M 头部 / +10.25M rollup（净平）、0DTE 前端 −5.20M、现货下方负架 $62k −10.76M / $60k −24.43M</td><td>γ 放大器 recovery 以来首次回来——下方燃料在场</td></tr>
                <tr><td>追空 SM 仓位（腿）</td><td className="bull">INVERTED —— SM 接刀净多 +8,299（从 +503）、站在破位 UNDER 而非与它一起做空</td><td>不追空：buyer of record 是一根多 bid / 挤风险；空只在一次 SM roll-off 上上膛</td></tr>
                <tr><td>回补反弹 scout re-arm（新条件）</td><td className="bull">一根日收重回 $63,127–$63,530 flip/地板带 AND 然后在需求主导流向上、SM 保持多、收在 D-EMA50 盖子 $64,757 上方</td><td>scout 只在一根从地板下方的完整 recovery 上 re-arm——不是旧递延</td></tr>
                <tr><td>回补多 rates 滤镜</td><td className="bear">FALSE 且更差 —— 10Y 4.68% &gt; 4.55%（周五 +1bp、距 13bp）；随 recovery 读死而 MOOT</td><td>独立滤镜 false 且走开；本篇不承任何东西</td></tr>
              </tbody>
            </table>

            <p>
              重写<em>这</em>篇的一行是{' '}
              <span className="dn-signal">
                地板破位是否在周日 08-02 周线收盘上守住、既然 smart money 已接刀——一次守住 + 一次
                SM roll-off 把追空上膛进 $62k/$60k 负 γ 架、以未冲的多 carry 作燃料、而一次证明 SM
                对的对 $63,127–$63,530 flip/地板带的重夺在一根完整 recovery 上重开 scout、中间的
                一切是交易台现在读的那根分发-进-拥挤多
              </span>。多 fork 失败了：D-EMA50 盖子在印上被拒、价格收穿 $63,311 地板、scout 止损
              fired——recovery 读结束。但 buyer of record 接了刀（净多 +8,299）、散户 re-拥挤到
              68.76、OI 扩进跌里、funding 从封顶冷却而没冲负——故破位下方那本多重且未投降、交易台
              既不追空进那 bid、也不买刀。到周线收盘封上或否掉破位、SM 握住或松开刀之前、这篇按写的
              跑：回补反弹 scout STOPPED 且 stand down、追空是 recovery 里在 γ 与地板破位上最接近
              上膛的一次但被一根 inverted 仓位腿挡住、put-spread 不在一根现已 moot 的 rates 腿上重
              长、本子保持 FLAT。MTF 计塌到 1/9、regime 翻回 mean-reversion 但低位一叠底部簇（HTF
              底背离、⚡TD9 BUY 30m/1d/1M）；dealer 本子 de-gamma 到净平、现货下方一道负架；且 BTC
              在一根 NORMAL、分裂的跨资产盘里保持 mid-pack——一根 BTC-内部破位、不是宏观事件。接下来
              24–48h 的对读是{' '}
              <em>耐心——读周日周线收盘、SM 握-vs-roll-off、与 funding 冲；不要在一次新鲜接刀里追空、
              也不要在破掉的地板下方买刀</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计追踪 · v2（已过 codex 敌对式审计）
            </span>
            <b>状态：</b>v2 中文备忘 —— <b>已过 codex 敌对式审计</b>。本稿在 STAGE A 直接从原子快照
            （2026-08-01 00:09Z、live tape t == &ldquo;08-01 08:09&rdquo; BJ）与存档于
            /opt/desk-note/snapshots/2026-08-01-0008/ 的滚动源生成、随后过了 STAGE B codex
            hostile-but-fair 审计（记录于 audits/2026-08-01-desk-note.md）。裁定：PASS-WITH-NOTES ——
            0 CRITICAL、0 MAJOR、2 MINOR、0 NIT；无 gate-blocking 缺陷。ask-deepseek 补充数值重算本次
            未跑（curl 到端点超时；codex 仍是 primary 并拥有 publish gate）。STAGE C 应用了两个 MINOR
            finding、并在 v1 → v2 promotion 前跑了强制 grep-closure loop。Finding：{' '}
            <b>DN-001</b>（MINOR —— GEX 前日 rollup 日期早了一天：+10.25M rollup 被说成
            &ldquo;+151.05M on 07-30&rdquo;、而 +151.05M 是 07-31 rollup）—— 搜索 pattern{' '}
            <em>&ldquo;151.05M on 07-30&rdquo;</em>（grep before 1、after 0）与更广的{' '}
            <em>&ldquo;151.05M&rdquo;</em> 审查（另 4 处命中、全正确标 07-31 或无日期——line
            209/247/526/778 已核、无需改）—— 在 line 537 改为 &ldquo;was +151.05M on 07-31&rdquo;
            —— <b>RESOLVED</b>（hits-after = 0）。{' '}
            <b>DN-002</b>（MINOR —— &ldquo;0-3DTE near cluster&rdquo; 标签与求和的行不符：−10.05M 只是
            列出的负行 1AUG/2AUG/4AUG、排除唯一正的 3AUG +0.71M 且含 4AUG 在 3.3DTE；严格 0-3DTE
            净 −7.89M、全前端 0.3-3.3DTE 净 −9.34M）—— 搜索 pattern{' '}
            <em>&ldquo;0-3DTE near cluster&rdquo;</em>（grep before 1、after 0）与{' '}
            <em>&ldquo;10.05M&rdquo;/&ldquo;0.3DTE&rdquo;</em>（确认单一前端引用）—— 重标为
            &ldquo;0.3–3.3DTE 前端簇里的负行 … 排除唯一正的 3AUG 2.3DTE +0.71M&rdquo;、并在 line 579
            带 inclusion rule 述出全前端 0.3–3.3DTE 净 −9.34M —— <b>RESOLVED</b>（hits-after = 0）。
            codex 确认干净且未改：requireViewer gating（path /desk/2026-08-01、default export 首句）；
            JSX 单 main/article；manifest-vs-body live tape（spot 62,960.96、24h −2.89%、OI
            +2.85k/+2.67%、funding 4.64%、SM +8.30k、cb_cvd +737.1、fut_cvd +1,856、premium −56.03、
            skew −11.3）；24h/4h/1h 窗算术；BJ/UTC 极值对；MA/RV 矩阵（30D RV 29.67%）；MTF
            1-多/9-空 + JT regime；GEX core（−5.8M 头部 / +10.25M rollup、flip $63,127、墙、by-expiry
            strip）；宏观 Tier-1（10Y 4.68%、HY OAS 2.84%、MOVE 抓取失败、DXY/USD-JPY/Fed-net-liq 从
            07-31 陈旧带过）；跨资产（|r| 0.317、BTC −1.85% mid-pack）；NTT / max-pain / strike-IV /
            BTC-NQ 声明 NOT LOADED 且 framework-only；谱系（谱系首根日收在 $63,311 settled 地板下方）。
            完整 <em>next build</em> 在本机仍未验（Node 18.19.1 &lt; Next.js 20.9.0 gate）；tsc
            --noEmit 是 STAGE C build proxy、通过。<b>已过 codex 敌对式审计</b> —— 两个 MINOR finding
            均 RESOLVED、grep hits-after = 0；参 audits/2026-08-01-desk-note.md。EN/ZH 数值零漂移。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部 principal 之间讨论准备的交易台工件、{' '}
            <em>非投资建议、非要约、非邀约</em>、也未针对任何接收方的具体情况个性化。数字反映单一
            原子快照（2026-08-01 00:09Z）、section 级 provenance 在上方 manifest 带披露；宏观 Tier-1
            面板渲染是 2026-07-31 22:15Z（快照前约 1.9h）、带周五 FRED 日度再印、Tier-2 FX / 流动性
            行从 07-31 原样带过、部分输入明确陈旧、不可用或待定并已如此标注。水位、size 与条件是对
            交易台流程的示意、非 standing 建议。过去的相关、γ 与仓位模式不约束未来盘。衍生品带全额
            损失风险、在杠杆处损失可超已缴保证金。<em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                盖子被拒、价格收穿地板——recovery 读结束。但 smart money 接了刀、在一根破掉的地板
                下方净多 +8,299、故交易台既不追空进那 bid、也不买刀。读周日周线收盘、与 SM 握住还是
                松开它。耐心。
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
            v2 · 2026-08-01 00:09Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            ma200w_trap_watch_state.json · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
