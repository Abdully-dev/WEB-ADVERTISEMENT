import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section } from "@/components/layout/Section";
import { ContactHero } from "@/sections/contact/ContactHero";
import { ContactDetails } from "@/sections/contact/ContactDetails";
import { ContactForm } from "@/sections/contact/ContactForm";
import { metadata } from "@/lib/constants";

export const Route = createFileRoute("/contact")({
  head: () => metadata("Contact the studio", "Tell Atelier Nuru about your wedding, event, interior or decor materials project."),
  component: Contact,
});

function Contact() {
  return (
    <PageLayout>
      <ContactHero />
      <Section containerClassName="grid gap-16 lg:grid-cols-[.6fr_1.4fr]">
        <ContactDetails />
        <ContactForm />
      </Section>
    </PageLayout>
  );
}
