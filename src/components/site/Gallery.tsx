import { useEffect, useState } from "react";
import bathroom from "@/assets/resort-bathroom.jpg";
import aerialBeach from "@/assets/resort-aerial-beach.jpg";
import blueBedroom from "@/assets/resort-blue-bedroom.jpg";
import cardakVip from "@/assets/resort-cardak-vip.jpg";
import heroResort from "@/assets/resort-hero.jpg";
import kitchenDetail from "@/assets/resort-kitchen-detail.jpg";
import longTerrace from "@/assets/resort-long-terrace.jpg";
import nightExterior from "@/assets/resort-night-exterior.jpg";
import nightRow from "@/assets/resort-night-row.jpg";
import porchDetail from "@/assets/resort-porch-detail.jpg";
import redBedroom from "@/assets/resort-red-bedroom.jpg";
import terraceBedroom from "@/assets/resort-terrace-bedroom.jpg";
import yardEvening from "@/assets/resort-yard-evening.jpg";
import { Reveal } from "./Reveal";
import { useSiteContent } from "./siteContent";

type Item = {
  src: string;
  alt: string;
  w: number;
  h: number;
  className: string;
  aspect: string;
  position?: string;
};

const items: Item[] = [
  {
    src: heroResort,
    alt: "Bungalows and pine trees opening toward the beach",
    w: 2400,
    h: 1599,
    className: "sm:col-span-2 md:col-span-12 md:row-span-4",
    aspect: "aspect-[16/9] md:aspect-auto",
  },
  {
    src: aerialBeach,
    alt: "Aerial view of the beach and pine forest",
    w: 2200,
    h: 1650,
    className: "sm:col-span-2 md:col-span-7 md:row-span-4",
    aspect: "aspect-[4/3] md:aspect-auto",
  },
  {
    src: cardakVip,
    alt: "Čardak VIP apartment joined from two apartments",
    w: 1800,
    h: 2400,
    className: "md:col-span-5 md:row-span-4",
    aspect: "aspect-[4/5] md:aspect-auto",
    position: "object-[50%_58%]",
  },
  {
    src: longTerrace,
    alt: "Long wooden terrace facing the yard",
    w: 1800,
    h: 1199,
    className: "md:col-span-4 md:row-span-3",
    aspect: "aspect-[4/5] md:aspect-auto",
    position: "object-[52%_50%]",
  },
  {
    src: terraceBedroom,
    alt: "Terrace lounge connected to the bedroom",
    w: 1800,
    h: 1199,
    className: "md:col-span-4 md:row-span-3",
    aspect: "aspect-[4/5] md:aspect-auto",
    position: "object-[54%_50%]",
  },
  {
    src: redBedroom,
    alt: "Bedroom with warm wood ceiling",
    w: 1800,
    h: 1195,
    className: "md:col-span-4 md:row-span-3",
    aspect: "aspect-square",
  },
  {
    src: kitchenDetail,
    alt: "Outdoor service kitchen and dishes",
    w: 1800,
    h: 1199,
    className: "md:col-span-4 md:row-span-3",
    aspect: "aspect-square md:aspect-auto",
    position: "object-[48%_56%]",
  },
  {
    src: blueBedroom,
    alt: "Blue bedroom with sea-facing window",
    w: 1800,
    h: 1208,
    className: "md:col-span-4 md:row-span-3",
    aspect: "aspect-[4/5] md:aspect-auto",
  },
  {
    src: porchDetail,
    alt: "Quiet terrace detail in natural shade",
    w: 1800,
    h: 2702,
    className: "md:col-span-4 md:row-span-3",
    aspect: "aspect-[4/5] md:aspect-auto",
    position: "object-[55%_50%]",
  },
  {
    src: nightRow,
    alt: "Bungalows lit among the pine trees",
    w: 1800,
    h: 1199,
    className: "sm:col-span-2 md:col-span-7 md:row-span-4",
    aspect: "aspect-[16/10] md:aspect-auto",
  },
  {
    src: bathroom,
    alt: "Bright private bathroom",
    w: 1600,
    h: 1066,
    className: "md:col-span-5 md:row-span-4",
    aspect: "aspect-[4/3] md:aspect-auto",
  },
  {
    src: yardEvening,
    alt: "Sunny yard between the bungalows",
    w: 1800,
    h: 1199,
    className: "md:col-span-4 md:row-span-4",
    aspect: "aspect-[4/5] md:aspect-auto",
    position: "object-[48%_50%]",
  },
  {
    src: nightExterior,
    alt: "Bungalows glowing at night",
    w: 1800,
    h: 1199,
    className: "sm:col-span-2 md:col-span-8 md:row-span-4",
    aspect: "aspect-[16/10] md:aspect-auto",
  },
];

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { content } = useSiteContent();
  const { gallery } = content;
  const activeItem = activeIndex === null ? null : items[activeIndex];
  const activeAlt = activeIndex === null ? "" : (gallery.alt[activeIndex] ?? activeItem?.alt ?? "");

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex]);

  return (
    <section id="gallery" className="scroll-mt-24 bg-background py-28 md:py-44">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <Reveal className="mb-14 md:mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-5 text-[11px] uppercase tracking-[0.42em] text-foreground/60">
              {gallery.eyebrow}
            </p>
            <h2 className="font-serif text-[40px] md:text-[64px] leading-[1.02] tracking-[-0.015em]">
              {gallery.title}
              <br />
              <em className="italic font-normal">{gallery.emphasis}</em>
            </h2>
          </div>
          <div className="hidden h-px flex-1 bg-border md:block" />
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-12 md:auto-rows-[118px] md:gap-5">
          {items.map((it, i) => (
            <Reveal
              key={it.src + i}
              delay={(i % 3) * 80}
              y={20}
              className={`${it.className} group overflow-hidden`}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`relative block h-full w-full ${it.aspect} overflow-hidden bg-muted text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 focus-visible:ring-offset-4 focus-visible:ring-offset-background`}
                aria-label={`${gallery.alt[i] ?? it.alt} - open image`}
              >
                <img
                  src={it.src}
                  alt={gallery.alt[i] ?? it.alt}
                  loading="lazy"
                  width={it.w}
                  height={it.h}
                  className={`h-full w-full object-cover ${it.position ?? "object-center"} transition-transform duration-[1600ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.04]`}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/45 via-foreground/12 to-transparent px-4 pb-4 pt-16 text-background opacity-100 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100">
                  <span className="flex items-center justify-between gap-4 text-[10px] uppercase tracking-[0.24em]">
                    <span className="truncate">{gallery.alt[i] ?? it.alt}</span>
                    <span className="shrink-0 font-serif text-[13px] italic tracking-normal">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {activeItem ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/88 px-4 py-6 backdrop-blur-sm md:px-10"
          role="dialog"
          aria-modal="true"
          aria-label={activeAlt}
        >
          <button
            type="button"
            aria-label="Close image"
            className="absolute inset-0 cursor-zoom-out"
            onClick={() => setActiveIndex(null)}
          />
          <div className="relative z-10 max-h-full w-full max-w-[1280px]">
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute right-0 top-0 z-20 flex h-10 w-10 -translate-y-12 items-center justify-center rounded-full border border-background/30 bg-background/10 text-2xl leading-none text-background backdrop-blur transition-colors duration-300 hover:bg-background/20 md:-right-3 md:-top-3 md:translate-y-0"
              aria-label="Close image"
            >
              ×
            </button>
            <img
              src={activeItem.src}
              alt={activeAlt}
              width={activeItem.w}
              height={activeItem.h}
              className="max-h-[82svh] w-full object-contain shadow-2xl"
            />
            <p className="mt-4 text-center text-[10px] uppercase tracking-[0.28em] text-background/70">
              {activeAlt}
            </p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
