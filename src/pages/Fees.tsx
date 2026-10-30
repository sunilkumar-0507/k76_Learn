import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { availablePrograms, categories, feeNote, formatINR, tiers, type Program } from '@/data/pricing';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { TierCards } from '@/components/TierCards';
import { ValuePillars } from '@/components/ValuePillars';
import { Reveal } from '@/components/Reveal';
import { CtaBanner } from '@/components/CtaBanner';
import { ButtonLink } from '@/components/Button';

export default function Fees() {
  useSeo({
    title: 'Programmes & Fees',
    description:
      'K76 Learn programme fees across design, digital marketing, development, data analytics and AI — with Basic, Advanced and Premium career-focused tracks.',
  });

  const visibleCategories = categories.filter((c) => availablePrograms(c).length > 0);

  return (
    <>
      <PageHero
        eyebrow="Programmes & Fees"
        title={
          <>
            Invest in skills that <span className="text-gradient">define your career.</span>
          </>
        }
        description="Choose the depth of learning that matches your ambition — from strong foundations to a career-focused track with capstone projects, individual mentoring and structured internship opportunities."
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#fees" size="lg" arrow>
            View Fee Structure
          </ButtonLink>
          <ButtonLink to="/contact" size="lg" variant="secondary">
            Talk to an Advisor
          </ButtonLink>
        </div>
      </PageHero>

      <section className="pb-20 sm:pb-28">
        <div className="container-site">
          <SectionHeading eyebrow="Learning tracks" title="Three tracks. One standard of quality." />
          <div className="mt-14">
            <TierCards />
          </div>
        </div>
      </section>

      <ValuePillars />

      <section id="fees" className="scroll-mt-20 py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading eyebrow="Fee structure" title="Programme fees" description={feeNote} />

          <nav aria-label="Fee categories" className="mt-10 flex flex-wrap justify-center gap-2">
            {visibleCategories.map((c) => (
              <a
                key={c.id}
                href={`#fees-${c.id}`}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-white/25 hover:text-white"
              >
                {c.title}
              </a>
            ))}
          </nav>

          <div className="mt-14 space-y-12">
            {visibleCategories.map((c) => (
              <FeeTable key={c.id} id={`fees-${c.id}`} title={c.title} programs={availablePrograms(c)} />
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-slate-500">{feeNote}</p>
        </div>
      </section>

      <CtaBanner
        title={
          <>
            Not sure which track fits you? <span className="text-gradient">Let&rsquo;s talk.</span>
          </>
        }
        description="Our team will help you choose the right programme and track for your goals."
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

function FeeTable({ id, title, programs }: { id: string; title: string; programs: Program[] }) {
  const columns = tiers.filter((t) => programs.some((p) => p[t.id] !== undefined));

  return (
    <Reveal>
      <section id={id} aria-labelledby={`${id}-title`} className="card scroll-mt-24 overflow-hidden">
        <h3 id={`${id}-title`} className="border-b border-white/[0.08] px-6 py-5 text-xl sm:px-8">
          {title}
        </h3>
        <table className="w-full text-left">
          <thead className="hidden sm:table-header-group">
            <tr className="border-b border-white/[0.06] text-xs uppercase tracking-[0.14em] text-slate-500">
              <th scope="col" className="px-8 py-4 font-semibold">
                Programme
              </th>
              {columns.map((t) => (
                <th key={t.id} scope="col" className={`px-4 py-4 text-right font-semibold ${t.id === 'premium' ? 'text-violet-300' : ''}`}>
                  {t.name}
                </th>
              ))}
              <th scope="col" className="w-12 pr-8">
                <span className="sr-only">Enquire</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {programs.map((p) => (
              <tr
                key={p.name}
                className="grid grid-cols-3 gap-x-2 gap-y-3 border-b border-white/[0.05] px-6 py-5 transition-colors last:border-0 hover:bg-white/[0.02] sm:table-row sm:px-0 sm:py-0"
              >
                <th scope="row" className="col-span-3 font-semibold text-white sm:px-8 sm:py-4">
                  {p.courseSlug ? (
                    <Link to={`/courses/${p.courseSlug}`} className="underline-offset-4 hover:text-electric-300 hover:underline">
                      {p.name}
                    </Link>
                  ) : (
                    p.name
                  )}
                </th>
                {columns.map((t) => (
                  <td key={t.id} className="sm:px-4 sm:py-4 sm:text-right">
                    <span className="block text-[11px] uppercase tracking-[0.14em] text-slate-500 sm:hidden">{t.name}</span>
                    <span className={`font-semibold tabular-nums ${t.id === 'premium' ? 'text-violet-200' : 'text-slate-200'}`}>
                      {p[t.id] !== undefined ? formatINR(p[t.id]!) : '—'}
                    </span>
                  </td>
                ))}
                <td className="col-span-3 sm:w-12 sm:pr-8 sm:text-right">
                  <Link
                    to={`/contact?${new URLSearchParams({ program: p.name })}`}
                    aria-label={`Enquire about ${p.name}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric-300 hover:text-white sm:h-9 sm:w-9 sm:justify-center sm:rounded-full sm:border sm:border-white/10 sm:bg-white/[0.03]"
                  >
                    <span className="sm:hidden">Enquire</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </Reveal>
  );
}
