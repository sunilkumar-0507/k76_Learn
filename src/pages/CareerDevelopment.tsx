import { useSeo } from '@/hooks/useSeo';
import { getCourse } from '@/data/courses';
import { PageHero } from '@/components/PageHero';
import { ButtonLink } from '@/components/Button';
import { CareerSection } from '@/components/sections/CareerSection';
import { LearningApproach } from '@/components/sections/LearningApproach';
import { CtaBanner } from '@/components/CtaBanner';
import { Reveal } from '@/components/Reveal';
import { Check } from 'lucide-react';

const paths = [
  { title: 'Internships', body: 'Build the profile and confidence to land your first industry exposure.' },
  { title: 'Jobs', body: 'Prepare for applications, assessments and interviews with structure.' },
  { title: 'Freelancing', body: 'Learn how to package your skills, find clients and price your work.' },
  { title: 'Entrepreneurship', body: 'Understand how to test ideas and start building something of your own.' },
];

export default function CareerDevelopment() {
  useSeo({
    title: 'Career Development',
    description:
      'Resume building, portfolio development, interview preparation, LinkedIn optimisation, communication skills and freelancing guidance at K76 Learn.',
  });
  const course = getCourse('career-development')!;

  return (
    <>
      <PageHero
        eyebrow="Career Development"
        title={
          <>
            Turn your skills into <span className="text-gradient">real opportunities.</span>
          </>
        }
        description="Your degree is just the beginning. We help you present your skills with confidence — through a strong resume, portfolio, personal brand and interview preparation."
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink to="/contact" size="lg" arrow>
            Start Building Your Career
          </ButtonLink>
          <ButtonLink to={`/courses/${course.slug}`} size="lg" variant="secondary">
            View Programme Details
          </ButtonLink>
        </div>
      </PageHero>

      <CareerSection showCta={false} />

      <section className="bg-charcoal-900 py-20 sm:py-28">
        <div className="container-site">
          <Reveal className="max-w-3xl">
            <span className="eyebrow">Where it leads</span>
            <h2 className="mt-5 text-3xl leading-tight sm:text-4xl lg:text-5xl">One skill set. Many paths.</h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {paths.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="card h-full p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
                  <span className="font-mono text-sm text-electric-300">0{i + 1}</span>
                  <h3 className="mt-4 text-xl">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16">
            <div className="card grid gap-8 p-8 sm:p-10 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl sm:text-3xl">What the programme covers</h2>
                <p className="mt-3 text-slate-400">{course.overview}</p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {course.topics.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-amber-300" aria-hidden="true" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <LearningApproach />

      <CtaBanner
        title="Start Building Your Career"
        description="Get personalised guidance on your resume, portfolio and next career step."
        actions={
          <>
            <ButtonLink to="/contact" size="lg" arrow>
              Enquire Now
            </ButtonLink>
            <ButtonLink to="/courses" size="lg" variant="secondary">
              Explore Courses
            </ButtonLink>
          </>
        }
      />
    </>
  );
}
