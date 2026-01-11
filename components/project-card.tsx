import Link from "next/link";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import type { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="block">
      <Card className="h-full transition-transform hover:scale-[1.02]">
        <h3 className="text-xl font-semibold text-text mb-2">
          {project.title}
        </h3>
        <p className="text-text-muted mb-4 line-clamp-2">{project.summary}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="default">
              {tag}
            </Badge>
          ))}
        </div>
      </Card>
    </Link>
  );
}

