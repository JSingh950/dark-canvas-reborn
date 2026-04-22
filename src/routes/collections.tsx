import { createFileRoute } from "@tanstack/react-router";
import cosmicImg from "@/assets/art-cosmic-pulse.jpg";
import emergenceImg from "@/assets/art-emergence.jpg";
import innerImg from "@/assets/art-inner-universe.jpg";
import visionImg from "@/assets/art-vision-worlds.jpg";
import sacredImg from "@/assets/art-sacred-geometry.jpg";
import horseImg from "@/assets/art-leaping-horse.jpg";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — Kim Mi Hyo Gallery" },
      { name: "description", content: "Seven thematic collections tracing the arc of Mi Hyo Kim's practice." },
      { property: "og:title", content: "Collections — Kim Mi Hyo Gallery" },
      { property: "og:description", content: "From meditative field paintings to visionary dreamscapes." },
    ],
  }),
  component: CollectionsPage,
});

const collections = [
  {
    num: "I", title: "Cosmic Pulse",
    caption: "Infinite texture, infinite depth",
    body: "Meditative field paintings that dissolve the boundary between surface and cosmos. Rendered mark by micro-mark — each a tiny floral form — the canvases pulse with latent energy.",
    img: cosmicImg,
  },
  {
    num: "II", title: "Emergence",
    caption: "Life force made visible",
    body: "Sacred creatures burst forth — a golden horse at full gallop, a sun rising in concentric rings of flower-petals over stippled water. Paintings of longing and the unstoppable will to become.",
    img: emergenceImg,
  },
  {
    num: "III", title: "Inner Universe",
    caption: "The architecture of the self",
    body: "Orbiting spheres and spiraling energies mirror unseen structures within. These works map emotional gravity and luminous pull.",
    img: innerImg,
  },
  {
    num: "IV", title: "Vision Worlds",
    caption: "The labyrinth of the subconscious",
    body: "Dense, immersive dreamscapes where faces, symbols and pattern overflow the canvas — signals from beyond.",
    img: visionImg,
  },
  {
    num: "V", title: "Sacred Geometry",
    caption: "Order beneath all things",
    body: "Gold leaf and indigo construct quiet diagrams of the universe — a return to first principles.",
    img: sacredImg,
  },
  {
    num: "VI", title: "Horizon & Threshold",
    caption: "Where one world ends, another begins",
    body: "Landscapes of passage — light spilling across edges, marking the moments of becoming.",
    img: horseImg,
  },
];

function CollectionsPage() {
  return (
    <>
      <section className="pt-44 pb-20 mx-auto max-w-[1600px] px-6 md:px-10">
        <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">Kim Mi Hyo Gallery</p>
        <h1 className="font-display text-[clamp(3rem,7vw,7rem)] leading-[0.95] text-ivory text-balance">
          Collections
        </h1>
        <p className="mt-8 max-w-2xl text-muted-foreground">
          Seven thematic collections tracing the arc of Mi Hyo Kim's practice —
          from meditative field paintings to visionary dreamscapes and the
          forces of emergence.
        </p>
      </section>

      <div className="hairline mx-auto max-w-[1600px]" />

      <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
          {collections.map((c) => (
            <article key={c.title} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                <span className="absolute top-5 left-5 font-display text-3xl text-ivory">{c.num}</span>
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold">
                {c.num} · {c.caption}
              </p>
              <h2 className="mt-3 font-display text-3xl text-ivory group-hover:text-gold transition-colors">
                {c.title}
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
