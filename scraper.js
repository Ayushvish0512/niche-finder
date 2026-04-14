const { chromium } = require('playwright');
const fs = require('fs-extra');
const path = require('path');

async function scrapeInstagramProfile(username) {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  try {
    await page.goto(`https://www.instagram.com/${username}/`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(3000); // Anti-bot delay

    // Scroll to load content
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    await page.waitForTimeout(2000);

    const data = await page.evaluate(() => {
      // Profile data
      const profilePic = document.querySelector('header img')?.src || '';
      const bio = document.querySelector('h1')?.nextElementSibling?.textContent?.trim() || '';
      const followers = document.querySelector('[href*='/followers/']')?.textContent?.trim() || '';
      const following = document.querySelector('[href*='/following/']')?.textContent?.trim() || '';
      const posts = document.querySelector('h2')?.textContent?.match(/\\d+/)?.[0] || '';

      // Recent posts & comments (top few)
      const postElements = document.querySelectorAll('article a[href^="/p/"]');
      const postsData = Array.from(postElements.slice(0, 5)).map(link => {
        const href = link.href;
        const img = link.querySelector('img')?.src || '';
        const likes = link.querySelector('[aria-label*="like"]')?.textContent || '';
        return { href, img, likes };
      });

      return { username, profilePic, bio, followers, following, postsCount: posts, recentPosts: postsData };
    });

    const outputPath = path.join('data', `${username}.json`);
    await fs.writeJson(outputPath, data, { spaces: 2 });
    console.log(`Scraped data saved to ${outputPath}`);
    return data;
  } catch (error) {
    console.error('Scrape failed:', error);
  } finally {
    await browser.close();
  }
}

module.exports = { scrapeInstagramProfile };

// Usage: node -e "require('./scraper').scrapeInstagramProfile('pcosnutritionist')"

