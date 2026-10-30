import heroVisual from "../assets/hero.png";
import { profile, socials } from "../data/portfolio";
import { buttonGhost, buttonPrimary, roundLink, shell } from "../lib/styles";
import Icon from "./ui/Icon";

const socialIcons = {
  GitHub: "github",
  LinkedIn: "linkedin",
  Email: "mail",
};

export default function Hero() {
  return (
    <section
      className={`${shell} relative grid min-h-auto w-full items-center gap-10 pb-16 pt-32 sm:pt-36 lg:min-h-svh lg:grid-cols-2 lg:gap-16 lg:pb-24 lg:pt-42 xl:gap-24`}
      id="top"
    >
      <div className="relative z-1 w-full lg:max-w-none">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-[rgba(97,231,227,0.2)] bg-[rgba(97,231,227,0.045)] px-3 py-2 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-(--status-text)">
          <span className="size-1.5 animate-status-pulse rounded-full bg-(--cyan) shadow-[0_0_12px_var(--cyan)]" />
          {profile.availability}
        </div>

        <p className="mb-3 mt-8 font-mono text-[0.75rem] uppercase tracking-[0.12em] text-(--violet-bright)">
          Backend engineer / Healthcare AI
        </p>

        <h1 className="max-w-225 text-[clamp(3rem,8vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.065em] text-(--text) xl:max-w-none">
          Intelligent systems.
          <span className="block animate-gradient-shift bg-linear-to-r from-(--violet-bright) via-(--cyan) to-(--gradient-end) bg-size-[200%_auto] bg-clip-text text-transparent">
            Real-world impact.
          </span>
        </h1>

        <p className="mt-7 max-w-180 text-base leading-[1.75] text-(--hero-summary) sm:text-[1.06rem] xl:max-w-205">
          {profile.summary}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a className={buttonPrimary} href="#projects">
            Explore my work
            <Icon name="arrow" />
          </a>
          <a
            className={buttonGhost}
            href={profile.resume}
            rel="noreferrer"
            target="_blank"
          >
            View resume
            <Icon name="download" size={18} />
          </a>
        </div>

        <div className="mt-8 flex gap-3 sm:mt-10" aria-label="Social profiles">
          {socials.map((social) => (
            <a
              aria-label={social.label}
              href={social.href}
              key={social.label}
              rel="noreferrer"
              target={social.label === "Email" ? undefined : "_blank"}
              className={roundLink}
            >
              <Icon name={socialIcons[social.label]} size={18} />
            </a>
          ))}
        </div>
      </div>

      <div
        className="relative flex min-h-80 flex-col items-center justify-center sm:min-h-105 lg:min-h-140"
        aria-hidden="true"
      >
        <div className="relative size-70 sm:size-92.5 lg:size-118.75">
          <div className="absolute inset-0 m-auto size-[70%] rounded-full bg-[radial-gradient(circle,rgba(126,78,230,0.13),transparent_68%)] blur-[5px]" />

          <div className="absolute inset-0 m-auto size-full animate-orbit rounded-full border border-[rgba(155,108,255,0.16)]">
            <span className="absolute -left-1 top-1/2 size-1.75 rounded-full bg-(--violet) shadow-[0_0_14px_var(--violet)]" />
          </div>

          <div className="absolute inset-0 m-auto size-55 animate-orbit-reverse rounded-full border border-[rgba(97,231,227,0.1)] sm:size-75 lg:size-92.5">
            <span className="absolute -left-1 top-1/2 size-1.75 rounded-full bg-(--cyan) shadow-[0_0_14px_var(--cyan)]" />
          </div>

          <div className="absolute inset-0 z-2 m-auto grid size-55 place-items-center rounded-full border border-(--line-bright) bg-linear-to-r from-transparent via-transparent to-(--hero-core-bg) bg-size-6 via-1px shadow-[0_0_80px_rgba(126,78,230,0.15),inset_0_0_50px_rgba(126,78,230,0.06)] sm:size-65 lg:size-77.5">
            <div className="absolute top-5 text-center sm:top-7">
              <span className="block font-mono text-[0.61rem] text-(--muted)">
                Building at the intersection of
              </span>
              <strong className="mt-1 block font-mono text-[0.72rem] font-medium text-(--core-label)">
                Engineering x Intelligence
              </strong>
            </div>

            <img
              alt=""
              src={heroVisual}
              className="w-27.5 animate-float opacity-80 drop-shadow-[0_10px_20px_rgba(137,78,255,0.3)] sm:w-32.5 lg:w-38.75"
            />

            <div className="absolute -right-28 top-18 hidden min-w-42 animate-float flex-col gap-1 rounded-[0.55rem] border border-(--line) bg-(--surface-glass) p-3 backdrop-blur-2.5 sm:flex lg:-right-24">
              <small className="font-mono text-[0.61rem] text-(--muted)">
                Current focus
              </small>
              <strong className="text-[0.79rem] leading-snug">
                Backend Engineer
              </strong>
              <span className="font-mono text-[0.68rem] text-(--violet-bright)">
                Healthcare AI
              </span>
            </div>

            <div className="absolute bottom-4 -left-8 hidden min-w-35 animate-float-slow flex-col gap-1 rounded-[0.55rem] border border-(--line) bg-(--surface-glass) p-3 backdrop-blur-2.5 sm:flex lg:bottom-6 lg:-left-18">
              <small className="font-mono text-[0.61rem] text-(--muted)">
                Based in
              </small>
              <strong className="text-[0.79rem]">New Delhi, IN</strong>
            </div>
          </div>
        </div>

        <div className="mt-5 flex w-70 gap-3 sm:hidden">
          <div className="min-w-0 flex-1 rounded-[0.55rem] border border-(--line) bg-(--surface-glass) p-3 backdrop-blur-2.5">
            <small className="block font-mono text-[0.61rem] text-(--muted)">
              Current focus
            </small>
            <strong className="block text-[0.79rem] leading-snug">
              Backend Engineer
            </strong>
            <span className="font-mono text-[0.68rem] text-(--violet-bright)">
              Healthcare AI
            </span>
          </div>
          <div className="min-w-0 flex-1 rounded-[0.55rem] border border-(--line) bg-(--surface-glass) p-3 backdrop-blur-2.5">
            <small className="block font-mono text-[0.61rem] text-(--muted)">
              Based in
            </small>
            <strong className="text-[0.79rem]">New Delhi, IN</strong>
          </div>
        </div>
      </div>

      <a
        className="absolute bottom-8 left-4 hidden items-center gap-3 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-(--scroll-cue) lg:flex"
        href="#about"
      >
        Scroll to discover
        <span
          aria-hidden="true"
          className="animate-bounce-soft text-(--violet-bright)"
        >
          ↓
        </span>
      </a>
    </section>
  );
}
