/**
 * TypeScript interface representing a single Project in the portfolio.
 * Modify or extend these properties if you wish to add extra metadata (e.g. date, stars, role).
 */
export interface Project {
  /** Unique identifier for key mapping */
  id: string;

  /** Name or title of the project */
  title: string;

  /** Concise description of what the project does and key technical achievements */
  description: string;

  /** Array of technology tags used (e.g., ["React", "TypeScript", "Node.js", "PostgreSQL"]) */
  techStack: string[];

  /** GitHub repository URL */
  githubUrl: string;

  /** Optional live demo / deployed web URL */
  liveUrl?: string;

  /** Optional thumbnail screenshot image URL or path */
  imageUrl?: string;

  /** Optional flag to highlight this project in featured sections or filters */
  featured?: boolean;

  /** Optional category or command alias (e.g. "cli", "fullstack", "frontend", "system") */
  category?: 'fullstack' | 'frontend' | 'backend' | 'cli' | 'open-source';
}
