import { createFileRoute, Link } from "@tanstack/react-router";
import { artImages } from "@/lib/art-images";

const galleryImg = artImages.heartOfObangsaek;
const cosmicImg = artImages.fieldsOfBeing;
const sacredImg = artImages.aLineTowardYou;

export const Route = createFileRoute("/exhibitions")({
  head: () => ({
    meta: [
      { title: "Exhibitions — Kim Mi Hyo Gallery" },
      {
        name: "description",
        content: "Current and upcoming exhibitions at Kim Mi Hyo Gallery, Jinju, South Korea.",
      },
      { property: "og:title", content: "Exhibitions — Kim Mi Hyo Gallery" },
      {
        property: "og:description",
        content: "Current and upcoming exhibitions in Jinju and abroad.",
      },
    ],
  }),
  component: ExhibitionsPage,
});

const exhibitions = [
  {
    status: "On View",
    title: "Cosmic Pulse: Selected Works",
    artist: "Kim Mi Hyo",
    dates: "Jan 15 – Mar 30, 2025",
    venue: "Kim Mi Hyo Gallery, Jinju",
    img: cosmicImg,
  },
  {
    status: "Upcoming",
    title: "The Dreaming Eye",
    artist: "Group Exhibition",
    dates: "Apr 12 – Jun 8, 2025",
    venue: "Main Hall, Jinju",
    img: sacredImg,
  },
  {
    status: "Past",
    title: "World Art Dubai 2025",
    artist: "Kim Mi Hyo Gallery",
    dates: "Apr 17 – 20, 2025",
    venue: "Dubai World Trade Centre",
    img: galleryImg,
  },
];

// ─── Profile Data ────────────────────────────────────────────────────────────

const education = "Graduated from Busan Woman's College (now Silla University)";

const soloExhibitions = [
  { date: "2025", title: "Invited Solo Exhibition", venue: "3am Gallery, Incheon" },
  { date: "2025", title: "Invited Solo Exhibition", venue: "Jimsim Gallery, Jinju" },
  { date: "2021", title: "Invited Solo Exhibition", venue: "Uju Art Museum, Sacheon" },
  { date: "2020", title: "Invited Solo Exhibition", venue: "Book Café Gallery, Jinju" },
  { date: "2018", title: "Invited Solo Exhibition", venue: "Culture and Arts Center, Jinju" },
  { date: "2019", title: "Incheon Art Fair Booth Solo Exhibition", venue: "Culture and Arts Center, Incheon" },
  { date: "2015", title: "Invited Solo Exhibition", venue: "Yihyeong Art Center, Seoul" },
  { date: "2014", title: "Invited Solo Exhibition", venue: "Mir Gallery, Jinju" },
  { date: "2013", title: "1st Blanc Bleu Booth Solo Exhibition", venue: "Grand Hotel, Seoul" },
  { date: "2012", title: "Changwon Art Fair Booth Solo Exhibition", venue: "SECO, Changwon" },
  { date: "2011", title: "Artist of the Year Invited Solo Exhibition", venue: "Yihyeong Art Center, Seoul" },
  { date: "2011", title: "Invited Solo Exhibition", venue: "CaYe Gallery, Jinju" },
  { date: "2011", title: "Invited Solo Exhibition", venue: "Yihyeong Art Center, Seoul" },
];

