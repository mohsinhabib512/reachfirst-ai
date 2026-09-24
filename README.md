# Reach First homepage foundation

Static HTML5, locally compiled Tailwind CSS v4, a small custom CSS layer, and vanilla JavaScript. The starting directory was empty and was not a Git repository; no existing project instructions or unrelated files were found.

## Run locally

Use Node 22 or newer and npm.

```sh
npm ci
npm run build
npm run preview
```

Open http://127.0.0.1:4173. For development, run `npm run watch` in a second terminal. Preview binds only to loopback; `PORT` can override 4173. No deployment was performed. Dependencies have exact versions and a committed-ready `package-lock.json`. Compiled CSS is included; never edit it directly. The CLI setup follows https://tailwindcss.com/docs/installation/tailwind-cli.

## Files and scope

- `index.html`: one source of page markup; header, `#hero`, `#automation-opportunities`, `#services`, `#industries`, `#automation-demo`, `#how-we-work`, `#integrations`, `#why-reach-first`, `#faq`, `#consultation`, footer and skip link. A proof section requires suitable verified evidence before implementation.
- `src/styles.css` → `assets/css/styles.css`: Tailwind utilities, tokens and shared styles.
- `assets/js/main.js`: progressive enhancement for native navigation disclosures, sticky shadow and measured anchor offset.
- `assets/images/`: unmodified original logo assets and generated illustration reference for later sections.
- `assets/fonts/`: local Manrope and OFL license.
- `assets/icons/`: only the Lucide symbols used by the header and workflow motifs, license, original favicon.
- `scripts/preview.mjs`: dependency-free static local preview.
- `DESIGN-SYSTEM.md`, `ASSET-SOURCES.md`: design decisions, attribution, verification and gaps.
- `reference/`: ignored local discovery downloads; not needed to build or serve.

## Routes

Every “Book a Consultation” link points to the verified https://www.reachfirst.com/contact-us/ contact page. No scheduling widget is implied. About, blog and policies use verified existing absolute URLs. The original domain is retained. Logo links point to this local homepage.

`#services` targets the main service catalog. Its seven articles use the approved `service-*` IDs below; header and footer links have been migrated from the original temporary footer IDs. `#industries` now targets the two editorial audience panels. The intended future page paths below are proposals only, have not been verified, and are not used as hrefs:

| Existing anchor | Intended future path |
| --- | --- |
| #service-consulting | /services/ai-consulting-automation-planning/ |
| #service-workflow | /services/business-workflow-automation/ |
| #service-sales-crm | /services/sales-crm-automation/ |
| #service-agents | /services/ai-agents-customer-support/ |
| #service-voice | /services/ai-voice-agents/ |
| #service-custom | /services/custom-ai-applications-integrations/ |
| #service-managed | /services/managed-ai-automation-support/ |
| #industries | /industries/home-field-services/ and /industries/professional-services/ |

Case Studies links to the verified live https://www.reachfirst.com/case-studies/ archive. Its existing marketing work is not presented as evidence of AI automation outcomes. Other social links are recorded in ASSET-SOURCES.md; the shell uses the site-listed LinkedIn URL.

### Header and pending anchor mapping

Services offers all seven finalized names and links directly to their main-content articles. Industries links to `#home-field-services` and `#professional-services` on their completed main-content panels; footer links share these targets. No placeholder sections were added.

**How We Work is implemented:** both menus link to `#how-we-work` between Industries and Case Studies. The full five-stage process is on this homepage; no separate process-page link is needed.

The white header is sticky, 88px minimum, with a subtle shadow after 8px of scrolling. A ResizeObserver updates the CSS anchor offset to its rendered height plus 16px. The no-JavaScript fallback uses the CSS height token. Desktop navigation starts at 1200px to preserve space for the full labels and original logo. Smaller viewports use a scrollable native details menu with nested disclosures. Tab/Shift+Tab follow normal link order, Enter/Space toggle summaries, Escape closes the innermost open disclosure and returns focus, and outside clicks or focus leaving dismiss panels. JavaScript synchronizes `aria-expanded`; without JavaScript, native details exposes its own accurate expanded state. No ARIA application-menu roles or hover-only interactions are used.

## Future WordPress mapping

