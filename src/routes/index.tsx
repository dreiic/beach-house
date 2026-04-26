import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { Bungalows } from "@/components/site/Bungalows";
import { Experience } from "@/components/site/Experience";
import { Testimonials } from "@/components/site/Testimonials";
import { Gallery } from "@/components/site/Gallery";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Location } from "@/components/site/Location";
import { Inquiry } from "@/components/site/Inquiry";
import { Footer } from "@/components/site/Footer";
import { LanguageProvider } from "@/components/site/siteContent";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bungalovi Resort Home — Smještaj na Velikoj plaži, Ulcinj" },
      {
        name: "description",
        content: "Smještaj na samoj obali mora u hladovini borove šume na Velikoj plaži u Ulcinju.",
      },
      { property: "og:title", content: "Bungalovi Resort Home — Velika plaža, Ulcinj" },
      {
        property: "og:description",
        content: "Probudite se uz šum talasa i uživajte u pogledu na more direktno sa terase.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <main className="bg-background text-foreground antialiased overflow-x-clip">
        <Nav />
        <Hero />
        <TrustStrip />
        <Bungalows />
        <Experience />
        <Testimonials />
        <Gallery />
        <HowItWorks />
        <Location />
        <Inquiry />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