const groupExhibitions = [
  // 2025
  { date: "2025", title: "ART NY", venue: "New York, USA" },
  { date: "2025", title: "Edinburgh Art Fair 02 Academy", venue: "UK" },
  { date: "2025", title: "Asia Art Fair", venue: "Osaka, Japan" },
  { date: "2025", title: "Ulsan Art Fair", venue: "Convention Center, Ulsan" },
  { date: "2025", title: "Sculpture Art Fair", venue: "COEX, Seoul" },
  { date: "2025", title: "11th Invited Solo Exhibition", venue: "Saebyeoksasi Gallery, Incheon" },
  { date: "2025", title: "Blue Hotel Art Fair", venue: "Paradise Hotel, Busan" },
  { date: "2024", title: "Seoul Art Show", venue: "COEX, Seoul" },
  // 2024
  { date: "2024", title: "Incheon Art Show", venue: "Convention Center, Incheon" },
  { date: "2024", title: "Group Direct Exhibition", venue: "Culture and Arts Center, Jinju" },
  { date: "2024", title: "Jinju Western Painting Artists Association", venue: "Culture and Arts Center, Jinju" },
  { date: "2024", title: "Gwangju Art Fair", venue: "Kimdaejung Convention Center, Gwangju" },
  { date: "2024", title: "Bank Art Fair", venue: "SETEC, Seoul" },
  { date: "2024", title: "Ulsan Art Fair", venue: "Convenience Center, Ulsan" },
  { date: "2024", title: "Blue Home Deco Art Fair", venue: "BEXCO, Busan" },
  { date: "2024", title: "World Art Game Exchange Exhibition", venue: "Rome, Italy" },
  { date: "2024", title: "Jinju Nude Drawing Exhibition", venue: "Culture and Arts Center, Jinju" },
  { date: "2024", title: "Sculpture Art Fair", venue: "COEX, Seoul" },
  { date: "2024", title: "Art Festa", venue: "SETEC, Seoul" },
  { date: "2024", title: "World Art Dubai", venue: "Trade Center, Dubai" },
  // 2023
  { date: "2023", title: "Seoul Art Show", venue: "COEX, Seoul" },
  { date: "2023", title: "Jinju Western Painting Artists Association", venue: "Culture & Arts Center" },
  { date: "2023", title: "Shanghai International Art Fair", venue: "Convention Center, Shanghai" },
  { date: "2023", title: "Incheon Hotel Art Fair", venue: "Songdo Central Park Hotel, Incheon" },
  { date: "2023", title: "Group Direct Exhibition", venue: "Culture & Arts Center, Jinju" },
  { date: "2023", title: "Fukuoka Art Fair", venue: "Ann Gallery, Japan" },
  { date: "2023", title: "Ulsan International Art Fair", venue: "Convention Center, Ulsan" },
  { date: "2023", title: "Formosa Taiwan Art Fair", venue: "Grand Hyatt, Taipei" },
  { date: "2023", title: "Jeju International Gallery Fair", venue: "Convention Center, Jeju" },
  { date: "2023", title: "Sculpture Art Fair", venue: "COEX, Seoul" },
  { date: "2023", title: "World Art Dubai", venue: "Convention Center, Dubai" },
  { date: "2023", title: "New Sculpture Appreciation Exhibition", venue: "Culture & Arts Center, Daegu" },
  { date: "2023", title: "Jeju Art Festa", venue: "Convention Center, Jeju" },
  { date: "2023", title: "Daegu Queen Art Fair", venue: "Laonzena, Daegu" },
  { date: "2023", title: "Beauty Fair", venue: "Gi Art Gallery, Seoul" },
  { date: "2022", title: "Seoul Art Show", venue: "COEX, Seoul" },
  // 2022
  { date: "2022", title: "Edinburgh Art Fair 02 Academy", venue: "UK" },
  { date: "2022", title: "Ulsan Art Fair", venue: "Convention Center, Gyeongju" },
  { date: "2022", title: "Johyung Hotel Art Fair", venue: "JW Marriott Hotel, Seoul" },
  { date: "2022", title: "Gyeongju Local Fair", venue: "Convention Center, Gyeongju" },
  { date: "2022", title: "The Corso Art Fair", venue: "Yeongmu Paradise Hotel, Busan" },
  { date: "2022", title: "March 15th Independence Movement Commemorative Art Festival", venue: "Art Center, Changwon" },
  { date: "2022", title: "World Art Dubai", venue: "Trade Center, Dubai" },
  // 2021
  { date: "2021", title: "Rizzo Sewing Machine Museum Invitational Exhibition", venue: "Rizzo Museum, Jinju" },
  { date: "2021", title: "IAAS Hotel Fair", venue: "Oakwood, Incheon" },
  { date: "2021", title: "Bank Art Fair", venue: "Intercontinental Hotel, Seoul" },
  { date: "2021", title: "Pohang Art Festival", venue: "Pohang University of Science and Technology" },
  { date: "2021", title: "BAMA Hotel Art", venue: "Grand Josun, Busan" },
  { date: "2021", title: "The Corso Hotel Fair", venue: "Yeongmu Hotel, Busan" },
  { date: "2021", title: "Jinju Embracing the Moon", venue: "Namgang Golden Tulip Hotel, Jinju" },
  { date: "2021", title: "Excellent Artist Exhibition", venue: "Cuneo, Italy" },
  { date: "2021", title: "Busan International Gallery Fair", venue: "BEXCO, Busan" },
  // 2020
  { date: "2020", title: "INDEX Saudi Arabia", venue: "Riyadh Trade Center, Saudi Arabia" },
  { date: "2020", title: "Space Art Museum Invitational Exhibition", venue: "Space Art Museum, Sacheon" },
  { date: "2020", title: "BAMA Busan International Gallery Fair", venue: "BEXCO, Busan" },
  { date: "2020", title: "9th 2nd Solo Exhibition", venue: "Beopwon Gallery, Jinju" },
  // 2019
  { date: "2019", title: "Asian Contemporary", venue: "Hong Kong" },
  { date: "2019", title: "Seoul Sculpture Art Fair", venue: "Seoul/COEX" },
  { date: "2019", title: "Bank Art Fair", venue: "Grand Hotel, Singapore" },
  { date: "2019", title: "Index, DUBA", venue: "Dubai/Trade Center" },
  { date: "2019", title: "Miami Beach Basel", venue: "USA" },
  { date: "2019", title: "Seoul Art Show", venue: "COEX, Seoul" },
  { date: "2019", title: "Miami Beach Basel", venue: "Miami, USA" },
  { date: "2019", title: "Milan Biennale", venue: "Italy" },
  { date: "2019", title: "Changwon International Art Fair", venue: "CECO, Changwon" },
  { date: "2019", title: "INDEX Dubai", venue: "Trade Center, Dubai" },
  { date: "2019", title: "WITH ARTFAIR", venue: "Convention Center, Incheon" },
  { date: "2019", title: "Busan International Gallery Fair", venue: "BEXCO, Busan" },
  // 2018
  { date: "2018", title: "Guangzhou Art Fair", venue: "Guangzhou, China" },
  { date: "2018", title: "Seoul International Art Fair", venue: "COEX, Seoul" },
  { date: "2018", title: "World Art Dubai", venue: "Trade Center, Dubai" },
  { date: "2018", title: "Busan Annual Maket of Art", venue: "BAMA, BEXCO, Busan" },
  { date: "2018", title: "Plastic Art Seoul", venue: "COEX, Seoul" },
  { date: "2018", title: "Art Osaka", venue: "Osaka Hotel, Japan" },
  { date: "2018", title: "Art Shopping", venue: "Louvre Museum, France" },
  { date: "2018", title: "Jinju Sketching Society", venue: "Culture and Arts Center, Jinju" },
  { date: "2018", title: "5th Nude Drawing Members' Exhibition", venue: "Culture and Arts Center, Jinju" },
  { date: "2018", title: "Shanghai Art Fair", venue: "Culture and Arts Center, Shanghai" },
  // 2017
  { date: "2017", title: "Korea Style Week Collection", venue: "COEX, Seoul" },
  { date: "2017", title: "Participation in the 4th World Art Games (Croatia/Srobonski) — Grand Prize in Western Painting", venue: "Croatia" },
  { date: "2017", title: "Plastic Art Fair", venue: "COEX, Seoul" },
  { date: "2017", title: "Busan Annual Make of Art (BAMA)", venue: "BEXCO, Busan" },
  { date: "2017", title: "Jinju Western Painting Artist", venue: "Culture and Arts Center, Jinju" },
  { date: "2017", title: "Participation in the WAG Mexico Project", venue: "Mexico" },
  { date: "2017", title: "Blue Art Fair", venue: "Citadines Hotel, Busan" },
  { date: "2017", title: "Seoul Art Show", venue: "COEX, Seoul" },
  { date: "2017", title: "Incheon International Art Fair Booth Solo Exhibition", venue: "Comprehensive Culture and Arts Center, Incheon" },
  // 2016
  { date: "2016", title: "Seoul Art Show", venue: "COEX, Seoul" },
  { date: "2016", title: "Jinju Sketching Society 12th Exhibition Member Exhibition", venue: "Jinju Culture and Arts Center" },
  { date: "2016", title: "Dangjin Songak Street Festival", venue: "Dangjin" },
  { date: "2016", title: "Art Mexico Museo de Arte e Historia de Guanajuato", venue: "Mexico" },
  { date: "2016", title: "China Jianjing Private Art Show", venue: "Jianjing, China" },
  // 2015
  { date: "2015", title: "Seoul Art Show", venue: "COEX, Seoul" },
  { date: "2015", title: "Shanghai Art Fair", venue: "Shanghai, China" },
  { date: "2015", title: "Miami Spectrum Art Fair", venue: "Miami, USA" },
  { date: "2015", title: "Tongyeong Art Fair KMO", venue: "Citizens' Center, Tongyeong" },
  { date: "2015", title: "Louvre Art Shopping", venue: "Paris, France" },
  { date: "2015", title: "WORLD ART GAMES Exchange Exhibition", venue: "Slovakia" },
  { date: "2015", title: "Belgium Art Nocturne", venue: "Belgium" },
  { date: "2015", title: "Singapore Deluxe Art Fair", venue: "Singapore" },
  { date: "2015", title: "Asian Window Biennale", venue: "Gwangju" },
  { date: "2015", title: "5th Greek Art Athena", venue: "Olympic Stadium, Greece" },
  { date: "2015", title: "Doors Antfair", venue: "Amreal Palace, Seoul" },
  { date: "2015", title: "World Art Dubai", venue: "World Trade Center, Dubai" },
  { date: "2015", title: "Invited Solo Exhibition", venue: "Leehyung Art Center, Seoul" },
  { date: "2015", title: "Seoul Art Show", venue: "Samsung COEX, Seoul" },
  // 2014
  { date: "2014", title: "KASF with BLANC BLEU", venue: "Grand Ambassador Hotel, Seoul" },
  { date: "2014", title: "Asia International Art Fair", venue: "Hong Kong" },
  { date: "2014", title: "Macao Art Fair", venue: "Venetian Hotel, Hong Kong" },
  { date: "2014", title: "7th Daegu Arts Center", venue: "EXCO, Daegu" },
  { date: "2014", title: "Korean Contemporary Art Exhibition Native arl Gallery", venue: "Lahore, Pakistan" },
  { date: "2014", title: "Germany Cologne Art Fair", venue: "Cologne, Germany" },
  { date: "2014", title: "5th Solo Exhibition", venue: "Mir Art Gallery, Jinju" },
  { date: "2014", title: "4th Singapore Art Fair", venue: "Parkroyal Hotel, Singapore" },
  { date: "2014", title: "Korea Hungary–Korea Diplomatic Exchange Exhibition", venue: "Capital Gallery, Seoul" },
  { date: "2014", title: "Busan Art Show", venue: "BEXCO, Busan" },
  { date: "2014", title: "Flower Spring Exhibition", venue: "Lee Seoul Gallery, Seoul" },
  { date: "2014", title: "Korea Women's Festival — Grand Prize Winner", venue: "Lee Hyung Art Gallery, Seoul" },
  { date: "2014", title: "WORLD ART GAMES Exchange Exhibition", venue: "Slovakia, Austria, Croatia" },
  { date: "2014", title: "2nd Blanc Bleu Art Fair", venue: "Grand Hotel, Seoul" },
  { date: "2014", title: "Hungarian Pats (World Art Member Exchange Exhibition)", venue: "Croatian Cultural Center, Hungary" },
  // 2013
  { date: "2013", title: "Korea–China Cultural Exchange Exhibition", venue: "Culture and Arts Center, Jinju" },
  { date: "2013", title: "Korean Women Artists Exhibition", venue: "Pocheon Gallery, Gyeonggi" },
  { date: "2013", title: "Paris Louvre Korean Contemporary Art Exhibition", venue: "Paris, France" },
  { date: "2013", title: "1st WORLD ART GAMES", venue: "Zagreb, Croatia" },
  { date: "2013", title: "Women's Body Exhibition", venue: "Lee Young Art Center, Seoul" },
  { date: "2013", title: "AHAF Hotel Art Fair", venue: "Hong Kong" },
  { date: "2013", title: "Daejeon International Art Show", venue: "Convention Center, Daejeon" },
  { date: "2013", title: "Michigan Grand Rapids Art Prize", venue: "Independent Bank, USA" },
  { date: "2013", title: "1st Blanc Bleu Art Fair", venue: "Grand Hotel, Seoul" },
  { date: "2013", title: "FOUNTAIN Art Fair", venue: "New York, USA" },
  // 2012
  { date: "2012", title: "Changwon International Art Fair", venue: "SECO, Changwon" },
  { date: "2012", title: "In Search of Cultural Origins", venue: "Culture and Arts Center, Jinju" },
  { date: "2012", title: "Creative Autumn Feast Invitational Exhibition", venue: "Seoul" },
  { date: "2012", title: "Beautiful Companionship Exhibition", venue: "Gallery Violet, Seoul" },
  { date: "2012", title: "Summer Art Festival", venue: "Gallery Violet, Seoul" },
  { date: "2012", title: "Cologne Art Fair", venue: "Cologne, Germany" },
  { date: "2012", title: "Korea–China Cultural Exchange Exhibition", venue: "Zhengzhou, China" },
  { date: "2012", title: "Nude Drawing Member Exhibition", venue: "Jinju" },
  { date: "2012", title: "100 Korean Women Artists Exhibition", venue: "Yihyeong Art Center, Seoul" },
  // 2011
  { date: "2011", title: "Artist of the Year Invitational Solo Exhibition", venue: "Yihyeong Art Center, Seoul" },
  { date: "2011", title: "Invitational Solo Exhibition", venue: "Cafe Saisae, Jinju" },
  { date: "2011", title: "Invitational Solo Exhibition", venue: "Yihyeong Art Center, Seoul" },
  // 2010
  { date: "2010", title: "Korea–China Cultural Exchange Exhibition", venue: "Culture and Arts Center, Jinju" },
  // 2005
  { date: "2005", title: "Jinju Fine Arts Association Exhibition", venue: "Cultural Arts Center, Jinju" },
  // 2002
  { date: "2002", title: "Esprit de Corée V", venue: "Paris City Hall, France" },
  { date: "2002", title: "Jinju Western Painting Exhibition", venue: "Culture and Arts Center, Jinju" },
  { date: "2000", title: "Nude Drawing Exhibition by 9 Artists", venue: "Naego Culture and Arts Center Gallery, Jinju" },
  // 1994
  { date: "1994", title: "Human-art 94", venue: "Culture and Arts Center, Busan" },
  { date: "1994", title: "Sea Art Festival Performance", venue: "Gwangalli Beach, Busan" },
  // Early career
  { date: "1989–1994", title: "Early Career Group Exhibitions", venue: "Various venues · Busan & Jinju, South Korea" },
];

