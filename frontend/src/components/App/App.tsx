import { rest, topThree } from "../../data/leaderboard";
import { LeaderboardHeader } from "../../sections/LeaderboardHeader/LeaderboardHeader";
import { PodiumSection } from "../../sections/PodiumSection/PodiumSection";
import { RankingTableSection } from "../../sections/RankingTableSection/RankingTableSection";

export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-6 text-slate-100 md:px-8 md:py-10">
      <section className="mx-auto max-w-7xl">
        <LeaderboardHeader totalPlayers={topThree.length + rest.length} />
        <PodiumSection players={topThree} />
        <RankingTableSection players={rest} />
      </section>
    </main>
  );
}
