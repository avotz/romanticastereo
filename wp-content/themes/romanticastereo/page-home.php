<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package romanticastereo
 */

get_header(); ?>
    
	<div class="player">
      <div class="player-container">
       <?php dynamic_sidebar('sidebar-player'); ?>

        <span class="text-play">Dale play para escuchar <i class="fa fa-play"></i></span>
          <div id="player">
            <audio controls preload="none" autoplay class="player-mobile"><source src="http://144.217.76.188:8193/;" type="audio/aac"></audio>
            <!-- <div id="rtmp-player">
              <div id="sm-button-container" data-device-category="desktop" data-flash-mode="" data-url-static="/wp-content/themes/romanticastereo/" data-start="Inicio" data-error="Error" data-loading="Cargando..." data-play="Sonar" data-stop="Parar">
                <img src="<?php echo get_template_directory_uri(); ?>/img/player-icons/audio-stop.png" alt="Parar" id="sm-button-stop" class="sm-button" width="50" height="50" style="display: inline; padding: 26%;">
              </div>
                <input type="range" min="0" max="100" step="10" value="100" id="sm-volume-slider" />
              <div id="audio-status-container">
                <img src="https://cdn.webrad.io/images/player-icons/audio-on.png" width="35" data-state="On" height="50" id="sm-audio-icon">
              </div>
            </div> -->
          
          </div>

      </div>
    </div>
    <div class="main">

        <div class="banner">
            <div class="banner-container">
            <div class="banner-info">
                <div class="banner-logo">
                
                <img src="<?php echo get_template_directory_uri(); ?>/img/logo-circle.png">
                </div>
                <!-- <h1 class="animated fadeIn">Romantica Stereo</h1> -->
            
            </div>
            
            </div> 
            
        </div>

        
    </div>

<?php

get_footer();
