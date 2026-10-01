import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/layout/PageLayout";
import { AboutHero } from "@/sections/about/AboutHero";
import { Story } from "@/sections/about/Story";
import { Experience } from "@/sections/about/Experience";
import { metadata } from "@/lib/constants";

export const Route = createFileRoute("/about")({
  head: () => metadata("About the studio", "Meet Atelier Nuru, a decoration studio guided by material, proportion and the character of every space."),
  component: About,
});

function About() {
  return (
    <PageLayout>
      <AboutHero />
      <Story />
      <Experience />
    </PageLayout>
  );
}
