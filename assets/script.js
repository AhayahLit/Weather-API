let lat= "latitude";
let long= "longitude";

let weather = {
    apiKey: "ddca40accecca93e8c08c9f732720dec",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
             + city
             + "&units=metric&appid=" 
             + this.apiKey
             );
    },
    fetchWeather: function(city) {
    apiKey: "ddca40accecca93e8c08c9f732720dec",
             fetch(
            "http://api.openweathermap.org/geo/1.0/reverse?lat=51.5098&lon=-0.1180&limit=5&appid="
            + lat
            + "&limit="
            + long
            + this.apiKey 
            )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
             },

    displayWeather: function(data) {
        console.log(data);
        const {name} = data;
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        const {long}= data.longitude;
        const {lat}= data.latitude;

        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".temp").innerText = temp;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed " + speed + "mph";
        document.querySelector(".weather").classList.remove("loading");
        document.querySelector(".latitude").innerText = lat; 
        document.querySelector(".longitude").innerText= long; 
    }   
};
// function search(city) {
//     this.featchWeather(document.querySelector(".search-bar").value);
// }
document.querySelector("button")
.addEventListener("click", function (){
    var searchValue = document.querySelector("input");
    console.log(searchValue.value);
    if (searchValue.value == "") { 
    alert("Please Enter a City");
    }  
    weather.fetchWeather(searchValue.value); 
})
// document.querySelector(".search-bar")
// .addEventListener("keyup", function(event) {
//     if (event.key == "enter"); {
//         weather.search;
//     }

// })
//weather.fetchWeather();