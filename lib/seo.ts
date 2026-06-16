import { Metadata } from "next";
import { siteMetadata } from "@/data/portfolio";
import type { Project } from "@/data/portfolio";

export function getDefaultMetadata(): Metadata {
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
    title: {
      template: `%s | ${siteMetadata.name}`,
      default: `${siteMetadata.name} - ${siteMetadata.role}`,
    },
    description: siteMetadata.subhead,
    keywords: [
      "lead software engineer",
      "frontend engineer",
      "web developer",
      "React",
      "Next.js",
      "TypeScript",
      "UI/UX",
    ],
    authors: [{ name: siteMetadata.name }],
    creator: siteMetadata.name,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://example.com",
      siteName: siteMetadata.name,
      title: `${siteMetadata.name} - ${siteMetadata.role}`,
      description: siteMetadata.subhead,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: siteMetadata.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteMetadata.name} - ${siteMetadata.role}`,
      description: siteMetadata.subhead,
      images: ["/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function getProjectMetadata(project: Project): Metadata {
  return {
    title: project.title,
    description: project.summary,
    keywords: project.tags,
    openGraph: {
      type: "website",
      title: `${project.title} | ${siteMetadata.name}`,
      description: project.summary,
      images: [
        {
          url: `/og-image-${project.slug}.png`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | ${siteMetadata.name}`,
      description: project.summary,
      images: [`/og-image-${project.slug}.png`],
    },
  };
}

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteMetadata.name,
    jobTitle: siteMetadata.role,
    ...(siteMetadata.location && { address: { "@type": "PostalAddress", addressLocality: siteMetadata.location } }),
    sameAs: [
      ...(siteMetadata.social.github ? [siteMetadata.social.github] : []),
      ...(siteMetadata.social.linkedin ? [siteMetadata.social.linkedin] : []),
      ...(siteMetadata.social.twitter ? [siteMetadata.social.twitter] : []),
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteMetadata.name,
    description: siteMetadata.subhead,
    url: "https://example.com",
  };
}

export function generateProjectSchema(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.summary,
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
    ...(project.links.live && { url: project.links.live }),
    keywords: project.tags.join(", "),
    creator: {
      "@type": "Person",
      name: siteMetadata.name,
    },
  };
}

