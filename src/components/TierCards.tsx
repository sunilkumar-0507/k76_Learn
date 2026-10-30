import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { formatINR, tiers, type Program } from '@/data/pricing';
import { Reveal } from './Reveal';

type Props = {
  /** When given, each card shows that programme's fee for the tier. */
  program?: Program;
  headingLevel?: 'h2' | 'h3';
};

export function TierCards({ program, headingLevel: H = 'h3' }: Props) {
  const visible = program ? tiers.filter((t) => program[t.id] !== undefined) : tiers;

  return (
    <div className={`grid gap-6 ${visible.length === 3 ? 'lg:grid-cols-3' : 'md:grid-cols-2'}`}>
      {visible.map((tier, i) => {
        const featured = tier.id === 'premium';
        const price = program?.[tier.id];
        const query = new URLSearchParams({ plan: tier.id, ...(program ? { program: program.name } : {}) });
        return (
          <Reveal key={tier.id} delay={i * 100}>
            <article
              className={`relative flex h-full flex-col rounded-3xl p-[1px] transition-transform duration-300 hover:-translate-y-1 ${
                featured ? 'bg-gradient-to-b from-electric-400 via-violet-500 to-violet-600/30 shadow-glow-violet' : 'bg-white/[0.08]'
              }`}
            >
              <div className={`flex h-full flex-col rounded-[calc(1.5rem-1px)] p-7 sm:p-8 ${featured ? 'bg-ink-850' : 'bg-ink-900'}`}>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-electric-300">{tier.label}</span>
                  {featured && <span className="rounded-full bg-brand-gradient px-3 py-1 text-[11px] font-semibold text-white">Most complete</span>}
                </div>
                <H className="mt-4 text-2xl sm:text-3xl">{tier.name}</H>
                <p className="mt-2 text-sm text-slate-400">{tier.audience}</p>

                {price !== undefined && (
                  <p className="mt-6 flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold tracking-tight text-white">{formatINR(price)}</span>
                    <span className="text-sm text-slate-500">/ programme</span>
                  </p>
                )}

                <ul className="mt-6 space-y-3 border-t border-white/[0.07] pt-6">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                      <Check className={`mt-0.5 h-4 w-4 flex-none ${featured ? 'text-violet-400' : 'text-electric-400'}`} aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <Link
                    to={`/contact?${query}`}
                    className={`group inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                      featured
                        ? 'bg-brand-gradient text-white shadow-glow hover:shadow-glow-violet'
                        : 'border border-white/15 bg-white/[0.04] text-white hover:border-white/30 hover:bg-white/[0.08]'
                    }`}
                  >
                    Enquire about {tier.name}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
