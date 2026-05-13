type Props = {
  width?: number;
  height?: number;
  strokeWidth?: number;
};

const PATH =
  'M 10 54 C 30 54, 38 53, 58 30 C 70 13, 78 7, 90 6 C 70 6, 62 7, 42 30 C 30 47, 22 53, 10 54 Z';

export default function BHMark({
  width = 22,
  height = 14,
  strokeWidth = 3,
}: Props) {
  return (
    <svg width={width} height={height} viewBox="0 0 100 60" aria-hidden="true">
      <path
        d={PATH}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
