"use client";

import { motion } from "motion/react";
import { Separator } from "@/components/ui/separator";
import { FileText, Shield, AlertTriangle, Scale } from "lucide-react";


const coreTerms = [
  { icon: FileText, title: "Service Agreement", description: "Clear terms of engagement" },
  { icon: Shield, title: "User Responsibilities", description: "Your obligations and rights" },
  { icon: AlertTriangle, title: "Intellectual Property", description: "Content and trademark protection" },
  { icon: Scale, title: "Limitation of Liability", description: "Legal boundaries and disclaimers" },
];

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        {/* Soft Gradient Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-[#E0E8F5]/50 via-[#E5EDF8]/30 to-transparent rounded-full blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-gradient-to-tl from-[#F5E6D3]/40 via-[#F0DDD0]/20 to-transparent rounded-full blur-[100px]" />
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-[#9A1B21]/5 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9A1B21]/10 text-[#9A1B21] text-sm font-medium mb-6">
                <span>Legal Agreements</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6">
                Terms of{" "}
                <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">Service</span>
              </h1>
              <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                Understanding the terms and conditions that govern your use of our website and services. Please read these terms carefully before accessing or using our platform.
              </p>
            </div>
          </motion.div>

          {/* Core Terms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12">
              {coreTerms.map((term) => (
                <div key={term.title} className="p-4 rounded-3xl bg-white border border-[#E8E8E8] text-center">
                  <div className="w-10 h-10 rounded-xl bg-[#9A1B21]/10 flex items-center justify-center mx-auto mb-3">
                    <term.icon className="w-5 h-5 text-[#9A1B21]" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#1A1A1A] mb-1">{term.title}</h3>
                  <p className="text-xs text-[#6A6A6A]">{term.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                    1. Introduction
                  </h2>
                  <p className="text-[#4A4A4A] mb-4">
                    These Terms of Service constitute a legally binding agreement made between you and JAYAA IT Solution Pvt. Ltd. concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the &quot;Site&quot;).
                  </p>
                  <p className="text-[#4A4A4A]">
                    You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the Site and you must discontinue use immediately.
                  </p>
                </section>

                <Separator className="bg-[#E8E8E8]" />

                <section>
                  <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                    2. Intellectual Property Rights
                  </h2>
                  <p className="text-[#4A4A4A] mb-4">
                    Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the &quot;Content&quot;) and the trademarks, service marks, and logos contained therein (the &quot;Marks&quot;) are owned or controlled by us or licensed to us.
                  </p>
                  <p className="text-[#4A4A4A]">
                    The Content and the Marks are provided on the Site &quot;AS IS&quot; for your information and personal use only. Except as expressly provided in these Terms of Service, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever.
                  </p>
                </section>

                <Separator className="bg-[#E8E8E8]" />

                <section>
                  <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                    3. User Representations
                  </h2>
                  <p className="text-[#4A4A4A] mb-4">
                    By using the Site, you represent and warrant that:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-[#4A4A4A] ml-4">
                    <li>All registration information you submit will be true, accurate, current, and complete</li>
                    <li>You will maintain the accuracy of such information and promptly update such registration information as necessary</li>
                    <li>You have the legal capacity and you agree to comply with these Terms of Service</li>
                    <li>You are not under the age of 13</li>
                    <li>You are not a minor in the jurisdiction in which you reside</li>
                    <li>You will not access the Site through automated or non-human means</li>
                  </ul>
                </section>

                <Separator className="bg-[#E8E8E8]" />

                <section>
                  <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                    4. Prohibited Activities
                  </h2>
                  <p className="text-[#4A4A4A] mb-4">
                    You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                  </p>
                  <p className="text-[#4A4A4A] font-medium mb-2">As a user of the Site, you agree not to:</p>
                  <ul className="list-disc list-inside space-y-2 text-[#4A4A4A] ml-4">
                    <li>Systematically retrieve data or other content from the Site</li>
                    <li>Make any unauthorized use of the Site</li>
                    <li>Use a buying agent or purchasing agent to make purchases on the Site</li>
                    <li>Use the Site to advertise or offer to sell goods and services</li>
                    <li>Circumvent, disable, or otherwise interfere with security-related features</li>
                  </ul>
                </section>

                <Separator className="bg-[#E8E8E8]" />

                <section>
                  <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                    5. Termination
                  </h2>
                  <p className="text-[#4A4A4A]">
                    These Terms of Service shall remain in full force and effect while you use the Site. Without limiting any other provision of these Terms of Service, we reserve the right to, in our sole discretion and without notice or liability, deny access to and use of the Site (including blocking certain IP addresses), to any person for any reason or for no reason.
                  </p>
                </section>

                <Separator className="bg-[#E8E8E8]" />

                <section>
                  <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                    6. Governing Law
                  </h2>
                  <p className="text-[#4A4A4A]">
                    These Terms of Service and your use of the Site are governed by and construed in accordance with the laws of India applicable to agreements made and to be entirely performed within India, without regard to its conflict of law principles.
                  </p>
                </section>

                <Separator className="bg-[#E8E8E8]" />

                <section>
                  <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                    7. Contact Information
                  </h2>
                  <p className="text-[#4A4A4A]">
                    In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: info@jayaaitsolution.com
                  </p>
                </section>

                <Separator className="bg-[#E8E8E8]" />

                <section className="p-6 rounded-3xl bg-[#9A1B21]/10 border border-[#9A1B21]/20">
                  <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                    Questions About Legal Terms?
                  </h2>
                  <p className="text-[#4A4A4A] mb-4">
                    If you have questions or concerns about these terms of service, or need clarification about our legal practices, we&apos;re here to help. Your understanding is important to us.
                  </p>
                  <div className="space-y-2">
                    <p className="text-[#1A1A1A]">
                      <strong>Email:</strong>{" "}
                      <a href="mailto:info@jayaaitsolution.com" className="text-[#9A1B21] hover:underline">
                        info@jayaaitsolution.com
                      </a>
                    </p>
                    <p className="text-[#1A1A1A]">
                      <strong>Office Address:</strong><br />
                      803/8, Ekatva Onyx, Wagle Estate Thane West-400604
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
