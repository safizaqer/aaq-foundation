import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Postcard } from "@/components/postcard";
import { SectionHeading } from "@/components/section-heading";

export const metadata = { title: "Kamel Arif Vocational Program" };

export default function VocationalPage() {
  return (
    <>
      <PageHeader
        eyebrow="A program of the Foundation"
        title="The Kamel Arif Vocational Program"
        intro="Sewing, embroidery, handicraft, and carpentry training in a workshop on the same campus as the school. Named for Kamel Arif, a quiet patron of the Foundation&rsquo;s early years."
      />

      <div className="mx-auto max-w-3xl px-6 pb-12 prose-foundation">
        <SectionHeading eyebrow="What" title="What gets made, and by whom" />
        <p>
          The vocational workshop trains women and older students from the surrounding community in marketable
          handcrafts. They produce the school&rsquo;s own uniforms, silk-embroidered bags, and household items, and
          some of the work is sold to support the program itself.
        </p>
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-16">
        <div className="grid sm:grid-cols-2 gap-10 items-end justify-items-center">
          <Postcard src="/img/vocational-uniforms.jpg" alt="More than 100 uniforms produced by the vocational program"
                    width={420} height={300} tilt="left" caption="More than 100 school uniforms produced in-house" />
          <Postcard src="/img/vocational-silk-bags.jpg" alt="Silk-embroidered bags from the vocational workshop"
                    width={420} height={300} tilt="right" caption="Silk-embroidered bags made for sale" />
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 pb-20 prose-foundation">
        <SectionHeading eyebrow="Why" title="A trade is also a kind of dignity" />
        <p>
          The Foundation believes that a child&rsquo;s education works best when their mother has work too. The
          vocational program exists so that women from the school&rsquo;s own community can build a steady income
          without leaving the neighbourhood, and so that older students leave the campus with a real trade.
        </p>

        <SectionHeading eyebrow="See also" title="More programs" />
        <p>
          The vocational program is one of five.{" "}
          <Link href="/programs" className="underline hover:opacity-70" style={{ color: "var(--foundation-secondary)" }}>
            Read about the other four &rarr;
          </Link>
        </p>
      </div>
    </>
  );
}
