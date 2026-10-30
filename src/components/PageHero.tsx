import type { ReactNode } from 'react';

type Props = { eyebrow: string; title: ReactNode; description: ReactNode; children?: ReactNode };

export function PageHero({ eyebrow, title, description, children }: Props) {
  return (
    <section className="relative overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-40">
      <Backdrop />
      <div className="container-site relative">
        <div className="max-w-3xl animate-word-in">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mt-6 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">{description}</p>
          {children}
        </div>
      </div>
    </section>
  );
}

export function Backdrop() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="grid-bg absolute inset-0" />
      <div className="absolute -left-40 -top-40 h-[480px] w-[480px] rounded-full bg-electric-500/20 blur-[120px]" />
      <div className="absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-violet-600/20 blur-[120px]" />
    </div>
  );
}
