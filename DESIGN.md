# DESIGN.md – Sito I.D.S. Sicurezza

Regole visive di **impiantidisicurezza.it**, ricavate dalla landing v3 e dalla pagina MicroTrack (stato al 21/11/2026). Ogni nuova pagina le segue. I valori sono anche nel codice: le variabili stanno in `src/styles/global.css` e nelle pagine si usano i nomi, non i codici.

Carattere del sito: **tecnico, solido, sobrio**. È un'azienda di ingegneria dal 1975, non una startup: niente effetti di moda, più fatti, schemi e foto vere.

---

## 1. Colore – palette "blu acciaio"

Il sito è **scuro**: fondo blu notte con riflessi di acciaio spazzolato. Non esiste una versione chiara del sito; i toni chiari della scala servono per testi, linee e riquadri.

| Variabile | Hex | Ruolo |
|---|---|---|
| `--notte` | `#0A1A2E` | fondo della pagina, riquadri scuri, testo su fondo chiaro (es. sulla targhetta gialla) |
| `--logo` | `#002950` | blu istituzionale del marchio (il logo vettoriale usa `#1C2A50`) |
| `--acciaio-scuro` | `#1C4467` | fondi di sezione, riflessi del fondo |
| `--acciaio` | `#3A6A93` | colore guida, sfumature |
| `--luminoso` | `#4A90D9` | **unico colore d'azione**: pulsanti, collegamenti, sopratitoli, elementi attivi |
| `--chiaro` | `#8FB0CC` | testi secondari, didascalie, bordi, icone di secondo piano |
| `--ghiaccio` | `#E3ECF4` | testo normale su fondo scuro |
| `--grafite` | `#1E2A36` | testo su fondo chiaro |
| bianco | `#FFFFFF` | titoli e testo in evidenza |

**Colori di stato** (solo dove hanno un significato, soprattutto in schemi e animazioni):

| Variabile | Hex | Ruolo |
|---|---|---|
| `--allarme` | `#E24C3B` | allarme, pericolo, superamento soglia (variante chiara su fondo scuro `#FF7B6B`) |
| `--attenzione` | `#FFC20E` | evento sotto soglia, "nessun allarme", avviso |
| `--segnaposto` | `#C27C0E` | solo per i riquadri "Testo di Franz" in lavorazione (spariscono a pagina finita) |

Regole:
- Bordi e linee: `--chiaro` con trasparenza (`rgba(143,176,204,.22–.55)`), mai grigi neutri.
- Contrasto minimo 4,5:1 per il testo, 3:1 per i titoli grandi. `--chiaro` su `--notte` va bene per didascalie e testi piccoli secondari, non per paragrafi lunghi.
- Sezioni "Casa e attività" verso i toni chiari della scala; sezioni tecniche e difesa verso i toni scuri.
- Niente sfumature viola/azzurre di moda, niente testo sfumato nei titoli.

## 2. Caratteri

- **Montserrat** (500/600/700): titoli, menu, pulsanti, sopratitoli. Variabile `--font-titoli`.
- **Inter** (400/500/600): testi lunghi, didascalie, tabelle, briciole di pane. Variabile `--font-testo`.

| Elemento | Computer | Cellulare | Note |
|---|---|---|---|
| H1 (pagine interne) | 60 px | 36 px | `clamp(36px,4.6vw,60px)`, interlinea 1,05, bianco. Su MicroTrack sostituito dalla scritta ufficiale del prodotto |
| H1 (landing) | 42 px | 23 px | centrato, peso 700 |
| H2 | 36 px | 26 px | interlinea 1,2, bianco |
| H3 | 21 px | 18 px | `--ghiaccio` |
| Testo | 18 px, interlinea 1,6 | 17 px | Inter, righe di 60–75 caratteri |
| Sottotitolo di testata | 21 px | 17 px | Inter, interlinea 1,5 |
| Sopratitolo / livello di lettura | 13 px | 13 px | Montserrat 700, maiuscolo, spaziatura 0,14 em, `--luminoso` |
| Didascalie, note, briciole | 14 px | 14 px | Inter, `--chiaro` |

Tutto il testo in **italiano con gli accenti corretti** (è, à, perché, più, così…), mai vocali senza accento.

## 3. Spazi e griglia

- Scala di base a **4 px**; valori più usati: 6, 8, 10, 12, 14, 18, 24, 28, 48 px.
- Larghezza: intestazione, testata e landing `min(1560px, 95%)`; contenuto delle pagine `min(1200px, 92%)`.
- Sezioni del contenuto: 48 px sopra e sotto, separate da una riga sottile `rgba(143,176,204,.22)`.
- Due colonne fino a 900 px di larghezza, poi una sola. Gallerie: 3 colonne → 2 sotto i 900 px.

## 4. Forme e profondità

| Variabile | Valore | Uso |
|---|---|---|
| `--r-grande` | 18 px | testate, schede grandi della landing |
| `--r-scheda` | 14–16 px | riquadri, tabelle, schede attività, pannello testo della testata |
| `--r-medio` | 12 px | foto, pulsanti |
| `--r-pillola` | 999 px | indice della pagina, pulsanti dei passi delle animazioni |

Ombre (due sole):
- `--ombra-scheda`: `0 18px 45px rgba(4,14,28,.55)` – schede grandi; al passaggio del mouse `0 26px 60px rgba(4,14,28,.7)`.
- `--ombra-leggera`: `0 6px 20px rgba(0,0,0,.35)` – targhette e elementi sopra le foto.

Effetto vetro (`backdrop-filter: blur`) **solo** per il pannello del testo sopra una foto di testata, non come decorazione diffusa.

## 5. Componenti

