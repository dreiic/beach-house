import { Reveal } from "./Reveal";
import { useSiteContent } from "./siteContent";

export function Footer() {
  const { content } = useSiteContent();
  const { footer } = content;

  return (
    <footer className="bg-foreground text-background pt-28 pb-10">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-y-12 md:gap-x-12 pb-20 border-b border-background/20">
          <Reveal className="col-span-12 md:col-span-6">
            <h3 className="font-serif text-[44px] md:text-[80px] leading-[0.95] tracking-[-0.02em] max-w-2xl">
              {footer.title}
              <br />
              <em className="italic font-normal text-background/80">{footer.emphasis}</em>
            </h3>
            <p className="mt-8 max-w-md text-[14px] leading-relaxed text-background/70">
              {footer.text}
            </p>
          </Reveal>

          <Reveal delay={120} className="col-span-6 md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.32em] text-background/50 mb-6">
              {footer.contact}
            </p>
            <ul className="space-y-3 text-[14px]">
              <li>
                <a href={footer.phoneHref} className="link-underline">
                  {footer.phone}
                </a>
              </li>
              <li className="text-background/60">{footer.messaging}</li>
              <li className="text-background/60 pt-2">{footer.address1}</li>
              <li className="text-background/60">{footer.address2}</li>
            </ul>
          </Reveal>

          <Reveal delay={220} className="col-span-6 md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.32em] text-background/50 mb-6">
              {footer.follow}
            </p>
            <ul className="space-y-3 text-[14px]">
              <li>
                <a
                  href="https://instagram.com/bungalov__resorthome"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                >
                  @bungalov__resorthome
                </a>
              </li>
              <li>
                <a
                  href={footer.facebookHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                >
                  {footer.facebook}
                </a>
              </li>
              <li>
                <a
                  href="https://www.openstreetmap.org/?mlat=41.9064249&mlon=19.2610213#map=15/41.9064249/19.2610213"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                >
                  {footer.map}
                </a>
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal
          delay={120}
          y={10}
          className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[11px] uppercase tracking-[0.32em] text-background/50"
        >
          <span>© {new Date().getFullYear()} Bungalovi Resorthome</span>
          <span className="normal-case tracking-[0.18em]">
            powered by{" "}
            <a
              href="https://nextup-agency.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-background/70 transition-colors duration-300 hover:text-background"
            >
              NextUp
            </a>
          </span>
        </Reveal>
      </div>
    </footer>
  );
}
