# Sito I.D.S. Sicurezza – Brief di progetto

Documento di riferimento per il rinnovo del sito **impiantidisicurezza.it**. Stato al 20 novembre 2026: **landing page definita** (versione v3).

## 1. Contesto

- **Azienda**: I.D.S. Sicurezza – Impianti di Sicurezza, Folignano (AP), dal 1975. Integratore di sistemi.
- **Sede e stabilimento**: Zona Ind.le Piane di Morro, 63084 Folignano (AP), tel. 0736 390049 – 0736 491203.
- **Uffici e logistica**: Via del Lavoro 1, 63076 Monteprandone (AP), tel. 0735 703473.
- **E-mail**: info@impiantidisicurezza.it – P.IVA 02248560449.
- **Hosting**: United Host. Il sito attuale è stato fatto con Magix Xara Web Designer e va sostituito.
- **Obiettivo**: un sito articolato su più livelli. Chi cerca poche informazioni le trova subito; chi vuole approfondire trova contenuti tecnici, soluzioni particolari e non convenzionali. Il sito include un blog.

## 2. Identità visiva

### Logo
- Usare sempre il **logo ufficiale**, mai ridisegnato.
- `logo-ids-bianco.png` (+ `@2x`): versione bianca trasparente per fondi scuri.
- `logo-ids-blu.png`: originale blu per fondi chiari.
- Il file ufficiale disponibile è piccolo (160 × 123 px): se esiste una versione vettoriale o più grande, va sostituita.

### Palette "blu acciaio"
| Ruolo | Nome | Hex |
|---|---|---|
| Fondo più scuro | Blu notte | `#0A1A2E` |
| Blu del logo | Blu istituzionale | `#002950` |
| Fondo principale | Blu acciaio scuro | `#1C4467` |
| Colore guida | Blu acciaio | `#3A6A93` |
| Pulsanti e collegamenti | Acciaio luminoso | `#4A90D9` |
| Linee, icone secondarie | Acciaio chiaro | `#8FB0CC` |
| Fondi chiari | Ghiaccio | `#E3ECF4` |
| Testo su fondo chiaro | Grafite | `#1E2A36` |

Regola: sezioni "Casa" verso i toni chiari della scala, sezioni tecniche e difesa verso i toni scuri.

### Caratteri
- **Montserrat** (600/700) per titoli, voci di menu e pulsanti.
- **Inter** per i testi lunghi (articoli, pagine tecniche).

| Elemento | Computer | Cellulare |
|---|---|---|
| H1 | 48 px | 32 px |
| H2 | 36 px | 26 px |
| H3 | 26 px | 21 px |
| Testo | 18 px, interlinea 1,6 | 17 px |
| Riga sotto il logo | 15 px, maiuscolo spaziato | 12 px |
| Logo (altezza) | 76–112 px | 48–80 px |

### Fotografie
- Stile: ora blu dopo il tramonto, luci artificiali calde accese, color correction fredda blu acciaio, nessun testo nelle foto.
- Le foto si generano con ChatGPT o Google Flow (Nano Banana); le correzioni di colore, luce, ritaglio e peso le fa Claude, così il contenuto non cambia.
- Ogni foto nuova va **equalizzata sui toni della villa** (`casa.webp`) per restare coerente.
- Formato per il web: WebP, circa 1800 px di larghezza.

## 3. Landing page (definita)

File: `index.html` + cartella `assets/` (pacchetto `IDS_landing_web_v3.zip`).

- Logo bianco in alto, riga "Ingegneria della sicurezza e integrazione dei sistemi", titolo "Ogni esigenza di sicurezza merita la soluzione giusta."
- **Due schede grandi**, cliccabili per intero (senza pulsanti, effetto al passaggio del mouse):
  - **Casa e attività** → `casa.html` – "Soluzioni chiare, affidabili e su misura per abitazioni, negozi e uffici." – foto villa con ulivo.
  - **Sistemi avanzati** → `sistemi-avanzati.html` – "Infrastrutture, industria, difesa e protezioni specialistiche." – foto recinzione con scatola INTREPID e telecamera dome.
- **Sei schede attività** su una riga (3 per riga su tablet, 2 su cellulare): Antintrusione, Videosorveglianza, Antincendio, Controllo accessi, Domotica, Cablaggio strutturato → `antintrusione.html`, `videosorveglianza.html`, `antincendio.html`, `controllo-accessi.html`, `domotica.html`, `cablaggio-strutturato.html`.
- Scelta confermata: Antintrusione e Videosorveglianza restano tra le sei attività, perché le schede grandi dividono per tipo di cliente e quelle piccole per tecnologia.

## 4. Struttura delle pagine interne (da realizzare)

Struttura "a matrice": le stesse tecnologie viste da due punti di vista.

### Casa e attività (tono semplice, organizzata per esigenze)
- Dormire tranquilli e partire sereni – antintrusione con protezione esterna.
- Vedere casa dal telefono – videosorveglianza, notifiche, verifica video.
- La casa che obbedisce alla voce – domotica, luci, clima, tapparelle, scenari.
- Negozi e uffici – allarme, telecamere, controllo accessi, antincendio, rete dati.
- Come lavoriamo – sopralluogo, progetto, installazione, assistenza e manutenzione.
- Lavori realizzati, con foto.

### Sistemi avanzati (tono tecnico, organizzata per problemi)
- Protezione perimetrale – Southwest Microwave INTREPID: MicroPoint sulla recinzione, MicroTrack interrato.
- Sistemi che collaborano – il perimetro che punta le telecamere (slew-to-cue), videoanalisi, deterrenza con luci e voce.
- Siti remoti e impianti fotovoltaici.
- Sistemi proprietari e Connector.
- Soluzioni non convenzionali e approfondimenti tecnici (collegati al blog).
- Referenze per settore: industria, energia, difesa, logistica.

### Sei pagine tecnologia (struttura fissa)
1. Cos'è.
2. Come funziona.
3. Norme di riferimento (CEI 79-3, EN 50131, EN 50132-7, ecc.).
4. Rimandi: "Per la casa e le attività" e "Per l'industria e i siti critici".

### Livelli di lettura
Ogni argomento può avere tre livelli: **In breve** (un minuto), **Come funziona** (principi e schemi), **Approfondimento tecnico** (norme, tarature, casi limite).

## 5. Contenuti del vecchio sito da recuperare
- Livelli di protezione secondo CEI 79-3, progettazione TVCC secondo EN 50132-7 (pixel per metro).
- Partnership con Southwest Microwave (MicroPoint, MicroTrack).
- Videoanalisi, storia dal 1975, stabilimento di 6.000 m² con campo prove esterno.

## 6. Da decidere / prossimi passi
- Pagina **Casa e attività** (prossima da realizzare), poi **Sistemi avanzati**, poi le sei pagine tecnologia.
- Piattaforma: WordPress con tema su misura (se il piano United Host ha PHP e MySQL) oppure sito statico.
- Collocazione delle voci della vecchia fascia "I.D.S. Advanced Integration" (Sistemi proprietari, Connector, Soluzioni non convenzionali, Approfondimenti): proposta di inserirle in "Sistemi avanzati".
- Foto reali di impianti e del campo prove da affiancare a quelle generate.
- Versione vettoriale o ad alta risoluzione del logo.
