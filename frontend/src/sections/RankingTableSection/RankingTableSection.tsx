import type { Player } from "../../data/leaderboard";
import { RankingTableRow } from "../../components/RankingTableRow/RankingTableRow";

type RankingTableSectionProps = {
  players: Player[];
};

export function RankingTableSection({ players }: RankingTableSectionProps) {
  return (
    <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]">
      <div className="flex flex-col gap-3 border-b border-white/10 px-5 py-5 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <h2 className="text-2xl font-black">Další pořadí</h2>
          <p className="text-sm text-slate-400">Zbytek aktuálního žebříčku</p>
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
            {players.length === 0 && (
              <tr>
                <td className="px-6 py-8 text-slate-400" colSpan={6}>
                  Žádní další hráči neodpovídají filtrům.
                </td>
              </tr>
            )}

            {players.map((player) => (
              <RankingTableRow key={player.rank} player={player} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
