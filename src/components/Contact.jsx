import { profile, socials } from "../data/portfolio";
import { eyebrow, section, shell } from "../lib/styles";
import Icon from "./ui/Icon";
import Reveal from "./ui/Reveal";

export default function Contact() {
  return (
    <section className={`${section} pb-20 sm:pb-24`} id="contact">
      <div className={shell}>
        <Reveal className="relative overflow-hidden rounded-2xl border border-(--line-bright) bg-[radial-gradient(circle_at_85%_40%,rgba(155,108,255,0.15),transparent_30%),var(--surface)] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.25)] sm:p-12 lg:p-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-size-[38px_38px] opacity-30 mask-[linear-gradient(90deg,transparent_30%,#000)]"
          />

          <div className="relative z-2">
            <p className={eyebrow}>
              <span aria-hidden="true" className="text-base text-(--cyan)">
                ⌁
              </span>
              09 / Contact
            </p>

            <h2 className="max-w-180 text-[clamp(2.5rem,5vw,4.8rem)] font-medium leading-[1.03] tracking-[-0.055em]">
              Have a hard problem?
              <span className="block text-(--violet-bright)">
                Let&apos;s build the answer.
              </span>
            </h2>

            <p className="mt-6 max-w-155 leading-[1.7] text-(--muted)">
              I&apos;m always interested in thoughtful products, applied AI, and
              conversations that can turn into meaningful work.
            </p>

            <a
              className="group mt-8 inline-flex items-center gap-4 border-b border-(--violet) pb-1.5 text-[clamp(1rem,2.4vw,1.5rem)] font-semibold"
              href={`mailto:${profile.email}`}
            >
              {profile.email}
              <Icon
                className="transition duration-200 group-hover:translate-x-1"
                name="arrow"
              />
            </a>

            <div className="mt-12 flex flex-col gap-6 border-t border-(--line) pt-6 font-mono text-[0.73rem] text-(--muted) sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
              <span className="inline-flex items-center gap-2">
                <Icon name="location" size={17} />
                {profile.location}
              </span>
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                {socials.slice(0, 2).map((social) => (
                  <a
                    href={social.href}
                    key={social.label}
                    rel="noreferrer"
                    target="_blank"
                    className="inline-flex items-center gap-2 hover:text-(--violet-bright)"
                  >
                    {social.label}
                    <Icon name="external" size={13} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
