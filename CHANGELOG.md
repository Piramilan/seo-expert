# Changelog

All notable changes to the SEO Expert skill are documented here.

This project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
