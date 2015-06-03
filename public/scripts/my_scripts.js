$(function() {
  var rsvpForm = $('#ajax-rsvp');
  var rsvpText = $('#rsvp_text');
  var rsvpResponse = $('#rsvp_response');
  var rsvpResponseText = $('#rsvp_response_text');

  var songForm = $('#ajax-song');
  var songText = $('#song_text');
  var songResponse = $('#song_response');
  var songResponseText = $('#song_response_text');

  $(rsvpForm).submit(function(event) {
  	event.preventDefault();
  	var rsvpFormData = $(rsvpForm).serialize();

  	$.ajax({
  		type: 'POST',
  		url: $(rsvpForm).attr('action'),
  		data: rsvpFormData

  	}).done(function(response) {
  		$(rsvpForm).hide();
  		$(rsvpText).hide();
  		$(rsvpResponse).show();
  		$(rsvpResponseText).text(response);

  	}).fail(function(data) {
  		$(rsvpResponse).show();  		
			if (data.responseText !== '') {
			  $(rsvpResponseText).text(data.responseText);
			} else {
			  $(rsvpResponseText).text('Oops! An error occured and your message could not be sent.');
			} 
  	});
  });

	$(songForm).submit(function(event) {
	  event.preventDefault();
	  var songFormData = $(songForm).serialize();
		
		$.ajax({
			type: 'POST',
			url: $(songForm).attr('action'),
			data: songFormData
		}).done(function(response) {
			$(songForm).hide();
			$(songText).hide();
			$(songResponseText).text(response);
			$(songResponse).show();


			$('#song_name').val('');
			$('#requestor').val('');
		}).fail(function(data) {
  		$(songResponse).show();  		
			if (data.responseText !== '') {
			  $(songResponseText).text(data.responseText);
			} else {
			  $(songResponseText).text('Oops! An error occured and your message could not be sent.');
			}
		});
	});

	$('#anotherSong').click(function(event) {
		event.preventDefault();
		$(songResponse).hide();
		$(songForm).show();
	});

	$('#dietary_restriction').change(function() {
		$('#dietary_restriction_box').toggle();
	})
	
	$(".nav li a").click(function() {
    	$(this).closest("ul").find("a").removeClass("active");
    	$(this).addClass("active");
	});
	
    // Using default configuration
    $('#carousel').carouFredSel();

    // Using custom configuration
    $('#carousel').carouFredSel({
        items                : 4,
        direction            : "left",
        scroll : {
            items            : 1,
            easing            : "elastic",
            duration        : 1000,
            pauseOnHover    : true
        }
    });
    
    /*
    $('#carousel').carouFredSel({
        circular: true,            // Determines whether the carousel should be circular.
        infinite: true,            // Determines whether the carousel should be infinite. Note: It is possible to create a non-circular, infinite carousel, but it is not possible to create a circular, non-infinite carousel.
        responsive: false,        // Determines whether the carousel should be responsive. If true, the items will be resized to fill the carousel.
        direction: "left",        // The direction to scroll the carousel. Possible values: "right", "left", "up" or "down".
        width: null,            // The width of the carousel. Can be null (width will be calculated), a number, "variable" (automatically resize the carousel when scrolling items with variable widths), "auto" (measure the widest item) or a percentage like "100%" (only applies on horizontal carousels)
        height: null,            // The height of the carousel. Can be null (width will be calculated), a number, "variable" (automatically resize the carousel when scrolling items with variable heights), "auto" (measure the tallest item) or a percentage like "100%" (only applies on vertical carousels)
        align: "center",        // Whether and how to align the items inside a fixed width/height. Possible values: "center", "left", "right" or false.
        padding: null,            // Padding around the carousel (top, right, bottom and left). For example: [10, 20, 30, 40] (top, right, bottom, left) or [0, 50] (top/bottom, left/right).
        synchronise: null,        // Selector and options for the carousel to synchronise: [string selector, boolean inheritOptions, boolean sameDirection, number deviation] For example: ["#foo2", true, true, 0]
        cookie: false,            // Determines whether the carousel should start at its last viewed position. The cookie is stored until the browser is closed. Can be a string to set a specific name for the cookie to prevent multiple carousels from using the same cookie.
        onCreate: null            // Function that will be called after the carousel has been created. Receives a map of all data.
    });
    */
    
    $("#dropdown-root").hover(function(e) {
        e.preventDefault();
        console.log('test');
        $(".sub-menu").fadeToggle(300);
    });


});