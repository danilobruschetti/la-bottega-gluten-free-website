# La Bottega Gluten Free — sito statico premium

Progetto statico leggero in HTML, CSS e JavaScript vanilla.

## Pagine incluse

- `index.html` — homepage
- `chi-siamo.html` — storia e missione
- `prodotti.html` — catalogo prodotti con ricerca e filtri
- `novita.html` — novità / contenuti editoriali
- `contatti.html` — contatti, form email, orari, mappa

## Funzionalità

- layout responsive desktop / tablet / mobile
- menu mobile
- pulsante WhatsApp fisso
- orari visibili in homepage
- form contatti via `mailto:` senza backend
- catalogo prodotti filtrabile lato client
- footer unico con copyright dinamico
- immagini ottimizzate in WebP

## Dove cambiare logo e immagini

Il logo attuale è testuale. Quando arriva il logo reale, sostituire il testo nel tag:

```html
<a class="brand" href="index.html">La Bottega Gluten Free</a>
```

con un'immagine, per esempio:

```html
<a class="brand brand-logo" href="index.html"><img src="assets/ui/logo.png" alt="La Bottega Gluten Free"></a>
```

Le immagini principali sono in:

- `assets/ui/home-hero.webp`
- `assets/ui/page-hero.webp`
- `assets/ui/about-photo.webp`

## Pubblicazione rapida GitHub Pages

```bash
git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin URL_REPOSITORY
git push -u origin main
```

Poi su GitHub: Settings → Pages → Deploy from branch → `main` → `/root`.
