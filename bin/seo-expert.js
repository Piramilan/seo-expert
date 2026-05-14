#!/usr/bin/env node
// SEO Expert — npx installer
// Zero runtime dependencies. Node >= 18.

import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import readline from 'node:readline/promises';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const PKG = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8'));

// --- ANSI helpers (no chalk) ---------------------------------------------
const tty = process.stdout.isTTY;
const c = tty ? {
  reset: '\x1b[0m', bold: '\x1b[1m', dim: '\x1b[2m',
  blue: '\x1b[34m', green: '\x1b[32m', yellow: '\x1b[33m', red: '\x1b[31m', gray: '\x1b[90m',
} : { reset: '', bold: '', dim: '', blue: '', green: '', yellow: '', red: '', gray: '' };

const log = (m = '') => process.stdout.write(m + '\n');
const errf = (m) => process.stderr.write(c.red + 'error: ' + c.reset + m + '\n');
const ok = (m) => log(c.green + '✓ ' + c.reset + m);
const warn = (m) => log(c.yellow + '! ' + c.reset + m);
const head = (m) => log('\n' + c.bold + m + c.reset);

// --- Tool registry --------------------------------------------------------
// kind:
//   "rules-file"   → copy a single source file to a target path in cwd
//   "skill-dir"    → copy a directory tree into ~/.claude/skills/<name>/
//   "paste-adapter" → copy adapter content to clipboard and print steps
const TOOLS = {
  cursor: {
    label: 'Cursor',
    kind: 'rules-file',
    target: '.cursorrules',
    source: 'adapters/coding-agent-rules.md',
    note: 'AI-pair-programming editor',
  },
  cline: {
    label: 'Cline',
    kind: 'rules-file',
    target: '.clinerules',
    source: 'adapters/coding-agent-rules.md',
    note: 'VS Code agent',
  },
  windsurf: {
    label: 'Windsurf',
    kind: 'rules-file',
    target: '.windsurfrules',
    source: 'adapters/coding-agent-rules.md',
    note: 'Codeium AI editor',
  },
  aider: {
    label: 'Aider',
    kind: 'rules-file',
    target: 'CONVENTIONS.md',
    source: 'adapters/coding-agent-rules.md',
    note: 'CLI coding agent — pass with `aider --read CONVENTIONS.md`',
  },
  continue: {
    label: 'continue.dev',
    kind: 'rules-file',
    target: '.continue/seo-expert.md',
    source: 'adapters/coding-agent-rules.md',
    note: 'Open-source agent',
  },
  'claude-code': {
    label: 'Claude Code',
    kind: 'skill-dir',
    target: path.join(os.homedir(), '.claude', 'skills', 'seo-expert'),
    sources: ['SKILL.md', 'core', 'prompts', 'adapters'],
    note: 'Anthropic CLI — installs to ~/.claude/skills/seo-expert/',
  },
  'claude-project': {
    label: 'Claude Project / Desktop',
    kind: 'paste-adapter',
    source: 'adapters/claude-project-instructions.md',
    instructions: [
      '1. Go to claude.ai → New Project',
      '2. Paste the copied text into Custom instructions',
      '3. Upload to Project knowledge: SKILL.md, all core/*.md files, and prompts/universal-ai-seo-prompts.md',
    ],
  },
  chatgpt: {
    label: 'ChatGPT (Custom GPT or Project)',
    kind: 'paste-adapter',
    source: 'adapters/chatgpt-instructions.md',
    instructions: [
      '1. chatgpt.com → My GPTs → Create (or Projects → New Project)',
      '2. Paste the copied text into Instructions',
      '3. Upload the 9 knowledge files listed in the adapter',
    ],
  },
  gemini: {
    label: 'Gemini Gem',
    kind: 'paste-adapter',
    source: 'adapters/gemini-gem-instructions.md',
    instructions: [
      '1. gemini.google.com → Gems → New Gem',
      '2. Paste the copied text into Gem instructions',
      '3. Embed core/*.md content inline or paste at conversation start',
    ],
  },
  perplexity: {
    label: 'Perplexity Space',
    kind: 'paste-adapter',
    source: 'adapters/perplexity-space-instructions.md',
    instructions: [
      '1. perplexity.ai → Spaces → Create',
      '2. Paste the copied text into Space instructions',
      '3. Add SKILL.md + core/*.md + prompts/*.md to the Space library',
    ],
  },
};

