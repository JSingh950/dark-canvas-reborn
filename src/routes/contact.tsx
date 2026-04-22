import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kim Mi Hyo Gallery" },
      { name: "description", content: "Inquire about works, visit the gallery in Jinju, or reach the team directly." },
      { property: "og:title", content: "Contact — Kim Mi Hyo Gallery" },
      { property: "og:description", content: "We respond personally to every inquiry." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="pt-44 pb-20 mx-auto max-w-[1600px] px-6 md:px-10">
        <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">Inquire</p>
        <h1 className="font-display text-[clamp(3rem,7vw,7rem)] leading-[0.95] text-ivory text-balance">
          Begin the <em className="text-gold">conversation</em>.
        </h1>
        <p className="mt-8 max-w-xl text-muted-foreground">
          Every inquiry is answered personally. Tell us what brought you here —
          a work, an exhibition, or simply a question.
        </p>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-10 pb-32 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5 space-y-12">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">Gallery</p>
            <p className="text-ivory leading-relaxed">
              Kim Mi Hyo Gallery<br />
              Jinju-si, Gyeongsangnam-do<br />
              South Korea
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">Hours</p>
            <p className="text-ivory">Tuesday – Sunday · 11:00 – 18:00</p>
            <p className="text-muted-foreground mt-1 text-sm">Closed Mondays & national holidays</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">Direct</p>
            <a href="mailto:Hoaga123@naver.com" className="text-ivory hover:text-gold transition-colors">
              Hoaga123@naver.com
            </a>
            <p className="mt-3">
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
        </div>

        <form
          className="md:col-span-7 space-y-8"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <Field label="Name" name="name" />
          <Field label="Email" name="email" type="email" />
          <Field label="Subject" name="subject" />
          <div>
            <label className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
              Message
            </label>
            <textarea
              required
              rows={6}
              className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-ivory transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={sent}
            className="inline-flex items-center gap-3 border-b border-gold pb-1 text-[11px] uppercase tracking-[0.3em] text-ivory hover:text-gold transition-colors disabled:opacity-50"
          >
            {sent ? "Message sent · Thank you" : "Send Inquiry"} <span aria-hidden>→</span>
          </button>
        </form>
      </section>
    </>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-ivory transition-colors"
      />
    </div>
  );
}
