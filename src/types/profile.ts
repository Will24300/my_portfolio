export interface SkillCategory {
  categoryName: string;
  command: string; // e.g. "npm list --depth=0" or "ls /bin"
  icon: string;
  skills: Array<{
    name: string;
    level?: 'expert' | 'proficient' | 'experienced';
    version?: string;
    description?: string;
  }>;
}

export interface ExperienceItem {
  id: string;
  year: string;       // e.g. "2023 - PRESENT"
  role: string;       // e.g. "Senior Full Stack Engineer"
  company: string;    // e.g. "Acme Corp"
  location?: string;
  description: string;
  highlights: string[];
  techStack: string[];
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
  command: string;   // e.g. "ssh git@github.com" or "curl linkedin.com"
}

export interface Profile {
  name: string;
  avatarUrl?: string;   // GitHub avatar URL (e.g. https://github.com/Will24300.png)
  handle: string;       // e.g. "visitor@alex-dev:~$ "
  roleTitles: string[]; // Typed out titles for Hero typewriter
  pitch: string;
  aboutMarkdown: string[];
  email: string;
  location: string;
  status: string;       // e.g. "AVAILABLE FOR CONTRACT & FULL-TIME ROLES"
  socials: SocialLink[];
}
