import { useId, useState } from 'react';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import { visibleCategories, visibleCourses } from '@/data/catalog';
import { educationLevels } from '@/data/content';
import { tiers } from '@/data/pricing';
import { whatsappLink } from '@/config/site';
import { emptyEnquiry, enquiryToText, submitEnquiry, validateEnquiry, type Enquiry, type EnquiryErrors } from '@/lib/enquiry';
import { Button } from './Button';
import { WhatsAppIcon } from './SocialIcon';

type Status = 'idle' | 'submitting' | 'success-api' | 'success-email' | 'error';

type Props = { defaultCourse?: string; defaultPlan?: string; compact?: boolean };

const planOptions = [...tiers.map((t) => `${t.name} — ${t.label}`), 'Not sure yet'];

export function EnquiryForm({ defaultCourse = '', defaultPlan = '', compact = false }: Props) {
  const uid = useId();
  const [data, setData] = useState<Enquiry>({ ...emptyEnquiry, course: defaultCourse, plan: defaultPlan });
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [status, setStatus] = useState<Status>('idle');

  const update = (key: keyof Enquiry) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setData((d) => ({ ...d, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validateEnquiry(data);
    setErrors(found);
    const firstError = Object.keys(found)[0];
    if (firstError) {
      document.getElementById(`${uid}-${firstError}`)?.focus();
      return;
    }
    setStatus('submitting');
    try {
      const { channel } = await submitEnquiry(data);
      setStatus(channel === 'api' ? 'success-api' : 'success-email');
      if (channel === 'api') setData({ ...emptyEnquiry, course: defaultCourse, plan: defaultPlan });
    } catch {
      setStatus('error');
    }
  }

  const waMessage = `Hi K76 Learn, I'd like to enquire about a course.\n\n${enquiryToText(data)}`;

  if (status === 'success-api') {
    return (
      <div className="card flex flex-col items-center p-10 text-center" role="status">
        <CheckCircle2 className="h-12 w-12 text-emerald-400" aria-hidden="true" />
        <h3 className="mt-5 text-2xl">Thank you — enquiry received!</h3>
        <p className="mt-3 max-w-md text-slate-400">Our team will get in touch with you shortly. For a faster response, message us on WhatsApp.</p>
        <Button variant="secondary" className="mt-6" onClick={() => setStatus('idle')}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  const field = (key: keyof Enquiry) => ({
    id: `${uid}-${key}`,
    name: key,
    value: data[key],
    onChange: update(key),
    'aria-invalid': errors[key] ? true : undefined,
    'aria-describedby': errors[key] ? `${uid}-${key}-error` : undefined,
    className: `field ${errors[key] ? 'border-rose-400/70' : ''}`,
  });

  return (
    <form onSubmit={onSubmit} noValidate className={`card relative ${compact ? 'p-6 sm:p-8' : 'p-6 sm:p-10'}`}>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Student Name" htmlFor={`${uid}-name`} error={errors.name} errorId={`${uid}-name-error`} required>
          <input type="text" autoComplete="name" placeholder="Your full name" {...field('name')} />
        </Field>
        <Field label="Email Address" htmlFor={`${uid}-email`} error={errors.email} errorId={`${uid}-email-error`} required>
          <input type="email" autoComplete="email" placeholder="you@example.com" {...field('email')} />
        </Field>
        <Field label="Phone Number" htmlFor={`${uid}-phone`} error={errors.phone} errorId={`${uid}-phone-error`} required>
          <input type="tel" autoComplete="tel" inputMode="tel" placeholder="+91 98765 43210" {...field('phone')} />
        </Field>
        <Field label="College / Institution" htmlFor={`${uid}-institution`}>
          <input type="text" autoComplete="organization" placeholder="Where do you study?" {...field('institution')} />
        </Field>
        <Field label="Course Interested In" htmlFor={`${uid}-course`} error={errors.course} errorId={`${uid}-course-error`} required>
          <select {...field('course')}>
            <option value="" disabled>
              Select a course
            </option>
            {visibleCategories.map((cat) => (
              <optgroup key={cat.slug} label={cat.title}>
                {visibleCourses(cat).map((c) => (
                  <option key={c.slug} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </optgroup>
            ))}
            <option value="Not sure yet">Not sure yet — need guidance</option>
          </select>
        </Field>
        <Field label="Current Education Level" htmlFor={`${uid}-educationLevel`} error={errors.educationLevel} errorId={`${uid}-educationLevel-error`} required>
          <select {...field('educationLevel')}>
            <option value="" disabled>
              Select your level
            </option>
            {educationLevels.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </Field>
        <fieldset className="sm:col-span-2">
          <legend className="mb-2 block text-sm font-medium text-slate-200">Preferred Track</legend>
          <div className="flex flex-wrap gap-2">
            {planOptions.map((option) => {
              const checked = data.plan === option;
              return (
                <label
                  key={option}
                  className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-electric-400 ${
                    checked ? 'border-transparent bg-brand-gradient text-white' : 'border-white/10 bg-ink-900/70 text-slate-300 hover:border-white/25'
                  }`}
                >
                  <input type="radio" name="plan" value={option} checked={checked} onChange={update('plan')} className="sr-only" />
                  {option}
                </label>
              );
            })}
          </div>
        </fieldset>
        <Field label="Message" htmlFor={`${uid}-message`} className="sm:col-span-2">
          <textarea rows={4} placeholder="Tell us about your goals or questions…" {...field('message')} />
        </Field>
      </div>

      {status === 'success-email' && (
        <p className="mt-6 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200" role="status">
          Your email app should now be open with your enquiry ready to send. Prefer chat? Use the WhatsApp button below.
        </p>
      )}
      {status === 'error' && (
        <p className="mt-6 rounded-xl border border-rose-400/30 bg-rose-400/10 px-4 py-3 text-sm text-rose-200" role="alert">
          Something went wrong while sending your enquiry. Please try again or reach us on WhatsApp.
        </p>
      )}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button type="submit" size="lg" disabled={status === 'submitting'} className="sm:flex-1">
          {status === 'submitting' ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Send className="h-4 w-4" aria-hidden="true" />}
          {status === 'submitting' ? 'Sending…' : 'Submit Enquiry'}
        </Button>
        <a
          href={whatsappLink(waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-7 py-3.5 text-base font-semibold text-[#5ee597] transition hover:-translate-y-0.5 hover:bg-[#25D366]/20 sm:flex-1"
        >
          <WhatsAppIcon className="h-5 w-5" /> Enquire on WhatsApp
        </a>
      </div>
      <p className="mt-4 text-xs text-slate-500">Fields marked * are required. We only use your details to respond to your enquiry.</p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  errorId,
  required,
  className = '',
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  errorId?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-slate-200">
        {label} {required && <span className="text-electric-400">*</span>}
      </label>
      {children}
      {error && (
        <p id={errorId} className="mt-1.5 text-xs text-rose-300">
          {error}
        </p>
      )}
    </div>
  );
}
