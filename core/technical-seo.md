# Technical SEO Checklist

> **When to use this playbook:** Technical-SEO fix, schema markup plan, Search Console / GA4 measurement, citation and backlink targeting, crawl or index diagnostics.

## Crawl And Index

- Verify `robots.txt` allows important pages and required bots.
- Confirm XML sitemaps include only canonical, indexable URLs.
- Check pages return the correct HTTP status and do not rely on blocked resources.
- Ensure canonical tags are self-referencing unless consolidation is intentional.
- Remove noindex tags from pages that should rank.
- Submit the sitemap in Google Search Console under **Sitemaps**. Without an explicit submission, Google may delay or skip discovery of new pages — especially on new domains.
- For brand-new domains, verify ownership in Search Console first; if a site:yourdomain.com search returns "no results," that is the signal Google has not crawled at all yet.
- After adding any new section or content cluster, resubmit or "Inspect URL" the hub page to nudge recrawl.

## Site Structure

- Keep important pages within a few internal clicks from the homepage or hub pages.
- Use descriptive anchor text that matches the destination page intent.
- Create hub pages for major topic clusters and link to supporting content.
- Fix broken links, redirect chains, and orphan URLs.

## Structured Data

- Use `Organization`, `WebSite`, `BreadcrumbList`, `Article`, `FAQPage`, `Product`, `LocalBusiness`, or `SoftwareApplication` only when the visible content supports it.
- Keep schema fields accurate and current.
- Validate JSON-LD before shipping.

## Performance And Rendering

- Optimize Core Web Vitals, especially LCP, INP, and CLS.
- Render critical content in HTML whenever possible.
- Compress images and define image dimensions.
- Avoid layout shifts from late-loading ads, embeds, or fonts.

## Working With Search Console

- Open **Search Results**, sort by **Position**, and surface keywords ranking 11–20 (page 2). These are the cheapest wins — small content or internal-link improvements often move them onto page 1.
- Prioritize page-2 keywords with high **Impressions** but low **Clicks**: existing demand, weak conversion of that demand.
- For each promising query, click into it, see which page is ranking, and ask: does that page actually answer this intent, or is it ranking by accident? If accidental, build a dedicated page for the intent and link to it from the current ranking page.
- Use Search Console queries as a backlog source: stale FAQs, missing comparison angles, and gaps in topic coverage all surface here.

## Finding Citation And Backlink Opportunities

- Use search operators to surface directories and citation targets that already accept the niche:
  - `[industry] [city] inurl:directory`
  - `[industry] "submit your business"`
  - `[industry] "add your listing"`
- For competitor reconnaissance, run `"[competitor brand name]" -site:competitor.com` — this exposes every external page mentioning them, which usually includes the directories, podcasts, guest posts, and "best of" lists they have appeared on. Most are open to you too.
- Prioritize directories with a real audience over high-volume spam lists. Ten relevant placements outperform a hundred low-quality ones, especially after recent algorithm updates that demote sites with thin link profiles.
- Maintain NAP (Name / Address / Phone) consistency across every listing. Inconsistency dilutes the entity signal.
