import { useState, type FormEvent, type ReactNode } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const fieldClass = "h-12 rounded-none border-x-0 border-t-0 shadow-none";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="border-t border-border pt-8">
        <p className="font-display text-4xl">Thank you.</p>
        <p className="mt-4 text-sm text-muted-foreground">
          Your enquiry is ready. Message delivery will be connected when the business contact details are provided.
        </p>
        <Button variant="editorialOutline" className="mt-8" onClick={() => setSent(false)}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={(e: FormEvent) => { e.preventDefault(); setSent(true); }} className="grid gap-7 sm:grid-cols-2">
      <Field label="Your name" id="name"><Input id="name" required className={fieldClass} placeholder="Full name" /></Field>
      <Field label="Email address" id="email"><Input id="email" type="email" required className={fieldClass} placeholder="you@example.com" /></Field>
      <Field label="Project type" id="project"><Input id="project" required className={fieldClass} placeholder="Wedding, event, interior…" /></Field>
      <Field label="Location or venue" id="location"><Input id="location" className={fieldClass} placeholder="City or venue" /></Field>
      <div className="sm:col-span-2">
        <Label htmlFor="message">Tell us what you are planning</Label>
        <Textarea id="message" required className="mt-3 min-h-40 rounded-none shadow-none" placeholder="Date, guest count, room, materials or the feeling you want to create…" />
      </div>
      <div className="sm:col-span-2">
        <Button type="submit" variant="editorial" size="lg">Prepare enquiry <Send /></Button>
      </div>
    </form>
  );
}

function Field({ label, id, children }: { label: string; id: string; children: ReactNode }) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <div className="mt-3">{children}</div>
    </div>
  );
}
