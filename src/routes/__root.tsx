import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { NotFoundScreen } from "@/components/not-found-screen";
import { Header } from "@/features/layout/components/header";
import { SITE } from "@/lib/site";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE.title },
      { name: "description", content: SITE.description },
      { property: "og:title", content: SITE.title },
      { property: "og:description", content: SITE.description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `${SITE.url}${SITE.icon}` },
      { property: "og:image:width", content: "512" },
      { property: "og:image:height", content: "512" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: SITE.icon },
    ],
  }),
  notFoundComponent: () => (
    <NotFoundScreen
      title="No such page"
      folder="portfolio/"
      back={{ href: "/", label: "Back home" }}
    />
  ),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="relative">
      <head>
        <HeadContent />
      </head>
      <body className="antialiased">
        <main className="pt-20 pb-10">
          <Header />
          {children}
        </main>
        <Scripts />
      </body>
    </html>
  );
}
