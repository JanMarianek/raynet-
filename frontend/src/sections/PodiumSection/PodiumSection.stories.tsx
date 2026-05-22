import type { Player } from "../../data/leaderboard";
import { FirstPlaceCard } from "./FirstPlaceCard";
import { SecondPlaceCard } from "./SecondPlaceCard";
import { ThirdPlaceCard } from "./ThirdPlaceCard";

type PodiumSectionProps = {
  players: Player[];
};

export function PodiumSection({ players }: PodiumSectionProps) {
  const firstPlace = players.find((player) => player.rank === 1);
  const secondPlace = players.find((player) => player.rank === 2);
  const thirdPlace = players.find((player) => player.rank === 3);

  return (
    <section className="mb-8 grid gap-5 lg:grid-cols-3 lg:items-end">
      {firstPlace && (
        <div className="order-1 lg:order-2">
          <FirstPlaceCard player={firstPlace} />
        </div>
      )}

      {secondPlace && (
        <div className="order-2 lg:order-1">
          <SecondPlaceCard player={secondPlace} />
        </div>
      )}

      {thirdPlace && (
        <div className="order-3 lg:order-3">
          <ThirdPlaceCard player={thirdPlace} />
        </div>
      )}
    </section>
  );
}