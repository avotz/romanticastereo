<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package romanticastereo
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<header class="header">
          <div class="header-container ">
              
              <!-- <a href="<?php echo esc_url(home_url('/')); ?>" class="header-logo"><img src="<?php echo get_template_directory_uri(); ?>/img/logo-white.png"></a> -->
			  <div class="tunein">
				Escúchenos tambien en <a href="https://tunein.com/radio/Romantica-Estereo-1021-s305352/" target="_blank"><img src="<?php echo get_template_directory_uri(); ?>/img/tunein-color.png" alt="Tune In Radio"></a>
				</div>
              <div class="header-right flex-container-sb">
			    
                <div class="header-contact">
                  <a href="http://ondabravaradio.com/">Onda Brava Radio</a>
				  <a href="https://www.facebook.com/Rom%C3%A1ntica-Est%C3%A9reo-315346035537237/"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-youtube"></i></a>
                  <a href="#contact-popup" class="contact-popup-link"><i class="fa fa-envelope-o"></i><span class="text">Contact Us</span></a>
                </div>
                <!-- <div class="header-btn-menu">
                   <button id="btn-menu" class="nav-btn-menu">
                       <i class="fa fa-bars"></i>
                   </button>
                </div> -->
              </div>
              
          </div>
          
      </header>
      <div class="nav-container">
          <?php
			wp_nav_menu(array(
				'theme_location' => 'header',
				'menu_id' => 'nav-menu',
				'container' => 'nav',
				'container_class' => 'nav-menu',
				'container_id' => '',
				'menu_class' => 'nav-menu-ul',
			));
			?>
        
    </div>
	
