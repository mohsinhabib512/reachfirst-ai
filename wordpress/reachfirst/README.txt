Reach First WordPress theme

INSTALL
1. Upload reachfirst-theme.zip in Appearance > Themes > Add New > Upload Theme.
2. Activate Reach First.
3. Open Appearance > Reach First Setup and click Create site pages.
4. Check Settings > Reading. Select Home as the static front page if an existing
   front page was already configured or the Home page existed before setup.
5. Check Settings > Permalinks and save your preferred permalink structure.

Setup creates missing pages only; it never overwrites existing page content or
template selections. For an existing page, select its matching Reach First
template in the page editor. Original page slugs should be retained because
navigation resolves them by slug. Pretty and plain permalinks are supported.

STRUCTURE
Every original HTML page has its complete main markup in front-page.php or
page-SLUG.php. No get_template_part(), template-parts directory, or block
template parts are used. Shared document/navigation markup is in header.php
and the footer is in footer.php.

CSS links are in header.php. JavaScript tags and their URL configuration are
in footer.php. functions.php contains only theme support, URL/metadata helpers,
and the optional administrator setup screen; it does not enqueue assets.
Tailwind CSS is precompiled. Fonts, icons, GSAP and images are bundled locally.
WordPress hooks remain available for plugins and the admin toolbar.

EDITING AND BEHAVIOR
The converted designs/text are edited in their PHP templates, not the block
editor. New pages with new slugs use page.php and display editor content.
The supplied articles and case studies remain pages, matching the original site.
Navigation and footer enhancements remain in assets/js/main.js.
The consultation form retains the original mailto action and requires the
visitor's email client. It does not store submissions or send server-side mail.
Search visibility is controlled by WordPress Settings > Reading; the HTML
prototype's hardcoded noindex directive has not been carried into the theme.

YOAST SEO
When Yoast SEO is active, the theme stops outputting its own meta description
and leaves the document title unchanged for Yoast to manage. Edit SEO titles,
descriptions and social previews in each page's Yoast panel. Existing pages.json
metadata is not automatically imported into Yoast. When Yoast is inactive, the
theme resumes using pages.json for its titles and descriptions.
The PHP template content is not automatically available to Yoast's editor-side
content/readability analysis. This does not stop Yoast from outputting metadata.

SOURCE PROJECT
Run npm run build, then npm run build:wordpress from the HTML project to rebuild
the converted page files and bundled assets. Generated templates, header/footer,
pages.json and copied assets are overwritten; maintain source HTML/JS or update
the converter when regenerating. functions.php, style.css and fallback templates
are maintained directly. No Node.js build is required on the WordPress server.
