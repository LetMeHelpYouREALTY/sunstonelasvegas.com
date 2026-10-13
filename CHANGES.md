# Changes

Branch: `luxury-hyperlocal-sunstone`. Not merged. Not deployed to production.

Area derived from the domain: Capella at Sunstone, inside the Sunstone master plan, Las Vegas, Nevada, ZIP 89143.

## Pages

Rewritten or added, all scoped to Capella at Sunstone and the Sunstone master plan:

- `/` home, with “Sell my Sunstone home” and “Buy in Sunstone”
- `/sell` valuation form, builder pricing, patio prep, NRS 116.4109
- `/buyers` neighborhood guide, new vs resale, HOA table, school names Lennar displays
- `/communities` collection table and parks
- `/new-construction` Woodside, Lennar, Shea
- `/trilogy` 55+ facts only
- `/market-report` dated asking prices, drive times, and explicit gaps
- `/models` and `/models/[slug]` Aries, Taurus, Virgo
- `/move-in-ready` and `/move-in-ready/[slug]` the six Woodside asking prices
- `/faqs`, `/about`, `/contact`
- `/llms.txt`

`/financing`, `/buyers-guide`, and `/service-areas` now redirect. Unsourced lender names, Cadence and Summerlin inventory, and the old FAQ library are gone.

Phone on every page is (702) 766-7950. Footer carries Dr. Jan Duffy, REALTOR®, Nevada license S.0197614.LLC, and Berkshire Hathaway HomeServices Nevada Properties as text. No brokerage logo was added.

## Lighthouse

No earlier Lighthouse file exists in this repo, so there is no before score for the prior template.

Mobile, Lighthouse 12, local `next start` of this branch, 2026-10-12:

| Page | Performance | Accessibility | Best practices | SEO |
| --- | ---: | ---: | ---: | ---: |
| `/` | 98 | 100 | 100 | 100 |
| `/sell` | 98 | 100 | 100 | 100 |
| `/contact` | 99 | 100 | 100 | 100 |
| `/buyers` | 98 | 100 | 100 | 100 |

The first homepage pass scored accessibility 95 because the source line on the charcoal hero used the ivory-page muted color (1.89:1). That line is now `#e7e0d4` on `#1a1612`.

Checked in Chrome at 375px and 1280px: home, sell form, and contact form. Browser MCP was unavailable, so this was headless Chrome, not a click-through of the live form submit.

## Schema

JSON-LD on the rendered pages:

- `RealEstateAgent` and `LocalBusiness` in the root layout, `areaServed` Capella at Sunstone and the Sunstone master plan, ZIP 89143
- `Place` on `/communities`
- `FAQPage` on home, sell, buyers, new construction, and FAQs
- `BreadcrumbList` on inner pages
- `Article` on `/market-report`, dated 2026-10-12, with the Open Graph image

Google’s live Rich Results Test was not run. This branch is not on a public URL. Local HTML was checked for one H1, a canonical, a title at or under 60 characters, and a description at or under 155 characters.

## Images

No landscape WebPs. See `IMAGES.md`. The v0 demo Open Graph screenshot was removed. The social image is the typographic card from `app/opengraph-image.tsx`.

## Research gaps

Flagged in `RESEARCH.md` and on the market report. Not used as current proof:

- No closed sale with address, price, close date, days on market, and list-to-sale ratio
- No Sunstone median or inventory count for the last 90 days
- No published Capella HOA dollar amount or transfer fee
- Conflicting SID notes; the site tells the reader to check the parcel
- No solar-lease terms
- No confirmed school assignment for a specific address
- No measured drive time to Downtown Summerlin
- Downtown Summerlin, golf-course, divorce, probate, and 1031 pages were not built
