"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { BlurFade } from "@/components/ui/blur-fade";

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
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", company: "", phone: "", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-md-surface">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-md-surface-container">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-primary-container text-md-on-primary-container text-sm font-medium mb-6">
                <span>Contact Us</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-md-on-surface mb-6">
                Let&apos;s Start a{" "}
                <span className="text-md-primary">Conversation</span>
              </h1>
              <p className="text-lg text-md-on-surface-variant max-w-2xl mx-auto">
                Ready to secure your digital future? Get in touch with our team
                for a free consultation and security assessment.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <BlurFade delay={0.1} inView>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-md-on-surface mb-4">
                    Get in <span className="text-md-primary">Touch</span>
                  </h2>
                  <p className="text-md-on-surface-variant">
                    Have questions about our services? Need a security
                    assessment? Our team is here to help you navigate your
                    cybersecurity journey.
                  </p>
                </div>

                <div className="grid gap-6">
                  {contactInfo.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-md-surface-container border border-md-outline-variant hover:border-md-primary/50 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl bg-md-primary-container flex items-center justify-center">
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
              </div>
            </BlurFade>

            {/* Contact Form */}
            <BlurFade delay={0.2} inView>
              <div className="p-8 rounded-3xl bg-md-surface-container border border-md-outline-variant">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
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

                    <Button
                      type="submit"
                      className="w-full h-12 rounded-full bg-md-primary text-md-on-primary hover:bg-md-primary/90 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                )}
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
    </div>
  );
}
