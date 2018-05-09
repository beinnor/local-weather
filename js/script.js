const locationOutput = document.getElementById("location");
const weatherOutput = document.getElementById("weather");
const windSpeedOutput = document.getElementById("windSpeed");
const windDirectionOutput = document.getElementById("windDirection");
const temperatureOutput = document.getElementById("temperature");
const humidityOutput = document.getElementById("humidity");
const weatherText = document.getElementById("weatherText");
let temperatureFormat = "celsius";
let beaufort = 0;

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
  locationOutput.innerHTML = `<p>${weather.name}, ${getCountryName(weather.sys.country)}</p>`;

  weatherOutput.innerHTML = `<p>${iconMap[weather.weather[0].id]}</p>`;

  windSpeedOutput.innerHTML = `<p><i class="wi wi-wind-beaufort-${getBeaufort(weather.wind.speed)}"></i></p>`;
  windDirectionOutput.innerHTML = `<p><i class="wi wi-wind towards-${weather.wind.deg}-deg"></i></p>`;

  temperatureOutput.innerHTML = `<p>${weather.main.temp} <i class="wi wi-${temperatureFormat}"></i></p>`;
  humidityOutput.innerHTML = `<p>${weather.main.humidity} <i class="wi wi-humidity"></i></p>`;

  weatherText.innerHTML = `<p>${weather.weather[0].main}, ${weather.weather[0].description}, temperature ${weather.main.temp}&#8451;, humidity ${weather.main.humidity}%,
    wind ${weather.wind.speed} m/s from ${degreesToCardinal(weather.wind.deg)}.`;
}

function getBeaufort(speed) {
  if (speed >= 32.7) {
    return 12;
  }
  if (speed >= 28.5) {
    return 11;
  }
  if (speed >= 24.5) {
    return 10;
  }
  if (speed >= 20.8) {
    return 9;
  }
  if (speed >= 17.2) {
    return 8;
  }
  if (speed >= 13.9) {
    return 7;
  }
  if (speed >= 10.8) {
    return 6;
  }
  if (speed >= 8) {
    return 5;
  }
  if (speed >= 5.5) {
    return 4;
  }
  if (speed >= 3.4) {
    return 3;
  }
  if (speed >= 1.6) {
    return 2;
  }
  if (speed >= 0.3) {
    return 1;
  }
  if (speed < 0.3) {
    return 0;
  }
}




getLocation();