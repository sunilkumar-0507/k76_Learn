# K76 Learn

Website for **K76 Learn** — *Learn Skills. Build Your Future.* Built with React, TypeScript, Vite, Tailwind CSS and React Router.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # type-check + production build to dist/
npm run preview   # serve the production build
```

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About Us |
| `/courses` | Every course, grouped by category |
| `/courses/<category>` | Category page: its courses, fee table and who can join |
| `/courses/<category>/<course>` | Course page: overview, syllabus, skills, projects, track fees and enquiry form |
| `/fees` | Learning tracks (Basic / Advanced / Premium), value pillars and every fee table |
| `/career-development` | Career Development |
| `/why-k76-learn` | Why K76 Learn? |
| `/contact` | Contact & admission enquiry (`?course=<course slug>` and `?plan=basic\|advanced\|premium` pre-fill the form) |

Categories: `design-creative`, `digital-marketing`, `programming-development`, `data-analytics`, `ai-emerging-technologies`, `bundles`.

## Updating content

All copy lives in plain data files, so most updates need no component changes:

- **`src/data/catalog.ts`** — the course catalogue. Each category lists its courses, and each course holds its overview, topics, skills, projects, fees and optional `logistics`.
  - Add a course to a category's `courses` array and it automatically gets a page, appears on the Courses, category and Fees pages, in the enquiry form and in the sitemap.
  - `logistics.duration`, `mode` and `certification` read **"Shared on enquiry"** until set, e.g. `logistics: { duration: '12 weeks' }`.
  - Set `available: false` on a course to hide it everywhere without deleting it.
  - Bundles list the courses they include in `includes`.
- **`src/data/pricing.ts`** — the three learning tracks, value pillars and the fee note.
- **`src/config/site.ts`** — site URL, brand name, email, phone, WhatsApp number, parent brand link, social profile URLs (a network appears in the footer once its `url` is filled in) and nav links.
- **`src/data/content.ts`** — Why K76 Learn benefits, learning steps, AI use cases, career highlights and the education levels in the form.

## SEO

- **Prerendered HTML:** `npm run build` renders every route to static HTML (`dist/<route>/index.html`), so search engines and social previews see full content without running JavaScript. React then hydrates the page in the browser.
- **Per-page metadata:** each page sets a unique `<title>`, meta description, canonical URL, Open Graph and Twitter tags (`src/hooks/useSeo.ts`).
- **Structured data (JSON-LD):** `EducationalOrganization` on every page, `Course` with INR offers for each track on course pages, `BreadcrumbList` on inner pages and `ItemList` on course listings (`src/lib/schema.ts`).
- **Sitemap and robots:** `dist/sitemap.xml` and `dist/robots.txt` are generated from the catalogue at build time.
- **Moved URLs:** old course links (e.g. `/courses/ui-ux-design`) redirect to their new address (`legacyPaths` in `catalog.ts`).
- **Site URL:** canonical URLs, structured data and the sitemap use `site.url`, which defaults to `https://learn.k76.in`. Set `VITE_SITE_URL` when building if the site lives elsewhere.

After launch, submit `<site url>/sitemap.xml` in Google Search Console.

## Enquiry form

The form validates input and then:

1. **With a backend:** set `VITE_ENQUIRY_ENDPOINT` (see `.env.example`). The form POSTs JSON
   `{ name, email, phone, institution, course, educationLevel, message, source, submittedAt }` to that URL. It works with Formspree, Getform, a serverless function or a CRM webhook. Any non-2xx response shows an error.
2. **Without a backend:** the visitor's email app opens with the enquiry addressed to `hello@k76.in`.

An **Enquire on WhatsApp** button sends the same details to the WhatsApp number in `site.ts`. A floating WhatsApp button is also on every page.

The logic lives in `src/lib/enquiry.ts`.

## Deployment

The build in `dist/` is a static site with one HTML file per page plus `404.html`, so it works on Netlify, Vercel, Cloudflare Pages, GitHub Pages or any static host without rewrite rules.

## Logo and icons

The logo source is `branding/k76-logo-source.jpg`. `python3 scripts/build-icons.py` (needs Pillow) crops the logo tile, removes the background and writes `logo.png`, `logo-mark.webp/png`, `favicon.ico/png` and `apple-touch-icon.png` into `public/`. To change the logo, replace the source image (adjust `TILE_BOX` in the script if the framing differs) and run the script again. `public/og-image.png` is the 1200×630 social sharing image.

## Notes

- Illustrations are inline SVG/CSS, so there are no image downloads.
- Animations respect `prefers-reduced-motion`. Navigation, forms and the mobile menu are keyboard- and screen-reader-accessible.
