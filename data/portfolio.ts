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
  sections: {
    problem: string;
    approach: string;
    features: string;
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
  role: "Frontend Engineer & Product Designer",
  location: "Detroit, MI",
  headline: "Building thoughtful interfaces that solve real problems",
  subhead: "Frontend-focused software engineer specializing in React, Next.js, and data-heavy tools—AI, finance, and real-world utilities.",
  social: {
    email: "nicole.bush000@gmail.com",
    github: "https://github.com/nbush89",
    linkedin: "https://linkedin.com/in/nbush89",
  },
};

export const projects: Project[] = [
  {
    slug: "ai-stock-trading-assistant",
    title: "AI Stock Trading Assistant",
    summary: "AI-driven research tool for long-term stock/ETF analysis focused on explainability.",
    tags: ["AI", "FinTech", "Python", "LLMs", "APIs"],
    techStack: [
      "Python",
      "React",
      "TypeScript",
      "Tailwind",
      "FastAPI",
      "Polygon",
      "Tiingo",
      "OpenAI",
      "Feature vectors",
      "Indicators",
      "Sentiment",
    ],
    links: {
      repo: "https://github.com/nbush89/stock-manager",
      live: "",
      demo: "",
    },
    sections: {
      problem:
        "Traditional stock research tools overwhelm users with raw data without context. Investors need clear, explainable insights to make informed long-term decisions, especially when evaluating ETFs and individual stocks for portfolio construction.",
      approach:
        "Built an AI-powered research assistant that aggregates data from multiple financial APIs (Polygon, Tiingo, QuiverQuant) and uses LLMs to generate explainable analysis. The system creates feature vectors from financial indicators, sentiment analysis, and fundamental data, then presents findings in a structured, easy-to-understand format.",
      features:
        "Multi-source data aggregation, explainable AI analysis with reasoning, long-term trend identification, ETF comparison tools, sentiment analysis from news and social sources, customizable research parameters, and exportable reports.",
    },
  },
  {
    slug: "home-property-tax-calculator",
    title: "Home Property Tax Calculator",
    summary: "SEO-driven property tax platform turning municipal data into clear estimates. The application uses scraping methods to pull in state, county and local effective tax rates, median home values, and average property tax bills for current and past years, where available.",
    tags: ["Next.js", "TypeScript", "SEO", "Data Viz", "Recharts"],
    techStack: [
      "Next.js (App Router)",
      "React",
      "TypeScript",
      "Tailwind",
      "JSON-LD",
      "Recharts",
      "Programmatic SEO",
    ],
    links: {
      repo: "https://github.com/nbush89/property-tax-calculator",
      live: "https://www.home-property-tax.com",
      demo: "",
    },
    sections: {
      problem:
        "As a recent first-time homebuyer myself, I realized that roperty tax information is scattered across municipal websites and difficult to understand. Homebuyers and homeowners need quick, accurate estimates to make informed financial decisions, but existing tools are either too generic or require extensive manual research and comparisons across different locations are difficult to make, especially for first time homebuyers.",
      approach:
        "Developed a Next.js platform that aggregates municipal property tax data and presents it through an SEO-optimized, programmatic content strategy. Each location gets a dedicated page with interactive historical tax charts, clear breakdowns, and structured data (JSON-LD) for search engines. The site uses dynamic routing to scale across over a hundred locations, representing all counties in New Jersey with more states planned for release.",
      features:
        "Programmatic SEO with location-based pages, interactive tax visualization with Recharts, clear breakdowns by property value ranges, historical tax trend data, mobile-responsive design, fast page loads with Next.js optimization, and structured data for rich search results.",
    },
  },
];

export const capabilities = [
  {
    title: "Frontend & UX",
    description: "Designing clean, accessible interfaces with React and modern design systems—focused on clarity, performance, and long-term maintainability.",
  },
  {
    title: "Data-Driven Interfaces",
    description: "Turning complex data into clear, interactive visualizations that help people understand trends and make better decisions.",
  },
  {
    title: "Product Thinking",
    description: "Approaching problems with user needs and measurable outcomes in mind, iterating through feedback, data, and real-world usage.",
  },
];

