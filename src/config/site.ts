/**
 * Central place for brand and contact details.
 * Update these values and every page, footer and link picks them up.
 */
export const site = {
  name: 'K76 Learn',
  tagline: 'Learn Skills. Build Your Future.',
  description:
    'K76 Learn helps students move beyond traditional education with practical, industry-relevant skills, project-based learning, career development and AI-powered education.',
  parentBrand: { name: 'K76.in', url: 'https://k76.in' },
  email: 'hello@k76.in',
  phoneDisplay: '+91 76672 24144',
  phoneE164: '+917667224144',
  /** Digits only, used to build wa.me links. */
  whatsappNumber: '917667224144',
  /**
   * Social profiles. Leave `url` empty to hide a network from the footer.
   */
  socials: [
    { name: 'Instagram', url: '' },
    { name: 'LinkedIn', url: '' },
    { name: 'YouTube', url: '' },
    { name: 'X', url: '' },
  ] as { name: 'Instagram' | 'LinkedIn' | 'YouTube' | 'X'; url: string }[],
} as const;

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Courses', to: '/courses' },
  { label: 'Career Development', to: '/career-development' },
  { label: 'Contact', to: '/contact' },
] as const;

export function whatsappLink(message = 'Hi K76 Learn, I would like to know more about your courses.') {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
