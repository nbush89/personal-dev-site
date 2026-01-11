import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="flex min-h-screen items-center justify-center py-16">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-semibold text-text sm:text-5xl">
          404
        </h1>
        <p className="mb-8 text-lg text-text-muted">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Button href="/" variant="primary">
          Go Home
        </Button>
      </div>
    </Container>
  );
}

