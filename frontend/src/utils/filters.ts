import type { Player, TimeFilter } from "../data/leaderboard";

export type LeaderboardFilters = {
  time: TimeFilter;
  team: string;
  region: string;
  search: string;
};

export const defaultFilters: LeaderboardFilters = {
  time: "month",
  team: "all",
  region: "all",
  search: "",
};

export function filterAndRankPlayers(
  players: Player[],
  filters: LeaderboardFilters,
) {
  const search = filters.search.trim().toLowerCase();

  return players
    .filter((player) => filters.team === "all" || player.team === filters.team)
    .filter(
      (player) => filters.region === "all" || player.region === filters.region,
    )
    .filter((player) => !search || player.name.toLowerCase().includes(search))
    .sort((a, b) => b.scores[filters.time] - a.scores[filters.time])
    .map((player, index) => ({
      ...player,
      rank: index + 1,
    }));
}
