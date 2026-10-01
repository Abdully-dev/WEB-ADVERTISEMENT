import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageIntro } from "@/components/layout/PageIntro";
import { TestimonialList } from "@/sections/testimonials/TestimonialList";
import { images, metadata } from "@/lib/constants";

export const Route = createFileRoute("/testimonials")({
  head: () => metadata("Client notes", "Client experience and project stories from Atelier Nuru."),
  component: Testimonials,
});

function Testimonials() {
  return (
    <PageLayout>
      <PageIntro
        eyebrow="Client notes"
        title="Good work is felt in the experience."
        copy="This page is prepared for verified client stories. We never publish invented praise; real names and project notes will appear here with permission."
        image={images.eveningEvent}
        imageAlt="Intimate candlelit event setting"
      />
      <TestimonialList />
    </PageLayout>
  );
}
