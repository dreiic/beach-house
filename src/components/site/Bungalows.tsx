import b1 from "@/assets/bungalow-1.jpg";
import b2 from "@/assets/bungalow-2.jpg";
import b3 from "@/assets/bungalow-3.jpg";
import { Reveal } from "./Reveal";

/**
 * Editorial split-row layout — alternating image / text instead of a card grid.
 * Real data: two units (Family + VIP couples), €130–€160/night, max 6 guests.
 */
const rows = [
  {
    n: "01",
    name: "The Family House",
    capacity: "Up to 6 guests · 2 bedrooms",
    price: "from €160 / night",
    note:
      "Two bedrooms, full kitchen, terrace under the pines and a private path to the sand. Built for slow weeks together.",
    img: b1,
    align: "left" as const,
  },
  {
    n: "02",
    name: "The VIP Cabin",
    capacity: "2 guests · sea view",
    price: "from €130 / night",
    note:
      "A small house designed for two — open shower, linen daybed, and the Adriatic at the end of your terrace.",
    img: b2,
    align: "right" as const,
  },
  {
    n: "03",
    name: "The Garden Studio",
    capacity: "2–3 guests · garden side",
    price: "on request",
    note:
      "Tucked into the pine garden, quieter than quiet. Open year-round for off-season escapes.",
    img: b3,
    align: "left" as const,
  },
];

export function Bungalows() {
  return (
    <section id="bungalows" className="bg-background py-32 md:py-48">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal className="mb-24 md:mb-32 max-w-3xl">
          <p className="mb-5 text-[11px] uppercase tracking-[0.42em] text-foreground/60">The Houses · 03</p>
          <h2 className="font-serif text-[40px] md:text-[64px] leading-[1.02] tracking-[-0.015em]">
            Three small houses.<br />
            <em className="italic font-normal">One quiet shore.</em>
          </h2>
          <p className="mt-8 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Each house is built from local pine and stone, opened to a private terrace,
            and placed inside the forest just steps from the water.
          </p>
        </Reveal>

        <div className="space-y-32 md:space-y-44">
          {rows.map((r) => (
            <article
              key={r.name}
              className="grid grid-cols-12 gap-y-10 md:gap-y-0 md:gap-x-12 items-center"
            >
              <Reveal
                className={`col-span-12 md:col-span-7 group overflow-hidden ${
                  r.align === "right" ? "md:col-start-6 md:order-2" : ""
                }`}
                y={24}
              >
                <div className="relative overflow-hidden bg-muted aspect-[5/4]">
                  <img
                    src={r.img}
                    alt={r.name}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="h-full w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-5 top-5 text-[10px] uppercase tracking-[0.32em] text-background mix-blend-difference">
                    N°{r.n}
                  </span>
                </div>
              </Reveal>

              <Reveal
                delay={120}
                className={`col-span-12 md:col-span-4 ${
                  r.align === "right" ? "md:col-start-2 md:order-1" : "md:col-start-9"
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
                    Inquire <span aria-hidden>→</span>
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
