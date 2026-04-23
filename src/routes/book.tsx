import React, { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { artImages } from "@/lib/art-images";

function ModelViewer({ src, poster, alt }: { src: string; poster?: string; alt?: string }) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current as HTMLElement | null;
    if (!el) return;
    el.setAttribute("src", src);
    if (poster) el.setAttribute("poster", poster);
    if (alt) el.setAttribute("alt", alt);
    el.setAttribute("ar-modes", "webxr scene-viewer quick-look");
    el.setAttribute("camera-controls", "");
    el.setAttribute("auto-rotate", "");
    el.setAttribute("exposure", "1");
  }, [src, poster, alt]);

  return React.createElement("model-viewer", {
    ref: ref as any,
    className: "h-full w-full object-cover",
  });
}

function BookMedia({ poster }: { poster?: string }) {
  const [showModel, setShowModel] = useState(false);
  const cover = poster || "/book.png";

  return (
    <div className="h-full w-full relative">
      {!showModel && (
        <img src={cover} alt="100 Miracle book cover" className="h-full w-full object-cover" />
      )}
      {showModel && (
        <iframe
          src="/book_3d.html"
          title="100 Miracle 3D book"
          className="absolute inset-0 w-full h-full border-0"
          style={{ width: '100%', height: '100%' }}
        />
      )}
      <div className="absolute left-4 bottom-4">
        <button
          onClick={() => setShowModel((s) => !s)}
          className="bg-gold text-background px-4 py-2 text-[11px] uppercase tracking-[0.2em]"
        >
          {showModel ? "Show Cover" : "View 3D"}
        </button>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "100 Miracle — A Monograph by Kim Mi Hyo" },
      {
        name: "description",
        content:
          "100 Miracle: a visual memoir and monograph by Kim Mi Hyo. Hardcover, limited run — reserve directly through the gallery.",
      },
      { property: "og:title", content: "100 Miracle — A Monograph by Kim Mi Hyo" },
      {
        property: "og:description",
        content:
          "Evocative paintings alongside reflections on creativity, resilience, and quiet wonder.",
      },
      { property: "og:image", content: "/book.png" },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  const localCover = "/book.png";

  return (
    <>
      {/* HERO */}
      <section className="pt-32 md:pt-44 pb-24 mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 fade-up">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-8">
              Publication · Kim Mi Hyo Gallery
            </p>
            <h1 className="font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.92] text-ivory text-balance">
              100 <em className="text-gold">Miracle</em>
            </h1>
            <p className="mt-8 max-w-lg text-base text-muted-foreground leading-relaxed">
              A visual memoir and monograph: evocative paintings alongside reflections on
              creativity, resilience, and quiet wonder. For anyone who wants the next page to feel
              different — and for shelves that hold more than objects.
            </p>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              <span>Monograph</span>
              <span className="text-gold">·</span>
              <span>Kim Mi Hyo</span>
              <span className="text-gold">·</span>
              <span>Hardcover</span>
              <span className="text-gold">·</span>
              <span>Limited run</span>
            </div>

            <div className="mt-12 border-t border-border pt-8">
              <p className="font-display text-5xl text-ivory">
                $75.00 <span className="text-base text-muted-foreground tracking-normal">USD</span>
              </p>
              <p className="mt-3 text-xs text-muted-foreground">
                + shipping · sold through the gallery
              </p>
            </div>

            <p className="mt-8 max-w-md text-sm text-muted-foreground leading-relaxed">
              Email your city and how many copies you need. We confirm availability, send a total
              with careful packing and courier options, and arrange payment by invoice.
            </p>

            <div className="mt-10 flex flex-wrap gap-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-gold text-background px-8 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-gold/90 transition-colors"
              >
                Reserve →
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-border text-ivory px-8 py-4 text-[10px] uppercase tracking-[0.3em] hover:border-gold hover:text-gold transition-colors"
              >
                Contact the gallery
              </Link>
            </div>
          </div>

          <div className="md:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden bg-card">
              <BookMedia poster={localCover} />
              <div className="absolute inset-0 ring-1 ring-inset ring-border" />
            </div>
            <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-muted-foreground text-right">
              100 Miracle · Hardcover · 2024
            </p>
          </div>
        </div>
      </section>

      {/* HOW TO ORDER */}
      <section className="bg-card/40 border-y border-border py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-10 mb-20">
            <div className="md:col-span-4">
              <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">How to order</p>
              <h2 className="font-display text-5xl md:text-6xl text-ivory leading-[1.05]">
                Three simple <em className="text-gold">steps</em>
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6 flex items-end">
              <p className="text-muted-foreground leading-relaxed">
                You are not clicking "buy now" into the void — you are starting a conversation with
                the gallery. We handle each request personally.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-border">
            {[
              {
                n: "1",
                body: "Send one email: your country, number of copies, and one line about why this book found you now.",
              },
              {
                n: "2",
                body: "We reply with stock confirmation, price, shipping estimate, and payment options.",
              },
              {
                n: "3",
                body: "Once reserved, your copy is packed like a work leaving the wall — pickup in Jinju or delivery worldwide.",
              },
            ].map((s) => (
              <div key={s.n} className="bg-background p-12">
                <span className="font-display text-7xl text-gold/60">{s.n}</span>
                <p className="mt-10 text-sm text-ivory leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE COLUMNS */}
      <section className="py-32 mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              h: "For collectors",
              p: "Own a substantial volume that carries the gallery's philosophy of infinite potential — an object you return to, not one you file away.",
            },
            {
              h: "For gifting",
              p: "Ideal for readers of contemporary Korean art, abstract color, and reflective narrative. Ask us about multiple copies or a short dedication note.",
            },
            {
              h: "Why order from the gallery",
              p: "Every copy is fulfilled with the same care as an artwork: clear communication, careful packing, and direct support if customs or delivery needs extra detail.",
            },
          ].map((c) => (
            <div key={c.h} className="border-l border-gold/40 pl-8">
              <h3 className="font-display text-2xl text-ivory">{c.h}</h3>
              <p className="mt-6 text-sm text-muted-foreground leading-relaxed">{c.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-ivory text-balance max-w-3xl mx-auto leading-[1.15]">
            Questions about payment, timing, or international <em className="text-gold">shipping?</em>
          </h2>
          <p className="mt-6 text-muted-foreground">We would rather answer in person than leave you guessing at checkout.</p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 border-b border-gold pb-1 text-[11px] uppercase tracking-[0.3em] text-ivory hover:text-gold transition-colors"
          >
            Write to the gallery →
          </Link>
        </div>
      </section>
    </>
  );
}

export default BookPage;
