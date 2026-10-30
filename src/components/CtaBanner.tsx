import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

type Props = { title: ReactNode; description: ReactNode; actions: ReactNode };

export function CtaBanner({ title, description, actions }: Props) {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-site">
        <Reveal className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-850 px-6 py-16 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(47,123,255,0.35),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.35),transparent_55%)]" />
            <div className="grid-bg absolute inset-0 opacity-60" />
          </div>
          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-3xl leading-tight sm:text-5xl">{title}</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-slate-300">{description}</p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">{actions}</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
