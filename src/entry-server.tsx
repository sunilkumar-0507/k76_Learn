import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { site } from './config/site';
import { allCourses, categoryPath, coursePath, legacyPaths, visibleCategories } from './data/catalog';
import { HeadContext, headToHtml, type HeadData } from './lib/head';

/** Every public route, used for prerendering and the sitemap. */
export const routes = [
  '/',
  '/about',
  '/courses',
  ...visibleCategories.map(categoryPath),
  ...allCourses.map(coursePath),
  '/fees',
  '/career-development',
  '/why-k76-learn',
  '/contact',
];

export const siteUrl = site.url;
export const redirects = legacyPaths;

export function render(url: string) {
  const store: { data?: HeadData } = {};
  const html = renderToString(
    <StrictMode>
      <HeadContext.Provider value={store}>
        <StaticRouter location={url} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <App />
        </StaticRouter>
      </HeadContext.Provider>
    </StrictMode>,
  );
  return { html, head: store.data ? headToHtml(store.data, `${site.url}/og-image.png`) : '' };
}
