import { TrendChart } from "../../components/TrendChart/TrendChart";
import type { Player } from "../../data/leaderboard";
import {
  formatCurrency,
  getInitials,
  trendColor,
  trendText,
} from "../../utils/leaderboard";

type RankingTableSectionProps = {
  players: Player[];
};

export function RankingTableSection({ players }: RankingTableSectionProps) {
  return (
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
            {players.map((player) => (
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
                    <p
                      className={`mt-2 text-xs font-semibold ${trendColor(
                        player.history,
                      )}`}
                    >
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
  );
}
