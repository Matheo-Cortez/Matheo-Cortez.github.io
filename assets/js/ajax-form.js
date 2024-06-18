$(function() {

	// Obtenir le formulaire.
	var form = $('#contact-form');

	// Obtenir la div des messages.
	var formMessages = $('.ajax-response');

	// Configurer un écouteur d'événement pour le formulaire de contact.
	$(form).submit(function(e) {
		// Empêcher le navigateur de soumettre le formulaire.
		e.preventDefault();

		// Sérialiser les données du formulaire.
		var formData = $(form).serialize();

		// Soumettre le formulaire en utilisant AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Assurez-vous que la div formMessages a la classe 'success'.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Définir le texte du message.
			$(formMessages).text(response);

			// Effacer le formulaire.
			$('#contact-form input,#contact-form textarea').val('');
		})
		.fail(function(data) {
			// Assurez-vous que la div formMessages a la classe 'error'.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Définir le texte du message.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oups ! Une erreur est survenue et votre message n\'a pas pu être envoyé.');
			}
		});
	});

});
