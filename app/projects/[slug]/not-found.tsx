import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export default function ProjectNotFound() {
  return (
    <Container className="flex min-h-screen items-center justify-center py-16">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-semibold text-text sm:text-5xl">
          Project Not Found
        </h1>
        <p className="mb-8 text-lg text-text-muted">
          The project you&apos;re looking for doesn&apos;t exist.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/projects" variant="primary">
            View All Projects
          </Button>
          <Button href="/" variant="ghost">
            Go Home
          </Button>
        </div>
      </div>
    </Container>
  );
}

