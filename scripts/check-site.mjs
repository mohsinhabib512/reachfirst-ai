import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import vm from 'node:vm';

const files = readdirSync('.').filter((file) => file.endsWith('.html'));
for (const file of files) {
  const html = readFileSync(file, 'utf8');
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${file}: one main heading`);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
  assert.equal(ids.length, new Set(ids).size, `${file}: duplicate IDs`);
  for (const [, href] of html.matchAll(/\bhref="([^"]+)"/g)) {
    if (/^(?:https?:|mailto:|tel:)/.test(href)) continue;
    const [target, fragment] = href.split('#');
    if (target && target !== './') assert(existsSync(target), `${file}: missing ${target}`);
    if (fragment && (!target || target.endsWith('.html') || target === './')) {
      const source = target ? readFileSync(target === './' ? 'index.html' : target, 'utf8') : html;
      assert(source.includes(`id="${fragment}"`), `${file}: missing ${href}`);
    }
  }
  assert(!html.includes('Book AI Consultation'), `${file}: misleading booking label`);
}

const main = readFileSync('assets/js/main.js', 'utf8');
new vm.Script(main);
new vm.Script(readFileSync('assets/js/services-delivery.js', 'utf8'));

// Exercise the workflow against a controlled timer queue: stage 3 must block
// progression until a person reviews it, and reset must cancel pending work.
const elements = new Map();
let activeElement;
function element(key) {
  if (!elements.has(key)) elements.set(key, {
    hidden: true, inert: false, dataset: {}, textContent: '', handlers: {},
    classList: { add() {}, remove() {}, toggle() {} },
    setAttribute(name, value) { this[name] = value; },
    removeAttribute(name) { delete this[name]; },
    addEventListener(name, handler) { this.handlers[name] = handler; },
    focus() { activeElement = this; },
    querySelector(selector) { return element(`${key} ${selector}`); }
  });
  return elements.get(key);
}
const steps = Array.from({ length: 5 }, (_, i) => element(`step${i}`));
const outputs = ['input', 'details', 'record', 'notice', 'draft'].map((key) => {
  const output = element(key); output.dataset.demoOutput = key; return output;
});
const demo = element('demo');
demo.querySelector = element;
demo.querySelectorAll = (selector) => selector === '[data-demo-step]' ? steps : outputs;
const timers = new Map();
let timerId = 0;
const context = {
  document: { querySelector: () => demo, get activeElement() { return activeElement; } },
  setTimeout: (fn) => { timers.set(++timerId, fn); return timerId; },
  clearTimeout: (id) => timers.delete(id)
};
vm.runInNewContext(main.slice(main.indexOf('const demo =')), context);
function tick() { const [id, fn] = timers.entries().next().value; timers.delete(id); fn(); }
function click(selector) { element(selector).handlers.click(); }
click('[data-demo-run]');
assert.equal(element('[data-demo-count]').textContent, 'Stage 1 of 5');
tick();
assert.equal(element('[data-demo-count]').textContent, 'Stage 2 of 5');
tick();
assert.equal(demo.dataset.phase, 'review');
assert.equal(element('[data-demo-count]').textContent, 'Stage 3 of 5');
assert.equal(timers.size, 0, 'Staff review pauses without a pending advance');
click('[data-demo-run]');
assert.equal(demo.dataset.phase, 'review', 'Run cannot bypass review');
activeElement = element('[data-demo-continue]');
click('[data-demo-continue]');
assert.equal(activeElement, element('[data-demo-reset]'), 'Focus survives review control removal');
assert.equal(element('[data-demo-count]').textContent, 'Stage 4 of 5');
tick();
assert.equal(element('[data-demo-count]').textContent, 'Stage 5 of 5');
assert.equal(demo.dataset.phase, 'complete');
assert.match(element('[data-demo-status]').textContent, /No record was saved and no message was sent/);
click('[data-demo-run]');
click('[data-demo-reset]');
assert.equal(timers.size, 0, 'Reset cancels pending work');
assert.equal(demo.dataset.phase, 'ready');
console.log(`Passed: ${files.length} pages, local links and anchors, unique IDs, JavaScript syntax, five demo stages, staff review, focus and reset.`);
