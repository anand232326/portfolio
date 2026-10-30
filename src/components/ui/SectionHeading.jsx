import { eyebrow } from "../../lib/styles";

export default function SectionHeading({ eyebrow: eyebrowText, title, copy }) {
  return (
    <div className="mb-12 lg:mb-18">
      <p className={eyebrow}>
        <span aria-hidden="true" className="text-base text-(--cyan)">
          ⌁
        </span>
        {eyebrowText}
      </p>
      <div className="grid items-end gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
        <h2 className="max-w-180 text-[clamp(2.5rem,5vw,4.8rem)] font-medium leading-[1.03] tracking-[-0.055em] text-(--text) xl:max-w-none">
          {title}
        </h2>
        {copy && (
          <p className="mb-1 max-w-145 text-[0.94rem] leading-[1.7] text-(--muted) xl:max-w-160">
            {copy}
          </p>
        )}
      </div>
    </div>
  );
}
