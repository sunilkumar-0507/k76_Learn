import { learningSteps } from '@/data/content';
import { Reveal } from '../Reveal';
import { SectionHeading } from '../SectionHeading';

export function LearningApproach({ eyebrow = 'Our learning approach' }: { eyebrow?: string }) {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow={eyebrow}
          title={
            <>
              From first concept to <span className="text-gradient">career-ready.</span>
            </>
          }
          description="A simple, proven journey that turns knowledge into confidence and confidence into opportunity."
        />
        <div className="relative mt-16">
          <div
            className="pointer-events-none absolute left-0 right-0 top-[52px] hidden h-px bg-gradient-to-r from-electric-500/0 via-electric-500/50 to-violet-500/0 lg:block"
            aria-hidden="true"
          />
          <ol className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {learningSteps.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal as="li" key={s.step} delay={i * 100} className="relative">
                  <div className="card h-full p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
                    <div className="flex items-center justify-between">
                      <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient shadow-glow">
                        <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                      </span>
                      <span className="font-mono text-4xl font-medium text-white/10">{s.step}</span>
                    </div>
                    <h3 className="mt-6 text-2xl">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
