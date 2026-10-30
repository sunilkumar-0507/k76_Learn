import { visibleCategories } from '@/data/catalog';
import { CategoryCard } from '../CategoryCard';
import { ButtonLink } from '../Button';
import { Reveal } from '../Reveal';
import { SectionHeading } from '../SectionHeading';

export function WhatWeTeach() {
  return (
    <section id="courses" className="relative py-20 sm:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="What we teach"
          title={
            <>
              Industry-ready courses. <span className="text-gradient">One standard of quality.</span>
            </>
          }
          description="Professional courses across design, marketing, development, data and AI — each built on core concepts, hands-on practice and advanced projects you can show."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleCategories.map((category, i) => (
            <Reveal key={category.slug} delay={(i % 3) * 80}>
              <CategoryCard category={category} index={i} />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <ButtonLink to="/courses" variant="secondary" arrow>
            View All Courses
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
