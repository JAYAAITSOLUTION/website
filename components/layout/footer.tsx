import Link from "next/link";
import { Shield, Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  services: [
    { href: "/services/zero-trust", label: "Zero Trust Security" },
    { href: "/services/digital-transformation", label: "Digital Transformation" },
    { href: "/services/advanced-it", label: "Advanced IT Solutions" },
    { href: "/services/professional", label: "Professional Services" },
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
  ],
};

export function Footer() {
  return (
    <footer className="bg-md-surface-container border-t border-md-outline-variant">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-md-primary flex items-center justify-center">
                <Shield className="w-6 h-6 text-md-on-primary" />
              </div>
              <span className="text-xl font-bold text-md-on-surface">
                JAYAA<span className="text-md-primary">IT</span>
              </span>
            </Link>
            <p className="text-sm text-md-on-surface-variant max-w-xs">
              Empowering enterprises with cutting-edge cybersecurity and IT
              solutions. Your trusted partner in digital transformation.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-md-surface-variant flex items-center justify-center text-md-on-surface-variant hover:bg-md-primary hover:text-md-on-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-md-surface-variant flex items-center justify-center text-md-on-surface-variant hover:bg-md-primary hover:text-md-on-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-semibold text-md-on-surface mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-md-on-surface-variant hover:text-md-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold text-md-on-surface mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-md-on-surface-variant hover:text-md-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-semibold text-md-on-surface mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-md-primary mt-0.5" />
                <a
                  href="mailto:info@jayaait.com"
                  className="text-sm text-md-on-surface-variant hover:text-md-primary transition-colors"
                >
                  info@jayaait.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-md-primary mt-0.5" />
                <a
                  href="tel:+911234567890"
                  className="text-sm text-md-on-surface-variant hover:text-md-primary transition-colors"
                >
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-md-primary mt-0.5" />
                <span className="text-sm text-md-on-surface-variant">
                  Hyderabad, Telangana, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-md-outline-variant" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-md-on-surface-variant">
            © {new Date().getFullYear()} JAYAA IT Solution Pvt. Ltd. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-md-on-surface-variant hover:text-md-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
