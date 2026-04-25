import { Reveal } from "./Reveal";
import { useSiteContent } from "./siteContent";

export function HowItWorks() {
  const { content } = useSiteContent();
  const { how } = content;

  return (
    <section className="bg-foreground text-background py-28 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal className="mb-20 md:mb-28 flex items-end justify-between gap-8 flex-col md:flex-row">
          <h2 className="font-serif text-[40px] md:text-[60px] leading-[1.02] tracking-[-0.015em] max-w-xl">
            {how.title},<br />
            <em className="italic font-normal">{how.emphasis}</em>
          </h2>
          <p className="max-w-xs text-[14px] leading-relaxed text-background/70">{how.text}</p>
        </Reveal>

        <ol className="grid grid-cols-1 md:grid-cols-3 border-t border-background/20">
          {how.steps.map((s, i) => (
            <Reveal
              key={s.n}
              as="li"
              delay={i * 140}
              className={`py-14 md:py-20 md:px-12 first:md:pl-0 ${
                i !== how.steps.length - 1 ? "md:border-r border-background/20" : ""
              }`}
            >
              <div className="text-[10px] uppercase tracking-[0.42em] text-background/50 mb-10">
                {s.n}
              </div>
              <h3 className="font-serif text-3xl md:text-[34px] text-background mb-5 tracking-tight">
                {s.t}
              </h3>
              <p className="text-[14px] leading-relaxed text-background/70 max-w-xs">{s.d}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
