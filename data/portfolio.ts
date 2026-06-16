export interface Project {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  techStack: string[];
  links: {
    repo?: string;
    live?: string;
    demo?: string;
  };
  image?: {
    src: string;
    width: number;
    height: number;
  };
  video?: {
    src?: string;
    poster?: string;
    embedUrl?: string;
  };
  gallery?: {
    src: string;
    width: number;
    height: number;
    caption?: string;
  }[];
  stats?: {
    value: string;
    label: string;
  }[];
  sections: {
    problem: string;
    approach: string;
    features: string[];
  };
}

export interface SiteMetadata {
  name: string;
  role: string;
  location?: string;
  headline: string;
  subhead: string;
  social: {
    email: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export const siteMetadata: SiteMetadata = {
  name: "Nicole Bush",
  role: "Tech Lead & Full Stack Engineer",
  location: "Michigan (Remote)",
  headline: "Building production-grade, AI-integrated systems end to end",
  subhead:
    "Full-stack engineer and technical lead with 6+ years across fintech and government defense—defining architecture, owning features end to end, and using AI as a first-class engineering tool.",
  social: {
    email: "nicole.bush000@gmail.com",
    github: "https://github.com/nbush89",
    linkedin: "https://linkedin.com/in/nbush89",
  },
};

export const projects: Project[] = [
  {
    slug: "mineral-risk-analytics",
    title: "Mineral Risk Analytics",
    summary:
      "An EV battery supply-chain risk intelligence platform that scores structural risk per mineral and country across 39 critical minerals and 200+ countries. Technical co-founder and sole engineer; pre-launch, with a functional scoring engine and shipped methodology.",
    tags: ["AI", "Data Platform", "Risk Scoring", "Python", "Next.js"],
    techStack: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "Alembic",
      "PostgreSQL (Neon)",
      "Inngest",
      "Next.js",
      "React",
      "Anthropic Claude (Haiku + Sonnet)",
    ],
    links: {
      repo: "https://github.com/Mineral-Risk-Analytics/data-ingestion-reporting",
      live: "",
      demo: "",
    },
    image: { src: "/mra-page.png", width: 1516, height: 922 },
    video: {
      src: "/mra-walkthrough.mp4",
      poster: "/mra-walkthrough-poster.jpg",
    },
    gallery: [
      {
        src: "/mra-minerals.png",
        width: 1247,
        height: 790,
        caption:
          "Materials registry — risk score, concentration, and signal coverage across all 39 minerals.",
      },
      {
        src: "/mra-mineral-info.png",
        width: 1254,
        height: 787,
        caption:
          "Per-mineral detail — five-pillar score breakdown, producing countries, and analyst notes.",
      },
      {
        src: "/mra-risk-events.png",
        width: 1274,
        height: 795,
        caption:
          "Risk events feed — ingested signals attributed to pillars, sources, and geographies.",
      },
    ],
    stats: [
      { value: "39", label: "critical minerals" },
      { value: "200+", label: "countries scored" },
      { value: "10+", label: "nightly data sources" },
      { value: "~40%", label: "false-positive reduction" },
    ],
    sections: {
      problem:
        "Companies that depend on EV battery materials—lithium, cobalt, nickel, rare earths—need early warning when supply is at risk from geopolitics, regulation, or production being concentrated in just a few countries. That signal is scattered across hundreds of government, trade, and financial sources and changes constantly, so tracking it by hand doesn't scale.",
      approach:
        "I built the platform end to end: a Python/FastAPI backend, a Next.js frontend, and an automated pipeline that pulls from public data sources every night. To cut through the noise affordably, an AI layer (Anthropic Claude) reads each incoming document, confirms it's actually relevant, and tags which minerals and regulations it affects.\n\nA weighted scoring engine then turns everything into a 0–100 risk score for each mineral and country, combining five factors such as production concentration, trade and geopolitical exposure, and regulation. The scoring methodology follows established government frameworks from the USGS and the EU's Joint Research Centre.",
      features: [
        "Risk scores from 0–100 for every mineral-and-country pair, across 39 critical minerals and 200+ countries.",
        "Automated nightly data pipeline that ingests from public government, trade, and financial sources.",
        "AI classification layer (Anthropic Claude) that filters out noise and tags the minerals and regulations each source affects, cutting false positives by roughly 40%.",
        "Weighted scoring engine combining five risk factors: material concentration, geopolitics and trade, regulation, operations, and financial pressure.",
        "Built and run solo end to end: Python/FastAPI backend, Next.js frontend, and the full data and deployment infrastructure.",
      ],
    },
  },
  {
    slug: "home-property-tax-calculator",
    title: "Property Tax Calculator",
    summary:
      "An SEO-driven property tax calculator and editorial reference for homeowners across New Jersey, Texas, and Georgia—built, shipped, and operated solo. Live in production and grown roughly 12× over the last 90 days.",
    tags: ["Next.js", "TypeScript", "SEO", "Data", "OCR"],
    techStack: [
      "Next.js 15 (App Router + RSC)",
      "TypeScript",
      "Tailwind",
      "Recharts",
      "US Census data",
      "OCR",
      "JSON data layer",
      "JSON-LD",
      "Commission Junction",
    ],
    links: {
      repo: "https://github.com/nbush89/property-tax-calculator",
      live: "https://www.home-property-tax.com",
      demo: "",
    },
    image: { src: "/property-tax-page.png", width: 1330, height: 854 },
    stats: [
      { value: "35", label: "counties (NJ · TX · GA)" },
      { value: "220+", label: "city/town pages" },
      { value: "~1,200", label: "active users / 90 days" },
      { value: "~12×", label: "traffic growth in 90 days" },
    ],
    sections: {
      problem:
        "Property tax is hard to estimate and even harder to compare. Every state calculates it differently, the underlying data is spread across government and municipal sources, and a lot of it is buried in formats that are difficult to read. Homebuyers—first-timers especially—have nowhere to get a clear, accurate, side-by-side answer.",
      approach:
        "I built and operate the entire product solo—engineering, design, content, and infrastructure. It pulls public data (such as the US Census) into a single data layer, including an OCR step to extract figures from government PDFs that can't be read normally.\n\nEach state's tax rules live behind one shared calculator, with a flexible structure so adding a new state or county is mostly just data entry. The site is built for SEO from the ground up, generating thousands of location pages so it ranks for the specific questions people actually search.",
      features: [
        "Covers 35 counties and 220+ cities and towns across NJ, TX, and GA, with hand-written local content.",
        "Pulls public data (e.g. the US Census) into one data layer, including OCR to read figures locked inside government PDFs.",
        "Each state's tax rules sit behind a single shared calculator, so new states and counties drop in as data rather than new code.",
        "SEO-driven architecture generating thousands of location pages, with structured data for rich search results.",
        "Run end to end solo: deployment, analytics, and affiliate monetization with per-page conversion tracking.",
      ],
    },
  },
];

export const capabilities = [
  {
    title: "Architecture & Systems",
    description:
      "Defining API contracts, designing data schemas, and decomposing complex systems—owning features from requirements through deployment with minimal oversight.",
  },
  {
    title: "AI-Integrated Engineering",
    description:
      "Using Claude and OpenAI as first-class tools: pressure-testing architecture, building structured classification and extraction pipelines, and shipping reliable AI output in production.",
  },
  {
    title: "Full-Stack Delivery",
    description:
      "Production React and Next.js front ends backed by Python and Node services—plus the testing, observability, and infrastructure that keep them reliable.",
  },
];

export const principles = [
  {
    title: "Clarity",
    description: "Systems and interfaces should be easy to understand, reason about, and build on.",
  },
  {
    title: "Reliability",
    description: "Tested, observable, well-architected software that holds up in production.",
  },
  {
    title: "Ownership",
    description: "Taking complex, ambiguous problems end to end—from requirements through deployment.",
  },
  {
    title: "Measurable Impact",
    description: "Success is defined by outcomes, not just outputs.",
  },
];

// Resume Types
export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  location?: string;
  highlights: string[];
  tech?: string[];
};

