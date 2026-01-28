import { Shield, Target, Eye, Heart, Award, Users } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We uphold the highest ethical standards in all our engagements, ensuring transparency and trust.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every solution we deliver, exceeding client expectations.",
  },
  {
    icon: Eye,
    title: "Innovation",
    description: "We continuously innovate to stay ahead of emerging threats and technological advancements.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "Our clients' success is our priority. We build lasting partnerships based on value delivery.",
  },
];

const stats = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 50, suffix: "+", label: "Enterprise Clients" },
  { value: 100, suffix: "%", label: "Client Retention" },
  { value: 24, suffix: "/7", label: "Support Coverage" },
];

export const metadata = {
  title: "About Us | JAYAA IT Solution Pvt. Ltd.",
  description: "Learn about JAYAA IT Solution's mission, values, and commitment to delivering enterprise-grade cybersecurity and IT solutions.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-md-surface">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-md-surface-container overflow-hidden">
        {/* Animated Grid Pattern Background */}
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlurFade delay={0.1} inView>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-primary-container text-md-on-primary-container text-sm font-medium mb-6">
                <span>About Us</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-md-on-surface mb-6">
                Empowering Enterprises with{" "}
                <span className="text-md-primary">Trusted IT Solutions</span>
              </h1>
              <p className="text-lg text-md-on-surface-variant max-w-2xl mx-auto">
                Since 2009, JAYAA IT Solution has been at the forefront of
                cybersecurity and digital transformation, helping organizations
                navigate the complex digital landscape with confidence.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <BlurFade delay={0.1} inView>
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-md-on-surface">
                  Who We <span className="text-md-primary">Are</span>
                </h2>
                <p className="text-md-on-surface-variant">
                  JAYAA IT Solution Pvt. Ltd. is a leading cybersecurity and IT
                  solutions provider headquartered in Hyderabad, India. We
                  specialize in delivering enterprise-grade security solutions,
                  digital transformation services, and IT consulting to
                  organizations across BFSI, Healthcare, Retail, and Government
                  sectors.
                </p>
                <p className="text-md-on-surface-variant">
                  Our team of certified security professionals brings together
                  decades of combined experience in cybersecurity, risk
                  management, and IT infrastructure. We pride ourselves on our
                  ability to understand unique business challenges and deliver
                  tailored solutions that drive real results.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-md-primary-container text-md-on-primary-container">
                    <Award className="w-4 h-4" />
                    <span className="text-sm font-medium">ISO 27001 Certified</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-md-secondary-container text-md-on-secondary-container">
                    <Users className="w-4 h-4" />
                    <span className="text-sm font-medium">50+ Experts</span>
                  </div>
                </div>
              </div>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-2xl bg-md-surface-container border border-md-outline-variant text-center"
                  >
                    <div className="text-3xl font-bold text-md-primary mb-1">
                      <NumberTicker value={stat.value} />
                      <span>{stat.suffix}</span>
                    </div>
                    <p className="text-sm text-md-on-surface-variant">{stat.label}</p>
                  </div>
                ))}
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative py-20 lg:py-32 bg-md-surface-container overflow-hidden">
        {/* Flickering Grid Background */}
        <FlickeringGrid
          className="absolute inset-0 z-0 [mask-image:radial-gradient(700px_circle_at_center,white,transparent)]"
          squareSize={4}
          gridGap={6}
          color="#9A1B21"
          maxOpacity={0.1}
          flickerChance={0.1}
          height={900}
          width={900}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-primary-container text-md-on-primary-container text-sm font-medium mb-6">
                <span>Our Values</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-md-on-surface mb-6">
                The Principles That Guide{" "}
                <span className="text-md-primary">Us</span>
              </h2>
            </div>
          </BlurFade>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <BlurFade key={value.title} delay={0.1 + index * 0.1} inView>
                <div className="p-6 rounded-2xl bg-md-surface border border-md-outline-variant hover:border-md-primary/50 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-md-primary-container flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-md-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-md-on-surface mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-md-on-surface-variant">
                    {value.description}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
