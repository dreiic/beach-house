import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  /** delay in ms */
  delay?: number;
  /** transition duration in ms */
  duration?: number;
  /** horizontal translate distance in px */
  x?: number;
  /** vertical translate distance in px */
  y?: number;
  /** starting scale before the element settles */
  scale?: number;
  /** starting blur in px */
  blur?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
};

/**
 * Reveal-on-scroll wrapper. Fades + slides up gently on first intersection.
 * Uses IntersectionObserver — no scroll listeners, no jank.
 */
export function Reveal({
  children,
  delay = 0,
  duration = 1100,
  x = 0,
  y = 18,
  scale = 0.985,
  blur = 8,
  className = "",
  as = "div",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (typeof window === "undefined" || reduceMotion || !("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as as React.ElementType;
  const hiddenTransform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;

  return (
    <Tag
      ref={ref as never}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        filter: shown ? "blur(0)" : `blur(${blur}px)`,
        transform: shown ? "translate3d(0,0,0) scale(1)" : hiddenTransform,
        transition: `opacity ${duration}ms cubic-bezier(0.2,0.7,0.2,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.2,0.7,0.2,1) ${delay}ms, filter ${duration}ms cubic-bezier(0.2,0.7,0.2,1) ${delay}ms`,
        willChange: shown ? "auto" : "opacity, transform, filter",
      }}
    >
      {children}
    </Tag>
  );
}
