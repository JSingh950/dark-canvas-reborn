import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { artImages, collections } from "@/lib/art-images";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — Kim Mi Hyo Gallery" },
      {
        name: "description",
        content:
          "Seven thematic collections tracing the arc of Mi Hyo Kim's practice — from meditative field paintings to visionary dreamscapes.",
      },
      { property: "og:title", content: "Collections — Kim Mi Hyo Gallery" },
      {
        property: "og:description",
        content: "Seven thematic collections — over 50 works of contemporary Korean art.",
      },
      { property: "og:image", content: artImages.heartOfObangsaek },
    ],
  }),
  component: CollectionsPage,
});

const FILTERS = [
  { slug: "all", label: "All Collections" },
  ...collections.map((c) => ({ slug: c.slug, label: `${c.num}. ${c.title}` })),
];

function CollectionsPage() {
  const [active, setActive] = useState<string>("all");
  const visible = active === "all" ? collections : collections.filter((c) => c.slug === active);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={artImages.heartOfObangsaek}
            alt="Collections"
            className="h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/40" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10 pt-44 pb-20">
          <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">
            Kim Mi Hyo Gallery
          </p>
          <h1 className="font-display text-[clamp(3rem,8vw,8rem)] leading-[0.92] text-ivory text-balance">
            Collections
          </h1>
          <p className="mt-8 max-w-2xl text-muted-foreground leading-relaxed">
            Seven thematic collections tracing the arc of Mi Hyo Kim's practice — from meditative
            field paintings to visionary dreamscapes and the forces of emergence.
          </p>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="sticky top-0 z-40 bg-background border-b border-border">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-5 flex flex-wrap gap-x-8 gap-y-3">
          {FILTERS.map((f) => (
            <button
              key={f.slug}
              onClick={() => setActive(f.slug)}
              className={`text-[10px] uppercase tracking-[0.3em] transition-colors ${
                active === f.slug ? "text-gold" : "text-muted-foreground hover:text-ivory"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* COLLECTIONS */}
      {visible.map((c) => (
        <section key={c.slug} className="py-24 border-b border-border">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="grid md:grid-cols-12 gap-10 mb-16">
              <div className="md:col-span-2">
                <span className="font-display text-[6rem] md:text-[8rem] leading-none text-gold/40">
                  {c.num}
                </span>
              </div>
              <div className="md:col-span-7">
                <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">{c.caption}</p>
                <h2 className="font-display text-5xl md:text-6xl text-ivory text-balance">
                  {c.title}
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed max-w-xl">{c.body}</p>
              </div>
              <div className="md:col-span-3 flex md:justify-end md:items-end">
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  {c.works.length} works
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {c.works.map((w) => (
                <article key={w.title} className="group">
                  <div className="relative aspect-[3/4] overflow-hidden mb-5 bg-card">
                    <img
                      src={w.img}
                      alt={w.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-border/60" />
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">{c.title}</p>
                  <h3 className="font-display text-2xl text-ivory group-hover:text-gold transition-colors">
                    {w.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">Kim Mi Hyo</p>
                  <a
                    href={`mailto:Hoaga123@naver.com?subject=Inquiry:%20${encodeURIComponent(w.title)}`}
                    className="mt-4 inline-block text-[10px] uppercase tracking-[0.3em] text-muted-foreground border-b border-border hover:text-gold hover:border-gold transition-colors pb-1"
                  >
                    Inquire →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
