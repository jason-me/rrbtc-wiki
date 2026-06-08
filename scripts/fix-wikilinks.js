const fs = require('fs');
const path = require('path');

const DOCS_DIR = path.resolve(__dirname, '../docs');

function getTitleFromFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const match = content.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!match) return null;
  const titleMatch = match[1].match(/^title:\s*(.+)$/m);
  return titleMatch ? titleMatch[1].trim().replace(/^["']|["']$/g, '') : null;
}

function slugToTitle(slug) {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

function resolveSlug(slug) {
  const folders = ['entities', 'concepts', 'comparisons', 'queries', 'summaries', 'presentations'];
  for (const folder of folders) {
    const candidate = path.join(DOCS_DIR, folder, `${slug}.md`);
    if (fs.existsSync(candidate)) return `/${folder}/${slug}`;
  }
  return null;
}

function resolvePath(inner) {
  let raw = inner.trim();
  if (raw.endsWith('.md')) raw = raw.slice(0, -3);
  if (raw.includes('/')) return `/${raw}`;
  const resolved = resolveSlug(raw);
  if (resolved) return resolved;
  console.warn(`⚠️  Could not resolve [[${inner}]] — using fallback /${raw}`);
  return `/${raw}`;
}

function resolveText(inner, targetPath) {
  const relative = targetPath.replace(/^\//, '') + '.md';
  const targetFile = path.join(DOCS_DIR, relative);
  if (fs.existsSync(targetFile)) {
    const title = getTitleFromFile(targetFile);
    if (title) return title;
  }
  const slug = inner.trim().replace(/\.md$/, '').split('/').pop();
  return slugToTitle(slug);
}

function getAllFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory() && !file.startsWith('.')) {
      results = results.concat(getAllFiles(filePath));
    } else if (file.endsWith('.md')) {
      results.push(filePath);
    }
  });
  return results;
}

function processFile(filePath) {
  let raw = fs.readFileSync(filePath, 'utf-8');
  let frontmatter = '';
  let body = raw;
  const fmMatch = raw.match(/^---\s*\n[\s\S]*?\n---\s*\n?/);
  if (fmMatch && fmMatch.index === 0) {
    frontmatter = fmMatch[0];
    body = raw.slice(fmMatch[0].length);
  }

  let inCodeBlock = false;
  const lines = body.split('\n');
  const processedLines = lines.map((line) => {
    if (line.trim().startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      return line;
    }
    if (inCodeBlock) return line;
    return line.replace(/\[\[([^\]]+)\]\]/g, (match, inner) => {
      const docusaurusPath = resolvePath(inner);
      const displayText = resolveText(inner, docusaurusPath);
      return `[${displayText}](${docusaurusPath})`;
    });
  });

  const newBody = processedLines.join('\n');
  const newContent = frontmatter + newBody;

  if (newContent !== raw) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log(`✅  ${path.relative(DOCS_DIR, filePath)}`);
  }
}

const files = getAllFiles(DOCS_DIR);
files.forEach(processFile);
console.log('\nDone.');
