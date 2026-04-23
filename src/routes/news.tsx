import { createFileRoute } from "@tanstack/react-router";
import news from "@/lib/newsData";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News — Kim Mi Hyo Gallery" },
      { name: "description", content: "Latest news and press about Kim Mi Hyo and the gallery." },
    ],
  }),
  component: NewsPage,
});

function NewsPage() {
  return (
    <section className="pt-44 pb-20 mx-auto max-w-[1200px] px-6 md:px-10">
      <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">News & Press</p>
      <h1 className="font-display text-4xl md:text-6xl text-ivory mb-6">Latest News</h1>

      <div className="grid gap-10">
        {news.map((n) => (
          <article key={n.id} className="border-b border-border pb-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
              {n.category}
            </p>
            <h2 className="text-2xl text-ivory mb-2">{n.title}</h2>
            <p className="text-sm text-muted-foreground">{n.date}</p>
            <p className="mt-4 text-muted-foreground">{n.excerpt}</p>
            <div className="mt-4">
              <details className="text-sm text-foreground bg-muted p-4 rounded">
                <summary className="cursor-pointer">Read full</summary>
                <div className="mt-3 whitespace-pre-line">{n.content}</div>
                <p className="mt-3 text-xs text-muted-foreground">
                  Source:{" "}
                  <a href={n.sourceUrl} target="_blank" rel="noreferrer" className="underline">
                    Original article
                  </a>
                </p>
              </details>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default NewsPage;
