// Native disclosures remain operable by touch and keyboard without JavaScript.
// Add one quiet, decorative brand signature to internal-page heroes. The
// homepage hero intentionally stays clear so its existing infographic remains
// the sole focal point.
if (!document.body.classList.contains('home-page')) {
  const pageHero = document.querySelector('main > section:first-of-type');

  if (pageHero && !pageHero.querySelector(':scope > .rf-page-diamonds')) {
    pageHero.classList.add('rf-diamond-edge-host');

    const diamonds = document.createElement('img');
    diamonds.className = 'rf-page-diamonds';
    diamonds.src = 'assets/images/rf-diamonds-top.png';
    diamonds.width = 557;
    diamonds.height = 604;
    diamonds.alt = '';
    diamonds.decoding = 'async';
    diamonds.setAttribute('aria-hidden', 'true');
    pageHero.append(diamonds);
  }
}

// Reuse the homepage conversation panel as the consistent final call to action
// on every inner page. The booking page is intentionally excluded so it does
// not end with a link back to the form the visitor is already using.
const isSharedConsultationPage = !document.body.classList.contains('home-page')
  && !document.body.classList.contains('consultation-page');

if (isSharedConsultationPage) {
  const main = document.querySelector('main');

  if (main) {
    const sharedConsultation = document.createElement('section');
    sharedConsultation.className = 'consultation shared-consultation section-space';
    sharedConsultation.setAttribute('aria-labelledby', 'inner-consultation-heading');
    sharedConsultation.innerHTML = `
      <div class="site-container">
        <div class="consultation-panel">
          <img class="consultation-diamonds consultation-diamonds-top" src="assets/images/rf-diamonds-top.png" width="557" height="604" loading="lazy" decoding="async" alt="" aria-hidden="true">
          <img class="consultation-diamonds consultation-diamonds-bottom" src="assets/images/rf-diamonds-bottom.png" width="611" height="670" loading="lazy" decoding="async" alt="" aria-hidden="true">
          <div class="consultation-layout">
            <div class="consultation-copy">
              <p class="eyebrow consultation-eyebrow">Start with a conversation</p>
              <h2 id="inner-consultation-heading" class="font-semibold">What Would You Like to <span>Automate?</span></h2>
              <p class="consultation-description">Tell us which process is taking too much time. We’ll discuss your current workflow, the tools you use, and where automation could help.</p>
              <a class="button consultation-cta" href="book-consultation.html"><span>Request a consultation by email</span><span class="consultation-cta-icon" aria-hidden="true"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M7 7h10v10"/></svg></span></a>
            </div>
            <aside class="consultation-agenda" aria-labelledby="inner-consultation-agenda-heading">
              <div class="consultation-agenda-header"><span class="consultation-agenda-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/><path d="M8 9h8M8 13h5"/></svg></span><h3 id="inner-consultation-agenda-heading">What we’ll discuss</h3></div>
              <ul class="consultation-topics">
                <li><span class="consultation-topic-number" aria-hidden="true">01</span><div><h4>Your process</h4><p>Current steps and repetitive work.</p></div></li>
                <li><span class="consultation-topic-number" aria-hidden="true">02</span><div><h4>Your existing systems</h4><p>The tools your team uses.</p></div></li>
                <li><span class="consultation-topic-number" aria-hidden="true">03</span><div><h4>Possible next steps</h4><p>Opportunities to assess together.</p></div></li>
              </ul>
            </aside>
          </div>
        </div>
      </div>`;

    const existingFinalCta = main.querySelector(':scope > .about-cta');
    if (existingFinalCta) existingFinalCta.replaceWith(sharedConsultation);
    else main.append(sharedConsultation);
    document.body.classList.add('has-shared-consultation');
  }
}

// Keep one consistent, reference-led footer structure across every page while
// retaining Reach First content, destinations, and brand identity.
const siteFooter = document.querySelector('.site-footer');
if (siteFooter) {
  const footerArrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10"/></svg>';
  const footerEmail = '<svg class="footer-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>';
  const footerPhone = '<svg class="footer-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.69A2 2 0 0 1 22 16.92Z"/></svg>';
  siteFooter.innerHTML = `
    <div class="site-container footer-shell">
      <div class="footer-panel">
        <div class="footer-main">
          <div class="footer-introduction">
            <a class="footer-brand" href="./" aria-label="Reach First home"><img class="brand-logo" src="assets/images/reach-first-logo-original.jpg" width="500" height="59" alt="Reach First" loading="lazy"></a>
            <p class="footer-tagline">AI automation for growing service businesses.</p>
            <p class="footer-description">Practical automation, connected technology, and digital growth support built around the way your business works.</p>
            <div class="footer-contact-compact">
              <a href="mailto:info@reachfirst.com">${footerEmail}<span>info@reachfirst.com</span></a>
              <a href="tel:+18447773224">${footerPhone}<span>1-844-777-3224</span></a>
            </div>
            <p class="footer-coverage"><span aria-hidden="true"></span>Serving Canada and the United States.</p>
          </div>
          <nav class="footer-column" aria-labelledby="footer-automation-heading">
            <h2 id="footer-automation-heading" class="footer-heading">Automation services</h2>
            <ul>
              <li><a class="footer-link" href="ai-consulting-automation-planning.html">AI Consulting &amp; Planning</a></li>
              <li><a class="footer-link" href="business-workflow-automation.html">Workflow Automation</a></li>
              <li><a class="footer-link" href="sales-crm-automation.html">Sales &amp; CRM Automation</a></li>
              <li><a class="footer-link" href="ai-agents-customer-support.html">AI Agents &amp; Support</a></li>
            </ul>
          </nav>
          <nav class="footer-column" aria-labelledby="footer-build-heading">
            <h2 id="footer-build-heading" class="footer-heading">Build &amp; grow</h2>
            <ul>
              <li><a class="footer-link" href="ai-voice-agents.html">AI Voice Agents</a></li>
              <li><a class="footer-link" href="custom-ai-applications-integrations.html">Custom AI Applications</a></li>
              <li><a class="footer-link" href="managed-ai-automation-support.html">Managed AI Support</a></li>
              <li><a class="footer-link" href="digital-marketing-services.html">Digital Marketing</a></li>
              <li><a class="footer-link footer-view-all" href="services.html">View all services ${footerArrow}</a></li>
            </ul>
          </nav>
          <nav class="footer-column" aria-labelledby="footer-industries-heading">
            <h2 id="footer-industries-heading" class="footer-heading">Industries</h2>
            <ul>
              <li><a class="footer-link" href="home-field-services.html">Home &amp; Field Services</a></li>
              <li><a class="footer-link" href="professional-services.html">Professional Services</a></li>
              <li><a class="footer-link" href="industries.html">All industries</a></li>
            </ul>
          </nav>
          <nav class="footer-column" aria-labelledby="footer-company-heading">
            <h2 id="footer-company-heading" class="footer-heading">Company</h2>
            <ul>
              <li><a class="footer-link" href="about-us.html">About us</a></li>
              <li><a class="footer-link" href="how-we-work.html">How We Work</a></li>
              <li><a class="footer-link" href="case-studies.html">Case Studies</a></li>
              <li><a class="footer-link" href="insights.html">Blogs</a></li>
              <li><a class="footer-link" href="faq.html">FAQs</a></li>
              <li><a class="footer-link" href="https://www.linkedin.com/company/reach-first">LinkedIn ${footerArrow}</a></li>
            </ul>
            <a class="footer-consultation-link" href="book-consultation.html">Request a consultation by email ${footerArrow}</a>
          </nav>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 Reach First</p>
          <nav class="footer-legal" aria-label="Footer legal"><a href="privacy-policy.html">Privacy</a><a href="terms-conditions.html">Terms</a></nav>
          <a class="footer-back-top" href="#top">Back to top <span aria-hidden="true">&uarr;</span></a>
        </div>
      </div>
    </div>`;
}

