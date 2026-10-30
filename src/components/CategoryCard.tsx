import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categoryPath, coursePath, visibleCourses, type Category } from '@/data/catalog';
import { formatINR, startingPrice } from '@/data/pricing';

type Props = { category: Category; index: number; /** List the category's courses as links on the card. */ showCourses?: boolean };

/** A category overview card; the whole card opens the category page. */
export function CategoryCard({ category, index, showCourses = true }: Props) {
  const Icon = category.icon;
  const courses = visibleCourses(category);
  const from = Math.min(...courses.map((c) => startingPrice(c.fees)));
  const navigate = useNavigate();

  return (
    <article
      // Tapping anywhere on the card opens the category; the title and button are the accessible links.
      onClick={(e) => !(e.target as HTMLElement).closest('a') && navigate(categoryPath(category))}
      className="card group relative flex h-full cursor-pointer flex-col overflow-hidden p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:shadow-glow sm:p-8"
    >
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
      <p className="relative mt-2 text-sm font-medium text-slate-300">{category.tagline}</p>
      {!showCourses && <p className="relative mt-3 text-sm leading-relaxed text-slate-400">{category.description}</p>}

      {showCourses && (
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
      )}

      <div className="relative mt-auto flex items-center justify-between gap-4 pt-8">
        <span className="text-xs text-slate-500">
          {courses.length} {category.isBundle ? 'programmes' : 'courses'} · from <span className="font-semibold text-slate-300">{formatINR(from)}</span>
        </span>
        <Link
          to={categoryPath(category)}
          className="inline-flex flex-none items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:border-transparent hover:bg-brand-gradient group-hover:border-transparent group-hover:bg-brand-gradient"
          aria-label={`View ${category.title} ${category.isBundle ? 'programmes' : 'courses'}`}
        >
          View {category.isBundle ? 'programmes' : 'courses'}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
