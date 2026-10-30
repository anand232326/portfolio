import { skillGroups } from "../data/portfolio";
import { cardSurface, section, shell } from "../lib/styles";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import SkillLogo from "./ui/SkillLogo";

export default function About() {
  return (
    <section className={`${section} ${shell}`} id="about">
      <Reveal>
        <SectionHeading
          copy="I turn research ideas into resilient products—from a clear first interaction to the systems running behind it."
          eyebrow="01 / About"
          title="Engineering with curiosity and intent."
        />
      </Reveal>

      <div className="grid gap-10 xl:grid-cols-[0.9fr_1.1fr] xl:gap-24">
        <Reveal className="border-l border-(--line-bright) pl-6">
          <p className="mb-6 text-[1.15rem] leading-[1.55] text-(--about-emphasis) sm:text-[1.3rem]">
            My work sits between{" "}
            <strong className="font-semibold text-(--text)">
              software engineering
            </strong>
            ,{" "}
            <strong className="font-semibold text-(--text)">
              machine intelligence
            </strong>
            , and human needs.
          </p>
          <p className="text-base leading-[1.75] text-(--about-muted)">
            I care about architecture that scales, interfaces that feel obvious,
            and applied AI that earns its place in the product.
          </p>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => (
            <Reveal
              className={`${cardSurface} p-6 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(155,108,255,0.08)]`}
              delay={index * 90}
              key={group.title}
            >
              <span className="font-mono text-[0.68rem] text-(--skill-number)">
                0{index + 1}
              </span>
              <h3 className="mb-6 mt-8 text-[1.15rem] font-semibold leading-[1.45]">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-1.5">
                {group.skills.map((skill, skillIndex) => (
                  <li
                    key={skill}
                    className="skill-item group flex items-center gap-2.5 rounded-md px-1.5 py-1.5 font-mono text-[0.75rem] text-(--muted) transition duration-200 hover:bg-(--surface-hover) hover:text-(--text)"
                    style={{ "--skill-delay": `${skillIndex * 55}ms` }}
                  >
                    <SkillLogo name={skill} />
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
