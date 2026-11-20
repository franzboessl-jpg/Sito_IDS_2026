---
titolo: "Come si scrive un articolo del blog"
descrizione: "Guida interna: il formato dei file Markdown del blog I.D.S. Sicurezza, con titoli, immagini, tabelle e livelli di lettura."
data: 2026-11-20
livello: "In breve"
argomenti: ["guida interna"]
bozza: true
---

Questo articolo è una **bozza di esempio**: compare solo nell'area di prova e non verrà mai pubblicato. Serve come modello per scrivere i nuovi articoli.

## Dove si mette un articolo

Ogni articolo è un file di testo nella cartella `src/content/blog/`. Il nome del file diventa l'indirizzo della pagina: `livelli-protezione-cei-79-3.md` diventa `impiantidisicurezza.it/blog/livelli-protezione-cei-79-3/`. Usate lettere minuscole e trattini, senza accenti né spazi.

## L'intestazione

In cima al file, tra le due righe `---`, ci sono le informazioni dell'articolo:

- **titolo**: il titolo che si vede nella pagina e su Google;
- **descrizione**: due righe di riassunto, che Google mostra sotto il titolo;
- **data**: nel formato anno-mese-giorno;
- **livello**: "In breve", "Come funziona" oppure "Approfondimento tecnico";
- **bozza**: `true` finché l'articolo non è pronto, poi `false`.

## Il testo

Si scrive normalmente. Con `##` all'inizio della riga si crea un titolo di paragrafo, con `###` un sottotitolo. Le parole tra due asterischi diventano **in grassetto**.

### Una tabella

| Livello | Esempio di protezione |
|---|---|
| Perimetrale | Sensori sulla recinzione |
| Esterna | Barriere e rivelatori da esterno |
| Interna | Contatti e volumetrici |

> Le citazioni di una norma o un consiglio importante si scrivono con il simbolo `>` all'inizio della riga.
