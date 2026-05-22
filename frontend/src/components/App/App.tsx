import { rest, topThree } from "../../data/leaderboard";
import { NavbarSection } from "../../sections/NavbarSection/NavbarSection";
import { PodiumSection } from "../../sections/PodiumSection/PodiumSection";
import { RankingTableSection } from "../../sections/RankingTableSection/RankingTableSection";
import { TitleSubtitleSection } from "../../sections/TitleSubtitleSection/TitleSubtitleSection";

export default function App() {
  return (
    <main className="min-h-screen bg-bg-dark px-4 py-6 text-slate-100 md:px-8 md:py-10">
      <section className="mx-auto max-w-7xl">
        <NavbarSection />
        <TitleSubtitleSection totalPlayers={topThree.length + rest.length} />
        <PodiumSection players={topThree} />
        <RankingTableSection players={rest} />
      </section>
    </main>
  );
}
