import type { LucideIcon } from 'lucide-react';
import { BrainCircuit, Briefcase, Code2, Megaphone, PenTool } from 'lucide-react';

export type CourseLogistics = {
  /** e.g. "12 weeks". Leave null until confirmed — shown as "Shared on enquiry". */
  duration: string | null;
  /** e.g. "₹ 24,999". Leave null until confirmed. */
  fees: string | null;
  /** e.g. "K76 Learn certificate of completion". Leave null until confirmed. */
  certification: string | null;
  /** e.g. "Online / Classroom / Hybrid". Leave null until confirmed. */
  mode: string | null;
};

export type Course = {
  slug: string;
  number: string;
  title: string;
  icon: LucideIcon;
  /** Tailwind gradient classes for the course accent. */
  accent: string;
  short: string;
  overview: string;
  topics: string[];
  skills: string[];
  projects: string[];
  whoCanJoin: string[];
  logistics: CourseLogistics;
};

const tbd: CourseLogistics = { duration: null, fees: null, certification: null, mode: null };

export const courses: Course[] = [
  {
    slug: 'digital-marketing',
    number: '01',
    title: 'Digital Marketing',
    icon: Megaphone,
    accent: 'from-sky-400 to-blue-600',
    short: 'Learn how brands grow online — from organic social and SEO to paid campaigns, content and data-driven performance marketing.',
    overview:
      'This programme takes you through the full digital marketing stack used by modern brands. You will plan campaigns, run ads, optimise for search, create content that converts and read the numbers that prove what works. The focus is on doing — every module ends with a practical task on real platforms.',
    topics: [
      'Social Media Marketing',
      'Search Engine Optimization (SEO)',
      'Google Ads',
      'Meta Ads',
      'Content Marketing',
      'Performance Marketing',
      'Analytics and Reporting',
    ],
    skills: [
      'Campaign planning and strategy',
      'Keyword research and on-page SEO',
      'Ad account setup, targeting and budgeting',
      'Copywriting and content calendars',
      'Funnel thinking and conversion tracking',
      'Dashboards and performance reports',
    ],
    projects: [
      'Build and execute a social media content plan for a brand',
      'Run an SEO audit and optimisation plan for a website',
      'Set up a Google Ads and Meta Ads campaign structure',
      'Create a performance report with insights and next steps',
    ],
    whoCanJoin: [
      'College students from any stream',
      'Graduates looking for a marketing career',
      'Entrepreneurs and small business owners',
      'Freelancers who want to offer marketing services',
    ],
    logistics: tbd,
  },
  {
    slug: 'ui-ux-design',
    number: '02',
    title: 'UI/UX Design',
    icon: PenTool,
    accent: 'from-fuchsia-400 to-violet-600',
    short: 'Design digital products people love to use. Research users, sketch ideas, prototype in Figma and ship polished interfaces.',
    overview:
      'Learn the end-to-end product design process used by product teams. You will start with user research and problem framing, move through wireframes and interactive prototypes, and finish with a consistent design system — building a portfolio of case studies along the way.',
    topics: ['UI Design Fundamentals', 'UX Research', 'Wireframing', 'Prototyping', 'Figma', 'Design Systems', 'Real-World Design Projects'],
    skills: [
      'Visual hierarchy, typography and colour',
      'User interviews and usability testing',
      'Information architecture and user flows',
      'Interactive prototyping in Figma',
      'Components, variants and design tokens',
      'Writing design case studies',
    ],
    projects: [
      'Redesign an existing mobile app based on user research',
      'Design and prototype a web product from scratch',
      'Create a reusable design system in Figma',
      'Publish portfolio-ready case studies',
    ],
    whoCanJoin: [
      'Students interested in design and technology',
      'Graphic designers moving into product design',
      'Developers who want stronger design skills',
      'Anyone with a creative eye — no prior experience needed',
    ],
    logistics: tbd,
  },
  {
    slug: 'full-stack-development',
    number: '03',
    title: 'Full Stack Development',
    icon: Code2,
    accent: 'from-cyan-400 to-blue-600',
    short: 'Go from your first line of code to complete web applications — frontend, backend, databases and APIs.',
    overview:
      'A hands-on development track covering the modern JavaScript stack. You will build responsive interfaces with React, write server-side logic with Node.js, design databases and connect everything through APIs — finishing with real web applications you can deploy and show.',
    topics: [
      'HTML, CSS and JavaScript',
      'React.js',
      'Frontend Development',
      'Backend Development',
      'Node.js',
      'Database Management',
      'API Integration',
      'Real-World Web Applications',
    ],
    skills: [
      'Semantic HTML and responsive CSS',
      'Modern JavaScript and component thinking',
      'State management and routing in React',
      'REST APIs with Node.js',
      'Data modelling and database queries',
      'Git, deployment and debugging',
    ],
    projects: [
      'Responsive personal portfolio website',
      'Interactive React application',
      'REST API with authentication and a database',
      'Full stack web application deployed online',
    ],
    whoCanJoin: [
      'Engineering, computer science and IT students',
      'Graduates from any stream who want to code',
      'Career switchers moving into tech',
      'Beginners — we start from the fundamentals',
    ],
    logistics: tbd,
  },
  {
    slug: 'ai-powered-learning',
    number: '04',
    title: 'AI-Powered Learning',
    icon: BrainCircuit,
    accent: 'from-violet-400 to-indigo-600',
    short: 'Understand artificial intelligence and use today’s generative AI tools to learn, create and work faster.',
    overview:
      'AI is changing how every profession works. This programme explains how AI works in plain language and then gets practical — using generative AI tools for research, writing, design, marketing and coding, crafting effective prompts and automating everyday workflows responsibly.',
    topics: [
      'Introduction to Artificial Intelligence',
      'Generative AI Tools',
      'AI for Productivity',
      'AI-Powered Marketing',
      'AI-Assisted Coding',
      'Prompt Engineering',
      'AI Automation and Workflows',
    ],
    skills: [
      'Core AI and machine learning concepts',
      'Choosing the right AI tool for a task',
      'Structured prompting techniques',
      'AI-assisted content, design and code',
      'No-code automation workflows',
      'Responsible and ethical AI use',
    ],
    projects: [
      'Build a personal AI productivity toolkit',
      'Create an AI-assisted marketing campaign',
      'Use AI pair-programming to build a small app',
      'Design an automated workflow for a real task',
    ],
    whoCanJoin: [
      'Students from every discipline',
      'Working professionals who want to work smarter',
      'Marketers, designers and developers',
      'Anyone curious about AI — no coding needed to start',
    ],
    logistics: tbd,
  },
  {
    slug: 'career-development',
    number: '05',
    title: 'Career Development',
    icon: Briefcase,
    accent: 'from-amber-300 to-orange-500',
    short: 'Turn your skills into opportunities with a strong resume, portfolio, personal brand and interview confidence.',
    overview:
      'Skills open doors only when you can present them well. This programme helps you build a professional resume and portfolio, communicate with confidence, optimise your LinkedIn presence, prepare for interviews and understand freelancing — with one-to-one guidance on your next career step.',
    topics: [
      'Resume Building',
      'Portfolio Development',
      'Communication Skills',
      'Interview Preparation',
      'LinkedIn Profile Optimization',
      'Freelancing Fundamentals',
      'Career Guidance',
    ],
    skills: [
      'Writing achievement-focused resumes',
      'Presenting work through a portfolio',
      'Professional communication and presentation',
      'Answering technical and HR interview questions',
      'Personal branding and networking',
      'Finding and pricing freelance work',
    ],
    projects: [
      'Create an ATS-friendly resume and cover letter',
      'Build and publish your professional portfolio',
      'Optimise your LinkedIn profile end to end',
      'Complete mock interviews with feedback',
    ],
    whoCanJoin: [
      'Final-year students preparing for placements',
      'Fresh graduates entering the job market',
      'Learners from any K76 Learn programme',
      'Anyone planning a career switch or freelancing',
    ],
    logistics: tbd,
  },
];

export function getCourse(slug: string | undefined) {
  return courses.find((c) => c.slug === slug);
}
