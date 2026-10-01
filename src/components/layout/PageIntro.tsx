interface PageIntroProps {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
}

/** Full-bleed hero used at the top of interior pages. */
export function PageIntro({ eyebrow, title, copy, image, imageAlt }: PageIntroProps) {
  return (
    <section className="relative min-h-[78svh] overflow-hidden bg-primary text-primary-foreground">
      <img src={image} alt={imageAlt} width={1600} height={1200} className="absolute inset-0 h-full w-full object-cover opacity-65" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/25 to-primary/25" />
      <div className="editorial-container relative flex min-h-[78svh] flex-col justify-end pb-14 pt-36 lg:pb-20">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em]">{eyebrow}</p>
        <h1 className="max-w-5xl font-display text-6xl leading-[0.88] sm:text-7xl lg:text-8xl">{title}</h1>
        <p className="mt-7 max-w-xl text-sm leading-7 text-primary-foreground/80 sm:text-base">{copy}</p>
      </div>
    </section>
  );
}
