# Sito I.D.S. Sicurezza – impiantidisicurezza.it (versione 2026)

Nuovo sito di I.D.S. Sicurezza – Impianti di Sicurezza, Folignano (AP). Sito statico generato con [Astro](https://astro.build), senza database.

## Struttura
| Percorso | Contenuto |
|---|---|
| `src/pages/` | Le pagine: `index.astro` è la landing (v3.4 approvata il 20/11/2026) |
| `src/content/blog/` | Gli articoli del blog, un file Markdown per articolo |
| `src/layouts/Base.astro` | Struttura comune: SEO, dati strutturati, piè di pagina |
| `src/components/` | Intestazione e piè di pagina |
| `src/site.ts` | Dati aziendali (indirizzi, telefoni, P.IVA) usati in tutto il sito |
| `public/assets/` | Immagini ottimizzate (WebP ~1800 px), loghi, favicon |
| `docs/IDS_sito_brief.md` | Brief di progetto e decisioni tecniche |

## Comandi
```
npm install            # la prima volta
npm run dev            # anteprima locale su http://localhost:4321
npm run build          # sito definitivo in dist/
npm run build:prova    # area di prova /nuovo/, non indicizzabile
```

## Regole
- Nel repository vanno solo i file pronti per il web. Gli originali (PNG generati, foto grandi) restano su `Z:\SITO WEB I.D.S\2026`.
- Logo sempre ufficiale, mai ridisegnato.
- Testi in italiano con gli accenti corretti.
- Articoli del blog: vedi la bozza di esempio `src/content/blog/come-si-scrive-un-articolo.md`.

© I.D.S. Sicurezza
