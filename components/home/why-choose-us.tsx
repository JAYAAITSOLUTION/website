"use client";

import { Award, Layers, HeadphonesIcon, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const benefits = [
  {
    icon: Award,
    title: "Expertise & Experience",
    description:
      "Decades of industry experience and a team of certified professionals delivering world-class solutions.",
    highlights: ["Certified Experts", "Industry Leaders", "Proven Track Record"],
  },
  {
    icon: Layers,
    title: "Comprehensive Solutions",
    description:
      "End-to-end IT services covering security, infrastructure, and consultancy with seamless integration.",
    highlights: ["Full Spectrum", "Seamless Integration", "Scalable Architecture"],
  },
  {
    icon: HeadphonesIcon,
    title: "Client-Focused Support",
    description:
      "Dedicated 24/7 support and tailored solutions designed to meet your unique business challenges.",
    highlights: ["24/7 Availability", "Dedicated Teams", "Rapid Response"],
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-[#FAFAFA] via-white to-[#FAFAFA] relative overflow-hidden">
      {/* Background decorative elements - soft and cohesive */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft warm - center left */}
        <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-gradient-to-r from-[#F5E6D3]/50 via-[#E8D5C4]/20 to-transparent rounded-full blur-[100px]" />
        {/* Soft lavender - center right */}
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-gradient-to-l from-[#E8E0F0]/50 via-[#E5DDF0]/20 to-transparent rounded-full blur-[100px]" />
        {/* Very subtle brand accent - center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-transparent via-[#9A1B21]/5 to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#9A1B21]/10 to-[#9A1B21]/5 text-[#9A1B21] text-sm font-medium mb-6 border border-[#9A1B21]/20">
            <span>Our Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">
            Why Partner with{" "}
            <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">
              JAYAA IT
            </span>
          </h2>
          <p className="text-lg text-[#6A6A6A] leading-relaxed">
            We combine deep technical expertise with unwavering commitment to deliver
            solutions that drive real business outcomes and lasting security.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="p-8 rounded-3xl bg-white border border-[#E8E8E8] hover:border-[#9A1B21]/30 shadow-sm hover:shadow-xl hover:shadow-[#9A1B21]/5 transition-all duration-500 h-full">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-[#9A1B21]/10 border border-[#9A1B21]/20 flex items-center justify-center mb-6 group-hover:bg-[#9A1B21] group-hover:border-[#9A1B21] transition-all duration-300">
                  <benefit.icon className="w-8 h-8 text-[#9A1B21] group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[#6A6A6A] leading-relaxed mb-6">
                  {benefit.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2">
                  {benefit.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#9A1B21] flex-shrink-0" />
                      <span className="text-sm text-[#4A4A4A] font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 h-14 px-8 rounded-full bg-gradient-to-r from-[#9A1B21] to-[#B83236] text-white hover:from-[#7A1519] hover:to-[#9A1B21] shadow-lg hover:shadow-xl hover:shadow-[#9A1B21]/25 transition-all duration-300 font-medium"
          >
            Learn More About Us
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 h-14 px-8 rounded-full border-2 border-[#E8E8E8] text-[#1A1A1A] hover:border-[#9A1B21]/50 hover:bg-[#9A1B21]/5 transition-all duration-300 font-medium"
          >
            Schedule a Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