// Keep each FAQ topic easy to scan by allowing one expanded answer per group.
document.querySelectorAll('.faq-page-list').forEach((list) => {
  const questions = [...list.querySelectorAll(':scope > details')];
  questions.forEach((question) => {
    question.addEventListener('toggle', () => {
      if (!question.open) return;
      questions.filter((other) => other !== question && other.open).forEach((other) => { other.open = false; });
    });
  });
});

// Shared header navigation. The existing page headers remain the semantic
// mounting point while this single implementation keeps every route in sync.
const siteHeader = document.querySelector('[data-site-header]');
if (siteHeader) {
  document.querySelector('#mobile-drawer')?.remove();

  const arrow = '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 10h12M11 5l5 5-5 5"/></svg>';
  const headerIcon = (content) => `<span class="mega-header-link-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${content}</svg></span>`;
  const headerIcons = {
    plan: headerIcon('<circle cx="6" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M8 17c5-1 3-8 8-10"/>'),
    workflow: headerIcon('<rect x="3" y="3" width="6" height="6" rx="1.5"/><rect x="15" y="15" width="6" height="6" rx="1.5"/><path d="M9 6h3a3 3 0 0 1 3 3v6M6 9v3a3 3 0 0 0 3 3h6"/>'),
    crm: headerIcon('<circle cx="8" cy="8" r="3"/><path d="M3.5 18c.7-3 2.2-4.5 4.5-4.5s3.8 1.5 4.5 4.5M15 7h6M15 11h4M15 15h5"/>'),
    support: headerIcon('<path d="M4 5h16v11H9l-5 4V5Z"/><path d="M8 10h8M8 13h5"/>'),
    voice: headerIcon('<path d="M8 4h3l2 5-2 2c1.2 2.4 2.9 4.1 5 5l2-2 4 2v3c0 1.1-.9 2-2 2C10.6 21 3 13.4 3 4c0-1.1.9-2 2-2h2"/>'),
    custom: headerIcon('<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><path d="M17.5 14v7M14 17.5h7"/>'),
    managed: headerIcon('<path d="M4 7h10M18 7h2M4 12h2M10 12h10M4 17h7M15 17h5"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="12" r="2"/><circle cx="13" cy="17" r="2"/>'),
    marketing: headerIcon('<path d="M4 19V9M10 19V5M16 19v-7M22 19H2M4 8l6-4 6 5 5-5"/>'),
    field: headerIcon('<path d="M3 12 12 4l9 8M6 10v10h12V10M9 20v-6h6v6"/>'),
    professional: headerIcon('<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V4h6v3M3 12h18M10 12v2h4v-2"/>')
  };
  siteHeader.innerHTML = `
    <div class="site-container header-row mega-header-row">
      <a class="header-brand mega-header-brand" href="./" aria-label="Reach First home">
        <img class="brand-logo" src="assets/images/reach-first-logo.svg" width="301" height="34" alt="Reach First">
      </a>
      <nav class="mega-header-nav" aria-label="Primary navigation">
        <div class="mega-header-menu mega-header-services">
          <a href="services.html">Services</a><button class="header-dropdown-toggle" type="button" aria-label="Show service links" aria-expanded="false" aria-controls="header-services-links">⌄</button>
          <div id="header-services-links" class="mega-header-dropdown" aria-label="Services navigation" inert>
            <div class="mega-header-dropdown-top"><span>Services</span><a href="services.html">View all services ${arrow}</a></div>
            <div class="mega-header-dropdown-grid">
              <a href="ai-consulting-automation-planning.html">${headerIcons.plan}<span>AI Consulting &amp; Automation Planning</span></a>
              <a href="business-workflow-automation.html">${headerIcons.workflow}<span>Business Workflow Automation</span></a>
              <a href="sales-crm-automation.html">${headerIcons.crm}<span>Sales &amp; CRM Automation</span></a>
              <a href="ai-agents-customer-support.html">${headerIcons.support}<span>AI Agents &amp; Customer Support</span></a>
              <a href="ai-voice-agents.html">${headerIcons.voice}<span>AI Voice Agents</span></a>
              <a href="custom-ai-applications-integrations.html">${headerIcons.custom}<span>Custom AI Applications &amp; Integrations</span></a>
              <a href="managed-ai-automation-support.html">${headerIcons.managed}<span>Managed AI &amp; Automation Support</span></a>
              <a href="digital-marketing-services.html">${headerIcons.marketing}<span>Digital Marketing Services</span></a>
            </div>
          </div>
        </div>
        <div class="mega-header-menu mega-header-industries">
          <a href="industries.html">Industries</a><button class="header-dropdown-toggle" type="button" aria-label="Show industry links" aria-expanded="false" aria-controls="header-industries-links">⌄</button>
          <div id="header-industries-links" class="mega-header-dropdown" aria-label="Industries navigation" inert>
            <div class="mega-header-dropdown-top"><span>Industries</span><a href="industries.html">View all industries ${arrow}</a></div>
            <div class="mega-header-dropdown-list">
              <a href="home-field-services.html">${headerIcons.field}<span><strong>Home &amp; Field Services</strong><small>Operations, scheduling, and customer workflows</small></span></a>
              <a href="professional-services.html">${headerIcons.professional}<span><strong>Professional Services</strong><small>Client delivery, documents, and team knowledge</small></span></a>
            </div>
          </div>
        </div>
        <a href="how-we-work.html">How We Work</a>
        <a href="case-studies.html">Case Studies</a>
        <a href="insights.html">Blogs</a>
        <a href="about-us.html">About us</a>
      </nav>
      <div class="mega-header-actions">
        <a class="button button-primary mega-header-cta" href="book-consultation.html">Request a consultation by email ${arrow}</a>

      </div>
    </div>
    `;

  const headerDropdownMenus = [...siteHeader.querySelectorAll(".mega-header-menu")];

  const setHeaderDropdown = (menu, open) => {
    menu.classList.toggle('is-open', open);
    menu.querySelector('button').setAttribute('aria-expanded', String(open));
    menu.querySelector('.mega-header-dropdown').inert = !open;
  };

  const closeHeaderDropdowns = (except = null) => {
    headerDropdownMenus.forEach((menu) => {
      if (menu !== except) setHeaderDropdown(menu, false);
    });
  };
  headerDropdownMenus.forEach((menu) => {
    menu.addEventListener('mouseenter', () => {
      closeHeaderDropdowns(menu);
      if (matchMedia('(hover: hover)').matches) setHeaderDropdown(menu, true);
    });
    menu.addEventListener('mouseleave', () => {
      if (!menu.contains(document.activeElement)) setHeaderDropdown(menu, false);
    });
    menu.addEventListener('focusin', (event) => {
      closeHeaderDropdowns(menu);
      if (event.target.closest('.mega-header-dropdown')) setHeaderDropdown(menu, true);
    });
    menu.addEventListener('focusout', () => {
      requestAnimationFrame(() => {
        if (!menu.contains(document.activeElement)) setHeaderDropdown(menu, false);
      });
    });
    menu.querySelector('button').addEventListener('click', () => {
      const open = !menu.classList.contains('is-open');
      closeHeaderDropdowns(menu);
      setHeaderDropdown(menu, open);
    });
  });

  const currentHeaderPage = location.pathname.split('/').pop() || 'index.html';
  siteHeader.querySelectorAll('.mega-header-nav a, .mega-header-cta').forEach((link) => {
    const linkPage = new URL(link.href, location.href).pathname.split('/').pop() || 'index.html';
    if (currentHeaderPage === linkPage) {
      link.classList.add('is-current');
      link.setAttribute('aria-current', 'page');
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      const open = headerDropdownMenus.find((menu) => menu.classList.contains('is-open'));
      if (open?.contains(document.activeElement)) open.querySelector('button').focus();
      closeHeaderDropdowns();
    }
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.mega-header-menu')) closeHeaderDropdowns();
  });

  const updateHeaderHeight = () => document.documentElement.style.setProperty('--header-height', `${siteHeader.offsetHeight}px`);
  new ResizeObserver(updateHeaderHeight).observe(siteHeader);
  updateHeaderHeight();
  const updateHeaderShadow = () => siteHeader.classList.toggle('is-scrolled', window.scrollY > 8);
  window.addEventListener('scroll', updateHeaderShadow, { passive: true });
  updateHeaderShadow();
}

