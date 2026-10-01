import type { Project } from "@/types/portfolio";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export function ProjectViewer({ project, onClose }: { project: Project | null; onClose: () => void }) {
  return (
    <Dialog open={!!project} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl border-0 bg-background p-0">
        {project && (
          <div>
            <img src={project.image} alt={project.imageAlt} width={1600} height={1200} className="aspect-[16/10] w-full object-cover" />
            <div className="p-7">
              <DialogTitle className="font-display text-3xl font-normal">{project.title}</DialogTitle>
              <p className="mt-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">{project.type}</p>
              <p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground">{project.description}</p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
