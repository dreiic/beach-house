import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  /** delay in ms */
  delay?: number;
  /** vertical translate distance in px */
  y?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
};

/**
 * Reveal-on-scroll wrapper. Fades + slides up gently on first intersection.
 * Uses IntersectionObserver — no scroll listeners, no jank.
 */
export function Reveal({ children, delay = 0, y = 16, className = "", as = "div" }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
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
  return (
    <Tag
      ref={ref as never}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translate3d(0,0,0)" : `translate3d(0, ${y}px, 0)`,
        transition: `opacity 1100ms cubic-bezier(0.2,0.7,0.2,1) ${delay}ms, transform 1100ms cubic-bezier(0.2,0.7,0.2,1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}
