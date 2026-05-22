type LeaderboardHeaderProps = {
  totalPlayers: number;
};

export function LeaderboardHeader({ totalPlayers }: LeaderboardHeaderProps) {
  return (
    <header className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="mb-3 inline-flex rounded-full bg-lime-400/10 px-4 py-2 text-sm font-bold text-lime-300 ring-1 ring-lime-400/20">
          Raynet leaderboard
        </p>
        <h1 className="text-4xl font-black tracking-tight md:text-6xl">
          Žebříček nejlepších
        </h1>
        <p className="mt-3 max-w-2xl text-slate-400">
          Top 3 na stupních vítězů, zbytek přehledně v tabulce. Místo skóre je
          zobrazený vývoj pořadí v čase.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-4 text-right">
        <p className="text-sm text-slate-400">Celkem v žebříčku</p>
        <p className="text-3xl font-black text-lime-300">TOP {totalPlayers}</p>
      </div>
    </header>
  );
}
