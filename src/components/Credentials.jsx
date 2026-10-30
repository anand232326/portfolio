import { volunteering  } from "../data/portfolio";
import {
  cardLabel,
  cardSurface,
  eyebrow,
  section,
  shell,
} from "../lib/styles";
import Reveal from "./ui/Reveal";

export default function Credentials() {
  if (volunteering.length === 0) return null;

  return (
    <section className={`${section} pb-16 sm:pb-20 lg:pb-32`} id="credentials">
      <div className={shell}>
        <Reveal>
          <p className={eyebrow}>
            <span aria-hidden="true" className="text-base text-(--cyan)">
              ⌁
            </span>
            09 / More
          </p>
          <h2 className="mb-10 max-w-180 text-[clamp(2rem,4vw,3.2rem)] font-medium leading-[1.05] tracking-[-0.045em] sm:mb-12">
            Mentoring & community work.
          </h2>
        </Reveal>

        <Reveal className={`${cardSurface} p-6 sm:p-8`}>
          <p className={cardLabel}>Volunteering</p>
          <ul className="mt-5 flex flex-col gap-4">
            {volunteering.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[0.92rem] leading-[1.6] text-(--muted) before:mt-2 before:size-1 before:shrink-0 before:rounded-full before:bg-(--violet) before:content-['']"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
