const apiKey = "306cba98287d314de60d34d0e1c10474";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
let isMainExpanded = false;


async function getWeatherData() {
    let city = document.getElementById("city-input").value;
    const response = await fetch(apiUrl + `&appid=${apiKey}&q=${city}`);
    var data = await response.json();
    console.log(data);

    if (city.toLowerCase() == data.name.toLowerCase()) {
        let weatherStatus = data.weather[0].main;
    
        if (weatherStatus == "Clear") {
            document.getElementById("weather-status").src = "assets/clear.png"
        } else if (weatherStatus == "Clouds") {
            document.getElementById("weather-status").src = "assets/clouds.png"
        } else if (weatherStatus == "Drizzle") {
            document.getElementById("weather-status").src = "assets/drizzle.png"
        } else if (weatherStatus == "Mist") {
            document.getElementById("weather-status").src = "assets/mist.png"
        } else if (weatherStatus == "Rain") {
            document.getElementById("weather-status").src = "assets/rain.png"
        } else if (weatherStatus == "Snow") {
            document.getElementById("weather-status").src = "assets/snow.png"
        }
    
        document.getElementById("temp").innerHTML = Math.floor(data.main.temp) + "°c";
        document.getElementById("city").innerHTML = data.name;
        document.getElementById("humidity-value").innerHTML = data.main.humidity + "%";
        document.getElementById("wind-speed-value").innerHTML = data.wind.speed + "km/h";
    
        if (!isMainExpanded) {
            document.getElementById("main").style.visibility = "visible";
            document.getElementById("main").classList.toggle("expanded");
            isMainExpanded = true;
        }
        
    } else {
        document.querySelector(".error").style.display = "block";
    }
    }
   
