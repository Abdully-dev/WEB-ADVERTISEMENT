import { PageIntro } from "@/components/layout/PageIntro";
import { images } from "@/lib/constants";

export function AboutHero() {
  return (
    <PageIntro
      eyebrow="About the studio"
      title="We make atmosphere tangible."
      copy="Atelier Nuru is a decoration studio and materials collection shaped by a belief that a room should feel as considered as it looks."
      image={images.interiorRoom}
      imageAlt="Warm contemporary interior with sculptural furniture"
    />
  );
}
