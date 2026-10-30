import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { coursePath, visibleCourses, type Category } from '@/data/catalog';
import { formatINR, tiers } from '@/data/pricing';
import { Reveal } from './Reveal';

type Props = { category: Category; id?: string; headingLevel?: 'h2' | 'h3'; title?: string };

/** Fee table for one category. Rows become stacked cards on small screens. */
export function FeeTable({ category, id = `fees-${category.slug}`, headingLevel: H = 'h3', title = category.title }: Props) {
  const courses = visibleCourses(category);
  const columns = tiers.filter((t) => courses.some((c) => c.fees[t.id] !== undefined));

  return (
    <Reveal>
      <section id={id} aria-labelledby={`${id}-title`} className="card scroll-mt-24 overflow-hidden">
        <H id={`${id}-title`} className="border-b border-white/[0.08] px-6 py-5 text-xl sm:px-8">
          {title}
        </H>
        <table className="w-full text-left">
          <caption className="sr-only">{title} course fees by learning track</caption>
          <thead className="hidden sm:table-header-group">
            <tr className="border-b border-white/[0.06] text-xs uppercase tracking-[0.14em] text-slate-500">
              <th scope="col" className="px-8 py-4 font-semibold">
                Course
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
            {courses.map((course) => (
              <tr
                key={course.slug}
                className="grid grid-cols-3 gap-x-2 gap-y-3 border-b border-white/[0.05] px-6 py-5 transition-colors last:border-0 hover:bg-white/[0.02] sm:table-row sm:px-0 sm:py-0"
              >
                <th scope="row" className="col-span-3 font-semibold text-white sm:px-8 sm:py-4">
                  <Link to={coursePath({ course, category })} className="underline-offset-4 hover:text-electric-300 hover:underline">
                    {course.name}
                  </Link>
                </th>
                {columns.map((t) => {
                  const price = course.fees[t.id];
                  return (
                    <td key={t.id} className="sm:px-4 sm:py-4 sm:text-right">
                      <span className="block text-[11px] uppercase tracking-[0.14em] text-slate-500 sm:hidden">{t.name}</span>
                      <span className={`font-semibold tabular-nums ${t.id === 'premium' ? 'text-violet-200' : 'text-slate-200'}`}>
                        {price !== undefined ? formatINR(price) : '—'}
                      </span>
                    </td>
                  );
                })}
                <td className="col-span-3 sm:w-12 sm:pr-8 sm:text-right">
                  <Link
                    to={`/contact?${new URLSearchParams({ course: course.slug })}`}
                    aria-label={`Enquire about ${course.name}`}
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
