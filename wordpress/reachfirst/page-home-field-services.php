<?php
/**
 * Template Name: Reach First — home field services
 */
defined( 'ABSPATH' ) || exit;
get_header();
?>
<main id="main-content" tabindex="-1">
    <section class="detail-hero field-page-hero section-space" aria-labelledby="field-page-heading">
      <div class="site-container">
        <nav class="detail-breadcrumb" aria-label="Breadcrumb"><a href="<?php echo esc_url( reachfirst_page_url( 'industries' ) . '' ); ?>">Industries</a><svg aria-hidden="true"><use href="#f-chevron"/></svg><span>Home &amp; Field Services</span></nav>
        <div class="detail-hero-layout">
          <div class="detail-hero-copy">
            <p class="eyebrow">Home &amp; field services</p>
            <h1 id="field-page-heading">Turn every service request into a <span>connected journey.</span></h1>
            <p>Bring marketing, enquiry handling, scheduling, field handoffs, customer updates, and follow-up into a clearer operating flow&mdash;designed around the way your team actually works.</p>
            <div class="detail-actions"><a class="button button-primary" href="<?php echo esc_url( reachfirst_page_url( 'book-consultation' ) . '' ); ?>">Discuss your workflow<svg class="icon"><use href="#f-arrow-up"/></svg></a><a class="services-page-text-link" href="#service-journey">Explore the journey<svg class="icon"><use href="#f-arrow"/></svg></a></div>
          </div>
          <div class="field-hero-board" aria-label="Illustrative service request moving from enquiry to field completion">
            <div class="field-board-top"><span>Illustrative service flow</span><strong>Office &harr; field</strong></div>
            <ol>
              <li class="is-complete"><span><svg><use href="#f-message"/></svg></span><div><strong>Request captured</strong><small>Service, location, urgency</small></div><em>Ready</em></li>
              <li class="is-active"><span><svg><use href="#f-calendar"/></svg></span><div><strong>Visit coordinated</strong><small>Availability and handoff</small></div><em>Review</em></li>
              <li><span><svg><use href="#f-tool"/></svg></span><div><strong>Crew briefed</strong><small>Job details and next step</small></div><em>Next</em></li>
            </ol>
            <p><svg><use href="#f-check"/></svg> People stay accountable for decisions and exceptions.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="field-audience section-space" aria-labelledby="field-audience-heading">
      <div class="site-container field-audience-layout">
        <div><p class="eyebrow">Industries we support</p><h2 id="field-audience-heading">Different trades. Similar coordination pressure.</h2><p>Explore home and field service industries where customer demand, scheduling, location, job information, and follow-through need to stay connected.</p></div>
        <ul class="field-industry-list" aria-label="Home and field service industries">
          <li><a href="<?php echo esc_url( reachfirst_page_url( 'hvac-industry' ) . '' ); ?>"><span>01 / Field service</span><h3>HVAC</h3><p>Heating, cooling, maintenance, and service workflows.</p><svg aria-hidden="true"><use href="#f-arrow"/></svg></a></li>
          <li><a href="<?php echo esc_url( reachfirst_page_url( 'plumbing-industry' ) . '' ); ?>"><span>02 / Essential trades</span><h3>Plumbing</h3><p>Repairs, installations, emergency requests, and scheduled service.</p><svg aria-hidden="true"><use href="#f-arrow"/></svg></a></li>
          <li><a href="<?php echo esc_url( reachfirst_page_url( 'electrical-industry' ) . '' ); ?>"><span>03 / Essential trades</span><h3>Electrical</h3><p>Service calls, installations, inspections, and project coordination.</p><svg aria-hidden="true"><use href="#f-arrow"/></svg></a></li>
          <li><a href="<?php echo esc_url( reachfirst_page_url( 'roofing-industry' ) . '' ); ?>"><span>04 / Exterior services</span><h3>Roofing</h3><p>Inspections, estimates, repairs, and installation projects.</p><svg aria-hidden="true"><use href="#f-arrow"/></svg></a></li>
          <li><a href="<?php echo esc_url( reachfirst_page_url( 'towing-industry' ) . '' ); ?>"><span>05 / Roadside services</span><h3>Towing</h3><p>Dispatch, roadside requests, status updates, and follow-up.</p><svg aria-hidden="true"><use href="#f-arrow"/></svg></a></li>
          <li><a href="<?php echo esc_url( reachfirst_page_url( 'construction-industry' ) . '' ); ?>"><span>06 / Project delivery</span><h3>Construction</h3><p>Enquiries, estimating, project handoffs, and field coordination.</p><svg aria-hidden="true"><use href="#f-arrow"/></svg></a></li>
          <li><a href="<?php echo esc_url( reachfirst_page_url( 'landscaping-industry' ) . '' ); ?>"><span>07 / Outdoor services</span><h3>Landscaping</h3><p>Recurring maintenance, seasonal work, quotes, and scheduling.</p><svg aria-hidden="true"><use href="#f-arrow"/></svg></a></li>
          <li><a href="<?php echo esc_url( reachfirst_page_url( 'cleaning-industry' ) . '' ); ?>"><span>08 / Property care</span><h3>Cleaning</h3><p>One-time and recurring service, team scheduling, and customer updates.</p><svg aria-hidden="true"><use href="#f-arrow"/></svg></a></li>
          <li><a href="<?php echo esc_url( reachfirst_page_url( 'solar-industry' ) . '' ); ?>"><span>09 / Energy services</span><h3>Solar</h3><p>Lead qualification, site assessments, installation, and support.</p><svg aria-hidden="true"><use href="#f-arrow"/></svg></a></li>
          <li><a href="<?php echo esc_url( reachfirst_page_url( 'moving-industry' ) . '' ); ?>"><span>10 / Relocation</span><h3>Moving</h3><p>Quotes, bookings, crew coordination, and customer communication.</p><svg aria-hidden="true"><use href="#f-arrow"/></svg></a></li>
          <li><a href="<?php echo esc_url( reachfirst_page_url( 'renovation-industry' ) . '' ); ?>"><span>11 / Property improvement</span><h3>Renovation</h3><p>Enquiries, estimates, project updates, and trade coordination.</p><svg aria-hidden="true"><use href="#f-arrow"/></svg></a></li>
          <li><a href="<?php echo esc_url( reachfirst_page_url( 'property-services-industry' ) . '' ); ?>"><span>12 / Ongoing care</span><h3>Property services</h3><p>Maintenance requests, assignments, inspections, and ongoing care.</p><svg aria-hidden="true"><use href="#f-arrow"/></svg></a></li>
        </ul>
      </div>
    </section>

    <section id="service-journey" class="field-journey section-space" aria-labelledby="field-journey-heading">
      <div class="site-container">
        <div class="detail-section-intro"><p class="eyebrow">The service journey</p><h2 id="field-journey-heading">See the whole path, not isolated tasks.</h2><p>A practical design considers how a customer request becomes scheduled work, how information reaches the field, and what happens after the visit.</p></div>
        <ol class="field-journey-grid">
          <li><span>01</span><svg><use href="#f-megaphone"/></svg><h3>Attract</h3><p>Help the right local customers find the service and understand where and when it is available.</p></li>
          <li><span>02</span><svg><use href="#f-phone"/></svg><h3>Capture</h3><p>Collect enquiries from calls, forms, messages, or booking requests without losing the source or context.</p></li>
          <li><span>03</span><svg><use href="#f-calendar"/></svg><h3>Qualify &amp; book</h3><p>Gather essential details, identify exceptions, and route suitable requests to scheduling or staff review.</p></li>
          <li><span>04</span><svg><use href="#f-route"/></svg><h3>Schedule &amp; dispatch</h3><p>Coordinate time, service area, availability, skills, priority, and the information needed before travel.</p></li>
          <li><span>05</span><svg><use href="#f-tool"/></svg><h3>Serve &amp; update</h3><p>Keep the office, crew, and customer aligned as the visit progresses or circumstances change.</p></li>
          <li><span>06</span><svg><use href="#f-chart"/></svg><h3>Close &amp; follow up</h3><p>Organize completion details, estimates, invoices, reviews, recurring service, and the next appropriate action.</p></li>
        </ol>
      </div>
    </section>

    <section class="field-operations section-space" aria-labelledby="field-operations-heading">
      <div class="site-container">
        <div class="detail-section-intro"><p class="eyebrow">Three connected experiences</p><h2 id="field-operations-heading">Customers, coordinators, and crews need the same truth.</h2><p>The useful opportunities usually sit between roles. We map those handoffs before recommending automation, integrations, campaigns, or custom software.</p></div>
        <div class="field-operations-grid">
          <article><span>Customer</span><h3>Clear, timely communication</h3><ul><li>Relevant ways to enquire</li><li>Accurate booking expectations</li><li>Useful reminders and updates</li><li>Visible next steps after service</li></ul></article>
          <article><span>Office</span><h3>Consistent coordination</h3><ul><li>Structured request details</li><li>Ownership and priority</li><li>Calendar and CRM context</li><li>Exceptions routed to staff</li></ul></article>
          <article><span>Field</span><h3>Ready-to-use job context</h3><ul><li>Location and work details</li><li>Customer history where appropriate</li><li>Status and completion updates</li><li>Clean handoff back to the office</li></ul></article>
        </div>
      </div>
    </section>

    <section class="detail-scope field-capabilities section-space" aria-labelledby="field-capabilities-heading">
      <div class="site-container">
        <div class="detail-section-intro"><p class="eyebrow">What we can help connect</p><h2 id="field-capabilities-heading">A coordinated growth and operations system.</h2><p>The right scope may focus on one bottleneck or connect several parts of the journey. It depends on your current tools, team, data, risk, and priorities.</p></div>
        <div class="detail-scope-grid field-capability-grid">
          <article class="detail-scope-card"><span>01 / DEMAND</span><h3>Local visibility &amp; advertising</h3><p>Clarify service-area demand, landing experiences, campaign intent, and the path from discovery to a useful enquiry.</p></article>
          <article class="detail-scope-card"><span>02 / INTAKE</span><h3>Calls, forms &amp; messages</h3><p>Capture consistent details, preserve source context, and give urgent or unusual requests an appropriate route to a person.</p></article>
          <article class="detail-scope-card"><span>03 / COORDINATION</span><h3>Scheduling &amp; dispatch handoffs</h3><p>Connect booking requests, calendars, service areas, availability, priorities, and staff review without pretending every case is standard.</p></article>
          <article class="detail-scope-card"><span>04 / PIPELINE</span><h3>Estimates, CRM &amp; follow-up</h3><p>Keep quote status, ownership, reminders, and customer history visible so opportunities do not depend on memory alone.</p></article>
          <article class="detail-scope-card"><span>05 / EXPERIENCE</span><h3>Customer communication</h3><p>Design useful confirmations, reminders, status updates, and post-service messages with clear timing and escalation rules.</p></article>
          <article class="detail-scope-card"><span>06 / SYSTEMS</span><h3>Integrations &amp; reporting</h3><p>Connect approved tools and information, reduce duplicate entry where practical, and define reporting around agreed operational questions.</p></article>
        </div>
      </div>
    </section>

    <section class="detail-example field-blueprint section-space" aria-labelledby="field-blueprint-heading">
      <div class="site-container detail-example-layout">
        <div class="detail-section-intro"><p class="eyebrow">Example blueprint</p><h2 id="field-blueprint-heading">One request, one visible next step.</h2><p>This fictional example shows how a service enquiry might move. The actual design would reflect your policies, systems, service area, availability, and team responsibilities.</p><p class="field-blueprint-boundary">Illustrative workflow only. It does not send messages, create records, schedule staff, or promise a business result.</p></div>
        <div class="detail-example-flow"><div class="detail-example-note">Sample: a new repair enquiry arrives after business hours</div><ol><li><span>01</span><div><h3>Capture the request</h3><p>Record contact details, location, service type, source, and the customer&rsquo;s description.</p></div></li><li><span>02</span><div><h3>Apply basic routing</h3><p>Check service area and request type; route emergencies, uncertainty, or sensitive cases to staff.</p></div></li><li><span>03</span><div><h3>Prepare the handoff</h3><p>Create or update the approved record and summarize the relevant context for the office team.</p></div></li><li><span>04</span><div><h3>Coordinate the visit</h3><p>A person confirms the appropriate slot, assignment, and customer expectation.</p></div></li><li><span>05</span><div><h3>Continue after service</h3><p>Use completion status to support the approved invoice, estimate, review, or maintenance follow-up process.</p></div></li></ol></div>
      </div>
    </section>

    <section class="detail-guardrails section-space" aria-labelledby="field-guardrails-heading">
      <div class="site-container detail-guardrails-layout"><div><p class="eyebrow">Practical safeguards</p><h2 id="field-guardrails-heading">Automation supports the team. It does not own every decision.</h2></div><div class="detail-guardrails-copy"><p>Urgency, safety, pricing, availability, customer commitments, and unusual job conditions can require human judgment. We identify those boundaries and keep escalation paths visible.</p><p>Any implementation also depends on the capabilities, permissions, and data quality of the systems you choose to connect.</p></div></div>
    </section>

    <section class="detail-related section-space" aria-labelledby="field-related-heading">
      <div class="site-container"><div class="detail-section-intro"><p class="eyebrow">Relevant services</p><h2 id="field-related-heading">Build the right combination for your operation.</h2><p>Start with the customer or team workflow that matters most, then select the capabilities needed to support it.</p></div><div class="detail-related-grid field-related-grid">
        <a class="detail-related-card" href="<?php echo esc_url( reachfirst_page_url( 'digital-marketing-services' ) . '' ); ?>"><span>Demand</span><h3>Digital Marketing Services</h3><p>Build visibility and clearer paths from local intent to enquiry.</p><svg><use href="#f-arrow"/></svg></a>
        <a class="detail-related-card" href="<?php echo esc_url( reachfirst_page_url( 'ai-voice-agents' ) . '' ); ?>"><span>Intake</span><h3>AI Voice Agents</h3><p>Explore structured call handling with defined boundaries and escalation.</p><svg><use href="#f-arrow"/></svg></a>
        <a class="detail-related-card" href="<?php echo esc_url( reachfirst_page_url( 'sales-crm-automation' ) . '' ); ?>"><span>Pipeline</span><h3>Sales &amp; CRM Automation</h3><p>Organize ownership, estimates, activity, and follow-up.</p><svg><use href="#f-arrow"/></svg></a>
        <a class="detail-related-card" href="<?php echo esc_url( reachfirst_page_url( 'business-workflow-automation' ) . '' ); ?>"><span>Operations</span><h3>Business Workflow Automation</h3><p>Connect repeated tasks, status changes, approvals, and handoffs.</p><svg><use href="#f-arrow"/></svg></a>
        <a class="detail-related-card" href="<?php echo esc_url( reachfirst_page_url( 'custom-ai-applications-integrations' ) . '' ); ?>"><span>Systems</span><h3>Custom Applications &amp; Integrations</h3><p>Address gaps that require a tailored interface or connection.</p><svg><use href="#f-arrow"/></svg></a>
        <a class="detail-related-card" href="<?php echo esc_url( reachfirst_page_url( 'managed-ai-automation-support' ) . '' ); ?>"><span>Continuity</span><h3>Managed Automation Support</h3><p>Monitor, maintain, and improve approved workflows over time.</p><svg><use href="#f-arrow"/></svg></a>
      </div></div>
    </section>

    <section class="detail-process section-space" aria-labelledby="field-process-heading"><div class="site-container"><div class="detail-process-intro"><p class="eyebrow">How we approach it</p><h2 id="field-process-heading">Begin with the operation you have today.</h2><p>A grounded plan starts with the real customer journey, roles, systems, constraints, and exceptions.</p></div><ol class="detail-process-grid"><li><span>01</span><h3>Discover</h3><p>Learn your services, areas, channels, customers, team, tools, and operating priorities.</p></li><li><span>02</span><h3>Map</h3><p>Trace one meaningful request from discovery through service and follow-up.</p></li><li><span>03</span><h3>Prioritize</h3><p>Select a valuable, feasible starting point and define human review and safeguards.</p></li><li><span>04</span><h3>Implement &amp; improve</h3><p>Build, test, launch carefully, and review agreed indicators before expanding.</p></li></ol></div></section>

    <section class="detail-faq section-space" aria-labelledby="field-faq-heading"><div class="site-container detail-faq-layout"><div><p class="eyebrow">Common questions</p><h2 id="field-faq-heading">Designed around your service model.</h2><p>The right solution depends on the work, people, tools, and customer expectations already in place.</p></div><div class="detail-faq-list">
      <details open><summary>Which home and field service businesses do you support?<svg><use href="#f-chevron"/></svg></summary><p>Examples include HVAC, plumbing, electrical, roofing, towing, construction, landscaping, cleaning, solar, moving, renovation, and property services. The operating workflow matters more than fitting a strict label.</p></details>
      <details><summary>Do we need to replace our current field-service or CRM software?<svg><use href="#f-chevron"/></svg></summary><p>Not necessarily. We first review what your current systems can support, where information is duplicated or missing, and whether configuration, integration, a focused custom layer, or replacement is appropriate.</p></details>
      <details><summary>Can you help with both customer acquisition and operations?<svg><use href="#f-chevron"/></svg></summary><p>Yes. A scope can focus on marketing, intake, CRM, workflow automation, custom applications, or the connections between them. It should remain narrow enough to implement and evaluate responsibly.</p></details>
      <details><summary>Can every call or booking be automated?<svg><use href="#f-chevron"/></svg></summary><p>No. Emergencies, safety concerns, unusual service requests, pricing decisions, scheduling conflicts, and sensitive situations may need immediate human review. Those boundaries should be designed explicitly.</p></details>
      <details><summary>What should we bring to an initial discussion?<svg><use href="#f-chevron"/></svg></summary><p>Bring one recent customer request, the steps it followed, the tools involved, the people responsible, and where information or momentum was lost. A real example makes the discussion concrete.</p></details>
    </div></div></section>

    <section class="about-cta section-space"><div class="site-container"><div class="about-cta-panel"><div><p class="eyebrow">Bring us one real service journey</p><h2>Where does work slow down between enquiry and completion?</h2><p>We&rsquo;ll examine the steps, systems, roles, exceptions, and customer communication around it.</p><p class="detail-cta-note">Helpful to bring: one recent request, the current tools, and the handoff you most want to improve.</p></div><a class="button about-cta-button" href="<?php echo esc_url( reachfirst_page_url( 'book-consultation' ) . '' ); ?>">Request a consultation by email<svg class="icon"><use href="#f-arrow-up"/></svg></a></div></div></section>
  </main>
<?php get_footer(); ?>
