import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import type { Course } from '@/data/courses';

export function CourseCard({ course, topicLimit }: { course: Course; topicLimit?: number }) {
  const Icon = course.icon;
  const topics = topicLimit ? course.topics.slice(0, topicLimit) : course.topics;
  const remaining = course.topics.length - topics.length;

  return (
    <article className="card group relative flex h-full flex-col overflow-hidden p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-glow">
      {/* Hover glow */}
      <div
        className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br ${course.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25`}
        aria-hidden="true"
      />
      <div className="relative flex items-start justify-between">
        <span className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${course.accent} shadow-lg`}>
          <Icon className="h-6 w-6 text-white" aria-hidden="true" />
        </span>
        <span className="font-mono text-sm text-slate-500">{course.number}</span>
      </div>

      <h3 className="relative mt-6 text-xl sm:text-2xl">{course.title}</h3>
      <p className="relative mt-3 text-sm leading-relaxed text-slate-400">{course.short}</p>

      <ul className="relative mt-6 space-y-2.5">
        {topics.map((t) => (
          <li key={t} className="flex items-start gap-2.5 text-sm text-slate-300">
            <Check className="mt-0.5 h-4 w-4 flex-none text-electric-400" aria-hidden="true" />
            {t}
          </li>
        ))}
        {remaining > 0 && <li className="pl-6 text-sm text-slate-500">+ {remaining} more topics</li>}
      </ul>

      <div className="relative mt-auto pt-8">
        <Link
          to={`/courses/${course.slug}`}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-transparent hover:bg-brand-gradient"
          aria-label={`Explore the ${course.title} course`}
        >
          Explore Course
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
