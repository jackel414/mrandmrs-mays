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
});