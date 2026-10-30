import { Compass, Eye, Layers, Target } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { LearningApproach } from '@/components/sections/LearningApproach';
import { CtaBanner } from '@/components/CtaBanner';
import { ButtonLink } from '@/components/Button';

const pillars = [
  {
    icon: Target,
    title: 'Our Mission',
    body: 'To empower students with the skills, confidence and experience needed to succeed in a rapidly changing professional world.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    body: 'A generation of learners who are industry-ready from day one — able to adapt, create and lead in a world shaped by technology and AI.',
  },
  {
    icon: Compass,
    title: 'Our Teaching Philosophy',
    body: 'Learn by doing. We keep theory purposeful, practice frequent and feedback honest, so every concept becomes a skill you can actually use.',
  },
  {
    icon: Layers,
    title: 'Our Learning Approach',
    body: 'Learn, Practice, Build, Grow — a structured journey from understanding concepts to building a portfolio and preparing for real opportunities.',
  },
];

const focus = ['Practical knowledge', 'Digital skills', 'Technology', 'Artificial intelligence', 'Career development'];

export default function About() {
  useSeo({
    title: 'About Us',
    description:
      'K76 Learn is an educational initiative bridging the gap between academic learning and industry requirements through practical, AI-powered, career-focused education.',
  });

  return (
    <>
      <PageHero
        eyebrow="About K76 Learn"
        title={
          <>
            Bridging the gap between <span className="text-gradient">classroom and career.</span>
          </>
        }
        description="K76 Learn is an educational initiative designed to bridge the gap between academic learning and industry requirements."
      />

      <section className="py-16 sm:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="text-3xl leading-tight sm:text-4xl">Education that keeps pace with the real world.</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-400">
              <p>
                Academic programmes build strong foundations, but the professional world moves fast. Tools change, roles evolve and AI is redefining how work
                gets done. Many students graduate without the practical experience employers look for.
              </p>
              <p>
                K76 Learn exists to close that gap. We focus on practical knowledge, digital skills, technology, artificial intelligence and career development
                — taught through hands-on training and real projects.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="card relative overflow-hidden p-8 sm:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-electric-500/25 blur-3xl" aria-hidden="true" />
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-electric-300">What we focus on</p>
              <ul className="mt-6 space-y-4">
                {focus.map((f, i) => (
                  <li key={f} className="flex items-center gap-4 border-b border-white/[0.06] pb-4 last:border-0 last:pb-0">
                    <span className="font-mono text-sm text-slate-500">0{i + 1}</span>
                    <span className="text-xl font-semibold text-white">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-charcoal-900 py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading eyebrow="What drives us" title="Mission, vision and the way we teach." />
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={(i % 2) * 100}>
                  <article className="card group h-full p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 sm:p-10">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient shadow-glow">
                      <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                    </span>
                    <h3 className="mt-6 text-2xl">{p.title}</h3>
                    <p className="mt-3 leading-relaxed text-slate-400">{p.body}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <LearningApproach eyebrow="How we teach" />

      <CtaBanner
        title="Ready to learn what the industry actually needs?"
        description="Talk to us about the right programme for your goals."
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
