import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { FINANCIALS_2024, FINANCIALS_TOTAL_2024, FINANCIALS_RECEIPTS_2024, FINANCIALS_ACCUMULATED } from "@/lib/site-data";

export const metadata = { title: "Financials" };

function fmt(n: number) {
  return n.toLocaleString("en-US");
}

export default function FinancialsPage() {
  const programSpend = FINANCIALS_2024
    .filter((r) => !r.program.toLowerCase().includes("administrative"))
    .reduce((s, r) => s + r.pkr, 0);
  const adminShare = ((FINANCIALS_TOTAL_2024 - programSpend) / FINANCIALS_TOTAL_2024) * 100;
  const programShare = 100 - adminShare;

  return (
    <>
      <PageHeader
        eyebrow="Year ending June 30, 2024"
        title="The 2024 financials."
        intro="The Foundation publishes audited financial statements every year. The figures below are from the 2024 audited statements, in Pakistani Rupees."
      />

      <div className="mx-auto max-w-4xl px-6 pb-12">
        {/* Headline numbers */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          <div className="border-l-2 pl-5" style={{ borderColor: "var(--foundation-gold)" }}>
            <div className="text-xs uppercase tracking-[0.18em] mb-2" style={{ color: "var(--foundation-muted-fg)" }}>
              Total spent
            </div>
            <div className="font-display text-3xl tabular font-semibold" style={{ color: "var(--foundation-primary)" }}>
              PKR {fmt(FINANCIALS_TOTAL_2024)}
            </div>
            <div className="text-xs mt-1" style={{ color: "var(--foundation-muted-fg)" }}>
              roughly USD {Math.round(FINANCIALS_TOTAL_2024 / 280).toLocaleString()}
            </div>
          </div>
          <div className="border-l-2 pl-5" style={{ borderColor: "var(--foundation-gold)" }}>
            <div className="text-xs uppercase tracking-[0.18em] mb-2" style={{ color: "var(--foundation-muted-fg)" }}>
              To programs
            </div>
            <div className="font-display text-3xl tabular font-semibold" style={{ color: "var(--foundation-primary)" }}>
              {programShare.toFixed(1)}%
            </div>
            <div className="text-xs mt-1" style={{ color: "var(--foundation-muted-fg)" }}>
              {adminShare.toFixed(1)}% administrative
            </div>
          </div>
          <div className="border-l-2 pl-5" style={{ borderColor: "var(--foundation-gold)" }}>
            <div className="text-xs uppercase tracking-[0.18em] mb-2" style={{ color: "var(--foundation-muted-fg)" }}>
              Receipts
            </div>
            <div className="font-display text-3xl tabular font-semibold" style={{ color: "var(--foundation-primary)" }}>
              PKR {fmt(FINANCIALS_RECEIPTS_2024)}
            </div>
            <div className="text-xs mt-1" style={{ color: "var(--foundation-muted-fg)" }}>
              donations and other income
            </div>
          </div>
        </div>

        <SectionHeading eyebrow="By program" title="Where it went" />
        <div className="overflow-x-auto">
          <table className="w-full text-sm tabular">
            <thead style={{ background: "var(--foundation-muted)" }}>
              <tr>
                <th className="text-left font-medium px-4 py-3">Program</th>
                <th className="text-right font-medium px-4 py-3">PKR (2024)</th>
                <th className="text-right font-medium px-4 py-3">Share</th>
              </tr>
            </thead>
            <tbody>
              {FINANCIALS_2024.map((row) => (
                <tr key={row.program} style={{ borderBottom: "1px solid var(--foundation-border)" }}>
                  <td className="px-4 py-3">{row.program}</td>
                  <td className="px-4 py-3 text-right">{fmt(row.pkr)}</td>
                  <td className="px-4 py-3 text-right" style={{ color: "var(--foundation-muted-fg)" }}>
                    {row.share.toFixed(1)}%
                  </td>
                </tr>
              ))}
              <tr style={{ background: "var(--foundation-muted)", fontWeight: 500 }}>
                <td className="px-4 py-3" style={{ color: "var(--foundation-primary)" }}>Total</td>
                <td className="px-4 py-3 text-right" style={{ color: "var(--foundation-primary)" }}>
                  {fmt(FINANCIALS_TOTAL_2024)}
                </td>
                <td className="px-4 py-3 text-right" style={{ color: "var(--foundation-muted-fg)" }}>100%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          <div className="border p-6 rounded-sm" style={{ borderColor: "var(--foundation-border)", background: "var(--foundation-card)" }}>
            <div className="text-xs uppercase tracking-[0.18em] mb-2" style={{ color: "var(--foundation-muted-fg)" }}>
              Accumulated balance
            </div>
            <div className="font-display text-xl tabular" style={{ color: "var(--foundation-primary)" }}>
              PKR {fmt(FINANCIALS_ACCUMULATED)}
            </div>
            <p className="text-sm mt-3 leading-relaxed">
              Held as fixed assets, investments, loans receivable, and cash. Provides operating runway across
              fiscal years and supports the Uplift program&rsquo;s revolving loans.
            </p>
          </div>
          <div className="border p-6 rounded-sm" style={{ borderColor: "var(--foundation-border)", background: "var(--foundation-card)" }}>
            <div className="text-xs uppercase tracking-[0.18em] mb-2" style={{ color: "var(--foundation-muted-fg)" }}>
              Audit
            </div>
            <p className="text-sm mt-1 leading-relaxed">
              The Foundation&rsquo;s 2024 statements were audited by an independent chartered accountant. The full
              audit report is available on request &mdash; please email{" "}
              <a href="mailto:qalamschool@gmail.com" className="underline" style={{ color: "var(--foundation-secondary)" }}>
                qalamschool@gmail.com
              </a>.
            </p>
          </div>
        </div>

        <p className="text-xs mt-10" style={{ color: "var(--foundation-muted-fg)" }}>
          All figures in Pakistani Rupees. USD conversion is approximate, at PKR 280 / USD. The AAQ Foundation is a
          charitable trust registered in Pakistan. US donations are channelled through Friends of Qalam School, Inc.,
          a 501(c)(3) nonprofit organization (Tax ID 45-4910908).
        </p>
      </div>
    </>
  );
}
