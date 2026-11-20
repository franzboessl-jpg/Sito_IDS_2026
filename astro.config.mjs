// Configurazione del sito I.D.S. Sicurezza
// - SITE_BASE: cartella di pubblicazione (vuota = radice; "/nuovo" = area di prova)
// - STAGING=1: area di prova, le pagine vengono marcate come non indicizzabili
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const staging = process.env.STAGING === '1';

export default defineConfig({
  site: 'https://www.impiantidisicurezza.it',
  base: process.env.SITE_BASE || '/',
  trailingSlash: 'ignore',
  integrations: staging ? [] : [sitemap()],
});
