import type { Product } from "@/types/product";
import { CameraOrbit } from "./CameraOrbit";

/** Interactive product scene: orbit the product image by moving the pointer. */
export function ProductScene({ product }: { product: Product }) {
  return (
    <CameraOrbit>
      <img
        src={product.image}
        alt={product.imageAlt}
        width={1200}
        height={1504}
        className="aspect-[4/5] w-full object-cover"
        draggable={false}
      />
    </CameraOrbit>
  );
}
