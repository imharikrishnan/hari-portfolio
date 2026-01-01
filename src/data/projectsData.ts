import { Project, Skills } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Etihad Airways Booking Portal",
    description: "Production customer-facing booking application handling flight search, seat selection, payment processing, and booking management. Serves thousands of daily users.",
    techStack: ["Angular 17+", "TypeScript", "Signals", "RxJS", "PrimeNG", "SCSS"],
    features: [
      "Reactive state management with Angular Signals",
      "Complex payment integration flows (PCI compliant)",
      "Domain-driven design for aviation industry"
    ],
    liveUrl: null,
    githubUrl: null,
    category: "Enterprise Application"
  },
  {
    id: 2,
    title: "AIOps Monitoring Platform",
    description: "Real-time incident analysis and infrastructure monitoring platform with advanced data visualization capabilities and topology mapping.",
    techStack: ["Angular 15", "D3.js", "vis.js", "NgRx", "Node.js", "MongoDB"],
    features: [
      "Time-series graphs with D3.js",
      "Network topology visualization with vis.js",
      "NgRx Facade pattern for state management",
      "Custom Grafana dashboard integration"
    ],
    liveUrl: null,
    githubUrl: null,
    category: "Enterprise Application"
  },
  {
    id: 3,
    title: "Medical Analytics Dashboard",
    description: "Data-driven dashboard providing medical representatives with interactive performance visualizations and KPI tracking.",
    techStack: ["Angular 12", "TypeScript", "D3.js", "RxJS", "Angular Material"],
    features: [
      "Interactive D3.js charts for KPIs",
      "Historical trend analysis",
      "Reusable component library",
      "Responsive design patterns"
    ],
    liveUrl: null,
    githubUrl: null,
    category: "Analytics Platform"
  },
  {
    id: 4,
    title: "Enterprise Accessibility Overhaul",
    description: "Comprehensive accessibility enhancement project bringing legacy enterprise application up to WCAG standards.",
    techStack: ["Angular 8", "JavaScript", "SCSS", "Bootstrap"],
    features: [
      "WCAG 2.1 AA compliance",
      "ARIA roles and landmarks",
      "Keyboard navigation support",
      "Screen reader optimization"
    ],
    liveUrl: null,
    githubUrl: null,
    category: "Accessibility"
  }
];

export const skills: Skills = {
  frontend: [
    { name: "Angular", level: "Expert", years: "6+" },
    { name: "React", level: "Advanced", years: "2+" },
    { name: "TypeScript", level: "Expert", years: "6+" },
    { name: "JavaScript", level: "Expert", years: "6+" },
    { name: "RxJS", level: "Expert", years: "6+" },
    { name: "Angular Signals", level: "Advanced", years: "1+" },
    { name: "HTML5/CSS3", level: "Expert", years: "6+" },
    { name: "SCSS/Sass", level: "Advanced", years: "6+" },
    { name: "Tailwind CSS", level: "Advanced", years: "2+" }
  ],
  libraries: [
    { name: "D3.js", level: "Advanced" },
    { name: "vis.js", level: "Advanced" },
    { name: "PrimeNG", level: "Advanced" },
    { name: "Angular Material", level: "Advanced" },
    { name: "Bootstrap", level: "Advanced" }
  ],
  stateManagement: [
    { name: "NgRx", level: "Advanced" },
    { name: "RxJS Patterns", level: "Expert" },
    { name: "Angular Signals", level: "Advanced" }
  ],
  backend: [
    { name: "Node.js", level: "Intermediate" },
    { name: "Express", level: "Intermediate" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "REST APIs", level: "Advanced" }
  ],
  tools: [
    { name: "Git/GitHub/GitLab", level: "Advanced" },
    { name: "VS Code", level: "Expert" },
    { name: "Chrome DevTools", level: "Advanced" },
    { name: "Redux DevTools", level: "Advanced" },
    { name: "Grafana", level: "Intermediate" }
  ],
  practices: [
    "Agile/Scrum",
    "CI/CD",
    "Code Reviews",
    "Performance Optimization",
    "Accessibility (WCAG)",
    "Production Support"
  ]
};