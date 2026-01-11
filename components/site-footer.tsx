import { Container } from "./container";
import { siteMetadata } from "@/data/portfolio";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-subtle py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-text-muted">
            © {currentYear} {siteMetadata.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {siteMetadata.social.github && (
              <a
                href={siteMetadata.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-muted hover:text-primary-hover transition-colors"
                aria-label="GitHub"
              >
                GitHub
              </a>
            )}
            {siteMetadata.social.linkedin && (
              <a
                href={siteMetadata.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-muted hover:text-primary-hover transition-colors"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            )}
            {siteMetadata.social.email && (
              <a
                href={`mailto:${siteMetadata.social.email}`}
                className="text-sm text-text-muted hover:text-primary-hover transition-colors"
                aria-label="Email"
              >
                Email
              </a>
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
}

