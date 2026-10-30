import { Navigate, useParams } from 'react-router-dom';
import { Check } from 'lucide-react';
import { fitTitle, useSeo } from '@/hooks/useSeo';
import { categoryPath, coursePath, findCourse, getCategory, legacyPaths, visibleCourses } from '@/data/catalog';
import { feeNote, formatINR, startingPrice } from '@/data/pricing';
import { breadcrumbSchema, courseListSchema } from '@/lib/schema';
import { Backdrop } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CourseCard } from '@/components/CourseCard';
import { FeeTable } from '@/components/FeeTable';
import { TierCards } from '@/components/TierCards';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { CtaBanner } from '@/components/CtaBanner';
import { ButtonLink } from '@/components/Button';
import NotFound from './NotFound';

export default function CategoryRoute() {
  const { category: slug } = useParams();
  const category = getCategory(slug);
  if (category) return <CategoryPage key={category.slug} slug={category.slug} />;

  // Older links pointed straight at /courses/<course>; send them to the new home.
  const moved = legacyPaths[`/courses/${slug}`];
  if (moved) return <Navigate to={moved} replace />;
  const course = findCourse(slug);
  if (course) return <Navigate to={coursePath(course)} replace />;
  return <NotFound />;
}

function CategoryPage({ slug }: { slug: string }) {
  const category = getCategory(slug)!;
  const courses = visibleCourses(category);
  const entries = courses.map((course) => ({ course, category }));
  const from = Math.min(...courses.map((c) => startingPrice(c.fees)));
  const Icon = category.icon;
  const heading = category.isBundle ? category.title : `${category.title} Courses`;
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: category.title, path: categoryPath(category) },
  ];

  useSeo({
    title: fitTitle(`${heading} – Fees & Syllabus`, `${heading} & Fees`, heading),
    description: `${category.description} Fees from ${formatINR(from)}.`,
    jsonLd: [breadcrumbSchema(crumbs), courseListSchema(entries, heading)],
  });

  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-36">
        <Backdrop />
        <div
          className={`pointer-events-none absolute right-0 top-10 h-[420px] w-[420px] rounded-full bg-gradient-to-br ${category.accent} opacity-20 blur-[120px]`}
          aria-hidden="true"
        />
        <div className="container-site relative">
          <Breadcrumbs items={crumbs} />
          <div className="mt-8 max-w-3xl animate-word-in">
            <span className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${category.accent} shadow-lg`}>
              <Icon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <h1 className="mt-6 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">{heading}</h1>
            <p className="mt-4 text-xl font-medium text-gradient">{category.tagline}</p>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">{category.description}</p>
            <p className="mt-6 text-sm text-slate-400">
              {courses.length} {category.isBundle ? 'programmes' : 'courses'} · Fees from <span className="font-semibold text-white">{formatINR(from)}</span>
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#course-list" size="lg" arrow>
                Browse {category.isBundle ? 'Programmes' : 'Courses'}
              </ButtonLink>
              <ButtonLink to="/contact" size="lg" variant="secondary">
                Enquire Now
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section id="course-list" className="scroll-mt-24 pb-20">
        <div className="container-site">
          <h2 className="sr-only">{heading}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {entries.map((e, i) => (
              <Reveal key={e.course.slug} delay={(i % 3) * 70}>
                <CourseCard entry={e} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal-900 py-20 sm:py-28">
        <div className="container-site grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <FeeTable category={category} headingLevel="h2" title={`${heading} fees`} />
            <p className="mt-4 text-sm text-slate-500">{feeNote}</p>
          </div>
          <Reveal>
            <div className="card h-full p-8">
              <h2 className="text-xl">Who can join</h2>
              <ul className="mt-5 space-y-3">
                {category.whoCanJoin.map((w) => (
                  <li key={w} className="flex gap-2.5 text-sm text-slate-300">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-electric-400" aria-hidden="true" /> {w}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading eyebrow="Learning tracks" title="What each track includes" />
          <div className="mt-14">
            <TierCards />
          </div>
        </div>
      </section>

      <CtaBanner
        title={`Start your ${category.title.toLowerCase()} journey`}
        description="Tell us about your goals and we will recommend the right course and track."
        actions={
          <>
            <ButtonLink to="/contact" size="lg" arrow>
              Enquire Now
            </ButtonLink>
            <ButtonLink to="/courses" size="lg" variant="secondary">
              All Courses
            </ButtonLink>
          </>
        }
      />
    </>
  );
}
