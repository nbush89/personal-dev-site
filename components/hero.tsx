import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { HeroMotion, HeroItem } from "./hero-motion";

const quickFacts = [
  "React + Next.js",
  "Data visualization",
  "Product-minded UX",
];

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero/abstract-tech.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
          quality={90}
          sizes="100vw"
        />
        
        {/* Gradient Overlay - Light Theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/95 via-bg/90 to-bg/95 dark:from-bg/98 dark:via-bg/95 dark:to-bg/98" />
        
        {/* Vignette Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/10 dark:from-black/20 dark:via-black/10 dark:to-black/30" />
        
        {/* Subtle Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.02] noise-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <HeroMotion>
          <div className="text-center px-4 py-24 sm:py-32">
            {/* Eyebrow */}
            <HeroItem>
              <p className="mb-4 text-sm font-medium text-text-muted uppercase tracking-wider">
                Hi, I&apos;m Nicole Bush
              </p>
            </HeroItem>

            {/* Headline */}
            <HeroItem>
              <h1 className="mb-6 text-4xl font-semibold tracking-tight text-text sm:text-5xl md:text-6xl lg:text-7xl">
                Building thoughtful interfaces
                <br />
                that solve real problems.
              </h1>
            </HeroItem>

            {/* Subhead */}
            <HeroItem>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-text-muted sm:text-xl">
                Frontend-focused software engineer specializing in React, Next.js, and
                data-heavy tools—AI, finance, and real-world calculators.
              </p>
            </HeroItem>

            {/* Quick Facts */}
            <HeroItem>
              <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
                {quickFacts.map((fact, index) => (
                  <Badge key={index} variant="default">
                    {fact}
                  </Badge>
                ))}
              </div>
            </HeroItem>

            {/* CTAs */}
            <HeroItem>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/projects" variant="primary">
                  View Projects
                </Button>
                <Button href="/contact" variant="ghost">
                  Get in Touch
                </Button>
              </div>
            </HeroItem>
          </div>
        </HeroMotion>
      </div>
    </section>
  );
}

