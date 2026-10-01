import type { Service } from "@/types/service";
import { images } from "@/lib/constants";

export const services: Service[] = [
  {
    number: "01",
    title: "Wedding environments",
    copy: "Ceremony and reception spaces composed through draping, florals, lighting, furniture and fine table details.",
    image: images.weddingHall,
    imageAlt: "Refined wedding reception with sculptural draping and candlelit tables",
  },
  {
    number: "02",
    title: "Private & corporate events",
    copy: "Atmospheric settings built around the occasion, the room and the way your guests will experience both.",
    image: images.eveningEvent,
    imageAlt: "Candlelit private event table under a modern canopy",
  },
  {
    number: "03",
    title: "Interior styling",
    copy: "Considered rooms shaped with furniture, curtains, lighting, art and objects that feel collected rather than placed.",
    image: images.interiorRoom,
    imageAlt: "Warm contemporary interior with sculptural furniture",
  },
];

export const values = [
  ["Material intelligence", "We consider how every surface catches light, ages and sits beside another material."],
  ["One visual language", "Products, flowers, furniture and lighting are selected as one composition—not separate decisions."],
  ["Built for the space", "Every concept begins with proportion, movement and the natural character of the setting."],
  ["Calm execution", "A clear process keeps complex installations controlled, considered and ready on time."],
] as const;
