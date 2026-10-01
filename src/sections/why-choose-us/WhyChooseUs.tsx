import { PageIntro } from "@/components/layout/PageIntro";
import { Section } from "@/components/layout/Section";
import { images } from "@/lib/constants";
import { Reasons } from "./Reasons";

export function WhyChooseUs() {
  return (
    <>
      <PageIntro
        eyebrow="Why Atelier Nuru"
        title="Beauty supported by judgment."
        copy="A strong result comes from thousands of quiet decisions—what to include, what to leave out and how every piece serves the whole."
        image={images.materialsStilllife}
        imageAlt="Handcrafted decorative objects in ceramic, glass and brass"
      />
      <Reasons />
      <Section className="bg-accent text-accent-foreground" containerClassName="grid gap-12 lg:grid-cols-2">
        <p className="text-xs uppercase tracking-[0.2em]">Our promise</p>
        <p className="font-display text-4xl leading-tight sm:text-5xl">
          We will not add for the sake of adding. Every material, object and gesture must earn its place.
        </p>
      </Section>
    </>
  );
}
