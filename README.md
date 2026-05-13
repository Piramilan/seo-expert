# SEO Expert

> One portable SEO + AI-SEO/GEO skill that works the same way in **Claude**, **ChatGPT**, **Gemini**, **Perplexity**, and coding agents (**Cursor**, **Cline**, **Windsurf**, **Aider**).

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-0.1.0-green.svg)](CHANGELOG.md)
[![Skill](https://img.shields.io/badge/skill-seo--expert-purple.svg)](SKILL.md)

A senior SEO + AI-search consultant in skill form. Diagnose before prescribing, return prioritized recommendations against a six-part output contract, and refuse fake-signal tactics. Built on hand-written playbooks plus a corpus of video-derived SEO lessons.

---

## What it does

Ask any of the following in your AI tool and the skill auto-routes to the right playbook:

- **SEO audit** of a site, page, or section
- **Content brief**, topic cluster plan, or editorial calendar
- **Page rewrite** for AI-answer extractability and traditional ranking
- **Technical SEO** review (crawl, index, schema, performance, internal links)
- **Schema markup** plan with JSON-LD that mirrors visible content
- **Local SEO** plan (Google Business Profile, reviews, map pack, service pages)
- **Programmatic SEO** plan (template + data + indexability rules)
- **AI visibility / GEO / AEO / LLMO** strategy (ChatGPT, Perplexity, Gemini, Claude, Copilot, AI Overviews)
- **Measurement** plan (Search Console + GA4 + AI-referral tracking)
- **Authority / backlink / citation** plan

## Output contract

Every deliverable from the skill contains, in order:

1. **Diagnosis** — what was observed, what's missing, what's assumed
2. **Prioritized recommendations** — ordered by impact ÷ effort, each naming a specific page/section/asset
3. **Concrete examples** — rewritten section, schema snippet, internal-link plan, or page template
4. **Verification steps** — tool, expected timeframe, signal to watch
5. **Risks, assumptions, dependencies**
6. **Source references** when drawing from the video corpus

If a critical input is missing, the skill asks one specific question rather than guessing.

---

## Install in your AI tool (≈5 minutes per tool)

See [INSTALL.md](INSTALL.md) for click-by-click instructions. Quick links:

| Tool | Adapter | What to do |
| --- | --- | --- |
| **Claude Code** | [SKILL.md](SKILL.md) | Drop the repo into your project; the skill auto-invokes when you ask SEO questions |
| **Claude Project / Desktop** | [adapters/claude-project-instructions.md](adapters/claude-project-instructions.md) | Paste into Project's custom instructions + upload the listed files |
| **ChatGPT Custom GPT / Project** | [adapters/chatgpt-instructions.md](adapters/chatgpt-instructions.md) | Paste into GPT instructions + upload the listed knowledge files |
| **Gemini Gem** | [adapters/gemini-gem-instructions.md](adapters/gemini-gem-instructions.md) | Paste into the Gem's instructions; embed core playbook content inline |
| **Perplexity Space** | [adapters/perplexity-space-instructions.md](adapters/perplexity-space-instructions.md) | Paste into Space instructions + add files to the library |
| **Cursor / Cline / Windsurf / Aider** | [adapters/coding-agent-rules.md](adapters/coding-agent-rules.md) | Drop into `.cursorrules` / `.clinerules` / `.windsurfrules` / `CONVENTIONS.md` |

---

## Repo layout

```
seo-expert/
├── SKILL.md                          ← canonical skill (entry point)
├── INSTALL.md                        ← per-tool setup walkthrough
├── core/
│   ├── ai-seo-operating-system.md    ← audits, AI visibility, measurement
│   ├── technical-seo.md              ← crawl, index, schema, performance, Search Console
│   ├── content-strategy.md           ← briefs, clusters, refresh, internal linking
│   ├── local-seo.md                  ← GBP, map pack, reviews, location pages
│   ├── programmatic-seo.md           ← templated page sets, validation, kill switches
│   └── video-derived-lessons.md      ← generated lessons by topic (with source links)
├── prompts/
│   └── universal-ai-seo-prompts.md   ← 9 ready-to-paste prompt templates
├── adapters/
│   ├── claude-project-instructions.md
│   ├── chatgpt-instructions.md
│   ├── gemini-gem-instructions.md
│   ├── perplexity-space-instructions.md
│   └── coding-agent-rules.md
└── sources/
    └── video-index.md                ← public source-video metadata index
```

---

## Operating principles (the rules the skill follows)

- **Answer-first structure** — lead with the direct answer, then proof
- **Entities over keywords** — each page is the canonical home for a named entity
- **Extractability** — H2/H3 questions, short paragraphs, comparison tables, FAQ blocks
- **Source-backed claims** — statistics and definitions cite a source
- **Separate AI visibility from traditional ranking** when both are in scope
- **Conversion outcomes, not vanity metrics** — every recommendation maps to revenue/leads/calls
- **Diagnose before prescribing** — name the page, query, or signal first
- **Verify, then ship** — every recommendation includes how to confirm it worked

## Guardrails (what the skill refuses)

No bought reviews · no faked map-pack engagement · no link farms · no hidden text · no doorway pages · no generated-content spam · no keyword stuffing · no schema that doesn't match visible content · no reproducing raw third-party transcripts. If asked, the skill refuses and recommends the durable equivalent.

---

## Quick example

> **You:** Audit `example.com` for SEO and AI visibility.
>
> **Skill returns:**
> 1. Diagnosis with specific findings (empty H1, missing schema, no AI-crawler policy, etc.)
> 2. Prioritized fixes in tiers (this week / this month / this quarter)
> 3. Concrete HTML rewrites + JSON-LD blocks ready to ship
> 4. Verification steps (Rich Results Test, Search Console, GA4 filters)
> 5. Risks (schema-mismatch, thin pages, competitor positioning)
> 6. Source links to the video corpus

---

## Versioning

Semver. See [CHANGELOG.md](CHANGELOG.md). Pin to a tag in your install if you want a stable surface.

## Contributing

Issues and PRs welcome. Useful contributions: new playbooks (`core/*.md`), new adapters (a new AI tool), new prompt templates (`prompts/*.md`), and edits that tighten existing guidance. Keep the six-part Output Contract intact — that's the skill's identity.

## License

[MIT](LICENSE). Use it, fork it, ship it inside your product, charge for it. Attribution appreciated, not required.
