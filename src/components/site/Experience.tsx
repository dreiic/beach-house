import morningAi from "@/assets/experience-morning-ai.png";
import terraceAi from "@/assets/experience-terrace-ai.png";
import yardAi from "@/assets/experience-yard-ai.png";
import { Reveal } from "./Reveal";
import { useSiteContent } from "./siteContent";

export function Experience() {
  const { content } = useSiteContent();
  const { experience } = content;

  return (
    <section id="experience" className="bg-sand py-28 md:py-44 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-y-14 md:gap-x-12 md:gap-y-24">
          <Reveal className="col-span-12 md:col-span-5">
            <img
              src={terraceAi}
              alt={experience.imageAltTop}
              loading="lazy"
              width={1024}
              height={1536}
              className="w-full aspect-[4/5] object-cover"
            />
          </Reveal>

          <Reveal delay={120} className="col-span-12 md:col-span-6 md:col-start-7 md:self-center">
            <p className="mb-6 text-[11px] uppercase tracking-[0.42em] text-foreground/60">
              {experience.eyebrow}
            </p>
            <h2 className="font-serif text-[40px] md:text-[62px] leading-[1.03] tracking-[-0.015em] mb-9">
              {experience.title}
              <br />
              <em className="italic font-normal">{experience.emphasis}</em>
            </h2>
            <div className="space-y-5 text-[15px] md:text-[16px] leading-[1.8] text-foreground/80 max-w-[560px]">
              {experience.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal
            delay={80}
            className="col-span-12 md:col-span-4 md:col-start-1 md:row-start-2 md:self-center"
          >
            <blockquote className="max-w-[360px] font-serif text-2xl md:text-[28px] leading-[1.35] italic text-foreground/85">
              “{experience.quote}”
            </blockquote>
            <div className="mt-7 hairline w-14" />
            <p className="mt-7 max-w-[320px] text-[14px] leading-relaxed text-foreground/70">
              {experience.note}
            </p>
          </Reveal>

          <Reveal className="col-span-12 md:col-span-6 md:col-start-6 md:row-start-2" y={24}>
            <img
              src={yardAi}
              alt={experience.imageAltBottom}
              loading="lazy"
              width={1536}
              height={1024}
              className="w-full aspect-[6/4] object-cover"
            />
          </Reveal>

          <Reveal delay={120} className="col-span-12 md:col-span-10 md:col-start-2 md:row-start-3">
            <div className="grid grid-cols-12 gap-y-8 md:gap-x-12 items-center">
              <div className="col-span-8 sm:col-span-6 md:col-span-4">
                <img
                  src={morningAi}
                  alt={experience.imageAltSmall}
                  loading="lazy"
                  width={933}
                  height={1200}
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="mb-6 hairline w-14" />
                <p className="mb-4 max-w-[300px] text-[10px] uppercase tracking-[0.32em] text-foreground/45">
                  {experience.terraceTitle}
                </p>
                <p className="max-w-[320px] text-[15px] leading-relaxed text-foreground/75">
                  {experience.terraceText}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
