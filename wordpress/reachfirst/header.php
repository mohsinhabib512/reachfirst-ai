<?php defined( 'ABSPATH' ) || exit; $rf_page = reachfirst_page_data(); ?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php if ( ! reachfirst_yoast_active() && ! empty( $rf_page['description'] ) ) : ?>
  <meta name="description" content="<?php echo esc_attr( html_entity_decode( $rf_page['description'], ENT_QUOTES, 'UTF-8' ) ); ?>">
  <?php endif; ?>
  <link rel="icon" href="<?php echo esc_url( get_theme_file_uri( 'assets/icons/favicon.png' ) ); ?>" type="image/png">
  <link rel="preload" href="<?php echo esc_url( get_theme_file_uri( 'assets/fonts/manrope-latin-variable.woff2' ) ); ?>" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="<?php echo esc_url( get_theme_file_uri( 'assets/css/styles.css' ) ); ?>">
  <link rel="stylesheet" href="<?php echo esc_url( get_stylesheet_uri() ); ?>">
  <?php wp_head(); ?>
</head>
<body id="top" <?php body_class( $rf_page['class'] ?? '' ); ?>>
<?php wp_body_open(); ?>
<svg class="icon-definitions" xmlns="http://www.w3.org/2000/svg" width="0" height="0" aria-hidden="true" focusable="false"><defs>
<symbol id="rf-icon-arrow-up-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></symbol>
<symbol id="rf-icon-arrow-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></symbol>
<symbol id="rf-icon-menu" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></symbol>
<symbol id="rf-icon-phone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></symbol>
<symbol id="rf-icon-workflow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/></symbol>
<symbol id="rf-icon-users" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></symbol>
<symbol id="rf-icon-map-pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></symbol>
<symbol id="rf-icon-shield-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3v8Z"/><path d="m9 12 2 2 4-4"/></symbol>
<symbol id="rf-icon-life-buoy" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24M14.83 14.83l4.24 4.24M14.83 9.17l4.24-4.24M14.83 9.17l3.53-3.53M4.93 19.07l4.24-4.24"/><circle cx="12" cy="12" r="4"/></symbol>
<symbol id="t-arrow-up" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10M7 17 17 7"/></symbol>
<symbol id="t-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></symbol>
<symbol id="t-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></symbol>
<symbol id="t-menu" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 5h16M4 12h16M4 19h16"/></symbol>
<symbol id="t-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 4 4L19 6"/></symbol>
<symbol id="c-arrow-up" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 7h10v10M7 17 17 7"/></symbol>
<symbol id="c-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14m-7-7 7 7-7 7"/></symbol>
<symbol id="c-menu" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 5h16M4 12h16M4 19h16"/></symbol>
<symbol id="c-phone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.7 2.6a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.7a2 2 0 0 1 2 2.3Z"/></symbol>
<symbol id="c-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 12 4 4L19 6"/></symbol>
<symbol id="c-map" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></symbol>
<symbol id="d-arrow-up" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10M7 17 17 7"/></symbol>
<symbol id="d-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></symbol>
<symbol id="d-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></symbol>
<symbol id="d-menu" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 5h16M4 12h16M4 19h16"/></symbol>
<symbol id="d-service" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/></symbol>
<symbol id="rf-icon-chevron-down" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></symbol>
<symbol id="rf-icon-mail" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.9 5.7a2 2 0 0 1-2.2 0L2 7"/></symbol>
<symbol id="rf-icon-message" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/></symbol>
<symbol id="rf-icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 4 4L19 6"/></symbol>
<symbol id="c-search" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></symbol>
<symbol id="c-layout" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></symbol>
<symbol id="c-chart" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-7"/></symbol>
<symbol id="c-target" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></symbol>
<symbol id="c-file" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></symbol>
<symbol id="c-shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></symbol>
<symbol id="t-workflow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/><path d="M10 6.5h4a3 3 0 0 1 3 3V14M14 17.5h-4a3 3 0 0 1-3-3V10"/></symbol>
<symbol id="t-phone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c1 .3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/></symbol>
<symbol id="f-arrow-up" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10M7 17 17 7"/></symbol>
<symbol id="f-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></symbol>
<symbol id="f-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></symbol>
<symbol id="f-menu" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16M4 12h16M4 19h16"/></symbol>
<symbol id="f-message" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/></symbol>
<symbol id="f-calendar" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v3m8-3v3M3 9h18"/><rect x="3" y="3" width="18" height="18" rx="2"/></symbol>
<symbol id="f-route" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/></symbol>
<symbol id="f-tool" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5-5L7.4 3.6l3 3 2.3-2.3a4 4 0 0 0 2 5L6 18l-3 3 3-3 8.7-8.7Z"/><path d="m15 15 6 6"/></symbol>
<symbol id="f-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 4 4L19 6"/></symbol>
<symbol id="f-phone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c1 .3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/></symbol>
<symbol id="f-chart" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-7"/></symbol>
<symbol id="f-database" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v7c0 1.7 4 3 9 3s9-1.3 9-3V5"/><path d="M3 12v7c0 1.7 4 3 9 3s9-1.3 9-3v-7"/></symbol>
<symbol id="f-megaphone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 18-5v12L3 14v-3Z"/><path d="m11.6 16.2.9 4.3-4 .9-1.3-6"/></symbol>
<symbol id="w-arrow-up" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10M7 17 17 7"/></symbol>
<symbol id="w-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></symbol>
<symbol id="w-menu" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16M4 12h16M4 19h16"/></symbol>
<symbol id="w-map" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z"/><path d="M9 3v15M15 6v15"/></symbol>
<symbol id="w-ruler" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 3 5 5L8 21l-5-5L16 3Z"/><path d="m8 11 2 2m1-5 2 2m1-5 2 2"/></symbol>
<symbol id="w-flask" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3"/><path d="M7.5 16h9"/></symbol>
<symbol id="w-blocks" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M17.5 14v7M14 17.5h7"/></symbol>
<symbol id="w-refresh" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7h-6V1"/><path d="M20 7a9 9 0 1 0 1 8"/></symbol>
<symbol id="w-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 4 4L19 6"/></symbol>
<symbol id="w-shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></symbol>
<symbol id="w-users" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/></symbol>
<symbol id="rf-icon-message-square" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
</symbol>
<symbol id="rf-icon-bell" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M10.268 21a2 2 0 0 0 3.464 0" />
  <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
