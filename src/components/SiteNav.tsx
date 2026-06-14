import { Link } from "@tanstack/react-router";

const items = [
  { label: "Work", to: "/", hash: "work" },
  { label: "Ethos", to: "/", hash: "ethos" },
  { label: "Contact", to: "/", hash: "contact" },
] as const;

export function SiteNav() {
  return (
    <>
      <div className="fixed top-0 left-0 z-50 px-8 py-6 md:px-12 md:py-8">
        <Link
          to="/"
          className="font-serif text-[13px] text-foreground/90 transition-opacity hover:opacity-60"
        >
          H.
        </Link>
      </div>
      <nav className="fixed top-0 right-0 z-50 px-8 py-6 md:px-12 md:py-8">
        <ul className="flex items-center gap-7 text-[11px] uppercase tracking-[0.22em] text-foreground/70">
          {items.map((it) => (
            <li key={it.label}>
              <a
                href={`#${it.hash}`}
                className="relative inline-block transition-opacity hover:opacity-60"
              >
                {it.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