export type Education = {
  school: string;
  program: string;
  start?: string;
  end?: string;
  note?: string;
};

export type ResumeData = {
  name: string;
  title: string;
  location?: string;
  email?: string;
  phone?: string;
  linkedIn?: string;
  summary?: string;
  experience: Experience[];
  education: Education[];
  skills: string[];
};

export const resume: ResumeData = {
  name: "Nicole Bush",
  title: "Tech Lead & Full Stack Engineer",
  location: "Michigan (Remote)",
  email: "nicole.bush000@gmail.com",
  phone: "810-986-9923",
  linkedIn: "https://linkedin.com/in/nbush89",
  summary:
    "Full-stack engineer and technical lead with 6+ years building production-grade applications in fintech and government defense. Operates at an architectural level—defining API contracts, designing data schemas, leading cross-team integrations, and driving features from requirements through deployment. Known for owning complex, ambiguous work end to end, and for integrating AI tooling (Claude, OpenAI) as a first-class part of the engineering workflow.",
  experience: [
    {
      company: "Booz Allen Hamilton",
      role: "Senior Software Engineer · Platform & Feature Lead",
      start: "Aug 2022",
      end: "Present",
      location: "Remote",
      highlights: [
        "Technical SME on major feature initiatives for a React/TypeScript enterprise application supporting U.S. military personnel management—owning scope definition, API contract design, database schema design, and end-to-end implementation with minimal oversight.",
        "Designed a Splunk observability schema from scratch, defining an event taxonomy across API responses, business-logic events, and error states for full-flow request traceability.",
        "Architected a standardized error-messaging framework spanning backend to UI, adopted as a codebase-wide pattern.",
        "Contributed architectural direction in design sessions, including a complex staffing-calculation rules engine and backend service, API, and data modeling for new systems.",
        "Built an MUI theme library adopted across the entire frontend and raised unit test coverage from 50% to 75%, establishing team-wide testing patterns.",
        "Integrates Claude as a first-class engineering tool—pressure-testing architecture, generating implementation options, and surfacing edge cases to measurably reduce rework.",
      ],
      tech: [
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Splunk",
        "Material UI",
        "Jest",
        "React Testing Library",
        "Claude",
      ],
    },
    {
      company: "Booz Allen Hamilton",
      role: "Tech Lead · VA National Call Center AI Initiative",
      start: "Aug 2022",
      end: "Mar 2024",
      location: "Remote",
      highlights: [
        "Led engineering on an AI-powered voicebot that triages veteran medical-claims inquiries, integrated into Cisco call-center infrastructure at the VA.",
        "Technical lead on a two-person senior team with full architectural ownership and no management layer—system and integration decisions made at the lead level.",
        "Designed a distributed architecture across three components: an internal Vue.js CMS, Google Dialogflow NLP, and Google Cloud Functions for serverless response logic.",
        "Coordinated Cisco telephony integration with external infrastructure leads through regular cross-team technical sessions.",
        "Identified a gap in Dialogflow's native tooling and built a custom tool to flag training-phrase overlap across intents, improving response accuracy for veteran claims inquiries.",
        "Managed deployments across AWS Elastic Beanstalk and Google Cloud Functions, and mentored a junior developer on SDLC, architectural decision-making, and code review.",
      ],
      tech: [
        "Vue.js",
        "Google Dialogflow",
        "Google Cloud Functions",
        "AWS Elastic Beanstalk",
        "Cisco",
      ],
    },
    {
      company: "Autobooks",
      role: "Software Engineer",
      start: "Aug 2020",
      end: "Jun 2022",
      location: "Detroit, MI",
      highlights: [
        "Contributed to a large-scale enterprise React/TypeScript fintech platform, integrating payment and invoicing features into online banking products.",
        "Designed and implemented GraphQL schemas with TypeScript for safe, predictable API communication.",
        "Refactored 120+ legacy React class components to a functional architecture, improving maintainability and performance across a large shared codebase.",
        "Scaled the end-to-end Selenium Protractor test suite from 20 to 80+ tests, improving release confidence and regression coverage.",
        "Enhanced the MUI theme library and standardized shared component patterns across the application.",
      ],
      tech: [
        "React",
        "TypeScript",
        "GraphQL",
        "Material UI",
        "Selenium",
        "Protractor",
      ],
    },
    {
      company: "Benzinga",
      role: "Front End Engineer",
      start: "Mar 2020",
      end: "Jul 2020",
      location: "Detroit, MI",
      highlights: [
        "Built front-end content blocks in Laravel/PHP with Advanced Custom Fields for a WordPress-based fintech content platform.",
        "Designed and wireframed components in Figma, and performed manual QA to resolve functionality and UX issues.",
      ],
      tech: ["WordPress", "PHP", "Laravel", "Figma", "ACF"],
    },
  ],
  education: [
    {
      school: "Eastern Michigan University",
      program: "B.S. Psychology & Biology",
      end: "Apr 2016",
    },
    {
      school: "Grand Circus",
      program: "Front End Engineering Bootcamp",
      start: "Jan 2020",
      end: "Mar 2020",
    },
  ],
  skills: [
    "TypeScript",
    "JavaScript",
    "Python",
    "React",
    "Next.js",
    "Vue.js",
    "Node.js",
    "FastAPI",
    "API Design",
    "Distributed Systems",
    "Microservices",
    "Database Schema Design",
    "Anthropic Claude",
    "Prompt Engineering",
    "Structured Output Extraction",
    "PostgreSQL",
    "Elasticsearch",
    "SQLAlchemy",
    "TypeORM",
    "AWS Elastic Beanstalk",
    "Google Cloud Functions",
    "Google Dialogflow",
    "Vercel",
    "Docker",
    "Inngest",
    "Splunk",
    "Jest",
    "React Testing Library",
    "Selenium Protractor",
    "Figma",
    "Azure DevOps",
    "Git",
    "Agile/Scrum",
  ],
};
