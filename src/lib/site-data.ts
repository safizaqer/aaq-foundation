// AAQ Foundation \u2014 single source of truth for shared content.
export const QALAM_URL = "https://safizaq-6bf4-42007.nebula.me";

export const FOUNDATION_NAME = "AAQ Foundation";
export const FOUNDATION_LONG = "Almas and A. Qadir Foundation";
export const FOUNDATION_TAGLINE = "Five programs of sadaq-e-jaria in Rawalpindi, Pakistan.";

export const NAV: { href: string; label: string }[] = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/founders", label: "Founders" },
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
    pkr2024: "10,381,680",
    external: QALAM_URL,
    href: null as string | null,
    detail: null,
  },
  {
    slug: "kamel-arif-vocational",
    name: "Kamel Arif Vocational Program",
    short: "Sewing, embroidery, handicraft, and carpentry training \u2014 producing the school's uniforms, silk-embroidered bags, and other goods. Named for Kamel Arif, a quiet patron.",
    image: "/img/prog-vocational.png",
    pkr2024: "3,928,311",
    external: null,
    href: "/programs/kamel-arif-vocational",
    detail: true,
  },
  {
    slug: "aaq-health",
    name: "AAQ Health Program",
    short: "On-site clinic established in 2020 with a full-time physician and a pharmacy. Preventive care, checkups, and treatment for students and their families.",
    image: "/img/prog-health.jpg",
    pkr2024: "5,256,863",
    external: null,
    href: null,
    detail: null,
  },
  {
    slug: "aaq-food-ration",
    name: "AAQ Food & Ration Program",
    short: "Daily lunch for ~320 students and staff; a monthly flour ration to 200+ families in the surrounding community; Ramadan rations of dates, rice, oil, and sugar.",
    image: "/img/prog-food.jpg",
    pkr2024: "6,322,610",
    external: null,
    href: null,
    detail: null,
  },
  {
    slug: "aaq-uplift",
    name: "AAQ Uplift Program",
    short: "Seven years old. The Exceptional Hardship Fund: setting up small businesses \u2014 rickshaws, fruit stalls, sewing setups \u2014 and acquiring housing for families in crisis.",
    image: "/img/prog-uplift.jpg",
    pkr2024: "4,237,131",
    external: null,
    href: null,
    detail: null,
  },
];

export const BOARD = [
  { slug: "khurram",    name: "Dr. Khurram Qadir", role: "Founder & Chairman",
    title: "Consultant Gastroenterologist, Northwestern Medicine. Clinical Asst. Prof., Feinberg School of Medicine. Army Medical College, Rawalpindi, '86.",
    location: "Chicago, USA", email: "khurramqadir@sbcglobal.net", image: "/img/board-khurram.png" },
  { slug: "maliha",     name: "Maliha Sikander", role: "Founding Principal",
    title: "30+ years of teaching. Current Principal of The Qalam School Rawalpindi.",
    location: "Rawalpindi, Pakistan", email: "maliha.sikander@gmail.com", image: "/img/board-maliha.png" },
  { slug: "amber",      name: "Amber Ghias", role: "Founding Member, Consultant to the Board",
    title: "Former teacher, Froebel's School, Karachi. Retired.",
    location: "Karachi, Pakistan", email: "amberghias@gmail.com", image: "/img/board-amber.png" },
  { slug: "sharfuddin", name: "Syed Sharfuddin", role: "Member",
    title: "Author and thinker. Retired, Commonwealth Consultants UK. Former CEO of Muslim Aid UK.",
    location: "London, UK", email: "sharaf.sharfuddin@googlemail.com", image: "/img/board-sharfuddin.png" },
  { slug: "shakaib",    name: "Dr. Shakaib Anwar", role: "Member",
    title: "Principal, Rawal College of Medicine. Ophthalmologist and Department Head, Rawal General Hospital. Board member, Pakistan Foundation Fighting Blindness.",
    location: "Islamabad, Pakistan", email: "occularhorizons@gmail.com", image: "/img/board-shakaib.jpg" },
  { slug: "samman",     name: "Ms. Samman Islam", role: "Member",
    title: "CEO, Human Development Foundation (HDF). Chartered Certified Accountant with 14+ years of experience.",
    location: "Rawalpindi, Pakistan", email: "sammanislam@hotmail.com", image: "/img/board-samman.jpg" },
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

export const FINANCIALS_2024 = [
  { program: "The Qalam School",            pkr: 10_381_680, share: 21.3 },
  { program: "AAQ Food & Ration Program",   pkr:  6_322_610, share: 13.0 },
  { program: "AAQ Health Program",          pkr:  5_256_863, share: 10.8 },
  { program: "AAQ Uplift Program",          pkr:  4_237_131, share:  8.7 },
  { program: "Kamel Arif Vocational",       pkr:  3_928_311, share:  8.0 },
  { program: "Administrative & Operations", pkr:  5_694_018, share: 11.7 },
];
export const FINANCIALS_TOTAL_2024 = 48_820_613;
export const FINANCIALS_RECEIPTS_2024 = 48_657_823;
export const FINANCIALS_ACCUMULATED = 28_039_292;
