// Articoli del blog: un file Markdown per articolo in src/content/blog/
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    titolo: z.string(),
    descrizione: z.string(),             // riassunto per Google e per l'elenco articoli
    data: z.coerce.date(),
    aggiornato: z.coerce.date().optional(),
    immagine: z.string().optional(),     // es. /assets/blog/nome-foto.webp
    immagineAlt: z.string().optional(),
    argomenti: z.array(z.string()).default([]),
    livello: z.enum(['In breve', 'Come funziona', 'Approfondimento tecnico']).default('Come funziona'),
    bozza: z.boolean().default(false),   // true = visibile solo nell'area di prova
  }),
});

export const collections = { blog };
