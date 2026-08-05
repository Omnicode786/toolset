# Tool Set — Updated Website

A fully responsive, dependency-free static website for Tool Set.

## Included pages

- Home
- About Us
- Subscriptions and pricing
- Customer experience
- Tool guides
- Contact / WhatsApp enquiry form

## Run locally

Open `index.html` directly in a browser, or serve the folder with any static web server.

Example with Python:

```bash
python -m http.server 3000
```

Then open `http://localhost:3000`.

## Editing products and prices

All catalogue products, descriptions, plans and prices are stored in:

`assets/site.js`

Search for `const PRODUCTS` and edit the relevant product object.

## Deployment

The website can be uploaded directly to any static host. A `vercel.json` file is included so Vercel serves clean page URLs.
