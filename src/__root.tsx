import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Bungalovi Resort Home - Smještaj na Velikoj plaži, Ulcinj" },
      { name: "description", content: "Pronađite savršen odmor na Velikoj plaži u Ulcinju. Nudimo luksuzne bungalove sa pogledom na more, privatnom plažom i pristupom svim sadržajima. Rezervišite odmah!" },
      { name: "keywords", content: "bungalovi, Ulcinj, Velika plaža, smještaj, apartmani, letovanje, Crna Gora, Montenegro, plaža, more, resort" },
      { name: "author", content: "Bungalovi Resort Home" },
      { name: "robots", content: "index, follow" },
      { name: "language", content: "sr-ME" },
      { name: "geo.region", content: "ME-20" },
      { name: "geo.placename", content: "Ulcinj" },
      { name: "geo.position", content: "41.929953;19.212883" },
      { name: "ICBM", content: "41.929953, 19.212883" },
      
      // Open Graph
      { property: "og:title", content: "Bungalovi Resort Home - Smještaj na Velikoj plaži, Ulcinj" },
      { property: "og:description", content: "Probudite se uz šum talasa i uživajte u pogledu na more direktno sa terase. Luksuzni bungalovi na Velikoj plaži u Ulcinju." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "sr_ME" },
      { property: "og:locale:alternate", content: "en_US" },
      { property: "og:site_name", content: "Bungalovi Resort Home" },
      
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Bungalovi Resort Home - Velika plaža, Ulcinj" },
      { name: "twitter:description", content: "Luksuzni bungalovi na Velikoj plaži u Ulcinju. Rezervišite svoj odmor danas!" },
      
      // Mobile
      { name: "theme-color", content: "#0ea5e9" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      { name: "apple-mobile-web-app-title", content: "Resort Home" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      // Favicons
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "manifest",
        href: "/site.webmanifest",
      },
      // Canonical URL - može se dinamički podesiti
      {
        rel: "canonical",
        href: "https://beach-house.com/",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "Bungalovi Resort Home",
    "description": "Smještaj na samoj obali mora u hladovini borove šume na Velikoj plaži u Ulcinju",
    "image": "https://beach-house.com/og-image.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ulcinj",
      "addressRegion": "Ulcinj",
      "addressCountry": "ME",
      "streetAddress": "Velika plaža"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.929953",
      "longitude": "19.212883"
    },
    "url": "https://beach-house.com",
    "telephone": "+382-XX-XXX-XXX",
    "priceRange": "€€",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Beach Access",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Sea View",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Private Beach",
        "value": true
      }
    ],
    "starRating": {
      "@type": "Rating",
      "ratingValue": "5"
    }
  };

  return (
    <html lang="sr">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
