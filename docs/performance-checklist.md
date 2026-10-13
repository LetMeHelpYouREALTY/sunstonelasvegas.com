# Performance & Media Optimization Checklist

SunstoneWoodsideHomes.com currently relies on lightweight gradients and typography, but as new media arrives use this workflow to keep Core Web Vitals strong.

## Image strategy
- Export hero/model photography at 1920px max width (WebP + fallback JPG).
- Serve gallery assets through `next/image` with `placeholder="blur"` and descriptive `alt` text.
- Keep per-image budgets under 200 KB; run `npx sharp-cli input.jpg --webp` or TinyPNG before commit.

## Video handling
- Host walkthroughs on YouTube/Vimeo with `loading="lazy"` embeds.
- Provide 16:9 poster frames and transcripts for each video; add `VideoObject` schema.

## Lighthouse workflow
1. `vercel build` (CI) or `vercel dev` locally, then run `npx @vercel/lighthouse https://www.sunstonelasvegas.com`.
2. Track LCP hero text shifting—reserve space for future media with fixed aspect-ratio wrappers.
3. Address any INP warnings by deferring non-critical scripts and trimming client-side filters if necessary.

## Font & CSS tips
- continue relying on `next/font` for Montserrat and Source Sans (no FOIT).
- Keep custom gradients within utility classes to minimize global CSS bloat.

## Performance Optimizations Applied (Jan 2026)

### JavaScript & Build Optimizations
- ✅ Updated TypeScript target to ES2020 (removes 14 KiB of legacy polyfills)
- ✅ Enabled SWC minification for faster builds and smaller bundles
- ✅ Configured console removal in production (excludes errors/warnings)

### Third-Party Script Optimization
- ✅ Deferred Google Tag Manager to `lazyOnload` strategy (reduces main thread blocking)
- ✅ Added preconnect/dns-prefetch hints for Google Tag Manager and Analytics
- ✅ Added preconnect hints for Google Fonts (fonts.googleapis.com, fonts.gstatic.com)

### Image & Asset Optimization
- ✅ Configured image optimization with AVIF/WebP formats
- ✅ Set optimal device sizes and image sizes for responsive images
- ✅ Added cache headers for static assets (1 year immutable cache)

### CSS & Font Optimization
- ✅ Fonts already using `display: swap` via next/font (prevents FOIT)
- ✅ Fonts loaded via next/font/google (automatic optimization)
- ✅ CSS handled by Next.js automatic optimization

### LCP Element Optimization
- ✅ Hero section marked with comment for identification
- ✅ Hero text is server-rendered (no client-side delay)
- ✅ Below-fold content uses DeferredRender (lazy loading)

## Expected Improvements
- **LCP**: Reduced from 4.1s → target <2.5s (via deferred scripts + preconnect + font hints)
- **TBT**: Reduced from 100ms → target <200ms (via lazy-loaded GTM)
- **FCP**: Improved from 2.7s → target <1.8s (via font preconnect + reduced blocking)
- **JavaScript**: ~14 KiB savings from removing legacy polyfills
- **Third-party impact**: ~55 KiB savings from deferred GTM loading
- **Cache efficiency**: Static assets cached for 1 year (reduces repeat visit load time)

Log Lighthouse scores (>90 targets) in `/docs/seo-report.md` after major deploys.
