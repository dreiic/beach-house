import { useEffect, useRef, useState } from "react";
import sky from "@/assets/hero-sky.jpg";
import sea from "@/assets/hero-sea.png";
import bungalows from "@/assets/hero-bungalows.png";
import seaPinesBackground from "@/assets/resort-sea-pines-background.jpg";
import { useSiteContent } from "./siteContent";

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [t, setT] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const { content } = useSiteContent();
  const { hero } = content;

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

  const ease = (x: number) => 1 - Math.pow(1 - Math.min(1, Math.max(0, x)), 2.4);
  const e = ease(t);

  const skyX = -e * 4;
  const seaX = -e * 4;
  const bungX = -e * 10;

  const skyY = e * 4;
  const seaY = e * 6;
  const bungY = e * 10;
  const seaLift = isMobile ? -52 : -66;

  const skyScale = 1.04 - e * 0.02;
  const seaScale = 1.12 - e * 0.02;
  const bungScale = 1.12 - e * 0.06;

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
      className="relative w-full overflow-x-clip"
      style={{ height: isMobile ? "190svh" : "210vh" }}
    >
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden bg-cream">
        <div className="absolute inset-0 grain pointer-events-none">
          <img
            src={sky}
            alt=""
            aria-hidden
            width={1920}
            height={1088}
            className="absolute inset-0 z-0 h-full w-full object-cover"
            style={{
              transform: `translate3d(${skyX}%, ${skyY}px, 0) scale(${skyScale * 1.15})`,
              filter: "blur(2px)",
              willChange: "transform",
            }}
          />

          <img
            src={seaPinesBackground}
            alt=""
            aria-hidden
            width={2200}
            height={1466}
            className="absolute inset-0 z-[5] h-full w-full object-cover object-center opacity-20 md:opacity-25"
            style={{
              transform: `translate3d(${seaX * 0.5}%, ${skyY + 8}px, 0) scale(${skyScale * 1.05})`,
              filter: "saturate(0.95) contrast(0.95)",
              willChange: "transform",
            }}
          />

          <img
            src={sea}
            alt=""
            aria-hidden
            width={1920}
            height={900}
            className="absolute inset-0 z-10 h-full w-full object-cover object-bottom"
            style={{
              transform: `translate3d(${seaX}%, ${seaLift + seaY}px, 0) scale(${seaScale})`,
              filter: "blur(0.4px)",
              willChange: "transform",
            }}
          />

          {/* BUNGALOWS */}
          <img
            src={bungalows}
            alt=""
            aria-hidden
            width={1920}
            height={800}
            className="absolute bottom-[11%] right-[-8%] z-[35] h-[38%] md:bottom-[2%] md:right-[-10%] md:z-20 md:h-[60%] w-auto max-w-none object-contain object-bottom"
            style={{
              transform: isMobile
                ? `translate3d(${bungX}%, ${bungY}px, 0) scale(1.12)`
                : `translate3d(${bungX}%, ${bungY}px, 0) scale(${bungScale})`,
              filter: isMobile
                ? "drop-shadow(0 22px 24px oklch(0.22 0.012 60 / 0.16))"
                : "drop-shadow(0 30px 30px oklch(0.22 0.012 60 / 0.12))",
              willChange: "transform",
            }}
          />

          <div className="absolute inset-x-0 bottom-0 z-25 h-[35%] bg-gradient-to-t from-cream/85 via-cream/30 to-transparent" />
          <div className="hidden md:block absolute inset-y-0 left-0 z-30 w-[55%] bg-gradient-to-r from-cream/55 via-cream/15 to-transparent" />
          <div className="md:hidden absolute inset-0 z-30 bg-gradient-to-t from-cream/70 via-cream/15 to-cream/30" />
        </div>

        <div className="relative z-40 flex h-full w-full flex-col">
          <div className="mx-auto w-full max-w-[1400px] px-4 md:px-10 pt-[18svh] md:pt-[22svh]">
            <div
              className="max-w-[640px] md:max-w-[720px]"
              style={{
                opacity: headlineOp,
                transform: `translate3d(0, ${headlineY}px, 0)`,
              }}
            >
              <p className="mb-6 text-[11px] uppercase tracking-[0.42em] text-foreground/60">
                {hero.eyebrow}
              </p>
              <h1 className="font-serif text-[36px] sm:text-[60px] md:text-[84px] leading-[1.02] sm:leading-[0.98] tracking-[-0.02em] text-foreground">
                {hero.title}
                <br />
                <em className="italic font-normal text-foreground/85">{hero.emphasis}</em>
              </h1>
            </div>

            <div
              className="mt-6 md:mt-8 max-w-[440px] text-[14px] md:text-[15px] leading-relaxed text-foreground/75"
              style={{
                opacity: subOp,
                transform: `translate3d(0, ${subY}px, 0)`,
              }}
            >
              {hero.text}
            </div>

            <div
              className="mt-7 md:mt-8 flex flex-wrap items-center gap-x-6 md:gap-x-8 gap-y-4"
              style={{
                opacity: ctaOp,
                transform: `translate3d(0, ${ctaY}px, 0)`,
              }}
            >
              <a
                href="#inquiry"
                className="group inline-flex items-center gap-3 border border-foreground bg-foreground px-5 md:px-7 py-3.5 md:py-4 text-[11px] md:text-[12px] uppercase tracking-[0.22em] md:tracking-[0.28em] text-background transition-colors duration-500 hover:bg-transparent hover:text-foreground"
              >
                {hero.primary} →
              </a>
              <a
                href="#bungalows"
                className="text-[11px] md:text-[12px] uppercase tracking-[0.22em] md:tracking-[0.28em] text-foreground/80"
              >
                {hero.secondary}
              </a>
            </div>
          </div>

          <div className="flex-1" />

          <div className="mx-auto w-full max-w-[1400px] px-4 md:px-10 pb-7 flex justify-between text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.32em] text-foreground/55">
            <span>{hero.metaLeft}</span>
            <span className="hidden md:inline">{hero.metaCenter}</span>
            <span>{hero.metaRight}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
