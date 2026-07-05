import Link from "next/link";
import Image from "next/image";
import { CONTACT, QALAM_URL, FOUNDATION_LONG } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer
      className="mt-20"
      style={{ background: "var(--foundation-footer-bg)", color: "var(--foundation-footer-fg)" }}
    >
      <div className="mx-auto max-w-6xl px-6 py-12 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <Image
            src="/img/aaq-logo.svg"
            alt="AAQ Foundation logo"
            width={64}
            height={64}
            className="mb-4"
          />
          <div className="font-display text-xl mb-2" style={{ color: "#F5F1E8" }}>AAQ Foundation</div>
          <p className="opacity-80 leading-relaxed">{FOUNDATION_LONG}. Operating five welfare programs in Rawalpindi, Pakistan.</p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.18em] mb-3 opacity-70">Visit</div>
          <ul className="space-y-2">
            <li><Link href="/about"      className="hover:opacity-70">About</Link></li>
            <li><Link href="/programs"   className="hover:opacity-70">Programs</Link></li>
            <li><Link href="/aqadir"   className="hover:opacity-70">A. Qadir</Link></li>
            <li><Link href="/board"      className="hover:opacity-70">Board</Link></li>
            <li><Link href="/financials" className="hover:opacity-70">Financials</Link></li>
            <li><a href={QALAM_URL} target="_blank" rel="noopener" className="hover:opacity-70">The Qalam School &rarr;</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.18em] mb-3 opacity-70">Contact</div>
          <ul className="space-y-2">
            <li><a href={`mailto:${CONTACT.email}`} className="hover:opacity-70">{CONTACT.email}</a></li>
            <li className="opacity-80">{CONTACT.pk_landline} <span className="opacity-60">(Pakistan)</span></li>
            <li className="opacity-80">{CONTACT.us_phone} <span className="opacity-60">(USA)</span></li>
            <li><a href={CONTACT.instagram_url} target="_blank" rel="noopener" className="hover:opacity-70">{CONTACT.instagram}</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.18em] mb-3 opacity-70">Address</div>
          <address className="not-italic opacity-80 leading-relaxed">
            {CONTACT.address_lines.map((l) => (<div key={l}>{l}</div>))}
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-5 text-xs opacity-60 flex flex-col md:flex-row md:justify-between gap-2">
          <div>&copy; {new Date().getFullYear()} {FOUNDATION_LONG}. Registered in Pakistan.</div>
          <div>Sadaq-e-jaria in memory of Almas and Air Vice Marshal Abdul Qadir.</div>
        </div>
      </div>
    </footer>
  );
}
