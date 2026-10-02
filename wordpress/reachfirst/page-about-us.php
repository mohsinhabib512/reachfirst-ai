<?php
/**
 * Template Name: Reach First — about us
 */
defined( 'ABSPATH' ) || exit;
get_header();
?>
<main id="main-content" tabindex="-1">
    <section class="about-hero section-space" aria-labelledby="about-heading">
      <div class="site-container about-hero-layout">
        <div class="about-hero-copy">
          <p class="eyebrow">About Reach First</p>
          <h1 id="about-heading">Technology changes. Good work still starts with <span>understanding people.</span></h1>
          <p>Reach First helps growing service businesses make everyday work simpler through practical AI automation, connected systems, and thoughtful implementation.</p>
          <div class="about-hero-actions">
            <a class="button button-primary" href="<?php echo esc_url( reachfirst_page_url( 'book-consultation' ) . '' ); ?>">Start a conversation<svg class="icon" aria-hidden="true"><use href="#rf-icon-arrow-up-right"></use></svg></a>
            <a class="about-text-link" href="#our-story">Our story<svg class="icon" aria-hidden="true"><use href="#rf-icon-arrow-right"></use></svg></a>
          </div>
        </div>
        <aside class="about-journey" role="img" aria-label="Reach First's evolution from its Edmonton digital roots in 2008 to practical AI and connected workflow work today, with people remaining central">
          <div class="about-journey-toolbar" aria-hidden="true"><span><i></i><i></i><i></i></span><strong>Reach First evolution</strong><em>Edmonton &middot; North America</em></div>
          <div class="about-journey-stage" aria-hidden="true">
            <svg class="about-journey-route" viewBox="0 0 540 360" preserveAspectRatio="none"><defs><linearGradient id="about-journey-gradient" x1="0" y1="1" x2="1" y2="0"><stop stop-color="#8bc9e6"/><stop offset=".52" stop-color="#0083c6"/><stop offset="1" stop-color="#49b8e8"/></linearGradient></defs><path class="about-route-shadow" d="M72 286C150 286 126 112 245 132C347 149 332 271 452 218C500 197 478 113 493 76"/><path class="about-route-line" d="M72 286C150 286 126 112 245 132C347 149 332 271 452 218C500 197 478 113 493 76"/><circle class="about-route-anchor" cx="72" cy="286" r="5"/><circle class="about-route-spark" cx="245" cy="132" r="5"/><circle class="about-route-anchor" cx="493" cy="76" r="5"/></svg>
            <div class="about-era-card about-era-start"><span><svg><use href="#rf-icon-map-pin"></use></svg></span><div><small>2008 &middot; Edmonton</small><strong>Digital roots</strong><em>Web, strategy, and growth</em></div></div>
            <div class="about-journey-pivot"><span></span><div><img src="<?php echo esc_url( get_theme_file_uri( 'assets/images/reach-first-r-mark.png' ) . '' ); ?>" width="500" height="500" alt=""></div><small>Learn &middot; Adapt &middot; Build</small></div>
            <div class="about-era-card about-era-today"><span><svg><use href="#rf-icon-workflow"></use></svg></span><div><small>Today &middot; North America</small><strong>Practical AI</strong><em>Automation and connected systems</em></div></div>
            <span class="about-journey-chip about-chip-digital">Digital foundation</span><span class="about-journey-chip about-chip-systems">Connected systems</span>
          </div>
          <div class="about-journey-footer" aria-hidden="true"><span><svg><use href="#rf-icon-users"></use></svg>People remain the constant</span><span>2008&nbsp;&nbsp;&rarr;&nbsp;&nbsp;Today&nbsp;&nbsp;&rarr;&nbsp;&nbsp;What&rsquo;s next</span></div>
        </aside>
      </div>
    </section>

    <section class="about-facts" aria-label="Reach First at a glance">
      <div class="site-container about-facts-grid">
        <div><strong>2008</strong><span>Where our story began</span></div>
        <div><strong>Edmonton</strong><span>Our Canadian home base</span></div>
        <div><strong>Canada + U.S.</strong><span>Businesses we serve</span></div>
      </div>
    </section>

    <section id="our-story" class="about-story section-space" aria-labelledby="story-heading">
      <div class="site-container about-story-layout">
        <div class="about-story-intro">
          <p class="eyebrow">Our story</p>
          <h2 id="story-heading">Built by learning what businesses need next.</h2>
          <p>Reach First began in Edmonton in 2008, initially focused on web design and online marketing. As the tools businesses rely on changed, our capabilities grew with them—from digital strategy and development to business automation and AI-enabled workflows.</p>
          <p>Today, we bring that practical, cross-disciplinary perspective to a focused question: how can technology remove friction from the work your team does every day?</p>
        </div>
        <ol class="about-timeline" aria-label="Reach First's evolution">
          <li><span>01</span><div><p>Our beginning</p><h3>Helping businesses build a stronger digital presence</h3></div></li>
          <li><span>02</span><div><p>Our evolution</p><h3>Connecting strategy, development, and business systems</h3></div></li>
          <li><span>03</span><div><p>Our focus today</p><h3>Making AI automation practical for growing teams</h3></div></li>
        </ol>
      </div>
    </section>

    <section class="about-belief section-space" aria-labelledby="belief-heading">
      <div class="site-container about-belief-layout">
        <div>
          <p class="eyebrow">What guides us</p>
          <h2 id="belief-heading">Useful technology should feel like a better way to work.</h2>
        </div>
        <div class="about-belief-copy">
          <p>We are interested in outcomes your team can understand and use—not automation for its own sake. That means learning the process first, working with the systems you already have, and keeping people involved wherever judgment matters.</p>
          <p>We start focused, test assumptions, and plan for the training and support that turn an implementation into an everyday capability.</p>
        </div>
      </div>
    </section>

    <section class="about-principles section-space" aria-labelledby="principles-heading">
      <div class="site-container">
        <div class="about-section-intro">
          <p class="eyebrow">How we show up</p>
          <h2 id="principles-heading">A practical partner from first conversation to ongoing use.</h2>
          <p>Four principles shape the way we approach each engagement.</p>
        </div>
        <ul class="about-principles-list">
          <li><span class="about-principle-icon"><svg aria-hidden="true"><use href="#rf-icon-users"></use></svg></span><div><span class="about-principle-number">01</span><h3>Listen before recommending</h3><p>Your workflow, priorities, and constraints come before the technology.</p></div></li>
          <li><span class="about-principle-icon"><svg aria-hidden="true"><use href="#rf-icon-workflow"></use></svg></span><div><span class="about-principle-number">02</span><h3>Connect the whole picture</h3><p>We consider the people, process, information, and systems around the work.</p></div></li>
          <li><span class="about-principle-icon"><svg aria-hidden="true"><use href="#rf-icon-shield-check"></use></svg></span><div><span class="about-principle-number">03</span><h3>Keep judgment in the loop</h3><p>Review points and staff handoffs are designed into the workflow where needed.</p></div></li>
          <li><span class="about-principle-icon"><svg aria-hidden="true"><use href="#rf-icon-life-buoy"></use></svg></span><div><span class="about-principle-number">04</span><h3>Stay for what comes next</h3><p>Training, documentation, support, and improvement are part of the plan.</p></div></li>
        </ul>
      </div>
    </section>

    <section class="about-team section-space" aria-labelledby="team-heading">
      <div class="site-container about-team-layout">
        <div class="about-team-visual" aria-hidden="true">
          <div class="team-orbit"><span><svg><use href="#rf-icon-users"></use></svg></span><i></i><i></i><i></i></div>
          <div class="team-label team-label-one">Strategy</div>
          <div class="team-label team-label-two">Automation</div>
          <div class="team-label team-label-three">Development</div>
        </div>
        <div class="about-team-copy">
          <p class="eyebrow">One connected team</p>
          <h2 id="team-heading">Different disciplines. One shared understanding of the work.</h2>
          <p>Useful automation rarely fits into a single box. Our work draws on business strategy, workflow design, development, systems integration, and the digital experience built over Reach First’s history.</p>
          <p>That range helps us translate between business needs and technical decisions—without losing sight of the people who will use what we build.</p>
          <a class="about-text-link" href="<?php echo esc_url( reachfirst_page_url( 'how-we-work' ) . '' ); ?>">See how we work<svg class="icon" aria-hidden="true"><use href="#rf-icon-arrow-right"></use></svg></a>
        </div>
      </div>
    </section>

    <section class="about-location section-space" aria-labelledby="location-heading">
      <div class="site-container about-location-panel">
        <div class="about-location-icon" aria-hidden="true"><svg><use href="#rf-icon-map-pin"></use></svg></div>
        <div><p class="eyebrow">Our home base</p><h2 id="location-heading">Based in Edmonton. Working across Canada and the United States.</h2></div>
        <p>We bring local context and a North American perspective to the way service businesses operate, communicate, and grow.</p>
      </div>
    </section>

    <section class="about-cta section-space" aria-labelledby="about-cta-heading">
      <div class="site-container">
        <div class="about-cta-panel">
          <div><p class="eyebrow">Let’s make the work simpler</p><h2 id="about-cta-heading">Tell us where your team is losing time.</h2><p>We’ll talk through the process, the systems involved, and whether automation is a useful next step.</p></div>
          <a class="button about-cta-button" href="<?php echo esc_url( reachfirst_page_url( 'book-consultation' ) . '' ); ?>">Book AI Consultation<svg class="icon" aria-hidden="true"><use href="#rf-icon-arrow-up-right"></use></svg></a>
        </div>
      </div>
    </section>
  </main>
<?php get_footer(); ?>
