import { useEffect, useRef, useState, type ReactNode } from "react";
import { revealStyle } from "@/lib/animations";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article";
}

/** Scroll-triggered fade/slide reveal. CSS classes live in styles.css (.reveal). */
export function Reveal({ children, className = "", delay = 0, as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} style={revealStyle(delay)} className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}>
      {children}
    </Tag>
  );
}
