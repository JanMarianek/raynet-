type InfoBoxProps = {
  label: string;
  value: string;
};

export function InfoBox({ label, value }: InfoBoxProps) {
  return (
    <div className="rounded-2xl bg-bg-dark/60 p-4 ring-1 ring-white/5">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-2 text-xl font-black text-white">{value}</p>
    </div>
  );
}
