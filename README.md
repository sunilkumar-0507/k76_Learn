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
| `/courses` | Course listing with filter tabs (`?course=<slug>`) |
| `/courses/:slug` | Course detail + enquiry form |
| `/career-development` | Career Development |
| `/why-k76-learn` | Why K76 Learn? |
| `/contact` | Contact & admission enquiry (`?course=<slug>` pre-selects a course) |

## Updating content

All copy lives in plain data files, so most updates need no component changes:

- **`src/config/site.ts`** — brand name, email, phone, WhatsApp number, parent brand link, social profile URLs (a network appears in the footer once its `url` is filled in), nav links.
- **`src/data/courses.ts`** — every course: overview, topics, skills, projects, who can join, and `logistics`.
  - `duration`, `fees`, `certification` and `mode` are intentionally `null`. Each one reads **"Shared on enquiry"** until you set a value, e.g. `duration: '12 weeks'`.
- **`src/data/content.ts`** — Why K76 Learn benefits, learning steps, AI use cases, career highlights and the education levels in the form.

## Enquiry form

The form validates input and then:

1. **With a backend:** set `VITE_ENQUIRY_ENDPOINT` (see `.env.example`). The form POSTs JSON
   `{ name, email, phone, institution, course, educationLevel, message, source, submittedAt }` to that URL. It works with Formspree, Getform, a serverless function or a CRM webhook. Any non-2xx response shows an error.
2. **Without a backend:** the visitor's email app opens with the enquiry addressed to `hello@k76.in`.

An **Enquire on WhatsApp** button sends the same details to the WhatsApp number in `site.ts`. A floating WhatsApp button is also on every page.

The logic lives in `src/lib/enquiry.ts`.

## Deployment

The build is a static SPA in `dist/`. SPA fallbacks are included for Netlify (`public/_redirects`) and Vercel (`vercel.json`). On other hosts, rewrite unknown paths to `/index.html`.

## Notes

- Page titles, meta descriptions, Open Graph tags and canonical URLs are set per route by `src/hooks/useSeo.ts`.
- Illustrations are inline SVG/CSS, so there are no image downloads. Routes other than Home are lazy-loaded.
- Animations respect `prefers-reduced-motion`. Navigation, forms and the mobile menu are keyboard- and screen-reader-accessible.
