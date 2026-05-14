# Universal AI SEO Operating System

> **When to use this playbook:** SEO audit, page rewrite, AI-visibility / GEO / AEO plan, measurement plan. Also the default starting point when the task type is ambiguous.

Use this playbook to improve how a brand, page, or content library appears in traditional search and AI-generated answers. The goal is not only ranking; it is becoming a source that AI systems can extract, trust, and cite.

## Core Workflow

1. Diagnose the current search surface: target queries, existing pages, competitors, SERP features, AI answers, citations, and crawl/index status.
2. Map intent and entities: define the audience problem, primary entity, related entities, decision criteria, and proof needed for trust.
3. Make content extractable: lead with direct answers, use clear H2/H3 questions, concise paragraphs, tables, lists, FAQ blocks, and source-backed claims.
4. Build authority signals: cite original sources, add statistics, show first-hand experience, name authors or experts, collect reviews, and earn relevant mentions.
5. Fix technical blockers: crawlability, canonical URLs, schema, sitemap coverage, internal links, page speed, mobile usability, and indexability.
6. Validate and monitor: check Google/Bing indexing, AI answer citations, schema validity, rankings, impressions, clicks, leads, and content freshness.

## AI SEO / GEO Principles

- Write answer-first sections that can stand alone outside the page.
- Use named entities consistently: brand, product, location, category, audience, competitors, and use cases.
- Prefer comparison tables and decision frameworks for commercial queries.
- Add explicit sources for claims, statistics, definitions, and recommendations.
- Refresh pages when facts, prices, tools, policies, or market conditions change.
- Keep boilerplate low; unique, useful information is easier for AI systems to cite.

## Traditional SEO Principles

- One clear primary keyword intent per page.
- Unique title tag, meta description, H1, canonical URL, and structured heading hierarchy.
- Internal links should point from authority pages to pages that need ranking support.
- Image filenames and alt text should describe what is visible and relevant.
- Schema should match the visible page content.
- Avoid indexable thin pages, duplicate content, and orphan pages.

## Output Standard

Every AI tool using this repo should produce:

- Prioritized actions, not generic advice.
- Specific page or content examples.
- Verification steps.
- Risks, assumptions, and dependencies.
- Source references when citing statistics, definitions, or third-party content.

## Measuring AI Search Surface

- In GA4 → **Reports → Acquisition → Traffic Acquisition**, add a filter where **Session source** contains `chatgpt`, `perplexity`, `gemini`, or `copilot`. The traffic is small today but trending up; tracking it now establishes a baseline.
- Look at landing pages receiving LLM referrals. Those are the pages currently being cited — study what makes them extractable (clear answers, schema, entity definitions) and apply the pattern elsewhere.
- Manually prompt ChatGPT, Perplexity, and Google's AI Overview with the target queries. Record which sources they cite and how the brand is described. Citation gaps and incorrect descriptions are your top-priority content work.

## Earning LLM Citations

- LLMs are trained heavily on Reddit, Wikipedia, Stack Exchange, and a small set of high-authority editorial sites. A presence on those platforms — with the brand or product named — increases citation odds independent of traditional ranking.
- Create a Reddit account using the brand or founder name. Answer questions in subreddits where the audience already asks. Helpful, named, factual answers age into the training data; promotional answers get removed and damage the account.
- Ensure the brand has a clear entity profile across the open web: a "what is X" definition somewhere indexable, consistent descriptions on directories, and a Wikipedia or Wikidata entry if the business meets notability bars.

## Paid Surface Inside AI Tools

- ChatGPT is rolling out sponsored placements. Inventory is new, so CPCs are low and competition is thin relative to mature platforms.
- Intent inside ChatGPT is unusually explicit — users describe their problem in full sentences rather than two-word queries. Bid on long-tail intent that converts elsewhere; the targeting matches better than search ads at the same stage.
- Treat this as a 6–18 month arbitrage window. Once enterprise advertisers move in, CPCs normalize. The same playbook applied to Google Ads in 2003 and Facebook Ads in 2013.
