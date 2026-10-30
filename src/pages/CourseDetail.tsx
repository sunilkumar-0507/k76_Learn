import { useParams } from 'react-router-dom';
import { Award, CalendarClock, Check, FolderKanban, IndianRupee, Layers, MonitorSmartphone, Sparkles, Users } from 'lucide-react';
import { fitTitle, useSeo } from '@/hooks/useSeo';
import { bundleIncludes, categoryPath, coursePath, courseTopics, getCourse, visibleCourses, type CourseEntry } from '@/data/catalog';
import { feeNote, formatINR, startingPrice } from '@/data/pricing';
import { breadcrumbSchema, courseSchema } from '@/lib/schema';
import { Backdrop } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Reveal } from '@/components/Reveal';
import { ButtonLink } from '@/components/Button';
import { EnquiryForm } from '@/components/EnquiryForm';
import { CourseCard } from '@/components/CourseCard';
import { TierCards } from '@/components/TierCards';
import NotFound from './NotFound';

const NOT_SET = 'Shared on enquiry';

export default function CourseDetailRoute() {
  const { category, course } = useParams();
  const entry = getCourse(category, course);
  if (!entry) return <NotFound />;
  return <CourseDetail key={coursePath(entry)} entry={entry} />;
}

function CourseDetail({ entry }: { entry: CourseEntry }) {
  const { course, category } = entry;
  const isBundle = !!category.isBundle;
  const topics = courseTopics(course);
  const included = bundleIncludes(course);
  const from = startingPrice(course.fees);
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: category.title, path: categoryPath(category) },
    { name: course.name, path: coursePath(entry) },
  ];

  useSeo({
    title: isBundle
      ? fitTitle(`${course.name} Bundle – Fees & Syllabus`, `${course.name} Bundle & Fees`, course.name)
      : fitTitle(`${course.name} Course – Fees, Syllabus & Projects`, `${course.name} Course – Fees & Syllabus`, `${course.name} Course & Fees`),
    description: `${course.short} ${isBundle ? 'Advanced and Premium' : 'Basic, Advanced and Premium'} tracks from ${formatINR(from)}.`,
    jsonLd: [breadcrumbSchema(crumbs), courseSchema(entry)],
  });

  const Icon = course.icon;
  const logistics = course.logistics ?? {};
  const facts = [
    { icon: CalendarClock, label: 'Duration', value: logistics.duration },
    { icon: MonitorSmartphone, label: 'Mode', value: logistics.mode },
    { icon: IndianRupee, label: 'Fees', value: `From ${formatINR(from)}` },
    { icon: Award, label: 'Certification', value: logistics.certification },
  ];
  const others = visibleCourses(category)
    .filter((c) => c.slug !== course.slug)
    .slice(0, 3)
    .map((c) => ({ course: c, category }));
  const whoCanJoin = course.whoCanJoin ?? category.whoCanJoin;

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
          <div className="mt-8 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div className="animate-word-in">
              <div className="flex items-center gap-4">
                <span className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${category.accent} shadow-lg`}>
                  <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">{isBundle ? 'Bundled programme' : category.title}</span>
              </div>
              <h1 className="mt-6 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
                {course.name} {isBundle ? '' : <span className="text-slate-500">Course</span>}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">{course.short}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="#enquire" size="lg" arrow>
                  Enquire About This {isBundle ? 'Programme' : 'Course'}
                </ButtonLink>
                <ButtonLink href="#fees" size="lg" variant="secondary">
                  View Fees
                </ButtonLink>
              </div>
            </div>

            <dl className="glass grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/[0.06]">
              {facts.map((f) => {
                const FIcon = f.icon;
                return (
                  <div key={f.label} className="bg-ink-900/80 p-5">
                    <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                      <FIcon className="h-3.5 w-3.5 text-electric-400" aria-hidden="true" /> {f.label}
                    </dt>
                    <dd className={`mt-2 text-sm font-semibold ${f.value ? 'text-white' : 'text-slate-400'}`}>{f.value ?? NOT_SET}</dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-site grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="card h-full p-8 sm:p-10">
              <h2 className="text-2xl sm:text-3xl">{isBundle ? 'Programme' : 'Course'} overview</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-400">{course.overview}</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card h-full p-8">
              <Users className="h-6 w-6 text-electric-400" aria-hidden="true" />
              <h2 className="mt-4 text-xl">Who can join</h2>
              <ul className="mt-4 space-y-3">
                {whoCanJoin.map((w) => (
                  <li key={w} className="flex gap-2.5 text-sm text-slate-300">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-electric-400" aria-hidden="true" /> {w}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {isBundle && included.length > 0 && (
            <Reveal className="lg:col-span-3">
              <div className="card p-8">
                <Layers className="h-6 w-6 text-electric-400" aria-hidden="true" />
                <h2 className="mt-4 text-xl">Courses included</h2>
                <ul className="mt-5 grid gap-4 md:grid-cols-3">
                  {included.map((e) => (
                    <li key={e.course.slug}>
                      <ButtonLink to={coursePath(e)} variant="secondary" arrow className="w-full justify-between">
                        {e.course.name}
                      </ButtonLink>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}

          <Reveal>
            <div className="card h-full p-8">
              <h2 className="text-xl">{isBundle ? 'Syllabus highlights' : 'What you will learn'}</h2>
              <ol className="mt-5 space-y-3">
                {topics.map((t, i) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="font-mono text-xs text-slate-500">{String(i + 1).padStart(2, '0')}</span>
                    {t}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="card h-full p-8">
              <h2 className="text-xl">Skills covered</h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {course.skills.map((s) => (
                  <li key={s} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300">
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center gap-2 rounded-xl border border-violet-400/20 bg-violet-500/10 p-3 text-xs text-violet-200">
                <Sparkles className="h-4 w-4 flex-none" aria-hidden="true" /> AI tools are integrated throughout the learning experience.
              </div>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="card h-full p-8">
              <FolderKanban className="h-6 w-6 text-electric-400" aria-hidden="true" />
              <h2 className="mt-4 text-xl">Practical projects</h2>
              <ul className="mt-4 space-y-3">
                {course.projects.map((p) => (
                  <li key={p} className="flex gap-2.5 text-sm text-slate-300">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-emerald-400" aria-hidden="true" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="fees" className="scroll-mt-24 py-16 sm:py-20">
        <div className="container-site">
          <Reveal className="max-w-3xl">
            <span className="eyebrow">Fees</span>
            <h2 className="mt-5 text-3xl leading-tight sm:text-4xl">{course.name} fees — choose your track</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-400">
              Every track follows the same professional standard. Higher tracks add depth — more advanced projects, closer mentoring and stronger career
              support.
            </p>
          </Reveal>
          <div className="mt-12">
            <TierCards course={course} />
          </div>
          <p className="mt-8 text-sm text-slate-500">{feeNote}</p>
        </div>
      </section>

      <section id="enquire" className="scroll-mt-24 py-16 sm:py-20">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <Reveal>
            <span className="eyebrow">Enquiry</span>
            <h2 className="mt-5 text-3xl leading-tight sm:text-4xl">Interested in {course.name}?</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-400">
              Share a few details and our team will get back to you with batch timings, track options, certification details and anything else you need to know.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <EnquiryForm defaultCourse={course.name} compact />
          </Reveal>
        </div>
      </section>

      {others.length > 0 && (
        <section className="pb-24 pt-8">
          <div className="container-site">
            <h2 className="text-2xl sm:text-3xl">More {category.isBundle ? 'bundled programmes' : `${category.title.toLowerCase()} courses`}</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {others.map((e) => (
                <CourseCard key={e.course.slug} entry={e} topicLimit={3} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
