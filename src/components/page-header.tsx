type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
};

export function PageHeader({ eyebrow, title, intro }: Props) {
  return (
    <header className="mx-auto max-w-3xl px-6 pt-20 pb-12">
      {eyebrow && (
        <div className="text-xs uppercase tracking-[0.22em] mb-4" style={{ color: "var(--foundation-gold)" }}>
          {eyebrow}
        </div>
      )}
      <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]"
          style={{ color: "var(--foundation-primary)" }}>
        {title}
      </h1>
      {intro && (
        <p className="mt-6 text-lg sm:text-xl leading-relaxed" style={{ color: "var(--foundation-fg)" }}>
          {intro}
        </p>
      )}
    </header>
  );
}
