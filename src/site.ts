// Dati aziendali usati in tutto il sito (piè di pagina, dati strutturati, contatti)
export const AZIENDA = {
  nome: 'I.D.S. Sicurezza',
  ragioneSociale: 'I.D.S. Impianti di Sicurezza',
  dal: 1975,
  email: 'info@impiantidisicurezza.it',
  piva: '02248560449',
  sede: {
    etichetta: 'Sede e stabilimento',
    via: 'Zona Ind.le Piane di Morro',
    cap: '63084',
    citta: 'Folignano',
    prov: 'AP',
    telefoni: ['0736 390049', '0736 491203'],
  },
  uffici: {
    etichetta: 'Uffici e logistica',
    via: 'Via del Lavoro 1',
    cap: '63076',
    citta: 'Monteprandone',
    prov: 'AP',
    telefoni: ['0735 703473'],
  },
};

/** Percorso interno che tiene conto della cartella di pubblicazione (es. /nuovo/) */
export function url(percorso: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return base + (percorso.startsWith('/') ? percorso : '/' + percorso);
}

/** Numero di telefono in formato link (tel:+39...) */
export function tel(numero: string): string {
  return 'tel:+39' + numero.replace(/\s/g, '');
}
