import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-06-01 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-06-01',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-06-01' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260601() {
  await requireViewer('/zh/desk/2026-06-01');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-06-01 · v2</span>
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
              <span className="dn-big">$73,493</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.87%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-06-01 02:25Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-06-01 02:25Z（snapshot pin）</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · 快照钉在 live_db.json 第 41507 行
                    （`t == "06-01 10:25"` BJ = 02:25Z）；源文件 tail 是
                    滚动的、审计时已经走过 pin（审计时 tail 在第 41519 行 /
                    02:37Z、文件 stat mtime 2026-06-01 02:36:07Z）—— v1 草稿
                    那句「审计时文件 tail = pin」是错的 · 此快照落在 01JUN26
                    0.2DTE 08:00Z 期权结算前约 5h35m
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-01 02:16Z scan（10:16 BJ、按当时草稿）</td>
                  <td className="dn-flag">
                    滚动 latest 文件（约每 15 分钟重写）· v1 表后面那根 02:16Z
                    scan 在审计能 pin 之前就被滚动源覆盖了（审计时最近能取
                    到的是 02:31Z、mtime 2026-06-01 02:31:34Z、和 v1 表
                    里有几格不一样：15m 水上死叉 6b 对 5b、30m 水下死叉
                    2b 对 1b、scan 现货 $73,460 对 $73,470）· v2 把 v1
                    表里那几格留着、但明确标为 <em>不可审计的滚动残留</em>；
                    管道侧的跟进是补上带时间戳的 MTF 归档
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-01 02:22Z 快照</td>
                  <td className="dn-flag">
                    最新 · 较快照锚滞后约 3 分钟 · Deribit idx $73,757
                    对 live $73,493（在 live 上方 $264）· 928 合约
                    （05-31 是 938 · 31MAY 0DTE 块已在 05-31 08:00Z 清）·
                    1JUN26 0.2DTE +22.40M 在今日 08:00Z 结算（快照后约
                    5h35m）；aggregate +41.6M（从 05-31 的 +62.9M 落）；
                    结算后 ex-1JUN 按 aggregate shortcut 算 ≈ +19.2M
                    （<em>不</em>对得上 by-expiry 前向条带之和 +32.77M、
                    源 builder 的 aggregate 与逐 expiry 条带当前不加和；
                    详见 §III 调和披露）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-01 02:00Z
                  </td>
                  <td className="dn-flag">滞后约 25 分钟 · 7d 1h bar · 22 资产 · 167 rows</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-05-31 22:15Z 渲染</td>
                  <td className="dn-flag">
                    今天读到的是新一根渲染（2026-05-31 22:15Z、较快照锚
                    早约 4.17h；05-31 篇读的是 2026-05-30 22:15Z 渲染、
                    所以这是新的一根日渲染、不是旧的 reuse）· Tier-1 水位
                    恰好在两根渲染上印不动（10Y 4.45%、TIPS 2.06%、HY OAS
                    2.72%、MOVE 70.2）；DXY 走硬到 99.01（对 05-31 篇
                    的 98.91 上 +0.10）、Fed 净流动性 $5.872T 带一根新鲜
                    −$0.058T 周度印；NFCI 陈旧 9d · Tier-3 通胀行抓取失败
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-06-01 02:18Z</td>
                  <td className="dn-flag">
                    较快照锚滞后约 7 分钟 · 偏移按 live 现货 $73,493 重算 ·{' '}
                    <em>MA 矩阵故意只用 2024-2026 1m parquet 这个周期窗</em> ·
                    在这个口径下盘上 127 根周 bar、W-SMA150 / W-SMA200 仍
                    不可计算（用户给的通配 btcusdt_1m_*.parquet 实际包括
                    2019-2026、那个口径下 W-SMA150 ~$74,750、W-SMA200
                    ~$61,859；W-EMA150/200 在那个口径下也另算；本篇选周期
                    窗是为了和最近 60 篇谱系一致、不在中段切口径）·
                    W-SMA20 从 $74,161 落到 $73,146 —— 现在和 D-SMA100
                    $73,200 坐在同一根周期锚汇合带里（$54 价差、<em>不</em>
                    是「贴位差 $0」）
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
              <span className="dn-v bear">+6.60%</span>
              <span className="dn-src">live · 原始 0.006028 × 1095 · 24h 均值 +6.80%（05-31 是 +4.00%）· 封顶占用 79 / 1441 采样行 = 5.48% 钉在 +10.95% ann 封顶（05-31 是 0.1%）· 谷点 +3.12% ann @ 2026-05-31 18:54Z（BJ 02:54 06-01）· 峰点 +10.95% ann @ 2026-05-31 12:58Z（BJ 20:58 05-31、封顶 pin）</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 对 05-31 备忘（snap-to-snap）</span>
              <span className="dn-v bear">+4.90% → +6.60%（+1.70pt 硬、封顶重夺 · 对篇比、<em>不是</em>24h 基线）</span>
              <span className="dn-src">区间 +3.12% / +10.95% · 严格 24h 基线（24h 窗开 live 原始 0.005615 × 1095 = +6.15% ann → +6.60% ann）的 funding Δ 只有 <em>+0.45pt</em> · 封顶钉 79 / 1441 采样行（05-31 是 1 / 1441 —— <em>按行数算 79×</em>、按显示/取整百分数 5.48% / 0.1% 算 ~55×）· v1 那个「54×」是从取整百分数算的、本版按行数订正为 79× · 不管哪个口径、杠杆门在这 24h 内重夺、正是昨天「本子在泄气」那条读法的反向印</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">+0.88%（+915 BTC）</span>
              <span className="dn-src">live · 在 05-31 首次谱系缩（−373）之后 OI 回涨 · SM long_btc +228（基本不动）、short_btc +1,891（单侧加）—— 新增杠杆是空侧堆、不是双侧重建</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bear">61.01 / 38.99</span>
              <span className="dn-src">live_db `mkt_long_pct` · 在 05-31 的 −3.50pt 冷却之后又拥挤回到 60.35 → 61.01（+0.66pt）· 24h 区间 59.65 / 61.01 —— 多侧的 de-crowding 部分走回</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−30.9k（净 SHORT、空侧堆）</span>
              <span className="dn-src">live · long 11.14k − short 42.06k · short 峰 42.28k @ 2026-06-01 00:26Z（BJ 08:26 06-01）此后守在 42k 之上进快照；long_btc 在 24h 内只在 10.89k / 12.41k 这条窄区间内</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 05-31 备忘</span>
              <span className="dn-v bear">−29.2k → −30.9k（−1,764 净、long +228 / short +1,891）</span>
              <span className="dn-src">|Δ|/prior_net = 1,764 / 29,158 = 6.05% · 多侧基本不动、空侧加 1.9k —— 一根单侧空堆、<em>不</em>是重堆敌对-2 签名（那要求 Δshort &gt; 0 + Δlong &lt; 0 同一分钟；24h 内单分钟 Δnet 最大才 −1,300）</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">40.7% / 24.75%</span>
              <span className="dn-src">GEX IV 中位数 · 928 合约（05-31 是 39.9% / 938 —— 31MAY 0DTE 清掉、1JUN 0.2DTE 进前段、IV 硬 +0.8pt）· 30D RV 24.75%（30 returns / 31 closes）</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+1.00%（在上方）</span>
              <span className="dn-src">flip $72,766（前 $72,764 · 基本不动）· 对 live 现货 $73,493（+1.00%；73,493 / 72,766 − 1 = +0.9991%）/ GEX 文件 Deribit idx $73,757（+1.36%；73,757 / 72,766 − 1 = +1.3618%）—— 两参考都正、tile 取现货侧 +1.00% · aggregate GEX +41.6M（前 +62.9M、削 −21.3M）· 结算后 ex-1JUN 按 shortcut ≈ +19.2M（by-expiry 条带和算 +32.77M、不调和）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                阻尼 regime 在收盘上守住、但仓位本子在夜里把杠杆重建回来——
                funding 回到封顶、OI 回涨、空侧单侧堆进价格下滑里
              </span>
              。现货 <span className="dn-tag bear">$73,493 −0.87% 在 24h</span>
              打穿了昨天的未收盘、印出新鲜 24h 低
              <span className="dn-tag bear">$73,278 @ BJ 10:00 06-01（UTC
              02:00）</span>—— 在快照前最后 30 分钟里。周期锚在收盘口径上
              仍守住（05-31 日收
              <span className="dn-tag bull">$73,653</span>、谱系第四根 UTC
              收在 <span className="dn-tag bull">D-SMA100 $73,200 周期锚</span>
              上方；06-01 未收盘 <span className="dn-tag">$73,491</span>
              坐在 +0.40% 上方）、但 05-31 时还在头顶 $74,161 的 W-SMA20
              地板在新一根周 bar 上落到
              <span className="dn-tag">$73,146 —— 走进和 D-SMA100 $73,200
              同一根周期锚汇合带（$54 价差）</span>、把 scout 的
              W-SMA20-重夺腿机制性敲断。funding 现在跑在
              <span className="dn-tag bear">+6.60% ann live / +6.80% 均值
              / 5.48% 封顶占用（79 / 1441 行）在 +10.95% Binance 封顶上
              </span>（对 05-31 篇是 +4.90% / +4.00% / 0.1%（1 / 1441 行）
              —— 每一根口径在篇比上都更硬；真 24h 基线的 live 走法只小到
              +6.15% → +6.60% = +0.45pt、那 +1.70pt 是对上一篇的快照比、
              不是对滚动 24h 开）、OI 回涨
              <span className="dn-tag bear">+915 BTC（+0.88%）</span>
              在昨天首次谱系缩之后、空侧堆了
              <span className="dn-tag bear">+1,891（多侧平 +228）</span>
              跨同一根 24h 窗。dealer 本子仍净多 γ
              <span className="dn-tag bull">+41.6M（前 +62.9M、削 −21.3M）
              </span>、flip 基本静止在 $72,766 —— 阻尼 regime 完整、但
              「本子在泄气」那条后放大器读法部分走回。scout 继续递延、
              触发收紧；在正 γ 本子的周期锚上不加新空。
            </p>

            <p>
              BTC 报 <span className="dn-tag">$73,493</span> live、
              <span className="dn-tag bear">−0.87%</span> 在 24h —— 后放大器
              session 开盘以来第一根 24h 下印 —— 在
              <span className="dn-tag">$74,223 / $73,278</span> 区间内
              （高 @ BJ 11:35 05-31 / UTC 03:35 05-31、低 @ BJ 10:00 06-01
              / UTC 02:00 06-01 —— 快照前 25 分钟）。05-31 UTC 日收
              <span className="dn-tag bear">$73,653</span> 印得比 05-30 收
              <span className="dn-tag">$73,857</span> <em>低</em> —— 后放大器
              session 第一根下日（05-31 v2 备忘那根未收盘的 08:09Z 标记
              $73,828 比当日实收高 $175）。但下腿之后的四根 UTC 收都在
              周期锚上方：05-28
              <span className="dn-tag bull">$73,591</span>、05-29
              <span className="dn-tag bull">$73,428</span>、05-30
              <span className="dn-tag bull">$73,857</span>、05-31
              <span className="dn-tag bull">$73,653</span>、06-01 未收盘
              <span className="dn-tag bull">$73,491（+0.40% 在 D-SMA100
              上方）</span>。<span className="dn-signal">
                周期锚读在收盘口径上完整、但 W-SMA20 触发已机制性失效
              </span>：05-29 破掉的 W-SMA20 地板在新一根周 bar 上落到
              <span className="dn-tag">$73,146</span> —— 和 D-SMA100 $73,200
              坐在同一根周期锚汇合带里（$54 价差、<em>不</em>是 v1 草稿
              里那句「贴位差 $0」；05-31 篇里也错传了同样的口径、这两根
              MA 共一根带、不是同一个数）。05-31 scout 读「1h 收 &gt;
              $74,161」要的是真的 $1,000+ 重夺腿；新触发只离现货几块钱、
              意味着 1h 收在 W-SMA20 上方已经不带任何头顶重夺的信息 ——
              规则在横盘 tick 上就触。头顶 MA 簇也重叠更紧：D-EMA20
              <span className="dn-tag bear">$75,869（−3.13%）</span>、
              D-SMA150 <span className="dn-tag bear">$76,065（−3.38%）</span>、
              D-EMA50 <span className="dn-tag bear">$76,080（−3.40%）</span>、
              D-SMA20 <span className="dn-tag bear">$76,434（−3.85%）</span>、
              D-EMA100 <span className="dn-tag bear">$76,476（−3.90%）</span>。
              第一根真的头顶重夺腿现在在 D-EMA20 / D-SMA150 簇（$75.9k–
              $76.1k）、不在那根已死的 W-SMA20 上。<span className="dn-em">
                scout 的触发几何要重置到 D-EMA20 簇上、不在 W-SMA20 锚带上；
                下文收紧。
              </span>
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面 · 24h OI 回涨 +915 BTC（05-31 首次谱系缩之后第一次加）· 空侧堆 +1,891（多侧平）· 无重堆敌对-2 签名（24h 单分钟 Δnet 最大才 −1,300）</span>
            </h2>

            <p>
              <span className="dn-signal">
                仓位本子单侧加杠杆进价格下滑 —— 空头在堆、不在洗
              </span>
              。SM net 是 <span className="dn-tag bear">−30,922</span>、
              对 05-31 备忘的 −29,158 —— 即
              <span className="dn-em">−1,764 更空</span>（|Δ| / prior_net
              = 1,764 / 29,158 = 6.05% —— 绝对值不大、方向决定）。但两侧
              分量动得不对称：long_btc
              <span className="dn-tag">10.77k → 11.14k（+0.37k）</span>
              在谱系新低附近（24h 区间 10.89k / 12.41k）、short_btc
              <span className="dn-tag bear">39.93k → 42.06k（+2.13k）</span>
              堆。跨 24h 窗：long_btc Δ <span className="dn-tag">+228</span>
              （基本平）、short_btc Δ
              <span className="dn-tag bear">+1,891</span>、net Δ
              <span className="dn-tag bear">−1,663</span>
              （228 − 1,891 = −1,663）—— 24h 形状是单侧空头加、多侧没重建、
              也没洗。short_btc 峰
              <span className="dn-tag bear">42,275 @ 2026-06-01 00:26Z
              （BJ 08:26 06-01）</span>、此后泄 −214 进快照。SM net 谷
              <span className="dn-tag bear">−30,979 @ 2026-06-01 01:46Z
              （BJ 09:46 06-01）</span> —— 印在快照前最后 1 小时里。
              long_btc 峰 <span className="dn-tag bull">12,410 @ 2026-05-31
              06:31Z（BJ 14:31 05-31）</span>；long_btc 谷
              <span className="dn-tag bear">10,892 @ 2026-05-31 02:26Z
              （BJ 10:26 05-31）</span>。<span className="dn-em">无重堆
              敌对-2 签名</span>（Δshort &gt; +500 AND Δlong &lt; −500 同
              一分钟）印在 24h 窗内 —— 单分钟 Δnet 最大才
              <span className="dn-tag">−1,300 @ 2026-05-31 14:26Z
              （BJ 22:26 05-31）</span>、Δlong −891、Δshort +409（05-30 BJ
              22:01 签名的更柔版本）。周期节奏（05-31 已正式证伪）没出
              离散延伸事件；空头堆是慢漂、不是台阶。
            </p>

            <p>
              <span className="dn-signal">杠杆口径每一根都硬了</span>
              。funding live <span className="dn-tag bear">+6.60% ann</span>
              （原始 0.006028 × 1095）、24h 区间
              <span className="dn-tag bear">+3.12% / +10.95% ann</span>
              、峰 <span className="dn-tag bear">+10.95% ann 钉在 Binance
              0.01 封顶 @ 2026-05-31 12:58Z（BJ 20:58 05-31）</span>
              —— 封顶重夺。24h 均 ann
              <span className="dn-tag bear">+6.80%</span>（对 05-31 备忘的
              24h 均 +4.00% —— 篇比 +2.80pt 硬化）。封顶占用
              <span className="dn-tag bear">79 / 1441 采样行（5.48%）</span>
              （对 05-31 的 1 / 1441 = 0.07% —— <em>按原始行数 79×
              更多封顶活动</em>；按取整显示百分数 5.48% / 0.1% 算 ~55×；
              v1 草稿那个「54×」是从取整百分数除算的、本版按行数订正成
              79×）。谷点
              <span className="dn-tag bull">+3.12% ann @ 2026-05-31 18:54Z
              （BJ 02:54 06-01）</span>—— 24h 窗内 funding 没翻负
              （05-31 那根 −0.21% 短暂空付多没重现）。严格 24h 基线的
              funding Δ（24h 窗开原始对 live 原始）只有 +6.15% ann →
              +6.60% ann = <em>+0.45pt</em>；篇里那 +1.70pt 硬化是对
              05-31 篇 +4.90% 快照算、不是对滚动 24h 基线。OI Δ
              <span className="dn-tag bear">+915 BTC（+0.88%）</span>
              跨 24h —— <span className="dn-em">05-31 首次谱系缩
              （−373）以来第一次 OI 回涨</span>；结合空侧堆、OI 加读作
              新增空头仓位、不是多侧重建。retail
              <span className="dn-tag bear">mkt_long_pct 61.01%</span>
              从 60.35% —— 一根 +0.66pt 拥挤回到昨天 de-crowding 之后。
              perp 对现货
              <span className="dn-tag bear">−$110.34 折价</span>在快照
              （1h 均 −$103.89、区间 −$170.57 / −$53.21；4h 均 −$106.37、
              区间 −$171.01 / −$35.99；24h 均 −$109.43、区间 −$198.16 /
              −$35.99 —— 24h basis 一根都没翻升水、折价跨谱系扩大）。
              1 分钟 aggressor skew 快照
              <span className="dn-tag bear">−10.2</span>（1h 区间更宽、
              快照 tick 无干净符号）。大单 24h
              <span className="dn-tag">−12 BTC / 538 笔</span>（块流基本
              平）、taker-net 24h
              <span className="dn-tag bear">−336</span>。
              <span className="dn-em">
                funding 回封顶 + OI 回涨 + retail 回拥挤 + 空侧堆 +
                多侧平在谱系低位：杠杆本子重建、单侧、在空侧。05-31 的
                「在泄气」读法守住一根快照之后部分走回。
              </span>
            </p>

            <p>
              窗口流向是<em>24h 双侧带分歧：现货吸进下滑、期货卖</em>。
              24h：价格 <span className="dn-tag bear">−0.87%</span>、OI
              <span className="dn-tag bear">+915 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +5,142</span>（24h 窗内
              无 cb_cvd reset）、期货 CVD
              <span className="dn-tag bear">Δ −336</span>、大单
              <span className="dn-tag">−12 BTC / 538 笔</span>、
              taker-net <span className="dn-tag bear">−336</span> ——
              <span className="dn-em">
                现货吸了 −0.87%（在下印里 cb_cvd 累 +5.1k）、期货卖
                （小 −336 fut_cvd）、大单平、taker-net 略重。形状是：
                现货承接买了下滑、期货压在空堆上 —— 经典现货-永续分歧、
                现货吸还没在价格上盖过永续压
              </span>
              。4h（进快照）：价格
              <span className="dn-tag bear">−0.50%</span>、OI
              <span className="dn-tag bull">−132 BTC</span>、现货 CVD
              <span className="dn-tag bear">Δ −238</span>、期货 CVD
              <span className="dn-tag bear">Δ −61</span>、大单
              <span className="dn-tag bull">+101 BTC / 126 笔</span>、
              taker-net <span className="dn-tag bear">−60</span> ——
              <em>4h 腿在轻卖与小 OI 削上印低；大单实际 +101 反着漂方向
              买</em>。1h：价格 <span className="dn-tag bear">−0.15%</span>、
              OI <span className="dn-tag bull">−80 BTC</span>、现货 CVD
              <span className="dn-tag bear">Δ −1,188</span>、期货 CVD
              <span className="dn-tag bear">Δ −189</span>、大单
              <span className="dn-tag bear">−82 BTC / 35 笔</span>、
              taker-net <span className="dn-tag bear">−183</span> ——
              <em>最近一根小时每一根流向都翻重、cb_cvd 落 −1.2k 进 24h
              低；快照接到的是一根有 offer 的小时尾</em>。该盯的分歧是：
              24h cb_cvd +5.1k 说现货吸在买下滑、但 1h cb_cvd −1.2k 说他
              们在最近一根印上退了 —— 吸是间断的、不是连续的。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 图 · 1h 翻出新鲜水下死叉 1b · 1d 落到云下（前是「云内 4b」）· 3d 水上死叉仍确认 2b · 8h 水下金叉进 3b · W-SMA20 落到周期锚汇合带</span>
            </h2>

            <p>
              <span className="dn-signal">
                引擎周期在夜里翻重、慢周期继续恶化
              </span>
              。1h MACD 在 06-01 01:00Z 收盘前 1 根印出新鲜水下死叉 ——
              一根在「云内」帧里的 whipsaw（1h Ichimoku 刚在 2b 前进入
              $73.4k–$73.8k 云、夹住现货）。30m 也在 1 根印出新鲜水下
              死叉。引擎 RSI 冷下：1h RSI <span className="dn-tag">43.8</span>
              （05-31 是 55.8 —— 全面中位线重夺走回）、4h RSI 39.9（前
              43.9）、8h RSI 35.4（前 38.4 —— 引擎里最深超卖）、12h RSI
              32.4（前 34.6 —— 矩阵里最深超卖）。05-31 的 8h 水下金叉
              推进到 <span className="dn-tag">3 bars</span>（仍确认但不
              延伸）；4h 金叉推到 <span className="dn-tag">14 bars</span>
              （仍确认）。慢周期：1d 落到
              <span className="dn-tag bear">云下（刚印）</span> —— 05-31
              是「云内 4b」、1d 帧走出到云下；3d 水上死叉在
              <span className="dn-tag bear">2 bars（仍确认）</span>；
              12h 水下死叉在
              <span className="dn-tag bear">9 bars</span>（前 7b、延伸）；
              1w 水下金叉在 <span className="dn-tag">7 bars</span>（前
              6b、守住）；1M
              <span className="dn-tag bull">云上 28b、Sell 1</span>
              （regime 帧仍建设）。对 05-31 新加进熊单的：30m 水下死叉
              1b、1h 水下死叉 1b、1d 云下刚印。
              <span className="dn-em">
                直读：引擎周期翻熊 whipsaw、慢周期加上 1d 云下、3d / 12h
                熊单仍在、只有 8h / 4h 金叉与 1w / 1M regime 建设在反向
                推。MTF 图在 24h 里翻重、与仓位本子的空侧堆一致。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">73,470</td><td className="num">43.2</td><td className="neut">死叉（水上）5b</td><td className="bear">云下 ↑73.6k 5b</td><td>Buy 6</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">73,470</td><td className="num">43.6</td><td className="bear">死叉（水下）1b（新鲜）</td><td className="bear">云下 ↑73.9k 3b</td><td>Buy 4</td><td>BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">73,470</td><td className="num">43.8</td><td className="bear">死叉（水下）1b（新鲜、whipsaw）</td><td className="neut">云内 73.4–73.8k 2b</td><td>Buy 2</td><td>BEAR reg</td></tr>
                <tr><td>4h</td><td className="num">73,470</td><td className="num">39.9</td><td className="bull">金叉（水下）14b</td><td className="bear">云下 ↑76.2k 37b</td><td>Buy 6</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>8h</td><td className="num">73,470</td><td className="num">35.4</td><td className="bull">金叉（水下）3b</td><td className="bear">云下 ↑77.1k 48b</td><td>Buy 2</td><td>BULL reg</td></tr>
                <tr><td>12h</td><td className="num">73,470</td><td className="num bear">32.4</td><td className="bear">死叉（水下）9b</td><td className="bear">云下 ↑78.8k 19b</td><td>Buy 1</td><td>BULL reg</td></tr>
                <tr><td>1d</td><td className="num">73,470</td><td className="num">36.3</td><td className="neut">—</td><td className="bear">云下 ↑73.9k（刚印）</td><td>Buy 6</td><td>—</td></tr>
                <tr><td>3d</td><td className="num">73,470</td><td className="num">45.0</td><td className="bear">死叉（水上）2b（仍确认）</td><td className="bear">云下 ↑74.0k（刚印）</td><td>Buy 7</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">73,470</td><td className="num">42.3</td><td className="bull">金叉（水下）7b</td><td className="bear">云下 ↑100.3k 18b</td><td>Buy 3</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">73,470</td><td className="num">47.2</td><td className="neut">—</td><td className="bull">云上 ↓46.9k 28b</td><td>Sell 1</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 按 02:16Z scan 当时草稿
                    （10:16 BJ）。滚动 latest 文件在 STAGE B 能 pin 之前就
                    把那根 scan 覆盖了；审计时能取到的最近一根是 02:31Z
                    （mtime 2026-06-01 02:31:34Z），它印 15m 水上死叉 6b
                    （本表写 5b）、30m 水下死叉 2b（本表写 1b）、scan
                    现货 $73,460（本表写 $73,470）。表里 v1 的数值留着
                    按原稿、但是 <em>不可审计的滚动残留</em> —— 在管道
                    侧补上带时间戳的 MTF 归档之前、每一格都按单读处理、
                    没有可对账的归档。当时草稿头部告警：30m 水下死叉
                    1b（新鲜）、1h 水下死叉 1b（新鲜）+ 1h 水下金叉 2b
                    （在云内帧里 whipsaw）、3d 水上死叉 2b（仍确认）。
                    scan 现货 $73,470 对 live 盘面 $73,493 —— ~9 分钟的
                    时间差和 $23 scan-vs-live 漂；24h H/L $74,211 /
                    $73,171 在 scan 上（live tape 窗：$74,223 / $73,278）。
                    收盘为未收盘 K 线；每个值在各周期收盘前都按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵确认收紧后的周期锚三明治。现货 $73,493 坐在
              <span className="dn-tag bull">D-SMA100 $73,200 上方
              +0.40%</span>（周期锚；D-SMA100 从 05-31 的 $73,146 抬到
              $73,200 —— 滚动窗吸进一根更高的地板、丢出一根更老的低）
              AND <span className="dn-tag bull">W-SMA20 $73,146 上方
              +0.47%</span>
              <em>—— W-SMA20 在新一根周 bar 上从 05-31 的 $74,161 落了
              $1,015</em>、因为 05-31 周收 $73,653 进了 20 周窗。
              <span className="dn-signal">
                W-SMA20 与 D-SMA100 现在坐在 $73,146 / $73,200 ——
                $54 价差、同一根周期锚汇合带（<em>不</em>是「贴位差 $0」、
                $54 价差才是承重的数；先前谱系里那种「贴位差 $0」表述
                是错的）
              </span> —— 所以现货在 +0.40% / +0.47% 的双 MA 锚带三明治
              上方、第一根真的头顶重夺腿现在在
              <span className="dn-tag bear">D-EMA20 $75,869（−3.13%）</span>
              / <span className="dn-tag bear">D-SMA150 $76,065（−3.38%）
              </span> / <span className="dn-tag bear">D-EMA50 $76,080
              （−3.40%）</span> —— 头顶 MA 推回之前有 $2,300 的空气兜。
              然后 <span className="dn-tag bear">D-SMA20 $76,434（−3.85%）
              </span>、<span className="dn-tag bear">D-EMA100 $76,476
              （−3.90%）</span>、<span className="dn-tag bear">D-SMA50
              $77,275（−4.89%）</span>、<span className="dn-tag bear">
              W-EMA20 $77,317（−4.95%）</span>、<span className="dn-tag bear">
              W-EMA150 $78,166（−5.98%；种子）</span>、<span className="dn-tag bear">
              D-EMA150 $78,605（−6.50%）</span>、<span className="dn-tag bear">
              D-SMA200 $79,389（−7.43%）</span>、<span className="dn-tag bear">
              D-EMA200 $80,963（−9.23%）</span>。更高更远、已弃用：W-EMA100
              种子 $83,029（−11.49%）、W-EMA50 种子 $84,338（−12.86%）、
              W-SMA100 $88,506（−16.96%）、W-SMA50 $92,821（−20.82%）。
              周线一根种子披露的正偏移刚翻了：W-EMA200 种子现在 $73,700、
              现货 <span className="dn-tag bear">−0.28% 在下方</span>
              （05-31 是 +0.24% 在上方）、一根 $206 的符号翻、在一根低
              置信度的「从可用历史 seed」种子线上。
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-06-01 02:18Z（close
                $73,491.00）；偏移按 live 现货 $73,493.00 重算。显示的
                MA 水位按 $ 取整、偏移用精确序列值算。<b>口径披露：</b>
                MA 矩阵故意只跑 2024-2026 1m parquet 这个周期窗（与最近
                60 篇谱系一致）。在这个口径下盘上 127 根周 bar（05-31 是
                126）、不够 150w 与 200w 这两个窗、所以 W-SMA150 / W-SMA200
                读不可计算、W-EMA150 $78,166（−5.98%）与 W-EMA200 $73,700
                （−0.28%）以「从可用历史 seed」披露。用户给的源通配
                btcusdt_1m_*.parquet 实际包括 2019-2026、那个全口径会算
                W-SMA150 ~$74,750（−1.7%）、W-SMA200 ~$61,859（+18.8%）、
                W-EMA150 ~$75,408（−2.5%）、W-EMA200 ~$69,123（+6.3%）；
                我们不在中段切口径、但希望读者知道全历史的数算得出、且
                与本篇口径不同。日线收盘：05-26 $75,906、05-27 $74,418、
                05-28 $73,591、05-29 $73,428、05-30 $73,857、05-31
                $73,653、06-01（未收盘）$73,491 —— 四根连续完结的收都在
                周期锚上方。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子仍净多 γ aggregate +41.6M（从 05-31 的 +62.9M 削 −21.3M）· flip 基本静止 $72,766 · 1JUN26 +22.40M 在今日 08:00Z 结算（快照后约 5h35m）· 结算后 ex-1JUN 按 shortcut ≈ +19.2M 仍正</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子仍净多 γ、但缓冲实质削薄
              </span>。aggregate GEX 是
              <span className="dn-tag bull">+41.6M / 1%</span>（05-31 是
              +62.9M —— 削 −21.3M、其中 −17M 是 31MAY 0.3DTE 在 05-31
              08:00Z 清掉、剩余 ~−4M 是墙重分布）；本子仍在阻尼、只是
              cushion 更薄。0-γ flip 移动
              <span className="dn-tag">$72,764 → $72,766（+$2、静止）</span>
              、现货 $73,493 坐在
              <span className="dn-tag bull">flip 上方 +1.00%</span>
              （现货口径 73,493 / 72,766 − 1 = +0.9991%）；GEX 文件自己的
              「dist to flip」给 +1.4%、对它的 Deribit idx $73,757（在 live
              上方 $264）算 <span className="dn-tag bull">+1.36%</span>
              （73,757 / 72,766 − 1 = +1.3618%）—— 两参考都正、现货
              在 flip 上方、谱系第二根上 flip 快照（对 05-31 的第一根）。
              墙图重分布：<span className="dn-tag bull">$80k +23.76M</span>
              （最重墙、从 +23.93M 基本守住）、<span className="dn-tag bull">
              $82k +11.05M</span>（前 +11.14M）、<span className="dn-tag bear">
              $70k −12.05M</span>（前 −8.44M —— 长 −3.6M、最重负墙）、
              <span className="dn-tag bear">$72k −9.47M</span>（前 −8.45M
              —— 略长）、<span className="dn-tag bear">$60k −9.08M</span>
              崩盘 put 残余、<span className="dn-tag bull">$74k +7.20M</span>
              （前 +12.26M —— 削 −5.1M；仍净正）、<span className="dn-tag bull">
              $75k +6.77M</span>（前 +13.60M —— 削 −6.8M）、<span className="dn-tag bull">
              $78k +6.50M</span>、<span className="dn-tag bull">$90k +6.13M
              </span>、<span className="dn-tag bull">$73.5k +5.35M</span>
              （现货旁的新墙 —— call/put OI 279 / 135 小但贴周期锚）。
              <span className="dn-em">
                $70k–$72k 负簇长到 −21.52M（05-31 是 −16.89M）、$74k /
                $75k 正墙削共 −11.9M —— 31MAY 结算后的重分布把负 γ 集中
                到下方更深、把就在上方的正撑削薄。dealer 本子仍买进下滑、
                卖进挤压、但 spot 跌穿 $72k 之后接住的位置离得更远
              </span>。1JUN26 0.2DTE
              <span className="dn-tag bull">+22.40M</span> 在今日 08:00Z
              结算（快照锚后约 5h35m）；GEX 文件在 02:22Z 滞后 3 分钟、
              包含 1JUN 块、所以结算后 aggregate ex-1JUN 按 shortcut 是
              +41.6M − 22.4M ≈ <span className="dn-tag bull">+19.2M</span>
              、仍净正。前向 expiry 逐个：2JUN 1.2 −0.50M、3JUN 2.2 +0.33M、
              4JUN 3.2 +0.09M、5JUN 4.2 −4.47M（新近端负块）、12JUN 11.2
              +0.18M、19JUN 18.2 −1.71M、26JUN 25.2 +1.59M、31JUL 60.2
              +13.72M、28AUG 88.2 +0.18M、25SEP 116.2 +10.16M、25DEC 207.2
              +11.82M、26MAR27 298.2 +1.38M。<span className="dn-em">
                调和披露：以上前向 expiry 条带和算
                <span className="dn-tag">+32.77M</span>、<em>不</em>是
                aggregate shortcut 给的 +19.2M。源 builder（btc_gex.html
                的 aggregate 在 155-156 行、by-expiry 条带在 263-339 行）
                当前不加和；缺口约 $13.6M。我们把 +19.2M 留在交易本子与
                决策条件的口径里、因为 shortcut 是更干净的交易台读法、
                但读者应该把任何 ex-1JUN 主张读成在 +19.2M（aggregate
                shortcut）与 +32.77M（前向条带和）之间、直到 GEX builder
                被调和。我们 <em>不</em>把这条条带当作重建 shortcut 的口径
              </span>。前向 expiry 没有一根带放大器级负 γ；前向条带上最
              重的近端负是 5JUN26 4.2 DTE 的 −4.47M（小）、最重的近端正
              是 1JUN26 0.2 DTE 的 +22.40M（今日结算）。今日结算之后
              阻尼 regime 在两种调和上都完整。
            </p>

            <p>
              IV 中位数横跨 928 合约是
              <span className="dn-tag">40.7%</span>（05-31 是 39.9% / 938
              合约 —— +0.8pt vol 硬、因为 31MAY 0DTE 清掉、1JUN 0.2DTE
              进曲线前端）对 30D close-to-close RV
              <span className="dn-tag">24.75%</span> —— 链级溢价
              <span className="dn-tag">~+16.0pt</span>。今日 928 合约
              对 05-31 的 938 —— −10 是 31MAY 0DTE 块清掉、没近端替代。
              RV 方法：30D close-to-close、logret.std × √365 × 100、最末
              30 根日 log return（= 连续 31 根日 close）、锚自 parquet
              最末 bar 2026-06-01 02:18Z；底层 31-close 窗区间 $73,428 –
              $79,389。（参考：最末 29 returns / 30 closes 读 25.18%；
              页面值 24.75% 来自 30 returns。）是 N 合约的链中位数、
              <span className="dn-em">不是</span>可交易价差；expiry- /
              strike-level vega、skew、期限结构仍未载入、vol 读法保持
              framework only。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · 面板今日新渲染 05-31 22:15Z、较快照锚早约 4.17h（Tier-1 水位在两根日渲染上恰好印不动） · DXY 硬到 99.01（对 05-31 +0.10） · Fed 净流动性出一根 −$0.058T 周度印 · BTC 对 TradFi 脱钩再扩到 −6.98pt（前 −5.84pt）—— BTC 下延、NQ 守住</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观面板今天读到一根新渲染、但 Tier-1 水位印不动；今天
                把昨天的水位再读一次
              </span>。dashboard 渲染是 2026-05-31 22:15Z、较快照早约
              4.17h —— 这<em>是</em>对 05-31 v2 备忘的一根新渲染
              （05-31 篇读的是 05-30 22:15Z 渲染）、Tier-1 水位在两根
              渲染上恰好印不动、但渲染本身是新的。US 10Y nominal
              <span className="dn-tag bull">4.45%</span>、regime z
              <span className="dn-tag bear">+1.43</span>、偶发 z
              <span className="dn-tag">+0.20</span> —— RISK-OFF 标、不动。
              10Y TIPS real <span className="dn-tag bull">2.06%</span>
              、仍 RISK-OFF。5Y5Y BE 通胀
              <span className="dn-tag">2.24%</span> —— 平。HY OAS
              <span className="dn-tag">2.72%</span>、regime z
              <span className="dn-tag bull">−1.32</span>、偶发 z
              <span className="dn-tag bull">−1.72</span> —— 仍深 risk-on
              偶发、不动。MOVE 债波 <span className="dn-tag">70.2</span>
              —— 仍「松」。动了的两根：DXY
              <span className="dn-tag bear">99.01（+0.10 当日）</span>
              、偶发 z <span className="dn-tag">+0.78</span> —— 在 05-31
              一根松（98.91）之后又硬回约一根 tick；Fed 净流动性
              <span className="dn-tag bear">$5.872T（−$0.058T 新鲜周度印）
              </span>、偶发 z <span className="dn-tag bear">−2.28</span>
              —— 面板新出的一根小周度落。USD/JPY
              <span className="dn-tag bull">159.26</span> 不动；USD/CNY
              <span className="dn-tag bull">6.7657</span> 不动；US-JP 10Y
              利差 <span className="dn-tag bull">1.94%</span> 不动。
              <span className="dn-em">
                净：re-grow 闸（HY OAS &gt; 2.78%、10Y &gt; 4.53%）距触发
                仍 6bp / 8bp —— 对 05-31 不动。reclaim-long 利率筛
                （10Y &lt; 4.55%）在 4.45% 仍真。对 BTC 要紧的那几根
                宏观线上仍净 risk-on、DXY 硬一点、Fed 净流动性落一根。
                BTC 对 TradFi 脱钩本印再扩到 −6.98pt（BTC −4.94% vs NQ
                +2.04%）、从 05-31 的 −5.84pt —— 昨天那根收窄反向了、
                因为 BTC 在 7d 里再下延（−1.10pt 更深回撤）、NQ 守平
              </span>。
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
                <tr><td>US 10Y nominal</td><td className="num">4.45%</td><td className="num">−3.0bp</td><td className="num bear">+1.43</td><td className="num">+0.20</td><td className="bear">紧（面板 24h 平）</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.06%</td><td className="num">−3.0bp</td><td className="num bear">+1.31</td><td className="num">+0.70</td><td className="bear">紧 · 仍 RISK-OFF</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.24%</td><td className="num">0.0bp</td><td className="num">+0.08</td><td className="num">−0.16</td><td className="neut">无标</td></tr>
                <tr><td>HY OAS</td><td className="num">2.72%</td><td className="num">+1.0bp</td><td className="num bull">−1.32</td><td className="num bull">−1.72</td><td className="bull">松 · risk-on 偶发</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.510</td><td className="num">0.00</td><td className="num">+0.10</td><td className="num bull">−0.81</td><td className="stale">陈旧 9d</td></tr>
                <tr><td>MOVE 债波</td><td className="num">70.2</td><td className="num">+0.48</td><td className="num bull">−0.57</td><td className="num">−0.49</td><td className="bull">松 · 不动</td></tr>
                <tr><td>DXY</td><td className="num">99.01</td><td className="num bear">+0.10</td><td className="num">+0.58</td><td className="num">+0.78</td><td className="bear">硬 · 对 05-31 +0.10</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.872T</td><td className="num bear">−0.058T</td><td className="num">+0.22</td><td className="num bear">−2.28</td><td className="bear">新鲜周度印、小 tick 落</td></tr>
                <tr><td>USD/JPY</td><td className="num">159.26</td><td className="num">−0.01</td><td className="num bear">+1.19</td><td className="num">+0.68</td><td className="bull">不动</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">1.94%</td><td className="num">−3.0bp</td><td className="num bull">−0.93</td><td className="num">+0.20</td><td className="bull">不动</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7657</td><td className="num">−0.01</td><td className="num bull">−1.93</td><td className="num bull">−2.15</td><td className="bull">无标 · 松</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">+17.0bp（月度）</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">月度 · 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、汇总 02:00Z ——
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。
              非对角线均值 <span className="dn-tag">|r| 0.231</span>
              （比 05-29 的 0.264 和 05-31 的 0.237 再松 —— 现在坐在
              IDIOSYNCRATIC 区段更深）。BTC 列出的对齐再弱：CL
              <span className="dn-tag">−0.327</span>（最高 |r|、前 −0.375）、
              TSLA <span className="dn-tag">+0.304</span>（前 +0.333）、
              NQ <span className="dn-tag">+0.302</span>（前 +0.372 —— BTC
              再脱钩、|r| 排第三）、BRENT
              <span className="dn-tag">−0.289</span>、EUR
              <span className="dn-tag">+0.274</span>（新进高位 —— FX 簇作
              BTC 对齐变硬）、SP500
              <span className="dn-tag">+0.271</span>（前 +0.328）、GOLD
              <span className="dn-tag">+0.252</span>（前 +0.300）、PLAT
              <span className="dn-tag">+0.252</span>、AMZN
              <span className="dn-tag">+0.227</span>、META
              <span className="dn-tag">+0.211</span>、SILVER
              <span className="dn-tag">+0.211</span>（前 +0.324）、NVDA
              <span className="dn-tag">+0.185</span>（前 +0.239）。7d
              相对表现：<span className="dn-tag bear">BTC −4.94%</span>
              （比 05-31 的 −3.84% 更差 —— BTC 在 7d 里再下延 1.10pt）、
              NQ <span className="dn-tag bull">+2.04%</span>（守住）、
              SP500 <span className="dn-tag bull">+0.88%</span>（比 +0.13%
              改善）、JP225 <span className="dn-tag bull">+2.99%</span>
              （比 +4.49% 冷）、MSFT
              <span className="dn-tag bull">+9.28%</span>（TradFi 领头、
              前 +8.35%）、META
              <span className="dn-tag bull">+3.56%</span>、TSLA
              <span className="dn-tag bull">+0.11%</span>、AAPL
              <span className="dn-tag bear">−0.47%</span>、NVDA
              <span className="dn-tag bear">−2.19%</span>。金属软：GOLD
              <span className="dn-tag bear">−0.81%</span>、SILVER
              <span className="dn-tag bear">−2.67%</span>。能源仍软：CL
              <span className="dn-tag bear">−2.00%</span>、BRENT
              <span className="dn-tag bear">−2.29%</span>、NGAS
              <span className="dn-tag bull">+11.80%</span>（gas 再硬）。
              <span className="dn-em">
                BTC 对 TradFi 引擎的 7d 落后再扩到 ~−6.98pt（BTC −4.94%
                vs NQ +2.04%）、从 05-31 的 −5.84pt —— 缺口又开回 1.14pt、
                因为 BTC 在滑、NQ 守住；05-31 那根「BTC 停止延伸」读法
                没扛过 05-31 → 06-01 印。「内生于 crypto」仍是承重读法；
                宏观脉搏继续松、但 BTC 没跟上
              </span>。JGB 月度 2.52% 带 EXTREME RISK-OFF 月度标 —— 不
              依赖。
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · runner 在 29MAY 已平（状态续上）· 回补反弹 scout 触发几何重锚（W-SMA20 死、D-EMA20 簇是新线）· 宏观尾在 29MAY 结算上平 · 本次快照无新交易</span>
            </h2>

            <p>
              <span className="dn-signal">
                05-31 交易本子干净续上、但 scout 的 W-SMA20 触发机制性
                已死、必须重锚
              </span>。05-29 runner 空仓平掉（不滚、不加）。29MAY put-spread
              尾仓平掉（不滚；宏观 re-grow 闸又在 HY OAS 上漂远 1bp）。
              05-31 回补反弹 scout 有两条未满腿（W-SMA20 重夺、short_btc
              泄破 38k）；W-SMA20 腿现在<em>结构性失效</em>、因为 W-SMA20
              落到 $73,146、坐在周期锚汇合带里。1h 收在 W-SMA20 上方现在
              只意味着「现货横向 tick」—— 不带任何头顶重夺的信息。我们
              把触发重锚到下一道真的头顶带：
              <span className="dn-tag bear">D-EMA20 / D-SMA150 / D-EMA50
              簇在 $75,869 / $76,065 / $76,080</span>（$200 紧的三 MA
              墙）。short_btc 腿保持但收紧到 &lt; 39k（比 05-31 的 38k
              收一点、因为空侧堆到 42k、现在在从那个高点泄）。今天的
              交易本子是：无空仓、无 scout 入场、无新对冲 —— 等两腿
              （真的 D-EMA20 簇重夺 AND short_btc &lt; 39k 在 4h 内泄）
              都印再 scout long。在正 γ dealer 本子的周期锚上不加新空、
              即便杠杆本子重夺：在这里新加一根空头需要一根新的结构性
              燃料源（一根重堆敌对-2 印、一根 1d 收在周期锚下、或前向
              条带加进一根新的负 GEX 块）、目前一根都没到。
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">已平 · 主仓 · 状态自 05-31 续上 · 在 29MAY 08:00Z 到期结算上平</span>
              <div className="dn-trade-name">
                破位延伸空 —— 在 29MAY 08:00Z 到期结算上平（状态自 05-31 续上；不重开）
              </div>
              <div className="dn-thesis">
                05-29 runner 在 −96.34M 29MAY 放大器窗内压完整条阶梯
                （W-EMA200 种子 $73,710、D-SMA100 $72,958）、在 29MAY
                08:00Z 结算上平。今日盘面没把这单重武装：没重堆敌对-2
                签名、没 1d 收在周期锚下、前向条带没新负 GEX 块。空侧
                在 24h 加了 +1,891、但是慢漂、不是台阶。在这里重开空头
                要的是新的结构性设置、不是这单的滚续。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">在 05-29 08:00Z 平（放大器结算）· 无残余仓位 · 本次快照无重开</span></div>
                <div><span className="dn-lvl-k">重开 gating</span><span className="dn-lvl-v">新重堆敌对-2 签名（Δshort &gt; +500 AND Δlong &lt; −500 同一分钟、最好 Δnet ≤ −3k）AND 1h 收 &lt; $73,130 —— 今日缺位</span></div>
                <div><span className="dn-lvl-k">不要</span><span className="dn-lvl-v">在正 γ dealer 本子的周期锚上、只凭慢漂空头堆就加新空</span></div>
              </div>
              <div className="dn-gating">
                <b>交易已平、未重武装。</b>杠杆本子在夜里硬回来（funding
                封顶重夺、OI +915、空堆 +1.9k）、但能撑新空入场的结构性
                燃料缺位：dealer 本子净多 γ +41.6M（结算后 ex-1JUN 按
                shortcut ≈ +19.2M）、flip 静止、离散延伸签名没印。
                框架纪律说等签名印、不预判。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout · 递延 · 触发几何已重锚（W-SMA20 死）· 2 腿必到（D-EMA20 簇 AND short_btc 泄）</span>
              <div className="dn-trade-name">
                回补反弹 scout —— 递延、触发从 W-SMA20（已死）重锚到 D-EMA20 / D-SMA150 / D-EMA50 簇
              </div>
              <div className="dn-thesis">
                05-31 scout 的两腿触发是「1h 收 &gt; $74,161 W-SMA20
                AND short_btc 在 4h 内泄破 38k」。W-SMA20 在新一根周 bar
                上落到 $73,146 —— 和 D-SMA100 $73,200 坐在同一根周期锚
                汇合带里（$54 价差、<em>不</em>是 v1 草稿与 05-31 篇里
                传的那种「贴位差 $0」、两根 MA 共一根带、不是同一个数）
                —— 所以 1h 收在 $73,146 上方在下一根横盘 tick 上就触、
                带零头顶重夺信息。W-SMA20 腿
                <em>机制性已死</em>；触发必须重锚到下一道真的头顶带。
                那道带是 D-EMA20 / D-SMA150 / D-EMA50 三 MA 簇、在
                $75,869 / $76,065 / $76,080 —— 一道紧的 $211 墙。我们也
                把 short_btc 腿收紧到 <em>&lt; 39k</em>（对 05-31 的 38k）、
                因为空侧堆到 42.28k、现在在从那个高点泄 —— 在 4h 内泄回
                39k 以下会是一根有意义的空头回补读。反向：结构性背景
                实际上略微走回（funding 回封顶、OI 回涨、空堆、BTC 对
                TradFi 脱钩再扩 1.14pt）、所以非对称已经不在明显改善
                —— scout 在两腿都印之前继续递延。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">重锚触发（2 腿中 2 腿必到）</span><span className="dn-lvl-v bull">1h 收 &gt; $75,869（D-EMA20 簇重夺、一根真的头顶重夺 —— 旧 W-SMA20 $74,161 腿已死）AND SM short_btc 在 4h 内泄破 39k</span></div>
                <div><span className="dn-lvl-k">scout 入场</span><span className="dn-lvl-v bull">触发印出时、scout long 0.2R · 结构性背景混合（γ 仍 +41.6M、但 funding 回封顶、OI +915、空堆 +1.9k）</span></div>
                <div><span className="dn-lvl-k">止损</span><span className="dn-lvl-v bear">1d 收 &lt; $73,146（W-SMA20 / 周期锚汇合带的下沿 —— D-SMA100 $73,200 在上方 $54；一根日下穿汇合带下沿结束消化读法；从 1h 收紧到 1d 收因为双 MA 汇合在 1h 上抬高假破风险）</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">$77,275（D-SMA50）然后 $77,317（W-EMA20）</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R · 在 D-SMA50 平半、之后挪 stop 到入场</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R：</b>触发 ~$75,869、止损 $73,146（1d 收口径）=
                ~$2,723 风险；首目标 $77,275 = ~$1,406 回报 ——{' '}
                <em>是 0.52:1、比 05-29 的 0.64:1 差</em>；更高的触发
                吃回报、1d 收止损同时拉大风险。单目标口径下 R/R 不利；
                这单只在 scout 能骑进第二目标（W-EMA20 $77,317 → 0.53:1）
                或更远才成立。<b>硬规则：</b>scout long 在两腿都印之前
                <em>不入场</em> —— 05-31 的 W-SMA20-重夺捷径已死、单
                腿入场任何一条腿都读作假信号。如果非对称保持这么薄、
                两腿都不在下一根 24h 内印、scout 是「站定不动」料、不是
                「入场」料。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">已平 · 宏观尾 · 状态自 05-31 续上</span>
              <div className="dn-trade-name">
                下行 put-spread —— 在 29MAY 08:00Z 结算上平；不滚（re-grow 闸 6bp / 8bp 距触发、不动）
              </div>
              <div className="dn-thesis">
                29MAY put-spread 尾仓（long $74k / short $70k put）在
                Deribit 08:00Z 印 05-29 结算、坐在 −96.34M dealer γ 块内。
                今日不滚：宏观 re-grow 闸对 05-31 不动（HY OAS 在 2.72%、
                距 2.78% 闸 6bp；10Y 在 4.45%、距 4.53% 闸 8bp）。
                reclaim-long 利率筛（10Y &lt; 4.55%）在 4.45% 仍真。
                在正 γ 本子的周期锚上不需要新对冲。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">在 05-29 08:00Z 平（Deribit 29MAY 结算）· 无残余仓位 · 不滚</span></div>
                <div><span className="dn-lvl-k">re-grow 触发（下一根 Tier-1 印）</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% 收（当前 2.72%、距闸 6bp）OR 10Y &gt; 4.53% 收（当前 4.45%、距闸 8bp）</span></div>
                <div><span className="dn-lvl-k">reclaim-long 利率筛</span><span className="dn-lvl-v bull">10Y &lt; 4.55% 收 —— 在 4.45% 仍真；等 BTC 内部转向</span></div>
              </div>
              <div className="dn-gating">
                <b>注意：</b>re-grow 闸（HY OAS &gt; 2.78%、10Y &gt; 4.53%）
                是随水位下漂调低的酌情盯位、不是回测断点。宏观面板今天
                <em>确实</em>新出一根渲染（今日读 2026-05-31 22:15Z、较
                快照早约 4.17h；05-31 篇读 2026-05-30 22:15Z 渲染 ——
                所以今天是相对昨天的新一根渲染）、Tier-1 水位恰好在两根
                渲染上印不动 —— 是「两根日渲染上水位不动」、<em>不</em>
                是 v1 草稿误传的「同一根渲染 reuse」或「28h 滞后」。
                1JUN26 0.2DTE +22.40M 今日 08:00Z 结算（快照后 5h35m）；
                是一根正块在净多 γ 本子里清掉、与阻尼 regime 续上一致。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 空侧堆签名 但无重堆敌对-2 · 慢漂加进多侧平 · 单侧风险建设盯位</span>
              <div className="dn-trade-name">
                空侧堆 —— 慢漂加（24h 短 +1,891 / 长 +228）但无离散延伸签名；仓位本子单侧更重、没有台阶
              </div>
              <div className="dn-thesis">
                05-31 框架预期重堆敌对-2 签名（Δshort &gt; 0 AND Δlong
                &lt; 0 同一分钟、带幅度）保持「印出时是有意义的盘面读」
                、无日历先验。本次 24h 窗内、没重堆敌对-2 签名印出。
                单分钟 Δnet 最大是
                <span className="dn-tag">−1,300 @ 2026-05-31 14:26Z
                （BJ 22:26 05-31）</span>、Δlong −891、Δshort +409 ——
                05-30 BJ 22:01 台阶（Δnet −5,569、Δshort +2,446 同一
                分钟）的柔版、远低于 −3k / 敌对-2 幅度阈。空侧改成跨
                整根窗慢漂加 +1,891 BTC、多侧守在谱系新低附近
                （区间 10.89k / 12.41k）。<span className="dn-em">
                  这是离散台阶框架的新失败模式：单侧风险建设、对面平、
                  没有台阶。本子更空、但没有 marker；节奏框架没东西
                  可门。盯位表扩：4h short_btc 加 &gt; +1k AND long_btc
                  Δ 在 [−250, +250] 内本身就算一根慢漂堆签名
                </span>。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">框架状态</span><span className="dn-lvl-v">节奏断（按 05-31）AND 现在单侧慢漂堆作为独立签名出现 —— 重堆敌对-2 仍门、但不再是唯一有意义的盘面读</span></div>
                <div><span className="dn-lvl-k">慢漂堆阈</span><span className="dn-lvl-v">4h Δshort_btc &gt; +1k AND |Δlong_btc| ≤ 250 AND |Δnet/h| ≤ 1k（无离散台阶）—— 每根 4h 收重读</span></div>
                <div><span className="dn-lvl-k">今日读数</span><span className="dn-lvl-v">24h Δshort +1,891 / Δlong +228 / 净 Δ −1,663 / 最大 |Δnet/min| −1,300 —— 慢漂阈在 24h 聚合上满；4h 聚合按 02:25Z live pin 重算是 short +243、long +44、net −199（这替换 v1 草稿那根 short +132 / long −62 / net −195、那个用了错基线；定性结果不变、组件现在对得上 pin）—— 堆签名在本篇是 24h 信号、不是 4h 信号</span></div>
                <div><span className="dn-lvl-k">前向 gating</span><span className="dn-lvl-v">如果下一根 24h 在多侧平的情况下再加一根 +1k 空、且 1d 收不在周期锚下、就读作继续慢漂堆；如果配上一根 1d 收 &lt; $73,146、就升级到周期阶梯破 + 空头集中（重开空头盯位触发）</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>05-31 对 BJ 13–15 节奏的证伪是对的、
                06-01 盘面引入了一类节奏框架没预期的新签名 —— 单侧慢漂
                堆、没有台阶。当作独立盯位：台阶式敌对-2 读仍门高确信
                的重武装、但慢漂堆现在门「续上盯位」、当配上一根周期
                锚收盘破。框架扩、不替换。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 阻尼 regime 在收盘上守住、但杠杆本子单侧空头重建 · 周期锚仍守 · W-SMA20 落到锚带（scout 触发重锚）· 1JUN +22.40M 在 5h35m 后结算</span>
            </h2>

            <p>
              05-31 决策条件里：31MAY26 到期结算干净
              <em>触发</em>（+17.00M 清掉、aggregate 削 −21.3M 从 +62.9M
              到 +41.6M；05-31 篇的 ex-31MAY ~+45.9M 坐在今日 ex-1JUN 前
              向 ~+19.2M 上方、按 aggregate shortcut、带 §III 的条带和
              调和注释 —— 两个读都仍正）；回补反弹 scout 没触发
              （W-SMA20 腿一根都没在 $74,161 上收 —— 05-31 04:00Z 1h 收
              峰 $74,144 离 $17 但没破；short_btc 一根都没泄破 38k、反
              而堆回 42.28k）；周期锚丢测试没触发（05-31 收 $73,653、
              06-01 未收盘 $73,491 —— 都在 $73,146 上方）；周期锚守 + γ
              保持正触发（两腿都真 在收盘口径上）；跑再延伸条件没触发
              （单分钟 Δnet 最大 −1,300、远在 −3k 阈上；SM net −30,922
              在 −32k 阈上方）；周期-节奏-已证伪框架守住（无日历绑定
              台阶；空侧堆在慢漂上、不在台阶上）。宏观 re-grow 闸在
              HY OAS 上漂 1bp、10Y 上不动。reclaim-long 利率筛在 4.45%
              仍真。<em>三个结构性条件干净触发（31MAY 结算、周期锚守 +
              γ 正、宏观筛真）、一个未触发（scout）、框架信号类扩展
              （慢漂堆作为独立盯位出现）。</em>今天条件围绕重锚的 scout
              触发、削薄但未变的 dealer cushion、和新的慢漂堆盯位重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>01JUN26 到期结算（今日 08:00Z、快照后约 5h35m）</td><td>+22.40M 正块清掉；aggregate 走 +41.6M → ex-1JUN ≈ +19.2M 按 aggregate shortcut（by-expiry 条带和算 +32.77M、源 aggregate-vs-条带当前不加和、详见 §III GEX 段）、两种调和上都仍净正（无 vol 事件预期）</td><td>无需动作 —— 阻尼 regime 在结算后续上、只是 cushion 更薄</td></tr>
                <tr><td>回补反弹 scout（多）—— 已重锚</td><td className="bull">1h 收 &gt; $75,869（D-EMA20 簇重夺 —— W-SMA20 腿因落到周期锚而已死）AND SM short_btc 在 4h 内泄破 39k</td><td>scout long 0.2R、目标 $77,275（D-SMA50）然后 $77,317（W-EMA20）—— 单目标口径 R/R 差（0.52:1）、只在骑到第二目标时成立</td></tr>
                <tr><td>周期锚丢（周期 regime 升级）</td><td className="bear">1d 收 &lt; $73,146（W-SMA20 / 周期锚汇合带下沿；D-SMA100 在上方 $54、$73,200）</td><td>谱系首次周期阶梯破 —— 另起评估；「锚上方消化」论被证伪；配上空堆签名触发重开空头盯位</td></tr>
                <tr><td>周期锚守 + γ 保持正</td><td className="bull">1d 收守 &gt; $73,146（W-SMA20 下沿；D-SMA100 $73,200 在上方）AND aggregate GEX 保持正（5JUN/12JUN 到期对内无新负块加入）</td><td>锚上方消化读守住、cushion 更薄；scout 非对称跟着 D-EMA20 簇重夺、不跟死的 W-SMA20</td></tr>
                <tr><td>跑再延伸（基率低、阈严）</td><td className="bear">新重堆敌对-2（Δshort &gt; +500 AND Δlong &lt; −500 同一分钟、Δnet ≤ −3k）AND 1h 收 &lt; $73,130 AND SM net 推 &lt; −32k</td><td>cycle-3 点火信号 —— 会重武装空头、止损在 D-EMA20 $75,869 重夺；基率低因为节奏已断、慢漂堆替代了一部分空头建设、没有台阶</td></tr>
                <tr><td>慢漂堆（NEW · 框架已扩）</td><td className="bear">4h Δshort_btc &gt; +1k AND |Δlong_btc| ≤ 250 AND |Δnet/min| ≤ 1k 跨窗</td><td>盯位信号；单独看仅信息性；配上一根 1d 收 &lt; $73,146 升级到重开空头盯位</td></tr>
                <tr><td>宏观尾 re-grow（闸不动）</td><td className="bear">HY OAS &gt; 2.78%（距闸 6bp）OR 10Y &gt; 4.53%（距闸 8bp）</td><td>滚对冲到 5JUN/12JUN 前段；tail +0.1R 向主仓</td></tr>
                <tr><td>reclaim-long 利率筛</td><td className="bull">10Y &lt; 4.55% 收 —— 在 4.45% 仍真；等 BTC 内部转向</td><td>独立筛已真；需要 BTC 内部回补反弹触发才能转 scout long</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是
              <span className="dn-signal">
                周期锚汇合带（D-SMA100 $73,200 / W-SMA20 $73,146 —— $54
                价差、<em>不</em>是 v1 草稿乱传的「贴位差 $0」框架）
                能不能在下一根 1d 收上守住、当 1JUN +22.40M 结算且杠杆
                本子保持单侧。一根 1d 收在带下沿（$73,146 W-SMA20）以下
                配上继续的慢漂空头堆、就在不需要台阶的情况下重武装空头
                盯位；一根干净的 D-EMA20 $75,869 簇重夺在 1h 收口径上
                配上空侧在 4h 内泄回 39k 以下、就触发重锚后的 scout。
                两个结果都比中间地带结构上更干净
              </span>。在那之前、本篇按写好的跑：runner 与 put-spread
              尾仓已平、回补反弹 scout 重锚到 D-EMA20 簇（W-SMA20 触发
              死于价格-均值赶上）、周期节奏框架扩到含慢漂堆作独立盯位
              签名、宏观面在不触发 re-grow 闸的情况下继续松。BTC 对
              TradFi 脱钩再扩到 −6.98pt、因为 BTC 再下延；引擎 MTF 周期
              翻熊 whipsaw；1d 落到云下；dealer 本子削 cushion 但仍净多
              γ。下一根 24h 的对读是
              <em>耐心 —— 两腿确认、不用一腿；并盯周期锚是否在收盘上破</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2（已过 codex 敌对式审计 · findings 记于 audits/2026-06-01-desk-note.md）
            </span>
            <b>状态：</b>v2 —— 在 STAGE B codex 敌对式审计之后。STAGE B
            把 Codex CLI 跑在 <code>xhigh</code> 推理强度上、对自
            2026-06-01 02:25Z 原子快照写出的 v1 草稿审计、算式与 parquet
            读取走 <code>/opt/btc-data/.venv/bin/python3</code>。v1 判决是
            <b>BLOCK-CRITICAL —— 1 CRITICAL + 5 MAJOR + 3 MINOR findings
            </b>；在 D-SMA100/W-SMA20 断与 源-口径 / 陈旧度披露 修好之前
            不发 v1。STAGE C 把每条 finding 的建议修正在原文件上应用；
            v2 就是审计过的文件。<b>应用的修正（全部 9 条）：</b>{' '}
            <em>DN-001（CRITICAL）D-SMA100 / W-SMA20 汇合</em> —— v1 反复
            把两根 MA 叫「贴位差 $0」、但草稿自己印出 $54 价差；止损
            标签把两根 MA 也搞错了。v2 重写每一处（数据来源、lead、
            §I、§II MA 段、交易本子止损、决策条件行、收尾信号段）成
            「同一根周期锚汇合带、$54 价差」、把止损留在 $73,146 并标
            为 W-SMA20 / 锚带下沿（D-SMA100 $73,200 在上方 $54）、并
            明确撤回 v1 的「贴位差 $0」表述。<em>DN-002（MAJOR）MA 矩阵
            源-口径</em> —— 页面 MA 矩阵跑在 2024-2026 1m parquet 这个
            周期窗上；用户给的通配 btcusdt_1m_*.parquet 实际包括
            2019-2026、那个口径下会算 W-SMA150 ~$74,750 / W-SMA200
            ~$61,859 / W-EMA150 ~$75,408 / W-EMA200 ~$69,123。v2 在数据
            来源、§II MA 段、本审计块和 footer 加上明确口径披露 —— 周期
            窗为谱系一致留下来、全历史数披露给读者。<em>DN-003（MAJOR）
            宏观陈旧度</em> —— v1 带两个矛盾的故事（数据来源说对
            05-31 22:15Z 是 4.2h 陈旧；交易尾注又说从 05-30 22:15Z 算
            28h 滞后）。v2 归一到：今天读的是新鲜 2026-05-31 22:15Z 渲染
            （较 02:25Z 快照早约 4.17h；05-31 篇读 05-30 22:15Z 渲染、
            所以这是新的一根日渲染、Tier-1 水位恰好在两根渲染上印不动）。
            28h 表述删除。<em>DN-004（MAJOR）MTF 来源</em> —— v1 的
            02:16Z MTF scan 在审计能 pin 之前就被滚动 latest 文件覆盖；
            审计时能取到的最近一根是 02:31Z、几格不同（15m 水上死叉 6b
            对 v1 5b；30m 水下死叉 2b 对 v1 1b；scan 现货 $73,460 对 v1
            $73,470）。v2 把 v1 表里的值按原稿留着、但在数据来源与 §II
            表注里标为 <em>不可审计的滚动残留</em>；管道侧跟进是补带
            时间戳的 MTF 归档。<em>DN-005（MAJOR）funding Δ24h tile</em>
            —— v1 的「+4.90% → +6.60%（+1.70pt）」是对 05-31 篇的快照
            比、不是滚动 24h 基线（真 24h 窗开原始 0.005615 × 1095 =
            +6.15% ann；live +6.60% = +0.45pt）。封顶重夺按原始行数算
            79×（79 / 1）、按显示/取整百分数 5.48% / 0.1% 算 ~55× ——
            v1 从取整比读出 54×。v2 把 tile 重标为「对 05-31 备忘
            （snap-to-snap）」、披露 +0.45pt 24h 基线读、并把 54× 订正
            为按行数 79×。<em>DN-006（MAJOR）GEX ex-1JUN 调和</em> ——
            aggregate-shortcut（+41.6M − 22.4M = +19.2M）与前向 by-expiry
            条带（2JUN 到 26MAR27 之和 +32.77M）在源 builder 里当前不加和
            （btc_gex.html aggregate 155-156 行对条带 263-339 行）。v2 把
            +19.2M shortcut 留在交易本子续上口径上、但在数据来源、§III
            dealer 段、决策条件行、和（此处）审计痕迹里披露 $13.6M 的
            调和缺口、并明确不把条带当作重建 shortcut 的口径。
            <em>DN-007（MINOR）4h 慢漂</em> —— v1 写 short +132 / long
            −62 / net −195；按 02:25Z live pin 重算（4h 基线 live_db
            41267 行对锚 41507 行）真组件是 short +243 / long +44 / net
            −199。v2 在交易本子行里印订正组件；定性阈结果不变。
            <em>DN-008（MINOR）live tail</em> —— v1 说「审计时文件 tail
            = pin」；审计时滚动 live 文件已经走到 41519 行 / 02:37Z。
            v2 把数据来源行重写成「快照钉在 live_db.json 41507 行；源
            tail 是滚动的」。<em>DN-009（MINOR）ex-31MAY → ex-1JUN
            typo</em> —— v1 写「ex-31MAY ~+45.9M 坐在 ex-31MAY +19.2M
            ex-1JUN 前向上方」；v2 重写为「05-31 篇的 ex-31MAY ~+45.9M
            坐在今日 ex-1JUN 前向 ~+19.2M 上方」、带条带-vs-aggregate
            调和交叉引用。<b>Codex 确认干净（v2 按原稿续上）：</b>
            requireViewer gating 结构（import :3；async default export
            :24-25 首语句；路由参数与页面路径匹配）；JSX/markup 完整
            （单 &lt;main&gt;、单 &lt;article&gt;、都闭合；
            <code>colSpan=&#123;7&#125;</code> 与 7 列 MTF 表匹配；
            <code>tsc --noEmit</code> 退出 0）；live tape 锚位核心
            （spot $73,493、24h −0.869%、H/L $74,223.03 / $73,278.01、
            OI +915.36 BTC / +0.8806%、SM long +227.5、short +1,890.9、
            net −1,663.4、24h 无重堆敌对-2 签名、单分钟最大 Δnet
            −1,300 @ BJ 22:26 05-31）；funding 原始算式
            （0.006028 × 1095 = +6.6007%；24h 均 +6.7976%；区间 +3.1229%
            / +10.95%；封顶 79 / 1441 = 5.4823%；BJ/UTC 谷与峰转换正确）；
            流向窗（24h 现货 CVD +5,142.1、期货 CVD −336.0、大单 −12.28
            BTC / 538 笔；4h 价 −0.501%、OI −131.9 BTC、现货 CVD −238.3、
            期货 CVD −60.5；1h 价 −0.148%、OI −80.3 BTC、现货 CVD
            −1,187.6、期货 CVD −189.4）；GEX 头条（Deribit idx $73,757、
            中位 IV 40.7%、总 GEX +41.6M、flip $72,766、现货距 +0.999%、
            idx 距 +1.362%、顶墙 $80k +23.76M / $70k −12.05M / $82k
            +11.05M / $72k −9.47M / $73.5k +5.35M）；IV/RV（30D RV 重算
            从 31 根日 close 是 24.7457%；40.7% − 24.7457% = 15.95pt；
            29-return 替代是 25.1824%）；跨资产（生成 2026-06-01T02:00
            +00:00、22 资产、167 rows、均 |r| 0.231、BTC −4.94%、NQ
            +2.04%、缺口 −6.98pt）；宏观 Tier-1 值与 05-31 22:15Z 源
            匹配（10Y 4.45%、TIPS 2.06%、HY OAS 2.72%、MOVE 70.2、
            DXY 99.01、Fed 净流动性 $5.872T、USD/JPY 159.26、USD/CNY
            6.7657、JGB 月度 2.52%）；claims-vs-loaded-data 纪律
            （NTT / max-pain / strike-level IV / BTC-NQ ratio 仍未载入；
            跨资产用已载入的回报/相关性、不是 BTC/NQ 比率序列；IV 是链
            中位数、不是可交易价差）；前向交易立场（无新空、scout long
            递延并重锚到 D-EMA20 簇、size 0.2R 只在两腿触发上）。
            <b>管道侧 open issues（不阻发布）：</b>MTF 可 pin 度
            （滚动 latest-only 文件继续逼出不可验证的审计缺口 —— 需要
            带时间戳的 MTF 归档）；GEX aggregate-vs-expiry 加和性
            （可能是 builder artifact、v2 披露但不修源）；MA 矩阵口径
            是选择不是缺陷（周期窗 vs 全通配 —— 披露、不切换）；live
            tape 滚动跨过快照 pin（v2 表述订正、管道仍只产滚动 live
            文件）。<b>Build note（INFO）：</b>本服务器跑 Node 18.19.1；
            Next 16.2.6 在 <code>node_modules/next/dist/bin/next:24-28</code>
            处对 Node &lt; 20.9.0 硬退出、所以完整 <code>next build</code>
            被环境阻塞（谱系自 05-21 到 05-31）。
            <code>npx --no-install tsc --noEmit</code> 是 build proxy；
            STAGE C 在每一条 v2 修正应用之后再跑了一次、退出 0。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体
            情况个性化。数字反映单一原子快照（2026-06-01 02:25Z）、
            provenance 在数据来源条带中按节披露；宏观 Tier-1 面板渲染
            2026-05-31 22:15Z（较快照早约 4.17h；相对 05-31 篇的 05-30
            22:15Z 渲染、这是新的一根日渲染、Tier-1 水位恰好在两根渲染
            上印不动）、部分输入明确陈旧或待定并已标注。水位、规模与
            条件是交易台流程的示例、不是长期推荐。过去的相关性、γ 与
            仓位模式不绑定未来盘面。衍生品有全损风险、加杠杆下损失可
            超过保证金。<em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                放大器时代仍结构性结束、阻尼 regime 在收盘上完整。但
                杠杆本子在夜里单侧空头重建、W-SMA20 触发死于价格-均值
                赶上、scout 重锚到 D-EMA20 簇。耐心 —— 两腿、不一腿。
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
            v2 · 2026-06-01 02:25Z 快照 · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet
            （2024-2026 周期窗 —— 全通配含 2019-2026、详见 §II MA 口径
            披露）· FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
