# SEO Content Strategy

> **When to use this playbook:** Content brief, topic cluster plan, editorial calendar, content refresh, internal-link planning, visual / repurposing strategy.

## Topic Planning

- Start with audience jobs, pain points, and buying stages.
- Build topical clusters around entities, not isolated keywords.
- Cover definitions, comparisons, alternatives, pricing, implementation, mistakes, examples, and templates.
- Use internal links to make the cluster obvious to users and crawlers.

## Page Patterns

- Definition page: answer what it is, who it is for, how it works, examples, risks, and next steps.
- Comparison page: show decision criteria, table, best-fit recommendations, tradeoffs, and proof.
- Local/service page: prove location relevance, service specificity, reviews, process, and conversion path.
- Programmatic page: combine a repeatable template with unique data, examples, and entity-specific answers.

## Content Refresh

- Update dates only when content materially changes.
- Replace stale statistics and screenshots.
- Add new FAQs based on sales calls, support tickets, Search Console queries, and AI answer gaps.
- Merge or prune pages that compete for the same intent.

## Visual Asset Pipeline

- Convert long-form posts into embeddable infographics: paste the article into ChatGPT (or any image-capable model) and ask for a downloadable infographic, then embed it back into the article. Visual blocks improve dwell time, shareability, and pickup by image SERPs.
- For video sources, use Google Gemini Canvas — it can read a YouTube URL directly and generate an editable visual asset, which ChatGPT currently cannot do.
- Use Google NotebookLM to turn a stack of source files (PDFs, blogs, transcripts) into slide decks, infographics, and summaries that you can fact-check and reuse in articles.
- Always fact-check AI-generated visuals before publishing — hallucinated statistics in an infographic are worse than no infographic.

## AI-Assisted Internal Linking

- Identify a page-2 keyword from Search Console.
- Open ChatGPT with your sitemap XML (or a list of URLs + titles) and prompt: "I'm ranking on page 2 for [keyword]. From this sitemap, suggest three internal links into the ranking page with natural anchor text and the surrounding sentence context."
- Implement the suggestions, then reinspect the ranking page in Search Console; movement is usually visible within 2–4 weeks.
- Anchor text should describe the destination intent, not just contain the keyword.
