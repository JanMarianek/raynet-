type Player = {
  rank: number;
  name: string;
  team: string;
  deals: number;
  revenue: number;
  history: number[]; // pořadí v čase, menší číslo = lepší
};

const players: Player[] = [
  {
    rank: 1,
    name: "Jan Zámostný",
    team: "Sales",
    deals: 42,
    revenue: 420000,
    history: [4, 3, 2, 2, 1, 1],
  },
  {
    rank: 2,
    name: "Tereza Nováková",
    team: "Account",
    deals: 38,
    revenue: 386000,
    history: [5, 4, 4, 3, 2, 2],
  },
  {
    rank: 3,
    name: "Marek Svoboda",
    team: "Business",
    deals: 35,
    revenue: 351000,
    history: [6, 5, 4, 4, 3, 3],
  },
  {
    rank: 4,
    name: "Lucie Králová",
    team: "Sales",
    deals: 31,
    revenue: 318000,
    history: [7, 6, 5, 5, 4, 4],
  },
  {
    rank: 5,
    name: "Petr Černý",
    team: "Account",
    deals: 29,
    revenue: 292000,
    history: [8, 7, 7, 6, 5, 5],
  },
  {
    rank: 6,
    name: "Adam Dvořák",
    team: "Business",
    deals: 27,
    revenue: 276000,
    history: [9, 8, 8, 7, 6, 6],
  },
  {
    rank: 7,
    name: "Eva Malá",
    team: "Sales",
    deals: 24,
    revenue: 244000,
    history: [10, 9, 8, 8, 7, 7],
  },
  {
    rank: 8,
    name: "Tomáš Procházka",
    team: "Account",
    deals: 22,
    revenue: 231000,
    history: [10, 10, 9, 9, 8, 8],
  },
  {
    rank: 9,
    name: "Anna Veselá",
    team: "Business",
    deals: 20,
    revenue: 219000,
    history: [10, 10, 10, 10, 9, 9],
  },
  {
    rank: 10,
    name: "Filip Horák",
    team: "Sales",
    deals: 18,
    revenue: 198000,
    history: [10, 10, 10, 10, 10, 10],
  },
];

const topThree = [players[1], players[0], players[2]];
const rest = players.slice(3);

const podiumStyles = [
  {
    place: "2.",
    label: "Druhé místo",
    badge: "bg-slate-100 text-slate-950",
    ring: "ring-white/15",
    glow: "shadow-white/10",
  },
  {
    place: "1.",
    label: "Vítěz",
    badge: "bg-lime-400 text-slate-950",
    ring: "ring-lime-400/30",
    glow: "shadow-lime-400/20",
  },
  {
    place: "3.",
    label: "Třetí místo",
    badge: "bg-amber-300 text-slate-950",
    ring: "ring-amber-300/30",
    glow: "shadow-amber-300/10",
  },
];

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("cs-CZ", {
    style: "currency",
    currency: "CZK",
    maximumFractionDigits: 0,
  }).format(value);

