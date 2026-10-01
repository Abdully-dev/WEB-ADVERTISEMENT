import { Section } from "@/components/layout/Section";

const materials = ["Furniture", "Lighting", "Vases & vessels", "Curtains & draping", "Wall decoration", "Event equipment"];

export function ServiceShowcase() {
  return (
    <Section className="bg-secondary" containerClassName="grid gap-10 lg:grid-cols-2">
      <h2 className="font-display text-5xl">Materials that become part of the story.</h2>
      <div className="grid grid-cols-2 gap-x-8 text-sm leading-10 text-muted-foreground">
        {materials.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
    </Section>
  );
}
