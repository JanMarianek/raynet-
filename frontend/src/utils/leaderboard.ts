export const formatCurrency = (value: number) =>
  new Intl.NumberFormat("cs-CZ", {
    style: "currency",
    currency: "CZK",
    maximumFractionDigits: 0,
  }).format(value);

export function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function trendText(history: number[]) {
  const first = history[0];
  const last = history[history.length - 1];
  const diff = first - last;

  if (diff > 0) return `↑ zlepšení o ${diff}`;
  if (diff < 0) return `↓ pokles o ${Math.abs(diff)}`;
  return "→ beze změny";
}

export function trendColor(history: number[]) {
  const first = history[0];
  const last = history[history.length - 1];
  const diff = first - last;

  if (diff > 0) return "text-lime-300";
  if (diff < 0) return "text-rose-300";
  return "text-slate-400";
}
