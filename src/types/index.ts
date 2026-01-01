import { JSX } from "react/jsx-dev-runtime";

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  category: string;
}

export interface Skill {
  name: string;
  level?: 'Expert' | 'Advanced' | 'Intermediate' | 'Beginner';
  years?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface ContactInfo {
  icon: JSX.Element;
  label: string;
  value: string;
  link: string;
}

export interface NavItem {
  name: string;
  to: string;
}

export interface Skills {
  frontend: Skill[];
  libraries: Skill[];
  stateManagement: Skill[];
  backend: Skill[];
  tools: Skill[];
  practices: string[];
}