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
              <a class="button consultation-cta" href="book-consultation.html"><span>Book AI Consultation</span><span class="consultation-cta-icon" aria-hidden="true"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M7 7h10v10"/></svg></span></a>
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
  siteFooter.innerHTML = `
    <div class="site-container footer-shell">
      <div class="footer-panel">
        <div class="footer-main">
          <div class="footer-introduction">
            <a class="footer-brand" href="./" aria-label="Reach First home"><img class="brand-logo" src="assets/images/reach-first-logo-original.jpg" width="500" height="59" alt="Reach First" loading="lazy"></a>
            <p class="footer-tagline">AI automation for growing service businesses.</p>
            <p class="footer-description">Practical automation, connected technology, and digital growth support built around the way your business works.</p>
            <div class="footer-contact-compact">
              <a href="mailto:info@reachfirst.com">info@reachfirst.com</a>
              <a href="tel:+18447773224">1-844-777-3224</a>
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
              <li><a class="footer-link" href="https://www.linkedin.com/company/reach-first">LinkedIn ${footerArrow}</a></li>
            </ul>
            <a class="footer-consultation-link" href="book-consultation.html">Book AI Consultation ${footerArrow}</a>
          </nav>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 Reach First</p>
          <nav class="footer-legal" aria-label="Footer legal"><a href="https://www.reachfirst.com/privacy-policy/">Privacy</a><a href="https://www.reachfirst.com/terms-of-service/">Terms</a></nav>
          <a class="footer-back-top" href="#top">Back to top <span aria-hidden="true">&uarr;</span></a>
        </div>
      </div>
    </div>`;
}

