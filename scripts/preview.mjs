import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.woff2': 'font/woff2' };
const port = Number(process.env.PORT || 4173);
createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const file = resolve(root, `.${pathname === '/' ? '/index.html' : pathname}`);
    const relative = file.slice(root.length + 1).split(sep).join('/');
    const htmlPages = ['index.html', 'about-us.html', 'services.html', 'industries.html', 'home-field-services.html', 'professional-services.html', 'case-studies.html', 'insights.html', 'how-we-work.html', 'book-consultation.html', 'ai-consulting-automation-planning.html', 'business-workflow-automation.html', 'sales-crm-automation.html', 'ai-agents-customer-support.html', 'ai-voice-agents.html', 'custom-ai-applications-integrations.html', 'managed-ai-automation-support.html', 'digital-marketing-services.html'];
    if (!file.startsWith(root + sep) || !(htmlPages.includes(relative) || relative.startsWith('assets/'))) {
      res.writeHead(404).end('Not found');
      return;
    }
    const body = await readFile(file);
    res.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
    res.end(body);
  } catch {
    res.writeHead(404).end('Not found');
  }
}).listen(port, '127.0.0.1', () => console.log(`Preview: http://127.0.0.1:${port}`));
