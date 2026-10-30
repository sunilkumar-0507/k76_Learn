import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { site } from '@/config/site';
import { HeadContext, type HeadData } from '@/lib/head';
import { organizationSchema } from '@/lib/schema';

type Seo = {
  title: string;
  description: string;
  /** Page-specific structured data (the organisation schema is always added). */
  jsonLd?: object[];
  noindex?: boolean;
};

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export function pageTitle(title: string) {
  return title === site.name ? `${site.name} | ${site.tagline}` : `${title} | ${site.name}`;
}

/** Returns the first candidate whose full page title fits search-result limits (~60–70 characters). */
export function fitTitle(...candidates: string[]) {
  return candidates.find((c) => pageTitle(c).length <= 68) ?? candidates[candidates.length - 1];
}

/**
 * Sets the title, meta description, canonical URL, Open Graph tags and
 * JSON-LD structured data for the current page — in the static HTML at build
 * time and in the browser on client-side navigation.
 */
export function useSeo({ title, description, jsonLd = [], noindex = false }: Seo) {
  const { pathname } = useLocation();
  const store = useContext(HeadContext);
  const data: HeadData = {
    title: pageTitle(title),
    description,
    canonical: site.url + (pathname === '/' ? '/' : pathname.replace(/\/$/, '')),
    jsonLd: [organizationSchema(), ...jsonLd],
    noindex,
  };
  if (store) store.data = data;

  const jsonLdKey = JSON.stringify(data.jsonLd);

  useEffect(() => {
    document.title = data.title;
    setMeta('name', 'description', data.description);
    setMeta('property', 'og:title', data.title);
    setMeta('property', 'og:description', data.description);
    setMeta('property', 'og:url', data.canonical);
    setMeta('name', 'twitter:title', data.title);
    setMeta('name', 'twitter:description', data.description);

    const robots = document.head.querySelector('meta[name="robots"]');
    if (noindex && !robots) setMeta('name', 'robots', 'noindex');
    if (!noindex) robots?.remove();

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = data.canonical;

    document.head.querySelectorAll('script[type="application/ld+json"]').forEach((el) => el.remove());
    for (const item of data.jsonLd) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(item);
      document.head.appendChild(script);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.title, data.description, data.canonical, noindex, jsonLdKey]);
}
