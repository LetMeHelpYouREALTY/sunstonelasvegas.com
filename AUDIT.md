# AUDIT — sunstonewoodsidehomes.com

Step 0 only. No page, design, schema, or image changes. Waiting for **go** before Step 1.

Audit date: 2026-10-12. Source of truth for the area is the domain plus constants already in this repo. Market numbers below are **what the site currently says**, not verified research.

## Area derived from the domain

| Field | Value | Where it comes from |
| --- | --- | --- |
| Domain | `https://www.sunstonewoodsidehomes.com` | `app/layout.tsx` `metadataBase`, `lib/structured-data.ts` `SITE_URL`, `app/sitemap.ts`, `app/robots.txt/route.ts` |
| Area name | **Capella at Sunstone** | Domain names Sunstone + Woodside Homes. Homepage H1, title, and schema treat Capella as the product inside that master plan. |
| Master plan | **Sunstone Master Plan** | `lib/service-areas.ts`, `lib/structured-data.ts` `containedInPlace` |
| City | **Las Vegas, Nevada** (northwest Las Vegas) | Address and schema in `lib/site.ts` and `lib/structured-data.ts` |
| Primary ZIP | **89143** | Stated on the site for Capella, the Sunstone master plan, the sales office, and the contact address. The domain string itself does not encode a ZIP. |

Secondary ZIPs already coded for other service areas (not the domain’s primary area):

- Summerlin: 89135, 89138, 89144
- Skye Canyon: 89166
- Northwest Las Vegas: 89131, 89130, 89149
- Move-in-ready spotlight also names Cadence, Henderson 89011

Two street addresses are in the repo. They are not the same place:

- Contact / schema NAP: `10249 Celestial Pole St, Las Vegas, NV 89143` (`lib/site.ts`)
- Capella sales office: `9361 Blue Vega Ave., Las Vegas, NV 89143` (`lib/capella-builder-facts.ts`)

Site phone (keep; do not swap): `(702) 766-7950` / `tel:+17027667950`. Email: `DrDuffySells@SunstoneWoodsideHomes.com`. Hours: Mon 2–5 PM, Tue–Sun 10 AM–5 PM.

## Stack and identity problems

- Next.js `^16.0.10`, React 19.2, TypeScript, Tailwind 4. Matches the requested stack.
- Agent name is inconsistent. Schema and several pages say **Dr. Jan Duffy**. Root metadata default title and the footer brand say **Dr. Duffyet Duffy** (typo). Header says **Dr. Duffy Realty**.
- License strings disagree: footer `S.0197614`; schema `S.0197614.LLC`.
- Footer names Berkshire Hathaway HomeServices Nevada Properties in text. No BHHS logo file is in the repo.
- README.md is still the v0 Platform API demo (`simple-v0`), not this real estate site.

## Route map

Static pages:

| Route | File | Title (metadata) | H1 |
| --- | --- | --- | --- |
| `/` | `app/page.tsx` | Capella at Sunstone New Homes \| Woodside | The easiest way to find a Capella at Sunstone home |
| `/sell` | `app/sell/page.tsx` | Sell to Buy at Capella at Sunstone \| Dr. Jan Duffy | Sell your current home to buy at Capella at Sunstone |
| `/buyers-guide` | `app/buyers-guide/page.tsx` | Las Vegas New Construction Buyer Guide \| Dr. Duffy | Navigate your Sunstone purchase with expert precision |
| `/communities` | `app/communities/page.tsx` | Sunstone & Northwest Las Vegas Communities \| Dr. Duffy | Live where desert adventure meets modern convenience |
| `/service-areas` | `app/service-areas/page.tsx` | Las Vegas Service Areas \| Sunstone Woodside Neighborhood Guides | Live where desert adventure meets modern convenience |
| `/service-areas/[slug]` | `app/service-areas/[slug]/page.tsx` | `{area.name} Real Estate Guide` | `{area.headline}` |
| `/models` | `app/models/page.tsx` | Capella Floor Plans \| Sunstone Woodside Models in Las Vegas | Compare the single-story plans at Capella |
| `/models/[slug]` | `app/models/[slug]/page.tsx` | `{model.name} \| Capella at Sunstone` | `{model.headline}` |
| `/move-in-ready` | `app/move-in-ready/page.tsx` + browser component | Move-In Ready Homes \| Sunstone Woodside by Dr. Duffy | Designer-curated homes ready when you are |
| `/move-in-ready/[slug]` | `app/move-in-ready/[slug]/page.tsx` | `{plan} {lot} \| {community}` | `{planName} {lot}` |
| `/financing` | `app/financing/page.tsx` | New Construction Financing Strategies \| Sunstone Woodside | Align your financing with Capella’s build timelines |
| `/faqs` | `app/faqs/page.tsx` | Woodside Homes Las Vegas FAQs \| Research Library by Dr. Duffy | Woodside Homes Research FAQ Library |
| `/contact` | `app/contact/page.tsx` | Contact Dr. Duffy \| Sunstone Woodside Home Concierge | Let’s plan your next move together |

