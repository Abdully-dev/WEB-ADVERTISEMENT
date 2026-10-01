import type { Product } from "@/types/product";
import { ImageReveal } from "@/components/ui/ImageReveal";

export function ProductCard({ product, onSelect }: { product: Product; onSelect?: (p: Product) => void }) {
  return (
    <button type="button" onClick={() => onSelect?.(product)} className="group text-left" aria-label={`View ${product.name}`}>
      <ImageReveal src={product.image} alt={product.imageAlt} width={1200} height={1504} imgClassName="aspect-[4/5]" />
      <p className="mt-4 text-xs uppercase tracking-[0.15em] text-muted-foreground">{product.category}</p>
      <h3 className="mt-1 font-display text-2xl">{product.name}</h3>
    </button>
  );
}
