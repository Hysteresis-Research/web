import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-07-09 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-07-09',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-07-09' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260709() {
  await requireViewer('/zh/desk/2026-07-09');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-07-09 · v2</span>
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
              <span className="dn-big">$62,194</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−2.00%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-07-09 00:05Z ·{' '}
              <span className="dn-em">
                回撤加深成第三根下跌收盘，收复的 200W 底线在在途周线上<b>丢了</b>。
                spot $62,194 坐在 $63,062.79 的 W-SMA200 底线下方 −1.38%，在途
                07-13 周线收 $62,147.10 印在底线下方 −1.45%（对上 07-08 备忘的
                +0.90% 上方），07-08 / 07-09 两根日收都回到底线下方。上一份备忘
                「收复完整、在途周在上方」翻成了<b>在途周回到下方——重新坐实破线
                的触发已在周内武装</b>，但<b>还不是</b>一根确认的周线收在下方：本周
                要到周一 07-13 才结算，最后一根完整的周线事件仍是 07-06 收复
                （$64,023.60 在上方）。这次回撤下的盘面是<b>真正转空</b>了，不同于
                前两回的「去杠杆、不是需求」：OI 反而<b>建了 +995 BTC（+1.00%）</b>
                ——是新仓、不是去杠杆——聪明钱从平（−42.6）翻成<b>净空 −3,116</b>
                （多头被冲 −1,765、空头加 +1,309），散户<b>往回撤里加多 +5.19pt 到
                64.00%</b>。资金费仍为正（+6.45% 年化，24h 均 +4.97%，96 负值行，
                触顶占比 6.0%），所以这是一段受控的方向性下行、不是投降式冲刷。
                做市商这本仍净多 gamma 但更浅 <b>+80.6M</b>（对上 +114.2M），翻转位
                $61,094 spot 高出 +1.80%，近端无一个像样的负 gamma 放大器（仅
                11JUL26 −0.44M，微不足道），所以下跌是有序的。本子还是<b>平</b>：
                不在翻转位/$60k 正 gamma 里空、无侦察多（价格和需求两个前置条件
                现在都破了）、无新对冲（OR 门槛只有利率腿触发）。唯一那条线是
                周一 07-13 的周线收盘对 $63,063 底线。
              </span>
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live 盘面（现货 / 永续 / OI / 聪明钱 / 资金费）</td>
                  <td className="dn-v-cell">live_db.json · 2026-07-09 00:05Z（快照钉 · BJ 08:05 行）</td>
                  <td className="dn-flag">
                    新鲜 · 1 分钟 · 锚点钉在 t=&ldquo;07-09 08:05&rdquo;（BJ）=
                    00:05Z；文件尾持续追加，所有窗口都冻结到这个钉住的索引。快照
                    &ldquo;now&rdquo; 值（现货、散户、聪明钱净、资金费）用<b>精确的
                    BJ 08:05 钉</b>；24h Δ 跨结束在钉点的最后 1441 采样行，所以
                    24h-ago = BJ 08:06（07-08）采样行——因为 BJ 14:21 的期货 CVD
                    重置分钟在盘面里被<b>重复</b>了
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + 一目 + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-07-09 00:01Z 扫描（BJ 08:01）</td>
                  <td className="dn-flag">
                    滚动最新文件 · 相对快照锚点约 4 分钟旧 · 在途 bar · 已归档到
                    /opt/desk-note/snapshots/2026-07-09-0005/
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-09 00:01Z 快照</td>
                  <td className="dn-flag">
                    相对锚点约 4 分钟旧 · Deribit idx $62,498 vs live spot
                    $62,194（idx 高 $304）· 878 个合约 · 9JUL26 0.3DTE +0.09M
                    今日 08:00Z 结算（在本快照之后）；拆条上无近端负 gamma 放大器
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-09 00:01Z
                  </td>
                  <td className="dn-flag">约 4 分钟滞后 · 7d 1h bar · 22 个资产 · 167 行</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z 分数面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-08 22:16Z 渲染</td>
                  <td className="dn-flag">
                    约 1.8h 渲染滞后 · FRED Tier-1：10Y 4.55%（+7.0bp，RISK-OFF）、
                    TIPS 2.30%（+6.0bp，EXTREME）、HY OAS 2.67%（−5.0bp，RISK-ON）、
                    MOVE 72.4（+7.0）、DXY 101.12（+0.27，EXTREME）· 联储净流动性
                    $5.843T · Tier-3 通胀行旧（月度 68d）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日线 / 周线均线矩阵</td>
                  <td className="dn-v-cell">parquet 末 bar 2026-07-09 00:05Z（收 $62,147.10）</td>
                  <td className="dn-flag">
                    偏移按 live spot $62,194.00 重算 · 完整 2019→ glob 加载
                    （358 根周线 bar），所以整个 W 矩阵含 W-SMA150 / W-SMA200
                    本切都可算
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W 周期底线监控 JSON</td>
                  <td className="dn-v-cell">weekly_200sma.json · 本切缺失</td>
                  <td className="dn-flag">
                    权威监控 JSON 不在服务器上 → 比率百分位 / 末事件保持未取
                    （不是编造）；底线按 runbook 回退，直接从 parquet W-MON
                    W-SMA200（$63,062.79）重算
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED 月度 · IRLTLT01JPM156N</td>
                  <td className="dn-flag">旧 · 月度（68d）· 勿当 live 用</td>
                </tr>
                <tr>
                  <td className="dn-s">
                    NTT 枢轴、max-pain、行权价级 IV、BTC/NQ 比值
                  </td>
                  <td className="dn-v-cell">本切未加载</td>
                  <td className="dn-flag">相关论断明确仅作框架</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dn-meta">
            <div>
              <span className="dn-k">资金费 · 8h 年化</span>
              <span className="dn-v">+6.45%</span>
              <span className="dn-src">live · 原值 0.005891%/8h × 1095 · 24h 均 +4.97% 年化 · 触顶占比 86 / 1441 采样行 = 6.0% · 96 负值行 · 最大 +10.95% @ 07-08 19:26Z（BJ 03:26 07-09）· 探底 −0.28% @ 07-08 04:40Z（BJ 12:40 07-08）</span>
            </div>
            <div>
              <span className="dn-k">Δ 资金费 · 24h</span>
              <span className="dn-v bear">+5.23% → +6.45%（+1.22pt，走硬）</span>
              <span className="dn-src">盘面内 24h：24h-ago 行 +5.23% 年化 → now +6.45% · 24h 均降到 +4.97%（07-08 备忘是 +8.00%）· 资金费穿过一根 −2.00% 的下跌日仍为正——无投降式冲刷</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">+1.00%（+995 BTC）</span>
              <span className="dn-src">live · 两天缩之后<b>头一回 OI 建仓</b> · 聪明钱 long_btc −1,765 / short_btc +1,309——新鲜空头建仓 + 多头冲刷；OI 往下行腿里长（新仓、不是去杠杆）</span>
            </div>
            <div>
              <span className="dn-k">散户（市场）多/空</span>
              <span className="dn-v bear">64.00 / 36.00</span>
              <span className="dn-src">live_db `mkt_long_pct` · BJ 08:05 钉 · 随价跌 −2.00% 从 58.81 堆到 64.00（+5.19pt）· 24h 区间 58.81 / 65.09——散户往下跌里<b>加</b>，站在聪明钱空头建仓的错误一边</span>
            </div>
            <div>
              <span className="dn-k">聪明钱净 BTC</span>
              <span className="dn-v bear">−3,115.7（净空，从平翻过来）</span>
              <span className="dn-src">live · 多 10,185.4 − 空 13,301.2 · 24h-ago 净 −42.6（平）· 24h 净头寸最小 −4,175 @ 07-08 16:26Z（BJ 00:26 07-09），最大 +1,470 @ 07-08 02:41Z（BJ 10:41 07-08）；short_btc 24h 峰 15,096.3 @ 07-08 09:01Z（BJ 17:01 07-08）</span>
            </div>
            <div>
              <span className="dn-k">聪明钱 Δ · 24h 步</span>
              <span className="dn-v bear">−42.6 → −3,116（新鲜方向性做空）</span>
              <span className="dn-src">24h-ago 的聪明钱净是~平（−42.6，与上一份备忘的~平读法一致）；砍仓比例 |Δ|/前净对一个平的基数无意义——报绝对值：净头寸靠一次多头冲刷 + 空头加仓步进 −3,073 到净空 · <b>不是</b>双边去杠杆（OI 在长）</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">42.7% / 31.72%</span>
              <span className="dn-src">GEX 中位 IV · 878 合约 · 30D 收盘对收盘 RV（30 个回报 / 31 个收盘；29-回报读数 32.25%）· 链级富度约 +11.0pt</span>
            </div>
            <div>
              <span className="dn-k">距 0γ 翻转位</span>
              <span className="dn-v bull">+1.80%（上方）</span>
              <span className="dn-src">翻转位 $61,094（07-08 是 $61,071）· vs live spot $62,194（+1.80%；62,194/61,094 − 1 = 1.797%）/ GEX 文件 Deribit idx $62,498（+2.30%；62,498/61,094 − 1 = 2.298%）——两个参照都为正 · 聚合 GEX +80.6M 净多 gamma（07-08 是 +114.2M——更浅）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                反弹的回撤加深成第三根下跌收盘，收复的 200W 底线在在途周线上
                现在丢了
              </span>。Spot <span className="dn-tag bear">$62,194</span> 坐在{' '}
              <span className="dn-tag bear">$63,062.79 的 W-SMA200 周期底线下方
              −1.38%</span>；在途 07-13 周线收{' '}
              <span className="dn-tag bear">$62,147.10 印在它下方 −1.45%</span>
              （对上 07-08 备忘的 +0.90% 上方），且连续两根日收——07-08{' '}
              <span className="dn-tag bear">$62,255.30</span> 和在途 07-09{' '}
              <span className="dn-tag bear">$62,147.10</span>——都回到了底线下方。
              上一份备忘的「收复完整、在途周在上方」翻成了{' '}
              <span className="dn-em">
                在途周回到下方——重新坐实破线的触发现在已在周内武装
              </span>，但它<span className="dn-em">还不是</span>一根确认的周线收在
              下方：本周要到周一 07-13 才结算，最后一根完整的周线事件仍是 07-06
              的收复（$64,023.60 在上方）。这次回撤下的盘面是真正转空了，不同于
              前两回的「去杠杆、不是需求」读法：{' '}
              <span className="dn-tag bear">OI 反而建了 +995 BTC（+1.00%）</span>
              ——新仓、不是去杠杆——聪明钱从平（−42.6）翻成{' '}
              <span className="dn-tag bear">净空 −3,116</span>，靠一次多头冲刷
              （−1,765）加一次空头建仓（+1,309），而{' '}
              <span className="dn-tag bear">散户往回撤里加多 +5.19pt 到 64.00%</span>。
              资金费仍为正（+6.45% 年化，24h 均 +4.97%，96 负值行，触顶占比 6.0%），
              所以这是一段受控的方向性下行、不是投降式冲刷。做市商这本仍净多
              gamma 但更浅 <span className="dn-tag bull">+80.6M</span>（对上
              +114.2M），翻转位 $61,094 spot 高出 +1.80%、近端无一个像样的负 gamma
              放大器（仅 11JUL26 −0.44M，微不足道），所以下跌是有序的。本子还是{' '}
              <span className="dn-em">平</span>：不在翻转位/$60k 正 gamma 里空、无
              侦察多（价格<b>和</b>需求两个前置条件现在都破了）、无新对冲（OR 门槛
              只有利率腿触发）。唯一那条线是周一 07-13 的周线收盘对 $63,063 底线。
            </p>

            <p>
              BTC live 打 <span className="dn-tag">$62,194</span>，24h{' '}
              <span className="dn-tag bear">−2.00%</span>（24h-ago $63,461），落在{' '}
              <span className="dn-tag">$63,712 / $61,570</span> 区间内（高点 @
              07-08 00:45Z / BJ 08:45 07-08，低点 @ 07-08 15:25Z / BJ 23:25
              07-08）。{' '}
              <span className="dn-signal">
                回撤现在是从 07-06 峰值算起的三连阴腿
              </span>：日收 07-06 <span className="dn-tag bull">$64,023.60</span>
              （收复的顶）、07-07 <span className="dn-tag bear">$63,335.40</span>、
              07-08 <span className="dn-tag bear">$62,255.30</span>、在途 07-09{' '}
              <span className="dn-tag bear">$62,147.10</span>——三个交易日
              −$1,876 的滑落，把价格带回了周期底线下方。均线矩阵塌到只剩一个正
              偏移：spot <span className="dn-tag bull">高于 D-SMA20 $61,805.93
              +0.63%</span>——盘下唯一那条线——且{' '}
              <span className="dn-tag bear">低于 D-EMA20 $62,540.43 −0.55%</span>，
              而 <span className="dn-tag bear">200W 底线 W-SMA200 $63,062.79
              （−1.38%）</span> 现在成了头顶的阻力、不是支撑。{' '}
              <span className="dn-em">
                收复的底线从一条我们守住的底、翻成了一个我们坐在下面的位——那是
                这份备忘的结构性事实。
              </span>{' '}
              阶梯上其余全在头顶、按序：D-EMA50 $65,392（−4.89%）、D-SMA50 $65,654
              （−5.27%）、D-EMA100 $69,042（−9.92%）、D-SMA150 $70,103（−11.28%）、
              D-SMA100 $70,823（−12.18%），然后周线簇从 W-EMA200 $68,928（−9.77%）
              往上。补量反弹侦察的价格前置条件——spot 在翻转位<b>且</b>在
              D-EMA20/D-SMA20 上方<b>且</b>在底线上方——本切三腿破了两腿（在 D-EMA20
              下、在底线下）；它在价格上也和需求上一样保持撤下。
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · live 盘面 · OI 往下行腿里<b>建了 +995 BTC</b> · 聪明钱靠一次多头冲刷 + 空头加仓从平翻成净空 · 散户往多头里挤 · 资金费仍为正（无冲刷）</span>
            </h2>

            <p>
              <span className="dn-signal">
                这是回撤以来仓位本子头一回在加风险、而不是卸风险
              </span>。24h 窗里 OI <span className="dn-tag bear">建了 +995 BTC
              （+1.00%）</span>——07-07 和 07-08 备忘点名的连续两天缩之后头一回 OI
              建仓——而构成是方向性的：聪明钱净头寸从{' '}
              <span className="dn-tag">−42.6（平）</span>步进到{' '}
              <span className="dn-tag bear">−3,115.7（净空）</span>，一个 −3,073 的
              移动，由 long_btc <span className="dn-tag bear">11,950.0 → 10,185.4
              （−1,765）</span> 和 short_btc <span className="dn-tag bear">11,992.6
              → 13,301.2（+1,309）</span> 搭起来。多头这边被冲、空头这边在同一个
              窗里堆——一次真正的转空重仓，不是前两切的双边去杠杆。聪明钱净头寸
              探底 <span className="dn-tag bear">−4,175 @ 07-08 16:26Z（BJ 00:26
              07-09）</span> 后微微收回到进快照的 −3,116；short_btc 峰{' '}
              <span className="dn-tag bear">15,096.3 @ 07-08 09:01Z（BJ 17:01
              07-08）</span> 后流回 13,301，long_btc 探底{' '}
              <span className="dn-tag bear">10,140.3 @ 07-08 23:21Z（BJ 07:21
              07-09）</span>。{' '}
              <span className="dn-em">
                聪明钱砍仓比例是未定义的：24h-ago 净头寸是~平（−42.6，与 07-08
                备忘的~平读法一致），所以 |Δ|/前净没有意义——诚实的读法是进净空的
                绝对步进，不是一个平基数的百分比。
              </span>
            </p>

            <p>
              <span className="dn-signal">
                散户狠狠倾向下跌
              </span>。`mkt_long_pct` 在 24h 里从{' '}
              <span className="dn-tag bear">58.81% → 64.00%（+5.19pt）</span>
              爬升，区间 58.81 / 65.09——散户随 spot 跌 −2.00% 加多，把人群放到
              了聪明钱空头建仓的对立面。那个分裂——散户多、聪明钱空、OI 在建——是
              这轮反弹到目前最干净的一个转空仓位形态。杠杆这边却<span className="dn-em">
              没有</span>投降：资金费守在{' '}
              <span className="dn-tag">+6.45% 年化 live</span>（原值 0.005891%/8h ×
              1095），24h 均 <span className="dn-tag">+4.97% 年化</span>（从 07-08
              备忘的 +8.00% 降温），区间{' '}
              <span className="dn-tag">−0.28% / +10.95%</span>——最大值 @ 07-08
              19:26Z（BJ 03:26 07-09），唯一的负值探底{' '}
              <span className="dn-tag">−0.28% @ 07-08 04:40Z（BJ 12:40 07-08）</span>；
              触顶占比 <span className="dn-tag">86 / 1441 采样行（6.0%）</span>、
              1,441 行里 96 个负值行。永续在快照相对现货贴水{' '}
              <span className="dn-tag bear">−$51.17</span>（1h 均 −$47.31、4h 均
              −$48.65、24h 均 −$55.29、区间 −$167.77 / +$138.14——基差盘中触过升水、
              但均值在贴水）。1 分钟聚合偏斜快照{' '}
              <span className="dn-tag bear">−2.3</span>（24h 均 −0.48）——温和的卖
              倾斜、无超卖反射买。{' '}
              <span className="dn-em">
                OI 在建 + 聪明钱翻空 + 散户挤多头一边 + 资金费守正：杠杆本子在压
                下行腿、不是给它放气——正好是前两切去杠杆的镜像。
              </span>
            </p>

            <p>
              窗口化的流是<em>现货买盘对上一段永续主导的卖，OI 的建仓集中在
              24h、而最后四小时把 OI 又拉了下来</em>。24h：价{' '}
              <span className="dn-tag bear">−2.00%</span>、OI{' '}
              <span className="dn-tag bear">+995 BTC</span>、现货 CVD{' '}
              <span className="dn-tag bull">Δ +1,852</span>（干净，窗内无重置）、
              期货 CVD <span className="dn-tag bear">Δ −395</span>{' '}
              <span className="dn-em">（跨 07-08 06:21Z / BJ 14:21 的 fut_cvd 重置
              做了校正；原始端点 Δ +6,427 被那次计数器重置污染、<b>不是</b>真流）</span>、
              taker-net <span className="dn-tag bear">−500</span>、大单{' '}
              <span className="dn-tag bull">+420 BTC</span>——{' '}
              <span className="dn-em">
                现货在买、而期货和 taker 在一根 −2% 的收盘里净卖、OI 在建：一个
                现货买盘对上永续卖的形态，但现在背后是新鲜的空头 OI、不是前几切的
                去杠杆
              </span>。4h（进快照）：价 <span className="dn-tag bear">−0.11%</span>、
              OI <span className="dn-tag bull">−708 BTC</span>、现货 CVD{' '}
              <span className="dn-tag bull">Δ +1,699</span>、期货 CVD{' '}
              <span className="dn-tag bear">Δ −481</span>、taker-net{' '}
              <span className="dn-tag bear">−483</span>、大单{' '}
              <span className="dn-tag bull">+252 BTC</span>——<em>OI 在最后 4h 又
              下来、现货继续买、永续在卖：盘中的一部分空头堆叠已经回补了</em>。
              1h：价 <span className="dn-tag bear">−0.16%</span>、OI{' '}
              <span className="dn-tag bull">−126 BTC</span>、现货 CVD{' '}
              <span className="dn-tag bear">Δ −187</span>、期货 CVD{' '}
              <span className="dn-tag bear">Δ −103</span>、taker-net{' '}
              <span className="dn-tag bear">−103</span>、大单{' '}
              <span className="dn-tag bull">+55 BTC</span>——<em>安静、进快照
              偏卖</em>。读法：24h 在一个现货买盘背景上建了空头 OI，但最近 4h
              显示那个 OI 在退——空头施压还不是一场单边雪崩。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 又滚空一格 · 5/9 趋势延续「卖反弹」· 新鲜的 1w 水下 + 8h 水上死叉（2b）· 被一簇 12h/1d 底背离 + 一个重印的 1M ⚡ TD9 BUY 对冲 · 均线矩阵只剩一条正线</span>
            </h2>

            <p>
              <span className="dn-signal">
                MTF 引擎又滚空一格，现在读的是往下的趋势延续
              </span>。扫描是 10 框里 1 多 / 7 空 / 2 中性（1M 是唯一那根多；15m +
              4h 中性），一个{' '}
              <span className="dn-tag bear">5/9 周期动量 regime（JT ≥ 0）——趋势延续
              为主</span>，净读法「多 TF 偏空共振、卖反弹」（07-08 是 6/9 / 高周期
              偏空、短周期反弹）。两个新鲜的叉在两根 bar 前打出：{' '}
              <span className="dn-tag bear">1w 水下死叉（DIF −5,878.7）</span>——一个
              弱的、水下的死叉、偏空延续——和{' '}
              <span className="dn-tag bear">8h 水上死叉（DIF +483.9）</span>——一个
              早的、水上的多转空试探。对上这个，反向信号簇守住并加深了：一簇{' '}
              <span className="dn-tag bull">12h/1d 底背离</span>（共六个底背离：
              15m/30m/1h/4h/12h/1d）和一个重印的{' '}
              <span className="dn-tag bull">1M ⚡ TD9 BUY 于 $62,258</span>
              （超卖反转提示，低于 07-08 的 $63,294 印）。1h 翻成一个水下金叉（5b）
              尽管它的 TD 在 Sell 4，日线 TD 从 07-08 的 Sell 7 转成新鲜的 Buy 2。{' '}
              <span className="dn-em">
                直读：更高周期的趋势框确认了下行腿（新鲜的 1w + 8h 死叉），而超卖
                反向信号（12h/1d 底背离、1M TD9 BUY、次日线 Buy 设置）说这段腿拉伸
                了——一个偏空延续的 regime 带着一个超卖反射，两边都不是干净的转向。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 叉</th><th>云（一目）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">62,246</td><td className="num bull">54.6</td><td className="bull">金叉（水上）7b</td><td className="bull">上 ↓62.2k 6b</td><td>Buy 4</td><td>BEAR hid · BEAR reg · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">62,241</td><td className="num">50.9</td><td className="neut">金叉（水下）16b</td><td className="bear">下 ↑62.5k 41b</td><td>Buy 1</td><td>BEAR hid · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">62,245</td><td className="num">45.5</td><td className="neut">金叉（水下）5b</td><td className="bear">下 ↑63.0k 22b</td><td>Sell 4</td><td>BULL reg</td></tr>
                <tr><td>4h</td><td className="num">62,245</td><td className="num">45.7</td><td className="bear">死叉（水上）12b</td><td className="bull">上 ↓61.5k 34b</td><td>Buy 7</td><td>BEAR reg · BULL reg</td></tr>
                <tr><td>8h</td><td className="num">62,245</td><td className="num">49.6</td><td className="bear">死叉（水上）2b</td><td className="neut">云中 60.7–62.6k 2b</td><td>Buy 5</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">62,254</td><td className="num">50.4</td><td className="neut">金叉（水下）15b</td><td className="neut">云中 62.2–66.1k 1b</td><td>Buy 4</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>1d</td><td className="num">62,241</td><td className="num">46.1</td><td className="neut">金叉（水下）8b</td><td className="bear">下 ↑65.3k 38b</td><td>Buy 2</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>3d</td><td className="num">62,246</td><td className="num bear">40.7</td><td className="neut">—</td><td className="bear">下 ↑70.9k 12b</td><td>Sell 2</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">62,254</td><td className="num bear">37.2</td><td className="bear">死叉（水下）2b</td><td className="bear">下 ↑98.7k 23b</td><td>Buy 1</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">62,258</td><td className="num">42.8</td><td className="neut">—</td><td className="bull">上 ↓47.0k 29b</td><td>⚡ TD9 BUY</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 00:01Z 扫描（BJ 08:01；滚动最新文件，
                    已逐字归档到 /opt/desk-note/snapshots/2026-07-09-0005/）。表头
                    警报：<em>1w 水下死叉 2b（DIF −5,878.7）</em>、{' '}
                    <em>8h 水上死叉 2b（DIF +483.9）</em>、{' '}
                    <em>1M ⚡ TD9 BUY $62,258</em>。净读{' '}
                    <em>1 多 / 7 空 / 2 中性 · 趋势延续、卖反弹 · ⚠ 高周期底背离簇
                    （12h/1d）</em>。扫描 spot $62,241，24h −1.63%（Binance 永续
                    kline 窗；live 盘面 24h 在 spot −1440min 上读 −2.00%，不同参照和
                    窗口），高/低 $63,740 / $61,520，qVol $10.15B。收盘均为在途 bar；
                    每个值在各 TF 收盘前都当临时值看。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              均线矩阵坐实了底线丢失。spot $62,194 只守住一个正偏移——{' '}
              <span className="dn-tag bull">高于 D-SMA20 $61,805.93 +0.63%</span>
              ——并坐在其余每条线下方：{' '}
              <span className="dn-tag bear">D-EMA20 $62,540.43（−0.55%）</span>、
              <span className="dn-tag bear">200W 底线 W-SMA200 $63,062.79
              （−1.38%）</span>，然后 <span className="dn-tag bear">D-EMA50
              $65,392.40（−4.89%）</span>、{' '}
              <span className="dn-tag bear">D-SMA50 $65,654.06（−5.27%）</span>、
              <span className="dn-tag bear">W-EMA200 $68,927.93（−9.77%）</span>、
              <span className="dn-tag bear">D-EMA100 $69,041.90（−9.92%）</span>、
              <span className="dn-tag bear">D-SMA150 $70,102.82（−11.28%）</span>、
              <span className="dn-tag bear">D-SMA100 $70,822.94（−12.18%）</span>、
              <span className="dn-tag bear">W-EMA20 $71,321.22（−12.80%）</span>、
              <span className="dn-tag bear">D-EMA150 $72,224.17（−13.89%）</span>、
              <span className="dn-tag bear">D-SMA200 $74,229.31（−16.21%）</span>、
              <span className="dn-tag bear">W-EMA150 $74,700.84（−16.74%）</span>、
              <span className="dn-tag bear">D-EMA200 $75,148.05（−17.24%）</span>、
              <span className="dn-tag bear">W-SMA150 $76,151.77（−18.33%）</span>，
              然后弃用的深周线 W-EMA50 $80,347.78（−22.59%）、W-EMA100 $80,178.10
              （−22.43%）、W-SMA50 $87,612.54（−29.01%）、W-SMA100 $88,589.51
              （−29.80%）。近线集现在是一条薄的 $61.8k–$63.1k 带：D-SMA20 支撑在
              下方一点、D-EMA20 和 200W 底线在上方一点。{' '}
              <span className="dn-em">
                均线锚在 parquet 末 bar 2026-07-09 00:05Z（收 $62,147.10）；偏移
                按 live spot $62,194.00 重算。显示的均线值按 $ 取整；偏移用精确序列
                值算。完整 2019→ parquet glob 加载（358 根周线 bar），所以 W-SMA150 /
                W-SMA200 本切可算——无需 seed-only 披露。日收：07-04 $63,114.80、
                07-05 $63,617.10、07-06 $64,023.60、07-07 $63,335.40、07-08
                $62,255.30、07-09（在途）$62,147.10——连续三根下跌收盘，最后两根在
                周期底线下方。30D 收盘对收盘 RV 31.72%（30 个回报 / 31 个收盘上
                logret.std × √365 × 100；29-回报读数 32.25%）。
              </span>
            </p>

            <h2 className="dn-sec">
              做市商图 <span className="dn-roman">III · 本子仍净多 gamma 但更浅 +80.6M（07-08 是 +114.2M）· 翻转位 $61,094 spot 高出 +1.80% · $63k +16.27M 墙盖住反弹 · $56–60k −29.3M 簇接住下跌 · 近端无一个像样的负 gamma 放大器（仅 11JUL26 −0.44M）</span>
            </h2>

            <p>
              <span className="dn-signal">
                做市商这本仍净多 gamma、但卸掉了三分之一的深度
              </span>。聚合 GEX 是 <span className="dn-tag bull">+80.6M / 1%</span>
              （07-08 是 +114.2M，07-07 是 +157.8M——这轮一直在变浅），仍在压波动。
              0γ 翻转位是 <span className="dn-tag">$61,094</span>（07-08 是 $61,071），
              spot $62,194 按现货计价数学{' '}
              <span className="dn-tag bull">高出 +1.80%</span>（62,194 / 61,094 − 1
              = +1.797%）；GEX 文件自己的&ldquo;dist to flip&rdquo;读{' '}
              <span className="dn-tag bull">+2.3%</span>（对其 Deribit-index
              $62,498，比 live spot 高 $304），即{' '}
              <span className="dn-tag bull">+2.30%</span>（62,498 / 61,094 − 1 =
              +2.298%）——两个参照都为正、spot 在两个上都在翻转位上方，但垫子从
              07-08 备忘的 +3.87% 收窄了、因为价格往翻转位跌。墙图夹住盘口：最重的
              正墙是 <span className="dn-tag bull">$63k +16.27M</span>（就在头顶、
              约 +1.3%），后面接{' '}
              <span className="dn-tag bull">$65k +15.75M</span>、{' '}
              <span className="dn-tag bull">$64k +14.69M</span>、{' '}
              <span className="dn-tag bull">$66k +13.10M</span>、{' '}
              <span className="dn-tag bull">$70k +12.16M</span>、{' '}
              <span className="dn-tag bull">$68k +9.98M</span>、{' '}
              <span className="dn-tag bull">$80k +7.68M</span>；负值簇在下方——{' '}
              <span className="dn-tag bear">$60k −15.96M</span>（最重的负值）、{' '}
              <span className="dn-tag bear">$58k −7.06M</span>、{' '}
              <span className="dn-tag bear">$56k −6.32M</span>——$56–60k 带加总
              ≈ −29.3M。{' '}
              <span className="dn-em">
                本子在往 $63k–$66k 正带里的挤压里卖（那盖住反弹）、往 $60k 的下跌里
                接（那里的负簇放大一次破位）——一个压波动的侧写，把价格夹在翻转位和
                $63k 之间，直到一个到期或一股现货流打破它。
              </span>{' '}
              按到期看，近端无一个像样的负 gamma 放大器：9JUL 0.3DTE{' '}
              <span className="dn-tag">+0.09M</span>（今日 08:00Z 结算、在本快照之后、
              微不足道）、10JUL 1.3 +16.83M、11JUL 2.3{' '}
              <span className="dn-tag bear">−0.44M</span>（近端但微不足道、不放大）、
              17JUL 8.3 +18.25M、31JUL 22.3 +25.35M（最重的一块 forward、为正）、
              28AUG 50.3 +4.81M、25SEP 78.3{' '}
              <span className="dn-tag bear">−2.25M</span>（一个小的 forward 负值）、
              25DEC 169.3 +1.00M、26MAR27 260.3 +0.72M。微小的 11JUL −0.44M 和 25SEP
              −2.25M 负值被近端的正条带盖过；驱动 06-29 破线的那个放大器不在近端
              条带上，所以回撤没带一个就跑了。
            </p>

            <p>
              878 个合约的中位 IV 是 <span className="dn-tag">42.7%</span>，对上
              30D 收盘对收盘 RV <span className="dn-tag">31.72%</span>——链级富度{' '}
              <span className="dn-tag">约 +11.0pt</span>。Put/Call OI 比{' '}
              <span className="dn-tag">0.56</span>（call OI 237,380 / put OI
              133,146 BTC）——call 偏重的未平仓，与头顶的正 gamma 墙带一致。{' '}
              <span className="dn-em">
                这是 N 个合约的链级中位、<em>不是</em>一个可交易的价差；到期/行权价级
                的 vega、skew 和期限结构仍未加载，所以波动读法保持仅作框架。
              </span>{' '}
              RV 方法：30D 收盘对收盘，最后 30 个日对数回报（= 31 个连续日收）上
              logret.std × √365 × 100，锚在 parquet 末 bar 2026-07-09 00:05Z；
              29-回报读数 32.25%。IV 42.7% 较 07-08 备忘的 regime 走高——链在给
              回撤的波动定价，但 +11.0pt 的富度说已实现还没追上隐含。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · 利率/美元<b>狠狠</b>转硬偏空（10Y +7bp 到 4.55%、TIPS 2.30% EXTREME、DXY 101.12 EXTREME）· 10Y put-价差重开门槛<b>触发</b>（&gt;4.53%）、收复做多利率过滤掉到 4.55% 边界 · HY 信用进一步走松（2.67% RISK-ON）· 跨资产<b>重新耦合</b>到 NORMAL（|r| 0.295）</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观盘面分裂：利率和美元狠狠转硬偏空、而信用进一步走松
              </span>。仪表盘渲染是 2026-07-08 22:16Z，快照前约 1.8h。美 10Y 名义{' '}
              <span className="dn-tag bear">4.55%（+7.0bp）</span>，regime z{' '}
              <span className="dn-tag bear">+1.92</span>，episodic z{' '}
              <span className="dn-tag">+1.47</span>——RISK-OFF、转硬。10Y TIPS 实际{' '}
              <span className="dn-tag bear">2.30%（+6.0bp）</span>，regime z{' '}
              <span className="dn-tag bear">+2.80</span>，episodic z{' '}
              <span className="dn-tag bear">+1.79</span>——EXTREME RISK-OFF
              episodic。5Y5Y BE 通胀{' '}
              <span className="dn-tag">2.19%（−3.0bp）</span>——无标签。HY OAS{' '}
              <span className="dn-tag bull">2.67%（−5.0bp）</span>，regime z{' '}
              <span className="dn-tag bull">−1.41</span>，episodic z{' '}
              <span className="dn-tag bull">−1.24</span>——RISK-ON、进一步走松。
              MOVE 债波 <span className="dn-tag">72.4（+7.0）</span>——中性、更硬。
              DXY <span className="dn-tag bear">101.12（+0.27）</span>，regime z{' '}
              <span className="dn-tag bear">+2.34</span>——EXTREME RISK-OFF；联储净
              流动性 <span className="dn-tag">$5.843T（+0.053T）</span>，episodic z
              +2.11、紧。US-JP 10Y 利差{' '}
              <span className="dn-tag">1.90%（+7.0bp）</span>；USD/JPY{' '}
              <span className="dn-tag">162.15（+0.06）</span>；USD/CNY 6.7969。{' '}
              <span className="dn-em">
                净：put-价差重开门槛的 10Y 腿在本谱系里<b>头一回触发</b>——10Y 4.55%
                比 4.53% 门槛高 2bp——而收复做多的利率过滤（10Y &lt; 4.55%）掉到了它的
                边界（4.55% 在线上、不是线下，所以过滤不再干净地 true）。HY OAS 腿
                相反、进一步离它的门槛松开——2.67% 现在比 2.78% 触发低 11bp（07-08
                是 6bp）。OR 门槛在利率上技术性跳了，但信用决定性地松、且本子没有
                持有的对冲，所以这次触发是一个观察事件、不是自动滚仓——而且 BTC
                本切是在交易它自己的底线丢失、不是利率。
              </span>{' '}
              JGB 月度 2.65%（旧 68d）带 EXTREME RISK-OFF——勿依赖。
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>宏观指标</th>
                  <th>水平</th>
                  <th>Δ</th>
                  <th>regime z</th>
                  <th>episodic z</th>
                  <th>读</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>美 10Y 名义</td><td className="num">4.55%</td><td className="num bear">+7.0bp</td><td className="num bear">+1.92</td><td className="num">+1.47</td><td className="bear">紧 · RISK-OFF · 转硬</td></tr>
                <tr><td>10Y TIPS 实际</td><td className="num">2.30%</td><td className="num bear">+6.0bp</td><td className="num bear">+2.80</td><td className="num bear">+1.79</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.19%</td><td className="num bull">−3.0bp</td><td className="num">−0.52</td><td className="num">−1.13</td><td className="neut">无标签</td></tr>
                <tr><td>HY OAS</td><td className="num">2.67%</td><td className="num bull">−5.0bp</td><td className="num bull">−1.41</td><td className="num bull">−1.24</td><td className="bull">松 · RISK-ON</td></tr>
                <tr><td>芝加哥联储 NFCI</td><td className="num">−0.515</td><td className="num">−0.01</td><td className="num">−0.06</td><td className="num bull">−2.13</td><td className="neut">中性 · episodic</td></tr>
                <tr><td>MOVE 债波</td><td className="num">72.4</td><td className="num bear">+7.0</td><td className="num">−0.21</td><td className="num">+0.30</td><td className="neut">中性 · 更硬</td></tr>
                <tr><td>DXY</td><td className="num">101.12</td><td className="num bear">+0.27</td><td className="num bear">+2.34</td><td className="num">+1.04</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>联储净流动性</td><td className="num">$5.843T</td><td className="num bull">+0.053T</td><td className="num">−0.60</td><td className="num">+2.11</td><td className="bear">紧 · episodic</td></tr>
                <tr><td>USD/JPY</td><td className="num">162.15</td><td className="num">+0.06</td><td className="num bear">+1.54</td><td className="num">+1.29</td><td className="neut">无标签</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">1.90%</td><td className="num bear">+7.0bp</td><td className="num bull">−0.78</td><td className="num">+1.47</td><td className="bull">紧</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7969</td><td className="num">+0.00</td><td className="num bull">−1.29</td><td className="num">+1.41</td><td className="neut">无标签</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">+13.5bp（月度）</td><td className="num bear">+2.56</td><td className="num">+1.43</td><td className="stale">月度（68d）· 勿依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗，22 个资产，167 行，摘要 00:01Z——{' '}
              <span className="dn-em">滚动 7 天读数，非当日</span>）。非对角均{' '}
              <span className="dn-tag">|r| 0.295</span>——{' '}
              <span className="dn-signal">
                一次重新耦合：相关性穿回 0.25 门槛上方、进 NORMAL 带
              </span>，从 07-08 备忘的 0.201 IDIOSYNCRATIC 读法。BTC 挂牌的挂钩
              转硬并轮到金属 + 广股复合体：SILVER{' '}
              <span className="dn-tag">+0.413</span>、PLAT{' '}
              <span className="dn-tag">+0.393</span>、SP500{' '}
              <span className="dn-tag">+0.384</span>、COPPER{' '}
              <span className="dn-tag">+0.374</span>、NQ{' '}
              <span className="dn-tag">+0.374</span>、GOLD{' '}
              <span className="dn-tag">+0.369</span>、JP225{' '}
              <span className="dn-tag">+0.336</span>、CL{' '}
              <span className="dn-tag">−0.328</span>、BRENT{' '}
              <span className="dn-tag">−0.312</span>、NVDA{' '}
              <span className="dn-tag">+0.304</span>。7d 表现：{' '}
              <span className="dn-tag bull">BTC +4.24%</span>（在从 06-30 低点算起的
              滚动一周上仍是复合体冠军）、NQ{' '}
              <span className="dn-tag bear">−1.87%</span>、SP500{' '}
              <span className="dn-tag bear">−0.07%</span>、JP225{' '}
              <span className="dn-tag bear">−1.87%</span>、NVDA{' '}
              <span className="dn-tag bull">+2.92%</span>、AAPL{' '}
              <span className="dn-tag bull">+5.82%</span>（唯一领先 BTC 的大盘股）、
              TSLA <span className="dn-tag bear">−6.56%</span>（最差）、META{' '}
              <span className="dn-tag bear">−1.32%</span>。金属分化：GOLD{' '}
              <span className="dn-tag bull">+0.65%</span>、SILVER{' '}
              <span className="dn-tag bear">−1.82%</span>、PLAT{' '}
              <span className="dn-tag bull">+0.35%</span>。能源上冲（与 BTC 负相关）：
              CL <span className="dn-tag bull">+9.43%</span>、BRENT{' '}
              <span className="dn-tag bull">+10.77%</span>。{' '}
              <span className="dn-em">
                BTC 在滚动 7d 上仍领先股指复合体（+4.24% vs NQ −1.87% = +6.11pt），
                因为窗口开在 06-30 的投降低点，但最近三个交易日是 BTC 在跌、NQ/SP500
                在震荡——重新耦合是在下跌里发生的，而 BTC 对偏空的金属 + 股指复合体的
                挂钩现在是承重的宏观读法，因为 idiosyncratic 窗口已经关了。
              </span>
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · 200W 收复监控——在途周<b>回到</b>底线下方，重新坐实破线的触发已在周内武装（还不是一根确认的周线收在下方）· 补量反弹侦察<b>撤下</b>（价格和需求两个前置条件现在都破了）· 宏观尾巴——OR 门槛的利率腿触发、信用未触发、无持有对冲 · 挤压周期<b>安静</b>（方向性空头建仓、无同分钟再堆叠）· 无新交易</span>
            </h2>

            <p>
              <span className="dn-signal">
                本子保持平，且主监控翻转了
              </span>。前三份备忘追踪的那个收复在在途周线上被交还了：spot 在底线
              下方、07-13 在途收盘在底线下方、两根日收在下方。重新坐实破线的触发
              ——一根完整的 07-13（或更晚）周线收在底线下方——现在已在周内武装，但
              <span className="dn-em">还没</span>触发（本周要到周一 07-13 才结算）。
              补量反弹侦察——07-08 备忘已经因需求把它撤下——现在连它的价格前置条件
              也破了。宏观尾巴的利率腿跳了它的重开门槛，但信用没确认、也没有对冲可
              滚。今天的交易本子是：无空、无侦察入场、无新对冲——等周线收盘来解决
              底线、等仓位本子显示空头建仓是一次施压还是一次性动作。
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">framework · PRIMARY · 200W 周期底线监控——收复在在途周线上被交还：spot $62,194 在 $63,062.79 底线下方 −1.38%、在途 07-13 周 $62,147.10 印在它下方 −1.45%（07-08 是 +0.90% 上方）、两根日收在下方（07-08 $62,255.30、07-09 $62,147.10）；最后一根<b>完整</b>的周线事件仍是 07-06 收复（$64,023.60 上方）；06-15 收复论保持 FALSIFIED</span>
              <div className="dn-trade-name">
                200W 底线——收复在周内被交还；重新坐实破线的触发已武装、但在周一 07-13 周线收盘前未确认
              </div>
              <div className="dn-thesis">
                阶梯式 W-MON W-SMA200 底线爬到了 $63,062.79（从 07-08 备忘的
                $62,864——底线每周涨约 $200）。07-06 周线收 $64,023.60 收复了它
                （+1.84%），是 06-29 破线坐实以来第一根收在上方的周线；07-08 备忘
                显示在途 07-13 周仍在上方 +0.90%。本切回撤把在途周拖回下方：07-13
                在途收 $62,147.10 在底线下方 −1.45%、spot $62,194 在下方 −1.38%、
                07-08 / 07-09 两根日收都结在下方。那是收复位一次真正的周内丢失，但
                它<em>不是</em>一根确认的周线收在下方——本周周一 07-13 结算，在那之前
                最后一根完整的周线事件是 07-06 收复。状态：<em>收复在最后一根完整周线
                收盘上完整；在途周回到下方；重新坐实破线触发已武装、未确认</em>。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W 底线</span><span className="dn-lvl-v">$63,062.79 = 全历史 W-MON W-SMA200，本切从 2019→ parquet glob 重算（358 根周线 bar，最后一根完整为 07-06 周 $62,863.98，在途 07-13 周 $63,062.79）。权威 weekly_200sma.json 缺失，所以比率百分位 / 末事件保持未取（不是编造）</span></div>
                <div><span className="dn-lvl-k">破线 — CONFIRMED（先前）</span><span className="dn-lvl-v bear">06-29 周线收 $60,224.70 结在当时底线 $62,642.79 下方 −3.86%；06-30 日收 $58,605.40 最深</span></div>
                <div><span className="dn-lvl-k">收复 — 最后一根完整周线收盘</span><span className="dn-lvl-v bull">07-06 周线收 $64,023.60（在 $62,863.98 底线上方 +1.84%）——破线以来第一根收在上方的周线；仍是最后一根<b>已结算</b>的周线事件</span></div>
                <div><span className="dn-lvl-k">在途周 — 回到下方</span><span className="dn-lvl-v bear">07-13 在途收 $62,147.10（在 $63,062.79 底线下方 −1.45%）；spot 下方 −1.38%；07-08 & 07-09 两根日收都在底线下方</span></div>
                <div><span className="dn-lvl-k">重新坐实破线触发（已武装、未确认）</span><span className="dn-lvl-v bear">一根完整的 07-13（或更晚）周线收 &lt; $63,062.79 重新坐实破线、重新证伪反弹——反转本监控的唯一那条线；本周周一 07-13 结算</span></div>
                <div><span className="dn-lvl-k">再收复（对破线的多头证伪）</span><span className="dn-lvl-v bull">一根 07-13 周线收回 $63,062.79 上方让收复存活——spot 进结算需 +1.38%</span></div>
              </div>
              <div className="dn-gating">
                <b>监控纪律：</b>200W 是一条周线收盘位，本台在完整周线收盘上读它
                ——一次周内下穿是一个警告、不是确认。06-29 破线要一根完整周线收在
                下方；07-06 收复要一根完整周线收在上方；重新坐实破线要一样的。本备忘
                标记在途周在底线下方并武装触发，但在周一 07-13 结算印在下方之前，
                不把反弹当作被重新证伪。仅凭周内下穿不建任何仓。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · 侦察 · 撤下 · 两个前置条件现在都破了——价格前置条件本切<b>失败</b>（spot 在 D-EMA20 下、在收复的底线下）叠加已经在恶化的需求块；入场推迟到价格再收复底线<b>且</b>需求确认</span>
              <div className="dn-trade-name">
                补量反弹侦察——价格前置条件在底线丢失上失败；需求仍在净卖；两腿都撤下
              </div>
              <div className="dn-thesis">
                侦察穿过收复一直持有一个有效的价格前置条件（spot 在翻转位上、在
                D-EMA20/D-SMA20 上、在底线上），但在 07-07 和 07-08 被撤下、因为
                需求块从没确认。本切价格腿也失败了：spot $62,194 仍在翻转位上方
                （+1.80%）、在 D-SMA20 上方（+0.63%），但它<em>在</em> D-EMA20 下方
                （−0.55%）、<em>在</em> 200W 底线下方（−1.38%）——三条价格腿现在破了
                两条。而需求进一步恶化：OI 往下行腿里建了（+995 BTC）、聪明钱翻成
                净空（−3,116）、taker/期货 CVD 净卖（−500 / 重置校正 −395）、散户
                挤到多头一边（+5.19pt）。当价格丢了底线、仓位本子在建空时，补量反弹
                论没有任何一个版本是活的。侦察在价格和需求两方面都保持撤下。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v bear">撤下 · 无入场 · 仅在价格以收盘口径再收复底线（$63,062.79）<b>且</b> D-EMA20（$62,540），<b>外加</b>一个需求确认（上涨时 OI 在建 + taker-net 转正 + 聪明钱重建多）时才重评</span></div>
                <div><span className="dn-lvl-k">价格前置条件（3 腿破 2 腿）</span><span className="dn-lvl-v bear">翻转位 $61,094 收复 TRUE（spot 高出 +1.80%）· D-SMA20 $61,806 TRUE（+0.63%）· D-EMA20 $62,540 FALSE（−0.55%）· 200W 底线 $63,063 FALSE（−1.38%）</span></div>
                <div><span className="dn-lvl-k">需求前置条件（未满足——恶化）</span><span className="dn-lvl-v bear">OI +995 BTC（在建、不是去杠杆）· taker-net −500 / 期货 CVD −395（净卖）· 聪明钱净 −42.6 → −3,116（翻空、本需重建多）· 散户 +5.19pt 到 64.00%（挤在错误一边）</span></div>
                <div><span className="dn-lvl-k">引擎确认</span><span className="dn-lvl-v bear">未 true——1 多 / 7 空 / 2 中性，5/9 趋势延续「卖反弹」；新鲜的 1w + 8h 死叉，被 12h/1d 底背离和一个 1M ⚡ TD9 BUY 对冲</span></div>
                <div><span className="dn-lvl-k">止损（若曾触发）</span><span className="dn-lvl-v bear">一根完整周线收 &lt; $63,062.79 重新坐实破线、彻底终结反弹读法</span></div>
              </div>
              <div className="dn-gating">
                <b>纪律：</b>侦察从来不是一个只看价格的交易——它需要一个需求印才能把
                收复翻成一个多。收复现在在周内被交还，价格论翻转了：在这里做侦察多是
                在周期底线下方、买进一本接往 $60k 下跌的正 gamma 做市商盘、对着一次
                聪明钱空头建仓。正确的入场是以收盘口径再收复底线 + D-EMA20、且需求
                确认——不是在一个丢了的位下方抄底。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · 宏观尾巴 · put-价差重开 OR 门槛的 10Y 腿<b>头一回触发</b>（10Y 4.55% &gt; 4.53% 门槛）、收复做多利率过滤（10Y &lt; 4.55%）掉到它的边界；HY OAS 腿进一步离它的门槛松开（2.67% vs 2.78%，现低 11bp）；无持有对冲、信用未触发——触发是一个观察事件、不是自动滚仓</span>
              <div className="dn-trade-name">
                下行 put-价差——OR 门槛的利率腿跳了、信用腿没有；无仓位在场、所以不滚——标记、未动作
              </div>
              <div className="dn-thesis">
                无下行对冲在场。会武装一个的 OR 门槛现在分裂了：10Y 腿<b>触发</b>——
                10Y 4.55%（+7bp）比 4.53% 门槛高 2bp，是本谱系头一回——而 HY OAS 腿
                进一步松到 2.67%（−5bp），现在比它的 2.78% 门槛低 11bp（07-08 是
                6bp）。同时收复做多的利率过滤（10Y &lt; 4.55%）掉到了它的边界
                （4.55% 在线上、不是线下）。因为本子没有对冲、且信用决定性地松
                （HY OAS regime z −1.41，RISK-ON），利率腿的触发是一个观察事件、
                而不是自动滚仓：一次利率上的单腿 OR 门槛跳、信用未确认，本身不足以
                长一条尾巴——而 BTC 本切是在交易它自己的底线丢失、不是利率。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">无仓位 · OR 门槛分裂——10Y 腿<b>触发</b>（4.55% &gt; 4.53%）、HY OAS 腿未触发（2.67% &lt; 2.78%，低 11bp）</span></div>
                <div><span className="dn-lvl-k">重开触发（10Y 腿触发）</span><span className="dn-lvl-v bear">10Y &gt; 4.53% 收盘——现在 TRUE 于 4.55%（高 2bp）；HY OAS &gt; 2.78% 腿保持未触发于 2.67%</span></div>
                <div><span className="dn-lvl-k">收复做多利率过滤</span><span className="dn-lvl-v bear">10Y &lt; 4.55% 收盘——在边界（4.55%），不再干净地 TRUE；再往上一跳就翻 FALSE</span></div>
              </div>
              <div className="dn-gating">
                <b>提醒：</b>重开门槛（HY OAS &gt; 2.78%、10Y &gt; 4.53%）是随水平漂移
                设的自由裁量监控、不是回测的断点，而 OR 门槛在单腿（利率）上触发、
                另一腿（信用）在松开、是比两腿确认更弱的信号。若一条对冲曾在两腿触发上
                武装，它会滚到一个近端 forward（例如 17JUL 8.3DTE 或 24JUL 15.3DTE），
                但当前做市商拆条净多 gamma、近端无一个像样的负 gamma 放大器（仅
                11JUL26 −0.44M，微不足道），所以新尾巴不会带放大器顺风。本切无对冲。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · 挤压周期 hostile-2 观察名单 · 无日历先验 · 本切对再堆叠特征<b>安静</b>——聪明钱源平滑更新（无离散的同分钟 Δ空 &gt; 0 + Δ多 &lt; 0 步）——但 24h <b>净</b>移动是一次真正的<b>方向性空头建仓</b>（多 −1,765、空 +1,309、净平 → −3,116），不是前一切的双边冲刷</span>
              <div className="dn-trade-name">
                挤压周期——无合格的同分钟再堆叠，但 24h 净流是一次 OI 在长的方向性空头建仓（前几切去杠杆的镜像）
              </div>
              <div className="dn-thesis">
                挤压周期框架盯一个再堆叠 hostile-2 特征（同分钟 Δ空 &gt; 0 + Δ多 &lt; 0）
                作为一个离散的延展事件；它的 7 天 BJ 13–15 日历先验在 05-31 被证伪、
                保持死亡。本切聪明钱源平滑更新（24h 里 289 个不同状态），所以没有单
                分钟再堆叠步打出。但 24h 净流明确是方向性的：聪明钱净头寸从平（−42.6）
                步进到净空（−3,116），靠一次多头冲刷（−1,765）和一次空头加仓（+1,309），
                同时 OI 长了 +995 BTC——07-07 和 07-08 备忘描述的双边去杠杆的反面。当作
                一个信号本身来读：聪明钱在底线丢失里建了一个净空、散户挤在多头一边。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">框架状态</span><span className="dn-lvl-v">live 源 · 本切无合格的同分钟 hostile-2 步（源平滑更新）· 24h 聪明钱移动是一次方向性空头建仓（净平 → −3,116，OI +995），不是一次双边冲刷</span></div>
                <div><span className="dn-lvl-k">聪明钱净路径（24h）</span><span className="dn-lvl-v bear">−42.6（24h-ago）→ +1,470 最大 @ 07-08 02:41Z（BJ 10:41）→ −4,175 最小 @ 07-08 16:26Z（BJ 00:26 07-09）→ −3,116 快照</span></div>
                <div><span className="dn-lvl-k">前向 gating</span><span className="dn-lvl-v">把每个新鲜的 Δnet ≤ −3k 印当一个信号读（无时段先验）；一根完整周线收在底线下方 + 聪明钱净延展做空是肯定性的重新坐实破线读法；聪明钱净往平回建、价格再收复底线是反弹存活读法</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>同分钟再堆叠特征是一个盘面读、不是一个基率——日历
                先验已死。一次平滑的方向性空头建仓（本切）和一个离散的 hostile-2 步
                是不同的动物；两个打出时都有意义，但平滑建仓被读作下行腿的仓位流确认、
                而不是一个挤压点火的替身。把任何新鲜的离散步当一个信号、不是一个时间表。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 收复在周内被交还（触发已武装、未确认）· 盘面真正转空（OI 在建、聪明钱空、散户多）· 做市商盘压住区间 · 侦察两腿都撤下 · 本子平——等周一 07-13 的周线收盘</span>
            </h2>

            <p>
              07-08 那些条件里：200W 收复监控在在途周线上<b>翻转</b>了（spot 和
              07-13 在途收盘都回到底线下方；重新坐实破线的触发已武装、但在周一
              07-13 结算前未确认）；补量反弹侦察<b>没有</b>触发、本切在需求块之上
              连价格前置条件也<b>失败</b>了（底线丢、D-EMA20 丢）；宏观重开 OR 门槛
              的 10Y 腿头一回<b>触发</b>（4.55% &gt; 4.53%）、而 HY OAS 腿进一步走
              开、收复做多利率过滤掉到它的边界；挤压周期 hostile-2 观察名单对再堆叠
              特征保持<b>安静</b>、但 24h 聪明钱流转成一次方向性空头建仓；上一份备忘
              需要用来做侦察的需求块再一次<b>恶化</b>（OI 在建、聪明钱空、CVD/taker
              净卖、散户挤多）。<em>唯一干净触发的条件是周内底线丢失——其余全是盘面
              在确认一段下行腿、而不是一个离散的触发。</em>条件围绕一个周内丢失的底线、
              一本转空的仓位本子、一段压波动的做市商拆条、和一个平的交易本子重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水平</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>200W 重新坐实破线（PRIMARY · 已武装、未确认）</td><td className="bear">一根完整的 07-13（或更晚）周线收 &lt; $63,062.79（在途周已在下方 −1.45%）</td><td>重新坐实破线、重新证伪反弹；反转本监控的唯一那条线——但等周一 07-13 结算，不在周内下穿上建仓</td></tr>
                <tr><td>200W 再收复（反弹存活）</td><td className="bull">一根 07-13 周线收回 $63,062.79 上方（spot 进结算需 +1.38%）</td><td>在完整周线收盘上让收复存活；重新武装侦察的价格前置条件</td></tr>
                <tr><td>补量反弹侦察（多）— 两腿都撤下</td><td className="bear">价格：以收盘再收复底线 $63,063 且 D-EMA20 $62,540 · 需求：上涨时 OI 在建 + taker-net 转正 + 聪明钱重建多</td><td>在价格再收复底线且需求确认前无入场；在丢了的底线下方抄底不是那个交易</td></tr>
                <tr><td>做空重新武装（低基率）</td><td className="bear">一根完整周线收在底线下方 且 聪明钱净延展 &lt; −5k 且 一根日收 &lt; D-SMA20 $61,806</td><td>会重新武装一个朝 $60k / $56k 负 gamma 簇的空；基率低——做市商盘接下跌、近端无一个像样的放大器（仅 11JUL26 −0.44M）</td></tr>
                <tr><td>宏观尾巴重开（OR 门槛分裂）</td><td className="bear">10Y &gt; 4.53% 触发（4.55%）；HY OAS &gt; 2.78% 未触发（2.67%，低 11bp）</td><td>单腿利率触发、信用未确认、无持有对冲 → 只标记；两腿触发会把一条尾巴滚到 17JUL/24JUL forward</td></tr>
                <tr><td>收复做多利率过滤</td><td className="bear">10Y &lt; 4.55% 收盘——在边界（4.55%），不再干净地 TRUE</td><td>收复做多的利率许可已滑到中性；需要一个 BTC 内部枢轴<b>且</b>利率回到 4.55% 下方</td></tr>
                <tr><td>挤压周期 hostile-2（FALSIFIED 日历）</td><td className="stale">本切无同分钟再堆叠；7 天 BJ 13–15 基率死亡</td><td>把每个新鲜的离散 Δnet ≤ −3k 当一个信号本身读——无时段先验；平滑的方向性空头建仓是下行腿确认、不是一个挤压替身</td></tr>
              </tbody>
            </table>

            <p>
              重写<em>这份</em>备忘的唯一那条线是{' '}
              <span className="dn-signal">
                周一 07-13 的周线收盘到底会不会结在 $63,062.79 底线下方——重新坐实
                破线、重新证伪反弹——还是抓回它上方、在完整周线收盘上让收复存活
              </span>。在那根结算印出来之前，周内的底线丢失是一个警告、不是一个确认，
              本子不在下穿本身上建任何仓。这份备忘按写的跑：200W 监控武装到重新坐实
              破线、但未确认，补量反弹侦察在价格和需求上都撤下，宏观尾巴的利率腿在
              信用没确认下触发，挤压周期框架把 24h 读成一次方向性空头建仓、而不是一个
              离散的再堆叠。盘面本切真正转空了——OI 在建、聪明钱翻空、散户挤在多头一边、
              资金费守正——但做市商盘仍把区间压在翻转位和 $63k 之间，而最后一根完整
              周线收盘仍是一次收复。下一个 24h 的正确读法是{' '}
              <em>耐心——底线由周线收盘定、不是周内的插针</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2 · 已过 codex 敌对式审计——所有 finding 已解决
            </span>
            <b>状态：</b>这是 v2 EN 备忘的中文同版，在 STAGE B codex 敌对但公允
            审计（判定 PASS-WITH-NOTES · 0 CRITICAL · 0 MAJOR · 4 MINOR）加上补充的
            ask-deepseek 数值二审（2 CRITICAL · 1 MINOR，由 STAGE C 按重算裁定）
            之后晋级。Findings 与 grep 收口记录如下；完整记录在{' '}
            <code>audits/2026-07-09-desk-note.md</code>。每一条 finding 都在其错误
            论断模式出现的<b>每一处</b>被修、不只在被引用的行（06-08/06-09 语义残留
            失败模式），并通过重新 grep 整个 EN 文件到零残留验证。{' '}
            <b>DN-001（MINOR · MTF 类别计数）：</b>搜 &ldquo;8 short / 1 long&rdquo;、
            &ldquo;1 neutral across&rdquo;——改前 1 命中、改后 0——RESOLVED；prose
            现读 &ldquo;1 多 / 7 空 / 2 中性、10 框（1M 唯一那根多；15m + 4h
            中性）&rdquo;，与工件和源备忘一致。{' '}
            <b>DN-002（MINOR · 散户快照落在 08:06、不是 08:05 钉）：</b>搜
            &ldquo;63.93&rdquo;、&ldquo;36.07&rdquo;、&ldquo;5.12pt&rdquo;——改前 5
            命中、改后 0——RESOLVED；快照 &ldquo;now&rdquo; 散户是 BJ 08:05 钉
            64.00 / 36.00，24h 移动是 58.81 → 64.00（+5.19pt）对披露的 08:06 采样
            24h-ago 基线。{' '}
            <b>DN-003（MINOR · 24h 窗口约定披露不足）：</b>manifest live-tape 旗标
            现声明 &ldquo;now&rdquo; 值用精确的 BJ 08:05 钉、而 24h Δ 跨最后 1441
            采样行（24h-ago = BJ 08:06），因为 BJ 14:21 的期货 CVD 重置分钟被重复
            ——RESOLVED（披露已加）。{' '}
            <b>DN-004（MINOR · 漏了近端负 gamma 到期）：</b>搜
            &ldquo;no near-dated negative amplifier&rdquo;、&ldquo;no near-dated
            amplifier&rdquo;、&ldquo;the only forward negative&rdquo;——改前 5 命中、
            改后 0——RESOLVED；每个放大器论断现读 &ldquo;近端无一个像样的负 gamma
            放大器（仅 11JUL26 −0.44M，微不足道）&rdquo;，到期条带明确列出 11JUL 2.3
            −0.44M。{' '}
            <b>deepseek CRITICAL-1（06-29 破线 %）：</b>重算
            (62,642.79 − 60,224.70) / 62,642.79 = 3.86%；搜 &ldquo;−4.20%&rdquo;
            ——改前 1 命中、改后 0——RESOLVED，破线印现读 −3.86%。{' '}
            <b>deepseek CRITICAL-2（跨块聪明钱前值矛盾）：</b>按重算裁定——盘面
            24h-ago（BJ 08:06 采样、按披露约定）是 −42.6，所以 note-to-note 的
            −34 / 步 −3,082 数字被统一到盘面值 −42.6 / 步 −3,073（= −3,115.7 −
            (−42.6)）；搜 &ldquo;−34&rdquo;、&ldquo;−3,082&rdquo;——改前 6 / 1 命中、
            改后 0 / 0——RESOLVED，单一前值参照贯穿全文。{' '}
            <b>deepseek MINOR（快照净取整 −3,115.7 vs −3,116）：</b>裁定为有意的
            精确-在-数据格（−3,115.7，匹配 live_db 行 70176）/ 取整-在-prose
            （−3,116）约定，与 多 10,185.4 / 空 13,301.2 同处理——无改动。{' '}
            快照锚 2026-07-09 00:05Z（live tape t=&ldquo;07-09 08:05&rdquo; BJ）；
            滚动工件归档在 /opt/desk-note/snapshots/2026-07-09-0005/，供审计重读
            同一字节。{' '}
            <b>构建说明（INFO）：</b>按谱系，本服务器的 Node 版本可能阻断完整
            <code>next build</code>；构建代理是 <code>npx --no-install tsc
            --noEmit</code>，在 STAGE B/E 路径里跑。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部主理人之间讨论准备的交易台文档，
            <em>不是投资建议、不是招揽、不是要约</em>，也未针对任何接收方的具体
            情况个性化。数字反映单一原子快照（2026-07-09 00:05Z），分节来源在
            上方 manifest 带里披露；宏观 Tier-1 面板渲染是 2026-07-08 22:16Z
            （快照前约 1.8h），部分输入明确为旧或待定并如此标注。水平、规模和
            条件是本台流程的示例、不是长期推荐。过去的相关性、gamma 和仓位形态
            不约束未来盘面。衍生品带全额亏损的风险，若加杠杆，亏损可超过存入
            保证金。<em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                收复在周内被交还、盘面真正转空——OI 在建、聪明钱翻空、散户挤在
                多头一边。但底线由周线收盘定、不是插针。耐心到周一 07-13。
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
            v2 · 2026-07-09 00:05Z 快照 · 2026-07-09T00:42Z ·
            来源：live_db.json · mtf_div_latest.html · btc_gex.html ·
            macro_dashboard.html · cross_asset_correlation_summary.md ·
            btcusdt_1m_*.parquet · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
