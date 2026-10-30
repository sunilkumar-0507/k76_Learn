import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navLinks, site, whatsappLink } from '@/config/site';
import { Logo } from './Logo';
import { ButtonLink } from './Button';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${isActive ? 'bg-white/[0.07] text-white' : 'text-slate-400 hover:text-white'}`;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || open ? 'border-b border-white/[0.06] bg-ink-950/75 backdrop-blur-xl' : 'border-b border-transparent'
        }`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-ink-950"
        >
          Skip to content
        </a>
        <nav className="container-site flex h-16 items-center justify-between lg:h-[72px]" aria-label="Main">
          <Logo />

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:block">
            <ButtonLink to="/contact" size="sm" arrow>
              Join K76 Learn
            </ButtonLink>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {/* Kept outside <header>: its backdrop-filter would otherwise become the containing block for this fixed panel. */}
      <div
        id="mobile-menu"
        className={`z-[45] lg:hidden ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'} fixed inset-x-0 bottom-0 top-16 bg-ink-950/95 backdrop-blur-xl transition-opacity duration-300`}
        hidden={!open}
      >
        <div className="container-site flex h-full flex-col py-8">
          <ul className="space-y-1">
            {navLinks.map((l, i) => (
              <li key={l.to} className="animate-word-in" style={{ animationDelay: `${i * 50}ms` }}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-2xl px-4 py-4 text-2xl font-semibold transition-colors ${
                      isActive ? 'bg-white/[0.06] text-white' : 'text-slate-300 hover:bg-white/[0.04] hover:text-white'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-auto space-y-3 pb-6">
            <ButtonLink to="/contact" size="lg" arrow className="w-full">
              Join K76 Learn
            </ButtonLink>
            <ButtonLink href={whatsappLink()} variant="secondary" size="lg" className="w-full">
              WhatsApp {site.phoneDisplay}
            </ButtonLink>
          </div>
        </div>
      </div>
    </>
  );
}
