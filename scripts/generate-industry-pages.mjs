import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const industries = [
  {
    slug: "hvac",
    name: "HVAC",
    category: "Field service",
    headline: "Keep every HVAC request moving from first call to completed service.",
    intro: "Connect local demand, service intake, technician scheduling, customer updates, and maintenance follow-up around one visible workflow.",
    client: "Northline Comfort",
    scenario: "A responsive service website captures the issue, an AI-assisted intake prepares the job context, and staff approve the right scheduling path.",
    capabilities: [["Lead and call intake", "Capture service type, location, urgency, equipment context, and preferred timing."], ["Dispatch preparation", "Prepare consistent job summaries while keeping availability and assignment decisions with staff."], ["Maintenance follow-up", "Coordinate reminders and approved communication after repairs or seasonal service."]],
    flow: [["Website request", "Customer submits repair details and service location."], ["AI-assisted intake", "The request is summarized and checked against defined routing rules."], ["Staff scheduling", "The office confirms urgency, availability, and technician assignment."], ["Customer update", "Approved confirmation and follow-up are prepared from job status."]],
    services: ["digital", "voice", "workflow"]
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    category: "Essential trades",
    headline: "Turn urgent plumbing enquiries into clear, accountable next steps.",
    intro: "Bring calls, web enquiries, service-area checks, job details, scheduling, and customer communication into a more dependable operating flow.",
    client: "ClearFlow Plumbing",
    scenario: "A service website separates routine and urgent requests, prepares consistent intake details, and routes exceptions directly to the office team.",
    capabilities: [["Urgency-aware intake", "Collect the issue, property type, location, and safety context without replacing staff judgment."], ["Estimate coordination", "Keep inspection requests, estimate ownership, and customer follow-up visible."], ["Service updates", "Prepare approved arrival, delay, completion, and next-step communication."]],
    flow: [["Request captured", "A call or form records the customer and issue context."], ["Rules checked", "Service area and defined urgency indicators guide the handoff."], ["Office review", "Staff confirm priority, pricing path, and scheduling."], ["Job follow-through", "Status supports customer updates and approved follow-up."]],
    services: ["voice", "crm", "workflow"]
  },
  {
    slug: "electrical",
    name: "Electrical",
    category: "Essential trades",
    headline: "Connect electrical service requests, project details, and field handoffs.",
    intro: "Create a clearer path from first enquiry through qualification, estimating, scheduling, documentation, and customer follow-up.",
    client: "BrightPath Electric",
    scenario: "A conversion-focused website gathers project context while an assisted workflow prepares the record and routes safety-sensitive requests to a person.",
    capabilities: [["Structured enquiries", "Capture property, service type, access, timing, and project information consistently."], ["Project handoffs", "Keep estimate requests, documents, approvals, and ownership connected."], ["Human escalation", "Route safety concerns, unusual work, and commitment decisions directly to qualified staff."]],
    flow: [["Digital enquiry", "The customer selects a service and shares key project details."], ["Context prepared", "Information is organized for office review without making technical decisions."], ["Qualified review", "Staff confirm scope, safety needs, and the appropriate next step."], ["Field handoff", "Approved job information moves to scheduling and the assigned team."]],
    services: ["digital", "custom", "workflow"]
  },
  {
    slug: "roofing",
    name: "Roofing",
    category: "Exterior services",
    headline: "Build a connected path from roofing lead to inspection and follow-up.",
    intro: "Coordinate local marketing, storm-driven enquiries, inspection requests, estimates, project updates, and long-cycle follow-up.",
    client: "SummitShield Roofing",
    scenario: "A local landing experience captures property and service details, then an assisted workflow organizes inspection requests and estimate follow-up.",
    capabilities: [["Local demand capture", "Create clear service and location paths for repair, inspection, and replacement enquiries."], ["Inspection pipeline", "Track request source, property context, ownership, appointment status, and next action."], ["Estimate follow-up", "Prepare consistent reminders while preserving staff control over pricing and commitments."]],
    flow: [["Lead arrives", "The website captures location, service need, and property context."], ["Request organized", "The record is prepared and assigned for review."], ["Inspection confirmed", "Staff choose the appropriate inspector and appointment."], ["Follow-up prepared", "Estimate status drives the approved next communication."]],
    services: ["digital", "crm", "workflow"]
  },
  {
    slug: "towing",
    name: "Towing",
    category: "Roadside services",
    headline: "Move towing requests from intake to dispatch with less uncertainty.",
    intro: "Connect phone and digital requests, location details, service type, dispatcher review, driver handoff, and customer status communication.",
    client: "RapidRoute Towing",
    scenario: "An AI-assisted intake gathers the vehicle, location, destination, and service request before a dispatcher confirms price, priority, and assignment.",
    capabilities: [["Call and message intake", "Collect consistent roadside details while allowing immediate staff takeover."], ["Dispatch context", "Prepare location, vehicle, access, and destination details for dispatcher review."], ["Status communication", "Support approved confirmation and progress updates based on real dispatch status."]],
    flow: [["Request received", "Call or mobile form captures the roadside situation."], ["Details summarized", "Vehicle, location, and requested service are organized."], ["Dispatcher decides", "A person confirms feasibility, pricing, priority, and driver."], ["Status shared", "Approved updates reflect accepted and completed work."]],
    services: ["voice", "custom", "workflow"]
  },
  {
    slug: "construction",
    name: "Construction",
    category: "Project delivery",
    headline: "Keep construction enquiries, documents, and project handoffs connected.",
    intro: "Create clearer coordination across lead qualification, estimating, approvals, project records, field updates, and stakeholder communication.",
    client: "Cedarstone Construction",
    scenario: "A project-focused website captures the right enquiry context and routes qualified opportunities into a structured estimating and document workflow.",
    capabilities: [["Project qualification", "Capture project type, location, timing, budget context, and decision stage."], ["Document workflow", "Organize approved files, requests, reviews, and ownership across project stages."], ["Progress visibility", "Keep agreed status updates and next actions visible to office and field teams."]],
    flow: [["Project enquiry", "The website collects scope and fit information."], ["Opportunity reviewed", "Staff qualify the lead and select an estimating path."], ["Documents coordinated", "Approved requests and files move to the responsible team."], ["Status maintained", "Project milestones support internal and client updates."]],
    services: ["digital", "custom", "crm"]
  },
  {
    slug: "landscaping",
    name: "Landscaping",
    category: "Outdoor services",
    headline: "Coordinate seasonal demand, quotes, crews, and recurring landscaping work.",
    intro: "Connect local discovery, service requests, property details, estimating, route-aware scheduling, and recurring customer communication.",
    client: "GreenGrid Landscapes",
    scenario: "A seasonal service website captures property and service context, then an assisted workflow separates quote requests from recurring maintenance enquiries.",
    capabilities: [["Seasonal campaigns", "Align local pages and campaigns with the services and areas currently available."], ["Quote preparation", "Collect property, access, timing, and requested-work details before staff review."], ["Recurring coordination", "Support schedule reminders, service updates, and renewal follow-up from approved status data."]],
    flow: [["Service selected", "The customer chooses project or recurring maintenance."], ["Property context", "The form captures location, access, timing, and request details."], ["Team review", "Staff confirm fit, estimate needs, and scheduling options."], ["Ongoing service", "Approved reminders and updates follow the service plan."]],
    services: ["digital", "crm", "workflow"]
  },
  {
    slug: "cleaning",
    name: "Cleaning",
    category: "Property care",
    headline: "Connect cleaning enquiries, recurring schedules, teams, and customer updates.",
    intro: "Create a reliable path for residential or commercial requests, quoting, assignment, recurring service, exceptions, and follow-up.",
    client: "PureSpace Cleaning",
    scenario: "A simple booking experience collects property and service details, then prepares a review-ready request before staff confirm the quote and team assignment.",
    capabilities: [["Booking intake", "Capture property type, frequency, size, access, timing, and special requirements."], ["Team coordination", "Prepare consistent briefs while leaving assignment and exception decisions with staff."], ["Recurring follow-up", "Coordinate reminders, issue reporting, service changes, and renewal communication."]],
    flow: [["Request submitted", "The customer shares the property and preferred service."], ["Scope prepared", "Details are organized for quote and policy review."], ["Staff confirms", "A person approves pricing, timing, and team assignment."], ["Service continues", "Status supports reminders, feedback, and recurring changes."]],
    services: ["digital", "workflow", "crm"]
  },
  {
    slug: "solar",
    name: "Solar",
    category: "Energy services",
    headline: "Guide solar prospects from education to assessment and installation handoff.",
    intro: "Connect educational content, lead qualification, property information, consultations, site assessments, proposals, and project communication.",
    client: "SunPeak Energy",
    scenario: "An educational website helps prospects understand the process and captures assessment details before staff review suitability and next steps.",
    capabilities: [["Education and demand", "Build useful paths around system questions, service areas, and consultation readiness."], ["Lead qualification", "Gather property, ownership, energy, timing, and project-interest context."], ["Project communication", "Coordinate approved assessment, proposal, installation, and support updates."]],
    flow: [["Prospect explores", "Educational content clarifies the process and available services."], ["Assessment request", "The website captures property and project context."], ["Specialist review", "Staff confirm suitability, requirements, and consultation timing."], ["Project handoff", "Approved information supports assessment and installation stages."]],
    services: ["digital", "crm", "custom"]
  },
  {
    slug: "moving",
    name: "Moving",
    category: "Relocation",
    headline: "Create a clearer journey from moving quote to completed relocation.",
    intro: "Connect local discovery, inventory and access details, estimate preparation, booking, crew coordination, customer reminders, and follow-up.",
    client: "Northstar Moving",
    scenario: "A quote-focused website gathers move details and prepares a structured request before staff confirm scope, pricing, timing, and crew requirements.",
    capabilities: [["Quote intake", "Capture origin, destination, timing, access, inventory context, and requested services."], ["Booking workflow", "Keep estimate status, deposits, documents, confirmations, and ownership visible."], ["Customer preparation", "Coordinate approved reminders and preparation information before moving day."]],
    flow: [["Quote request", "The customer shares route, dates, access, and move context."], ["Estimate prepared", "Information is organized for staff pricing and review."], ["Booking confirmed", "A person approves scope, timing, and crew requirements."], ["Move coordinated", "Approved reminders and status updates support delivery."]],
    services: ["digital", "crm", "workflow"]
  },
  {
    slug: "renovation",
    name: "Renovation",
    category: "Property improvement",
    headline: "Connect renovation leads, estimates, selections, and project communication.",
    intro: "Build a clearer client journey from inspiration and enquiry through qualification, consultation, proposal, approvals, and project updates.",
    client: "RenewCraft Renovations",
    scenario: "A portfolio-led website captures project fit and priorities, then routes qualified enquiries into a structured consultation and proposal workflow.",
    capabilities: [["Portfolio-led discovery", "Help prospects understand project fit, process, service area, and next steps."], ["Consultation intake", "Collect project type, property, goals, timing, and budget context before review."], ["Decision coordination", "Track proposals, selections, approvals, documents, and client communication."]],
    flow: [["Project discovered", "The prospect explores relevant work and process information."], ["Fit requested", "The website gathers project and decision context."], ["Consultation reviewed", "Staff confirm fit and arrange the appropriate conversation."], ["Proposal progresses", "Approved stages coordinate documents, decisions, and updates."]],
    services: ["digital", "crm", "custom"]
  },
  {
    slug: "property-services",
    name: "Property Services",
    category: "Ongoing care",
    headline: "Coordinate property requests, assignments, inspections, and recurring care.",
    intro: "Connect tenants, owners, managers, vendors, field teams, work orders, status updates, documentation, and recurring maintenance.",
    client: "HavenWorks Property Services",
    scenario: "A request portal organizes property and issue details, then an assisted workflow routes work for human prioritization, assignment, and follow-through.",
    capabilities: [["Request portal", "Capture property, requester, issue, access, urgency context, and supporting information."], ["Work coordination", "Prepare work orders and keep assignment, status, exceptions, and documentation connected."], ["Recurring maintenance", "Support inspection schedules, planned work, reminders, and approved reporting."]],
    flow: [["Request logged", "A tenant, owner, or manager submits property context."], ["Work categorized", "The issue is summarized against defined routing rules."], ["Coordinator reviews", "A person confirms priority, vendor, access, and assignment."], ["Record completed", "Status and documentation support updates and reporting."]],
    services: ["custom", "workflow", "managed"]
  }
];

