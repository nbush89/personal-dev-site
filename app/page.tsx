import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/home/hero";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger } from "@/components/motion/stagger";
import { StaggerItem } from "@/components/motion/stagger-item";
import { PageTransition } from "@/components/motion/page-transition";
import { projects, capabilities, resume } from "@/data/portfolio";

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

      {/* Resume Teaser */}
      <section className="bg-bg-subtle">
        <Container className="py-16 sm:py-24">
          <FadeIn delay={0.2}>
            <div className="mb-8 flex items-center justify-between">
              <SectionHeading title="Experience" />
              <div className="flex gap-3">
                <Button href="/resume" variant="primary">
                  View Full Resume
                </Button>
                <Button
                  href="/Nicole_Bush_Resume.pdf"
                  variant="ghost"
                  download
                  className="hidden sm:inline-flex"
                >
                  Download PDF
                </Button>
              </div>
            </div>
          </FadeIn>
          <Stagger className="space-y-6">
            {resume.experience.slice(0, 2).map((exp, index) => (
              <StaggerItem key={index}>
                <Card>
                  <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-text">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-primary">{exp.company}</p>
                      <p className="text-sm text-text-muted">
                        {exp.start} — {exp.end}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.slice(0, 3).map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-text-muted"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="bg-bg-subtle">
        <Container className="py-16 sm:py-24">
          <FadeIn delay={0.3}>
            <SectionHeading title="Capabilities" />
          </FadeIn>
          <Stagger className="grid gap-6 md:grid-cols-3">
            {capabilities.map((capability, index) => (
              <StaggerItem key={index}>
                <Card className="h-full flex flex-col">
                  <h3 className="mb-2 text-xl font-semibold text-text">
                    {capability.title}
                  </h3>
                  <p className="text-text-muted flex-grow">{capability.description}</p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>
    </PageTransition>
  );
}
