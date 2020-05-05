<?php

/**
 * @file
 * Bootstrap sub-theme.
 *
 * Place your custom PHP code in this file.
 */


	function testtasks_preprocess_page(&$vars, $hook) {
  if (isset($vars['node']->type)) {
    // If the content type's machine name is "my_machine_name" the file
    // name will be "page--my-machine-name.tpl.php".
    $vars['theme_hook_suggestions'][] = 'page__' . $vars['node']->type;
  }
  if(drupal_is_front_page()) {
    drupal_add_js(drupal_get_path('theme', 'testtasks') . '/js/myajax.js');
  }
  
}

/*
	function myajax_init() {

   if(drupal_is_front_page()) {
   drupal_add_js(drupal_get_path('module', 'myajax') . '/myajax.js', array('scope' => 'footer'));
   }   
 }
 */