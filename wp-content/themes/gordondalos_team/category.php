
<?php  get_header(); ?>


<!--����-->
<?php include"parts/menu.php"?>

<!--�������� �� �������-->
<section class="section_2">
	<?php include"parts/section_2.php"?>
</section>

<!--�������-->
<section class="section_9">
	<?php if ( have_posts() ) : ?>


<h2 class="wow fadeInUpBig">
<?php printf( single_cat_title( '', false )); ?></h2>


		<?php /* The loop */ ?>
		<?php while ( have_posts() ) : the_post(); ?>
			<?php get_template_part( 'content', get_post_format() ); ?>
		<?php endwhile; ?>

		<?php twentythirteen_paging_nav(); ?>

	<?php else : ?>
		<?php get_template_part( 'content', 'none' ); ?>
	<?php endif; ?>


</section>

<section class="section_8">
	<?php include"parts/footer.php"?>
</section>

<!--������ ������-->
<section class="section_11">
	<?php include"parts/popap.php"?>
</section>



<?php get_sidebar(); ?>
<?php get_footer(); ?>
