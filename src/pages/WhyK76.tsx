import { X, Check } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { Backdrop } from '@/components/PageHero';
import { Benefits } from '@/components/sections/Benefits';
import { AISection } from '@/components/sections/AISection';
import { LearningApproach } from '@/components/sections/LearningApproach';
import { CtaBanner } from '@/components/CtaBanner';
import { ButtonLink } from '@/components/Button';
import { Reveal } from '@/components/Reveal';

const comparison = [
  { traditional: 'Theory-heavy lectures', k76: 'Hands-on, practical sessions' },
  { traditional: 'Exams and memorisation', k76: 'Real-world projects and portfolios' },
  { traditional: 'Slow-changing syllabus', k76: 'Industry-relevant, current tools' },
  { traditional: 'AI treated as off-limits', k76: 'AI integrated into how you learn and work' },
  { traditional: 'Career prep left to you', k76: 'Resume, interviews and personal branding built in' },
];

export default function WhyK76() {
  useSeo({
    title: 'Why K76 Learn?',
    description:
      'Practical learning, industry-relevant skills, real-world projects, AI-powered education, portfolio development and career preparation — why students choose K76 Learn.',
  });

  return (
    <>
      <div className="relative pt-16">
        <Backdrop />
        <Benefits headingAs="h1" />
      </div>

      <section className="py-20 sm:py-28">
        <div className="container-site">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">A different way to learn</span>
            <h2 className="mt-5 text-3xl leading-tight sm:text-4xl lg:text-5xl">Beyond traditional education.</h2>
          </Reveal>
          <Reveal className="mx-auto mt-12 max-w-4xl">
            <div className="card overflow-hidden">
              <div className="grid grid-cols-2 border-b border-white/[0.08] text-xs font-semibold uppercase tracking-[0.14em] sm:text-sm">
                <div className="p-5 text-slate-500 sm:p-6">Traditional learning</div>
                <div className="bg-brand-gradient-soft p-5 text-white sm:p-6">K76 Learn</div>
              </div>
              {comparison.map((row) => (
                <div key={row.k76} className="grid grid-cols-2 border-b border-white/[0.06] last:border-0">
                  <div className="flex items-start gap-3 p-5 text-sm text-slate-500 sm:p-6 sm:text-base">
                    <X className="mt-0.5 h-4 w-4 flex-none text-rose-400/70" aria-hidden="true" /> {row.traditional}
                  </div>
                  <div className="flex items-start gap-3 bg-white/[0.02] p-5 text-sm font-medium text-white sm:p-6 sm:text-base">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-emerald-400" aria-hidden="true" /> {row.k76}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <LearningApproach />
      <AISection />

      <CtaBanner
        title={
          <>
            Your Future Won&rsquo;t Build Itself. <span className="text-gradient">Start Today.</span>
          </>
        }
        description="Take the first step towards becoming industry-ready with K76 Learn."
        actions={
          <>
            <ButtonLink to="/contact" size="lg" arrow>
              Enquire Now
            </ButtonLink>
            <ButtonLink to="/courses" size="lg" variant="secondary">
              Explore Courses
            </ButtonLink>
          </>
        }
      />
    </>
  );
}
