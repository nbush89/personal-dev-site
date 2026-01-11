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
          <div className="mb-16 max-w-3xl">
            <h1 className="mb-6 text-4xl font-semibold tracking-tight text-text sm:text-5xl">
              About
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-text-muted leading-relaxed mb-6">
                I&apos;m a {siteMetadata.role.toLowerCase()} focused on building products that solve
                real problems. My work sits at the intersection of design, engineering, and
                product thinking—where clean interfaces meet thoughtful functionality.
              </p>
              <p className="text-lg text-text-muted leading-relaxed mb-6">
                I believe the best products are those that feel effortless to use while
                delivering measurable value. Whether it&apos;s a data visualization that helps
                someone make a decision, or an interface that simplifies a complex workflow,
                I aim to create experiences that are both beautiful and purposeful.
              </p>
              <p className="text-lg text-text-muted leading-relaxed">
                {siteMetadata.location && `Based in ${siteMetadata.location}. `}
                Always learning, always building.
              </p>
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
              <h2 className="mb-4 text-2xl font-semibold text-text">Currently</h2>
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

