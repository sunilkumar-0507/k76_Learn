import { Award, Briefcase, ClipboardCheck, FolderKanban, GraduationCap, UserRoundCheck } from 'lucide-react';
import { valuePillars } from '@/data/pricing';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const icons = [GraduationCap, FolderKanban, UserRoundCheck, Award, ClipboardCheck, Briefcase];

export function ValuePillars() {
  return (
    <section className="relative bg-charcoal-900 py-20 sm:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="The K76 Learn standard"
          title={
            <>
              What your investment <span className="text-gradient">delivers.</span>
            </>
          }
          description="Every programme is built on the same standard — professional trainers, advanced projects and outcomes you can show."
        />
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {valuePillars.map((v, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={v.title} delay={(i % 3) * 80}>
                <div className="card h-full p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
                  <Icon className="h-6 w-6 text-electric-400" aria-hidden="true" />
                  <h3 className="mt-5 text-lg">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{v.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
