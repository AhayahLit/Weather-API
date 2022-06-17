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
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather in" + name;
        document.querySelector(".descripion").innerText = desctiption;
        document.querySelector(".temp").innerText = temp;
        document.querySelector(".humidity").innerText = "Humidity:" + humidity + "%";

    }
};