const header = document.querySelector('[data-site-header]');
if (header) {
  header.querySelectorAll('a[href$="about-us.html"]').forEach((link) => {
    link.textContent = 'About us';
  });
  const navIcons = {
    workflow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/><path d="M6.5 10v4a3.5 3.5 0 0 0 3.5 3.5h4"/></svg>',
    crm: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0M16 8h5m-2.5-2.5V10.5M16.5 15.5l1.5 1.5 3-3"/></svg>',
    agent: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="6" width="16" height="13" rx="3"/><path d="M9 11h.01M15 11h.01M9 15h6M12 6V3M9 3h6"/></svg>',
    marketing: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 14-6v14L3 13zM17 9a4 4 0 0 1 0 6M6 14l1.5 6h4L10 13"/></svg>',
    planning: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/></svg>',
    voice: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6"/></svg>',
    custom: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/></svg>',
    support: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3z"/><path d="m9 12 2 2 4-4"/></svg>',
    field: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m3 10 9-7 9 7v10H8v-6h8v6M18.5 5.5l2-2"/></svg>',
    professional: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2"/></svg>',
    industries: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>'
  };
  const navIcon = (name) => `<span class="nav-icon-tile" aria-hidden="true">${navIcons[name]}</span>`;
  const menuDefinitions = {
    services: {
      label: 'Services',
      href: 'services.html',
      desktopContent: `
        <div class="nav-services-heading"><span>Connected capabilities</span><small>Plan, automate, connect, support, and grow your business.</small></div>
        <div class="nav-mega-groups">
          <div><p class="nav-group-label">Automate everyday work</p><ul>
            <li><a href="business-workflow-automation.html">${navIcon('workflow')}<span>Business Workflow Automation<small>Connect tasks, approvals, and systems.</small></span></a></li>
            <li><a href="sales-crm-automation.html">${navIcon('crm')}<span>Sales &amp; CRM Automation<small>Coordinate enquiries and follow-ups.</small></span></a></li>
            <li><a href="ai-agents-customer-support.html">${navIcon('agent')}<span>AI Agents &amp; Customer Support<small>Assist customers with staff handoffs.</small></span></a></li>
            <li><a href="managed-ai-automation-support.html">${navIcon('support')}<span>Managed AI &amp; Automation Support<small>Maintain and improve your implementation.</small></span></a></li>
          </ul></div>
          <div><p class="nav-group-label">Plan, build, and support</p><ul>
            <li><a href="ai-consulting-automation-planning.html">${navIcon('planning')}<span>AI Consulting &amp; Automation Planning<small>Find opportunities and define a roadmap.</small></span></a></li>
            <li><a href="ai-voice-agents.html">${navIcon('voice')}<span>AI Voice Agents<small>Handle enquiries and appointment requests.</small></span></a></li>
            <li><a href="custom-ai-applications-integrations.html">${navIcon('custom')}<span>Custom AI Applications &amp; Integrations<small>Build tools around your workflow.</small></span></a></li>
            <li><a href="digital-marketing-services.html">${navIcon('marketing')}<span>Digital Marketing Services<small>Build visibility, demand, and measurable growth.</small></span></a></li>
          </ul></div>
        </div>
        <div class="nav-mega-footer"><span>Start with the work you want to simplify.</span><a href="services.html">Explore all services <span class="nav-footer-arrow" aria-hidden="true">&rarr;</span></a></div>`,
      mobileContent: `
        <li><a href="ai-consulting-automation-planning.html">${navIcon('planning')}<span>AI Consulting &amp; Automation Planning</span></a></li>
        <li><a href="business-workflow-automation.html">${navIcon('workflow')}<span>Business Workflow Automation</span></a></li>
        <li><a href="sales-crm-automation.html">${navIcon('crm')}<span>Sales &amp; CRM Automation</span></a></li>
        <li><a href="ai-agents-customer-support.html">${navIcon('agent')}<span>AI Agents &amp; Customer Support</span></a></li>
        <li><a href="ai-voice-agents.html">${navIcon('voice')}<span>AI Voice Agents</span></a></li>
        <li><a href="custom-ai-applications-integrations.html">${navIcon('custom')}<span>Custom AI Applications &amp; Integrations</span></a></li>
        <li><a href="managed-ai-automation-support.html">${navIcon('support')}<span>Managed AI &amp; Automation Support</span></a></li>
        <li><a href="digital-marketing-services.html">${navIcon('marketing')}<span>Digital Marketing Services</span></a></li>`
    },
    industries: {
      label: 'Industries',
      href: 'industries.html',
      desktopContent: `
        <div class="nav-industries-heading"><span>Built around your operation</span><small>Explore connected systems for service businesses.</small></div>
        <ul class="nav-industries-list">
          <li><a href="home-field-services.html">${navIcon('field')}<span>Home &amp; Field Services<small>Enquiries, appointments, and quote follow-ups.</small></span></a></li>
          <li><a href="professional-services.html">${navIcon('professional')}<span>Professional Services<small>Onboarding, documents, and team knowledge.</small></span></a></li>
        </ul>
        <div class="nav-industries-footer"><a href="industries.html">${navIcon('industries')}<span>Explore all industries<small>See audiences, workflows, and relevant services.</small></span><span class="nav-footer-arrow" aria-hidden="true">&rarr;</span></a></div>`,
      mobileContent: `
        <li><a href="home-field-services.html">${navIcon('field')}<span>Home &amp; Field Services</span></a></li>
        <li><a href="professional-services.html">${navIcon('professional')}<span>Professional Services</span></a></li>
        <li><a href="industries.html">${navIcon('industries')}<span>Explore all industries</span></a></li>`
    }
  };
  const chevron = '<svg class="icon chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';
  const prepareMenu = (nav, key, mobileMenu) => {
    const definition = menuDefinitions[key];
    const existingDetails = [...nav.children].find((child) => child.matches?.('details.nav-disclosure') && child.querySelector(':scope > summary')?.textContent.trim().startsWith(definition.label));
    const originalLink = [...nav.children].find((child) => child.matches?.('a.nav-link') && child.textContent.trim() === definition.label);
    const source = existingDetails || originalLink;
    if (!source) return;
    const oldSummary = existingDetails?.querySelector(':scope > summary');
    const isCurrent = source.dataset.current === 'true' || source.classList.contains('is-current') || oldSummary?.classList.contains('is-current');
    const dropdown = document.createElement(mobileMenu ? 'ul' : 'div');
    dropdown.className = `nav-dropdown${!mobileMenu && key === 'services' ? ' nav-mega' : ''}${!mobileMenu && key === 'industries' ? ' nav-industries' : ''}`;
    dropdown.innerHTML = mobileMenu ? definition.mobileContent : definition.desktopContent;
    dropdown.id = `${mobileMenu ? 'mobile' : 'desktop'}-${key}`;
    const wrapper = document.createElement('div');
    wrapper.className = 'nav-menu';
    const pageLink = document.createElement('a');
    pageLink.className = `nav-link${isCurrent ? ' is-current' : ''}`;
    pageLink.href = definition.href;
    pageLink.textContent = definition.label;
    if (isCurrent) pageLink.setAttribute('aria-current', 'page');
    const menuToggle = document.createElement('button');
    menuToggle.className = 'nav-menu-toggle';
    menuToggle.type = 'button';
    menuToggle.setAttribute('aria-controls', dropdown.id);
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', `Open ${definition.label} menu`);
    menuToggle.dataset.menuLabel = definition.label;
    menuToggle.innerHTML = chevron;
    dropdown.hidden = true;
    wrapper.append(pageLink, menuToggle, dropdown);
    source.replaceWith(wrapper);
  };
  const desktopNavigation = header.querySelector('.desktop-nav');
  const mobileNavigation = header.querySelector('.mobile-nav-panel');
  const desktopCta = desktopNavigation?.querySelector(':scope > .button');
  if (desktopCta) {
    desktopCta.classList.add('header-cta');
    header.querySelector('.header-row')?.append(desktopCta);
  }
  Object.keys(menuDefinitions).forEach((key) => {
    prepareMenu(desktopNavigation, key, false);
    prepareMenu(mobileNavigation, key, true);
  });
  const navMenus = [...header.querySelectorAll('.nav-menu')];
  const closeMenu = (menu) => {
    menu.classList.remove('is-open');
    const toggle = menu.querySelector('.nav-menu-toggle');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', `Open ${toggle.dataset.menuLabel} menu`);
    menu.querySelector('.nav-dropdown').hidden = true;
  };
  const openMenu = (menu) => {
    navMenus.filter((other) => other !== menu && other.closest('nav') === menu.closest('nav')).forEach(closeMenu);
    menu.classList.add('is-open');
    const toggle = menu.querySelector('.nav-menu-toggle');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', `Close ${toggle.dataset.menuLabel} menu`);
    menu.querySelector('.nav-dropdown').hidden = false;
  };
  navMenus.forEach((menu) => {
    menu.querySelector('.nav-menu-toggle').addEventListener('click', () => {
      if (menu.classList.contains('is-open')) closeMenu(menu);
      else openMenu(menu);
    });
  });
  const mobile = header.querySelector('[data-mobile-nav]');
  const trigger = mobile.querySelector(':scope > summary');
  const drawer = document.querySelector('#mobile-drawer');
  const mobilePanel = mobile.querySelector('nav');
  const desktopQuery = matchMedia('(min-width: 1200px)');
  const useDrawer = Boolean(drawer && typeof drawer.showModal === 'function');
  if (useDrawer) {
    drawer.append(mobilePanel);
    trigger.setAttribute('aria-controls', drawer.id);
    trigger.setAttribute('aria-haspopup', 'dialog');
    trigger.setAttribute('aria-expanded', 'false');
  }
  const disclosures = [...header.querySelectorAll('details')];
  if (useDrawer) disclosures.push(...drawer.querySelectorAll('details'));
  const summary = (details) => details.querySelector(':scope > summary');
  const close = (details) => {
    details.open = false;
    summary(details).setAttribute('aria-expanded', 'false');
    details.querySelectorAll('details').forEach(close);
  };
  disclosures.forEach((details) => {
    summary(details).setAttribute('aria-expanded', String(details.open));
    details.addEventListener('toggle', () => {
      summary(details).setAttribute('aria-expanded', String(details.open));
      if (details.open && details.classList.contains('nav-disclosure')) {
        disclosures.filter((other) => other !== details && other.closest('nav') === details.closest('nav')).forEach(close);
      }
    });
  });
  const hoverQuery = matchMedia('(hover: hover) and (pointer: fine)');
  const hoverTimers = new Map();
  header.querySelectorAll('.desktop-nav > .nav-menu').forEach((menu) => {
    menu.addEventListener('pointerenter', () => {
      clearTimeout(hoverTimers.get(menu));
      if (!desktopQuery.matches || !hoverQuery.matches) return;
      openMenu(menu);
    });
    menu.addEventListener('pointerleave', () => {
      if (!hoverQuery.matches) return;
      hoverTimers.set(menu, setTimeout(() => {
        if (!menu.contains(document.activeElement)) closeMenu(menu);
      }, 180));
    });
  });
  const dismissDrawer = (restoreFocus = true) => {
    if (!useDrawer || !drawer.open) return;
    drawer.close();
    document.documentElement.classList.remove('drawer-is-open');
    trigger.setAttribute('aria-expanded', 'false');
    drawer.querySelectorAll('details').forEach(close);
    drawer.querySelectorAll('.nav-menu').forEach(closeMenu);
    if (restoreFocus) trigger.focus({ preventScroll: true });
  };
  if (useDrawer) {
    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      disclosures.forEach(close);
      const logoBounds = header.querySelector('.header-brand img').getBoundingClientRect();
      const triggerBounds = trigger.getBoundingClientRect();
      drawer.style.setProperty('--drawer-logo-width', `${logoBounds.width}px`);
      drawer.style.setProperty('--drawer-left', `${logoBounds.left}px`);
      drawer.style.setProperty('--drawer-right', `${innerWidth - triggerBounds.right}px`);
      drawer.style.setProperty('--drawer-header-height', `${header.offsetHeight}px`);
      trigger.setAttribute('aria-expanded', 'true');
      drawer.showModal();
      document.documentElement.classList.add('drawer-is-open');
      drawer.querySelector('.drawer-close').focus();
    });
    drawer.querySelector('.drawer-close').addEventListener('click', () => dismissDrawer());
    drawer.addEventListener('cancel', (event) => { event.preventDefault(); dismissDrawer(); });
    drawer.addEventListener('keydown', (event) => {
      if (event.key !== 'Tab') return;
      const focusable = [...drawer.querySelectorAll('button, a[href], summary')].filter((element) => element.getClientRects().length && !element.disabled);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    });
    drawer.addEventListener('click', (event) => {
      const bounds = drawer.getBoundingClientRect();
      if (event.target === drawer && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dismissDrawer();
    });
  }
  const onEscape = (event) => {
    if (event.key !== 'Escape') return;
    const openMenuElement = event.target.closest('.nav-menu.is-open');
    if (openMenuElement) {
      event.preventDefault();
      closeMenu(openMenuElement);
      openMenuElement.querySelector('.nav-menu-toggle').focus();
      return;
    }
    const containing = event.target.closest('details');
    const open = containing?.open ? containing : containing?.parentElement.closest('details[open]');
    if (open) {
      event.preventDefault();
      close(open);
      summary(open).focus();
    } else if (drawer.open) {
      event.preventDefault();
      dismissDrawer();
    }
  };
  header.addEventListener('keydown', onEscape);
  drawer.addEventListener('keydown', onEscape);
  const onNavigate = (event) => {
    const link = event.target.closest('a');
    if (!link) return;
    disclosures.forEach(close);
    navMenus.forEach(closeMenu);
    dismissDrawer(false);
    if (link.hash && link.origin === location.origin && link.pathname === location.pathname) {
      const target = document.getElementById(link.hash.slice(1));
      if (target) {
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    }
  };
  header.addEventListener('click', onNavigate);
  drawer.addEventListener('click', onNavigate);
  document.addEventListener('click', (event) => {
    if (useDrawer && (drawer.open || mobile.contains(event.target))) return;
    disclosures.filter((details) => details.open && !details.contains(event.target)).forEach(close);
    navMenus.filter((menu) => menu.classList.contains('is-open') && !menu.contains(event.target)).forEach(closeMenu);
  });
  header.addEventListener('focusout', () => {
    requestAnimationFrame(() => {
      disclosures.filter((details) => details.open && !details.contains(document.activeElement)).forEach(close);
      navMenus.filter((menu) => menu.classList.contains('is-open') && !menu.contains(document.activeElement)).forEach(closeMenu);
    });
  });
  desktopQuery.addEventListener('change', () => {
    const focused = header.contains(document.activeElement) || drawer.contains(document.activeElement);
    dismissDrawer(false);
    disclosures.forEach(close);
    navMenus.forEach(closeMenu);
    if (focused) header.querySelector('.header-brand').focus();
  });
  const updateHeight = () => document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);
  new ResizeObserver(updateHeight).observe(header);
  updateHeight();
  const updateShadow = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  window.addEventListener('scroll', updateShadow, { passive: true });
  updateShadow();
}

// Decorative hero motion: manual pause always takes precedence over visibility.
const heroMotion = document.querySelector('[data-hero-motion]');
if (heroMotion) {
  const control = heroMotion.querySelector('[data-hero-motion-toggle]');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const artworkSize = matchMedia('(min-width: 640px)');
  let manuallyPaused = false;
  let inView = false;
  const syncMotion = () => {
    const enabled = artworkSize.matches && !reducedMotion.matches;
    heroMotion.classList.toggle('is-motion-ready', enabled);
    heroMotion.classList.toggle('is-motion-running', enabled && inView && !document.hidden && !manuallyPaused);
    control.hidden = !enabled;
    control.dataset.paused = String(manuallyPaused);
    const action = manuallyPaused ? 'Resume animation' : 'Pause animation';
    control.setAttribute('aria-label', action);
    control.title = action;
  };
  control.addEventListener('click', () => { manuallyPaused = !manuallyPaused; syncMotion(); });
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
  const replay = opportunities.querySelector('[data-opportunities-replay]');
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
  replay.addEventListener('click', () => cards.forEach(play));
  const syncPreference = () => {
    replay.hidden = reducedMotion.matches;
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
