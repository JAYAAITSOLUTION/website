import { Hero } from "@/components/home/hero";
import { AboutPreview } from "@/components/home/about-preview";
import { ServicesGrid } from "@/components/home/services-grid";
import { CybersecuritySolutions } from "@/components/home/cybersecurity-solutions";
import { Industries } from "@/components/home/industries";
import { Compliance } from "@/components/home/compliance";
import { Clients } from "@/components/home/clients";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { FinalCTA } from "@/components/home/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesGrid />
      <CybersecuritySolutions />
      <Industries />
      <Compliance />
      <Clients />
      <WhyChooseUs />
      <FinalCTA />
    </>
  );
}
