# Install — SEO Expert Skill

Five-minute setup per AI tool. Pick the tool(s) you use; the skill operates the same way in each.

This file is the deep walkthrough. The [README](README.md) has the same content in a more compact form — pick whichever you prefer.

---

## Quickest path — one-line `npx` (Node ≥ 18)

The package ships every adapter and playbook. The CLI either drops the right files into your project / home, or copies the adapter to your clipboard for web-based AI tools.

```bash
# Interactive menu
npx @milandev98/seo-expert

# Coding agents (drops the rules file into the current directory)
npx @milandev98/seo-expert install cursor      # → .cursorrules
npx @milandev98/seo-expert install cline       # → .clinerules
npx @milandev98/seo-expert install windsurf    # → .windsurfrules
npx @milandev98/seo-expert install aider       # → CONVENTIONS.md
npx @milandev98/seo-expert install continue    # → .continue/seo-expert.md

# Anthropic CLI (installs to ~/.claude/skills/seo-expert/)
npx @milandev98/seo-expert install claude-code

# Web-based AI tools — copies the adapter to clipboard + prints next steps
npx @milandev98/seo-expert copy chatgpt
npx @milandev98/seo-expert copy claude-project
npx @milandev98/seo-expert copy gemini
npx @milandev98/seo-expert copy perplexity

# Discovery
npx @milandev98/seo-expert list
npx @milandev98/seo-expert info
npx @milandev98/seo-expert help
```

**Pin a version for reproducible setups:**

```bash
npx @milandev98/seo-expert@0.2.0 install cursor
```

**Safety notes:**

- Existing target files (`.cursorrules`, `CONVENTIONS.md`, etc.) are backed up to `<file>.bak.<timestamp>` before being overwritten.
- Clipboard copy works on macOS (`pbcopy`), Linux (`wl-copy` / `xclip` / `xsel`), Windows (`clip`). If none are available, the adapter is written to `seo-expert-adapter.md` in the current directory.
- Zero runtime dependencies — the CLI uses only Node built-ins.

If you can't run Node, skip to the manual path for your tool below.

---

## Claude Code (developers, agencies, anyone using Claude in the terminal)

```bash
# Clone into the Claude Code skills directory
git clone https://github.com/Piramilan/seo-expert.git ~/.claude/skills/seo-expert
```

Then restart Claude Code (or open a new conversation). The skill auto-invokes when you ask SEO questions because of the `description:` in `SKILL.md` frontmatter.

**Test it:**
```
audit https://example.com for AI visibility
```

---

## Claude Project (claude.ai or Claude Desktop)

1. Go to **claude.ai → Projects → New Project**
2. Open [adapters/claude-project-instructions.md](adapters/claude-project-instructions.md), copy the block under `## Instructions (paste this)`
3. Paste into the Project's **Custom instructions** field
4. Upload to the Project's knowledge:
   - `SKILL.md`
   - `core/ai-seo-operating-system.md`
   - `core/technical-seo.md`
   - `core/content-strategy.md`
   - `core/local-seo.md`
   - `core/programmatic-seo.md`
   - `core/video-derived-lessons.md`
   - `prompts/universal-ai-seo-prompts.md`
   - `sources/video-index.md`
5. Save.

**Test it:** `Audit https://example.com for SEO`

---

## ChatGPT — Custom GPT (Plus/Pro/Team users)

1. Go to **chatgpt.com → My GPTs → Create a GPT → Configure**
2. Name: `SEO Expert`
3. Description: `Senior SEO + AI-SEO consultant. Audits, content briefs, page rewrites, schema, local SEO, programmatic SEO, AI visibility.`
4. Open [adapters/chatgpt-instructions.md](adapters/chatgpt-instructions.md), copy the block under `## Instructions (paste this)` → paste into **Instructions**
5. **Conversation starters** (copy these into the four starter slots):
   - `Audit this URL for SEO and AI visibility: `
   - `Rewrite this page section for AI extractability: `
   - `Build a content brief for the query: `
   - `Plan programmatic pages for the pattern: `
6. **Knowledge** — upload the same 9 files listed in the Claude Project section above
7. **Capabilities** — enable Web Browsing (lets the GPT fetch URLs you give it). Enable Code Interpreter only if you want it to validate JSON-LD locally.
8. **Save** → publish to *Only me*, *Anyone with the link*, or *Everyone* (the GPT Store).

