import { site } from '@/config/site';
import { coursePath, courseTopics, type CourseEntry } from '@/data/catalog';
import { tiers } from '@/data/pricing';

/** Schema.org structured data builders (JSON-LD). */

const abs = (path: string) => site.url + path;

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': `${site.url}/#organization`,
    name: site.name,
    url: `${site.url}/`,
    logo: abs('/logo.png'),
    slogan: site.tagline,
    description: site.description,
    email: site.email,
    telephone: site.phoneE164,
    parentOrganization: { '@type': 'Organization', name: 'K76', url: site.parentBrand.url },
    sameAs: site.socials.filter((s) => s.url).map((s) => s.url),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: item.name, item: abs(item.path) })),
  };
}

export function courseSchema(entry: CourseEntry) {
  const { course, category } = entry;
  const url = abs(coursePath(entry));
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': `${url}#course`,
    name: course.name,
    description: course.short,
    url,
    inLanguage: 'en-IN',
    about: category.title,
    teaches: [...courseTopics(course), ...course.skills],
    provider: { '@type': 'EducationalOrganization', '@id': `${site.url}/#organization`, name: site.name, sameAs: `${site.url}/` },
    offers: tiers
      .filter((t) => course.fees[t.id] !== undefined)
      .map((t) => ({
        '@type': 'Offer',
        name: `${course.name} — ${t.name} (${t.label})`,
        category: 'Paid',
        price: course.fees[t.id],
        priceCurrency: 'INR',
        url,
      })),
  };
}

export function courseListSchema(entries: CourseEntry[], name: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: entries.map((e, i) => ({ '@type': 'ListItem', position: i + 1, url: abs(coursePath(e)), name: e.course.name })),
  };
}
