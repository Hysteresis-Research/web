import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-08-11 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-08-11',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-08-11' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260811() {
  await requireViewer('/zh/desk/2026-08-11');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-08-11 · v2</span>
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
              <span className="dn-big">$63,944</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−1.47%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-08-11 00:08Z（盘面锚 00:05Z）
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-08-11 00:05Z 盘面锚</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · 锚行 t==&ldquo;08-11 08:05&rdquo;（BJ，
                    UTC+8）= 00:05Z 日 pin；00:08Z 会话开读 · 雷已排（00:05Z
                    pin 不是 t==&ldquo;08-11 00:05&rdquo;、那会是 16:05Z 08-10 行）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-08-11 00:01Z scan（BJ 08:01）</td>
                  <td className="dn-flag">
                    滚动 latest 文件 · 较 00:08Z 读滞后约 7 分钟 · 含未收盘
                    K 线 · 逐字存档于 /opt/desk-note/snapshots/2026-08-11-0008
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-08-11 00:00Z 快照</td>
                  <td className="dn-flag">
                    较快照锚滞后约 8 分钟 · Deribit idx $64,227 对 live
                    $63,944（比 live 高 $283）· 794 合约 · IV 中位数 41.2% ·
                    11AUG26 0.3DTE −11.62M（一根负前块）今日 08:00Z 结算
                    （比这根 00:05Z 快照晚约 8h —— 仍在书上、未做结算调整）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-08-11 00:00Z
                  </td>
                  <td className="dn-flag">滞后约 8 分钟 · 7d 1h bar · 22 资产 · 167 rows</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-08-10 22:16Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.8h · FRED Tier-1：10Y −4bp 到 4.65%
                    （EXTREME RISK-OFF、已松）、TIPS −3bp 到 2.40%、HY OAS
                    −1bp 到 2.70%（RISK-ON）、DXY 99.62（+0.02）、Fed 净流动性
                    $5.840T · MOVE 债波本次渲染待定（抓取失败）· 数根 FX /
                    流动性行自 08-09 渲染不变（利率行已更新）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-08-11 00:06Z（close $63,910.30）</td>
                  <td className="dn-flag">
                    偏移按 live 现货 $63,944.50 重算 · 全 2019–2026 wildcard
                    parquet = 363 根 W-SUN 周 bar · W-SMA200 可算、印 $63,984
                    （−0.06%、基本贴现货）；所有显示的 W-SMA 都是全历史均值 ·
                    W-EMA150/200 种子敏感、按披露的种子窗报
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W 周期地板盯位</td>
                  <td className="dn-v-cell">ma200w_trap_watch_state.json · sma200 $63,760.71</td>
                  <td className="dn-flag">
                    recomputed_at 2026-08-10 00:11:24Z —— 现约 24h 陈旧、
                    自上一篇带过（08-09 起无新周结算、下根周收 08-16）· JSON：
                    sma200 $63,760.71、consecutive_above 6 穿 08-09 周结算
                    $64,867.80 · 慢水位（约 $250/周）、按 runbook 一份数小时
                    陈旧的 JSON 无碍
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
              <span className="dn-v bull">+2.41%</span>
              <span className="dn-src">live · 原始 0.002203 ×1095 = +2.41% ann · 24h 均值 +7.95%（08-10 是 +7.36%）· 区间 +2.38% / +10.95% · 0 / 1441 采样行转负 —— funding 每一分钟都多付空、但 live 印从 +10.95% 窗高硬冷下来、是这一轮首根真的去杠杆腿</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bull">+8.12% → +2.41% live（24h 均值 +7.95%）</span>
              <span className="dn-src">live 率从 08-10 备忘的 +8.12% 冷 −5.71pt、坐在 24h 区间低端；24h 均值仍升 +0.59pt 是因为窗内大半时间都热 —— 冷却在最后一腿、还不是整天</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−0.78%（−833.8 BTC）</span>
              <span className="dn-src">live · 第二天净 OI 缩 —— 最近 4h 泄 −658.6 BTC、最近 1h 泄 −191.4 BTC、现货跌破 $64k · 进快照是去杠杆、不是堆</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bear">61.60 / 38.40</span>
              <span className="dn-src">live_db `mkt_long_pct` · 从 24h 前 53.78（+7.82pt 更拥挤）· 24h 区间 52.40 / 61.60 —— retail 猛买跌、价格跌 −1.47% 里拥挤到区间顶</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bull">+2,947（净 LONG、翻了）</span>
              <span className="dn-src">live · long 14.21k − short 11.26k · 从 08-10 备忘的 −3,405 净空翻回净多、靠一根 BJ 00:41 08-11（16:41Z 08-10）的干净零轴穿越、不是那根反复的 BJ 14–15 feed artifact —— 近谱系里最干净的一根 SM 认证</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 08-10 备忘</span>
              <span className="dn-v bull">−3,405 → +2,947（Δnet +6,352）</span>
              <span className="dn-src">long +3,440、short −2,912 · 一根整翻空→多 · |Δ|/prior_net = 6,352 / 3,405 = 1.87（一根比整根 prior net 还大的反转、所以「cut fraction」不是对的框架 —— 按方向读）· 一根 +1,365 单分钟步在 BJ 02:41（18:41Z 08-10）、但符号变化本身干净；净多约 7h、BJ 03:05 后稳在 ~+2.6k–2.95k、终值 +2,947</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">41.2% / 28.15%</span>
              <span className="dn-src">GEX IV 中位数 · 794 合约 · 30D close-to-close RV（logret.std ×√365 ×100、30 returns）· 链级溢价 ~+13.1pt</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+0.73%（在上方）</span>
              <span className="dn-src">flip $63,481 · 对 live 现货 $63,944（+0.73%；63,944.5/63,481 − 1 = 0.731%）/ GEX 文件 Deribit idx $64,227（+1.18%；64,227/63,481 − 1 = 1.175%、文件取整 +1.2%）—— 两参考都正、页面现货侧取 +0.73% 保 tile 一致 · aggregate GEX +45.9M（净多 γ、但从 08-10 的 +111.3M 腰斩；一根新鲜 −13.71M $64k 墙现在贴现货）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                08-10 备忘那根丢封顶的升级触发了：D-EMA50 封顶在走完的
                08-10 收盘上破掉
              </span>
              。那篇带一本平的书（scout 在 08-09 平），把首个结构性升级
              命名为「一根 1d 收 &lt; D-EMA50 $64,661」。08-10 日收报
              <span className="dn-tag bear">$63,939.30</span> —— 比它守了三根
              session 的封顶低约 $722 —— 现货现在印
              <span className="dn-tag bear">$63,944、在 D-EMA50 封顶 $64,597
              下方 −1.01%</span>。从 08-07 跑起来的锚上方消化论被
              <span className="dn-em">证伪</span>：08-10 快照后现货又探一根
              <span className="dn-tag">$65,370 @ BJ 15:38 08-10（07:38Z）</span>、
              被卖得跟前一天的 $65,435 一样、把当天收回封顶下方。
              <span className="dn-signal">
                但仓位本子做了跟价格相反的事
              </span>
              ：smart money 从 08-10 备忘的
              <span className="dn-tag bear">−3,405 净空</span>翻回
              <span className="dn-tag bull">+2,947 净多</span>（long 14.21k −
              short 11.26k）—— 而且这次靠一根
              <span className="dn-em">BJ 00:41 08-11（16:41Z 08-10）的干净零轴
              穿越、不是那根反复的 BJ 14–15 feed artifact</span>、所以这根翻
              多是近谱系里最可认证的一根 SM 读。这是一根真背离：SM 在一根
              破封顶的收盘里转多。盘面其余偏空：funding 在最后一腿硬冷
              （live <span className="dn-tag bull">+2.41% ann</span> 离 +10.95%
              窗高、虽然 24h 均值仍 +7.95%）、OI 第二天缩
              （<span className="dn-tag bear">−834 BTC / 24h</span>、最近 4h
              −659）、retail 猛买跌（<span className="dn-tag bear">+7.82pt 到
              61.6%</span>）、dealer 本子的 γ
              <span className="dn-tag bear">腰斩到 +45.9M</span>、一根新鲜
              <span className="dn-tag bear">−13.71M $64k 墙贴在现货</span>、
              MTF 慢周期翻面（新鲜 <span className="dn-tag bear">8h / 12h / 1d
              水上死叉</span>、regime 翻到 6/9 reversal）。仍守住的是地板：
              收盘与现货都守在
              <span className="dn-tag bull">$63,481 flip（+0.73%）</span>与
              <span className="dn-tag bull">$63,761 200W 周期地板（+0.29%）</span>
              上方、24h 低
              <span className="dn-tag">$63,825 @ BJ 02:43 08-11（18:43Z
              08-10）</span>就守在地板上方一点。读法：封顶丢了、结构恶化、
              但 flip/floor 带 + 一根新鲜的 SM 翻多仍在盘下 —— 所以书
              <span className="dn-em">继续平</span>、scout 再入场不触发（它的
              守封顶腿失败、即便 SM 腿印出）、chase-short
              <span className="dn-em">仍站边、但离武装更近</span>（γ 腰斩、一根
              负墙贴现货、一根负前 0DTE）—— 它只在一根 1d 收穿 flip/floor
              时武装。
            </p>

            <p>
              现货报 <span className="dn-tag">$63,944</span> live、
              <span className="dn-tag bear">−1.47%</span> 在 24h（现货 63,944.5
              对 08-10 08:05 BJ 的 24h 前行 64,896）—— 一根真跌日、不是平盘。
              24h 形状是一根被拒的探针然后磨低：高
              <span className="dn-tag">$65,370 @ BJ 15:38 08-10（07:38Z）</span>、
              低 <span className="dn-tag">$63,825 @ BJ 02:43 08-11（18:43Z
              08-10）</span>、把 24h 收回近低。承重的结构性事实是封顶破：
              日收 <span className="dn-tag">08-07 $64,885.40</span>、
              <span className="dn-tag bull">08-08 $64,928.50</span>（这一轮的高
              收）、<span className="dn-tag">08-09 $64,867.80</span>、然后
              <span className="dn-tag bear">08-10 $63,939.30</span> —— 08-07
              重夺以来首根收在 D-EMA50 封顶下方 —— 08-11 未收盘 $63,910.30
              跟着它。<span className="dn-em">
                三根收买来一根停滞、第四根 session 丢了封顶。重夺守住它的
                地板三天、然后交回它重夺的那个水位。
              </span>{' '}
              现货现在坐在紧的 D-SMA20 / D-EMA20 / D-EMA50 头顶簇下方
              （<span className="dn-tag bear">$64,174 / $64,205 / $64,597、
              −0.36% 到 −1.01%</span>）、基本贴着 W-SMA200
              <span className="dn-tag bear">$63,984（−0.06%）</span>、上方是
              一道薄支撑架 —— 200W 地板
              <span className="dn-tag bull">$63,761（+0.29%）</span>、0γ flip
              <span className="dn-tag bull">$63,481（+0.73%）</span>、D-SMA50
              <span className="dn-tag bull">$63,357（+0.93%）</span>。下一根
              真头顶不变、现在更远：D-EMA100
              <span className="dn-tag bear">$66,763（−4.22%）</span>/ W-EMA200
              <span className="dn-tag bear">$67,087（−4.68%）</span>合流、这根
              磨从没测过。
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面 · SM 翻多 +2,947 靠一根干净零轴穿越（非 BJ 14–15 artifact）—— 但封顶在 08-10 收盘破了 · funding 硬冷到 +2.41% live · OI 缩 −834/24h · retail 拥挤 +7.82pt 到 61.6% 进这根跌</span>
            </h2>

            <p>
              <span className="dn-signal">
                仓位本子在价格破封顶时翻多 —— 一根干净背离
              </span>
              。SM net 是 <span className="dn-tag bull">+2,947</span>（long
              14,211 − short 11,264）对 08-10 备忘的
              <span className="dn-tag bear">−3,405</span> 净空（long 10,771 −
              short 14,176）。两侧分量都往多动、都持住：long_btc
              <span className="dn-tag bull">10.77k → 14.21k（+3,440）</span>、
              short_btc <span className="dn-tag bull">14.18k → 11.26k
              （−2,912）</span>、Δnet <span className="dn-tag bull">+6,352</span>。
              <span className="dn-em">
                关键是、不像 08-10 那根 roll-back-short —— 它经那根反复的
                BJ 15:01 feed artifact 重同步 —— 这根翻印出一根干净的符号变化
                在 BJ 00:41 08-11（16:41Z 08-10）、net −17 → +37、稳在 BJ
                14–15 artifact 窗外。有一根 +1,365 单分钟步在 BJ 02:41（18:41Z
                08-10）、net 644 → 2,009、但方向早在一小时前那根干净穿越就
                定了、读数净多约 7h、BJ 03:05 后稳在 ~+2.6k–2.95k、终值 +2,947
                进快照。这是近谱系里最可认证的一根 SM 状态。
              </span>{' '}
              这里「cut fraction」不是对的框架 —— |Δ|/prior_net = 6,352 /
              3,405 = 1.87、也就是这一动比整根 prior net 还大；诚实读法是
              方向性的：SM 重做多、盖了空、一根整翻到净多。retail 靠向相反
              的、危险的一边：mkt_long_pct <span className="dn-tag bear">61.60%
              </span>从 24h 前 53.78%（+7.82pt）、24h 区间 52.40 / 61.60 ——
              人群猛买 −1.47% 那根跌、价格跌里拥挤到区间顶。
            </p>

            <p>
              杠杆侧终于冷了 —— 但只在最后一腿。
              <span className="dn-signal">
                funding 整 24h 都多付、可 live 印硬掉
              </span>
              ：live <span className="dn-tag bull">+2.41% ann</span>（原始
              0.002203 × 1095）、24h 均值
              <span className="dn-tag bear">+7.95%</span>（比 08-10 备忘的
              +7.36% 升 +0.59pt、因为窗内大半仍热）、区间
              <span className="dn-tag">+2.38% / +10.95%</span>、
              <span className="dn-tag bear">0 / 1441 采样行转负</span> —— 多头
              每一分钟都付空头、但 live 率现在在 24h 区间底、是这一轮首根真的
              去杠杆腿。OI Δ <span className="dn-tag bear">−833.8 BTC
              （−0.78%）</span>跨 24h —— 连续第二天净缩 —— 最近 4h 泄
              <span className="dn-tag bear">−658.6 BTC</span>、最近 1h 泄
              <span className="dn-tag bear">−191.4 BTC</span>、现货跌破 $64k。
              perp 对现货在快照是
              <span className="dn-tag bear">−$70.21 折价</span>（1h 均 −$63.60、
              4h 均 −$62.62、24h 均 −$59.35、区间 −$137.17 / +$32.08 —— basis
              在 24h 高短暂升水然后走宽到深折价；折价从 08-10 备忘的 −$53.81
              快照走宽）。1 分钟 aggressor skew 快照
              <span className="dn-tag bear">−1.0</span>（1h 均 −2.83）—— 一档
              温和卖倾斜、没超卖反射买盘。
              <span className="dn-em">
                funding 离封顶冷 + OI 第二天缩 + 一根深 perp 折价 + SM 翻多
                而 retail 拥挤多：杠杆本子在放气、smart/dumb 分裂大开。冷却的
                carry 和 SM 翻多是建设性的线；OI 缩和走宽的折价说这场放气是
                在一根破位上、不是在一根底上。
              </span>
            </p>

            <p>
              窗口流向读<em>一根全天的 fade、一根被吸收的重现货买盘在近低
              踏进、期货全程给盘</em>。24h：价格
              <span className="dn-tag bear">−1.47%</span>、OI
              <span className="dn-tag bear">−833.8 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +2,112</span>（窗内无 cb_cvd
              reset —— 已核）、期货 CVD
              <span className="dn-tag bull">Δ +550</span>、大单
              <span className="dn-tag bear">−28 BTC</span>、taker-net
              <span className="dn-tag bull">+550</span>{' '}
              <span className="dn-em">（taker-net 和按构造等于期货 CVD Δ ——
              fut_cvd 是 taker_net 的滚动 cumsum）</span> ——{' '}
              <span className="dn-em">
                一根适度的净现货买盘被吸收成一根 −1.47% 跌日、比 08-10 备忘
                那 +18.3k 的现货 CVD 洪水小得多；盘下的那道需求随价格破位
                变薄了
              </span>
              。4h（进快照）：价格
              <span className="dn-tag bear">−0.18%</span>、OI
              <span className="dn-tag bear">−658.6 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +2,428.9</span>、期货 CVD
              <span className="dn-tag bear">Δ −586.4</span>、大单
              <span className="dn-tag bear">−289.3 BTC</span>、taker-net
              <span className="dn-tag bear">−586.4</span> ——{' '}
              <em>一根重现货买盘在近低吸收（整 24h 现货 CVD 都印在这最后
              4h）、而期货和大单给盘、OI 缩 —— 现货买家在 $63.8k–$64.0k
              踏进、但没把价格抬起来</em>。1h：价格
              <span className="dn-tag bear">−0.08%</span>、OI
              <span className="dn-tag bear">−191.4 BTC</span>、现货 CVD
              <span className="dn-tag bear">Δ −93.2</span>、期货 CVD
              <span className="dn-tag bear">Δ −239.4</span>、大单
              <span className="dn-tag bear">−102.3 BTC</span>、taker-net
              <span className="dn-tag bear">−239.4</span> ——{' '}
              <em>两侧进快照都给盘、还没反射买</em>。关键是那道分裂：24h 现货
              CVD（+2,112）整根是最后 4h 现象（+2,429）、所以前面约 20h 在
              fade 里卖现货、买盘只在近地板踏进 —— 水位上有真需求、但被吸收、
              期货从没加入。{' '}
              <span className="dn-em">
                （4h 和 1h 块是从上一根边界行量起的累计 Δ —— BJ 04:05 →
                08:05 与 07:05 → 08:05 —— 这些序列的滚动 cumsum 惯例；精确
                时钟窗差几个 BTC 的 OI 和 CVD。）
              </span>
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 翻面 —— 新鲜 8h / 12h / 1d 水上死叉、regime 翻到 6/9 REVERSAL（JT&lt;0）· 只有 HTF 底背离簇（12h/1w）+ 1M ⚡TD9 BUY 仍偏上 · 封顶丢、现货钉在薄 flip/floor 带</span>
            </h2>

            <p>
              <span className="dn-signal">
                08-10 那本建设性的慢书翻面了
              </span>
              。上一篇倚的 8h / 12h / 1d 金叉全翻成新鲜水上死叉：8h
              <span className="dn-tag bear">水上死叉 2b</span>（DIF +240.8、
              一根水上的早叉）、12h
              <span className="dn-tag bear">水上死叉刚印</span>（DIF +118.7）、
              1d <span className="dn-tag bear">水上死叉刚印</span>（DIF +73.3）。
              快周期本就在下 —— 1h 水上死叉 15b（RSI 32.5、云下）、4h 水上
              死叉 13b（RSI 35.8、云内）、15m / 30m 名义仍金叉但云下、RSI 低
              30 —— 一根 <span className="dn-tag bear">顶背离簇在 30m / 1h /
              4h</span>盖住快侧。头部净读是
              <em>「1 多 / 9 空 · 空头共振、卖反弹」</em>、regime 翻到
              <span className="dn-tag bear">6/9 reversal（JT&lt;0）——
              均值回归 / 反弹强、trend-follow 谨慎</span>（从 08-10 备忘的
              5/9 trend-continuation）。仍偏上的又薄又更高 TF：
              <span className="dn-tag bull">HTF 底背离簇在 12h / 1w</span>熬过
              了这些叉、1w 仍是一根
              <span className="dn-tag bull">水下金叉 3b</span>、
              <span className="dn-tag bull">1M ⚡TD9 BUY（印于 $63,920）</span>
              还在。{' '}
              <span className="dn-em">
                直读：重夺的动能没了。中书（8h/12h/1d）翻成死叉确认了封顶破、
                regime 标翻到 reversal、只有最慢的几根周期和一根底背离簇让
                一个反弹案子活着。这是一根失败重夺测它地板的结构指纹、不是
                一根底在建。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">63,920</td><td className="num">36.5</td><td className="neut">金叉（水下）20b</td><td className="bear">云下 ↑64.3k 47b</td><td>Buy 5</td><td>BEAR hid · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">63,920</td><td className="num">32.8</td><td className="neut">金叉（水下）7b</td><td className="bear">云下 ↑65.1k 24b</td><td>Buy 6</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>1h</td><td className="num">63,920</td><td className="num">32.5</td><td className="bear">死叉（水上）15b</td><td className="bear">云下 ↑65.1k 11b</td><td>Buy 2</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>4h</td><td className="num">63,920</td><td className="num">35.8</td><td className="bear">死叉（水上）13b</td><td className="neut">云内 63.8k–64.0k 2b</td><td>Buy 6</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>8h</td><td className="num">63,920</td><td className="num">43.8</td><td className="bear">死叉（水上）2b</td><td className="neut">云内 63.9k–64.6k 2b</td><td>Buy 3</td><td>BEAR hid</td></tr>
                <tr><td>12h</td><td className="num">63,920</td><td className="num">45.7</td><td className="bear">死叉（水上）刚印</td><td className="bear">云下 ↑64.1k 1b</td><td>Buy 2</td><td>BULL reg</td></tr>
                <tr><td>1d</td><td className="num">63,920</td><td className="num">48.3</td><td className="bear">死叉（水上）刚印</td><td className="neut">云内 62.6k–67.9k 22b</td><td>Buy 2</td><td>BULL hid</td></tr>
                <tr><td>3d</td><td className="num">63,920</td><td className="num">45.0</td><td className="neut">—</td><td className="bear">云下 ↑76.2k 23b</td><td>Buy 1</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">63,920</td><td className="num">39.9</td><td className="bull">金叉（水下）3b</td><td className="bear">云下 ↑85.9k 28b</td><td>Buy 1</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">63,920</td><td className="num">43.8</td><td className="neut">—</td><td className="bull">云上 ↓47.4k 30b</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 00:01Z scan（BJ 08:01；滚动
                    latest 文件；逐字存档于
                    /opt/desk-note/snapshots/2026-08-11-0008）。头部告警：
                    <em>8h 水上死叉（2 bar 前）、DIF +240.8 —— 一根早死叉
                    （DIF 在水上）</em>、<em>12h 水上死叉（刚印）、DIF
                    +118.7</em>、<em>1d 水上死叉（刚印）、DIF +73.3</em>、
                    <em>1M ⚡TD9 BUY 印于 $63,920</em>、<em>⚠ HTF 底背离簇
                    （12h/1w）</em>。扫描现货 $63,920、24h −1.42%、24h H/L
                    $65,374 / $63,788、qVol $8.31B（00:01Z MTF 扫描；live-tape
                    锚在 00:05Z 同窗读现货 $63,944、24h −1.47% —— 约 4 分钟差
                    解释这点偏差）。收盘为未收盘 K 线；每个值在各周期收盘前
                    都按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵确认封顶破。现货 $63,944 坐在
              <span className="dn-tag bear">D-EMA50 封顶 $64,597 下方
              −1.01%</span>、在紧头顶簇下方 ——
              <span className="dn-tag bear">D-EMA20 $64,205（−0.41%）</span>、
              <span className="dn-tag bear">D-SMA20 $64,174（−0.36%）</span> ——
              但正贴着
              <span className="dn-tag bear">W-SMA200 $63,984（−0.06%、基本
              贴现货）</span>、下面只一道薄支撑架：
              <span className="dn-tag bull">200W 地板 $63,761（+0.29%）</span>、
              <span className="dn-tag bull">0γ flip $63,481（+0.73%）</span>、
              <span className="dn-tag bull">D-SMA50 $63,357（+0.93%）</span>。
              簇上方、不变且未测：
              <span className="dn-tag bear">D-EMA100 $66,763（−4.22%）</span>、
              <span className="dn-tag bear">W-EMA200 $67,087（−4.68%；种子）</span>
              （最近的头顶合流）、
              <span className="dn-tag bear">D-SMA100 $67,594（−5.40%）</span>、
              <span className="dn-tag bear">W-EMA20 $68,501（−6.65%）</span>、
              <span className="dn-tag bear">W-SMA20 $69,125（−7.49%）</span>、
              <span className="dn-tag bear">D-SMA150 $69,270（−7.69%）</span>、
              <span className="dn-tag bear">D-EMA150 $69,414（−7.88%）</span>、
              <span className="dn-tag bear">D-SMA200 $69,882（−8.50%）</span>、
              <span className="dn-tag bear">D-EMA200 $72,108（−11.32%）</span>、
              <span className="dn-tag bear">W-EMA150 $72,944（−12.34%；种子）</span>、
              <span className="dn-tag bear">W-SMA150 $77,121（−17.09%）</span>、
              <span className="dn-tag bear">W-EMA50 $77,265（−17.24%）</span>、
              <span className="dn-tag bear">W-EMA100 $78,204（−18.23%）</span>、
              <span className="dn-tag bear">W-SMA50 $82,473（−22.47%）</span>、
              <span className="dn-tag bear">W-SMA100 $88,710（−27.92%）</span>。
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-08-11 00:06Z（close
                $63,910.30）；偏移按 live 现货 $63,944.50 重算。显示的 MA
                水位按 $ 取整、偏移用精确序列值算。全 2019–2026 wildcard
                parquet 有 363 根 W-SUN 周 bar、所以 W-SMA200 可算 —— 印
                $63,984（−0.06%、基本贴现货）、显示在上面的近现货簇里；每一根
                显示的 W-SMA 都是全历史均值。（这根 parquet W-SMA200 与
                trap-watch 周期地板 sma200 $63,761 不同、后者按 JSON 自己的
                周口径算。）W-EMA150 $72,944（−12.34%）与 W-EMA200 $67,087
                （−4.68%）种子敏感、按披露的种子窗报、不是全 adjust 重算。
                日线收盘：08-06 $64,300.00、08-07 $64,885.40、08-08
                $64,928.50、08-09 $64,867.80、08-10 $63,939.30（08-07 重夺以来
                首根收在 D-EMA50 封顶下方）、08-11（未收盘）$63,910.30。
                另外、200W 周期地板（trap-watch JSON 的 sma200 $63,760.71、
                recomputed 2026-08-10 00:11:24Z、现约 24h 陈旧、带过 —— 08-09
                起无新周结算）守住第 6 根地板上方周收：08-09 结算 $64,867.80、
                +$1,107（+1.74%）净上；live 现货 $63,944 在地板上方 +0.29%。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · γ 腰斩到 +45.9M · flip $63,481（现货在上方 +0.73%、缓冲变薄）· 新鲜 −13.71M $64k 墙贴现货、−44M 负簇 $60k/$62k/$64k · 11AUG 0DTE −11.62M（负前块）在 08:00Z 结算 · 最重墙 $70k +19.63M</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子仍是净多 γ、但在快速变薄、一根负墙现在正坐在
                现货上
              </span>
              。aggregate GEX 是
              <span className="dn-tag bull">+45.9M / 1%</span> —— 净多 γ
              （阻尼）、但从 08-10 备忘的 +111.3M 大致腰斩。0-γ flip 坐
              <span className="dn-tag">$63,481</span>、现货 $63,944 在
              <span className="dn-tag bull">flip 上方 +0.73%</span>（现货口径
              63,944.5 / 63,481 − 1 = +0.731%）；GEX 文件自己的「dist to flip」
              读 +1.2%、对它的 Deribit idx $64,227（比 live 现货高 $283）算
              <span className="dn-tag bull">+1.18%</span>（64,227 / 63,481 − 1
              = +1.175%）—— 两参考都正、但缓冲从 08-10 的 +1.97% / +2.43%
              变薄。墙图绕现货转成两侧：头顶
              <span className="dn-tag bull">$70k +19.63M</span>（最重墙）、
              <span className="dn-tag bull">$68k +13.69M</span>、
              <span className="dn-tag bull">$66k +12.18M</span>、
              <span className="dn-tag bull">$65k +11.79M</span>、
              <span className="dn-tag bull">$67k +11.31M</span>、
              <span className="dn-tag bull">$72k +8.42M</span>、
              <span className="dn-tag bull">$80k +8.16M</span>；但在现货处及
              下方一道负簇建起来 ——
              <span className="dn-tag bear">$64k −13.71M</span>（正贴现货）、
              <span className="dn-tag bear">$62k −11.33M</span>、
              <span className="dn-tag bear">$60k −18.95M</span> 崩盘 put 残余、
              一道 <span className="dn-tag bear">−44.0M</span> 负架在盘下。{' '}
              <span className="dn-em">
                要紧的变化：dealer 现在在现货处就是短 γ（$64k −13.71M 墙）、
                所以一根穿 $64k 的动会被加速、不是被阻尼 —— 跟 08-10 备忘倚的
                那本干净阻尼书相反。$65k–$72k 正带仍合计约 +77M 头顶供给盖
                住一根挤压、但地板缓冲现在是 $60k/$62k 负架、中间在 $64k 有
                负 γ。
              </span>{' '}
              11AUG26 0.3DTE 是 <span className="dn-tag bear">−11.62M</span>
              （一根负前块、不像上一篇带的 +15.35M 正 0DTE）、今日 08:00Z
              结算 —— 比这根 00:05Z 快照晚约 8h、所以仍在书上（未做结算调整）；
              结算后把它移掉会把 aggregate 抬到大约 +45.9M − (−11.62M) =
              +57.5M。前向 expiry 都净正：12AUG 1.3 −2.83M、13AUG 2.3 +1.04M、
              14AUG 3.3 +2.08M、21AUG 10.3 +9.13M、28AUG 17.3 +15.29M（最重）、
              25SEP 45.3 +12.60M、30OCT 80.3 +0.78M、25DEC 136.3 +3.78M、
              26MAR27 227.3 +1.22M、25JUN27 318.3 +0.71M。{' '}
              <span className="dn-em">
                前向 expiry 上没有一根大负放大器 —— 两根近端负（11AUG
                −11.62M、12AUG −2.83M）都小、两天内滚掉 —— 但这条 strip 比
                08-10 明显更少净多 γ、那根负 $64k 墙是新的结构事实。
              </span>
            </p>

            <p>
              IV 中位数横跨 794 合约是
              <span className="dn-tag">41.2%</span>对 30D close-to-close RV
              <span className="dn-tag">28.15%</span> —— 链级溢价
              <span className="dn-tag">~+13.1pt</span>。是 N 合约的链中位数、
              <span className="dn-em">不是</span>可交易价差；expiry- /
              strike-level vega、skew、期限结构仍未载入、vol 读法保持
              framework only。RV 方法：30D close-to-close、logret.std × √365
              × 100、用最末 30 根日 log return、锚自 parquet 最末 bar
              2026-08-11 00:06Z。Put/Call 比 0.57、put OI 119,787 BTC、call OI
              209,310 BTC —— 仍一本 call-heavy 书、与净多 γ 读一致、即便
              aggregate 腰斩。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · 利率转松（10Y −4bp 到 4.65% EXTREME RISK-OFF、TIPS −3bp 到 2.40%）· 信用仍 RISK-ON（HY OAS 2.70%）· DXY 平 99.62 · MOVE 待定 · reclaim-long 利率筛在 10bp 仍 FALSE（自 14bp 改善）· BTC 对 TradFi 落后扩到 −2.05pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                利率松了、信用保持平静 —— 宏观盘不是逼这根破位的那个东西
              </span>
              。面板渲染 2026-08-10 22:16Z、比快照早约 1.8h（利率行已更新；
              数根 FX / 流动性行自上一根渲染不变）。US 10Y nominal
              <span className="dn-tag bull">4.65%（−4.0bp）</span>、regime z
              <span className="dn-tag bear">+2.00</span>、偶发 z
              <span className="dn-tag">+0.64</span> —— EXTREME RISK-OFF、比
              08-10 备忘的 4.69% 松 4bp。10Y TIPS real
              <span className="dn-tag bull">2.40%（−3.0bp）</span>、regime z
              <span className="dn-tag bear">+2.34</span> —— EXTREME RISK-OFF、
              已松。5Y5Y BE 通胀
              <span className="dn-tag">2.33%（+5.0bp）</span>、偶发 z
              <span className="dn-tag bear">+2.16</span> —— 更硬。HY OAS
              <span className="dn-tag bull">2.70%（−1.0bp）</span>、regime z
              <span className="dn-tag bull">−1.09</span>、偶发 z
              <span className="dn-tag bull">−0.79</span> —— RISK-ON、信用仍
              平静。MOVE 债波
              <span className="dn-tag stale">待定</span>本次渲染（抓取失败、
              第二天）。DXY
              <span className="dn-tag">99.62（+0.02）</span>、偶发 z
              <span className="dn-tag bull">−1.82</span> —— 平。Fed 净流动性
              <span className="dn-tag">$5.840T（+0.014T）</span>、偶发 z
              <span className="dn-tag">+2.47</span>。US-JP 10Y 利差
              <span className="dn-tag bull">1.98%（−4.0bp）</span>；USD/JPY
              <span className="dn-tag bull">157.84（−0.57）</span>（日元更硬）。
              NFCI −0.529（松、陈旧 10d）。
              <span className="dn-em">
                净：reclaim-long 利率筛（10Y &lt; 4.55%）在 4.65% 仍 FALSE ——
                在错侧 10bp、但比 08-10 备忘的 14bp 改善、10Y 松了。利率仍是
                结构性逆风（10Y 与 TIPS 都 EXTREME RISK-OFF）、但当日松了、
                信用 RISK-ON、所以宏观盘不是破封顶的那个 —— 破位是仓位与
                结构驱动的。BTC 对 TradFi 脱钩本印扩到 −2.05pt（BTC +0.94%
                vs NQ +2.99% 在 7d）、从 08-10 的 −1.92pt —— BTC 交回地盘而
                风险引擎继续跑、所以落后重开。
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
                <tr><td>US 10Y nominal</td><td className="num">4.65%</td><td className="num bull">−4.0bp</td><td className="num bear">+2.00</td><td className="num">+0.64</td><td className="bear">EXTREME RISK-OFF · 已松</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.40%</td><td className="num bull">−3.0bp</td><td className="num bear">+2.34</td><td className="num">+0.66</td><td className="bear">EXTREME RISK-OFF · 已松</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.33%</td><td className="num bear">+5.0bp</td><td className="num">+1.58</td><td className="num bear">+2.16</td><td className="neut">无标 · 偶发</td></tr>
                <tr><td>HY OAS</td><td className="num">2.70%</td><td className="num bull">−1.0bp</td><td className="num bull">−1.09</td><td className="num bull">−0.79</td><td className="bull">RISK-ON · 信用平静</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.529</td><td className="num">+0.00</td><td className="num">−0.65</td><td className="num bull">−1.00</td><td className="stale">松 · 陈旧 10d</td></tr>
                <tr><td>MOVE 债波</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">本次渲染待定</td></tr>
                <tr><td>DXY</td><td className="num">99.62</td><td className="num">+0.02</td><td className="num">+0.58</td><td className="num bull">−1.82</td><td className="neut">平 · 紧 regime</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.840T</td><td className="num">+0.014T</td><td className="num">−0.70</td><td className="num bear">+2.47</td><td className="neut">小周度堆</td></tr>
                <tr><td>USD/JPY</td><td className="num">157.84</td><td className="num bull">−0.57</td><td className="num">+0.36</td><td className="num bull">−1.80</td><td className="bull">日元更硬</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">1.98%</td><td className="num bull">−4.0bp</td><td className="num">−0.38</td><td className="num">+0.64</td><td className="neut">中性</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7467</td><td className="num">−0.00</td><td className="num bull">−1.41</td><td className="num bull">−1.63</td><td className="neut">无标 · 松</td></tr>
                <tr><td>10Y breakeven</td><td className="num">2.29%</td><td className="num bear">+4.0bp</td><td className="num bull">−0.45</td><td className="num bear">+1.94</td><td className="neut">无标 · 偶发</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp（月度）</td><td className="num bear">+2.42</td><td className="num">+1.09</td><td className="stale">月度 · 陈旧 70d · 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、汇总 00:00Z ——
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。
              非对角线均值 <span className="dn-tag">|r| 0.211</span>
              （IDIOSYNCRATIC 区段、&lt; 0.25 —— 较 08-10 备忘的 0.207 基本
              平）。BTC 列出的对齐：COPPER
              <span className="dn-tag">+0.340</span>（顶）、NQ
              <span className="dn-tag">+0.331</span>、GOLD
              <span className="dn-tag">+0.319</span>、TSLA
              <span className="dn-tag">+0.306</span>、SILVER
              <span className="dn-tag">+0.283</span>、SP500
              <span className="dn-tag">+0.274</span>、PLAT
              <span className="dn-tag">+0.269</span>、JP225
              <span className="dn-tag">+0.218</span>、EUR
              <span className="dn-tag">+0.186</span>、NVDA
              <span className="dn-tag">+0.183</span>。7d 相对表现：
              <span className="dn-tag bull">BTC +0.94%</span>、NQ
              <span className="dn-tag bull">+2.99%</span>、SP500
              <span className="dn-tag bull">+1.89%</span>、JP225
              <span className="dn-tag bull">+5.16%</span>、NVDA
              <span className="dn-tag bull">+6.04%</span>、MSFT
              <span className="dn-tag bull">+4.22%</span>、TSLA
              <span className="dn-tag bull">+2.82%</span>、SILVER
              <span className="dn-tag bull">+13.29%</span>（领头）、PALL
              <span className="dn-tag bull">+9.44%</span>、GOLD
              <span className="dn-tag bull">+8.75%</span>、PLAT
              <span className="dn-tag bull">+7.67%</span>、URNM
              <span className="dn-tag bull">+7.16%</span>、COPPER
              <span className="dn-tag bull">+1.80%</span>；落后 GOOGL
              <span className="dn-tag bear">−4.31%</span>、AMZN
              <span className="dn-tag bear">−1.43%</span>。能源：CL
              <span className="dn-tag bull">+0.70%</span>、BRENT
              <span className="dn-tag bull">+2.66%</span>、NGAS
              <span className="dn-tag bull">+0.75%</span>。{' '}
              <span className="dn-em">
                BTC 对 TradFi 引擎的 7d 落后扩到约 −2.05pt（BTC +0.94% vs
                NQ +2.99%）、从 08-10 的 −1.92pt —— 缺口重开是因为 BTC 交回
                地盘而风险继续爬、是上一篇「因 BTC 守住而收窄」的镜像。
                内生于 crypto 仍是承重读法：在 |r| 0.211 盘面没在推 BTC、
                仓位与结构在推。
              </span>{' '}
              JGB 月度 2.67% 带一根 EXTREME RISK-OFF 月度标（陈旧 70d）——
              不依赖。
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · 本子 FLAT（scout 08-09 平、无新交易）· scout 再入场未触发 —— SM 腿触发（翻多）但守封顶腿失败（08-10 收盘丢封顶）· chase-short 仍站边、但案子变实（γ 腰斩、−13.71M $64k 墙贴现货、前 0DTE 负）—— 只在一根 flip/floor 丢时武装</span>
            </h2>

            <p>
              <span className="dn-signal">
                书是平的、继续平 —— scout 再入场的两条腿分了岔
              </span>
              。08-10 备忘把再入场卡在两条上——<em>SM net 再回平 ≥ −1k</em>
              AND <em>一根 1d 收守 &gt; D-EMA50 $64,661</em>、还带一根明确硬
              规则：「不要单靠价格再入场…仓位本子必须先再回平。」今天两条腿
              分了岔往错的方向：SM 腿<em>触发</em>了 —— 而且不止触发、SM 一路
              翻到 <span className="dn-tag bull">+2,947 净多</span>靠一根干净
              穿越 —— 但守封顶腿<em>失败</em>了、08-10 收 $63,939.30 丢了
              D-EMA50 封顶。现在再入场会是在一本翻多的仓位本子上进一根
              <em>破了</em>的封顶、正是上一篇警告那根假启动的反面（价格上、
              SM 仍空）。同一纪律照用：别单靠一条腿追。{' '}
              <span className="dn-em">
                所以 scout 继续递延、门现在更高了：再入场需要一根真的封顶
                RECLAIM（一根 1d 收回 &gt; D-EMA50 $64,597）且 SM 仍多 —— 不
                只是它已经有的那根 SM 翻。
              </span>{' '}
              chase-short <em>仍</em>站边 —— 现货守在 $63,481 flip 和 $63,761
              200W 地板上方、aggregate γ 仍净正（+45.9M）—— 但下行案子实质
              变硬：γ 腰斩、一根
              <span className="dn-tag bear">−13.71M $64k 墙</span>现在贴现货
              （dealer 在一根穿 $64k 的动里短 γ）、前 11AUG 0DTE 是
              <span className="dn-tag bear">−11.62M</span>、MTF regime 翻到
              reversal 带 8h/12h/1d 死叉。它没武装、但离一根真问题只差一根
              1d 收（穿 flip/floor）。
            </p>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout 再入场 · 递延 · SM 腿触发（翻净多）但守封顶腿失败（封顶丢）—— 门抬到一根封顶 RECLAIM</span>
              <div className="dn-trade-name">
                回补反弹 scout 再入场 —— 递延；仓位本子转多（SM +2,947）但价格在 08-10 收盘破了 D-EMA50 封顶、所以再入场现在需要一根封顶重夺、不只是那根 SM 翻
              </div>
              <div className="dn-thesis">
                偏多的线是真的、但不完整。SM 从 −3,405 翻到 +2,947 靠一根
                干净零轴穿越（不是那根搅浑 08-10 roll-back 的 BJ 15:01
                artifact）、一根重现货买盘在最后 4h 于 $63.8k–$64.0k 低吸收、
                funding 在 live 印上硬冷、HTF 底背离簇（12h/1w）熬过来了、
                1M ⚡TD9 BUY 还在。缺的是水位：08-10 收 $63,939.30 丢了
                D-EMA50 封顶、中书（8h/12h/1d）翻死叉、dealer 在 $64k 转短 γ。
                上一篇的纪律 —— 只在仓位本子 AND 封顶都同意时再入场 —— 现在
                切向反对再入场、因为封顶腿从过翻成不过、即便 SM 腿从不过
                翻成过。状态：<em>递延 / 无仓位</em>。scout 等封顶被 RECLAIM、
                且 SM 仍多。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">再武装触发（两腿）</span><span className="dn-lvl-v bull">1d 收回 &gt; D-EMA50 封顶 $64,597（一根真重夺、不只是盘中触）AND SM net 仍 &gt; +1k → scout long 0.2R starter</span></div>
                <div><span className="dn-lvl-k">scout 入场</span><span className="dn-lvl-v bull">两腿印出时、scout long 0.2R starter · 只在一根 1d 收延伸 &gt; 停滞的 $65,370 高、OI 在重堆时加 0.2R</span></div>
                <div><span className="dn-lvl-k">止损</span><span className="dn-lvl-v bear">1d 收 &lt; $63,481（0γ flip）/ $63,761（200W 地板）—— 一根收在下方结束消化读法、重开 chase-short</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">$66,763（D-EMA100）/ $67,087（W-EMA200）合流、然后 $67,594（D-SMA100）</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R starter · 0.4R max · 在 $66.8k–$67.1k 合流平半</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R（示例）：</b>再武装入场 ~$64,597（封顶重夺）、止损
                $63,481（flip）= ~$1,116 风险；首目标 $66,763（D-EMA100）=
                ~$2,166 回报 ≈ 1.9:1。<b>硬规则：</b>不要单靠 SM 翻再入场 ——
                一本翻多的仓位本子在一根破封顶下、是上一篇警告那根假启动
                （价格上、书空）的镜像。封顶必须先在一根收盘上被重夺；一根
                盘中弹到 $64.6k 而日线封顶仍丢是假启动（在水位真被重夺前、
                可能在空头挤压上尖刺）。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · chase-short · 仍站边 —— 现货在 flip/floor 上方、γ 净正 —— 但案子变硬（γ 腰斩、$64k 负墙、前 0DTE 负）</span>
              <div className="dn-trade-name">
                Chase-short —— 未武装、但比 08-10 更近：阻尼书变薄（γ +111.3M → +45.9M）、一根 −13.71M $64k 墙贴现货、前 11AUG 0DTE −11.62M；在一根 1d 收穿 flip/floor 时武装
              </div>
              <div className="dn-thesis">
                一根空侧压需要 dealer 本子丢掉它的净多 γ、且价格丢掉 flip /
                floor。两者都比 08-10 备忘近、但都没跨：aggregate GEX 是
                +45.9M（仍净正、但腰斩、且现货处有一根负 $64k 墙）、flip 坐
                $63,481、现货在上方 +0.73%、200W 周期地板（$63,761）在现货
                上方 +0.29%。SM 翻多其实切向反对这里做空 —— 仓位本子转多了
                —— 但结构性恶化（γ 腰斩、现货处负墙、前 0DTE 负、MTF reversal
                regime、封顶丢）意味着一根 1d 收穿 flip/floor 会很快武装这根
                压、朝 $60k −18.95M 崩盘 put 架。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">武装条件</span><span className="dn-lvl-v bear">1d 收 &lt; $63,481 flip / $63,761 200W 地板 AND aggregate GEX 翻负（$64k / $62k / $60k 负架把 aggregate 拉到零下）→ 武装空、朝 $60k −18.95M 崩盘 put</span></div>
                <div><span className="dn-lvl-k">地板盯位</span><span className="dn-lvl-v bull">200W sma200 $63,761（JSON recomputed 08-10 00:11Z、约 24h 陈旧、带过）—— 一根周收在下方结束周期地板读法；当前净上 +0.29%、下根周结算 08-16</span></div>
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">站边 · 现货守在 flip/floor 上方且 aggregate γ 净正时不做空 —— 但那根 −13.71M $64k 墙意味着一根破 $64k 会被 dealer 加速、不是被买</span></div>
              </div>
              <div className="dn-gating">
                <b>纪律：</b>书不再是 08-10 那根干净阻尼夹 —— dealer 在 $64k
                短 γ、一根往下穿 flip/floor 的动会被放大、不是被托。但空一根
                仍坐在 flip AND 周期地板上方、SM 又刚翻多的停滞、是过早；等
                水位在一根收盘上破。关键是那根 $64k 墙：如果现货在日线上丢
                它、且 aggregate 翻负、chase-short 就活了。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 重夺被证伪 · regime 从锚上方消化转到失败重夺测它的地板</span>
              <div className="dn-trade-name">
                重夺生命周期 —— 08-07 D-EMA50 重夺跑完了它的程：三根收的停滞、然后 08-10 收丢了封顶；读法现在是一根失败重夺在它的地板上、一根 SM 翻多作唯一背离
              </div>
              <div className="dn-thesis">
                谱系从 08-07 追的那根重夺 —— 三根走完的收在 D-EMA50 封顶
                上方 —— 现在被证伪：08-10 收 $63,939.30、在封顶下方、中书用
                新鲜 8h/12h/1d 死叉和一根翻到 6/9 reversal 的 regime 确认。
                这正是 08-10 备忘标为升级路径的那个形状（「一根 1d 收 &lt;
                D-EMA50、然后 &lt; flip / floor」）：首腿触发、次腿还没。唯一
                一根真反信号是 SM 翻到净多 +2,947 靠一根干净穿越、连同近低
                被吸收的现货买盘和熬过来的 HTF 底背离 —— 一本在结构翻滚里
                仍买破位的书。{' '}
                <span className="dn-em">
                  regime 读从锚上方消化转到失败重夺在它的地板。框架盯哪个
                  先解：SM 翻多 + 被吸收的买盘把价格拖回封顶上方、还是腰斩的
                  γ + 负 $64k 墙 + 翻滚的 MTF 拖一根收穿 flip/floor。
                </span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">被证伪</span><span className="dn-lvl-v bear">08-07 D-EMA50 重夺 —— 08-10 收 $63,939.30 在封顶 $64,597 下方；锚上方消化论结束</span></div>
                <div><span className="dn-lvl-k">反信号（唯一背离）</span><span className="dn-lvl-v bull">SM 翻 −3,405 → +2,947 净多、靠一根干净 BJ 00:41 穿越；4h 被吸收现货买盘 +2,429 CVD 在 $63.8k–$64.0k 低；HTF 底背离 12h/1w 熬过；1M ⚡TD9 BUY 还在</span></div>
                <div><span className="dn-lvl-k">结构性恶化</span><span className="dn-lvl-v bear">γ +111.3M → +45.9M、−13.71M $64k 墙贴现货、11AUG 0DTE −11.62M；MTF 8h/12h/1d 死叉、regime 6/9 reversal；OI −834/24h；perp 折价 −$70</span></div>
                <div><span className="dn-lvl-k">解析水位</span><span className="dn-lvl-v">上：1d 收 &gt; D-EMA50 $64,597（重夺、再武装 scout）· 下：1d 收 &lt; $63,481 flip / $63,761 地板（破位、武装 chase-short 朝 $60k）</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>一根被证伪的论点是信号、不是要护的东西 ——
                重夺跑完了、备忘直说。但一根守住它地板、仓位本子又在翻多的
                失败重夺、跟一根破位不一样；flip/floor 带（$63,761 / $63,481）
                是分「会再筑底的停滞」和「首个结构性破」的那条线。在那条线
                在一根收盘上解出来前、两边都不交易。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 封顶在 08-10 收盘破（论点证伪）但 flip/floor 带守住 · SM 翻净多进这根破位（背离）· scout 再入场现在需要一根封顶 RECLAIM · chase-short 只在一根 flip/floor 丢时武装</span>
            </h2>

            <p>
              08-10 那张决策条件里：认证的 SM roll-back-short
              <em>反转</em>了 —— SM 翻回净多 +2,947 靠一根干净穿越（08-10
              那根空本身是 artifact 穿的；今天这根多不是）；scout 再入场
              <em>没触发</em>（SM 再回平腿触发但守封顶腿失败 —— 08-10 收丢了
              封顶）；丢封顶升级<em>触发</em>（1d 收 $63,939.30 &lt; D-EMA50
              封顶、重夺的首个结构性破）；更深的 flip/floor 切<em>没触发</em>
              （收盘与现货守在 $63,481 flip 和 $63,761 200W 地板上方）；
              chase-short 再武装<em>没触发</em>（γ 仍 +45.9M 净正、现货在 flip
              上方）、虽然案子变硬；funding 再热<em>反转</em>（live 冷到
              +2.41% 离窗高、首根去杠杆腿）。<em>丢封顶条件干净触发、证伪了
              锚上方消化论；SM 翻了相反的向（净多）作背离；更深的 flip/floor
              破没触发；结构性背景 —— γ、MTF、那根 $64k 墙 —— 全面恶化。</em>
              条件围绕一本平书、一根丢的封顶、一根守的 flip/floor、和一本
              偏多但背离的仓位本子重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>封顶丢（触发 —— 首个结构性破）</td><td className="bear">1d 收 $63,939.30 &lt; D-EMA50 封顶（08-10 收时约 $64,660）；现货现在在封顶 $64,597 下方 −1.01%</td><td>锚上方消化论证伪；重夺生命周期结束 —— 备忘领着这根破、不护重夺</td></tr>
                <tr><td>SM 翻净多（背离）</td><td className="bull">SM net −3,405 → +2,947（long +3,440、short −2,912）靠一根干净 BJ 00:41 零轴穿越（非 BJ 14–15 artifact）、净多约 7h（BJ 03:05 后稳在 ~+2.6k–2.95k）</td><td>唯一一根偏多的结构性反信号；它把 scout 再入场的 SM 腿抬到已满足、但不单独触发入场</td></tr>
                <tr><td>Scout 再入场（多）—— 递延、门抬</td><td className="bull">1d 收回 &gt; D-EMA50 封顶 $64,597（重夺）AND SM net 仍 &gt; +1k</td><td>scout long 0.2R starter；只在一根 1d 收 &gt; $65,370、OI 重堆时加 0.2R；目标 $66,763 / $67,087</td></tr>
                <tr><td>flip / floor 破（结构性升级）</td><td className="bear">1d 收 &lt; $63,481（0γ flip）/ $63,761（200W 地板）</td><td>重夺底下的首个真破位；结束「失败重夺在它地板」读法、武装 chase-short 问题朝 $60k −18.95M 崩盘 put</td></tr>
                <tr><td>Chase-short 再武装（案子变硬、未武装）</td><td className="bear">1d 收 &lt; flip/floor AND aggregate GEX 翻负（$64k/$62k/$60k 架把它拉到零下）</td><td>武装空、朝 $60k 崩盘 put；那根 −13.71M $64k 墙意味着一根破 $64k 会被 dealer 加速 —— 基率对 08-10 升了、但触发没到</td></tr>
                <tr><td>funding 冷 / retail 拥挤（盯）</td><td className="bear">live funding +2.41%（24h 均值 +7.95%、0/1441 转负）；mkt_long 61.60%（+7.82pt）</td><td>无动作 —— live 冷却是建设性的线、但 retail 在破位里拥挤跌是逆向警戒；一根 funding 转负印 + retail 去拥挤会加强 scout 案子、如果它连同封顶重夺来</td></tr>
                <tr><td>reclaim-long 利率筛</td><td className="bear">10Y &lt; 4.55% 收 —— 在 4.65% FALSE（错侧 10bp、比 14bp 改善）</td><td>独立筛仍假但在松；scout 的宏观顺风需要 10Y 回到 4.55% 下</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是
              <span className="dn-signal">
                这根失败重夺是否从 flip/floor 再筑底（SM 翻多 + 被吸收的现货
                买盘 + 熬过来的 HTF 底背离把一根 1d 收拖回 D-EMA50 封顶 $64,597
                上方）、还是结构性恶化朝下解出来 —— 一根 1d 收丢 $63,481 flip
                / $63,761 200W 地板、它武装 chase-short 朝 $60k −18.95M 崩盘
                put、而 dealer 在 $64k 短 γ 加速这根动
              </span>
              。书是平的、继续平；scout 再入场递延、门抬到一根封顶重夺
              （单靠 SM 翻不够）；chase-short 站边、但离一根真问题只差一根
              收盘。从 08-07 跑的那根重夺被证伪了 —— 三根收的停滞然后一根收
              在封顶下 —— 结构恶化了（γ 腰斩、一根负 $64k 墙贴现货、中 MTF
              翻死叉、一根走宽的 perp 折价）。撑住它的又薄又真：现货仍在 flip
              和周期地板上方、SM 翻净多靠谱系最干净的一根穿越、一根现货买盘
              在低吸收。下一个 24h 的对读是<em>平、耐心 —— 在封顶于一根收盘
              上被重夺前不靠 SM 翻再入多、在 flip/floor 于一根收盘上破前
              不做空</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2（已过 codex 敌对式审计 · findings 记于 audits/2026-08-11-desk-note.md）
            </span>
            <b>状态：</b>v1 → v2 在 STAGE B codex 敌对但公允一遍后促进。判决
            PASS-WITH-NOTES —— 0 CRITICAL、1 MAJOR、1 MINOR；两条 findings 都
            在 EN+ZH 应用、并在促进前 grep-闭合到零残留。findings 及 grep-闭合
            记录（搜索模式 · 修前 → 修后命中）：{' '}
            <b>DN-001（MAJOR —— 周 MA 源范围被夸大）。</b>草稿称 parquet 源
            只有 190 根周 bar、且 W-SMA200 不可计算；声明的全 2019–2026
            wildcard parquet 重采样成 363 根 W-SUN 周 bar、所以 W-SMA200 可算、
            印 $63,984（−0.06% 对 live 现货 $63,944.50、基本贴现货）—— 经直接
            重算裁定、且每一根显示的 W-SMA（SMA20/50/100/150）本就精确匹配
            全历史均值。修正：把「190 根 / 不可计算」的主张全处清掉、把
            W-SMA200 $63,984（−0.06%）加进 lead、结构阶梯、数据来源与本痕迹的
            近现货簇里、并注明它与 trap-watch 周期地板 sma200 $63,761 不同
            （不同周口径）。搜索模式：「190 weekly bars」「190 bars」
            「non-computable / 不可计算」「needs 200」「computes at 190」；修前
            命中 5 → 修后 0。<b>已解决。</b>{' '}
            <b>DN-002（MINOR —— SM 稳定措辞夸大了持续时间与区间）。</b>盘面
            支持从 BJ 00:41 干净零轴穿越起净多约 7h、不是「stable ~+2,900–2,965
            for ~7h」—— checkpoints 是 +190.9（BJ 01:05）、+738.0（02:05）、
            +2,646.1（03:05）、+2,603.2（05:05）、+2,712.8（07:05）、+2,946.85
            （08:05）。修正：把每一处改写成「净多约 7h；BJ 03:05 后稳在
            ~+2.6k–2.95k；终值 +2,947」（dn-meta、第 I 节 prose、决策表）。
            搜索模式：「stable ~+2,900」「+2,965」「stable ~7h」「stable」；
            修前命中 3 → 修后 0。<b>已解决。</b>两条 findings 都已解决（修后
            命中 = 0）、无 UNRESOLVED 残留、故 v2 促进放行。审计者应重攻的
            自足算式：funding × 1095（live +2.41% ann 自原始 0.002203、24h 均值
            +7.95%、区间 +2.38% / +10.95%、0/1441 转负）；GEX 双参考符号（flip
            $63,481、现货 +0.73% / Deribit idx +1.18%、都正、tile 现货侧取
            +0.73%）；SM 翻（−3,405 → +2,947、long +3,440、short −2,912、Δnet
            +6,352）靠 BJ 00:41 08-11（16:41Z 08-10）干净零轴穿越 —— 非 BJ
            14–15 artifact —— 净多约 7h、BJ 02:41 那根 +1,365 单分钟步已披露、
            |Δ|/prior_net = 1.87 记为整翻而非 cut fraction；MA 矩阵对 live 现货
            $63,944.50、parquet 2026-08-11 00:06Z close $63,910.30（D-EMA50 封顶
            $64,597、现货下方 −1.01%；08-10 走完的收 $63,939.30 在封顶下 = 封顶
            丢；W-SMA200 自全 363 根 wildcard 源算 $63,984（−0.06%）；W-EMA150/200
            种子披露）；200W 地板第 6 根地板上方周收（08-09 $64,867.80 对
            sma200 $63,760.71、+1.74%；JSON recomputed 08-10 00:11:24Z、现约 24h
            陈旧、带过、无新周结算）；30D RV 28.15%（30 returns）；GEX aggregate
            腰斩（+111.3M → +45.9M）与负簇 $60k/$62k/$64k = −44.0M、$65k–$72k
            正带 ~+77M；11AUG 0DTE −11.62M 前块（08:00Z 结算、比快照晚约 8h、
            除 11AUG 后 ≈ +57.5M）；跨资产（|r| 0.211、BTC +0.94% vs NQ +2.99%
            = −2.05pt）；宏观 Tier-1（10Y 4.65% −4bp、TIPS 2.40%、HY OAS 2.70%
            −1bp、DXY 99.62、Fed 净流动性 $5.840T、MOVE 待定）；reclaim-long
            利率筛在 10bp 仍 FALSE；claims-vs-loaded-data（NTT / max-pain /
            strike-IV / BTC-NQ framework only；JGB 月度不依赖；IV 794 合约链
            中位数、不是可交易价差）；EN/ZH 平价（ZH 在 STAGE C 以原生中文
            向前写、同数字 + 同 caveats）；requireViewer gating 模式（默认导出
            首语句）。<b>Build note（INFO）：</b>谱系在 STAGE E 跑
            <code>npx --no-install next build</code> 作发布闸；STAGE A/C 用
            <code>npx --no-install tsc --noEmit</code> 校验。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体
            情况个性化。数字反映单一原子快照（2026-08-11 00:08Z、盘面锚
            00:05Z）、provenance 在数据来源条带中按节披露；宏观 Tier-1 面板
            渲染 2026-08-10 22:16Z（比快照早约 1.8h）、部分输入明确陈旧或
            待定（MOVE）并已标注。水位、规模与条件是交易台流程的示例、不是
            长期推荐。过去的相关性、γ 与仓位模式不绑定未来盘面。衍生品有
            全损风险、加杠杆下损失可超过保证金。
            <em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                重夺在 08-10 收盘丢了封顶、结构跟着翻滚。smart money 翻多
                进这根破位 —— 唯一背离。flip 与 floor 仍守。平、耐心：封顶
                被重夺前不做多、地板破前不做空。
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
            v2 · 2026-08-11 00:08Z 快照 · 已过 codex 敌对式审计
            （audits/2026-08-11-desk-note.md）· sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            ma200w_trap_watch_state.json · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
