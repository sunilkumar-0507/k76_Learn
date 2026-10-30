import { Link } from 'react-router-dom';
import { Mail, Phone, Globe } from 'lucide-react';
import { navLinks, site, whatsappLink } from '@/config/site';
import { categoryPath, visibleCategories } from '@/data/catalog';
import { Logo } from './Logo';
import { SocialIcon, WhatsAppIcon } from './SocialIcon';

export function Footer() {
  const socials = site.socials.filter((s) => s.url);
  const quickLinks = [...navLinks.slice(0, 3), { label: 'Why K76 Learn?', to: '/why-k76-learn' }, ...navLinks.slice(3)];

  return (
    <footer className="relative border-t border-white/[0.06] bg-ink-900">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric-500/50 to-transparent" />
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
            {site.tagline} K76 Learn is an initiative by{' '}
            <a href={site.parentBrand.url} target="_blank" rel="noopener noreferrer" className="text-slate-200 underline-offset-4 hover:underline">
              {site.parentBrand.name}
            </a>{' '}
            helping students build practical, industry-ready skills in technology, design, marketing, AI and careers.
          </p>
          <div className="mt-6 flex gap-2">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition hover:-translate-y-0.5 hover:border-white/25 hover:text-white"
              >
                <SocialIcon name={s.name} className="h-4 w-4" />
              </a>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition hover:-translate-y-0.5 hover:border-[#25D366]/60 hover:text-[#25D366]"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <FooterColumn title="Quick links" className="lg:col-span-2">
          {quickLinks.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="text-sm text-slate-400 transition hover:text-white">
                {l.label}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Courses" className="lg:col-span-3">
          {visibleCategories.map((c) => (
            <li key={c.slug}>
              <Link to={categoryPath(c)} className="text-sm text-slate-400 transition hover:text-white">
                {c.title}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Contact" className="lg:col-span-3">
          <li>
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-sm text-slate-400 transition hover:text-white">
              <Mail className="h-4 w-4 text-electric-400" aria-hidden="true" /> {site.email}
            </a>
          </li>
          <li>
            <a href={`tel:${site.phoneE164}`} className="flex items-center gap-3 text-sm text-slate-400 transition hover:text-white">
              <Phone className="h-4 w-4 text-electric-400" aria-hidden="true" /> {site.phoneDisplay}
            </a>
          </li>
          <li>
            <a
              href={site.parentBrand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-slate-400 transition hover:text-white"
            >
              <Globe className="h-4 w-4 text-electric-400" aria-hidden="true" /> {site.parentBrand.name}
            </a>
          </li>
        </FooterColumn>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>
            A {site.parentBrand.name} initiative · {site.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, className, children }: { title: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">{title}</h2>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  );
}
