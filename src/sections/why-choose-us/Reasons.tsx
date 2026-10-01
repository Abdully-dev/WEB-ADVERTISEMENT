import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { values } from "@/data/services";

export function Reasons() {
  return (
    <Section>
      <SectionHeading eyebrow="The difference" title="A disciplined eye at every scale." />
      <div className="mt-16 grid gap-px bg-border sm:grid-cols-2">
        {values.map(([title, copy], i) => (
          <Reveal key={title} delay={i * 0.08} className="min-h-72 bg-background p-8 lg:p-12">
            <p className="text-xs text-muted-foreground">0{i + 1}</p>
            <h2 className="mt-16 font-display text-4xl">{title}</h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">{copy}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
