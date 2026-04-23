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
    id: "scotsman-edinburgh-2025",
    title: "Edinburgh Art Fair 2025: Kim Mi Hyo Gallery Returns",
    date: "September 9, 2025",
    category: "Press",
    excerpt:
      "The Scotsman highlights Kim Mi Hyo Gallery's return to Edinburgh Art Fair, noting the gallery's unique roster and wide appeal.",
    content:
      "The Scotsman coverage of Edinburgh Art Fair 2025 notes the Kim Mi Hyo Gallery's strong presence and describes the booth as a highlight for collectors seeking distinctive work.",
    sourceUrl:
      "https://www.scotsman.com/arts-and-culture/art/edinburgh-art-fair-2025-hundreds-of-works-you-cant-see-anywhere-else-in-scotland-5309537",
  },
  {
    id: "thewfy-edinburgh-2025",
    title: "Edinburgh Art Fair: The Best Art Now On Display",
    date: "September 2025",
    category: "Press",
    excerpt: "The WFY named Kim Mi Hyo Gallery among notable presentations at Edinburgh Art Fair.",
    content:
      "Coverage highlights the gallery's role as a bridge between South Korea's contemporary scene and international audiences.",
    sourceUrl: "https://thewfy.com/edinburgh-art-fair-the-best-art-now-on-display/",
  },
  {
    id: "pressreader-scotsman-20250913",
    title: "Amazing Art for Every Wall — The Scotsman / Pressreader",
    date: "September 13, 2025",
    category: "Press",
    excerpt:
      "PressReader republishes Scotsman coverage noting Kim Mi Hyo Gallery's participation and the fair's international scope.",
    sourceUrl: "https://www.pressreader.com/uk/the-scotsman/20250913/282840787193419",
  },
  {
    id: "art-gwangju-profile-2024",
    title: "Kim Mi Hyo Gallery — Art Gwangju Profile",
    date: "September 13, 2024",
    category: "Press",
    excerpt:
      "Art Gwangju lists Kim Mi Hyo Gallery in its directory and highlights the gallery's programming.",
    sourceUrl: "https://artgwangju.kr/en/galleries/kim-mi-hyo-gallery/",
  },
  {
    id: "instagram-world-art-dubai-2025",
    title: "World Art Dubai 2025 — Instagram Reports",
    date: "April 17, 2025",
    category: "Social",
    excerpt:
      "Instagram posts and reels documented Kim Mi Hyo Gallery's participation at World Art Dubai (Stand JC07).",
    sourceUrl: "https://www.instagram.com/reel/DIj7C5MTENP/",
  },
  {
    id: "world-art-dubai-2025",
    title: "Kim Mi Hyo Gallery at World Art Dubai 2025",
    date: "April 17, 2025",
    category: "Fair",
    excerpt:
      "Stand JC07 presented nine works by Lee Mi Hyang, Kim Myung-hwa and Bae Yu Mi at the 11th edition of the MENA region's largest art fair.",
    content:
      "Stand JC07 presented nine works by Lee Mi Hyang, Kim Myung-hwa and Bae Yu Mi at World Art Dubai 2025. The fair hosted over 400 galleries from 65 countries.",
    sourceUrl: "https://art-website-hazel.vercel.app/",
  },
  {
    id: "art-gwangju-2024",
    title: "Art Gwangju 2024: Booth D-21",
    date: "October 23, 2024",
    category: "Fair",
    excerpt:
      "Four artists — Byeong Gong, Yumee Bae, Jeonghyun Lee and Seongah Park — presented at Art Gwangju 2024, Booth D-21.",
    content:
      "At Art Gwangju 2024 (Booth D-21), four artists represented the gallery in one of South Korea's premier regional art fairs.",
    sourceUrl: "https://art-website-hazel.vercel.app/",
  },
  {
    id: "philosophy-of-zero",
    title: "The Philosophy of Zero: Infinite Potential as Artistic Mission",
    date: "March 2025",
    category: "Essay",
    excerpt:
      "For Mi Hyo Kim, the number '0' is not emptiness but the space where all creation begins.",
    content:
      '"The number zero is not empty — it is infinite potential, the space where every possibility begins. Art lives in that same space: between what is and what could be." — Mi Hyo Kim.\n\nThis essay explains the gallery\'s founding philosophy and how it informs recent exhibitions.',
    sourceUrl: "https://art-website-hazel.vercel.app/",
  },
  {
    id: "artist-profile-mi-hyo-kim",
    title: "Artist Profile: Mi Hyo Kim — Three Decades of Practice",
    date: "January 2024",
    category: "Profile",
    excerpt: "A portrait of Mi Hyo Kim from her BFA to international exhibitions and recognition.",
    content:
      "A detailed profile tracing Mi Hyo Kim's career: BFA at Busan Women's University, Paris debut in 2002, and 'Artist of the Year' recognition in Seoul in 2011.",
    sourceUrl: "https://art-website-hazel.vercel.app/",
  },
  {
    id: "17-years-from-jinju",
    title: "17 Years from Jinju: A Gallery's Remarkable Journey",
    date: "January 2024",
    category: "News",
    excerpt:
      "Kim Mi Hyo Gallery marks seventeen years of independent operation, building bridges between Jinju and international art markets.",
    content:
      "Founded in 2007, Kim Mi Hyo Gallery marks seventeen years of independent operation — building bridges between Jinju's regional scene and international art markets.",
    sourceUrl: "https://art-website-hazel.vercel.app/",
  },
  {
    id: "esprit-de-coree-2002",
    title: "Esprit de Corée V — Paris 2002: Mi Hyo Kim's International Debut",
    date: "2002",
    category: "Archive",
    excerpt:
      "Mi Hyo Kim made her international exhibition debut at Esprit de Corée V in Paris (2002).",
    content:
      "At the fifth edition of 'Esprit de Corée' in Paris, Mi Hyo Kim made her international exhibition debut — an early milestone in her international career.",
    sourceUrl: "https://art-website-hazel.vercel.app/",
  },
  {
    id: "world-art-games-2012",
    title: "World Art Games: Mi Hyo Kim Named National Committee President",
    date: "2012",
    category: "Archive",
    excerpt:
      "Mi Hyo Kim was appointed President of the World Art Games National Committee for South Korea.",
    content:
      "Mi Hyo Kim's appointment as President of the World Art Games National Committee for South Korea recognized her role in international arts diplomacy.",
    sourceUrl: "https://art-website-hazel.vercel.app/",
  },
  {
    id: "100-korea-womens-2012",
    title: "100 Korea Women's Exhibition — Seoul (2012)",
    date: "2012",
    category: "Archive",
    excerpt: "Inclusion in a 100-artist Seoul survey marked national recognition for Mi Hyo Kim.",
    content:
      "Included in the 100 Korea Women's Exhibition in Seoul (2012), following earlier recognition as 'Artist of the Year' in 2011.",
    sourceUrl: "https://art-website-hazel.vercel.app/",
  },
  {
    id: "korea-china-exchange-2010",
    title: "Korea–China Exchange Exhibition, Jinju (2010)",
    date: "2010",
    category: "Archive",
    excerpt: "A cross-cultural exchange programme connecting Korean and Chinese artists in Jinju.",
    content:
      "The Korea–China Exchange Exhibition in Jinju (2010) was a cross-cultural exchange highlighting international engagement.",
    sourceUrl: "https://art-website-hazel.vercel.app/",
  },
  {
    id: "korean-art-global-rise-2025",
    title: "Korean Art's Global Rise — and Where Jinju Fits",
    date: "June 2025",
    category: "Context",
    excerpt:
      "Analysis of Korean art's rising international profile and the role of regional galleries like Kim Mi Hyo Gallery.",
    content:
      "As Korean art commands unprecedented international attention, Kim Mi Hyo Gallery's long-standing programme from Jinju offers a distinctive regional perspective.",
    sourceUrl: "https://art-website-hazel.vercel.app/",
  },
];

export default news;
