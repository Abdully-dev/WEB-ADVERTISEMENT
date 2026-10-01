import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Reveal } from "@/components/motion/Reveal";
import { services } from "@/data/services";

export function FeaturedServices() {
  return (
    <Section className="bg-secondary">
      <SectionHeading eyebrow="What we create" title="From an empty room to a complete atmosphere." />
      <div className="mt-14 space-y-16">
        {services.map((service, index) => (
          <article
            key={service.title}
            className={`grid items-center gap-8 lg:grid-cols-2 ${index % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <ImageReveal
              src={service.image}
              alt={service.imageAlt}
              width={1408}
              height={1104}
              imgClassName="aspect-[4/3]"
            />
            <Reveal className="lg:px-12" delay={0.1}>
              <p className="text-xs text-muted-foreground">{service.number}</p>
              <h3 className="mt-4 font-display text-4xl sm:text-5xl">{service.title}</h3>
              <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">{service.copy}</p>
              <Button asChild variant="link" className="mt-5 h-auto p-0">
                <Link to="/services">
                  Discover the service <ArrowRight />
                </Link>
              </Button>
            </Reveal>
          </article>
        ))}
      </div>
    </Section>
  );
}
