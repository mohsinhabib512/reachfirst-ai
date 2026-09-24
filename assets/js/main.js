// Native disclosures remain operable by touch and keyboard without JavaScript.
const header = document.querySelector('[data-site-header]');
if (header) {
  const menuDefinitions = {
    services: {
      label: 'Services',
      href: 'services.html',
      desktopContent: `
        <div class="nav-mega-groups">
          <div><p class="nav-group-label">Automate everyday work</p><ul>
            <li><a href="business-workflow-automation.html"><span>Business Workflow Automation<small>Connect tasks, approvals, and systems.</small></span></a></li>
            <li><a href="sales-crm-automation.html"><span>Sales &amp; CRM Automation<small>Coordinate enquiries and follow-ups.</small></span></a></li>
            <li><a href="ai-agents-customer-support.html"><span>AI Agents &amp; Customer Support<small>Assist customers with staff handoffs.</small></span></a></li>
            <li><a href="digital-marketing-services.html"><span>Digital Marketing Services<small>Build visibility, demand, and measurable growth.</small></span></a></li>
          </ul></div>
          <div><p class="nav-group-label">Plan, build, and support</p><ul>
            <li><a href="ai-consulting-automation-planning.html"><span>AI Consulting &amp; Automation Planning<small>Find opportunities and define a roadmap.</small></span></a></li>
            <li><a href="ai-voice-agents.html"><span>AI Voice Agents<small>Handle enquiries and appointment requests.</small></span></a></li>
            <li><a href="custom-ai-applications-integrations.html"><span>Custom AI Applications &amp; Integrations<small>Build tools around your workflow.</small></span></a></li>
            <li><a href="managed-ai-automation-support.html"><span>Managed AI &amp; Automation Support<small>Maintain and improve your implementation.</small></span></a></li>
          </ul></div>
        </div>
        <div class="nav-mega-footer"><span>Start with the work you want to simplify.</span><a href="services.html">Explore all services <span aria-hidden="true">&rarr;</span></a></div>`,
      mobileContent: `
        <li><a href="ai-consulting-automation-planning.html">AI Consulting &amp; Automation Planning</a></li>
        <li><a href="business-workflow-automation.html">Business Workflow Automation</a></li>
        <li><a href="sales-crm-automation.html">Sales &amp; CRM Automation</a></li>
        <li><a href="ai-agents-customer-support.html">AI Agents &amp; Customer Support</a></li>
        <li><a href="ai-voice-agents.html">AI Voice Agents</a></li>
        <li><a href="custom-ai-applications-integrations.html">Custom AI Applications &amp; Integrations</a></li>
        <li><a href="managed-ai-automation-support.html">Managed AI &amp; Automation Support</a></li>
        <li><a href="digital-marketing-services.html">Digital Marketing Services</a></li>`
    },
    industries: {
      label: 'Industries',
      href: 'industries.html',
      desktopContent: `
        <li><a href="home-field-services.html"><span>Home &amp; Field Services<small>Enquiries, appointments, and quote follow-ups.</small></span></a></li>
        <li><a href="professional-services.html"><span>Professional Services<small>Onboarding, documents, and team knowledge.</small></span></a></li>
        <li><a href="industries.html"><span>Explore all industries<small>See audiences, workflows, and relevant services.</small></span></a></li>`,
      mobileContent: `
        <li><a href="home-field-services.html">Home &amp; Field Services</a></li>
        <li><a href="professional-services.html">Professional Services</a></li>
        <li><a href="industries.html">Explore all industries</a></li>`
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
    const dropdown = existingDetails?.querySelector(':scope > .nav-dropdown') || document.createElement(mobileMenu ? 'ul' : key === 'services' ? 'div' : 'ul');
    dropdown.className = `nav-dropdown${!mobileMenu && key === 'services' ? ' nav-mega' : ''}`;
    dropdown.innerHTML = existingDetails ? dropdown.innerHTML : mobileMenu ? definition.mobileContent : definition.desktopContent;
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
  const useDrawer = typeof drawer.showModal === 'function';
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