</symbol>
<symbol id="rf-icon-folder-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
  <path d="m9 13 2 2 4-4" />
</symbol>
<symbol id="rf-icon-database" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <ellipse cx="12" cy="5" rx="9" ry="3" />
  <path d="M3 5V19A9 3 0 0 0 21 19V5" />
  <path d="M3 12A9 3 0 0 0 21 12" />
</symbol>
<symbol id="rf-icon-contact-round" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M16 2v2" />
  <path d="M17.915 21a6 6 0 10-12 0" />
  <path d="M8 2v2" />
  <circle cx="12" cy="11" r="4" />
  <rect x="3" y="3" width="18" height="18" rx="2" />
</symbol>
<symbol id="rf-icon-messages-square" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  <path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1" />
</symbol>
<symbol id="rf-icon-route" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="6" cy="19" r="3" />
  <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
  <circle cx="18" cy="5" r="3" />
</symbol>
<symbol id="rf-icon-blocks" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2" />
  <rect x="14" y="2" width="8" height="8" rx="1" />
</symbol>
<symbol id="rf-icon-settings-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M14 17H5" />
  <path d="M19 7h-9" />
  <circle cx="17" cy="17" r="3" />
  <circle cx="7" cy="7" r="3" />
</symbol>
<symbol id="rf-icon-calendar-days" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M8 2v3" />
  <path d="M16 2v3" />
  <rect x="3" y="3" width="18" height="18" rx="2" />
  <path d="M3 9h18" />
  <path d="M8 13h.01" />
  <path d="M12 13h.01" />
  <path d="M16 13h.01" />
  <path d="M8 17h.01" />
  <path d="M12 17h.01" />
  <path d="M16 17h.01" />
</symbol>
<symbol id="rf-icon-list-checks" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M13 5h8" />
  <path d="M13 12h8" />
  <path d="M13 19h8" />
  <path d="m3 17 2 2 4-4" />
  <path d="m3 7 2 2 4-4" />
