import { Section } from "@/components/layout/Section";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { images } from "@/lib/constants";

export function Experience() {
  return (
    <Section className="pb-24 pt-0 lg:pt-0" containerClassName="grid gap-5 md:grid-cols-[1.2fr_.8fr]">
      <ImageReveal
        src={images.weddingHall}
        alt="Wedding environment created with natural textures"
        width={1600}
        height={1200}
        imgClassName="min-h-96"
      />
      <ImageReveal
        src={images.materialsStilllife}
        alt="Curated decorative materials"
        width={1200}
        height={1504}
        imgClassName="max-h-[46rem]"
      />
    </Section>
  );
}
