# Asset and route sources

Inspected/downloaded 2026-09-17. All files are local and no runtime third-party font/icon/CSS requests are used.

## Original brand assets

| Local file | Source and notes |
| --- | --- |
| assets/images/reach-first-logo-original.jpg | https://www.reachfirst.com/wp-content/uploads/2019/10/Reach-First.jpg — official homepage Organization structured-data logo, 500 × 59; best-resolution discovered original. Used on white, unchanged. |
| assets/images/reach-first-logo.svg | https://www.reachfirst.com/wp-content/themes/reachfirst/img/header-logo.svg — original header asset, unchanged. SVG wrapper embeds a 301 × 34 PNG; not a scalable vector master. |
| assets/icons/favicon.png | https://www.reachfirst.com/wp-content/uploads/2017/07/cropped-favicon-32x32.png — favicon linked by the official homepage. |

Reach First retains its brand rights. No original logo was redrawn, regenerated, recolored, stretched, or filtered. No dedicated light/dark variant was exposed in the inspected homepage/stylesheet. A true vector master remains a quality improvement for future large or high-density uses, not a blocker for the shell.

Discovery source: https://www.reachfirst.com/. Palette source: https://www.reachfirst.com/wp-content/litespeed/ucss/2d251d2a61c0477c0fdd4238e096054c.css?ver=64a9f (generated filename may change). Most frequent explicit hex colors in that snapshot include #fff, #000, #044ba5, #0083c6, #06f and #0163f3. This is a CSS inventory, not a claim that all colors have equal brand importance. Approved palette remains #0083c6 / black / white.

## Typography

- Google Fonts family: https://fonts.google.com/specimen/Manrope
- CSS request: https://fonts.googleapis.com/css2?family=Manrope:wght@400..700&display=swap (modern Chrome user-agent returns WOFF2 subsets).
- Local `assets/fonts/manrope-latin-variable.woff2`: https://fonts.gstatic.com/s/manrope/v20/xn7gYHE41ni1AdIRggexSg.woff2
- License: SIL Open Font License 1.1, saved unchanged as `assets/fonts/OFL.txt` from https://raw.githubusercontent.com/google/fonts/main/ofl/manrope/OFL.txt.
- One Latin variable file; CSS exposes only normal weights 400–700. Other scripts are not downloaded for the English foundation and fall back to Arial/sans-serif.

## Icons

Lucide `lucide-static` 1.47.0 from the npm registry: https://www.npmjs.com/package/lucide-static. Official project: https://lucide.dev/. Only `arrow-up-right`, `menu` and `chevron-down` are included in `assets/icons/lucide.svg`, with original paths and stroke settings. Symbols use currentColor. License copied from the pinned package to `assets/icons/LUCIDE-LICENSE.txt`. No full library runtime or mixed icon families.

## Generated editorial reference

Local asset: `assets/images/automation-editorial-reference.png`, 1254 × 1254 PNG. Generated with the built-in imagegen tool, then copied into the project and visually inspected. Original source is AI generation, not stock photography. Reserved for later section work; not loaded by the foundation page. Folder/calendar/connected forms, no embedded text or brand marks. Subsequent illustrations should reference this asset for stylistic continuity.

Exact generation prompt:

> Use case: stylized-concept. Asset type: original editorial illustration reference for Reach First's future AI automation website sections. Create one coherent minimal composition of a white open business folder, a simplified blank desk calendar with blue binding but no date grid, and three rounded connected blue and white forms. Restrained isometric dimensional illustration, thin dark outlines, matte white and blue #0083c6 surfaces, subtle soft shadows, pale near-white blue background. Clear silhouette readable at mobile size, generous negative space, polished understated B2B visual. No text, letters, numbers, logos, buttons, detailed UI, robots, people or screenshots. Square composition. This is an asset, not a website mockup.

## Automation opportunities motifs

Service catalog icons also come from pinned Lucide 1.47.0, with original geometry: `workflow`, `contact-round`, `messages-square`, `route`, `phone`, `blocks`, and `settings-2`. No additional runtime dependency or license is needed.

Automation opportunities adds five original-geometry symbols from the already pinned Lucide 1.47.0 package: `message-square`, `bell`, `folder-check`, `database`, and `arrow-right`. The small workflow motifs combine those symbols with local CSS and HTML labels. They are illustrative, not product screenshots, and introduce no new external assets or licenses.

## Hero illustration (2026-09-17)

- `assets/images/hero-connected-workspace.png`: original 1254 × 1254 built-in imagegen output, preserved unchanged. The earlier `automation-editorial-reference.png` was supplied as a style-only reference.
- `assets/images/hero-connected-workspace.webp`: 1254 × 1254 web delivery copy, 49,098 bytes.
- `assets/images/hero-connected-workspace-mobile.webp`: 640 × 640 web delivery copy, 20,962 bytes.
- WebP copies encoded at quality 85 using sharp-cli; no content changes. The original PNG is not requested by the page. Labels “Enquiries”, “Scheduling”, and “CRM” are HTML, not baked into the bitmap. Visually inspected: four business objects connect to the central hub, no text, brand marks, dashboard UI or fabricated client data.

