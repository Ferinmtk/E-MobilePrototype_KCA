# Quickmart — Fresh & Easy (E-commerce Prototype)

An interactive prototype of a mobile e-commerce app for **Quickmart Supermarket**,
built for Assignment 3. It demonstrates the e-commerce solution designed in
Assignments 1 & 2.

## Run it

No build step, no installation. Just open the app:

```
quickmart-app/index.html   ← double-click to open in any browser
```

Everything is bundled locally, so it also works offline.

## What it demonstrates

| Business problem (Assignment 1) | Feature in this prototype |
|---|---|
| Untracked stock | Live inventory badges ("In stock · 48 left", "Low stock · 6 left") |
| Long queues / manual ordering | Click & Collect and scheduled Home Delivery |
| Cash handling & accounting risk | M-Pesa STK Push checkout (PIN → confirmation) |
| Customer retention | Loyalty points + app-exclusive offers |

## Screens

1. **Home** – search, app offer, categories, live-stock product grid
2. **Product** – quantity selector, Click & Collect vs Home Delivery toggle
3. **Checkout** – basket, loyalty discount, fulfilment slot, M-Pesa payment
4. **M-Pesa sheet** – STK Push → PIN → success + real-time inventory/points update

## Project structure

```
quickmart-app/
├── index.html          Semantic markup for all screens
├── css/
│   └── styles.css       Design tokens + component & screen styles
└── js/
    ├── app.js           State, rendering, navigation, payment flow
    └── lucide.min.js    Bundled icon library (vector icons)
```

## How the code is organised

- **Single source of truth.** All UI state (current screen, selected product,
  quantity, fulfilment mode, cart, points) lives in one `state` object in `app.js`.
- **Render from state.** `render()` paints the DOM from `state`; UI never holds
  its own truth.
- **Event delegation.** One click listener reads `data-action` / `data-nav`
  attributes, so there are no inline `onclick`s scattered through the HTML.
- **Separation of concerns.** Structure (HTML), presentation (CSS), behaviour (JS)
  are kept in separate files.

## Tech

Plain HTML, CSS and JavaScript (no framework). Lucide for icons,
Plus Jakarta Sans for type.
