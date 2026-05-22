type TrendChartProps = {
  history: number[];
  large?: boolean;
};

export function TrendChart({ history, large = false }: TrendChartProps) {
  const width = large ? 320 : 160;
  const height = large ? 90 : 42;
  const padding = 6;
  const minRank = 1;
  const maxRank = 10;

  const points = history.map((value, index) => {
    const x =
      padding + (index * (width - padding * 2)) / Math.max(history.length - 1, 1);

    const y =
      padding +
      ((value - minRank) / (maxRank - minRank)) * (height - padding * 2);

    return { x, y };
  });

  const last = points[points.length - 1];

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={`w-full ${large ? "h-24" : "h-12"}`}
      fill="none"
    >
      <path
        d={`M ${points.map((p) => `${p.x} ${p.y}`).join(" L ")}`}
        stroke="#A3E635"
        strokeWidth={large ? 3 : 2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {points.map((p, index) => (
        <circle
          key={index}
          cx={p.x}
          cy={p.y}
          r={large ? 3.5 : 2.5}
          fill={index === points.length - 1 ? "#A3E635" : "#94A3B8"}
        />
      ))}

      {large && last && (
        <circle
          cx={last.x}
          cy={last.y}
          r={5}
          fill="#A3E635"
          stroke="#020617"
          strokeWidth="2"
        />
      )}
    </svg>
  );
}
