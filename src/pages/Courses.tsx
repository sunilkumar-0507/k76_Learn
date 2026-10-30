import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { allCourses, categoryPath, visibleCategories, visibleCourses } from '@/data/catalog';
import { breadcrumbSchema, courseListSchema } from '@/lib/schema';
import { PageHero } from '@/components/PageHero';
import { CourseCard } from '@/components/CourseCard';
import { CtaBanner } from '@/components/CtaBanner';
import { ButtonLink } from '@/components/Button';
import { Reveal } from '@/components/Reveal';

export default function Courses() {
  const subjects = allCourses.filter((e) => !e.category.isBundle).length;

  useSeo({
    title: 'All Courses – Design, Marketing, Development, Data & AI',
    description: `Explore ${subjects} industry-focused courses at K76 Learn in design and creative, digital marketing, programming, data analytics and AI — plus premium bundled programmes.`,
    jsonLd: [
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Courses', path: '/courses' },
      ]),
      courseListSchema(allCourses, 'K76 Learn courses'),
    ],
  });

  return (
    <>
      <PageHero
        eyebrow="All courses"
        title={
          <>
            Skills that move <span className="text-gradient">careers forward.</span>
          </>
        }
        description="Professional, project-based courses designed around what the industry needs today — each available in Basic, Advanced and Premium tracks."
      >
        <nav aria-label="Course categories" className="mt-8 flex flex-wrap gap-2">
          {visibleCategories.map((c) => (
            <a
              key={c.slug}
              href={`#${c.slug}`}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-white/25 hover:text-white"
            >
              {c.title}
            </a>
          ))}
        </nav>
      </PageHero>

      <div className="space-y-20 pb-8 sm:space-y-28">
        {visibleCategories.map((category, ci) => {
          const Icon = category.icon;
          return (
            <section key={category.slug} id={category.slug} aria-labelledby={`${category.slug}-title`} className="scroll-mt-24">
              <div className="container-site">
                <Reveal className="flex flex-col gap-6 border-b border-white/[0.07] pb-8 md:flex-row md:items-end md:justify-between">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-3">
                      <span className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${category.accent}`}>
                        <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                      </span>
                      <span className="font-mono text-sm text-slate-500">{String(ci + 1).padStart(2, '0')}</span>
                    </div>
                    <h2 id={`${category.slug}-title`} className="mt-4 text-3xl sm:text-4xl">
                      {category.title} {category.isBundle ? '' : 'Courses'}
                    </h2>
                    <p className="mt-3 text-slate-400">{category.description}</p>
                  </div>
                  <Link
                    to={categoryPath(category)}
                    className="inline-flex flex-none items-center gap-2 text-sm font-semibold text-electric-300 transition hover:text-white"
                  >
                    {category.title} overview &amp; fees <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Reveal>
                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {visibleCourses(category).map((course, i) => (
                    <Reveal key={course.slug} delay={(i % 3) * 70}>
                      <CourseCard entry={{ course, category }} />
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <CtaBanner
        title="Not sure which course is right for you?"
        description="Tell us about your goals and we will help you choose the right course and track."
        actions={
          <>
            <ButtonLink to="/contact" size="lg" arrow>
              Get Course Guidance
            </ButtonLink>
            <ButtonLink to="/fees" size="lg" variant="secondary">
              Compare Fees
            </ButtonLink>
          </>
        }
      />
    </>
  );
}
