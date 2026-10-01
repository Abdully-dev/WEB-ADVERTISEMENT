import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/** Simple mount/scroll fade — convenience alias over Reveal. */
export function FadeIn({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <Reveal className={className} delay={delay}>
      {children}
    </Reveal>
  );
}
