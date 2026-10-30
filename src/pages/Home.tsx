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

export default function Home() {
  useSeo({
    title: site.name,
    description:
      'K76 Learn teaches industry-ready skills in Digital Marketing, UI/UX Design, Full Stack Development, AI and Career Development through hands-on, project-based learning.',
  });

  return (
    <>
      <Hero />
      <WhatWeTeach />
      <Benefits />
      <LearningApproach />
      <AISection />
      <CareerSection />
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
