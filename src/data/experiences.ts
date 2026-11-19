export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  logo?: string; // Add path like '/images/al-burhan.svg' when ready
}

export const LEFT_EXPERIENCES: ExperienceItem[] = [
  {
    id: 'herdeen',
    role: 'Founder',
    company: 'HerDeen',
    period: 'Aug 2025 - Present',
    logo: '/images/herdeen-logo.svg',
  },
  {
    id: 'al-burhan',
    role: 'IT Support Officer',
    company: 'Al-Burhan Media',
    period: 'Oct 2024 - now',
  },
  {
    id: 'tedxhui',
    role: 'Technical Lead',
    company: 'TedxHUI',
    period: 'Mar 2025 - Feb 2026',
  },
];

export const RIGHT_EXPERIENCES: ExperienceItem[] = [
  {
    id: 'sqaleup',
    role: 'Frontend developer',
    company: 'Sqaleup Inc',
    period: 'Sept 2025 - Dec 2025',
  },
  {
    id: 'onegrowth',
    role: 'Frontend developer',
    company: 'OneGrowth',
    period: 'Feb 2026 - April 2026',
  },
  {
    id: 'mta',
    role: 'Frontend developer',
    company: 'Muslimah Tech Alliance',
    period: 'Jan - April 2026',
  },
];