# Storefront Template

A reusable, data-driven e-commerce storefront built with Next.js, Tailwind CSS, and Stripe Checkout.

## Getting Started

1. Install dependencies: `npm install`
2. Copy `.env.example` to `.env.local` and add your Stripe test keys
3. Run locally: `npm run dev`
4. Deploy: push to GitHub and connect the repo to Netlify (netlify.toml already configured)

## Structure

- `/app` — pages and routes (homepage, collection, product, checkout, API routes)
- `/components` — global, product, and page components
- `/data` — products.json, collections.json, navigation.json (edit these to change your catalog)
- `/config` — theme.ts and site.ts (edit these to rebrand/restyle)
- `/lib` — cart context, product helpers, Stripe client

## Customization

- Replace products: edit `data/products.json`
- Replace branding/colors/fonts: edit `config/theme.ts`
- Replace nav/footer/site copy: edit `config/site.ts` and `data/navigation.json`
- Replace placeholder images in `/public/placeholders/`
