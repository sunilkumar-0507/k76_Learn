import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import { coursePath, courseTopics, type CourseEntry } from '@/data/catalog';
import { formatINR, startingPrice } from '@/data/pricing';

type Props = { entry: CourseEntry; topicLimit?: number; headingLevel?: 'h2' | 'h3' };

export function CourseCard({ entry, topicLimit = 4, headingLevel: H = 'h3' }: Props) {
  const { course, category } = entry;
  const Icon = course.icon;
  const topics = courseTopics(course);
  const shown = topics.slice(0, topicLimit);
  const remaining = topics.length - shown.length;

  return (
    <article className="card group relative flex h-full flex-col overflow-hidden p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-glow">
      <div
        className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br ${category.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25`}
        aria-hidden="true"
      />
      <div className="relative flex items-start justify-between gap-4">
        <span className={`flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-gradient-to-br ${category.accent} shadow-lg`}>
          <Icon className="h-5 w-5 text-white" aria-hidden="true" />
        </span>
        <span className="text-right text-xs text-slate-500">
          From
          <span className="block text-base font-bold tabular-nums text-white">{formatINR(startingPrice(course.fees))}</span>
        </span>
      </div>

      <H className="relative mt-6 text-xl">
        <Link to={coursePath(entry)} className="after:absolute after:inset-0 after:content-['']">
          {course.name}
        </Link>
      </H>
      <p className="relative mt-3 text-sm leading-relaxed text-slate-400">{course.short}</p>

      {shown.length > 0 && (
        <ul className="relative mt-5 space-y-2">
          {shown.map((t) => (
            <li key={t} className="flex items-start gap-2.5 text-sm text-slate-300">
              <Check className="mt-0.5 h-4 w-4 flex-none text-electric-400" aria-hidden="true" />
              {t}
            </li>
          ))}
          {remaining > 0 && <li className="pl-6 text-sm text-slate-500">+ {remaining} more topics</li>}
        </ul>
      )}

      <div className="relative mt-auto pt-7">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 group-hover:border-transparent group-hover:bg-brand-gradient">
          {category.isBundle ? 'Explore Programme' : 'Explore Course'}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" aria-hidden="true" />
        </span>
      </div>
    </article>
  );
}
