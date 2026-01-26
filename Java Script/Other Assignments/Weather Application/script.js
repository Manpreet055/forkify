let searchBtn = document.querySelector(".search-btn")
let searchInput = document.querySelector(".search-input")
let currentTemperature = document.querySelector(".temperature")
let cityName = document.querySelector(".city-name")
let wheatherCondition = document.querySelector(".weather-condition")
let weatherIcon = document.querySelector("#icon")
let humidityPercent = document.querySelector("#humidity-percentage")
let windSpeed = document.querySelector("#wind-speed")
let feelsLikeTemp = document.querySelector("#feels-like-temp")

const weatherDescriptions = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    27: "Mostly cloudy",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    61: "Light rain",
    63: "Moderate rain",
    65: "Heavy rain",
    71: "Light snow",
    73: "Moderate snow",
    75: "Heavy snow",
    80: "Rain showers",
    81: "Heavy rain showers",
    82: "Violent rain showers",
    95: "Thunderstorm"
};
const weatherIcons = {
    0: "fa-sun",                 // Clear sky
    1: "fa-cloud-sun",           // Mainly clear
    2: "fa-cloud-sun",           // Partly cloudy
    3: "fa-cloud",               // Overcast
    27: "fa-cloud",              // Mostly cloudy
    45: "fa-smog",               // Fog
    48: "fa-smog",               // Depositing rime fog
    51: "fa-cloud-rain",         // Light drizzle
    53: "fa-cloud-rain",         // Moderate drizzle
    55: "fa-cloud-showers-heavy",// Dense drizzle
    61: "fa-cloud-showers-heavy",// Light rain
    63: "fa-cloud-showers-heavy",// Moderate rain
    65: "fa-cloud-showers-heavy",// Heavy rain
    71: "fa-snowflake",          // Light snow
    73: "fa-snowflake",          // Moderate snow
    75: "fa-snowflake",          // Heavy snow
    80: "fa-cloud-showers-heavy",// Rain showers
    81: "fa-cloud-showers-heavy",// Heavy rain showers
    82: "fa-bolt",               // Violent rain showers
    95: "fa-bolt"                // Thunderstorm
};



const getWeatherUpdate = async()=>{
    try {
        let userInput = document.querySelector(".search-input").value.trim();
    if (!userInput) {
        alert("Please enter a city name");
        return;
    }
    let geoCode = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${userInput}&count=1`)
    const data = await geoCode.json()
    if (!data.results) {
        alert("City not found");
        return;
    }
    if (data.results[0].feature_code === "PCLI") {
        alert("Please enter a city name, not a country.")
        return;
    }
    let {latitude, longitude, name, country} = data.results[0]

    let weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=apparent_temperature,relative_humidity_2m&current_weather=true&timezone=auto`)

    let weatherData = await weatherResponse.json()
    
    const currentTime = weatherData.current_weather.time;
    const currentHour = currentTime.slice(0, 13)

    const timeIndex = weatherData.hourly.time.findIndex(
        t => t.startsWith(currentHour)
    );

    if (timeIndex === -1) {
    console.log("Current hour not found in hourly data");
    return;
    }

    const feelsLike = weatherData.hourly.apparent_temperature[timeIndex];
    const {temperature, windspeed} = weatherData.current_weather
    const humidity = weatherData.hourly.relative_humidity_2m[timeIndex];
    const weathercode = weatherData.current_weather.weathercode
    const description = weatherDescriptions[weathercode]
    const icon = weatherIcons[weathercode]

    humidityPercent.textContent = humidity+"%";
    windSpeed.textContent = windspeed+" km/h";
    feelsLikeTemp.textContent = feelsLike+"°";
    currentTemperature.textContent = temperature+"°"
    wheatherCondition.innerHTML = description
    cityName.innerHTML = `${name}, ${country}`
    weatherIcon.className = `fa-solid ${icon}`


    } catch (error) {
        console.log(error)
        
    }
}

searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        getWeatherUpdate();
    }
});

searchBtn.addEventListener("click", getWeatherUpdate)