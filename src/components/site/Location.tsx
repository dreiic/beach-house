import { Reveal } from "./Reveal";
import { useSiteContent } from "./siteContent";

/**
 * Real coordinates: Donji Štoj / Velika Plaža, Ulcinj — 41.9064249°N 19.2610213°E.
 * Drives nearby times from real geography (Ulcinj old town, Tivat airport, Ada Bojana).
 */
export function Location() {
  const { content } = useSiteContent();
  const { location } = content;

  return (
    <section id="location" className="bg-sand py-32 md:py-48">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid grid-cols-12 gap-y-12 md:gap-x-12">
        <Reveal className="col-span-12 md:col-span-5">
          <p className="mb-5 text-[11px] uppercase tracking-[0.42em] text-foreground/60">
            {location.eyebrow}
          </p>
          <h2 className="font-serif text-[40px] md:text-[60px] leading-[1.02] tracking-[-0.015em] mb-8">
            {location.title}
            <br />
            <em className="italic font-normal">{location.emphasis}</em>
          </h2>
          <p className="text-[15px] leading-[1.75] text-foreground/75 max-w-md">{location.text}</p>

          <dl className="mt-12 space-y-4 text-sm">
            {location.facts.map(([k, v]) => (
              <div
                key={k}
                className="flex items-baseline justify-between gap-6 border-b border-border pb-3"
              >
                <dt className="text-muted-foreground">{k}</dt>
                <dd className="font-serif italic text-base">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal
          delay={120}
          className="col-span-12 md:col-span-7 relative overflow-hidden bg-card aspect-[4/3] md:aspect-auto md:min-h-[560px]"
        >
          <iframe
            title={location.eyebrow}
            src="https://www.openstreetmap.org/export/embed.html?bbox=19.2310%2C41.8864%2C19.2910%2C41.9264&amp;layer=mapnik&amp;marker=41.9064249%2C19.2610213"
            className="absolute inset-0 h-full w-full grayscale-[35%] sepia-[12%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-foreground/10" />
          <a
            href="https://www.openstreetmap.org/?mlat=41.9064249&mlon=19.2610213#map=15/41.9064249/19.2610213"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm px-4 py-2 text-[11px] uppercase tracking-[0.28em] link-underline"
          >
            {location.mapCta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
