import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/layout/PageLayout";
import { ServicesHero } from "@/sections/services/ServicesHero";
import { ServiceList } from "@/sections/services/ServiceList";
import { ServiceShowcase } from "@/sections/services/ServiceShowcase";
import { metadata } from "@/lib/constants";

export const Route = createFileRoute("/services")({
  head: () => metadata("Decoration services", "Wedding, event and interior decoration developed as complete, cohesive environments."),
  component: Services,
});

function Services() {
  return (
    <PageLayout>
      <ServicesHero />
      <ServiceList />
      <ServiceShowcase />
    </PageLayout>
  );
}
