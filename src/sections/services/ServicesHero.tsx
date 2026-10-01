import { PageIntro } from "@/components/layout/PageIntro";
import { images } from "@/lib/constants";

export function ServicesHero() {
  return (
    <PageIntro
      eyebrow="Services"
      title="We create the room, not just the decoration."
      copy="Concept, sourcing, styling and installation come together in one visual language—so every detail belongs."
      image={images.eveningEvent}
      imageAlt="Candlelit private event table under a modern canopy"
    />
  );
}
