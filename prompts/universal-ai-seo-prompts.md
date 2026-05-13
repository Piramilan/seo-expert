# Universal AI SEO Prompts

Ready-to-paste prompts that route to the right playbook. Each block ends with the Output Contract from `SKILL.md`, so the deliverable is consistent across AI tools.

## AI Visibility Audit

> Audit this brand or page for visibility across ChatGPT, Perplexity, Gemini, Claude, Copilot, Google AI Overviews, and traditional Google/Bing search.
>
> URL or brand: **[fill in]**
> Primary queries: **[fill in 3–10 target queries]**
>
> Return: (1) Diagnosis of current AI-answer surface and SERP surface, (2) Prioritized recommendations split into "AI visibility" and "Traditional ranking" lists, (3) Concrete examples — at least one section rewrite plus one schema/entity recommendation, (4) Verification steps including manual LLM prompts and the signal to watch, (5) Risks and assumptions, (6) Source references.
>
> Playbook: `core/ai-seo-operating-system.md`.

## Page Rewrite (AI + Search)

> Rewrite the following page section for AI-answer extractability and traditional ranking.
>
> URL: **[fill in]**
> Primary intent / target query: **[fill in]**
> Pasted content: **[paste]**
>
> Return: (1) Diagnosis of why the current section fails on extractability or intent, (2) Rewritten section in answer-first structure with H2/H3 questions, comparison-friendly formatting, FAQ candidates, and a concise citable summary, (3) Schema recommendation if applicable, (4) Internal-link suggestions, (5) Verification steps (Search Console, manual LLM prompts), (6) Source references.
>
> Playbooks: `core/ai-seo-operating-system.md`, `core/content-strategy.md`.

## Content Brief

> Create an SEO + AI-visibility content brief for this query.
>
> Query: **[fill in]**
> Audience: **[fill in]**
> Business model and conversion goal: **[fill in]**
>
> Return: (1) Search intent and audience job, (2) Primary entity and related entities, (3) Outline with H1 and H2/H3 questions plus answer-first lead, (4) Required statistics and sources, (5) Schema recommendation, (6) Internal-link plan (from and to), (7) Competitor angles to beat, (8) Conversion path, (9) Verification steps, (10) Risks and assumptions.
>
> Playbook: `core/content-strategy.md`.

## Technical SEO Audit

> Review this site for technical SEO and AI-crawler accessibility.
>
> URL / domain: **[fill in]**
> Stack (if known): **[fill in]**
>
> Return: (1) Diagnosis of crawl, index, canonical, sitemap, robots.txt, internal links, schema, performance (Core Web Vitals), mobile rendering, and AI-crawler access, (2) Prioritized fixes ordered by impact ÷ effort, (3) Concrete examples — at least one schema snippet and one internal-link plan, (4) Verification steps per fix (Search Console, Rich Results Test, Lighthouse, manual fetch), (5) Risks and dependencies, (6) Source references.
>
> Playbook: `core/technical-seo.md`.

## Schema Markup Plan

> Plan structured data for this page or page-type.
>
> URL or page-type: **[fill in]**
> Visible content summary: **[fill in]**
>
> Return: (1) Recommended schema types (Organization, WebSite, BreadcrumbList, Article, FAQPage, Product, LocalBusiness, SoftwareApplication, etc.) only where visible content supports them, (2) JSON-LD snippet, (3) Field-by-field mapping to visible content, (4) Validation steps (Rich Results Test + Schema.org validator), (5) Risks of over-schema or mismatched schema, (6) Source references.
>
> Playbook: `core/technical-seo.md` (Structured Data section).

## Local SEO Plan

> Build a local SEO plan for this business.
>
> Business name / city / service: **[fill in]**
> Existing GBP URL (if any): **[fill in]**
> Primary local queries: **[fill in]**
>
> Return: (1) Diagnosis of GBP, reviews, citations, on-site local proof, and map-pack visibility, (2) Prioritized recommendations across GBP optimization, review acquisition, on-site local pages, schema, citations, and behavior signals, (3) Concrete examples — one rewritten location page outline plus a review-prompt template, (4) Verification steps (rank tracker for map pack, GBP Insights, call tracking), (5) Risks (including spam-signal risk to avoid), (6) Source references.
>
> Playbook: `core/local-seo.md`.

## Programmatic SEO Plan

> Plan a programmatic page set for this pattern.
>
> Pattern: **[e.g., "[service] in [city]"]**
> Data source per variant: **[fill in]**
> Conversion goal per variant: **[fill in]**
>
> Return: (1) Demand validation — is the pattern worth automating, (2) Page template with mandatory unique-data sections, (3) Canonical/`noindex` rules for filter/sort/empty variants, (4) Internal-link structure between variants and to parents, (5) Index-hygiene plan and crawl-budget controls, (6) Sample of 3 generated variants to read manually before launching at scale, (7) Verification — what to monitor in Search Console post-launch, (8) Failure modes that would trigger a kill-switch.
>
> Playbook: `core/programmatic-seo.md`.

## Measurement Plan (Search Console + GA4 + AI referrals)

> Build a measurement plan for SEO and AI-search visibility.
>
> Site: **[fill in]**
> Conversion events: **[fill in]**
>
> Return: (1) Search Console reports and filters to set up (page-2 keyword backlog, impressions-vs-clicks gap, index coverage triage), (2) GA4 setup for AI referrals (source contains `chatgpt`, `perplexity`, `gemini`, `copilot`, plus landing-page report), (3) Manual LLM-prompt monitoring routine (queries, cadence, what to capture), (4) Rank-tracking choice and cadence, (5) Reporting frequency and audience, (6) Verification — how to confirm each tracker fires correctly.
>
> Playbooks: `core/technical-seo.md` (Working With Search Console) + `core/ai-seo-operating-system.md` (Measuring AI Search Surface).

## Authority / Backlink / Citation Plan

> Build an authority plan for this brand or product.
>
> Brand / product: **[fill in]**
> Existing authority assets: **[fill in if known]**
>
> Return: (1) Diagnosis of current entity profile across the open web (Wikipedia/Wikidata, Reddit, directories, podcasts, "best of" lists, reviews), (2) Prioritized acquisition plan: citation directories, brand mentions, podcast targets, "Reddit + named answer" plays, expert-quote campaigns, (3) Concrete examples — sample search operators to find targets plus a sample outreach angle, (4) Verification — how to confirm pickup and entity-profile improvement, (5) Risks — what counts as a black-hat shortcut and why to skip it, (6) Source references.
>
> Playbooks: `core/technical-seo.md` (Finding Citation and Backlink Opportunities) + `core/local-seo.md` for local-flavored variants.
