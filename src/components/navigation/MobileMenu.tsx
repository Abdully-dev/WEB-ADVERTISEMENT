import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/data/navigation";
import { siteName } from "@/lib/constants";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          aria-label="Open menu"
          variant="ghost"
          size="icon"
          className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground xl:hidden"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full border-0 bg-background p-8 sm:max-w-md">
        <SheetTitle className="font-display text-2xl font-normal">{siteName}</SheetTitle>
        <nav className="mt-16 flex flex-col" aria-label="Mobile navigation">
          {navItems.map(([label, to], index) => (
            <SheetClose asChild key={to}>
              <Link to={to} className="grid grid-cols-[2rem_1fr] border-b border-border py-4 font-display text-3xl">
                <span className="font-sans text-xs text-muted-foreground">0{index + 1}</span>
                {label}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
