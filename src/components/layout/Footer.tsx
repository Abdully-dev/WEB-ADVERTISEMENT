import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/navigation/Navbar";

export function Footer() {
  return (
    <footer className="bg-primary py-16 text-primary-foreground lg:py-24">
      <div className="editorial-container grid gap-14 lg:grid-cols-[1.3fr_.7fr]">
        <div>
          <p className="mb-6 text-xs uppercase tracking-[0.2em] text-primary-foreground/65">Begin a conversation</p>
          <h2 className="max-w-3xl font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
            Let’s shape a space people remember.
          </h2>
          <Button
            asChild
            variant="editorialOutline"
            size="lg"
            className="mt-10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            <Link to="/contact">
              Discuss your project <ArrowUpRight />
            </Link>
          </Button>
        </div>
        <div className="grid content-end gap-8 sm:grid-cols-2 lg:grid-cols-1">
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-primary-foreground/55">Studio</p>
            <p className="mt-2 text-sm leading-7 text-primary-foreground/80">
              Location details available on request
              <br />
              Mon — Sat, by appointment
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-primary-foreground/55">Follow</p>
            <div className="mt-2 flex gap-5 text-sm">
              <span>Instagram</span>
              <span>Pinterest</span>
            </div>
          </div>
        </div>
      </div>
      <div className="editorial-container mt-20 flex flex-col gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/55 sm:flex-row sm:justify-between">
        <Logo light />
        <p>© 2026 Kinah-homedecor. Spaces, objects, atmosphere.</p>
      </div>
    </footer>
  );
}