Map header/footer boundary comments to shared template parts. Map each subsequently completed main section to one block or template part, with its stable ID and semantic heading. Enqueue compiled CSS and `main.js`, serve local font/image assets from the theme, and use WordPress menus for verified routes. Keep CTA destination in one theme setting. Replace the static copyright year with server-rendered output. Do not copy homepage markup into parallel unused partials. No PHP or WordPress files exist yet.

The shell has `noindex, nofollow` while unfinished. Review/remove at launch, and add the production canonical URL then. Browser requirements follow Tailwind v4 (modern evergreen browsers). Logo quality and discovery limitations are documented in ASSET-SOURCES.md; no blocker prevents the next section work.

## Verification

`npm run build` and JavaScript syntax checks passed. Browser checks at 320px, 768px, 1024px and the default desktop viewport found no horizontal overflow. Original images loaded, all homepage fragment links resolved, and all three consultation links shared the same contact destination. Native mobile navigation was opened with JavaScript disabled; with JavaScript enabled, Escape closed it and restored summary focus. This is foundation QA, not a complete accessibility audit of future sections.

Header update: build and syntax checks passed; browser interaction checks at 1280px, the 1200px desktop breakpoint and 320px verified dropdown readability, original logo aspect ratio, no horizontal overflow, keyboard traversal, nested Escape/focus return, matching expanded states, sticky shadow, and anchor clearance. Native mobile and nested Services disclosures opened/closed with script execution disabled. No broken homepage fragments, duplicate IDs or browser console errors were found.

## Hero

`#hero` replaces the initial intro directly below the header and contains the page's only H1. Wide screens use approximately 55% copy / 45% art; below 1024px, the copy and genuine HTML CTA links precede the illustration. Below 480px the buttons stack. The illustration is conceptual editorial art, with three HTML labels, not a client dashboard or a packaged product. No hero JavaScript or animation is used.

The hero image has explicit 1254 × 1254 dimensions, square aspect ratio, eager loading and high fetch priority. Responsive WebP assets are about 21KB (640px) and 49KB (1254px); the original PNG is preserved but not loaded by the page. The preview server serves WebP with the correct MIME type. See ASSET-SOURCES.md for the exact imagegen prompt and attribution. Explore Services now links to the completed `#services` catalog.

Hero QA: build passed. Browser checks at 1440px, 1024px, 390px and 320px confirmed readable layouts with no horizontal overflow; mobile copy and CTAs precede the image. The responsive image loaded successfully, one H1 remains, and the Explore Services anchor navigated and focused its target with JavaScript disabled. No browser console errors were observed.

## Automation opportunities

`#automation-opportunities` follows the hero before the service catalog. Four semantic articles cover customer enquiries, lead follow-ups, client onboarding and daily administration. The layout alternates 7/5 and 5/7 column spans from 768px, with wider items using side motifs from 1100px. Below 768px all four stack in source order. Every problem and solution remains visible in HTML. The static CSS/Lucide motifs are decorative and excluded from the accessibility tree; articles are not presented as buttons. The single section link uses `#services` with the existing focus/hover styling. No extra JavaScript, images, dependencies or animation were added.

Verification: build passed; desktop visual review and 320px/768px layout checks found no horizontal or card overflow. All four articles remain in logical order, one page H1 remains, and keyboard activation of the section link focuses `#services` with approximately 16px clearance below the sticky header.

## Service catalog

Three priority services appear first in larger white feature cards with blue top borders; four supporting services follow as compact entries. Feature cards become three columns at 1024px. Supporting entries use one column on phones, two from 640px, and four from 1200px. Content sets card height; nothing is clipped or hidden. Each article has a distinct local Lucide icon, exact approved name, descriptive copy, and a 44px-minimum link with a service-specific accessible name. Articles are anchor-focusable but do not add extra stops to the Tab sequence.

The verified live AI Automation overview does not expose matching standalone pages for the seven approved services. Every “Discuss this service” link uses https://www.reachfirst.com/contact-us/. Proposed future detail-page routes remain separate in the table above. Service copy and links work without JavaScript.

Catalog QA: build passed. Browser checks at 1280px, 1024px and 320px found seven articles with the exact requested IDs, no duplicate page IDs, no broken fragment links, and no horizontal/card overflow. A migrated footer link focused the correct article with approximately 16px clearance below the sticky header. All seven service CTAs use the shared contact destination.

