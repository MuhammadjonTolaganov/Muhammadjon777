# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Retail plant buyers, worldwide, with no lead market: the five supported languages
(O'zbekcha, English, Русский, 中文, العربية) are served as equals rather than as a home market
plus translations.

Two jobs, not one:

1. **Choosing and buying a plant** — browsing, comparing care demands against their own home and
   habits, ordering, and following the delivery.
2. **Keeping it alive afterwards** — diagnosing a sick plant and getting a specific answer fast.
   The product treats this as part of the purchase, not as support overhead.

## Product Purpose

Sell plants online and keep the customer's plants alive after the sale. Intended to launch as a
real business, not a demonstration: future work should assume real orders, real money and real
fulfilment are the destination.

## Positioning

**Undecided — do not let feature work quietly settle this.**

Three candidates were put to the owner and none was chosen:

- the AI care assistant is the product, and plant sales fund it;
- full five-language parity, reaching buyers whom plant retailers normally underserve;
- plant plus lifetime care, including replacement rather than refund.

All three are currently built into the site at roughly equal weight, which is why the question is
open rather than answered by the code. Until it is resolved, treat none of the three as the
headline claim and avoid copy or structure that hardens one of them by default.

## Operating Context

- A storefront used in five languages, including Arabic right-to-left, and five display
  currencies (USD, UZS, RUB, CNY, AED).
- The customer flow runs browse → cart → four-step checkout → order number → delivery tracking.
- Post-purchase care is reached from the same site, not a separate channel, and is also linked
  from each product page.
- Shipping terms currently stated on the site: dispatch within 24 hours, plastic-free packaging,
  free delivery above $75, photo-based replacement within 7 days. These were written as
  placeholder commitments and must be confirmed against real logistics before launch.

## Capabilities and Constraints

Built and working today:

- 30-product catalogue with filtering, sorting and multilingual search; per-plant care sheets.
- Cart, promo codes, four-step checkout with genuine client-side card validation, order creation
  and a six-stage delivery timeline.
- Plant-care assistant with two tiers: an offline knowledge base of 25 care topics across 30
  species in all five languages, and an optional live Claude model when the visitor supplies
  their own API key.
- Full translation parity: every UI string, product name, description and care topic exists in
  all five languages.

Constraints that the real-startup goal does not yet satisfy:

- There is **no backend**. Cart and orders live in the visitor's browser only, so orders do not
  reach the business and are lost when storage is cleared.
- **No payment is taken.** Checkout validates card input and then simulates the result.
- **No inventory system.** Stock numbers are static values in source.
- The live AI tier depends on the *visitor* holding an Anthropic API key, which is not a viable
  consumer model; a server-side key and rate limiting would be needed for real customers.

Terminology: the care assistant is presented to customers as the **AI Plant Care Doctor**.

## Brand Commitments

- The product is named **GreenHaven Nursery**, and this is confirmed and binding.
  "Plant Care Startup" is only the folder name used for the course submission — it is not a
  brand, a product name, or an alternative title.
- Five-language parity is a product commitment, not a feature flag: shipping a surface in fewer
  than five languages is a regression.

## Evidence on Hand

A real nursery exists behind this project, **but none of its material is in the repository yet.**
Everything currently in the catalogue was invented during the build and must not be treated,
cited, or carried forward as fact:

- all 30 plant names, prices, stock levels, review counts and star ratings (`assets/js/data.js`);
- the homepage figures — "4.8 / 2,400+ reviews", "5+ years", "10K+ happy customers",
  "1000+ varieties" (`assets/js/app.js`, hero and about sections);
- the company story, address, phone and email on the About and Contact pages;
- every plant illustration (`assets/img/`), which is generated vector art, not photography of
  real stock.

Before launch these must be replaced with the real nursery's inventory, pricing, photography and
company details. The horticultural care content is general advice and is sound, but it is not
specific to this nursery's stock.

## Product Principles

1. **Five languages are parity, not translation.** No market is a second-class citizen; a feature
   that exists in one language exists in all five, right-to-left included.
2. **The sale is the beginning.** The product's obligation continues after delivery, which is why
   care support sits inside the storefront rather than beside it.
3. **Placeholder data is a liability, not a placeholder.** A real nursery exists, so every
   invented figure is a claim waiting to become false. Replace with verifiable fact; never add
   new invented evidence.
4. **Never imply a transaction that did not happen.** While checkout is simulated, nothing may
   suggest money moved or goods will ship.

## Accessibility & Inclusion

Arabic right-to-left is a confirmed product requirement, not an enhancement, and is implemented
through logical CSS properties throughout. Script coverage (Latin, Cyrillic, Arabic, Simplified
Chinese) must survive any typography change. No further accessibility standard has been set by
the owner; WCAG conformance is undecided rather than ruled out.
