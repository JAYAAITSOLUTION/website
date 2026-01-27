import { Linkedin, Twitter, Mail } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";

const leadership = [
  {
    name: "Rajesh Kumar",
    role: "Chief Executive Officer",
    bio: "20+ years of experience in enterprise IT and cybersecurity. Former CISO at Fortune 500 companies.",
    initials: "RK",
  },
  {
    name: "Priya Sharma",
    role: "Chief Technology Officer",
    bio: "Expert in cloud architecture and digital transformation. Led multiple large-scale transformation projects.",
    initials: "PS",
  },
  {
    name: "Amit Patel",
    role: "Chief Information Security Officer",
    bio: "CISSP certified security leader with expertise in Zero Trust architecture and threat intelligence.",
    initials: "AP",
  },
  {
    name: "Sneha Reddy",
    role: "VP of Operations",
    bio: "15+ years in IT service delivery and managed services. Expert in building high-performance teams.",
    initials: "SR",
  },
];

const stats = [
  { value: 50, suffix: "+", label: "Team Members" },
  { value: 25, suffix: "+", label: "Certifications" },
  { value: 15, suffix: "+", label: "Years Average Experience" },
  { value: 100, suffix: "%", label: "Certified Professionals" },
];

export const metadata = {
  title: "Our Team | JAYAA IT Solution",
  description: "Meet the leadership team behind JAYAA IT Solution - experienced professionals dedicated to your security.",
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-md-surface">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-md-surface-container">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-primary-container text-md-on-primary-container text-sm font-medium mb-6">
                <span>Our Team</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-md-on-surface mb-6">
                Meet Our <span className="text-md-primary">Leadership</span>
              </h1>
              <p className="text-lg text-md-on-surface-variant max-w-2xl mx-auto">
                Our team of certified professionals brings decades of combined
                experience in cybersecurity, IT infrastructure, and digital
                transformation.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-md-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-md-surface-container border border-md-outline-variant text-center"
                >
                  <div className="text-3xl font-bold text-md-primary mb-1">
                    <NumberTicker value={stat.value} />
                    <span>{stat.suffix}</span>
                  </div>
                  <p className="text-sm text-md-on-surface-variant">{stat.label}</p>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-20 lg:py-32 bg-md-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-md-on-surface mb-4">
                Executive <span className="text-md-primary">Team</span>
              </h2>
              <p className="text-md-on-surface-variant">
                Experienced leaders driving innovation and excellence in cybersecurity.
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {leadership.map((member, index) => (
              <BlurFade key={member.name} delay={0.1 + index * 0.1} inView>
                <div className="group p-8 rounded-2xl bg-md-surface-container border border-md-outline-variant hover:border-md-primary/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 rounded-2xl bg-md-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-md-on-primary">
                        {member.initials}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-md-on-surface mb-1">
                        {member.name}
                      </h3>
                      <p className="text-md-primary font-medium mb-3">{member.role}</p>
                      <p className="text-md-on-surface-variant text-sm mb-4">
                        {member.bio}
                      </p>
                      <div className="flex gap-3">
                        <a
                          href="#"
                          className="w-8 h-8 rounded-full bg-md-surface-variant flex items-center justify-center text-md-on-surface-variant hover:bg-md-primary hover:text-md-on-primary transition-colors"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 rounded-full bg-md-surface-variant flex items-center justify-center text-md-on-surface-variant hover:bg-md-primary hover:text-md-on-primary transition-colors"
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 rounded-full bg-md-surface-variant flex items-center justify-center text-md-on-surface-variant hover:bg-md-primary hover:text-md-on-primary transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
