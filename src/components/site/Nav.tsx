import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useSiteContent } from "./siteContent";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const { content, language, setLanguage } = useSiteContent();
  const { nav } = content;

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
            <span className="font-serif text-lg tracking-tight">{nav.brand}</span>
            <span className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
              {nav.suffix}
            </span>
          </Link>
          <ul className="hidden md:flex items-center gap-10 text-[12px] uppercase tracking-[0.22em] text-foreground/80">
            <li>
              <a href="#bungalows" className="link-underline">
                {nav.houses}
              </a>
            </li>
            <li>
              <a href="#experience" className="link-underline">
                {nav.experience}
              </a>
            </li>
            <li>
              <a href="#gallery" className="link-underline">
                {nav.gallery}
              </a>
            </li>
            <li>
              <a href="#location" className="link-underline">
                {nav.location}
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-5">
            <button
              type="button"
              aria-label={nav.languageLabel}
              onClick={() => setLanguage(language === "eng" ? "mne" : "eng")}
              className="group relative grid w-[104px] cursor-pointer grid-cols-2 overflow-hidden rounded-full border border-foreground/15 bg-background/40 p-1 text-[11px] uppercase tracking-[0.18em] text-foreground/70 shadow-sm transition-[background-color,border-color,transform] duration-300 hover:border-foreground/30 hover:bg-background/70 active:scale-[0.98]"
            >
              <span
                aria-hidden
                className={`absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-foreground/10 shadow-lift transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
                  language === "mne" ? "translate-x-[calc(100%+0.25rem)]" : "translate-x-0"
                }`}
              />
              <span
                className={`relative z-10 cursor-pointer text-center transition-[color,transform] duration-500 ${
                  language === "eng"
                    ? "-translate-y-0.5 text-foreground"
                    : "translate-y-0 text-muted-foreground"
                }`}
              >
                ENG
              </span>
              <span
                className={`relative z-10 cursor-pointer text-center transition-[color,transform] duration-500 ${
                  language === "mne"
                    ? "-translate-y-0.5 text-foreground"
                    : "translate-y-0 text-muted-foreground"
                }`}
              >
                MNE
              </span>
            </button>
            <a
              href="#inquiry"
              className="group inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em]"
            >
              <span className="link-underline">{nav.reserve}</span>
              <span
                aria-hidden
                className="transition-transform duration-500 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
