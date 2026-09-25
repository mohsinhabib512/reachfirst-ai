(() => {
  const section = document.querySelector('[data-delivery-section]');
  const process = section?.querySelector('[data-delivery-process]');

  if (!section || !process || !window.gsap || !window.ScrollTrigger) return;

  const { gsap, ScrollTrigger } = window;
  const introItems = section.querySelectorAll('.delivery-intro > *');
  const steps = [...section.querySelectorAll('[data-delivery-step]')];
  const progress = section.querySelector('[data-delivery-progress]');

  gsap.registerPlugin(ScrollTrigger);

  const media = gsap.matchMedia();
  media.add({
    desktop: '(min-width: 900px)',
    horizontal: '(min-width: 640px)',
    reduceMotion: '(prefers-reduced-motion: reduce)'
  }, (context) => {
    const { desktop, horizontal, reduceMotion } = context.conditions;
    if (reduceMotion) return;

    gsap.fromTo(introItems, {
      y: 18
    }, {
      y: 0,
      duration: 1.1,
      stagger: 0.14,
      ease: 'power3.out',
      immediateRender: false,
      clearProps: 'transform',
      scrollTrigger: {
        trigger: section,
        start: 'top 76%',
        once: true
      }
    });

    gsap.fromTo(steps, {
      x: desktop ? 34 : 0,
      y: desktop ? 0 : 20
    }, {
      x: 0,
      y: 0,
      duration: 1.05,
      stagger: 0.18,
      ease: 'power3.out',
      immediateRender: false,
      clearProps: 'transform',
      scrollTrigger: {
        trigger: process,
        start: 'top 78%',
        once: true
      }
    });

    const progressAxis = horizontal ? 'scaleX' : 'scaleY';
    gsap.fromTo(progress, { [progressAxis]: 0 }, {
      [progressAxis]: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: process,
        start: 'top 76%',
        end: horizontal ? 'bottom 48%' : 'bottom 42%',
        scrub: 1.15
      }
    });

    if (horizontal) {
      const activeSequence = gsap.timeline({
        scrollTrigger: {
          trigger: process,
          start: 'top 72%',
          once: true
        }
      });
      steps.forEach((step) => {
        activeSequence
          .call(() => {
            steps.forEach((item) => item.classList.remove('is-active'));
            step.classList.add('is-active');
          })
          .to({}, { duration: 0.32 });
      });
    } else {
      steps.forEach((step) => {
        ScrollTrigger.create({
          trigger: step,
          start: 'top 64%',
          end: 'bottom 42%',
          toggleClass: { targets: step, className: 'is-active' }
        });
      });
    }
  });

  requestAnimationFrame(() => ScrollTrigger.refresh());
  window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });

  window.addEventListener('pagehide', () => media.revert(), { once: true });
})();
