import assert from 'node:assert/strict';
import { readFile, readdir, access } from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import { spawnSync } from 'node:child_process';

const dir = path.resolve('wordpress/reachfirst');
const manifest = JSON.parse(await readFile(path.join(dir, 'pages.json'), 'utf8'));
const files = await readdir(dir);
const phpFiles = files.filter((file) => file.endsWith('.php'));
let assets = 0;
let links = 0;
for (const file of phpFiles) {
  const full = path.join(dir, file);
  const result = spawnSync('php', ['-l', full], { encoding: 'utf8', shell: process.platform === 'win32' });
  assert.equal(result.status, 0, result.stdout + result.stderr);
  const php = await readFile(full, 'utf8');
  assert(!php.includes('get_template_part('), `${file}: template parts`);
  assert(!/\bwp_(?:enqueue|register)_(?:style|script)\s*\(/.test(php), `${file}: asset enqueue`);
  assert(!/\b(?:href|src)="(?:assets\/|[\w-]+\.html)/.test(php), `${file}: unresolved URL`);
  for (const match of php.matchAll(/\bsrcset="([^"]*)"/g)) {
    assert(!/(?:^|,\s*)assets\//.test(match[1]), `${file}: unresolved srcset URL`);
  }
  for (const match of php.matchAll(/get_theme_file_uri\( '([^']+)'/g)) {
    await access(path.join(dir, match[1]));
    ++assets;
  }
  for (const match of php.matchAll(/reachfirst_page_url\( '([^']+)'/g)) {
    assert(manifest[match[1]], `${file}: unknown destination ${match[1]}`);
    ++links;
  }
}
for (const [slug, page] of Object.entries(manifest)) {
  const file = slug === 'index' ? 'front-page.php' : `page-${slug}.php`;
  const php = await readFile(path.join(dir, file), 'utf8');
  assert.equal((php.match(/<main\b/g) || []).length, 1, file);
  for (const script of page.scripts) await access(path.join(dir, script));
}
const js = await readFile(path.join(dir, 'assets/js/main.js'), 'utf8');
new vm.Script(js);
assert(!js.includes("location.pathname.split('/').pop()"));
assert(!/(?:href|src)="(?:assets\/|[\w-]+\.html)/.test(js));
for (const match of js.matchAll(/rfUrl\('([^']+)'\)/g)) {
  if (match[1].startsWith('assets/')) await access(path.join(dir, match[1]));
  else if (match[1] !== './') assert(manifest[match[1].replace(/\.html$/, '')], match[1]);
}
// Exercise the same navigation lookup with subdirectory and plain permalinks.
const helpers = js.slice(0, js.indexOf('// Native disclosures'));
for (const target of ['https://example.test/site/services/', 'https://example.test/site/?page_id=42']) {
  const context = vm.createContext({ URL, location: { href: 'https://example.test/site/' }, window: { reachfirst: {
    assets: 'https://example.test/site/wp-content/themes/reachfirst/assets/',
    home: 'https://example.test/site/', urls: { 'services.html': target },
  } } });
  vm.runInContext(helpers, context);
  assert.equal(vm.runInContext("rfUrl('services.html')", context), target);
  assert.equal(vm.runInContext(`rfOriginalPage(${JSON.stringify(target + '#details')})`, context), 'services.html');
  assert.equal(vm.runInContext("rfUrl('assets/images/example.png')", context), 'https://example.test/site/wp-content/themes/reachfirst/assets/images/example.png');
}
console.log(`Passed: ${phpFiles.length} PHP files, ${Object.keys(manifest).length} templates, ${assets} asset references, ${links} page links, JavaScript syntax and permalink helpers.`);
