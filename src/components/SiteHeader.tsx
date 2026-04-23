import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { loadGoogleTranslate, setGoogleTranslateCookie, getCurrentGoogleLang } from "@/lib/i18n";

const nav = [
  { to: "/", label: "Home" },
  { to: "/exhibitions", label: "Exhibitions" },
  { to: "/collections", label: "Collections" },
  { to: "/news", label: "News" },
  { to: "/book", label: "100 Miracle" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    let lastY = window.scrollY;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 24);
        if (y <= 10) setHidden(false);
        else if (y > lastY && y > 80) setHidden(true);
        else if (y < lastY) setHidden(false);
        lastY = y;
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Load Google Translate widget (hidden) so we can toggle programmatically
    try {
      // create hidden container for the translate element if missing
      if (!document.getElementById("google_translate_element")) {
        const d = document.createElement("div");
        d.id = "google_translate_element";
        d.style.display = "none";
        document.body.appendChild(d);
      }
      loadGoogleTranslate();
      // initialize language state from cookie
      const lang = getCurrentGoogleLang();
      setLang(lang === "ko" ? "ko" : "en");
    } catch (e) {
      // ignore
    }
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${scrolled ? "bg-background/95 border-b border-border" : "bg-transparent"}`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="group flex items-center gap-3">
          <span className="font-display text-lg tracking-[0.25em] text-ivory">KIM MI HYO</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => {
              const next = lang === "en" ? "ko" : "en";
              try {
                // set cookie to instruct Google Translate and reload to apply
                setGoogleTranslateCookie(lang, next);
                // reload to let Google Translate apply (required for cookie-based switch)
                window.location.reload();
              } catch (e) {
                // fallback
                setLang(next);
              }
            }}
            className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground hover:text-gold transition-colors"
          >
            <span className={lang === "ko" ? "text-ivory" : ""}>KO</span> /{" "}
            <span className={lang === "en" ? "text-ivory" : ""}>EN</span>
          </button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-ivory" aria-label="Menu">
          <div className="space-y-1.5">
            <span
              className={`block h-px w-6 bg-current transition ${open ? "translate-y-[6px] rotate-45" : ""}`}
            />
            <span className={`block h-px w-6 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-px w-6 bg-current transition ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col p-6 gap-5">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-gold"
                activeProps={{ className: "text-gold" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
