export type NewsItem = {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content?: string;
  image?: string;
  sourceUrl?: string;
};

export const news: NewsItem[] = [
  {
    id: "world-art-dubai-2025",
    title: "Kim Mi Hyo Gallery at World Art Dubai 2025",
    date: "April 17, 2025",
    category: "Fair",
    excerpt: "Kim Mi Hyo Gallery presents a selection of recent works at World Art Dubai 2025.",
    content:
      "Kim Mi Hyo Gallery presented a selection of recent and archival works at World Art Dubai 2025. The booth focused on field paintings and new experiments in texture and color. (Source: art-website-hazel)",
    image: undefined,
    sourceUrl: "https://art-website-hazel.vercel.app/",
  },
  {
    id: "art-gwangju-2024",
    title: "Art Gwangju 2024: Booth D-21",
    date: "October 23, 2024",
    category: "Fair",
    excerpt: "Kim Mi Hyo Gallery exhibited at Art Gwangju 2024, Booth D-21.",
    content:
      "Kim Mi Hyo Gallery participated in Art Gwangju 2024 at Booth D-21, showing a concise survey of recent paintings and installations. (Source: art-website-hazel)",
    image: undefined,
    sourceUrl: "https://art-website-hazel.vercel.app/",
  },
  {
    id: "philosophy-of-zero",
    title: "The Philosophy of Zero: Infinite Potential as Artistic Mission",
    date: "March 2025",
    category: "Essay",
    excerpt: "An essay by Mi Hyo Kim describing the gallery's founding philosophy and practice.",
    content: `"The number zero is not empty — it is infinite potential, the space where every possibility begins. Art lives in that same space: between what is and what could be." — Mi Hyo Kim.\n\nThis essay outlines the gallery's mission and history, and explains recent curatorial choices.
      (Source: art-website-hazel)`,
    image: undefined,
    sourceUrl: "https://art-website-hazel.vercel.app/",
  },
];

export default news;
