import { useState } from "react";
import type { Project } from "@/types/portfolio";
import { Section } from "@/components/layout/Section";
import { projects } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";
import { ProjectViewer } from "./ProjectViewer";

export function ProjectGrid() {
  const [selected, setSelected] = useState<Project | null>(null);
  return (
    <Section containerClassName="space-y-24">
      {projects.map((project, i) => (
        <ProjectCard key={project.id} project={project} index={i} onSelect={setSelected} />
      ))}
      <ProjectViewer project={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}
