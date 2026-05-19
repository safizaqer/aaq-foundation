export function SectionHeading({ eyebrow, title, className = "" }: { eyebrow?: string; title: string; className?: string }) {
  return (
    <div className={`mb-8 ${className}`}>
      {eyebrow && (
        <div className="text-xs uppercase tracking-[0.22em] mb-3" style={{ color: "var(--foundation-gold)" }}>
          <span className="gold-rule" />{eyebrow}
        </div>
      )}
      <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight" style={{ color: "var(--foundation-primary)" }}>
        {title}
      </h2>
    </div>
  );
}
