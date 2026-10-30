import { careerHighlights } from '@/data/content';
import { ButtonLink } from '../Button';
import { Reveal } from '../Reveal';

export function CareerSection({ headingAs: H = 'h2', showCta = true }: { headingAs?: 'h1' | 'h2'; showCta?: boolean }) {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container-site grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-start">
        <Reveal className="lg:sticky lg:top-28">
          <span className="eyebrow">Career development</span>
          <H className="mt-5 text-3xl leading-[1.1] sm:text-4xl lg:text-5xl">
            Your Degree Is Just The Beginning. <span className="text-gradient">Your Skills Define Your Future.</span>
          </H>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            Great skills need great presentation. Alongside every programme, we help you build the professional toolkit that turns learning into interviews,
            offers and clients.
          </p>
          {showCta && (
            <div className="mt-8">
              <ButtonLink to="/career-development" size="lg" arrow>
                Start Building Your Career
              </ButtonLink>
            </div>
          )}
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-2">
          {careerHighlights.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal as="li" key={c.title} delay={(i % 2) * 80} className={i === careerHighlights.length - 1 ? 'sm:col-span-2' : ''}>
                <div className="card group flex h-full gap-4 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/30">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-amber-300/20 to-orange-500/20 text-amber-300">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg">{c.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{c.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