## Industries

`#industries` follows services with two substantial editorial panels: `#home-field-services` and `#professional-services`. Home & Field Services has a pale-blue surface, blue top border and primary button for slightly stronger emphasis. Professional Services uses a neutral surface and secondary button. From 900px, images and copy sit alongside each other with alternating composition; below that, all text and the CTA precede each supporting image. Both panels contain three visible HTML workflow labels and explanations. Property maintenance is a home/field example; property management is not a third audience.

No separate industry pages have been implemented. Both “Discuss your workflow” links use the shared contact destination; proposed industry paths remain only in the route table. Header and footer anchors now land on the panels rather than footer text. The two matching built-in imagegen illustrations are conceptual artwork; original PNGs are preserved and 960px WebP copies are served with explicit dimensions, lazy loading and asynchronous decoding.

Industry QA: build passed. Browser checks at 1280px, 1024px and 320px confirmed exactly two panels, three workflows each, loaded images, no clipping/overflow, and no duplicate IDs or broken fragment links. Both panels put text before imagery on mobile. The migrated anchor lands approximately 16px below the sticky header; both CTAs share the verified contact URL.

## Illustrative workflow demo

`#automation-demo` follows industries. It is visibly labeled “Illustrative workflow demo — sample data” and uses only a fictional inspection request with no identifying/contact data. The five exact stage names remain readable in an HTML ordered list, including the sample details, local record preview, notification preview and follow-up draft. The static sequence and staff-review explanation remain useful without JavaScript; JS-dependent controls are hidden until initialization succeeds.

Run Example advances the first stages at two-second intervals and pauses at stage 3 for explicit sample review. “Review sample & continue” permits only the remaining local previews. The follow-up stays a draft requiring staff approval. Reset clears the pending timer and returns every step to Pending; rerun is available after completion. Status is a polite atomic live region, stages have textual state labels and `aria-current`, and native buttons support keyboard activation. Short output transitions are disabled under reduced motion. There is no automatic scrolling or parallax.

The simulation lives only in page memory. It makes no API/network calls, uses no browser storage, submits no forms, creates no CRM records and sends no messages. There is no login, real client result or platform claim. No new dependencies or image assets are needed.

Demo QA: build and JavaScript syntax checks passed. Browser checks verified the mandatory stage-3 pause, keyboard continuation, all-five-stage completion, rerun, and cancellation of delayed updates when Reset is pressed mid-run. At 320px, the vertical sequence and controls fit without horizontal overflow. With JavaScript disabled, controls are hidden and all five stages plus the review explanation remain readable. Reduced-motion emulation showed no animation; no console errors were observed.

## How We Work

`#how-we-work` follows the demo with an ordered Assess ? Pilot ? Implement ? Train ? Support sequence. A full-width editorial list places a custom SVG illustration beside each numbered stage. The heading and short introduction share a row from 900px. Below 768px, stage descriptions sit beneath their number/icon/title row. All five original explanations remain visible without JavaScript. Fine-pointer hover adds a pale background, blue edge, and small illustration lift; reduced-motion preferences disable transitions. A responsive consultation strip follows the stages using the shared verified contact destination. No deadlines, prices, free-pilot offers or guaranteed outcomes are claimed.

Process QA: build passed. Desktop navigation at 1200px fits with the newly enabled How We Work link. Desktop and 320px checks confirmed five ordered stages, no horizontal overflow, and the shared CTA destination. The mobile header link and complete process remained usable with JavaScript disabled.

## Integrations

`#integrations` follows the process section. Six semantic list items use local Lucide icons, HTML category names, and short examples of the information each category handles. From 1100px, raised category tiles connect through curved SVG paths to a layered CSS workflow hub. Below 1100px, the diagram becomes a three-column grid (640px+), two-column grid (380px+), or compact single-column list. The section uses a light gradient, a subtle dot texture, and a caption. All content works without JavaScript. Copy qualifies available connections, permissions, and project requirements; the CTA retains the shared verified contact URL. No vendor logos, partnership badges, named compatibility claims, or live-connection indicators are used.

Verification: production CSS build passed. Browser inspection at 1200px, 390px, and 320px confirmed readable categories, no horizontal overflow, and visible keyboard focus on the CTA. The desktop section is approximately 449px tall. The category layout and copy are static HTML/CSS and remain available without JavaScript.

