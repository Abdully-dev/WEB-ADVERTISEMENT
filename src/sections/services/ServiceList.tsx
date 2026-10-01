import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { services } from "@/data/services";

export function ServiceList() {
  return (
    <Section>
      <SectionHeading eyebrow="Our practice" title="Three ways to transform a space." />
      <div className="mt-16">
        {services.map((s, i) => (
          <Reveal key={s.title} as="article" className="grid gap-8 border-t border-border py-10 lg:grid-cols-[.15fr_.55fr_1fr] lg:py-16">
            <p className="text-xs text-muted-foreground">{s.number}</p>
            <div>
              <h2 className="font-display text-4xl">{s.title}</h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">{s.copy}</p>
              <Button asChild variant="link" className="mt-4 h-auto p-0">
                <Link to="/contact">
                  Plan your project <ArrowRight />
                </Link>
              </Button>
            </div>
            <img
              src={s.image}
              alt={s.imageAlt}
              loading="lazy"
              width={1408}
              height={1104}
              className={`w-full object-cover ${i === 1 ? "aspect-[16/9]" : "aspect-[5/3]"}`}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
