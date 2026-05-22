type TitleSubtitleSectionProps = {
  totalPlayers: number;
};

export function TitleSubtitleSection({ totalPlayers }: TitleSubtitleSectionProps) {
  return (
    <header className="mb-8 rounded-b-[2rem] rounded-t-2xl bg-bg-light px-6 py-8 text-lime-50 shadow-2xl shadow-lime-950/20 md:px-8 md:py-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          {/*<p className="mb-3 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-lime-100 ring-1 ring-white/15">*/}
          {/*  Raynet leaderboard*/}
          {/*</p>*/}
          <h1 className="text-4xl font-black tracking-tight md:text-6xl">
            Žebříček nejlepších
          </h1>
          <p className="mt-3 max-w-2xl text-lime-100/80">
            Top 3 na stupních vítězů, zbytek přehledně v tabulce. Místo skóre je
            zobrazený vývoj pořadí v čase.
          </p>
        </div>

        <div className="w-fit rounded-3xl border border-white/15 bg-white/10 px-5 py-4 text-left md:text-right">
          <p className="text-sm text-lime-100/75">Celkem v žebříčku</p>
          <p className="text-3xl font-black text-white">TOP {totalPlayers}</p>
        </div>
      </div>
    </header>
  );
}
