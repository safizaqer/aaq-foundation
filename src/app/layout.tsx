import type { Metadata } from "next";
import { Fraunces, Inter, Amiri } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], display: "swap" });
const inter    = Inter({    variable: "--font-inter",    subsets: ["latin"], display: "swap" });
const amiri    = Amiri({    variable: "--font-amiri",    subsets: ["arabic"], weight: ["400","700"], display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "AAQ Foundation \u2014 Almas and A. Qadir Foundation",
    template: "%s \u2014 AAQ Foundation",
  },
  description:
    "The Almas and A. Qadir Foundation supports five welfare programs in Rawalpindi, Pakistan \u2014 The Qalam School, Qalam Vocational Wing, AAQ Health, AAQ Food & Ration, and AAQ Uplift. Sadaq-e-jaria in memory of Almas and Air Vice Marshal Abdul Qadir.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${amiri.variable}`}>
      <body className="min-h-dvh flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
