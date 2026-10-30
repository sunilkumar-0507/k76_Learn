import type { ElementType, ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

type Props = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
};

export function Reveal({ children, as: Tag = 'div', delay = 0, className = '' }: Props) {
  const ref = useReveal<HTMLElement>();
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </Tag>
  );
}
