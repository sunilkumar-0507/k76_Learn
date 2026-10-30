import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Award, CalendarClock, Check, FolderKanban, IndianRupee, MonitorSmartphone, Sparkles, Users } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { courses, getCourse } from '@/data/courses';
import { feeNote, formatINR, programForCourse, startingPrice } from '@/data/pricing';
import { TierCards } from '@/components/TierCards';
import { Backdrop } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { ButtonLink } from '@/components/Button';
import { EnquiryForm } from '@/components/EnquiryForm';
import { CourseCard } from '@/components/CourseCard';
import NotFound from './NotFound';

const NOT_SET = 'Shared on enquiry';

export default function CourseDetail() {
  const { slug } = useParams();
  const course = getCourse(slug);

  useSeo({
    title: course ? `${course.title} Course` : 'Course not found',
    description: course
      ? `${course.short} Hands-on projects, career guidance and expert trainers at K76 Learn.`
      : 'The course you are looking for could not be found.',
  });

  if (!course) return <NotFound />;

  const Icon = course.icon;
  const { logistics } = course;
  const program = programForCourse(course.slug);
  const facts = [
    { icon: CalendarClock, label: 'Duration', value: logistics.duration },
    { icon: MonitorSmartphone, label: 'Mode', value: logistics.mode },
    { icon: IndianRupee, label: 'Fees', value: logistics.fees ?? (program ? `From ${formatINR(startingPrice(program))}` : null) },
    { icon: Award, label: 'Certification', value: logistics.certification },
  ];
  const others = courses.filter((c) => c.slug !== course.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-36">
        <Backdrop />
        <div
          className={`pointer-events-none absolute right-0 top-10 h-[420px] w-[420px] rounded-full bg-gradient-to-br ${course.accent} opacity-20 blur-[120px]`}
          aria-hidden="true"
        />
        <div className="container-site relative">
          <Link to="/courses" className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All courses
          </Link>
          <div className="mt-8 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div className="animate-word-in">
              <div className="flex items-center gap-4">
                <span className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${course.accent} shadow-lg`}>
                  <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
                <span className="font-mono text-sm text-slate-500">Programme {course.number}</span>
              </div>
              <h1 className="mt-6 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">{course.title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">{course.short}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="#enquire" size="lg" arrow>
                  Enquire About This Course
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
              <h2 className="text-2xl sm:text-3xl">Course overview</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-400">{course.overview}</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card h-full p-8">
              <Users className="h-6 w-6 text-electric-400" aria-hidden="true" />
              <h2 className="mt-4 text-xl">Who can join</h2>
              <ul className="mt-4 space-y-3">
                {course.whoCanJoin.map((w) => (
                  <li key={w} className="flex gap-2.5 text-sm text-slate-300">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-electric-400" aria-hidden="true" /> {w}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="card h-full p-8">
              <h2 className="text-xl">What you will learn</h2>
              <ol className="mt-5 space-y-3">
                {course.topics.map((t, i) => (
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
                <Sparkles className="h-4 w-4 flex-none" aria-hidden="true" /> AI tools are integrated throughout the programme.
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

      {program && (
        <section className="py-16 sm:py-20">
          <div className="container-site">
            <Reveal className="max-w-3xl">
              <span className="eyebrow">Fees</span>
              <h2 className="mt-5 text-3xl leading-tight sm:text-4xl">Choose your track</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-400">
                Every track follows the same professional standard. Higher tracks add depth — more advanced projects, closer mentoring and stronger career
                support.
              </p>
            </Reveal>
            <div className="mt-12">
              <TierCards program={program} />
            </div>
            <p className="mt-8 text-sm text-slate-500">{feeNote}</p>
          </div>
        </section>
      )}

      <section id="enquire" className="scroll-mt-24 py-16 sm:py-20">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <Reveal>
            <span className="eyebrow">Enquiry</span>
            <h2 className="mt-5 text-3xl leading-tight sm:text-4xl">Interested in {course.title}?</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-400">
              Share a few details and our team will get back to you with batch timings, fees, certification details and anything else you need to know.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <EnquiryForm defaultCourse={course.title} compact />
          </Reveal>
        </div>
      </section>

      <section className="pb-24 pt-8">
        <div className="container-site">
          <h2 className="text-2xl sm:text-3xl">Explore other programmes</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {others.map((c) => (
              <CourseCard key={c.slug} course={c} topicLimit={4} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
