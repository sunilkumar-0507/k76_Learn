import { createContext } from 'react';

export type HeadData = {
  title: string;
  description: string;
  canonical: string;
  jsonLd: object[];
  noindex: boolean;
};

/**
 * During prerendering, pages write their head data into this store so the
 * build script can inject it into the static HTML. In the browser it is null
 * and `useSeo` updates `document.head` directly.
 */
export const HeadContext = createContext<{ data?: HeadData } | null>(null);

const escapeHtml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Serialises head data to HTML tags (used by the prerender script). */
export function headToHtml(h: HeadData, ogImage: string) {
  const t = escapeHtml(h.title);
  const d = escapeHtml(h.description);
  return [
    `<title>${t}</title>`,
    `<meta name="description" content="${d}" />`,
    h.noindex ? '<meta name="robots" content="noindex" />' : '',
    `<link rel="canonical" href="${h.canonical}" />`,
    `<meta property="og:title" content="${t}" />`,
    `<meta property="og:description" content="${d}" />`,
    `<meta property="og:url" content="${h.canonical}" />`,
    `<meta property="og:image" content="${ogImage}" />`,
    `<meta name="twitter:title" content="${t}" />`,
    `<meta name="twitter:description" content="${d}" />`,
    `<meta name="twitter:image" content="${ogImage}" />`,
    ...h.jsonLd.map((j) => `<script type="application/ld+json">${JSON.stringify(j).replace(/</g, '\\u003c')}</script>`),
  ]
    .filter(Boolean)
    .join('\n    ');
}