Exact built-in imagegen prompt:

> Use case: stylized-concept. Create a new square editorial hero illustration for Reach First AI automation services. Reference image is STYLE ONLY: match its white and blue matte surfaces, dark fine outlines, soft dimensional isometric depth and calm minimal business objects, but create a different composition. Subject: a central low rounded blue abstract hub connected by four simple physical thin blue paths to four clearly separated business objects: a blank enquiry speech bubble at upper left, a small blank white desk calendar with blue binding at upper right, a white customer-record card with a simple abstract person silhouette and no text at lower right, and a white document/folder at lower left. Compose these as a connected business workspace, all four objects visibly connected to the central hub, uncluttered and readable at small mobile size. Blue #0083c6 accents, white, pale neutral #f5f8fa background and dark details. Use soft shadows and generous whitespace around silhouette. No text, letters, numbers, dates, logos, buttons, dashboards, software screens, real client information, people or robots. Absolutely no words. It must feel like an editorial conceptual illustration, never a packaged software product screenshot. Background flat pale neutral #f5f8fa, edges clean and quiet. All objects within frame.

## Industry illustrations (2026-09-17)

Generated with built-in imagegen using `assets/images/hero-connected-workspace.png` as a style-only reference; both outputs visually inspected. No client projects, team photos, words, numbers or logos appear in the artwork. Headings, audience examples, workflow labels and CTAs are HTML.

- `assets/images/industry-home-field.png`: original 1254 × 1254 PNG; service tools, blank calendar and enquiry bubble.
- `assets/images/industry-professional.png`: original 1254 × 1254 PNG; folder, blank document and connected records.
- `assets/images/industry-home-field.webp` and `assets/images/industry-professional.webp`: 960 × 960 delivery copies, sharp-cli WebP quality 85. Originals retained unchanged; only resize/encoding applied to delivery copies.

Exact Home & Field Services prompt:

> Use case: stylized-concept. Create one square conceptual editorial illustration for a Home & Field Services business website panel. Supplied reference is STYLE ONLY: matching matte white/Reach First blue #0083c6 surfaces, fine dark navy outlines, simplified isometric depth, soft shadows, calm pale neutral background. New scene: a neat small blue service toolbox with a simplified wrench and screwdriver, next to a blank white calendar with blue binding and a blank white enquiry speech bubble, linked by simple blue connecting forms. Compact balanced composition with just these few readable objects, ample breathing room, clear mobile silhouette. Flat pale neutral #f5f8fa background. No words, numbers, logos, dates, detailed UI, dashboard, people, photographs or fake client project. This is conceptual illustration, not a product screen. Keep all objects inside frame.

Exact Professional Services prompt:

> Use case: stylized-concept. Create one square conceptual editorial illustration for a Professional Services website panel. Supplied reference is STYLE ONLY: matching matte white/Reach First blue #0083c6 surfaces, fine dark navy outlines, simplified isometric depth, soft shadows, calm pale neutral background. New scene: a document workspace with a neat white open folder containing blank sheets, a separate blank document with folded corner, and two simplified white customer record tiles with abstract blue person silhouettes, connected by simple blue linking forms. Compact balanced composition, few readable objects, generous breathing room and clear mobile silhouette. Flat pale neutral #f5f8fa background. No words, numbers, logos, detailed text lines, dashboard UI, screens, real people or photography. This must be conceptual editorial art, never a real client project or packaged software screenshot. Keep every object inside frame.

## Verified existing routes

Service-page discovery (2026-09-17): https://www.reachfirst.com/services/ai-automation/ is the verified general overview. It describes specialized offerings and future standalone service pages, but exposes no matching dedicated pages for the seven approved names. The catalog therefore uses the verified contact destination for all “Discuss this service” links. This records what could be verified, not an assertion that no unlinked page exists. Proposed future service routes remain in README.md only.

These official site pages were opened and their content verified. They retain existing marketing positioning; no new AI outcomes are inferred from them.

| Purpose | Verified URL |
| --- | --- |
| Contact / every consultation CTA | https://www.reachfirst.com/contact-us/ |
| About | https://www.reachfirst.com/about-us/ |
| Blog | https://www.reachfirst.com/blog/ |
| Existing individual case study | https://www.reachfirst.com/case-studies/norcan-heating/ |
| Case Studies archive | https://www.reachfirst.com/case-studies/ |
| Privacy | https://www.reachfirst.com/privacy-policy/ |
| Terms | https://www.reachfirst.com/terms-of-service/ |

Contact page exposes an inquiry form, business phone 1-844-777-3224 and info@reachfirst.com. A live scheduling calendar was not verified. Do not describe the destination as a scheduling widget.

