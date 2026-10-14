# SEO Monitoring Cadence

## Weekly

- Review Google Search Console → Performance (queries/landing pages).
- Check Indexing → Pages for new errors or exclusions.
- Spot-check Core Web Vitals for `/`, `/move-in-ready`, and `/communities`.

## Sitemap lastmod and retired URLs

- `app/sitemap.ts` sets `lastModified` to `2026-10-13`, the close of the October 12–13, 2026 research in the current copy. Do not replace that with `new Date()` at build time. Change the date only when the page copy changes.
- `/financing`, `/buyers-guide`, `/service-areas`, and the known old service-area slugs return 308 and stay out of the sitemap. Unknown `/service-areas/[slug]` values return 404.

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
