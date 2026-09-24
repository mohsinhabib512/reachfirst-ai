# Reach First foundation

The foundation, header, hero, automation opportunities, service catalog and industry panels are implemented; remaining homepage sections follow separately. The brief's AI automation positioning replaces the old marketing emphasis.

## Brand and colors

Keep the original logo unchanged, including its internal typography. The larger original 500 × 59 JPG is displayed at 212 CSS pixels on white; the published 301 × 34 SVG is retained but contains a raster PNG, not vector paths. Neither is recolored or reconstructed. No separate light/dark variant was found in the inspected homepage or stylesheet. Use white behind the original logo.

The current site's compiled stylesheet includes white, black, approved blue `#0083c6`, and additional blues including `#044ba5`, `#0066ff`, and `#0163f3`. These are discovery notes, not replacements for the approved blue. Source URLs are in ASSET-SOURCES.md.

| Token | Value | Use |
| --- | --- | --- |
| brand | #0083c6 | Brand accents, decorative rules, illustration direction |
| brand-strong | #006a9f | Accessible links and primary buttons |
| ink | #15191d | Headings and body text |
| muted | #52616b | Supporting text |
| surface | #ffffff | Header, footer, white panels |
| canvas | #f5f8fa | Pale neutral background |
| tint | #edf6fb | Pale blue emphasis |
| line | #dce4e9 | Decorative boundaries |

WCAG relative-luminance contrast: white on approved blue is approximately 4.15:1, below 4.5:1 for normal text. Use the darker functional blue for small white button text (approximately 5.90:1). This does not replace the brand accent. Dark ink on white is approximately 17.7:1; muted on white is approximately 6.4:1. Pale borders are decorative, not the sole indication of interactive controls. Focus rings use brand-strong with 5px offset.

## Type, layout, and reusable styles

- Manrope Latin variable WOFF2, weights 400–700; Arial, sans-serif fallback; `font-display: swap`. Body 16px/1.65. Supporting text 13–14px; labels 12px. Do not synthesize heavier weights or apply the font to the logo.
- Display: responsive 36–64px/1.12, tracking -0.045em. Section headings: 28–44px/1.2, tracking -0.035em. Prefer sentence case and concise copy.
- Spacing: 4px base scale; 8, 12, 16, 24, 32, 48, 64, 96px preferred. Section padding scales 56–96px.
- Container: 1216px maximum, 24px side gutters (16px on narrow phones). Text measure 42rem or less for longer paragraphs.
- Radius: buttons 8px, optional panels 20px. Borders 1px. Panel shadow: `0 12px 40px rgb(21 25 29 / 6%)`.
- `.site-container`, `.section-space`, `.button`, `.button-primary`, `.button-secondary`, `.eyebrow`, `.nav-link`, `.footer-link`, `.footer-heading`, `.icon` are shared primitives. Tokens are defined through Tailwind v4 `@theme` in `src/styles.css`.
- Navigation switches at 1200px. Native details/summary works without JavaScript; JS adds nested Escape/focus return, outside-click, focus-leave, link-click and breakpoint-change closing, plus synchronized expanded states. No hover-only controls. The sticky white header has an 88px minimum row; its measured height plus 16px sets anchor scroll padding. A subtle shadow appears after 8px of scrolling. Mobile navigation scrolls within the remaining viewport height.
- Future sections should alternate editorial split layouts, simple lists, precise diagrams and occasional cards. Avoid repeating a card grid across sections. Keep generous whitespace and restrained depth.

## Illustration family

`assets/images/automation-editorial-reference.png` establishes the family: original blank folder/calendar and connected rounded forms, white/blue surfaces, dark outlines, understated dimensional depth. It is intentionally not displayed in the shell. Use it as a visual reference for later section-specific assets rather than generating unrelated styles. Preserve readable mobile silhouettes. Keep labels, precise diagrams and controls in HTML/CSS/SVG. No embedded text, numbers, logos, fake screenshots, people or robots. This first reference was generated with the built-in imagegen tool; prompt is recorded in ASSET-SOURCES.md.

## Accessibility and motion

