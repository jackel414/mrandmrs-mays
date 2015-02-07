$(function() {
  var form = $('#ajax-song');
  var formMessages = $('#form-messages');

	$(form).submit(function(event) {
	  event.preventDefault();
	  var formData = $(form).serialize();
		
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		}).done(function(response) {
			$(formMessages).removeClass('has-error');
			$(formMessages).addClass('text-success');
			$(formMessages).text(response);

			$('#song_name').val('');
			$('#requestor').val('');
		}).fail(function(data) {
			$(formMessages).removeClass('text-success');
			$(formMessages).addClass('has-error');

			if (data.responseText !== '') {
			  $(formMessages).text(data.responseText);
			} else {
			  $(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});
	});
});