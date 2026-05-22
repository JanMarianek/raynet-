type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export function SearchBar({
  value,
  onChange,
  placeholder = "Search by name",
}: SearchBarProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
        Search
      </span>
      <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-bg-dark/70 px-4 py-3 text-white">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 shrink-0 text-slate-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className="min-w-0 flex-1 border-0 bg-transparent p-0 text-sm text-white placeholder:text-slate-500 focus:ring-0"
          type="search"
        />
      </div>
    </label>
  );
}
