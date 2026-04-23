import { createFileRoute } from "@tanstack/react-router";
import { artImages } from "@/lib/art-images";

const galleryImg = artImages.heartOfObangsaek;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Kim Mi Hyo Gallery" },
      {
        name: "description",
        content: "Founded in 2007 in Jinju, South Korea by artist and director Mi Hyo Kim.",
      },
      { property: "og:title", content: "About — Kim Mi Hyo Gallery" },
      {
        property: "og:description",
        content: "A space dedicated to Korean and international contemporary art.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="pt-44 pb-24 mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">
              About the Gallery
            </p>
            <h1 className="font-display text-[clamp(3rem,6vw,6rem)] leading-[0.95] text-ivory text-balance">
              A space for <em className="text-gold">infinite</em> potential.
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-10 pb-24">
        <div className="relative aspect-[21/9] overflow-hidden">
          <img
            src={galleryImg}
            alt="Gallery interior"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-border" />
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-24">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold">Est. 2007 · Jinju</p>
          </div>
          <div className="md:col-span-7 space-y-8 text-lg text-ivory leading-relaxed">
            <p>
              Kim Mi Hyo Gallery was founded in 2007 in Jinju, South Korea by artist and director Mi
              Hyo Kim — a space dedicated to Korean and international contemporary art.
            </p>
            <p className="text-muted-foreground">
              Inspired by the philosophy of infinite potential represented by the number "0," the
              gallery bridges diverse artistic traditions and has participated in over 100 global
              exhibitions since its founding — from Art Gwangju to World Art Dubai.
            </p>
            <p className="text-muted-foreground">
              Our programme moves between meditative field paintings, visionary dreamscapes, and the
              elemental forces of emergence — works that live, as we like to say, between worlds.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-12">Milestones</p>
          <div className="space-y-px bg-border">
            {[
              ["2007", "Founded in Jinju, South Korea"],
              ["2011", "Mi Hyo Kim · Artist of the Year"],
              ["2018", "International exhibition programme launched"],
              ["2024", "Art Gwangju · Booth D-21"],
              ["2025", "World Art Dubai · Cosmic Pulse"],
            ].map(([year, label]) => (
              <div key={year} className="bg-background grid grid-cols-12 gap-6 py-8">
                <p className="col-span-3 md:col-span-2 font-display text-3xl text-gold">{year}</p>
                <p className="col-span-9 md:col-span-10 text-ivory text-lg">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
