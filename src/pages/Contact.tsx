import { Globe, Mail, Phone } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { useSeo } from '@/hooks/useSeo';
import { site, whatsappLink } from '@/config/site';
import { getCourse } from '@/data/courses';
import { categories, tiers } from '@/data/pricing';
import { PageHero } from '@/components/PageHero';
import { EnquiryForm } from '@/components/EnquiryForm';
import { Reveal } from '@/components/Reveal';
import { WhatsAppIcon } from '@/components/SocialIcon';

export default function Contact() {
  useSeo({
    title: 'Contact Us',
    description: 'Enquire about K76 Learn courses. Email hello@k76.in, call or WhatsApp +91 76672 24144, or send us an admission enquiry online.',
  });
  const [params] = useSearchParams();
  const programParam = params.get('program');
  const programExists = categories.some((c) => c.programs.some((p) => p.name === programParam && !p.courseSlug));
  const programCourse = categories.flatMap((c) => c.programs).find((p) => p.name === programParam && p.courseSlug)?.courseSlug;
  const defaultCourse = getCourse(params.get('course') ?? programCourse)?.title ?? (programExists ? programParam! : '');
  const tier = tiers.find((t) => t.id === params.get('plan'));
  const defaultPlan = tier ? `${tier.name} — ${tier.label}` : '';

  const channels = [
    { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
    { icon: Phone, label: 'Phone', value: site.phoneDisplay, href: `tel:${site.phoneE164}` },
    { icon: Globe, label: 'Website', value: `${site.parentBrand.name} (parent brand)`, href: site.parentBrand.url },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact & admissions"
        title={
          <>
            Let&rsquo;s plan your <span className="text-gradient">next step.</span>
          </>
        }
        description="Have a question about a course, batch or career path? Send us an enquiry and our team will get back to you."
      />

      <section className="pb-24">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-start">
          <Reveal className="space-y-4">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-3xl border border-[#25D366]/30 bg-[#25D366]/10 p-6 transition hover:-translate-y-1 hover:border-[#25D366]/60"
            >
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-[#25D366] text-white">
                <WhatsAppIcon className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-lg font-semibold text-white">Enquire on WhatsApp</span>
                <span className="text-sm text-slate-300">Fastest response · {site.phoneDisplay}</span>
              </span>
            </a>

            {channels.map((c) => {
              const Icon = c.icon;
              const external = c.href.startsWith('http');
              return (
                <a
                  key={c.label}
                  href={c.href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="card flex items-center gap-4 p-6 transition hover:-translate-y-1 hover:border-white/20"
                >
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-electric-300">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{c.label}</span>
                    <span className="mt-1 block font-semibold text-white">{c.value}</span>
                  </span>
                </a>
              );
            })}
          </Reveal>

          <Reveal delay={100}>
            <h2 className="sr-only">Admission enquiry form</h2>
            <EnquiryForm key={`${defaultCourse}|${defaultPlan}`} defaultCourse={defaultCourse} defaultPlan={defaultPlan} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
