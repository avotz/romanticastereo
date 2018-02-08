<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package romanticastereo
 */

?>

	<div class="current-song">
      <div class="current-song-container">
       <?php dynamic_sidebar('sidebar-current-song'); ?>
      </div>
    </div>

	<div id="contact-popup" class="contact-popup white-popup mfp-hide mfp-with-anim">
		<h2>Contáctenos</h2>
		<?php echo do_shortcode('[contact-form-7 id="5" title="Contact form"]'); ?>               
	    
	</div>
	

<?php wp_footer(); ?>

</body>
</html>