// Email-only consultation: prepare locally, then let the visitor send the draft.
const consultationForm = document.querySelector('.consultation-request-form');
if (consultationForm) {
  const draft = document.querySelector('[data-consultation-draft]');
  const body = document.querySelector('#consultation-draft-body');
  const open = document.querySelector('[data-consultation-open]');
  const status = document.querySelector('[data-consultation-status]');
  consultationForm.addEventListener('input', () => {
    draft.hidden = true;
    status.textContent = '';
  });
  consultationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    for (const field of consultationForm.querySelectorAll('[required]')) {
      field.setCustomValidity(field.value.trim() ? '' : 'Please complete this field.');
      field.addEventListener('input', () => field.setCustomValidity(''), { once: true });
    }
    if (!consultationForm.reportValidity()) return;
    const values = [...new FormData(consultationForm)].map(([name, value]) => `${name}: ${String(value).trim() || 'Not provided'}`);
    body.value = 'Hello Reach First,\n\nI would like to discuss a consultation.\n\n' + values.join('\n\n');
    open.href = 'mailto:info@reachfirst.com?subject=' + encodeURIComponent('Reach First consultation request') + '&body=' + encodeURIComponent(body.value);
    draft.hidden = false;
    status.textContent = 'Draft prepared locally. Review it below, then send it from your email app. Nothing has been sent.';
    body.focus({ preventScroll: true });
    draft.scrollIntoView({ block: 'nearest', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  });
}