const performances = [
  { date: "2021", title: "A Free World Drawn with Beans", venue: "Lee Hyun–Welga, Jinju" },
  { date: "2021", title: "1st Seungsan Village Cultural Festival — Energy Receive Performance", venue: "Jsoo Seungsan Village, Jinju" },
  { date: "2021", title: "One Nation", venue: "Gwangalli, Busan" },
];

const lectures = [
  { date: "2023", title: "World History Stories Through Cities" },
  { date: "2018", title: "Humanities Lecture — Sharing and Hope History and Culture Lecture Concert" },
];

const memberships = [
  "Member of Korean Fine Arts Association",
  "Jinju Fine Arts Association",
  "Jinju Sketching from Nature Association",
  "Nude Drawing Association",
  "World Art Games (Represent South Korea) Exhibit Planner",
  "Representative of Kim Mi Hyo Gallery",
];

const contact = {
  phone: "010.2428.7969",
  email: "hoaga123@naver.com",
};

// ─── Timeline (for the existing timeline section) ────────────────────────────

const exhibitionsTimeline = [
  {
    year: 2025,
    events: [
      { date: "Jan 15 – Mar 30, 2025", title: "Cosmic Pulse: Selected Works", venue: "Kim Mi Hyo Gallery, Jinju" },
      { date: "Apr 17, 2025", title: "Moon · Light · Island — World Art Dubai JC07", venue: "Dubai World Trade Centre" },
      { date: "Apr 12 – Jun 8, 2025", title: "The Dreaming Eye", venue: "Main Hall, Jinju" },
      { date: "2025", title: "Invited Solo Exhibition", venue: "3am Gallery, Incheon" },
      { date: "2025", title: "Invited Solo Exhibition", venue: "Jimsim Gallery, Jinju" },
      { date: "2025", title: "ART NY", venue: "New York, USA" },
      { date: "2025", title: "Edinburgh Art Fair 02 Academy", venue: "UK" },
      { date: "2025", title: "Asia Art Fair", venue: "Osaka, Japan" },
      { date: "2025", title: "Ulsan Art Fair", venue: "Convention Center, Ulsan" },
      { date: "2025", title: "Sculpture Art Fair", venue: "COEX, Seoul" },
      { date: "2025", title: "11th Invited Solo Exhibition", venue: "Saebyeoksasi Gallery, Incheon" },
      { date: "2025", title: "Blue Hotel Art Fair", venue: "Paradise Hotel, Busan" },
    ],
  },
  {
    year: 2024,
    events: [
      { date: "2024", title: "Seoul Art Show", venue: "COEX, Seoul" },
      { date: "Oct 23, 2024", title: "Art Gwangju 2024: Booth D-21", venue: "Kimdaejung Convention Centre, Gwangju" },
      { date: "2024", title: "Emptiness and Joy — Art Gwangju D-21", venue: "Kimdaejung Convention Centre, Gwangju" },
      { date: "2024", title: "Incheon Art Show", venue: "Convention Center, Incheon" },
      { date: "2024", title: "Group Direct Exhibition", venue: "Culture and Arts Center, Jinju" },
      { date: "2024", title: "Jinju Western Painting Artists Association", venue: "Culture and Arts Center, Jinju" },
      { date: "2024", title: "Bank Art Fair", venue: "SETEC, Seoul" },
      { date: "2024", title: "Ulsan Art Fair", venue: "Convenience Center, Ulsan" },
      { date: "2024", title: "Blue Home Deco Art Fair", venue: "BEXCO, Busan" },
      { date: "2024", title: "World Art Game Exchange Exhibition", venue: "Rome, Italy" },
      { date: "2024", title: "Jinju Nude Drawing Exhibition", venue: "Culture and Arts Center, Jinju" },
      { date: "2024", title: "Sculpture Art Fair", venue: "COEX, Seoul" },
      { date: "2024", title: "Art Festa", venue: "SETEC, Seoul" },
      { date: "2024", title: "World Art Dubai", venue: "Trade Center, Dubai" },
    ],
  },
  {
    year: 2023,
    events: [
      { date: "2023", title: "Sacred Geometries", venue: "Kim Mi Hyo Gallery, Jinju" },
      { date: "2023", title: "Vision Worlds", venue: "Seoul Art Fair, Seoul" },
      { date: "2023", title: "Seoul Art Show", venue: "COEX, Seoul" },
      { date: "2023", title: "Jinju Western Painting Artists Association", venue: "Culture & Arts Center" },
      { date: "2023", title: "Shanghai International Art Fair", venue: "Convention Center, Shanghai" },
      { date: "2023", title: "Incheon Hotel Art Fair", venue: "Songdo Central Park Hotel, Incheon" },
      { date: "2023", title: "Group Direct Exhibition", venue: "Culture & Arts Center, Jinju" },
      { date: "2023", title: "Fukuoka Art Fair", venue: "Ann Gallery, Japan" },
      { date: "2023", title: "Ulsan International Art Fair", venue: "Convention Center, Ulsan" },
      { date: "2023", title: "Formosa Taiwan Art Fair", venue: "Grand Hyatt, Taipei" },
      { date: "2023", title: "Jeju International Gallery Fair", venue: "Convention Center, Jeju" },
      { date: "2023", title: "World Art Dubai", venue: "Convention Center, Dubai" },
      { date: "2023", title: "World History Stories Through Cities (Lecture)", venue: "" },
    ],
  },
  {
    year: 2022,
    events: [
      { date: "2022", title: "Emergence: New Works", venue: "Busan Art Fair, Busan" },
      { date: "2022", title: "Seoul Art Show", venue: "COEX, Seoul" },
      { date: "2022", title: "Edinburgh Art Fair 02 Academy", venue: "UK" },
      { date: "2022", title: "Ulsan Art Fair", venue: "Convention Center, Gyeongju" },
      { date: "2022", title: "Johyung Hotel Art Fair", venue: "JW Marriott Hotel, Seoul" },
      { date: "2022", title: "Gyeongju Local Fair", venue: "Convention Center, Gyeongju" },
      { date: "2022", title: "The Corso Art Fair", venue: "Yeongmu Paradise Hotel, Busan" },
      { date: "2022", title: "March 15th Independence Movement Commemorative Art Festival", venue: "Art Center, Changwon" },
      { date: "2022", title: "World Art Dubai", venue: "Trade Center, Dubai" },
    ],
  },
  {
    year: 2021,
    events: [
      { date: "2021", title: "Invited Solo Exhibition", venue: "Uju Art Museum, Sacheon" },
      { date: "2021", title: "Rizzo Sewing Machine Museum Invitational Exhibition", venue: "Rizzo Museum, Jinju" },
      { date: "2021", title: "IAAS Hotel Fair", venue: "Oakwood, Incheon" },
      { date: "2021", title: "Bank Art Fair", venue: "Intercontinental Hotel, Seoul" },
      { date: "2021", title: "Pohang Art Festival", venue: "Pohang University of Science and Technology" },
      { date: "2021", title: "BAMA Hotel Art", venue: "Grand Josun, Busan" },
      { date: "2021", title: "The Corso Hotel Fair", venue: "Yeongmu Hotel, Busan" },
      { date: "2021", title: "Jinju Embracing the Moon", venue: "Namgang Golden Tulip Hotel, Jinju" },
      { date: "2021", title: "Excellent Artist Exhibition", venue: "Cuneo, Italy" },
      { date: "2021", title: "Busan International Gallery Fair", venue: "BEXCO, Busan" },
      { date: "2021", title: "A Free World Drawn with Beans (Performance)", venue: "Lee Hyun–Welga, Jinju" },
      { date: "2021", title: "1st Seungsan Village Cultural Festival — Energy Receive Performance", venue: "Jsoo Seungsan Village, Jinju" },
      { date: "2021", title: "One Nation (Performance)", venue: "Gwangalli, Busan" },
    ],
  },
  {
    year: 2020,
    events: [
      { date: "2020", title: "Invited Solo Exhibition", venue: "Book Café Gallery, Jinju" },
      { date: "2020", title: "INDEX Saudi Arabia", venue: "Riyadh Trade Center, Saudi Arabia" },
      { date: "2020", title: "Space Art Museum Invitational Exhibition", venue: "Space Art Museum, Sacheon" },
      { date: "2020", title: "BAMA Busan International Gallery Fair", venue: "BEXCO, Busan" },
      { date: "2020", title: "9th 2nd Solo Exhibition", venue: "Beopwon Gallery, Jinju" },
    ],
  },
  {
    year: 2019,
    events: [
      { date: "2019", title: "Asian Contemporary", venue: "Hong Kong" },
      { date: "2019", title: "Seoul Sculpture Art Fair", venue: "Seoul/COEX" },
      { date: "2019", title: "Bank Art Fair", venue: "Grand Hotel, Singapore" },
      { date: "2019", title: "Index, DUBA", venue: "Dubai/Trade Center" },
      { date: "2019", title: "Miami Beach Basel", venue: "USA" },
      { date: "2019", title: "Seoul Art Show", venue: "COEX, Seoul" },
      { date: "2019", title: "Milan Biennale", venue: "Italy" },
      { date: "2019", title: "Changwon International Art Fair", venue: "CECO, Changwon" },
      { date: "2019", title: "INDEX Dubai", venue: "Trade Center, Dubai" },
      { date: "2019", title: "WITH ARTFAIR", venue: "Convention Center, Incheon" },
      { date: "2019", title: "Busan International Gallery Fair", venue: "BEXCO, Busan" },
    ],
  },
  {
    year: 2018,
    events: [
      { date: "2018", title: "Invited Solo Exhibition", venue: "Culture and Arts Center, Jinju" },
      { date: "2018", title: "Incheon Art Fair Booth Solo Exhibition", venue: "Culture and Arts Center, Incheon" },
      { date: "2018", title: "Guangzhou Art Fair", venue: "Guangzhou, China" },
      { date: "2018", title: "Seoul International Art Fair", venue: "COEX, Seoul" },
      { date: "2018", title: "World Art Dubai", venue: "Trade Center, Dubai" },
      { date: "2018", title: "Busan Annual Maket of Art", venue: "BAMA, BEXCO, Busan" },
      { date: "2018", title: "Plastic Art Seoul", venue: "COEX, Seoul" },
      { date: "2018", title: "Art Osaka", venue: "Osaka Hotel, Japan" },
      { date: "2018", title: "Art Shopping", venue: "Louvre Museum, France" },
      { date: "2018", title: "Jinju Sketching Society", venue: "Culture and Arts Center, Jinju" },
      { date: "2018", title: "5th Nude Drawing Members' Exhibition", venue: "Culture and Arts Center, Jinju" },
      { date: "2018", title: "Shanghai Art Fair", venue: "Culture and Arts Center, Shanghai" },
      { date: "2018", title: "Humanities Lecture — Sharing and Hope History and Culture Lecture Concert", venue: "" },
    ],
  },
  {
    year: 2017,
    events: [
      { date: "2017", title: "Korea Style Week Collection", venue: "COEX, Seoul" },
      { date: "2017", title: "4th World Art Games Grand Prize in Western Painting", venue: "Croatia" },
      { date: "2017", title: "Plastic Art Fair", venue: "COEX, Seoul" },
      { date: "2017", title: "Busan Annual Make of Art (BAMA)", venue: "BEXCO, Busan" },
      { date: "2017", title: "Jinju Western Painting Artist", venue: "Culture and Arts Center, Jinju" },
      { date: "2017", title: "Participation in the WAG Mexico Project", venue: "Mexico" },
      { date: "2017", title: "Blue Art Fair", venue: "Citadines Hotel, Busan" },
      { date: "2017", title: "Seoul Art Show", venue: "COEX, Seoul" },
      { date: "2017", title: "Incheon International Art Fair Booth Solo Exhibition", venue: "Comprehensive Culture and Arts Center, Incheon" },
    ],
  },
  {
    year: 2016,
    events: [
      { date: "2016", title: "Seoul Art Show", venue: "COEX, Seoul" },
      { date: "2016", title: "Jinju Sketching Society 12th Exhibition Member Exhibition", venue: "Jinju Culture and Arts Center" },
      { date: "2016", title: "Dangjin Songak Street Festival", venue: "Dangjin" },
      { date: "2016", title: "Art Mexico Museo de Arte e Historia de Guanajuato", venue: "Mexico" },
      { date: "2016", title: "China Jianjing Private Art Show", venue: "Jianjing, China" },
    ],
  },
  {
    year: 2015,
    events: [
      { date: "2015", title: "Invited Solo Exhibition", venue: "Yihyeong Art Center, Seoul" },
      { date: "2015", title: "Seoul Art Show", venue: "COEX, Seoul" },
      { date: "2015", title: "Shanghai Art Fair", venue: "Shanghai, China" },
      { date: "2015", title: "Miami Spectrum Art Fair", venue: "Miami, USA" },
      { date: "2015", title: "Tongyeong Art Fair KMO", venue: "Citizens' Center, Tongyeong" },
      { date: "2015", title: "Louvre Art Shopping", venue: "Paris, France" },
      { date: "2015", title: "WORLD ART GAMES Exchange Exhibition", venue: "Slovakia" },
      { date: "2015", title: "Belgium Art Nocturne", venue: "Belgium" },
      { date: "2015", title: "Singapore Deluxe Art Fair", venue: "Singapore" },
      { date: "2015", title: "Asian Window Biennale", venue: "Gwangju" },
      { date: "2015", title: "5th Greek Art Athena", venue: "Olympic Stadium, Greece" },
      { date: "2015", title: "Doors Antfair", venue: "Amreal Palace, Seoul" },
      { date: "2015", title: "World Art Dubai", venue: "World Trade Center, Dubai" },
      { date: "2015", title: "Invited Solo Exhibition", venue: "Leehyung Art Center, Seoul" },
      { date: "2015", title: "Seoul Art Show", venue: "Samsung COEX, Seoul" },
    ],
  },
  {
    year: 2014,
    events: [
      { date: "2014", title: "Invited Solo Exhibition", venue: "Mir Gallery, Jinju" },
      { date: "2014", title: "KASF with BLANC BLEU", venue: "Grand Ambassador Hotel, Seoul" },
      { date: "2014", title: "Asia International Art Fair", venue: "Hong Kong" },
      { date: "2014", title: "Macao Art Fair", venue: "Venetian Hotel, Hong Kong" },
      { date: "2014", title: "7th Daegu Arts Center", venue: "EXCO, Daegu" },
      { date: "2014", title: "Korean Contemporary Art Exhibition Native arl Gallery", venue: "Lahore, Pakistan" },
      { date: "2014", title: "Germany Cologne Art Fair", venue: "Cologne, Germany" },
      { date: "2014", title: "5th Solo Exhibition", venue: "Mir Art Gallery, Jinju" },
      { date: "2014", title: "4th Singapore Art Fair", venue: "Parkroyal Hotel, Singapore" },
      { date: "2014", title: "Korea Hungary–Korea Diplomatic Exchange Exhibition", venue: "Capital Gallery, Seoul" },
      { date: "2014", title: "Busan Art Show", venue: "BEXCO, Busan" },
      { date: "2014", title: "Flower Spring Exhibition", venue: "Lee Seoul Gallery, Seoul" },
      { date: "2014", title: "Korea Women's Festival — Grand Prize Winner", venue: "Lee Hyung Art Gallery, Seoul" },
      { date: "2014", title: "WORLD ART GAMES Exchange Exhibition", venue: "Slovakia, Austria, Croatia" },
      { date: "2014", title: "2nd Blanc Bleu Art Fair", venue: "Grand Hotel, Seoul" },
      { date: "2014", title: "Hungarian Pats (World Art Member Exchange Exhibition)", venue: "Croatian Cultural Center, Hungary" },
    ],
  },
  {
    year: 2013,
    events: [
      { date: "2013", title: "1st Blanc Bleu Booth Solo Exhibition", venue: "Grand Hotel, Seoul" },
      { date: "2013", title: "Korea–China Cultural Exchange Exhibition", venue: "Culture and Arts Center, Jinju" },
      { date: "2013", title: "Korean Women Artists Exhibition", venue: "Pocheon Gallery, Gyeonggi" },
      { date: "2013", title: "Paris Louvre Korean Contemporary Art Exhibition", venue: "Paris, France" },
      { date: "2013", title: "1st WORLD ART GAMES", venue: "Zagreb, Croatia" },
      { date: "2013", title: "Women's Body Exhibition", venue: "Lee Young Art Center, Seoul" },
      { date: "2013", title: "AHAF Hotel Art Fair", venue: "Hong Kong" },
      { date: "2013", title: "Daejeon International Art Show", venue: "Convention Center, Daejeon" },
      { date: "2013", title: "Michigan Grand Rapids Art Prize", venue: "Independent Bank, USA" },
      { date: "2013", title: "1st Blanc Bleu Art Fair", venue: "Grand Hotel, Seoul" },
      { date: "2013", title: "FOUNTAIN Art Fair", venue: "New York, USA" },
    ],
  },
  {
    year: 2012,
    events: [
      { date: "2012", title: "Changwon Art Fair Booth Solo Exhibition", venue: "SECO, Changwon" },
      { date: "2012", title: "Changwon International Art Fair", venue: "SECO, Changwon" },
      { date: "2012", title: "In Search of Cultural Origins", venue: "Culture and Arts Center, Jinju" },
      { date: "2012", title: "Creative Autumn Feast Invitational Exhibition", venue: "Seoul" },
      { date: "2012", title: "Beautiful Companionship Exhibition", venue: "Gallery Violet, Seoul" },
      { date: "2012", title: "Summer Art Festival", venue: "Gallery Violet, Seoul" },
      { date: "2012", title: "Cologne Art Fair", venue: "Cologne, Germany" },
      { date: "2012", title: "Korea–China Cultural Exchange Exhibition", venue: "Zhengzhou, China" },
      { date: "2012", title: "Nude Drawing Member Exhibition", venue: "Jinju" },
      { date: "2012", title: "100 Korean Women Artists Exhibition", venue: "Yihyeong Art Center, Seoul" },
    ],
  },
  {
    year: 2011,
    events: [
      { date: "2011", title: "Artist of the Year Invited Solo Exhibition", venue: "Yihyeong Art Center, Seoul" },
      { date: "2011", title: "Invited Exhibition", venue: "Heterozygous Arts Center, Seoul", note: "Invited" },
      { date: "2011", title: "Invited Exhibition — Artist of the Year", venue: "Heterozygous Art Center, Seoul", note: "Award" },
      { date: "2011", title: "Invitational Solo Exhibition", venue: "Cafe Saisae, Jinju" },
      { date: "2011", title: "Invitational Solo Exhibition", venue: "Yihyeong Art Center, Seoul" },
    ],
  },
  {
    year: 2010,
    events: [
      { date: "2010", title: "Korea–China Cultural Exchange Exhibition", venue: "Culture and Arts Center, Jinju" },
    ],
  },
  {
    year: 2007,
    events: [{ date: "2007", title: "Gallery Founded", venue: "Jinju, South Korea" }],
  },
  {
    year: 2005,
    events: [
      { date: "2005", title: "Jinju Fine Arts Association Exhibition", venue: "Cultural Arts Center, Jinju" },
    ],
  },
  {
    year: 2002,
    events: [
      { date: "2002", title: "Nine Nude Drawing", venue: "Pay Gallery, Jinju", note: "Solo" },
      { date: "2002", title: "Western Painting Artists", venue: "Jinju Cultural and Arts Center, Jinju", note: "Group" },
      { date: "2002", title: "Esprit de Corée V", venue: "Paris, France", note: "Group" },
    ],
  },
  {
    year: 2000,
    events: [
      { date: "2000", title: "Nude Drawing Exhibition by 9 Artists", venue: "Naego Culture and Arts Center Gallery, Jinju" },
    ],
  },
  {
    year: 1994,
    events: [
      { date: "1994", title: "Human-art 94", venue: "Culture and Arts Center, Busan", note: "Group" },
      { date: "1994", title: "Sea Art Festival Performance", venue: "Gwangalli Beach, Busan" },
    ],
  },
  {
    year: 1989,
    events: [
      {
        date: "1989–1994",
        title: "Early Career Group Exhibitions",
        venue: "Various venues · Busan & Jinju, South Korea",
        note: "Group",
      },
    ],
  },
];

