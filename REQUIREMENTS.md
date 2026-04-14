# Project Requirements: Niche TG Finder (PCOS Instagram Scraper)

## Core Features
- Local scraping of public Instagram profiles: bio, followers, recent posts metadata.
- Local AI TG analysis: Infer audience (pain points, demographics) from bio/posts using Ollama.
- CLI pipeline: `node cli.js <username>` → scrape + analyze → JSON outputs.
- Niche focus: PCOS/women's health creators.

## Tech Stack (Local Only)
| Component | Version/Req | Status |
|-----------|-------------|--------|
| Node.js | v24.5.0+ | ✓ Installed |
| npm deps | playwright, ollama, fs-extra, commander | ✓ Installed |
| Playwright Browsers | Chromium/Firefox/WebKit | ✓ Downloaded |
| Ollama | v0.20.3+ server | ⏳ Install/run `ollama serve`, pull llama3.2:3b |
| Storage | data/ JSON files | ✓ Ready |

## Data Pipeline
1. Input: IG username (public).
2. Scrape → `data/{user}.json` (profile/posts).
3. Analyze → `data/{user}_tg.json` (niche score, TG insights).
4. Expand: Comments, related users, scoring.

## Usage Context Window
```
npm i  # Done
npx playwright install  # Done
ollama serve & ollama pull llama3.2:3b
node cli.js pcosnutritionist  # Scrapes/analyzes
```

**Next: Ollama setup, test on real username, git commit.**

