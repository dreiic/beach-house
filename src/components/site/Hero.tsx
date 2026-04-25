import { useEffect, useRef, useState } from "react";
import sky from "@/assets/hero-sky.jpg";
import sea from "@/assets/hero-sea.png";
import bungalows from "@/assets/hero-bungalows.png";

/**
 * Cinematic scroll hero.
 *
 * Z-index hierarchy (bottom → top):
 *   z-0  Sky (slowest, slight blur for depth)
 *   z-10 Sea  (mid, subtle horizontal + tiny vertical drift)
 *   z-20 Bungalows (foreground, fastest)
 *   z-30 Cream wash + bottom soft fade (keeps text legible)
 *   z-40 Sticky text panel (always above visuals)
 *
 * Visuals are constrained to the BOTTOM HALF of the viewport on desktop and
 * the bottom 55% on mobile. The text panel sits in the LEFT/CENTER text-safe
 * zone with a soft cream gradient behind it — they cannot collide.
 */
export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [t, setT] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = sectionRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const total = el.offsetHeight - window.innerHeight;
        const scrolled = Math.min(Math.max(-rect.top, 0), total);
        setT(total > 0 ? scrolled / total : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Premium easing
  const ease = (x: number) => 1 - Math.pow(1 - Math.min(1, Math.max(0, x)), 2.4);
  const e = ease(t);

  // Reduced, smoother horizontal movement (was 8 / 18 / 38 → now 4 / 9 / 18)
  const skyX = -e * 4;
  const seaX = -e * 9;
  const bungX = -e * 18;

  // Tiny vertical drift = fake-3D depth
  const skyY = e * 4;
  const seaY = e * 10;
  const bungY = e * 18;

  // Per-layer scale (foreground scales slightly more — depth illusion)
  const skyScale = 1.04 - e * 0.02;
  const seaScale = 1.05 - e * 0.03;
  const bungScale = 1.06 - e * 0.05;

  // Text timeline — staggered, but headline NEVER fully disappears
  const headlineOp = 1 - e * 0.25;
  const headlineY = -e * 24;
  const subOp = Math.min(1, Math.max(0, (t - 0.04) * 5));
  const subY = (1 - Math.min(1, (t - 0.04) * 5)) * 18;
  const ctaOp = Math.min(1, Math.max(0, (t - 0.14) * 5));
  const ctaY = (1 - Math.min(1, (t - 0.14) * 5)) * 18;

  return (
    <section
      ref={sectionRef}
      aria-label="Hero"
      className="relative w-full"
      style={{ height: isMobile ? "100svh" : "210vh" }}
    >
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden bg-cream">
        {/* ───────── VISUAL LAYERS — bottom-anchored, never enter text zone ───────── */}
        <div className="absolute inset-0 grain pointer-events-none">
          {/* Sky — fills full frame, slight blur for depth */}
          <img
            src={sky}
            alt=""
            aria-hidden
            width={1920}
            height={1088}
            className="absolute inset-0 z-0 h-full w-full object-cover"
            style={{
              transform: isMobile
                ? `scale(${1.03 - e * 0.02})`
                : `translate3d(${skyX}%, ${skyY}px, 0) scale(${skyScale})`,
              filter: "blur(2px)",
              willChange: "transform",
            }}
          />

          {/* Sea — sits in lower 50%, subtle drift */}
          <img
            src={sea}
            alt=""
            aria-hidden
            width={1920}
            height={900}
            className="absolute bottom-0 left-0 z-10 h-[50%] w-[130%] object-cover object-bottom"
            style={{
              transform: isMobile
                ? `translate3d(0, ${e * 6}px, 0)`
                : `translate3d(${seaX}%, ${seaY}px, 0) scale(${seaScale})`,
              filter: "blur(0.4px)",
              willChange: "transform",
            }}
          />

          {/* Foreground bungalows — pushed to RIGHT side, never overlapping left text */}
          <img
            src={bungalows}
            alt=""
            aria-hidden
            width={1920}
            height={800}
            className="absolute bottom-[2%] right-[-8%] z-20 h-[42%] md:h-[48%] w-auto max-w-none object-contain object-bottom"
            style={{
              transform: isMobile
                ? `translate3d(0, ${e * 10}px, 0)`
                : `translate3d(${bungX}%, ${bungY}px, 0) scale(${bungScale})`,
              filter: "drop-shadow(0 30px 30px oklch(0.22 0.012 60 / 0.12))",
              willChange: "transform",
            }}
          />

          {/* Soft cream wash — only at very bottom, keeps the foot-line legible */}
          <div className="absolute inset-x-0 bottom-0 z-25 h-[35%] bg-gradient-to-t from-cream/85 via-cream/30 to-transparent" />

          {/* Left-side text-safe gradient (desktop) — invisible on the right */}
          <div className="hidden md:block absolute inset-y-0 left-0 z-30 w-[55%] bg-gradient-to-r from-cream/55 via-cream/15 to-transparent" />
          {/* Mobile: full vertical wash for legibility */}
          <div className="md:hidden absolute inset-0 z-30 bg-gradient-to-t from-cream/70 via-cream/15 to-cream/30" />
        </div>

        {/* ───────── UI LAYER (always above visuals) ───────── */}
        <div className="relative z-40 flex h-full w-full flex-col">
          {/* top eyebrow */}
          <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10 pt-[20svh] md:pt-[22svh]">
            <div
              className="max-w-[640px] md:max-w-[720px]"
              style={{
                opacity: headlineOp,
                transform: `translate3d(0, ${headlineY}px, 0)`,
                willChange: "opacity, transform",
              }}
            >
              <p className="mb-6 text-[11px] uppercase tracking-[0.42em] text-foreground/60">
                Pearl Beach · Velika Plaža · Ulcinj
              </p>
              <h1 className="font-serif text-[44px] sm:text-[60px] md:text-[84px] leading-[0.98] tracking-[-0.02em] text-foreground">
                Wake up steps<br />
                <em className="italic font-normal text-foreground/85">from the sea.</em>
              </h1>
            </div>

            <div
              className="mt-8 max-w-[440px] text-[15px] leading-relaxed text-foreground/75"
              style={{
                opacity: subOp,
                transform: `translate3d(0, ${subY}px, 0)`,
                willChange: "opacity, transform",
              }}
            >
              Private bungalows on Montenegro's longest beach,
              hidden inside a quiet pine forest.
            </div>

            <div
              className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4"
              style={{
                opacity: ctaOp,
                transform: `translate3d(0, ${ctaY}px, 0)`,
                willChange: "opacity, transform",
              }}
            >
              <a
                href="#inquiry"
                className="group inline-flex items-center gap-3 rounded-none border border-foreground bg-foreground px-7 py-4 text-[12px] uppercase tracking-[0.28em] text-background transition-colors duration-500 hover:bg-transparent hover:text-foreground"
              >
                Check Availability
                <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
              </a>
              <a href="#bungalows" className="text-[12px] uppercase tracking-[0.28em] link-underline text-foreground/80">
                See bungalows
              </a>
            </div>
          </div>

          <div className="flex-1" />

          {/* Foot-line meta */}
          <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10 pb-7 flex items-end justify-between text-[10px] uppercase tracking-[0.32em] text-foreground/55">
            <span>Booking · 10 / 10</span>
            <span className="hidden md:inline">Scroll to explore</span>
            <span>41°53′N · 19°17′E</span>
          </div>
        </div>
      </div>
    </section>
  );
}
