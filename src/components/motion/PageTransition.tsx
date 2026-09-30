import type { ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";

/** Replays a soft fade whenever the route changes. */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div key={pathname} className="animate-fade-in">
      {children}
    </div>
  );
}
