import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-[10px] uppercase tracking-[0.4em] text-gold">Error 404</p>
        <h1 className="mt-6 font-display text-7xl text-ivory">Lost in the gallery</h1>
        <p className="mt-6 text-sm text-muted-foreground">
          The page you're looking for has been moved, hung elsewhere, or never existed.
        </p>
        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex items-center gap-3 border-b border-gold pb-1 text-[11px] uppercase tracking-[0.3em] text-ivory hover:text-gold transition-colors"
          >
            Return home <span aria-hidden>→</span>
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
      { title: "Kim Mi Hyo Gallery — Contemporary Art Since 2007" },
      {
        name: "description",
        content:
          "Kim Mi Hyo Gallery presents Korean and international contemporary art from Jinju, South Korea — building bridges across culture, consciousness and creative tradition since 2007.",
      },
      { name: "author", content: "Kim Mi Hyo Gallery" },
      { property: "og:title", content: "Kim Mi Hyo Gallery" },
      {
        property: "og:description",
        content: "Contemporary art from Jinju, South Korea — since 2007.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="grain">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <SiteHeader />
      <main className="relative">
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}
