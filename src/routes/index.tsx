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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bungalovi Resorthome — Beachfront Bungalows on Velika Plaža, Ulcinj" },
      {
        name: "description",
        content:
          "Private beachfront bungalows on Pearl Beach, Velika Plaža in Ulcinj, Montenegro. Hidden in the pines, family-run, direct booking only.",
      },
      { property: "og:title", content: "Bungalovi Resorthome — Pearl Beach, Velika Plaža" },
      {
        property: "og:description",
        content: "Wake up steps from the sea. Private bungalows hidden in the pines on Montenegro's longest beach.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground antialiased">
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
  );
}
