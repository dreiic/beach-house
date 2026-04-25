import { Reveal } from "./Reveal";

/**
 * Real coordinates: Pearl Beach / Velika Plaža, Ulcinj — 41.9285°N 19.3171°E.
 * Drives nearby times from real geography (Ulcinj old town, Tivat airport, Ada Bojana).
 */
export function Location() {
  return (
    <section id="location" className="bg-sand py-32 md:py-48">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid grid-cols-12 gap-y-12 md:gap-x-12">
        <Reveal className="col-span-12 md:col-span-5">
          <p className="mb-5 text-[11px] uppercase tracking-[0.42em] text-foreground/60">
            Location · Pearl Beach
          </p>
          <h2 className="font-serif text-[40px] md:text-[60px] leading-[1.02] tracking-[-0.015em] mb-8">
            Velika Plaža,<br />
            <em className="italic font-normal">southern Montenegro.</em>
          </h2>
          <p className="text-[15px] leading-[1.75] text-foreground/75 max-w-md">
            Twelve kilometres of open sand between Ulcinj and the Bojana river — the
            longest beach on the Adriatic, and a protected nature reserve since 1968.
          </p>

          <dl className="mt-12 space-y-4 text-sm">
            {[
              ["To the sand", "60 seconds on foot"],
              ["Ulcinj old town", "12 min by car"],
              ["Ada Bojana island", "10 min by car"],
              ["Tivat airport (TIV)", "1h 40min"],
              ["Tirana airport (TIA)", "1h 30min"],
            ].map(([k, v]) => (
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
            title="Pearl Beach, Velika Plaža location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=19.20%2C41.88%2C19.42%2C41.97&amp;layer=mapnik&amp;marker=41.9285%2C19.3171"
            className="absolute inset-0 h-full w-full grayscale-[35%] sepia-[12%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-foreground/10" />
          <a
            href="https://www.openstreetmap.org/?mlat=41.9285&mlon=19.3171#map=14/41.9285/19.3171"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm px-4 py-2 text-[11px] uppercase tracking-[0.28em] link-underline"
          >
            Open in maps →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
