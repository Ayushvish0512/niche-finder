 in planines# Instagram Data Pipeline for Niche TG Finder (PCOS Warrior)

## Approved Plan Steps (Track Progress Here)

### Phase 1: Local Environment Setup
- [ ] Step 1.1: Check/install Node.js (execute `node --version` and `npm --version`).
- [ ] Step 1.2: Install Ollama (download/install if missing).
- [ ] Step 1.3: Pull Ollama model (e.g., llama3.1:8b) and test.
- [ ] Step 1.4: `npm init -y` and install deps: `npm i playwright ollama fs-extra commander`.
- [ ] Step 1.5: Create data/ directory for outputs.

### Phase 2: Implement Scraper
- [x] Step 2.1: Create `scraper.js` ✓
- [ ] Step 2.2: Test scraper: `node -e "require('./scraper').scrapeInstagramProfile('testuser')"`
- [x] Step 2.3: Create `tg_analyzer.js` ✓

### Phase 3: CLI & Integration
- [x] Step 3.1: Create `cli.js` ✓ (run `node cli.js testuser`)
- [ ] Step 3.2: Test full pipeline (after Ollama).

### Phase 4: Polish & Git
- [ ] Step 4.1: Add rate limiting/error handling.
- [ ] Step 4.2: Commit all: `git add . && git commit -m "Local IG data pipeline MVP" && git push`.

**Current Status:** Ready for Phase 1. Update [x] as completed.
**Next Action:** Node/Ollama check/install.

