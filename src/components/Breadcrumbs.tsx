import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export type Crumb = { name: string; path: string };

/** Visible breadcrumb trail; pair with `breadcrumbSchema` for structured data. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className="text-slate-300">
                  {c.name}
                </span>
              ) : (
                <>
                  <Link to={c.path} className="transition hover:text-white">
                    {c.name}
                  </Link>
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
