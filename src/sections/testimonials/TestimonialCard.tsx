import type { Testimonial } from "@/types/testimonial";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="border-t border-border py-10">
      <blockquote className="font-display text-3xl leading-tight sm:text-4xl">“{testimonial.quote}”</blockquote>
      <figcaption className="mt-6 text-sm text-muted-foreground">
        {testimonial.clientName} — {testimonial.project}
      </figcaption>
    </figure>
  );
}
