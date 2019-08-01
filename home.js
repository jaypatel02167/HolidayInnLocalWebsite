$(document).ready(function() {//JS waits for html to load fully
	$('body').hide();//hides the body at first
	$('body').fadeIn('slow');//slowly fades in page

	//ajax request to another site
	$.ajax({
    type:"get",
    url: "https://api.openweathermap.org/data/2.5/weather?q=Concord&units=imperial&APPID=6f54389e55bfe2af7873454c477ee533",
    dataType:"jsonp",
    success:function(data){
      var weather = showData(data);
      $("#weatherInfo").html(weather);
      var icon = data.weather[0].icon;
      var iconLink = "https://openweathermap.org/img/w/" + icon + ".png";
      $("#weatherIcon").attr("src", iconLink);
    }
  });

function showData(data){
  return "<h4>" + data.weather[0].main + "</h4>" +
         "<h3>Temperature: " + data.main.temp + "&deg;F</h3>";
}

});
