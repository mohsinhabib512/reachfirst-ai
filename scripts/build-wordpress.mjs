import { readFile, writeFile, readdir, mkdir, cp } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const out = path.join(root, 'wordpress', 'reachfirst');
await mkdir(out, { recursive: true });
const read = (name) => readFile(path.join(root, name), 'utf8');
const write = (name, data) => writeFile(path.join(out, name), data);
const phpString = (value) => "'" + value.replaceAll('\\', '\\\\').replaceAll("'", "\\'") + "'";
const files = (await readdir(root)).filter((file) => file.endsWith('.html')).sort();
const pages = {};
const symbols = new Map();
function convert(markup) {
  return markup.replaceAll('https://www.reachfirst.com/privacy-policy/', 'privacy-policy.html')
    .replaceAll('https://www.reachfirst.com/terms-of-service/', 'terms-conditions.html')
    .replace(/<!--[^]*?-->/g, '')
    .replace(/\bsrcset="([^"]*)"/g, (_, candidates) => `srcset="${candidates.replace(/(^|,\s*)(assets\/[^\s,]+)/g, (_, separator, asset) => `${separator}<?php echo esc_url( get_theme_file_uri( ${phpString(asset)} ) ); ?>`)}"`)
    .replace(/\b(src|href|poster)="(assets\/[^"#]+)(#[^"]*)?"/g, (_, attr, asset, hash = '') => `${attr}="<?php echo esc_url( get_theme_file_uri( ${phpString(asset)} ) . ${phpString(hash)} ); ?>"`)
    .replace(/href="(?:\.\/)?([\w-]+)\.html([^"\s]*)"/g, (_, slug, suffix) => `href="<?php echo esc_url( reachfirst_page_url( ${phpString(slug)} ) . ${phpString(suffix)} ); ?>"`)
    .replace(/href="\.\/([^"\s]*)"/g, (_, suffix) => `href="<?php echo esc_url( home_url( '/' ) . ${phpString(suffix)} ); ?>"`);
}
for (const file of files) {
  const html = await read(file);
  const slug = file.slice(0, -5);
  const title = html.match(/<title>([^]*?)<\/title>/i)[1];
  pages[slug] = {
    title,
    description: html.match(/<meta name="description" content="([^"]*)"/)?.[1] || '',
    class: html.match(/<body[^>]*class="([^"]*)"/)?.[1] || '',
    scripts: [...html.matchAll(/<script[^>]*src="([^"]+)"[^>]*><\/script>/g)].map((match) => match[1]),
  };
  for (const match of html.matchAll(/<symbol\b[^]*?<\/symbol>/g)) {
    const id = match[0].match(/id="([^"]+)"/)[1];
    if (!symbols.has(id)) symbols.set(id, match[0]);
  }
  const main = html.match(/<main\b[^]*?<\/main>/i)?.[0];
  if (!main) throw new Error(`Missing main: ${file}`);
  const name = slug === 'index' ? 'front-page.php' : `page-${slug}.php`;
  await write(name, `<?php\n/**\n * Template Name: Reach First — ${slug === 'index' ? 'Home' : slug.replaceAll('-', ' ')}\n */\ndefined( 'ABSPATH' ) || exit;\nget_header();\n?>\n${convert(main)}\n<?php get_footer(); ?>\n`);
}
await write('pages.json', JSON.stringify(pages, null, 2) + '\n');
const home = await read('index.html');
const header = home.match(/<header\b[^]*?<\/header>/)[0];
const dialog = home.match(/<dialog\b[^]*?<\/dialog>/)?.[0] || '';
await write('header.php', `<?php defined( 'ABSPATH' ) || exit; $rf_page = reachfirst_page_data(); ?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php if ( ! reachfirst_yoast_active() && ! empty( $rf_page['description'] ) ) : ?>
  <meta name="description" content="<?php echo esc_attr( html_entity_decode( $rf_page['description'], ENT_QUOTES, 'UTF-8' ) ); ?>">
  <?php endif; ?>
  <link rel="icon" href="<?php echo esc_url( get_theme_file_uri( 'assets/icons/favicon.png' ) ); ?>" type="image/png">
  <link rel="preload" href="<?php echo esc_url( get_theme_file_uri( 'assets/fonts/manrope-latin-variable.woff2' ) ); ?>" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="<?php echo esc_url( get_theme_file_uri( 'assets/css/styles.css' ) ); ?>">
  <link rel="stylesheet" href="<?php echo esc_url( get_stylesheet_uri() ); ?>">
  <?php wp_head(); ?>
</head>
<body id="top" <?php body_class( $rf_page['class'] ?? '' ); ?>>
<?php wp_body_open(); ?>
<svg class="icon-definitions" xmlns="http://www.w3.org/2000/svg" width="0" height="0" aria-hidden="true" focusable="false"><defs>
${[...symbols.values()].join('\n')}
</defs></svg>
<a class="skip-link" href="#main-content">Skip to content</a>
${convert(header)}
${convert(dialog)}
`);
await write('footer.php', `<?php defined( 'ABSPATH' ) || exit; ?>
${convert(home.match(/<footer\b[^]*?<\/footer>/)[0]).replace('2026 Reach First', "<?php echo esc_html( wp_date( 'Y' ) ); ?> Reach First")}
<?php
$rf_urls = array();
foreach ( reachfirst_pages() as $rf_slug => $rf_data ) {
    $rf_urls[ $rf_slug . '.html' ] = reachfirst_page_url( $rf_slug );
}
?>
<script>window.reachfirst = <?php echo wp_json_encode( array( 'assets' => trailingslashit( get_theme_file_uri( 'assets' ) ), 'home' => home_url( '/' ), 'page' => reachfirst_source() . '.html', 'urls' => $rf_urls ), JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT ); ?>;</script>
<?php foreach ( reachfirst_page_data()['scripts'] ?? array( 'assets/js/main.js' ) as $rf_script ) : ?>
<script src="<?php echo esc_url( get_theme_file_uri( $rf_script ) ); ?>" defer></script>
<?php endforeach; ?>
<?php wp_footer(); ?>
</body>
</html>
`);
await cp(path.join(root, 'assets'), path.join(out, 'assets'), { recursive: true });
let js = await read('assets/js/main.js');
js = js.replaceAll("location.pathname.split('/').pop() || 'index.html'", 'window.reachfirst.page')
  .replaceAll("location.pathname.split('/').pop() || ''", 'window.reachfirst.page')
  .replaceAll("new URL(link.href, location.href).pathname.split('/').pop() || 'index.html'", 'rfOriginalPage(link.href)')
  .replace(/(href|src)="(assets\/[^"\s]+|[\w-]+\.html|\.\/)"/g, (_, attr, url) => `${attr}="\${rfUrl('${url}')}"`)
  .replace(/(\.src\s*=\s*|\.href\s*=\s*|href:\s*)'(assets\/[^']+|[\w-]+\.html)'/g, (_, prefix, url) => `${prefix}rfUrl('${url}')`)
  .replace("header.querySelectorAll('a[href$=\"about-us.html\"]')", "header.querySelectorAll(`a[href=\"${rfUrl('about-us.html')}\"]`)");
js = `// WordPress URLs are supplied by footer.php, including plain permalink support.
function rfUrl(value) {
  if (value.startsWith('assets/')) return window.reachfirst.assets + value.slice(7);
  if (value === './') return window.reachfirst.home;
  return window.reachfirst.urls[value] || value;
}
function rfOriginalPage(value) {
  const url = new URL(value, location.href);
  url.hash = '';
  return Object.keys(window.reachfirst.urls).find((key) => window.reachfirst.urls[key] === url.href) || '';
}
` + js;
await write('assets/js/main.js', js);
console.log(`Built ${files.length} page templates in ${out}`);
