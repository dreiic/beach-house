export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-28 pb-10">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-y-12 md:gap-x-12 pb-20 border-b border-background/20">
          <div className="col-span-12 md:col-span-6">
            <h3 className="font-serif text-[44px] md:text-[80px] leading-[0.95] tracking-[-0.02em] max-w-2xl">
              Bungalovi<br />
              <em className="italic font-normal text-background/80">Resorthome.</em>
            </h3>
            <p className="mt-8 max-w-md text-[14px] leading-relaxed text-background/70">
              Private bungalows on Pearl Beach, Velika Plaža — Ulcinj, Montenegro.
              Family-run, beachfront, hidden in the pines.
            </p>
          </div>

          <div className="col-span-6 md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.32em] text-background/50 mb-6">Contact</p>
            <ul className="space-y-3 text-[14px]">
              <li>
                <a href="tel:+38263461761" className="link-underline">
                  +382 63 461 761
                </a>
              </li>
              <li className="text-background/60">Viber · WhatsApp</li>
              <li className="text-background/60 pt-2">Pearl Beach, Velika Plaža</li>
              <li className="text-background/60">85360 Ulcinj, Montenegro</li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.32em] text-background/50 mb-6">Follow</p>
            <ul className="space-y-3 text-[14px]">
              <li>
                <a
                  href="https://instagram.com/bungalov__resorthome"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.openstreetmap.org/?mlat=41.9285&mlon=19.3171#map=14/41.9285/19.3171"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                >
                  Map
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[11px] uppercase tracking-[0.32em] text-background/50">
          <span>© {new Date().getFullYear()} Bungalovi Resorthome</span>
          <span>Booking 10 / 10 · Direct only · No commission</span>
        </div>
      </div>
    </footer>
  );
}
