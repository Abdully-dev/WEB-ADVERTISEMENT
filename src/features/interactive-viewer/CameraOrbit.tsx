import { useRef, useState, type ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { viewerConfig } from "./viewerConfig";

/** Drag-to-orbit wrapper: rotates/pans children in response to pointer movement. */
export function CameraOrbit({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ rx: 0, ry: 0, px: 0, py: 0 });
  const reduced = useReducedMotion();

  const onMove = (e: React.PointerEvent) => {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setT({
      ry: x * viewerConfig.maxRotation,
      rx: -y * viewerConfig.maxRotation,
      px: x * viewerConfig.maxPan,
      py: y * viewerConfig.maxPan,
    });
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={() => setT({ rx: 0, ry: 0, px: 0, py: 0 })}
      style={{ perspective: "1000px" }}
      className="touch-pan-y"
    >
      <div
        className="transition-transform duration-200 ease-out will-change-transform"
        style={{ transform: `rotateX(${t.rx}deg) rotateY(${t.ry}deg) translate(${t.px}px, ${t.py}px)` }}
      >
        {children}
      </div>
    </div>
  );
}