// Service-specific hero infographics. The original semantic label remains on the wrapper.
const serviceDetailVisual = document.querySelector('.detail-hero .detail-visual');
if (serviceDetailVisual) {
  const pageName = location.pathname.split('/').pop() || '';
  const serviceVisuals = {
    'ai-consulting-automation-planning.html': {
      variant: 'planning', kicker: 'Opportunity map', title: 'Practical roadmap',
      nodes: [
        ['01', 'Priorities', 'Clarify the business outcome and the decision the roadmap needs to support.'],
        ['02', 'Workflows', 'Map the current steps, handoffs, exceptions, and repeated work.'],
        ['03', 'Systems', 'Review available tools, access, data, and integration constraints.'],
        ['04', 'Oversight', 'Define where people review, approve, or handle exceptions.']
      ]
    },
    'business-workflow-automation.html': {
      variant: 'workflow', kicker: 'Connected sequence', title: 'Workflow routing',
      nodes: [
        ['01', 'Request', 'Capture the information required to begin the process.'],
        ['02', 'Route', 'Direct the work using agreed rules and ownership.'],
        ['03', 'Review', 'Pause for staff judgment when a decision or exception needs it.'],
        ['04', 'Update', 'Prepare the next task, notification, document, or system record.']
      ]
    },
    'sales-crm-automation.html': {
      variant: 'crm', kicker: 'Lead coordination', title: 'Sales workflow',
      nodes: [
        ['01', 'Enquiry', 'Bring eligible enquiries into one structured intake path.'],
        ['02', 'Qualify', 'Organize useful details before ownership is confirmed.'],
        ['03', 'Assign', 'Make responsibility and the next action visible.'],
        ['04', 'CRM', 'Keep the approved record and follow-up stage aligned.']
      ]
    },
    'ai-agents-customer-support.html': {
      variant: 'agents', kicker: 'Assisted resolution', title: 'AI assistance',
      nodes: [
        ['01', 'Question', 'Receive a routine customer or staff request.'],
        ['02', 'Knowledge', 'Use selected and maintained business information.'],
        ['03', 'Answer', 'Provide an eligible response or complete a defined step.'],
        ['04', 'Handoff', 'Escalate sensitive, uncertain, or out-of-scope situations.']
      ]
    },
    'ai-voice-agents.html': {
      variant: 'voice', kicker: 'Inbound call flow', title: 'Voice workflow',
      nodes: [
        ['01', 'Caller', 'Receive an inbound call within the agreed workflow.'],
        ['02', 'Intent', 'Collect details and identify the eligible request type.'],
        ['03', 'Schedule', 'Check defined information or prepare an appointment step.'],
        ['04', 'Staff', 'Route conversations that require human attention.']
      ]
    },
    'custom-ai-applications-integrations.html': {
      variant: 'custom', kicker: 'Purpose-built system', title: 'Custom solution',
      nodes: [
        ['01', 'Users', 'Design around the people, roles, and jobs the tool must support.'],
        ['02', 'Systems', 'Connect available platforms, APIs, and existing operations.'],
        ['03', 'Documents', 'Structure intake, review, search, and document movement.'],
        ['04', 'Data', 'Apply permissions and business logic to approved information.']
      ]
    },
    'managed-ai-automation-support.html': {
      variant: 'support', kicker: 'Ongoing operations', title: 'Managed support',
      nodes: [
        ['01', 'Monitor', 'Watch agreed workflows, connections, and operational signals.'],
        ['02', 'Maintain', 'Address planned upkeep and implementation changes.'],
        ['03', 'Support', 'Help the team use documented processes and raise issues.'],
        ['04', 'Improve', 'Review evidence and prioritize appropriate refinements.']
      ]
    },
    'digital-marketing-services.html': {
      variant: 'marketing', kicker: 'Connected growth system', title: 'Digital growth',
      nodes: [
        ['01', 'Audience', 'Define who the experience and campaigns need to reach.'],
        ['02', 'Brand', 'Create a consistent identity, message, and digital presence.'],
        ['03', 'Channels', 'Coordinate website, search, social, content, and advertising.'],
        ['04', 'Measure', 'Use agreed indicators to guide informed improvements.']
      ]
    }
  };
  const visual = serviceVisuals[pageName];
  if (visual) {
    const nodeMarkup = visual.nodes.map(([number, label, description], index) => `
      <button class="service-visual-node service-visual-node-${index + 1}" type="button" data-service-visual-node data-description="${description}" aria-pressed="${index === 0}">
        <span>${number}</span><strong>${label}</strong><i aria-hidden="true"></i>
      </button>`).join('');
    serviceDetailVisual.classList.add('is-service-visual', `service-visual--${visual.variant}`);
    serviceDetailVisual.innerHTML = `
      <div class="service-visual-toolbar" aria-hidden="true"><span><i></i><i></i><i></i></span><strong>${visual.kicker}</strong><em>Interactive model</em></div>
      <div class="service-visual-stage">
        <svg class="service-visual-lines" viewBox="0 0 520 340" preserveAspectRatio="none" aria-hidden="true"><path d="M260 170C210 170 185 72 92 72M260 170C310 170 335 72 428 72M260 170C210 170 185 268 92 268M260 170C310 170 335 268 428 268"/><circle cx="92" cy="72" r="3"/><circle cx="428" cy="72" r="3"/><circle cx="92" cy="268" r="3"/><circle cx="428" cy="268" r="3"/></svg>
        <div class="service-visual-core-panel" aria-hidden="true"><div class="service-visual-motif"><span></span><span></span><span></span><span></span><span></span></div><small>${visual.kicker}</small><strong>${visual.title}</strong></div>
        ${nodeMarkup}
      </div>
      <div class="service-visual-readout" aria-live="polite"><span>01</span><div><strong>${visual.nodes[0][1]}</strong><p>${visual.nodes[0][2]}</p></div><small>Focus or tap a stage</small></div>`;
    const nodes = [...serviceDetailVisual.querySelectorAll('[data-service-visual-node]')];
    const readoutNumber = serviceDetailVisual.querySelector('.service-visual-readout > span');
    const readoutTitle = serviceDetailVisual.querySelector('.service-visual-readout strong');
    const readoutCopy = serviceDetailVisual.querySelector('.service-visual-readout p');
    const selectNode = (node) => {
      nodes.forEach((item) => { item.classList.toggle('is-selected', item === node); item.setAttribute('aria-pressed', String(item === node)); });
      readoutNumber.textContent = node.querySelector('span').textContent;
      readoutTitle.textContent = node.querySelector('strong').textContent;
      readoutCopy.textContent = node.dataset.description;
    };
    nodes.forEach((node) => {
      node.addEventListener('click', () => selectNode(node));
      node.addEventListener('focus', () => selectNode(node));
      node.addEventListener('pointerenter', (event) => { if (event.pointerType === 'mouse') selectNode(node); });
    });
    selectNode(nodes[0]);
  }
}

