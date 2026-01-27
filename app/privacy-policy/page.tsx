import { BlurFade } from "@/components/ui/blur-fade";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Privacy Policy | JAYAA IT Solution Pvt. Ltd.",
  description: "Privacy Policy for JAYAA IT Solution - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-md-surface">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-md-surface-container">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-primary-container text-md-on-primary-container text-sm font-medium mb-6">
                <span>Legal</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-md-on-surface mb-6">
                Privacy <span className="text-md-primary">Policy</span>
              </h1>
              <p className="text-md-on-surface-variant">
                Last updated: January 2025
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="max-w-3xl mx-auto prose prose-lg">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-md-on-surface mb-4">
                    1. Introduction
                  </h2>
                  <p className="text-md-on-surface-variant mb-4">
                    JAYAA IT Solution Pvt. Ltd. ("we," "our," or "us") is
                    committed to protecting your privacy. This Privacy Policy
                    explains how we collect, use, disclose, and safeguard your
                    information when you visit our website or use our services.
                  </p>
                  <p className="text-md-on-surface-variant">
                    By accessing our website or using our services, you consent
                    to the practices described in this Privacy Policy.
                  </p>
                </section>

                <Separator className="bg-md-outline-variant" />

                <section>
                  <h2 className="text-2xl font-bold text-md-on-surface mb-4">
                    2. Information We Collect
                  </h2>
                  <p className="text-md-on-surface-variant mb-4">
                    We may collect the following types of information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-md-on-surface-variant ml-4">
                    <li>
                      <strong className="text-md-on-surface">Personal Information:</strong>{" "}
                      Name, email address, phone number, company name, and job
                      title when you contact us or request our services.
                    </li>
                    <li>
                      <strong className="text-md-on-surface">Usage Data:</strong> Information
                      about how you access and use our website, including your
                      IP address, browser type, and pages visited.
                    </li>
                    <li>
                      <strong className="text-md-on-surface">Cookies:</strong> We use cookies
                      and similar tracking technologies to enhance your browsing
                      experience.
                    </li>
                  </ul>
                </section>

                <Separator className="bg-md-outline-variant" />

                <section>
                  <h2 className="text-2xl font-bold text-md-on-surface mb-4">
                    3. How We Use Your Information
                  </h2>
                  <p className="text-md-on-surface-variant mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-md-on-surface-variant ml-4">
                    <li>Provide and maintain our services</li>
                    <li>Respond to your inquiries and support requests</li>
                    <li>Send you marketing and promotional communications</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <Separator className="bg-md-outline-variant" />

                <section>
                  <h2 className="text-2xl font-bold text-md-on-surface mb-4">
                    4. Information Sharing
                  </h2>
                  <p className="text-md-on-surface-variant mb-4">
                    We do not sell or rent your personal information to third
                    parties. We may share your information with:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-md-on-surface-variant ml-4">
                    <li>Service providers who assist in our operations</li>
                    <li>Professional advisors and auditors</li>
                    <li>Law enforcement when required by law</li>
                  </ul>
                </section>

                <Separator className="bg-md-outline-variant" />

                <section>
                  <h2 className="text-2xl font-bold text-md-on-surface mb-4">
                    5. Data Security
                  </h2>
                  <p className="text-md-on-surface-variant">
                    We implement appropriate technical and organizational
                    measures to protect your personal information against
                    unauthorized access, alteration, disclosure, or destruction.
                    As a cybersecurity company, we maintain the highest
                    standards of data protection.
                  </p>
                </section>

                <Separator className="bg-md-outline-variant" />

                <section>
                  <h2 className="text-2xl font-bold text-md-on-surface mb-4">
                    6. Your Rights
                  </h2>
                  <p className="text-md-on-surface-variant mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-md-on-surface-variant ml-4">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Opt-out of marketing communications</li>
                  </ul>
                </section>

                <Separator className="bg-md-outline-variant" />

                <section>
                  <h2 className="text-2xl font-bold text-md-on-surface mb-4">
                    7. Contact Us
                  </h2>
                  <p className="text-md-on-surface-variant">
                    If you have any questions about this Privacy Policy, please
                    contact us at:{" "}
                    <a
                      href="mailto:privacy@jayaait.com"
                      className="text-md-primary hover:underline"
                    >
                      privacy@jayaait.com
                    </a>
                  </p>
                </section>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  );
}
