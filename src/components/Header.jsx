import { useEffect, useState } from "react";
import { navigation, profile } from "../data/portfolio";
import { useTheme } from "../hooks/useTheme";
import { brandMark, buttonGhost, iconButton, shell } from "../lib/styles";
import Icon from "./ui/Icon";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-(--line) bg-(--header-bg) backdrop-blur-4.5">
      <div
        className={`${shell} flex min-h-19.5 items-center justify-between`}
      >
        <a
          className="inline-flex items-center gap-3"
          href="#top"
          aria-label="Anand Kumar, back to top"
        >
          <span className={brandMark}>{profile.initials}</span>
          <span className="hidden flex-col text-[0.94rem] font-bold tracking-[0.02em] sm:flex">
            Anand kumar
            <small className="mt-0.5 font-mono text-[0.64rem] font-normal uppercase text-(--muted)">
              Engineer · Researcher
            </small>
          </span>
        </a>

        <nav
          aria-label="Primary navigation"
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute inset-x-0 top-[calc(100%+1px)] z-40 flex-col border-b border-(--line) bg-(--nav-mobile-bg) p-6 lg:static lg:z-auto lg:flex lg:flex-row lg:items-center lg:gap-5 lg:border-0 lg:bg-transparent lg:p-0 xl:gap-8`}
          id="primary-navigation"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-(--line) px-4 py-4 font-mono text-[0.80rem] text-(--nav-muted) transition hover:text-(--text) lg:border-0 lg:px-0 lg:py-0"
            >
              {item.label}
            </a>
          ))}
          <a
            className={`${buttonGhost} mt-4 justify-center lg:mt-0 lg:px-4 lg:py-3`}
            href={`mailto:${profile.email}`}
            onClick={() => setMenuOpen(false)}
          >
            Let&apos;s talk
            <Icon name="arrow" size={16} />
          </a>
        </nav>

        <div className="flex items-center gap-2.5">
          <button
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            className={iconButton}
            onClick={toggleTheme}
            type="button"
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} size={18} />
          </button>

          <button
            aria-controls="primary-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            className={`${iconButton} lg:hidden`}
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>
      </div>
    </header>
  );
}
