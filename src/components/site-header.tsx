import Link from "next/link";
import Image from "next/image";
import { NAV, FOUNDATION_NAME } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header
      className="border-b"
      style={{ background: "var(--foundation-bg)", borderColor: "var(--foundation-border)" }}
    >
      <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/img/aaq-logo.svg"
            alt="AAQ Foundation logo"
            width={48}
            height={48}
            className="shrink-0"
            priority
          />
          <div>
            <div className="font-display text-2xl tracking-tight" style={{ color: "var(--foundation-primary)" }}>
              {FOUNDATION_NAME}
            </div>
            <div className="text-xs mt-1 uppercase tracking-[0.18em]" style={{ color: "var(--foundation-muted-fg)" }}>
              Almas and A. Qadir Foundation
            </div>
          </div>
        </Link>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium" aria-label="Primary">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="hover:opacity-70 transition-opacity"
              style={{ color: "var(--foundation-fg)" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/donate"
            className="inline-flex items-center px-4 py-1 rounded-sm border text-sm font-medium hover:bg-[var(--foundation-gold)] hover:text-white transition-colors"
            style={{
              borderColor: "var(--foundation-gold)",
              color: "var(--foundation-gold)",
            }}
          >
            Donate
          </Link>
        </nav>
      </div>
    </header>
  );
}
