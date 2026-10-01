import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { images } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-[92svh] overflow-hidden bg-primary text-primary-foreground">
      <img
        src={images.weddingHall}
        alt="Refined wedding reception with sculptural draping and candlelit tables"
        width={1600}
        height={1200}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/10 to-primary/30" />
      <div className="editorial-container relative flex min-h-[92svh] flex-col justify-end pb-10 pt-32 lg:pb-14">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em]">Objects · Interiors · Celebrations</p>
        <h1 className="max-w-6xl font-display text-6xl leading-[0.86] sm:text-7xl md:text-8xl lg:text-9xl">
          Spaces composed <span className="italic">with feeling.</span>
        </h1>
        <div className="mt-8 grid gap-7 border-t border-primary-foreground/30 pt-6 md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-xl text-sm leading-7 text-primary-foreground/80">
            We curate distinctive objects and create complete environments for weddings, private events and considered interiors.
          </p>
          <MagneticButton>
            <Button
              asChild
              variant="editorialOutline"
              size="lg"
              className="w-fit border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link to="/portfolio">
                Explore our work <ArrowUpRight />
              </Link>
            </Button>
          </MagneticButton>
        </div>
        <ArrowDown className="absolute bottom-12 right-0 hidden size-5 animate-bounce lg:block" />
      </div>
    </section>
  );
}
