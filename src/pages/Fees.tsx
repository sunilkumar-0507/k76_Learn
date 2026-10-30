import { useSeo } from '@/hooks/useSeo';
import { visibleCategories } from '@/data/catalog';
import { feeNote } from '@/data/pricing';
import { breadcrumbSchema } from '@/lib/schema';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { TierCards } from '@/components/TierCards';
import { ValuePillars } from '@/components/ValuePillars';
import { FeeTable } from '@/components/FeeTable';
import { CtaBanner } from '@/components/CtaBanner';
import { ButtonLink } from '@/components/Button';

export default function Fees() {
  useSeo({
    title: 'Course Fees & Learning Tracks',
    description:
      'K76 Learn course fees for design, digital marketing, programming, data analytics, AI and bundled programmes — with Basic, Advanced and Premium career-focused tracks.',
    jsonLd: [
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Fees', path: '/fees' },
      ]),
    ],
  });

  return (
    <>
      <PageHero
        eyebrow="Course Fees & Learning Tracks"
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
          <SectionHeading eyebrow="Fee structure" title="Course fees by category" description={feeNote} />

          <nav aria-label="Fee categories" className="mt-10 flex flex-wrap justify-center gap-2">
            {visibleCategories.map((c) => (
              <a
                key={c.slug}
                href={`#fees-${c.slug}`}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-white/25 hover:text-white"
              >
                {c.title}
              </a>
            ))}
          </nav>

          <div className="mt-14 space-y-12">
            {visibleCategories.map((c, i) => (
              <FeeTable key={c.slug} category={c} title={c.isBundle ? c.title : `${i + 1}. ${c.title} courses`} />
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
        description="Our team will help you choose the right course and track for your goals."
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
