import { businessCases } from "../data/businessCases";
import type { Player, TimeFilter } from "../data/leaderboard";

type BusinessCasePoint = {
  date: Date;
  owner: string;
  amount: number;
};

const dayMs = 24 * 60 * 60 * 1000;

const periodDays: Record<TimeFilter, number> = {
  day: 1,
  month: 31,
  year: 365,
  "2years": 365 * 2,
  "5years": 365 * 5,
};

const points: BusinessCasePoint[] = businessCases
  .map((businessCase) => ({
    date: parseBusinessDate(
      businessCase["rowInfo.createdAt"] || businessCase.validFrom,
    ),
    owner: businessCase.owner.fullName,
    amount: businessCase.totalAmountInDefaultCurrency,
  }))
  .filter((point) => !Number.isNaN(point.date.getTime()))
  .sort((a, b) => a.date.getTime() - b.date.getTime());

const owners = [...new Set(points.map((point) => point.owner))];
const latestDate = points[points.length - 1]?.date ?? new Date();

export function getBusinessCaseRankHistory(player: Player, time: TimeFilter) {
  const owner = resolveOwnerForPlayer(player);
  const startDate = new Date(latestDate.getTime() - periodDays[time] * dayMs);
  const periodPoints = points.filter((point) => point.date >= startDate);
  const totals = new Map<string, number>();
  const history: number[] = [];

  for (const point of periodPoints) {
    totals.set(point.owner, (totals.get(point.owner) ?? 0) + point.amount);
    history.push(rankOwner(owner, totals));
  }

  return history.length > 0 ? history : [owners.length];
}

export function getBusinessCaseOwnerCount() {
  return owners.length;
}

function resolveOwnerForPlayer(player: Player) {
  if (owners.includes(player.name)) {
    return player.name;
  }

  return owners[(player.rank - 1) % owners.length] ?? owners[0] ?? player.name;
}

function rankOwner(owner: string, totals: Map<string, number>) {
  const ownerTotal = totals.get(owner) ?? 0;
  const higherTotals = [...totals.values()].filter((total) => total > ownerTotal);

  return Math.min(owners.length, higherTotals.length + 1);
}

function parseBusinessDate(value: string) {
  return new Date(value.replace(" ", "T"));
}