</symbol>
<symbol id="i-arrow-up" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10M7 17 17 7"/></symbol>
<symbol id="i-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></symbol>
<symbol id="i-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></symbol>
<symbol id="i-menu" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16M4 12h16M4 19h16"/></symbol>
<symbol id="i-route" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/></symbol>
<symbol id="i-calendar" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v3m8-3v3M3 9h18"/><rect x="3" y="3" width="18" height="18" rx="2"/></symbol>
<symbol id="i-file" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></symbol>
<symbol id="i-message" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/></symbol>
<symbol id="i-workflow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/></symbol>
<symbol id="i-briefcase" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V4h8v3M3 12h18"/></symbol>
<symbol id="i-spark" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.4 4.1A5.5 5.5 0 0 1 7.1 10L3 12l4.1 1.4a5.5 5.5 0 0 1 3.5 3.5L12 21l1.4-4.1a5.5 5.5 0 0 1 3.5-3.5L21 12l-4.1-2a5.5 5.5 0 0 1-3.5-2.9L12 3Z"/></symbol>
<symbol id="i-search" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></symbol>
<symbol id="i-megaphone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 18-5v12L3 14v-3Z"/><path d="m11.6 16.1.8 4.2-4 .7-1-5.8"/></symbol>
<symbol id="i-window" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01"/></symbol>
<symbol id="l-arrow-up" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10M7 17 17 7"/></symbol>
<symbol id="l-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></symbol>
<symbol id="l-menu" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 5h16M4 12h16M4 19h16"/></symbol>
<symbol id="p-arrow-up" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10M7 17 17 7"/></symbol>
<symbol id="p-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></symbol>
<symbol id="p-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></symbol>
<symbol id="p-menu" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16M4 12h16M4 19h16"/></symbol>
<symbol id="p-user" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 22a8 8 0 0 1 16 0"/></symbol>
<symbol id="p-file" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></symbol>
<symbol id="p-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 4 4L19 6"/></symbol>
<symbol id="p-briefcase" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V4h8v3M3 12h18"/></symbol>
<symbol id="p-users" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/></symbol>
<symbol id="p-calendar" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v3m8-3v3M3 9h18"/><rect x="3" y="3" width="18" height="18" rx="2"/></symbol>
<symbol id="p-message" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/></symbol>
<symbol id="p-chart" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-7"/></symbol>
<symbol id="p-folder" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/></symbol>
<symbol id="p-spark" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.7 4.3L6 9l4.3 1.7L12 15l1.7-4.3L18 9l-4.3-1.7L12 3Z"/><path d="m5 16-.8 2.2L2 19l2.2.8L5 22l.8-2.2L8 19l-2.2-.8L5 16Z"/></symbol>
<symbol id="rf-icon-contact" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 2v2M8 2v2"/><circle cx="12" cy="11" r="4"/><rect x="3" y="3" width="18" height="18" rx="2"/></symbol>
<symbol id="rf-icon-settings" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z"/><circle cx="12" cy="12" r="3"/></symbol>
<symbol id="rf-icon-shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3v8Z"/><path d="m9 12 2 2 4-4"/></symbol>
</defs></svg>
<a class="skip-link" href="#main-content">Skip to content</a>
<header class="site-header" data-site-header>
    <div class="site-container header-row">
      <a class="header-brand" href="<?php echo esc_url( home_url( '/' ) . '' ); ?>" aria-label="Reach First home"><img class="brand-logo" src="<?php echo esc_url( get_theme_file_uri( 'assets/images/reach-first-logo-original.jpg' ) . '' ); ?>" width="500" height="59" alt="Reach First"></a>
      <nav aria-label="Primary" class="desktop-nav">
        <details class="nav-disclosure">
          <summary class="nav-link" aria-controls="desktop-services">Services<svg class="icon chevron" aria-hidden="true"><use href="#rf-icon-chevron-down"></use></svg></summary>
          <div id="desktop-services" class="nav-dropdown nav-mega">
            <div class="nav-services-heading"><span>Connected capabilities</span><small>Plan, automate, connect, support, and grow your business.</small></div>
            <div class="nav-mega-groups">
              <div><p class="nav-group-label">Automate everyday work</p><ul>
                <li><a href="<?php echo esc_url( reachfirst_page_url( 'business-workflow-automation' ) . '' ); ?>"><svg aria-hidden="true"><use href="#rf-icon-workflow"></use></svg><span>Business Workflow Automation<small>Connect tasks, approvals, and systems.</small></span></a></li>
                <li><a href="<?php echo esc_url( reachfirst_page_url( 'sales-crm-automation' ) . '' ); ?>"><svg aria-hidden="true"><use href="#rf-icon-contact-round"></use></svg><span>Sales &amp; CRM Automation<small>Coordinate enquiries and follow-ups.</small></span></a></li>
                <li><a href="<?php echo esc_url( reachfirst_page_url( 'ai-agents-customer-support' ) . '' ); ?>"><svg aria-hidden="true"><use href="#rf-icon-messages-square"></use></svg><span>AI Agents &amp; Customer Support<small>Assist customers with staff handoffs.</small></span></a></li>
                <li><a href="<?php echo esc_url( reachfirst_page_url( 'digital-marketing-services' ) . '' ); ?>"><svg aria-hidden="true"><use href="#rf-icon-route"></use></svg><span>Digital Marketing Services<small>Build visibility, demand, and measurable growth.</small></span></a></li>
              </ul></div>
              <div><p class="nav-group-label">Plan, build, and support</p><ul>
                <li><a href="<?php echo esc_url( reachfirst_page_url( 'ai-consulting-automation-planning' ) . '' ); ?>"><svg aria-hidden="true"><use href="#rf-icon-route"></use></svg><span>AI Consulting &amp; Automation Planning<small>Find opportunities and define a roadmap.</small></span></a></li>
                <li><a href="<?php echo esc_url( reachfirst_page_url( 'ai-voice-agents' ) . '' ); ?>"><svg aria-hidden="true"><use href="#rf-icon-phone"></use></svg><span>AI Voice Agents<small>Handle enquiries and appointment requests.</small></span></a></li>
                <li><a href="<?php echo esc_url( reachfirst_page_url( 'custom-ai-applications-integrations' ) . '' ); ?>"><svg aria-hidden="true"><use href="#rf-icon-blocks"></use></svg><span>Custom AI Applications &amp; Integrations<small>Build tools around your workflow.</small></span></a></li>
                <li><a href="<?php echo esc_url( reachfirst_page_url( 'managed-ai-automation-support' ) . '' ); ?>"><svg aria-hidden="true"><use href="#rf-icon-settings-2"></use></svg><span>Managed AI &amp; Automation Support<small>Maintain and improve your implementation.</small></span></a></li>
              </ul></div>
            </div>
            <div class="nav-mega-footer"><span>Start with the work you want to simplify.</span><a href="<?php echo esc_url( reachfirst_page_url( 'services' ) . '' ); ?>">Explore all services <svg class="icon" aria-hidden="true"><use href="#rf-icon-arrow-right"></use></svg></a></div>
          </div>
        </details>
        <details class="nav-disclosure">
          <summary class="nav-link" aria-controls="desktop-industries">Industries<svg class="icon chevron" aria-hidden="true"><use href="#rf-icon-chevron-down"></use></svg></summary>
          <ul id="desktop-industries" class="nav-dropdown">
            <li><a href="<?php echo esc_url( reachfirst_page_url( 'home-field-services' ) . '' ); ?>"><svg class="nav-item-icon" aria-hidden="true"><use href="#rf-icon-settings-2"></use></svg><span>Home &amp; Field Services<small>Enquiries, appointments, and quote follow-ups.</small></span></a></li>
            <li><a href="<?php echo esc_url( reachfirst_page_url( 'professional-services' ) . '' ); ?>"><svg class="nav-item-icon" aria-hidden="true"><use href="#rf-icon-folder-check"></use></svg><span>Professional Services<small>Onboarding, documents, and team knowledge.</small></span></a></li>
            <li><a href="<?php echo esc_url( reachfirst_page_url( 'industries' ) . '' ); ?>"><svg class="nav-item-icon" aria-hidden="true"><use href="#rf-icon-arrow-right"></use></svg><span>Explore all industries<small>See audiences, workflows, and relevant services.</small></span></a></li>
          </ul>
        </details>
        <a class="nav-link" href="<?php echo esc_url( reachfirst_page_url( 'how-we-work' ) . '' ); ?>">How We Work</a>
        <a class="nav-link" href="<?php echo esc_url( reachfirst_page_url( 'case-studies' ) . '' ); ?>">Case Studies</a>
        <a class="nav-link" href="<?php echo esc_url( reachfirst_page_url( 'insights' ) . '' ); ?>">Blogs</a>
        <a class="nav-link" href="<?php echo esc_url( reachfirst_page_url( 'about-us' ) . '' ); ?>">About</a>
        <a class="button button-primary" href="<?php echo esc_url( reachfirst_page_url( 'book-consultation' ) . '' ); ?>">Request a consultation by email<svg class="icon " aria-hidden="true"><use href="#rf-icon-arrow-up-right"></use></svg></a>
      </nav>
  </header>

