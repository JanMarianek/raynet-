import { FilterSelect } from "../../components/FilterSelect/FilterSelect";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import {
  regionOptions,
  teamOptions,
  timeFilterOptions,
  type TimeFilter,
} from "../../data/leaderboard";
import type { LeaderboardFilters } from "../../utils/filters";

type FiltersSectionProps = {
  filters: LeaderboardFilters;
  resultCount: number;
  onFiltersChange: (filters: LeaderboardFilters) => void;
};

export function FiltersSection({
  filters,
  resultCount,
  onFiltersChange,
}: FiltersSectionProps) {
  const updateFilter = (nextFilters: Partial<LeaderboardFilters>) => {
    onFiltersChange({ ...filters, ...nextFilters });
  };

  return (
    <section className="mb-8 rounded-[2rem] bg-bg p-5 ring-1 ring-white/10 md:p-6">
      <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-black text-white">Filters</h2>
          <p className="text-sm text-slate-400">
            Ranking recalculates for the selected time period, team, region, and
            name search.
          </p>
        </div>
        <span className="w-fit rounded-full bg-bg-light px-4 py-2 text-sm font-black text-lime-50">
          {resultCount} results
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <SearchBar
          value={filters.search}
          onChange={(search) => updateFilter({ search })}
        />
        <FilterSelect
          label="Time"
          value={filters.time}
          options={timeFilterOptions}
          onChange={(time) => updateFilter({ time: time as TimeFilter })}
        />
        <FilterSelect
          label="Team"
          value={filters.team}
          options={[
            { value: "all", label: "All teams" },
            ...teamOptions.map((team) => ({ value: team, label: team })),
          ]}
          onChange={(team) => updateFilter({ team })}
        />
        <FilterSelect
          label="Region"
          value={filters.region}
          options={[
            { value: "all", label: "All regions" },
            ...regionOptions.map((region) => ({ value: region, label: region })),
          ]}
          onChange={(region) => updateFilter({ region })}
        />
      </div>
    </section>
  );
}
