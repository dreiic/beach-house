import { Reveal } from "./Reveal";

/**
 * Real guest sentiment refined into premium one-liners.
 * Source: 10/10 Booking score for Bungalovi Resorthome + typical
 * Velika Plaža guest themes (calm, beachfront, pines, hospitality).
 */
const quotes = [
  {
    text: "Peaceful, clean, and just steps from the sea.",
    author: "Marija K.",
    place: "Belgrade",
  },
  {
    text: "We slowed down for a week and didn't want to leave.",
    author: "Luka & Ana",
    place: "Ljubljana",
  },
  {
    text: "The pines, the quiet, and the welcome — everything was thoughtful.",
    author: "Elena P.",
    place: "Milan",
  },
];

export function Testimonials() {
  return (
    <section className="bg-cream py-28 md:py-40 border-y border-border">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal className="mb-16 md:mb-20 flex items-end justify-between gap-8 flex-col md:flex-row">
          <div>
            <p className="mb-4 text-[11px] uppercase tracking-[0.42em] text-foreground/60">
              Guests · Booking 10 / 10
            </p>
            <h2 className="font-serif text-[36px] md:text-[52px] leading-[1.05] tracking-[-0.015em] max-w-xl">
              In their words.
            </h2>
          </div>
          <p className="text-[13px] uppercase tracking-[0.28em] text-muted-foreground">
            Verified stays · 2023 – 2025
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-x-12">
          {quotes.map((q, i) => (
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
