"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Sparkles, ArrowRight, MessageCircle, HelpCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "info@jayaait.com",
    href: "mailto:info@jayaait.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 123 456 7890",
    href: "tel:+911234567890",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "Hyderabad, Telangana, India",
    href: "#",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Fri: 9:00 AM - 6:00 PM",
    href: "#",
  },
];

const faqs = [
  {
    question: "What services does JAYAA IT Solution offer?",
    answer: "We offer comprehensive cybersecurity services including Zero Trust Security, Digital Transformation, Advanced IT Solutions, and Professional Services. Our solutions cover threat detection, compliance management, cloud security, and more.",
  },
  {
    question: "How can I request a security assessment?",
    answer: "You can request a free security assessment by filling out the contact form on this page or calling us directly. Our team will get back to you within 24 hours to schedule a consultation.",
  },
  {
    question: "Do you offer 24/7 support?",
    answer: "Yes, we provide 24/7 support and monitoring for our managed security services clients. Our SOC team is always available to respond to security incidents and provide assistance.",
  },
  {
    question: "What industries do you serve?",
    answer: "We serve organizations across BFSI, Healthcare, Retail, Government, and other sectors. Our solutions are tailored to meet industry-specific compliance requirements and security challenges.",
  },
  {
    question: "How long does implementation typically take?",
    answer: "Implementation timelines vary based on the scope and complexity of the project. A typical security assessment takes 1-2 weeks, while full implementation can range from 4-12 weeks depending on your requirements.",
  },
];