## Why Reach First

`#why-reach-first` follows integrations. The introduction explicitly frames all four points as a proposed delivery approach. From 1024px, the introduction and a shared four-principle panel sit side by side. The principles use a two-by-two grid from 640px and a compact icon/text list on smaller screens. A small HTML/CSS composition connects ?Workflows?, ?Systems?, and ?People?; it reuses the same local Lucide symbols as the principles. The human-oversight icon receives a blue accent. Fine-pointer hover adds a pale background, a short underline transition, and a modest icon lift; reduced-motion preferences disable transitions. All approved headings and descriptions are preserved. No photographs, historical accomplishments, outcome claims, fake links, or extra tab stops were added. This section needs no JavaScript.

Verification: CSS build passed. Browser checks at 1280px and 320px confirmed the desktop split, mobile reading order, four semantic list items, no horizontal overflow or clipped text, and preservation of the single page H1. The mobile anchor clears the sticky header.

## FAQ

`#faq` follows Why Reach First and contains six concise draft answers in native `details`/`summary` disclosures. The first answer is open in the HTML by default; multiple answers can remain open. A short introduction sits beside the accordion from 1024px and above it on smaller screens. White question panels use CSS plus/minus indicators; open panels have a blue edge, stronger border, and blue indicator. Browser-native semantics expose expanded/collapsed state without redundant ARIA or JavaScript. Summary rows have at least 72px height, visible inset keyboard focus, and comfortable answer spacing. Reduced-motion preferences disable the indicator transitions. The after-launch answer links to the existing `#service-managed` article. All six original answers are preserved; no FAQ structured data was added.

Verification: CSS build passed. Desktop keyboard checks covered Enter expansion, Space collapse, Tab traversal, and accessible answer text. At 320px with script execution disabled, two disclosures opened independently and exposed answers in the accessibility tree; text remained readable with no horizontal overflow. The support-service fragment target exists. Temporary browser test settings were restored.

## Closing consultation

`#consultation` follows FAQ and closes the main content with a contained, rounded ink/blue panel. The exact requested heading and supporting copy are preserved; the final word of the heading receives a light-blue accent. A prominent white HTML CTA with a blue arrow inset links to the shared verified contact destination. A compact agenda explains the discussion topics: the process, existing systems, and possible next steps. From 900px, copy and agenda sit side by side; on phones, the heading, supporting copy, and CTA come before the agenda. Below 480px the CTA fills the available width with a 58px minimum height. Its light-blue keyboard outline contrasts with the dark panel. Subtle CSS arcs sit in the lower decorative margin, away from the content. No form, new submission handling, response-time promise, or free-consultation claim was added.

Verification: CSS build passed. Browser checks at 1280px and 320px confirmed visible keyboard focus, readable stacked content, a 52px mobile CTA, no horizontal overflow, and the correct contact URL. No form, submission handling, browser storage, additional JavaScript, or fixed overlay was added.

## Footer

The footer retains the original 500 × 59 Reach First logo on white without recoloring. A short introduction describes practical AI automation and integrations for growing service businesses, serving Canada and the United States. Four semantic navigation groups contain Services (all seven approved anchors), Industries (the two launch groups), Company (verified About, Insights, and LinkedIn), and Contact (verified email, telephone, and the shared consultation route). The social link is named “Reach First on LinkedIn” for assistive technology. Actual Privacy Policy and Terms of Service routes remain in a separate legal navigation.

Layout: the brand introduction and a dedicated Contact panel share the top row from 640px. Below, Services uses two columns from 640px; at 1024px, Services, Industries, and Company form one balanced navigation row. On phones, the brand/contact stack is followed by the complete service list, with Industries and Company side by side. The legal row includes a native Back to top link to `#top`. All footer links have a minimum 44px target height and visible keyboard focus. The new `#footer` ID supports direct preview links. Contact and external destinations reuse the evidence recorded in ASSET-SOURCES.md.

## Enhanced header and mobile sidebar

The enhanced desktop Services panel groups the three priority services and four supporting services in two columns with Lucide icons and concise descriptions. Industries includes short workflow descriptions. The native disclosures retain click/keyboard operation, Escape, outside dismissal, focus-leave dismissal, and verified homepage anchors. Link emphasis and brief entrance transitions use the existing brand system.

