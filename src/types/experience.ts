export type ExperienceType = 'internship' | 'opensource' | 'education';
export type ExperienceStatus = 'ACTIVE' | 'COMPLETED';

export interface Experience {
  id: string;
  role: string;
  org: string;
  period: string; // e.g. "2025 - PRESENT"
  status: ExperienceStatus; // "ACTIVE" (ongoing) | "COMPLETED"
  type: ExperienceType;
  description: string;
  techStack: string[];
  url?: string;
}
