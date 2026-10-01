# ReachFirst refinement — 1 October 2026

The changes are local and have not been deployed to the live WordPress site.

## What changed

- Preserved the blue-and-white visual system, artwork, page destinations, and earlier removal of the hamburger/full-screen menu.
- Reduced the desktop header to 76px. Its sticky state changes shadow and logo scale without changing its height. Smaller screens retain visible navigation, plus keyboard/touch controls for service and industry links. Closed dropdowns are inert; Escape closes them and restores focus.
- Moved the existing AKRoN Roofing project immediately below the hero, explicitly identifying it as digital-marketing work. No performance figures were added to the homepage.
- Replaced four large opportunity illustrations with short linked starting points. Preserved the eight services and their descriptions and destinations. Shortened the industry descriptions while retaining both audience destinations and desktop/tablet artwork.
- Consolidated delivery principles into the existing process section. Integration copy now explains connection dependencies once; the diagram retains category labels.
- Removed public case-study planning language and provisional homepage delivery wording.
- Standardized consultation CTAs as “Request a consultation by email,” including source generators and static fallbacks.
- Added required-field validation, a locally prepared email draft, a read-only message visitors can copy, and an explicit link to open that draft in their email app. Editing the form invalidates the previous preview. No sent/booking confirmation is displayed.
- Increased supporting, diagram, and footer text sizes. Replaced the lighter CTA gradient with the existing dark blue to improve white-text contrast.

## Upload only changed files

The source files to upload are under `wordpress/reachfirst/`. The exact relative paths are in [upload-files.txt](artifacts/refinement/upload-files.txt).

There are 57 changed deployment files: `header.php`, `footer.php`, `front-page.php`, `pages.json`, `assets/js/main.js`, `assets/css/styles.css`, and 51 page templates. Most page-template changes only replace consultation CTA wording; the consultation and case-study templates also have content changes. No image, font, dependency, or theme-function upload is required.

Copy these files to the matching paths inside the active theme, preserving the folder structure. Clear the WordPress/CDN/browser cache after uploading. Existing theme ZIPs from earlier work are not the deployment artifact for this refinement.

## Consultation/backend status

The project contains a `mailto:` form and no configured submission endpoint, mail handler, or scheduler. The email-draft flow needs no new backend. It cannot verify email-app availability or delivery: visitors must send the draft themselves. The copyable message supports visitors using webmail or an unconfigured mail app.

If direct submission is required later, it needs a configured server endpoint, input validation, spam controls, mail delivery, and real delivery/error handling. No new provider was installed, no test inquiry was sent, and no appointment was booked. WordPress plugins or private server configuration outside this project were not audited.

## Evidence still needed

No approved AI automation client outcomes, testimonials, or quantified automation results were found in the supplied project. The homepage uses only the existing AKRoN digital-marketing story and an explicitly illustrative demo. Its source remains the [published AKRoN case study](https://www.reachfirst.com/case-studies/akron-roofing/). Existing historical figures on the case-study page retain their comparison-period limitation. Future automation proof requires approved scope, client permission, measurement context, and attributable results before publication.

No verified implementation list supports specific integration-provider names. Category labels remain in place; compatibility must be assessed for each project.

## Validation

- `npm run build`, `npm run check:site`, and `npm run check:wordpress` passed. JavaScript syntax checks passed for all project scripts. No lint command is configured.
- The site check covers all 53 HTML pages: one H1, unique IDs, local links and fragments, consistent CTA labels, and JavaScript parsing.
- Controlled demo tests cover all five stages, blocking at stage 3 until review, preventing Run from bypassing review, preserving focus when the review control disappears, completion wording, and reset cancelling pending progression. Browser checks also confirmed review pause, continuation, completion, and reset.
- Browser layout checks at 320, 390, 768, 1024, 1280, and 1440px found no horizontal overflow or clipped integration/footer labels. Services, case studies, consultation, and home/field-services pages were also checked at 390px. Checked pages reported no broken loaded images or console errors.
- Keyboard checks covered service/industry dropdown controls, submenu traversal, Escape/focus restoration, FAQ toggles, demo controls, and draft focus. Header height remained 76px before and after desktop scrolling.
- Invalid required fields blocked draft preparation. Valid fictional local values produced an encoded draft and a visible copyable message without sending data. The final draft link was not opened.
- Measured revised color pairs: dark blue/white 5.90:1; muted text/white 6.40:1; muted text/pale blue 5.84:1; diagram labels/white 11.99:1. These exceed the WCAG AA 4.5:1 normal-text threshold. This is a focused contrast check, not a complete accessibility certification.
- Existing reduced-motion media rules disable animations/transitions globally. Hero motion respects the media query; the added header and draft scrolling also respect it. The preference was verified in code/CSS rather than changed in the user's OS.

Previews: [desktop](artifacts/refinement/desktop.png), [mobile](artifacts/refinement/mobile.png).