**Test it:** start a new chat with the GPT and use one of the conversation starters.

### ChatGPT Project (alternative, simpler, no Custom GPT)
1. **chatgpt.com → Projects → New Project**
2. Paste the same instructions block into the Project's instructions
3. Drop the same 9 files into Project files
4. Same conversation starters work.

---

## Gemini Gem

1. **gemini.google.com → Gems → New Gem**
2. Open [adapters/gemini-gem-instructions.md](adapters/gemini-gem-instructions.md), copy the block under `## Instructions (paste this)` → paste into the Gem's instructions
3. Gems do not accept attached files the way Custom GPTs do. **Embed the playbook content inline:**
   - Copy the contents of `SKILL.md` and each `core/*.md` into the Gem's instructions, or
   - Paste the file you need at the start of each conversation (faster for long-context tasks)
4. Save.

**Test it:** *"Read https://example.com and audit it for SEO and AI visibility."* Gemini will fetch the URL and apply the embedded playbooks.

---

## Perplexity Space

1. **perplexity.ai → Spaces → Create a Space**
2. Open [adapters/perplexity-space-instructions.md](adapters/perplexity-space-instructions.md), copy the block under `## Instructions (paste this)` → paste into the Space's instructions
3. Add to the Space library (Perplexity supports `.md`):
   - `SKILL.md`
   - All 6 `core/*.md` files
   - `prompts/universal-ai-seo-prompts.md`
   - `sources/video-index.md`
4. Save.

**Why Perplexity is special:** it does live web search and cites every claim. Use it for *current-state* audits where you want fresh evidence (rank tracking, AI-answer surface, competitor backlinks).

**Test it:** *"Audit https://example.com — pull current SERP citations and AI-answer state, then apply the SEO Expert playbook."*

---

## Cursor / Cline / Windsurf / Aider / continue.dev (coding agents)

For agents that edit your repo's marketing pages, schema, sitemaps, or meta tags.

1. In your project root:
   - **Cursor:** save [adapters/coding-agent-rules.md](adapters/coding-agent-rules.md) as `.cursorrules` (or `.cursor/rules/seo-expert.md`)
   - **Cline:** save as `.clinerules`
   - **Windsurf:** save as `.windsurfrules`
   - **Aider:** save as `CONVENTIONS.md`, then run `aider --read CONVENTIONS.md`
   - **continue.dev:** copy the block into `.continue/config.json` `systemMessage` or `rules`
2. (Optional) Vendor the `core/*.md` playbooks into your repo under `docs/seo-expert/core/` so the agent can read depth when needed
3. Commit and push.

**What it does:** any time the agent edits a `.html`, `.jsx`, `.tsx`, `.mdx`, `.vue`, `.svelte`, `_app.*`, `_document.*`, `Header.*`, `Footer.*`, or `Head.*` file — or `sitemap.xml`, `robots.txt`, `manifest.*` — it automatically applies the SEO Expert defaults (single `<h1>`, schema parity with visible content, canonical, OG, Twitter Card, redirect maps).

**Test it:** ask the agent to *"add SEO meta tags and JSON-LD to the pricing page"*. Confirm the diff matches the Output Contract.

---

## How to verify your install worked

Run this prompt in any installed tool:

> Diagnose, then return the six-part output contract for this URL: `https://example.com`. Skip detailed recommendations — I just want to confirm the skill is wired up.

The response should contain six labeled sections (Diagnosis · Prioritized recommendations · Concrete examples · Verification steps · Risks/assumptions/dependencies · Source references). If any section is missing, the adapter wasn't fully pasted or files weren't uploaded.

---

## Updating

When this repo cuts a new release (see [CHANGELOG.md](CHANGELOG.md)):

- **Claude Code:** `git pull` in the skill directory
- **Claude Project / ChatGPT GPT / Perplexity Space:** re-upload the changed files
- **Gemini Gem:** re-paste the changed playbook content
- **Coding agents:** `git pull` if vendored, or replace the rules file

Pin to a tag (`git checkout v0.1.0`) if you want a stable surface.

---

## Need help?

Open an issue on the repo with:
- Which AI tool you're installing in
- What step failed
- The output you got vs. what you expected

PRs to improve this install guide are welcome.
