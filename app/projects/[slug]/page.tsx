import { notFound } from "next/navigation";
import Image from "next/image";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/project-card";
import { FadeIn } from "@/components/motion/fade-in";
import { PageTransition } from "@/components/motion/page-transition";
import { projects } from "@/data/portfolio";
import { getProjectMetadata, generateProjectSchema } from "@/lib/seo";
import type { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {};
  }

  return getProjectMetadata(project);
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 2);

  const projectSchema = generateProjectSchema(project);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <PageTransition>
        <Container className="py-16 sm:py-24">
          {/* Header */}
          <FadeIn>
            <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="flex flex-col justify-center">
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="default">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h1 className="mb-4 text-4xl font-semibold tracking-tight text-text sm:text-5xl">
                  {project.title}
                </h1>
                <p className="text-lg text-text-muted">{project.summary}</p>
                {/* Links */}
                {(project.links.live ||
                  project.links.repo ||
                  project.links.demo) && (
                  <FadeIn delay={0.1}>
                    <div className="mb-12 mt-8 flex flex-wrap gap-4">
                      {project.links.live && (
                        <Button
                          href={project.links.live}
                          variant="primary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Live
                        </Button>
                      )}
                      {project.links.repo && (
                        <Button
                          href={project.links.repo}
                          variant="ghost"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Code
                        </Button>
                      )}
                      {project.links.demo && (
                        <Button
                          href={project.links.demo}
                          variant="ghost"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Demo
                        </Button>
                      )}
                    </div>
                  </FadeIn>
                )}
              </div>
              {project.slug === "home-property-tax-calculator" && (
                <div className="flex items-center justify-center">
                  <div className="group relative overflow-hidden rounded-lg border border-border-card/60 bg-card-bg transition-all duration-300 hover:scale-[1.01] hover:shadow-md hover:shadow-black/5 dark:hover:shadow-black/10 hover:border-border-card/80 w-full">
                    <Image
                      src="/property-tax-homepage.png"
                      alt="Home Property Tax Calculator homepage screenshot"
                      width={800}
                      height={600}
                      className="h-auto w-full object-cover"
                      priority
                    />
                  </div>
                </div>
              )}
            </div>
          </FadeIn>

          {/* Sections */}
          <div className="mb-16 space-y-12">
            <FadeIn delay={0.2}>
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-text">
                  Problem
                </h2>
                <p className="text-text-muted leading-relaxed">
                  {project.sections.problem}
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={0.3}>
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-text">
                  Approach
                </h2>
                <p className="text-text-muted leading-relaxed">
                  {project.sections.approach}
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={0.4}>
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-text">
                  Key Features
                </h2>
                <p className="text-text-muted leading-relaxed">
                  {project.sections.features}
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={0.5}>
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-text">
                  Tech Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </section>
            </FadeIn>
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <FadeIn delay={0.6}>
              <section>
                <h2 className="mb-8 text-2xl font-semibold text-text">
                  Related Projects
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {relatedProjects.map((relatedProject) => (
                    <ProjectCard
                      key={relatedProject.slug}
                      project={relatedProject}
                    />
                  ))}
                </div>
              </section>
            </FadeIn>
          )}
        </Container>
      </PageTransition>
    </>
  );
}
