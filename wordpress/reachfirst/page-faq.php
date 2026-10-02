<?php
/**
 * Template Name: Reach First — faq
 */
defined( 'ABSPATH' ) || exit;
get_header();
?>
<main id="main-content" tabindex="-1">
    <section class="faq-page-hero section-space" aria-labelledby="faq-page-heading">
      <div class="site-container faq-page-hero-layout">
        <div class="faq-page-hero-copy">
          <p class="eyebrow">Frequently asked questions</p>
          <h1 id="faq-page-heading">Clear answers before you take the <span>next step.</span></h1>
          <p>Learn how we approach AI automation, connected systems, digital marketing, project delivery, and ongoing support for growing service businesses.</p>
          <div class="faq-page-actions"><a class="button button-primary" href="#faq-directory">Browse questions<svg class="icon faq-down-arrow" aria-hidden="true"><use href="#rf-icon-arrow-right"></use></svg></a><a class="faq-page-text-link" href="<?php echo esc_url( reachfirst_page_url( 'book-consultation' ) . '' ); ?>">Ask us directly<svg class="icon" aria-hidden="true"><use href="#rf-icon-arrow-up-right"></use></svg></a></div>
        </div>
        <div class="faq-question-map" role="img" aria-label="Four common question areas connected to Reach First: planning, delivery, technology, and support">
          <div class="faq-map-toolbar" aria-hidden="true"><span><i></i><i></i><i></i></span><strong>Questions, organized</strong><em>04 topics</em></div>
          <div class="faq-map-stage" aria-hidden="true">
            <svg viewBox="0 0 520 340" preserveAspectRatio="none"><path d="M260 170C212 170 194 86 124 77M260 170C308 170 326 86 396 77M260 170C212 170 194 254 124 263M260 170C308 170 326 254 396 263"/><circle cx="124" cy="77" r="4"/><circle cx="396" cy="77" r="4"/><circle cx="124" cy="263" r="4"/><circle cx="396" cy="263" r="4"/></svg>
            <div class="faq-map-core"><span></span><img src="<?php echo esc_url( get_theme_file_uri( 'assets/images/reach-first-r-mark.png' ) . '' ); ?>" width="500" height="500" alt=""></div>
            <div class="faq-map-node faq-map-plan"><small>01</small><strong>Planning &amp; fit</strong><span>Where to begin</span></div>
            <div class="faq-map-node faq-map-delivery"><small>02</small><strong>Delivery</strong><span>How work moves</span></div>
            <div class="faq-map-node faq-map-tech"><small>03</small><strong>Technology</strong><span>Tools and safeguards</span></div>
            <div class="faq-map-node faq-map-support"><small>04</small><strong>Support</strong><span>What comes next</span></div>
          </div>
          <div class="faq-map-status" aria-hidden="true"><span><i></i>Start with your question</span><span>Clear scope &middot; Practical next step</span></div>
        </div>
      </div>
    </section>

    <nav class="faq-topic-index" aria-label="FAQ topics">
      <div class="site-container faq-topic-grid">
        <a href="#getting-started"><span>01</span><strong>Planning &amp; fit</strong><small>Goals, readiness, and where to begin</small></a>
        <a href="#working-together"><span>02</span><strong>Delivery</strong><small>Scope, timing, and collaboration</small></a>
        <a href="#technology-responsibility"><span>03</span><strong>Technology</strong><small>Systems, data, and human review</small></a>
        <a href="#after-launch"><span>04</span><strong>Support &amp; growth</strong><small>Training, maintenance, and improvement</small></a>
      </div>
    </nav>

    <section id="faq-directory" class="faq-directory section-space" aria-labelledby="faq-directory-heading">
      <div class="site-container">
        <div class="faq-directory-intro"><p class="eyebrow">What you may be wondering</p><h2 id="faq-directory-heading">Practical questions about working with Reach First.</h2><p>Every engagement depends on the business, systems, people, and priorities involved. These answers explain our general approach.</p></div>

        <div class="faq-category" id="getting-started">
          <div class="faq-category-heading"><span><b>01</b></span><p>Planning &amp; fit</p><h2>Finding the right place to begin.</h2></div>
          <div class="faq-page-list">
            <details open><summary>What does Reach First help businesses with?<span class="faq-toggle" aria-hidden="true"></span></summary><div class="faq-page-answer"><p>We help service businesses improve how work moves through their teams and systems. That can include AI and automation planning, workflow and CRM automation, AI agents, voice agents, custom applications and integrations, managed support, and coordinated digital marketing.</p></div></details>
            <details><summary>How do we know which service to start with?<span class="faq-toggle" aria-hidden="true"></span></summary><div class="faq-page-answer"><p>Start with the outcome or friction you can describe most clearly. If the opportunity is still broad, AI consulting and automation planning can help identify priorities. If a specific process, customer journey, or growth challenge is already visible, we can assess the most relevant service directly.</p></div></details>
            <details><summary>Do we need a technical brief before contacting you?<span class="faq-toggle" aria-hidden="true"></span></summary><div class="faq-page-answer"><p>No. A useful first conversation can begin with one process that takes too much time, one customer journey that feels disconnected, or one business goal that is difficult to support with your current systems.</p></div></details>
            <details><summary>What kinds of businesses do you work with?<span class="faq-toggle" aria-hidden="true"></span></summary><div class="faq-page-answer"><p>Our work is designed primarily for growing service businesses, including home and field service companies and professional service firms across Canada and the United States. Fit depends more on the workflow and goals than on a particular company size.</p></div></details>
          </div>
        </div>

        <div class="faq-category" id="working-together">
          <div class="faq-category-heading"><span><b>02</b></span><p>Delivery</p><h2>Understanding scope, timing, and collaboration.</h2></div>
          <div class="faq-page-list">
            <details><summary>What happens during the first consultation?<span class="faq-toggle" aria-hidden="true"></span></summary><div class="faq-page-answer"><p>We discuss the current workflow or growth challenge, the people involved, the tools already in use, and the result you want. The goal is to understand the situation and determine whether there is a practical next step—not to force a predetermined solution.</p></div></details>
            <details><summary>How are project cost and timing determined?<span class="faq-toggle" aria-hidden="true"></span></summary><div class="faq-page-answer"><p>They depend on scope, system access, integration options, data readiness, workflow complexity, design or content requirements, testing, training, and support needs. We clarify those factors before proposing the work.</p></div></details>
            <details><summary>Do we need to begin with a large project?<span class="faq-toggle" aria-hidden="true"></span></summary><div class="faq-page-answer"><p>No. A focused workflow, integration, customer journey, campaign, or internal tool is often the clearest way to begin. A smaller starting point can make assumptions, responsibilities, and measures of progress easier to evaluate.</p></div></details>
            <details><summary>How involved will our team need to be?<span class="faq-toggle" aria-hidden="true"></span></summary><div class="faq-page-answer"><p>Your team provides the operational context that makes the work useful. We typically need input from process owners, system administrators, subject-matter experts, and the people who will review or use the result. The exact involvement is defined with the scope.</p></div></details>
          </div>
        </div>

        <div class="faq-category" id="technology-responsibility">
          <div class="faq-category-heading"><span><b>03</b></span><p>Technology &amp; responsibility</p><h2>Connecting systems without losing human judgment.</h2></div>
          <div class="faq-page-list">
            <details><summary>Can you work with the software we already use?<span class="faq-toggle" aria-hidden="true"></span></summary><div class="faq-page-answer"><p>Often, but compatibility must be assessed. We review available APIs, permissions, data access, vendor limitations, and the reliability of the proposed connection before recommending an integration path.</p></div></details>
            <details><summary>Will AI replace our staff or make decisions on its own?<span class="faq-toggle" aria-hidden="true"></span></summary><div class="faq-page-answer"><p>That is not the default goal. We look for ways to reduce repetitive coordination and prepare useful information while keeping people responsible for judgment, exceptions, sensitive communication, approvals, and commitments.</p></div></details>
            <details><summary>How do you approach privacy and security?<span class="faq-toggle" aria-hidden="true"></span></summary><div class="faq-page-answer"><p>Requirements are assessed for each project. Before implementation, we identify the data involved, access permissions, system boundaries, retention needs, vendors, review points, and operational responsibilities. Recommendations depend on your obligations and current environment.</p></div></details>
            <details><summary>How do you manage AI accuracy and risk?<span class="faq-toggle" aria-hidden="true"></span></summary><div class="faq-page-answer"><p>We define approved information sources, clear task boundaries, testing scenarios, exception paths, and human review where the consequence of an error matters. AI output should be evaluated in the context in which it will be used.</p></div></details>
          </div>
        </div>

        <div class="faq-category" id="after-launch">
          <div class="faq-category-heading"><span><b>04</b></span><p>Support &amp; growth</p><h2>Keeping the work useful after launch.</h2></div>
          <div class="faq-page-list">
            <details><summary>What happens after an automation goes live?<span class="faq-toggle" aria-hidden="true"></span></summary><div class="faq-page-answer"><p>We review the agreed workflow, handoffs, exceptions, and indicators. Documentation, training, monitoring, maintenance, and planned improvements can be included so the implementation remains useful as the business changes.</p></div></details>
            <details><summary>Do you provide training and documentation?<span class="faq-toggle" aria-hidden="true"></span></summary><div class="faq-page-answer"><p>They can be built into the engagement. The right format depends on who will operate, review, maintain, and improve the system. We define those responsibilities as part of the implementation plan.</p></div></details>
            <details><summary>Can you improve an automation or system we already have?<span class="faq-toggle" aria-hidden="true"></span></summary><div class="faq-page-answer"><p>Potentially. We first review how it currently works, where it fails or creates friction, what access and documentation exist, and whether improving it is more practical than replacing a portion of it.</p></div></details>
            <details><summary>Can digital marketing and automation work together?<span class="faq-toggle" aria-hidden="true"></span></summary><div class="faq-page-answer"><p>Yes, when the connection supports a clear customer journey. Marketing can create and capture demand, while connected workflows can organize enquiries, assignments, follow-up, and reporting. The handoffs and permissions still need to be designed carefully.</p></div></details>
          </div>
        </div>
      </div>
    </section>
  </main>
<?php get_footer(); ?>
