import type { Player } from "../../data/leaderboard";
import { PodiumCardBase } from "./PodiumCardBase";

type SecondPlaceCardProps = {
  player: Player;
};

export function SecondPlaceCard({ player }: SecondPlaceCardProps) {
  return (
    <PodiumCardBase
      player={player}
      place="2."
      placeLabel="místo"
      emoji="🥈"
      badgeClassName="bg-gradient-to-br from-white via-slate-200 to-slate-500 text-slate-950 shadow-white/20"
      cardClassName="border-slate-200/35 bg-gradient-to-br from-slate-200/18 via-slate-800/80 to-slate-900/95 ring-1 ring-white/25 shadow-white/10"
      photoClassName="bg-gradient-to-br from-white via-slate-200 to-slate-500 text-slate-950 ring-slate-200/70 shadow-white/15"
      medalGlowClassName="bg-slate-100/22"
    />
  );
}