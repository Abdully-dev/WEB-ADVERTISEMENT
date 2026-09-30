import { Link } from "@tanstack/react-router";

export function NavLink({ label, to }: { label: string; to: string }) {
  return (
    <Link
      to={to}
      className="text-[11px] font-semibold uppercase tracking-[0.14em] transition-opacity hover:opacity-60"
      activeProps={{ className: "border-b border-current" }}
    >
      {label}
    </Link>
  );
}
