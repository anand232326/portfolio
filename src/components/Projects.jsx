import { projects } from "../data/portfolio";
import {
  cardSurface,
  roundLink,
  section,
  shell,
  tag,
  tagList,
} from "../lib/styles";
import Icon from "./ui/Icon";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Projects() {
  return (
    <section className={`${section} ${shell}`} id="projects">
      <Reveal>
        <SectionHeading
          copy="Selected digital products shaped around practical needs and clear outcomes."
          eyebrow="04 / Selected work"
          title="Useful things, built well."
        />
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 xl:gap-5">
        {projects.map((project, index) => (
          <Reveal
            className={`group ${cardSurface} overflow-hidden bg-(--surface) hover:-translate-y-1.5 hover:shadow-[0_22px_50px_rgba(155,108,255,0.1)]`}
            delay={index * 100}
            key={project.name}
          >
            <div className="relative grid min-h-36 place-items-center overflow-hidden border-b border-(--line) bg-linear-to-r from-(rgba(255,255,255,0.025)_1px,transparent_1px) via-(linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px),var(--project-visual-bg))] bg-size-6.5 after:absolute after:h-px after:w-[70%] after:rotate-[-18deg] after:bg-linear-to-r from-transparent via-(rgba(155,108,255,0.5),transparent) after:shadow-[0_0_20px_var(--violet)] after:content-[''] sm:min-h-40">
              <span className="absolute left-4 top-4 font-mono text-[0.68rem] text-(--skill-number)">
                0{index + 1}
              </span>
              <div className="absolute size-28 rounded-full bg-[rgba(155,108,255,0.13)] blur-12.5" />
              <img
                alt={`${project.name} logo`}
                src={project.logo}
                className="relative z-2 size-16 rounded-full border border-[rgba(255,255,255,0.1)] bg-(--project-logo-bg) object-contain p-2 shadow-[0_12px_36px_rgba(0,0,0,0.35)] transition duration-500 group-hover:scale-110 sm:size-18"
              />
            </div>

            <div className="p-4 sm:p-5">
              <p className="mb-2 font-mono text-[0.64rem] uppercase tracking-[0.12em] text-(--violet-bright)">
                {project.eyebrow}
              </p>
              <h3 className="text-[1.12rem] font-semibold tracking-[-0.03em] sm:text-[1.22rem]">
                {project.name}
              </h3>
              <p className="mb-5 mt-3 text-[0.88rem] leading-[1.65] text-(--muted)">
                {project.description}
              </p>
              <div className="flex items-center justify-between gap-3">
                <div className={tagList}>
                  {project.tags.map((tagText) => (
                    <span key={tagText} className={tag}>
                      {tagText}
                    </span>
                  ))}
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  {project.github_url ? (
                    <a
                      aria-label={`View ${project.name} source code`}
                      className={`${roundLink} size-9`}
                      href={project.github_url}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <Icon name="github" size={16} />
                    </a>
                  ) : null}
                  {project.url ? (
                    <a
                      aria-label={`Visit ${project.name}`}
                      className={`${roundLink} size-9`}
                      href={project.url}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <Icon name="external" size={16} />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
