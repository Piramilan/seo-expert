# SEO Expert

> One portable SEO + AI-SEO/GEO skill that works the same way in **Claude**, **ChatGPT**, **Gemini**, **Perplexity**, and coding agents (**Cursor**, **Cline**, **Windsurf**, **Aider**).

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-0.3.0-green.svg)](CHANGELOG.md)
[![npm](https://img.shields.io/badge/npm-%40piramilan%2Fseo--expert-red.svg)](https://www.npmjs.com/package/@piramilan/seo-expert)
[![Skill](https://img.shields.io/badge/skill-seo--expert-purple.svg)](SKILL.md)

A senior SEO + AI-search consultant in skill form. Diagnose before prescribing, return prioritized recommendations against a six-part output contract, and refuse fake-signal tactics. Built on a set of hand-written, regularly maintained playbooks.

---

## Table of contents

- [What it does](#what-it-does)
- [Output contract](#output-contract)
- [Install — one-line `npx` (recommended)](#install--one-line-npx-recommended)
- [Install — manual paths (no Node required)](#install--manual-paths-no-node-required)
  - [Claude Code](#claude-code)
  - [Claude Project / Desktop](#claude-project--desktop)
  - [ChatGPT (Custom GPT / Project)](#chatgpt-custom-gpt--project)
  - [Gemini Gem](#gemini-gem)
  - [Perplexity Space](#perplexity-space)
  - [Cursor / Cline / Windsurf / Aider / continue.dev](#cursor--cline--windsurf--aider--continuedev)
- [Verify your install](#verify-your-install)
- [Update an existing install](#update-an-existing-install)
- [Repo layout](#repo-layout)
- [Operating principles](#operating-principles)
- [Guardrails](#guardrails)
- [Quick example](#quick-example)
- [Versioning, contributing, license](#versioning-contributing-license)

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
6. **Source references** when citing claims, stats, or third-party content

If a critical input is missing, the skill asks one specific question rather than guessing.

---

## Install — one-line `npx` (recommended)

Requires Node ≥ 18. The package ships every adapter and playbook; the CLI places them where each AI tool expects them or copies them to your clipboard.

**Interactive menu** — pick a tool from a list:

```bash
npx @piramilan/seo-expert
```

**Direct install per tool** — one command, done:

```bash
# Coding agents (drops the rules file into your current project directory)
npx @piramilan/seo-expert install cursor      # → .cursorrules
npx @piramilan/seo-expert install cline       # → .clinerules
npx @piramilan/seo-expert install windsurf    # → .windsurfrules
npx @piramilan/seo-expert install aider       # → CONVENTIONS.md
npx @piramilan/seo-expert install continue    # → .continue/seo-expert.md

# Anthropic CLI (installs to ~/.claude/skills/seo-expert/)
npx @piramilan/seo-expert install claude-code

# Web-based AI tools — copies the adapter to your clipboard + prints next steps
npx @piramilan/seo-expert copy chatgpt
npx @piramilan/seo-expert copy claude-project
npx @piramilan/seo-expert copy gemini
npx @piramilan/seo-expert copy perplexity
```

**Discovery commands:**

```bash
npx @piramilan/seo-expert list      # list every supported tool
npx @piramilan/seo-expert info      # version + repo info
npx @piramilan/seo-expert help      # full CLI usage
```

**Safety notes:**

- If a target file (`.cursorrules`, `CONVENTIONS.md`, etc.) already exists, the CLI backs it up to `<file>.bak.<timestamp>` before writing.
- Clipboard copy works on macOS (`pbcopy`), Linux (`wl-copy` / `xclip` / `xsel`), and Windows (`clip`). If none are available, the CLI writes `seo-expert-adapter.md` to the current directory so you can copy it manually.
- Pin a specific version for reproducible setups: `npx @piramilan/seo-expert@0.3.0 install cursor`.

---

## Install — manual paths (no Node required)

If you can't run `npx` or want to install without touching a terminal, every adapter is a plain Markdown file you can copy by hand. Pick your tool:

### Claude Code

The Anthropic CLI auto-loads skills from `~/.claude/skills/<name>/`.

```bash
git clone https://github.com/Piramilan/seo-expert.git ~/.claude/skills/seo-expert
```

Restart Claude Code (or open a new conversation). Ask any SEO question — the skill auto-routes because of the `description:` in [SKILL.md](SKILL.md) frontmatter.

**Test it:** `Audit https://example.com for SEO and AI visibility`

---

### Claude Project / Desktop

1. Go to **[claude.ai](https://claude.ai) → Projects → New Project**.
2. Open [adapters/claude-project-instructions.md](adapters/claude-project-instructions.md). Copy the block under **`## Instructions (paste this)`** into the Project's **Custom instructions** field.
3. Upload these files to the Project's knowledge base:
   - [SKILL.md](SKILL.md)
   - [core/ai-seo-operating-system.md](core/ai-seo-operating-system.md)
   - [core/technical-seo.md](core/technical-seo.md)
   - [core/content-strategy.md](core/content-strategy.md)
   - [core/local-seo.md](core/local-seo.md)
   - [core/programmatic-seo.md](core/programmatic-seo.md)
   - [prompts/universal-ai-seo-prompts.md](prompts/universal-ai-seo-prompts.md)
4. Save.

**Test it:** `Audit https://example.com for SEO`

---

### ChatGPT (Custom GPT / Project)

1. Go to **[chatgpt.com](https://chatgpt.com) → My GPTs → Create a GPT → Configure**. (For a Project instead, go to **Projects → New Project**.)
2. **Name:** `SEO Expert`. **Description:** *Senior SEO + AI-SEO consultant. Audits, content briefs, page rewrites, schema, local SEO, programmatic SEO, AI visibility.*
3. Open [adapters/chatgpt-instructions.md](adapters/chatgpt-instructions.md). Copy the block under **`## Instructions (paste this)`** → paste into **Instructions**.
4. **Conversation starters** (paste into the four starter slots):
   - `Audit this URL for SEO and AI visibility: `
   - `Rewrite this page section for AI extractability: `
   - `Build a content brief for the query: `
   - `Plan programmatic pages for the pattern: `
5. **Knowledge** — upload the same 7 files listed in the Claude Project section above.
6. **Capabilities** — enable Web Browsing (so the GPT can fetch URLs you give it). Code Interpreter is optional.
7. **Save** → publish to *Only me*, *Anyone with the link*, or *Everyone* (GPT Store).

**Test it:** start a new chat with one of the conversation starters.

---

### Gemini Gem

1. **[gemini.google.com](https://gemini.google.com) → Gems → New Gem**.
2. Open [adapters/gemini-gem-instructions.md](adapters/gemini-gem-instructions.md). Copy the block under **`## Instructions (paste this)`** → paste into the Gem's instructions.
3. Gems don't support attached files like Custom GPTs do. **Embed the playbook content inline:**
   - Copy the contents of [SKILL.md](SKILL.md) and each `core/*.md` into the Gem's instructions, or
   - Paste the file you need at the start of each conversation (faster for long-context tasks).
4. Save.

**Test it:** *"Read https://example.com and audit it for SEO and AI visibility."* Gemini will fetch the URL and apply the embedded playbooks.

---

### Perplexity Space

1. **[perplexity.ai](https://perplexity.ai) → Spaces → Create a Space**.
2. Open [adapters/perplexity-space-instructions.md](adapters/perplexity-space-instructions.md). Copy the block under **`## Instructions (paste this)`** → paste into the Space's instructions.
3. Add the 7 files (same list as the Claude Project section) to the Space library.
4. Save.

**Why Perplexity is special:** it does live web search and cites every claim. Use it for *current-state* audits where you want fresh evidence.

**Test it:** *"Audit https://example.com — pull current SERP citations and AI-answer state, then apply the SEO Expert playbook."*

---

### Cursor / Cline / Windsurf / Aider / continue.dev

For coding agents editing your marketing pages, schema, sitemaps, or meta tags.

In your project root, save [adapters/coding-agent-rules.md](adapters/coding-agent-rules.md) as the right filename for your agent:

| Agent | File path |
| --- | --- |
| Cursor | `.cursorrules` (or `.cursor/rules/seo-expert.md`) |
| Cline | `.clinerules` |
| Windsurf | `.windsurfrules` |
| Aider | `CONVENTIONS.md` — then run `aider --read CONVENTIONS.md` |
| continue.dev | `.continue/seo-expert.md` (or paste into `.continue/config.json` `rules`) |

**One command shortcut** (from your project root):

```bash
curl -fsSL https://raw.githubusercontent.com/Piramilan/seo-expert/main/adapters/coding-agent-rules.md > .cursorrules
```

Commit and push. The agent now applies SEO defaults automatically when editing any `.html`, `.jsx`, `.tsx`, `.mdx`, `.vue`, `.svelte`, `Head.*`, `_app.*`, `_document.*` file — or `sitemap.xml`, `robots.txt`, `manifest.*`.

**Test it:** ask the agent *"add SEO meta tags and JSON-LD to the pricing page"* and confirm the diff matches the six-part Output Contract.

---

## Verify your install

Run this prompt in any installed tool:

> Diagnose, then return the six-part output contract for `https://example.com`. Skip detailed recommendations — I just want to confirm the skill is wired up.

The response must contain six labeled sections: Diagnosis · Prioritized recommendations · Concrete examples · Verification steps · Risks/assumptions/dependencies · Source references (when applicable). If any section is missing, the adapter wasn't fully pasted or the knowledge files weren't uploaded.

---

## Update an existing install

When a new release cuts (see [CHANGELOG.md](CHANGELOG.md)):

- **`npx` users:** the next `npx @piramilan/seo-expert install <tool>` automatically pulls the latest version. Pin with `@x.y.z` if you don't want updates.
- **Claude Code (manual clone):** `cd ~/.claude/skills/seo-expert && git pull`
- **Claude Project / ChatGPT GPT / Perplexity Space:** re-upload only the files that changed (see the version's CHANGELOG diff).
- **Gemini Gem:** re-paste the changed playbook content.
- **Coding agents:** `git pull` if vendored, or re-run the curl one-liner to overwrite `.cursorrules` / equivalent.

Pin to a specific version for reproducible installs:

```bash
npx @piramilan/seo-expert@0.3.0 install cursor
```

---

## Repo layout

```
seo-expert/
├── SKILL.md                          ← canonical skill (entry point)
├── INSTALL.md                        ← per-tool walkthrough (mirror of this README's install sections)
├── README.md                         ← you are here
├── CHANGELOG.md                      ← versioned release notes
├── LICENSE                           ← MIT
├── package.json                      ← npm metadata + bin field
├── bin/
│   └── seo-expert.js                 ← npx CLI (zero deps, Node ≥ 18)
├── core/
│   ├── ai-seo-operating-system.md    ← audits, AI visibility, measurement
│   ├── technical-seo.md              ← crawl, index, schema, performance, Search Console
│   ├── content-strategy.md           ← briefs, clusters, refresh, internal linking
│   ├── local-seo.md                  ← GBP, map pack, reviews, location pages
│   └── programmatic-seo.md           ← templated page sets, validation, kill switches
├── prompts/
│   └── universal-ai-seo-prompts.md   ← 9 ready-to-paste prompt templates
└── adapters/
    ├── claude-project-instructions.md
    ├── chatgpt-instructions.md
    ├── gemini-gem-instructions.md
    ├── perplexity-space-instructions.md
    └── coding-agent-rules.md
```

---

## Operating principles

Rules the skill follows on every task:

- **Answer-first structure** — lead with the direct answer, then proof
- **Entities over keywords** — each page is the canonical home for a named entity
- **Extractability** — H2/H3 questions, short paragraphs, comparison tables, FAQ blocks
- **Source-backed claims** — statistics and definitions cite a source
- **Separate AI visibility from traditional ranking** when both are in scope
- **Conversion outcomes, not vanity metrics** — every recommendation maps to revenue/leads/calls
- **Diagnose before prescribing** — name the page, query, or signal first
- **Verify, then ship** — every recommendation includes how to confirm it worked

## Guardrails

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
> 6. Source links for any cited stats or third-party content

---

## Versioning, contributing, license

**Semver.** See [CHANGELOG.md](CHANGELOG.md). Pin to a tag (`v0.3.0`) or to an npm version (`@piramilan/seo-expert@0.3.0`) if you want a stable surface.

**Contributing.** Issues and PRs welcome. Useful contributions: new playbooks (`core/*.md`), new adapters (a new AI tool), new prompt templates (`prompts/*.md`), and edits that tighten existing guidance. Keep the six-part Output Contract intact — that's the skill's identity. See `.github/PULL_REQUEST_TEMPLATE.md` for the checklist.

**License.** [MIT](LICENSE). Use it, fork it, ship it inside your product, charge for it. Attribution appreciated, not required.
