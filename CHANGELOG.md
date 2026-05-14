# Changelog

All notable changes to the SEO Expert skill are documented here.

This project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.0] — 2026-05-14

Cleanup release. The skill's value is its playbooks and the output contract — not how those playbooks were authored. This release removes references to the training corpus from every client-facing surface so the package presents as a polished, hand-written consultant skill.

### Removed
- `sources/video-index.md` — public source-video metadata index removed from the published package.
- `core/video-derived-lessons.md` — auto-generated topic bullets removed from the published package.
- The `sources/` directory is no longer part of the npm tarball or repo.

### Changed
- **Output Contract item 6** rephrased: *"Source references when drawing from the video-derived corpus"* → *"Source references when citing claims, statistics, definitions, or third-party content."* The contract stays six parts; the trigger is now generic.
- **`SKILL.md`** description trimmed to *"built on a set of hand-written, regularly maintained playbooks that compress senior SEO consulting practice into a portable, auditable skill."*
- **Guardrails** consolidated: a single "No third-party content reproduction" rule replaces the prior "no raw transcripts" wording across `SKILL.md` and every adapter.
- **README + INSTALL upload checklists** trimmed from 9 files to 7 (removed the two video files from Claude Project / ChatGPT / Perplexity Space upload instructions).
- **`bin/seo-expert.js`** — `install claude-code` no longer copies `sources/` into `~/.claude/skills/seo-expert/`.
- **`package.json`** — `files` whitelist no longer includes `sources/`.
- **`.github/workflows/verify.yml`** — required-file check no longer requires the two removed files.
- **`.github/PULL_REQUEST_TEMPLATE.md`** — Output Contract checklist and anti-patterns reworded to remove transcript-specific language.

### Unchanged
- The five `core/*.md` playbooks (`ai-seo-operating-system`, `technical-seo`, `content-strategy`, `local-seo`, `programmatic-seo`) — same guidance, same depth.
- The nine prompt templates in `prompts/universal-ai-seo-prompts.md`.
- The five adapters' install flows, principles, and output contracts.
- The CLI commands and behavior (`install`, `copy`, `list`, `info`, `help`).
- License (MIT), Node ≥ 18 requirement, scoped name `@piramilan/seo-expert`.

### Migration
- **`npx` users:** the next `npx @piramilan/seo-expert install <tool>` automatically pulls 0.3.0.
- **Manual installers:** drop the two files from your knowledge bases (Claude Project, ChatGPT GPT, Perplexity Space). Re-paste the updated adapter block where the Output Contract wording matters to you.
- **Pinned users:** `npx @piramilan/seo-expert@0.2.0 install <tool>` still works.

[0.3.0]: https://github.com/Piramilan/seo-expert/releases/tag/v0.3.0

## [0.2.0] — 2026-05-13

One-line install via `npx`. Same skill content as 0.1.0; new way to deliver it.

### Added
- `package.json` — npm package metadata. Published as `@piramilan/seo-expert` to the public registry.
- `bin/seo-expert.js` — zero-dependency Node CLI. Drives:
  - `npx @piramilan/seo-expert install <tool>` for file-based installs (Cursor, Cline, Windsurf, Aider, continue.dev, Claude Code)
  - `npx @piramilan/seo-expert copy <tool>` for clipboard-based installs (ChatGPT, Claude Project, Gemini, Perplexity)
  - `npx @piramilan/seo-expert` for the interactive picker
  - `list`, `info`, `help` subcommands for discovery
- Existing-file backup on install — any pre-existing `.cursorrules` / `CONVENTIONS.md` / `.clinerules` is renamed to `<file>.bak.<timestamp>` before being overwritten.
- Cross-platform clipboard support (macOS `pbcopy`, Linux `wl-copy`/`xclip`/`xsel`, Windows `clip`) with a `seo-expert-adapter.md` file fallback when none is available.

### Changed
- `README.md` rewritten as a one-stop install guide with table of contents, npx primary path, and inline manual paths per AI tool.
- `INSTALL.md` adds a "Quickest path — one-line npx" section at the top and corrects the manual Claude Code clone path to `~/.claude/skills/seo-expert`.
- Skill content under `core/`, `adapters/`, `prompts/`, `sources/`, and `SKILL.md` is unchanged from v0.1.0 — `npx @piramilan/seo-expert@0.1.0` and `@0.2.0` ship identical guidance.

### Requirements
- Node ≥ 18 for the `npx` flow (zero deps, uses only `node:` built-ins).
- Manual install paths require no runtime — just file copy.

[0.2.0]: https://github.com/Piramilan/seo-expert/releases/tag/v0.2.0

## [0.1.0] — 2026-05-13

Initial public release.

### Added
- `SKILL.md` — canonical skill definition with frontmatter, six-step universal flow, task → playbook routing table, eight operating principles, six-part output contract, and guardrails.
- `core/ai-seo-operating-system.md` — audits, AI visibility, measurement, paid-AI-surface guidance.
- `core/technical-seo.md` — crawl, index, schema, performance, Search Console workflow, citation targeting.
- `core/content-strategy.md` — briefs, topic clusters, content refresh, visual pipeline, AI-assisted internal linking.
- `core/local-seo.md` — Google Business Profile, map pack behavior signals, location pages, review acquisition.
- `core/programmatic-seo.md` — six pattern recipes, validation, monitoring, kill-switch failure modes, "when NOT to go programmatic".
- `core/video-derived-lessons.md` — generated lessons keyed by 8 topic tags with source links.
- `prompts/universal-ai-seo-prompts.md` — 9 ready-to-paste prompt templates (audit, page rewrite, content brief, technical, schema, local, programmatic, measurement, authority).
- `adapters/claude-project-instructions.md` — Claude.ai / Claude Desktop.
- `adapters/chatgpt-instructions.md` — ChatGPT Custom GPT / Project.
- `adapters/gemini-gem-instructions.md` — Gemini Gem.
- `adapters/perplexity-space-instructions.md` — Perplexity Space.
- `adapters/coding-agent-rules.md` — Cursor / Cline / Windsurf / Aider / continue.dev.
- `sources/video-index.md` — public source-video metadata index.
- `INSTALL.md` — per-tool setup walkthrough.

### Principles enforced by all adapters
- Answer-first structure
- Entities over keywords
- Extractability (H2/H3 questions, short paragraphs, tables, FAQ blocks)
- Source-backed claims
- AI visibility separated from traditional ranking
- Conversion outcomes over vanity metrics
- Diagnose before prescribing
- Verify, then ship

### Guardrails
- No bought reviews · no faked engagement · no link farms · no hidden text · no doorway pages · no generated-content spam · no keyword stuffing · no schema mismatched with visible content · no reproduction of raw third-party transcripts

[0.1.0]: https://github.com/Piramilan/seo-expert/releases/tag/v0.1.0
