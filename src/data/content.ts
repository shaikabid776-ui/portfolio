export type Profile = {
  name: string;
  role: string;
  location: string;
  tagline: string;
  email: string;
  github: string;
  linkedin: string;
  resume: string;
};

export type Stat = {
  value: number;
  suffix?: string;
  label: string;
};

export type SectionHeadingContent = {
  lead: string;
  emphasis: string;
};

export type AboutContent = {
  index: string;
  label: string;
  heading: SectionHeadingContent;
  paragraph: string;
  photoAlt: string;
};

export type JourneyStep = {
  period: string;
  title: string;
  description: string;
  isCurrent?: boolean;
};

export type JourneyContent = {
  index: string;
  label: string;
  heading: SectionHeadingContent;
  steps: JourneyStep[];
};

export type WorkArea = {
  title: string;
  description: string;
  skills: string[];
};

export type HowIWorkContent = {
  index: string;
  label: string;
  heading: SectionHeadingContent;
  intro: string;
  areas: WorkArea[];
};

export type WorkItem = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  company: boolean;
  github?: string;
  live?: string;
  image?: string;
};

export type NavigationLink = {
  label: string;
  sectionId: string;
};

export type Navigation = {
  links: NavigationLink[];
  callToAction: NavigationLink;
  menuLabel: string;
};

export type HeroContent = {
  kicker: string;
  firstName: string;
  lastName: string;
  primaryAction: NavigationLink;
  secondaryAction: NavigationLink;
  scrollHint: string;
  basedIn: string;
};

export const profile: Profile = {
  name: "Abid Shaik",
  role: "Frontend Engineer → Full Stack",
  location: "Bengaluru, India",
  tagline:
    "I build web apps that solve real business problems — from clean interfaces to the APIs behind them.",
  email: "shaikabid776@gmail.com",
  github: "https://github.com/shaikabid776-ui",
  linkedin: "https://linkedin.com/in/abid-shaik1",
  resume: "/Abid_Shaik_Resume.pdf",
};

export const navigation: Navigation = {
  links: [
    { label: "About", sectionId: "about" },
    { label: "Journey", sectionId: "journey" },
    { label: "Work", sectionId: "work" },
    { label: "Contact", sectionId: "contact" },
  ],
  callToAction: { label: "Let's talk", sectionId: "contact" },
  menuLabel: "Menu",
};

export const hero: HeroContent = {
  kicker: "Frontend · Backend · AI",
  firstName: "Abid",
  lastName: "Shaik",
  primaryAction: { label: "View my work", sectionId: "work" },
  secondaryAction: { label: "Contact me", sectionId: "contact" },
  scrollHint: "Scroll to discover",
  basedIn: "Based in Bengaluru",
};

export const stats: Stat[] = [
  { value: 5, suffix: " months", label: "Intern to full-time" },
  { value: 4, label: "AI APIs integrated in production" },
  { value: 10, suffix: "+", label: "Projects shipped" },
];

export const about: AboutContent = {
  index: "01",
  label: "About",
  heading: {
    lead: "Good software starts with",
    emphasis: "understanding people.",
  },
  paragraph:
    "I started in Dharmavaram with a B.Sc in Maths, Physics and Computer Science, trained in Python full-stack, and joined Sirpi in Bengaluru as a frontend intern. Five months later I was full-time. Today I lead the frontend on a production-planning platform, build FastAPI backends on a life-science platform, and work directly with clients to turn their needs into software.",
  photoAlt: "Portrait of Abid Shaik",
};

export const journey: JourneyContent = {
  index: "02",
  label: "Journey",
  heading: {
    lead: "Started with code.",
    emphasis: "Kept asking why.",
  },
  steps: [
    {
      period: "2025",
      title: "Training",
      description: "Python full-stack training: Flask, FastAPI, MySQL, REST APIs.",
    },
    {
      period: "Dec 2025",
      title: "Frontend intern at Sirpi",
      description: "React, Angular and TypeScript on enterprise apps.",
    },
    {
      period: "May 2026",
      title: "Full-time Frontend Engineer",
      description:
        "Shipped AI-powered EdTech, social media automation and data portal apps.",
    },
    {
      period: "Now",
      isCurrent: true,
      title: "Frontend lead + backend",
      description:
        "Leading a production-planning frontend, building FastAPI APIs, coordinating with clients.",
    },
    {
      period: "Next",
      title: "Full stack + AI",
      description: "Building AI-powered products end to end.",
    },
  ],
};

export const howIWork: HowIWorkContent = {
  index: "03",
  label: "How I work",
  heading: {
    lead: "How I work.",
    emphasis: "From idea to product.",
  },
  intro: "Three areas I bring to every project.",
  areas: [
    {
      title: "Frontend",
      description:
        "I build fast, accessible interfaces that turn complex data into screens people can use.",
      skills: ["React", "TypeScript", "Angular", "Tailwind CSS", "TanStack Query"],
    },
    {
      title: "Backend",
      description:
        "I design REST APIs and database models in FastAPI and PostgreSQL, with migrations and tests.",
      skills: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic"],
    },
    {
      title: "Working with clients",
      description:
        "I turn client conversations into clear requirements, developer tickets and demos.",
      skills: [
        "Requirements",
        "Developer tickets",
        "Demos",
        "User-flow documents",
      ],
    },
  ],
};

export const work: WorkItem[] = [
  {
    title: "Production Planning Platform",
    category: "Frontend lead",
    description:
      "Predicts the delivery week for each sales order by tracing parts, stock and purchase orders, with the reason for any delay.",
    tags: ["React", "TypeScript", "TanStack Table", "ECharts"],
    company: true,
  },
  {
    title: "Life-Science Prediction APIs",
    category: "Backend",
    description:
      "Heat-map and export APIs combining results from 4 hosted AI models, with migrations and tests.",
    tags: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic"],
    company: true,
  },
  {
    title: "AI-Powered EdTech Platform",
    category: "Frontend",
    description:
      "Multi-role learning platform with AI lessons, quizzes and voice in 10 Indian languages.",
    tags: ["React", "Zustand", "ElevenLabs", "Sarvam AI"],
    company: true,
  },
  {
    title: "Social Media Automation Tool",
    category: "Frontend",
    description:
      "Schedules and auto-publishes Instagram and Facebook posts with AI image generation.",
    tags: ["React", "Supabase", "Meta Graph API", "FAL.ai"],
    company: true,
  },
];
