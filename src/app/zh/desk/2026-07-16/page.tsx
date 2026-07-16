import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-07-16 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-07-16',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-07-16' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260716() {
  await requireViewer('/zh/desk/2026-07-16');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-07-16 · v2</span>
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
              <span className="dn-big">$64,823</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.31%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-07-16 00:05Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-07-16 00:05Z（snapshot pin，tape 行 t=&ldquo;07-16 08:05&rdquo; BJ）</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · 审计时文件 tail = pin · tape `t` 是 BJ
                    （UTC+8）；00:05Z = t &ldquo;07-16 08:05&rdquo; · 此快照落在
                    周一 07-13 00:00Z 周结算后 3 天 · 16JUL 0.3DTE 期权在 08:00Z
                    结算（快照前约 8h）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-07-16 00:01Z scan（BJ 08:01）</td>
                  <td className="dn-flag">
                    滚动 latest 文件（每小时重写）· 存档于
                    snapshots/2026-07-16-0006/ · 较快照锚滞后约 4 分钟 · 含未收盘
                    K 线
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-16 00:01Z 快照</td>
                  <td className="dn-flag">
                    存档于 snapshots/2026-07-16-0006/ · 852 合约 · Deribit idx
                    $65,025 对 live $64,823（高 $202）· 16JUL 0.3DTE +0.75M 今日
                    08:00Z 结算（快照前约 8h）· IV 中位数 41.8% 是 pre-16JUL-settle、
                    来自此 00:01Z 文件
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-16 00:01Z
                  </td>
                  <td className="dn-flag">存档于 snapshots/2026-07-16-0006/ · 7d 1h bar · 22 资产 · 167 rows</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-15 22:18Z 渲染</td>
                  <td className="dn-flag">
                    存档于 snapshots/2026-07-16-0006/ · 渲染滞后约 1.8h · FRED
                    Tier-1：10Y nominal 本次 FETCH-FAILED（利率筛/闸无法刷新 ——
                    沿用前值 4.56%、不依赖）、TIPS 2.33%、HY OAS 2.72%、MOVE 68.5
                    （−9.3 对 07-14）、DXY 100.50、Fed 净流动性 $5.958T · 5Y5Y BE
                    与 US-JP 利差也 fetch-failed
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-07-16 00:06Z</td>
                  <td className="dn-flag">
                    较快照锚晚约 1 分钟的 post-anchor 刷新（parquet 00:06Z bar
                    在 00:05Z live pin 之后一分钟、有意取作最新 MA/RV 口径、不是
                    锚前陈旧）· 偏移按现货重算 · 周线用 Binance W-MON 约定（周
                    收盘结算于周一 00:00Z）· 完整矩阵可算（359 根周 bar 跨 8 个
                    年度 parquet 2019–2026）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W-watch JSON</td>
                  <td className="dn-v-cell">weekly_200sma.json · 本次未生成</td>
                  <td className="dn-flag">
                    200W watch 不可用 —— 文件缺失；回落到矩阵 W-SMA200 $63,078
                    （不编造分位 / 上次事件）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED 月度 · IRLTLT01JPM156N</td>
                  <td className="dn-flag">陈旧 · 月度（75d）· 不作实时</td>
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
              <span className="dn-v">+2.80%</span>
              <span className="dn-src">live · 原始 0.002553 × 1095 = +2.80% · 从封顶解开 · 24h 均值 +7.69% · 封顶占用 664 / 1442 采样行 = 46.0%（24h+1m 事件窗：1,442 行、自 2026-07-15 08:04 BJ / 00:04Z、比精确 24h 基准早一分钟；窗口开在 +10.95% 封顶、随后一路解开）· 零负行 · 谷点 +2.31% ann @ 2026-07-15 18:05Z / BJ 07-16 02:05</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bull">+10.95% → +2.80%（−8.15pt、离顶解开）</span>
              <span className="dn-src">24h 区间 +2.31% / +10.95% · funding 在窗口开时坐在 +10.95% 封顶（07-14/07-15 被套多头的付费）、随 smart money 覆盖、拥挤多头付清而解到 +2.31% —— 杠杆压泄了气</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bull">−2.42%（−2,559 BTC）</span>
              <span className="dn-src">live · 103,013 BTC（对前值 105,572 BTC −2,559）· OI 跨窗口在缩 —— 空头覆盖把 gross 拉低、不是新鲜需求堆；07-14 的 +6,531 空头堆扩张的镜像</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v">54.15 / 45.85</span>
              <span className="dn-src">live_db `mkt_long_pct` · 从 64.84% 的 07-14 峰去拥挤 −10.69pt（24h 区间 53.40 / 55.57）—— 挤压覆盖时 retail 把最大多解开、回到一根轻度拥挤读、不是被套的极值</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−5,756（净 SHORT、覆盖了 24h 空的 74.8%）</span>
              <span className="dn-src">live · long 12,466 − short 18,222 · short 冲掉 −13,910、long +3,151 跨 24h —— 恢复最深空（窗口开时 −22,817）被碾过；净回向平、但进快照又在加</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 07-14 备忘</span>
              <span className="dn-v bull">−13,426 → −5,756（+7,670 覆盖、前值的 57.1%）</span>
              <span className="dn-src">|Δ|/prior_net = |−5,756 − (−13,426)| / 13,426 = 57.1% · 24h 覆盖比例 74.8% 离 −22,817 窗口开谷 · 一根离散 COVER 步 @ 2026-07-15 07:11Z / BJ 15:11（Δnet +17,888.7、同一分钟 Δlong +7,237.3 / Δshort −10,651.4）</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">41.8% / 33.48%</span>
              <span className="dn-src">GEX IV 中位数 · 852 合约（pre-16JUL-settle、来自 00:01Z 文件）· 是 N 合约链中位数、不是可交易价差 · 溢价 ~+8.3pt · RV 30D close-to-close 收益</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+5.35%（在上方）</span>
              <span className="dn-src">flip $61,532（前 $61,527 · +$5）· 对 live 现货 $64,822.82（+5.35%；64,822.82/61,532 − 1 = 5.35%）/ GEX 文件 Deribit idx $65,025（+5.68%；65,025/61,532 − 1 = 5.68%、文件取整 +5.7%）—— 两参考都正、缓冲从 +1.29% 重新拉宽 · aggregate GEX +175.1M 净多 γ（前 +37.7M —— 一根 +137.4M 重新点 γ、随现货拉约 $2,500）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                07-14 备忘点出的挤压点火了 —— 那根深空被碾过、但没有东西进来
                替补覆盖的燃料
              </span>
              。07-14 备忘把 scout 判成地板破位上的 VOID、并点名了对手交易：
              一本 −13,426 的 SM 空、进 retail 最大多、坐在 funding 封顶 ——
              若现货翻就是挤压燃料。现货翻了。价格重夺地板、拉到
              <span className="dn-tag bull">$65,552</span>、smart money 反而
              往里做得更狠、到一根恢复最深的
              <span className="dn-tag bear">−22,817 @ 窗口开</span>、然后被挤：
              SM 覆盖了
              <span className="dn-tag bull">24h 空的 74.8%（净 −22,817 →
              −5,756）</span>、在一根离散单分钟覆盖步
              <span className="dn-tag bull">@ 2026-07-15 07:11Z / BJ 15:11
              （Δnet +17,888.7、Δshort −10,651.4）</span>、funding 从
              <span className="dn-tag bull">+10.95% 封顶解到 +2.80%</span>
              （均值 +7.69%）、OI 缩
              <span className="dn-tag bull">−2,559 BTC（−2.42%）</span>、
              retail 去拥挤
              <span className="dn-tag bull">64.84% → 54.15%（−10.69pt）</span>。
              <span className="dn-tag bull">$63,078 W-SMA200 地板</span> 被
              决定性重夺 —— 两根完成的日收在其上方（07-14 $65,014.70、07-15
              $64,721.40）、07-13 那单根收在下方之后、07-16 未收盘 $64,761.00
              仍在其上、现货 $64,823 坐在上方 +2.77%。但覆盖是燃料、不是新鲜
              的现货需求基：
              <span className="dn-em">OI 随 gross 泄气在缩、最近 4h/1h 现货
              在 OI 仍漏时卖、SM 又进快照加回空（−2,467 → −5,756）</span>
              —— 记录在册的买家是一根覆盖的空、不是一根 bid。dealer 本子
              重新深点 γ
              <span className="dn-tag bull">+37.7M → +175.1M 净多 γ</span>
              （恢复里最深）、$64k–$72k 正墙带盖顶、strip 上无近端负放大器。
              MTF 引擎从 07-14 的 5/9「sell the bounce」滚到一根
              <span className="dn-tag">5/9 周期反转「bounce-favored」</span>
              读（3 多 / 2 空 / 5 中性）。scout 从 VOID 复活到
              <span className="dn-tag">DEFERRED</span> —— 它三根复活腿里的
              两根满足（地板重夺 AND SM 覆盖）、但第三根（现货 CVD 把 OI 拉
              上）失败、所以本子保持 FLAT：不 scout long 进一根把本子泄气的
              覆盖、不追空进一本无放大器的深正 γ 本子、不在一根盲的利率腿上
              加新对冲。
            </p>

            <p>
              BTC 报 <span className="dn-tag">$64,823</span> live、
              <span className="dn-tag bear">−0.31%</span> 在 24h —— 一根从
              区间顶部的浅回吐、整条带把地板牢牢守在其上 —— 在一条
              <span className="dn-tag">$65,552 / $64,485</span> live-tape
              现货区间里（高 @ 2026-07-15 13:22Z / BJ 21:22、低 @ 2026-07-15
              07:29Z / BJ 15:29、覆盖步后约 18 分钟）。
              <span className="dn-signal">重夺在收盘上是决定性的</span>：现货
              $64,823 坐在 $63,078 W-SMA200 地板上方 +2.77%、在结算口径
              W-SMA200 $62,852 上方 +3.14%、07-14 日收
              <span className="dn-tag bull">$65,014.70</span> 与 07-15 收
              <span className="dn-tag bull">$64,721.40</span> 是 07-13 那单根
              收在下方之后、头两根收回地板上方的日收、未收盘的 07-16 在
              parquet 最末 bar
              <span className="dn-tag bull">$64,761.00</span> 守在其上。
              未收盘的 07-13→07-19 周线在标
              <span className="dn-tag bull">$64,761.00（地板上方 +2.67%）</span>、
              而结算的周一 07-13 周收 $63,750.00 在结算口径地板 $62,852 上方
              +1.43% —— 谱系追的重新确认破位触发器完全 dis-armed、并向上结算。
              <span className="dn-em">
                地板在结算口径的收盘上守住、赌它破位的深空覆盖了 —— 但重夺
                跑在覆盖燃料和一本泄气的本子上、不是一根把 OI 拉上的新鲜 bid。
                这是地板上方的一根挤压覆盖、还不是需求确认的转向。
              </span>{' '}
              回补反弹 scout 的 07-14 复活条件 —— 一根 1d 收回地板上方 AND
              SM 覆盖 AND 现货 CVD 把 OI 拉上 —— 干净地满足两腿、失败第三腿、
              所以 scout 从 void 回到 deferred、仍卡在需求腿上。
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面 · 深空在一根离散单分钟冲刷上覆盖 74.8% · OI 缩 −2.42% · retail 从最大多去拥挤 · funding 离顶解开 · 现货买了覆盖、然后进漏 OI 卖掉最近 4h</span>
            </h2>

            <p>
              <span className="dn-signal">
                仓位本子冲掉了恢复里最深的空
              </span>
              。SM net 是 <span className="dn-tag">−5,756</span>、对 07-14
              备忘的 −13,426 —— 也就是
              <span className="dn-em">+7,670 覆盖、前值净的 57.1%</span>
              （|−5,756 − (−13,426)| / 13,426 = 57.1%）。但 24h 弧比 note-to-
              note 的差更大：空头先加深到一根恢复低
              <span className="dn-tag bear">−22,817 @ 2026-07-15 00:04Z
              （BJ 08:04）</span> —— 窗口开、整条恢复最深净空、印进 $65k 重夺
              —— 然后从那根谷覆盖 74.8%（|−5,756 − (−22,817)| / 22,817 =
              74.8%）。分量：long_btc
              <span className="dn-tag bull">9,315 → 12,466（+3,151）</span>、
              short_btc <span className="dn-tag bull">32,132 → 18,222
              （−13,910）</span> —— 空冲刷是多加的四倍多、一根真覆盖。离散
              签名印在单分钟里：
              <span className="dn-tag bull">2026-07-15 07:11Z（BJ 15:11）
              Δnet +17,888.7（Δlong +7,237.3、Δshort −10,651.4、现货
              $64,824）</span> —— 一根 re-stack-hostile-2 的反向、谱系里最大的
              单分钟覆盖、07-13 那根 −5,850 空头猛砸步的精确镜像。SM 到最少空
              <span className="dn-tag bull">−2,467 @ 2026-07-15 16:41Z（BJ
              07-16 00:41）</span>、然后进快照的最近约 7.4h 把空加回到 −5,756
              —— 一根温和的再做空、不是新鲜猛砸、但本子没保持平。
            </p>

            <p>
              <span className="dn-signal">
                杠杆侧确认的是泄气、不是新鲜压
              </span>
              。funding 是 live
              <span className="dn-tag bull">+2.80% ann</span>（原始 0.002553 ×
              1095）、从封顶解开：24h 窗
              <span className="dn-em">开</span>时钉在 +10.95% 封顶（07-14/
              07-15 结转的被套多头付费）、解到一根谷
              <span className="dn-tag bull">+2.31% ann @ 2026-07-15 18:05Z
              （BJ 07-16 02:05）</span>、进快照缓到 +2.80%。24h 均值 ann
              <span className="dn-tag">+7.69%</span>、封顶占用
              <span className="dn-tag">664 / 1442 采样行（46.0%、自 00:04Z
              的 24h+1m 事件窗）</span> —— 但那占用全在窗口前段；覆盖跑时封顶
              清空了。24h 零负行。OI Δ
              <span className="dn-tag bull">−2,559 BTC（−2.42%）</span> ——
              空头覆盖把 gross 拉低、07-14 +6,531 / +6.49% 空头堆扩张的精确
              镜像；这是去 gross、不是新鲜需求。retail
              <span className="dn-tag bull">mkt_long_pct 54.15%</span> 从
              64.84% 的 07-14 峰 —— 一根 −10.69pt 去拥挤、被套的最大多解开。
              perp 对现货在快照
              <span className="dn-tag bear">−$58.86 折价</span>（1h 均
              −$42.14、4h 均 −$40.89、24h 均 −$49.61、区间 −$312.32 / +$78.57
              —— 深 −$312 折价盘中印在覆盖上、但 basis 之后已firm 回近平）。
              1 分钟 aggressor skew 快照
              <span className="dn-tag bull">+15.2</span>（1h 均 −4.03、24h 均
              −7.19）—— 快照处一根温和买 aggressor tick、无单侧压。
              <span className="dn-em">
                funding 离顶 + OI 缩 + retail 去拥挤 + SM 覆盖 74.8%：驱动
                07-14 下腿的杠杆压完全泄气了。但一本泄气的本子不是一本在 bid
                的本子 —— 燃料走了、没有新鲜需求替补它。
              </span>
            </p>

            <p>
              窗口流向是<em>一根 24h 覆盖 bid、随 OI 继续漏而转成 4h/1h 现货
              offer</em>。24h：价格
              <span className="dn-tag bear">−0.31%</span>、OI
              <span className="dn-tag bull">−2,559 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +1,929</span>、期货 CVD
              <span className="dn-tag bull">Δ +1,371</span>、大单
              <span className="dn-tag bull">+2,788 BTC</span>、taker-net
              <span className="dn-tag bull">+1,344</span> ——
              <span className="dn-em">
                现货 AND 期货都在一根下落的 OI 里硬买；买盘是空头在覆盖回来、
                不是新鲜 gross 在加 —— CVD 上 OI 下是教科书覆盖签名、不是需求基
              </span>
              。4h（进快照）：价格
              <span className="dn-tag bear">−0.24%</span>、OI
              <span className="dn-tag bear">−424 BTC</span>、现货 CVD
              <span className="dn-tag bear">Δ −359</span>、期货 CVD
              <span className="dn-tag bear">Δ −120</span>、大单
              <span className="dn-tag bear">−171 BTC</span>、taker-net
              <span className="dn-tag bear">−113</span> ——
              <em>买家退了、现货在 OI 继续缩时 offer</em>。1h：价格
              <span className="dn-tag bear">−0.13%</span>、OI
              <span className="dn-tag bear">−109 BTC</span>、现货 CVD
              <span className="dn-tag bear">Δ −235</span>、期货 CVD
              <span className="dn-tag bear">Δ −174</span>、大单
              <span className="dn-tag bear">−208 BTC</span>、taker-net
              <span className="dn-tag bear">−218</span> ——
              <em>现货、期货、大单全在 OI 仍漏时 offer 进快照</em>。24h 覆盖
              bid 真且大、但最近两个窗显示本子在一根缩的 OI 里卖 —— 覆盖燃料
              跑完了、没有新鲜 bid 替补它。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 图 · 从 07-14 的「sell the bounce」滚到一根 5/9 周期反转「bounce-favored」读 · 新鲜 12h 水上 + 3d 水下金叉 · 1h &amp; 1M ⚡TD9 BUY · 高周期底背离簇（1d/3d/1w）对一组六根顶背离 · 地板在收盘上重夺</span>
            </h2>

            <p>
              <span className="dn-signal">
                MTF 引擎随覆盖跑而实质转建设性
              </span>
              。总计是
              <span className="dn-tag">3 多 / 2 空 / 5 中性</span> 跨 10 个 TF
              （07-14 是 1 多 / 8 空 / 1 中性）、净读
              <em>多 TF 偏空 · 短线反弹</em>、regime
              <span className="dn-tag">5/9 周期反转（JT&lt;0）—— 均值回归 /
              偏反弹</span>。两根新鲜中帧交叉在 2 根 bar 前印：一根
              <span className="dn-tag bull">12h 水上金叉（DIF +485.9、强）</span>
              与一根
              <span className="dn-tag bull">3d 水下金叉（DIF −3,198.2、
              早）</span> —— 引擎与周期帧都在抬。两根 ⚡ TD9 BUY 闪：
              <span className="dn-tag bull">1h ⚡TD9 BUY $64,740</span> 与
              <span className="dn-tag bull">1M ⚡TD9 BUY $64,751</span>。反转
              簇双侧：一组六根顶背离
              <span className="dn-tag bear">（15m/30m/1h/8h/12h/1d）</span> 盖
              快帧与中帧、对一根高周期底背离簇
              <span className="dn-tag bull">（1d/3d/1w）</span> 加 1M 看多常规
              背离（价 LL + 指标 HL）。RSI 全面抬：1h
              <span className="dn-tag">50.9</span>（回到中轴）、4h
              <span className="dn-tag bull">58.2</span>、8h
              <span className="dn-tag bull">58.1</span>、12h
              <span className="dn-tag bull">59.6</span> —— 中帧最强、快帧
              （15m 41.5、30m 43.7）与慢帧（1w 39.8）仍软。
              <span className="dn-em">
                直读：引擎从卖反弹翻到偏反弹 —— 12h 金叉、3d 金叉、1h &amp; 1M
                TD9 BUY、一根高周期底背离簇 —— 但快帧带一组顶背离簇、日线仍在
                它的云下（↑66.7k）。反弹在引擎上是真的；日线云和顶背离簇是需求
                确认的转向要清的东西。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">64,751</td><td className="num">41.5</td><td className="neut">死叉（水上）32b</td><td className="bear">云下 ↑65.0k 17b</td><td>Buy 4</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">64,751</td><td className="num">43.7</td><td className="neut">死叉（水上）14b</td><td className="neut">云内 63.9–64.8k 3b</td><td>Buy 6</td><td>BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">64,740</td><td className="num">50.9</td><td className="neut">死叉（水上）8b</td><td className="bull">云上 ↓63.9k 36b</td><td>⚡ TD9 BUY</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>4h</td><td className="num">64,751</td><td className="num bull">58.2</td><td className="bull">金叉（水下）9b</td><td className="bull">云上 ↓63.6k 9b</td><td>Sell 5</td><td>BEAR hid · BULL hid</td></tr>
                <tr><td>8h</td><td className="num">64,751</td><td className="num bull">58.1</td><td className="bull">金叉（水上）4b</td><td className="bull">云上 ↓62.1k 21b</td><td>Buy 2</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>12h</td><td className="num">64,751</td><td className="num bull">59.6</td><td className="bull">金叉（水上）2b</td><td className="bull">云上 ↓62.5k 4b</td><td>Sell 4</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>1d</td><td className="num">64,751</td><td className="num bull">55.2</td><td className="bull">金叉（水下）15b</td><td className="bear">云下 ↑66.7k 45b</td><td>Sell 3</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>3d</td><td className="num">64,751</td><td className="num">45.3</td><td className="bull">金叉（水下）2b</td><td className="bear">云下 ↑72.0k 15b</td><td>Sell 5</td><td>BULL reg</td></tr>
                <tr><td>1w</td><td className="num">64,751</td><td className="num">39.8</td><td className="bear">死叉（水下）3b</td><td className="bear">云下 ↑96.3k 24b</td><td>Sell 1</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">64,751</td><td className="num">44.2</td><td className="neut">—</td><td className="bull">云上 ↓47.0k 29b</td><td>⚡ TD9 BUY</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 00:01Z scan（BJ 08:01；滚动 latest
                    文件、逐字存档于 snapshots/2026-07-16-0006/）。头部告警：
                    <em>12h 水上金叉（2 bar 前、DIF +485.9）</em>、
                    <em>3d 水下金叉（2 bar 前、DIF −3,198.2）</em>、
                    <em>1h ⚡TD9 BUY $64,740</em>、<em>1M ⚡TD9 BUY $64,751</em>。
                    扫描现货 $64,740、24h −0.42%（00:01Z MTF 扫描；live-tape 头部
                    00:05Z 在同一 24h 窗读 −0.31% —— 4 分钟差与扫描自己的 24h
                    锚共同造成差异）、24h H/L $65,590 / $64,451（扫描自己基于 K 线
                    的 24h、来自它的 00:01Z 锚 —— 与正文引用的 live-tape 现货 24h
                    区间 $65,552 / $64,485 是不同来源、不是矛盾）、qVol $8.59B。
                    收盘为未收盘 K 线；每个值在各周期收盘前都按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵确认一根守住四条正线的重夺、头顶一道紧帽。现货 $64,823
              坐在一条堆叠支撑带上方：
              <span className="dn-tag bull">D-SMA50 $63,955（+1.36%）</span>
              最近在下、然后
              <span className="dn-tag bull">D-EMA20 $63,398（+2.25%）</span>、
              <span className="dn-tag bull">W-SMA200 地板 $63,078（+2.77%）</span>、
              与 <span className="dn-tag bull">D-SMA20 $62,525（+3.68%）</span>
              —— 自 07-13 地板破位以来首次有四条正的日/周线在现货下方。帽很紧：
              <span className="dn-tag bear">D-EMA50 $65,107（−0.44%）</span>
              只在头顶 $284 —— 恢复里最紧的头顶线、需求确认的重夺要清来验证的
              水平。之上全深：
              <span className="dn-tag bear">D-EMA100 $68,412（−5.25%）</span>
              是工作首目标、
              <span className="dn-tag bear">W-EMA200 seed $68,697（−5.64%）</span>、
              <span className="dn-tag bear">W-SMA20 $69,869（−7.22%）</span>、
              <span className="dn-tag bear">D-SMA150 $69,910（−7.28%）</span>、
              <span className="dn-tag bear">D-SMA100 $70,529（−8.09%）</span>、
              <span className="dn-tag bear">W-EMA20 $70,533（−8.10%）</span>、
              <span className="dn-tag bear">D-EMA150 $71,511（−9.35%）</span>、
              <span className="dn-tag bear">D-SMA200 $73,407（−11.69%）</span>、
              <span className="dn-tag bear">W-EMA150 $74,364（−12.83%）</span>、
              <span className="dn-tag bear">D-EMA200 $74,409（−12.88%）</span>、
              <span className="dn-tag bear">W-SMA150 $76,114（−14.83%）</span>。
              更高更远、已弃用：W-EMA50 $79,504（−18.47%）、W-EMA100 $79,655
              （−18.62%）、W-SMA50 $86,485（−25.05%）、W-SMA100 $88,488
              （−26.74%）。
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-07-16 00:06Z（close $64,761.00）；
                偏移按 live 现货 $64,822.82 重算。显示的 MA 水位按 $ 取整、偏移
                用精确序列值算。完整矩阵可算 —— 359 根周 bar 跨 2019–2026 给一根
                真 W-SMA200 $63,078 地板（现货 +2.77%）；W-EMA200 $68,697 是
                seed-disclosed（EMA 从可得历史起种）。日收：07-11 $63,783、07-12
                $63,750、07-13 $62,307（那单根收在地板下方）、07-14 $65,014.70、
                07-15 $64,721.40 —— 两根完成的日收回到 $63,078 地板上方、07-16
                （未收盘）$64,761.00 仍在其上。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子重新点 γ 到 +175.1M 净多 γ（恢复里最深）· flip $61,532、现货上方 +5.35% · $64k–$72k 正墙带盖顶 · $60k −13.75M 是唯一 top-10 负、托 fade · strip 上无近端负放大器</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子随现货从 07-14 低拉约 $2,500 而重新深点 γ
              </span>
              。aggregate GEX 是
              <span className="dn-tag bull">+175.1M / 1%</span>（07-14 是
              +37.7M —— 一根 +137.4M 重新点 γ、恢复里最深净多 γ）；本子在重度
              阻尼。0-γ flip 是
              <span className="dn-tag">$61,532（前 $61,527、+$5）</span>、现货
              $64,823 坐在
              <span className="dn-tag bull">flip 上方 +5.35%</span>（现货口径
              64,822.82 / 61,532 − 1 = +5.35%）；GEX 文件自己的「dist to flip」
              对它的 Deribit idx $65,025（比 live 现货高 $202）读 +5.7%、算
              <span className="dn-tag bull">+5.68%</span>（65,025 / 61,532 − 1 =
              +5.68%）—— 两参考都正、缓冲从 07-14 的 +1.29% 重新拉宽到一根舒服
              的边际。墙图是一根横跨整条近端行权价的正带：
              <span className="dn-tag bull">$70k +42.54M</span>（最重墙）、
              <span className="dn-tag bull">$66k +27.93M</span>、
              <span className="dn-tag bull">$65k +27.12M</span>、
              <span className="dn-tag bull">$72k +20.49M</span>、
              <span className="dn-tag bull">$68k +19.80M</span>、
              <span className="dn-tag bull">$64k +15.82M</span>、
              <span className="dn-tag bull">$67k +14.36M</span>、
              <span className="dn-tag bear">$60k −13.75M</span>（唯一 top-10 负、
              一根 crash-put 残余、托 fade）、
              <span className="dn-tag bull">$80k +9.78M</span>、
              <span className="dn-tag bull">$69k +6.35M</span>。
              <span className="dn-em">
                $64k–$72k 带合约约 +174M 正支撑 —— dealer 本子结构性地在 fade
                里 bid、在挤压里 offer、现货就坐在带最密的部分里。本子从这里
                双向都阻尼
              </span>
              。16JUL26 0.3DTE +0.75M 今日在 08:00Z print 结算（快照前约 8h）
              —— 一小块正、无 vol 事件。前向到期：17JUL 1.3 +49.15M、18JUL 2.3
              −0.70M、19JUL 3.3 +0.29M、24JUL 8.3 +22.82M、31JUL 15.3 +87.42M
              （最重、月度）、28AUG 43.3 +16.93M、25SEP 71.3 +3.86M、25DEC 162.3
              +3.80M、26MAR27 253.3 +1.11M、25JUN27 344.3 +0.57M。
              <span className="dn-em">
                strip 上没有近端负放大器存活 —— 07-14 那根 14JUL −4.40M 块结算
                了、没被替补；唯一的前向负是小小的 18JUL −0.70M。两个方向都没有
                挤压的 γ 燃料；驱动下腿的放大器结构性地没了
              </span>
              。
            </p>

            <p>
              IV 中位数横跨 852 合约是
              <span className="dn-tag">41.8%</span>（07-14 是 42.4% / 838 合约）
              对 30D close-to-close RV
              <span className="dn-tag">33.48%</span> —— 链级溢价
              <span className="dn-tag">~+8.3pt</span>（从 +12.4pt 降、RV 追上了
              两天的区间）。
              <span className="dn-em">
                披露：852 合约与 41.8% IV 中位数都是 pre-16JUL-settle 值、读自
                00:01Z GEX 文件；16JUL 0.3DTE +0.75M 块在 08:00Z 清（快照前约
                8h）、结算后的合约计与 IV 中位数本篇没重算
              </span>
              。是 N 合约的链中位数、<span className="dn-em">不是</span>可交易
              价差；expiry- / strike-level vega、skew、期限结构仍未载入、vol
              读法保持 framework only。Put/Call OI 比 0.51（Call OI 258,404 BTC
              / Put OI 131,676 BTC）。RV 方法：30D close-to-close、logret.std ×
              √365 × 100、用最末 30 根日 log return、锚自 parquet 最末 bar
              2026-07-16 00:06Z（29-return 另一口径读 33.46%；页面值 33.48% 用
              30 returns）。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · 10Y nominal 本次 FETCH-FAILED（利率筛/闸盲 —— 不依赖）· TIPS 2.33% EXTREME RISK-OFF · DXY 软到 100.50 · MOVE 崩 −9.3 到 68.5 松 · HY OAS 2.72% RISK-ON（距闸 6bp）· Fed 净流动性 $5.958T EXTREME RISK-ON · 跨资产松到 |r| 0.242 IDIOSYNCRATIC · BTC 7d +4.27% 现在领 NQ +3.46pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观盘面在美元和债波上放松、在信用与流动性上守松 —— 但利率腿
                本次是盲的
              </span>
              。面板渲染 2026-07-15 22:18Z、比快照早约 1.8h。US 10Y nominal
              <span className="dn-tag stale">FETCH-FAILED（不可用）</span> ——
              本次 FRED DGS10 拉取失败、所以
              <span className="dn-em">
                reclaim-long 利率筛（10Y &lt; 4.55%）与 put-spread re-grow 10Y
                腿（&gt; 4.53%）无法刷新；最后已知值是 07-14 的 4.56%（筛 FALSE、
                re-grow 腿 FIRED）、但那陈旧、不能依赖 —— 本 print 把利率闸当
                indeterminate
              </span>
              。10Y TIPS real
              <span className="dn-tag bear">2.33%（−3.0bp）</span>、regime z
              <span className="dn-tag bear">+2.76</span>、偶发 z
              <span className="dn-tag">+1.51</span> —— EXTREME RISK-OFF、当天
              最大的紧侧移动者。5Y5Y BE 通胀与 US-JP 10Y 利差也 fetch-failed。
              HY OAS
              <span className="dn-tag bull">2.72%（+3.0bp）</span>、regime z
              <span className="dn-tag bull">−1.06</span>、偶发 z
              <span className="dn-tag">−0.13</span> —— RISK-ON、在 2.78% re-grow
              闸下方 6bp。Chicago Fed NFCI
              <span className="dn-tag bull">−0.538（−0.01、周度）</span>、
              regime z
              <span className="dn-tag bull">−1.03</span>、偶发 z
              <span className="dn-tag bull">−1.92</span> —— RISK-ON。MOVE 债波
              <span className="dn-tag bull">68.5（−1.07 当日 · −9.3 对 07-14）</span>、
              regime z <span className="dn-tag bull">−0.57</span> —— 松、从 07-14
              的 77.8 崩下来是面板上最干净的 vol-cool。DXY
              <span className="dn-tag bull">100.50（−0.44 当日 · −0.78 对
              07-14）</span>、regime z
              <span className="dn-tag bear">+1.59</span> —— RISK-OFF 标但软了。
              Fed 净流动性
              <span className="dn-tag bull">$5.958T（+0.118T、周度）</span>、
              regime z <span className="dn-tag bull">+2.42</span>、偶发 z
              <span className="dn-tag bull">+2.47</span> —— EXTREME RISK-ON。
              <span className="dn-em">
                净：利率腿盲、可载入的宏观读是美元更软、债波崩、信用松（距
                re-grow 闸 6bp）、流动性极度 risk-on、TIPS 是唯一的极度 risk-off
                —— 一根对 BTC 要紧的线上净 risk-on 脉冲。但那根曾把关 scout 筛
                和对冲 re-grow 的利率闸、直到下一次成功的 DGS10 拉取前都是
                indeterminate
              </span>
              。BTC-对-TradFi 读反转了：BTC 7d +4.27% 现在领 NQ +0.81% +3.46pt
              —— BTC 是这个窗的风险领头、不是落后者。
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
                <tr><td>US 10Y nominal</td><td className="num stale">n/a</td><td className="num stale">fetch-failed</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">不可用 · 不依赖（前值 4.56%）</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.33%</td><td className="num bull">−3.0bp</td><td className="num bear">+2.76</td><td className="num">+1.51</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num stale">n/a</td><td className="num stale">fetch-failed</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">不可用</td></tr>
                <tr><td>HY OAS</td><td className="num">2.72%</td><td className="num bear">+3.0bp</td><td className="num bull">−1.06</td><td className="num">−0.13</td><td className="bull">RISK-ON · 距闸 6bp</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.538</td><td className="num">−0.01</td><td className="num bull">−1.03</td><td className="num bull">−1.92</td><td className="bull">RISK-ON · 周度</td></tr>
                <tr><td>MOVE 债波</td><td className="num">68.5</td><td className="num bull">−1.07</td><td className="num bull">−0.57</td><td className="num">−0.57</td><td className="bull">松 · −9.3 对 07-14</td></tr>
                <tr><td>DXY</td><td className="num">100.50</td><td className="num bull">−0.44</td><td className="num">+1.59</td><td className="num">−0.09</td><td className="bear">RISK-OFF · 软了</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.958T</td><td className="num bull">+0.118T</td><td className="num">+2.42</td><td className="num bull">+2.47</td><td className="bull">EXTREME RISK-ON</td></tr>
                <tr><td>USD/JPY</td><td className="num">162.23</td><td className="num bull">−0.20</td><td className="num bear">+1.50</td><td className="num">+0.99</td><td className="neut">无标</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num stale">n/a</td><td className="num stale">fetch-failed</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">不可用</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7624</td><td className="num bull">−0.02</td><td className="num bull">−1.49</td><td className="num bull">−1.21</td><td className="bull">无标 · 松</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">+13.5bp（月度）</td><td className="num bear">+2.56</td><td className="num">+1.43</td><td className="stale">月度（75d）· 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、汇总 00:01Z ——
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。非对角线
              均值 <span className="dn-tag">|r| 0.242</span>（从谱系的 ~0.315
              NORMAL 松开 —— 穿过 0.25 阈值、回到 IDIOSYNCRATIC 段）。BTC 的
              列出对齐：NQ
              <span className="dn-tag">+0.453</span>（最紧）、SP500
              <span className="dn-tag">+0.406</span>、SILVER
              <span className="dn-tag">+0.386</span>、TSLA
              <span className="dn-tag">+0.369</span>、GOLD
              <span className="dn-tag">+0.340</span>、URNM
              <span className="dn-tag">+0.312</span>、COPPER
              <span className="dn-tag">+0.269</span>、NVDA
              <span className="dn-tag">+0.261</span>。7d 相对表现：
              <span className="dn-tag bull">BTC +4.27%</span>（风险领头）、
              NQ <span className="dn-tag bull">+0.81%</span>、SP500
              <span className="dn-tag bull">+1.19%</span>、JP225
              <span className="dn-tag bear">−0.63%</span>、META
              <span className="dn-tag bull">+12.58%</span>（单名领头）、AMZN
              <span className="dn-tag bull">+4.94%</span>、AAPL
              <span className="dn-tag bull">+4.63%</span>、NVDA
              <span className="dn-tag bull">+3.83%</span>、MSFT
              <span className="dn-tag bull">+3.47%</span>、TSLA
              <span className="dn-tag bear">−0.06%</span>。金属混：GOLD
              <span className="dn-tag bear">−0.39%</span>、SILVER
              <span className="dn-tag bear">−0.87%</span>、PLAT
              <span className="dn-tag bull">+5.43%</span>、PALL
              <span className="dn-tag bull">+7.48%</span>、COPPER
              <span className="dn-tag bull">+4.26%</span>。能源强：CL
              <span className="dn-tag bull">+7.54%</span>、BRENT
              <span className="dn-tag bull">+6.96%</span>、NGAS
              <span className="dn-tag bear">−10.40%</span>。
              <span className="dn-em">
                BTC 的 7d 对 TradFi 引擎的领先是 +3.46pt（BTC +4.27% vs NQ
                +0.81%）—— BTC 靠自己的空头覆盖领这个窗的风险盘、相关性同时松到
                idiosyncratic。承重读法保持内生于 crypto：挤压覆盖是一根 BTC 内部
                事件、不是宏观驱动的；宏观脉冲净 risk-on、但利率闸盲
              </span>
              。JGB 月度 2.65% 带一根 EXTREME RISK-OFF 月度标（陈旧 75d）——
              不依赖。
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · 本子 FLAT · 07-14 挤压风险对手交易 FIRED · 回补反弹 scout 从 VOID 复活到 DEFERRED（3 根复活腿满足 2、需求质量腿未满足）· 不追空进一本无放大器的 +175.1M 正 γ 本子 · 不在一根盲利率腿上加新对冲</span>
            </h2>

            <p>
              <span className="dn-signal">
                昨天的对手交易印了、本子仍 FLAT
              </span>
              。07-14 备忘把 scout 判成地板破位上的 VOID、并明确点名挤压风险：
              一本 −13,426 SM 空、进 retail 最大多、坐在 funding 封顶、若现货翻
              就是挤压燃料。现货翻了、空加深到一根恢复低 −22,817 进 $65k 重夺、
              然后在一根离散单分钟冲刷上覆盖 74.8% —— 对手交易点火了。scout 的
              07-14 复活条件（一根 1d 收回地板上方 AND SM 覆盖 AND 现货 CVD 把
              OI 拉上）满足两腿 —— 地板在两根完成的日收上重夺（07-16 未收盘仍
              在其上）、SM 覆盖 74.8% —— 但失败第三腿：OI 随覆盖泄气而缩、最近
              4h/1h 现货卖、SM 又进快照加回空。所以 scout 从 void 回到
              <span className="dn-em">deferred</span>、仍卡在需求腿上。今天的
              交易本子是：不 scout long 进一根把 OI 拉下的覆盖、不追空进一本无
              放大器、现货在 flip 上方 +5.35% 的 +175.1M 正 γ 本子、不在利率腿
              盲时加新对冲 —— 等现货需求把 OI 拉上（新鲜 gross、不是一根空头
              覆盖把它拉下）、并等 D-EMA50 $65,107 重夺来验证。
            </p>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout · DEFERRED · 3 根复活腿满足 2（地板重夺 AND SM 覆盖）· 需求质量腿（CVD 把 OI 拉上）未满足</span>
              <div className="dn-trade-name">
                回补反弹 scout —— 从 void 复活到 deferred：价格前置条件重建、SM 覆盖了、但覆盖把本子泄气、而非一根 bid 把 OI 拉上
              </div>
              <div className="dn-thesis">
                scout 在 07-14 被判 VOID、当时价格前置条件（现货同时在 flip
                AND D-EMA20 AND D-SMA20 AND 地板 上方）破了、复活被设成从零重建：
                一根 1d 收回地板上方 AND SM 覆盖 AND 现货 CVD 把 OI 拉上。三腿
                里两腿干净满足 —— 地板在两根完成的日收上重夺（$65,014.70 /
                $64,721.40 对 $63,078、07-16 未收盘 $64,761.00 仍在其上）、SM
                覆盖了 24h 空的 74.8%（−22,817 → −5,756）—— 所以价格前置条件
                完全重建（现货在 flip $61,532、D-SMA20 $62,525、D-EMA20 $63,398
                AND 地板 $63,078 上方）。但第三腿失败：覆盖把 OI 拉下
                （−2,559 BTC）、最近 4h/1h 现货在 OI 仍漏时 offer、SM 又进快照
                加回空。记录在册的买家是一根覆盖的空在解开、不是一根加 gross
                的新鲜现货 bid。所以 scout 是 deferred、不是 live：需求质量腿
                —— 现货 CVD 把 OI 拉上、伴 SM 平-到-覆盖 —— 是那道闸、正如整条
                恢复它把关在需求基、不在价格。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">价格前置条件（重建、4/4）</span><span className="dn-lvl-v bull">现货 $64,823 &gt; flip $61,532 AND &gt; D-SMA20 $62,525 AND &gt; D-EMA20 $63,398 AND &gt; W-SMA200 地板 $63,078 —— 四腿门重新立起</span></div>
                <div><span className="dn-lvl-k">需求触发（未满足、那道闸）</span><span className="dn-lvl-v bear">现货 CVD 把 OI 拉上（新鲜 gross、不是空头覆盖拉下）AND 一根 1h/4h 收 &gt; D-EMA50 $65,107（最紧头顶线、+$284）AND SM 平-到-覆盖、不是在加</span></div>
                <div><span className="dn-lvl-k">scout 入场</span><span className="dn-lvl-v bull">在需求触发 print 上、scout long 0.2R —— 价格前置条件已重建；入场等需求质量、不等价格</span></div>
                <div><span className="dn-lvl-k">止损</span><span className="dn-lvl-v bear">1h 收 &lt; $63,078 W-SMA200 地板 —— 一根收回下方重新作废 scout、重开破位问题</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">$68,412（D-EMA100）先、然后 $69,870（W-SMA20 / D-SMA150 簇）</span></div>
                <div><span className="dn-lvl-k">不要</span><span className="dn-lvl-v bear">不 scout long 进一根把 OI 拉下的覆盖；一根 CVD 上 / OI 下读是覆盖、不是需求基 —— 覆盖跑完的那一刻它就能 fade</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R：</b>触发 ~$65,107（D-EMA50 重夺）、止损 $63,078（地板）
                = ~$2,029 风险；首目标 $68,412（D-EMA100）= ~$3,305 回报 ≈
                1.6:1。<b>硬规则：</b>需求腿必须是一根新鲜 gross 堆 —— 现货 CVD
                把 OI 拉上 —— 不是一根空头覆盖的尾巴。一根 CVD 上 / OI 下的
                print 是我们已经看过的覆盖；它是必要-非充分、能在空头买回完成的
                那一刻反转。scout 等 bid 在 OI 里现身、并等 D-EMA50 帽在收盘上清。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · dealer 本子重新点 γ 到 +175.1M 净多 γ · flip 在现货下方 +5.35% · strip 上无近端负放大器 · 不追空进一本深正 γ 本子</span>
              <div className="dn-trade-name">
                追空 —— 站到一边：本子重新点 γ 到恢复里最深净多 γ、无放大器燃料、而深空已经覆盖
              </div>
              <div className="dn-thesis">
                扛 07-14 下腿的空头案没了：深 SM 空（−13,426 → −22,817）覆盖了
                74.8%、funding 离顶、dealer 本子从 +37.7M 重新点 γ 到 +175.1M
                —— 恢复里最深净多 γ、一本阻尼每一根移动的本子。这里追空是晚进
                一本已覆盖的本子、在一根现货下方 +5.35% 的 flip 上方、在一根
                +174M 正墙带里、没有近端负放大器给重新破位供燃。唯一值得重新
                armed 的是一根新鲜 re-stack 签名（SM Δnet ≤ −5k 把净推回 −13k
                下方）AND 一根 1d 收回 $63,078 地板下方 —— 一根 07-13/07-14 setup
                的重建、不是这根重夺的 fade。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">无仓 · 不追空进一本正 γ flip 上方的已覆盖本子</span></div>
                <div><span className="dn-lvl-k">重新 armed 触发（重建）</span><span className="dn-lvl-v bear">新鲜 SM re-stack Δnet ≤ −5k 把净推 &lt; −13k AND 一根 1d 收 &lt; $63,078 地板 —— 整根破位 setup 重立、不是重夺的 fade</span></div>
                <div><span className="dn-lvl-k">挤压风险（已花掉）</span><span className="dn-lvl-v bull">曾是挤压燃料的 −22,817 空已覆盖 74.8%；驱动这根对手移动的燃料大体花掉、所以从这里一根新鲜多的空头覆盖顺风更少</span></div>
              </div>
              <div className="dn-gating">
                <b>纪律：</b>07-14 备忘旗标了这根精确的对手交易、它点火了；教训
                是对称的 —— 现在不追覆盖已跑过的多、也不做空覆盖已验证的重夺。
                一本无放大器的深正 γ 本子阻尼两个尾；edge 在 scout 的需求质量腿、
                不在压一根已花掉的移动。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 宏观尾 · 利率腿本次 BLIND（10Y fetch-failed）· HY OAS 距 re-grow 闸 6bp · 不滚</span>
              <div className="dn-trade-name">
                下行 put-spread —— 无仓、不滚：利率 re-grow 腿 indeterminate（10Y 不可用）、信用腿差 6bp
              </div>
              <div className="dn-thesis">
                宏观尾平、无新鲜触发。put-spread re-grow 闸是两腿的（HY OAS &gt;
                2.78% OR 10Y &gt; 4.53%）：HY OAS 是 2.72%、差 6bp；10Y 腿本次
                fetch-failed、所以它的状态（07-14 的 4.56% &gt; 4.53% FIRED）
                无法刷新、不能依赖。reclaim-long 利率筛（10Y &lt; 4.55%）同样盲
                —— 07-14 在 4.56% 读 FALSE、但今天无法确认。不滚、不加新对冲：
                本子 FLAT、现货在一根正 γ flip 上方 +5.35%、没有近端负放大器要
                对冲。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">无仓 · 不滚 · 不加新对冲</span></div>
                <div><span className="dn-lvl-k">re-grow 触发（下一根 Tier-1 print）</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% 收（当前 2.72%、差 6bp）OR 10Y &gt; 4.53% 收（INDETERMINATE —— 10Y fetch-failed；前值 4.56%）</span></div>
                <div><span className="dn-lvl-k">reclaim-long 利率筛</span><span className="dn-lvl-v stale">10Y &lt; 4.55% 收 —— 本次 INDETERMINATE（fetch-failed）；不依赖陈旧的 4.56%</span></div>
              </div>
              <div className="dn-gating">
                <b>注意：</b>re-grow 闸是酌情盯位、不是回测断点。10Y 腿盲、唯一
                可载入的 re-grow 读是 HY OAS 的 6bp 缓冲。一根新鲜对冲只有在一根
                近端负放大器重现在 strip 上 AND 一根地板破位重新 armed 时才有
                意义 —— 两者都不在。等一根成功的 DGS10 拉取、再把利率闸当 live
                的任一边。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 挤压周期 · 07-14 空头猛砸转成一根离散单分钟 COVER 冲刷 · 当独立信号读、无日历先验</span>
              <div className="dn-trade-name">
                挤压周期 —— 空头猛砸反转了：一根离散 +17,888.7 单分钟覆盖 @ BJ 15:11 冲掉了恢复里最深的空
              </div>
              <div className="dn-thesis">
                07-13/07-14 框架追一根新鲜空头堆、加速成一根 −5,850 单分钟空头
                猛砸。那根签名反转了：空头又加深一次到 −22,817 进 $65k 重夺、
                然后一根离散
                <span className="dn-tag bull">+17,888.7 单分钟覆盖步 @
                2026-07-15 07:11Z（BJ 15:11）</span>（Δlong +7,237.3、Δshort
                −10,651.4、现货 $64,824）冲掉了大部分 —— 谱系里最大的单分钟
                覆盖、空头猛砸的精确镜像。SM 到最少空 −2,467 @ 2026-07-15
                16:41Z（BJ 07-16 00:41）、然后温和加回到 −5,756 进快照。cadence
                框架保持被证伪（无日历先验）；re-stack / re-cover 签名 print 时
                仍作为独立 tape 读有意义。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">离散覆盖事件</span><span className="dn-lvl-v bull">+17,888.7 单分钟 Δnet @ 2026-07-15 07:11Z（BJ 15:11）· Δlong +7,237.3、Δshort −10,651.4 · 现货 $64,824 · 谱系里最大的单分钟覆盖</span></div>
                <div><span className="dn-lvl-k">SM 24h 弧</span><span className="dn-lvl-v">−22,817（窗口开谷 @ 07-15 00:04Z）→ −2,467（最少空 @ 07-15 16:41Z）→ −5,756（快照、进最近约 7.4h 加回）</span></div>
                <div><span className="dn-lvl-k">前向 gating</span><span className="dn-lvl-v">盯任何新鲜 Δnet ≤ −5k 作再做空信号（无日历先验）；一根现货 CVD 把 OI 拉上、伴 SM 平-到-覆盖的 print 是 scout 等的肯定需求基读</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>挤压周期读现在在四个 session 里印了空头猛砸和
                它的镜像覆盖两者 —— 把每根离散 Δnet ≥ ±5k print 当独立信号、
                不是 cadence。覆盖是这根反弹的燃料；当它花掉（进快照的再加暗示
                它在临近花掉）、下一腿由新鲜需求是否在 OI 里现身来决定、不是
                另一根覆盖。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 挤压风险对手交易 FIRED · 地板在收盘上重夺 · scout 为它的需求质量腿从 void 复活到 deferred · 本子保持 FLAT</span>
            </h2>

            <p>
              07-14 决策条件里：挤压风险对手交易
              <em>FIRED</em> 干净（−13,426 → −22,817 的 SM 空进 retail 最大多、
              随现货重夺地板覆盖 74.8%）；回补反弹 scout 的复活条件
              <em>满足三腿里的两腿</em>（地板在收盘上重夺 AND SM 覆盖）、
              <em>失败第三腿</em>（现货 CVD 把 OI 拉下、不是上）；新鲜 re-stack
              空头猛砸<em>反转</em>成一根离散覆盖冲刷；reclaim-long 利率筛本次
              <em>INDETERMINATE</em>（10Y fetch-failed）。<em>前一篇点名的对手
              交易精确点火、地板在结算口径的收盘上守住、scout 从 void 复活到
              deferred —— 但重夺跑在覆盖燃料和一本泄气的本子上、所以需求质量腿
              是那道闸、本子保持 FLAT。</em>今天的条件围绕一根重夺的地板、一本
              重新点 γ 的正本子、一根花掉的空头覆盖、和一根 deferred 的 scout
              重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>挤压风险对手交易（FIRED）</td><td className="bull">−22,817 SM 空随现货重夺地板、拉到 $65,552 而覆盖 74.8% —— 07-14 对手交易印了</td><td>不追覆盖已跑过的多、也不做空它验证的重夺；燃料大体花掉</td></tr>
                <tr><td>回补反弹 scout（多）—— DEFERRED</td><td className="bull">价格前置条件重建（4/4）AND SM 覆盖；需求质量腿未满足（CVD 把 OI 拉下）</td><td>scout long 0.2R 只在现货 CVD 把 OI 拉上 AND 一根收 &gt; D-EMA50 $65,107 AND SM 平-到-覆盖；目标 $68,412 然后 $69,870</td></tr>
                <tr><td>地板重新破位（重新作废）</td><td className="bear">1d 收 &lt; $63,078 W-SMA200 地板</td><td>重新作废 scout、重开破位问题；只在一根新鲜 re-stack 把净推 &lt; −13k 时重新 armed 空</td></tr>
                <tr><td>地板守 + γ 保持正</td><td className="bull">1d 收守 &gt; $63,078 AND aggregate GEX 保持正（strip 上无新鲜近端负放大器）</td><td>地板上方重夺读法守住；scout 不对称随需求在 OI 里确认而改善</td></tr>
                <tr><td>追空重新 armed（重建）</td><td className="bear">新鲜 SM re-stack Δnet ≤ −5k 把净推 &lt; −13k AND 一根 1d 收 &lt; $63,078</td><td>用一根 D-EMA50 $65,107 重夺的止损重新 armed 空；base rate 进一本无放大器的 +175.1M 正 γ 本子很低</td></tr>
                <tr><td>挤压周期（被证伪 cadence）</td><td className="stale">无日历先验；把每根离散 Δnet ≥ ±5k print 当独立信号</td><td>+17,888.7 覆盖 @ BJ 15:11 是 07-13 空头猛砸的镜像 —— 一根信号、不是 base rate</td></tr>
                <tr><td>宏观尾 re-grow</td><td className="bear">HY OAS &gt; 2.78%（差 6bp）OR 10Y &gt; 4.53%（INDETERMINATE —— 10Y fetch-failed）</td><td>不滚；唯一可载入腿是 HY OAS 的 6bp 缓冲 —— 等一根成功的 DGS10 拉取再把利率闸当 live</td></tr>
                <tr><td>reclaim-long 利率筛</td><td className="stale">10Y &lt; 4.55% 收 —— 本次 INDETERMINATE（fetch-failed；前值在 4.56% FALSE）</td><td>本 print 盲；不依赖陈旧值的任一边</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是
              <span className="dn-signal">
                新鲜现货需求是否进来、把 OI 拉回重夺地板上方 —— scout 卡在的
                需求质量腿 —— 还是花掉的空头覆盖让本子横向流血、随覆盖燃料跑完
                滑回 $63,078 地板。07-14 备忘旗标的挤压点火了；问题现在是一根
                bid 替补覆盖、还是这根重夺只是空头在出场
              </span>
              。在那之前本篇按写好的跑：本子 FLAT、回补反弹 scout 为它的需求
              质量腿 deferred（价格前置条件重建、入场卡在 CVD 把 OI 拉上和一根
              D-EMA50 重夺）、追空站到一边进一本无放大器的 +175.1M 正 γ 本子、
              宏观尾平带一根盲利率闸。地板在收盘上重夺、dealer 本子阻尼两个尾、
              赌地板的深空已覆盖 —— 下一个 24h 的对读是<em>耐心 —— 跑这根反弹
              的燃料近乎花掉；等 bid 在 OI 里现身、不是等另一根覆盖</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2（已过 codex 敌对式审计 · findings 记于 audits/2026-07-16-desk-note.md）
            </span>
            <b>状态：</b>v2 · 2026-07-16 00:05Z 快照（parquet MA/RV 口径 00:06Z）
            · <b>已过 codex 敌对式审计。</b>STAGE B codex 跨模型审计判决
            PASS-WITH-NOTES —— 0 CRITICAL、1 MAJOR、2 MINOR（codex 主）附一根
            ask-deepseek 补充数值二审（1 flagged CRITICAL、1 MAJOR、1 MINOR、
            STAGE C 逐条对源裁定后才动手）；findings 记于
            audits/2026-07-16-desk-note.md。STAGE C 应用了每一条 finding 并做了
            grep 闭合验证（在全 EN 文件上搜模式、每条 hits-after = 0）、之后才把
            v1 → v2：
            <br />
            <b>DN-001（MAJOR、把 07-16 未收盘 bar 当完成日收）：</b>模式
            <em>&ldquo;three daily closes&rdquo;</em> /
            <em>&ldquo;three consecutive&rdquo;</em> / 任何把未收盘 bar 数成
            完成收的语义变体 —— 修前命中 4 处正文（lead、structure-MA、trade-book
            正文、scout thesis）+ audit-trace 回声、每处改写成<em>两根完成的
            日收回到地板上方（07-14 $65,014.70、07-15 $64,721.40）、07-16 未收盘
            $64,761.00 仍在其上</em>（parquet 重算：最后完成收是 07-15
            $64,721.40；07-16 $64,761.00 是 00:06Z 未收盘 bar）；修后 0 ——
            RESOLVED。scout 复活腿仍有效（一根 1d 收在地板上方即足够、且有两根）。
            <br />
            <b>deepseek CRITICAL（24h H/L 冲突）：</b>对 live_db.json 精确 24h 窗
            重算裁定 —— 正文区间<em>$65,552 / $64,485</em> 是正确的 live-tape
            现货 24h 区间（现货高 $65,552.01 @ 07-15 21:22 BJ、现货低 $64,485.0
            @ 07-15 15:29 BJ）。MTF 扫描的<em>$65,590 / $64,451</em> 是
            mtf_div_latest.html artifact 自己基于 K 线、来自它单独 00:01Z 锚的
            24h（K 线 h/l $65,589.7 / $64,453.8）—— 一根不同的已披露来源、不是
            同一测量的矛盾；模式 <em>65,552</em>、<em>64,485</em>、
            <em>65,590</em>、<em>64,451</em>、两者现在都明确加标（正文 =
            「live-tape 现货区间」、MTF 注 =「扫描自己基于 K 线、来自 00:01Z 锚
            的 24h」）、带歧义无标含义的 hits-after 0 —— RESOLVED。
            <br />
            <b>deepseek MAJOR（日收精度）：</b>模式 <em>$65,015</em>、
            <em>$64,721</em>（裸）、<em>$64,761</em>（裸）—— 修前 3 处显示取整的
            $65,015 / $64,721；全部归一到精确 parquet 收 $65,014.70 / $64,721.40
            / $64,761.00 全文一致；裸取整形的 hits-after 0 —— RESOLVED。
            <br />
            <b>deepseek MINOR + codex-clean（SM 覆盖步 Δnet）：</b>模式
            <em>17,889</em>、<em>+7,237</em>、<em>−10,651</em> —— 所述净 +17,889
            不等于取整分量（7,237 + 10,651 = 17,888）；live_db 在 79242 行重算给
            精确步 Δnet +17,888.7（Δlong +7,237.3、Δshort −10,651.4）。全部 7 处
            （meta、lead、positioning、squeeze-cycle name/thesis/lvl/表、
            audit-trace）设成精确小数、令分量与净相符；<em>17,889</em> 的
            hits-after 0 —— RESOLVED。
            <br />
            <b>DN-002（MINOR、24h 窗差一分/一行）：</b>tape 用一根 1,442 行的
            24h+1m 事件窗、开在 2026-07-15 08:04 BJ / 00:04Z（比精确 08:05 基准
            早一分钟）；不重推每个 24h 值、而是在 funding-cap 与 tape 两处把窗
            明确加标为一根<em>自 00:04Z 的 24h+1m 事件窗</em>；模式 <em>1442</em>、
            <em>664 / 1442</em>、带无标「精确 24h」主张的 hits-after 0 ——
            RESOLVED（论点不变；codex 确认精确窗数字不改读法）。
            <br />
            <b>DN-003（MINOR、footer 锚）：</b>footer 从 <em>00:06Z snapshot</em>
            改成 <em>00:05Z snapshot · MA/RV parquet cut 00:06Z</em>、令 live-tape
            锚在前、锚后 parquet 口径分开；footer 里 <em>00:06Z snapshot</em> 的
            hits-after 0 —— RESOLVED。
            <br />
            全部 findings RESOLVED（grep hits-after = 0）。codex 核过并清除：
            requireViewer gating、JSX/markup 完整性（tsc exit 0）、live-tape 核心
            算式、funding × 1095、SM 覆盖比例（24h 74.8% 离 −22,817、note-to-note
            57.1% 对 −13,426）、flow 窗、MTF artifact、GEX/IV 面板（+175.1M、
            只 18JUL −0.70M 前向负）、MA/RV 算式（W-SMA200 地板 $63,078 +2.77%、
            D-EMA50 $65,107 −0.44% 帽、359 根周 bar）、宏观 Tier-1 fetch-failure
            旗标（利率闸 indeterminate、前值 4.56% 不依赖）与跨资产（|r| 0.242
            IDIOSYNCRATIC、BTC 7d +4.27% vs NQ +0.81% = +3.46pt）。快照 provenance
            与存档路径（snapshots/2026-07-16-0006/）记于上方数据来源条带。
            <b> v2 · 已过 codex 敌对式审计。</b>
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体情况
            个性化。数字反映单一原子快照（2026-07-16 00:05Z、live tape 行
            pin t=&ldquo;07-16 08:05&rdquo; BJ）、provenance 在数据来源条带中
            按节披露；宏观 Tier-1 面板渲染 2026-07-15 22:18Z（比快照早约 1.8h）、
            其中 10Y nominal、5Y5Y breakeven 与 US-JP 利差行明确 fetch-failed
            并已标注。水位、规模与条件是交易台流程的示例、不是长期推荐。过去的
            相关性、γ 与仓位模式不绑定未来盘面。衍生品有全损风险、加杠杆下损失
            可超过保证金。<em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                挤压点火、深空覆盖了。地板在收盘上守住。但覆盖把本子泄气、
                而非一根 bid 把 OI 拉上 —— scout 等需求、不等价格。耐心。
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
            v2 · 2026-07-16 00:05Z 快照 · MA/RV parquet 口径 00:06Z · 已过
            codex 敌对式审计 · sources: live_db.json · mtf_div_latest.html ·
            btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
