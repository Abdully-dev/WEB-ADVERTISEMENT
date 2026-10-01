import { useState } from "react";
import type { Product } from "@/types/product";
import { products } from "./productData";
import { ProductCard } from "./ProductCard";
import { ProductViewer } from "./ProductViewer";

export function ProductGallery() {
  const [selected, setSelected] = useState<Product | null>(null);
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onSelect={setSelected} />
      ))}
      <ProductViewer product={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
