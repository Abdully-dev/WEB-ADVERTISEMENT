import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/layout/PageLayout";
import { WhyChooseUs } from "@/sections/why-choose-us/WhyChooseUs";
import { metadata } from "@/lib/constants";

export const Route = createFileRoute("/why-us")({
  head: () => metadata("Why choose us", "Discover Atelier Nuru's material-led, space-aware approach to decoration and project delivery."),
  component: WhyUs,
});

function WhyUs() {
  return (
    <PageLayout>
      <WhyChooseUs />
    </PageLayout>
  );
}
