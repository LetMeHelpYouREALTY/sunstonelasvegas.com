# Images

Date: 2026-10-12

## What shipped

No photographic WebP files were generated. `XAI_API_KEY` is not in this environment. The brief requires the xAI image API and does not allow a substitute generator.

No page references a placeholder photograph. The old file `public/og-image.png` was a screenshot of the v0 Platform API demo. It is removed so `/og-image.png` is no longer served. Social cards come from `app/opengraph-image.tsx`: a charcoal typographic card with the words “Las Vegas 89143,” “Capella at Sunstone,” and “Homes for sale.” That card contains text on purpose. It is not a listing photo. It shows no person, logo, brokerage mark, or street address.

`next.config.ts` still prefers AVIF and WebP for any future `next/image` use. Heroes on this build are type, so there is no image layout shift.

## Headings ready for generation when a key exists

Each prompt is editorial luxury photography: Las Vegas desert-modern architecture, desert xeriscape, Spring Mountains or Red Rock where the heading calls for them, golden-hour light, 16:9 for a hero and 4:3 for a section. No people, no text, no logos, no brokerage marks, no recognizable address. Illustrative only.

| Heading | Intended file | Status |
| --- | --- | --- |
| Capella at Sunstone homes for sale | `public/images/home/capella-at-sunstone-homes-for-sale.webp` | Not generated |
| Sell my Sunstone home | `public/images/sell/sell-my-sunstone-home.webp` | Not generated |
| Buy in Sunstone | `public/images/buyers/buy-in-sunstone.webp` | Not generated |
| Sunstone neighborhoods | `public/images/communities/sunstone-neighborhoods.webp` | Not generated |
| New homes in Sunstone | `public/images/new-construction/new-homes-in-sunstone.webp` | Not generated |
| Trilogy Sunstone 55+ rules | `public/images/trilogy/trilogy-sunstone-55-rules.webp` | Not generated |
| Sunstone market report | `public/images/market-report/sunstone-market-report.webp` | Not generated |

Prompt pattern, not yet sent to an API:

> Editorial luxury photograph, 16:9, golden-hour light, Las Vegas desert-modern single-story homes, warm stone and charcoal walls, xeriscape, distant Spring Mountains, no people, no text, no logos, no street numbers, not a specific real address.
