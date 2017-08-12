$(document).ready(function () {
	$.ajax({
	  type: 'GET',
	  url: 'https://cors-anywhere.herokuapp.com/https://api.btcxindia.com/ticker_hour/',
	  crossDomain: true,
	  dataType: 'json',
	  success: function(data) {
	    $('#main_inr').append(data.ask);
	  }
	});
});