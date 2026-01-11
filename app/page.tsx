import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { Card } from "@/components/ui/card";
import { Hero } from "@/components/home/hero";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger } from "@/components/motion/stagger";
import { StaggerItem } from "@/components/motion/stagger-item";
import { PageTransition } from "@/components/motion/page-transition";
import { projects, capabilities } from "@/data/portfolio";

export default function Home() {
  const selectedProjects = projects.slice(0, 2);

  return (
    <PageTransition>
      {/* Hero Section */}
      <Hero />

      {/* Selected Work - Panel Overlap */}
      <section id="selected-work" className="scroll-mt-24 bg-bg-subtle">
        <div className="relative z-10 -mt-10 sm:-mt-14">
          <div className="rounded-t-3xl border-t border-l border-r border-border bg-bg-subtle shadow-sm">
            <Container className="py-16 sm:py-20">
              <FadeIn delay={0.1}>
                <SectionHeading title="Personal Projects" />
              </FadeIn>
              <Stagger className="grid gap-6 md:grid-cols-2">
                {selectedProjects.map((project) => (
                  <StaggerItem key={project.slug}>
                    <ProjectCard project={project} />
                  </StaggerItem>
                ))}
              </Stagger>
            </Container>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-bg-subtle">
        <Container className="py-16 sm:py-24">
          <FadeIn delay={0.2}>
            <SectionHeading title="Capabilities" />
          </FadeIn>
          <Stagger className="grid gap-6 md:grid-cols-3">
            {capabilities.map((capability, index) => (
              <StaggerItem key={index}>
                <Card>
                  <h3 className="mb-2 text-xl font-semibold text-text">
                    {capability.title}
                  </h3>
                  <p className="text-text-muted">{capability.description}</p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>
    </PageTransition>
  );
}