const serviceMap = {
  digital: ["Demand", "Digital Marketing Services", "digital-marketing-services.html", "Build clearer local discovery, service pages, and enquiry paths."],
  voice: ["Intake", "AI Voice Agents", "ai-voice-agents.html", "Structure routine calls with defined staff escalation."],
  workflow: ["Operations", "Business Workflow Automation", "business-workflow-automation.html", "Connect requests, tasks, statuses, approvals, and handoffs."],
  crm: ["Pipeline", "Sales & CRM Automation", "sales-crm-automation.html", "Keep ownership, follow-up, records, and next actions visible."],
  custom: ["Systems", "Custom Applications & Integrations", "custom-ai-applications-integrations.html", "Create focused portals, tools, and approved system connections."],
  managed: ["Continuity", "Managed Automation Support", "managed-ai-automation-support.html", "Maintain and improve agreed workflows after launch."]
};

const iconDefs = `<svg class="icon-definitions" xmlns="http://www.w3.org/2000/svg" width="0" height="0" aria-hidden="true"><defs><symbol id="t-arrow-up" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10M7 17 17 7"/></symbol><symbol id="t-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></symbol><symbol id="t-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></symbol><symbol id="t-menu" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 5h16M4 12h16M4 19h16"/></symbol><symbol id="t-workflow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/><path d="M10 6.5h4a3 3 0 0 1 3 3V14M14 17.5h-4a3 3 0 0 1-3-3V10"/></symbol><symbol id="t-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 4 4L19 6"/></symbol><symbol id="t-phone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c1 .3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/></symbol></defs></svg>`;

