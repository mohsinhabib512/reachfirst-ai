<?php defined( 'ABSPATH' ) || exit; ?>
<footer id="footer" class="site-footer">
    <div class="site-container footer-shell">
      <div class="footer-top">
        <div class="footer-introduction">
          <a class="footer-brand" href="<?php echo esc_url( home_url( '/' ) . '' ); ?>" aria-label="Reach First home"><img class="brand-logo" src="<?php echo esc_url( get_theme_file_uri( 'assets/images/reach-first-logo-original.jpg' ) . '' ); ?>" width="500" height="59" alt="Reach First" loading="lazy"></a>
          <p class="footer-description">Practical AI automation and integrations for growing service businesses.</p>
          <p class="footer-coverage"><span aria-hidden="true"></span>Serving Canada and the United States.</p>
        </div>
        <nav class="footer-contact" aria-labelledby="footer-contact-heading">
          <h2 id="footer-contact-heading" class="footer-heading">Contact</h2>
          <ul>
            <li><a class="footer-link footer-contact-link" href="mailto:info@reachfirst.com"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/></svg><span>info@reachfirst.com</span></a></li>
            <li><a class="footer-link footer-contact-link" href="tel:+18447773224"><svg aria-hidden="true"><use href="#rf-icon-phone"></use></svg><span>1-844-777-3224</span></a></li>
            <li class="footer-contact-action"><a class="footer-link footer-consultation" href="<?php echo esc_url( reachfirst_page_url( 'book-consultation' ) . '' ); ?>">Request a consultation by email<svg aria-hidden="true"><use href="#rf-icon-arrow-up-right"></use></svg></a></li>
          </ul>
        </nav>
      </div>
      <div class="footer-columns">
        <nav class="footer-services" aria-labelledby="footer-services-heading">
          <h2 id="footer-services-heading" class="footer-heading">Services</h2>
          <ul class="footer-service-list">
            <li><a class="footer-link" href="<?php echo esc_url( reachfirst_page_url( 'ai-consulting-automation-planning' ) . '' ); ?>">AI Consulting &amp; Automation Planning</a></li>
            <li><a class="footer-link" href="<?php echo esc_url( reachfirst_page_url( 'business-workflow-automation' ) . '' ); ?>">Business Workflow Automation</a></li>
            <li><a class="footer-link" href="<?php echo esc_url( reachfirst_page_url( 'sales-crm-automation' ) . '' ); ?>">Sales &amp; CRM Automation</a></li>
            <li><a class="footer-link" href="<?php echo esc_url( reachfirst_page_url( 'ai-agents-customer-support' ) . '' ); ?>">AI Agents &amp; Customer Support</a></li>
            <li><a class="footer-link" href="<?php echo esc_url( reachfirst_page_url( 'ai-voice-agents' ) . '' ); ?>">AI Voice Agents</a></li>
            <li><a class="footer-link" href="<?php echo esc_url( reachfirst_page_url( 'custom-ai-applications-integrations' ) . '' ); ?>">Custom AI Applications &amp; Integrations</a></li>
            <li><a class="footer-link" href="<?php echo esc_url( reachfirst_page_url( 'managed-ai-automation-support' ) . '' ); ?>">Managed AI &amp; Automation Support</a></li>
            <li><a class="footer-link" href="<?php echo esc_url( reachfirst_page_url( 'digital-marketing-services' ) . '' ); ?>">Digital Marketing Services</a></li>
          </ul>
        </nav>
        <nav aria-labelledby="footer-industries-heading">
          <h2 id="footer-industries-heading" class="footer-heading">Industries</h2>
          <ul>
            <li><a class="footer-link" href="<?php echo esc_url( reachfirst_page_url( 'home-field-services' ) . '' ); ?>">Home &amp; Field Services</a></li>
            <li><a class="footer-link" href="<?php echo esc_url( reachfirst_page_url( 'professional-services' ) . '' ); ?>">Professional Services</a></li>
          </ul>
        </nav>
        <nav aria-labelledby="company-heading">
          <h2 id="company-heading" class="footer-heading">Company</h2>
          <ul>
            <li><a class="footer-link" href="<?php echo esc_url( reachfirst_page_url( 'about-us' ) . '' ); ?>">About us</a></li>
            <li><a class="footer-link" href="<?php echo esc_url( reachfirst_page_url( 'insights' ) . '' ); ?>">Blogs</a></li>
            <li><a class="footer-link" href="https://www.linkedin.com/company/reach-first" aria-label="Reach First on LinkedIn">LinkedIn<svg class="footer-external-icon" aria-hidden="true"><use href="#rf-icon-arrow-up-right"></use></svg></a></li>
          </ul>
        </nav>
      </div>
      <div class="footer-bottom">
        <p>&copy; <?php echo esc_html( wp_date( 'Y' ) ); ?> Reach First. All rights reserved.</p>
        <nav aria-label="Footer legal" class="footer-legal">
          <a class="footer-link" href="<?php echo esc_url( reachfirst_page_url( 'privacy-policy' ) . '' ); ?>">Privacy Policy</a>
          <a class="footer-link" href="<?php echo esc_url( reachfirst_page_url( 'terms-conditions' ) . '' ); ?>">Terms of Service</a>
        </nav>
        <a class="footer-back-top" href="#top">Back to top<span aria-hidden="true"><svg><use href="#rf-icon-arrow-right"></use></svg></span></a>
      </div>
    </div>
  </footer>
<?php
$rf_urls = array();
foreach ( reachfirst_pages() as $rf_slug => $rf_data ) {
    $rf_urls[ $rf_slug . '.html' ] = reachfirst_page_url( $rf_slug );
}
?>
<script>window.reachfirst = <?php echo wp_json_encode( array( 'assets' => trailingslashit( get_theme_file_uri( 'assets' ) ), 'home' => home_url( '/' ), 'page' => reachfirst_source() . '.html', 'urls' => $rf_urls ), JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT ); ?>;</script>
<?php foreach ( reachfirst_page_data()['scripts'] ?? array( 'assets/js/main.js' ) as $rf_script ) : ?>
<script src="<?php echo esc_url( get_theme_file_uri( $rf_script ) ); ?>" defer></script>
<?php endforeach; ?>
<?php wp_footer(); ?>
</body>
</html>
