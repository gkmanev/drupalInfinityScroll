(function ($) {
  Drupal.behaviors.ajax_example = {
    attach:function (context) {
		
		var win = $(window);
      win.scroll(function() {
		         if($(window).scrollTop() + $(window).height() >= $(document).height()) {
                 var nextPage = parseInt($('#pageno').val())+1;

                   loadMoreData(nextPage);
                 }
               });

     function loadMoreData(nextPage) {

        $.ajax({
          type: 'POST',
          url: '/ajax/scroll',
          data: { pageno: nextPage },
		  beforeSend: function()
                {
                    $('#loader').show();
                },
          success: function(data) {
            if(data != ''){
                $('#response').append(data);
                $('#pageno').val(nextPage);
				$('#loader').hide();
                
				var fake_page = "?page=" + nextPage;
                history.pushState(null, null, fake_page);
				
				ga('send', 'pageview', fake_page);
				//console.log(fake_page);
            }

          }
        });
      }

    }
  }
 
})(jQuery);

