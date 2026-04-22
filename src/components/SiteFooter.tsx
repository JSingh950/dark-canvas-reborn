import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border mt-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-4xl md:text-5xl text-ivory leading-[1.05] text-balance">
              Founded on <em className="text-gold">infinite</em> possibility.
            </p>
            <p className="mt-6 max-w-md text-sm text-muted-foreground leading-relaxed">
              Jinju, South Korea — Est. 2007. A gallery dedicated to Korean and
              international contemporary art, building bridges across culture
              and consciousness.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-5">Visit</p>
            <p className="text-sm text-ivory leading-relaxed">
              Kim Mi Hyo Gallery<br />
              Jinju-si, Gyeongsangnam-do<br />
              South Korea
            </p>
            <p className="mt-5 text-sm text-muted-foreground">Tue–Sun · 11–18</p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-5">Index</p>
            <ul className="space-y-3 text-sm">
              {[
                ["/exhibitions", "Exhibitions"],
                ["/collections", "Collections"],
                ["/about", "About"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-ivory hover:text-gold transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://instagram.com/mi.hyo_"
                  target="_blank"
                  rel="noreferrer"
                  className="text-ivory hover:text-gold transition-colors"
                >
                  Instagram ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          <p>© 2025 Kim Mi Hyo Gallery — All rights reserved</p>
          <p>Crafted in Jinju · Shown to the world</p>
        </div>
      </div>
    </footer>
  );
}
