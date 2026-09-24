# Hero illustration: continuous motion proposal

Implemented after user approval — 17 September 2026. This direction supersedes the earlier one-time-only animation preference for this illustration. The research and proposed values below record the approved design rationale; implementation and verification are recorded in README.md.

## Direction

Preserve the current dimensional illustration, blue/white palette, four business objects, and readable HTML labels. Turn the existing pipes into continuous animated paths, give the background rings subtle motion, and place a small generic AI symbol on the central hub. Keep the illustration hidden below 640px.

The intended impression is a calm, connected business workflow. Moving elements are decorative and conceptual; they do not report live connectivity or model activity.

## Research and interpretation

- [n8n AI workflows](https://n8n.io/ai/): inspected in connected Chrome. Its workflow section uses a central AI-agent node and subordinate model/tool connections. Borrow the visual hierarchy, using one central AI cue in Reach First’s simpler illustration. n8n’s named integrations are evidence about its own platform, not Reach First’s capabilities.
- [MDN: SVG stroke-dashoffset](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/stroke-dashoffset): supports moving short highlights along SVG paths. This is a suitable lightweight technique for the pipe effect; it avoids a video or animation library.
- [W3C: Pause, Stop, Hide](https://www.w3.org/WAI/WCAG20/Understanding/pause-stop-hide.html): automatically moving information that continues beyond five seconds alongside other content needs a pause/stop/hide mechanism unless essential. Provide a small explicit animation control for this continuously moving composition, in addition to respecting reduced motion.

The durations below are proposed design values, not timings measured from a reference website.

## Proposed layers

| Layer | Treatment | Timing |
| --- | --- | --- |
| Four pipes | One short pale-blue/white highlight travels along each pipe. Use a thin luminous core with a very restrained blue edge. Preserve the solid blue pipes underneath. | Approximately 3–4 seconds per cycle, phase-shifted so they do not all restart together. |
| Flow direction | Enquiry travels toward the hub; the other three connections travel outward toward scheduling, documents, and the customer record. This is a conceptual information flow, not a simulation of completed actions. | Continuous, evenly paced; no bouncing or abrupt flashing. |
| Outer ring | Replace a portion of the currently solid ring with two faint arc accents and one tiny orbiting dot. Keep the underlying circle static. | Around 36 seconds per revolution. |
| Inner ring | A second sparse dotted/arc layer turns slowly in the opposite direction. Keep contrast lower than the pipe highlights. | Around 56 seconds per revolution. |
| Central AI cue | Add a small white neural-node or microchip glyph aligned to the top face of the blue hub. One small HTML label, “AI assistance,” can sit immediately above it if it does not obscure the artwork. | Static. Let the surrounding flow provide motion. |
| Business objects and labels | Keep the calendar, enquiry bubble, folder, customer record, and existing labels fixed in place. | No continuous bobbing, scaling, or rotating text. |

Rotating an unbroken circle alone is visually indistinguishable from a stationary circle; sparse arcs and a dot make the motion visible without creating a busy orbit of badges.

## AI models: recommended treatment

Use a generic AI cue in the hub for this version. Do not add a ring of OpenAI, Claude, Gemini, or other provider logos without confirmed Reach First delivery support and appropriate asset-use evidence. Such a ring can read as a compatibility or partnership claim.

If provider support is later confirmed, a separate compact row of supported technologies would be clearer than floating logos around the illustration. Keep it outside the main animation and identify its purpose accurately. Model names and logos change; verify them when that work is scoped.

## Implementation approach

1. Trace all four actual visible pipe surfaces against the original illustration in a shared normalized coordinate system. The current three approximate highlights are not sufficient for the new treatment.
2. Use an SVG overlay with one path and one narrow clipping region per pipe. Match the artwork’s perspective and stop highlights before they cross the hub or foreground objects. The crop and SVG viewBox must stay synchronized at every size.
3. Keep the original bitmap unchanged. Add the AI glyph and animated paths as separate code-native layers. Use CSS transforms for orbit layers and animated dash offsets for pipe highlights. Avoid large blur filters and continuously repainted full-size shadows.
4. Provide a small HTML “Pause animation” control beside/below the artwork, with a clear accessible name, visible focus, and at least a 44px target. Change it to “Resume animation” when paused. Do not position it over a business label or hero CTA.
5. Activate motion only after JavaScript has initialized the control. With JavaScript disabled, show the complete static composition.
6. Pause when the illustration is outside the viewport or the tab is hidden. Resume only if the user has not manually paused and reduced motion is not active. A single state function should combine these conditions so scrolling cannot override a manual pause.
7. Under `prefers-reduced-motion`, show the static artwork, AI cue, and rings immediately. Hide the unnecessary motion control. Below 640px, keep both illustration and control absent and preserve the existing lightweight phone image fallback.

## Review and acceptance

- Inspect at 640, 768, 1024, 1280, and 1440px: highlights remain centered inside all four pipes and are correctly occluded by objects.
- Check at 320 and 390px: no illustration/control appears and phone hero layout remains intact.
- Observe several complete cycles: no jumps, visible reset streaks, flashing, overlapping labels, or movement competing with the H1.
- Test Pause/Resume by keyboard and pointer, reduced motion, scrolling offscreen/back, and tab visibility. Manual pause survives automatic visibility changes.
- Keep all decorative layers hidden from assistive technology; do not live-announce animation frames. Labels and controls remain HTML.
- Check no-JavaScript rendering, single H1, CTA destinations, image dimensions, and absence of layout shifts or console errors.
- Compare browser rendering cost against the current illustration. No new animation library, video, external model assets, API calls, or telemetry is required.

Implement in two passes: first accurate pipe flow and motion controls; then add the orbit accents and central AI cue after checking the composition at tablet/desktop sizes. This keeps motion alignment and visual density independently reviewable.
