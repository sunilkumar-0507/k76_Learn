import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'center' | 'left';
  as?: 'h1' | 'h2';
};

export function SectionHeading({ eyebrow, title, description, align = 'center', as: H = 'h2' }: Props) {
  const center = align === 'center';
  return (
    <Reveal className={`${center ? 'mx-auto text-center' : ''} max-w-3xl`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <H className={`mt-5 text-3xl leading-[1.1] sm:text-4xl lg:text-5xl ${H === 'h1' ? 'lg:text-6xl' : ''}`}>{title}</H>
      {description && <p className={`mt-5 text-base leading-relaxed text-slate-400 sm:text-lg ${center ? 'mx-auto' : ''} max-w-2xl`}>{description}</p>}
    </Reveal>
  );
}
