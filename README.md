# Dogs Tail and Paws

A responsive landing page for a Derbyshire dog walking and care business, using Astro, TypeScript and Tailwind CSS 4.

## Development

Use Node.js 22.19 or newer. Install with `npm ci`, then run `npm run dev`. Run `npm run check` for Astro/TypeScript diagnostics and `npm run build` to produce the static `dist/` site. `npm run preview` serves the production output locally.

## Editing and expansion

Business details are in `src/content/business.ts`. Shared colour and typography tokens are in `src/styles/global.css`. Add future pages under `src/pages/` and use the shared `BaseLayout.astro` for consistent metadata and styling. The initial page uses phone and email links; no booking service or form backend is required.

Brand illustrations are original SVG assets in `public/assets/`, styled to match the supplied cards. System fonts avoid external font requests. The owner confirmed the card's contact information, services, qualifications and areas on 11 October 2026.

The Sites destination is private. A public business launch requires the intended audience and domain to be selected. Configure a canonical URL and sitemap when a public domain is finalised.
