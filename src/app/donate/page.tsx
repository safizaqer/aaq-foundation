import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { DONATE_PK, CONTACT, QALAM_URL } from "@/lib/site-data";

export const metadata = { title: "Donate" };

export default function DonatePage() {
  return (
    <>
      <PageHeader
        eyebrow="How to give"
        title="Donate."
        intro="The Foundation accepts donations from within Pakistan by bank transfer, and from overseas through The Qalam School&rsquo;s sponsorship programme. Rs. 3,000 a month, or USD 30 a month, sponsors one child."
      />

      <div className="mx-auto max-w-4xl px-6 pb-20">
        {/* ===== INSIDE PAKISTAN ===== */}
        <section className="mb-16">
          <SectionHeading eyebrow="In Pakistan" title="Donate by bank transfer" />
          <div className="border rounded-sm overflow-hidden" style={{ borderColor: "var(--foundation-border)" }}>
            <div className="px-6 py-5 text-xs uppercase tracking-[0.18em]"
                 style={{ background: "var(--foundation-muted)", color: "var(--foundation-muted-fg)" }}>
              Bank Details
            </div>
            <dl className="divide-y" style={{ background: "var(--foundation-card)", borderColor: "var(--foundation-border)" }}>
              {[
                ["Account Name",   DONATE_PK.account_name],
                ["Bank",           DONATE_PK.bank],
                ["Branch",         DONATE_PK.branch],
                ["Account Number", DONATE_PK.account_number],
                ["IBAN",           DONATE_PK.iban],
                ["Sponsorship",    DONATE_PK.sponsorship],
                ["Call or text",   DONATE_PK.contact],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[160px_1fr] sm:grid-cols-[200px_1fr] gap-4 px-6 py-4">
                  <dt className="text-xs uppercase tracking-[0.18em] self-center" style={{ color: "var(--foundation-muted-fg)" }}>{k}</dt>
                  <dd className="tabular text-sm sm:text-base font-medium" style={{ color: "var(--foundation-fg)" }}>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="mt-4 text-sm" style={{ color: "var(--foundation-muted-fg)" }}>
            Please call or text the number above to confirm any transfer. We&rsquo;ll send a receipt and an
            update on the child or program your gift supports.
          </p>
        </section>

        {/* ===== OVERSEAS / US ===== */}
        <section className="mb-16">
          <SectionHeading eyebrow="From the United States" title="Friends of Qalam School" />
          <div className="border rounded-sm p-6 sm:p-8" style={{ borderColor: "var(--foundation-border)", background: "var(--foundation-card)" }}>
            <p className="mb-5 leading-relaxed">
              US donations are channelled through <strong>Friends of Qalam School, Inc.</strong>, a 501(c)(3) nonprofit
              organization (Tax ID <span className="tabular font-medium">45-4910908</span>). 100% of donations support
              the school and its programs &mdash; all US donations are fully tax-deductible. USD 30 a month
              (USD 360 a year) sponsors one child&rsquo;s education, meals, and healthcare for a year.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="tabular">
                <span className="text-xs uppercase tracking-[0.18em] block mb-1" style={{ color: "var(--foundation-muted-fg)" }}>Call or text</span>
                <span className="font-medium">{CONTACT.us_phone}</span>
              </div>
              <div>
                <span className="text-xs uppercase tracking-[0.18em] block mb-1" style={{ color: "var(--foundation-muted-fg)" }}>Email</span>
                <a href={`mailto:${CONTACT.email}`} className="font-medium underline" style={{ color: "var(--foundation-secondary)" }}>
                  {CONTACT.email}
                </a>
              </div>
              <a href={QALAM_URL} target="_blank" rel="noopener"
                 className="ml-auto inline-flex items-center px-5 py-3 rounded-sm text-sm font-medium hover:opacity-90"
                 style={{ background: "var(--foundation-gold)", color: "white" }}>
                Visit The Qalam School &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* ===== OTHER WAYS ===== */}
        <section>
          <SectionHeading eyebrow="Other ways" title="Beyond money" />
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: "Sponsor a student", body: "Cover one child&rsquo;s full year of education, meals, and healthcare." },
              { title: "Feed the school",   body: "Underwrite one week, one month, or one year of daily lunches." },
              { title: "Volunteer your skill", body: "Doctors, teachers, accountants, and builders &mdash; we accept time as readily as money." },
            ].map((c) => (
              <div key={c.title} className="border p-5 rounded-sm" style={{ borderColor: "var(--foundation-border)" }}>
                <h3 className="font-display text-lg font-semibold mb-2" style={{ color: "var(--foundation-primary)" }}>{c.title}</h3>
                <p className="text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: c.body }} />
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm" style={{ color: "var(--foundation-muted-fg)" }}>
            For any of the above, get in touch via the <Link href="/contact" className="underline">contact page</Link>.
          </p>
        </section>
      </div>
    </>
  );
}
