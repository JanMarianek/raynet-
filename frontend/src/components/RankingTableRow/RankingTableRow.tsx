import { useState } from "react";
import { TrendChart } from "../../components/TrendChart/TrendChart";
import {
  timeFilterOptions,
  type Player,
  type TimeFilter,
} from "../../data/leaderboard";
import {
  formatCurrency,
  getInitials,
  trendColor,
  trendText,
} from "../../utils/leaderboard";
import {
  getBusinessCaseOwnerCount,
  getBusinessCaseRankHistory,
} from "../../utils/businessCaseHistory";

type RankingTableRowProps = {
  player: Player;
};

export function RankingTableRow({ player }: RankingTableRowProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [graphTime, setGraphTime] = useState<TimeFilter>("year");
  const graphHistory = getBusinessCaseRankHistory(player, graphTime);
  const maxRank = getBusinessCaseOwnerCount();

  return (
    <>
      <tr
        className="cursor-pointer transition hover:bg-white/[0.05]"
        onClick={() => setIsExpanded((current) => !current)}
      >
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
              <p className="text-sm text-slate-500">#{player.rank} v pořadí</p>
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

        <td className="px-6 py-5">
          <div className="flex items-center justify-between gap-4">
            <span className="font-bold">{formatCurrency(player.revenue)}</span>
            <button
              type="button"
              className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-slate-300 transition hover:bg-white/15"
              aria-expanded={isExpanded}
              aria-label={`${isExpanded ? "Hide" : "Show"} ${player.name} graph`}
              onClick={(event) => {
                event.stopPropagation();
                setIsExpanded((current) => !current);
              }}
            >
              <svg
                viewBox="0 0 24 24"
                className={`h-4 w-4 transition ${isExpanded ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>
        </td>
      </tr>

      {isExpanded && (
        <tr className="bg-bg-dark/80">
          <td colSpan={6} className="px-6 pb-6">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
              <div className="mb-4 flex flex-col gap-1 md:flex-row md:items-end md:justify-between">
                <div>
                  <h3 className="text-lg font-black text-white">
                    Progress graph
                  </h3>
                  <p className="text-sm text-slate-400">
                    Default view shows progress throughout the past year.
                  </p>
                </div>
                <p className="text-sm font-bold text-lime-300">
                  Score: {player.scores[graphTime]}
                </p>
              </div>

              <div className="rounded-2xl bg-bg p-4">
                <TrendChart
                  history={graphHistory}
                  fullWidth
                  maxRank={maxRank}
                />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {timeFilterOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={
                      option.value === graphTime
                        ? "rounded-full bg-bg-light px-4 py-2 text-sm font-black text-lime-50"
                        : "rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/15"
                    }
                    onClick={() => setGraphTime(option.value)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}
