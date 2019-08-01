$(document).ready(function() {//JS waits for html to load fully
	$('body').hide();//hides the body at first
	$('body').fadeIn('slow');//slowly fades in page

	//star raiting function
	$(function(){
		$('#better-rating-form').betterRating();
	});

	/**
		This is the date picker function for the date picker UI widget
	*/
	$( function() {
		var dateFormat = "mm/dd/yy",
		from = $( "#from" )
		.datepicker({
			defaultDate: "+1w",
			changeMonth: true,
			numberOfMonths: 3
		})
		.on( "change", function() {
			to.datepicker( "option", "minDate", getDate( this ) );
		}),
		to = $( "#to" ).datepicker({
			defaultDate: "+1w",
			changeMonth: true,
			numberOfMonths: 3
		})
		.on( "change", function() {
			from.datepicker( "option", "maxDate", getDate( this ) );
		});

		function getDate( element ) {
			var date;
			try {
				date = $.datepicker.parseDate( dateFormat, element.value );
			} catch( error ) {
				date = null;
			}

			return date;
		}
	} );

	/**
			Adds an review when the user clicks the submit button
	*/
	$("#submit").click(function(){
		alert("Your review has been added!");
		var name = document.form.name.value;
		var textArea= document.form.textArea.value;
		var rating= document.form.rating.value;

		var el = document.getElementById("reviewDIV");
		var nameEl = document.createElement('h2');
		var textR = document.createElement('p');
		var ratingStar = document.createElement('p');
		var endline = document.createElement('p');

		nameEl.appendChild(document.createTextNode(name));
		ratingStar.appendChild(document.createTextNode(rating + ' Stars'));
		textR.appendChild(document.createTextNode(textArea));
		endline.appendChild(document.createTextNode('-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------'));

		el.appendChild(nameEl);
		el.appendChild(ratingStar);
		el.appendChild(textR);
		el.appendChild(endline);

		el.insertBefore(newEl, null);

	});
});