Below 1200px, JavaScript moves the existing mobile navigation into a native modal `dialog`, avoiding duplicated links and IDs. The sidebar fills `100dvh`, is up to 440px wide, and becomes full width on smaller phones. Its close control stays above a separately scrollable navigation area. A dim backdrop, scroll lock, explicit Tab wrapping, nested Escape handling, focus return, and breakpoint cleanup support modal operation. The consultation CTA follows navigation and sits near the bottom when space permits; longer menus scroll naturally. Anchor navigation closes the dialog, unlocks scrolling, and focuses the destination with header clearance.

Without JavaScript or native dialog support, the original mobile details/summary navigation remains available beneath the header. Reduced-motion disables panel/sidebar animation. The original logo is unchanged in both header and drawer.

Research: the prior connected-Chrome Linear review informed the grouped desktop layout. Interaction behavior follows [W3C disclosure navigation guidance](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/) and [modal-dialog guidance](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/). These sources guide implementation; they do not constitute certification.

Verification: CSS build and JavaScript syntax checks passed. Chrome checks covered 1280px desktop, 1200px panel fit, 768px backdrop sidebar, 390px mobile, and 320px narrow-screen/reduced-motion behavior. Verified focus wrapping, nested Escape, close-button and backdrop dismissal, restored trigger state/focus, scroll unlocking, breakpoint cleanup, local anchor focus/clearance, all header fragment targets, and no console errors. Native fallback and nested Services opened with JavaScript disabled. This supersedes the original header behavior description above.

### Outstanding business decision: Digital Marketing Services

Continuation of the Digital Marketing Services offer has not been confirmed for the new AI automation positioning. The business owner must confirm whether that offer continues and, if so, approve its scope and destination before a promotional footer link is added. This pending decision is documented here only; no promotion or decision notice appears on the public page. No newsletter form is implemented because no authorized working destination has been supplied.

### Header hover and alignment refinement

Desktop Services and Industries open on pointer hover when the device supports fine-pointer hover. A 180ms leave delay and a small pointer bridge allow travel into the panel; a submenu containing keyboard focus remains open. Click/touch and keyboard disclosure controls still work, and Escape remains available. Navigation uses 24px gaps with an additional 16px separation before the consultation CTA.

Mobile Menu and Close controls share 104 × 48px dimensions and the same border/radius treatment. On opening, the drawer uses the header's measured logo width, side offsets, and height so phone layouts keep the logo and control in the same positions. Chrome measurements at 390px and 320px confirmed identical logo/control sizes and positions within half a CSS pixel. Desktop pointer testing confirmed hover opening, travel into a submenu link, and leave dismissal. Build and JavaScript syntax checks passed.

## Hero refinement and icon-only mobile controls

The mobile menu trigger and drawer close button now show only their hamburger/close icons, with accessible names and matching 48 × 48px targets. The measured logo/toolbar alignment remains intact.

The hero retains its exact approved copy and single H1, with tighter desktop spacing, refined type rhythm, a restrained white-to-blue surface, and a directional icon on Explore Services. Existing generated artwork is preserved. Following approval of `HERO-MOTION-PLAN.md`, four SVG highlights now flow continuously inside clipped pipe surfaces on staggered 3.6-second cycles. Faint outer and inner arcs rotate in opposite directions over 36 and 56 seconds. A static neural-node glyph sits on the central hub; objects and HTML labels stay fixed. This supersedes the earlier entrance-only animation.

An accessible 44px Pause/Resume animation button controls all hero motion. The button is icon-only, with an updated accessible name and tooltip for each action. Motion pauses when the illustration leaves the viewport or the browser tab becomes hidden; manual pause takes precedence when it returns. Reduced-motion and no-JavaScript visitors receive static artwork without a redundant control. The SVG shares the bitmap's square coordinate system, and rotating rings are clipped locally to prevent horizontal overflow. A small authored SVG luminance mask clears the four object silhouettes, preventing the image's multiply blend from revealing background circles through their surfaces. No animation library, provider logos, live connection claims, or new bitmap downloads were introduced.

