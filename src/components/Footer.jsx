import { profile } from "../data/portfolio";
import { brandMark, shell } from "../lib/styles";

export default function Footer() {
  return (
    <footer className="border-t border-(--line)">
      <div
        className={`${shell} flex min-h-27.5 flex-col items-start justify-center gap-3 py-8 font-mono text-[0.66rem] text-(--footer-text) sm:flex-row sm:items-center sm:justify-between sm:py-0`}
      >
        <p className="flex items-center">
          <span
            className={`${brandMark} mr-2.5 inline-grid size-7.5 rounded-lg text-[0.64rem]`}
          >
            {profile.initials}
          </span>
          Designed &amp; built by {profile.name}
        </p>
        <p>© {new Date().getFullYear()}</p>
        <a className="transition hover:text-(--text)" href="#top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
