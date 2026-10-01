import type { Product } from "@/types/product";
import { images } from "@/lib/constants";

export const products: Product[] = [
  {
    id: "sculptural-vessels",
    name: "Sculptural vessels",
    category: "Vases & vessels",
    description: "Stone, ceramic and glass forms chosen for silhouette and tactile contrast.",
    image: images.materialsStilllife,
    imageAlt: "Sculptural vases and vessels in ceramic, brass and glass",
  },
  {
    id: "occasion-furniture",
    name: "Occasion furniture",
    category: "Furniture",
    description: "Seating and tables that anchor a room and photograph beautifully.",
    image: images.interiorRoom,
    imageAlt: "Warm interior with sculptural seating",
  },
  {
    id: "ambient-lighting",
    name: "Ambient lighting",
    category: "Lighting",
    description: "Candlelight, pendants and concealed sources layered for atmosphere.",
    image: images.eveningEvent,
    imageAlt: "Candlelit event table in warm light",
  },
  {
    id: "draping-textiles",
    name: "Draping & textiles",
    category: "Curtains & draping",
    description: "Layers of textile that soften architecture and shape movement.",
    image: images.weddingHall,
    imageAlt: "Ivory draping in a wedding hall",
  },
];
