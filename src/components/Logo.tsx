import { Link } from 'react-router-dom';

/** The K76 logo tile. Generated from branding/k76-logo-source.jpg by scripts/build-icons.py. */
export function LogoMark({ className = 'h-10 w-10' }: { className?: string }) {
  return <img src="/logo-mark.webp" alt="" width={160} height={160} decoding="async" className={className} />;
}

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link to="/" onClick={onClick} className="group flex items-center gap-2.5 rounded-lg" aria-label="K76 Learn — home">
      <LogoMark className="h-10 w-10 transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-105" />
      <span className="text-lg font-extrabold tracking-tight text-white">
        K76 <span className="text-gradient">Learn</span>
      </span>
    </Link>
  );
}
