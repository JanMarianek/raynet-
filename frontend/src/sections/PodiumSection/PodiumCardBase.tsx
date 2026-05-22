import { TrendChart } from "../../components/TrendChart/TrendChart";
import type { Player } from "../../data/leaderboard";
import {
  formatCurrency,
  trendColor,
  trendText,
} from "../../utils/leaderboard";

type PodiumCardBaseProps = {
  player: Player;
  place: string;
  placeLabel: string;
  emoji: string;
  isWinner?: boolean;
  badgeClassName: string;
  cardClassName: string;
  photoClassName: string;
  medalGlowClassName: string;
};

export function PodiumCardBase({
  player,
  place,
  placeLabel,
  emoji,
  isWinner = false,
  badgeClassName,
  cardClassName,
  photoClassName,
  medalGlowClassName,
}: PodiumCardBaseProps) {
  return (
    <article
      className={`relative overflow-hidden rounded-[2rem] border p-6 shadow-2xl transition duration-300 hover:-translate-y-1 ${
        isWinner ? "lg:-translate-y-6" : ""
      } ${cardClassName}`}
    >
      <div
        className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl ${medalGlowClassName}`}
      />
      <div className="pointer-events-none absolute -bottom-24 left-8 h-44 w-44 rounded-full bg-white/10 blur-3xl" />

      <div className="relative flex min-h-[460px] flex-col justify-between gap-6">
        <div className="flex items-start justify-between gap-5">
          <span
            className={`inline-flex min-w-[76px] flex-col items-center justify-center rounded-2xl px-4 py-3 text-center font-black leading-none shadow-lg ${badgeClassName}`}
          >
            <span className="text-2xl">{place}</span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.16em]">
              {placeLabel}
            </span>
          </span>

          <div
            className={`relative flex h-32 w-32 shrink-0 flex-col items-center justify-center rounded-[2rem] text-center shadow-xl ring-1 ${photoClassName}`}
          >
            <span className="absolute -top-6 text-3xl drop-shadow-lg">
              {emoji}
            </span>

            <span className="text-xl font-black uppercase tracking-[0.12em]">
              Fotka
            </span>
            <span className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] opacity-70">
              placeholder
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-black leading-tight text-white">
            {player.name}
          </h2>
          <p className="mt-1 text-base text-slate-300">{player.team}</p>
        </div>

        <div className="rounded-3xl bg-slate-950/55 p-4 ring-1 ring-white/15">
          <div className="mb-3 flex items-center justify-between gap-4">
            <p className="text-sm font-semibold text-slate-200">
              Vývoj pořadí
            </p>
            <p className="text-xs font-semibold text-slate-400">
              posledních 6 období
            </p>
          </div>

          <TrendChart history={player.history} large />

          <div className="mt-3 flex items-center justify-between gap-3 text-sm">
            <span className="text-slate-300">
              Aktuálně{" "}
              <span className="font-bold text-white">#{player.rank}</span>
            </span>

            <span className={`font-bold ${trendColor(player.history)}`}>
              {trendText(player.history)}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <MetricBox label="Obchody" value={String(player.deals)} />
          <MetricBox label="Revenue" value={formatCurrency(player.revenue)} />
        </div>
      </div>
    </article>
  );
}

type MetricBoxProps = {
  label: string;
  value: string;
};

function MetricBox({ label, value }: MetricBoxProps) {
  return (
    <div className="min-w-0 rounded-2xl bg-slate-950/60 p-4 ring-1 ring-white/10">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-2 truncate text-[clamp(1rem,1.35vw,1.35rem)] font-black leading-tight text-white">
        {value}
      </p>
    </div>
  );
}