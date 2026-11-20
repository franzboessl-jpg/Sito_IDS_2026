#!/usr/bin/env python3
"""Prepara una foto per il sito I.D.S. Sicurezza.

- ridimensiona (lato lungo max 1800 px), leggera correzione di contrasto
- aggiunge la filigrana con il logo I.D.S. (in basso a destra, semitrasparente)
- scrive i dati di copyright nei metadati
- salva in WebP

Uso: python3 scripts/foto_web.py originale.jpg destinazione.webp [--senza-filigrana] [--lato 1800]
Gli originali restano su Z:\\SITO WEB I.D.S\\2026: nel sito vanno solo le versioni elaborate.
"""
import argparse, io, os
from datetime import date
from PIL import Image, ImageOps, ImageEnhance, ImageFilter
import cairosvg

QUI = os.path.dirname(os.path.abspath(__file__))
LOGO_SVG = os.path.join(QUI, '..', 'public', 'assets', 'marchio', 'logo-ids-orizzontale-bianco.svg')
COPYRIGHT = f'(c) {date.today().year} I.D.S. Sicurezza - Impianti di Sicurezza, Folignano (AP). Riproduzione vietata.'  # i metadati EXIF accettano solo caratteri ASCII

def logo(larghezza):
    png = cairosvg.svg2png(url=LOGO_SVG, output_width=larghezza)
    return Image.open(io.BytesIO(png)).convert('RGBA')

def filigrana(im, quota=0.13, opacita=0.55, margine=0.025):
    w, h = im.size
    lw = max(90, int(w * quota))
    lg = logo(lw)
    # ombra morbida: rende leggibile il logo anche su cielo o muri chiari
    ombra = Image.new('RGBA', lg.size, (0, 0, 0, 0))
    ombra.putalpha(lg.getchannel('A').point(lambda a: int(a * 0.55)))
    ombra = ombra.filter(ImageFilter.GaussianBlur(max(2, lw // 60)))
    lg.putalpha(lg.getchannel('A').point(lambda a: int(a * opacita)))
    m = int(min(w, h) * margine)
    x, y = w - lg.width - m, h - lg.height - m
    base = im.convert('RGBA')
    base.alpha_composite(ombra, (x + 1, y + 2))
    base.alpha_composite(lg, (x, y))
    return base.convert('RGB')

def prepara(src, dst, lato=1800, con_filigrana=True, qualita=80):
    im = ImageOps.exif_transpose(Image.open(src)).convert('RGB')
    im.thumbnail((lato, lato), Image.LANCZOS)
    im = ImageOps.autocontrast(im, cutoff=0.5)
    im = ImageEnhance.Sharpness(im).enhance(1.15)
    if con_filigrana:
        im = filigrana(im)
    exif = Image.Exif()
    exif[0x013B] = 'I.D.S. Sicurezza'   # Artist
    exif[0x8298] = COPYRIGHT            # Copyright
    im.save(dst, 'WEBP', quality=qualita, method=6, exif=exif.tobytes())
    return im.size

if __name__ == '__main__':
    a = argparse.ArgumentParser()
    a.add_argument('src'); a.add_argument('dst')
    a.add_argument('--senza-filigrana', action='store_true')
    a.add_argument('--lato', type=int, default=1800)
    o = a.parse_args()
    print(prepara(o.src, o.dst, o.lato, not o.senza_filigrana))