export const principles = [
  {
    title: "Clarity",
    description: "Information should be easy to understand and act upon.",
  },
  {
    title: "Performance",
    description: "Fast load times and smooth interactions are non-negotiable.",
  },
  {
    title: "Accessibility",
    description: "Products should work for everyone, regardless of ability or device.",
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
  title: "Lead Software Engineer",
  location: "Rome, Italy",
  email: "nicole.bush000@gmail.com",
  phone: "810-986-9923",
  linkedIn: "https://linkedin.com/in/nbush89",
  summary:
    "Frontend-focused software engineer with expertise in React, TypeScript, and building scalable applications. Passionate about creating thoughtful interfaces that solve real problems, with a strong emphasis on code quality, testing, and user experience.",
  experience: [
    {
      company: "Booz Allen Hamilton",
      role: "Senior Software Engineer",
      start: "Aug 2022",
      end: "Present",
      location: "Remote",
      highlights: [
        "Led development of a production React + TypeScript application supporting complex, rule-driven workflows for a large enterprise client.",
        "Designed and implemented backend API endpoints backed by PostgreSQL, enabling flexible business logic and data-driven decision flows.",
        "Built a scalable business rules engine using state machines and React Context to manage complex application states.",
        "Created a reusable Material UI–based design system, improving UI consistency and development speed across features.",
        "Improved application quality by expanding unit and integration test coverage from ~50% to ~75% using Jest and React Testing Library.",
        "Introduced modern tooling and libraries (react-hook-form, zod, formatters, shared component libraries) to improve developer experience and form reliability.",
        "Collaborated closely with designers, product owners, and QA in an Agile/Scrum environment, contributing to sprint planning and technical decision-making.",
      ],
      tech: [
        "React",
        "TypeScript",
        "PostgreSQL",
        "TypeORM",
        "Material UI",
        "Jest",
        "React Testing Library",
        "Zod",
        "react-hook-form",
      ],
    },
    {
      company: "Autobooks",
      role: "Software Engineer",
      start: "Aug 2020",
      end: "Jun 2022",
      location: "Detroit, MI",
      highlights: [
        "Developed and maintained a large-scale enterprise React + TypeScript application powering digital payment and invoicing workflows.",
        "Built modular, reusable UI components and a shared Material UI theme, improving consistency across multiple product surfaces.",
        "Designed and maintained GraphQL schemas with strong TypeScript typing to ensure safe, predictable data access.",
        "Refactored over 120 legacy class components into modern functional components with hooks, reducing complexity and improving maintainability.",
        "Expanded end-to-end test coverage from ~20 tests to 80+ automated tests using Selenium Protractor.",
        "Collaborated with cross-functional teams to ship features used by financial institutions and small businesses nationwide.",
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
        "Built custom WordPress content blocks using PHP, Laravel patterns, and Advanced Custom Fields (ACF).",
        "Translated Figma wireframes into responsive, accessible frontend components.",
        "Worked closely with editorial and product teams to support high-traffic content workflows.",
        "Performed manual QA and cross-browser testing to ensure visual and functional consistency.",
      ],
      tech: ["WordPress", "PHP", "Laravel", "Figma", "ACF"],
    },
  ],
  education: [
    {
      school: "Grand Circus",
      program: "Front End Coding Bootcamp",
      start: "Jan 2020",
      end: "Mar 2020",
    },
    {
      school: "Eastern Michigan University",
      program: "B.S. Psychology and Biology",
      end: "Apr 2016",
    },
  ],
  skills: [
    "React",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "APIs",
    "TypeORM",
    "PostgreSQL",
    "React Testing Library",
    "Material UI",
    "Agile/Scrum",
    "Technical Documentation",
    "Jira/Confluence",
    "Git",
    "Jest",
    "Azure DevOps",
    "Docker",
    "Zod",
    "Figma",
    "CSS",
    "HTML",
    "Elasticsearch",
  ],
};

