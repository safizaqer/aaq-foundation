import Image from "next/image";
import Link from "next/link";
import { PROGRAMS, QALAM_URL } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";
import { Postcard } from "@/components/postcard";

export default function HomePage() {
  return (
    <>
      {/* ============================== Hero (typographic, no photo) ============================== */}
      <section className="border-b" style={{ borderColor: "var(--foundation-border)" }}>
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] mb-6" style={{ color: "var(--foundation-gold)" }}>
              <span className="gold-rule" />Est. 2011, Pakistan
            </div>
            <h1 className="font-display text-[28px] sm:text-[34px] lg:text-[44px] font-semibold tracking-tight leading-[1.05]"
                style={{ color: "var(--foundation-primary)" }}>
              Five programs, one quiet purpose.
            </h1>
            <p className="mt-8 text-lg sm:text-xl leading-relaxed max-w-2xl">
              The Almas and Abdul Qadir Foundation supports five welfare programs on the outskirts of Rawalpindi:
              a free school, vocational training, a clinic, daily meals and rations, and an exceptional hardship fund.
              All of it operates as <em className="font-display italic" style={{ color: "var(--foundation-secondary)" }}>sadaq-e-jaria</em> in
              memory of Almas and Air Vice Marshal Abdul Qadir.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/programs"
                    className="inline-flex items-center px-6 py-3 rounded-sm text-sm font-medium text-white hover:opacity-90 transition-opacity"
                    style={{ background: "var(--foundation-primary)" }}>
                See the five programs
              </Link>
              <Link href="/donate"
                    className="inline-flex items-center px-6 py-3 rounded-sm text-sm font-medium border hover:bg-[var(--foundation-gold)] hover:text-white hover:border-transparent transition-colors"
                    style={{ borderColor: "var(--foundation-gold)", color: "var(--foundation-gold)" }}>
                Donate
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex justify-center pt-4">
            <Postcard src="/img/hero-two-boys.png" alt="Children at the Qalam School" width={320} height={420}
                      tilt="right" caption="Outside the Qalam School, Rawalpindi" />
          </div>
          <div className="lg:hidden flex justify-center">
            <Postcard src="/img/hero-two-boys.png" alt="Children at the Qalam School" width={240} height={320}
                      tilt="right" caption="Outside the Qalam School, Rawalpindi" />
          </div>
        </div>
      </section>

      {/* ============================== Programs at a glance ============================== */}
      <section className="border-b" style={{ borderColor: "var(--foundation-border)" }}>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading eyebrow="The Five Programs" title="What we do, in five parts" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROGRAMS.map((p, i) => (
              <article key={p.slug} className="flex flex-col">
                <div className={`postcard ${i % 3 === 0 ? "tilt-left" : i % 3 === 2 ? "tilt-right" : "straight"} mb-5 self-start`}>
                  <Image src={p.image} alt={p.name} width={400} height={280}
                         className="block object-cover" style={{ width: "100%", height: "200px", maxWidth: "320px" }} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2" style={{ color: "var(--foundation-primary)" }}>
                  {p.name}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--foundation-fg)" }}>{p.short}</p>
                <div className="mt-auto">
                  {p.external ? (
                    <a href={p.external} target="_blank" rel="noopener"
                       className="inline-flex items-center text-sm font-medium hover:underline"
                       style={{ color: "var(--foundation-secondary)" }}>
                      Visit The Qalam School &rarr;
                    </a>
                  ) : p.href ? (
                    <Link href={p.href} className="inline-flex items-center text-sm font-medium hover:underline"
                          style={{ color: "var(--foundation-secondary)" }}>
                      Read more &rarr;
                    </Link>
                  ) : (
                    <Link href="/programs" className="inline-flex items-center text-sm font-medium hover:underline"
                          style={{ color: "var(--foundation-secondary)" }}>
                      Full programs page &rarr;
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== Sadaq-e-jaria band (Arabic) ============================== */}
      <section style={{ background: "var(--foundation-muted)", borderTop: "1px solid var(--foundation-border)", borderBottom: "1px solid var(--foundation-border)" }}>
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <p className="font-arabic text-3xl sm:text-4xl leading-[1.6]" style={{ color: "var(--foundation-primary)" }}>
            صَدَقَةٌ جَارِيَةٌ
          </p>
          <p className="mt-5 text-sm uppercase tracking-[0.22em]" style={{ color: "var(--foundation-muted-fg)" }}>
            sadaq-e-jaria &mdash; a continuing charity
          </p>
          <p className="mt-6 text-lg leading-relaxed">
            Every act of giving on behalf of someone you love continues their work in the world.
            This foundation is our family&rsquo;s sadaq-e-jaria for our parents.
          </p>
        </div>
      </section>

      {/* ============================== Where the work happens ============================== */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading eyebrow="Rawalpindi" title="A school, a clinic, a community." />
            <p className="mb-4">
              All five programs operate from the same modest campus on the outskirts of Rawalpindi: a free
              school of about 320 children, a vocational workshop, a clinic with a full-time physician,
              a kitchen serving daily meals, and an outreach office that distributes monthly rations.
            </p>
            <p>
              The Foundation was established as a charitable trust in Pakistan in 2011 by the children
              of Almas and Air Vice Marshal Abdul Qadir. The Qalam School,{" "}
              <a href={QALAM_URL} target="_blank" rel="noopener" className="underline hover:opacity-70"
                 style={{ color: "var(--foundation-secondary)" }}>which has its own site</a>,
              is its largest project.
            </p>
          </div>
          <div className="flex justify-center">
            <Postcard src="/img/landscape-rural.jpg" alt="The surrounding landscape outside Rawalpindi"
                      width={460} height={320} tilt="left" caption="The Qalam School, Gulistan Colony, Rawalpindi" />
          </div>
        </div>
      </section>

      {/* ============================== Donate CTA strip ============================== */}
      <section style={{ background: "var(--foundation-primary)", color: "var(--foundation-bg)" }}>
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            Every rupee, every dollar reaches the work.
          </h2>
          <p className="text-lg opacity-90 mb-8">
            About 88% of the Foundation&rsquo;s annual spend goes directly to the five programs.
            The rest covers audited operations.{" "}
            <Link href="/financials" className="underline hover:opacity-70">See the 2025 financials &rarr;</Link>
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/donate"
                  className="inline-flex items-center px-6 py-3 rounded-sm text-sm font-medium hover:opacity-90 transition-opacity"
                  style={{ background: "var(--foundation-gold)", color: "white" }}>
              How to donate
            </Link>
            <Link href="/about"
                  className="inline-flex items-center px-6 py-3 rounded-sm text-sm font-medium border hover:bg-white hover:text-[var(--foundation-primary)] transition-colors"
                  style={{ borderColor: "var(--foundation-bg)" }}>
              About the Foundation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
