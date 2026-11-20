import { getCollection } from 'astro:content';

const staging = process.env.STAGING === '1';

/** Articoli pubblicabili, dal più recente. Le bozze compaiono solo nell'area di prova. */
export async function articoli() {
  const tutti = await getCollection('blog', ({ data }) => staging || !data.bozza);
  return tutti.sort((a, b) => b.data.data.getTime() - a.data.data.getTime());
}

export function dataIt(d: Date): string {
  return d.toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' });
}
