import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export function Story() {
  return (
    <Section>
      <SectionHeading eyebrow="Our philosophy" title="We begin by noticing what is already there." />
      <div className="mt-14 grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground">Light · movement · material · memory</p>
        <Reveal className="space-y-7 font-display text-3xl leading-tight sm:text-4xl">
          <p>The proportions of a room. The quality of its daylight. How people will move, gather and remember.</p>
          <p className="text-muted-foreground">
            Then we add only what strengthens the experience—from a single object to a fully built environment.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