const header = `<a class="skip-link" href="#main-content">Skip to content</a><header class="site-header" data-site-header><div class="site-container header-row"><a class="header-brand" href="./" aria-label="Reach First home"><img class="brand-logo" src="assets/images/reach-first-logo-original.jpg" width="500" height="59" alt="Reach First"></a><nav aria-label="Primary" class="desktop-nav about-nav"><a class="nav-link" href="services.html">Services</a><a class="nav-link is-current" href="industries.html" aria-current="page">Industries</a><a class="nav-link" href="how-we-work.html">How We Work</a><a class="nav-link" href="case-studies.html">Case Studies</a><a class="nav-link" href="insights.html">Blogs</a><a class="nav-link" href="about-us.html">About</a><a class="button button-primary" href="book-consultation.html">Book AI Consultation<svg class="icon" aria-hidden="true"><use href="#t-arrow-up"/></svg></a></nav><details class="mobile-nav" data-mobile-nav><summary class="button button-secondary" aria-label="Open navigation"><svg class="icon"><use href="#t-menu"/></svg></summary><nav aria-label="Mobile primary" class="mobile-nav-panel"><a class="nav-link" href="services.html">Services</a><a class="nav-link is-current" href="industries.html">Industries</a><a class="nav-link" href="how-we-work.html">How We Work</a><a class="nav-link" href="about-us.html">About</a><div class="mobile-nav-bottom"><a class="button button-primary" href="book-consultation.html">Book AI Consultation</a><span>Canada &amp; the United States</span></div></nav></details></div></header>`;

