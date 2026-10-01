<?php
/**
 * Template Name: Reach First — Home
 */
defined( 'ABSPATH' ) || exit;
get_header();
?>
<main id="main-content" tabindex="-1">
    
    <section id="hero" class="hero section-space" aria-labelledby="hero-heading">
      <div class="site-container hero-layout">
        <div class="hero-copy">
          <p class="eyebrow hero-eyebrow">AI automation for North American businesses</p>
          <h1 id="hero-heading" class="hero-heading">AI Automation for <span>Growing Service Businesses</span></h1>
          <p class="hero-description">Connect your systems, simplify repetitive work, and give your team more time for customers. Explore AI automation and connected workflows for service businesses across Canada and the United States.</p>
          <div class="hero-actions">
            <a class="button button-primary" href="<?php echo esc_url( reachfirst_page_url( 'book-consultation' ) . '' ); ?>">Request a consultation by email<svg class="icon" aria-hidden="true"><use href="#rf-icon-arrow-up-right"></use></svg></a>
            <a class="button button-secondary" href="#services">Explore Services<svg class="icon" aria-hidden="true"><use href="#rf-icon-arrow-right"></use></svg></a>
          </div>
        </div>
        <figure class="hero-visual" aria-label="Conceptual illustration of AI-assisted business workflows" data-hero-motion>
          <div class="hero-artwork">
          <div class="hero-orbit-mask" aria-hidden="true"><div class="hero-orbit"><span class="hero-orbit-outer"></span><span class="hero-orbit-inner"></span></div></div>
          <picture>
            <source media="(min-width: 640px)" srcset="<?php echo esc_url( get_theme_file_uri( 'assets/images/hero-connected-workspace.png' ) ); ?> 1254w" sizes="(min-width: 1280px) 523px, (min-width: 1024px) 43vw, 544px">
            <img class="hero-image" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E" width="1254" height="1254" fetchpriority="high" loading="eager" alt="A blue hub connects an enquiry bubble, calendar, customer record, and document folder.">
          </picture>
          <svg class="hero-connections" viewBox="0 0 1254 1254" fill="none" aria-hidden="true" focusable="false">
            <defs>
              <clipPath id="hero-pipe-enquiry"><path d="M365 447L389 439L535 540L514 553Z"/></clipPath>
              <clipPath id="hero-pipe-calendar"><path d="M725 541L826 479L850 491L747 560Z"/></clipPath>
              <clipPath id="hero-pipe-documents"><path d="M509 669L533 681L414 761L390 749Z"/></clipPath>
              <clipPath id="hero-pipe-crm"><path d="M731 670L841 741L841 766L715 698Z"/></clipPath>
            </defs>
            <g clip-path="url(#hero-pipe-enquiry)"><path class="hero-flow hero-flow-enquiry" pathLength="100" d="M380 449L525 547"/></g>
            <g clip-path="url(#hero-pipe-calendar)"><path class="hero-flow hero-flow-calendar" pathLength="100" d="M733 551L843 485"/></g>
            <g clip-path="url(#hero-pipe-documents)"><path class="hero-flow hero-flow-documents" pathLength="100" d="M525 679L399 755"/></g>
            <g clip-path="url(#hero-pipe-crm)"><path class="hero-flow hero-flow-crm" pathLength="100" d="M722 680L845 759"/></g>
            <g class="hero-ai-glyph" transform="translate(625 586) scale(1 .65)" stroke="white" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M-30-22L0 0L30-22M-30 22L0 0L30 22M0-35V0"/>
              <g fill="white" stroke="none"><circle cx="-30" cy="-22" r="5"/><circle cx="30" cy="-22" r="5"/><circle cx="-30" cy="22" r="5"/><circle cx="30" cy="22" r="5"/><circle cy="-35" r="5"/><circle r="8"/></g>
            </g>
          </svg>
          <div class="hero-labels">
            <span class="hero-label hero-label-enquiries"><svg aria-hidden="true"><use href="#rf-icon-message-square"></use></svg>Enquiries</span>
            <span class="hero-label hero-label-scheduling"><svg aria-hidden="true"><use href="#rf-icon-calendar-days"></use></svg>Scheduling</span>
            <span class="hero-label hero-label-crm"><svg aria-hidden="true"><use href="#rf-icon-contact-round"></use></svg>CRM</span>
          </div>
          </div>
        </figure>
      </div>
    </section>
    
<section class="home-proof" aria-labelledby="home-proof-heading"><div class="site-container home-proof-layout">
  <div><p class="eyebrow">Published client experience · Digital marketing</p><h2 id="home-proof-heading">AKRoN Roofing</h2></div>
  <div><p>Brand positioning, website redesign, SEO, social media, and advertising for a Calgary roofing business.</p><p class="proof-boundary">This project demonstrates digital-marketing experience. It does not establish AI automation results.</p></div>
  <a href="<?php echo esc_url( reachfirst_page_url( 'case-studies' ) . '#featured-case' ); ?>">Explore the published project <span aria-hidden="true">↗</span></a>
