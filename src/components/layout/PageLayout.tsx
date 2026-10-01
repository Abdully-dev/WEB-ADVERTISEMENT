import type { ReactNode } from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "./Footer";
import { PageTransition } from "@/components/motion/PageTransition";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </>
  );
}
