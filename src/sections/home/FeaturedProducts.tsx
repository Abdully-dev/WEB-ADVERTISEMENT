import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { images } from "@/lib/constants";

export function FeaturedProducts() {
  return (
    <Section className="lg:py-36" containerClassName="grid gap-5 lg:grid-cols-[.78fr_1.22fr]">
      <ImageReveal
        src={images.materialsStilllife}
        alt="Sculptural vases, lighting and decorative objects"
        width={1200}
        height={1504}
        imgClassName="aspect-[4/5]"
      />
      <div className="flex flex-col justify-between bg-primary p-7 text-primary-foreground sm:p-12 lg:p-16">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-primary-foreground/60">The collection</p>
          <h2 className="mt-5 max-w-2xl font-display text-5xl leading-[0.95] sm:text-6xl">
            Objects with texture, weight and purpose.
          </h2>
        </div>
        <div className="mt-24 grid gap-7 border-t border-primary-foreground/20 pt-7 sm:grid-cols-2">
          <p className="text-sm leading-7 text-primary-foreground/70">
            Furniture, vessels, curtains, lighting and event pieces chosen for how they live in a finished space.
          </p>
          <Link to="/services" className="group flex items-end justify-between text-sm font-semibold uppercase tracking-[0.12em]">
            View materials & services <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
