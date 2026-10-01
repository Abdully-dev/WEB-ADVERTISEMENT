import { Section } from "@/components/layout/Section";
import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "./TestimonialCard";

export function TestimonialList() {
  return (
    <Section containerClassName="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">A thoughtful record</p>
        <h2 className="mt-5 font-display text-5xl">Words, in context.</h2>
      </div>
      <div>
        {testimonials.length === 0 ? (
          <div className="border-t border-border">
            <div className="py-10">
              <p className="font-display text-3xl leading-tight sm:text-4xl">
                Real client feedback will be paired with the event or room it describes—so every word has context.
              </p>
            </div>
            <div className="border-t border-border py-8 text-sm leading-7 text-muted-foreground">
              Replace this introductory state with approved quotations, client names and project details when they are available.
            </div>
          </div>
        ) : (
          testimonials.map((t) => <TestimonialCard key={t.id} testimonial={t} />)
        )}
      </div>
    </Section>
  );
}
