# GreenHaven Nursery

A global plant & flower commerce platform with an AI plant-care assistant, in **five languages**:
**O'zbekcha · English · Русский · 中文 · العربية** (with full right-to-left support for Arabic).

Built as a dependency-free static site — no build step, no framework, no backend.

---

## Features

### Shop
- 30 plants across 6 categories, each with its own generated illustration
- Filter by category, price, light requirement, care level and pet safety
- Sort by price, rating or name; live search across names in all five languages
- Product pages with a full care sheet (water, light, temperature, humidity, soil, feeding, propagation, toxicity)

### Cart & checkout
- Persistent cart, quantity editing, promo codes (`GREEN10`, `PLANT20`, `WELCOME15`)
- Four-step checkout: delivery → shipping method → payment → review
- Client-side validation including the Luhn check on card numbers and expiry-date checks
- Five display currencies (USD, UZS, RUB, CNY, AED) with locale-aware number formatting

### Order tracking
- Every order gets a number (`GH-XXXXXX`), courier and tracking ID
- Six-stage delivery timeline that advances over time, with a button to step through it

### AI plant-care assistant
Two tiers, so it always works:

1. **Built-in knowledge base (default, offline).** A matching engine over 25 care topics and
   30 species, each written out in all five languages. It identifies the plant from the question
   (including inflected Russian, Arabic script and Chinese), scores the matching topics, and
   composes a species-specific care card plus targeted guidance.
2. **Live Claude model (optional).** Paste an Anthropic API key on the care page and questions are
   sent to `claude-opus-5-5` instead. The key is kept in your own browser's `localStorage` and is
   sent only to `api.anthropic.com`. If the request fails, the answer falls back to the built-in
   knowledge base automatically.

---

## Running it

It is a plain static site, so any web server will do:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

---

## Project layout

```
index.html                  page shell, header, footer
assets/css/style.css        design system and all layout
assets/js/i18n.js           5 locales, ~305 strings each, currency formatting
assets/js/data.js           30 products, names and descriptions in 5 languages
assets/js/kb.js             per-species care data + search aliases
assets/js/kb-topics*.js     25 care topics, each written in 5 languages
assets/js/ai.js             matching engine + live Claude client
assets/js/store.js          cart, promos, orders, delivery tracking
assets/js/app.js            router and all views
assets/img/plants/*.svg     30 plant illustrations
assets/img/ui/*.svg         hero and greenhouse scenes
```

The illustrations are generated, not stock photography: every plant is drawn by a parametric SVG
generator (leaf shapes, fenestration, pot styles and palettes), so the whole site has no external
image dependencies and weighs well under a megabyte.

---

## A note on scope

This is a demonstration build. Orders are stored in your browser only, no payment is ever taken,
and no goods are shipped. Use card `4242 4242 4242 4242` to simulate a successful payment and
`4000 0000 0000 0002` to simulate a decline.

Care guidance is general horticultural advice.
