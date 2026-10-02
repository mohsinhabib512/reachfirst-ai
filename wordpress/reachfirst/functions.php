<?php
/** Theme support, URL helpers, and optional page setup. Assets load in header/footer. */
defined( 'ABSPATH' ) || exit;

add_action( 'after_setup_theme', function () {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'automatic-feed-links' );
    add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ) );
} );

function reachfirst_pages() {
    static $pages;
    if ( null === $pages ) {
        $pages = json_decode( file_get_contents( get_theme_file_path( 'pages.json' ) ), true );
    }
    return $pages;
}

function reachfirst_source() {
    if ( is_front_page() ) {
        return 'index';
    }
    if ( ! is_page() ) {
        return '';
    }
    $template = get_page_template_slug();
    if ( 'front-page.php' === $template ) {
        return 'index';
    }
    if ( preg_match( '/^page-([a-z0-9-]+)\.php$/', $template, $matches ) ) {
        return $matches[1];
    }
    return get_post_field( 'post_name', get_queried_object_id() );
}

function reachfirst_page_data() {
    return reachfirst_pages()[ reachfirst_source() ] ?? array();
}

function reachfirst_page_url( $slug ) {
    static $urls = array();
    if ( 'index' === $slug ) {
        return home_url( '/' );
    }
    if ( ! isset( $urls[ $slug ] ) ) {
        $page = get_page_by_path( $slug );
        $urls[ $slug ] = $page ? get_permalink( $page ) : home_url( '/' . $slug . '/' );
    }
    return $urls[ $slug ];
}

/** Yoast owns metadata whenever its plugin is loaded (including Premium). */
function reachfirst_yoast_active() {
    return defined( 'WPSEO_VERSION' );
}

add_filter( 'pre_get_document_title', function ( $title ) {
    if ( reachfirst_yoast_active() ) {
        return $title;
    }
    $data = reachfirst_page_data();
    return isset( $data['title'] ) ? html_entity_decode( $data['title'], ENT_QUOTES, 'UTF-8' ) : $title;
} );

add_action( 'admin_menu', function () {
    add_theme_page( 'Reach First Setup', 'Reach First Setup', 'manage_options', 'reachfirst-setup', 'reachfirst_setup_screen' );
} );

function reachfirst_setup_screen() {
    if ( ! current_user_can( 'manage_options' ) ) {
        return;
    }
    echo '<div class="wrap"><h1>Reach First Setup</h1>';
    if ( isset( $_POST['reachfirst_setup'] ) ) {
        check_admin_referer( 'reachfirst_setup' );
        $created = 0;
        $skipped = 0;
        $errors = array();
        foreach ( reachfirst_pages() as $source => $data ) {
            $slug = 'index' === $source ? 'home' : $source;
            if ( get_page_by_path( $slug ) ) {
                ++$skipped;
                continue;
            }
            $title = html_entity_decode( preg_replace( '/\s*\|.*$/', '', $data['title'] ), ENT_QUOTES, 'UTF-8' );
            $id = wp_insert_post( array(
                'post_type' => 'page',
                'post_status' => 'publish',
                'post_name' => $slug,
                'post_title' => 'index' === $source ? 'Home' : $title,
                'meta_input' => array( '_wp_page_template' => 'index' === $source ? 'front-page.php' : 'page-' . $source . '.php' ),
            ), true );
            if ( is_wp_error( $id ) ) {
                $errors[] = $id->get_error_message();
                continue;
            }
            ++$created;
            if ( 'index' === $source && ! get_option( 'page_on_front' ) ) {
                update_option( 'show_on_front', 'page' );
                update_option( 'page_on_front', $id );
            }
        }
        echo '<div class="notice notice-success"><p>' . esc_html( sprintf( 'Created %d pages. Skipped %d existing pages.', $created, $skipped ) ) . '</p></div>';
        foreach ( $errors as $error ) {
            echo '<div class="notice notice-error"><p>' . esc_html( $error ) . '</p></div>';
        }
    }
    echo '<p>Create and publish the supplied pages with their matching templates. Existing pages are left untouched. A newly created Home page becomes the front page only if no static front page is already selected.</p>';
    echo '<p>Page designs and text are maintained in the PHP templates. To use the WordPress editor for a new page, select the Default template and use a new slug.</p>';
    echo '<form method="post">';
    wp_nonce_field( 'reachfirst_setup' );
    submit_button( 'Create site pages', 'primary', 'reachfirst_setup' );
    echo '</form></div>';
}
