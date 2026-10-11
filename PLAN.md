# Dogs Tail and Paws landing page plan

Status: planning first, before implementation. Business name confirmed by owner: Dogs Tail and Paws.

## Technology

Use Astro, TypeScript and Tailwind CSS 4 with the official @tailwindcss/vite integration. Produce a static site. Astro components and file-based pages allow later service, about and pricing pages without rebuilding the landing page architecture. Keep business information in a typed content file rather than duplicating it throughout components. Use minimal browser JavaScript for mobile navigation only where needed.

Official references:
- https://tailwindcss.com/docs/installation/framework-guides/astro
- https://docs.astro.build/en/guides/styling/
- https://docs.astro.build/en/basics/project-structure/

Start with phone/email enquiry links unless the owner chooses a form. A working form requires selecting a submission service or backend, delivery destination, and appropriate privacy copy. Do not show a fake submission success state.

## Visual direction

Translate the supplied cards into a responsive website: warm cream backgrounds, deep forest-green text, olive accents, muted sage and antique-gold borders. Initial approximate tokens: cream #F7F0E2, forest #29351C, olive #626747, sage #A2A180, gold #B5A377. Check actual contrast before finalising.

Use elegant serif headings, italic serif tagline, and readable sans-serif body text. Prefer self-hosted licensed fonts. Botanical corner details, a circular paw motif and rolling countryside imagery should connect the site to the cards. Use a spacious composition with restrained double borders, rather than reproducing the entire printed card as a website image. Decorative imagery must not contain essential text. Preserve the exact tagline: “Walks, cuddles and care when you can’t be there.”

## Page sequence

1. Header: brand, section navigation, enquiry button; accessible mobile navigation.
2. Hero: dog walking and care in Derbyshire, exact tagline, countryside illustration, primary contact action and services anchor.
3. Services: solo and group walks; puppy visits; feeding and welfare visits; pet sitting. Use supplied descriptions, subject to owner's confirmation.
4. Trust: pet first aid trained, DBS checked, dog walking certificate, fully insured — only after owner confirms they are current.
5. Coverage: Boulton Moor, Alvaston, Chellaston, Shelton Lock, Spondon, Allestree and Quarndon, subject to confirmation.
6. Contact: prominent phone/email actions and invitation to discuss the dog's needs. Add prices only when supplied.
7. Footer: brand, contact, navigation and any necessary privacy link.

Do not invent testimonials, opening hours, credentials, prices, availability, an owner biography or booking policies.

## Content awaiting confirmation

- Phone on cards: 07895 599393.
- Email on cards: dogstailandpaws@gmail.com.
- Services, qualifications and coverage listed above.
- Contact approach and whether prices should appear.

## Delegation plan

Use a cheaper model available in the selected agent environment; do not assume a model's price or availability without checking. Bound assignments and file ownership to reduce rework. The lead chooses architecture, creates shared tokens and content contracts, integrates changes, and reviews the finished experience.

Task A — brand assets: inspect supplied images, prepare web-sized assets from usable source material, document dimensions and licensing assumptions, and preserve card styling. Own assets only. Do not bake business copy into images. Deliver a brief asset manifest. Can run alongside scaffolding after the visual brief is fixed.

Task B — implementation: after the lead creates the Astro/Tailwind scaffold and content contract, implement responsive page sections and navigation using shared tokens. Own components and page files. Include keyboard focus and reduced-motion handling. Avoid adding libraries or invented business facts. One bounded implementation agent is sufficient for this page.

Task C — independent verification: after integration, check desktop/mobile layouts, keyboard navigation, contrast, content fidelity, phone/email links, anchor navigation, image loading and horizontal overflow. Run Astro checks and production build. Report actionable defects with files and reproduction steps; lead fixes and retests affected behaviour.

Use two build assignments at most initially; run verification after integration. Avoid multiple agents editing configuration or global styles. Delegate only after the planning stage and content decisions are resolved.

## Expansion and delivery

Suggested structure: src/layouts/BaseLayout.astro; src/components/; src/content/business.ts; src/pages/index.astro; src/styles/global.css; public/assets/. Add future pages through the shared layout. Add descriptive metadata and social preview; final canonical URL and sitemap configuration depend on chosen production domain.

Build a local reviewable version first. Hosting choice remains open; static output is portable. If using Sites, follow its source packaging and private preview workflow. Confirm the intended public domain and audience before treating it as the public business launch.

Done when the owner-approved content is implemented, the theme reflects the cards, mobile/desktop and keyboard checks pass, enquiry links work, and the production build succeeds.
