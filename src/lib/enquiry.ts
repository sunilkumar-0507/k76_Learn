import { site } from '@/config/site';

export type Enquiry = {
  name: string;
  email: string;
  phone: string;
  institution: string;
  course: string;
  plan: string;
  educationLevel: string;
  message: string;
};

export const emptyEnquiry: Enquiry = {
  name: '',
  email: '',
  phone: '',
  institution: '',
  course: '',
  plan: '',
  educationLevel: '',
  message: '',
};

export type EnquiryErrors = Partial<Record<keyof Enquiry, string>>;

export function validateEnquiry(data: Enquiry): EnquiryErrors {
  const errors: EnquiryErrors = {};
  if (data.name.trim().length < 2) errors.name = 'Please enter your full name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email.trim())) errors.email = 'Please enter a valid email address.';
  const digits = data.phone.replace(/\D/g, '');
  if (digits.length < 10 || digits.length > 15) errors.phone = 'Please enter a valid phone number.';
  if (!data.course) errors.course = 'Please choose a course.';
  if (!data.educationLevel) errors.educationLevel = 'Please select your education level.';
  return errors;
}

export function enquiryToText(data: Enquiry) {
  return [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `College / Institution: ${data.institution || '-'}`,
    `Course: ${data.course}`,
    `Preferred track: ${data.plan || '-'}`,
    `Education level: ${data.educationLevel}`,
    `Message: ${data.message || '-'}`,
  ].join('\n');
}

export type SubmitResult = { channel: 'api' | 'email' };

/**
 * Sends an enquiry.
 *
 * If `VITE_ENQUIRY_ENDPOINT` is set, the enquiry is POSTed there as JSON
 * (works with Formspree, Getform, a serverless function, a CRM webhook, etc.).
 * Otherwise the visitor's email app opens with the enquiry pre-filled.
 */
export async function submitEnquiry(data: Enquiry): Promise<SubmitResult> {
  const endpoint = import.meta.env.VITE_ENQUIRY_ENDPOINT;

  if (endpoint) {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...data, source: window.location.pathname, submittedAt: new Date().toISOString() }),
    });
    if (!res.ok) throw new Error(`Enquiry request failed with status ${res.status}`);
    return { channel: 'api' };
  }

  const subject = `K76 Learn enquiry — ${data.course}`;
  window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(enquiryToText(data))}`;
  return { channel: 'email' };
}
