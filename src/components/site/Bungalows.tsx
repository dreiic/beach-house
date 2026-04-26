import b1 from "@/assets/resort-bungalows-front.jpg";
import b2 from "@/assets/resort-terrace-lounge.jpg";
import b3 from "@/assets/resort-blue-bedroom.jpg";
import { Reveal } from "./Reveal";
import { useSiteContent } from "./siteContent";

const images = [b1, b2, b3];
const aligns = ["left", "right", "left"] as const;
const positions = ["object-center", "object-[56%_50%]", "object-center"] as const;

export function Bungalows() {
  const { content } = useSiteContent();
  const { bungalows } = content;

  return (
    <section id="bungalows" className="bg-background py-32 md:py-48">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal className="mb-24 md:mb-32 max-w-3xl">
          <p className="mb-5 text-[11px] uppercase tracking-[0.42em] text-foreground/60">
            {bungalows.eyebrow}
          </p>
          <h2 className="font-serif text-[40px] md:text-[64px] leading-[1.02] tracking-[-0.015em]">
            {bungalows.title}
            <br />
            <em className="italic font-normal">{bungalows.emphasis}</em>
          </h2>
          <p className="mt-8 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            {bungalows.intro}
          </p>
        </Reveal>

        <div className="space-y-32 md:space-y-44">
          {bungalows.rows.map((r, i) => (
            <article
              key={r.name}
              className="grid grid-cols-12 gap-y-10 md:gap-y-0 md:gap-x-12 items-center"
            >
              <Reveal
                className={`col-span-12 md:col-span-7 group overflow-hidden ${
                  aligns[i] === "right" ? "md:col-start-6 md:order-2" : ""
                }`}
                y={24}
              >
                <div className="relative overflow-hidden bg-muted aspect-[5/4]">
                  <img
                    src={images[i]}
                    alt={r.name}
                    loading="lazy"
                    width={1800}
                    height={1200}
                    className={`h-full w-full object-cover ${positions[i]} transition-transform duration-[1600ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.04]`}
                  />
                  <span className="absolute left-5 top-5 text-[10px] uppercase tracking-[0.32em] text-background mix-blend-difference">
                    N°{r.n}
                  </span>
                </div>
              </Reveal>

              <Reveal
                delay={120}
                className={`col-span-12 md:col-span-4 ${
                  aligns[i] === "right" ? "md:col-start-2 md:order-1" : "md:col-start-9"
                }`}
              >
                <p className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                  {r.capacity}
                </p>
                <h3 className="mt-4 font-serif text-3xl md:text-4xl tracking-tight">{r.name}</h3>
                <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground max-w-sm">
                  {r.note}
                </p>
                <div className="mt-8 hairline w-12" />
                <div className="mt-6 flex items-baseline justify-between max-w-xs">
                  <span className="font-serif italic text-lg text-foreground/85">{r.price}</span>
                  <a
                    href="#inquiry"
                    className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.32em] link-underline"
                  >
                    {bungalows.cta} <span aria-hidden>→</span>
                  </a>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