</div></section>

    
    <section id="automation-opportunities" class="automation-opportunities section-space" aria-labelledby="opportunities-heading">
  <div class="site-container"><div class="section-intro"><h2 id="opportunities-heading" class="text-heading font-semibold">Where does work get repeated?</h2><p>Choose a starting point, then explore the service that fits.</p></div>
  <div class="opportunity-links">
    <article><h3>Customer enquiries</h3><p>Route requests to the right person.</p><a href="<?php echo esc_url( reachfirst_page_url( 'ai-agents-customer-support' ) . '' ); ?>">Explore customer support</a></article>
    <article><h3>Lead follow-ups</h3><p>Give each enquiry a clear next step.</p><a href="<?php echo esc_url( reachfirst_page_url( 'sales-crm-automation' ) . '' ); ?>">Explore CRM automation</a></article>
    <article><h3>Client onboarding</h3><p>Coordinate forms, documents, and handoffs.</p><a href="<?php echo esc_url( reachfirst_page_url( 'business-workflow-automation' ) . '' ); ?>">Explore workflow automation</a></article>
    <article><h3>Daily administration</h3><p>Reduce repeated data entry between tools.</p><a href="<?php echo esc_url( reachfirst_page_url( 'custom-ai-applications-integrations' ) . '' ); ?>">Explore system connections</a></article>
  </div></div></section>
    

    
    <section id="services" class="services section-space" aria-labelledby="services-heading" tabindex="-1">
      <div class="site-container">
        <h2 id="services-heading" class="services-heading text-heading font-semibold">Find the right service</h2>
        <div class="services-featured">
          <article id="service-workflow" class="service service-feature" aria-labelledby="service-workflow-heading" tabindex="-1">
            <div class="service-art service-art-workflow" aria-hidden="true">
              <svg viewBox="0 0 320 180" fill="none" focusable="false">
                <ellipse class="service-art-ground" cx="160" cy="147" rx="113" ry="15"/>
                <path class="service-art-connection" d="M78 87H117Q130 87 130 101V108H183Q195 108 195 93V70H241"/>
                <g class="service-art-float"><rect class="service-art-edge" x="37" y="46" width="65" height="82" rx="12"/><rect class="service-art-paper" x="31" y="40" width="65" height="82" rx="12"/><rect class="service-art-tint" x="43" y="52" width="23" height="23" rx="6"/><path class="service-art-ink" d="M49 63h11m-5-5v10"/><path class="service-art-rule" d="M44 89h38M44 101h25"/></g>
                <path class="service-art-edge" d="m161 67 39 32v12l-39 31-40-31V99Z"/><path class="service-art-blue" d="m161 59 39 32-39 32-40-32Z"/><path class="service-art-white" d="m148 91 9 8 18-18"/>
                <g class="service-art-float service-art-float-delayed"><rect class="service-art-edge" x="227" y="42" width="65" height="82" rx="12"/><rect class="service-art-paper" x="221" y="36" width="65" height="82" rx="12"/><path class="service-art-rule" d="M237 55h32M237 67h22"/><rect class="service-art-tint" x="233" y="81" width="41" height="22" rx="6"/><path class="service-art-ink" d="m245 91 5 4 9-9"/></g>
                <circle class="service-art-signal" cx="113" cy="87" r="4"/><circle class="service-art-signal" cx="205" cy="70" r="4"/>
              </svg>
            </div>
            <h3 id="service-workflow-heading">Business Workflow <span class="service-title-tail">Automation</span></h3>
            <p>Connect tools and automate tasks, approvals, and data transfers.</p>
            <a class="service-link" href="<?php echo esc_url( reachfirst_page_url( 'business-workflow-automation' ) . '' ); ?>" aria-label="Explore Business Workflow Automation">Explore this service<svg class="icon" aria-hidden="true"><use href="#rf-icon-arrow-right"></use></svg></a>
          </article>
          <article id="service-sales-crm" class="service service-feature" aria-labelledby="service-sales-crm-heading" tabindex="-1">
            <div class="service-art service-art-sales" aria-hidden="true">
              <svg viewBox="0 0 320 180" fill="none" focusable="false">
                <ellipse class="service-art-ground" cx="160" cy="150" rx="104" ry="14"/>
                <path class="service-art-connection" d="M71 67H113M213 86h35v39h-30"/>
                <g class="service-art-float"><path class="service-art-edge" d="M40 39h46a9 9 0 0 1 9 9v27a9 9 0 0 1-9 9H64L48 96V84h-8a9 9 0 0 1-9-9V48a9 9 0 0 1 9-9Z"/><path class="service-art-paper" d="M35 33h46a9 9 0 0 1 9 9v27a9 9 0 0 1-9 9H59L43 90V78h-8a9 9 0 0 1-9-9V42a9 9 0 0 1 9-9Z"/><path class="service-art-rule" d="M41 49h33M41 61h22"/></g>
                <rect class="service-art-edge" x="114" y="30" width="103" height="121" rx="13"/><rect class="service-art-paper" x="107" y="23" width="103" height="121" rx="13"/>
                <circle class="service-art-tint" cx="158" cy="62" r="24"/><circle class="service-art-blue" cx="158" cy="54" r="8"/><path class="service-art-blue" d="M143 77v-5a15 12 0 0 1 30 0v5Z"/><path class="service-art-rule" d="M128 103h60M138 116h40"/>
                <g class="service-art-float service-art-float-delayed"><rect class="service-art-blue" x="233" y="101" width="52" height="43" rx="10"/><path class="service-art-white" d="M246 98v8m26-8v8m-38 8h50"/><g fill="white"><circle cx="248" cy="127" r="2"/><circle cx="259" cy="127" r="2"/><circle cx="270" cy="127" r="2"/></g></g>
                <circle class="service-art-signal" cx="97" cy="67" r="4"/><circle class="service-art-signal" cx="248" cy="90" r="4"/>
              </svg>
            </div>
            <h3 id="service-sales-crm-heading">Sales &amp; CRM <span class="service-title-tail">Automation</span></h3>
            <p>Coordinate enquiry capture, lead assignment, follow-ups, reminders, and CRM updates.</p>
            <a class="service-link" href="<?php echo esc_url( reachfirst_page_url( 'sales-crm-automation' ) . '' ); ?>" aria-label="Explore Sales and CRM Automation">Explore this service<svg class="icon" aria-hidden="true"><use href="#rf-icon-arrow-right"></use></svg></a>
          </article>
          <article id="service-agents" class="service service-feature" aria-labelledby="service-agents-heading" tabindex="-1">
            <div class="service-art service-art-agents" aria-hidden="true">
              <svg viewBox="0 0 320 180" fill="none" focusable="false">
                <ellipse class="service-art-ground" cx="164" cy="148" rx="108" ry="14"/>
                <path class="service-art-connection" d="M78 84h40M207 89h31v24"/>
                <g class="service-art-float"><rect class="service-art-edge" x="39" y="50" width="58" height="75" rx="9"/><rect class="service-art-paper" x="33" y="44" width="58" height="75" rx="9"/><path class="service-art-rule" d="M47 62h29M47 75h29M47 88h18"/><path class="service-art-ink" d="m63 104 4 4 9-9"/></g>
                <path class="service-art-edge" d="M130 35h68a16 16 0 0 1 16 16v53a16 16 0 0 1-16 16h-18l-22 18v-18h-26a16 16 0 0 1-16-16V51a16 16 0 0 1 16-16Z"/>
                <path class="service-art-blue" d="M124 29h68a16 16 0 0 1 16 16v53a16 16 0 0 1-16 16h-18l-22 18v-18h-26a16 16 0 0 1-16-16V45a16 16 0 0 1 16-16Z"/>
                <path class="service-art-white" d="m158 49 0 36m-18-27 36 18m-36 0 36-18"/><g fill="white"><circle cx="158" cy="49" r="4"/><circle cx="158" cy="85" r="4"/><circle cx="140" cy="58" r="4"/><circle cx="176" cy="58" r="4"/><circle cx="140" cy="76" r="4"/><circle cx="176" cy="76" r="4"/></g>
                <g class="service-art-float service-art-float-delayed"><circle class="service-art-paper" cx="254" cy="119" r="27"/><circle class="service-art-blue" cx="254" cy="110" r="7"/><path class="service-art-blue" d="M241 134v-4a13 11 0 0 1 26 0v4Z"/></g>
                <path class="service-art-ink" d="m233 91 5 5 5-5"/>
              </svg>
            </div>
            <h3 id="service-agents-heading">AI Agents &amp; <span class="service-title-tail">Customer Support</span></h3>
            <p>Assistants that use approved business information and hand complex requests to staff.</p>
            <a class="service-link" href="<?php echo esc_url( reachfirst_page_url( 'ai-agents-customer-support' ) . '' ); ?>" aria-label="Explore AI Agents and Customer Support">Explore this service<svg class="icon" aria-hidden="true"><use href="#rf-icon-arrow-right"></use></svg></a>
          </article>
        </div>
        <div class="services-supporting">
          <article id="service-managed" class="service service-compact" aria-labelledby="service-managed-heading" tabindex="-1">
            <span class="service-emblem" aria-hidden="true"><svg viewBox="0 0 80 80" fill="none" focusable="false"><rect class="service-art-edge" x="19" y="20" width="47" height="46" rx="12"/><rect class="service-art-paper" x="14" y="15" width="47" height="46" rx="12"/><path class="service-art-ink" d="M25 30h26M25 45h26"/><circle class="service-art-blue" cx="33" cy="30" r="4"/><circle class="service-art-blue" cx="44" cy="45" r="4"/><path class="service-art-ink" d="M11 56a31 31 0 0 0 55-1m0 0v10m0-10H56M63 15a31 31 0 0 0-50 3m0 0V8m0 10h10"/></svg></span>
            <h3 id="service-managed-heading">Managed AI &amp; Automation Support</h3>
            <p>Keep automations supported with monitoring, maintenance, improvements, and team support.</p>
            <a class="service-link" href="<?php echo esc_url( reachfirst_page_url( 'managed-ai-automation-support' ) . '' ); ?>" aria-label="Explore Managed AI and Automation Support">Explore this service<svg class="icon" aria-hidden="true"><use href="#rf-icon-arrow-right"></use></svg></a>
          </article>
          <article id="service-consulting" class="service service-compact" aria-labelledby="service-consulting-heading" tabindex="-1">
            <span class="service-emblem" aria-hidden="true"><svg viewBox="0 0 80 80" fill="none" focusable="false"><rect class="service-art-edge" x="19" y="13" width="46" height="58" rx="10"/><rect class="service-art-paper" x="14" y="8" width="46" height="58" rx="10"/><path class="service-art-rule" d="M25 21h23"/><path class="service-art-ink" d="M27 52h15a7 7 0 0 0 0-14h-7a7 7 0 0 1 0-14"/><circle class="service-art-blue" cx="27" cy="52" r="4"/><circle class="service-art-tint" cx="35" cy="24" r="4"/><circle class="service-art-blue" cx="59" cy="58" r="13"/><path class="service-art-white" d="m55 63 3-10 6 3Z"/></svg></span>
            <h3 id="service-consulting-heading">AI Consulting &amp; Automation Planning</h3>
            <p>Identify useful opportunities and define an implementation roadmap.</p>
            <a class="service-link" href="<?php echo esc_url( reachfirst_page_url( 'ai-consulting-automation-planning' ) . '' ); ?>" aria-label="Explore AI Consulting and Automation Planning">Explore this service<svg class="icon" aria-hidden="true"><use href="#rf-icon-arrow-right"></use></svg></a>
          </article>
          <article id="service-voice" class="service service-compact" aria-labelledby="service-voice-heading" tabindex="-1">
            <span class="service-emblem" aria-hidden="true"><svg viewBox="0 0 80 80" fill="none" focusable="false"><circle class="service-art-edge" cx="42" cy="42" r="29"/><circle class="service-art-paper" cx="38" cy="38" r="29"/><path class="service-art-ink" d="M21 34v9m8-18v27m9-32v37m9-29v21m9-13v6"/><rect class="service-art-blue" x="47" y="49" width="26" height="24" rx="8"/><path class="service-art-white" d="M54 59h12m-4-4 4 4-4 4"/></svg></span>
            <h3 id="service-voice-heading">AI Voice Agents</h3>
            <p>Handle inbound enquiries, appointment requests, call routing, and summaries.</p>
            <a class="service-link" href="<?php echo esc_url( reachfirst_page_url( 'ai-voice-agents' ) . '' ); ?>" aria-label="Explore AI Voice Agents">Explore this service<svg class="icon" aria-hidden="true"><use href="#rf-icon-arrow-right"></use></svg></a>
          </article>
          <article id="service-custom" class="service service-compact" aria-labelledby="service-custom-heading" tabindex="-1">
            <span class="service-emblem" aria-hidden="true"><svg viewBox="0 0 80 80" fill="none" focusable="false"><rect class="service-art-edge" x="13" y="18" width="53" height="45" rx="10"/><rect class="service-art-paper" x="8" y="13" width="53" height="45" rx="10"/><path class="service-art-rule" d="M9 25h51"/><path class="service-art-ink" d="m26 33-7 7 7 7m17-14 7 7-7 7m-6-15-5 17"/><rect class="service-art-blue" x="49" y="49" width="24" height="24" rx="7"/><path class="service-art-white" d="M61 54v14m-7-7h14"/></svg></span>
            <h3 id="service-custom-heading">Custom AI Applications &amp; Integrations</h3>
            <p>Build tailored tools, document workflows, portals, and system connections.</p>
            <a class="service-link" href="<?php echo esc_url( reachfirst_page_url( 'custom-ai-applications-integrations' ) . '' ); ?>" aria-label="Explore Custom AI Applications and Integrations">Explore this service<svg class="icon" aria-hidden="true"><use href="#rf-icon-arrow-right"></use></svg></a>
          </article>
          <article id="service-marketing" class="service service-compact" aria-labelledby="service-marketing-heading" tabindex="-1">
            <span class="service-emblem" aria-hidden="true"><svg viewBox="0 0 80 80" fill="none" focusable="false"><rect class="service-art-edge" x="16" y="15" width="48" height="50" rx="10"/><rect class="service-art-paper" x="11" y="10" width="48" height="50" rx="10"/><path class="service-art-rule" d="M21 22h28"/><path class="service-art-ink" d="M22 48V39m10 9V32m10 16V25"/><circle class="service-art-blue" cx="22" cy="38" r="3"/><circle class="service-art-blue" cx="32" cy="31" r="3"/><circle class="service-art-blue" cx="42" cy="24" r="3"/><circle class="service-art-blue" cx="61" cy="59" r="13"/><path class="service-art-white" d="M54 61h14m-4-5 4 5-4 5"/></svg></span>
            <h3 id="service-marketing-heading">Digital Marketing <span class="service-title-tail">Services</span></h3>
            <p>Build a coordinated digital presence across brand, web, search, social media, and advertising.</p>
            <a class="service-link" href="<?php echo esc_url( reachfirst_page_url( 'digital-marketing-services' ) . '' ); ?>" aria-label="Explore Digital Marketing Services">Explore this service<svg class="icon" aria-hidden="true"><use href="#rf-icon-arrow-right"></use></svg></a>
          </article>
        </div>
      </div>
    </section>
    

    
    <section id="industries" class="industries section-space" aria-labelledby="industries-heading" tabindex="-1">
      <div class="site-container">
        <div class="industries-intro"><h2 id="industries-heading" class="text-heading font-semibold">Explore your industry</h2><div><p>Explore practical workflows for teams in the field and businesses built on client relationships.</p><a class="service-link" href="<?php echo esc_url( reachfirst_page_url( 'industries' ) . '' ); ?>">Explore all industries<svg class="icon" aria-hidden="true"><use href="#rf-icon-arrow-right"></use></svg></a></div></div>
        <article id="home-field-services" class="industry-panel industry-primary" aria-labelledby="home-field-heading" tabindex="-1">
          <div class="industry-copy">
            <p class="industry-kicker">Field operations</p>
            <h3 id="home-field-heading">Home &amp; Field Services</h3>
            <ul class="industry-tags" aria-label="Home and field service business examples"><li>HVAC</li><li>Plumbing</li><li>Electrical</li><li>Roofing</li><li>Cleaning</li><li>Landscaping</li><li>Property maintenance</li></ul>
            <p class="industry-summary">For teams coordinating incoming requests, appointments, and quotes across the office and the field.</p>
            <a class="button button-primary" href="<?php echo esc_url( reachfirst_page_url( 'home-field-services' ) . '' ); ?>" aria-label="Explore Home and Field Services">Explore this industry<svg class="icon" aria-hidden="true"><use href="#rf-icon-arrow-right"></use></svg></a>
          </div>
          <figure class="industry-visual">
            <div class="industry-artwork"><img class="industry-image" src="<?php echo esc_url( get_theme_file_uri( 'assets/images/industry-home-field.webp' ) . '' ); ?>" width="960" height="960" loading="lazy" decoding="async" alt="Conceptual illustration of service tools connected to a calendar and enquiry bubble."><div class="industry-visual-labels" aria-hidden="true"><span class="industry-badge industry-badge-first"><svg><use href="#rf-icon-message-square"></use></svg>Enquiries</span><span class="industry-badge industry-badge-second"><svg><use href="#rf-icon-calendar-days"></use></svg>Appointments</span><span class="industry-badge industry-badge-third"><svg><use href="#rf-icon-bell"></use></svg>Quote follow-ups</span></div></div>
            <figcaption><span class="industry-caption-mark" aria-hidden="true"></span>Practical connections for office and field teams</figcaption>
          </figure>
        </article>
        <article id="professional-services" class="industry-panel industry-secondary" aria-labelledby="professional-heading" tabindex="-1">
          <div class="industry-copy">
            <p class="industry-kicker">Client operations</p>
            <h3 id="professional-heading">Professional Services</h3>
            <ul class="industry-tags" aria-label="Professional service business examples"><li>Consulting firms</li><li>Agencies</li><li>Recruitment businesses</li></ul>
            <p class="industry-summary">For client-focused teams handling intake, documents, and shared business knowledge.</p>
            <a class="button button-secondary" href="<?php echo esc_url( reachfirst_page_url( 'professional-services' ) . '' ); ?>" aria-label="Explore Professional Services">Explore this industry<svg class="icon" aria-hidden="true"><use href="#rf-icon-arrow-right"></use></svg></a>
          </div>
          <figure class="industry-visual">
            <div class="industry-artwork"><img class="industry-image" src="<?php echo esc_url( get_theme_file_uri( 'assets/images/industry-professional.webp' ) . '' ); ?>" width="960" height="960" loading="lazy" decoding="async" alt="Conceptual document workspace with a folder connected to records and a document."><div class="industry-visual-labels" aria-hidden="true"><span class="industry-badge industry-badge-first"><svg><use href="#rf-icon-contact-round"></use></svg>Onboarding</span><span class="industry-badge industry-badge-second"><svg><use href="#rf-icon-folder-check"></use></svg>Documents</span><span class="industry-badge industry-badge-third"><svg><use href="#rf-icon-messages-square"></use></svg>Team knowledge</span></div></div>
            <figcaption><span class="industry-caption-mark" aria-hidden="true"></span>Connected information throughout the client relationship</figcaption>
          </figure>
        </article>
      </div>
    </section>
    

    
    <section id="automation-demo" class="automation-demo section-space" aria-labelledby="demo-heading">
      <div class="site-container demo-layout">
        <div class="demo-copy">
          <h2 id="demo-heading" class="text-heading font-semibold">See Automation in Action</h2>
          <p class="demo-disclosure">Illustrative workflow demo — sample data</p>
          <p class="text-muted">Follow a fictional enquiry from an initial request to a follow-up draft. See how information can move between steps, with staff reviewing the details before an outgoing action.</p>
          <p class="demo-boundary">This example runs only in your browser. It is not connected to a CRM and does not create records or send messages. It illustrates a possible workflow, not client results or a software product.</p>
          <div class="demo-sample">
            <h3><svg class="icon" aria-hidden="true"><use href="#rf-icon-message-square"></use></svg>Fictional enquiry</h3>
            <blockquote>“Could you arrange a routine equipment inspection next week?”</blockquote>
            <p class="demo-sample-note">No customer name, address, or contact details.</p>
          </div>
        </div>
        <div class="demo-workspace" data-workflow-demo>
          <div class="demo-workspace-heading"><span class="demo-workspace-icon" aria-hidden="true"><svg class="icon"><use href="#rf-icon-workflow"></use></svg></span><div><h3>Enquiry to follow-up</h3><p>Browser-only example</p></div><span class="demo-phase" data-demo-phase>Five stages</span></div>
          <div class="demo-controls" hidden>
            <button class="button button-primary" type="button" data-demo-run><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="m8 5 11 7-11 7Z"/></svg>Run Example</button>
            <button class="button button-secondary" type="button" data-demo-reset>Reset</button>
          </div>
          <p class="demo-status" role="status" aria-live="polite" aria-atomic="true" data-demo-status>Static example: read the five stages below. Staff review comes before the notification preview and follow-up draft.</p>
          <div class="demo-stage-layout">
          <ol class="demo-sequence">
            <li data-demo-step>
              <span class="demo-step-icon" aria-hidden="true"><svg><use href="#rf-icon-message-square"></use></svg></span>
              <div class="demo-step-heading"><h3>Enquiry received</h3><span class="demo-step-state">Example step</span></div>
              <p>The fictional inspection request enters the example.</p>
            </li>
            <li data-demo-step>
              <span class="demo-step-icon" aria-hidden="true"><svg><use href="#rf-icon-list-checks"></use></svg></span>
              <div class="demo-step-heading"><h3>Details organized</h3><span class="demo-step-state">Example step</span></div>
              <p>Request: routine equipment inspection. Preferred timing: next week.</p>
            </li>
            <li data-demo-step>
              <span class="demo-step-icon" aria-hidden="true"><svg><use href="#rf-icon-contact-round"></use></svg></span>
              <div class="demo-step-heading"><h3>CRM record prepared</h3><span class="demo-step-state">Example step</span></div>
              <p>A sample record is prepared locally: inspection request, timing, and service-desk queue. Nothing is saved to a CRM. Staff review is required before continuing to the notification preview.</p>
            </li>
            <li data-demo-step>
              <span class="demo-step-icon" aria-hidden="true"><svg><use href="#rf-icon-bell"></use></svg></span>
              <div class="demo-step-heading"><h3>Team notified</h3><span class="demo-step-state">Example step</span></div>
              <p>Notification preview: “Inspection request ready for the service desk.” No notification is sent.</p>
            </li>
            <li data-demo-step>
              <span class="demo-step-icon" aria-hidden="true"><svg><use href="#rf-icon-messages-square"></use></svg></span>
              <div class="demo-step-heading"><h3>Follow-up prepared</h3><span class="demo-step-state">Example step</span></div>
              <p>Sample draft: “Thanks for your enquiry. Our team will review your preferred timing.” Staff approval is required before sending; this demo cannot send it.</p>
            </li>
          </ol>
          <div class="demo-preview" data-demo-preview hidden>
            <div class="demo-preview-heading"><span>Sample output</span><span data-demo-count>Ready</span></div>
            <div class="demo-output-area">
            <div class="demo-output" data-demo-output="input"><h4>One incoming enquiry</h4><div class="demo-message"><svg class="icon" aria-hidden="true"><use href="#rf-icon-message-square"></use></svg><p>Could you arrange a routine equipment inspection next week?</p></div><p class="demo-output-note">An invented request with no identifying information.</p></div>
            <div class="demo-output" data-demo-output="details" hidden><h4>The useful details, organized</h4><dl class="demo-record"><div><dt>Request</dt><dd>Routine equipment inspection</dd></div><div><dt>Preferred timing</dt><dd>Next week</dd></div></dl><p class="demo-output-note">Sample details extracted from the fictional enquiry.</p></div>
            <div class="demo-output" data-demo-output="record" hidden><h4>A record for staff to review</h4><dl class="demo-record"><div><dt>Request</dt><dd>Routine equipment inspection</dd></div><div><dt>Preferred timing</dt><dd>Next week</dd></div><div><dt>Suggested queue</dt><dd>Service desk</dd></div></dl><p class="demo-output-note">Preview only. Nothing is saved to a CRM.</p></div>
            <div class="demo-output" data-demo-output="notice" hidden><h4>A team notification preview</h4><div class="demo-message"><svg class="icon" aria-hidden="true"><use href="#rf-icon-bell"></use></svg><p>Inspection request ready for the service desk.</p></div><p class="demo-output-note">The sample review is complete. No notification is sent.</p></div>
            <div class="demo-output" data-demo-output="draft" hidden><h4>A follow-up draft, ready for review</h4><div class="demo-message"><svg class="icon" aria-hidden="true"><use href="#rf-icon-messages-square"></use></svg><p>Thanks for your enquiry. Our team will review your preferred timing.</p></div><p class="demo-output-note">Staff approval is still required before sending. This example cannot send messages.</p></div>
            </div>
            <div class="demo-review" data-demo-review>
              <h4><svg class="icon" aria-hidden="true"><use href="#rf-icon-contact-round"></use></svg><span data-demo-review-heading>People stay involved</span></h4>
              <p data-demo-review-note>The example pauses at stage 3 so you can review the sample record and routing.</p>
              <div class="demo-review-action"><button class="button button-primary" type="button" data-demo-continue hidden>Review sample &amp; continue<svg class="icon" aria-hidden="true"><use href="#rf-icon-arrow-right"></use></svg></button></div>
            </div>
          </div>
          </div>
          <p class="demo-footnote">Conceptual workflow. No CRM connection, saved records, or outgoing messages.</p>
          <noscript><p class="demo-noscript">JavaScript is off. The complete example above remains available as a static sequence.</p></noscript>
        </div>
      </div>
    </section>
    

    
    <section id="how-we-work" class="process section-space" aria-labelledby="process-heading" tabindex="-1">
      <div class="site-container process-layout">
        <div class="process-intro">
          <div><p class="eyebrow">How we work</p><h2 id="process-heading" class="text-heading font-semibold">A focused path from assessment to rollout</h2></div>
          <p class="process-introduction">Start with the work. Test a focused use case. Prepare your team for the implementation and its ongoing use.</p>
        </div>
          <ol class="process-timeline">
            <li><span class="process-number" aria-hidden="true">01</span><span class="process-symbol" aria-hidden="true"><svg viewBox="0 0 80 80" fill="none" focusable="false"><rect class="process-shadow" x="16" y="14" width="41" height="51" rx="9"/><rect class="process-paper" x="11" y="9" width="41" height="51" rx="9"/><path class="process-line" d="M22 23h18M22 33h11M22 43h13"/><circle class="process-paper" cx="51" cy="49" r="15"/><path class="process-stroke" d="m62 60 10 10M45 49h12m-6-6v12"/></svg></span><div class="process-step-content"><h3>Assess</h3><p>Understand the workflow, systems, and priorities.</p></div></li>
            <li><span class="process-number" aria-hidden="true">02</span><span class="process-symbol" aria-hidden="true"><svg viewBox="0 0 80 80" fill="none" focusable="false"><path class="process-shadow" d="M22 19h36v41a10 10 0 0 1-10 10H32a10 10 0 0 1-10-10Z"/><path class="process-paper" d="M18 15h36v41a10 10 0 0 1-10 10H28a10 10 0 0 1-10-10Z"/><path class="process-stroke" d="M15 15h42M26 9h20M26 29h19"/><path class="process-fill" d="M23 45h26v10a7 7 0 0 1-7 7H30a7 7 0 0 1-7-7Z"/><circle class="process-paper" cx="59" cy="48" r="13"/><path class="process-stroke" d="m54 48 4 4 7-8"/></svg></span><div class="process-step-content"><h3>Pilot</h3><p>Test a focused use case and agree how success will be evaluated.</p></div></li>
            <li><span class="process-number" aria-hidden="true">03</span><span class="process-symbol" aria-hidden="true"><svg viewBox="0 0 80 80" fill="none" focusable="false"><path class="process-line" d="M24 23h31v33H24Z"/><rect class="process-shadow" x="12" y="12" width="25" height="25" rx="7"/><rect class="process-paper" x="8" y="8" width="25" height="25" rx="7"/><rect class="process-shadow" x="45" y="45" width="25" height="25" rx="7"/><rect class="process-fill" x="41" y="41" width="25" height="25" rx="7"/><path class="process-stroke" d="M16 21h9m-4-4v9"/><path d="m48 54 4 4 8-9" stroke="white" stroke-width="2"/><circle class="process-paper" cx="55" cy="23" r="6"/><circle class="process-paper" cx="24" cy="56" r="6"/></svg></span><div class="process-step-content"><h3>Implement</h3><p>Connect systems, test behavior, and prepare the rollout.</p></div></li>
            <li><span class="process-number" aria-hidden="true">04</span><span class="process-symbol" aria-hidden="true"><svg viewBox="0 0 80 80" fill="none" focusable="false"><path class="process-shadow" d="M13 22q14-8 28 0 14-8 28 0v39q-14-8-28 0-14-8-28 0Z"/><path class="process-paper" d="M9 18q14-8 28 0 14-8 28 0v39q-14-8-28 0-14-8-28 0Z"/><path class="process-stroke" d="M37 19v38"/><path class="process-line" d="M17 29h11M17 39h11M46 29h11"/><circle class="process-fill" cx="59" cy="57" r="13"/><path d="M55 54a4 4 0 0 1 8 0c0 3-4 3-4 6m0 4h.01" stroke="white" stroke-width="1.6"/></svg></span><div class="process-step-content"><h3>Train</h3><p>Help staff use the solution and understand exceptions.</p></div></li>
            <li><span class="process-number" aria-hidden="true">05</span><span class="process-symbol" aria-hidden="true"><svg viewBox="0 0 80 80" fill="none" focusable="false"><circle class="process-shadow" cx="42" cy="42" r="24"/><circle class="process-paper" cx="38" cy="38" r="24"/><path class="process-stroke" d="M8 37a30 30 0 0 1 51-21m0 0V6m0 10H49M68 39a30 30 0 0 1-51 23m0 0v10m0-10h10"/><path class="process-line" d="M25 32h26M25 44h26"/><circle class="process-fill" cx="32" cy="32" r="4"/><circle class="process-fill" cx="45" cy="44" r="4"/></svg></span><div class="process-step-content"><h3>Support</h3><p>Monitor, maintain, and improve the agreed implementation.</p></div></li>
          </ol>
          <aside id="why-reach-first" class="process-safeguards" aria-labelledby="why-heading"><h3 id="why-heading">Agree the practical details before rollout</h3><p>Define staff review points, access permissions, exception handling, training, and support responsibilities as part of the project scope.</p><a href="<?php echo esc_url( reachfirst_page_url( 'how-we-work' ) . '' ); ?>">Explore how we work <span aria-hidden="true">→</span></a></aside>
      </div>
    </section>
    

    
    <section id="integrations" class="integrations section-space" aria-labelledby="integrations-heading">
      <div class="site-container integrations-layout">
        <div class="integrations-copy">
          <p class="eyebrow">Your tools, connected</p>
          <h2 id="integrations-heading" class="text-heading font-semibold">Connect the Tools Your Team Already Uses</h2>
          <p class="integrations-description">Start with your CRM, calendar, documents, or other existing tools. Connection options depend on their available interfaces, permissions, and data quality; compatibility is assessed before a solution is agreed.</p>
          <a class="service-link integrations-link" href="<?php echo esc_url( reachfirst_page_url( 'book-consultation' ) . '' ); ?>">Discuss your existing tools<svg class="icon" aria-hidden="true"><use href="#rf-icon-arrow-up-right"></use></svg></a>
        </div>
        <figure class="integrations-visual" aria-labelledby="integrations-caption">
          <div class="integrations-map">
            <svg class="integrations-connectors" viewBox="0 0 600 360" preserveAspectRatio="none" aria-hidden="true" focusable="false">
              <g class="integration-tracks"><path d="M184 60H218Q248 60 248 90V150Q248 180 280 180"/><path d="M416 60H382Q352 60 352 90V150Q352 180 320 180"/><path d="M184 180H280"/><path d="M416 180H320"/><path d="M184 300H218Q248 300 248 270V210Q248 180 280 180"/><path d="M416 300H382Q352 300 352 270V210Q352 180 320 180"/></g>
              <g class="integration-signals"><path pathLength="100" d="M184 60H218Q248 60 248 90V150Q248 180 280 180"/><path pathLength="100" d="M416 60H382Q352 60 352 90V150Q352 180 320 180"/><path pathLength="100" d="M184 180H280"/><path pathLength="100" d="M416 180H320"/><path pathLength="100" d="M184 300H218Q248 300 248 270V210Q248 180 280 180"/><path pathLength="100" d="M416 300H382Q352 300 352 270V210Q352 180 320 180"/></g>
            </svg>
            <div class="integrations-hub" aria-hidden="true"><span class="integration-hub-orbit"></span><span class="integration-hub-stack"><span class="integration-hub-mark"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/images/reach-first-r-mark.png' ) . '' ); ?>" width="500" height="500" alt=""></span></span></div>
            <ul class="integrations-categories">
              <li><span class="integration-category-icon"><svg aria-hidden="true"><use href="#rf-icon-contact-round"></use></svg></span><div><span class="integration-category-name">CRM</span><span class="integration-category-detail">Contacts &amp; records</span></div></li>
              <li><span class="integration-category-icon"><svg aria-hidden="true"><use href="#rf-icon-calendar-days"></use></svg></span><div><span class="integration-category-name">Email &amp; Calendar</span><span class="integration-category-detail">Messages &amp; appointments</span></div></li>
              <li><span class="integration-category-icon"><svg aria-hidden="true"><use href="#rf-icon-messages-square"></use></svg></span><div><span class="integration-category-name">Phone &amp; Messaging</span><span class="integration-category-detail">Calls &amp; conversations</span></div></li>
              <li><span class="integration-category-icon"><svg aria-hidden="true"><use href="#rf-icon-database"></use></svg></span><div><span class="integration-category-name">Accounting</span><span class="integration-category-detail">Invoices &amp; transactions</span></div></li>
              <li><span class="integration-category-icon"><svg aria-hidden="true"><use href="#rf-icon-list-checks"></use></svg></span><div><span class="integration-category-name">Project Management</span><span class="integration-category-detail">Tasks &amp; handoffs</span></div></li>
              <li><span class="integration-category-icon"><svg aria-hidden="true"><use href="#rf-icon-folder-check"></use></svg></span><div><span class="integration-category-name">Documents</span><span class="integration-category-detail">Files &amp; forms</span></div></li>
            </ul>
          </div>
          <figcaption id="integrations-caption"><span aria-hidden="true"></span>Connection options shaped around your workflow</figcaption>
        </figure>
      </div>
    </section>
    

    

    

    
    <section id="faq" class="faq section-space" aria-labelledby="faq-heading">
      <div class="site-container faq-layout">
        <div class="faq-introduction">
          <p class="eyebrow">Before we begin</p>
          <h2 id="faq-heading" class="text-heading font-semibold">Questions About AI Automation?</h2>
          <p class="faq-description">A few practical details about planning, implementation, and ongoing support.</p>
        </div>
        <div class="faq-items">
          <details class="faq-item" open>
            <summary><span>Where should we start?</span><span class="faq-toggle" aria-hidden="true"></span></summary>
            <div class="faq-answer"><p>Start with one repeatable process, understand its current steps, and assess whether automation is useful.</p></div>
          </details>
          <details class="faq-item">
            <summary><span>Can you work with our existing software?</span><span class="faq-toggle" aria-hidden="true"></span></summary>
            <div class="faq-answer"><p>We assess available integrations, permissions, and limitations before confirming a solution for your existing software.</p></div>
          </details>
          <details class="faq-item">
            <summary><span>How much does a project cost?</span><span class="faq-toggle" aria-hidden="true"></span></summary>
            <div class="faq-answer"><p>Project scope depends on workflow complexity, systems, integrations, and support needs. We discuss your requirements before providing a quote.</p></div>
          </details>
          <details class="faq-item">
            <summary><span>How long does implementation take?</span><span class="faq-toggle" aria-hidden="true"></span></summary>
            <div class="faq-answer"><p>Timing depends on scope, access, data readiness, and testing. We agree a project plan after assessment.</p></div>
          </details>
          <details class="faq-item">
            <summary><span>How are business data and staff oversight handled?</span><span class="faq-toggle" aria-hidden="true"></span></summary>
            <div class="faq-answer"><p>During planning, we define access, data flows, review points, and human handoffs so responsibilities are clear before implementation.</p></div>
          </details>
          <details class="faq-item">
            <summary><span>What happens after launch?</span><span class="faq-toggle" aria-hidden="true"></span></summary>
            <div class="faq-answer"><p>Our <a href="<?php echo esc_url( reachfirst_page_url( 'managed-ai-automation-support' ) . '' ); ?>">Managed AI &amp; Automation Support</a> service covers monitoring, maintenance, improvements, and team support. Maintenance, monitoring, and support terms are agreed for your project.</p></div>
          </details>
        </div>
      </div>
    </section>
    

    
    <section id="consultation" class="consultation section-space" aria-labelledby="consultation-heading">
      <div class="site-container">
        <div class="consultation-panel">
          <img class="consultation-diamonds consultation-diamonds-top" src="<?php echo esc_url( get_theme_file_uri( 'assets/images/rf-diamonds-top.png' ) . '' ); ?>" width="557" height="604" loading="lazy" decoding="async" alt="" aria-hidden="true">
          <img class="consultation-diamonds consultation-diamonds-bottom" src="<?php echo esc_url( get_theme_file_uri( 'assets/images/rf-diamonds-bottom.png' ) . '' ); ?>" width="611" height="670" loading="lazy" decoding="async" alt="" aria-hidden="true">
          <div class="consultation-layout">
            <div class="consultation-copy">
              <p class="eyebrow consultation-eyebrow">Start with a conversation</p>
              <h2 id="consultation-heading" class="font-semibold">What Would You Like to <span>Automate?</span></h2>
              <p class="consultation-description">Tell us which process is taking too much time. We’ll discuss your current workflow, the tools you use, and where automation could help.</p>
              <a class="button consultation-cta" href="<?php echo esc_url( reachfirst_page_url( 'book-consultation' ) . '' ); ?>"><span>Request a consultation by email</span><span class="consultation-cta-icon" aria-hidden="true"><svg class="icon"><use href="#rf-icon-arrow-up-right"></use></svg></span></a>
            </div>
            <aside class="consultation-agenda" aria-labelledby="consultation-agenda-heading">
              <div class="consultation-agenda-header"><span class="consultation-agenda-icon" aria-hidden="true"><svg><use href="#rf-icon-messages-square"></use></svg></span><h3 id="consultation-agenda-heading">What we’ll discuss</h3></div>
              <ul class="consultation-topics">
                <li><span class="consultation-topic-number" aria-hidden="true">01</span><div><h4>Your process</h4><p>Current steps and repetitive work.</p></div></li>
                <li><span class="consultation-topic-number" aria-hidden="true">02</span><div><h4>Your existing systems</h4><p>The tools your team uses.</p></div></li>
                <li><span class="consultation-topic-number" aria-hidden="true">03</span><div><h4>Possible next steps</h4><p>Opportunities to assess together.</p></div></li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </section>
    

    
  </main>
<?php get_footer(); ?>
