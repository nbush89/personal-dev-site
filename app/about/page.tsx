import Image from "next/image";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger } from "@/components/motion/stagger";
import { StaggerItem } from "@/components/motion/stagger-item";
import { PageTransition } from "@/components/motion/page-transition";
import { siteMetadata, principles } from "@/data/portfolio";

export const metadata = {
  title: "About",
  description: `Learn more about ${siteMetadata.name} and the principles that guide my work.`,
};

export default function AboutPage() {
  return (
    <PageTransition>
      <Container className="py-16 sm:py-24">
        <FadeIn>
          <div className="mb-16">
            <h1 className="mb-6 text-4xl font-semibold tracking-tight text-text sm:text-5xl">
              About
            </h1>
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
              <div className="prose prose-lg max-w-none lg:max-w-xl">
                <p className="text-lg text-text-muted leading-relaxed mb-6">
                  I’m a software engineer with a strong frontend focus, building
                  thoughtful, scalable interfaces that make complex problems
                  feel simple. I care deeply about clean code, clear UX, and
                  products that are intuitive from the first interaction.
                </p>
                <p className="text-lg text-text-muted leading-relaxed mb-6">
                  I’ve worked across large codebases, led feature development,
                  and collaborated closely with designers and stakeholders to
                  ship reliable, well-tested software. I’m especially interested
                  in data-driven interfaces, performance, and reusable component
                  systems.
                </p>
                <p className="text-lg text-text-muted leading-relaxed mb-6">
                  At the end of the day, I believe the best products feel
                  effortless to use while delivering real value.
                </p>
                <p className="text-lg text-text-muted leading-relaxed">
                  {siteMetadata.location &&
                    `Based in ${siteMetadata.location}. `}
                  Always learning, always building.
                </p>
              </div>
              <div className="relative aspect-square w-full max-w-xs mx-auto lg:mx-auto lg:max-w-sm">
                <Image
                  src="/profile-pic.png"
                  alt="Nicole Bush"
                  fill
                  className="rounded-lg object-cover border border-border-card/60 shadow-soft"
                  priority
                  sizes="(max-width: 500px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <SectionHeading title="Principles" />
        </FadeIn>

        <Stagger className="grid gap-6 md:grid-cols-2">
          {principles.map((principle, index) => (
            <StaggerItem key={index}>
              <Card>
                <h3 className="mb-2 text-xl font-semibold text-text">
                  {principle.title}
                </h3>
                <p className="text-text-muted">{principle.description}</p>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Currently Section */}
        <FadeIn delay={0.2}>
          <div className="mt-16">
            <Card>
              <h2 className="mb-4 text-2xl font-semibold text-text">
                Currently
              </h2>
              <ul className="space-y-2 text-text-muted">
                <li>• Building products that make complex data accessible</li>
                <li>• Exploring the intersection of AI and user experience</li>
                <li>• Contributing to open-source projects</li>
              </ul>
            </Card>
          </div>
        </FadeIn>
      </Container>
    </PageTransition>
  );
}
