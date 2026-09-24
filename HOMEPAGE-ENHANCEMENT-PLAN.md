# Reach First homepage enhancement plan

Research date: 17 September 2026. Planning only; no homepage implementation changes were made during this review.

## Recommended direction

Make the homepage feel like a carefully designed automation consultancy: clear editorial typography, purposeful workflow illustrations, varied section layouts, and restrained interaction feedback. Preserve the approved section order, copy, service names, audience groups, destinations, original logo, and single H1. Build on the existing HTML, Tailwind, local Lucide sprite, and vanilla JavaScript.

The most valuable changes are stronger visual storytelling in the hero and priority services, tighter spacing in long sections, and a more legible interactive demo. Animation is a finishing layer, not the main redesign.

## Reference review

Reviewed live pages in connected Chrome, supported by official-page text checks. Sites may vary by locale and release. These are visual observations, not accessibility certifications or measured conversion results. Exact animation durations were not measured; the timing values below are proposed specifications. Hover recommendations are design proposals rather than a claim that every reference hover state was exhaustively tested.

| Reference | Observed in Chrome | Application to Reach First |
| --- | --- | --- |
| [Linear](https://linear.app/) | Dark, tightly controlled typography; a large focused hero visual; a grouped Product disclosure with descriptions and fine dividers. Opened the menu and inspected its layout. | Borrow hierarchy, alignment, and readable menu grouping. Keep Reach First's light brand system and conceptual illustrations. Linear's app UI is evidence of its own product and must not become a fictional Reach First product interface. |
| [Stripe](https://stripe.com/) | Strong headline emphasis, a large colored hero composition, clear primary/secondary controls, and an asymmetric feature grid with different panel sizes and tightly cropped visual examples. | Use varied scale, careful illustration cropping, and clear CTA hierarchy. Adapt accents to Reach First blue; retain its three priority services rather than copying Stripe's product grid or multicolor identity. |
| [Zapier](https://zapier.com/) | Broad whitespace, two prominent hero actions, paired feature panels, and changing workflow illustrations. Successive screenshots showed a section settling from a faded state and illustration content changing. At 390px the hero CTAs stacked to full width. | Use compact task-based visual sequences and straightforward mobile stacking. Keep any demonstration local, user-triggered, and labeled. Do not transfer Zapier's app counts, logos, certifications, availability claims, or platform positioning. |

The references are sources for design principles, not assets to copy. No third-party visual assets were imported.

## Current-page assessment

The homepage already has a coherent palette, useful conceptual artwork, semantic sections, native menus/FAQ, a local simulation, and verified routes. The main weakness is that several sections share similar pale surfaces, rounded containers, and generous vertical spacing, which makes the page feel longer and less differentiated than the content requires.

At the inspected 1280px desktop viewport, approximate section heights were: hero 729px, opportunities 943px, services 935px, industries 1323px, demo 935px, process 686px, integrations 449px, approach 544px, FAQ 648px, and consultation 483px. These are layout measurements, not performance metrics. Use them as a baseline when tightening spacing; do not achieve a shorter page by hiding copy or clipping content.

## Section-by-section plan

| Section | Layout and visual enhancement | Interaction and mobile behavior | Priority |
| --- | --- | --- | --- |
| Header | Refine the Services disclosure with consistent icon/text alignment and a little more internal breathing room. Keep all seven exact names. Consider a two-column desktop panel only if it fits without crowding; retain a simple list otherwise. Keep the authentic logo unchanged. | Add a short opacity/4px entrance to the panel, a tint on hovered/focused links, and a small CTA-arrow shift. Preserve native details fallback, Escape, outside dismissal, expanded state, and measured anchor clearance. Keep the full navigation labels out of cramped tablet rows. | P1 |
| `#hero` | Preserve the 55/45 split and exact text. Refine the H1 measure and line breaks across widths so the emphasis reads as one thought. Enlarge the visible central hub slightly through crop/composition rather than increasing section height. Add a faint blue radial wash behind the existing art. Give HTML labels one consistent treatment. | Optional one-time 400ms illustration entrance with at most 8px travel. Keep headline and CTAs immediately visible. No continuous floating, mouse tracking, or parallax. Copy and full-width mobile CTAs precede art. | P1 |
| `#automation-opportunities` | Tighten card padding and remove unnecessary empty vertical space. Preserve the varied bento and all four explanations. Give each small motif a clearer task: request → recipient; reminder → follow-up; forms → handoff; repeated entry → connected records. Use the same line weight and node style. | These are informational articles: no pointer cursor, lift, or hover-only explanation. A connector can draw once when entering view, with its final state always available. Stack in source order on mobile. | P1 |
| `#services` | Keep three feature articles above four compact entries. Replace oversized empty areas in the priority cards with shallow code-native vignettes: tools/approval/data; enquiry/assignment/reminder; approved information/staff handoff. Align CTA baselines without hard-coded text heights. Keep the supporting four as editorial rows rather than adding more large cards. | Use subtle border emphasis on `:focus-within` and a CTA arrow movement. Keep only the real link interactive unless the card is deliberately redesigned as one semantic link. On mobile, reduce decorative vignette height before reducing copy spacing. | P1 |
| `#industries` | Preserve the two editorial panels. Bring image scale, shadows, and crop into closer agreement; strengthen Home & Field Services through a slightly bluer surface and more prominent image, not extra claims. Reduce redundant panel padding. Align workflow lists with the text column. | Keep headings and all workflows visible. Optional one-time illustration fade; no image zoom on noninteractive panels. Mobile text precedes art. No third audience, fake team photos, or implied client projects. | P1 |
| `#automation-demo` | Make the demo the page's main interaction. Separate the fictional enquiry, stage sequence, review gate, and prepared draft visually. Give the active stage a distinct border, icon, and text state. Keep the review gate prominent before outgoing previews. Use compact spacing so Run/Reset and current status are easy to see. | Animate only the active connector for 250–400ms after a user runs the example. Pause at staff review; preserve Reset cancellation and polite status announcements. Keep all five stages visible and vertical on mobile. Do not introduce tabs that hide the sequence, APIs, live badges, autoplay, or automatic scrolling. | P1 |
| `#how-we-work` | Keep the ordered editorial timeline. Improve contrast between stage number, title, and explanation. Reduce the large visual gap between left heading and right list where practical. A consistent thin blue connector can echo the demo. | Static reading remains primary. Optional once-only connector reveal, with no scroll-progress implication or pinned section. Keep all five stages in a vertical list on mobile. | P2 |
| `#integrations` | Retain the compact section. Align every connector precisely to the edges of its category tile and central hub at different desktop widths. Match node radius and stroke weight to the new service vignettes. | Keep category tiles informational. No clickable-looking hover treatment. If any line animation is added, run it once and end in the existing static diagram. Retain the mobile grid/list and the connection limitations copy. | P2 |
| `#why-reach-first` | Refine the introduction-to-list alignment and replace the three decorative bars with a small composition using the shared workflow motif. Keep the four points as divided rows. The proposed-approach label remains explicit. | No extra interaction is necessary. Static text and restrained icons keep this section short and credible. Mobile introduction stays above the points. | P2 |
| `#faq` | Keep native details/summary. Add a subtle tint to the open question and a slightly clearer answer indent. Reduce excess outer spacing while retaining 44px-plus targets and comfortable answer line lengths. | Rotate the chevron over 160ms. Prefer immediate native opening over a fragile height animation. Several answers may remain open. Preserve visible focus and no-JavaScript access; no FAQ schema added by this visual pass. | P2 |
| `#consultation` | Keep the dark closing section and white CTA. Enlarge/rebalance the motif slightly on desktop and reduce the separation between supporting copy and action. Keep the text legible against a flat background. | Match CTA hover/focus to the shared control system. A single subtle motif entrance is enough. Keep the mobile button full width, before the motif, and in normal page flow. No form or fixed overlay. | P2 |
| Footer | Preserve the authentic logo on white and the four navigation groups. Refine column widths so the seven long service names wrap naturally. Tighten desktop vertical rhythm while retaining the current logical mobile stack and contact visibility. | Use consistent underline/color feedback and visible focus. No footer animation, collapsed essential links, newsletter form, or marketing promotion. Keep the outstanding Digital Marketing Services decision in README. | P2 |

## Shared visual and interaction specifications

Retain Manrope, the original logo, brand blue `#0083c6`, functional blue `#006a9f`, ink `#15191d`, and pale neutrals. Use the brighter blue for decoration; retain the darker blue for small text and filled actions where contrast requires it. Consolidate reusable styles for icon containers, workflow nodes, connectors, image framing, and text links.

Use section-specific spacing instead of one large spacing value everywhere. Trial 64–80px desktop padding for compact supporting sections and 80–96px for hero/major sections; mobile 40–56px, adjusted to content. These are starting values, not fixed heights. Keep the demo and services spacious enough to scan. Reserve the strongest dark contrast for the closing CTA; use finer dividers and content scale to distinguish the light sections.

| Interaction | Proposed behavior | Constraints |
| --- | --- | --- |
| Buttons and text links | 140–180ms color/border transition; arrow translates 2–3px on hover and keyboard focus. | No moving text, layout shift, or distracting scale bounce. Preserve focus outline. |
| Service-card emphasis | 180ms border/shadow change on hover where useful and on focus-within. | No card-wide pointer cursor if only the CTA is a link; no new tab stops for decoration. |
| Navigation panel | 160–200ms opacity and small translation on open. | Essential links work without JS; do not delay focus or use hover as the only opening mechanism. |
| Illustration entrance | 350–450ms, once; no more than 8px travel. | Animate wrappers or code-native layers, not individual objects baked into a bitmap. Do not animate every section. |
| Workflow explanation | Short connector draw or state transition; demo remains user-triggered. | No looping pulses, fabricated activity, or motion presented as real system connectivity. |
| Reduced motion | Immediate final decorative state; instant menu and FAQ changes. | Disable translation, drawing, and entrance effects. Demo still shows explicit discrete state changes and staff review. |

Only add hover effects within fine-pointer/hover-capable media queries; keyboard focus gets its own equivalent emphasis. Touch must never require a first tap just to reveal an action.

## Illustration work

Keep the existing generated hero and two industry assets as the baseline. First improve framing, spacing, and label placement in CSS. Only generate replacement artwork if those adjustments cannot create a consistent family. If replacement is needed, use the existing reference, matching blue/white materials, restrained shadows, and blank conceptual objects. Preserve original assets and document new prompts and sources.

Create priority-service vignettes and supporting motifs in SVG/HTML. They need exact labels and meaningful state changes, so bitmap text is inappropriate. No external logos, customer identities, staff likenesses, product dashboards, or performance charts are part of this plan.

## Implementation order

1. **Foundation and first impression:** capture baseline desktop/mobile views; consolidate visual tokens; improve hero, header, and shared CTA states. Preserve verified routes and native semantics.
2. **Visual storytelling:** tighten opportunities; add the three service vignettes; align industry illustrations; improve demo state and staff-review hierarchy. Complete responsive layouts before adding motion.
3. **Supporting sections:** refine process, integrations, approach, FAQ, consultation, and footer. Keep the approved information sequence and IDs.
4. **Motion and final QA:** add only the useful effects specified above, with reduced-motion and no-JavaScript fallbacks. Compare before/after screenshots and check interaction behavior.

Work incrementally in `index.html`, `src/styles.css`, the local SVG sprite where needed, and `assets/js/main.js` only for necessary enhancement. Rebuild `assets/css/styles.css`; update DESIGN-SYSTEM.md and ASSET-SOURCES.md when changes are implemented. Avoid adding a motion library for these limited effects.

## Acceptance criteria

- Inspect every section at 320, 390, 768, 1024, 1280, and 1440px; verify text reflow at 200% zoom. No clipped copy, horizontal overflow, or excessive fixed-height cards.
- Check keyboard traversal, menus, Escape/focus return, FAQ expanded states, and every CTA. Focus remains visible against both light and dark backgrounds.
- Test the complete demo: Run, required review, continuation, completion, Reset during a run, and repeated runs. No network writes or customer-data storage.
- With JavaScript disabled, menus, FAQ answers, links, and the static workflow remain usable. With reduced motion, no decorative movement remains.
- Preserve the single H1, all approved section IDs, service names, audience groups, disclaimer wording, and existing verified links. No unsupported proof or compatibility claims.
- Check logo aspect ratio, responsive image sources, reserved dimensions, hero priority, and lazy loading below the fold. Reuse the current small WebP assets where possible.
- Compare page weight and browser performance before/after. Set an initial engineering budget of no new runtime library and no more than 10KB gzip of added interaction JavaScript; investigate any measurable loading or layout-shift regression. These are proposed budgets, not reported results.
- `npm run build` and appropriate JavaScript checks pass. Record browser results and any unresolved issues; do not describe visual review alone as a full accessibility audit.

## Decisions retained

No change to the shared consultation destination. No new service or industry routes until actual pages exist. No fabricated statistics, testimonials, certifications, client logos, free consultation offer, guaranteed timing, or 24/7 support. Digital Marketing Services continuation remains a business decision already documented in README.
