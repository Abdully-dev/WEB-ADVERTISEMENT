import { Link } from "@tanstack/react-router";
import { navItems } from "@/data/navigation";
import { NavLink } from "./NavLink";
import { MobileMenu } from "./MobileMenu";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className={`font-display text-2xl leading-none ${light ? "text-primary-foreground" : "text-foreground"}`}>
      <span className="italic">SAKI</span> HOME-DECOR
    </Link>
  );
}

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-40 border-b border-primary-foreground/25 text-primary-foreground">
      <div className="editorial-container grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center lg:h-24">
        <Logo light />
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary navigation">
          {navItems.slice(1).map(([label, to]) => (
            <NavLink key={to} label={label} to={to} />
          ))}
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}
