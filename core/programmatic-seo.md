# Programmatic SEO Guardrails

> **When to use this playbook:** Programmatic SEO plan, large-scale templated pages (locations, integrations, comparisons, datasets), directory or catalog builds, index-bloat triage.

Programmatic SEO works when each generated page satisfies a real search intent with useful unique data. It fails when pages are template duplicates with swapped keywords. Treat the template as a delivery vehicle, not the value — the data and the intent are the value.

## Requirements before generating any pages

- **A repeatable search pattern with real demand.** Validate with Search Console queries, third-party keyword tools, or autocomplete + "people also ask" coverage across the pattern. If only a handful of variants have demand, write them by hand instead.
- **Unique data or examples for every page.** Each URL must answer something a generic article cannot. Common viable inputs: first-party data, structured public datasets, customer reviews, pricing/availability, location-specific facts.
- **Strong template sections that answer intent directly.** The template's first screen must contain the direct answer. Boilerplate intros pushed above the answer kill extractability.
- **Internal links between related variants.** Comparison pages link to category and to the items being compared; location pages link to the parent service and to nearby locations.
- **Quality controls.** Duplication thresholds, thin-content gates, crawl-budget rules (`noindex` filters/sorts/empties), and a kill-switch for variants that produce no value.

## Page-pattern recipes

Use these as starting templates. Each row is a viable programmatic pattern, the minimum unique data per page, and the failure mode to watch for.

| Pattern | Minimum unique data per page | Failure mode |
| --- | --- | --- |
| `[service] in [city]` | Local proof: clients, projects, reviews, neighborhoods served | Thin city swaps with identical body copy → Helpful Content demotion |
| `[product] alternatives` / `vs [competitor]` | Real comparison table, decision criteria, when-to-pick-each | Aggregator-style listings without an opinion → no citation, no ranking |
| `[tool] integrations / [tool] + [tool]` | Setup steps, supported triggers/actions, screenshots | Generic "you can connect X and Y" filler → indistinguishable from competitors |
| `[dataset] for [slice]` (e.g., salaries, prices, stats) | Actual numbers, methodology, last-updated date | Stale or fabricated numbers → trust damage that compounds |
| `[problem] in [industry/role]` | Industry-specific examples, named tools, named workflows | One generic article cloned across industries → cannibalization |
| Directory `[category] in [city]` | Real listings with structured fields, owner-verified data | Auto-scraped listings → spam classification + legal risk |

## Validation

- **Sample manually before indexing.** Generate 5–10 variants across the value distribution (head, mid, tail). Read them as a user. If two adjacent variants feel interchangeable, the data layer is too thin.
- **Schema parity.** Schema fields must match visible content. Do not emit `Product`/`Offer`/`LocalBusiness`/`FAQPage` schema with data the page does not display.
- **Conversion path.** Each variant must have a non-generic call to action tied to its intent (book in this city, compare these specific tools, download the dataset).
- **Index hygiene.** Canonical/`noindex` rules for filter variants, sort variants, empty results, and duplicate "near-miss" pairs. Watch Search Console **Pages** for "Duplicate, Google chose different canonical" and "Crawled — currently not indexed."

## Monitoring after launch

- Indexed-page count vs. submitted-sitemap URL count. Large gaps signal quality or duplication problems, not crawl problems.
- Impressions and clicks **per variant**, not just overall. The fat middle is where programmatic wins or dies.
- Crawl stats (Search Console → Settings → Crawl stats). A pattern that spikes crawl with low new-content yield will lose priority over time.
- Conversion quality per variant: if traffic grows but conversions don't, the page set is bringing the wrong intent.

## When NOT to go programmatic

- The user has fewer than ~30 viable variants. Hand-write them.
- The unique data layer is just paraphrased AI output. The variants will collapse into each other and look like spam.
- There is no clear conversion path per variant. Programmatic pages without a per-variant call to action become a traffic mirage.
- The category is already saturated by an authority directory (Yelp, G2, Glassdoor). Compete on a sub-slice with proprietary data, not the same slice with weaker data.
