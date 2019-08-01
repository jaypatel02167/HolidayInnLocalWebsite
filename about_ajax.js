$(document).ready(function() {//JS waits for html to load fully
	$('body').hide();//hides the body at first
	$('body').fadeIn('slow');//slowly fades in page

  /**
    This function getse the information from the about.json file and appends it
    to the div with the id aboutme
  */
  $.getJSON("about.json", function(data) {
    $.each(data, function() {
      $.each(this, function(key, value) {
        $("#aboutme").append(
          "<img src=" + value.image + "><br>" +
          "Name: " + value.name + "<br>" +
          "Title: " + value.title + "<br>" +
          "Bio: " + value.bio + "<br><br>"
        );
      });
    });
  });
});