// Industry-specific hero infographics for the Home & Field Services detail pages.
const industryHeroVisual = document.querySelector('.trade-hero .trade-hero-board');
if (industryHeroVisual) {
  const pageName = location.pathname.split('/').pop() || '';
  const industryVisuals = {
    'hvac-industry.html': {
      variant: 'hvac', kicker: 'Climate operations', title: 'Comfort control', signal: 'System balanced',
      icon: '<path d="M12 3v18M5.6 6.7l12.8 10.6M5.6 17.3 18.4 6.7"/><circle cx="12" cy="12" r="3.2"/>',
      nodes: [['01','Request','Capture the comfort issue, property details, and service priority.'],['02','Diagnose','Organize symptoms and equipment information for the technician.'],['03','Schedule','Match the job to the right availability and service window.'],['04','Follow up','Keep the customer informed from booking through completion.']]
    },
    'plumbing-industry.html': {
      variant: 'plumbing', kicker: 'Service flow', title: 'Response pipeline', signal: 'Crew routed',
      icon: '<path d="M4 5h8v5a4 4 0 0 0 4 4h4M7 2v6M4 18h7v3M17 11v6M20 11v6"/><circle cx="14.5" cy="18" r="1.5"/>',
      nodes: [['01','Issue','Collect the plumbing problem and urgency in a structured request.'],['02','Triage','Separate routine work from time-sensitive service needs.'],['03','Dispatch','Route the job details to the appropriate team member.'],['04','Update','Share clear booking and service-status information.']]
    },
    'electrical-industry.html': {
      variant: 'electrical', kicker: 'Connected service', title: 'Power workflow', signal: 'Circuit ready',
      icon: '<path d="m13 2-7 11h6l-1 9 7-12h-6l1-8Z"/><path d="M4 5h3M17 19h3"/>',
      nodes: [['01','Enquiry','Capture the project type, site details, and requested timing.'],['02','Scope','Organize load, access, and service information for review.'],['03','Assign','Direct the work to the right electrician or project queue.'],['04','Confirm','Keep approvals, scheduling, and completion steps visible.']]
    },
    'roofing-industry.html': {
      variant: 'roofing', kicker: 'Project visibility', title: 'Roofing pipeline', signal: 'Estimate prepared',
      icon: '<path d="m3 12 9-8 9 8M6 10v10h12V10M9 20v-6h6v6"/><path d="m5 13 7-6 7 6"/>',
      nodes: [['01','Lead','Capture property, roof, and service-request details.'],['02','Inspect','Coordinate assessment information and site availability.'],['03','Estimate','Prepare a consistent handoff for pricing and approval.'],['04','Project','Track scheduling and customer communication through the job.']]
    },
    'towing-industry.html': {
      variant: 'towing', kicker: 'Live dispatch', title: 'Roadside response', signal: 'Driver en route',
      icon: '<path d="M3 16h18M5 16l1.5-6h8l3 3H20l1 3"/><circle cx="8" cy="18" r="2"/><circle cx="18" cy="18" r="2"/><path d="M14 10V6h3M17 6l2 2"/>',
      nodes: [['01','Location','Capture where the vehicle is and the help being requested.'],['02','Vehicle','Organize vehicle, access, and destination details.'],['03','Dispatch','Send a clear job brief to the appropriate driver.'],['04','Status','Keep the customer and team aligned as the job progresses.']]
    },
    'construction-industry.html': {
      variant: 'construction', kicker: 'Field coordination', title: 'Project command', signal: 'Site synchronized',
      icon: '<path d="M4 20h16M6 20V9h12v11M9 9V5h6v4M9 13h2M13 13h2M9 17h2M13 17h2"/><path d="M3 9h18"/>',
      nodes: [['01','Enquiry','Collect project goals, location, and timing requirements.'],['02','Estimate','Move scope details into a consistent review and pricing flow.'],['03','Handoff','Share approved information with office and field teams.'],['04','Progress','Keep milestones, updates, and next actions organized.']]
    },
    'landscaping-industry.html': {
      variant: 'landscaping', kicker: 'Seasonal operations', title: 'Route planner', signal: 'Schedule growing',
      icon: '<path d="M12 21V9M12 14c-5 0-8-3-8-8 5 0 8 3 8 8ZM12 11c0-4 3-7 8-7 0 5-3 8-8 8"/><path d="M7 21h10"/>',
      nodes: [['01','Request','Capture the property, service, and seasonal need.'],['02','Quote','Organize measurements and scope for consistent estimating.'],['03','Schedule','Group approved work by timing, team, and service area.'],['04','Route','Give crews clear job details and customer notes.']]
    },
    'cleaning-industry.html': {
      variant: 'cleaning', kicker: 'Quality workflow', title: 'Clean operations', signal: 'Checklist complete',
      icon: '<path d="m12 3 1.4 4.1L17.5 8.5l-4.1 1.4L12 14l-1.4-4.1-4.1-1.4 4.1-1.4L12 3Z"/><path d="m18 13 .8 2.2L21 16l-2.2.8L18 19l-.8-2.2L15 16l2.2-.8L18 13ZM5 14l.7 1.8 1.8.7-1.8.7L5 19l-.7-1.8-1.8-.7 1.8-.7L5 14Z"/>',
      nodes: [['01','Space','Collect property type, size, access, and priorities.'],['02','Scope','Turn requirements into a clear cleaning checklist.'],['03','Team','Assign the right crew, timing, and job information.'],['04','Quality','Capture completion notes and follow-up actions.']]
    },
    'solar-industry.html': {
      variant: 'solar', kicker: 'Energy journey', title: 'Solar pipeline', signal: 'Energy flowing',
      icon: '<circle cx="12" cy="8" r="3"/><path d="M12 2v2M12 12v2M6 8H4M20 8h-2M7.8 3.8 6.4 2.4M17.6 13.6l-1.4-1.4M16.2 3.8l1.4-1.4M6.4 13.6l1.4-1.4M5 16h14l2 5H3l2-5Z"/>',
      nodes: [['01','Lead','Capture property, energy, and project-interest details.'],['02','Site','Coordinate eligibility information and assessment timing.'],['03','Design','Move qualified opportunities into review and proposal.'],['04','Install','Keep approvals, scheduling, and updates connected.']]
    },
    'moving-industry.html': {
      variant: 'moving', kicker: 'Moving coordination', title: 'Move command', signal: 'Crew on schedule',
      icon: '<path d="M3 7h11v10H3zM14 10h4l3 3v4h-7z"/><circle cx="7" cy="19" r="2"/><circle cx="18" cy="19" r="2"/><path d="M6 10h5M8.5 7v6"/>',
      nodes: [['01','Inventory','Collect origin, destination, timing, and move details.'],['02','Quote','Structure the information needed for a clear estimate.'],['03','Crew','Coordinate availability, equipment, and job instructions.'],['04','Move','Keep confirmations and status updates in one flow.']]
    },
    'renovation-industry.html': {
      variant: 'renovation', kicker: 'Project planning', title: 'Renovation flow', signal: 'Plan approved',
      icon: '<path d="M4 20h16M6 20V8l6-4 6 4v12M9 20v-6h6v6"/><path d="m15 5 4-3 3 3-4 4M18 2l3 3"/>',
      nodes: [['01','Vision','Capture project goals, spaces, and desired timing.'],['02','Estimate','Organize scope details for a consistent review.'],['03','Plan','Connect approvals, selections, and scheduling milestones.'],['04','Build','Keep clients and trades aligned as work progresses.']]
    },
    'property-services-industry.html': {
      variant: 'property', kicker: 'Property operations', title: 'Service hub', signal: 'Request resolved',
      icon: '<path d="M4 21V5h10v16M14 9h6v12M8 9h2M8 13h2M8 17h2M17 13h1M17 17h1"/><path d="M2 21h20"/>',
      nodes: [['01','Request','Capture the property, issue, priority, and access details.'],['02','Assign','Route the work to the right service team or vendor.'],['03','Inspect','Keep job information and completion evidence organized.'],['04','Close','Share status, document outcomes, and schedule follow-up.']]
    },
    'consulting-firms-industry.html': {
      variant: 'consulting', kicker: 'Client intelligence', title: 'Engagement map', signal: 'Opportunity aligned',
      icon: '<circle cx="12" cy="12" r="8"/><path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8 4.8-2.2Z"/><circle cx="12" cy="12" r="1"/>',
      nodes: [['01','Enquiry','Capture the client need, organization, timing, and area of interest.'],['02','Context','Prepare a concise brief with relevant account and opportunity details.'],['03','Review','Route the opportunity to the appropriate consultant for judgment.'],['04','Engage','Coordinate approved next steps, documents, and client communication.']]
    },
    'marketing-agencies-industry.html': {
      variant: 'agency', kicker: 'Agency operations', title: 'Campaign command', signal: 'Brief activated',
      icon: '<path d="m3 11 13-5v12L3 13v-2Z"/><path d="M16 9c2 0 4 1.3 4 3s-2 3-4 3M6 14l1.5 6h3L9 15"/>',
      nodes: [['01','Opportunity','Capture the prospect, growth goal, services, and timing.'],['02','Brief','Organize scope, brand context, assets, and approval requirements.'],['03','Review','Give strategy and delivery leads a clear decision-ready summary.'],['04','Deliver','Connect work, feedback, approvals, and reporting milestones.']]
    },
    'recruitment-businesses-industry.html': {
      variant: 'recruitment', kicker: 'Talent operations', title: 'Placement pipeline', signal: 'Match in review',
      icon: '<circle cx="8" cy="8" r="3"/><circle cx="17" cy="7" r="2.5"/><path d="M3 20v-2c0-3 2-5 5-5s5 2 5 5v2M14 14c3 0 6 1.5 6 5v1"/><path d="m15 11 1.5 1.5L20 9"/>',
      nodes: [['01','Role','Capture the client, position, requirements, and hiring context.'],['02','Intake','Structure role and candidate information for consistent review.'],['03','Match','Keep recruiter judgment central to shortlisting and communication.'],['04','Coordinate','Connect interviews, feedback, decisions, and follow-up.']]
    },
    'legal-services-industry.html': {
      variant: 'legal', kicker: 'Matter intake', title: 'Legal workflow', signal: 'Review protected',
      icon: '<path d="M12 3v18M6 6h12M8 6l-4 7h8L8 6ZM16 6l-4 7h8l-4-7ZM8 21h8"/>',
      nodes: [['01','Enquiry','Capture the prospective matter and contact information securely.'],['02','Checks','Prepare the details required for conflict and eligibility review.'],['03','Authorize','Keep legal judgment and acceptance decisions with qualified staff.'],['04','Handoff','Coordinate approved matter opening, documents, and communication.']]
    },
    'accounting-firms-industry.html': {
      variant: 'accounting', kicker: 'Practice workflow', title: 'Client ledger', signal: 'Checklist balanced',
      icon: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 11h2M14 11h2M8 15h2M14 15h2M8 18h2M14 18h2"/>',
      nodes: [['01','Enquiry','Capture the service need, entity, timing, and client context.'],['02','Checklist','Prepare the right document and information request for the work.'],['03','Review','Route complete context to the appropriate accountant.'],['04','Schedule','Coordinate recurring work, deadlines, and approved follow-up.']]
    },
    'advisory-teams-industry.html': {
      variant: 'advisory', kicker: 'Decision support', title: 'Advisory compass', signal: 'Direction clarified',
      icon: '<path d="M4 19V9M10 19V5M16 19v-7M22 19V3"/><path d="m3 7 6-3 6 5 7-7"/><circle cx="9" cy="4" r="1"/><circle cx="15" cy="9" r="1"/>',
      nodes: [['01','Need','Capture the decision, stakeholders, timing, and desired outcome.'],['02','Context','Assemble relevant information and prior relationship history.'],['03','Advise','Keep interpretation and recommendation with the advisory team.'],['04','Action','Coordinate approved actions, ownership, and follow-through.']]
    },
    'it-services-industry.html': {
      variant: 'it', kicker: 'Service operations', title: 'IT control plane', signal: 'Ticket synchronized',
      icon: '<rect x="4" y="4" width="16" height="6" rx="2"/><rect x="4" y="14" width="16" height="6" rx="2"/><path d="M8 7h.01M8 17h.01M12 7h5M12 17h5"/>',
      nodes: [['01','Request','Capture the issue, user, system, impact, and service context.'],['02','Context','Summarize technical details and approved account information.'],['03','Review','Route diagnosis and priority decisions to the right specialist.'],['04','Track','Connect delivery status, client updates, and resolution records.']]
    },
    'architecture-firms-industry.html': {
      variant: 'architecture', kicker: 'Design practice', title: 'Project blueprint', signal: 'Brief approved',
      icon: '<path d="M4 20V6l8-3 8 3v14M8 20v-5h8v5M8 8h2M14 8h2M8 11h2M14 11h2"/><path d="M2 20h20"/>',
      nodes: [['01','Discover','Capture project type, site, ambitions, timing, and stakeholders.'],['02','Brief','Organize requirements, documents, constraints, and key questions.'],['03','Review','Keep qualification and design direction with firm leadership.'],['04','Open','Coordinate approved project setup, communication, and milestones.']]
    },
    'engineering-consultancies-industry.html': {
      variant: 'engineering', kicker: 'Technical delivery', title: 'Engineering grid', signal: 'Resources aligned',
      icon: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/><circle cx="12" cy="12" r="7"/>',
      nodes: [['01','Enquiry','Capture the technical need, location, scope, and delivery timing.'],['02','Requirements','Prepare specifications, documents, constraints, and open questions.'],['03','Review','Route feasibility and resource decisions to qualified engineers.'],['04','Initiate','Coordinate approved delivery, reviews, documents, and milestones.']]
    },
    'training-providers-industry.html': {
      variant: 'training', kicker: 'Learning journey', title: 'Programme hub', signal: 'Cohort prepared',
      icon: '<path d="m3 9 9-5 9 5-9 5-9-5Z"/><path d="M7 12v5c3 2 7 2 10 0v-5M21 9v6"/>',
      nodes: [['01','Discover','Help learners or buyers find the relevant programme and format.'],['02','Register','Capture participant, organization, timing, and access information.'],['03','Review','Keep eligibility, exceptions, and delivery decisions with coordinators.'],['04','Deliver','Connect materials, attendance, communication, and follow-up.']]
    },
    'creative-studios-industry.html': {
      variant: 'creative', kicker: 'Creative production', title: 'Studio flow', signal: 'Concept in motion',
      icon: '<path d="m14 4 6 6L9 21H3v-6L14 4Z"/><path d="m12 6 6 6M3 21l5-5"/><circle cx="6" cy="18" r="1"/>',
      nodes: [['01','Explore','Capture the client, creative need, deliverables, and timing.'],['02','Brief','Organize brand context, references, assets, and approval criteria.'],['03','Review','Keep creative direction and feasibility decisions with the studio.'],['04','Produce','Connect tasks, feedback, versions, approvals, and delivery.']]
    },
    'b2b-service-firms-industry.html': {
      variant: 'b2b', kicker: 'Revenue delivery', title: 'Client lifecycle', signal: 'Account connected',
      icon: '<path d="M3 12h4l3-3 4 4 3-3h4"/><path d="m7 12 5 5 5-5M5 8l4-4 3 3 3-3 4 4M5 16l3 3M19 16l-3 3"/>',
      nodes: [['01','Enquiry','Capture the organization, need, stakeholders, and opportunity context.'],['02','Prepare','Organize qualification, account history, scope, and proposal inputs.'],['03','Review','Route commercial and delivery decisions to the appropriate team.'],['04','Onboard','Coordinate approved handoffs, communication, and relationship follow-up.']]
    }
  };
  const visual = industryVisuals[pageName];
  if (visual) {
    const nodeMarkup = visual.nodes.map(([number, label], index) => `
      <button class="industry-visual-node industry-visual-node-${index + 1}" type="button" data-industry-visual-node data-index="${index}" aria-pressed="${index === 0}">
        <span>${number}</span><strong>${label}</strong><i aria-hidden="true"></i>
      </button>`).join('');
    industryHeroVisual.classList.add('is-industry-visual', `industry-visual--${visual.variant}`);
    industryHeroVisual.innerHTML = `
      <div class="industry-visual-toolbar" aria-hidden="true"><span><i></i><i></i><i></i></span><strong>${visual.kicker}</strong><em>Interactive workflow</em></div>
      <div class="industry-visual-stage">
        <svg class="industry-visual-lines" viewBox="0 0 520 340" preserveAspectRatio="none" aria-hidden="true"><path pathLength="1" d="M260 170C207 170 184 72 92 72M260 170C313 170 336 72 428 72M260 170C207 170 184 268 92 268M260 170C313 170 336 268 428 268"/><circle cx="92" cy="72" r="3"/><circle cx="428" cy="72" r="3"/><circle cx="92" cy="268" r="3"/><circle cx="428" cy="268" r="3"/></svg>
        <div class="industry-visual-core" aria-hidden="true"><span class="industry-visual-orbit"></span><svg viewBox="0 0 24 24">${visual.icon}</svg><small>${visual.kicker}</small><strong>${visual.title}</strong><em>${visual.signal}</em></div>
        ${nodeMarkup}
      </div>
      <div class="industry-visual-readout" aria-live="polite"><span>01</span><div><strong>${visual.nodes[0][1]}</strong><p>${visual.nodes[0][2]}</p></div><small>Explore the workflow</small></div>`;
    const nodes = [...industryHeroVisual.querySelectorAll('[data-industry-visual-node]')];
    const readoutNumber = industryHeroVisual.querySelector('.industry-visual-readout > span');
    const readoutTitle = industryHeroVisual.querySelector('.industry-visual-readout strong');
    const readoutCopy = industryHeroVisual.querySelector('.industry-visual-readout p');
    const selectNode = (node) => {
      const index = Number(node.dataset.index);
      nodes.forEach((item) => {
        item.classList.toggle('is-selected', item === node);
        item.setAttribute('aria-pressed', String(item === node));
      });
      readoutNumber.textContent = visual.nodes[index][0];
      readoutTitle.textContent = visual.nodes[index][1];
      readoutCopy.textContent = visual.nodes[index][2];
    };
    nodes.forEach((node) => {
      node.addEventListener('click', () => selectNode(node));
      node.addEventListener('focus', () => selectNode(node));
      node.addEventListener('pointerenter', (event) => { if (event.pointerType === 'mouse') selectNode(node); });
    });
    selectNode(nodes[0]);
  }
}

