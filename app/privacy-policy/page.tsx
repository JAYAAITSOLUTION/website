import { BlurFade } from "@/components/ui/blur-fade";
import { Separator } from "@/components/ui/separator";
import { Shield, Lock, Eye, UserCheck } from "lucide-react";

export const metadata = {
  title: "Privacy Policy - Data Protection & Privacy Rights",
  description: "Understanding how we collect, use, and protect your personal information. Your privacy is fundamental to our relationship.",
};

const keyFeatures = [
  { icon: Lock, title: "Secure by Design", description: "End-to-end encryption" },
  { icon: Shield, title: "GDPR Compliant", description: "Full regulatory compliance" },
  { icon: Eye, title: "Transparent Practices", description: "Clear data usage policies" },
  { icon: UserCheck, title: "User Control", description: "You own your data" },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-md-surface">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-md-surface-container">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-primary-container text-md-on-primary-container text-sm font-medium mb-6">
                <span>Privacy & Data Protection</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-md-on-surface mb-6">
                Privacy{" "}
                <span className="text-md-primary">Policy</span>
              </h1>
              <p className="text-lg text-md-on-surface-variant max-w-2xl mx-auto">
                Understanding how we collect, use, and protect your personal information. Your privacy is fundamental to our relationship, and we&apos;re committed to maintaining the highest standards of data protection.
              </p>
            </div>
          </BlurFade>

          {/* Key Features */}
          <BlurFade delay={0.2} inView>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12">
              {keyFeatures.map((feature) => (
                <div key={feature.title} className="p-4 rounded-2xl bg-md-surface border border-md-outline-variant text-center">
                  <div className="w-10 h-10 rounded-xl bg-md-primary-container flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="w-5 h-5 text-md-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-md-on-surface mb-1">{feature.title}</h3>
                  <p className="text-xs text-md-on-surface-variant">{feature.description}</p>
                </div>
              ))}
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
                    1. Introduction
                  </h2>
                  <p className="text-md-on-surface-variant mb-4">
                    Welcome to JAYAA IT Solution Pvt. Ltd. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at info@jayaaitsolution.com.
                  </p>
                </section>

                <Separator className="bg-md-outline-variant" />

                <section>
                  <h2 className="text-2xl font-bold text-md-on-surface mb-4">
                    2. Information We Collect
                  </h2>
                  <p className="text-md-on-surface-variant mb-4">
                    We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website or otherwise when you contact us.
                  </p>
                  <p className="text-md-on-surface-variant font-medium mb-2">Personal information collected may include:</p>
                  <ul className="list-disc list-inside space-y-2 text-md-on-surface-variant ml-4">
                    <li>Names</li>
                    <li>Phone numbers</li>
                    <li>Email addresses</li>
                    <li>Mailing addresses</li>
                    <li>Job titles</li>
                    <li>Contact preferences</li>
                    <li>Other similar information</li>
                  </ul>
                </section>

                <Separator className="bg-md-outline-variant" />

                <section>
                  <h2 className="text-2xl font-bold text-md-on-surface mb-4">
                    3. How We Use Your Information
                  </h2>
                  <p className="text-md-on-surface-variant mb-4">
                    We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                  </p>
                  <p className="text-md-on-surface-variant font-medium mb-2">We use your information to:</p>
                  <ul className="list-disc list-inside space-y-2 text-md-on-surface-variant ml-4">
                    <li>To send administrative information to you</li>
                    <li>To protect our Services</li>
                    <li>To respond to legal requests and prevent harm</li>
                    <li>To manage user accounts</li>
                    <li>To deliver and facilitate delivery of services to the user</li>
                  </ul>
                </section>

                <Separator className="bg-md-outline-variant" />

                <section>
                  <h2 className="text-2xl font-bold text-md-on-surface mb-4">
                    4. Information Sharing
                  </h2>
                  <p className="text-md-on-surface-variant">
                    We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
                  </p>
                </section>

                <Separator className="bg-md-outline-variant" />

                <section>
                  <h2 className="text-2xl font-bold text-md-on-surface mb-4">
                    5. Data Retention
                  </h2>
                  <p className="text-md-on-surface-variant">
                    We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements).
                  </p>
                </section>

                <Separator className="bg-md-outline-variant" />

                <section>
                  <h2 className="text-2xl font-bold text-md-on-surface mb-4">
                    6. Information Security
                  </h2>
                  <p className="text-md-on-surface-variant">
                    We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
                  </p>
                </section>

                <Separator className="bg-md-outline-variant" />

                <section>
                  <h2 className="text-2xl font-bold text-md-on-surface mb-4">
                    7. Policy Updates
                  </h2>
                  <p className="text-md-on-surface-variant">
                    Yes, we will update this notice as necessary to stay compliant with relevant laws. The updated version will be indicated by an updated &quot;Revised&quot; date and the updated version will be effective as soon as it is accessible.
                  </p>
                </section>

                <Separator className="bg-md-outline-variant" />

                <section className="p-6 rounded-2xl bg-md-primary-container/30 border border-md-primary/20">
                  <h2 className="text-2xl font-bold text-md-on-surface mb-4">
                    Questions About Your Privacy?
                  </h2>
                  <p className="text-md-on-surface-variant mb-4">
                    If you have questions or comments about this privacy notice, or need clarification about our data practices, we&apos;re here to help. Your privacy concerns are our priority.
                  </p>
                  <div className="space-y-2">
                    <p className="text-md-on-surface">
                      <strong>Email:</strong>{" "}
                      <a href="mailto:info@jayaaitsolution.com" className="text-md-primary hover:underline">
                        info@jayaaitsolution.com
                      </a>
                    </p>
                    <p className="text-md-on-surface">
                      <strong>Office Address:</strong><br />
                      803/8, Ekatva Onyx, Wagle Estate Thane West-400604
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  );
}
