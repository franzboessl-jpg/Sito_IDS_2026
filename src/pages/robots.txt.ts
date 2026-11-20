// robots.txt: in produzione apre tutto e indica la sitemap; nell'area di prova blocca tutto
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const staging = process.env.STAGING === '1';
  const testo = staging
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', site).href}\n`;
  return new Response(testo, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
