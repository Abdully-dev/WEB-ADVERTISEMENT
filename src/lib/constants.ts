import weddingHall from "@/assets/wedding-hall.jpg";
import materialsStilllife from "@/assets/materials-stilllife.jpg";
import interiorRoom from "@/assets/interior-room.jpg";
import eveningEvent from "@/assets/evening-event.jpg";

export const images = { weddingHall, materialsStilllife, interiorRoom, eveningEvent };

export const siteName = "Atelier Nuru";

export const metadata = (title: string, description: string) => ({
  meta: [
    { title: `${title} — ${siteName}` },
    { name: "description", content: description },
    { property: "og:title", content: `${title} — ${siteName}` },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});
