const ollama = require('ollama');
const fs = require('fs-extra');
const path = require('path');

// Use default host: http://localhost:11434

async function analyzeTG(username) {
  const dataPath = path.join('data', `${username}.json`);
  if (!await fs.pathExists(dataPath)) {
    throw new Error(`No data for ${username}. Run scraper first.`);
  }
  const data = await fs.readJson(dataPath);

  const prompt = `Analyze this Instagram profile for PCOS niche target audience (TG):
Bio: ${data.bio}
Followers: ${data.followers}
Recent posts: ${JSON.stringify(data.recentPosts.slice(0,3))}

Extract JSON: {
  "niche_match": "high/medium/low",
  "target_audience": "e.g., women 25-35 with PCOS",
  "pain_points": ["acne", "weight gain", "infertility"],
  "intent_signals": ["supplements", "diet plans"],
  "confidence": 0.8,
  "recommendation": "outreach/ignore"
}`;

  try {
    const response = await ollama.generate({
      model: 'llama3.2:3b',
      prompt,
      'options': { 
        'temperature': 0.2,
        'num_predict': 512 
      }
    });
    const analysisStr = response.response.trim();
    const analysis = JSON.parse(analysisStr);
    const outPath = path.join('data', `${username}_tg.json`);
    await fs.writeJson(outPath, { raw: data, analysis }, { spaces: 2 });
    console.log(`TG analysis saved to ${outPath}:`, analysis);
    return analysis;
  } catch (error) {
    console.error('Ollama error:', error);
  }
}

module.exports = { analyzeTG };

// Usage: node -e "require('./tg_analyzer').analyzeTG('testuser')"

