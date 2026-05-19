import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { BOARD } from "@/lib/site-data";

export const metadata = { title: "Board of Trustees" };

export default function BoardPage() {
  return (
    <>
      <PageHeader
        eyebrow="Trustees"
        title="The Board"
        intro="A small group of family members and longstanding friends. Most have spent careers in medicine, education, accounting, or international development. None are paid."
      />

      <div className="mx-auto max-w-5xl px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-12">
          {BOARD.map((m) => (
            <article key={m.slug} className="flex gap-5 items-start">
              <div className="postcard straight shrink-0" style={{ padding: 6 }}>
                <Image src={m.image} alt={m.name} width={110} height={130}
                       className="block object-cover"
                       style={{ width: "110px", height: "130px" }} />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="font-display text-lg font-semibold tracking-tight"
                    style={{ color: "var(--foundation-primary)" }}>
                  {m.name}
                </h2>
                <div className="text-xs uppercase tracking-[0.18em] mt-1 mb-3" style={{ color: "var(--foundation-gold)" }}>
                  {m.role}
                </div>
                <p className="text-sm leading-relaxed mb-3">{m.title}</p>
                <div className="text-xs space-y-1" style={{ color: "var(--foundation-muted-fg)" }}>
                  <div>{m.location}</div>
                  <div>
                    <a href={`mailto:${m.email}`} className="hover:underline" style={{ color: "var(--foundation-secondary)" }}>
                      {m.email}
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
