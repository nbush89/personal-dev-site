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
    description: "Building responsive, accessible interfaces with modern frameworks and thoughtful design systems.",
  },
  {
    title: "Data-Driven Interfaces",
    description: "Transforming complex data into clear, interactive visualizations that help users make decisions.",
  },
  {
    title: "Product Thinking",
    description: "Focusing on user needs, measurable outcomes, and iterative improvement through data and feedback.",
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

