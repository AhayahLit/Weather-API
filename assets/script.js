let weather = {
    apiKey: "ddca40accecca93e8c08c9f732720dec",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
             + city
             + "&units=metric&appid=" 
             + this.appKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const {name} = data;
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        document.querySelector(".city").innerText = "Weather in" + name;
        document.querySelector(".descripion").innerText = desctiption;
        document.querySelector(".temp").innerText = temp;
        document.querySelector(".humidity").innerText = "Humidity:" + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed" + speed + "mph";
        document.querySelector(".weather").classList.remove("loading");
    }   
};
search: function (city) {
    this.featchWeather(document.querySelector(".search-bar").value);
}
document.querySelector(".search-button")
.addEventListener(".click", function (){
    weather.search(); 
})
document.querySelector(".search-bar")
.addEventListener("keyup", function(event) {
    if (event.key == "enter"); {
        weather.search;
    }

})
weather.fetchWeather(Hollywood);