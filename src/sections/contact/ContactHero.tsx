import { PageIntro } from "@/components/layout/PageIntro";
import { images } from "@/lib/constants";

export function ContactHero() {
  return (
    <PageIntro
      eyebrow="Contact"
      title="Tell us about the space."
      copy="Share the occasion, location and the atmosphere you have in mind. We will shape the next conversation from there."
      image={images.interiorRoom}
      imageAlt="Warm living room styled with sculptural furniture"
    />
  );
}
