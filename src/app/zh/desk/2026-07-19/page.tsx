import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-07-19 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-07-19',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-07-19' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260719() {
  await requireViewer('/zh/desk/2026-07-19');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-07-19 · v2</span>
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
              <span className="dn-big">$64,839</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+1.46%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-07-19 00:08Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-07-19 00:08Z（snapshot pin · 行 t=&ldquo;07-19 08:08&rdquo; BJ）</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · 审计时文件 tail = pin · daily-update.timer
                    在 00:00Z 跑、快照晚 8 分钟取 · `t` 字段是 BJ 本地
                    （UTC+8）；00:08Z 锚即 BJ 08:08
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-07-19 00:01Z scan（BJ 08:01 头部）</td>
                  <td className="dn-flag">
                    滚动 latest 文件 · 逐字存档于
                    /opt/desk-note/snapshots/2026-07-19-0008/ · 较快照锚滞后约
                    7 分钟 · 含未收盘 K 线 · 每根收盘皆临时
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-19 00:00Z 快照</td>
                  <td className="dn-flag">
                    存档于 2026-07-19-0008 快照目录 · 874 合约 · Deribit idx
                    $65,082 对 live 现货 $64,839（高 $243）· 19JUL 0.3DTE
                    +10.17M 今日 08:00Z 结算（快照后约 8h）· aggregate 读自
                    HTML total（+194.2M）；gex_summary.json 同分钟读 +206.5M
                    （方法差、两者都深正）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-19 00:00Z
                  </td>
                  <td className="dn-flag">存档于 2026-07-19-0008 · 7d 1h bar · 22 资产 · 167 rows</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-18 22:16Z 渲染</td>
                  <td className="dn-flag">
                    存档于 2026-07-19-0008 · 渲染滞后约 1.9h · FRED Tier-1
                    本次渲染已刷新（10Y nominal 现 4.57%、一根实时印 —— 07-16
                    备忘带的是抓取失败的 4.56%）· TIPS 2.35% EXTREME · HY OAS
                    2.71% · DXY 100.75 · Fed 净流动性 $5.987T · Tier-3 CPI 行
                    月度/陈旧
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-07-19 00:06Z</td>
                  <td className="dn-flag">
                    较快照锚滞后约 2 分钟 · 偏移按 live 现货重算 ·
                    W-SMA150 / W-SMA200 不可计算（盘上 133 根周 bar）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W 周期地板（周 200-SMA）</td>
                  <td className="dn-v-cell">ma200w_trap_watch_state.json · recomputed 2026-07-13 00:11Z</td>
                  <td className="dn-flag">
                    runbook 的 weekly_200sma.json 本次 ABSENT · 地板读自维护中
                    的 trap-watch state = $62,851.69（上一根完整周 2026-07-12
                    收 $63,750、2 根连续周收在上方、streak 起点 07-05）·
                    ratio_pctile / last-event 不可得（那两个在 weekly_200sma.json
                    里）—— 非捏造 · 最近一次周度重算 2026-07-13T00:11:10Z
                    （内部 recomputed_at）；慢周度级别
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
              <span className="dn-v">+0.58%</span>
              <span className="dn-src">live · 原始 0.000533 × 1095 = +0.58% ann · 24h 均值 +5.52% · 封顶占用 0 / 1441 采样行 = 0.0%（无一行接近 +10.95% Binance 封顶；24h 最大 +9.85% ann @ 原始 0.008997）· 41 行转负、谷 −0.19% ann</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bull">离顶 · 区间 −0.19% / +9.85%</span>
              <span className="dn-src">07-16 备忘开在 +10.95% 封顶然后泄；这 24h 窗一次都没再触 · 24h 均值 +5.52% ann 往零泄进快照（+0.58%）· 杠杆门开宽到底</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bull">+1.26%（+1,261.7 BTC）</span>
              <span className="dn-src">live · 100,228 → 101,490 BTC · OI 扩张、现货 CVD 把它拉上去（+14,756 reset-adj）—— 07-16 缺席的那根需求质量信号（那天回补把 OI 拉下 −2,559）</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bull">59.15 / 40.85</span>
              <span className="dn-src">live_db `mkt_long_pct` · 从 60.85 → 59.15（−1.70pt）进上印 · 24h 区间 59.10 / 61.32 —— retail 拥挤多在松、不是在追</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−6.66k（净空、浅）</span>
              <span className="dn-src">live · long 14.16k − short 20.82k · 远浅于本轮谱系的深空（07-15 −22.8k、07-16 回补到 −5.76k）；SM 对这根印重加了一点空（short_btc 峰 21,284.5 @ 2026-07-18 17:21Z / BJ 01:21 07-19）</span>
            </div>
            <div>
              <span className="dn-k">SM Δ · 24h</span>
              <span className="dn-v bear">−6,177.9 → −6,657.2（Δnet −479.3、cut 7.8%）</span>
              <span className="dn-src">|Δ|/prior_net = 479.3 / 6,177.9 = 7.8% · Δlong +4.8 / Δshort +484.2 —— 一根轻空加、不是回补 · 24h 内无离散 SM 步 &gt;800 BTC（漂、不是重堆）· 对 07-16 备忘的 −5,756、本子约深 ~901 空</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">41.3% / 32.32%</span>
              <span className="dn-src">GEX IV 中位数 · 874 合约 · P/C 0.46 · 是 N 合约的链中位数、不是可交易价差 · 30D close-to-close RV 32.32%（logret.std×√365×100、30 returns、parquet 最末 bar 00:06Z）</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+4.95%（在上方）</span>
              <span className="dn-src">flip $61,782 · 对 live 现货 $64,838.85（+4.95%；64,838.85/61,782 − 1 = 4.948%）/ GEX 文件 Deribit idx $65,082（+5.34%；文件印 +5.3%）—— 两参考都正 · aggregate +194.2M 净多 γ、本轮谱系最深（07-16 是 +175.1M）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                07-16 备忘在等的那根需求质量腿终于印出来了 —— 现货买进、把
                OI 拉上去
              </span>
              。24h 现货 CVD 跑
              <span className="dn-tag bull">+14,756（reset-adjusted）</span>、
              OI 扩 <span className="dn-tag bull">+1,261.7 BTC（+1.26%）</span>
              在一根 <span className="dn-tag bull">+1.46%</span> 印上 —— 本轮
              谱系首根由需求抬 OI、而非回补空把 OI 拉下的上印（07-16 回补
              −10,651 空、OI 落 −2,559）。但门在其余几条腿上不干净。
              <span className="dn-signal">
                smart money 没保持平-到-回补 —— 它对这根强势轻微偏空
              </span>
              ：SM net 走
              <span className="dn-tag bear">−6,177.9 → −6,657.2（Δnet
              −479.3）</span>、Δshort <span className="dn-tag bear">+484.2</span>
              / Δlong <span className="dn-tag">+4.8</span>（cut 7.8%、无离散
              步）。快频闪出衰竭（30m/1h ⚡ TD9 SELL、RSI 79.2 / 78.8、顶背离
              簇 15m/8h/12h/1d）。reclaim-long 利率筛刚翻
              <span className="dn-tag bear">FALSE</span> —— 10Y 本次渲染刷新到
              <span className="dn-tag bear">4.57%</span>（07-16 备忘无法刷新
              的那根、当时抓取失败带 4.56%）、在 4.55% 闸上方。对空的一侧：
              dealer 本子 <span className="dn-tag bull">+194.2M</span> 净多 γ、
              本轮谱系最深、flip $61,782 现货
              <span className="dn-tag bull">+4.95%</span> 在上方、
              <span className="dn-em">无近端负放大器</span>（31JUL +124.86M
              主导整条 strip）、且 BTC 是相对强度领头 ——
              <span className="dn-tag bull">+1.57% 7d</span> 而 NQ 落 −4.47%
              （一根 +6.04pt 领先）。交易本子保持 FLAT：出价终于在 OI 里现身、
              但利率门关上、SM 对它偏空；在本轮谱系最深的正 γ 本子里、对着
              领跑 TradFi 的 BTC 追空是晚了。
            </p>

            <p>
              BTC 报 <span className="dn-tag">$64,839</span> live、
              <span className="dn-tag bull">+1.46%</span> 在 24h、在一条
              <span className="dn-tag">$64,856 / $63,887</span> live-tape 区间
              里（高 @ 2026-07-18 22:12Z / BJ 06:12 07-19、低 @ 2026-07-18
              01:04Z / BJ 09:04 07-18 —— MTF 扫描自己的 K 线口径 24h 读
              $64,837 / $63,860、另一个源、不是冲突）。
              <span className="dn-signal">周期地板在收盘口径上守住了</span>
              ：走完的 2026-07-12 周收
              <span className="dn-tag bull">$63,750</span> 坐在
              <span className="dn-tag">$62,851.69 W-SMA200</span> 地板上方
              +1.43%（2 根连续周收在上方、streak 起点 07-05）、日线收盘也
              连续六根在上方 —— 07-14
              <span className="dn-tag">$65,014.70</span>、07-15
              <span className="dn-tag">$64,721.40</span>、07-16
              <span className="dn-tag">$63,801.00</span>、07-17
              <span className="dn-tag">$63,909.90</span>、07-18
              <span className="dn-tag">$64,806.70</span>、未收盘的 07-19 收
              <span className="dn-tag">$64,818.10</span> —— 近期唯一一根收在
              地板下的是 07-13 $62,307。MA 矩阵在现货下方守四根正线（D-SMA20
              $63,165 +2.65%、D-SMA50 $63,389 +2.29%、D-EMA20 $63,627 +1.91%、
              地板 $62,852 +3.16%）、头顶第一根
              <span className="dn-tag bear">D-EMA50 $65,008（−0.26%）</span>
              只在上方 $169、作入场验证线、D-EMA100 $68,167（−4.88%）是首个
              工作目标。
              <span className="dn-em">
                地板已经不是问题了 —— 它已重夺、在周收盘上落定、价格前提
                （现货在 flip、D-EMA20、D-SMA20、地板上方）已建了好几天。本篇
                转在一个问题上：那根终于在 OI 里现身的买家、是不是记录在案的
                买家、还是 SM 偏空 + 利率门关 + 快频衰竭把 scout 再递延一节。
              </span>
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面 · 需求把 OI 拉上去（+1,262 BTC）在现货 CVD +14,756 上 · SM 轻微偏空（Δnet −479）· funding 整根离顶 · 无离散 SM 步</span>
            </h2>

            <p>
              <span className="dn-signal">
                本轮谱系首次、上印是需求驱动、不是回补驱动
              </span>
              。24h 窗（跨 2026-07-18 06:05Z / BJ 14:05 07-18 的 cb_cvd +
              fut_cvd reset 调整后、口径按 BJ 08:08→08:08 精确 pin）：价格
              <span className="dn-tag bull">+1.46%</span>、OI
              <span className="dn-tag bull">+1,262 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +14,756</span>、期货 CVD
              <span className="dn-tag bull">Δ +1,062</span>、大单
              <span className="dn-tag bull">+516 BTC / 508 笔</span>、
              taker-net <span className="dn-tag bull">+1,057</span> ——
              <span className="dn-em">现货领得狠、perp 温和跟、OI 扩进去</span>
              。这正是 07-16 备忘点名的那根缺席腿：07-16 那天回补把 OI 拉下
              −2,559 BTC（记录在案的买家是一根买回自己的空）；这里现货 CVD
              把 OI 拉上去、所以一根真实出价在进场、并带着未平仓量一起走。
              近端框架进快照时冷了一口：4h 价格
              <span className="dn-tag bull">+0.47%</span>、OI
              <span className="dn-tag bear">−106 BTC</span>、现货 CVD
              <span className="dn-tag">Δ +290</span>、期货 CVD
              <span className="dn-tag bear">Δ −695</span>、taker-net
              <span className="dn-tag bear">−695</span>；1h 价格
              <span className="dn-tag bull">+0.15%</span>、OI
              <span className="dn-tag bull">+353 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +325</span>、期货 CVD
              <span className="dn-tag bear">Δ −131</span>、taker-net
              <span className="dn-tag bear">−131</span> ——
              <em>现货还在出价、OI 还在最近一小时里建、而 perp 拿小利；
              出价没滚走、它轮到现货了</em>
              。
            </p>

            <p>
              <span className="dn-signal">
                但 smart money 没确认这根需求 —— 它对这根强势轻微偏空
              </span>
              。SM net 走
              <span className="dn-tag bear">−6,177.9 → −6,657.2</span> 跨 24h
              （Δnet −479.3）、分量说 Δlong
              <span className="dn-tag">+4.8</span> / Δshort
              <span className="dn-tag bear">+484.2</span> —— 平多上的一根小
              空加、cut fraction |−479.3| / 6,177.9 =
              <span className="dn-tag">7.8%</span>。这不是 07-14/07-15 那种深
              重空（那时 SM 空跑到 −22,817）、也不是回补；是一根浅倾斜。整个
              24h <span className="dn-em">无离散 SM 步 &gt; 800 BTC</span> ——
              本子在漂、不在踩步、SM net 谷在
              <span className="dn-tag bear">−6,916.4 @ 2026-07-18 17:51Z（BJ
              01:51 07-19）</span>、short_btc 峰
              <span className="dn-tag bear">21,284.5 @ 2026-07-18 17:21Z（BJ
              01:21 07-19）</span>、两者都大致在隔夜、都自那泄了一点进快照。
              对 07-16 备忘（SM 回补到 −5,756）、本子约深 ~901 空。所以需求
              质量门的两半分开了：
              <span className="dn-em">现货 CVD 把 OI 拉上去现在 TRUE；SM
              平-到-回补轻微 FALSE（一根 +484 空加）</span>
              。买家在盘面上是真的、但 SM 在褪它、不在加入它。
            </p>

            <p>
              杠杆侧背书这根需求读、且没有挤压签名。
              <span className="dn-signal">funding 整根离顶</span>
              ：live <span className="dn-tag">+0.58% ann</span>（原始 0.000533
              × 1095）、24h 均值
              <span className="dn-tag">+5.52%</span>、24h 区间
              <span className="dn-tag">−0.19% / +9.85%</span>、
              <span className="dn-tag bull">0 / 1441 采样行在 +10.95% Binance
              封顶（0.0%）</span> —— 24h 最大 +9.85% ann（原始 0.008997）从没
              触到 07-16 备忘开时钉的那道封顶、且
              <span className="dn-tag bull">41 行印负</span>（谷 −0.19% ann）。
              perp basis 守一根持续温和折价：快照
              <span className="dn-tag bear">−$30.38</span> 对现货、24h 均
              −$44.44、整窗从没守一根持续升水（24h 最大 +$8.42）。OI Δ
              <span className="dn-tag bull">+1,261.7 BTC（+1.26%）</span> ——
              一根扩张、当它伴现货 CVD 上时是建设性读。retail
              <span className="dn-tag">mkt_long_pct 59.15%</span> 从 60.85%
              —— 一根 −1.70pt 泄进上印（24h 区间 59.10 / 61.32）、是健康形状：
              retail 在上印里 de-crowding、不是在追。
              <span className="dn-em">
                funding 离顶且探负 + OI 在现货需求上扩 + retail 从拥挤多泄 +
                SM 只倾斜一根浅空：杠杆本子不在压也不在挤 —— 是一根现货领的
                抬升、SM 在边际上褪它。
              </span>
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 图 · 4h/8h/12h 全都刚水上金叉 · 快频闪 ⚡ TD9 SELL 超买 · 高周期底背离簇（1d/3d/1w）+ 持续 1M ⚡ TD9 BUY · regime 6/9 趋势延续</span>
            </h2>

            <p>
              <span className="dn-signal">
                引擎的框架在同一次扫描里全确认了这根反弹
              </span>
              ：4h 在 2 bar 前印一根水上金叉、8h 和 12h 都<em>刚印</em>水上
              金叉（8h DIF +287.3、12h +458.9 —— 都是水线上方的强叉、延续型）。
              这比 07-16 扫描（当时带 12h/3d 金叉 + 1h/1M ⚡ TD9 BUY）更深一层
              确认。MTF 引擎读
              <span className="dn-tag">4 多 / 2 空 / 4 中性</span> 跨 10 个 TF、
              净「高周期偏空 · 短线反弹」、regime
              <span className="dn-tag">6/9 cycle-momentum（JT ≥ 0）、趋势延续
              占优</span>。但快频在同一根抬升里闪出衰竭：
              <span className="dn-tag bear">⚡ TD9 SELL 在 30m 和 1h</span>
              （超买反转提示）、RSI 拉到
              <span className="dn-tag bear">79.2（30m）/ 78.8（1h）</span>、
              顶背离簇在 15m/8h/12h/1d。底下坐着建设性的高频集合：一根
              <span className="dn-tag bull">底背离簇在 1d/3d/1w</span> 和一根
              持续的
              <span className="dn-tag bull">1M ⚡ TD9 BUY $64,817</span>。
              <span className="dn-em">
                直读：引擎已把反弹确认三层深（4h/8h/12h 金叉）、高频带底背离
                + 月度买 setup、但快频正好在这里超买 —— 结构支持反弹在快频冷
                一口后延续、不是追这根 79-RSI 印。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">64,817</td><td className="num bull">66.4</td><td className="neut">死叉（水上）4b</td><td className="bull">云上 ↓64.2k 33b</td><td>Sell 4</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>30m</td><td className="num">64,813</td><td className="num bear">79.2</td><td className="bull">金叉（水上）15b</td><td className="bull">云上 ↓63.9k 59b</td><td>⚡ Sell 9</td><td>BEAR hid · BULL hid</td></tr>
                <tr><td>1h</td><td className="num">64,817</td><td className="num bear">78.8</td><td className="bull">金叉（水下）35b</td><td className="bull">云上 ↓63.8k 9b</td><td>⚡ Sell 9</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">64,817</td><td className="num">60.1</td><td className="bull">金叉（水上）2b</td><td className="bull">云上 ↓63.4k 9b</td><td>Sell 4</td><td>—</td></tr>
                <tr><td>8h</td><td className="num">64,817</td><td className="num">57.4</td><td className="bull">金叉（水上）刚印</td><td className="bull">云上 ↓62.6k 30b</td><td>Sell 4</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>12h</td><td className="num">64,817</td><td className="num">58.7</td><td className="bull">金叉（水上）刚印</td><td className="bull">云上 ↓62.5k 10b</td><td>Sell 2</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>1d</td><td className="num">64,817</td><td className="num">55.2</td><td className="bull">金叉（水下）18b</td><td className="bear">云下 ↑65.6k 48b</td><td>Sell 1</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>3d</td><td className="num">64,813</td><td className="num">45.4</td><td className="bull">金叉（水下）3b</td><td className="bear">云下 ↑73.6k 16b</td><td>Sell 6</td><td>BULL reg</td></tr>
                <tr><td>1w</td><td className="num">64,817</td><td className="num">39.9</td><td className="bear">死叉（水下）3b</td><td className="bear">云下 ↑96.3k 24b</td><td>Sell 1</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">64,817</td><td className="num">44.2</td><td className="neut">—</td><td className="bull">云上 ↓47.0k 29b</td><td>⚡ Buy 9</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 00:01Z scan（BJ 08:01 头部；滚动
                    latest 文件、逐字存档于
                    /opt/desk-note/snapshots/2026-07-19-0008/）。头部告警：
                    <em>4h 水上金叉（2b）、8h 水上金叉（刚印）、12h 水上金叉
                    （刚印）</em>；<em>⚡ TD9 SELL 30m/1h、⚡ TD9 BUY 1M</em>。
                    扫描现货 $64,817、24h +1.40%（00:01Z MTF 扫描；live-tape
                    头部 00:08Z 在同一 24h 窗读 +1.46% —— 7 分钟时间差导致
                    0.06pt 偏差）、24h H/L $64,837 / $63,860、qVol $3.16B。
                    收盘为未收盘 K 线；每个值在各周期收盘前都按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵读周期地板重夺、头顶一线封盖。现货 $64,838.85 坐在四根
              正线上方 ——
              <span className="dn-tag bull">D-SMA20 $63,165（+2.65%）</span>、
              <span className="dn-tag bull">D-SMA50 $63,389（+2.29%）</span>、
              <span className="dn-tag bull">D-EMA20 $63,627（+1.91%）</span>、
              和 <span className="dn-tag bull">W-SMA200 地板 $62,852
              （+3.16%）</span> —— 头顶第一根封盖紧贴在上：
              <span className="dn-tag bear">D-EMA50 $65,008（−0.26%）</span>、
              只在上方 $169。那根 D-EMA50 是入场验证线 —— 一根日收回它上方是
              「封盖下消化」和一根走向
              <span className="dn-tag bear">D-EMA100 $68,167（−4.88%）</span>
              （工作首目标）的真重夺腿之间的分野。其余头顶按顺序：
              <span className="dn-tag bear">D-SMA150 $69,855（−7.18%）</span>、
              <span className="dn-tag bear">W-SMA20 $69,872（−7.20%）</span>、
              <span className="dn-tag bear">D-SMA100 $70,298（−7.77%）</span>、
              <span className="dn-tag bear">W-EMA20 $70,538（−8.08%）</span>、
              <span className="dn-tag bear">D-EMA150 $71,224（−8.97%）</span>、
              <span className="dn-tag bear">W-EMA200 种子 $73,008（−11.19%）</span>、
              <span className="dn-tag bear">D-SMA200 $73,054（−11.25%）</span>、
              <span className="dn-tag bear">D-EMA200 $74,108（−12.51%）</span>。
              更高更远、已弃用：W-EMA150 种子 $76,910（−15.70%）、W-EMA50
              $79,569（−18.51%）、W-EMA100 $80,637（−19.59%）、W-SMA50
              $86,486（−25.03%）、W-SMA100 $88,488（−26.73%）。
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-07-19 00:06Z（close $64,818.10）；
                偏移按 live 现货 $64,838.85 重算。显示的 MA 水位按 $ 取整、
                偏移用精确序列值算。W-SMA150 / W-SMA200 从 parquet 不可计算
                （盘上 133 根周 bar、不够这两个窗）—— 周期地板 $62,851.69
                读自维护中的 ma200w_trap_watch_state.json（recomputed
                2026-07-13 00:11Z）、非捏造；W-EMA150 $76,910 与 W-EMA200
                $73,008 能显示是因为 EMA 从可用历史 seed、按种子披露。日线
                收盘：07-13 $62,307、07-14 $65,015、07-15 $64,721、07-16
                $63,801、07-17 $63,910、07-18 $64,807、07-19（未收盘）$64,818
                —— 连续六根收在 $62,852 地板上方。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子加深到 +194.2M 净多 γ（本轮谱系最深）· flip $61,782、现货 +4.95% 在上方 · 31JUL +124.86M 主导一条全正 strip · 无近端负放大器</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子深净多 γ、且更深了
              </span>
              。aggregate GEX 是
              <span className="dn-tag bull">+194.2M / 1%</span> 读自 btc_gex
              HTML（同分钟 gex_summary.json 读 +206.5M —— 一根方法差、两者都
              深正、都阻尼）、从 07-16 的 +175.1M 上来 —— 本轮谱系最深净多 γ。
              0-γ flip 是 <span className="dn-tag">$61,782</span>、现货 $64,839
              坐在 <span className="dn-tag bull">+4.95% 在上方</span>（现货口径
              64,838.85 / 61,782 − 1 = +4.948%）；GEX 文件自己的「dist to
              flip」读 +5.3%、对它的 Deribit idx $65,082（比 live 现货高 $243）
              算 <span className="dn-tag bull">+5.34%</span>（65,082 / 61,782
              − 1 = +5.342%）—— 两参考都正、现货在 flip 上方。墙图是一叠头顶
              正 strike：
              <span className="dn-tag bull">$70k +65.47M</span>（最重墙）、
              <span className="dn-tag bull">$72k +33.43M</span>、
              <span className="dn-tag bull">$66k +23.45M</span>、
              <span className="dn-tag bull">$68k +21.49M</span>、
              <span className="dn-tag bull">$65k +19.42M</span>（夹住现货的墙）、
              <span className="dn-tag bull">$67k +16.42M</span>、
              <span className="dn-tag bear">$60k −13.81M</span>（top-10 内唯一
              负、一根崩盘 put 残余在出价接跌）、
              <span className="dn-tag bull">$80k +9.88M</span>、
              <span className="dn-tag bull">$69k +6.60M</span>、
              <span className="dn-tag bull">$75k +5.94M</span>。
              <span className="dn-em">
                $65k–$72k 正带合计约 +180M 阻尼 γ 直压头顶 —— 本子结构性卖出
                挤压、买入回落、这正是为什么这里追空是晚、追这根 79-RSI 印的
                多被 $65k/$66k 墙卖掉
              </span>
              。按 expiry、strip 全正：19JUL 0.3DTE +10.17M 今日 08:00Z 结算
              （快照后约 8h）、24JUL 5.3 +31.89M、
              <span className="dn-tag bull">31JUL 12.3 +124.86M</span> 主导一切
              前向、然后 7AUG +5.40M、28AUG +18.13M、25SEP +4.32M、25DEC
              +3.91M、26MAR27 +0.99M、25JUN27 +0.57M。
              <span className="dn-em">没有一根前向 expiry 带负放大器</span>
              —— strip 上没有东西给下腿加油；31JUL +124.86M 那块是正 γ 磁铁、
              不是下行放大器。下腿的放大器时代结构性结束。
            </p>

            <p>
              IV 中位数横跨 874 合约是
              <span className="dn-tag">41.3%</span> 对 30D close-to-close RV
              <span className="dn-tag">32.32%</span> —— 链级溢价
              <span className="dn-tag">~+9.0pt</span>、比谱系低点更硬的 RV、
              随两周区间加宽。Put/Call OI 比率
              <span className="dn-tag">0.46</span>（128,394 put OI / 279,697
              call OI）—— call 重、与正 γ 墙叠一致。
              <span className="dn-em">
                是 N 合约的链中位数、不是可交易价差；expiry- / strike-level
                vega、skew、期限结构仍未载入、vol 读法保持 framework only
              </span>
              。RV 方法：30D close-to-close、logret.std × √365 × 100、用最末
              30 根日 log return、锚自 parquet 最末 bar 2026-07-19 00:06Z。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · 10Y 刷新到 4.57%（reclaim-long 利率筛现 FALSE）· TIPS 2.35% EXTREME · HY OAS 2.71%（距 re-grow 闸 7bp）· Fed 净流动性 $5.987T EXTREME RISK-ON · BTC 脱钩上、领 NQ +6.04pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观面分裂 —— 利率与美元紧 / risk-off、信用与流动性松 ——
                且 07-16 备忘无法刷新的那根利率腿回来了、活的、不友好
              </span>
              。面板渲染 2026-07-18 22:16Z、比快照早约 1.9h。US 10Y nominal
              <span className="dn-tag bear">4.57%（+2.0bp）</span>、regime z
              <span className="dn-tag bear">+1.93</span> —— RISK-OFF、且
              <span className="dn-em">在 4.55% reclaim-long 利率筛闸上方</span>
              ：07-16 备忘带 10Y 抓取失败的 4.56%、告诉读者不要依赖；本次渲染
              把它活印在 4.57%、所以利率筛现在 FALSE、且 put-spread re-grow
              的 10Y 腿（&gt; 4.53%）FIRED。10Y TIPS real
              <span className="dn-tag bear">2.35%（+3.0bp）</span>、regime z
              <span className="dn-tag bear">+2.80</span> —— EXTREME RISK-OFF、
              偶发 z +1.65。5Y5Y BE 通胀
              <span className="dn-tag">2.21%（+1.0bp）</span> —— 无标。HY OAS
              <span className="dn-tag bull">2.71%（0.0bp）</span>、regime z
              <span className="dn-tag bull">−1.11</span> —— RISK-ON、坐在距它
              2.78% re-grow 闸 7bp。MOVE 债波
              <span className="dn-tag">70.9（+1.33）</span> —— 中性。DXY
              <span className="dn-tag bear">100.75（+0.02）</span>、regime z
              <span className="dn-tag bear">+1.79</span> —— RISK-OFF、硬。Fed
              净流动性
              <span className="dn-tag bull">$5.987T（+0.025T）</span>、偶发 z
              <span className="dn-tag bull">+2.42</span> —— EXTREME RISK-ON、
              一根新周度建。NFCI −0.538 RISK-ON（陈旧 8d）。
              <span className="dn-em">
                净：put-spread re-grow 闸现在有一条腿 FIRED（10Y 4.57% &gt;
                4.53%）而 HY OAS 腿仍距 7bp 在 2.71% —— 一根单腿点火、不是一根
                新对冲需要的两腿确认；且 reclaim-long 利率筛翻 FALSE、是对 scout
                long 的一根真实逆风。抵消读是流动性：Fed 净流动性在 EXTREME
                RISK-ON +2.42 偶发。
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
                <tr><td>US 10Y nominal</td><td className="num">4.57%</td><td className="num bear">+2.0bp</td><td className="num bear">+1.93</td><td className="num">+1.17</td><td className="bear">紧 · RISK-OFF · 筛现 FALSE</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.35%</td><td className="num bear">+3.0bp</td><td className="num bear">+2.80</td><td className="num bear">+1.65</td><td className="bear">EXTREME RISK-OFF（偶发）</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.21%</td><td className="num">+1.0bp</td><td className="num">−0.21</td><td className="num">+0.03</td><td className="neut">无标</td></tr>
                <tr><td>HY OAS</td><td className="num">2.71%</td><td className="num">0.0bp</td><td className="num bull">−1.11</td><td className="num">−0.28</td><td className="bull">松 · RISK-ON · 距闸 7bp</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.538</td><td className="num">−0.01</td><td className="num bull">−1.03</td><td className="num bull">−1.92</td><td className="stale">RISK-ON · 陈旧 8d</td></tr>
                <tr><td>MOVE 债波</td><td className="num">70.9</td><td className="num bear">+1.33</td><td className="num">−0.33</td><td className="num">+0.18</td><td className="neut">中性</td></tr>
                <tr><td>DXY</td><td className="num">100.75</td><td className="num bear">+0.02</td><td className="num bear">+1.79</td><td className="num">+0.15</td><td className="bear">硬 · RISK-OFF</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.987T</td><td className="num bull">+0.025T</td><td className="num bull">+2.34</td><td className="num bull">+2.42</td><td className="bull">EXTREME RISK-ON · 新建</td></tr>
                <tr><td>USD/JPY</td><td className="num">162.35</td><td className="num">−0.02</td><td className="num bear">+1.50</td><td className="num">+0.96</td><td className="neut">无标</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">1.90%</td><td className="num">+2.0bp</td><td className="num bull">−0.73</td><td className="num">+1.17</td><td className="neut">紧</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7677</td><td className="num">−0.00</td><td className="num bull">−1.42</td><td className="num bull">−0.86</td><td className="neut">无标 · 松</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp（月度）</td><td className="num bear">+2.42</td><td className="num">+1.09</td><td className="stale">月度 · 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、汇总 00:00Z ——
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。
              非对角线均值 <span className="dn-tag">|r| 0.217</span> ——
              IDIOSYNCRATIC（在 0.25 阈值下方）、crypto 内生 regime 守住。BTC
              列出的对齐：NQ <span className="dn-tag">+0.427</span>（首）、
              SILVER <span className="dn-tag">+0.377</span>、SP500
              <span className="dn-tag">+0.350</span>、GOLD
              <span className="dn-tag">+0.341</span>、PALL
              <span className="dn-tag">+0.287</span>、TSLA
              <span className="dn-tag">+0.284</span>、JP225
              <span className="dn-tag">+0.272</span>、NVDA
              <span className="dn-tag">+0.265</span>、PLAT
              <span className="dn-tag">+0.263</span>。7d 表现是故事：
              <span className="dn-tag bull">BTC +1.57%</span> 而 TradFi 引擎
              抛售 —— NQ <span className="dn-tag bear">−4.47%</span>、SP500
              <span className="dn-tag bear">−1.58%</span>、JP225
              <span className="dn-tag bear">−3.49%</span>、NVDA
              <span className="dn-tag bear">−3.03%</span>、META
              <span className="dn-tag bear">−4.23%</span>、TSLA
              <span className="dn-tag bear">−6.44%</span>；指数里只有 AAPL
              <span className="dn-tag bull">+6.34%</span> 和 MSFT
              <span className="dn-tag bull">+3.27%</span> 撑住。金属软（GOLD
              −2.22%、SILVER −6.25%、PLAT −1.91%）、能源跑（CL
              <span className="dn-tag bull">+13.16%</span>、BRENT
              <span className="dn-tag bull">+12.42%</span>）。
              <span className="dn-em">
                BTC 是自己风险簇本 7d 的相对强度领头 —— +1.57% 而 NQ 落
                −4.47%、一根 +6.04pt 领先（07-16 备忘这根领先塌到 +0.01pt）。
                BTC 脱钩上：它在自己的需求上抬、而宏观引擎翻倒。这是不追空的
                第二个、独立的理由 —— 你会在一个正 γ dealer 本子里、对着复合
                体里最强的资产做空
              </span>
              。JGB 月度 2.67% 带 EXTREME RISK-OFF 月度标 —— 不依赖。
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · 需求质量 scout LONG 递延（OI-up 腿 TRUE、SM-cover 腿 FALSE、利率筛 FALSE、快频超买）· 追空 STOOD DOWN（本轮谱系最深正 γ、BTC 是 RS 领头）· 宏观尾单腿点火、无新对冲 · 本子 FLAT</span>
            </h2>

            <p>
              <span className="dn-signal">
                缺席的那根腿终于印出来了、交易本子仍保持平 —— 为三个具体
                理由、不是一个
              </span>
              。07-16 scout 挂在一根需求质量触发上：现货 CVD 把 OI 拉上去、
              SM 平-到-回补。那一半现在 TRUE（现货 CVD +14,756 把 OI 拉
              +1,262 BTC）、但 SM 那一半轻微 FALSE（SM 加 +484 空、net −479
              更深）、reclaim-long 利率筛在 10Y 4.57% 翻 FALSE、快频在 79-RSI
              印 ⚡ TD9 SELL。所以 scout 不触发 —— 但它比过去更近了、递延的
              理由从「OI 里没出价」变成「出价现身但 SM 在褪它、利率门关上、
              近端盘面超买」。另一侧、追空在本轮谱系最深正 γ 本子里晚了
              （+194.2M、无近端负放大器）、且 BTC 是它风险簇的相对强度领头。
              今天的本子是：无 scout long、无追空、无对单腿利率点火的新对冲
              —— 对确认印耐心。
            </p>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout · 递延 · 需求质量 OI-up 腿 TRUE、SM-cover 腿 + 利率筛 FALSE、快频超买</span>
              <div className="dn-trade-name">
                需求质量 scout —— OI-up 腿终于点火（现货 CVD +14,756 把 OI 拉 +1,262 BTC）、但 SM 偏空（+484）、利率筛翻 FALSE（10Y 4.57%）、30m/1h 在 79-RSI ⚡ TD9 SELL
              </div>
              <div className="dn-thesis">
                07-16 备忘设的需求质量触发 —— 现货 CVD 把 OI 拉上去、SM 平-到-
                回补 —— 本轮谱系首次其 OI-up 那半满足了：这根 24h 上印是现货领
                （现货 CVD +14,756）、OI 扩 +1,262 BTC 进去、不是 07-16 那根把
                OI 拉下 −2,559 的回补空。价格前提建得很好（现货在 flip、
                D-EMA20、D-SMA20、地板上方 —— 四根都好几天）。但确认腿不全绿：
                (1) SM 没保持平-到-回补、它加了一根浅 +484 空（net −479 更深、
                cut 7.8%）；(2) reclaim-long 利率筛（10Y &lt; 4.55%）在刷新的
                4.57% 翻 FALSE；(3) 快频闪 ⚡ TD9 SELL 在 RSI 79.2 / 78.8。有
                纪律的入场等：利率筛回 4.55% 下方、OR SM 翻平-到-回补且 OI 仍
                扩、最好在一根日收回 D-EMA50 $65,008 封盖上方。状态：
                <em>递延、比 07-16 更近</em>。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">触发（两腿必到）</span><span className="dn-lvl-v bull">1h 收 &gt; $65,008（D-EMA50 重夺、入场验证封盖）AND SM 平-到-回补（4h 内 Δshort ≤ 0）且 OI 仍扩 —— 同时 10Y &lt; 4.55% OR 上收伴 SM 回补</span></div>
                <div><span className="dn-lvl-k">scout 入场</span><span className="dn-lvl-v bull">触发印出时、scout long 0.2R · 需求基现在是真的、门是封盖重夺 + SM 确认</span></div>
                <div><span className="dn-lvl-k">止损</span><span className="dn-lvl-v bear">1h 收 &lt; $62,852（W-SMA200 周期地板 —— 一根收在下方结束重夺读）</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">$68,167（D-EMA100 首目标）然后 $69,855 / $69,872（D-SMA150 / W-SMA20 簇）</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R · 在 D-EMA100 平半</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R：</b>触发 ~$65,008（D-EMA50）、止损 $62,852（地板）=
                ~$2,156 风险；首目标 $68,167 = ~$3,159 回报 ≈ 1.47:1。
                <b> 硬规则：</b>不要在需求腿单独上 scout-long —— 一根现货领的
                OI 扩、被 SM 空-褪、在一根 79-RSI 快频、进 $65k/$66k 正墙、会
                被卖掉。两腿触发（D-EMA50 重夺 + SM 确认）是把真重夺和一根
                进墙的褪分开的东西。利率筛在 4.57% FALSE 是酌情逆风、不是硬
                封 —— 但它为 SM-cover 腿作不可谈判的确认背书。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">空 · STOOD DOWN · 本轮谱系最深正 γ · 无放大器 · BTC 是 RS 领头</span>
              <div className="dn-trade-name">
                追空 —— 站开：+194.2M 净多 γ（本轮谱系最深）、一条全正 expiry strip、BTC 领 NQ +6.04pt
              </div>
              <div className="dn-thesis">
                这里做空是同时打三个结构性事实。dealer 本子 +194.2M 净多 γ
                （阻尼）、本轮谱系最深、flip $61,782、现货 +4.95% 在上方 ——
                一个正 γ 本子在挤压里被卖出、但 strip 上没有一块负 γ 给下腿
                加油（31JUL +124.86M 是正磁铁、19JUL 0.3DTE +10.17M 今日
                08:00Z 无害结算）。BTC 是它风险簇的相对强度领头（+1.57% 7d
                而 NQ 落 −4.47%）、所以一根空在褪复合体里最强的资产。且 SM 的
                空是浅的（−6,657 net、远离 −22,817 谱系深）—— 没有深空解仓可
                骑下。状态：<em>站开</em>。唯一会重武装的空是一根结构性破位、
                不是一根褪。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">重武装触发（未激活）</span><span className="dn-lvl-v bear">1d 收 &lt; $62,852（W-SMA200 地板）AND strip 上出现一块新近端负 γ —— 两者都不在</span></div>
                <div><span className="dn-lvl-k">不要</span><span className="dn-lvl-v bear">不要在一个 +194.2M 正 γ 本子里追空、BTC 领 TradFi、SM 已浅空</span></div>
              </div>
              <div className="dn-gating">
                <b>站开。</b>下腿的放大器时代结束了 —— strip 整轮谱系没带一块
                近端负放大器、dealer 本子只加深了它的正 γ。一根空需要周期地板
                在日收上破 AND 一块负 γ 出现；褪一个正 γ、RS 领头的盘面不是
                一笔交易。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 宏观尾 · put-spread re-grow 闸 —— 单腿点火（10Y）、无新对冲</span>
              <div className="dn-trade-name">
                下行 put-spread —— 不 re-grow：10Y 腿点火（4.57% &gt; 4.53%）但 HY OAS 腿距 7bp；一根单腿点火不是一根新对冲需要的两腿确认
              </div>
              <div className="dn-thesis">
                put-spread re-grow 闸是两腿、两腿都必到：HY OAS &gt; 2.78% AND
                10Y &gt; 4.53%。本次渲染只点火 10Y 腿 —— 刷新到 4.57%（07-16
                备忘带它抓取失败的 4.56%、不可刷新）—— 但 HY OAS 腿距 7bp 在
                2.71%（RISK-ON）。交易台把一根利率侧单腿点火、在信用仍松且 BTC
                对宏观引擎脱钩上时、当作不足以 re-grow 一根下行尾：一根新
                put-spread 进一个 +194.2M 正 γ 本子会没有放大器顺风、还会打
                BTC 自己的相对强度。reclaim-long 利率筛在 4.57% 翻 FALSE 已在
                上文记作 scout 逆风、不是这里的对冲触发。无新对冲。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">re-grow 触发（两腿必到）</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% 收（当前 2.71%、距闸 7bp）来 JOIN 已点火的 10Y &gt; 4.53%（4.57%）—— 一根两腿确认、不是单一利率腿</span></div>
                <div><span className="dn-lvl-k">reclaim-long 利率筛</span><span className="dn-lvl-v bear">10Y &lt; 4.55% 收 —— 现 FALSE 在 4.57%（已刷新）；一根 scout-long 逆风、直到它回落到下方</span></div>
              </div>
              <div className="dn-gating">
                <b>注意：</b>re-grow 闸是随水位下漂调低的酌情盯位、不是回测
                断点。对单一利率腿的一根新对冲会是滚到 24JUL 5.3 DTE 或 31JUL
                12.3 DTE 的 put-spread —— 但那两个 expiry 都是正 γ（+31.89M /
                +124.86M）、所以一根尾在那打 dealer 本子、不是骑它。交易台等
                HY OAS 腿加入再 re-grow、或等周期地板直接破。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 需求把 OI 拉上去（scout 门腿 1 TRUE）· SM 偏空 + 利率筛 FALSE（腿 2/3 FALSE）· dealer 本子加深正 γ · 本子 FLAT 等确认印</span>
            </h2>

            <p>
              07-16 那张决策条件里：需求质量 scout 的 OI-up 腿
              <em>点火</em>（现货 CVD +14,756 把 OI 拉 +1,262 BTC —— 那根在
              回补把 OI 拉下时一直 UNMET 的腿）；地板守条件再度
              <em>点火</em>（07-12 周收 $63,750 在 $62,852 上方、六根日收在
              上方）；SM-cover 腿<em>没点火</em>（SM 偏 +484 空、net −479 更深
              —— 一根褪、不是加入）；reclaim-long 利率筛<em>翻 FALSE</em>
              （10Y 刷新到 4.57%、在 4.55% 上方）；追空条件<em>没点火</em>
              （dealer 本子加深到 +194.2M 正 γ、无放大器、BTC 是 RS 领头）；
              宏观 re-grow 闸点火一条腿（10Y 4.57% &gt; 4.53%）、HY OAS 腿距
              7bp。<em>前一篇在等的需求基到了、但确认腿（SM 平-到-回补、利率
              筛真）没到 —— 所以 scout 继续递延、本子继续平、比本轮谱系任何
              一点都更近一根多、但还没触发。</em>今天条件围绕一根真实现货
              出价、一根 SM 空-褪、一道关上的利率门、和本轮谱系最深正 γ 本子
              重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>需求质量 scout（多）—— OI-up 腿 TRUE</td><td className="bull">1h 收 &gt; $65,008（D-EMA50）AND SM 平-到-回补（Δshort ≤ 0 / 4h）且 OI 仍扩</td><td>scout long 0.2R、目标 $68,167（D-EMA100）然后 $69,855 / $69,872 簇；止损 $62,852</td></tr>
                <tr><td>SM 确认（不可谈判的那根腿）</td><td className="bear">当前 FALSE —— SM 24h 加 +484 空（net −479 更深、cut 7.8%）</td><td>等 SM 翻平-到-回补进上印；一根现货领的抬升被 SM 空-褪会被卖进 $65k/$66k 墙</td></tr>
                <tr><td>reclaim-long 利率筛</td><td className="bear">10Y &lt; 4.55% 收 —— 现 FALSE 在 4.57%（从 07-16 抓取失败的 4.56% 刷新）</td><td>scout 逆风、直到 10Y 回落到 4.55% 下方；非硬封但为 SM 确认作门</td></tr>
                <tr><td>周期地板丢（regime 升级）</td><td className="bear">1d 收 &lt; $62,852（W-SMA200）</td><td>结束重夺读；另起评估 —— 地板上方消化论被证伪、一根空只在一块新负 γ 出现时才能重武装</td></tr>
                <tr><td>追空（STOOD DOWN）</td><td className="bear">1d 收 &lt; $62,852 AND strip 上一块新近端负 γ —— 两者都不在</td><td>不要在 +194.2M 正 γ 里追空、BTC 领 NQ +6.04pt、SM 已浅空</td></tr>
                <tr><td>宏观尾 re-grow（单腿点火）</td><td className="bear">HY OAS &gt; 2.78%（距闸 7bp）来 JOIN 10Y &gt; 4.53%（4.57%、已点火）</td><td>只在两腿确认上 re-grow；一根单一利率腿点火进一条正 γ strip 不是对冲触发</td></tr>
                <tr><td>快频衰竭（近端）</td><td className="stale">30m/1h ⚡ TD9 SELL 在 RSI 79.2 / 78.8、顶背离簇 15m/8h/12h/1d</td><td>不要追这根 79-RSI 印；结构支持反弹在快频冷后延续、不是进它</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是
              <span className="dn-signal">
                那根终于把 OI 拉上去的现货出价、是否把 SM 从空-褪转成平-到-
                回补、在一根日收回 D-EMA50 $65,008 封盖上方（那触发 scout
                long）、还是 SM 压它的空、一根快频翻倒把价格拉回四根正 MA 线
                下方、往 $62,852 地板去。需求基本轮谱系首次是真的；问题现在
                是 smart money 是加入这根出价、还是在利率门仍关时继续褪它
              </span>
              。在那之前、本篇按写好的跑：需求质量 scout 递延（OI-up 腿 TRUE、
              SM-cover 腿和利率筛 FALSE）、追空在本轮谱系最深正 γ 本子里站开、
              宏观尾不在单腿点火上 re-grow、BTC 领它的风险簇往上而 TradFi 引擎
              翻倒。下一个 24h 的对读是<em>耐心 —— 出价现身了、现在等 SM 加入
              它、不是褪它</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2（已过 codex 敌对式审计 · findings 记于 audits/2026-07-19-desk-note.md）
            </span>
            <b>判决：</b>codex STAGE B 返回 PASS-WITH-NOTES —— 0 CRITICAL、
            2 MAJOR、2 MINOR —— 记于{' '}
            <code>audits/2026-07-19-desk-note.md</code>。无发布级事实破位；
            v2 应用了每一条 finding、每条在促升前都 grep 核到全文零残留。
            <b>DN-001（MAJOR —— live-flow 窗）：</b>24h/4h/1h 流向 delta 现在
            用 BJ 08:08→08:08 精确 pin（live_db 行 83139→84579）。搜索模式：
            <code>14,695</code>（24h 现货 CVD、修前 8 命中 / 修后 0 → 14,756）、
            <code>+1,251</code>（24h OI、1/0 → +1,262 BTC）、<code>1,024</code>
            （24h 期货 CVD、1/0 → +1,062）、<code>1,012</code>（24h taker-net、
            1/0 → +1,057）、4h 组
            <code>+0.39% / −117 / +227 / −726 / −740</code>（各 1/0 →
            +0.47% / −106 / +290 / −695 / −695）、1h 组
            <code>+0.11% / +351 / +340 / −166 / −176</code>（各 1/0 →
            +0.15% / +353 / +325 / −131 / −131）。RESOLVED。<b>DN-002（MAJOR
            —— 宏观闸 OR/AND）：</b>模式 <code>2.78% OR 10Y</code> /{' '}
            <code>OR 10Y</code>（1/0）—— put-spread re-grow 闸现在陈述为两腿
            必到（HY OAS &gt; 2.78% AND 10Y &gt; 4.53%）、与「两腿确认」的水位
            行和决策表一致。RESOLVED。<b>DN-003（MINOR —— P/C 分母）：</b>模式
            <code>279,697 call OI / 128,394 put</code>（1/0）→ 改正为 128,394
            put OI / 279,697 call OI（= 0.46）。RESOLVED。<b>DN-004（MINOR ——
            地板陈旧度）：</b>模式 <code>hours-stale</code>（1/0）→ 换成「最近
            一次周度重算 2026-07-13T00:11:10Z；慢周度级别」。RESOLVED。
            ask-deepseek 补充（咨询性、非发布级）已裁定：其 OI-delta 项与
            DN-001 重复（已修）；其 expiry-strip-sum 项非缺陷 —— codex 主审
            已确认 aggregate 是 btc_gex HTML total（+194.2M）、本篇从未声称
            列出的 strip 求和等于它；其 $0.15 现货项是有意取整（头部 $64,839
            取整自精确 $64,838.85）、已披露。快照 provenance 在数据来源条带；
            滚动源人造物（MTF、GEX、宏观、跨资产）逐字存档于{' '}
            <code>/opt/desk-note/snapshots/2026-07-19-0008/</code>。总体：已过
            codex 敌对式审计。
            <b>Build note（INFO）：</b>本服务器跑 Node 18.19.1；Next 16.2.6
            对 Node &lt; 20.9.0 硬退出、所以完整 <code>next build</code> 被
            环境阻塞。<code>npx --no-install tsc --noEmit</code> 是 build
            proxy、在 v2 修正后再跑一次通过。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体
            情况个性化。数字反映单一原子快照（2026-07-19 00:08Z）、
            provenance 在数据来源条带中按节披露；宏观 Tier-1 面板渲染
            2026-07-18 22:16Z（比快照早约 1.9h）、部分输入明确陈旧或待定
            并已标注。水位、规模与条件是交易台流程的示例、不是长期推荐。
            过去的相关性、γ 与仓位模式不绑定未来盘面。衍生品有全损风险、
            加杠杆下损失可超过保证金。
            <em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                出价终于在 OI 里现身了。但 smart money 在褪它、利率门关上、
                快频超买 —— 所以 scout 等 SM 加入、不是褪。耐心。
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
            v2 · 2026-07-19 00:08Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            ma200w_trap_watch_state.json · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
