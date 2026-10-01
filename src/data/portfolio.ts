import type { Project } from "@/types/portfolio";
import { images } from "@/lib/constants";

export const projects: Project[] = [
  {
    id: "ivory-hall",
    title: "The Ivory Hall",
    type: "Wedding · Draping · Floral design",
    description: "A monumental room softened with layers of textile, candlelight and olive foliage.",
    image: images.weddingHall,
    imageAlt: "Large wedding reception designed with ivory draping",
  },
  {
    id: "house-in-stillness",
    title: "House in Stillness",
    type: "Interior · Furniture · Objects",
    description: "A quiet living space built around warm timber, sculptural seating and filtered light.",
    image: images.interiorRoom,
    imageAlt: "Warm living room styled with sculptural furniture",
  },
  {
    id: "dinner-after-dark",
    title: "Dinner After Dark",
    type: "Private event · Tablescape",
    description: "An intimate outdoor evening balanced between garden shadow and pools of warm light.",
    image: images.eveningEvent,
    imageAlt: "Intimate candlelit event setting",
  },
  {
    id: "objects-collection",
    title: "The Objects Collection",
    type: "Vessels · Lighting · Surface",
    description: "A study in silhouette and tactile contrast across stone, ceramic, brass and glass.",
    image: images.materialsStilllife,
    imageAlt: "Curated decorative materials",
  },
];
