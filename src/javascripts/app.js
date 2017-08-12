$.ajax({
    type: 'GET',
    url: 'https://cors-anywhere.herokuapp.com/https://api.btcxindia.com/ticker_hour/',
    crossDomain: true,
    dataType: 'json',
    async: 'true',
    error: function() {
        $('#main_inr').replaceWith("Server down. Try Later");
    },
    success: function(data) {
        $('#main_inr').replaceWith(data.ask);
        var time = new Date(data.last_traded_time),
            h = time.getHours(),
            m = time.getMinutes(),
            d = time.getDate(),
            mo = time.getMonth(),
            y = time.getFullYear(),
            mo = mo + 1;
        $('#main_time').replaceWith("as of " + h + ":" + m + ", " + d + "-" + mo + "-" + y + ".");
    }
});
