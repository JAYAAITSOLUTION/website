"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Sparkles, ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone Support",
    value: "+91 8268949507",
    href: "tel:+918268949507",
    available: "24/7 Available",
  },
  {
    icon: Mail,
    title: "Email Support",
    value: "info@jayaaitsolution.com",
    href: "mailto:info@jayaaitsolution.com",
    available: "Response within 24hrs",
  },
  {
    icon: MapPin,
    title: "Our Office",
    value: "803/8, Ekatva Onyx, Wagle Estate Thane West-400604, Maharashtra, India",
    href: "#",
    available: "Visit us",
  },
];

const quickStats = [
  { value: "24/7", label: "Support Available" },
  { value: "<2hrs", label: "Response Time" },
  { value: "500+", label: "Projects Delivered" },
  { value: "99.9%", label: "Client Satisfaction" },
];

const officeHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "Emergency Support Only" },
];

const whyChooseUs = [
  "Expert IT Professionals",
  "24/7 Technical Support",
  "Proven Track Record",
  "Competitive Pricing",
  "Quick Response Time",
  "Customized Solutions",
];

const socialLinks = [
  { name: "LinkedIn", href: "https://in.linkedin.com/company/jayaaitsolution" },
  { name: "Twitter", href: "https://twitter.com/jayaaitsolution" },
  { name: "Instagram", href: "https://www.instagram.com/jayaaitsolution/" },
  { name: "Facebook", href: "https://www.facebook.com/JayaaITSolution/" },
];

export const metadata = {
  title: "Contact Us - Get Expert IT Support & Consultation",
  description: "Get in touch with JAYAA IT Solution for expert IT support and consultation. We're here to help transform your business.",
};

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", company: "", phone: "", subject: "", message: "" });
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
                <span>Get in Touch</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-md-on-surface mb-6 leading-[1.1] tracking-tight">
                Let&apos;s Start Your{" "}
                <span className="gradient-text">Digital Journey</span>
              </h1>
              <p className="text-lg text-md-on-surface-variant max-w-2xl mx-auto leading-relaxed mb-8">
                Ready to transform your business with cutting-edge IT solutions? Our expert team is here to help you every step of the way. Reach out today for a free consultation.
              </p>
              <Button
                asChild
                className="h-12 px-8 bg-md-primary text-white hover:bg-md-primary/90 rounded-full"
              >
                <Link href="tel:+918268949507" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call Now: +91 8268949507
                </Link>
              </Button>
            </div>
          </BlurFade>

          {/* Quick Stats */}
          <BlurFade delay={0.2} inView>
            <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {quickStats.map((stat, index) => (
                <div
                  key={index}
                  className="p-4 rounded-2xl bg-md-surface border border-md-outline-variant text-center"
                >
                  <div className="text-2xl font-bold text-md-primary mb-1">{stat.value}</div>
                  <p className="text-sm text-md-on-surface-variant">{stat.label}</p>
                </div>
              ))}
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
                  <h2 className="text-3xl sm:text-4xl font-bold text-md-on-surface mb-4">
                    Contact{" "}
                    <span className="gradient-text">Information</span>
                  </h2>
                  <p className="text-md-on-surface-variant leading-relaxed">
                    Have questions about our services? Need a security assessment? Our team is here to help you navigate your cybersecurity journey.
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
                      <div className="flex-1">
                        <p className="text-sm text-md-on-surface-variant">{item.title}</p>
                        <p className="font-medium text-md-on-surface">{item.value}</p>
                        <p className="text-xs text-md-primary">{item.available}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Office Hours */}
                <div className="p-6 rounded-2xl bg-md-surface-container border border-md-outline-variant">
                  <h3 className="text-lg font-semibold text-md-on-surface mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-md-primary" />
                    Office Hours
                  </h3>
                  <div className="space-y-2">
                    {officeHours.map((schedule) => (
                      <div key={schedule.day} className="flex justify-between text-sm">
                        <span className="text-md-on-surface-variant">{schedule.day}</span>
                        <span className="text-md-on-surface font-medium">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-4">
                  <p className="text-sm text-md-on-surface-variant mb-4">Follow us on social media</p>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full bg-md-surface-container border border-md-outline-variant text-md-on-surface-variant hover:border-md-primary/50 hover:text-md-primary transition-all duration-300 text-sm"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="p-6 rounded-2xl bg-md-primary-container/30 border border-md-primary/20">
                  <h3 className="text-lg font-semibold text-md-on-surface mb-4">Why Choose JAYAA IT</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {whyChooseUs.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-md-on-surface-variant">
                        <Shield className="w-4 h-4 text-md-primary" />
                        {item}
                      </div>
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
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-md-on-surface">
                        Your Name *
                      </Label>
                      <Input
                        id="name"
                        placeholder="Enter your name"
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
                        Your Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="h-12 rounded-xl border-md-outline bg-md-surface focus-visible:ring-md-primary"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-md-on-surface">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Optional"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="h-12 rounded-xl border-md-outline bg-md-surface focus-visible:ring-md-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-md-on-surface">
                          Company Name
                        </Label>
                        <Input
                          id="company"
                          placeholder="Optional"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                          className="h-12 rounded-xl border-md-outline bg-md-surface focus-visible:ring-md-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-md-on-surface">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        placeholder="Enter subject"
                        required
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="h-12 rounded-xl border-md-outline bg-md-surface focus-visible:ring-md-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-md-on-surface">
                        Tell us about your project requirements... *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Describe your requirements..."
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
              <div className="aspect-[21/9] bg-gradient-to-br from-md-primary-container to-md-secondary-container/30 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 rounded-2xl bg-md-surface flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <MapPin className="w-8 h-8 text-md-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-md-on-surface mb-2">JAYAA IT Solution Pvt. Ltd.</h3>
                  <p className="text-md-on-surface-variant">803/8, Ekatva Onyx, Wagle Estate Thane West-400604, Maharashtra, India</p>
                  <p className="text-sm text-md-on-surface-variant mt-2">www.jayaaitsolution.com</p>
                </div>
              </div>
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
                <span>Start Today</span>
              </div>
            </BlurFade>

            <BlurFade inView delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to Transform Your{" "}
                <span className="text-white/90">Business</span>?
              </h2>
            </BlurFade>

            <BlurFade inView delay={0.2}>
              <p className="text-lg lg:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                Don&apos;t wait to start your digital transformation journey. Our expert team is ready to provide you with a free consultation and customized IT solutions that drive real results.
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
                    href="/contact"
                    className="flex items-center gap-2 text-white"
                  >
                    Schedule Free Consultation
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </ShimmerButton>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
    </div>
  );
}
