import { Hero } from "@/components/home/hero";
import { LogoBar } from "@/components/home/logo-bar";
import { PainPoints } from "@/components/home/pain-points";
import { HowItWorks } from "@/components/home/how-it-works";
import { FeaturesBento } from "@/components/home/features-bento";
import { Testimonials } from "@/components/home/testimonials";
import { Impact } from "@/components/home/impact";
import { FinalCTA } from "@/components/home/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoBar />
      <PainPoints />
      <HowItWorks />
      <FeaturesBento />
      <Testimonials />
      <Impact />
      <FinalCTA />
    </>
  );
}