// Progressive case-study links and reveal motion.
const actionTowingCard = [...document.querySelectorAll('.case-experience-grid article')]
  .find((card) => card.querySelector('h3')?.textContent.trim() === 'Action Towing');
if (actionTowingCard) {
  actionTowingCard.classList.add('has-case-link');
  const link = document.createElement('a');
  link.className = 'case-card-link';
  link.href = 'action-towing-case-study.html';
  link.innerHTML = 'View case study <svg aria-hidden="true"><use href="#c-arrow"></use></svg>';
  actionTowingCard.querySelector('small')?.replaceWith(link);
}

const caseRevealItems = document.querySelectorAll('[data-case-reveal]');
if (caseRevealItems.length) {
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  if (reducedMotion.matches || !('IntersectionObserver' in window)) {
    caseRevealItems.forEach((item) => item.classList.add('is-visible'));
  } else {
    const caseObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });
    caseRevealItems.forEach((item) => caseObserver.observe(item));
  }
}

// Decorative hero motion runs only when visible and appropriate for the device.
const heroMotion = document.querySelector('[data-hero-motion]');
if (heroMotion) {
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const artworkSize = matchMedia('(min-width: 640px)');
  let inView = false;
  const syncMotion = () => {
    const enabled = artworkSize.matches && !reducedMotion.matches;
    heroMotion.classList.toggle('is-motion-ready', enabled);
    heroMotion.classList.toggle('is-motion-running', enabled && inView && !document.hidden);
  };
  const observer = new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    syncMotion();
  }, { threshold: 0 });
  observer.observe(heroMotion);
  reducedMotion.addEventListener('change', syncMotion);
  artworkSize.addEventListener('change', syncMotion);
  document.addEventListener('visibilitychange', syncMotion);
  syncMotion();
}

