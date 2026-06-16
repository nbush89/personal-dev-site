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
                  I’m a full-stack engineer and technical lead with 6+ years
                  building production-grade applications across fintech and
                  government defense. I tend to operate at the architectural
                  level—defining API contracts, designing data schemas, and
                  taking complex, ambiguous features from requirements all the
                  way through deployment.
                </p>
                <p className="text-lg text-text-muted leading-relaxed mb-6">
                  I work comfortably across the stack, from React and Next.js
                  front ends to Python and Node back ends, with the testing,
                  observability, and infrastructure that keep systems reliable.
                  I’ve led cross-team integrations, mentored other engineers,
                  and owned features end to end with minimal oversight.
                </p>
                <p className="text-lg text-text-muted leading-relaxed mb-6">
                  Lately I treat AI as a first-class engineering tool—using
                  Claude and OpenAI to pressure-test architecture, surface edge
                  cases earlier, and build structured classification and
                  extraction pipelines that run in production.
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
                <li>• Building Mineral Risk Analytics—AI-driven EV battery supply-chain risk scoring as technical co-founder and sole engineer</li>
                <li>• Operating a live, three-state Property Tax Calculator serving ~1,200 active users every 90 days</li>
                <li>• Leading platform and feature work at Booz Allen Hamilton, with AI integrated into the engineering workflow</li>
              </ul>
            </Card>
          </div>
        </FadeIn>
      </Container>
    </PageTransition>
  );
}
