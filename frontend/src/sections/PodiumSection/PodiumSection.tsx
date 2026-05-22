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

  if (!firstPlace || !secondPlace || !thirdPlace) {
    return null;
  }

  return (
    <>
      <section className="mb-8 grid gap-5 lg:hidden">
        <FirstPlaceCard player={firstPlace} />
        <SecondPlaceCard player={secondPlace} />
        <ThirdPlaceCard player={thirdPlace} />
      </section>

      <section className="mb-8 hidden gap-5 lg:grid lg:grid-cols-3 lg:items-end">
        <SecondPlaceCard player={secondPlace} />
        <FirstPlaceCard player={firstPlace} />
        <ThirdPlaceCard player={thirdPlace} />
      </section>
    </>
  );
}