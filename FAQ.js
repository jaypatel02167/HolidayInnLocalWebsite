$(document).ready(function() {//JS waits for html to load fully
	$('body').hide();//hides the body at first
	$('body').fadeIn('slow');//slowly fades in page

	var acc = document.getElementsByClassName("accordion");//gets the element by the class name accordion and stores it in acc
	var i;//new varible i

	/**
		Either shows or hides the answer to the question
		depending on when it is clicked
	*/
	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function() {
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			if (panel.style.display === "block") {
				panel.style.display = "none";
			} else {
				panel.style.display = "block";
			}
		});
	}

});
