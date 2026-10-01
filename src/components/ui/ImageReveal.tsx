import { Reveal } from "@/components/motion/Reveal";

interface ImageRevealProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}

/** Image wrapped in a scroll-triggered reveal with the editorial hover lift. */
export function ImageReveal({ src, alt, width, height, className = "", imgClassName = "", priority = false }: ImageRevealProps) {
  return (
    <Reveal className={`overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? undefined : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        className={`image-lift h-full w-full object-cover ${imgClassName}`}
      />
    </Reveal>
  );
}
