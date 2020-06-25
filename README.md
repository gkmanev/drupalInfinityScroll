Code description:

Drupal 7 Custom Infinity Scroll Module using PHP and Ajax
This module implements infinity scroll functionality for custum content published via drupal admin panel. This custom content has two fields – title and body.

1. Create custom module called infinity_scheme – custom/infinity_scheme. In this module i used drupal - hook_schema() to create new db table called infinity_scheme. I used this table to save the titles of the articles (from type infinity).
2. I create template for a front page of the site – custom/page--front.tpl.php. (Because the infinity scroll need to be used in the front page)
- In that file i create db query for one article. I used join in the query because the node title is at my custom table infinity_scheme and the node - body is at the table called field_data_body. (The both tables share node id in their nid and entity_id columns). 
In that template i used "input" of type hidden with id="pageno" (from page number) with initial value of 1. This is a simple page counter that i use later in the infinity scroll code.
- I made second custom module called "myajax" – custom/myajax. In the myajax.module - first i used drupal hook_menu() to define a path - ajax/scroll in drupal system. I use this url in the ajax request. In that file i made a callback function - myajax_get_data().
- In this function i used POST to get the "pageno" variable that is sent via ajax POST.
- I used this variable to define the offset and limit for the next db select query. 
- Create myajax.js - (custom/myajax/myajax.js). In that file i used javascript windows.scroll function to detect when the user scrolling the page. I create variable called nextPage (used to get the current value of the hidden input - id and add 1 to it). In the $.ajax i make request to the previously created url - /ajax/scroll. Also i used POST to send the pageno variable (it is equal to the nextPage value). Also i .append the data to the div with id = "response". 





