Below 640px the entire illustration is hidden, as requested. A media-qualified picture source supplies the existing WebPs only from 640px upward; the phone fallback is a tiny inline blank SVG, avoiding a hero-art download on initial phone load. Phone CTAs stack at full content width. The illustration is conceptual, and motion does not represent live connectivity.

Verification: production CSS build and JavaScript syntax checks passed. Continuous-motion browser checks at 1440px, 1280px, 640px, 390px, and 320px confirmed aligned overlays, no horizontal overflow, phone illustration hiding, inline phone image source, and one H1. Pause/Resume worked by mouse and keyboard; computed animation values stayed unchanged while paused. Leaving and returning to the hero preserved manual pause. Reduced-motion and JavaScript-disabled checks confirmed static artwork and hidden animation controls. Temporary browser emulation settings were restored. Earlier header checks also verified the icon-only drawer controls and 1024px layout.

## Animated automation opportunities

The four original task explanations remain visible HTML in a varied 7/5-column bento layout, stacked in reading order below 768px. Each article now has an authored HTML/CSS/SVG illustration using the existing Lucide sprite:

- Customer enquiries: a request follows a branching route to a service team.
- Lead follow-ups: a bell moves briefly and a reminder appears beside a conceptual CRM record.
- Client onboarding: a document settles into a folder and three checklist markers appear in sequence.
- Daily administration: small record fragments travel between two generic systems.

Each decorative sequence runs once on first entry into view (2.8 seconds, at most 3.1 seconds including stagger), then stays still. Mouse entry can replay the illustration; the section's native Replay illustrations button also works with touch and keyboard. Offscreen/hidden-tab animations pause. Reduced-motion and JavaScript-disabled visitors get complete static compositions with no replay control. No records, counts, customer data, network actions, or platform compatibility claims are added.

