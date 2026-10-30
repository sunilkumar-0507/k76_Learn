import { useSeo } from '@/hooks/useSeo';
import { site } from '@/config/site';
import { ButtonLink } from '@/components/Button';
import { CtaBanner } from '@/components/CtaBanner';
import { Hero } from '@/components/sections/Hero';
import { WhatWeTeach } from '@/components/sections/WhatWeTeach';
import { Benefits } from '@/components/sections/Benefits';
import { LearningApproach } from '@/components/sections/LearningApproach';
import { AISection } from '@/components/sections/AISection';
import { CareerSection } from '@/components/sections/CareerSection';
import { SectionHeading } from '@/components/SectionHeading';
import { TierCards } from '@/components/TierCards';

export default function Home() {
  useSeo({
    title: site.name,
    description:
      'Premium, industry-focused courses in graphic & UI/UX design, digital marketing, programming, data analytics and AI — with professional trainers, advanced projects and career-focused tracks.',
  });

  return (
    <>
      <Hero />
      <WhatWeTeach />
      <Benefits />
      <LearningApproach />
      <AISection />
      <CareerSection />
      <section className="relative bg-charcoal-900 py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Learning tracks"
            title={
              <>
                Choose the depth. <span className="text-gradient">Keep the standard.</span>
              </>
            }
            description="Every programme is available in three tracks — from strong foundations to a career-focused experience with capstone projects and individual mentoring."
          />
          <div className="mt-14">
            <TierCards />
          </div>
          <div className="mt-10 text-center">
            <ButtonLink to="/fees" variant="secondary" arrow>
              View Programmes &amp; Fees
            </ButtonLink>
          </div>
        </div>
      </section>
      <CtaBanner
        title={
          <>
            Your Future Won&rsquo;t Build Itself. <span className="text-gradient">Start Today.</span>
          </>
        }
        description="Take the first step towards becoming industry-ready with K76 Learn."
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
