import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kim Mi Hyo Gallery" },
      {
        name: "description",
        content: "Inquire about works, visit the gallery in Jinju, or reach the team directly.",
      },
      { property: "og:title", content: "Contact — Kim Mi Hyo Gallery" },
      { property: "og:description", content: "We respond personally to every inquiry." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Use FormSubmit AJAX endpoint
      const resp = await fetch("https://formsubmit.co/ajax/Kimmihyo1@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const json = await resp.json();
      if (!resp.ok) throw new Error(json.message || "Failed to send");

      setSent(true);
      form.reset();
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      console.error(err);
      setError(
        "Failed to send message. Please try again or email us directly at Kimmihyo1@gmail.com.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="pt-44 pb-20 mx-auto max-w-[1600px] px-6 md:px-10">
        <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">Inquire</p>
        <h1 className="font-display text-[clamp(3rem,7vw,7rem)] leading-[0.95] text-ivory text-balance">
          Begin the <em className="text-gold">conversation</em>.
        </h1>
        <p className="mt-8 max-w-xl text-muted-foreground">
          Every inquiry is answered personally. Tell us what brought you here — a work, an
          exhibition, or simply a question.
        </p>
      </section>

      {/* Call Us Banner */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-10 pb-16">
        <div className="border border-gold/30 bg-gold/5 rounded-sm p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
          <div className="flex-shrink-0">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-2">Prefer to call?</p>
            <p className="text-muted-foreground text-sm max-w-xs">
              Reach us directly during gallery hours — Tuesday through Sunday, 11:00 to 18:00 KST.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <a
              href="tel:+828643253493"
              className="group inline-flex items-center gap-4 border border-border hover:border-gold px-6 py-4 transition-colors duration-300"
            >
              <span
                className="text-gold opacity-60 group-hover:opacity-100 transition-opacity"
                aria-hidden
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.27-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <div>
                <p className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-1">
                  Mobile
                </p>
                <p className="text-ivory text-sm font-light tracking-wide">+82 10 8643 2534</p>
              </div>
            </a>
            <a
              href="tel:+828622141862"
              className="group inline-flex items-center gap-4 border border-border hover:border-gold px-6 py-4 transition-colors duration-300"
            >
              <span
                className="text-gold opacity-60 group-hover:opacity-100 transition-opacity"
                aria-hidden
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.27-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <div>
                <p className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-1">
                  Gallery
                </p>
                <p className="text-ivory text-sm font-light tracking-wide">+82 862 214 1862</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-10 pb-32 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5 space-y-12">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">Gallery</p>
            <p className="text-ivory leading-relaxed">
              Kim Mi Hyo Gallery
              <br />
              Jinju-si, Gyeongsangnam-do
              <br />
              South Korea
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">Hours</p>
            <p className="text-ivory">Tuesday – Sunday · 11:00 – 18:00</p>
            <p className="text-muted-foreground mt-1 text-sm">Closed Mondays & national holidays</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">Phone</p>
            <a
              href="tel:+828643253493"
              className="text-ivory hover:text-gold transition-colors block"
            >
              +82 (10) 8643 2534 · Mobile
            </a>
            <a
              href="tel:+828622141862"
              className="text-ivory hover:text-gold transition-colors block mt-1"
            >
              +82 (862) 214 1862 · Gallery
            </a>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">Direct</p>
            <a
              href="mailto:Kimmihyo1@gmail.com"
              className="text-ivory hover:text-gold transition-colors"
            >
              Kimmihyo1@gmail.com
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

        <form className="md:col-span-7 space-y-8" onSubmit={handleSubmit}>
          <Field label="Name" name="name" />
          <Field label="Email" name="email" type="email" />
          <Field label="Subject" name="subject" />
          <div>
            <label className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
              Message
            </label>
            <textarea
              required
              name="message"
              rows={6}
              className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-ivory transition-colors resize-none"
            />
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          {sent && (
            <p className="text-sm text-gold/80 border border-gold/20 px-4 py-3">
              Your message has been sent — we'll be in touch shortly.
            </p>
          )}
          <button
            type="submit"
            disabled={sent || loading}
            className="inline-flex items-center gap-3 border-b border-gold pb-1 text-[11px] uppercase tracking-[0.3em] text-ivory hover:text-gold transition-colors disabled:opacity-50"
          >
            {loading ? "Sending..." : sent ? "Message sent · Thank you" : "Send Inquiry"}{" "}
            <span aria-hidden>→</span>
          </button>
        </form>
      </section>
    </>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3"
      >
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