Dynamic slugs:

- Models: `aries`, `taurus`, `virgo` (`lib/models.ts`)
- Service areas: `capella-at-sunstone`, `sunstone-master-plan`, `summerlin`, `skye-canyon`, `northwest-las-vegas`
- Move-in ready: 25 homes. Only **2** are Capella at Sunstone (`capella-lot-93`, `capella-lot-49`). The other 23 are Cadence (Henderson), Lyra at Sunstone, or Vireo at Summerlin.

API and SEO files:

- `POST` `app/api/contact/route.ts` — contact and Find Your Home forms to Follow Up Boss
- `app/sitemap.ts` — static routes plus model, move-in-ready, and service-area URLs. **`/faqs` is missing.**
- `app/robots.txt/route.ts` — allow-all, sitemap URL. There is **no `app/robots.ts`**.
- No `app/about`, no market-report route, no `/llms.txt`, no RealScout widget.

Root metadata (`app/layout.tsx`):

- `metadataBase`: `https://www.sunstonewoodsidehomes.com`
- Default title: `Dr. Duffyet Duffy | Las Vegas Real Estate Advisor` (typo; template `%s | Dr. Duffyet Duffy Realty`)
- Default description is valley-wide, not Capella-specific
- Canonical: `/`
- Open Graph and Twitter images: `/og-image.png` (see images)

## Heading map

### `/` `app/page.tsx`

- H1: The easiest way to find a Capella at Sunstone home
- H3: FRIENDLY & EFFICIENT AGENTS
- H3: EXPERIENCE A SEAMLESS JOURNEY
- H3: 90 PERCENT SUCCESS RATE
- H3: COMPREHENSIVE ACCESS
- H2: Find Your Home
- H3: Happy Hunting
- H3: Fast and Friendly
- H3: A Seamless Journey
- H3: One Stop Shop
- H3: Search Now. Pay Later.
- H3: Efficiency At It's Finest
- H3: Happiest Clients in Las Vegas
- H3: Find Home.
- H3: Luxury at the Right Price.
- H2: Home Awaits
- H2: Need keys in 60 days or less?
- H3: Featured inventory
- H2: Unlock real-time Woodside listings across Las Vegas
- H3: What you’ll track
- H2: Three designer single-story plans to explore
- H3: Aries Plan 1, Taurus Plan 2, Virgo Plan 3 (from data)
- H2: Navigate the homebuyer experience with confidence
- H3: 1. Strategy Consultation; 2. Community + Plan Match; 3. Offer to Closing
- H2: Why buyers choose Capella at Sunstone
- H3: Lifestyle perks
- H2: Concierge guidance loved by Las Vegas homeowners
- H2: Concierge-level support from first tour to final walkthrough
- H3: Design studio playbooks; Weekly construction check-ins; Relocation logistics; Post-close care
- H2: Construction timeline at a glance
- H2: Essential resources for Sunstone buyers
- H3: Buyer Journey Roadmap; Financing Playbook; Community Preview
- H2: Imagine life on one level

### `/sell`

- H1: Sell your current home to buy at Capella at Sunstone
- H2: Builder snapshot (Woodside Homes)
- H2: How Dr. Jan Duffy helps sellers
- H2: Questions sellers ask

### `/buyers-guide`

- H1: Navigate your Sunstone purchase with expert precision
- H2: Discovery Session; Financing & Pre-Approval; Community & Plan Selection; Offer, Build, & Closing
- H2: Buyer checklists
- H3: Preferred partners on call
- H2: Ready to map out your homebuying game plan?
- H2: Buyer FAQs

### `/communities`

- H1: Live where desert adventure meets modern convenience
- H2: Capella at Sunstone; Sunstone Master Plan; Beyond Sunstone
- H2: What locals love
- H3: spotlight names from page data
- H2: Ready for a neighborhood preview tour?

### `/service-areas` and `/service-areas/[slug]`

Index H1 duplicates the communities H1: Live where desert adventure meets modern convenience. Cards use each area name as H2.

Detail H1 is the area headline:

- Capella at Sunstone: Sunstone’s single-story showpiece with curated Woodside designs
- Sunstone Master Plan: Connected desert living with miles of trails and emerging amenities
- Summerlin: Las Vegas’ premier master plan with resort-level amenities and top-tier schools
- Skye Canyon: Adventure-forward community with built-in fitness and social programming
- Northwest Las Vegas: Established neighborhoods with larger lots, gated enclaves, and suburban convenience

