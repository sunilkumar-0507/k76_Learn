/**
 * K76 Learn fee structure.
 *
 * Prices are whole rupees. To hide a programme from the Fees page and the
 * enquiry form without deleting it, set `available: false`.
 */

export type TierId = 'basic' | 'advanced' | 'premium';

export type Tier = {
  id: TierId;
  name: string;
  label: string;
  audience: string;
  features: string[];
};

export const tiers: Tier[] = [
  {
    id: 'basic',
    name: 'Basic',
    label: 'Foundation',
    audience: 'For students building strong fundamentals.',
    features: ['Structured curriculum and guided practicals', 'Essential industry tools', 'Mini projects and assessments', 'Course completion certificate'],
  },
  {
    id: 'advanced',
    name: 'Advanced',
    label: 'Professional',
    audience: 'For students developing job-ready skills.',
    features: ['Advanced tools and workflows', 'Multiple portfolio projects', 'Trainer feedback and mentoring', 'Interview and portfolio preparation'],
  },
  {
    id: 'premium',
    name: 'Premium',
    label: 'Career-focused',
    audience: 'For students seeking in-depth practical experience.',
    features: [
      'Everything in Advanced',
      'Capstone projects and individual mentoring',
      'Portfolio reviews and career guidance',
      'Structured internship opportunities where available',
      'Internship certificate on successful completion of requirements',
    ],
  },
];

export type Program = {
  name: string;
  basic?: number;
  advanced: number;
  premium: number;
  /** Slug of a detailed course page in `courses.ts`, if one exists. */
  courseSlug?: string;
  available?: boolean;
};

export type ProgramCategory = { id: string; title: string; programs: Program[] };

export const categories: ProgramCategory[] = [
  {
    id: 'design',
    title: 'Design and creative',
    programs: [
      { name: 'Graphic Design', basic: 19999, advanced: 29999, premium: 44999 },
      { name: 'UI/UX Design', basic: 24999, advanced: 39999, premium: 59999, courseSlug: 'ui-ux-design' },
      { name: 'Video Editing', basic: 19999, advanced: 34999, premium: 49999 },
      { name: 'AI Video Production', basic: 19999, advanced: 34999, premium: 54999 },
      { name: 'Branding & Creative Design', basic: 19999, advanced: 34999, premium: 49999 },
    ],
  },
  {
    id: 'marketing',
    title: 'Digital marketing',
    programs: [
      { name: 'Digital Marketing', basic: 24999, advanced: 39999, premium: 59999, courseSlug: 'digital-marketing' },
      { name: 'SEO & Search Marketing', basic: 14999, advanced: 24999, premium: 39999 },
      { name: 'Social Media Marketing', basic: 14999, advanced: 24999, premium: 39999 },
      { name: 'Meta & Google Ads', basic: 19999, advanced: 29999, premium: 44999 },
      { name: 'AI-Powered Digital Marketing', basic: 24999, advanced: 44999, premium: 69999 },
    ],
  },
  {
    id: 'development',
    title: 'Programming and development',
    programs: [
      { name: 'Python Programming', basic: 19999, advanced: 29999, premium: 44999 },
      { name: 'Java Programming', basic: 19999, advanced: 29999, premium: 44999 },
      { name: 'Web Development', basic: 24999, advanced: 39999, premium: 59999 },
      { name: 'Full-Stack Development', basic: 34999, advanced: 54999, premium: 79999, courseSlug: 'full-stack-development' },
      { name: 'Android App Development', basic: 24999, advanced: 39999, premium: 59999 },
      { name: 'React / React Native', basic: 24999, advanced: 39999, premium: 59999 },
      { name: 'Software Testing', basic: 19999, advanced: 34999, premium: 49999 },
      { name: 'PHP & Web Applications', basic: 19999, advanced: 29999, premium: 44999 },
      { name: 'Shopify Development', basic: 14999, advanced: 24999, premium: 39999 },
      { name: 'Angular Development', basic: 24999, advanced: 39999, premium: 54999 },
    ],
  },
  {
    id: 'data',
    title: 'Data analytics and business tools',
    programs: [
      { name: 'Advanced Excel', basic: 9999, advanced: 14999, premium: 24999 },
      { name: 'Power BI', basic: 14999, advanced: 24999, premium: 39999 },
      { name: 'Tableau', basic: 14999, advanced: 24999, premium: 39999 },
      { name: 'Data Analytics', basic: 29999, advanced: 44999, premium: 69999 },
      { name: 'SQL & Database Management', basic: 12999, advanced: 19999, premium: 29999 },
      { name: 'Python for Data Analytics', basic: 24999, advanced: 39999, premium: 54999 },
    ],
  },
  {
    id: 'ai',
    title: 'AI and emerging technologies',
    programs: [
      { name: 'AI Tools & Productivity', basic: 9999, advanced: 19999, premium: 29999 },
      { name: 'Generative AI Applications', basic: 19999, advanced: 34999, premium: 54999 },
      { name: 'Prompt Engineering', basic: 9999, advanced: 14999, premium: 24999 },
      { name: 'Machine Learning', basic: 34999, advanced: 54999, premium: 79999 },
      { name: 'Cloud Computing', basic: 24999, advanced: 39999, premium: 59999 },
    ],
  },
  {
    id: 'bundles',
    title: 'Premium bundled programmes',
    programs: [
      { name: 'Graphic Design + UI/UX', advanced: 49999, premium: 74999 },
      { name: 'Digital Marketing + SEO + Ads', advanced: 49999, premium: 79999 },
      { name: 'Full-Stack Development + UI/UX', advanced: 69999, premium: 99999 },
      { name: 'Data Analytics + Power BI + Excel', advanced: 49999, premium: 74999 },
      { name: 'Video Editing + AI Video Production', advanced: 44999, premium: 69999 },
    ],
  },
];

/** What students are paying for — shown alongside the fees. */
export const valuePillars = [
  { title: 'Industry-focused curriculum', description: 'Built around the tools, workflows and standards professionals use today.' },
  { title: 'Real-world project experience', description: 'Advanced, brief-driven projects that mirror actual client and product work.' },
  { title: 'Personalized mentorship', description: 'Professional trainers who review your work and guide your progress.' },
  { title: 'Portfolio development', description: 'Leave with a body of work that demonstrates what you can do.' },
  { title: 'Professional assessment', description: 'Structured evaluations that measure skills, not memory.' },
  { title: 'Structured internships', description: 'Internship opportunities with defined outcomes for eligible Premium learners.' },
];

export const feeNote = 'Fees are per learner for the full programme. Batch schedules, payment options and applicable taxes are confirmed at enrolment.';

export function availablePrograms(category: ProgramCategory) {
  return category.programs.filter((p) => p.available !== false);
}

export function programForCourse(slug: string) {
  for (const c of categories) {
    const p = c.programs.find((pr) => pr.courseSlug === slug && pr.available !== false);
    if (p) return p;
  }
  return undefined;
}

export function formatINR(amount: number) {
  return `₹${amount.toLocaleString('en-IN')}`;
}

export function startingPrice(p: Program) {
  return p.basic ?? p.advanced;
}
