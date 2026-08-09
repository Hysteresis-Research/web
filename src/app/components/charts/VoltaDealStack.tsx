import ChartFrame from './ChartFrame';

type Lang = 'en' | 'zh';

type Strings = {
  title: string;
  aria: string;
  labA: string;
  labASub: string;
  flow1: string;
  flow1Sub: string;
  labB: string;
  labBSub: string;
  flow2: string;
  flow2Sub: string;
  labC: string;
  labCSub: string;
  delivery: string;
  scenario: string;
  credit: string;
  creditBody: readonly string[];
  programme: string;
  programmeBody: readonly string[];
  breakClause: string;
  breakBody: readonly string[];
  spread: string;
  spreadBody: readonly string[];
};

const STRINGS: Record<Lang, Strings> = {
  en: {
    title: 'The Tydal stack — who pays whom, for what',
    aria: 'Diagram of the Tydal deal stack: an AI lab pays Volta roughly ten billion dollars over six years; Volta pays Bitdeer roughly 4.7 billion over sixteen years for 121 IT megawatts in Norway; side notes show the letters of credit, the Azora financing programme, the year-ten break clause and the per-megawatt spread. Per-megawatt figures assume the full ten billion attaches to Tydal, the announced first project.',
    labA: 'A LEADING AI LAB',
    labASub: 'reported: Anthropic · unconfirmed',
    flow1: '$10B · 6-yr compute commitment',
    flow1Sub: '≈ $13.8M / IT-MW·yr',
    labB: 'VOLTA · VOLTA TYDAL AS',
    labBSub: 'GPUs: NVIDIA Vera Rubin · Dell systems',
    flow2: '$4.7B · 16-yr colocation lease',
    flow2Sub: '≈ $2.4M / IT-MW·yr · avg $202/kW·mo',
    labC: 'BITDEER — TYDAL, NORWAY',
    labCSub: '121 MW IT / ~133 MW gross · hydro',
    delivery: 'four halls: 2026-12-31 · 2027-03-31',
    scenario: 'scenario: the full $10B attributed to Tydal, the first project',
    credit: 'CREDIT',
    creditBody: ['~$1.3B letters of credit,', 'J.P. Morgan + one bank'],
    programme: 'PROGRAMME',
    programmeBody: ['$5B with Azora — project', 'equity + senior debt'],
    breakClause: 'BREAK CLAUSE',
    breakBody: ['no-fee termination, year 10', '→ firm value ≈ $2.7B', '(Benchmark)'],
    spread: 'SPREAD',
    spreadBody: ['≈ $11.4M per IT-MW·yr,', 'the margin buying the GPUs'],
  },
  zh: {
    title: 'Tydal 结构——谁付谁，付的是什么',
    aria: 'Tydal 交易结构图：一家 AI 实验室在六年内向 Volta 支付约一百亿美元；Volta 以十六年约四十七亿美元向 Bitdeer 租用挪威 121 IT 兆瓦；旁注为信用证、Azora 融资计划、第十年解约权与每兆瓦价差。每兆瓦口径假设 $10B 全额记于 Tydal（首个项目），后续站点并入将摊薄。',
    labA: '某头部 AI 实验室',
    labASub: '据报为 Anthropic——双方均未确认',
    flow1: '$10B · 6 年算力承诺',
    flow1Sub: '≈ $13.8M / IT-MW·年',
    labB: 'VOLTA · VOLTA TYDAL AS',
    labBSub: 'GPU：NVIDIA Vera Rubin · Dell 整机',
    flow2: '$4.7B · 16 年托管租约',
    flow2Sub: '≈ $2.4M / IT-MW·年 · 均价 $202/kW·月',
    labC: 'BITDEER——挪威 TYDAL',
    labCSub: '121 MW IT / 约 133 MW 毛容量 · 水电',
    delivery: '四座机房：2026-12-31 · 2027-03-31',
    scenario: '口径：$10B 全额记于 Tydal（首个项目）',
    credit: '信用支持',
    creditBody: ['信用证 ~$1.3B，', 'J.P. Morgan + 另一家'],
    programme: '融资计划',
    programmeBody: ['与 Azora 的 $5B：', '项目股权 + 优先债'],
    breakClause: '解约条款',
    breakBody: ['第 10 年起可免罚解约', '→ 确定承诺 ≈ $2.7B', '（Benchmark）'],
    spread: '价差',
    spreadBody: ['≈ $11.4M / IT-MW·年，', '这层毛差用来买 GPU'],
  },
};

