import { achievements } from "../data/portfolio";
import {
  cardLabel,
  certificateLink,
  logoFallback,
  section,
  shell,
} from "../lib/styles";
import Icon from "./ui/Icon";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Achievements() {
  return (
    <section className={`${section} ${shell}`} id="achievements">
      <Reveal>
        <SectionHeading
          eyebrow="07 / Achievements"
          title="Recognition along the way."
          copy="National qualifications, academic distinction, and leadership beyond the classroom."
        />
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {achievements.map((achievement, index) => (
          <Reveal
            className="group flex flex-col items-center rounded-2xl border border-(--line) bg-(--surface-tint) p-6 text-center transition duration-200 hover:-translate-y-1 hover:border-(--violet) hover:bg-[rgba(155,108,255,0.04)] sm:p-7"
            delay={index * 70}
            key={achievement.title}
          >
            <span className="font-mono text-[0.68rem] text-(--skill-number)">
              {String(index + 1).padStart(2, "0")}
            </span>

            {achievement.logo ? (
              <img
                alt=""
                src={achievement.logo}
                className="mt-5 size-16 rounded-2xl border border-(--line) bg-(--logo-card-bg) object-contain p-2 transition duration-200 group-hover:scale-105 sm:size-18"
              />
            ) : (
              <span
                className={`${logoFallback} mt-5 size-16 rounded-2xl text-lg sm:size-18`}
              >
                ★
              </span>
            )}

            <p className={`${cardLabel} mt-5`}>{achievement.label}</p>
            <h3 className="mt-2 text-[1rem] font-semibold leading-snug sm:text-[1.08rem]">
              {achievement.title}
            </h3>
            <p className="mt-2 text-[0.86rem] leading-[1.55] text-(--muted)">
              {achievement.description}
            </p>

            {achievement.link?.trim() ? (
              <div className="mt-5 flex flex-1 items-end">
                <a
                  className={certificateLink}
                  href={achievement.link}
                  rel="noreferrer"
                  target="_blank"
                >
                  {achievement.linkLabel ?? "View certificate"}
                  <Icon name={achievement.linkIcon ?? "certificate"} size={14} />
                </a>
              </div>
            ) : null}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
