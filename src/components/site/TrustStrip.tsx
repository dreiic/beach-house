import { Reveal } from "./Reveal";
import { useSiteContent } from "./siteContent";

export function TrustStrip() {
  const { content } = useSiteContent();
  const { items } = content.trust;

  return (
    <section className="border-y border-border bg-cream">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 md:grid-cols-4 px-0 md:px-10">
        {items.map((it, i) => (
          <Reveal
            key={it.k}
            delay={i * 90}
            y={12}
            className={`flex flex-col gap-3 px-6 py-12 md:py-16 ${
              i !== 0 ? "md:border-l border-border" : ""
            } ${i % 2 === 1 ? "border-l border-border md:border-l" : ""} ${
              i < 2 ? "border-b border-border md:border-b-0" : ""
            }`}
          >
            <span className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
              {it.k}
            </span>
            <span className="font-serif text-xl tracking-tight">{it.t}</span>
            <span className="text-[13px] leading-relaxed text-muted-foreground">{it.d}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
