# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

GreenHaven Nursery — a plant storefront with cart, checkout, order tracking and an AI plant-care
assistant, in five languages (UZ / EN / RU / ZH / AR, Arabic right-to-left) and five display
currencies. It is a static site: no framework, no bundler, no backend, no dependencies.

## Commands

There is no build step, no package manifest and no test framework. Everything is served as-is.

```bash
python3 -m http.server 8000
```

Opening `index.html` over `file://` also works — all paths are relative and nothing uses `fetch`.

Check a script after editing (there is no linter):

```bash
node --check assets/js/app.js
```

Any module can be loaded headlessly for a quick data check, because each one attaches to a
`root` object rather than using ES modules:

```bash
node -e "global.window={};['kb','kb-topics','kb-topics2','kb-topics3'].forEach(f=>require('./assets/js/'+f+'.js'));console.log(window.KB.TOPICS.length)"
```

Changes are verified by driving the real page with Playwright (shop → cart → checkout →
tracking, and the AI assistant in each language). Those scripts are not kept in the repo.

## Architecture

Nine scripts load in a fixed order from `index.html` and communicate through five globals on
`window`. **The order matters** — each file reads the globals defined before it:

```
i18n.js → data.js → kb.js → kb-topics*.js → ai.js → store.js → app.js
   I18N     DATA      KB       KB.TOPICS      AI      STORE      (views)
```

- **`I18N`** — 305 UI keys × 5 locales, plus currency conversion and locale-aware date/money
  formatting. `setLang()` rewrites `<html lang/dir>` and notifies subscribers.
- **`DATA`** — the 30 products. Care attributes are stored as *codes* (`light:'bright'`,
  `water:'low'`), never as prose, so they translate through `I18N` lookups.
- **`KB`** — plant-care knowledge. `SPECIES` holds language-neutral facts per plant (watering
  intervals, temperature range, soil/fertiliser/propagation/toxicity codes); `LABELS` renders
  those codes into each language; `ALIASES` adds search synonyms. `TOPICS` is filled by the
  three `kb-topics*.js` files — 25 topics, each with keywords, a title and a body in all five
  languages. The split across three files is only to keep them editable; order is irrelevant.
- **`AI`** — the assistant. `answerLocal()` normalises the question (Arabic alef/ta-marbuta
  folding, Cyrillic stemming, CJK substring matching), detects the species, scores topics, and
  composes a care card plus topic bodies. `answerLive()` is the optional path to
  `claude-opus-5-5` using a key the visitor pastes in; it throws on any failure so the caller
  falls back to `answerLocal()`.
- **`STORE`** — cart, promo codes, orders and delivery state in `localStorage`. All money is
  held in USD; only the display layer converts.
- **`app.js`** — hash router (`#/shop`, `#/product/<id>`, …), every view as a function returning
  an HTML string, and the event wiring. Views are strings because there is no templating layer;
  everything interpolated into them goes through the local `esc()`.

Each locale keeps **every** key — `I18N.t()` falls back to English, but a missing key is a bug,
not a feature. Same for products (`NAMES`/`BLURBS`) and topics.

## Invariants that are easy to break

These are not style preferences; each one caused a real failure here.

- **Never nest an `<input>` inside its own `<label>`.** The label re-forwards the click and the
  control toggles twice, so it looks dead. Use a sibling `<input id>` + `<label for>`. This
  applies to every filter, shipping option, payment option and checkbox.
- **`I18N.applyDocument()` sets `data-lang` on `<html>`.** Any selector like `[data-lang]` will
  therefore match the root element. Scope picker selectors (`#langMenu [data-lang]`), or a
  stray handler ends up bound to the whole document.
- **Markup that gets re-rendered needs delegated handlers.** `applyShop()` rewrites only
  `#shopGrid`, so per-element handlers bound during a route render are destroyed by any filter
  or sort change. Add-to-cart, wishlist and accordion clicks are delegated from `document` in
  `boot()` — keep new in-grid controls there too.
- **The `hidden` attribute loses to an author `display:` rule.** `.cart-count` sets
  `display:grid`, so it needs an explicit `.cart-count[hidden]{display:none}`.
- **Scroll reveals must not be able to hide content.** `observeReveal()` pairs the
  IntersectionObserver with a 3-second timeout that shows everything regardless.
- **Motion has a thesis, not a default.** The one authored moment is the hero growing upward on
  load; everything else explains feedback, state or relationship. There is deliberately no
  per-section scroll reveal — it was removed because an identical entrance everywhere is
  decoration and it put real content behind a timer. Do not reintroduce one.
- **`#app` needs its `min-height`.** Views render from script, so without it the first paint
  pulls the footer into the viewport.
- **Use logical CSS properties** (`inset-inline-start`, `padding-inline`, `margin-inline`) so
  Arabic RTL works without a second stylesheet. Directional icons flip under `[dir="rtl"]`.

## Making changes

**Add a product** — append to `PRODUCTS` in `data.js`, add its name and blurb to all five
`NAMES`/`BLURBS` maps, add a `SPECIES` entry in `kb.js` (its `issues` must reference real topic
ids), and add `assets/img/plants/<id>.svg`. `p.img` is derived from the id.

**Add a care topic** — push it in any `kb-topics*.js` with `kw`, `title` and `body` for all five
languages. Bodies are arrays; a line starting with `- ` renders as a list item, anything else as
a paragraph. Keywords are matched after normalisation, so for inflected languages list the stem
or the common surface forms rather than one dictionary form.

**Add a language** — add the locale to `LOCALES`, `CURRENCIES`/`DEFAULT_CURRENCY` and the `T`
table in `i18n.js`; then the `NAMES`/`BLURBS` maps, `KB.LABELS`, every topic's `kw`/`title`/`body`,
`CARD` and `FALLBACK` in `ai.js`, and `cardStrings()` in `app.js`. Add the locale code to the
`LANGS` array in `ai.js` so its keywords are scored.

**Add a real photo** — put the file in `assets/img/photos/<id>.jpg` and register it in the
`PHOTOS` map in `data.js` (a full URL works too). Every product image in the UI goes through
`pimg()` in `app.js`, which prefers `p.photo` and falls back to `p.img` — including at runtime
via `onerror`, so a wrong path degrades to the illustration instead of a blank card.

The illustrations in `assets/img/plants/` are committed artwork produced by a parametric SVG
generator that is not in this repository; edit the SVGs directly.

## Deployment

Served by GitHub Pages from the `gh-pages` branch of `MuhammadjonTolaganov/Muhammadjon777`
(root). `.nojekyll` is required. Routing is hash-based and every asset path is relative, so the
site works from a subdirectory without configuration.

## Demo behaviour worth knowing

Orders exist only in the browser and no payment is taken. Card `4242 4242 4242 4242` simulates
success and `4000 0000 0000 0002` a decline; promo codes are `GREEN10`, `PLANT20`, `WELCOME15`.
Order tracking advances on a clock (`STATUS_AT` in `store.js`) with a button to step it manually.