// Short decorative stories. All explanatory copy is always available as HTML.
const opportunities = document.querySelector('#automation-opportunities');
if (opportunities) {
  const cards = [...opportunities.querySelectorAll('.opportunity')];
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const played = new Set();
  const frames = new Map();
  const play = (card) => {
    if (reducedMotion.matches) return;
    cancelAnimationFrame(frames.get(card));
    card.classList.remove('is-playing');
    frames.set(card, requestAnimationFrame(() => {
      frames.set(card, requestAnimationFrame(() => {
        if (!reducedMotion.matches) card.classList.add('is-playing');
        frames.delete(card);
      }));
    }));
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      target.classList.toggle('is-in-view', isIntersecting);
      if (isIntersecting && !played.has(target)) { played.add(target); play(target); }
    });
  }, { threshold: 0.25 });
  cards.forEach((card) => {
    observer.observe(card);
    card.addEventListener('pointerenter', (event) => {
      if (event.pointerType === 'mouse') play(card);
    });
  });
  const syncPreference = () => {
    if (reducedMotion.matches) cards.forEach((card) => {
      cancelAnimationFrame(frames.get(card));
      card.classList.remove('is-playing');
    });
  };
  const syncVisibility = () => opportunities.classList.toggle('is-tab-hidden', document.hidden);
  reducedMotion.addEventListener('change', syncPreference);
  document.addEventListener('visibilitychange', syncVisibility);
  syncPreference();
  syncVisibility();
}

