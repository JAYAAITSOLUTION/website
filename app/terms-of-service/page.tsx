import { BlurFade } from "@/components/ui/blur-fade";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Terms of Service | JAYAA IT Solution Pvt. Ltd.",
  description: "Terms of Service for JAYAA IT Solution - Please read these terms carefully before using our website and services.",
};

export default function TermsOfServicePage() {
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
                Terms of <span className="text-md-primary">Service</span>
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
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-md-on-surface mb-4">
                    1. Acceptance of Terms
                  </h2>
                  <p className="text-md-on-surface-variant mb-4">
                    By accessing or using the website and services of JAYAA IT Solution
                    Pvt. Ltd. (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you agree to be bound by
                    these Terms of Service. If you do not agree to these terms,
                    please do not use our website or services.
                  </p>
                </section>

                <Separator className="bg-md-outline-variant" />

                <section>
                  <h2 className="text-2xl font-bold text-md-on-surface mb-4">
                    2. Services Description
                  </h2>
                  <p className="text-md-on-surface-variant mb-4">
                    JAYAA IT Solution provides cybersecurity consulting, IT solutions,
                    digital transformation services, and related professional
                    services. The specific scope of services will be defined in
                    individual service agreements with clients.
                  </p>
                </section>

                <Separator className="bg-md-outline-variant" />

                <section>
                  <h2 className="text-2xl font-bold text-md-on-surface mb-4">
                    3. Use of Website
                  </h2>
                  <p className="text-md-on-surface-variant mb-4">
                    You agree to use our website only for lawful purposes and in
                    a way that does not infringe the rights of others or
                    restrict their use and enjoyment of the website.
                  </p>
                  <p className="text-md-on-surface-variant">
                    Prohibited activities include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-md-on-surface-variant ml-4 mt-2">
                    <li>Attempting to gain unauthorized access to our systems</li>
                    <li>Transmitting malware or malicious code</li>
                    <li>Scraping or data mining our website content</li>
                    <li>Using our website for fraudulent purposes</li>
                  </ul>
                </section>

                <Separator className="bg-md-outline-variant" />

                <section>
                  <h2 className="text-2xl font-bold text-md-on-surface mb-4">
                    4. Intellectual Property
                  </h2>
                  <p className="text-md-on-surface-variant mb-4">
                    All content on this website, including text, graphics, logos,
                    images, and software, is the property of JAYAA IT Solution or
                    its licensors and is protected by copyright, trademark, and
                    other intellectual property laws.
                  </p>
                  <p className="text-md-on-surface-variant">
                    You may not reproduce, distribute, modify, or create
                    derivative works from any content without our express
                    written permission.
                  </p>
                </section>

                <Separator className="bg-md-outline-variant" />

                <section>
                  <h2 className="text-2xl font-bold text-md-on-surface mb-4">
                    5. Confidentiality
                  </h2>
                  <p className="text-md-on-surface-variant">
                    Any confidential information shared during the course of our
                    services will be protected according to the confidentiality
                    provisions in our service agreements and applicable laws. We
                    maintain strict confidentiality of all client information.
                  </p>
                </section>

                <Separator className="bg-md-outline-variant" />

                <section>
                  <h2 className="text-2xl font-bold text-md-on-surface mb-4">
                    6. Limitation of Liability
                  </h2>
                  <p className="text-md-on-surface-variant mb-4">
                    To the fullest extent permitted by law, JAYAA IT Solution shall
                    not be liable for any indirect, incidental, special,
                    consequential, or punitive damages arising out of or
                    relating to your use of our website or services.
                  </p>
                </section>

                <Separator className="bg-md-outline-variant" />

                <section>
                  <h2 className="text-2xl font-bold text-md-on-surface mb-4">
                    7. Indemnification
                  </h2>
                  <p className="text-md-on-surface-variant">
                    You agree to indemnify and hold harmless JAYAA IT Solution and
                    its officers, directors, employees, and agents from any
                    claims, damages, losses, or expenses arising out of your use
                    of our website or services or your violation of these terms.
                  </p>
                </section>

                <Separator className="bg-md-outline-variant" />

                <section>
                  <h2 className="text-2xl font-bold text-md-on-surface mb-4">
                    8. Governing Law
                  </h2>
                  <p className="text-md-on-surface-variant">
                    These Terms of Service shall be governed by and construed in
                    accordance with the laws of India. Any disputes arising
                    under these terms shall be subject to the exclusive
                    jurisdiction of the courts in Hyderabad, Telangana.
                  </p>
                </section>

                <Separator className="bg-md-outline-variant" />

                <section>
                  <h2 className="text-2xl font-bold text-md-on-surface mb-4">
                    9. Changes to Terms
                  </h2>
                  <p className="text-md-on-surface-variant">
                    We reserve the right to modify these Terms of Service at any
                    time. Changes will be effective immediately upon posting to
                    the website. Your continued use of the website after any
                    changes constitutes acceptance of the modified terms.
                  </p>
                </section>

                <Separator className="bg-md-outline-variant" />

                <section>
                  <h2 className="text-2xl font-bold text-md-on-surface mb-4">
                    10. Contact Information
                  </h2>
                  <p className="text-md-on-surface-variant">
                    If you have any questions about these Terms of Service,
                    please contact us at:{" "}
                    <a
                      href="mailto:legal@jayaait.com"
                      className="text-md-primary hover:underline"
                    >
                      legal@jayaait.com
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
