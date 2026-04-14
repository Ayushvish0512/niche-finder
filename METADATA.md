# Complete File Metadata: Every File Explained (Core + node_modules + Locks)

Overview: Full breakdown of ALL files (project + npm deps). Explains WHY each exists, WHAT it does, HOW it helps your IG TG scraper.

## Detailed File Explanations (Project + node_modules + Locks)

### Core Project Files (Your Pipeline)
| File/Dir | Why Created | What Does | How Helps You | Usage |
|----------|-------------|-----------|--------------|-------|
| **package.json** | NPM requires for deps/scripts | Lists deps (playwright etc.), version, scripts | Runs `npm i`, installs everything automatically | `npm start` later |
| **package-lock.json** | NPM auto-generates | Locks exact dep versions | Reproducible installs, no version issues | `npm ci` for teams |
| **TODO.md** | Track approved plan | Checkboxes for steps (setup→test→git) | See progress, know what's next | Edit [x] marks |
| **plan.md** | Original product vision | PCOS influencer tool spec | Guides expansion (AI scoring, DB) | Read for big picture |
| **REQUIREMENTS.md** | Document stack | Table of deps/features/status | Quick setup reference | Check what's missing |
| **WORK_LOG.md** | Track AI work | Progress %, issues, hours | Know history, 80% done | Review status |
| **METADATA.md** | This file! | Explains ALL files | Easy understanding (your request) | Quick navigation |
| **scraper.js** | Core task: scrape IG | Launches headless Chrome, extracts bio/posts | Gets raw IG data locally (no API) | Core - feeds analyzer |
| **tg_analyzer.js** | TG inference | Feeds data to Ollama, parses JSON | Turns data → insights (pain_points for PCOS) | Business value |
| **cli.js** | User interface | Command line runner for pipeline | Easy: `node cli.js user` runs everything | Daily use |
| **data/** | Store results | JSON outputs | Persistent scraped/TG data | View `cat data/*.json` |

### node_modules/ (Auto-installed by `npm i`)
**Why**: NPM deps - don't edit/delete.
| Dir/File | Why | What Does | Helps |
|----------|-----|-----------|-------|
| **node_modules/** | NPM cache | Contains all libraries | Runs code |
| **.bin/** | Executables | `playwright`, tools | `npx playwright` |
| **commander/** | CLI lib | Parses args (`node cli.js user`) | Makes cli.js work |
| **fs-extra/** | File utils | JSON read/write safe | Saves data reliably |
| **ollama/** | Ollama client | Connects to local Ollama | TG analysis |
| **playwright/** + **playwright-core/** | Browser automation | Headless Chrome for IG | Scrapes dynamic pages |
| **universalify/whatwg-fetch/graceful-fs/jsonfile** | Helpers | File/fetch compatibility | Internal stability |
| **dist/** (in some) | Built JS | UMD bundles | Node compat |

### Other Auto-Files
| File | Why | What | Helps |
|------|-----|------|-------|
| **README.md** (in deps) | Docs | Lib info | Ignore |
| **LICENSE** | Legal | Open source terms | Ignore |

**Total Custom Files You Care About: 11**. Rest auto-generated for Node. Focus: cli.js → your IG TG data!

**Pro Tip**: `rm -rf node_modules package-lock.json && npm i` to reset.

## Workflow Diagram
```
username → cli.js → scraper.js → data/user.json
                    ↓
              tg_analyzer.js → data/user_tg.json (TG insights)
```

## Quick Start Context
1. Ollama: Download/install, `ollama serve`, `ollama pull llama3.2:3b`.
2. Test scrape: `node scraper.js pcosuser` (public profile).
3. Full: `node cli.js pcosuser`.

**Total Files: 8 (core pipeline + docs). Each self-contained, modular. No external API/scraping limits respected.**

