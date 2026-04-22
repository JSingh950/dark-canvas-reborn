import { createFileRoute, Link } from "@tanstack/react-router";
import { artImages } from "@/lib/art-images";

const heroImg = artImages.energyOfUniverse;
const cosmicImg = artImages.fieldsOfBeing;
const emergenceImg = artImages.birthOfNewHumanity;
const innerImg = artImages.orbitOfExistence;
const visionImg = artImages.eyeOfTheAbyss;
const sacredImg = artImages.aLineTowardYou;
const galleryImg = artImages.heartOfObangsaek;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kim Mi Hyo Gallery — Art That Lives Between Worlds" },
      {
        name: "description",
        content:
          "Korean and international contemporary art from Jinju, South Korea. Explore exhibitions, collections, and the philosophy of infinite potential.",
      },
      { property: "og:title", content: "Kim Mi Hyo Gallery — Art That Lives Between Worlds" },
      { property: "og:description", content: "Contemporary art from Jinju, South Korea — since 2007." },
    ],
  }),
  component: HomePage,
});

const marqueeItems = [
  "Cosmic Pulse", "Emergence", "Inner Universe", "Vision Worlds",
  "The Dreaming Eye", "Sacred Geometry", "Horizon & Threshold",
  "World Art Dubai 2025", "Art Gwangju 2024", "100+ Exhibitions",
  "Est. Jinju 2007", "Artist of the Year 2011",
];

const collections = [
  { num: "I", title: "Cosmic Pulse", caption: "Infinite texture, infinite depth", count: 3, img: cosmicImg },
  { num: "II", title: "Emergence", caption: "Life force made visible", count: 2, img: emergenceImg },
  { num: "III", title: "Inner Universe", caption: "The architecture of the self", count: 3, img: innerImg },
  { num: "IV", title: "Vision Worlds", caption: "The labyrinth of the subconscious", count: 3, img: visionImg },
  { num: "V", title: "Sacred Geometry", caption: "Order beneath all things", count: 4, img: sacredImg },
];

const news = [
  { tag: "Fair", title: "Kim Mi Hyo Gallery at World Art Dubai 2025", date: "April 17, 2025" },
  { tag: "Fair", title: "Art Gwangju 2024 · Booth D-21", date: "October 23, 2024" },
  { tag: "Essay", title: "The Philosophy of Zero: Infinite Potential as Artistic Mission", date: "March 2025" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Leaping Horse — Kim Mi Hyo, 2023"
            className="h-full w-full object-cover opacity-90"
            width={1280}
            height={1600}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10 pt-40 md:pt-56 pb-24 grid md:grid-cols-12 gap-10 min-h-screen">
          <div className="md:col-span-6 md:col-start-7 flex flex-col justify-end fade-up">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">
              Jinju, South Korea · Est. 2007
            </p>
            <h1 className="font-display text-[clamp(3rem,7vw,6.5rem)] leading-[0.95] text-ivory text-balance">
              Art That Lives <br />
              Between <em className="text-gold">Worlds</em>
            </h1>
            <p className="mt-8 max-w-lg text-base text-muted-foreground leading-relaxed">
              Kim Mi Hyo Gallery presents Korean and international contemporary
              art — building bridges across culture, consciousness and creative
              tradition since 2007.
            </p>
            <div className="mt-10 flex items-center gap-8">
              <Link
                to="/collections"
                className="group inline-flex items-center gap-3 border-b border-gold pb-1 text-[11px] uppercase tracking-[0.3em] text-ivory hover:text-gold transition-colors"
              >
                Explore Collections
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/exhibitions"
                className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground hover:text-gold transition-colors"
              >
                On view now
              </Link>
            </div>
          </div>

          <div className="absolute right-6 md:right-10 top-32 md:top-40 hidden md:block">
            <span className="font-display text-[9rem] lg:text-[14rem] leading-none text-ivory/[0.04] select-none">
              2007
            </span>
          </div>

          <div className="absolute left-6 md:left-10 bottom-10 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Leaping Horse · 2023 · 1 / 5
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border py-6 overflow-hidden bg-card/40">
        <div className="flex marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="mx-8 text-[11px] uppercase tracking-[0.4em] text-muted-foreground"
            >
              {item} <span className="text-gold ml-8">·</span>
            </span>
          ))}
        </div>
      </section>

      {/* CURRENT EXHIBITION */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-32">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-5">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">On View Now</p>
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-8">
              Current Exhibition
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-ivory leading-[1.05] text-balance">
              Cosmic Pulse: <em className="text-gold">Selected Works</em>
            </h2>
            <p className="mt-8 text-sm text-muted-foreground">Kim Mi Hyo</p>
            <p className="mt-2 text-sm text-ivory">
              Jan 15 – Mar 30, 2025 · Kim Mi Hyo Gallery, Jinju
            </p>
            <Link
              to="/exhibitions"
              className="mt-10 inline-flex items-center gap-3 border-b border-gold pb-1 text-[11px] uppercase tracking-[0.3em] text-ivory hover:text-gold transition-colors"
            >
              View Exhibition <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="md:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={galleryImg}
                alt="Gallery interior"
                className="h-full w-full object-cover"
                loading="lazy"
                width={1600}
                height={1000}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-border" />
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="bg-card/40 border-y border-border py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">Curated</p>
              <h2 className="font-display text-5xl md:text-6xl text-ivory">Collections</h2>
            </div>
            <Link
              to="/collections"
              className="text-[11px] uppercase tracking-[0.3em] text-ivory hover:text-gold transition-colors"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.slice(0, 4).map((c) => (
              <Link
                key={c.title}
                to="/collections"
                className="group block"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-5">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    width={1024}
                    height={1280}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 font-display text-2xl text-ivory">{c.num}</span>
                </div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  {c.num} · {c.caption}
                </p>
                <h3 className="mt-2 font-display text-2xl text-ivory group-hover:text-gold transition-colors">
                  {c.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">{c.count} works</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-40">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="font-display italic text-[10rem] leading-none text-gold/30">0</span>
          </div>
          <div className="md:col-span-9">
            <blockquote className="font-display text-3xl md:text-5xl leading-[1.2] text-ivory text-balance">
              "The number zero is not empty — it is infinite potential, the
              space where every possibility begins. Art lives in that same
              space: between what is and what could be."
            </blockquote>
            <p className="mt-10 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
              — Mi Hyo Kim, Director & Founder
            </p>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="border-t border-border py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">Latest</p>
              <h2 className="font-display text-5xl md:text-6xl text-ivory">News & Press</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {news.map((n, i) => (
              <article key={i} className="bg-background p-10 hover:bg-card transition-colors group cursor-pointer">
                <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-8">{n.tag}</p>
                <h3 className="font-display text-2xl md:text-3xl text-ivory group-hover:text-gold transition-colors leading-tight text-balance">
                  {n.title}
                </h3>
                <p className="mt-12 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                  {n.date}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-t border-border py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 grid md:grid-cols-3 gap-12">
          {[
            ["100+", "Global Shows"],
            ["2007", "Established"],
            ["7", "Featured Artists"],
          ].map(([n, l]) => (
            <div key={l} className="border-l border-gold/40 pl-8">
              <p className="font-display text-7xl md:text-8xl text-ivory leading-none">{n}</p>
              <p className="mt-4 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
