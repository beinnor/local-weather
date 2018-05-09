const locationOutput = document.getElementById("location");
const weatherOutput = document.getElementById("weather");
const windSpeedOutput = document.getElementById("windSpeed");
const windDirectionOutput = document.getElementById("windDirection");
const temperatureOutput = document.getElementById("temperature");
const humidityOutput = document.getElementById("humidity");
const weatherText = document.getElementById("weatherText");
let metricToggleBtn = document.getElementById("toggleMetricBtn");

let weather = {
  city: null,
  countryName: null,
  longitude: null,
  latitude: null,
  format: "celsius",
  weatherId: null,
  weatherDesc: null,
  temperature: null,
  humidity: null,
  windSpeed: null,
  windDirection: null,
  weatherText: null
};



function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, showError);
  } else {
    // TODO: user has to be able to manually select location
    locationOutput.innerHTML = "Geolocation not supported by browser.";
  }
}

function success(position) {

  weather.longitude = position.coords.longitude;
  weather.latitude = position.coords.latitude;

  getWeatherFromAPI();
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      weatherText.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      weatherText.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      weatherText.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      weatherText.innerHTML = "An unknown error occurred."
      break;
  }
}


function getWeatherFromAPI() {
  let xhr = new XMLHttpRequest();
  let endPoint = `https://fcc-weather-api.glitch.me/api/current?lon=${weather.longitude}&lat=${weather.latitude}`;
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status == 200) { // if success
        let weatherUgly = JSON.parse(xhr.responseText);
        weather.city = weatherUgly.name;
        weather.countryName = getCountryName(weatherUgly.sys.country);
        weather.weatherId = weatherUgly.weather[0].id;
        weather.weatherDesc = weatherUgly.weather[0].description,
          weather.temperature = weatherUgly.main.temp;
        weather.humidity = weatherUgly.main.humidity;
        weather.windSpeed = weatherUgly.wind.speed;
        weather.windDirection = weatherUgly.wind.deg;
        writeHTML();
      } else {
        console.log("failed");
      }
    }
  };

  xhr.open("GET", endPoint);
  xhr.send();
}



function writeHTML() {

  let temperature;
  let windSpeed;
  let tempSign;
  let speedSign;
  if (weather.format === "celsius") {
    temperature = weather.temperature;
    windSpeed = weather.windSpeed;
    tempSign = "&#8451;";
    speedSign = "m/s";
  } else {
    temperature = celsiusToFarhenheit(weather.temperature);
    windSpeed = meterSecToMilesHour(weather.windSpeed);
    tempSign = "&#8457;";
    speedSign = "mph";
  }

  locationOutput.innerHTML = `<p>${weather.city}, ${weather.countryName}</p>`;

  weatherOutput.innerHTML = `<p>${iconMap[weather.weatherId]}</p>`;

  windSpeedOutput.innerHTML = `<p><i class="wi wi-wind-beaufort-${getBeaufort(weather.windSpeed)}"></i></p>`;
  windDirectionOutput.innerHTML = `<p><i class="wi wi-wind towards-${weather.windDirection}-deg"></i></p>`;

  temperatureOutput.innerHTML = `<p>${parseInt(temperature)} <i class="wi wi-${weather.format}"></i></p>`;
  humidityOutput.innerHTML = `<p>${weather.humidity} <i class="wi wi-humidity"></i></p>`;

  weatherText.innerHTML = `<p>${weather.weatherDesc}, temperature ${parseInt(temperature)} ${tempSign}, humidity ${weather.humidity}%,
    wind ${windSpeed.toFixed(1)} ${speedSign} from ${degreesToCardinal(weather.windDirection)}`;
}



metricToggleBtn.addEventListener("click", function () {
  if (weather.format === "celsius") {
    weather.format = "fahrenheit";
  } else {
    weather.format = "celsius";
  }

  writeHTML();
});


getLocation();