const footer = `<footer class="site-footer"><div class="site-container footer-shell"><div class="footer-top"><div class="footer-introduction"><a class="footer-brand" href="./"><img class="brand-logo" src="assets/images/reach-first-logo-original.jpg" width="500" height="59" alt="Reach First"></a><p class="footer-description">Practical automation, technology, and marketing for growing service businesses.</p><p class="footer-coverage"><span></span>Serving Canada and the United States.</p></div><nav class="footer-contact" aria-label="Contact"><h2 class="footer-heading">Contact</h2><a class="footer-link" href="mailto:info@reachfirst.com">info@reachfirst.com</a><br><a class="footer-link" href="tel:+18447773224">1-844-777-3224</a><div class="footer-contact-action"><a class="footer-link footer-consultation" href="book-consultation.html">Book AI Consultation<svg><use href="#t-arrow-up"/></svg></a></div></nav></div><div class="footer-bottom"><p>&copy; 2026 Reach First. All rights reserved.</p><nav class="footer-legal" aria-label="Footer links"><a class="footer-link" href="industries.html">All industries</a><a class="footer-link" href="home-field-services.html">Home &amp; Field Services</a><a class="footer-link" href="about-us.html">About us</a></nav><a class="footer-back-top" href="#top">Back to top</a></div></div></footer>`;

