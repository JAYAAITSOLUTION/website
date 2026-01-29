"use client";

import { motion } from "motion/react";
import { Separator } from "@/components/ui/separator";
import { Shield, Lock, Eye, UserCheck } from "lucide-react";


const keyFeatures = [
  { icon: Lock, title: "Secure by Design", description: "End-to-end encryption" },
  { icon: Shield, title: "GDPR Compliant", description: "Full regulatory compliance" },
  { icon: Eye, title: "Transparent Practices", description: "Clear data usage policies" },
  { icon: UserCheck, title: "User Control", description: "You own your data" },
];

export default function PrivacyPolicyPage() {
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
                <span>Privacy & Data Protection</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6">
                Privacy{" "}
                <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">Policy</span>
              </h1>
              <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                Understanding how we collect, use, and protect your personal information. Your privacy is fundamental to our relationship, and we&apos;re committed to maintaining the highest standards of data protection.
              </p>
            </div>
          </motion.div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12">
              {keyFeatures.map((feature) => (
                <div key={feature.title} className="p-4 rounded-3xl bg-white border border-[#E8E8E8] text-center">
                  <div className="w-10 h-10 rounded-xl bg-[#9A1B21]/10 flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="w-5 h-5 text-[#9A1B21]" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#1A1A1A] mb-1">{feature.title}</h3>
                  <p className="text-xs text-[#6A6A6A]">{feature.description}</p>
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
                    Welcome to JAYAA IT Solution Pvt. Ltd. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at info@jayaaitsolution.com.
                  </p>
                </section>

                <Separator className="bg-[#E8E8E8]" />

                <section>
                  <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                    2. Information We Collect
                  </h2>
                  <p className="text-[#4A4A4A] mb-4">
                    We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website or otherwise when you contact us.
                  </p>
                  <p className="text-[#4A4A4A] font-medium mb-2">Personal information collected may include:</p>
                  <ul className="list-disc list-inside space-y-2 text-[#4A4A4A] ml-4">
                    <li>Names</li>
                    <li>Phone numbers</li>
                    <li>Email addresses</li>
                    <li>Mailing addresses</li>
                    <li>Job titles</li>
                    <li>Contact preferences</li>
                    <li>Other similar information</li>
                  </ul>
                </section>

                <Separator className="bg-[#E8E8E8]" />

                <section>
                  <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                    3. How We Use Your Information
                  </h2>
                  <p className="text-[#4A4A4A] mb-4">
                    We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                  </p>
                  <p className="text-[#4A4A4A] font-medium mb-2">We use your information to:</p>
                  <ul className="list-disc list-inside space-y-2 text-[#4A4A4A] ml-4">
                    <li>To send administrative information to you</li>
                    <li>To protect our Services</li>
                    <li>To respond to legal requests and prevent harm</li>
                    <li>To manage user accounts</li>
                    <li>To deliver and facilitate delivery of services to the user</li>
                  </ul>
                </section>

                <Separator className="bg-[#E8E8E8]" />

                <section>
                  <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                    4. Information Sharing
                  </h2>
                  <p className="text-[#4A4A4A]">
                    We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
                  </p>
                </section>

                <Separator className="bg-[#E8E8E8]" />

                <section>
                  <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                    5. Data Retention
                  </h2>
                  <p className="text-[#4A4A4A]">
                    We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements).
                  </p>
                </section>

                <Separator className="bg-[#E8E8E8]" />

                <section>
                  <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                    6. Information Security
                  </h2>
                  <p className="text-[#4A4A4A]">
                    We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
                  </p>
                </section>

                <Separator className="bg-[#E8E8E8]" />

                <section>
                  <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                    7. Policy Updates
                  </h2>
                  <p className="text-[#4A4A4A]">
                    Yes, we will update this notice as necessary to stay compliant with relevant laws. The updated version will be indicated by an updated &quot;Revised&quot; date and the updated version will be effective as soon as it is accessible.
                  </p>
                </section>

                <Separator className="bg-[#E8E8E8]" />

                <section className="p-6 rounded-3xl bg-[#9A1B21]/10 border border-[#9A1B21]/20">
                  <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                    Questions About Your Privacy?
                  </h2>
                  <p className="text-[#4A4A4A] mb-4">
                    If you have questions or comments about this privacy notice, or need clarification about our data practices, we&apos;re here to help. Your privacy concerns are our priority.
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
