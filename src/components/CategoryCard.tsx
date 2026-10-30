import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categoryPath, coursePath, visibleCourses, type Category } from '@/data/catalog';
import { formatINR, startingPrice } from '@/data/pricing';

/** A category overview card listing every course in it. */
export function CategoryCard({ category, index }: { category: Category; index: number }) {
  const Icon = category.icon;
  const courses = visibleCourses(category);
  const from = Math.min(...courses.map((c) => startingPrice(c.fees)));

  return (
    <article className="card group relative flex h-full flex-col overflow-hidden p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:shadow-glow sm:p-8">
      <div
        className={`pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br ${category.accent} opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-25`}
        aria-hidden="true"
      />
      <div className="relative flex items-start justify-between">
        <span className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${category.accent} shadow-lg`}>
          <Icon className="h-6 w-6 text-white" aria-hidden="true" />
        </span>
        <span className="font-mono text-sm text-slate-500">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <h3 className="relative mt-6 text-2xl">
        <Link to={categoryPath(category)} className="hover:text-electric-300">
          {category.title}
        </Link>
      </h3>
      <p className="relative mt-2 text-sm leading-relaxed text-slate-400">{category.tagline}</p>

      <ul className="relative mt-6 flex flex-wrap gap-2" aria-label={`${category.title} courses`}>
        {courses.map((c) => (
          <li key={c.slug}>
            <Link
              to={coursePath({ course: c, category })}
              className="inline-block rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-white/30 hover:text-white"
            >
              {c.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="relative mt-auto flex items-center justify-between gap-4 pt-8">
        <span className="text-xs text-slate-500">
          {courses.length} {category.isBundle ? 'programmes' : 'courses'} · from <span className="font-semibold text-slate-300">{formatINR(from)}</span>
        </span>
        <Link
          to={categoryPath(category)}
          className="inline-flex items-center gap-2 text-sm font-semibold text-electric-300 transition hover:text-white"
          aria-label={`View all ${category.title} courses`}
        >
          View all <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
