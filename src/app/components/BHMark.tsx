type Props = {
  width?: number;
  height?: number;
  strokeWidth?: number;
};

const PATH =
  'M 10 6 C 30 6, 38 7, 58 30 C 70 47, 78 53, 90 54 C 70 54, 62 53, 42 30 C 30 13, 22 7, 10 6 Z';

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
