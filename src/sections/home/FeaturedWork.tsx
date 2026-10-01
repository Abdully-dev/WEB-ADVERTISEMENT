import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { values } from "@/data/services";

export function FeaturedWork() {
  return (
    <Section className="lg:py-36">
      <SectionHeading eyebrow="How we work" title="Considered choices. Calm execution." />
      <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
        {values.map(([title, copy], index) => (
          <Reveal key={title} delay={index * 0.08} className="bg-background p-7 lg:min-h-72">
            <p className="text-xs text-muted-foreground">0{index + 1}</p>
            <h3 className="mt-14 font-display text-3xl">{title}</h3>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">{copy}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