function render(industry) {
  const capabilityCards = industry.capabilities.map(([title, copy], index) => `<article><span>0${index + 1}</span><h3>${title}</h3><p>${copy}</p></article>`).join("");
  const flowCards = industry.flow.map(([title, copy], index) => `<li${index === 2 ? ` class="is-active"` : ""}><span>0${index + 1}</span><div><h3>${title}</h3><p>${copy}</p></div><em>${index < 2 ? "Prepared" : index === 2 ? "Human review" : "Next"}</em></li>`).join("");
  const serviceCards = industry.services.map((key) => { const [label, title, href, copy] = serviceMap[key]; return `<a class="detail-related-card" href="${href}"><span>${label}</span><h3>${title}</h3><p>${copy}</p><svg aria-hidden="true"><use href="#t-arrow"/></svg></a>`; }).join("");
  return `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content="Explore practical website, marketing, and AI automation opportunities for ${industry.name} businesses."><meta name="robots" content="noindex, nofollow"><title>${industry.name} Industry Solutions | Reach First</title><link rel="icon" href="assets/icons/favicon.png" type="image/png"><link rel="preload" href="assets/fonts/manrope-latin-variable.woff2" as="font" type="font/woff2" crossorigin><link rel="stylesheet" href="assets/css/styles.css"><script src="assets/js/main.js" defer></script></head><body id="top" class="trade-industry-page">${iconDefs}${header}<main id="main-content" tabindex="-1"><section class="trade-hero section-space" aria-labelledby="trade-heading"><div class="site-container"><nav class="detail-breadcrumb" aria-label="Breadcrumb"><a href="industries.html">Industries</a><svg><use href="#t-chevron"/></svg><a href="home-field-services.html">Home &amp; Field Services</a><svg><use href="#t-chevron"/></svg><span>${industry.name}</span></nav><div class="trade-hero-layout"><div class="trade-hero-copy"><p class="eyebrow">${industry.category}</p><h1 id="trade-heading">${industry.headline}</h1><p>${industry.intro}</p><div class="detail-actions"><a class="button button-primary" href="book-consultation.html">Discuss your workflow<svg class="icon"><use href="#t-arrow-up"/></svg></a><a class="services-page-text-link" href="#industry-example">View the example<svg class="icon"><use href="#t-arrow"/></svg></a></div></div><div class="trade-hero-board" aria-label="Illustrative ${industry.name} workflow"><div class="trade-board-top"><span>Illustrative workflow</span><strong>${industry.client}</strong></div><ol>${flowCards}</ol><p><svg><use href="#t-check"/></svg> Staff approve commitments, exceptions, and customer-facing decisions.</p></div></div></div></section><section class="trade-opportunities section-space" aria-labelledby="opportunities-heading"><div class="site-container"><div class="detail-section-intro"><p class="eyebrow">Where systems can help</p><h2 id="opportunities-heading">Practical opportunities for ${industry.name} teams.</h2><p>Start with one customer or operational journey, then connect only the tools and steps required to improve it.</p></div><div class="trade-opportunity-grid">${capabilityCards}</div></div></section><section id="industry-example" class="trade-showcase section-space" aria-labelledby="example-heading"><div class="site-container trade-showcase-layout"><div class="trade-showcase-copy"><p class="eyebrow">Fictional client demonstration</p><h2 id="example-heading">${industry.client}: website and AI-assisted workflow concept.</h2><p>${industry.scenario}</p><div class="trade-demo-disclaimer"><strong>Illustrative concept only.</strong><span>${industry.client} is a fictional business. This interface performs no live actions and makes no performance claim.</span></div></div><div class="trade-demo-window" aria-label="Static demonstration of the ${industry.client} workflow"><div class="trade-demo-browser"><span></span><span></span><span></span><strong>${industry.client}</strong><em>Service request workspace</em></div><div class="trade-demo-summary"><div><span>New request</span><strong>${industry.name} service</strong><small>Website + assisted intake</small></div><div class="trade-demo-status"><span>Ready for staff review</span><svg><use href="#t-check"/></svg></div></div><ol>${industry.flow.map(([title, copy], index) => `<li${index === 2 ? ` class="is-current"` : ""}><span>0${index + 1}</span><div><strong>${title}</strong><small>${copy}</small></div><em>${index < 2 ? "Complete" : index === 2 ? "Review" : "Queued"}</em></li>`).join("")}</ol></div></div></section><section class="trade-guardrails section-space"><div class="site-container trade-guardrails-layout"><div><p class="eyebrow">Responsible automation</p><h2>People remain responsible for the decisions that matter.</h2></div><div><p>Safety, urgency, scope, pricing, availability, assignment, and customer commitments can require human judgment. A real implementation defines those review points before anything is automated.</p><p>Recommendations also depend on your current software, permissions, data quality, policies, team responsibilities, and operating constraints.</p></div></div></section><section class="detail-related trade-related section-space" aria-labelledby="related-heading"><div class="site-container"><div class="detail-section-intro"><p class="eyebrow">Relevant services</p><h2 id="related-heading">Build the right combination for your ${industry.name} operation.</h2><p>Select a focused starting point around the customer journey or internal workflow that matters most.</p></div><div class="detail-related-grid trade-related-grid">${serviceCards}</div></div></section><section class="about-cta section-space"><div class="site-container"><div class="about-cta-panel"><div><p class="eyebrow">Bring us one real request</p><h2>Where does your ${industry.name} workflow slow down?</h2><p>We’ll examine the people, systems, steps, exceptions, and customer communication around it.</p></div><a class="button about-cta-button" href="book-consultation.html">Book AI Consultation<svg class="icon"><use href="#t-arrow-up"/></svg></a></div></div></section></main>${footer}</body></html>`;
}

for (const industry of industries) {
  await writeFile(resolve(`${industry.slug}-industry.html`), render(industry), "utf8");
}

console.log(`Generated ${industries.length} industry detail pages.`);