const socialLinks = [
  { name: "LinkedIn", href: "#" },
  { name: "Twitter", href: "#" },
  { name: "Facebook", href: "#" },
  { name: "Instagram", href: "#" },
];

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", company: "", phone: "", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-md-surface">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-md-surface-container overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />

        {/* Gradient Orbs */}
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-md-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-md-secondary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlurFade delay={0.1} inView>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-primary-container text-md-on-primary-container text-sm font-medium border border-md-primary/20 mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Contact Us</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-md-on-surface mb-6 leading-[1.1] tracking-tight">
                Let&apos;s Start a{" "}
                <span className="gradient-text">Conversation</span>
              </h1>
              <p className="text-lg text-md-on-surface-variant max-w-2xl mx-auto leading-relaxed">
                Ready to secure your digital future? Get in touch with our team
                for a free consultation and security assessment.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <BlurFade delay={0.1} inView>
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-md-secondary-container text-md-on-secondary-container mb-4">
                    <span>Get in Touch</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-md-on-surface mb-4 leading-tight">
                    Contact{" "}
                    <span className="gradient-text">Information</span>
                  </h2>
                  <p className="text-md-on-surface-variant leading-relaxed">
                    Have questions about our services? Need a security
                    assessment? Our team is here to help you navigate your
                    cybersecurity journey.
                  </p>
                </div>

                <div className="grid gap-4">
                  {contactInfo.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="group flex items-center gap-4 p-4 rounded-2xl bg-md-surface-container border border-md-outline-variant hover:border-md-primary/50 hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-md-primary-container flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-6 h-6 text-md-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-md-on-surface-variant">
                          {item.title}
                        </p>
                        <p className="font-medium text-md-on-surface">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="pt-4">
                  <p className="text-sm text-md-on-surface-variant mb-4">Follow us on social media</p>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="px-4 py-2 rounded-full bg-md-surface-container border border-md-outline-variant text-md-on-surface-variant hover:border-md-primary/50 hover:text-md-primary transition-all duration-300 text-sm"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </BlurFade>

            {/* Contact Form */}
            <BlurFade delay={0.2} inView>
              <div className="relative p-8 rounded-3xl bg-md-surface-container border border-md-outline-variant shadow-lg">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-md-on-surface mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-md-on-surface-variant">
                      We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-md-on-surface">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="h-12 rounded-xl border-md-outline bg-md-surface focus-visible:ring-md-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-md-on-surface">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="h-12 rounded-xl border-md-outline bg-md-surface focus-visible:ring-md-primary"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-md-on-surface">
                          Company
                        </Label>
                        <Input
                          id="company"
                          placeholder="Company Name"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                          className="h-12 rounded-xl border-md-outline bg-md-surface focus-visible:ring-md-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-md-on-surface">
                          Phone
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 123 456 7890"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="h-12 rounded-xl border-md-outline bg-md-surface focus-visible:ring-md-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-md-on-surface">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project or requirements..."
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="rounded-xl border-md-outline bg-md-surface focus-visible:ring-md-primary resize-none"
                      />
                    </div>

                    <ShimmerButton
                      type="submit"
                      className="w-full h-14 rounded-full text-base font-medium"
                      shimmerColor="#ffffff"
                      background="#9A1B21"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Send Message
                        <Send className="w-4 h-4" />
                      </span>
                    </ShimmerButton>
                  </form>
                )}
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 lg:py-32 bg-md-surface-container relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-md-primary-container text-md-on-primary-container mb-6">
                <MapPin className="w-4 h-4" />
                <span>Our Location</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-md-on-surface mb-6">
                Visit Our{" "}
                <span className="gradient-text">Office</span>
              </h2>
            </div>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <div className="relative rounded-3xl overflow-hidden border border-md-outline-variant shadow-lg bg-md-surface">
              {/* Placeholder for Map - In production, integrate Google Maps or similar */}
              <div className="aspect-[21/9] bg-gradient-to-br from-md-primary-container to-md-secondary-container/30 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 rounded-2xl bg-md-surface flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <MapPin className="w-8 h-8 text-md-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-md-on-surface mb-2">JAYAA IT Solution Pvt. Ltd.</h3>
                  <p className="text-md-on-surface-variant">Hyderabad, Telangana, India</p>
                  <p className="text-sm text-md-on-surface-variant mt-2">Get directions on Google Maps</p>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-md-secondary-container text-md-on-secondary-container mb-6">
                <HelpCircle className="w-4 h-4" />
                <span>FAQ</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-md-on-surface mb-6">
                Frequently Asked{" "}
                <span className="gradient-text">Questions</span>
              </h2>
              <p className="text-md-on-surface-variant text-lg">
                Find answers to common questions about our services.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-md-outline-variant rounded-2xl px-6 data-[state=open]:border-md-primary/50 bg-md-surface-container"
                  >
                    <AccordionTrigger className="text-left text-md-on-surface hover:no-underline py-4">
                      <div className="flex items-center gap-3">
                        <MessageCircle className="w-5 h-5 text-md-primary flex-shrink-0" />
                        <span>{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-md-on-surface-variant pb-4 pl-8">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-[#9A1B21] via-[#c41e25] to-[#7A5C00]">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <BlurFade inView>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-8 backdrop-blur-sm">
                <Shield className="w-4 h-4" />
                <span>Secure Your Business</span>
              </div>
            </BlurFade>

            <BlurFade inView delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to Get{" "}
                <span className="text-white/90">Started</span>?
              </h2>
            </BlurFade>

            <BlurFade inView delay={0.2}>
              <p className="text-lg lg:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                Take the first step towards securing your digital assets.
                Schedule a free consultation with our security experts today.
              </p>
            </BlurFade>

            <BlurFade inView delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ShimmerButton
                  className="h-14 px-10 rounded-full text-base font-medium"
                  shimmerColor="#ffffff"
                  background="rgba(255,255,255,0.2)"
                  borderRadius="9999px"
                >
                  <Link
                    href="tel:+911234567890"
                    className="flex items-center gap-2 text-white"
                  >
                    Call Us Now
                    <Phone className="w-5 h-5" />
                  </Link>
                </ShimmerButton>
              </div>
            </BlurFade>

            <BlurFade inView delay={0.4}>
              <p className="mt-8 text-sm text-white/60">
                Free security assessment for new clients. No commitment required.
              </p>
            </BlurFade>
          </div>
        </div>
      </section>
    </div>
  );
}