// --- Utilities -----------------------------------------------------------
function read(rel) {
  return fs.readFileSync(path.join(ROOT, rel), 'utf8');
}

function writeFileSafely(target, content) {
  const abs = path.resolve(target);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  if (fs.existsSync(abs)) {
    const backup = abs + '.bak.' + Date.now();
    fs.copyFileSync(abs, backup);
    warn(`Existing file backed up → ${c.dim}${path.relative(process.cwd(), backup)}${c.reset}`);
  }
  fs.writeFileSync(abs, content);
}

function copyToClipboard(text) {
  const candidates = process.platform === 'darwin'
    ? [['pbcopy', []]]
    : process.platform === 'win32'
      ? [['clip', []]]
      : [['wl-copy', []], ['xclip', ['-selection', 'clipboard']], ['xsel', ['--clipboard', '--input']]];
  for (const [cmd, args] of candidates) {
    const r = spawnSync(cmd, args, { input: text });
    if (r.status === 0) return true;
  }
  return false;
}

// --- Commands ------------------------------------------------------------
function help() {
  log(`${c.bold}SEO Expert${c.reset} ${c.dim}v${PKG.version}${c.reset}`);
  log(`${c.dim}Portable SEO + AI-SEO skill — installs into any AI tool.${c.reset}\n`);
  log(`${c.bold}Usage${c.reset}`);
  log(`  npx ${PKG.name} install <tool>   Install skill files for a coding agent`);
  log(`  npx ${PKG.name} copy <tool>      Copy adapter content for a web AI tool`);
  log(`  npx ${PKG.name} list             List all supported tools`);
  log(`  npx ${PKG.name} info             Show version + repo info`);
  log(`  npx ${PKG.name}                  Interactive menu\n`);
  log(`${c.bold}Tools${c.reset}`);
  for (const [id, t] of Object.entries(TOOLS)) {
    const verb = t.kind === 'paste-adapter' ? `${c.blue}copy   ${c.reset}` : `${c.green}install${c.reset}`;
    log(`  ${verb} ${c.bold}${id.padEnd(16)}${c.reset} ${c.dim}${t.label} — ${t.note || ''}${c.reset}`);
  }
  log(`\n${c.dim}Docs: ${PKG.homepage}${c.reset}`);
}

async function installTool(id) {
  const t = TOOLS[id];
  if (!t) {
    errf(`unknown tool: ${id}. Run 'npx ${PKG.name} list' to see options.`);
    process.exit(1);
  }
  if (t.kind === 'rules-file') {
    const content = read(t.source);
    const target = path.resolve(process.cwd(), t.target);
    writeFileSafely(target, content);
    ok(`Installed ${t.label} rules → ${c.bold}${path.relative(process.cwd(), target) || t.target}${c.reset}`);
    log(`${c.dim}Next: commit the file. Your agent now applies SEO defaults when editing marketing pages, schema, sitemaps, or meta tags.${c.reset}`);
    return;
  }
  if (t.kind === 'skill-dir') {
    fs.mkdirSync(t.target, { recursive: true });
    for (const s of t.sources) {
      const src = path.join(ROOT, s);
      const dest = path.join(t.target, s);
      const stat = fs.statSync(src);
      if (stat.isDirectory()) fs.cpSync(src, dest, { recursive: true });
      else fs.copyFileSync(src, dest);
    }
    ok(`Installed ${t.label} skill → ${c.bold}${t.target}${c.reset}`);
    log(`${c.dim}Restart Claude Code (or open a new conversation). The skill auto-routes on SEO questions.${c.reset}`);
    return;
  }
  if (t.kind === 'paste-adapter') {
    return copyTool(id);
  }
}

