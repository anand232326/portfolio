import { education } from "../data/portfolio";
import {
  cardLabel,
  logoFallback,
  section,
  sectionTinted,
  shell,
} from "../lib/styles";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Education() {
  return (
    <section className={`${section} ${sectionTinted}`} id="education">
      <div className={shell}>
        <Reveal>
          <SectionHeading
            eyebrow="06 / Education"
            title="Where the foundation was built."
            copy="Formal training in engineering, mathematics, and computer science."
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2">
          {education.map((item, index) => (
            <Reveal
              className="relative overflow-hidden rounded-2xl border border-(--line-bright) bg-(--surface) p-6 sm:p-8"
              delay={index * 90}
              key={item.institution}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(97,231,227,0.08),transparent_45%)]"
              />

              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
                {item.logo ? (
                  <img
                    alt=""
                    src={item.logo}
                    className="size-20 shrink-0 rounded-full border border-(--line) bg-(--logo-card-bg) object-contain p-2 sm:size-24"
                  />
                ) : (
                  <span
                    className={`${logoFallback} size-20 rounded-full text-base sm:size-24`}
                  >
                    {item.abbreviation}
                  </span>
                )}

                <div className="flex-1">
                  <p className={cardLabel}>{item.label}</p>
                  <h3 className="mt-3 text-[1.2rem] font-semibold leading-snug sm:text-[1.45rem]">
                    {item.institution}
                  </h3>
                  <p className="mt-2 text-[0.97rem] leading-[1.65] text-(--muted)">
                    {item.degree}
                  </p>
                </div>

                <div className="shrink-0 rounded-xl border border-(--line-bright) bg-[rgba(97,231,227,0.06)] px-4 py-3 text-center sm:self-start">
                  <span className="block font-mono text-[0.61rem] uppercase tracking-widest text-(--muted)">
                    Score
                  </span>
                  <strong className="mt-1 block font-mono text-[0.95rem] text-(--cyan)">
                    {item.score}
                  </strong>
                </div>
              </div>

              <div className="relative mt-6 border-t border-(--line) pt-4 font-mono text-[0.72rem] text-(--timeline-date)">
                {item.date}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
