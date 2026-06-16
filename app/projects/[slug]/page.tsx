import { notFound } from "next/navigation";
import Image from "next/image";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/project-card";
import { ProjectGallery } from "@/components/project-gallery";
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
              {project.image && (
                <div className="flex items-center justify-center">
                  <div className="group relative overflow-hidden rounded-lg border border-border-card/60 bg-card-bg transition-all duration-300 hover:scale-[1.01] hover:shadow-md hover:shadow-black/5 dark:hover:shadow-black/10 hover:border-border-card/80 w-full">
                    <Image
                      src={project.image.src}
                      alt={`${project.title} screenshot`}
                      width={project.image.width}
                      height={project.image.height}
                      className="h-auto w-full object-cover"
                      priority
                    />
                  </div>
                </div>
              )}
            </div>
          </FadeIn>

          {/* Stats */}
          {project.stats && project.stats.length > 0 && (
            <FadeIn delay={0.15}>
              <div className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {project.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-border-card/60 bg-card-bg p-4 text-center"
                  >
                    <div className="text-2xl font-semibold text-text sm:text-3xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-text-muted">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          )}

          {/* Demo Video */}
          {project.video && (project.video.embedUrl || project.video.src) && (
            <FadeIn delay={0.18}>
              <section className="mb-16">
                <h2 className="mb-4 text-2xl font-semibold text-text">Demo</h2>
                <div className="overflow-hidden rounded-lg border border-border-card/60 bg-card-bg">
                  {project.video.embedUrl ? (
                    <div
                      className="relative w-full"
                      style={{ aspectRatio: "16 / 9" }}
                    >
                      <iframe
                        src={project.video.embedUrl}
                        title={`${project.title} demo`}
                        className="absolute inset-0 h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <video
                      controls
                      preload="metadata"
                      poster={project.video.poster}
                      className="h-auto w-full"
                    >
                      <source src={project.video.src} />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              </section>
            </FadeIn>
          )}

          {/* Sections */}
          <div className="mb-16 space-y-12">
            <FadeIn delay={0.2}>
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-text">
                  Problem
                </h2>
                {project.sections.problem.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    className="text-text-muted leading-relaxed [&:not(:last-child)]:mb-4"
                  >
                    {para}
                  </p>
                ))}
              </section>
            </FadeIn>

            <FadeIn delay={0.3}>
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-text">
                  Approach
                </h2>
                {project.sections.approach.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    className="text-text-muted leading-relaxed [&:not(:last-child)]:mb-4"
                  >
                    {para}
                  </p>
                ))}
              </section>
            </FadeIn>

            <FadeIn delay={0.4}>
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-text">
                  Key Features
                </h2>
                <ul className="space-y-3">
                  {project.sections.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-text-muted leading-relaxed"
                    >
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </FadeIn>

            {project.gallery && project.gallery.length > 0 && (
              <FadeIn delay={0.45}>
                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-text">
                    Gallery
                  </h2>
                  <ProjectGallery
                    images={project.gallery}
                    title={project.title}
                  />
                </section>
              </FadeIn>
            )}

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
