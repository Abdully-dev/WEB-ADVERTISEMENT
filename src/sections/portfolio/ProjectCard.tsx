import type { Project } from "@/types/portfolio";
import { ImageReveal } from "@/components/ui/ImageReveal";

export function ProjectCard({ project, index, onSelect }: { project: Project; index: number; onSelect?: (p: Project) => void }) {
  return (
    <article className={`grid gap-7 ${index % 2 ? "lg:grid-cols-[.75fr_1.25fr]" : "lg:grid-cols-[1.35fr_.65fr]"}`}>
      <button
        type="button"
        onClick={() => onSelect?.(project)}
        className={`text-left ${index % 2 ? "lg:order-2" : ""}`}
        aria-label={`View ${project.title}`}
      >
        <ImageReveal
          src={project.image}
          alt={project.imageAlt}
          width={1600}
          height={1200}
          imgClassName={index % 3 === 0 ? "aspect-[5/4]" : "aspect-[4/3]"}
        />
      </button>
      <div className="flex flex-col justify-end border-t border-border pt-5">
        <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{project.type}</p>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl">{project.title}</h2>
        <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">{project.description}</p>
      </div>
    </article>
  );
}
