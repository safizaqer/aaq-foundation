import { PageHeader } from "@/components/page-header";
import { Postcard } from "@/components/postcard";
import { SectionHeading } from "@/components/section-heading";

export const metadata = { title: "Founders" };

export default function FoundersPage() {
  return (
    <>
      <PageHeader
        eyebrow="In Memory"
        title="Almas and A. Qadir"
        intro="The Foundation is named for our parents. It carries their disposition into one concrete corner of Rawalpindi."
      />

      <div className="mx-auto max-w-5xl px-6 pb-16">
        <div className="grid md:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-start">
          <div className="flex justify-center md:justify-start">
            <Postcard src="/img/founder-qadir-1.png" alt="Air Vice Marshal Abdul Qadir"
                      width={340} height={420} tilt="left" caption="Air Vice Marshal Abdul Qadir" />
          </div>
          <div className="prose-foundation">
            <SectionHeading eyebrow="b. 24 July 1922" title="Air Vice Marshal Abdul Qadir" />
            <p>
              A. Qadir joined the Royal Indian Air Force in 1944 and flew Spitfires on the Burma Front in
              the Second World War. After the partition of India, he became one of the pioneers of the Pakistan
              Air Force, eventually rising to second-in-command of the service.
            </p>
            <p>
              He served as Commandant of the Air War College in Karachi (formerly the PAF Staff College), and later
              as Director General of Civil Aviation. Those who served alongside him remember a scrupulously honest
              officer, an immaculate dresser, and what Pakistanis of his generation called <em>a true gentleman</em>.
            </p>
            <p>
              He and our mother Almas raised their children to take other people&rsquo;s dignity as a given.
              The Foundation in their name is our family&rsquo;s <em>sadaq-e-jaria</em> for them: a continuing
              charity, an attempt to keep something they would have approved of going.
            </p>
          </div>
        </div>
      </div>

      <section style={{ background: "var(--foundation-muted)", borderTop: "1px solid var(--foundation-border)", borderBottom: "1px solid var(--foundation-border)" }}>
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <p className="font-arabic text-2xl sm:text-3xl leading-[1.7]" style={{ color: "var(--foundation-primary)" }}>
            إِنَّ الإِنسَانَ لَفِي خُسرٍ &middot; إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ
          </p>
          <p className="mt-4 text-sm italic" style={{ color: "var(--foundation-muted-fg)" }}>
            &ldquo;Indeed, mankind is in loss &mdash; except those who believe and do righteous deeds.&rdquo; &mdash; Surah Al-&lsquo;Asr
          </p>
        </div>
      </section>
    </>
  );
}
