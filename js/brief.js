$(document).ready(function() {

	//E-mail Ajax Send
	$("#brief-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../php/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо за заявку! Менеджер свяжется с Вами в ближайшее время!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});