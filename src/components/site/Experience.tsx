import e1 from "@/assets/exp-1.jpg";
import e2 from "@/assets/exp-2.jpg";
import e3 from "@/assets/exp-3.jpg";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="bg-sand py-32 md:py-48 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-y-16 md:gap-y-0 md:gap-x-10">
          {/* Top-left image */}
          <Reveal className="col-span-12 md:col-span-5">
            <img
              src={e3}
              alt="Bungalow under the pines"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full aspect-[4/5] object-cover"
            />
          </Reveal>

          {/* Top-right text */}
          <Reveal delay={120} className="col-span-12 md:col-span-6 md:col-start-7 md:pt-32">
            <p className="mb-6 text-[11px] uppercase tracking-[0.42em] text-foreground/60">
              The Experience
            </p>
            <h2 className="font-serif text-[40px] md:text-[64px] leading-[1.02] tracking-[-0.015em] mb-10">
              A pause<br />
              <em className="italic font-normal">that lasts a week.</em>
            </h2>
            <div className="space-y-6 text-[16px] leading-[1.8] text-foreground/80 max-w-lg">
              <p>
                No reception. No noise. Just the line where the Adriatic meets twelve
                kilometres of open sand — and a small wooden door that opens onto it.
              </p>
              <p>
                Mornings begin with espresso under the pines. Afternoons disappear into
                a book on the terrace. Evenings end with figs, wine, and the colour
                going out of the sky.
              </p>
            </div>
          </Reveal>

          {/* Bottom-left quote */}
          <Reveal
            delay={80}
            className="col-span-12 md:col-span-4 md:col-start-1 md:row-start-2 md:pt-16"
          >
            <blockquote className="font-serif text-2xl md:text-[28px] leading-[1.35] italic text-foreground/85">
              “Designed for slow mornings<br />and long evenings.”
            </blockquote>
            <div className="mt-8 hairline w-16" />
          </Reveal>

          {/* Bottom-right image — pulled up for asymmetry */}
          <Reveal
            className="col-span-12 md:col-span-5 md:col-start-7 md:row-start-2 md:-mt-24"
            y={24}
          >
            <img
              src={e2}
              alt="Footsteps on warm sand"
              loading="lazy"
              width={1280}
              height={896}
              className="w-full aspect-[5/4] object-cover"
            />
          </Reveal>

          {/* Bottom-far-right small image — adds editorial rhythm */}
          <Reveal
            delay={120}
            className="col-span-6 md:col-span-3 md:col-start-1 md:row-start-3 md:pt-16"
          >
            <img
              src={e1}
              alt="Linen curtain in sea breeze"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full aspect-[3/4] object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