Research: [Stripe Billing](https://stripe.com/billing), inspected in connected Chrome, informed the use of focused layered compositions and restrained depth. [Stripe's workflow documentation](https://docs.stripe.com/workflows) informed the readable trigger-to-step sequence; these are visual references only. Animation properties follow [web.dev's performance guidance](https://web.dev/articles/animations-guide), primarily transforms and opacity. The artwork was created in code, without an image-generation or animation dependency.

Verification: Chrome checks at 1440, 768, 390, and 320px found no page overflow or clipped explanatory text. Verified keyboard replay, finite animation duration, reduced-motion, and JavaScript-disabled static rendering. The hero's icon-only control retains its accessible name, visible focus, and 44px target; object-clearance masking was visually inspected. Build and JavaScript syntax checks passed.

## Services visual refinement

The three priority services now use original inline SVG illustrations: connected tasks with an approval point, an enquiry/customer record/calendar composition, and approved information connected to an AI assistant and staff handoff. Their artwork shares a blue, white, and pale-neutral palette with offset layers for depth. Consistent title breaks, reserved artwork space, and aligned consultation links replace the previous small-icon cards and heavy top borders.

The four supporting services use custom SVG emblems for planning, voice, application development, and ongoing maintenance. They are arranged as two columns of editorial entries from 768px, instead of four narrow columns. Priority cards use three columns from 1024px, horizontal artwork/copy layouts at 640–1023px, and vertical cards on phones. Supporting entries put their explanations across the full width on small phones.

All seven approved names, descriptions, service IDs, and consultation destinations remain unchanged. The SVGs are decorative and excluded from assistive technology; no UI text is embedded in them. Subtle CSS hover/focus treatments use the same visual cues for pointer and keyboard users, with no continuous motion or additional JavaScript. Reduced-motion disables transitions.

Verification: production CSS build passed. Connected Chrome checks at 1440, 1024, 768, 390, and 320px confirmed readable layouts, no horizontal overflow or clipped text, matching desktop card heights, all seven existing service anchors, and the shared consultation URL on all seven links. Keyboard focus remains visible, anchored cards clear the sticky header, and all seven illustrations/articles/links remain available with JavaScript disabled. Reduced-motion transitions resolve to zero duration.

## Industry panel refinement

Built for Businesses Like Yours retains two editorial panels and the original conceptual illustrations. Home & Field Services has a stronger blue surface and vertical accent; Professional Services uses a quieter neutral treatment with reversed desktop composition. A concise section introduction explains the audience split. The approved examples are now semantic lists of non-interactive tags: seven home/field examples and three professional-service examples. These tags are not filters or unsupported industry-page links.

Each panel presents three always-visible workflow explanations with distinct local Lucide icons and semantic subheadings. Workflows are framed as opportunities to consider. HTML badges label the original illustrations, and short captions connect the visuals to each audience. Image dimensions and lazy loading remain intact. Labels use a small hover/focus transition, disabled under reduced motion; there is no continuous animation or extra JavaScript. Mobile reading order is heading, business examples, workflows, consultation CTA, then artwork.

Research: [ServiceTitan's scheduling page](https://www.servicetitan.com/features/service-scheduling-software), reviewed in connected Chrome, pairs a concrete field-service task with a relevant visual. The design applies that task-specific hierarchy to Reach First's approved workflow examples. The reference's software screenshots, testimonials, ratings, product promises, and compatibility claims were not reused. No third launch audience, new service claim, or new industry route was added.

Verification: CSS build passed. Chrome checks at 1440, 900, 390, and 320px confirmed wrapped audience tags, readable labels, no page overflow, square loaded illustrations, mobile text-before-image order, two existing industry anchors with header clearance, and the shared consultation destination on both CTAs. Keyboard focus is visible. Reduced-motion transitions are disabled; both panels, all six descriptions, both images, and both CTAs remain available without JavaScript.

## Workflow demonstration refinement

The demo now separates a five-stage icon sequence from a changing sample-output panel. Outputs show the fictional enquiry, organized request/timing, a suggested CRM record with service-desk routing, a team-notification preview, and the final follow-up draft. The exact five stage names and sample-data disclosure are preserved. The record review action sits beside the fields being reviewed. A visible phase label distinguishes Ready, Running, Staff review, and Example complete; these are simulation states, not connection status.

The layout reserves the largest output and review-action space to reduce shifts between stages. Inactive output panels are visually hidden, inert, and `aria-hidden`; only the active output is exposed. Run stays focusable with `aria-disabled` while the state guard prevents duplicate runs. Timed progress does not move focus. Continuing review hides its own button and returns focus to Reset without scrolling. Reset cancels the timer from any phase; completion restores Run. The final state says Draft ready and still requires staff approval before sending.

With JavaScript disabled, the full static ordered sequence and its descriptions remain visible; enhancement-only controls and output panels remain hidden. With JavaScript enabled, descriptions are represented in the active output panel instead. Mobile retains the vertical sequence above the output and keeps all five labels readable. No network calls, storage, forms, customer records, provider logos, performance figures, or new dependencies were added.

Research: [n8n's human-in-the-loop article](https://blog.n8n.io/human-in-the-loop-automation/), reviewed in connected Chrome, informed the explicit review checkpoint. [W3C's role=status guidance](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA22) informed the single polite status region, without moving focus during timed updates. These sources guide interaction design and do not establish Reach First integration support or historical results.

Verification: build and JavaScript syntax checks passed. Chrome testing covered keyboard start/review, all five stages, indefinite pause before notification, final draft, reset during the initial run and immediately after review, restored Run, and exclusion of inactive output text from the accessibility tree. Ready/review workspace heights matched at 1440px. Layout checks at 1440, 1100, 390, and 320px found no overflow or clipped labels. Reduced-motion preserved the workflow with no output animation; JavaScript-disabled rendering retained all five descriptions and staff-review explanation. Temporary browser settings were restored.


## Process section refinement

The large split layout was replaced with full-width editorial rows, clear separators, original SVG stage illustrations, and a closing consultation strip. Research reference: [Linear planning](https://linear.app/plan), inspected for restrained hierarchy and section presentation, not product content. The process keeps semantic ordered-list markup and requires no new JavaScript. Desktop (1440px), tablet (768px), and phone (390px/320px) checks cover readable stages, overflow, and the verified consultation link; keyboard focus is visible. With JavaScript disabled, all five descriptions remain readable; reduced-motion emulation removes illustration transitions. `npm run build` passed.


## Integration section refinement

Research reference: [Merge Unified API](https://www.merge.dev/unified-api), inspected in connected Chrome for grouped categories and curved connection graphics. Its product claims and vendor logos are not used as evidence of Reach First capabilities. The new graphic combines the existing Lucide symbols with authored CSS layers and SVG paths. Fine-pointer hover on the visual or keyboard focus on the section CTA triggers one 2.8-second connection animation; it does not loop continuously. Reduced-motion preferences disable it. Category tiles remain informational list items, without fake links or extra tab stops.

QA: `npm run build` passed. Chrome checks at 1440, 1100, 768, 390, and 320px found no horizontal overflow. Phone labels wrap without clipping; all six categories remain visible. The consultation link has visible keyboard focus and the verified contact destination. With JavaScript disabled, the complete section remains available; reduced-motion emulation reports no connector animation.


## Delivery approach refinement

The previous separated list now sits in one softly outlined editorial panel with four quadrants on wide screens. The introduction includes a compact branded Workflows + Systems + People composition. The section remains framed as a proposed approach, and all four approved descriptions are unchanged. QA: build passed; Chrome checks at 1440, 1024, 768, 390, and 320px found no horizontal overflow. Phone content wraps without clipping. All four descriptions remain visible with JavaScript disabled, and reduced-motion emulation removes the icon transitions.


## FAQ refinement

The first FAQ opens by default via its native `open` attribute. The refined layout adds an introductory column, individually outlined question panels, CSS plus/minus indicators, and a blue open-state accent. Build passed. Chrome checks at 1440, 390, and 320px confirmed the default state, no horizontal overflow or clipped copy, and minimum 72px summary hit areas on phones. Enter opens a question; Space closes it; multiple answers can remain expanded. With JavaScript disabled, the first answer still opens by default, disclosures still toggle, and the final answer's service link is keyboard reachable. Reduced-motion emulation removes indicator transitions.


## Consultation CTA revamp

The original full-width dark strip and SVG network motif were replaced with an inset gradient panel, a larger headline, a distinct arrow treatment on the CTA, and a short HTML discussion guide. This section uses CSS and the existing local Lucide symbols, with no new JavaScript or image requests. QA: production build passed; Chrome checks at 1440, 900, 390, and 320px confirmed no horizontal overflow or clipped content, the verified contact destination, a 58px mobile CTA, and text/button-before-agenda reading order. Keyboard focus is visible. The CTA and three topics remain available with JavaScript disabled; reduced-motion emulation removes the arrow transition.


## Footer revamp

The authentic logo and focus statement now form a grouped brand introduction, with service coverage on its own line. A pale-blue Contact panel makes the verified email, phone number, and consultation link easier to find. The seven service anchors are arranged across two columns on wider screens, reducing unused space below shorter groups. About, Insights, the accessibly named LinkedIn link, Privacy Policy, and Terms of Service retain their original destinations. No newsletter, invented office, additional offer, or unverified contact channel was added.

QA: build passed. Chrome checks at 1440, 1024, 768, 390, and 320px found no horizontal overflow or clipped links. The logo retains its 500:59 intrinsic ratio. All ten footer fragment links (seven services, two industries, and Back to top) resolve. Keyboard focus is visible, Enter activates Back to top, and a service link lands below the sticky header. Phone links meet a 44px minimum target height. All footer content remains in the static HTML without JavaScript.


## Extracted ZIP graphics compatibility

The original `reachfirst-site.zip` was extracted and its archive integrity and referenced files checked. It matched the source, but all 91 Lucide instances referenced an external SVG sprite. Direct `file://` previews can block those references and the external hero mask. The page now embeds the 17 Lucide symbol definitions once in an inert zero-size SVG, uses local `#rf-icon-*` references, and embeds the existing hero mask as an SVG data URL in the CSS. Original source assets and licenses remain available. No JavaScript workaround or browser security setting is required.

`reachfirst-site-fixed.zip` contains the updated `index.html` and complete `assets/` directory. Extract the entire archive before opening the HTML, or upload its contents to the web root on Hostinger. Rebuild CSS before creating future ZIPs. The test extraction directories and generated archives are ignored by Git.

Verification: original and corrected ZIP integrity passed; no duplicate HTML IDs; all 91 local icon references resolve; the compiled hero mask uses a data URL. The corrected ZIP was extracted and served independently on port 4175. Chrome showed the hero illustration, mask, and icons; no visible SVG instance had empty geometry. Mobile menu open/Escape-close behavior and overflow passed at 390px. Direct `file://` browser inspection is blocked by the automation browser's URL policy, so the visual verification used HTTP.
