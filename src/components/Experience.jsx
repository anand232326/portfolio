import { experience } from "../data/portfolio";
import {
  cardSurface,
  certificateLink,
  logoFallback,
  section,
  sectionTinted,
  shell,
  tag,
  tagList,
} from "../lib/styles";
import Icon from "./ui/Icon";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

function Timeline({ items }) {
  return (
    <div className="timeline-track relative pl-8 before:absolute before:bottom-0 before:left-3 before:top-0 before:w-px before:bg-[linear-gradient(var(--violet),rgba(155,108,255,0.06))] sm:pl-0">
      {items.map((item, index) => (
        <Reveal
          className="relative grid gap-3 pb-10 sm:grid-cols-[35px_190px_1fr] sm:gap-6 sm:pb-[3.8rem] last:pb-0"
          delay={index * 90}
          key={`${item.role}-${item.date}`}
        >
          <div className="relative z-2 hidden pt-1.5 sm:block">
            <span className="block size-6.25 rounded-full border border-(--line-bright) bg-(--surface) after:mx-auto after:mt-2.25 after:block after:size-1.25 after:animate-dot-pulse after:rounded-full after:bg-(--violet-bright) after:shadow-[0_0_10px_var(--violet)] after:content-['']" />
          </div>

          <p className="font-mono text-[0.75rem] text-(--timeline-date) sm:mt-2.5">
            {item.date}
          </p>

          <div className={`${cardSurface} p-5 hover:translate-x-1 sm:p-7`}>
            <div className="flex items-center gap-4">
              {item.logo ? (
                <img
                  alt=""
                  src={item.logo}
                  className="size-12 shrink-0 rounded-[0.55rem] border border-(--line) bg-(--logo-bg) object-contain"
                />
              ) : (
                <span className={logoFallback}>
                  {item.fallback ?? item.company.slice(0, 3)}
                </span>
              )}
              <div>
                <h3 className="text-[1.05rem] font-semibold sm:text-[1.15rem]">
                  {item.role}
                </h3>
                {item.url ? (
                  <a
                    href={item.url}
                    rel="noreferrer"
                    target="_blank"
                    className="inline-flex items-center gap-1.5 font-mono text-[0.75rem] text-(--violet-bright)"
                  >
                    {item.company}
                    <Icon name="external" size={14} />
                  </a>
                ) : (
                  <span className="font-mono text-[0.75rem] text-(--violet-bright)">
                    {item.company}
                  </span>
                )}
              </div>
            </div>

            <p className="my-5 max-w-190 text-[0.9rem] leading-[1.7] text-(--muted) xl:max-w-none">
              {item.description}
            </p>

            {item.highlights?.length > 0 && (
              <ul className="mb-5 max-w-190 list-disc space-y-2 pl-5 text-[0.92rem] leading-[1.65] text-(--muted) marker:text-(--violet) xl:max-w-none">
                {item.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className={tagList}>
                {item.tags.map((tagText) => (
                  <span key={tagText} className={tag}>
                    {tagText}
                  </span>
                ))}
              </div>

              {item.link?.trim() ? (
                <a
                  className={certificateLink}
                  href={item.link}
                  rel="noreferrer"
                  target="_blank"
                >
                  View certificate
                  <Icon name="certificate" size={14} />
                </a>
              ) : null}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <section className={`${section} ${sectionTinted}`} id="experience">
      <div className={shell}>
        <Reveal>
          <SectionHeading
            copy="Building reliable products in healthcare, research, and applied machine learning."
            eyebrow="02 / Experience"
            title="From prototypes to production."
          />
        </Reveal>

        <Timeline items={experience} />
      </div>
    </section>
  );
}
