import { PageIntro } from "@/components/layout/PageIntro";
import { images } from "@/lib/constants";

export function PortfolioHero() {
  return (
    <PageIntro
      eyebrow="Selected work"
      title="Spaces told as stories."
      copy="Each project begins with context and ends as a complete experience—held together by material, scale and light."
      image={images.weddingHall}
      imageAlt="Large wedding reception designed with ivory draping"
    />
  );
}
