import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/layout/PageLayout";
import { Hero } from "@/sections/home/Hero";
import { HomeCTA } from "@/sections/home/HomeCTA";
import { FeaturedProducts } from "@/sections/home/FeaturedProducts";
import { FeaturedServices } from "@/sections/home/FeaturedServices";
import { FeaturedWork } from "@/sections/home/FeaturedWork";
import { metadata } from "@/lib/constants";

export const Route = createFileRoute("/")({
  head: () =>
    metadata(
      "Premium decor, materials & spaces",
      "Atelier Nuru creates refined weddings, events and interiors, with a curated collection of furniture, lighting and decorative objects.",
    ),
  component: Home,
});

function Home() {
  return (
    <PageLayout>
      <Hero />
      <HomeCTA />
      <FeaturedProducts />
      <FeaturedServices />
      <FeaturedWork />
    </PageLayout>
  );
}
