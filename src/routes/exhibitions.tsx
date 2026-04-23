import { createFileRoute } from "@tanstack/react-router";
import { artImages } from "@/lib/art-images";

const galleryImg = artImages.heartOfObangsaek;
const cosmicImg = artImages.fieldsOfBeing;
const sacredImg = artImages.aLineTowardYou;

export const Route = createFileRoute("/exhibitions")({
  head: () => ({
    meta: [
      { title: "Exhibitions — Kim Mi Hyo Gallery" },
      {
        name: "description",
        content: "Current and upcoming exhibitions at Kim Mi Hyo Gallery, Jinju, South Korea.",
      },
      { property: "og:title", content: "Exhibitions — Kim Mi Hyo Gallery" },
      {
        property: "og:description",
        content: "Current and upcoming exhibitions in Jinju and abroad.",
      },
    ],
  }),
  component: ExhibitionsPage,
});

const exhibitions = [
  {
    status: "On View",
    title: "Cosmic Pulse: Selected Works",
    artist: "Kim Mi Hyo",
    dates: "Jan 15 – Mar 30, 2025",
    venue: "Kim Mi Hyo Gallery, Jinju",
    img: cosmicImg,
  },
  {
    status: "Upcoming",
    title: "The Dreaming Eye",
    artist: "Group Exhibition",
    dates: "Apr 12 – Jun 8, 2025",
    venue: "Main Hall, Jinju",
    img: sacredImg,
  },
  {
    status: "Past",
    title: "World Art Dubai 2025",
    artist: "Kim Mi Hyo Gallery",
    dates: "Apr 17 – 20, 2025",
    venue: "Dubai World Trade Centre",
    img: galleryImg,
  },
];

const exhibitionsTimeline = [
  {
    year: 2025,
    events: [
      {
        date: "Jan 15 – Mar 30, 2025",
        title: "Cosmic Pulse: Selected Works",
        venue: "Kim Mi Hyo Gallery, Jinju",
      },
      {
        date: "Apr 17, 2025",
        title: "Moon · Light · Island — World Art Dubai JC07",
        venue: "Dubai World Trade Centre",
      },
      { date: "Apr 12 – Jun 8, 2025", title: "The Dreaming Eye", venue: "Main Hall, Jinju" },
    ],
  },
  {
    year: 2024,
    events: [
      {
        date: "Oct 23, 2024",
        title: "Art Gwangju 2024: Booth D-21",
        venue: "Kimdaejung Convention Centre, Gwangju",
      },
      {
        date: "2024",
        title: "Emptiness and Joy — Art Gwangju D-21",
        venue: "Kimdaejung Convention Centre, Gwangju",
      },
    ],
  },
  {
    year: 2023,
    events: [
      { date: "2023", title: "Sacred Geometries", venue: "Kim Mi Hyo Gallery, Jinju" },
      { date: "2023", title: "Vision Worlds", venue: "Seoul Art Fair, Seoul" },
    ],
  },
  {
    year: 2022,
    events: [{ date: "2022", title: "Emergence: New Works", venue: "Busan Art Fair, Busan" }],
  },
  {
    year: 2012,
    events: [
      {
        date: "2012",
        title: "100 Korea Women's Exhibition",
        venue: "Heterozygous Art Center, Seoul",
      },
    ],
  },
  {
    year: 2011,
    events: [
      {
        date: "2011",
        title: "Invited Exhibition",
        venue: "Heterozygous Arts Center, Seoul",
        note: "Invited",
      },
      {
        date: "2011",
        title: "Invited Exhibition — Artist of the Year",
        venue: "Heterozygous Art Center, Seoul",
        note: "Award",
      },
    ],
  },
  {
    year: 2010,
    events: [
      {
        date: "2010",
        title: "Korea–China Exchange Exhibition",
        venue: "Cultural Arts Center, Jinju",
      },
    ],
  },
  {
    year: 2005,
    events: [
      {
        date: "2005",
        title: "Jinju Fine Arts Association Exhibition",
        venue: "Cultural Arts Center, Jinju",
      },
    ],
  },
  {
    year: 2002,
    events: [
      { date: "2002", title: "Nine Nude Drawing", venue: "Pay Gallery, Jinju", note: "Solo" },
      {
        date: "2002",
        title: "Western Painting Artists",
        venue: "Jinju Cultural and Arts Center, Jinju",
        note: "Group",
      },
      { date: "2002", title: "Esprit de Corée V", venue: "Paris, France", note: "Group" },
    ],
  },
  {
    year: 1994,
    events: [
      { date: "1994", title: "Human-art 94", venue: "Cultural Arts Center, Busan", note: "Group" },
    ],
  },
  {
    year: 1989,
    events: [
      {
        date: "1989–1994",
        title: "Early Career Group Exhibitions",
        venue: "Various venues · Busan & Jinju, South Korea",
        note: "Group",
      },
    ],
  },
  { year: 2007, events: [{ date: "2007", title: "Gallery Founded", venue: "Jinju, South Korea" }] },
];

function ExhibitionsPage() {
  return (
    <>
      <section className="pt-44 pb-20 mx-auto max-w-[1600px] px-6 md:px-10">
        <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">Programme</p>
        <h1 className="font-display text-[clamp(3rem,7vw,7rem)] leading-[0.95] text-ivory text-balance">
          Exhibitions
        </h1>
        <p className="mt-8 max-w-2xl text-muted-foreground">
          A continuous dialogue between artist and viewer — selected presentations across our home
          in Jinju and partner spaces worldwide.
        </p>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-20">
        <h3 className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">
          Exhibitions Timeline
        </h3>
        <div className="space-y-10">
          {exhibitionsTimeline.map((t) => (
            <div key={t.year}>
              <h4 className="font-display text-2xl text-ivory mb-4">{t.year}</h4>
              <ul className="list-disc pl-6 text-muted-foreground">
                {t.events.map((ev, idx) => (
                  <li key={idx} className="mb-2">
                    <strong className="text-ivory">{ev.title}</strong> — {ev.date} ·{" "}
                    <span className="text-muted-foreground">{ev.venue}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="hairline mx-auto max-w-[1600px]" />

      <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-20 space-y-32">
        {exhibitions.map((e, i) => (
          <article
            key={i}
            className={`grid md:grid-cols-12 gap-10 items-center ${
              i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="md:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden group">
                <img
                  src={e.img}
                  alt={e.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-border" />
              </div>
            </div>
            <div className="md:col-span-5">
              <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">{e.status}</p>
              <h2 className="font-display text-4xl md:text-5xl text-ivory leading-[1.05] text-balance">
                {e.title}
              </h2>
              <p className="mt-8 text-sm text-muted-foreground">{e.artist}</p>
              <p className="mt-1 text-sm text-ivory">{e.dates}</p>
              <p className="mt-1 text-sm text-muted-foreground">{e.venue}</p>
              <button className="mt-10 inline-flex items-center gap-3 border-b border-gold pb-1 text-[11px] uppercase tracking-[0.3em] text-ivory hover:text-gold transition-colors">
                View Details <span aria-hidden>→</span>
              </button>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
