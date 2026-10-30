import { ButtonLink } from '../Button';
import { HeroVisual } from '../HeroVisual';
import { RotatingWords } from '../RotatingWords';
import { Backdrop } from '../PageHero';
import { courses } from '@/data/courses';

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-28 sm:pt-36 lg:pb-24 lg:pt-40">
      <Backdrop />
      <div className="container-site relative grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
        <div className="animate-word-in">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-electric-400 shadow-[0_0_10px_#38bdf8]" /> Learn Skills. Build Your Future.
          </span>
          <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[1.02] sm:text-6xl lg:text-[4.6rem]">
            DON&rsquo;T JUST LEARN.
            <br />
            <span className="text-gradient bg-[length:200%_auto] animate-gradient-pan">BUILD YOUR FUTURE.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            Master in-demand digital skills, explore the power of AI, build real-world projects and prepare yourself for the careers of tomorrow.
          </p>

          <div className="mt-8 text-2xl font-bold text-white sm:text-3xl">
            <RotatingWords words={['Learn.', 'Build.', 'Create.', 'Innovate.', 'Grow.']} />
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/courses" size="lg" arrow>
              Explore Our Courses
            </ButtonLink>
            <ButtonLink to="/contact" variant="secondary" size="lg">
              Start Your Journey
            </ButtonLink>
          </div>

          <ul className="mt-12 flex flex-wrap gap-2" aria-label="Programmes">
            {courses.map((c) => (
              <li key={c.slug} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-slate-400">
                {c.title}
              </li>
            ))}
          </ul>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
