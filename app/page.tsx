import { Hero } from "@/components/home/hero";
import { LogoBar } from "@/components/home/logo-bar";
import { CybersecuritySolutions } from "@/components/home/cybersecurity-solutions";
import { Industries } from "@/components/home/industries";
import { RegulatoryCompliance } from "@/components/home/regulatory-compliance";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { FinalCTA } from "@/components/home/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoBar />
      <CybersecuritySolutions />
      <Industries />
      <RegulatoryCompliance />
      <WhyChooseUs />
      <FinalCTA />
    </>
  );
}
