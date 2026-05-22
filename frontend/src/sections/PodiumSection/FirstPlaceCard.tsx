import type { Player } from "../../data/leaderboard";
import { PodiumCardBase } from "./PodiumCardBase";

type FirstPlaceCardProps = {
  player: Player;
};

export function FirstPlaceCard({ player }: FirstPlaceCardProps) {
  return (
    <PodiumCardBase
      player={player}
      place="1."
      placeLabel="místo"
      emoji="👑"
      isWinner
      badgeClassName="bg-gradient-to-br from-yellow-100 via-yellow-300 to-amber-500 text-slate-950 shadow-amber-400/40"
      cardClassName="border-amber-300/45 bg-gradient-to-br from-amber-300/20 via-slate-800/85 to-slate-900/95 ring-1 ring-amber-300/35 shadow-amber-400/20"
      photoClassName="bg-gradient-to-br from-yellow-100 via-yellow-300 to-amber-500 text-slate-950 ring-amber-200/70 shadow-amber-400/30"
      medalGlowClassName="bg-amber-300/30"
    />
  );
}