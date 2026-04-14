#!/usr/bin/env node
const { Command } = require('commander');
const { scrapeInstagramProfile } = require('./scraper');
const { analyzeTG } = require('./tg_analyzer');
const path = require('path');

const program = new Command();

program
  .name('niche-scraper')
  .description('Local IG data pipeline for niche TG')
  .argument('<username>', 'Instagram username (public profile)')
  .option('-a, --analyze', 'Run TG analysis after scrape', true)
  .action(async (username, options) => {
    console.log(`Scraping https://instagram.com/${username}/...`);
    await scrapeInstagramProfile(username);
    if (options.analyze) {
      console.log('Analyzing TG...');
      await analyzeTG(username);
    }
  });

program.parse();

