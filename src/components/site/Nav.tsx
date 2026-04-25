import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 32);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(1, y / h) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top hairline scroll progress */}
      <div aria-hidden className="fixed left-0 top-0 z-[60] h-px w-full bg-foreground/10">
        <div
          className="h-full origin-left bg-foreground"
          style={{ transform: `scaleX(${progress})`, transition: "transform 80ms linear" }}
        />
      </div>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[backdrop-filter,background-color,padding,border-color] duration-500 ${
          scrolled
            ? "py-3 backdrop-blur-md bg-background/75 border-b border-border/60"
            : "py-6 bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10">
          <Link to="/" className="flex items-baseline gap-2">
            <span className="font-serif text-lg tracking-tight">Bungalovi</span>
            <span className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">Resorthome</span>
          </Link>
          <ul className="hidden md:flex items-center gap-10 text-[12px] uppercase tracking-[0.22em] text-foreground/80">
            <li><a href="#bungalows" className="link-underline">Houses</a></li>
            <li><a href="#experience" className="link-underline">Experience</a></li>
            <li><a href="#gallery" className="link-underline">Gallery</a></li>
            <li><a href="#location" className="link-underline">Location</a></li>
          </ul>
          <a href="#inquiry" className="group inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em]">
            <span className="link-underline">Reserve</span>
            <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
          </a>
        </nav>
      </header>
    </>
  );
}
