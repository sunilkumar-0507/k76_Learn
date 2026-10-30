import { useSearchParams } from 'react-router-dom';
import { useSeo } from '@/hooks/useSeo';
import { courses } from '@/data/courses';
import { PageHero } from '@/components/PageHero';
import { CourseCard } from '@/components/CourseCard';
import { CtaBanner } from '@/components/CtaBanner';
import { ButtonLink } from '@/components/Button';

export default function Courses() {
  useSeo({
    title: 'Courses',
    description: 'Explore K76 Learn courses in Digital Marketing, UI/UX Design, Full Stack Development, AI-Powered Learning and Career Development.',
  });

  const [params, setParams] = useSearchParams();
  const active = params.get('course') ?? 'all';
  const visible = active === 'all' ? courses : courses.filter((c) => c.slug === active);
  const tabs = [{ slug: 'all', title: 'All Courses' }, ...courses.map(({ slug, title }) => ({ slug, title }))];

  return (
    <>
      <PageHero
        eyebrow="Courses"
        title={
          <>
            Skills that move <span className="text-gradient">careers forward.</span>
          </>
        }
        description="Practical, project-based programmes designed around what the industry needs today — and what it will need tomorrow."
      />

      <section className="pb-12">
        <div className="container-site">
          <div className="-mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0" role="tablist" aria-label="Filter courses">
            <div className="inline-flex gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1.5">
              {tabs.map((t) => {
                const selected = t.slug === active;
                return (
                  <button
                    key={t.slug}
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setParams(t.slug === 'all' ? {} : { course: t.slug }, { replace: true })}
                    className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                      selected ? 'bg-brand-gradient text-white shadow-glow' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {t.title}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3" role="tabpanel">
            {visible.map((course) => (
              <div key={course.slug} className="animate-word-in">
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Not sure which course is right for you?"
        description="Tell us about your goals and we will help you choose the right path."
        actions={
          <ButtonLink to="/contact" size="lg" arrow>
            Get Course Guidance
          </ButtonLink>
        }
      />
    </>
  );
}