function copyTool(id) {
  const t = TOOLS[id];
  if (!t) { errf(`unknown tool: ${id}`); process.exit(1); }
  if (t.kind !== 'paste-adapter') {
    errf(`'${id}' is a file-based install. Use: npx ${PKG.name} install ${id}`);
    process.exit(1);
  }
  const content = read(t.source);
  const copied = copyToClipboard(content);
  head(`${t.label} adapter`);
  if (copied) {
    ok('Copied adapter to clipboard.');
  } else {
    const fallback = 'seo-expert-adapter.md';
    fs.writeFileSync(fallback, content);
    warn(`Clipboard not available. Adapter written to ${c.bold}${fallback}${c.reset} — open and copy manually.`);
  }
  log('');
  log(`${c.bold}Next steps:${c.reset}`);
  t.instructions.forEach((line) => log('  ' + line));
  log(`\n${c.dim}Full setup walkthrough: ${PKG.homepage}/blob/main/INSTALL.md${c.reset}`);
}

function list() {
  head('Supported tools');
  const file = Object.entries(TOOLS).filter(([, t]) => t.kind !== 'paste-adapter');
  const web = Object.entries(TOOLS).filter(([, t]) => t.kind === 'paste-adapter');
  log(`\n${c.dim}File-based install (drops files into your project / home):${c.reset}`);
  for (const [id, t] of file) {
    log(`  ${c.green}install${c.reset} ${c.bold}${id.padEnd(16)}${c.reset} ${c.dim}${t.label}${c.reset}`);
  }
  log(`\n${c.dim}Web-based (copies adapter to clipboard):${c.reset}`);
  for (const [id, t] of web) {
    log(`  ${c.blue}copy   ${c.reset} ${c.bold}${id.padEnd(16)}${c.reset} ${c.dim}${t.label}${c.reset}`);
  }
  log(`\n${c.dim}Run 'npx ${PKG.name}' with no args for the interactive menu.${c.reset}`);
}

function info() {
  log(`${c.bold}${PKG.name}${c.reset} ${c.dim}v${PKG.version}${c.reset}`);
  log(`${PKG.description}`);
  log(`License: ${PKG.license}`);
  log(`Repo:    ${PKG.homepage}`);
  log(`Node:    ${process.version}`);
}

async function interactive() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  try {
    head('SEO Expert installer');
    log(`${c.dim}Pick the AI tool you want to install the skill into.${c.reset}\n`);
    const entries = Object.entries(TOOLS);
    entries.forEach(([id, t], i) => {
      const verb = t.kind === 'paste-adapter' ? `${c.blue}copy   ${c.reset}` : `${c.green}install${c.reset}`;
      log(`  ${(i + 1).toString().padStart(2)}. ${verb} ${c.bold}${id.padEnd(16)}${c.reset} ${c.dim}${t.label}${c.reset}`);
    });
    const answer = (await rl.question(`\nNumber or tool id (q to quit): `)).trim().toLowerCase();
    rl.close();
    if (answer === 'q' || answer === '') process.exit(0);
    const byNum = entries[parseInt(answer, 10) - 1];
    const id = byNum ? byNum[0] : answer;
    if (!TOOLS[id]) {
      errf(`unknown tool: ${answer}. Run 'npx ${PKG.name} list' to see options.`);
      process.exit(1);
    }
    await installTool(id);
  } catch (e) {
    errf(e.message);
    process.exit(1);
  }
}

// --- Dispatch ------------------------------------------------------------
async function main() {
  const [cmd, arg] = process.argv.slice(2);
  switch (cmd) {
    case undefined:
      return interactive();
    case 'help':
    case '-h':
    case '--help':
      return help();
    case 'list':
      return list();
    case 'info':
    case '-v':
    case '--version':
      return info();
    case 'install':
      if (!arg) { errf('usage: install <tool>'); process.exit(1); }
      return installTool(arg);
    case 'copy':
      if (!arg) { errf('usage: copy <tool>'); process.exit(1); }
      return copyTool(arg);
    default:
      errf(`unknown command: ${cmd}`);
      help();
      process.exit(1);
  }
}

main().catch((e) => { errf(e.message); process.exit(1); });
