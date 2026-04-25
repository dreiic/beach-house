import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import e1 from "@/assets/exp-1.jpg";
import e3 from "@/assets/exp-3.jpg";
import { Reveal } from "./Reveal";

/**
 * Cinematic asymmetric grid — varied aspect ratios, edge-to-edge feel,
 * staggered reveal. No "gallery card" boxes.
 */
type Item = { src: string; alt: string; w: number; h: number; col: string; aspect: string };

const items: Item[] = [
  { src: g2, alt: "Velika Plaža at golden hour",   w: 1536, h: 1024, col: "col-span-12 md:col-span-8", aspect: "aspect-[3/2]" },
  { src: g3, alt: "Palm leaves at dusk",           w: 1024, h: 1280, col: "col-span-6 md:col-span-4",  aspect: "aspect-[3/4]" },
  { src: e1, alt: "Linen curtain by the sea",      w: 1024, h: 1280, col: "col-span-6 md:col-span-4",  aspect: "aspect-[3/4]" },
  { src: g1, alt: "Breakfast tray on the sand",    w: 1024, h: 1280, col: "col-span-6 md:col-span-4",  aspect: "aspect-square" },
  { src: e3, alt: "A bungalow under the pines",    w: 1024, h: 1280, col: "col-span-12 md:col-span-4", aspect: "aspect-[3/4]" },
  { src: g4, alt: "Wine at sunset",                w: 1280, h: 1024, col: "col-span-12 md:col-span-8", aspect: "aspect-[16/10]" },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-background py-32 md:py-48">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal className="mb-20 md:mb-28 max-w-2xl">
          <p className="mb-5 text-[11px] uppercase tracking-[0.42em] text-foreground/60">Moments</p>
          <h2 className="font-serif text-[40px] md:text-[64px] leading-[1.02] tracking-[-0.015em]">
            Light, linen,<br />
            <em className="italic font-normal">and the sea outside.</em>
          </h2>
        </Reveal>

        <div className="grid grid-cols-12 gap-3 md:gap-5">
          {items.map((it, i) => (
            <Reveal
              key={it.src + i}
              delay={(i % 3) * 80}
              y={20}
              className={`${it.col} group overflow-hidden`}
            >
              <div className={`relative w-full ${it.aspect} overflow-hidden bg-muted`}>
                <img
                  src={it.src}
                  alt={it.alt}
                  loading="lazy"
                  width={it.w}
                  height={it.h}
                  className="h-full w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-foreground/0 transition-colors duration-700 group-hover:bg-foreground/[0.04]" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
