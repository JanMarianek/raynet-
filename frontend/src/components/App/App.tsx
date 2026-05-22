import { useMemo, useState } from "react";
import { players } from "../../data/leaderboard";
import { FiltersSection } from "../../sections/FiltersSection/FiltersSection";
import { NavbarSection } from "../../sections/NavbarSection/NavbarSection";
import { PodiumSection } from "../../sections/PodiumSection/PodiumSection";
import { RankingTableSection } from "../../sections/RankingTableSection/RankingTableSection";
import { TitleSubtitleSection } from "../../sections/TitleSubtitleSection/TitleSubtitleSection";
import {
  defaultFilters,
  filterAndRankPlayers,
  type LeaderboardFilters,
} from "../../utils/filters";

export default function App() {
  const [filters, setFilters] = useState<LeaderboardFilters>(defaultFilters);

  const rankedPlayers = useMemo(
    () => filterAndRankPlayers(players, filters),
    [filters],
  );
  const topThree = rankedPlayers.slice(0, 3);
  const rest = rankedPlayers.slice(3);

  return (
    <main className="min-h-screen bg-bg-dark px-4 py-6 text-slate-100 md:px-8 md:py-10">
      <section className="mx-auto max-w-7xl">
        <NavbarSection />
        <TitleSubtitleSection totalPlayers={rankedPlayers.length} />
        <FiltersSection
          filters={filters}
          resultCount={rankedPlayers.length}
          onFiltersChange={setFilters}
        />
        <PodiumSection players={topThree} />
        <RankingTableSection players={rest} />
      </section>
    </main>
  );
}
