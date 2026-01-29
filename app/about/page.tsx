"use client";

import Link from "next/link";
import { Shield, Award, Users, Heart, Lightbulb, Star } from "lucide-react";
import { motion } from "motion/react";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const features = [
  "Vulnerability Assessment & Penetration Testing (VAPT)",
  "Threat Intelligence & Breach Simulation",
  "Red Teaming & Attack Surface Management",
  "Firewalls, DLP, and DRM Implementation",
];

const values = [
  {
    icon: Heart,
    title: "Client-Centricity",
    description: "Understanding and exceeding client expectations is at the heart of everything we do.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Continuously exploring and implementing cutting-edge technologies for optimal solutions.",
  },
  {
    icon: Star,
    title: "Integrity & Excellence",
    description: "Upholding the highest standards of integrity and striving for excellence in all our endeavors.",
  },
];

const highlights = [
  "Commitment to excellence and innovation.",
  "Partnerships with leading Original Equipment Manufacturers (OEMs).",
  "Enabling businesses from start-ups to enterprises to thrive.",
  "ISO Certified & Industry Compliant solutions.",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
        {/* Soft Gradient Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-[#E0E8F5]/50 via-[#E5EDF8]/30 to-transparent rounded-full blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-gradient-to-tl from-[#F5E6D3]/40 via-[#F0DDD0]/20 to-transparent rounded-full blur-[100px]" />
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-[#9A1B21]/5 rounded-full blur-[100px]" />
        </div>

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9A1B21]/10 text-[#9A1B21] text-sm font-medium mb-6">
                <span>Premier IT Service Provider</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6">
                Transforming Businesses Through{" "}
                <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">Innovation</span>
              </h1>
              <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto mb-8">
                Jayaa IT Solution is a premier IT service provider, renowned for delivering innovative, cutting-edge technology solutions to businesses globally. With a strong focus on IT security, infrastructure management, consultancy, and support, we empower organizations to meet their operational and strategic goals with precision, efficiency, and innovation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  className="h-12 px-8 bg-gradient-to-r from-[#9A1B21] to-[#B83236] text-white hover:opacity-90 rounded-full"
                >
                  <Link href="/contact">Get Started Today</Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="h-12 px-8 text-[#1A1A1A] hover:bg-[#9A1B21]/10 rounded-full"
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9A1B21]/10 text-[#9A1B21] text-sm font-medium">
                  <span>Who We Are</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
                  Digital. Secure.{" "}
                  <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">Resilient.</span>
                </h2>
                <p className="text-[#4A4A4A]">
                  At Jayaa IT Solution, we are a team of dedicated IT professionals driven by a passion for leveraging technology to transform businesses.
                </p>
                <p className="text-[#4A4A4A]">
                  We take pride in empowering organizations to stay ahead in an ever-evolving digital landscape by providing innovative, secure, and scalable IT solutions.
                </p>
                <p className="text-[#4A4A4A]">
                  Trusted by industry leaders across BFSI, Healthcare, Government, and Technology.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#9A1B21]/10 text-[#9A1B21]">
                      <Award className="w-4 h-4" />
                      <span className="text-sm font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="grid grid-cols-3 gap-4">
                <div className="p-6 rounded-3xl bg-white border border-[#E8E8E8] text-center">
                  <div className="text-3xl font-bold text-[#9A1B21] mb-1">24/7/365</div>
                  <p className="text-sm text-[#4A4A4A]">Real-Time Threat Monitoring</p>
                </div>
                <div className="p-6 rounded-3xl bg-white border border-[#E8E8E8] text-center">
                  <div className="text-3xl font-bold text-[#9A1B21] mb-1">50+</div>
                  <p className="text-sm text-[#4A4A4A]">Enterprise Clients Protected</p>
                </div>
                <div className="p-6 rounded-3xl bg-white border border-[#E8E8E8] text-center">
                  <div className="text-3xl font-bold text-[#9A1B21] mb-1">99.9%</div>
                  <p className="text-sm text-[#4A4A4A]">Compliance-Driven Uptime SLA</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9A1B21]/10 text-[#9A1B21] text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                <span>Our Expertise</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">
                Technology with Trust. Transformation with{" "}
                <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">Purpose.</span>
              </h2>
              <p className="text-lg text-[#4A4A4A]">
                JAYAA IT Solution Pvt. Ltd. is your trusted partner in delivering next-generation IT infrastructure and cybersecurity services. We empower enterprises with secure, scalable, and compliance-ready solutions that drive digital excellence.
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6 rounded-3xl bg-white border border-[#E8E8E8] hover:border-[#9A1B21]/50 hover:shadow-lg transition-all duration-300 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#9A1B21]/10 flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6 text-[#9A1B21]" />
                  </div>
                  <span className="text-lg font-medium text-[#1A1A1A]">{feature}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
        {/* Soft Gradient Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-[#E0E8F5]/50 via-[#E5EDF8]/30 to-transparent rounded-full blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-gradient-to-tl from-[#F5E6D3]/40 via-[#F0DDD0]/20 to-transparent rounded-full blur-[100px]" />
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-[#9A1B21]/5 rounded-full blur-[100px]" />
        </div>

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9A1B21]/10 text-[#9A1B21] text-sm font-medium mb-6">
                <span>Our Core Values</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">
                Guiding{" "}
                <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">Principles</span>
              </h2>
              <p className="text-lg text-[#4A4A4A]">
                Our core values shape every decision we make and guide us in delivering exceptional IT solutions that drive your business forward.
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6 rounded-3xl bg-white border border-[#E8E8E8] hover:border-[#9A1B21]/50 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#9A1B21]/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-[#9A1B21]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-[#4A4A4A]">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="text-center mt-12">
              <Button
                asChild
                className="h-12 px-8 bg-gradient-to-r from-[#9A1B21] to-[#B83236] text-white hover:opacity-90 rounded-full"
              >
                <Link href="/team">Meet Our Team</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
