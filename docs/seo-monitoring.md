# SEO Monitoring Cadence

## Weekly
- Review Google Search Console → Performance (queries/landing pages).
- Check Indexing → Pages for new errors or exclusions.
- Spot-check Core Web Vitals for `/`, `/move-in-ready`, `/service-areas/sunstone-master-plan`.

## Monthly
- Export GA4 Traffic Acquisition report filtered to Organic Search.
- Compare conversion events (form submissions, mailto clicks, call clicks).
- Refresh `/docs/performance-checklist.md` with latest Lighthouse scores.

## Quarterly
- Re-submit sitemap after major content additions.
- Audit metadata & structured data using `npx @vercel/og-verify` and Rich Results Test.
- Update content calendar + outreach plan with performance insights.

## Tooling & Alerts
- Enable email alerts in Search Console for Coverage and Enhancements.
- Add Core Web Vitals dashboard to Looker Studio (connect Search Console + CrUX).
- Track changes in a CHANGELOG entry noting date, feature, and expected SEO impact.

## Answer engines (checked October 17, 2026)

- Google retired the FAQ rich result on May 7, 2026 and removed its documentation on June 15, 2026 (Search Central "What's new"). Do not expect FAQ rich results. The `FAQPage` JSON-LD stays only because it matches the visible questions word for word; the visible answers are what gets quoted.
- Keep FAQ answers visible. Google's snippet guidance (April 20, 2026) asks for content that is immediately visible, not behind an expandable section, for "Read more" deep links. `FaqList` renders each question as an `h3` with the answer in the open.
- Google's "Optimizing your website for generative AI features" guide (May 15, 2026) says no special markup or `llms.txt` is needed for AI Overviews or AI Mode, structured data must match visible text, and the Search Console Generative AI performance report is the measurement tool. Check that report monthly next to the Performance report.
- `public/llms.txt` is ignored by Google Search (clarified June 15, 2026). It is kept short and factual for other systems. Update it when a page is added or retired.
- `app/robots.ts` names the AI crawlers it allows (`OAI-SearchBot` for ChatGPT search, `PerplexityBot`, `GPTBot`, `ClaudeBot`, and the rest of the `AI_CRAWLERS` list) and then allows every other user agent. If a crawler block is ever added, keep `OAI-SearchBot` and `PerplexityBot` allowed.
- Entity markup: `entityGraphJsonLd` in `app/layout.tsx` publishes one `Person` (`#person`) with `hasCredential` and `knowsAbout`. That node is the `founder` of the sitewide `RealEstateAgent` (`#agent`), the `author` of Article pages (`/market-report`, `/local-guide`), and the `mainEntity` of the `/about` `ProfilePage`. Name, license, phone, and address all come from `lib/site.ts`; there is no `sameAs` because no profile URL has been verified. Add one only after confirming it is Dr. Jan Duffy's own profile.
