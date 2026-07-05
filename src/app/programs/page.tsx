import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { PROGRAMS, QALAM_URL } from "@/lib/site-data";

export const metadata = { title: "Programs" };

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Five Programs"
        title="What we do."
        intro="Five overlapping efforts that share one campus, one team, and one community. Education is the heart; everything else exists so that education can happen well."
      />

      <div className="mx-auto max-w-5xl px-6 pb-20 space-y-16">
        {PROGRAMS.map((p, i) => (
          <article key={p.slug}
                   className="grid md:grid-cols-[1fr_1.4fr] gap-8 lg:gap-12 items-start"
                   style={{ borderTop: i === 0 ? "none" : "1px solid var(--foundation-border)", paddingTop: i === 0 ? 0 : "3rem" }}>
            <div className="flex justify-center md:justify-start">
              <div className={`postcard ${i % 2 === 0 ? "tilt-left" : "tilt-right"}`}>
                <Image src={p.image} alt={p.name} width={400} height={300}
                       className="block object-cover" style={{ width: "100%", height: "220px", maxWidth: "360px" }} />
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight mb-3"
                  style={{ color: "var(--foundation-primary)" }}>
                {p.name}
              </h2>
              <p className="leading-relaxed mb-5">{p.short}</p>
              <div className="flex items-center gap-4 text-xs flex-wrap">
                <span className="uppercase tracking-[0.18em]" style={{ color: "var(--foundation-muted-fg)" }}>
                  2025 spend
                </span>
                <span className="tabular font-medium" style={{ color: "var(--foundation-primary)" }}>
                  PKR {p.pkr2025}
                </span>
                {p.external && (
                  <a href={p.external} target="_blank" rel="noopener"
                     className="ml-auto inline-flex items-center text-sm font-medium hover:underline"
                     style={{ color: "var(--foundation-secondary)" }}>
                    Visit the school site &rarr;
                  </a>
                )}
                {p.href && (
                  <Link href={p.href}
                        className="ml-auto inline-flex items-center text-sm font-medium hover:underline"
                        style={{ color: "var(--foundation-secondary)" }}>
                    Read full page &rarr;
                  </Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <section style={{ background: "var(--foundation-muted)", borderTop: "1px solid var(--foundation-border)" }}>
        <div className="mx-auto max-w-3xl px-6 py-12 text-center">
          <p className="text-sm uppercase tracking-[0.22em] mb-3" style={{ color: "var(--foundation-gold)" }}>
            <span className="gold-rule" />The School
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-3" style={{ color: "var(--foundation-primary)" }}>
            The Qalam School has its own home.
          </h2>
          <p className="mb-6">
            Photos of the classrooms, the daily routine, the children, the sponsor program &mdash; all of it lives on
            the school&rsquo;s dedicated site.
          </p>
          <a href={QALAM_URL} target="_blank" rel="noopener"
             className="inline-flex items-center px-6 py-3 rounded-sm text-sm font-medium text-white hover:opacity-90"
             style={{ background: "var(--foundation-primary)" }}>
            Visit The Qalam School &rarr;
          </a>
        </div>
      </section>
    </>
  );
}
