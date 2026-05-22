import { useState } from "react";

type NavItem = {
  id: string;
  label: string;
};

type User = {
  name: string;
  avatarUrl?: string;
};

type NavbarSectionProps = {
  currentPageId?: string;
  items?: NavItem[];
  user?: User;
};

const defaultItems: NavItem[] = [
  { id: "leaderboard", label: "Leaderboard" },
  { id: "deals", label: "Deals" },
  { id: "teams", label: "Teams" },
  { id: "reports", label: "Reports" },
];

const defaultUser: User = {
  name: "Logged user",
};

export function NavbarSection({
  currentPageId = "leaderboard",
  items = defaultItems,
  user = defaultUser,
}: NavbarSectionProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="rounded-2xl bg-bg ring-1 ring-white/10">
      {/* Desktop/Large screens */}
      <div className="hidden px-7 pt-3 lg:block">
        <NavbarDesktop
          currentPageId={currentPageId}
          items={items}
          user={user}
        />
      </div>

      {/* Mobile/Tablet screens */}
      <div className="block lg:hidden">
        <NavbarMobile
          currentPageId={currentPageId}
          items={items}
          user={user}
          isMenuOpen={isMenuOpen}
          onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>
    </nav>
  );
}

function NavbarDesktop({
  currentPageId,
  items,
  user,
}: {
  currentPageId: string;
  items: NavItem[];
  user: User;
}) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="flex flex-wrap items-end gap-1">
        {items.map((item) => {
          const isCurrent = item.id === currentPageId;

          return (
            <button
              key={item.id}
              type="button"
              className={
                isCurrent
                  ? "relative -mb-px rounded-t-3xl bg-bg-light px-6 py-4 text-sm font-black text-lime-50 before:absolute before:bottom-0 before:-left-6 before:h-6 before:w-6 before:rounded-br-2xl before:shadow-[8px_8px_0_0_#365314] after:absolute after:bottom-0 after:-right-6 after:h-6 after:w-6 after:rounded-bl-2xl after:shadow-[-8px_8px_0_0_#365314]"
                  : "rounded-2xl px-5 py-3 text-sm font-bold text-white transition hover:bg-white/5"
              }
              aria-current={isCurrent ? "page" : undefined}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="flex items-center justify-end gap-3 pb-3">
        <span className="text-sm font-semibold text-slate-300">
          {user.name}
        </span>
        <UserAvatar user={user} />
      </div>
    </div>
  );
}

function NavbarMobile({
  currentPageId,
  items,
  user,
  isMenuOpen,
  onMenuToggle,
}: {
  currentPageId: string;
  items: NavItem[];
  user: User;
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}) {
  return (
    <div className="flex flex-col">
      {/* Header with user profile and menu icon */}
      <div className="flex items-center justify-between px-5 py-4">
        <div className="flex items-center gap-2">
          <UserAvatar user={user} />
          <span className="text-sm font-semibold text-slate-300">
            {user.name}
          </span>
        </div>

        {/* Hamburger menu icon */}
        <button
          type="button"
          onClick={onMenuToggle}
          className="flex h-10 w-10 items-center justify-center rounded-lg transition hover:bg-white/5"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 text-white"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu - shown when open */}
      {isMenuOpen && (
        <div className="border-t border-white/10 px-3 py-3">
          <div className="flex flex-col gap-2">
            {items.map((item) => {
              const isCurrent = item.id === currentPageId;

              return (
                <button
                  key={item.id}
                  type="button"
                  className={
                    isCurrent
                      ? "rounded-lg bg-bg-light px-4 py-3 text-left text-sm font-black text-lime-50 transition"
                      : "rounded-lg px-4 py-3 text-left text-sm font-bold text-white transition hover:bg-white/5"
                  }
                  aria-current={isCurrent ? "page" : undefined}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function UserAvatar({ user }: { user: User }) {
  return (
    <div
      className="grid h-11 w-11 place-items-center overflow-hidden rounded-full bg-slate-800 ring-2 ring-white/10"
      aria-label={user.name}
      title={user.name}
    >
      {user.avatarUrl ? (
        <img
          src={user.avatarUrl}
          alt=""
          className="h-full w-full object-cover"
        />
      ) : (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 text-slate-300"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M20 21a8 8 0 0 0-16 0" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      )}
    </div>
  );
}
