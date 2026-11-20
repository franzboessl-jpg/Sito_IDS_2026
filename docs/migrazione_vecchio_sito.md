# Migrazione dal vecchio sito (Xara, 2019)

Backup scaricato il 20/11/2026: `Z:\SITO WEB I.D.S\2026\Backup\backup_sito_2026-11-20.zip` (452 file, 137 MB, archivio verificato integro). Ultima pubblicazione del vecchio sito: 30/10/2019.

## Pagine del vecchio sito → reindirizzamenti 301 al lancio

| Vecchio indirizzo | Nuovo indirizzo (proposta) |
|---|---|
| `/index.htm` | `/` |
| `/micropoint.htm` | pagina Protezione perimetrale – MicroPoint (in Sistemi avanzati) |
| `/microtrack.htm` | pagina Protezione perimetrale – MicroTrack (in Sistemi avanzati) |
| `/videoanalisi.htm` | pagina Videoanalisi (in Sistemi avanzati o Videosorveglianza) |
| `/blog.htm` | `/blog/` |
| `/privacy.htm` | `/privacy/` |
| `/sitemap.xml` | `/sitemap-index.xml` |

Le pagine Antintrusione, Perimetrali, Videosorveglianza, Chi siamo e Contatti erano sezioni interne di `index.htm` (ancore), non pagine separate.

## File da conservare al lancio

- `google671c61b69101100e.html` – file di verifica di **Google Search Console** già esistente: va lasciato nella radice, così la proprietà resta verificata.
## Da non riportare nel nuovo sito

- `progs/` – vecchi software per i clienti (Raptor, ADPRO PIR): non più necessari (decisione del 20/11/2026).
- `temp/evento29-10-19.mp4` – video dell'evento 2019: non più necessario (resta nel backup).

- `._htaccess` – residuo di una vecchia installazione Drupal, non attivo (il nome non è `.htaccess`).
- `index_htm_files/` – immagini e script generati da Xara.
- `index.xhl` – file di lavoro di Xara.
