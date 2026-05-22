type TrendChartProps = {
  history: number[];
  large?: boolean;
  fullWidth?: boolean;
  maxRank?: number;
};

export function TrendChart({
  history,
  large = false,
  fullWidth = false,
  maxRank = 10,
}: TrendChartProps) {
  const width = fullWidth ? 400 : large ? 320 : 160;
  const height = fullWidth ? 300 : large ? 90 : 42;
  const padding = fullWidth ? 18 : 6;
  const minRank = 1;
  const safeMaxRank = Math.max(maxRank, minRank + 1);

  const points = history.map((value, index) => {
    const x =
      padding + (index * (width - padding * 2)) / Math.max(history.length - 1, 1);

    const y =
      padding +
      ((value - minRank) / (safeMaxRank - minRank)) * (height - padding * 2);

    return { x, y };
  });

  const last = points[points.length - 1];

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={`w-full ${fullWidth ? "aspect-[4/3] h-auto" : large ? "h-24" : "h-12"}`}
      fill="none"
    >
      <path
        d={`M ${points.map((p) => `${p.x} ${p.y}`).join(" L ")}`}
        stroke="#A3E635"
        strokeWidth={fullWidth ? 4 : large ? 3 : 2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {points.map((p, index) => (
        <circle
          key={index}
          cx={p.x}
          cy={p.y}
          r={fullWidth ? 2.25 : large ? 3.5 : 2.5}
          fill={index === points.length - 1 ? "#A3E635" : "#94A3B8"}
        />
      ))}

      {(large || fullWidth) && last && (
        <circle
          cx={last.x}
          cy={last.y}
          r={fullWidth ? 6 : 5}
          fill="#A3E635"
          stroke="#020617"
          strokeWidth="2"
        />
      )}
    </svg>
  );
}
