import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-08-27 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-08-27',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-08-27' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260827() {
  await requireViewer('/zh/desk/2026-08-27');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-08-27 · v2</span>
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
              <span className="dn-big">$78,857</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.31%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照锚行 2026-08-27 00:05Z · 滚动源已归档到
              /opt/desk-note/snapshots/2026-08-27-0007/
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">
                    live_db.json · 锚行 <code>t = &ldquo;08-27 08:05&rdquo;</code>（BJ）
                    = 2026-08-27 00:05Z
                  </td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · <b><code>t</code> 字段是北京时（UTC+8）、不是
                    UTC</b> · 本篇每一个窗口都端点在这根钉住的行上、不走滚动
                    文件的尾部（写稿期间尾部已经推到 00:07Z，故意不用）·
                    24h 窗 = 1,441 行 = 1,440 个分钟间隔 + 开口那一行
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">
                    mtf_div_latest.html · 2026-08-27 00:01Z scan（归档副本）
                  </td>
                  <td className="dn-flag">
                    小时级滚动人造物 · 从日期归档读、不走 live 路径 ·
                    每个周期的最末 bar 都未收盘 · scan 头印北京时（08:01）、
                    自带现货 $78,920 与 24h +0.57%，两者都跟钉住的盘面锚
                    对不上 —— 见第 II 节，全篇不做撮合
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">
                    btc_gex.html · 2026-08-27 00:01Z（归档副本）+ 同戳的
                    gex_summary.json，<b>本轮已一并归档</b>
                    （sha256 <code>f86c52ae…13d49a</code>）
                  </td>
                  <td className="dn-flag">
                    960 合约（08-26 是 966）· 文件自带的 Deribit 指数 $79,203
                    对钉住的 live 现货 $78,856.54 · <b>三个 aggregate 口径、
                    任何地方都不混用</b>：到期条脚算 / <code>net_gex</code>{' '}
                    +287.8980M、卡片头条 +280.6M、49 点行权价剖面求和
                    +281.1237M · 精确的 <code>net_gex</code> $287,897,984.62
                    出自那个 JSON，而它是<em>按小时覆写的滚动路径</em> ——
                    已在下一次覆写前逐字节拷进日期快照目录，所以这个精确数字
                    现在是钉住的、不是引自一个活不到明天的文件 ·
                    链中位 IV 卡片只印一位小数（45.1%），所以本篇任何
                    IV 派生的价差都带 ±0.05pt = ±5 个波动率基点
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-08-27 00:01Z（归档副本）
                  </td>
                  <td className="dn-flag">
                    7d 1h bar · 22 个资产 · 168 行 · 只是共动、既不指认驱动方、
                    也不说明对冲有效性 · 七天里有两天是周末、不带任何股票印子
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-08-26 22:15Z 渲染（归档副本）</td>
                  <td className="dn-flag">
                    比锚早约 1.8h · <b>这是新鲜的工作日 FRED 印子</b>、不是周末
                    重渲染 —— 两条日频收益率都动了 −6.0bp · episodic 过滤是
                    |z| &gt; 1.5
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日线 / 周线 MA 矩阵 + 30D RV</td>
                  <td className="dn-v-cell">
                    btcusdt_1m_*.parquet · 八个年度文件全载入 · 最末 bar
                    2026-08-27 00:05Z 收 $78,880.00
                  </td>
                  <td className="dn-flag">
                    跨度 2019-09-08 → 2026-08-27 · 2,546 根日 bar / 365 根周
                    bar · 偏移按钉住的 live 现货 $78,856.54 重算 · 最新的日 bar
                    与周 bar <b>都未收盘</b>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W 周期地板 watch</td>
                  <td className="dn-v-cell">
                    weekly_200sma.json <b>不存在</b> · 走 parquet 重算 +
                    ma200w_trap_watch_state.json
                  </td>
                  <td className="dn-flag">
                    连续第二个 session 没有 watch 文件 ·
                    weekly_200sma_state.json 在盘上、但陈旧（<code>asof</code>{' '}
                    2026-07-06、最后完整周 2026-07-05）—— <b>不靠它</b> ·
                    分位与最后事件都在这里算、不从 watch 文件读
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED 月度 · IRLTLT01JPM156N · 陈旧 86d</td>
                  <td className="dn-flag">陈旧 · 月度 · 不作实时方向</td>
                </tr>
                <tr>
                  <td className="dn-s">订单簿 / 成交源 / 持仓对账</td>
                  <td className="dn-v-cell">本次未载入</td>
                  <td className="dn-flag">
                    <b>对本篇是实质性的</b> —— 第 V 节记的是一笔从盘面穿过
                    交易台指令限价推断出来的<b>模型 / 纸上成交</b>、不是券商
                    确认 · 没有委托号、挂单 / 撤单标志、部分成交记录、
                    成交均价或账户归属，所以订单是否存在、有没有路由出去、
                    状态、数量与归属全部无法核实，由此得到的 0.2R 仓位是一个
                    <b>未对账的模型</b>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">
                    NTT pivot、max-pain、strike-level IV、BTC/NQ 比率
                  </td>
                  <td className="dn-v-cell">本次未载入</td>
                  <td className="dn-flag">
                    btc_ntt_analysis.html 是 JS 渲染、抓不出来 · 四条主张全部
                    framework only
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dn-meta">
            <div>
              <span className="dn-k">funding · 8h 年化</span>
              <span className="dn-v bull">+4.96%</span>
              <span className="dn-src">live · raw 字段 0.004526 × 1095 · 这同时也是 24h 的<em>最小值</em> · 24h 均值 +7.8506% ann、最大 +10.8372% · 封顶占用 0 / 1,441 采样行 = 0.0% · 7d 10,081 行里 0 行为负</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 离顶</span>
              <span className="dn-v bull">离顶 28h06m（1,686 分钟）</span>
              <span className="dn-src">最后一根封顶行 08-25 19:59Z（0.01 = +10.95% ann）、第一根顶下行 08-25 20:00Z（+10.9325% ann）· <b>是 08-26 备忘重新规格化的 434 流逝分钟去拥挤闸的 3.88×</b> —— 这道闸自写下以来第一次被清掉</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bull">−0.97%（−1,040.0 BTC）</span>
              <span className="dn-src">按钉住的端点 106,723.859 → 105,683.838 · 同一窗上价格 +0.31%，所以是价涨 / OI 缩 · 毛开仓、毛平仓与账户级换手在这个 feed 里<b>看不到</b> —— 一次去杠杆被替换杠杆抵消掉，印出来的净值一模一样</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bear">52.06 / 47.94</span>
              <span className="dn-src">live_db <code>mkt_long_pct</code> · 从 50.02% <b>重新拥挤 +2.04pt</b> · 24h 谷 50.01% @00:11Z、峰 52.10% @23:53Z（峰在锚<b>前 12 分钟</b>）· 7d 区间 45.96% / 53.20%</span>
            </div>
            <div>
              <span className="dn-k">SM 净 BTC</span>
              <span className="dn-v bull">+30.6k（净多）</span>
              <span className="dn-src">long_btc 37,457.1 − short_btc 6,851.0 = 30,606.1 · long_traders 4,962 / short_traders 1,280 · 两边都在跟净值反着走：多头 −2,904.9、空头 +1,644.7</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 08-26 备忘</span>
              <span className="dn-v bear">−4,549.6 · 削减比例 12.94%</span>
              <span className="dn-src">|Δ| / 前值净 = 4,549.6 / 35,155.7 = 12.94% · <b>在连续五篇备忘标为不可采信之后、这一篇可采信</b> —— 最大单分钟台阶 −743.3 = |Δnet| 的 16.34%（最近一次的集中度是 08-26 的 72.50%，再往前 08-25 93.28%、08-24 81.76%、08-23 98.12%）· 见第 I 节</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">45.1% / 41.8790%</span>
              <span className="dn-src">跨 960 合约的 GEX 链中位 —— <em>不是可交易价差</em> · RV = 收对收、30 个日收益、×√365，在 00:05Z 锚上按已发布的谱系口径算（含未收盘的日 bar）· 富余 +3.2210pt、走阔 +0.9151pt</span>
            </div>
            <div>
              <span className="dn-k">到 0γ 翻转的距离</span>
              <span className="dn-v bull">+22.10%（在上方）</span>
              <span className="dn-src">翻转位 $64,581.07（从 $64,225.19 上移 $355.88）· 对钉住的 live 现货 $78,856.54 = +22.1047%；对 GEX 文件自带的 Deribit 指数 $79,202.81 = +22.6409%（卡片四舍成 +22.6%）—— <b>两个参考都为正、tile 与正文同号</b> · 从现货跌 18.10% 才到</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                限价那个价位被交到了。空仓四个 session、两套框架未成交就被
                处置掉之后，盘面在 08-26 12:30Z 触到 08-25 回踩框架的
                ≈$78,200 —— 而 08-26 备忘前一天才给它加的到期，根本没派上
                用场。本次没有载入任何券商源，所以下面所有内容都是一笔
                交易台指令的模型 / 纸上成交，不是确认过的执行
              </span>
              。盘面不是点一下就弹走：它<span className="dn-tag bull">
              直接穿过去 $600.00</span>，印出{' '}
              <span className="dn-tag">217 根在 $78,200 或以下的交易所一分钟
              bar</span>，最低到{' '}
              <span className="dn-tag">$77,600.00 @08-26 15:04Z</span>。止损是
              一条日收规则、定在{' '}
              <span className="dn-tag">$77,248.42</span>，两种口径都没被靠近
              过 —— 最深的盘中印子还在它{' '}
              <span className="dn-tag bull">上方 $351.58</span>，而 08-26 的
              日收 <span className="dn-tag bull">$78,989.40</span> 高出
              $1,740.98。从假定的成交价起算，这笔模型交易走到{' '}
              <span className="dn-tag bull">$79,138.70 @08-26 23:46Z</span> ={' '}
              <span className="dn-tag">+0.986R 毛</span>，离 $80,000 第一目标
              还差 <span className="dn-tag">$861.30</span>，锚上标在{' '}
              <span className="dn-tag bull">+$656.54 = +0.690R 毛 = 按写明的
              0.2R 规模 +0.138R</span>。跟它一起到的，还有三件框架要了很久
              一直没拿到的东西：funding{' '}
              <span className="dn-tag bull">离顶 28h06m</span>、是 08-26 备忘
              写下的 434 分钟闸的 3.88×；OI 在一个上涨 session 里{' '}
              <span className="dn-tag bull">缩了 −1,040.0 BTC</span>，满足了
              08-25 记为被违反的那条「最好伴随 OI 下降」；SM 盘面在连续五篇
              备忘被标为不可采信之后{' '}
              <span className="dn-tag bull">可采信</span>，它的 −4,549.6 Δnet
              是散在整段窗里、而不是堆在一分钟的人造物上。有两件没到：散户{' '}
              <span className="dn-tag bear">重新拥挤 +2.04pt 到 52.06%</span>、
              峰值就在锚前 12 分钟，以及 1d 的{' '}
              <span className="dn-tag bear">TD9 SELL 已经印出</span>。
              dealer 夹持加深{' '}
              <span className="dn-tag">+35.55M 到脚算 +287.90M</span> ——
              这是<b>自 08-22 面板以来最大的一步</b>，但离谱系最大差得远
              （08-17→08-18 一步 +100.80M、08-19→08-20 一步 +125.24M）；
              而水位上它是可得读数里的第二深，这跟日变化是两个不同的序数。
              进场正下方，08-26 恶化过的 γ 台阶修好了：$78,000 从{' '}
              <span className="dn-tag bull">+24.74M 走到 +29.72M</span>，
              上一篇专门设的 watch 以有利的方向关掉。本子是<b>模型的多头</b>。
              这是交易台对自己指令的陈述、不是券商核实过的持仓 ——
              没有订单簿、订单状态或成交源 —— 第 V 节写明这个主张能推到哪一步。
            </p>

            <h2 className="dn-sec">
              仓位{' '}
              <span className="dn-roman">I · funding 放开并且<em>留在</em>放开（28h06m、闸清掉）· OI 在上涨 session 里收缩 · SM 盘面在连续五篇标为不可采信之后可采信 · 散户逆着这一切重新拥挤</span>
            </h2>

            <p>
              先说这个已经读不了一周的数字。SM 净值在钉住的端点上从{' '}
              <span className="dn-tag">35,155.7 走到 30,606.1</span>，Δnet{' '}
              <span className="dn-tag bear">−4,549.6</span>、削减比例{' '}
              <span className="dn-tag">4,549.6 / 35,155.7 = 12.94%</span>。
              连续五篇备忘这个数字都是带着警告发出去的，因为整段位移住在
              一分钟里：08-23 98.12%、08-24 81.76%、08-25 93.28%、08-26
              72.50% —— 这段连跑是五个 session 长，但它<em>不是</em>一段
              「80% 以上」的连跑，因为最近的那一个只有 72.50%。这一篇不带
              警告。最大单分钟台阶是{' '}
              <span className="dn-tag">−743.3、即 |Δnet| 的 16.34%</span>；
              前三合计 33.99%、前五 49.37%、前十 79.90%。整段窗的毛分钟换手是{' '}
              <span className="dn-tag">20,422.9 BTC、净位移的 4.49×</span>，
              摊在 <span className="dn-tag">152 根下行分钟与 136 根上行分钟</span>
              上（其余 1,152 根持平）。窗里仍然有一次名册跳变 ——{' '}
              <span className="dn-tag">long_traders 4,779 → 4,936 @07:41Z</span>{' '}
              —— 但 net_btc 跨过它只动了 −57.7，所以这次那个一直在污染序列的
              重新采样<em>没有</em>造出 net_btc 的断点。
              <em>这一笔削减是盘面、不是人造物。</em>这是一句关于可测性的话、
              不是关于方向的话：交易台现在能读这个数了，而它读到的是聪明钱
              在一个收涨的 session 里减多头{' '}
              <span className="dn-tag">−2,904.9 BTC</span>、同时<em>加</em>空头{' '}
              <span className="dn-tag">+1,644.7 BTC</span>。两边同时降险、
              而且逆着盘面自己的方向，是本篇里最不舒服的一条读数，也是五天里
              第一条值一点钱的读数。
            </p>

            <p>
              funding 是这一页上最干净的印子。最后一根封顶行是{' '}
              <span className="dn-tag">08-25 19:59Z</span>、在 +10.95% ann 的
              天花板上；第一根顶下行是 20:00Z 的 +10.9325%。到钉住的锚是{' '}
              <span className="dn-tag bull">1,686 个流逝分钟 = 28h06m</span>，
              24h 窗上 <span className="dn-tag">0 / 1,441 采样行在顶上</span>。
              08-26 备忘把它的去拥挤闸重新规格化在{' '}
              <em>434 个流逝分钟</em> —— 那是已经被证明可逆的那一段跑的长度、
              funding 在 7h14m 之后又钉了回去 —— 并且明确拒绝把当时那段
              245 分钟的跑算作证据。这道闸现在被清掉了{' '}
              <span className="dn-tag bull">3.88×</span>。live 读{' '}
              <span className="dn-tag bull">+4.9560% ann</span>、出自
              raw 0.004526 × 1095，而这同时是 24h 路径的<em>最小值</em>、
              对着 +7.8506% 的均值与 +10.8372% 的最大值：这个钉子不只是松开，
              它一路在泄，锚正好接在它最松的地方。这一段里行与间隔从头到尾
              没有被等同 —— 1,686 行与 1,686 分钟在这里重合，是因为 feed
              没有缺口，两个数都写出来了。
            </p>

            <p>
              OI 供上了第二个想要的条件。总量收缩{' '}
              <span className="dn-tag bull">−1,040.0 BTC / −0.9745%</span> 到
              105,683.838，同一组端点上价格涨 +0.3107%，24h 峰 106,996.077
              @00:42Z、谷 105,319.065 @11:38Z。08-25 的框架要它的解钉
              「最好伴随 OI 下降」，而当时记下的是 +1,670.2 BTC 的 OI{' '}
              <em>扩张</em>、对自己不利；这一条现在满足了。方向变得顺手并不
              让那条常设警告变弱：毛开仓、毛平仓与账户生命周期数据不在这个
              feed 里，所以一次被替换杠杆抵消掉的去杠杆会印出同样的净值，
              这一份切片排除不了它。
            </p>

            <p>
              散户是唯一一个走错方向的仓位读数，而且走得不小。
              <code>mkt_long_pct</code> 从{' '}
              <span className="dn-tag bear">50.02% 到 52.06%、+2.04pt</span>，
              24h 谷 50.01% @00:11Z、峰{' '}
              <span className="dn-tag bear">52.10% @23:53Z</span> ——
              在锚<b>前 12 分钟</b>，所以这篇备忘是在散户拥挤的局部高点上
              抓到它、而不是在报告一段已经褪掉的尖峰。对着 45.96% / 53.20%
              的 7d 区间，这是这一周的上半区。合起来的读数是一次
              <em>分裂、不是确认</em>：杠杆那道闸开了（funding 放开、OI 收缩、
              SM 减仓），散户那道闸关了（拥挤在强势里重建）。只引用 funding
              放开的交易台，是在引用自己数据的一半。窗内资金流：现货 CVD{' '}
              <span className="dn-tag bull">+842.6</span>、期货 CVD{' '}
              <span className="dn-tag bull">+1,463.7</span>、大单净{' '}
              <span className="dn-tag bull">+957.00</span>、taker 净{' '}
              <span className="dn-tag bull">+1,463.53</span> —— 四条全在买方，
              与资金换手一致，而且<em>排除不了</em>清算驱动的印子，因为毛开仓 /
              毛平仓与账户生命周期字段正是这个 feed 不带的那些数据。锚上的
              永续基差是 <span className="dn-tag">−0.79</span>、总体 skew{' '}
              <span className="dn-tag">−0.3</span>，两个都基本上是平的。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 8 多 / 0 空 / 2 中、两种数法都零空 · 1d TD9 SELL 已印 · MA 矩阵 20 格里 18 格为正 · 周期地板按已收盘口径读、watch 文件缺失</span>
            </h2>

            <p>
              MTF 的合计头读{' '}
              <span className="dn-tag bull">8 多 / 0 空 / 2 中</span>、
              跨十个周期。改成把每周期的 bias 列加起来则是{' '}
              <span className="dn-tag">5 偏多 / 4 警示 / 1 震荡</span> ——
              两个计数都印出来，因为它们不一致，而且哪一种都数不出一个空头。
              动能 regime 读{' '}
              <span className="dn-tag bull">9 个里 7 个 JT ≥ 0</span>，
              比 08-26 的 6 / 9 上来一格。谨慎在反转面板上：三条顶背离
              （1h / 4h / 8h）对三条底背离（15m / 30m / 1h），而{' '}
              <span className="dn-tag bear">1d 的 TD9 SELL 已经在 $78,920
              印出</span> —— 08-25 备忘标过它差一根，现在上板了，附带的
              条件是那根日 bar 未收盘。08-26 还只有一根的 8h 水上死叉现在四根
              了；4h 那根是 26 根；1h 刚跌破自己的云、带 警示 标签。
              RSI 在慢周期上拉伸 —— 12h{' '}
              <span className="dn-tag bear">80.9</span>、1d{' '}
              <span className="dn-tag bear">80.4</span> —— 而引擎周期已经
              凉到 4h 59.0 与 1h 55.6。
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>周期</th><th>收</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">78,920</td><td className="num">62.9</td><td className="bull">金叉（水下）29b</td><td className="bull">云上 ↓78.4k 12b</td><td>Sell 4</td><td>BEAR 隐 · BULL 隐 · BULL 常</td></tr>
                <tr><td>30m</td><td className="num">78,920</td><td className="num">59.2</td><td className="bull">金叉（水下）14b</td><td className="bull">云上 ↓78.9k 1b</td><td>Sell 7</td><td>BEAR 隐 · BULL 常</td></tr>
                <tr><td>1h</td><td className="num">78,920</td><td className="num">55.6</td><td className="bull">金叉（水下）5b</td><td className="bear">云下 ↑79.0k 刚跌破</td><td>Sell 7</td><td>BEAR 隐 · BEAR 常 · BULL 隐 · BULL 常</td></tr>
                <tr><td>4h</td><td className="num">78,920</td><td className="num">59.0</td><td className="neut">死叉（水上）26b</td><td className="bull">云上 ↓74.8k 55b</td><td>Sell 2</td><td>BEAR 常 · BULL 隐</td></tr>
                <tr><td>8h</td><td className="num">78,920</td><td className="num">69.1</td><td className="neut">死叉（水上）4b</td><td className="bull">云上 ↓63.9k 23b</td><td>Sell 1</td><td>BEAR 常</td></tr>
                <tr><td>12h</td><td className="num">78,920</td><td className="num bear">80.9</td><td className="bull">金叉（水下）19b</td><td className="bull">云上 ↓64.6k 17b</td><td>Buy 1</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">78,920</td><td className="num bear">80.4</td><td className="bull">金叉（水下）9b</td><td className="bull">云上 ↓64.1k 9b</td><td className="bear">⚡ TD9 SELL</td><td>BULL 隐</td></tr>
                <tr><td>3d</td><td className="num">78,920</td><td className="num">70.6</td><td className="neut">—</td><td className="bull">云上 ↓78.5k 1b</td><td>Sell 4</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">78,920</td><td className="num">57.7</td><td className="bull">金叉（水下）5b</td><td className="bear">云下 ↑85.9k 30b</td><td>Sell 2</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">78,920</td><td className="num">51.2</td><td className="neut">—</td><td className="bull">云上 ↓47.4k 30b</td><td>Sell 1</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    源：mtf_div_latest.html 2026-08-27 00:01Z scan、从日期归档读。
                    scan 头印北京时（08:01），并带着它<em>自己</em>的现货
                    $78,920、24h +0.57% 与 H/L $79,200 / $77,600 —— 而钉在
                    00:05Z 的盘面锚读现货 $78,856.54、在它自己的 1,441 行窗上
                    +0.31%。这是两个不同标的、两段不同窗口，本篇任何地方都
                    <b>不</b>把它们撮到一起，每一个都带着自己的源引用。
                    每个周期的收都是未收盘的 bar。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵形状没变、水位上略强：{' '}
              <span className="dn-tag bull">20 格里 18 格为正</span>，
              日线梯子 <span className="dn-tag bull">10-of-10</span>，
              仅有的两个负值都在周线 SMA 那一侧。日线 SMA：{' '}
              <span className="dn-tag bull">D-SMA20 $69,655.56（+13.21%）</span>、{' '}
              <span className="dn-tag bull">D-SMA50 $66,417.64（+18.73%）</span>、{' '}
              <span className="dn-tag bull">D-SMA100 $66,189.48（+19.14%）</span>、{' '}
              <span className="dn-tag bull">D-SMA150 $69,395.14（+13.63%）</span>、{' '}
              <span className="dn-tag bull">D-SMA200 $69,221.34（+13.92%）</span>；
              日线 EMA：{' '}
              <span className="dn-tag bull">D-EMA20 $71,892.03（+9.69%）</span>、{' '}
              <span className="dn-tag bull">D-EMA50 $68,172.94（+15.67%）</span>、{' '}
              <span className="dn-tag bull">D-EMA100 $68,078.49（+15.83%）</span>、{' '}
              <span className="dn-tag bull">D-EMA150 $69,789.50（+12.99%）</span>、{' '}
              <span className="dn-tag bull">D-EMA200 $71,983.92（+9.55%）</span>。
              周线 SMA：{' '}
              <span className="dn-tag bull">W-SMA20 $69,918.01（+12.78%）</span>、{' '}
              <span className="dn-tag bear">W-SMA50 $81,058.11（−2.72%）</span>、{' '}
              <span className="dn-tag bear">W-SMA100 $88,974.33（−11.37%）</span>、{' '}
              <span className="dn-tag bull">W-SMA150 $77,791.16（+1.37%）</span>、{' '}
              <span className="dn-tag bull">W-SMA200 $64,560.94（+22.14%）</span>。
              周线 EMA：{' '}
              <span className="dn-tag bull">W-EMA20 $70,203.47（+12.33%）</span>、{' '}
              <span className="dn-tag bull">W-EMA50 $77,312.40（+2.00%）</span>、{' '}
              <span className="dn-tag bull">W-EMA100 $78,455.51（+0.51%）</span>、{' '}
              <span className="dn-tag bull">W-EMA150 $73,950.68（+6.63%）</span>、{' '}
              <span className="dn-tag bull">W-EMA200 $68,711.83（+14.76%）</span>。
              偏移按钉住的 live 现货 $78,856.54 算、底下那份 parquet 的最末
              bar 是 2026-08-27 00:05Z 收 $78,880.00 —— 最新的日 bar 与周 bar
              都未收盘，所以每一个周线格子在 08-30 结算时都还会再动一次。{' '}
              <span className="dn-tag">D-EMA400 $78,240.35（+0.79%）</span> 与{' '}
              <span className="dn-tag">W-EMA100 $78,455.51（+0.51%）</span>{' '}
              夹着这笔交易当初围绕设计的那层台阶；两条都在 $78,200 进场之上、
              现货之下，这正是框架想要而昨天没有的几何。
            </p>

            <p>
              周期地板连续第二个 session 是披露过的 fallback：{' '}
              <span className="dn-tag stale">weekly_200sma.json 不存在</span>，
              weekly_200sma_state.json 陈旧到 2026-07-06、不靠它。按
              <em>已收盘</em>的周线口径 —— 最后一根完整的 W-SUN bar、
              2026-08-23 —— W-SMA200 读{' '}
              <span className="dn-tag">$64,269.62</span>，与
              ma200w_trap_watch_state.json 完全对上（2026-08-24 重算、
              <code>consecutive_above</code> = 1、连跑起于 2026-08-23）。
              对着那个地板，已收盘的 08-23 收 $77,719.10 高出 +20.93%，
              钉住的 live 现货高出{' '}
              <span className="dn-tag bull">+22.70%</span>，所以要跌{' '}
              <span className="dn-tag">18.50%</span> 才到。把未完成的 08-30
              bar 折进 200 个观测窗口的未收盘变体给出{' '}
              <span className="dn-tag">$64,560.94</span>、现货 +22.14%、
              跌 18.13% —— 两个都印，发布口径是已收盘那个。在已收盘序列上，
              当前比值 1.226964 严格高于{' '}
              <span className="dn-tag">165 个周观测里的 40 个</span>
              （<span className="dn-tag">24.2%</span>，这是严格的经验分位、
              也是发布的那个）。把 live 现货作为新增的第 166 个观测插进去，
              名次是 <span className="dn-tag">41 / 166 = 24.7 分位</span> ——
              分母随插入一起长，所以 41 / 165 在任何一种口径下都不成立。
              另有 <span className="dn-tag">165 根周收里的 10 根（6.1%）</span>{' '}
              落在地板之下。那个 6.1% 限定在一份起于 2019-09-08 的
              Binance 永续 parquet 上 —— 它不是 BTC 的完整历史，也不能跟框架
              引用的约 9% 的长期数字对比。这个水位这个 session 什么都没动；
              带着它，是因为它是那条会把其余一切重新定义的线，不是因为它近。
            </p>

            <h2 className="dn-sec">
              Dealer 地图{' '}
              <span className="dn-roman">III · 夹持加深 +35.55M 到脚算 +287.90M —— 自 08-22 面板以来最大的一步、但不是谱系最大的一步；水位上是可得读数里的第二深，这是另一个序数 · 进场底下的台阶修好、08-26 的 watch 以有利方向关掉 · 前端到期在<em>一次</em>负值之后回正</span>
            </h2>

            <p>
              在 11 条到期条上脚算，总量是{' '}
              <span className="dn-tag bull">+287.90M</span>，与{' '}
              <code>gex_summary.json</code> 的 <code>net_gex</code>{' '}
              $287,897,984.62 对上 —— 读的是现在钉进日期归档的那份副本{' '}
              <code>/opt/desk-note/snapshots/2026-08-27-0007/gex_summary.json</code>
              （sha256 <code>f86c52ae…13d49a</code>、内部戳 00:01Z、与取自的
              滚动文件逐字节相同），因为滚动路径按小时覆写、活不到这篇备忘
              被读的时候。对着 08-26 的 +252.35M，这是{' '}
              <span className="dn-tag bull">一个 session +35.55M</span>。
              这里涉及两个序数，它们<em>不是</em>同一条主张。按
              <em>日变化</em>，+35.55M 是自 08-22 面板以来最大的一步
              （08-22→08-23 −7.54M、→08-24 +5.32M、→08-25 +9.15M、→08-26
              −4.49M），而且离谱系最大差得很远：08-18 那篇备忘记的是
              +28.06M → +128.86M ={' '}
              <span className="dn-tag">一个 session +100.80M</span>，
              而 08-19 面板的 +128.92M → 08-20 面板的 +254.15M 又是{' '}
              <span className="dn-tag">+125.24M</span>。任何
              「谱系最大的一步」的说法在这里退休。按<em>水位</em>，
              它另外是{' '}
              <span className="dn-tag">可得读数里的第二深</span>：
              高过 07-23 的 +283.46M 达 +4.44M，只被 07-22 的 +313.63M 超过，
              08-25 +256.84M、08-20 +254.15M、08-26 +252.35M、08-22 +249.91M、
              08-24 +247.69M、08-23 +242.37M 与 07-24 +235.95M 都在下面。
              两个序数上它都<b>不是</b>谱系最大，而且{' '}
              <span className="dn-tag stale">2026-08-21 的存档仍然缺失</span>，
              所以水位这个序数只对可得的面板成立、不对每一天。有一条对账
              注记跟昨天不同：08-26 那天卡片头条与 49 点行权价剖面求和是精确
              相等的，今天不是 —— 头条{' '}
              <span className="dn-tag">+280.6M</span> 对剖面求和{' '}
              <span className="dn-tag">+281.1237M</span>、差 $0.52M，而脚算的
              到期条{' '}
              <span className="dn-tag">高出剖面 $6.774301M、高出头条
              $7.297984M</span> —— 它跟另外两个基准并不等距。三个口径，
              本篇任何地方都不混用。
            </p>

            <p>
              对模型仓位真正有意义的那部分，就压在它底下。08-26 备忘设过一条
              明确的 watch —— <em>「如果 $78,000 自己转负，回踩框架就失去它的
              结构锚」</em> —— 那是在记下 $77,000 翻到 −0.967M、$77,500 加深到
              −2.790M、$78,500 翻到 −0.969M、$78,000 松掉 −2.421M 之后设的。
              这个 session 里每一条都走了回来。{' '}
              <span className="dn-tag bull">$78,000：+24.7416M → +29.7154M
              （+4.97M）</span>、{' '}
              <span className="dn-tag bull">$77,500：−2.7903M → −1.1818M
              （+1.61M）</span>、{' '}
              <span className="dn-tag bull">$77,000：−0.9668M → −0.3640M
              （+0.60M）</span>，$78,500 基本没动、在 −0.9615M。watch 以有利
              方向关掉，止损现在坐在一层比当初算 R/R 时防守<em>更好</em>的
              台阶之下 —— 正好是 08-26 备忘给那个比率附的警告的反面。
              这条主张限定在被点名的行权价上、不作推广：在现货下方的 25 个
              共有行权价上，合计仍然<em>变薄</em>{' '}
              <span className="dn-tag bear">−5.07M</span>、15 上 10 下，
              因为深处的台阶吐掉了近处台阶拿到的 —— $74,000 −4.62M、
              $75,000 −4.11M、$73,000 −1.56M、$70,000 −1.54M。近台阶修好、
              深台阶变薄，「现货下方的台阶改善了」这种没有限定的说法，
              在这里按 08-26 处理它镜像版本的同一种方式退休。
            </p>

            <p>
              现货上方 24 个共有行权价加了{' '}
              <span className="dn-tag bull">+40.31M</span>、20 上 4 下，
              四个下跌者全部点名 —— $83,000、$95,000、$100,000 与 $102,000。
              前十面墙全部为正、合计{' '}
              <span className="dn-tag">+230.40M</span>，是脚算条的 80.03%、
              49 点剖面的 81.96%：$80,000{' '}
              <span className="dn-tag bull">+52.06M</span>、$82,000 +41.04M、
              $78,000 +29.72M、$90,000 +18.33M、$81,000 +18.24M、
              $79,000 +17.71M、$85,000 +17.30M、$84,000 +15.09M、
              $100,000 +11.36M、$70,000 +9.55M。整张剖面上最深的负值是{' '}
              <span className="dn-tag bear">$60,000 −5.38M</span>、
              在现货下方 23.9%。0γ 翻转位上移 $355.88 到{' '}
              <span className="dn-tag">$64,581.07</span>；现货在它上方
              +22.1047%、文件自带的 Deribit 指数 $79,202.81 在它上方
              +22.6409%，两个都为正，从现货跌 18.10% 才到。按到期看，前端条{' '}
              <span className="dn-tag bull">27AUG26 在 0.3 DTE 为正 +14.14M</span>
              而且<em>还没有结算</em> —— 它今天 08:00Z 结算、在本篇 00:05Z 锚
              之后 7h55m，所以它是当前 IV 下的一个快照、不是一条已了结的线。
              它让前端在恰好<span className="dn-tag">一次</span>负值印子之后
              回到正 —— 08-26 面板上的 26AUG26 −2.04M，不是两次连续。
              08-25 与 08-24 两张面板<em>自己</em>的最前端条是 25AUG26{' '}
              <span className="dn-tag bull">+9.37M</span> 与 24AUG26{' '}
              <span className="dn-tag bull">+9.67M</span>，两条都为正；有时被
              挂到 24AUG26 头上的那个 −1.21M，是它在 08-23 面板上 1.3 DTE 的
              值，而那张面板的最前端条是 23AUG26 +5.76M —— 所以那是一个更早的
              回看观测、不是连续的最前端印子。{' '}
              <span className="dn-tag">28AUG26 +83.36M</span> 在 1.3 DTE 是
              脚算条的 28.96%、2026-08-28 08:00Z 结算；它的占比已经连着五个
              session 下降（36.17% → 33.71% → 31.28% → 29.37% → 28.96%），
              <em>而它的绝对规模这个 session 涨了 +9.24M</em>，所以占比下降是
              构成上的算术、不是衰减 —— 是条子长得比这条线快。{' '}
              <span className="dn-tag">25SEP26 +90.00M（31.26%）</span>{' '}
              现在是板上最大的单条线。每一个按到期的数字都是当前 IV 下的快照、
              不是保证会滚下来的量。
            </p>

            <p>
              波动率上：链中位 IV 读{' '}
              <span className="dn-tag">跨 960 合约 45.1%</span>
              （08-26 是 966，所以六个合约离开了链），对着 00:05Z 锚上算的
              30D 收对收 RV{' '}
              <span className="dn-tag">41.8790%</span>。口径要写出来是因为
              它承重：已发布的谱系含未收盘的日 bar，而这个口径把前两篇
              <em>精确</em>复现 —— 08-26 在它自己 00:05Z 锚上的 41.8922%、
              08-25 在它 00:04Z 锚上的 43.1981%。今天只用已收盘 bar 的变体是
              41.7978%、不是发布数字。富余是{' '}
              <span className="dn-tag">+3.2210pt</span>、从 08-26 已发布的
              +2.3059pt 走阔{' '}
              <span className="dn-tag">+0.9151pt</span>，分解几乎是一边倒的：{' '}
              <span className="dn-tag">ΔIV +0.9019pt 供了 98.56%</span>，
              对着只有 −0.0132pt 的 ΔRV，两者精确加回 +0.9151pt。波动率被
              标高了；已实现几乎没动。这个算术是对着上一篇<em>已发布</em>的
              价差做的、不是对着重算的，这把前值 IV 固定在 +2.3059pt 所隐含的
              亚小数 44.1981% 上 —— GEX 卡片当时印的是 44.2%、现在印 45.1%、
              都是一位小数，所以这一段里每一个 IV 派生的数字都带 ±0.05pt =
              <span className="dn-tag">±5 个波动率基点</span>，两个各自
              四舍过的卡片值相减时最多到{' '}
              <span className="dn-tag">±10 个</span>。这个比较精确到大约五个
              波动率基点的价差、不会更好。
            </p>

            <h2 className="dn-sec">
              宏观与跨资产{' '}
              <span className="dn-roman">IV · 08-25 那次双 episodic 的避险已经完全解开 —— 两条日频收益率都 −6bp、10Y 不再 episodic、TIPS real 在<em>下行</em>侧 episodic · 相关 regime 进一步松到 0.182</span>
            </h2>

            <p>
              这是新鲜的工作日 FRED 印子、三篇里的第二根，而且它把交易台从
              08-25 起一直带着的那个敌意印子翻了过来。10Y 名义是{' '}
              <span className="dn-tag bull">4.64%、−6.0bp</span>，
              regime z +1.67、episodic z −0.44 —— 在 08-25 那次 +5bp 的尖峰
              之后<b>不再被标为 episodic</b>。10Y TIPS 实际收益率是{' '}
              <span className="dn-tag bull">2.32%、−6.0bp</span>，
              regime z +1.62，而且它<em>确实</em>被标为 episodic、在{' '}
              <span className="dn-tag bull">−1.91</span> —— 但方向跟 08-25
              相反：实际收益率现在跌得够快、把过滤器往下触发，对 BTC 而言
              是风险偏好的方向。两行在自己的 252 日 z 上仍然带 RISK-OFF 的
              regime 标签，而一个被拉伸的<em>水位</em>与一个有利的<em>脉冲</em>
              之间的区别，就是这一段的全部内容。Tier 1 的其余部分：
              5Y5Y 通胀补偿 2.33% 持平（z +1.61）、HY OAS{' '}
              <span className="dn-tag bull">2.70% RISK-ON</span>（z −1.03）、
              NFCI −0.566 RISK-ON（z −1.78）、MOVE 69.4（−2.48、中性）、
              DXY 98.90（−0.10、中性）。唯一持续的敌意线是{' '}
              <span className="dn-tag bear">Fed 净流动性 $5.792T、
              以 episodic z −2.45 在抽</span>、标 RISK-OFF。今天完整的
              episodic 集合是 TIPS real −1.91、Fed 净流动性 −2.45 与
              USD/CNY −2.29。<em>新鲜日频</em> Tier-1 里最高的 regime z 是
              10Y 的 +1.67；整块板上最高的数字是 JGB 10Y 的 +2.42
              EXTREME RISK-OFF，而那一行是{' '}
              <span className="dn-tag stale">FRED 月度、陈旧 86 天 ——
              不作方向</span>。
            </p>

            <p>
              跨资产维持{' '}
              <span className="dn-tag">IDIOSYNCRATIC</span>、并且进一步松开，
              非对角 |r| 均值从{' '}
              <span className="dn-tag">0.198 落到 0.182</span>、对着
              &lt;0.25 的阈值 —— 0.198 是紧邻前一天 08-26 的日期归档摘要，
              不是那篇从 08-25 带过来的 0.205。BTC 的 7d 排名又是一个金属簇
              —— <span className="dn-tag">PLAT +0.336</span>、SILVER +0.244、
              GOLD +0.240、PALL +0.240 —— TSLA +0.187 第五、SP500 +0.141
              第九、<span className="dn-tag">NQ 第十一、+0.109</span>。
              这只是共动：既不指认驱动方、也不说明对冲有效性，而且它{' '}
              <em>不是</em>一个「股票垫底」的排名，因为 META −0.003 与
              AAPL +0.010 才在最底下，而 TSLA 同时排在金属相关的工业品与
              指数之上。水位上，BTC 在 7d 窗上{' '}
              <span className="dn-tag bull">+13.80%</span>、对 NQ −0.06%
              与 SP500 −0.01%，领先 NQ{' '}
              <span className="dn-tag">13.86pt</span>。紧邻前一天 08-26 的
              日期摘要印的是 BTC +21.72% 对 NQ −1.07%、领先{' '}
              <span className="dn-tag">22.79pt</span>，所以这段序列是
              22.79pt → 13.86pt。窗口从 08-20 的基准往前滚是这次收窄的
              <em>主导</em>成因、不是唯一成因 —— 两个端点都动了，NQ 自己也从
              −1.07% 走到 −0.06% —— 写出来，是为了不让这次收窄被读成 BTC
              单方面的回吐。七天里有两天不带任何股票印子。
            </p>

            <h2 className="dn-sec">
              本子{' '}
              <span className="dn-roman">V · 回踩多头 —— 限价那个价位在 08-26 12:30Z 被交到，记为交易台指令的<b>模型 / 纸上成交</b>、不是券商确认的执行 · 止损从未被靠近 · 模型 MFE +0.986R 毛、离第一目标差 $861.30 · chase-short 第六个 session 站边，而这次它走<em>远</em>了</span>
            </h2>

            <p>
              08-25 的框架写明了一个进场、08-26 的备忘给了它一个期限；盘面
              提前十一个半小时把它解决掉。按采用的交易所 bar 口径，第一根在
              $78,200 或以下的印子是{' '}
              <span className="dn-tag">08-26 12:30Z 那根、低 $77,906.40</span>
              （monitor 盘面把它的第一次触碰放在一分钟之后的 12:31Z、同一个
              低点 —— 一分钟的口径分歧，之所以披露，是因为 08-26 那篇是被
              $91.90 的口径分歧决定的）。随后发生的事把一次边缘触碰会带的
              歧义拿掉了：<span className="dn-tag">217 根交易所一分钟 bar</span>
              成交在限价或以下，而盘面<span className="dn-tag">穿过去
              $600.00</span> 到 15:04Z 的 $77,600.00。一条被穿了六百美元的
              限价不是排队位置的问题。但盘面证明的<em>只有</em>可成交性。
              它证明不了有一张单子存在、被提交、被路由、留在场内、没有被撤、
              全部或部分成交、以什么均价成交、在谁的账户里 —— 这些本次一样
              都没载入。所以本节往下的一切都是一笔<b>交易台指令的假定 /
              纸上执行</b>与一个<b>未对账的模型 0.2R 仓位</b>，下面每一个
              R 数字都继承这个标签。
            </p>

            <p>
              两条离场规则都没点着。止损是一条定在{' '}
              <span className="dn-tag">$77,248.42</span> 的日收条件 ——
              一个固定数字、不是一条会动的线 —— 而整段触碰后窗口最深的盘中
              印子停在它{' '}
              <span className="dn-tag bull">上方 $351.58</span>，08-26 的日收
              $78,989.40 高出 $1,740.98；日收口径那条规则连测都没被测到。
              $80,000 第一目标没有被点：触碰后的高点是{' '}
              <span className="dn-tag">$79,138.70 @08-26 23:46Z</span>、
              差 $861.30。按每单位 $951.58 的风险折算 R，这笔模型交易跑出{' '}
              <span className="dn-tag bull">MFE +0.986R 毛</span> 与{' '}
              <span className="dn-tag bear">MAE −0.631R 毛</span>，锚上标在{' '}
              <span className="dn-tag bull">+$656.54 = +0.690R 毛 = 按写明的
              0.2R 规模 +0.138R</span> —— 四个数字都是从指令限价对着盘面算的，
              没有任何成交均价或成交记录可以拿来对账。有一件事值得平铺直叙地
              记下来：模型 MFE 走到离一个完整 R 只差 1.4% 的地方，而交易台
              什么都没落袋，因为这套框架里从来没有写过分批目标规则。这是一个
              设计缺口，也正是这个 session 暴露出来的那一个 —— 就像 08-25
              暴露了缺失的价格口径、08-26 暴露了缺失的委托时长。它在下面被
              补上，而不是记一笔就算了。
            </p>

            <p>
              谱系那条主张，诚实的版本比看上去窄。这<b>不是</b>这一段跑里的
              第一笔成交：2026-08-06 点着过一个 0.2R 起手仓、并按市价成交。
              新的地方在于整条链按预先发布的样子跑完了 —— 一条自带口径与时长
              的规则点着，它另行写明的限价价位在没有被改价的情况下被交到 ——
              而在这之前，连着两套框架（2026-08-18 与 08-25 的前身）未成交
              就被处置，一个空本子坐穿了 +22% 的一周。台账是
              <em>被追加、不是被改写</em>。它一行记一个有日期的事件，08-26
              那篇把它收在{' '}
              <span className="dn-tag">4 个事件 / 3 次差一点 / 1 次处置</span>、
              第 4 行日期是 2026-08-26、内容是回踩框架的差一点（$412.26 的
              实时缺口）。第 4 行<b>永久保留</b>这个分类 —— 一个有日期的
              差一点，不会因为它所属的框架晚一天解决掉就回溯变成一笔成交。
              今天加的是{' '}
              <span className="dn-tag">第 5 行、日期 2026-08-27：那套框架
              以一笔模型 / 纸上成交解决</span>，给出{' '}
              <span className="dn-tag">5 个事件 / 3 次差一点 / 1 次处置 /
              1 笔模型成交</span>。带过来那几行上的 $151.00 与 $210.30
              历史差价原样保持它们的日期；解决掉的只有向前那个缺口。
            </p>

            <div className="dn-trade">
              <span className="dn-side long">多头 · 回踩 · <b>模型 / 纸上成交</b> · 0.2R · 未对账 · 限价那个<em>价位</em>被交到；没有载入任何券商确认、订单状态或持仓对账 · 止损与第一目标都没变、也都没被碰</span>
              <div className="dn-trade-name">
                $78,000 / D-EMA400 / W-EMA100 台阶上的回踩多头 —— 限价那个价位在 08-26 12:30Z 被交到、在指令自己的到期之前 11h30m
              </div>
              <div className="dn-thesis">
                进场，引自 08-25 备忘、经 08-26 原样带过来：{' '}
                <em>「限价 ≈$78,200 · 0.2R · 不追」</em>。它被交到了。
                按采用的交易所 bar 口径，第一根合格印子是 08-26 12:30Z 那根
                （低 $77,906.40）；整段 session 里有 217 根一分钟 bar 印在
                $78,200 或以下，整段指令窗的低点是 15:04Z 的 $77,600.00、
                穿过限价 $600.00。限价从未被改价、盘面从未被追 ——
                这笔模型成交记在两个 session 之前就写下来的那个数字上，
                这是一个关于交易台指令的假定、不是一个上报的成交均价。
                08-26 加的那个到期（「挂着直到 2026-08-27 00:00Z 日收、
                然后失效」）没有派上用场，但它是对的补充、留在方法里。
                框架当初要的确认，除了一项之外现在全都到了：funding 离顶
                28h06m、对着 434 分钟的闸；OI 在上涨 session 里缩了
                −1,040.0 BTC；SM 盘面在连续五篇被标为不可采信之后可采信；
                这笔交易锚着的 $78,000 γ 墙<em>变强</em> +4.97M 到 +29.72M、
                以有利方向关掉 08-26 的 watch。例外是散户，它重新拥挤 +2.04pt
                到 52.06%、峰值就在锚前 12 分钟。模型仓位按写下的水位带着，
                下面补一条分批目标规则，因为它的缺席把一次 +0.986R 的模型
                远征换成了零。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态（交易台指令 · 模型、非券商核实）</span><span className="dn-lvl-v bull">模型 / 纸上成交 · 假定按指令的 $78,200 做多 0.2R · 假定成交时戳 2026-08-26 12:30Z（交易所 bar 口径；monitor 盘面 12:31Z、同一低点）· <b>本次没有载入任何订单簿、委托号、挂单 / 撤单标志、部分成交记录、成交均价、账户归属或成交源</b> —— 盘面穿过交易台指令限价 $600.00 证明的是<em>可成交性</em>、拿掉了排队位置的歧义，而它对订单是否存在、路由、状态、数量与归属什么都没证明。下面那个 0.2R 仓位是一个未对账的模型、不是对过的本子状态</span></div>
                <div><span className="dn-lvl-k">可成交性证据（不是执行证据）</span><span className="dn-lvl-v">08-26 00:00Z–08-27 00:00Z 指令窗内有 217 根交易所一分钟 bar 在 $78,200 或以下 · 第一次触碰 交易所 12:30Z 低 $77,906.40（monitor @12:31Z、同一低点）· 窗低 交易所 $77,600.00 @15:04Z（monitor $77,615.80 @15:06Z）· 窗高 交易所 $79,200.00 @02:26Z（monitor @02:27Z）—— 每一条都是价格路径事实、而且全程双口径</span></div>
                <div><span className="dn-lvl-k">止损（未变 · 固定数字、不是 MA）</span><span className="dn-lvl-v bear">日收 &lt; $77,248.42 —— 没被靠近：触碰后最深印子 $77,600.00 在它上方 $351.58，08-26 日收 $78,989.40 高出 $1,740.98 · 从 $78,200 进场算是 $951.58 的风险；从钉住的现货 $78,856.54 算它在下方 2.04%</span></div>
                <div><span className="dn-lvl-k">自假定成交以来的模型远征</span><span className="dn-lvl-v">MFE $79,138.70 @08-26 23:46Z = +$938.70 = <b>+0.986R 毛</b>、离 $80,000 目标差 $861.30 · MAE $77,600.00 @08-26 15:04Z = −$600.00 = −0.631R 毛 · 锚上标价 +$656.54 = +0.690R 毛 = 0.2R 规模下 +0.138R —— 全部按指令的 $78,200 算，因为没有成交均价可以用来算</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v bull">$80,000 固定（从限价 +2.30%、从现货 +1.45%、未触）· 然后 W-SMA50 —— <b>三个 vintage 全部引用</b>：08-25 写下时 $81,784.71、08-26 $81,049.16、今天重算 $81,058.11（隔夜<em>上移</em> +$8.95）。会动的 MA 目标仍然是一个标出来的缺陷、公开带着、不悄悄重定基</span></div>
                <div><span className="dn-lvl-k">新增 —— 分批目标规则（缺陷在写下的这一刻关掉）</span><span className="dn-lvl-v bull">$79,600 减一半、剩下的移到保本 $78,200。框架写了进场、止损、两个目标，唯独没写它们之间那段空间的指令，于是一次 +0.986R 的模型远征换成了零。一条规则，写在下一次靠近之前、不是之后</span></div>
                <div><span className="dn-lvl-k">处置规则（未变）</span><span className="dn-lvl-v">日收跌破 $77,248.42 就把它退休、台阶持有这条主张就是错的 · 「日收站上 $81,784.71 而未成交」那一支现在<b>无实义</b> —— 那是一条未成交处置分支，而限价那个价位被交到了</span></div>
                <div><span className="dn-lvl-k">进场底下的 γ 台阶（08-26 watch · 以有利方向解决）</span><span className="dn-lvl-v bull">$78,000 +24.7416M → +29.7154M · $77,500 −2.7903M → −1.1818M · $77,000 −0.9668M → −0.3640M · $78,500 在 −0.9615M 基本没动 —— watch 的条件（「如果 $78,000 自己转负」）没有点着、而且走了反方向。watch 按同一个触发继续挂着</span></div>
                <div><span className="dn-lvl-k">不要做</span><span className="dn-lvl-v bear">不要在强势里加仓、不要把止损往下挪去熬过一次回踩、也不要把 +35.55M 的夹持加深读成加规模的理由 —— 那是 dealer 本子的事实、不是仓位规模的输入</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R（示例、输入未变）：</b>限价 $78,200、止损 $77,248.42 =
                $951.58 风险；第一目标 $80,000 = $1,800 回报 = <b>1.8916:1</b>。
                这个比率是选定水位上的算术、不是证据。跟 08-26 不同的是，
                它不再被一层在恶化的台阶美化：止损正下方那些行权价这个
                session 修好了，所以这个数字至少是对着一个比设定它时防守更好
                的地板算的 —— 而现货下方 25 个共有行权价在深处那一端合计仍然
                薄了 −5.07M，这是诚实的对重。{' '}
                <b>硬规则、重申：</b>止损不为了熬过盘面往下挪，模型仓位不因为
                第一次远征顺手就加，而新的分批目标规则适用于<em>下一次</em>
                靠近、不回溯适用于交易台已经坐过去的这一次。事后为了把一段
                已经发生的行情记成账而写的规则，不是规则。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">台账 · 差一点 / 处置记录 · <b>加入第五个事件 —— 第一次以模型成交解决</b> · 行单位 = 一个有日期的事件，按 08-25 的定义 · 第 1–4 行是有日期的历史、<b>不重新分类</b></span>
              <div className="dn-trade-name">
                差一点台账 —— 第五个事件，也是第一个「解决」而不是「差一点」的事件
              </div>
              <div className="dn-thesis">
                08-26 那篇把这个台账收在 <b>4 个事件 / 3 次差一点 / 1 次处置</b>。
                今天追加第 5 行，上面的一律不动。这正是台账存在的纪律所在：
                第 4 行日期是 2026-08-26，记的是一套正确点着、但按自己的规则
                在那篇的锚之前无法成交的框架。框架晚一个 session 解决掉，
                不会让那次差一点没发生过；而一个允许后来的结果改写更早行的
                台账，不是记录。计数现在是{' '}
                <b>5 个事件 / 3 次差一点 / 1 次处置 / 1 笔模型成交</b>。
                08-19 的侦察仓（进场 ≈$64,632、止损 $63,301、目标 $66,343 /
                $66,391）维持 <b>到期未成交</b>、10.03R 毛 / 按写明 0.2R 规模
                ≈2.01R，未变、也不重新翻案。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">第 1 行 · 2026-08-23（差一点 #1）</span><span className="dn-lvl-v">回调多头第 2 腿 —— 最低的交易所 1h 收 $76,020.30、在 $76,000 带顶上方 <b>$20.30</b></span></div>
                <div><span className="dn-lvl-k">第 2 行 · 2026-08-24（差一点 #2）</span><span className="dn-lvl-v">回调多头第一目标 $80,000 —— 24h 高 $79,991.00、差 <b>$9.00</b>，而那套框架从未点着</span></div>
                <div><span className="dn-lvl-k">第 3 行 · 2026-08-25（处置）</span><span className="dn-lvl-v">回调多头按预先承诺的处置规则<b>未成交退休</b> —— 是处置、不是差一点；不存在成交价，所以不算 R</span></div>
                <div><span className="dn-lvl-k">第 4 行 · 2026-08-26（差一点 #3 · 未变）</span><span className="dn-lvl-v bear">回踩多头已点着、到那篇的锚为止没有成交 —— 点着后低点 $78,351.00 对 ≈$78,200 限价 = <b>$151.00</b>；严格读法 $210.30；那个锚上的实时缺口 $412.26。<b>这一行永久保留差一点的分类。</b>它的框架在 08-26 12:30Z 解决 —— 那是在那篇发布之后七个小时，是一次更晚的解决、不是一次回溯的成交</span></div>
                <div><span className="dn-lvl-k">第 5 行 · 2026-08-27（新增 · 模型成交、第一次解决）</span><span className="dn-lvl-v bull">第 4 行的框架解决了：≈$78,200 这个限价价位在 08-26 12:30Z 被交到、并穿过去 $600.00，记为一笔交易台指令的<b>模型 / 纸上成交</b> · 没有券商确认，所以挂在它上面的 R 数字（+0.986R MFE、−0.631R MAE、+0.690R 标价）都是模型的、未对账</span></div>
                <div><span className="dn-lvl-k">带着的开放设计缺陷</span><span className="dn-lvl-v"><b>(a)</b> 只要 SM feed 还会产生名册断点，<code>net_btc</code> 闸就仍然不成立 —— 尽管这个 session 没有产生 <code>net_btc</code> 断点 · <b>(b)</b> 每一道带状闸都要写明价格口径与时长 —— 08-25 / 08-26 已关 · <b>(c)</b> 新增：一套只写了进场、止损与目标、中间什么都没写的框架，会把一次远征换成零 —— 今天由 $79,600 分批规则关掉 · <b>(d)</b> 用会动的 MA 报的目标会在框架底下重定基 —— 仍标出、未关 · <b>(e)</b> 新增：执行状态不能从价格路径数据推断，在载入订单簿之前每一条成交主张都必须继承模型 / 未对账的标签 —— 已标出、并在本篇全文照办</span></div>
              </div>
              <div className="dn-gating">
                <b>流程注记：</b>九天里五个事件，而第一个解决的那个，是在两个
                session 之前写下的价格上解决的、没有改价也没有追。这是方法在
                起作用。而按已载入的数据，它同时是一次<em>模型</em>解决 ——
                台账记的是盘面对着一条指令跑到哪里，它记不了一笔券商成交，
                因为这一整段跑从来没有载入过任何券商源。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · chase-short · 站边 —— 连续第六个 session · 序列里第一次两条腿走了<b>相反</b>方向，而 γ 那条腿走得很<b>远</b></span>
              <div className="dn-trade-name">
                Chase-short —— 再一次站边，而这个 session 情况是实质变坏、不是边际变好
              </div>
              <div className="dn-thesis">
                价格腿改善得微不足道，γ 腿恶化得很大。现货需要跌{' '}
                <span className="dn-tag">18.10%</span> 才到 0γ 翻转位
                $64,581.07，对 08-26 的 18.30% —— 在一条需要十八个点的腿上
                近了 0.20 个百分点。要求脚算总量转负或塌向零的 γ 腿反着走了{' '}
                <span className="dn-tag">+35.55M 到 +287.90M</span> ——
                这是<em>自 08-22 面板以来</em>最大的单 session 加深、不是谱系
                最大（08-17→08-18 一步 +100.80M、08-19→08-20 一步 +125.24M），
                另外它是可得读数里第二深的绝对水位。这次站边的前五个 session
                里两条腿都是同向或近乎同向走的；这是第一次它们分开，而且分得
                重重地不利于空头。再加上前端到期在<em>一次</em>负值印子
                （26AUG26 −2.04M）之后回到正 +14.14M，于是空头最好的近端指望
                ——两个有日期的结算候选——现在是一条当前为正的 0.3 DTE 线、
                <em>今天 08:00Z 才结算、在本锚之后 7h55m，所以在这里是未了结的</em>，
                外加一条明天结算的 +83.36M。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">站边 —— 这个快照上不考虑做空，也不考虑在同一个本子里对着模型多头做空</span></div>
                <div><span className="dn-lvl-k">价格腿（未满足 · 边际更近）</span><span className="dn-lvl-v">现货够到 0γ 翻转位 $64,581.07 —— 需要跌 18.10%（此前 18.30%）；现货在它上方 +22.1047%、按文件的 Deribit 指数 $79,202.81 算 +22.6409%</span></div>
                <div><span className="dn-lvl-k">γ 腿（未满足 · 明显更远）</span><span className="dn-lvl-v bear">要求脚算总量转负或塌向零 —— 当前 +287.90M（卡片头条 +280.6M、49 点剖面 +281.1237M）、加深 +35.55M（自 08-22 面板以来最大的一步；<b>不是</b>谱系最大的一步）· 27AUG26 在锚上读 +14.14M、今天 08:00Z 结算 —— 写稿时未了结 · 28AUG26（+83.36M / 28.96%）2026-08-28 08:00Z 结算</span></div>
                <div><span className="dn-lvl-k">不要做</span><span className="dn-lvl-v bear">不要把 1d 的 TD9 SELL、8h 的水上死叉（4 根）或三条顶背离读成做空触发 —— 它们是均值回归的证据，而它们所在的本子在 MA 矩阵上是 18-of-20 的多、两种 MTF 数法都零空、dealer 夹持在它第二深的读数上</span></div>
              </div>
              <div className="dn-gating">
                <b>两条腿都没满足，而合成起来它走远了。</b>交易台已经连着六个
                session 让它站边。真正重要的纪律不是重复站边 —— 是记下这个
                session 有一条腿走到了案子的<em>反面</em>，而不是把价格腿那
                0.20pt 的改善悄悄重报一遍、当成框架靠近了。它没有。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 进场规则的价格条件端到端满足 · 去拥挤闸清掉 · 台阶 watch 以有利方向解决 · 散户与 1d TD9 是两条常设异议</span>
            </h2>

            <p>
              08-26 那些条件的结果：{' '}
              <b>≈$78,200 限价的价位在 08-26 12:30Z 被交到</b>
              （记为模型成交；没有载入券商确认），指令自己的到期没有用上；{' '}
              <b>止损没有点着</b>，盘中口径与日收口径都没有；{' '}
              <b>$80,000 第一目标没有点着</b>，在 23:46Z 的高点上差 $861.30；{' '}
              <b>未成交处置分支无实义</b>；{' '}
              <b>434 分钟去拥挤闸清掉</b>，在 1,686 个流逝分钟上、是阈值的
              3.88×；<b>「$78,000 转负」的台阶 watch 没有点着</b>、
              反而在 +29.72M 上走了另一边；{' '}
              <b>chase-short 的价格腿与 γ 腿仍然都没满足</b>，而 γ 腿明显走
              远；<b>SM 可采信条件第一次点着</b>，单分钟集中度 16.34%，
              而在这之前连着五篇备忘被标为不可采信、分别是 08-23 / 08-24 /
              08-25 / 08-26 的 98.12% / 81.76% / 93.28% / 72.50%
              （这段连跑是五个 session 长，它不是一段 80% 以上的连跑）。
              <em>一条进场规则的价格条件完全按预先发布的样子满足、交易台等了
              很久的两道闸清掉、一条 watch 以有利方向解决，而没有任何一条
              离场规则被测到。</em>条件围绕一个模型仓位、而不是一个待触发的
              仓位重置：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>回踩多头（模型仓位）—— 止损（未变）</td><td className="bear">日收 &lt; $77,248.42</td><td>平掉 · 台阶持有这条主张被证伪、这笔交易退休、不重定基</td></tr>
                <tr><td>回踩多头 —— 新增分批目标规则</td><td className="bull">$79,600 触及</td><td>减一半、剩下的移到保本 $78,200 · 现在写，是因为它的缺席把一次 +0.986R 的模型远征换成了零</td></tr>
                <tr><td>回踩多头 —— 第一目标</td><td className="bull">$80,000 固定（从现货 +1.45%；高点在 08-26 23:46Z 差 $861.30）</td><td>了结剩余 · $80,000 同时是板上最大的墙、+52.06M，所以要预期这次触及会被争夺</td></tr>
                <tr><td>回踩多头 —— 第二目标</td><td>W-SMA50 · 今天 $81,058.11、08-26 $81,049.16、08-25 写下时 $81,784.71</td><td>标出的缺陷：会动的 MA 目标。每个 session 都把三个 vintage 一起引用；不悄悄重定基</td></tr>
                <tr><td>进场底下的 γ 台阶（watch 继续挂着）</td><td className="bear">$78,000 转负（当前 +29.72M、走强 +4.97M）</td><td>一旦翻转，回踩框架就失去结构锚、在止损被触及<em>之前</em>重新评估</td></tr>
                <tr><td>散户拥挤（常设异议）</td><td className="bear">52.06%、+2.04pt、24h 峰 52.10% 在锚前 12 分钟 · 7d 区间 45.96% / 53.20%</td><td>这个水位不动作 · 价格在 $80,000 下方走不动、同时拥挤推穿 7d 高点 53.20%，才是让交易台提前减半、而不是等 $79,600 的那个组合</td></tr>
                <tr><td>funding 重新钉顶（刚清掉的那道闸）</td><td className="bull">当前 +4.9560% ann、离顶 28h06m · 0 / 1,441 行封顶</td><td>回到 +10.95% 封顶并持续一段，就重新武装拥挤这条异议 · 434 分钟这个标准现在是双向检验、不是单向闸</td></tr>
                <tr><td>1d TD9 SELL（已印）+ 12h/1d RSI 80.9 / 80.4</td><td className="bear">在未收盘的日 bar 上、$78,920 印出</td><td>是均值回归的证据，不是做空触发、也不是离场触发 · 它支持在 $79,600 减半、而不是死等 $80,000，这正是新规则做的事</td></tr>
                <tr><td>Chase-short</td><td className="stale">价格腿差 18.10%；γ 腿 +287.90M 且在加深</td><td>站边 · 不在同一个本子里对着模型多头做空</td></tr>
                <tr><td>周期地板（未变、带着不动作）</td><td>W-SMA200 $64,269.62 已收盘口径 · 现货在上方 +22.70% · 跌 18.50% 才到</td><td>不动作 · watch 文件连续第二个 session 缺失，分位自算、并限定在起于 2019-09-08 的 parquet 上</td></tr>
              </tbody>
            </table>

            <p>
              真正会改写<em>这一篇</em>的那一条，是{' '}
              <span className="dn-signal">
                $80,000 那面墙 —— 板上最大的一面、+52.06M，也是 08-26 的高点
                已经在它下方失败过一次的水位 —— 会不会在模型仓位把远征换成
                已实现的 R 之前把这波盖住，还是清掉的 funding 闸与修好的台阶
                会把它送到 W-SMA50 那一带。交易台在一个它提前两个 session
                写下、而盘面后来才递过来的数字上做模型多头，这是流程在起作用；
                它同时刚刚眼看着 +0.986R 因为一条没写的规则蒸发掉，
                这是流程在另一个地方失灵
              </span>
              。在那之前，这篇按写的跑：模型多头按未变的水位带着、在 $79,600
              加一条分批规则，止损留在固定的 $77,248.42、不为了熬过一次回踩
              往下挪，chase-short 第六个 session 站边、对着两条分开走远的腿，
              而两条常设异议 —— 52.06% 的散户拥挤与已经印出的 1d TD9 SELL
              —— 记成异议、不被辩掉。接下来 24h 正确的读法是
              <em>守住水位、把那一半落袋、不要把一个好进场跟一笔已完成的
              交易搞混</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2 · 已过 codex 敌对式审计 ·{' '}
              <code>audits/2026-08-27-desk-note.md</code> · 对 v1 裁定
              BLOCK-CRITICAL（2 CRITICAL · 5 MAJOR · 7 MINOR · 0 NIT）·
              14 条全部应用并已 grep 收口
            </span>
            <b>STAGE C 适用的范围规则：</b>每一条 finding 都被当成一整{' '}
            <em>类</em>需要在全文件范围内改正的错误主张来处理，而不是被当成
            一份行号清单 —— 审计引用的 <code>file:line</code> 只用作主要示例。
            这个区分正是 2026-06-08 / 06-09 两次 pipeline 失败被记录在案的
            根因。每一条 CRITICAL 与 MAJOR 都在整个 EN 文件上跑显式 grep
            闭环（搜索的模式 → 修前仍带旧含义的命中 → 修后命中），循环到零
            残留为止；残留命中只在该字符串带着<em>相反</em>（更正）含义时才
            保留并注明。<b>下面每一条都是「已解决」，没有任何模式在文件里
            还保留修前的含义。</b>
            <div className="dn-lvls">
              <div><span className="dn-lvl-k">DN-001 · CRITICAL · +35.55M 的 GEX 台阶被称作谱系最大是假的</span><span className="dn-lvl-v">模式：<code>largest single-session step</code>、<code>largest single-session change</code>、<code>largest single-session deepening of the lineage</code>、<code>of the checked lineage by a wide margin</code>、<code>wide margin</code> · 修前 4 处（导语、第 III 节副标、第 III 节正文、chase-short 论点）· 修后 <b>0</b> · 主张收窄为「自 08-22 面板以来最大的一步」，两个更大的谱系台阶就地印出（08-18 备忘的 +28.06M → +128.86M = +100.80M；08-19 +128.92M → 08-20 +254.15M = +125.24M），并在四处全部把日变化序数与水位序数分开陈述 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-002 · CRITICAL · 在结算前 7h55m 把 27AUG26 说成已结算</span><span className="dn-lvl-v">模式：<code>settled-positive</code>、<code>one settled</code> · 修前 1 处（chase-short 论点）· 修后 <b>0</b> · 改写为一条当前为正的 0.3 DTE 线、今天 08:00Z 才结算，并明确写明它在 00:05Z 锚上未了结；第 III 节到期段与 chase-short 的 γ 腿行也带同一个标签 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-003 · MAJOR · 「两次连续负前端」与「前端又回正」是错的谱系摘要</span><span className="dn-lvl-v">模式：<code>two consecutive negative front</code>、<code>two negative fronts</code>、<code>positive again</code>、<code>24AUG26 −1.21M</code> · 修前 3 处 · 修后 <b>0</b> · 计数更正为恰好一次前端负值（26AUG26 −2.04M）；08-25 与 08-24 面板自己的最前端条按 25AUG26 +9.37M 与 24AUG26 +9.67M 印出、两条都为正；−1.21M 重新标注为 24AUG26 在 08-23 面板上的 1.3 DTE 值，而那张面板的最前端条是 23AUG26 +5.76M · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-004 · MAJOR · 执行与持仓主张超出已载入盘面</span><span className="dn-lvl-v">模式：<code>FILLED</code>（大写）4 处、<code>The book is LONG</code> 1、<code>the position is live</code> 1、<code>the live position</code> 1、<code>a live long</code> 2、<code>the live objection(s)</code> 2、<code>· live ·</code> 1、<code>the trade filled</code> 1 —— 修前共 13 处 · 每一个模式修后都是 <b>0</b> · 第 V 节全节重标为一笔<b>交易台指令的模型 / 纸上成交</b>与一个<b>未对账的模型 0.2R 仓位</b>：节标题、交易块侧标、状态行、证据行（改名为「可成交性证据、不是执行证据」）、远征行、导语、数据来源那一行、第 VI 节开头、第 VI 节表与收尾段全部继承；并在可成交性论证正下方逐项列出盘面证明不了什么 —— 订单是否存在、路由、状态、数量、成交均价、归属。NFA 段同步加强。大写的 <code>UNFILLED</code> 残留 2 处，指 08-19 侦察仓与第 3 行处置，都是历史上的未成交 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-005 · MAJOR · SM 可采信历史记错日期、且「五个 session 都在 80% 以上」是假的</span><span className="dn-lvl-v">模式：<code>93.28% on 08-26</code> 1、<code>five-session run</code> 1、<code>run above 80%</code> 1、<code>first time in five sessions</code> 3、<code>four consecutive sessions</code> 1 —— 修前共 7 处 · 每个模式修后 <b>0</b> · 历史在全部站点（SM tile、第 I 节副标、第 I 节正文、第 V 节论点、第 VI 节开头）改写为 08-23 / 08-24 / 08-25 / 08-26 的 98.12% / 81.76% / 93.28% / 72.50%，此前的警告连跑从四篇更正为五篇，并明确写出这段连跑是五个 session 长、但<em>不是</em>一段 80% 以上的连跑。<code>run above 80%</code> 残留 2 处、都在这句否定里。今天 16.34% 的单分钟集中度原样保留 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-006 · MAJOR · 精确 net-GEX 的源不在日期归档里</span><span className="dn-lvl-v">模式：<code>gex_summary.json</code> —— 修前正文 3 处，其中 2 处把精确的 +287,897,984.62 归到一个按小时覆写的滚动路径、且没有任何持久性披露 · 修后 <b>0</b> · 该文件已逐字节拷入 <code>/opt/desk-note/snapshots/2026-08-27-0007/gex_summary.json</code>（sha256 <code>f86c52ae2ac65f9c02cc166afd9eedff4b757736ada3cc34a2e5a712a813d49a</code>、内部戳 00:01Z、与归档的 <code>btc_gex.html</code> 同戳），数据来源那一行与第 III 节现在都引用这份钉住的副本并说明原因 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-007 · MAJOR · 差一点台账的连续性被改写</span><span className="dn-lvl-v">模式：<code>fourth and fifth rows</code>、<code>three sessions closes here</code> · 修前 2 处 · 修后 <b>0</b> · 第 4 行永久保留它 2026-08-26 的差一点分类并明写；第 5 行作为 2026-08-27 的模型成交解决被追加；而在 v1 里根本没有渲染出来的台账，现在以完整的五行块印出、读作 <b>5 个事件 / 3 次差一点 / 1 次处置 / 1 笔模型成交</b> · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">MINOR 七条 · 全部应用</span><span className="dn-lvl-v"><b>DN-008</b> 散户峰陈旧度：<code>13 minutes</code> 修前 2 处、修后 <b>0</b> —— 都改成 12 个流逝分钟（峰行 <code>08-27 07:53</code> BJ = 08-26 23:53Z 对 00:05Z 锚），与本来就写对的三处一致 · <b>DN-009</b> 200W 分位分母：<code>41/165</code> 修前 1 处、按原义修后 <b>0</b> —— 发布的是严格的 40/165 = 24.2%，插入名次重述为 41/166 = 24.7 分位并解释分母随插入增长；<code>41/165</code> 残留 1 处、在否定它的那句里 · <b>DN-010</b> 脚算条的两个差额：第 III 节合计句里的 <code>above both</code> 修前 1 处、修后 <b>0</b> —— 两个精确差额都印出（高出剖面 $6.774301M、高出头条 $7.297984M），并写明它与另外两个基准不等距 · <b>DN-011</b> IV 精度单位：<code>about a basis point</code> 修前 1 处、修后 <b>0</b> —— 换成四舍过的卡片输入带 ±5 个波动率基点、两个各自四舍的卡片值相减时最多 ±10；数据来源那一行用同一单位 · <b>DN-012</b> 跨资产的紧邻前值：<code>0.205 →</code> 与 <code>22.72%</code> 修前 2 处、修后 <b>0</b> —— 序列改为按 08-26 日期摘要（BTC +21.72%、NQ −1.07%）的 0.198 → 0.182 与 22.79pt → 13.86pt，窗口滚动被描述为主导而非唯一成因，并点名 NQ 自己 −1.07% → −0.06% 的移动 · <b>DN-013</b> 窗高的双口径：裸标签 <code>@02:27Z</code> 修前 1 处、修后 <b>0</b> —— 该行现在读作 交易所 $79,200.00 @02:26Z（monitor @02:27Z），与第一次触碰和低点本来就用的纪律一致 · <b>DN-014</b> 页脚锚：页脚现在读 <b>00:05Z 锚 · 00:07Z 归档</b>，把分析端点与编码在快照目录名里的归档 / 写稿时刻分开 · 三条全部修后命中 <b>0</b>、<b>已解决</b></span></div>
            </div>
            <b>收口陈述：</b>14 条全部报告 grep 修后命中为 0，没有任何一条被
            当作未解决带过，因此本篇从 v1 晋级到 v2。更正背后的算术都在
            STAGE C 发布前独立重算过、不是从审计里抄的：谱系台阶
            +100.80M 与 +125.24M 来自 08-18 / 08-19 / 08-20 的备忘与日期面板；
            前端到期的 +9.37M / +9.67M / +5.76M 来自 08-25 / 08-24 / 08-23
            的日期面板；72.50% 与 93.28% 的归属来自 08-26 与 08-25 备忘本身；
            12 个流逝分钟、02:26Z 的窗高、217 根 bar、$77,600.00 @15:04Z 与
            $79,138.70 @23:46Z 全部从 <code>btcusdt_1m_*.parquet</code> 与
            <code>live_db.json</code> 重算；$6.774301M / $7.297984M 与
            40 / 165、41 / 166 也都是独立算的。{' '}
            <b>codex 确认干净、原样带进 v2 的部分：</b>
            <code>requireViewer(&apos;/desk/2026-08-27&apos;)</code> 作为默认
            导出的第一条语句、且与路由完全一致；1,441 行的锚与 24h 粒度；
            funding 全部算术与离顶时距；OI 端点、峰谷与毛流警告；本 session
            的 SM 算术（−4,549.6、16.34%、33.99 / 49.37 / 79.90、
            20,422.9 = 4.49×、152 / 136、07:41Z 名册跳变）；资金流与仓位端点；
            MTF 面板与两种数法；全部 20 格 MA 矩阵、2,546 日 / 365 周、
            D-EMA400；30D RV 的对数收益口径与它对 08-26 / 08-25 的精确复现；
            200W 的各条水位；当前 GEX / IV 算术与前十墙；到期算术；宏观面板与
            当前跨资产；交易路径与水位算术；以及 markup 完整性。{' '}
            <b>已承认、但本轮未关掉的开放问题：</b>2026-08-21 的 GEX 存档仍然
            缺失，所以「第二深」这个序数只对可得的面板成立、不对每一天；
            <code>weekly_200sma.json</code> 连续第二个 session 不在盘上、
            周期这一读仍是披露过的 parquet fallback、限定在起于 2019-09-08 的
            Binance 永续序列上；订单 / 执行的真相仍然不可得，这正是 DN-004
            的重新标注是一条永久的范围陈述、而不是一次措辞修改的原因；
            <code>live_db.json</code> 在本窗之外的第 65,799 物理行上有一行
            只含 NUL 的无效记录、不影响本篇任何重算。{' '}
            <b>构建注记（INFO）：</b>这台服务器跑 Node 18.19.1、而 Next 16.2.6
            在低于 Node 20.9.0 时硬退出，所以完整的 <code>next build</code>
            仍被环境挡住；<code>npx --no-install tsc --noEmit</code> 是构建
            代理、在这份 v2 上以 exit 0 通过，针对本文件的 ESLint 同样通过。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体情况
            个性化。数字反映单一原子快照（2026-08-27 00:05Z 钉住的锚行，
            锚行的 <code>t</code> 字段是北京时 08-27 08:05），provenance
            在上方数据来源条带中按节披露。{' '}
            <b>
              这是 v2、在 codex 敌对式审计之后晋级 —— 裁定记录在{' '}
              <code>audits/2026-08-27-desk-note.md</code>，对 v1 判
              BLOCK-CRITICAL、2 CRITICAL + 5 MAJOR + 7 MINOR + 0 NIT
              共 14 条 findings 全部就地修正并用全文件 grep 收口，逐条的
              修前 / 修后命中记录在上方审计痕迹里
            </b>
            。宏观面板渲染于 2026-08-26 22:15Z（比锚早约 1.8h）；MTF 与 GEX
            人造物都是 00:01Z、比盘面锚早约四分钟 —— 是相对它更旧、不是更新。{' '}
            <b>
              第 V 节记录的是一笔交易台指令的模型 / 纸上记录、它的限价价位
              在盘面上被交到 —— 本次没有载入任何券商确认、订单簿、订单状态源、
              成交均价或持仓对账，所以它绝不能被读成一个对过账的持仓、
              也不能被读成任何订单曾经存在的证据
            </b>
            。200W 周期地板 watch 文件<em>不存在</em>，它的读数是披露过的
            parquet fallback、分位限定在 165 个周观测上（严格 40 / 165 =
            24.2%；把 live 现货作为新增观测插入则是 41 / 166 = 24.7 分位），
            不是 BTC 的完整历史；GEX 文件的 Deribit 指数比 live 现货高
            $346.27，所以每一个距离数字都按两个参考印；三个 aggregate GEX
            口径全部披露、任何地方都不混用；post-08-16 的脚算台账缺
            2026-08-21 一天的存档，所以「第二深」这个序数只对可得的已核对
            面板成立；JGB 是 FRED 月度、陈旧 86 天；IV 是跨 960 合约的链中位、
            不是可交易价差、也不是 strike-level IV、且只印一位小数
            （±0.05pt = ±5 个波动率基点）；NTT pivot、max-pain、
            strike-level IV 与 BTC/NQ 比率均未载入。水位、规模与条件是交易台
            流程的示例、不是长期推荐。R 数字描述的是盘面相对写下的水位跑到
            哪里，不是已实现业绩的陈述。过去的相关性、γ 与仓位模式不绑定
            未来盘面。衍生品有全损风险、加杠杆下损失可超过保证金。
            <em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                限价那个价位在我们两个 session 前写下的地方被交到了，
                盘面还穿过去六百美元。闸清了、台阶修了，而我们仍然为一条
                没写的规则放走了 +0.986R 的模型远征。守住水位。把那一半落袋。
                在订单簿进来之前，这笔仓位是模型、不是账。
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
            v2 · 2026-08-27 00:05Z 锚 · 00:07Z 归档 · 已过 codex 敌对式审计
            （audits/2026-08-27-desk-note.md —— 2 CRITICAL + 5 MAJOR +
            7 MINOR + 0 NIT、全部 RESOLVED 并已 grep 收口）· 源：
            live_db.json · mtf_div_latest.html · btc_gex.html ·
            macro_dashboard.html · cross_asset_correlation_summary.md ·
            btcusdt_1m_*.parquet · gex_summary.json ·
            ma200w_trap_watch_state.json · FRED · Yahoo · Deribit
          </span>
        </footer>
      </article>
    </main>
  );
}
