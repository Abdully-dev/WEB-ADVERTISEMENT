export function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="grid gap-6 border-t border-border pt-6 lg:grid-cols-[.35fr_1fr]">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{eyebrow}</p>
      <div>
        <h2 className="max-w-4xl font-display text-5xl leading-[0.96] sm:text-6xl">{title}</h2>
        {copy && <p className="mt-6 max-w-2xl text-sm leading-7 text-muted-foreground">{copy}</p>}
      </div>
    </div>
  );
}
