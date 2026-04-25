import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import e1 from "@/assets/exp-1.jpg";
import e3 from "@/assets/exp-3.jpg";
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
    src: g2,
    alt: "Velika Plaža at golden hour",
    w: 1536,
    h: 1024,
    className: "sm:col-span-2 md:col-span-7 md:row-span-4",
    aspect: "aspect-[4/3] md:aspect-auto",
  },
  {
    src: e3,
    alt: "A bungalow under the pines",
    w: 1024,
    h: 1280,
    className: "md:col-span-5 md:row-span-4",
    aspect: "aspect-[4/5] md:aspect-auto",
  },
  {
    src: e1,
    alt: "Linen curtain by the sea",
    w: 1024,
    h: 1280,
    className: "md:col-span-4 md:row-span-3",
    aspect: "aspect-[4/5] md:aspect-auto",
  },
  {
    src: g1,
    alt: "Breakfast tray on the sand",
    w: 1024,
    h: 1280,
    className: "md:col-span-4 md:row-span-3",
    aspect: "aspect-square",
  },
  {
    src: g3,
    alt: "Palm leaves at dusk",
    w: 1024,
    h: 1280,
    className: "md:col-span-4 md:row-span-3",
    aspect: "aspect-square md:aspect-auto",
    position: "object-bottom",
  },
  {
    src: g4,
    alt: "Wine at sunset",
    w: 1280,
    h: 1024,
    className: "sm:col-span-2 md:col-span-12 md:row-span-4",
    aspect: "aspect-[16/10] md:aspect-auto",
  },
];

export function Gallery() {
  const { content } = useSiteContent();
  const { gallery } = content;

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
              <figure className={`relative h-full w-full ${it.aspect} overflow-hidden bg-muted`}>
                <img
                  src={it.src}
                  alt={gallery.alt[i] ?? it.alt}
                  loading="lazy"
                  width={it.w}
                  height={it.h}
                  className={`h-full w-full object-cover ${it.position ?? "object-center"} transition-transform duration-[1600ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.04]`}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/45 via-foreground/12 to-transparent px-4 pb-4 pt-16 text-background opacity-100 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100">
                  <figcaption className="flex items-center justify-between gap-4 text-[10px] uppercase tracking-[0.24em]">
                    <span className="truncate">{gallery.alt[i] ?? it.alt}</span>
                    <span className="shrink-0 font-serif text-[13px] italic tracking-normal">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
