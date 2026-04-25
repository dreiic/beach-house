import { useState } from "react";
import { Reveal } from "./Reveal";
import { useSiteContent } from "./siteContent";

export function Inquiry() {
  const [sent, setSent] = useState(false);
  const { content } = useSiteContent();
  const { inquiry } = content;

  return (
    <section id="inquiry" className="bg-background py-32 md:py-48">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        <Reveal className="text-center mb-16 md:mb-20">
          <p className="mb-5 text-[11px] uppercase tracking-[0.42em] text-foreground/60">
            {inquiry.eyebrow}
          </p>
          <h2 className="font-serif text-[40px] md:text-[60px] leading-[1.02] tracking-[-0.015em]">
            {inquiry.title},<br />
            <em className="italic font-normal">{inquiry.emphasis}</em>
          </h2>
          <p className="mt-6 text-[14px] text-muted-foreground max-w-md mx-auto">{inquiry.text}</p>
        </Reveal>

        {sent ? (
          <Reveal className="text-center py-24 border-y border-border">
            <p className="font-serif italic text-4xl mb-4">{inquiry.thanksTitle}</p>
            <p className="text-muted-foreground">{inquiry.thanksText}</p>
          </Reveal>
        ) : (
          <Reveal delay={120}>
            <form
              onSubmit={(ev) => {
                ev.preventDefault();
                const formData = new FormData(ev.currentTarget);
                const value = (name: string) => String(formData.get(name) || "").trim();
                const lines = [
                  inquiry.whatsappIntro,
                  "",
                  `${inquiry.fields.name}: ${value("name")}`,
                  `${inquiry.fields.email}: ${value("email")}`,
                  `${inquiry.fields.arrival}: ${value("arrival")}`,
                  `${inquiry.fields.departure}: ${value("departure")}`,
                  `${inquiry.fields.guests}: ${value("guests")}`,
                  `${inquiry.fields.preference}: ${value("pref") || "-"}`,
                  `${inquiry.fields.message}: ${value("message") || "-"}`,
                ];
                window.open(
                  `https://wa.me/382696346761?text=${encodeURIComponent(lines.join("\n"))}`,
                  "_blank",
                  "noopener,noreferrer",
                );
                setSent(true);
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10"
            >
              <Field
                label={inquiry.fields.name}
                name="name"
                type="text"
                placeholder={inquiry.fields.namePlaceholder}
                required
              />
              <Field
                label={inquiry.fields.email}
                name="email"
                type="email"
                placeholder={inquiry.fields.emailPlaceholder}
                required
              />
              <Field label={inquiry.fields.arrival} name="arrival" type="date" required />
              <Field label={inquiry.fields.departure} name="departure" type="date" required />
              <Field
                label={inquiry.fields.guests}
                name="guests"
                type="number"
                placeholder="2"
                min={1}
                max={6}
                required
              />
              <Field
                label={inquiry.fields.preference}
                name="pref"
                type="text"
                placeholder={inquiry.fields.preferencePlaceholder}
              />

              <div className="md:col-span-2">
                <label className="block text-[11px] uppercase tracking-[0.32em] text-muted-foreground mb-3">
                  {inquiry.fields.message}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder={inquiry.fields.messagePlaceholder}
                  className="w-full bg-transparent border-b border-border py-3 text-[15px] outline-none focus:border-foreground transition-colors duration-500 resize-none"
                />
              </div>

              <div className="md:col-span-2 flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-4">
                <p className="text-xs text-muted-foreground max-w-sm">{inquiry.privacy}</p>
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-3 border border-foreground bg-foreground px-8 py-4 text-[12px] uppercase tracking-[0.28em] text-background transition-colors duration-500 hover:bg-transparent hover:text-foreground self-start md:self-auto"
                >
                  {inquiry.submit}
                  <span
                    aria-hidden
                    className="transition-transform duration-500 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </button>
              </div>
            </form>
          </Reveal>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-[0.32em] text-muted-foreground mb-3">
        {label}
      </label>
      <input
        {...props}
        className="w-full bg-transparent border-b border-border py-3 text-[15px] outline-none focus:border-foreground transition-colors duration-500 placeholder:text-muted-foreground/60"
      />
    </div>
  );
}
