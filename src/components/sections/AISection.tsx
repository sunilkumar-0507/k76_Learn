import { aiUseCases } from '@/data/content';
import { AIVisual } from '../AIVisual';
import { ButtonLink } from '../Button';
import { Reveal } from '../Reveal';

export function AISection() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[140px]" />
        <div className="grid-bg absolute inset-0" />
      </div>
      <div className="container-site relative grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">AI-powered education</span>
          <h2 className="mt-5 text-3xl leading-[1.1] sm:text-4xl lg:text-5xl">
            Learn Smarter. Work Faster. <span className="text-gradient">Think Bigger.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            AI is reshaping every profession. At K76 Learn, students don&rsquo;t just hear about AI — they use it. You will explore leading AI tools and learn
            how to integrate them into marketing, design, coding and everyday professional workflows, responsibly and effectively.
          </p>
          <div className="mt-8">
            <ButtonLink to="/courses/ai-emerging-technologies" arrow>
              Explore AI Courses
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="glass rounded-[2rem] p-6 shadow-glow-violet sm:p-8">
            <AIVisual />
          </div>
        </Reveal>
      </div>

      <div className="container-site relative mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {aiUseCases.map((u, i) => {
          const Icon = u.icon;
          return (
            <Reveal key={u.title} delay={i * 80}>
              <div className="glass h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40">
                <Icon className="h-6 w-6 text-violet-400" aria-hidden="true" />
                <h3 className="mt-4 text-lg">{u.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{u.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