const BOX_X = 52;
const BOX_W = 310;
const ARROW_X = 88;
const NOTE_X = 396;

function Box({
  y,
  label,
  sub,
  emphasis,
}: {
  y: number;
  label: string;
  sub: string;
  emphasis?: boolean;
}) {
  return (
    <g>
      <rect
        x={BOX_X}
        y={y}
        width={BOX_W}
        height={46}
        fill={emphasis ? 'var(--signal-wash)' : 'none'}
        stroke={emphasis ? 'var(--signal)' : 'var(--ink)'}
        strokeWidth={emphasis ? 1.4 : 1}
        opacity={emphasis ? 1 : 0.75}
      />
      <text
        x={BOX_X + 12}
        y={y + 19}
        fill="var(--ink)"
        fontFamily="var(--grot)"
        fontSize={10}
        letterSpacing="0.08em"
      >
        {label}
      </text>
      <text
        x={BOX_X + 12}
        y={y + 35}
        fill="var(--ink-3)"
        fontFamily="var(--serif)"
        fontSize={8.5}
        fontStyle="italic"
      >
        {sub}
      </text>
    </g>
  );
}

function Flow({
  y,
  label,
  sub,
}: {
  y: number;
  label: string;
  sub: string;
}) {
  return (
    <g>
      <line
        x1={ARROW_X}
        y1={y}
        x2={ARROW_X}
        y2={y + 22}
        stroke="var(--signal)"
        strokeWidth={1.6}
      />
      <polygon
        points={`${ARROW_X - 3.5},${y + 20} ${ARROW_X + 3.5},${y + 20} ${ARROW_X},${y + 26}`}
        fill="var(--signal)"
      />
      <text
        x={ARROW_X + 14}
        y={y + 11}
        fill="var(--signal)"
        fontFamily="var(--grot)"
        fontSize={9}
        letterSpacing="0.04em"
      >
        {label}
      </text>
      <text
        x={ARROW_X + 14}
        y={y + 22}
        fill="var(--ink-3)"
        fontFamily="var(--serif)"
        fontSize={8}
        fontStyle="italic"
      >
        {sub}
      </text>
    </g>
  );
}

function SideNote({
  y,
  head,
  body,
}: {
  y: number;
  head: string;
  body: readonly string[];
}) {
  return (
    <g>
      <text
        x={NOTE_X}
        y={y}
        fill="var(--signal)"
        fontFamily="var(--grot)"
        fontSize={8}
        letterSpacing="0.14em"
      >
        {head}
      </text>
      {body.map((line, i) => (
        <text
          key={line}
          x={NOTE_X}
          y={y + 12 + i * 11}
          fill="var(--ink-2)"
          fontFamily="var(--serif)"
          fontSize={8.5}
        >
          {line}
        </text>
      ))}
    </g>
  );
}

// Static plate: the three-layer Tydal deal stack with the money flows on the
// left and the four term-sheet annotations on the right. Server-rendered SVG;
// every colour is a CSS variable so the plate reads in both editions.
export default function VoltaDealStack({ lang = 'en' }: { lang?: Lang }) {
  const s = STRINGS[lang];
  return (
    <ChartFrame title={s.title} ariaLabel={s.aria}>
      <Box y={40} label={s.labA} sub={s.labASub} />
      <Flow y={88} label={s.flow1} sub={s.flow1Sub} />
      <Box y={116} label={s.labB} sub={s.labBSub} emphasis />
      <Flow y={164} label={s.flow2} sub={s.flow2Sub} />
      <Box y={192} label={s.labC} sub={s.labCSub} />
      <text
        x={BOX_X + 12}
        y={250}
        fill="var(--ink-3)"
        fontFamily="var(--serif)"
        fontSize={8.5}
        fontStyle="italic"
      >
        {s.delivery}
      </text>
      <text
        x={BOX_X + 12}
        y={264}
        fill="var(--ink-3)"
        fontFamily="var(--serif)"
        fontSize={8}
        fontStyle="italic"
      >
        {s.scenario}
      </text>
      <line
        x1={NOTE_X - 14}
        y1={44}
        x2={NOTE_X - 14}
        y2={252}
        stroke="var(--hair)"
        strokeWidth={1}
      />
      <SideNote y={52} head={s.credit} body={s.creditBody} />
      <SideNote y={102} head={s.programme} body={s.programmeBody} />
      <SideNote y={152} head={s.breakClause} body={s.breakBody} />
      <SideNote y={213} head={s.spread} body={s.spreadBody} />
    </ChartFrame>
  );
}
