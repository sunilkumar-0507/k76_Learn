import { courses } from '@/data/courses';
import { CourseCard } from '../CourseCard';
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
              Five programmes. <span className="text-gradient">One goal: industry-ready you.</span>
            </>
          }
          description="Every programme blends core concepts, hands-on practice and real projects — so you leave with skills you can prove."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {courses.map((course, i) => (
            <Reveal key={course.slug} delay={(i % 3) * 80} className={i < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}>
              <CourseCard course={course} topicLimit={5} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
