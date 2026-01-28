import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Instagram } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  services: [
    { href: "/services/zero-trust", label: "Zero Trust Security" },
    { href: "/services/digital-transformation", label: "Digital Transformation" },
    { href: "/services/advanced-it", label: "Advanced IT Solutions" },
    { href: "/services/professional", label: "Professional Services" },
  ],
  solutions: [
    { href: "/solutions", label: "Cloud Security" },
    { href: "/solutions", label: "Threat Detection" },
    { href: "/solutions", label: "Compliance" },
    { href: "/solutions", label: "SOC Services" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/team", label: "Our Team" },
    { href: "/blogs", label: "Blog" },
    { href: "/clients-partners", label: "Clients & Partners" },
  ],
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
    { href: "/cookie-policy", label: "Cookie Policy" },
  ],
};

const socialLinks = [
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "https://youtube.com", icon: Youtube, label: "YouTube" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-[#1a1a2e] border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-40 h-12">
                <Image
                  src="/logo-jayaa.png"
                  alt="JAYAA IT Solution"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            </Link>
            <p className="text-sm text-white/60 max-w-xs leading-relaxed">
              Empowering enterprises with cutting-edge cybersecurity and IT
              solutions. Your trusted partner in digital transformation.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:info@jayaait.com"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-red-400" />
                info@jayaait.com
              </a>
              <a
                href="tel:+911234567890"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-red-400" />
                +91 123 456 7890
              </a>
              <div className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="w-4 h-4 text-red-400 mt-0.5" />
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Solutions
            </h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} JAYAA IT Solution Pvt. Ltd. All rights
            reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
