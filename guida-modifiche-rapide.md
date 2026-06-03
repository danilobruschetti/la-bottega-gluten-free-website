# Guida modifiche rapide

## Cambiare numero WhatsApp

Cercare in tutti i file HTML:

```text
https://wa.me/41765710764
```

Sostituire con il nuovo numero in formato internazionale senza spazi.

## Cambiare email form

In `contatti.html`, cercare:

```html
data-recipient="info@labottegaglutenfree.ch"
```

Sostituire con l'email desiderata.

## Aggiungere un prodotto

In `prodotti.html`, duplicare una card:

```html
<article class="product-card" data-category="pasta" data-keywords="pasta esempio">
  ...
</article>
```

Aggiornare categoria, parole chiave, titolo, descrizione e immagine.

## Cambiare immagini principali

Sostituire mantenendo lo stesso nome file:

- `assets/ui/home-hero.webp`
- `assets/ui/page-hero.webp`
- `assets/ui/about-photo.webp`

Consiglio: esportare in WebP, qualità 75-85, larghezza 1600-2000 px.
