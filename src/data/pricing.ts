/**
 * K76 Learn learning tracks and fee helpers.
 * Course fees themselves live with each course in `catalog.ts`.
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

export function formatINR(amount: number) {
  return `₹${amount.toLocaleString('en-IN')}`;
}

export function startingPrice(fees: Partial<Record<TierId, number>> & { advanced: number }) {
  return fees.basic ?? fees.advanced;
}
