const locationOutput = document.getElementById("location");
const weatherOutput = document.getElementById("weather");
const windOutput = document.getElementById("wind");
const temperatureOutput = document.getElementById("temperature");
const humidityOutput = document.getElementById("humidity");

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
  locationOutput.innerHTML = `<p>${weather.name}, ${weather.sys.country}</p>`;

  weatherOutput.innerHTML = `<p>${weather.weather[0].main}</p>
    <img src="${weather.weather[0].icon}">`;


  windOutput.innerHTML = `<p>Windspeed: ${weather.wind.speed}, Direction: ${weather.wind.deg}`;
  temperatureOutput.innerHTML = `<p>${weather.main.temp} celcius</p>`;
  humidityOutput.innerHTML = `humidity: ${weather.main.humidity}`;
}

getLocation();
