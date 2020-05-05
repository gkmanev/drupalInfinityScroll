Code description:

1. I set up drupal 7 web site as follow:
- Install bootstrap theme and made custom theme called testtasks - sites/all/themes
- Create custom content type called infinity. It have title and body fields. 
- Create custom module called infinity_scheme - sites/all/modules/custom. In this module i use drupal - hook_schema() to create new db table called infinity_scheme. I use this table to save the new articles from type infinity. I made simple condition for that in infinity_scheme.module. After that i made 10 nodes of type infinity

2. I create template for a front page of the site - page--front.tpl.php in sites/all/themes/testtasks/templates
- In that file i create db query for one article. I used join in the query because the node title is in my custom table infinity_scheme and the node - body is in table called field_data_body. (The both tables share node id in their nid and entity_id columns). After that i used foreach statement to get the node title and body.
- In that template i used "input" of type hidden with id="pageno" (from page number) with initial value of 1. This is a simple page counter that i use later in the infinity scroll code.
- I made second custom module called "myajax" - sites/all/modules/custom. In the myajax.module - first i used drupal hook_menu() to define a path - ajax/scroll in drupal system. I use this url in the ajax request. In that file i made a callback function - myajax_get_data().
In this function i used POST to get the "pageno" variable that is sent via ajax POST.
After this i used this variable to define the offset and limit for the next db select query. After this i use foreach statement to get node title, body and ids.
- (At the bottom of this file i use SERVER super global to get visitors info (url, ip, browser, date) and insert them to custom table)
- Create myajax.js - (sites/all/themes/testtasks/js) file and include it in the front page via drupal's add_js function.
In that file i use javascript windows.scroll function to detect when the user scrolling the page. I create variable called nextPage (used to get the current value of the hidden input - id and add 1 to it). In the $.ajax i make request to the previously created url - /ajax/scroll. Also i used POST to send the pageno variable (it is equal to the nextPage value). Also i .append the data to the div with id = "response". Also in the script i used ga function to send the current page to google analytics (This needed for next task).

3. I create google analitycs account (credentials are in the email that i sent). You can check realtime content visitors and you'll see that if you scroll down - the current page is shown in the analytics.

4. I create third custom module called user_scheme. In the file user_scheme.install i use hook_schema() function to create new db table with fields - ip, url, browser and timestamp. 
In file user_scheme.module i done as follow:
- I used drupal's hook_menu() function to define path user/info. (i will use it for the page that will display visitors data).
- In the callback function function user_scheme_get_user_info() i use db query to get the visitors info.
- I used drupal's hook_theme() function to define a template for the page that will display the visitors data. This template is called user-scheme.tpl.php and is located in the folder of that module.

Regards,
Georgi











