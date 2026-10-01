import type { Product } from "@/types/product";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export function ProductViewer({ product, onClose }: { product: Product | null; onClose: () => void }) {
  return (
    <Dialog open={!!product} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl border-0 bg-background p-0">
        {product && (
          <div className="grid sm:grid-cols-2">
            <img src={product.image} alt={product.imageAlt} width={1200} height={1504} className="h-full w-full object-cover" />
            <div className="flex flex-col justify-end p-7">
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{product.category}</p>
              <DialogTitle className="mt-2 font-display text-3xl font-normal">{product.name}</DialogTitle>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{product.description}</p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
