import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";
import { PageTransition } from "@/components/motion/page-transition";
import { resume } from "@/data/portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Nicole Bush",
  description: "Resume and work history for Nicole Bush, Lead Software Engineer specializing in React, TypeScript, and frontend development.",
};

export default function ResumePage() {
  return (
    <PageTransition>
      <Container className="py-16 sm:py-24">
        {/* Header with Download Button */}
        <FadeIn>
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="mb-2 text-4xl font-semibold tracking-tight text-text sm:text-5xl">
                {resume.name}
              </h1>
              <p className="text-lg text-text-muted">{resume.title}</p>
              {resume.location && (
                <p className="mt-1 text-sm text-text-muted">{resume.location}</p>
              )}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                href="/resume.pdf"
                variant="primary"
                download
                className="whitespace-nowrap"
              >
                Download PDF
              </Button>
              <Button
                href="/resume.pdf"
                variant="ghost"
                target="_blank"
                rel="noreferrer"
                className="whitespace-nowrap"
              >
                Open PDF
              </Button>
            </div>
          </div>
        </FadeIn>

        {/* Summary */}
        {resume.summary && (
          <FadeIn delay={0.1}>
            <section aria-labelledby="summary-heading" className="mb-16">
              <h2 id="summary-heading" className="sr-only">
                Summary
              </h2>
              <p className="text-lg leading-relaxed text-text-muted">
                {resume.summary}
              </p>
            </section>
          </FadeIn>
        )}

        {/* Experience */}
        <FadeIn delay={0.2}>
          <section aria-labelledby="experience-heading" className="mb-16">
            <SectionHeading title="Experience" id="experience-heading" />
            <div className="space-y-8">
              {resume.experience.map((exp, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-text">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-primary">{exp.company}</p>
                      {exp.location && (
                        <p className="text-sm text-text-muted">{exp.location}</p>
                      )}
                    </div>
                    <p className="text-sm font-medium text-text-muted sm:whitespace-nowrap">
                      {exp.start} — {exp.end}
                    </p>
                  </div>
                  <ul className="mb-4 space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-text-muted"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  {exp.tech && exp.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <Badge key={tech} variant="default">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Education */}
        <FadeIn delay={0.3}>
          <section aria-labelledby="education-heading" className="mb-16">
            <SectionHeading title="Education" id="education-heading" />
            <div className="grid gap-6 md:grid-cols-2">
              {resume.education.map((edu, index) => (
                <Card key={index}>
                  <h3 className="mb-1 text-lg font-semibold text-text">
                    {edu.program}
                  </h3>
                  <p className="mb-2 text-text-muted">{edu.school}</p>
                  {(edu.start || edu.end) && (
                    <p className="text-sm text-text-muted">
                      {edu.start && `${edu.start} — `}
                      {edu.end}
                    </p>
                  )}
                  {edu.note && (
                    <p className="mt-2 text-sm text-text-muted">{edu.note}</p>
                  )}
                </Card>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Skills */}
        <FadeIn delay={0.4}>
          <section aria-labelledby="skills-heading">
            <SectionHeading title="Skills" id="skills-heading" />
            <div className="flex flex-wrap gap-2">
              {resume.skills.map((skill) => (
                <Badge key={skill} variant="primary">
                  {skill}
                </Badge>
              ))}
            </div>
          </section>
        </FadeIn>
      </Container>
    </PageTransition>
  );
}

