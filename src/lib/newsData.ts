export type NewsItem = {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content?: string;
  sourceUrl?: string;
};

// Curated only from: https://fluffy-curate-art-vault.base44.app/news
export const news: NewsItem[] = [
  {
    id: "scotsman-edinburgh-2025",
    title: "Edinburgh Art Fair 2025: 'Hundreds of works you can't see anywhere else in Scotland'",
    date: "September 9, 2025",
    category: "Press",
    excerpt:
      "The Scotsman highlights Kim Mi Hyo Gallery's return to Edinburgh Art Fair and notes the gallery's distinctive presentation.",
    sourceUrl:
      "https://www.scotsman.com/arts-and-culture/art/edinburgh-art-fair-2025-hundreds-of-works-you-cant-see-anywhere-else-in-scotland-5309537",
  },
  {
    id: "pressreader-scotsman-20250913",
    title: "Amazing Art for Every Wall — The Scotsman / PressReader",
    date: "September 13, 2025",
    category: "Press",
    excerpt:
      "PressReader republishes Scotsman coverage noting the gallery's participation at Edinburgh Art Fair.",
    sourceUrl: "https://www.pressreader.com/uk/the-scotsman/20250913/282840787193419",
  },
  {
    id: "thewfy-edinburgh-2025",
    title: "Edinburgh Art Fair: The Best Art Now On Display — The WFY",
    date: "September 2025",
    category: "Press",
    excerpt:
      "Coverage that lists Kim Mi Hyo Gallery among notable presentations at the fair, underscoring the gallery's international engagement.",
    sourceUrl: "https://thewfy.com/edinburgh-art-fair-the-best-art-now-on-display/",
  },
  {
    id: "art-gwangju-profile-2024",
    title: "Kim Mi Hyo Gallery — Art Gwangju Profile",
    date: "September 13, 2024",
    category: "Press",
    excerpt:
      "Art Gwangju lists Kim Mi Hyo Gallery in its directory and highlights the gallery's programming and participation in regional fairs.",
    sourceUrl: "https://artgwangju.kr/en/galleries/kim-mi-hyo-gallery/",
  },
  {
    id: "instagram-edinburgh-2024",
    title: "Welcome Back Mi Hyo — Edinburgh Art Fair Feature (Instagram)",
    date: "October 2024",
    category: "Social",
    excerpt:
      "Instagram posts noting Kim Mi Hyo Gallery's repeat appearances at the Edinburgh Art Fair and related moments from the fair.",
    sourceUrl: "https://www.instagram.com/p/DAIUFrIoiOw/",
  },
  {
    id: "instagram-world-art-dubai-2025",
    title: "World Art Dubai 2025 — Instagram Reel",
    date: "April 17, 2025",
    category: "Social",
    excerpt:
      "Reels and posts documenting the gallery's participation at World Art Dubai (Stand JC07).",
    sourceUrl: "https://www.instagram.com/reel/DIj7C5MTENP/",
  },
  {
    id: "wagames-2015",
    title: "World Art Games — Participant Record (2015 Catalogue)",
    date: "2015",
    category: "Archive",
    excerpt:
      "Catalogue entry listing Kim Mi Hyo among international participants in World Art Games activities and catalogues.",
    sourceUrl: "https://www.wagames.org/book2015/Katalog-Slovacka-2015-web.pdf",
  },
];

export default news;
