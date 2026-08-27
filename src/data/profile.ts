import { Profile, SkillCategory, ExperienceItem } from '../types/profile';

/**
 * ============================================================================
 * EDIT YOUR PERSONAL PROFILE & DATA HERE
 * ============================================================================
 * Update your name, role titles, bio, skills, experience timeline, and social links.
 */

export const profileData: Profile = {
  // EDIT YOUR NAME HERE
  name: "Volonte Rwicha",

  // GITHUB AVATAR IMAGE URL
  avatarUrl: "https://github.com/Will24300.png",

  // SHELL PROMPT HANDLE
  handle: "volonte@portfolio:~$ ",

  // TYPED HEADLINE TITLES FOR HERO TYPEWRITER
  roleTitles: [
    "Full-Stack Software Engineer",
    "Systems & Cloud Specialist",
    "Open Source Contributor",
    "CLI & Dev Tool Architect",
  ],

  // ONE LINE PITCH
  pitch: "Crafting scalable distributed systems, responsive web interfaces, and high-performance developer tools.",

  // ABOUT BIO (presented like cat about.md)
  aboutMarkdown: [
    "# About Me",
    "Hello! I'm Volonte Rwicha, a software engineer passionate about developer tooling, systems engineering, and modern web applications.",
    "I specialize in building robust full-stack applications with TypeScript, React, Node.js, and cloud-native infrastructure.",
    "When I'm not writing code, you can find me contributing to open-source projects, tuning dotfiles, tinkering with custom keyboards, or exploring system architectures.",
  ],

  // CONTACT DETAILS
  email: "volonterwicha123@gmail.com",
  location: "Remote / Global",
  status: "AVAILABLE FOR NEW OPPORTUNITIES",

  // SOCIAL LINKS
  socials: [
    {
      label: "GitHub",
      url: "https://github.com/Will24300",
      icon: "Github",
      command: "ssh -T git@github.com:Will24300",
    },
    {
      label: "LinkedIn",
      url: "https://linkedin.com",
      icon: "Linkedin",
      command: "open https://linkedin.com/in/volonte-rwicha",
    },
    {
      label: "X (Twitter)",
      url: "https://x.com",
      icon: "Twitter",
      command: "curl -s https://api.x.com/user",
    },
    {
      label: "Email",
      url: "mailto:volonterwicha123@gmail.com",
      icon: "Mail",
      command: "mailx -s 'Hello' volonterwicha123@gmail.com",
    },
  ],
};

/**
 * SKILLS & TECH STACK GROUPED BY CATEGORY
 */
export const skillsData: SkillCategory[] = [
  {
    categoryName: "Languages",
    command: "ls -l /usr/bin/languages",
    icon: "Code2",
    skills: [
      { name: "TypeScript", level: "expert", version: "v5.7" },
      { name: "JavaScript (ESNext)", level: "expert", version: "v2024" },
      { name: "PHP", level: "proficient", version: "v8.3" },
      { name: "HTML5 / CSS3", level: "expert", version: "v5.0" },
      { name: "SQL", level: "proficient", version: "ANSI" },
    ],
  },
  {
    categoryName: "Frontend & Mobile",
    command: "cat package.json | grep frontend",
    icon: "Layers",
    skills: [
      { name: "React (TS)", level: "expert", version: "v19.0" },
      { name: "Tailwind CSS", level: "expert", version: "v4.0" },
      { name: "Flutter", level: "proficient", version: "v3.27" },
      { name: "HTML5 & CSS3", level: "expert" },
      { name: "Vite", level: "expert", version: "v6.0" },
    ],
  },
  {
    categoryName: "Backend & Frameworks",
    command: "node --version && nest --version",
    icon: "Terminal",
    skills: [
      { name: "Node.js", level: "expert", version: "v22.0" },
      { name: "Express.js", level: "expert", version: "v4.21" },
      { name: "NestJS", level: "proficient", version: "v10.0" },
      { name: "PHP", level: "proficient" },
    ],
  },
  {
    categoryName: "Databases & Tools",
    command: "netstat -tuln | grep DB",
    icon: "Database",
    skills: [
      { name: "SQL (MySQL / PostgreSQL)", level: "proficient" },
      { name: "Git & GitHub", level: "expert" },
      { name: "Linux / Bash Shell", level: "proficient" },
      { name: "REST APIs", level: "expert" },
    ],
  },
];

/**
 * WORK EXPERIENCE & TIMELINE
 */
export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    year: "2023 - PRESENT",
    role: "Senior Full-Stack Engineer",
    company: "TechScale Solutions",
    location: "Remote",
    description: "Leading frontend architecture and micro-frontend integrations for high-traffic enterprise developer platform.",
    highlights: [
      "Engineered real-time dashboard monitoring system reducing API load by 40%",
      "Mentored junior team members and spearheaded adoption of TypeScript strict mode",
      "Built internal CLI tooling automating deployment validation checks",
    ],
    techStack: ["React", "TypeScript", "Node.js", "Docker", "Tailwind CSS"],
  },
  {
    id: "exp-2",
    year: "2021 - 2023",
    role: "Full-Stack Developer",
    company: "CloudPulse Systems",
    location: "San Francisco, CA",
    description: "Designed RESTful microservices and reactive user interfaces for infrastructure monitoring suite.",
    highlights: [
      "Implemented WebSockets streaming logs interface handling 10k events/second",
      "Refactored legacy monolith into modular React components with 95% test coverage",
    ],
    techStack: ["TypeScript", "Next.js", "Express", "PostgreSQL", "Redis"],
  },
  {
    id: "exp-3",
    year: "2019 - 2021",
    role: "Frontend Engineer",
    company: "DevCraft Studio",
    location: "Austin, TX",
    description: "Built responsive client applications and open-source UI component libraries.",
    highlights: [
      "Developed custom terminal-styled design system adopted across 5 products",
      "Optimized Web Vitals score from 65 to 98 across core marketing pages",
    ],
    techStack: ["React", "JavaScript", "CSS3", "Webpack", "Jest"],
  },
];
