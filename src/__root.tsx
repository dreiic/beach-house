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
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
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

      // 🔥 TITLE
      { title: "Bungalovi Ulcinj | Smještaj Velika Plaža Montenegro Beach Resort" },

      // 🔥 DESCRIPTION
      {
        name: "description",
        content:
          "Bungalovi u Ulcinju na Velikoj plaži. Smještaj uz more, terasa, prirodan ambijent i direktna rezervacija bez provizije.",
      },

      // optional keywords
      {
        name: "keywords",
        content:
          "bungalovi ulcinj, smjestaj ulcinj, velika plaza ulcinj, apartmani ulcinj, beach resort montenegro, ulcinj accommodation",
      },

      { name: "author", content: "Montenegro Beach Resort" },
      { name: "robots", content: "index, follow" },

      // GEO
      { name: "geo.region", content: "ME-20" },
      { name: "geo.placename", content: "Ulcinj" },
      { name: "geo.position", content: "41.929953;19.212883" },
      { name: "ICBM", content: "41.929953, 19.212883" },

      // 🔥 OPEN GRAPH
      { property: "og:title", content: "Bungalovi Ulcinj | Montenegro Beach Resort" },
      {
        property: "og:description",
        content:
          "Uživajte u bungalovima na Velikoj plaži u Ulcinju. Pogled na more, priroda i miran odmor.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://montenegrobeachresort.com" },
      { property: "og:image", content: "https://montenegrobeachresort.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:site_name", content: "Montenegro Beach Resort" },
      { property: "og:locale", content: "sr_ME" },

      // 🔥 TWITTER
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Bungalovi Ulcinj | Montenegro Beach Resort" },
      {
        name: "twitter:description",
        content:
          "Smještaj na Velikoj plaži u Ulcinju. Direktna rezervacija bez provizije.",
      },
      { name: "twitter:image", content: "https://montenegrobeachresort.com/og-image.jpg" },

      // MOBILE
      { name: "theme-color", content: "#0ea5e9" },
    ],

    links: [
      { rel: "stylesheet", href: appCss },

      // favicons
      { rel: "icon", href: "/favicon.ico" },
      { rel: "icon", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "icon", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },

      // 🔥 canonical
      {
        rel: "canonical",
        href: "https://montenegrobeachresort.com/",
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
    name: "Montenegro Beach Resort",
    description:
      "Bungalovi na Velikoj plaži u Ulcinju. Smještaj uz more u prirodnom ambijentu.",
    image: "https://montenegrobeachresort.com/og-image.jpg",
    url: "https://montenegrobeachresort.com",
    telephone: "+38263461761",
    priceRange: "€€",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Ulcinj",
      addressCountry: "ME",
      streetAddress: "Velika plaža",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: "41.929953",
      longitude: "19.212883",
    },

    sameAs: [
      "https://www.instagram.com/bungalov__resorthome/",
    ],

    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Beach Access", value: true },
      { "@type": "LocationFeatureSpecification", name: "Sea View", value: true },
      { "@type": "LocationFeatureSpecification", name: "Terrace", value: true },
    ],
  };

  return (
    <html lang="sr-ME">
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