function ExhibitionsPage() {
  return (
    <>
      <section className="pt-44 pb-20 mx-auto max-w-[1600px] px-6 md:px-10">
        <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">Programme</p>
        <h1 className="font-display text-[clamp(3rem,7vw,7rem)] leading-[0.95] text-ivory text-balance">
          Exhibitions
        </h1>
        <p className="mt-8 max-w-2xl text-muted-foreground">
          A continuous dialogue between artist and viewer — selected presentations across our home
          in Jinju and partner spaces worldwide.
        </p>
        <p className="mt-4 text-sm text-muted-foreground italic">{education}</p>
      </section>

      {/* Featured Exhibitions */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-20 space-y-32">
        {exhibitions.map((e, i) => (
          <article
            key={i}
            className={`grid md:grid-cols-12 gap-10 items-center ${
              i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="md:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden group">
                <img
                  src={e.img}
                  alt={e.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-border" />
              </div>
            </div>
            <div className="md:col-span-5">
              <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">{e.status}</p>
              <h2 className="font-display text-4xl md:text-5xl text-ivory leading-[1.05] text-balance">
                {e.title}
              </h2>
              <p className="mt-8 text-sm text-muted-foreground">{e.artist}</p>
              <p className="mt-1 text-sm text-ivory">{e.dates}</p>
              <p className="mt-1 text-sm text-muted-foreground">{e.venue}</p>
              <Link
                to="/collections"
                className="mt-10 inline-flex items-center gap-3 border-b border-gold pb-1 text-[11px] uppercase tracking-[0.3em] text-ivory hover:text-gold transition-colors"
              >
                View Details <span aria-hidden>→</span>
              </Link>
            </div>
          </article>
        ))}
      </section>

      <div className="hairline mx-auto max-w-[1600px]" />

      {/* Solo Exhibitions */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-20">
        <h3 className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">Solo Exhibitions</h3>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          {soloExhibitions.map((ev, idx) => (
            <li key={idx}>
              <strong className="text-ivory">{ev.title}</strong> — {ev.date}
              {ev.venue && (
                <> · <span className="text-muted-foreground">{ev.venue}</span></>
              )}
            </li>
          ))}
        </ul>
      </section>

      <div className="hairline mx-auto max-w-[1600px]" />

      {/* Group Exhibitions & Art Fairs */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-20">
        <h3 className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">
          Domestic and International Group Exhibitions and Art Fairs
        </h3>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          {groupExhibitions.map((ev, idx) => (
            <li key={idx}>
              <strong className="text-ivory">{ev.title}</strong> — {ev.date}
              {ev.venue && (
                <> · <span className="text-muted-foreground">{ev.venue}</span></>
              )}
            </li>
          ))}
        </ul>
      </section>

      <div className="hairline mx-auto max-w-[1600px]" />

      {/* Performances */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-20">
        <h3 className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">Performance</h3>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          {performances.map((ev, idx) => (
            <li key={idx}>
              <strong className="text-ivory">{ev.title}</strong> — {ev.date}
              {ev.venue && (
                <> · <span className="text-muted-foreground">{ev.venue}</span></>
              )}
            </li>
          ))}
        </ul>
      </section>

      <div className="hairline mx-auto max-w-[1600px]" />

      {/* Lectures */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-20">
        <h3 className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">Lectures</h3>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          {lectures.map((ev, idx) => (
            <li key={idx}>
              <strong className="text-ivory">{ev.title}</strong> — {ev.date}
            </li>
          ))}
        </ul>
      </section>

      <div className="hairline mx-auto max-w-[1600px]" />

      {/* Full Timeline */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-20">
        <h3 className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">
          Exhibitions Timeline
        </h3>
        <div className="space-y-10">
          {exhibitionsTimeline.map((t) => (
            <div key={t.year}>
              <h4 className="font-display text-2xl text-ivory mb-4">{t.year}</h4>
              <ul className="list-disc pl-6 text-muted-foreground">
                {t.events.map((ev, idx) => (
                  <li key={idx} className="mb-2">
                    <strong className="text-ivory">{ev.title}</strong> — {ev.date}
                    {ev.venue && (
                      <> · <span className="text-muted-foreground">{ev.venue}</span></>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="hairline mx-auto max-w-[1600px]" />

      {/* Memberships & Contact */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-20 grid md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">Memberships</h3>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            {memberships.map((m, idx) => (
              <li key={idx}>{m}</li>
            ))}
          </ul>
        </div>
        <div>
      </section>
    </>
  );
}
