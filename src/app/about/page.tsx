import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { Postcard } from "@/components/postcard";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About the Foundation"
        title="A quiet foundation, a long memory."
        intro="The Almas and A. Qadir Foundation was established in 2011 by the children of Almas and Air Vice Marshal Abdul Qadir. It exists for one reason: to continue, in their name, the kind of practical generosity that shaped them."
      />

      <div className="mx-auto max-w-3xl px-6 pb-16 prose-foundation">
        <SectionHeading eyebrow="Why" title="Sadaq-e-jaria" />
        <p>
          In Islam, <em>sadaq-e-jaria</em> describes a continuing charity &mdash; a good deed whose benefit keeps reaching
          others after the giver is gone. A built well. A school. A trained physician. A child fed. The work outlives the
          hand that began it.
        </p>
        <p>
          Almas and A. Qadir lived modest, dignified lives that took the dignity of others as a given. The Foundation
          named for them carries that disposition forward into one concrete corner of Rawalpindi, Pakistan.
        </p>

        <div className="my-12 flex justify-center">
          <Postcard src="/img/boy-writing-urdu.jpg" alt="A student writing Urdu at the Qalam School"
                    width={520} height={340} tilt="right" caption="A student at the Qalam School, Rawalpindi" />
        </div>

        <SectionHeading eyebrow="How" title="One campus, five programs" />
        <p>
          Everything happens from the same modest campus: <strong>The Qalam School</strong> (founded 2010, the founding
          project), the <strong>Kamel Arif Vocational Program</strong> (sewing, embroidery, carpentry), the{" "}
          <strong>AAQ Health Program</strong> (clinic, full-time physician, pharmacy), the{" "}
          <strong>AAQ Food &amp; Ration Program</strong> (daily meals, monthly flour rations, Ramadan rations), and
          the <strong>AAQ Uplift Program</strong> (rickshaws, fruit stalls, sewing setups, housing for families
          in crisis).
        </p>
        <p>
          The Foundation is registered as a charitable trust in Pakistan. The work is small enough to know every
          family it touches, and disciplined enough to publish an audited financial statement every year.
        </p>
        <p>
          US donations are channelled through <strong>Friends of Qalam School, Inc.</strong>, a 501(c)(3) nonprofit
          organization in the United States (Tax ID <span className="tabular">45-4910908</span>). The two entities work
          in coordination: the Foundation operates the programs on the ground in Rawalpindi; Friends of Qalam School
          channels US tax-deductible donations to support them.
        </p>

        <SectionHeading eyebrow="Who" title="Family and friends" />
        <p>
          The Foundation has no paid fundraising staff. The board is a small group of family members and longstanding
          friends, most of whom have spent careers in medicine, education, or development. Day-to-day operations on
          the ground are led by the Principal of the Qalam School. There is no overhead beyond the audited
          administrative line in the financials.
        </p>
      </div>
    </>
  );
}
