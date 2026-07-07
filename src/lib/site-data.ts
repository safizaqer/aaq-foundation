// AAQ Foundation \u2014 single source of truth for shared content.
export const QALAM_URL = "https://qalamschool.com";

export const FOUNDATION_NAME = "AAQ Foundation";
export const FOUNDATION_LONG = "Almas and A. Qadir Foundation";
export const FOUNDATION_TAGLINE = "Five programs of sadaq-e-jaria in Rawalpindi, Pakistan.";

export const NAV: { href: string; label: string }[] = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/aqadir", label: "A. Qadir" },
  { href: "/board", label: "Board" },
  { href: "/financials", label: "Financials" },
  { href: "/contact", label: "Contact" },
];

export const PROGRAMS = [
  {
    slug: "qalam-school",
    name: "The Qalam School",
    short: "A free school for ~320 children on the outskirts of Rawalpindi, founded July 2010. Education, daily meals, uniforms, healthcare \u2014 all at no cost to families.",
    image: "/img/prog-qalam.jpg",
    pkr2025: "19,962,903",
    external: QALAM_URL,
    href: null as string | null,
    detail: null,
  },
  {
    slug: "qalam-vocational-wing",
    name: "Qalam Vocational Wing",
    short: "Sewing, embroidery, handicraft, and carpentry training \u2014 producing the school's uniforms, silk-embroidered bags, and other goods.",
    image: "/img/prog-vocational.png",
    pkr2025: "3,259,193",
    external: null,
    href: "/programs/qalam-vocational-wing",
    detail: true,
  },
  {
    slug: "aaq-health",
    name: "AAQ Health Program",
    short: "On-site clinic established in 2020 with a full-time physician and a pharmacy. Preventive care, checkups, and treatment for students and their families.",
    image: "/img/prog-health.jpg",
    pkr2025: "10,130,781",
    external: null,
    href: null,
    detail: null,
  },
  {
    slug: "aaq-food-ration",
    name: "AAQ Food & Ration Program",
    short: "Daily lunch for ~320 students and staff; a monthly flour ration to 200+ families in the surrounding community; Ramadan rations of dates, rice, oil, and sugar.",
    image: "/img/prog-food.jpg",
    pkr2025: "7,126,948",
    external: null,
    href: null,
    detail: null,
  },
  {
    slug: "aaq-uplift",
    name: "AAQ Uplift Program",
    short: "Seven years old. The Exceptional Hardship Fund: setting up small businesses \u2014 rickshaws, fruit stalls, sewing setups \u2014 and acquiring housing for families in crisis.",
    image: "/img/prog-uplift.jpg",
    pkr2025: "2,274,779",
    external: null,
    href: null,
    detail: null,
  },
];

export const BOARD = [
  { slug: "khurram",    name: "Dr. Khurram Qadir", role: "Founder & Chairman",
    title: "Consultant Gastroenterologist, Northwestern Medicine. Clinical Assistant Professor of Medicine, Feinberg School of Medicine, Northwestern Medicine. Medical School: Army Medical College, 1986",
    location: "Chicago, USA", email: "khurramqadir@sbcglobal.net", image: "/img/board-khurram.png" },
  { slug: "maliha",     name: "Maliha Sikander", role: "Founding Principal",
    title: "30+ years of teaching. Current Principal of The Qalam School Rawalpindi.",
    location: "Rawalpindi, Pakistan", email: "maliha.sikander@gmail.com", image: "/img/board-maliha.png" },

  { slug: "shakaib",    name: "Dr. Shakaib Anwar", role: "Member",
    title: "Principal, Rawal College of Medicine. Ophthalmologist and Department Head, Rawal General Hospital. Board member, Pakistan Foundation Fighting Blindness.",
    location: "Islamabad, Pakistan", email: "occularhorizons@gmail.com", image: "/img/board-shakaib.jpg" },

  { slug: "sijyl",      name: "Ms. Sijyl Ghias", role: "Member",
    title: "MBA, IBA Karachi. Two decades in early childhood education.",
    location: "Dubai, UAE", email: "sijylg@gmail.com", image: "/img/board-sijyl.jpg" },
];

export const CONTACT = {
  email: "qalamschool@gmail.com",
  pk_landline: "+92 51 5150556",
  pk_mobile:   "0314 4289674",
  us_phone:    "+1 630 639 7771",
  instagram:   "@theqalamschool",
  instagram_url: "https://instagram.com/theqalamschool",
  address_lines: ["The Qalam School", "27\u201329, Lane 7", "Gulistan-a-Akbar, Gulistan Colony", "Rawalpindi, Pakistan"],
};

export const DONATE_PK = {
  account_name: "Almas & A. Qadir Charitable Trust",
  bank: "Meezan Bank",
  branch: "Chaklala Scheme 3, Rawalpindi",
  account_number: "0807 0100 704005",
  iban: "PK97 MEZN 0008 0700 7040 05",
  sponsorship: "Rs. 3,000 / month per student",
  contact: "0314 4289674",
};

export const FINANCIALS_2025 = [
  { program: "The Qalam School",            pkr: 19_962_903, share: 40.6 },
  { program: "AAQ Health Program",          pkr: 10_130_781, share: 20.6 },
  { program: "AAQ Food & Ration Program",   pkr:  7_126_948, share: 14.5 },
  { program: "Administrative & Operations", pkr:  6_356_317, share: 12.9 },
  { program: "Qalam Vocational Wing",        pkr:  3_259_193, share:  6.6 },
  { program: "AAQ Uplift Program",          pkr:  2_274_779, share:  4.6 },
];
export const FINANCIALS_TOTAL_2025 = 49_110_921;
export const FINANCIALS_RECEIPTS_2025 = 47_962_485;
export const FINANCIALS_DEFICIT_2025 = 1_185_436;
export const FINANCIALS_ACCUMULATED = 20_945_516;
