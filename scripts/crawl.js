import fs from 'fs';
import path from 'path';

const FEEDS = {
  news: 'https://sdct.ued.udn.vn/rss/',
  notifications: 'https://sdct.ued.udn.vn/rss/thong-bao/',
  admissions: 'https://sdct.ued.udn.vn/rss/tuyen-sinh/',
  education: 'https://sdct.ued.udn.vn/rss/dao-tao/',
  cooperation: 'https://sdct.ued.udn.vn/rss/hop-tac/',
  students: 'https://sdct.ued.udn.vn/rss/sinh-vien/'
};

// Helper to format date
function formatDate(pubDateStr) {
  try {
    const d = new Date(pubDateStr);
    if (isNaN(d.getTime())) return pubDateStr;
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  } catch (e) {
    return pubDateStr;
  }
}

// Regex XML parser for NukeViet RSS items
function parseRSS(xmlText) {
  const items = [];
  const itemMatches = xmlText.match(/<item>([\s\S]*?)<\/item>/g);
  
  if (!itemMatches) return items;

  for (const itemXml of itemMatches) {
    const titleMatch = itemXml.match(/<title>([\s\S]*?)<\/title>/);
    const linkMatch = itemXml.match(/<link>([\s\S]*?)<\/link>/);
    const pubDateMatch = itemXml.match(/<pubDate>([\s\S]*?)<\/pubDate>/);
    const descMatch = itemXml.match(/<description>([\s\S]*?)<\/description>/);

    // Extract title (handle CDATA)
    let title = titleMatch ? titleMatch[1].trim() : '';
    title = title.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/, '$1').trim();
    // Decode HTML entities
    title = title
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'");

    const link = linkMatch ? linkMatch[1].trim() : '';
    const pubDateRaw = pubDateMatch ? pubDateMatch[1].trim() : '';
    const date = formatDate(pubDateRaw);

    let desc = descMatch ? descMatch[1].trim() : '';
    desc = desc.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/, '$1').trim();

    // Extract image src from description e.g. <img src="..." />
    const imgMatch = desc.match(/<img[^>]+src=["']([^"']+)["']/);
    let image = imgMatch ? imgMatch[1] : '';
    if (image) {
      image = image.replace('/assets/news/', '/uploads/news/');
    }

    // Clean up description text (strip HTML tags)
    let cleanDesc = desc.replace(/<[^>]*>/g, '').trim();

    items.push({
      title,
      link,
      date,
      image,
      description: cleanDesc
    });
  }

  return items;
}

async function run() {
  const dataDir = path.join(process.cwd(), 'src/data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  for (const [key, url] of Object.entries(FEEDS)) {
    console.log(`Fetching ${key} from ${url}...`);
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP Error ${res.status}`);
      const xml = await res.text();
      const items = parseRSS(xml);
      
      const filePath = path.join(dataDir, `${key}.json`);
      fs.writeFileSync(filePath, JSON.stringify(items, null, 2), 'utf-8');
      console.log(`Saved ${items.length} items to ${filePath}`);
    } catch (error) {
      console.error(`Failed to fetch ${key}:`, error.message);
    }
  }
  console.log('Crawling finished successfully!');
}

run();