**Intestazione** – logo orizzontale bianco senza vela (44 px, 34 px su cellulare) a sinistra, menu a destra (Montserrat 600, 16 px, `--ghiaccio`, sottolineato al passaggio). Riga sottile sotto.

**Testata delle pagine interne** – foto a tutta larghezza, raggio 18 px, bordo sottile. Due varianti:
- *testo a sinistra* su sfumatura scura da sinistra;
- *testo a destra* (`.hero-destra`) quando il soggetto della foto è a sinistra: sfumatura leggera e testo in un **pannello semitrasparente** (`rgba(10,26,46,.62)`, sfocatura 6 px, raggio 14 px). Sul cellulare la foto va sopra e il testo sotto, per non coprire il soggetto.
Contenuto: briciole di pane → sopratitolo → titolo → sottotitolo.

**Indice della pagina** – pillole con bordo `--chiaro`, al passaggio bordo `--luminoso` e fondo azzurro tenue.

**Livelli di lettura** – ogni sezione porta un sopratitolo: *In breve* · *Come funziona* · *Approfondimento tecnico*. Prima ciò che serve a capire di cosa si tratta, poi schemi e animazioni, in fondo i dettagli per i progettisti.

**Pulsanti**
- Primario: fondo `--luminoso`, testo bianco, raggio 12 px, 14 × 22 px; al passaggio `#3C7EC4`.
- Secondario: trasparente con bordo `--chiaro`; al passaggio fondo azzurro tenue.
- Fuoco da tastiera sempre visibile: contorno 2 px `--ghiaccio` distanziato.
- Le schede grandi della landing sono cliccabili per intero, senza pulsanti.

**Schede e riquadri** – fondo `rgba(10,26,46,.55)`, bordo `rgba(143,176,204,.35)`, raggio 14 px, 20 px di spazio interno. Al passaggio (se cliccabili) bordo `--luminoso` e piccolo sollevamento.

**Tabelle tecniche** – dentro un riquadro; intestazioni `--chiaro` 13 px, valori in bianco grassetto, righe separate da linee sottili.

**Gallerie e figure** – foto con raggio 12 px e bordo sottile; didascalia sotto (Inter 14 px, `--chiaro`, eventuale parte in **bianco grassetto**), oppure sovrapposta in basso su sfumatura scura.

**Segnaposto "Testo di Franz"** – riquadro tratteggiato arancione a righe: indica dove Franz scriverà il testo. Claude non scrive i testi di contenuto: prepara struttura, schemi e segnaposto.

**Piè di pagina** – tre colonne (sedi, contatti, dati societari), etichette maiuscole 12 px, collegamenti `--chiaro`, P.IVA e note legali in fondo.

## 6. Immagini, schemi e animazioni

**Marchi**
- Logo I.D.S. **sempre ufficiale** (SVG in `public/assets/marchio/`), mai ridisegnato o inventato. Pagine interne: logo orizzontale senza vela.
- Marchi di prodotto (es. INTREPID MicroTrack II) con la **scritta ufficiale** del produttore, nei colori originali; su fondo scuro va su una targhetta bianca.

**Fotografie**
- Stile: ora blu dopo il tramonto o luce naturale pulita, color correction fredda "blu acciaio", nessun testo nell'immagine.
- Foto generate con ChatGPT: scene semplici e leggibili, **un solo soggetto**, niente affollamento di dettagli; il lato dove va il testo resta calmo.
- WebP, circa 1800 px di larghezza, preparate con `scripts/foto_web.py`.
- **Filigrana I.D.S.** (variante B) sulle foto I.D.S. del contenuto. **Eccezione testate:** solo il logo piccolo in un angolo in basso, nella parte inquadrata, senza logo centrale.
- Nessuna filigrana sul materiale di terzi (Southwest, produttori), che porta il credito "Immagine: …" nella didascalia.

**Schemi didattici** (SVG disegnati da Claude)
- Assi e simboli spiegati con le unità (es. "segnale (dB)", "posizione lungo il perimetro (m)").
- Legenda chiara, elementi e quote etichettati, nessuna sovrapposizione di testo.
- Alto contrasto: fondo `--notte`, testi bianchi o `--ghiaccio`, niente grigi chiari.
- I numeri dello schema devono tornare con quelli del grafico (stessi metri, stessa origine).

**Animazioni**
- Passi numerati in alto (pillole), pausa a destra; avanzano da sole e si fermano se l'utente sceglie un passo o ha chiesto meno movimento (`prefers-reduced-motion`).
- Riga di stato sotto l'animazione con il testo di ciò che accade.
- Colori di stato coerenti: giallo = sotto soglia / nessun allarme, rosso = allarme.
- Prima di pubblicarle: video di un ciclo completo e fermi immagine da approvare.

**Icone** – un solo stile a tratto: linea 1,6–1,7 px, angoli arrotondati, bianche, senza riempimento. Niente emoji come icone.

## 7. Da evitare

Sfumature viola-azzurre di abitudine, effetto vetro ovunque, tutte le sezioni centrate, tre schede identiche "per riempire", emoji come icone, testo sfumato nei titoli, foto affollate di dettagli, loghi inventati.

## 8. Modo di lavorare

- Le modifiche si provano **offline** (screenshot computer + cellulare, video per le animazioni) e si pubblicano nell'area di prova `/nuovo/` solo quando Franz scrive "carica".
- Piccole modifiche puntuali: non si riprogetta una pagina già approvata.
- Prima di chiudere una pagina: revisione con la skill **web-review** e correzione dei problemi trovati.
- Versioni delle animazioni e delle testate archiviate in `Z:\SITO WEB I.D.S\2026\Animazioni\…`.
