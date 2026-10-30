import { certifications } from "../data/portfolio";
import { cardLabel, cardSurface, section, sectionTinted, shell } from "../lib/styles";
import Icon from "./ui/Icon";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Certifications() {
  return (
    <section className={`${section} ${sectionTinted}`} id="certifications">
      <div className={shell}>
        <Reveal>
          <SectionHeading
            eyebrow="08 / Certifications"
            title="Courses that sharpened the craft."
            copy="Focused coursework in programming, data analysis, and software fundamentals."
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert, index) => (
            <Reveal
              className={`${cardSurface} p-6 hover:-translate-y-1 sm:p-7`}
              delay={index * 80}
              key={cert.title}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-[0.68rem] text-(--skill-number)">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="grid size-9 place-items-center rounded-lg border border-(--line) bg-[rgba(155,108,255,0.06)] text-(--violet-bright)">
                  <Icon name="certificate" size={16} />
                </span>
              </div>

              <p className={`${cardLabel} mt-6`}>{cert.issuer}</p>
              <h3 className="mt-2 text-[1.02rem] font-semibold leading-snug sm:text-[1.08rem]">
                {cert.title}
              </h3>
              <p className="mt-4 font-mono text-[0.72rem] text-(--timeline-date)">
                {cert.date}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
