import type { LucideIcon } from 'lucide-react';
import {
  Bot,
  BriefcaseBusiness,
  Code,
  FileText,
  FolderKanban,
  Hammer,
  Lightbulb,
  Megaphone,
  MessagesSquare,
  Mic,
  Network,
  Palette,
  Rocket,
  Sparkles,
  Target,
  TrendingUp,
  UserRound,
  Users,
  Wrench,
} from 'lucide-react';

export type Item = { title: string; description: string; icon: LucideIcon };

export const benefits: Item[] = [
  {
    title: 'Practical Learning',
    description: 'Concepts taught through doing, not memorising — every session ends with something you can apply.',
    icon: Lightbulb,
  },
  { title: 'Industry-Relevant Skills', description: 'A curriculum shaped around the tools and workflows teams use today.', icon: Target },
  { title: 'Real-World Projects', description: 'Work on briefs that mirror actual client and product problems.', icon: FolderKanban },
  { title: 'AI-Powered Education', description: 'Learn to use AI as a co-pilot across marketing, design and code.', icon: Sparkles },
  { title: 'Portfolio Development', description: 'Graduate with work you can show — not just a certificate.', icon: Palette },
  { title: 'Career Preparation', description: 'Resume, interviews, LinkedIn and personal branding built in.', icon: BriefcaseBusiness },
  { title: 'Mentorship and Guidance', description: 'Direct guidance from trainers who help you plan your next step.', icon: Users },
  { title: 'Hands-on Training', description: 'Live exercises, workshops and feedback loops that build real confidence.', icon: Wrench },
];

export const learningSteps = [
  { step: '01', title: 'Learn', description: 'Understand concepts from professional, industry-experienced trainers.', icon: Lightbulb },
  { step: '02', title: 'Practice', description: 'Apply knowledge through hands-on exercises.', icon: Hammer },
  { step: '03', title: 'Build', description: 'Work on practical projects and develop a portfolio.', icon: FolderKanban },
  { step: '04', title: 'Grow', description: 'Prepare for internships, jobs, freelancing and career opportunities.', icon: Rocket },
];

export const aiUseCases: Item[] = [
  { title: 'AI in Marketing', description: 'Research audiences, draft campaigns, generate creatives and analyse results faster.', icon: Megaphone },
  { title: 'AI in Design', description: 'Explore ideas, generate assets and speed up wireframing and iteration.', icon: Palette },
  { title: 'AI in Coding', description: 'Pair-program with AI to write, explain, test and debug code.', icon: Code },
  { title: 'AI in Everyday Work', description: 'Automate repetitive tasks, summarise information and organise your workflow.', icon: Bot },
];

export const careerHighlights: Item[] = [
  { title: 'Resume and CV preparation', description: 'Clear, achievement-led resumes that get shortlisted.', icon: FileText },
  { title: 'Interview preparation', description: 'Mock interviews, feedback and structured answers.', icon: MessagesSquare },
  { title: 'Communication and presentation skills', description: 'Speak, write and present with confidence.', icon: Mic },
  { title: 'Personal branding', description: 'A LinkedIn and online presence that reflects your strengths.', icon: UserRound },
  { title: 'Portfolio creation', description: 'Showcase projects in a way recruiters understand.', icon: FolderKanban },
  { title: 'Professional networking', description: 'Learn how to build meaningful professional connections.', icon: Network },
  { title: 'Freelancing and entrepreneurship awareness', description: 'Understand how to find clients, price work and start small.', icon: TrendingUp },
];

export const educationLevels = [
  'Class 12 / Higher Secondary',
  'Diploma',
  'Undergraduate (pursuing)',
  'Graduate',
  'Postgraduate',
  'Working Professional',
  'Other',
];

/** Career development support described on the Career Development page. */
export const careerProgramme = {
  overview:
    'Skills open doors only when you can present them well. Career development is built into our Advanced and Premium tracks: you build a professional resume and portfolio, learn to communicate with confidence, optimise your LinkedIn presence, prepare for interviews and understand freelancing — with guidance on your next career step.',
  topics: [
    'Resume Building',
    'Portfolio Development',
    'Communication Skills',
    'Interview Preparation',
    'LinkedIn Profile Optimization',
    'Freelancing Fundamentals',
    'Career Guidance',
  ],
};
