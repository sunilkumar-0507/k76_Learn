// Renders every route to static HTML in dist/, then writes sitemap.xml and robots.txt.
// Runs after the client and SSR builds (see `npm run build`).
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const ssrDir = join(root, 'dist-ssr');

const template = await readFile(join(dist, 'index.html'), 'utf8');
const { render, routes, siteUrl, redirects } = await import(pathToFileURL(join(ssrDir, 'entry-server.js')).href);

function page(url) {
  const { html, head } = render(url);
  return template.replace(/<!--head:start-->[\s\S]*?<!--head:end-->/, head).replace('<div id="root"></div>', `<div id="root">${html}</div>`);
}

for (const url of routes) {
  const file = url === '/' ? join(dist, 'index.html') : join(dist, url, 'index.html');
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, page(url));
}
await writeFile(join(dist, '404.html'), page('/404'));

// Static redirect pages for moved URLs, so old links keep working on any host.
for (const [from, to] of Object.entries(redirects)) {
  const file = join(dist, from, 'index.html');
  await mkdir(dirname(file), { recursive: true });
  await writeFile(
    file,
    `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Moved</title><link rel="canonical" href="${siteUrl}${to}"><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0; url=${to}"></head><body><a href="${to}">This page has moved.</a></body></html>`,
  );
}

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((url) => {
    const priority = url === '/' ? '1.0' : url.split('/').length > 3 ? '0.8' : '0.9';
    return `  <url><loc>${siteUrl}${url}</loc><lastmod>${today}</lastmod><priority>${priority}</priority></url>`;
  })
  .join('\n')}
</urlset>
`;
await writeFile(join(dist, 'sitemap.xml'), sitemap);
await writeFile(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);

await rm(ssrDir, { recursive: true, force: true });
console.log(`Prerendered ${routes.length} pages + 404, sitemap.xml and robots.txt for ${siteUrl}`);
