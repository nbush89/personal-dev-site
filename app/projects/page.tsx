"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger } from "@/components/motion/stagger";
import { StaggerItem } from "@/components/motion/stagger-item";
import { PageTransition } from "@/components/motion/page-transition";
import { projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((project) => {
      project.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesTag = selectedTag === null || project.tags.includes(selectedTag);
      return matchesTag;
    });
  }, [selectedTag]);

  return (
    <PageTransition>
      <Container className="py-16 sm:py-24 min-h-screen">
        <FadeIn>
          <SectionHeading
            title="Projects"
            description="A collection of work focused on solving real problems with thoughtful design and clean code."
          />
        </FadeIn>

        {/* Tag Filters */}
        <FadeIn delay={0.1}>
          <div className="mb-12">
            <p className="mb-3 text-sm font-medium text-text">Filter by tag:</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTag(null)}
                className={cn(
                  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
                  selectedTag === null
                    ? "bg-primary text-white"
                    : "bg-bg-subtle text-text hover:bg-primary-soft"
                )}
                aria-pressed={selectedTag === null}
              >
                All
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                  className={cn(
                    "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
                    selectedTag === tag
                      ? "bg-primary text-white"
                      : "bg-bg-subtle text-text hover:bg-primary-soft"
                  )}
                  aria-pressed={selectedTag === tag}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <Stagger key={selectedTag || "all"} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <StaggerItem key={project.slug}>
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </Stagger>
        ) : (
          <FadeIn>
            <div className="py-12 text-center">
              <p className="text-text-muted">No projects found matching your criteria.</p>
            </div>
          </FadeIn>
        )}
      </Container>
    </PageTransition>
  );
}

