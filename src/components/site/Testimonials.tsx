import { Reveal } from "./Reveal";
import { useSiteContent } from "./siteContent";

export function Testimonials() {
  const { content } = useSiteContent();
  const { testimonials } = content;

  return (
    <section className="bg-cream py-28 md:py-40 border-y border-border">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal className="mb-16 md:mb-20 flex items-end justify-between gap-8 flex-col md:flex-row">
          <div>
            <p className="mb-4 text-[11px] uppercase tracking-[0.42em] text-foreground/60">
              {testimonials.eyebrow}
            </p>
            <h2 className="font-serif text-[36px] md:text-[52px] leading-[1.05] tracking-[-0.015em] max-w-xl">
              {testimonials.title}
            </h2>
          </div>
          <p className="text-[13px] uppercase tracking-[0.28em] text-muted-foreground">
            {testimonials.note}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-x-12">
          {testimonials.quotes.map((q, i) => (
            <Reveal key={q.author} delay={i * 120} className="flex flex-col">
              <span className="font-serif text-4xl text-foreground/30 leading-none">“</span>
              <blockquote className="mt-4 font-serif italic text-[22px] md:text-[24px] leading-[1.45] text-foreground/85">
                {q.text}
              </blockquote>
              <div className="mt-10 hairline w-10" />
              <div className="mt-5 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
                {q.author} · {q.place}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