The automation demo uses a balanced copy/workflow split from 1024px and a stacked layout below that. Its five stages remain vertical and fully readable. Progress is conveyed by text plus numbered markers, not color alone. Only the polite status region is live-announced. Staff review is explicit before notification/follow-up previews. Motion is unnecessary: stage changes are discrete, with no animated connectors or automatic scrolling. Run/Reset are hidden in the no-JavaScript static sequence.

Hero: `#hero` uses a 1.22fr/1fr layout from 1024px, a 36–64px heading, a restrained functional-blue phrase, and a 34rem maximum paragraph width. The illustration follows both CTA links in source order. The three labels are HTML text positioned around the generated objects. The image has reserved dimensions, responsive WebP sources, eager loading and high fetch priority. No parallax, continuous motion, or simulated dashboard controls are present.

Use one H1 and logical headings, landmarks, meaningful image alternatives (empty alt for decorative art), visible focus, and descriptive links. Primary controls are at least 44–48px high. Keep HTML content and native navigation functional without JS. Avoid autoplay and decorative movement; color transitions are 160ms and disabled for reduced motion. Check new layouts at 320px, tablet and desktop widths and at zoom. Do not use brand blue with small white text.

## Integrations

Keep this section lighter than the service catalog and demo: pale tint, a compact editorial split, and six category labels around a small workflow hub. The desktop connector is decorative SVG; categories remain an HTML list. Below 1100px, remove the hub and connector and use a readable grid; below 380px, use a single column. Avoid vendor-specific iconography and compatibility or partnership claims without project evidence.

## Why Reach First

Use a white editorial section with introduction at left and four lightly divided icon/text rows at right from 900px. Stack the introduction above the rows on mobile. Reuse 24px Lucide icons in functional blue and a small decorative CSS brand accent. Keep the proposed-approach framing explicit; do not turn these principles into unverified historical claims or employee imagery.

## FAQ

Use native disclosures in a restrained canvas section, with a 64rem maximum container width, thin row dividers, and 48rem maximum answer width. Each full summary row is the control; the decorative Lucide chevron points up when open. Retain native keyboard and accessibility semantics, visible focus, and no-JavaScript operation. Do not add a fixed answer height, motion, or FAQ structured data by default.

## Closing consultation

Use ink with white headings and pale copy for a confident final section. A white HTML CTA provides contrast, with a white offset focus ring. The decorative inline SVG uses existing blue tokens and remains separate from the readable HTML content. Stack at widths below 900px; keep the full-width mobile CTA before the reduced motif. No animation or fixed positioning is needed.

## Footer

Preserve the authentic original logo on white. Use a separate compact brand/coverage row above Services, Industries, Company, and Contact navigation groups. Use four columns on desktop, two on tablet, and a logical single-column order on mobile. Keep service names readable and footer link targets at least 44px tall. Social links need descriptive accessible names; contact details and legal destinations must match verified source evidence.

## Enhanced navigation

Desktop Services uses a 740px two-column disclosure with 22px Lucide icons, restrained group labels, explanatory lines, and an overview-link strip. Industries uses the same icon/description rhythm. Preserve native disclosure semantics instead of application-menu roles. Panel entrance is 180ms; navigation underlines and CTA arrows use 160ms transitions.

Mobile uses a native modal sidebar with a 440px maximum width and full dynamic viewport height, white surface, original logo, persistent close row, and independently scrollable navigation. Background is dimmed and inert while open. The existing native menu supplies the no-JavaScript fallback. The 220ms sidebar entrance is disabled for reduced motion. Keep no extra navigation libraries, decorative imagery, or unverified destinations.

## Hero refinement

The updated hero uses a restrained white/blue background, shorter desktop vertical spacing, and a framed version of the existing conceptual artwork. Faint orbit lines and small HTML labels with Lucide icons unify the illustration treatment. The image entrance, label stagger, and SVG connection highlights run once and settle within approximately 2.25 seconds. All effects are disabled for reduced motion.

Phone policy: hide hero artwork below 640px and keep copy/CTAs prominent. Picture sources avoid fetching the raster hero on initial phone loads. Mobile header and drawer use matching 48px icon-only controls with accessible labels; retain measured logo alignment.
