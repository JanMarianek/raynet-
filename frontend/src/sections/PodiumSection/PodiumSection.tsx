import { InfoBox } from "../../components/InfoBox/InfoBox";
import { TrendChart } from "../../components/TrendChart/TrendChart";
import type { Player } from "../../data/leaderboard";
import {
  formatCurrency,
  getInitials,
  trendColor,
  trendText,
} from "../../utils/leaderboard";

type PodiumSectionProps = {
  players: Player[];
};

const podiumStyles = [
  {
    place: "2.",
    label: "Druhé místo",
    badge: "bg-slate-100 text-slate-950",
    ring: "ring-white/15",
    glow: "shadow-white/10",
  },
  {
    place: "1.",
    label: "Vítěz",
    badge: "bg-lime-400 text-slate-950",
    ring: "ring-lime-400/30",
    glow: "shadow-lime-400/20",
  },
  {
    place: "3.",
    label: "Třetí místo",
    badge: "bg-amber-300 text-slate-950",
    ring: "ring-amber-300/30",
    glow: "shadow-amber-300/10",
  },
];

export function PodiumSection({ players }: PodiumSectionProps) {
  return (
    <section className="mb-8 grid gap-4 md:grid-cols-3 md:items-end">
      {players.map((player, index) => {
        const style = podiumStyles[index];
        const isWinner = index === 1;

        return (
          <article
            key={player.rank}
            className={`relative rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl ring-1 ${style.ring} ${style.glow} ${
              isWinner ? "md:-translate-y-5" : ""
            }`}
          >
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-lime-400/8 blur-3xl" />

            <div className="relative flex flex-col gap-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span
                    className={`inline-flex rounded-2xl px-4 py-2 text-2xl font-black ${style.badge}`}
                  >
                    {style.place}
                  </span>
                  <p className="mt-4 text-sm font-bold uppercase tracking-[0.25em] text-slate-500">
                    {style.label}
                  </p>
                </div>

                <div className="grid h-24 w-24 place-items-center rounded-[2rem] bg-slate-900 text-3xl font-black ring-1 ring-white/10">
                  {getInitials(player.name)}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-black leading-tight">
                  {player.name}
                </h2>
                <p className="mt-1 text-base text-slate-400">{player.team}</p>
              </div>

              <div className="rounded-3xl bg-bg-dark/65 p-4 ring-1 ring-white/5">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm text-slate-400">Vývoj pořadí</p>
                  <p className="text-xs font-semibold text-slate-500">
                    posledních 6 období
                  </p>
                </div>

                <TrendChart history={player.history} large />

                <div className="mt-3 flex items-center justify-between text-sm">
                  <span className="text-slate-400">
                    Aktuálně{" "}
                    <span className="font-bold text-white">#{player.rank}</span>
                  </span>
                  <span className={trendColor(player.history)}>
                    {trendText(player.history)}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <InfoBox label="Obchody" value={String(player.deals)} />
                <InfoBox label="Revenue" value={formatCurrency(player.revenue)} />
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
