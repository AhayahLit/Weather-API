let weather = {
    apiKey: "ddca40accecca93e8c08c9f732720dec",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
             + longitude
             + latitude 
             + "&units=metric&appid=" 
             + this.appKey
        )
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
    displayWeather: function(data) {

    }
};