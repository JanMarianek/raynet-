import type { Player } from "../../data/leaderboard";
import { PodiumCardBase } from "./PodiumCardBase";

type ThirdPlaceCardProps = {
  player: Player;
};

export function ThirdPlaceCard({ player }: ThirdPlaceCardProps) {
  return (
    <PodiumCardBase
      player={player}
      place="3."
      placeLabel="místo"
      emoji="🥉"
      badgeClassName="bg-gradient-to-br from-orange-300 via-orange-600 to-stone-800 text-slate-950 shadow-orange-700/25"
      cardClassName="border-orange-600/45 bg-gradient-to-br from-orange-700/22 via-slate-800/80 to-slate-900/95 ring-1 ring-orange-700/35 shadow-orange-900/20"
      photoClassName="bg-gradient-to-br from-orange-300 via-orange-600 to-stone-800 text-slate-950 ring-orange-700/60 shadow-orange-900/25"
      medalGlowClassName="bg-orange-700/25"
    />
  );
}