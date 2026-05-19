import { PageHeader } from "@/components/page-header";
import { CONTACT } from "@/lib/site-data";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Contact."
        intro="We read every message. The fastest reply is by email; phone works during Pakistan and US business hours."
      />

      <div className="mx-auto max-w-3xl px-6 pb-20 grid sm:grid-cols-2 gap-10">
        <div>
          <div className="text-xs uppercase tracking-[0.18em] mb-3" style={{ color: "var(--foundation-gold)" }}>
            <span className="gold-rule" />Email
          </div>
          <p className="mb-8">
            <a href={`mailto:${CONTACT.email}`} className="font-display text-xl underline hover:opacity-70" style={{ color: "var(--foundation-secondary)" }}>
              {CONTACT.email}
            </a>
          </p>

          <div className="text-xs uppercase tracking-[0.18em] mb-3" style={{ color: "var(--foundation-gold)" }}>
            <span className="gold-rule" />Phone
          </div>
          <ul className="space-y-3 mb-8">
            <li>
              <div className="text-xs uppercase tracking-[0.18em] mb-1" style={{ color: "var(--foundation-muted-fg)" }}>Pakistan, school office</div>
              <div className="tabular font-medium">{CONTACT.pk_landline}</div>
            </li>
            <li>
              <div className="text-xs uppercase tracking-[0.18em] mb-1" style={{ color: "var(--foundation-muted-fg)" }}>Pakistan, donations</div>
              <div className="tabular font-medium">{CONTACT.pk_mobile}</div>
            </li>
            <li>
              <div className="text-xs uppercase tracking-[0.18em] mb-1" style={{ color: "var(--foundation-muted-fg)" }}>United States</div>
              <div className="tabular font-medium">{CONTACT.us_phone}</div>
            </li>
          </ul>

          <div className="text-xs uppercase tracking-[0.18em] mb-3" style={{ color: "var(--foundation-gold)" }}>
            <span className="gold-rule" />Instagram
          </div>
          <p>
            <a href={CONTACT.instagram_url} target="_blank" rel="noopener" className="underline hover:opacity-70"
               style={{ color: "var(--foundation-secondary)" }}>
              {CONTACT.instagram}
            </a>
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.18em] mb-3" style={{ color: "var(--foundation-gold)" }}>
            <span className="gold-rule" />Address
          </div>
          <address className="not-italic leading-relaxed mb-8" style={{ color: "var(--foundation-fg)" }}>
            {CONTACT.address_lines.map((l) => <div key={l}>{l}</div>)}
          </address>
          <div className="border p-5 rounded-sm" style={{ borderColor: "var(--foundation-border)", background: "var(--foundation-card)" }}>
            <p className="text-sm leading-relaxed">
              <strong className="font-display block mb-1" style={{ color: "var(--foundation-primary)" }}>A note on response time</strong>
              The Foundation is run by volunteers across three time zones. We aim to reply within a few days.
              For donation receipts or urgent matters, please mark your subject line accordingly.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