// Fictional in-memory simulation only. No requests, persistence or message sending.
const demo = document.querySelector('[data-workflow-demo]');
if (demo) {
  const run = demo.querySelector('[data-demo-run]');
  const reset = demo.querySelector('[data-demo-reset]');
  const review = demo.querySelector('[data-demo-continue]');
  const reviewPanel = demo.querySelector('[data-demo-review]');
  const status = demo.querySelector('[data-demo-status]');
  const steps = [...demo.querySelectorAll('[data-demo-step]')];
  const outputs = [...demo.querySelectorAll('[data-demo-output]')];
  const phaseLabel = demo.querySelector('[data-demo-phase]');
  const count = demo.querySelector('[data-demo-count]');
  const reviewHeading = demo.querySelector('[data-demo-review-heading]');
  const reviewNote = demo.querySelector('[data-demo-review-note]');
  const outputKeys = ['input', 'details', 'record', 'notice', 'draft'];
  let timer;
  let phase = 'ready';
  const setPhase = (next, label) => {
    phase = next;
    demo.dataset.phase = next;
    phaseLabel.textContent = label;
    // Keep the initiating control in the tab order as the example runs.
    run.setAttribute('aria-disabled', String(next === 'running' || next === 'review'));
  };
  const showOutput = (key) => outputs.forEach((output) => {
    const inactive = output.dataset.demoOutput !== key;
    output.hidden = false;
    output.classList.toggle('is-inactive', inactive);
    output.inert = inactive;
    output.setAttribute('aria-hidden', String(inactive));
  });
  const setStep = (index, state, label) => {
    steps[index].dataset.state = state;
    steps[index].querySelector('.demo-step-state').textContent = label;
    if (state === 'current') steps[index].setAttribute('aria-current', 'step');
    else steps[index].removeAttribute('aria-current');
  };
  const initialize = (message) => {
    clearTimeout(timer);
    setPhase('ready', 'Ready to run');
    steps.forEach((_, i) => setStep(i, 'pending', 'Pending'));
    if (document.activeElement === review) reset.focus({ preventScroll: true });
    review.hidden = true;
    reviewPanel.classList.remove('is-awaiting');
    reviewHeading.textContent = 'People stay involved';
    reviewNote.textContent = 'The example pauses at stage 3 so you can review the sample record and routing.';
    count.textContent = 'Ready';
    showOutput('input');
    status.textContent = message;
  };
  const advance = (index) => {
    if (index > 0) setStep(index - 1, 'complete', index === 4 ? 'Previewed' : 'Complete');
    setStep(index, 'current', index === 2 ? 'Review needed' : 'Current step');
    count.textContent = `Stage ${index + 1} of 5`;
    showOutput(outputKeys[index]);
    if (index === 2) {
      setPhase('review', 'Staff review');
      review.hidden = false;
      reviewPanel.classList.add('is-awaiting');
      reviewHeading.textContent = 'Staff review required';
      reviewNote.textContent = 'Check the request, timing, and suggested queue. Continue only to preview the next steps.';
      status.textContent = 'Paused at stage 3. Review the sample record, then select “Review sample & continue”. Nothing has been saved or sent.';
    } else if (index === 4) {
      setStep(index, 'complete', 'Draft ready');
      setPhase('complete', 'Example complete');
      reviewHeading.textContent = 'Draft awaits staff approval';
      reviewNote.textContent = 'The example ends with a draft. No message is sent. Run it again or reset to the beginning.';
      status.textContent = 'Example complete: five stages demonstrated. The sample follow-up still needs staff approval. No record was saved and no message was sent.';
    } else {
      status.textContent = [
        'Stage 1 of 5: the fictional inspection enquiry is received in this browser example.',
        'Stage 2 of 5: request — routine equipment inspection. Preferred timing — next week.',
        '',
        'Stage 4 of 5: team notification preview prepared after your sample review. No notification is sent.'
      ][index];
      timer = setTimeout(() => advance(index + 1), 2000);
    }
  };
  run.addEventListener('click', () => {
    if (phase !== 'ready' && phase !== 'complete') return;
    initialize('Starting example.');
    setPhase('running', 'Example running');
    advance(0);
  });
  review.addEventListener('click', () => {
    if (phase !== 'review') return;
    setPhase('running', 'Example running');
    // This action removes its own control; return focus to the nearby Reset button.
    if (document.activeElement === review) reset.focus({ preventScroll: true });
    review.hidden = true;
    reviewPanel.classList.remove('is-awaiting');
    reviewHeading.textContent = 'Sample record reviewed';
    reviewNote.textContent = 'The remaining steps are previews. The final draft still needs staff approval.';
    advance(3);
  });
  reset.addEventListener('click', () => initialize('Example reset. Ready to run the fictional enquiry again.'));
  initialize('Run the example to follow one fictional enquiry. It pauses for staff review at stage 3.');
  demo.classList.add('is-enhanced');
  demo.querySelector('[data-demo-preview]').hidden = false;
  demo.querySelector('.demo-controls').hidden = false;
}
