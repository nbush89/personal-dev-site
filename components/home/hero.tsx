import { HeroMotion, HeroItem } from "./hero-motion";
import { ScrollDownButton } from "./scroll-down-button";
import { HeroBackground } from "./hero-background";
import { siteMetadata } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <HeroBackground />
        
        {/* Dark gradient overlay from top (for nav readability) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/10 dark:from-black/60 dark:via-black/40 dark:to-black/20" />
        
        {/* Softer mid overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/50 to-bg/60 dark:from-bg/85 dark:via-bg/70 dark:to-bg/75" />
        
        {/* Subtle vignette */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle, transparent 0%, transparent 50%, rgba(0, 0, 0, 0.05) 100%)',
          }}
        />
        
        {/* Bottom fade overlay - transitions hero into next section */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40 sm:h-52 md:h-64 bg-gradient-to-b from-transparent to-bg-subtle" 
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
        <HeroMotion>
          <div className="text-center py-24 sm:py-32">
            {/* Eyebrow Pill */}
            <HeroItem>
              <div className="mb-6 inline-flex items-center rounded-full border border-border bg-bg/60 backdrop-blur-sm px-4 py-2 text-sm font-medium text-text-muted">
                Software Developer
              </div>
            </HeroItem>

            {/* Headline */}
            <HeroItem>
              <h1 className="mb-6 text-5xl font-semibold tracking-tight text-text sm:text-6xl md:text-7xl">
                I am{" "}
                <span className="relative">
                  {siteMetadata.name}
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent-gold" />
                </span>
                .
              </h1>
            </HeroItem>

            {/* Subhead */}
            <HeroItem>
              <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-text-muted sm:text-xl">
                {siteMetadata.subhead}
              </p>
            </HeroItem>

            {/* Social Icons */}
            <HeroItem>
              <div className="flex items-center justify-center gap-6">
                {siteMetadata.social.linkedin && (
                  <SocialLink
                    href={siteMetadata.social.linkedin}
                    label="LinkedIn"
                    icon={
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    }
                  />
                )}
                {siteMetadata.social.github && (
                  <SocialLink
                    href={siteMetadata.social.github}
                    label="GitHub"
                    icon={
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    }
                  />
                )}
                {siteMetadata.social.email && (
                  <SocialLink
                    href={`mailto:${siteMetadata.social.email}`}
                    label="Email"
                    icon={
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    }
                  />
                )}
              </div>
            </HeroItem>
          </div>
        </HeroMotion>
      </div>

      {/* Scroll Down Button */}
      <ScrollDownButton />
    </section>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  const isEmail = href.startsWith("mailto:");
  
  return (
    <a
      href={href}
      {...(isEmail ? {} : { target: "_blank", rel: "noopener noreferrer" })}
      className="text-text-muted transition-all hover:text-primary hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-sm"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

