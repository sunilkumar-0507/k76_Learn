import { useSeo } from '@/hooks/useSeo';
import { allCourses, visibleCategories } from '@/data/catalog';
import { breadcrumbSchema, courseListSchema } from '@/lib/schema';
import { PageHero } from '@/components/PageHero';
import { CategoryCard } from '@/components/CategoryCard';
import { CtaBanner } from '@/components/CtaBanner';
import { ButtonLink } from '@/components/Button';
import { Reveal } from '@/components/Reveal';

export default function Courses() {
  const subjects = allCourses.filter((e) => !e.category.isBundle).length;

  useSeo({
    title: 'All Courses – Design, Marketing, Development, Data & AI',
    description: `Explore ${subjects} industry-focused courses at K76 Learn in design and creative, digital marketing, programming, data analytics and AI — plus premium bundled programmes.`,
    jsonLd: [
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Courses', path: '/courses' },
      ]),
      courseListSchema(allCourses, 'K76 Learn courses'),
    ],
  });

  return (
    <>
      <PageHero
        eyebrow="All courses"
        title={
          <>
            Skills that move <span className="text-gradient">careers forward.</span>
          </>
        }
        description="Choose a category to see its courses. Every course is professional, project-based and available in Basic, Advanced and Premium tracks."
      ></PageHero>

      <section aria-labelledby="categories-title" className="pb-8">
        <div className="container-site">
          <h2 id="categories-title" className="sr-only">
            Course categories
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleCategories.map((category, i) => (
              <Reveal key={category.slug} delay={(i % 3) * 80}>
                <CategoryCard category={category} index={i} showCourses={false} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Not sure which course is right for you?"
        description="Tell us about your goals and we will help you choose the right course and track."
        actions={
          <>
            <ButtonLink to="/contact" size="lg" arrow>
              Get Course Guidance
            </ButtonLink>
            <ButtonLink to="/fees" size="lg" variant="secondary">
              Compare Fees
            </ButtonLink>
          </>
        }
      />
    </>
  );
}
