import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type Variant = 'primary' | 'secondary' | 'ghost';

const base =
  'group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 disabled:cursor-not-allowed disabled:opacity-60';

const variants: Record<Variant, string> = {
  primary: 'bg-brand-gradient bg-[length:200%_200%] text-white shadow-glow hover:-translate-y-0.5 hover:bg-right hover:shadow-glow-violet',
  secondary: 'border border-white/15 bg-white/[0.04] text-white backdrop-blur hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.08]',
  ghost: 'text-electric-300 hover:text-white',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: keyof typeof sizes;
  arrow?: boolean;
  className?: string;
};

function Inner({ children, arrow }: { children: ReactNode; arrow?: boolean }) {
  return (
    <>
      {children}
      {arrow && <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />}
    </>
  );
}

export function ButtonLink({
  to,
  href,
  children,
  variant = 'primary',
  size = 'md',
  arrow,
  className = '',
  onClick,
}: CommonProps & { to?: string; href?: string; onClick?: () => void }) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (href) {
    const external = /^https?:/.test(href);
    return (
      <a href={href} className={cls} onClick={onClick} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        <Inner arrow={arrow}>{children}</Inner>
      </a>
    );
  }
  return (
    <Link to={to ?? '/'} className={cls} onClick={onClick}>
      <Inner arrow={arrow}>{children}</Inner>
    </Link>
  );
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  arrow,
  className = '',
  ...rest
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      <Inner arrow={arrow}>{children}</Inner>
    </button>
  );
}
