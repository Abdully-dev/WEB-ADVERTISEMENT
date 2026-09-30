import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  bare?: boolean;
}

/** Standard vertical rhythm + editorial container. `bare` skips the container. */
export function Section({ children, className = "", containerClassName = "", bare = false }: SectionProps) {
  return (
    <section className={`py-20 lg:py-32 ${className}`}>
      {bare ? children : <div className={`editorial-container ${containerClassName}`}>{children}</div>}
    </section>
  );
}