Shared H2s: Community snapshot; Buyer insights; Concierge notes; Ready to tailor a {area} tour? H3: At-a-glance stats.

### `/models` and `/models/[slug]`

- Index H1: Compare the single-story plans at Capella
- Index H2: Aries Plan 1; Taurus Plan 2; Virgo Plan 3
- Detail H1: each plan’s `headline` (open-concept / multi-gen / luxury primary retreat)
- H2: Design story; Is this the right fit?
- H3: Imagine your finishes

### `/move-in-ready` and detail

- H1: Designer-curated homes ready when you are
- H3: Cadence, Henderson 89011; Sunstone, Las Vegas 89143; Summerlin, Las Vegas 89138
- H2: `{n} homes available`
- H3: `{planName} {lot}` on each card
- Detail H1: `{planName} {lot}`
- H2: Why you will love it; Concierge notes
- H3: community context heading; Ready to reserve {plan}?

### `/financing`

- H1: Align your financing with Capella’s build timelines
- H2: Clarify budget & incentives; Select the right loan product; Lock with confidence
- H2: Preferred lending partners
- H3: Summit Peak Mortgage; Desert Equity Lending; Silver State Home Loans
- H3: Cost worksheet; Monthly payment planner; Closing timeline
- H2: Need a second opinion on your financing plan?
- H2: Concierge support

### `/faqs`

- H1: Woodside Homes Research FAQ Library
- H2: Jump to a research category
- H2: eight category titles in `lib/faqs.ts` (company, specs, floor plans, pricing, communities, process, market, education)

### `/contact`

- H1: Let’s plan your next move together
- H2: Concierge request form; Visit the sales center
- H3: Top requests; Plan your visit

### Shared chrome

- Header (`components/site-header.tsx`): no H1. Wordmark “Dr. Duffy Realty”. Nav: Home, Home Plans, Move-In Ready, Sell to Buy, Buyer Journey, Communities, Service Areas, Financing, Contact. Phone link and “Sell to buy”.
- Footer (`components/site-footer.tsx`): brand, contact, buyer tools, service-area list, license line, brokerage line. No heading tags.
- `components/faq-section.tsx`: H2 is the section title; H3 is `Q: {question}`.

## Images

No page uses `next/image` or an `<img>` of a home, landscape, or plan. There is no `lorem` or `ipsum` string.

| Asset or slot | What it is | Used by |
| --- | --- | --- |
| `public/og-image.png` | Screenshot of the v0 Platform API demo (“v0 Platform API Demo”, localhost:3000). Not a property photo. | Open Graph, Twitter, schema `logo` and `image` |
| `public/file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg` | Next.js starter icons | Not referenced by app code |
| `screenshot.png` (repo root) | v0 demo screenshot | `README.md` only |
| `app/models/[slug]/page.tsx` “Imagine your finishes” | Dashed box that says to replace it with a gallery once assets exist | Model detail pages |
| Homepage “Featured inventory” | Dashed panel, no photo | `app/page.tsx` |
| Homepage listings block | `h-[420px] animate-pulse` skeleton | `app/page.tsx` |
| Contact map | Google Maps iframe of the sales-center area, with a pulse skeleton while deferred | `app/contact/page.tsx` |
| Move-in-ready cards, model cards, community cards | Text-only `rounded-3xl` cards | Those pages |

Visual system today is the opposite of the requested luxury system: navy `#173365`, white cards, `rounded-3xl` / `rounded-full`, gradient bands (`from-primary via-primary-hover to-[#004494]`), hover lift, Archivo + Manrope + Roboto. Documented as a Next Step Realty clone in `app/globals.css` and `docs/next-step-realty-design-implementation.md`.

## Generic, placeholder, and unverified copy

No lorem ipsum. The generic layer is marketing language and unsourced claims.

Homepage and chrome:

- “We are a leading real estate advisor in Las Vegas…”
- “90 PERCENT SUCCESS RATE” and body line “a 90% success rate” plus “highest customer satisfaction in Las Vegas”
- “Happiest Clients in Las Vegas”
- “Search Now. Pay Later.”
- “Happy Hunting”, “One Stop Shop”, “Fast and Friendly”, “Efficiency At It's Finest” (grammar error)
- “Concierge guidance loved by Las Vegas homeowners”
- “Unlock real-time Woodside listings across Las Vegas” — no RealScout or IDX widget is mounted
- Footer: “Dedicated to guiding homebuyers through Sunstone, Summerlin, and the Greater Las Vegas Valley…”

Financing partners have no source in the repo: Summit Peak Mortgage, Desert Equity Lending, Silver State Home Loans. Treat as placeholder names until verified.

