import type { IconType } from 'react-icons';
import {
  FaPython, FaJs, FaReact, FaPhp, FaHtml5, FaCss3Alt, FaLaravel, FaNodeJs,
  FaBootstrap, FaWordpress, FaShopify, FaDocker, FaGitAlt, FaGithub,
} from 'react-icons/fa';
import {
  SiNextdotjs, SiExpress, SiTailwindcss, SiDrupal, SiMagento, SiPostgresql,
  SiMongodb, SiRedis, SiPowers, SiNginx, SiUipath, SiClaude,
} from 'react-icons/si';
import { DiMysql } from 'react-icons/di';
import { HiCog } from 'react-icons/hi';
import { MdSmartToy } from 'react-icons/md';

export const profile = {
  firstName: 'Akila',
  middleName: 'Anuranga',
  lastName: 'Millagahawatta',
  roles: ['Agentic AI & Automation Developer', 'AI Engineer', 'Python Developer', 'Automation Expert', 'Software Engineer'],
  current: { role: 'Agentic AI & Automation Developer', company: '3Rive Technologies' },
  location: 'Colombo, Sri Lanka',
  timezone: 'Asia/Colombo',
  email: 'anurangaakila@gmail.com',
  phone: '+94 770 534 618',
  phoneLink: 'tel:+94770534618',
  linkedin: 'https://linkedin.com/in/akila-anuranga',
  github: 'https://github.com/AkilaAnuranga',
  whatsapp: 'https://wa.me/94770534618',
  careerStart: 2016,
};

export type Experience = {
  company: string;
  position: string;
  period: string;
  current: boolean;
  description: string;
  tags: string[];
};

export const experiences: Experience[] = [
  {
    company: '3Rive Technologies',
    position: 'Agentic AI & Automation Developer',
    period: 'Jul 2025 — Present',
    current: true,
    description:
      'Design, build, and maintain production-ready agentic AI and automation solutions that automate complex end-to-end business workflows. Deliver scalable, enterprise-grade automation using Python, UiPath and Power Automate, with AI agents handling intelligent document processing and decision-making.',
    tags: ['Agentic AI', 'Python', 'UiPath', 'Power Automate', 'Power Apps'],
  },
  {
    company: 'Aspirations I-Lab',
    position: 'Senior Software Engineer',
    period: 'May 2024 — Jul 2025',
    current: false,
    description:
      'Led development and deployment of AI-driven bots across WhatsApp, Telegram, and Messenger. Architected multi-platform automation pipelines and NLP-powered conversational workflows for enterprise clients.',
    tags: ['Python', 'Node.js', 'WhatsApp API', 'NLP'],
  },
  {
    company: 'DartXTool',
    position: 'Software Engineer',
    period: 'Oct 2016 — Feb 2024',
    current: false,
    description:
      'Led full-stack development of DartXTool — a flagship SEO monitoring and optimization platform leveraging Google Search Console data. Built robust data pipelines, real-time dashboards, and automated reporting systems.',
    tags: ['React', 'PHP', 'Laravel', 'Google API'],
  },
];

export type Skill = { name: string; icon: IconType };
export type StackLayer = { id: string; level: string; name: string; caption: string; skills: Skill[] };

// Ordered top of the stack → bottom
export const stack: StackLayer[] = [
  {
    id: 'intelligence',
    level: 'L5',
    name: 'Agentic AI & Automation',
    caption: 'AI agents, Python and automation that do the work',
    skills: [
      { name: 'Agentic AI', icon: MdSmartToy },
      { name: 'Claude Code', icon: SiClaude },
      { name: 'Python', icon: FaPython },
      { name: 'UiPath', icon: SiUipath },
      { name: 'Power Automate', icon: HiCog },
      { name: 'Power Apps', icon: SiPowers },
    ],
  },
  {
    id: 'application',
    level: 'L4',
    name: 'Application',
    caption: 'Full-stack web, front to back',
    skills: [
      { name: 'React', icon: FaReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express', icon: SiExpress },
      { name: 'Laravel', icon: FaLaravel },
      { name: 'PHP', icon: FaPhp },
      { name: 'JavaScript', icon: FaJs },
      { name: 'HTML5', icon: FaHtml5 },
      { name: 'CSS3', icon: FaCss3Alt },
      { name: 'Tailwind', icon: SiTailwindcss },
      { name: 'Bootstrap', icon: FaBootstrap },
    ],
  },
  {
    id: 'commerce',
    level: 'L3',
    name: 'Content & Commerce',
    caption: 'CMS and storefront platforms',
    skills: [
      { name: 'WordPress', icon: FaWordpress },
      { name: 'Drupal', icon: SiDrupal },
      { name: 'Magento 2', icon: SiMagento },
      { name: 'Shopify', icon: FaShopify },
    ],
  },
  {
    id: 'data',
    level: 'L2',
    name: 'Data',
    caption: 'Relational, document and cache stores',
    skills: [
      { name: 'MySQL', icon: DiMysql },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Redis', icon: SiRedis },
    ],
  },
  {
    id: 'infrastructure',
    level: 'L1',
    name: 'Infrastructure',
    caption: 'Ship it, serve it, version it',
    skills: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'Docker', icon: FaDocker },
      { name: 'Nginx', icon: SiNginx },
      { name: 'GitHub Actions', icon: FaGithub },
    ],
  },
];

export const allSkills = stack.flatMap((layer) => layer.skills);

export const education = [
  {
    degree: 'Bachelor of Engineering in Software Engineering',
    institution: 'IIC University of Technology',
    location: 'Phnom Penh, Cambodia',
    period: '2016 — 2020',
    metric: '3.52',
    metricLabel: 'GPA',
    description:
      'Comprehensive software engineering program covering modern development practices, algorithms, data structures, and software architecture.',
  },
  {
    degree: 'Professional Diploma in Software Engineering',
    institution: 'JAVA Institute for Advanced Technology',
    location: 'Sri Lanka',
    period: '2014 — 2016',
    metric: '171',
    metricLabel: 'Credits · SCQF L7',
    description:
      'Advanced diploma program focusing on Java development, software design patterns, and enterprise application development.',
  },
];

export const certifications = [
  {
    name: 'Claude Code Architect',
    level: 'Foundation',
    url: 'https://www.credly.com/badges/13f9a30b-f491-4763-bd9e-d890684706b9',
    issuer: 'Anthropic',
    description: 'Certified in designing and building agentic AI systems and workflows with Claude Code.',
    icon: SiClaude,
  },
];

export const learning = [
  { topic: 'rpa-process-automation', detail: 'UiPath, Power Automate' },
  { topic: 'agentic-ai', detail: 'LLM workflows & AI agents' },
  { topic: 'cloud', detail: 'Azure, AWS, GCP' },
  { topic: 'modern-web', detail: 'React, Next.js, Node.js' },
];

export const navItems = [
  { id: 'work', label: 'Work' },
  { id: 'stack', label: 'Stack' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];
