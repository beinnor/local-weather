const locationOutput = document.getElementById("location");
const weatherOutput = document.getElementById("weather");
const windSpeedOutput = document.getElementById("wind_speed");
const windDirectionOutput = document.getElementById("wind_direction");
const temperatureOutput = document.getElementById("temperature");
const humidityOutput = document.getElementById("humidity");
const toggleBtn = document.getElementById("toggle");

let longitude = 0;
let latitude = 0;
let weather = 0;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, showError);
  } else {
    // TODO: user has to be able to manually select location
    locationOutput.innerHTML = "Geolocation not supported by browser.";
  }
}

function success(position) {

  longitude = position.coords.longitude;
  latitude = position.coords.latitude;

  getWeatherFromAPI();
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      locationOutput.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      locationOutput.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      locationOutput.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      locationOutput.innerHTML = "An unknown error occurred."
      break;
  }
}


function getWeatherFromAPI() {
  let xhr = new XMLHttpRequest();
  let endPoint = `https://fcc-weather-api.glitch.me/api/current?lon=${longitude}&lat=${latitude}`;
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status == 200) { // if success
        weather = JSON.parse(xhr.responseText);
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
  locationOutput.innerHTML = `<p>${weather.name}, ${weather.sys.country}</p><p class="more_info">${longitude} ${latitude}</p>`;

  weatherOutput.innerHTML = `<p>${icon_map[weather.weather[0].id]}</p> <p class="more_info">${weather.weather[0].main}</p>`;


  windSpeedOutput.innerHTML = `<p>Windspeed: ${weather.wind.speed}</p>`;
  windDirectionOutput.innerHTML = `<p>Direction: ${weather.wind.deg}</p>`;

  temperatureOutput.innerHTML = `<p>${weather.main.temp} celcius</p>`;
  humidityOutput.innerHTML = `<p>humidity: ${weather.main.humidity}</p>`;

  console.log(icon_map[weather.weather[0].id]);
  console.log(weather.weather[0].id);
}

getLocation();