export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-6 text-slate-100 md:px-8 md:py-10">
      <section className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 inline-flex rounded-full bg-lime-400/10 px-4 py-2 text-sm font-bold text-lime-300 ring-1 ring-lime-400/20">
              Raynet leaderboard
            </p>
            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Žebříček nejlepších
            </h1>
            <p className="mt-3 max-w-2xl text-slate-400">
              Top 3 na stupních vítězů, zbytek přehledně v tabulce. Místo skóre
              je zobrazený vývoj pořadí v čase.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-4 text-right">
            <p className="text-sm text-slate-400">Celkem v žebříčku</p>
            <p className="text-3xl font-black text-lime-300">TOP 10</p>
          </div>
        </header>

        <section className="mb-8 grid gap-4 md:grid-cols-3 md:items-end">
          {topThree.map((player, index) => {
            const style = podiumStyles[index];
            const isWinner = index === 1;

            return (
              <article
                key={player.rank}
                className={`relative rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl ring-1 ${style.ring} ${style.glow} ${
                  isWinner ? "md:-translate-y-5" : ""
                }`}
              >
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-lime-400/8 blur-3xl" />

                <div className="relative flex flex-col gap-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span
                        className={`inline-flex rounded-2xl px-4 py-2 text-2xl font-black ${style.badge}`}
                      >
                        {style.place}
                      </span>
                      <p className="mt-4 text-sm font-bold uppercase tracking-[0.25em] text-slate-500">
                        {style.label}
                      </p>
                    </div>

                    <div className="grid h-24 w-24 place-items-center rounded-[2rem] bg-slate-900 text-3xl font-black ring-1 ring-white/10">
                      {getInitials(player.name)}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-black leading-tight">
                      {player.name}
                    </h2>
                    <p className="mt-1 text-base text-slate-400">{player.team}</p>
                  </div>

                  <div className="rounded-3xl bg-slate-950/65 p-4 ring-1 ring-white/5">
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-sm text-slate-400">Vývoj pořadí</p>
                      <p className="text-xs font-semibold text-slate-500">
                        posledních 6 období
                      </p>
                    </div>

                    <TrendChart history={player.history} large />

                    <div className="mt-3 flex items-center justify-between text-sm">
                      <span className="text-slate-400">
                        Aktuálně <span className="font-bold text-white">#{player.rank}</span>
                      </span>
                      <span className={trendColor(player.history)}>
                        {trendText(player.history)}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <InfoBox label="Obchody" value={String(player.deals)} />
                    <InfoBox
                      label="Revenue"
                      value={formatCurrency(player.revenue)}
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]">
          <div className="flex flex-col gap-3 border-b border-white/10 px-5 py-5 md:flex-row md:items-center md:justify-between md:px-6">
            <div>
              <h2 className="text-2xl font-black">Pořadí 4.–10.</h2>
              <p className="text-sm text-slate-400">Zbytek top desítky</p>
            </div>

            <span className="inline-flex w-fit rounded-full bg-lime-400/10 px-4 py-2 text-sm font-bold text-lime-300 ring-1 ring-lime-400/20">
              Live ranking
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[980px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-900/70 text-sm text-slate-400">
                  <th className="px-6 py-4 font-bold">#</th>
                  <th className="px-6 py-4 font-bold">Jméno</th>
                  <th className="px-6 py-4 font-bold">Tým</th>
                  <th className="px-6 py-4 font-bold">Trend</th>
                  <th className="px-6 py-4 font-bold">Obchody</th>
                  <th className="px-6 py-4 font-bold">Revenue</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-white/10">
                {rest.map((player) => (
                  <tr key={player.rank} className="transition hover:bg-white/[0.05]">
                    <td className="px-6 py-5">
                      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-900 font-black text-lime-300 ring-1 ring-white/10">
                        {player.rank}
                      </span>
                    </td>

                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div className="grid h-14 w-14 place-items-center rounded-[1.25rem] bg-white/10 text-lg font-black">
                          {getInitials(player.name)}
                        </div>
                        <div>
                          <p className="font-bold text-white">{player.name}</p>
                          <p className="text-sm text-slate-500">
                            #{player.rank} v pořadí
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-5 text-slate-300">{player.team}</td>

                    <td className="px-6 py-5">
                      <div className="w-[170px]">
                        <TrendChart history={player.history} />
                        <p className={`mt-2 text-xs font-semibold ${trendColor(player.history)}`}>
                          {trendText(player.history)}
                        </p>
                      </div>
                    </td>

                    <td className="px-6 py-5 text-slate-300">{player.deals}</td>

                    <td className="px-6 py-5 font-bold">
                      {formatCurrency(player.revenue)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </main>
  );
}

function InfoBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-slate-950/60 p-4 ring-1 ring-white/5">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-2 text-xl font-black text-white">{value}</p>
    </div>
  );
}

function TrendChart({
  history,
  large = false,
}: {
  history: number[];
  large?: boolean;
}) {
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

    return { x, y, value };
  });

  const polyline = points.map((p) => `${p.x},${p.y}`).join(" ");
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

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function trendText(history: number[]) {
  const first = history[0];
  const last = history[history.length - 1];
  const diff = first - last;

  if (diff > 0) return `↑ zlepšení o ${diff}`;
  if (diff < 0) return `↓ pokles o ${Math.abs(diff)}`;
  return "→ beze změny";
}

function trendColor(history: number[]) {
  const first = history[0];
  const last = history[history.length - 1];
  const diff = first - last;

  if (diff > 0) return "text-lime-300";
  if (diff < 0) return "text-rose-300";
  return "text-slate-400";
}