`lib/faqs.ts` is 4,914 lines and about 438 `question` fields. The same answers repeat across iterations. Examples that must not be reused as local proof until Step 1 sources them:

- “500+ new construction closings”
- “Since 2020, Sunstone and Cadence resale comps show 6–9% annual appreciation” versus a Clark County average
- “Sunstone inventory turned in 28 days on average during 2024” versus a county 42-day average
- “Woodside accounts for about 6.8% of Clark County single-family permits”
- “Appraisers credited about $0.65 per dollar on quartz counter upgrades in 2024”
- “The planned Sunstone charter already secured funding, boosting family demand”
- HOA, SID/LID, and commute figures stated without a dated source URL

Service-area stats with no source URL in the file:

- Capella starting price `$585,990` (also in `lib/capella-builder-facts.ts`, noted as Woodside page, dated 2026-10-12 — the only builder fact with a URL and date)
- Capella HOA `$75 / month`
- Sunstone “Approximately 3,300 homes”
- Summerlin median `$800K+`, “top-ranked” schools, “26+ established villages”
- Northwest median `$550K (single-family, 2024 YTD)` — older than 60 days as of this audit date
- Skye Canyon HOA `$49 / month`

Move-in-ready prices and lot specs in `lib/move-in-ready.ts` have no source URL or date in the file. Most of that inventory is Cadence in Henderson, which is outside the domain’s area.

Contact form placeholders are generic: “Alex Martinez”, `you@example.com`, `(555) 123-4567`.

## Fair Housing flags already in copy

These must come out in a later step. Listing them here so they are not carried forward:

- Summerlin headline and highlights: “premier”, “top-tier schools”, “top-ranked Clark County schools”
- Northwest headline: “Established neighborhoods”; concierge note “established neighborhoods”; stats “26+ established villages”
- Northwest highlight: “age-qualified communities”
- Skye Canyon description: “young families”
- Model lifestyle lines: “up-sizing families”, “Ideal for families welcoming parents…”
- FAQ: “boosting family demand”; “flex for their family”
- Schema `knowsAbout`: “Las Vegas 55+ and active-adult communities”
- FAQ line that buyers are represented “exclusively” (representation wording; still matches the banned word)

School **names** already on the site (keep as names only, drop quality language): Henry & Evelyn Bozarth ES, Edmundo Escobedo MS, Centennial HS, Edith Garehime ES, Anthony Saville MS, Shadow Ridge HS.

## Schema and SEO gaps

Present:

- `RealEstateAgent` on every page via root layout (`lib/structured-data.ts`). Includes phone, email, hours, license, Capella `areaServed`, Sunstone `containedInPlace`, Las Vegas, ZIP 89143, street address.
- `FAQPage` on home, sell, financing, buyers guide, and the FAQ library
- `BreadcrumbList` on interior pages. Home imports the helper and does not render a breadcrumb.
- `Product` + `Offer` on each move-in-ready detail page (not `RealEstateListing`)

Missing versus the brief:

- No `LocalBusiness` separate from the agent node
- No standalone `Place` for the community beyond nested `areaServed`
- No `Article` (no market report page)
- No per-page `generateMetadata` length check; several titles are fine, the root default title contains the Duffyet typo
- Canonical is only set globally to `/`, so interior pages do not declare their own canonical
- Sitemap omits `/faqs`
- `robots` is a route handler, not `app/robots.ts`
- No `/llms.txt`
- Open Graph image is the v0 demo screenshot
- No RealScout search placeholder

## Components

| Component | Role |
| --- | --- |
| `components/site-header.tsx` | Sticky nav, phone, sell CTA |
| `components/site-footer.tsx` | NAP, license, brokerage, links |
| `components/contact-form.tsx` | Contact form |
| `components/find-your-home-form.tsx` | Homepage lead form |
| `components/faq-section.tsx` | FAQ block |
| `components/json-ld.tsx` | JSON-LD injector |
| `components/lead-form-alerts.tsx` | Form status |
| `components/deferred-render.tsx` | Defers map / heavy blocks |
| `components/v0-logo.tsx` | v0 template leftover |
| `components/ui/*` | shadcn-style primitives (button, dialog, drawer, command, etc.) |
| `app/move-in-ready/_components/move-in-ready-browser.tsx` | Filterable inventory grid |

No `components/idx/*` folder. Do not add IDX markup that changes listing attribution rules.

## What Step 1 is allowed to do after “go”

Research only for **Capella at Sunstone / Sunstone master plan, Las Vegas 89143**. Do not treat Cadence, Summerlin, Skye Canyon, or countywide FAQ stats as local proof. Flag anything older than 60 days. Do not quote Zillow or Redfin estimates.

Stopped here. Reply **go** to start Step 1.
