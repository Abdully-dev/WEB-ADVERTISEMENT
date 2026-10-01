import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/layout/PageLayout";
import { PortfolioHero } from "@/sections/portfolio/PortfolioHero";
import { ProjectGrid } from "@/sections/portfolio/ProjectGrid";
import { metadata } from "@/lib/constants";

export const Route = createFileRoute("/portfolio")({
  head: () => metadata("Selected work", "Explore selected wedding, event and interior decoration projects by Atelier Nuru."),
  component: Portfolio,
});

function Portfolio() {
  return (
    <PageLayout>
      <PortfolioHero />
      <ProjectGrid />
    </PageLayout>
  );
}
