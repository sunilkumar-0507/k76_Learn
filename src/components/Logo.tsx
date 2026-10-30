import { Link } from 'react-router-dom';

export function LogoMark({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="k76-logo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2f7bff" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#k76-logo)" />
      <path d="M18 16h7v13l11-13h9L33 30l13 18h-9l-9-13-3 3v10h-7z" fill="#fff" />
    </svg>
  );
}

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link to="/" onClick={onClick} className="group flex items-center gap-2.5 rounded-lg" aria-label="K76 Learn — home">
      <LogoMark className="h-9 w-9 transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-105" />
      <span className="text-lg font-extrabold tracking-tight text-white">
        K76 <span className="text-gradient">Learn</span>
      </span>
    </Link>
  );
}