Header route verification: the Case Studies archive returned HTTP 200 on 2026-09-17, with title “Digital Marketing Case Studies | Reach First” and H1 “CASE STUDIES”. Verified via a direct GET after the web reader timed out. The separate `/clients/` page was also inspected; it is a project/client listing and is not substituted for the case-study archive. How We Work now links to the completed local `#how-we-work` section; no separate process-page link is used.

Other case-study URLs verified as links in official homepage HTML (not separately reviewed): https://www.reachfirst.com/case-studies/action-towing/, https://www.reachfirst.com/case-studies/akron-roofing/, https://www.reachfirst.com/case-studies/acorn-welding/. No new case-study archive route is invented.

Social destinations verified as official homepage outbound links (profile contents/login state not independently verified):

- https://www.linkedin.com/company/reach-first
- https://www.facebook.com/reachfirst
- https://instagram.com/reach1st
- https://x.com/reach1st

Future service/industry paths are explicitly proposed, unused targets in README.md. Current anchors resolve to actual HTML. Remaining asset gaps: no true vector master or separate dark-background logo discovered. Full section-specific illustrations and content are intentionally deferred, not failed retrievals.

## Integrations icons

Added `calendar-days` and `list-checks` symbols from the existing pinned `lucide-static` package for the integrations categories. Remaining category and hub symbols reuse the local Lucide sprite. No third-party product logos or external image requests were added.

## Hero clearance and automation opportunity illustrations

`assets/images/hero-orbit-mask.svg` is an authored luminance mask traced against the existing square hero artwork. It only masks decorative orbit layers and does not modify the original raster. The four opportunity illustrations are authored HTML/CSS/SVG geometry in `index.html` and `src/styles.css`, reusing the existing local Lucide symbols. Their labels are HTML and their content is conceptual; they do not depict client projects or connected systems. No third-party imagery or provider logos were introduced.

## Custom service illustrations

The three priority service illustrations and four supporting service emblems are original inline SVG geometry authored in `index.html`, styled by the shared `service-art-*` rules in `src/styles.css`. They use no downloaded stock artwork, external provider marks, fonts inside graphics, client data, or raster assets. The Lucide arrow icons on consultation links remain unchanged. These conceptual compositions illustrate service scope and do not represent actual implementations or packaged software.

## Industry panel enhancement

The existing `industry-home-field.webp` and `industry-professional.webp` are preserved unchanged. Added labels and captions are HTML; workflow/badge icons reuse the local Lucide sprite. Backgrounds, borders, and small label transitions are CSS. No new image asset or third-party media was required for this refinement.


## Process stage illustrations

The five process illustrations are original inline SVG geometry authored in `index.html`: assessment document/magnifier, pilot test vessel, connected implementation blocks, training book, and support controls. Shared `process-*` CSS applies the established blue/white palette. These decorative illustrations are hidden from assistive technology; stage names and descriptions remain HTML. No stock imagery, third-party product marks, or generated raster assets were added.


## Integration connection graphic

The integration diagram uses six existing local Lucide symbols (`contact-round`, `calendar-days`, `messages-square`, `database`, `list-checks`, `folder-check`) and the existing `workflow` symbol. Curved connector paths in `index.html`, the layered hub, tile surfaces, dot texture, and finite signal animation in `src/styles.css` are authored code-native elements. Category names, descriptions, and the caption are HTML. No external imagery, brand logos, provider marks, or raster assets were added.


## Delivery approach composition

The Workflows + Systems + People composition and four principle treatments are authored HTML/CSS using existing local Lucide `route`, `blocks`, `messages-square`, and `folder-check` symbols. Text labels remain HTML. No new imagery, generated people, employee representations, external marks, or raster assets were introduced.


## Closing CTA revamp

The previous inline network motif has been removed from the consultation section. Its replacement is an authored CSS ink/blue gradient, two decorative arcs confined to the lower panel margin, and an HTML discussion guide. The CTA and guide reuse the existing local Lucide `arrow-up-right` and `messages-square` symbols. No generated imagery, client imagery, external marks, or new assets were introduced.


## Footer refinement

The original Reach First JPEG is unchanged, shown on white at its intrinsic 500:59 aspect ratio. Footer contact/utility treatments reuse the local Lucide `phone`, `arrow-up-right`, and `arrow-right` symbols. The small decorative envelope is authored inline SVG geometry. Layout, pale-blue contact panel, and background are CSS. No new external assets or contact destinations were introduced.


## ZIP preview compatibility

The 17 Lucide symbols from the existing licensed sprite are also embedded in `index.html` using the `rf-icon-` ID prefix, so repeated icons use same-document references. Geometry and licensing are unchanged. The hero orbit mask is encoded unchanged as a data URL in `src/styles.css`; the original SVG is retained as its editable reference. This removes external SVG resource requests from local-file icon and mask rendering.
