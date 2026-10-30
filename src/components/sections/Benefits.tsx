import { benefits } from '@/data/content';
import { Reveal } from '../Reveal';
import { SectionHeading } from '../SectionHeading';

export function Benefits({ headingAs = 'h2' }: { headingAs?: 'h1' | 'h2' }) {
  return (
    <section className="relative bg-charcoal-900 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />
      <div className="container-site">
        <SectionHeading
          as={headingAs}
          eyebrow="Why K76 Learn?"
          title={
            <>
              Education Is Changing. <span className="text-gradient">Are You Ready?</span>
            </>
          }
          description="Degrees teach theory. Employers hire for skills. We built K76 Learn to close that gap with learning that is practical, current and career-focused."
        />
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal key={b.title} delay={(i % 4) * 70}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-ink-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-electric-400/40">
                  <div
                    className="pointer-events-none absolute inset-0 bg-brand-gradient-soft opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  <span className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-electric-300 transition-colors group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="relative mt-5 text-lg">{b.title}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-slate-400">{b.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
