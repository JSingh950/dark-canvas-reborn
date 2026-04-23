import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kim Mi Hyo Gallery" },
      {
        name: "description",
        content: "Contact information for Kim Mi Hyo Gallery, Jinju, South Korea.",
      },
      { property: "og:title", content: "Contact — Kim Mi Hyo Gallery" },
      { property: "og:description", content: "Contact details and visiting information." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="pt-44 pb-20 mx-auto max-w-[1600px] px-6 md:px-10 text-center">
        <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">Contact</p>
        <h1 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[0.95] text-ivory">
          Contact <em className="text-gold">Information</em>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
          Reach the gallery directly by phone or email. For visits, we are open Tuesday through
          Sunday, 11:00–18:00 KST.
        </p>
      </section>

      <section className="mx-auto max-w-[900px] px-6 md:px-10 pb-32">
        <div className="bg-background/40 rounded-sm p-10 text-center">
          <h3 className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">Gallery</h3>
          <p className="text-ivory leading-relaxed mb-4">
            Kim Mi Hyo Gallery
            <br />
            Jinju-si, Gyeongsangnam-do
            <br />
            South Korea
          </p>

          <h4 className="text-[10px] uppercase tracking-[0.4em] text-gold mb-2">Hours</h4>
          <p className="text-ivory mb-4">Tuesday – Sunday · 11:00 – 18:00</p>

          <h4 className="text-[10px] uppercase tracking-[0.4em] text-gold mb-2">Phone</h4>
          <p className="text-ivory mb-1">+82 (10) 8643 2534 · Mobile</p>
          <p className="text-ivory mb-4">+82 (862) 214 1862 · Gallery</p>

          <h4 className="text-[10px] uppercase tracking-[0.4em] text-gold mb-2">Direct</h4>
          <p className="text-ivory mb-2">
            <a href="mailto:Kimmihyo1@gmail.com" className="hover:text-gold transition-colors">
              Kimmihyo1@gmail.com
            </a>
          </p>
          <p>
            <a
              href="https://instagram.com/mi.hyo_"
              target="_blank"
              rel="noreferrer"
              className="text-ivory hover:text-gold transition-colors"
            >
              @mi.hyo_ ↗
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
